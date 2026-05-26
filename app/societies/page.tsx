// app/societies/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'University Societies — Polish Cultural Society',
  description: 'Find Polish student societies and networking communities at UK universities.',
};

const universities = [
  'University of Sheffield',
  'Sheffield Hallam',
  'University of Birmingham',
  'UCL',
  'Manchester University',
  'Leeds University',
];

export default function SocietiesPage() {
  return (
    <section className="pt-32 pb-32 px-6 bg-neutral-50 dark:bg-white/5 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-red-600 font-semibold mb-3">Students & Networking</p>
          <h2 className="text-5xl font-black tracking-tight mb-6">
            University Polish Societies
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600 dark:text-neutral-300 text-lg">
            Discover student communities, networking events, and Polish societies across UK universities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni) => (
            <div
              key={uni}
              className="group p-8 rounded-[32px] bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 hover:-translate-y-3 hover:rotate-1 transition-all duration-500 shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-2xl mb-6">
                🇵🇱
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                {uni}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Student-led Polish society with cultural events, networking,
                meetups, and social activities.
              </p>

              <button className="px-5 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-all">
                View Society
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
