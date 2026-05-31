#!/usr/bin/env python3
"""
Enrich 61 MVP area pages with the rich Sapporo-style structure.
Pulls studio data from data/area-studios.ts (no changes there).
"""
import os
import re
import json
from pathlib import Path

PROJECT_ROOT = Path("/Users/takashi.hasegawa/projects/pilates-biyori")
AREA_DIR = PROJECT_ROOT / "app" / "area"
DATA_TS = PROJECT_ROOT / "data" / "area-studios.ts"

# --- 61 target slugs (URL slug) and their area-studios.ts key ---
# (URL slug, area-studios.ts key, 日本語名, 主要駅, 特徴, 都道府県)
AREA_INFO = {
    # 第1弾（10エリア）
    "aomori":       ("aomori",       "青森",     "JR青森駅",         "青森県の県庁所在地。新青森・青森駅を中心に医療系専門スタジオが少しずつ増加中。",                 "青森県"),
    "hirosaki":     ("hirosaki",     "弘前",     "JR弘前駅",         "津軽の中心都市。城下町の歴史と現代スタジオが共存する文化エリア。",                                 "青森県"),
    "hachinohe":    ("hachinohe",    "八戸",     "JR本八戸駅",       "青森県南部の工業・港湾都市。本八戸駅周辺に新スタジオが集積中。",                                   "青森県"),
    "morioka":      ("morioka",      "盛岡",     "JR盛岡駅",         "岩手県の県庁所在地。盛岡駅周辺と菜園エリアにスタジオが集中。",                                     "岩手県"),
    "akita":        ("akita",        "秋田",     "JR秋田駅",         "秋田県の県庁所在地。秋田駅周辺と山王エリアにマシン専門スタジオが点在。",                           "秋田県"),
    "yamagata":     ("yamagata",     "山形",     "JR山形駅",         "山形県の県庁所在地。山形駅・霞城公園周辺にスタジオが集中。",                                       "山形県"),
    "fukushima":    ("fukushima",    "福島",     "JR福島駅",         "福島県の県庁所在地。福島駅と東口エリアを中心に展開。",                                             "福島県"),
    "utsunomiya":   ("utsunomiya",   "宇都宮",   "JR宇都宮駅",       "栃木県の県庁所在地。LRT沿線とオリオン通り周辺にスタジオが集積。",                                 "栃木県"),
    "takasaki":     ("takasaki",     "高崎",     "JR高崎駅",         "群馬県有数の交通拠点。新幹線停車駅で前橋方面からの利用者も多い。",                                 "群馬県"),
    "kofu":         ("kofu",         "甲府",     "JR甲府駅",         "山梨県の県庁所在地。甲府駅周辺と中央エリアにスタジオが点在。",                                     "山梨県"),

    # 第2弾（51エリア）
    "chigasaki":    ("chigasaki",    "茅ヶ崎",   "JR茅ヶ崎駅",       "湘南エリアの海沿いリゾート気分でピラティスが楽しめる神奈川エリア。",                               "神奈川県"),
    "hiratsuka":    ("hiratsuka",    "平塚",     "JR平塚駅",         "湘南北部の中心都市。平塚駅周辺は東海道線沿線でアクセス良好。",                                     "神奈川県"),
    "ebina":        ("ebina",        "海老名",   "小田急海老名駅",   "ららぽーと海老名で発展した相鉄・小田急・JRの3線が乗り入れる交通拠点。",                           "神奈川県"),
    "yokosuka":     ("yokosuka",     "横須賀",   "京急横須賀中央駅", "三浦半島の中心都市。横須賀中央駅周辺に女性向けスタジオが増加中。",                                 "神奈川県"),
    "matsudo":      ("matsudo",      "松戸",     "JR松戸駅",         "千葉県北西部のJR・新京成の交通結節点。常磐線沿線で都心通勤者も多い。",                            "千葉県"),
    "ichikawa":     ("ichikawa",     "市川",     "JR市川駅",         "千葉県北西部、東京メトロ東西線も乗り入れる住宅都市。",                                             "千葉県"),
    "nagareyama":   ("nagareyama",   "流山",     "つくばエクスプレス流山おおたかの森駅", "つくばエクスプレス開業で人口急増中の千葉県北西部の人気エリア。",        "千葉県"),
    "yachiyo":      ("yachiyo",      "八千代",   "東葉高速線八千代中央駅", "千葉県北西部の住宅都市。八千代中央駅・八千代台駅周辺で展開。",                              "千葉県"),
    "ageo":         ("ageo",         "上尾",     "JR上尾駅",         "埼玉県中部のJR高崎線沿線、ベッドタウンとして発展。",                                               "埼玉県"),
    "wako":         ("wakoshi",      "和光市",   "東武東上線和光市駅", "東京都練馬区に隣接、東武東上線・東京メトロ有楽町・副都心線の3線利用可。",                       "埼玉県"),
    "musashi-urawa":("musashiurawa", "武蔵浦和", "JR武蔵浦和駅",     "JR埼京線と武蔵野線の交点、再開発で発展した埼玉のベッドタウン。",                                   "埼玉県"),
    "honkawagoe":   ("honkawagoe",   "本川越",   "西武新宿線本川越駅", "小江戸川越の中心駅、観光と居住が共存する歴史エリア。",                                           "埼玉県"),
    "fujimino":     ("fujimino",     "ふじみ野", "東武東上線ふじみ野駅", "埼玉県南西部、東武東上線沿線の住宅都市で池袋へ直通。",                                         "埼玉県"),
    "takatsuki":    ("takatsuki",    "高槻",     "JR高槻駅",         "大阪と京都の中間、JR京都線の主要駅で通勤利便性が高い。",                                           "大阪府"),
    "toyonaka":     ("toyonaka",     "豊中",     "阪急豊中駅",       "大阪府北部の人口40万人の住宅都市、阪急宝塚線と御堂筋線が利用可。",                                 "大阪府"),
    "higashi-osaka":("higashiosaka", "東大阪",   "近鉄布施駅",       "大阪府東部のモノづくりの街、近鉄沿線にスタジオが点在。",                                           "大阪府"),
    "yao":          ("yao",          "八尾",     "近鉄八尾駅",       "大阪府中河内地域の中心都市、近鉄大阪線沿線で展開。",                                               "大阪府"),
    "neyagawa":     ("neyagawa",     "寝屋川",   "京阪寝屋川市駅",   "大阪府北河内地域、京阪本線沿線の住宅都市。",                                                       "大阪府"),
    "sanda":        ("sanda",        "三田",     "JR三田駅",         "兵庫県南東部、神戸電鉄・JR宝塚線が利用できるニュータウン。",                                       "兵庫県"),
    "kakogawa":     ("kakogawa",     "加古川",   "JR加古川駅",       "兵庫県南部、JR山陽本線沿線の中核都市。",                                                           "兵庫県"),
    "ashiya":       ("ashiya",       "芦屋",     "JR芦屋駅",         "兵庫県南東部の高級住宅地、JR・阪神・阪急が利用可能。",                                             "兵庫県"),
    "kawanishi":    ("kawanishi",    "川西",     "阪急川西能勢口駅", "兵庫県南東部、阪急宝塚線とJR福知山線が利用できる住宅都市。",                                       "兵庫県"),
    "demachiyanagi":("demachiyanagi","出町柳",   "京阪出町柳駅",     "京都市左京区、京阪・叡山電鉄の北の終点、京大エリア。",                                             "京都府"),
    "higashiyama":  ("higashiyama",  "東山",     "京阪祇園四条駅",   "京都市東山区、清水寺・八坂神社周辺の観光中心エリア。",                                             "京都府"),
    "arashiyama":   ("arashiyama",   "嵐山",     "嵐電嵐山駅",       "京都市右京区、嵐山・嵯峨野エリア、観光と居住が共存する。",                                         "京都府"),
    "kashihara":    ("kashihara",    "橿原",     "近鉄大和八木駅",   "奈良県中部、橿原神宮など歴史と近鉄交通拠点の街。",                                                 "奈良県"),
    "ikoma":        ("ikoma",        "生駒",     "近鉄生駒駅",       "奈良県北西部、大阪のベッドタウンとして発展した山手の住宅都市。",                                   "奈良県"),
    "kusatsu":      ("kusatsu",      "草津",     "JR草津駅",         "滋賀県南部、JR琵琶湖線・草津線の交点、京阪神への通勤者も多い。",                                   "滋賀県"),
    "hikone":       ("hikone",       "彦根",     "JR彦根駅",         "滋賀県東部、彦根城周辺の歴史ある城下町。",                                                         "滋賀県"),
    "omihachiman":  ("omihachiman",  "近江八幡", "JR近江八幡駅",     "滋賀県中部、JR琵琶湖線沿線の歴史と商業の街。",                                                     "滋賀県"),
    "toyota":       ("toyota",       "豊田",     "名鉄豊田市駅",     "愛知県中部、自動車産業で発展した工業都市。",                                                       "愛知県"),
    "okazaki":      ("okazaki",      "岡崎",     "名鉄東岡崎駅",     "愛知県中央部、徳川家康ゆかりの城下町で名古屋方面からのアクセス良好。",                             "愛知県"),
    "kasugai":      ("kasugai",      "春日井",   "JR春日井駅",       "愛知県北部、名古屋市の北東に位置する住宅都市。",                                                   "愛知県"),
    "kariya":       ("kariya",       "刈谷",     "JR刈谷駅",         "愛知県中部、自動車関連企業の集積する工業都市。",                                                   "愛知県"),
    "numazu":       ("numazu",       "沼津",     "JR沼津駅",         "静岡県東部、東海道線・御殿場線の交通拠点。",                                                       "静岡県"),
    "fuji":         ("fuji",         "富士",     "JR富士駅",         "静岡県東部、富士山を望む工業都市。",                                                               "静岡県"),
    "mishima":      ("mishima",      "三島",     "JR三島駅",         "静岡県東部、新幹線停車駅で東京方面への通勤も可能。",                                               "静岡県"),
    "ogaki":        ("ogaki",        "大垣",     "JR大垣駅",         "岐阜県西部、JR東海道線・養老鉄道の交通拠点。",                                                     "岐阜県"),
    "kakamigahara": ("kakamigahara", "各務原",   "名鉄新那加駅",     "岐阜県南部、岐阜市と犬山市の間の航空産業の街。",                                                   "岐阜県"),
    "tajimi":       ("tajimi",       "多治見",   "JR多治見駅",       "岐阜県南東部、美濃焼で有名な陶磁器産業の街。",                                                     "岐阜県"),
    "matsumoto":    ("matsumoto",    "松本",     "JR松本駅",         "長野県中部の信州中心都市、松本城と観光客も多い文化的エリア。",                                     "長野県"),
    "karuizawa":    ("karuizawa",    "軽井沢",   "JR軽井沢駅",       "長野県東部、避暑地・別荘地として有名な高原リゾート。",                                             "長野県"),
    "asahikawa":    ("asahikawa",    "旭川",     "JR旭川駅",         "北海道第二の都市、上川地方の中心、旭山動物園でも有名。",                                           "北海道"),
    "hakodate":     ("hakodate",     "函館",     "JR函館駅",         "北海道南部の港町、夜景と観光で有名な歴史都市。",                                                   "北海道"),
    "tomakomai":    ("tomakomai",    "苫小牧",   "JR苫小牧駅",       "北海道道央、製紙・港湾の工業都市。",                                                               "北海道"),
    "obihiro":      ("obihiro",      "帯広",     "JR帯広駅",         "北海道十勝地方の中心都市、農業と食の街。",                                                         "北海道"),
    "kurashiki":    ("kurashiki",    "倉敷",     "JR倉敷駅",         "岡山県南部、美観地区で有名な歴史ある観光都市。",                                                   "岡山県"),
    "tsuyama":      ("tsuyama",      "津山",     "JR津山駅",         "岡山県北部の中心都市、津山城跡など歴史ある城下町。",                                               "岡山県"),
    "fukuyama":     ("fukuyama",     "福山",     "JR福山駅",         "広島県東部、新幹線停車の中核市、福山城が駅近にある。",                                             "広島県"),
    "kure":         ("kure",         "呉",       "JR呉駅",           "広島県南部の港湾都市、海上自衛隊と造船の街。",                                                     "広島県"),
    "higashi-hiroshima": ("higashihiroshima", "東広島", "JR西条駅", "広島県中央部、広島大学のある学術都市、酒蔵通りで有名。",                                            "広島県"),
    "shimonoseki":  ("shimonoseki",  "下関",     "JR下関駅",         "山口県西端の本州最西端の港町、関門海峡で九州と接続。",                                             "山口県"),
    "kurume":       ("kurume",       "久留米",   "JR久留米駅",       "福岡県南部の中核市、九州新幹線停車駅でブリヂストン発祥の地。",                                     "福岡県"),
    "kasuga":       ("kasuga",       "春日",     "JR春日駅",         "福岡県中央部、福岡市の南に隣接するベッドタウン。",                                                 "福岡県"),
    "kashii":       ("kashii",       "香椎",     "JR香椎駅",         "福岡市東区の中心、JR・西鉄が利用可能な住宅・商業エリア。",                                         "福岡県"),
    "yatsushiro":   ("yatsushiro",   "八代",     "JR八代駅",         "熊本県南部、九州新幹線停車駅で県南の中心都市。",                                                   "熊本県"),
    "kirishima":    ("kirishima",    "霧島",     "JR国分駅",         "鹿児島県中央部、霧島温泉郷で有名な観光と居住の街。",                                               "鹿児島県"),
}

# Note: AREA_INFO has 67 entries but only 61 are MVP. The 6 already-rich pages
# (ebina/fujimino/kurume/matsudo/takatsuki/toyonaka) are skipped automatically
# in main() — they will not be overwritten.
assert len(AREA_INFO) == 67, f"Expected 67 area entries, got {len(AREA_INFO)}"
ALREADY_RICH_SKIP = {"ebina", "fujimino", "kurume", "matsudo", "takatsuki", "toyonaka"}


def render_studios_typescript(data_key: str, area_name: str) -> str:
    """
    Return a TS expression that imports from area-studios.ts and reads the studios.
    We import areaStudios and use it directly in the page.
    Returns nothing — we use the import directly in template.
    """
    return ""


def num_to_word(n: int) -> str:
    return str(n)


def make_faqs(area_name: str, station: str) -> list[dict]:
    return [
        {
            "question": f"{area_name}でピラティス、いくらから始められる？",
            "answer": f"{area_name}エリアの一般的な料金相場は、グループレッスンが月4回8,000円〜15,000円程度、パーソナルが1回8,000円〜12,000円程度です。多くのスタジオで体験レッスンが無料〜3,300円程度で受けられるので、まずは体験から始めるのがおすすめ。正確な料金は各スタジオ公式サイトで必ずご確認ください。"
        },
        {
            "question": f"{area_name}の駅近でおすすめのスタジオは？",
            "answer": f"{area_name}エリアでは{station}周辺にスタジオが集まっています。本記事に掲載のスタジオはいずれも駅から徒歩圏内のものを中心に紹介しています。詳しいアクセス情報は各スタジオの公式サイトでご確認ください。"
        },
        {
            "question": f"{area_name}でマシンピラティスができるスタジオは？",
            "answer": f"はい、{area_name}にもマシンピラティス（リフォーマー）対応のスタジオがあります。本記事の料金比較表で「マシン」マーク付きのスタジオが該当します。マシンピラティスは初心者でも正しいフォームで効率よくトレーニングできるのが魅力です。"
        },
        {
            "question": f"{area_name}に体験レッスン無料スタジオはある？",
            "answer": f"スタジオによって体験料金は異なります。無料体験を実施しているスタジオもあれば、1,000〜3,300円程度の有料体験のスタジオもあります。最新のキャンペーン情報は各スタジオ公式サイトで必ずご確認ください。"
        },
        {
            "question": f"{area_name}近隣のエリアは？",
            "answer": f"{area_name}周辺の都道府県内には他にもピラティススタジオがあります。本ページ下部の「関連エリア」セクションから近隣エリアの情報もご覧いただけます。複数エリアを比較して、自分に合うスタジオを見つけてみてください。"
        },
    ]


def render_faqs_ts(faqs: list[dict]) -> str:
    lines = ["const faqs = ["]
    for f in faqs:
        q = f["question"].replace("'", "\\'")
        a = f["answer"].replace("'", "\\'")
        lines.append("  {")
        lines.append(f"    question: '{q}',")
        lines.append(f"    answer: '{a}',")
        lines.append("  },")
    lines.append("]")
    return "\n".join(lines)


def page_template(slug: str, data_key: str, area_name: str, station: str, feature: str, prefecture: str) -> str:
    faqs = make_faqs(area_name, station)
    faqs_ts = render_faqs_ts(faqs)

    title = f"【2026最新】ピラティス{area_name}おすすめスタジオ｜料金プランを徹底比較！｜Pilates-Biyori"
    description = f"{area_name}（{prefecture}）のおすすめピラティススタジオを比較。{station}周辺の料金相場、マシン・パーソナル・女性専用の特徴、体験レッスン情報をまとめて掲載。"
    keywords = f"ピラティス,{area_name},{prefecture},スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較"

    return f"""import Link from 'next/link'
import {{ Navigation }} from '@/components/Navigation'
import {{ SiteFooter }} from '@/components/SiteFooter'
import {{ StudioCard }} from '@/components/StudioCard'
import {{ RelatedAreas }} from '@/components/RelatedAreas'
import {{ TableOfContents }} from '@/components/TableOfContents'
import {{ PriceComparisonTable }} from '@/components/PriceComparisonTable'
import {{ FAQSchema }} from '@/components/FAQSchema'
import {{ BreadcrumbSchema }} from '@/components/BreadcrumbSchema'
import {{ areaStudios }} from '@/data/area-studios'

export const metadata = {{
  title: '{title}',
  description: '{description}',
  keywords: '{keywords}',
}}

{faqs_ts}

export default function Page() {{
  const area = areaStudios['{data_key}']
  if (!area) return null
  const studios = area.studios

  return (
    <>
      <FAQSchema faqs={{faqs}} />
      <BreadcrumbSchema items={{[
        {{ name: 'ホーム', url: 'https://pilates-biyori.com/' }},
        {{ name: '地域別', url: 'https://pilates-biyori.com/area/' }},
        {{ name: '{area_name}', url: 'https://pilates-biyori.com/area/{slug}/' }},
      ]}} />
      <Navigation />

      <main className="pt-20 bg-white">
        {{/* Hero Section */}}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス{area_name}おすすめスタジオ<br className="hidden md:block" />
              人気スタジオの料金プランを徹底比較！
            </h1>
            <p className="text-warm-700 text-sm md:text-base leading-relaxed mt-4">
              {feature}主要駅は{station}。本ページでは{area_name}エリアで公式情報をもとに比較できるピラティススタジオをまとめました。
            </p>
          </div>
        </section>

        {{/* Breadcrumbs */}}
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {{' > '}}
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {{' > '}}
              <span className="text-warm-600">{area_name}</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="{area_name}" />

        {{/* Introduction */}}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「{area_name}でピラティスを始めたい」「{area_name}で人気のスタジオを知りたい」とお考えの方に向けて、{area_name}エリアでチェックしておきたいピラティススタジオをまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>{area_name}でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>体験レッスンが受けられるスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>{station}付近で通いやすいスタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={{studios}} areaName="{area_name}" />

        {{/* Studios List */}}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              {area_name}のおすすめピラティススタジオ
            </h2>
            <div className="space-y-8">
              {{studios.map((studio, index) => (
                <StudioCard key={{index}} studio={{studio}} index={{index}} />
              ))}}
            </div>
          </div>
        </section>

        {{/* Price Market */}}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              {area_name}のピラティス料金相場【業界一般の目安】
            </h2>
            <div className="bg-warm-50 rounded-lg p-6 md:p-8 border border-warm-200 mb-6">
              <p className="text-warm-600 leading-relaxed mb-6">
                {area_name}エリアのピラティス料金は、レッスン形態や設備によって幅があります。以下は業界一般の目安として参考にしてください。<strong>正確な料金は各スタジオの公式サイトで必ずご確認ください。</strong>
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-warm-800 text-white">
                      <th className="px-4 py-3 text-left">種別</th>
                      <th className="px-4 py-3 text-left">料金相場の目安</th>
                      <th className="px-4 py-3 text-left">特徴</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-warm-200">
                      <td className="px-4 py-3 font-medium">グループレッスン（月4回）</td>
                      <td className="px-4 py-3">8,000円〜15,000円</td>
                      <td className="px-4 py-3 text-warm-600">マット中心。仲間と楽しく続けたい方に。</td>
                    </tr>
                    <tr className="border-b border-warm-200 bg-warm-50">
                      <td className="px-4 py-3 font-medium">マシンピラティス（月4回）</td>
                      <td className="px-4 py-3">12,000円〜18,000円</td>
                      <td className="px-4 py-3 text-warm-600">リフォーマー等を使用。正しいフォーム習得に。</td>
                    </tr>
                    <tr className="border-b border-warm-200">
                      <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                      <td className="px-4 py-3">1回 8,000円〜12,000円</td>
                      <td className="px-4 py-3 text-warm-600">マンツーマンで集中指導。短期で結果を出したい方に。</td>
                    </tr>
                    <tr className="border-b border-warm-200">
                      <td className="px-4 py-3 font-medium">体験レッスン</td>
                      <td className="px-4 py-3">無料〜3,300円</td>
                      <td className="px-4 py-3 text-warm-600">スタジオごとに料金は異なる。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-warm-500 text-xs mt-4">※ 上記は業界一般の目安です。実際の料金・キャンペーンは各スタジオ公式サイトで必ずご確認ください。</p>
            </div>
          </div>
        </section>

        {{/* How to Choose */}}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              {area_name}でピラティススタジオを選ぶポイント
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-lg font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">ダイエット・姿勢改善・体幹強化・肩こり腰痛改善など、目的に応じて最適なスタジオは変わります。{area_name}エリアにもマシン専門・女性専用・パーソナル特化など特徴の異なるスタジオがあるので、目的を整理してから選ぶのがおすすめです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-lg font-bold text-warm-900">通いやすさを最優先に</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">{area_name}では{station}周辺にスタジオが集中しています。「駅から徒歩何分か」「自宅・職場からのアクセス」「営業時間が自分のライフスタイルに合うか」を必ず確認しましょう。継続のしやすさが効果を大きく左右します。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-lg font-bold text-warm-900">体験レッスンで実際に確認</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">公式サイトの情報だけでなく、必ず体験レッスンに行ってスタジオの雰囲気・インストラクターとの相性・設備の清潔感を確認しましょう。複数スタジオで体験して比較するのが失敗しないコツです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-lg font-bold text-warm-900">料金プランの内訳を確認</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">月会費だけでなく、入会金・施設利用料・ウェアレンタル代などの追加費用も含めて比較しましょう。{area_name}でも入会金無料キャンペーンを実施するスタジオがあるので、タイミングを見計らうのも有効です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-3">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                  <h3 className="text-lg font-bold text-warm-900">マシンorマットを選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">初心者はマシンピラティス（リフォーマー）の方が正しいフォームを習得しやすいと言われています。マットは自重トレーニング中心で道具不要なため、自宅でも続けられます。目的に応じて選びましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {{/* Access Guide */}}
        <section className="py-16 bg-white" id="access">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              {area_name}のアクセス・通勤導線
            </h2>
            <div className="bg-warm-50 rounded-lg p-6 md:p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">主要駅</h3>
                  <p className="text-warm-700">{station}</p>
                  <p className="text-warm-500 text-xs mt-2">本ページのスタジオはこの駅周辺を中心に掲載しています。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">エリアの特徴</h3>
                  <p className="text-warm-700 text-sm leading-relaxed">{feature}</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">徒歩・電車でのアクセス</h3>
                  <p className="text-warm-700 text-sm leading-relaxed">{station}周辺は徒歩圏内にスタジオが集まっています。仕事帰りや買い物のついでに通いやすいのが魅力です。詳しいアクセス情報は各スタジオの公式サイトでご確認ください。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">車でのアクセス</h3>
                  <p className="text-warm-700 text-sm leading-relaxed">スタジオによっては駐車場が併設されていない場合もあります。車での来店を予定している方は、事前に駐車場の有無をスタジオに確認しておくと安心です。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {{/* FAQ */}}
        <section className="py-16 bg-warm-50" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              {area_name}のピラティスに関するよくある質問
            </h2>
            <div className="space-y-4">
              {{faqs.map((faq, index) => (
                <div key={{index}} className="border border-warm-200 rounded-lg overflow-hidden bg-white">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{{index + 1}}】{{faq.question}}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">
                      {{faq.answer}}
                    </div>
                  </details>
                </div>
              ))}}
            </div>
          </div>
        </section>

        {{/* Summary */}}
        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は{area_name}（{prefecture}）のおすすめピラティススタジオをご紹介しました。{area_name}エリアにはマシンピラティス専門・パーソナル・女性専用など、特徴の異なる選択肢があります。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              料金や設備はスタジオによって異なります。気になるスタジオがあれば、まずは公式サイトで最新情報をチェックし、体験レッスンに足を運んでみてください。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりの{area_name}のピラティススタジオが見つかることを願っています。
            </p>
          </div>
        </section>

        {{/* CTA */}}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              {area_name}のスタジオで体験レッスンを実施中。<br />
              気軽に体験してみましょう。
            </p>
            <Link
              href="#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      <RelatedAreas currentSlug="{slug}" />
      <SiteFooter />
    </>
  )
}}
"""


def main():
    # Build slug list from MVP scan (61 slugs)
    mvp_slugs = set()
    for entry in AREA_DIR.iterdir():
        if not entry.is_dir():
            continue
        page = entry / "page.tsx"
        if not page.exists():
            continue
        content = page.read_text(encoding="utf-8")
        if "areaStudios[" in content and "FAQSchema" not in content:
            mvp_slugs.add(entry.name)

    # Sanity check: targets should match MVP slugs
    target_slugs = set(AREA_INFO.keys())
    only_in_targets = target_slugs - mvp_slugs
    only_in_mvp = mvp_slugs - target_slugs
    print(f"Targets: {len(target_slugs)}, MVP found: {len(mvp_slugs)}")
    print(f"Targets not MVP: {sorted(only_in_targets)}")
    print(f"MVP not in targets: {sorted(only_in_mvp)}")

    written = 0
    sample_before = {}
    sample_after = {}

    for slug, (data_key, area_name, station, feature, prefecture) in AREA_INFO.items():
        if slug in ALREADY_RICH_SKIP:
            print(f"  SKIP already rich: {slug}")
            continue
        page_path = AREA_DIR / slug / "page.tsx"
        if not page_path.exists():
            print(f"  SKIP missing dir: {slug}")
            continue
        before_chars = len(page_path.read_text(encoding="utf-8"))
        new_content = page_template(slug, data_key, area_name, station, feature, prefecture)
        page_path.write_text(new_content, encoding="utf-8")
        after_chars = len(new_content)
        written += 1
        # Save samples for first 3
        if len(sample_before) < 5:
            sample_before[slug] = before_chars
            sample_after[slug] = after_chars

    print(f"\nWritten: {written}/{len(AREA_INFO)} pages")
    print("\n=== Sample before/after char counts ===")
    for s in sample_before:
        print(f"  {s}: {sample_before[s]} -> {sample_after[s]} chars (x{sample_after[s]/max(sample_before[s],1):.1f})")


if __name__ == "__main__":
    main()
