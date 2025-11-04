import Features from '@/components/Features'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import ProtectionCases from '@/components/ProtectionCases'
import StepsSection from '@/components/StepsSection'

const page = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <ProtectionCases />
      {/* 

      <Experience />
      <Services />
      <Portfolio />
      <Feedbacks />
      <Contact />
      */}
    </main>
  )
}

export default page