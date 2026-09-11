"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Edges, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function HeroCube() {
  const groupRef = useRef<THREE.Group>(null);
  const innerGroupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
    if (innerGroupRef.current) {
      innerGroupRef.current.rotation.y -= delta * 0.3;
      innerGroupRef.current.rotation.x -= delta * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.5}>
      <group ref={groupRef}>
        <mesh>
          <boxGeometry args={[2.8, 2.8, 2.8]} />
          <MeshTransmissionMaterial 
            backside
            samples={6}
            thickness={0.8}
            chromaticAberration={0.15}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.5}
            temporalDistortion={0.2}
            clearcoat={1}
            attenuationDistance={1}
            attenuationColor="#38bdf8"
            color="#bae6fd"
          />
          <Edges linewidth={1.5} scale={1.02} threshold={15} color="#0ea5e9" opacity={0.6} transparent />
        </mesh>

        <group ref={innerGroupRef}>
          <mesh>
            <octahedronGeometry args={[1.4, 0]} />
            <meshStandardMaterial 
              color="#ff5722"
              emissive="#f97316"
              emissiveIntensity={3}
              toneMapped={false}
              wireframe
            />
          </mesh>
          <mesh scale={0.7}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshStandardMaterial 
              color="#ea580c"
              emissive="#c2410c"
              emissiveIntensity={5}
              toneMapped={false}
            />
          </mesh>
        </group>

        <Sparkles 
          count={150} 
          scale={5} 
          size={3} 
          speed={0.6} 
          opacity={0.9} 
          color="#7dd3fc" 
        />
      </group>
    </Float>
  );
}