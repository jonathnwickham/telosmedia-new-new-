import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoScroll from "@/components/LogoScroll";
import Partners from "@/components/Partners";
import PhoneMarquee from "@/components/PhoneMarquee";

import Services from "@/components/Services";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Explainer from "@/components/Explainer";
import Testimonials from "@/components/Testimonials";
import Meaning from "@/components/Meaning";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoScroll />
      <Partners />
      <PhoneMarquee />

      <Services />
      <Results />
      <Process />
      <Explainer />
      <Testimonials />
      <Meaning />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default Index;
