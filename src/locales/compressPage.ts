import i18n from '../i18n';

type CompressionFormatTranslations = Record<
  string,
  {
    name: string;
    description: string;
  }
>;

interface CompressPageTranslations {
  compress_page: {
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
    search: Record<string, string>;
    categories: Record<string, string>;
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    actions: {
      compress: string;
    };
    no_results: {
      title: string;
      description: string;
      clear: string;
    };
    formats: CompressionFormatTranslations;
  };
}

const compressPageResources: Record<string, CompressPageTranslations> = {
  en: {
    compress_page: {
      meta: {
        title: 'Online File Compressor – Reduce File Size | MorphyHub',
        description:
          'Compress images, PDFs, videos, and documents online. MorphyHub makes your files smaller and faster to share — without losing quality.',
        keywords:
          'file compressor, online compressor, image compression, compress jpg, compress images, reduce file size, batch compression, free compressor, video compression'
      },
      schema: {
        name: 'Online File Compressor',
        description:
          'Compress images, PDFs, videos, and more directly in your browser with MorphyHub. Reduce file size while keeping great quality — fast and secure.'
      },
      hero: {
        title: 'File Compression Tools',
        description:
          'Reduce file sizes while maintaining quality. Compress images, documents, and more for faster uploads and storage optimization.'
      },
      back_button: 'Back to Home',
      search: {
        placeholder: 'Search compression tools... (e.g., JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: 'Found {{count}} compression tool',
        results_one: 'Found {{count}} compression tool',
        results_other: 'Found {{count}} compression tools',
        suggestion: 'Try searching for something like "{{exampleOne}}" or "{{exampleTwo}}"',
        clear: 'Clear search'
      },
      categories: {
        image_compression: 'IMAGE COMPRESSION',
        document_compression: 'DOCUMENT COMPRESSION'
      },
      features: {
        title: 'Why Choose Our Compressors?',
        items: [
          {
            title: 'Fast & Reliable',
            description: 'Compress files quickly with our optimized compression engines.'
          },
          {
            title: 'Secure & Private',
            description: 'Your files are processed securely and never stored permanently.'
          },
          {
            title: 'High Quality',
            description: 'Maintain image quality and document structure during compression.'
          }
        ]
      },
      actions: {
        compress: 'Compress'
      },
      no_results: {
        title: 'No compression tools found',
        description: 'Try searching for something like "JPG" or "JPEG"',
        clear: 'Clear search'
      },
      formats: {
        jpg: {
          name: 'JPG/JPEG Compressor',
          description:
            'Compress JPEG images to reduce file size while maintaining quality. Perfect for web optimization and faster uploads.'
        },
        png: {
          name: 'PNG Compressor',
          description:
            'Compress PNG images to reduce file size while preserving transparency. Perfect for web graphics and transparent images.'
        },
        pdf: {
          name: 'PDF Compressor',
          description:
            'Compress PDF files to reduce file size while maintaining document quality. Perfect for email attachments and web sharing.'
        }
      }
    }
  },
  pl: {
    compress_page: {
      meta: {
        title: 'Kompresor Plików Online – Zmniejsz Rozmiar Pliku | MorphyHub',
        description:
          'Kompresuj obrazy, PDF, wideo i dokumenty online. MorphyHub sprawia, że Twoje pliki są mniejsze i szybsze do udostępnienia — bez utraty jakości.',
        keywords:
          'kompresor plików, kompresor online, kompresja obrazów, kompresja jpg, kompresja obrazów, zmniejsz rozmiar pliku, kompresja wsadowa, darmowy kompresor, kompresja wideo'
      },
      schema: {
        name: 'Kompresor Plików Online',
        description:
          'Kompresuj obrazy, PDF, wideo i więcej bezpośrednio w przeglądarce z MorphyHub. Zmniejsz rozmiar pliku przy zachowaniu wysokiej jakości — szybko i bezpiecznie.'
      },
      hero: {
        title: 'Narzędzia Kompresji Plików',
        description:
          'Zmniejszaj rozmiary plików przy zachowaniu jakości. Kompresuj obrazy, dokumenty i więcej dla szybszych przesyłań i optymalizacji przechowywania.'
      },
      back_button: 'Powrót do Strony Głównej',
      search: {
        placeholder: 'Szukaj narzędzi kompresji... (np. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: 'Znaleziono {{count}} narzędzie kompresji',
        results_one: 'Znaleziono {{count}} narzędzie kompresji',
        results_other: 'Znaleziono {{count}} narzędzi kompresji',
        suggestion: 'Spróbuj wyszukać coś takiego jak "{{exampleOne}}" lub "{{exampleTwo}}"',
        clear: 'Wyczyść wyszukiwanie'
      },
      categories: {
        image_compression: 'KOMPRESJA OBRAZÓW',
        document_compression: 'KOMPRESJA DOKUMENTÓW'
      },
      features: {
        title: 'Dlaczego Wybrać Nasze Kompresory?',
        items: [
          {
            title: 'Szybko & Niezawodnie',
            description: 'Kompresuj pliki szybko dzięki naszym zoptymalizowanym silnikom kompresji.'
          },
          {
            title: 'Bezpiecznie & Prywatnie',
            description: 'Twoje pliki są przetwarzane bezpiecznie i nigdy nie są trwale przechowywane.'
          },
          {
            title: 'Wysoka Jakość',
            description: 'Zachowaj jakość obrazu i strukturę dokumentu podczas kompresji.'
          }
        ]
      },
      actions: {
        compress: 'Kompresuj'
      },
      no_results: {
        title: 'Nie znaleziono narzędzi kompresji',
        description: 'Spróbuj wyszukać coś takiego jak "JPG" lub "JPEG"',
        clear: 'Wyczyść wyszukiwanie'
      },
      formats: {
        jpg: {
          name: 'Kompresor JPG/JPEG',
          description:
            'Kompresuj obrazy JPEG, aby zmniejszyć rozmiar pliku przy zachowaniu jakości. Idealne do optymalizacji internetowej i szybszych przesyłań.'
        },
        png: {
          name: 'Kompresor PNG',
          description:
            'Kompresuj obrazy PNG, aby zmniejszyć rozmiar pliku przy zachowaniu przezroczystości. Idealne do grafiki internetowej i przezroczystych obrazów.'
        },
        pdf: {
          name: 'Kompresor PDF',
          description:
            'Kompresuj pliki PDF, aby zmniejszyć rozmiar pliku przy zachowaniu jakości dokumentu. Idealne do załączników e-mail i udostępniania w internecie.'
        }
      }
    }
  },
  de: {
    compress_page: {
      meta: {
        title: 'Online-Dateikompressor – Dateigröße Reduzieren | MorphyHub',
        description:
          'Komprimieren Sie Bilder, PDFs, Videos und Dokumente online. MorphyHub macht Ihre Dateien kleiner und schneller zum Teilen — ohne Qualitätsverlust.',
        keywords:
          'datei kompressor, online kompressor, bildkomprimierung, jpg komprimieren, bilder komprimieren, dateigröße reduzieren, stapel komprimierung, kostenloser kompressor, videokomprimierung'
      },
      schema: {
        name: 'Online-Dateikompressor',
        description:
          'Komprimieren Sie Bilder, PDFs, Videos und mehr direkt in Ihrem Browser mit MorphyHub. Reduzieren Sie die Dateigröße bei gleichbleibender Qualität — schnell und sicher.'
      },
      hero: {
        title: 'Dateikomprimierungs-Tools',
        description:
          'Reduzieren Sie Dateigrößen bei gleichbleibender Qualität. Komprimieren Sie Bilder, Dokumente und mehr für schnellere Uploads und Speicheroptimierung.'
      },
      back_button: 'Zurück zur Startseite',
      search: {
        placeholder: 'Komprimierungs-Tools suchen... (z. B. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: '{{count}} Komprimierungs-Tool gefunden',
        results_one: '{{count}} Komprimierungs-Tool gefunden',
        results_other: '{{count}} Komprimierungs-Tools gefunden',
        suggestion: 'Versuchen Sie, nach etwas wie "{{exampleOne}}" oder "{{exampleTwo}}" zu suchen',
        clear: 'Suche löschen'
      },
      categories: {
        image_compression: 'BILDKOMPRIMIERUNG',
        document_compression: 'DOKUMENTKOMPRIMIERUNG'
      },
      features: {
        title: 'Warum Unsere Kompressoren Wählen?',
        items: [
          {
            title: 'Schnell & Zuverlässig',
            description: 'Komprimieren Sie Dateien schnell mit unseren optimierten Komprimierungs-Engines.'
          },
          {
            title: 'Sicher & Privat',
            description: 'Ihre Dateien werden sicher verarbeitet und niemals dauerhaft gespeichert.'
          },
          {
            title: 'Hohe Qualität',
            description: 'Bewahren Sie Bildqualität und Dokumentstruktur während der Komprimierung.'
          }
        ]
      },
      actions: {
        compress: 'Komprimieren'
      },
      no_results: {
        title: 'Keine Komprimierungs-Tools gefunden',
        description: 'Versuchen Sie, nach etwas wie "JPG" oder "JPEG" zu suchen',
        clear: 'Suche löschen'
      },
      formats: {
        jpg: {
          name: 'JPG/JPEG Kompressor',
          description:
            'Komprimieren Sie JPEG-Bilder, um die Dateigröße zu reduzieren und gleichzeitig die Qualität beizubehalten. Perfekt für Weboptimierung und schnellere Uploads.'
        },
        png: {
          name: 'PNG Kompressor',
          description:
            'Komprimieren Sie PNG-Bilder, um die Dateigröße zu reduzieren und gleichzeitig die Transparenz beizubehalten. Perfekt für Webgrafiken und transparente Bilder.'
        },
        pdf: {
          name: 'PDF Kompressor',
          description:
            'Komprimieren Sie PDF-Dateien, um die Dateigröße zu reduzieren und gleichzeitig die Dokumentqualität beizubehalten. Perfekt für E-Mail-Anhänge und Web-Sharing.'
        }
      }
    }
  }
};

Object.entries(compressPageResources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

