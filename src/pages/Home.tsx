import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import RoomPreview from '../components/home/RoomPreview';
import VideoSection from '../components/home/VideoSection';
import EventsPreview from '../components/home/EventsPreview';
import RestaurantPreview from '../components/home/RestaurantPreview';
import MeetingRoomsPreview from '../components/home/MeetingRoomsPreview';
import PoolSection from '../components/home/PoolSection';
import Services from '../components/home/Services';
import Partners from '../components/home/Partners';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Hero />
      <Welcome />
      <RoomPreview />
      <VideoSection />
      <EventsPreview />
      <RestaurantPreview />
      <MeetingRoomsPreview />
      <PoolSection />
      <Services />
      <Partners />
    </div>
  );
}