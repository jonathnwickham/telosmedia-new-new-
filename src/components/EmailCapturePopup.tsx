import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const DELAY_MS = 3000; // delay before the popup auto-opens
const SESSION_KEY = "telos_email_popup_seen"; // per-session: don't auto-pop again this session
const SUBSCRIBED_KEY = "telos_email_subscribed"; // permanent: signed up → never show again
const TEASER_KEY = "telos_teaser_dismissed"; // per-session: hid the corner teaser

const track = (name: string) => {
  try {
    (window as unknown as { pirsch?: (n: string) => Promise<void> }).pirsch?.(name);
  } catch {
    /* analytics optional */
  }
};

const EmailCapturePopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(() => {
    try {
      return !!localStorage.getItem(SUBSCRIBED_KEY);
    } catch {
      return false;
    }
  });
  const [teaserDismissed, setTeaserDismissed] = useState(() => {
    try {
      return !!sessionStorage.getItem(TEASER_KEY);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (subscribed) return; // already signed up → never auto-open
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = window.setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
      track("Popup Shown"); // opt-in rate denominator
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, [subscribed]);

  const openFromTeaser = () => {
    setOpen(true);
    track("Teaser Clicked");
  };

  const dismissTeaser = () => {
    setTeaserDismissed(true);
    try {
      sessionStorage.setItem(TEASER_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError("Enter a valid email");
      return;
    }
    setError("");

    // Optimistic: show success immediately, capture in the background.
    setSubmitted(true);
    setSubscribed(true); // hides teaser + stops any future auto-open
    try {
      localStorage.setItem(SUBSCRIBED_KEY, "1");
    } catch {
      /* storage blocked — ignore */
    }

    track("Popup Signup"); // opt-in rate numerator

    // Capture to Netlify Forms (always works, no keys needed).
    const body = new URLSearchParams({
      "form-name": "email-capture",
      email,
    }).toString();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    }).catch(() => {});

    // Also push into Beehiiv (activates once BEEHIIV_API_KEY is set in Netlify).
    fetch("/.netlify/functions/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).catch(() => {});
  };

  return (
    <>
      {/* Corner teaser — shows when the popup is closed, not yet subscribed,
          and not dismissed. Click body = open popup. Click X = hide teaser. */}
      {!subscribed && !teaserDismissed && !open && (
        <div className="fixed bottom-5 left-5 z-40">
          <button
            onClick={openFromTeaser}
            className="flex items-center gap-2.5 rounded-full bg-primary py-3 pl-5 pr-5 text-[14px] font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:scale-[1.03]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Claim Free Audit
          </button>
          <button
            onClick={dismissTeaser}
            aria-label="Dismiss"
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-md transition-opacity hover:opacity-80"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="h-2.5 w-2.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md overflow-hidden rounded-3xl border-border/60 bg-white p-8 shadow-2xl">
          {!submitted ? (
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Free email audit
              </div>

              <DialogTitle className="mt-5 text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
                See what your email's leaving{" "}
                <span className="gradient-text">on the table.</span>
              </DialogTitle>

              <DialogDescription className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                We run email for prop firms doing $40M+ in attributed revenue.
                Drop your email and we'll send a free teardown of what your
                flows, campaigns and deliverability are missing. No strings.
              </DialogDescription>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourfirm.com"
                  className="w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-[15px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
                {error && (
                  <span className="text-[13px] text-red-500">{error}</span>
                )}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-4 py-3 text-[15px] font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send me the audit
                </button>
              </form>

              <p className="mt-4 text-center text-[12px] text-muted-foreground/70">
                Prefer to talk?{" "}
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="font-medium text-primary hover:underline"
                >
                  Book a 30-min call
                </a>
              </p>
            </div>
          ) : (
            <div className="relative z-10 py-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <DialogTitle className="mt-5 text-[22px] font-semibold tracking-[-0.02em] text-foreground">
                You're in.
              </DialogTitle>
              <DialogDescription className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                We'll be in touch shortly with your free audit. Want to skip the
                wait?{" "}
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="font-medium text-primary hover:underline"
                >
                  Book a call
                </a>
                .
              </DialogDescription>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmailCapturePopup;
