import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Impact from "@/components/sections/Impact";
import Process from "@/components/sections/Process";
import Success from "@/components/sections/Success";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#030712] overflow-x-hidden text-slate-100 selection:bg-sky-500/30 selection:text-white">
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-20" />
      
      <Navbar />
      
      <div className="relative z-10 flex flex-col gap-24 md:gap-32">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="trusted-by">
          <TrustedBy />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="why-us">
          <WhyUs />
        </section>
        
        <section id="impact">
          <Impact />
        </section>
        
        <section id="process">
          <Process />
        </section>
        
        <section id="success-stories">
          <Success />
        </section>
        
        <section id="cta">
          <CTA />
        </section>
      </div>

      {/* Footer wrapper with forced text color overrides to counteract global body styles */}
      <div className="relative z-10 w-full bg-white text-slate-900 [&_p]:text-slate-600 [&_a]:text-slate-700 [&_span]:text-slate-700 mt-12">
        <Footer />
      </div>
    </main>
  );
}