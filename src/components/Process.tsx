import { motion } from "framer-motion";
import Team from "@/components/Team";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

const steps = [
  {
    num: "01",
    title: "Audit",
    time: "1 to 4 days",
    desc: "We carry out a full ESP audit. We go through your account, get to know your customers, and give you back something you can honestly build anything from. Everything we do after this is built off it.",
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
    time: "5 to 9 days",
    desc: "Then we plan. Knowing your customer, we map out who's opening your emails, engaging with your site, and receiving the right information flow at the right moment. Campaign calendar, automation flows, and sign-up forms, all built around your list.",
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
    desc: "With an actual plan in place, we write the copy first, then build the designs around it, and make sure you're happy with both before anything ships. Once emails start sending, we keep everything running its best, with A/B tests across the account, especially on the pop-up, so more of the right people land on your list.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Monthly Overviews",
    time: "1 to 2 days / mo",
    desc: "Every month you receive a report going over results, plans for the month ahead, and a full sweep of every possible part of the account. Nothing slips through. That's the process.",
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
    <section id="process" className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Ambient blue */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-40 -z-10 h-[500px] w-[700px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(215 95% 65% / 0.18), transparent 70%)" }}
      />

      <div className="mx-auto max-w-[1080px]">
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
            How do we{" "}
            <span className="gradient-text">do it?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[16px] leading-relaxed text-muted-foreground">
            A repeatable system. Four phases, no surprises, every brand we work with goes through it.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting vertical line */}
          <div
            aria-hidden
            className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-9"
          />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
                className="group relative flex gap-6 md:gap-8"
              >
                {/* Icon column */}
                <div
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white md:h-[72px] md:w-[72px]"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(0 0% 12%) 0%, hsl(0 0% 0%) 100%)",
                    boxShadow:
                      "0 8px 20px -8px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
                  }}
                >
                  {step.icon}
                </div>

                {/* Content column */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                      Phase {step.num}
                    </div>
                    <span className="h-px flex-1 bg-border/60" />
                    <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/70 bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-foreground/70">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {step.time}
                    </div>
                  </div>
                  <h3 className="mt-2 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground md:text-[26px]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
            <Team />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
