import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AcceptRequest from './components/AcceptRequest';
import ConnectionForm from './components/ConnectionForm';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/requests" element={<AcceptRequest />} />
          <Route path="/connections" element={<ConnectionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
