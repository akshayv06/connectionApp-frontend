import React, { useState } from 'react';

function RegisterUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
    gender: '',
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
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow space-y-4 max-w-md">
      <h2 className="text-xl font-semibold">Register User</h2>
      <input name="name" placeholder="Name" className="w-full border p-2" required onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" className="w-full border p-2" required onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" className="w-full border p-2" required onChange={handleChange} />
      <input name="location" placeholder="Location" className="w-full border p-2" onChange={handleChange} />
      <select name="gender" className="w-full border p-2" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHER">Other</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
}

export default RegisterUser;
