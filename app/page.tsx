export default function PolishCulturalSociety() {
  const featuredLocations = [
    {
      name: 'Polski Sklep Sheffield',
      type: 'Shop',
      city: 'Sheffield',
    },
    {
      name: 'Polonia Restaurant',
      type: 'Restaurant',
      city: 'Manchester',
    },
    {
      name: 'University of Sheffield Polish Society',
      type: 'Student Society',
      city: 'Sheffield',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-500 overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 bg-white/70 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Polish Cultural Society
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#map" className="hover:text-red-500 transition-colors">Map</a>
            <a href="#societies" className="hover:text-red-500 transition-colors">Societies</a>
            <a href="#history" className="hover:text-red-500 transition-colors">History</a>
            <a href="#events" className="hover:text-red-500 transition-colors">Events</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:scale-105 transition-all">
              EN / PL
            </button>

            <button className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all shadow-lg shadow-red-500/20">
              Join Community
            </button>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-900/10" />

        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-red-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-red-300/10 blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-8 backdrop-blur-lg">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm">Discover Polish communities across the UK</span>
          </div>

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

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-red-600 text-white font-semibold hover:scale-105 transition-all shadow-2xl shadow-red-500/30">
              Explore Interactive Map
            </button>

            <button className="px-8 py-4 rounded-2xl border border-black/10 dark:border-white/10 backdrop-blur-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all">
              View University Societies
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              ['120+', 'Businesses'],
              ['35+', 'Restaurants'],
              ['20+', 'Universities'],
              ['5k+', 'Community Members'],
            ].map(([value, label]) => (
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

      <section id="map" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-red-600 font-semibold mb-3">Interactive Discovery</p>
            <h2 className="text-5xl font-black tracking-tight">
              Community Map
            </h2>
          </div>

          <div className="hidden md:flex gap-3">
            {['Shops', 'Restaurants', 'Churches', 'Societies'].map((item) => (
              <button
                key={item}
                className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-red-600 hover:text-white transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
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

      <section id="societies" className="py-32 px-6 bg-neutral-50 dark:bg-white/5">
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
            {[
              'University of Sheffield',
              'Sheffield Hallam',
              'University of Birmingham',
              'UCL',
              'Manchester University',
              'Leeds University',
            ].map((uni) => (
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

      <section id="history" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-red-600 font-semibold mb-3">Culture & Heritage</p>
          <h2 className="text-5xl font-black tracking-tight mb-6">
            Polish History & Culture
          </h2>
        </div>

        <div className="space-y-10">
          {[
            {
              year: '966',
              title: 'Beginning of the Polish State',
            },
            {
              year: '1795',
              title: 'Partitions of Poland',
            },
            {
              year: '1945',
              title: 'Post-WW2 Polish Communities in Britain',
            },
            {
              year: '2004+',
              title: 'Modern Polish Migration to the UK',
            },
          ].map((item) => (
            <div
              key={item.year}
              className="group grid md:grid-cols-[180px_1fr] gap-8 p-8 rounded-[32px] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl hover:shadow-2xl transition-all"
            >
              <div className="text-5xl font-black text-red-600">
                {item.year}
              </div>

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

      <section id="contact" className="py-32 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-black" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
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
    </div>
  );
}
