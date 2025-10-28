
import React from 'react';
import type { Sector } from '../types';

interface SectorCardProps {
  sector: Sector;
  onSelect: () => void;
}

const SectorCard: React.FC<SectorCardProps> = ({ sector, onSelect }) => {
  return (
    <div 
      className="bg-brand-gray p-8 rounded-xl border border-gray-700/50 flex flex-col items-center text-center text-white cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-red/20"
      onClick={onSelect}
    >
      <div className="text-brand-red mb-4">
        <sector.icon className="w-16 h-16" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{sector.name}</h3>
      <p className="text-gray-400 flex-grow">{sector.description}</p>
    </div>
  );
};

export default SectorCard;
