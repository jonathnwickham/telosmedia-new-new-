import { motion } from "framer-motion";
import jonathanPhoto from "@/assets/jonathan.png";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const Meaning = () => {
  return (
    <section id="meaning" className="relative px-6 py-24 md:py-32">
      {/* Soft halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(215 90% 70% / 0.18), transparent 70%)" }}
      />

      <div className="mx-auto max-w-[1080px]">
        {/* Founder block */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="glass-card grain relative overflow-hidden rounded-3xl p-8 md:p-14"
        >
          <div className="relative z-10 grid gap-10 md:grid-cols-[280px_1fr] md:items-start md:gap-14">
            {/* Photo */}
            <div className="flex flex-col items-start gap-5">
              <div
                className="relative w-full overflow-hidden rounded-3xl"
                style={{
                  boxShadow:
                    "0 24px 60px -20px hsl(215 60% 30% / 0.35), 0 12px 30px -12px hsl(215 60% 40% / 0.2)",
                }}
              >
                <img
                  src={jonathanPhoto}
                  alt="Jonathan Wickham"
                  className="aspect-[4/5] w-full object-cover"
                />
                {/* Subtle bottom gradient for premium edge */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div>
                <div className="text-[15px] font-semibold tracking-[-0.01em] text-foreground">
                  Jonathan Wickham
                </div>
                <div className="text-[13px] text-muted-foreground">Founder, Telos Media</div>
              </div>
            </div>

            {/* Note */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                A note from the founder
              </div>
              <h2 className="mt-4 text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.15] tracking-[-0.025em] text-foreground">
                Email is too important to wing.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.7] text-foreground/80">
                <p>
                  I started Telos because I kept watching brands treat email like an
                  afterthought — set it up once, forget it, and wonder why it's stuck
                  at 8% of revenue.
                </p>
                <p>
                  Done right, lifecycle email is the cheapest, highest-margin channel
                  you have. Done wrong, it slowly burns your list and your sender
                  reputation. There's no middle.
                </p>
                <p>
                  We work with a small number of brands at a time. We listen first,
                  build the system, then run it like operators — not like a vendor.
                  If that sounds like what you've been missing, let's talk.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 flex items-center gap-4">
                <div
                  className="font-semibold text-foreground"
                  style={{
                    fontFamily:
                      "'Caveat', 'Brush Script MT', cursive",
                    fontSize: "32px",
                  }}
                >
                  Jonathan
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Telos meaning — kept but downgraded */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-14 text-center"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Why Telos
          </div>
          <div className="mx-auto mt-4 max-w-[680px]">
            <span className="gradient-text text-[clamp(40px,6vw,68px)] font-semibold tracking-[-0.04em]">
              τέλος
            </span>
            <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
              In Aristotle's philosophy, <em>telos</em> is the state in which a thing's
              nature is fulfilled — when it's fully in act. That's how we think about
              your email channel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Meaning;
