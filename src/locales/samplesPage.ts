import i18n from '../i18n';

interface SamplesPageTranslations {
  samples_page: {
    meta: {
      title: string;
      description: string;
      keywords: string;
    };
    schema: {
      name: string;
      description: string;
    };
    hero: {
      title: string;
      description: string;
    };
    back_button: string;
    search: {
      placeholder: string;
      results: string;
      example_one: string;
      example_two: string;
    };
    categories: {
      document: string;
      data: string;
      application: string;
      design_3d: string;
      image_video: string;
      audio: string;
      archive: string;
    };
    actions: {
      download: string;
    };
    no_results: {
      title: string;
      description: string;
      clear: string;
    };
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    format_description_template: string;
  };
}

const samplesPageResources: Record<string, SamplesPageTranslations> = {
  en: {
    samples_page: {
      meta: {
        title: 'Free Sample Files – Download Test Files | MorphyHub',
        description: 'Get free sample images, documents, and archives to test MorphyHub converters, compressors, and viewers.',
        keywords: 'sample files, test files, download samples, free test files, DOCX samples, file samples, test files for conversion'
      },
      schema: {
        name: 'Free Sample Files for Download and Testing',
        description: 'Download free sample files of various types — images, documents, audio, video, and archives. Use them for testing, demos, or software validation on any platform.'
      },
      hero: {
        title: 'Sample Files',
        description: 'Download free sample files for testing. Multiple file sizes available for various formats to test your conversion and processing tools.'
      },
      back_button: 'Back to Home',
      search: {
        placeholder: 'Search sample files... (e.g., DOCX, JPG, PDF)',
        results: 'Found {{count}} sample file(s)',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'DOCUMENT SAMPLES',
        data: 'DATA SAMPLES',
        application: 'APPLICATION SAMPLES',
        design_3d: '3D & DESIGN SAMPLES',
        image_video: 'IMAGE & VIDEO SAMPLES',
        audio: 'AUDIO SAMPLES',
        archive: 'ARCHIVE SAMPLES'
      },
      actions: {
        download: 'Download'
      },
      no_results: {
        title: 'No sample files found',
        description: 'Try searching for something like "DOCX" or "JPG"',
        clear: 'Clear search'
      },
      features: {
        title: 'Why Choose Our Sample Files?',
        items: [
          {
            title: 'Free & Easy Access',
            description: 'Download sample files instantly without registration or payment.'
          },
          {
            title: 'Multiple Sizes',
            description: 'Choose from various file sizes (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) for comprehensive testing.'
          },
          {
            title: 'Wide Variety',
            description: 'Access samples across multiple categories: documents, images, audio, video, archives, and more.'
          }
        ]
      },
      format_description_template: 'Download free {{format}} sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing {{purpose}}.'
    }
  },
  pl: {
    samples_page: {
      meta: {
        title: 'Darmowe pliki przykładowe – Pobierz pliki testowe | MorphyHub',
        description: 'Pobierz darmowe przykładowe pliki obrazów, dokumentów i archiwów do testowania konwerterów, kompresorów i przeglądarek MorphyHub.',
        keywords: 'pliki przykładowe, pliki testowe, pobierz przykłady, darmowe pliki testowe, przykłady DOCX, przykłady plików, pliki testowe do konwersji'
      },
      schema: {
        name: 'Darmowe pliki przykładowe do pobrania i testowania',
        description: 'Pobierz darmowe przykładowe pliki różnych typów — obrazy, dokumenty, audio, wideo i archiwa. Użyj ich do testowania, demonstracji lub walidacji oprogramowania na dowolnej platformie.'
      },
      hero: {
        title: 'Pliki przykładowe',
        description: 'Pobierz darmowe pliki przykładowe do testowania. Dostępne różne rozmiary plików dla różnych formatów, aby przetestować Twoje narzędzia konwersji i przetwarzania.'
      },
      back_button: 'Powrót do strony głównej',
      search: {
        placeholder: 'Wyszukaj pliki przykładowe... (np. DOCX, JPG, PDF)',
        results: 'Znaleziono {{count}} plik(ów) przykładowych',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'PRZYKŁADY DOKUMENTÓW',
        data: 'PRZYKŁADY DANYCH',
        application: 'PRZYKŁADY APLIKACJI',
        design_3d: 'PRZYKŁADY 3D I PROJEKTOWE',
        image_video: 'PRZYKŁADY OBRAZÓW I WIDEO',
        audio: 'PRZYKŁADY AUDIO',
        archive: 'PRZYKŁADY ARCHIWÓW'
      },
      actions: {
        download: 'Pobierz'
      },
      no_results: {
        title: 'Nie znaleziono plików przykładowych',
        description: 'Spróbuj wyszukać coś takiego jak "DOCX" lub "JPG"',
        clear: 'Wyczyść wyszukiwanie'
      },
      features: {
        title: 'Dlaczego wybrać nasze pliki przykładowe?',
        items: [
          {
            title: 'Darmowy i łatwy dostęp',
            description: 'Pobierz pliki przykładowe natychmiast bez rejestracji lub płatności.'
          },
          {
            title: 'Różne rozmiary',
            description: 'Wybierz spośród różnych rozmiarów plików (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) do kompleksowego testowania.'
          },
          {
            title: 'Szeroka gama',
            description: 'Dostęp do przykładów w wielu kategoriach: dokumenty, obrazy, audio, wideo, archiwa i więcej.'
          }
        ]
      },
      format_description_template: 'Pobierz darmowe przykładowe pliki {{format}} do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania {{purpose}}.'
    }
  },
  de: {
    samples_page: {
      meta: {
        title: 'Kostenlose Beispieldateien – Testdateien herunterladen | MorphyHub',
        description: 'Kostenlose Beispieldateien für Bilder, Dokumente und Archive herunterladen, um MorphyHub-Konverter, Komprimierer und Viewer zu testen.',
        keywords: 'Beispieldateien, Testdateien, Beispiele herunterladen, kostenlose Testdateien, DOCX-Beispiele, Dateibeispiele, Testdateien für Konvertierung'
      },
      schema: {
        name: 'Kostenlose Beispieldateien zum Herunterladen und Testen',
        description: 'Laden Sie kostenlose Beispieldateien verschiedener Typen herunter — Bilder, Dokumente, Audio, Video und Archive. Verwenden Sie sie zum Testen, für Demos oder zur Softwarevalidierung auf jeder Plattform.'
      },
      hero: {
        title: 'Beispieldateien',
        description: 'Laden Sie kostenlose Beispieldateien zum Testen herunter. Verschiedene Dateigrößen für verschiedene Formate verfügbar, um Ihre Konvertierungs- und Verarbeitungstools zu testen.'
      },
      back_button: 'Zurück zur Startseite',
      search: {
        placeholder: 'Beispieldateien suchen... (z. B. DOCX, JPG, PDF)',
        results: '{{count}} Beispieldatei(en) gefunden',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'DOKUMENTENBEISPIELE',
        data: 'DATENBEISPIELE',
        application: 'ANWENDUNGSBEISPIELE',
        design_3d: '3D & DESIGN-BEISPIELE',
        image_video: 'BILD & VIDEO-BEISPIELE',
        audio: 'AUDIO-BEISPIELE',
        archive: 'ARCHIVBEISPIELE'
      },
      actions: {
        download: 'Herunterladen'
      },
      no_results: {
        title: 'Keine Beispieldateien gefunden',
        description: 'Versuchen Sie, nach etwas wie "DOCX" oder "JPG" zu suchen',
        clear: 'Suche löschen'
      },
      features: {
        title: 'Warum unsere Beispieldateien wählen?',
        items: [
          {
            title: 'Kostenlos & einfach zugänglich',
            description: 'Laden Sie Beispieldateien sofort ohne Registrierung oder Zahlung herunter.'
          },
          {
            title: 'Mehrere Größen',
            description: 'Wählen Sie aus verschiedenen Dateigrößen (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) für umfassende Tests.'
          },
          {
            title: 'Große Vielfalt',
            description: 'Zugriff auf Beispiele in mehreren Kategorien: Dokumente, Bilder, Audio, Video, Archive und mehr.'
          }
        ]
      },
      format_description_template: 'Laden Sie kostenlose {{format}} Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von {{purpose}}.'
    }
  }
};

// Register translations
Object.entries(samplesPageResources).forEach(([locale, resources]) => {
  i18n.addResourceBundle(locale, 'translation', resources, true, true);
});

export default samplesPageResources;

