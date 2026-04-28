import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

const Explainer = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[900px] mx-auto text-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs text-primary uppercase tracking-[1.5px] font-semibold mb-5">
            ✦ Meet the founder
          </span>
          <div className="text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-1.5px] leading-[1.12] mb-4 text-foreground">
            Get to know Jonathan
          </div>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[560px] mx-auto mb-10">
            A recent podcast interview, on how Telos got started, what we believe about
            email, and the brands we've helped along the way.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative overflow-hidden rounded-2xl border border-border bg-black"
          style={{
            boxShadow:
              "0 24px 60px -20px hsl(215 60% 30% / 0.35), 0 12px 30px -12px hsl(215 60% 40% / 0.2)",
          }}
        >
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/6aB4L9m3rVU"
              title="See Telos Media in action"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Explainer;
