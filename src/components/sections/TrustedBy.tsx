"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const partners = [
  "Microsoft",
  "aws",
  "Google Cloud",
  "Deloitte.",
  "accenture",
  "TCS",
  "Infosys",
];

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-white/5 bg-[#030712] relative overflow-hidden flex flex-col items-center z-10 bg-noise">
      
      {/* Volumetric depth behind the marquee */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* Glowing track line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.15)]"></div>
        {/* Ambient spatial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[100px] bg-[#38bdf8]/5 blur-[60px] rounded-full"></div>
      </div>

      <ScrollReveal direction="up" distance={20} className="relative z-10">
        <p className="text-[10px] tracking-[0.3em] text-[#38bdf8] uppercase font-bold mb-12 text-center drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
          Trusted by innovators worldwide
        </p>
      </ScrollReveal>
      
      {/* Increased the gradient mask size for a smoother, deeper fade at the screen edges */}
      <div className="relative w-full flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_150px,_black_calc(100%-150px),transparent_100%)] z-10">
        {/* Added vertical padding so the hover scale/shadows don't clip */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center justify-around w-max min-w-full gap-20 md:gap-32 px-10 md:px-16">
              {partners.map((partner, idx) => (
                <motion.div 
                  key={`${i}-${idx}`} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={cn(
                    "text-2xl md:text-3xl font-bold text-slate-500 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap group flex items-center",
                    partner === "aws" && "font-sans lowercase text-3xl md:text-4xl tracking-tighter",
                    partner === "Deloitte." && "font-serif tracking-tight",
                    partner === "accenture" && "lowercase font-sans font-semibold tracking-tighter",
                    partner === "Infosys" && "font-sans font-light text-4xl",
                    partner === "Microsoft" && "font-semibold gap-2.5"
                  )}
                >
                  {partner === "Microsoft" && (
                    <div className="grid grid-cols-2 gap-[2px] w-6 h-6 mr-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Individual colored shadows that trigger on hover */}
                      <div className="bg-[#f25022] shadow-[0_0_10px_rgba(242,80,34,0)] group-hover:shadow-[0_0_15px_rgba(242,80,34,0.6)] transition-shadow"></div>
                      <div className="bg-[#7fba00] shadow-[0_0_10px_rgba(127,186,0,0)] group-hover:shadow-[0_0_15px_rgba(127,186,0,0.6)] transition-shadow"></div>
                      <div className="bg-[#00a4ef] shadow-[0_0_10px_rgba(0,164,239,0)] group-hover:shadow-[0_0_15px_rgba(0,164,239,0.6)] transition-shadow"></div>
                      <div className="bg-[#ffb900] shadow-[0_0_10px_rgba(255,185,0,0)] group-hover:shadow-[0_0_15px_rgba(255,185,0,0.6)] transition-shadow"></div>
                    </div>
                  )}
                  {/* Subtle white text bloom effect on hover */}
                  <span className="drop-shadow-none group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300">
                    {partner !== "Microsoft" && partner}
                    {partner === "Microsoft" && "Microsoft"}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}