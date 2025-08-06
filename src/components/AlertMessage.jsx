import React, { useEffect } from 'react';

function AlertMessage({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto-dismiss after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`p-3 rounded text-white ${type === 'success' ? 'bg-green-600' : 'bg-red-600'} mt-4`}>
      {message}
    </div>
  );
}

export default AlertMessage;
