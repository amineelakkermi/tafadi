import React, { useEffect, useRef, useState } from 'react'

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
]



export const PricingCard: React.FC<{ tier: Tier }> = ({ tier }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

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
      style={{ minHeight: '500px' }} // تحديد ارتفاع موحد لكل الكروت
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

        {/* After Discount */}
        <div className="flex gap-3 flex-col items-center">
          <span className="text-sm sm:text-base text-red-400 line-through mt-1">{tier.price}</span>
          <span className="text-2xl sm:text-3xl font-bold text-violet-200">{tier.afterDiscount}</span>
        </div>

        <div className="w-full pt-2 flex-1">
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
          </div>
        </div>
      </div>
    </div>
  )
}

