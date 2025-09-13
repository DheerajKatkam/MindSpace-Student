import React, { useState } from 'react';
import { Menu, X, Brain, User, Bell, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200/30 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-2.5 rounded-xl shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">MindSpace</span>
              <span className="text-xs text-gray-500 -mt-1">Student Platform</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <div className="relative group">
              <a href="#courses" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-200 flex items-center">
                Courses
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </a>
            </div>
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-200 relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-200 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-200 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
            </button>
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors rounded-full hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
            <button className="btn-primary text-sm">Get Started Free</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</a>
              <a href="#courses" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Courses</a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contact</a>
              <button className="btn-primary w-full mt-4">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;