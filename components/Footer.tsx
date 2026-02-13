import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 px-4 border-t-4 border-[#b91c1c]">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h4 className="font-heading text-xl font-bold uppercase text-white">L'Escale du Morin</h4>
        <p className="text-gray-500 text-sm">
          {BUSINESS_INFO.address}<br/>
          Tél: {BUSINESS_INFO.phoneDisplay}
        </p>
        <div className="pt-4">
             <p className="text-gray-700 text-xs uppercase tracking-widest">
                Fait maison & Convivialité
             </p>
        </div>
      </div>
    </footer>
  );
};