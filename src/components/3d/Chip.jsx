import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';

export const Chip = ({ 
  position = [0, 0, 0], 
  label = "CHIP",
  color = "#2a2a2a",
  glowColor = "#ffd700",
  scale = 1,
  onClick,
  active = false
}) => {
  const chipRef = useRef();
  const glowRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (chipRef.current) {
      // Gentle floating animation
      chipRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.05;
      
      // Glow animation
      if (glowRef.current) {
        const intensity = active || hovered ? 1 : 0.5;
        glowRef.current.scale.setScalar(
          1 + Math.sin(state.clock.elapsedTime * 2) * 0.1 * intensity
        );
      }
    }
  });

  return (
    <group 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Glow effect */}
      <mesh ref={glowRef} position={[0, 0.11, 0]}>
        <cylinderGeometry args={[1.2 * scale, 1.2 * scale, 0.05, 32]} />
        <meshBasicMaterial
          color={glowColor}
          transparent
          opacity={(active || hovered) ? 0.4 : 0.2}
        />
      </mesh>

      {/* Main chip body */}
      <RoundedBox
        ref={chipRef}
        args={[2 * scale, 0.3 * scale, 2 * scale]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.8}
          emissive={glowColor}
          emissiveIntensity={(active || hovered) ? 0.3 : 0.1}
        />
      </RoundedBox>

      {/* Chip pins (simplified) */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 1.1 * scale;
        const z = Math.sin(angle) * 1.1 * scale;
        
        return (
          <mesh key={i} position={[x, 0, z]}>
            <boxGeometry args={[0.1 * scale, 0.15 * scale, 0.1 * scale]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
          </mesh>
        );
      })}

      {/* Label */}
      <Text
        position={[0, 0.2 * scale, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.3 * scale}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>

      {/* Hover cursor */}
      {onClick && (
        <mesh visible={false}>
          <boxGeometry args={[2.5 * scale, 0.5 * scale, 2.5 * scale]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      )}
    </group>
  );
};

