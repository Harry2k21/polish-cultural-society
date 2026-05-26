// app/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Polish Cultural Society — Home',
  description: 'Connecting Polish culture across the UK. Discover businesses, societies, events, and more.',
};

const stats = [
  { value: '120+', label: 'Businesses' },
  { value: '35+',  label: 'Restaurants' },
  { value: '20+',  label: 'Universities' },
  { value: '5k+',  label: 'Community Members' },
];

export default function HomePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-900/10" />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-red-500/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-red-300/10 blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-5xl text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-8 backdrop-blur-lg">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-sm">Discover Polish communities across the UK</span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-8">
          Connecting
          <span className="block text-red-600">Polish Culture</span>
          Across the UK
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Discover Polish businesses, churches, restaurants, student societies,
          schools, events, and cultural history in one beautifully designed
          community platform.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            href="/map"
            className="px-8 py-4 rounded-2xl bg-red-600 text-white font-semibold hover:scale-105 transition-all shadow-2xl shadow-red-500/30"
          >
            Explore Interactive Map
          </Link>
          <Link
            href="/societies"
            className="px-8 py-4 rounded-2xl border border-black/10 dark:border-white/10 backdrop-blur-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
          >
            View University Societies
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="p-6 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all"
            >
              <div className="text-4xl font-black text-red-600 mb-2">{value}</div>
              <div className="text-sm text-neutral-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}