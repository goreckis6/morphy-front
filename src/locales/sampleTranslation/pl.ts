import { SamplePageTranslations } from './types';

export const pl: SamplePageTranslations = {
  sample_page: {
    common: {
      back_button: 'Powrót do strony głównej',
      file_size: 'Rozmiar pliku:',
      download: 'Pobierz',
      download_now: 'Pobierz teraz',
      download_started: 'Pobieranie rozpoczęte',
      download_ready_in: 'Pobieranie gotowe za {{countdown}}s...',
      about_title: 'O tych plikach przykładowych',
      about_items: [
        'To są pliki testowe w różnych rozmiarach do celów testowych',
        'Pliki są bezpiecznie hostowane i dostępne do bezpłatnego pobrania',
        'Idealne do testowania narzędzi konwersji dokumentów i procesorów plików',
        'Nie wymaga rejestracji ani konta'
      ],
      features: {
        multiple_sizes: {
          title: 'Różne rozmiary',
          description: 'Pliki testowe od 100 KB do 100 MB'
        },
        free_download: {
          title: 'Darmowe pobieranie',
          description: 'Nie wymaga rejestracji ani płatności'
        },
        safe_tested: {
          title: 'Bezpieczne i przetestowane',
          description: 'Wszystkie pliki są bezpieczne i przetestowane pod kątem zgodności'
        }
      }
    },
    formats: {
      docx: {
        meta: {
          title: 'Darmowe przykładowe pliki DOCX – Pobierz pliki testowe | MorphyHub',
          description: 'Pobierz darmowe przykładowe pliki DOCX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji i przetwarzania dokumentów.',
          keywords: 'przykładowe pliki DOCX, testowe pliki DOCX, pobierz przykłady DOCX, darmowe testowe pliki DOCX, przykłady dokumentów, przykłady Microsoft Word'
        },
        schema: {
          name: 'Darmowe przykładowe pliki DOCX – Pobierz pliki testowe',
          description: 'Pobierz darmowe przykładowe pliki DOCX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji dokumentów.'
        },
        hero: {
          title: 'Przykładowe pliki DOCX',
          description: 'Pobierz darmowe przykładowe pliki DOCX do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji i przetwarzania dokumentów.'
        },
        about_description: 'To są testowe pliki DOCX w różnych rozmiarach do celów testowych'
      }
    }
  }
};

