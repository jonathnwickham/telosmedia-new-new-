import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LogoScroll from "./LogoScroll";

const stats = [
  { target: 33, prefix: "$", suffix: "M+", label: "Revenue Generated", duration: 2800 },
  { target: 40, prefix: "", suffix: "+", label: "Clients Served", duration: 2200 },
  { target: 41, prefix: "", suffix: "%", label: "Avg Open Rate", duration: 2400 },
  { target: 1, prefix: "", suffix: "M+", label: "Monthly Emails Sent", duration: 2000 },
];

const AnimatedCounter = ({ target, prefix, suffix, duration }: { target: number; prefix: string; suffix: string; duration: number }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.round(ease(progress) * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref}>
      {prefix}{value}{suffix}
    </div>
  );
};

const floatingStars = [
  { x: "6%", y: "14%", size: 30, delay: 0, duration: 6.2 },
  { x: "88%", y: "10%", size: 24, delay: 1.2, duration: 5.4 },
  { x: "82%", y: "48%", size: 20, delay: 0.6, duration: 7.1 },
  { x: "10%", y: "65%", size: 16, delay: 2.1, duration: 5.8 },
  { x: "94%", y: "32%", size: 14, delay: 1.8, duration: 6.6 },
  { x: "3%", y: "40%", size: 18, delay: 0.3, duration: 7.5 },
  { x: "50%", y: "8%", size: 12, delay: 2.5, duration: 6.0 },
  { x: "72%", y: "70%", size: 15, delay: 0.9, duration: 5.6 },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-36 pb-20 relative overflow-hidden">
      {/* Vibrant multi-layer glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[900px] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 40% 30%, hsl(var(--primary) / 0.16) 0%, transparent 70%),
            radial-gradient(ellipse 50% 60% at 65% 50%, hsl(var(--accent) / 0.12) 0%, transparent 65%),
            radial-gradient(ellipse 80% 40% at 50% 10%, hsl(205 70% 60% / 0.10) 0%, transparent 60%)
          `
        }}
      />
      <div className="absolute top-[30%] -right-[10%] w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, hsl(205 60% 55% / 0.08) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-[10%] -left-[8%] w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.06) 0%, transparent 70%)' }}
      />

      {/* Floating decorative stars ✦ */}
      {floatingStars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none text-primary/25"
          style={{ left: star.x, top: star.y, fontSize: star.size }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.15, 0.5, 0.15],
            scale: [0.8, 1.15, 0.8],
            y: [0, -18, 0],
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

      {/* Hero copy — centered */}
      <div className="max-w-[800px] w-full mx-auto text-center relative z-10">
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
          className="text-[clamp(32px,4.8vw,56px)] font-bold leading-[1.08] tracking-[-2px] mb-6 text-foreground"
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
          className="text-[clamp(16px,1.8vw,19px)] text-muted-foreground max-w-[580px] mb-10 leading-relaxed mx-auto"
        >
          Crafting emails that don't just "look nice" — they rake in revenue. With $33M+ generated for our clients!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-3 mb-0 flex-col sm:flex-row justify-center"
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

      {/* Stats row — below hero copy */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[960px] mx-auto mt-16 relative z-10"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 hero-glass-card rounded-2xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="px-4 sm:px-6 py-7 sm:py-8 text-center transition-all duration-300 hover:bg-card-hover/40 relative"
            >
              {/* Divider lines */}
              {i < 3 && (
                <div className="hidden sm:block absolute right-0 top-[20%] bottom-[20%] w-px bg-border" />
              )}
              {i % 2 === 0 && i < 2 && (
                <div className="sm:hidden absolute right-0 top-[20%] bottom-[20%] w-px bg-border" />
              )}
              {i < 2 && (
                <div className="sm:hidden absolute bottom-0 left-[15%] right-[15%] h-px bg-border" />
              )}

              <div className="text-[10px] sm:text-[11px] uppercase tracking-[2.4px] text-muted-foreground font-semibold mb-2">
                {stat.label}
              </div>
              <motion.div
                className="text-[1.75rem] sm:text-[2.1rem] leading-none font-bold text-primary drop-shadow-[0_4px_14px_hsl(var(--primary)/0.14)] tabular-nums"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <AnimatedCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} duration={stat.duration} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="w-full mt-14 relative">
        <div className="absolute -top-14 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-background/40 pointer-events-none" />
        <LogoScroll />
      </div>
    </section>
  );
};

export default Hero;
