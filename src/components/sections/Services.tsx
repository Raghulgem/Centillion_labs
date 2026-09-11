"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, LineChart, Shield, Users, Cpu, Lightbulb } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const services = [
  {
    title: "Strategy & Advisory",
    icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
    position: { left: "50%", top: "8%" },
    delay: 0.1,
  },
  {
    title: "Analytics & BI",
    icon: <LineChart className="w-5 h-5 text-emerald-500" />,
    position: { left: "90%", top: "30%" },
    delay: 0.2,
  },
  {
    title: "Governance & Security",
    icon: <Shield className="w-5 h-5 text-blue-500" />,
    position: { left: "90%", top: "70%" },
    delay: 0.3,
  },
  {
    title: "Databricks Talent",
    icon: <Users className="w-5 h-5 text-purple-600" />,
    position: { left: "50%", top: "92%" },
    delay: 0.4,
  },
  {
    title: "AI & Machine Learning",
    icon: <Cpu className="w-5 h-5 text-red-500" />,
    position: { left: "10%", top: "70%" },
    delay: 0.5,
  },
  {
    title: "Data Engineering",
    icon: <Database className="w-5 h-5 text-blue-600" />,
    position: { left: "10%", top: "30%" },
    delay: 0.6,
  },
];

export default function Services() {
  return (
    <section className="py-28 px-6 relative overflow-hidden bg-white text-slate-900 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] z-20 mx-2 lg:mx-6 -mt-8 mb-12">
      {/* Subtle background radial for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(240,249,255,0.8)_0%,_rgba(255,255,255,0)_70%)] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start z-10 lg:pl-8">
          <ScrollReveal direction="up" distance={30}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs tracking-[0.2em] text-slate-500 uppercase font-bold">
                02 — Our Services
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.1}>
            <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.1] mb-6 text-slate-900">
              End-to-End <br />
              <span className="text-blue-600">Databricks</span> Expertise.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.2}>
            <p className="text-lg text-slate-500 max-w-md mb-10 leading-relaxed font-medium">
              Strategy, engineering, analytics, AI/ML, and governance — built around your business goals.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.3}>
            <button className="group px-8 py-4 bg-[#030712] hover:bg-slate-800 text-white font-semibold rounded-full transition-all flex items-center gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
              Explore All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </ScrollReveal>
        </div>

        {/* Right Content - Orbital UI */}
        <div className="relative w-full aspect-square max-w-[550px] mx-auto z-0 mt-12 lg:mt-0">
          
          {/* Faint Concentric Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded-full border border-slate-200 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-slate-100 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(241,245,249,0.4)_0%,_transparent_70%)]"></div>

          {/* Dotted connecting lines */}
          <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-50" viewBox="0 0 100 100">
             {services.map((service, idx) => (
               <line 
                 key={idx}
                 x1="50%" 
                 y1="50%" 
                 x2={service.position.left} 
                 y2={service.position.top} 
                 stroke="#94a3b8" 
                 strokeWidth="0.2"
                 strokeDasharray="1,1.5"
               />
             ))}
          </svg>

          {/* Central Dark Orb - FIXED WITH 3D LIGHT RAYS */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
            whileInView={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="absolute top-1/2 left-1/2 z-20 flex items-center justify-center flex-shrink-0"
            style={{ width: "260px", height: "260px" }}
          >
            {/* Outer Ambient Glow mapping the inner light colors */}
            <div className="absolute inset-[-40px] rounded-full bg-gradient-to-tr from-blue-700/20 via-transparent to-pink-500/20 blur-3xl z-0 pointer-events-none"></div>
            
            {/* Core Dark Orb */}
            <div className="relative w-full h-full rounded-full bg-[#050b14] overflow-hidden flex flex-col items-center justify-center text-center z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
              
              {/* --- 1. Soft Background Glows --- */}
              <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-pink-600/40 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute top-[20%] -right-[20%] w-[70%] h-[70%] bg-cyan-500/40 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-[20%] left-[10%] w-[90%] h-[60%] bg-blue-700/50 rounded-full blur-3xl pointer-events-none"></div>

              {/* --- 2. The "Ray Flow" / Sharp Glass Reflections --- */}
              {/* Top-Left Pink Light Flare & Crescent */}
              <div className="absolute inset-[-2px] rounded-full border-[3px] border-transparent border-t-pink-400 border-l-pink-400 opacity-90 blur-[1px] transform -rotate-12 pointer-events-none"></div>
              <div className="absolute -top-[15%] -left-[15%] w-[60%] h-[60%] bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_0%,_rgba(236,72,153,0.8)_20%,_transparent_60%)] pointer-events-none mix-blend-screen"></div>

              {/* Right Cyan Light Flare & Crescent */}
              <div className="absolute inset-[-2px] rounded-full border-[3px] border-transparent border-b-cyan-400 border-r-cyan-400 opacity-80 blur-[1px] transform -rotate-[15deg] pointer-events-none"></div>
              <div className="absolute top-[25%] -right-[25%] w-[70%] h-[70%] bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_0%,_rgba(34,211,238,0.7)_20%,_transparent_60%)] pointer-events-none mix-blend-screen"></div>

              {/* --- 3. Inner Glass Mapping Rings --- */}
              {/* Sharp inner rim to define the glass surface */}
              <div className="absolute inset-[4px] rounded-full border border-white/20 pointer-events-none mix-blend-overlay"></div>
              <div className="absolute inset-[10px] rounded-full border-t border-l border-white/30 transform -rotate-45 pointer-events-none opacity-40"></div>

              {/* --- 4. Deep Core Shadows --- */}
              {/* Keeps the center dark and the text highly legible */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] pointer-events-none"></div>

              {/* Text */}
              <span className="text-white font-bold text-xl leading-tight px-4 relative z-30 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                Your <br/> Data Advantage
              </span>
            </div>
          </motion.div>

          {/* Orbiting Service Cards */}
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: service.delay, type: "spring", bounce: 0.5 }}
              className="absolute z-30"
              style={{ left: service.position.left, top: service.position.top }}
            >
              <div className="bg-white px-5 py-3 rounded-full flex items-center gap-3 border border-slate-100 hover:border-blue-200 transition-all duration-300 cursor-pointer shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.12)] hover:-translate-y-1 whitespace-nowrap group">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100 text-slate-700">
                  {service.icon}
                </div>
                <span className="text-sm font-bold text-slate-700 tracking-wide pr-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </span>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}