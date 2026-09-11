"use client";

import { motion } from "framer-motion";
import { FileText, Search, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const steps = [
  {
    num: "01",
    title: "Share Your Requirement",
    desc: "Tell us the role, skills and timeline.",
    icon: <FileText className="w-6 h-6 text-[#38bdf8]" />,
  },
  {
    num: "02",
    title: "We Source & Screen",
    desc: "AI + expert screening to find the best fit.",
    icon: <Search className="w-6 h-6 text-[#38bdf8]" />,
  },
  {
    num: "03",
    title: "Receive Profiles (24 hrs)",
    desc: "Up to 3 matched, pre-vetted consultants.",
    icon: <UserCheck className="w-6 h-6 text-[#38bdf8]" />,
  },
  {
    num: "04",
    title: "Onboard & Deploy",
    desc: "NDA, contracts and PO signed. You're ready.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#38bdf8]" />,
  },
];

export default function Process() {
  // Staggered cinematic container for the process steps
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-32 px-6 relative bg-[#030712] text-white overflow-hidden bg-noise">
      
      {/* Volumetric background lighting */}
      <div className="absolute inset-0 bg-[#030712] z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(15,23,42,0.6)_0%,_rgba(3,7,18,1)_70%)]"></div>
        {/* Subtle cyan ambient glow tracking the timeline */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[80vw] h-[200px] bg-[#38bdf8]/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <ScrollReveal direction="up" distance={30}>
              <p className="text-xs tracking-[0.2em] text-[#38bdf8] uppercase font-bold mb-4 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                05 — How it works
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                From requirement to <br className="hidden md:block" />
                deployed consultant <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-white drop-shadow-lg">in 4 steps.</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" distance={30} delay={0.2} className="md:text-right max-w-sm">
            <p className="text-slate-400 text-lg font-medium">
              A simple, transparent process. Measured in days, not months.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          
          {/* Animated Connecting Energy Beam (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-white/5 z-0 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="h-full bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent origin-left opacity-80 shadow-[0_0_15px_rgba(56,189,248,0.8)]"
            />
          </div>
          
          {/* Staggered Step Items */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10"
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="relative flex flex-col items-start group cursor-default"
              >
                <div className="flex items-center w-full mb-8">
                  {/* Interactive Node */}
                  <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center border border-white/5 shadow-2xl relative z-10 bg-[#030712]/90 backdrop-blur-2xl transition-all duration-500 group-hover:border-[#38bdf8]/40 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.15)] group-hover:-translate-y-1">
                    <div className="transform transition-transform duration-500 group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Arrow for Desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex flex-1 items-center justify-end pr-4">
                      <ArrowRight className="w-5 h-5 text-slate-700 transition-colors duration-500 group-hover:text-slate-400" />
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#38bdf8] mb-2 font-mono tracking-widest">{step.num}</span>
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#38bdf8]">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-[250px] font-medium group-hover:text-slate-300 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}