import { motion } from "framer-motion";

const brands = [
  "Atlas Funded", "AquaFunded", "GFT", "FTUK", "TF8",
  "AeroFunded", "GFF", "Solana Funded", "PlayerProfit", "Aqua Futures",
];

const LogoScroll = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full overflow-hidden"
    >
      <p className="text-center text-xs text-text-muted uppercase tracking-[2.5px] mb-6">
        Trusted by growing brands worldwide
      </p>
      <div className="flex gap-14 animate-scroll-logos w-max">
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={i}
            className="text-base font-semibold text-text-muted whitespace-nowrap opacity-50 hover:opacity-80 transition-opacity"
          >
            {brand}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default LogoScroll;
