import { Flight } from './types';

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface BookingRequest {
  flightId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  passport: string;
}

export interface BookingResponse {
  bookingId: string;
  status: 'confirmed' | 'pending' | 'failed';
  flightDetails: Flight;
  passengerDetails: {
    firstName: string;
    lastName: string;
    email: string;
  };
} 