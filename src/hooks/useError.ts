import { useState, useCallback } from 'react';
import { ApiError } from '../types/api';

interface ErrorState {
  message: string;
  code?: string;
  visible: boolean;
}

export const useError = () => {
  const [error, setError] = useState<ErrorState>({
    message: '',
    code: undefined,
    visible: false,
  });

  const showError = useCallback((error: ApiError) => {
    setError({
      message: error.message,
      code: error.code,
      visible: true,
    });

    setTimeout(() => {
      setError(prev => ({ ...prev, visible: false }));
    }, 5000);
  }, []);

  const hideError = useCallback(() => {
    setError(prev => ({ ...prev, visible: false }));
  }, []);

  return { error, showError, hideError };
}; 