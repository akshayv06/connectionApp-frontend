import React, { useState, useEffect } from 'react';

function SendConnectionRequest({ apiType }) {
  const [formData, setFormData] = useState({
    senderEmail: '',
    receiverEmail: ''
  });

  // Load saved emails from localStorage on component mount
  useEffect(() => {
    const savedSender = localStorage.getItem('senderEmail');
    const savedReceiver = localStorage.getItem('receiverEmail');
    setFormData((prev) => ({
      ...prev,
      senderEmail: savedSender || '',
      receiverEmail: savedReceiver || '',
    }));
  }, []);

  const saveEmailsToLocalStorage = () => {
    localStorage.setItem('senderEmail', formData.senderEmail);
    localStorage.setItem('receiverEmail', formData.receiverEmail);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    saveEmailsToLocalStorage();

    const apiUrl =
      apiType === 'send'
        ? 'https://connectionapplicationapi-production.up.railway.app/api/connection/send'
        : 'https://connectionapplicationapi-production.up.railway.app/api/connection/connectWithDetails';

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderEmail: formData.senderEmail,
          receiverEmail: formData.receiverEmail,
        }),
      });

      const data = await res.json();
      console.log('Response:', data);
      alert('Request sent successfully!');
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow space-y-4 max-w-md">
      <h2 className="text-xl font-semibold">Connection Request ({apiType})</h2>

      <input
        type="email"
        name="senderEmail"
        value={formData.senderEmail}
        onChange={handleChange}
        placeholder="Sender Email"
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        name="receiverEmail"
        value={formData.receiverEmail}
        onChange={handleChange}
        placeholder="Receiver Email"
        required
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send Request
      </button>
    </form>
  );
}

export default SendConnectionRequest;
