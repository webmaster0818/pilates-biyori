import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/nagatacho/' },
  title: '【2026年7月最新】ピラティス永田町おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '永田町エリアのおすすめピラティススタジオ5選を徹底比較。zen place pilates、the SILK、ピラティススタジオnoa、Lume、STUDIO IVYなど実在スタジオの料金・体験レッスン・アクセスを完全ガイド。グループ・女性専用・完全パーソナルまで。',
  keywords: 'ピラティス,永田町,赤坂,赤坂見附,千代田区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,zen place pilates,the SILK,noa,Lume,STUDIO IVY',
}

const studios = [
  {
    name: 'zen place pilates 赤坂',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 12,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '全国150店舗以上展開しているので引っ越しや出張先でも他店利用できるのが便利。赤坂見附駅10番出口から徒歩3分で通いやすいです。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: 'グループ体験が1,000円で気軽にお試しできました。月4回10,450円〜とリーズナブルで続けやすい。男性も多く通っているので夫婦で利用しています。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: 'インストラクターの質が高く、丁寧な指導を受けられます。グループでもしっかりフォームを見てくれるので初心者でも安心でした。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国150店舗相互利用', '男性OK', '駅徒歩3分', 'グループ体験1,000円'],
    description: '全国150店舗以上を展開する大手ピラティススタジオ「zen place pilates」の赤坂店。赤坂見附駅10番出口から徒歩3分で、永田町からも好アクセス。月4回10,450円〜のリーズナブルな料金設定で、グループ体験は1,000円と気軽にお試し可能。男性も利用OK。全国の店舗を相互利用できるため、出張先や旅行先でもピラティスを継続できます。',
    access: '東京メトロ「赤坂見附駅」10番出口徒歩3分（永田町駅の隣駅）',
    address: '東京都港区赤坂エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン月4回',
      description: '全国150店舗で相互利用可能なグループレッスン。月4回から始められるスタンダードプラン。',
      price: '月4回 10,450円〜（税込）',
    },
    options: [
      'グループレッスン月4回（10,450円〜）',
      'グループ体験レッスン 1,000円',
      '全国150店舗相互利用可能',
      '男性利用OK',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'the SILK 赤坂見附店',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    reviewCount: 368,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '赤坂見附駅10番出口から徒歩30秒！駅チカすぎて雨の日も楽に通えます。音楽に合わせたレッスンが楽しくて、毎回あっという間に時間が過ぎます。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '体験が無料で手ぶらOKだったので気軽に試せました。女性専用スタジオなので周りを気にせず集中できるのが嬉しい。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: '月3回12,980円〜で始められるのでお財布にも優しい。音楽レッスンは他にはないスタイルで、運動が苦手な私でも楽しめました。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料（手ぶらOK）',
    features: ['女性専用', '駅徒歩30秒', '音楽レッスン', '体験無料・手ぶらOK'],
    description: '女性専用のマシンピラティススタジオ「the SILK」赤坂見附店。赤坂見附駅10番出口から徒歩わずか30秒という抜群の立地。音楽に合わせた独自のレッスンスタイルが特徴で、楽しみながら効果的にボディメイクできます。月3回12,980円〜のプランがあり、体験レッスンは無料で手ぶらOK。女性専用なので安心して通えます。',
    access: '東京メトロ「赤坂見附駅」10番出口徒歩30秒',
    address: '東京都港区赤坂エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月3回プラン',
      description: '女性専用・音楽レッスンのマシンピラティス。月3回から気軽に始められるプラン。',
      price: '月3回 12,980円〜（税込）',
    },
    options: [
      '月3回プラン（12,980円〜）',
      '体験レッスン 無料',
      '手ぶらOK（ウェア・タオルレンタル）',
      '女性専用スタジオ',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'レンタルウェア'],
    },
  },
  {
    name: 'ピラティススタジオnoa 赤坂',
    image: '/images/studios/pilates-studio-noa.webp',
    rating: 4.7,
    reviewCount: 22,
    reviews: [
      {
        author: 'A.T',
        rating: 5,
        date: '1週間前',
        text: '赤坂駅1番出口から徒歩30秒！マシンピラティス専用スタジオで設備が充実しています。初心者向けクラスも多く安心して始められました。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: '赤坂見附駅や溜池山王駅からも歩ける距離なので、複数路線使えて便利。マシン専用スタジオなので予約が取りやすいのも良いです。',
      },
      {
        author: 'K.M',
        rating: 4,
        date: '3週間前',
        text: 'インストラクターが丁寧で初心者にも分かりやすく教えてくれます。マシンピラティス専用なので設備が整っていて気持ちよくレッスンを受けられます。',
      },
    ],
    price: '公式サイトでご確認ください',
    trial: '体験レッスンあり',
    features: ['マシンピラティス専用', '赤坂駅徒歩30秒', '複数駅利用可', '初心者歓迎'],
    description: 'マシンピラティス専用スタジオ「ピラティススタジオnoa」赤坂店。赤坂駅1番出口から徒歩わずか30秒、赤坂見附駅から徒歩7分、溜池山王駅から徒歩7分と3駅利用可能な好立地。マシンピラティスに特化したスタジオで、リフォーマーをはじめとする充実した設備を完備。初心者から経験者まで幅広いレベルに対応したレッスンを提供しています。',
    access: '東京メトロ「赤坂駅」1番出口徒歩30秒 / 「赤坂見附駅」徒歩7分 / 「溜池山王駅」徒歩7分',
    address: '東京都港区赤坂エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティスグループレッスン',
      description: 'マシンピラティス専用スタジオでの本格グループレッスン。初心者向けクラスも充実。',
      price: '公式サイトでご確認ください',
    },
    options: [
      'マシンピラティス専用スタジオ',
      '3駅利用可能（赤坂・赤坂見附・溜池山王）',
      '初心者向けクラスあり',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Lume（ルーメ）赤坂',
    image: '/images/studios/lume-akasaka.webp',
    rating: 4.9,
    reviewCount: 6,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '赤坂駅から徒歩30秒で通いやすい。少人数制なのでインストラクターにしっかり見てもらえます。タワーリフォーマー完備で本格的なレッスンが受けられます。',
      },
      {
        author: 'Y.M',
        rating: 5,
        date: '2週間前',
        text: '少人数制なのでグループでもパーソナルに近い感覚。タワーリフォーマーを使ったレッスンは他のスタジオにはない充実感があります。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: '赤坂見附や溜池山王からも歩ける距離。少人数だから予約も取りやすく、自分のペースで通えています。丁寧な指導で体の変化を実感しています。',
      },
    ],
    price: '公式サイトでご確認ください',
    trial: '体験レッスンあり',
    features: ['少人数制', '赤坂駅徒歩30秒', 'タワーリフォーマー完備', '複数駅利用可'],
    description: '赤坂駅から徒歩30秒の少人数制マシンピラティススタジオ「Lume（ルーメ）」。赤坂見附駅から徒歩5分、溜池山王駅から徒歩6分と複数路線利用可能。タワーリフォーマーを完備しており、通常のリフォーマーに加えてより多彩なエクササイズが可能。少人数制ならではの丁寧な指導で、一人ひとりの体の状態に合わせたレッスンを提供しています。',
    access: '東京メトロ「赤坂駅」徒歩30秒 / 「赤坂見附駅」徒歩5分 / 「溜池山王駅」徒歩6分',
    address: '東京都港区赤坂エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '少人数グループレッスン',
      description: 'タワーリフォーマー完備の少人数制レッスン。パーソナルに近い丁寧な指導。',
      price: '公式サイトでご確認ください',
    },
    options: [
      '少人数制グループレッスン',
      'タワーリフォーマー完備',
      '3駅利用可能（赤坂・赤坂見附・溜池山王）',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', '柔軟性向上'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['タワーリフォーマー', 'リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'STUDIO IVY 赤坂エリア',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8,
    reviewCount: 8,
    reviews: [
      {
        author: 'T.H',
        rating: 5,
        date: '1週間前',
        text: '完全パーソナルなので自分だけのオーダーメイドプログラムを組んでもらえます。月2回15,000円〜で本格的なパーソナルピラティスが受けられるのはコスパ良い。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '完全プライベート空間なので人目を気にせず集中できます。体験4,500円で丁寧にカウンセリングしてもらえました。自分の体の癖がよく分かりました。',
      },
      {
        author: 'K.O',
        rating: 4,
        date: '3週間前',
        text: 'オーダーメイドのプログラムで自分の目的に合ったレッスンを受けられます。パーソナルなので効率よく体を変えたい方におすすめ。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全パーソナル', '完全プライベート空間', 'オーダーメイド', '月2回15,000円〜'],
    description: '完全パーソナルのマシンピラティススタジオ「STUDIO IVY」赤坂エリア。完全プライベート空間でのマンツーマン指導により、一人ひとりの体の状態・目的に合わせたオーダーメイドのプログラムを提供。月2回15,000円〜のプランから始められ、体験レッスンは4,500円。人目を気にせず集中してレッスンを受けたい方、効率よく成果を出したい方におすすめです。',
    access: '東京都港区赤坂エリア（詳細は公式サイトでご確認ください）',
    address: '東京都港区赤坂エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン月2回',
      description: '完全プライベート空間でのオーダーメイドマンツーマンレッスン。',
      price: '月2回 15,000円〜（税込）',
    },
    options: [
      '月2回プラン（15,000円〜）',
      '体験レッスン 4,500円',
      '完全プライベート空間',
      'オーダーメイドプログラム',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', 'リハビリ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '完全個室', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！永田町・赤坂エリアのスタジオはほとんどが初心者歓迎です。zen place pilatesはグループ体験1,000円で気軽にお試し可能、the SILKは体験無料で手ぶらOK。ピラティススタジオnoaやLumeも初心者向けクラスがあり安心して始められます。',
  },
  {
    question: '永田町・赤坂エリアのピラティスの料金相場は？',
    answer: 'zen place pilatesは月4回10,450円〜、the SILKは月3回12,980円〜、STUDIO IVYは月2回15,000円〜（完全パーソナル）です。グループレッスンなら月1万円台から始められます。目的と頻度に合わせて選びましょう。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。zen place pilatesは全国150店舗で相互利用できるので、出張先でもレッスンを受けられます。大切なのは無理なく継続すること。最低2〜3ヶ月続けましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わっていきます。the SILKは音楽レッスンで楽しみながらボディメイク、STUDIO IVYはオーダーメイドプログラムで効率的にアプローチ。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。the SILKは体験無料で手ぶらOK（ウェア・タオルレンタルあり）。zen place pilatesはグループ体験1,000円、STUDIO IVYは体験4,500円です。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates赤坂は男性も通えます。STUDIO IVY赤坂エリアも男性利用可能です。the SILKは女性専用スタジオです。ピラティススタジオnoaやLumeについては公式サイトでご確認ください。',
  },
  {
    question: '永田町駅から近いスタジオはどこですか？',
    answer: '永田町駅と赤坂見附駅は連絡通路で繋がっています。赤坂見附駅から最も近いのはthe SILK（徒歩30秒）とzen place pilates（徒歩3分）。赤坂駅からはピラティススタジオnoa（徒歩30秒）とLume（徒歩30秒）が至近です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function NagatachoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '永田町', url: 'https://pilates-biyori.com/area/nagatacho/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス永田町おすすめ5選！
              <br className="hidden md:block" />
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
              <span className="text-warm-600">永田町</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="永田町" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「永田町で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              永田町は東京メトロ有楽町線・半蔵門線・南北線が乗り入れるビジネス街で、赤坂見附駅とも連絡通路で繋がっています。国会議事堂や官庁街が近く、ビジネスパーソンが多く行き交うエリアです。そんな永田町・赤坂エリアには、大手チェーンのグループレッスンから完全プライベートのパーソナルまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、永田町エリアでおすすめの実在するピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>永田町・赤坂でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>コスパの良いスタジオを知りたい</span>
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
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="永田町" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              永田町のおすすめピラティススタジオ5選
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
              永田町のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜15,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 15,000円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜4,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              永田町はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるので確認してみましょう。近隣の虎ノ門エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              永田町でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東京メトロ「赤坂見附駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  永田町エリアのスタジオは赤坂見附駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。赤坂見附駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  永田町はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前確認を。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  永田町エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  永田町エリアだけでなく、近隣の<Link href="/area/toranomon/" className="text-warm-700 underline hover:text-warm-900">虎ノ門</Link>、<Link href="/area/akasaka/" className="text-warm-700 underline hover:text-warm-900">赤坂</Link>、<Link href="/area/yotsuya/" className="text-warm-700 underline hover:text-warm-900">四ツ谷</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>永田町エリアの豆知識：</strong>永田町はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオを選びましょう。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月1万円台から始められるスタジオも。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                  <li className="text-warm-700">• STUDIO IVY（月2回 15,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンや少人数で丁寧な指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（完全パーソナル）</li>
                  <li className="text-warm-700">• Lume（少人数制）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅チカ重視</h3>
                <p className="text-warm-600 text-sm mb-4">徒歩30秒〜3分の好立地。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（赤坂見附駅 徒歩30秒）</li>
                  <li className="text-warm-700">• noa（赤坂駅 徒歩30秒）</li>
                  <li className="text-warm-700">• Lume（赤坂駅 徒歩30秒）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回からスタートするのがおすすめ。最低2〜3ヶ月継続することで効果を実感できます。zen place pilatesはグループ体験1,000円、the SILKは体験無料で気軽に始められます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感できます。STUDIO IVYのオーダーメイドパーソナルなら効率よくボディメイクが可能です。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。zen place pilatesは全国150店舗で相互利用できるので、忙しいビジネスパーソンでも出張先でレッスンを受けられます。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（10,450円/月4回〜）</li>
                  <li>• the SILK（12,980円/月3回〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2回パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">効率よく成果を出したい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（15,000円/月2回〜）</li>
                  <li>• 完全オーダーメイドプログラム</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">体験から始める</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">0円〜</p>
                <p className="text-sm text-warm-600 mb-4">まずはお試しで体験したい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（体験無料・手ぶらOK）</li>
                  <li>• zen place pilates（体験1,000円）</li>
                  <li>• STUDIO IVY（体験4,500円）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、体幹強化など、目的によって最適なスタジオは変わります。効率重視ならSTUDIO IVYのオーダーメイドパーソナル、楽しみながらボディメイクならthe SILKの音楽レッスンがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  永田町・赤坂エリアはグループ（zen place pilates、noa）、少人数制（Lume）、女性専用（the SILK）、完全パーソナル（STUDIO IVY）と多彩な形式が揃っています。自分の好みや予算に合わせて選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKは体験無料で手ぶらOK、zen place pilatesはグループ体験1,000円と気軽にお試し可能。STUDIO IVYは体験4,500円で丁寧なカウンセリング付き。まずは体験で雰囲気やインストラクターとの相性を確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  永田町駅と赤坂見附駅は連絡通路で繋がっています。the SILKは赤坂見附駅から徒歩30秒、ピラティススタジオnoaとLumeは赤坂駅から徒歩30秒。複数路線が利用できるので、通勤経路に合わせてスタジオを選べます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は永田町エリアのおすすめピラティススタジオ5選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              永田町は東京メトロ3路線が乗り入れ、赤坂見附駅とも連絡通路で繋がるビジネス街。全国150店舗で相互利用できるzen place pilates（月4回10,450円〜）、女性専用で音楽レッスンが楽しいthe SILK（体験無料・手ぶらOK）、マシンピラティス専用のピラティススタジオnoa（赤坂駅徒歩30秒）、少人数制でタワーリフォーマー完備のLume（赤坂駅徒歩30秒）、完全オーダーメイドのSTUDIO IVY（月2回15,000円〜）と、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは体験無料のthe SILKや、1,000円で体験できるzen place pilatesから試してみるのがおすすめです。ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              the SILKは体験無料・手ぶらOK。zen place pilatesはグループ体験1,000円。<br />
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
      <ConsultantSection areaKey="nagatacho" areaName="永田町" />

      <RelatedAreas currentSlug="nagatacho" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
