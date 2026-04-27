import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dashboardDetailed from "@/assets/dashboard-detailed.png";

const stats = [
  { target: 37, prefix: "$", suffix: "M+", label: "Revenue generated", duration: 2200 },
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
    <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Blue aurora backdrop */}
      <div
        aria-hidden
        className="blue-aurora pointer-events-none absolute inset-0 -z-10"
      />
      {/* Animated gradient orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 -z-10 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(215 95% 60% / 0.35), transparent 60%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-1/4 -z-10 h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(200 95% 65% / 0.32), transparent 60%)" }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
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
          Email, done right.
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mt-8 text-[clamp(40px,6vw,76px)] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground"
        >
          Make the right call
          <br />
          on <span className="gradient-text">email</span>.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
          className="mx-auto mt-6 max-w-[620px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] text-muted-foreground"
        >
          We listen first. Then we build a complete system, strategy, flows, and
          campaigns, that turns your list into your highest-margin revenue channel.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="https://calendly.com/jonathan-telosmedia/discovery-call"
            className="group inline-flex h-12 items-center justify-center gap-1.5 rounded-full px-7 text-[14px] font-semibold text-white transition-all hover:shadow-[0_12px_32px_-8px_hsl(215_90%_50%/0.55)]"
            style={{
              background: "linear-gradient(135deg, hsl(215 95% 58%) 0%, hsl(220 90% 52%) 60%, hsl(230 85% 58%) 100%)",
              boxShadow: "0 8px 24px -8px hsl(215 90% 50% / 0.45), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
            }}
          >
            Book a discovery call
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#results"
            className="glass-card inline-flex h-12 items-center justify-center gap-1.5 rounded-full px-7 text-[14px] font-semibold text-foreground transition-all hover:-translate-y-0.5"
          >
            See client results
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-8 text-[12px] uppercase tracking-[0.18em] text-muted-foreground/80"
        >
          Trusted by 40+ brands · $37M+ generated
        </motion.div>
      </div>

      {/* Hero product visual */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.45, ease }}
        className="relative mx-auto mt-20 w-full max-w-[1080px]"
      >
        {/* Glow under */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-10 -bottom-10 h-40 rounded-[60%] blur-3xl"
          style={{ background: "radial-gradient(ellipse, hsl(215 95% 60% / 0.45), transparent 70%)" }}
        />

        <div className="relative">
          {/* Front tile — dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="glass-card relative overflow-hidden rounded-3xl"
          >
            {/* Top fake browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/60 bg-white/40 px-5 py-3 backdrop-blur">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
              </div>
              <div className="ml-3 flex-1 truncate rounded-full bg-white/70 px-3 py-1 text-[11px] text-muted-foreground">
                klaviyo · campaign performance / last 30 days
              </div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                live
              </div>
            </div>
            <div className="relative h-[440px] overflow-hidden bg-white md:h-[520px]">
              <img
                src={dashboardDetailed}
                alt="Dashboard preview"
                className="absolute inset-x-0 top-0 w-full"
              />
              {/* Bottom fade so the crop feels intentional */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease }}
        className="mx-auto mt-24 max-w-[960px]"
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
