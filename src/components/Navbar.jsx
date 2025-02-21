import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Phone, Users } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {

    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">CrowdFund</span>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  isActive('/') ? 'border-blue-500' : 'border-transparent'
                } text-sm font-medium ${isActive('/')}`}
              >
                Home
              </Link>
              
              <Link
                to="/campaigns"
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  isActive('/campaigns') ? 'border-blue-500' : 'border-transparent'
                } text-sm font-medium ${isActive('/campaigns')}`}
              >
                Campaigns
              </Link>
              
              <Link
                to="/about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  isActive('/about') ? 'border-blue-500' : 'border-transparent'
                } text-sm font-medium ${isActive('/about')}`}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  isActive('/contact') ? 'border-blue-500' : 'border-transparent'
                } text-sm font-medium ${isActive('/contact')}`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/admin/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;