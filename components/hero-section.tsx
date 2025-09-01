import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Users, ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Component as AnimatedBackground } from "@/components/ui/raycast-animated-background"

const navItems = [
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "Technology", href: "#technology" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full grayscale opacity-80">
        <AnimatedBackground />
      </div>
      
      {/* Fallback Gradient Background */}
      <div className="absolute inset-0 bg-black z-5" />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Fixed Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <span className="text-2xl font-bold text-white font-alliance2 drop-shadow-lg">Wiredleap</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white font-medium transition-all duration-200 relative group drop-shadow-md"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 bg-white text-black hover:bg-white/90 drop-shadow-lg">
                Get Started
              </Button>
              
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white/95 backdrop-blur-xl border-l border-white/20 w-80">
                  <SheetHeader>
                    <SheetTitle className="text-left text-lg font-semibold text-foreground font-alliance2">
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-foreground/70 hover:text-foreground font-medium transition-colors duration-200 py-2 border-b border-white/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Button className="bg-black text-white hover:bg-black/90 rounded-full font-medium transition-all duration-300 w-full mt-4">
                      Get Started
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="px-6 py-3 text-sm bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 drop-shadow-lg">
              🚀 Now in Beta
            </Badge>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-alliance2 font-light leading-tight drop-shadow-2xl">
                The Future of Intelligence Operations
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-xl">
                Wiredleap delivers advanced AI-powered intelligence solutions for enterprise operations, 
                threat detection, and strategic decision-making at scale.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group drop-shadow-lg">
                Request Enterprise Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 drop-shadow-lg">
                Learn More
              </Button>
      </div>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 text-sm text-white/90">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 drop-shadow-md">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Fortune 500 Trusted</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 drop-shadow-md">
                <Zap className="w-4 h-4 text-white" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 drop-shadow-md">
                <Users className="w-4 h-4 text-white" />
                <span>Enterprise Grade</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm drop-shadow-md">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
