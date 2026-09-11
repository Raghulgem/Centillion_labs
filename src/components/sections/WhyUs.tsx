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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export default function WhyUs() {
  return (
    <section className="py-32 px-6 relative overflow-hidden min-h-screen flex items-center bg-[#030712] text-white">
      {/* Advanced Cinematic Background Overlays */}
      <div className="absolute inset-0 z-0">
        <Parallax offset={100} className="w-full h-[130%] -top-[15%]">
          {/* Base Mountain Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-25 mix-blend-luminosity grayscale"></div>
          
          {/* Deep Vignette & Atmospheric Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/60 to-[#030712]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent w-[70%]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(56,189,248,0.1)_0%,_transparent_60%)]"></div>
        </Parallax>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content: Typography & Interactive Feature Grid */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <ScrollReveal direction="up" distance={30}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-slate-500"></span>
              <p className="text-xs tracking-[0.2em] text-slate-400 uppercase font-bold">
                03 — Why Centillion Labs
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.1}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              More than consultants.<br />
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#818cf8] drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">long-term data partner.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.2}>
            <p className="text-lg text-slate-400 max-w-2xl mb-16 leading-relaxed font-medium">
              We bring deep domain expertise, delivery excellence, and a commitment to your success across the modern data stack.
            </p>
          </ScrollReveal>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col group cursor-default"
              >
                {/* Advanced Icon Container with Hover Glow */}
                <div className="w-12 h-12 rounded-xl bg-slate-900/50 border border-white/10 flex items-center justify-center mb-5 backdrop-blur-md relative overflow-hidden transition-all duration-300 group-hover:border-[#38bdf8]/50 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-[#38bdf8] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Content: Advanced 3D Diamond Graphic & Cinematic Text */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center gap-12 pt-10">
          
          {/* Text positioned neatly ABOVE the diamond */}
          <ScrollReveal direction="left" distance={40} delay={0.6} className="text-center z-20">
            <p className="text-4xl lg:text-[2.75rem] text-white/90 leading-tight transform -rotate-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Caveat', cursive, sans-serif" }}>
              Higher <br/>
              Data Peaks. <br/>
              <span className="text-[#38bdf8] drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">Brighter <br/> Business.</span>
            </p>
          </ScrollReveal>
          
          {/* Complex Animated Diamond Construct - relative flow prevents overlap */}
          <ScrollReveal direction="up" distance={40} delay={0.8} className="relative w-64 h-64 mt-4">
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-blue-500/10 blur-[50px] rounded-full mix-blend-screen pointer-events-none"></div>

              {/* Rotating Outer Ring (Dashed) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border-[1px] border-[#38bdf8]/20 border-dashed transform rotate-45 pointer-events-none"
              ></motion.div>

              {/* Middle Layered Glowing Box */}
              <div className="absolute w-[80%] h-[80%] border-[1px] border-[#38bdf8]/40 transform rotate-45 shadow-[0_0_30px_rgba(56,189,248,0.2)_inset] flex items-center justify-center bg-slate-950/40 backdrop-blur-sm">
                
                {/* Inner Core Box */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[75%] h-[75%] border-[2px] border-[#38bdf8] flex items-center justify-center bg-gradient-to-br from-[#38bdf8]/10 to-transparent shadow-[0_0_40px_rgba(56,189,248,0.4)]"
                >
                  {/* Central Text aligned back to normal */}
                  <div className="transform -rotate-45 text-white font-bold text-3xl tracking-widest drop-shadow-lg flex items-center">
                    <span className="text-[#38bdf8]">C</span>L
                  </div>
                </motion.div>

              </div>
              
              {/* Corner Accent Nodes */}
              <div className="absolute top-[10%] left-[50%] w-2 h-2 bg-[#38bdf8] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#38bdf8]"></div>
              <div className="absolute bottom-[10%] left-[50%] w-2 h-2 bg-[#38bdf8] -translate-x-1/2 translate-y-1/2 shadow-[0_0_10px_#38bdf8]"></div>
              <div className="absolute left-[10%] top-[50%] w-2 h-2 bg-[#38bdf8] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#38bdf8]"></div>
              <div className="absolute right-[10%] top-[50%] w-2 h-2 bg-[#38bdf8] translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#38bdf8]"></div>

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}