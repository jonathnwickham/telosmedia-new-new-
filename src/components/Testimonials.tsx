import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const testimonials = [
  {
    quote: "Telos completely transformed our email channel. Revenue from email went from an afterthought to our biggest growth lever.",
    name: "Aqua",
    role: "Founder",
  },
  {
    quote: "The level of strategy and design quality blew us away. Our open rates nearly tripled within the first two months.",
    name: "Funded Founder Futures",
    role: "CEO",
  },
  {
    quote: "We tried three agencies before Telos. None of them came close to the ROI Jonathan's team delivered for us.",
    name: "Goat Furniture",
    role: "Head of Marketing",
  },
  {
    quote: "Professional, data-driven, and incredibly creative. Telos is the email partner every brand needs.",
    name: "Blue Guardian",
    role: "Co-Founder",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-6">
      <div className="max-w-[1140px] mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs text-primary uppercase tracking-[1.5px] font-semibold mb-5">
            ✦ Testimonials
          </span>
          <div className="text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-1.5px] leading-[1.12] mb-4 max-w-[680px] text-foreground">
            What our clients say
          </div>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[520px] mb-12">
            Don't just take our word for it. Hear from the brands we've helped scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-7 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-primary/5 pointer-events-none rounded-2xl" />
              <div className="relative z-10">
                <div className="text-primary text-2xl mb-4">"</div>
                <p className="text-sm text-foreground leading-relaxed mb-6">{t.quote}</p>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
