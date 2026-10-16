import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/esaka/' },
  title: '【2026年10月最新】江坂のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '江坂エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,江坂,吹田,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 江坂',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 9,625円〜',
    trial: '体験レッスンあり（当日入会で入会金無料）',
    features: ['マシン完備', '男性利用可', '江坂駅徒歩1分', '全国他店利用可'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオです。御堂筋線江坂駅から徒歩1分の好立地です。マットグループ・リフォーマーグループ・プライベートレッスンと豊富なレッスン形式です。男性も受講可能です。',
    access: '御堂筋線「江坂駅」徒歩1分',
    address: '大阪府吹田市豊津町9-44 ハートランド江坂 5F',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットピラティスのグループレッスンです。全国のzen placeスタジオで他店利用可能です。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'マットグループフリー（月額14,960円）',
      'リフォーマーグループ月4回（月額15,400円）',
      'プライベート月4回（月額33,880円〜）',
      '入会金 22,000円（体験当日入会で無料）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 7:00〜16:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'トラピーズテーブル', 'コンボチェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'CLUB PILATES 江坂店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=62359',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 14,300円／月8回 18,700円／通い放題 26,950円（公式店舗ページ・税表記なし）',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '15種類の器具', '江坂駅近', '男性利用可'],
    description: '世界最大級のマシンピラティスブランドです。江坂駅近くの好立地です。最大12名の少人数制グループレッスンで、15種類のマシン・器具を1人1台完備しています。8つのプログラムと4段階のレベル分けで初心者から上級者まで対応しています。',
    access: '御堂筋線「江坂駅」近く',
    address: '大阪府吹田市江の木町1-39 セーレ江坂 4F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスンです。4段階のレベル分けで安心です。',
      price: '月4回 14,300円（税表記なし）',
    },
    options: ['月8回 18,700円', '通い放題 26,950円', '入会金 5,500円（税込）・事務手数料 2,200円（税込）', '料金は公式の店舗ページ（2026年10月14日確認）'],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'Rintosull 江坂店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月4回 8,800円〜',
    trial: 'キャンペーン価格あり（3ヶ月 月額1,980円）',
    features: ['女性専用', 'LAVA系列', '江坂駅徒歩1分', '割安'],
    description: 'ホットヨガLAVA系列のマシンピラティス専門スタジオです。江坂駅4番出口から徒歩1分です。月4回8,800円とリーズナブルです。2店舗通い放題プラン13,800円やプレミアムフリーフルタイム16,800円でLAVA等系列店も利用可能です。',
    access: '御堂筋線・北大阪急行「江坂駅」4番出口 徒歩1分',
    address: '大阪府吹田市豊津町10-2 江坂T・Kビル 2F',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'マシンピラティス月4回です。1回あたり2,200円と割安です。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '2店舗通い放題プラン（月額13,800円）',
      'プレミアムフリーフルタイム（月額16,800円・LAVA等全店利用可）',
      '運営管理費 毎月680円',
      '新規入会キャンペーン（3ヶ月 月額1,980円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜22:30 / 土 7:00〜20:30',
      closed: '毎週日曜日',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'ピラティスアクス 江坂店',
    image: '/images/studios/pilates-axe.webp',
    price: '月4回 9,680円〜',
    trial: '体験レッスン 1,000円',
    features: ['バーチャルレッスン付き', '24時間ジム併設', '江坂駅徒歩1分', '割安'],
    description: 'マシンピラティスとバーチャルレッスン・24時間ジムを組み合わせた複合型スタジオです。江坂駅8番出口から徒歩1分です。ピラティス会員なら月4回のレッスンに加えてバーチャル通い放題です。グランドピラティス会員なら24時間ジムも利用可能です。',
    access: '御堂筋線・北大阪急行「江坂駅」8番出口 徒歩1分',
    address: '大阪府吹田市江の木町1-39 セーレ江坂 4F',
    popularPlan: {
      name: 'ピラティス会員（月4回+バーチャル通い放題）',
      description: 'マシンピラティス月4回+バーチャルレッスン通い放題のお得プランです。',
      price: '月額 9,680円（税込）',
    },
    options: [
      'ピラティス会員ライト 月2回+バーチャル月4回（8,580円）',
      'グランドピラティス会員 月4回+バーチャル+24時間ジム（10,780円）',
      '体験レッスン（1,000円）',
      'バーチャルレッスン24時間利用可',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '運動不足解消', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '平日 9:30-13:30/18:00-21:00 / 土日祝 9:30-16:00',
      closed: '毎週金曜（ノースタッフデー）',
      facilities: ['リフォーマーマシン', 'バーチャルレッスン設備', '24時間ジム', '更衣室'],
    },
  },
  {
    name: 'La pilates 江坂店',
    image: '/images/studios/la-pilates.webp',
    price: '月1回 12,000円〜',
    trial: '無料体験あり',
    features: ['女性専用', '整体×ピラティス', '江坂駅徒歩2分', '産前産後可'],
    description: '女性専用の整体×マシンピラティス融合スタジオです。江坂駅から徒歩2分です。姿勢改善に特化し、女性インストラクターが丁寧に指導しています。産前産後にも対応しています。年中無休・朝9時から夜21時まで営業しています。',
    access: '御堂筋線「江坂駅」徒歩2分',
    address: '大阪府吹田市江の木町1-8 田中ビル 5階',
    popularPlan: {
      name: '月2回プラン',
      description: '整体×マシンピラティスのパーソナルレッスン月2回です。',
      price: '月2回 22,000円（税込）',
    },
    options: [
      '月1回（12,000円）',
      '月3回（30,000円）',
      '月4回（40,000円）',
      '月6回（54,000円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', '産前産後ケア', '体質改善', 'ボディメイク'],
    },
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '年末年始',
      facilities: ['リフォーマー', '整体施術スペース', '完全プライベート空間', '更衣室'],
    },
  },
  {
    name: 'バスコ（BASCO）江坂店',
    image: '/images/studios/basco-esaka.webp',
    price: '5回目以降 1,100円/回〜',
    trial: '初回体験 1,100円',
    features: ['女性専用', '加圧×ピラティス', '24時間ジム併設', '少人数制'],
    description: '女性専用ピラティス&24時間ボディメイクジムです。加圧トレーニングとピラティスを融合した独自メソッドが特徴です。少人数制グループレッスンで丁寧に指導しています。月5回目以降は1,100円/回で受け放題です。併設の24時間ジムも利用可能です。',
    access: '江坂エリア',
    address: '大阪府吹田市江坂町1-23-18',
    popularPlan: {
      name: 'ピラティスプラン',
      description: '加圧×マシンピラティスの独自メソッドです。月5回目以降は1,100円/回で受け放題です。',
      price: '要確認（5回目以降 1,100円/回）',
    },
    options: [
      '初回体験（1,100円）',
      '月5回目以降 受け放題（1,100円/回）',
      '24時間ジム利用可',
      '加圧トレーニング',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '体幹強化', '筋力アップ'],
    },
    basicInfo: {
      hours: 'ピラティスレッスン時間は公式サイト参照 / ジムは24時間',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '加圧トレーニング設備', '24時間ジム', '更衣室'],
    },
  },
  {
    name: 'Yon Pilates 江坂',
    image: '/images/studios/yon-pilates-esaka.webp',
    price: '月2回 16,000円〜',
    trial: '体験レッスン 3,500円（LINE登録割引）',
    features: ['完全パーソナル', '4種マシン完備', '美腸×ピラティス', '江坂駅徒歩5分'],
    description: 'マシンピラティス×美腸をコンセプトにした完全パーソナルスタジオです。江坂駅から徒歩5分です。リフォーマー・ラダーバレル・スパインコレクター・チェアの4種類のマシンを使用したオーダーメイドレッスンです。',
    access: '御堂筋線「江坂駅」徒歩5分',
    address: '大阪府吹田市江の木町5-3 レーベンハウス江坂 304',
    popularPlan: {
      name: '月4回コース',
      description: '完全パーソナルのマシンピラティス月4回です。4種のマシンを使用しています。',
      price: '月4回 30,000円（税込）',
    },
    options: [
      '月2回コース（16,000円）',
      '初回体験（4,000円→LINE登録で3,500円）',
      'リフォーマー・ラダーバレル・スパインコレクター・チェア完備',
      '美腸プログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['美腸', 'ボディメイク', '姿勢改善', '体質改善'],
    },
    basicInfo: {
      hours: '月〜日 9:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'ラダーバレル', 'スパインコレクター', 'チェア', '完全プライベート空間'],
    },
  },
  {
    name: 'ピラティスミラー 江坂',
    image: '/images/studios/pilates-mirror.webp',
    price: '月会費 11,000円（月6回）',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', 'マシン専門', '月6回制', 'ミラー設備'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオです。月会費11,000円で月6回まで通える費用対効果の良いプランです。プライベートレッスンも30分4,400円からです。鏡を使ったフォーム確認が特徴です。大手運営の安心感と清潔な施設です。',
    access: '江坂エリア',
    address: '大阪府吹田市江坂エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月会費プラン（月6回）',
      description: 'マシンピラティス月6回までです。コナミ運営の安心感です。',
      price: '月会費 11,000円（税込）',
    },
    options: [
      '入会金 11,000円',
      'プライベートレッスン30分（4,400円）',
      'プライベートレッスン50分（6,600円）',
      '体験レッスン（2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '健康維持', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ミラー設備', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。江坂エリアのスタジオのほとんどが初心者歓迎です。CLUB PILATESはレベル分けがあり、Rintosullは月4回8,800円から気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンは専用マシン（リフォーマー等）を使用しています。マシンは負荷調整しやすく初心者におすすめです。江坂はマシン専門スタジオが充実しています。',
  },
  {
    question: '江坂のピラティススタジオの料金相場は？',
    answer: 'グループ月4回で8,800円〜14,190円程度です。Rintosullが月4回8,800円で最安級です。パーソナルは月2回16,000円〜が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。CLUB PILATESは無料体験、ピラティスアクスとバスコは1,000〜1,100円で体験可能です。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化に特化しています。ヨガは柔軟性とリラックス重視です。両方やりたい方はRintosullのプレミアムフリープランがおすすめです。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、姿勢改善で根本原因を解消しています。La pilatesは整体×ピラティスで体の不調改善に特化しています。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続することをおすすめします。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'パーソナルはLa pilatesやYon Pilatesで効果的な指導を受けられます。グループはRintosullなら月4回8,800円からです。まずは体験レッスンで両方を試すことをおすすめします。',
  },
]

export default function EsakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '江坂', url: 'https://biyori-pilates.com/area/esaka/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス江坂おすすめ8選<br className="hidden md:block" />
              人気スタジオの料金プランの比較
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
              <span className="text-warm-600">江坂</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="江坂" />


        <TableOfContents areaName="江坂" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、江坂エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>江坂でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安いスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>御堂筋線沿線で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="江坂" />
        <AreaMarketComparison studios={studios} areaName="江坂" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              江坂のおすすめピラティススタジオ8選
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
              江坂のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">1,100円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 11,000円〜30,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              江坂エリアは都心部と比較してテナント賃料が抑えめのため、同じ内容のレッスンでも料金がリーズナブルな傾向があります。通い放題プランの割安感が大きいエリアのため、週2回以上通える方には月額制プランをおすすめします。近隣の梅田エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              江坂でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">御堂筋線「江坂駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  江坂エリアのスタジオは江坂駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。江坂駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  江坂エリアは都心と比べてスタジオの選択肢が限られるため、人気のスタジオ・時間帯は予約が埋まりやすい傾向があります。特に土曜午前は混み合うことが多いので、1週間前には予約を入れておくのがおすすめです。車で通う方は駐車場の有無もご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通い放題プランと回数制プランを比較検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  江坂エリアでは通い放題プランが都心部より割安に設定されていることが多いです。週2回以上通う場合は通い放題が割安ですが、月1〜2回のペースであれば回数券やドロップインの方が割安な場合もあります。自分の通う頻度を想定してプランをお選びください。初月は回数制で様子を見る方法もあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  江坂エリアだけでなく、近隣の<Link href="/area/umeda/" className="text-warm-700 underline hover:text-warm-900">梅田</Link>、<Link href="/area/shin-osaka/" className="text-warm-700 underline hover:text-warm-900">新大阪</Link>、<Link href="/area/honmachi/" className="text-warm-700 underline hover:text-warm-900">本町</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>江坂エリアの豆知識：</strong>江坂エリアは車で通う方も多いため、駐車場の有無や提携コインパーキングを事前にご確認ください。車なら荷物の心配が少ないので、シャワー後の着替えやヘアドライヤーなども余裕を持って準備できます。
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
                  月額1万円以下で通えるリーズナブルなスタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティスアクス（月4回 9,680円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全マンツーマン指導で効率よく取り組めます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• La pilates（整体×ピラティス）</li>
                  <li className="text-warm-700">• Yon Pilates（美腸×ピラティス）</li>
                  <li className="text-warm-700">• zen place プライベート</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  江坂駅から徒歩5分以内です。御堂筋線一本で便利です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（徒歩1分）</li>
                  <li className="text-warm-700">• Rintosull（徒歩1分）</li>
                  <li className="text-warm-700">• ピラティスアクス（徒歩1分）</li>
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
                週1〜2回（月4〜8回）から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。自分のペースが一番です。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円〜）</li>
                  <li>• zen place（9,625円〜）</li>
                  <li>• ピラティスアクス（9,680円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  大手スタジオ・ジム併設型です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                  <li>• CLUB PILATES（月4回 14,300円）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナルです。効果重視の方におすすめです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Yon Pilates（月2回 16,000円）</li>
                  <li>• La pilates（月2回 22,000円）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないピラティススタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、体幹強化など、目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  江坂エリアの料金相場はグループ月4回で8,800円〜14,190円です。入会金やレンタル料もご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESは無料体験、ピラティスアクスは1,000円、バスコは1,100円で体験可能です。体験レッスンで実際の雰囲気をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  江坂は御堂筋線で梅田・なんばから1本です。zen place・Rintosull・ピラティスアクスは駅徒歩1分と抜群のアクセスです。
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
              本ページでは、江坂のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、江坂に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜1,100円です。<br />
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
              <AreaModifierSections studios={studios} areaName="江坂" />
      </main>
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 料金相場・近隣エリアと比べる</h2>
              <p className="text-warm-600 text-sm mb-4">全国の料金データや他エリアの人気スタジオも見ると、自分に合った1校が選びやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国の料金相場</Link>
                <Link href="/area/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国のエリア一覧</Link>
                <Link href="/area/seijo-gakuenmae/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">成城学園前のピラティス</Link>
                <Link href="/area/kagurazaka/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">神楽坂のピラティス</Link>
                <Link href="/area/nakano-sakaue/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">中野坂上のピラティス</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="esaka" areaName="江坂" />

            {/* boost-p1-shin-osaka-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                近隣の<Link href="/area/shin-osaka/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">新大阪エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて確認できます。
              </p>
            </div>
                  {/* g1-link-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/brands/club-pilates-esaka/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">CLUB PILATES 江坂店の料金・体験を見る</Link>
              </div>
            </div>
      <RelatedAreas currentSlug="esaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
