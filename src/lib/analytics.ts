// Unified client-side event tracking. Every call fans out to both analytics
// tools already on the site: Pirsch (privacy-light traffic + events) and
// Microsoft Clarity (session replays + heatmaps). Both are loaded via <script>
// tags in index.html and expose globals; all calls are best-effort and never
// throw, so a blocked/aborted tracker can't break the UI.

type ClarityFn = (...args: unknown[]) => void;
type PirschFn = (name: string) => Promise<void> | void;

const clarity = () =>
  (window as unknown as { clarity?: ClarityFn }).clarity;
const pirsch = () =>
  (window as unknown as { pirsch?: PirschFn }).pirsch;

/**
 * Fire-and-forget beacon to our own first-party counter (Netlify function).
 * This is what powers the /admin opt-in dashboard, independent of Pirsch/Clarity.
 */
function beacon(name: string) {
  try {
    const body = JSON.stringify({ event: name });
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

/** Fire a named event to Pirsch, Clarity, and our own /admin counter. */
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
