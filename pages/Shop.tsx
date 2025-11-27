import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { Category, WoodType } from '../types';
import { Filter, SlidersHorizontal } from 'lucide-react';

export const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedWood, setSelectedWood] = useState<WoodType | 'All'>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const woodMatch = selectedWood === 'All' || product.woodType === selectedWood;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && woodMatch && priceMatch;
    });
  }, [selectedCategory, selectedWood, priceRange]);

  return (
    <div className="bg-wood-50 min-h-screen pb-20">
      <div className="bg-wood-900 text-white py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">The Marketplace</h1>
          <p className="text-wood-300">Browse authentic handcrafted Ghanaian treasures</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-wood-100 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-wood-900 border-b border-wood-100 pb-2">
                <Filter size={20} />
                <h3 className="font-bold uppercase tracking-wider">Filters</h3>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-wood-700 mb-3 uppercase tracking-wide">Category</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={selectedCategory === 'All'}
                      onChange={() => setSelectedCategory('All')}
                      className="text-kente-gold focus:ring-kente-gold"
                    />
                    <span className="text-wood-600 text-sm">All Items</span>
                  </label>
                  {Object.values(Category).map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="text-kente-gold focus:ring-kente-gold"
                      />
                      <span className="text-wood-600 text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Wood Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-wood-700 mb-3 uppercase tracking-wide">Wood Type</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="wood" 
                      checked={selectedWood === 'All'}
                      onChange={() => setSelectedWood('All')}
                      className="text-kente-gold focus:ring-kente-gold"
                    />
                    <span className="text-wood-600 text-sm">All Woods</span>
                  </label>
                  {Object.values(WoodType).map(wood => (
                    <label key={wood} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="wood" 
                        checked={selectedWood === wood}
                        onChange={() => setSelectedWood(wood)}
                        className="text-kente-gold focus:ring-kente-gold"
                      />
                      <span className="text-wood-600 text-sm">{wood}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter (Simple implementation) */}
              <div>
                <h4 className="text-sm font-bold text-wood-700 mb-3 uppercase tracking-wide">Max Price: ${priceRange[1]}</h4>
                <input 
                  type="range" 
                  min="0" 
                  max="1000" 
                  step="50"
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full h-2 bg-wood-200 rounded-lg appearance-none cursor-pointer accent-kente-gold"
                />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6 lg:hidden">
               <button 
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-sm shadow-sm text-wood-900 font-bold"
               >
                 <SlidersHorizontal size={18} /> Filters
               </button>
               <span className="text-sm text-wood-500">{filteredProducts.length} Results</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-xl text-wood-500">No products found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedWood('All');
                      setPriceRange([0, 1000]);
                    }}
                    className="mt-4 text-kente-gold font-bold underline"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
