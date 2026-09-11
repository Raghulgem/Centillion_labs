import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "outline" | "glow";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

export default function Badge({
  children,
  className,
  variant = "glass",
  size = "md",
  icon,
}: BadgeProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors whitespace-nowrap rounded-full";
  
  const variants = {
    default: "bg-[#38bdf8] text-gray-900 shadow-sm hover:bg-[#0ea5e9]",
    glass: "glass-card border border-white/10 text-slate-200 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20",
    outline: "border border-[#38bdf8]/50 text-[#38bdf8] hover:bg-[#38bdf8]/10",
    glow: "bg-[#030712]/50 border border-[#38bdf8]/40 text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.2)] backdrop-blur-md",
  };

  const sizes = {
    sm: "text-[10px] px-2.5 py-1 gap-1.5",
    md: "text-xs px-3 py-1.5 gap-2",
    lg: "text-sm px-4 py-2 gap-2.5",
  };

  return (
    <div className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {icon && <span className="flex-shrink-0 flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}