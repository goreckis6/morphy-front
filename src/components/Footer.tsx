import React from 'react';
import { RefreshCw, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">MorphyIMG</h2>
          </div>
          
          <p className="text-gray-300 mb-6">
            The ultimate file conversion and viewing platform for professionals and everyday users.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
            <span>© 2025 MorphyHub Built with</span>
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>by developers who care about quality.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

