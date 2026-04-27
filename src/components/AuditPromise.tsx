import { motion } from "framer-motion";

const AuditPromise = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col rounded-3xl border border-border/60 bg-white p-10 shadow-[0_2px_4px_-2px_hsl(215_30%_30%/0.06),0_8px_24px_-8px_hsl(215_30%_30%/0.08)]"
    >
      <div
        className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, hsl(204 53% 65%) 0%, hsl(204 53% 50%) 100%)",
          boxShadow:
            "0 8px 20px -8px hsl(204 53% 40% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      <div className="relative z-10 mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-foreground">
        The audit promise
      </div>
      <h3 className="relative z-10 text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">
        We audit before we ship.
      </h3>
      <p className="relative z-10 mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
        Every new client we say yes to, we run a full audit first. We go
        through everything your previous agency did, or what you've been
        doing in-house, before we ship a single email.
      </p>
    </motion.div>
  );
};

export default AuditPromise;
