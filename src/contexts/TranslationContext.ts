import { createContextId } from '@builder.io/qwik';

export interface TranslationContextState {
  lang: string;
  t: (key: string) => string;
}

export const TranslationContext = createContextId<TranslationContextState>('translation-context');
