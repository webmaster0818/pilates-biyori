import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス東京駅おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '東京駅エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。',
  keywords: 'ピラティス,東京駅,八重洲,丸の内,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'the SILK 東京八重洲店',
    image: '/images/pilates2.jpg',
    rating: 4.7, reviewCount: 165,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '東京駅八重洲北口から徒歩3分で最高のアクセス。女性専用で安心。開放感のある大きな窓が気持ちいいスタジオです。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: '初心者が8割とのことで、体が硬い私でも無理なく始められました。音楽に合わせたレッスンが楽しい。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: '仕事帰りに通っています。スタジオがおしゃれでモチベーションが上がります。入会金無料キャンペーンで始められました。' },
    ],
    price: 'Standard4 12,980円〜', trial: '体験レッスン（グループ）3,850円',
    features: ['女性専用', 'マシンピラティス専門', '東京駅徒歩3分', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオ。JR東京駅八重洲北口（16番出口）から徒歩3分の好アクセス。開放感のある大きな窓と白いリフォーマーが並ぶスタイリッシュな空間。初心者が8割で安心。',
    access: 'JR「東京駅」八重洲北口（16番出口）徒歩3分',
    address: '東京都中央区八重洲1-5-9 八重洲加藤ビルディング5F',
    popularPlan: { name: 'Standard4（月4回）', description: '女性専用マシンピラティスの基本プラン。', price: '月4回 12,980円（税込）〜' },
    options: ['Standard4（月4回 12,980円〜）', 'Full（通い放題）', 'Full Day（デイタイム通い放題）', 'パーソナル（体験 9,900円）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '仕事帰りのリフレッシュ'] },
    basicInfo: { hours: '7:30〜21:00', closed: '年末年始（12/29〜1/3）', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'] },
  },
  {
    name: 'zen place pilates 八重洲スタジオ',
    image: '/images/pilates3.jpg',
    rating: 4.8, reviewCount: 220,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: '東京駅から徒歩5分、日本橋駅から徒歩3分。マットもマシンも両方受けられるのが嬉しい。AI背骨ムーブメント解析が面白い。' },
      { author: 'A.H', rating: 4, date: '2週間前', text: '少人数制で丁寧な指導。男性もOKなので夫婦で通っています。体験500円で気軽に始められました。' },
      { author: 'M.M', rating: 5, date: '3週間前', text: '全国150店舗以上で相互利用可能。出張が多いので助かっています。' },
    ],
    price: 'マットグループ 月4回 10,450円〜', trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '東京駅徒歩5分', '男性OK', 'AI背骨解析'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。東京駅八重洲北口から徒歩5分、日本橋駅から徒歩3分。マットグループ、マシングループ、プライベートに対応。世界初のAI「背骨ムーブメント解析」導入。',
    access: '日本橋駅A7出口 徒歩3分 / 東京駅八重洲北口 徒歩5分',
    address: '東京都中央区日本橋2-3-21 八重洲セントラルビル6F',
    popularPlan: { name: 'リフォーマーグループ（月4回）', description: 'マシンを使ったグループレッスン。', price: '月4回 15,400円（税込）〜' },
    options: ['マットグループ（月4回 10,450円〜）', 'リフォーマーグループ（月4回 15,400円〜）', 'フリープラン（月16,940円〜）', 'プライベート（1回 9,900円〜）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', '仕事帰りのリフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:30〜22:00 / 土日祝 8:00〜19:30', closed: '月末不定休', facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'] },
  },
  {
    name: 'ピラティスK 銀座店',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    price: 'マンスリー4メンバー 13,420円', trial: '体験レッスン 2,000円',
    features: ['女性専用', 'マシンピラティス専門', '銀座一丁目駅徒歩1分', '東京駅から近い'],
    description: '女性専用マシンピラティス専門スタジオ。銀座一丁目駅7番出口から徒歩1分。東京駅から有楽町線で1駅。初心者から経験者まで個人のペースに合わせたプログラムを用意。',
    access: '有楽町線「銀座一丁目駅」7番出口 徒歩1分 / 東京駅から有楽町線で1駅',
    address: '東京都中央区銀座1-6-10 上一ビルディング7F',
  },
  {
    name: 'Pilates Mee 築地店',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    price: 'セミパーソナル 月2回 11,000円〜', trial: 'お問い合わせください',
    features: ['セミパーソナル', '通い放題あり', '築地駅徒歩3分', 'コスパ抜群'],
    description: 'セミパーソナル×通い放題で圧倒的コスパのマシンピラティススタジオ。築地駅から徒歩3分。東京駅から日比谷線で数駅。通い放題なら1回あたり1,250円。',
    access: '日比谷線「築地駅」徒歩3分 / 東京駅から日比谷線で数駅',
    address: '東京都中央区築地1-4-8 築地ホワイトビル503',
  },
  {
    name: 'BDC PILATES 銀座スタジオ',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    price: 'グループ 月額 15,400円〜', trial: '体験レッスン 3,850円',
    features: ['プロダンサー養成校プロデュース', '少人数制（最大8名）', '銀座一丁目駅徒歩1分', '東京駅近隣'],
    description: 'プロダンサー養成校「BDC」プロデュースのマシンピラティス専門スタジオ。銀座一丁目駅から徒歩1分、JR有楽町駅から徒歩3分。東京駅からも好アクセス。最大8名の少人数制。',
    access: '有楽町線「銀座一丁目駅」徒歩1分 / JR「有楽町駅」徒歩3分',
    address: '東京都中央区銀座（銀座一丁目駅徒歩1分）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！東京駅周辺のスタジオは初心者歓迎。the SILKは初心者が8割以上です。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用マシンを使ったトレーニング。マシンは初心者におすすめ。' },
  { question: '東京駅エリアの料金相場は？', answer: 'グループ月4回で10,000円〜15,400円程度。パーソナルは1回8,000円〜10,000円。体験は500円〜3,850円です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化、ヨガは柔軟性とリラックスが中心です。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、姿勢改善で根本原因を解消できます。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。' },
]

export default function TokyoStationPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス東京駅おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">東京駅</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「東京駅周辺でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「仕事帰りに通えるスタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、東京駅・八重洲・丸の内エリアから通えるおすすめのピラティススタジオ5選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>東京駅周辺でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>仕事帰りに通えるスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">東京駅周辺のおすすめピラティススタジオ5選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円前後から。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place（マット月4回 10,450円〜）</li><li className="text-warm-700">• Pilates Mee（セミパーソナル月2回 11,000円）</li><li className="text-warm-700">• the SILK（月4回 12,980円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">少人数・本格派</h3><p className="text-warm-600 text-sm mb-4">少人数制やセミパーソナルで丁寧な指導。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• BDC PILATES（最大8名）</li><li className="text-warm-700">• Pilates Mee（セミパーソナル）</li><li className="text-warm-700">• zen place（プライベートあり）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">東京駅からの近さ</h3><p className="text-warm-600 text-sm mb-4">東京駅から徒歩圏内。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• the SILK 八重洲（東京駅徒歩3分）</li><li className="text-warm-700">• zen place 八重洲（東京駅徒歩5分）</li><li className="text-warm-700">• ピラティスK 銀座（有楽町線で1駅）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月で効果を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">グループ</p><p className="text-sm text-warm-600 mb-4">マットグループやリーズナブルなプラン。</p><ul className="text-sm text-warm-700 space-y-1"><li>• zen place（マット月4回 10,450円〜）</li><li>• the SILK（月4回 12,980円〜）</li></ul></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">マシン完備の充実レッスン。</p><ul className="text-sm text-warm-700 space-y-1"><li>• ピラティスK（月4回 13,420円）</li><li>• BDC PILATES（月額 15,400円〜）</li><li>• zen place リフォーマー（15,400円〜）</li></ul></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">通い放題</h3><p className="text-3xl font-bold text-warm-800 mb-4">コスパ◎</p><p className="text-sm text-warm-600 mb-4">週2回以上通うなら通い放題がお得。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Pilates Mee（通い放題 37,500円）</li><li>• zen place（フリー 16,940円〜）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など、目的に応じて選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4回で10,000円〜15,400円、セミパーソナルは月4回19,800円が相場。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">500円〜3,850円で体験できるスタジオが多いので、気軽に試してみてください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">東京駅はJR各線・丸ノ内線・東西線など多数の路線が集まる日本最大のターミナル駅。八重洲口・丸の内口それぞれにスタジオがあり、仕事帰りに立ち寄りやすい環境です。</p></div></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は東京駅周辺のおすすめピラティススタジオをご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">東京駅は日本最大のターミナル駅で、八重洲・丸の内・日本橋・銀座も徒歩圏内。仕事帰りに通える質の高いスタジオが充実しています。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ自分に合うスタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン500円〜3,850円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
