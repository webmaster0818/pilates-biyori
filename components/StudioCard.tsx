'use client'

import { useState } from 'react'
import Image from 'next/image'
import { STUDIO_REVIEWS } from '@/data/studio-reviews'
import { brandSlugOf } from '@/lib/brandLink'

type Review = {
  author: string
  rating: number
  date: string
  text: string
}

type Studio = {
  name: string
  officialUrl?: string
  image?: string
  rating?: number
  reviewCount?: number
  reviews?: Review[]
  price: string
  trial: string
  features: string[]
  description: string
  access?: string
  address?: string
  mapImage?: string
  popularPlan?: {
    name: string
    description: string
    price: string
  }
  options?: string[]
  userProfile?: {
    ageRange: string
    genderRatio: string
    purpose: string[]
  }
  basicInfo?: {
    hours: string
    closed: string
    facilities: string[]
  }
}

type StudioCardProps = {
  studio: Studio
  index: number
}

export function StudioCard({ studio, index }: StudioCardProps) {
  const [activeTab, setActiveTab] = useState<'plan' | 'options' | 'users' | 'basic' | 'map'>('plan')
  const [showReviews, setShowReviews] = useState(false)

  return (
    <div id={`studio-${index + 1}`} className="bg-white border border-warm-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow scroll-mt-24">
      <div className="md:flex">
        {studio.image && (
        <div className="md:w-1/3">
          <img src={studio.image.replace(/.jpg$/, ".webp").replace(/.png$/, ".webp")} alt={studio.name} className="w-full aspect-[16/10] object-contain bg-warm-50" width="800" height="600" loading="lazy" />
        </div>
        )}
        <div className={studio.image ? "md:w-2/3 p-6" : "p-6"}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-warm-900">{index + 1}. {studio.name}</h3>
            {studio.rating != null && (
              <button
                onClick={() => setShowReviews(!showReviews)}
                className="flex items-center cursor-pointer hover:opacity-70 transition-opacity"
                title="口コミを表示"
              >
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-bold text-warm-800">{studio.rating}</span>
                {studio.reviewCount && <span className="text-warm-400 text-xs ml-1">({studio.reviewCount})</span>}
                <svg className={`w-3 h-3 ml-1 text-warm-400 transition-transform ${showReviews ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
            )}
          </div>

          {showReviews && studio.reviews && studio.reviews.length > 0 && (
            <div className="mb-4 bg-warm-50 border border-warm-200 rounded-lg p-4 animate-in">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-warm-900 text-sm">Google Maps 口コミ</h4>
                <button
                  onClick={() => setShowReviews(false)}
                  className="text-warm-500 hover:text-warm-800 text-xs"
                >
                  閉じる ×
                </button>
              </div>
              <div className="space-y-3">
                {studio.reviews.slice(0, 3).map((review, i) => (
                  <div key={i} className="bg-white border border-warm-200 rounded p-3">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, starIndex) => (
                          <span
                            key={starIndex}
                            className={starIndex < review.rating ? 'text-yellow-500' : 'text-warm-300'}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-warm-500 text-xs ml-2">{review.date}</span>
                    </div>
                    <p className="text-warm-700 text-sm leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-warm-500 text-xs mt-3 text-center">
                ※ 口コミはGoogle Mapsの投稿を参考に要約・再構成したものです
              </p>
              <p className="text-center mt-2">
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(studio.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-500 text-xs hover:text-warm-700 underline"
                >
                  出典: Google Maps で口コミを見る →
                </a>
              </p>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {studio.features.map((feature, i) => (
              <span key={i} className="bg-warm-100 text-warm-700 px-3 py-1 rounded-full text-xs">
                {feature}
              </span>
            ))}
          </div>
          <p className="text-warm-600 text-sm leading-relaxed mb-4">
            {studio.description}
          </p>

          {/* Tab Navigation */}
          <div className="mb-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveTab('plan')}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'plan'
                    ? 'bg-warm-900 text-white'
                    : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
                }`}
              >
                人気プラン
              </button>
              <button
                onClick={() => setActiveTab('options')}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'options'
                    ? 'bg-warm-900 text-white'
                    : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
                }`}
              >
                オプション
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'users'
                    ? 'bg-warm-900 text-white'
                    : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
                }`}
              >
                ユーザー層
              </button>
              <button
                onClick={() => setActiveTab('basic')}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'basic'
                    ? 'bg-warm-900 text-white'
                    : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
                }`}
              >
                基本情報
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'map'
                    ? 'bg-warm-900 text-white'
                    : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
                }`}
              >
                地図
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-warm-50 border border-warm-200 rounded p-4 min-h-[160px]">
            {activeTab === 'plan' && (
              <div>
                <h4 className="font-bold text-warm-900 mb-2">
                  {studio.popularPlan?.name || '月4回プラン'}
                </h4>
                <p className="text-warm-700 text-sm mb-3">
                  {studio.popularPlan?.description || 
                    `${studio.name}で一番人気のプラン。初心者から経験者まで無理なく続けられる回数設定。`}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="text-warm-500 font-medium w-24">料金：</span>
                    <span className="text-warm-800 font-bold">{studio.price}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-warm-500 font-medium w-24">体験：</span>
                    <span className="text-warm-800 font-bold">{studio.trial}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'options' && (
              <div>
                <h4 className="font-bold text-warm-900 mb-3">追加オプション</h4>
                <ul className="space-y-2 text-sm text-warm-700">
                  {(studio.options || [
                    'ウェアレンタル（月額 2,200円）',
                    'タオルレンタル（月額 1,100円）',
                    'プライベートレッスン追加（1回 8,800円〜）',
                    'パーソナル栄養指導（月額 5,500円）',
                  ]).map((option, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-warm-400 mr-2">•</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <h4 className="font-bold text-warm-900 mb-3">利用者層</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-warm-500 font-medium">年齢層：</span>
                    <span className="text-warm-800 ml-2">
                      {studio.userProfile?.ageRange || '20代〜40代が中心（全体の75%）'}
                    </span>
                  </div>
                  <div>
                    <span className="text-warm-500 font-medium">男女比：</span>
                    <span className="text-warm-800 ml-2">
                      {studio.userProfile?.genderRatio || '女性85% / 男性15%'}
                    </span>
                  </div>
                  <div>
                    <span className="text-warm-500 font-medium">目的：</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {(studio.userProfile?.purpose || [
                        'ダイエット',
                        '姿勢改善',
                        '体幹強化',
                        'リラックス',
                      ]).map((purpose, i) => (
                        <span key={i} className="bg-white text-warm-700 px-3 py-1 rounded-full text-xs border border-warm-200">
                          {purpose}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'basic' && (
              <div>
                <h4 className="font-bold text-warm-900 mb-3">基本情報</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-warm-500 font-medium">営業時間：</span>
                    <span className="text-warm-800 ml-2">
                      {studio.basicInfo?.hours || '平日 7:00〜22:00 / 土日祝 9:00〜20:00'}
                    </span>
                  </div>
                  <div>
                    <span className="text-warm-500 font-medium">定休日：</span>
                    <span className="text-warm-800 ml-2">
                      {studio.basicInfo?.closed || '不定休'}
                    </span>
                  </div>
                  <div>
                    <span className="text-warm-500 font-medium">アクセス：</span>
                    <span className="text-warm-800 ml-2">{studio.access}</span>
                  </div>
                  <div>
                    <span className="text-warm-500 font-medium">設備：</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {(studio.basicInfo?.facilities || [
                        'シャワー',
                        'ロッカー',
                        'パウダールーム',
                        'Wi-Fi',
                      ]).map((facility, i) => (
                        <span key={i} className="bg-white text-warm-700 px-3 py-1 rounded-full text-xs border border-warm-200">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'map' && (
              <div>
                <h4 className="font-bold text-warm-900 mb-3">アクセス情報</h4>
                
                {/* アクセス */}
                <div className="mb-4">
                  <p className="text-warm-500 text-xs font-medium mb-2">最寄駅からのアクセス</p>
                  <p className="text-warm-800 text-sm flex items-start">
                    <span className="text-warm-400 mr-2">🚶</span>
                    <span>{studio.access}</span>
                  </p>
                </div>

                {/* 住所 */}
                {studio.address && (
                  <div className="mb-4">
                    <p className="text-warm-500 text-xs font-medium mb-2">住所</p>
                    <p className="text-warm-800 text-sm flex items-start">
                      <span className="text-warm-400 mr-2">📍</span>
                      <span>{studio.address}</span>
                    </p>
                  </div>
                )}

                {/* Google Mapで見るボタン */}
                {studio.address && (
                  <div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${studio.name} ${studio.address}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-warm-800 text-white px-4 py-3 rounded text-sm font-medium hover:bg-warm-900 transition"
                    >
                      <span className="mr-2">🗺️</span>
                      Google Mapで見る
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {(() => {
            const rev = STUDIO_REVIEWS[studio.name]
            if (!rev) return null
            return (
              <div className="mt-4 bg-warm-50 border border-warm-200 rounded-lg p-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-warm-800">Googleの評価</span>
                  <span className="text-sm font-bold text-warm-900">★{rev.rating}</span>
                  <span className="text-xs text-warm-600">（{rev.userRatings}件）</span>
                </div>
                <p className="text-sm text-warm-700 mt-2 leading-relaxed">{rev.summary}</p>
                <p className="text-[11px] text-warm-500 mt-2">
                  Googleマップに投稿された口コミをもとに編集部が要約しました（{rev.fetchedAt}時点）。
                  口コミ本文は転載していません。
                  {' '}
                  <a href={rev.mapsUri} target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-700">
                    出典：Googleマップの口コミを見る
                  </a>
                </p>
              </div>
            )
          })()}

          <div className="mt-4">
            <a
              href={studio.officialUrl || `https://www.google.com/search?q=${encodeURIComponent(`${studio.name.replace(/（[^）]*）/g, '').trim()} ピラティス 公式サイト`)}`}
              target="_blank"
              rel={studio.officialUrl ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
              className="inline-block bg-warm-800 text-white px-6 py-2 rounded text-sm hover:bg-warm-900 transition"
            >
              公式サイトを見てみる
            </a>
            {/*
              口コミは「Google口コミをもとにした編集部の要約」＋出典リンクで掲載する。
              要約が用意できていない店舗は、Googleマップへの導線だけを出す。
              ⚠️ 以前ここには編集部が用意した口コミ文が並んでいたが、
                 同じ本文が別スタジオにも使い回されており、実在の利用者の声ではなかった。
                 実在の口コミを転載するにはGoogleの利用規約上の制約があるため、
                 「当サイトには載せず、一次情報へ送る」形にしている。
            */}
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(studio.name.replace(/（[^）]*）/g, '').trim())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-3 text-sm text-warm-700 underline hover:text-warm-900 transition"
            >
              Googleマップで口コミを見る
            </a>
            {/* A8インプレッション計測(zen place) */}
            {studio.officialUrl?.includes('a8mat=4B650J+3SXRGI+4LQ4+5YJRM') && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="https://www14.a8.net/0.gif?a8mat=4B650J+3SXRGI+4LQ4+5YJRM" width={1} height={1} alt="" className="inline-block" />
            )}
            {/* felmatインプレッション計測(Dr.ピラティス) */}
            {studio.officialUrl?.includes('Z11979O.1.Z164554L') && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="https://t.felmat.net/fmimp/Z11979O.Z164554L.U1357808" width={1} height={1} alt="" className="inline-block" style={{ border: 'none' }} />
            )}
            {/* felmatインプレッション計測(24/7ピラティス) */}
            {studio.officialUrl?.includes('J11817X.1.B1620582') && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="https://t.felmat.net/fmimp/J11817X.B1620582.U1357808" width={1} height={1} alt="" className="inline-block" style={{ border: 'none' }} />
            )}
            {brandSlugOf(studio.name) && (
              <a
                href={`/brands/${brandSlugOf(studio.name)}/`}
                className="inline-block ml-3 text-xs text-warm-600 underline decoration-warm-300 hover:text-warm-900 align-middle"
              >
                このブランドの料金・店舗一覧を見る
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
