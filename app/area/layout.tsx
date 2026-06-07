import AreaScrollReveal from '@/components/AreaScrollReveal'

// 全エリアページ共通レイアウト。スクロールでセクションをフェードインさせる。
export default function AreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="area-reveal">
      {children}
      <AreaScrollReveal />
    </div>
  )
}
