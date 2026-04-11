'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Script from "next/script"
import { AreaSearch } from "@/components/AreaSearch"

export default function Home() {
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
        fadeEls.forEach((el) => el.classList.add('visible'))
      }, 2500)
    } else {
      fadeEls.forEach((el) => el.classList.add('visible'))
    }

    // Initialize Lucide icons
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons()
    }
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

  const toggleFaq = (btn: HTMLElement) => {
    const c = btn.nextElementSibling as HTMLElement
    const a = btn.querySelector('svg')
    const isOpen = c.style.maxHeight && c.style.maxHeight !== '0px'
    c.style.maxHeight = isOpen ? '0px' : `${c.scrollHeight}px`
    if (a) {
      a.style.transform = isOpen ? '' : 'rotate(180deg)'
    }
  }

  return (
    <>
      <div id="scrollProgress" className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-warm-400 to-warm-500 z-[9999] w-0 transition-[width]"></div>

      {/* Navbar */}
      <nav className="navbar fixed top-0 w-full z-50 bg-transparent transition-all duration-400" id="navbar" aria-label="メインナビゲーション">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="group">
              <span className="font-serif text-2xl font-light tracking-wider text-warm-800 group-hover:text-warm-600 transition-colors">Pilates-Biyori</span>
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <a href="#articles" className="nav-link text-warm-500 hover:text-warm-800 text-xs font-medium uppercase tracking-[0.15em]">Articles</a>
              <a href="#categories" className="nav-link text-warm-500 hover:text-warm-800 text-xs font-medium uppercase tracking-[0.15em]">Categories</a>
              <a href="#studios" className="nav-link text-warm-500 hover:text-warm-800 text-xs font-medium uppercase tracking-[0.15em]">Studios</a>
              <a href="#faq" className="nav-link text-warm-500 hover:text-warm-800 text-xs font-medium uppercase tracking-[0.15em]">FAQ</a>
              <a href="#about" className="nav-link text-warm-500 hover:text-warm-800 text-xs font-medium uppercase tracking-[0.15em]">About</a>
              <a href="#studios" className="border border-warm-800 text-warm-800 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-800 hover:text-white transition-all">体験予約</a>
            </div>
            <button className="md:hidden p-2" onClick={toggleMenu} aria-label="メニューを開く" id="menuBtn" aria-expanded="false">
              <svg className="w-5 h-5 text-warm-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
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
            <a href="#articles" className="text-warm-600 text-sm tracking-[0.2em] uppercase hover:text-warm-900 transition" onClick={toggleMenu}>Articles</a>
            <a href="#categories" className="text-warm-600 text-sm tracking-[0.2em] uppercase hover:text-warm-900 transition" onClick={toggleMenu}>Categories</a>
            <a href="#studios" className="text-warm-600 text-sm tracking-[0.2em] uppercase hover:text-warm-900 transition" onClick={toggleMenu}>Studios</a>
            <a href="#faq" className="text-warm-600 text-sm tracking-[0.2em] uppercase hover:text-warm-900 transition" onClick={toggleMenu}>FAQ</a>
            <a href="#about" className="text-warm-600 text-sm tracking-[0.2em] uppercase hover:text-warm-900 transition" onClick={toggleMenu}>About</a>
            <div className="divider mt-4"></div>
            <a href="#studios" className="border border-warm-800 text-warm-800 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-center hover:bg-warm-800 hover:text-white transition-all" onClick={toggleMenu}>体験予約はこちら</a>
          </div>
        </div>
      </div>

      <main id="main" role="main">
        {/* Hero */}
        <section className="relative min-h-[90vh] md:min-h-screen flex items-end pb-16 md:pb-24" id="top">
          <div className="absolute inset-0 hero-img">
            <img src="/images/hero.webp" alt="ピラティスをする女性" className="w-full h-full img-cover" width="1200" height="800" loading="eager" fetchPriority="high" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <p className="section-en text-warm-400 mb-4 font-medium">Find your ideal pilates</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-warm-900 leading-[1.2] mb-6 tracking-tight">
                あなたに最適な<br/>ピラティスが見つかる
              </h1>
              <p className="text-warm-500 text-sm md:text-base leading-relaxed mb-10 font-light max-w-md">
                初心者から経験者まで。基礎知識からスタジオ選びまで、<br className="hidden md:block"/>あなたのピラティスライフを徹底サポートします。
              </p>
            </div>
          </div>
        </section>

        {/* Area Search */}
        <AreaSearch />

        {/* Featured Articles */}
        <section className="py-20 md:py-28 bg-warm-50" id="articles">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14 fade-up">
              <p className="section-en text-warm-400 mb-3 font-medium">All Articles</p>
              <h2 className="text-2xl md:text-3xl font-light text-warm-900 tracking-tight">全記事一覧</h2>
              <div className="divider mx-auto mt-4"></div>
            </div>

            {/* 基礎知識 */}
            <div className="mb-16">
              <h3 className="text-xl font-medium text-warm-800 mb-6 pb-3 border-b border-warm-200">基礎知識</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/articles/pilates-yoga-difference" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-yoga-difference.webp" alt="ピラティスとヨガの違いを比較するイメージ" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">基礎知識</span>
                        <time dateTime="2026-03-28" className="text-warm-300 text-xs">2026.3.28</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティスとヨガの違いは？初心者向けに5つのポイントで徹底解説
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/mat-machine-difference" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/mat-machine-difference.webp" alt="マットピラティスとマシンピラティスの比較" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">基礎知識</span>
                        <time dateTime="2026-03-28" className="text-warm-300 text-xs">2026.3.28</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        マットピラティスとマシンピラティスの違いとは？
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/machine-pilates-beginner" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/machine-pilates-beginner.webp" alt="マシンピラティス初心者向けレッスン" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">基礎知識</span>
                        <time dateTime="2026-03-30" className="text-warm-300 text-xs">2026.3.30</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        マシンピラティス初心者におすすめの始め方
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/pilates-frequency" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-frequency.webp" alt="ピラティスの頻度・通うペース" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">基礎知識</span>
                        <time dateTime="2026-03-30" className="text-warm-300 text-xs">2026.3.30</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティスは週何回が最適？目的別の頻度を徹底解説
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/pilates-beginner-home" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-beginner-home.webp" alt="自宅でできるピラティス初心者向け" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">基礎知識</span>
                        <time dateTime="2026-03-28" className="text-warm-300 text-xs">2026.3.28</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティス初心者が自宅で始める方法
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* 効果・メリット */}
            <div className="mb-16">
              <h3 className="text-xl font-medium text-warm-800 mb-6 pb-3 border-b border-warm-200">効果・メリット</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/articles/pilates-effect-when" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-effect-when.webp" alt="ピラティスの効果が出るまでの期間" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">効果</span>
                        <time dateTime="2026-03-28" className="text-warm-300 text-xs">2026.3.28</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティスの効果はいつから出る？週1回でも身体が変わる期間の目安
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/pilates-daily-effect" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-daily-effect.webp" alt="毎日のピラティスで得られる効果" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">効果</span>
                        <time dateTime="2026-03-28" className="text-warm-300 text-xs">2026.3.28</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティスを毎日やる効果は？最適な頻度を解説
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/pilates-diet-effect" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-diet-effect.webp" alt="ピラティスのダイエット効果" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">効果</span>
                        <time dateTime="2026-03-30" className="text-warm-300 text-xs">2026.3.30</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティスダイエットの効果を徹底解説【3ヶ月で-5kg】
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/pilates-posture-effect" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-posture-effect.webp" alt="ピラティスによる姿勢改善効果" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">効果</span>
                        <time dateTime="2026-03-30" className="text-warm-300 text-xs">2026.3.30</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティスの姿勢改善効果【猫背・反り腰を2週間で改善】
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/pilates-back-pain" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-back-pain.webp" alt="ピラティスで腰痛改善" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">効果</span>
                        <time dateTime="2026-03-30" className="text-warm-300 text-xs">2026.3.30</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティスで腰痛改善【効果的なエクササイズを解説】
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/pilates-shoulder-pain" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-shoulder-pain.webp" alt="ピラティスで肩こり改善" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">効果</span>
                        <time dateTime="2026-03-30" className="text-warm-300 text-xs">2026.3.30</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティスで肩こり改善【効果的なエクササイズを解説】
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* スタジオ選び */}
            <div className="mb-16">
              <h3 className="text-xl font-medium text-warm-800 mb-6 pb-3 border-b border-warm-200">スタジオ選び</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/articles/pilates-beginner-studio" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-beginner-studio.webp" alt="初心者向けピラティススタジオ" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">スタジオ</span>
                        <time dateTime="2026-03-30" className="text-warm-300 text-xs">2026.3.30</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティス初心者におすすめのスタジオ選び
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/pilates-price" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-price.webp" alt="ピラティスの料金相場" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">スタジオ</span>
                        <time dateTime="2026-03-30" className="text-warm-300 text-xs">2026.3.30</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティスの料金相場を徹底比較【2026年最新】
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/pilates-trial-lesson" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-trial-lesson.webp" alt="ピラティス体験レッスン" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">スタジオ</span>
                        <time dateTime="2026-03-30" className="text-warm-300 text-xs">2026.3.30</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        ピラティス体験レッスン完全ガイド【おすすめスタジオ】
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link href="/articles/pilates-online" className="group fade-up">
                  <div className="card-hover bg-white overflow-hidden border border-warm-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src="/images/articles/pilates-online.webp" alt="オンラインピラティスレッスン" className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">スタジオ</span>
                        <time dateTime="2026-03-30" className="text-warm-300 text-xs">2026.3.30</time>
                      </div>
                      <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                        オンラインピラティスおすすめ8選【料金・効果を徹底比較】
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 md:py-28 bg-white" id="categories">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14 fade-up">
              <p className="section-en text-warm-400 mb-3 font-medium">Categories</p>
              <h2 className="text-2xl md:text-3xl font-light text-warm-900 tracking-tight">カテゴリから探す</h2>
              <div className="divider mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 fade-up">
              <Link href="/basics" className="group">
                <div className="border border-warm-200 p-6 sm:p-8 text-center hover:border-warm-400 transition-colors card-hover bg-warm-50">
                  <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center">
                    <i data-lucide="book-open" className="w-6 h-6 text-warm-400 group-hover:text-warm-600 transition-colors"></i>
                  </div>
                  <h3 className="text-sm font-medium text-warm-800 mb-2 group-hover:text-warm-600 transition-colors">基礎知識</h3>
                  <p className="text-warm-400 text-xs font-light">ピラティスの基本を学ぶ</p>
                </div>
              </Link>
              <Link href="/benefits" className="group">
                <div className="border border-warm-200 p-8 text-center hover:border-warm-400 transition-colors card-hover bg-warm-50">
                  <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center">
                    <i data-lucide="heart" className="w-6 h-6 text-warm-400 group-hover:text-warm-600 transition-colors"></i>
                  </div>
                  <h3 className="text-sm font-medium text-warm-800 mb-2 group-hover:text-warm-600 transition-colors">効果・メリット</h3>
                  <p className="text-warm-400 text-xs font-light">期待できる効果を知る</p>
                </div>
              </Link>
              <Link href="/studios" className="group">
                <div className="border border-warm-200 p-8 text-center hover:border-warm-400 transition-colors card-hover bg-warm-50">
                  <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center">
                    <i data-lucide="building-2" className="w-6 h-6 text-warm-400 group-hover:text-warm-600 transition-colors"></i>
                  </div>
                  <h3 className="text-sm font-medium text-warm-800 mb-2 group-hover:text-warm-600 transition-colors">スタジオ選び</h3>
                  <p className="text-warm-400 text-xs font-light">最適なスタジオを比較</p>
                </div>
              </Link>
              <Link href="/area" className="group">
                <div className="border border-warm-200 p-8 text-center hover:border-warm-400 transition-colors card-hover bg-warm-50">
                  <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center">
                    <i data-lucide="map-pin" className="w-6 h-6 text-warm-400 group-hover:text-warm-600 transition-colors"></i>
                  </div>
                  <h3 className="text-sm font-medium text-warm-800 mb-2 group-hover:text-warm-600 transition-colors">地域別</h3>
                  <p className="text-warm-400 text-xs font-light">お近くのスタジオを探す</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Studios */}
        <section className="py-20 md:py-28 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14 fade-up">
              <p className="section-en text-warm-400 mb-3">POPULAR STUDIOS</p>
              <h2 className="text-2xl md:text-3xl font-light text-warm-900 tracking-tight">人気ピラティススタジオ</h2>
              <div className="divider mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up">
              {/* Studio 1: zen place pilates */}
              <article className="bg-white card-hover border border-warm-100 overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-warm-50">
                  <img
                    src="/images/studios/zen-place-pilates.webp"
                    alt="zen place pilates 公式サイト"
                    className="w-full h-full object-contain"
                    width="800"
                    height="500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="section-en text-warm-300 mb-2">01</p>
                      <h3 className="text-xl font-medium text-warm-900 tracking-tight">zen place pilates</h3>
                    </div>
                    <span className="text-warm-300 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">全国展開</span>
                  </div>
                  <p className="text-warm-500 text-sm leading-relaxed font-light mb-6">
                    全国最大手、100店舗以上を展開。マットからマシンまで、初心者からインストラクター養成まで幅広いプログラム。
                  </p>
                  <dl className="grid grid-cols-3 gap-2 mb-6 border-t border-warm-100 pt-5">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">店舗数</dt>
                      <dd className="text-sm font-medium text-warm-700">100店舗+</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">対象</dt>
                      <dd className="text-sm font-medium text-warm-700">男女OK</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">特徴</dt>
                      <dd className="text-sm font-medium text-warm-700">業界最大手</dd>
                    </div>
                  </dl>
                  <a href="https://www.zenplace.co.jp/pilates/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-600 text-xs uppercase tracking-[0.15em] font-medium hover:text-warm-900 transition group">
                    zen place pilates公式サイト
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Studio 2: ピラティスK */}
              <article className="bg-white card-hover border border-warm-100 overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-warm-50">
                  <img
                    src="/images/studios/pilates-k.webp"
                    alt="ピラティスK 公式サイト"
                    className="w-full h-full object-contain"
                    width="800"
                    height="500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="section-en text-warm-300 mb-2">02</p>
                      <h3 className="text-xl font-medium text-warm-900 tracking-tight">ピラティスK</h3>
                    </div>
                    <span className="text-warm-300 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">女性専用</span>
                  </div>
                  <p className="text-warm-500 text-sm leading-relaxed font-light mb-6">
                    女性専用マシンピラティススタジオ。ボディメイクに特化した17種のプログラムで、理想の体型を目指す。体験¥0。
                  </p>
                  <dl className="grid grid-cols-3 gap-2 mb-6 border-t border-warm-100 pt-5">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">展開</dt>
                      <dd className="text-sm font-medium text-warm-700">全国120店舗+</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">対象</dt>
                      <dd className="text-sm font-medium text-warm-700">女性専用</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">体験</dt>
                      <dd className="text-sm font-medium text-warm-700">¥0キャンペーン</dd>
                    </div>
                  </dl>
                  <a href="https://pilates-k.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-600 text-xs uppercase tracking-[0.15em] font-medium hover:text-warm-900 transition group">
                    ピラティスK公式サイト
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Studio 3: CLUB PILATES */}
              <article className="bg-white card-hover border border-warm-100 overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-warm-50">
                  <img
                    src="/images/studios/club-pilates.webp"
                    alt="CLUB PILATES 公式サイト"
                    className="w-full h-full object-contain"
                    width="800"
                    height="500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="section-en text-warm-300 mb-2">03</p>
                      <h3 className="text-xl font-medium text-warm-900 tracking-tight">CLUB PILATES</h3>
                    </div>
                    <span className="text-warm-300 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">世界最大級</span>
                  </div>
                  <p className="text-warm-500 text-sm leading-relaxed font-light mb-6">
                    世界最大級、800店舗以上展開のピラティスブランド。グループリフォーマーからプライベートまで多彩なクラス。
                  </p>
                  <dl className="grid grid-cols-3 gap-2 mb-6 border-t border-warm-100 pt-5">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">展開</dt>
                      <dd className="text-sm font-medium text-warm-700">世界800店舗+</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">対象</dt>
                      <dd className="text-sm font-medium text-warm-700">男女OK</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">特徴</dt>
                      <dd className="text-sm font-medium text-warm-700">世界最大級</dd>
                    </div>
                  </dl>
                  <a href="https://clubpilates.co.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-600 text-xs uppercase tracking-[0.15em] font-medium hover:text-warm-900 transition group">
                    CLUB PILATES公式サイト
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Studio 4: the SILK */}
              <article className="bg-white card-hover border border-warm-100 overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-warm-50">
                  <img
                    src="/images/studios/the-silk.webp"
                    alt="the SILK 公式サイト"
                    className="w-full h-full object-contain"
                    width="800"
                    height="500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="section-en text-warm-300 mb-2">04</p>
                      <h3 className="text-xl font-medium text-warm-900 tracking-tight">the SILK</h3>
                    </div>
                    <span className="text-warm-300 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">女性専用</span>
                  </div>
                  <p className="text-warm-500 text-sm leading-relaxed font-light mb-6">
                    女性専用、美ボディメイクに特化したマシンピラティス。洗練された空間で、しなやかな身体づくりを。
                  </p>
                  <dl className="grid grid-cols-3 gap-2 mb-6 border-t border-warm-100 pt-5">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">特徴</dt>
                      <dd className="text-sm font-medium text-warm-700">マシンピラティス</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">対象</dt>
                      <dd className="text-sm font-medium text-warm-700">女性専用</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.15em] text-warm-300 mb-1">特徴</dt>
                      <dd className="text-sm font-medium text-warm-700">美ボディメイク</dd>
                    </div>
                  </dl>
                  <a href="https://the-silk.co.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-warm-600 text-xs uppercase tracking-[0.15em] font-medium hover:text-warm-900 transition group">
                    the SILK公式サイト
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
              </article>
            </div>

            <div className="text-center mt-12 fade-up">
              <a href="/area/" className="inline-block border border-warm-800 text-warm-800 px-10 py-3.5 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-800 hover:text-white transition-all btn-minimal">
                エリアからスタジオを探す
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-24 md:py-32 bg-warm-800 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-warm-700 to-warm-900"></div>
          <div className="relative max-w-3xl mx-auto px-6 text-center fade-up">
            <p className="section-en text-warm-400 mb-4 font-medium">Start Your Journey</p>
            <h2 className="text-2xl md:text-4xl font-light text-white leading-relaxed tracking-tight mb-6">
              あなたのピラティスライフを<br/>ここから始めましょう
            </h2>
            <p className="text-warm-400 text-sm font-light mb-10 max-w-md mx-auto leading-relaxed">
              まずは体験レッスンから。自分に合ったスタジオを見つけて、新しい自分に出会いませんか。
            </p>
            <a href="#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-100 transition-all btn-minimal">
              スタジオを比較する
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-white" id="faq">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14 fade-up">
              <p className="section-en text-warm-400 mb-3 font-medium">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-light text-warm-900 tracking-tight">よくある質問</h2>
              <div className="divider mx-auto mt-4"></div>
            </div>
            <div className="space-y-4 fade-up">
              <div className="border-b border-warm-200">
                <button className="w-full flex items-center justify-between py-6 text-left" onClick={(e) => toggleFaq(e.currentTarget)}>
                  <span className="text-sm font-medium text-warm-800 pr-4">ピラティスとヨガの違いは何ですか？</span>
                  <svg className="w-4 h-4 text-warm-400 flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div className="faq-content max-h-0 overflow-hidden transition-all duration-400">
                  <p className="pb-6 text-warm-500 text-sm leading-relaxed font-light">
                    ピラティスは体幹強化やインナーマッスルに焦点を当て、マシンを使ったエクササイズも特徴です。ヨガは柔軟性や呼吸法、瞑想を重視します。運動強度を上げたい方はピラティス、リラックス重視ならヨガがおすすめです。
                  </p>
                </div>
              </div>
              <div className="border-b border-warm-200">
                <button className="w-full flex items-center justify-between py-6 text-left" onClick={(e) => toggleFaq(e.currentTarget)}>
                  <span className="text-sm font-medium text-warm-800 pr-4">マットとマシン、初心者にはどちらがおすすめ？</span>
                  <svg className="w-4 h-4 text-warm-400 flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div className="faq-content max-h-0 overflow-hidden transition-all duration-400">
                  <p className="pb-6 text-warm-500 text-sm leading-relaxed font-light">
                    初心者にはマシンピラティスがおすすめです。リフォーマーなどのマシンが動きをサポートしてくれるため、正しいフォームを習得しやすく、ケガのリスクも低くなります。
                  </p>
                </div>
              </div>
              <div className="border-b border-warm-200">
                <button className="w-full flex items-center justify-between py-6 text-left" onClick={(e) => toggleFaq(e.currentTarget)}>
                  <span className="text-sm font-medium text-warm-800 pr-4">ピラティスの効果はいつから実感できますか？</span>
                  <svg className="w-4 h-4 text-warm-400 flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div className="faq-content max-h-0 overflow-hidden transition-all duration-400">
                  <p className="pb-6 text-warm-500 text-sm leading-relaxed font-light">
                    個人差はありますが、週1〜2回の受講で2〜3ヶ月後から姿勢改善や体幹強化の効果を実感する方が多いです。ジョセフ・ピラティス氏は「10回で違いを感じ、20回で見た目が変わり、30回で全く新しい身体になる」と述べています。
                  </p>
                </div>
              </div>
              <div className="border-b border-warm-200">
                <button className="w-full flex items-center justify-between py-6 text-left" onClick={(e) => toggleFaq(e.currentTarget)}>
                  <span className="text-sm font-medium text-warm-800 pr-4">体験レッスンの持ち物は何が必要ですか？</span>
                  <svg className="w-4 h-4 text-warm-400 flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div className="faq-content max-h-0 overflow-hidden transition-all duration-400">
                  <p className="pb-6 text-warm-500 text-sm leading-relaxed font-light">
                    動きやすいウェア（Tシャツ・レギンスなど）、タオル、水分をお持ちください。靴は不要です（靴下またはグリップソックス推奨）。多くのスタジオでウェアレンタルも可能です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-warm-50" id="about">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 fade-up">
            <div className="text-center mb-12">
              <p className="section-en text-warm-400 mb-3 font-medium">About Us</p>
              <h2 className="text-2xl font-light text-warm-900 tracking-tight">Pilates-Biyoriについて</h2>
              <div className="divider mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-warm-200 rounded-full">
                  <i data-lucide="search" className="w-5 h-5 text-warm-400"></i>
                </div>
                <h3 className="text-sm font-medium text-warm-800 mb-2">中立な比較</h3>
                <p className="text-warm-400 text-xs leading-relaxed font-light">
                  特定のスタジオに偏らない、客観的な情報を提供しています。
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-warm-200 rounded-full">
                  <i data-lucide="refresh-cw" className="w-5 h-5 text-warm-400"></i>
                </div>
                <h3 className="text-sm font-medium text-warm-800 mb-2">最新情報</h3>
                <p className="text-warm-400 text-xs leading-relaxed font-light">
                  料金やキャンペーン情報を定期的に更新しています。
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-warm-200 rounded-full">
                  <i data-lucide="message-circle" className="w-5 h-5 text-warm-400"></i>
                </div>
                <h3 className="text-sm font-medium text-warm-800 mb-2">実体験ベース</h3>
                <p className="text-warm-400 text-xs leading-relaxed font-light">
                  実際の体験者の声をもとにした、リアルな情報をお届けします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <button 
          id="backToTop" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
          aria-label="ページの先頭へ" 
          className="fixed bottom-6 right-6 w-10 h-10 bg-warm-800/80 backdrop-blur text-white rounded-full flex items-center justify-center opacity-0 pointer-events-none transition-all hover:bg-warm-900 z-40"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 15l7-7 7 7"/>
          </svg>
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-warm-900 text-warm-400">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <span className="font-serif text-xl font-light text-white tracking-wider">Pilates-Biyori</span>
              <p className="text-warm-500 text-xs mt-4 leading-relaxed font-light">
                初心者から経験者まで、あなたに最適なピラティスが見つかるメディア
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-warm-300 mb-5">Categories</h4>
              <ul className="space-y-3 text-xs">
                <li><Link href="/basics" className="text-warm-500 hover:text-white transition font-light">基礎知識</Link></li>
                <li><Link href="/benefits" className="text-warm-500 hover:text-white transition font-light">効果・メリット</Link></li>
                <li><Link href="/studios" className="text-warm-500 hover:text-white transition font-light">スタジオ選び</Link></li>
                <li><Link href="/area" className="text-warm-500 hover:text-white transition font-light">地域別</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-warm-300 mb-5">Information</h4>
              <ul className="space-y-3 text-xs">
                <li><a href="#" className="text-warm-500 hover:text-white transition font-light">運営者情報</a></li>
                <li><Link href="/privacy-policy" className="text-warm-500 hover:text-white transition font-light">プライバシーポリシー</Link></li>
                <li><Link href="/terms-of-service" className="text-warm-500 hover:text-white transition font-light">利用規約</Link></li>
                <li><Link href="/content-policy" className="text-warm-500 hover:text-white transition font-light">記事制作ポリシー</Link></li>
                <li><a href="#" className="text-warm-500 hover:text-white transition font-light">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-warm-300 mb-5">Popular</h4>
              <ul className="space-y-3 text-xs">
                <li><Link href="/articles/pilates-yoga-difference" className="text-warm-500 hover:text-white transition font-light">ピラティスとヨガの違い</Link></li>
                <li><Link href="/articles/mat-machine-difference" className="text-warm-500 hover:text-white transition font-light">マットとマシンの違い</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-warm-800 mt-12 pt-8 text-center">
            <p className="text-warm-600 text-xs font-light">&copy; 2026 Pilates-Biyori. All rights reserved.</p>
            <p className="text-warm-700 text-[10px] font-light mt-2">
              ※掲載情報は2026年3月31日時点のものです。最新情報は各公式サイトでご確認ください。
            </p>
          </div>
        </div>
      </footer>

      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
