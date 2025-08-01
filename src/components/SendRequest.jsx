import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = 'https://connectionapplicationapi-production.up.railway.app/api/connection';

const SendRequest = () => {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [message, setMessage] = useState('');

  const sendRequest = async () => {
    try {
      const res = await axios.post(`${API_BASE}/send`, null, {
        params: { senderEmail: sender, receiverEmail: receiver },
      });
      setMessage('Request sent successfully!');
    } catch (err) {
      setMessage('Error sending request.');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">Send Connection Request</h2>
      <input type="email" value={sender} onChange={(e) => setSender(e.target.value)} placeholder="Sender Email" className="border p-2 mb-2 w-full" />
      <input type="email" value={receiver} onChange={(e) => setReceiver(e.target.value)} placeholder="Receiver Email" className="border p-2 mb-2 w-full" />
      <button onClick={sendRequest} className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      <p className="mt-2 text-green-600">{message}</p>
    </div>
  );
};

export default SendRequest;
