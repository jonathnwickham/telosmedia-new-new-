import { motion } from "framer-motion";
import axcLogo from "@/assets/logos/axc.png";
import telosLogo from "@/assets/logos/telos.png";
import group1Logo from "@/assets/logos/group1.png";
import playerProfitLogo from "@/assets/logos/player-profit.png";
import retropiaLogo from "@/assets/logos/retropia.png";
import playvoLogo from "@/assets/logos/playvo.png";
import puroLogo from "@/assets/logos/puro.png";
import tradingFundsLogo from "@/assets/logos/tradingfunds.png";
import qtFundedLogo from "@/assets/logos/qtfunded.png";
import keepsLogo from "@/assets/logos/keeps.png";
import atlasFundedLogo from "@/assets/logos/atlas-funded.png";
import logo2 from "@/assets/logos/logo2.png";
import logo3 from "@/assets/logos/logo3.png";
import logo4 from "@/assets/logos/logo4.png";
import aquafundedLogo from "@/assets/logos/aquafunded.png";
import fullLogoWhite from "@/assets/logos/full-logo-white.png";
import image6Logo from "@/assets/logos/image-6.png";

const logos = [
  { src: axcLogo, alt: "AXC" },
  { src: telosLogo, alt: "Telos Media" },
  { src: group1Logo, alt: "Client Logo" },
  { src: playerProfitLogo, alt: "Player Profit" },
  { src: retropiaLogo, alt: "Retropia" },
  { src: playvoLogo, alt: "PlayVo" },
  { src: puroLogo, alt: "PURO" },
  { src: tradingFundsLogo, alt: "TradingFunds" },
  { src: qtFundedLogo, alt: "QT Funded" },
  { src: keepsLogo, alt: "Keeps" },
  { src: atlasFundedLogo, alt: "Atlas Funded" },
  { src: logo2, alt: "Client Logo" },
  { src: logo3, alt: "Client Logo" },
  { src: logo4, alt: "Client Logo" },
  { src: aquafundedLogo, alt: "AquaFunded" },
  { src: fullLogoWhite, alt: "Client Logo" },
  { src: image6Logo, alt: "Client Logo" },
];

const LogoScroll = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full bg-foreground py-10 overflow-hidden"
    >
      <p className="text-center text-xs text-primary-foreground/50 uppercase tracking-[2.5px] mb-6">
        Trusted by growing brands worldwide
      </p>
      <div className="flex items-center gap-14 animate-scroll-logos w-max">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LogoScroll;
