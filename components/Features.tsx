import FeatureCard from "./FeatureCard"
import styles from "@/styles/style"
import { Settings2, Bell, Mail, Shield } from "lucide-react"

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
    className={`relative min-h-screen w-full text-center bg-black/40 ${styles.padding}`}>
      <div className="max-w-3xl mx-auto space-y-6 my-16">
        <h2 className={`${styles.title}`}>
         لمـاذا تختــار تفــادي ؟
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          لأن تفادي نظام متكامل للحماية الذكية، يراقب متجرك لحظة بلحظة، يمنحك تنبيهات فورية،
          وتحكمًا كاملاً لتأمين تجربة بيع أكثر موثوقية وأمانًا.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  )
}
