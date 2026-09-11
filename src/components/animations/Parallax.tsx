"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  offset?: number;
  stiffness?: number;
  damping?: number;
  enableScale?: boolean;
  enableOpacity?: boolean;
}

export default function Parallax({
  children,
  className,
  offset = 80, // Increased default offset for more dramatic depth
  stiffness = 100, // Lowered for a heavier, smoother catch-up effect
  damping = 30, // Adjusted for fluid settling without bouncing
  enableScale = true, // New: Simulates Z-axis depth
  enableOpacity = true, // New: Atmospheric fade-in/out
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Y-axis translation
  const rawY = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  
  // Z-axis simulation (peaks at 1 when centered (0.5), slightly smaller at edges)
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  
  // Opacity fade (fades at edges, fully visible in the middle 60%)
  const rawOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  
  // Apply premium spring physics to all transforms
  const y = useSpring(rawY, { stiffness, damping, mass: 1 });
  const scale = useSpring(enableScale ? rawScale : 1, { stiffness, damping, mass: 1 });
  const opacity = useSpring(enableOpacity ? rawOpacity : 1, { stiffness, damping, mass: 1 });

  return (
    <motion.div 
      ref={ref} 
      style={{ y, scale, opacity }} 
      className={cn("relative z-0 will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}