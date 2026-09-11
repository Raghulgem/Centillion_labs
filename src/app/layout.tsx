import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Centillion Labs | Databricks Consulting & AI Solutions",
  description: "End-to-End Databricks Expertise. We help organizations modernize data, accelerate AI, and unlock real business outcomes.",
  openGraph: {
    title: "Centillion Labs | Databricks Consulting",
    description: "From Data to What's Next. Your long-term data partner.",
    images: ["/video-thumbnail.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Added bg-noise here to apply the cinematic film grain to the entire app */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#030712] text-white antialiased overflow-x-hidden relative bg-noise`}>
        
        {/* Base dark layer */}
        <div className="fixed inset-0 z-[-3] bg-[#030712]"></div>
        
        {/* Advanced Cinematic Lighting & Spatial Depth */}
        <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">
          {/* Main top ambient light (Using your original slate-900 but as a volumetric sphere) */}
          <div className="absolute top-[-25%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.8)_0%,transparent_70%)] blur-[100px]"></div>
          
          {/* Subtle cyan accent glow (Using your exact #38bdf8 but heavily diluted for ambient depth) */}
          <div className="absolute top-[30%] right-[-20%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.05)_0%,transparent_70%)] blur-[120px]"></div>
          
          {/* Spatial Grid Pattern to give 3D elements a floor/wall to anchor to */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.25]"></div>
        </div>

        {/* The main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}