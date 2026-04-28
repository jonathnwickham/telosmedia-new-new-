import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

const TelosMeaning = () => {
  return (
    <section className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[820px]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="text-center"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Why Telos
          </div>
          <div className="mt-4">
            <span className="gradient-text text-[clamp(48px,7vw,88px)] font-semibold tracking-[-0.04em]">
              τέλος
            </span>
          </div>
          <div className="mx-auto mt-6 max-w-[680px] space-y-5 text-[15.5px] leading-[1.75] text-muted-foreground">
            <p>
              <em>Telos</em> in Ancient Greek simply means "goal", "purpose" or "end".
              However, in Aristotle's philosophy, it has the special meaning of "the
              state in which something's <strong className="font-semibold text-foreground">nature is fulfilled</strong>",
              or where something is fully "in act", i.e. meaning fully doing what it
              intends or is supposed to be doing.
            </p>
            <p>
              Consistent with the overarching purpose of email marketing, which is to
              increase your brand's revenue month after month.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TelosMeaning;
