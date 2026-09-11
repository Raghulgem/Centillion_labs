"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Expertise", href: "#expertise" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "Insights", href: "#insights" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3.5 z-50 group">
          <div className="relative h-9 w-9 flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Centillion Labs" 
              fill
              className="object-contain transition-transform group-hover:scale-105" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-[0.18em] text-white uppercase leading-none font-sans">
              CENTILLION <span className="text-[#38bdf8]">LABS</span>
            </span>
            <span className="text-[0.6rem] text-slate-400 tracking-widest uppercase mt-1 hidden sm:block">
              Data | AI | Cloud Transformation
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#38bdf8] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white text-sm font-medium rounded-full transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-full glow-effect -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <button
          className="lg:hidden text-white z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }}
        className="absolute top-0 left-0 right-0 bg-[#030712]/95 backdrop-blur-xl overflow-hidden lg:hidden z-40 border-b border-white/10"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 px-8 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-gray-900 font-bold rounded-full transition-colors flex items-center gap-2"
          >
            Let's Talk <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}