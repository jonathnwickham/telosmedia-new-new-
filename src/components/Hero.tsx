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

      <div className="max-w-[1140px] w-full mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Copy — left-aligned on desktop */}
        <div className="text-center lg:text-left max-w-[680px] lg:flex-1">
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
            className="text-[clamp(32px,4.8vw,56px)] font-bold leading-[1.08] tracking-[-2px] mb-6 text-foreground"
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
          className="lg:flex-shrink-0 flex justify-center lg:justify-end [perspective:1400px]"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateY: -14,
              rotateX: 8,
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 0 },
              rotateX: { duration: 0 },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="rounded-2xl overflow-hidden w-[340px]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(60px) saturate(1.8)",
                WebkitBackdropFilter: "blur(60px) saturate(1.8)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow:
                  "0 40px 100px -20px rgba(0,0,0,0.25), 0 20px 60px -15px rgba(0,0,0,0.15), 0 0 0 0.5px rgba(255,255,255,0.3) inset, 0 1px 0 rgba(255,255,255,0.4) inset, 0 -1px 0 rgba(255,255,255,0.1) inset",
              }}
            >
              {/* Gloss highlight */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.03) 100%)",
                }}
              />
              {/* Browser-style top bar */}
              <div
                className="relative flex items-center gap-1.5 px-4 py-2.5"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <span className="ml-3 text-[11px] text-muted-foreground font-medium tracking-wide">Telos Media</span>
              </div>
              {/* 2×2 Stats Grid */}
              <div className="relative grid grid-cols-2">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                    className="px-5 py-7 text-center transition-all duration-300 hover:bg-white/[0.06]"
                    style={{ borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : "none", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
                  >
                    <div className="text-[10px] uppercase tracking-[1.5px] text-muted-foreground font-semibold mb-2">{stat.label}</div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
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
