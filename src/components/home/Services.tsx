import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wifi, Car, Coffee, Headphones, Dumbbell } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { icon: Wifi, name: 'services.wifi' },
    { icon: Car, name: 'services.parking' },
    { icon: Coffee, name: 'services.roomService' },
    { icon: Headphones, name: 'services.concierge' },
    { icon: Dumbbell, name: 'services.gym' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">
          {t('hotel.services')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition"
            >
              <service.icon className="h-8 w-8 text-amber-700 mb-4" />
              <span className="text-gray-900">{t(service.name)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}