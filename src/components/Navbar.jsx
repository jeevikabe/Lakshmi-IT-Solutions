import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Layers } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to highlight the active page link
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className="bg-slate-950 text-white sticky top-0 z-50 border-b border-slate-900 backdrop-blur-md bg-opacity-95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          {/* <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-wider text-blue-400">
            <Layers size={24} className="text-blue-500 animate-pulse" />
            <span>TECHCRAFT</span>
          </Link> */}

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-wider text-blue-400">
            <Layers size={24} className="text-blue-500 animate-pulse" />
            <span>LAKSHMI IT SOLUTIONS</span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  isActive(link.path) ? 'text-blue-400 font-semibold' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-md shadow-blue-600/10"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button (Visible ONLY on Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-400 hover:text-white p-2 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out border-t border-slate-900 bg-slate-950 ${
          isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
              className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-blue-600/10 text-blue-400'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-slate-900 px-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl text-base font-medium text-center block shadow-lg shadow-blue-600/10"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}