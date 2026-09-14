"use client";

import { useState, useRef } from "react";
import { 
  motion, 
  AnimatePresence, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from "framer-motion";
import { ArrowRight, Database, LineChart, Shield, Users, Cpu, Lightbulb, X } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const services = [
  {
    title: "Strategy & Advisory",
    description: "Align your data initiatives with core business objectives to drive measurable impact and long-term enterprise growth.",
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    position: { left: "50%", top: "8%" },
    delay: 0.1,
  },
  {
    title: "Analytics & BI",
    description: "Transform raw data into actionable, real-time insights with interactive, high-performance dashboards.",
    icon: <LineChart className="w-6 h-6 text-emerald-500" />,
    position: { left: "90%", top: "30%" },
    delay: 0.2,
  },
  {
    title: "Governance & Security",
    description: "Ensure strict compliance, robust data privacy, and enterprise-grade security protocols across your data lakehouse.",
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    position: { left: "90%", top: "70%" },
    delay: 0.3,
  },
  {
    title: "Databricks Talent",
    description: "Empower your organization with expert training, upskilling, and elite staff augmentation for data teams.",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    position: { left: "50%", top: "92%" },
    delay: 0.4,
  },
  {
    title: "AI & Machine Learning",
    description: "Deploy highly accurate predictive models, GenAI applications, and automated decision engines at scale.",
    icon: <Cpu className="w-6 h-6 text-red-500" />,
    position: { left: "10%", top: "70%" },
    delay: 0.5,
  },
  {
    title: "Data Engineering",
    description: "Architect and build resilient, highly scalable pipelines to process massive data streams seamlessly.",
    icon: <Database className="w-6 h-6 text-blue-600" />,
    position: { left: "10%", top: "30%" },
    delay: 0.6,
  },
];

// ==========================================
// 3D Tilt Card Component for the Modal
// ==========================================
function ServiceCard3D({ service, idx }: { service: any; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.1 + idx * 0.08, type: "spring", stiffness: 300, damping: 25 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group p-7 rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] cursor-default overflow-hidden"
    >
      {/* 3D Depth Elements */}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.15)] transition-all duration-300">
          {service.icon}
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#38bdf8] transition-colors">
          {service.title}
        </h4>
        <p className="text-sm text-slate-500 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Dynamic Glare Effect mapped to mouse position */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20 mix-blend-soft-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, transparent 60%)",
          left: glareX,
          top: glareY,
          transform: "translate(-50%, -50%)",
          width: "200%",
          height: "200%",
        }}
      />
    </motion.div>
  );
}

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-28 px-6 relative overflow-hidden bg-white text-slate-900 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] z-20 mx-2 lg:mx-6 -mt-8 mb-12">
        
        {/* Subtle background radial for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(240,249,255,0.8)_0%,_rgba(255,255,255,0)_70%)] z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
          
          {/* Left Content Area */}
          <div className="flex flex-col items-start z-10 lg:pl-8">
            <ScrollReveal direction="up" distance={30}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs tracking-[0.2em] text-slate-500 uppercase font-bold">
                  02 — Our Services
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={40} delay={0.1}>
              <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.1] mb-6 text-slate-900">
                End-to-End <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 drop-shadow-sm">Databricks</span> Expertise.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <p className="text-lg text-slate-500 max-w-md mb-10 leading-relaxed font-medium">
                Strategy, engineering, analytics, AI/ML, and governance — built around your business goals.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.3}>
              <motion.button 
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group px-8 py-4 bg-[#030712] hover:bg-slate-800 text-white font-semibold rounded-full transition-colors flex items-center gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.15)] cursor-pointer outline-none"
              >
                Explore All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </ScrollReveal>
          </div>

          {/* Right Content - Orbital UI */}
          <div className="relative w-full aspect-square max-w-[550px] mx-auto z-0 mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded-full border border-slate-200 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-slate-100 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(241,245,249,0.4)_0%,_transparent_70%)]"></div>

            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-60" viewBox="0 0 100 100">
               {services.map((service, idx) => (
                 <motion.line 
                   key={idx}
                   initial={{ pathLength: 0, opacity: 0 }}
                   whileInView={{ pathLength: 1, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, delay: service.delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
                   x1="50%" 
                   y1="50%" 
                   x2={service.position.left} 
                   y2={service.position.top} 
                   stroke="#94a3b8" 
                   strokeWidth="0.3"
                   strokeDasharray="1.5, 2"
                 />
               ))}
            </svg>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
              whileInView={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="absolute top-1/2 left-1/2 z-20 flex items-center justify-center flex-shrink-0"
              style={{ width: "260px", height: "260px" }}
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <div className="absolute inset-[-40px] rounded-full bg-gradient-to-tr from-blue-700/20 via-transparent to-cyan-500/20 blur-3xl z-0 pointer-events-none"></div>
                
                <div className="relative w-full h-full rounded-full bg-[#030712] overflow-hidden flex flex-col items-center justify-center text-center z-20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/5">
                  <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-pink-600/30 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute top-[20%] -right-[20%] w-[70%] h-[70%] bg-cyan-500/30 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute -bottom-[20%] left-[10%] w-[90%] h-[60%] bg-blue-700/40 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="absolute inset-[-2px] rounded-full border-[3px] border-transparent border-t-pink-400 border-l-pink-400 opacity-90 blur-[1px] transform -rotate-12 pointer-events-none"></div>
                  <div className="absolute inset-[-2px] rounded-full border-[3px] border-transparent border-b-cyan-400 border-r-cyan-400 opacity-80 blur-[1px] transform -rotate-[15deg] pointer-events-none"></div>

                  <div className="absolute inset-[4px] rounded-full border border-white/20 pointer-events-none mix-blend-overlay"></div>
                  <div className="absolute inset-[10px] rounded-full border-t border-l border-white/30 transform -rotate-45 pointer-events-none opacity-40"></div>

                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] pointer-events-none"></div>
                  
                  <span className="text-white font-bold text-xl leading-tight px-4 relative z-30 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                    Your <br/> Data Advantage
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: service.delay, type: "spring", bounce: 0.5 }}
                className="absolute z-30"
                style={{ left: service.position.left, top: service.position.top }}
              >
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                  whileHover={{ scale: 1.05, y: -8, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                  className="bg-white/80 backdrop-blur-xl px-4 py-2.5 sm:px-5 sm:py-3 rounded-full flex items-center gap-3 border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer shadow-[0_10px_30px_rgba(37,99,235,0.08)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.15)] whitespace-nowrap group"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100 text-slate-700">
                    <div className="scale-75 sm:scale-100 flex items-center justify-center">
                       {service.icon}
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide pr-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </span>
                </motion.div>
              </motion.div>
            ))}
            
          </div>
        </div>
      </section>

      {/* =========================================
          ADVANCED DATABRICKS-THEMED FLOATING MODAL
          ========================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 overflow-hidden perspective-[2000px]">
            
            {/* Deep Blurred Backdrop */}
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/50 cursor-pointer"
            ></motion.div>

            {/* The Floating Advanced Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateX: 15, y: 50 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: -10, y: -30 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="relative w-full max-w-6xl bg-slate-50/95 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col max-h-[90vh] border border-white"
            >
              
              {/* ============================== */}
              {/* Databricks Data Mesh Background*/}
              {/* ============================== */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* 1. Lakehouse Ambient Glows */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#38bdf8]/10 blur-[120px] rounded-full"
                />
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-[20%] -right-[10%] w-[700px] h-[700px] bg-[#ff3621]/10 blur-[130px] rounded-full"
                />

                {/* 2. Massive Faint Databricks Logo Outline */}
                <motion.div 
                  animate={{ rotateZ: [0, 4, -4, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-[0.03] flex items-center justify-center pointer-events-none"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#ff3621]">
                    <path d="M12 2.5L21.5 7.5L12 12.5L2.5 7.5L12 2.5Z" stroke="currentColor" strokeWidth="0.2"/>
                    <path d="M2.5 11.5L12 16.5L21.5 11.5" stroke="currentColor" strokeWidth="0.2"/>
                    <path d="M2.5 15.5L12 20.5L21.5 15.5" stroke="currentColor" strokeWidth="0.2"/>
                  </svg>
                </motion.div>

                {/* 3. Glowing Data Pipelines (SVG Streams) */}
                <svg className="absolute inset-0 w-full h-full opacity-50">
                  <defs>
                    <linearGradient id="stream-grad-modal" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                      <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#ff3621" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ff3621" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="stream-grad-modal-2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <motion.path
                    d="M -200 200 C 300 200, 500 800, 1400 600"
                    fill="none"
                    stroke="url(#stream-grad-modal)"
                    strokeWidth="2"
                    strokeDasharray="20 40"
                    animate={{ strokeDashoffset: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    filter="blur(1px)"
                  />
                  <motion.path
                    d="M 1400 200 C 800 200, 600 800, -200 600"
                    fill="none"
                    stroke="url(#stream-grad-modal-2)"
                    strokeWidth="1.5"
                    strokeDasharray="10 30"
                    animate={{ strokeDashoffset: [0, 1000] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    filter="blur(0.5px)"
                  />
                  <motion.path
                    d="M 100 -200 C 300 300, 900 600, 900 1200"
                    fill="none"
                    stroke="url(#stream-grad-modal)"
                    strokeWidth="3"
                    strokeDasharray="30 60"
                    animate={{ strokeDashoffset: [0, 1000] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    filter="blur(2px)"
                    opacity="0.6"
                  />
                </svg>

                {/* 4. Floating Isometric Data Nodes (Delta Blocks) */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`node-${i}`}
                    className="absolute flex items-center justify-center opacity-40 pointer-events-none"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [0, -50, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 8 + Math.random() * 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 5,
                    }}
                  >
                    <svg width="40" height="48" viewBox="0 0 40 48" fill="none" className={i % 2 === 0 ? "text-[#38bdf8]/20" : "text-[#ff3621]/15"}>
                       <path d="M20 0L39.0526 11V33L20 44L0.947441 33V11L20 0Z" fill="currentColor"/>
                       <path d="M20 22L39.0526 11M20 22V44M20 22L0.947441 11" stroke="currentColor" strokeWidth="1" className="opacity-50"/>
                    </svg>
                  </motion.div>
                ))}

                {/* 5. Fine Tech Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
              </div>

              {/* ============================== */}
              {/* Content Overlay               */}
              {/* ============================== */}
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Header */}
                <div className="flex items-center justify-between px-10 py-8 border-b border-slate-200/50 bg-white/40 backdrop-blur-md">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                      Our Core Services
                      <span className="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 text-xs uppercase tracking-widest rounded-full font-bold shadow-sm">
                        Databricks Partner
                      </span>
                    </h3>
                    <p className="text-base text-slate-500 mt-2 font-medium">End-to-End Databricks capabilities tailored for your enterprise.</p>
                  </div>
                  
                  {/* Close Button */}
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(false)}
                    className="w-12 h-12 bg-white hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-full flex items-center justify-center transition-colors outline-none shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Grid Body with 3D Tilt Cards */}
                <div className="p-10 overflow-y-auto custom-scrollbar [perspective:1000px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                      <ServiceCard3D key={idx} service={service} idx={idx} />
                    ))}
                  </div>
                </div>
                
                {/* Databricks Themed Footer Gradient Trim */}
                <div className="h-2 w-full bg-gradient-to-r from-[#38bdf8] via-[#ff3621] to-[#38bdf8] relative z-20"></div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}