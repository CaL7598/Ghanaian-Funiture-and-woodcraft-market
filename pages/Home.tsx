import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, Heart, Globe, PlayCircle } from 'lucide-react';
import { PRODUCTS, ARTISANS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img 
          src="https://picsum.photos/id/24/1920/1080" 
          alt="Artisan working on wood" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wood-950/90 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white space-y-8">
            <div className="inline-block bg-kente-gold text-wood-950 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
              Authentic Craftsmanship
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Bring the Soul of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kente-gold to-yellow-500">Ghanaian Wood</span> <br/>
              Into Your Home
            </h1>
            <p className="text-lg text-wood-100 max-w-lg leading-relaxed">
              Hand-carved furniture, sustainable materials, and timeless designs created by master artisans from the heart of Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/shop" className="bg-kente-gold hover:bg-yellow-500 text-wood-950 px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 text-center">
                Shop Collection
              </Link>
              <Link to="/artisans" className="border-2 border-white hover:bg-white hover:text-wood-950 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all text-center">
                Meet Artisans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <section className="py-20 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm border-b-4 border-kente-gold hover:shadow-md transition">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-6 text-wood-800">
                <Hammer size={32} />
              </div>
              <h3 className="text-xl font-bold text-wood-900 mb-3">Master Craftsmanship</h3>
              <p className="text-wood-600">Every piece is hand-carved by skilled artisans using traditional techniques passed down for generations.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-b-4 border-kente-red hover:shadow-md transition">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-6 text-wood-800">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-wood-900 mb-3">Sustainably Sourced</h3>
              <p className="text-wood-600">We use ethically sourced hardwoods like Odum and Wawa, ensuring preservation of Ghana's forests.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-b-4 border-kente-green hover:shadow-md transition">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-6 text-wood-800">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-wood-900 mb-3">Global Delivery</h3>
              <p className="text-wood-600">We carefully package and ship authentic Ghanaian furniture directly to your doorstep, worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-wood-900 mb-2">Curated Highlights</h2>
              <p className="text-wood-600">Our most coveted pieces this month.</p>
            </div>
            <Link to="/shop" className="text-kente-gold font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Spotlight */}
      <section className="py-20 bg-wood-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-kente-gold opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Meet the Maker: <br/><span className="text-kente-gold">{ARTISANS[0].name}</span></h2>
              <p className="text-wood-200 text-lg leading-relaxed">
                "{ARTISANS[0].bio}"
              </p>
              <div className="pt-6">
                <Link to="/artisans" className="inline-flex items-center gap-2 border border-kente-gold text-kente-gold px-6 py-3 rounded-sm hover:bg-kente-gold hover:text-wood-950 transition font-bold uppercase tracking-wider">
                  View Full Profile
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-kente-gold transform rotate-6 rounded-lg opacity-20"></div>
              <img 
                src={ARTISANS[0].imageUrl} 
                alt="Artisan Portrait" 
                className="relative rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <button className="absolute bottom-6 right-6 bg-white text-wood-950 p-4 rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center">
                <PlayCircle size={32} className="text-kente-red" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
