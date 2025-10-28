
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div key={index} className="bg-brand-gray p-8 rounded-xl border border-gray-700/50 flex flex-col">
              <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-brand-red text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
