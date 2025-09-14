'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { SurveillanceModel } from '@/components/surveillance-model'
import { WebcamFeed } from '@/components/webcam-feed'
// Performance: animated background disabled


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
    { name: 'Docs', href: '/docs' },
    { name: 'About', href: '/about' },
]

export function HeroSection() {
    const [showLive, setShowLive] = React.useState(false)
    return (
        <>
            <HeroHeader />
            <main className="relative overflow-hidden bg-black">
                {/* Animated background removed for performance */}
                
                {/* Elegant gradient overlays */}
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                
                
                
                
                
                {/* Removed scanning lines for performance */}
                
                <section data-snap-section className="snap-start">
                    <div className="relative z-20 flex items-center justify-center min-h-screen">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
                                {/* Content */}
                                <div className="lg:col-span-6 text-center sm:mx-auto lg:text-left lg:mr-auto lg:mt-0">
                                    <AnimatedGroup variants={transitionVariants}>
                                        <Link
                                            href="#link"
                                            className="hover:bg-background/10 bg-white/10 backdrop-blur-xl group mr-auto flex w-fit items-center gap-4 rounded-full border border-white/20 p-1 pl-4 shadow-md transition-all duration-300 text-white">
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
                                            className="mt-8 max-w-5xl mx-auto lg:mx-0 text-balance text-5xl md:text-6xl lg:text-7xl lg:mt-16 font-alliance2 font-light text-white leading-[1.1]">
                                            Next-Gen Signal Intelligence
                                        </h1>
                                        <p
                                            className="mx-auto lg:mx-0 mt-8 max-w-3xl text-balance text-lg md:text-xl text-white/90 leading-relaxed">
Every feed, every tweet, every comment. every whisper, intelligence that acts.                                        </p>
<p
                                            className="mx-auto lg:mx-0 mt-8 max-w-3xl text-balance text-lg md:text-xl text-white/90 leading-relaxed">From video to social to audio widely unifies every signal into a single real-time intelligence engine at scale.                                        </p>
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
                                        <Button
                                            onClick={() => setShowLive((v) => !v)}
                                            size="lg"
                                            variant="ghost"
                                            className="h-12 rounded-xl px-8 py-4 text-base text-white hover:bg-white/10 font-medium">
                                            <span className="text-nowrap">{showLive ? 'Show 3D Drone' : 'Live Drone Feed'}</span>
                                        </Button>
                                    </AnimatedGroup>
                                </div>
                                {/* Drone Model */}
                                <div className="lg:col-span-6 w-full h-[420px] md:h-[520px] lg:h-[700px] flex items-center justify-center" data-interactive>
                                    {showLive ? (
                                        <div className="w-full h-full bg-black/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10">
                                            <WebcamFeed />
                                        </div>
                                    ) : (
                                        <SurveillanceModel
                                            src="/models/ad.glb"
                                            scale={1500}
                                            fitToBounds={true}
                                            autoRotate={false}
                                            cameraPosition={[0, 0, 8]}
                                            boundsMargin={0.24}
                                            rotation={[0, 0, 0]}
                                            position={[0, 0, 0]}
                                            interactive={false}
                                            enableRotate={false}
                                            enableZoom={false}
                                            enablePan={false}
                                            minDistance={2.5}
                                            maxDistance={12}
                                            centerModel={true}
                                            className="w-full h-full"
                                        />
                                    )}
                                </div>
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
        const container = document.getElementById('home-scroll-container')
        const handler = () => {
            const top = container ? container.scrollTop : window.scrollY
            setIsScrolled(top > 50)
        }
        if (container) {
            container.addEventListener('scroll', handler)
            handler()
            return () => container.removeEventListener('scroll', handler)
        } else {
            window.addEventListener('scroll', handler)
            handler()
            return () => window.removeEventListener('scroll', handler)
        }
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
