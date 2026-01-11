import i18n // from '../i18n';
import { SamplePageTranslations } from './types';
import { en } from './en';
import { id } from './id';
import { sv } from './sv';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { nl } from './nl';
import { pl } from './pl';
import { pt } from './pt';
import { vi } from './vi';
import { tr } from './tr';
import { ru } from './ru';
import { ar } from './ar';
import { th } from './th';
import { ja } from './ja';
import { zh } from './zh';

export const sampleTranslationResources: Record<string, SamplePageTranslations> = {
  en,
  id,
  sv,
  de,
  es,
  fr,
  it,
  nl,
  pl,
  pt,
  vi,
  tr,
  ru,
  ar,
  th,
  ja,
  zh
};

// Register translations
Object.entries(sampleTranslationResources).forEach(([locale, resources]) => {
  i18n.addResourceBundle(locale, 'translation', resources, true, true);
});

export default sampleTranslationResources;

