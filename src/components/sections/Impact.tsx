"use client";

import { motion } from "framer-motion";
import { Globe2, Target, Sparkles, BarChart3 } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import FloatingCard from "../animations/FloatingCard";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const stats = [
  { value: "100+", description: "Years of combined expertise" },
  { value: "30+", description: "Global clients" },
  { value: "160+", description: "Databricks consultants deployed" },
  { value: "24hr", description: "Average profile turnaround" },
];

const badges = [
  { 
    icon: <Globe2 className="w-5 h-5 text-white" />, 
    label: "Global\nDelivery", 
    position: "top-[10%] left-[0%]",
    delay: 0
  },
  { 
    icon: <Target className="w-5 h-5 text-white" />, 
    label: "Real Business\nOutcomes", 
    position: "top-[22%] right-[-5%]",
    delay: 0.2
  },
  { 
    icon: <Sparkles className="w-5 h-5 text-white" />, 
    label: "Future-Ready\nEnterprises", 
    position: "bottom-[25%] right-[0%]",
    delay: 0.4
  },
  { 
    icon: <BarChart3 className="w-5 h-5 text-white" />, 
    label: "Smarter\nDecisions", 
    position: "bottom-[12%] left-[5%]",
    delay: 0.6
  }
];

// --- Corrected Light-Mode Globe Component ---
function DottedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 3,
      width: 1000,
      height: 1000,
      phi: 0.4,
      theta: 0.2,
      dark: 0, // Explicitly set to 0 for light theme
      diffuse: 1.2,
      mapSamples: 25000,
      mapBrightness: 8,
      baseColor: [1, 1, 1], // Pure white canvas base
      markerColor: [0.1, 0.4, 0.95],
      glowColor: [0.8, 0.9, 1],
      markers: [],
      onRender: (state: Record<string, any>) => {
        state.phi = phi;
        phi += 0.0025;
      },
    } as any);

    return () => globe.destroy();
  }, []);

  return (
    <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50/40 via-white to-blue-50/60 shadow-[0_20px_50px_rgba(37,99,235,0.08)] border border-blue-100/60">
      {/* Globe Canvas */}
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", maxWidth: "100%", aspectRatio: 1 }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-105"
      />

      {/* Precision Intersecting Orbital Rings */}
      <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full pointer-events-none opacity-80 scale-110 overflow-visible z-10">
        <defs>
          <linearGradient id="ringFade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <circle cx="150" cy="150" r="142" fill="none" stroke="#93c5fd" strokeWidth="0.5" strokeDasharray="2,4" />
        <ellipse cx="150" cy="150" rx="148" ry="48" fill="none" stroke="url(#ringFade)" strokeWidth="0.8" transform="rotate(-25 150 150)" />
        <ellipse cx="150" cy="150" rx="148" ry="48" fill="none" stroke="url(#ringFade)" strokeWidth="0.8" transform="rotate(35 150 150)" />
        <ellipse cx="150" cy="150" rx="140" ry="80" fill="none" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="3,3" transform="rotate(70 150 150)" />

        <circle cx="55" cy="115" r="3" fill="#2563eb" className="animate-pulse" />
        <circle cx="245" cy="185" r="3" fill="#3b82f6" className="animate-pulse" />
        <circle cx="175" cy="45" r="2.5" fill="#60a5fa" />
        <circle cx="120" cy="255" r="2.5" fill="#1d4ed8" />
      </svg>
    </div>
  );
}

export default function Impact() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-white text-slate-900 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] mx-2 lg:mx-6 my-12 z-20">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(240,249,255,1)_0%,_rgba(255,255,255,0)_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-start lg:pr-10">
            <ScrollReveal direction="up" distance={30}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs tracking-[0.2em] text-slate-500 uppercase font-bold">
                  04 — Real Impact
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.1] mb-6 text-slate-900">
                Numbers <br />
                that tell the <span className="text-blue-600">story.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <p className="text-lg text-slate-500 max-w-lg mb-12 leading-relaxed font-medium">
                Helping organizations worldwide accelerate their Data & AI journey with Databricks.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={40} delay={0.3} className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {stats.map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="flex flex-col gap-2 p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] transition-all duration-300"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-blue-600">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold leading-relaxed">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 relative h-[500px] md:h-[650px] w-full mt-10 lg:mt-0 flex items-center justify-center">
            
            <div className="absolute w-[380px] h-[380px] md:w-[460px] md:h-[460px] z-10 pointer-events-none flex items-center justify-center">
              <DottedGlobe />
            </div>

            <div className="absolute inset-0 z-20 pointer-events-none">
              {badges.map((badge, idx) => (
                <FloatingCard
                  key={idx}
                  delay={badge.delay}
                  duration={5 + Math.random() * 2}
                  yOffset={8}
                  className={cn("absolute pointer-events-auto", badge.position)}
                >
                  <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-4 border border-slate-100 shadow-[0_15px_35px_rgba(37,99,235,0.08)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all cursor-default group">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-inner group-hover:bg-blue-700 transition-colors shrink-0">
                      {badge.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-800 tracking-tight leading-tight whitespace-pre-line">
                      {badge.label}
                    </span>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}