import emailMf1 from "@/assets/emails/email-mf-1.jpg";
import emailMf2 from "@/assets/emails/email-mf-2.jpg";
import emailMf3 from "@/assets/emails/email-mf-3.jpg";
import emailMf4 from "@/assets/emails/email-mf-4.jpg";
import emailMf5 from "@/assets/emails/email-mf-5.png";

const phoneImages = [emailMf1, emailMf2, emailMf3, emailMf4, emailMf5];

const PhoneMarquee = () => {
  return (
    <div className="py-12 overflow-hidden bg-surface border-y border-border relative">
      {/* Edge fades */}
      <div className="absolute top-0 bottom-0 left-0 w-[48px] z-10 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-[48px] z-10 bg-gradient-to-l from-surface to-transparent pointer-events-none" />

      <span className="flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs text-primary uppercase tracking-[1.5px] font-semibold mb-10 w-fit mx-auto">
        ✦ Our Work
      </span>

      <div className="flex gap-5 sm:gap-7 items-center animate-scroll-phones w-max">
        {[...phoneImages, ...phoneImages, ...phoneImages, ...phoneImages].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Email Mockup ${i + 1}`}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-[240px] sm:h-[360px] md:h-[480px] rounded-3xl border-2 border-border shadow-[0_8px_40px_rgba(0,0,0,0.08)] flex-shrink-0 md:hover:scale-[1.04] md:hover:-translate-y-1.5 md:transition-transform md:duration-400"
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneMarquee;
