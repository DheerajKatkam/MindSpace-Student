import React from 'react';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-xl shadow-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">MindSpace</span>
                <span className="text-sm text-gray-400 -mt-1">Student Platform</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering the next generation of learners with cutting-edge educational technology, 
              personalized learning paths, and world-class academic support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Dashboard</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Course Library</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Learning Tools</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Progress Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Certifications</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Support Center</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">24/7 Live Chat</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Knowledge Base</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Student Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Technical Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">System Status</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400 text-sm font-medium">support@mindspace.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400 text-sm font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400 text-sm font-medium">San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MindSpace Student Platform. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Trusted by students in 150+ countries worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;