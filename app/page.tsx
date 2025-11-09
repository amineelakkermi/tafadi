import Contact from '@/components/Contact'
import FaqAccordion from '@/components/FaqAccordion'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Partners from '@/components/Partners'
import Pricing from '@/components/Pricing'
import ProtectionCases from '@/components/ProtectionCases'
import StepsSection from '@/components/StepsSection'

const page = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Features />
      <ProtectionCases />
      <Pricing />
      <Contact />


     
    </main>
  )
}

export default page