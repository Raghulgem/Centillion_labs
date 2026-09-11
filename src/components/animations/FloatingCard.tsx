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
}

export default function FloatingCard({
  children,
  className,
  delay = 0,
  duration = 6,
  yOffset = 15,
  hoverScale = 1.02,
}: FloatingCardProps) {
  return (
    <motion.div
      className={cn("relative z-10", className)}
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      whileHover={{
        scale: hoverScale,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
}