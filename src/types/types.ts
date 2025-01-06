export interface Flight {
  id: string;
  price: number;
  airline: string;
  departureDate: string;
  arrivalDate: string;
  duration: string;
  stops: number;
  departureCity: string;
  arrivalCity: string;
  flightClass: 'economy' | 'business';
  baggage: boolean;
}

export interface FilterOptions {
  stops: number[];
  sortBy: 'price' | 'duration';
  searchQuery: string;
} 