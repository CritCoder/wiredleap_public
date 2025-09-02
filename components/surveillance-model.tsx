'use client'

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

interface SurveillanceModelProps {
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
  autoRotate?: boolean
  className?: string
}

function Model({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], autoRotate = true }) {
  const meshRef = useRef<any>()
  const { scene } = useGLTF('/models/SurveillanceModel.glb')
  
  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      // Rotate around Y axis (vertical) for proper camera spinning
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <primitive object={scene.clone()} />
    </group>
  )
}

export function SurveillanceModel({
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
  className = ''
}: SurveillanceModelProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ 
          position: [0, 2, 8], 
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Lighting setup for surveillance equipment */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={0.8}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          <spotLight
            position={[5, 5, 5]}
            angle={0.3}
            penumbra={0.2}
            intensity={0.5}
            castShadow
          />
          
          {/* The 3D Model */}
          <Model 
            scale={scale}
            position={position}
            rotation={rotation}
            autoRotate={autoRotate}
          />
          
          {/* Controls for interaction */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            target={[0, 0, 0]}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.8}
            minAzimuthAngle={-Math.PI / 6}
            maxAzimuthAngle={Math.PI / 6}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Preload the model
useGLTF.preload('/models/SurveillanceModel.glb')