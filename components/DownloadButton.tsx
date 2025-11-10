import Image from 'next/image'
import partner4 from '../public/partners/partner4.webp'
import zid from '../public/partners/zid.png'

export default function DownloadButton() {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Bouton Salla */}
      <a
        href="https://s.salla.sa/auth?intended_to=https%3A%2F%2Fs.salla.sa%2Fapps%2Finstall%2F1450881912%3Ftrial%3D1%26utm_source%3Dapps"
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center justify-center gap-2 w-36 sm:w-48 h-14 sm:h-16
          rounded-full border border-white/15 bg-white/10 text-sm font-medium
          hover:bg-white/20 transition-colors"
      >
        تحميل عبر
        <Image
          src={partner4}
          width={40}
          height={40}
          alt="Salla"
          className="object-contain logo"
        />
      </a>

      {/* Bouton Zid */}
      <a
        href="https://zid.sa/"
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center justify-center gap-2 w-36 sm:w-48 h-14 sm:h-16
          rounded-full border border-white/15 bg-white/10 text-sm font-medium
          hover:bg-white/20 transition-colors"
      >
        تحميل عبر
        <Image
          src={zid}
          width={40}
          height={40}
          alt="Zid"
          className="object-contain logo"
        />
      </a>
    </div>
  )
}
