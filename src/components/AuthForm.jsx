import React, { useState } from 'react';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';
import AlertMessage from './AlertMessage';

function AuthForm({ initialIsLogin = true }) {
  const [isLogin, setIsLogin] = useState(initialIsLogin);
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); // NEW

  // Show success message
  const handleSuccess = (msg) => {
    setMessage(msg);
    setAlertType('success');
    setTimeout(() => setMessage(''), 3000);
  };

  // Show error message
  const handleError = (msg) => {
    setMessage(msg);
    setAlertType('error');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded font-semibold transition ${
              isLogin ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded font-semibold transition ${
              !isLogin ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Register
          </button>
        </div>

        {/* Alert Message */}
        {message && (
          <AlertMessage
            message={message}
            type={alertType} // use state here
            onClose={() => setMessage('')}
          />
        )}

        {/* Conditional Form */}
        {isLogin ? (
          <LoginUser onSuccess={handleSuccess} onError={handleError} />
        ) : (
          <RegisterUser onSuccess={handleSuccess} onError={handleError} />
        )}
      </div>
    </div>
  );
}

export default AuthForm;
