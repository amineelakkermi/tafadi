'use client'

import React from "react"
import FeatureCard from "./FeatureCard"
import Heading from "./Heading"
import { Settings2, Bell, Mail, Shield } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules"
import styles from "@/styles/style"

const featuresData = [
  {
    icon: <Shield />,
    title: "حراسة 24 ساعة آليًا",
    description:
      "يعمل نظام تفادي على مدار الساعة لمراقبة كل عملية حماية بشكل ذكي ومستمر دون توقف.",
  },
  {
    icon: <Settings2 />,
    title: "إمكانية التحكم اليدوي",
    description:
      "يمكنك إدارة نظام الحماية بنفسك، ضبط الإعدادات، وتخصيص مستوى الأمان حسب احتياجات متجرك.",
  },
  {
    icon: <Bell />,
    title: "تنبيه مع كل حماية",
    description:
      "يُرسل تفادي تنبيهًا فوريًا عند كل عملية حماية جديدة لتكون دائمًا على اطلاع على ما يحدث.",
  },
  {
    icon: <Mail />,
    title: "تقارير دورية عبر الإيميل",
    description:
      "تستقبل تقارير مفصلة عبر البريد الإلكتروني عن أداء نظام الحماية ونسب النجاح بشكل منتظم.",
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className={`relative min-h-screen w-full text-center bg-black/40 ${styles.padding}`}
      dir="rtl"
    >
      <div className="max-w-3xl mx-auto my-16">
        <Heading
          as="h2"
          title={"لمـاذا تختــار تفــادي ؟"}
          text={
            "لأن تفادي نظام متكامل للحماية الذكية، يراقب متجرك لحظة بلحظة، يمنحك تنبيهات فورية، وتحكمًا كاملاً لتأمين تجربة بيع أكثر موثوقية وأمانًا."
          }
          containerClassName="space-y-6"
          textClassName="text-gray-300 text-base sm:text-lg leading-relaxed"
          useDefaultParagraph={false}
          align="center"
        />
      </div>

      <div className="gradient-circle4" />

      <div className="max-w-6xl mx-auto w-full">
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
          className="max-w-6xl"
        >
          {featuresData.map((feature, index) => (
            <SwiperSlide key={index} className="flex justify-center w-full sm:w-auto">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
