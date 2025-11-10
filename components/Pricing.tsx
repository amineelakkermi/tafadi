'use client'

import React from 'react'
import Heading from '@/components/Heading'
import { PricingCard } from './PrcingCard'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules"
import styles from "@/styles/style"

type Locale = 'ar' | 'en'

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

function getTiers(locale: Locale): Tier[] {
  if (locale === 'en') {
    return [
      {
        id: 'basic',
        title: 'Tafadi Basic',
        subtitle: 'For small stores around 100 orders/month',
        price: 'SAR 23',
        period: 'monthly',
        monthlyProtections: '10 protections/month',
        reportType: 'Simple',
        accountManager: false,
        specialOffer: '6 months + 1 month free',
        afterDiscount: 'SAR 7',
        ctaLabel: 'Start now',
      },
      {
        id: 'pro',
        title: 'Tafadi Pro',
        subtitle: 'For medium stores around 500 orders/month',
        price: 'SAR 89',
        period: 'monthly',
        monthlyProtections: '110 protections/month',
        reportType: 'Simple',
        accountManager: false,
        specialOffer: '6 months + 1 month free',
        afterDiscount: 'SAR 26',
        ctaLabel: 'Subscribe now',
        highlight: true,
      },
      {
        id: 'enterprise',
        title: 'Tafadi Unlimited',
        subtitle: 'For top-tier stores around 1,000 orders/month',
        price: 'SAR 890',
        period: 'monthly',
        monthlyProtections: '1,200 protections/month',
        reportType: 'Simple',
        accountManager: true,
        specialOffer: '6 months + 1 month free',
        afterDiscount: 'SAR 267',
        ctaLabel: 'Contact us',
      },
    ]
  }
  return [
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
}

export default function Pricing({ locale = 'ar' }: { locale?: Locale }) {
  const isEn = locale === 'en'
  const headingTitle = isEn ? 'Pricing plans' : 'خطط الأسعار'
  const headingText = isEn ? 'Choose the plan that fits your store on Zid or Salla' : 'اختر الخطة المناسبة لحجم متجرك على زد أو سلة'

  const tiers = getTiers(locale)

  return (
    <section id="pricing" className="w-full relative py-16 sm:py-24 bg-black/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center text-center">
        <Heading as="h1" title={headingTitle} text={headingText} containerClassName="mb-12" />

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
            className="w-full"
          >
            {tiers.map((tier) => (
              <SwiperSlide key={tier.id} className="flex justify-center">
                <PricingCard tier={tier} locale={locale} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
