import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const Counter = ({ target, prefix = "", suffix = "", duration = 3000 }: CounterProps) => {
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
          const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -12 * t));
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.floor(ease(progress) * target));
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

  const formatValue = (n: number) => {
    if (target >= 1000000) {
      if (n >= 1000000) return `${prefix}${Math.round(n / 1000000)}M${suffix}`;
      if (n >= 1000) return `${prefix}${Math.floor(n / 1000).toLocaleString()}K`;
      return `${prefix}${n.toLocaleString()}`;
    }
    return `${prefix}${n.toLocaleString()}${suffix}`;
  };

  return (
    <div ref={ref} className="gradient-text text-[40px] sm:text-[52px] font-bold tracking-[-2px] tabular-nums">
      {formatValue(value)}
    </div>
  );
};

const StatBar = () => {
  return (
    <div className="flex justify-center gap-10 sm:gap-20 flex-wrap py-14 px-6 border-y border-border bg-background">
      <div className="text-center">
        <Counter target={33000000} prefix="$" suffix="+" duration={4000} />
        <div className="text-sm text-muted-foreground mt-1">Revenue Generated</div>
      </div>
      <div className="text-center">
        <Counter target={40} suffix="+" duration={2200} />
        <div className="text-sm text-muted-foreground mt-1">Clients Served</div>
      </div>
      <div className="text-center">
        <Counter target={1000000} suffix="+" duration={3200} />
        <div className="text-sm text-muted-foreground mt-1">Emails Sent Monthly</div>
      </div>
    </div>
  );
};

export default StatBar;
