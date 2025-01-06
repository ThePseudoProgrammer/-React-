import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightList from './components/FlightList';
import FlightDetails from './components/FlightDetails';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<FlightList />} />
          <Route path="/flight/:id" element={<FlightDetails />} />
          <Route path="/booking/:id" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 