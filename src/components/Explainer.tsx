import { motion } from "framer-motion";
import { Play } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const Explainer = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-[900px] mx-auto text-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs text-primary uppercase tracking-[1.5px] font-semibold mb-5">
            ✦ How It Works
          </span>
          <div className="text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-1.5px] leading-[1.12] mb-4 text-foreground">
            See it in action
          </div>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[520px] mx-auto mb-10">
            Watch how we turn underperforming email lists into consistent revenue machines.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer group hover:-translate-y-1 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-primary/5 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-7 h-7 text-primary ml-0.5" />
            </div>
            <span className="text-sm text-muted-foreground font-medium">Video coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Explainer;
