'use client'

import { useState } from 'react'
import Image from 'next/image'

type Studio = {
  name: string
  image: string
  rating: number
  price: string
  trial: string
  features: string[]
  description: string
  access: string
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

  return (
    <div className="bg-white border border-warm-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img src={studio.image} alt={studio.name} className="w-full h-64 md:h-full object-cover" />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-warm-900">{index + 1}. {studio.name}</h3>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="font-bold text-warm-800">{studio.rating}</span>
            </div>
          </div>
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

          <div className="mt-4">
            <a href="#contact" className="inline-block bg-warm-800 text-white px-6 py-2 rounded text-sm hover:bg-warm-900 transition">
              体験レッスンを予約
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
