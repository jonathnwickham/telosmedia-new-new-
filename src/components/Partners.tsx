import { motion } from "framer-motion";
import klaviyo from "@/assets/partners/klaviyo.png";
import omnisend from "@/assets/partners/omnisend.png";
import brevo from "@/assets/partners/brevo.png";
import armin from "@/assets/partners/armin.png";

const partners = [
  { name: "Klaviyo", src: klaviyo, height: 26 },
  { name: "Omnisend", src: omnisend, height: 22 },
  { name: "Brevo", src: brevo, height: 24 },
  { name: "armin", src: armin, height: 26 },
];

const Partners = () => {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Built on the platforms you already trust
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card grain mt-8 grid grid-cols-2 divide-x divide-y divide-white/50 overflow-hidden rounded-3xl md:grid-cols-4 md:divide-y-0"
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="relative z-10 flex h-[120px] items-center justify-center px-6 transition-colors hover:bg-white/40"
            >
              <img
                src={p.src}
                alt={p.name}
                style={{ height: `${p.height}px` }}
                className="w-auto max-w-[140px] object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-center text-[14px] leading-relaxed text-muted-foreground"
        >
          Certified partners. Deep stack expertise. We integrate cleanly with what
          you already run — no migrations, no rebuilds.
        </motion.p>
      </div>
    </section>
  );
};

export default Partners;
