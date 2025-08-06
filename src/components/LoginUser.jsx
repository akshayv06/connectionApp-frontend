import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function LoginUser({ onSuccess }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://connectionapplicationapi-production.up.railway.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Login failed');
        return;
      }

      localStorage.setItem('token', data.token);
      login({ name: data.name, email: data.email });
      onSuccess?.(`Welcome, ${data.name}!`);
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border border-gray-300 rounded-md p-2"
        required
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full border border-gray-300 rounded-md p-2"
        required
      />
      <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
        Login
      </button>
    </form>
  );
}

export default LoginUser;
