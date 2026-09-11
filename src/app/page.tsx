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
    // Cleaned up redundant background/selection classes that are now handled globally
    <main className="relative flex min-h-screen flex-col w-full">
      
      <Navbar />
      
      {/* Main Content Flow: Increased gap for premium spacing, added top padding for fixed nav */}
      <div className="relative z-10 flex flex-col gap-32 md:gap-40 pt-20">
        
        <section id="hero">
          <Hero />
        </section>
        
        <section id="trusted-by">
          <TrustedBy />
        </section>
        
        <section id="services" className="relative">
          {/* Subtle mid-page left ambient light */}
          <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] -translate-y-1/2 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.03)_0%,transparent_70%)] blur-[120px] pointer-events-none z-[-1]"></div>
          <Services />
        </section>
        
        <section id="why-us">
          <WhyUs />
        </section>
        
        <section id="impact" className="relative">
          {/* Subtle lower-page right ambient light */}
          <div className="absolute top-1/2 right-0 w-[60vw] h-[60vw] -translate-y-1/2 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.025)_0%,transparent_70%)] blur-[120px] pointer-events-none z-[-1]"></div>
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

      {/* Footer wrapper - Kept exactly as you wrote it to preserve your light-mode transition */}
      <div className="relative z-10 w-full bg-white text-slate-900 [&_p]:text-slate-600 [&_a]:text-slate-700 [&_span]:text-slate-700 mt-32">
        <Footer />
      </div>
    </main>
  );
}