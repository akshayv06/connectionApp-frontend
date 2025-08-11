import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function AlertMessage({ message, type, onClose }) {
  const [visible, setVisible] = useState(false);
  const isSuccess = type === 'success';

  useEffect(() => {
    setVisible(true); // Show with animation

    const timer = setTimeout(() => {
      setVisible(false); // Start hide animation
      setTimeout(onClose, 300); // Fully remove after animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div
      className={`flex items-center p-3 mb-4 rounded-md shadow-lg transition-all duration-300 ease-in-out transform
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
        ${!isSuccess ? 'shake' : ''}
      `}
    >
      {isSuccess ? (
        <FaCheckCircle className="mr-2 text-green-600 text-lg" />
      ) : (
        <FaTimesCircle className="mr-2 text-red-600 text-lg" />
      )}
      <span className="flex-1 font-medium">{message}</span>
      <button
        onClick={onClose}
        className="font-bold text-lg hover:scale-125 transform transition-transform duration-200"
      >
        &times;
      </button>
    </div>
  );
}

export default AlertMessage;
