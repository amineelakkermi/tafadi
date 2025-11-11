'use client'

import Link from 'next/link'
import React, { JSX, useEffect, useMemo, useState } from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'

type NavItemId = 'home' | 'features' | 'works' | 'dashboard' | 'contact' | 'faq'
interface NavItem {
  id: NavItemId
  name: string
}

function getNavItems(locale: 'ar' | 'en'): NavItem[] {
  if (locale === 'en') {
    return [
      { id: 'home', name: 'Home' },
      { id: 'works', name: 'How Tafadi works' },
      { id: 'features', name: 'Features' },
      { id: 'dashboard', name: 'Merchant Dashboard' },
      { id: 'faq', name: 'FAQ' },
    ]
  }
  return [
    { id: 'home', name: 'الرئيسية' },
    { id: 'works', name: 'كيف يعمل تفادي ' },
    { id: 'features', name: 'المميزات' },
    { id: 'dashboard', name: 'لوحة تحكم التجار' },
    { id: 'faq', name: 'الأسئلة الشائعة' },
  ]
}

export default function Navbar({ locale = 'ar' }: { locale?: 'ar' | 'en' }): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navItems = useMemo(() => getNavItems(locale), [locale])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLocale = () => {
    const next = locale === 'ar' ? 'en' : 'ar'
    document.cookie = `locale=${next}; path=/; max-age=${60 * 60 * 24 * 365}`
    window.location.reload()
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-[999]">
      <div className="mx-auto w-[94%] sm:w-[90%] lg:w-[86%] max-w-[1100px]">
        <nav
          className={[
            'rounded-full border border-white/10 px-4 sm:px-6',
            'h-14 sm:h-16 flex items-center justify-between',
            'bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-xl',
            'shadow-[0_0_30px_rgba(255,255,255,0.05)]',
            'relative',
            isScrolled ? 'border-white/30' : 'border-white/20',
          ].join(' ')}
          aria-label="Main navigation"
        >
        <Link
            href={'https://s.tafadi.sa/merchant/login'}
            className={`${locale === "ar" ? "text-[16px]" : "text-[13px]"} md:hidden  text-white font-medium tracking-wide hover:opacity-80 transition-colors`}
          >
           {
            locale === 'ar' ? 'لوحة تحكم التجار' : 'Merchant Dashboard'
           }
        </Link>
          
          {/* === Bouton mobile à gauche === */}
          <div className="flex md:hidden items-center order-1">
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>

          {/* === Logo (exact center on mobile, right on md+) === */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 inset-y-0 flex items-center justify-center md:static md:translate-x-0 md:flex-1 md:justify-start"
            aria-label="Go to homepage"
          >
            <div
              className={`transition-opacity duration-500 ${
                isScrolled ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image src={logo} width={30} height={30} alt="logo" />
            </div>
          </Link>

         

          {/* === Menu desktop === */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={
                    item.id === 'home'
                      ? '/'
                      : item.id === 'dashboard'
                      ? 'https://s.tafadi.sa/merchant/login'
                      : item.id === 'faq'
                      ? '/faq'
                      : `/#${item.id}`
                  }
                  className="text-white font-medium tracking-wide hover:opacity-80 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleLocale}
                className="px-3 py-1 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Toggle language"
              >
                {locale === 'ar' ? 'EN' : 'AR'}
              </button>
            </li>
          </ul>

       
        </nav>

        {/* === Menu mobile déroulant === */}
        {isOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-black/10 bg-[#0b0615]/60 backdrop-blur-xl shadow-sm">
            <ul className="flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={
                      item.id === 'home'
                        ? '/'
                        : item.id === 'dashboard'
                        ? 'https://s.tafadi.sa/merchant/login'
                        : item.id === 'faq'
                        ? '/faq'
                        : `/#${item.id}`
                    }
                    className={`block px-4 py-3 text-white font-medium tracking-wide hover:bg-white/[0.04] ${item.id === 'dashboard' ? (locale === 'ar' ? 'text-right' : 'text-left') : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    toggleLocale()
                    setIsOpen(false)
                  }}
                  className={`w-full ${locale === 'ar' ? 'text-right' : 'text-left'} block px-4 py-3 text-white font-medium tracking-wide hover:bg-white/[0.04]`}
                  aria-label="Toggle language"
                >
                  {locale === 'ar' ? 'English' : 'العربية'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
