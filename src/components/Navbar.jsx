import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-black py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className={`text-2xl font-serif tracking-wider ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Life And Times
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              to="/" 
              className={`uppercase text-sm tracking-widest hover:text-gray-300 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'} ${location.pathname === '/' ? 'font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/portfolio" 
              className={`uppercase text-sm tracking-widest hover:text-gray-300 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'} ${location.pathname === '/portfolio' ? 'font-semibold' : ''}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className={`uppercase text-sm tracking-widest hover:text-gray-300 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'} ${location.pathname === '/about' ? 'font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`uppercase text-sm tracking-widest hover:text-gray-300 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'} ${location.pathname === '/contact' ? 'font-semibold' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-gray-900 hover:bg-gray-50 uppercase text-sm tracking-widest ${location.pathname === '/' ? 'font-semibold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/portfolio" 
              className={`block px-3 py-2 text-gray-900 hover:bg-gray-50 uppercase text-sm tracking-widest ${location.pathname === '/portfolio' ? 'font-semibold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-gray-900 hover:bg-gray-50 uppercase text-sm tracking-widest ${location.pathname === '/about' ? 'font-semibold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 text-gray-900 hover:bg-gray-50 uppercase text-sm tracking-widest ${location.pathname === '/contact' ? 'font-semibold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}