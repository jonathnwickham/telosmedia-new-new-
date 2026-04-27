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
    <section className="relative border-y border-border/60 bg-muted/30 px-6 py-7">
      <div className="mx-auto max-w-[920px]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <div className="text-center text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Certified on the platforms you already use
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((p) => (
              <img
                key={p.name}
                src={p.src}
                alt={p.name}
                style={{ height: `${p.height}px` }}
                className="w-auto max-w-[120px] object-contain opacity-70 transition-opacity hover:opacity-100"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
