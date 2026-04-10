import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス薬院おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '薬院エリアのおすすめピラティススタジオ4選を徹底比較。zen place pilates福岡薬院・CLUB PILATES福岡赤坂薬院店・AR pilates・edgy pilates studioなど実在スタジオの料金・体験レッスン・アクセスを完全ガイド。マシンピラティス・女性専用・完全プライベートまで。',
  keywords: 'ピラティス,薬院,福岡,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,zen place,CLUB PILATES,AR pilates,edgy pilates',
}

const studios = [
  {
    name: 'zen place pilates 福岡薬院',
    image: '/images/pilates1.jpg',
    rating: 4.7,
    reviewCount: 156,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '薬院エリアで本格的なピラティスが受けられます。マットもマシンもどちらも対応していて、自分のレベルに合わせて選べるのが嬉しい。インストラクターの指導が丁寧で、体の変化を実感しています。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '全国展開の大手なので安心感があります。薬院駅から近くて通いやすい。体験1,000円で気軽に試せたのも良かったです。レッスンの種類が豊富で飽きません。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: 'マシンピラティスのグループレッスンが充実しています。リフォーマーを使ったレッスンで体幹がしっかり鍛えられます。各プランの価格帯も比較的リーズナブルだと思います。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン完備', '各プラン最安価格帯', '薬院エリア', 'インストラクター養成'],
    description: '全国130店舗以上を展開する大手ピラティススタジオの福岡薬院スタジオ。マットピラティスからマシンピラティスまで豊富なレッスンメニューを用意。各プランが最安価格帯で設定されており、コストパフォーマンスに優れています。解剖学に基づいた科学的なアプローチと経験豊富なインストラクターによる質の高い指導が特徴。初心者から経験者まで幅広いレベルに対応しています。',
    access: '西鉄天神大牟田線「薬院駅」から徒歩圏内',
    address: '福岡県福岡市中央区薬院（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マット・マシンどちらも受講可能な人気プラン。各プラン最安価格帯で始めやすい。',
      price: '月4回 10,450円〜（税込）',
    },
    options: [
      'マットグループレッスン',
      'マシングループレッスン',
      'プライベートレッスン（1回 8,250円〜）',
      '全店舗利用可能プランあり',
      'インストラクター養成コース（別途）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00（店舗により異なる）',
      closed: '不定休',
      facilities: ['リフォーマー', 'チェア', 'バレル', 'シャワー', 'ロッカー', 'Wi-Fi'],
    },
  },
  {
    name: 'CLUB PILATES 福岡赤坂薬院店',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 124,
    reviews: [
      {
        author: 'A.H',
        rating: 5,
        date: '1週間前',
        text: '世界最大級のピラティスチェーンということで安心して入会しました。薬院大通駅から徒歩9分で通えます。8種類のマシンを使ったレッスンが本格的で、体の変化を感じています。',
      },
      {
        author: 'R.M',
        rating: 5,
        date: '2週間前',
        text: 'レベル別にクラスが分かれているので、初心者でも安心して始められました。インストラクターが海外研修を受けているので指導の質が高いです。',
      },
      {
        author: 'K.I',
        rating: 4,
        date: '3週間前',
        text: 'グループレッスンなのにしっかりフォームを見てもらえます。体験レッスンで雰囲気が分かるので、まず試してみるのがおすすめです。',
      },
    ],
    price: '月4回 11,990円〜',
    trial: '体験レッスンあり（公式サイトで確認）',
    features: ['世界最大級チェーン', '薬院大通駅徒歩9分', '8種類のマシン', 'レベル別クラス'],
    description: '世界最大級のピラティスチェーン「CLUB PILATES」の福岡赤坂薬院店。薬院大通駅から徒歩9分の立地。リフォーマーをはじめ8種類の本格マシンを使ったグループレッスンを提供。レベル1（初心者）からレベル2.5（上級）まで段階別のクラス構成で、自分のペースでステップアップ可能。海外研修を受けた質の高いインストラクターが在籍しています。',
    access: '地下鉄七隈線「薬院大通駅」から徒歩9分',
    address: '福岡県福岡市中央区赤坂（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'EFTプラン（月4回）',
      description: '世界最大級チェーンの本格マシンピラティス。レベル別クラスで初心者でも安心。',
      price: '月4回 11,990円〜（税込）',
    },
    options: [
      'EFTプラン（月4回）',
      'EFTプラン（月8回）',
      'フリープラン（通い放題）',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の75%）',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', 'ダイエット'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'EXOチェア', 'スプリングボード', 'TRX', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'AR pilates',
    image: '/images/pilates3.jpg',
    rating: 4.9,
    reviewCount: 78,
    reviews: [
      {
        author: 'N.S',
        rating: 5,
        date: '1週間前',
        text: '女性専用で完全プライベートなので、人目を気にせず集中できます。理学療法士の先生が在籍しているので、体の悩みに対して専門的なアドバイスをもらえるのが心強いです。',
      },
      {
        author: 'E.Y',
        rating: 5,
        date: '2週間前',
        text: '都度利用制なので、自分のペースで通えるのが嬉しいです。月額制だと使わない月がもったいないので、この仕組みはありがたい。一回一回が丁寧なレッスンです。',
      },
      {
        author: 'H.O',
        rating: 5,
        date: '3週間前',
        text: '理学療法士が体の状態をしっかり評価してからレッスンを組んでくれるので、効果が出やすいと感じます。産後の骨盤ケアで通い始めましたが、体調が改善してきました。',
      },
    ],
    price: '都度利用 8,800円〜/回',
    trial: '初回カウンセリング付き体験あり',
    features: ['女性専用', '完全プライベート', '理学療法士在籍', '都度利用制'],
    description: '女性専用・完全プライベートのピラティススタジオ。理学療法士が在籍しており、体の状態を専門的に評価したうえで一人ひとりに最適なプログラムを提供。産後ケアや姿勢改善、慢性的な不調の改善など、医学的な視点からのアプローチが強み。都度利用制なので月額に縛られず自分のペースで通えます。完全個室のプライベート空間で集中してレッスンを受けられます。',
    access: '薬院エリア（詳細は公式サイトでご確認ください）',
    address: '福岡県福岡市中央区薬院（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '都度利用プラン',
      description: '完全プライベート・理学療法士による専門指導。月額制ではなく都度利用で自分のペースで通える。',
      price: '1回 8,800円〜（税込）',
    },
    options: [
      '都度利用（1回 8,800円〜）',
      '初回カウンセリング付き体験あり',
      '回数券あり（詳細は公式サイトで確認）',
      '産後ケアプログラム対応',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['産後ケア', '姿勢改善', '慢性不調改善', '体幹強化'],
    },
    basicInfo: {
      hours: '完全予約制（公式サイトでご確認ください）',
      closed: '不定休',
      facilities: ['リフォーマー', '完全個室', '更衣室'],
    },
  },
  {
    name: 'edgy pilates studio',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    reviewCount: 92,
    reviews: [
      {
        author: 'T.M',
        rating: 5,
        date: '1週間前',
        text: '福岡市中央区薬院にあるマシンピラティス専門スタジオ。リフォーマーを使ったレッスンがメインで、体の使い方が変わったのを実感しています。スタジオの雰囲気もおしゃれです。',
      },
      {
        author: 'C.K',
        rating: 5,
        date: '2週間前',
        text: 'マシンピラティスに特化しているので、マシンの台数が多くて予約が取りやすいです。インストラクターの指導も的確で、毎回新しい発見があります。',
      },
      {
        author: 'M.W',
        rating: 4,
        date: '3週間前',
        text: '薬院の街並みに馴染むおしゃれな内装で、通うのが楽しくなります。マシンピラティス初心者でしたが、丁寧に教えてもらえるので安心でした。',
      },
    ],
    price: '月4回 12,100円〜',
    trial: '体験レッスンあり',
    features: ['マシンピラティス専門', '福岡市中央区薬院', 'おしゃれな空間', '少人数制'],
    description: '福岡市中央区薬院にあるマシンピラティス専門スタジオ。リフォーマーを中心としたマシンピラティスに特化し、少人数制でインストラクターの目が行き届く環境を提供。薬院の街並みに馴染むおしゃれな空間で、リフレッシュしながらボディメイクに取り組めます。初心者向けの基礎クラスから経験者向けのチャレンジクラスまで、幅広いレベルに対応しています。',
    access: '西鉄天神大牟田線「薬院駅」から徒歩圏内',
    address: '福岡県福岡市中央区薬院（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティス専門スタジオの人気プラン。少人数制で丁寧な指導。',
      price: '月4回 12,100円〜（税込）',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      'フリープラン（通い放題）',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'リフレッシュ', 'ダイエット'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！薬院エリアのスタジオはほとんどが初心者歓迎です。zen place pilates福岡薬院は初心者向けクラスが充実。CLUB PILATES福岡赤坂薬院店はレベル別クラスで段階的にステップアップ可能。AR pilatesは理学療法士が一人ひとりに合わせたプログラムを提供してくれます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめ。薬院エリアではzen place pilates（マット&マシン両対応）、CLUB PILATES・edgy pilates studio（マシン専門）が対応しています。',
  },
  {
    question: '薬院のピラティスの料金相場は？',
    answer: 'zen place pilates福岡薬院は月4回10,450円〜、CLUB PILATES福岡赤坂薬院店は月4回11,990円〜、edgy pilates studioは月4回12,100円〜、AR pilatesは都度利用で1回8,800円〜です。目的と頻度に合わせて選びましょう。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。AR pilatesの都度利用制なら、自分のペースで無理なく通えます。大切なのは継続すること。最低2〜3ヶ月続けましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わっていきます。edgy pilates studioやCLUB PILATESのマシンピラティスなら効率的にボディメイクが可能。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。zen place pilates福岡薬院は体験1,000円、CLUB PILATES福岡赤坂薬院店・edgy pilates studioも体験レッスンを実施中。AR pilatesは初回カウンセリング付き体験があります。まずは気軽に試してみましょう。',
  },
  {
    question: '女性専用のスタジオはありますか？',
    answer: 'AR pilatesが女性専用・完全プライベートのスタジオです。理学療法士が在籍しており、産後ケアや体の不調改善にも対応。人目を気にせず集中できる個室環境が特徴です。',
  },
  {
    question: '薬院駅からのアクセスは？',
    answer: '薬院駅は西鉄天神大牟田線・地下鉄七隈線が利用でき、天神に隣接する便利なエリアです。zen place pilates福岡薬院・edgy pilates studioは薬院駅から徒歩圏内。CLUB PILATES福岡赤坂薬院店は薬院大通駅から徒歩9分です。',
  },
  {
    question: 'プライベートレッスンを受けたいのですが？',
    answer: 'AR pilatesは完全プライベート専門で、理学療法士による専門的な指導が受けられます（都度利用1回8,800円〜）。zen place pilates福岡薬院もプライベートレッスン（1回8,250円〜）を提供しています。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function YakuinPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス薬院おすすめ4選！
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
              <span className="text-warm-600">薬院</span>
            </nav>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「薬院で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              薬院は西鉄天神大牟田線・地下鉄七隈線「薬院駅」が最寄りで、天神に隣接するおしゃれなカフェやレストランが並ぶエリアです。住宅街と商業地が程よく混在し、落ち着いた雰囲気の中でショッピングやグルメも楽しめる人気の街。そんな薬院エリアには、全国展開の大手から女性専用プライベートスタジオ、マシンピラティス専門店まで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、薬院エリアでおすすめの実在するピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>薬院でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>女性専用・プライベートスタジオに興味がある</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>理学療法士のいるスタジオで安心して通いたい</span>
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

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              薬院のおすすめピラティススタジオ4選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円台からスタート。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• CLUB PILATES（月4回 11,990円〜）</li>
                  <li className="text-warm-700">• edgy pilates studio（月4回 12,100円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">プライベート重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• AR pilates（完全プライベート・理学療法士）</li>
                  <li className="text-warm-700">• zen place pilates（プライベート 8,250円〜）</li>
                  <li className="text-warm-700">• 都度利用で自分のペースで通える</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・安心</h3>
                <p className="text-warm-600 text-sm mb-4">女性専用や大手運営で安心。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• AR pilates（女性専用・完全個室）</li>
                  <li className="text-warm-700">• CLUB PILATES（世界最大級チェーン）</li>
                  <li className="text-warm-700">• zen place pilates（全国130店舗以上）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回からスタートするのがおすすめ。最低2〜3ヶ月継続することで効果を実感できます。zen place pilates福岡薬院の月4回プラン（10,450円〜）なら週1回ペースで無理なく始められます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感できます。CLUB PILATES福岡赤坂薬院店のフリープランや、edgy pilates studioの通い放題プランなら集中的にトレーニングできます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体の不調改善が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                AR pilatesは理学療法士が在籍し、都度利用制なので自分のペースで通えます。産後ケアや慢性的な不調の改善など、医学的な視点からのアプローチを受けたい方におすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（10,450円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000円前後/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">マシンピラティスで着実に成果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（11,990円〜/月4回）</li>
                  <li>• edgy pilates studio（12,100円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">プライベートレッスン</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">1回8,250円〜</p>
                <p className="text-sm text-warm-600 mb-4">専門家による個別指導。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（プライベート 8,250円〜）</li>
                  <li>• AR pilates（都度利用 8,800円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、健康維持、産後ケアなど、目的によって最適なスタジオは変わります。体の不調改善ならAR pilates（理学療法士在籍）、ボディメイクならCLUB PILATESやedgy pilates studioのマシンピラティスがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  薬院エリアはグループレッスン（zen place pilates・CLUB PILATES・edgy pilates studio）と完全プライベート（AR pilates）の両方が揃っています。マットとマシンの両方を試したいならzen place pilates、マシン専門ならCLUB PILATESやedgy pilates studioがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen place pilates福岡薬院は体験1,000円。CLUB PILATES福岡赤坂薬院店・edgy pilates studioも体験レッスンを実施中。AR pilatesは初回カウンセリング付き体験があります。まずは気軽に体験で雰囲気やインストラクターとの相性を確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  薬院は西鉄天神大牟田線・地下鉄七隈線の2路線が利用でき、天神にも隣接する交通の便が良いエリアです。zen place pilates・edgy pilates studioは薬院駅から徒歩圏内、CLUB PILATESは薬院大通駅から徒歩9分。仕事帰りやお出かけの前後にも通いやすい立地です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は薬院エリアのおすすめピラティススタジオ4選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              薬院は天神に隣接するおしゃれなカフェやレストランが並ぶ人気エリアで、西鉄天神大牟田線・地下鉄七隈線の2路線が利用できる交通至便な街です。全国展開のzen place pilates福岡薬院（月4回10,450円〜）、世界最大級チェーンのCLUB PILATES福岡赤坂薬院店（月4回11,990円〜）、女性専用・完全プライベートのAR pilates（都度利用8,800円〜）、マシンピラティス専門のedgy pilates studio（月4回12,100円〜）と、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは体験1,000円のzen place pilates福岡薬院や、各スタジオの体験レッスンから試してみるのがおすすめです。ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              zen place pilates福岡薬院は体験1,000円。<br />
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
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
