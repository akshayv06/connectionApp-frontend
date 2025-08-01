import React, { useState } from "react";
import axios from "axios";

const ConnectionForm = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://connectionapplicationapi-production.up.railway.app/api/connection/send",
      {
        senderEmail,
        receiverEmail,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setMessage("Request sent successfully!");
    console.log(response.data);
  } catch (error) {
    console.error("Error sending request:", error);
    setMessage("Failed to send request.");
  }
};

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Send Connection Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          placeholder="Sender Email"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          value={receiverEmail}
          onChange={(e) => setReceiverEmail(e.target.value)}
          placeholder="Receiver Email"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Request
        </button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default ConnectionForm;
