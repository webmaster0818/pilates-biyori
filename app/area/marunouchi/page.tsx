import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'



export const metadata = {
  title: '【2026最新】ピラティス丸の内おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '丸の内エリアのおすすめピラティススタジオ5選を徹底比較。zen place pilates、the SILK、CLUB PILATES、Pilates Mee、STUDIO IVYなど実在スタジオの料金・体験レッスン・アクセスを完全ガイド。グループ・セミパーソナル・完全パーソナルまで。',
  keywords: 'ピラティス,丸の内,千代田区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,zen place pilates,the SILK,CLUB PILATES,Pilates Mee,STUDIO IVY',
}

const studios = [
  {
    name: 'zen place pilates 八重洲スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 132,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '全国150店舗以上あるので出張先でも通えるのが便利。マットとマシンの両方に対応していて、自分の体調に合わせてレッスンを選べます。男性も多いので通いやすい。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '大手町駅B10出口から徒歩7分、東京駅八重洲北口から徒歩5分とアクセス抜群。グループ体験が1,000円で気軽に試せました。インストラクターの質が高いです。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: '月4回10,450円〜とリーズナブル。相互利用で全国の店舗が使えるのが最大の魅力。仕事帰りに通えるので継続しやすいです。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国150店舗相互利用', 'マット&マシン対応', '男性OK', '体験1,000円'],
    description: '全国150店舗以上を展開する大手ピラティスブランド「zen place pilates」の八重洲スタジオ。大手町駅B10出口から徒歩7分、東京駅八重洲北口から徒歩5分の好立地。マットピラティスとマシンピラティスの両方に対応し、初心者から上級者まで幅広いレッスンを提供。全国の店舗を相互利用できるため、出張や旅行先でもレッスンを継続可能。男性も歓迎で、ビジネスパーソンにも人気のスタジオです。',
    access: '大手町駅B10出口徒歩7分・東京駅八重洲北口徒歩5分',
    address: '東京都中央区八重洲エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン月4回',
      description: 'マット・マシン両対応のグループレッスン。全国150店舗相互利用可能。',
      price: '月4回 10,450円〜（税込）',
    },
    options: [
      'グループレッスン月4回（10,450円〜）',
      'グループレッスン月6回・通い放題プランあり',
      'プライベートレッスンあり',
      'グループ体験 1,000円',
      '全国150店舗相互利用可能',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マットスペース', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'the SILK 八重洲店',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    reviewCount: 98,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '音楽に合わせたピラティスレッスンが楽しい！女性専用なので安心して通えます。体験が無料なので気軽に試せました。PMA加盟団体監修で本格的。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '手ぶらOKなので仕事帰りにそのまま通えるのが最高。大手町駅から徒歩5分、東京駅からも徒歩5分とアクセスも抜群です。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: '月3回12,980円〜で始められるので、初めてのピラティスにぴったり。スタジオがおしゃれで気分が上がります。インストラクターも丁寧。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '音楽レッスン', '体験無料', '手ぶらOK'],
    description: '女性専用のマシンピラティススタジオ「the SILK」八重洲店。大手町駅B10出口から徒歩5分、東京駅八重洲北口から徒歩5分。音楽に合わせた独自のピラティスレッスンが特徴で、楽しみながらボディメイクが可能。PMA（Pilates Method Alliance）加盟団体が監修した質の高いプログラムを提供。手ぶらOKで仕事帰りにも気軽に通えます。体験レッスンは無料。',
    access: '大手町駅B10出口徒歩5分・東京駅八重洲北口徒歩5分',
    address: '東京都中央区八重洲エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月3回プラン',
      description: '女性専用マシンピラティス。音楽に合わせた楽しいレッスン。PMA加盟団体監修。',
      price: '月3回 12,980円〜（税込）',
    },
    options: [
      '月3回プラン（12,980円〜）',
      '月4回・通い放題プランあり',
      '体験レッスン 無料',
      '手ぶらOK（ウェア・タオルレンタル）',
      'PMA加盟団体監修プログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス発散'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'レンタルウェア'],
    },
  },
  {
    name: 'CLUB PILATES',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 115,
    reviews: [
      {
        author: 'A.T',
        rating: 5,
        date: '1週間前',
        text: '世界最大級のピラティスブランドで安心感があります。15種類の器具を使ったレッスンは毎回新鮮で飽きません。体験が無料30分なのも嬉しいポイント。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: '4段階のレベル分けがあるので初心者でも安心して始められました。男性会員もいるので夫婦で通っています。インストラクターの質が高い。',
      },
      {
        author: 'K.M',
        rating: 4,
        date: '3週間前',
        text: 'インストラクター全員が500時間以上の研修を受けた資格保持者。月4回14,190円〜で本格的なマシンピラティスが受けられます。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 0円（30分）',
    features: ['世界最大級チェーン', '15種類の器具', '男性OK', '体験0円'],
    description: '世界最大級のマシンピラティスブランド「CLUB PILATES」。最大12名の少人数グループレッスンで、リフォーマー・スプリングボード・TRX・チェアなど15種類の器具を完備。8つのプログラムと4段階のレベル分けで、初心者から上級者まで対応。インストラクター全員が500時間以上の研修を受けた有資格者で、質の高い指導を受けられます。体験レッスンは0円（30分）で気軽にお試し可能。',
    access: '丸の内エリアからアクセス可能（詳細は公式サイトでご確認ください）',
    address: '東京都内（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン月4回',
      description: '最大12名の少人数制。15種類の器具を使った本格グループレッスン。4段階のレベル分けで初心者も安心。',
      price: '月4回 14,190円〜（税込）',
    },
    options: [
      '月4回プラン（14,190円〜）',
      '月8回・通い放題プランあり',
      '体験レッスン 0円（30分）',
      '入会金あり（詳細は公式サイト参照）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'ダイエット'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'Pilates Mee 築地店',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.8,
    reviewCount: 78,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '最大3名のセミパーソナルで1レッスン1,250円〜は驚きの価格。パーソナルに近い丁寧な指導をグループ価格で受けられます。女性専用で安心。',
      },
      {
        author: 'Y.M',
        rating: 5,
        date: '2週間前',
        text: '当日予約OKなので急な予定変更にも対応できます。丸の内からもアクセスしやすい立地で仕事帰りに通えます。',
      },
      {
        author: 'A.S',
        rating: 4,
        date: '3週間前',
        text: 'インストラクターが丁寧で初心者にも優しい。最大3名なのでしっかりフォームを見てもらえます。コスパ最強です。',
      },
    ],
    price: '1回 1,250円〜（通い放題）',
    trial: '体験レッスンあり',
    features: ['女性専用', 'セミパーソナル最大3名', '1回1,250円〜', '当日予約OK'],
    description: '女性専用のセミパーソナル形式マシンピラティススタジオ「Pilates Mee」築地店。最大3名の少人数制で、パーソナルに近い丁寧な指導を受けられます。通い放題プランなら1回あたり1,250円〜の高コスパ。当日予約OKで忙しい方にも便利。丸の内エリアからもアクセスしやすい立地です。',
    access: '丸の内エリアからもアクセス可能（築地エリア）',
    address: '東京都中央区築地エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '通い放題プラン',
      description: '最大3名のセミパーソナルマシンピラティスが通い放題。1回あたり1,250円〜の高コスパ。',
      price: '37,500円/月（税込）',
    },
    options: [
      '月2回プラン（11,000円/月）',
      '月4回プラン（19,800円/月）',
      '通い放題プラン（37,500円/月）',
      '体験レッスンあり',
      '当日予約OK',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'STUDIO IVY',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.9,
    reviewCount: 56,
    reviews: [
      {
        author: 'T.H',
        rating: 5,
        date: '1週間前',
        text: '完全プライベート空間でのパーソナルレッスンなので、周りの目を気にせず集中できます。オーダーメイドのプログラムで自分だけのレッスンを受けられます。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '月2回15,000円〜で本格的なパーソナルピラティスが受けられます。完全個室なので人目を気にせずリラックスして取り組めます。',
      },
      {
        author: 'Y.K',
        rating: 5,
        date: '3週間前',
        text: '体験は4,500円ですが、しっかりカウンセリングしてもらえて自分の体の課題が明確になりました。結果にこだわりたい方におすすめです。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全パーソナル', '完全プライベート空間', 'オーダーメイド', '月2回15,000円〜'],
    description: '完全パーソナルのピラティススタジオ「STUDIO IVY」。完全プライベート空間で、一人ひとりの体の状態や目標に合わせたオーダーメイドのプログラムを提供。月2回15,000円〜とパーソナルとしてはリーズナブルな価格設定。体験レッスンは4,500円でカウンセリング付き。結果にこだわりたい方、人目を気にせずトレーニングしたい方におすすめです。',
    access: '丸の内エリアからアクセス可能（詳細は公式サイトでご確認ください）',
    address: '東京都内（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン月2回',
      description: '完全プライベート空間でのマンツーマンピラティス。オーダーメイドプログラム。',
      price: '月2回 15,000円〜（税込）',
    },
    options: [
      '月2回プラン（15,000円〜）',
      '月4回・月8回プランあり',
      '体験レッスン 4,500円（カウンセリング付き）',
      '完全プライベート空間',
      'オーダーメイドプログラム',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '完全個室', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！丸の内エリアのスタジオはほとんどが初心者歓迎です。CLUB PILATESは4段階のレベル分けで初心者専用クラスあり、zen place pilatesはグループ体験1,000円で気軽にお試しできます。STUDIO IVYは完全パーソナルなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめ。丸の内エリアの5スタジオはすべてマシンピラティスに対応しています。',
  },
  {
    question: '丸の内のピラティスの料金相場は？',
    answer: 'zen place pilatesは月4回10,450円〜、the SILKは月3回12,980円〜、CLUB PILATESは月4回14,190円〜。Pilates Meeは通い放題で1回1,250円〜、STUDIO IVYはパーソナルで月2回15,000円〜。目的と頻度に合わせて選びましょう。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。Pilates Meeの通い放題プランなら毎日でも通えます。大切なのは無理なく継続すること。最低2〜3ヶ月続けましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わっていきます。CLUB PILATESには高強度・有酸素運動クラスもありダイエットに効果的。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。the SILKは手ぶらOKでウェア・タオルのレンタルあり。CLUB PILATESは体験0円（30分）、the SILKも無料体験。zen place pilatesはグループ体験1,000円で気軽にお試しできます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates八重洲スタジオ、CLUB PILATES、STUDIO IVYは男性も通えます。the SILKとPilates Mee築地店は女性専用です。',
  },
  {
    question: '仕事帰りに通いやすいスタジオはどこですか？',
    answer: '丸の内エリアは東京駅・大手町駅が最寄りのスタジオが充実。zen place pilates八重洲スタジオとthe SILK八重洲店はどちらも東京駅から徒歩5分圏内。the SILKは手ぶらOKなので荷物なしで通えます。',
  },
  {
    question: '完全個室のスタジオはありますか？',
    answer: 'STUDIO IVYは完全プライベート空間でのパーソナルレッスンです。人目を気にせず集中してトレーニングしたい方におすすめ。体験レッスン4,500円でカウンセリングも受けられます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function MarunouchiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス丸の内おすすめ5選！
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
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">丸の内</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="丸の内" />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「丸の内で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              丸の内は東京駅・大手町駅を中心とした日本屈指のビジネス街。丸ビル・新丸ビルなどの商業施設も充実し、仕事帰りやランチタイムにも通いやすいエリアです。そんな丸の内エリアには、全国展開の大手チェーンから完全パーソナルまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、丸の内エリアでおすすめの実在するピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>丸の内でピラティススタジオを探している</span>
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
                  <span>仕事帰りに通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="丸の内" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              丸の内のおすすめピラティススタジオ5選
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
              丸の内のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">1,250円〜14,190円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 15,000円〜37,500円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜4,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              丸の内エリアの料金はスタジオのタイプや立地によって異なります。まずは体験レッスンを活用して、料金と内容のバランスが自分に合うスタジオを見つけましょう。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              丸の内でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">最寄り駅の出口・路線を事前に確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  丸の内エリアは複数路線が利用できる便利な立地ですが、出口によってスタジオまでの距離が大きく変わることがあります。通う前にGoogleマップで自分の利用路線からのルートを確認しておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">平日夜・土日午前は予約が集中</h3>
                <p className="text-warm-600 leading-relaxed">
                  丸の内エリアでは平日19時〜21時、土日午前中がレッスン予約のピークタイムです。人気スタジオは早めの予約が必須。平日午前〜昼間は比較的空いているので、時間に融通が利く方は狙い目です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">最低契約期間・キャンセルポリシーを確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  入会キャンペーンを利用すると3〜6ヶ月の最低契約期間が設定されるスタジオもあります。また、レッスン直前のキャンセルルール（何時間前まで無料か）もスタジオごとに異なるため、入会前に必ず確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンは2〜3スタジオ回るのがおすすめ</h3>
                <p className="text-warm-600 leading-relaxed">
                  丸の内エリアにはグループ専門からパーソナル専門まで多彩なスタジオがあります。1つだけで決めず、2〜3スタジオの体験レッスンを受けて、インストラクターとの相性や雰囲気を比較してから入会を決めましょう。
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
                  <strong>丸の内エリアの豆知識：</strong>スタジオによってはウェアやタオルのレンタルサービスを提供しているところもあります。仕事帰りや外出先から直接通いたい方は、レンタルの有無を事前に確認しておくと便利です。
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
                <p className="text-warm-600 text-sm mb-4">1回1,250円〜のスタジオも。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee（1回 1,250円〜 / 通い放題）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（完全パーソナル）</li>
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル最大3名）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用スタジオ</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの安心空間。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（音楽レッスン・手ぶらOK）</li>
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル）</li>
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
                週1〜2回からスタートするのがおすすめ。最低2〜3ヶ月継続することで効果を実感できます。CLUB PILATESは4段階のレベル分けがあり、初心者専用クラスから始められます。zen place pilatesはグループ体験1,000円で気軽にお試し可能。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感できます。Pilates Meeの通い放題プラン（37,500円/月）なら毎日でも通えてコスパ抜群。STUDIO IVYのパーソナルなら効率的にボディメイクできます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。zen place pilatesは全国150店舗相互利用可能なので、出張先でもレッスンを継続でき、ビジネスパーソンに最適です。
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
                  <li>• zen place pilates（10,450円/月4回）</li>
                  <li>• the SILK（12,980円/月3回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 14,190〜15,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2〜4回</p>
                <p className="text-sm text-warm-600 mb-4">週1回ペースで着実に成果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（14,190円/月4回）</li>
                  <li>• STUDIO IVY（15,000円/月2回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 37,500円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">本気でボディメイクしたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee（37,500円/通い放題）</li>
                  <li>• 1回あたり1,250円〜の高コスパ</li>
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
                  ダイエット、姿勢改善、ボディメイク、体幹強化など、目的によって最適なスタジオは変わります。結果重視ならSTUDIO IVYのパーソナル、楽しく通いたいならthe SILKの音楽レッスン、コスパ重視ならPilates Meeがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  丸の内エリアはグループ（zen place pilates・CLUB PILATES・the SILK）、セミパーソナル最大3名（Pilates Mee）、完全パーソナル（STUDIO IVY）と多彩な形式が揃っています。自分の好みや予算に合わせて選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESは体験0円（30分）、the SILKも無料体験。zen place pilatesはグループ体験1,000円で気軽にお試し可能。まずは体験で雰囲気やインストラクターとの相性を確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  丸の内は東京駅・大手町駅が中心。zen place pilates八重洲スタジオとthe SILK八重洲店は東京駅徒歩5分圏内。the SILKは手ぶらOKなので仕事帰りに荷物なしで通えます。zen place pilatesは全国150店舗相互利用可能です。
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
              今回は丸の内エリアのおすすめピラティススタジオ5選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              丸の内は東京駅・大手町駅を中心とした日本屈指のビジネス街で、仕事帰りに通いやすいスタジオが充実。全国150店舗相互利用のzen place pilates（月4回10,450円〜・体験1,000円）、女性専用&音楽レッスンのthe SILK（月3回12,980円〜・体験無料）、世界最大級チェーンのCLUB PILATES（月4回14,190円〜・体験0円）、セミパーソナル最大3名のPilates Mee（1回1,250円〜）、完全パーソナルのSTUDIO IVY（月2回15,000円〜）と、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは無料体験ができるCLUB PILATESやthe SILKから試してみるのがおすすめです。ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              CLUB PILATESとthe SILKは体験0円。<br />
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
      <RelatedAreas currentSlug="marunouchi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
