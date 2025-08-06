import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();              // Clear user from context
    navigate('/auth');     // Redirect to login
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>

      {user ? (
        <div className="bg-gray-100 p-6 rounded shadow inline-block text-left">
          <p className="mb-2"><strong>Name:</strong> {user.name}</p>
          <p className="mb-4"><strong>Email:</strong> {user.email}</p>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mb-2"
          >
            Logout
          </button>

          {/* Optional edit profile */}
          <div className="mt-4">
            <button
              onClick={() => alert('Edit profile coming soon!')}
              className="text-blue-600 underline"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <p className="text-red-500">No user data found.</p>
      )}
    </div>
  );
};

export default Profile;
