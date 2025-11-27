import React from 'react';

const galleryImages = [
  'https://picsum.photos/id/1029/600/800',
  'https://picsum.photos/id/1015/800/600',
  'https://picsum.photos/id/1050/600/600',
  'https://picsum.photos/id/1012/600/700',
  'https://picsum.photos/id/106/800/600',
  'https://picsum.photos/id/1081/600/600',
  'https://picsum.photos/id/225/600/800',
  'https://picsum.photos/id/366/800/500',
];

export const Gallery: React.FC = () => {
  return (
    <div className="bg-wood-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-wood-950 mb-2">Visual Stories</h1>
          <p className="text-wood-600">Furniture in its natural habitat.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src={src} alt={`Gallery ${idx}`} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-wood-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold tracking-wider text-sm">Living Room Collection</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
