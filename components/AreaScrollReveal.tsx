'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * エリアページのセクションを、スクロールで画面に入った順にふわっと表示する。
 * 初期非表示は globals.css の `html.js .area-reveal main section > div > *` 等で制御し、
 * ここで `.visible` を付けて出現させる（iOS Safari でも動くIntersectionObserver方式）。
 */
export default function AreaScrollReveal() {
  // URLが変わるたび（クリック遷移）に再実行。これがないと遷移先で非表示のまま＝白化けする
  const pathname = usePathname()
  useEffect(() => {
    // セクション単位だと、スタジオ一覧や料金表など「中身の長いセクション」は
    // 箱ごと一度に表示され途中から演出が止まって見える。
    // → セクション内の各ブロック＋スタジオカードを個別に対象にして、最後まで順次フェードインさせる
    const sections = Array.from(
      document.querySelectorAll(
        '.area-reveal main section > div > *, .area-reveal main .space-y-8 > *',
      ),
    ) as HTMLElement[]
    if (sections.length === 0) return

    const reveal = (el: Element) => el.classList.add('visible')

    if (!('IntersectionObserver' in window)) {
      sections.forEach(reveal)
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
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    sections.forEach((s) => obs.observe(s))

    // クリック遷移直後にビュー内の要素を確実に表示（取りこぼし防止）
    const raf = requestAnimationFrame(() => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      sections.forEach((el) => {
        if (el.classList.contains('visible')) return
        const r = el.getBoundingClientRect()
        if (r.top < vh && r.bottom > 0) el.classList.add('visible')
      })
    })

    return () => {
      obs.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  return null
}
