import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

export const CircuitTrace = ({ 
  start = [0, 0, 0], 
  end = [1, 0, 0], 
  color = "#ffd700",
  animated = true,
  thickness = 0.05
}) => {
  const lineRef = useRef();
  const materialRef = useRef();

  // Create curved path between start and end
  const points = createCurvedPath(start, end);

  useFrame((state) => {
    if (animated && materialRef.current) {
      // Animate the glow
      materialRef.current.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.4;
    }
  });

  return (
    <group>
      {/* Main trace line */}
      <Line
        ref={lineRef}
        points={points}
        color={color}
        lineWidth={thickness * 10}
        transparent
        opacity={0.8}
      />
      
      {/* Glow effect */}
      <Line
        points={points}
        color={color}
        lineWidth={thickness * 20}
        transparent
        opacity={0.3}
      />

      {/* Animated pulse */}
      {animated && (
        <mesh position={start}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial
            ref={materialRef}
            color={color}
            transparent
            opacity={0.8}
          />
        </mesh>
      )}
    </group>
  );
};

// Create a curved path between two points
function createCurvedPath(start, end, segments = 20) {
  const points = [];
  const curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3(...start),
    new THREE.Vector3(start[0] + (end[0] - start[0]) * 0.33, start[1] + 0.5, start[2]),
    new THREE.Vector3(start[0] + (end[0] - start[0]) * 0.66, end[1] + 0.5, end[2]),
    new THREE.Vector3(...end)
  );

  for (let i = 0; i <= segments; i++) {
    const point = curve.getPoint(i / segments);
    points.push(point);
  }

  return points;
}

