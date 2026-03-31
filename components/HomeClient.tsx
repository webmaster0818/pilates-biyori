'use client'

import { useEffect } from 'react'

export function HomeClient() {
  useEffect(() => {
    // Scroll progress
    const scrollProgress = document.getElementById('scrollProgress')
    const navbar = document.getElementById('navbar')
    const backToTop = document.getElementById('backToTop')
    
    const handleScroll = () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50)
      }
      if (backToTop) {
        const show = window.scrollY > 600
        backToTop.style.opacity = show ? '1' : '0'
        backToTop.style.pointerEvents = show ? 'auto' : 'none'
      }
      if (scrollProgress) {
        const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        scrollProgress.style.width = `${progress}%`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Fade-up animation
    const fadeEls = document.querySelectorAll('.fade-up')
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px 80px 0px' }
      )
      fadeEls.forEach((el) => obs.observe(el))
      
      setTimeout(() => {
        fadeEls.forEach((el) => {
          if (!el.classList.contains('visible')) {
            el.classList.add('visible')
          }
        })
      }, 3000)
      
      return () => obs.disconnect()
    } else {
      fadeEls.forEach((el) => el.classList.add('visible'))
    }
  }, [])

  useEffect(() => {
    // Initialize Lucide icons
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons()
    }
  }, [])

  useEffect(() => {
    // FAQ toggle
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach((item) => {
      const btn = item.querySelector('.faq-btn')
      const content = item.querySelector('.faq-content')
      if (btn && content) {
        btn.addEventListener('click', () => {
          const isOpen = item.classList.contains('open')
          faqItems.forEach((i) => {
            i.classList.remove('open')
            const ic = i.querySelector('.faq-content') as HTMLElement
            if (ic) ic.style.maxHeight = '0px'
          })
          if (!isOpen) {
            item.classList.add('open')
            ;(content as HTMLElement).style.maxHeight = content.scrollHeight + 'px'
          }
        })
      }
    })
  }, [])

  const toggleMenu = () => {
    const m = document.getElementById('mobileMenu')
    const o = document.getElementById('mobileOverlay')
    const b = document.getElementById('menuBtn')
    if (m && o) {
      m.classList.toggle('open')
      o.classList.toggle('open')
      const isOpen = m.classList.contains('open')
      if (b) {
        b.setAttribute('aria-expanded', String(isOpen))
        b.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く')
      }
      document.body.style.overflow = isOpen ? 'hidden' : ''
    }
  }

  return null
}
