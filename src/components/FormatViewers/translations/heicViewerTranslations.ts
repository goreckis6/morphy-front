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
        meta_title: 'HEIC Viewer: Open & View iPhone HEIC Photos Online for Free',
        meta_description: 'Can\'t open an iPhone HEIC photo? View HEIC files instantly in your browser. No software or sign-up required. Fast, free, and secure. Try it now!',
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
        meta_title: 'Przeglądarka HEIC: Otwórz i Wyświetl Zdjęcia HEIC z iPhone Online za Darmo',
        meta_description: 'Nie możesz otworzyć zdjęcia HEIC z iPhone? Wyświetlaj pliki HEIC natychmiast w przeglądarce. Bez oprogramowania i rejestracji. Szybko, za darmo i bezpiecznie. Wypróbuj teraz!',
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
        meta_title: 'HEIC Viewer: iPhone HEIC-Fotos Online Kostenlos Öffnen & Anzeigen',
        meta_description: 'Können Sie ein iPhone HEIC-Foto nicht öffnen? HEIC-Dateien sofort in Ihrem Browser anzeigen. Keine Software oder Anmeldung erforderlich. Schnell, kostenlos und sicher. Jetzt ausprobieren!',
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
        meta_title: 'Visor HEIC: Abre y Visualiza Fotos HEIC de iPhone Online Gratis',
        meta_description: '¿No puedes abrir una foto HEIC de iPhone? Visualiza archivos HEIC al instante en tu navegador. Sin software ni registro requerido. Rápido, gratis y seguro. ¡Pruébalo ahora!',
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
        meta_title: 'Visionneuse HEIC: Ouvrez et Visualisez des Photos HEIC iPhone en Ligne Gratuitement',
        meta_description: 'Vous ne pouvez pas ouvrir une photo HEIC iPhone? Visualisez les fichiers HEIC instantanément dans votre navigateur. Aucun logiciel ou inscription requis. Rapide, gratuit et sécurisé. Essayez-le maintenant!',
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
        meta_title: 'Visualizzatore HEIC: Apri e Visualizza Foto HEIC iPhone Online Gratis',
        meta_description: 'Non riesci ad aprire una foto HEIC iPhone? Visualizza file HEIC istantaneamente nel tuo browser. Nessun software o registrazione richiesta. Veloce, gratuito e sicuro. Provalo ora!',
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
        meta_title: 'HEIC Viewer: Open & Bekijk iPhone HEIC Foto\'s Online Gratis',
        meta_description: 'Kun je een iPhone HEIC foto niet openen? Bekijk HEIC bestanden direct in je browser. Geen software of aanmelding vereist. Snel, gratis en veilig. Probeer het nu!',
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
  },
  pt: {
    viewers: {
      heic: {
        meta_title: 'Visualizador HEIC: Abra e Visualize Fotos HEIC do iPhone Online Grátis',
        meta_description: 'Não consegue abrir uma foto HEIC do iPhone? Visualize arquivos HEIC instantaneamente no seu navegador. Sem software ou cadastro necessário. Rápido, gratuito e seguro. Experimente agora!',
        meta_keywords: 'visualizador HEIC, visualizador HEIF, visualizador de imagens Apple, visualizador de imagens iOS, visualizador de fotos iPhone, visualizador de imagens HDR, visualização em lote',
        hero_title: 'Visualizador HEIC gratuito',
        hero_subtitle: 'Visualize imagens Apple HEIC/HEIF com compressão de alta eficiência e suporte HDR',
        upload_title: 'Enviar arquivos HEIC',
        upload_description: 'Arraste e solte suas imagens Apple HEIC/HEIF ou clique para navegar. Suporta fotos iOS, Live Photos e imagens HDR até 100MB total.',
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
          { title: 'Compressão superior', description: 'Visualize imagens HEIC com arquivos 50% menores que JPEG mantendo maior qualidade de imagem' },
          { title: 'Suporte HDR', description: 'Suporte completo para imagens HDR (High Dynamic Range) e ampla gama de cores de dispositivos iOS' },
          { title: 'Live Photos', description: 'Suporte para Apple Live Photos e sequências de fotos em rajada no formato HEIC' }
        ],
        about_title: 'Sobre o formato HEIC',
        about_intro: 'HEIC (High Efficiency Image Container) é um formato de imagem moderno desenvolvido pela Apple, baseado no padrão HEIF (High Efficiency Image Format). Fornece compressão superior em comparação com JPEG mantendo maior qualidade de imagem, tornando-o o formato padrão para fotos tiradas em dispositivos iOS desde o iOS 11.',
        advantages_title: 'Vantagens principais',
        advantages: [
          '50% arquivos menores – Melhor compressão que JPEG',
          'Qualidade de imagem superior – Maior qualidade em tamanhos menores',
          'Suporte HDR – Captura de imagens High Dynamic Range',
          'Ampla gama de cores – Suporte para espaços de cores estendidos',
          'Live Photos – Movimento e som no formato de imagem',
          'Metadados avançados – Armazenamento rico de dados EXIF e imagem'
        ],
        use_cases_title: 'Melhores casos de uso',
        use_cases: [
          'Fotografia iPhone/iPad – Formato padrão para fotos iOS',
          'Armazenamento de alta qualidade – Fotografia profissional',
          'Captura de imagens HDR – Fotografia High Dynamic Range',
          'Live Photos – Fotos em movimento de dispositivos iOS',
          'Arquivamento eficiente em espaço – Arquivos menores para armazenamento',
          'Fotografia profissional – Formato de imagem de alta qualidade'
        ],
        specs_title: 'Especificações técnicas',
        specs_header_label: 'Especificação',
        specs_header_value: 'Detalhes',
        specs: [
          { label: 'Extensão de arquivo', value: '.heic, .heif' },
          { label: 'Tipo MIME', value: 'image/heic, image/heif' },
          { label: 'Tipo de formato', value: 'Formato contêiner baseado no padrão HEIF' },
          { label: 'Compressão', value: 'Compressão baseada em HEVC (H.265)' },
          { label: 'Profundidade de cor', value: '8, 10, 12, 16 bits por canal' },
          { label: 'Resolução máxima', value: '8192 × 8192 pixels' },
          { label: 'Transparência', value: 'Suporte ao canal alfa' },
          { label: 'Suporte HDR', value: 'Suporte completo HDR e ampla gama de cores' }
        ],
        seo_title: 'Recursos do visualizador e conversor HEIC',
        seo_intro: 'Nosso visualizador HEIC profissional fornece suporte abrangente para imagens Apple HEIC/HEIF, incluindo exibição HDR, tratamento de compressão superior e capacidades de visualização em lote. Seja você um usuário iPhone, fotógrafo ou criador de conteúdo, nossa plataforma oferece as ferramentas necessárias para o tratamento profissional de imagens HEIC.',
        seo_viewing_title: 'Recursos de visualização avançados',
        seo_viewing_text: 'Visualize imagens HEIC com suporte HDR completo, exibição de ampla gama de cores e informações detalhadas da imagem. Nosso visualizador suporta todas as variantes HEIC, incluindo HEIC padrão, HEIF e Live Photos, garantindo representação precisa de suas imagens de dispositivos Apple.',
        seo_conversion_title: 'Ferramentas de conversão profissionais',
        seo_conversion_text: 'Converta arquivos HEIC para JPEG, PNG, WebP e outros formatos mantendo qualidade ótima. Nosso mecanismo de conversão oferece preservação HDR, tratamento de espaços de cores e capacidades de processamento em lote para lidar com vários arquivos simultaneamente.',
        seo_optimization_title: 'Otimização de qualidade',
        seo_optimization_text: 'Otimize arquivos HEIC para uso moderno com nossas ferramentas inteligentes que podem converter para formatos web-friendly preservando qualidade visual. Perfeito para compartilhar fotos iOS online, converter para compatibilidade e reduzir tamanhos de arquivo para melhor desempenho.',
        editor: {
          toggle_sidebar: 'Alternar barra lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar barra lateral',
          search_placeholder: 'Buscar arquivos...',
          files_header: 'Arquivos',
          add_files: '+ Adicionar',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'Trình Xem HEIC: Mở và Xem Ảnh HEIC iPhone Trực Tuyến Miễn Phí',
        meta_description: 'Không thể mở ảnh HEIC iPhone? Xem tệp HEIC ngay lập tức trong trình duyệt của bạn. Không cần phần mềm hoặc đăng ký. Nhanh, miễn phí và an toàn. Thử ngay!',
        meta_keywords: 'trình xem HEIC, trình xem HEIF, trình xem hình ảnh Apple, trình xem hình ảnh iOS, trình xem ảnh iPhone, trình xem hình ảnh HDR, xem hàng loạt',
        hero_title: 'Trình xem HEIC miễn phí',
        hero_subtitle: 'Xem hình ảnh Apple HEIC/HEIF với nén hiệu quả cao và hỗ trợ HDR',
        upload_title: 'Tải lên tệp HEIC',
        upload_description: 'Kéo và thả hình ảnh Apple HEIC/HEIF của bạn hoặc nhấp để duyệt. Hỗ trợ ảnh iOS, Live Photos và hình ảnh HDR tối đa 100MB tổng.',
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
          { title: 'Nén vượt trội', description: 'Xem hình ảnh HEIC với kích thước tệp nhỏ hơn 50% so với JPEG trong khi duy trì chất lượng hình ảnh cao hơn' },
          { title: 'Hỗ trợ HDR', description: 'Hỗ trợ đầy đủ cho hình ảnh HDR (High Dynamic Range) và dải màu rộng từ thiết bị iOS' },
          { title: 'Live Photos', description: 'Hỗ trợ Apple Live Photos và chuỗi ảnh chụp liên tiếp ở định dạng HEIC' }
        ],
        about_title: 'Về định dạng HEIC',
        about_intro: 'HEIC (High Efficiency Image Container) là định dạng hình ảnh hiện đại được phát triển bởi Apple, dựa trên tiêu chuẩn HEIF (High Efficiency Image Format). Nó cung cấp nén vượt trội so với JPEG trong khi duy trì chất lượng hình ảnh cao hơn, làm cho nó trở thành định dạng mặc định cho ảnh chụp trên thiết bị iOS từ iOS 11.',
        advantages_title: 'Ưu điểm chính',
        advantages: [
          'Kích thước tệp nhỏ hơn 50% – Nén tốt hơn JPEG',
          'Chất lượng hình ảnh vượt trội – Chất lượng cao hơn ở kích thước nhỏ hơn',
          'Hỗ trợ HDR – Chụp hình ảnh High Dynamic Range',
          'Dải màu rộng – Hỗ trợ không gian màu mở rộng',
          'Live Photos – Chuyển động và âm thanh trong định dạng hình ảnh',
          'Siêu dữ liệu nâng cao – Lưu trữ dữ liệu EXIF và hình ảnh phong phú'
        ],
        use_cases_title: 'Trường hợp sử dụng tốt nhất',
        use_cases: [
          'Nhiếp ảnh iPhone/iPad – Định dạng mặc định cho ảnh iOS',
          'Lưu trữ chất lượng cao – Nhiếp ảnh chuyên nghiệp',
          'Chụp hình ảnh HDR – Nhiếp ảnh High Dynamic Range',
          'Live Photos – Ảnh chuyển động từ thiết bị iOS',
          'Lưu trữ tiết kiệm không gian – Tệp nhỏ hơn để lưu trữ',
          'Nhiếp ảnh chuyên nghiệp – Định dạng hình ảnh chất lượng cao'
        ],
        specs_title: 'Thông số kỹ thuật',
        specs_header_label: 'Thông số',
        specs_header_value: 'Chi tiết',
        specs: [
          { label: 'Phần mở rộng tệp', value: '.heic, .heif' },
          { label: 'Loại MIME', value: 'image/heic, image/heif' },
          { label: 'Loại định dạng', value: 'Định dạng container dựa trên tiêu chuẩn HEIF' },
          { label: 'Nén', value: 'Nén dựa trên HEVC (H.265)' },
          { label: 'Độ sâu màu', value: '8, 10, 12, 16 bit mỗi kênh' },
          { label: 'Độ phân giải tối đa', value: '8192 × 8192 pixel' },
          { label: 'Độ trong suốt', value: 'Hỗ trợ kênh alpha' },
          { label: 'Hỗ trợ HDR', value: 'Hỗ trợ HDR đầy đủ và dải màu rộng' }
        ],
        seo_title: 'Tính năng trình xem và chuyển đổi HEIC',
        seo_intro: 'Trình xem HEIC chuyên nghiệp của chúng tôi cung cấp hỗ trợ toàn diện cho hình ảnh Apple HEIC/HEIF, bao gồm hiển thị HDR, xử lý nén vượt trội và khả năng xem trước hàng loạt. Cho dù bạn là người dùng iPhone, nhiếp ảnh gia hay người tạo nội dung, nền tảng của chúng tôi cung cấp các công cụ bạn cần để xử lý hình ảnh HEIC chuyên nghiệp.',
        seo_viewing_title: 'Tính năng xem nâng cao',
        seo_viewing_text: 'Xem hình ảnh HEIC với hỗ trợ HDR đầy đủ, hiển thị dải màu rộng và thông tin hình ảnh chi tiết. Trình xem của chúng tôi hỗ trợ tất cả các biến thể HEIC, bao gồm HEIC tiêu chuẩn, HEIF và Live Photos, đảm bảo biểu diễn chính xác hình ảnh thiết bị Apple của bạn.',
        seo_conversion_title: 'Công cụ chuyển đổi chuyên nghiệp',
        seo_conversion_text: 'Chuyển đổi tệp HEIC sang JPEG, PNG, WebP và các định dạng khác trong khi duy trì chất lượng tối ưu. Công cụ chuyển đổi của chúng tôi cung cấp bảo toàn HDR, xử lý không gian màu và khả năng xử lý hàng loạt để xử lý nhiều tệp đồng thời.',
        seo_optimization_title: 'Tối ưu hóa chất lượng',
        seo_optimization_text: 'Tối ưu hóa tệp HEIC cho sử dụng hiện đại với các công cụ thông minh của chúng tôi có thể chuyển đổi sang định dạng web-friendly trong khi bảo toàn chất lượng hình ảnh. Hoàn hảo để chia sẻ ảnh iOS trực tuyến, chuyển đổi để tương thích và giảm kích thước tệp để hiệu suất tốt hơn.',
        editor: {
          toggle_sidebar: 'Chuyển thanh bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng thanh bên',
          search_placeholder: 'Tìm tệp...',
          files_header: 'Tệp',
          add_files: '+ Thêm',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'HEIC Görüntüleyici: iPhone HEIC Fotoğraflarını Çevrimiçi Ücretsiz Açın ve Görüntüleyin',
        meta_description: 'Bir iPhone HEIC fotoğrafını açamıyor musunuz? HEIC dosyalarını tarayıcınızda anında görüntüleyin. Yazılım veya kayıt gerekmez. Hızlı, ücretsiz ve güvenli. Şimdi deneyin!',
        meta_keywords: 'HEIC görüntüleyici, HEIF görüntüleyici, Apple görüntü görüntüleyici, iOS görüntü görüntüleyici, iPhone foto görüntüleyici, HDR görüntü görüntüleyici, toplu görüntüleme',
        hero_title: 'Ücretsiz HEIC görüntüleyici',
        hero_subtitle: 'Yüksek verimli sıkıştırma ve HDR desteği ile Apple HEIC/HEIF görüntülerini görüntüleyin',
        upload_title: 'HEIC dosyalarını yükle',
        upload_description: 'Apple HEIC/HEIF görüntülerinizi sürükleyip bırakın veya göz atmak için tıklayın. iOS fotoğrafları, Live Photos ve HDR görüntülerini toplam 100MB\'a kadar destekler.',
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
          { title: 'Üstün sıkıştırma', description: 'Daha yüksek görüntü kalitesi korurken JPEG\'den %50 daha küçük dosya boyutlarıyla HEIC görüntülerini görüntüleyin' },
          { title: 'HDR desteği', description: 'iOS cihazlarından HDR (High Dynamic Range) görüntüleri ve geniş renk gamı için tam destek' },
          { title: 'Live Photos', description: 'HEIC formatında Apple Live Photos ve patlama çekim dizileri desteği' }
        ],
        about_title: 'HEIC formatı hakkında',
        about_intro: 'HEIC (High Efficiency Image Container), HEIF (High Efficiency Image Format) standardına dayalı Apple tarafından geliştirilmiş modern bir görüntü formatıdır. Daha yüksek görüntü kalitesi korurken JPEG\'e kıyasla üstün sıkıştırma sağlar ve iOS 11\'den beri iOS cihazlarında çekilen fotoğraflar için varsayılan format haline gelir.',
        advantages_title: 'Ana avantajlar',
        advantages: [
          '%50 daha küçük dosya boyutları – JPEG\'den daha iyi sıkıştırma',
          'Üstün görüntü kalitesi – Daha küçük boyutlarda daha yüksek kalite',
          'HDR desteği – High Dynamic Range görüntü yakalama',
          'Geniş renk gamı – Genişletilmiş renk alanları desteği',
          'Live Photos – Görüntü formatında hareket ve ses',
          'Gelişmiş meta veriler – Zengin EXIF ve görüntü verisi depolama'
        ],
        use_cases_title: 'En iyi kullanım durumları',
        use_cases: [
          'iPhone/iPad fotoğrafçılığı – iOS fotoğrafları için varsayılan format',
          'Yüksek kaliteli görüntü depolama – Profesyonel fotoğrafçılık',
          'HDR görüntü yakalama – High Dynamic Range fotoğrafçılık',
          'Live Photos – iOS cihazlarından hareketli fotoğraflar',
          'Alan verimli arşivleme – Depolama için daha küçük dosyalar',
          'Profesyonel fotoğrafçılık – Yüksek kaliteli görüntü formatı'
        ],
        specs_title: 'Teknik özellikler',
        specs_header_label: 'Özellik',
        specs_header_value: 'Detaylar',
        specs: [
          { label: 'Dosya uzantısı', value: '.heic, .heif' },
          { label: 'MIME türü', value: 'image/heic, image/heif' },
          { label: 'Format türü', value: 'HEIF standardına dayalı konteyner formatı' },
          { label: 'Sıkıştırma', value: 'HEVC (H.265) tabanlı sıkıştırma' },
          { label: 'Renk derinliği', value: 'Kanal başına 8, 10, 12, 16 bit' },
          { label: 'Maksimum çözünürlük', value: '8192 × 8192 piksel' },
          { label: 'Şeffaflık', value: 'Alfa kanal desteği' },
          { label: 'HDR desteği', value: 'Tam HDR ve geniş renk gamı desteği' }
        ],
        seo_title: 'HEIC görüntüleyici ve dönüştürücü özellikleri',
        seo_intro: 'Profesyonel HEIC görüntüleyicimiz, HDR görüntüleme, üstün sıkıştırma işleme ve toplu önizleme yetenekleri dahil olmak üzere Apple HEIC/HEIF görüntüleri için kapsamlı destek sağlar. İster iPhone kullanıcısı, fotoğrafçı veya içerik oluşturucu olun, platformumuz profesyonel HEIC görüntü işleme için ihtiyacınız olan araçları sunar.',
        seo_viewing_title: 'Gelişmiş görüntüleme özellikleri',
        seo_viewing_text: 'Tam HDR desteği, geniş renk gamı görüntüleme ve detaylı görüntü bilgileriyle HEIC görüntülerini görüntüleyin. Görüntüleyicimiz standart HEIC, HEIF ve Live Photos dahil olmak üzere tüm HEIC varyantlarını destekler ve Apple cihaz görüntülerinizin doğru temsilini sağlar.',
        seo_conversion_title: 'Profesyonel dönüştürme araçları',
        seo_conversion_text: 'Optimal kaliteyi korurken HEIC dosyalarını JPEG, PNG, WebP ve diğer formatlara dönüştürün. Dönüştürme motorumuz, birden fazla dosyayı aynı anda işlemek için HDR koruma, renk alanı işleme ve toplu işleme yetenekleri sunar.',
        seo_optimization_title: 'Kalite optimizasyonu',
        seo_optimization_text: 'Görsel kaliteyi korurken web dostu formatlara dönüştürebilen akıllı araçlarımızla HEIC dosyalarını modern kullanım için optimize edin. iOS fotoğraflarını çevrimiçi paylaşmak, uyumluluk için dönüştürmek ve daha iyi performans için dosya boyutlarını azaltmak için mükemmeldir.',
        editor: {
          toggle_sidebar: 'Kenar çubuğunu aç/kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar çubuğunu kapat',
          search_placeholder: 'Dosyaları ara...',
          files_header: 'Dosyalar',
          add_files: '+ Ekle',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'Просмотрщик HEIC: Открывайте и Просматривайте Фотографии HEIC с iPhone Онлайн Бесплатно',
        meta_description: 'Не можете открыть фотографию HEIC с iPhone? Просматривайте файлы HEIC мгновенно в браузере. Без программного обеспечения и регистрации. Быстро, бесплатно и безопасно. Попробуйте сейчас!',
        meta_keywords: 'просмотрщик HEIC, просмотрщик HEIF, просмотрщик изображений Apple, просмотрщик изображений iOS, просмотрщик фотографий iPhone, просмотрщик изображений HDR, пакетный просмотр',
        hero_title: 'Бесплатный просмотрщик HEIC',
        hero_subtitle: 'Просматривайте изображения Apple HEIC/HEIF с высокоэффективным сжатием и поддержкой HDR',
        upload_title: 'Загрузить файлы HEIC',
        upload_description: 'Перетащите изображения Apple HEIC/HEIF или нажмите для просмотра. Поддерживает фотографии iOS, Live Photos и изображения HDR до 100MB всего.',
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
          { title: 'Превосходное сжатие', description: 'Просматривайте изображения HEIC с файлами на 50% меньше, чем JPEG, сохраняя более высокое качество изображения' },
          { title: 'Поддержка HDR', description: 'Полная поддержка изображений HDR (High Dynamic Range) и широкого цветового охвата с устройств iOS' },
          { title: 'Live Photos', description: 'Поддержка Apple Live Photos и последовательностей серийной съемки в формате HEIC' }
        ],
        about_title: 'О формате HEIC',
        about_intro: 'HEIC (High Efficiency Image Container) - это современный формат изображения, разработанный Apple, основанный на стандарте HEIF (High Efficiency Image Format). Он обеспечивает превосходное сжатие по сравнению с JPEG, сохраняя более высокое качество изображения, что делает его форматом по умолчанию для фотографий, сделанных на устройствах iOS с iOS 11.',
        advantages_title: 'Ключевые преимущества',
        advantages: [
          'На 50% меньшие файлы – Лучшее сжатие, чем JPEG',
          'Превосходное качество изображения – Более высокое качество при меньших размерах',
          'Поддержка HDR – Захват изображений High Dynamic Range',
          'Широкий цветовой охват – Поддержка расширенных цветовых пространств',
          'Live Photos – Движение и звук в формате изображения',
          'Расширенные метаданные – Богатое хранение данных EXIF и изображения'
        ],
        use_cases_title: 'Лучшие случаи использования',
        use_cases: [
          'Фотография iPhone/iPad – Формат по умолчанию для фотографий iOS',
          'Хранение высокого качества – Профессиональная фотография',
          'Захват изображений HDR – Фотография High Dynamic Range',
          'Live Photos – Анимированные фотографии с устройств iOS',
          'Эффективное архивирование – Меньшие файлы для хранения',
          'Профессиональная фотография – Формат изображения высокого качества'
        ],
        specs_title: 'Технические характеристики',
        specs_header_label: 'Характеристика',
        specs_header_value: 'Детали',
        specs: [
          { label: 'Расширение файла', value: '.heic, .heif' },
          { label: 'Тип MIME', value: 'image/heic, image/heif' },
          { label: 'Тип формата', value: 'Формат контейнера на основе стандарта HEIF' },
          { label: 'Сжатие', value: 'Сжатие на основе HEVC (H.265)' },
          { label: 'Глубина цвета', value: '8, 10, 12, 16 бит на канал' },
          { label: 'Максимальное разрешение', value: '8192 × 8192 пикселей' },
          { label: 'Прозрачность', value: 'Поддержка альфа-канала' },
          { label: 'Поддержка HDR', value: 'Полная поддержка HDR и широкого цветового охвата' }
        ],
        seo_title: 'Функции просмотрщика и конвертера HEIC',
        seo_intro: 'Наш профессиональный просмотрщик HEIC обеспечивает комплексную поддержку изображений Apple HEIC/HEIF, включая отображение HDR, обработку превосходного сжатия и возможности пакетного предпросмотра. Будь вы пользователь iPhone, фотограф или создатель контента, наша платформа предлагает инструменты, необходимые для профессиональной обработки изображений HEIC.',
        seo_viewing_title: 'Расширенные функции просмотра',
        seo_viewing_text: 'Просматривайте изображения HEIC с полной поддержкой HDR, отображением широкого цветового охвата и подробной информацией об изображении. Наш просмотрщик поддерживает все варианты HEIC, включая стандартный HEIC, HEIF и Live Photos, обеспечивая точное представление ваших изображений устройств Apple.',
        seo_conversion_title: 'Профессиональные инструменты конвертации',
        seo_conversion_text: 'Конвертируйте файлы HEIC в JPEG, PNG, WebP и другие форматы, сохраняя оптимальное качество. Наш движок конвертации предлагает сохранение HDR, обработку цветовых пространств и возможности пакетной обработки для одновременной обработки нескольких файлов.',
        seo_optimization_title: 'Оптимизация качества',
        seo_optimization_text: 'Оптимизируйте файлы HEIC для современного использования с помощью наших интеллектуальных инструментов, которые могут конвертировать в веб-дружественные форматы, сохраняя визуальное качество. Идеально подходит для обмена фотографиями iOS в интернете, конвертации для совместимости и уменьшения размеров файлов для лучшей производительности.',
        editor: {
          toggle_sidebar: 'Переключить боковую панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть боковую панель',
          search_placeholder: 'Поиск файлов...',
          files_header: 'Файлы',
          add_files: '+ Добавить',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'عارض HEIC: افتح وشاهد صور HEIC من iPhone عبر الإنترنت مجاناً',
        meta_description: 'لا يمكنك فتح صورة HEIC من iPhone؟ اعرض ملفات HEIC فوراً في متصفحك. لا حاجة لبرامج أو تسجيل. سريع ومجاني وآمن. جربه الآن!',
        meta_keywords: 'عارض HEIC، عارض HEIF، عارض صور Apple، عارض صور iOS، عارض صور iPhone، عارض صور HDR، عرض مجمع',
        hero_title: 'عارض HEIC مجاني',
        hero_subtitle: 'اعرض صور Apple HEIC/HEIF مع ضغط عالي الكفاءة ودعم HDR',
        upload_title: 'رفع ملفات HEIC',
        upload_description: 'اسحب وأفلت صور Apple HEIC/HEIF أو انقر للتصفح. يدعم صور iOS وLive Photos وصور HDR حتى 100MB إجمالي.',
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
          { title: 'ضغط متفوق', description: 'اعرض صور HEIC بملفات أصغر بنسبة 50% من JPEG مع الحفاظ على جودة صورة أعلى' },
          { title: 'دعم HDR', description: 'دعم كامل لصور HDR (High Dynamic Range) ونطاق ألوان واسع من أجهزة iOS' },
          { title: 'Live Photos', description: 'دعم Apple Live Photos وتسلسلات الصور المتتالية بتنسيق HEIC' }
        ],
        about_title: 'حول تنسيق HEIC',
        about_intro: 'HEIC (High Efficiency Image Container) هو تنسيق صورة حديث طورته Apple، يعتمد على معيار HEIF (High Efficiency Image Format). يوفر ضغطًا متفوقًا مقارنة بـ JPEG مع الحفاظ على جودة صورة أعلى، مما يجعله التنسيق الافتراضي للصور الملتقطة على أجهزة iOS منذ iOS 11.',
        advantages_title: 'المزايا الرئيسية',
        advantages: [
          'ملفات أصغر بنسبة 50% – ضغط أفضل من JPEG',
          'جودة صورة متفوقة – جودة أعلى بأحجام أصغر',
          'دعم HDR – التقاط صور High Dynamic Range',
          'نطاق ألوان واسع – دعم مساحات ألوان موسعة',
          'Live Photos – الحركة والصوت بتنسيق الصورة',
          'بيانات وصفية متقدمة – تخزين غني لبيانات EXIF والصورة'
        ],
        use_cases_title: 'أفضل حالات الاستخدام',
        use_cases: [
          'تصوير iPhone/iPad – التنسيق الافتراضي لصور iOS',
          'تخزين عالي الجودة – التصوير الفوتوغرافي الاحترافي',
          'التقاط صور HDR – التصوير الفوتوغرافي High Dynamic Range',
          'Live Photos – صور متحركة من أجهزة iOS',
          'أرشفة فعالة للمساحة – ملفات أصغر للتخزين',
          'التصوير الفوتوغرافي الاحترافي – تنسيق صورة عالي الجودة'
        ],
        specs_title: 'المواصفات التقنية',
        specs_header_label: 'المواصفة',
        specs_header_value: 'التفاصيل',
        specs: [
          { label: 'امتداد الملف', value: '.heic, .heif' },
          { label: 'نوع MIME', value: 'image/heic, image/heif' },
          { label: 'نوع التنسيق', value: 'تنسيق حاوية يعتمد على معيار HEIF' },
          { label: 'الضغط', value: 'ضغط يعتمد على HEVC (H.265)' },
          { label: 'عمق اللون', value: '8، 10، 12، 16 بت لكل قناة' },
          { label: 'الحد الأقصى للدقة', value: '8192 × 8192 بكسل' },
          { label: 'الشفافية', value: 'دعم قناة ألفا' },
          { label: 'دعم HDR', value: 'دعم كامل لـ HDR ونطاق ألوان واسع' }
        ],
        seo_title: 'ميزات عارض ومحول HEIC',
        seo_intro: 'يوفر عارض HEIC الاحترافي لدينا دعمًا شاملاً لصور Apple HEIC/HEIF، بما في ذلك عرض HDR ومعالجة ضغط متفوقة وإمكانيات معاينة مجمعة. سواء كنت مستخدم iPhone أو مصورًا أو منشئ محتوى، تقدم منصتنا الأدوات التي تحتاجها لمعالجة صور HEIC الاحترافية.',
        seo_viewing_title: 'ميزات عرض متقدمة',
        seo_viewing_text: 'اعرض صور HEIC مع دعم HDR الكامل وعرض نطاق ألوان واسع ومعلومات صورة مفصلة. يدعم عارضنا جميع متغيرات HEIC، بما في ذلك HEIC القياسي وHEIF وLive Photos، مما يضمن تمثيلًا دقيقًا لصور أجهزة Apple الخاصة بك.',
        seo_conversion_title: 'أدوات تحويل احترافية',
        seo_conversion_text: 'حول ملفات HEIC إلى JPEG وPNG وWebP وتنسيقات أخرى مع الحفاظ على جودة مثلى. يوفر محرك التحويل لدينا الحفاظ على HDR ومعالجة مساحة الألوان وإمكانيات المعالجة المجمعة للتعامل مع ملفات متعددة في وقت واحد.',
        seo_optimization_title: 'تحسين الجودة',
        seo_optimization_text: 'حسّن ملفات HEIC للاستخدام الحديث باستخدام أدواتنا الذكية التي يمكنها التحويل إلى تنسيقات مناسبة للويب مع الحفاظ على الجودة البصرية. مثالي لمشاركة صور iOS عبر الإنترنت والتحويل للتوافق وتقليل أحجام الملفات لأداء أفضل.',
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          files_header: 'الملفات',
          add_files: '+ إضافة',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'โปรแกรมดู HEIC: เปิดและดูรูปภาพ HEIC iPhone ออนไลน์ฟรี',
        meta_description: 'เปิดรูปภาพ HEIC iPhone ไม่ได้? ดูไฟล์ HEIC ทันทีในเบราว์เซอร์ของคุณ ไม่ต้องใช้ซอฟต์แวร์หรือลงทะเบียน เร็ว ฟรี และปลอดภัย ลองเลย!',
        meta_keywords: 'โปรแกรมดู HEIC, โปรแกรมดู HEIF, โปรแกรมดูรูปภาพ Apple, โปรแกรมดูรูปภาพ iOS, โปรแกรมดูรูปภาพ iPhone, โปรแกรมดูรูปภาพ HDR, การดูแบบกลุ่ม',
        hero_title: 'โปรแกรมดู HEIC ฟรี',
        hero_subtitle: 'ดูรูปภาพ Apple HEIC/HEIF ด้วยการบีบอัดประสิทธิภาพสูงและการรองรับ HDR',
        upload_title: 'อัปโหลดไฟล์ HEIC',
        upload_description: 'ลากและวางรูปภาพ Apple HEIC/HEIF ของคุณหรือคลิกเพื่อเรียกดู รองรับรูปภาพ iOS, Live Photos และรูปภาพ HDR สูงสุด 100MB รวม',
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
          { title: 'การบีบอัดที่เหนือกว่า', description: 'ดูรูปภาพ HEIC ด้วยไฟล์ที่เล็กกว่า JPEG 50% ในขณะที่รักษาคุณภาพรูปภาพที่สูงกว่า' },
          { title: 'รองรับ HDR', description: 'รองรับเต็มรูปแบบสำหรับรูปภาพ HDR (High Dynamic Range) และช่วงสีกว้างจากอุปกรณ์ iOS' },
          { title: 'Live Photos', description: 'รองรับ Apple Live Photos และลำดับการถ่ายภาพต่อเนื่องในรูปแบบ HEIC' }
        ],
        about_title: 'เกี่ยวกับรูปแบบ HEIC',
        about_intro: 'HEIC (High Efficiency Image Container) เป็นรูปแบบรูปภาพสมัยใหม่ที่พัฒนาโดย Apple โดยอิงตามมาตรฐาน HEIF (High Efficiency Image Format) ให้การบีบอัดที่เหนือกว่าเมื่อเทียบกับ JPEG ในขณะที่รักษาคุณภาพรูปภาพที่สูงกว่า ทำให้เป็นรูปแบบเริ่มต้นสำหรับรูปภาพที่ถ่ายบนอุปกรณ์ iOS ตั้งแต่ iOS 11',
        advantages_title: 'ข้อดีหลัก',
        advantages: [
          'ไฟล์เล็กลง 50% – การบีบอัดดีกว่า JPEG',
          'คุณภาพรูปภาพที่เหนือกว่า – คุณภาพสูงกว่าที่ขนาดเล็กลง',
          'รองรับ HDR – การจับภาพ High Dynamic Range',
          'ช่วงสีกว้าง – รองรับพื้นที่สีขยาย',
          'Live Photos – การเคลื่อนไหวและเสียงในรูปแบบรูปภาพ',
          'ข้อมูลเมตาดาต้าขั้นสูง – การจัดเก็บข้อมูล EXIF และรูปภาพที่อุดมสมบูรณ์'
        ],
        use_cases_title: 'กรณีการใช้งานที่ดีที่สุด',
        use_cases: [
          'การถ่ายภาพ iPhone/iPad – รูปแบบเริ่มต้นสำหรับรูปภาพ iOS',
          'การจัดเก็บคุณภาพสูง – การถ่ายภาพมืออาชีพ',
          'การจับภาพ HDR – การถ่ายภาพ High Dynamic Range',
          'Live Photos – รูปภาพเคลื่อนไหวจากอุปกรณ์ iOS',
          'การเก็บถาวรประหยัดพื้นที่ – ไฟล์เล็กลงสำหรับการจัดเก็บ',
          'การถ่ายภาพมืออาชีพ – รูปแบบรูปภาพคุณภาพสูง'
        ],
        specs_title: 'ข้อมูลจำเพาะทางเทคนิค',
        specs_header_label: 'ข้อมูลจำเพาะ',
        specs_header_value: 'รายละเอียด',
        specs: [
          { label: 'นามสกุลไฟล์', value: '.heic, .heif' },
          { label: 'ประเภท MIME', value: 'image/heic, image/heif' },
          { label: 'ประเภทรูปแบบ', value: 'รูปแบบคอนเทนเนอร์ตามมาตรฐาน HEIF' },
          { label: 'การบีบอัด', value: 'การบีบอัดตาม HEVC (H.265)' },
          { label: 'ความลึกสี', value: '8, 10, 12, 16 บิตต่อช่อง' },
          { label: 'ความละเอียดสูงสุด', value: '8192 × 8192 พิกเซล' },
          { label: 'ความโปร่งใส', value: 'รองรับช่องอัลฟา' },
          { label: 'รองรับ HDR', value: 'รองรับ HDR และช่วงสีกว้างเต็มรูปแบบ' }
        ],
        seo_title: 'คุณสมบัติโปรแกรมดูและแปลง HEIC',
        seo_intro: 'โปรแกรมดู HEIC มืออาชีพของเรามีการรองรับที่ครอบคลุมสำหรับรูปภาพ Apple HEIC/HEIF รวมถึงการแสดงผล HDR การจัดการการบีบอัดที่เหนือกว่า และความสามารถในการแสดงตัวอย่างแบบกลุ่ม ไม่ว่าคุณจะเป็นผู้ใช้ iPhone ช่างภาพ หรือผู้สร้างเนื้อหา แพลตฟอร์มของเรามีเครื่องมือที่คุณต้องการสำหรับการจัดการรูปภาพ HEIC มืออาชีพ',
        seo_viewing_title: 'คุณสมบัติการดูขั้นสูง',
        seo_viewing_text: 'ดูรูปภาพ HEIC ด้วยการรองรับ HDR เต็มรูปแบบ การแสดงผลช่วงสีกว้าง และข้อมูลรูปภาพโดยละเอียด โปรแกรมดูของเรารองรับรูปแบบ HEIC ทั้งหมด รวมถึง HEIC มาตรฐาน, HEIF และ Live Photos เพื่อให้แน่ใจว่าการแสดงผลที่ถูกต้องของรูปภาพอุปกรณ์ Apple ของคุณ',
        seo_conversion_title: 'เครื่องมือแปลงมืออาชีพ',
        seo_conversion_text: 'แปลงไฟล์ HEIC เป็น JPEG, PNG, WebP และรูปแบบอื่น ๆ ในขณะที่รักษาคุณภาพที่เหมาะสม เครื่องมือแปลงของเรามีการรักษา HDR การจัดการพื้นที่สี และความสามารถในการประมวลผลแบบกลุ่มสำหรับการจัดการไฟล์หลายไฟล์พร้อมกัน',
        seo_optimization_title: 'การปรับปรุงคุณภาพ',
        seo_optimization_text: 'ปรับปรุงไฟล์ HEIC สำหรับการใช้งานสมัยใหม่ด้วยเครื่องมืออัจฉริยะของเราที่สามารถแปลงเป็นรูปแบบที่เหมาะกับเว็บในขณะที่รักษาคุณภาพภาพ เหมาะสำหรับการแชร์รูปภาพ iOS ออนไลน์ การแปลงเพื่อความเข้ากันได้ และการลดขนาดไฟล์เพื่อประสิทธิภาพที่ดีขึ้น',
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          files_header: 'ไฟล์',
          add_files: '+ เพิ่ม',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'HEICビューア：iPhone HEIC写真をオンラインで無料で開いて表示',
        meta_description: 'iPhone HEIC写真を開けない？HEICファイルをブラウザで即座に表示。ソフトウェアやサインアップ不要。高速、無料、安全。今すぐお試しください！',
        meta_keywords: 'HEICビューア、HEIFビューア、Apple画像ビューア、iOS画像ビューア、iPhone写真ビューア、HDR画像ビューア、一括表示',
        hero_title: '無料HEICビューア',
        hero_subtitle: '高効率圧縮とHDRサポートでApple HEIC/HEIF画像を表示',
        upload_title: 'HEICファイルをアップロード',
        upload_description: 'Apple HEIC/HEIF画像をドラッグ＆ドロップするか、クリックして参照。iOS写真、Live Photos、HDR画像を最大100MBまでサポート。',
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
          { title: '優れた圧縮', description: 'より高い画質を維持しながら、JPEGより50%小さいファイルサイズでHEIC画像を表示' },
          { title: 'HDRサポート', description: 'iOSデバイスからのHDR（High Dynamic Range）画像と広色域の完全サポート' },
          { title: 'Live Photos', description: 'HEIC形式でのApple Live Photosとバースト撮影シーケンスのサポート' }
        ],
        about_title: 'HEIC形式について',
        about_intro: 'HEIC（High Efficiency Image Container）は、HEIF（High Efficiency Image Format）標準に基づいてAppleが開発した最新の画像形式です。より高い画質を維持しながらJPEGと比較して優れた圧縮を提供し、iOS 11以降のiOSデバイスで撮影された写真のデフォルト形式となっています。',
        advantages_title: '主な利点',
        advantages: [
          '50%小さなファイルサイズ – JPEGより優れた圧縮',
          '優れた画質 – より小さなサイズでより高い品質',
          'HDRサポート – High Dynamic Range画像キャプチャ',
          '広色域 – 拡張色空間のサポート',
          'Live Photos – 画像形式での動きと音',
          '高度なメタデータ – 豊富なEXIFと画像データストレージ'
        ],
        use_cases_title: '最適な使用例',
        use_cases: [
          'iPhone/iPad写真 – iOS写真のデフォルト形式',
          '高品質画像ストレージ – プロフェッショナル写真',
          'HDR画像キャプチャ – High Dynamic Range写真',
          'Live Photos – iOSデバイスからの動画写真',
          'スペース効率的なアーカイブ – ストレージ用の小さなファイル',
          'プロフェッショナル写真 – 高品質画像形式'
        ],
        specs_title: '技術仕様',
        specs_header_label: '仕様',
        specs_header_value: '詳細',
        specs: [
          { label: 'ファイル拡張子', value: '.heic, .heif' },
          { label: 'MIMEタイプ', value: 'image/heic, image/heif' },
          { label: '形式タイプ', value: 'HEIF標準に基づくコンテナ形式' },
          { label: '圧縮', value: 'HEVC（H.265）ベースの圧縮' },
          { label: '色深度', value: 'チャネルあたり8、10、12、16ビット' },
          { label: '最大解像度', value: '8192 × 8192ピクセル' },
          { label: '透明度', value: 'アルファチャネルサポート' },
          { label: 'HDRサポート', value: '完全なHDRと広色域サポート' }
        ],
        seo_title: 'HEICビューアとコンバーター機能',
        seo_intro: '当社のプロフェッショナルHEICビューアは、HDR表示、優れた圧縮処理、一括プレビュー機能を含む、Apple HEIC/HEIF画像の包括的なサポートを提供します。iPhoneユーザー、写真家、コンテンツ作成者を問わず、当社のプラットフォームはプロフェッショナルなHEIC画像処理に必要なツールを提供します。',
        seo_viewing_title: '高度な表示機能',
        seo_viewing_text: '完全なHDRサポート、広色域表示、詳細な画像情報でHEIC画像を表示。当社のビューアは、標準HEIC、HEIF、Live Photosを含むすべてのHEICバリアントをサポートし、Appleデバイス画像の正確な表現を保証します。',
        seo_conversion_title: 'プロフェッショナル変換ツール',
        seo_conversion_text: '最適な品質を維持しながら、HEICファイルをJPEG、PNG、WebP、その他の形式に変換。当社の変換エンジンは、HDR保持、色空間処理、複数ファイルの同時処理のための一括処理機能を提供します。',
        seo_optimization_title: '品質最適化',
        seo_optimization_text: '視覚品質を維持しながらWebフレンドリーな形式に変換できる当社のスマートツールで、HEICファイルを最新の使用に最適化。iOS写真のオンライン共有、互換性のための変換、パフォーマンス向上のためのファイルサイズ削減に最適です。',
        editor: {
          toggle_sidebar: 'サイドバーの切り替え',
          close: '閉じる（Esc）',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          files_header: 'ファイル',
          add_files: '+ 追加',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'HEIC查看器：在线免费打开和查看iPhone HEIC照片',
        meta_description: '无法打开iPhone HEIC照片？在浏览器中即时查看HEIC文件。无需软件或注册。快速、免费、安全。立即试用！',
        meta_keywords: 'HEIC查看器，HEIF查看器，Apple图像查看器，iOS图像查看器，iPhone照片查看器，HDR图像查看器，批量查看',
        hero_title: '免费HEIC查看器',
        hero_subtitle: '以高效压缩和HDR支持查看Apple HEIC/HEIF图像',
        upload_title: '上传HEIC文件',
        upload_description: '拖放您的Apple HEIC/HEIF图像或点击浏览。支持iOS照片、Live Photos和HDR图像，总计最多100MB。',
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
          { title: '卓越压缩', description: '以比JPEG小50%的文件大小查看HEIC图像，同时保持更高的图像质量' },
          { title: 'HDR支持', description: '完全支持来自iOS设备的HDR（高动态范围）图像和宽色域' },
          { title: 'Live Photos', description: '支持HEIC格式的Apple Live Photos和连拍序列' }
        ],
        about_title: '关于HEIC格式',
        about_intro: 'HEIC（高效图像容器）是Apple开发的现代图像格式，基于HEIF（高效图像格式）标准。它在保持更高图像质量的同时提供比JPEG更卓越的压缩，使其成为自iOS 11以来在iOS设备上拍摄的照片的默认格式。',
        advantages_title: '主要优势',
        advantages: [
          '文件大小减少50% – 比JPEG更好的压缩',
          '卓越的图像质量 – 在更小的尺寸下更高的质量',
          'HDR支持 – 高动态范围图像捕获',
          '宽色域 – 支持扩展色彩空间',
          'Live Photos – 图像格式中的运动和声音',
          '高级元数据 – 丰富的EXIF和图像数据存储'
        ],
        use_cases_title: '最佳用例',
        use_cases: [
          'iPhone/iPad摄影 – iOS照片的默认格式',
          '高质量图像存储 – 专业摄影',
          'HDR图像捕获 – 高动态范围摄影',
          'Live Photos – 来自iOS设备的动态照片',
          '节省空间的归档 – 用于存储的更小文件',
          '专业摄影 – 高质量图像格式'
        ],
        specs_title: '技术规格',
        specs_header_label: '规格',
        specs_header_value: '详情',
        specs: [
          { label: '文件扩展名', value: '.heic, .heif' },
          { label: 'MIME类型', value: 'image/heic, image/heif' },
          { label: '格式类型', value: '基于HEIF标准的容器格式' },
          { label: '压缩', value: '基于HEVC（H.265）的压缩' },
          { label: '颜色深度', value: '每通道8、10、12、16位' },
          { label: '最大分辨率', value: '8192 × 8192像素' },
          { label: '透明度', value: 'Alpha通道支持' },
          { label: 'HDR支持', value: '完整的HDR和宽色域支持' }
        ],
        seo_title: 'HEIC查看器和转换器功能',
        seo_intro: '我们的专业HEIC查看器为Apple HEIC/HEIF图像提供全面支持，包括HDR显示、卓越压缩处理和批量预览功能。无论您是iPhone用户、摄影师还是内容创作者，我们的平台都提供专业HEIC图像处理所需的工具。',
        seo_viewing_title: '高级查看功能',
        seo_viewing_text: '以完整的HDR支持、宽色域显示和详细的图像信息查看HEIC图像。我们的查看器支持所有HEIC变体，包括标准HEIC、HEIF和Live Photos，确保准确表示您的Apple设备图像。',
        seo_conversion_title: '专业转换工具',
        seo_conversion_text: '在保持最佳质量的同时，将HEIC文件转换为JPEG、PNG、WebP和其他格式。我们的转换引擎提供HDR保留、色彩空间处理和批量处理功能，可同时处理多个文件。',
        seo_optimization_title: '质量优化',
        seo_optimization_text: '使用我们的智能工具优化HEIC文件以供现代使用，这些工具可以在保持视觉质量的同时转换为网络友好格式。非常适合在线共享iOS照片、为兼容性转换以及减小文件大小以提高性能。',
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭（Esc）',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          files_header: '文件',
          add_files: '+ 添加',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'Penampil HEIC: Buka & Lihat Foto HEIC iPhone Online Gratis',
        meta_description: 'Tidak bisa membuka foto HEIC iPhone? Lihat file HEIC secara instan di browser Anda. Tidak perlu software atau pendaftaran. Cepat, gratis, dan aman. Coba sekarang!',
        meta_keywords: 'penampil HEIC, penampil HEIF, penampil gambar Apple, penampil gambar iOS, penampil foto iPhone, penampil gambar HDR, tampilan batch',
        hero_title: 'Penampil HEIC Gratis',
        hero_subtitle: 'Lihat gambar Apple HEIC/HEIF dengan kompresi efisiensi tinggi dan dukungan HDR',
        upload_title: 'Unggah File HEIC',
        upload_description: 'Seret dan lepas gambar Apple HEIC/HEIF Anda atau klik untuk menjelajah. Mendukung foto iOS, Live Photos dan gambar HDR hingga total 100MB.',
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
          { title: 'Kompresi Superior', description: 'Lihat gambar HEIC dengan ukuran file 50% lebih kecil dari JPEG sambil mempertahankan kualitas gambar yang lebih tinggi' },
          { title: 'Dukungan HDR', description: 'Dukungan penuh untuk gambar HDR (High Dynamic Range) dan rentang warna lebar dari perangkat iOS' },
          { title: 'Live Photos', description: 'Dukungan untuk Apple Live Photos dan urutan foto burst dalam format HEIC' }
        ],
        about_title: 'Tentang Format HEIC',
        about_intro: 'HEIC (High Efficiency Image Container) adalah format gambar modern yang dikembangkan oleh Apple, berdasarkan standar HEIF (High Efficiency Image Format). Ini memberikan kompresi superior dibandingkan dengan JPEG sambil mempertahankan kualitas gambar yang lebih tinggi, menjadikannya format default untuk foto yang diambil pada perangkat iOS sejak iOS 11.',
        advantages_title: 'Keuntungan Utama',
        advantages: [
          'Ukuran file 50% lebih kecil – Kompresi lebih baik dari JPEG',
          'Kualitas gambar superior – Kualitas lebih tinggi pada ukuran lebih kecil',
          'Dukungan HDR – Pengambilan gambar High Dynamic Range',
          'Rentang warna lebar – Dukungan untuk ruang warna yang diperluas',
          'Live Photos – Gerakan dan suara dalam format gambar',
          'Metadata lanjutan – Penyimpanan data EXIF dan gambar yang kaya'
        ],
        use_cases_title: 'Kasus Penggunaan Terbaik',
        use_cases: [
          'Fotografi iPhone/iPad – Format default untuk foto iOS',
          'Penyimpanan kualitas tinggi – Fotografi profesional',
          'Pengambilan gambar HDR – Fotografi High Dynamic Range',
          'Live Photos – Foto bergerak dari perangkat iOS',
          'Arsip efisien ruang – File lebih kecil untuk penyimpanan',
          'Fotografi profesional – Format gambar berkualitas tinggi'
        ],
        specs_title: 'Spesifikasi Teknis',
        specs_header_label: 'Spesifikasi',
        specs_header_value: 'Detail',
        specs: [
          { label: 'Ekstensi File', value: '.heic, .heif' },
          { label: 'Tipe MIME', value: 'image/heic, image/heif' },
          { label: 'Tipe Format', value: 'Format kontainer berdasarkan standar HEIF' },
          { label: 'Kompresi', value: 'Kompresi berbasis HEVC (H.265)' },
          { label: 'Kedalaman Warna', value: '8, 10, 12, 16 bit per saluran' },
          { label: 'Resolusi Maksimum', value: '8192 × 8192 piksel' },
          { label: 'Transparansi', value: 'Dukungan saluran alpha' },
          { label: 'Dukungan HDR', value: 'Dukungan HDR penuh dan rentang warna lebar' }
        ],
        seo_title: 'Fitur Penampil dan Konverter HEIC',
        seo_intro: 'Penampil HEIC profesional kami menyediakan dukungan komprehensif untuk gambar Apple HEIC/HEIF, termasuk tampilan HDR, penanganan kompresi superior, dan kemampuan pratinjau batch. Baik Anda pengguna iPhone, fotografer, atau pembuat konten, platform kami menawarkan alat yang Anda butuhkan untuk penanganan gambar HEIC profesional.',
        seo_viewing_title: 'Fitur Tampilan Lanjutan',
        seo_viewing_text: 'Lihat gambar HEIC dengan dukungan HDR penuh, tampilan rentang warna lebar, dan informasi gambar terperinci. Penampil kami mendukung semua varian HEIC, termasuk HEIC standar, HEIF, dan Live Photos, memastikan representasi akurat dari gambar perangkat Apple Anda.',
        seo_conversion_title: 'Alat Konversi Profesional',
        seo_conversion_text: 'Konversi file HEIC ke JPEG, PNG, WebP, dan format lain sambil mempertahankan kualitas optimal. Mesin konversi kami menawarkan preservasi HDR, penanganan ruang warna, dan kemampuan pemrosesan batch untuk menangani beberapa file secara bersamaan.',
        seo_optimization_title: 'Optimasi Kualitas',
        seo_optimization_text: 'Optimalkan file HEIC untuk penggunaan modern dengan alat pintar kami yang dapat mengonversi ke format ramah web sambil mempertahankan kualitas visual. Sempurna untuk berbagi foto iOS online, mengonversi untuk kompatibilitas, dan mengurangi ukuran file untuk kinerja yang lebih baik.',
        editor: {
          toggle_sidebar: 'Alihkan Sidebar',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup Sidebar',
          search_placeholder: 'Cari file...',
          files_header: 'File',
          add_files: '+ Tambah',
          format_badge: 'HEIC',
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
      heic: {
        meta_title: 'HEIC-visare: Öppna & Visa iPhone HEIC Foton Online Gratis',
        meta_description: 'Kan inte öppna ett iPhone HEIC foto? Visa HEIC-filer direkt i din webbläsare. Ingen programvara eller registrering krävs. Snabb, gratis och säker. Prova nu!',
        meta_keywords: 'HEIC-visare, HEIF-visare, Apple bildvisare, iOS bildvisare, iPhone fotovisare, HDR bildvisare, batchvisning',
        hero_title: 'Gratis HEIC-visare',
        hero_subtitle: 'Visa Apple HEIC/HEIF-bilder med högeffektiv komprimering och HDR-stöd',
        upload_title: 'Ladda upp HEIC-filer',
        upload_description: 'Dra och släpp dina Apple HEIC/HEIF-bilder eller klicka för att bläddra. Stöder iOS-foton, Live Photos och HDR-bilder upp till 100MB totalt.',
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
          { title: 'Överlägsen komprimering', description: 'Visa HEIC-bilder med 50% mindre filstorlekar än JPEG samtidigt som högre bildkvalitet bibehålls' },
          { title: 'HDR-stöd', description: 'Fullt stöd för HDR (High Dynamic Range) bilder och bredt färgomfång från iOS-enheter' },
          { title: 'Live Photos', description: 'Stöd för Apple Live Photos och burst-fotosekvenser i HEIC-format' }
        ],
        about_title: 'Om HEIC-formatet',
        about_intro: 'HEIC (High Efficiency Image Container) är ett modernt bildformat utvecklat av Apple, baserat på HEIF (High Efficiency Image Format) standarden. Det ger överlägsen komprimering jämfört med JPEG samtidigt som högre bildkvalitet bibehålls, vilket gör det till standardformatet för foton tagna på iOS-enheter sedan iOS 11.',
        advantages_title: 'Nyckel fördelar',
        advantages: [
          '50% mindre filstorlekar – Bättre komprimering än JPEG',
          'Överlägsen bildkvalitet – Högre kvalitet vid mindre storlekar',
          'HDR-stöd – High Dynamic Range bildfångst',
          'Bredt färgomfång – Stöd för utökade färgrymder',
          'Live Photos – Rörelse och ljud i bildformat',
          'Avancerade metadata – Rik EXIF- och bilddata lagring'
        ],
        use_cases_title: 'Bästa användningsfall',
        use_cases: [
          'iPhone/iPad fotografering – Standardformat för iOS-foton',
          'Högkvalitativ bildlagring – Professionell fotografering',
          'HDR bildfångst – High Dynamic Range fotografering',
          'Live Photos – Rörelsefoton från iOS-enheter',
          'Utrymmeseffektiv arkivering – Mindre filer för lagring',
          'Professionell fotografering – Högkvalitativt bildformat'
        ],
        specs_title: 'Tekniska specifikationer',
        specs_header_label: 'Specifikation',
        specs_header_value: 'Detaljer',
        specs: [
          { label: 'Filändelse', value: '.heic, .heif' },
          { label: 'MIME-typ', value: 'image/heic, image/heif' },
          { label: 'Formattyp', value: 'Containerformat baserat på HEIF-standarden' },
          { label: 'Komprimering', value: 'HEVC (H.265) baserad komprimering' },
          { label: 'Färgdjup', value: '8, 10, 12, 16 bitar per kanal' },
          { label: 'Maximal upplösning', value: '8192 × 8192 pixlar' },
          { label: 'Transparens', value: 'Alfakanalstöd' },
          { label: 'HDR-stöd', value: 'Fullt HDR- och bredt färgomfångsstöd' }
        ],
        seo_title: 'HEIC-visare och konverteringsfunktioner',
        seo_intro: 'Vår professionella HEIC-visare ger omfattande stöd för Apple HEIC/HEIF-bilder, inklusive HDR-visning, överlägsen komprimeringshantering och batch-förhandsgranskningsmöjligheter. Oavsett om du är iPhone-användare, fotograf eller innehållsskapare, erbjuder vår plattform verktygen du behöver för professionell HEIC-bildhantering.',
        seo_viewing_title: 'Avancerade visningsfunktioner',
        seo_viewing_text: 'Visa HEIC-bilder med fullt HDR-stöd, bredt färgomfångsvisning och detaljerad bildinformation. Vår visare stöder alla HEIC-varianter, inklusive standard HEIC, HEIF och Live Photos, vilket säkerställer korrekt representation av dina Apple-enhetsbilder.',
        seo_conversion_title: 'Professionella konverteringsverktyg',
        seo_conversion_text: 'Konvertera HEIC-filer till JPEG, PNG, WebP och andra format samtidigt som optimal kvalitet bibehålls. Vår konverteringsmotor erbjuder HDR-bevarande, färgrymds hantering och batch-bearbetningsmöjligheter för att hantera flera filer samtidigt.',
        seo_optimization_title: 'Kvalitetsoptimering',
        seo_optimization_text: 'Optimera HEIC-filer för modern användning med våra smarta verktyg som kan konvertera till webbvänliga format samtidigt som visuell kvalitet bevaras. Perfekt för att dela iOS-foton online, konvertera för kompatibilitet och minska filstorlekar för bättre prestanda.',
        editor: {
          toggle_sidebar: 'Växla sidopanel',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng sidopanel',
          search_placeholder: 'Sök filer...',
          files_header: 'Filer',
          add_files: '+ Lägg till',
          format_badge: 'HEIC',
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

