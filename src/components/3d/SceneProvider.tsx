"use client";

import { ReactNode, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, ContactShadows } from "@react-three/drei";

interface SceneProviderProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
}

export default function SceneProvider({
  children,
  className = "absolute inset-0 z-0",
  cameraPosition = [0, 0, 8],
  fov = 45,
}: SceneProviderProps) {
  return (
    <div className={className} style={{ pointerEvents: "none" }}>
      <Canvas 
        dpr={[1, 2]} 
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        performance={{ min: 0.5 }} // Automatically scales down DPR if frame rates drop
      >
        <PerspectiveCamera makeDefault position={cameraPosition} fov={fov} />
        
        {/* Cinematic Lighting Rig */}
        <ambientLight intensity={0.4} color="#bae6fd" />
        <directionalLight position={[5, 10, -5]} intensity={2.0} color="#38bdf8" />
        <spotLight position={[-6, 6, 6]} angle={0.6} penumbra={1} intensity={2.5} color="#818cf8" />
        <pointLight position={[0, -5, 5]} intensity={1.0} color="#0284c7" />
        
        <Suspense fallback={null}>
          <Environment preset="city" environmentIntensity={0.4} />
          {children}
          <ContactShadows 
            position={[0, -2.8, 0]} 
            opacity={0.7} 
            scale={22} 
            blur={3.0} 
            far={4.5} 
            color="#0ea5e9"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}