
import React from 'react';
import Button from './Button';

interface HeaderProps {
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-black text-white cursor-pointer"
          onClick={onGoHome}
        >
          SBA <span className="font-semibold">Info Solutions</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="secondary" onClick={() => alert('Contact Sales clicked!')}>
            Contact Sales
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
