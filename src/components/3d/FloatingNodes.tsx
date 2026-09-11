"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingNodesProps {
  count?: number;
}

export default function FloatingNodes({ count = 3500 }: FloatingNodesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 15 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      posArray[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      posArray[i * 3 + 1] = (r * Math.sin(phi) * Math.sin(theta)) * 0.5;
      posArray[i * 3 + 2] = r * Math.cos(phi);
    }
    return posArray;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta * 0.02;
      pointsRef.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}