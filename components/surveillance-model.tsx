'use client'

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Bounds, ContactShadows, Center } from '@react-three/drei'
import * as THREE from 'three'

interface SurveillanceModelProps {
  src?: string
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
  autoRotate?: boolean
  className?: string
  boundsMargin?: number
  fitToBounds?: boolean
  centerModel?: boolean
  interactive?: boolean
  enableRotate?: boolean
  enableZoom?: boolean
  enablePan?: boolean
  minDistance?: number
  maxDistance?: number
  cameraPosition?: [number, number, number]
}

function Model({ src = '/models/SurveillanceModel.glb', scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], autoRotate = true }) {
  const meshRef = useRef<any>()
  const { scene } = useGLTF(src)
  
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
  src = '/models/SurveillanceModel.glb',
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
  className = '',
  boundsMargin = 1.2,
  fitToBounds = true,
  centerModel = true,
  interactive = false,
  enableRotate = false,
  enableZoom = false,
  enablePan = false,
  minDistance = 2,
  maxDistance = 12,
  cameraPosition = [0, 2, 8],
}: SurveillanceModelProps) {
  const controlsRef = React.useRef<any>(null)
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ 
          position: cameraPosition, 
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        frameloop={interactive ? 'always' : 'demand'}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
          toneMappingExposure: 1.15,
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting setup for surveillance equipment */}
          {/* Neutral white-balanced lights to preserve original material colors */}
          <ambientLight intensity={0.9} color={0xffffff} />
          <directionalLight position={[6, 8, 6]} intensity={0.7} color={0xffffff} />
          {/* Subtle rim/back light for edge definition */}
          <directionalLight position={[-6, 4, -6]} intensity={0.35} color={0xffffff} />
          <pointLight position={[-6, -4, -6]} intensity={0.25} color={0xffffff} />
          
          {/* Optional: fit to model bounds. Disabled for cases where explicit scale should be preserved. */}
          <Bounds fit={fitToBounds} observe={false} margin={boundsMargin}>
            {/* The 3D Model */}
            {centerModel ? (
              <Center>
                <Model 
                  src={src}
                  scale={scale}
                  position={position}
                  rotation={rotation}
                  autoRotate={autoRotate}
                />
              </Center>
            ) : (
              <Model 
                src={src}
                scale={scale}
                position={position}
                rotation={rotation}
                autoRotate={autoRotate}
              />
            )}
          </Bounds>
          {/* Soft contact shadow to ground the model */}
          <ContactShadows position={[0, -0.5, 0]} opacity={0.35} scale={20} blur={2.6} far={2} />
          
          {/* Controls for interaction */}
          <OrbitControls
            ref={controlsRef}
            makeDefault
            enableZoom={enableZoom}
            enablePan={enablePan}
            enableRotate={enableRotate}
            autoRotate={false}
            target={[0, 0, 0]}
            enableDamping
            dampingFactor={0.06}
            minDistance={minDistance}
            maxDistance={maxDistance}
            // Allow free rotation; keep pan optional. Explicitly map inputs.
            mouseButtons={{
              LEFT: THREE.MOUSE.ROTATE,
              MIDDLE: THREE.MOUSE.DOLLY,
              RIGHT: THREE.MOUSE.PAN,
            }}
            touches={{
              ONE: THREE.TOUCH.ROTATE,
              TWO: enablePan ? THREE.TOUCH.DOLLY_PAN : THREE.TOUCH.DOLLY,
            }}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Preload the known existing model. Avoid preloading optional files to prevent 404s in dev.
useGLTF.preload('/models/SurveillanceModel.glb')
