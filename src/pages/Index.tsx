import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhoneMarquee from "@/components/PhoneMarquee";
import StatBar from "@/components/StatBar";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Explainer from "@/components/Explainer";
import Testimonials from "@/components/Testimonials";
import Meaning from "@/components/Meaning";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PhoneMarquee />
      <StatBar />
      <Services />
      <Results />
      <Process />
      <Explainer />
      <Testimonials />
      <Meaning />
      <CTA />
      <Footer />
    </>
  );
};

export default Index;
