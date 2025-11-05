'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface WorkCardProps {
  icon: string | StaticImageData
  title: string
  description: string
}

interface Position {
  x: number
  y: number
}

const WorkCard: React.FC<WorkCardProps> = ({ icon, title, description }) => {
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

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(el, {
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        })
        return () => mm.revert()
      })
    })

    return () => ctx.revert()
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
      className={`group relative rounded-2xl border border-white/10 py-10 sm:py-12 px-6 sm:px-8 
        bg-white/10 
        backdrop-blur-lg
        shadow-[0_0_20px_rgba(0,0,0,0.15)] 
        hover:shadow-[0_0_25px_rgba(0,0,0,0.3)] 
        transition-all duration-500
      `}
    >
      {/* تأثير الإضاءة */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(168,85,247,0.25), transparent 80%)`
        }}
      />

      {/* المحتوى */}
      <div className="relative flex flex-col items-start text-start space-y-4 z-10">
        <Image src={icon} alt="icon" width={150} height={150} />
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default WorkCard
