// components/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 bg-white/70 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-red-600 transition-colors">
          Polish Cultural Society
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/map"       className="hover:text-red-500 transition-colors">Map</Link>
          <Link href="/societies" className="hover:text-red-500 transition-colors">Societies</Link>
          <Link href="/history"   className="hover:text-red-500 transition-colors">History</Link>
          {/* <Link href="/events"    className="hover:text-red-500 transition-colors">Events</Link> */}
          <Link href="/contact"   className="hover:text-red-500 transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:scale-105 transition-all">
            <img className="h-5" src="https://img.icons8.com/?size=100&id=kqaFfGqzD2b3&format=png&color=ffffff"/>
          </button>
          <a href="/map" className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all shadow-lg shadow-red-500/20">
            Explore Map
          </a>
        </div>
      </div>
    </header>
  );
}
