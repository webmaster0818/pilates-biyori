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
  alternates: { canonical: 'https://biyori-pilates.com/area/marunouchi/' },
  title: '【2026年10月最新】ピラティス丸の内おすすめ5選人気スタジオの料金プランの比較',
  description: '丸の内エリアのおすすめピラティススタジオ5選を比較しています。zen place pilates、the SILK、CLUB PILATES、Pilates Mee、STUDIO IVYなど実在スタジオの料金・体験レッスン・アクセスを詳しくご案内します。グループ・セミパーソナル・完全パーソナルまでです。',
  keywords: 'ピラティス,丸の内,千代田区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,zen place pilates,the SILK,CLUB PILATES,Pilates Mee,STUDIO IVY',
}

const studios = [
  {
    name: 'zen place pilates 八重洲スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国150店舗他店利用', 'マット&マシン対応', '男性利用可', '体験1,000円'],
    description: '全国150店舗以上を展開する大手ピラティスブランド「zen place pilates」の八重洲スタジオです。大手町駅B10出口から徒歩7分、東京駅八重洲北口から徒歩5分の好立地です。マットピラティスとマシンピラティスの両方に対応し、初心者から上級者まで幅広いレッスンを提供しています。全国の店舗を他店利用できるため、出張や旅行先でもレッスンを継続可能です。男性も歓迎で、ビジネスパーソンにも人気のスタジオです。',
    access: '大手町駅B10出口徒歩7分・東京駅八重洲北口徒歩5分',
    address: '東京都中央区日本橋2丁目3-21 八重洲セントラルビル 6階',
    popularPlan: {
      name: 'グループレッスン月4回',
      description: 'マット・マシン両対応のグループレッスンです。全国150店舗他店利用可能です。',
      price: '月4回 10,450円〜（税込）',
    },
    options: [
      'グループレッスン月4回（10,450円〜）',
      'グループレッスン月6回・通い放題プランあり',
      'プライベートレッスンあり',
      'グループ体験 1,000円',
      '全国150店舗他店利用可能',
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
    name: 'the SILK 東京八重洲店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '音楽レッスン', '体験無料', '手ぶらで参加可能'],
    description: '女性専用のマシンピラティススタジオ「the SILK」八重洲店です。大手町駅B10出口から徒歩5分、東京駅八重洲北口から徒歩5分です。音楽に合わせた独自のピラティスレッスンが特徴で、楽しみながらボディメイクが可能です。PMA（Pilates Method Alliance）加盟団体が監修した質の高いプログラムを提供しています。手ぶらで参加可能で仕事帰りにも気軽に通えます。体験レッスンは無料です。',
    access: '大手町駅B10出口徒歩5分・東京駅八重洲北口徒歩5分',
    address: '東京都中央区八重洲1-5-9 八重洲加藤ビルディング5階',
    popularPlan: {
      name: '月3回プラン',
      description: '女性専用マシンピラティスです。音楽に合わせた楽しいレッスンです。PMA加盟団体監修です。',
      price: '月3回 12,980円〜（税込）',
    },
    options: [
      '月3回プラン（12,980円〜）',
      '月4回・通い放題プランあり',
      '体験レッスン 無料',
      '手ぶらで参加可能（ウェア・タオルレンタル）',
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
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=62359',
    image: '/images/studios/club-pilates.webp',
    price: '料金は店舗により異なる（公式の店舗ページで確認）',
    trial: '体験レッスン 0円（30分）',
    features: ['世界最大級チェーン', '15種類の器具', '男性利用可', '体験0円'],
    description: '世界最大級のマシンピラティスブランド「CLUB PILATES」です。最大12名の少人数グループレッスンで、リフォーマー・スプリングボード・TRX・チェアなど15種類の器具を完備しています。8つのプログラムと4段階のレベル分けで、初心者から上級者まで対応しています。インストラクター全員が500時間以上の研修を受けた有資格者で、質の高い指導を受けられます。体験レッスンは0円（30分）で気軽にお試し可能です。',
    access: '丸の内エリアからアクセス可能（詳細は公式サイトでご確認ください）',
    address: '東京都内（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン月4回',
      description: '最大12名の少人数制です。15種類の器具を使った本格グループレッスンです。4段階のレベル分けで初心者も安心です。',
      price: '店舗により異なる（公式の店舗ページで確認）',
    },
    options: ['料金は店舗により異なる（公式の店舗ページで確認）', '参考：公式店舗ページの月4回 10,890〜17,050円／通い放題 17,490〜40,590円（2026年10月14日・86店舗）', '入会金 5,500円（税込）'],
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
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: '1回あたり2,500円 ※37,500円の通い放題コースで15日通った場合',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のセミパーソナル形式マシンピラティススタジオ「Pilates Mee」築地店です。最大3名の少人数制で、パーソナルに近い丁寧な指導を受けられます。通い放題プランなら1回あたり2,500円（※37,500円の通い放題コースで15日通った場合）と割安です。当日予約可で忙しい方にも便利です。丸の内エリアからもアクセスしやすい立地です。',
    access: '築地駅 徒歩3分／新富町駅 徒歩7分',
    address: '〒104-0045 東京都中央区築地7丁目6-7 松田ビル 302',
    popularPlan: {
      name: '通い放題プラン',
      description: '最大3名のセミパーソナルマシンピラティスが通い放題です。1回あたり2,500円（※37,500円の通い放題コースで15日通った場合）と割安です。',
      price: '37,500円/月（税込）',
    },
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },
  },
  {
    name: 'STUDIO IVY',
    image: '/images/studios/studio-ivy.webp',
    price: '月2回 15,000円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全パーソナル', '完全プライベート空間', 'オーダーメイド', '月2回15,000円〜'],
    description: '完全パーソナルのピラティススタジオ「STUDIO IVY」です。完全プライベート空間で、一人ひとりの体の状態や目標に合わせたオーダーメイドのプログラムを提供しています。月2回15,000円〜とパーソナルとしてはリーズナブルな価格設定です。体験レッスンは4,500円でカウンセリング付きです。結果にこだわりたい方、人目を気にせずトレーニングしたい方におすすめです。',
    access: '丸の内エリアからアクセス可能（詳細は公式サイトでご確認ください）',
    address: '東京都内（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン月2回',
      description: '完全プライベート空間でのマンツーマンピラティスです。オーダーメイドプログラムです。',
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
    answer: '問題ありません。丸の内エリアのスタジオはほとんどが初心者歓迎です。CLUB PILATESは4段階のレベル分けで初心者専用クラスあり、zen place pilatesはグループ体験1,000円で気軽にお試しできます。STUDIO IVYは完全パーソナルなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめです。丸の内エリアの5スタジオはすべてマシンピラティスに対応しています。',
  },
  {
    question: '丸の内のピラティスの料金相場は？',
    answer: 'zen place pilatesは月4回10,450円〜、the SILKは月3回12,980円〜、CLUB PILATESは月4回 10,890〜17,050円です（店舗により異なる）。Pilates Meeは通い放題で1回あたり2,500円（※37,500円の通い放題コースで15日通った場合）、STUDIO IVYはパーソナルで月2回15,000円〜です。目的と頻度に合わせてお選びください。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。Pilates Meeの通い放題プランなら毎日でも通えます。大切なのは無理なく継続することです。最低2〜3ヶ月続けることをおすすめします。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。CLUB PILATESには高強度・有酸素運動クラスもありダイエットに効果的です。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。the SILKは手ぶらで参加可能でウェア・タオルのレンタルがあります。CLUB PILATESは体験0円（30分）、the SILKも無料体験です。zen place pilatesはグループ体験1,000円で気軽にお試しできます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates八重洲スタジオ、CLUB PILATES、STUDIO IVYは男性も通えます。the SILKとPilates Mee築地店は女性専用です。',
  },
  {
    question: '仕事帰りに通いやすいスタジオはどこですか？',
    answer: '丸の内エリアは東京駅・大手町駅が最寄りのスタジオが充実しています。zen place pilates八重洲スタジオとthe SILK八重洲店はどちらも東京駅から徒歩5分圏内です。the SILKは手ぶらで参加可能なので荷物なしで通えます。',
  },
  {
    question: '完全個室のスタジオはありますか？',
    answer: 'STUDIO IVYは完全プライベート空間でのパーソナルレッスンです。人目を気にせず集中してトレーニングしたい方におすすめです。体験レッスン4,500円でカウンセリングも受けられます。',
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
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '丸の内', url: 'https://biyori-pilates.com/area/marunouchi/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス丸の内おすすめ5選
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
              <span className="text-warm-600">丸の内</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="丸の内" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              丸の内は東京駅・大手町駅を中心とした日本屈指のビジネス街です。丸ビル・新丸ビルなどの商業施設も充実し、仕事帰りやランチタイムにも通いやすいエリアです。そんな丸の内エリアには、全国展開の大手チェーンから完全パーソナルまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、丸の内エリアでおすすめの実在するピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
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
                  <span>料金を抑えられるスタジオを知りたい</span>
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
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
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
                    <td className="px-4 py-3">1回あたり2,500円〜14,190円（※Pilates Meeは37,500円の通い放題コースで15日通った場合）</td>
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
              丸の内はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるのでご確認ください。近隣の東京駅エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
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
                <h3 className="text-lg font-bold text-warm-900 mb-3">大手町駅B10出口徒歩7分・東京駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  丸の内エリアのスタジオは大手町駅B10出口徒歩7分・東京駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにすることをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  丸の内はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  丸の内エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  丸の内エリアだけでなく、近隣の<Link href="/area/tokyo-station/" className="text-warm-700 underline hover:text-warm-900">東京駅</Link>、<Link href="/area/otemachi/" className="text-warm-700 underline hover:text-warm-900">大手町</Link>、<Link href="/area/yurakucho/" className="text-warm-700 underline hover:text-warm-900">有楽町</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>丸の内エリアの豆知識：</strong>丸の内はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオをお選びください。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
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
                <p className="text-warm-600 text-sm mb-4">1回あたり2,500円 ※37,500円の通い放題コースで15日通った場合のスタジオもあります。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee（1回あたり2,500円 ※37,500円の通い放題コースで15日通った場合）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（完全パーソナル）</li>
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル最大3名）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用スタジオ</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの安心空間です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（音楽レッスン・手ぶらで参加可能）</li>
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
                週1〜2回からスタートするのがおすすめです。最低2〜3ヶ月継続することで効果を実感できます。CLUB PILATESは4段階のレベル分けがあり、初心者専用クラスから始められます。zen place pilatesはグループ体験1,000円で気軽にお試し可能です。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化を実感できます。Pilates Meeの通い放題プラン（37,500円/月）なら毎日でも通えて割安です。STUDIO IVYのパーソナルなら効率的にボディメイクできます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。zen place pilatesは全国150店舗他店利用可能なので、出張先でもレッスンを継続でき、ビジネスパーソンに最適です。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 14,190〜15,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2〜4回</p>
                <p className="text-sm text-warm-600 mb-4">週1回ペースで着実に成果です。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（月4回 10,890〜17,050円・店舗により異なる）</li>
                  <li>• STUDIO IVY（15,000円/月2回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 37,500円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">本気でボディメイクしたい方におすすめです。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee（37,500円/通い放題）</li>
                  <li>• 1回あたり2,500円 ※37,500円の通い放題コースで15日通った場合</li>
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
                  ダイエット、姿勢改善、ボディメイク、体幹強化など、目的によって最適なスタジオは変わります。結果重視ならSTUDIO IVYのパーソナル、楽しく通いたいならthe SILKの音楽レッスン、料金重視ならPilates Meeがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  丸の内エリアはグループ（zen place pilates・CLUB PILATES・the SILK）、セミパーソナル最大3名（Pilates Mee）、完全パーソナル（STUDIO IVY）と多彩な形式が揃っています。自分の好みや予算に合わせてお選びください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESは体験0円（30分）、the SILKも無料体験です。zen place pilatesはグループ体験1,000円で気軽にお試し可能です。まずは体験で雰囲気やインストラクターとの相性をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  丸の内は東京駅・大手町駅が中心です。zen place pilates八重洲スタジオとthe SILK八重洲店は東京駅徒歩5分圏内です。the SILKは手ぶらで参加可能なので仕事帰りに荷物なしで通えます。zen place pilatesは全国150店舗他店利用可能です。
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
              丸の内は東京駅・大手町駅を中心とした日本屈指のビジネス街で、仕事帰りに通いやすいスタジオが充実しています。全国150店舗他店利用のzen place pilates（月4回10,450円〜・体験1,000円）、女性専用&音楽レッスンのthe SILK（月3回12,980円〜・体験無料）、世界最大級チェーンのCLUB PILATES（月4回 10,890〜17,050円・店舗により異なる・体験0円）、セミパーソナル最大3名のPilates Mee（1回あたり2,500円 ※37,500円の通い放題コースで15日通った場合）、完全パーソナルのSTUDIO IVY（月2回15,000円〜）と、それぞれ特徴の異なるスタジオが揃っています。
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
      <ConsultantSection areaKey="marunouchi" areaName="丸の内" />

            {/* boost-p1-otemachi-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                近隣の<Link href="/area/otemachi/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">大手町・東京駅エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて確認できます。
              </p>
            </div>
      <RelatedAreas currentSlug="marunouchi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
