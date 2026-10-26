import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/ochanomizu/' },
  title: '御茶ノ水のピラティス7選｜御茶ノ水駅・新御茶ノ水駅からの徒歩分と体験料金を比較【10月最新】',
  description: '御茶ノ水・新御茶ノ水・神保町のピラティススタジオ7店を、駅からの徒歩分・体験料金・営業時間・定休日・マシン/マットの別で比較。体験0円は2店、月4回9,680円〜。値は各公式サイトで2026年10月25日に確認。',
  keywords: 'ピラティス,御茶ノ水,神保町,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 本郷三丁目店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'マットグループ体験 1,000円・マシングループ体験 3,000円（初回体験キャンペーン・公式スタジオページ・2026年10月25日確認）',
    features: ['マシン完備', '初心者歓迎', '本郷三丁目駅徒歩3分', '全国150店舗他店利用'],
    description: '全国展開の大手ピラティススタジオです。本郷三丁目駅から徒歩3分の好立地です。マットピラティスからマシンピラティスまで豊富なレッスンメニューです。2015年オープンの10周年スタジオで、経験豊富なエデュケーターが在籍しています。全国150店舗が他店利用可能です。',
    access: '東京メトロ丸ノ内線「本郷三丁目駅」2番出口より徒歩3分、都営大江戸線「本郷三丁目駅」3番出口より徒歩3分、JR「御茶ノ水駅」より徒歩10分',
    address: '東京都文京区本郷3丁目32-7 東京ビル 4階',
    popularPlan: {
      name: 'フリープラン（グレード01）',
      description: 'マット・マシンどちらも受講可能な人気プランです。全国150店舗で利用可能です。',
      price: '月額 16,940円（税込）',
    },
    options: [
      'デイフリーグレード01：月額 13,552円（平日18時まで）',
      '月4グレード01：月額 10,450円',
      '月6グレード01：月額 14,520円',
      'プライベートレッスン月4：月額 38,280円〜',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      purpose: ['姿勢改善', '体幹強化', '不調改善', '健康維持'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:00 / 土日祝 7:30〜18:00',
      closed: '不定休',
      facilities: ['マットスタジオ', 'マシン（リフォーマー）', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'ピラティスK 神保町店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円',
    trial: '体験レッスン 0円（神保町店・公式店舗ページ表示・2026年10月25日確認）',
    features: ['音楽×マシン', '女性専用', '神保町駅徒歩2分', 'ボディメイク特化'],
    description: '音楽に合わせて楽しくボディメイクを目指せます。2025年7月オープンの女性専用マシンピラティススタジオです。神保町駅から徒歩2分の新しくて綺麗なスタジオです。お腹、お尻、二の腕、脚、背中の部位に特化した17種類のプログラムが充実しています。',
    access: '「神保町駅」より徒歩2分、「新御茶ノ水駅」より徒歩7分、「御茶ノ水駅」より徒歩7分',
    address: '東京都千代田区神田神保町1-4 クロサワビル4階',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回レッスンです。音楽×マシンピラティスで楽しくボディメイクを目指せます。施設維持費別途825円/月です。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー：月額 16,170円',
      'マンスリーデイメンバー：月額 14,520円（平日10-15時・2026年5月1日以降は新規受付停止と公式に記載）',
      'マンスリープレミアムメンバー：月額 18,920円（毎日2レッスン）',
      '追加受講：1回 2,200円',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '楽しく痩せたい', 'ストレス発散', '部位痩せ'],
    },
    basicInfo: {
      hours: '火・金 10:00-15:00/17:30-22:00、水 10:00-14:00/17:30-22:00、木 17:30-22:00、土祝 10:00-18:30、日 10:00-17:30',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', 'ロッカー', '更衣室', '女性専用'],
    },
  },
  {
    name: 'YARD 御茶ノ水スタジオ',
    image: '/images/studios/yard.webp',
    price: '月4回 9,680円〜（入会金8,800円・登録料2,200円別）',
    trial: '体験レッスン 0円（グループ1回・公式表示・2026年10月25日確認）',
    features: ['ヨガ＆ピラティス', 'お洒落空間', '淡路町駅徒歩1分', '初心者歓迎'],
    description: 'ヨガ・ピラティス専門スタジオです。淡路町駅・小川町駅から徒歩1分の好アクセスです。モノトーン×ピンクのお洒落なインテリアです。ヨガ、ピラティス、エアフローヨガ、ホイールヨガなど多彩なプログラムです。会員の7割以上が初心者から始めることをおすすめします。',
    access: '東京メトロ丸ノ内線「淡路町駅」A2出口より徒歩1分、都営新宿線「小川町駅」A2出口より徒歩1分、東京メトロ千代田線「新御茶ノ水駅」A6出口より徒歩3分、JR中央線「御茶ノ水駅」聖橋口より徒歩10分',
    address: '東京都千代田区神田須田町1丁目4-1 日宝須田町ビルB1F',
    popularPlan: {
      name: 'フリープラン',
      description: 'MASTERコース（使い放題・1日最大3本まで）です。全店相互利用可能です。',
      price: '月会費 18,480円（公式料金ページ・2026年10月25日確認）',
    },
    options: [
      '月4回コース：月会費 9,680円（未消化1回は翌月繰越）',
      '月8回コース：月会費 13,860円（未消化2回は翌月繰越）',
      '追加レッスン：1回 +2,420円（月4回・月8回会員）',
      '体験レッスン：0円（グループレッスン1回）',
      '全店相互利用（追加料金なし）',
    ],
    userProfile: {
      ageRange: '20代〜50代まで幅広い',
      purpose: ['ヨガ＆ピラティス', 'リフレッシュ', '柔軟性向上', 'ストレス解消'],
    },
    basicInfo: {
      hours: '平日 9:30〜22:00 / 土日 8:15〜17:00 / 祝日 8:15〜15:00',
      closed: '水曜日ほか（事前告知）',
      facilities: ['マットスタジオ', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'zen place pilates 神保町店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'マットグループ体験 1,000円・マシングループ体験 3,000円（初回体験キャンペーン・公式スタジオページ・2026年10月25日確認）',
    features: ['マシン完備', '神保町駅徒歩1分', '全国他店利用', '男性利用可'],
    description: 'zen placeの神保町スタジオです。神保町駅A7出口から徒歩1分の好立地です。マットグループ、マシングループ、プライベートレッスンに対応しています。全国150店舗が他店利用可能で、ライフスタイルに合わせて自由に通えます。',
    access: '都営地下鉄三田線・新宿線・東京メトロ半蔵門線「神保町駅」A7出口より徒歩1分',
    address: '東京都千代田区神田神保町1-13-2 文銭堂ビル4F',
    popularPlan: {
      name: 'フリープラン（グレード01）',
      description: 'マット・マシン通い放題です。全国150店舗で利用可能です。',
      price: '月額 16,940円（税込）',
    },
    options: [
      '月4グレード01：月額 10,450円',
      'デイフリー：月額 13,552円（平日18時まで）',
      'プライベート月4：月額 38,280円〜',
    ],
    userProfile: {
      ageRange: '20代〜60代',
      purpose: ['姿勢改善', '体幹強化', '不調改善'],
    },
    basicInfo: {
      hours: '平日 8:55〜22:00 / 土日祝 8:00〜20:00',
      closed: '不定休',
      facilities: ['マットスタジオ', 'リフォーマー', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'rcu リチュ 御茶ノ水',
    image: '/images/studios/rcu-ochanomizu.webp',
    price: 'フリータイム 月額 9,600円 / 4回券 12,000円（入会金5,000円別）',
    trial: '好きなクラス1回 2,000円（キャンペーン）/ プライベートピラティス60分 初回 7,000円（公式料金ページ・2026年10月25日確認）',
    features: ['常温ヨガ＆ピラティス', 'プライベートピラティス', '御茶ノ水駅徒歩4分', '森の景色'],
    description: 'ヒノキの床が気持ちいいナチュラルな常温スタジオです。御茶ノ水駅から徒歩4分です。窓からは森の景色が広がり、四季折々の自然を感じながらヨガ・ピラティスができます。常温ヨガ・ピラティスのグループと、プライベートピラティス（60分・1回9,500円／初回7,000円）があります。公式の御茶ノ水スタジオのスケジュール・料金ページにはマシンピラティスのクラスと料金の掲載がありません（2026年10月26日確認）。',
    access: 'JR御茶ノ水駅より徒歩4分、秋葉原駅より9分、千代田線新御茶ノ水駅より徒歩5分、丸ノ内線御茶ノ水駅より徒歩6分',
    address: '東京都千代田区外神田2-17-2 延寿お茶の水ビル302',
    popularPlan: {
      name: 'マンスリー会員',
      description: '常温ヨガ・ピラティスのクラスが全日受け放題のフリータイム会員です（カード月額引き落とし）。',
      price: '月額 9,600円（公式料金ページ・2026年10月25日確認）',
    },
    options: [
      '4回券：12,000円（有効2ヶ月）',
      '1回券：3,800円（非会員 4,400円）',
      'プライベートピラティス60分：1回 9,500円 / 3回券 24,300円',
      '体験日に入会＋チケット購入（またはマンスリー申込）で入会金5,000円が無料',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      purpose: ['リラックス', '自然を感じる', 'ヨガ＆ピラティス'],
    },
    basicInfo: {
      hours: '平日 9:30〜20:00 / 土日祝 9:00〜17:00',
      closed: '月曜定休',
      facilities: ['ヒノキ床スタジオ', 'マシンピラティス', 'ロッカー'],
    },
  },
  {
    name: 'PILATES STUDIO ZERO 神保町店',
    image: '/images/studios/pilates-zero-jimbocho.webp',
    price: '月4回 37,200円〜',
    trial: '体験レッスン 40分 4,400円（2026年10月のキャンペーン: 体験当日入会で体験料と入会金22,000円が無料・予告なく終了の場合あり）',
    features: ['完全プライベート', 'マシンピラティス', '神保町駅近', 'パーソナル専門'],
    description: 'マシンピラティスパーソナル専門スタジオです。神保町駅から徒歩圏内です。完全プライベートレッスンで一人ひとりに合わせたオーダーメイドプログラムです。1セッション40分、ミネラルウォーター付きです。体験当日入会で体験料・入会金無料です。',
    access: '「神保町駅」A5出口より徒歩2分（公式アクセスページ・2026年10月25日確認）',
    address: '東京都千代田区神田神保町1-16-3 TSI神保町ビル1F・B1',
    popularPlan: {
      name: '月4回プラン',
      description: 'パーソナルマシンピラティスです。1回40分×月4回です。',
      price: '月額 37,200円（税込）/ 1回あたり9,300円',
    },
    options: [
      '月3回プラン：月額 28,500円',
      '月6回プラン：月額 54,000円',
      '月8回プラン：月額 69,600円',
      '回数券10回：100,000円（体験当日購入で10%オフの90,000円）',
      '回数券30回：270,000円（体験当日購入で20%オフの216,000円＋ソックス進呈）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      purpose: ['体の不調改善', 'パーソナル指導', '姿勢矯正', '慢性痛改善'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 9:00〜19:00（予約制）',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'プライベート空間', 'ロッカー'],
    },
  },
  {
    name: 'Z&Z Pilates Studio 神保町店',
    image: '/images/studios/zz-pilates-jimbocho.webp',
    price: '月4回 19,900円〜',
    trial: '団体体験 4,000円 / 私教体験 8,000円',
    features: ['中国語対応', '小班＋私教', '神保町駅1分', '国際認証'],
    description: '中国語対応のピラティススタジオです。神保町駅から徒歩1分です。STOTT/BASI/PEAK国際認証インストラクター在籍です。3人小班制グループレッスンとプライベートレッスンを提供しています。マシンピラティス×ウェイトトレーニング組み合わせで理想的な身体づくりを目指せます。',
    access: '神保町駅より徒歩1分、九段下駅より2分、竹橋駅より9分、水道橋駅より8分、御茶ノ水駅より10分',
    address: '東京都千代田区神田神保町3-2-28 ACN神保町ビル3階',
    popularPlan: {
      name: '混合A（Hybrid Plan A）',
      description: '月カード：私教1回＋小班3回です。人気のミックスプランです。',
      price: '月額 24,825円（税込）',
    },
    options: [
      '混合B：月額 29,750円（私教2回＋小班2回）',
      '混合C：月額 37,900円（私教2回＋小班4回）',
      '私教月卡4次：月額 39,600円',
      '小班月卡4次：月額 19,900円',
      '入会金：11,000円（当日入会で無料）',
    ],
    userProfile: {
      ageRange: '20代〜40代の中国語話者が中心',
      purpose: ['体態矯正', '姿勢改善', '中国語でレッスン', '疼痛改善'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 10:00〜19:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '小班スタジオ', 'プライベート空間', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: '神保町駅の近くにピラティススタジオはありますか？',
    answer: 'あります。神保町駅から徒歩1〜2分圏内に「zen place pilates 神保町店」（A7出口徒歩1分・マシン完備・男性可）、「ピラティスK 神保町店」（徒歩2分・女性専用・体験0円）があり、さらに完全プライベート専門の「PILATES STUDIO ZERO 神保町店」、中国語対応の「Z&Z Pilates Studio 神保町店」など、目的別に選べるスタジオが揃っています。いずれも御茶ノ水駅からも徒歩圏内です。',
  },
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。御茶ノ水・神保町エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。YARD御茶ノ水は会員の7割が初心者スタート、zen placeも初心者歓迎なので、運動が苦手な方でも安心して始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。マットは場所を選ばず、自宅でも続けやすい点が特徴です。',
  },
  {
    question: '御茶ノ水・神保町のピラティススタジオの料金相場は？',
    answer: '御茶ノ水・神保町エリアの料金相場は、グループレッスンで月4回9,680円〜19,900円程度です。パーソナルレッスンは1回あたり9,300円〜（PILATES STUDIO ZERO 月4回 37,200円）が目安です。体験レッスンはピラティスK神保町店とYARD御茶ノ水が0円、zen placeはマットグループの初回体験キャンペーン1,000円です（2026年10月25日確認）。',
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
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズです。ヨガは柔軟性と精神的なリラックスを重視します。御茶ノ水エリアではYARDやrcu リチュなど、ヨガとピラティス両方を提供しているスタジオもあるので、目的に合わせてお選びください。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: '改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や学生の方にもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスの効果を実感し始めるのは、2ヶ月を過ぎた頃が目安とされています。すぐに変化が表れなくても、最低2ヶ月は継続することをおすすめします。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれに利点があります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめです。グループは料金を抑えやすく、ほかの参加者と一緒に続けられる点が利点です。御茶ノ水エリアではPILATES STUDIO ZEROがパーソナル専門、zen placeやピラティスKがグループ中心です。まずは体験レッスンで両方を試すことをおすすめします。',
  },
]

export default function OchanomizuPage() {
  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: '御茶ノ水・神保町のピラティススタジオ',
            description: '御茶ノ水・神保町エリアのおすすめピラティススタジオ一覧',
            numberOfItems: studios.length,
            itemListElement: [...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'LocalBusiness',
                name: studio.name,
                description: studio.description,
                address: studio.address,
              },
            })),
          }),
        }}
      />
      <FAQSchema faqs={faqs} />

      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '御茶ノ水', url: 'https://biyori-pilates.com/area/ochanomizu/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月25日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              御茶ノ水のピラティススタジオおすすめ7選<br className="hidden md:block" />
              神保町・新御茶ノ水も駅からの徒歩分で比較
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
              <span className="text-warm-600">御茶ノ水・神保町</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="御茶ノ水・神保町" />


        <TableOfContents areaName="御茶ノ水・神保町" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、JR中央線・総武線御茶ノ水駅や東京メトロ丸ノ内線・千代田線が利用できる御茶ノ水・神保町エリアでおすすめのピラティススタジオ7選をまとめました。千代田区・神田の学生の街・楽器街としても知られるこのエリアは、複数路線が交差する好アクセスな立地です。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>御茶ノ水・神保町でピラティススタジオを探している</span>
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
                  <span>JR中央線・総武線や丸ノ内線・千代田線で通いやすいスタジオがいい</span>
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

        <section className="py-12 bg-white" id="by-station"><div className="max-w-5xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">御茶ノ水駅・新御茶ノ水駅からの徒歩分で比べる早見表</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">「御茶ノ水 ピラティス」で探す方向けに、掲載7店を御茶ノ水駅・新御茶ノ水駅から近い順に並べました。徒歩分・住所・体験料金・営業時間・定休日は各スタジオの公式サイトの表記です（2026年10月25日確認・公式に記載がない項目は「記載なし」）。御茶ノ水・新御茶ノ水駅から徒歩5分以内は YARD と rcu リチュの2店、神保町駅から徒歩2分以内は4店です。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ（住所）</th><th className="px-4 py-3 text-left">御茶ノ水・新御茶ノ水駅から</th><th className="px-4 py-3 text-left">ほかの最寄駅</th><th className="px-4 py-3 text-left">形式（マシン/マット）</th><th className="px-4 py-3 text-left">体験</th><th className="px-4 py-3 text-left">営業時間</th><th className="px-4 py-3 text-left">定休日</th></tr></thead><tbody>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">YARD 御茶ノ水スタジオ（神田須田町1-4-1 日宝須田町ビルB1F）</td><td className="px-4 py-3">新御茶ノ水駅 A6出口 徒歩3分／JR御茶ノ水駅 聖橋口 徒歩10分</td><td className="px-4 py-3">淡路町駅 A2出口・小川町駅 A2出口 徒歩1分</td><td className="px-4 py-3">ヨガ・ピラティスのグループ（マシンの記載なし）</td><td className="px-4 py-3">0円（グループ1回）</td><td className="px-4 py-3">平日 9:30〜22:00／土日 8:15〜17:00／祝 8:15〜15:00</td><td className="px-4 py-3">水曜日ほか（事前告知）</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">rcu リチュ 御茶ノ水（外神田2-17-2 延寿お茶の水ビル302）</td><td className="px-4 py-3">JR御茶ノ水駅 徒歩4分</td><td className="px-4 py-3">JR秋葉原駅 徒歩9分</td><td className="px-4 py-3">常温ヨガ・ピラティスのグループ／プライベートピラティス</td><td className="px-4 py-3">好きなクラス 2,000円（キャンペーン）／プライベート60分 初回 7,000円</td><td className="px-4 py-3">記載なし</td><td className="px-4 py-3">記載なし（公式スケジュールは火〜日のみ）</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">ピラティスK 神保町店（神田神保町1-4 クロサワビル4階）</td><td className="px-4 py-3">御茶ノ水駅・新御茶ノ水駅 徒歩7分</td><td className="px-4 py-3">神保町駅 徒歩2分</td><td className="px-4 py-3">マシンのグループ（女性専用）</td><td className="px-4 py-3">0円</td><td className="px-4 py-3">火・金 10:00〜15:00／17:30〜22:00、水 10:00〜14:00／17:30〜22:00、木 17:30〜22:00、土祝 10:00〜18:30、日 10:00〜17:30</td><td className="px-4 py-3">月曜日</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">zen place pilates 本郷三丁目店（文京区本郷3-32-7 東京ビル4階）</td><td className="px-4 py-3">JR御茶ノ水駅 徒歩10分</td><td className="px-4 py-3">本郷三丁目駅（丸ノ内線2番出口・大江戸線3番出口）徒歩3分</td><td className="px-4 py-3">マットグループ・マシングループ・プライベート</td><td className="px-4 py-3">マット 1,000円／マシン 3,000円（初回体験キャンペーン）</td><td className="px-4 py-3">平日 9:30〜21:00／土日祝 7:30〜18:00</td><td className="px-4 py-3">記載なし</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">Z&amp;Z Pilates Studio 神保町店（神田神保町3-2-28 ACN神保町ビル3階）</td><td className="px-4 py-3">御茶ノ水駅 10分</td><td className="px-4 py-3">神保町駅 1分・九段下駅 2分</td><td className="px-4 py-3">マシンの少人数グループ（最大3人）・プライベート</td><td className="px-4 py-3">グループ 4,000円（50分）／プライベート 8,000円（60分）</td><td className="px-4 py-3">平日 9:00〜22:00／土日祝 10:00〜19:00</td><td className="px-4 py-3">記載なし</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">zen place pilates 神保町店（神田神保町1-13-2 文銭堂ビル4階）</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">神保町駅 A7出口 徒歩1分</td><td className="px-4 py-3">マットグループ・マシングループ・プライベート</td><td className="px-4 py-3">マット 1,000円／マシン 3,000円（初回体験キャンペーン）</td><td className="px-4 py-3">平日 8:55〜22:00／土日祝 8:00〜20:00</td><td className="px-4 py-3">記載なし</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">PILATES STUDIO ZERO 神保町店（神田神保町1-16-3 TSI神保町ビル1F・B1）</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">神保町駅 A5出口 徒歩2分</td><td className="px-4 py-3">マシンの完全プライベート（40分）</td><td className="px-4 py-3">4,400円（10月は体験当日入会で無料）</td><td className="px-4 py-3">平日 9:00〜22:00／土日祝 9:00〜19:00</td><td className="px-4 py-3">記載なし</td></tr>
        </tbody></table></div><p className="text-warm-600 leading-relaxed mt-4 text-sm">JR御茶ノ水駅（聖橋口側）から歩いて通うなら rcu リチュ、千代田線の新御茶ノ水駅や丸ノ内線の淡路町駅を使うなら YARD が近く、どちらもヨガとピラティスを同じ会員で受けられます。マシンのグループレッスンを受けたい場合は、御茶ノ水駅から徒歩7分のピラティスK（女性専用・体験0円）か、神保町駅すぐの zen place 神保町店が候補です。マンツーマンのマシンピラティスなら PILATES STUDIO ZERO（月4回 37,200円）と Z&amp;Z Pilates Studio（プライベート月4回 39,600円）を比べてみてください。</p><p className="text-warm-500 text-xs mt-3 leading-relaxed">確認した公式ページ: <a href="https://yard-yp.com/studio/ochanomizu/" className="underline" target="_blank" rel="noopener noreferrer">YARD 御茶ノ水スタジオ</a>／<a href="http://www.yoga-rcu.com/contents/schedule/ochanomizu/" className="underline" target="_blank" rel="noopener noreferrer">rcu 御茶ノ水 スケジュール・料金</a>／<a href="https://pilates-k.jp/studio/tokyo/jimbocho" className="underline" target="_blank" rel="noopener noreferrer">ピラティスK 神保町店</a>／<a href="https://www.zenplace.co.jp/studios/pilates-hongo" className="underline" target="_blank" rel="noopener noreferrer">zen place 本郷三丁目</a>／<a href="https://www.zenplace.co.jp/studios/pilates-jinbochou" className="underline" target="_blank" rel="noopener noreferrer">zen place 神保町</a>／<a href="https://www.zzpilates.jp/" className="underline" target="_blank" rel="noopener noreferrer">Z&amp;Z Pilates Studio</a>／<a href="https://bodyworkstudio.jp/pilates/access.html" className="underline" target="_blank" rel="noopener noreferrer">PILATES STUDIO ZERO</a>（いずれも2026年10月25日確認）</p></div></section>

        <PriceComparisonTable studios={studios} areaName="スタジオ" />
        <AreaMarketComparison studios={studios} areaName="スタジオ" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              御茶ノ水・神保町のおすすめピラティススタジオ7選
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
              御茶ノ水・神保町のピラティス料金相場（2026年10月25日確認）
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
                    <td className="px-4 py-3">9,680円（YARD）〜19,900円（Z&amp;Z 小班月4回）</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン（月4回）</td>
                    <td className="px-4 py-3">37,200円〜（1回あたり9,300円〜）</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">0円（ピラティスK・YARD）〜8,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              御茶ノ水・神保町エリアの料金は、グループレッスンとパーソナルレッスンで大きく異なります。グループは月額1万円前後から、パーソナルは1回1万円以上が目安です。まずは体験レッスンで実際のレッスン内容と料金のバランスを確認するのがおすすめです。近隣の水道橋エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="jimbocho">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">
              神保町駅周辺でピラティスを探すなら
            </h2>
            <p className="text-warm-600 leading-relaxed text-center mb-8 max-w-2xl mx-auto">
              御茶ノ水駅と神保町駅は徒歩圏内の隣接エリアで、スタジオはどちらの駅からも通える距離に集まっています。「神保町」「神保町駅」でピラティスを探している場合も、このページで比較しているスタジオがそのまま候補になります。神保町駅周辺には、女性専用・完全プライベート・多言語対応など特徴の異なるスタジオが揃っています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">神保町駅すぐのスタジオ（徒歩1〜2分）</h3>
                <p className="text-warm-600 leading-relaxed">
                  神保町駅から特に近いのは「zen place pilates 神保町店」（A7出口より徒歩1分・マシン完備・男性も利用可）と「ピラティスK 神保町店」（徒歩2分・女性専用・体験0円）です。ピラティスKは公式に新御茶ノ水駅・御茶ノ水駅から徒歩7分と記載されており、御茶ノ水方面から通う方にも便利です。最新の営業時間・体験条件は各スタジオ公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">目的で選ぶ神保町のピラティス</h3>
                <p className="text-warm-600 leading-relaxed">
                  マンツーマンでじっくり通いたい方は完全プライベート専門の「PILATES STUDIO ZERO 神保町店」、中国語での指導に対応してほしい方は国際認証インストラクター在籍の「Z&amp;Z Pilates Studio 神保町店」が選択肢になります。女性専用・グループ中心ならピラティスK、他店利用や男性も可の通いやすさならzen placeと、目的に合わせて比較するのがおすすめです。
                </p>
              </div>
            </div>
            <p className="text-center mt-8">
              <a href="#studios" className="inline-block bg-warm-800 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-warm-900 transition">御茶ノ水・神保町のスタジオを料金で比較する</a>
            </p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              御茶ノ水・神保町でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東京メトロ丸ノ内線「本郷三丁目駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  御茶ノ水・神保町エリアのスタジオは本郷三丁目駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。本郷三丁目駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">御茶ノ水・神保町エリアの人気時間帯を把握して予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  御茶ノ水・神保町エリアでは平日夕方以降と土日午前中が予約の集中する時間帯です。特にマシンピラティスは定員が少ないため、希望の日時があれば早めの予約がおすすめです。スタジオによってはキャンセル待ち機能やLINE通知で空き枠をお知らせしてくれるところもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  御茶ノ水・神保町エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかをご確認ください。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため、事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  御茶ノ水・神保町エリアだけでなく、近隣の<Link href="/area/suidobashi/" className="text-warm-700 underline hover:text-warm-900">水道橋</Link>、<Link href="/area/akihabara/" className="text-warm-700 underline hover:text-warm-900">秋葉原</Link>、<Link href="/area/korakuen/" className="text-warm-700 underline hover:text-warm-900">後楽園</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>御茶ノ水・神保町エリアの豆知識：</strong>御茶ノ水・神保町エリアのスタジオにはウェアやタオルのレンタルサービスを提供しているところもあります。手ぶらで通いたい方は、体験予約時にレンタルの有無と料金を確認しておくと安心です。
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
                  月4回9,680円から通えるスタジオです。体験レッスン0円のスタジオもあり、費用を抑えたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 本郷三丁目店（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• zen place pilates 神保町店（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• YARD 御茶ノ水スタジオ（月4回 9,680円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  リフォーマーマシンを完備しています。マシンピラティスを本格的に学びたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 本郷三丁目店</li>
                  <li className="text-warm-700">• ピラティスK 神保町店</li>
                  <li className="text-warm-700">• PILATES STUDIO ZERO 神保町店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  神保町駅・淡路町駅から徒歩1分、YARDは新御茶ノ水駅からも徒歩3分です（各公式表記）。仕事帰りや学校帰りに通いやすい好立地なスタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 神保町店（神保町駅徒歩1分）</li>
                  <li className="text-warm-700">• Z&Z Pilates Studio（神保町駅徒歩1分）</li>
                  <li className="text-warm-700">• YARD 御茶ノ水（淡路町駅徒歩1分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。大手チェーンの基本プランが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（10,450円〜）</li>
                  <li>• YARD 御茶ノ水（月4回 9,680円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜20,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオです。グループ・小班制選択可能です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK 神保町店（13,420円〜）</li>
                  <li>• zen place フリープラン（16,940円）</li>
                  <li>• Z&Z Pilates Studio（19,900円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスンです。短期集中で成果を目指したい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• PILATES STUDIO ZERO（37,200円〜）</li>
                  <li>• zen place プライベート（38,280円〜）</li>
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
                  御茶ノ水・神保町エリアの料金相場はグループで月4回9,680円〜19,900円程度です（2026年10月25日確認）。無理なく継続できる予算を決めることをおすすめします。料金だけでなく、入会金やマット・ウェアのレンタル料などもご確認ください。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK神保町店とYARD御茶ノ水は体験0円、zen placeはマットグループの初回体験キャンペーン1,000円で体験できるので、体験レッスンをご利用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  通いにくい場所にあるスタジオは、継続が難しくなります。御茶ノ水・神保町エリアはJR中央線・総武線、東京メトロ丸ノ内線・千代田線、都営三田線・新宿線が利用でき、千代田区の文教地区の中心です。神保町駅・御茶ノ水駅・淡路町駅など複数駅が利用できるので、通勤・通学ルートに合わせてスタジオを選べます。
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
              本ページでは、御茶ノ水・神保町のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、御茶ノ水・神保町に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              体験レッスンは0円（ピラティスK・YARD）から受けられます。<br />
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
              <AreaModifierSections studios={studios} areaName="御茶ノ水・神保町" />
      </main>
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 料金相場・近隣エリアと比べる</h2>
              <p className="text-warm-600 text-sm mb-4">全国の料金データや他エリアの人気スタジオも見ると、自分に合った1校が選びやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国の料金相場</Link>
                <Link href="/area/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国のエリア一覧</Link>
                <Link href="/area/hamamatsucho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">浜松町のピラティス</Link>
                <Link href="/area/akihabara/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">秋葉原のピラティス</Link>
                <Link href="/area/meguro/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">目黒のピラティス</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="ochanomizu" areaName="御茶ノ水・神保町" />

      <RelatedAreas currentSlug="ochanomizu" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
