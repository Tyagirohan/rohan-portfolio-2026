import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment,
  Stars,
  Float
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export const Scene = ({ children, enableControls = false }) => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ 
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      }}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto'
      }}
    >
      <Suspense fallback={null}>
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 5, 15]} fov={50} />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow
          color="#ffd700"
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b87333" />

        {/* Environment */}
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Content */}
        {children}

        {/* Post-processing */}
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>

        {/* Controls (optional) */}
        {enableControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={5}
            maxDistance={30}
            maxPolarAngle={Math.PI / 2}
          />
        )}
      </Suspense>
    </Canvas>
  );
};

export default Scene;

