import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Phase 1: Audit", time: "1–4 days", desc: "We carry out a Klaviyo audit of your account. We know your customer base and identify them based on their behavior within your brand." },
  { num: "02", title: "Phase 2: Planning", time: "5–9 days", desc: "Knowing your customer community, we create a monthly campaign plan. We develop the necessary automation flows and focus on sign-up forms to grow your list." },
  { num: "03", title: "Phase 3: Launch", time: "Ongoing", desc: "With a developed planning, we create the designs of each email that will be sent in the month. We provide constant maintenance to the flows and create A/B tests for your forms." },
  { num: "04", title: "Phase 4: Monthly Overviews", time: "1–2 days", desc: "Receive monthly reports with results and insights from the strategies. Action plans are developed according to the analyzed results." },
];

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const Process = () => {
  return (
    <section id="process" className="py-28 px-6 bg-surface border-y border-border">
      <div className="max-w-[1140px] mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs text-primary uppercase tracking-[1.5px] font-semibold mb-5">
            ✦ What is the process?
          </span>
          <div className="text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-1.5px] leading-[1.12] mb-4 max-w-[680px] mx-auto">
            How do we do it?
          </div>
          <p className="text-base text-muted-foreground max-w-[520px] mx-auto">
            We have a process designed to make your email experience a unique one.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden mt-12"
        >
          {steps.map((step) => (
            <div key={step.num} className="bg-card p-7 md:p-9 hover:bg-card-hover transition-colors">
              <div className="text-5xl font-bold leading-none mb-5 gradient-text opacity-40">
                {step.num}
              </div>
              <h4 className="text-[17px] font-semibold mb-1">{step.title}</h4>
              <div className="text-xs text-primary font-semibold uppercase tracking-[1px] mb-3">{step.time}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
