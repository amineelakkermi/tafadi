'use client'

import styles from '@/styles/style'
import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import Heading from '@/components/Heading'

type Locale = 'ar' | 'en'

type FaqItem = { question: string; answer: React.ReactNode }

function getFaqData(locale: Locale): FaqItem[] {
  if (locale === 'en') {
    return [
      {
        question: 'What are Tafadi classification criteria? How is a customer marked as non-serious?',
        answer: (
          <>
            <p className="mb-2">Return rate is calculated based on three patterns:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-2">
              <li>One order, one return: not enough info to classify.</li>
              <li>Two orders with 100% returns: marked as non-serious.</li>
              <li>Three or more orders with 30% returns: marked as non-serious.</li>
            </ul>
            <p>If you want to adjust the classification for your store, contact us and we’ll tailor it to your needs.</p>
          </>
        ),
      },
      {
        question: 'What is Tafadi?',
        answer: (
          <p>
            A service that protects your store from COD abusers who don’t receive orders, and from receipt forgers who steal your products! You can try it free for 30 days.
          </p>
        ),
      },
      {
        question: 'What does Tafadi protect against?',
        answer: (
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>People who choose COD but don’t receive orders (you pay shipping for nothing).</li>
            <li>People who order many items and never receive them (blocking serious customers from buying them).</li>
          </ul>
        ),
      },
      {
        question: 'How does Tafadi work?',
        answer: (
          <p>
            It automatically classifies your current customers and hides Cash on Delivery for risky segments.
          </p>
        ),
      },
      {
        question: 'How do I install Tafadi in my store?',
        answer: (
          <>
            <p className="mb-2">
              Salla stores: install directly from this link:{' '}
              <a
                href="https://s.salla.sa/apps/install/1450881912?trial=1&&utm_source=apps"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                Install link
              </a>
            </p>
            <p className="mb-2">Or go to Apps Store » search for (Tafadi) » install</p>
            <p>For Zid or custom stores, contact us at: +966554413535</p>
          </>
        ),
      },
      {
        question: 'How can I allow a customer to use COD/bank transfer although it’s hidden?',
        answer: (
          <p>
            Go to Customers and remove the customer from the (Tafadi) segment.
          </p>
        ),
      },
    ]
  }
  return [
    {
      question: 'ماهي شروط التصنيف في تفادي ؟ كيف يتم تقييم العميل كعميل غير جاد ؟',
      answer: (
        <>
          <p className="mb-2">يتم احتساب نسبة المسترجع من عدد طلبات العميل على اساس ٣ انواع:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 mb-2">
            <li>النوع الاول: عميل لديه طلب واحد و مسترجع واحد (لا يتم تقييمه لأن المعلومات ليست كافية).</li>
            <li>النوع الثاني: عميل لديه ٢ طلب ونسبة المسترجع ١٠٠٪ يتم تقييمه كعميل غير جاد.</li>
            <li>النوع الثالث: عميل لديه ٣ طلبات واكثر ولديه نسبة رجيع ٣٠٪ يتم تقييمه كعميل غير جاد.</li>
          </ul>
          <p>في حال لديك رغبة في تعديل نظام التقييم لمتجرك تواصل معنا وسنقوم بتعديلها بناء على احتياجك.</p>
        </>
      ),
    },
    {
      question: 'ماهي خدمة تفادي ؟',
      answer: (
        <p>
          هي خدمة تحمي متجرك من الذين يطلبون دفع عند الاستلام ولا يستلمون ويخسروك تكاليف شحن دون فائدة!
          والمحتالين الذين يقومون بتزوير الايصال و يسرقون منتجاتك! (يمكنك تجربة الخدمة مجانًا لمدة ٣٠ يوم).
        </p>
      ),
    },
    {
      question: 'من ماذا يحمي تفادي ؟',
      answer: (
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>يطلبون دفع عند الاستلام ولا يستلمون (وتدفع انت فواتير شحن شهريًا بدون فائدة!).</li>
          <li>يطلبون الكثير من المنتجات ثم لا يستلمونها (ويحرمونك من فرصة بيعها على عملائك الجادين!).</li>
        </ul>
      ),
    },
    {
      question: 'كيف يعمل تفادي ؟',
      answer: (
        <p>
          يقوم بفرز وتصنيف عملائك الحاليين بشكل آلي ووضعهم في مجموعة خاصة ويتم اخفاء الدفع عند الاستلام عنهم.
        </p>
      ),
    },
    {
      question: 'كيف احمل تفادي في متجري ؟',
      answer: (
        <>
          <p className="mb-2">
            متاجر سلة: حملة تفادي مباشرة من هذا الرابط:{' '}
            <a
              href="https://s.salla.sa/apps/install/1450881912?trial=1&&utm_source=apps"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
              رابط التثبيت
            </a>
          </p>
          <p className="mb-2">أو اذهب {'>>'} متجر التطبيقات {'>>'} ابحث عن (تفادي) {'>>'} ثبت التطبيق</p>
          <p>أما اذا كان متجرك في زد أو لك متجرك الخاص، تواصل معنا على: +966554413535</p>
        </>
      ),
    },
    {
      question: 'كيف اسمح لعميل أن يطلب دفع عند الاستلام أو تحويل بنكي رغم إخفاء الخيار؟',
      answer: (
        <p>
          بكل سهولة، كل ما عليك هو الذهاب لقائمة العملاء، ثم حذف العميل من مجموعة ستجدها بإسم (Tafadi).
        </p>
      ),
    },
  ]
}

function getCookieLocale(): Locale {
  if (typeof document === 'undefined') return 'ar'
  const match = document.cookie.split('; ').find((c) => c.startsWith('locale='))?.split('=')[1]
  return match === 'en' ? 'en' : 'ar'
}

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [locale, setLocale] = useState<Locale>('ar')
  const contentRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    setLocale(getCookieLocale())
  }, [])

  const faqData = getFaqData(locale)
  const headingTitle = locale === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return
      if (openIndex === i) {
        gsap.to(el, { height: 'auto', duration: 0.5, ease: 'power2.out', opacity: 1 })
      } else {
        gsap.to(el, { height: 0, duration: 0.5, ease: 'power2.inOut', opacity: 0 })
      }
    })
  }, [openIndex])

  return (
    <section id="faq" className={`relative mt-24 flex flex-col justify-center items-center gap-12 min-h-screen w-full text-start`}>
      <div className="gradient-circle4" />
      <div className={`${styles.marginY} ${styles.marginX} flex flex-col gap-12`}>
        <Heading as="h1" title={headingTitle} align="center" />

        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_25px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden w-full"
            >
              <button onClick={() => toggleIndex(index)} className="w-full flex justify-between items-center px-6 py-4">
                <span className="text-white leading-[30px] text-start font-medium">{item.question}</span>
                <span className="text-white text-xl">{openIndex === index ? '-' : '+'}</span>
              </button>

              <div ref={(el) => { contentRefs.current[index] = el }} style={{ height: 0, overflow: 'hidden', opacity: 0 }} className="px-6 pb-4 text-gray-300">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqAccordion
