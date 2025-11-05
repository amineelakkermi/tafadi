"use client"
import styles from '@/styles/style'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3'
  id?: string
  title: React.ReactNode
  text?: React.ReactNode
  containerClassName?: string
  titleClassName?: string
  textClassName?: string
  align?: 'start' | 'center' | 'end'
  layout?: 'stack' | 'inline'
  useDefaultParagraph?: boolean
}

export default function Heading({
  as = 'h2',
  id,
  title,
  text,
  containerClassName = '',
  titleClassName = '',
  textClassName = '',
  align = 'center',
  layout = 'stack',
  useDefaultParagraph = true,
}: HeadingProps) {
  const Tag = as

  const alignment = align === 'center' ? 'text-center' : align === 'end' ? 'text-right' : 'text-left'
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    let ctx: gsap.Context | null = null
    let mm: gsap.MatchMedia | null = null

    const initAnimation = () => {
      if ((gsap as any).plugins?.ScrollTrigger == null) {
        gsap.registerPlugin(ScrollTrigger)
      }

      ctx = gsap.context(() => {
        mm = gsap.matchMedia()
        mm.add('(prefers-reduced-motion: no-preference)', () => {
          const triggerEl = titleRef.current ?? textRef.current
          if (!triggerEl) return

          const tl = gsap.timeline({
            defaults: { ease: 'power3.out' },
            scrollTrigger: {
              trigger: triggerEl,
              start: 'top 85%',
              once: true,
            },
          })

          if (titleRef.current) {
            tl.from(titleRef.current, {
              y: 24,
              autoAlpha: 0,
              duration: 0.7,
              scale: 0.98,
              filter: 'blur(6px)',
              clearProps: 'filter,transform',
            })
          }

          if (textRef.current) {
            tl.from(textRef.current, {
              y: 16,
              autoAlpha: 0,
              duration: 0.6,
            }, '-=0.35')
          }
        })
      })
    }

    initAnimation()

    return () => {
      if (mm) mm.revert()
      if (ctx) ctx.revert()
    }
  }, [])

  if (layout === 'inline') {
    return (
      <>
        <Tag ref={titleRef} id={id} className={`${styles.title} ${titleClassName}`}>
          {title}
        </Tag>
        {text ? (
          <p ref={textRef} className={`${useDefaultParagraph ? styles.paragraph : ''} ${textClassName}`}>
            {text}
          </p>
        ) : null}
      </>
    )
  }

  return (
    <div className={`space-y-4 ${alignment} ${containerClassName}`}>
      <Tag ref={titleRef} id={id} className={`${styles.title} ${titleClassName}`}>
        {title}
      </Tag>
      {text ? (
        <p ref={textRef} className={`${useDefaultParagraph ? styles.paragraph : ''} ${textClassName}`}>
          {text}
        </p>
      ) : null}
    </div>
  )
}


