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
        title: 'Free Online File Compressor - Reduce File Size Instantly | MorphyHub',
        description:
          'Compress images, PDFs, and documents online instantly. Reduce file sizes by up to 90% while maintaining quality. Fast, secure, and completely free. No registration required. Perfect for web optimization, email attachments, and storage savings.',
        keywords:
          'file compressor, online compressor, image compression, compress jpg, compress images, reduce file size, batch compression, free compressor, pdf compression, jpeg compression, png compression, optimize images, shrink files, compress photos'
      },
      schema: {
        name: 'Online File Compressor',
        description:
          'Compress images, PDFs, videos, and more directly in your browser with MorphyHub. Reduce file size while keeping great quality — fast and secure.'
      },
      hero: {
        title: 'Free Online File Compression Tools',
        description:
          'Reduce file sizes by up to 90% while maintaining quality. Compress images, PDFs, and documents instantly for faster uploads, email attachments, and storage optimization. Fast, secure, and completely free.'
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
            description: 'Compress files quickly with our optimized compression engines. Process multiple files in seconds.'
          },
          {
            title: 'Secure & Private',
            description: 'Your files are processed securely in your browser and never stored permanently on our servers. Your privacy is guaranteed.'
          },
          {
            title: 'High Quality',
            description: 'Maintain image quality and document structure during compression. Smart algorithms preserve visual fidelity.'
          },
          {
            title: '100% Free',
            description: 'All compression tools are completely free to use. No registration, no limits, no hidden fees.'
          },
          {
            title: 'Batch Processing',
            description: 'Compress multiple files at once. Save time and optimize your entire file collection efficiently.'
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
  },
  id: {
    compress_page: {
      meta: {
        title: 'Kompresor File Online Gratis - Kurangi Ukuran File Instan | MorphyHub',
        description:
          'Kompres gambar, PDF, dan dokumen online secara instan. Kurangi ukuran file hingga 90% sambil mempertahankan kualitas. Cepat, aman, dan sepenuhnya gratis. Tanpa registrasi. Sempurna untuk optimasi web, lampiran email, dan penghematan penyimpanan.',
        keywords:
          'kompresor file, kompresor online, kompresi gambar, kompres jpg, kompres gambar, kurangi ukuran file, kompresi batch, kompresor gratis, kompresi pdf, kompresi jpeg, kompresi png, optimasi gambar, perkecil file, kompres foto'
      },
      schema: {
        name: 'Kompresor File Online',
        description:
          'Kompres gambar, PDF, dan lebih banyak lagi langsung di browser Anda dengan MorphyHub. Kurangi ukuran file sambil menjaga kualitas tinggi — cepat dan aman.'
      },
      hero: {
        title: 'Alat Kompresi File Online Gratis',
        description:
          'Kurangi ukuran file hingga 90% sambil mempertahankan kualitas. Kompres gambar, PDF, dan dokumen secara instan untuk upload lebih cepat, lampiran email, dan optimasi penyimpanan. Cepat, aman, dan sepenuhnya gratis.'
      },
      back_button: 'Kembali ke Beranda',
      search: {
        placeholder: 'Cari alat kompresi... (mis. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: 'Ditemukan {{count}} alat kompresi',
        results_one: 'Ditemukan {{count}} alat kompresi',
        results_other: 'Ditemukan {{count}} alat kompresi',
        suggestion: 'Coba cari sesuatu seperti "{{exampleOne}}" atau "{{exampleTwo}}"',
        clear: 'Hapus pencarian'
      },
      categories: {
        image_compression: 'KOMPRESI GAMBAR',
        document_compression: 'KOMPRESI DOKUMEN'
      },
      features: {
        title: 'Mengapa Memilih Kompresor Kami?',
        items: [
          {
            title: 'Cepat & Andal',
            description: 'Kompres file dengan cepat menggunakan mesin kompresi yang dioptimalkan. Proses beberapa file dalam hitungan detik.'
          },
          {
            title: 'Aman & Privat',
            description: 'File Anda diproses dengan aman di browser Anda dan tidak pernah disimpan secara permanen di server kami. Privasi Anda terjamin.'
          },
          {
            title: 'Kualitas Tinggi',
            description: 'Pertahankan kualitas gambar dan struktur dokumen selama kompresi. Algoritma cerdas mempertahankan kesetiaan visual.'
          },
          {
            title: '100% Gratis',
            description: 'Semua alat kompresi sepenuhnya gratis digunakan. Tanpa registrasi, tanpa batas, tanpa biaya tersembunyi.'
          },
          {
            title: 'Pemrosesan Batch',
            description: 'Kompres beberapa file sekaligus. Hemat waktu dan optimalkan seluruh koleksi file Anda dengan efisien.'
          }
        ]
      },
      actions: {
        compress: 'Kompres'
      },
      no_results: {
        title: 'Tidak ada alat kompresi ditemukan',
        description: 'Coba cari sesuatu seperti "JPG" atau "JPEG"',
        clear: 'Hapus pencarian'
      },
      formats: {
        jpg: {
          name: 'Kompresor JPG/JPEG',
          description:
            'Kompres gambar JPEG untuk mengurangi ukuran file sambil mempertahankan kualitas. Sempurna untuk optimasi web dan upload lebih cepat.'
        },
        png: {
          name: 'Kompresor PNG',
          description:
            'Kompres gambar PNG untuk mengurangi ukuran file sambil mempertahankan transparansi. Sempurna untuk grafik web dan gambar transparan.'
        },
        pdf: {
          name: 'Kompresor PDF',
          description:
            'Kompres file PDF untuk mengurangi ukuran file sambil mempertahankan kualitas dokumen. Sempurna untuk lampiran email dan berbagi web.'
        }
      }
    }
  },
  sv: {
    compress_page: {
      meta: {
        title: 'Gratis Online Filkompressor - Minska Filstorlek Direkt | MorphyHub',
        description:
          'Komprimera bilder, PDF och dokument online direkt. Minska filstorlekar med upp till 90% samtidigt som kvaliteten behålls. Snabb, säker och helt gratis. Ingen registrering krävs. Perfekt för webboptimering, e-postbilagor och lagringsbesparingar.',
        keywords:
          'filkompressor, online kompressor, bildkomprimering, komprimera jpg, komprimera bilder, minska filstorlek, batchkomprimering, gratis kompressor, pdf komprimering, jpeg komprimering, png komprimering, optimera bilder, krympa filer, komprimera foton'
      },
      schema: {
        name: 'Online Filkompressor',
        description:
          'Komprimera bilder, PDF och mer direkt i din webbläsare med MorphyHub. Minska filstorleken samtidigt som du behåller hög kvalitet — snabbt och säkert.'
      },
      hero: {
        title: 'Gratis Online Filkomprimeringsverktyg',
        description:
          'Minska filstorlekar med upp till 90% samtidigt som kvaliteten behålls. Komprimera bilder, PDF och dokument direkt för snabbare uppladdningar, e-postbilagor och lagringsoptimering. Snabb, säker och helt gratis.'
      },
      back_button: 'Tillbaka till Startsidan',
      search: {
        placeholder: 'Sök komprimeringsverktyg... (t.ex. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: 'Hittade {{count}} komprimeringsverktyg',
        results_one: 'Hittade {{count}} komprimeringsverktyg',
        results_other: 'Hittade {{count}} komprimeringsverktyg',
        suggestion: 'Försök söka efter något som "{{exampleOne}}" eller "{{exampleTwo}}"',
        clear: 'Rensa sökning'
      },
      categories: {
        image_compression: 'BILDKOMPRIMERING',
        document_compression: 'DOKUMENTKOMPRIMERING'
      },
      features: {
        title: 'Varför Välja Våra Kompressorer?',
        items: [
          {
            title: 'Snabb & Pålitlig',
            description: 'Komprimera filer snabbt med våra optimerade komprimeringsmotorer. Bearbeta flera filer på sekunder.'
          },
          {
            title: 'Säker & Privat',
            description: 'Dina filer bearbetas säkert i din webbläsare och lagras aldrig permanent på våra servrar. Din integritet är garanterad.'
          },
          {
            title: 'Hög Kvalitet',
            description: 'Behåll bildkvalitet och dokumentstruktur under komprimering. Smarta algoritmer bevarar visuell trohet.'
          },
          {
            title: '100% Gratis',
            description: 'Alla komprimeringsverktyg är helt gratis att använda. Ingen registrering, inga gränser, inga dolda avgifter.'
          },
          {
            title: 'Batchbearbetning',
            description: 'Komprimera flera filer samtidigt. Spara tid och optimera hela din filsamling effektivt.'
          }
        ]
      },
      actions: {
        compress: 'Komprimera'
      },
      no_results: {
        title: 'Inga komprimeringsverktyg hittades',
        description: 'Försök söka efter något som "JPG" eller "JPEG"',
        clear: 'Rensa sökning'
      },
      formats: {
        jpg: {
          name: 'JPG/JPEG Kompressor',
          description:
            'Komprimera JPEG-bilder för att minska filstorleken samtidigt som kvaliteten behålls. Perfekt för webboptimering och snabbare uppladdningar.'
        },
        png: {
          name: 'PNG Kompressor',
          description:
            'Komprimera PNG-bilder för att minska filstorleken samtidigt som transparensen behålls. Perfekt för webbgrafik och transparenta bilder.'
        },
        pdf: {
          name: 'PDF Kompressor',
          description:
            'Komprimera PDF-filer för att minska filstorleken samtidigt som dokumentkvaliteten behålls. Perfekt för e-postbilagor och webbdelning.'
        }
      }
    }
  },
  es: {
    compress_page: {
      meta: {
        title: 'Compresor de Archivos Online Gratis - Reduce Tamaño Instantáneamente | MorphyHub',
        description:
          'Comprime imágenes, PDF y documentos online instantáneamente. Reduce tamaños hasta 90% manteniendo calidad. Rápido, seguro y completamente gratis. Sin registro requerido. Perfecto para optimización web, adjuntos de email y ahorro de almacenamiento.',
        keywords:
          'compresor de archivos, compresor online, compresión de imágenes, comprimir jpg, comprimir imágenes, reducir tamaño archivo, compresión por lotes, compresor gratis, compresión pdf, compresión jpeg, compresión png, optimizar imágenes, reducir archivos, comprimir fotos'
      },
      schema: {
        name: 'Compresor de Archivos Online',
        description:
          'Comprime imágenes, PDF y más directamente en tu navegador con MorphyHub. Reduce el tamaño del archivo manteniendo alta calidad — rápido y seguro.'
      },
      hero: {
        title: 'Herramientas de Compresión de Archivos Online Gratis',
        description:
          'Reduce tamaños hasta 90% manteniendo calidad. Comprime imágenes, PDF y documentos instantáneamente para uploads más rápidos, adjuntos de email y optimización de almacenamiento. Rápido, seguro y completamente gratis.'
      },
      back_button: 'Volver al Inicio',
      search: {
        placeholder: 'Buscar herramientas de compresión... (ej. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: 'Se encontró {{count}} herramienta de compresión',
        results_one: 'Se encontró {{count}} herramienta de compresión',
        results_other: 'Se encontraron {{count}} herramientas de compresión',
        suggestion: 'Intenta buscar algo como "{{exampleOne}}" o "{{exampleTwo}}"',
        clear: 'Limpiar búsqueda'
      },
      categories: {
        image_compression: 'COMPRESIÓN DE IMÁGENES',
        document_compression: 'COMPRESIÓN DE DOCUMENTOS'
      },
      features: {
        title: '¿Por Qué Elegir Nuestros Compresores?',
        items: [
          {
            title: 'Rápido y Confiable',
            description: 'Comprime archivos rápidamente con nuestros motores de compresión optimizados. Procesa múltiples archivos en segundos.'
          },
          {
            title: 'Seguro y Privado',
            description: 'Tus archivos se procesan de forma segura en tu navegador y nunca se almacenan permanentemente en nuestros servidores. Tu privacidad está garantizada.'
          },
          {
            title: 'Alta Calidad',
            description: 'Mantén la calidad de imagen y estructura del documento durante la compresión. Algoritmos inteligentes preservan la fidelidad visual.'
          },
          {
            title: '100% Gratis',
            description: 'Todas las herramientas de compresión son completamente gratis de usar. Sin registro, sin límites, sin tarifas ocultas.'
          },
          {
            title: 'Procesamiento por Lotes',
            description: 'Comprime múltiples archivos a la vez. Ahorra tiempo y optimiza toda tu colección de archivos eficientemente.'
          }
        ]
      },
      actions: {
        compress: 'Comprimir'
      },
      no_results: {
        title: 'No se encontraron herramientas de compresión',
        description: 'Intenta buscar algo como "JPG" o "JPEG"',
        clear: 'Limpiar búsqueda'
      },
      formats: {
        jpg: {
          name: 'Compresor JPG/JPEG',
          description:
            'Comprime imágenes JPEG para reducir el tamaño del archivo manteniendo la calidad. Perfecto para optimización web y uploads más rápidos.'
        },
        png: {
          name: 'Compresor PNG',
          description:
            'Comprime imágenes PNG para reducir el tamaño del archivo manteniendo la transparencia. Perfecto para gráficos web e imágenes transparentes.'
        },
        pdf: {
          name: 'Compresor PDF',
          description:
            'Comprime archivos PDF para reducir el tamaño del archivo manteniendo la calidad del documento. Perfecto para adjuntos de email y compartir en web.'
        }
      }
    }
  },
  fr: {
    compress_page: {
      meta: {
        title: 'Compresseur de Fichiers en Ligne Gratuit - Réduire Taille Instantanément | MorphyHub',
        description:
          'Compressez images, PDF et documents en ligne instantanément. Réduisez les tailles jusqu\'à 90% en conservant la qualité. Rapide, sécurisé et entièrement gratuit. Aucune inscription requise. Parfait pour optimisation web, pièces jointes email et économie de stockage.',
        keywords:
          'compresseur de fichiers, compresseur en ligne, compression d\'images, compresser jpg, compresser images, réduire taille fichier, compression par lots, compresseur gratuit, compression pdf, compression jpeg, compression png, optimiser images, réduire fichiers, compresser photos'
      },
      schema: {
        name: 'Compresseur de Fichiers en Ligne',
        description:
          'Compressez images, PDF et plus directement dans votre navigateur avec MorphyHub. Réduisez la taille du fichier en conservant une qualité élevée — rapide et sûr.'
      },
      hero: {
        title: 'Outils de Compression de Fichiers en Ligne Gratuits',
        description:
          'Réduisez les tailles jusqu\'à 90% en conservant la qualité. Compressez images, PDF et documents instantanément pour uploads plus rapides, pièces jointes email et optimisation du stockage. Rapide, sécurisé et entièrement gratuit.'
      },
      back_button: 'Retour à l\'Accueil',
      search: {
        placeholder: 'Rechercher des outils de compression... (ex. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: '{{count}} outil de compression trouvé',
        results_one: '{{count}} outil de compression trouvé',
        results_other: '{{count}} outils de compression trouvés',
        suggestion: 'Essayez de rechercher quelque chose comme "{{exampleOne}}" ou "{{exampleTwo}}"',
        clear: 'Effacer la recherche'
      },
      categories: {
        image_compression: 'COMPRESSION D\'IMAGES',
        document_compression: 'COMPRESSION DE DOCUMENTS'
      },
      features: {
        title: 'Pourquoi Choisir Nos Compresseurs?',
        items: [
          {
            title: 'Rapide et Fiable',
            description: 'Compressez les fichiers rapidement avec nos moteurs de compression optimisés. Traitez plusieurs fichiers en secondes.'
          },
          {
            title: 'Sécurisé et Privé',
            description: 'Vos fichiers sont traités en toute sécurité dans votre navigateur et ne sont jamais stockés de manière permanente sur nos serveurs. Votre confidentialité est garantie.'
          },
          {
            title: 'Haute Qualité',
            description: 'Maintenez la qualité d\'image et la structure du document pendant la compression. Des algorithmes intelligents préservent la fidélité visuelle.'
          },
          {
            title: '100% Gratuit',
            description: 'Tous les outils de compression sont entièrement gratuits à utiliser. Aucune inscription, aucune limite, aucun frais caché.'
          },
          {
            title: 'Traitement par Lots',
            description: 'Compressez plusieurs fichiers à la fois. Gagnez du temps et optimisez toute votre collection de fichiers efficacement.'
          }
        ]
      },
      actions: {
        compress: 'Compresser'
      },
      no_results: {
        title: 'Aucun outil de compression trouvé',
        description: 'Essayez de rechercher quelque chose comme "JPG" ou "JPEG"',
        clear: 'Effacer la recherche'
      },
      formats: {
        jpg: {
          name: 'Compresseur JPG/JPEG',
          description:
            'Compressez les images JPEG pour réduire la taille du fichier tout en conservant la qualité. Parfait pour l\'optimisation web et des uploads plus rapides.'
        },
        png: {
          name: 'Compresseur PNG',
          description:
            'Compressez les images PNG pour réduire la taille du fichier tout en conservant la transparence. Parfait pour les graphiques web et les images transparentes.'
        },
        pdf: {
          name: 'Compresseur PDF',
          description:
            'Compressez les fichiers PDF pour réduire la taille du fichier tout en conservant la qualité du document. Parfait pour les pièces jointes email et le partage web.'
        }
      }
    }
  },
  it: {
    compress_page: {
      meta: {
        title: 'Compressore di File Online Gratis - Riduci Dimensione Istantaneamente | MorphyHub',
        description:
          'Comprimi immagini, PDF e documenti online istantaneamente. Riduci dimensioni fino al 90% mantenendo qualità. Veloce, sicuro e completamente gratuito. Nessuna registrazione richiesta. Perfetto per ottimizzazione web, allegati email e risparmio di storage.',
        keywords:
          'compressore di file, compressore online, compressione immagini, comprimere jpg, comprimere immagini, ridurre dimensione file, compressione batch, compressore gratuito, compressione pdf, compressione jpeg, compressione png, ottimizzare immagini, ridurre file, comprimere foto'
      },
      schema: {
        name: 'Compressore di File Online',
        description:
          'Comprimi immagini, PDF e altro direttamente nel tuo browser con MorphyHub. Riduci la dimensione del file mantenendo alta qualità — veloce e sicuro.'
      },
      hero: {
        title: 'Strumenti di Compressione File Online Gratuiti',
        description:
          'Riduci dimensioni fino al 90% mantenendo qualità. Comprimi immagini, PDF e documenti istantaneamente per upload più veloci, allegati email e ottimizzazione dello storage. Veloce, sicuro e completamente gratuito.'
      },
      back_button: 'Torna alla Home',
      search: {
        placeholder: 'Cerca strumenti di compressione... (es. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: 'Trovato {{count}} strumento di compressione',
        results_one: 'Trovato {{count}} strumento di compressione',
        results_other: 'Trovati {{count}} strumenti di compressione',
        suggestion: 'Prova a cercare qualcosa come "{{exampleOne}}" o "{{exampleTwo}}"',
        clear: 'Cancella ricerca'
      },
      categories: {
        image_compression: 'COMPRESSIONE IMMAGINI',
        document_compression: 'COMPRESSIONE DOCUMENTI'
      },
      features: {
        title: 'Perché Scegliere i Nostri Compressori?',
        items: [
          {
            title: 'Veloce e Affidabile',
            description: 'Comprimi file velocemente con i nostri motori di compressione ottimizzati. Elabora più file in secondi.'
          },
          {
            title: 'Sicuro e Privato',
            description: 'I tuoi file vengono elaborati in modo sicuro nel tuo browser e non vengono mai memorizzati permanentemente sui nostri server. La tua privacy è garantita.'
          },
          {
            title: 'Alta Qualità',
            description: 'Mantieni qualità immagine e struttura documento durante la compressione. Algoritmi intelligenti preservano la fedeltà visiva.'
          },
          {
            title: '100% Gratuito',
            description: 'Tutti gli strumenti di compressione sono completamente gratuiti da usare. Nessuna registrazione, nessun limite, nessun costo nascosto.'
          },
          {
            title: 'Elaborazione Batch',
            description: 'Comprimi più file contemporaneamente. Risparmia tempo e ottimizza tutta la tua collezione di file in modo efficiente.'
          }
        ]
      },
      actions: {
        compress: 'Comprimi'
      },
      no_results: {
        title: 'Nessuno strumento di compressione trovato',
        description: 'Prova a cercare qualcosa come "JPG" o "JPEG"',
        clear: 'Cancella ricerca'
      },
      formats: {
        jpg: {
          name: 'Compressore JPG/JPEG',
          description:
            'Comprimi immagini JPEG per ridurre la dimensione del file mantenendo la qualità. Perfetto per ottimizzazione web e upload più veloci.'
        },
        png: {
          name: 'Compressore PNG',
          description:
            'Comprimi immagini PNG per ridurre la dimensione del file mantenendo la trasparenza. Perfetto per grafica web e immagini trasparenti.'
        },
        pdf: {
          name: 'Compressore PDF',
          description:
            'Comprimi file PDF per ridurre la dimensione del file mantenendo la qualità del documento. Perfetto per allegati email e condivisione web.'
        }
      }
    }
  },
  nl: {
    compress_page: {
      meta: {
        title: 'Gratis Online Bestandscompressor - Verklein Grootte Direct | MorphyHub',
        description:
          'Comprimeer afbeeldingen, PDF en documenten online direct. Verklein groottes tot 90% met behoud van kwaliteit. Snel, veilig en volledig gratis. Geen registratie vereist. Perfect voor weboptimalisatie, e-mailbijlagen en opslagbesparing.',
        keywords:
          'bestandscompressor, online compressor, beeldcompressie, comprimeren jpg, comprimeren afbeeldingen, verkleinen bestandsgrootte, batchcompressie, gratis compressor, pdf compressie, jpeg compressie, png compressie, optimaliseren afbeeldingen, verkleinen bestanden, comprimeren foto\'s'
      },
      schema: {
        name: 'Online Bestandscompressor',
        description:
          'Comprimeer afbeeldingen, PDF en meer direct in uw browser met MorphyHub. Verklein de bestandsgrootte met behoud van hoge kwaliteit — snel en veilig.'
      },
      hero: {
        title: 'Gratis Online Bestandscompressietools',
        description:
          'Verklein groottes tot 90% met behoud van kwaliteit. Comprimeer afbeeldingen, PDF en documenten direct voor snellere uploads, e-mailbijlagen en opslagoptimalisatie. Snel, veilig en volledig gratis.'
      },
      back_button: 'Terug naar Startpagina',
      search: {
        placeholder: 'Zoek compressietools... (bijv. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: '{{count}} compressietool gevonden',
        results_one: '{{count}} compressietool gevonden',
        results_other: '{{count}} compressietools gevonden',
        suggestion: 'Probeer te zoeken naar iets zoals "{{exampleOne}}" of "{{exampleTwo}}"',
        clear: 'Zoekopdracht wissen'
      },
      categories: {
        image_compression: 'BEELDCOMPRESSIE',
        document_compression: 'DOCUMENTCOMPRESSIE'
      },
      features: {
        title: 'Waarom Onze Compressoren Kiezen?',
        items: [
          {
            title: 'Snel en Betrouwbaar',
            description: 'Comprimeer bestanden snel met onze geoptimaliseerde compressiemotoren. Verwerk meerdere bestanden in seconden.'
          },
          {
            title: 'Veilig en Privé',
            description: 'Uw bestanden worden veilig verwerkt in uw browser en worden nooit permanent opgeslagen op onze servers. Uw privacy is gegarandeerd.'
          },
          {
            title: 'Hoge Kwaliteit',
            description: 'Behoud beeldkwaliteit en documentstructuur tijdens compressie. Slimme algoritmen behouden visuele trouw.'
          },
          {
            title: '100% Gratis',
            description: 'Alle compressietools zijn volledig gratis te gebruiken. Geen registratie, geen limieten, geen verborgen kosten.'
          },
          {
            title: 'Batchverwerking',
            description: 'Comprimeer meerdere bestanden tegelijkertijd. Bespaar tijd en optimaliseer uw hele bestandsverzameling efficiënt.'
          }
        ]
      },
      actions: {
        compress: 'Comprimeren'
      },
      no_results: {
        title: 'Geen compressietools gevonden',
        description: 'Probeer te zoeken naar iets zoals "JPG" of "JPEG"',
        clear: 'Zoekopdracht wissen'
      },
      formats: {
        jpg: {
          name: 'JPG/JPEG Compressor',
          description:
            'Comprimeer JPEG-afbeeldingen om de bestandsgrootte te verkleinen met behoud van kwaliteit. Perfect voor weboptimalisatie en snellere uploads.'
        },
        png: {
          name: 'PNG Compressor',
          description:
            'Comprimeer PNG-afbeeldingen om de bestandsgrootte te verkleinen met behoud van transparantie. Perfect voor webgrafiek en transparante afbeeldingen.'
        },
        pdf: {
          name: 'PDF Compressor',
          description:
            'Comprimeer PDF-bestanden om de bestandsgrootte te verkleinen met behoud van documentkwaliteit. Perfect voor e-mailbijlagen en webdelen.'
        }
      }
    }
  },
  pt: {
    compress_page: {
      meta: {
        title: 'Compressor de Arquivos Online Grátis - Reduza Tamanho Instantaneamente | MorphyHub',
        description:
          'Comprima imagens, PDF e documentos online instantaneamente. Reduza tamanhos até 90% mantendo qualidade. Rápido, seguro e completamente gratuito. Sem registro necessário. Perfeito para otimização web, anexos de email e economia de armazenamento.',
        keywords:
          'compressor de arquivos, compressor online, compressão de imagens, comprimir jpg, comprimir imagens, reduzir tamanho arquivo, compressão em lote, compressor gratuito, compressão pdf, compressão jpeg, compressão png, otimizar imagens, reduzir arquivos, comprimir fotos'
      },
      schema: {
        name: 'Compressor de Arquivos Online',
        description:
          'Comprima imagens, PDF e mais diretamente no seu navegador com MorphyHub. Reduza o tamanho do arquivo mantendo alta qualidade — rápido e seguro.'
      },
      hero: {
        title: 'Ferramentas de Compressão de Arquivos Online Grátis',
        description:
          'Reduza tamanhos até 90% mantendo qualidade. Comprima imagens, PDF e documentos instantaneamente para uploads mais rápidos, anexos de email e otimização de armazenamento. Rápido, seguro e completamente gratuito.'
      },
      back_button: 'Voltar ao Início',
      search: {
        placeholder: 'Pesquisar ferramentas de compressão... (ex. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: 'Encontrado {{count}} ferramenta de compressão',
        results_one: 'Encontrado {{count}} ferramenta de compressão',
        results_other: 'Encontradas {{count}} ferramentas de compressão',
        suggestion: 'Tente pesquisar algo como "{{exampleOne}}" ou "{{exampleTwo}}"',
        clear: 'Limpar pesquisa'
      },
      categories: {
        image_compression: 'COMPRESSÃO DE IMAGENS',
        document_compression: 'COMPRESSÃO DE DOCUMENTOS'
      },
      features: {
        title: 'Por Que Escolher Nossos Compressores?',
        items: [
          {
            title: 'Rápido e Confiável',
            description: 'Comprima arquivos rapidamente com nossos motores de compressão otimizados. Processe vários arquivos em segundos.'
          },
          {
            title: 'Seguro e Privado',
            description: 'Seus arquivos são processados com segurança no seu navegador e nunca são armazenados permanentemente em nossos servidores. Sua privacidade é garantida.'
          },
          {
            title: 'Alta Qualidade',
            description: 'Mantenha a qualidade da imagem e estrutura do documento durante a compressão. Algoritmos inteligentes preservam a fidelidade visual.'
          },
          {
            title: '100% Grátis',
            description: 'Todas as ferramentas de compressão são completamente gratuitas para usar. Sem registro, sem limites, sem taxas ocultas.'
          },
          {
            title: 'Processamento em Lote',
            description: 'Comprima vários arquivos de uma vez. Economize tempo e otimize toda a sua coleção de arquivos eficientemente.'
          }
        ]
      },
      actions: {
        compress: 'Comprimir'
      },
      no_results: {
        title: 'Nenhuma ferramenta de compressão encontrada',
        description: 'Tente pesquisar algo como "JPG" ou "JPEG"',
        clear: 'Limpar pesquisa'
      },
      formats: {
        jpg: {
          name: 'Compressor JPG/JPEG',
          description:
            'Comprima imagens JPEG para reduzir o tamanho do arquivo mantendo a qualidade. Perfeito para otimização web e uploads mais rápidos.'
        },
        png: {
          name: 'Compressor PNG',
          description:
            'Comprima imagens PNG para reduzir o tamanho do arquivo mantendo a transparência. Perfeito para gráficos web e imagens transparentes.'
        },
        pdf: {
          name: 'Compressor PDF',
          description:
            'Comprima arquivos PDF para reduzir o tamanho do arquivo mantendo a qualidade do documento. Perfeito para anexos de email e compartilhamento web.'
        }
      }
    }
  },
  vi: {
    compress_page: {
      meta: {
        title: 'Nén Tệp Trực Tuyến Miễn Phí - Giảm Kích Thước Ngay Lập Tức | MorphyHub',
        description:
          'Nén hình ảnh, PDF và tài liệu trực tuyến ngay lập tức. Giảm kích thước lên đến 90% mà vẫn giữ nguyên chất lượng. Nhanh chóng, an toàn và hoàn toàn miễn phí. Không cần đăng ký. Hoàn hảo cho tối ưu hóa web, đính kèm email và tiết kiệm dung lượng.',
        keywords:
          'nén tệp, nén trực tuyến, nén hình ảnh, nén jpg, nén hình ảnh, giảm kích thước tệp, nén hàng loạt, nén miễn phí, nén pdf, nén jpeg, nén png, tối ưu hình ảnh, giảm tệp, nén ảnh'
      },
      schema: {
        name: 'Nén Tệp Trực Tuyến',
        description:
          'Nén hình ảnh, PDF và nhiều hơn nữa trực tiếp trong trình duyệt của bạn với MorphyHub. Giảm kích thước tệp mà vẫn giữ chất lượng cao — nhanh chóng và an toàn.'
      },
      hero: {
        title: 'Công Cụ Nén Tệp Trực Tuyến Miễn Phí',
        description:
          'Giảm kích thước lên đến 90% mà vẫn giữ nguyên chất lượng. Nén hình ảnh, PDF và tài liệu ngay lập tức để tải lên nhanh hơn, đính kèm email và tối ưu hóa dung lượng. Nhanh chóng, an toàn và hoàn toàn miễn phí.'
      },
      back_button: 'Về Trang Chủ',
      search: {
        placeholder: 'Tìm công cụ nén... (vd. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: 'Tìm thấy {{count}} công cụ nén',
        results_one: 'Tìm thấy {{count}} công cụ nén',
        results_other: 'Tìm thấy {{count}} công cụ nén',
        suggestion: 'Thử tìm kiếm thứ gì đó như "{{exampleOne}}" hoặc "{{exampleTwo}}"',
        clear: 'Xóa tìm kiếm'
      },
      categories: {
        image_compression: 'NÉN HÌNH ẢNH',
        document_compression: 'NÉN TÀI LIỆU'
      },
      features: {
        title: 'Tại Sao Chọn Công Cụ Nén Của Chúng Tôi?',
        items: [
          {
            title: 'Nhanh Chóng & Đáng Tin Cậy',
            description: 'Nén tệp nhanh chóng với công cụ nén được tối ưu hóa. Xử lý nhiều tệp trong vài giây.'
          },
          {
            title: 'An Toàn & Riêng Tư',
            description: 'Tệp của bạn được xử lý an toàn trong trình duyệt và không bao giờ được lưu trữ vĩnh viễn trên máy chủ của chúng tôi. Quyền riêng tư của bạn được đảm bảo.'
          },
          {
            title: 'Chất Lượng Cao',
            description: 'Duy trì chất lượng hình ảnh và cấu trúc tài liệu trong quá trình nén. Thuật toán thông minh giữ nguyên độ trung thực hình ảnh.'
          },
          {
            title: '100% Miễn Phí',
            description: 'Tất cả công cụ nén đều hoàn toàn miễn phí để sử dụng. Không đăng ký, không giới hạn, không phí ẩn.'
          },
          {
            title: 'Xử Lý Hàng Loạt',
            description: 'Nén nhiều tệp cùng lúc. Tiết kiệm thời gian và tối ưu hóa toàn bộ bộ sưu tập tệp của bạn hiệu quả.'
          }
        ]
      },
      actions: {
        compress: 'Nén'
      },
      no_results: {
        title: 'Không tìm thấy công cụ nén',
        description: 'Thử tìm kiếm thứ gì đó như "JPG" hoặc "JPEG"',
        clear: 'Xóa tìm kiếm'
      },
      formats: {
        jpg: {
          name: 'Nén JPG/JPEG',
          description:
            'Nén hình ảnh JPEG để giảm kích thước tệp mà vẫn giữ nguyên chất lượng. Hoàn hảo cho tối ưu hóa web và tải lên nhanh hơn.'
        },
        png: {
          name: 'Nén PNG',
          description:
            'Nén hình ảnh PNG để giảm kích thước tệp mà vẫn giữ nguyên độ trong suốt. Hoàn hảo cho đồ họa web và hình ảnh trong suốt.'
        },
        pdf: {
          name: 'Nén PDF',
          description:
            'Nén tệp PDF để giảm kích thước tệp mà vẫn giữ nguyên chất lượng tài liệu. Hoàn hảo cho đính kèm email và chia sẻ web.'
        }
      }
    }
  },
  tr: {
    compress_page: {
      meta: {
        title: 'Ücretsiz Çevrimiçi Dosya Sıkıştırıcı - Dosya Boyutunu Anında Küçült | MorphyHub',
        description:
          'Görüntüleri, PDF ve belgeleri çevrimiçi anında sıkıştırın. Kaliteyi korurken boyutları %90\'a kadar küçültün. Hızlı, güvenli ve tamamen ücretsiz. Kayıt gerekmez. Web optimizasyonu, e-posta ekleri ve depolama tasarrufu için mükemmel.',
        keywords:
          'dosya sıkıştırıcı, çevrimiçi sıkıştırıcı, görüntü sıkıştırma, jpg sıkıştır, görüntüleri sıkıştır, dosya boyutunu küçült, toplu sıkıştırma, ücretsiz sıkıştırıcı, pdf sıkıştırma, jpeg sıkıştırma, png sıkıştırma, görüntüleri optimize et, dosyaları küçült, fotoğrafları sıkıştır'
      },
      schema: {
        name: 'Çevrimiçi Dosya Sıkıştırıcı',
        description:
          'MorphyHub ile tarayıcınızda görüntüleri, PDF ve daha fazlasını doğrudan sıkıştırın. Yüksek kaliteyi korurken dosya boyutunu küçültün — hızlı ve güvenli.'
      },
      hero: {
        title: 'Ücretsiz Çevrimiçi Dosya Sıkıştırma Araçları',
        description:
          'Kaliteyi korurken boyutları %90\'a kadar küçültün. Daha hızlı yüklemeler, e-posta ekleri ve depolama optimizasyonu için görüntüleri, PDF ve belgeleri anında sıkıştırın. Hızlı, güvenli ve tamamen ücretsiz.'
      },
      back_button: 'Ana Sayfaya Dön',
      search: {
        placeholder: 'Sıkıştırma araçları ara... (örn. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: '{{count}} sıkıştırma aracı bulundu',
        results_one: '{{count}} sıkıştırma aracı bulundu',
        results_other: '{{count}} sıkıştırma aracı bulundu',
        suggestion: '"{{exampleOne}}" veya "{{exampleTwo}}" gibi bir şey aramayı deneyin',
        clear: 'Aramayı temizle'
      },
      categories: {
        image_compression: 'GÖRÜNTÜ SIKIŞTIRMA',
        document_compression: 'BELGE SIKIŞTIRMA'
      },
      features: {
        title: 'Neden Sıkıştırıcılarımızı Seçmelisiniz?',
        items: [
          {
            title: 'Hızlı ve Güvenilir',
            description: 'Optimize edilmiş sıkıştırma motorlarımızla dosyaları hızlıca sıkıştırın. Saniyeler içinde birden fazla dosya işleyin.'
          },
          {
            title: 'Güvenli ve Özel',
            description: 'Dosyalarınız tarayıcınızda güvenli bir şekilde işlenir ve sunucularımızda asla kalıcı olarak saklanmaz. Gizliliğiniz garanti altındadır.'
          },
          {
            title: 'Yüksek Kalite',
            description: 'Sıkıştırma sırasında görüntü kalitesini ve belge yapısını koruyun. Akıllı algoritmalar görsel doğruluğu korur.'
          },
          {
            title: '%100 Ücretsiz',
            description: 'Tüm sıkıştırma araçları tamamen ücretsizdir. Kayıt yok, limit yok, gizli ücret yok.'
          },
          {
            title: 'Toplu İşleme',
            description: 'Birden fazla dosyayı aynı anda sıkıştırın. Zaman kazanın ve tüm dosya koleksiyonunuzu verimli bir şekilde optimize edin.'
          }
        ]
      },
      actions: {
        compress: 'Sıkıştır'
      },
      no_results: {
        title: 'Sıkıştırma aracı bulunamadı',
        description: '"JPG" veya "JPEG" gibi bir şey aramayı deneyin',
        clear: 'Aramayı temizle'
      },
      formats: {
        jpg: {
          name: 'JPG/JPEG Sıkıştırıcı',
          description:
            'Kaliteyi korurken dosya boyutunu küçültmek için JPEG görüntülerini sıkıştırın. Web optimizasyonu ve daha hızlı yüklemeler için mükemmel.'
        },
        png: {
          name: 'PNG Sıkıştırıcı',
          description:
            'Şeffaflığı korurken dosya boyutunu küçültmek için PNG görüntülerini sıkıştırın. Web grafikleri ve şeffaf görüntüler için mükemmel.'
        },
        pdf: {
          name: 'PDF Sıkıştırıcı',
          description:
            'Belge kalitesini korurken dosya boyutunu küçültmek için PDF dosyalarını sıkıştırın. E-posta ekleri ve web paylaşımı için mükemmel.'
        }
      }
    }
  },
  ru: {
    compress_page: {
      meta: {
        title: 'Бесплатный Онлайн Компрессор Файлов - Уменьшить Размер Мгновенно | MorphyHub',
        description:
          'Сжимайте изображения, PDF и документы онлайн мгновенно. Уменьшите размеры до 90% при сохранении качества. Быстро, безопасно и полностью бесплатно. Регистрация не требуется. Идеально для веб-оптимизации, вложений email и экономии места.',
        keywords:
          'компрессор файлов, онлайн компрессор, сжатие изображений, сжать jpg, сжать изображения, уменьшить размер файла, пакетное сжатие, бесплатный компрессор, сжатие pdf, сжатие jpeg, сжатие png, оптимизировать изображения, уменьшить файлы, сжать фото'
      },
      schema: {
        name: 'Онлайн Компрессор Файлов',
        description:
          'Сжимайте изображения, PDF и многое другое прямо в вашем браузере с MorphyHub. Уменьшите размер файла при сохранении высокого качества — быстро и безопасно.'
      },
      hero: {
        title: 'Бесплатные Онлайн Инструменты Сжатия Файлов',
        description:
          'Уменьшите размеры до 90% при сохранении качества. Сжимайте изображения, PDF и документы мгновенно для более быстрых загрузок, вложений email и оптимизации хранилища. Быстро, безопасно и полностью бесплатно.'
      },
      back_button: 'Вернуться на Главную',
      search: {
        placeholder: 'Поиск инструментов сжатия... (например, JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: 'Найден {{count}} инструмент сжатия',
        results_one: 'Найден {{count}} инструмент сжатия',
        results_few: 'Найдено {{count}} инструмента сжатия',
        results_many: 'Найдено {{count}} инструментов сжатия',
        results_other: 'Найдено {{count}} инструмента сжатия',
        suggestion: 'Попробуйте найти что-то вроде "{{exampleOne}}" или "{{exampleTwo}}"',
        clear: 'Очистить поиск'
      },
      categories: {
        image_compression: 'СЖАТИЕ ИЗОБРАЖЕНИЙ',
        document_compression: 'СЖАТИЕ ДОКУМЕНТОВ'
      },
      features: {
        title: 'Почему Выбрать Наши Компрессоры?',
        items: [
          {
            title: 'Быстро и Надежно',
            description: 'Сжимайте файлы быстро с нашими оптимизированными движками сжатия. Обрабатывайте несколько файлов за секунды.'
          },
          {
            title: 'Безопасно и Приватно',
            description: 'Ваши файлы обрабатываются безопасно в вашем браузере и никогда не сохраняются постоянно на наших серверах. Ваша конфиденциальность гарантирована.'
          },
          {
            title: 'Высокое Качество',
            description: 'Сохраняйте качество изображения и структуру документа во время сжатия. Умные алгоритмы сохраняют визуальную точность.'
          },
          {
            title: '100% Бесплатно',
            description: 'Все инструменты сжатия полностью бесплатны в использовании. Без регистрации, без ограничений, без скрытых платежей.'
          },
          {
            title: 'Пакетная Обработка',
            description: 'Сжимайте несколько файлов одновременно. Экономьте время и оптимизируйте всю вашу коллекцию файлов эффективно.'
          }
        ]
      },
      actions: {
        compress: 'Сжать'
      },
      no_results: {
        title: 'Инструменты сжатия не найдены',
        description: 'Попробуйте найти что-то вроде "JPG" или "JPEG"',
        clear: 'Очистить поиск'
      },
      formats: {
        jpg: {
          name: 'Компрессор JPG/JPEG',
          description:
            'Сжимайте изображения JPEG для уменьшения размера файла при сохранении качества. Идеально для веб-оптимизации и более быстрых загрузок.'
        },
        png: {
          name: 'Компрессор PNG',
          description:
            'Сжимайте изображения PNG для уменьшения размера файла при сохранении прозрачности. Идеально для веб-графики и прозрачных изображений.'
        },
        pdf: {
          name: 'Компрессор PDF',
          description:
            'Сжимайте файлы PDF для уменьшения размера файла при сохранении качества документа. Идеально для вложений email и веб-обмена.'
        }
      }
    }
  },
  ar: {
    compress_page: {
      meta: {
        title: 'ضاغط الملفات المجاني عبر الإنترنت - تصغير الحجم فوراً | MorphyHub',
        description:
          'اضغط الصور وPDF والمستندات عبر الإنترنت فوراً. قلل الأحجام حتى 90% مع الحفاظ على الجودة. سريع وآمن ومجاني تماماً. لا حاجة للتسجيل. مثالي لتحسين الويب ومرفقات البريد الإلكتروني وتوفير مساحة التخزين.',
        keywords:
          'ضاغط الملفات, ضاغط عبر الإنترنت, ضغط الصور, ضغط jpg, ضغط الصور, تصغير حجم الملف, الضغط الدفعي, ضاغط مجاني, ضغط pdf, ضغط jpeg, ضغط png, تحسين الصور, تصغير الملفات, ضغط الصور'
      },
      schema: {
        name: 'ضاغط الملفات عبر الإنترنت',
        description:
          'اضغط الصور وPDF والمزيد مباشرة في متصفحك مع MorphyHub. قلل حجم الملف مع الحفاظ على جودة عالية — سريع وآمن.'
      },
      hero: {
        title: 'أدوات ضغط الملفات المجانية عبر الإنترنت',
        description:
          'قلل الأحجام حتى 90% مع الحفاظ على الجودة. اضغط الصور وPDF والمستندات فوراً للتحميلات الأسرع ومرفقات البريد الإلكتروني وتحسين التخزين. سريع وآمن ومجاني تماماً.'
      },
      back_button: 'العودة إلى الصفحة الرئيسية',
      search: {
        placeholder: 'البحث عن أدوات الضغط... (مثل JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: 'تم العثور على {{count}} أداة ضغط',
        results_one: 'تم العثور على {{count}} أداة ضغط',
        results_other: 'تم العثور على {{count}} أداة ضغط',
        suggestion: 'حاول البحث عن شيء مثل "{{exampleOne}}" أو "{{exampleTwo}}"',
        clear: 'مسح البحث'
      },
      categories: {
        image_compression: 'ضغط الصور',
        document_compression: 'ضغط المستندات'
      },
      features: {
        title: 'لماذا تختار ضواغطنا؟',
        items: [
          {
            title: 'سريع وموثوق',
            description: 'اضغط الملفات بسرعة باستخدام محركات الضغط المحسّنة. معالجة عدة ملفات في ثوانٍ.'
          },
          {
            title: 'آمن وخاص',
            description: 'يتم معالجة ملفاتك بأمان في متصفحك ولا يتم تخزينها أبداً بشكل دائم على خوادمنا. خصوصيتك مضمونة.'
          },
          {
            title: 'جودة عالية',
            description: 'احتفظ بجودة الصورة وهيكل المستند أثناء الضغط. الخوارزميات الذكية تحافظ على الدقة البصرية.'
          },
          {
            title: '100% مجاني',
            description: 'جميع أدوات الضغط مجانية تماماً للاستخدام. لا تسجيل، لا حدود، لا رسوم مخفية.'
          },
          {
            title: 'المعالجة الدفعية',
            description: 'اضغط عدة ملفات في وقت واحد. وفر الوقت وحسّن مجموعة ملفاتك بالكامل بكفاءة.'
          }
        ]
      },
      actions: {
        compress: 'ضغط'
      },
      no_results: {
        title: 'لم يتم العثور على أدوات ضغط',
        description: 'حاول البحث عن شيء مثل "JPG" أو "JPEG"',
        clear: 'مسح البحث'
      },
      formats: {
        jpg: {
          name: 'ضاغط JPG/JPEG',
          description:
            'اضغط صور JPEG لتقليل حجم الملف مع الحفاظ على الجودة. مثالي لتحسين الويب والتحميلات الأسرع.'
        },
        png: {
          name: 'ضاغط PNG',
          description:
            'اضغط صور PNG لتقليل حجم الملف مع الحفاظ على الشفافية. مثالي للرسوم البيانية للويب والصور الشفافة.'
        },
        pdf: {
          name: 'ضاغط PDF',
          description:
            'اضغط ملفات PDF لتقليل حجم الملف مع الحفاظ على جودة المستند. مثالي لمرفقات البريد الإلكتروني ومشاركة الويب.'
        }
      }
    }
  },
  th: {
    compress_page: {
      meta: {
        title: 'เครื่องบีบอัดไฟล์ออนไลน์ฟรี - ลดขนาดทันที | MorphyHub',
        description:
          'บีบอัดรูปภาพ PDF และเอกสารออนไลน์ทันที ลดขนาดได้ถึง 90% โดยคงคุณภาพไว้ เร็ว ปลอดภัย และฟรีทั้งหมด ไม่ต้องลงทะเบียน เหมาะสำหรับการเพิ่มประสิทธิภาพเว็บ ไฟล์แนบอีเมล และประหยัดพื้นที่เก็บข้อมูล',
        keywords:
          'เครื่องบีบอัดไฟล์, เครื่องบีบอัดออนไลน์, การบีบอัดรูปภาพ, บีบอัด jpg, บีบอัดรูปภาพ, ลดขนาดไฟล์, การบีบอัดแบบกลุ่ม, เครื่องบีบอัดฟรี, การบีบอัด pdf, การบีบอัด jpeg, การบีบอัด png, เพิ่มประสิทธิภาพรูปภาพ, ลดไฟล์, บีบอัดรูปภาพ'
      },
      schema: {
        name: 'เครื่องบีบอัดไฟล์ออนไลน์',
        description:
          'บีบอัดรูปภาพ PDF และอื่นๆ โดยตรงในเบราว์เซอร์ของคุณกับ MorphyHub ลดขนาดไฟล์โดยคงคุณภาพสูงไว้ — เร็วและปลอดภัย'
      },
      hero: {
        title: 'เครื่องมือบีบอัดไฟล์ออนไลน์ฟรี',
        description:
          'ลดขนาดได้ถึง 90% โดยคงคุณภาพไว้ บีบอัดรูปภาพ PDF และเอกสารทันทีสำหรับการอัปโหลดที่เร็วขึ้น ไฟล์แนบอีเมล และการเพิ่มประสิทธิภาพพื้นที่เก็บข้อมูล เร็ว ปลอดภัย และฟรีทั้งหมด'
      },
      back_button: 'กลับหน้าหลัก',
      search: {
        placeholder: 'ค้นหาเครื่องมือบีบอัด... (เช่น JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: 'พบ {{count}} เครื่องมือบีบอัด',
        results_one: 'พบ {{count}} เครื่องมือบีบอัด',
        results_other: 'พบ {{count}} เครื่องมือบีบอัด',
        suggestion: 'ลองค้นหาบางอย่างเช่น "{{exampleOne}}" หรือ "{{exampleTwo}}"',
        clear: 'ล้างการค้นหา'
      },
      categories: {
        image_compression: 'การบีบอัดรูปภาพ',
        document_compression: 'การบีบอัดเอกสาร'
      },
      features: {
        title: 'ทำไมต้องเลือกเครื่องบีบอัดของเรา?',
        items: [
          {
            title: 'เร็วและเชื่อถือได้',
            description: 'บีบอัดไฟล์ได้อย่างรวดเร็วด้วยเครื่องยนต์บีบอัดที่เพิ่มประสิทธิภาพ ประมวลผลหลายไฟล์ในไม่กี่วินาที'
          },
          {
            title: 'ปลอดภัยและเป็นส่วนตัว',
            description: 'ไฟล์ของคุณถูกประมวลผลอย่างปลอดภัยในเบราว์เซอร์และไม่เคยถูกเก็บไว้ถาวรบนเซิร์ฟเวอร์ของเรา ความเป็นส่วนตัวของคุณได้รับการรับประกัน'
          },
          {
            title: 'คุณภาพสูง',
            description: 'รักษาคุณภาพรูปภาพและโครงสร้างเอกสารระหว่างการบีบอัด อัลกอริทึมอัจฉริยะรักษาความเที่ยงตรงของภาพ'
          },
          {
            title: '100% ฟรี',
            description: 'เครื่องมือบีบอัดทั้งหมดฟรีใช้งาน ไม่ต้องลงทะเบียน ไม่มีขีดจำกัด ไม่มีค่าธรรมเนียมแอบแฝง'
          },
          {
            title: 'การประมวลผลแบบกลุ่ม',
            description: 'บีบอัดหลายไฟล์พร้อมกัน ประหยัดเวลาและเพิ่มประสิทธิภาพคอลเลกชันไฟล์ทั้งหมดของคุณอย่างมีประสิทธิภาพ'
          }
        ]
      },
      actions: {
        compress: 'บีบอัด'
      },
      no_results: {
        title: 'ไม่พบเครื่องมือบีบอัด',
        description: 'ลองค้นหาบางอย่างเช่น "JPG" หรือ "JPEG"',
        clear: 'ล้างการค้นหา'
      },
      formats: {
        jpg: {
          name: 'เครื่องบีบอัด JPG/JPEG',
          description:
            'บีบอัดรูปภาพ JPEG เพื่อลดขนาดไฟล์โดยคงคุณภาพไว้ เหมาะสำหรับการเพิ่มประสิทธิภาพเว็บและการอัปโหลดที่เร็วขึ้น'
        },
        png: {
          name: 'เครื่องบีบอัด PNG',
          description:
            'บีบอัดรูปภาพ PNG เพื่อลดขนาดไฟล์โดยคงความโปร่งใสไว้ เหมาะสำหรับกราฟิกเว็บและรูปภาพโปร่งใส'
        },
        pdf: {
          name: 'เครื่องบีบอัด PDF',
          description:
            'บีบอัดไฟล์ PDF เพื่อลดขนาดไฟล์โดยคงคุณภาพเอกสารไว้ เหมาะสำหรับไฟล์แนบอีเมลและการแชร์เว็บ'
        }
      }
    }
  },
  ja: {
    compress_page: {
      meta: {
        title: '無料オンラインファイル圧縮ツール - サイズを即座に削減 | MorphyHub',
        description:
          '画像、PDF、文書をオンラインで即座に圧縮。品質を保ちながらサイズを最大90%削減。高速、安全、完全無料。登録不要。Web最適化、メール添付、ストレージ節約に最適。',
        keywords:
          'ファイル圧縮, オンライン圧縮, 画像圧縮, jpg圧縮, 画像圧縮, ファイルサイズ削減, バッチ圧縮, 無料圧縮, pdf圧縮, jpeg圧縮, png圧縮, 画像最適化, ファイル削減, 写真圧縮'
      },
      schema: {
        name: 'オンラインファイル圧縮ツール',
        description:
          'MorphyHubでブラウザで画像、PDFなどを直接圧縮。高品質を保ちながらファイルサイズを削減 — 高速で安全。'
      },
      hero: {
        title: '無料オンラインファイル圧縮ツール',
        description:
          '品質を保ちながらサイズを最大90%削減。より高速なアップロード、メール添付、ストレージ最適化のために画像、PDF、文書を即座に圧縮。高速、安全、完全無料。'
      },
      back_button: 'ホームに戻る',
      search: {
        placeholder: '圧縮ツールを検索... (例: JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: '{{count}}件の圧縮ツールが見つかりました',
        results_one: '{{count}}件の圧縮ツールが見つかりました',
        results_other: '{{count}}件の圧縮ツールが見つかりました',
        suggestion: '"{{exampleOne}}"または"{{exampleTwo}}"のようなものを検索してみてください',
        clear: '検索をクリア'
      },
      categories: {
        image_compression: '画像圧縮',
        document_compression: '文書圧縮'
      },
      features: {
        title: 'なぜ当社の圧縮ツールを選ぶのか？',
        items: [
          {
            title: '高速で信頼性',
            description: '最適化された圧縮エンジンでファイルを迅速に圧縮。数秒で複数のファイルを処理。'
          },
          {
            title: '安全でプライベート',
            description: 'ファイルはブラウザで安全に処理され、サーバーに永久保存されることはありません。プライバシーが保証されます。'
          },
          {
            title: '高品質',
            description: '圧縮中に画像品質と文書構造を維持。スマートアルゴリズムが視覚的な忠実度を保持。'
          },
          {
            title: '100%無料',
            description: 'すべての圧縮ツールは完全に無料で使用できます。登録不要、制限なし、隠れた料金なし。'
          },
          {
            title: 'バッチ処理',
            description: '複数のファイルを同時に圧縮。時間を節約し、ファイルコレクション全体を効率的に最適化。'
          }
        ]
      },
      actions: {
        compress: '圧縮'
      },
      no_results: {
        title: '圧縮ツールが見つかりませんでした',
        description: '"JPG"または"JPEG"のようなものを検索してみてください',
        clear: '検索をクリア'
      },
      formats: {
        jpg: {
          name: 'JPG/JPEG圧縮ツール',
          description:
            '品質を保ちながらファイルサイズを削減するためにJPEG画像を圧縮。Web最適化とより高速なアップロードに最適。'
        },
        png: {
          name: 'PNG圧縮ツール',
          description:
            '透明度を保ちながらファイルサイズを削減するためにPNG画像を圧縮。Webグラフィックと透明画像に最適。'
        },
        pdf: {
          name: 'PDF圧縮ツール',
          description:
            '文書品質を保ちながらファイルサイズを削減するためにPDFファイルを圧縮。メール添付とWeb共有に最適。'
        }
      }
    }
  },
  zh: {
    compress_page: {
      meta: {
        title: '免费在线文件压缩工具 - 即时减小尺寸 | MorphyHub',
        description:
          '即时在线压缩图像、PDF和文档。在保持质量的同时将尺寸减小高达90%。快速、安全且完全免费。无需注册。非常适合Web优化、电子邮件附件和节省存储空间。',
        keywords:
          '文件压缩, 在线压缩, 图像压缩, 压缩jpg, 压缩图像, 减小文件大小, 批量压缩, 免费压缩, pdf压缩, jpeg压缩, png压缩, 优化图像, 减小文件, 压缩照片'
      },
      schema: {
        name: '在线文件压缩工具',
        description:
          '使用MorphyHub直接在浏览器中压缩图像、PDF等。在保持高质量的同时减小文件大小 — 快速且安全。'
      },
      hero: {
        title: '免费在线文件压缩工具',
        description:
          '在保持质量的同时将尺寸减小高达90%。即时压缩图像、PDF和文档，以实现更快的上传、电子邮件附件和存储优化。快速、安全且完全免费。'
      },
      back_button: '返回首页',
      search: {
        placeholder: '搜索压缩工具... (例如: JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: '找到 {{count}} 个压缩工具',
        results_one: '找到 {{count}} 个压缩工具',
        results_other: '找到 {{count}} 个压缩工具',
        suggestion: '尝试搜索类似 "{{exampleOne}}" 或 "{{exampleTwo}}" 的内容',
        clear: '清除搜索'
      },
      categories: {
        image_compression: '图像压缩',
        document_compression: '文档压缩'
      },
      features: {
        title: '为什么选择我们的压缩工具？',
        items: [
          {
            title: '快速可靠',
            description: '使用优化的压缩引擎快速压缩文件。在几秒钟内处理多个文件。'
          },
          {
            title: '安全私密',
            description: '您的文件在浏览器中安全处理，永远不会永久存储在我们的服务器上。您的隐私得到保障。'
          },
          {
            title: '高质量',
            description: '在压缩过程中保持图像质量和文档结构。智能算法保持视觉保真度。'
          },
          {
            title: '100%免费',
            description: '所有压缩工具完全免费使用。无需注册，无限制，无隐藏费用。'
          },
          {
            title: '批量处理',
            description: '同时压缩多个文件。节省时间并有效优化整个文件集合。'
          }
        ]
      },
      actions: {
        compress: '压缩'
      },
      no_results: {
        title: '未找到压缩工具',
        description: '尝试搜索类似 "JPG" 或 "JPEG" 的内容',
        clear: '清除搜索'
      },
      formats: {
        jpg: {
          name: 'JPG/JPEG压缩工具',
          description:
            '压缩JPEG图像以减小文件大小同时保持质量。非常适合Web优化和更快的上传。'
        },
        png: {
          name: 'PNG压缩工具',
          description:
            '压缩PNG图像以减小文件大小同时保持透明度。非常适合Web图形和透明图像。'
        },
        pdf: {
          name: 'PDF压缩工具',
          description:
            '压缩PDF文件以减小文件大小同时保持文档质量。非常适合电子邮件附件和Web共享。'
        }
      }
    }
  }
};

Object.entries(compressPageResources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

