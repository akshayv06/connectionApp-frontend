import React, { useState } from 'react';

function RegisterUser() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', location: '', gender: '',
  });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://connectionapplicationapi-production.up.railway.app/api/connection/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.text();
      alert(result);
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md border max-w-lg">
      <h2 className="text-2xl font-bold text-indigo-700">📝 Register User</h2>

      <input name="name" placeholder="Name" required onChange={handleChange}
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      <input name="email" type="email" placeholder="Email" required onChange={handleChange}
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      <input name="password" type="password" placeholder="Password" required onChange={handleChange}
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      <input name="location" placeholder="Location" onChange={handleChange}
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />

      <select name="gender" onChange={handleChange}
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">
        <option value="">Select Gender</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHER">Other</option>
      </select>

      <button type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
        Register
      </button>
    </form>
  );
}

export default RegisterUser;
