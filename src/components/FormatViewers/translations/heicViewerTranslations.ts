import i18n from '../../../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type HEICViewerTranslations = {
  viewers: {
    heic: {
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
      seo_title: string;
      seo_intro: string;
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

const resources: Record<string, HEICViewerTranslations> = {
  en: {
    viewers: {
      heic: {
        meta_title: 'Free HEIC Viewer - View Apple HEIC/HEIF Images Online',
        meta_description: 'View HEIC/HEIF (High Efficiency Image Container) images online for free. Apple iOS image viewer with HDR support and superior compression. Up to 20 files, 100MB total. No registration required.',
        meta_keywords: 'HEIC viewer, HEIF viewer, Apple image viewer, iOS image viewer, iPhone photo viewer, HDR image viewer, batch viewing',
        hero_title: 'Free HEIC Viewer',
        hero_subtitle: 'View Apple HEIC/HEIF images with high efficiency compression and HDR support',
        upload_title: 'Upload HEIC Files',
        upload_description: 'Drag and drop your Apple HEIC/HEIF images or click to browse. Supports iOS photos, Live Photos, and HDR images up to 100MB total.',
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
          { title: 'Superior Compression', description: 'View HEIC images with 50% smaller file sizes than JPEG while maintaining higher image quality' },
          { title: 'HDR Support', description: 'Full support for HDR (High Dynamic Range) images and wide color gamut from iOS devices' },
          { title: 'Live Photos', description: 'Support for Apple Live Photos and burst shot sequences in HEIC format' }
        ],
        about_title: 'About HEIC Format',
        about_intro: 'HEIC (High Efficiency Image Container) is a modern image format developed by Apple, based on the HEIF (High Efficiency Image Format) standard. It provides superior compression compared to JPEG while maintaining higher image quality, making it the default format for photos taken on iOS devices since iOS 11.',
        advantages_title: 'Key Advantages',
        advantages: [
          '50% smaller file sizes – Better compression than JPEG',
          'Superior image quality – Higher quality at smaller sizes',
          'HDR support – High Dynamic Range image capture',
          'Wide color gamut – Support for extended color spaces',
          'Live Photos – Motion and sound in image format',
          'Advanced metadata – Rich EXIF and image data storage'
        ],
        use_cases_title: 'Best Use Cases',
        use_cases: [
          'iPhone/iPad photography – Default format for iOS photos',
          'High-quality image storage – Professional photography',
          'HDR image capture – High dynamic range photography',
          'Live Photos – Motion photos from iOS devices',
          'Space-efficient archiving – Smaller files for storage',
          'Professional photography – High-quality image format'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Specification',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.heic, .heif' },
          { label: 'MIME Type', value: 'image/heic, image/heif' },
          { label: 'Format Type', value: 'Container format based on HEIF standard' },
          { label: 'Compression', value: 'HEVC (H.265) based compression' },
          { label: 'Color Depth', value: '8, 10, 12, 16 bits per channel' },
          { label: 'Maximum Resolution', value: '8192 × 8192 pixels' },
          { label: 'Transparency', value: 'Alpha channel support' },
          { label: 'HDR Support', value: 'Full HDR and wide color gamut support' }
        ],
        seo_title: 'HEIC Viewer and Converter Features',
        seo_intro: 'Our professional HEIC viewer provides comprehensive support for Apple HEIC/HEIF images including HDR display, superior compression handling, and batch preview capabilities. Whether you\'re an iPhone user, photographer, or content creator, our platform offers the tools you need for professional HEIC image handling.',
        seo_viewing_title: 'Advanced Viewing Features',
        seo_viewing_text: 'View HEIC images with full HDR support, wide color gamut display, and detailed image information. Our viewer supports all HEIC variants including standard HEIC, HEIF, and Live Photos, ensuring accurate representation of your Apple device images.',
        seo_conversion_title: 'Professional Conversion Tools',
        seo_conversion_text: 'Convert HEIC files to JPEG, PNG, WebP, and other formats while maintaining optimal quality. Our conversion engine offers HDR preservation, color space handling, and batch processing capabilities for handling multiple files simultaneously.',
        seo_optimization_title: 'Quality Optimization',
        seo_optimization_text: 'Optimize HEIC files for modern use with our smart tools that can convert to web-friendly formats while preserving visual quality. Perfect for sharing iOS photos online, converting for compatibility, and reducing file sizes for better performance.',
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          files_header: 'Files',
          add_files: '+ Add',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'Darmowy przeglądarka HEIC - Przeglądaj obrazy Apple HEIC/HEIF online',
        meta_description: 'Przeglądaj obrazy HEIC/HEIF (High Efficiency Image Container) online za darmo. Przeglądarka obrazów Apple iOS z obsługą HDR i lepszą kompresją. Do 20 plików, łącznie 100MB. Bez rejestracji.',
        meta_keywords: 'przeglądarka HEIC, przeglądarka HEIF, przeglądarka obrazów Apple, przeglądarka obrazów iOS, przeglądarka zdjęć iPhone, przeglądarka obrazów HDR, przeglądanie wsadowe',
        hero_title: 'Darmowy przeglądarka HEIC',
        hero_subtitle: 'Przeglądaj obrazy Apple HEIC/HEIF z wysoką efektywnością kompresji i obsługą HDR',
        upload_title: 'Prześlij pliki HEIC',
        upload_description: 'Przeciągnij i upuść obrazy Apple HEIC/HEIF lub kliknij, aby przeglądać. Obsługuje zdjęcia iOS, Live Photos i obrazy HDR do 100MB łącznie.',
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
          { title: 'Lepsza kompresja', description: 'Przeglądaj obrazy HEIC z 50% mniejszymi plikami niż JPEG przy zachowaniu wyższej jakości obrazu' },
          { title: 'Obsługa HDR', description: 'Pełna obsługa obrazów HDR (High Dynamic Range) i szerokiej gamy kolorów z urządzeń iOS' },
          { title: 'Live Photos', description: 'Obsługa Apple Live Photos i sekwencji zdjęć seryjnych w formacie HEIC' }
        ],
        about_title: 'O formacie HEIC',
        about_intro: 'HEIC (High Efficiency Image Container) to nowoczesny format obrazu opracowany przez Apple, oparty na standardzie HEIF (High Efficiency Image Format). Zapewnia lepszą kompresję w porównaniu z JPEG przy zachowaniu wyższej jakości obrazu, co czyni go domyślnym formatem dla zdjęć wykonywanych na urządzeniach iOS od iOS 11.',
        advantages_title: 'Kluczowe zalety',
        advantages: [
          '50% mniejsze pliki – Lepsza kompresja niż JPEG',
          'Wyższa jakość obrazu – Wyższa jakość przy mniejszych rozmiarach',
          'Obsługa HDR – Przechwytywanie obrazów High Dynamic Range',
          'Szeroka gama kolorów – Obsługa rozszerzonych przestrzeni kolorów',
          'Live Photos – Ruch i dźwięk w formacie obrazu',
          'Zaawansowane metadane – Bogate przechowywanie danych EXIF i obrazu'
        ],
        use_cases_title: 'Najlepsze zastosowania',
        use_cases: [
          'Fotografia iPhone/iPad – Domyślny format dla zdjęć iOS',
          'Przechowywanie wysokiej jakości – Profesjonalna fotografia',
          'Przechwytywanie obrazów HDR – Fotografia High Dynamic Range',
          'Live Photos – Zdjęcia ruchome z urządzeń iOS',
          'Archiwizacja oszczędzająca miejsce – Mniejsze pliki do przechowywania',
          'Profesjonalna fotografia – Format obrazu wysokiej jakości'
        ],
        specs_title: 'Specyfikacje techniczne',
        specs_header_label: 'Specyfikacja',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie pliku', value: '.heic, .heif' },
          { label: 'Typ MIME', value: 'image/heic, image/heif' },
          { label: 'Typ formatu', value: 'Format kontenerowy oparty na standardzie HEIF' },
          { label: 'Kompresja', value: 'Kompresja oparta na HEVC (H.265)' },
          { label: 'Głębia koloru', value: '8, 10, 12, 16 bitów na kanał' },
          { label: 'Maksymalna rozdzielczość', value: '8192 × 8192 pikseli' },
          { label: 'Przezroczystość', value: 'Obsługa kanału alfa' },
          { label: 'Obsługa HDR', value: 'Pełna obsługa HDR i szerokiej gamy kolorów' }
        ],
        seo_title: 'Funkcje przeglądarki i konwertera HEIC',
        seo_intro: 'Nasza profesjonalna przeglądarka HEIC zapewnia kompleksową obsługę obrazów Apple HEIC/HEIF, w tym wyświetlanie HDR, obsługę lepszej kompresji i możliwości podglądu wsadowego. Niezależnie od tego, czy jesteś użytkownikiem iPhone, fotografem czy twórcą treści, nasza platforma oferuje narzędzia potrzebne do profesjonalnej obsługi obrazów HEIC.',
        seo_viewing_title: 'Zaawansowane funkcje przeglądania',
        seo_viewing_text: 'Przeglądaj obrazy HEIC z pełną obsługą HDR, wyświetlaniem szerokiej gamy kolorów i szczegółowymi informacjami o obrazie. Nasza przeglądarka obsługuje wszystkie warianty HEIC, w tym standardowy HEIC, HEIF i Live Photos, zapewniając dokładną reprezentację obrazów z urządzeń Apple.',
        seo_conversion_title: 'Profesjonalne narzędzia konwersji',
        seo_conversion_text: 'Konwertuj pliki HEIC na JPEG, PNG, WebP i inne formaty przy zachowaniu optymalnej jakości. Nasz silnik konwersji oferuje zachowanie HDR, obsługę przestrzeni kolorów i możliwości przetwarzania wsadowego do jednoczesnej obsługi wielu plików.',
        seo_optimization_title: 'Optymalizacja jakości',
        seo_optimization_text: 'Optymalizuj pliki HEIC do nowoczesnego użycia za pomocą naszych inteligentnych narzędzi, które mogą konwertować na formaty przyjazne dla sieci przy zachowaniu jakości wizualnej. Idealne do udostępniania zdjęć iOS online, konwersji dla kompatybilności i zmniejszania rozmiarów plików dla lepszej wydajności.',
        editor: {
          toggle_sidebar: 'Przełącz pasek boczny',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij pasek boczny',
          search_placeholder: 'Szukaj plików...',
          files_header: 'Pliki',
          add_files: '+ Dodaj',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'Kostenloser HEIC-Viewer - Apple HEIC/HEIF-Bilder online anzeigen',
        meta_description: 'Zeigen Sie HEIC/HEIF (High Efficiency Image Container) Bilder online kostenlos an. Apple iOS Bildbetrachter mit HDR-Unterstützung und überlegener Kompression. Bis zu 20 Dateien, 100MB insgesamt. Keine Registrierung erforderlich.',
        meta_keywords: 'HEIC Viewer, HEIF Viewer, Apple Bildbetrachter, iOS Bildbetrachter, iPhone Foto Viewer, HDR Bildbetrachter, Batch-Ansicht',
        hero_title: 'Kostenloser HEIC-Viewer',
        hero_subtitle: 'Zeigen Sie Apple HEIC/HEIF-Bilder mit hoher Kompressionseffizienz und HDR-Unterstützung an',
        upload_title: 'HEIC-Dateien hochladen',
        upload_description: 'Ziehen Sie Ihre Apple HEIC/HEIF-Bilder per Drag & Drop oder klicken Sie zum Durchsuchen. Unterstützt iOS-Fotos, Live Photos und HDR-Bilder bis zu 100MB insgesamt.',
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
          { title: 'Überlegene Kompression', description: 'Zeigen Sie HEIC-Bilder mit 50% kleineren Dateigrößen als JPEG an, während die höhere Bildqualität erhalten bleibt' },
          { title: 'HDR-Unterstützung', description: 'Vollständige Unterstützung für HDR (High Dynamic Range) Bilder und weiten Farbraum von iOS-Geräten' },
          { title: 'Live Photos', description: 'Unterstützung für Apple Live Photos und Burst-Aufnahmesequenzen im HEIC-Format' }
        ],
        about_title: 'Über das HEIC-Format',
        about_intro: 'HEIC (High Efficiency Image Container) ist ein modernes Bildformat, das von Apple entwickelt wurde und auf dem HEIF (High Efficiency Image Format) Standard basiert. Es bietet eine überlegene Kompression im Vergleich zu JPEG bei gleichzeitig höherer Bildqualität und ist seit iOS 11 das Standardformat für auf iOS-Geräten aufgenommene Fotos.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          '50% kleinere Dateigrößen – Bessere Kompression als JPEG',
          'Überlegene Bildqualität – Höhere Qualität bei kleineren Größen',
          'HDR-Unterstützung – High Dynamic Range Bildaufnahme',
          'Weiter Farbraum – Unterstützung für erweiterte Farbräume',
          'Live Photos – Bewegung und Ton im Bildformat',
          'Erweiterte Metadaten – Umfangreiche EXIF- und Bilddatenspeicherung'
        ],
        use_cases_title: 'Beste Anwendungsfälle',
        use_cases: [
          'iPhone/iPad-Fotografie – Standardformat für iOS-Fotos',
          'Hochwertige Bildspeicherung – Professionelle Fotografie',
          'HDR-Bildaufnahme – High Dynamic Range Fotografie',
          'Live Photos – Bewegungsfotos von iOS-Geräten',
          'Platzsparende Archivierung – Kleinere Dateien für die Speicherung',
          'Professionelle Fotografie – Hochwertiges Bildformat'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Spezifikation',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateierweiterung', value: '.heic, .heif' },
          { label: 'MIME-Typ', value: 'image/heic, image/heif' },
          { label: 'Formattyp', value: 'Containerformat basierend auf HEIF-Standard' },
          { label: 'Kompression', value: 'HEVC (H.265) basierte Kompression' },
          { label: 'Farbtiefe', value: '8, 10, 12, 16 Bit pro Kanal' },
          { label: 'Maximale Auflösung', value: '8192 × 8192 Pixel' },
          { label: 'Transparenz', value: 'Alpha-Kanal-Unterstützung' },
          { label: 'HDR-Unterstützung', value: 'Vollständige HDR- und weite Farbraum-Unterstützung' }
        ],
        seo_title: 'HEIC-Viewer und Konverter-Funktionen',
        seo_intro: 'Unser professioneller HEIC-Viewer bietet umfassende Unterstützung für Apple HEIC/HEIF-Bilder, einschließlich HDR-Anzeige, überlegener Kompressionsbehandlung und Batch-Vorschaufunktionen. Egal, ob Sie iPhone-Benutzer, Fotograf oder Content-Ersteller sind, unsere Plattform bietet die Tools, die Sie für die professionelle HEIC-Bildbearbeitung benötigen.',
        seo_viewing_title: 'Erweiterte Ansichtsfunktionen',
        seo_viewing_text: 'Zeigen Sie HEIC-Bilder mit vollständiger HDR-Unterstützung, weitem Farbraum-Display und detaillierten Bildinformationen an. Unser Viewer unterstützt alle HEIC-Varianten, einschließlich Standard-HEIC, HEIF und Live Photos, und gewährleistet eine genaue Darstellung Ihrer Apple-Gerätebilder.',
        seo_conversion_title: 'Professionelle Konvertierungstools',
        seo_conversion_text: 'Konvertieren Sie HEIC-Dateien in JPEG, PNG, WebP und andere Formate bei optimaler Qualität. Unser Konvertierungs-Engine bietet HDR-Erhaltung, Farbraumbehandlung und Batch-Verarbeitungsfunktionen für die gleichzeitige Bearbeitung mehrerer Dateien.',
        seo_optimization_title: 'Qualitätsoptimierung',
        seo_optimization_text: 'Optimieren Sie HEIC-Dateien für den modernen Einsatz mit unseren intelligenten Tools, die in web-freundliche Formate konvertieren können, während die visuelle Qualität erhalten bleibt. Perfekt zum Teilen von iOS-Fotos online, Konvertieren für Kompatibilität und Reduzieren von Dateigrößen für bessere Leistung.',
        editor: {
          toggle_sidebar: 'Seitenleiste umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Seitenleiste schließen',
          search_placeholder: 'Dateien suchen...',
          files_header: 'Dateien',
          add_files: '+ Hinzufügen',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'Visor HEIC gratuito - Ver imágenes Apple HEIC/HEIF en línea',
        meta_description: 'Ver imágenes HEIC/HEIF (High Efficiency Image Container) en línea gratis. Visor de imágenes Apple iOS con soporte HDR y compresión superior. Hasta 20 archivos, 100MB total. No se requiere registro.',
        meta_keywords: 'visor HEIC, visor HEIF, visor de imágenes Apple, visor de imágenes iOS, visor de fotos iPhone, visor de imágenes HDR, visualización por lotes',
        hero_title: 'Visor HEIC gratuito',
        hero_subtitle: 'Ver imágenes Apple HEIC/HEIF con compresión de alta eficiencia y soporte HDR',
        upload_title: 'Subir archivos HEIC',
        upload_description: 'Arrastra y suelta tus imágenes Apple HEIC/HEIF o haz clic para explorar. Soporta fotos iOS, Live Photos e imágenes HDR hasta 100MB total.',
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
          { title: 'Compresión superior', description: 'Ver imágenes HEIC con archivos 50% más pequeños que JPEG manteniendo mayor calidad de imagen' },
          { title: 'Soporte HDR', description: 'Soporte completo para imágenes HDR (High Dynamic Range) y amplia gama de colores de dispositivos iOS' },
          { title: 'Live Photos', description: 'Soporte para Apple Live Photos y secuencias de ráfagas en formato HEIC' }
        ],
        about_title: 'Acerca del formato HEIC',
        about_intro: 'HEIC (High Efficiency Image Container) es un formato de imagen moderno desarrollado por Apple, basado en el estándar HEIF (High Efficiency Image Format). Proporciona compresión superior en comparación con JPEG manteniendo mayor calidad de imagen, convirtiéndolo en el formato predeterminado para fotos tomadas en dispositivos iOS desde iOS 11.',
        advantages_title: 'Ventajas clave',
        advantages: [
          '50% archivos más pequeños – Mejor compresión que JPEG',
          'Calidad de imagen superior – Mayor calidad en tamaños más pequeños',
          'Soporte HDR – Captura de imágenes High Dynamic Range',
          'Amplia gama de colores – Soporte para espacios de color extendidos',
          'Live Photos – Movimiento y sonido en formato de imagen',
          'Metadatos avanzados – Almacenamiento rico de datos EXIF e imagen'
        ],
        use_cases_title: 'Mejores casos de uso',
        use_cases: [
          'Fotografía iPhone/iPad – Formato predeterminado para fotos iOS',
          'Almacenamiento de alta calidad – Fotografía profesional',
          'Captura de imágenes HDR – Fotografía High Dynamic Range',
          'Live Photos – Fotos en movimiento de dispositivos iOS',
          'Archivado eficiente en espacio – Archivos más pequeños para almacenamiento',
          'Fotografía profesional – Formato de imagen de alta calidad'
        ],
        specs_title: 'Especificaciones técnicas',
        specs_header_label: 'Especificación',
        specs_header_value: 'Detalles',
        specs: [
          { label: 'Extensión de archivo', value: '.heic, .heif' },
          { label: 'Tipo MIME', value: 'image/heic, image/heif' },
          { label: 'Tipo de formato', value: 'Formato contenedor basado en estándar HEIF' },
          { label: 'Compresión', value: 'Compresión basada en HEVC (H.265)' },
          { label: 'Profundidad de color', value: '8, 10, 12, 16 bits por canal' },
          { label: 'Resolución máxima', value: '8192 × 8192 píxeles' },
          { label: 'Transparencia', value: 'Soporte de canal alfa' },
          { label: 'Soporte HDR', value: 'Soporte completo HDR y amplia gama de colores' }
        ],
        seo_title: 'Características del visor y convertidor HEIC',
        seo_intro: 'Nuestro visor HEIC profesional proporciona soporte integral para imágenes Apple HEIC/HEIF, incluyendo visualización HDR, manejo de compresión superior y capacidades de vista previa por lotes. Ya seas usuario de iPhone, fotógrafo o creador de contenido, nuestra plataforma ofrece las herramientas que necesitas para el manejo profesional de imágenes HEIC.',
        seo_viewing_title: 'Características de visualización avanzadas',
        seo_viewing_text: 'Ver imágenes HEIC con soporte HDR completo, visualización de amplia gama de colores e información detallada de imagen. Nuestro visor soporta todas las variantes HEIC, incluyendo HEIC estándar, HEIF y Live Photos, asegurando representación precisa de tus imágenes de dispositivos Apple.',
        seo_conversion_title: 'Herramientas de conversión profesional',
        seo_conversion_text: 'Convierte archivos HEIC a JPEG, PNG, WebP y otros formatos manteniendo calidad óptima. Nuestro motor de conversión ofrece preservación HDR, manejo de espacios de color y capacidades de procesamiento por lotes para manejar múltiples archivos simultáneamente.',
        seo_optimization_title: 'Optimización de calidad',
        seo_optimization_text: 'Optimiza archivos HEIC para uso moderno con nuestras herramientas inteligentes que pueden convertir a formatos web-friendly preservando calidad visual. Perfecto para compartir fotos iOS en línea, convertir para compatibilidad y reducir tamaños de archivo para mejor rendimiento.',
        editor: {
          toggle_sidebar: 'Alternar barra lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar barra lateral',
          search_placeholder: 'Buscar archivos...',
          files_header: 'Archivos',
          add_files: '+ Agregar',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'Visionneuse HEIC gratuite - Voir les images Apple HEIC/HEIF en ligne',
        meta_description: 'Voir les images HEIC/HEIF (High Efficiency Image Container) en ligne gratuitement. Visionneuse d\'images Apple iOS avec support HDR et compression supérieure. Jusqu\'à 20 fichiers, 100MB au total. Aucune inscription requise.',
        meta_keywords: 'visionneuse HEIC, visionneuse HEIF, visionneuse d\'images Apple, visionneuse d\'images iOS, visionneuse de photos iPhone, visionneuse d\'images HDR, visualisation par lots',
        hero_title: 'Visionneuse HEIC gratuite',
        hero_subtitle: 'Voir les images Apple HEIC/HEIF avec compression haute efficacité et support HDR',
        upload_title: 'Télécharger des fichiers HEIC',
        upload_description: 'Glissez-déposez vos images Apple HEIC/HEIF ou cliquez pour parcourir. Prend en charge les photos iOS, Live Photos et images HDR jusqu\'à 100MB au total.',
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
          { title: 'Compression supérieure', description: 'Voir les images HEIC avec des fichiers 50% plus petits que JPEG tout en maintenant une qualité d\'image supérieure' },
          { title: 'Support HDR', description: 'Support complet pour les images HDR (High Dynamic Range) et large gamme de couleurs des appareils iOS' },
          { title: 'Live Photos', description: 'Support pour Apple Live Photos et séquences de rafales au format HEIC' }
        ],
        about_title: 'À propos du format HEIC',
        about_intro: 'HEIC (High Efficiency Image Container) est un format d\'image moderne développé par Apple, basé sur la norme HEIF (High Efficiency Image Format). Il offre une compression supérieure par rapport à JPEG tout en maintenant une qualité d\'image plus élevée, ce qui en fait le format par défaut pour les photos prises sur les appareils iOS depuis iOS 11.',
        advantages_title: 'Avantages clés',
        advantages: [
          '50% fichiers plus petits – Meilleure compression que JPEG',
          'Qualité d\'image supérieure – Qualité plus élevée à des tailles plus petites',
          'Support HDR – Capture d\'images High Dynamic Range',
          'Large gamme de couleurs – Support pour espaces colorimétriques étendus',
          'Live Photos – Mouvement et son au format image',
          'Métadonnées avancées – Stockage riche de données EXIF et image'
        ],
        use_cases_title: 'Meilleurs cas d\'utilisation',
        use_cases: [
          'Photographie iPhone/iPad – Format par défaut pour photos iOS',
          'Stockage haute qualité – Photographie professionnelle',
          'Capture d\'images HDR – Photographie High Dynamic Range',
          'Live Photos – Photos animées des appareils iOS',
          'Archivage efficace en espace – Fichiers plus petits pour le stockage',
          'Photographie professionnelle – Format d\'image haute qualité'
        ],
        specs_title: 'Spécifications techniques',
        specs_header_label: 'Spécification',
        specs_header_value: 'Détails',
        specs: [
          { label: 'Extension de fichier', value: '.heic, .heif' },
          { label: 'Type MIME', value: 'image/heic, image/heif' },
          { label: 'Type de format', value: 'Format conteneur basé sur la norme HEIF' },
          { label: 'Compression', value: 'Compression basée sur HEVC (H.265)' },
          { label: 'Profondeur de couleur', value: '8, 10, 12, 16 bits par canal' },
          { label: 'Résolution maximale', value: '8192 × 8192 pixels' },
          { label: 'Transparence', value: 'Support du canal alpha' },
          { label: 'Support HDR', value: 'Support complet HDR et large gamme de couleurs' }
        ],
        seo_title: 'Fonctionnalités de la visionneuse et convertisseur HEIC',
        seo_intro: 'Notre visionneuse HEIC professionnelle offre un support complet pour les images Apple HEIC/HEIF, incluant l\'affichage HDR, la gestion de compression supérieure et les capacités de prévisualisation par lots. Que vous soyez utilisateur iPhone, photographe ou créateur de contenu, notre plateforme offre les outils dont vous avez besoin pour la gestion professionnelle d\'images HEIC.',
        seo_viewing_title: 'Fonctionnalités de visualisation avancées',
        seo_viewing_text: 'Voir les images HEIC avec support HDR complet, affichage de large gamme de couleurs et informations détaillées sur l\'image. Notre visionneuse prend en charge toutes les variantes HEIC, incluant HEIC standard, HEIF et Live Photos, assurant une représentation précise de vos images d\'appareils Apple.',
        seo_conversion_title: 'Outils de conversion professionnels',
        seo_conversion_text: 'Convertir les fichiers HEIC en JPEG, PNG, WebP et autres formats tout en maintenant une qualité optimale. Notre moteur de conversion offre la préservation HDR, la gestion des espaces colorimétriques et les capacités de traitement par lots pour gérer plusieurs fichiers simultanément.',
        seo_optimization_title: 'Optimisation de qualité',
        seo_optimization_text: 'Optimisez les fichiers HEIC pour un usage moderne avec nos outils intelligents qui peuvent convertir en formats web-friendly tout en préservant la qualité visuelle. Parfait pour partager des photos iOS en ligne, convertir pour la compatibilité et réduire les tailles de fichiers pour de meilleures performances.',
        editor: {
          toggle_sidebar: 'Basculer la barre latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la barre latérale',
          search_placeholder: 'Rechercher des fichiers...',
          files_header: 'Fichiers',
          add_files: '+ Ajouter',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'Visualizzatore HEIC gratuito - Visualizza immagini Apple HEIC/HEIF online',
        meta_description: 'Visualizza immagini HEIC/HEIF (High Efficiency Image Container) online gratuitamente. Visualizzatore di immagini Apple iOS con supporto HDR e compressione superiore. Fino a 20 file, 100MB totali. Nessuna registrazione richiesta.',
        meta_keywords: 'visualizzatore HEIC, visualizzatore HEIF, visualizzatore immagini Apple, visualizzatore immagini iOS, visualizzatore foto iPhone, visualizzatore immagini HDR, visualizzazione batch',
        hero_title: 'Visualizzatore HEIC gratuito',
        hero_subtitle: 'Visualizza immagini Apple HEIC/HEIF con compressione ad alta efficienza e supporto HDR',
        upload_title: 'Carica file HEIC',
        upload_description: 'Trascina e rilascia le tue immagini Apple HEIC/HEIF o fai clic per sfogliare. Supporta foto iOS, Live Photos e immagini HDR fino a 100MB totali.',
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
          { title: 'Compressione superiore', description: 'Visualizza immagini HEIC con file 50% più piccoli rispetto a JPEG mantenendo una qualità dell\'immagine superiore' },
          { title: 'Supporto HDR', description: 'Supporto completo per immagini HDR (High Dynamic Range) e ampia gamma di colori da dispositivi iOS' },
          { title: 'Live Photos', description: 'Supporto per Apple Live Photos e sequenze di scatti a raffica in formato HEIC' }
        ],
        about_title: 'Informazioni sul formato HEIC',
        about_intro: 'HEIC (High Efficiency Image Container) è un formato di immagine moderno sviluppato da Apple, basato sullo standard HEIF (High Efficiency Image Format). Fornisce una compressione superiore rispetto a JPEG mantenendo una qualità dell\'immagine più elevata, rendendolo il formato predefinito per le foto scattate su dispositivi iOS da iOS 11.',
        advantages_title: 'Vantaggi chiave',
        advantages: [
          '50% file più piccoli – Migliore compressione rispetto a JPEG',
          'Qualità dell\'immagine superiore – Qualità più elevata a dimensioni più piccole',
          'Supporto HDR – Cattura di immagini High Dynamic Range',
          'Ampia gamma di colori – Supporto per spazi colore estesi',
          'Live Photos – Movimento e suono nel formato immagine',
          'Metadati avanzati – Archiviazione ricca di dati EXIF e immagine'
        ],
        use_cases_title: 'Migliori casi d\'uso',
        use_cases: [
          'Fotografia iPhone/iPad – Formato predefinito per foto iOS',
          'Archiviazione di alta qualità – Fotografia professionale',
          'Cattura di immagini HDR – Fotografia High Dynamic Range',
          'Live Photos – Foto animate da dispositivi iOS',
          'Archiviazione efficiente nello spazio – File più piccoli per l\'archiviazione',
          'Fotografia professionale – Formato immagine di alta qualità'
        ],
        specs_title: 'Specifiche tecniche',
        specs_header_label: 'Specifica',
        specs_header_value: 'Dettagli',
        specs: [
          { label: 'Estensione file', value: '.heic, .heif' },
          { label: 'Tipo MIME', value: 'image/heic, image/heif' },
          { label: 'Tipo di formato', value: 'Formato contenitore basato su standard HEIF' },
          { label: 'Compressione', value: 'Compressione basata su HEVC (H.265)' },
          { label: 'Profondità colore', value: '8, 10, 12, 16 bit per canale' },
          { label: 'Risoluzione massima', value: '8192 × 8192 pixel' },
          { label: 'Trasparenza', value: 'Supporto canale alfa' },
          { label: 'Supporto HDR', value: 'Supporto completo HDR e ampia gamma di colori' }
        ],
        seo_title: 'Funzionalità del visualizzatore e convertitore HEIC',
        seo_intro: 'Il nostro visualizzatore HEIC professionale fornisce supporto completo per immagini Apple HEIC/HEIF, inclusa visualizzazione HDR, gestione compressione superiore e capacità di anteprima batch. Che tu sia un utente iPhone, fotografo o creatore di contenuti, la nostra piattaforma offre gli strumenti di cui hai bisogno per la gestione professionale di immagini HEIC.',
        seo_viewing_title: 'Funzionalità di visualizzazione avanzate',
        seo_viewing_text: 'Visualizza immagini HEIC con supporto HDR completo, visualizzazione ampia gamma di colori e informazioni dettagliate sull\'immagine. Il nostro visualizzatore supporta tutte le varianti HEIC, inclusi HEIC standard, HEIF e Live Photos, garantendo una rappresentazione accurata delle tue immagini di dispositivi Apple.',
        seo_conversion_title: 'Strumenti di conversione professionali',
        seo_conversion_text: 'Converti file HEIC in JPEG, PNG, WebP e altri formati mantenendo una qualità ottimale. Il nostro motore di conversione offre preservazione HDR, gestione spazi colore e capacità di elaborazione batch per gestire più file contemporaneamente.',
        seo_optimization_title: 'Ottimizzazione qualità',
        seo_optimization_text: 'Ottimizza file HEIC per uso moderno con i nostri strumenti intelligenti che possono convertire in formati web-friendly preservando la qualità visiva. Perfetto per condividere foto iOS online, convertire per compatibilità e ridurre le dimensioni dei file per prestazioni migliori.',
        editor: {
          toggle_sidebar: 'Mostra/nascondi barra laterale',
          close: 'Chiudi (Esc)',
          close_sidebar: 'Chiudi barra laterale',
          search_placeholder: 'Cerca file...',
          files_header: 'File',
          add_files: '+ Aggiungi',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'Gratis HEIC-viewer - Bekijk Apple HEIC/HEIF-afbeeldingen online',
        meta_description: 'Bekijk HEIC/HEIF (High Efficiency Image Container) afbeeldingen online gratis. Apple iOS afbeeldingsviewer met HDR-ondersteuning en superieure compressie. Tot 20 bestanden, 100MB totaal. Geen registratie vereist.',
        meta_keywords: 'HEIC viewer, HEIF viewer, Apple afbeeldingsviewer, iOS afbeeldingsviewer, iPhone foto viewer, HDR afbeeldingsviewer, batch weergave',
        hero_title: 'Gratis HEIC-viewer',
        hero_subtitle: 'Bekijk Apple HEIC/HEIF-afbeeldingen met hoge compressie-efficiëntie en HDR-ondersteuning',
        upload_title: 'HEIC-bestanden uploaden',
        upload_description: 'Sleep en zet je Apple HEIC/HEIF-afbeeldingen neer of klik om te bladeren. Ondersteunt iOS foto\'s, Live Photos en HDR-afbeeldingen tot 100MB totaal.',
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
          { title: 'Superieure compressie', description: 'Bekijk HEIC-afbeeldingen met 50% kleinere bestandsgroottes dan JPEG terwijl een hogere beeldkwaliteit behouden blijft' },
          { title: 'HDR-ondersteuning', description: 'Volledige ondersteuning voor HDR (High Dynamic Range) afbeeldingen en breed kleurengamma van iOS-apparaten' },
          { title: 'Live Photos', description: 'Ondersteuning voor Apple Live Photos en burst-opnamesequenties in HEIC-formaat' }
        ],
        about_title: 'Over HEIC-formaat',
        about_intro: 'HEIC (High Efficiency Image Container) is een modern afbeeldingsformaat ontwikkeld door Apple, gebaseerd op de HEIF (High Efficiency Image Format) standaard. Het biedt superieure compressie vergeleken met JPEG terwijl een hogere beeldkwaliteit behouden blijft, waardoor het het standaardformaat is voor foto\'s gemaakt op iOS-apparaten sinds iOS 11.',
        advantages_title: 'Belangrijkste voordelen',
        advantages: [
          '50% kleinere bestandsgroottes – Betere compressie dan JPEG',
          'Superieure beeldkwaliteit – Hogere kwaliteit bij kleinere groottes',
          'HDR-ondersteuning – High Dynamic Range beeldopname',
          'Breed kleurengamma – Ondersteuning voor uitgebreide kleurruimten',
          'Live Photos – Beweging en geluid in afbeeldingsformaat',
          'Geavanceerde metadata – Rijke EXIF- en beelddataopslag'
        ],
        use_cases_title: 'Beste gebruikssituaties',
        use_cases: [
          'iPhone/iPad fotografie – Standaardformaat voor iOS foto\'s',
          'Hoge kwaliteit opslag – Professionele fotografie',
          'HDR beeldopname – High Dynamic Range fotografie',
          'Live Photos – Bewegende foto\'s van iOS-apparaten',
          'Ruimte-efficiënte archivering – Kleinere bestanden voor opslag',
          'Professionele fotografie – Hoogwaardig afbeeldingsformaat'
        ],
        specs_title: 'Technische specificaties',
        specs_header_label: 'Specificatie',
        specs_header_value: 'Details',
        specs: [
          { label: 'Bestandsextensie', value: '.heic, .heif' },
          { label: 'MIME-type', value: 'image/heic, image/heif' },
          { label: 'Formaattype', value: 'Containerformaat gebaseerd op HEIF-standaard' },
          { label: 'Compressie', value: 'HEVC (H.265) gebaseerde compressie' },
          { label: 'Kleurdiepte', value: '8, 10, 12, 16 bits per kanaal' },
          { label: 'Maximale resolutie', value: '8192 × 8192 pixels' },
          { label: 'Transparantie', value: 'Alpha-kanaal ondersteuning' },
          { label: 'HDR-ondersteuning', value: 'Volledige HDR- en breed kleurengamma ondersteuning' }
        ],
        seo_title: 'HEIC-viewer en converter functies',
        seo_intro: 'Onze professionele HEIC-viewer biedt uitgebreide ondersteuning voor Apple HEIC/HEIF-afbeeldingen, inclusief HDR-weergave, superieure compressiebehandeling en batch-voorvertoningsmogelijkheden. Of je nu een iPhone-gebruiker, fotograaf of contentmaker bent, ons platform biedt de tools die je nodig hebt voor professionele HEIC-afbeeldingsbehandeling.',
        seo_viewing_title: 'Geavanceerde weergavefuncties',
        seo_viewing_text: 'Bekijk HEIC-afbeeldingen met volledige HDR-ondersteuning, breed kleurengamma-weergave en gedetailleerde afbeeldingsinformatie. Onze viewer ondersteunt alle HEIC-varianten, inclusief standaard HEIC, HEIF en Live Photos, waardoor een nauwkeurige weergave van je Apple-apparaatafbeeldingen wordt gegarandeerd.',
        seo_conversion_title: 'Professionele conversietools',
        seo_conversion_text: 'Converteer HEIC-bestanden naar JPEG, PNG, WebP en andere formaten terwijl optimale kwaliteit behouden blijft. Onze conversie-engine biedt HDR-behoud, kleurruimtebehandeling en batch-verwerkingsmogelijkheden voor het gelijktijdig verwerken van meerdere bestanden.',
        seo_optimization_title: 'Kwaliteitsoptimalisatie',
        seo_optimization_text: 'Optimaliseer HEIC-bestanden voor modern gebruik met onze slimme tools die kunnen converteren naar web-vriendelijke formaten terwijl de visuele kwaliteit behouden blijft. Perfect voor het online delen van iOS-foto\'s, converteren voor compatibiliteit en het verkleinen van bestandsgroottes voor betere prestaties.',
        editor: {
          toggle_sidebar: 'Zijbalk in-/uitschakelen',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk sluiten',
          search_placeholder: 'Zoek bestanden...',
          files_header: 'Bestanden',
          add_files: '+ Toevoegen',
          format_badge: 'HEIC',
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
  }
};

// Register translations with i18n
Object.keys(resources).forEach(lang => {
  i18n.addResourceBundle(lang, 'translation', resources[lang], true, true);
});

export { resources };

