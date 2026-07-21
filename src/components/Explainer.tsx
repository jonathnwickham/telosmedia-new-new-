import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

const VIDEO_ID = "6aB4L9m3rVU";

const Explainer = () => {
  // Facade: show a lightweight thumbnail until the visitor clicks play, so the
  // ~1MB YouTube player never loads on first paint (it was the slowest resource).
  const [play, setPlay] = useState(false);
  return (
    <section className="py-16 px-6">
      <div className="max-w-[900px] mx-auto text-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs text-primary uppercase tracking-[1.5px] font-semibold mb-5">
            ✦ Meet the founder
          </span>
          <div className="text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-1.5px] leading-[1.12] mb-4 text-foreground">
            Get to know Jonathan
          </div>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[560px] mx-auto mb-10">
            A recent podcast interview, on how Telos got started, what we believe about
            email, and the brands we've helped along the way.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative overflow-hidden rounded-2xl border border-border bg-black"
          style={{
            boxShadow:
              "0 24px 60px -20px hsl(215 60% 30% / 0.35), 0 12px 30px -12px hsl(215 60% 40% / 0.2)",
          }}
        >
          <div className="relative aspect-video w-full">
            {play ? (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
                title="See Telos Media in action"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlay(true)}
                aria-label="Play the founder interview"
                className="group absolute inset-0 h-full w-full cursor-pointer"
              >
                <img
                  src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                  }}
                  alt="Founder interview thumbnail"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-primary">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Explainer;
