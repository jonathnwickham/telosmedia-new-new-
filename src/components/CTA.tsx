import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fits = [
  "You're doing $1M+ and you know your email channel can do more",
  "You've worked with agencies that ship recycled templates and call it strategy",
  "Your deliverability or sender reputation has slipped and nobody internally can fix it",
  "You want a partner who treats email like a revenue channel, not a checkbox",
  "You're on Klaviyo or Omnisend and want an operator who lives in it daily",
];

const CTA = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  useEffect(() => {
    const node = widgetRef.current;
    if (!node) return;
    if (node.querySelector("iframe")) {
      setCalendarLoaded(true);
      return;
    }
    const observer = new MutationObserver(() => {
      if (node.querySelector("iframe")) {
        setCalendarLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(node, { childList: true, subtree: true });
    const fallback = setTimeout(() => setCalendarLoaded(true), 8000);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section id="cta" className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Ambient blue */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(215 90% 65% / 0.22), transparent 70%)" }}
      />

      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <div className="glass-card mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            30-minute discovery call
          </div>
          <h2 className="mx-auto mt-6 max-w-[760px] text-[clamp(34px,5vw,58px)] font-semibold leading-[1.04] tracking-[-0.03em] text-foreground">
            Let's see if we're{" "}
            <span className="gradient-text">a fit.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-relaxed text-muted-foreground">
            No pitch. We'll look at where your email channel is today, where it
            could be in 90 days, and whether we're the team to get you there. If it makes sense, we'll go and do a full audit after.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[420px_1fr] lg:items-start">
          {/* Who this is for */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card grain rounded-3xl p-8 lg:sticky lg:top-24"
          >
            <div className="relative z-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Who this is for
              </div>
              <h3 className="mt-3 text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground">
                You'll get the most out of this call if you're:
              </h3>

              <ul className="mt-6 flex flex-col gap-3.5">
                {fits.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[14.5px] leading-[1.5] text-foreground/85"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(0 0% 12%), hsl(0 0% 0%))",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>

          {/* Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card overflow-hidden rounded-3xl p-2"
          >
            <div
              ref={widgetRef}
              className="calendly-inline-widget relative overflow-hidden rounded-2xl bg-white"
              data-url="https://calendly.com/jonathan-telosmedia/discovery-call?hide_landing_page_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "720px" }}
            >
              {/* Skeleton — removed once Calendly injects its iframe */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-white via-white to-blue-50/40 transition-opacity duration-300 ${calendarLoaded ? "pointer-events-none opacity-0" : "opacity-100"}`}
              >
                <div
                  className="h-10 w-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary"
                  aria-hidden
                />
                <div className="text-[13px] font-medium text-muted-foreground">
                  Loading calendar…
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
