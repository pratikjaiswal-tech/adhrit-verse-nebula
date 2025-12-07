import { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

// Wireframe Globe
const WireframeGlobe = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  const rings = useMemo(() => {
    const ringCount = 8;
    const points: THREE.Vector3[][] = [];
    
    for (let i = 0; i < ringCount; i++) {
      const ring: THREE.Vector3[] = [];
      const lat = (i / (ringCount - 1)) * Math.PI;
      const radius = Math.sin(lat) * 2 * scale;
      const y = Math.cos(lat) * 2 * scale;
      
      for (let j = 0; j <= 32; j++) {
        const lng = (j / 32) * Math.PI * 2;
        ring.push(new THREE.Vector3(
          Math.cos(lng) * radius,
          y,
          Math.sin(lng) * radius
        ));
      }
      points.push(ring);
    }
    return points;
  }, [scale]);

  const meridians = useMemo(() => {
    const meridianCount = 12;
    const points: THREE.Vector3[][] = [];
    
    for (let i = 0; i < meridianCount; i++) {
      const meridian: THREE.Vector3[] = [];
      const lng = (i / meridianCount) * Math.PI * 2;
      
      for (let j = 0; j <= 32; j++) {
        const lat = (j / 32) * Math.PI;
        const radius = Math.sin(lat) * 2 * scale;
        const y = Math.cos(lat) * 2 * scale;
        meridian.push(new THREE.Vector3(
          Math.cos(lng) * radius,
          y,
          Math.sin(lng) * radius
        ));
      }
      points.push(meridian);
    }
    return points;
  }, [scale]);

  return (
    <group ref={meshRef} position={position}>
      {rings.map((ring, i) => (
        <Line
          key={`ring-${i}`}
          points={ring}
          color="#2563EB"
          lineWidth={1}
          transparent
          opacity={0.4}
        />
      ))}
      {meridians.map((meridian, i) => (
        <Line
          key={`meridian-${i}`}
          points={meridian}
          color="#00B3FF"
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}
    </group>
  );
};

// Cyber Grid Floor
const CyberGrid = () => {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 0.5) % 2;
    }
  });

  const lines = useMemo(() => {
    const gridLines: THREE.Vector3[][] = [];
    const size = 20;
    const divisions = 20;
    
    // Horizontal lines
    for (let i = -divisions; i <= divisions; i++) {
      gridLines.push([
        new THREE.Vector3(-size, 0, i * (size / divisions)),
        new THREE.Vector3(size, 0, i * (size / divisions)),
      ]);
    }
    
    // Vertical lines
    for (let i = -divisions; i <= divisions; i++) {
      gridLines.push([
        new THREE.Vector3(i * (size / divisions), 0, -size),
        new THREE.Vector3(i * (size / divisions), 0, size),
      ]);
    }
    
    return gridLines;
  }, []);

  return (
    <group ref={gridRef} position={[0, -3, 0]} rotation={[-Math.PI / 6, 0, 0]}>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line}
          color="#2563EB"
          lineWidth={0.5}
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  );
};

// Shield Shape
const ShieldOutline = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  const shieldPoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    // Shield shape
    points.push(new THREE.Vector3(0, 1.2, 0));
    points.push(new THREE.Vector3(0.8, 0.8, 0));
    points.push(new THREE.Vector3(1, 0.3, 0));
    points.push(new THREE.Vector3(0.9, -0.3, 0));
    points.push(new THREE.Vector3(0.5, -0.8, 0));
    points.push(new THREE.Vector3(0, -1.2, 0));
    points.push(new THREE.Vector3(-0.5, -0.8, 0));
    points.push(new THREE.Vector3(-0.9, -0.3, 0));
    points.push(new THREE.Vector3(-1, 0.3, 0));
    points.push(new THREE.Vector3(-0.8, 0.8, 0));
    points.push(new THREE.Vector3(0, 1.2, 0));
    return points;
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef} position={position} scale={0.8}>
        <Line
          points={shieldPoints}
          color="#B8C7D6"
          lineWidth={2}
          transparent
          opacity={0.6}
        />
      </group>
    </Float>
  );
};

// Data Particles
const DataParticles = () => {
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00B3FF"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
};

// Hexagon Node
const HexNode = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <circleGeometry args={[0.3, 6]} />
        <meshBasicMaterial color="#2563EB" wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-5, 5, 5]} intensity={0.3} color="#2563EB" />
      <pointLight position={[5, -5, -5]} intensity={0.2} color="#00B3FF" />

      <WireframeGlobe position={[2.5, 0, -2]} scale={1.2} />
      <ShieldOutline position={[-2.5, 0.5, 0]} />
      <CyberGrid />
      <DataParticles />
      
      <HexNode position={[-1, 2, 1]} />
      <HexNode position={[1.5, -1.5, 0.5]} />
      <HexNode position={[3, 1.5, -1]} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

export const HeroScene = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {/* Cyber gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Animated glow orbs - blue only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-float-delayed animate-pulse-slow" />
      </div>
      
      {/* 3D Canvas */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <Scene />
          </Canvas>
        </Suspense>
      </div>
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
    </div>
  );
};
