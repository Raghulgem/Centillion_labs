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
}

export default function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
      case "none":
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      className={cn("relative", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
}