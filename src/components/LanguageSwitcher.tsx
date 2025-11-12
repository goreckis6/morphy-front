import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { getLocalizedUrl } from '../i18n';

const FlagEN: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="English"
  >
    <defs>
      <clipPath id="flag-en-clip">
        <rect width="24" height="16" rx="2" ry="2" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-en-clip)">
      <rect width="24" height="16" fill="#0A17A7" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#fff" strokeWidth="4" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#FF2B3F" strokeWidth="2.2" />
      <rect x="10" width="4" height="16" fill="#fff" />
      <rect y="6" width="24" height="4" fill="#fff" />
      <rect x="10.8" width="2.4" height="16" fill="#FF2B3F" />
      <rect y="6.8" width="24" height="2.4" fill="#FF2B3F" />
    </g>
  </svg>
);

const FlagPL: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Polski"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#F4F4F4" />
    <path d="M0 8h24v8H0z" fill="#DC143C" />
  </svg>
);

const FlagDE: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Deutsch"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#000000" />
    <path d="M0 5.33h24v5.34H0z" fill="#DD0000" />
    <path d="M0 10.67h24V16H0z" fill="#FFCE00" />
  </svg>
);

type LanguageOption = {
  code: string;
  name: string;
  nativeName: string;
  icon: React.ReactNode;
};

const languages: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', icon: <FlagEN className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', icon: <FlagPL className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'de', name: 'German', nativeName: 'Deutsch', icon: <FlagDE className="h-4 w-6 rounded-sm shadow-sm" /> }
];

const FlagIcon: React.FC<{ icon: React.ReactNode; className?: string }> = ({ icon, className = '' }) => (
  <div className={`flex items-center justify-center ${className}`}>
    {icon}
  </div>
);

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    const currentPath = window.location.pathname;
    const newUrl = getLocalizedUrl(currentPath, lng);
    window.location.href = newUrl;
  };

  const currentLanguage = useMemo(
    () => languages.find(lang => lang.code === i18n.language) || languages[0],
    [i18n.language]
  );

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded-md hover:border-blue-400 hover:shadow-sm transition-all duration-200 group"
      >
        <FlagIcon icon={currentLanguage.icon} className="w-6 h-4" />
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
                  <FlagIcon icon={lang.icon} className="w-6 h-4" />
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

