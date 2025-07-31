import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center text-2xl font-bold gap-2">
              <span className="inline-block align-middle">
                {/* Attractive Leaf Logo */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="18" cy="18" rx="16" ry="16" fill="#22c55e" />
                  <path d="M18 30c-5-2.5-9-7.5-9-13 0-5 4-9 9-9s9 4 9 9c0 5.5-4 10.5-9 13z" fill="#15803d" />
                  <path d="M18 30V9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 18c2-2 5-2 7-2" stroke="#bbf7d0" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <Link to="/">Urban GreenScape</Link>
            </div>
            <div className="hidden md:flex space-x-4">
              {navLinks.map(link => (
                <Link key={link.name} to={link.path} className="hover:text-green-200 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setOpen(!open)} className="focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {open && (
          <div className="md:hidden px-2 pb-3 space-y-1 bg-green-800">
            {navLinks.map(link => (
              <Link key={link.name} to={link.path} className="block py-2 px-4 rounded hover:bg-green-600" onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
      {/* Spacer to prevent content from being hidden behind the fixed header */}
      <div className="h-16" />
    </>
  );
}

export default Navbar; 