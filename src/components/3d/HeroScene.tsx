import { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

// AI Data Network - Living network with soft moving nodes and connections
const DataNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate network nodes
  const nodes = useMemo(() => {
    const nodeData: { pos: THREE.Vector3; connections: number[] }[] = [];
    const count = 20;
    
    for (let i = 0; i < count; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4
      );
      
      // Find closest nodes for connections
      const connections: number[] = [];
      nodeData.forEach((node, idx) => {
        if (pos.distanceTo(node.pos) < 3) {
          connections.push(idx);
        }
      });
      
      nodeData.push({ pos, connections });
    }
    return nodeData;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Network Nodes */}
      {nodes.map((node, i) => (
        <NetworkNode key={i} position={node.pos} index={i} />
      ))}
      
      {/* Network Connections */}
      {nodes.map((node, i) => 
        node.connections.map((connIdx, j) => (
          <NetworkConnection 
            key={`${i}-${j}`} 
            start={node.pos} 
            end={nodes[connIdx].pos} 
          />
        ))
      )}
    </group>
  );
};

const NetworkNode = ({ position, index }: { position: THREE.Vector3; index: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 0.8 + index * 0.5) * 0.15;
      meshRef.current.scale.setScalar(scale);
    }
    if (pulseRef.current) {
      pulseRef.current.material.opacity = 0.2 + Math.sin(state.clock.getElapsedTime() + index) * 0.1;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0} floatIntensity={0.3}>
      <group position={position.toArray()}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#00B3FF" transparent opacity={0.9} />
        </mesh>
        <mesh ref={pulseRef}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial color="#2563EB" transparent opacity={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

const NetworkConnection = ({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) => {
  return (
    <Line
      ref={lineRef}
      points={[start, end]}
      color="#2563EB"
      lineWidth={0.5}
      transparent
      opacity={0.2}
    />
  );
};

// Wireframe Globe - Slow rotating
const WireframeGlobe = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.08;
    }
  });

  const rings = useMemo(() => {
    const ringCount = 10;
    const points: THREE.Vector3[][] = [];
    
    for (let i = 0; i < ringCount; i++) {
      const ring: THREE.Vector3[] = [];
      const lat = (i / (ringCount - 1)) * Math.PI;
      const radius = Math.sin(lat) * 2 * scale;
      const y = Math.cos(lat) * 2 * scale;
      
      for (let j = 0; j <= 48; j++) {
        const lng = (j / 48) * Math.PI * 2;
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
    const meridianCount = 16;
    const points: THREE.Vector3[][] = [];
    
    for (let i = 0; i < meridianCount; i++) {
      const meridian: THREE.Vector3[] = [];
      const lng = (i / meridianCount) * Math.PI * 2;
      
      for (let j = 0; j <= 48; j++) {
        const lat = (j / 48) * Math.PI;
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
          lineWidth={0.8}
          transparent
          opacity={0.25}
        />
      ))}
      {meridians.map((meridian, i) => (
        <Line
          key={`meridian-${i}`}
          points={meridian}
          color="#00B3FF"
          lineWidth={0.8}
          transparent
          opacity={0.2}
        />
      ))}
      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[1.9 * scale, 32, 32]} />
        <meshBasicMaterial color="#2563EB" transparent opacity={0.03} />
      </mesh>
    </group>
  );
};

// Holographic Shield
const HolographicShield = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const scanRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
    if (scanRef.current) {
      scanRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 1.2;
    }
  });

  const shieldShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 1.5);
    shape.bezierCurveTo(0.3, 1.5, 1, 1.2, 1.2, 0.5);
    shape.bezierCurveTo(1.3, 0, 1.2, -0.5, 0.8, -1);
    shape.bezierCurveTo(0.5, -1.3, 0, -1.5, 0, -1.5);
    shape.bezierCurveTo(0, -1.5, -0.5, -1.3, -0.8, -1);
    shape.bezierCurveTo(-1.2, -0.5, -1.3, 0, -1.2, 0.5);
    shape.bezierCurveTo(-1, 1.2, -0.3, 1.5, 0, 1.5);
    return shape;
  }, []);

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.4}>
      <group ref={groupRef} position={position} scale={0.9}>
        <mesh>
          <shapeGeometry args={[shieldShape]} />
          <meshBasicMaterial color="#B8C7D6" wireframe transparent opacity={0.5} />
        </mesh>
        {/* Scan line */}
        <mesh ref={scanRef}>
          <planeGeometry args={[2.5, 0.02]} />
          <meshBasicMaterial color="#00B3FF" transparent opacity={0.6} />
        </mesh>
        {/* Inner shield glow */}
        <mesh position={[0, 0, -0.01]}>
          <shapeGeometry args={[shieldShape]} />
          <meshBasicMaterial color="#2563EB" transparent opacity={0.05} />
        </mesh>
      </group>
    </Float>
  );
};

// Cyber Grid Floor
const CyberGrid = () => {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 0.3) % 1.5;
    }
  });

  const lines = useMemo(() => {
    const gridLines: THREE.Vector3[][] = [];
    const size = 25;
    const divisions = 30;
    
    for (let i = -divisions; i <= divisions; i++) {
      gridLines.push([
        new THREE.Vector3(-size, 0, i * (size / divisions)),
        new THREE.Vector3(size, 0, i * (size / divisions)),
      ]);
    }
    
    for (let i = -divisions; i <= divisions; i++) {
      gridLines.push([
        new THREE.Vector3(i * (size / divisions), 0, -size),
        new THREE.Vector3(i * (size / divisions), 0, size),
      ]);
    }
    
    return gridLines;
  }, []);

  return (
    <group ref={gridRef} position={[0, -4, 0]} rotation={[-Math.PI / 5, 0, 0]}>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line}
          color="#2563EB"
          lineWidth={0.3}
          transparent
          opacity={0.1}
        />
      ))}
    </group>
  );
};

// Subtle Data Particles
const DataParticles = () => {
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.01) * 0.05;
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
        size={0.025}
        color="#00B3FF"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />
      <pointLight position={[-5, 5, 5]} intensity={0.2} color="#2563EB" />
      <pointLight position={[5, -5, -5]} intensity={0.15} color="#00B3FF" />

      <WireframeGlobe position={[3, 0, -3]} scale={1.4} />
      <HolographicShield position={[-3, 0.5, -1]} />
      <DataNetwork />
      <CyberGrid />
      <DataParticles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

export const HeroScene = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Subtle glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-secondary/6 rounded-full blur-3xl animate-float-delayed animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/4 rounded-full blur-3xl" />
      </div>
      
      {/* 3D Canvas - only render if motion is allowed */}
      {!prefersReducedMotion && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 0, 9], fov: 45 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
              style={{ background: 'transparent' }}
            >
              <Scene />
            </Canvas>
          </Suspense>
        </div>
      )}
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background pointer-events-none" />
      
      {/* Subtle light rays */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-secondary/15 via-transparent to-transparent" />
      </div>
    </div>
  );
};