import React from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const InfoSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#1a1a1a] border-y border-zinc-800">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        
        {/* Hours */}
        <div className="bg-white p-6 border border-zinc-200 shadow-md">
          <div className="flex items-center justify-center md:justify-start mb-4 text-[#b91c1c]">
            <Clock className="w-6 h-6 mr-2" />
            <h3 className="font-heading text-xl font-bold uppercase text-black">Horaires</h3>
          </div>
          <p className="text-gray-800 font-bold mb-2">{BUSINESS_INFO.dates}</p>
          <ul className="space-y-1 text-gray-600">
            {BUSINESS_INFO.hours.map((hour, idx) => (
              <li key={idx}>{hour}</li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div className="bg-white p-6 border border-zinc-200 shadow-md">
          <div className="flex items-center justify-center md:justify-start mb-4 text-[#b91c1c]">
            <MapPin className="w-6 h-6 mr-2" />
            <h3 className="font-heading text-xl font-bold uppercase text-black">Adresse</h3>
          </div>
          <p className="text-gray-800 mb-4">{BUSINESS_INFO.address}</p>
          <p className="text-sm text-gray-500 mb-4">Parking disponible sur place</p>
          <a 
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#b91c1c] border-b border-[#b91c1c] pb-1 hover:text-black hover:border-black transition-colors uppercase font-bold text-sm"
          >
            Voir sur Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};