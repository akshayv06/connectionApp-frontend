import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faHandshake,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <nav className="bg-blue-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
          ConnectHub
        </Link>

        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="flex items-center hover:text-cyan-400 transition-colors">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/requests" className="flex items-center hover:text-cyan-400 transition-colors">
              <FontAwesomeIcon icon={faHandshake} className="mr-2" />
              Requests
            </Link>
          </li>
          <li>
            <Link to="/connections" className="flex items-center hover:text-cyan-400 transition-colors">
              <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
              Connections
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
