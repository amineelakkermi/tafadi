import Image from 'next/image'
import Link from 'next/link'
import { JSX } from 'react'
import logo from '../public/logo.png';
import DownloadButton from './DownloadButton';

type Social = {
  id: 'youtube' | 'instagram' | 'twitter'
  href: string
  label: string
  icon: JSX.Element
}

const socials: Social[] = [
  {
    id: 'youtube',
    href: 'https://www.youtube.com/@tafadise',
    label: 'YouTube',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.499 6.203a3.004 3.004 0 0 0-2.116-2.124C19.561 3.5 12 3.5 12 3.5s-7.561 0-9.383.579A3.004 3.004 0 0 0 .5 6.203 31.62 31.62 0 0 0 0 12a31.62 31.62 0 0 0 .5 5.797 3.004 3.004 0 0 0 2.116 2.124C4.439 20.5 12 20.5 12 20.5s7.561 0 9.383-.579a3.004 3.004 0 0 0 2.116-2.124A31.62 31.62 0 0 0 24 12a31.62 31.62 0 0 0-.501-5.797zM9.75 15.5v-7l6 3.5-6 3.5z"/>
      </svg>
    ),
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/tafadise?igsh=MTgwNzVrN2JudGF4aw%3D%3D',
    label: 'Instagram',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: 'twitter',
    href: 'https://x.com/tafadise?s=21',
    label: 'Twitter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.98 3H18.7l-5.1 6.2L8.4 3H3.02l7.38 10.18L3.3 21h2.28l5.68-6.9 5.07 6.9h5.45l-7.76-10.56L20.98 3z" />
      </svg>
    ),
  },
]

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#000000] border-t border-white/10 text-white">
      <div className="mx-auto w-full max-w-7xl py-8 px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={logo} width={35} height={35} alt="logo" className="opacity-90" />
          </div>

       
        
        {/* Social icons */}
        <div className="flex items-center gap-4 text-white/80">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
              className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Download buttons */}
        <DownloadButton />
        </div>
        {/* Bottom links row */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center flex items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60 font-cairo">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              سياسة الخصوصية
            </Link>
            <span className="hidden sm:block text-white/30">|</span>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
