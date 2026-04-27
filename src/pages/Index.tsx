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

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoScroll />
      <PhoneMarquee />

      <Services />
      <Partners />
      <Results />
      <Process />
      <FAQ />
      <CTA />
      <Explainer />
      <TelosMeaning />
      <Footer />
    </>
  );
};

export default Index;
