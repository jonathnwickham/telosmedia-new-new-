import { motion } from "framer-motion";
import axcLogo from "@/assets/logos/axc.png";
import playerProfitLogo from "@/assets/logos/player-profit.png";
import retropiaLogo from "@/assets/logos/retropia.png";
import playvoLogo from "@/assets/logos/playvo.png";
import puroLogo from "@/assets/logos/puro.png";
import tradingFundsLogo from "@/assets/logos/tradingfunds.png";
import qtFundedLogo from "@/assets/logos/qtfunded.png";
import keepsLogo from "@/assets/logos/keeps.png";
import atlasFundedLogo from "@/assets/logos/atlas-funded.png";
import aquafundedLogo from "@/assets/logos/aquafunded.png";
import ftukLogo from "@/assets/logos/ftuk.svg";
import aerofundedLogo from "@/assets/logos/aerofunded.svg";
import gffLogo from "@/assets/logos/gff.png";

type Logo = { src: string; alt: string; keepColor?: boolean; sizeClass?: string };

const logos: Logo[] = [
  { src: axcLogo, alt: "AXC" },
  { src: playerProfitLogo, alt: "Player Profit" },
  { src: retropiaLogo, alt: "Retropia" },
  { src: puroLogo, alt: "PURO" },
  { src: tradingFundsLogo, alt: "TradingFunds" },
  { src: playvoLogo, alt: "PlayVo" },
  { src: qtFundedLogo, alt: "QT Funded" },
  { src: ftukLogo, alt: "FTUK" },
  { src: keepsLogo, alt: "Keeps" },
  { src: aerofundedLogo, alt: "AeroFunded" },
  { src: atlasFundedLogo, alt: "Atlas Funded" },
  { src: gffLogo, alt: "Goat Funded Futures", keepColor: true, sizeClass: "h-10 max-h-10" },
  { src: aquafundedLogo, alt: "AquaFunded" },
];

const half = Math.ceil(logos.length / 2);
const row1 = [...logos.slice(0, half), ...logos.slice(0, half)];
const row2 = [...logos.slice(half), ...logos.slice(half)];

const LogoScroll = () => {
  return (
    <div className="relative w-full">

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative w-full overflow-hidden border-y border-border/60 bg-white py-14 flex flex-col gap-10"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

        <p className="text-center text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by growing brands worldwide
        </p>
        <div className="flex w-max animate-scroll-logos">
          <ul className="flex shrink-0 items-center gap-20 pr-20">
            {row1.map((logo, i) => (
              <li key={`a-${i}`} className="shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  draggable={false}
                  className={`${logo.keepColor ? "logo-color" : "logo-mark"} ${logo.sizeClass ?? "h-6 max-h-6"} w-auto object-contain`}
                />
              </li>
            ))}
          </ul>
          <ul className="flex shrink-0 items-center gap-20 pr-20" aria-hidden="true">
            {row1.map((logo, i) => (
              <li key={`b-${i}`} className="shrink-0">
                <img
                  src={logo.src}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className={`${logo.keepColor ? "logo-color" : "logo-mark"} ${logo.sizeClass ?? "h-6 max-h-6"} w-auto object-contain`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-max animate-scroll-logos-reverse">
          <ul className="flex shrink-0 items-center gap-20 pr-20">
            {row2.map((logo, i) => (
              <li key={`a-${i}`} className="shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  draggable={false}
                  className={`${logo.keepColor ? "logo-color" : "logo-mark"} ${logo.sizeClass ?? "h-6 max-h-6"} w-auto object-contain`}
                />
              </li>
            ))}
          </ul>
          <ul className="flex shrink-0 items-center gap-20 pr-20" aria-hidden="true">
            {row2.map((logo, i) => (
              <li key={`b-${i}`} className="shrink-0">
                <img
                  src={logo.src}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className={`${logo.keepColor ? "logo-color" : "logo-mark"} ${logo.sizeClass ?? "h-6 max-h-6"} w-auto object-contain`}
                />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default LogoScroll;
