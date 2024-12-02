import React from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, Link } from 'react-router-dom';

function EventCategory({ title, description, images }: {
  title: string;
  description: string;
  images: string[];
}) {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif mb-6">{title}</h2>
        <p className="text-gray-600 mb-12 max-w-3xl">{description}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} ${index + 1}`}
              className="rounded-lg w-full h-64 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white">
            {t('nav.events')}
          </h1>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <Link to="/events/weddings" className="py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-amber-700">
              {t('nav.weddings')}
            </Link>
            <Link to="/events/meetings" className="py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-amber-700">
              {t('nav.meetings')}
            </Link>
            <Link to="/events/workshops" className="py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-amber-700">
              {t('nav.workshops')}
            </Link>
            <Link to="/events/cocktails" className="py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-amber-700">
              {t('nav.cocktails')}
            </Link>
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="weddings" element={
          <EventCategory
            title="Weddings"
            description="Create unforgettable memories in our elegant wedding venues."
            images={[
              'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80'
            ]}
          />
        } />
        <Route path="meetings" element={
          <EventCategory
            title="Meetings & Seminars"
            description="Professional spaces for productive business gatherings."
            images={[
              'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80'
            ]}
          />
        } />
        <Route path="workshops" element={
          <EventCategory
            title="Workshops"
            description="Inspiring spaces for creative and educational workshops."
            images={[
              'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80'
            ]}
          />
        } />
        <Route path="cocktails" element={
          <EventCategory
            title="Cocktails & Receptions"
            description="Sophisticated venues for social gatherings and celebrations."
            images={[
              'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80'
            ]}
          />
        } />
      </Routes>
    </div>
  );
}