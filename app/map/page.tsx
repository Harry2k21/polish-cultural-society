'use client';

import L from 'leaflet';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const filterCategories = [
  'Schools',
  'Restaurants',
  'Churches',
  'Societies',
];

const featuredLocations = [
  {
    name: 'Polish Church Sheffield',
    type: 'Church',
    city: 'Sheffield',
  },
  {
    name: 'Polish School Manchester',
    type: 'School',
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

const polishSocieties = [
  {
    name: 'University of Sheffield Polish Society',
    type: 'Student Society',
    city: 'Sheffield',
    position: [53.3811, -1.4701],
  },
  {
    name: 'University of Manchester Polish Society',
    type: 'Student Society',
    city: 'Manchester',
    position: [53.4668, -2.2339],
  },
  {
    name: 'UCL Polish Society',
    type: 'Student Society',
    city: 'London',
    position: [51.5246, -0.1340],
  },

]

const churchIcon = new L.Icon({
  iconUrl:
    'https://img.icons8.com/?size=100&id=ZizUFqOcq7ts&format=png&color=000000',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [30, 30],
  iconAnchor: [12, 41],
});

const societyIcon = new L.Icon({
  iconUrl:
    'https://img.icons8.com/?size=100&id=71188&format=png&color=000000',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [30, 30],
  iconAnchor: [12, 41],
});

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState('Churches');

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
              onClick={() => setActiveFilter(item)}
              className={`px-4 py-2 rounded-full border border-black/10 dark:border-white/10 transition-all ${
                activeFilter === item
                  ? 'bg-red-600 text-white'
                  : 'hover:bg-red-600 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="gap-8">
        <div className="h-[500px] w-full rounded-[32px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
          <MapContainer
            center={[54.5, -2.5]}
            zoom={6}
            scrollWheelZoom
            className="h-full w-full"
          >
            <TileLayer
              attribution=""
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            {/* CHURCHES */}
            {activeFilter === 'Churches' &&
              polishChurches.map((church) => (
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

            {/* SOCIETIES */}
            {activeFilter === 'Societies' &&
              polishSocieties.map((society) => (
                <Marker
                  key={society.name}
                  position={society.position as [number, number]}
                  icon={societyIcon}
                >
                  <Popup>
                    <div className="space-y-1">
                      <h3 className="font-bold">{society.name}</h3>
                      <p>{society.city}</p>
                      <p className="text-red-600 text-sm">
                        {society.type}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}