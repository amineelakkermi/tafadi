'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Heading from '@/components/Heading'

interface Position {
  x: number
  y: number
}

type Tier = {
  id: string
  title: string
  subtitle?: string
  price: string
  period?: string
  monthlyProtections: string
  reportType: string
  accountManager: boolean
  specialOffer: string
  afterDiscount: string
  ctaLabel: string
  highlight?: boolean
}

const tiers: Tier[] = [
    {
      id: 'basic',
      title: 'تفادي بيسك',
      subtitle: 'تناسب المتاجر الصغيرة التي بحدود الـ 100 طلب شهريًا',
      price: '23 ريال',
      period: 'شهريًا',
      monthlyProtections: '10 حمايات شهريًا',
      reportType: 'مبسط',
      accountManager: false,
      specialOffer: '٦ شهور اشتراك + ١ شهر مجانًا',
      afterDiscount: '7 ريال',
      ctaLabel: 'ابدأ الآن',
    },
    {
      id: 'pro',
      title: 'تفادي مرتفع',
      subtitle: 'تناسب المتاجر المتوسطة التي بحدود الـ 500 طلب شهريًا',
      price: '89 ريال',
      period: 'شهريًا',
      monthlyProtections: '110 حماية شهريًا',
      reportType: 'مبسط',
      accountManager: false,
      specialOffer: '٦ شهور اشتراك + ١ شهر مجانًا',
      afterDiscount: '26 ريال',
      ctaLabel: 'اشترك الآن',
      highlight: true,
    },
    {
      id: 'enterprise',
      title: 'تفادي لامحدود',
      subtitle: 'تناسب متاجر الصف الأول التي بحدود الـ 1,000 طلب شهريًا',
      price: '890 ريال',
      period: 'شهريًا',
      monthlyProtections: '1,200 حماية شهريًا',
      reportType: 'مبسط',
      accountManager: true,
      specialOffer: '٦ شهور اشتراك + ١ شهر مجانًا',
      afterDiscount: '267 ريال',
      ctaLabel: 'تواصل معنا',
    },
  ];
  

const PricingCard: React.FC<{ tier: Tier }> = ({ tier }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if ((gsap as any).plugins?.ScrollTrigger == null) {
      gsap.registerPlugin(ScrollTrigger)
    }

    const el = cardRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 24,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseEnter={() => setOpacity(0.5)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative h-full min-h-[520px] sm:min-h-[560px] md:min-h-[600px] lg:min-h-[640px]
        rounded-2xl overflow-hidden border p-5 sm:p-6 md:p-8 transition-all duration-300
         bg-gradient-to-b from-white/5 to-transparent backdrop-blur-[2px]
        shadow-[0_0_25px_rgba(168,85,247,0.12)] hover:shadow-[0_0_34px_rgba(168,85,247,0.40)]
        ${tier.highlight ? 'border-violet-400/40' : 'border-violet-500/20'}`}
    >
      <div className="gradient-card1"></div>
      <div className="gradient-card2"></div>

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(168,85,247,0.25), transparent 80%)`,
        }}
      />

      {/*
       {tier.highlight && (
        <span className="absolute -top-3 right-6 rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
          الأكثر اختيارًا
        </span>
      )}

      */}
      <div className="relative z-10 flex h-full flex-col items-center text-center space-y-8">
        <div className="space-y-4 max-w-prose">
          <h3 className="text-lg sm:text-xl font-semibold text-white">{tier.title}</h3>
          {tier.subtitle && (
            <p className="text-xs sm:text-sm text-violet-200/90 leading-relaxed">{tier.subtitle}</p>
          )}
        </div>

        <div className="flex items-end gap-2">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{tier.price}</span>
          {tier.period && (
            <span className="mb-1 text-xs sm:text-sm text-gray-300">/{tier.period}</span>
          )}
        </div>

        <div className="w-full pt-4 flex-1">
          <div className="divide-y divide-white/10 overflow-hidden rounded-xl bg-white/5">
            <div className="grid grid-cols-5 items-center gap-3 px-4 py-3 text-right">
              <span className="col-span-3 text-[13px] sm:text-sm text-gray-300">عدد الحمايات الشهرية</span>
              <span className="col-span-2 text-sm sm:text-base text-white font-medium">{tier.monthlyProtections}</span>
            </div>
            <div className="grid grid-cols-5 items-center gap-3 px-4 py-3 text-right">
              <span className="col-span-3 text-[13px] sm:text-sm text-gray-300">نوع التقرير</span>
              <span className="col-span-2 text-sm sm:text-base text-white font-medium">{tier.reportType}</span>
            </div>
            <div className="grid grid-cols-5 items-center gap-3 px-4 py-3 text-right">
              <span className="col-span-3 text-[13px] sm:text-sm text-gray-300">مدير حساب خاص</span>
              <span className="col-span-2 text-sm sm:text-base text-white font-medium">{tier.accountManager ? 'نعم' : '×'}</span>
            </div>
            <div className="grid grid-cols-5 items-center gap-3 px-4 py-3 text-right">
              <span className="col-span-3 text-[13px] sm:text-sm text-gray-300">عرض خاص</span>
              <span className="col-span-2 text-sm sm:text-base text-white font-medium">{tier.specialOffer}</span>
            </div>
            <div className="grid grid-cols-5 items-center gap-3 px-4 py-3 text-right">
              <span className="col-span-3 text-[13px] sm:text-sm text-gray-300">السعر</span>
              <span className="col-span-2 text-sm sm:text-base text-white font-medium line-through decoration-2 decoration-red-500/80">{tier.price}</span>
            </div>
            <div className="grid grid-cols-5 items-center gap-3 px-4 py-3 text-right">
              <span className="col-span-3 text-[13px] sm:text-sm text-gray-300">بعد الخصم</span>
              <span className="col-span-2 text-sm sm:text-base text-violet-200 font-semibold">{tier.afterDiscount}</span>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  )
}

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 bg-black/30" dir="rtl">
      <div className="container flex flex-col justify-center items-center text-center mx-auto max-w-6xl px-4 sm:px-6">
        <Heading
          as="h2"
          title="خطط الأسعار"
          text="اختر الخطة المناسبة لحجم متجرك على زد أو سلة"
          containerClassName="mb-12"
        />

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {tiers.map((tier) => (
            <div key={tier.id} className="h-full">
              <PricingCard tier={tier} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing


