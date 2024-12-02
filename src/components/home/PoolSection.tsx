import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PoolSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
          alt="Swimming Pool"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h2 className="text-3xl font-serif mb-6">{t('hotel.pool')}</h2>
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            Immerse yourself in tranquility at our stunning indoor pool.
            Whether you're seeking a refreshing morning swim or a peaceful
            evening dip, our pool area provides the perfect escape.
          </p>
          <ul className="grid grid-cols-2 gap-4 text-sm">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span>Temperature controlled</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span>Open daily 6AM-10PM</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span>Professional lifeguard</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span>Poolside service</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}