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
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={cameraPosition} fov={fov} />
        
        <ambientLight intensity={0.6} color="#e0f2fe" />
        <directionalLight position={[5, 10, -5]} intensity={1.5} color="#38bdf8" />
        <spotLight position={[-5, 5, 5]} angle={0.5} penumbra={1} intensity={2} color="#8b5cf6" />
        
        <Suspense fallback={null}>
          <Environment preset="city" environmentIntensity={0.5} />
          {children}
          <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.6} 
            scale={20} 
            blur={2.5} 
            far={4} 
            color="#0ea5e9"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}