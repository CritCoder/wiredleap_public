"use client"

import { Suspense, useRef, useState, useMemo, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function AbstractShape() {
  const meshRef = useRef<THREE.Group>(null!)
  const { scene } = useGLTF('/models/abstractshape.glb')
  
  // Clone scene once for better performance
  const clonedScene = useMemo(() => scene.clone(), [scene])
  
  // Cache sin calculation for smoother performance
  const rotationSpeedRef = useRef({ y: 0, xOffset: 0 })

  // Optimized rotation with requestAnimationFrame-friendly delta
  useFrame((state, delta) => {
    if (meshRef.current && delta < 0.1) { // Skip frame if delta too large (lag spike)
      // Smooth Y rotation
      rotationSpeedRef.current.y += delta * 0.3
      meshRef.current.rotation.y = rotationSpeedRef.current.y
      
      // Smooth X oscillation with cached calculation
      rotationSpeedRef.current.xOffset += delta * 0.2
      meshRef.current.rotation.x = Math.sin(rotationSpeedRef.current.xOffset) * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      <primitive object={clonedScene} scale={1.2} position={[0, 0, 0]} />
    </group>
  )
}

function FallbackGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const rotationSpeedRef = useRef({ y: 0, xOffset: 0 })

  useFrame((state, delta) => {
    if (meshRef.current && delta < 0.1) { // Skip frame if delta too large
      // Smooth Y rotation
      rotationSpeedRef.current.y += delta * 0.3
      meshRef.current.rotation.y = rotationSpeedRef.current.y
      
      // Smooth X oscillation
      rotationSpeedRef.current.xOffset += delta * 0.2
      meshRef.current.rotation.x = Math.sin(rotationSpeedRef.current.xOffset) * 0.1
    }
  })

  // Memoize geometry and material for better performance
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1, 2), [])
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#ffffff",
    opacity: 0.9,
    transparent: true,
    wireframe: false,
    emissive: "#0066ff",
    emissiveIntensity: 0.1,
    roughness: 0.3,
    metalness: 0.7,
  }), [])

  return (
    <mesh ref={meshRef} scale={1.5} geometry={geometry} material={material} />
  )
}

export function ThreeDModel() {
  const [useGLB, setUseGLB] = useState(true)

  // Memoize canvas configuration for better performance
  const canvasProps = useMemo(() => ({
    camera: { position: [0, 0, 4] as [number, number, number], fov: 50 },
    style: { background: 'transparent' },
    gl: { 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance' as const,
      stencil: false,
      depth: true
    },
    frameloop: 'always' as const,
    dpr: [1, 2] as [number, number] // Limit pixel ratio for performance
  }), [])

  const orbitControlsProps = useMemo(() => ({
    enableZoom: false,
    enablePan: false,
    autoRotate: false,
    autoRotateSpeed: 1,
    enableDamping: true,
    dampingFactor: 0.05
  }), [])

  return (
    <div className="w-full h-full">
      <Canvas {...canvasProps}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
        
        <Suspense fallback={<FallbackGeometry />}>
          {useGLB ? (
            <AbstractShape />
          ) : (
            <FallbackGeometry />
          )}
          <OrbitControls {...orbitControlsProps} />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Preload with error handling
useGLTF.preload('/models/abstractshape.glb')