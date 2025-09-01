"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navItems = [
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "Technology", href: "#technology" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold text-foreground font-alliance2">Wiredleap</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-foreground font-medium transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-black text-white hover:bg-black/90 hover:shadow-lg'
                  : 'bg-black text-white hover:bg-black/90'
              }`}
            >
              Get Started
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`transition-all duration-300 ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="bg-white/80 backdrop-blur-xl border-l border-white/20 w-80"
              >
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
  )
}
