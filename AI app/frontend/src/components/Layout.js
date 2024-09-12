import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Job Portal</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/support" className="hover:underline">Support</Link></li>
              {isAuthenticated ? (
                <>
                  <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
                  <li><Link to="/profile" className="hover:underline">Profile</Link></li>
                  <li><Button onClick={handleLogout} variant="outline">Logout</Button></li>
                </>
              ) : (
                <li><Link to="/" className="hover:underline">Login</Link></li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center">
          © 2023 Job Portal. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;