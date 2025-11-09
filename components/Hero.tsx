import styles from '@/styles/style'
import Link from 'next/link'
import Particles from './Particles'
import Heading from './Heading'
import Image from 'next/image'
import logo from '../public/logo.png';
import DownloadButton from './DownloadButton'

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[100svh] grid place-items-center overflow-hidden"
    >
      <div className="gradient-circle1"></div>
      <div className="gradient-circle2"></div>
      <div className="gradient-circle3"></div>

    <div className="w-full h-[100%] absolute left-0 top-0">
    
        <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.05}
    particleBaseSize={50}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
      
      
    </div>

    

      <div className="mx-auto max-w-7xl w-full px-6 sm:px-10 py-12 z-50">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center space-y-10">
         <div className="logo">
            <Image src={logo} width={80} height={80} alt='logo' />
          </div>
         
          <Heading
            as="h1"
            id="hero-title"
            title={"احمِ متجرك من الطلبات الوهمية والمحتالين"}
            text={(
              <>
                تفادي يراقب عمليات الدفع عند الاستلام، ويصنف العملاء وفقًا لتاريخ تعاملاتهم.
                <br />
                لتتجنب الخسائر الناتجة عن الطلبات غير الجادة بسهولة وذكاء.
              </>
            )}
            containerClassName=""
            titleClassName="leading-tight"
            textClassName="mx-auto max-w-3xl text-base sm:text-lg text-gray-200"
            useDefaultParagraph={false}
            align="center"
          />

        {/* Download buttons */}
        <DownloadButton />
        </div>
      </div>
    </section>
  )
}
