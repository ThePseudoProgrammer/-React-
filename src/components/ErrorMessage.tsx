import React from 'react';

interface ErrorMessageProps {
  message: string;
  onClose: () => void;
  visible: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose, visible }) => {
  if (!visible) return null;

  return (
    <div className="error-message">
      <p>{message}</p>
      <button onClick={onClose} className="close-button">
        ×
      </button>
    </div>
  );
};

export default ErrorMessage; 