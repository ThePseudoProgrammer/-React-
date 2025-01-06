import React from 'react';
import { Flight } from '../types/types';

interface FlightCardProps {
  flight: Flight;
  onClick: () => void;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight, onClick }) => {
  return (
    <div className="flight-card" onClick={onClick}>
      <h3>{flight.airline}</h3>
      <div className="flight-info">
        <p>{flight.departureCity} → {flight.arrivalCity}</p>
        <p>Цена: {flight.price} ₽</p>
        <p>Время в пути: {flight.duration}</p>
        <p>Пересадок: {flight.stops}</p>
      </div>
    </div>
  );
};

export default FlightCard; 