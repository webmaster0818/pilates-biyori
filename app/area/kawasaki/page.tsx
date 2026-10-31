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
  alternates: { canonical: 'https://biyori-pilates.com/area/kawasaki/' },
  title: '川崎のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '川崎エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,川崎,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 川崎店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン完備', '京急川崎駅徒歩2分', '音楽レッスン'],
    description: '女性専用のマシンピラティス専門スタジオです。京急川崎駅中央口から徒歩2分、JR川崎駅からも徒歩5分の好立地です。音楽に合わせたグループレッスンが特徴で、お腹・お尻・二の腕・脚・背中の部位に特化したボディメイクプログラムが充実しています。カジュアルかつスタイリッシュな店内で楽しくピラティスを続けられます。',
    access: '京急川崎駅中央口から徒歩2分 / JR川崎駅から徒歩5分',
    address: '神奈川県川崎市川崎区駅前本町10-1 MEFULL川崎8F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '平日・土日祝いつでも受講可能です。お好きな時間で受講できる人気プランです。',
      price: '月4回 13,420円（税込）+ 施設維持費825円',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリーデイメンバー（平日10-15時 毎日1レッスン 14,520円）',
      'マンスリープレミアムメンバー（毎日2レッスン 18,920円）',
      '追加受講（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス解消'],
    },
    basicInfo: {
      hours: '月〜金 10:00-15:00 / 17:30-22:00、土・祝 10:00-19:00、日 10:00-17:30',
      closed: '第一月曜日',
      facilities: ['ロッカー', 'パウダールーム', 'ウォーターサーバー', 'レンタルウェア'],
    },
  },
  {
    name: 'zen place pilates 川崎',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン', '全国150店舗他店利用', '男性利用可', '医療機関推奨'],
    description: '全国150店舗展開の大手ピラティススタジオです。京急川崎駅中央口から徒歩5分、JR川崎駅中央東口から徒歩6分です。マットグループ、マシングループ、プライベートレッスンがあり、男性も利用可能です。医療機関も推奨している本格的なピラティスで、いつまでもアクティブに人生を愉しめる身体づくりをサポートしています。',
    access: '京急川崎駅中央口から徒歩5分 / JR川崎駅中央東口から徒歩6分',
    address: '神奈川県川崎市川崎区砂子2丁目11-29 平松川崎ビル 6階',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットグループレッスン（マットピラティス・ヨガ）を月4回受講できます。マシンのリフォーマーグループは別プラン（月4回 15,400円・グレード共通・開催の有無はスタジオにより異なります）です。',
      price: 'グレード01 月4回 10,450円（税込）',
    },
    options: [
      'マットグループ デイフリー（グレード01 13,552円）',
      'マットグループ フリー（グレード01 16,940円）',
      'プライベートレッスン（月4回 38,280円〜）',
      'マット&マシングループ（MM22 12,650円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の75%）',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00-21:30 / 土日祝 8:00-21:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'Rintosull 川崎店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月4回 14,800円〜',
    trial: '体験レッスン 無料',
    features: ['AI姿勢分析', 'LAVA連携', '女性専用', 'JR川崎駅徒歩5分'],
    description: 'AI姿勢分析を導入した最新型ピラティススタジオです。2025年5月1日オープンです。JR川崎駅から徒歩5分です。マシンピラティス、ホットヨガ、暗闇キックボクシングの通い放題プランがあります。全国540店舗以上のLAVAとも連携です。AI姿勢分析で身体のバランスや骨格を計測し、最適なトレーニング方法を提案しています。',
    access: 'JR川崎駅から徒歩5分',
    address: '神奈川県川崎市川崎区砂子2丁目6番地2 川崎三恵ビル6階',
    popularPlan: {
      name: '通い放題プラン',
      description: 'マシンピラティス、ホットヨガ、暗闇キックボクシングが通い放題です。LAVA連携です。',
      price: '月額 19,800円（税込）',
    },
    options: [
      '入会金＋登録金 10,000円 → 0円（体験会当日入会）',
      '施設使用料 2,500円（入会時のみ）',
      'AI姿勢分析レポート（QRコードまたは印刷）',
      'ウェア・タオルレンタル（月額 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'AI分析'],
    },
    basicInfo: {
      // 営業時間: 公式（rintosull.jp/shop/kanagawa/kawasaki/）に営業時間の記載が無いため非表示（2026-10-08）
      closed: '毎週日曜・第4木曜',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'AI姿勢分析システム', '女性専用'],
    },
  },
  {
    name: 'the SILK 川崎店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: '月4回 14,370円〜（別途施設利用料 月700円・税込）',
    trial: '体験レッスン 無料',
    features: ['音楽×マシン', '女性限定', '京急川崎駅徒歩2分', 'PMA加盟'],
    description: 'マシンピラティス専門スタジオです。京急川崎駅中央口から徒歩2分、JR川崎駅北口東から徒歩4分です。2024年7月オープンです。音楽に合わせた50分のリフォーマーレッスンです。PMA加盟団体監修の質の高いプログラムです。初回体験が無料で手ぶらで受けられます。女性限定で安心して通える環境です。',
    access: '京急川崎駅中央口から徒歩2分 / JR川崎駅北口東から徒歩4分',
    address: '神奈川県川崎市川崎区砂子2-4-10 ヒューリック川崎ビル8階',
    popularPlan: {
      name: 'Standard 4（月4回）',
      description: '毎月1〜末日までの間で4回グループレッスン受講可能です。音楽に合わせた楽しいレッスンです。',
      price: '月4回 14,370円（税込）',
    },
    options: [
      'Light 3（月3回 12,280円）',
      'Full（毎日1回まで 19,980円）',
      'Full Day（平日OPEN〜15時 毎日1回まで 17,780円）',
      '月額ウェア/タオルレンタル（2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性限定）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['ロッカー', 'パウダールーム', 'ウォーターサーバー', 'レンタルウェア', '女性限定'],
    },
  },
  {
    name: 'STUZIO ONCE 川崎店',
    image: '/images/studios/stuzio-once-kawasaki.webp',
    price: '1回 8,800円〜',
    trial: '体験レッスン 5,500円',
    features: ['完全プライベート', 'マシン完備', '川崎駅西口徒歩5分', 'マンツーマン'],
    description: '完全個室のプライベートレッスン専門スタジオです。川崎駅西口から徒歩5分、尻手駅から徒歩12分です。マンツーマン指導で一人ひとりの目的・体力に合わせたオーダーメイドレッスンです。経験豊富なインストラクターが丁寧に指導しています。通い放題でお得に続けられます。初心者の9割が安心して通えるプログラムです。',
    access: '川崎駅西口から徒歩5分 / 尻手駅から徒歩12分',
    address: '神奈川県川崎市幸区中幸町4-38',
    popularPlan: {
      name: '通い放題プラン',
      description: '完全プライベートレッスン通い放題です。マンツーマン指導で短期間で効果を実感できます。',
      price: '月額 39,800円（税込）',
    },
    options: [
      '月4回プラン（1回 8,800円）',
      '月8回プラン（1回 8,250円）',
      'チケット制（1回 9,900円）',
      'ウェア・タオルレンタル（都度 500円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の70%）',
      purpose: ['短期集中', 'ボディメイク', '姿勢改善', 'パーソナル指導'],
    },
    basicInfo: {
      hours: '平日 9:00〜21:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['完全個室', 'ロッカー', 'パウダールーム', 'マシン完備', '待合室なし（予約時間に来店）'],
    },
  },
  {
    name: 'TSUTAYA Conditioning PILATES 川崎駅前店',
    image: '/images/studios/tsutaya-pilates-kawasaki.webp',
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['女性専用', '少人数制', '京急川崎駅徒歩1分', 'TSUTAYA併設'],
    description: '女性専用・少人数制のマシンピラティス専門スタジオです。JR川崎駅から徒歩4分、京急川崎駅中央口から徒歩1分の好立地です。TSUTAYAの蔦屋書店に併設され、買い物ついでに通えます。楽々ピラティスのコンセプトで初心者でも安心です。インストラクターが丁寧に指導する少人数制グループレッスンです。',
    access: '京急川崎駅中央口から徒歩1分 / JR川崎駅から徒歩4分',
    address: '神奈川県川崎市川崎区駅前本町8番地',
    popularPlan: {
      name: '月4回プラン',
      description: '少人数制グループレッスンです。女性専用で安心して通える人気プランです。',
      price: '月4回 13,200円（税込）',
    },
    options: [
      '月8回プラン（16,500円）',
      'デイタイムプラン（平日昼 月4回 11,000円）',
      '追加レッスン（1回 3,300円）',
      'ウェア・タオルレンタル（月額 2,200円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の75%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜19:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', '女性専用', 'TSUTAYA併設'],
    },
  },
  {
    name: 'CLUB PILATES 川崎',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=82779',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 11,990円／月8回 19,900円／通い放題 21,890円（公式店舗ページ・税表記なし）',
    trial: '体験レッスン 無料',
    features: ['アメリカ発', 'グループ&プライベート', '川崎駅東口徒歩3分', '世界800店舗'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーンです。川崎駅東口から徒歩3分です。グループレッスンからプライベートレッスンまで幅広く対応しています。全米No.1のピラティスメソッドで、初心者から上級者まで満足できるプログラムを提供しています。世界800店舗以上展開で出張先でも通えます。',
    access: '川崎駅東口から徒歩3分',
    address: '神奈川県川崎市川崎区駅前本町12-1 リバークビル5F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '全米No.1メソッドです。グループレッスンで楽しく続けられる人気プランです。',
      price: '月4回 11,990円（税表記なし）',
    },
    options: ['月8回 19,900円', '通い放題 21,890円', '入会金 5,500円（税込）・事務手数料 2,200円（税込）', '料金は公式の店舗ページ（2026年10月14日確認）'],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の70%）',
      purpose: ['本格的なピラティス', '姿勢改善', '体幹強化', 'ボディメイク'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 9:00〜19:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備'],
    },
  },
  {
    name: '24/7ピラティス 川崎店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=J11817X.1.B1620582.U1357808',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらで参加可能）',
    features: ['マシンピラティス', '女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオです。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供しています。川崎駅から徒歩7分です。',
    access: '川崎駅から徒歩7分',
    address: '神奈川県川崎市川崎区小川町2-7-8 昼間ビルIVY TOWER 9階',
    popularPlan: {
      name: '月4回プラン',
      description: '完全個室でマシンを使ったマンツーマン指導しています。入会金不要の月謝制です。',
      price: '月4回 27,000円〜（税込）',
    },
    options: [
      'なし',
    ],
    userProfile: {
      ageRange: '20代〜50代と幅広い',
      genderRatio: '女性専用',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '健康維持'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '年中無休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。川崎エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。インストラクターが基礎から指導するため、運動が苦手な方でも始めやすい環境です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。マットは場所を選ばず、自宅でも続けやすい点が特徴です。',
  },
  {
    question: '川崎のピラティススタジオの料金相場は？',
    answer: '川崎エリアのピラティススタジオの料金相場は、月4回で12,000円〜15,000円程度です。体験レッスンは無料〜3,000円が一般的です。プライベートレッスンは1回8,000円〜10,000円が相場となっています。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。大切なのは継続することです。無理のないペースで長く続けることが、目標達成への近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'ピラティスにはダイエット効果が期待できます。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。ただし即効性はないので、最低でも2〜3ヶ月は継続することが大切です。食事管理を並行すると、より効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的には、動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。マットやタオルは、スタジオでレンタルできる場合が一般的です。詳細は各スタジオの体験レッスン案内でご確認ください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズです。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的です。目的に合わせてお選びください。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: '改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や立ち仕事の方にもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスの効果を実感し始めるのは、2ヶ月を過ぎた頃が目安とされています。すぐに変化が表れなくても、最低2ヶ月は継続することをおすすめします。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれに利点があります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめです。グループは料金を抑えやすく、ほかの参加者と一緒に続けられる点が利点です。まずは体験レッスンで両方を試すことをおすすめします。',
  },
]

export default function KawasakiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '川崎', url: 'https://biyori-pilates.com/area/kawasaki/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス川崎おすすめ8選<br className="hidden md:block" />
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
              <span className="text-warm-600">川崎</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="川崎" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、川崎エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>川崎でピラティススタジオを探している</span>
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
                  <span>東京・横浜へのアクセスも良いスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="川崎" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              川崎のおすすめピラティススタジオ8選
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
              川崎のピラティス料金相場
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
                    <td className="px-4 py-3">8,800円〜19,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 13,200円〜39,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜5,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              川崎エリアは都心部と比較してテナント賃料が抑えめのため、同じ内容のレッスンでも料金がリーズナブルな傾向があります。通い放題プランの割安感が大きいエリアのため、週2回以上通える方には月額制プランをおすすめします。近隣の武蔵小杉エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              川崎でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">京急川崎駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  川崎エリアのスタジオは京急川崎駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにすることをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  川崎エリアは都心と比べてスタジオの選択肢が限られるため、人気のスタジオ・時間帯は予約が埋まりやすい傾向があります。特に土曜午前は混み合うことが多いので、1週間前には予約を入れておくのがおすすめです。車で通う方は駐車場の有無もご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通い放題プランと回数制プランを比較検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  川崎エリアでは、通い放題プランが都心部より割安に設定されている傾向があります。週2回以上通う場合は通い放題が割安ですが、月1〜2回のペースであれば回数券やドロップインの方が割安な場合もあります。自分の通う頻度を想定してプランをお選びください。初月は回数制で様子を見る方法もあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  川崎エリアだけでなく、近隣の<Link href="/area/musashikosugi/" className="text-warm-700 underline hover:text-warm-900">武蔵小杉</Link>、<Link href="/area/kamata/" className="text-warm-700 underline hover:text-warm-900">蒲田</Link>、<Link href="/area/yokohama/" className="text-warm-700 underline hover:text-warm-900">横浜</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>川崎エリアの豆知識：</strong>川崎エリアは車で通う方も多いため、駐車場の有無や提携コインパーキングを事前にご確認ください。車なら荷物の心配が少ないので、シャワー後の着替えやヘアドライヤーなども余裕を持って準備できます。
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
                  月額12,000円以下で通える格安スタジオです。体験レッスン無料のスタジオも多数あります。費用を抑えたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 川崎</li>
                  <li className="text-warm-700">• TSUTAYA Conditioning PILATES</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備しています。マシンピラティスを本格的に学びたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 川崎店</li>
                  <li className="text-warm-700">• the SILK 川崎店</li>
                  <li className="text-warm-700">• Rintosull 川崎店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  川崎駅から徒歩3分以内です。買い物ついでに通える好立地です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• TSUTAYA Conditioning PILATES（駅徒歩1分）</li>
                  <li className="text-warm-700">• ピラティスK 川崎店（駅徒歩2分）</li>
                  <li className="text-warm-700">• the SILK 川崎店（駅徒歩2分）</li>
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
                週1〜2回（月4〜8回）からスタートするのがおすすめです。まずは身体を慣らすことが大切です。継続期間は最低でも2〜3ヶ月です。この期間で効果を実感される方が多くみられます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回（月8〜12回）がおすすめです。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3〜6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめです。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切です。無理のないペースで通うことが大切です。
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
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。初心者向けの基本的なレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオです。ピラティスK と the SILK 川崎店はグループレッスンのみ、TSUTAYA Conditioning PILATES は女性専用の少人数制レッスンです（各公式サイト・2026年10月確認）。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK</li>
                  <li>• the SILK</li>
                  <li>• TSUTAYA Conditioning</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスンです。短期集中で成果を目指したい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUZIO ONCE（1回8,800円〜）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にすることをおすすめします。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的を明確にしておくと、スタジオを選びやすくなります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  川崎エリアの料金相場は月4回で12,000円〜15,000円程度です。無理なく継続できる予算を決めることをおすすめします。料金だけでなく、入会金やマット・ウェアのレンタル料などもご確認ください。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。多くのスタジオが無料〜1,000円程度で体験レッスンを提供しているので、体験レッスンをご利用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  通いにくい場所にあるスタジオは、継続が難しくなります。川崎は東京・横浜へのアクセスも良好で、複数路線が利用できます。駅から近い場所を選ぶと、買い物ついでにも通えて便利です。
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
              本ページでは、川崎のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、川崎に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜1,000円です。<br />
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
      <ConsultantSection areaKey="kawasaki" areaName="川崎" />

      {/* g1-link-202609 */}

      <div className="my-8 bg-white border border-warm-200 p-5">

        <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>

        <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>

        <div className="flex flex-wrap gap-2">

          <Link href="/brands/the-silk-kawasaki/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">the SILK 川崎店の料金・体験を見る</Link>

        </div>

      </div>


      <RelatedAreas currentSlug="kawasaki" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
