import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Life And Times</h3>
            <p className="text-gray-400">
              Capturing life's precious moments with artistic vision and technical excellence.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@lifeandtimes.com</p>
            <p className="text-gray-400">Phone: (+91) 943*****45</p>
            <p className="text-gray-400">Location: New Dehli, India</p>
          </div>
          <div>
            <h3 className="text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Life And Times. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}