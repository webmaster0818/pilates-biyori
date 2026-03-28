import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Pilates Navi
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/basics" className="hover:text-purple-600">基礎知識</Link>
            <Link href="/benefits" className="hover:text-purple-600">効果</Link>
            <Link href="/studios" className="hover:text-purple-600">スタジオ選び</Link>
            <Link href="/area" className="hover:text-purple-600">地域別</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
