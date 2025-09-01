"use client"

import { Suspense, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function CCTVCamera() {
  const meshRef = useRef<THREE.Group>(null!)
  const { scene } = useGLTF('/models/cam.glb')
  
  // Clone scene once for better performance
  const clonedScene = useMemo(() => scene.clone(), [scene])
  
  // TERRIFYING sudden movement system
  const movementState = useRef({ 
    targetY: 0, 
    targetX: 0,
    currentY: 0,
    currentX: 0,
    lastJumpTime: 0,
    isMoving: false,
    moveSpeed: 0.3,
    intensity: 1
  })

  useFrame((state, delta) => {
    if (meshRef.current && delta < 0.1) {
      const currentTime = state.clock.elapsedTime
      
      // AGGRESSIVE sudden movements every 1-3 seconds (more frequent!)
      const timeSinceLastJump = currentTime - movementState.current.lastJumpTime
      const nextJumpTime = 1 + Math.random() * 2 // 1-3 seconds
      
      if (timeSinceLastJump > nextJumpTime || movementState.current.lastJumpTime === 0) {
        // VIOLENT jump to random direction - MUCH more extreme
        movementState.current.targetY = (Math.random() - 0.5) * 6 // ±3 radians (±172°)
        movementState.current.targetX = (Math.random() - 0.5) * 3 // ±1.5 radians (±86°)
        movementState.current.lastJumpTime = currentTime
        movementState.current.isMoving = true
        movementState.current.moveSpeed = 0.4 + Math.random() * 0.3 // MUCH faster snapping
        movementState.current.intensity = 1 + Math.random() * 2 // Random intensity multiplier
      }
      
      // SNAP movement - very aggressive
      if (movementState.current.isMoving) {
        const yDiff = movementState.current.targetY - movementState.current.currentY
        const xDiff = movementState.current.targetX - movementState.current.currentX
        
        const speed = movementState.current.moveSpeed * movementState.current.intensity
        movementState.current.currentY += yDiff * speed
        movementState.current.currentX += xDiff * speed
        
        // Stop when very close
        if (Math.abs(yDiff) < 0.02 && Math.abs(xDiff) < 0.02) {
          movementState.current.isMoving = false
        }
      }
      
      // Apply TERRIFYING movements
      meshRef.current.rotation.y = movementState.current.currentY
      meshRef.current.rotation.x = movementState.current.currentX
      
      // AGGRESSIVE micro-movements - make it feel ALIVE and predatory
      const nervousShake = Math.sin(currentTime * 45) * 0.03 * (1 + Math.sin(currentTime * 7) * 0.5)
      const huntingTwitch = Math.cos(currentTime * 37) * 0.025 * (1 + Math.cos(currentTime * 5) * 0.3)
      
      meshRef.current.rotation.y += nervousShake
      meshRef.current.rotation.x += huntingTwitch
      
      // Random occasional "glitch" movements for extra fear
      if (Math.random() < 0.005) { // 0.5% chance per frame
        meshRef.current.rotation.y += (Math.random() - 0.5) * 0.2
        meshRef.current.rotation.x += (Math.random() - 0.5) * 0.1
      }
    }
  })

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      <primitive object={clonedScene} scale={15} />
    </group>
  )
}

function FallbackCCTVGeometry() {
  const meshRef = useRef<THREE.Group>(null!)
  
  // IDENTICAL TERRIFYING movement system as the main camera
  const movementState = useRef({ 
    targetY: 0, 
    targetX: 0,
    currentY: 0,
    currentX: 0,
    lastJumpTime: 0,
    isMoving: false,
    moveSpeed: 0.3,
    intensity: 1
  })

  useFrame((state, delta) => {
    if (meshRef.current && delta < 0.1) {
      const currentTime = state.clock.elapsedTime
      
      // AGGRESSIVE sudden movements every 1-3 seconds
      const timeSinceLastJump = currentTime - movementState.current.lastJumpTime
      const nextJumpTime = 1 + Math.random() * 2
      
      if (timeSinceLastJump > nextJumpTime || movementState.current.lastJumpTime === 0) {
        // VIOLENT jump to random direction - EXTREME
        movementState.current.targetY = (Math.random() - 0.5) * 6 // ±3 radians
        movementState.current.targetX = (Math.random() - 0.5) * 3 // ±1.5 radians
        movementState.current.lastJumpTime = currentTime
        movementState.current.isMoving = true
        movementState.current.moveSpeed = 0.4 + Math.random() * 0.3
        movementState.current.intensity = 1 + Math.random() * 2
      }
      
      // SNAP movement - very aggressive
      if (movementState.current.isMoving) {
        const yDiff = movementState.current.targetY - movementState.current.currentY
        const xDiff = movementState.current.targetX - movementState.current.currentX
        
        const speed = movementState.current.moveSpeed * movementState.current.intensity
        movementState.current.currentY += yDiff * speed
        movementState.current.currentX += xDiff * speed
        
        if (Math.abs(yDiff) < 0.02 && Math.abs(xDiff) < 0.02) {
          movementState.current.isMoving = false
        }
      }
      
      // Apply TERRIFYING movements
      meshRef.current.rotation.y = movementState.current.currentY
      meshRef.current.rotation.x = movementState.current.currentX
      
      // AGGRESSIVE micro-movements - make it feel ALIVE
      const nervousShake = Math.sin(currentTime * 45) * 0.03 * (1 + Math.sin(currentTime * 7) * 0.5)
      const huntingTwitch = Math.cos(currentTime * 37) * 0.025 * (1 + Math.cos(currentTime * 5) * 0.3)
      
      meshRef.current.rotation.y += nervousShake
      meshRef.current.rotation.x += huntingTwitch
      
      // Random glitch movements
      if (Math.random() < 0.005) {
        meshRef.current.rotation.y += (Math.random() - 0.5) * 0.2
        meshRef.current.rotation.x += (Math.random() - 0.5) * 0.1
      }
    }
  })

  // Create a stylized security camera shape
  const cameraBody = useMemo(() => new THREE.BoxGeometry(0.8, 0.4, 1.2), [])
  const cameraLens = useMemo(() => new THREE.CylinderGeometry(0.2, 0.2, 0.3, 16), [])
  const mount = useMemo(() => new THREE.CylinderGeometry(0.15, 0.15, 0.6, 8), [])
  
  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#e0e0e0",
    metalness: 0.8,
    roughness: 0.2,
  }), [])
  
  const lensMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#1a1a1a",
    metalness: 0.9,
    roughness: 0.1,
  }), [])

  return (
    <group ref={meshRef} scale={8} position={[0, 0, 0]}>
      {/* Camera body */}
      <mesh geometry={cameraBody} material={bodyMaterial} position={[0, 0, 0]} />
      {/* Camera lens */}
      <mesh geometry={cameraLens} material={lensMaterial} position={[0.4, 0, 0]} rotation={[0, 0, Math.PI/2]} />
      {/* Mount */}
      <mesh geometry={mount} material={bodyMaterial} position={[0, -0.5, 0]} />
    </group>
  )
}

export function CCTVModel({ className = "" }: { className?: string }) {
  const [useGLB, setUseGLB] = useState(true)

  // Simple canvas props for HUGE CCTV model
  const canvasProps = useMemo(() => ({
    camera: { position: [0, 0, 3] as [number, number, number], fov: 50 },
    style: { background: 'transparent' },
    gl: { 
      alpha: true, 
      antialias: false,
      powerPreference: 'high-performance' as const
    },
    frameloop: 'always' as const
  }), [])

  const orbitControlsProps = useMemo(() => ({
    enableZoom: false,
    enablePan: false,
    autoRotate: false,
    enableDamping: false
  }), [])

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas {...canvasProps}>
        {/* Simple lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <Suspense fallback={<FallbackCCTVGeometry />}>
          {useGLB ? (
            <CCTVCamera />
          ) : (
            <FallbackCCTVGeometry />
          )}
          <OrbitControls {...orbitControlsProps} />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Preload the CCTV model
useGLTF.preload('/models/cam.glb')