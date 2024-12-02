import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Restaurant() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white">
            {t('hotel.restaurant')}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif mb-6">Fine Dining Experience</h2>
            <p className="text-gray-600 mb-6">
              Experience culinary excellence at our award-winning restaurant.
              Our master chefs create exceptional dishes using the finest ingredients,
              offering a perfect blend of traditional French cuisine and modern gastronomy.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Opening Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Breakfast: 7:00 AM - 10:30 AM</li>
                <li>Lunch: 12:00 PM - 2:30 PM</li>
                <li>Dinner: 7:00 PM - 10:30 PM</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80"
              alt="Signature Dish"
              className="rounded-lg w-full h-80 object-cover"
            />
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
                alt="Restaurant Interior"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80"
                alt="Wine Selection"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}