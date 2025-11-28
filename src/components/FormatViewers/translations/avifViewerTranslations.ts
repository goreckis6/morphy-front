import i18n from '../../../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type AVIFViewerTranslations = {
  viewers: {
    avif: {
      meta_title: string;
      meta_description: string;
      meta_keywords: string;
      hero_title: string;
      hero_subtitle: string;
      upload_title: string;
      upload_description: string;
      upload: {
        drag_drop_text: string;
        click_browse_text: string;
        choose_files_button: string;
        max_files_info: string;
      };
      buttons: {
        view_files: string;
        back: string;
      };
      quick_stats: {
        high_quality: string;
        smaller_size: string;
        fast_processing: string;
      };
      features: Feature[];
      about_title: string;
      about_intro: string;
      advantages_title: string;
      advantages: string[];
      use_cases_title: string;
      use_cases: string[];
      specs_title: string;
      specs_header_label: string;
      specs_header_value: string;
      specs: Spec[];
      seo_viewing_title: string;
      seo_viewing_text: string;
      seo_conversion_title: string;
      seo_conversion_text: string;
      seo_optimization_title: string;
      seo_optimization_text: string;
      editor: {
        toggle_sidebar: string;
        close: string;
        close_sidebar: string;
        search_placeholder: string;
        files_header: string;
        add_files: string;
        format_badge: string;
        present: string;
        exit_presentation: string;
        start_presentation: string;
        print_image: string;
        download_image: string;
        previous: string;
        next: string;
        zoom_out: string;
        zoom_in: string;
        reset_zoom: string;
        rotate: string;
        fullscreen: string;
      };
    };
  };
};

const resources: Record<string, AVIFViewerTranslations> = {
  en: {
    viewers: {
      avif: {
        meta_title: 'Free AVIF Viewer - View AVIF Images Online',
        meta_description: 'View AVIF (AV1 Image File Format) images online for free. Modern image format with superior compression and quality. Up to 20 files, 100MB total. No registration required.',
        meta_keywords: 'AVIF viewer, AV1 image viewer, modern image format, high compression, web image viewer, batch viewing',
        hero_title: 'Free AVIF Viewer',
        hero_subtitle: 'View AVIF images with superior compression and modern image quality',
        upload_title: 'Upload AVIF Files',
        upload_description: 'Drag and drop your AVIF images or click to browse. Supports AVIF format with superior compression up to 100MB total.',
        upload: {
          drag_drop_text: 'Drag & Drop Your Files Here',
          click_browse_text: 'or click the button below to browse',
          choose_files_button: 'Choose Files',
          max_files_info: 'Max {maxFiles} files • Up to {maxSize} Total'
        },
        buttons: {
          view_files: 'View Files',
          back: 'Back to All Viewers'
        },
        quick_stats: {
          high_quality: '✓ High Quality',
          smaller_size: '🎨 Smaller Size',
          fast_processing: '⚡ Fast Processing'
        },
        features: [
          { title: 'Superior Compression', description: 'View AVIF images with 50% smaller file sizes than JPEG while maintaining higher image quality' },
          { title: 'Modern Format', description: 'Based on AV1 video codec, AVIF provides the latest in image compression technology' },
          { title: 'Web Optimized', description: 'Perfect for modern web applications with excellent browser support and fast loading' }
        ],
        about_title: 'About AVIF Format',
        about_intro: 'AVIF (AV1 Image File Format) is a modern image format based on the AV1 video codec. It provides superior compression compared to JPEG and WebP while maintaining higher image quality, making it ideal for modern web applications and high-quality image storage.',
        advantages_title: 'Key Advantages',
        advantages: [
          '50% smaller file sizes – Better compression than JPEG and WebP',
          'Superior image quality – Higher quality at smaller sizes',
          'Modern codec – Based on AV1 video compression',
          'Wide browser support – Supported by modern browsers',
          'HDR support – High Dynamic Range image support',
          'Transparency support – Alpha channel support'
        ],
        use_cases_title: 'Best Use Cases',
        use_cases: [
          'Modern web applications – Optimal for web performance',
          'High-quality image storage – Professional photography',
          'E-commerce images – Fast loading product images',
          'Social media – Efficient image sharing',
          'Mobile applications – Smaller file sizes for apps',
          'Content delivery – Fast image delivery'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Specification',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.avif' },
          { label: 'MIME Type', value: 'image/avif' },
          { label: 'Format Type', value: 'Image format based on AV1 codec' },
          { label: 'Compression', value: 'AV1-based compression' },
          { label: 'Color Depth', value: '8, 10, 12 bits per channel' },
          { label: 'Maximum Resolution', value: 'Unlimited' },
          { label: 'Transparency', value: 'Alpha channel support' },
          { label: 'HDR Support', value: 'Full HDR support' }
        ],
        seo_viewing_title: 'Advanced Viewing Features',
        seo_viewing_text: 'View AVIF images with full quality preservation, zoom capabilities, and detailed image information. Our viewer supports all AVIF features including transparency, HDR, and high bit-depth images.',
        seo_conversion_title: 'Professional Conversion Tools',
        seo_conversion_text: 'Convert AVIF files to JPEG, PNG, WebP, and other formats while maintaining optimal quality. Our conversion engine offers quality preservation, color space handling, and batch processing capabilities.',
        seo_optimization_title: 'Quality Optimization',
        seo_optimization_text: 'Optimize AVIF files for modern use with our smart tools that can convert to web-friendly formats while preserving visual quality. Perfect for sharing images online, converting for compatibility, and reducing file sizes for better performance.',
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          files_header: 'Files',
          add_files: '+ Add',
          format_badge: 'AVIF',
          present: 'Present',
          exit_presentation: 'Exit',
          start_presentation: 'Start Presentation (Space/Arrows to navigate)',
          print_image: 'Print Image',
          download_image: 'Download Image',
          previous: 'Previous (←)',
          next: 'Next (→)',
          zoom_out: 'Zoom Out (-)',
          zoom_in: 'Zoom In (+)',
          reset_zoom: 'Click to reset zoom',
          rotate: 'Rotate (R)',
          fullscreen: 'Fullscreen (F)'
        }
      }
    }
  },
  pl: {
    viewers: {
      avif: {
        meta_title: 'Darmowy przeglądarka AVIF - Przeglądaj obrazy AVIF online',
        meta_description: 'Przeglądaj obrazy AVIF (AV1 Image File Format) online za darmo. Nowoczesny format obrazu z lepszą kompresją i jakością. Do 20 plików, łącznie 100MB. Bez rejestracji.',
        meta_keywords: 'przeglądarka AVIF, przeglądarka AV1, nowoczesny format obrazu, wysoka kompresja, przeglądarka obrazów internetowa, przeglądanie wsadowe',
        hero_title: 'Darmowy przeglądarka AVIF',
        hero_subtitle: 'Przeglądaj obrazy AVIF z lepszą kompresją i nowoczesną jakością obrazu',
        upload_title: 'Prześlij pliki AVIF',
        upload_description: 'Przeciągnij i upuść obrazy AVIF lub kliknij, aby przeglądać. Obsługuje format AVIF z lepszą kompresją do 100MB łącznie.',
        upload: {
          drag_drop_text: 'Przeciągnij i upuść pliki tutaj',
          click_browse_text: 'lub kliknij przycisk poniżej, aby przeglądać',
          choose_files_button: 'Wybierz pliki',
          max_files_info: 'Maks. {maxFiles} plików • Do {maxSize} łącznie'
        },
        buttons: {
          view_files: 'Zobacz pliki',
          back: 'Powrót do wszystkich przeglądarek'
        },
        quick_stats: {
          high_quality: '✓ Wysoka jakość',
          smaller_size: '🎨 Mniejszy rozmiar',
          fast_processing: '⚡ Szybkie przetwarzanie'
        },
        features: [
          { title: 'Lepsza kompresja', description: 'Przeglądaj obrazy AVIF z 50% mniejszymi plikami niż JPEG przy zachowaniu wyższej jakości obrazu' },
          { title: 'Nowoczesny format', description: 'Oparty na kodeku wideo AV1, AVIF zapewnia najnowszą technologię kompresji obrazu' },
          { title: 'Zoptymalizowany dla sieci', description: 'Idealny dla nowoczesnych aplikacji internetowych z doskonałym wsparciem przeglądarki i szybkim ładowaniem' }
        ],
        about_title: 'O formacie AVIF',
        about_intro: 'AVIF (AV1 Image File Format) to nowoczesny format obrazu oparty na kodeku wideo AV1. Zapewnia lepszą kompresję w porównaniu z JPEG i WebP przy zachowaniu wyższej jakości obrazu, co czyni go idealnym dla nowoczesnych aplikacji internetowych i przechowywania obrazów wysokiej jakości.',
        advantages_title: 'Kluczowe zalety',
        advantages: [
          '50% mniejsze pliki – Lepsza kompresja niż JPEG i WebP',
          'Wyższa jakość obrazu – Wyższa jakość przy mniejszych rozmiarach',
          'Nowoczesny kodek – Oparty na kompresji wideo AV1',
          'Szerokie wsparcie przeglądarki – Obsługiwany przez nowoczesne przeglądarki',
          'Obsługa HDR – Wsparcie dla obrazów High Dynamic Range',
          'Obsługa przezroczystości – Wsparcie dla kanału alfa'
        ],
        use_cases_title: 'Najlepsze zastosowania',
        use_cases: [
          'Nowoczesne aplikacje internetowe – Optymalne dla wydajności sieci',
          'Przechowywanie wysokiej jakości – Profesjonalna fotografia',
          'Obrazy e-commerce – Szybko ładowane obrazy produktów',
          'Media społecznościowe – Efektywne udostępnianie obrazów',
          'Aplikacje mobilne – Mniejsze pliki dla aplikacji',
          'Dostarczanie treści – Szybkie dostarczanie obrazów'
        ],
        specs_title: 'Specyfikacje techniczne',
        specs_header_label: 'Specyfikacja',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie pliku', value: '.avif' },
          { label: 'Typ MIME', value: 'image/avif' },
          { label: 'Typ formatu', value: 'Format obrazu oparty na kodeku AV1' },
          { label: 'Kompresja', value: 'Kompresja oparta na AV1' },
          { label: 'Głębia koloru', value: '8, 10, 12 bitów na kanał' },
          { label: 'Maksymalna rozdzielczość', value: 'Nieograniczona' },
          { label: 'Przezroczystość', value: 'Obsługa kanału alfa' },
          { label: 'Obsługa HDR', value: 'Pełna obsługa HDR' }
        ],
        seo_viewing_title: 'Zaawansowane funkcje przeglądania',
        seo_viewing_text: 'Przeglądaj obrazy AVIF z pełnym zachowaniem jakości, możliwościami powiększania i szczegółowymi informacjami o obrazie. Nasza przeglądarka obsługuje wszystkie funkcje AVIF, w tym przezroczystość, HDR i obrazy o wysokiej głębi bitowej.',
        seo_conversion_title: 'Profesjonalne narzędzia konwersji',
        seo_conversion_text: 'Konwertuj pliki AVIF na JPEG, PNG, WebP i inne formaty przy zachowaniu optymalnej jakości. Nasz silnik konwersji oferuje zachowanie jakości, obsługę przestrzeni kolorów i możliwości przetwarzania wsadowego.',
        seo_optimization_title: 'Optymalizacja jakości',
        seo_optimization_text: 'Optymalizuj pliki AVIF do nowoczesnego użycia za pomocą naszych inteligentnych narzędzi, które mogą konwertować na formaty przyjazne dla sieci przy zachowaniu jakości wizualnej. Idealne do udostępniania obrazów online, konwersji dla kompatybilności i zmniejszania rozmiarów plików dla lepszej wydajności.',
        editor: {
          toggle_sidebar: 'Przełącz pasek boczny',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij pasek boczny',
          search_placeholder: 'Szukaj plików...',
          files_header: 'Pliki',
          add_files: '+ Dodaj',
          format_badge: 'AVIF',
          present: 'Prezentuj',
          exit_presentation: 'Wyjdź',
          start_presentation: 'Rozpocznij prezentację (Spacja/Strzałki do nawigacji)',
          print_image: 'Drukuj obraz',
          download_image: 'Pobierz obraz',
          previous: 'Poprzedni (←)',
          next: 'Następny (→)',
          zoom_out: 'Pomniejsz (-)',
          zoom_in: 'Powiększ (+)',
          reset_zoom: 'Kliknij, aby zresetować powiększenie',
          rotate: 'Obróć (R)',
          fullscreen: 'Pełny ekran (F)'
        }
      }
    }
  },
  de: {
    viewers: {
      avif: {
        meta_title: 'Kostenloser AVIF-Viewer - AVIF-Bilder online anzeigen',
        meta_description: 'Zeigen Sie AVIF (AV1 Image File Format) Bilder online kostenlos an. Modernes Bildformat mit überlegener Kompression und Qualität. Bis zu 20 Dateien, 100MB insgesamt. Keine Registrierung erforderlich.',
        meta_keywords: 'AVIF Viewer, AV1 Bildbetrachter, modernes Bildformat, hohe Kompression, Web Bildbetrachter, Batch-Ansicht',
        hero_title: 'Kostenloser AVIF-Viewer',
        hero_subtitle: 'Zeigen Sie AVIF-Bilder mit überlegener Kompression und moderner Bildqualität an',
        upload_title: 'AVIF-Dateien hochladen',
        upload_description: 'Ziehen Sie Ihre AVIF-Bilder per Drag & Drop oder klicken Sie zum Durchsuchen. Unterstützt AVIF-Format mit überlegener Kompression bis zu 100MB insgesamt.',
        upload: {
          drag_drop_text: 'Dateien hier ablegen',
          click_browse_text: 'oder klicken Sie auf die Schaltfläche unten zum Durchsuchen',
          choose_files_button: 'Dateien auswählen',
          max_files_info: 'Max. {maxFiles} Dateien • Bis zu {maxSize} insgesamt'
        },
        buttons: {
          view_files: 'Dateien anzeigen',
          back: 'Zurück zu allen Viewern'
        },
        quick_stats: {
          high_quality: '✓ Hohe Qualität',
          smaller_size: '🎨 Kleinere Größe',
          fast_processing: '⚡ Schnelle Verarbeitung'
        },
        features: [
          { title: 'Überlegene Kompression', description: 'Zeigen Sie AVIF-Bilder mit 50% kleineren Dateigrößen als JPEG an, während die höhere Bildqualität erhalten bleibt' },
          { title: 'Modernes Format', description: 'Basierend auf AV1-Videocodec bietet AVIF die neueste Bildkompressionstechnologie' },
          { title: 'Web-optimiert', description: 'Perfekt für moderne Webanwendungen mit ausgezeichnetem Browser-Support und schnellem Laden' }
        ],
        about_title: 'Über das AVIF-Format',
        about_intro: 'AVIF (AV1 Image File Format) ist ein modernes Bildformat basierend auf dem AV1-Videocodec. Es bietet eine überlegene Kompression im Vergleich zu JPEG und WebP bei gleichzeitig höherer Bildqualität und ist ideal für moderne Webanwendungen und hochwertige Bildspeicherung.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          '50% kleinere Dateigrößen – Bessere Kompression als JPEG und WebP',
          'Überlegene Bildqualität – Höhere Qualität bei kleineren Größen',
          'Modernes Codec – Basierend auf AV1-Videokompression',
          'Breite Browser-Unterstützung – Unterstützt von modernen Browsern',
          'HDR-Unterstützung – High Dynamic Range Bildunterstützung',
          'Transparenz-Unterstützung – Alpha-Kanal-Unterstützung'
        ],
        use_cases_title: 'Beste Anwendungsfälle',
        use_cases: [
          'Moderne Webanwendungen – Optimal für Web-Performance',
          'Hochwertige Bildspeicherung – Professionelle Fotografie',
          'E-Commerce-Bilder – Schnell ladende Produktbilder',
          'Soziale Medien – Effiziente Bildfreigabe',
          'Mobile Anwendungen – Kleinere Dateigrößen für Apps',
          'Content Delivery – Schnelle Bildlieferung'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Spezifikation',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateierweiterung', value: '.avif' },
          { label: 'MIME-Typ', value: 'image/avif' },
          { label: 'Formattyp', value: 'Bildformat basierend auf AV1-Codec' },
          { label: 'Kompression', value: 'AV1-basierte Kompression' },
          { label: 'Farbtiefe', value: '8, 10, 12 Bit pro Kanal' },
          { label: 'Maximale Auflösung', value: 'Unbegrenzt' },
          { label: 'Transparenz', value: 'Alpha-Kanal-Unterstützung' },
          { label: 'HDR-Unterstützung', value: 'Vollständige HDR-Unterstützung' }
        ],
        seo_viewing_title: 'Erweiterte Ansichtsfunktionen',
        seo_viewing_text: 'Zeigen Sie AVIF-Bilder mit vollständiger Qualitätserhaltung, Zoom-Funktionen und detaillierten Bildinformationen an. Unser Viewer unterstützt alle AVIF-Funktionen, einschließlich Transparenz, HDR und hochbitige Bilder.',
        seo_conversion_title: 'Professionelle Konvertierungstools',
        seo_conversion_text: 'Konvertieren Sie AVIF-Dateien in JPEG, PNG, WebP und andere Formate bei optimaler Qualität. Unser Konvertierungs-Engine bietet Qualitätserhaltung, Farbraumbehandlung und Batch-Verarbeitungsfunktionen.',
        seo_optimization_title: 'Qualitätsoptimierung',
        seo_optimization_text: 'Optimieren Sie AVIF-Dateien für den modernen Einsatz mit unseren intelligenten Tools, die in web-freundliche Formate konvertieren können, während die visuelle Qualität erhalten bleibt. Perfekt zum Teilen von Bildern online, Konvertieren für Kompatibilität und Reduzieren von Dateigrößen für bessere Leistung.',
        editor: {
          toggle_sidebar: 'Seitenleiste umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Seitenleiste schließen',
          search_placeholder: 'Dateien suchen...',
          files_header: 'Dateien',
          add_files: '+ Hinzufügen',
          format_badge: 'AVIF',
          present: 'Präsentieren',
          exit_presentation: 'Beenden',
          start_presentation: 'Präsentation starten (Leertaste/Pfeile zum Navigieren)',
          print_image: 'Bild drucken',
          download_image: 'Bild herunterladen',
          previous: 'Vorheriges (←)',
          next: 'Nächstes (→)',
          zoom_out: 'Verkleinern (-)',
          zoom_in: 'Vergrößern (+)',
          reset_zoom: 'Klicken zum Zurücksetzen der Zoomstufe',
          rotate: 'Drehen (R)',
          fullscreen: 'Vollbild (F)'
        }
      }
    }
  },
  es: {
    viewers: {
      avif: {
        meta_title: 'Visor AVIF gratuito - Ver imágenes AVIF en línea',
        meta_description: 'Ver imágenes AVIF (AV1 Image File Format) en línea gratis. Formato de imagen moderno con compresión superior y calidad. Hasta 20 archivos, 100MB total. No se requiere registro.',
        meta_keywords: 'visor AVIF, visor AV1, formato de imagen moderno, alta compresión, visor de imágenes web, visualización por lotes',
        hero_title: 'Visor AVIF gratuito',
        hero_subtitle: 'Ver imágenes AVIF con compresión superior y calidad de imagen moderna',
        upload_title: 'Subir archivos AVIF',
        upload_description: 'Arrastra y suelta tus imágenes AVIF o haz clic para explorar. Soporta formato AVIF con compresión superior hasta 100MB total.',
        upload: {
          drag_drop_text: 'Arrastra y suelta tus archivos aquí',
          click_browse_text: 'o haz clic en el botón de abajo para explorar',
          choose_files_button: 'Elegir archivos',
          max_files_info: 'Máx. {maxFiles} archivos • Hasta {maxSize} total'
        },
        buttons: {
          view_files: 'Ver archivos',
          back: 'Volver a todos los visores'
        },
        quick_stats: {
          high_quality: '✓ Alta calidad',
          smaller_size: '🎨 Tamaño más pequeño',
          fast_processing: '⚡ Procesamiento rápido'
        },
        features: [
          { title: 'Compresión superior', description: 'Ver imágenes AVIF con archivos 50% más pequeños que JPEG manteniendo mayor calidad de imagen' },
          { title: 'Formato moderno', description: 'Basado en el codec de video AV1, AVIF proporciona la última tecnología en compresión de imágenes' },
          { title: 'Optimizado para web', description: 'Perfecto para aplicaciones web modernas con excelente soporte del navegador y carga rápida' }
        ],
        about_title: 'Acerca del formato AVIF',
        about_intro: 'AVIF (AV1 Image File Format) es un formato de imagen moderno basado en el codec de video AV1. Proporciona compresión superior en comparación con JPEG y WebP manteniendo mayor calidad de imagen, lo que lo hace ideal para aplicaciones web modernas y almacenamiento de imágenes de alta calidad.',
        advantages_title: 'Ventajas clave',
        advantages: [
          '50% archivos más pequeños – Mejor compresión que JPEG y WebP',
          'Calidad de imagen superior – Mayor calidad en tamaños más pequeños',
          'Codec moderno – Basado en compresión de video AV1',
          'Amplio soporte del navegador – Compatible con navegadores modernos',
          'Soporte HDR – Soporte para imágenes High Dynamic Range',
          'Soporte de transparencia – Soporte para canal alfa'
        ],
        use_cases_title: 'Mejores casos de uso',
        use_cases: [
          'Aplicaciones web modernas – Óptimo para rendimiento web',
          'Almacenamiento de alta calidad – Fotografía profesional',
          'Imágenes de comercio electrónico – Imágenes de productos de carga rápida',
          'Redes sociales – Compartir imágenes eficiente',
          'Aplicaciones móviles – Archivos más pequeños para aplicaciones',
          'Entrega de contenido – Entrega rápida de imágenes'
        ],
        specs_title: 'Especificaciones técnicas',
        specs_header_label: 'Especificación',
        specs_header_value: 'Detalles',
        specs: [
          { label: 'Extensión de archivo', value: '.avif' },
          { label: 'Tipo MIME', value: 'image/avif' },
          { label: 'Tipo de formato', value: 'Formato de imagen basado en codec AV1' },
          { label: 'Compresión', value: 'Compresión basada en AV1' },
          { label: 'Profundidad de color', value: '8, 10, 12 bits por canal' },
          { label: 'Resolución máxima', value: 'Ilimitada' },
          { label: 'Transparencia', value: 'Soporte de canal alfa' },
          { label: 'Soporte HDR', value: 'Soporte HDR completo' }
        ],
        seo_viewing_title: 'Características de visualización avanzadas',
        seo_viewing_text: 'Ver imágenes AVIF con preservación de calidad completa, capacidades de zoom e información detallada de imagen. Nuestro visor soporta todas las características AVIF incluyendo transparencia, HDR e imágenes de alta profundidad de bits.',
        seo_conversion_title: 'Herramientas de conversión profesional',
        seo_conversion_text: 'Convierte archivos AVIF a JPEG, PNG, WebP y otros formatos manteniendo calidad óptima. Nuestro motor de conversión ofrece preservación de calidad, manejo de espacios de color y capacidades de procesamiento por lotes.',
        seo_optimization_title: 'Optimización de calidad',
        seo_optimization_text: 'Optimiza archivos AVIF para uso moderno con nuestras herramientas inteligentes que pueden convertir a formatos web-friendly preservando calidad visual. Perfecto para compartir imágenes en línea, convertir para compatibilidad y reducir tamaños de archivo para mejor rendimiento.',
        editor: {
          toggle_sidebar: 'Alternar barra lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar barra lateral',
          search_placeholder: 'Buscar archivos...',
          files_header: 'Archivos',
          add_files: '+ Agregar',
          format_badge: 'AVIF',
          present: 'Presentar',
          exit_presentation: 'Salir',
          start_presentation: 'Iniciar presentación (Espacio/Flechas para navegar)',
          print_image: 'Imprimir imagen',
          download_image: 'Descargar imagen',
          previous: 'Anterior (←)',
          next: 'Siguiente (→)',
          zoom_out: 'Alejar (-)',
          zoom_in: 'Acercar (+)',
          reset_zoom: 'Clic para restablecer zoom',
          rotate: 'Rotar (R)',
          fullscreen: 'Pantalla completa (F)'
        }
      }
    }
  },
  fr: {
    viewers: {
      avif: {
        meta_title: 'Visionneuse AVIF gratuite - Voir les images AVIF en ligne',
        meta_description: 'Voir les images AVIF (AV1 Image File Format) en ligne gratuitement. Format d\'image moderne avec compression supérieure et qualité. Jusqu\'à 20 fichiers, 100MB au total. Aucune inscription requise.',
        meta_keywords: 'visionneuse AVIF, visionneuse AV1, format d\'image moderne, haute compression, visionneuse d\'images web, visualisation par lots',
        hero_title: 'Visionneuse AVIF gratuite',
        hero_subtitle: 'Voir les images AVIF avec compression supérieure et qualité d\'image moderne',
        upload_title: 'Télécharger des fichiers AVIF',
        upload_description: 'Glissez-déposez vos images AVIF ou cliquez pour parcourir. Prend en charge le format AVIF avec compression supérieure jusqu\'à 100MB au total.',
        upload: {
          drag_drop_text: 'Glissez-déposez vos fichiers ici',
          click_browse_text: 'ou cliquez sur le bouton ci-dessous pour parcourir',
          choose_files_button: 'Choisir des fichiers',
          max_files_info: 'Max {maxFiles} fichiers • Jusqu\'à {maxSize} au total'
        },
        buttons: {
          view_files: 'Voir les fichiers',
          back: 'Retour à tous les visionneuses'
        },
        quick_stats: {
          high_quality: '✓ Haute qualité',
          smaller_size: '🎨 Taille plus petite',
          fast_processing: '⚡ Traitement rapide'
        },
        features: [
          { title: 'Compression supérieure', description: 'Voir les images AVIF avec des fichiers 50% plus petits que JPEG tout en maintenant une qualité d\'image supérieure' },
          { title: 'Format moderne', description: 'Basé sur le codec vidéo AV1, AVIF fournit la dernière technologie de compression d\'image' },
          { title: 'Optimisé pour le web', description: 'Parfait pour les applications web modernes avec excellent support du navigateur et chargement rapide' }
        ],
        about_title: 'À propos du format AVIF',
        about_intro: 'AVIF (AV1 Image File Format) est un format d\'image moderne basé sur le codec vidéo AV1. Il offre une compression supérieure par rapport à JPEG et WebP tout en maintenant une qualité d\'image plus élevée, ce qui le rend idéal pour les applications web modernes et le stockage d\'images haute qualité.',
        advantages_title: 'Avantages clés',
        advantages: [
          '50% fichiers plus petits – Meilleure compression que JPEG et WebP',
          'Qualité d\'image supérieure – Qualité plus élevée à des tailles plus petites',
          'Codec moderne – Basé sur la compression vidéo AV1',
          'Large support du navigateur – Pris en charge par les navigateurs modernes',
          'Support HDR – Support pour images High Dynamic Range',
          'Support de transparence – Support du canal alpha'
        ],
        use_cases_title: 'Meilleurs cas d\'utilisation',
        use_cases: [
          'Applications web modernes – Optimal pour les performances web',
          'Stockage haute qualité – Photographie professionnelle',
          'Images e-commerce – Images de produits à chargement rapide',
          'Médias sociaux – Partage d\'images efficace',
          'Applications mobiles – Fichiers plus petits pour les applications',
          'Livraison de contenu – Livraison rapide d\'images'
        ],
        specs_title: 'Spécifications techniques',
        specs_header_label: 'Spécification',
        specs_header_value: 'Détails',
        specs: [
          { label: 'Extension de fichier', value: '.avif' },
          { label: 'Type MIME', value: 'image/avif' },
          { label: 'Type de format', value: 'Format d\'image basé sur codec AV1' },
          { label: 'Compression', value: 'Compression basée sur AV1' },
          { label: 'Profondeur de couleur', value: '8, 10, 12 bits par canal' },
          { label: 'Résolution maximale', value: 'Illimitée' },
          { label: 'Transparence', value: 'Support du canal alpha' },
          { label: 'Support HDR', value: 'Support HDR complet' }
        ],
        seo_viewing_title: 'Fonctionnalités de visualisation avancées',
        seo_viewing_text: 'Voir les images AVIF avec préservation de qualité complète, capacités de zoom et informations détaillées sur l\'image. Notre visionneuse prend en charge toutes les fonctionnalités AVIF, incluant transparence, HDR et images haute profondeur de bits.',
        seo_conversion_title: 'Outils de conversion professionnels',
        seo_conversion_text: 'Convertir les fichiers AVIF en JPEG, PNG, WebP et autres formats tout en maintenant une qualité optimale. Notre moteur de conversion offre préservation de qualité, gestion des espaces colorimétriques et capacités de traitement par lots.',
        seo_optimization_title: 'Optimisation de qualité',
        seo_optimization_text: 'Optimisez les fichiers AVIF pour un usage moderne avec nos outils intelligents qui peuvent convertir en formats web-friendly tout en préservant la qualité visuelle. Parfait pour partager des images en ligne, convertir pour la compatibilité et réduire les tailles de fichiers pour de meilleures performances.',
        editor: {
          toggle_sidebar: 'Basculer la barre latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la barre latérale',
          search_placeholder: 'Rechercher des fichiers...',
          files_header: 'Fichiers',
          add_files: '+ Ajouter',
          format_badge: 'AVIF',
          present: 'Présenter',
          exit_presentation: 'Quitter',
          start_presentation: 'Démarrer la présentation (Espace/Flèches pour naviguer)',
          print_image: 'Imprimer l\'image',
          download_image: 'Télécharger l\'image',
          previous: 'Précédent (←)',
          next: 'Suivant (→)',
          zoom_out: 'Zoom arrière (-)',
          zoom_in: 'Zoom avant (+)',
          reset_zoom: 'Cliquer pour réinitialiser le zoom',
          rotate: 'Tourner (R)',
          fullscreen: 'Plein écran (F)'
        }
      }
    }
  },
  it: {
    viewers: {
      avif: {
        meta_title: 'Visualizzatore AVIF gratuito - Visualizza immagini AVIF online',
        meta_description: 'Visualizza immagini AVIF (AV1 Image File Format) online gratuitamente. Formato di immagine moderno con compressione superiore e qualità. Fino a 20 file, 100MB totali. Nessuna registrazione richiesta.',
        meta_keywords: 'visualizzatore AVIF, visualizzatore AV1, formato di immagine moderno, alta compressione, visualizzatore di immagini web, visualizzazione batch',
        hero_title: 'Visualizzatore AVIF gratuito',
        hero_subtitle: 'Visualizza immagini AVIF con compressione superiore e qualità di immagine moderna',
        upload_title: 'Carica file AVIF',
        upload_description: 'Trascina e rilascia le tue immagini AVIF o fai clic per sfogliare. Supporta formato AVIF con compressione superiore fino a 100MB totali.',
        upload: {
          drag_drop_text: 'Trascina e rilascia i tuoi file qui',
          click_browse_text: 'o fai clic sul pulsante qui sotto per sfogliare',
          choose_files_button: 'Scegli file',
          max_files_info: 'Max {maxFiles} file • Fino a {maxSize} totali'
        },
        buttons: {
          view_files: 'Visualizza file',
          back: 'Torna a tutti i visualizzatori'
        },
        quick_stats: {
          high_quality: '✓ Alta qualità',
          smaller_size: '🎨 Dimensione più piccola',
          fast_processing: '⚡ Elaborazione rapida'
        },
        features: [
          { title: 'Compressione superiore', description: 'Visualizza immagini AVIF con file 50% più piccoli rispetto a JPEG mantenendo una qualità dell\'immagine superiore' },
          { title: 'Formato moderno', description: 'Basato sul codec video AV1, AVIF fornisce la tecnologia più recente nella compressione delle immagini' },
          { title: 'Ottimizzato per il web', description: 'Perfetto per applicazioni web moderne con eccellente supporto del browser e caricamento rapido' }
        ],
        about_title: 'Informazioni sul formato AVIF',
        about_intro: 'AVIF (AV1 Image File Format) è un formato di immagine moderno basato sul codec video AV1. Fornisce una compressione superiore rispetto a JPEG e WebP mantenendo una qualità dell\'immagine più elevata, rendendolo ideale per applicazioni web moderne e archiviazione di immagini di alta qualità.',
        advantages_title: 'Vantaggi chiave',
        advantages: [
          '50% file più piccoli – Migliore compressione rispetto a JPEG e WebP',
          'Qualità dell\'immagine superiore – Qualità più elevata a dimensioni più piccole',
          'Codec moderno – Basato sulla compressione video AV1',
          'Ampio supporto del browser – Supportato da browser moderni',
          'Supporto HDR – Supporto per immagini High Dynamic Range',
          'Supporto trasparenza – Supporto canale alfa'
        ],
        use_cases_title: 'Migliori casi d\'uso',
        use_cases: [
          'Applicazioni web moderne – Ottimale per le prestazioni web',
          'Archiviazione di alta qualità – Fotografia professionale',
          'Immagini e-commerce – Immagini di prodotti a caricamento rapido',
          'Social media – Condivisione immagini efficiente',
          'Applicazioni mobili – File più piccoli per applicazioni',
          'Content delivery – Consegna rapida di immagini'
        ],
        specs_title: 'Specifiche tecniche',
        specs_header_label: 'Specifica',
        specs_header_value: 'Dettagli',
        specs: [
          { label: 'Estensione file', value: '.avif' },
          { label: 'Tipo MIME', value: 'image/avif' },
          { label: 'Tipo di formato', value: 'Formato immagine basato su codec AV1' },
          { label: 'Compressione', value: 'Compressione basata su AV1' },
          { label: 'Profondità colore', value: '8, 10, 12 bit per canale' },
          { label: 'Risoluzione massima', value: 'Illimitata' },
          { label: 'Trasparenza', value: 'Supporto canale alfa' },
          { label: 'Supporto HDR', value: 'Supporto HDR completo' }
        ],
        seo_viewing_title: 'Funzionalità di visualizzazione avanzate',
        seo_viewing_text: 'Visualizza immagini AVIF con preservazione della qualità completa, capacità di zoom e informazioni dettagliate sull\'immagine. Il nostro visualizzatore supporta tutte le funzionalità AVIF, inclusi trasparenza, HDR e immagini ad alta profondità di bit.',
        seo_conversion_title: 'Strumenti di conversione professionali',
        seo_conversion_text: 'Converti file AVIF in JPEG, PNG, WebP e altri formati mantenendo una qualità ottimale. Il nostro motore di conversione offre preservazione della qualità, gestione degli spazi colore e capacità di elaborazione batch.',
        seo_optimization_title: 'Ottimizzazione qualità',
        seo_optimization_text: 'Ottimizza file AVIF per uso moderno con i nostri strumenti intelligenti che possono convertire in formati web-friendly preservando la qualità visiva. Perfetto per condividere immagini online, convertire per compatibilità e ridurre le dimensioni dei file per prestazioni migliori.',
        editor: {
          toggle_sidebar: 'Mostra/nascondi barra laterale',
          close: 'Chiudi (Esc)',
          close_sidebar: 'Chiudi barra laterale',
          search_placeholder: 'Cerca file...',
          files_header: 'File',
          add_files: '+ Aggiungi',
          format_badge: 'AVIF',
          present: 'Presenta',
          exit_presentation: 'Esci',
          start_presentation: 'Inizia presentazione (Spazio/Frecce per navigare)',
          print_image: 'Stampa immagine',
          download_image: 'Scarica immagine',
          previous: 'Precedente (←)',
          next: 'Successivo (→)',
          zoom_out: 'Zoom indietro (-)',
          zoom_in: 'Zoom avanti (+)',
          reset_zoom: 'Clic per reimpostare zoom',
          rotate: 'Ruota (R)',
          fullscreen: 'Schermo intero (F)'
        }
      }
    }
  },
  nl: {
    viewers: {
      avif: {
        meta_title: 'Gratis AVIF-viewer - Bekijk AVIF-afbeeldingen online',
        meta_description: 'Bekijk AVIF (AV1 Image File Format) afbeeldingen online gratis. Modern afbeeldingsformaat met superieure compressie en kwaliteit. Tot 20 bestanden, 100MB totaal. Geen registratie vereist.',
        meta_keywords: 'AVIF viewer, AV1 afbeeldingsviewer, modern afbeeldingsformaat, hoge compressie, web afbeeldingsviewer, batch weergave',
        hero_title: 'Gratis AVIF-viewer',
        hero_subtitle: 'Bekijk AVIF-afbeeldingen met superieure compressie en moderne beeldkwaliteit',
        upload_title: 'AVIF-bestanden uploaden',
        upload_description: 'Sleep en zet je AVIF-afbeeldingen neer of klik om te bladeren. Ondersteunt AVIF-formaat met superieure compressie tot 100MB totaal.',
        upload: {
          drag_drop_text: 'Sleep en zet je bestanden hier neer',
          click_browse_text: 'of klik op de knop hieronder om te bladeren',
          choose_files_button: 'Bestanden kiezen',
          max_files_info: 'Max {maxFiles} bestanden • Tot {maxSize} totaal'
        },
        buttons: {
          view_files: 'Bestanden bekijken',
          back: 'Terug naar alle viewers'
        },
        quick_stats: {
          high_quality: '✓ Hoge kwaliteit',
          smaller_size: '🎨 Kleinere grootte',
          fast_processing: '⚡ Snelle verwerking'
        },
        features: [
          { title: 'Superieure compressie', description: 'Bekijk AVIF-afbeeldingen met 50% kleinere bestandsgroottes dan JPEG terwijl een hogere beeldkwaliteit behouden blijft' },
          { title: 'Modern formaat', description: 'Gebaseerd op AV1-videocodec, biedt AVIF de nieuwste beeldcompressietechnologie' },
          { title: 'Web-geoptimaliseerd', description: 'Perfect voor moderne webapplicaties met uitstekende browserondersteuning en snel laden' }
        ],
        about_title: 'Over AVIF-formaat',
        about_intro: 'AVIF (AV1 Image File Format) is een modern afbeeldingsformaat gebaseerd op de AV1-videocodec. Het biedt superieure compressie vergeleken met JPEG en WebP terwijl een hogere beeldkwaliteit behouden blijft, waardoor het ideaal is voor moderne webapplicaties en hoogwaardige beeldopslag.',
        advantages_title: 'Belangrijkste voordelen',
        advantages: [
          '50% kleinere bestandsgroottes – Betere compressie dan JPEG en WebP',
          'Superieure beeldkwaliteit – Hogere kwaliteit bij kleinere groottes',
          'Modern codec – Gebaseerd op AV1-videocompressie',
          'Brede browserondersteuning – Ondersteund door moderne browsers',
          'HDR-ondersteuning – High Dynamic Range beeldondersteuning',
          'Transparantie-ondersteuning – Alpha-kanaal ondersteuning'
        ],
        use_cases_title: 'Beste gebruikssituaties',
        use_cases: [
          'Moderne webapplicaties – Optimaal voor webprestaties',
          'Hoge kwaliteit opslag – Professionele fotografie',
          'E-commerce afbeeldingen – Snel ladende productafbeeldingen',
          'Sociale media – Efficiënte beelddeling',
          'Mobiele applicaties – Kleinere bestanden voor apps',
          'Content delivery – Snelle beeldlevering'
        ],
        specs_title: 'Technische specificaties',
        specs_header_label: 'Specificatie',
        specs_header_value: 'Details',
        specs: [
          { label: 'Bestandsextensie', value: '.avif' },
          { label: 'MIME-type', value: 'image/avif' },
          { label: 'Formaattype', value: 'Afbeeldingsformaat gebaseerd op AV1-codec' },
          { label: 'Compressie', value: 'AV1-gebaseerde compressie' },
          { label: 'Kleurdiepte', value: '8, 10, 12 bits per kanaal' },
          { label: 'Maximale resolutie', value: 'Onbeperkt' },
          { label: 'Transparantie', value: 'Alpha-kanaal ondersteuning' },
          { label: 'HDR-ondersteuning', value: 'Volledige HDR-ondersteuning' }
        ],
        seo_viewing_title: 'Geavanceerde weergavefuncties',
        seo_viewing_text: 'Bekijk AVIF-afbeeldingen met volledige kwaliteitsbehoud, zoommogelijkheden en gedetailleerde afbeeldingsinformatie. Onze viewer ondersteunt alle AVIF-functies, inclusief transparantie, HDR en hoogbitdiepte afbeeldingen.',
        seo_conversion_title: 'Professionele conversietools',
        seo_conversion_text: 'Converteer AVIF-bestanden naar JPEG, PNG, WebP en andere formaten terwijl optimale kwaliteit behouden blijft. Onze conversie-engine biedt kwaliteitsbehoud, kleurruimtebehandeling en batch-verwerkingsmogelijkheden.',
        seo_optimization_title: 'Kwaliteitsoptimalisatie',
        seo_optimization_text: 'Optimaliseer AVIF-bestanden voor modern gebruik met onze slimme tools die kunnen converteren naar web-vriendelijke formaten terwijl de visuele kwaliteit behouden blijft. Perfect voor het online delen van afbeeldingen, converteren voor compatibiliteit en het verkleinen van bestandsgroottes voor betere prestaties.',
        editor: {
          toggle_sidebar: 'Zijbalk in-/uitschakelen',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk sluiten',
          search_placeholder: 'Zoek bestanden...',
          files_header: 'Bestanden',
          add_files: '+ Toevoegen',
          format_badge: 'AVIF',
          present: 'Presenteren',
          exit_presentation: 'Afsluiten',
          start_presentation: 'Presentatie starten (Spatie/Pijlen om te navigeren)',
          print_image: 'Afbeelding afdrukken',
          download_image: 'Afbeelding downloaden',
          previous: 'Vorige (←)',
          next: 'Volgende (→)',
          zoom_out: 'Uitzoomen (-)',
          zoom_in: 'Inzoomen (+)',
          reset_zoom: 'Klik om zoom te resetten',
          rotate: 'Draaien (R)',
          fullscreen: 'Volledig scherm (F)'
        }
      }
    }
  },
  pt: {
    viewers: {
      avif: {
        meta_title: 'Visualizador AVIF gratuito - Ver imagens AVIF online',
        meta_description: 'Visualize imagens AVIF (AV1 Image File Format) online gratuitamente. Formato de imagem moderno com compressão superior e qualidade. Até 20 arquivos, 100MB total. Não é necessário registro.',
        meta_keywords: 'visualizador AVIF, visualizador AV1, formato de imagem moderno, alta compressão, visualizador de imagens web, visualização em lote',
        hero_title: 'Visualizador AVIF gratuito',
        hero_subtitle: 'Visualize imagens AVIF com compressão superior e qualidade de imagem moderna',
        upload_title: 'Enviar arquivos AVIF',
        upload_description: 'Arraste e solte suas imagens AVIF ou clique para navegar. Suporta formato AVIF com compressão superior até 100MB total.',
        upload: {
          drag_drop_text: 'Arraste e solte seus arquivos aqui',
          click_browse_text: 'ou clique no botão abaixo para navegar',
          choose_files_button: 'Escolher arquivos',
          max_files_info: 'Máx. {maxFiles} arquivos • Até {maxSize} total'
        },
        buttons: {
          view_files: 'Ver arquivos',
          back: 'Voltar para todos os visualizadores'
        },
        quick_stats: {
          high_quality: '✓ Alta qualidade',
          smaller_size: '🎨 Tamanho menor',
          fast_processing: '⚡ Processamento rápido'
        },
        features: [
          { title: 'Compressão superior', description: 'Visualize imagens AVIF com arquivos 50% menores que JPEG mantendo maior qualidade de imagem' },
          { title: 'Formato moderno', description: 'Baseado no codec de vídeo AV1, AVIF fornece a tecnologia mais recente em compressão de imagens' },
          { title: 'Otimizado para web', description: 'Perfeito para aplicações web modernas com excelente suporte do navegador e carregamento rápido' }
        ],
        about_title: 'Sobre o formato AVIF',
        about_intro: 'AVIF (AV1 Image File Format) é um formato de imagem moderno baseado no codec de vídeo AV1. Fornece compressão superior em comparação com JPEG e WebP mantendo maior qualidade de imagem, tornando-o ideal para aplicações web modernas e armazenamento de imagens de alta qualidade.',
        advantages_title: 'Vantagens principais',
        advantages: [
          '50% arquivos menores – Melhor compressão que JPEG e WebP',
          'Qualidade de imagem superior – Maior qualidade em tamanhos menores',
          'Codec moderno – Baseado em compressão de vídeo AV1',
          'Amplo suporte do navegador – Compatível com navegadores modernos',
          'Suporte HDR – Suporte para imagens High Dynamic Range',
          'Suporte de transparência – Suporte para canal alfa'
        ],
        use_cases_title: 'Melhores casos de uso',
        use_cases: [
          'Aplicações web modernas – Ótimo para desempenho web',
          'Armazenamento de alta qualidade – Fotografia profissional',
          'Imagens de e-commerce – Imagens de produtos de carregamento rápido',
          'Redes sociais – Compartilhamento eficiente de imagens',
          'Aplicações móveis – Arquivos menores para aplicativos',
          'Entrega de conteúdo – Entrega rápida de imagens'
        ],
        specs_title: 'Especificações técnicas',
        specs_header_label: 'Especificação',
        specs_header_value: 'Detalhes',
        specs: [
          { label: 'Extensão de arquivo', value: '.avif' },
          { label: 'Tipo MIME', value: 'image/avif' },
          { label: 'Tipo de formato', value: 'Formato de imagem baseado em codec AV1' },
          { label: 'Compressão', value: 'Compressão baseada em AV1' },
          { label: 'Profundidade de cor', value: '8, 10, 12 bits por canal' },
          { label: 'Resolução máxima', value: 'Ilimitada' },
          { label: 'Transparência', value: 'Suporte ao canal alfa' },
          { label: 'Suporte HDR', value: 'Suporte HDR completo' }
        ],
        seo_viewing_title: 'Recursos de visualização avançados',
        seo_viewing_text: 'Visualize imagens AVIF com preservação de qualidade completa, capacidades de zoom e informações detalhadas da imagem. Nosso visualizador suporta todas as características AVIF, incluindo transparência, HDR e imagens de alta profundidade de bits.',
        seo_conversion_title: 'Ferramentas de conversão profissionais',
        seo_conversion_text: 'Converta arquivos AVIF para JPEG, PNG, WebP e outros formatos mantendo qualidade ótima. Nosso mecanismo de conversão oferece preservação de qualidade, tratamento de espaços de cores e capacidades de processamento em lote.',
        seo_optimization_title: 'Otimização de qualidade',
        seo_optimization_text: 'Otimize arquivos AVIF para uso moderno com nossas ferramentas inteligentes que podem converter para formatos web-friendly preservando qualidade visual. Perfeito para compartilhar imagens online, converter para compatibilidade e reduzir tamanhos de arquivo para melhor desempenho.',
        editor: {
          toggle_sidebar: 'Alternar barra lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar barra lateral',
          search_placeholder: 'Buscar arquivos...',
          files_header: 'Arquivos',
          add_files: '+ Adicionar',
          format_badge: 'AVIF',
          present: 'Apresentar',
          exit_presentation: 'Sair',
          start_presentation: 'Iniciar apresentação (Espaço/Setas para navegar)',
          print_image: 'Imprimir imagem',
          download_image: 'Baixar imagem',
          previous: 'Anterior (←)',
          next: 'Próximo (→)',
          zoom_out: 'Diminuir zoom (-)',
          zoom_in: 'Aumentar zoom (+)',
          reset_zoom: 'Clique para redefinir zoom',
          rotate: 'Girar (R)',
          fullscreen: 'Tela cheia (F)'
        }
      }
    }
  },
  vi: {
    viewers: {
      avif: {
        meta_title: 'Trình xem AVIF miễn phí - Xem hình ảnh AVIF trực tuyến',
        meta_description: 'Xem hình ảnh AVIF (AV1 Image File Format) trực tuyến miễn phí. Định dạng hình ảnh hiện đại với nén vượt trội và chất lượng. Tối đa 20 tệp, tổng 100MB. Không cần đăng ký.',
        meta_keywords: 'trình xem AVIF, trình xem AV1, định dạng hình ảnh hiện đại, nén cao, trình xem hình ảnh web, xem hàng loạt',
        hero_title: 'Trình xem AVIF miễn phí',
        hero_subtitle: 'Xem hình ảnh AVIF với nén vượt trội và chất lượng hình ảnh hiện đại',
        upload_title: 'Tải lên tệp AVIF',
        upload_description: 'Kéo và thả hình ảnh AVIF của bạn hoặc nhấp để duyệt. Hỗ trợ định dạng AVIF với nén vượt trội tối đa 100MB tổng.',
        upload: {
          drag_drop_text: 'Kéo và thả tệp của bạn vào đây',
          click_browse_text: 'hoặc nhấp vào nút bên dưới để duyệt',
          choose_files_button: 'Chọn tệp',
          max_files_info: 'Tối đa {maxFiles} tệp • Tối đa {maxSize} tổng'
        },
        buttons: {
          view_files: 'Xem tệp',
          back: 'Quay lại tất cả trình xem'
        },
        quick_stats: {
          high_quality: '✓ Chất lượng cao',
          smaller_size: '🎨 Kích thước nhỏ hơn',
          fast_processing: '⚡ Xử lý nhanh'
        },
        features: [
          { title: 'Nén vượt trội', description: 'Xem hình ảnh AVIF với kích thước tệp nhỏ hơn 50% so với JPEG trong khi duy trì chất lượng hình ảnh cao hơn' },
          { title: 'Định dạng hiện đại', description: 'Dựa trên codec video AV1, AVIF cung cấp công nghệ nén hình ảnh mới nhất' },
          { title: 'Tối ưu cho web', description: 'Hoàn hảo cho các ứng dụng web hiện đại với hỗ trợ trình duyệt tuyệt vời và tải nhanh' }
        ],
        about_title: 'Về định dạng AVIF',
        about_intro: 'AVIF (AV1 Image File Format) là định dạng hình ảnh hiện đại dựa trên codec video AV1. Nó cung cấp nén vượt trội so với JPEG và WebP trong khi duy trì chất lượng hình ảnh cao hơn, làm cho nó trở thành lý tưởng cho các ứng dụng web hiện đại và lưu trữ hình ảnh chất lượng cao.',
        advantages_title: 'Ưu điểm chính',
        advantages: [
          'Kích thước tệp nhỏ hơn 50% – Nén tốt hơn JPEG và WebP',
          'Chất lượng hình ảnh vượt trội – Chất lượng cao hơn ở kích thước nhỏ hơn',
          'Codec hiện đại – Dựa trên nén video AV1',
          'Hỗ trợ trình duyệt rộng – Được hỗ trợ bởi trình duyệt hiện đại',
          'Hỗ trợ HDR – Hỗ trợ hình ảnh High Dynamic Range',
          'Hỗ trợ trong suốt – Hỗ trợ kênh alpha'
        ],
        use_cases_title: 'Trường hợp sử dụng tốt nhất',
        use_cases: [
          'Ứng dụng web hiện đại – Tối ưu cho hiệu suất web',
          'Lưu trữ chất lượng cao – Nhiếp ảnh chuyên nghiệp',
          'Hình ảnh thương mại điện tử – Hình ảnh sản phẩm tải nhanh',
          'Mạng xã hội – Chia sẻ hình ảnh hiệu quả',
          'Ứng dụng di động – Tệp nhỏ hơn cho ứng dụng',
          'Phân phối nội dung – Phân phối hình ảnh nhanh'
        ],
        specs_title: 'Thông số kỹ thuật',
        specs_header_label: 'Thông số',
        specs_header_value: 'Chi tiết',
        specs: [
          { label: 'Phần mở rộng tệp', value: '.avif' },
          { label: 'Loại MIME', value: 'image/avif' },
          { label: 'Loại định dạng', value: 'Định dạng hình ảnh dựa trên codec AV1' },
          { label: 'Nén', value: 'Nén dựa trên AV1' },
          { label: 'Độ sâu màu', value: '8, 10, 12 bit mỗi kênh' },
          { label: 'Độ phân giải tối đa', value: 'Không giới hạn' },
          { label: 'Độ trong suốt', value: 'Hỗ trợ kênh alpha' },
          { label: 'Hỗ trợ HDR', value: 'Hỗ trợ HDR đầy đủ' }
        ],
        seo_viewing_title: 'Tính năng xem nâng cao',
        seo_viewing_text: 'Xem hình ảnh AVIF với bảo toàn chất lượng đầy đủ, khả năng phóng to và thông tin hình ảnh chi tiết. Trình xem của chúng tôi hỗ trợ tất cả các tính năng AVIF bao gồm trong suốt, HDR và hình ảnh độ sâu bit cao.',
        seo_conversion_title: 'Công cụ chuyển đổi chuyên nghiệp',
        seo_conversion_text: 'Chuyển đổi tệp AVIF sang JPEG, PNG, WebP và các định dạng khác trong khi duy trì chất lượng tối ưu. Công cụ chuyển đổi của chúng tôi cung cấp bảo toàn chất lượng, xử lý không gian màu và khả năng xử lý hàng loạt.',
        seo_optimization_title: 'Tối ưu hóa chất lượng',
        seo_optimization_text: 'Tối ưu hóa tệp AVIF cho sử dụng hiện đại với các công cụ thông minh của chúng tôi có thể chuyển đổi sang định dạng web-friendly trong khi bảo toàn chất lượng hình ảnh. Hoàn hảo để chia sẻ hình ảnh trực tuyến, chuyển đổi để tương thích và giảm kích thước tệp để hiệu suất tốt hơn.',
        editor: {
          toggle_sidebar: 'Chuyển thanh bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng thanh bên',
          search_placeholder: 'Tìm tệp...',
          files_header: 'Tệp',
          add_files: '+ Thêm',
          format_badge: 'AVIF',
          present: 'Trình bày',
          exit_presentation: 'Thoát',
          start_presentation: 'Bắt đầu trình bày (Phím cách/Mũi tên để điều hướng)',
          print_image: 'In hình ảnh',
          download_image: 'Tải xuống hình ảnh',
          previous: 'Trước (←)',
          next: 'Tiếp (→)',
          zoom_out: 'Thu nhỏ (-)',
          zoom_in: 'Phóng to (+)',
          reset_zoom: 'Nhấp để đặt lại thu phóng',
          rotate: 'Xoay (R)',
          fullscreen: 'Toàn màn hình (F)'
        }
      }
    }
  },
  tr: {
    viewers: {
      avif: {
        meta_title: 'Ücretsiz AVIF görüntüleyici - AVIF görüntülerini çevrimiçi görüntüle',
        meta_description: 'AVIF (AV1 Image File Format) görüntülerini çevrimiçi ücretsiz görüntüleyin. Üstün sıkıştırma ve kalite ile modern görüntü formatı. En fazla 20 dosya, toplam 100MB. Kayıt gerekmez.',
        meta_keywords: 'AVIF görüntüleyici, AV1 görüntü görüntüleyici, modern görüntü formatı, yüksek sıkıştırma, web görüntü görüntüleyici, toplu görüntüleme',
        hero_title: 'Ücretsiz AVIF görüntüleyici',
        hero_subtitle: 'Üstün sıkıştırma ve modern görüntü kalitesi ile AVIF görüntülerini görüntüleyin',
        upload_title: 'AVIF dosyalarını yükle',
        upload_description: 'AVIF görüntülerinizi sürükleyip bırakın veya göz atmak için tıklayın. Toplam 100MB\'a kadar üstün sıkıştırma ile AVIF formatını destekler.',
        upload: {
          drag_drop_text: 'Dosyalarınızı buraya sürükleyip bırakın',
          click_browse_text: 'veya göz atmak için aşağıdaki düğmeye tıklayın',
          choose_files_button: 'Dosya seç',
          max_files_info: 'Maks. {maxFiles} dosya • Toplam {maxSize} kadar'
        },
        buttons: {
          view_files: 'Dosyaları görüntüle',
          back: 'Tüm görüntüleyicilere dön'
        },
        quick_stats: {
          high_quality: '✓ Yüksek kalite',
          smaller_size: '🎨 Daha küçük boyut',
          fast_processing: '⚡ Hızlı işleme'
        },
        features: [
          { title: 'Üstün sıkıştırma', description: 'Daha yüksek görüntü kalitesi korurken JPEG\'den %50 daha küçük dosya boyutlarıyla AVIF görüntülerini görüntüleyin' },
          { title: 'Modern format', description: 'AV1 video codec\'ine dayalı olarak AVIF, en son görüntü sıkıştırma teknolojisini sağlar' },
          { title: 'Web için optimize edilmiş', description: 'Mükemmel tarayıcı desteği ve hızlı yükleme ile modern web uygulamaları için mükemmel' }
        ],
        about_title: 'AVIF formatı hakkında',
        about_intro: 'AVIF (AV1 Image File Format), AV1 video codec\'ine dayalı modern bir görüntü formatıdır. Daha yüksek görüntü kalitesi korurken JPEG ve WebP\'ye kıyasla üstün sıkıştırma sağlar ve modern web uygulamaları ve yüksek kaliteli görüntü depolama için ideal hale getirir.',
        advantages_title: 'Ana avantajlar',
        advantages: [
          '%50 daha küçük dosya boyutları – JPEG ve WebP\'den daha iyi sıkıştırma',
          'Üstün görüntü kalitesi – Daha küçük boyutlarda daha yüksek kalite',
          'Modern codec – AV1 video sıkıştırmasına dayalı',
          'Geniş tarayıcı desteği – Modern tarayıcılar tarafından desteklenir',
          'HDR desteği – High Dynamic Range görüntü desteği',
          'Şeffaflık desteği – Alfa kanal desteği'
        ],
        use_cases_title: 'En iyi kullanım durumları',
        use_cases: [
          'Modern web uygulamaları – Web performansı için optimal',
          'Yüksek kaliteli görüntü depolama – Profesyonel fotoğrafçılık',
          'E-ticaret görüntüleri – Hızlı yüklenen ürün görüntüleri',
          'Sosyal medya – Verimli görüntü paylaşımı',
          'Mobil uygulamalar – Uygulamalar için daha küçük dosyalar',
          'İçerik teslimi – Hızlı görüntü teslimi'
        ],
        specs_title: 'Teknik özellikler',
        specs_header_label: 'Özellik',
        specs_header_value: 'Detaylar',
        specs: [
          { label: 'Dosya uzantısı', value: '.avif' },
          { label: 'MIME türü', value: 'image/avif' },
          { label: 'Format türü', value: 'AV1 codec\'ine dayalı görüntü formatı' },
          { label: 'Sıkıştırma', value: 'AV1 tabanlı sıkıştırma' },
          { label: 'Renk derinliği', value: 'Kanal başına 8, 10, 12 bit' },
          { label: 'Maksimum çözünürlük', value: 'Sınırsız' },
          { label: 'Şeffaflık', value: 'Alfa kanal desteği' },
          { label: 'HDR desteği', value: 'Tam HDR desteği' }
        ],
        seo_viewing_title: 'Gelişmiş görüntüleme özellikleri',
        seo_viewing_text: 'Tam kalite koruması, zoom özellikleri ve detaylı görüntü bilgileriyle AVIF görüntülerini görüntüleyin. Görüntüleyicimiz şeffaflık, HDR ve yüksek bit derinliği görüntüleri dahil olmak üzere tüm AVIF özelliklerini destekler.',
        seo_conversion_title: 'Profesyonel dönüştürme araçları',
        seo_conversion_text: 'Optimal kaliteyi korurken AVIF dosyalarını JPEG, PNG, WebP ve diğer formatlara dönüştürün. Dönüştürme motorumuz kalite koruması, renk alanı işleme ve toplu işleme yetenekleri sunar.',
        seo_optimization_title: 'Kalite optimizasyonu',
        seo_optimization_text: 'Görsel kaliteyi korurken web dostu formatlara dönüştürebilen akıllı araçlarımızla AVIF dosyalarını modern kullanım için optimize edin. Çevrimiçi görüntü paylaşmak, uyumluluk için dönüştürmek ve daha iyi performans için dosya boyutlarını azaltmak için mükemmeldir.',
        editor: {
          toggle_sidebar: 'Kenar çubuğunu aç/kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar çubuğunu kapat',
          search_placeholder: 'Dosyaları ara...',
          files_header: 'Dosyalar',
          add_files: '+ Ekle',
          format_badge: 'AVIF',
          present: 'Sun',
          exit_presentation: 'Çık',
          start_presentation: 'Sunumu başlat (Gezinmek için Boşluk/Ok tuşları)',
          print_image: 'Görüntüyü yazdır',
          download_image: 'Görüntüyü indir',
          previous: 'Önceki (←)',
          next: 'Sonraki (→)',
          zoom_out: 'Uzaklaştır (-)',
          zoom_in: 'Yakınlaştır (+)',
          reset_zoom: 'Yakınlaştırmayı sıfırlamak için tıklayın',
          rotate: 'Döndür (R)',
          fullscreen: 'Tam ekran (F)'
        }
      }
    }
  },
  ru: {
    viewers: {
      avif: {
        meta_title: 'Бесплатный просмотрщик AVIF - Просмотр изображений AVIF онлайн',
        meta_description: 'Просматривайте изображения AVIF (AV1 Image File Format) онлайн бесплатно. Современный формат изображения с превосходным сжатием и качеством. До 20 файлов, всего 100MB. Регистрация не требуется.',
        meta_keywords: 'просмотрщик AVIF, просмотрщик AV1, современный формат изображения, высокая компрессия, веб просмотрщик изображений, пакетный просмотр',
        hero_title: 'Бесплатный просмотрщик AVIF',
        hero_subtitle: 'Просматривайте изображения AVIF с превосходным сжатием и современным качеством изображения',
        upload_title: 'Загрузить файлы AVIF',
        upload_description: 'Перетащите изображения AVIF или нажмите для просмотра. Поддерживает формат AVIF с превосходным сжатием до 100MB всего.',
        upload: {
          drag_drop_text: 'Перетащите файлы сюда',
          click_browse_text: 'или нажмите кнопку ниже для просмотра',
          choose_files_button: 'Выбрать файлы',
          max_files_info: 'Макс. {maxFiles} файлов • До {maxSize} всего'
        },
        buttons: {
          view_files: 'Просмотреть файлы',
          back: 'Вернуться ко всем просмотрщикам'
        },
        quick_stats: {
          high_quality: '✓ Высокое качество',
          smaller_size: '🎨 Меньший размер',
          fast_processing: '⚡ Быстрая обработка'
        },
        features: [
          { title: 'Превосходное сжатие', description: 'Просматривайте изображения AVIF с файлами на 50% меньше, чем JPEG, сохраняя более высокое качество изображения' },
          { title: 'Современный формат', description: 'На основе видеокодека AV1, AVIF предоставляет новейшую технологию сжатия изображений' },
          { title: 'Оптимизирован для веба', description: 'Идеально подходит для современных веб-приложений с отличной поддержкой браузера и быстрой загрузкой' }
        ],
        about_title: 'О формате AVIF',
        about_intro: 'AVIF (AV1 Image File Format) - это современный формат изображения, основанный на видеокодеке AV1. Он обеспечивает превосходное сжатие по сравнению с JPEG и WebP, сохраняя более высокое качество изображения, что делает его идеальным для современных веб-приложений и хранения изображений высокого качества.',
        advantages_title: 'Ключевые преимущества',
        advantages: [
          'На 50% меньшие файлы – Лучшее сжатие, чем JPEG и WebP',
          'Превосходное качество изображения – Более высокое качество при меньших размерах',
          'Современный кодек – На основе сжатия видео AV1',
          'Широкая поддержка браузера – Поддерживается современными браузерами',
          'Поддержка HDR – Поддержка изображений High Dynamic Range',
          'Поддержка прозрачности – Поддержка альфа-канала'
        ],
        use_cases_title: 'Лучшие случаи использования',
        use_cases: [
          'Современные веб-приложения – Оптимально для веб-производительности',
          'Хранение высокого качества – Профессиональная фотография',
          'Изображения электронной коммерции – Быстро загружаемые изображения продуктов',
          'Социальные сети – Эффективный обмен изображениями',
          'Мобильные приложения – Меньшие файлы для приложений',
          'Доставка контента – Быстрая доставка изображений'
        ],
        specs_title: 'Технические характеристики',
        specs_header_label: 'Характеристика',
        specs_header_value: 'Детали',
        specs: [
          { label: 'Расширение файла', value: '.avif' },
          { label: 'Тип MIME', value: 'image/avif' },
          { label: 'Тип формата', value: 'Формат изображения на основе кодека AV1' },
          { label: 'Сжатие', value: 'Сжатие на основе AV1' },
          { label: 'Глубина цвета', value: '8, 10, 12 бит на канал' },
          { label: 'Максимальное разрешение', value: 'Неограниченно' },
          { label: 'Прозрачность', value: 'Поддержка альфа-канала' },
          { label: 'Поддержка HDR', value: 'Полная поддержка HDR' }
        ],
        seo_viewing_title: 'Расширенные функции просмотра',
        seo_viewing_text: 'Просматривайте изображения AVIF с полной сохранностью качества, возможностями масштабирования и подробной информацией об изображении. Наш просмотрщик поддерживает все функции AVIF, включая прозрачность, HDR и изображения с высокой битовой глубиной.',
        seo_conversion_title: 'Профессиональные инструменты конвертации',
        seo_conversion_text: 'Конвертируйте файлы AVIF в JPEG, PNG, WebP и другие форматы, сохраняя оптимальное качество. Наш движок конвертации предлагает сохранение качества, обработку цветовых пространств и возможности пакетной обработки.',
        seo_optimization_title: 'Оптимизация качества',
        seo_optimization_text: 'Оптимизируйте файлы AVIF для современного использования с помощью наших интеллектуальных инструментов, которые могут конвертировать в веб-дружественные форматы, сохраняя визуальное качество. Идеально подходит для обмена изображениями в интернете, конвертации для совместимости и уменьшения размеров файлов для лучшей производительности.',
        editor: {
          toggle_sidebar: 'Переключить боковую панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть боковую панель',
          search_placeholder: 'Поиск файлов...',
          files_header: 'Файлы',
          add_files: '+ Добавить',
          format_badge: 'AVIF',
          present: 'Презентовать',
          exit_presentation: 'Выход',
          start_presentation: 'Начать презентацию (Пробел/Стрелки для навигации)',
          print_image: 'Печать изображения',
          download_image: 'Скачать изображение',
          previous: 'Предыдущий (←)',
          next: 'Следующий (→)',
          zoom_out: 'Уменьшить (-)',
          zoom_in: 'Увеличить (+)',
          reset_zoom: 'Нажмите, чтобы сбросить масштаб',
          rotate: 'Повернуть (R)',
          fullscreen: 'Полноэкранный режим (F)'
        }
      }
    }
  },
  ar: {
    viewers: {
      avif: {
        meta_title: 'عارض AVIF مجاني - عرض صور AVIF عبر الإنترنت',
        meta_description: 'اعرض صور AVIF (AV1 Image File Format) عبر الإنترنت مجانًا. تنسيق صورة حديث مع ضغط متفوق وجودة. حتى 20 ملفًا، 100MB إجمالي. لا يلزم التسجيل.',
        meta_keywords: 'عارض AVIF، عارض AV1، تنسيق صورة حديث، ضغط عالي، عارض صور الويب، عرض مجمع',
        hero_title: 'عارض AVIF مجاني',
        hero_subtitle: 'اعرض صور AVIF مع ضغط متفوق وجودة صورة حديثة',
        upload_title: 'رفع ملفات AVIF',
        upload_description: 'اسحب وأفلت صور AVIF أو انقر للتصفح. يدعم تنسيق AVIF مع ضغط متفوق حتى 100MB إجمالي.',
        upload: {
          drag_drop_text: 'اسحب وأفلت ملفاتك هنا',
          click_browse_text: 'أو انقر على الزر أدناه للتصفح',
          choose_files_button: 'اختر الملفات',
          max_files_info: 'الحد الأقصى {maxFiles} ملف • حتى {maxSize} إجمالي'
        },
        buttons: {
          view_files: 'عرض الملفات',
          back: 'العودة إلى جميع العارضات'
        },
        quick_stats: {
          high_quality: '✓ جودة عالية',
          smaller_size: '🎨 حجم أصغر',
          fast_processing: '⚡ معالجة سريعة'
        },
        features: [
          { title: 'ضغط متفوق', description: 'اعرض صور AVIF بملفات أصغر بنسبة 50% من JPEG مع الحفاظ على جودة صورة أعلى' },
          { title: 'تنسيق حديث', description: 'بناءً على كودك فيديو AV1، يوفر AVIF أحدث تقنية ضغط الصور' },
          { title: 'محسّن للويب', description: 'مثالي لتطبيقات الويب الحديثة مع دعم ممتاز للمتصفح وتحميل سريع' }
        ],
        about_title: 'حول تنسيق AVIF',
        about_intro: 'AVIF (AV1 Image File Format) هو تنسيق صورة حديث يعتمد على كودك فيديو AV1. يوفر ضغطًا متفوقًا مقارنة بـ JPEG وWebP مع الحفاظ على جودة صورة أعلى، مما يجعله مثاليًا لتطبيقات الويب الحديثة وتخزين الصور عالية الجودة.',
        advantages_title: 'المزايا الرئيسية',
        advantages: [
          'ملفات أصغر بنسبة 50% – ضغط أفضل من JPEG وWebP',
          'جودة صورة متفوقة – جودة أعلى بأحجام أصغر',
          'كودك حديث – يعتمد على ضغط فيديو AV1',
          'دعم متصفح واسع – مدعوم من المتصفحات الحديثة',
          'دعم HDR – دعم صور High Dynamic Range',
          'دعم الشفافية – دعم قناة ألفا'
        ],
        use_cases_title: 'أفضل حالات الاستخدام',
        use_cases: [
          'تطبيقات الويب الحديثة – الأمثل لأداء الويب',
          'تخزين عالي الجودة – التصوير الفوتوغرافي الاحترافي',
          'صور التجارة الإلكترونية – صور منتجات سريعة التحميل',
          'وسائل التواصل الاجتماعي – مشاركة صور فعالة',
          'التطبيقات المحمولة – ملفات أصغر للتطبيقات',
          'تسليم المحتوى – تسليم صور سريع'
        ],
        specs_title: 'المواصفات التقنية',
        specs_header_label: 'المواصفة',
        specs_header_value: 'التفاصيل',
        specs: [
          { label: 'امتداد الملف', value: '.avif' },
          { label: 'نوع MIME', value: 'image/avif' },
          { label: 'نوع التنسيق', value: 'تنسيق صورة يعتمد على كودك AV1' },
          { label: 'الضغط', value: 'ضغط يعتمد على AV1' },
          { label: 'عمق اللون', value: '8، 10، 12 بت لكل قناة' },
          { label: 'الحد الأقصى للدقة', value: 'غير محدود' },
          { label: 'الشفافية', value: 'دعم قناة ألفا' },
          { label: 'دعم HDR', value: 'دعم HDR كامل' }
        ],
        seo_viewing_title: 'ميزات عرض متقدمة',
        seo_viewing_text: 'اعرض صور AVIF مع الحفاظ الكامل على الجودة وإمكانيات التكبير ومعلومات صورة مفصلة. يدعم عارضنا جميع ميزات AVIF بما في ذلك الشفافية وHDR والصور عالية عمق البت.',
        seo_conversion_title: 'أدوات تحويل احترافية',
        seo_conversion_text: 'حول ملفات AVIF إلى JPEG وPNG وWebP وتنسيقات أخرى مع الحفاظ على جودة مثلى. يوفر محرك التحويل لدينا الحفاظ على الجودة ومعالجة مساحة الألوان وإمكانيات المعالجة المجمعة.',
        seo_optimization_title: 'تحسين الجودة',
        seo_optimization_text: 'حسّن ملفات AVIF للاستخدام الحديث باستخدام أدواتنا الذكية التي يمكنها التحويل إلى تنسيقات مناسبة للويب مع الحفاظ على الجودة البصرية. مثالي لمشاركة الصور عبر الإنترنت والتحويل للتوافق وتقليل أحجام الملفات لأداء أفضل.',
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          files_header: 'الملفات',
          add_files: '+ إضافة',
          format_badge: 'AVIF',
          present: 'عرض',
          exit_presentation: 'خروج',
          start_presentation: 'بدء العرض (المسافة/الأسهم للتنقل)',
          print_image: 'طباعة الصورة',
          download_image: 'تنزيل الصورة',
          previous: 'السابق (←)',
          next: 'التالي (→)',
          zoom_out: 'تصغير (-)',
          zoom_in: 'تكبير (+)',
          reset_zoom: 'انقر لإعادة تعيين التكبير',
          rotate: 'تدوير (R)',
          fullscreen: 'ملء الشاشة (F)'
        }
      }
    }
  },
  th: {
    viewers: {
      avif: {
        meta_title: 'โปรแกรมดู AVIF ฟรี - ดูรูปภาพ AVIF ออนไลน์',
        meta_description: 'ดูรูปภาพ AVIF (AV1 Image File Format) ออนไลน์ฟรี รูปแบบรูปภาพสมัยใหม่ด้วยการบีบอัดที่เหนือกว่าและคุณภาพ สูงสุด 20 ไฟล์ รวม 100MB ไม่ต้องลงทะเบียน',
        meta_keywords: 'โปรแกรมดู AVIF, โปรแกรมดู AV1, รูปแบบรูปภาพสมัยใหม่, การบีบอัดสูง, โปรแกรมดูรูปภาพเว็บ, การดูแบบกลุ่ม',
        hero_title: 'โปรแกรมดู AVIF ฟรี',
        hero_subtitle: 'ดูรูปภาพ AVIF ด้วยการบีบอัดที่เหนือกว่าและคุณภาพรูปภาพสมัยใหม่',
        upload_title: 'อัปโหลดไฟล์ AVIF',
        upload_description: 'ลากและวางรูปภาพ AVIF ของคุณหรือคลิกเพื่อเรียกดู รองรับรูปแบบ AVIF ด้วยการบีบอัดที่เหนือกว่าสูงสุด 100MB รวม',
        upload: {
          drag_drop_text: 'ลากและวางไฟล์ของคุณที่นี่',
          click_browse_text: 'หรือคลิกปุ่มด้านล่างเพื่อเรียกดู',
          choose_files_button: 'เลือกไฟล์',
          max_files_info: 'สูงสุด {maxFiles} ไฟล์ • สูงสุด {maxSize} รวม'
        },
        buttons: {
          view_files: 'ดูไฟล์',
          back: 'กลับไปยังโปรแกรมดูทั้งหมด'
        },
        quick_stats: {
          high_quality: '✓ คุณภาพสูง',
          smaller_size: '🎨 ขนาดเล็กกว่า',
          fast_processing: '⚡ ประมวลผลเร็ว'
        },
        features: [
          { title: 'การบีบอัดที่เหนือกว่า', description: 'ดูรูปภาพ AVIF ด้วยไฟล์ที่เล็กกว่า JPEG 50% ในขณะที่รักษาคุณภาพรูปภาพที่สูงกว่า' },
          { title: 'รูปแบบสมัยใหม่', description: 'อิงตาม codec วิดีโอ AV1, AVIF ให้เทคโนโลยีการบีบอัดรูปภาพล่าสุด' },
          { title: 'ปรับให้เหมาะกับเว็บ', description: 'เหมาะสำหรับแอปพลิเคชันเว็บสมัยใหม่ด้วยการสนับสนุนเบราว์เซอร์ที่ยอดเยี่ยมและการโหลดที่รวดเร็ว' }
        ],
        about_title: 'เกี่ยวกับรูปแบบ AVIF',
        about_intro: 'AVIF (AV1 Image File Format) เป็นรูปแบบรูปภาพสมัยใหม่ที่อิงตาม codec วิดีโอ AV1 ให้การบีบอัดที่เหนือกว่าเมื่อเทียบกับ JPEG และ WebP ในขณะที่รักษาคุณภาพรูปภาพที่สูงกว่า ทำให้เหมาะสำหรับแอปพลิเคชันเว็บสมัยใหม่และการจัดเก็บรูปภาพคุณภาพสูง',
        advantages_title: 'ข้อดีหลัก',
        advantages: [
          'ไฟล์เล็กลง 50% – การบีบอัดดีกว่า JPEG และ WebP',
          'คุณภาพรูปภาพที่เหนือกว่า – คุณภาพสูงกว่าที่ขนาดเล็กลง',
          'Codec สมัยใหม่ – อิงตามการบีบอัดวิดีโอ AV1',
          'การสนับสนุนเบราว์เซอร์กว้าง – รองรับโดยเบราว์เซอร์สมัยใหม่',
          'รองรับ HDR – รองรับรูปภาพ High Dynamic Range',
          'รองรับความโปร่งใส – รองรับช่องอัลฟา'
        ],
        use_cases_title: 'กรณีการใช้งานที่ดีที่สุด',
        use_cases: [
          'แอปพลิเคชันเว็บสมัยใหม่ – เหมาะสำหรับประสิทธิภาพเว็บ',
          'การจัดเก็บคุณภาพสูง – การถ่ายภาพมืออาชีพ',
          'รูปภาพอีคอมเมิร์ซ – รูปภาพผลิตภัณฑ์ที่โหลดเร็ว',
          'โซเชียลมีเดีย – การแชร์รูปภาพที่มีประสิทธิภาพ',
          'แอปพลิเคชันมือถือ – ไฟล์เล็กลงสำหรับแอป',
          'การส่งเนื้อหา – การส่งรูปภาพที่รวดเร็ว'
        ],
        specs_title: 'ข้อมูลจำเพาะทางเทคนิค',
        specs_header_label: 'ข้อมูลจำเพาะ',
        specs_header_value: 'รายละเอียด',
        specs: [
          { label: 'นามสกุลไฟล์', value: '.avif' },
          { label: 'ประเภท MIME', value: 'image/avif' },
          { label: 'ประเภทรูปแบบ', value: 'รูปแบบรูปภาพตาม codec AV1' },
          { label: 'การบีบอัด', value: 'การบีบอัดตาม AV1' },
          { label: 'ความลึกสี', value: '8, 10, 12 บิตต่อช่อง' },
          { label: 'ความละเอียดสูงสุด', value: 'ไม่จำกัด' },
          { label: 'ความโปร่งใส', value: 'รองรับช่องอัลฟา' },
          { label: 'รองรับ HDR', value: 'รองรับ HDR เต็มรูปแบบ' }
        ],
        seo_viewing_title: 'คุณสมบัติการดูขั้นสูง',
        seo_viewing_text: 'ดูรูปภาพ AVIF ด้วยการรักษาคุณภาพเต็มรูปแบบ ความสามารถในการซูม และข้อมูลรูปภาพโดยละเอียด โปรแกรมดูของเรารองรับคุณสมบัติ AVIF ทั้งหมด รวมถึงความโปร่งใส HDR และรูปภาพความลึกบิตสูง',
        seo_conversion_title: 'เครื่องมือแปลงมืออาชีพ',
        seo_conversion_text: 'แปลงไฟล์ AVIF เป็น JPEG, PNG, WebP และรูปแบบอื่น ๆ ในขณะที่รักษาคุณภาพที่เหมาะสม เครื่องมือแปลงของเรามีการรักษาคุณภาพ การจัดการพื้นที่สี และความสามารถในการประมวลผลแบบกลุ่ม',
        seo_optimization_title: 'การปรับปรุงคุณภาพ',
        seo_optimization_text: 'ปรับปรุงไฟล์ AVIF สำหรับการใช้งานสมัยใหม่ด้วยเครื่องมืออัจฉริยะของเราที่สามารถแปลงเป็นรูปแบบที่เหมาะกับเว็บในขณะที่รักษาคุณภาพภาพ เหมาะสำหรับการแชร์รูปภาพออนไลน์ การแปลงเพื่อความเข้ากันได้ และการลดขนาดไฟล์เพื่อประสิทธิภาพที่ดีขึ้น',
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          files_header: 'ไฟล์',
          add_files: '+ เพิ่ม',
          format_badge: 'AVIF',
          present: 'นำเสนอ',
          exit_presentation: 'ออก',
          start_presentation: 'เริ่มการนำเสนอ (Space/ลูกศรเพื่อนำทาง)',
          print_image: 'พิมพ์รูปภาพ',
          download_image: 'ดาวน์โหลดรูปภาพ',
          previous: 'ก่อนหน้า (←)',
          next: 'ถัดไป (→)',
          zoom_out: 'ซูมออก (-)',
          zoom_in: 'ซูมเข้า (+)',
          reset_zoom: 'คลิกเพื่อรีเซ็ตการซูม',
          rotate: 'หมุน (R)',
          fullscreen: 'เต็มหน้าจอ (F)'
        }
      }
    }
  },
  ja: {
    viewers: {
      avif: {
        meta_title: '無料AVIFビューア - AVIF画像をオンラインで表示',
        meta_description: 'AVIF (AV1 Image File Format) 画像をオンラインで無料表示。優れた圧縮と品質を備えた現代的な画像形式。最大20ファイル、合計100MB。登録不要。',
        meta_keywords: 'AVIFビューア、AV1画像ビューア、現代的な画像形式、高圧縮、ウェブ画像ビューア、一括表示',
        hero_title: '無料AVIFビューア',
        hero_subtitle: '優れた圧縮と現代的な画像品質でAVIF画像を表示',
        upload_title: 'AVIFファイルをアップロード',
        upload_description: 'AVIF画像をドラッグ＆ドロップするか、クリックして参照。合計100MBまで優れた圧縮でAVIF形式をサポート。',
        upload: {
          drag_drop_text: 'ファイルをここにドラッグ＆ドロップ',
          click_browse_text: 'または下のボタンをクリックして参照',
          choose_files_button: 'ファイルを選択',
          max_files_info: '最大{maxFiles}ファイル • 合計{maxSize}まで'
        },
        buttons: {
          view_files: 'ファイルを表示',
          back: 'すべてのビューアに戻る'
        },
        quick_stats: {
          high_quality: '✓ 高品質',
          smaller_size: '🎨 小さなサイズ',
          fast_processing: '⚡ 高速処理'
        },
        features: [
          { title: '優れた圧縮', description: 'より高い画質を維持しながら、JPEGより50%小さいファイルサイズでAVIF画像を表示' },
          { title: '現代的な形式', description: 'AV1ビデオコーデックに基づき、AVIFは最新の画像圧縮技術を提供' },
          { title: 'ウェブ最適化', description: '優れたブラウザサポートと高速読み込みを備えた現代的なウェブアプリケーションに最適' }
        ],
        about_title: 'AVIF形式について',
        about_intro: 'AVIF (AV1 Image File Format) は、AV1ビデオコーデックに基づく現代的な画像形式です。より高い画質を維持しながらJPEGおよびWebPと比較して優れた圧縮を提供し、現代的なウェブアプリケーションと高品質画像ストレージに最適です。',
        advantages_title: '主な利点',
        advantages: [
          '50%小さなファイルサイズ – JPEGおよびWebPより優れた圧縮',
          '優れた画質 – より小さなサイズでより高い品質',
          '現代的なコーデック – AV1ビデオ圧縮に基づく',
          '幅広いブラウザサポート – 現代的なブラウザでサポート',
          'HDRサポート – High Dynamic Range画像サポート',
          '透明度サポート – アルファチャネルサポート'
        ],
        use_cases_title: '最適な使用例',
        use_cases: [
          '現代的なウェブアプリケーション – ウェブパフォーマンスに最適',
          '高品質画像ストレージ – プロフェッショナル写真',
          'Eコマース画像 – 高速読み込み製品画像',
          'ソーシャルメディア – 効率的な画像共有',
          'モバイルアプリケーション – アプリ用の小さなファイル',
          'コンテンツ配信 – 高速画像配信'
        ],
        specs_title: '技術仕様',
        specs_header_label: '仕様',
        specs_header_value: '詳細',
        specs: [
          { label: 'ファイル拡張子', value: '.avif' },
          { label: 'MIMEタイプ', value: 'image/avif' },
          { label: '形式タイプ', value: 'AV1コーデックに基づく画像形式' },
          { label: '圧縮', value: 'AV1ベースの圧縮' },
          { label: '色深度', value: 'チャネルあたり8、10、12ビット' },
          { label: '最大解像度', value: '無制限' },
          { label: '透明度', value: 'アルファチャネルサポート' },
          { label: 'HDRサポート', value: '完全なHDRサポート' }
        ],
        seo_viewing_title: '高度な表示機能',
        seo_viewing_text: '完全な品質保持、ズーム機能、詳細な画像情報でAVIF画像を表示。当社のビューアは、透明度、HDR、高ビット深度画像を含むすべてのAVIF機能をサポートします。',
        seo_conversion_title: 'プロフェッショナル変換ツール',
        seo_conversion_text: '最適な品質を維持しながら、AVIFファイルをJPEG、PNG、WebP、その他の形式に変換。当社の変換エンジンは、品質保持、色空間処理、バッチ処理機能を提供します。',
        seo_optimization_title: '品質最適化',
        seo_optimization_text: '視覚品質を維持しながらWebフレンドリーな形式に変換できる当社のスマートツールで、AVIFファイルを最新の使用に最適化。オンライン画像共有、互換性のための変換、パフォーマンス向上のためのファイルサイズ削減に最適です。',
        editor: {
          toggle_sidebar: 'サイドバーの切り替え',
          close: '閉じる（Esc）',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          files_header: 'ファイル',
          add_files: '+ 追加',
          format_badge: 'AVIF',
          present: 'プレゼント',
          exit_presentation: '終了',
          start_presentation: 'プレゼンテーションを開始（スペース/矢印でナビゲート）',
          print_image: '画像を印刷',
          download_image: '画像をダウンロード',
          previous: '前へ（←）',
          next: '次へ（→）',
          zoom_out: 'ズームアウト（-）',
          zoom_in: 'ズームイン（+）',
          reset_zoom: 'クリックしてズームをリセット',
          rotate: '回転（R）',
          fullscreen: 'フルスクリーン（F）'
        }
      }
    }
  },
  zh: {
    viewers: {
      avif: {
        meta_title: '免费AVIF查看器 - 在线查看AVIF图像',
        meta_description: '免费在线查看AVIF (AV1 Image File Format) 图像。具有卓越压缩和质量的现代图像格式。最多20个文件，总计100MB。无需注册。',
        meta_keywords: 'AVIF查看器，AV1图像查看器，现代图像格式，高压缩，网络图像查看器，批量查看',
        hero_title: '免费AVIF查看器',
        hero_subtitle: '以卓越压缩和现代图像质量查看AVIF图像',
        upload_title: '上传AVIF文件',
        upload_description: '拖放您的AVIF图像或点击浏览。支持具有卓越压缩的AVIF格式，总计最多100MB。',
        upload: {
          drag_drop_text: '将文件拖放到此处',
          click_browse_text: '或点击下面的按钮浏览',
          choose_files_button: '选择文件',
          max_files_info: '最多{maxFiles}个文件 • 总计最多{maxSize}'
        },
        buttons: {
          view_files: '查看文件',
          back: '返回所有查看器'
        },
        quick_stats: {
          high_quality: '✓ 高质量',
          smaller_size: '🎨 更小尺寸',
          fast_processing: '⚡ 快速处理'
        },
        features: [
          { title: '卓越压缩', description: '以比JPEG小50%的文件大小查看AVIF图像，同时保持更高的图像质量' },
          { title: '现代格式', description: '基于AV1视频编解码器，AVIF提供最新的图像压缩技术' },
          { title: '网络优化', description: '非常适合具有出色浏览器支持和快速加载的现代网络应用程序' }
        ],
        about_title: '关于AVIF格式',
        about_intro: 'AVIF (AV1 Image File Format) 是基于AV1视频编解码器的现代图像格式。它在保持更高图像质量的同时提供比JPEG和WebP更卓越的压缩，使其成为现代网络应用程序和高质量图像存储的理想选择。',
        advantages_title: '主要优势',
        advantages: [
          '文件大小减少50% – 比JPEG和WebP更好的压缩',
          '卓越的图像质量 – 在更小的尺寸下更高的质量',
          '现代编解码器 – 基于AV1视频压缩',
          '广泛的浏览器支持 – 由现代浏览器支持',
          'HDR支持 – 高动态范围图像支持',
          '透明度支持 – Alpha通道支持'
        ],
        use_cases_title: '最佳用例',
        use_cases: [
          '现代网络应用程序 – 网络性能的最佳选择',
          '高质量图像存储 – 专业摄影',
          '电子商务图像 – 快速加载的产品图像',
          '社交媒体 – 高效的图像共享',
          '移动应用程序 – 应用程序的更小文件',
          '内容交付 – 快速图像交付'
        ],
        specs_title: '技术规格',
        specs_header_label: '规格',
        specs_header_value: '详情',
        specs: [
          { label: '文件扩展名', value: '.avif' },
          { label: 'MIME类型', value: 'image/avif' },
          { label: '格式类型', value: '基于AV1编解码器的图像格式' },
          { label: '压缩', value: '基于AV1的压缩' },
          { label: '颜色深度', value: '每通道8、10、12位' },
          { label: '最大分辨率', value: '无限制' },
          { label: '透明度', value: 'Alpha通道支持' },
          { label: 'HDR支持', value: '完整的HDR支持' }
        ],
        seo_viewing_title: '高级查看功能',
        seo_viewing_text: '以完整的质量保存、缩放功能和详细的图像信息查看AVIF图像。我们的查看器支持所有AVIF功能，包括透明度、HDR和高位深度图像。',
        seo_conversion_title: '专业转换工具',
        seo_conversion_text: '在保持最佳质量的同时，将AVIF文件转换为JPEG、PNG、WebP和其他格式。我们的转换引擎提供质量保存、色彩空间处理和批量处理功能。',
        seo_optimization_title: '质量优化',
        seo_optimization_text: '使用我们的智能工具优化AVIF文件以供现代使用，这些工具可以在保持视觉质量的同时转换为网络友好格式。非常适合在线共享图像、为兼容性转换以及减小文件大小以提高性能。',
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭（Esc）',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          files_header: '文件',
          add_files: '+ 添加',
          format_badge: 'AVIF',
          present: '演示',
          exit_presentation: '退出',
          start_presentation: '开始演示（空格/箭头键导航）',
          print_image: '打印图像',
          download_image: '下载图像',
          previous: '上一个（←）',
          next: '下一个（→）',
          zoom_out: '缩小（-）',
          zoom_in: '放大（+）',
          reset_zoom: '点击重置缩放',
          rotate: '旋转（R）',
          fullscreen: '全屏（F）'
        }
      }
    }
  },
  id: {
    viewers: {
      avif: {
        meta_title: 'Penampil AVIF Gratis - Lihat Gambar AVIF Online',
        meta_description: 'Lihat gambar AVIF (AV1 Image File Format) online gratis. Format gambar modern dengan kompresi superior dan kualitas. Hingga 20 file, total 100MB. Tidak perlu registrasi.',
        meta_keywords: 'penampil AVIF, penampil AV1, format gambar modern, kompresi tinggi, penampil gambar web, tampilan batch',
        hero_title: 'Penampil AVIF Gratis',
        hero_subtitle: 'Lihat gambar AVIF dengan kompresi superior dan kualitas gambar modern',
        upload_title: 'Unggah File AVIF',
        upload_description: 'Seret dan lepas gambar AVIF Anda atau klik untuk menjelajah. Mendukung format AVIF dengan kompresi superior hingga total 100MB.',
        upload: {
          drag_drop_text: 'Seret dan lepas file Anda di sini',
          click_browse_text: 'atau klik tombol di bawah untuk menjelajah',
          choose_files_button: 'Pilih File',
          max_files_info: 'Maks. {maxFiles} file • Hingga {maxSize} total'
        },
        buttons: {
          view_files: 'Lihat File',
          back: 'Kembali ke Semua Penampil'
        },
        quick_stats: {
          high_quality: '✓ Kualitas Tinggi',
          smaller_size: '🎨 Ukuran Lebih Kecil',
          fast_processing: '⚡ Pemrosesan Cepat'
        },
        features: [
          { title: 'Kompresi Superior', description: 'Lihat gambar AVIF dengan ukuran file 50% lebih kecil dari JPEG sambil mempertahankan kualitas gambar yang lebih tinggi' },
          { title: 'Format Modern', description: 'Berdasarkan codec video AV1, AVIF menyediakan teknologi kompresi gambar terbaru' },
          { title: 'Dioptimalkan untuk Web', description: 'Sempurna untuk aplikasi web modern dengan dukungan browser yang sangat baik dan pemuatan cepat' }
        ],
        about_title: 'Tentang Format AVIF',
        about_intro: 'AVIF (AV1 Image File Format) adalah format gambar modern yang didasarkan pada codec video AV1. Ini memberikan kompresi superior dibandingkan dengan JPEG dan WebP sambil mempertahankan kualitas gambar yang lebih tinggi, menjadikannya ideal untuk aplikasi web modern dan penyimpanan gambar berkualitas tinggi.',
        advantages_title: 'Keuntungan Utama',
        advantages: [
          'Ukuran file 50% lebih kecil – Kompresi lebih baik dari JPEG dan WebP',
          'Kualitas gambar superior – Kualitas lebih tinggi pada ukuran lebih kecil',
          'Codec modern – Berdasarkan kompresi video AV1',
          'Dukungan browser luas – Didukung oleh browser modern',
          'Dukungan HDR – Dukungan gambar High Dynamic Range',
          'Dukungan transparansi – Dukungan saluran alpha'
        ],
        use_cases_title: 'Kasus Penggunaan Terbaik',
        use_cases: [
          'Aplikasi web modern – Optimal untuk kinerja web',
          'Penyimpanan kualitas tinggi – Fotografi profesional',
          'Gambar e-commerce – Gambar produk pemuatan cepat',
          'Media sosial – Berbagi gambar yang efisien',
          'Aplikasi seluler – File lebih kecil untuk aplikasi',
          'Pengiriman konten – Pengiriman gambar cepat'
        ],
        specs_title: 'Spesifikasi Teknis',
        specs_header_label: 'Spesifikasi',
        specs_header_value: 'Detail',
        specs: [
          { label: 'Ekstensi File', value: '.avif' },
          { label: 'Tipe MIME', value: 'image/avif' },
          { label: 'Tipe Format', value: 'Format gambar berdasarkan codec AV1' },
          { label: 'Kompresi', value: 'Kompresi berbasis AV1' },
          { label: 'Kedalaman Warna', value: '8, 10, 12 bit per saluran' },
          { label: 'Resolusi Maksimum', value: 'Tidak terbatas' },
          { label: 'Transparansi', value: 'Dukungan saluran alpha' },
          { label: 'Dukungan HDR', value: 'Dukungan HDR penuh' }
        ],
        seo_viewing_title: 'Fitur Tampilan Lanjutan',
        seo_viewing_text: 'Lihat gambar AVIF dengan preservasi kualitas penuh, kemampuan zoom, dan informasi gambar terperinci. Penampil kami mendukung semua fitur AVIF termasuk transparansi, HDR, dan gambar kedalaman bit tinggi.',
        seo_conversion_title: 'Alat Konversi Profesional',
        seo_conversion_text: 'Konversi file AVIF ke JPEG, PNG, WebP, dan format lain sambil mempertahankan kualitas optimal. Mesin konversi kami menawarkan preservasi kualitas, penanganan ruang warna, dan kemampuan pemrosesan batch.',
        seo_optimization_title: 'Optimasi Kualitas',
        seo_optimization_text: 'Optimalkan file AVIF untuk penggunaan modern dengan alat pintar kami yang dapat mengonversi ke format ramah web sambil mempertahankan kualitas visual. Sempurna untuk berbagi gambar online, mengonversi untuk kompatibilitas, dan mengurangi ukuran file untuk kinerja yang lebih baik.',
        editor: {
          toggle_sidebar: 'Alihkan Sidebar',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup Sidebar',
          search_placeholder: 'Cari file...',
          files_header: 'File',
          add_files: '+ Tambah',
          format_badge: 'AVIF',
          present: 'Presentasikan',
          exit_presentation: 'Keluar',
          start_presentation: 'Mulai Presentasi (Spasi/Panah untuk navigasi)',
          print_image: 'Cetak Gambar',
          download_image: 'Unduh Gambar',
          previous: 'Sebelumnya (←)',
          next: 'Selanjutnya (→)',
          zoom_out: 'Perkecil (-)',
          zoom_in: 'Perbesar (+)',
          reset_zoom: 'Klik untuk mengatur ulang zoom',
          rotate: 'Putar (R)',
          fullscreen: 'Layar Penuh (F)'
        }
      }
    }
  },
  sv: {
    viewers: {
      avif: {
        meta_title: 'Gratis AVIF-visare - Visa AVIF-bilder online',
        meta_description: 'Visa AVIF (AV1 Image File Format) bilder online gratis. Modern bildformat med överlägsen komprimering och kvalitet. Upp till 20 filer, 100MB totalt. Ingen registrering krävs.',
        meta_keywords: 'AVIF-visare, AV1 bildvisare, modern bildformat, hög komprimering, webb bildvisare, batchvisning',
        hero_title: 'Gratis AVIF-visare',
        hero_subtitle: 'Visa AVIF-bilder med överlägsen komprimering och modern bildkvalitet',
        upload_title: 'Ladda upp AVIF-filer',
        upload_description: 'Dra och släpp dina AVIF-bilder eller klicka för att bläddra. Stöder AVIF-format med överlägsen komprimering upp till 100MB totalt.',
        upload: {
          drag_drop_text: 'Dra och släpp dina filer här',
          click_browse_text: 'eller klicka på knappen nedan för att bläddra',
          choose_files_button: 'Välj filer',
          max_files_info: 'Max {maxFiles} filer • Upp till {maxSize} totalt'
        },
        buttons: {
          view_files: 'Visa filer',
          back: 'Tillbaka till alla visare'
        },
        quick_stats: {
          high_quality: '✓ Hög kvalitet',
          smaller_size: '🎨 Mindre storlek',
          fast_processing: '⚡ Snabb bearbetning'
        },
        features: [
          { title: 'Överlägsen komprimering', description: 'Visa AVIF-bilder med 50% mindre filstorlekar än JPEG samtidigt som högre bildkvalitet bibehålls' },
          { title: 'Modern format', description: 'Baserat på AV1-videocodec ger AVIF den senaste bildkompressionsteknologin' },
          { title: 'Webb-optimerad', description: 'Perfekt för moderna webbapplikationer med utmärkt webbläsarstöd och snabb laddning' }
        ],
        about_title: 'Om AVIF-formatet',
        about_intro: 'AVIF (AV1 Image File Format) är ett modernt bildformat baserat på AV1-videocodec. Det ger överlägsen komprimering jämfört med JPEG och WebP samtidigt som högre bildkvalitet bibehålls, vilket gör det idealiskt för moderna webbapplikationer och högkvalitativ bildlagring.',
        advantages_title: 'Nyckel fördelar',
        advantages: [
          '50% mindre filstorlekar – Bättre komprimering än JPEG och WebP',
          'Överlägsen bildkvalitet – Högre kvalitet vid mindre storlekar',
          'Modern codec – Baserat på AV1-videokompression',
          'Bredt webbläsarstöd – Stöds av moderna webbläsare',
          'HDR-stöd – High Dynamic Range bildstöd',
          'Transparensstöd – Alfakanalstöd'
        ],
        use_cases_title: 'Bästa användningsfall',
        use_cases: [
          'Moderna webbapplikationer – Optimal för webbprestanda',
          'Högkvalitativ bildlagring – Professionell fotografering',
          'E-handelsbilder – Snabbt laddande produktbilder',
          'Sociala medier – Effektiv bilddelning',
          'Mobilapplikationer – Mindre filer för appar',
          'Innehållsleverans – Snabb bildleverans'
        ],
        specs_title: 'Tekniska specifikationer',
        specs_header_label: 'Specifikation',
        specs_header_value: 'Detaljer',
        specs: [
          { label: 'Filändelse', value: '.avif' },
          { label: 'MIME-typ', value: 'image/avif' },
          { label: 'Formattyp', value: 'Bildformat baserat på AV1-codec' },
          { label: 'Komprimering', value: 'AV1-baserad komprimering' },
          { label: 'Färgdjup', value: '8, 10, 12 bitar per kanal' },
          { label: 'Maximal upplösning', value: 'Obegränsat' },
          { label: 'Transparens', value: 'Alfakanalstöd' },
          { label: 'HDR-stöd', value: 'Fullt HDR-stöd' }
        ],
        seo_viewing_title: 'Avancerade visningsfunktioner',
        seo_viewing_text: 'Visa AVIF-bilder med full kvalitetsbevarande, zoomfunktioner och detaljerad bildinformation. Vår visare stöder alla AVIF-funktioner, inklusive transparens, HDR och högbitdjupa bilder.',
        seo_conversion_title: 'Professionella konverteringsverktyg',
        seo_conversion_text: 'Konvertera AVIF-filer till JPEG, PNG, WebP och andra format samtidigt som optimal kvalitet bibehålls. Vår konverteringsmotor erbjuder kvalitetsbevarande, färgrymds hantering och batch-bearbetningsmöjligheter.',
        seo_optimization_title: 'Kvalitetsoptimering',
        seo_optimization_text: 'Optimera AVIF-filer för modern användning med våra smarta verktyg som kan konvertera till webbvänliga format samtidigt som visuell kvalitet bevaras. Perfekt för att dela bilder online, konvertera för kompatibilitet och minska filstorlekar för bättre prestanda.',
        editor: {
          toggle_sidebar: 'Växla sidopanel',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng sidopanel',
          search_placeholder: 'Sök filer...',
          files_header: 'Filer',
          add_files: '+ Lägg till',
          format_badge: 'AVIF',
          present: 'Presentera',
          exit_presentation: 'Avsluta',
          start_presentation: 'Starta presentation (Mellanslag/Pilar för navigering)',
          print_image: 'Skriv ut bild',
          download_image: 'Ladda ner bild',
          previous: 'Föregående (←)',
          next: 'Nästa (→)',
          zoom_out: 'Zooma ut (-)',
          zoom_in: 'Zooma in (+)',
          reset_zoom: 'Klicka för att återställa zoom',
          rotate: 'Rotera (R)',
          fullscreen: 'Helskärm (F)'
        }
      }
    }
  }
};

// Register translations with i18n
Object.keys(resources).forEach(lang => {
  i18n.addResourceBundle(lang, 'translation', resources[lang], true, true);
});

export { resources };

