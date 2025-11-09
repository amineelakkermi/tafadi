'use client'

import React from 'react'
import Heading from '@/components/Heading'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { PricingCard } from './PrcingCard'

const tiers = [
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

const Pricing = () => {
  return (
    <section id="pricing" className="w-full relative py-16 sm:py-24 bg-black/30" dir="rtl">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center text-center">
        <Heading
          as="h2"
          title="خطط الأسعار"
          text="اختر الخطة المناسبة لحجم متجرك على زد أو سلة"
          containerClassName="mb-12"
        />

        <div className="w-full">
          <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          grabCursor={true}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 4000 }}
          breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          }}
          className="w-full">
          {tiers.map((tier) => (
          <SwiperSlide key={tier.id} className="flex justify-center">
          <PricingCard tier={tier} />
          </SwiperSlide>
          ))}
          </Swiper>
          </div>
          </div>

     
    </section>
  )
}

export default Pricing
