import { useContext } from '@builder.io/qwik';
import { TranslationContext } from '../contexts/TranslationContext';
import { getTranslationValue, interpolate } from '../utils/i18n-loader';

/**
 * Composable hook to use translations in Qwik components
 * 
 * Usage:
 * ```tsx
 * const { t, lang } = useTranslation();
 * <div>{t('common.upload')}</div>
 * <div>{t('common.selected_files', { count: 5 })}</div>
 * ```
 */
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  
  if (!context) {
    // Fallback if context is not available
    return {
      lang: 'en',
      t: (key: string, vars?: Record<string, string | number>) => {
        return vars ? interpolate(key, vars) : key;
      }
    };
  }
  
  const t = (key: string, vars?: Record<string, string | number>) => {
    const translation = getTranslationValue(context.translations, key);
    return vars ? interpolate(translation, vars) : translation;
  };
  
  return {
    lang: context.lang,
    t,
  };
};
