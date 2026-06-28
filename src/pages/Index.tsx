import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Gallery from "@/components/landing/Gallery";
import AIEmployees from "@/components/landing/AIEmployees";
import WhyAutomify from "@/components/landing/WhyAutomify";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Gallery />
      <AIEmployees />
      <WhyAutomify />
      <FinalCTA />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
