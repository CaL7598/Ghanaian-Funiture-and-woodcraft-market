import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../App';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-wood-100">
      <div className="relative h-64 overflow-hidden bg-wood-50">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 gap-4">
          <button 
            onClick={() => addToCart(product)}
            className="bg-white text-wood-900 p-3 rounded-full hover:bg-kente-gold hover:text-white transition-colors"
            title="Add to Cart"
          >
            <ShoppingCart size={20} />
          </button>
          <button 
            className="bg-white text-wood-900 p-3 rounded-full hover:bg-wood-900 hover:text-white transition-colors"
             title="Quick View"
          >
            <Eye size={20} />
          </button>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 text-xs font-bold uppercase tracking-wider text-wood-800 rounded-sm">
          {product.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-wood-900 leading-tight group-hover:text-kente-gold transition-colors">{product.name}</h3>
        </div>
        <p className="text-wood-500 text-xs uppercase tracking-wide mb-3">{product.woodType} Wood</p>
        <p className="text-wood-600 text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center pt-4 border-t border-wood-100 mt-auto">
          <span className="text-xl font-bold text-wood-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="text-xs font-semibold uppercase tracking-wider text-kente-gold hover:text-wood-900 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
