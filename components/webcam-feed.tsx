'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Camera, Shield, Lock, Eye, AlertTriangle } from 'lucide-react'

type PermissionState = 'requesting' | 'granted' | 'denied' | 'error'

export function WebcamFeed() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [permissionState, setPermissionState] = useState<PermissionState>('requesting')
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [error, setError] = useState<string>('')

  const requestWebcamAccess = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640 },
          height: { ideal: 480 },
          frameRate: { ideal: 30 }
        } 
      })
      
      setStream(mediaStream)
      setPermissionState('granted')
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
    } catch (err) {
      console.error('Webcam access denied:', err)
      setPermissionState('denied')
      if (err instanceof Error) {
        setError(err.message)
      }
    }
  }

  useEffect(() => {
    return () => {
      // Cleanup: stop all tracks when component unmounts
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }, [stream])

  if (permissionState === 'requesting') {
    return (
      <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-xl flex flex-col items-center justify-center p-4 border border-white/10">
        {/* Surveillance-style header */}
        <div className="absolute top-2 left-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <span className="text-xs text-white/60 font-mono">SURVEILLANCE ACTIVE</span>
        </div>
        
        {/* Creative permission request */}
        <div className="text-center space-y-4">
          <div className="relative">
            <Camera className="w-8 h-8 text-white mx-auto mb-2" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">🔍 Subject Detection Required</h3>
            <p className="text-xs text-white/80 leading-relaxed max-w-32">
              Enable visual monitoring to experience our advanced surveillance technology
            </p>
          </div>
          
          <Button 
            onClick={requestWebcamAccess}
            size="sm"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-xs px-3 py-2 rounded-lg transition-all duration-300 border border-white/20"
          >
            <Shield className="w-3 h-3 mr-1" />
            Authorize Monitoring
          </Button>
          
          <div className="flex items-center justify-center gap-1 text-xs text-white/40">
            <Lock className="w-3 h-3" />
            <span>Secure & Private</span>
          </div>
        </div>
      </div>
    )
  }

  if (permissionState === 'denied') {
    return (
      <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-xl flex flex-col items-center justify-center p-4 border border-white/10">
        <div className="absolute top-2 left-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
          <span className="text-xs text-white/40 font-mono">ACCESS DENIED</span>
        </div>
        
        <div className="text-center space-y-3">
          <AlertTriangle className="w-6 h-6 text-white/60 mx-auto" />
          <div className="space-y-1">
            <h3 className="text-xs font-semibold text-white">Monitoring Disabled</h3>
            <p className="text-xs text-white/70 leading-relaxed max-w-28">
              Camera access required for surveillance demo
            </p>
          </div>
          <Button 
            onClick={requestWebcamAccess}
            size="sm" 
            variant="outline"
            className="border-white/20 text-white/80 hover:bg-white/10 text-xs px-3 py-1 backdrop-blur-sm"
          >
            Retry Access
          </Button>
        </div>
      </div>
    )
  }

  if (permissionState === 'granted') {
    return (
      <div className="w-full h-full bg-black/60 backdrop-blur-xl rounded-xl overflow-hidden relative border border-white/10">
        {/* Live status indicator */}
        <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
          <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
          <span className="text-xs text-white/80 font-mono">LIVE FEED</span>
        </div>
        
        {/* Surveillance overlay */}
        <div className="absolute top-2 right-2 z-10">
          <Eye className="w-4 h-4 text-white/40" />
        </div>
        
        {/* Webcam video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        
        {/* Scanning line effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-0.5 bg-white/30 animate-pulse" 
               style={{
                 top: '50%',
                 animation: 'scan 3s linear infinite'
               }} />
        </div>
        
        {/* Crosshair overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            <div className="w-8 h-0.5 bg-white/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 bg-white/20"></div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scan {
            0% { top: 0%; opacity: 1; }
            50% { opacity: 0.8; }
            100% { top: 100%; opacity: 0; }
          }
        `}</style>
      </div>
    )
  }

  return null
}