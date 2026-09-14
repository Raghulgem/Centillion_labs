"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CTA() {
  // Staggered container for the left content area
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Cinematic blur reveal for individual elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="py-16 px-6 relative bg-white text-slate-900 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] mx-2 lg:mx-6 my-12 mb-24 z-20 overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(240,249,255,1)_0%,_rgba(255,255,255,0)_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Added bg-noise for tactile film-grain texture inside the dark container */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[#030712] text-white py-20 px-8 lg:px-16 shadow-2xl border border-white/10 bg-noise">
          
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Cinematic background image reveal */}
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent w-[85%]"></div>
            
            {/* Swapped to a strict brand-palette volumetric glow */}
            <div className="absolute right-10 bottom-10 w-[500px] h-[500px] bg-[#38bdf8]/10 blur-[120px] rounded-full pointer-events-none"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Staggered Left Content Area */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <motion.p variants={itemVariants} className="text-xs tracking-[0.2em] text-[#38bdf8] uppercase mb-6 font-bold drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
                READY TO BUILD WHAT'S NEXT?
              </motion.p>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                Let's turn your data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-white drop-shadow-lg">lasting impact.</span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-base lg:text-lg text-slate-300 mb-8 font-medium">
                Get matched Databricks experts in 24 hours. No spam, ever.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
                {/* Tactile Primary Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group px-7 py-3.5 bg-white text-[#030712] font-bold rounded-full hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] text-sm cursor-pointer outline-none"
                >
                  Request Profiles 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                {/* Tactile Secondary Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group px-7 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors text-sm backdrop-blur-md cursor-pointer outline-none"
                >
                  Talk to an Expert
                </motion.button>
              </motion.div>

              {/* Expert Avatars */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 border-t border-white/10 pt-6 w-full max-w-sm">
                <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300 cursor-default">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-[#030712] bg-slate-800 overflow-hidden shadow-md transition-transform hover:scale-110 hover:z-10 duration-300">
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
              </motion.div>
            </motion.div>

            {/* Right Side */}
            <div className="lg:col-span-5 relative h-[380px] w-full rounded-2xl overflow-hidden border border-white/5 hidden lg:flex items-center justify-end p-6 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm">
              
              {/* Organic Floating Monolith Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-8 bottom-8 z-20"
              >
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="glass-card px-5 py-4 rounded-xl backdrop-blur-2xl bg-[#030712]/60 shadow-2xl flex items-center gap-3 cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#38bdf8] to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                    <div className="w-4 h-4 border-2 border-white transform rotate-45"></div>
                  </div>
                  <div>
                    <p className="text-white font-bold text-base leading-tight">Centillion Labs</p>
                    <p className="text-[0.6rem] text-slate-300 tracking-widest uppercase font-medium mt-0.5">Data | AI | Cloud Transformation</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Animated Right Sidebar Ticker */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } }
                }}
                className="z-20 flex flex-col gap-6 text-[10px] tracking-[0.3em] font-bold text-slate-500 uppercase pr-2"
              >
                {["DATA", "PEOPLE", "PROCESS"].map((item) => (
                  <motion.span 
                    key={item}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    className="hover:text-[#38bdf8] transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
                
                {/* Active Impact State */}
                <motion.span 
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                  className="text-white relative font-extrabold text-xs"
                >
                  IMPACT
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-2.5 h-[2px] bg-[#38bdf8] origin-left shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                  />
                </motion.span>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}