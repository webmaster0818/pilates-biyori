'use client'

import { useState } from 'react'
import Link from 'next/link'
import { prefectureAreas } from '@/data/prefectureAreas'

export function AreaSearch() {
  const [openPref, setOpenPref] = useState<string | null>(null)

  const toggle = (pref: string) => {
    setOpenPref(openPref === pref ? null : pref)
  }

  return (
    <section className="py-16 md:py-20 bg-warm-50 border-y border-warm-100" id="area-search">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-warm-400 mb-3">
            Search by Area
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-warm-900 tracking-tight mb-4">
            エリアから探す
          </h2>
          <p className="text-warm-600 text-sm font-light">
            お住まいの都道府県を選んで、エリア別のピラティススタジオ情報をご覧ください
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 fade-up" style={{ transitionDelay: '0.1s' }}>
          {prefectureAreas.map((pref) => (
            <div
              key={pref.prefecture}
              className="border border-warm-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => toggle(pref.prefecture)}
                className="w-full flex items-center justify-between p-4 hover:bg-warm-50 transition text-left"
                aria-expanded={openPref === pref.prefecture}
              >
                <span className="font-medium text-warm-900">
                  {pref.prefecture}
                  <span className="ml-2 text-xs text-warm-400 font-light">
                    （{pref.areas.length}エリア）
                  </span>
                </span>
                <svg
                  className={`w-5 h-5 text-warm-400 transition-transform ${
                    openPref === pref.prefecture ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openPref === pref.prefecture && (
                <div className="border-t border-warm-200 bg-warm-50 p-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {pref.areas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/area/${area.slug}/`}
                          className="block text-sm text-warm-700 hover:text-warm-900 hover:underline py-1 font-light"
                        >
                          {area.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10 fade-up">
          <Link
            href="/area/"
            className="inline-block text-sm text-warm-700 hover:text-warm-900 underline font-light"
          >
            すべての地域を見る →
          </Link>
        </div>
      </div>
    </section>
  )
}
