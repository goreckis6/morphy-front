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
      <Globe className="w-4 h-4 text-gray-600" />
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-transparent border border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
};

