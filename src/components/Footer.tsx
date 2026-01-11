import { component$ } from '@builder.io/qwik';
import { RefreshCw, Star, Shield } from './icons';

export const Footer = component$(() => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-12 sm:py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FormiPeek</h2>
          </div>
          
          <p class="text-gray-300 mb-6 text-base sm:text-lg max-w-2xl mx-auto">
            The ultimate file conversion and viewing platform for professionals and everyday users.
          </p>

          {/* Security Notice */}
          <div className="flex items-center justify-center gap-2 mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 max-w-2xl mx-auto">
            <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
            <p class="text-sm sm:text-base text-gray-300">
              <span className="font-semibold text-white">100% Secure:</span> No files are stored on our servers. All conversions are processed and files are automatically deleted immediately after processing.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
            <span>© 2025 FormiPeek</span>
            <span className="hidden sm:inline">•</span>
            <span>Built with</span>
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>by developers who care about quality.</span>
          </div>
        </div>
      </div>
    </footer>
  );
});

