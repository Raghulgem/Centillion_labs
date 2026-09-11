"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TextRevealProps {
  text?: string;
  className?: string;
  type?: "word" | "character";
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export default function TextReveal({
  text = "",
  className,
  type = "word",
  delay = 0,
  duration = 0.8, // Upgraded for a cinematic breathing entrance
  stagger = 0.04, // Tightened for fluid chaining
  once = true,
}: TextRevealProps) {
  // Your safeguard for undefined props
  const safeText = text || "";
  const elements = type === "word" ? safeText.split(" ") : safeText.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 60, // 3D Spatial Tilt
      scale: 0.9, // Deep Z-axis start
      filter: "blur(12px)", // Heavy cinematic lens blur
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20, // Authoritative settle
        stiffness: 120,
        mass: 1.5,
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      // Added perspective for true 3D spatial rotation
      className={cn("flex flex-wrap [perspective:1000px]", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={child}
          className={cn(
            "inline-block origin-bottom will-change-[transform,filter,opacity]",
            // Em-based margin scales perfectly with any font size
            type === "word" && "mr-[0.25em]"
          )}
        >
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </motion.div>
  );
}