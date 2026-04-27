import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const pillars = [
  {
    label: "Lifecycle Flows",
    title: "Automated revenue, on autopilot.",
    description:
      "Welcome, abandoned cart, post-purchase, win-back, browse. Built once, optimized forever.",
    bullets: [
      "Personalized by segment + behavior",
      "A/B tested for revenue, not opens",
      "Quarterly creative refreshes included",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M3 12C5 6 9 4 12 4s7 2 9 8c-2 6-6 8-9 8s-7-2-9-8z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Campaigns",
    title: "Sends that drive the week.",
    description:
      "Strategy-led calendar, designed creative, copy that converts. Weekly cadence, monthly reviews.",
    bullets: [
      "Strategy + creative + copy + send",
      "Promo plans, launches, content sends",
      "Reported against revenue, not vanity",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
  {
    label: "Strategy & Infra",
    title: "The system underneath.",
    description:
      "Deliverability, segmentation, attribution, ESP architecture. The work nobody sees but everybody benefits from.",
    bullets: [
      "Inbox placement audits + fixes",
      "Segmentation + tagging architecture",
      "Reporting that ties to real revenue",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "SMS & WhatsApp",
    title: "When the channel fits.",
    description:
      "Some brands win with SMS. Others lean WhatsApp. Some shouldn't run either. We figure out the right mix and only ship what makes you money.",
    bullets: [
      "Channel fit assessment first, not last",
      "Compliant flows + campaign sends",
      "Built into the same lifecycle plan",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="relative px-6 pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Ambient blue glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-20 -z-10 h-[500px] w-[700px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(200 95% 65% / 0.18), transparent 70%)" }}
      />

      <div className="mx-auto max-w-[1140px]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-16 text-center"
        >
          <div className="glass-card mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            What we do
          </div>
          <h2 className="mx-auto mt-6 max-w-[760px] text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            One channel.{" "}
            <span className="gradient-text">Four moving parts.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[16px] leading-relaxed text-muted-foreground">
            Email isn't one job. It's a system. We ship the pieces that compound,
            and only add SMS or WhatsApp where it actually pays back.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="group relative flex flex-col rounded-3xl border border-border/60 bg-white p-10 shadow-[0_2px_4px_-2px_hsl(215_30%_30%/0.06),0_8px_24px_-8px_hsl(215_30%_30%/0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_4px_12px_-4px_hsl(215_60%_40%/0.12),0_20px_50px_-12px_hsl(215_60%_40%/0.18)]"
            >
              {/* Icon */}
              <div
                className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(215 95% 58%) 0%, hsl(220 90% 52%) 60%, hsl(230 85% 58%) 100%)",
                  boxShadow: "0 8px 20px -8px hsl(215 90% 50% / 0.45), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
                }}
              >
                {p.icon}
              </div>

              <div className="relative z-10 mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                {p.label}
              </div>
              <h3 className="relative z-10 text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">
                {p.title}
              </h3>
              <p className="relative z-10 mb-8 mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <ul className="relative z-10 mt-auto flex flex-col gap-3 border-t border-border/60 pt-6">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-foreground/80">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-[3px] h-3.5 w-3.5 shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-14 text-center"
        >
          <a
            href="https://calendly.com/jonathan-telosmedia/discovery-call"
            className="group inline-flex h-12 items-center justify-center gap-1.5 rounded-full px-7 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, hsl(215 95% 58%) 0%, hsl(220 90% 52%) 60%, hsl(230 85% 58%) 100%)",
              boxShadow:
                "0 10px 28px -8px hsl(215 90% 50% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
            }}
          >
            See if we're a fit
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
