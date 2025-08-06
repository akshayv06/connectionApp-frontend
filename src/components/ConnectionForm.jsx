import React, { useState, useEffect, useCallback } from 'react';

function ConnectionForm() {
  const [formData, setFormData] = useState({ email: '', location: '', gender: '' });
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);
  const [size] = useState(10); // Keeping size fixed

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
const API_BASE_URL = process.env.REACT_APP_API_URL;

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(
  `${API_BASE_URL}/connection/list?page=${page}&size=${size}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error(err);
      alert('Error fetching connections');
    }
  }, [formData, page, size]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(0); // Reset to first page on new search
    fetchData();
  };

  useEffect(() => {
    if (formData.email || formData.location || formData.gender) {
      fetchData();
    }
  }, [fetchData, formData.email, formData.location, formData.gender]);

  return (
    <div className="p-4 border rounded-lg shadow space-y-4 max-w-2xl mx-auto bg-white">
      <h2 className="text-xl font-semibold text-indigo-700">Filtered Connection List</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Location"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
        />
        <select
          name="gender"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Search
        </button>
      </form>

      {results.length === 0 ? (
        <p className="text-gray-500 mt-4">No connections found.</p>
      ) : (
        <ul className="space-y-2">
          {results.map((user, idx) => (
            <li key={idx} className="border p-2 rounded bg-gray-50">
              <strong>{user.name}</strong> — {user.email} — {user.location} — {user.gender}
            </li>
          ))}
        </ul>
      )}

      {results.length > 0 && (
        <div className="flex justify-between items-center mt-4">
          <button
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            className="bg-gray-300 text-black px-3 py-1 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>Page {page + 1}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="bg-gray-300 text-black px-3 py-1 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ConnectionForm;
