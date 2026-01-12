import { createContextId } from '@builder.io/qwik';
import type { Translations } from '../utils/i18n-loader';

export interface TranslationContextState {
  lang: string;
  translations: Translations;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

export const TranslationContext = createContextId<TranslationContextState>('translation-context');
