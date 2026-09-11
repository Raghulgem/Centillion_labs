"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Edges, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function HeroCube() {
  const groupRef = useRef<THREE.Group>(null);
  const innerWireframeRef = useRef<THREE.Group>(null);
  const innerCoreRef = useRef<THREE.Group>(null);

  // Smooth, hardware-accelerated animations
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Outer glass cube drift
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    }
    if (innerWireframeRef.current) {
      // Counter-rotating geometric cage
      innerWireframeRef.current.rotation.y -= delta * 0.25;
      innerWireframeRef.current.rotation.x -= delta * 0.15;
    }
    if (innerCoreRef.current) {
      // Fast-spinning inner data engine
      innerCoreRef.current.rotation.y += delta * 0.4;
      innerCoreRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.5}>
      <group ref={groupRef}>
        
        {/* Outer Premium Glass Cube */}
        <mesh>
          <boxGeometry args={[2.8, 2.8, 2.8]} />
          <MeshTransmissionMaterial 
            backside
            samples={4} // Optimized from 6 to 4 for buttery 60fps smoothness
            thickness={1.5} // Increased thickness for heavier crystal refraction
            chromaticAberration={0.08} // Subtle lens fringing
            anisotropy={0.2}
            distortion={0.15}
            distortionScale={0.4}
            temporalDistortion={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            attenuationDistance={2.5}
            attenuationColor="#38bdf8"
            color="#e0f2fe" // Faint ice-blue base tint
          />
          <Edges linewidth={1.5} scale={1.01} threshold={15} color="#38bdf8" opacity={0.4} transparent />
        </mesh>

        {/* Inner Volumetric Data Core */}
        <group>
          {/* Wireframe Octahedron Cage */}
          <group ref={innerWireframeRef}>
            <mesh>
              <octahedronGeometry args={[1.5, 0]} />
              <meshStandardMaterial 
                color="#0ea5e9"
                emissive="#38bdf8"
                emissiveIntensity={2.5}
                toneMapped={false}
                wireframe
                transparent
                opacity={0.8}
              />
            </mesh>
          </group>

          {/* Solid Glowing Inner Box */}
          <group ref={innerCoreRef}>
            <mesh scale={0.65}>
              <boxGeometry args={[1.2, 1.2, 1.2]} />
              <meshStandardMaterial 
                color="#0284c7"
                emissive="#38bdf8"
                emissiveIntensity={4.5} // High emission to push through the dark glass
                toneMapped={false}
              />
            </mesh>
          </group>
        </group>

        {/* Ambient Data Particles */}
        <Sparkles 
          count={150} 
          scale={4.5} 
          size={2.5} 
          speed={0.4} 
          opacity={0.8} 
          color="#7dd3fc" 
          noise={0.1}
        />
      </group>
    </Float>
  );
}