import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/kitahama/' },
  title: '【2026年10月最新】北浜・淀屋橋のピラティス6社を比較｜駅徒歩分・月額料金・体験料金',
  description: '北浜・淀屋橋のピラティススタジオ6社を、駅からの徒歩分数・月額料金・体験料金で比較しています。淀屋橋・北浜とも徒歩3〜5分圏のスタジオと、1駅隣の南森町のzen placeまで、各公式サイトで確認した値（2026年10月16日確認）です。',
  keywords: 'ピラティス,北浜,淀屋橋,大阪,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ビーキューブ（B-Cube）',
    officialUrl: 'https://www.bbbcube.com/',
    image: '/images/studios/bbbcube-kitahama.webp',
    price: '料金は公式サイトに掲載なし（無料コンサルティングで案内）',
    trial: '初めての方専用 無料コンサルティング',
    features: ['淀屋橋・北浜より徒歩3分', '完全予約制', 'プライベートセッション専用', '男性専用更衣室あり'],
    description: '淀屋橋駅・北浜駅から徒歩3分、伏見町KANBEビル3階の完全予約制ピラティス専門スタジオです。公式サイトでは「プライベートセッション専用スタジオ」と紹介しており、ピラティス専用の大型器具や姿勢分析の機械、男性専用更衣室を備えています。料金は公式サイトに掲載がなく、初めての方は無料コンサルティングから申し込む流れです（公式サイト・2026年10月16日確認）。',
    access: '大阪・淀屋橋／北浜より徒歩3分（公式表記）',
    address: '〒541-0044 大阪府大阪市中央区伏見町2-6-6 伏見町KANBEビル 3F',
    popularPlan: {
      name: 'プライベートセッション',
      description: 'ピラティス専用の大型器具を使う完全予約制のセッションです。',
      price: '公式サイトに掲載なし（無料コンサルティングで確認）',
    },
    options: [
      '初めての方専用 無料コンサルティング',
      'プライベートセッション（完全予約制）',
      '目的別トレーニング',
    ],
    userProfile: {
      purpose: ['姿勢改善', '体幹強化', 'リハビリ', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 10:00〜21:00／土日祝 10:00〜18:00（完全予約制）',
      closed: '年末年始',
      facilities: ['ピラティス専用大型器具', '姿勢分析の機械', 'ラウンジ', '男性専用更衣室'],
    },
  },
  {
    name: 'Pilates Bodywork Studio 大阪北浜淀屋橋本店',
    officialUrl: 'https://www.butterfly-jp.net/price',
    image: '/images/studios/pilates-bodywork-kitahama.webp',
    price: '月4回 11,000円（ライト4）〜／グループ1回券 3,850円（税込）',
    trial: 'プライベート体験 8,800円（税込・指名50分と同価格）。グループ体験の料金は公式で確認',
    features: ['北浜駅徒歩3分', 'グループ・プライベート', '月謝プランは全店共通価格', '東京・京都・名古屋にも店舗'],
    description: '北浜駅から徒歩3分、TAG北浜ビル2階のマシンピラティススタジオです。リフォーマーのグループレッスンとプライベートレッスン（50分）があります。月謝プランは東京・大阪・京都・名古屋の全店共通価格で、ライト4（月4回）11,000円・ライト6 12,980円・スタンダード（1日1回まで）15,290円・プラチナ（完全Free）19,800円などです。プラン登録料は3,300円、契約回数を超えた分は1回2,000円です（公式料金ページ・税込・2026年10月16日確認）。',
    access: '地下鉄「北浜駅」徒歩3分 / Osaka Metro御堂筋線「淀屋橋駅」徒歩6分',
    address: '大阪府大阪市中央区伏見町2-3-9 TAG北浜ビル2階',
    popularPlan: {
      name: 'ライト4（月4回）',
      description: 'リフォーマーなどのグループレッスンを月4回までです。',
      price: '月4回 11,000円（税込）',
    },
    options: [
      'プラン登録料 3,300円（税込）',
      'グループ 1回券 3,850円／3回券 9,450円（税込）',
      'プライベート 指名50分 8,800円／指名3回チケット 24,750円（税込）',
      '学割月4（25歳までの学生）8,800円（税込）',
    ],
    userProfile: {
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '柔軟性向上'],
    },
    basicInfo: {
      facilities: ['キャデラック', 'リフォーマー', 'シルクサスペンション', 'マスターストレッチ', 'マット'],
    },
  },
  {
    name: 'ピラティススタジオ進化',
    image: '/images/studios/studio-shinka-kitahama.webp',
    price: '月4回 17,160円',
    trial: '体験レッスンあり（要問合せ）',
    features: ['北浜駅徒歩3分', '姿勢改善特化', '定員6名', 'リフォーマーグループ'],
    description: '北浜駅から徒歩3分です。全国でも希少なリフォーマーのグループレッスンを提供する姿勢改善特化型ピラティス専門スタジオです。定員6名の少人数制で、50分で姿勢を変えるプログラムが特徴です。',
    access: '大阪メトロ堺筋線「北浜駅」徒歩3分',
    address: '大阪府大阪市中央区北浜（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月謝制（月4回）',
      description: '定員6名の少人数リフォーマーグループレッスンです。姿勢改善に特化しています。',
      price: '月4回 17,160円（税込）',
    },
    options: [
      '月謝制（月4回 17,160円）',
      '都度利用（1回 6,600円）',
      '入会金 22,000円（先着5名 9,900円）',
      'プライベートレッスン',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', '腰痛改善', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室'],
    },
  },
  {
    name: 'Ua pilates 北浜（韓国式ピラティス）',
    officialUrl: 'https://uapilates.com/',
    image: '/images/studios/ua-pilates-kitahama.webp',
    price: 'パーソナル 月2回 21,000円／月4回 38,000円（税込）',
    trial: '初回体験 13,000円（10月31日まで 5,000円のキャンペーン）',
    features: ['パーソナル専門', '淀屋橋・北浜とも徒歩約5分', '30分のショートパーソナル', '1対2のセミパーソナル'],
    description: '淀屋橋駅・北浜駅から徒歩約5分、平野町のイシモトビル9階にある韓国式ピラティスのスタジオです。スタンダードパーソナル（セッション50分＋着替え10分）は月2回21,000円・月4回38,000円、30分のショートパーソナルは月4回20,000円、知り合い同士で受ける1対2のセミパーソナルは5回券35,000円です。入会金は22,000円です（10月31日までのキャンペーンで0円）（公式サイト・税込・2026年10月16日確認）。',
    access: 'Osaka Metro御堂筋線・京阪本線「淀屋橋駅」徒歩約5分 / Osaka Metro堺筋線「北浜駅」徒歩約5分 / 「堺筋本町駅」徒歩約7分',
    address: '〒541-0046 大阪府大阪市中央区平野町2丁目2-8 イシモトビル 9F',
    popularPlan: {
      name: 'スタンダードパーソナル 月4回コース',
      description: 'セッション50分＋着替え10分です。1レッスンあたり9,500円です。',
      price: '月4回 38,000円（税込）',
    },
    options: [
      '入会金 22,000円（税込・10月31日まで0円）',
      'ショートパーソナル（30分）月2回 11,000円〜月6回 30,000円',
      'セミパーソナル（1対2）5回券 35,000円',
      'マタニティピラティス',
    ],
    userProfile: {
      purpose: ['ボディメイク', '姿勢改善', '美脚', 'しなやかな体づくり'],
    },
    basicInfo: {
      facilities: ['マット・道具はスタジオに完備'],
    },
  },
  {
    name: 'zen place pilates 南森町',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ月4回 9,625円〜（税込・グレード02）',
    trial: 'マットグループ初回 1,000円',
    features: ['男女共用', '他店利用可', 'グレード02スタジオ', '南森町駅4B出口徒歩1分'],
    description: '北浜駅から堺筋線で1駅の南森町駅、4B出口から徒歩1分です。zen placeの料金はスタジオのグレードで異なり、南森町はグレード02です（マットグループ月4回 9,625円・フリー 14,960円・入会金 22,000円・税込）。グループ店は他店利用可能です。体験当日の入会で入会金が無料になります（公式スタジオページ・料金ページ・2026年10月16日確認）。',
    access: '谷町線・堺筋線、JR東西線「南森町駅」4B出口 徒歩1分（北浜駅から堺筋線で1駅）',
    address: '大阪府大阪市北区天神橋2丁目3-16 AXIS南森町II 4階',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループのフリープランです。グループ店の他店利用も可能です。',
      price: '月額 14,960円（税込・グレード02）',
    },
    options: [
      'マットグループ月4回 9,625円（税込）',
      '入会金 22,000円（体験当日入会で無料）',
      '設備運営管理費 月550円',
      'プライベート体験 8,250円（税込）',
    ],
    userProfile: {
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 9:00〜21:30／土日祝 7:00〜16:00',
      facilities: ['男女別更衣室', '鍵付きロッカー'],
    },
  },
  {
    name: 'PILATES STUDIO JOODY 本町スタジオ',
    officialUrl: 'https://www.pilates-studio-joody.com/joodyhonmachi',
    price: 'パーソナル マンスリー4 31,680円（税込・1回7,920円）',
    trial: 'パーソナル体験 7,920円〜／セミパーソナル体験 5,280円〜（1名・税込）',
    features: ['女性専用', 'パーソナル・ペアのセミパーソナル', '淀屋橋駅13号出口徒歩5分', 'STOTT PILATES®インストラクター'],
    description: '淀屋橋駅13号出口・肥後橋駅6号出口から徒歩5分、平野町4丁目のマシンピラティススタジオです。カナダmerithew社のピラティスマシンを備え、STOTT PILATES®インストラクターが指導します。女性専用ですが、ご夫婦・パートナーとのペアのセミパーソナルは利用できます。パーソナル月会費はマンスリー2 15,840円・マンスリー3 23,760円・マンスリー4 31,680円です。入会金11,000円は体験日の入会で50%OFFです（公式店舗ページ・料金ページ・税込・2026年10月16日確認。体験料金は担当インストラクターにより異なります）。',
    access: '淀屋橋駅13号出口 徒歩5分 / 肥後橋駅6号出口 徒歩5分 / 本町駅2号出口 徒歩10分',
    address: '〒541-0046 大阪府大阪市中央区平野町4丁目8-5 RE013-504',
    popularPlan: {
      name: 'パーソナル マンスリー4',
      description: 'マンツーマンのマシンピラティスを月4回です。',
      price: '月4回 31,680円（税込・1回7,920円）',
    },
    options: [
      'マンスリー2 15,840円／マンスリー3 23,760円（税込）',
      '入会金 11,000円（体験日の入会で50%OFF）',
      '非会員のビジター パーソナル 9,900円〜（税込）',
    ],
    userProfile: {
      genderRatio: '女性専用（ペアのセミパーソナルは男性パートナーも可）',
      purpose: ['姿勢改善', 'ボディメイク', '体の使い方の改善'],
    },
    basicInfo: {
      facilities: ['merithew社のピラティスマシン'],
    },
  },
]

const faqs = [
  {
    question: '淀屋橋の近くにピラティススタジオはありますか？',
    answer: 'あります。北浜駅と淀屋橋駅は徒歩数分の隣接エリアで、このページで比較しているスタジオはどちらの駅からも通えます。公式の徒歩分数では、ビーキューブが淀屋橋・北浜とも徒歩3分、Ua pilatesが両駅とも徒歩約5分、PILATES STUDIO JOODY 本町スタジオが淀屋橋駅13号出口から徒歩5分、Pilates Bodywork Studioが淀屋橋駅から徒歩6分です。「淀屋橋 ピラティス」で探している方も、北浜エリアのスタジオを候補に料金・体験レッスンを比較するのがおすすめです。',
  },
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。北浜・淀屋橋エリアのスタジオはほとんどが初心者歓迎です。ビーキューブは初めての方向けの無料コンサルティングから始まり、Ua pilatesやPILATES STUDIO JOODYはマンツーマンなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。北浜エリアはマシンピラティス専門スタジオが充実しています。',
  },
  {
    question: '北浜・淀屋橋のピラティスの料金相場は？',
    answer: '公式料金（税込）では、グループの月4回が9,625円（zen place 南森町・マット）〜11,000円です（Pilates Bodywork ライト4）。マンツーマンは1回あたり7,920円（JOODY マンスリー4）〜10,500円（Ua 月2回）です。ピラティススタジオ進化の月4回17,160円は公式サイトで確認できていません。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。zen placeはマットグループの初回体験が1,000円、Ua pilatesは初回体験13,000円（10月31日まで5,000円）です。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。zen placeはヨガスタジオも運営しており、両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: '公式に男性の利用について記載があるのは、zen place南森町（男女共用）とビーキューブ（男性専用更衣室あり）です。PILATES STUDIO JOODYは女性専用です（ペアのセミパーソナルはパートナーの男性も可）。その他のスタジオは体験予約時に確認してください。',
  },
  {
    question: '仕事帰りに通えるスタジオは？',
    answer: 'ビーキューブは平日21時まで（完全予約制）、zen place南森町は平日21時30分までです（公式表記）。北浜・淀屋橋はオフィス街なので仕事帰りに通いやすいスタジオが多いです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続することをおすすめします。',
  },
]

export default function KitahamaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '北浜・淀屋橋', url: 'https://biyori-pilates.com/area/kitahama/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月16日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス北浜・淀屋橋おすすめ6選<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較
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
              <span className="text-warm-600">北浜・淀屋橋</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="北浜・淀屋橋" />


        <TableOfContents areaName="北浜・淀屋橋" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、北浜・淀屋橋エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>北浜・淀屋橋でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>オフィス街で仕事帰りに通えるスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>駅近で通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="北浜・淀屋橋" />
        <AreaMarketComparison studios={studios} areaName="北浜・淀屋橋" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              北浜・淀屋橋のおすすめピラティススタジオ6選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              北浜・淀屋橋のピラティス料金相場（2026年10月16日確認）
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
                    <td className="px-4 py-3 font-medium">グループレッスン（月4回）</td>
                    <td className="px-4 py-3">9,625円〜11,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 7,920円〜10,500円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料（ビーキューブのコンサルティング）〜13,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              北浜・淀屋橋はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。掲載6店のうち4店はマンツーマン中心で、グループで通えるのは Pilates Bodywork Studio と zen place です。近隣の本町エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="yodoyabashi">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">
              淀屋橋駅周辺でピラティスを探すなら
            </h2>
            <p className="text-warm-600 leading-relaxed text-center mb-8 max-w-2xl mx-auto">
              北浜駅と淀屋橋駅は御堂筋・土佐堀通をはさんで隣接する徒歩数分のエリアで、スタジオはどちらの駅からも通える距離に集まっています。「淀屋橋 ピラティス」「淀屋橋駅 ピラティス」で探している場合も、このページで比較している北浜・淀屋橋エリアのスタジオがそのまま候補になります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">北浜・淀屋橋の両方から通えるスタジオ</h3>
                <p className="text-warm-600 leading-relaxed">
                  ビーキューブ（伏見町）は公式に「淀屋橋／北浜より徒歩3分」、Ua pilates（平野町2丁目）は両駅とも徒歩約5分と案内しています。Pilates Bodywork Studio（伏見町）は北浜駅3分・淀屋橋駅6分で北浜寄り、PILATES STUDIO JOODY 本町スタジオ（平野町4丁目）は淀屋橋駅13号出口から5分で淀屋橋・肥後橋寄りです。
                </p>
              </div>
              <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">淀屋橋エリアで選ぶポイント</h3>
                <p className="text-warm-600 leading-relaxed">
                  淀屋橋・北浜はオフィスワーカーが多いエリアのため、朝や仕事帰りの時間帯に予約が集中しやすい傾向があります。通いたい時間帯にレッスン枠があるか、マシン（リフォーマー）中心かマット中心か、体験レッスンの料金を、北浜エリアのスタジオとあわせて比較するのがおすすめです。
                </p>
              </div>
            </div>
            <p className="text-center mt-8">
              <a href="#studios" className="inline-block bg-warm-800 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-warm-900 transition">北浜・淀屋橋のスタジオを料金で比較する</a>
            </p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              北浜・淀屋橋でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">大阪メトロ堺筋線「北浜駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  北浜・淀屋橋エリアのスタジオは北浜駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。北浜駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  北浜・淀屋橋はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  入会金が体験当日の入会で無料・半額になるスタジオ（zen place・JOODY）や、期間限定で入会金0円にしているスタジオ（Ua pilates・10月31日まで）があります。キャンペーンの条件や期限は変わるので、申し込む前に公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  北浜・淀屋橋エリアだけでなく、近隣の<Link href="/area/honmachi/" className="text-warm-700 underline hover:text-warm-900">本町</Link>、<Link href="/area/umeda/" className="text-warm-700 underline hover:text-warm-900">梅田</Link>、<Link href="/area/shinsaibashi/" className="text-warm-700 underline hover:text-warm-900">心斎橋</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-white" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              体験レッスン当日の持ち物・服装ガイド
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。ジーンズやスカートは適していません。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に必要です。自動販売機がないスタジオもあるため、持参をおすすめします。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。マシンに敷くタオルは、スタジオで用意されていることが多いです。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、靴下の着用が必須のスタジオが多数あります。グリップソックスが適しています。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。ピラティスは脚を大きく動かすエクササイズが多いため、伸縮性のある素材が適しています。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。手ぶらで体験可能な場合もあるので事前にご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>北浜・淀屋橋エリアの豆知識：</strong>北浜・淀屋橋はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオをお選びください。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円台で通えるスタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place 南森町（マット月4回 9,625円）</li>
                  <li className="text-warm-700">• Pilates Bodywork Studio（ライト4 月4回 11,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・女性限定</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• PILATES STUDIO JOODY 本町スタジオ（女性専用）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩3分以内です（公式表記）。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ビーキューブ（淀屋橋・北浜より徒歩3分）</li>
                  <li className="text-warm-700">• Pilates Bodywork Studio（北浜駅徒歩3分）</li>
                  <li className="text-warm-700">• zen place 南森町（南森町駅4B出口徒歩1分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              おすすめの期間・頻度
            </h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place 南森町（9,625円/月4回）</li>
                  <li>• Pilates Bodywork Studio（11,000円/ライト4）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜18,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  少人数制マシンレッスンです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティススタジオ進化（17,160円）</li>
                  <li>• zen place フリー（14,960円）</li>
                  <li>• Pilates Bodywork スタンダード（15,290円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">1回 7,920円〜</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマンで集中的に指導を受けられます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• PILATES STUDIO JOODY（マンスリー4 31,680円）</li>
                  <li>• Ua pilates（月4回 38,000円）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。北浜エリアは姿勢改善に特化したスタジオが多いのが特徴です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  北浜・淀屋橋の掲載店では、グループ月4回が9,625円〜11,000円、マンツーマンは1回あたり7,920円〜です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen placeはマットグループ初回1,000円、ビーキューブは無料コンサルティング、Ua pilatesは初回体験13,000円（10月31日まで5,000円）です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  北浜・淀屋橋は大阪のビジネス街です。ビーキューブは淀屋橋・北浜より徒歩3分、Pilates Bodywork Studioは北浜駅徒歩3分、Uaは両駅徒歩約5分、JOODYは淀屋橋駅徒歩5分です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
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
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、北浜・淀屋橋エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、北浜・淀屋橋にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページの情報を、スタジオ選びにお役立てください。
            </p>
            <p className="text-warm-700 font-medium text-center">
              本ページが、ピラティススタジオ選びの参考になれば幸いです。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンのご予約
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              体験はzen placeのマット1,000円や、ビーキューブの無料コンサルティングからです。<br />
              まずは体験レッスンへの参加をおすすめします。
            </p>
            <Link
              href="/#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
              <AreaModifierSections studios={studios} areaName="北浜・淀屋橋" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kitahama" areaName="北浜・淀屋橋" />

      <RelatedAreas currentSlug="kitahama" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
