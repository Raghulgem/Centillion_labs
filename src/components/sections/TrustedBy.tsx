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
  "databricks",
  "Intact Insurance",
  "Infosys",
];

export default function TrustedBy() {
  const renderPartner = (partner: string) => {
    switch (partner) {
      case "Microsoft":
        return (
          <>
            <div className="grid grid-cols-2 gap-[2px] w-5 h-5 mr-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-[#f25022] shadow-[0_0_10px_rgba(242,80,34,0)] group-hover:shadow-[0_0_15px_rgba(242,80,34,0.6)] transition-shadow"></div>
              <div className="bg-[#7fba00] shadow-[0_0_10px_rgba(127,186,0,0)] group-hover:shadow-[0_0_15px_rgba(127,186,0,0.6)] transition-shadow"></div>
              <div className="bg-[#00a4ef] shadow-[0_0_10px_rgba(0,164,239,0)] group-hover:shadow-[0_0_15px_rgba(0,164,239,0.6)] transition-shadow"></div>
              <div className="bg-[#ffb900] shadow-[0_0_10px_rgba(255,185,0,0)] group-hover:shadow-[0_0_15px_rgba(255,185,0,0.6)] transition-shadow"></div>
            </div>
            <span className="drop-shadow-none font-semibold group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300">
              Microsoft
            </span>
          </>
        );
      case "databricks":
        return (
          <>
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-1 opacity-70 group-hover:opacity-100 transition-all duration-300 text-[#ff3621] group-hover:drop-shadow-[0_0_12px_rgba(255,54,33,0.8)]">
              <path d="M12 2.5L21.5 7.5L12 12.5L2.5 7.5L12 2.5Z" fill="currentColor"/>
              <path d="M2.5 11.5L12 16.5L21.5 11.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"/>
              <path d="M2.5 15.5L12 20.5L21.5 15.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"/>
            </svg>
            <span className="drop-shadow-none font-sans lowercase tracking-tighter text-[26px] md:text-[30px] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300">
              databricks
            </span>
          </>
        );
      case "Google Cloud":
        return (
          <>
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 mr-1 opacity-70 group-hover:opacity-100 transition-all duration-300">
              <path d="M12 6C9.5 6 7.3 7.8 7 10.2C4.7 10.5 3 12.5 3 15C3 17.5 5 19.5 7.5 19.5H17.5C19.8 19.5 21.7 17.6 21.7 15.3C21.7 13.2 20.1 11.4 18 11.1C17.5 8.2 15 6 12 6Z" fill="#4285F4" className="group-hover:drop-shadow-[0_0_12px_rgba(66,133,244,0.6)]" />
            </svg>
            <span className="drop-shadow-none group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300">
              Google Cloud
            </span>
          </>
        );
      case "Intact Insurance":
        return (
          <>
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 mr-2 opacity-70 group-hover:opacity-100 transition-all duration-300">
              <circle cx="12" cy="12" r="11" fill="white" className="group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all" />
              <path d="M10 7.5H7.5v9H10M14 7.5h2.5v9H14" stroke="#e31837" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
            <span className="drop-shadow-none group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300">
              <span className="font-bold text-slate-400 group-hover:text-white transition-colors tracking-tight">intact</span>
              <span className="font-light text-slate-500 group-hover:text-white/80 transition-colors ml-1.5 tracking-wide">insurance</span>
            </span>
          </>
        );
      case "aws":
        return (
          <span className="drop-shadow-none group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300 font-sans lowercase text-3xl md:text-4xl font-bold tracking-tighter">
            aws
          </span>
        );
      case "Infosys":
        return (
          <span className="drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(0,124,195,0.5)] group-hover:text-[#007cc3] transition-all duration-300 font-sans font-light text-3xl md:text-4xl tracking-tight">
            Infosys
          </span>
        );
      default:
        return <span>{partner}</span>;
    }
  };

  return (
    <section className="py-16 border-y border-white/5 bg-[#030712] relative overflow-hidden flex flex-col items-center z-10 bg-noise">
      
      {/* Volumetric depth behind the marquee */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.15)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[100px] bg-[#38bdf8]/5 blur-[60px] rounded-full"></div>
      </div>

      <ScrollReveal direction="up" distance={20} className="relative z-10">
        <p className="text-[10px] tracking-[0.3em] text-[#38bdf8] uppercase font-bold mb-12 text-center drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
          Trusted by innovators worldwide
        </p>
      </ScrollReveal>
      
      <div className="relative w-full flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_150px,_black_calc(100%-150px),transparent_100%)] z-10">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center justify-around w-max min-w-full gap-20 md:gap-32 px-10 md:px-16">
              {partners.map((partner, idx) => (
                <motion.div 
                  key={`${i}-${idx}`} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="text-2xl md:text-3xl font-bold text-slate-500 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap group flex items-center gap-1"
                >
                  {renderPartner(partner)}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}