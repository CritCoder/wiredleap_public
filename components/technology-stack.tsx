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
      startX = e.pageX - scrollContainer.offsetLeft
      scrollLeft = scrollContainer.scrollLeft
      scrollContainer.style.cursor = 'grabbing'
      scrollContainer.style.userSelect = 'none'
    }

    const handleMouseLeave = () => {
      isScrolling = false
      scrollContainer.style.cursor = 'grab'
      scrollContainer.style.userSelect = 'auto'
    }

    const handleMouseUp = () => {
      isScrolling = false
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

  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-alliance2 font-light">
            Enterprise-Grade Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built on cutting-edge technologies designed for mission-critical intelligence operations 
            and enterprise security requirements.
          </p>
        </div>
      </div>

      {/* Full Width Horizontal Scroll Container */}
      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
        
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
              className="border border-border/50 w-80 flex-shrink-0 scroll-snap-start hover:border-primary/30 transition-colors duration-200"
              style={{ 
                minWidth: '320px'
              }}
            >
              <CardContent className="p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${tech.color} transition-colors duration-200`}>
                    <tech.icon className="w-5 h-5" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {tech.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
          <span>Drag to explore our technology stack</span>
          <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
        </div>
      </div>

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
