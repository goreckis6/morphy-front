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

const FlagID: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Bahasa Indonesia"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#FFFFFF" />
    <path d="M0 8h24v8H0z" fill="#DC143C" />
  </svg>
);

const FlagSV: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Svenska"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#006AA7" />
    <path d="M0 6.4h24v3.2H0z" fill="#FECC00" />
    <path d="M8 0h3.2v16H8z" fill="#FECC00" />
  </svg>
);

const FlagES: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Español"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#AA151B" />
    <path d="M0 5.33h24v5.34H0z" fill="#F1BF00" />
  </svg>
);

const FlagFR: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Français"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#0055A4" />
    <path d="M8 0h8v16H8z" fill="#FFFFFF" />
    <path d="M16 0h8v16h-8z" fill="#EF4135" />
  </svg>
);

const FlagIT: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Italiano"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#009246" />
    <path d="M8 0h8v16H8z" fill="#FFFFFF" />
    <path d="M16 0h8v16h-8z" fill="#CE2B37" />
  </svg>
);

const FlagNL: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Nederlands"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#AE1C28" />
    <path d="M0 5.33h24v5.34H0z" fill="#FFFFFF" />
    <path d="M0 0h24v5.33H0z" fill="#21468B" />
  </svg>
);

const FlagPT: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Português"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#006600" />
    <path d="M0 8h12v8H0z" fill="#FF0000" />
    <circle cx="6" cy="12" r="3" fill="#FFD700" />
    <circle cx="6" cy="12" r="2" fill="#006600" />
  </svg>
);

const FlagVI: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Tiếng Việt"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#DA020E" />
    <path d="M12 4L13.5 8.5L18 9.5L14.5 12.5L15.5 17L12 14.5L8.5 17L9.5 12.5L6 9.5L10.5 8.5L12 4Z" fill="#FFD700" />
  </svg>
);

const FlagTR: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Türkçe"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#E30A17" />
    <circle cx="8" cy="8" r="3.5" fill="#FFFFFF" />
    <circle cx="9" cy="8" r="2.5" fill="#E30A17" />
    <path d="M12 6L12.5 7.5L14 8L12.5 8.5L12 10L11.5 8.5L10 8L11.5 7.5L12 6Z" fill="#FFFFFF" />
  </svg>
);

const FlagRU: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="Русский"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#FFFFFF" />
    <path d="M0 5.33h24v5.34H0z" fill="#0039A6" />
    <path d="M0 10.67h24V16H0z" fill="#D52B1E" />
  </svg>
);

const FlagAR: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="العربية"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#000000" />
    <path d="M0 5.33h24v5.34H0z" fill="#FFFFFF" />
    <path d="M0 10.67h24V16H0z" fill="#007A3D" />
    <path d="M0 0L8 8L0 16Z" fill="#CE1126" />
  </svg>
);

const FlagTH: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="ไทย"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#ED1C24" />
    <path d="M0 2.67h24v10.67H0z" fill="#FFFFFF" />
    <path d="M0 5.33h24v5.34H0z" fill="#241D4F" />
  </svg>
);

const FlagJA: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="日本語"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#FFFFFF" />
    <circle cx="12" cy="8" r="4.5" fill="#BC002D" />
  </svg>
);

const FlagZH: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    role="img"
    aria-label="简体中文"
  >
    <rect width="24" height="16" rx="2" ry="2" fill="#DE2910" />
    <path d="M12 2L13.5 5.5L17.5 6L14.5 8.5L15.5 12.5L12 10.5L8.5 12.5L9.5 8.5L6.5 6L10.5 5.5L12 2Z" fill="#FFDE00" />
    <circle cx="12" cy="7" r="1" fill="#DE2910" />
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
  { code: 'id', name: 'Bahasa Indonesia', nativeName: 'Bahasa Indonesia', icon: <FlagID className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'sv', name: 'Svenska', nativeName: 'Svenska', icon: <FlagSV className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'de', name: 'German', nativeName: 'Deutsch', icon: <FlagDE className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'es', name: 'Español', nativeName: 'Español', icon: <FlagES className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'fr', name: 'Français', nativeName: 'Français', icon: <FlagFR className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'it', name: 'Italiano', nativeName: 'Italiano', icon: <FlagIT className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'nl', name: 'Nederlands', nativeName: 'Nederlands', icon: <FlagNL className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', icon: <FlagPL className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'pt', name: 'Português', nativeName: 'Português', icon: <FlagPT className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'vi', name: 'Tiếng Việt', nativeName: 'Tiếng Việt', icon: <FlagVI className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'tr', name: 'Türkçe', nativeName: 'Türkçe', icon: <FlagTR className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'ru', name: 'Русский', nativeName: 'Русский', icon: <FlagRU className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'ar', name: 'العربية', nativeName: 'العربية', icon: <FlagAR className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'th', name: 'ไทย', nativeName: 'ไทย', icon: <FlagTH className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'ja', name: '日本語', nativeName: '日本語', icon: <FlagJA className="h-4 w-6 rounded-sm shadow-sm" /> },
  { code: 'zh', name: '简体中文', nativeName: '简体中文', icon: <FlagZH className="h-4 w-6 rounded-sm shadow-sm" /> },
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
        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded-md hover:border-blue-400 hover:shadow-sm transition-all duration-200 group w-full md:w-auto"
      >
        <FlagIcon icon={currentLanguage.icon} className="w-6 h-4 flex-shrink-0" />
        <span className="font-medium text-gray-700 text-xs truncate">
          {currentLanguage.nativeName}
        </span>
        <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
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
          <div className="absolute left-0 md:right-0 md:left-auto mt-1 w-56 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-8rem)] md:max-h-[32rem] overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-md transition-all duration-200 flex-shrink-0 ${
                    lang.code === i18n.language
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md scale-[1.01]'
                      : 'hover:bg-gray-50 text-gray-700 hover:scale-[1.01]'
                  }`}
                >
                  <FlagIcon icon={lang.icon} className="w-6 h-4 flex-shrink-0" />
                  <div className="flex-1 text-left min-w-0">
                    <div className={`font-medium text-xs truncate ${
                      lang.code === i18n.language ? 'text-white' : 'text-gray-800'
                    }`}>
                      {lang.nativeName}
                    </div>
                    <div className={`text-[9px] truncate ${
                      lang.code === i18n.language ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {lang.name}
                    </div>
                  </div>
                  {lang.code === i18n.language && (
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse flex-shrink-0" />
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

