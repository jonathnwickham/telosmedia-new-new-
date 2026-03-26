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

      <div className="max-w-[1140px] w-full mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
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

        {/* Floating Stats Pane — 3D glass card with hover float */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="lg:flex-shrink-0 flex justify-center lg:justify-end"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              transform: "rotateY(-12deg) rotateX(6deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.1)_inset] overflow-hidden w-[340px]">
              {/* Browser-style top bar */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <span className="ml-3 text-[11px] text-muted-foreground font-medium tracking-wide">Telos Media</span>
              </div>
              {/* 2×2 Stats Grid */}
              <div className="grid grid-cols-2">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
                    className="px-5 py-6 text-center border border-white/5 hover:bg-white/10 transition-colors duration-200"
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

      <div className="w-full mt-8">
        <LogoScroll />
      </div>
    </section>
  );
};

export default Hero;
