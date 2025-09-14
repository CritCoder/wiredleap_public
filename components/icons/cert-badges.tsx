import React from 'react'

type IconProps = {
  size?: number
  className?: string
}

export function Soc2BadgeIcon({ size = 56, className = '' }: IconProps) {
  const s = size
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#ffffff08" stroke="#ffffff1f" />
      {/* Shield */}
      <path d="M32 14c6 4 12 4 12 4v10c0 8-4.5 14.5-12 18-7.5-3.5-12-10-12-18V18s6 0 12-4Z" fill="#ffffff12" stroke="#ffffff50" />
      {/* Micro rings */}
      <circle cx="32" cy="36" r="11" stroke="#ffffff40" />
      <circle cx="32" cy="36" r="7" stroke="#ffffff60" className="badge-glow" />
      {/* Check */}
      <path d="M26.5 36.5l3.5 3.5 7.5-8" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Micro dots (drift) */}
      {Array.from({ length: 10 }).map((_, i) => (
        <circle key={i} cx={18 + (i % 5) * 8} cy={50 + Math.floor(i / 5) * 6} r="0.6" fill="#ffffff40" className={i % 2 ? 'badge-drift' : ''} />
      ))}
    </svg>
  )
}

export function IsoBadgeIcon({ size = 56, className = '' }: IconProps) {
  const s = size
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#ffffff08" stroke="#ffffff1f" />
      {/* Medal ring */}
      <circle cx="32" cy="26" r="10" fill="#ffffff10" stroke="#ffffff50" />
      {/* Ribbon tails */}
      <path d="M26 34l-6 10 8-3 4 6 4-6 8 3-6-10" fill="#ffffff10" stroke="#ffffff50" strokeLinejoin="round" />
      {/* Micro ticks (rotate subtly) */}
      <g className="badge-rotate-slow" opacity="0.6">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2
          const r1 = 22, r2 = 24
          const cx = 32 + Math.cos(angle) * r1
          const cy = 32 + Math.sin(angle) * r1
          const x2 = 32 + Math.cos(angle) * r2
          const y2 = 32 + Math.sin(angle) * r2
          return <line key={i} x1={cx} y1={cy} x2={x2} y2={y2} stroke="#ffffff30" />
        })}
      </g>
    </svg>
  )
}

export function FedrampBadgeIcon({ size = 56, className = '' }: IconProps) {
  const s = size
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#ffffff08" stroke="#ffffff1f" />
      {/* Stars ring */}
      <g opacity="0.85">
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i / 10) * Math.PI * 2
          return <path key={i} d={`M ${32 + Math.cos(angle)*18} ${24 + Math.sin(angle)*18} l1.5 0 0.5-1.5 0.5 1.5 1.5 0-1.2 0.9 0.4 1.5-1.2-0.8-1.2 0.8 0.4-1.5z`} fill="#ffffff" fillOpacity="0.7" className="badge-glow" />
        })}
      </g>
      {/* Monochrome stripes */}
      <rect x="14" y="40" width="36" height="3" fill="#ffffff22" />
      <rect x="14" y="45" width="36" height="3" fill="#ffffff18" />
      <rect x="14" y="50" width="36" height="3" fill="#ffffff12" />
      {/* Center lock */}
      <circle cx="32" cy="30" r="8" fill="#0b0b0b" stroke="#ffffff60" />
      <rect x="29" y="28" width="6" height="6" rx="1.5" fill="#0b0b0b" stroke="#ffffff60" />
      <rect x="30.5" y="23" width="3" height="4" rx="1.5" fill="#ffffff70" />
    </svg>
  )
}

export function GovernmentBadgeIcon({ size = 56, className = '' }: IconProps) {
  const s = size
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#ffffff07" stroke="#ffffff1f" />
      {/* Laurels */}
      {Array.from({ length: 6 }).map((_, i) => (
        <path key={`l${i}`} d={`M22 ${22 + i*5} c -4 2 -4 6 0 8`} stroke="#ffffff70" fill="none" strokeWidth="1.2" className="badge-glow" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <path key={`r${i}`} d={`M42 ${22 + i*5} c 4 2 4 6 0 8`} stroke="#ffffff70" fill="none" strokeWidth="1.2" className="badge-glow" />
      ))}
      {/* Crest */}
      <path d="M32 22c4 0 9 2 9 6 0 6-5 10-9 10s-9-4-9-10c0-4 5-6 9-6Z" fill="#ffffff10" stroke="#ffffff60" />
      <path d="M28 33h8" stroke="#ffffff70" strokeLinecap="round" />
      <path d="M30 29h4" stroke="#ffffff70" strokeLinecap="round" />
      {/* Stars */}
      {Array.from({ length: 5 }).map((_, i) => (
        <path key={i} d={`M ${22 + i*5} 18 l1 0 0.3-1 0.3 1 1 0-0.8 0.6 0.3 1-0.8-0.5-0.8 0.5 0.3-1z`} fill="#ffffff80" />
      ))}
      {/* Ribbon */}
      <path d="M22 46h20l-4 6-6-3-6 3-4-6Z" fill="#ffffff10" stroke="#ffffff50" />
    </svg>
  )
}

// styles for animations are declared in app/globals.css (.badge-glow, .badge-drift, .badge-rotate-slow)
