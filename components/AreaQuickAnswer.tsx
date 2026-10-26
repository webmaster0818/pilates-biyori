// h1 直下の「答え」＝「◯◯ ピラティス」で来た人への即答（店舗数・料金・体験・場所）。
// 値はページ内のスタジオカード・早見表と同じ公式確認値だけを書く（確認日を note に添える）。2026-10-26
export function AreaQuickAnswer({
  areaName,
  rows,
  note,
}: {
  areaName: string
  rows: { label: string; text: string }[]
  note?: string
}) {
  return (
    <section className="py-6 bg-white" aria-label={`${areaName}のピラティスの要点`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="border-l-4 border-[#8B7355] bg-warm-50 p-5">
          <h2 className="text-base md:text-lg font-bold text-warm-900 mb-3">{areaName}のピラティス：要点（結論）</h2>
          <dl className="space-y-2">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[4.5rem_1fr] gap-3 text-sm leading-relaxed">
                <dt className="font-bold text-warm-800">{r.label}</dt>
                <dd className="text-warm-700">{r.text}</dd>
              </div>
            ))}
          </dl>
          {note && <p className="text-xs text-warm-500 mt-3 leading-relaxed">{note}</p>}
        </div>
      </div>
    </section>
  )
}
