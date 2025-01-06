import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Flight } from '../types/types';
import { mockFlights } from '../mocks/flights';

const FlightDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [flight, setFlight] = useState<Flight | null>(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const foundFlight = mockFlights.find(f => f.id === id);
        if (!foundFlight) {
          throw new Error('Рейс не найден');
        }
        setFlight(foundFlight);
      } catch (error) {
        console.error('Ошибка при загрузке деталей рейса:', error);
        navigate('/');
      }
    };

    fetchFlightDetails();
  }, [id, navigate]);

  const handleBooking = () => {
    if (flight) {
      navigate(`/booking/${flight.id}`);
    }
  };

  if (!flight) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="flight-details">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Назад к списку
      </button>

      <div className="flight-details-card">
        <h2>{flight.airline}</h2>
        
        <div className="route-info">
          <div className="departure">
            <h3>Вылет</h3>
            <p className="city">{flight.departureCity}</p>
            <p className="time">{new Date(flight.departureDate).toLocaleTimeString()}</p>
            <p className="date">{new Date(flight.departureDate).toLocaleDateString()}</p>
          </div>

          <div className="flight-duration">
            <p>{flight.duration}</p>
            <div className="flight-line">
              {flight.stops > 0 && (
                <span className="stops">
                  {flight.stops} пересадк{flight.stops === 1 ? 'а' : 'и'}
                </span>
              )}
            </div>
          </div>

          <div className="arrival">
            <h3>Прилет</h3>
            <p className="city">{flight.arrivalCity}</p>
            <p className="time">{new Date(flight.arrivalDate).toLocaleTimeString()}</p>
            <p className="date">{new Date(flight.arrivalDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flight-info">
          <p className="class">Класс: {flight.flightClass === 'economy' ? 'Эконом' : 'Бизнес'}</p>
          <p className="baggage">Багаж: {flight.baggage ? 'Включен' : 'Не включен'}</p>
        </div>

        <div className="price-section">
          <p className="price">{flight.price} ₽</p>
          <button className="book-button" onClick={handleBooking}>
            Забронировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails; 