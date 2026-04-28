import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const Team = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="group relative flex gap-6 md:gap-8"
    >
      <div
        className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white md:h-[72px] md:w-[72px]"
        style={{
          background:
            "linear-gradient(135deg, hsl(0 0% 12%) 0%, hsl(0 0% 0%) 100%)",
          boxShadow:
            "0 8px 20px -8px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>

      <div className="flex-1 pt-1">
        <div className="flex items-center gap-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            The team
          </div>
          <span className="h-px flex-1 bg-border/60" />
        </div>
        <h3 className="mt-2 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground md:text-[26px]">
          Built by operators, not interns.
        </h3>
        <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-muted-foreground">
          Account managers who actually live in your account. Designers who treat email like a brand asset. Copywriters who write for revenue, not opens. Technicians who fix what's broken before you notice it.
        </p>
      </div>
    </motion.div>
  );
};

export default Team;
