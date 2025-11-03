// components/StepsSection.tsx
import StepCard from "./StepCard"
import { UserSearch, Mail, Shield } from "lucide-react"
import styles from "@/styles/style"

const stepsData = [
  {
    step: 1,
    icon: <UserSearch size={48} />,
    title: "فرز وتصنيف العملاء",
    description: "سيستغرق عدة ساعات لتجميع وتحليل البيانات.",
  },
  {
    step: 2,
    icon: <Mail size={48} />,
    title: "سيصلك تقرير عبر الإيميل",
    description: "فور الانتهاء من الفرز سيُرسل لك تقرير مفصل.",
  },
  {
    step: 3,
    icon: <Shield size={48} />,
    title: "تفادي يصبح رجل الأمن لديك",
    description: "يتأكد من كل عميل يدخل آليًا ويرسل لك تنبيهًا عند كل حماية.",
  },
]

export default function StepsSection() {
  return (
    <section className={`relative w-full text-center ${styles.padding}`}>
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          عند تفعيل <span className="text-violet-400">تفادي</span> سوف يقوم بـ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stepsData.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
