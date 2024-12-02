import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">{t('home.welcome')}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t('home.welcomeText')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">5-Star Rating</h3>
                <p className="text-sm text-gray-600">Exceptional Service</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Central Location</h3>
                <p className="text-sm text-gray-600">Heart of Paris</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
              alt="Hotel Facade"
              className="rounded-lg object-cover h-64 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80"
              alt="Luxury Suite"
              className="rounded-lg object-cover h-64 w-full mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}