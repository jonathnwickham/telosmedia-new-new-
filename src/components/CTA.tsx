const CTA = () => {
  return (
    <section id="cta" className="text-center py-28 px-6 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] accent-glow-bottom opacity-40 pointer-events-none" />
      <h2 className="text-[clamp(34px,5vw,56px)] font-bold tracking-[-2px] leading-[1.1] mb-4 relative">
        Schedule a call.<br />Time to get excited.
      </h2>
      <p className="text-lg text-muted-foreground mb-9 relative">
        Let's turn your email channel into a revenue machine.
      </p>
      <div className="flex justify-center gap-3 relative flex-col sm:flex-row items-center">
        <a
          href="https://calendly.com/jonathan-telosmedia/discovery-call"
          className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-md text-[15px] font-semibold hover:brightness-110 hover:-translate-y-px transition-all hover:shadow-[0_4px_24px_hsl(var(--primary)/0.25)]"
        >
          Book a Call →
        </a>
        <a
          href="mailto:jonathan@telosmedia.co"
          className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-foreground border border-[hsl(var(--border-hover))] rounded-md text-[15px] font-medium hover:bg-[rgba(255,255,255,0.03)] transition-all"
        >
          Contact via Email
        </a>
      </div>
    </section>
  );
};

export default CTA;
