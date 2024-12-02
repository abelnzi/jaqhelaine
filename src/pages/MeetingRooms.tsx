import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MeetingRooms() {
  const { t } = useTranslation();

  const rooms = [
    {
      name: 'Grand Ballroom',
      capacity: 500,
      size: '800m²',
      image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80'
    },
    {
      name: 'Executive Boardroom',
      capacity: 20,
      size: '50m²',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80'
    },
    {
      name: 'Conference Room A',
      capacity: 100,
      size: '200m²',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white">
            {t('nav.meetingRooms')}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{room.name}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Capacity: {room.capacity} people</li>
                  <li>Size: {room.size}</li>
                </ul>
                <button className="mt-6 w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800 transition">
                  Request Information
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}