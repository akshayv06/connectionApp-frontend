import React from 'react';
import SendRequest from './components/SendRequest';
import MatchList from './components/MatchList';
import ConnectionForm from './components/ConnectionForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Connection Application</h1>
      <div className="max-w-xl mx-auto space-y-6">
        <SendRequest />
        <ConnectionForm />
        <MatchList />
      </div>
    </div>
  );
}

export default App;
