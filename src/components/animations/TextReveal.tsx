"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TextRevealProps {
  text: string;
  className?: string;
  type?: "word" | "character";
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export default function TextReveal({
  text,
  className,
  type = "word",
  delay = 0,
  duration = 0.8, // Increased for a breathing, cinematic entrance
  stagger = 0.04, // Slightly tightened for smoother chaining
  once = true,
}: TextRevealProps) {
  // If type is word, split by spaces (spaces are removed). If character, split by every char.
  const elements = type === "word" ? text.split(" ") : text.split("");

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
      y: 40, // Increased fall-off
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
        damping: 20, // Heavier, more authoritative settle
        stiffness: 120,
        mass: 1.5,
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      // Added perspective so the rotateX transform acts like true 3D space
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
            // Use em-based margin for words so spacing scales perfectly with font-size
            type === "word" && "mr-[0.25em]"
          )}
        >
          {/* Preserve explicit spaces if splitting by character */}
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </motion.div>
  );
}