"use client"

import { useEffect, useRef } from "react"

/**
 * Lightweight section-by-section smooth scroll controller.
 * - Activates only on large screens and when user doesn't prefer reduced motion.
 * - Works with elements that have `data-snap-section` on the homepage container.
 */
export function FullPageScroll({ containerId = "home-scroll-container" }: { containerId?: string }) {
  const isAnimatingRef = useRef(false)
  const currentIndexRef = useRef(0)
  const sectionsRef = useRef<HTMLElement[]>([])
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isTouch = matchMedia("(pointer: coarse)").matches
    if (prefersReduced || isTouch) return

    const container = document.getElementById(containerId)
    if (!container) return

    // Ensure we start at the top so the Hero is the first fold
    // Use rAF to guarantee layout is ready
    requestAnimationFrame(() => {
      container.scrollTo({ top: 0 })
    })

    const sections = Array.from(
      container.querySelectorAll<HTMLElement>('[data-snap-section]')
    )
    if (sections.length === 0) return
    sectionsRef.current = sections

    // Track current section with IntersectionObserver
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          const idx = sectionsRef.current.indexOf(visible.target as HTMLElement)
          if (idx >= 0) currentIndexRef.current = idx
        }
      },
      { root: container, threshold: [0.25, 0.5, 0.75] }
    )
    sections.forEach(s => io.observe(s))

    const scrollToIndex = (nextIndex: number) => {
      if (isAnimatingRef.current) return
      const clamped = Math.max(0, Math.min(nextIndex, sectionsRef.current.length - 1))
      const target = sectionsRef.current[clamped]
      if (!target) return
      isAnimatingRef.current = true
      currentIndexRef.current = clamped
      const top = target.offsetTop - container.offsetTop
      container.scrollTo({ top, behavior: 'smooth' })
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => { isAnimatingRef.current = false }, 800)
    }

    const hasScrollableYParent = (target: EventTarget | null) => {
      let el = target as HTMLElement | null
      while (el && el !== container) {
        const style = window.getComputedStyle(el)
        const canScrollY = el.scrollHeight > el.clientHeight && /(auto|scroll)/.test(style.overflowY)
        if (canScrollY) return true
        el = el.parentElement
      }
      return false
    }

    const isInteractiveTarget = (target: EventTarget | null): boolean => {
      let el = target as HTMLElement | null
      while (el && el !== container) {
        if (el.dataset && (el.dataset.interactive !== undefined)) return true
        if (el.tagName === 'CANVAS') return true
        el = el.parentElement
      }
      return false
    }

    const onWheel = (e: WheelEvent) => {
      // If horizontal intent is stronger, allow native horizontal scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      // If a nested element can scroll vertically, allow it to handle the wheel
      if (hasScrollableYParent(e.target)) return
      // If target is interactive (e.g., 3D canvas), don't intercept so zoom can work
      if (isInteractiveTarget(e.target)) return
      // Allow natural scroll beyond extremes so footer/top can be reached
      const lastIndex = sectionsRef.current.length - 1
      const idx = currentIndexRef.current
      if ((idx === 0 && e.deltaY < 0) || (idx === lastIndex && e.deltaY > 0)) {
        return
      }
      if (isAnimatingRef.current) { e.preventDefault(); return }
      // Ignore small delta wheels to allow subtle micro scrolls
      const threshold = 10
      if (Math.abs(e.deltaY) < threshold) return
      e.preventDefault()
      const dir = e.deltaY > 0 ? 1 : -1
      scrollToIndex(currentIndexRef.current + dir)
    }

    const onKey = (e: KeyboardEvent) => {
      if (isAnimatingRef.current) return
      if (["PageDown", "ArrowDown", "Space"].includes(e.code)) {
        e.preventDefault()
        scrollToIndex(currentIndexRef.current + 1)
      } else if (["PageUp", "ArrowUp"].includes(e.code)) {
        e.preventDefault()
        scrollToIndex(currentIndexRef.current - 1)
      }
    }

    container.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      io.disconnect()
      container.removeEventListener('wheel', onWheel as any)
      window.removeEventListener('keydown', onKey as any)
    }
  }, [containerId])

  return null
}
