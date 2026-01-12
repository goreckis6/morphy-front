import { component$, Slot, useContextProvider, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { TranslationContext } from '../../contexts/TranslationContext';
import { loadTranslations, getTranslationValue, interpolate } from '../../utils/i18n-loader';

// Define supported languages
export const SUPPORTED_LANGUAGES = [
  'en', 'pl', 'de', 'es', 'fr', 'it', 'pt', 'ru', 'ja', 'zh', 'ko', 'ar', 'hi', 'id', 'tr', 'nl', 'sv'
];

export const onGet: RequestHandler = async ({ params, redirect }) => {
  const lang = params.lang;
  
  // Validate language parameter
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    throw redirect(308, '/en/');
  }
};

export default component$(() => {
  const loc = useLocation();
  const segs = loc.url.pathname.split('/').filter(Boolean);
  const lang = segs[0] || 'en';
  const translations = useSignal({});
  
  // Load translations
  useVisibleTask$(async ({ track }) => {
    track(() => lang);
    const loaded = await loadTranslations(lang);
    translations.value = loaded;
  });
  
  // Provide translation context
  useContextProvider(TranslationContext, {
    lang,
    translations: translations.value,
    t: (key: string, vars?: Record<string, string | number>) => {
      const translation = getTranslationValue(translations.value, key);
      return vars ? interpolate(translation, vars) : translation;
    },
  });
  
  return <Slot />;
});
