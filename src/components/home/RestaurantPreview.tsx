import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function RestaurantPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">{t('home.restaurant')}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Experience culinary excellence at our award-winning restaurant.
              Our master chefs create exceptional dishes using the finest ingredients,
              offering a perfect blend of traditional French cuisine and modern gastronomy.
            </p>
            <Link
              to="/restaurant"
              className="inline-block bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition"
            >
              Discover More →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
              alt="Restaurant Interior"
              className="rounded-lg object-cover h-64 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80"
              alt="Signature Dish"
              className="rounded-lg object-cover h-64 w-full mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}