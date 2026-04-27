import { useEffect, useState } from "react";
import telosLogo from "@/assets/telos-logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#meaning", label: "About" },
];

const ctaGradient =
  "linear-gradient(135deg, hsl(215 95% 58%) 0%, hsl(220 90% 52%) 60%, hsl(230 85% 58%) 100%)";
const ctaShadowFlat = "inset 0 1px 0 hsl(0 0% 100% / 0.35)";
const ctaShadowGlow =
  "0 8px 24px -6px hsl(215 90% 50% / 0.6), 0 0 0 1px hsl(215 95% 58% / 0.25), inset 0 1px 0 hsl(0 0% 100% / 0.35)";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div
        className="relative w-full"
        style={{ maxWidth: "min(820px, calc(100vw - 32px))" }}
      >
        <nav
          className={`relative flex items-center justify-between gap-6 overflow-hidden rounded-full px-3 py-2 transition-all duration-300 ${
            scrolled
              ? "grain border border-white/60 shadow-[0_20px_50px_-20px_hsl(215_60%_30%/0.25)]"
              : "border border-transparent shadow-none"
          }`}
          style={{
            background: scrolled
              ? "linear-gradient(135deg, hsl(0 0% 100% / 0.65) 0%, hsl(215 100% 98% / 0.5) 50%, hsl(0 0% 100% / 0.65) 100%)"
              : "transparent",
            backdropFilter: scrolled ? "blur(28px) saturate(1.6)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(28px) saturate(1.6)" : "none",
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

          {/* Desktop links */}
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

          {/* Desktop CTA */}
          <a
            href="https://calendly.com/jonathan-telosmedia/discovery-call"
            className="relative z-10 hidden h-9 items-center justify-center rounded-full px-5 text-[13px] font-semibold text-white transition-all hover:-translate-y-px md:inline-flex"
            style={{ background: ctaGradient, boxShadow: scrolled ? ctaShadowGlow : ctaShadowFlat }}
          >
            Book a call
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-white/60 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="13" x2="20" y2="13" />
                  <line x1="4" y1="19" x2="20" y2="19" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile dropdown */}
        <div
          className={`absolute inset-x-0 top-full mt-2 origin-top overflow-hidden rounded-3xl border border-white/60 shadow-[0_30px_60px_-20px_hsl(215_60%_30%/0.3)] transition-all duration-300 md:hidden ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(135deg, hsl(0 0% 100% / 0.92) 0%, hsl(215 100% 98% / 0.88) 100%)",
            backdropFilter: "blur(28px) saturate(1.6)",
            WebkitBackdropFilter: "blur(28px) saturate(1.6)",
          }}
        >
          <div className="flex flex-col p-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-[15px] font-medium text-foreground/85 transition-colors hover:bg-white/70"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://calendly.com/jonathan-telosmedia/discovery-call"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-2xl text-[14px] font-semibold text-white transition-transform hover:-translate-y-px"
              style={{ background: ctaGradient, boxShadow: ctaShadowGlow }}
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
