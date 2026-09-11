"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingNodesProps {
  count?: number;
}

export default function FloatingNodes({ count = 3500 }: FloatingNodesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  // Generate a soft circular glow texture for the particles (runs only on the client)
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext("2d");
    if (context) {
      const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.4, "rgba(56, 189, 248, 0.8)"); // Cyan core
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, 32, 32);
    }
    const tex = new THREE.CanvasTexture(canvas);
    setTexture(tex);

    return () => tex.dispose();
  }, []);

  const { positions, colors } = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);
    
    const colorPalette = [
      new THREE.Color("#38bdf8"), // Bright Cyan
      new THREE.Color("#0ea5e9"), // Deep Blue
      new THREE.Color("#818cf8"), // Soft Purple
      new THREE.Color("#ffffff"), // Pure White highlights
    ];

    for (let i = 0; i < count; i++) {
      // Create a more organic, galaxy-like spread
      const r = 18 * Math.cbrt(Math.random()); 
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      posArray[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      posArray[i * 3 + 1] = (r * Math.sin(phi) * Math.sin(theta)) * 0.6; // Flatter on the Y axis
      posArray[i * 3 + 2] = r * Math.cos(phi);

      // Randomly assign a color from the palette to each particle
      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colorArray[i * 3] = randomColor.r;
      colorArray[i * 3 + 1] = randomColor.g;
      colorArray[i * 3 + 2] = randomColor.b;
    }
    
    return { positions: posArray, colors: colorArray };
  }, [count]);

  // Ultra-smooth, hardware-accelerated rotation
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta * 0.015;
      pointsRef.current.rotation.y -= delta * 0.025;
      // Add a very subtle continuous Z-axis drift
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  if (!texture) return null;

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
          map={texture}
          alphaMap={texture}
        />
      </Points>
    </group>
  );
}