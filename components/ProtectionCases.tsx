'use client'

import styles from "@/styles/style"
import { ThumbsDown, AlertTriangle, ThumbsUp } from "lucide-react"
import { ReactNode } from "react"
import CasePair from "./CasesPair"
import badClient from '../public/badClient.png';
import goodClient from '../public/goodClient.png';

import Image from "next/image"

interface CaseItem {
  icon: StaticImageData
  badCase: string
  solution: string
}

const casesData: CaseItem[] = [
  {
    icon: badClient,
    badCase: "عميل سلوكه سيء معك",
    solution: "تفادي سيخفي عنه الدفع عند الاستلام والتحويل البنكي حسب الحاجة.",
  },
  {
    icon: badClient,
    badCase: "عميل جديد عليك ولكن لديه تاريخ سيء مع غيرك",
    solution: "تفادي سيخفي عنه الدفع عند الاستلام والتحويل البنكي حسب الحاجة.",
  },
  {
    icon: goodClient,
    badCase: "عميل سلوكه جيد معك ولكن سلوكه سيء مع غيرك",
    solution:
      "تفادي سيحترم سلوكه معك ولن يقوم بشيء، ولكن سيكون تحت المراقبة في حال تغيّر سلوكه.",
  },
]

export default function ProtectionCases() {
  return (
    <section
      id="cases"
      className={`relative min-h-screen w-full text-start bg-black/40 ${styles.padding}`}
    >
      <div className="gradient-circle5"></div>
      <div className="max-w-6xl flex flex-col items-center mx-auto space-y-6 my-16 border-b border-white/10 pb-16">
        <h2 className={`${styles.title}`}>حـالـــات الحمــاية</h2>
        <p className={`${styles.paragraph} text-center`}>
          نظام تفادي لا يتعامل مع كل العملاء بنفس الطريقة، بل يكيّف أسلوب الحماية وفقًا لتاريخ
          وسلوك العميل لضمان أقصى درجات الأمان والمرونة.
        </p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        {casesData.map((item, index) => (
          <CasePair
            key={index}
            icon={item.icon}
            badCase={item.badCase}
            solution={item.solution}
          />
        ))}
      </div>
    </section>
  )
}
