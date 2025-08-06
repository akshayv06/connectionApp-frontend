// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthForm from './components/AuthForm';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Connections from './pages/Connections';
import PrivateRoute from './utils/PrivateRoute';
import NavBar from './components/NavBar';

function AppContent() {
  const { user } = useAuth();

  return (
    <>
      {user && <NavBar />} {/* ✅ NavBar only after login */}

      <Routes>
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/register" element={<AuthForm initialIsLogin={false} />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/connections"
          element={
            <PrivateRoute>
              <Connections />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<div className="p-10 text-center">404 - Page Not Found</div>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
