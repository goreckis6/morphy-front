import i18n // from '../i18n';

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
        title: 'Online File Compressor – Reduce File Size | FormiPeek',
        description:
          'Compress images, PDFs, videos, and documents online. FormiPeek makes your files smaller and faster to share — without losing quality.',
        keywords:
          'file compressor, online compressor, image compression, compress jpg, compress images, reduce file size, batch compression, free compressor, video compression'
      },
      schema: {
        name: 'Online File Compressor',
        description:
          'Compress images, PDFs, videos, and more directly in your browser with FormiPeek. Reduce file size while keeping great quality — fast and secure.'
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
        title: 'Kompresor Plików Online – Zmniejsz Rozmiar Pliku | FormiPeek',
        description:
          'Kompresuj obrazy, PDF, wideo i dokumenty online. FormiPeek sprawia, że Twoje pliki są mniejsze i szybsze do udostępnienia — bez utraty jakości.',
        keywords:
          'kompresor plików, kompresor online, kompresja obrazów, kompresja jpg, kompresja obrazów, zmniejsz rozmiar pliku, kompresja wsadowa, darmowy kompresor, kompresja wideo'
      },
      schema: {
        name: 'Kompresor Plików Online',
        description:
          'Kompresuj obrazy, PDF, wideo i więcej bezpośrednio w przeglądarce z FormiPeek. Zmniejsz rozmiar pliku przy zachowaniu wysokiej jakości — szybko i bezpiecznie.'
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
        title: 'Online-Dateikompressor – Dateigröße Reduzieren | FormiPeek',
        description:
          'Komprimieren Sie Bilder, PDFs, Videos und Dokumente online. FormiPeek macht Ihre Dateien kleiner und schneller zum Teilen — ohne Qualitätsverlust.',
        keywords:
          'datei kompressor, online kompressor, bildkomprimierung, jpg komprimieren, bilder komprimieren, dateigröße reduzieren, stapel komprimierung, kostenloser kompressor, videokomprimierung'
      },
      schema: {
        name: 'Online-Dateikompressor',
        description:
          'Komprimieren Sie Bilder, PDFs, Videos und mehr direkt in Ihrem Browser mit FormiPeek. Reduzieren Sie die Dateigröße bei gleichbleibender Qualität — schnell und sicher.'
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
  es: {
    compress_page: {
      meta: {
        title: 'Compresor de archivos en línea – Reducir tamaño de archivo | FormiPeek',
        description:
          'Comprime imágenes, PDFs, videos y documentos en línea. FormiPeek hace que tus archivos sean más pequeños y rápidos de compartir — sin perder calidad.',
        keywords:
          'compresor de archivos, compresor en línea, compresión de imágenes, comprimir jpg, comprimir imágenes, reducir tamaño de archivo, compresión por lotes, compresor gratuito, compresión de video'
      },
      schema: {
        name: 'Compresor de archivos en línea',
        description:
          'Comprime imágenes, PDFs, videos y más directamente en tu navegador con FormiPeek. Reduce el tamaño del archivo manteniendo una gran calidad — rápido y seguro.'
      },
      hero: {
        title: 'Herramientas de compresión de archivos',
        description:
          'Reduce el tamaño de los archivos manteniendo la calidad. Comprime imágenes, documentos y más para cargas más rápidas y optimización de almacenamiento.'
      },
      back_button: 'Volver al inicio',
      search: {
        placeholder: 'Buscar herramientas de compresión... (ej., JPG, JPEG)',
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
        title: '¿Por qué elegir nuestros compresores?',
        items: [
          {
            title: 'Rápido y confiable',
            description: 'Comprime archivos rápidamente con nuestros motores de compresión optimizados.'
          },
          {
            title: 'Seguro y privado',
            description: 'Tus archivos se procesan de forma segura y nunca se almacenan permanentemente.'
          },
          {
            title: 'Alta calidad',
            description: 'Mantén la calidad de la imagen y la estructura del documento durante la compresión.'
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
            'Comprime imágenes JPEG para reducir el tamaño del archivo manteniendo la calidad. Perfecto para optimización web y cargas más rápidas.'
        },
        png: {
          name: 'Compresor PNG',
          description:
            'Comprime imágenes PNG para reducir el tamaño del archivo preservando la transparencia. Perfecto para gráficos web e imágenes transparentes.'
        },
        pdf: {
          name: 'Compresor PDF',
          description:
            'Comprime archivos PDF para reducir el tamaño del archivo manteniendo la calidad del documento. Perfecto para adjuntos de correo electrónico y compartir en web.'
        }
      }
    }
  },
  fr: {
    compress_page: {
      meta: {
        title: 'Compresseur de fichiers en ligne – Réduire la taille du fichier | FormiPeek',
        description:
          'Compressez des images, PDFs, vidéos et documents en ligne. FormiPeek rend vos fichiers plus petits et plus rapides à partager — sans perte de qualité.',
        keywords:
          'compresseur de fichiers, compresseur en ligne, compression d\'images, compresser jpg, compresser images, réduire taille fichier, compression par lots, compresseur gratuit, compression vidéo'
      },
      schema: {
        name: 'Compresseur de fichiers en ligne',
        description:
          'Compressez des images, PDFs, vidéos et plus directement dans votre navigateur avec FormiPeek. Réduisez la taille du fichier tout en conservant une excellente qualité — rapide et sécurisé.'
      },
      hero: {
        title: 'Outils de compression de fichiers',
        description:
          'Réduisez la taille des fichiers tout en maintenant la qualité. Compressez des images, documents et plus pour des téléchargements plus rapides et une optimisation du stockage.'
      },
      back_button: 'Retour à l\'accueil',
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
        title: 'Pourquoi choisir nos compresseurs?',
        items: [
          {
            title: 'Rapide et fiable',
            description: 'Compressez les fichiers rapidement avec nos moteurs de compression optimisés.'
          },
          {
            title: 'Sécurisé et privé',
            description: 'Vos fichiers sont traités en toute sécurité et ne sont jamais stockés de façon permanente.'
          },
          {
            title: 'Haute qualité',
            description: 'Maintenez la qualité de l\'image et la structure du document pendant la compression.'
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
            'Compressez les images JPEG pour réduire la taille du fichier tout en maintenant la qualité. Parfait pour l\'optimisation web et des téléchargements plus rapides.'
        },
        png: {
          name: 'Compresseur PNG',
          description:
            'Compressez les images PNG pour réduire la taille du fichier tout en préservant la transparence. Parfait pour les graphiques web et les images transparentes.'
        },
        pdf: {
          name: 'Compresseur PDF',
          description:
            'Compressez les fichiers PDF pour réduire la taille du fichier tout en maintenant la qualité du document. Parfait pour les pièces jointes e-mail et le partage web.'
        }
      }
    }
  },
  it: {
    compress_page: {
      meta: {
        title: 'Compressore di file online – Riduci dimensione file | FormiPeek',
        description:
          'Comprimi immagini, PDF, video e documenti online. FormiPeek rende i tuoi file più piccoli e veloci da condividere — senza perdere qualità.',
        keywords:
          'compressore file, compressore online, compressione immagini, comprimere jpg, comprimere immagini, ridurre dimensione file, compressione batch, compressore gratuito, compressione video'
      },
      schema: {
        name: 'Compressore di file online',
        description:
          'Comprimi immagini, PDF, video e altro direttamente nel tuo browser con FormiPeek. Riduci la dimensione del file mantenendo un\'ottima qualità — veloce e sicuro.'
      },
      hero: {
        title: 'Strumenti di compressione file',
        description:
          'Riduci le dimensioni dei file mantenendo la qualità. Comprimi immagini, documenti e altro per caricamenti più veloci e ottimizzazione dello storage.'
      },
      back_button: 'Torna alla home',
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
        title: 'Perché scegliere i nostri compressori?',
        items: [
          {
            title: 'Veloce e affidabile',
            description: 'Comprimi file rapidamente con i nostri motori di compressione ottimizzati.'
          },
          {
            title: 'Sicuro e privato',
            description: 'I tuoi file vengono elaborati in modo sicuro e non vengono mai memorizzati permanentemente.'
          },
          {
            title: 'Alta qualità',
            description: 'Mantieni la qualità dell\'immagine e la struttura del documento durante la compressione.'
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
            'Comprimi immagini JPEG per ridurre la dimensione del file mantenendo la qualità. Perfetto per l\'ottimizzazione web e caricamenti più veloci.'
        },
        png: {
          name: 'Compressore PNG',
          description:
            'Comprimi immagini PNG per ridurre la dimensione del file preservando la trasparenza. Perfetto per grafica web e immagini trasparenti.'
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
        title: 'Online bestandscompressor – Bestandsgrootte verkleinen | FormiPeek',
        description:
          'Comprimeer afbeeldingen, PDF\'s, video\'s en documenten online. FormiPeek maakt uw bestanden kleiner en sneller om te delen — zonder kwaliteitsverlies.',
        keywords:
          'bestandscompressor, online compressor, beeldcompressie, jpg comprimeren, afbeeldingen comprimeren, bestandsgrootte verkleinen, batchcompressie, gratis compressor, videocompressie'
      },
      schema: {
        name: 'Online bestandscompressor',
        description:
          'Comprimeer afbeeldingen, PDF\'s, video\'s en meer direct in uw browser met FormiPeek. Verklein de bestandsgrootte met behoud van uitstekende kwaliteit — snel en veilig.'
      },
      hero: {
        title: 'Bestandscompressietools',
        description:
          'Verklein bestandsgroottes met behoud van kwaliteit. Comprimeer afbeeldingen, documenten en meer voor snellere uploads en opslagoptimalisatie.'
      },
      back_button: 'Terug naar startpagina',
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
        title: 'Waarom onze compressors kiezen?',
        items: [
          {
            title: 'Snel en betrouwbaar',
            description: 'Comprimeer bestanden snel met onze geoptimaliseerde compressie-engines.'
          },
          {
            title: 'Veilig en privé',
            description: 'Uw bestanden worden veilig verwerkt en nooit permanent opgeslagen.'
          },
          {
            title: 'Hoge kwaliteit',
            description: 'Behoud beeldkwaliteit en documentstructuur tijdens compressie.'
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
            'Comprimeer PDF-bestanden om de bestandsgrootte te verkleinen met behoud van documentkwaliteit. Perfect voor e-mailbijlagen en webdeling.'
        }
      }
    }
  },
  pt: {
    compress_page: {
      meta: {
        title: 'Compressor de arquivos online – Reduzir tamanho do arquivo | FormiPeek',
        description:
          'Comprima imagens, PDFs, vídeos e documentos online. FormiPeek torna seus arquivos menores e mais rápidos para compartilhar — sem perder qualidade.',
        keywords:
          'compressor de arquivos, compressor online, compressão de imagens, comprimir jpg, comprimir imagens, reduzir tamanho arquivo, compressão em lote, compressor gratuito, compressão de vídeo'
      },
      schema: {
        name: 'Compressor de arquivos online',
        description:
          'Comprima imagens, PDFs, vídeos e mais diretamente no seu navegador com FormiPeek. Reduza o tamanho do arquivo mantendo ótima qualidade — rápido e seguro.'
      },
      hero: {
        title: 'Ferramentas de compressão de arquivos',
        description:
          'Reduza o tamanho dos arquivos mantendo a qualidade. Comprima imagens, documentos e mais para uploads mais rápidos e otimização de armazenamento.'
      },
      back_button: 'Voltar ao início',
      search: {
        placeholder: 'Buscar ferramentas de compressão... (ex. JPG, JPEG)',
        example_one: 'JPG',
        example_two: 'JPEG',
        results: '{{count}} ferramenta de compressão encontrada',
        results_one: '{{count}} ferramenta de compressão encontrada',
        results_other: '{{count}} ferramentas de compressão encontradas',
        suggestion: 'Tente buscar algo como "{{exampleOne}}" ou "{{exampleTwo}}"',
        clear: 'Limpar busca'
      },
      categories: {
        image_compression: 'COMPRESSÃO DE IMAGENS',
        document_compression: 'COMPRESSÃO DE DOCUMENTOS'
      },
      features: {
        title: 'Por que escolher nossos compressores?',
        items: [
          {
            title: 'Rápido e confiável',
            description: 'Comprima arquivos rapidamente com nossos motores de compressão otimizados.'
          },
          {
            title: 'Seguro e privado',
            description: 'Seus arquivos são processados com segurança e nunca são armazenados permanentemente.'
          },
          {
            title: 'Alta qualidade',
            description: 'Mantenha a qualidade da imagem e a estrutura do documento durante a compressão.'
          }
        ]
      },
      actions: {
        compress: 'Comprimir'
      },
      no_results: {
        title: 'Nenhuma ferramenta de compressão encontrada',
        description: 'Tente buscar algo como "JPG" ou "JPEG"',
        clear: 'Limpar busca'
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
            'Comprima imagens PNG para reduzir o tamanho do arquivo preservando a transparência. Perfeito para gráficos web e imagens transparentes.'
        },
        pdf: {
          name: 'Compressor PDF',
          description:
            'Comprima arquivos PDF para reduzir o tamanho do arquivo mantendo a qualidade do documento. Perfeito para anexos de e-mail e compartilhamento web.'
        }
      }
    }
  },
  vi: {
    compress_page: {
      meta: {
        title: 'Công cụ nén tệp trực tuyến – Giảm kích thước tệp | FormiPeek',
        description:
          'Nén hình ảnh, PDF, video và tài liệu trực tuyến. FormiPeek làm cho tệp của bạn nhỏ hơn và nhanh hơn để chia sẻ — không mất chất lượng.',
        keywords:
          'công cụ nén tệp, công cụ nén trực tuyến, nén hình ảnh, nén jpg, nén hình ảnh, giảm kích thước tệp, nén hàng loạt, công cụ nén miễn phí, nén video'
      },
      schema: {
        name: 'Công cụ nén tệp trực tuyến',
        description:
          'Nén hình ảnh, PDF, video và nhiều hơn nữa trực tiếp trong trình duyệt của bạn với FormiPeek. Giảm kích thước tệp trong khi vẫn giữ chất lượng tuyệt vời — nhanh chóng và an toàn.'
      },
      hero: {
        title: 'Công cụ nén tệp',
        description:
          'Giảm kích thước tệp trong khi vẫn duy trì chất lượng. Nén hình ảnh, tài liệu và nhiều hơn nữa để tải lên nhanh hơn và tối ưu hóa lưu trữ.'
      },
      back_button: 'Quay lại trang chủ',
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
        title: 'Tại sao chọn công cụ nén của chúng tôi?',
        items: [
          {
            title: 'Nhanh và đáng tin cậy',
            description: 'Nén tệp nhanh chóng với các công cụ nén được tối ưu hóa của chúng tôi.'
          },
          {
            title: 'An toàn và riêng tư',
            description: 'Tệp của bạn được xử lý an toàn và không bao giờ được lưu trữ vĩnh viễn.'
          },
          {
            title: 'Chất lượng cao',
            description: 'Duy trì chất lượng hình ảnh và cấu trúc tài liệu trong quá trình nén.'
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
          name: 'Công cụ nén JPG/JPEG',
          description:
            'Nén hình ảnh JPEG để giảm kích thước tệp trong khi vẫn duy trì chất lượng. Hoàn hảo cho tối ưu hóa web và tải lên nhanh hơn.'
        },
        png: {
          name: 'Công cụ nén PNG',
          description:
            'Nén hình ảnh PNG để giảm kích thước tệp trong khi vẫn giữ độ trong suốt. Hoàn hảo cho đồ họa web và hình ảnh trong suốt.'
        },
        pdf: {
          name: 'Công cụ nén PDF',
          description:
            'Nén tệp PDF để giảm kích thước tệp trong khi vẫn duy trì chất lượng tài liệu. Hoàn hảo cho tệp đính kèm email và chia sẻ web.'
        }
      }
    }
  },
  tr: {
    compress_page: {
      meta: {
        title: 'Çevrimiçi dosya sıkıştırıcı – Dosya boyutunu azalt | FormiPeek',
        description:
          'Görüntüleri, PDF\'leri, videoları ve belgeleri çevrimiçi sıkıştırın. FormiPeek dosyalarınızı daha küçük ve paylaşımı daha hızlı hale getirir — kalite kaybı olmadan.',
        keywords:
          'dosya sıkıştırıcı, çevrimiçi sıkıştırıcı, görüntü sıkıştırma, jpg sıkıştır, görüntü sıkıştır, dosya boyutu azalt, toplu sıkıştırma, ücretsiz sıkıştırıcı, video sıkıştırma'
      },
      schema: {
        name: 'Çevrimiçi dosya sıkıştırıcı',
        description:
          'FormiPeek ile tarayıcınızda doğrudan görüntüleri, PDF\'leri, videoları ve daha fazlasını sıkıştırın. Mükemmel kaliteyi korurken dosya boyutunu azaltın — hızlı ve güvenli.'
      },
      hero: {
        title: 'Dosya sıkıştırma araçları',
        description:
          'Kaliteyi korurken dosya boyutlarını azaltın. Daha hızlı yüklemeler ve depolama optimizasyonu için görüntüleri, belgeleri ve daha fazlasını sıkıştırın.'
      },
      back_button: 'Ana sayfaya dön',
      search: {
        placeholder: 'Sıkıştırma araçlarını ara... (örn. JPG, JPEG)',
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
        title: 'Neden sıkıştırıcılarımızı seçmelisiniz?',
        items: [
          {
            title: 'Hızlı ve güvenilir',
            description: 'Optimize edilmiş sıkıştırma motorlarımızla dosyaları hızlıca sıkıştırın.'
          },
          {
            title: 'Güvenli ve özel',
            description: 'Dosyalarınız güvenli bir şekilde işlenir ve asla kalıcı olarak saklanmaz.'
          },
          {
            title: 'Yüksek kalite',
            description: 'Sıkıştırma sırasında görüntü kalitesini ve belge yapısını koruyun.'
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
            'Kaliteyi korurken dosya boyutunu azaltmak için JPEG görüntülerini sıkıştırın. Web optimizasyonu ve daha hızlı yüklemeler için mükemmel.'
        },
        png: {
          name: 'PNG Sıkıştırıcı',
          description:
            'Şeffaflığı korurken dosya boyutunu azaltmak için PNG görüntülerini sıkıştırın. Web grafikleri ve şeffaf görüntüler için mükemmel.'
        },
        pdf: {
          name: 'PDF Sıkıştırıcı',
          description:
            'Belge kalitesini korurken dosya boyutunu azaltmak için PDF dosyalarını sıkıştırın. E-posta ekleri ve web paylaşımı için mükemmel.'
        }
      }
    }
  },
  ru: {
    compress_page: {
      meta: {
        title: 'Онлайн-компрессор файлов – Уменьшить размер файла | FormiPeek',
        description:
          'Сжимайте изображения, PDF, видео и документы онлайн. FormiPeek делает ваши файлы меньше и быстрее для обмена — без потери качества.',
        keywords:
          'компрессор файлов, онлайн компрессор, сжатие изображений, сжать jpg, сжать изображения, уменьшить размер файла, пакетное сжатие, бесплатный компрессор, сжатие видео'
      },
      schema: {
        name: 'Онлайн-компрессор файлов',
        description:
          'Сжимайте изображения, PDF, видео и многое другое прямо в браузере с FormiPeek. Уменьшите размер файла, сохраняя отличное качество — быстро и безопасно.'
      },
      hero: {
        title: 'Инструменты сжатия файлов',
        description:
          'Уменьшайте размеры файлов, сохраняя качество. Сжимайте изображения, документы и многое другое для более быстрой загрузки и оптимизации хранилища.'
      },
      back_button: 'Вернуться на главную',
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
        title: 'Почему выбрать наши компрессоры?',
        items: [
          {
            title: 'Быстро и надежно',
            description: 'Сжимайте файлы быстро с нашими оптимизированными движками сжатия.'
          },
          {
            title: 'Безопасно и конфиденциально',
            description: 'Ваши файлы обрабатываются безопасно и никогда не сохраняются постоянно.'
          },
          {
            title: 'Высокое качество',
            description: 'Сохраняйте качество изображения и структуру документа во время сжатия.'
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
            'Сжимайте изображения JPEG для уменьшения размера файла при сохранении качества. Идеально для веб-оптимизации и более быстрой загрузки.'
        },
        png: {
          name: 'Компрессор PNG',
          description:
            'Сжимайте изображения PNG для уменьшения размера файла при сохранении прозрачности. Идеально для веб-графики и прозрачных изображений.'
        },
        pdf: {
          name: 'Компрессор PDF',
          description:
            'Сжимайте файлы PDF для уменьшения размера файла при сохранении качества документа. Идеально для вложений электронной почты и веб-обмена.'
        }
      }
    }
  },
  ar: {
    compress_page: {
      meta: {
        title: 'ضاغط الملفات عبر الإنترنت – تقليل حجم الملف | FormiPeek',
        description:
          'ضغط الصور وملفات PDF والفيديو والمستندات عبر الإنترنت. يجعل FormiPeek ملفاتك أصغر وأسرع للمشاركة — دون فقدان الجودة.',
        keywords:
          'ضاغط الملفات، ضاغط عبر الإنترنت، ضغط الصور، ضغط jpg، ضغط الصور، تقليل حجم الملف، الضغط المجمع، ضاغط مجاني، ضغط الفيديو'
      },
      schema: {
        name: 'ضاغط الملفات عبر الإنترنت',
        description:
          'ضغط الصور وملفات PDF والفيديو والمزيد مباشرة في متصفحك مع FormiPeek. قلل حجم الملف مع الحفاظ على جودة رائعة — سريع وآمن.'
      },
      hero: {
        title: 'أدوات ضغط الملفات',
        description:
          'قلل أحجام الملفات مع الحفاظ على الجودة. اضغط الصور والمستندات والمزيد لتحميلات أسرع وتحسين التخزين.'
      },
      back_button: 'العودة إلى الصفحة الرئيسية',
      search: {
        placeholder: 'البحث عن أدوات الضغط... (مثل JPG، JPEG)',
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
            description: 'اضغط الملفات بسرعة باستخدام محركات الضغط المحسّنة لدينا.'
          },
          {
            title: 'آمن وخاص',
            description: 'يتم معالجة ملفاتك بأمان ولا يتم تخزينها بشكل دائم أبدًا.'
          },
          {
            title: 'جودة عالية',
            description: 'احتفظ بجودة الصورة وهيكل المستند أثناء الضغط.'
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
            'اضغط صور PNG لتقليل حجم الملف مع الحفاظ على الشفافية. مثالي للرسوميات الويب والصور الشفافة.'
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
        title: 'เครื่องมือบีบอัดไฟล์ออนไลน์ – ลดขนาดไฟล์ | FormiPeek',
        description:
          'บีบอัดรูปภาพ PDF วิดีโอ และเอกสารออนไลน์ FormiPeek ทำให้ไฟล์ของคุณเล็กลงและแชร์ได้เร็วขึ้น — โดยไม่สูญเสียคุณภาพ',
        keywords:
          'เครื่องมือบีบอัดไฟล์, เครื่องมือบีบอัดออนไลน์, การบีบอัดรูปภาพ, บีบอัด jpg, บีบอัดรูปภาพ, ลดขนาดไฟล์, การบีบอัดแบบกลุ่ม, เครื่องมือบีบอัดฟรี, การบีบอัดวิดีโอ'
      },
      schema: {
        name: 'เครื่องมือบีบอัดไฟล์ออนไลน์',
        description:
          'บีบอัดรูปภาพ PDF วิดีโอ และอื่นๆ โดยตรงในเบราว์เซอร์ของคุณด้วย FormiPeek ลดขนาดไฟล์ในขณะที่ยังคงคุณภาพที่ดี — เร็วและปลอดภัย'
      },
      hero: {
        title: 'เครื่องมือบีบอัดไฟล์',
        description:
          'ลดขนาดไฟล์ในขณะที่ยังคงคุณภาพ บีบอัดรูปภาพ เอกสาร และอื่นๆ สำหรับการอัปโหลดที่เร็วขึ้นและการเพิ่มประสิทธิภาพการจัดเก็บ'
      },
      back_button: 'กลับไปที่หน้าแรก',
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
        title: 'ทำไมต้องเลือกเครื่องมือบีบอัดของเรา?',
        items: [
          {
            title: 'เร็วและเชื่อถือได้',
            description: 'บีบอัดไฟล์ได้อย่างรวดเร็วด้วยเครื่องมือบีบอัดที่ปรับปรุงแล้วของเรา'
          },
          {
            title: 'ปลอดภัยและเป็นส่วนตัว',
            description: 'ไฟล์ของคุณถูกประมวลผลอย่างปลอดภัยและไม่เคยถูกเก็บถาวร'
          },
          {
            title: 'คุณภาพสูง',
            description: 'รักษาคุณภาพรูปภาพและโครงสร้างเอกสารระหว่างการบีบอัด'
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
          name: 'เครื่องมือบีบอัด JPG/JPEG',
          description:
            'บีบอัดรูปภาพ JPEG เพื่อลดขนาดไฟล์ในขณะที่ยังคงคุณภาพ เหมาะสำหรับการเพิ่มประสิทธิภาพเว็บและการอัปโหลดที่เร็วขึ้น'
        },
        png: {
          name: 'เครื่องมือบีบอัด PNG',
          description:
            'บีบอัดรูปภาพ PNG เพื่อลดขนาดไฟล์ในขณะที่ยังคงความโปร่งใส เหมาะสำหรับกราฟิกเว็บและรูปภาพโปร่งใส'
        },
        pdf: {
          name: 'เครื่องมือบีบอัด PDF',
          description:
            'บีบอัดไฟล์ PDF เพื่อลดขนาดไฟล์ในขณะที่ยังคงคุณภาพเอกสาร เหมาะสำหรับไฟล์แนบอีเมลและการแชร์เว็บ'
        }
      }
    }
  },
  ja: {
    compress_page: {
      meta: {
        title: 'オンラインファイル圧縮ツール – ファイルサイズを削減 | FormiPeek',
        description:
          '画像、PDF、動画、ドキュメントをオンラインで圧縮。FormiPeekでファイルを小さく、共有を高速化 — 品質を損なわずに。',
        keywords:
          'ファイル圧縮ツール, オンライン圧縮ツール, 画像圧縮, jpg圧縮, 画像圧縮, ファイルサイズ削減, バッチ圧縮, 無料圧縮ツール, 動画圧縮'
      },
      schema: {
        name: 'オンラインファイル圧縮ツール',
        description:
          'FormiPeekでブラウザで直接画像、PDF、動画などを圧縮。優れた品質を維持しながらファイルサイズを削減 — 高速で安全。'
      },
      hero: {
        title: 'ファイル圧縮ツール',
        description:
          '品質を維持しながらファイルサイズを削減。より高速なアップロードとストレージ最適化のために画像、ドキュメントなどを圧縮。'
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
        document_compression: 'ドキュメント圧縮'
      },
      features: {
        title: 'なぜ当社の圧縮ツールを選ぶのか？',
        items: [
          {
            title: '高速で信頼性',
            description: '最適化された圧縮エンジンでファイルを高速に圧縮。'
          },
          {
            title: '安全でプライベート',
            description: 'ファイルは安全に処理され、永続的に保存されることはありません。'
          },
          {
            title: '高品質',
            description: '圧縮中に画像品質とドキュメント構造を維持。'
          }
        ]
      },
      actions: {
        compress: '圧縮'
      },
      no_results: {
        title: '圧縮ツールが見つかりません',
        description: '"JPG"または"JPEG"のようなものを検索してみてください',
        clear: '検索をクリア'
      },
      formats: {
        jpg: {
          name: 'JPG/JPEG圧縮ツール',
          description:
            '品質を維持しながらファイルサイズを削減するためにJPEG画像を圧縮。Web最適化とより高速なアップロードに最適。'
        },
        png: {
          name: 'PNG圧縮ツール',
          description:
            '透明度を維持しながらファイルサイズを削減するためにPNG画像を圧縮。Webグラフィックと透明画像に最適。'
        },
        pdf: {
          name: 'PDF圧縮ツール',
          description:
            'ドキュメント品質を維持しながらファイルサイズを削減するためにPDFファイルを圧縮。メール添付とWeb共有に最適。'
        }
      }
    }
  },
  zh: {
    compress_page: {
      meta: {
        title: '在线文件压缩工具 – 减小文件大小 | FormiPeek',
        description:
          '在线压缩图像、PDF、视频和文档。FormiPeek使您的文件更小、共享更快 — 不损失质量。',
        keywords:
          '文件压缩工具, 在线压缩工具, 图像压缩, 压缩 jpg, 压缩图像, 减小文件大小, 批量压缩, 免费压缩工具, 视频压缩'
      },
      schema: {
        name: '在线文件压缩工具',
        description:
          '使用FormiPeek直接在浏览器中压缩图像、PDF、视频等。在保持出色质量的同时减小文件大小 — 快速且安全。'
      },
      hero: {
        title: '文件压缩工具',
        description:
          '在保持质量的同时减小文件大小。压缩图像、文档等，以实现更快的上传和存储优化。'
      },
      back_button: '返回首页',
      search: {
        placeholder: '搜索压缩工具... (例如 JPG, JPEG)',
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
            description: '使用我们优化的压缩引擎快速压缩文件。'
          },
          {
            title: '安全私密',
            description: '您的文件会被安全处理，永远不会永久存储。'
          },
          {
            title: '高质量',
            description: '在压缩过程中保持图像质量和文档结构。'
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
            '压缩JPEG图像以减小文件大小，同时保持质量。非常适合Web优化和更快的上传。'
        },
        png: {
          name: 'PNG压缩工具',
          description:
            '压缩PNG图像以减小文件大小，同时保持透明度。非常适合Web图形和透明图像。'
        },
        pdf: {
          name: 'PDF压缩工具',
          description:
            '压缩PDF文件以减小文件大小，同时保持文档质量。非常适合电子邮件附件和Web共享。'
        }
      }
    }
  },
  id: {
    compress_page: {
      meta: {
        title: 'Alat kompresi file online – Kurangi ukuran file | FormiPeek',
        description:
          'Kompres gambar, PDF, video, dan dokumen online. FormiPeek membuat file Anda lebih kecil dan lebih cepat untuk dibagikan — tanpa kehilangan kualitas.',
        keywords:
          'alat kompresi file, alat kompresi online, kompresi gambar, kompres jpg, kompres gambar, kurangi ukuran file, kompresi batch, alat kompresi gratis, kompresi video'
      },
      schema: {
        name: 'Alat kompresi file online',
        description:
          'Kompres gambar, PDF, video, dan lebih banyak lagi langsung di browser Anda dengan FormiPeek. Kurangi ukuran file sambil mempertahankan kualitas yang bagus — cepat dan aman.'
      },
      hero: {
        title: 'Alat kompresi file',
        description:
          'Kurangi ukuran file sambil mempertahankan kualitas. Kompres gambar, dokumen, dan lebih banyak lagi untuk unggahan yang lebih cepat dan optimasi penyimpanan.'
      },
      back_button: 'Kembali ke beranda',
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
        title: 'Mengapa memilih alat kompresi kami?',
        items: [
          {
            title: 'Cepat dan andal',
            description: 'Kompres file dengan cepat menggunakan mesin kompresi yang dioptimalkan kami.'
          },
          {
            title: 'Aman dan pribadi',
            description: 'File Anda diproses dengan aman dan tidak pernah disimpan secara permanen.'
          },
          {
            title: 'Kualitas tinggi',
            description: 'Pertahankan kualitas gambar dan struktur dokumen selama kompresi.'
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
          name: 'Alat kompresi JPG/JPEG',
          description:
            'Kompres gambar JPEG untuk mengurangi ukuran file sambil mempertahankan kualitas. Sempurna untuk optimasi web dan unggahan yang lebih cepat.'
        },
        png: {
          name: 'Alat kompresi PNG',
          description:
            'Kompres gambar PNG untuk mengurangi ukuran file sambil mempertahankan transparansi. Sempurna untuk grafik web dan gambar transparan.'
        },
        pdf: {
          name: 'Alat kompresi PDF',
          description:
            'Kompres file PDF untuk mengurangi ukuran file sambil mempertahankan kualitas dokumen. Sempurna untuk lampiran email dan berbagi web.'
        }
      }
    }
  },
  sv: {
    compress_page: {
      meta: {
        title: 'Online filkomprimerare – Minska filstorlek | FormiPeek',
        description:
          'Komprimera bilder, PDF-filer, videor och dokument online. FormiPeek gör dina filer mindre och snabbare att dela — utan kvalitetsförlust.',
        keywords:
          'filkomprimerare, online komprimerare, bildkomprimering, komprimera jpg, komprimera bilder, minska filstorlek, batchkomprimering, gratis komprimerare, videokomprimering'
      },
      schema: {
        name: 'Online filkomprimerare',
        description:
          'Komprimera bilder, PDF-filer, videor och mer direkt i din webbläsare med FormiPeek. Minska filstorleken medan du behåller utmärkt kvalitet — snabbt och säkert.'
      },
      hero: {
        title: 'Filkomprimeringsverktyg',
        description:
          'Minska filstorlekar medan du behåller kvaliteten. Komprimera bilder, dokument och mer för snabbare uppladdningar och lagringsoptimering.'
      },
      back_button: 'Tillbaka till startsidan',
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
        title: 'Varför välja våra komprimerare?',
        items: [
          {
            title: 'Snabb och pålitlig',
            description: 'Komprimera filer snabbt med våra optimerade komprimeringsmotorer.'
          },
          {
            title: 'Säker och privat',
            description: 'Dina filer bearbetas säkert och lagras aldrig permanent.'
          },
          {
            title: 'Hög kvalitet',
            description: 'Behåll bildkvalitet och dokumentstruktur under komprimering.'
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
          name: 'JPG/JPEG-komprimerare',
          description:
            'Komprimera JPEG-bilder för att minska filstorleken medan kvaliteten behålls. Perfekt för webboptimering och snabbare uppladdningar.'
        },
        png: {
          name: 'PNG-komprimerare',
          description:
            'Komprimera PNG-bilder för att minska filstorleken medan transparensen behålls. Perfekt för webbgrafik och transparenta bilder.'
        },
        pdf: {
          name: 'PDF-komprimerare',
          description:
            'Komprimera PDF-filer för att minska filstorleken medan dokumentkvaliteten behålls. Perfekt för e-postbilagor och webbdelning.'
        }
      }
    }
  }
};

Object.entries(compressPageResources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

