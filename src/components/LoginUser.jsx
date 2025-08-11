import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function LoginUser({ onSuccess, onError }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // ✅ Explicitly handle backend's "token: null" case
      if (!res.ok || !data.token) {
        onError?.(data.message || 'Invalid email or password.');
        return;
      }

      // ✅ Successful login
      localStorage.setItem('token', data.token);
      login({ name: data.name, email: data.email });
      onSuccess?.(`Welcome, ${data.name}!`);
      navigate('/');
    } catch (err) {
      console.error('Login error:', err);
      onError?.('Something went wrong. Please try again.');
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
      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
      >
        Login
      </button>
    </form>
  );
}

export default LoginUser;
