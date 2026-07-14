'use client'

import { useEffect } from 'react'

// ページ内アンカー(#x / 自ページへの/#x)のみスムーススクロールする。
// html{scroll-behavior:smooth}はNext.jsのページ遷移時スクロールリセットまで
// アニメーションさせ「トップへのページ内リンク」に見える誤挙動を起こすため使わない。
export function SmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href*="#"]') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href') || ''
      const m = href.match(/^(\/?[^#]*)#(.+)$/)
      if (!m) return
      const [, path, id] = m
      const samePage = path === '' || path === '#' || path === window.location.pathname || (path === '/' && window.location.pathname === '/')
      if (!samePage) return
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth' })
      history.pushState(null, '', `#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
