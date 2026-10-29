'use client';

import { useState } from 'react';
import Link from 'next/link';
import { whatsappLink } from '@/lib/site';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav aria-label="Main navigation" className="bg-white/95 backdrop-blur-sm shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 hover:opacity-80 transition-opacity">
              Surfing Point
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-lg">
              Services
            </a>
            <Link href="/website-development" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-lg">
              Websites
            </Link>
            <a href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-lg">
              About
            </a>
            <a href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-lg">
              Contact
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors">
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a 
                href="/#services" 
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <Link 
                href="/website-development" 
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Websites
              </Link>
              <a 
                href="/#about" 
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/#contact" 
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
