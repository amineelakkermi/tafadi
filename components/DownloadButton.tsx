import Image from 'next/image'
import partner4 from '../public/partners/partner4.webp'
import zid from '../public/partners/zid.png'

export default function DownloadButton({ locale = 'ar' }: { locale?: 'ar' | 'en' }) {
  const label = locale === 'en' ? 'Install via' : 'تحميل عبر'
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Salla */}
      <a
        href="https://apps.salla.sa/ar/app/1450881912"
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center justify-center gap-2 w-36 sm:w-48 h-14 sm:h-16 rounded-full border border-white/15 bg-white/10 text-sm font-medium hover:bg-white/20 transition-colors"
      >
        {label}
        <Image src={partner4} width={40} height={40} alt="Salla" className="object-contain logo" />
      </a>

      {/* Zid */}
      <a
        href="https://apps.zid.sa/en/application/4393"
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center justify-center gap-2 w-36 sm:w-48 h-14 sm:h-16 rounded-full border border-white/15 bg-white/10 text-sm font-medium hover:bg-white/20 transition-colors"
      >
        {label}
        <Image src={zid} width={40} height={40} alt="Zid" className="object-contain logo" />
      </a>
    </div>
  )
}
