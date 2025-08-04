import React from 'react';
import AcceptRequest from '../components/AcceptRequest';
import RejectUser from '../components/RejectUser';

export default function Requests() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Accept Requests</h2>
        <AcceptRequest />
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold text-red-600 mb-4">Reject Requests</h2>
        <RejectUser />
      </div>
    </div>
  );
}
