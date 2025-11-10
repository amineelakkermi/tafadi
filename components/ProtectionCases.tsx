'use client'

import styles from "@/styles/style"
import CasePair from "./CasesPair"
import badClient1 from '../public/badClient1.png';
import goodClient1 from '../public/goodClient1.png';
import newClient from '../public/newClient.png';
import Heading from "./Heading"

type Locale = 'ar' | 'en'

function getCases(locale: Locale) {
  if (locale === 'en') {
    return [
      {
        icon: badClient1,
        badCase: 'A customer with bad behavior with you',
        solution: 'Tafadi will hide Cash on Delivery and bank transfer for them as needed.',
      },
      {
        icon: newClient,
        badCase: 'A new customer for you but with a bad history elsewhere',
        solution: 'Tafadi will hide Cash on Delivery and bank transfer for them as needed.',
      },
      {
        icon: goodClient1,
        badCase: 'Good behavior with you, but bad elsewhere',
        solution: 'Tafadi will respect their behavior with you, but will keep monitoring in case it changes.',
      },
    ]
  }
  return [
    {
      icon: badClient1,
      badCase: "عميل سلوكه سيء معك",
      solution: "تفادي سيخفي عنه الدفع عند الاستلام والتحويل البنكي حسب الحاجة.",
    },
    {
      icon: newClient,
      badCase: "عميل جديد عليك ولكن لديه تاريخ سيء مع غيرك",
      solution: "تفادي سيخفي عنه الدفع عند الاستلام والتحويل البنكي حسب الحاجة.",
    },
    {
      icon: goodClient1,
      badCase: "عميل سلوكه جيد معك ولكن سلوكه سيء مع غيرك",
      solution: "تفادي سيحترم سلوكه معك ولن يقوم بشيء، ولكن سيكون تحت المراقبة في حال تغيّر سلوكه.",
    },
  ]
}

export default function ProtectionCases({ locale = 'ar' }: { locale?: Locale }) {
  const isEn = locale === 'en'
  const headingTitle = isEn ? 'Protection cases' : 'حـالـــات الحمــاية'
  const headingText = isEn
    ? 'Tafadi does not treat all customers the same. It adapts protection based on customer history and behavior to ensure maximum security and flexibility.'
    : 'نظام تفادي لا يتعامل مع كل العملاء بنفس الطريقة، بل يكيّف أسلوب الحماية وفقًا لتاريخ وسلوك العميل لضمان أقصى درجات الأمان والمرونة.'

  const casesData = getCases(locale)

  return (
    <section id="cases" className={`relative min-h-screen w-full text-start bg-black/40 ${styles.padding}`}>
      <div className="gradient-circle5"></div>
      <div className="max-w-6xl flex flex-col items-center mx-auto my-16 border-b border-white/10 pb-16">
        <Heading
          as="h1"
          title={headingTitle}
          text={headingText}
          containerClassName="space-y-6 text-center"
          align="center"
        />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        {casesData.map((item, index) => (
          <CasePair
            key={index}
            icon={item.icon}
            badCase={item.badCase}
            solution={item.solution}
            locale={locale}
          />
        ))}
      </div>
    </section>
  )
}
