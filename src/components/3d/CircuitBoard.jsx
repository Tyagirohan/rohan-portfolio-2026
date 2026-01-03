import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export const CircuitBoard = ({ position = [0, 0, 0], scale = 1 }) => {
  const boardRef = useRef();

  return (
    <group position={position}>
      {/* Main PCB Board */}
      <RoundedBox
        ref={boardRef}
        args={[20 * scale, 0.2 * scale, 15 * scale]}
        radius={0.1}
        smoothness={4}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#1a3a2e"
          roughness={0.8}
          metalness={0.2}
        />
      </RoundedBox>

      {/* PCB Grid Pattern */}
      <mesh position={[0, 0.11 * scale, 0]}>
        <planeGeometry args={[20 * scale, 15 * scale]} />
        <meshBasicMaterial
          transparent
          opacity={0.1}
          color="#ffffff"
        >
          <primitive attach="map" object={createGridTexture()} />
        </meshBasicMaterial>
      </mesh>
    </group>
  );
};

// Helper function to create grid texture
function createGridTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;

  // Draw grid
  for (let i = 0; i <= 512; i += 32) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 512);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(512, i);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);

  return texture;
}

