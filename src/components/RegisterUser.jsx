import React, { useState } from 'react';

function RegisterUser({ onSuccess }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_BASE = `${process.env.REACT_APP_API_URL || 'http://localhost:8080/api'}`;

    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Registration failed');
        return;
      }

      onSuccess?.('Registration successful! Please log in.');
    } catch (err) {
      console.error(err);
      alert('Something went wrong during registration.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full border border-gray-300 rounded-md p-2"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        className="w-full border border-gray-300 rounded-md p-2"
        required
      />
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        type="password"
        className="w-full border border-gray-300 rounded-md p-2"
        required
      />
      <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
        Register
      </button>
    </form>
  );
}

export default RegisterUser;
