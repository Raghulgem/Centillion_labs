"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <motion.a 
          href="#hero" 
          className="flex items-center gap-4 z-50 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Increased size further to h-14 w-14 (56px) */}
          <div className="relative h-14 w-14 flex items-center justify-center">
            <Image 
              src="/images/logo.png" 
              alt="Centillion Labs" 
              width={56}
              height={56}
              priority
              className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.18em] text-white uppercase leading-none font-sans">
              CENTILLION <span className="text-[#38bdf8]">LABS</span>
            </span>
            <span className="text-[0.65rem] text-slate-400 tracking-widest uppercase mt-1.5 hidden sm:block">
              Data | AI | Cloud Transformation
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation with Magnetic Pill Effect */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full"
            >
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/5 border border-white/10 rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.8 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-full transition-colors overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 rounded-full glow-effect -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white z-50 p-2 hover:bg-white/10 rounded-full transition-colors relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Staggered Cinematic Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#030712]/95 lg:hidden z-40 border-b border-white/10 pt-28 px-6"
          >
            <motion.div 
              className="flex flex-col items-center justify-start h-full gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } }
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(8px)" },
                    visible: { 
                      opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
                      transition: { type: "spring", stiffness: 300, damping: 24 } 
                    }
                  }}
                  className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                }}
                className="mt-8 px-8 py-3.5 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:opacity-90 text-gray-900 font-bold rounded-full transition-opacity flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                Let's Talk <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}