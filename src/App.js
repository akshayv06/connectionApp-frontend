import React from 'react';
import SendConnectionRequest from './components/SendConnectionRequest';
import RegisterUser from './components/RegisterUser';
import RejectRequest from './components/RejectUser';
import AcceptRequest from './components/AcceptRequest';
import ConnectionForm from './components/ConnectionForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Connection Application</h1>
      <div className="max-w-xl mx-auto space-y-6">
        <SendConnectionRequest />
        <ConnectionForm />
        {/* <AcceptRequest/> */}
        <RegisterUser/>
        <RejectRequest/>
      </div>
    </div>
  );
}

export default App;
