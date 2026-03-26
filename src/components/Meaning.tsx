import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const Meaning = () => {
  return (
    <section id="meaning" className="py-28 px-6 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] accent-glow opacity-35 pointer-events-none" />
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[720px] mx-auto relative"
      >
        <div className="text-xs uppercase tracking-[3px] text-primary font-semibold mb-2">Telos Meaning</div>
        <div className="text-[clamp(56px,10vw,110px)] font-bold tracking-[-4px] gradient-text mb-6">τέλος</div>
        <p className="text-[17px] text-muted-foreground leading-[1.85] italic">
          <em>Telos</em> in Ancient Greek simply means "goal", "purpose" or "end". However, in Aristotle's philosophy, it has the special meaning of "the state in which something's{" "}
          <strong className="text-primary" style={{ WebkitTextFillColor: "hsl(var(--primary))" }}>nature is fulfilled</strong>", or where something is fully "in act". Consistent with the overarching purpose of email marketing, which is to increase your brand's revenue month after month.
        </p>
      </motion.div>
    </section>
  );
};

export default Meaning;
