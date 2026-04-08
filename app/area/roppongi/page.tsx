import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス六本木おすすめ4選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '六本木エリアのおすすめピラティススタジオ4選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,六本木,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 六本木',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 190,
    reviews: [
      { author: 'S.K', rating: 5, date: '2週間前', text: '六本木駅2番出口から徒歩2分で通いやすい。マットもマシンも両方受けられるのが嬉しいです。全国の店舗で相互利用できるのも便利。' },
      { author: 'Y.T', rating: 5, date: '1ヶ月前', text: '少人数制で丁寧に指導してもらえます。男性もOKなので夫婦で通っています。六本木ヒルズが近く、レッスン後にカフェに寄れるのも気に入っています。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: '体験レッスンが9,000円（税別）でマシンを試せます。月4回10,450円〜と続けやすい価格帯。インストラクターの質が高いです。' },
    ],
    price: '月4回 10,450円〜（税込）',
    trial: '体験レッスン 9,000円（税別）',
    features: ['マット&マシン', '六本木駅徒歩2分', '男性OK', '全国相互利用'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。六本木駅2番出口から徒歩2分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンに対応。全国の店舗で相互利用が可能で、出張先や旅行先でもレッスンを受けられます。男性も利用可能。',
    access: '日比谷線・大江戸線「六本木駅」2番出口 徒歩2分',
    address: '東京都港区六本木（六本木駅2番出口徒歩2分）',
    popularPlan: {
      name: 'マットグループ（月4回）',
      description: 'マットを使ったグループレッスン。初心者から経験者まで無理なく続けられる回数設定。男性も受講可能。',
      price: '月4回 10,450円〜（税込）',
    },
    options: [
      'マットグループ（月4回 10,450円〜）',
      'マシングループ（月4回 14,520円〜）',
      'プライベート（月4回 32,560円〜）',
      '全国店舗相互利用可能',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'STUDIO IVY 麻布台店',
    image: '/images/pilates3.jpg',
    rating: 4.9,
    reviewCount: 78,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: '完全プライベート空間なので周りを気にせず集中できます。インストラクターが一人ひとりに合わせたプログラムを組んでくれるのが嬉しい。' },
      { author: 'A.H', rating: 5, date: '2週間前', text: '体験レッスンが4,500円で手軽に試せました。パーソナル専門ならではの丁寧な指導に感動。' },
      { author: 'M.M', rating: 5, date: '3週間前', text: '1回6,500円〜とパーソナルとしてはリーズナブル。六本木エリアで質の高いパーソナルピラティスを探している方におすすめです。' },
    ],
    price: '1回 6,500円〜',
    trial: '体験レッスン 4,500円',
    features: ['パーソナル専門', '完全プライベート空間', 'マシンピラティス', '麻布台エリア'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。麻布台エリアに展開し、六本木からもアクセス良好。完全プライベート空間でオーダーメイドのプログラムを提供。1回6,500円〜とパーソナルとしてはリーズナブルな価格設定。初心者から上級者まで、一人ひとりの目標に合わせた指導を受けられます。',
    access: '六本木エリア・麻布台',
    address: '東京都港区麻布台（麻布台エリア）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全プライベート空間でのマンツーマンレッスン。オーダーメイドのプログラムで効率的にボディメイク。',
      price: '1回 6,500円〜',
    },
    options: [
      'パーソナルレッスン（1回 6,500円〜）',
      '月謝制プランあり',
      '体験レッスン（4,500円）',
      'オーダーメイドプログラム',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['完全個室', 'マシン完備', 'ロッカー'],
    },
  },
  {
    name: 'All Present Pilates',
    image: '/images/pilates4.jpg',
    rating: 4.8,
    reviewCount: 62,
    reviews: [
      { author: 'T.S', rating: 5, date: '1週間前', text: 'パーソナル専門で一人ひとりに合ったプログラムを組んでもらえます。体の悩みに寄り添った指導が魅力。' },
      { author: 'N.K', rating: 5, date: '2週間前', text: '体験レッスンが5,500円。1回6,600円〜とパーソナルとしては通いやすい価格帯。六本木エリアで質の高い指導を受けられます。' },
      { author: 'H.M', rating: 4, date: '1ヶ月前', text: '六本木エリアにあるパーソナルピラティス。落ち着いた雰囲気のなかでじっくりレッスンを受けられます。' },
    ],
    price: '1回 6,600円〜',
    trial: '体験レッスン 5,500円',
    features: ['パーソナル専門', '六本木エリア', 'マシンピラティス', '丁寧な指導'],
    description: '六本木エリアのパーソナルピラティス専門スタジオ。一人ひとりの体の状態や目標に合わせたオーダーメイドのプログラムを提供。体験レッスン5,500円、1回6,600円〜で本格的なパーソナルピラティスを受けられます。姿勢改善やボディメイクなど、さまざまな目的に対応。',
    access: '六本木エリア',
    address: '東京都港区六本木（六本木エリア）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '一人ひとりの体に合わせたオーダーメイドプログラム。丁寧なカウンセリングから始まるパーソナルレッスン。',
      price: '1回 6,600円〜',
    },
    options: [
      'パーソナルレッスン（1回 6,600円〜）',
      '体験レッスン（5,500円）',
      '回数券プランあり',
      'オーダーメイドプログラム',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['マシン完備', 'ロッカー'],
    },
  },
  {
    name: 'BDC PILATES 恵比寿スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 145,
    reviews: [
      { author: 'E.Y', rating: 5, date: '1週間前', text: 'プロダンサー養成校がプロデュースしているだけあって、動きの質にこだわったレッスン。六本木から日比谷線で1駅なので通いやすいです。' },
      { author: 'C.T', rating: 5, date: '2週間前', text: 'グループ月額15,400円〜で本格的なマシンピラティスが受けられます。インストラクターのレベルが高く、毎回新しい発見があります。' },
      { author: 'S.O', rating: 4, date: '1ヶ月前', text: '恵比寿駅からすぐなので六本木からのアクセスも良好。ダンサー養成の知見を活かしたレッスンが他にはない魅力。' },
    ],
    price: 'グループ 月額15,400円〜',
    trial: '体験レッスンあり',
    features: ['プロダンサー養成校プロデュース', '六本木から日比谷線1駅', 'マシンピラティス', 'グループレッスン'],
    description: 'プロダンサー養成校「ブロードウェイダンスセンター」がプロデュースするピラティススタジオ。六本木から日比谷線で1駅の恵比寿に位置。ダンサーの体づくりの知見を活かした質の高いレッスンが特徴。グループ月額15,400円〜で本格的なマシンピラティスを受けられます。',
    access: '六本木駅から日比谷線で1駅「恵比寿駅」徒歩すぐ',
    address: '東京都渋谷区恵比寿（恵比寿駅徒歩すぐ）',
    popularPlan: {
      name: 'グループレッスン（月額制）',
      description: 'プロダンサー養成校の知見を活かしたグループマシンピラティス。質の高いインストラクターによる指導。',
      price: '月額 15,400円〜（税込）',
    },
    options: [
      'グループレッスン（月額 15,400円〜）',
      'プライベートレッスン（別途料金）',
      '体験レッスン',
      'ドロップイン（1回券）あり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'ダンスパフォーマンス向上', '体幹強化'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['マシン完備', 'ロッカー', 'シャワー'],
    },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！六本木エリアのスタジオは初心者歓迎のところがほとんどです。zen place pilatesでは基礎から丁寧に指導してもらえますし、パーソナル専門のSTUDIO IVYやAll Present Pilatesなら一人ひとりのレベルに合わせたプログラムを組んでもらえます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使ったトレーニングです。マシンはバネの負荷を調整できるため、初心者にもおすすめです。zen placeではマット・マシン両方に対応しています。' },
  { question: '六本木エリアの料金相場は？', answer: 'グループレッスンは月額10,450円〜15,400円程度。パーソナルは1回4,500円〜6,600円が相場です。体験レッスンはパーソナルで4,500円〜9,000円、グループは各スタジオにお問い合わせください。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回からスタートするのがおすすめ。慣れてきたら週2〜3回に増やしましょう。最低2〜3ヶ月は継続することで効果を実感できます。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、ピラティスはインナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質へと変わっていきます。即効性よりも継続が大切で、2〜3ヶ月の継続をおすすめします。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOKです。ウェアやタオルのレンタルがあるスタジオもありますので、事前に確認しましょう。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化・姿勢改善が中心、ヨガは柔軟性とリラックスが中心です。ピラティスはリハビリ目的で生まれたエクササイズで、体の使い方を学ぶのに最適です。' },
  { question: '肩こりや腰痛は改善しますか？', answer: 'はい、ピラティスは姿勢改善を通じて肩こりや腰痛の根本原因にアプローチします。特にパーソナルレッスンでは個別の悩みに合わせたプログラムを組んでもらえます。' },
  { question: 'どのくらいで効果が出ますか？', answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の変化や体の軽さを実感する方が多いです。ボディラインの変化は3〜6ヶ月程度で感じられます。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: '目的や予算によります。パーソナルは効果が出やすく個別対応が可能。グループは費用を抑えながら楽しく続けられます。六本木エリアにはSTUDIO IVYやAll Present Pilatesなどパーソナル専門スタジオが充実しています。' },
]

export default function RoppongiPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス六本木おすすめ4選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">六本木</span></nav></div></section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「六本木でピラティスを始めたい」</p><p className="text-warm-600 leading-relaxed mb-6">「六本木ヒルズや東京ミッドタウンの近くで通えるスタジオを探している」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、日比谷線・大江戸線「六本木駅」周辺でおすすめのピラティススタジオ4選をまとめました。六本木ヒルズや東京ミッドタウンに近い国際色豊かなエリアで、自分にぴったりのスタジオを見つけましょう。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>六本木でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>パーソナルで丁寧に指導してほしい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較して選びたい</span></li></ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">六本木のおすすめピラティススタジオ4選</h2><div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円前後から通えるスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li><li className="text-warm-700">• BDC PILATES（グループ月額 15,400円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル専門</h3><p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導を受けたい方に。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• STUDIO IVY（1回 6,500円〜）</li><li className="text-warm-700">• All Present Pilates（1回 6,600円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3><p className="text-warm-600 text-sm mb-4">六本木駅から徒歩すぐのスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place pilates（駅徒歩2分）</li><li className="text-warm-700">• BDC PILATES（日比谷線1駅・恵比寿）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1〜2回からスタート。最低2〜3ヶ月継続で効果を実感できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2〜3回がおすすめ。3〜6ヶ月で目に見える変化が期待できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続しましょう。</p></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など、目的に応じてスタジオを選びましょう。パーソナルは効果が出やすく、グループは楽しく続けられます。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">六本木エリアの料金相場はグループ月額10,450円〜15,400円、パーソナルは1回6,500円〜6,600円程度。体験レッスンは4,500円〜9,000円です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">各スタジオで体験レッスンを実施しています。STUDIO IVYは4,500円、All Present Pilatesは5,500円、zen placeは9,000円（税別）で体験可能。まずは気軽に試してみましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">六本木は日比谷線と大江戸線が利用可能。六本木ヒルズや東京ミッドタウンに近い国際色豊かなエリアで、レッスン前後のショッピングや食事も楽しめます。恵比寿も日比谷線で1駅と好アクセスです。</p></div></div></div></section>
        <section className="py-16 bg-warm-50"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は六本木のおすすめピラティススタジオ4選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">六本木は日比谷線・大江戸線が利用でき、六本木ヒルズや東京ミッドタウンに近い国際色豊かなエリア。zen place pilates 六本木のようなグループ対応の大手スタジオから、STUDIO IVYやAll Present Pilatesのパーソナル専門スタジオ、さらにプロダンサー養成校プロデュースのBDC PILATESまで多彩な選択肢があります。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひ自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのスタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">各スタジオで体験レッスン実施中。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
