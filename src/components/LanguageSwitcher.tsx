import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { getLocalizedUrl } from '../i18n';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    const currentPath = window.location.pathname;
    const newUrl = getLocalizedUrl(currentPath, lng);
    window.location.href = newUrl;
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-blue-600" />
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:border-blue-500 hover:from-blue-100 hover:to-indigo-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer transition-all shadow-sm"
      >
        <option value="en">🇬🇧 English</option>
        <option value="pl">🇵🇱 Polski</option>
        <option value="de">🇩🇪 Deutsch</option>
      </select>
    </div>
  );
};

