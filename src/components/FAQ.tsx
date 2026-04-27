import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you design the emails or do we send them to you?",
    a: "We design and write everything. The only thing we need from you are brand assets (product photos, lifestyle imagery) and any brand guidelines you have. If you don't have guidelines, we'll build them with you.",
  },
  {
    q: "How do you measure success?",
    a: "Revenue. Specifically: % of revenue attributed to email, return customer rate, and LTV. Open and click rates are diagnostic. Useful, but not the scoreboard.",
  },
  {
    q: "What platforms do you work with?",
    a: "Klaviyo, Omnisend, and Brevo are our most common stacks. We're certified partners on each. If you're on a different ESP, we'll evaluate fit before committing.",
  },
  {
    q: "What's the minimum engagement?",
    a: "We work with a small number of brands at a time so we can ship like operators, not vendors. Engagements typically start at 90 days, month-to-month after that. No long lock-ins.",
  },
  {
    q: "Do you do SMS or WhatsApp too?",
    a: "Yes, but only when the channel actually fits. Some brands win with SMS. Some don't. We'll do the fit assessment first and only ship what makes you money.",
  },
  {
    q: "How long until we see results?",
    a: "Foundational revenue lifts (better flows, better deliverability) usually show in 30 to 60 days. Compounding lifts (segmentation, lifecycle depth, campaign cadence) compound over the first 90.",
  },
];

const FAQItem = ({
  q,
  a,
  open,
  onClick,
}: {
  q: string;
  a: string;
  open: boolean;
  onClick: () => void;
}) => (
  <div className="glass-card grain overflow-hidden rounded-2xl">
    <button
      onClick={onClick}
      className="relative z-10 flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/40"
    >
      <span className="text-[16px] font-semibold tracking-[-0.01em] text-foreground">
        {q}
      </span>
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/60 text-foreground/70 transition-transform ${
          open ? "rotate-45" : ""
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 overflow-hidden"
        >
          <div className="border-t border-white/60 px-6 pb-6 pt-5 text-[14.5px] leading-[1.65] text-muted-foreground">
            {a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-20 -z-10 h-[500px] w-[700px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(200 95% 65% / 0.18), transparent 70%)" }}
      />

      <div className="mx-auto max-w-[860px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <div className="glass-card mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            FAQ
          </div>
          <h2 className="mx-auto mt-6 text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            The questions{" "}
            <span className="gradient-text">we get most.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <FAQItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
