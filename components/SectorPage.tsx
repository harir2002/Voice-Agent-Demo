
import React from 'react';
import type { Sector } from '../types';
import ChatDemo from './ChatDemo';
import Button from './Button';
import { CheckIcon } from '../constants';

interface SectorPageProps {
  sector: Sector;
  onGoBack: () => void;
}

const SectorPage: React.FC<SectorPageProps> = ({ sector, onGoBack }) => {
  return (
    <div className="text-white animate-fade-in">
      {/* Sector Hero */}
      <section className="relative h-64 md:h-80 bg-black">
        <img src={sector.heroImage} alt={sector.name} className="absolute inset-0 w-full h-full object-cover opacity-30"/>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-black">{sector.name}</h1>
          <p className="text-lg md:text-xl text-gray-300 mt-2">AI Voice Solutions Tailored for You</p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Description & Features */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">How AI Elevates {sector.name}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">{sector.pageDescription}</p>

            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <ul className="space-y-4">
              {sector.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-brand-red flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
             <div className="mt-12">
                <Button onClick={onGoBack} variant="secondary">
                    &larr; Explore Other Sectors
                </Button>
            </div>
          </div>

          {/* Right Column: Chat Demo */}
          <div className="lg:col-span-3">
             <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">Live Demo</h2>
            <ChatDemo messages={sector.chatDemo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorPage;
