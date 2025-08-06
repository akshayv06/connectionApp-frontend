import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  // 👇 This will be used only for nav links (not the title)
  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-semibold underline text-yellow-300'
      : 'hover:text-yellow-200';

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Title without link styling */}
      <div className="text-xl font-bold">
        <NavLink to="/" className="text-white">
          ConnectApp
        </NavLink>
      </div>

      {user && (
        <div className="flex gap-4 items-center">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/profile" className={linkClass}>
            Profile
          </NavLink>
          <NavLink to="/connections" className={linkClass}>
            Connections
          </NavLink>
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
