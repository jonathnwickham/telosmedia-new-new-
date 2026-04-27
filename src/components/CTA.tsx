import { useEffect } from "react";
import { motion } from "framer-motion";

const fits = [
  "Brands doing $1M+ that feel email is leaking revenue",
  "Founders who want a partner, not another vendor",
  "Teams sick of agencies that promise the world and ship templates",
  "Operators who want to maximize LTV, not just blast more sends",
  "Brands ready for a real Klaviyo, Omnisend, or Brevo partner",
];

const CTA = () => {
  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) return;
    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="cta" className="relative px-6 py-24 md:py-32">
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
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-relaxed text-muted-foreground">
            No pitch. We'll look at where your email channel is today, where it
            could be in 90 days, and whether we're the team to get you there.
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
                          "linear-gradient(135deg, hsl(215 95% 58%), hsl(230 85% 58%))",
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

              <div className="mt-8 rounded-2xl border border-white/60 bg-white/40 p-4 text-[13px] leading-[1.5] text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Not the right fit if:
                </span>{" "}
                you're pre-revenue, you want a one-time email design, or you're
                shopping the cheapest agency. We'll save us both the call.
              </div>
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
              className="calendly-inline-widget rounded-2xl"
              data-url="https://calendly.com/jonathan-telosmedia/discovery-call?hide_landing_page_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "720px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
