import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiService } from '../services/api';
import { useError } from '../hooks/useError';
import ErrorMessage from './ErrorMessage';
import { BookingRequest } from '../types/api';

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  passport: string;
}

const BookingForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passport: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { error, showError, hideError } = useError();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const bookingData: BookingRequest = {
        flightId: id!,
        ...formData
      };

      const response = await apiService.createBooking(bookingData);
      
      if (response.status === 'confirmed') {
        setIsSubmitted(true);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        showError({
          message: 'Не удалось подтвердить бронирование. Попробуйте позже.',
          code: 'BOOKING_FAILED'
        });
      }
    } catch (error: any) {
      showError(error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="booking-success">
        <div className="success-message">
          <h2>Бронирование успешно!</h2>
          <p>Мы отправили детали бронирования на ваш email.</p>
          <p>Вы будете перенаправлены на главную страницу через несколько секунд...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-form-container">
      <ErrorMessage 
        message={error.message}
        visible={error.visible}
        onClose={hideError}
      />
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Форма бронирования</h2>
        
        <div className="form-group">
          <label htmlFor="firstName">Имя</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Фамилия</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="passport">Номер паспорта</label>
          <input
            type="text"
            id="passport"
            name="passport"
            value={formData.passport}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Подтвердить бронирование
        </button>
      </form>
    </div>
  );
};

export default BookingForm; 