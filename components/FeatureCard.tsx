'use client'
import React, { useRef, useState, ReactNode } from 'react'

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
      className={`group relative rounded-2xl border border-violet-500/20 p-6 sm:p-8 
        shadow-[0_0_25px_rgba(168,85,247,0.1)] 
        hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] 
        transition-all duration-300
      `}
    >
      {/* الخلفيات القديمة */}
      <div className="gradient-card1"></div>
      <div className="gradient-card2"></div>

      {/* تأثير الإضاءة */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(168,85,247,0.25), transparent 80%)`
        }}
      />

      {/* المحتوى */}
      <div className="relative flex flex-col items-center text-center space-y-4 z-10">
        <div className="text-violet-400 text-4xl w-[80px] h-[80px] rounded-full border border-white/20 flex justify-center items-center">
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
