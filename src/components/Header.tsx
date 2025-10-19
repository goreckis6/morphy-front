import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
// import { LanguageSwitcher } from './LanguageSwitcher';

export const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);


  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
              <img 
                src="/logo.jpg" 
                alt="MorphyIMG Logo" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  MorphyIMG
                </h1>
                <p className="text-xs text-gray-500">File Conversion & Viewer</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex items-center space-x-6">
                <a href="/converters" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Converters
                </a>
                <a href="/viewers" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Viewers
                </a>
              </nav>


              {/* Language Switcher - Right side */}
              {/* <LanguageSwitcher /> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700 rounded-lg transition-colors"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="/converters" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Converters
                </a>
                <a href="/viewers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Viewers
                </a>
                
                <div className="py-2">
                  {/* <LanguageSwitcher /> */}
                </div>
                
              </nav>
            </div>
          )}
        </div>
      </header>

    </>
  );
};