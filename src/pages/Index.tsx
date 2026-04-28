import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoScroll from "@/components/LogoScroll";
import Partners from "@/components/Partners";
import PhoneMarquee from "@/components/PhoneMarquee";

import Services from "@/components/Services";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Explainer from "@/components/Explainer";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TelosMeaning from "@/components/TelosMeaning";
import Footer from "@/components/Footer";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return isMobile;
};

const Index = () => {
  const isMobile = useIsMobile();
  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <Navbar />
      <Hero />
      <LogoScroll />
      <Services />
      <PhoneMarquee />
      <Partners />
      <Results />
      <Process />
      <FAQ />
      <Explainer />
      <CTA />
      <TelosMeaning />
      <Footer />
    </MotionConfig>
  );
};

export default Index;
