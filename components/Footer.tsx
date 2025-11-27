import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-wood-950 text-wood-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-wider">AKAN</h3>
            <p className="text-sm leading-relaxed text-wood-300">
              Connecting the world to the master craftsmanship of Ghanaian artisans. Authentic, sustainable, and handmade with soul.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-kente-gold transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-kente-gold transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-kente-gold transition"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-kente-gold">All Products</Link></li>
              <li><Link to="/shop" className="hover:text-kente-gold">Furniture</Link></li>
              <li><Link to="/shop" className="hover:text-kente-gold">Decor</Link></li>
              <li><Link to="/custom" className="hover:text-kente-gold">Custom Orders</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/artisans" className="hover:text-kente-gold">Our Artisans</Link></li>
              <li><Link to="/gallery" className="hover:text-kente-gold">Gallery</Link></li>
              <li><Link to="/" className="hover:text-kente-gold">About Us</Link></li>
              <li><Link to="/" className="hover:text-kente-gold">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-kente-gold" />
                <span>Osu, Oxford Street<br/>Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-kente-gold" />
                <span>+233 20 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-kente-gold" />
                <span>hello@akanwoodworks.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wood-800 mt-12 pt-8 text-center text-xs text-wood-400">
          <p>&copy; {new Date().getFullYear()} Akan Woodworks Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
