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
  alternates: { canonical: 'https://biyori-pilates.com/area/ebisu/' },
  title: '恵比寿のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '恵比寿エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,恵比寿,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 恵比寿',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ月4回 10,450円（税込）',
    trial: 'マットグループ初回体験 1,000円（キャンペーン・通常3,300円〜／マシングループは初回3,000円・公式のスタジオページ・2026年10月24日確認）',
    features: ['マシン完備', '男性利用可', '恵比寿駅徒歩5分', '全国他店利用可'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオです。恵比寿駅西口・日比谷線1番出口から徒歩5分です。マットグループ・リフォーマーグループ・プライベートレッスンと豊富なレッスン形式です。Balanced Body製マシン完備です。男性も受講可能です。',
    access: 'JR「恵比寿駅」西口 徒歩5分 / 東京メトロ日比谷線「恵比寿駅」1番出口 徒歩5分',
    address: '東京都渋谷区広尾1丁目15-3 増田ビル 4階',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットピラティスのグループレッスンです。全国のzen placeスタジオで他店利用可能です。',
      price: '月4回 10,450円（税込）',
    },
    options: [
      'マットグループフリー（月額16,940円・税込）',
      'リフォーマーグループ月4回（月額15,400円・税込）',
      'プライベート月4回（月額38,280円・税込）',
      '入会金 33,000円（税込・グレード01）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の75%）',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜21:00 / 土日祝 8:00〜17:00（目安）',
      closed: '不定休',
      facilities: ['リフォーマー', 'トラピーズテーブル', 'コンボチェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'BDC PILATES 恵比寿スタジオ',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40590',
    image: '/images/studios/bdc-pilates.webp',
    price: '月4回 16,280円（税込）',
    trial: 'グループ体験 1,100円（税込・10/31までのキャンペーン・限定20名／通常4,070円・体験当日の入会で体験料キャッシュバック・公式・2026年10月24日確認）',
    features: ['日本初マシン専門', '恵比寿駅近', '認定講師', 'グループ&プライベート'],
    description: '日本初のマシンピラティス専門スタジオの恵比寿店です。認定指導資格を保有した講師によるグループレッスンとプライベートレッスンの両方を提供しています。プライベートでは一人ひとりの身体の状態と目的に沿ってメニューを完全カスタマイズです。',
    access: 'JR恵比寿駅東口 徒歩3分（公式表記）',
    address: '東京都渋谷区恵比寿1-20-4 Sreed EBISU B1',
    popularPlan: {
      name: 'グループレッスンコース（月4回）',
      description: '月4回のグループレッスンです。認定講師による本格マシンピラティスです。',
      price: '月4回 16,280円（税込）',
    },
    options: [
      'グループ 月6回 23,100円／月8回 29,260円（税込）',
      'プライベート 月1回 11,000円／月2回 20,900円（税込）',
      '追加レッスン グループ 4,070円／プライベート 11,000円（税込）',
      '入会金 11,000円・事務手数料 2,200円・施設維持費 月770円（税込）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', '体幹強化'],
    },
    basicInfo: {
      hours: '公式の店舗ページに記載なし（電話受付 平日10:00〜20:00 / 土日10:00〜17:00）',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ルルト 恵比寿店', officialUrl: 'https://t.felmat.net/fmcl?ak=L12015F.1.E165311J.U1357808',
    image: '/images/studios/luluto.webp',
    price: '月3回 29,700円〜',
    trial: '公式の店舗一覧で体験受付停止中と表示（公式サイトでご確認ください）',
    features: ['理学療法士監修', '完全マンツーマン', '恵比寿2店舗', '整えるピラティス'],
    description: '理学療法士監修の完全マンツーマンプライベートピラティススタジオです。恵比寿に2店舗展開しています。「鍛える」ではなく「整える」ピラティスをテーマに、リフォーマー・キャデラック・チェアなど本格マシンを完備しています。体験当日入会で入会金22,000円が無料です。翌月繰越可能です。',
    access: '恵比寿駅西口 徒歩5分 / 代官山駅からも徒歩圏内',
    address: '東京都渋谷区東3-19-10 恵比寿MJビル4F',
    popularPlan: {
      name: '月4回プラン',
      description: '理学療法士監修のマンツーマンレッスンです。翌月繰越可能です。',
      price: '月4回 38,400円（税込・1回9,600円）',
    },
    options: [
      '月3回（29,700円・1回9,900円）',
      '月6回（55,800円・1回9,300円）',
      '月8回（72,000円・1回9,000円）',
      '入会金 22,000円（体験当日入会で無料）',
    ],
    userProfile: {
      ageRange: '20代〜60代以上（幅広い年齢層）',
      purpose: ['身体の不調改善', '姿勢矯正', 'リハビリ', '健康維持'],
    },
    basicInfo: {
      hours: '9:00〜21:00（公式の店舗ページ・店舗により異なる場合あり）',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '完全プライベート空間'],
    },
  },
  {
    name: 'CLUB PILATES 恵比寿ガーデンプレイス店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=62359',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 17050円／月8回 26290円／通い放題 40590円（公式店舗ページ・税表記なし）',
    trial: '体験レッスン 無料（当日入会で入会金無料）',
    features: ['世界最大級', '15種類の器具', '恵比寿ガーデンプレイス', '男性利用可'],
    description: '世界最大級のマシンピラティスブランドです。恵比寿ガーデンプレイス グラススクエア1Fの好立地です。最大12名のグループレッスンで、8つのプログラムと4段階のレベルに分けたクラスから選択可能です。15種類のマシン・器具を1人1台完備しています。',
    access: '恵比寿駅から恵比寿ガーデンプレイス経由',
    address: '東京都渋谷区恵比寿4-20-4 ガーデンプレイス グラススクエア棟 1F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスンです。4段階のレベル分けで安心です。',
      price: '月4回 17050円（税表記なし）',
    },
    options: ['月8回 26290円', '通い放題 40590円', '入会金 5,500円（税込）・事務手数料 2,200円（税込）', '料金は公式の店舗ページ（2026年10月14日確認）'],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'the SILK 恵比寿店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: 'パーソナル体験 2,000円〜',
    trial: '初回体験 2,000円（期間限定・50分パーソナル・税込／公式の店舗ページ・2026年10月24日確認）',
    features: ['女性専用', 'パーソナル特化', '恵比寿駅徒歩5分', 'おしゃれ空間'],
    description: '女性専用マシンピラティススタジオthe SILKのパーソナル特化型恵比寿店です。恵比寿駅西口から徒歩5分です。1対1のプライベートレッスンでしっかり指導しています。初回50分の体験レッスンが期間限定2,000円（税込）です。パウダールーム完備で手ぶらで通えます。',
    access: '恵比寿駅西口 徒歩5分',
    address: '東京都渋谷区恵比寿南1-17-15 EX恵比寿南ビル 3F- B',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '1対1の完全プライベートマシンピラティスです。',
      price: '要確認（初回体験 2,000円）',
    },
    options: [
      '初回体験50分 2,000円（期間限定・税込）',
      'パウダールーム完備',
      'レンタルウェア・タオルあり',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '美容'],
    },
    basicInfo: {
      hours: '10:00〜19:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'パウダールーム', 'レンタルウェア・タオル'],
    },
  },
  {
    name: 'Pilates Mee 恵比寿店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: '1回あたり3,750円 ※37,500円の通い放題コースを月10回利用した場合・公式の算出',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '1人のインストラクターにつき最大3名のセミパーソナル型マシンピラティススタジオです。恵比寿駅から徒歩5分です。定額制で1回あたり3,750円（※37,500円の通い放題コースを月10回利用した場合・公式の算出）と割安です。当日予約・当日キャンセル可能と柔軟な予約対応です。朝9時から夜21時15分まで営業しています。',
    access: '恵比寿駅 徒歩5分',
    address: '〒150-0013 東京都渋谷区恵比寿1丁目21−11',
    popularPlan: {
      name: '定額制プラン',
      description: 'セミパーソナルのマシンピラティスです。通い放題で1回あたり3,750円（※37,500円の通い放題コースを月10回利用した場合・公式の算出）の驚き費用対効果です。',
      price: '定額制（詳細は公式サイト参照）',
    },
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },
  },
  {
    name: 'the SILK 広尾店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: '月3回 13,280円〜',
    trial: '体験レッスン 0円（50分・手ぶらで参加可能）',
    features: ['女性専用', 'マシン専門', '広尾駅徒歩4分', '朝7:30〜夜22時'],
    description: '女性専用マシンピラティス専門スタジオです。広尾駅から徒歩4分、恵比寿エリアからも好アクセスです。朝7:30から夜22時まで営業しているため、時間の融通が利きます。PMA加盟団体のプロ監修レッスンです。プロフェッショナルグレードのリフォーマーマシンを使用し、音楽に合わせた50分のグループレッスンで楽しくボディメイクを目指せます。',
    access: '東京メトロ日比谷線「広尾駅」徒歩4分 / 恵比寿エリアからもアクセス可',
    address: '東京都渋谷区広尾5丁目19-4 SR広尾ビル3階（本館）／東京都渋谷区広尾5丁目2-26 M2ビル広尾2階（別館）',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '月4回の標準プランです。PMA監修のプロフェッショナルグレードリフォーマーレッスンです。',
      price: '月4回 15,280円（税込）+ 施設利用料700円',
    },
    options: [
      'Light3（月3回 13,280円）',
      'Full Day（平日デイタイム無制限 19,280円）',
      'Full（無制限 22,280円）',
      'レンタル（ウェア・タオル・ソックスあり）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜22:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'パウダールーム', 'ウォーターサービス', 'レンタルウェア・タオル・ソックス'],
    },
  },
  {
    name: 'ピラティスミラー 中目黒',
    image: '/images/studios/pilates-mirror.webp',
    price: '月会費 11,000円（月6回）',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', 'マシン専門', '中目黒', '月6回制'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオです。恵比寿・中目黒エリアに位置しています。月会費11,000円で月6回まで通える費用対効果の良いプランです。プライベートレッスンも30分4,400円からです。大手運営ならではの安心感と清潔な施設が魅力です。',
    access: '中目黒エリア / 恵比寿からもアクセス可',
    address: '東京都目黒区青葉台1丁目14-4 CONTRAL nakameguro',
    popularPlan: {
      name: '月会費プラン（月6回）',
      description: 'マシンピラティス月6回までです。コナミ運営の安心感です。',
      price: '月会費 11,000円（税込）',
    },
    options: [
      '入会金 11,000円',
      'プライベートレッスン30分（4,400円）',
      'プライベートレッスン50分（6,600円）',
      '体験レッスン（2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      purpose: ['姿勢改善', 'ボディメイク', '健康維持', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土 8:00〜18:00 / 日 8:00〜19:00',
      closed: '毎週木曜日',
      facilities: ['リフォーマーマシン', 'ミラー設備', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
  {
    name: 'Dr.ピラティス 恵比寿本店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11979O.1.Z164554L.U1357808',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 無料（入会金も0円・公式の店舗ページ表示・2026年10月23日確認）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオです。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せます。恵比寿エリアです（詳細は公式サイト参照）。',
    access: '恵比寿エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。恵比寿エリアのピラティススタジオのほとんどが初心者向けレッスンを用意しています。CLUB PILATESはレベル分けがあり、the SILKは初心者が80%です。BDC PILATESはグループ体験が10月31日までのキャンペーンで1,100円（税込・通常4,070円）です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。恵比寿エリアではマシン専門スタジオが充実しています。',
  },
  {
    question: '恵比寿のピラティススタジオの料金相場は？',
    answer: '恵比寿エリアの料金相場は、グループレッスン月4回で9,600円〜14,200円程度です。Pilates Meeは定額制で1回あたり3,750円（※37,500円の通い放題コースを月10回利用した場合・公式の算出）と割安です。パーソナルは月4回29,700円〜が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。無理のないペースで長く続けることをおすすめします。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。最低でも2〜3ヶ月は継続することが大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。the SILK広尾は無料体験、ルルト恵比寿店は公式の店舗一覧で体験受付停止中と表示（公式サイトでご確認ください）、BDC PILATESはグループ体験1,100円（10/31までのキャンペーン）で体験できます。ウェアレンタルを用意しているスタジオもあります。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹を鍛えることに特化しています。ヨガは柔軟性とリラックスを重視しています。目的に合わせてお選びください。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: '改善が期待できます。ルルト恵比寿は理学療法士監修で、身体の不調改善に特化した指導を提供しています。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '効果が表れだすのは「2ヶ月を過ぎた頃」からです。最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'パーソナルはルルトやthe SILKで効果的な指導を受けられます。グループは zen place（マット月4回 10,450円）や BDC PILATES（月4回 16,280円）があります（いずれも税込・公式・2026年10月確認）。まずは体験レッスンで両方を試すことをおすすめします。',
  },
]

export default function EbisuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '恵比寿', url: 'https://biyori-pilates.com/area/ebisu/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月24日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス恵比寿おすすめ9選<br className="hidden md:block" />
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
              <span className="text-warm-600">恵比寿</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="恵比寿" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、恵比寿エリアでおすすめのピラティススタジオ9選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>恵比寿でピラティススタジオを探している</span>
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
                  <span>おしゃれな街で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="恵比寿" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              恵比寿のおすすめピラティススタジオ9選
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
              恵比寿のピラティス料金相場
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
                    <td className="px-4 py-3">2,000円〜15,280円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回あたり3,750円〜38,400円（※Pilates Meeは37,500円の通い放題コースを月10回利用した場合・公式の算出）</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜2,200円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              恵比寿は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の代官山エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              恵比寿でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR「恵比寿駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿エリアのスタジオは恵比寿駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。恵比寿駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることもあります。アプリやWebで空き状況をこまめに確認し、キャンセル待ち機能があるスタジオでは積極的にご活用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿エリアだけでなく、近隣の<Link href="/area/daikanyama/" className="text-warm-700 underline hover:text-warm-900">代官山</Link>、<Link href="/area/nakameguro/" className="text-warm-700 underline hover:text-warm-900">中目黒</Link>、<Link href="/area/hiroo/" className="text-warm-700 underline hover:text-warm-900">広尾</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>恵比寿エリアの豆知識：</strong>恵比寿は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心です。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                  月額1万円前後で通えるスタジオです。体験無料のスタジオもあります。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee（1回あたり3,750円 ※37,500円の通い放題コースを月10回利用した場合・公式の算出）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全マンツーマンで質の高いレッスンを受けられます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ルルト（理学療法士監修）</li>
                  <li className="text-warm-700">• the SILK 恵比寿（パーソナル特化）</li>
                  <li className="text-warm-700">• zen place プライベート</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・施設充実</h3>
                <p className="text-warm-600 text-sm mb-4">
                  恵比寿駅から好アクセスです。設備充実です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES（恵比寿ガーデンプレイス）</li>
                  <li className="text-warm-700">• BDC PILATES（恵比寿駅近）</li>
                  <li className="text-warm-700">• the SILK 広尾（朝7:30〜夜22時）</li>
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
                週1〜2回（月4〜8回）から始めることをおすすめします。最低でも2〜3ヶ月継続で効果を実感できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。自分のペースが一番です。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループ・セミパーソナル中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee（1回あたり3,750円 ※37,500円の通い放題コースを月10回利用した場合・公式の算出）</li>
                  <li>• zen place（10,450円/月4回）</li>
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• BDC PILATES（16,280円）</li>
                  <li>• the SILK 広尾（13,280円〜）</li>
                  <li>• CLUB PILATES（月4回 17,050円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートです。効果重視の方におすすめです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ルルト（月3回 29,700円〜）</li>
                  <li>• zen place プライベート（38,280円）</li>
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
                  ダイエット、姿勢改善、体幹強化、美容など、目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿エリアの料金相場はグループ月4回で9,600円〜14,200円です。入会金やレンタル料もご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  BDC PILATESはグループ体験1,100円（10/31までのキャンペーン・通常4,070円）、the SILKは無料体験、CLUB PILATESとDr.ピラティス 恵比寿本店も無料体験を実施しています。体験レッスンで実際の雰囲気をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  恵比寿はJR山手線・埼京線・東京メトロ日比谷線が利用可能です。CLUB PILATESは恵比寿ガーデンプレイス内で買い物ついでにも便利です。
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
              本ページでは、恵比寿のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、恵比寿に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜2,200円です。<br />
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
      <ConsultantSection areaKey="ebisu" areaName="恵比寿" />

                  {/* g1-link-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/brands/bdc-ebisu/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">BDC PILATES 恵比寿スタジオの料金・体験を見る</Link>
              </div>
            </div>
      {/* g1-link-202609 */}
      <div className="my-8 bg-white border border-warm-200 p-5">
        <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>
        <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/brands/the-silk-ebisu/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">the SILK 恵比寿店の料金・体験を見る</Link>
        </div>
      </div>

      <RelatedAreas currentSlug="ebisu" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
