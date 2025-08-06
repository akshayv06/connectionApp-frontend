import React, { useEffect, useState } from 'react';
import {
  sendFriendRequest,
  getPendingRequests,
  acceptRequest,
  fetchOtherUsers,
} from '../api/connectionApi';
import { useAuth } from '../contexts/AuthContext';

function Connections() {
  const { user } = useAuth();
  const [pendingRequests, setPendingRequests] = useState([]);
  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
    if (user?.email) {
      getPendingRequests(user.email).then(setPendingRequests);
      fetchOtherUsers(user.email).then(setOtherUsers);
    }
  }, [user]);

  const handleSendRequest = (receiverEmail) => {
    sendFriendRequest(user.email, receiverEmail)
      .then(() => alert('Request sent!'))
      .catch(() => alert('Request already exists or failed.'));
  };

  const handleAccept = (senderEmail) => {
    acceptRequest(senderEmail, user.email)
      .then((msg) => {
        alert(msg);
        return getPendingRequests(user.email);
      })
      .then(setPendingRequests);
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Pending Requests</h1>

      {pendingRequests.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        pendingRequests.map((req) => (
          <div
            key={req.id}
            className="border p-4 my-2 flex justify-between items-center max-w-md mx-auto"
          >
            <p>{req.senderEmail}</p>
            <button
              onClick={() => handleAccept(req.senderEmail)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Accept
            </button>
          </div>
        ))
      )}

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Other Users</h2>
        {otherUsers.length === 0 ? (
          <p>No other users found.</p>
        ) : (
          otherUsers.map((u) => (
            <div
              key={u.email}
              className="border p-4 my-2 flex justify-between items-center max-w-md mx-auto"
            >
              <div>
                <p><strong>{u.name}</strong> ({u.gender})</p>
                <p className="text-sm text-gray-500">{u.city}</p>
              </div>
              <button
                onClick={() => handleSendRequest(u.email)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Send
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Connections;
