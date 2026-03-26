import { motion } from "framer-motion";
import LogoScroll from "./LogoScroll";

const stats = [
  { value: "$33M+", label: "Revenue Generated" },
  { value: "40+", label: "Clients Served" },
  { value: "41%", label: "Avg Open Rate" },
  { value: "1M+", label: "Monthly Emails Sent" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-36 pb-20 relative">
      {/* Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[700px] accent-glow opacity-60 pointer-events-none" />

      <div className="max-w-[1140px] w-full mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 px-2">
        {/* Copy — left-aligned on desktop */}
        <div className="text-center lg:text-left max-w-[640px] lg:flex-1 lg:pt-10">
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
            className="text-[clamp(32px,4.8vw,56px)] font-bold leading-[1.05] tracking-[-2px] mb-6 text-foreground"
          >
            For brand owners ready for<br />
            <span className="gradient-text">next-level growth</span><br />
            without spending an extra penny on advertising
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(16px,1.8vw,19px)] text-muted-foreground max-w-[540px] mb-10 leading-relaxed lg:mx-0 mx-auto"
          >
            Crafting emails that don't just "look nice" — they rake in revenue. With $33M+ generated for our clients!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3 mb-0 flex-col sm:flex-row lg:justify-start justify-center"
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

        {/* Floating Stats Pane — 3D glass card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="lg:flex-shrink-0 flex justify-center lg:justify-end lg:pt-2 [perspective:1800px]"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotateY: -18,
              rotateX: 10,
              rotateZ: -2,
            }}
            transition={{
              y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 0 },
              rotateX: { duration: 0 },
              rotateZ: { duration: 0 },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="hero-glass-card rounded-[2rem] w-[340px] sm:w-[380px]">
              {/* 2×2 Stats Grid */}
              <div className="relative z-10 grid grid-cols-2">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                    className="px-5 sm:px-7 py-9 sm:py-10 text-center transition-all duration-300 hover:bg-[hsl(0_0%_100%/0.06)]"
                    style={{
                      borderRight: i % 2 === 0 ? "1px solid hsl(0 0% 100% / 0.08)" : "none",
                      borderBottom: i < 2 ? "1px solid hsl(0 0% 100% / 0.07)" : "none",
                    }}
                  >
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[2.8px] text-muted-foreground font-semibold mb-3">{stat.label}</div>
                    <div className="text-[2rem] sm:text-[2.25rem] leading-none font-bold text-primary drop-shadow-[0_6px_18px_hsl(var(--primary)/0.16)]">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full mt-16 relative">
        <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/40 pointer-events-none" />
        <LogoScroll />
      </div>
    </section>
  );
};

export default Hero;
