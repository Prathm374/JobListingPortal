import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">JobPortal</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/jobs" className="text-text hover:text-primary">Jobs</Link></li>
              <li><Link to="/dashboard" className="text-text hover:text-primary">Dashboard</Link></li>
              <li><Link to="/profile" className="text-text hover:text-primary">Profile</Link></li>
              <li><Link to="/about" className="text-text hover:text-primary">About</Link></li>
              <li><Link to="/support" className="text-text hover:text-primary">Support</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 text-center text-text">
          &copy; 2023 JobPortal. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;