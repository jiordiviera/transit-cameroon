'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxSectionProps {
  children: React.ReactNode
  bgImage: string
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, bgImage }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const bg = bgRef.current

    if (section && bg) {
      gsap.to(bg, {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <div ref={sectionRef} className="relative overflow-hidden py-24">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="relative z-10 container mx-auto px-4">
        {children}
      </div>
    </div>
  )
}

export default ParallaxSection

