export interface Room {
  id: string;
  title: string;
  image: string;
  price: number;
  currency: string;
  description: string;
  amenities: string[];
  maxGuests: number;
  bedType: string;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
}