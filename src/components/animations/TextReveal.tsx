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
  duration = 0.5,
  stagger = 0.05,
  once = true,
}: TextRevealProps) {
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
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      className={cn("flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={child}
          className={cn("inline-block", type === "word" && "mr-1")}
        >
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </motion.div>
  );
}