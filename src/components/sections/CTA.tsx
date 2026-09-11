"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CTA() {
  return (
    <section className="py-16 px-6 relative bg-white text-slate-900 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] mx-2 lg:mx-6 my-12 mb-24 z-20 overflow-hidden">
      
      {/* Subtle background gradient to maintain consistency with the white theme sections */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(240,249,255,1)_0%,_rgba(255,255,255,0)_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cinematic Dark Banner Container matching the reference image */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[#030712] text-white py-20 px-8 lg:px-16 shadow-2xl border border-slate-800">
          
          {/* Alpine Mountain Background & Lighting Overlays */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity grayscale"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent w-[80%]"></div>
            {/* Warm golden light glow on the right side simulating the building lights */}
            <div className="absolute right-10 bottom-10 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <p className="text-xs tracking-[0.2em] text-slate-400 uppercase mb-6 font-bold">
                READY TO BUILD WHAT'S NEXT?
              </p>
              
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                Let's turn your data into <span className="text-[#38bdf8]">lasting impact.</span>
              </h2>
              
              <p className="text-base lg:text-lg text-slate-300 mb-8 font-medium">
                Get matched Databricks experts in 24 hours. No spam, ever.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                {/* Primary Button */}
                <button className="group px-7 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.25)] text-sm">
                  Request Profiles 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                {/* Secondary Button */}
                <button className="group px-7 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all text-sm backdrop-blur-md">
                  Talk to an Expert
                </button>
              </div>

              {/* Expert Avatars & Counter */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 w-full max-w-sm">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-[#030712] bg-slate-800 overflow-hidden shadow-md">
                      <img 
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        alt="Expert" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">200+</p>
                  <p className="text-slate-400 text-[0.65rem] uppercase tracking-wider font-semibold mt-0.5">Data Experts</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Futuristic Monolith & Navigation Ticker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative h-[380px] w-full rounded-2xl overflow-hidden border border-white/10 hidden lg:flex items-center justify-end p-6 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
            >
              {/* Floating Monolith Card representing the image's futuristic building structure */}
              <div className="absolute left-8 bottom-8 z-20 glass-card px-5 py-4 rounded-xl border border-white/20 backdrop-blur-xl bg-slate-950/70 shadow-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#38bdf8] to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                  <div className="w-4 h-4 border-2 border-white transform rotate-45"></div>
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight">Centillion Labs</p>
                  <p className="text-[0.6rem] text-slate-300 tracking-widest uppercase font-medium mt-0.5">Data | AI | Cloud Transformation</p>
                </div>
              </div>

              {/* Right Sidebar Ticker (DATA, PEOPLE, PROCESS, IMPACT) */}
              <div className="z-20 flex flex-col gap-6 text-[10px] tracking-[0.3em] font-bold text-slate-500 uppercase pr-2">
                <span className="hover:text-[#38bdf8] transition-colors cursor-default">DATA</span>
                <span className="hover:text-[#38bdf8] transition-colors cursor-default">PEOPLE</span>
                <span className="hover:text-[#38bdf8] transition-colors cursor-default">PROCESS</span>
                <span className="text-white relative font-extrabold text-xs">
                  IMPACT
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2.5 h-[2px] bg-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
                </span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}