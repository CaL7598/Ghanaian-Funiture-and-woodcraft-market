import React, { useState } from 'react';
import { useCart } from '../App';
import { Trash2, Lock, CreditCard, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50;
  const total = subtotal + shipping;

  if (cart.length === 0 && step === 1) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-wood-900 mb-4">Your cart is empty</h2>
        <p className="text-wood-600 mb-8">Looks like you haven't found the perfect piece yet.</p>
        <Link to="/shop" className="bg-kente-gold text-wood-950 px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-yellow-500 transition">
          Start Shopping
        </Link>
      </div>
    );
  }

  const Step1Cart = () => (
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-2/3 space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm border border-wood-100">
            <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-wood-900">{item.name}</h3>
                <p className="text-xs text-wood-500 uppercase">{item.woodType} Wood</p>
              </div>
              <div className="flex justify-between items-end">
                <span className="font-medium text-wood-800">${item.price} x {item.quantity}</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-1/3">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-wood-100 sticky top-24">
          <h3 className="font-bold text-xl text-wood-900 mb-6">Order Summary</h3>
          <div className="space-y-3 mb-6 border-b border-wood-100 pb-6">
            <div className="flex justify-between text-wood-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-wood-600">
              <span>Shipping (Intl.)</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between text-xl font-bold text-wood-900 mb-8">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button 
            onClick={() => setStep(2)}
            className="w-full bg-wood-950 text-white py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-wood-800 transition flex items-center justify-center gap-2"
          >
            Checkout <Lock size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  const Step2Checkout = () => (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border border-wood-100">
      <h3 className="font-bold text-2xl text-wood-900 mb-6 flex items-center gap-2">
        <CreditCard className="text-kente-gold" /> Payment & Shipping
      </h3>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
        <div className="grid grid-cols-2 gap-4">
          <input required type="text" placeholder="First Name" className="p-3 border rounded-sm w-full outline-none focus:border-kente-gold" />
          <input required type="text" placeholder="Last Name" className="p-3 border rounded-sm w-full outline-none focus:border-kente-gold" />
        </div>
        <input required type="text" placeholder="Address" className="p-3 border rounded-sm w-full outline-none focus:border-kente-gold" />
        <div className="grid grid-cols-2 gap-4">
          <input required type="text" placeholder="City" className="p-3 border rounded-sm w-full outline-none focus:border-kente-gold" />
          <input required type="text" placeholder="Postal Code" className="p-3 border rounded-sm w-full outline-none focus:border-kente-gold" />
        </div>
        
        <div className="border-t border-wood-100 my-6 pt-6">
          <p className="font-bold text-wood-900 mb-4">Payment Method</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 border p-3 rounded-md w-full cursor-pointer hover:border-kente-gold">
              <input type="radio" name="payment" defaultChecked className="text-kente-gold" />
              <span>Credit Card</span>
            </label>
            <label className="flex items-center gap-2 border p-3 rounded-md w-full cursor-pointer hover:border-kente-gold">
              <input type="radio" name="payment" className="text-kente-gold" />
              <span>Mobile Money</span>
            </label>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-kente-gold text-wood-950 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-yellow-500 transition mt-6"
        >
          Pay ${total.toFixed(2)}
        </button>
      </form>
    </div>
  );

  const Step3Success = () => (
    <div className="text-center py-16">
      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={48} />
      </div>
      <h2 className="text-3xl font-bold text-wood-900 mb-4">Thank You!</h2>
      <p className="text-wood-600 mb-8">Your order has been placed successfully. Our artisans are preparing your items.</p>
      <Link to="/" className="text-kente-gold font-bold underline">Return Home</Link>
    </div>
  );

  return (
    <div className="bg-wood-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-wood-950 mb-12 border-b border-wood-200 pb-4">
          {step === 1 ? 'Shopping Cart' : step === 2 ? 'Checkout' : 'Order Confirmed'}
        </h1>
        {step === 1 && <Step1Cart />}
        {step === 2 && <Step2Checkout />}
        {step === 3 && <Step3Success />}
      </div>
    </div>
  );
};
