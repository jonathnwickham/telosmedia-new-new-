// Unified client-side event tracking. Every call fans out to the analytics
// tools already on the site: Pirsch (privacy-light traffic + events),
// Microsoft Clarity (session replays + heatmaps), and the Meta Pixel (only for
// the conversion events listed in META_EVENTS below). All are loaded via
// <script> tags in index.html and expose globals; all calls are best-effort and
// never throw, so a blocked/aborted tracker can't break the UI.

type ClarityFn = (...args: unknown[]) => void;
type PirschFn = (name: string) => Promise<void> | void;
type FbqFn = (...args: unknown[]) => void;

const clarity = () =>
  (window as unknown as { clarity?: ClarityFn }).clarity;
const pirsch = () =>
  (window as unknown as { pirsch?: PirschFn }).pirsch;
const fbq = () => (window as unknown as { fbq?: FbqFn }).fbq;

// Internal event name -> Meta standard event. Only these reach the pixel, so
// ad delivery optimises on real conversions instead of every UI interaction.
// Anything absent here stays internal-only (Pirsch / Clarity / our counter).
const META_EVENTS: Record<string, string> = {
  "Popup Signup": "Lead",
  "Call Booked": "Schedule",
};

function meta(name: string) {
  const standardEvent = META_EVENTS[name];
  if (!standardEvent) return;
  try {
    fbq()?.("track", standardEvent);
  } catch {
    /* analytics optional */
  }
}

// --- First-touch attribution -------------------------------------------------
// Captured the first time a visitor lands and remembered (localStorage) so it
// still describes them when they convert minutes later on a UTM-less URL.
const SOURCE_KEY = "telos_first_touch";

type Source = { channel: string; source: string; landing: string };

function deriveSource(): Source {
  const params = new URLSearchParams(window.location.search);
  const p = (k: string) => (params.get(k) || "").trim();
  const utmSource = p("utm_source");
  const utmMedium = p("utm_medium");
  const utmCampaign = p("utm_campaign");
  const gclid = p("gclid");
  const fbclid = p("fbclid");
  const ref = document.referrer;

  let channel = "direct";
  if (utmSource) channel = utmSource.toLowerCase();
  else if (fbclid) channel = "meta";
  else if (gclid) channel = "google";
  else if (ref) {
    try {
      const host = new URL(ref).hostname.replace(/^www\./, "");
      if (host && host !== window.location.hostname) {
        if (host.includes("linkedin")) channel = "linkedin";
        else if (host.includes("google")) channel = "google";
        else if (host.includes("t.co") || host.includes("twitter") || host.includes("x.com"))
          channel = "twitter";
        else if (host.includes("facebook") || host.includes("instagram")) channel = "meta";
        else channel = host;
      }
    } catch {
      /* malformed referrer — leave as direct */
    }
  }

  // Flag paid clicks so ad-sourced traffic is separable from organic.
  const paid = !!(gclid || fbclid || /cpc|ppc|paid/i.test(utmMedium));
  if (paid && !/paid/i.test(channel)) channel = `${channel} (paid)`;

  const source =
    [utmSource || channel, utmMedium, utmCampaign].filter(Boolean).join(" / ") ||
    channel;
  return { channel: channel.slice(0, 60), source, landing: window.location.pathname };
}

let cachedSource: Source | null = null;
function getSource(): Source {
  if (cachedSource) return cachedSource;
  try {
    const stored = localStorage.getItem(SOURCE_KEY);
    if (stored) {
      cachedSource = JSON.parse(stored) as Source;
      return cachedSource;
    }
    const s = deriveSource();
    localStorage.setItem(SOURCE_KEY, JSON.stringify(s)); // first touch wins
    cachedSource = s;
    return s;
  } catch {
    return deriveSource();
  }
}

/**
 * Fire-and-forget beacon to our own first-party counter (Netlify function).
 * This is what powers the /admin opt-in dashboard, independent of Pirsch/Clarity.
 */
function beacon(name: string) {
  try {
    const body = JSON.stringify({ event: name, channel: getSource().channel });
    const url = "/.netlify/functions/metric";
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
    } else {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    /* analytics optional */
  }
}

/**
 * Fire a named event to Pirsch, Clarity, our own /admin counter, and — for
 * conversion events only — the Meta Pixel.
 */
export function track(name: string) {
  try {
    pirsch()?.(name);
  } catch {
    /* analytics optional */
  }
  try {
    clarity()?.("event", name);
  } catch {
    /* analytics optional */
  }
  meta(name);
  beacon(name);
}

/**
 * Attach an email to the current Clarity session so you can pull up that exact
 * person's replay by searching their email. Clarity hashes the id client-side
 * before it leaves the browser; the friendly name is what shows in the UI.
 */
export function identify(email: string) {
  try {
    clarity()?.("identify", email, null, null, email);
  } catch {
    /* analytics optional */
  }
}

/** Apply a custom tag to the current Clarity session (filterable in the UI). */
export function tag(key: string, value: string) {
  try {
    clarity()?.("set", key, value);
  } catch {
    /* analytics optional */
  }
}

/** Prioritise this session for recording (use on high-value actions). */
export function upgrade(reason: string) {
  try {
    clarity()?.("upgrade", reason);
  } catch {
    /* analytics optional */
  }
}
