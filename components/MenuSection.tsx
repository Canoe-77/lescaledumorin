import React from 'react';
import { MENU_DATA, BUSINESS_INFO } from '../constants';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { Button } from './Button';

export const MenuSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#111]" id="menu">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase mb-4">
            Le Grill <span className="text-[#b91c1c]">Braisé</span>
          </h2>
          <div className="h-1 w-24 bg-[#b91c1c] mx-auto"></div>
          <p className="mt-4 text-gray-400 italic">Cuit lentement à la braise pour un goût authentique</p>
        </div>

        <div className="space-y-16">
          {MENU_DATA.map((category) => (
            <div key={category.title} className="scroll-mt-20">
              <h3 className="font-heading text-2xl md:text-3xl text-white uppercase border-l-4 border-[#b91c1c] pl-4 mb-8 bg-gradient-to-r from-[#1a1a1a] to-transparent py-2">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <div 
                    key={item.id} 
                    className={`bg-white p-4 border ${item.highlight ? 'border-[#b91c1c] ring-2 ring-[#b91c1c]/20' : 'border-zinc-200'} shadow-sm flex flex-col gap-4`}
                  >
                    {!category.hidePhotos && (
                      item.imageUrl ? (
                        <div className="h-48 w-full overflow-hidden rounded-sm relative">
                           <img 
                             src={item.imageUrl} 
                             alt={item.name} 
                             className={`w-full h-full transition-transform duration-500 hover:scale-105 ${item.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                           />
                        </div>
                      ) : (
                        <PhotoPlaceholder aspectRatio="wide" label={`Photo ${item.name}`} />
                      )
                    )}
                    
                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-heading text-xl font-bold text-gray-900 uppercase">{item.name}</h4>
                        <span className="font-bold text-[#b91c1c] text-xl whitespace-nowrap ml-4">{item.price}</span>
                      </div>
                      
                      {item.description && (
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <Button href={`tel:${BUSINESS_INFO.phone}`} className="animate-pulse" icon>
             Appeler pour commander
           </Button>
        </div>
      </div>
    </section>
  );
};