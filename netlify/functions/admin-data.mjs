// Password-gated dashboard data for /admin. The password is checked here on the
// server against the ADMIN_PASSWORD env var — it never ships in the browser
// bundle, and no data is returned until it matches. Combines:
//   • funnel counts (views, signups, book-a-call, booked) from Netlify Blobs
//   • the real opt-in email list from Beehiiv (source of truth for identities)
import { getStore } from "@netlify/blobs";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

// Constant-time-ish string compare to avoid trivially timing the password.
const safeEqual = (a, b) => {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) {
    return false;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
};

export default async (req) => {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let email, password;
  try {
    ({ email, password } = await req.json());
  } catch {
    return json({ error: "Bad request" }, 400);
  }

  const expectedPw = process.env.ADMIN_PASSWORD;
  if (!expectedPw) return json({ error: "ADMIN_PASSWORD not configured" }, 500);
  // Email defaults to Jonathan's address; override with ADMIN_EMAIL if needed.
  const expectedEmail = (
    process.env.ADMIN_EMAIL || "jonathan@telosmedia.co"
  ).toLowerCase();

  const emailOk =
    typeof email === "string" && email.trim().toLowerCase() === expectedEmail;
  if (!emailOk || !safeEqual(password, expectedPw)) {
    return json({ error: "Unauthorized" }, 401);
  }

  // --- Funnel counts from first-party Blobs (one JSON doc per day) ---
  const daily = [];
  let sources = {};
  try {
    const store = getStore("popup-metrics");
    const { blobs } = await store.list();
    for (const b of blobs) {
      if (b.key === "sources") continue; // attribution doc, not a daily bucket
      const data = (await store.get(b.key, { type: "json" })) || {};
      daily.push({ date: b.key, ...data });
    }
    daily.sort((a, b) => a.date.localeCompare(b.date));
    sources = (await store.get("sources", { type: "json" })) || {};
  } catch {
    /* store may be empty on a brand-new site — that's fine */
  }

  // Per-channel breakdown: views, signups, and opt-in rate for each source.
  const viewsBy = sources["Popup Shown"] || {};
  const signupsBy = sources["Popup Signup"] || {};
  const bookedBy = sources["Call Booked"] || {};
  const channels = [
    ...new Set([
      ...Object.keys(viewsBy),
      ...Object.keys(signupsBy),
      ...Object.keys(bookedBy),
    ]),
  ];
  const byChannel = channels
    .map((c) => {
      const v = viewsBy[c] || 0;
      const s = signupsBy[c] || 0;
      return {
        channel: c,
        views: v,
        signups: s,
        booked: bookedBy[c] || 0,
        optInRate: v > 0 ? s / v : null,
      };
    })
    .sort((a, b) => b.views - a.views || b.signups - a.signups);

  const sum = (key) => daily.reduce((n, d) => n + (d[key] || 0), 0);
  const views = sum("Popup Shown");
  const signups = sum("Popup Signup");
  const bookClicks = sum("Book A Call Click");
  const booked = sum("Call Booked");

  // --- Real opt-in identities from Beehiiv ---
  let optIns = [];
  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId =
    process.env.BEEHIIV_PUBLICATION_ID ||
    "pub_45394cf1-13c1-4b4c-b64b-5c66d3ff4038";
  if (apiKey) {
    try {
      const res = await fetch(
        `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions?limit=100&order_by=created&direction=desc`,
        { headers: { Authorization: `Bearer ${apiKey}` } },
      );
      if (res.ok) {
        const body = await res.json();
        optIns = (body.data || [])
          .filter((s) => {
            const src = `${s.utm_medium || ""} ${s.acquisition_source || ""}`;
            return src.includes("website_popup");
          })
          .map((s) => ({
            email: s.email,
            status: s.status,
            date: s.created ? new Date(s.created * 1000).toISOString() : null,
          }));
      }
    } catch {
      /* leave optIns empty if Beehiiv is unreachable */
    }
  }

  return json({
    totals: {
      views,
      signups,
      bookClicks,
      booked,
      optInRate: views > 0 ? signups / views : null,
      bookedRate: bookClicks > 0 ? booked / bookClicks : null,
    },
    daily,
    byChannel,
    optIns,
    beehiivCount: optIns.length,
  });
};
