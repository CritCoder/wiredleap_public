"use client"

import Image from 'next/image'

const photos = [
  {
    src: '/images/dashboard-preview.png',
    title: 'Real-time Intelligence Dashboard',
    subtitle: 'Live situational awareness across signals',
  },
  {
    src: '/images/parallel-coding-agents.png',
    title: 'Autonomous Agent Collaboration',
    subtitle: 'Coordinated workflows at enterprise scale',
  },
  {
    src: '/images/realtime-coding-previews.png',
    title: 'Instant Previews',
    subtitle: 'Decisions in seconds, not hours',
  },
]

export function PhotoShowcase() {
  return (
    <section data-snap-section className="snap-start snap-always w-full min-h-screen bg-black text-white">
      <div className="w-full h-[85vh] md:h-[90vh]">
        <div className="grid grid-cols-3 gap-0 w-full h-full">
          {photos.map((p, i) => (
            <div key={p.src} className="w-full h-full">
              <div className="flex flex-col h-full">
                {/* Image area - desktop UI should not crop */}
                <div className="relative grow-0 shrink-0 basis-[65%] bg-white/5 border border-white/10">
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    sizes="33vw"
                    className="object-contain p-4 md:p-6"
                    priority={i === 0}
                  />
                </div>
                {/* Caption block fills remaining space and centers content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-3">
                  <h3 className="text-base md:text-lg font-alliance2 font-light">{p.title}</h3>
                  <p className="text-white/70 mt-1 text-xs md:text-sm">{p.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
