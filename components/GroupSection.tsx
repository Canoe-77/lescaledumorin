import React from 'react';
import { Users, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { Button } from './Button';

export const GroupSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#b91c1c] text-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1">
             <div className="border border-zinc-200 shadow-xl p-3 transform -rotate-2 bg-white">
                 <img 
                   src="https://res.cloudinary.com/dq0f2gj6o/image/upload/v1770750262/ChatGPT_Image_10_fe%CC%81vr._2026_20_04_00_ibznf7.png" 
                   alt="Ambiance de groupe" 
                   className="w-full h-auto"
                 />
             </div>
          </div>

          <div className="order-1 md:order-2 text-center md:text-left space-y-6">
            <div className="inline-flex items-center justify-center md:justify-start space-x-2 bg-black/20 px-4 py-2 rounded-sm mb-2">
                <Users className="w-6 h-6 text-white" />
                <span className="font-bold uppercase tracking-wider">À partir de 10 personnes</span>
            </div>
            
            <h2 className="font-heading text-4xl font-bold uppercase leading-none">
              Grandes Tablées & <br/>Événements
            </h2>
            
            <p className="text-white/90 text-lg">
              Anniversaires, repas de famille ou sorties entre amis. 
              Profitez d'un moment convivial en extérieur avec possibilité de menu unique.
            </p>

            <div className="pt-4">
              <Button href={`tel:${BUSINESS_INFO.phone}`} variant="dark" icon fullWidth>
                Appeler pour un groupe
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};