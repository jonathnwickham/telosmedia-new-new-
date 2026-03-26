import { motion } from "framer-motion";
import LogoScroll from "./LogoScroll";

const stats = [
  { value: "$33M+", label: "Revenue Generated" },
  { value: "40+", label: "Clients Served" },
  { value: "41%", label: "Avg Open Rate" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-36 pb-20 relative">
      {/* Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[700px] accent-glow opacity-60 pointer-events-none" />

      <div className="max-w-[1140px] w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        {/* Left — Copy */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-[13px] text-muted-foreground mb-8"
          >
            <span className="text-primary font-semibold">✦</span> $33M+ generated for our clients
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(36px,5.2vw,62px)] font-bold leading-[1.08] tracking-[-2px] max-w-[840px] mb-6 text-foreground"
          >
            For brand owners ready for<br />
            <span className="gradient-text">next-level growth</span><br />
            without spending an extra penny on advertising
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(16px,1.8vw,19px)] text-muted-foreground max-w-[580px] mb-10 leading-relaxed lg:mx-0 mx-auto"
          >
            Crafting emails that don't just "look nice" — they rake in revenue. With $33M+ generated for our clients!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3 mb-16 flex-col sm:flex-row lg:justify-start justify-center"
          >
            <a
              href="https://calendly.com/jonathan-telosmedia/discovery-call"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-md text-[15px] font-semibold hover:brightness-110 hover:-translate-y-px transition-all hover:shadow-[0_4px_24px_hsl(var(--primary)/0.25)]"
            >
              Book a Call →
            </a>
            <a
              href="mailto:jonathan@telosmedia.co"
              className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-foreground border border-border rounded-md text-[15px] font-medium hover:border-muted-foreground hover:bg-card transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Right — Floating Stats Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-row lg:flex-col gap-4 lg:pt-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl px-6 py-5 text-center min-w-[140px] hover:-translate-y-1 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            >
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full mt-8">
        <LogoScroll />
      </div>
    </section>
  );
};

export default Hero;
