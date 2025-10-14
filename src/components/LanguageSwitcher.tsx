import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { getLocalizedUrl } from '../i18n';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱', nativeName: 'Polski' },
  { code: 'de', name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' }
];

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
        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-200 group"
      >
        <Globe className="w-3.5 h-3.5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-lg leading-none">{currentLanguage.flag}</span>
        <span className="font-medium text-gray-700 text-xs hidden sm:inline">
          {currentLanguage.nativeName}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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
          <div className="absolute right-0 mt-1.5 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    lang.code === i18n.language
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-[1.02]'
                      : 'hover:bg-gray-50 text-gray-700 hover:scale-[1.02]'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <div className="flex-1 text-left">
                    <div className={`font-semibold text-xs ${
                      lang.code === i18n.language ? 'text-white' : 'text-gray-800'
                    }`}>
                      {lang.nativeName}
                    </div>
                    <div className={`text-[10px] ${
                      lang.code === i18n.language ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {lang.name}
                    </div>
                  </div>
                  {lang.code === i18n.language && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
            
            {/* Footer */}
            <div className="border-t border-gray-100 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
                <Globe className="w-2.5 h-2.5" />
                <span>Choose your language</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

