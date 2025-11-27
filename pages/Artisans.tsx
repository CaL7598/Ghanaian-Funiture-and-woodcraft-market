import React from 'react';
import { ARTISANS } from '../constants';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Artisans: React.FC = () => {
  return (
    <div className="bg-wood-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-wood-950 mb-4">Our Master Craftsmen</h1>
          <p className="text-wood-600 max-w-2xl mx-auto">
            Behind every curve and joint lies the legacy of a Ghanaian artisan. We partner directly with makers to ensure fair trade and authentic storytelling.
          </p>
        </div>

        <div className="space-y-12">
          {ARTISANS.map((artisan, index) => (
            <div 
              key={artisan.id} 
              className={`flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-sm border-l-4 ${index % 2 === 0 ? 'border-kente-gold md:flex-row' : 'border-kente-red md:flex-row-reverse'}`}
            >
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img 
                  src={artisan.imageUrl} 
                  alt={artisan.name} 
                  className="w-full h-80 object-cover rounded-md"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center py-4 px-4">
                <div className="flex items-center gap-2 text-kente-gold mb-2 font-bold uppercase tracking-wider text-sm">
                  <MapPin size={16} />
                  {artisan.location}
                </div>
                <h2 className="text-3xl font-bold text-wood-900 mb-2">{artisan.name}</h2>
                <p className="text-wood-500 font-medium mb-4">Specialty: {artisan.specialty}</p>
                <p className="text-wood-600 leading-relaxed mb-8">
                  {artisan.bio}
                </p>
                <div className="mt-auto">
                  <Link 
                    to="/shop" 
                    className="inline-flex items-center gap-2 bg-wood-900 text-white px-6 py-3 rounded-sm hover:bg-wood-800 transition font-medium"
                  >
                    View Their Works <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
