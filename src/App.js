import React from 'react';
import { Toaster } from 'react-hot-toast';
import {
  UserPlus, Send, Sliders, ThumbsUp, ThumbsDown,
} from 'lucide-react';

import RegisterUser from './components/RegisterUser';
import SendConnectionRequest from './components/SendConnectionRequest';
import ConnectionForm from './components/ConnectionForm';
import AcceptRequest from './components/AcceptRequest';
import RejectUser from './components/RejectUser';

const navItems = [
  { id: 'register', label: 'Register User', icon: <UserPlus size={18} /> },
  { id: 'send', label: 'Send Request', icon: <Send size={18} /> },
  { id: 'custom', label: 'Custom Form', icon: <Sliders size={18} /> },
  { id: 'actions', label: 'Request Actions', icon: <ThumbsUp size={18} /> },
];

function App() {
  return (
    <div className="min-h-screen font-montserrat bg-gradient-to-br from-indigo-100 via-white to-purple-100 scroll-smooth">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-indigo-200 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-indigo-600 tracking-tight">🔗 ConnectHub</h1>
          <ul className="flex space-x-6 text-sm font-semibold text-gray-600">
            {navItems.map(({ id, label, icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-700 transition"
                >
                  {icon} {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 space-y-20">
        <Toaster position="top-right" reverseOrder={false} />

        {/* Register User */}
        <section id="register" className="glass-card">
          <div className="section-header text-indigo-700">
            <UserPlus size={22} />
            <span>Register New User</span>
          </div>
          <RegisterUser />
        </section>

        {/* Send Request */}
        <section id="send" className="glass-card">
          <div className="section-header text-indigo-700">
            <Send size={22} />
            <span>Send Connection Request</span>
          </div>
          <SendConnectionRequest apiType="send" />
        </section>

        {/* Custom Form */}
        <section id="custom" className="glass-card">
          <div className="section-header text-indigo-700">
            <Sliders size={22} />
            <span>Custom Connection Form</span>
          </div>
          <ConnectionForm />
        </section>

        {/* Actions */}
        <section id="actions" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card border border-green-200 hover:shadow-green-200">
            <div className="section-header text-green-700">
              <ThumbsUp size={22} />
              <span>Accept Request</span>
            </div>
            <AcceptRequest />
          </div>

          <div className="glass-card border border-red-200 hover:shadow-red-200">
            <div className="section-header text-red-600">
              <ThumbsDown size={22} />
              <span>Reject Request</span>
            </div>
            <RejectUser />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
