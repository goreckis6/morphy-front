import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

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
  return <Slot />;
});
