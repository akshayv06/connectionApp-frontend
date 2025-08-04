import React, { useState } from 'react';

function AcceptRequest() {
  const [formData, setFormData] = useState({ senderEmail: '', receiverEmail: '' });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://connectionapplicationapi-production.up.railway.app/api/connection/accept', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4 text-indigo-600">Accept Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="senderEmail"
          value={formData.senderEmail}
          onChange={handleChange}
          placeholder="Sender Email"
          className="w-full border border-gray-300 rounded-md p-2"
        />
        <input
          name="receiverEmail"
          value={formData.receiverEmail}
          onChange={handleChange}
          placeholder="Receiver Email"
          className="w-full border border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
          Accept
        </button>
      </form>
    </div>
  );
}

export default AcceptRequest;
