import React from 'react';
import { Button } from './Button';
import { BUSINESS_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#111]">
      {/* Abstract Heat/Ember Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-to-t from-[#b91c1c]/20 to-transparent"></div>
        <div className="ember"></div>
        <div className="ember"></div>
        <div className="ember"></div>
        <div className="ember"></div>
        <div className="ember"></div>
      </div>

      {/* Logo Area */}
      <div className="relative z-10 mb-8 p-8 border-4 border-[#b91c1c] bg-white max-w-sm w-full mx-auto shadow-[0_0_50px_rgba(185,28,28,0.2)]">
         <div className="text-center flex flex-col items-center">
            <img 
              src="https://i.imgur.com/LgUuukh.jpeg" 
              alt="Logo L'Escale du Morin" 
              className="w-full max-w-[200px] h-auto object-contain mb-2"
            />
            <div className="h-1 w-20 bg-[#b91c1c] mx-auto my-3"></div>
            <p className="font-heading text-xl text-neutral-600 uppercase tracking-[0.2em]">Guinguette & Grill</p>
         </div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 uppercase drop-shadow-md">
          Poulet Braisé & Ambiance au Bord de l'Eau
        </h2>

        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
          <Button href={`tel:${BUSINESS_INFO.phone}`} fullWidth icon>
            Commander à emporter
          </Button>
          
          <Button variant="secondary" href={`tel:${BUSINESS_INFO.phone}`} fullWidth>
            Réserver une table sur place
          </Button>
        </div>
      </div>
    </section>
  );
};