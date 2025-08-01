import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = 'https://connectionapplicationapi-production.up.railway.app/api/connection';

const MatchList = () => {
  const [email, setEmail] = useState('');
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState('');

  const fetchMatches = async () => {
    try {
      const res = await axios.get(`${API_BASE}/getMatches`, {
        params: { email }
      });
      setMatches(res.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch matches.');
      setMatches([]);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Matched Connections</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="border p-2 mb-2 w-full" />
      <button onClick={fetchMatches} className="bg-green-600 text-white px-4 py-2 rounded">Fetch Matches</button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      <ul className="mt-2 list-disc pl-4">
        {matches.map((match, idx) => <li key={idx}>{match}</li>)}
      </ul>
    </div>
  );
};

export default MatchList;

