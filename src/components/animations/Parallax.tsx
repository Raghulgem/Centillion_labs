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
}

export default function Parallax({
  children,
  className,
  offset = 50,
  stiffness = 400,
  damping = 90,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  
  const y = useSpring(rawY, {
    stiffness,
    damping,
  });

  return (
    <motion.div ref={ref} style={{ y }} className={cn("relative z-0", className)}>
      {children}
    </motion.div>
  );
}