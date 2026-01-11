import { component$, useSignal } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Menu, X, ArrowLeftRight, Eye, Minimize2, Download } from './icons';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = component$(() => {
  const showMobileMenu = useSignal(false);
  const loc = useLocation();
  
  const currentLang = loc.url.pathname.split('/')[1] || 'en';
  // Check if current lang is in supported languages list
  const supportedLangs = ['pl', 'de', 'es', 'fr', 'it', 'pt', 'ru', 'ja', 'zh', 'ko', 'ar', 'hi', 'id', 'tr', 'nl', 'sv'];
  const isNonEnglish = supportedLangs.includes(currentLang);

  const getNavHref = (path: string) => isNonEnglish ? `/${currentLang}${path}` : path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" class="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="/logo.jpg" 
              alt="FormiPeek Logo" 
              class="h-12 w-auto object-contain"
            />
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent block">
                FormiPeek
              </span>
              <p class="text-xs text-gray-500">File Conversion & Viewer</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <a href={getNavHref('/converters')} class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group">
                <ArrowLeftRight className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                <span>Converters</span>
              </a>
              <a href={getNavHref('/viewers')} class="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors group">
                <Eye className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                <span>Viewers</span>
              </a>
              <a href={getNavHref('/compress')} class="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors group">
                <Minimize2 className="w-5 h-5 text-orange-600 group-hover:text-orange-700" />
                <span>Compress</span>
              </a>
              <a href={getNavHref('/samples')} class="flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors group">
                <Download className="w-5 h-5 text-teal-600 group-hover:text-teal-700" />
                <span>Samples</span>
              </a>
            </nav>

            <div className="relative flex items-center pl-4 border-l border-gray-200">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick$={() => showMobileMenu.value = !showMobileMenu.value}
            class="md:hidden p-2 text-gray-500 hover:text-gray-700 rounded-lg transition-colors"
          >
            {showMobileMenu.value ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu.value && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href={getNavHref('/converters')} class="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 group">
                <ArrowLeftRight className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                <span>Converters</span>
              </a>
              <a href={getNavHref('/viewers')} class="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 group">
                <Eye className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                <span>Viewers</span>
              </a>
              <a href={getNavHref('/compress')} class="flex items-center space-x-3 text-gray-700 hover:text-orange-600 transition-colors font-medium py-2 group">
                <Minimize2 className="w-5 h-5 text-orange-600 group-hover:text-orange-700" />
                <span>Compress</span>
              </a>
              <a href={getNavHref('/samples')} class="flex items-center space-x-3 text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 group">
                <Download className="w-5 h-5 text-teal-600 group-hover:text-teal-700" />
                <span>Samples</span>
              </a>
              
              <div className="pt-4 border-t border-gray-200">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});
