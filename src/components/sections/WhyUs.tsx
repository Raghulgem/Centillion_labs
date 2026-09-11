"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Zap, Maximize2, ShieldCheck, Globe, Database, Users } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import Parallax from "../animations/Parallax";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const features = [
  {
    title: "Business-First Approach",
    desc: "We align data with business outcomes.",
    icon: <TrendingUp className="w-5 h-5 text-[#38bdf8]" />,
  },
  {
    title: "Certified Databricks Experts",
    desc: "Battle-tested consultants across the stack.",
    icon: <Award className="w-5 h-5 text-[#38bdf8]" />,
  },
  {
    title: "Accelerated Delivery",
    desc: "From strategy to value — faster.",
    icon: <Zap className="w-5 h-5 text-[#38bdf8]" />,
  },
  {
    title: "Flexible Engagement",
    desc: "Scale up or down, on demand.",
    icon: <Maximize2 className="w-5 h-5 text-[#38bdf8]" />,
  },
  {
    title: "Security & Compliance",
    desc: "NDA, background checks and policy adherence.",
    icon: <ShieldCheck className="w-5 h-5 text-[#38bdf8]" />,
  },
  {
    title: "Cross-Industry Experience",
    desc: "BFSI, Healthcare, Retail, Manufacturing & more.",
    icon: <Globe className="w-5 h-5 text-[#38bdf8]" />,
  },
  {
    title: "Modern Data Stack",
    desc: "Lakehouse, GenAI, real-time analytics.",
    icon: <Database className="w-5 h-5 text-[#38bdf8]" />,
  },
  {
    title: "Ongoing Partnership",
    desc: "We grow as you grow.",
    icon: <Users className="w-5 h-5 text-[#38bdf8]" />,
  },
];

export default function WhyUs() {
  // Staggered cinematic container for the feature grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(12px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden min-h-screen flex items-center bg-[#030712] text-white bg-noise z-10">
      
      {/* Advanced Cinematic Background Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Parallax offset={80} className="w-full h-[130%] -top-[15%]">
          {/* Base Mountain Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.15] mix-blend-luminosity grayscale"></div>
          
          {/* Deep Vignette & Atmospheric Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/70 to-[#030712]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent w-[80%]"></div>
          
          {/* Volumetric cyan ambient light */}
          <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,_rgba(56,189,248,0.04)_0%,_transparent_70%)] rounded-full blur-[100px] translate-x-1/4 translate-y-1/4"></div>
        </Parallax>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content: Typography & Interactive Feature Grid */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <ScrollReveal direction="up" distance={30}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#38bdf8]"></span>
              <p className="text-xs tracking-[0.2em] text-[#38bdf8] uppercase font-bold drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
                03 — Why Centillion Labs
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.1}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              More than consultants.<br />
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#a78bfa] drop-shadow-[0_0_20px_rgba(56,189,248,0.2)]">long-term data partner.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.2}>
            <p className="text-lg text-slate-400 max-w-2xl mb-16 leading-relaxed font-medium">
              We bring deep domain expertise, delivery excellence, and a commitment to your success across the modern data stack.
            </p>
          </ScrollReveal>

          {/* Staggered Glass Feature Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02, 
                  transition: { type: "spring", stiffness: 400, damping: 25 } 
                }}
                className="flex flex-col group cursor-default p-6 rounded-2xl glass-card bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.06] hover:to-white/[0.01] border border-white/5 hover:border-[#38bdf8]/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)]"
              >
                {/* Advanced Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#030712]/80 border border-white/10 flex items-center justify-center mb-5 backdrop-blur-md relative overflow-hidden transition-all duration-500 group-hover:border-[#38bdf8]/50 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-[#38bdf8] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-300">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Content: Advanced 3D Hologram & Cinematic Text */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center gap-12 pt-10 [perspective:1000px]">
          
          <ScrollReveal direction="left" distance={40} delay={0.6} className="text-center z-20">
            <p className="text-4xl lg:text-[2.75rem] text-white/90 leading-tight transform -rotate-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Caveat', cursive, sans-serif" }}>
              Higher <br/>
              Data Peaks. <br/>
              <span className="text-[#38bdf8] drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]">Brighter <br/> Business.</span>
            </p>
          </ScrollReveal>
          
          {/* True 3D Holographic Construct */}
          <ScrollReveal direction="up" distance={40} delay={0.8} className="relative w-64 h-64 mt-4">
            <motion.div 
              animate={{ y: [0, -15, 0], rotateY: [0, 10, -10, 0], rotateX: [0, -5, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
            >
              
              {/* Core ambient glow */}
              <div className="absolute inset-0 bg-[#38bdf8]/10 blur-[60px] rounded-full pointer-events-none"></div>

              {/* Infinite Rotating Outer Ring (Dashed) */}
              <motion.div 
                animate={{ rotateZ: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border border-[#38bdf8]/30 border-dashed transform rotate-45 pointer-events-none rounded-sm [transform:translateZ(-20px)]"
              ></motion.div>

              {/* Layered Middle Glass Box */}
              <div className="absolute w-[80%] h-[80%] border border-[#38bdf8]/40 transform rotate-45 shadow-[0_0_30px_rgba(56,189,248,0.15)_inset] flex items-center justify-center bg-[#030712]/40 backdrop-blur-md [transform:translateZ(0px)]">
                
                {/* Pulsing Inner Core Box */}
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], rotateZ: [0, 90, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[70%] h-[70%] border-2 border-[#38bdf8] flex items-center justify-center bg-gradient-to-br from-[#38bdf8]/20 to-transparent shadow-[0_0_40px_rgba(56,189,248,0.5)] [transform:translateZ(20px)]"
                >
                  {/* Floating Central Text */}
                  <div className="transform -rotate-45 text-white font-bold text-4xl tracking-widest drop-shadow-2xl flex items-center">
                    <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">C</span>L
                  </div>
                </motion.div>
              </div>
              
              {/* Floating Corner Nodes */}
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="absolute top-[10%] left-[50%] w-2 h-2 bg-[#38bdf8] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#38bdf8] [transform:translateZ(30px)]"></motion.div>
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute bottom-[10%] left-[50%] w-2 h-2 bg-[#38bdf8] -translate-x-1/2 translate-y-1/2 shadow-[0_0_15px_#38bdf8] [transform:translateZ(30px)]"></motion.div>
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute left-[10%] top-[50%] w-2 h-2 bg-[#38bdf8] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#38bdf8] [transform:translateZ(30px)]"></motion.div>
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} className="absolute right-[10%] top-[50%] w-2 h-2 bg-[#38bdf8] translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#38bdf8] [transform:translateZ(30px)]"></motion.div>

            </motion.div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}