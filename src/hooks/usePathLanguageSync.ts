import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { i18n as I18nInstance } from 'i18next';
import { resolveLanguageFromPath } from '../i18n';

export const usePathLanguageSync = (i18n: I18nInstance) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const nextLanguage = resolveLanguageFromPath(pathname);

    if (i18n.language !== nextLanguage) {
      i18n.changeLanguage(nextLanguage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
};
 
