"use client"

import { useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Database, 
  Shield, 
  Lock, 
  Network, 
  Zap,
  Eye,
  Globe,
  Cpu,
  BarChart3
} from "lucide-react"

export function TechnologyStack() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const enableAutoAdvance = false // Performance: disable auto-advance by default

  const technologies = [
    {
      name: "AI/ML Engine",
      description: "Advanced machine learning algorithms for pattern recognition and threat detection",
      icon: Brain,
      category: "Core AI",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Data Fusion Platform",
      description: "Real-time integration and analysis of multiple intelligence sources",
      icon: Database,
      category: "Data Processing",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Threat Intelligence",
      description: "Comprehensive threat detection and risk assessment systems",
      icon: Shield,
      category: "Security",
      color: "bg-red-100 text-red-600"
    },
    {
      name: "Encryption & Security",
      description: "Enterprise-grade encryption and secure data handling",
      icon: Lock,
      category: "Security",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Network Analysis",
      description: "Advanced network traffic analysis and anomaly detection",
      icon: Network,
      category: "Monitoring",
      color: "bg-orange-100 text-orange-600"
    },
    {
      name: "Real-time Processing",
      description: "High-performance real-time data processing and analytics",
      icon: Zap,
      category: "Performance",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      name: "Visual Intelligence",
      description: "AI-powered image and video analysis capabilities",
      icon: Eye,
      category: "AI",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      name: "Global Intelligence Network",
      description: "Worldwide threat intelligence and geopolitical analysis",
      icon: Globe,
      category: "Intelligence",
      color: "bg-teal-100 text-teal-600"
    },
    {
      name: "Edge Computing",
      description: "Distributed computing for faster threat response",
      icon: Cpu,
      category: "Infrastructure",
      color: "bg-pink-100 text-pink-600"
    },
    {
      name: "Advanced Analytics",
      description: "Predictive analytics and behavioral analysis",
      icon: BarChart3,
      category: "Analytics",
      color: "bg-cyan-100 text-cyan-600"
    }
  ]

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let isScrolling = false
    let startX: number
    let scrollLeft: number

    const handleMouseDown = (e: MouseEvent) => {
      isScrolling = true
      isDraggingRef.current = true
      startX = e.pageX - scrollContainer.offsetLeft
      scrollLeft = scrollContainer.scrollLeft
      scrollContainer.style.cursor = 'grabbing'
      scrollContainer.style.userSelect = 'none'
    }

    const handleMouseLeave = () => {
      isScrolling = false
      isDraggingRef.current = false
      scrollContainer.style.cursor = 'grab'
      scrollContainer.style.userSelect = 'auto'
    }

    const handleMouseUp = () => {
      isScrolling = false
      isDraggingRef.current = false
      scrollContainer.style.cursor = 'grab'
      scrollContainer.style.userSelect = 'auto'
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isScrolling) return
      e.preventDefault()
      const x = e.pageX - scrollContainer.offsetLeft
      const walk = (x - startX) * 2
      scrollContainer.scrollLeft = scrollLeft - walk
    }

    scrollContainer.addEventListener('mousedown', handleMouseDown)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)
    scrollContainer.addEventListener('mouseup', handleMouseUp)
    scrollContainer.addEventListener('mousemove', handleMouseMove)

    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
      scrollContainer.removeEventListener('mouseup', handleMouseUp)
      scrollContainer.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Auto-advance the horizontal scroller every 3 seconds (disabled for performance)
  useEffect(() => {
    if (!enableAutoAdvance) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const container = scrollContainerRef.current
    if (!container) return

    const getCards = () => Array.from(container.querySelectorAll<HTMLElement>('[data-tech-card]'))

    const tick = () => {
      if (isDraggingRef.current) return
      const cards = getCards()
      if (cards.length === 0) return
      // Find nearest current index
      const currentLeft = container.scrollLeft
      let nearestIndex = 0
      let nearestDist = Number.POSITIVE_INFINITY
      cards.forEach((el, i) => {
        const d = Math.abs(el.offsetLeft - currentLeft)
        if (d < nearestDist) { nearestDist = d; nearestIndex = i }
      })
      let next = nearestIndex + 1
      if (next >= cards.length) next = 0
      const target = cards[next]
      container.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
    }

    const id = window.setInterval(tick, 3000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section data-snap-section className="snap-start w-full min-h-screen bg-black text-white grid place-items-center">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center space-y-8 mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-alliance2 font-light mx-auto">
            Enterprise-Grade Technology Stack
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Built on cutting-edge technologies designed for mission-critical intelligence operations 
            and enterprise security requirements.
          </p>
        </div>
      </div>

      {/* Full Width Horizontal Scroll Container */}
      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        {/* Scroll Container - Full Width */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 cursor-grab active:cursor-grabbing px-6"
          style={{
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name} 
              data-tech-card
              className="bg-white/5 border border-white/10 w-80 flex-shrink-0 scroll-snap-start hover:border-white/30 transition-colors duration-200"
              style={{ 
                minWidth: '320px'
              }}
            >
              <CardContent className="p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 bg-white/10 text-white` }>
                    <tech.icon className="w-5 h-5" />
                  </div>
                  <Badge variant="outline" className="text-xs border-white/20 text-white/80">
                    {tech.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-white/70 line-clamp-3 min-h-[3.75rem]">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Scroll Indicator removed per request */}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
