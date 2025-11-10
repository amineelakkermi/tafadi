import React, { useEffect, useRef, useState } from 'react'

type Locale = 'ar' | 'en'

function formatMonthly(value: string, locale: Locale) {
  const numMatch = value.match(/[\d,.]+/)
  const num = numMatch ? numMatch[0] : value
  return locale === 'en' ? `${num} protections/month` : value
}

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

export const PricingCard: React.FC<{ tier: Tier; locale?: Locale }> = ({ tier, locale = 'ar' }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const labels = locale === 'en'
    ? {
        monthly: 'Monthly protections',
        report: 'Report type',
        manager: 'Dedicated account manager',
        offer: 'Special offer',
        yes: 'Yes',
        no: '×',
      }
    : {
        monthly: 'عدد الحمايات الشهرية',
        report: 'نوع التقرير',
        manager: 'مدير حساب خاص',
        offer: 'عرض خاص',
        yes: 'نعم',
        no: '×',
      }

  const labelCls = `text-[13px] sm:text-sm text-gray-300 text-start`
  const valueCls = `text-sm sm:text-base text-white whitespace-wrap max-w-[150px]  font-medium text-end`

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
      className={`relative w-full flex-1 rounded-2xl overflow-hidden border p-4 sm:p-5 md:p-6 transition-all duration-300
        bg-gradient-to-b from-white/5 to-transparent backdrop-blur-[2px]
        shadow-[0_0_25px_rgba(168,85,247,0.012)] hover:shadow-[0_0_34px_rgba(168,85,247,0.040)]
        ${tier.highlight ? 'border-violet-400/40' : 'border-violet-500/20'}`}
      style={{ minHeight: '500px' }}
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

      <div className="relative z-10 flex h-full flex-col items-center text-center space-y-4">
        <div className="space-y-2 max-w-prose">
          <h3 className="text-lg sm:text-xl font-semibold text-white">{tier.title}</h3>
          {tier.subtitle && (
            <p className="text-xs sm:text-[15px] mt-5 text-violet-200/90 leading-relaxed">{tier.subtitle}</p>
          )}
        </div>

        <div className="flex gap-3 flex-col items-center">
          <span className="relative text-sm sm:text-[18px] text-red-400 mt-1">
            {tier.price}
            <span className="absolute left-0 top-1/2 w-[100%] h-[2px] bg-red-500 -translate-y-1/2"></span>
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-violet-200">{tier.afterDiscount}</span>
        </div>

        <div className="w-full pt-2 flex-1">
          <div className="divide-y divide-white/10 overflow-hidden rounded-xl bg-white/5">
            <div className="flex items-center justify-between px-4 py-3" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              <span className={labelCls}>{labels.monthly}{locale === 'en' ? ':' : ''}</span>
              <span className={valueCls}>{formatMonthly(tier.monthlyProtections, locale)}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              <span className={labelCls}>{labels.report}{locale === 'en' ? ':' : ''}</span>
              <span className={valueCls}>{tier.reportType}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              <span className={labelCls}>{labels.manager}{locale === 'en' ? ':' : ''}</span>
              <span className={valueCls}>{tier.accountManager ? (locale === 'en' ? 'Yes' : 'نعم') : '×'}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              <span className={labelCls}>{labels.offer}{locale === 'en' ? ':' : ''}</span>
              <span className={valueCls}>{tier.specialOffer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
