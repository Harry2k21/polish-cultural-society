'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const filterCategories = [
  'Shops',
  'Restaurants',
  'Churches',
  'Societies',
];

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

const polishChurches = [
  {
    name: 'St Patrick’s Polish Church',
    city: 'London',
    position: [51.5165, -0.1395],
  },
  {
    name: 'Polish Catholic Mission Manchester',
    city: 'Manchester',
    position: [53.4808, -2.2426],
  },
  {
    name: 'Polish Catholic Mission Birmingham',
    city: 'Birmingham',
    position: [52.4862, -1.8904],
  },
  {
    name: 'Polish Catholic Mission Sheffield',
    city: 'Sheffield',
    position: [53.3811, -1.4701],
  },
  {
    name: 'Polish Catholic Centre',
    city: 'Newton Hill Rd, Leeds LS7 4JE',
    position: [53.82393, -1.53132],
  },
  {
    name: 'Polish Catholic Mission Liverpool',
    city: 'Liverpool',
    position: [53.4084, -2.9916],
  },
  {
    name: 'Polish Catholic Mission Nottingham',
    city: 'Nottingham',
    position: [52.9548, -1.1581],
  },
  {
    name: 'Polish Catholic Mission Bristol',
    city: 'Bristol',
    position: [51.4545, -2.5879],
  },
];

const churchIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=ZizUFqOcq7ts&format=png&color=000000',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [30, 30],
  iconAnchor: [12, 41],
});

export default function MapPage() {
  return (
    <section className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-red-600 font-semibold mb-3">
            Interactive Discovery
          </p>

          <h1 className="text-5xl font-black tracking-tight">
            Community Map
          </h1>
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

      {/* Map + Sidebar */}
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
        {/* Map */}
        <div className="h-[650px] rounded-[32px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
          <MapContainer
            center={[54.5, -2.5]}
            zoom={6}
            scrollWheelZoom
            className="h-full w-full"
          >
            <TileLayer
              attribution=''
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            {polishChurches.map((church) => (
              <Marker
                key={church.name}
                position={church.position as [number, number]}
                icon={churchIcon}
              >
                <Popup>
                  <div className="space-y-1">
                    <h3 className="font-bold">{church.name}</h3>
                    <p>{church.city}</p>
                    <p className="text-red-600 text-sm">
                      Catholic Polish Mission
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Sidebar Listings */}
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

                <span className="text-sm text-neutral-500">
                  {location.city}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                {location.name}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
                Community verified listing with location details,
                reviews, opening times, and social links.
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