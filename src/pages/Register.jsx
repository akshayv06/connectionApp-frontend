import React from 'react';
import RegisterUser from '../components/RegisterUser';

export default function Register() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Register a New User</h2>
      <RegisterUser />
    </div>
  );
}
