import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from '../Carousel';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen">
      <Carousel />
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            {t('hotel.tagline')}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {t('hotel.subtitle')}
          </p>
          <button className="bg-amber-700 text-white px-8 py-3 rounded-md text-lg hover:bg-amber-800 transition">
            {t('nav.bookNow')}
          </button>
        </div>
      </div>
    </div>
  );
}