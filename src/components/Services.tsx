import { motion } from "framer-motion";
import flowCheckout from "@/assets/flow-checkout.png";
import flowPostpurchase from "@/assets/flow-postpurchase.png";
import campaignStats from "@/assets/campaign-stats.png";
import campaignDesign from "@/assets/campaign-design.png";
import dashboardSummary from "@/assets/dashboard-summary.png";
import dashboardDetailed from "@/assets/dashboard-detailed.png";
import emailDesignTrading from "@/assets/email-design-trading.png";

const services = [
  {
    label: "Automation Flows",
    title: "Convert your visitors into customers. Create an automated retargeting.",
    desc: "We design personalized email flows for each client based on their behavior. Send the right message at the right time.",
    images: [flowCheckout, flowPostpurchase],
  },
  {
    label: "Campaigns",
    title: "Generate engagement and increase your sales. Unmissable Campaigns.",
    desc: "We create campaigns with an incredible design and copy. Build a list of returning customers with offers, educational content and more.",
    images: [campaignStats, campaignDesign],
  },
  {
    label: "Signup Forms",
    title: "Grow your email list. Grow your community. Grow your sales.",
    desc: "We design signup forms that work. Capture emails from your visitors and convert them into customers.",
    images: [emailDesignTrading, dashboardSummary],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const Services = () => {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-[1140px] mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs text-primary uppercase tracking-[1.5px] font-semibold mb-5">
            ✦ Services
          </span>
          <div className="text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-1.5px] leading-[1.12] mb-4 max-w-[680px]">
            Everything your email channel needs to print money
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className={`bg-card border border-border rounded-[14px] grid grid-cols-1 md:grid-cols-2 overflow-hidden hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300 ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className={`p-8 md:p-11 flex flex-col justify-center ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs text-primary uppercase tracking-[1.5px] font-semibold mb-4 w-fit">
                  {service.label}
                </span>
                <h3 className="text-[28px] font-bold tracking-[-0.8px] leading-[1.2] mb-3.5">
                  {service.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[440px] mb-7">
                  {service.desc}
                </p>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-[13px] font-semibold hover:brightness-110 hover:-translate-y-px transition-all w-fit"
                >
                  BOOK NOW →
                </a>
              </div>
              <div className={`flex gap-3 p-5 md:p-7 items-center justify-center bg-[rgba(0,0,0,0.2)] min-h-[280px] md:min-h-[380px] ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                {service.images.map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt={`${service.label} ${j + 1}`}
                    className="h-[160px] sm:h-[200px] md:h-[240px] rounded-xl border border-[rgba(255,255,255,0.06)] shadow-[0_6px_30px_rgba(0,0,0,0.3)] object-contain hover:scale-[1.03] transition-transform"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
