import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import Script from 'next/script'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/takarazuka/' },
  title: '【2026年8月最新】宝塚のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '宝塚エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,宝塚,兵庫,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,宝塚駅',
}

const studios = [
  {
    name: 'ピラティスアヴニール 宝塚店',
    image: '/images/studios/pilates-avenir-shinosaka.webp',
    price: '月額 14,800円〜',
    trial: '体験レッスン 2,980円（90分）',
    features: ['宝塚駅徒歩2分', '完全個室', 'マンツーマン', '子連れOK'],
    description: '宝塚駅から徒歩2分の完全個室パーソナルマシンピラティススタジオ。マンツーマンで一人ひとりの体に合わせたオーダーメイドプログラムを提供。朝7時から夜23時まで営業で、お子様連れも歓迎。',
    access: '阪急宝塚本線「宝塚駅」徒歩2分 / JR福知山線「宝塚駅」徒歩2分',
    address: '兵庫県宝塚市川面5丁目4-3 ヤマダビル2F',
    popularPlan: {
      name: 'パーソナルピラティス月4回',
      description: '完全個室でのマンツーマンマシンピラティス。体の状態に合わせたオーダーメイドプログラム。',
      price: '月額 14,800円〜（税込）',
    },
    options: [
      '体験レッスン（2,980円/90分）',
      '月4回プラン',
      '月8回プラン',
      '駐車場完備',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'ボディメイク', '腰痛改善', '産後ケア'],
    },
    basicInfo: {
      hours: '7:00〜23:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', '更衣室', '駐車場'],
    },
  },
  {
    name: 'PALES（パレス）宝塚店',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月額 要問い合わせ',
    trial: '体験レッスン 無料（キャンペーン中）',
    features: ['宝塚南口駅徒歩6分', 'ピラティス＋トレーニング', '駐車場無料', '姿勢改善特化'],
    description: 'パーソナルトレーニング＆ピラティスを組み合わせた総合ボディケアスタジオ。宝塚南口駅から徒歩6分、宝塚駅から徒歩9分。姿勢改善からキックボクシングまで幅広いメニュー。駐車場完備で車での来店も便利。',
    access: '阪急今津線「宝塚南口駅」徒歩6分 / 阪急宝塚本線「宝塚駅」徒歩9分',
    address: '兵庫県宝塚市湯本町5-11',
    popularPlan: {
      name: 'パーソナルトレーニング＆ピラティス',
      description: 'ピラティスとトレーニングを組み合わせた総合プログラム。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験レッスン（通常4,000円→キャンペーン無料）',
      'パーソナルピラティス',
      'キックボクシング',
      '駐車場・駐輪場無料',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢改善', 'ダイエット', '体幹強化', '運動不足解消'],
    },
    basicInfo: {
      hours: '月〜土 8:00〜22:00 / 日 9:00〜20:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'トレーニングマシン', '更衣室', '駐車場', '駐輪場'],
    },
  },
  {
    name: 'studio Y i-grek（スタジオイグレック）',
    image: '/images/studios/club-pilates.webp',
    price: '1回 要問い合わせ',
    trial: '体験レッスンあり（要問い合わせ）',
    features: ['宝塚南口駅徒歩5分', '完全予約制', 'バレエ向けピラティス', 'オーダーメイド'],
    description: '宝塚市にあるマシンピラティスプライベートスタジオ。姿勢改善からバレエ・ダンスのためのピラティスまで、専用マシンを使用した完全予約制のプライベートレッスンを提供。一人ひとりの体と目的に合わせたオーダーメイドプログラム。',
    access: '阪急今津線「宝塚南口駅」徒歩5分 / 阪急宝塚本線「宝塚駅」徒歩7分',
    address: '兵庫県宝塚市中州1丁目3-20 ポトラックビル202',
    popularPlan: {
      name: 'プライベートレッスン',
      description: 'マシンピラティスの完全プライベートレッスン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      'プライベートレッスン',
      'バレエ・ダンス向けピラティス',
      '姿勢改善プログラム',
      '完全予約制',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性95% / 男性5%',
      purpose: ['姿勢改善', 'バレエ・ダンス向上', '腰痛改善', '柔軟性向上'],
    },
    basicInfo: {
      hours: '完全予約制（公式サイトでご確認ください）',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル'],
    },
  },
  {
    name: 'マシンピラティスサロン Jiku',
    image: '/images/studios/pilates-mee.webp',
    price: '要問い合わせ',
    trial: '体験レッスンあり',
    features: ['女性専用', '完全個室', '初心者専門', 'パーソナル'],
    description: '宝塚市逆瀬川エリアにある女性専用・完全個室のマシンピラティスサロン。初心者専門のやさしいレッスンが特徴。パーソナルトレーニング形式で一人ひとりに寄り添った指導を提供。',
    access: '阪急今津線「逆瀬川駅」徒歩10分',
    address: '兵庫県宝塚市伊孑志2-16-10-1',
    popularPlan: {
      name: 'パーソナルマシンピラティス',
      description: '女性専用・完全個室でのマンツーマンレッスン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験レッスン',
      '体験当日入会で入会金無料',
      'パーソナルレッスン',
      '完全個室',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ダイエット', 'ボディメイク', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', '完全個室'],
    },
  },
  {
    name: 'PILATES AURA（ピラティスアウラ）宝塚',
    image: '/images/studios/rintosull.webp',
    price: '要問い合わせ',
    trial: '体験レッスンあり',
    features: ['宝塚南口駅徒歩6分', 'アットホーム', '少人数制', 'マシンピラティス'],
    description: '宝塚南口駅から徒歩6分のアットホームなマシンピラティススタジオ。少人数制のグループレッスンやプライベートレッスンで、初心者から経験者まで丁寧に指導。',
    access: '阪急今津線「宝塚南口駅」徒歩6分',
    address: '兵庫県宝塚市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティスレッスン',
      description: '少人数制のマシンピラティスグループレッスン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験レッスン',
      'グループレッスン',
      'プライベートレッスン',
      '少人数制',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室'],
    },
  },
  {
    name: 'むすびピラティス宝塚',
    image: '/images/studios/pilates-studio-dep.webp',
    price: '要問い合わせ',
    trial: '体験レッスンあり（要問い合わせ）',
    features: ['女性専用', 'ボディメイク専門', 'マスターストレッチ', '完全予約制'],
    description: '宝塚駅から徒歩約10分の女性専用ボディメイク専門スタジオ。マシンピラティスとマスターストレッチを組み合わせた独自プログラム。「しなやかな女性らしい体づくり」をコンセプトに、完全予約制のプライベートレッスンを提供。',
    access: '阪急宝塚本線「宝塚駅」徒歩約10分',
    address: '兵庫県宝塚市御殿山（詳細は予約確定後にご案内）',
    popularPlan: {
      name: 'マシンピラティス＆マスターストレッチ',
      description: 'ボディメイクに特化したオーダーメイドプライベートレッスン。',
      price: '詳細はお問い合わせください',
    },
    options: [
      'マシンピラティスレッスン',
      'マスターストレッチ',
      'パーソナルトレーニング',
      '完全予約制',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'しなやかな体づくり', '姿勢改善', '柔軟性向上'],
    },
    basicInfo: {
      hours: '完全予約制（お問い合わせください）',
      closed: '不定休',
      facilities: ['リフォーマー', 'マスターストレッチ', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: '宝塚でピラティス初心者におすすめのスタジオは？',
    answer: 'マシンピラティスサロンJikuは初心者専門のスタジオで、運動が苦手な方でも安心。ピラティスアヴニール宝塚店はマンツーマンの丁寧な指導で初心者に好評です。',
  },
  {
    question: '宝塚のピラティスの料金相場は？',
    answer: 'パーソナルレッスンが月4回で14,800円〜が目安。グループレッスンはそれより安価です。宝塚はパーソナル専門のスタジオが多く、一人ひとりに合わせた指導が受けられるのが特徴です。',
  },
  {
    question: '宝塚駅から近いスタジオはどこですか？',
    answer: 'ピラティスアヴニール宝塚店は宝塚駅から徒歩2分で最寄り。PALES宝塚店は宝塚南口駅から徒歩6分、宝塚駅から徒歩9分です。',
  },
  {
    question: '女性専用のスタジオはありますか？',
    answer: 'マシンピラティスサロンJikuとむすびピラティス宝塚が女性専用です。完全個室のプライベートレッスンなので、人目を気にせず集中できます。',
  },
  {
    question: '車で通えるスタジオはありますか？',
    answer: 'ピラティスアヴニール宝塚店とPALES宝塚店は駐車場を完備しています。PALES宝塚店は駐車料金も店舗負担で無料。宝塚は住宅街のスタジオも多いため、車でのアクセスが便利です。',
  },
  {
    question: '体験レッスンの料金は？',
    answer: 'ピラティスアヴニール宝塚店は90分2,980円。PALES宝塚店はキャンペーン中で60分無料。各スタジオで体験内容や料金が異なるので公式サイトで最新情報を確認しましょう。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。宝塚はマシンピラティス専門のスタジオが充実しています。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめ。効果を実感するには最低2〜3ヶ月の継続が大切です。宝塚のスタジオは完全予約制が多いので、自分のペースで通いやすいです。',
  },
  {
    question: '宝塚歌劇観劇の前後にピラティスを受けられますか？',
    answer: '宝塚大劇場に近いスタジオもあります。ピラティスアヴニール宝塚店は朝7時から営業しているので、観劇前の朝活としてもおすすめです。',
  },
  {
    question: '子連れで通えるスタジオはありますか？',
    answer: 'ピラティスアヴニール宝塚店はお子様連れOK。完全個室のプライベート空間なので、お子様と一緒でも安心してレッスンを受けられます。',
  },
]

export default function TakarazukaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '宝塚', url: 'https://pilates-biyori.com/area/takarazuka/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月25日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス宝塚おすすめ6選！<br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">宝塚</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="宝塚" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">
              こんにちは。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              Pilates-Biyori編集部です！
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              あなたは、
            </p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">
              「ピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「宝塚で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、宝塚エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>宝塚でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>完全個室のプライベートレッスンを受けたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>女性専用のスタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="宝塚" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              宝塚のおすすめピラティススタジオ6選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Purpose-based Recommendations */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">初心者向け</h3>
                <p className="text-warm-600 text-sm mb-4">
                  運動が苦手でも安心のスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Jiku（初心者専門）</li>
                  <li className="text-warm-700">• ピラティスアヴニール（マンツーマン）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Jiku（完全個室・女性専用）</li>
                  <li className="text-warm-700">• むすびピラティス（ボディメイク専門）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩5分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスアヴニール（宝塚駅 徒歩2分）</li>
                  <li className="text-warm-700">• studio Y i-grek（南口駅 徒歩5分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-warm-50" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              宝塚のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-warm-800 text-white">
                    <th className="px-4 py-3 text-left">種別</th>
                    <th className="px-4 py-3 text-left">料金相場</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン（月4回）</td>
                    <td className="px-4 py-3">14,800円〜30,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">グループレッスン</td>
                    <td className="px-4 py-3">1回 3,000円〜6,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜2,980円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              宝塚エリアはパーソナル専門のプライベートスタジオが多いのが特徴です。大手チェーンの出店が少ないぶん、一人ひとりに寄り添った質の高い指導が受けられます。大阪や神戸の都心部と比べると選択肢は限られますが、地域密着型のスタジオならではのアットホームな雰囲気が魅力。車で通える駐車場完備のスタジオも多く、宝塚の住環境に合った通い方ができます。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              宝塚でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">プライベートスタジオは完全予約制が多い</h3>
                <p className="text-warm-600 leading-relaxed">
                  宝塚エリアのスタジオはほとんどが完全予約制のプライベートスタジオです。当日の飛び込みは基本的にできないため、体験レッスンも事前予約が必須。公式サイトやSNSで空き状況を確認し、早めに予約を取りましょう。人気のインストラクターは予約が埋まりやすいので、定期的に通う場合は曜日・時間を固定するのがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅街のスタジオはアクセス方法を事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  宝塚は閑静な住宅街にスタジオが点在しているため、駅から徒歩10分以上かかる場合もあります。初回訪問時は地図アプリで経路を確認しておきましょう。駐車場の有無や駐輪場の場所も事前にチェックすると安心です。バスやタクシーの利用が便利なケースもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金体系がスタジオごとに異なるため比較が重要</h3>
                <p className="text-warm-600 leading-relaxed">
                  宝塚エリアのスタジオは個人経営が多く、料金体系はスタジオごとに大きく異なります。月額制、回数券制、都度払い制など様々。入会金や体験レッスンの有無もスタジオによって違うので、必ず複数のスタジオを比較してから決めましょう。公式サイトに料金が掲載されていない場合は、直接問い合わせが必要です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも視野に入れて選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  宝塚エリアだけでなく、近隣の<Link href="/area/nishinomiya/" className="text-warm-700 underline hover:text-warm-900">西宮</Link>、<Link href="/area/sannomiya/" className="text-warm-700 underline hover:text-warm-900">三宮</Link>、<Link href="/area/umeda/" className="text-warm-700 underline hover:text-warm-900">梅田</Link>エリアにも多数のスタジオがあります。阪急宝塚線を利用すれば梅田まで約30分。通勤・通学ルート上のスタジオも検討すると、選択肢が大きく広がります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-warm-50" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              体験レッスン当日の持ち物・服装ガイド
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。ジーンズやスカートはNG。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。自販機がないスタジオもあるため持参が安心。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。マシンに敷くタオルはスタジオで用意されることが多い。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは靴下着用が必須のスタジオが多数。グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。ピラティスは脚を大きく動かすポーズが多いため、ストレッチの効く素材が必須です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。手ぶらで体験可能な場合もあるので事前に確認しましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>宝塚エリアの豆知識：</strong>宝塚はプライベートスタジオが多いため、更衣室が簡易的な場合があります。着替えやすい服装で行くか、事前に更衣スペースの有無を確認しましょう。車で通う場合は駐車場の場所と台数も要チェック。宝塚大劇場周辺は公演日に混雑するため、時間に余裕を持って出発するのがおすすめです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-white" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないスタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。宝塚はパーソナル専門が多いので、目的に合わせたオーダーメイドプログラムが組めます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  宝塚のパーソナルレッスン相場は月4回で14,800円〜。スタジオごとに料金体系が異なるため、体験レッスン時に詳しく確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  PALES宝塚店はキャンペーン中で無料体験可能。ピラティスアヴニールは90分2,980円で体験可能。まずは気になるスタジオの体験に行きましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  宝塚は阪急宝塚本線・今津線が通るエリア。駅からの距離だけでなく、駐車場の有無や営業時間も確認。ピラティスアヴニールは朝7時〜夜23時と幅広い営業時間が魅力。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-warm-50" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              よくある質問
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は宝塚エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              宝塚はパーソナル専門のプライベートスタジオが充実しており、一人ひとりに寄り添った質の高いレッスンが受けられるのが魅力です。宝塚歌劇の街ならではの上品な雰囲気の中で、自分磨きの時間を過ごしてみてはいかがでしょうか。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりのピラティススタジオが見つかることを願っています。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンを予約しよう
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン無料〜2,980円。<br />
              まずは気軽に体験してみましょう。
            </p>
            <Link
              href="/#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="takarazuka" areaName="宝塚" />

      <RelatedAreas currentSlug="takarazuka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
