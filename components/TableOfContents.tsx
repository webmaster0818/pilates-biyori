interface TocItem {
  id: string
  title: string
}

interface TableOfContentsProps {
  areaName: string
  studioNames?: string[]
}

export function TableOfContents({ areaName, studioNames }: TableOfContentsProps) {
  const items: TocItem[] = [
    { id: 'studios', title: `${areaName}のおすすめピラティススタジオ` },
    { id: 'kodawari', title: 'こだわりから探す' },
    { id: 'frequency', title: 'おすすめの期間・頻度' },
    { id: 'price-guide', title: '予算別の料金相場' },
    { id: 'how-to-choose', title: '失敗しないピラティススタジオの選び方' },
    { id: 'faq', title: 'よくある質問' },
    { id: 'summary', title: 'まとめ' },
  ]

  return (
    <section className="py-8 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-warm-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-warm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/>
            </svg>
            この記事の目次
          </h2>
          <ol className="space-y-2 text-sm">
            {items.map((item, index) => (
              <li key={item.id} className="flex items-start gap-3">
                <span className="text-warm-400 font-light min-w-[1.5rem]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <a
                    href={`#${item.id}`}
                    className="text-warm-700 hover:text-warm-900 hover:underline transition"
                  >
                    {item.title}
                  </a>
                  {item.id === 'studios' && studioNames && studioNames.length > 0 && (
                    <ul className="mt-1.5 space-y-1">
                      {studioNames.map((name, i) => (
                        <li key={name}>
                          <a
                            href={`#studio-${i + 1}`}
                            className="text-xs text-warm-600 hover:text-warm-900 hover:underline transition"
                          >
                            {i + 1}. {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
