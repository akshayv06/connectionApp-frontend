import React, { useState } from 'react';

function RejectRequest() {
  const [formData, setFormData] = useState({ senderEmail: '', receiverEmail: '' });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://connectionapplicationapi-production.up.railway.app/api/connection/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.text();
      alert(data);
    } catch (err) {
      console.error(err);
      alert('Reject failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow space-y-4 max-w-md">
      <h2 className="text-xl font-semibold">Reject Connection</h2>
      <input name="senderEmail" placeholder="Sender Email" className="w-full border p-2" required onChange={handleChange} />
      <input name="receiverEmail" placeholder="Receiver Email" className="w-full border p-2" required onChange={handleChange} />
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Reject</button>
    </form>
  );
}

export default RejectRequest;
