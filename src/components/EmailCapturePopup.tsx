import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// ~18s after landing, once per browser session.
const DELAY_MS = 18000;
const SESSION_KEY = "telos_email_popup_seen";

const EmailCapturePopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = window.setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError("Enter a valid email");
      return;
    }
    setError("");

    // Optimistic: show success immediately, post to Netlify Forms in the
    // background. Submissions land in the Netlify dashboard (Forms tab) and
    // email a notification — no third-party keys needed. The hidden static
    // form named "email-capture" in index.html is what Netlify detects.
    setSubmitted(true);
    const body = new URLSearchParams({
      "form-name": "email-capture",
      email,
    }).toString();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    }).catch(() => {
      /* swallow — user already saw confirmation */
    });
  };

  return (
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
  );
};

export default EmailCapturePopup;
