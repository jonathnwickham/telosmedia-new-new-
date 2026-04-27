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
import AuditPromise from "@/components/AuditPromise";
import TelosMeaning from "@/components/TelosMeaning";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoScroll />
      <Services />
      <PhoneMarquee />
      <Partners />
      <Results />
      <Process />
      <FAQ />
      <AuditPromise />
      <CTA />
      <Explainer />
      <TelosMeaning />
      <Footer />
    </>
  );
};

export default Index;
