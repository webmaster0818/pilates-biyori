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
  alternates: { canonical: 'https://biyori-pilates.com/area/omotesando/' },
  title: '表参道のピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年7月】',
  description: '表参道エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,表参道,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Pilates KASANE 表参道店',
    image: '/images/studios/pilates-kasane.webp',
    rating: 4.8,
    reviewCount: 12,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: 'パーソナルとグループ両方受けられるのが嬉しい。マシンもマットも充実していて、自分の目的に合わせてレッスンを選べます。体験が980円なのでお試ししやすかったです。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '表参道駅から近くて通いやすいです。インストラクターの方がとても丁寧で、初心者でも安心してレッスンを受けられました。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '1回3,025円から通えるので、月額プランに縛られずに自分のペースで通えます。マシンピラティスの効果を実感しています。',
      },
    ],
    price: '1回 3,025円〜',
    trial: '体験レッスン 980円',
    features: ['パーソナル&グループ', 'マシン&マット', '体験980円', '表参道駅近'],
    description: 'パーソナルレッスンとグループレッスンの両方に対応したピラティススタジオ。マシンピラティスとマットピラティスの両方を提供しており、初心者から経験者まで幅広いニーズに応えます。1回3,025円〜というリーズナブルな都度払いプランも魅力。体験レッスンは980円で気軽にお試しできます。',
    access: '東京メトロ銀座線・千代田線・半蔵門線「表参道駅」徒歩圏内',
    address: '東京都渋谷区神宮前（表参道駅徒歩圏内）',
    popularPlan: {
      name: '都度払いプラン',
      description: 'パーソナル&グループどちらも受講可能。マシン・マット両方対応で、自分のペースで通える。',
      price: '1回 3,025円〜（税込）',
    },
    options: [
      'パーソナルレッスン（マシン・マット対応）',
      'グループレッスン（少人数制）',
      '都度払い・回数券あり',
      '体験レッスン 980円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '柔軟性向上'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '不定休',
      facilities: ['ロッカー', 'マシン完備', 'マット完備'],
    },
  },
  {
    name: 'ピラティスK 表参道店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 217,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '女性専用なので周りの目を気にせずトレーニングに集中できます。マシンピラティス専門で、リフォーマーを使ったレッスンが充実しています。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: '月4回13,420円で通えるので、コスパが良いと思います。表参道という立地でこの価格はお得です。体験も2,000円で受けられました。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: 'スタジオがとてもおしゃれで、モチベーションが上がります。音楽に合わせたレッスンが楽しくて、あっという間に時間が過ぎます。',
      },
    ],
    price: '月4回 13,420円',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', 'マシンピラティス専門', '月4回13,420円', '表参道駅近'],
    description: '女性専用のマシンピラティス専門スタジオ。リフォーマーを中心としたマシンピラティスのグループレッスンを提供。音楽に合わせたエンターテインメント性の高いレッスンが特徴で、楽しみながらボディメイクできます。おしゃれなスタジオ空間で、表参道での買い物やカフェと合わせて通う方も多いです。',
    access: '東京メトロ銀座線・千代田線・半蔵門線「表参道駅」徒歩圏内',
    address: '東京都渋谷区神宮前（表参道駅徒歩圏内）',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス。月4回のグループレッスンで無理なく続けられる人気プラン。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー4メンバー（月4回 13,420円）',
      'マンスリーフルメンバー（通い放題プランあり）',
      '体験レッスン 2,000円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス発散'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備'],
    },
  },
  {
    name: 'BDC PILATES 表参道スタジオ',
    image: '/images/studios/bdc-pilates.webp',
    rating: 4.9,
    reviewCount: 17,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: 'プロダンサー養成校がプロデュースしているだけあって、インストラクターの質が非常に高い。少人数制最大8名なので、しっかりフォームを見てもらえます。',
      },
      {
        author: 'H.I',
        rating: 5,
        date: '1週間前',
        text: 'グループとプライベートの両方があるので、目的に合わせて選べます。グループでも最大8名なので、大人数が苦手な方にもおすすめ。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: '体験3,850円は少し高めですが、レッスンの質を考えると納得。身体の使い方が変わったのを実感しています。',
      },
    ],
    price: 'グループ&プライベート',
    trial: '体験レッスン 3,850円',
    features: ['プロダンサー養成校プロデュース', '少人数制最大8名', 'グループ&プライベート', '表参道駅近'],
    description: 'プロダンサー養成校「BROADWAY DANCE CENTER」がプロデュースするピラティススタジオ。ダンサーの身体づくりで培ったノウハウを活かした質の高いレッスンが特徴。グループレッスンは少人数制最大8名で、一人ひとりに目が行き届く環境。プライベートレッスンも提供しており、より個別のニーズに対応します。',
    access: '東京メトロ銀座線・千代田線・半蔵門線「表参道駅」徒歩圏内',
    address: '東京都渋谷区神宮前（表参道駅徒歩圏内）',
    popularPlan: {
      name: 'グループレッスン（少人数制）',
      description: '最大8名の少人数制グループレッスン。プロダンサー養成校のノウハウを活かした質の高い指導。',
      price: '料金は店舗にお問い合わせください',
    },
    options: [
      'グループレッスン（少人数制最大8名）',
      'プライベートレッスン（マンツーマン）',
      '体験レッスン 3,850円',
      '回数券・月額プランあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['身体の使い方改善', '姿勢改善', 'パフォーマンス向上', 'ボディメイク'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '不定休',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'zen place pilates 表参道',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 26,
    reviews: [
      {
        author: 'K.S',
        rating: 5,
        date: '3日前',
        text: 'マットもマシンも両方受けられるのが嬉しい。月4回10,450円〜とリーズナブルで、男性も通えるので夫婦で利用しています。全国の店舗で他店利用できるのも便利。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '1週間前',
        text: '体験が500円〜で気軽に始められました。インストラクターの質が高く、身体の使い方を丁寧に教えてくれます。全国展開なので出張先でも通えます。',
      },
      {
        author: 'Y.K',
        rating: 5,
        date: '2週間前',
        text: '表参道駅から近くて通いやすい。おしゃれなエリアにあるのでレッスン後のカフェタイムも楽しんでいます。初心者向けレッスンも充実。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '月4回10,450円〜', '体験500円〜', '男性OK', '全国相互利用'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。マットピラティスとマシンピラティスの両方に対応し、グループレッスンからプライベートレッスンまで幅広いメニューを提供。月4回10,450円〜というリーズナブルな料金設定と、体験500円〜という気軽さが魅力。男性も利用可能で、全国の店舗で相互利用ができます。',
    access: '東京メトロ銀座線・千代田線・半蔵門線「表参道駅」徒歩圏内',
    address: '東京都渋谷区神宮前（表参道駅徒歩圏内）',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マット・マシンどちらも受講可能な人気プラン。全国の店舗で相互利用可能。',
      price: '月4回 10,450円〜（税込）',
    },
    options: [
      '月6回プラン（14,520円）',
      'フリープラン（16,940円）',
      'プライベートレッスン追加（1回 9,900円〜）',
      '全国店舗相互利用可能',
      'インストラクター養成コース（別途）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'Dr.ピラティス 表参道店',
    officialUrl: 'https://drpilates.drtraining.jp/',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。表参道エリア（詳細は公式サイト参照）。',
    access: '表参道エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！表参道エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。zen place pilatesは体験500円〜で気軽に始められ、Pilates KASANEも体験980円と手軽。BDC PILATESは少人数制最大8名で丁寧に指導してもらえるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。表参道ではPilates KASANEやzen place pilatesが両方に対応しています。',
  },
  {
    question: '表参道のピラティススタジオの料金相場は？',
    answer: '表参道エリアのピラティススタジオの料金相場は、グループレッスン月4回で10,450円〜13,420円程度。都度払いは1回3,025円〜（Pilates KASANE）。体験レッスンは500円〜3,850円が一般的です。zen place pilatesの体験500円〜が最もリーズナブルです。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが、理想の身体を手に入れる近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。ただし即効性はないので、最低でも2-3ヶ月は継続することが大切。食事管理も並行するとより効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'はい、あります。zen place pilates 表参道は男性も利用可能です。Pilates KASANEも男性OK。ただし、ピラティスK 表参道店は女性専用ですのでご注意ください。BDC PILATESも男女ともに利用可能です。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。BDC PILATESのプライベートレッスンなら、個別の身体の状態に合わせたプログラムで不調改善に取り組めます。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方にはPilates KASANEやBDC PILATESのプライベートがおすすめ。グループはzen place pilatesやピラティスKで料金を抑えながら楽しく続けられます。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function OmotesandoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '表参道', url: 'https://pilates-biyori.com/area/omotesando/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス表参道おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">表参道</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="表参道" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「表参道で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、東京メトロ銀座線・千代田線・半蔵門線「表参道駅」周辺でおすすめのピラティススタジオ5選をまとめました。おしゃれなブランドショップやカフェが並ぶ洗練されたエリアで、レッスン前後のお出かけも楽しめます。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>表参道でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金やレッスン内容を比較したい</span>
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
                  <span>駅近で通いやすいスタジオがいい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="表参道" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              表参道のおすすめピラティススタジオ5選
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
              表参道のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">3,025円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 3,025円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">500円〜3,850円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              表参道は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の原宿エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              表参道でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東京メトロ銀座線・千代田線・半蔵門線「表参道駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  表参道エリアのスタジオは表参道駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。表参道駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  表参道は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  表参道エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  表参道エリアだけでなく、近隣の<Link href="/area/harajuku" className="text-warm-700 underline hover:text-warm-900">原宿</Link>、<Link href="/area/aoyama-itchome" className="text-warm-700 underline hover:text-warm-900">青山一丁目</Link>、<Link href="/area/shibuya" className="text-warm-700 underline hover:text-warm-900">渋谷</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>表参道エリアの豆知識：</strong>表参道は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円前後で通えるスタジオ。グループレッスンで気軽に始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• Pilates KASANE（1回 3,025円〜・都度払い）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・少人数制</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの空間や少人数で丁寧に指導してもらいたい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（女性専用・マシン専門）</li>
                  <li className="text-warm-700">• BDC PILATES（少人数制最大8名）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">体験がお得</h3>
                <p className="text-warm-600 text-sm mb-4">
                  まずは気軽に体験レッスンから。お得な体験プランがあるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（体験500円〜）</li>
                  <li className="text-warm-700">• Pilates KASANE（体験980円）</li>
                  <li className="text-warm-700">• ピラティスK（体験2,000円）</li>
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
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。コスパ良く始めたい方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（月4回 10,450円〜）</li>
                  <li>• Pilates KASANE（1回 3,025円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜17,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月額</p>
                <p className="text-sm text-warm-600 mb-4">
                  月額プランで回数を決めて通える。バランスの良い選択肢。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（月4回 13,420円）</li>
                  <li>• zen place pilates フリー（16,940円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">プライベート</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマン指導。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• BDC PILATES（プライベートレッスン）</li>
                  <li>• Pilates KASANE（パーソナル）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。ボディメイク重視ならピラティスKの音楽に合わせたレッスン、身体の使い方を根本から変えたいならBDC PILATESのプロダンサー養成校メソッドがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  表参道エリアの料金相場は、グループレッスン月4回で10,450円〜13,420円程度、都度払いなら1回3,025円〜。無理なく継続できる予算を決めましょう。コスパ重視ならzen place pilatesの月4回10,450円〜、都度払い派ならPilates KASANEの1回3,025円〜がおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。表参道エリアでは500円〜3,850円で体験レッスンを提供しているスタジオが多いので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。表参道は東京メトロ銀座線・千代田線・半蔵門線の3路線が利用でき、渋谷・原宿からも徒歩圏内という好アクセス。おしゃれなブランドショップやカフェが並ぶ洗練されたエリアなので、レッスン後のショッピングやカフェタイムも楽しめますよ。
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
              今回は表参道のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              表参道は銀座線・千代田線・半蔵門線の3路線が利用できる好アクセスのエリア。都度払いで気軽に通えるPilates KASANEから、女性専用のピラティスK、プロダンサー養成校プロデュースのBDC PILATES、全国相互利用可能なzen place pilatesまで、目的や予算に合ったスタジオが見つかります。
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
              初回限定の体験レッスン500円〜3,850円。<br />
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
      <ConsultantSection areaKey="omotesando" areaName="表参道" />

      <RelatedAreas currentSlug="omotesando" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
