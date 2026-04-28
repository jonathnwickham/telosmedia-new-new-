import { motion } from "framer-motion";
import case93m from "@/assets/case-9-3m.png";
import popupAlia from "@/assets/popup-alia.png";
import case60day from "@/assets/case-60day.png";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

const caseStudies = [
  {
    image: popupAlia,
    client: "Prop Firm",
    industry: "Fintech",
    headline: "7.8% → 19.3% opt-in",
    sublabel: "Pop-up rebuild on Alia",
    description:
      "Their Klaviyo pop-up was already at 7.8%, which most agencies would call a win. We knew it could do more. We moved them to Alia, rebuilt the offer, and ran tests until opt-in hit 19.3%. More than double the captures off the same traffic.",
    metrics: [
      { value: "2.5x", label: "Opt-in lift" },
      { value: "19.3%", label: "New opt-in rate" },
      { value: "Alia", label: "Pop-up platform" },
    ],
  },
  {
    image: case93m,
    client: "Prop Firm",
    industry: "Fintech",
    headline: "$9.3M in year one",
    sublabel: "From a standing start in February",
    description:
      "Started working together in February. By year-end, email had driven $9.3M. They now sit at $1.6M to $1.7M every month and the curve is still climbing.",
    metrics: [
      { value: "$9.3M", label: "Year-one revenue" },
      { value: "$1.6M+", label: "Monthly run rate" },
      { value: "Feb start", label: "Build began" },
    ],
    caseStudyUrl: "https://canva.link/fvbbj6mkqu64j1l",
  },
  {
    image: case60day,
    client: "Prop Firm",
    industry: "Fintech",
    headline: "$1.17M+ in 60 days",
    sublabel: "Full account refresh",
    description:
      "We came in, revamped the existing flows, added new ones, and reworked campaigns with sharper segmentation. Inside 60 days, attributed revenue lifted 33% and email started driving 58% of total store revenue.",
    metrics: [
      { value: "$1.17M+", label: "Attributed revenue" },
      { value: "+33%", label: "Lift in 60 days" },
      { value: "58%", label: "Of store revenue" },
    ],
  },
];

const Results = () => {
  return (
    <section id="results" className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-20 md:pb-32">
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
            Email, doing what it's{" "}
            <span className="gradient-text">actually supposed to do.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[16px] leading-relaxed text-muted-foreground">
            Real brands, real numbers. Each one built around their offer and their audience, not a template we already had on the shelf.
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
                <div className={`flex items-center p-6 md:p-8 ${i % 2 === 1 ? "md:order-2" : ""}`}>
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

                  {study.caseStudyUrl && (
                    <a
                      href={study.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex h-10 w-fit items-center justify-center gap-1.5 rounded-full px-5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(0 0% 12%) 0%, hsl(0 0% 0%) 100%)",
                        boxShadow:
                          "0 6px 18px -6px hsl(0 0% 0% / 0.35), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
                      }}
                    >
                      Read full case study
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  )}
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
