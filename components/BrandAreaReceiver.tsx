import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { getBrand } from "@/data/brands";
import type { BdcStore } from "@/data/bdc-stores";

// P0①: BDC×エリア受け皿。指名クエリ「BDC ピラティス {エリア}」の受け皿。
// 実店舗データ（brands-aggregate.json一致）＋BDCブランド編集データ＋ブランド/エリアへの三角リンク。
export function BrandAreaReceiver({ store }: { store: BdcStore }) {
  const brand = getBrand("bdc");
  const brandName = brand?.name ?? "BDC PILATES";

  const faqs = [
    {
      q: `${brandName} ${store.areaQuery}の体験レッスンはありますか？`,
      a: `${store.storeName}では${store.trial}の掲載例があります。体験の空き状況・最新の料金は公式サイトでご確認ください。`,
    },
    {
      q: `${brandName} ${store.areaQuery}へのアクセスは？`,
      a: `${store.access}です。${store.addressIsVague ? "詳細な所在地は公式サイトでご確認ください。" : `所在地は${store.address}です。`}`,
    },
    ...(brand?.faq ?? []),
  ];

  const localLd = {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "LocalBusiness"],
    name: store.storeName,
    url: `https://biyori-pilates.com/brands/${store.urlSlug}/`,
    ...(store.addressIsVague
      ? { areaServed: `${store.areaQuery}（東京都）` }
      : { address: { "@type": "PostalAddress", streetAddress: store.address, addressCountry: "JP" } }),
    parentOrganization: { "@type": "Organization", name: brandName },
  };

  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbSchema
        items={[
          { name: "ホーム", url: "https://biyori-pilates.com/" },
          { name: "ブランド一覧", url: "https://biyori-pilates.com/brands/" },
          { name: brandName, url: "https://biyori-pilates.com/brands/bdc/" },
          { name: `${store.areaQuery}`, url: `https://biyori-pilates.com/brands/${store.urlSlug}/` },
        ]}
      />
      <main className="bg-warm-50 min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-5">
          <nav className="text-xs text-warm-500 mb-6">
            <Link href="/" className="hover:text-warm-800">ホーム</Link>
            <span className="mx-2">›</span>
            <Link href="/brands/" className="hover:text-warm-800">ブランド一覧</Link>
            <span className="mx-2">›</span>
            <Link href="/brands/bdc/" className="hover:text-warm-800">{brandName}</Link>
            <span className="mx-2">›</span>
            <span className="text-warm-800">{store.areaQuery}</span>
          </nav>

          <p className="section-en text-warm-400 mb-2 font-medium">Brand × Area</p>
          <h1 className="text-2xl md:text-3xl font-light text-warm-900 tracking-tight mb-3">
            {brandName} {store.areaQuery}の料金・体験・アクセス
            <span className="block text-base text-warm-500 mt-2 font-light">
              マシンピラティス専門「{store.storeName}」を当サイト掲載データで整理【2026年7月】
            </span>
          </h1>

          {/* 結論ボックス */}
          <section className="bg-white border border-warm-200 p-6 mb-10">
            <p className="text-xs font-medium text-warm-400 uppercase tracking-[0.15em] mb-3">まず結論</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-lg font-light text-warm-900">{store.price.split("〜")[0]}〜</p>
                <p className="text-xs text-warm-500 mt-1">掲載プラン</p>
              </div>
              <div>
                <p className="text-lg font-light text-warm-900">{store.trial.replace("体験レッスン", "").trim()}</p>
                <p className="text-xs text-warm-500 mt-1">体験レッスン</p>
              </div>
              <div>
                <p className="text-lg font-light text-warm-900">{store.rating ? `★${store.rating.toFixed(1)}` : "—"}</p>
                <p className="text-xs text-warm-500 mt-1">{store.rating ? "掲載時点の評価" : "評価準備中"}</p>
              </div>
              <div>
                <p className="text-lg font-light text-warm-900">徒歩2分</p>
                <p className="text-xs text-warm-500 mt-1">最寄駅から</p>
              </div>
            </div>
          </section>

          {/* 店舗情報 */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{store.storeName}の基本情報</h2>
            <div className="bg-white border border-warm-200 overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium whitespace-nowrap w-28">店舗</th><td className="px-4 py-3 text-warm-800">{store.storeName}</td></tr>
                  <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium">所在地</th><td className="px-4 py-3 text-warm-800">{store.address}</td></tr>
                  <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium">アクセス</th><td className="px-4 py-3 text-warm-800">{store.access}</td></tr>
                  <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium">料金</th><td className="px-4 py-3 text-warm-800">{store.price}</td></tr>
                  <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium">体験</th><td className="px-4 py-3 text-warm-800">{store.trial}</td></tr>
                  {store.rating && <tr><th className="px-4 py-3 text-left text-warm-500 font-medium">評価</th><td className="px-4 py-3 text-warm-800">★{store.rating.toFixed(1)}（当サイト掲載時点）</td></tr>}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
              ※料金・体験条件は当サイト掲載時点の情報であり、金額を保証するものではありません。最新の料金・空き状況・キャンペーンは公式サイトでご確認ください。
              {store.addressIsVague && "所在地の詳細は公式サイトでご確認ください。"}
            </p>
          </section>

          {/* ブランドの特徴 → ブランドページへ */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{brandName}とは（{store.areaQuery}で通う前に）</h2>
            {(brand?.intro ?? []).map((p, i) => (
              <p key={i} className="text-sm text-warm-700 leading-relaxed mb-3 font-light">{p}</p>
            ))}
            <div className="flex flex-wrap gap-2 mb-4">
              {(brand?.features ?? []).map((f) => (
                <span key={f} className="text-xs text-warm-700 border border-warm-300 bg-white px-3 py-1.5">{f}</span>
              ))}
            </div>
            <p className="text-sm">
              <Link href="/brands/bdc/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">
                → {brandName}の料金・評判・全店舗一覧を見る
              </Link>
            </p>
          </section>

          {/* 周辺エリアで比較 */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{store.areaQuery}周辺のピラティスと比較する</h2>
            <p className="text-sm text-warm-700 leading-relaxed mb-4 font-light">
              {store.areaQuery}やその周辺には他のマシン/マットピラティススタジオもあります。料金・体験・無料体験の有無をエリアページでまとめて比較できます。
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href={`/area/${store.areaSlug}/`} className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">
                {store.areaLabel}のピラティスを比較
              </Link>
              {store.nearby.map((n) => (
                <Link key={n.slug} href={`/area/${n.slug}/`} className="text-xs text-warm-600 border border-warm-200 bg-white px-3 py-1.5 hover:border-warm-400 transition-colors">
                  {n.label}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white border border-warm-200 p-5">
                  <p className="text-sm font-medium text-warm-900 mb-2">Q. {f.q}</p>
                  <p className="text-sm text-warm-700 font-light leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 関連リンク */}
          <section className="border-t border-warm-200 pt-8">
            <div className="flex flex-wrap gap-3">
              <Link href="/brands/bdc/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">{brandName}ブランドガイド</Link>
              <Link href="/brands/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">ブランド一覧</Link>
              <Link href={`/area/${store.areaSlug}/`} className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">{store.areaLabel}のエリア比較</Link>
              <Link href="/articles/pilates-ryokin-hakusho/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">全国ピラティス料金白書2026</Link>
            </div>
          </section>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localLd) }} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
