import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { rooms } from '../../data/rooms';

export default function RoomPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">
          {t('home.rooms')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.slice(0, 3).map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700 font-semibold">
                    {room.currency}{room.price}{t('rooms.perNight')}
                  </span>
                  <Link
                    to={`/rooms#${room.id}`}
                    className="text-amber-700 hover:text-amber-800 font-medium"
                  >
                    {t('rooms.bookNow')} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/rooms"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition"
          >
            {t('rooms.title')} →
          </Link>
        </div>
      </div>
    </section>
  );
}