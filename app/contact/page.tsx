// app/contact/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submit a Listing — Polish Cultural Society',
  description: 'Suggest a Polish business, restaurant, church, school, or event for the community directory.',
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-32 px-6 bg-black text-white relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <p className="text-red-400 font-semibold mb-3">Community Contributions</p>
        <h2 className="text-5xl font-black tracking-tight mb-6">
          Submit a Listing or Suggestion
        </h2>

        <p className="text-neutral-300 text-lg mb-12 max-w-2xl mx-auto">
          Suggest a new Polish business, restaurant, church, school,
          university society, or community event for review.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <input
            placeholder="Your Name"
            className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl outline-none focus:border-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl outline-none focus:border-red-500"
          />
          <input
            placeholder="Business / Organisation Name"
            className="md:col-span-2 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl outline-none focus:border-red-500"
          />
          <textarea
            placeholder="Tell us about your submission..."
            rows={6}
            className="md:col-span-2 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl outline-none focus:border-red-500"
          />
          <button className="md:col-span-2 p-5 rounded-2xl bg-red-600 hover:bg-red-700 font-semibold text-lg transition-all hover:scale-[1.02] shadow-2xl shadow-red-500/20">
            Submit for Approval
          </button>
        </div>
      </div>
    </section>
  );
}
