import { Flight } from '../types/types';

export const mockFlights: Flight[] = [
  {
    id: '1',
    price: 15000,
    airline: 'Аэрофлот',
    departureDate: '2024-03-20T10:00:00',
    arrivalDate: '2024-03-20T12:00:00',
    duration: '2:00',
    stops: 0,
    departureCity: 'Москва',
    arrivalCity: 'Санкт-Петербург',
    flightClass: 'economy',
    baggage: true
  },
  {
    id: '2',
    price: 25000,
    airline: 'S7',
    departureDate: '2024-03-20T11:00:00',
    arrivalDate: '2024-03-20T14:30:00',
    duration: '3:30',
    stops: 1,
    departureCity: 'Москва',
    arrivalCity: 'Сочи',
    flightClass: 'economy',
    baggage: true
  },
  {
    id: '3',
    price: 35000,
    airline: 'Победа',
    departureDate: '2024-03-20T09:00:00',
    arrivalDate: '2024-03-20T15:00:00',
    duration: '6:00',
    stops: 2,
    departureCity: 'Москва',
    arrivalCity: 'Владивосток',
    flightClass: 'economy',
    baggage: false
  },
  {
    id: '4',
    price: 45000,
    airline: 'Аэрофлот',
    departureDate: '2024-03-20T12:00:00',
    arrivalDate: '2024-03-20T16:00:00',
    duration: '4:00',
    stops: 1,
    departureCity: 'Санкт-Петербург',
    arrivalCity: 'Новосибирск',
    flightClass: 'business',
    baggage: true
  },
  {
    id: '5',
    price: 18000,
    airline: 'Уральские авиалинии',
    departureDate: '2024-03-20T14:00:00',
    arrivalDate: '2024-03-20T15:30:00',
    duration: '1:30',
    stops: 0,
    departureCity: 'Екатеринбург',
    arrivalCity: 'Москва',
    flightClass: 'economy',
    baggage: true
  },
  {
    id: '6',
    price: 55000,
    airline: 'S7',
    departureDate: '2024-03-20T16:00:00',
    arrivalDate: '2024-03-21T02:00:00',
    duration: '10:00',
    stops: 3,
    departureCity: 'Москва',
    arrivalCity: 'Хабаровск',
    flightClass: 'business',
    baggage: true
  },
  {
    id: '7',
    price: 22000,
    airline: 'Победа',
    departureDate: '2024-03-20T08:00:00',
    arrivalDate: '2024-03-20T10:30:00',
    duration: '2:30',
    stops: 0,
    departureCity: 'Москва',
    arrivalCity: 'Казань',
    flightClass: 'economy',
    baggage: false
  },
  {
    id: '8',
    price: 28000,
    airline: 'Аэрофлот',
    departureDate: '2024-03-20T13:00:00',
    arrivalDate: '2024-03-20T17:00:00',
    duration: '4:00',
    stops: 1,
    departureCity: 'Санкт-Петербург',
    arrivalCity: 'Сочи',
    flightClass: 'economy',
    baggage: true
  },
  {
    id: '9',
    price: 65000,
    airline: 'S7',
    departureDate: '2024-03-20T10:00:00',
    arrivalDate: '2024-03-20T18:00:00',
    duration: '8:00',
    stops: 2,
    departureCity: 'Москва',
    arrivalCity: 'Иркутск',
    flightClass: 'business',
    baggage: true
  },
  {
    id: '10',
    price: 19500,
    airline: 'Уральские авиалинии',
    departureDate: '2024-03-20T11:30:00',
    arrivalDate: '2024-03-20T13:30:00',
    duration: '2:00',
    stops: 0,
    departureCity: 'Екатеринбург',
    arrivalCity: 'Санкт-Петербург',
    flightClass: 'economy',
    baggage: true
  }
]; 