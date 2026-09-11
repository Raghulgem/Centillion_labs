"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Database, Shield, Maximize, Activity, Link2, Infinity as InfinityIcon } from "lucide-react";
import SceneProvider from "../3d/SceneProvider";
import HeroCube from "../3d/HeroCube";
import FloatingNodes from "../3d/FloatingNodes";
import FloatingCard from "../animations/FloatingCard";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const stats = [
  { value: "24hr", label: "Profile Delivery" },
  { value: "100+", label: "Data Experts" },
  { value: "30+", label: "Global Clients" },
  { icon: <InfinityIcon className="w-5 h-5 text-white" />, label: "Bigger Possibilities" },
];

const badges = [
  { icon: <Database className="w-4 h-4 text-[#38bdf8]" />, title: "Ingest", subtitle: "Any Data", position: "top-[10%] left-[10%]", delay: 0 },
  { icon: <Zap className="w-4 h-4 text-[#a78bfa]" />, title: "Build", subtitle: "AI Solutions", position: "top-[15%] right-[5%]", delay: 0.2 },
  { icon: <Link2 className="w-4 h-4 text-[#38bdf8]" />, title: "Unify", subtitle: "Your Data", position: "top-[45%] left-[0%]", delay: 0.4 },
  { icon: <Activity className="w-4 h-4 text-[#f43f5e]" />, title: "Analyze", subtitle: "in Real-Time", position: "top-[40%] right-[0%]", delay: 0.6 },
  { icon: <Shield className="w-4 h-4 text-[#38bdf8]" />, title: "Govern", subtitle: "& Stay Compliant", position: "bottom-[20%] left-[15%]", delay: 0.8 },
  { icon: <Maximize className="w-4 h-4 text-[#c084fc]" />, title: "Scale", subtitle: "Without Limits", position: "bottom-[25%] right-[10%]", delay: 1.0 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#030712] text-white">
      {/* Base Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/40 via-[#030712]/90 to-[#030712] z-0"></div>
      
      {/* Dynamic Light Flow Effect */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-80"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="light-flow-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="20%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
            <filter id="flow-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" />
            </filter>
            <filter id="flow-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          
          {/* Broad background glow */}
          <path
            d="M -10 90 Q 30 110, 60 50 T 110 -10"
            fill="none"
            stroke="url(#light-flow-grad)"
            strokeWidth="6"
            filter="url(#flow-glow)"
            className="opacity-60"
          />
          
          {/* Tighter core flow */}
          <path
            d="M -10 90 Q 30 110, 60 50 T 110 -10"
            fill="none"
            stroke="url(#light-flow-grad)"
            strokeWidth="1.5"
            filter="url(#flow-blur)"
          />
          
          {/* Bright inner core */}
          <path
            d="M -10 90 Q 30 110, 60 50 T 110 -10"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.2"
            filter="url(#flow-blur)"
            className="opacity-50"
          />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col items-start pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-[#38bdf8]"></div>
            <p className="text-xs tracking-[0.2em] text-slate-300 uppercase font-bold">
              Data Intelligence. Real Business Impact.
            </p>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] mb-6 relative z-20">
            <span className="block text-white drop-shadow-md">From Data</span>
            <span className="block text-gradient drop-shadow-md">to What's Next.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-lg mb-10 leading-relaxed relative z-20"
          >
            Databricks consulting to modernize your data, accelerate AI, and unlock real business outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5 mb-20 relative z-20"
          >
            <button className="group px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.25)]">
              Get Started 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white/5 border border-white/15 text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center gap-3 glass-card">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play className="w-3 h-3 text-white fill-white" />
              </div>
              Watch Video
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full pt-8 border-t border-white/10 relative z-20"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="text-2xl md:text-3xl font-bold text-white flex items-center min-h-[36px]">
                  {stat.value || stat.icon}
                </div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative h-[600px] w-full hidden lg:block">
          <SceneProvider className="absolute inset-[-20%] z-0">
            <HeroCube />
            <FloatingNodes count={1500} />
          </SceneProvider>

          <div className="absolute inset-0 z-10 pointer-events-none">
            {badges.map((badge, idx) => (
              <FloatingCard
                key={idx}
                delay={badge.delay}
                duration={4 + Math.random() * 2}
                yOffset={10 + Math.random() * 10}
                className={cn("absolute pointer-events-auto", badge.position)}
              >
                <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 border border-white/10 hover:border-white/30 transition-colors cursor-pointer group bg-[#030712]/70">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {badge.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white leading-none mb-1">{badge.title}</span>
                    <span className="text-[0.65rem] text-slate-400 uppercase tracking-wider leading-none">{badge.subtitle}</span>
                  </div>
                </div>
              </FloatingCard>
            ))}

            <motion.div
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -15, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-[5%] right-[20%] text-right"
            >
              <p className="text-[#38bdf8] font-handwriting text-xl tracking-wider opacity-90" style={{ fontFamily: "'Caveat', cursive, sans-serif" }}>
                SAME DATA.<br/>BIGGER POSSIBILITIES.
              </p>
              <svg className="w-16 h-16 absolute -bottom-8 -right-8 text-[#38bdf8] opacity-60 transform -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10,90 Q40,40 90,10" strokeDasharray="5,5" />
                <path d="M80,10 L90,10 L90,20" />
              </svg>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}