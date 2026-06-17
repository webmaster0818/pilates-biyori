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



export const metadata = {
  title: '原宿のピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年6月】',
  description: '原宿エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,原宿,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,明治神宮前',
}

const studios = [
  {
    name: 'PILATES STUDIO noa 原宿スタジオ',
    image: '/images/studios/pilates-studio-noa.webp',
    rating: 4.8,
    reviewCount: 13,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: 'JR原宿駅竹下口から徒歩0分！ダンススクールNOAが運営するマシンピラティス専門スタジオ。月6,600円〜とリーズナブルで続けやすい。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: '白を基調とした明るいスタジオで気持ちよくレッスンできます。Intro・BODY MAKE・Conditioningの3カテゴリから選べるのが良い。',
      },
      {
        author: 'A.T',
        rating: 4,
        date: '3週間前',
        text: '回数制で繰越無制限なので無駄がない。系列のヨガやバレエのレッスンも共通で受けられるのがお得。シャワールーム完備で仕事前後にも通えます。',
      },
    ],
    price: '月2回 6,600円〜',
    trial: '体験レッスン 無料',
    features: ['原宿駅徒歩0分', 'マシン専門', '月6,600円〜', '繰越無制限'],
    description: 'ダンススクールNOAが運営するマシンピラティス専門スタジオ。JR原宿駅竹下口から徒歩0分の好立地。月6,600円〜のリーズナブルな料金で、月2回〜8回の回数制プランは在籍中なら繰越無制限。Intro・BODY MAKE・Conditioningの3カテゴリから目的に合わせて選べます。',
    access: 'JR「原宿駅」竹下口 徒歩0分 / 東京メトロ千代田線・副都心線「明治神宮前駅」徒歩5分',
    address: '東京都渋谷区神宮前3-20-4 HIBICA神宮前 1F',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティス月4回。在籍中なら繰越無制限で無駄なく通える。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '月2回プラン（6,600円）',
      '月6回プラン（12,650円）',
      '月8回プラン（14,850円）',
      '体験レッスン無料',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'コンディショニング', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'シャワールーム', '更衣室', 'パウダールーム', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 表参道店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 217,
    reviews: [
      {
        author: 'M.N',
        rating: 5,
        date: '1週間前',
        text: '表参道駅から徒歩2分！女性専用で安心。音楽に合わせたリフォーマーレッスンが楽しくて毎回あっという間。部位別ボディメイクプログラムが充実。',
      },
      {
        author: 'S.H',
        rating: 5,
        date: '2週間前',
        text: 'スタジオからの眺めが良くて気分が上がります。体験2,000円で気軽に試せました。お腹・脚・お尻など目的別にクラスを選べるのが嬉しい。',
      },
      {
        author: 'R.K',
        rating: 4,
        date: '3週間前',
        text: '手ぶら体験ができるので仕事帰りにそのまま行けました。マシンピラティス専門なのでリフォーマーの台数が多く予約が取りやすい。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', '表参道駅徒歩2分', '部位別プログラム', 'マシン専門'],
    description: '女性専用マシンピラティス専門スタジオ。表参道駅から徒歩2分。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実。お腹・脚・お尻など強度や目的に合わせて選べるクラスが豊富。手ぶら体験も可能。',
    access: '東京メトロ銀座線・半蔵門線・千代田線「表参道駅」徒歩2分 / JR「原宿駅」徒歩10分',
    address: '東京都渋谷区神宮前5丁目（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回。部位別プログラムも選べる。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（14,520円）',
      '追加受講（1回 2,200円）',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '月〜金 10:00-22:00 / 土日祝 10:00-20:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'BDC PILATES 表参道スタジオ',
    image: '/images/studios/bdc-pilates.webp',
    rating: 4.7,
    reviewCount: 17,
    reviews: [
      {
        author: 'Y.K',
        rating: 5,
        date: '1週間前',
        text: '日本初のマシンピラティス専門スタジオ。40年以上の実績を持つBDCがプロデュース。表参道駅から徒歩2〜5分。少人数制でしっかり見てもらえます。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '2週間前',
        text: 'ダンサーのためのピラティスから生まれたスタジオなので、体の使い方を根本から改善できる。インストラクターの質が非常に高い。',
      },
      {
        author: 'R.M',
        rating: 5,
        date: '3週間前',
        text: 'A studioとB studioの2スタジオ体制で予約が取りやすい。男性もOKなので夫婦で通っています。',
      },
    ],
    price: '月4回 15,400円〜',
    trial: '体験レッスン 3,850円',
    features: ['日本初マシン専門', '表参道駅徒歩2分', '少人数制', '男性OK'],
    description: '40年以上の実績を持つブロードウェイダンスセンター（BDC）がプロデュースする日本初のマシンピラティス専門スタジオ。表参道に2スタジオ展開。最大6〜8名の少人数制で、リフォーマーを使ったダイナミックなグループレッスンが特徴。',
    access: '東京メトロ銀座線・半蔵門線・千代田線「表参道駅」B3出口 徒歩5分・A2出口 徒歩3分 / JR「原宿駅」徒歩10分',
    address: '東京都港区南青山5-7-17 青山小原ビル 8F',
    popularPlan: {
      name: 'マシングループ月4回',
      description: 'リフォーマーを使ったマシンピラティスグループレッスン。月2回まで繰越可能。',
      price: '月4回 15,400円（税込）',
    },
    options: [
      '月8回プラン',
      '通い放題プラン',
      'プライベートレッスン',
      '追加レッスン（3,850円/回）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', 'ダンスパフォーマンス', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates KASANE 表参道店',
    image: '/images/studios/pilates-kasane.webp',
    rating: 4.8,
    reviewCount: 12,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '1週間前',
        text: '明治神宮前駅・原宿駅から徒歩5分。少人数4名以下のクラスからグループまで選べます。体験がたった980円で気軽に試せました。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '2週間前',
        text: 'オリジナルウェアの無料レンタルがあるので手ぶらで通えます。月4回15,400円で充実した内容。キャンペーンで入会金・初月無料でした。',
      },
      {
        author: 'H.M',
        rating: 4,
        date: '3週間前',
        text: 'パーソナルとグループ両方受けられるプランがあるのが魅力。インストラクターが丁寧で初心者でも安心。',
      },
    ],
    price: '月4回 15,400円〜',
    trial: '体験レッスン 980円',
    features: ['原宿駅徒歩5分', '少人数制', 'ウェア無料', '体験980円'],
    description: 'マシンピラティス専門スタジオ。明治神宮前駅・原宿駅から徒歩5分。4名以下の少人数クラスから最大12名のグループレッスンまで幅広く対応。オリジナルウェアの無料レンタルで手ぶら通いが可能。パーソナルとグループを組み合わせたプランもあり。',
    access: '東京メトロ千代田線・副都心線「明治神宮前駅」徒歩5分 / JR「原宿駅」徒歩5分',
    address: '東京都渋谷区神宮前6-34-22 神宮前634ビル B1F',
    popularPlan: {
      name: 'マンスリー4回プラン',
      description: 'マシンピラティスグループレッスン月4回。少人数制で丁寧な指導。',
      price: '月4回 15,400円（税込）',
    },
    options: [
      '月6回プラン（19,800円）',
      '月8回プラン（24,200円）',
      '追加チケット（3,850円/回）',
      'キャンペーン：入会金・初月無料',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー', 'ウェア無料レンタル'],
    },
  },
  {
    name: 'Sky Pilates Tokyo',
    image: '/images/studios/sky-pilates-tokyo.webp',
    rating: 4.8,
    reviewCount: 16,
    reviews: [
      {
        author: 'M.A',
        rating: 5,
        date: '1週間前',
        text: '南青山の落ち着いた雰囲気のプライベートスタジオ。表参道駅・外苑前駅から徒歩7分。一人ひとりに合わせたパーソナルレッスンで効果を実感。',
      },
      {
        author: 'T.S',
        rating: 5,
        date: '2週間前',
        text: '朝8時から営業しているので出勤前に通えます。インストラクターのランク別に料金が設定されていて、5,500円〜7,000円/60分と明朗会計。',
      },
      {
        author: 'N.K',
        rating: 4,
        date: '3週間前',
        text: 'マシンを使ったパーソナルレッスンで姿勢が劇的に改善しました。キャンペーン利用で入会金無料になったのも嬉しい。',
      },
    ],
    price: '1回 5,500円〜',
    trial: 'キャンペーンで入会金無料',
    features: ['南青山', 'パーソナル専門', '朝8時〜', '都度払い'],
    description: '南青山のパーソナルピラティス専門スタジオ。表参道駅・外苑前駅から徒歩7分。マシンを使った完全マンツーマンのプライベートレッスンで、一人ひとりの身体に合わせたオーダーメイドプログラムを提供。朝8時〜夜21時まで営業。',
    access: '東京メトロ銀座線「外苑前駅」徒歩7分 / 東京メトロ銀座線・半蔵門線・千代田線「表参道駅」徒歩7分',
    address: '東京都港区南青山3-3-16 IQビルディング GF',
    popularPlan: {
      name: 'パーソナルレッスン（60分）',
      description: '完全マンツーマンのマシンピラティスプライベートレッスン。',
      price: '1回 5,500円〜7,000円（税込・インストラクターランクにより異なる）',
    },
    options: [
      '回数券あり（詳細は公式サイト）',
      'キャンペーン：入会金無料',
      'オンラインレッスンも対応',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'リハビリ', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', '更衣室'],
    },
  },
  {
    name: 'PILATES YOGA &a 北参道',
    image: '/images/studios/pilates-and-a-yoga.webp',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      {
        author: 'E.Y',
        rating: 5,
        date: '1週間前',
        text: '北参道駅から徒歩1分。理学療法士や柔道整復師など医療系国家資格を持つトレーナーが在籍。カウンセリングが丁寧で安心感がある。',
      },
      {
        author: 'N.M',
        rating: 5,
        date: '2週間前',
        text: '完全予約制のプライベートレッスンなので、自分のペースでじっくり取り組めます。体験当日に回数券購入で体験5,500円・入会金無料。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: 'ヨガとピラティスの両方が受けられるのが魅力。トレーナーが身体の状態をしっかり評価してくれるので効果を実感しやすい。',
      },
    ],
    price: '1回 5,500円〜',
    trial: '体験レッスン 5,500円（回数券購入時）',
    features: ['北参道駅徒歩1分', '国家資格保持者', '完全予約制', 'パーソナル'],
    description: '完全予約制のプライベートピラティス・ヨガスタジオ。北参道駅から徒歩1分。理学療法士・柔道整復師・鍼灸師など医療系国家資格を持つトレーナーが多数在籍。丁寧なカウンセリングと的確な身体評価に基づくオーダーメイドプログラム。',
    access: '東京メトロ副都心線「北参道駅」2番出口 徒歩1分 / JR「原宿駅」徒歩12分',
    address: '東京都渋谷区千駄ケ谷3-14-6 富田ビル 2F & 6F',
    popularPlan: {
      name: 'パーソナルレッスン回数券',
      description: '完全予約制のプライベートピラティス・ヨガレッスン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験当日入会で入会金無料',
      '回数券購入で体験5,500円',
      'ヨガ・ピラティス両方受講可',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'リハビリ', '体質改善', '産後ケア'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'マット', '更衣室'],
    },
  },
  {
    name: 'Pilates salon CROWN',
    image: '/images/studios/pilates-crown-harajuku.webp',
    rating: 4.6,
    reviewCount: 24,
    reviews: [
      {
        author: 'C.M',
        rating: 5,
        date: '1週間前',
        text: '原宿駅から徒歩2分の完全個室パーソナルスタジオ。マシンピラティスとヨガを融合させたアプローチが新しい。女性専用で安心。',
      },
      {
        author: 'K.A',
        rating: 5,
        date: '2週間前',
        text: '骨格から美しさを追求するコンセプトに惹かれて入会。1対1なので自分の身体に合わせたレッスンを受けられる。初回クーポンで5,700円。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '3週間前',
        text: 'セミパーソナル（2名まで）なら1人5,000円とリーズナブル。友人と一緒に通っています。完全予約制で待ち時間なし。',
      },
    ],
    price: '1回 7,700円（60分）',
    trial: '初回クーポン 2,000円OFF',
    features: ['女性専用', '原宿駅徒歩2分', '完全個室', 'ヨガ融合'],
    description: '原宿駅から徒歩2分の女性専用・完全個室パーソナルピラティスサロン。2025年7月オープン。マシンピラティスとヨガを融合させた独自のアプローチで「骨格から纏う美しさ」を追求。完全予約制で一人ひとりに寄り添ったレッスン。',
    access: 'JR「原宿駅」表参道改札東口 徒歩2分 / 東京メトロ千代田線・副都心線「明治神宮前駅」徒歩2分',
    address: '東京都渋谷区神宮前1-15-12 シャトーヒロ本館 406',
    popularPlan: {
      name: 'パーソナルレッスン（60分）',
      description: '完全個室のマシンピラティス×ヨガパーソナルレッスン。',
      price: '1回 7,700円（税込）',
    },
    options: [
      'セミパーソナル（2名まで・1人5,000円）',
      '初回限定クーポン 2,000円OFF（コード：1111）',
      'リピータークーポン 1,000円OFF',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['骨格矯正', 'ボディメイク', '姿勢改善', 'リラクゼーション'],
    },
    basicInfo: {
      hours: '完全予約制（公式サイトでご確認ください）',
      closed: '不定休',
      facilities: ['リフォーマー', 'ヨガマット', '完全個室', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！原宿エリアのスタジオはほとんどが初心者歓迎。PILATES STUDIO noaはIntroクラスで基礎から学べますし、ピラティスKも初心者向けプログラムが充実しています。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。原宿エリアはマシン専門スタジオが特に充実しています。',
  },
  {
    question: '原宿のピラティスの料金相場は？',
    answer: 'グループ月4回で8,800円〜15,400円程度。PILATES STUDIO noaが月4回8,800円〜で最もリーズナブル。ピラティスKは月4回13,420円〜、KASANEは月4回15,400円〜。パーソナルは1回5,500円〜7,700円。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。KASANEはウェア無料レンタルで手ぶらOK。ピラティスKも手ぶら体験可能です。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。PILATES YOGA &aではヨガとピラティスの両方が受けられます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'PILATES STUDIO noa、BDC PILATES表参道、Sky Pilates Tokyo、PILATES YOGA &a北参道は男性も通えます。ピラティスKとPilates salon CROWNは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'PILATES STUDIO noaは体験レッスン無料。KASANEは体験980円。ピラティスKは体験2,000円。BDC PILATESは体験3,850円。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function HarajukuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '原宿', url: 'https://pilates-biyori.com/area/harajuku/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス原宿おすすめ7選！<br className="hidden md:block" />
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
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">原宿</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="原宿" studioNames={studios.map((s) => s.name)} />

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
              「原宿で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、原宿エリアでおすすめのピラティススタジオ7選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">&#10003;</span>
                  <span>原宿・明治神宮前でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">&#10003;</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">&#10003;</span>
                  <span>無料体験や格安体験のスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">&#10003;</span>
                  <span>駅近で通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">&#10003;</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="原宿" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              原宿のおすすめピラティススタジオ7選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              原宿のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">5,500円〜15,400円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 5,500円〜7,700円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜5,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              原宿は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の表参道エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              原宿でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR「原宿駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  原宿エリアのスタジオは原宿駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。原宿駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  原宿は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  原宿エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  原宿エリアだけでなく、近隣の<Link href="/area/omotesando" className="text-warm-700 underline hover:text-warm-900">表参道</Link>、<Link href="/area/shibuya" className="text-warm-700 underline hover:text-warm-900">渋谷</Link>、<Link href="/area/yoyogi" className="text-warm-700 underline hover:text-warm-900">代々木</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>原宿エリアの豆知識：</strong>原宿は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                  月額1万円以下で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">&#8226; PILATES STUDIO noa（月4回 8,800円〜）</li>
                  <li className="text-warm-700">&#8226; ピラティスK（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">&#8226; ピラティスK 表参道（月4回 13,420円〜）</li>
                  <li className="text-warm-700">&#8226; Pilates salon CROWN（1回 7,700円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩5分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">&#8226; PILATES STUDIO noa（原宿駅 徒歩0分）</li>
                  <li className="text-warm-700">&#8226; Pilates salon CROWN（原宿駅 徒歩2分）</li>
                  <li className="text-warm-700">&#8226; ピラティスK（表参道駅 徒歩2分）</li>
                  <li className="text-warm-700">&#8226; PILATES YOGA &amp;a（北参道駅 徒歩1分）</li>
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
                週1-2回からスタート。最低2-3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>&#8226; PILATES STUDIO noa（6,600円〜/月2回）</li>
                  <li>&#8226; PILATES STUDIO noa（8,800円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>&#8226; ピラティスK（13,420円〜）</li>
                  <li>&#8226; KASANE（15,400円〜）</li>
                  <li>&#8226; BDC PILATES（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">都度払い</p>
                <p className="text-sm text-warm-600 mb-4">
                  1対1のプライベートレッスン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>&#8226; Sky Pilates Tokyo（5,500円〜/回）</li>
                  <li>&#8226; PILATES YOGA &amp;a（5,500円〜/回）</li>
                  <li>&#8226; Pilates salon CROWN（7,700円/回）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。グループレッスンかパーソナルかも重要な選択肢です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  原宿の料金相場はグループ月4回で8,800円〜15,400円。パーソナルは1回5,500円〜7,700円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  PILATES STUDIO noaは体験無料。KASANEは980円、ピラティスKは2,000円で体験可能。まずは気になるスタジオを2〜3か所体験してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  原宿エリアはJR原宿駅・東京メトロ明治神宮前駅・北参道駅・表参道駅と複数の駅からアクセス可能。PILATES STUDIO noaは原宿駅徒歩0分と抜群の立地です。
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
              今回は原宿エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では原宿にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜5,500円。<br />
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

      <RelatedAreas currentSlug="harajuku" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
