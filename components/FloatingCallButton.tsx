import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const FloatingCallButton: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes real-flame-flicker {
            0% { transform: scale(1) rotate(0deg) skewX(0deg); filter: drop-shadow(0 4px 6px rgba(185, 28, 28, 0.4)); }
            25% { transform: scale(1.05) rotate(-2deg) skewX(-2deg); filter: drop-shadow(0 4px 10px rgba(234, 88, 12, 0.5)); }
            50% { transform: scale(1.02) rotate(1deg) skewX(2deg); filter: drop-shadow(0 4px 6px rgba(185, 28, 28, 0.4)); }
            75% { transform: scale(1.06) rotate(-1deg) skewX(-1deg); filter: drop-shadow(0 4px 10px rgba(234, 88, 12, 0.5)); }
            100% { transform: scale(1) rotate(0deg) skewX(0deg); filter: drop-shadow(0 4px 6px rgba(185, 28, 28, 0.4)); }
          }
          
          .flame-container {
            transform-origin: bottom center;
            animation: real-flame-flicker 3s infinite ease-in-out;
          }
        `}
      </style>
      <div className="fixed bottom-6 right-6 z-50 md:hidden pointer-events-none">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="pointer-events-auto block w-20 h-20 relative flame-container group active:scale-95 transition-transform duration-150"
          aria-label="Appeler maintenant"
        >
          <img 
            src="https://res.cloudinary.com/dq0f2gj6o/image/upload/v1770904152/flamme_6_shmrzv.png" 
            alt="Bouton d'appel" 
            className="w-full h-full object-contain"
          />

          {/* Icon Centered - ajusté pour être visuellement au coeur de la flamme */}
          <div className="absolute inset-0 flex items-center justify-center pt-3">
             <Phone className="w-8 h-8 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] fill-white" />
          </div>
        </a>
      </div>
    </>
  );
};