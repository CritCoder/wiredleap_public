'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { Component as AnimatedBackground } from "@/components/ui/raycast-animated-background"
import { SurveillanceModel } from "@/components/surveillance-model"

import { Suspense } from "react"

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const menuItems = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Docs', href: '/docs' },
    { name: 'About', href: '/about' },
]

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden bg-black">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0 w-full h-full grayscale opacity-80">
                    <AnimatedBackground />
                </div>
                
                {/* Elegant gradient overlays */}
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <div className="absolute inset-0 bg-black/40 z-5" />
                <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                
                {/* Floating CCTV Camera - Surveillance Theme */}
                <div className="absolute bottom-20 right-8 z-30 hidden lg:block">
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        delayChildren: 2,
                                    },
                                },
                            },
                            item: {
                                hidden: {
                                    opacity: 0,
                                    scale: 0.5,
                                    y: -20,
                                },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        type: 'spring',
                                        bounce: 0.4,
                                        duration: 2.5,
                                    },
                                },
                            },
                        }}>
                        <div className="relative w-32 h-32 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-3 shadow-2xl">
                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent rounded-2xl blur-xl opacity-60"></div>
                            
                            {/* Status indicator */}
                            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                            
                            {/* Placeholder content */}
                            <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-2xl mb-1">📹</div>
                                    <div className="text-xs text-white/60">Monitor</div>
                                </div>
                            </div>
                            
                            {/* Label */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 font-medium whitespace-nowrap">
                                Live Monitor
                            </div>
                        </div>
                    </AnimatedGroup>
                </div>
                
                {/* Security Status Indicators */}
                <div className="absolute bottom-20 left-8 z-30 hidden lg:block">
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        delayChildren: 3,
                                        staggerChildren: 0.2,
                                    },
                                },
                            },
                            item: {
                                hidden: {
                                    opacity: 0,
                                    x: -20,
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: 'spring',
                                        bounce: 0.3,
                                        duration: 1.5,
                                    },
                                },
                            },
                        }}>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-xl rounded-lg border border-gray-700/50 px-4 py-2 shadow-lg">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-300 font-medium">System Active</span>
                            </div>
                            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-xl rounded-lg border border-gray-700/50 px-4 py-2 shadow-lg">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-300 font-medium">AI Monitoring</span>
                            </div>
                            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-xl rounded-lg border border-gray-700/50 px-4 py-2 shadow-lg">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-300 font-medium">24/7 Recording</span>
                            </div>
                        </div>
                    </AnimatedGroup>
                </div>
                
                {/* Scanning Lines Effect */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-20">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                    <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse delay-1000"></div>
                    <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse delay-2000"></div>
                </div>
                
                <section>
                    <div className="relative flex items-center justify-center min-h-screen pt-20">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
                                {/* Left Side - Content */}
                                <div className="text-center sm:mx-auto lg:text-left lg:mr-auto lg:mt-0">
                                    <AnimatedGroup variants={transitionVariants}>
                                        <Link
                                            href="#link"
                                            className="hover:bg-background/10 bg-white/10 backdrop-blur-xl group mx-auto lg:mx-0 flex w-fit items-center gap-4 rounded-full border border-white/20 p-1 pl-4 shadow-md transition-all duration-300 text-white">
                                            <span className="text-sm">📹 Advanced Surveillance Tech</span>
                                            <span className="block h-4 w-0.5 border-l bg-white/20"></span>

                                            <div className="bg-white/10 group-hover:bg-white/20 size-6 overflow-hidden rounded-full duration-500">
                                                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                            
                                        <h1
                                            className="mt-8 max-w-4xl mx-auto lg:mx-0 text-balance text-5xl md:text-6xl lg:text-7xl lg:mt-16 font-alliance2 font-light text-white leading-[1.1]">
                                            Next-Gen Signal Intelligence
                                        </h1>
                                        <p
                                            className="mx-auto lg:mx-0 mt-8 max-w-2xl text-balance text-lg md:text-xl text-white/90 leading-relaxed">
Every feed, every tweet, every comment. every whisper, intelligence that acts.                                        </p>
<p
                                            className="mx-auto lg:mx-0 mt-8 max-w-2xl text-balance text-lg md:text-xl text-white/90 leading-relaxed">From video to social to audio widely unifies every signal into a single real-time intelligence engine at scale.                                        </p>
                                    </AnimatedGroup>

                                    <AnimatedGroup
                                        variants={{
                                            container: {
                                                visible: {
                                                    transition: {
                                                        staggerChildren: 0.05,
                                                        delayChildren: 0.75,
                                                    },
                                                },
                                            },
                                            ...transitionVariants,
                                        }}
                                        className="mt-12 flex flex-col items-center lg:items-start justify-center gap-2 md:flex-row lg:justify-start">
                                        <div className="bg-white/10 backdrop-blur-xl rounded-[14px] border border-white/20 p-0.5">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="rounded-xl px-8 py-4 text-base bg-white text-black hover:bg-white/90 font-medium">
                                                <Link href="/get-started">
                                                    <span className="text-nowrap">Request Security Demo</span>
                                                </Link>
                                            </Button>
                                        </div>
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="ghost"
                                            className="h-12 rounded-xl px-8 py-4 text-base text-white hover:bg-white/10 font-medium">
                                            <Link href="/solutions">
                                                <span className="text-nowrap">View Solutions</span>
                                            </Link>
                                        </Button>
                                    </AnimatedGroup>
                                </div>

                                {/* Right Side - 3D Model */}
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    delayChildren: 0.5,
                                                },
                                            },
                                        },
                                        item: {
                                            hidden: {
                                                opacity: 0,
                                                scale: 0.8,
                                                y: 20,
                                            },
                                            visible: {
                                                opacity: 1,
                                                scale: 1,
                                                y: 0,
                                                transition: {
                                                    type: 'spring',
                                                    bounce: 0.3,
                                                    duration: 2,
                                                },
                                            },
                                        },
                                    }}>
                                    <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center">
                                        <div className="w-full h-full max-w-[600px] flex items-center justify-center relative">
                                            
                                            {/* 3D Model Container */}
                                            <div className="relative w-full h-full">
                                                <Suspense fallback={
                                                    <div className="w-full h-full flex items-center justify-center text-white/50">
                                                        <div className="text-center">
                                                            <div className="animate-spin text-5xl mb-6">📹</div>
                                                            <p className="text-lg">Loading Surveillance Model...</p>
                                                        </div>
                                                    </div>
                                                }>
                                                    <SurveillanceModel 
                                                        scale={6}
                                                        position={[0, -0.5, 0]}
                                                        rotation={[0, 0, 0]}
                                                        autoRotate={true}
                                                        className="w-full h-full"
                                                    />
                                                </Suspense>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-50 w-full px-2 group">
                <div className={cn('mx-auto mt-2 w-full px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-black/50 rounded-2xl border border-white/20 backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <span className="text-2xl font-bold text-white font-alliance2 drop-shadow-lg">Wiredleap</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-white/70 hover:text-white block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-black/50 backdrop-blur-xl group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/20 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white/70 hover:text-white block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-white text-black hover:bg-white/90">
                                    <Link href="/get-started">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
