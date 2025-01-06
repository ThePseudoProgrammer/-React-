import React, { useState } from 'react';
import { FilterOptions } from '../types/types';

interface FilterPanelProps {
  options: FilterOptions;
  onChange: (options: FilterOptions) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ options, onChange }) => {
  const handleStopsChange = (stops: number) => {
    const newStops = options.stops.includes(stops)
      ? options.stops.filter(s => s !== stops)
      : [...options.stops, stops];
    
    onChange({ ...options, stops: newStops });
  };

  const handleSortChange = (sortBy: 'price' | 'duration') => {
    onChange({ ...options, sortBy });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...options, searchQuery: event.target.value });
  };

  return (
    <div className="filter-panel">
      <div className="search-box">
        <input
          type="text"
          placeholder="Поиск рейсов..."
          value={options.searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="stops-filter">
        <h4>Количество пересадок:</h4>
        {[0, 1, 2, 3].map(stops => (
          <label key={stops} className="checkbox-label">
            <input
              type="checkbox"
              checked={options.stops.includes(stops)}
              onChange={() => handleStopsChange(stops)}
            />
            {stops === 0 ? 'Без пересадок' : `${stops} пересадк${stops === 1 ? 'а' : 'и'}`}
          </label>
        ))}
      </div>

      <div className="sort-options">
        <h4>Сортировать по:</h4>
        <div className="sort-buttons">
          <button
            className={`sort-button ${options.sortBy === 'price' ? 'active' : ''}`}
            onClick={() => handleSortChange('price')}
          >
            Цене
          </button>
          <button
            className={`sort-button ${options.sortBy === 'duration' ? 'active' : ''}`}
            onClick={() => handleSortChange('duration')}
          >
            Времени в пути
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel; 