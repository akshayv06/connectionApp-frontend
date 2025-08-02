import React, { useState } from 'react';

function ConnectionForm() {
  const [formData, setFormData] = useState({
    email: '',
    location: '',
    gender: '',
  });
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://connectionapplicationapi-production.up.railway.app/api/connection/list?page=${page}&size=${size}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error(err);
      alert('Error fetching connections');
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow space-y-4 max-w-2xl">
      <h2 className="text-xl font-semibold">Filtered Connection List</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="email" placeholder="Your Email" className="w-full border p-2" onChange={handleChange} />
        <input name="location" placeholder="Location" className="w-full border p-2" onChange={handleChange} />
        <select name="gender" className="w-full border p-2" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Search</button>
      </form>

      <ul className="space-y-2">
        {results.map((user, idx) => (
          <li key={idx} className="border p-2 rounded">
            <strong>{user.name}</strong> - {user.email} - {user.location} - {user.gender}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConnectionForm;
