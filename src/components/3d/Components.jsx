import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Resistor component
export const Resistor = ({ position = [0, 0, 0], rotation = [0, 0, 0], color = "#d4af37" }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Body */}
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#8B7355" roughness={0.6} />
      </mesh>
      
      {/* Color bands */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.08, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Leads */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

// Capacitor component
export const Capacitor = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Body */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Stripe */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.1, 16]} />
        <meshStandardMaterial color="#c0c0c0" />
      </mesh>
      
      {/* Leads */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

// LED component
export const LED = ({ position = [0, 0, 0], color = "#ff0000", active = false }) => {
  const ledRef = useRef();

  useFrame((state) => {
    if (ledRef.current && active) {
      const intensity = 0.8 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
      ledRef.current.material.emissiveIntensity = intensity;
    }
  });

  return (
    <group position={position}>
      {/* LED body */}
      <mesh ref={ledRef}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active ? 0.8 : 0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Base */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Leads */}
      <mesh position={[0.05, -0.3, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.2, 8]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.05, -0.3, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.2, 8]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

// Transistor component
export const Transistor = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Body */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Leads (3 pins) */}
      {[-0.1, 0, 0.1].map((offset, i) => (
        <mesh key={i} position={[offset, -0.3, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
};

