'use client'

import Link from 'next/link'
import React, { JSX, useEffect, useState } from 'react'
import logo from '../public/logo.png';
import Image from 'next/image';

type NavItemId = 'home' | 'features' | 'works' | 'dashboard' | 'contact' 
interface NavItem { id: NavItemId; name: string }

const navItems: NavItem[] = [
  { id: 'home', name: 'الرئيسية' },
  { id: 'features', name: 'المميزات' },
  { id: 'works', name: 'كيف يعمل تفادي ' },
  { id: 'dashboard', name: 'لوحة تحكم التجار' },
  { id: 'contact', name: 'تواصل معنا' },
]

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-4 left-0 right-0 z-[999]">
      {/* Outer container centered at 90% width */}
      <div className="mx-auto w-[94%] sm:w-[90%] lg:w-[86%] max-w-[1100px]">        {/* Glassmorphism bar */}
       <nav className={["rounded-full border border-white/10 px-4 sm:px-6","h-14 sm:h-16 flex items-center justify-between",
       "bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-xl",
       "shadow-[0_0_30px_rgba(255,255,255,0.05)]",
       isScrolled ? "border-white/30" : "border-white/20",].join(" ")}
       aria-label="Main navigation"
       >

          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Go to homepage">
            <div className="logo">
            <Image src={logo} width={30} height={30} alt='logo' />
          </div>

          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={
                  item.id === 'home'
                  ? '/'
                  : item.id === 'dashboard'
                  ? 'https://s.tafadi.sa/merchant/login'
                  : `/#${item.id}`
                 
                  }
                  className="text-white font-medium tracking-wide hover:opacity-80 transition-colors"
               >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-black"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile dropdown (glass too) */}
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
                  : `/#${item.id}`
                  }
                    className="block px-4 py-3 text-white font-medium tracking-wide hover:bg-white/[0.04]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}