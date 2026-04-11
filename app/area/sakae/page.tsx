import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス栄おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '栄エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,栄,名古屋,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 栄',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 180,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '栄駅から近くて通いやすいです。マットもマシンも両方受けられるので、その日の気分で選べるのが嬉しい。インストラクターの指導が丁寧で初心者でも安心。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: '体験3,300円で本格的なレッスンを受けられました。名古屋最大の繁華街にあるのでアクセス抜群。少人数制で丁寧に見てもらえます。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: '全国展開しているので安心感があります。1回あたり約2,125円〜とコスパも良い。栄の買い物ついでに通えるのが便利。' },
    ],
    price: '1回約2,125円〜',
    trial: '体験レッスン 3,300円',
    features: ['マット&マシン', '初心者歓迎', '栄駅近', '全国展開'],
    description: '全国展開の大手ピラティススタジオ。名古屋市栄エリアに展開。マットピラティスからマシンピラティスまで豊富なレッスンメニューを用意。1回あたり約2,125円〜とリーズナブルな価格設定。地下鉄東山線・名城線「栄駅」から好アクセス。経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を提供します。',
    access: '地下鉄東山線・名城線「栄駅」徒歩圏内',
    address: '愛知県名古屋市中区栄エリア',
    popularPlan: { name: 'フリープラン', description: 'マット・マシンどちらも受講可能な人気プラン。栄の中心で通いやすい。', price: '1回約2,125円〜（税込）' },
    options: ['マットグループレッスン', 'マシングループレッスン', 'プライベートレッスン（1回 9,900円〜）', 'ウェアレンタル（月額 2,200円）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '不定休', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'] },
  },
  {
    name: 'ピラティスK 久屋大通パーク店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 155,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: '女性専用なので気兼ねなく通えます。マシンピラティス専門で設備が充実。体験0円で気軽に始められました！' },
      { author: 'A.H', rating: 4, date: '2週間前', text: '久屋大通パーク沿いのおしゃれなスタジオ。音楽に合わせたレッスンが楽しくて、飽きずに続けられます。' },
      { author: 'M.M', rating: 5, date: '3週間前', text: '1回約3,355円〜でマシンピラティスが受けられるのはコスパ良し。栄駅からも歩いて行けるので便利です。' },
    ],
    price: '1回約3,355円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシンピラティス専門', '体験無料', '久屋大通パーク'],
    description: '女性専用のマシンピラティス専門スタジオ。久屋大通パーク沿いに位置し、栄エリアからもアクセス良好。体験レッスンが0円で気軽にスタートできるのが魅力。最新のリフォーマーマシンを完備し、初心者から経験者まで個人のペースに合わせたプログラムを提供。',
    access: '地下鉄名城線「久屋大通駅」徒歩圏内 / 栄駅からも徒歩圏内',
    address: '愛知県名古屋市中区（久屋大通パーク周辺）',
    popularPlan: { name: 'マンスリー4メンバー', description: '月4回のマシンピラティスレッスン。女性専用で安心。', price: '月4回 13,420円〜（税込）' },
    options: ['マンスリー4メンバー（月4回）', 'マンスリーフルメンバー（通い放題）', '追加レッスンチケット', 'ウェア・タオルレンタル'],
    userProfile: { ageRange: '20代〜40代が中心（全体の85%）', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス発散'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'] },
  },
  {
    name: 'Rintosull 栄店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 120,
    reviews: [
      { author: 'T.W', rating: 5, date: '5日前', text: '女性専用のマシンピラティスで安心して通えます。月4回8,800円〜はとてもリーズナブル。栄の中心にあるのでアクセスも便利。' },
      { author: 'H.I', rating: 4, date: '1週間前', text: 'ホットヨガのLAVA系列なので安心感がある。マシンピラティスが月4回8,800円で始められるのは嬉しい。' },
      { author: 'S.N', rating: 5, date: '2週間前', text: 'グループレッスンだけど丁寧に見てくれます。コスパ重視の方にはかなりおすすめ。' },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', 'コスパ抜群', 'LAVA系列'],
    description: '女性専用のマシンピラティススタジオ。ホットヨガLAVA系列が手がけるブランドで信頼性が高い。月4回8,800円〜という手頃な価格設定が魅力。栄駅から徒歩圏内で通いやすく、初心者にもおすすめ。リフォーマーを使った本格的なマシンピラティスが気軽に始められます。',
    access: '地下鉄東山線・名城線「栄駅」徒歩圏内',
    address: '愛知県名古屋市中区栄エリア',
    popularPlan: { name: '月4回プラン', description: 'マシンピラティス月4回。コスパ抜群の人気プラン。', price: '月4回 8,800円〜（税込）' },
    options: ['月4回プラン（8,800円〜）', '通い放題プラン', '追加レッスンチケット'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動習慣づくり'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜19:00', closed: '不定休', facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'] },
  },
  {
    name: 'Pilates Mee 名古屋栄店',
    image: '/images/pilates2.webp',
    rating: 4.8,
    reviewCount: 90,
    reviews: [
      { author: 'N.K', rating: 5, date: '1週間前', text: '完全パーソナルなので自分のペースで集中できます。マシンピラティスの指導がとても丁寧。栄の中心部にあって通いやすい。' },
      { author: 'C.Y', rating: 5, date: '2週間前', text: 'マンツーマンで自分の体の癖や弱点を的確に見てもらえる。姿勢が改善されて肩こりが楽になりました。' },
      { author: 'E.S', rating: 4, date: '3週間前', text: 'パーソナルなので予約が取りやすく、スケジュール調整がしやすいです。インストラクターの質が高い。' },
    ],
    price: 'パーソナル料金',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '栄駅近', 'オーダーメイド'],
    description: 'パーソナルマシンピラティス専門スタジオ。名古屋栄エリアに展開。一人ひとりの体型・目標に合わせたオーダーメイドのマシンピラティスレッスンを提供。完全マンツーマン指導で初心者でも安心。姿勢改善やボディメイクを効率的に目指せます。',
    access: '地下鉄東山線・名城線「栄駅」徒歩圏内',
    address: '愛知県名古屋市中区栄エリア',
    popularPlan: { name: 'パーソナルコース', description: '完全マンツーマンのマシンピラティス。オーダーメイドプログラム。', price: 'お問い合わせください' },
    options: ['月4回コース', '月8回コース', '都度利用', '体験レッスン'],
    userProfile: { ageRange: '20代〜50代', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', '肩こり腰痛改善', '体幹強化'] },
    basicInfo: { hours: '10:00〜21:00', closed: '不定休', facilities: ['リフォーマー', '完全プライベート空間', 'Wi-Fi'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！栄エリアのピラティススタジオは初心者歓迎のスタジオがほとんど。経験豊富なインストラクターが基礎から丁寧に指導してくれます。zen place pilatesは体験3,300円、ピラティスKは体験0円で気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシン（リフォーマーなど）を使ったトレーニング。マシンは負荷調整がしやすく初心者におすすめ。栄エリアではピラティスK、Rintosull、Pilates Meeがマシン専門です。' },
  { question: '栄エリアの料金相場は？', answer: 'グループレッスンは月4回8,800円〜13,420円程度。zen place pilatesは1回約2,125円〜、Rintosullは月4回8,800円〜とリーズナブル。パーソナルレッスンは1回8,000円〜が相場です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回（月4-8回）がおすすめ。慣れたら週2-3回に。継続が大切です。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。食事管理も並行するとより効果的です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹（コア）強化に特化、ヨガは柔軟性とリラックスが中心です。目的に合わせて選びましょう。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、姿勢改善で根本原因を解消できます。デスクワークが多い方にもおすすめ。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。継続が何より大切です。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく短期集中向き。グループは安く楽しく続けられます。栄エリアではPilates Meeがパーソナル専門、ピラティスKやRintosullがグループ対応です。' },
]

export default function SakaePage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス栄おすすめ4選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">栄</span></nav></div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「栄でピラティスを始めたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「名古屋の中心部で通いやすいスタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、栄エリアでおすすめのピラティススタジオ4選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>栄・久屋大通でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>体験レッスンが安いスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>名古屋最大の商業エリアで通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">栄エリアのおすすめピラティススタジオ4選</h2>
            <div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円以下で始められるスタジオも。体験0円のスタジオもあり。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull 栄店（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates 栄（1回約2,125円〜）</li>
                  <li className="text-warm-700">• ピラティスK（体験0円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの空間で安心してトレーニングに集中できる。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 久屋大通パーク店</li>
                  <li className="text-warm-700">• Rintosull 栄店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル・マンツーマン</h3>
                <p className="text-warm-600 text-sm mb-4">一人ひとりに合わせた指導で効果を最大化。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee 名古屋栄店</li>
                  <li className="text-warm-700">• zen place pilates 栄（プライベート対応）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタートがおすすめ。最低2-3ヶ月継続で効果を実感できる方が多いです。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化が期待できます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理の方</h3>
              <p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続するのが理想です。</p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">グループレッスン中心。リーズナブルに始めたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull 栄店（8,800円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">マシン完備の大手スタジオ。グループレッスンの定番価格帯。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 栄</li>
                  <li>• ピラティスK 久屋大通パーク店</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">パーソナルレッスン。短期集中で結果を出したい方向け。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee 名古屋栄店</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化、肩こり腰痛改善など、目的に応じてスタジオを選びましょう。パーソナルなら短期集中、グループなら楽しく継続がしやすいです。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">栄エリアの料金相場はグループ月4回で8,800円〜13,420円程度。パーソナルは1回8,000円〜が目安。無理なく継続できる予算を決めましょう。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。ピラティスKは体験0円、zen placeは3,300円で体験可能です。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">栄は名古屋市の中心繁華街で、地下鉄東山線・名城線「栄駅」が利用可能。名古屋最大の商業エリアなので、三越・パルコ・ラシックでの買い物やオアシス21の散策ついでにも通えて便利です。</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">今回は栄エリアのおすすめピラティススタジオ4選をご紹介しました。</p>
            <p className="text-warm-600 leading-relaxed mb-6">栄は名古屋市の中心繁華街で、地下鉄東山線・名城線「栄駅」から好アクセス。名古屋最大の商業エリアなので、買い物や食事ついでに通えるのが魅力です。コスパ重視ならRintosull（月4回8,800円〜）、体験無料で始めたいならピラティスK、マット&マシン両方ならzen place、パーソナルならPilates Meeと、目的に合わせて選べます。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">体験レッスン0円〜3,300円。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>
      <RelatedAreas currentSlug="sakae" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
