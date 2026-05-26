// app/events/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Upcoming Events — Polish Cultural Society',
  description: 'Browse Polish cultural events, festivals, and community meetups happening across the UK.',
};

const upcomingEvents = [
  { date: 'Jun 14', title: 'Polish Summer Festival',             location: 'Sheffield City Centre',    category: 'Cultural' },
  { date: 'Jun 21', title: 'Networking Evening — Polish Professionals', location: 'Manchester',       category: 'Networking' },
  { date: 'Jul 4',  title: 'Polish Language Exchange',           location: 'University of Birmingham', category: 'Education' },
  { date: 'Jul 12', title: 'Pierogi Making Workshop',            location: 'Leeds',                    category: 'Food & Culture' },
  { date: 'Aug 1',  title: 'Warsaw Uprising Commemoration',      location: 'London',                   category: 'History' },
  { date: 'Aug 15', title: 'Polish Independence Day Celebration', location: 'Edinburgh',               category: 'Cultural' },
];

export default function EventsPage() {
  return (
    <section className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <p className="text-red-600 font-semibold mb-3">What's On</p>
        <h2 className="text-5xl font-black tracking-tight mb-6">Upcoming Events</h2>
        <p className="max-w-3xl mx-auto text-neutral-600 dark:text-neutral-300 text-lg">
          Find Polish cultural events, festivals, networking evenings, and community meetups across the UK.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <div
            key={event.title}
            className="group p-8 rounded-[32px] bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl font-black text-red-600">{event.date}</span>
              <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-xs font-semibold">
                {event.category}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
              {event.title}
            </h3>

            <p className="text-neutral-500 text-sm mb-6">📍 {event.location}</p>

            <button className="text-red-600 font-semibold hover:translate-x-2 transition-transform">
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {/* Submit CTA */}
      <div className="mt-20 text-center p-12 rounded-[32px] border border-black/10 dark:border-white/10 bg-red-500/5">
        <h3 className="text-3xl font-black mb-4">Hosting an Event?</h3>
        <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-xl mx-auto">
          Submit your Polish community event and reach thousands of members across the UK.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded-2xl bg-red-600 text-white font-semibold hover:scale-105 transition-all shadow-2xl shadow-red-500/30"
        >
          Submit Your Event
        </Link>
      </div>
    </section>
  );
}
