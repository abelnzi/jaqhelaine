import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Experience Luxury in the Heart of Paris
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Where timeless elegance meets modern comfort
          </p>
          <button className="bg-amber-700 text-white px-8 py-3 rounded-md text-lg hover:bg-amber-800 transition">
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
  );
}