import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flight, FilterOptions } from '../types/types';
import FilterPanel from './FilterPanel';
import FlightCard from './FlightCard';
import { mockFlights } from '../mocks/flights';

const FlightList = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    stops: [],
    sortBy: 'price',
    searchQuery: ''
  });
  const navigate = useNavigate();

  const fetchFlights = async () => {
    try {
      setFlights(mockFlights);
      setFilteredFlights(mockFlights);
    } catch (error) {
      console.error('Ошибка при загрузке рейсов:', error);
    }
  };

  const applyFilters = (options: FilterOptions) => {
    let filtered = [...flights];

    // Фильтрация по количеству пересадок
    if (options.stops.length > 0) {
      filtered = filtered.filter(flight => options.stops.includes(flight.stops));
    }

    // Поиск по строке
    if (options.searchQuery) {
      const query = options.searchQuery.toLowerCase();
      filtered = filtered.filter(flight =>
        flight.departureCity.toLowerCase().includes(query) ||
        flight.arrivalCity.toLowerCase().includes(query) ||
        flight.airline.toLowerCase().includes(query)
      );
    }

    // Сортировка
    filtered.sort((a, b) => {
      if (options.sortBy === 'price') {
        return a.price - b.price;
      }
      // Преобразуем длительность в минуты для сортировки
      const getDurationInMinutes = (duration: string) => {
        const [hours, minutes] = duration.split(':').map(Number);
        return hours * 60 + minutes;
      };
      return getDurationInMinutes(a.duration) - getDurationInMinutes(b.duration);
    });

    setFilteredFlights(filtered);
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleFilterChange = (newOptions: FilterOptions) => {
    setFilterOptions(newOptions);
    applyFilters(newOptions);
  };

  const handleFlightClick = (flightId: string) => {
    navigate(`/flight/${flightId}`);
  };

  return (
    <div className="flight-list">
      <FilterPanel options={filterOptions} onChange={handleFilterChange} />
      <div className="flights-grid">
        {filteredFlights.map(flight => (
          <FlightCard 
            key={flight.id} 
            flight={flight} 
            onClick={() => handleFlightClick(flight.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default FlightList; 