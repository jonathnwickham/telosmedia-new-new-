import { useEffect, useState } from "react";
import telosLogo from "@/assets/telos-logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#meaning", label: "About" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`relative flex items-center justify-between gap-6 overflow-hidden rounded-full px-3 py-2 transition-all duration-300 ${
          scrolled
            ? "grain border border-white/60 shadow-[0_20px_50px_-20px_hsl(215_60%_30%/0.25)]"
            : "border border-black/20 shadow-none"
        }`}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, hsl(0 0% 100% / 0.65) 0%, hsl(215 100% 98% / 0.5) 50%, hsl(0 0% 100% / 0.65) 100%)"
            : "transparent",
          backdropFilter: scrolled ? "blur(28px) saturate(1.6)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(28px) saturate(1.6)" : "none",
          maxWidth: "min(820px, calc(100vw - 32px))",
        }}
      >
        {/* Inner highlight — only when scrolled */}
        {scrolled && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, hsl(0 0% 100% / 0.7) 0%, transparent 60%)",
            }}
          />
        )}

        <a href="#" className="relative z-10 flex items-center pl-3">
          <img src={telosLogo} alt="Telos Media" className="h-7" />
        </a>

        <div className="relative z-10 hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-[13.5px] font-medium text-foreground/70 transition-colors hover:bg-white/60 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://calendly.com/jonathan-telosmedia/discovery-call"
          className="relative z-10 inline-flex h-9 items-center justify-center rounded-full px-5 text-[13px] font-semibold text-white transition-all hover:-translate-y-px"
          style={{
            background:
              "linear-gradient(135deg, hsl(215 95% 58%) 0%, hsl(220 90% 52%) 60%, hsl(230 85% 58%) 100%)",
            boxShadow:
              "0 6px 20px -6px hsl(215 90% 50% / 0.55), inset 0 1px 0 hsl(0 0% 100% / 0.35)",
          }}
        >
          Book a call
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
