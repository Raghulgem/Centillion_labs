"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface TechGlobeProps {
  radius?: number;
  detail?: number;
}

export default function TechGlobe({ radius = 2.5, detail = 50 }: TechGlobeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);

  // Fibonacci sphere distribution for perfectly even, high-end point spacing
  const particlesPosition = useMemo(() => {
    const length = detail * detail;
    const positions = new Float32Array(length * 3);
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < length; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / length);
      
      const dist = radius * 1.03;
      positions[i * 3] = dist * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = dist * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = dist * Math.cos(phi);
    }
    return positions;
  }, [radius, detail]);

  // Buttery smooth multi-axis orbital rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.04;
      wireframeRef.current.rotation.z += delta * 0.02;
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      
      {/* Deep Core Inner Globe (Metallic Obsidian Base) */}
      <mesh ref={innerCoreRef}>
        <sphereGeometry args={[radius * 0.98, 64, 64]} />
        <meshStandardMaterial
          color="#020617"
          roughness={0.2}
          metalness={0.9}
          emissive="#0369a1"
          emissiveIntensity={0.15}
          envMapIntensity={2.5}
        />
      </mesh>
      
      {/* Outer Cyan Wireframe Grid Cage */}
      <mesh ref={wireframeRef}>
        <sphereGeometry args={[radius * 1.01, 32, 32]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Fibonacci Tech Data Points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#38bdf8"
          transparent
          opacity={0.95}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Atmospheric Volumetric Cyan Glow Shell */}
      <mesh scale={1.12}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial
          color="#0ea5e9"
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}