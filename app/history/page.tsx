// app/history/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polish History & Culture — Polish Cultural Society',
  description: 'Explore the key milestones of Polish history and the Polish community in Britain.',
};

const historyItems = [
  { year: '966',   title: 'Beginning of the Polish State' },
  { year: '1795',  title: 'Partitions of Poland' },
  { year: '1945',  title: 'Post-WW2 Polish Communities in Britain' },
  { year: '2004+', title: 'Modern Polish Migration to the UK' },
];

export default function HistoryPage() {
  return (
    <section className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <p className="text-red-600 font-semibold mb-3">Culture & Heritage</p>
        <h2 className="text-5xl font-black tracking-tight mb-6">
          Polish History & Culture
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-600 dark:text-neutral-300 text-lg">
          Explore key milestones that shaped Polish identity and the Polish community in Britain.
        </p>
      </div>

      <div className="space-y-10">
        {historyItems.map((item) => (
          <div
            key={item.year}
            className="group grid md:grid-cols-[180px_1fr] gap-8 p-8 rounded-[32px] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl hover:shadow-2xl transition-all"
          >
            <div className="text-5xl font-black text-red-600">{item.year}</div>

            <div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
                Interactive storytelling section featuring animations,
                cultural archives, educational content, and historical media.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
