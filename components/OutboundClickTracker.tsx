'use client'

import { useEffect } from 'react'

// 送客リンク（felmat/hatmiso）のクリックを /api/click へビーコン送信する計測タグ。
// リンク自体は無改変（アフィリ計測に影響ゼロ）。sendBeacon非対応環境では何もしない。
// 収集するのは「広告プログラムID（akの先頭セグメント）＋ページパス」のみで、個人情報は扱わない。
export function OutboundClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = e.target as Element | null
      const a = el?.closest?.('a')
      if (!a) return
      const href = a.href || ''
      if (!/t\.(felmat|hatmiso)\.net/.test(href)) return
      try {
        const ak = new URL(href).searchParams.get('ak') || ''
        const vendor = ak.split('.')[0] || 'unknown'
        const body = JSON.stringify({ v: vendor, p: location.pathname })
        navigator.sendBeacon?.('/api/click', new Blob([body], { type: 'application/json' }))
      } catch {
        /* noop: 計測失敗でも遷移は妨げない */
      }
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])
  return null
}
