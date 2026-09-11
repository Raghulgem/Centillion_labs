"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, Building2, HeartPulse, ShoppingBag, Factory, Cpu, Landmark } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const industries = [
  { name: "Financial Services", icon: <Building2 className="w-5 h-5 text-blue-600" /> },
  { name: "Healthcare", icon: <HeartPulse className="w-5 h-5 text-blue-600" /> },
  { name: "Retail & CPG", icon: <ShoppingBag className="w-5 h-5 text-blue-600" /> },
  { name: "Manufacturing", icon: <Factory className="w-5 h-5 text-blue-600" /> },
  { name: "Technology", icon: <Cpu className="w-5 h-5 text-blue-600" /> },
  { name: "Public Sector", icon: <Landmark className="w-5 h-5 text-blue-600" /> },
];

export default function Success() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-28 px-6 relative bg-white text-slate-900 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] mx-2 lg:mx-6 my-12 z-20 overflow-hidden">
      
      {/* Subtle background radial gradient for the white theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(240,249,255,1)_0%,_rgba(255,255,255,0)_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column 1: Testimonial Card */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] h-full min-h-[460px]">
            <div>
              <ScrollReveal direction="up" distance={20}>
                <p className="text-xs tracking-[0.2em] text-slate-500 uppercase font-bold mb-6">
                  05 — Success Stories
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" distance={20} delay={0.1}>
                <p className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed mb-8">
                  "Centillion Labs helped us build a scalable data platform on Databricks that accelerated our AI initiatives by 6 months."
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" distance={20} delay={0.2} className="w-full pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="https://i.pravatar.cc/150?img=32" 
                  alt="Client Profile" 
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">VP, Data & Analytics</span>
                  <span className="text-[0.7rem] text-slate-500 font-medium">Global Retail Enterprise</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
                  <ArrowLeft className="w-4 h-4 text-slate-700" />
                </button>
                <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
                  <ArrowRight className="w-4 h-4 text-slate-700" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Column 2: Vertical Banner Card */}
          <div className="lg:col-span-3 h-[460px]">
            <ScrollReveal direction="up" distance={30} delay={0.2} className="w-full h-full">
              <div className="relative w-full h-full rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <h3 className="text-2xl font-bold tracking-tight text-white leading-[1.1]">
                    REAL<br/>PEOPLE<br/>REAL<br/><span className="text-blue-400">PROGRESS</span>
                  </h3>
                  
                  <div className="self-end w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:scale-105 transition-all shadow-md">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5 group-hover:text-blue-600 group-hover:fill-blue-600 transition-colors" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Column 3: Transforming Industries Section */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] h-full min-h-[460px]">
            <div>
              <ScrollReveal direction="up" distance={20} delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.2] mb-3 text-slate-900">
                  Transforming <br/> industries with data.
                </h2>
              </ScrollReveal>
              
              <ScrollReveal direction="up" distance={20} delay={0.2}>
                <p className="text-slate-500 text-sm mb-8 font-medium">
                  From finance to healthcare, we help organizations turn data into a competitive advantage.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {industries.map((industry, idx) => (
                <ScrollReveal key={idx} direction="up" distance={20} delay={0.3 + (idx * 0.05)}>
                  <div className="p-4 rounded-2xl flex flex-col items-center justify-center text-center aspect-square border border-slate-100 bg-slate-50/50 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group shadow-sm">
                    <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <span className="text-[0.65rem] uppercase tracking-wider font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}