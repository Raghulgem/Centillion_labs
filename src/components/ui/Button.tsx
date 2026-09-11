import { ReactNode, ButtonHTMLAttributes } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer overflow-hidden group";

  const variants = {
    primary: "bg-white text-gray-900 hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    secondary: "bg-[#38bdf8] text-gray-900 hover:bg-[#0ea5e9] shadow-[0_0_20px_rgba(56,189,248,0.3)]",
    outline: "bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/40 glass-card",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "text-xs px-5 py-2.5",
    md: "text-sm px-8 py-4",
    lg: "text-base px-10 py-5",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {icon && iconPosition === "left" && !isLoading && (
          <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && !isLoading && (
          <span className="transition-transform group-hover:translate-x-1">{icon}</span>
        )}
      </span>
      {variant === "outline" && (
        <div className="absolute inset-0 rounded-full glow-effect -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
}