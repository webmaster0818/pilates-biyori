'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export function Navigation() {
  useEffect(() => {
    const navbar = document.getElementById('navbar')
    
    const handleScroll = () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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

  return (
    <>
      <nav className="navbar fixed top-0 w-full z-50 bg-transparent transition-all duration-400" id="navbar" aria-label="メインナビゲーション">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="group">
              <span className="font-serif text-2xl font-light tracking-wider text-warm-800 group-hover:text-warm-600 transition-colors">Pilates Navi</span>
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <a href="/#articles" className="nav-link text-warm-500 hover:text-warm-800 text-xs font-medium uppercase tracking-[0.15em]">Articles</a>
              <a href="/#categories" className="nav-link text-warm-500 hover:text-warm-800 text-xs font-medium uppercase tracking-[0.15em]">Categories</a>
              <a href="/#studios" className="nav-link text-warm-500 hover:text-warm-800 text-xs font-medium uppercase tracking-[0.15em]">Studios</a>
              <a href="/#faq" className="nav-link text-warm-500 hover:text-warm-800 text-xs font-medium uppercase tracking-[0.15em]">FAQ</a>
              <a href="/#about" className="nav-link text-warm-500 hover:text-warm-800 text-xs font-medium uppercase tracking-[0.15em]">About</a>
              <a href="/#studios" className="border border-warm-800 text-warm-800 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-800 hover:text-white transition-all">体験予約</a>
            </div>
            <button className="md:hidden p-2" onClick={toggleMenu} aria-label="メニューを開く" id="menuBtn" aria-expanded="false">
              <svg className="w-5 h-5 text-warm-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="mobile-overlay fixed inset-0 bg-black/40 z-[60] opacity-0 pointer-events-none transition-opacity duration-300" id="mobileOverlay" onClick={toggleMenu}></div>
      <div className="mobile-menu fixed top-0 right-0 w-80 h-full bg-warm-50 z-[70] transform translate-x-full transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" id="mobileMenu">
        <div className="p-8">
          <div className="flex justify-between items-center mb-16">
            <span className="font-serif text-xl font-light tracking-wider text-warm-800">Menu</span>
            <button onClick={toggleMenu} aria-label="メニューを閉じる" className="p-2 hover:bg-warm-100 rounded-full transition">
              <svg className="w-5 h-5 text-warm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <a href="/#articles" className="text-warm-600 text-sm tracking-[0.2em] uppercase hover:text-warm-900 transition" onClick={toggleMenu}>Articles</a>
            <a href="/#categories" className="text-warm-600 text-sm tracking-[0.2em] uppercase hover:text-warm-900 transition" onClick={toggleMenu}>Categories</a>
            <a href="/#studios" className="text-warm-600 text-sm tracking-[0.2em] uppercase hover:text-warm-900 transition" onClick={toggleMenu}>Studios</a>
            <a href="/#faq" className="text-warm-600 text-sm tracking-[0.2em] uppercase hover:text-warm-900 transition" onClick={toggleMenu}>FAQ</a>
            <a href="/#about" className="text-warm-600 text-sm tracking-[0.2em] uppercase hover:text-warm-900 transition" onClick={toggleMenu}>About</a>
            <div className="divider mt-4"></div>
            <a href="/#studios" className="border border-warm-800 text-warm-800 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-center hover:bg-warm-800 hover:text-white transition-all" onClick={toggleMenu}>体験予約はこちら</a>
          </div>
        </div>
      </div>
    </>
  )
}
