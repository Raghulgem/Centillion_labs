"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface TechGlobeProps {
  radius?: number;
  detail?: number;
}

export default function TechGlobe({ radius = 2.5, detail = 45 }: TechGlobeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const length = detail * detail;
    const positions = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      const phi = Math.acos(-1 + (2 * i) / length);
      const theta = Math.sqrt(length * Math.PI) * phi;
      
      positions[i * 3] = radius * 1.02 * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * 1.02 * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * 1.02 * Math.cos(phi);
    }
    return positions;
  }, [radius, detail]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.05;
      wireframeRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          color="#030712"
          transparent
          opacity={0.9}
          roughness={0.1}
          metalness={0.9}
          envMapIntensity={2}
        />
      </mesh>
      
      <mesh ref={wireframeRef}>
        <sphereGeometry args={[radius * 1.01, 32, 32]} />
        <meshBasicMaterial
          color="#0ea5e9"
          wireframe
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

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
          size={0.035}
          color="#38bdf8"
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <mesh scale={1.05}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.03}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}