import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 'deluxe-suite',
    title: 'Deluxe Suite',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
    price: 450,
    currency: '€',
    description: 'Elegant suite with city views and premium amenities',
    amenities: ['King Size Bed', 'City View', 'Mini Bar', 'Room Service', 'Free Wi-Fi'],
    maxGuests: 2,
    bedType: 'King'
  },
  {
    id: 'presidential-suite',
    title: 'Presidential Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    price: 850,
    currency: '€',
    description: 'Luxurious suite with separate living area and butler service',
    amenities: ['King Size Bed', 'Butler Service', 'Living Room', 'Private Bar', 'Panoramic View'],
    maxGuests: 3,
    bedType: 'King'
  },
  {
    id: 'royal-suite',
    title: 'Royal Suite',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
    price: 1200,
    currency: '€',
    description: 'Ultimate luxury with panoramic views and private terrace',
    amenities: ['King Size Bed', 'Private Terrace', 'Jacuzzi', 'Private Chef', 'Helicopter Transfer'],
    maxGuests: 4,
    bedType: 'Emperor'
  }
];