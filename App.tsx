import React, { useState, useEffect } from 'react';
import type { Sector } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SectorPage from './components/SectorPage';
import AdvantageSection from './components/AdvantageSection';

const App: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);

  const handleSelectSector = (sector: Sector) => {
    setSelectedSector(sector);
  };

  const handleGoHome = () => {
    setSelectedSector(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedSector]);

  return (
    <div className="bg-brand-dark min-h-screen flex flex-col font-sans">
      <Header onGoHome={handleGoHome} />
      <main className="flex-grow">
        {selectedSector ? (
          <SectorPage sector={selectedSector} onGoBack={handleGoHome} />
        ) : (
          <>
            <HomePage onSelectSector={handleSelectSector} />
            <AdvantageSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
