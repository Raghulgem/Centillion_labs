"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  hoverScale?: number;
  rotateOffset?: number;
}

export default function FloatingCard({
  children,
  className,
  delay = 0,
  duration = 7, // Slightly slower for a more massive, premium feel
  yOffset = 15,
  hoverScale = 1.03,
  rotateOffset = 1.5, // Subtle 3D tilt
}: FloatingCardProps) {
  return (
    <motion.div
      className={cn("relative z-10 group cursor-default", className)}
      // 1. Graceful mount animation
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: [0, -yOffset, 0],
        rotate: [0, rotateOffset, -rotateOffset, 0],
      }}
      transition={{
        // Entry transition
        opacity: { duration: 0.8, ease: "easeOut", delay: delay },
        // Infinite Y float
        y: {
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.2, // Staggered start
        },
        // Infinite rotation (desynchronized from Y for organic drifting)
        rotate: {
          duration: duration * 1.3, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        },
      }}
      // 2. High-end Spring Physics on hover
      whileHover={{
        scale: hoverScale,
        transition: { type: "spring", stiffness: 400, damping: 25, mass: 1 },
      }}
      // 3. Tactile click interaction
      whileTap={{
        scale: 0.98,
        transition: { type: "spring", stiffness: 500, damping: 20 },
      }}
    >
      {/* 4. Interactive ambient bloom that triggers on hover */}
      <div className="absolute inset-0 -z-10 bg-[#38bdf8]/0 group-hover:bg-[#38bdf8]/10 transition-colors duration-500 rounded-inherit blur-2xl pointer-events-none" />
      
      {children}
    </motion.div>
  );
}