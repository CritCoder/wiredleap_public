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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, ChevronDown } from "lucide-react"

const solutionsItems = [
  { name: "AI Code Reviews", href: "/solutions/ai-code-reviews", description: "Intelligent code analysis and suggestions" },
  { name: "Real-time Previews", href: "/solutions/real-time-previews", description: "Instant feedback and live collaboration" },
  { name: "Parallel Coding", href: "/solutions/parallel-coding", description: "Multi-task processing and faster development" },
  { name: "Integrations", href: "/solutions/integrations", description: "Connect with your favorite tools" },
  { name: "MCP Connectivity", href: "/solutions/mcp-connectivity", description: "Advanced server management" },
  { name: "Easy Deployment", href: "/solutions/deployment", description: "Streamlined deployment process" },
]

const navItems = [
  { name: "Docs", href: "/docs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
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
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
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
          <nav className="hidden md:flex items-center gap-8 relative z-[110]">
            <div className="relative">
              <NavigationMenu>
                <NavigationMenuList className="relative z-[110]">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground/70 hover:text-foreground font-medium transition-all duration-200 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent border-none">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-[120]">
                      <div className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] bg-white border border-border rounded-lg shadow-xl shadow-black/10">
                        {solutionsItems.map((item) => (
                          <NavigationMenuLink key={item.name} asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
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
              asChild
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-black text-white hover:bg-black/90 hover:shadow-lg'
                  : 'bg-black text-white hover:bg-black/90'
              }`}
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`transition-all duration-300 z-[110] ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="bg-white/80 backdrop-blur-xl border-l border-white/20 w-80 z-[120]"
              >
                <SheetHeader>
                  <SheetTitle className="text-left text-lg font-semibold text-foreground font-alliance2">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-foreground font-semibold mb-3">Solutions</h3>
                    <div className="grid gap-2">
                      {solutionsItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-foreground/70 hover:text-foreground font-medium transition-colors duration-200 py-2 pl-4 border-l-2 border-transparent hover:border-primary/50"
                        >
                          <div className="font-medium text-sm">{item.name}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-foreground/70 hover:text-foreground font-medium transition-colors duration-200 py-2 border-b border-white/10"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="bg-black text-white hover:bg-black/90 rounded-full font-medium transition-all duration-300 w-full mt-4">
                    <Link href="/get-started">Get Started</Link>
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
