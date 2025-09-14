"use client"

import { useEffect, useState } from 'react'
import { SurveillanceModel } from '@/components/surveillance-model'

type Vec3 = [number, number, number]

interface SmartSurveillanceProps {
  primary?: string
  fallback?: string
  scale?: number
  position?: Vec3
  rotation?: Vec3
  autoRotate?: boolean
  className?: string
}

export function SmartSurveillance({
  primary = '/models/sm.glb',
  fallback = '/models/SurveillanceModel.glb',
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
  className = ''
}: SmartSurveillanceProps) {
  const [src, setSrc] = useState<string>(fallback)

  useEffect(() => {
    let mounted = true
    // Use HEAD to avoid downloading large assets when checking existence
    fetch(primary, { method: 'HEAD' })
      .then((res) => {
        if (!mounted) return
        if (res.ok) setSrc(primary)
      })
      .catch(() => {
        // ignore, keep fallback
      })
    return () => { mounted = false }
  }, [primary])

  return (
    <SurveillanceModel
      src={src}
      scale={scale}
      position={position}
      rotation={rotation}
      autoRotate={autoRotate}
      className={className}
    />
  )
}

