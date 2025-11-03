// components/StepCard.tsx
import { ReactNode } from "react"

interface StepCardProps {
  icon: ReactNode
  title: string
  description: string
  step: number
}

export default function StepCard({ icon, title, description, step }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-violet-950/20 border border-violet-700/30 rounded-2xl p-6 hover:bg-violet-900/30 transition-colors duration-300">
      <div className="text-violet-400 text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {step}. {title}
      </h3>
      <p className="text-violet-300 text-sm">{description}</p>
    </div>
  )
}
