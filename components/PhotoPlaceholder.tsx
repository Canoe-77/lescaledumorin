import React from 'react';
import { Camera } from 'lucide-react';

interface PhotoPlaceholderProps {
  label?: string;
  aspectRatio?: 'square' | 'wide';
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({ 
  label = "Photo à ajouter", 
  aspectRatio = 'wide' 
}) => {
  const heightClass = aspectRatio === 'square' ? 'h-32 w-32' : 'h-48 w-full';

  return (
    <div className={`${heightClass} bg-neutral-100 border-2 border-dashed border-neutral-300 rounded-sm flex flex-col items-center justify-center text-neutral-400 hover:border-red-700 hover:text-red-700 transition-colors duration-300 group`}>
      <Camera className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
      <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 group-hover:text-red-700">{label}</span>
    </div>
  );
};