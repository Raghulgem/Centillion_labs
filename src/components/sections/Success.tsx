"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Staggered grid container for the industries
  const gridContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const gridItem = {
    hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-28 px-6 relative bg-white text-slate-900 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] mx-2 lg:mx-6 my-12 z-20 overflow-hidden">
      
      {/* Upgraded background ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(240,249,255,1)_0%,_rgba(255,255,255,0)_70%)]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,_rgba(224,242,254,0.6)_0%,_transparent_60%)] rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column 1: Testimonial Card (Acrylic Glass) */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-100 shadow-[0_15px_40px_rgba(37,99,235,0.06)] h-full min-h-[460px]"
          >
            <div>
              <ScrollReveal direction="up" distance={20}>
                <p className="text-xs tracking-[0.2em] text-slate-500 uppercase font-bold mb-6">
                  05 — Success Stories
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" distance={20} delay={0.1}>
                {/* Simulated text crossfade for pagination */}
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.4 }}
                    className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed mb-8"
                  >
                    "Centillion Labs helped us build a scalable data platform on Databricks that accelerated our AI initiatives by 6 months."
                  </motion.p>
                </AnimatePresence>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" distance={20} delay={0.2} className="w-full pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src="https://i.pravatar.cc/150?img=32" 
                    alt="Client Profile" 
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md relative z-10"
                  />
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-[8px] opacity-20 -z-10 translate-y-1"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">VP, Data & Analytics</span>
                  <span className="text-[0.7rem] text-slate-500 font-medium">Global Retail Enterprise</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Tactile Pagination Buttons */}
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 transition-colors shadow-sm bg-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 transition-colors shadow-sm bg-white"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Column 2: Vertical Banner Card */}
          <div className="lg:col-span-3 h-[460px]">
            <ScrollReveal direction="up" distance={30} delay={0.2} className="w-full h-full">
              <div className="relative w-full h-full rounded-3xl overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.12)] cursor-pointer">
                
                {/* Infinite Cinematic Pan */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.08, 1],
                    y: ["0%", "-2%", "0%"]
                  }}
                  transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/20 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <h3 className="text-2xl font-bold tracking-tight text-white leading-[1.1] transform group-hover:scale-105 group-hover:translate-x-1 transition-all duration-500 origin-left">
                    REAL<br/>PEOPLE<br/>REAL<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">PROGRESS</span>
                  </h3>
                  
                  {/* Pulsing Play Button */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="self-end relative w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center transition-all shadow-xl z-20 group-hover:bg-white"
                  >
                    {/* Infinite Pulse Ring */}
                    <motion.div 
                      animate={{ boxShadow: ["0 0 0 0px rgba(255,255,255,0.4)", "0 0 0 20px rgba(255,255,255,0)"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full z-[-1]"
                    />
                    <Play className="w-5 h-5 text-white fill-white ml-0.5 group-hover:text-blue-600 group-hover:fill-blue-600 transition-colors" />
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Column 3: Transforming Industries Section (Acrylic Glass) */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-100 shadow-[0_15px_40px_rgba(37,99,235,0.06)] h-full min-h-[460px]"
          >
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

            {/* Staggered Spring-Loaded Industry Grid */}
            <motion.div 
              variants={gridContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-3 gap-3"
            >
              {industries.map((industry, idx) => (
                <motion.div 
                  key={idx}
                  variants={gridItem}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05, 
                    backgroundColor: "rgba(239, 246, 255, 0.5)",
                    borderColor: "rgba(191, 219, 254, 1)" 
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="p-4 rounded-2xl flex flex-col items-center justify-center text-center aspect-square border border-slate-100 bg-slate-50/50 cursor-pointer shadow-sm relative overflow-hidden group"
                >
                  {/* Hover ambient glow inside the card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/5 group-hover:to-blue-600/10 transition-colors duration-500 z-0"></div>
                  
                  <div className="mb-2 relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-wider font-bold text-slate-700 group-hover:text-blue-700 transition-colors relative z-10">
                    {industry.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}