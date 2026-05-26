// app/map/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Map — Polish Cultural Society',
  description: 'Explore an interactive map of Polish businesses, churches, restaurants, and societies across the UK.',
};

const filterCategories = ['Shops', 'Restaurants', 'Churches', 'Societies'];

const featuredLocations = [
  { name: 'Polski Sklep Sheffield', type: 'Shop', city: 'Sheffield' },
  { name: 'Polonia Restaurant', type: 'Restaurant', city: 'Manchester' },
  { name: 'University of Sheffield Polish Society', type: 'Student Society', city: 'Sheffield' },
];

export default function MapPage() {
  return (
    <section className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-red-600 font-semibold mb-3">Interactive Discovery</p>
          <h2 className="text-5xl font-black tracking-tight">Community Map</h2>
        </div>

        <div className="hidden md:flex gap-3">
          {filterCategories.map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-red-600 hover:text-white transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Map + Listings */}
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
        {/* Map placeholder */}
        <div className="relative h-[600px] rounded-[32px] overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-black shadow-2xl">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.2),transparent_70%)]" />
          <div className="absolute top-1/3 left-1/2 w-5 h-5 bg-red-600 rounded-full animate-bounce shadow-lg shadow-red-500/50" />
          <div className="absolute top-1/2 left-1/3 w-5 h-5 bg-red-600 rounded-full animate-bounce shadow-lg shadow-red-500/50" />
          <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-red-600 rounded-full animate-bounce shadow-lg shadow-red-500/50" />

          <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-white/70 dark:bg-black/40 backdrop-blur-2xl border border-white/20">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold">Live Community Map</h3>
              <span className="text-sm text-red-600">Mapbox Ready</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
              Discover Polish businesses, churches, restaurants, schools, and
              student communities across the UK.
            </p>
          </div>
        </div>

        {/* Location cards */}
        <div className="space-y-5">
          {featuredLocations.map((location) => (
            <div
              key={location.name}
              className="group p-6 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-xs font-semibold">
                  {location.type}
                </span>
                <span className="text-sm text-neutral-500">{location.city}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                {location.name}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
                Community verified listing with location details, reviews,
                opening times, and social links.
              </p>

              <button className="text-red-600 font-semibold hover:translate-x-2 transition-transform">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
