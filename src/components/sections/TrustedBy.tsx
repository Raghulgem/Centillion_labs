"use client";

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
    <section className="py-12 border-y border-white/5 bg-[#030712] relative overflow-hidden flex flex-col items-center z-10">
      <p className="text-[10px] tracking-[0.3em] text-slate-500 uppercase font-bold mb-10 text-center">
        Trusted by innovators worldwide
      </p>
      
      <div className="relative w-full flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center justify-around w-max min-w-full gap-16 md:gap-24 px-8 md:px-12">
              {partners.map((partner, idx) => (
                <div 
                  key={`${i}-${idx}`} 
                  className={cn(
                    "text-xl md:text-2xl font-bold text-slate-500 hover:text-white transition-colors cursor-pointer whitespace-nowrap",
                    partner === "aws" && "font-sans lowercase text-2xl tracking-tighter",
                    partner === "Deloitte." && "font-serif tracking-tight",
                    partner === "accenture" && "lowercase font-sans font-semibold tracking-tighter",
                    partner === "Infosys" && "font-sans font-light text-3xl",
                    partner === "Microsoft" && "font-semibold flex items-center gap-2"
                  )}
                >
                  {partner === "Microsoft" && (
                    <div className="grid grid-cols-2 gap-[2px] w-5 h-5 mr-1">
                      <div className="bg-[#f25022]"></div>
                      <div className="bg-[#7fba00]"></div>
                      <div className="bg-[#00a4ef]"></div>
                      <div className="bg-[#ffb900]"></div>
                    </div>
                  )}
                  {partner !== "Microsoft" && partner}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}