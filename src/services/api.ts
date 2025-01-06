import { Flight, FilterOptions } from '../types/types';
import { ApiResponse, ApiError, BookingRequest, BookingResponse } from '../types/api';
import { mockFlights } from '../mocks/flights';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

class ApiService {
  private async fetchWithError<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw {
          message: data.message || 'Произошла ошибка при выполнении запроса',
          status: response.status,
          code: data.code,
        } as ApiError;
      }

      return {
        data,
        status: response.status,
        message: data.message,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw {
          message: error.message,
          status: 500,
          code: 'NETWORK_ERROR',
        } as ApiError;
      }
      throw error;
    }
  }

  async getFlights(filters?: FilterOptions): Promise<Flight[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filtered = [...mockFlights];
    
    if (filters) {
      if (filters.stops.length) {
        filtered = filtered.filter(flight => filters.stops.includes(flight.stops));
      }
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        filtered = filtered.filter(flight =>
          flight.departureCity.toLowerCase().includes(query) ||
          flight.arrivalCity.toLowerCase().includes(query) ||
          flight.airline.toLowerCase().includes(query)
        );
      }
      if (filters.sortBy === 'price') {
        filtered.sort((a, b) => a.price - b.price);
      } else {
        filtered.sort((a, b) => {
          const getDurationInMinutes = (duration: string) => {
            const [hours, minutes] = duration.split(':').map(Number);
            return hours * 60 + minutes;
          };
          return getDurationInMinutes(a.duration) - getDurationInMinutes(b.duration);
        });
      }
    }
    
    return filtered;
  }

  async getFlightById(id: string): Promise<Flight> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const flight = mockFlights.find(f => f.id === id);
    if (!flight) {
      throw {
        message: 'Рейс не найден',
        status: 404,
        code: 'FLIGHT_NOT_FOUND'
      } as ApiError;
    }
    return flight;
  }

  async createBooking(bookingData: BookingRequest): Promise<BookingResponse> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      bookingId: Math.random().toString(36).substr(2, 9),
      status: 'confirmed',
      flightDetails: mockFlights.find(f => f.id === bookingData.flightId)!,
      passengerDetails: {
        firstName: bookingData.firstName,
        lastName: bookingData.lastName,
        email: bookingData.email
      }
    };
  }
}

export const apiService = new ApiService(); 