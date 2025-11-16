import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { getLocalizedUrl } from '../i18n';

const FlagUS: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="English"
  >
    <defs>
      <clipPath id="flag-us-clip">
        <rect width="24" height="16" rx="2" ry="2" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-us-clip)">
      <rect width="24" height="16" fill="#B22234" />
      {[...Array(6)].map((_, idx) => (
        <rect key={idx} y={(idx * 2 + 1) * (16 / 13)} width={24} height={16 / 13} fill="#FFFFFF" />
      ))}
      <rect width={10.4} height={8.615} fill="#3C3B6E" />
      {[...Array(9)].map((_, row) => (
        [...Array(row % 2 === 0 ? 6 : 5)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={row % 2 === 0 ? 1.04 + col * 1.73 : 1.91 + col * 1.73}
            cy={0.86 + row * 0.96}
            r={0.3}
            fill="#FFFFFF"
          />
        ))
      ))}
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
  { code: 'en', name: 'English', nativeName: 'English', icon: <FlagUS className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'id', name: 'Bahasa Indonesia', nativeName: 'Bahasa Indonesia', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'de', name: 'German', nativeName: 'Deutsch', icon: <FlagDE className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'es', name: 'Spanish', nativeName: 'Español', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'fr', name: 'French', nativeName: 'Français', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', icon: <FlagPL className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', icon: <Globe className="h-4 w-4 text-gray-600" /> },
  { code: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文', icon: <Globe className="h-4 w-4 text-gray-600" /> },
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

