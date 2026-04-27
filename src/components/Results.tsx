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
    client: "DTC Apparel Brand",
    industry: "E-commerce",
    headline: "From $48K to $592K",
    sublabel: "Monthly email revenue",
    description:
      "Tracking was thin and flows hadn't been touched in 18 months. We rebuilt segmentation, shipped 3 lifecycle flows, and ran a 6-week campaign sprint.",
    metrics: [
      { value: "12.3x", label: "Revenue lift" },
      { value: "46%", label: "Avg. open rate" },
      { value: "34%", label: "Email share" },
    ],
  },
  {
    image: dashboardSummary,
    client: "DTC Wellness",
    industry: "Subscription",
    headline: "$1M+ generated",
    sublabel: "326% YoY revenue growth",
    description:
      "Email was their #4 channel and stuck. We turned it into their #1 revenue driver in two quarters with a fully automated lifecycle and weekly campaign cadence.",
    metrics: [
      { value: "326%", label: "YoY growth" },
      { value: "8% → 34%", label: "Email share of rev" },
      { value: "$1M+", label: "Total attributed" },
    ],
  },
  {
    image: campaignStats,
    client: "Prop Trading",
    industry: "Fintech",
    headline: "12% → 46% open rate",
    sublabel: "Deliverability turnaround",
    description:
      "Inbox placement was below 60% and reputation was tanking. We fixed authentication, cleaned the list, and rebuilt warm-up sends from scratch.",
    metrics: [
      { value: "46%", label: "Avg. open" },
      { value: "98%", label: "Inbox rate" },
      { value: "3.8x", label: "CTR uplift" },
    ],
  },
];

const Results = () => {
  return (
    <section id="results" className="relative px-6 pt-16 pb-24 md:pt-20 md:pb-32">
      {/* Soft blue ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(215 90% 70% / 0.18), transparent 70%)" }}
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
            Case studies
          </div>
          <h2 className="mx-auto mt-6 max-w-[760px] text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            Real brands.{" "}
            <span className="gradient-text">Real revenue.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-relaxed text-muted-foreground">
            A look at what happens when lifecycle email is built like a product, not a side hustle.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="glass-card grain group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative z-10 grid gap-0 md:grid-cols-2">
                {/* Left: image */}
                <div className={`p-6 md:p-8 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/40 shadow-[0_20px_50px_-20px_hsl(215_60%_30%/0.25)]">
                    <img
                      src={study.image}
                      alt={study.headline}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Right: details */}
                <div className="flex flex-col justify-center p-6 md:p-10">
                  {/* Client + industry */}
                  <div className="mb-5 flex items-center gap-2 text-[12px] font-medium text-muted-foreground">
                    <span className="text-foreground">{study.client}</span>
                    <span className="opacity-50">·</span>
                    <span>{study.industry}</span>
                  </div>

                  {/* Headline metric */}
                  <h3 className="text-[clamp(28px,3.4vw,44px)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
                    {study.headline}
                  </h3>
                  <div className="mt-2 text-[14px] uppercase tracking-[0.16em] text-primary/80">
                    {study.sublabel}
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                    {study.description}
                  </p>

                  {/* Supporting metrics */}
                  <div className="mt-7 grid grid-cols-3 divide-x divide-white/60 overflow-hidden rounded-2xl border border-white/60 bg-white/40 backdrop-blur">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="px-3 py-4 text-center">
                        <div className="text-[18px] font-semibold tracking-[-0.02em] text-foreground">
                          {m.value}
                        </div>
                        <div className="mt-1 text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
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
