import aerofunded from "@/assets/logos/v2/aerofunded.png";
import alphatrader from "@/assets/logos/v2/alphatrader.svg";
import aquafunded from "@/assets/logos/v2/aquafunded.svg";
import aquafutures from "@/assets/logos/v2/aquafutures.svg";
import atlasfunded from "@/assets/logos/v2/atlasfunded.svg";
import axcera from "@/assets/logos/v2/axcera.svg";
import blueguardian from "@/assets/logos/v2/blueguardian.svg";
import ftuk from "@/assets/logos/v2/ftuk.svg";
import flooreight from "@/assets/logos/v2/flooreight.svg";
import gff from "@/assets/logos/v2/gff.png";
import gft from "@/assets/logos/v2/gft.png";
import keeps from "@/assets/logos/v2/keeps.png";
import playerprofit from "@/assets/logos/v2/playerprofit.png";
import playvo from "@/assets/logos/v2/playvo.png";
import puro from "@/assets/logos/v2/puro.svg";
import qtfunded from "@/assets/logos/v2/qtfunded.svg";
import retropia from "@/assets/logos/v2/retropia.svg";
import solanafunded from "@/assets/logos/v2/solanafunded.svg";
import mystery1 from "@/assets/logos/v2/mystery1.svg";
import mystery2 from "@/assets/logos/v2/mystery2.svg";

type Logo = { src: string; alt: string; sizeClass?: string };

// Row 1 — 10 logos
const row1Set: Logo[] = [
  { src: axcera, alt: "Axcera", sizeClass: "h-5 max-h-5" },
  { src: aerofunded, alt: "AeroFunded" },
  { src: playerprofit, alt: "Player Profit" },
  { src: aquafunded, alt: "AquaFunded", sizeClass: "h-5 max-h-5" },
  { src: blueguardian, alt: "Blue Guardian" },
  { src: gft, alt: "GFT" },
  { src: atlasfunded, alt: "Atlas Funded", sizeClass: "h-5 max-h-5" },
  { src: mystery1, alt: "Client" },
  { src: keeps, alt: "Keeps", sizeClass: "h-5 max-h-5" },
  { src: puro, alt: "PURO", sizeClass: "h-5 max-h-5" },
];

// Row 2 — 10 logos. Aqua/Play/GF pairs split across rows; "Funded" brands spread within row.
const row2Set: Logo[] = [
  { src: retropia, alt: "Retropia" },
  { src: alphatrader, alt: "Alpha Trader" },
  { src: playvo, alt: "PlayVo" },
  { src: aquafutures, alt: "AquaFutures", sizeClass: "h-5 max-h-5" },
  { src: flooreight, alt: "Floor Eight" },
  { src: gff, alt: "Goat Funded Futures", sizeClass: "h-9 max-h-9" },
  { src: ftuk, alt: "FTUK", sizeClass: "h-5 max-h-5" },
  { src: solanafunded, alt: "Solana Funded" },
  { src: mystery2, alt: "Client" },
  { src: qtfunded, alt: "QT Funded", sizeClass: "h-5 max-h-5" },
];

const row1 = [...row1Set, ...row1Set];
const row2 = [...row2Set, ...row2Set];

const LogoScroll = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full overflow-hidden border-y border-border/60 bg-white py-14 flex flex-col gap-10">
        {/* Edge fades — subtle */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

        <p className="text-center text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by growing brands worldwide
        </p>
        <ul className="flex w-max shrink-0 items-center gap-20 pr-20 animate-scroll-logos">
          {row1.map((logo, i) => (
            <li key={`a-${i}`} className="shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                draggable={false}
                className={`logo-mark ${logo.sizeClass ?? "h-6 max-h-6"} w-auto object-contain`}
              />
            </li>
          ))}
        </ul>
        <ul className="flex w-max shrink-0 items-center gap-20 pr-20 animate-scroll-logos-reverse">
          {row2.map((logo, i) => (
            <li key={`c-${i}`} className="shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                draggable={false}
                className={`logo-mark ${logo.sizeClass ?? "h-6 max-h-6"} w-auto object-contain`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoScroll;
