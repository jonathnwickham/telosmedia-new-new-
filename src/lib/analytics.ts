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

/** Fire a named event to both Pirsch and Clarity (Clarity "smart event"). */
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
