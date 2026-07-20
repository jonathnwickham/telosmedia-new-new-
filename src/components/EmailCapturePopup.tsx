import { useEffect, useState } from "react";
import { track, identify, tag } from "@/lib/analytics";

const DELAY_MS = 10000; // fallback: auto-open after this long even if they don't scroll
const SCROLL_TRIGGER = 0.67; // open once they scroll 67% of the page
const SESSION_KEY = "telos_email_popup_seen"; // per-session: don't auto-pop again this session
const SUBSCRIBED_KEY = "telos_email_subscribed"; // permanent: signed up → never show again
const TEASER_KEY = "telos_teaser_dismissed"; // per-session: hid the corner teaser
const TEASER_ELIGIBLE_KEY = "telos_teaser_eligible"; // teaser only appears AFTER popup closed once

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
  const [teaserEligible, setTeaserEligible] = useState(() => {
    try {
      return !!sessionStorage.getItem(TEASER_ELIGIBLE_KEY);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (subscribed) return; // already signed up → never auto-open
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let fired = false;
    let timer: number;

    function reveal() {
      if (fired) return;
      fired = true;
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
      track("Popup Shown"); // opt-in rate denominator
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }

    function onScroll() {
      const pct =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;
      if (pct >= SCROLL_TRIGGER) reveal();
    }

    // Opens on whichever comes first: 67% scroll, or the 10s fallback.
    timer = window.setTimeout(reveal, DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
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

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      // popup closed → the corner teaser is now allowed to appear
      setTeaserEligible(true);
      try {
        sessionStorage.setItem(TEASER_ELIGIBLE_KEY, "1");
      } catch {
        /* ignore */
      }
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
    identify(email); // tie this email to its Clarity session replay
    tag("popup_signup", "true"); // filter recordings by converters

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
      {teaserEligible && !subscribed && !teaserDismissed && !open && (
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

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-[5vh] sm:items-center"
          onClick={() => handleOpenChange(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl border border-border/60 bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              onClick={() => handleOpenChange(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-4 w-4"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {!submitted ? (
              <div className="relative z-10 text-center">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Free case study
                </div>

                <h2 className="mt-4 text-[22px] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:mt-5 sm:text-[26px]">
                  You could be doing{" "}
                  <span className="gradient-text">$1M+ a month</span> with email.
                </h2>

                <p className="mx-auto mt-3 max-w-[340px] text-[14px] leading-relaxed text-muted-foreground sm:text-[14.5px]">
                  We took a prop firm from $200k to $1.7M a month in 16 months. All from email.
                </p>

                <p className="mx-auto mt-2 max-w-[340px] text-[14px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-[14.5px]">
                  Drop your email for the case study, and we'll line up a free audit for your firm.
                </p>

                <form onSubmit={handleSubmit} className="mx-auto mt-5 flex max-w-[360px] flex-col gap-3 sm:mt-6">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourfirm.com"
                    className="w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-left text-[16px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                  {error && (
                    <span className="text-[13px] text-red-500">{error}</span>
                  )}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-primary px-4 py-3 text-[15px] font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Send me the case study
                  </button>
                </form>

                <p className="mt-3 text-center text-[12px] text-muted-foreground/70 sm:mt-4">
                  Prefer to talk?{" "}
                  <a
                    href="#cta"
                    onClick={() => setOpen(false)}
                    className="font-medium text-primary hover:underline"
                  >
                    Book a 30 min call
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
                <h2 className="mt-5 text-[22px] font-semibold tracking-[-0.02em] text-foreground">
                  Check your inbox.
                </h2>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                  Your case study is on its way. Want to skip ahead and talk?{" "}
                  <a
                    href="#cta"
                    onClick={() => setOpen(false)}
                    className="font-medium text-primary hover:underline"
                  >
                    Book a call
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EmailCapturePopup;
