import Contact from '@/components/Contact'
import FaqAccordion from '@/components/FaqAccordion'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Partners from '@/components/Partners'
import Pricing from '@/components/Pricing'
import ProtectionCases from '@/components/ProtectionCases'
import StepsSection from '@/components/StepsSection'
import { headers } from 'next/headers'

const page = async () => {
  const cookieHeader = (await headers()).get('cookie') || ''
  const cookieLocale = cookieHeader.split('; ').find(c => c.startsWith('locale='))?.split('=')[1]
  const locale = cookieLocale === 'en' ? 'en' : 'ar'

  return (
    <main data-locale={locale}>
      <Hero locale={locale} />
      <HowItWorks locale={locale} />
      <Features locale={locale} />
      <ProtectionCases locale={locale} />
      <Pricing locale={locale} />
      <Partners locale={locale} />
      <Contact locale={locale} />
    </main>
  )
}

export default page