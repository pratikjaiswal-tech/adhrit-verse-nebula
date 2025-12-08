import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Cyber Grid Floor
const CyberGrid = () => {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.3) % 2;
    }
  });

  return (
    <group ref={gridRef} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[40, 40, '#2563EB', '#1E293B']} />
    </group>
  );
};

// Floating Data Nodes
const DataNodes = ({ count = 15 }) => {
  const nodesRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 8
      ] as [number, number, number],
      scale: Math.random() * 0.15 + 0.05,
      speed: Math.random() * 0.5 + 0.3
    }));
  }, [count]);

  useFrame((state) => {
    if (nodesRef.current) {
      nodesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={nodesRef}>
      {nodes.map((node, i) => (
        <Float key={i} speed={node.speed} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={node.position}>
            <octahedronGeometry args={[node.scale]} />
            <meshBasicMaterial color="#00B3FF" transparent opacity={0.6} wireframe />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// Wireframe Ring
const WireframeRing = ({ position = [0, 0, 0] as [number, number, number], scale = 1 }) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={ringRef} position={position} scale={scale}>
      <torusGeometry args={[1.5, 0.02, 16, 64]} />
      <meshBasicMaterial color="#2563EB" transparent opacity={0.4} />
    </mesh>
  );
};

// Connecting Lines
const ConnectionLines = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    const lineArray: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    for (let i = 0; i < 8; i++) {
      lineArray.push({
        start: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 6
        ),
        end: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 6
        )
      });
    }
    return lineArray;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => {
        const points = [line.start, line.end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i}>
            <bufferGeometry attach="geometry" {...geometry} />
            <lineBasicMaterial attach="material" color="#00B3FF" transparent opacity={0.2} />
          </line>
        );
      })}
    </group>
  );
};

// Main Scene
const CyberScene = ({ variant = 'default' }: { variant?: 'default' | 'minimal' | 'grid' }) => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#2563EB" intensity={0.5} />
      <pointLight position={[-5, -5, 5]} color="#00B3FF" intensity={0.3} />
      
      {variant !== 'minimal' && <CyberGrid />}
      <DataNodes count={variant === 'minimal' ? 8 : 15} />
      <WireframeRing position={[3, 1, -2]} scale={0.8} />
      <WireframeRing position={[-3, -1, -3]} scale={0.6} />
      {variant !== 'minimal' && <ConnectionLines />}
    </>
  );
};

interface CyberBackgroundProps {
  variant?: 'default' | 'minimal' | 'grid';
  className?: string;
}

export const CyberBackground = ({ variant = 'default', className = '' }: CyberBackgroundProps) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Static gradient fallback */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-navy-steel to-cyber-black" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.15)_0%,_transparent_70%)]" />
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        className="!absolute inset-0"
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <CyberScene variant={variant} />
      </Canvas>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};
