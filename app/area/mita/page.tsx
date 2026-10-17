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
  alternates: { canonical: 'https://biyori-pilates.com/area/mita/' },
  title: '【2026年10月最新】ピラティス三田おすすめ5選人気スタジオの料金プランの比較',
  description: '三田エリアのおすすめピラティススタジオ5選を比較しています。zen place pilates、the SILK、CLUB PILATES、Pilates Studio B&B、ピラティススタジオhibiなど実在スタジオの料金・体験レッスン・アクセスを詳しくご案内します。グループ・パーソナル・女性専用までです。',
  keywords: 'ピラティス,三田,港区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,zen place pilates,the SILK,CLUB PILATES,Pilates Studio B&B,ピラティススタジオhibi',
}

const studios = [
  {
    name: 'zen place pilates 三田スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['駅直結', '全国150店舗他店利用', '男性利用可', '体験1,000円'],
    description: '三田駅A3出口直結・田町駅徒歩1分の好立地にあるzen place pilates三田スタジオです。月4回10,450円〜のリーズナブルな料金で本格マシンピラティスが受けられます。全国150店舗を他店利用できるため、出張先や旅行先でもレッスンを継続可能です。グループ体験は1,000円で気軽にお試しできます。男性も通えるスタジオです。',
    access: '都営三田線・浅草線「三田駅」A3出口直結 / JR「田町駅」徒歩1分',
    address: '〒108-0014 東京都港区芝5-31-7 三田ステーションビルアミタ902',
    popularPlan: {
      name: 'グループレッスン月4回',
      description: '駅直結のスタジオで月4回のマシンピラティスグループレッスンです。全国150店舗で他店利用可能です。',
      price: '月4回 10,450円〜（税込）',
    },
    options: [
      'グループレッスン（月4回 10,450円〜）',
      'グループ体験レッスン 1,000円',
      '全国150店舗他店利用可能',
      'プライベートレッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日祝 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'チェア', 'バレル', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'the SILK 田町店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '音楽レッスン', '手ぶらで参加可能', '体験無料'],
    description: '女性専用のマシンピラティススタジオ「the SILK」田町エリアです。音楽に合わせた楽しいレッスンが特徴で、初心者でも飽きずに続けられます。月3回12,980円〜のプランがあり、手ぶらで通えるので仕事帰りにも便利です。体験レッスンは無料で気軽にお試し可能です。朝7:30から夜22:00まで営業しているため、ライフスタイルに合わせて通えます。',
    access: 'JR「田町駅」周辺',
    address: '東京都港区芝浦3丁目13−12 PhilPark 田町 Shibaura5F',
    popularPlan: {
      name: '月3回プラン',
      description: '女性専用の音楽レッスンが月3回です。手ぶらで参加可能で仕事帰りにも便利です。',
      price: '月3回 12,980円〜（税込）',
    },
    options: [
      '月3回プラン（12,980円〜/月）',
      '月4回・通い放題プランあり',
      '体験レッスン 無料',
      '手ぶらで参加可能（レンタルウェア・タオルあり）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス発散'],
    },
    basicInfo: {
      hours: '7:30-22:00',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー', 'レンタルウェア'],
    },
  },
  {
    name: 'CLUB PILATES 田町店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=68438',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 14,190円／月8回 26,290円／通い放題 40,590円（公式店舗ページ・税表記なし）',
    trial: '体験レッスン 0円（30分）',
    features: ['世界最大級チェーン', '15種類の器具', '男性利用可', '体験0円'],
    description: '世界最大級のマシンピラティスブランド「CLUB PILATES」の田町店です。最大12名の少人数グループレッスンで、リフォーマー・スプリングボード・TRX・チェアなど15種類の器具を完備しています。8つのプログラムと4段階のレベル分けで、初心者から上級者まで対応しています。インストラクター全員が500時間以上の研修を受けた有資格者です。体験レッスンは0円（30分）で気軽にお試し可能です。田町駅徒歩6分です。',
    access: 'JR「田町駅」徒歩6分',
    address: '東京都港区田町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン月4回',
      description: '最大12名の少人数制です。15種類の器具を使った本格グループレッスンです。4段階のレベル分けで初心者も安心です。',
      price: '月4回 14,190円（税表記なし）',
    },
    options: ['月8回 26,290円', '通い放題 40,590円', '入会金 5,500円（税込）', '料金は公式の店舗ページ（2026年10月14日確認）'],
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
    name: 'Pilates Studio B&B 田町店',
    image: '/images/studios/pilates-bb.webp',
    price: 'パーソナル 1回 8,250円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'キッズスペース完備', '産前産後ケア', '少人数制'],
    description: '田町駅東口から徒歩4分のパーソナルピラティススタジオです。1回8,250円〜のパーソナルレッスンで、一人ひとりの体の状態に合わせたオーダーメイドの指導を提供しています。キッズスペース完備で子連れママも安心です。産前産後ケアに対応しており、マタニティピラティスも受けられます。少人数制で質の高い指導が特徴です。',
    access: 'JR「田町駅」東口徒歩4分',
    address: '東京都港区田町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'マンツーマンの丁寧な指導です。産前産後ケアにも対応しています。キッズスペース完備で子連れ可能です。',
      price: '1回 8,250円〜（税込）',
    },
    options: [
      'パーソナルレッスン（1回 8,250円〜）',
      '回数券あり（詳細は公式サイト参照）',
      'キッズスペース完備',
      '産前産後ケア対応',
      '少人数グループレッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（産前産後ママも多数）',
      genderRatio: '女性90% / 男性10%',
      purpose: ['産前産後ケア', '姿勢改善', 'ボディメイク', 'リハビリ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'チェア', 'バレル', 'キッズスペース', '更衣室'],
    },
  },
  {
    name: 'ピラティススタジオhibi',
    image: '/images/studios/pilates-hibi-mita.webp',
    price: 'パーソナル専門（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['完全プライベート', 'パーソナル専門', '駅徒歩4分', '完全予約制'],
    description: '田町駅・三田駅から徒歩4分の完全プライベートピラティススタジオです。パーソナル専門で、一人ひとりの体の状態や目標に合わせたオーダーメイドのレッスンを提供しています。完全予約制のプライベート空間で、周りの目を気にせず集中してトレーニングに取り組めます。初心者から経験者まで幅広く対応しています。',
    access: 'JR「田町駅」/ 都営三田線・浅草線「三田駅」徒歩4分',
    address: '東京都港区三田エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全プライベート空間でのマンツーマンレッスンです。完全予約制で待ち時間はありません。',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルレッスン（完全予約制）',
      '完全プライベートスタジオ',
      '体験レッスンあり',
      '回数券・月額プランあり（詳細は公式サイト参照）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', 'リラクゼーション'],
    },
    basicInfo: {
      hours: '完全予約制（詳細は公式サイトでご確認ください）',
      closed: '不定休',
      facilities: ['リフォーマー', 'プライベートスタジオ', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。三田エリアのスタジオはほとんどが初心者歓迎です。CLUB PILATESは4段階のレベル分けで初心者専用クラスあり、zen place pilatesはグループ体験1,000円で気軽に試せます。ピラティススタジオhibiは完全プライベートなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめです。三田エリアの5スタジオはすべてマシンピラティスに対応しています。',
  },
  {
    question: '三田のピラティスの料金相場は？',
    answer: 'zen place pilatesは月4回10,450円〜、the SILKは月3回12,980円〜、CLUB PILATESは月4回 14,190円、Pilates Studio B&Bはパーソナル1回8,250円〜です。目的と頻度に合わせてお選びください。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。zen place pilatesなら全国150店舗他店利用できるので、出先でもレッスンを受けられます。大切なのは無理なく継続することです。最低2〜3ヶ月続けることをおすすめします。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。CLUB PILATESには高強度・有酸素運動クラスもありダイエットに効果的です。2〜3ヶ月の継続で効果を実感される方が多くなっています。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。the SILKは手ぶらで参加可能でレンタルウェアもあります。CLUB PILATESは体験0円（30分）、the SILKも体験無料、zen place pilatesはグループ体験1,000円で気軽に試せます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates三田スタジオとCLUB PILATES田町店は男性も通えます。the SILKは女性専用です。Pilates Studio B&Bとピラティススタジオhibiについては公式サイトでご確認ください。',
  },
  {
    question: '子連れで通えるスタジオはありますか？',
    answer: 'Pilates Studio B&B田町店はキッズスペース完備で、お子さん連れでも安心して通えます。産前産後ケアにも対応しており、産後ママにも人気のスタジオです。',
  },
  {
    question: '三田駅から近いスタジオはどこですか？',
    answer: 'zen place pilates三田スタジオは三田駅A3出口直結でアクセス抜群です。ピラティススタジオhibiは三田駅・田町駅から徒歩4分です。Pilates Studio B&Bは田町駅東口徒歩4分です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感される方が多くなっています。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function MitaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '三田', url: 'https://biyori-pilates.com/area/mita/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス三田おすすめ5選
              <br className="hidden md:block" />
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
              <span className="text-warm-600">三田</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="三田" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              三田は都営三田線・浅草線とJR田町駅が利用でき、品川まで1駅・東京駅まで約10分という都心アクセス抜群のエリアです。オフィス街と慶應義塾大学が隣接する落ち着いた雰囲気の街です。そんな三田・田町エリアには、全国展開の大手チェーンから完全プライベートのパーソナル専門スタジオまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、三田・田町エリアでおすすめの実在するピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>三田・田町でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金を抑えられるスタジオを知りたい</span>
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
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="三田" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              三田のおすすめピラティススタジオ5選
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
              三田のピラティス料金相場
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
                    <td className="px-4 py-3">8,250円〜14,190円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,250円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              三田はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるのでご確認ください。近隣の田町エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              三田でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">都営三田線・浅草線「三田駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  三田エリアのスタジオは三田駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。三田駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  三田はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  三田エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  三田エリアだけでなく、近隣の<Link href="/area/tamachi/" className="text-warm-700 underline hover:text-warm-900">田町</Link>、<Link href="/area/shirokanatakanawa/" className="text-warm-700 underline hover:text-warm-900">白金高輪</Link>、<Link href="/area/shinagawa/" className="text-warm-700 underline hover:text-warm-900">品川</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。マシンに敷くタオルは、スタジオで用意されている場合が一般的です。</span></li>
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
                  <strong>三田エリアの豆知識：</strong>三田はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオをお選びください。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額10,450円〜のスタジオもあります。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                  <li className="text-warm-700">• CLUB PILATES（月4回 14,190円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティススタジオhibi（完全プライベート）</li>
                  <li className="text-warm-700">• Pilates Studio B&B（1回 8,250円〜）</li>
                  <li className="text-warm-700">• zen place pilates（プライベートレッスンあり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">ライフスタイル重視</h3>
                <p className="text-warm-600 text-sm mb-4">女性専用や子連れ可も。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（女性専用・手ぶらで参加可能）</li>
                  <li className="text-warm-700">• Pilates Studio B&B（キッズスペース完備）</li>
                  <li className="text-warm-700">• zen place pilates（駅直結）</li>
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
                週1〜2回からスタートするのがおすすめです。最低2〜3ヶ月継続することで効果を実感できます。CLUB PILATESは4段階のレベル分けがあり、初心者専用クラスから始められます。zen place pilatesはグループ体験1,000円で気軽にお試し可能です。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化を実感できます。Pilates Studio B&Bのパーソナルレッスン（1回8,250円〜）なら、自分の体に合わせた効率的なトレーニングが可能です。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。zen place pilatesは全国150店舗他店利用できるので、出張先でもレッスンを受けられます。the SILKは朝7:30から夜22:00まで営業しているので忙しい方にも便利です。
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
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に適しています。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（10,450円/月4回）</li>
                  <li>• the SILK（12,980円/月3回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 14,190円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">週1回ペースで着実に成果です。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（月4回 14,190円）</li>
                  <li>• zen place pilates（10,450円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 8,250円〜/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">本気で結果を出したい方におすすめです。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Studio B&B（8,250円〜/回）</li>
                  <li>• ピラティススタジオhibi（要問合せ）</li>
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
                  ダイエット、姿勢改善、産前産後ケア、体幹強化など、目的によって最適なスタジオは変わります。産前産後ケアならキッズスペース完備のPilates Studio B&B、ダイエットなら高強度クラスもあるCLUB PILATESがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  三田エリアはグループ（zen place pilates、CLUB PILATES、the SILK）、完全パーソナル（Pilates Studio B&B、ピラティススタジオhibi）と多彩な形式が揃っています。自分の好みや予算に合わせてお選びください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESは体験0円（30分）、the SILKも体験無料、zen place pilatesはグループ体験1,000円です。まずは気軽に体験で雰囲気やインストラクターとの相性をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  三田は都営三田線・浅草線とJR田町駅が利用でき、アクセス抜群です。zen place pilatesは三田駅A3出口直結、Pilates Studio B&Bは田町駅東口徒歩4分、ピラティススタジオhibiは両駅から徒歩4分です。the SILKは7:30-22:00営業で生活スタイルに合わせて通えます。
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
              今回は三田・田町エリアのおすすめピラティススタジオ5選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              三田は都営三田線・浅草線とJR田町駅が利用でき、品川まで1駅・東京駅まで約10分という都心アクセス抜群のエリアです。駅直結のzen place pilates（月4回10,450円〜・全国150店舗他店利用）、女性専用のthe SILK（体験無料・手ぶらで参加可能）、世界最大級チェーンのCLUB PILATES（体験0円）、キッズスペース完備のPilates Studio B&B（パーソナル1回8,250円〜）、完全プライベートのピラティススタジオhibiと、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは無料体験ができるCLUB PILATESやthe SILKから試してみるのがおすすめです。本ページの情報を、スタジオ選びにお役立てください。
            </p>
            <p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              CLUB PILATESとthe SILKは体験0円です。<br />
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
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="mita" areaName="三田" />

            {/* boost-hamamatsucho-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                オフィス街で仕事帰りに通うなら、<Link href="/area/hamamatsucho/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">浜松町・大門エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて比較できます。
              </p>
            </div>
      <RelatedAreas currentSlug="mita" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
