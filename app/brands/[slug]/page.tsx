import Link from 'next/link'
import { storePageOf } from '@/lib/storePages'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { BRANDS, getBrand } from '@/data/brands'
import { prefectureAreas } from '@/data/prefectureAreas'
import brandStores from '@/data/brands-aggregate.json'
import brandVoices from '@/data/brand-voices.json'
import { BrandReviewDigest } from '@/components/BrandReviewDigest'
import { BrandReviewThemes } from '@/components/BrandReviewThemes'
import { PILATES_K_OFFICIAL_STORES, PILATES_K_OFFICIAL_ASOF } from '@/data/pilates-k-official-stores'
import type { OfficialStoreList } from '@/data/official-store-list-type'
import { ZEN_PLACE_OFFICIAL } from '@/data/zen-place-official-stores'
import { CLUB_PILATES_OFFICIAL } from '@/data/club-pilates-official-stores'
import { LAVA_MACHINE_PILATES_OFFICIAL } from '@/data/lava-machine-pilates-official-stores'
import { REPILATES_OFFICIAL } from '@/data/repilates-official-stores'
import { LULUTO_OFFICIAL } from '@/data/luluto-official-stores'
import { DEP_OFFICIAL } from '@/data/dep-official-stores'

// 公式の全店舗一覧（都道府県別）を出すブランド。pilates K（10/27）と同じ部品を、単ワード検索で10位手前の3ブランドに横展開（2026-10-28）
const OFFICIAL_STORE_LISTS: Record<string, { list: OfficialStoreList; heading: string; button: string; intro: string; note: string }> = {
  'zen-place': {
    list: ZEN_PLACE_OFFICIAL,
    heading: '全店舗一覧（公式・都道府県別{n}スタジオとグレード・最寄駅）',
    button: '公式の全{n}スタジオ（グレード・最寄駅つき）へ移動 ↓',
    intro: '公式の「スタジオ一覧」に載っているピラティススタジオ全{n}店（ヨガ専用店・オンラインを除く。11月8日オープン予定の新横浜を含む）を、都道府県ごとにスタジオ名・グレード・最寄駅・住所で掲載しています。グレードで入会金・マットグループとプライベートの月会費・体験料金が変わります（マット＆マシン・リフォーマーグループはグレード共通。料金は上の「料金プラン」）。最寄駅は公式のスタジオ一覧の表記です（{asOf}確認）。',
    note: '同じグレードのスタジオは他店利用料がかかりません。グレード02の会員がグレード01のスタジオを利用する場合は1回500円（チケットを使ったプライベートは1,500円・税込）です（公式の料金ページ）。',
  },
  'club-pilates': {
    list: CLUB_PILATES_OFFICIAL,
    heading: '全店舗一覧と店舗別の月会費（公式・都道府県別{n}店舗）',
    button: '公式の全{n}店舗（店舗別の月会費つき）へ移動 ↓',
    intro: '公式の「スタジオ一覧」に載っている国内全{n}店舗を、都道府県ごとに店舗名・最寄駅・住所と、各店舗ページに載っている月会費（月4回＝EFT4・月8回＝EFT8・通い放題＝UNLIMITED）で掲載しています。月会費は店舗ごとに異なります（{asOf}確認）。',
    note: '月会費の金額は各店舗ページの表示どおりで、店舗ページには税込・税抜の記載がありません。入会金は5,500円、体験は30分の無料体験です（料金の記載がある店舗ページ）。キャンペーンは店舗ごとに異なります。',
  },
  lava: {
    list: LAVA_MACHINE_PILATES_OFFICIAL,
    heading: 'マシンピラティス開催店舗の一覧（公式・都道府県別{n}店舗）',
    button: 'マシンピラティス開催の全{n}店舗（住所・女性専用/男女共用つき）へ移動 ↓',
    intro: 'LAVA公式の「マシンピラティス」ページに「マシンピラティス開催店舗」として載っている全{n}店舗を、都道府県ごとに店舗名・アクセス・住所と、各店舗ページの「スタジオ種別」（女性専用／男女共用）で掲載しています（{asOf}確認）。LAVAの全店舗ではありません。',
    note: '公式ページでは、マシンピラティスは「別途料金がかかります。詳しくは開催店舗のスタッフにご確認ください」と案内されています。アクセスは各店舗ページの先頭の表記で、車での行き方のみの店舗はその表記です。',
  },
  // 2026-10-29 成長ルーチン: 「repilates 店舗」「ルルト 店舗」「dep ピラティス 店舗」（7〜9位）の受け皿を、10/28 の zen place 等と同じ部品で
  repilates: {
    list: REPILATES_OFFICIAL,
    heading: '全店舗一覧（公式・都道府県別{n}店舗と営業時間）',
    button: '公式の全{n}店舗（住所・営業時間つき）へ移動 ↓',
    intro: 'Repilates公式の店舗一覧に載っている営業中の全{n}店舗を、都道府県ごとに店舗名・営業時間・住所で掲載しています（{asOf}確認）。公式の一覧には最寄駅の表記がなく、イオンモール・イオンタウンなど商業施設内の店舗が多いため、住所の施設名で場所を確認できます。',
    note: '公式の一覧には、このほかオープン予定の店舗が12店（2026年オープン予定＝イオンタウン館山店〈11月1日〉・アクロスプラザ昭島店・湘南モールフィル店・イオンモール銚子店・日生中央サピエ店・イオン浜松西店・イオンモールとなみ店、2027年オープン予定＝イオンモール加西北条店・イオン高岡江尻店・ヤオコー岩槻本丸店・リーフウォーク稲沢店・トライアル南アルプス店）載っています（この表には含めていません）。料金は全店共通の公式トップページの表記で、特定商取引法の表記には「価格は店舗により異なる」とあります。',
  },
  luluto: {
    list: LULUTO_OFFICIAL,
    heading: '全店舗一覧（公式・都道府県別{n}店舗と最寄駅）',
    button: '公式の全{n}店舗（最寄駅・住所つき）へ移動 ↓',
    intro: 'ルルト公式の「体験予約・店舗一覧」に載っている国内の全{n}店舗（2026年11月1日オープン予定の本八幡店を含む）を、都道府県ごとに店舗名・アクセス・住所で掲載しています。アクセスは公式の一覧の表記で、車で通う店舗は駐車場の案内になっています（{asOf}確認）。',
    note: '料金（月3回29,700円〜・入会金22,000円）は全店共通の公式の料金表のとおりです。体験料金（45分・1,000円〜5,000円）と体験の受付状況は店舗ごとに異なり、土日祝の新規体験を止めている店舗や体験の受付を停止している店舗もあるため、通いたい店舗の公式ページで確認してください。',
  },
  dep: {
    list: DEP_OFFICIAL,
    heading: '全店舗一覧と料金エリア（公式・都道府県別{n}店舗）',
    button: '公式の全{n}店舗（料金エリア・最寄駅つき）へ移動 ↓',
    intro: 'ピラティススタジオDEP公式の「店舗一覧・ご予約」に載っている全{n}店舗を、都道府県ごとに店舗名・料金エリア・アクセス・住所で掲載しています。料金エリア（A／B／S）は各店舗ページに載っている月額から当編集部が判定したもので、アクセスは各店舗ページの「アクセス」欄の先頭の表記です（{asOf}確認）。',
    note: '月額はエリアAが月2回14,800円・月4回28,800円・月7回47,600円、エリアBが17,000円・32,000円・54,600円、エリアSが19,200円・37,200円・63,000円（税込・公式の料金ページ）。体験は通常9,900円（税込）がLINE予約で2,980円で、店舗によっては期間限定の体験無料があります（一覧の表示では札幌 Rouage北24条スタジオが2026年10月31日まで、盛岡店 Fonto・倉敷店・松山店 市駅南スタジオが2027年1月31日まで）。',
  },
}
const fill = (t: string, l: OfficialStoreList) => t.replace(/\{n\}/g, String(l.stores.length)).replace(/\{asOf\}/g, l.asOf)

type Voice = {
  brand: string
  text: string
  attribute: string | null
  source_label: string
  source_url: string
  type: string
}

type Store = {
  name: string
  price?: string
  trial?: string
  rating?: number
  officialUrl?: string
  address?: string
  access?: string
  areaSlug: string
  areaName: string
}

const STORES: Record<string, Store[]> = brandStores as Record<string, Store[]>

// エリアslug → 都道府県（並び順は prefectureAreas の定義順）。店舗一覧を都道府県ごとに並べるため（2026-10-11 「{ブランド} 店舗」検索の受け皿）
const PREF_OF: Record<string, { pref: string; order: number }> = {}
prefectureAreas.forEach((p, i) => p.areas.forEach((a) => { if (!PREF_OF[a.slug]) PREF_OF[a.slug] = { pref: p.prefecture, order: i } }))

// 月表記は自動更新（手動更新は陳腐化するため）
const _now = new Date()
const MONTH_TAG = `【${_now.getFullYear()}年${_now.getMonth() + 1}月】`

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = getBrand(slug)
  if (!brand) return { title: 'ブランドが見つかりません' }
  const stores = STORES[slug] ?? []
  // P2(2026-08-04): 「{ブランド} 店舗数/店舗一覧」で親ページが上位を取れる型を全ブランドへ標準装備。
  // 実測: pilates K「店舗数」7.2位・「店舗 一覧」7.0位 / the SILK「店舗」4.8〜5.0位＝いずれも親ページが受けている。
  // 一方で料金・口コミ系は50〜90位と弱いため、勝てている店舗意図を前方に置く。
  // ⚠️「店舗数」を名乗るのは公式店舗数を確認できたブランドのみ（未確認ブランドで数を主張しない）。
  const hasOfficialCount = !!brand.officialStores
  // 2026-10-08: 口コミテーマ節（reviewThemes）を持つブランドだけ末尾に「口コミ評判」を足す（「{ブランド} 口コミ」= Rintosull 13位の受け皿化）
  const kw = brand.titleKw ??
    ((hasOfficialCount
      ? '店舗一覧・店舗数・料金'
      : brand.useHyoban ? '店舗一覧・料金・評判' : '店舗一覧・料金・体験') +
    (brand.reviewThemes ? (!hasOfficialCount && brand.useHyoban ? '・口コミ' : '・口コミ評判') : '')) // 「評判・口コミ評判」の重複回避（2026-10-09 BDC で発生）
  return {
    title: `${brand.name}${brand.nameKana ? `（${brand.nameKana}）` : ''}の${kw}${MONTH_TAG}${brand.titleSuffix ?? `｜掲載${brand.titleStoreCount ?? stores.length}店舗を比較`}`,
    description: brand.metaDescription ?? `${brand.name}の店舗一覧${brand.officialStores && brand.officialStores.count >= stores.length ? `（${brand.officialStores.asOf}時点で全国${brand.officialStores.count}店舗${brand.officialStores.approx ? '以上' : ''}）` : ''}・料金プラン・体験レッスンを、掲載データにもとづいて掲載しています。${brand.tagline}。当サイトに掲載している${stores.length}店舗を、エリア別のリンクとあわせて掲載しています。`,
    alternates: { canonical: `https://biyori-pilates.com/brands/${slug}/` },
  }
}

function priceSummary(stores: Store[]): { label: string; count: number }[] {
  const freq = new Map<string, number>()
  for (const s of stores) {
    if (s.price && s.price !== '要問合せ' && !s.price.includes('公式サイト参照')) {
      freq.set(s.price, (freq.get(s.price) ?? 0) + 1)
    }
  }
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([label, count]) => ({ label, count }))
}

// 「3,300円」が文字列として「0円」を含むため、無料判定は『無料』表記＋金額パース0円のみ
function isFreeTrial(trial: string): boolean {
  if (trial.includes('無料')) return true
  const m = trial.replace(/,/g, '').match(/(\d{1,6})円/)
  return m ? parseInt(m[1], 10) === 0 : false
}

function ratingSummary(stores: Store[]): { avg: string; n: number } | null {
  const rated = stores.filter((s) => s.rating != null)
  if (rated.length < 5) return null
  const avg = rated.reduce((a, s) => a + (s.rating ?? 0), 0) / rated.length
  return { avg: avg.toFixed(2), n: rated.length }
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = getBrand(slug)
  if (!brand) notFound()
  const stores = (STORES[slug] ?? []).slice().sort((a, b) => (PREF_OF[a.areaSlug]?.order ?? 999) - (PREF_OF[b.areaSlug]?.order ?? 999) || a.areaSlug.localeCompare(b.areaSlug))
  const prices = priceSummary(stores)
  const rating = ratingSummary(stores)
  const freeTrial = stores.filter((s) => s.trial && isFreeTrial(s.trial)).length

  const os = brand.officialStores
  const storeCountLabel = os ? `${os.countLabel ? `${os.countLabel}は` : '全国'}${os.count}店舗${os.approx ? '以上' : ''}` : null
  // 店舗数FAQ（公式一次情報が確認できたブランドのみ動的に追加＝FAQSchemaと本文が常に同期）
  const faqs = os
    ? [
        {
          q: `${brand.name}の${os.countLabel ?? '店舗数'}は？`,
          a: `${os.asOf}時点で${storeCountLabel}です（${os.kind === '公式明記' ? '公式サイトの記載' : '公式サイトの店舗一覧の掲載数'}に基づく）。${os.caveat ?? ''}${os.countLabel ? `当サイトのエリアページには${stores.length}店舗を掲載しています。` : `当サイトではうち${stores.length}店舗をエリアページ付きで掲載しています。`}`,
        },
        ...brand.faq,
      ]
    : brand.faq

  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbSchema
        items={[
          { name: 'ホーム', url: 'https://biyori-pilates.com/' },
          { name: 'ブランド一覧', url: 'https://biyori-pilates.com/brands/' },
          { name: brand.name, url: `https://biyori-pilates.com/brands/${brand.slug}/` },
        ]}
      />
      <main className="bg-warm-50 min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-5">
          <nav className="text-xs text-warm-500 mb-6">
            <Link href="/" className="hover:text-warm-800">ホーム</Link>
            <span className="mx-2">›</span>
            <Link href="/brands/" className="hover:text-warm-800">ブランド一覧</Link>
            <span className="mx-2">›</span>
            <span className="text-warm-800">{brand.name}</span>
          </nav>

          <p className="section-en text-warm-400 mb-2 font-medium">Brand Guide</p>
          <h1 className="text-2xl md:text-3xl font-light text-warm-900 tracking-tight mb-3">
            {brand.name}{brand.nameKana ? `（${brand.nameKana}）` : ''}の{brand.titleKw ?? <>{brand.officialStores ? '店舗一覧・店舗数・料金' : brand.useHyoban ? '店舗一覧・料金・評判' : '店舗一覧・料金・体験'}{brand.reviewThemes ? (!brand.officialStores && brand.useHyoban ? '・口コミ' : '・口コミ評判') : ''}</>}
            <span className="block text-base text-warm-500 mt-2 font-light">{brand.tagline}</span>
          </h1>
          {brand.checkedAt && (
            <p className="text-xs text-warm-500 mb-6">料金・店舗数・規約の公式確認日: {brand.checkedAt}／口コミはGoogleマップの店舗ごとの要約（出典リンク付き）</p>
          )}

          {brand.quickAnswer && brand.quickAnswer.length > 0 && (
            <section className="bg-white border-l-4 border-warm-700 border-y border-r border-warm-200 p-5 mb-6" aria-label={`${brand.name}の要点`}>
              <h2 className="text-base font-medium text-warm-900 mb-3">{brand.name}の要点（結論）</h2>
              <dl className="space-y-2">
                {brand.quickAnswer.map((x) => (
                  <div key={x.label} className="grid grid-cols-[4.5rem_1fr] gap-3 text-sm leading-relaxed">
                    <dt className="font-medium text-warm-800">{x.label}</dt>
                    <dd className="text-warm-700 font-light">
                      {x.text}
                      {x.links && x.links.length > 0 && (
                        <>
                          {' '}
                          {x.links.map((l, i) => (
                            <span key={l.href}>
                              {i > 0 && '／'}
                              <Link href={l.href} className="underline decoration-warm-400 hover:text-warm-900 font-normal">{l.label}</Link>
                            </span>
                          ))}
                        </>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              {brand.quickAnswerSources && brand.quickAnswerSources.length > 0 && (
                <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
                  出典：
                  {brand.quickAnswerSources.map((s, i) => (
                    <span key={s.url}>
                      {i > 0 && '／'}
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">{s.label}</a>
                    </span>
                  ))}
                </p>
              )}
            </section>
          )}

          {/* 結論ボックス */}
          <section className="bg-white border border-warm-200 p-6 mb-10">
            <p className="text-xs font-medium text-warm-400 uppercase tracking-[0.15em] mb-3">掲載状況の概要</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-light text-warm-900">{os ? `${os.count}${os.approx ? '+' : ''}` : stores.length}</p>
                <p className="text-xs text-warm-500 mt-1">{os ? `${os.countLabel ?? '全国店舗数'}（${os.asOf}時点）` : '当サイト掲載店舗'}</p>
              </div>
              <div>
                <p className="text-2xl font-light text-warm-900">{brand.summaryPlan ? brand.summaryPlan : prices[0] ? prices[0].label.replace(/（.*?）/g, '').split(/[／/]/)[0].trim() : '公式参照'}</p>
                <p className="text-xs text-warm-500 mt-1">代表的なプラン</p>
              </div>
              <div>
                <p className="text-2xl font-light text-warm-900">{freeTrial > 0 ? `${freeTrial}店舗` : '—'}</p>
                <p className="text-xs text-warm-500 mt-1">無料体験の掲載店舗</p>
              </div>
              <div>
                <p className="text-2xl font-light text-warm-900">{rating ? `★${rating.avg}` : '—'}</p>
                <p className="text-xs text-warm-500 mt-1">{rating ? `平均評価（${rating.n}店舗集計）` : '評価データ準備中'}</p>
              </div>
            </div>
            {rating && (
              <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
                ※平均評価は当サイトの各店舗ページに掲載している評価を集計したものです（{rating.n}店舗・調査時点）。
              </p>
            )}
            {os && (
              <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
                ※{os.countLabel ?? '全国店舗数'}は
                <a href={os.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">
                  公式サイト
                </a>
                の{os.kind === '公式明記' ? '記載' : '店舗一覧の掲載数'}に基づきます（{os.asOf}時点）。{os.caveat ?? ''}{os.countLabel ? `当サイトのエリアページには${stores.length}店舗を掲載しています。` : `当サイトではうち${stores.length}店舗をエリアページ付きで掲載しています。`}
              </p>
            )}
            {stores.length > 0 && (
              <p className="mt-4 text-center">
                <a href="#store-list" className="inline-block border border-warm-300 px-5 py-2 text-xs text-warm-800 hover:border-warm-600 transition">
                  店舗一覧（都道府県順・当サイト掲載{stores.length}店舗）へ移動 ↓
                </a>
                {OFFICIAL_STORE_LISTS[brand.slug] && (
                  <a href="#official-store-list" className="inline-block border border-warm-300 px-5 py-2 text-xs text-warm-800 hover:border-warm-600 transition ml-2 mt-2">
                    {fill(OFFICIAL_STORE_LISTS[brand.slug].button, OFFICIAL_STORE_LISTS[brand.slug].list)}
                  </a>
                )}
                {brand.slug === 'pilates-k' && (
                  <a href="#official-store-list" className="inline-block border border-warm-300 px-5 py-2 text-xs text-warm-800 hover:border-warm-600 transition ml-2 mt-2">
                    公式の全{PILATES_K_OFFICIAL_STORES.length}店舗（最寄駅つき）へ移動 ↓
                  </a>
                )}
              </p>
            )}
          </section>

          {os?.byPref && os.byPref.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{brand.name}の都道府県別{os.countLabel ?? '店舗数'}（公式・{os.asOf}時点）</h2>
              <p className="text-sm text-warm-600 font-light leading-relaxed mb-4">
                公式サイトの店舗一覧に載っている{os.byPrefTotal ?? os.count}店舗を、住所の都道府県別に集計しています（{os.byPref.length}都道府県）。{os.byPrefNote ?? os.caveat ?? ''}
                最も多いのは{os.byPref[0].pref}の{os.byPref[0].count}店舗です。
              </p>
              <ul className="flex flex-wrap gap-2">
                {os.byPref.map((p) => (
                  <li key={p.pref} className="text-xs text-warm-700 border border-warm-200 bg-white px-3 py-1.5">
                    {p.pref} <span className="font-medium text-warm-900">{p.count}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
                ※出典：<a href={os.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">公式サイトの店舗一覧</a>（{os.asOf}に当編集部が集計）。新規開業・閉店により変わるため、最新情報は公式サイトでご確認ください。
              </p>
            </section>
          )}

          {/* 特徴 */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{brand.name}の特徴</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {brand.features.map((f) => (
                <span key={f} className="text-xs text-warm-700 border border-warm-300 bg-white px-3 py-1.5">{f}</span>
              ))}
            </div>
            {brand.intro.map((p, i) => (
              <p key={i} className="text-sm text-warm-700 leading-relaxed mb-3 font-light">{p}</p>
            ))}
            {brand.note && <p className="text-xs text-warm-500 leading-relaxed">{brand.note}</p>}
            {brand.crossLinks && brand.crossLinks.length > 0 && (
              <div className="mt-4 bg-white border border-warm-200 p-4 space-y-2">
                {brand.crossLinks.map((c) => (
                  <p key={c.href} className="text-sm text-warm-700 font-light leading-relaxed">
                    {c.text}
                    <Link href={c.href} className="ml-1 text-warm-800 underline decoration-warm-300 hover:text-warm-900">{c.label} →</Link>
                  </p>
                ))}
              </div>
            )}
          </section>

          {/* 料金 */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{brand.name}の料金プラン</h2>
            {brand.priceList && brand.priceList.length > 0 && (
              <ul className="bg-white border border-warm-200 px-4 py-3 mb-4 space-y-1 text-sm text-warm-800">
                {brand.priceList.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
            {brand.priceSources && brand.priceSources.length > 0 && (
              <p className="text-[11px] text-warm-500 mb-4 leading-relaxed">
                出典：
                {brand.priceSources.map((src, i) => (
                  <span key={src.url}>
                    {i > 0 && '／'}
                    <a href={src.url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">{src.label}</a>
                  </span>
                ))}
                {brand.checkedAt && `（${brand.checkedAt}確認）`}
              </p>
            )}
            <p className="text-sm text-warm-700 leading-relaxed mb-4 font-light">{brand.pricingNote}</p>
            {prices.length > 0 && !brand.hideListedPriceTable && (
              <div className="bg-white border border-warm-200 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-warm-200 text-left">
                      <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider">当サイト掲載店舗の代表的なプラン</th>
                      <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider whitespace-nowrap">掲載店舗数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices.map((p) => (
                      <tr key={p.label} className="border-b border-warm-100 last:border-0">
                        <td className="px-4 py-3 text-warm-800">{p.label}</td>
                        <td className="px-4 py-3 text-warm-500">{p.count}店舗</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
              ※料金は当サイト掲載時点の情報の集計であり、金額を保証するものではありません。{brand.noCampaignWording ? '最新の料金は公式サイトでご確認ください。' : '最新の料金・キャンペーンは公式サイトでご確認ください。'}
            </p>
          </section>

          {/* 体験 */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">体験レッスン</h2>
            <p className="text-sm text-warm-700 leading-relaxed font-light">{brand.trialNote}</p>
          </section>

          {/* こんな人に向いている */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">こんな人に向いている</h2>
            <ul className="space-y-2">
              {brand.goodFor.map((g) => (
                <li key={g} className="text-sm text-warm-700 font-light flex gap-2">
                  <span className="text-warm-400">✓</span>{g}
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          {brand.ctaUrl && (
            <section className="mb-10 text-center bg-white border border-warm-200 p-8">
              <p className="text-sm text-warm-600 mb-4 font-light">{brand.noCampaignWording ? '体験レッスンの空き状況は、公式サイトでご確認ください。' : '体験レッスンの空き状況・最新のキャンペーンは、公式サイトでご確認ください。'}</p>
              <a
                href={brand.ctaUrl}
                target="_blank"
                rel={brand.isPartner ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
                className="inline-block border border-warm-800 bg-warm-800 text-white px-10 py-3.5 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-900 transition-all"
              >
                {brand.ctaLabel ?? '公式サイトを見る'}
              </a>
              {brand.isPartner && <p className="text-[10px] text-warm-400 mt-3">［PR］当サイトはアフィリエイトプログラムを利用しています</p>}
              {brand.slug === 'zen-place' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* CTAテキストリンク(K142573W)のインプレッション計測 */}
                  <img src="https://t.felmat.net/fmimp/T98993.K142573W.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.felmat.net/fmcl?ak=T98993.1.X1533926.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored">
                    <img src="https://t.felmat.net/fmimg/T98993.X1533926.U1357808" width={300} height={300} alt="zen place pilates" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  <a href="https://t.felmat.net/fmcl?ak=T98993.1.X1533893.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img src="https://t.felmat.net/fmimg/T98993.X1533893.U1357808" width={728} height={90} alt="zen place pilates 体験レッスン" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'days-pilates' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="https://t.afi-b.com/lead/H16011O/E9887623/W518522Z" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=H16011O-j519244C&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={468} height={60} alt="DAYS PILATES" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/16011-1752093641-3.png" />
                  </a>
                  <img src="https://t.afi-b.com/lead/H16011O/E9887623/j519244C" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=H16011O-M519245R&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={300} height={250} alt="DAYS PILATES" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/16011-1758509241-3.png" />
                  </a>
                  <img src="https://t.afi-b.com/lead/H16011O/E9887623/M519245R" width={1} height={1} alt="" style={{ border: 'none' }} />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'pilates-k' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="https://t.afi-b.com/lead/O11543l/E9887623/G384824n" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=O11543l-G386644A&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={650} height={250} alt="pilates K" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/11543-1580989406-3.gif" />
                  </a>
                  <img src="https://t.afi-b.com/lead/O11543l/E9887623/G386644A" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=O11543l-B386658N&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={350} height={80} alt="pilates K" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/11543-1581080307-3.gif" />
                  </a>
                  <img src="https://t.afi-b.com/lead/O11543l/E9887623/B386658N" width={1} height={1} alt="" style={{ border: 'none' }} />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'kasane' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="https://t.afi-b.com/lead/T15562j/E9887623/7505717Y" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=T15562j-P505650j&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={728} height={90} alt="Pilates KASANE" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/15562-1736341713-3.jpg" />
                  </a>
                  <img src="https://t.afi-b.com/lead/T15562j/E9887623/P505650j" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=T15562j-I505657Z&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={300} height={250} alt="Pilates KASANE" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/15562-1735970114-3.jpg" />
                  </a>
                  <img src="https://t.afi-b.com/lead/T15562j/E9887623/I505657Z" width={1} height={1} alt="" style={{ border: 'none' }} />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'bdc' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40590" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  <a href="https://af.moshimo.com/af/c/click?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40596" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={468} height={60} alt="BDC PILATES" className="max-w-full h-auto" src="https://image.moshimo.com/af-img/2413/000000040596.jpg" />
                  </a>
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40596" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  <a href="https://af.moshimo.com/af/c/click?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40593" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={250} height={250} alt="BDC PILATES" className="max-w-full h-auto" src="https://image.moshimo.com/af-img/2413/000000040593.jpg" />
                  </a>
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40593" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'rintosull' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* もしもアフィリエイト。クリックURL・画像・計測は pl_id ごとに対で使う */}
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  <a href="https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=81643" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={300} height={250} alt="Rintosull（リントスル）" className="max-w-full h-auto" src="https://image.moshimo.com/af-img/1870/000000081643.jpg" />
                  </a>
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5718892&p_id=5919&pc_id=16494&pl_id=81643" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  <a href="https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=81644" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={250} height={250} alt="Rintosull（リントスル）" className="max-w-full h-auto" src="https://image.moshimo.com/af-img/1870/000000081644.jpg" />
                  </a>
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5718892&p_id=5919&pc_id=16494&pl_id=81644" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'club-pilates' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* CTA（全店舗共通用 62359）のインプレッション計測 */}
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5805739&p_id=4728&pc_id=12432&pl_id=62359" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  <a href="https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=75478" rel="nofollow sponsored" referrerPolicy="no-referrer-when-downgrade" target="_blank">
                    <img src="https://image.moshimo.com/af-img/4316/000000075478.jpg" width={300} height={250} alt="CLUB PILATES" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5805739&p_id=4728&pc_id=12432&pl_id=75478" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {/* 2026-10-24: La pilates（afi-b 816076W）・LAVA（A8 4BENDQ+6V2YDE）。10/23 設置済みのタグ（ArticleFigures の LaPilatesPR・LavaPR と同じ組）を再利用。クリックURLと計測の組を崩さない */}
              {brand.slug === 'la-pilates' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="https://t.afi-b.com/lead/816076W/E9887623/u518546p" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=816076W-p520735r&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored">
                    <img width={300} height={250} alt="La pilates" className="max-w-full h-auto" style={{ border: 'none' }} src="https://www.afi-b.com/upload_image/16076-1758519716-3.png" />
                  </a>
                  <img src="https://t.afi-b.com/lead/816076W/E9887623/p520735r" width={1} height={1} alt="" style={{ border: 'none' }} />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'lava' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="https://www12.a8.net/0.gif?a8mat=4BENDQ+6V2YDE+1O96+5YZ76" width={1} height={1} alt="" style={{ border: 0 }} />
                  <a href="https://px.a8.net/svt/ejp?a8mat=4BENDQ+6V2YDE+1O96+69P01" target="_blank" rel="nofollow noopener noreferrer sponsored">
                    <img width={300} height={250} alt="LAVA" className="max-w-full h-auto" style={{ border: 0 }} src="https://www29.a8.net/svt/bgt?aid=261023966415&wid=003&eno=01&mid=s00000007809001053000&mc=1" />
                  </a>
                  <img src="https://www17.a8.net/0.gif?a8mat=4BENDQ+6V2YDE+1O96+69P01" width={1} height={1} alt="" style={{ border: 0 }} />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {/* A8（2026-10-14）: CTAテキストリンクのインプレッション計測。クリックURL（brands.ts ctaUrl）と同じ a8mat を対で使う */}
              {(['dep', '1to1', 'repilates'] as const).includes(brand.slug as 'dep') && brand.ctaUrl?.includes('a8mat=') && (
                <div className="mt-2 flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://${brand.slug === 'dep' ? 'www19' : brand.slug === 'repilates' ? 'www12' : 'www14'}.a8.net/0.gif?a8mat=${brand.ctaUrl.split('a8mat=')[1]}`} width={1} height={1} alt="" style={{ border: 'none' }} />
                </div>
              )}
              {brand.slug === 'the-silk' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* CTAテキストリンク(E162842X)のインプレッション計測 */}
                  <img src="https://t.felmat.net/fmimp/X10489B.E162842X.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
                  {/* グループレッスン案件(X10489B)のバナー */}
                  <a href="https://t.felmat.net/fmcl?ak=X10489B.1.P150216J.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored">
                    <img src="https://t.felmat.net/fmimg/X10489B.P150216J.U1357808" width={336} height={280} alt="the SILK グループレッスン" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  {/* パーソナルレッスン案件(S12007S) */}
                  <p className="text-sm text-warm-700 mt-2">パーソナルレッスンを検討している方はこちら</p>
                  <a href="https://t.felmat.net/fmcl?ak=S12007S.1.B1657725.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored">
                    <img src="https://t.felmat.net/fmimg/S12007S.B1657725.U1357808" width={300} height={250} alt="the SILK パーソナルレッスン" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  <a href="https://t.felmat.net/fmcl?ak=S12007S.1.U165095J.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="text-sm underline text-warm-700">女性専用マシンピラティススタジオ : パーソナルレッスン【the SILK（ザ シルク）】</a>
                  <img src="https://t.felmat.net/fmimp/S12007S.U165095J.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === '24-7pilates' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* CTAテキストリンク(B1620582)のインプレッション計測 */}
                  <img src="https://t.felmat.net/fmimp/J11817X.B1620582.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.felmat.net/fmcl?ak=J11817X.1.6162671D.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={300} height={250} alt="24/7ピラティス" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/J11817X.6162671D.U1357808" />
                  </a>
                  <a href="https://t.felmat.net/fmcl?ak=J11817X.1.F162669F.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={320} height={50} alt="24/7ピラティス" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/J11817X.F162669F.U1357808" />
                  </a>
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'pilates-mee' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* CTAテキストリンク(9146255O)のインプレッション計測 */}
                  <img src="https://t.felmat.net/fmimp/F10273P.9146255O.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.felmat.net/fmcl?ak=F10273P.1.E1468735.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={300} height={250} alt="Pilates Mee（ピラティスミー）" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/F10273P.E1468735.U1357808" />
                  </a>
                  <a href="https://t.felmat.net/fmcl?ak=F10273P.1.T146871G.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={320} height={100} alt="Pilates Mee（ピラティスミー）" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/F10273P.T146871G.U1357808" />
                  </a>
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'dr-pilates' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* CTAテキストリンク(Z164554L)のインプレッション計測 */}
                  <img src="https://t.felmat.net/fmimp/Z11979O.Z164554L.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.felmat.net/fmcl?ak=Z11979O.1.V164586G.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={300} height={250} alt="Dr.PILATES(ドクターピラティス)" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/Z11979O.V164586G.U1357808" />
                  </a>
                  <a href="https://t.felmat.net/fmcl?ak=Z11979O.1.X164585F.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={320} height={50} alt="Dr.PILATES(ドクターピラティス)" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/Z11979O.X164585F.U1357808" />
                  </a>
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
            </section>
          )}

          {/* 店舗一覧 */}
          <section className="mb-10 scroll-mt-24" id="store-list">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">
              {/* 公式店舗数は「当サイト掲載数以上」のときだけ併記する。
                  2026-10-15 the SILK・zen place・BDC・ルルト・Rintosull は公式一覧と突き合わせ済み
                  （公式に無い店舗を削除し、ブランドページは同一店舗を1行に統合）。
                  the SILK 46≥43 / zen place 136≥113 / BDC 8≥6 / ルルト 100≥29 / Rintosull 270≥98。
                  他ブランドで逆転した場合に矛盾して見えないよう、条件は残す。 */}
              {brand.name}の店舗一覧{os && !os.countLabel && os.count >= stores.length ? `（全国${os.count}店舗${os.approx ? '以上' : ''}・当サイト掲載${stores.length}店舗）` : `（当サイト掲載${stores.length}店舗）`}
            </h2>
            {brand.storeListNote && <p className="text-sm text-warm-700 font-light leading-relaxed mb-4">{brand.storeListNote}</p>}
            <div className="bg-white border border-warm-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-warm-200 text-left">
                    <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider">店舗</th>
                    <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider whitespace-nowrap">都道府県</th>
                    <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider whitespace-nowrap">エリア</th>
                    <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider whitespace-nowrap">体験</th>
                  </tr>
                </thead>
                <tbody>
                  {stores.map((s) => (
                    <tr key={`${s.areaSlug}-${s.name}`} className="border-b border-warm-100 last:border-0">
                      <td className="px-4 py-3 text-warm-800">
                        {/* 店舗ページがある店はそこへ。無い店は従来どおりテキストのまま。
                            ⚠️ ブランド→店舗の導線が無かったため、店舗ページが孤立していた（2026-09-15） */}
                        {(() => {
                          const sp = storePageOf(s.name)
                          return sp ? (
                            <Link href={`/brands/${sp.urlSlug}/`} className="text-warm-700 underline decoration-warm-300 hover:text-warm-900">
                              {s.name}
                            </Link>
                          ) : (
                            s.name
                          )
                        })()}
                      </td>
                      <td className="px-4 py-3 text-warm-500 text-xs whitespace-nowrap">{PREF_OF[s.areaSlug]?.pref ?? '—'}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <Link href={`/area/${s.areaSlug}/`} className="text-warm-600 underline decoration-warm-300 hover:text-warm-900">
                          {s.areaName}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-warm-600 whitespace-nowrap">{s.trial ? (isFreeTrial(s.trial) ? '無料あり' : 'あり') : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
              ※店舗名に下線があるものは、その店舗の詳細ページ（料金・アクセス・口コミ要約）に移動します。エリア名をタップすると、そのエリアの比較ページで周辺スタジオとあわせて確認できます。
            </p>
          </section>

          {/* 公式の全店舗一覧（汎用・2026-10-28）。zen place・CLUB PILATES・LAVA。pilates K は下の専用ブロック */}
          {OFFICIAL_STORE_LISTS[brand.slug] && (() => {
            const cfg = OFFICIAL_STORE_LISTS[brand.slug]
            const L = cfg.list
            const prefs = Array.from(new Set(L.stores.map((s) => s.pref)))
            return (
              <section className="mb-10 scroll-mt-24" id="official-store-list">
                <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">
                  {brand.name}の{fill(cfg.heading, L)}
                </h2>
                <p className="text-sm text-warm-700 font-light leading-relaxed mb-4">{fill(cfg.intro, L)}店舗名から公式の店舗ページに移動します。</p>
                <nav aria-label="都道府県から探す" className="flex flex-wrap gap-2 mb-4">
                  {prefs.map((p) => (
                    <a key={p} href={`#os-${p}`} className="text-xs border border-warm-300 bg-white px-2.5 py-1 text-warm-700 hover:border-warm-600">
                      {p}（{L.stores.filter((s) => s.pref === p).length}）
                    </a>
                  ))}
                </nav>
                <div className="space-y-2">
                  {prefs.map((p, i) => {
                    const rows = L.stores.filter((s) => s.pref === p)
                    return (
                      <details key={p} id={`os-${p}`} open={i < 3} className="bg-white border border-warm-200 scroll-mt-24">
                        <summary className="px-4 py-3 text-sm text-warm-900 cursor-pointer">{p}の{brand.name}（{rows.length}店舗）</summary>
                        <div className="overflow-x-auto border-t border-warm-100">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-warm-200 text-left">
                                <th className="px-4 py-2 text-xs font-medium text-warm-500">店舗</th>
                                {L.extraLabel && <th className="px-4 py-2 text-xs font-medium text-warm-500">{L.extraLabel}</th>}
                                <th className="px-4 py-2 text-xs font-medium text-warm-500">{L.accessLabel ?? '最寄駅・アクセス（公式）'}</th>
                                <th className="px-4 py-2 text-xs font-medium text-warm-500">住所</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((s) => (
                                <tr key={s.url} className="border-b border-warm-100 last:border-0 align-top">
                                  <td className="px-4 py-2 text-warm-800">
                                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-900">{s.name}</a>
                                  </td>
                                  {L.extraLabel && <td className="px-4 py-2 text-warm-700 text-xs">{s.extra ?? '—'}</td>}
                                  <td className="px-4 py-2 text-warm-700">{s.access || '公式の一覧にアクセスの表記なし'}</td>
                                  <td className="px-4 py-2 text-warm-500 text-xs">{s.address}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </details>
                    )
                  })}
                </div>
                <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
                  {cfg.note}出典: <a href={L.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{L.sourceLabel}</a>（{L.asOf}確認）。開店・閉店や移転、料金の改定があるため、通う前に公式の店舗ページでご確認ください。
                </p>
              </section>
            )
          })()}

          {/* 公式の全店舗一覧（都道府県別・最寄駅）。「ピラティスK 店舗一覧」の語に対し、当サイト掲載分だけでなく公式の全店舗を見られるように（2026-10-27） */}
          {brand.slug === 'pilates-k' && (() => {
            const prefs = Array.from(new Set(PILATES_K_OFFICIAL_STORES.map((s) => s.pref)))
            return (
              <section className="mb-10 scroll-mt-24" id="official-store-list">
                <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">
                  {brand.name}の全店舗一覧（公式・都道府県別{PILATES_K_OFFICIAL_STORES.length}店舗と最寄駅）
                </h2>
                <p className="text-sm text-warm-700 font-light leading-relaxed mb-4">
                  公式の「スタジオ一覧」に載っている全{PILATES_K_OFFICIAL_STORES.length}店舗を、都道府県ごとに店舗名・最寄駅（またはバス停）・住所で掲載しています。最寄駅は各店舗の公式ページ「アクセス」欄の先頭の表記です（{PILATES_K_OFFICIAL_ASOF}確認）。店舗名から公式の店舗ページ（営業時間・料金・体験予約）に移動します。
                </p>
                <nav aria-label="都道府県から探す" className="flex flex-wrap gap-2 mb-4">
                  {prefs.map((p) => (
                    <a key={p} href={`#pk-${p}`} className="text-xs border border-warm-300 bg-white px-2.5 py-1 text-warm-700 hover:border-warm-600">
                      {p}（{PILATES_K_OFFICIAL_STORES.filter((s) => s.pref === p).length}）
                    </a>
                  ))}
                </nav>
                <div className="space-y-2">
                  {prefs.map((p, i) => {
                    const rows = PILATES_K_OFFICIAL_STORES.filter((s) => s.pref === p)
                    return (
                      <details key={p} id={`pk-${p}`} open={i < 3} className="bg-white border border-warm-200 scroll-mt-24">
                        <summary className="px-4 py-3 text-sm text-warm-900 cursor-pointer">{p}の{brand.name}（{rows.length}店舗）</summary>
                        <div className="overflow-x-auto border-t border-warm-100">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-warm-200 text-left">
                                <th className="px-4 py-2 text-xs font-medium text-warm-500">店舗</th>
                                <th className="px-4 py-2 text-xs font-medium text-warm-500">最寄駅・アクセス（公式）</th>
                                <th className="px-4 py-2 text-xs font-medium text-warm-500">住所</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((s) => (
                                <tr key={s.url} className="border-b border-warm-100 last:border-0 align-top">
                                  <td className="px-4 py-2 text-warm-800 whitespace-nowrap">
                                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-900">{s.name}</a>
                                  </td>
                                  <td className="px-4 py-2 text-warm-700">{s.access || '公式の店舗ページは駐車場の案内のみ（最寄駅の表記なし）'}</td>
                                  <td className="px-4 py-2 text-warm-500 text-xs">{s.address}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </details>
                    )
                  })}
                </div>
                <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
                  出典: <a href="https://pilates-k.jp/studio" target="_blank" rel="noopener noreferrer" className="underline">pilates K公式 スタジオ一覧</a>と各店舗ページ（{PILATES_K_OFFICIAL_ASOF}確認）。開店・閉店や移転があるため、通う前に公式の店舗ページでご確認ください。
                </p>
              </section>
            )
          })()}

          {/* Googleマップ口コミの集約（569件の資産をブランド単位で俯瞰。2026-08-27） */}
          <BrandReviewDigest brandSlug={brand.slug} brandName={brand.name} />

          {/* 口コミに多いテーマと注意点（2026-10-08・店舗要約を横断して整理。stores は STUDIO_REVIEWS のキー） */}
          {brand.reviewThemes && <BrandReviewThemes brandName={brand.name} themes={brand.reviewThemes} />}

          {/* 利用者の声（出典付き） */}
          {(brandVoices as Voice[]).filter((v) => v.brand === brand.slug).length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{brand.name}の口コミ・利用者の声（出典付き）</h2>
              <div className="space-y-4">
                {(brandVoices as Voice[]).filter((v) => v.brand === brand.slug).map((v, i) => (
                  <figure key={i} className="bg-white border border-warm-200 p-5">
                    <blockquote className="text-sm text-warm-700 font-light leading-relaxed">「{v.text}」</blockquote>
                    <figcaption className="mt-3 text-xs text-warm-500">
                      {v.attribute ? `${v.attribute}｜` : ''}出典:{' '}
                      <a href={v.source_url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">
                        {v.source_label}
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
                ※上記は各ブランドの公式サイト・公式発表等で公開されている利用者の声・調査結果からの引用です（原文まま・出典リンク付き）。当サイトが独自に取得した口コミではありません。感じ方には個人差があります。
              </p>
            </section>
          )}

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white border border-warm-200 p-5">
                  <p className="text-sm font-medium text-warm-900 mb-2">Q. {f.q}</p>
                  <p className="text-sm text-warm-700 font-light leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 情報引用元 */}
          {brand.officialRef && (
            <p className="text-xs text-warm-500 mb-10">
              情報引用元:{' '}
              <a href={brand.officialRef.url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">
                {brand.officialRef.label}
              </a>
            </p>
          )}

          {/* 関連リンク */}
          <section className="border-t border-warm-200 pt-8">
            <h2 className="text-sm font-medium text-warm-800 mb-4 uppercase tracking-[0.1em]">他のブランドも比較する</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {BRANDS.filter((b) => b.slug !== brand.slug).map((b) => (
                <Link key={b.slug} href={`/brands/${b.slug}/`} className="text-xs text-warm-600 hover:text-warm-900 border border-warm-200 px-3 py-1.5 hover:border-warm-400 transition-colors bg-white">
                  {b.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/brands/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">ブランド一覧へ</Link>
              <Link href="/area/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">エリアから探す</Link>
              <Link href="/articles/pilates-ryokin-hakusho/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">全国ピラティス料金白書2026</Link>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
