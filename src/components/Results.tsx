import { motion } from "framer-motion";
import dashboardSummary from "@/assets/dashboard-summary.png";
import dashboardDetailed from "@/assets/dashboard-detailed.png";
import campaignStats from "@/assets/campaign-stats.png";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const caseStudies = [
  {
    image: dashboardDetailed,
    headline: "$592K+ in a Single Month",
    description: "Email-driven revenue surge for an e-commerce brand through strategic campaign sequencing.",
    before: { label: "Monthly Email Rev", value: "$48K" },
    after: { label: "Monthly Email Rev", value: "$592K+" },
  },
  {
    image: dashboardSummary,
    headline: "$1M+ Total — 326% Growth",
    description: "Scaling a DTC brand's retention channel from underperforming to their #1 revenue driver.",
    before: { label: "Email Share of Rev", value: "8%" },
    after: { label: "Email Share of Rev", value: "34%" },
  },
  {
    image: campaignStats,
    headline: "42-48% Open Rates",
    description: "Consistent deliverability and engagement across high-volume campaign sends.",
    before: { label: "Avg Open Rate", value: "12%" },
    after: { label: "Avg Open Rate", value: "46%" },
  },
];

const Results = () => {
  return (
    <section id="results" className="py-16 px-6">
      <div className="max-w-[1140px] mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs text-primary uppercase tracking-[1.5px] font-semibold mb-5">
            ✦ Case Studies
          </span>
          <div className="text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-1.5px] leading-[1.12] mb-4 max-w-[680px] text-foreground">
            Real numbers. Real clients. Real revenue.
          </div>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[520px] mb-12">
            Here's a look at the kind of results we deliver — straight from the dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card/80 backdrop-blur-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-primary/5 pointer-events-none" />

              <div className="flex flex-col md:flex-row relative z-10">
                {/* Image */}
                <div className="md:w-1/2 p-5">
                  <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                    <img
                      src={study.image}
                      alt={study.headline}
                      className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{study.headline}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{study.description}</p>

                  {/* Before / After */}
                  <div className="flex gap-4">
                    <div className="flex-1 rounded-xl border border-border bg-background/60 p-4 text-center">
                      <div className="text-[11px] uppercase tracking-[1.5px] text-muted-foreground font-semibold mb-1">Before</div>
                      <div className="text-lg font-bold text-foreground">{study.before.value}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{study.before.label}</div>
                    </div>
                    <div className="flex-1 rounded-xl border border-primary/30 bg-primary/5 p-4 text-center">
                      <div className="text-[11px] uppercase tracking-[1.5px] text-primary font-semibold mb-1">After</div>
                      <div className="text-lg font-bold text-primary">{study.after.value}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{study.after.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
