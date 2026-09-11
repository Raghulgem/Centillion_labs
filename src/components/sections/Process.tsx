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
  return (
    <section className="py-24 px-6 relative bg-[#030712] text-white">
      <div className="absolute inset-0 bg-[#030712] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-[#030712] to-[#030712]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <ScrollReveal direction="up" distance={20}>
              <p className="text-xs tracking-[0.2em] text-slate-400 uppercase font-bold mb-4">
                05 — How it works
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" distance={20} delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                From requirement to <br className="hidden md:block" />
                deployed consultant <span className="text-[#38bdf8]">in 4 steps.</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" distance={20} delay={0.2} className="md:text-right max-w-sm">
            <p className="text-slate-400 text-lg">
              A simple, transparent process. Measured in days, not months.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-white/10 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <ScrollReveal 
                key={idx} 
                direction="up" 
                distance={30} 
                delay={0.1 * idx}
                className="relative flex flex-col items-start"
              >
                <div className="flex items-center w-full mb-8">
                  <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center border border-white/15 shadow-[0_0_30px_rgba(56,189,248,0.15)] relative z-10 bg-[#030712]/90">
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex flex-1 items-center justify-end pr-4 text-slate-600">
                      <ArrowRight className="w-5 h-5 text-slate-500" />
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#38bdf8] mb-2">{step.num}</span>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-[250px]">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}