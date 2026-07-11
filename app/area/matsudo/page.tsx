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
  alternates: { canonical: 'https://biyori-pilates.com/area/matsudo/' },
  title: '【2026最新】ピラティス松戸おすすめ8選！人気スタジオの料金プランを簡単比較！',
  description: '松戸エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,松戸,千葉,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 松戸店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.8,
    reviewCount: 123,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: '松戸駅から徒歩1分で通いやすい！女性専用なので安心して通えます。音楽に合わせたレッスンが楽しくて、あっという間に60分が過ぎます。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '0円体験で気軽に試せました。月4回11,220円〜とコスパが良い。部位別ボディメイクプログラムが充実しています。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '3週間前',
        text: '仕事帰りに通えるのが嬉しい。マシンピラティス専門なのでリフォーマーの台数が多く予約が取りやすいです。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', '松戸駅徒歩1分', '部位別プログラム', '0円体験'],
    description: '女性専用マシンピラティス専門スタジオ。松戸駅から徒歩1分の好立地。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実。「骨格から美ボディに」がコンセプト。',
    access: 'JR常磐線・新京成線「松戸駅」徒歩1分',
    address: '千葉県松戸市松戸1228-1 松戸駅西口ビル内',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回。部位別プログラムも選べる。',
      price: '月4回 11,220円（税込）',
    },
    options: [
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（14,520円）',
      '追加受講（1回 2,200円）',
      '入会金 5,500円・登録料 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '火〜金 10:00-22:00 / 土日祝 10:00-20:00',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'the SILK 松戸店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7,
    reviewCount: 317,
    reviews: [
      {
        author: 'Y.K',
        rating: 5,
        date: '1週間前',
        text: '松戸駅から徒歩1分。女性専用で清潔感のある内装がおしゃれ。音楽に合わせたレッスンが楽しい。手ぶら体験無料で気軽に試せました。',
      },
      {
        author: 'M.H',
        rating: 5,
        date: '2週間前',
        text: '朝7:30から営業で通いやすい。ウェア・タオル無料貸出やウォーターサーバーも完備。パウダールームにはメイクアップミラーやアイロンもあって便利。',
      },
      {
        author: 'R.S',
        rating: 4,
        date: '3週間前',
        text: '月3回12,980円〜と始めやすい価格設定。レッスンの種類が豊富で飽きずに続けられます。初心者の8割がピラティス未経験者なので安心。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '松戸駅徒歩1分', '手ぶら体験OK', '朝7:30〜'],
    description: '女性専用マシンピラティススタジオ。松戸駅から徒歩1分。音楽のリズムに合わせた独自のレッスンスタイルで初心者でも楽しく続けられます。手ぶらで体験可能。ウェア・タオル無料貸出あり。パウダールームが充実。',
    access: 'JR常磐線・新京成線「松戸駅」徒歩1分',
    address: '千葉県松戸市松戸1230-1 ピアザ松戸 9F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'Light3（月3回 12,980円）',
      'Full（毎日1回 20,680円）',
      'Full Day（18,480円）',
      '体験・入会金・登録手数料 無料キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'Pilates Mee 松戸店',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.7,
    reviewCount: 7,
    reviews: [
      {
        author: 'E.T',
        rating: 5,
        date: '1週間前',
        text: '松戸駅から徒歩3分。最大3名のセミパーソナル形式でマシンピラティスを受けられる。一人ひとりに合わせた丁寧な指導が魅力。',
      },
      {
        author: 'N.S',
        rating: 4,
        date: '2週間前',
        text: '女性専用で安心。少人数制なのでインストラクターにしっかり見てもらえる。体験レッスン無料キャンペーン中でお得に始められた。',
      },
      {
        author: 'H.K',
        rating: 5,
        date: '3週間前',
        text: '9:00〜21:15まで営業で通いやすい。月2回11,000円〜とプランが豊富で自分に合ったペースで通える。',
      },
    ],
    price: '月2回 11,000円〜',
    trial: '体験レッスン 無料（キャンペーン中）',
    features: ['女性専用', '松戸駅徒歩3分', 'セミパーソナル', '最大3名'],
    description: '女性専用マシンピラティススタジオ。松戸駅から徒歩3分。1レッスン最大3名のセミパーソナル形式で、一人ひとりに合わせた丁寧な指導が特徴。リフォーマー・リフォーマーリング・ピラティスボールなど器具が充実。',
    access: 'JR常磐線・新京成線「松戸駅」徒歩3分',
    address: '千葉県松戸市本町14-18 松戸トシオビル 407',
    popularPlan: {
      name: '月4回コース',
      description: 'セミパーソナル（最大3名）マシンピラティス月4回。',
      price: '月4回 19,800円（税込）',
    },
    options: [
      '月2回コース（11,000円）',
      '通い放題コース（37,400円）',
      '体験当日入会で入会金無料',
      '体験レッスン 無料キャンペーン中',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '産後ケア'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'リフォーマーリング', 'ピラティスボール', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Rintosull（リントスル）松戸店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 80,
    reviews: [
      {
        author: 'C.M',
        rating: 5,
        date: '1週間前',
        text: 'LAVAが運営するマシンピラティス専門スタジオ。ホットヨガとの併用もできるので、ピラティスとヨガ両方楽しみたい人にぴったり。',
      },
      {
        author: 'A.S',
        rating: 4,
        date: '2週間前',
        text: '料金がリーズナブルで続けやすい。女性専用なので気兼ねなくレッスンに集中できます。インストラクターが丁寧に教えてくれます。',
      },
      {
        author: 'K.Y',
        rating: 5,
        date: '3週間前',
        text: 'LAVA会員だったので、追加でマシンピラティスも始めました。相互利用できるのが便利。松戸駅からのアクセスも良好。',
      },
    ],
    price: '月額 9,800円〜',
    trial: '体験レッスン 150円',
    features: ['女性専用', 'LAVA運営', 'ヨガ併用可', 'リーズナブル'],
    description: 'ホットヨガLAVAが運営する女性専用マシンピラティス専門スタジオ。リーズナブルな料金設定が魅力。LAVA会員との相互利用も可能で、ピラティスとヨガを両方楽しめる。',
    access: 'JR常磐線・新京成線「松戸駅」徒歩3分',
    address: '千葉県松戸市松戸1307-1 キテミテマツド 7F',
    popularPlan: {
      name: 'マシンピラティス通い放題',
      description: 'マシンピラティスレッスン通い放題。LAVA会員は割引あり。',
      price: '月額 9,800円〜（税込）',
    },
    options: [
      'マシンピラティス月4回プラン',
      'LAVA＋リントスル併用プラン',
      '施設利用料 月680円',
      '体験レッスン 150円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '柔軟性向上', 'ストレス解消'],
    },
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'lafimo 松戸店',
    image: '/images/studios/lafimo-yokohama.webp',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      {
        author: 'T.N',
        rating: 5,
        date: '1週間前',
        text: '松戸駅から徒歩2分。少人数制のマシンピラティスに加えて、ホットヨガやジムエリアも利用できる。岩盤浴付きで疲労回復にも最適。',
      },
      {
        author: 'M.K',
        rating: 4,
        date: '2週間前',
        text: '24時間営業で手ぶらで通えるのが便利。多彩な料金プランがあるので自分に合ったプランを選べます。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '3週間前',
        text: 'ピラティス以外にもヨガやジムが使えるので飽きない。女性専用エリアもあり安心して利用できます。',
      },
    ],
    price: '月額 8,800円〜',
    trial: '体験レッスンあり',
    features: ['松戸駅徒歩2分', '24時間営業', 'ジム・ヨガ併設', '岩盤浴あり'],
    description: '松戸駅から徒歩2分。少人数制マシンピラティスとホットヨガを融合したトレーニングスタジオ。ジムエリアや岩盤浴など多彩な施設を併設。24時間営業で手ぶらで通える。',
    access: 'JR常磐線・新京成線「松戸駅」徒歩2分',
    address: '千葉県松戸市松戸1149-1',
    popularPlan: {
      name: 'レギュラープラン',
      description: 'マシンピラティス・ヨガ・ジムが使い放題。岩盤浴利用可。',
      price: '月額 8,800円〜（税込）',
    },
    options: [
      'ライトプラン（平日日中のみ）',
      'プレミアムプラン（全時間帯利用可）',
      '岩盤浴オプション',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', '運動不足解消', 'ストレス解消', '健康維持'],
    },
    basicInfo: {
      hours: '24時間営業（スタジオレッスンは時間帯指定）',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ジムエリア', 'ホットヨガスタジオ', '岩盤浴', 'シャワー', 'ロッカー'],
    },
  },
  {
    name: 'PILATES KASANE 松戸店',
    image: '/images/studios/pilates-kasane.webp',
    rating: 4.5,
    reviewCount: 14,
    reviews: [
      {
        author: 'R.M',
        rating: 5,
        date: '1週間前',
        text: 'イオンモール松戸に入っているので買い物ついでに通える便利さ。マシンピラティス専門で初心者でも安心のプログラムが充実。',
      },
      {
        author: 'K.A',
        rating: 4,
        date: '2週間前',
        text: '料金がリーズナブルで続けやすい。駐車場が使えるので車で通えるのも便利。スタッフの対応が丁寧です。',
      },
      {
        author: 'Y.T',
        rating: 4,
        date: '3週間前',
        text: '清潔感のあるスタジオで気持ちよくレッスンできます。体験レッスンの案内が丁寧で入会を決めました。',
      },
    ],
    price: '月4回 11,880円〜',
    trial: '体験レッスン 500円',
    features: ['イオンモール内', '駐車場あり', 'マシン専門', '初心者歓迎'],
    description: 'イオンモール松戸内にあるマシンピラティス専門スタジオ。買い物ついでに通えるアクセスの良さと無料駐車場が魅力。初心者向けプログラムが充実。',
    access: 'JR常磐線「北松戸駅」徒歩15分 / 車でのアクセス推奨',
    address: '千葉県松戸市八ケ崎2-8-1 イオンモール松戸内',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティスグループレッスン月4回。',
      price: '月4回 11,880円（税込）',
    },
    options: [
      '月8回プラン',
      '通い放題プラン',
      '体験レッスン 500円',
      '入会金 11,000円（キャンペーン中 無料）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '健康維持', '運動不足解消', '体幹強化'],
    },
    basicInfo: {
      hours: '10:00〜21:00',
      closed: 'イオンモール休館日に準ずる',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates Mee松戸店',
    officialUrl: 'https://m-pilates.com/',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。松戸駅から徒歩3分。',
    access: '松戸駅から徒歩3分',
    address: '千葉県松戸市本町14-18 松戸トシオビル407',
  },
  {
    name: 'ルキナ 北小金店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Q113418.1.21564097.U1357808',
    image: '/images/studios/lucina.webp',
    price: 'マシンピラティス 月4回 9,735円／月8回 14,135円（税込）',
    trial: '体験レッスンあり（料金・空き状況は公式サイト参照）',
    features: ['コラーゲントリートメントランプ', 'マシンピラティス（リフォーマー）', 'ホットヨガ併設', '女性専用'],
    description: 'エステでも使われるコラーゲントリートメントランプを設置した女性専用スタジオ。リフォーマーを使ったマシンピラティスのグループレッスンとホットヨガを提供。松戸市内の北小金駅前。JR常磐線北小金駅南口から徒歩3分。',
    access: 'JR常磐線北小金駅南口から徒歩3分',
    address: '千葉県松戸市小金53 イタクラビル2F',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも松戸のスタジオに通えますか？',
    answer: '大丈夫です！松戸エリアのスタジオはほとんどが初心者歓迎。ピラティスKとthe SILKは初心者向けプログラムが充実しており、Pilates Meeは最大3名の少人数制で丁寧に教えてもらえます。',
  },
  {
    question: '松戸のピラティスの料金相場はどのくらいですか？',
    answer: 'グループ月4回で11,220円〜19,800円程度。ピラティスKが月4回11,220円〜で最もリーズナブル。lafimoは月額8,800円〜でジム・ヨガも使えてコスパ抜群。リントスルは月額9,800円〜。',
  },
  {
    question: '松戸駅から近いスタジオはどこですか？',
    answer: 'ピラティスK松戸店とthe SILK松戸店がともに松戸駅から徒歩1分で最寄り。lafimo松戸店も徒歩2分、Pilates Mee松戸店は徒歩3分です。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'lafimo松戸店は男女利用可能です。ピラティスK、the SILK、Pilates Mee、リントスルは女性専用となっています。',
  },
  {
    question: '無料で体験できるスタジオはどこですか？',
    answer: 'ピラティスK（0円体験）、the SILK（無料体験）、Pilates Mee（キャンペーン中無料）が無料体験可能。リントスルは150円で体験できます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。松戸はマシン専門スタジオが特に充実しています。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめ。慣れたら週2〜3回に。大切なのは継続すること。月4回プランから始めるのが定番です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2〜3ヶ月の継続が大切です。ピラティスKやthe SILKの部位別プログラムはボディメイクに効果的。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで体験可能（ウェア・タオル無料貸出）。靴下（滑り止め付き推奨）を持参すると安心です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。姿勢改善は比較的早く実感でき、ボディメイク効果は3ヶ月程度で目に見える変化が現れます。',
  },
]

export default function MatsudoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '松戸', url: 'https://pilates-biyori.com/area/matsudo/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス松戸おすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">松戸</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="松戸" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「松戸で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、松戸エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>松戸でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>無料体験や格安体験のスタジオを知りたい</span>
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
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="松戸" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              松戸のおすすめピラティススタジオ8選
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
              松戸のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">11,220円〜19,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,000円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              松戸エリアはJR常磐線と新京成線が乗り入れるターミナル駅で、都心と比べてテナント賃料が抑えめのため、同内容のレッスンでも料金がリーズナブルな傾向があります。特にピラティスKは月4回11,220円〜と都心部の同チェーンと同等の料金で通えます。通い放題プランの選択肢も豊富なので、週2回以上通える方は月額制プランがおすすめです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              松戸でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR常磐線・新京成線「松戸駅」の出口を事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  松戸駅は西口と東口でスタジオへのアクセスが異なります。ピラティスKやthe SILKは西口側に集中していますが、初回訪問時は余裕を持って到着できるよう、事前にルートを確認しておきましょう。常磐線快速と各駅停車で停車位置が異なるため、出口への動線も変わる場合があります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">人気の時間帯は早めの予約がおすすめ</h3>
                <p className="text-warm-600 leading-relaxed">
                  松戸エリアのスタジオは、特に土曜午前と平日夜の仕事帰り時間帯（18:00〜20:00）が混み合います。ピラティスKやthe SILKは人気が高いため、1週間前には予約を入れておくのが安心。lafimo松戸店は予約不要の時間帯もあるので、急に通いたくなった時に便利です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">常磐線沿線の複数エリアを比較検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  松戸は常磐線沿線の中心的なエリアですが、近隣の<Link href="/area/kashiwa/" className="text-warm-700 underline hover:text-warm-900">柏</Link>や<Link href="/area/kita-senju/" className="text-warm-700 underline hover:text-warm-900">北千住</Link>エリアにもピラティススタジオが充実しています。通勤経路や生活圏に合わせて、複数エリアのスタジオを比較してみると、より自分に合ったスタジオが見つかりやすくなります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車で通う場合は駐車場の確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  松戸駅周辺のスタジオは駅近で電車通いに便利ですが、車で通う場合は近隣コインパーキングの利用が必要です。PILATES KASANEはイオンモール松戸内にあるため無料駐車場が利用でき、車通いの方にはおすすめです。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。the SILKは手ぶらで体験可能なので荷物が少なく済みます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>松戸エリアの豆知識：</strong>松戸は千葉県の北西部に位置し、東京都心へのアクセスも良好なベッドタウンです。駅前にはアトレ松戸やキテミテマツドなどの商業施設が充実しているので、レッスン前後のお買い物や食事にも便利。夏場は湿度が高くなるため、レッスン後の着替えを1セット余分に持参すると快適です。
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
                  月額1万円台で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• lafimo（月額 8,800円〜）</li>
                  <li className="text-warm-700">• リントスル（月額 9,800円〜）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 11,220円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 松戸（駅徒歩1分）</li>
                  <li className="text-warm-700">• the SILK 松戸（手ぶら体験無料）</li>
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩5分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（徒歩1分）</li>
                  <li className="text-warm-700">• the SILK（徒歩1分）</li>
                  <li className="text-warm-700">• lafimo（徒歩2分）</li>
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
                週1〜2回からスタート。最低2〜3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• lafimo（8,800円〜）</li>
                  <li>• リントスル（9,800円〜）</li>
                  <li>• ピラティスK（11,220円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜20,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  充実の設備・少人数制。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（12,980円〜/月3回）</li>
                  <li>• KASANE（11,880円〜/月4回）</li>
                  <li>• Pilates Mee（19,800円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜38,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/通い放題）</li>
                  <li>• the SILK（20,680円/通い放題）</li>
                  <li>• Pilates Mee（37,400円/通い放題）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  松戸の料金相場はグループ月4回で11,220円〜19,800円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ピラティスK、the SILK、Pilates Meeは無料体験。リントスルは150円。まずは気になるスタジオで体験してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  松戸はJR常磐線と新京成線が乗り入れるターミナル駅。ピラティスKとthe SILKは徒歩1分、lafimoは徒歩2分と駅近スタジオが充実。車派ならKASANEのイオンモール松戸店が便利。
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
              今回は松戸エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では松戸にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜500円。<br />
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
      <ConsultantSection areaKey="matsudo" areaName="松戸" />

      <RelatedAreas currentSlug="matsudo" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
