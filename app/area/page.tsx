import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import Script from 'next/script'

export const metadata = {
  title: '地域別ピラティススタジオ｜Pilates-Biyori',
  description: '全国の主要エリアのピラティススタジオを地域別に検索。東京、大阪、名古屋、福岡など、お住まいの地域で最適なスタジオを見つけましょう。',
  keywords: 'ピラティス,スタジオ,地域別,東京,大阪,名古屋,福岡,エリア',
}

// 地域データ（将来の記事追加に備えた構造）
const regions = [
  {
    name: '北海道・東北',
    areas: [
      { name: '札幌', slug: 'sapporo', available: true },
      { name: '仙台', slug: 'sendai', available: true },
    ],
  },
  {
    name: '東京23区（山手線沿線）',
    areas: [
      { name: '新宿', slug: 'shinjuku', available: true },
      { name: '渋谷', slug: 'shibuya', available: true },
      { name: '池袋', slug: 'ikebukuro', available: true },
      { name: '東京駅', slug: 'tokyo-station', available: true },
      { name: '品川', slug: 'shinagawa', available: true },
      { name: '新橋', slug: 'shimbashi', available: true },
      { name: '有楽町', slug: 'yurakucho', available: true },
      { name: '上野', slug: 'ueno', available: true },
      { name: '秋葉原', slug: 'akihabara', available: true },
      { name: '日暮里', slug: 'nippori', available: true },
      { name: '赤羽', slug: 'akabane', available: true },
      { name: '大塚', slug: 'otsuka', available: true },
      { name: '巣鴨', slug: 'sugamo', available: true },
      { name: '高田馬場', slug: 'takadanobaba', available: true },
      { name: '田町', slug: 'tamachi', available: true },
      { name: '浜松町', slug: 'hamamatsucho', available: true },
      { name: '五反田', slug: 'gotanda', available: true },
      { name: '目黒', slug: 'meguro', available: true },
      { name: '恵比寿', slug: 'ebisu', available: true },
    ],
  },
  {
    name: '東京23区（地下鉄沿線）',
    areas: [
      { name: '銀座', slug: 'ginza', available: true },
      { name: '表参道', slug: 'omotesando', available: true },
      { name: '六本木', slug: 'roppongi', available: true },
      { name: '赤坂', slug: 'akasaka', available: true },
      { name: '永田町', slug: 'nagatacho', available: true },
      { name: '麻布十番', slug: 'azabujuban', available: true },
      { name: '白金高輪', slug: 'shirokanedai', available: true },
      { name: '大手町', slug: 'otemachi', available: true },
      { name: '丸の内', slug: 'marunouchi', available: true },
      { name: '日本橋', slug: 'nihonbashi', available: true },
      { name: '飯田橋', slug: 'iidabashi', available: true },
      { name: '神楽坂', slug: 'kagurazaka', available: true },
      { name: '水道橋', slug: 'suidobashi', available: true },
      { name: '後楽園', slug: 'korakuen', available: true },
      { name: '四ツ谷', slug: 'yotsuya', available: true },
      { name: '青山一丁目', slug: 'aoyama-itchome', available: true },
      { name: '門前仲町', slug: 'monzen-nakacho', available: true },
      { name: '錦糸町', slug: 'kinshicho', available: true },
      { name: '亀戸', slug: 'kameido', available: true },
      { name: '北千住', slug: 'kita-senju', available: true },
      { name: '西日暮里', slug: 'nishi-nippori', available: true },
      { name: '押上', slug: 'oshiage', available: true },
    ],
  },
  {
    name: '東京23区（東急・小田急・京王沿線）',
    areas: [
      { name: '中目黒', slug: 'nakameguro', available: true },
      { name: '代々木上原', slug: 'yoyogi-uehara', available: true },
      { name: '三軒茶屋', slug: 'sangenjaya', available: true },
      { name: '下北沢', slug: 'shimokitazawa', available: true },
      { name: '自由が丘', slug: 'jiyugaoka', available: true },
      { name: '二子玉川', slug: 'futakotamagawa', available: true },
      { name: '学芸大学', slug: 'gakugei-daigaku', available: true },
      { name: '都立大学', slug: 'toritsudaigaku', available: true },
      { name: '祐天寺', slug: 'yutenji', available: true },
      { name: '武蔵小山', slug: 'musashikoyama', available: true },
      { name: '代官山', slug: 'daikanyama', available: true },
      { name: '広尾', slug: 'hiroo', available: true },
      { name: '三田', slug: 'mita', available: true },
      { name: '蒲田', slug: 'kamata', available: true },
    ],
  },
  {
    name: '東京23区（中央線沿線）',
    areas: [
      { name: '中野', slug: 'nakano', available: true },
      { name: '高円寺', slug: 'koenji', available: true },
      { name: '阿佐ヶ谷', slug: 'asagaya', available: true },
      { name: '荻窪', slug: 'ogikubo', available: true },
      { name: '西荻窪', slug: 'nishi-ogikubo', available: true },
      { name: '吉祥寺', slug: 'kichijoji', available: true },
      { name: '三鷹', slug: 'mitaka', available: true },
      { name: '新大久保', slug: 'shin-okubo', available: true },
      { name: '御茶ノ水', slug: 'ochanomizu', available: true },
    ],
  },
  {
    name: '東京（その他）',
    areas: [
      { name: '東京', slug: 'tokyo', available: true },
      { name: '成城学園前', slug: 'seijo-gakuenmae', available: true },
      { name: '調布', slug: 'chofu', available: true },
      { name: '町田', slug: 'machida', available: true },
      { name: '立川', slug: 'tachikawa', available: true },
      { name: '浅草', slug: 'asakusa', available: true },
    ],
  },
  {
    name: '関東（東京以外）',
    areas: [
      { name: '横浜', slug: 'yokohama', available: true },
      { name: '川崎', slug: 'kawasaki', available: true },
      { name: '関内', slug: 'kannai', available: true },
      { name: '藤沢', slug: 'fujisawa', available: true },
      { name: '武蔵小杉', slug: 'musashikosugi', available: true },
      { name: '本厚木', slug: 'honatsugi', available: true },
      { name: '大宮', slug: 'omiya', available: true },
      { name: '千葉', slug: 'chiba', available: true },
    ],
  },
  {
    name: '中部',
    areas: [
      { name: '名古屋', slug: 'nagoya', available: true },
      { name: '名古屋駅', slug: 'nagoya-station', available: true },
      { name: '栄', slug: 'sakae', available: true },
      { name: '静岡', slug: 'shizuoka', available: true },
      { name: '新潟', slug: 'niigata', available: true },
    ],
  },
  {
    name: '近畿',
    areas: [
      { name: '大阪', slug: 'osaka', available: true },
      { name: '梅田', slug: 'umeda', available: true },
      { name: 'なんば', slug: 'namba', available: true },
      { name: '心斎橋', slug: 'shinsaibashi', available: true },
      { name: '天王寺', slug: 'tennoji', available: true },
      { name: '本町', slug: 'honmachi', available: true },
      { name: '江坂', slug: 'esaka', available: true },
      { name: '京都', slug: 'kyoto', available: true },
      { name: '京都駅', slug: 'kyoto-station', available: true },
      { name: '烏丸御池', slug: 'karasuma-oike', available: true },
      { name: '四条河原町', slug: 'shijo-kawaramachi', available: true },
      { name: '京都市役所前', slug: 'kyoto-shiyakusho-mae', available: true },
      { name: '北大路', slug: 'kitaoji', available: true },
      { name: '祇園四条', slug: 'gion-shijo', available: true },
      { name: '神戸', slug: 'kobe', available: true },
    ],
  },
  {
    name: '中国・四国',
    areas: [
      { name: '広島', slug: 'hiroshima', available: true },
      { name: '岡山', slug: 'okayama', available: true },
    ],
  },
  {
    name: '九州・沖縄',
    areas: [
      { name: '福岡', slug: 'fukuoka', available: true },
      { name: '天神', slug: 'tenjin', available: true },
      { name: '博多', slug: 'hakata', available: true },
      { name: '薬院', slug: 'yakuin', available: true },
      { name: '西新', slug: 'nishijin', available: true },
      { name: '小倉', slug: 'kokura', available: true },
      { name: '熊本', slug: 'kumamoto', available: true },
      { name: '沖縄', slug: 'okinawa', available: true },
    ],
  },
]

export default function AreaPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-warm-400 text-xs uppercase tracking-[0.2em] font-medium mb-4">Popular Area</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-warm-900 tracking-tight mb-6">
              地域別スタジオ検索
            </h1>
            <p className="text-warm-600 leading-relaxed font-light max-w-2xl mx-auto">
              お住まいの地域で最適なピラティススタジオを見つけましょう。全国の主要エリアのスタジオ情報を随時更新中です。
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-4 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">地域別</span>
            </nav>
          </div>
        </section>

        {/* Region List */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {regions.map((region) => (
              <div key={region.name} className="mb-12">
                <h2 className="text-xl font-medium text-warm-800 mb-6 pb-3 border-b border-warm-200">
                  {region.name}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {region.areas.map((area) => (
                    <div key={area.slug}>
                      {area.available ? (
                        <Link
                          href={`/area/${area.slug}`}
                          className="block border border-warm-200 p-4 text-center hover:border-warm-400 transition-colors card-hover bg-warm-50"
                        >
                          <span className="text-sm font-medium text-warm-800 hover:text-warm-600 transition-colors">
                            {area.name}
                          </span>
                        </Link>
                      ) : (
                        <div className="border border-warm-100 p-4 text-center bg-warm-50 opacity-50 cursor-not-allowed">
                          <span className="text-sm font-medium text-warm-400">
                            {area.name}
                          </span>
                          <p className="text-[10px] text-warm-300 mt-1">準備中</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-20 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-warm-900 mb-4 tracking-tight">
              地域別記事は随時追加中です
            </h2>
            <p className="text-warm-600 mb-8 font-light leading-relaxed">
              お住まいの地域のピラティススタジオ情報は、準備でき次第順次公開していきます。<br />
              現在は、全国共通のスタジオ選び情報をご覧ください。
            </p>
            <Link 
              href="/studios" 
              className="inline-block bg-warm-800 text-white px-10 py-4 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-900 transition-all"
            >
              スタジオ選びガイドを見る
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
