
import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-black text-white">
              Ready to Revolutionize Your Customer Experience?
            </h2>
            <p className="text-gray-400 mt-2">Schedule a free, personalized demo today and see how our AI Voice Agents can drive measurable growth for your business.</p>
          </div>
          <div className="flex space-x-4">
             <Button variant="secondary" onClick={() => alert('Contact Sales clicked!')}>
                Contact Sales
             </Button>
            <Button variant="primary" onClick={() => alert('Request a Demo clicked!')}>
                Request a Demo
            </Button>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500 border-t border-gray-800 pt-8">
            <p>&copy; {new Date().getFullYear()} SBA Info Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
