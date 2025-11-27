import React, { useState } from 'react';
import { Camera, Send, Sparkles, Loader2 } from 'lucide-react';
import { analyzeCustomOrderImage } from '../services/geminiService';

export const CustomOrder: React.FC = () => {
  const [description, setDescription] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        
        // Trigger AI Analysis
        setIsAnalyzing(true);
        const result = await analyzeCustomOrderImage(base64String);
        setAnalysis(result);
        setIsAnalyzing(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-wood-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="bg-kente-gold text-wood-950 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-4 inline-block">
            Bespoke Service
          </span>
          <h1 className="text-4xl font-bold text-wood-950 mb-4">Custom Commission Request</h1>
          <p className="text-wood-600">
            Have a specific design in mind? Our artisans can bring your vision to life. 
            Upload a sketch or inspiration photo, and our AI assistant will help generate technical specifications for the craftsman.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-wood-100">
          <div className="p-8 md:p-12">
            
            {/* Step 1: Upload */}
            <div className="mb-8">
              <label className="block text-lg font-bold text-wood-900 mb-3">1. Upload Inspiration (Sketch/Photo)</label>
              <div className="border-2 border-dashed border-wood-300 rounded-lg p-8 text-center hover:bg-wood-50 transition relative group">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center text-wood-600 mb-4 group-hover:scale-110 transition-transform">
                    <Camera size={32} />
                  </div>
                  <p className="text-wood-700 font-medium">Click to upload or drag and drop</p>
                  <p className="text-wood-400 text-sm mt-1">JPG, PNG up to 5MB</p>
                </div>
              </div>
            </div>

            {/* Preview & Analysis */}
            {imagePreview && (
              <div className="mb-8 bg-wood-50 p-6 rounded-lg border border-wood-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <img src={imagePreview} alt="Preview" className="w-full md:w-48 h-48 object-cover rounded-md border border-wood-200" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles size={18} className="text-kente-gold" />
                      <h3 className="font-bold text-wood-900">AI Technical Analysis</h3>
                    </div>
                    {isAnalyzing ? (
                      <div className="flex items-center gap-3 text-wood-600 py-4">
                        <Loader2 className="animate-spin" />
                        <span>Analyzing wood types and dimensions...</span>
                      </div>
                    ) : (
                      <div className="prose prose-sm text-wood-700 max-w-none">
                        <textarea 
                          className="w-full h-32 p-3 border border-wood-300 rounded-md bg-white focus:ring-2 focus:ring-kente-gold focus:border-transparent"
                          value={analysis}
                          onChange={(e) => setAnalysis(e.target.value)}
                        />
                        <p className="text-xs text-wood-400 mt-2">*Review and edit the AI suggestion before sending.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Form Details */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-wood-700 mb-2">Full Name</label>
                  <input type="text" className="w-full p-3 border border-wood-200 rounded-sm focus:border-kente-gold focus:ring-1 focus:ring-kente-gold outline-none" placeholder="Kwame Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-wood-700 mb-2">Email Address</label>
                  <input type="email" className="w-full p-3 border border-wood-200 rounded-sm focus:border-kente-gold focus:ring-1 focus:ring-kente-gold outline-none" placeholder="kwame@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <label className="block text-sm font-bold text-wood-700 mb-2">Budget Range (USD)</label>
                  <select className="w-full p-3 border border-wood-200 rounded-sm focus:border-kente-gold focus:ring-1 focus:ring-kente-gold outline-none bg-white">
                    <option>$200 - $500</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500+</option>
                  </select>
                </div>
                 <div>
                  <label className="block text-sm font-bold text-wood-700 mb-2">Desired Delivery Date</label>
                  <input type="date" className="w-full p-3 border border-wood-200 rounded-sm focus:border-kente-gold focus:ring-1 focus:ring-kente-gold outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-wood-700 mb-2">Additional Notes</label>
                <textarea 
                  rows={4} 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 border border-wood-200 rounded-sm focus:border-kente-gold focus:ring-1 focus:ring-kente-gold outline-none" 
                  placeholder="Describe finish preference, specific room details, etc."
                ></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-wood-950 text-white font-bold uppercase tracking-wider py-4 rounded-sm hover:bg-wood-800 transition flex justify-center items-center gap-3">
                  <Send size={20} /> Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
