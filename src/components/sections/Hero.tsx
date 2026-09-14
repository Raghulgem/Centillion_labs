"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Database, Shield, Maximize, Activity, Link2, Infinity as InfinityIcon } from "lucide-react";
import Image from "next/image";
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
  { icon: <Database className="w-4 h-4 text-[#38bdf8]" />, title: "Ingest", subtitle: "Any Data", position: "top-[-2%] left-[5%]", delay: 0 },
  { icon: <Zap className="w-4 h-4 text-[#a78bfa]" />, title: "Build", subtitle: "AI Solutions", position: "top-[8%] right-[-2%]", delay: 0.2 },
  { icon: <Link2 className="w-4 h-4 text-[#38bdf8]" />, title: "Unify", subtitle: "Your Data", position: "top-[38%] left-[-12%]", delay: 0.4 },
  { icon: <Activity className="w-4 h-4 text-[#f43f5e]" />, title: "Analyze", subtitle: "in Real-Time", position: "top-[45%] right-[-12%]", delay: 0.6 },
  { icon: <Shield className="w-4 h-4 text-[#38bdf8]" />, title: "Govern", subtitle: "& Stay Compliant", position: "bottom-[5%] left-[2%]", delay: 0.8 },
  { icon: <Maximize className="w-4 h-4 text-[#c084fc]" />, title: "Scale", subtitle: "Without Limits", position: "bottom-[12%] right-[-2%]", delay: 1.0 },
];

export default function Hero() {
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)", rotateX: 20 },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      rotateX: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#030712] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-[#030712]/90 to-[#030712] z-0"></div>
      
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
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
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            d="M -10 90 Q 30 110, 60 50 T 110 -10"
            fill="none"
            stroke="url(#light-flow-grad)"
            strokeWidth="6"
            filter="url(#flow-glow)"
          />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          className="flex flex-col items-start pt-10 [perspective:1000px]"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          {/* =========================================
              ENLARGED & SIMPLIFIED PARTNER BADGE
              ========================================= */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6 origin-left w-full h-[70px] relative z-50">
            
            {/* Main Pill: Scaled up with crisp sizing and smooth physics entrance */}
            <motion.div 
              initial={{ scale: 1.8, y: -40, opacity: 0, filter: "blur(20px) brightness(3)" }}
              animate={{ scale: 1, y: 0, opacity: 1, filter: "blur(0px) brightness(1)" }}
              transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.1 }}
              className="flex items-center pr-7 pl-2 py-2 bg-[#0b101c] border border-white/10 rounded-full shadow-[0_0_50px_rgba(255,54,33,0.3)] transition-all duration-300"
            >
              
              {/* Larger Logo Box */}
              <motion.div 
                initial={{ rotate: -90, scale: 0.3, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.3 }}
                className="relative flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-br from-[#4a262e] to-[#25181c] rounded-full border border-white/15 shadow-inner overflow-hidden"
              >
                 <Image 
                   src="/images/Databricklogo.png" 
                   alt="Databricks Partner" 
                   width={28} 
                   height={28} 
                   className="relative z-10 object-contain drop-shadow-md"
                 />
              </motion.div>

              {/* Text updated to "Partner" and sized up */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="flex flex-col justify-center ml-4"
              >
                <div className="flex items-center gap-1.5 mb-[3px]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef4444] shadow-[0_0_8px_#ef4444]"></span>
                  </span>
                  <span className="text-[0.7rem] font-bold text-slate-300 uppercase tracking-[0.2em] leading-none">
                    Verified
                  </span>
                </div>
                <span className="text-lg font-bold text-white leading-none tracking-wide">
                  Databricks Partner
                </span>
              </motion.div>

            </motion.div>

            {/* Laser Line Expansion */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="hidden sm:block h-[1px] w-10 bg-gradient-to-r from-slate-700/80 to-transparent origin-left"
            ></motion.div>
            
            {/* Tail Subtitle Fades In */}
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="text-[0.75rem] tracking-[0.2em] text-[#38bdf8] uppercase font-bold drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]"
            >
              Data Intelligence.
            </motion.p>
          </div>
          {/* =========================================
              END INTRO SEQUENCE
              ========================================= */}

          <motion.h1 variants={textItem} className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] mb-6 relative z-20 origin-bottom">
            <span className="block text-white drop-shadow-md">From Data</span>
            <span className="block text-gradient drop-shadow-md pb-2">to What's Next.</span>
          </motion.h1>

          <motion.p variants={textItem} className="text-lg md:text-xl text-slate-400 max-w-lg mb-10 leading-relaxed relative z-20 origin-bottom">
            Databricks consulting to modernize your data, accelerate AI, and unlock real business outcomes.
          </motion.p>

          <motion.div variants={textItem} className="flex flex-wrap items-center gap-5 mb-20 relative z-20 origin-bottom">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group px-8 py-4 bg-white text-[#030712] font-bold rounded-full hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Get Started 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-3 glass-card"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <Play className="w-3 h-3 text-white fill-white" />
              </div>
              Watch Video
            </motion.button>
          </motion.div>

          <motion.div variants={textItem} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full pt-8 border-t border-white/10 relative z-20 origin-bottom">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="text-2xl md:text-3xl font-bold text-white flex items-center min-h-[36px]">
                  {stat.value || stat.icon}
                </div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

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
                <div className="glass-card px-5 py-4 rounded-2xl flex items-center gap-4 group shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-500 overflow-hidden relative backdrop-blur-xl">
                  
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                  <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 z-10">
                    <div className="scale-125 transition-transform duration-300 group-hover:scale-110">
                      {badge.icon}
                    </div>
                  </div>
                  
                  <div className="flex flex-col z-10">
                    <span className="text-base md:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 tracking-wide leading-none mb-1.5 drop-shadow-sm group-hover:to-[#38bdf8] transition-all duration-300">
                      {badge.title}
                    </span>
                    <span className="text-[0.70rem] md:text-[0.75rem] font-bold text-slate-400 uppercase tracking-[0.25em] leading-none group-hover:text-slate-300 transition-colors">
                      {badge.subtitle}
                    </span>
                  </div>
                  
                </div>
              </FloatingCard>
            ))}

            <motion.div
              initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                rotate: [-5, -3, -5], 
                scale: 1,
                y: [0, -4, 0]
              }}
              transition={{ 
                opacity: { duration: 1, delay: 1.5 },
                scale: { duration: 1, delay: 1.5, type: "spring" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }
              }}
              className="absolute -bottom-[12%] right-[8%] text-right"
            >
              <div className="flex flex-col items-end gap-1">
                <p className="text-[#38bdf8] font-mono text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-90 drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                  SAME DATA.
                </p>
                <p className="text-white font-sans text-sm md:text-base font-extrabold tracking-[0.2em] uppercase drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                  BIGGER POSSIBILITIES.
                </p>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#38bdf8] mt-2 opacity-70"></div>
              </div>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}