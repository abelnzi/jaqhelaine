import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function MeetingRoomsPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80"
                alt="Conference Room"
                className="rounded-lg object-cover h-64 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
                alt="Meeting Space"
                className="rounded-lg object-cover h-64 w-full mt-8"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif mb-6">{t('home.meetingRooms')}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Host your next business meeting or conference in our sophisticated meeting rooms.
              Equipped with state-of-the-art technology and supported by our professional staff,
              we ensure your event's success.
            </p>
            <Link
              to="/meeting-rooms"
              className="inline-block bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition"
            >
              Explore Venues →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}