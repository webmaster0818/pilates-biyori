import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" style={{ textDecoration: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pb-logo.png" alt="Pilates-Biyori" className="h-9 w-auto" width="44" height="44" />
            <span className="text-2xl font-bold text-warm-900" style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '0.01em' }}>
              Pilates-Biyori
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 text-warm-700">
            <Link href="/basics" className="hover:text-accent transition-colors">基礎知識</Link>
            <Link href="/benefits" className="hover:text-accent transition-colors">効果</Link>
            <Link href="/studios" className="hover:text-accent transition-colors">スタジオ選び</Link>
            <Link href="/area" className="hover:text-accent transition-colors">地域別</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
