import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faHome,
  faHandshake,
  faUserFriends,
  faUserPlus,
  faPaperPlane,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-blue-800 text-white p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-cyan-400">
          ConnectHub
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="flex items-center hover:text-cyan-400">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
          </li>

          {/* Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center hover:text-cyan-400 cursor-pointer">
              <FontAwesomeIcon icon={faHandshake} className="mr-2" />
              Requests
            </div>
            {dropdownOpen && (
              <ul className="absolute top-full mt-2 left-0 bg-white text-black rounded shadow-lg z-50 w-48">
                <li>
                  <Link to="/requests/accept" className="block px-4 py-2 hover:bg-blue-100 flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-600" />
                    Accept Request
                  </Link>
                </li>
                <li>
                  <Link to="/requests/reject" className="block px-4 py-2 hover:bg-blue-100 flex items-center">
                    <FontAwesomeIcon icon={faTimesCircle} className="mr-2 text-red-600" />
                    Reject Request
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/connections" className="flex items-center hover:text-cyan-400">
              <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
              Connections
            </Link>
          </li>

          <li>
            <Link to="/send-connection" className="flex items-center hover:text-cyan-400">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send Connection
            </Link>
          </li>

          <li>
            <Link to="/register" className="flex items-center hover:text-cyan-400">
              <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
              Register
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-blue-900 px-4 py-4 space-y-3 text-sm">
          <li>
            <Link to="/" onClick={closeMenu} className="flex items-center hover:text-cyan-400">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={toggleDropdown}
              className="flex items-center w-full hover:text-cyan-400"
            >
              <FontAwesomeIcon icon={faHandshake} className="mr-2" />
              Requests
            </button>
            {dropdownOpen && (
              <ul className="ml-6 mt-1 space-y-1">
                <li>
                  <Link to="/requests/accept" onClick={closeMenu} className="flex items-center hover:text-green-300">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Accept Request
                  </Link>
                </li>
                <li>
                  <Link to="/requests/reject" onClick={closeMenu} className="flex items-center hover:text-red-300">
                    <FontAwesomeIcon icon={faTimesCircle} className="mr-2" />
                    Reject Request
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/connections" onClick={closeMenu} className="flex items-center hover:text-cyan-400">
              <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
              Connections
            </Link>
          </li>
          <li>
            <Link to="/send-connection" onClick={closeMenu} className="flex items-center hover:text-cyan-400">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send Connection
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={closeMenu} className="flex items-center hover:text-cyan-400">
              <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
              Register
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
