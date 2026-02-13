import React from 'react';
import { Star } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { BUSINESS_INFO } from '../constants';

export const CanoeSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#1a1a1a] border-b border-zinc-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4 text-center md:text-left">
           <div className="bg-white p-6 border border-zinc-200 shadow-md">
              <div className="flex items-center justify-center md:justify-start text-[#0088cc] mb-4">
                {/* Custom Waves Icon mimicking the logo */}
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 13C4.5 11.5 6.5 11.5 9 13C11.5 14.5 13.5 14.5 16 13C18.5 11.5 20.5 11.5 23 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 8C4.5 6.5 6.5 6.5 9 8C11.5 9.5 13.5 9.5 16 8C18.5 6.5 20.5 6.5 23 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="font-heading text-2xl font-bold uppercase text-black">Canoë & Grill</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Envie de faire du canoë avant de déguster un poulet braisé ? Naviguez avec <a href="https://www.canoe-77.com" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0088cc] hover:underline">Canoë 77</a> puis accostez à L’Escale du Morin.
              </p>
           </div>
        </div>
        <div className="w-full md:w-1/3">
           <div className="bg-white p-2 border border-zinc-200 shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-300">
               <img 
                 src="https://res.cloudinary.com/dq0f2gj6o/image/upload/v1770750146/Canoe-77-53_f98kxe.jpg" 
                 alt="Canoë 77 sur le Morin" 
                 className="w-full h-auto object-cover"
               />
           </div>
        </div>
      </div>
    </section>
  );
};

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#111]">
        <div className="max-w-2xl mx-auto text-center space-y-8">
            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-8">Ils ont aimé l'escale</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Review Placeholder 1 */}
                <div className="bg-white p-6 border border-zinc-200 shadow-md">
                    <div className="flex justify-center text-[#b91c1c] mb-3">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-gray-600 italic mb-4">"Super poulet braisé, ambiance au top et service très sympa. Je recommande !"</p>
                    <p className="text-gray-400 font-bold uppercase text-xs">- Avis Google</p>
                </div>

                {/* Review Placeholder 2 */}
                <div className="bg-white p-6 border border-zinc-200 shadow-md hidden md:block">
                    <div className="flex justify-center text-[#b91c1c] mb-3">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-gray-600 italic mb-4">"Une vraie guinguette authentique. Les frites maison sont une tuerie."</p>
                    <p className="text-gray-400 font-bold uppercase text-xs">- Avis Google</p>
                </div>
            </div>
            
            <div className="pt-4">
               <a 
                 href={BUSINESS_INFO.googleMapsUrl} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-400 underline hover:text-[#b91c1c] text-sm"
               >
                 Voir tous les avis sur Google
               </a>
            </div>
        </div>
    </section>
  );
};