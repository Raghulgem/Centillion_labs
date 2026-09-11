import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6 rounded-2xl relative overflow-hidden transition-all duration-300",
        hoverEffect && "hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_8px_32px_0_rgba(56,189,248,0.1)]",
        className
      )}
    >
      {children}
    </div>
  );
}