'use client'

import { useEffect } from 'react'

/**
 * 記事本文の直下要素を、スクロールでビューに入った順にふわっと表示する。
 * 初期非表示は globals.css の `html.js .article-content.reveal-on > *` で制御し、
 * ここで `.visible` を付けて出現させる（iOS Safari でも動くIntersectionObserver方式）。
 */
export default function ArticleScrollReveal() {
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
      { threshold: 0.06, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => obs.observe(el))

    // 保険：何らかの理由で発火しない場合も一定時間後に必ず表示
    const t = setTimeout(revealAll, 3000)
    return () => {
      obs.disconnect()
      clearTimeout(t)
    }
  }, [])

  return null
}
