'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * 記事本文の直下要素を、スクロールでビューに入った順にふわっと表示する。
 * 初期非表示は globals.css の `html.js .article-content.reveal-on > *` で制御し、
 * ここで `.visible` を付けて出現させる（iOS Safari でも動くIntersectionObserver方式）。
 */
export default function ArticleScrollReveal() {
  // URLが変わるたび（クリック遷移）に再実行。これがないと遷移先で非表示のまま＝白化けする
  const pathname = usePathname()
  useEffect(() => {
    const root = document.querySelector('.article-content.reveal-on')
    if (!root) return
    const els = Array.from(root.children) as HTMLElement[]

    const revealAll = () => els.forEach((el) => el.classList.add('visible'))

    if (!('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      // 要素が下から少し入ったら発火。ページ全体でスクロールに追従させる
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    els.forEach((el) => obs.observe(el))

    // フォールバック：ページ全体がビューに収まる短いコンテンツで取りこぼした分だけ救済
    // （スクロール演出を殺さないよう一括表示はしない。ビューポート内に残っている未表示要素のみ）
    const rescueInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      els.forEach((el) => {
        if (el.classList.contains('visible')) return
        const r = el.getBoundingClientRect()
        if (r.top < vh && r.bottom > 0) el.classList.add('visible')
      })
    }
    window.addEventListener('load', rescueInView)
    // クリック遷移直後はloadが発火しないため、次フレームでビュー内要素を一度救済
    const raf = requestAnimationFrame(rescueInView)

    return () => {
      obs.disconnect()
      window.removeEventListener('load', rescueInView)
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  return null
}
