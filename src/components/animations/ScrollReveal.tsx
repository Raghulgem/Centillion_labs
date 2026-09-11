"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  enableBlur?: boolean;
  enableScale?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.8, // Slightly longer duration to let the premium easing breathe
  distance = 50, // Slightly increased distance for a more dramatic entrance
  once = true,
  enableBlur = true, // Cinematic camera focus effect
  enableScale = true, // Z-axis spatial depth
}: ScrollRevealProps) {
  const getVariants = () => {
    // Base states applied to all directions
    const baseHidden = { 
      opacity: 0, 
      filter: enableBlur ? "blur(12px)" : "blur(0px)",
      scale: enableScale ? 0.96 : 1 
    };
    
    const baseVisible = { 
      opacity: 1, 
      filter: "blur(0px)",
      scale: 1 
    };

    switch (direction) {
      case "up":
        return { hidden: { ...baseHidden, y: distance }, visible: { ...baseVisible, y: 0 } };
      case "down":
        return { hidden: { ...baseHidden, y: -distance }, visible: { ...baseVisible, y: 0 } };
      case "left":
        return { hidden: { ...baseHidden, x: distance }, visible: { ...baseVisible, x: 0 } };
      case "right":
        return { hidden: { ...baseHidden, x: -distance }, visible: { ...baseVisible, x: 0 } };
      case "none":
      default:
        return { hidden: baseHidden, visible: baseVisible };
    }
  };

  return (
    <motion.div
      className={cn("relative will-change-[opacity,transform,filter]", className)}
      initial="hidden"
      whileInView="visible"
      // Using a percentage margin ensures it triggers correctly across different screen sizes
      viewport={{ once, margin: "-10%" }} 
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Cinematic, frictionless deceleration
      }}
    >
      {children}
    </motion.div>
  );
}