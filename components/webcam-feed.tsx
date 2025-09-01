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
    console.log('Requesting webcam access...')
    console.log('Browser:', navigator.userAgent)
    console.log('Protocol:', window.location.protocol)
    
    // Check if we're on HTTPS (required for getUserMedia)
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      setError('Camera access requires HTTPS. Please use a secure connection.')
      setPermissionState('error')
      return
    }
    
    // Check if getUserMedia is supported
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('getUserMedia not supported')
      setError('Camera access not supported in this browser. Try Chrome, Firefox, or Safari.')
      setPermissionState('error')
      return
    }
    
    try {
      console.log('Calling getUserMedia...')
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640 },
          height: { ideal: 480 },
          frameRate: { ideal: 30 }
        } 
      })
      
      console.log('Webcam access granted!', mediaStream)
      setStream(mediaStream)
      setPermissionState('granted')
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
    } catch (err) {
      console.error('Webcam access denied:', err)
      console.error('Error name:', err.name)
      console.error('Error message:', err.message)
      
      // Handle specific error types
      if (err.name === 'NotAllowedError') {
        setError('Camera access denied. Please check: 1) Arc browser settings 2) macOS System Preferences > Security & Privacy > Camera 3) Try refreshing the page')
      } else if (err.name === 'NotFoundError') {
        setError('No camera found. Please connect a camera and try again.')
      } else if (err.name === 'NotSupportedError') {
        setError('Camera not supported in Arc browser. Try Chrome, Firefox, or Safari.')
      } else if (err.name === 'SecurityError') {
        setError('Security error. Please ensure you\'re using HTTPS or localhost.')
      } else {
        setError(`Camera access error: ${err.message}`)
      }
      
      setPermissionState('denied')
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
      <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-xl flex flex-col items-center justify-center p-6 border border-white/10">
        <Button 
          onClick={() => {
            console.log('Button clicked!')
            requestWebcamAccess()
          }}
          size="lg"
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300 border border-white/20"
        >
          <Camera className="w-4 h-4 mr-2" />
          Enable Camera
        </Button>
      </div>
    )
  }

  if (permissionState === 'denied') {
    return (
      <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-xl flex flex-col items-center justify-center p-4 border border-white/10">
        <div className="text-center space-y-3">
          <AlertTriangle className="w-6 h-6 text-white/60 mx-auto" />
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-white">Camera Access Required</h3>
            <p className="text-xs text-white/70 leading-relaxed max-w-48">
              {error || 'Camera access required for demo'}
            </p>
          </div>
          <div className="flex gap-2 justify-center">
            <Button 
              onClick={requestWebcamAccess}
              size="sm" 
              variant="outline"
              className="border-white/20 text-white/80 hover:bg-white/10 text-xs px-3 py-1 backdrop-blur-sm"
            >
              Try Again
            </Button>
            <Button 
              onClick={() => setPermissionState('granted')}
              size="sm" 
              variant="outline"
              className="border-white/20 text-white/80 hover:bg-white/10 text-xs px-3 py-1 backdrop-blur-sm"
            >
              Demo Mode
            </Button>
          </div>
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