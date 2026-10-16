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
  alternates: { canonical: 'https://biyori-pilates.com/area/kyobashi-osaka/' },
  title: '【2026年10月最新】ピラティス京橋（大阪）おすすめ6選人気スタジオの料金プランの比較',
  description: '京橋（大阪）エリアのおすすめピラティススタジオ6選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。JR・京阪京橋駅から通いやすいスタジオが見つかります。',
  keywords: 'ピラティス,京橋,大阪,都島区,城東区,大阪ビジネスパーク,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Rintosull（リントスル）京橋店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp', reviewCount: 132,
    price: '月額 8,800円〜', trial: '体験レッスンあり',
    features: ['京橋駅徒歩1分', '女性専用', '通い放題あり', '映像×インストラクター'],
    description: 'ホットヨガLAVAが手がける女性専用マシンピラティススタジオです。京橋駅から徒歩1分の好立地です。大型スクリーンの映像とインストラクターのハイブリッドレッスンで初心者でも安心です。月額8,800円〜とリーズナブルな通い放題プランが魅力です。',
    access: 'JR大阪環状線・京阪本線「京橋駅」徒歩1分',
    address: '大阪府大阪市都島区東野田町2-3-14大京本社ビル3F',
    popularPlan: { name: '通い放題プラン', description: '女性専用マシンピラティスです。映像×インストラクターのハイブリッドレッスンです。', price: '月額 8,800円〜（税込）' },
    options: ['月額8,800円〜', '対象ブランド全店通い放題コースあり', '体験レッスンあり', 'LAVA会員優待あり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '大型スクリーン', '更衣室', 'ロッカー'] },
  },
  {
    name: 'YO・GAN（ヨガン）京橋',
    image: '/images/studios/pilates-kasane-osaka.webp', reviewCount: 98,
    price: '月額 11,000円〜', trial: '体験レッスンあり',
    features: ['女性専用', '少人数制（最大7名）', '岩盤浴併設', '京橋駅徒歩1分'],
    description: '京阪モールホテル館7Fに位置する女性専用ピラティス・ヨガ・岩盤浴スタジオです。京橋駅から徒歩1分です。少人数制（最大7名）のマシンピラティスレッスンを提供しています。ホテルライクな館内にシャワー室・パウダールーム・リラクゼーションルームを完備しています。',
    access: '京阪本線・JR大阪環状線「京橋駅」徒歩1分（京阪モールホテル館7F）',
    address: '大阪府大阪市都島区東野田町2丁目（京阪モールホテル館7F）',
    popularPlan: { name: '月会員プラン', description: '少人数制マシンピラティス＋岩盤浴利用可能です。', price: '月額 11,000円〜（税込）' },
    options: ['ピラティス＋岩盤浴セットプラン', 'ヨガレッスンも受講可能', '体験レッスンあり', 'パウダールーム完備'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'リフレッシュ', '姿勢改善', 'デトックス'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '岩盤浴', 'シャワー室', 'パウダールーム', 'リラクゼーションルーム'] },
  },
  {
    name: 'CLUB PILATES 京橋店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=62359',
    image: '/images/studios/club-pilates.webp', reviewCount: 105,
    price: '料金は店舗により異なる（公式の店舗ページで確認）', trial: '体験レッスン 無料',
    features: ['世界最大級', '4段階レベル分け', '男性利用可', '体験無料'],
    description: '全米に600店舗以上展開する世界最大級のマシンピラティス専門スタジオです。初心者から上級者まで4段階のレベル分けで最適なクラスを提供しています。リフォーマー・チェア・バレル・TRXなど多種多様なマシンを使用した本格的なレッスンです。',
    access: 'JR大阪環状線・京阪本線「京橋駅」徒歩圏内',
    address: '大阪府大阪市都島区京橋エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'EFT4プラン（月4回）', description: 'グループマシンピラティスです。4段階レベル分けです。', price: '店舗により異なる（公式の店舗ページで確認）' },
    options: ['料金は店舗により異なる（公式の店舗ページで確認）', '参考：公式店舗ページの月4回 10,890〜17,050円／通い放題 17,490〜40,590円（2026年10月14日・86店舗）', '入会金 5,500円（税込）'],
    userProfile: { ageRange: '20代〜60代が中心', genderRatio: '女性80% / 男性20%', purpose: ['ボディメイク', '体幹強化', '姿勢改善', 'パフォーマンス向上'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'チェア', 'バレル', 'TRX', '更衣室'] },
  },
  {
    name: 'pilates K（ピラティスケー）京橋店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp', reviewCount: 118,
    price: '月4回 13,420円〜', trial: '体験レッスン 無料',
    features: ['女性専用', '音楽×ピラティス', '駅近', '体験無料'],
    description: '女性専用のマシンピラティス専門スタジオです。音楽に合わせたグループレッスンが特徴で、楽しみながらボディメイクできると人気です。おしゃれなスタジオ空間でモチベーションもアップです。初回体験無料です。',
    access: 'JR大阪環状線・京阪本線「京橋駅」徒歩圏内',
    address: '大阪府大阪市都島区京橋エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'マンスリー4メンバー', description: '月4回のグループマシンピラティスです。', price: '月4回 13,420円〜（税込）' },
    options: ['マンスリー8メンバー', 'マンスリーフルメンバー（通い放題）', '体験レッスン無料', 'ウェアレンタルあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス発散'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '更衣室', 'ロッカー', 'パウダールーム'] },
  },
  {
    name: 'STUDIO TOU（スタジオトウ）京橋', reviewCount: 72,
    price: '月4回 10,000円〜', trial: '体験レッスンあり',
    features: ['グループ＆プライベート', '男性利用可', 'チケット制あり', 'アットホーム'],
    description: '京橋エリアのピラティス専門スタジオです。グループレッスンとプライベートレッスンの両方に対応しています。月謝制・チケット制から選べる柔軟な料金体系で、通いやすいスタジオです。男女問わず利用可能で、アットホームな雰囲気の中で丁寧な指導を受けられます。',
    access: 'JR大阪環状線・京阪本線「京橋駅」徒歩圏内',
    address: '大阪府大阪市都島区京橋エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月4回プラン', description: 'グループ＆プライベート選択可能です。', price: '月4回 10,000円〜（税込）' },
    options: ['チケット制プラン', 'プライベートレッスン', 'グループレッスン', '体験レッスンあり'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性75% / 男性25%', purpose: ['姿勢改善', '体幹強化', 'リハビリ', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'キャデラック', 'マット', '更衣室'] },
  },
  {
    name: 'SOELU（ソエル）京橋店',
    image: '/images/studios/soelu-minamikoshigaya.webp', reviewCount: 65,
    price: '月額 9,878円〜', trial: '体験レッスンあり',
    features: ['マシン×ファンクショナル', 'オンライン併用可', '30分レッスン', 'リーズナブル'],
    description: 'マシンピラティスとファンクショナルトレーニングを融合したフィットネススタジオです。1回30分の短時間レッスンで効率的にボディメイクを目指せます。オンラインレッスンも充実しており、スタジオとオンラインを組み合わせた柔軟な通い方が可能です。',
    access: 'JR大阪環状線・京阪本線「京橋駅」徒歩圏内',
    address: '大阪府大阪市都島区京橋エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'スタンダードプラン', description: 'マシンピラティス＋ファンクショナルトレーニングです。', price: '月額 9,878円〜（税込）' },
    options: ['ライトプラン', 'プレミアムプラン', 'オンライン併用可', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性85% / 男性15%', purpose: ['ボディメイク', 'ダイエット', '運動不足解消', '体幹強化'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'ファンクショナルトレーニング機器', '更衣室', 'ロッカー'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。京橋エリアのスタジオはほとんどが初心者歓迎です。Rintosullは映像×インストラクターのハイブリッドレッスンで分かりやすく、CLUB PILATESは4段階レベル分けで初心者向けクラスが充実しています。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。京橋はマシン専門スタジオが充実しています。' },
  { question: '京橋のピラティスの料金相場は？', answer: 'グループ月4回で10,000円〜13,420円程度です。Rintosullが月額8,800円〜、CLUB PILATESが月4回 10,890〜17,050円です（店舗により異なる）。パーソナルは1回8,000円〜15,000円程度です。梅田エリアより比較的リーズナブルです。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れたら週2〜3回に増やすと効果的です。Rintosullには通い放題プランがあるので、頻度を上げたい方にもおすすめです。' },
  { question: 'ピラティスで痩せますか？', answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続で体の変化を実感される方が多くなっています。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。CLUB PILATESやpilates Kは体験無料で気軽に試せます。靴下（グリップソックス推奨）も忘れずにご用意ください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'CLUB PILATESとSTUDIO TOUは男性も通えます。Rintosull、YO・GAN、pilates Kは女性専用です。' },
  { question: 'JR京橋駅と京阪京橋駅、どちらからが便利？', answer: 'どちらの駅からも主要スタジオは徒歩1〜5分程度です。Rintosullは両駅から徒歩1分、YO・GANは京阪モールホテル館内なので京阪側が便利です。' },
  { question: '京橋と他のエリアで迷っています', answer: '京橋はJR・京阪が交差するターミナル駅で大阪ビジネスパークにも近く、仕事帰りに通いやすいのが魅力です。梅田や天王寺と比べて混雑も少なめで、落ち着いてレッスンを受けたい方におすすめです。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。姿勢改善は比較的早く、ボディメイクは3ヶ月程度の継続がおすすめです。' },
]

export default function KyobashiOsakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '京橋（大阪）', url: 'https://biyori-pilates.com/area/kyobashi-osaka/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス京橋（大阪）おすすめ6選<br className="hidden md:block" />
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
              <span className="text-warm-600">京橋（大阪）</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="京橋（大阪）" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、京橋（大阪）エリアでおすすめのピラティススタジオ6選をまとめました。京橋はJR大阪環状線と京阪本線が交差するターミナル駅で、大阪ビジネスパークにも近接しており、仕事帰りにも通いやすいエリアです。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>京橋（大阪）でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>仕事帰りに通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>JR・京阪の駅近スタジオを見つけたい</span>
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

        <PriceComparisonTable studios={studios} areaName="京橋（大阪）" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              京橋（大阪）のおすすめピラティススタジオ6選
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
              京橋（大阪）のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,000円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">通い放題プラン</td>
                    <td className="px-4 py-3">月額 8,800円〜18,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              京橋は大阪のターミナル駅でありながら、<Link href="/area/umeda/" className="text-warm-700 underline hover:text-warm-900">梅田</Link>や<Link href="/area/shinsaibashi/" className="text-warm-700 underline hover:text-warm-900">心斎橋</Link>と比べて料金がやや抑えめなのが特徴です。通い放題プランが充実しているスタジオが多く、費用を抑えてピラティスを続けたい方におすすめのエリアです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              京橋（大阪）でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JRと京阪の出口を確認する</h3>
                <p className="text-warm-600 leading-relaxed">
                  京橋駅はJR大阪環状線・東西線・学研都市線と京阪本線が交差する大きなターミナル駅です。出口によってスタジオへのアクセスが大きく変わるため、事前に最寄りの出口をご確認ください。特にYO・GANは京阪モール側、Rintosullは駅直結のため出口選びがポイントです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">飲食街の雰囲気と立地を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  京橋は大阪有数の飲食店街が広がるエリアです。夜間のレッスンを考えている方は、スタジオの立地と周辺環境を体験レッスン時にチェックしておくと安心です。駅直結や駅前ビル内のスタジオを選ぶのがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">女性専用と男女共用の違い</h3>
                <p className="text-warm-600 leading-relaxed">
                  京橋エリアはRintosull、YO・GAN、pilates Kなど女性専用スタジオが多いのが特徴です。男性の方はCLUB PILATESやSTUDIO TOUなど男女共用のスタジオをお選びください。カップルや夫婦で通いたい場合も事前に確認が必要です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">大阪ビジネスパーク勤務の方は平日夜の予約を早めに</h3>
                <p className="text-warm-600 leading-relaxed">
                  京橋は大阪ビジネスパーク（OBP）に隣接しており、平日夜のレッスンは仕事帰りの会社員で人気が集中します。特に18時〜20時のクラスは早めの予約がおすすめです。SOELUの30分レッスンであれば、時間の融通が利きます。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。pilates Kではレンタル可能なので仕事帰りでも安心です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>京橋エリアの豆知識：</strong>京橋はJRと京阪が交差する大阪東部の玄関口です。大阪ビジネスパークや大阪城公園にも近く、レッスン前後に大阪城公園でウォーキングを楽しまれる方もいます。駅周辺には飲食店が豊富なので、レッスン後のヘルシーランチにも困りません。
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
                  通い放題プランでお得に通えます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月額 8,800円〜）</li>
                  <li className="text-warm-700">• SOELU（月額 9,878円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• YO・GAN（岩盤浴併設）</li>
                  <li className="text-warm-700">• pilates K（音楽×ピラティス）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格派</h3>
                <p className="text-warm-600 text-sm mb-4">
                  多種マシンで本格レッスンです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES（世界最大級）</li>
                  <li className="text-warm-700">• STUDIO TOU（プライベート対応）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円〜）</li>
                  <li>• SOELU（9,878円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜14,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜8回</p>
                <p className="text-sm text-warm-600 mb-4">
                  本格的なマシンレッスンです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（月4回 10,890〜17,050円・店舗により異なる）</li>
                  <li>• pilates K（13,420円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題＋α</p>
                <p className="text-sm text-warm-600 mb-4">
                  充実の設備とサービスです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• YO・GAN（ピラティス＋岩盤浴）</li>
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
                  京橋の料金相場はグループ月4回で10,000円〜13,420円です。通い放題なら8,800円〜です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESとpilates Kは体験無料です。まずは2-3スタジオの体験を受けて比較することをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  JR・京阪どちらを利用するかによって便利なスタジオが変わります。自分の通勤経路を考慮してお選びください。
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
              本ページでは、京橋（大阪）エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、京橋にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜3,000円です。<br />
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
      <ConsultantSection areaKey="kyobashi-osaka" areaName="京橋（大阪）" />

      <RelatedAreas currentSlug="kyobashi-osaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
