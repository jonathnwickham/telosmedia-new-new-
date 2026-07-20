// First-party event counter. The site beacons every tracked funnel event here
// (Popup Shown, Popup Signup, Book A Call Click, Call Booked). We tally them
// into one JSON doc per day in Netlify Blobs — no external analytics API and no
// DB to manage. The /admin dashboard reads these buckets to compute opt-in rate.
//
// Volume is low (the popup shows at most once per session), so the read-modify-
// write below is safe; two events landing in the same ~50ms is vanishingly rare.
import { getStore } from "@netlify/blobs";

// Only count events we actually chart — ignore anything else so a stray/spoofed
// beacon can't bloat the store.
const ALLOWED = new Set([
  "Popup Shown",
  "Popup Signup",
  "Teaser Clicked",
  "Book A Call Click",
  "Call Booked",
]);

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let event, channel;
  try {
    ({ event, channel } = await req.json());
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  // Unknown events are silently accepted but not stored (keeps beacons cheap).
  if (!ALLOWED.has(event)) {
    return new Response(null, { status: 204 });
  }

  try {
    const store = getStore("popup-metrics");
    const day = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
    const current = (await store.get(day, { type: "json" })) || {};
    current[event] = (current[event] || 0) + 1;
    await store.setJSON(day, current);

    // Per-channel attribution — kept in a separate "sources" doc so the daily
    // buckets stay clean. Shape: { "<event>": { "<channel>": count } }.
    const chan =
      typeof channel === "string" && channel ? channel.slice(0, 60) : "direct";
    const sources = (await store.get("sources", { type: "json" })) || {};
    sources[event] = sources[event] || {};
    sources[event][chan] = (sources[event][chan] || 0) + 1;
    await store.setJSON("sources", sources);
  } catch {
    // Never let a metrics hiccup surface to the visitor.
    return new Response(null, { status: 204 });
  }

  return new Response(null, { status: 204 });
};
