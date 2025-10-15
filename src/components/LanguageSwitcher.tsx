import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { getLocalizedUrl } from '../i18n';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', nativeName: 'English', fallback: 'GB', unicode: 'U+1F1EC U+1F1E7' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱', nativeName: 'Polski', fallback: 'PL', unicode: 'U+1F1F5 U+1F1F1' },
  { code: 'de', name: 'German', flag: '🇩🇪', nativeName: 'Deutsch', fallback: 'DE', unicode: 'U+1F1E9 U+1F1EA' }
];

// Flag component with fallback
const FlagIcon = ({ flag, fallback, className = "" }: { flag: string, fallback: string, className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <span 
        className="text-lg leading-none" 
        style={{ 
          fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, Segoe UI Symbol, Android Emoji, EmojiSymbols, sans-serif',
          fontSize: '1.1em',
          display: 'inline-block',
          minWidth: '1em',
          textAlign: 'center'
        }}
      >
        {flag}
      </span>
      <span className="absolute inset-0 text-[8px] font-bold text-gray-500 opacity-0 hover:opacity-100 transition-opacity leading-none flex items-center justify-center pointer-events-none">
        {fallback}
      </span>
    </div>
  );
};

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    const currentPath = window.location.pathname;
    const newUrl = getLocalizedUrl(currentPath, lng);
    window.location.href = newUrl;
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded-md hover:border-blue-400 hover:shadow-sm transition-all duration-200 group"
      >
        <FlagIcon flag={currentLanguage.flag} fallback={currentLanguage.fallback} className="w-5 h-4" />
        <span className="font-medium text-gray-700 text-xs">
          {currentLanguage.nativeName}
        </span>
        <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-md transition-all duration-200 ${
                    lang.code === i18n.language
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md scale-[1.01]'
                      : 'hover:bg-gray-50 text-gray-700 hover:scale-[1.01]'
                  }`}
                >
                  <FlagIcon flag={lang.flag} fallback={lang.fallback} className="w-5 h-4" />
                  <div className="flex-1 text-left">
                    <div className={`font-medium text-xs ${
                      lang.code === i18n.language ? 'text-white' : 'text-gray-800'
                    }`}>
                      {lang.nativeName}
                    </div>
                    <div className={`text-[9px] ${
                      lang.code === i18n.language ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {lang.name}
                    </div>
                  </div>
                  {lang.code === i18n.language && (
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
            
            {/* Footer */}
            <div className="border-t border-gray-100 px-2.5 py-1 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center gap-1 text-[9px] text-gray-600">
                <Globe className="w-2 h-2" />
                <span>Choose your language</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

