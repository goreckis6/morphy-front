import { component$, useSignal, $ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { Globe, ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪' },
];

export const LanguageSwitcher = component$(() => {
  const showDropdown = useSignal(false);
  const loc = useLocation();
  const nav = useNavigate();
  
  // Extract current language from URL
  const currentLang = loc.url.pathname.split('/')[1] || 'en';
  const currentLanguage = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  const changeLanguage = $((langCode: string) => {
    const pathParts = loc.url.pathname.split('/');
    pathParts[1] = langCode;
    const newPath = pathParts.join('/') || `/${langCode}/`;
    nav(newPath);
    showDropdown.value = false;
  });

  return (
    <div class="relative">
      <button
        onClick$={() => showDropdown.value = !showDropdown.value}
        class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Change language"
      >
        <Globe class="w-5 h-5 text-gray-600" />
        <span class="text-2xl">{currentLanguage.flag}</span>
        <span class="hidden sm:inline text-sm font-medium text-gray-700">
          {currentLanguage.nativeName}
        </span>
        <ChevronDown class="w-4 h-4 text-gray-500" />
      </button>

      {showDropdown.value && (
        <>
          <div 
            class="fixed inset-0 z-40" 
            onClick$={() => showDropdown.value = false}
          />
          <div class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick$={() => changeLanguage(lang.code)}
                class={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                  currentLang === lang.code ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                }`}
              >
                <span class="text-2xl">{lang.flag}</span>
                <div class="flex-1 text-left">
                  <div class="text-sm font-medium text-gray-900">{lang.nativeName}</div>
                  <div class="text-xs text-gray-500">{lang.name}</div>
                </div>
                {currentLang === lang.code && (
                  <div class="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
});

