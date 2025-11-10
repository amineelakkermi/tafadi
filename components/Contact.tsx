'use client';
import styles from '@/styles/style'
import { ArrowUpIcon, ArrowUpLeft, ArrowUpRight, Send } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import EmailScrolling from '@/components/EmailScrolling'

type Locale = 'ar' | 'en'

const Contact = ({ locale = 'ar' }: { locale?: Locale }) => {
  const title = locale === 'en'
    ? (
        <>
          Have a question <br /> or interested in investing?
        </>
      )
    : (
        <>
          لديك استفسار <br /> أو ترغب بالاستثمار ؟
        </>
      )
  const cta = locale === 'en' ? 'Contact us now' : 'تـواصــل معنــا الآن'

  return (
    <section id='contact' className={`lg:pt-16 pt-12 min-h-[100vh] flex flex-col gap-8 justify-center items-center relative bg-black/30 pb-24 lg:pb-40`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Title with gradient and glow effect */}
      <div className="relative text-center z-10">
        <h1 className={`text-[30px] sm:text-[40px] lg:text-[80px] font-cairo font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-white drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]`}>
          {title}
        </h1>
        <div className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
      </div>

      {/* Enhanced CTA Button */}
      <Link
        href="https://wa.me/+966554413535"
        target='_blank'
        className="group relative mt-8 flex gap-4 items-center justify-center rounded-full px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 hover:scale-105 transition-all duration-500 ease-out shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] border border-purple-400/20 z-10"
        style={{ backgroundSize: '200% 100%', backgroundPosition: '0% 0%' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundPosition = '100% 0%'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundPosition = '0% 0%'; }}
      >
        <span className="relative z-10 font-cairo">{cta}</span>
        <div className='relative w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center bg-white rounded-full group-hover:rotate-45 group-hover:scale-110 transition-all duration-500 ease-out shadow-lg'>
          <ArrowUpLeft className='w-6 h-6 sm:w-7 sm:h-7 text-purple-600 group-hover:text-violet-600 transition-colors duration-300' />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      </Link>

      <div className="absolute bottom-0 left-0 w-full" >
        <EmailScrolling locale={locale} />
      </div>
    </section>
  )
}

export default Contact