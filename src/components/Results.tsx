import { motion } from "framer-motion";
import dashboardSummary from "@/assets/dashboard-summary.png";
import dashboardDetailed from "@/assets/dashboard-detailed.png";
import campaignStats from "@/assets/campaign-stats.png";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const results = [
  {
    image: dashboardDetailed,
    caption: "$592K+ total revenue in a single month",
  },
  {
    image: dashboardSummary,
    caption: "$1M+ total revenue — 326% vs. previous period",
  },
  {
    image: campaignStats,
    caption: "42-48% open rates across campaigns",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-28 px-6">
      <div className="max-w-[1140px] mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs text-primary uppercase tracking-[1.5px] font-semibold mb-5">
            ✦ Results
          </span>
          <div className="text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-1.5px] leading-[1.12] mb-4 max-w-[680px]">
            Real numbers. Real clients. Real revenue.
          </div>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[520px] mb-12">
            Here's a look at the kind of results we deliver for our clients — straight from the dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {results.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative rounded-2xl overflow-hidden border border-[hsl(215_25%_88%/0.15)] bg-[hsl(215_30%_95%/0.06)] backdrop-blur-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Light glass shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215_40%_95%/0.1)] via-transparent to-[hsl(215_40%_90%/0.05)] pointer-events-none" />

              <div className="p-4 md:p-5 relative z-10">
                <div className="rounded-xl overflow-hidden border border-[hsl(215_25%_88%/0.12)] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-foreground/90 leading-snug">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
