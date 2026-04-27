import { motion } from "framer-motion";

const AuditPromise = () => {
  return (
    <section className="relative px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card grain relative overflow-hidden rounded-3xl px-8 py-10 md:px-12 md:py-12"
        >
          <div className="relative z-10 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-8">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
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
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground">
                The audit promise
              </div>
              <p className="mt-3 text-[17px] leading-[1.55] text-foreground/85 md:text-[19px]">
                Every new client we say yes to, we run a full audit first.
                We go through everything your previous agency did, or what
                you've been doing in-house, before we ship a single email.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditPromise;
