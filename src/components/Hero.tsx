import { motion } from "framer-motion";
import LogoScroll from "./LogoScroll";

const stats = [
  { value: "$33M+", label: "Revenue Generated" },
  { value: "40+", label: "Clients Served" },
  { value: "41%", label: "Avg Open Rate" },
  { value: "1M+", label: "Monthly Emails Sent" },
];

const floatingStars = [
  { x: "8%", y: "18%", size: 28, delay: 0, duration: 6.2 },
  { x: "85%", y: "12%", size: 22, delay: 1.2, duration: 5.4 },
  { x: "78%", y: "55%", size: 18, delay: 0.6, duration: 7.1 },
  { x: "12%", y: "72%", size: 14, delay: 2.1, duration: 5.8 },
  { x: "92%", y: "38%", size: 12, delay: 1.8, duration: 6.6 },
  { x: "5%", y: "45%", size: 16, delay: 0.3, duration: 7.5 },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-36 pb-20 relative overflow-hidden">
      {/* Vibrant multi-layer glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[800px] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 40% 30%, hsl(var(--primary) / 0.14) 0%, transparent 70%),
            radial-gradient(ellipse 50% 60% at 65% 50%, hsl(var(--accent) / 0.10) 0%, transparent 65%),
            radial-gradient(ellipse 80% 40% at 50% 10%, hsl(205 70% 60% / 0.08) 0%, transparent 60%)
          `
        }}
      />

      {/* Secondary warm glow */}
      <div className="absolute top-[30%] -right-[10%] w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(205 60% 55% / 0.06) 0%, transparent 70%)'
        }}
      />

      {/* Floating decorative stars ✦ */}
      {floatingStars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none text-primary/30"
          style={{ left: star.x, top: star.y, fontSize: star.size }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.1, 0.8],
            y: [0, -14, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.div>
      ))}

      <div className="max-w-[1140px] w-full mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 px-2 relative z-10">
        {/* Copy — left-aligned on desktop */}
        <div className="text-center lg:text-left max-w-[640px] lg:flex-1 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-[13px] text-muted-foreground mb-8 shadow-sm"
          >
            <motion.span
              className="text-primary font-semibold"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ✦
            </motion.span>{" "}
            $33M+ generated for our clients
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(32px,4.8vw,56px)] font-bold leading-[1.05] tracking-[-2px] mb-6 text-foreground"
          >
            For brand owners ready for<br />
            <motion.span
              className="gradient-text"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              next-level growth
            </motion.span>
            <br />
            without spending an extra penny on advertising
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(16px,1.8vw,19px)] text-muted-foreground max-w-[540px] mb-10 leading-relaxed lg:mx-0 mx-auto"
          >
            Crafting emails that don't just "look nice" — they rake in revenue. With $33M+ generated for our clients!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-3 mb-0 flex-col sm:flex-row lg:justify-start justify-center"
          >
            <motion.a
              href="https://calendly.com/jonathan-telosmedia/discovery-call"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-md text-[15px] font-semibold transition-all shadow-[0_4px_16px_hsl(var(--primary)/0.2)]"
              whileHover={{ y: -2, boxShadow: "0 8px 30px hsl(205 55% 50% / 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Call →
            </motion.a>
            <motion.a
              href="mailto:jonathan@telosmedia.co"
              className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-foreground border border-border rounded-md text-[15px] font-medium transition-all"
              whileHover={{ y: -2, borderColor: "hsl(220 12% 45%)", backgroundColor: "hsl(220 20% 98%)" }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Stats Pane — 3D glass card */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateY: -25 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:flex-shrink-0 flex justify-center lg:justify-start lg:pt-16 [perspective:1800px]"
        >
          <motion.div
            animate={{
              y: [0, -14, 0],
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
                    initial={{ opacity: 0, scale: 0.85, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="px-5 sm:px-7 py-8 sm:py-9 text-center transition-all duration-300 hover:bg-card-hover/40"
                    style={{
                      borderRight: i % 2 === 0 ? "1px solid hsl(var(--border))" : "none",
                      borderBottom: i < 2 ? "1px solid hsl(var(--border))" : "none",
                    }}
                  >
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[2.8px] text-muted-foreground font-semibold mb-3">{stat.label}</div>
                    <motion.div
                      className="text-[2rem] sm:text-[2.25rem] leading-none font-bold text-primary drop-shadow-[0_6px_18px_hsl(var(--primary)/0.16)]"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      {stat.value}
                    </motion.div>
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
