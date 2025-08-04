import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AcceptRequest from './components/AcceptRequest';
import ConnectionForm from './components/ConnectionForm';
import SendConnectionRequest from './components/SendConnectionRequest';
import RejectRequest from './components/RejectRequest'; // 👈 Add this if exists
import RegisterUser from './components/RegisterUser'; // 
function App() {
  return (
    <Router>
      <NavBar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/requests" element={<AcceptRequest />} />
          <Route path="/requests/accept" element={<AcceptRequest />} />
          <Route path="/requests/reject" element={<RejectRequest />} /> {/* 👈 Add this */}
          <Route path="/connections" element={<ConnectionForm />} />
          <Route path="/send-connection" element={<SendConnectionRequest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
