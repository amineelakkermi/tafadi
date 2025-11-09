import FeatureCard from "./FeatureCard"
import styles from "@/styles/style"
import search from '../public/search.png';
import report from '../public/report.png';
import guard from '../public/guard.png';

import WorkCard from "./WorkCard"
import Heading from "./Heading"
import React from 'react'

const workData = [
  {
    icon: search,
    title: "فرز وتصنيف العملاء",
    description:
      "يحلل النظام بيانات الطلبات القديمة والجديدة بدقة، ليصنف العملاء حسب مدى الجدية في الدفع عند الاستلام. العملية قد تستغرق بضع ساعات لضمان الدقة.",
  }, 
  {
    icon: report,
    title: "تقرير شامل عبر البريد الإلكتروني",
    description:
      "فور الانتهاء من عملية الفرز، يصلك تقرير تفصيلي إلى بريدك الإلكتروني يوضح حالة الطلبات ومؤشرات الاحتيال المكتشفة.",
  },
 
  {
    icon: guard,
    title: "تفادي أصبح رجل أمن في متجرك",
    description:
      "يتأكد تفادي آليًا من كل عميل يدخل متجرك، ويراقب الطلبات لحظيًا لاكتشاف السلوك المشبوه قبل أن يسبب خسائر.",
  },
]


export default function HowItWorks() {
  return (
    <section
    id="works"
    className={`relative min-h-screen w-full text-start bg-black/40 ${styles.padding}`}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 my-16 border-b-white/20 border-b pb-16">
        <Heading
          as="h1"
          title={"كيف يعمل تفادي"}
          text={
            "لأن تفادي نظام متكامل للحماية الذكية، يراقب متجرك لحظة بلحظة، يمنحك تنبيهات فورية، وتحكمًا كاملاً لتأمين تجربة بيع أكثر موثوقية وأمانًا."
          }
          layout="inline"
          titleClassName=""
          textClassName={`text-center lg:text-start`}
          align="start"
        />
      </div>

      <div className="gradient-circle4" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workData.map((work, index) => (
          <WorkCard
            key={index}
            icon={work.icon}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>

      
    </section>
  )
}
