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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#030712] text-white antialiased overflow-x-hidden relative`}>
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#030712] to-[#030712]"></div>
        {children}
      </body>
    </html>
  );
}