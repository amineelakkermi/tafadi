'use client'
import React, { useEffect, useRef, useState, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

interface Position {
  x: number
  y: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if ((gsap as any).plugins?.ScrollTrigger == null) {
      gsap.registerPlugin(ScrollTrigger)
    }
    const el = divRef.current
    if (!el) return

    let ctx: gsap.Context | null = null
    let mm: gsap.MatchMedia | null = null

    ctx = gsap.context(() => {
      mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(el, {
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        })
      })
    })

    return () => {
      if (mm) mm.revert()
      if (ctx) ctx.revert()
    }
  }, [])

  

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(0.5)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => setOpacity(0.5)
  const handleMouseLeave = () => setOpacity(0)

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl border border-white/10 p-6 sm:p-8 
        bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-xl
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden
        hover:border-white/20 hover:shadow-[0_8px_40px_0_rgba(168,85,247,0.25)]
        transition-all duration-500 ease-out
      `}
    >
      {/* Gradient Circle */}
      <div className="gradient-card1"></div>
      <div className="gradient-card2"></div>

      {/* Light Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out rounded-2xl"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(168,85,247,0.15), transparent 70%)`
        }}
      />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative flex flex-col items-center text-center space-y-4 z-10">
        <div className="text-violet-400 text-4xl w-[80px] h-[80px] rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm flex justify-center items-center shadow-[0_0_20px_rgba(168,85,247,0.1)]">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard
