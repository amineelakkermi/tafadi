'use client'
import Image, { StaticImageData }  from "next/image"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface CasePairProps {
  icon: string | StaticImageData
  badCase: string
  solution: string
}

const CasePair: React.FC<CasePairProps> = ({ icon, badCase, solution }) => {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if ((gsap as any).plugins?.ScrollTrigger == null) {
      gsap.registerPlugin(ScrollTrigger)
    }
    const el = rootRef.current
    if (!el) return

    let ctx: gsap.Context | null = null
    let mm: gsap.MatchMedia | null = null

    ctx = gsap.context(() => {
      mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(el, {
          y: 20,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        })
      })
    })

    return () => {
      if (mm) mm.revert()
      if (ctx) ctx.revert()
    }
  }, [])

  return (
    <div ref={rootRef} className="flex flex-row items-center justify-between gap-4 sm:gap-8 relative">
      {/* Bad Case */}
      <div className="relative p-2 sm:p-4 flex flex-col gap-3 items-center justify-center w-56 h-56 rounded-[25px]
      bg-white/10 border border-white/10 backdrop-blur-lg shadow-lg hover:bg-white/20 transition-all duration-500">
        <div className="mb-2">
          <Image className="logo" src={icon} width={80} height={80} alt="icon" />
        </div>
        <p className="text-center text-gray-300 font-semibold text-[14px] sm:text-[16px] leading-[30px] ">
          {badCase}
        </p>
      </div>

      {/* Line */}
      <div className="hidden md:block w-64 max-w-64 h-[2px] bg-white/10" />

      {/* Solution*/}
      <div className="relative p-2 sm:p-4 flex flex-col gap-3 items-center justify-center w-56 h-56 rounded-[25px]
       bg-white/10 border border-white/10 backdrop-blur-lg shadow-lg hover:bg-white/20 transition-all duration-500">
        <span className="text-violet-400 text-sm font-semibold mb-1">الحــل</span>
        <p className="text-center text-gray-300 text-[14px] sm:text-[16px] leading-[30px]">
          {solution}
        </p>
      </div>
    </div>
  )
}

export default CasePair
