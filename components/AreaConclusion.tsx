// 結論ファースト要約＋検索意図別CTA。
// 数値はすべて props の studios（実在スタジオの掲載情報）から集計し、解析できない表記は母数から除外する（捏造しない）。
// CTAはページ内アンカー（既存セクションid）へのジャンプで、検索意図（無料体験／料金／初心者）に対応する。
type StudioLike = {
  name: string
  price?: string
  trial?: string
}

function parseYen(text: string): number | null {
  const m = text.replace(/,/g, '').match(/(\d{1,6})円/)
  return m ? parseInt(m[1], 10) : null
}

export function AreaConclusion({ areaName, studios }: { areaName: string; studios: StudioLike[] }) {
  const total = studios.length

  // 無料体験: trialに「無料」を含むスタジオ数（金額表記のみ・不明は無料に数えない）
  const freeCount = studios.filter((s) => s.trial && s.trial.includes('無料')).length

  // 月額最安: 「月4回 14,190円」「月額 7,800円」のように月単位と明記された価格のみ
  const monthly = studios
    .map((s) => {
      if (!s.price || !/月(額|\s*\d+回)/.test(s.price)) return null
      return parseYen(s.price)
    })
    .filter((v): v is number => v !== null)
  const monthlyMin = monthly.length > 0 ? Math.min(...monthly) : null

  const ctas = [
    { label: '無料体験で選ぶ', sub: 'まず体験から', href: '#trial-guide' },
    { label: '料金で比較する', sub: '月額・体験料', href: '#price-comparison' },
    { label: '初心者の選び方', sub: '失敗しない基準', href: '#how-to-choose' },
  ]

  return (
    <section className="py-8 bg-white border-b border-warm-100" aria-label="結論・目的別に選ぶ">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="rounded-2xl border border-warm-200 bg-warm-50 p-6 md:p-8">
          <p className="inline-block text-xs font-bold tracking-wide text-white bg-[#8B7355] rounded-full px-3 py-1 mb-3">
            まず結論
          </p>
          <h2 className="text-lg md:text-xl font-bold text-warm-900 mb-3 leading-relaxed">
            {areaName}のピラティスは{total}社を比較。
            {freeCount > 0 && <>{freeCount}社が無料体験に対応{monthlyMin !== null ? '、' : '。'}</>}
            {monthlyMin !== null && <>月額は最安{monthlyMin.toLocaleString()}円〜。</>}
            目的から選べます。
          </h2>
          <p className="text-sm text-warm-600 mb-5 leading-relaxed">
            「まず無料で試したい」「料金で選びたい」「初心者で不安」——あなたの目的に合わせて、下のボタンから読みたい比較に飛べます。料金・無料体験の有無・マシン対応は各スタジオの公式情報をもとに比較しています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {ctas.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="group flex flex-col items-start rounded-xl border border-warm-200 bg-white px-4 py-3 transition hover:border-[#8B7355] hover:shadow-sm"
              >
                <span className="font-bold text-warm-900 group-hover:text-[#8B7355]">{c.label}</span>
                <span className="text-xs text-warm-500 mt-0.5">{c.sub} →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
