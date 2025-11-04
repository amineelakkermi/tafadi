import styles from '@/styles/style'
import Link from 'next/link'
import Particles from './Particles'

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
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation={false}
  />
    </div>

    

      <div className="mx-auto max-w-7xl w-full px-6 sm:px-10 py-12">
        <div className="mx-auto max-w-4xl text-center space-y-10">
          <h1 id="hero-title" className={`${styles.title} leading-tight`}>
            احمِ متجرك من الطلبات الوهمية والمحتالين
          </h1>

          <p className="mx-auto max-w-3xl text-base sm:text-lg text-gray-200">
          تفادي يراقب عمليات الدفع عند الاستلام، ويصنف العملاء وفقًا لتاريخ تعاملاتهم.
          لتتجنب الخسائر الناتجة عن الطلبات غير الجادة بسهولة وذكاء.
          </p>

          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* زر بنفسجي رئيسي */}
            <Link
              href="#contact"
              className="inline-flex z-10 items-center justify-center rounded-full px-6 sm:px-8 py-3 text-base font-semibold text-white 
              bg-gradient-to-r from-violet-500 to-purple-600 
              hover:from-violet-600 hover:to-purple-700 
              transition-all duration-200 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              جرّب تفادي الآن
            </Link>

            {/* زر شفاف */}
            <Link
              href="#portfolio"
              className="inline-flex z-10 items-center justify-center rounded-full px-6 sm:px-8 py-3 text-base font-semibold 
              bg-transparent text-white border border-white/30
              "
            >
              شاهد كيف تعمل الخدمة
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
