import { motion } from "framer-motion";
import rocket from "@/assets/rocket.png";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const steps = [
  {
    num: "01",
    title: "Audit",
    time: "1–4 days",
    desc: "We carry out a full Klaviyo (or Omnisend / Brevo) audit. We learn your customer base, segment by behavior, and identify the leaks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Planning",
    time: "5–9 days",
    desc: "Knowing your customers, we build a monthly campaign plan, develop the necessary automation flows, and design sign-up forms that grow your list.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Launch",
    time: "Ongoing",
    desc: "Designs ship, flows go live, A/B tests start running. We maintain the system and report against revenue, every week.",
    rocket: true,
  },
  {
    num: "04",
    title: "Monthly Overviews",
    time: "1–2 days / mo",
    desc: "Monthly reports tied to revenue. We surface what's working, what isn't, and what we're shipping next.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const Process = () => {
  return (
    <section id="process" className="relative px-6 py-24 md:py-32">
      {/* Ambient blue */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-40 -z-10 h-[500px] w-[700px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(215 95% 65% / 0.18), transparent 70%)" }}
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
            The process
          </div>
          <h2 className="mx-auto mt-6 max-w-[760px] text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            How we{" "}
            <span className="gradient-text">build it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[16px] leading-relaxed text-muted-foreground">
            A repeatable system. Four phases, no surprises, every brand we work with goes through it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="group relative flex flex-col rounded-3xl border border-border/60 bg-white p-8 shadow-[0_2px_4px_-2px_hsl(215_30%_30%/0.06),0_8px_24px_-8px_hsl(215_30%_30%/0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_4px_12px_-4px_hsl(215_60%_40%/0.12),0_20px_50px_-12px_hsl(215_60%_40%/0.18)]"
            >
              {/* Step number background */}
              <div className="pointer-events-none absolute right-6 top-4 text-[64px] font-semibold leading-none tracking-[-0.04em] text-primary/8 select-none">
                {step.num}
              </div>

              {/* Icon */}
              {step.rocket ? (
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center">
                  <img
                    src={rocket}
                    alt="Launch"
                    className="h-14 w-14 object-contain drop-shadow-[0_6px_16px_hsl(215_95%_50%/0.45)]"
                  />
                </div>
              ) : (
                <div
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(215 95% 58%) 0%, hsl(220 90% 52%) 60%, hsl(230 85% 58%) 100%)",
                    boxShadow: "0 8px 20px -8px hsl(215 90% 50% / 0.45), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
                  }}
                >
                  {step.icon}
                </div>
              )}

              {/* Phase label */}
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Phase {step.num}
              </div>
              <h3 className="mt-2 text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">
                {step.title}
              </h3>

              {/* Time badge */}
              <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-border/70 bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-foreground/70">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {step.time}
              </div>

              <p className="mt-5 text-[14.5px] leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
