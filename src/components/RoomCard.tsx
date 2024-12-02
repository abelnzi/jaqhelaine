import React, { useState } from 'react';
import { Room } from '../types';
import BookingModal from './BookingModal';

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
        <div className="relative h-64">
          <img 
            src={room.image} 
            alt={room.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{room.title}</h3>
            <span className="text-amber-700 font-semibold">{room.currency}{room.price}/night</span>
          </div>
          <p className="text-gray-600 mb-4">{room.description}</p>
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Amenities:</h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((amenity) => (
                <span 
                  key={amenity}
                  className="text-xs bg-gray-100 px-2 py-1 rounded"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800 transition"
          >
            Book Now
          </button>
        </div>
      </div>
      
      <BookingModal 
        room={room}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}