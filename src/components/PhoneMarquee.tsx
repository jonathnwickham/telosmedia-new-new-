const phoneImages = [
  "https://cdn.prod.website-files.com/653000aca81aeb25f0b46571/68093cdb34189f31c0eb0907_Alert%20iPhone%20(3).png",
  "https://cdn.prod.website-files.com/653000aca81aeb25f0b46571/66cc31c8e3a2b09fdf054ec7_Alert%20-%20iPhone-2.png",
  "https://cdn.prod.website-files.com/653000aca81aeb25f0b46571/68093bc2eb2216edbddb095a_Alert%20iPhone%20(2).png",
  "https://cdn.prod.website-files.com/653000aca81aeb25f0b46571/68093b590c875b6901cd21d1_Alert%20iPhone%20(1).png",
  "https://cdn.prod.website-files.com/653000aca81aeb25f0b46571/680937cd192ffc58f74da67f_Alert%20-%20iPhone.png",
  "https://cdn.prod.website-files.com/653000aca81aeb25f0b46571/68093911965dc23bbc70605a_Alert%20iPhone.png",
];

const PhoneMarquee = () => {
  return (
    <div className="py-12 overflow-hidden bg-surface border-y border-border relative">
      {/* Edge fades */}
      <div className="absolute top-0 bottom-0 left-0 w-[120px] z-10 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-[120px] z-10 bg-gradient-to-l from-surface to-transparent pointer-events-none" />

      <span className="flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs text-primary uppercase tracking-[1.5px] font-semibold mb-10 w-fit mx-auto">
        ✦ Our Work
      </span>

      <div className="flex gap-7 items-center animate-scroll-phones w-max">
        {[...phoneImages, ...phoneImages, ...phoneImages, ...phoneImages].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Email Mockup ${i + 1}`}
            className="h-[300px] sm:h-[360px] md:h-[480px] rounded-3xl border-2 border-border shadow-[0_8px_40px_rgba(0,0,0,0.08)] flex-shrink-0 hover:scale-[1.04] hover:-translate-y-1.5 transition-transform duration-400"
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneMarquee;
