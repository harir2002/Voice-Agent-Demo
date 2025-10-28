
import React from 'react';
import type { Sector } from '../types';
import Button from './Button';
import SectorCard from './SectorCard';
import { SECTORS_DATA } from '../constants';

interface HomePageProps {
  onSelectSector: (sector: Sector) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectSector }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-dark text-white text-center py-20 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            Experience the Future of Conversation.
            <span className="text-brand-red"> AI Voice Agents That Drive Real Results.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Boost efficiency, slash operational costs, and deliver unparalleled customer experiences with our hyper-realistic, 24/7 AI voice agents. See the difference for yourself.
          </p>
          <Button onClick={() => alert('Request a Demo clicked!')}>
            Request a Demo
          </Button>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            AI-Powered Solutions for Your Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SECTORS_DATA.map((sector) => (
              <SectorCard key={sector.id} sector={sector} onSelect={() => onSelectSector(sector)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
