import type { ReactNode } from "react";
import { resolveStoreFacts, type FactSource } from "@/data/brand-store-facts";

// 店舗ページ（/brands/{ブランド}-{店舗}/）の「料金と初月にかかる費用」「予約・キャンセル・退会・休会」「体験の流れと持ち物」。
// 2026-11-28 競合比較（pilates-kuchikomi-gap-20261127.md）で店舗ページに無かった3ブロック。
// ⚠️ 値はすべて data/brand-store-facts.ts（公式サイトで確認した値と出典URL）から。ブランドの値が無い・確認できない店舗では何も出さない。
// ⚠️ 店舗の料金が標準と違う場合は店舗の値を出す（ブランドの標準料金を当てはめない）。

const SourceLink = ({ src }: { src: FactSource }) => (
  <a href={src.url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">
    {src.label}
  </a>
);

const Sources = ({ list }: { list: FactSource[] }) => {
  const uniq = list.filter((s, i) => list.findIndex((x) => x.url === s.url) === i);
  return (
    <>
      出典：
      {uniq.map((s, i) => (
        <span key={s.url}>
          {i > 0 ? "／" : ""}
          <SourceLink src={s} />
        </span>
      ))}
    </>
  );
};

const H2 = ({ children, id }: { children: ReactNode; id: string }) => (
  <h2 id={id} className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{children}</h2>
);

export function StoreFactsSection({ brandSlug, urlSlug, storeName }: { brandSlug: string; urlSlug: string; storeName: string }) {
  const f = resolveStoreFacts(brandSlug, urlSlug);
  if (!f) return null;
  const checked = `（公式サイトで${f.checkedAt}確認）`;

  return (
    <>
      {f.price && (
        <section className="mb-10" id="store-price">
          <H2 id="store-price-h">{storeName}の料金と初月にかかる費用</H2>
          {f.price.lead && <p className="text-sm text-warm-700 leading-relaxed mb-3 font-light">{f.price.lead}</p>}
          <div className="bg-white border border-warm-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-warm-200 bg-warm-50">
                  <th className="px-4 py-2 text-left text-warm-600 font-medium">プラン</th>
                  <th className="px-4 py-2 text-left text-warm-600 font-medium whitespace-nowrap">料金</th>
                  <th className="px-4 py-2 text-left text-warm-600 font-medium whitespace-nowrap">税の表記</th>
                </tr>
              </thead>
              <tbody>
                {f.price.rows.map((r) => (
                  <tr key={r.plan + r.price} className="border-b border-warm-100 last:border-0">
                    <td className="px-4 py-2 text-warm-800">
                      {r.plan}
                      {r.note && <span className="block text-[11px] text-warm-500 mt-0.5">{r.note}</span>}
                    </td>
                    <td className="px-4 py-2 text-warm-800 whitespace-nowrap">{r.price}</td>
                    <td className="px-4 py-2 text-warm-600 whitespace-nowrap">{r.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {f.initial && (f.initial.rows.length > 0 || f.initial.note) && (
            <>
              <h3 className="text-base font-medium text-warm-900 mt-6 mb-3">入会時にかかる費用</h3>
              {f.initial.rows.length > 0 && (
              <div className="bg-white border border-warm-200 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-warm-200 bg-warm-50">
                      <th className="px-4 py-2 text-left text-warm-600 font-medium">項目</th>
                      <th className="px-4 py-2 text-left text-warm-600 font-medium whitespace-nowrap">金額</th>
                      <th className="px-4 py-2 text-left text-warm-600 font-medium">免除・割引の条件（公式の表記）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.initial.rows.map((r) => (
                      <tr key={r.item} className="border-b border-warm-100 last:border-0">
                        <td className="px-4 py-2 text-warm-800">{r.item}</td>
                        <td className="px-4 py-2 text-warm-800 whitespace-nowrap">
                          {r.amount}
                          <span className="block text-[11px] text-warm-500">{r.tax}</span>
                        </td>
                        <td className="px-4 py-2 text-warm-700 font-light">{r.waiver ?? "記載なし"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              )}
              {f.initial.note && <p className="text-xs text-warm-600 mt-2 leading-relaxed">{f.initial.note}</p>}
            </>
          )}

          {f.firstMonth && (
            <div className="mt-6 bg-warm-50 border border-warm-200 p-5">
              <p className="text-sm font-medium text-warm-900 mb-1">{f.firstMonth.title}（公式の料金から当サイトが計算した例）</p>
              <p className="text-xs text-warm-600 mb-3 leading-relaxed">{f.firstMonth.condition}</p>
              <ul className="text-sm text-warm-800 space-y-1">
                {f.firstMonth.lines.map((l) => (
                  <li key={l.label} className="flex justify-between gap-4 border-b border-warm-200 pb-1">
                    <span>{l.label}</span>
                    <span className="whitespace-nowrap">{l.amount.toLocaleString()}円</span>
                  </li>
                ))}
                <li className="flex justify-between gap-4 pt-1 font-medium">
                  <span>合計</span>
                  <span className="whitespace-nowrap">{f.firstMonth.lines.reduce((n, l) => n + l.amount, 0).toLocaleString()}円</span>
                </li>
              </ul>
              <p className="text-[11px] text-warm-600 mt-3 leading-relaxed">
                計算式：{f.firstMonth.lines.map((l) => `${l.label} ${l.amount.toLocaleString()}円`).join(" ＋ ")}。
                {f.firstMonth.note ? ` ${f.firstMonth.note}` : ""}
                キャンペーン・割引は含めていません。実際の請求額は入会日や支払い方法で変わるため、入会前に店舗でご確認ください。
              </p>
            </div>
          )}

          <p className="text-[11px] text-warm-500 mt-3 leading-relaxed">
            <Sources list={[...f.price.sources, ...(f.initial ? f.initial.sources : []), ...(f.firstMonth ? [f.firstMonth.source] : [])]} />
            {checked}
          </p>
        </section>
      )}

      {f.rules && f.rules.length > 0 && (
        <section className="mb-10" id="store-rules">
          <H2 id="store-rules-h">{storeName}の予約・キャンセル・退会・休会</H2>
          <div className="bg-white border border-warm-200 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {f.rules.map((r) => (
                  <tr key={r.label} className="border-b border-warm-100 last:border-0">
                    <th className="px-4 py-3 text-left text-warm-500 font-medium whitespace-nowrap align-top w-28">{r.label}</th>
                    <td className="px-4 py-3 text-warm-800 leading-relaxed">
                      {r.text}
                      <span className="block text-[11px] text-warm-500 mt-1">
                        <Sources list={r.sources} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-warm-500 mt-3 leading-relaxed">
            {f.rulesNote ? `${f.rulesNote}` : ""}
            {checked}
          </p>
        </section>
      )}

      {f.trial && (
        <section className="mb-10" id="store-trial">
          <H2 id="store-trial-h">{storeName}の体験の流れと持ち物</H2>
          <ol className="space-y-2 text-sm text-warm-800 leading-relaxed list-decimal pl-5 mb-4">
            {f.trial.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <dl className="bg-white border border-warm-200">
            {f.trial.items.map((x) => (
              <div key={x.label} className="grid grid-cols-[6.5rem_1fr] gap-3 px-4 py-3 border-b border-warm-100 last:border-0 text-sm">
                <dt className="font-medium text-warm-600">{x.label}</dt>
                <dd className="text-warm-800 leading-relaxed">{x.text}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[11px] text-warm-500 mt-3 leading-relaxed">
            <Sources list={f.trial.sources} />
            {checked}
          </p>
        </section>
      )}
    </>
  );
}
