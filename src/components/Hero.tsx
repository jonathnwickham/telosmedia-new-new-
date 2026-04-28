import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroRocket from "@/assets/hero-rocket.png";
import heroShowcase from "@/assets/hero-showcase.png";

const stats = [
  { target: 37, prefix: "$", suffix: "M+", label: "Rev. generated", duration: 2200 },
  { target: 40, prefix: "", suffix: "+", label: "Brands served", duration: 1800 },
  { target: 41, prefix: "", suffix: "%", label: "Avg. open rate", duration: 2000 },
  { target: 6.5, prefix: "", suffix: "M+", label: "Emails sent / mo", duration: 1600 },
];

const AnimatedCounter = ({ target, prefix, suffix, duration }: { target: number; prefix: string; suffix: string; duration: number }) => {
  const [value, setValue] = useState("0");
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
            const current = ease(progress) * target;
            const hasDecimal = target % 1 !== 0;
            setValue(hasDecimal ? current.toFixed(1) : Math.round(current).toString());
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(hasDecimal ? target.toFixed(1) : target.toString());
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
    <div ref={ref} className="tabular-nums">
      {prefix}{value}{suffix}
    </div>
  );
};

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-12 md:pt-40 md:pb-16">
      {/* Blue aurora backdrop */}
      <div
        aria-hidden
        className="blue-aurora pointer-events-none absolute inset-0 -z-10"
      />
      {/* Animated gradient orbs — desktop only, expensive on mobile */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 -z-10 hidden h-[520px] w-[520px] rounded-full opacity-60 blur-3xl md:block"
        style={{ background: "radial-gradient(circle, hsl(215 95% 60% / 0.35), transparent 60%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-1/4 -z-10 hidden h-[480px] w-[480px] rounded-full opacity-50 blur-3xl md:block"
        style={{ background: "radial-gradient(circle, hsl(200 95% 65% / 0.32), transparent 60%)" }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Background rocket illustration */}
      <motion.img
        src={heroRocket}
        alt=""
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 1.4, delay: 0.3, ease },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          filter:
            "drop-shadow(0 0 18px hsl(200 95% 65% / 0.35)) drop-shadow(0 0 40px hsl(215 95% 60% / 0.25))",
        }}
        className="pointer-events-none absolute right-[6%] top-24 -z-10 hidden w-[180px] select-none md:block lg:right-[10%] lg:top-28 lg:w-[230px]"
      />
      {/* Faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(215 60% 50% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(215 60% 50% / 0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-[920px] text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-medium tracking-wide text-foreground/70"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Email, run properly.
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mt-8 text-[clamp(34px,9vw,76px)] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground break-words"
        >
          Your email partner.
          <br />
          In it for the <span className="gradient-text">long run</span>.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
          className="mx-auto mt-6 max-w-[620px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] text-muted-foreground"
        >
          No templates. No copy paste. We get to know your customers, your offers, and your business then build the flows and campaigns that turn email into your highest margin channel.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#cta"
            className="group inline-flex h-12 items-center justify-center gap-1.5 rounded-full px-7 text-[14px] font-semibold text-white transition-all hover:shadow-[0_12px_32px_-8px_hsl(215_90%_50%/0.55)]"
            style={{
              background: "linear-gradient(135deg, hsl(0 0% 12%) 0%, hsl(0 0% 0%) 100%)",
              boxShadow: "0 8px 24px -8px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
            }}
          >
            Book Your Call Now
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#results"
            className="glass-card inline-flex h-12 items-center justify-center gap-1.5 rounded-full px-7 text-[14px] font-semibold text-foreground transition-all hover:-translate-y-0.5"
          >
            See client results
          </a>
        </motion.div>

      </div>

      {/* Showcase image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        className="mx-auto mt-12 max-w-[1100px]"
      >
        <img
          src={heroShowcase}
          alt="Client results showcase"
          className="w-full select-none"
          draggable={false}
        />
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease }}
        className="mx-auto mt-16 max-w-[960px]"
      >
        <div className="glass-card grid grid-cols-2 divide-x divide-y divide-white/40 overflow-hidden rounded-3xl md:grid-cols-4 md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative z-10 flex flex-col items-start gap-2 px-6 py-7 transition-colors hover:bg-white/40"
            >
              <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {stat.label}
              </div>
              <div className="text-[clamp(28px,3vw,40px)] font-semibold leading-none tracking-[-0.02em] text-foreground">
                <AnimatedCounter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={stat.duration}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
