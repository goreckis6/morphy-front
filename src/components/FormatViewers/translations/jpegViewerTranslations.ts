type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type JPEGViewerTranslations = {
  viewers: {
    jpeg: {
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
      quick_stats: {
        universal_format: string;
        fast_processing: string;
        high_quality: string;
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
    };
  };
};

const resources: Record<string, JPEGViewerTranslations> = {
  en: {
    viewers: {
      jpeg: {
        meta_title: 'FREE JPG Viewer & Photo File Opener (Online)',
        meta_description: 'FREE JPG Viewer: Open and view JPG/JPEG image files instantly in your browser. No installation or registration is required. Simple, fast, and secure.',
        meta_keywords: 'JPEG viewer, JPG viewer, image viewer, JPEG converter, JPG to PNG, view JPEG online, EXIF viewer, photo viewer',
        hero_title: 'Free JPG Viewer',
        hero_subtitle: 'View and analyze JPEG images with professional tools',
        upload_title: 'Upload JPEG Files',
        upload_description: 'Drag and drop your JPEG images or click to browse. Supports .jpg, .jpeg, and .jpe files up to 100MB each.',
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
          universal_format: '✓ Universal Format',
          fast_processing: '⚡ Fast Processing',
          high_quality: '🎨 High Quality'
        },
        features: [
          { title: 'Professional Quality', description: 'View JPEG images with full quality preservation, zoom capabilities, and detailed EXIF metadata inspection' },
          { title: 'Fast Processing', description: 'Lightning-fast JPEG processing with instant previews and optimized rendering for large batches' },
          { title: 'Format Conversion', description: 'Convert JPEG to PNG, WebP, PDF and other formats with advanced quality control settings' }
        ],
        about_title: 'About JPEG Format',
        about_intro: 'JPEG (Joint Photographic Experts Group) is one of the most widely used image compression formats in the world. Developed in 1992, JPEG uses lossy compression to significantly reduce file sizes while maintaining acceptable image quality, making it perfect for digital photography, web images, and storage-conscious applications.',
        advantages_title: 'Key Advantages',
        advantages: [
          'Small file sizes – Excellent compression ratios',
          'Universal support – Works on all devices and browsers',
          'Adjustable quality – Balance between size and quality',
          'Fast processing – Quick to encode and decode',
          'Wide compatibility – Supported by all image software',
          'EXIF metadata – Stores camera settings and information'
        ],
        use_cases_title: 'Best Use Cases',
        use_cases: [
          'Digital photography – Perfect for photos with many colors',
          'Web images – Ideal for website backgrounds and photos',
          'Social media – Standard format for sharing images',
          'Email attachments – Small sizes for easy sharing',
          'Print media – High-quality printing when needed',
          'Mobile photography – Default format for most cameras'
        ],
        specs_title: 'JPEG Technical Specifications',
        specs_header_label: 'Specification',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extensions', value: '.jpg, .jpeg, .jpe' },
          { label: 'MIME Type', value: 'image/jpeg' },
          { label: 'Compression', value: 'Lossy compression using DCT (Discrete Cosine Transform)' },
          { label: 'Color Support', value: '24-bit RGB, 8-bit Grayscale, CMYK' },
          { label: 'Maximum Resolution', value: '6,500 × 6,500 pixels' },
          { label: 'Transparency', value: 'Not supported' },
          { label: 'Animation', value: 'Not supported' },
          { label: 'Metadata', value: 'EXIF, IPTC, XMP supported' }
        ],
        seo_title: 'JPEG Viewer and Converter Features',
        seo_intro: 'Our professional JPEG viewer and converter provides comprehensive support for all JPEG variants including standard JPEG (.jpg), JPEG 2000 (.jp2), and progressive JPEG files. Whether you\'re a photographer, web developer, or graphic designer, our platform offers the tools you need for professional JPEG processing.',
        seo_viewing_title: 'Advanced Viewing Features',
        seo_viewing_text: 'View JPEG images with pixel-perfect accuracy, zoom capabilities up to 500%, and detailed metadata display including EXIF data from digital cameras. Our viewer supports all JPEG color spaces including RGB, CMYK, and grayscale, ensuring accurate color representation across different devices.',
        seo_conversion_title: 'Professional Conversion Tools',
        seo_conversion_text: 'Convert JPEG files to PNG, WebP, AVIF, TIFF, and other formats while maintaining optimal quality. Our conversion engine offers adjustable quality settings, resize options, and batch processing capabilities for handling multiple files simultaneously.',
        seo_optimization_title: 'Quality Optimization',
        seo_optimization_text: 'Optimize JPEG files for web use with our smart compression algorithms that reduce file sizes by up to 80% while preserving visual quality. Perfect for website optimization, email attachments, and social media sharing where file size matters.',
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          files_header: 'Files',
          add_files: '+ Add',
          format_badge: 'JPG',
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
      jpeg: {
        meta_title: 'DARMOWY Podgląd JPG i Otwieracz Plików Zdjęciowych (Online)',
        meta_description: 'DARMOWY Podgląd JPG: Otwieraj i przeglądaj pliki obrazów JPG/JPEG natychmiast w przeglądarce. Nie wymaga instalacji ani rejestracji. Prosty, szybki i bezpieczny.',
        meta_keywords: 'podgląd jpg, przeglądarka jpg, podgląd jpeg online, podgląd obrazu, przeglądarka zdjęć, exif online',
        hero_title: 'Darmowy Podgląd JPG',
        hero_subtitle: 'Analizuj obrazy JPEG z profesjonalnymi narzędziami',
        upload_title: 'Prześlij pliki JPEG',
        upload_description: 'Przeciągnij i upuść obrazy JPEG lub kliknij, aby je wybrać. Obsługuje pliki .jpg, .jpeg i .jpe do 100 MB.',
        upload: {
          drag_drop_text: 'Przeciągnij i Upuść Pliki Tutaj',
          click_browse_text: 'lub kliknij przycisk poniżej, aby przeglądać',
          choose_files_button: 'Wybierz Pliki',
          max_files_info: 'Maks. {maxFiles} plików • Do {maxSize} Łącznie'
        },
        buttons: {
          view_files: 'Wyświetl Pliki',
          back: 'Powrót do wszystkich podglądów'
        },
        quick_stats: {
          universal_format: '✓ Uniwersalny Format',
          fast_processing: '⚡ Szybkie Przetwarzanie',
          high_quality: '🎨 Wysoka Jakość'
        },
        features: [
          { title: 'Profesjonalna jakość', description: 'Wyświetlaj obrazy JPEG z pełnym zachowaniem jakości, powiększaniem i szczegółowym podglądem metadanych EXIF' },
          { title: 'Szybkie przetwarzanie', description: 'Błyskawiczne przetwarzanie JPEG z natychmiastowym podglądem i zoptymalizowanym renderowaniem dla dużych serii' },
          { title: 'Konwersja formatów', description: 'Konwertuj JPEG do PNG, WebP, PDF i innych formatów z zaawansowanymi ustawieniami kontroli jakości' }
        ],
        about_title: 'Informacje o formacie JPEG',
        about_intro: 'JPEG (Joint Photographic Experts Group) to jeden z najczęściej używanych formatów kompresji obrazu na świecie. Opracowany w 1992 roku wykorzystuje kompresję stratną, znacząco zmniejszając rozmiary plików przy zachowaniu akceptowalnej jakości, co czyni go idealnym do fotografii cyfrowej, obrazów webowych i zastosowań wymagających oszczędności miejsca.',
        advantages_title: 'Najważniejsze zalety',
        advantages: [
          'Małe rozmiary – Doskonałe współczynniki kompresji',
          'Uniwersalne wsparcie – Działa na wszystkich urządzeniach i przeglądarkach',
          'Regulowana jakość – Równowaga między rozmiarem a jakością',
          'Szybkie przetwarzanie – Szybkie kodowanie i dekodowanie',
          'Szeroka kompatybilność – Obsługiwane przez wszystkie programy graficzne',
          'Metadane EXIF – Przechowuje ustawienia aparatu i informacje'
        ],
        use_cases_title: 'Najlepsze zastosowania',
        use_cases: [
          'Fotografia cyfrowa – Idealna dla zdjęć o bogatej kolorystyce',
          'Obrazy internetowe – Idealne do tła stron i zdjęć',
          'Media społecznościowe – Standardowy format do udostępniania obrazów',
          'Załączniki e-mail – Małe rozmiary dla łatwego udostępniania',
          'Media drukowane – Wysokiej jakości drukowanie w razie potrzeby',
          'Fotografia mobilna – Domyślny format dla większości aparatów'
        ],
        specs_title: 'Specyfikacja techniczna JPEG',
        specs_header_label: 'Parametr',
        specs_header_value: 'Wartość',
        specs: [
          { label: 'Rozszerzenia plików', value: '.jpg, .jpeg, .jpe' },
          { label: 'Typ MIME', value: 'image/jpeg' },
          { label: 'Kompresja', value: 'Kompresja stratna z użyciem DCT (Dyskretna Transformata Kosinusowa)' },
          { label: 'Obsługa kolorów', value: '24-bitowy RGB, 8-bitowa skala szarości, CMYK' },
          { label: 'Maksymalna rozdzielczość', value: '6,500 × 6,500 pikseli' },
          { label: 'Przezroczystość', value: 'Nieobsługiwana' },
          { label: 'Animacja', value: 'Nieobsługiwana' },
          { label: 'Metadane', value: 'Obsługiwane EXIF, IPTC, XMP' }
        ],
        seo_title: 'Funkcje przeglądarki i konwertera JPEG',
        seo_intro: 'Nasz profesjonalny podgląd i konwerter JPEG obsługuje wszystkie warianty formatu, w tym standardowe JPG (.jpg), JPEG 2000 (.jp2) oraz progresywne pliki JPEG. Niezależnie od tego, czy jesteś fotografem, web developerem czy grafikiem, otrzymujesz narzędzia potrzebne do profesjonalnej pracy z JPEG.',
        seo_viewing_title: 'Zaawansowane funkcje podglądu',
        seo_viewing_text: 'Przeglądaj obrazy JPEG z dokładnością do piksela, powiększaniem do 500% i szczegółowymi metadanymi, w tym informacjami EXIF z aparatów cyfrowych. Obsługujemy wszystkie przestrzenie barw JPEG, zapewniając wierne odwzorowanie kolorów.',
        seo_conversion_title: 'Zaawansowane narzędzia konwersji',
        seo_conversion_text: 'Konwertuj pliki JPEG do PNG, WebP, AVIF, TIFF i innych formatów przy zachowaniu optymalnej jakości. Oferujemy regulację jakości, zmianę rozmiaru i przetwarzanie wsadowe wielu plików jednocześnie.',
        seo_optimization_title: 'Optymalizacja jakości',
        seo_optimization_text: 'Optymalizuj pliki JPEG do użycia w sieci dzięki inteligentnym algorytmom kompresji, które zmniejszają rozmiar nawet o 80% przy zachowaniu jakości. Idealne rozwiązanie dla stron WWW, e-maili i mediów społecznościowych.',
        editor: {
          toggle_sidebar: 'Przełącz Panel',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij Panel',
          search_placeholder: 'Szukaj plików...',
          files_header: 'Pliki',
          add_files: '+ Dodaj',
          format_badge: 'JPG',
          present: 'Prezentuj',
          exit_presentation: 'Wyjdź',
          start_presentation: 'Rozpocznij Prezentację (Spacja/Strzałki do nawigacji)',
          print_image: 'Drukuj Obraz',
          download_image: 'Pobierz Obraz',
          previous: 'Poprzedni (←)',
          next: 'Następny (→)',
          zoom_out: 'Pomniejsz (-)',
          zoom_in: 'Powiększ (+)',
          reset_zoom: 'Kliknij, aby zresetować powiększenie',
          rotate: 'Obróć (R)',
          fullscreen: 'Pełny Ekran (F)'
        }
      }
    }
  },
  de: {
    viewers: {
      jpeg: {
        meta_title: 'KOSTENLOSER JPG Viewer & Foto-Dateiöffner (Online)',
        meta_description: 'KOSTENLOSER JPG Viewer: Öffnen und zeigen Sie JPG/JPEG-Bilddateien sofort in Ihrem Browser. Keine Installation oder Registrierung erforderlich. Einfach, schnell und sicher.',
        meta_keywords: 'jpg viewer, jpeg viewer online, bildbetrachter, exif viewer, foto viewer',
        hero_title: 'Kostenloser JPG-Viewer',
        hero_subtitle: 'JPEG-Bilder mit professionellen Werkzeugen analysieren',
        upload_title: 'JPEG-Dateien hochladen',
        upload_description: 'Ziehen Sie Ihre JPEG-Bilder hierher oder klicken Sie zum Auswählen. Unterstützt .jpg, .jpeg, .jpe bis 100 MB pro Datei.',
        upload: {
          drag_drop_text: 'Dateien Hier Ziehen & Ablegen',
          click_browse_text: 'oder klicken Sie auf die Schaltfläche unten zum Durchsuchen',
          choose_files_button: 'Dateien Auswählen',
          max_files_info: 'Max. {maxFiles} Dateien • Bis zu {maxSize} Gesamt'
        },
        buttons: {
          view_files: 'Dateien anzeigen',
          back: 'Zurück zu allen Viewern'
        },
        quick_stats: {
          universal_format: '✓ Universelles Format',
          fast_processing: '⚡ Schnelle Verarbeitung',
          high_quality: '🎨 Hohe Qualität'
        },
        features: [
          { title: 'Professionelle Qualität', description: 'JPEG-Bilder mit voller Qualität, Zoom und detaillierter EXIF-Metadatenanzeige betrachten' },
          { title: 'Schnelle Verarbeitung', description: 'Blitzschnelle JPEG-Verarbeitung mit sofortiger Vorschau und optimiertem Rendering für große Stapel' },
          { title: 'Formatkonvertierung', description: 'JPEG in PNG, WebP, PDF und andere Formate mit erweiterten Qualitätskontrollen konvertieren' }
        ],
        about_title: 'Informationen zum JPEG-Format',
        about_intro: 'JPEG (Joint Photographic Experts Group) ist eines der meistverwendeten Bildkompressionsformate weltweit. Seit 1992 ermöglicht es durch verlustbehaftete Kompression deutlich kleinere Dateigrößen bei akzeptabler Qualität – ideal für digitale Fotografie, Webgrafiken und speicherschonende Anwendungen.',
        advantages_title: 'Wichtigste Vorteile',
        advantages: [
          'Kleine Dateigrößen – Hervorragende Kompressionsraten',
          'Universelle Unterstützung – Funktioniert auf allen Geräten und Browsern',
          'Einstellbare Qualität – Balance zwischen Größe und Qualität',
          'Schnelle Verarbeitung – Schnelles Kodieren und Dekodieren',
          'Breite Kompatibilität – Unterstützt von allen Bildsoftware',
          'EXIF-Metadaten – Speichert Kameraeinstellungen und Informationen'
        ],
        use_cases_title: 'Beste Anwendungsfälle',
        use_cases: [
          'Digitale Fotografie – Perfekt für farbenreiche Fotos',
          'Webbilder – Ideal für Website-Hintergründe und Fotos',
          'Soziale Medien – Standardformat zum Teilen von Bildern',
          'E-Mail-Anhänge – Kleine Größen für einfaches Teilen',
          'Druckmedien – Hochwertiger Druck bei Bedarf',
          'Mobilfotografie – Standardformat für die meisten Kameras'
        ],
        specs_title: 'Technische JPEG-Spezifikationen',
        specs_header_label: 'Eigenschaft',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateierweiterungen', value: '.jpg, .jpeg, .jpe' },
          { label: 'MIME-Typ', value: 'image/jpeg' },
          { label: 'Kompression', value: 'Verlustbehaftete Kompression mit DCT (Diskrete Kosinustransformation)' },
          { label: 'Farbunterstützung', value: '24-Bit RGB, 8-Bit Graustufen, CMYK' },
          { label: 'Maximale Auflösung', value: '6.500 × 6.500 Pixel' },
          { label: 'Transparenz', value: 'Nicht unterstützt' },
          { label: 'Animation', value: 'Nicht unterstützt' },
          { label: 'Metadaten', value: 'EXIF, IPTC, XMP unterstützt' }
        ],
        seo_title: 'JPEG-Viewer und Konverter-Funktionen',
        seo_intro: 'Unser professioneller JPEG-Viewer und Konverter bietet umfassende Unterstützung für alle JPEG-Varianten, einschließlich Standard-JPEG (.jpg), JPEG 2000 (.jp2) und progressive JPEG-Dateien. Egal ob Sie Fotograf, Webentwickler oder Grafikdesigner sind, unsere Plattform bietet die Tools, die Sie für professionelle JPEG-Verarbeitung benötigen.',
        seo_viewing_title: 'Erweiterte Anzeigefunktionen',
        seo_viewing_text: 'Zeigen Sie JPEG-Bilder mit pixelgenauer Genauigkeit, Zoom-Funktionen bis zu 500% und detaillierter Metadatenanzeige, einschließlich EXIF-Daten von Digitalkameras. Unser Viewer unterstützt alle JPEG-Farbräume, einschließlich RGB, CMYK und Graustufen, und gewährleistet eine genaue Farbdarstellung auf verschiedenen Geräten.',
        seo_conversion_title: 'Professionelle Konvertierungstools',
        seo_conversion_text: 'Konvertieren Sie JPEG-Dateien in PNG, WebP, AVIF, TIFF und andere Formate bei optimaler Qualität. Unsere Konvertierungs-Engine bietet einstellbare Qualitätseinstellungen, Größenänderungsoptionen und Stapelverarbeitungsfunktionen für die gleichzeitige Bearbeitung mehrerer Dateien.',
        seo_optimization_title: 'Qualitätsoptimierung',
        seo_optimization_text: 'Optimieren Sie JPEG-Dateien für die Webnutzung mit unseren intelligenten Komprimierungsalgorithmen, die Dateigrößen um bis zu 80% reduzieren und gleichzeitig die visuelle Qualität erhalten. Perfekt für Website-Optimierung, E-Mail-Anhänge und Social-Media-Sharing, wo die Dateigröße wichtig ist.',
        editor: {
          toggle_sidebar: 'Sidebar Umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Sidebar Schließen',
          search_placeholder: 'Dateien suchen...',
          files_header: 'Dateien',
          add_files: '+ Hinzufügen',
          format_badge: 'JPG',
          present: 'Präsentieren',
          exit_presentation: 'Beenden',
          start_presentation: 'Präsentation Starten (Leertaste/Pfeile zum Navigieren)',
          print_image: 'Bild Drucken',
          download_image: 'Bild Herunterladen',
          previous: 'Zurück (←)',
          next: 'Weiter (→)',
          zoom_out: 'Verkleinern (-)',
          zoom_in: 'Vergrößern (+)',
          reset_zoom: 'Klicken zum Zurücksetzen des Zooms',
          rotate: 'Drehen (R)',
          fullscreen: 'Vollbild (F)'
        }
      }
    }
  },
  es: {
    viewers: {
      jpeg: {
        meta_title: 'VISOR JPG GRATIS y Abridor de Archivos de Fotos (Online)',
        meta_description: 'VISOR JPG GRATIS: Abre y visualiza archivos de imágenes JPG/JPEG instantáneamente en tu navegador. No se requiere instalación ni registro. Simple, rápido y seguro.',
        meta_keywords: 'visor jpeg, visor jpg, visor de imágenes, convertidor jpeg, jpg a png, ver jpeg online, visor exif, visor de fotos',
        hero_title: 'Visor JPG Gratis',
        hero_subtitle: 'Ver y analizar imágenes JPEG con herramientas profesionales',
        upload_title: 'Subir Archivos JPEG',
        upload_description: 'Arrastra y suelta tus imágenes JPEG o haz clic para explorar. Soporta archivos .jpg, .jpeg y .jpe de hasta 100MB cada uno.',
        upload: {
          drag_drop_text: 'Arrastra y Suelta Tus Archivos Aquí',
          click_browse_text: 'o haz clic en el botón de abajo para explorar',
          choose_files_button: 'Elegir Archivos',
          max_files_info: 'Máx. {maxFiles} archivos • Hasta {maxSize} Total'
        },
        buttons: {
          view_files: 'Ver Archivos',
          back: 'Volver a Todos los Visores'
        },
        quick_stats: {
          universal_format: '✓ Formato Universal',
          fast_processing: '⚡ Procesamiento Rápido',
          high_quality: '🎨 Alta Calidad'
        },
        features: [
          { title: 'Calidad Profesional', description: 'Ver imágenes JPEG con preservación completa de calidad, capacidades de zoom e inspección detallada de metadatos EXIF' },
          { title: 'Procesamiento Rápido', description: 'Procesamiento ultrarrápido de JPEG con vistas previas instantáneas y renderizado optimizado para lotes grandes' },
          { title: 'Conversión de Formatos', description: 'Convertir JPEG a PNG, WebP, PDF y otros formatos con configuraciones avanzadas de control de calidad' }
        ],
        about_title: 'Acerca del Formato JPEG',
        about_intro: 'JPEG (Joint Photographic Experts Group) es uno de los formatos de compresión de imágenes más utilizados en el mundo. Desarrollado en 1992, JPEG utiliza compresión con pérdida para reducir significativamente el tamaño de los archivos mientras mantiene una calidad de imagen aceptable, lo que lo hace perfecto para fotografía digital, imágenes web y aplicaciones conscientes del almacenamiento.',
        advantages_title: 'Ventajas Clave',
        advantages: [
          'Tamaños de archivo pequeños – Excelentes ratios de compresión',
          'Soporte universal – Funciona en todos los dispositivos y navegadores',
          'Calidad ajustable – Equilibrio entre tamaño y calidad',
          'Procesamiento rápido – Rápido para codificar y decodificar',
          'Amplia compatibilidad – Compatible con todo el software de imágenes',
          'Metadatos EXIF – Almacena configuraciones e información de la cámara'
        ],
        use_cases_title: 'Mejores Casos de Uso',
        use_cases: [
          'Fotografía digital – Perfecto para fotos con muchos colores',
          'Imágenes web – Ideal para fondos de sitios web y fotos',
          'Redes sociales – Formato estándar para compartir imágenes',
          'Adjuntos de correo – Tamaños pequeños para compartir fácilmente',
          'Medios impresos – Impresión de alta calidad cuando se necesita',
          'Fotografía móvil – Formato predeterminado para la mayoría de las cámaras'
        ],
        specs_title: 'Especificaciones Técnicas JPEG',
        specs_header_label: 'Especificación',
        specs_header_value: 'Detalles',
        specs: [
          { label: 'Extensiones de Archivo', value: '.jpg, .jpeg, .jpe' },
          { label: 'Tipo MIME', value: 'image/jpeg' },
          { label: 'Compresión', value: 'Compresión con pérdida usando DCT (Transformada Discreta del Coseno)' },
          { label: 'Soporte de Color', value: 'RGB de 24 bits, Escala de grises de 8 bits, CMYK' },
          { label: 'Resolución Máxima', value: '6,500 × 6,500 píxeles' },
          { label: 'Transparencia', value: 'No soportada' },
          { label: 'Animación', value: 'No soportada' },
          { label: 'Metadatos', value: 'EXIF, IPTC, XMP soportados' }
        ],
        seo_title: 'Características del Visor y Convertidor JPEG',
        seo_intro: 'Nuestro visor y convertidor JPEG profesional proporciona soporte completo para todas las variantes JPEG, incluyendo JPEG estándar (.jpg), JPEG 2000 (.jp2) y archivos JPEG progresivos. Ya seas fotógrafo, desarrollador web o diseñador gráfico, nuestra plataforma ofrece las herramientas que necesitas para el procesamiento profesional de JPEG.',
        seo_viewing_title: 'Características Avanzadas de Visualización',
        seo_viewing_text: 'Ver imágenes JPEG con precisión perfecta de píxeles, capacidades de zoom de hasta 500% y visualización detallada de metadatos, incluyendo datos EXIF de cámaras digitales. Nuestro visor soporta todos los espacios de color JPEG, incluyendo RGB, CMYK y escala de grises, asegurando una representación precisa del color en diferentes dispositivos.',
        seo_conversion_title: 'Herramientas de Conversión Profesionales',
        seo_conversion_text: 'Convertir archivos JPEG a PNG, WebP, AVIF, TIFF y otros formatos manteniendo una calidad óptima. Nuestro motor de conversión ofrece configuraciones de calidad ajustables, opciones de redimensionamiento y capacidades de procesamiento por lotes para manejar múltiples archivos simultáneamente.',
        seo_optimization_title: 'Optimización de Calidad',
        seo_optimization_text: 'Optimiza archivos JPEG para uso web con nuestros algoritmos de compresión inteligentes que reducen el tamaño de los archivos hasta en un 80% mientras preservan la calidad visual. Perfecto para optimización de sitios web, adjuntos de correo electrónico y compartir en redes sociales donde el tamaño del archivo importa.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar Barra Lateral',
          search_placeholder: 'Buscar archivos...',
          files_header: 'Archivos',
          add_files: '+ Añadir',
          format_badge: 'JPG',
          present: 'Presentar',
          exit_presentation: 'Salir',
          start_presentation: 'Iniciar Presentación (Espacio/Flechas para navegar)',
          print_image: 'Imprimir Imagen',
          download_image: 'Descargar Imagen',
          previous: 'Anterior (←)',
          next: 'Siguiente (→)',
          zoom_out: 'Alejar (-)',
          zoom_in: 'Acercar (+)',
          reset_zoom: 'Clic para restablecer zoom',
          rotate: 'Rotar (R)',
          fullscreen: 'Pantalla Completa (F)'
        }
      }
    }
  },
  fr: {
    viewers: {
      jpeg: {
        meta_title: 'VISIONNEUSE JPG GRATUITE et Ouvrir Fichiers Photo (En Ligne)',
        meta_description: 'VISIONNEUSE JPG GRATUITE: Ouvrez et visualisez les fichiers d\'images JPG/JPEG instantanément dans votre navigateur. Aucune installation ni inscription n\'est requise. Simple, rapide et sécurisé.',
        meta_keywords: 'visionneuse jpeg, visionneuse jpg, visionneuse d\'images, convertisseur jpeg, jpg vers png, voir jpeg en ligne, visionneuse exif, visionneuse de photos',
        hero_title: 'Visionneuse JPG Gratuite',
        hero_subtitle: 'Voir et analyser les images JPEG avec des outils professionnels',
        upload_title: 'Télécharger des Fichiers JPEG',
        upload_description: 'Glissez-déposez vos images JPEG ou cliquez pour parcourir. Prend en charge les fichiers .jpg, .jpeg et .jpe jusqu\'à 100 Mo chacun.',
        upload: {
          drag_drop_text: 'Glissez-Déposez Vos Fichiers Ici',
          click_browse_text: 'ou cliquez sur le bouton ci-dessous pour parcourir',
          choose_files_button: 'Choisir des Fichiers',
          max_files_info: 'Max {maxFiles} fichiers • Jusqu\'à {maxSize} Total'
        },
        buttons: {
          view_files: 'Voir les Fichiers',
          back: 'Retour à Tous les Visionneuses'
        },
        quick_stats: {
          universal_format: '✓ Format Universel',
          fast_processing: '⚡ Traitement Rapide',
          high_quality: '🎨 Haute Qualité'
        },
        features: [
          { title: 'Qualité Professionnelle', description: 'Voir les images JPEG avec préservation complète de la qualité, capacités de zoom et inspection détaillée des métadonnées EXIF' },
          { title: 'Traitement Rapide', description: 'Traitement ultra-rapide des JPEG avec prévisualisations instantanées et rendu optimisé pour les grands lots' },
          { title: 'Conversion de Formats', description: 'Convertir JPEG en PNG, WebP, PDF et autres formats avec des paramètres avancés de contrôle de qualité' }
        ],
        about_title: 'À Propos du Format JPEG',
        about_intro: 'JPEG (Joint Photographic Experts Group) est l\'un des formats de compression d\'images les plus utilisés au monde. Développé en 1992, JPEG utilise une compression avec perte pour réduire considérablement la taille des fichiers tout en maintenant une qualité d\'image acceptable, ce qui le rend parfait pour la photographie numérique, les images web et les applications soucieuses du stockage.',
        advantages_title: 'Avantages Clés',
        advantages: [
          'Petites tailles de fichier – Excellents ratios de compression',
          'Support universel – Fonctionne sur tous les appareils et navigateurs',
          'Qualité ajustable – Équilibre entre taille et qualité',
          'Traitement rapide – Rapide à encoder et décoder',
          'Large compatibilité – Pris en charge par tous les logiciels d\'images',
          'Métadonnées EXIF – Stocke les paramètres et informations de l\'appareil photo'
        ],
        use_cases_title: 'Meilleurs Cas d\'Utilisation',
        use_cases: [
          'Photographie numérique – Parfait pour les photos avec beaucoup de couleurs',
          'Images web – Idéal pour les arrière-plans de sites web et les photos',
          'Réseaux sociaux – Format standard pour partager des images',
          'Pièces jointes email – Petites tailles pour un partage facile',
          'Médias imprimés – Impression haute qualité si nécessaire',
          'Photographie mobile – Format par défaut pour la plupart des appareils photo'
        ],
        specs_title: 'Spécifications Techniques JPEG',
        specs_header_label: 'Spécification',
        specs_header_value: 'Détails',
        specs: [
          { label: 'Extensions de Fichier', value: '.jpg, .jpeg, .jpe' },
          { label: 'Type MIME', value: 'image/jpeg' },
          { label: 'Compression', value: 'Compression avec perte utilisant DCT (Transformée en Cosinus Discrète)' },
          { label: 'Support des Couleurs', value: 'RGB 24 bits, Niveaux de gris 8 bits, CMYK' },
          { label: 'Résolution Maximale', value: '6,500 × 6,500 pixels' },
          { label: 'Transparence', value: 'Non supportée' },
          { label: 'Animation', value: 'Non supportée' },
          { label: 'Métadonnées', value: 'EXIF, IPTC, XMP supportés' }
        ],
        seo_title: 'Fonctionnalités du Visionneuse et Convertisseur JPEG',
        seo_intro: 'Notre visionneuse et convertisseur JPEG professionnel offre un support complet pour toutes les variantes JPEG, y compris JPEG standard (.jpg), JPEG 2000 (.jp2) et fichiers JPEG progressifs. Que vous soyez photographe, développeur web ou graphiste, notre plateforme offre les outils dont vous avez besoin pour le traitement professionnel des JPEG.',
        seo_viewing_title: 'Fonctionnalités de Visualisation Avancées',
        seo_viewing_text: 'Voir les images JPEG avec une précision parfaite au pixel près, des capacités de zoom jusqu\'à 500% et un affichage détaillé des métadonnées, y compris les données EXIF des appareils photo numériques. Notre visionneuse prend en charge tous les espaces colorimétriques JPEG, y compris RGB, CMYK et niveaux de gris, garantissant une représentation précise des couleurs sur différents appareils.',
        seo_conversion_title: 'Outils de Conversion Professionnels',
        seo_conversion_text: 'Convertir les fichiers JPEG en PNG, WebP, AVIF, TIFF et autres formats tout en maintenant une qualité optimale. Notre moteur de conversion offre des paramètres de qualité ajustables, des options de redimensionnement et des capacités de traitement par lots pour gérer plusieurs fichiers simultanément.',
        seo_optimization_title: 'Optimisation de la Qualité',
        seo_optimization_text: 'Optimisez les fichiers JPEG pour une utilisation web avec nos algorithmes de compression intelligents qui réduisent la taille des fichiers jusqu\'à 80% tout en préservant la qualité visuelle. Parfait pour l\'optimisation de sites web, les pièces jointes email et le partage sur les réseaux sociaux où la taille du fichier compte.',
        editor: {
          toggle_sidebar: 'Basculer la Barre Latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la Barre Latérale',
          search_placeholder: 'Rechercher des fichiers...',
          files_header: 'Fichiers',
          add_files: '+ Ajouter',
          format_badge: 'JPG',
          present: 'Présenter',
          exit_presentation: 'Quitter',
          start_presentation: 'Démarrer la Présentation (Espace/Flèches pour naviguer)',
          print_image: 'Imprimer l\'Image',
          download_image: 'Télécharger l\'Image',
          previous: 'Précédent (←)',
          next: 'Suivant (→)',
          zoom_out: 'Dézoomer (-)',
          zoom_in: 'Zoomer (+)',
          reset_zoom: 'Cliquer pour réinitialiser le zoom',
          rotate: 'Tourner (R)',
          fullscreen: 'Plein Écran (F)'
        }
      }
    }
  },
  it: {
    viewers: {
      jpeg: {
        meta_title: 'VISUALIZZATORE JPG GRATUITO e Apri File Foto (Online)',
        meta_description: 'VISUALIZZATORE JPG GRATUITO: Apri e visualizza file di immagini JPG/JPEG istantaneamente nel tuo browser. Non è richiesta installazione o registrazione. Semplice, veloce e sicuro.',
        meta_keywords: 'visualizzatore jpeg, visualizzatore jpg, visualizzatore immagini, convertitore jpeg, jpg a png, visualizza jpeg online, visualizzatore exif, visualizzatore foto',
        hero_title: 'Visualizzatore JPG Gratuito',
        hero_subtitle: 'Visualizza e analizza immagini JPEG con strumenti professionali',
        upload_title: 'Carica File JPEG',
        upload_description: 'Trascina e rilascia le tue immagini JPEG o fai clic per sfogliare. Supporta file .jpg, .jpeg e .jpe fino a 100MB ciascuno.',
        upload: {
          drag_drop_text: 'Trascina e Rilascia i Tuoi File Qui',
          click_browse_text: 'o fai clic sul pulsante qui sotto per sfogliare',
          choose_files_button: 'Scegli File',
          max_files_info: 'Max {maxFiles} file • Fino a {maxSize} Totale'
        },
        buttons: {
          view_files: 'Visualizza File',
          back: 'Torna a Tutti i Visualizzatori'
        },
        quick_stats: {
          universal_format: '✓ Formato Universale',
          fast_processing: '⚡ Elaborazione Veloce',
          high_quality: '🎨 Alta Qualità'
        },
        features: [
          { title: 'Qualità Professionale', description: 'Visualizza immagini JPEG con preservazione completa della qualità, capacità di zoom e ispezione dettagliata dei metadati EXIF' },
          { title: 'Elaborazione Veloce', description: 'Elaborazione velocissima dei JPEG con anteprime istantanee e rendering ottimizzato per grandi batch' },
          { title: 'Conversione Formati', description: 'Converti JPEG in PNG, WebP, PDF e altri formati con impostazioni avanzate di controllo qualità' }
        ],
        about_title: 'Informazioni sul Formato JPEG',
        about_intro: 'JPEG (Joint Photographic Experts Group) è uno dei formati di compressione delle immagini più utilizzati al mondo. Sviluppato nel 1992, JPEG utilizza la compressione con perdita per ridurre significativamente le dimensioni dei file mantenendo una qualità dell\'immagine accettabile, rendendolo perfetto per la fotografia digitale, le immagini web e le applicazioni attente allo storage.',
        advantages_title: 'Vantaggi Chiave',
        advantages: [
          'Dimensioni file piccole – Eccellenti rapporti di compressione',
          'Supporto universale – Funziona su tutti i dispositivi e browser',
          'Qualità regolabile – Bilanciamento tra dimensione e qualità',
          'Elaborazione veloce – Veloce da codificare e decodificare',
          'Ampia compatibilità – Supportato da tutti i software per immagini',
          'Metadati EXIF – Memorizza impostazioni e informazioni della fotocamera'
        ],
        use_cases_title: 'Migliori Casi d\'Uso',
        use_cases: [
          'Fotografia digitale – Perfetto per foto con molti colori',
          'Immagini web – Ideale per sfondi di siti web e foto',
          'Social media – Formato standard per condividere immagini',
          'Allegati email – Dimensioni piccole per condivisione facile',
          'Stampa – Stampa di alta qualità quando necessario',
          'Fotografia mobile – Formato predefinito per la maggior parte delle fotocamere'
        ],
        specs_title: 'Specifiche Tecniche JPEG',
        specs_header_label: 'Specifica',
        specs_header_value: 'Dettagli',
        specs: [
          { label: 'Estensioni File', value: '.jpg, .jpeg, .jpe' },
          { label: 'Tipo MIME', value: 'image/jpeg' },
          { label: 'Compressione', value: 'Compressione con perdita utilizzando DCT (Trasformata Discreta del Coseno)' },
          { label: 'Supporto Colori', value: 'RGB 24-bit, Scala di grigi 8-bit, CMYK' },
          { label: 'Risoluzione Massima', value: '6,500 × 6,500 pixel' },
          { label: 'Trasparenza', value: 'Non supportata' },
          { label: 'Animazione', value: 'Non supportata' },
          { label: 'Metadati', value: 'EXIF, IPTC, XMP supportati' }
        ],
        seo_title: 'Funzionalità Visualizzatore e Convertitore JPEG',
        seo_intro: 'Il nostro visualizzatore e convertitore JPEG professionale fornisce supporto completo per tutte le varianti JPEG, inclusi JPEG standard (.jpg), JPEG 2000 (.jp2) e file JPEG progressivi. Che tu sia un fotografo, sviluppatore web o grafico, la nostra piattaforma offre gli strumenti di cui hai bisogno per l\'elaborazione professionale dei JPEG.',
        seo_viewing_title: 'Funzionalità di Visualizzazione Avanzate',
        seo_viewing_text: 'Visualizza immagini JPEG con precisione perfetta al pixel, capacità di zoom fino al 500% e visualizzazione dettagliata dei metadati, inclusi dati EXIF da fotocamere digitali. Il nostro visualizzatore supporta tutti gli spazi colore JPEG, inclusi RGB, CMYK e scala di grigi, garantendo una rappresentazione accurata dei colori su diversi dispositivi.',
        seo_conversion_title: 'Strumenti di Conversione Professionali',
        seo_conversion_text: 'Converti file JPEG in PNG, WebP, AVIF, TIFF e altri formati mantenendo una qualità ottimale. Il nostro motore di conversione offre impostazioni di qualità regolabili, opzioni di ridimensionamento e capacità di elaborazione batch per gestire più file contemporaneamente.',
        seo_optimization_title: 'Ottimizzazione Qualità',
        seo_optimization_text: 'Ottimizza file JPEG per uso web con i nostri algoritmi di compressione intelligenti che riducono le dimensioni dei file fino all\'80% preservando la qualità visiva. Perfetto per l\'ottimizzazione di siti web, allegati email e condivisione sui social media dove la dimensione del file conta.',
        editor: {
          toggle_sidebar: 'Mostra/Nascondi Barra Laterale',
          close: 'Chiudi (Esc)',
          close_sidebar: 'Chiudi Barra Laterale',
          search_placeholder: 'Cerca file...',
          files_header: 'File',
          add_files: '+ Aggiungi',
          format_badge: 'JPG',
          present: 'Presenta',
          exit_presentation: 'Esci',
          start_presentation: 'Avvia Presentazione (Spazio/Frecce per navigare)',
          print_image: 'Stampa Immagine',
          download_image: 'Scarica Immagine',
          previous: 'Precedente (←)',
          next: 'Successivo (→)',
          zoom_out: 'Riduci (-)',
          zoom_in: 'Ingrandisci (+)',
          reset_zoom: 'Clicca per resettare lo zoom',
          rotate: 'Ruota (R)',
          fullscreen: 'Schermo Intero (F)'
        }
      }
    }
  },
  nl: {
    viewers: {
      jpeg: {
        meta_title: 'GRATIS JPG Viewer en Foto Bestandsopener (Online)',
        meta_description: 'GRATIS JPG Viewer: Open en bekijk JPG/JPEG afbeeldingsbestanden direct in uw browser. Geen installatie of registratie vereist. Eenvoudig, snel en veilig.',
        meta_keywords: 'jpeg viewer, jpg viewer, afbeeldingsviewer, jpeg converter, jpg naar png, bekijk jpeg online, exif viewer, fotoviewer',
        hero_title: 'Gratis JPG Viewer',
        hero_subtitle: 'Bekijk en analyseer JPEG afbeeldingen met professionele tools',
        upload_title: 'Upload JPEG Bestanden',
        upload_description: 'Sleep en zet je JPEG afbeeldingen neer of klik om te bladeren. Ondersteunt .jpg, .jpeg en .jpe bestanden tot 100MB elk.',
        upload: {
          drag_drop_text: 'Sleep en Zet Je Bestanden Hier Neer',
          click_browse_text: 'of klik op de knop hieronder om te bladeren',
          choose_files_button: 'Kies Bestanden',
          max_files_info: 'Max {maxFiles} bestanden • Tot {maxSize} Totaal'
        },
        buttons: {
          view_files: 'Bekijk Bestanden',
          back: 'Terug naar Alle Viewers'
        },
        quick_stats: {
          universal_format: '✓ Universeel Formaat',
          fast_processing: '⚡ Snelle Verwerking',
          high_quality: '🎨 Hoge Kwaliteit'
        },
        features: [
          { title: 'Professionele Kwaliteit', description: 'Bekijk JPEG afbeeldingen met volledige kwaliteitsbehoud, zoommogelijkheden en gedetailleerde EXIF metadata inspectie' },
          { title: 'Snelle Verwerking', description: 'Bliksemsnelle JPEG verwerking met directe voorbeelden en geoptimaliseerde weergave voor grote batches' },
          { title: 'Formaat Conversie', description: 'Converteer JPEG naar PNG, WebP, PDF en andere formaten met geavanceerde kwaliteitscontrole instellingen' }
        ],
        about_title: 'Over JPEG Formaat',
        about_intro: 'JPEG (Joint Photographic Experts Group) is een van de meest gebruikte beeldcompressieformaten ter wereld. Ontwikkeld in 1992, gebruikt JPEG lossy compressie om bestandsgroottes aanzienlijk te verkleinen terwijl acceptabele beeldkwaliteit behouden blijft, waardoor het perfect is voor digitale fotografie, webafbeeldingen en opslagbewuste toepassingen.',
        advantages_title: 'Belangrijkste Voordelen',
        advantages: [
          'Kleine bestandsgroottes – Uitstekende compressieverhoudingen',
          'Universele ondersteuning – Werkt op alle apparaten en browsers',
          'Aanpasbare kwaliteit – Balans tussen grootte en kwaliteit',
          'Snelle verwerking – Snel te coderen en decoderen',
          'Brede compatibiliteit – Ondersteund door alle beeldsoftware',
          'EXIF metadata – Slaat camerainstellingen en informatie op'
        ],
        use_cases_title: 'Beste Gebruikssituaties',
        use_cases: [
          'Digitale fotografie – Perfect voor foto\'s met veel kleuren',
          'Webafbeeldingen – Ideaal voor websiteachtergronden en foto\'s',
          'Sociale media – Standaardformaat voor het delen van afbeeldingen',
          'E-mailbijlagen – Kleine groottes voor eenvoudig delen',
          'Printmedia – Hoge kwaliteit printen indien nodig',
          'Mobiele fotografie – Standaardformaat voor de meeste camera\'s'
        ],
        specs_title: 'JPEG Technische Specificaties',
        specs_header_label: 'Specificatie',
        specs_header_value: 'Details',
        specs: [
          { label: 'Bestandsextensies', value: '.jpg, .jpeg, .jpe' },
          { label: 'MIME Type', value: 'image/jpeg' },
          { label: 'Compressie', value: 'Lossy compressie met DCT (Discrete Cosinus Transformatie)' },
          { label: 'Kleurondersteuning', value: '24-bit RGB, 8-bit Grijswaarden, CMYK' },
          { label: 'Maximale Resolutie', value: '6,500 × 6,500 pixels' },
          { label: 'Transparantie', value: 'Niet ondersteund' },
          { label: 'Animatie', value: 'Niet ondersteund' },
          { label: 'Metadata', value: 'EXIF, IPTC, XMP ondersteund' }
        ],
        seo_title: 'JPEG Viewer en Converter Functies',
        seo_intro: 'Onze professionele JPEG viewer en converter biedt uitgebreide ondersteuning voor alle JPEG varianten, inclusief standaard JPEG (.jpg), JPEG 2000 (.jp2) en progressieve JPEG bestanden. Of je nu fotograaf, webontwikkelaar of grafisch ontwerper bent, ons platform biedt de tools die je nodig hebt voor professionele JPEG verwerking.',
        seo_viewing_title: 'Geavanceerde Weergavefuncties',
        seo_viewing_text: 'Bekijk JPEG afbeeldingen met pixelperfecte nauwkeurigheid, zoommogelijkheden tot 500% en gedetailleerde metadataweergave, inclusief EXIF gegevens van digitale camera\'s. Onze viewer ondersteunt alle JPEG kleurruimten, inclusief RGB, CMYK en grijswaarden, waardoor nauwkeurige kleurweergave op verschillende apparaten wordt gegarandeerd.',
        seo_conversion_title: 'Professionele Conversietools',
        seo_conversion_text: 'Converteer JPEG bestanden naar PNG, WebP, AVIF, TIFF en andere formaten terwijl optimale kwaliteit behouden blijft. Onze conversie-engine biedt aanpasbare kwaliteitsinstellingen, formaatwijzigingsopties en batchverwerkingsmogelijkheden voor het gelijktijdig verwerken van meerdere bestanden.',
        seo_optimization_title: 'Kwaliteitsoptimalisatie',
        seo_optimization_text: 'Optimaliseer JPEG bestanden voor webgebruik met onze slimme compressie-algoritmen die bestandsgroottes tot 80% verkleinen terwijl de visuele kwaliteit behouden blijft. Perfect voor website-optimalisatie, e-mailbijlagen en sociale media delen waar bestandsgrootte belangrijk is.',
        editor: {
          toggle_sidebar: 'Zijbalk In-/Uitschakelen',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk Sluiten',
          search_placeholder: 'Zoek bestanden...',
          files_header: 'Bestanden',
          add_files: '+ Toevoegen',
          format_badge: 'JPG',
          present: 'Presenteren',
          exit_presentation: 'Afsluiten',
          start_presentation: 'Start Presentatie (Spatie/Pijlen om te navigeren)',
          print_image: 'Afbeelding Afdrukken',
          download_image: 'Afbeelding Downloaden',
          previous: 'Vorige (←)',
          next: 'Volgende (→)',
          zoom_out: 'Uitzoomen (-)',
          zoom_in: 'Inzoomen (+)',
          reset_zoom: 'Klik om zoom te resetten',
          rotate: 'Draaien (R)',
          fullscreen: 'Volledig Scherm (F)'
        }
      }
    }
  },
  pt: {
    viewers: {
      jpeg: {
        meta_title: 'VISUALIZADOR JPG GRATUITO e Abridor de Arquivos de Fotos (Online)',
        meta_description: 'VISUALIZADOR JPG GRATUITO: Abra e visualize arquivos de imagens JPG/JPEG instantaneamente no seu navegador. Nenhuma instalação ou registro é necessário. Simples, rápido e seguro.',
        meta_keywords: 'visualizador jpeg, visualizador jpg, visualizador de imagens, conversor jpeg, jpg para png, ver jpeg online, visualizador exif, visualizador de fotos',
        hero_title: 'Visualizador JPG Gratuito',
        hero_subtitle: 'Ver e analisar imagens JPEG com ferramentas profissionais',
        upload_title: 'Carregar Arquivos JPEG',
        upload_description: 'Arraste e solte suas imagens JPEG ou clique para procurar. Suporta arquivos .jpg, .jpeg e .jpe de até 100MB cada.',
        upload: {
          drag_drop_text: 'Arraste e Solte Seus Arquivos Aqui',
          click_browse_text: 'ou clique no botão abaixo para procurar',
          choose_files_button: 'Escolher Arquivos',
          max_files_info: 'Máx. {maxFiles} arquivos • Até {maxSize} Total'
        },
        buttons: {
          view_files: 'Ver Arquivos',
          back: 'Voltar para Todos os Visualizadores'
        },
        quick_stats: {
          universal_format: '✓ Formato Universal',
          fast_processing: '⚡ Processamento Rápido',
          high_quality: '🎨 Alta Qualidade'
        },
        features: [
          { title: 'Qualidade Profissional', description: 'Ver imagens JPEG com preservação completa da qualidade, capacidades de zoom e inspeção detalhada de metadados EXIF' },
          { title: 'Processamento Rápido', description: 'Processamento ultrarrápido de JPEG com visualizações instantâneas e renderização otimizada para grandes lotes' },
          { title: 'Conversão de Formatos', description: 'Converter JPEG para PNG, WebP, PDF e outros formatos com configurações avançadas de controle de qualidade' }
        ],
        about_title: 'Sobre o Formato JPEG',
        about_intro: 'JPEG (Joint Photographic Experts Group) é um dos formatos de compressão de imagens mais utilizados no mundo. Desenvolvido em 1992, JPEG usa compressão com perda para reduzir significativamente o tamanho dos arquivos mantendo qualidade de imagem aceitável, tornando-o perfeito para fotografia digital, imagens web e aplicações conscientes de armazenamento.',
        advantages_title: 'Vantagens Principais',
        advantages: [
          'Tamanhos de arquivo pequenos – Excelentes taxas de compressão',
          'Suporte universal – Funciona em todos os dispositivos e navegadores',
          'Qualidade ajustável – Equilíbrio entre tamanho e qualidade',
          'Processamento rápido – Rápido para codificar e decodificar',
          'Ampla compatibilidade – Suportado por todos os softwares de imagem',
          'Metadados EXIF – Armazena configurações e informações da câmera'
        ],
        use_cases_title: 'Melhores Casos de Uso',
        use_cases: [
          'Fotografia digital – Perfeito para fotos com muitas cores',
          'Imagens web – Ideal para fundos de sites e fotos',
          'Redes sociais – Formato padrão para compartilhar imagens',
          'Anexos de email – Tamanhos pequenos para compartilhamento fácil',
          'Mídia impressa – Impressão de alta qualidade quando necessário',
          'Fotografia móvel – Formato padrão para a maioria das câmeras'
        ],
        specs_title: 'Especificações Técnicas JPEG',
        specs_header_label: 'Especificação',
        specs_header_value: 'Detalhes',
        specs: [
          { label: 'Extensões de Arquivo', value: '.jpg, .jpeg, .jpe' },
          { label: 'Tipo MIME', value: 'image/jpeg' },
          { label: 'Compressão', value: 'Compressão com perda usando DCT (Transformada Discreta do Cosseno)' },
          { label: 'Suporte de Cores', value: 'RGB 24-bit, Escala de Cinza 8-bit, CMYK' },
          { label: 'Resolução Máxima', value: '6,500 × 6,500 pixels' },
          { label: 'Transparência', value: 'Não suportada' },
          { label: 'Animação', value: 'Não suportada' },
          { label: 'Metadados', value: 'EXIF, IPTC, XMP suportados' }
        ],
        seo_title: 'Recursos do Visualizador e Conversor JPEG',
        seo_intro: 'Nosso visualizador e conversor JPEG profissional fornece suporte abrangente para todas as variantes JPEG, incluindo JPEG padrão (.jpg), JPEG 2000 (.jp2) e arquivos JPEG progressivos. Seja você fotógrafo, desenvolvedor web ou designer gráfico, nossa plataforma oferece as ferramentas necessárias para processamento profissional de JPEG.',
        seo_viewing_title: 'Recursos Avançados de Visualização',
        seo_viewing_text: 'Ver imagens JPEG com precisão perfeita de pixels, capacidades de zoom de até 500% e exibição detalhada de metadados, incluindo dados EXIF de câmeras digitais. Nosso visualizador suporta todos os espaços de cores JPEG, incluindo RGB, CMYK e escala de cinza, garantindo representação precisa de cores em diferentes dispositivos.',
        seo_conversion_title: 'Ferramentas de Conversão Profissionais',
        seo_conversion_text: 'Converter arquivos JPEG para PNG, WebP, AVIF, TIFF e outros formatos mantendo qualidade ótima. Nosso mecanismo de conversão oferece configurações de qualidade ajustáveis, opções de redimensionamento e capacidades de processamento em lote para lidar com vários arquivos simultaneamente.',
        seo_optimization_title: 'Otimização de Qualidade',
        seo_optimization_text: 'Otimize arquivos JPEG para uso na web com nossos algoritmos de compressão inteligentes que reduzem o tamanho dos arquivos em até 80% preservando a qualidade visual. Perfeito para otimização de sites, anexos de email e compartilhamento em redes sociais onde o tamanho do arquivo importa.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar Barra Lateral',
          search_placeholder: 'Pesquisar arquivos...',
          files_header: 'Arquivos',
          add_files: '+ Adicionar',
          format_badge: 'JPG',
          present: 'Apresentar',
          exit_presentation: 'Sair',
          start_presentation: 'Iniciar Apresentação (Espaço/Setas para navegar)',
          print_image: 'Imprimir Imagem',
          download_image: 'Baixar Imagem',
          previous: 'Anterior (←)',
          next: 'Próximo (→)',
          zoom_out: 'Diminuir Zoom (-)',
          zoom_in: 'Aumentar Zoom (+)',
          reset_zoom: 'Clique para redefinir zoom',
          rotate: 'Girar (R)',
          fullscreen: 'Tela Cheia (F)'
        }
      }
    }
  },
  vi: {
    viewers: {
      jpeg: {
        meta_title: 'TRÌNH XEM JPG MIỄN PHÍ và Mở Tệp Ảnh (Trực Tuyến)',
        meta_description: 'TRÌNH XEM JPG MIỄN PHÍ: Mở và xem tệp hình ảnh JPG/JPEG ngay lập tức trong trình duyệt của bạn. Không cần cài đặt hoặc đăng ký. Đơn giản, nhanh chóng và an toàn.',
        meta_keywords: 'trình xem jpeg, trình xem jpg, trình xem hình ảnh, bộ chuyển đổi jpeg, jpg sang png, xem jpeg trực tuyến, trình xem exif, trình xem ảnh',
        hero_title: 'Trình Xem JPG Miễn Phí',
        hero_subtitle: 'Xem và phân tích hình ảnh JPEG với các công cụ chuyên nghiệp',
        upload_title: 'Tải Lên Tệp JPEG',
        upload_description: 'Kéo và thả hình ảnh JPEG của bạn hoặc nhấp để duyệt. Hỗ trợ tệp .jpg, .jpeg và .jpe lên đến 100MB mỗi tệp.',
        upload: {
          drag_drop_text: 'Kéo và Thả Tệp Của Bạn Vào Đây',
          click_browse_text: 'hoặc nhấp vào nút bên dưới để duyệt',
          choose_files_button: 'Chọn Tệp',
          max_files_info: 'Tối đa {maxFiles} tệp • Lên đến {maxSize} Tổng cộng'
        },
        buttons: {
          view_files: 'Xem Tệp',
          back: 'Quay Lại Tất Cả Trình Xem'
        },
        quick_stats: {
          universal_format: '✓ Định Dạng Phổ Biến',
          fast_processing: '⚡ Xử Lý Nhanh',
          high_quality: '🎨 Chất Lượng Cao'
        },
        features: [
          { title: 'Chất Lượng Chuyên Nghiệp', description: 'Xem hình ảnh JPEG với bảo toàn chất lượng đầy đủ, khả năng phóng to và kiểm tra siêu dữ liệu EXIF chi tiết' },
          { title: 'Xử Lý Nhanh', description: 'Xử lý JPEG cực nhanh với xem trước tức thì và kết xuất tối ưu cho các lô lớn' },
          { title: 'Chuyển Đổi Định Dạng', description: 'Chuyển đổi JPEG sang PNG, WebP, PDF và các định dạng khác với cài đặt kiểm soát chất lượng nâng cao' }
        ],
        about_title: 'Về Định Dạng JPEG',
        about_intro: 'JPEG (Joint Photographic Experts Group) là một trong những định dạng nén hình ảnh được sử dụng rộng rãi nhất trên thế giới. Được phát triển vào năm 1992, JPEG sử dụng nén có mất mát để giảm đáng kể kích thước tệp trong khi duy trì chất lượng hình ảnh chấp nhận được, làm cho nó hoàn hảo cho nhiếp ảnh kỹ thuật số, hình ảnh web và các ứng dụng tiết kiệm dung lượng.',
        advantages_title: 'Ưu Điểm Chính',
        advantages: [
          'Kích thước tệp nhỏ – Tỷ lệ nén tuyệt vời',
          'Hỗ trợ phổ biến – Hoạt động trên tất cả các thiết bị và trình duyệt',
          'Chất lượng có thể điều chỉnh – Cân bằng giữa kích thước và chất lượng',
          'Xử lý nhanh – Nhanh để mã hóa và giải mã',
          'Tương thích rộng – Được hỗ trợ bởi tất cả phần mềm hình ảnh',
          'Siêu dữ liệu EXIF – Lưu trữ cài đặt và thông tin máy ảnh'
        ],
        use_cases_title: 'Trường Hợp Sử Dụng Tốt Nhất',
        use_cases: [
          'Nhiếp ảnh kỹ thuật số – Hoàn hảo cho ảnh có nhiều màu sắc',
          'Hình ảnh web – Lý tưởng cho nền trang web và ảnh',
          'Mạng xã hội – Định dạng tiêu chuẩn để chia sẻ hình ảnh',
          'Tệp đính kèm email – Kích thước nhỏ để chia sẻ dễ dàng',
          'Phương tiện in – In chất lượng cao khi cần',
          'Nhiếp ảnh di động – Định dạng mặc định cho hầu hết máy ảnh'
        ],
        specs_title: 'Thông Số Kỹ Thuật JPEG',
        specs_header_label: 'Thông Số',
        specs_header_value: 'Chi Tiết',
        specs: [
          { label: 'Phần Mở Rộng Tệp', value: '.jpg, .jpeg, .jpe' },
          { label: 'Loại MIME', value: 'image/jpeg' },
          { label: 'Nén', value: 'Nén có mất mát sử dụng DCT (Biến Đổi Cosine Rời Rạc)' },
          { label: 'Hỗ Trợ Màu', value: 'RGB 24-bit, Thang Độ Xám 8-bit, CMYK' },
          { label: 'Độ Phân Giải Tối Đa', value: '6,500 × 6,500 pixel' },
          { label: 'Độ Trong Suốt', value: 'Không được hỗ trợ' },
          { label: 'Hoạt Hình', value: 'Không được hỗ trợ' },
          { label: 'Siêu Dữ Liệu', value: 'EXIF, IPTC, XMP được hỗ trợ' }
        ],
        seo_title: 'Tính Năng Trình Xem và Chuyển Đổi JPEG',
        seo_intro: 'Trình xem và chuyển đổi JPEG chuyên nghiệp của chúng tôi cung cấp hỗ trợ toàn diện cho tất cả các biến thể JPEG, bao gồm JPEG tiêu chuẩn (.jpg), JPEG 2000 (.jp2) và tệp JPEG lũy tiến. Cho dù bạn là nhiếp ảnh gia, nhà phát triển web hay nhà thiết kế đồ họa, nền tảng của chúng tôi cung cấp các công cụ bạn cần để xử lý JPEG chuyên nghiệp.',
        seo_viewing_title: 'Tính Năng Xem Nâng Cao',
        seo_viewing_text: 'Xem hình ảnh JPEG với độ chính xác hoàn hảo từng pixel, khả năng phóng to lên đến 500% và hiển thị siêu dữ liệu chi tiết, bao gồm dữ liệu EXIF từ máy ảnh kỹ thuật số. Trình xem của chúng tôi hỗ trợ tất cả các không gian màu JPEG, bao gồm RGB, CMYK và thang độ xám, đảm bảo biểu diễn màu chính xác trên các thiết bị khác nhau.',
        seo_conversion_title: 'Công Cụ Chuyển Đổi Chuyên Nghiệp',
        seo_conversion_text: 'Chuyển đổi tệp JPEG sang PNG, WebP, AVIF, TIFF và các định dạng khác trong khi duy trì chất lượng tối ưu. Công cụ chuyển đổi của chúng tôi cung cấp cài đặt chất lượng có thể điều chỉnh, tùy chọn thay đổi kích thước và khả năng xử lý hàng loạt để xử lý nhiều tệp đồng thời.',
        seo_optimization_title: 'Tối Ưu Hóa Chất Lượng',
        seo_optimization_text: 'Tối ưu hóa tệp JPEG cho sử dụng web với các thuật toán nén thông minh của chúng tôi giảm kích thước tệp lên đến 80% trong khi bảo toàn chất lượng hình ảnh. Hoàn hảo cho tối ưu hóa trang web, tệp đính kèm email và chia sẻ mạng xã hội nơi kích thước tệp quan trọng.',
        editor: {
          toggle_sidebar: 'Chuyển Thanh Bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng Thanh Bên',
          search_placeholder: 'Tìm kiếm tệp...',
          files_header: 'Tệp',
          add_files: '+ Thêm',
          format_badge: 'JPG',
          present: 'Trình Chiếu',
          exit_presentation: 'Thoát',
          start_presentation: 'Bắt Đầu Trình Chiếu (Phím Cách/Mũi Tên để điều hướng)',
          print_image: 'In Hình Ảnh',
          download_image: 'Tải Xuống Hình Ảnh',
          previous: 'Trước (←)',
          next: 'Tiếp (→)',
          zoom_out: 'Thu Nhỏ (-)',
          zoom_in: 'Phóng To (+)',
          reset_zoom: 'Nhấp để đặt lại thu phóng',
          rotate: 'Xoay (R)',
          fullscreen: 'Toàn Màn Hình (F)'
        }
      }
    }
  },
  tr: {
    viewers: {
      jpeg: {
        meta_title: 'ÜCRETSİZ JPG Görüntüleyici ve Fotoğraf Dosya Açıcı (Çevrimiçi)',
        meta_description: 'ÜCRETSİZ JPG Görüntüleyici: JPG/JPEG görsel dosyalarını tarayıcınızda anında açın ve görüntüleyin. Kurulum veya kayıt gerekmez. Basit, hızlı ve güvenli.',
        meta_keywords: 'jpeg görüntüleyici, jpg görüntüleyici, görsel görüntüleyici, jpeg dönüştürücü, jpg\'den png\'ye, jpeg çevrimiçi görüntüle, exif görüntüleyici, foto görüntüleyici',
        hero_title: 'Ücretsiz JPG Görüntüleyici',
        hero_subtitle: 'JPEG görsellerini profesyonel araçlarla görüntüle ve analiz et',
        upload_title: 'JPEG Dosyalarını Yükle',
        upload_description: 'JPEG görsellerinizi sürükleyip bırakın veya göz atmak için tıklayın. Her biri 100MB\'a kadar .jpg, .jpeg ve .jpe dosyalarını destekler.',
        upload: {
          drag_drop_text: 'Dosyalarınızı Buraya Sürükleyip Bırakın',
          click_browse_text: 'veya göz atmak için aşağıdaki düğmeye tıklayın',
          choose_files_button: 'Dosya Seç',
          max_files_info: 'Maks. {maxFiles} dosya • Toplam {maxSize}'
        },
        buttons: {
          view_files: 'Dosyaları Görüntüle',
          back: 'Tüm Görüntüleyicilere Dön'
        },
        quick_stats: {
          universal_format: '✓ Evrensel Format',
          fast_processing: '⚡ Hızlı İşleme',
          high_quality: '🎨 Yüksek Kalite'
        },
        features: [
          { title: 'Profesyonel Kalite', description: 'Tam kalite koruması, yakınlaştırma yetenekleri ve detaylı EXIF meta veri incelemesi ile JPEG görsellerini görüntüle' },
          { title: 'Hızlı İşleme', description: 'Anında önizlemeler ve büyük toplu işlemler için optimize edilmiş render ile yıldırım hızında JPEG işleme' },
          { title: 'Format Dönüşümü', description: 'Gelişmiş kalite kontrol ayarları ile JPEG\'i PNG, WebP, PDF ve diğer formatlara dönüştür' }
        ],
        about_title: 'JPEG Formatı Hakkında',
        about_intro: 'JPEG (Joint Photographic Experts Group) dünyada en yaygın kullanılan görsel sıkıştırma formatlarından biridir. 1992\'de geliştirilen JPEG, dosya boyutlarını önemli ölçüde azaltırken kabul edilebilir görsel kalitesini koruyarak kayıplı sıkıştırma kullanır, bu da onu dijital fotoğrafçılık, web görselleri ve depolama odaklı uygulamalar için mükemmel kılar.',
        advantages_title: 'Temel Avantajlar',
        advantages: [
          'Küçük dosya boyutları – Mükemmel sıkıştırma oranları',
          'Evrensel destek – Tüm cihazlarda ve tarayıcılarda çalışır',
          'Ayarlanabilir kalite – Boyut ve kalite arasında denge',
          'Hızlı işleme – Kodlama ve kod çözme için hızlı',
          'Geniş uyumluluk – Tüm görsel yazılımları tarafından desteklenir',
          'EXIF meta verileri – Kamera ayarlarını ve bilgilerini saklar'
        ],
        use_cases_title: 'En İyi Kullanım Durumları',
        use_cases: [
          'Dijital fotoğrafçılık – Birçok renge sahip fotoğraflar için mükemmel',
          'Web görselleri – Web sitesi arka planları ve fotoğraflar için ideal',
          'Sosyal medya – Görselleri paylaşmak için standart format',
          'E-posta ekleri – Kolay paylaşım için küçük boyutlar',
          'Baskı medyası – Gerektiğinde yüksek kaliteli baskı',
          'Mobil fotoğrafçılık – Çoğu kamera için varsayılan format'
        ],
        specs_title: 'JPEG Teknik Özellikleri',
        specs_header_label: 'Özellik',
        specs_header_value: 'Detaylar',
        specs: [
          { label: 'Dosya Uzantıları', value: '.jpg, .jpeg, .jpe' },
          { label: 'MIME Türü', value: 'image/jpeg' },
          { label: 'Sıkıştırma', value: 'DCT (Ayrık Kosinüs Dönüşümü) kullanan kayıplı sıkıştırma' },
          { label: 'Renk Desteği', value: '24-bit RGB, 8-bit Gri Tonlama, CMYK' },
          { label: 'Maksimum Çözünürlük', value: '6,500 × 6,500 piksel' },
          { label: 'Şeffaflık', value: 'Desteklenmiyor' },
          { label: 'Animasyon', value: 'Desteklenmiyor' },
          { label: 'Meta Veriler', value: 'EXIF, IPTC, XMP desteklenir' }
        ],
        seo_title: 'JPEG Görüntüleyici ve Dönüştürücü Özellikleri',
        seo_intro: 'Profesyonel JPEG görüntüleyicimiz ve dönüştürücümüz, standart JPEG (.jpg), JPEG 2000 (.jp2) ve ilerlemeli JPEG dosyaları dahil olmak üzere tüm JPEG varyantları için kapsamlı destek sağlar. İster fotoğrafçı, web geliştiricisi veya grafik tasarımcısı olun, platformumuz profesyonel JPEG işleme için ihtiyacınız olan araçları sunar.',
        seo_viewing_title: 'Gelişmiş Görüntüleme Özellikleri',
        seo_viewing_text: 'Piksel mükemmel doğruluk, %500\'e kadar yakınlaştırma yetenekleri ve dijital kameralardan EXIF verileri dahil detaylı meta veri görüntüleme ile JPEG görsellerini görüntüle. Görüntüleyicimiz RGB, CMYK ve gri tonlama dahil tüm JPEG renk alanlarını destekler, farklı cihazlarda doğru renk temsilini sağlar.',
        seo_conversion_title: 'Profesyonel Dönüştürme Araçları',
        seo_conversion_text: 'Optimal kaliteyi korurken JPEG dosyalarını PNG, WebP, AVIF, TIFF ve diğer formatlara dönüştür. Dönüştürme motorumuz, birden fazla dosyayı aynı anda işlemek için ayarlanabilir kalite ayarları, yeniden boyutlandırma seçenekleri ve toplu işleme yetenekleri sunar.',
        seo_optimization_title: 'Kalite Optimizasyonu',
        seo_optimization_text: 'Dosya boyutlarını %80\'e kadar azaltırken görsel kaliteyi koruyan akıllı sıkıştırma algoritmalarımızla JPEG dosyalarını web kullanımı için optimize edin. Dosya boyutunun önemli olduğu web sitesi optimizasyonu, e-posta ekleri ve sosyal medya paylaşımı için mükemmel.',
        editor: {
          toggle_sidebar: 'Kenar Çubuğunu Aç/Kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar Çubuğunu Kapat',
          search_placeholder: 'Dosyaları ara...',
          files_header: 'Dosyalar',
          add_files: '+ Ekle',
          format_badge: 'JPG',
          present: 'Sun',
          exit_presentation: 'Çık',
          start_presentation: 'Sunumu Başlat (Boşluk/Ok tuşları ile gez)',
          print_image: 'Görseli Yazdır',
          download_image: 'Görseli İndir',
          previous: 'Önceki (←)',
          next: 'Sonraki (→)',
          zoom_out: 'Uzaklaştır (-)',
          zoom_in: 'Yakınlaştır (+)',
          reset_zoom: 'Yakınlaştırmayı sıfırlamak için tıkla',
          rotate: 'Döndür (R)',
          fullscreen: 'Tam Ekran (F)'
        }
      }
    }
  },
  ru: {
    viewers: {
      jpeg: {
        meta_title: 'БЕСПЛАТНЫЙ Просмотрщик JPG и Открыватель Фото Файлов (Онлайн)',
        meta_description: 'БЕСПЛАТНЫЙ Просмотрщик JPG: Открывайте и просматривайте файлы изображений JPG/JPEG мгновенно в вашем браузере. Установка или регистрация не требуется. Простой, быстрый и безопасный.',
        meta_keywords: 'просмотрщик jpeg, просмотрщик jpg, просмотрщик изображений, конвертер jpeg, jpg в png, просмотр jpeg онлайн, просмотрщик exif, просмотрщик фотографий',
        hero_title: 'Бесплатный Просмотрщик JPG',
        hero_subtitle: 'Просматривайте и анализируйте изображения JPEG с профессиональными инструментами',
        upload_title: 'Загрузить Файлы JPEG',
        upload_description: 'Перетащите изображения JPEG или нажмите для просмотра. Поддерживает файлы .jpg, .jpeg и .jpe до 100 МБ каждый.',
        upload: {
          drag_drop_text: 'Перетащите Ваши Файлы Сюда',
          click_browse_text: 'или нажмите кнопку ниже для просмотра',
          choose_files_button: 'Выбрать Файлы',
          max_files_info: 'Макс. {maxFiles} файлов • До {maxSize} Всего'
        },
        buttons: {
          view_files: 'Просмотреть Файлы',
          back: 'Вернуться ко Всем Просмотрщикам'
        },
        quick_stats: {
          universal_format: '✓ Универсальный Формат',
          fast_processing: '⚡ Быстрая Обработка',
          high_quality: '🎨 Высокое Качество'
        },
        features: [
          { title: 'Профессиональное Качество', description: 'Просматривайте изображения JPEG с полным сохранением качества, возможностями масштабирования и детальной проверкой метаданных EXIF' },
          { title: 'Быстрая Обработка', description: 'Молниеносная обработка JPEG с мгновенным предпросмотром и оптимизированным рендерингом для больших пакетов' },
          { title: 'Конвертация Форматов', description: 'Конвертируйте JPEG в PNG, WebP, PDF и другие форматы с расширенными настройками контроля качества' }
        ],
        about_title: 'О Формате JPEG',
        about_intro: 'JPEG (Joint Photographic Experts Group) — один из наиболее широко используемых форматов сжатия изображений в мире. Разработанный в 1992 году, JPEG использует сжатие с потерями для значительного уменьшения размеров файлов при сохранении приемлемого качества изображения, что делает его идеальным для цифровой фотографии, веб-изображений и приложений, ориентированных на экономию места.',
        advantages_title: 'Ключевые Преимущества',
        advantages: [
          'Небольшие размеры файлов – Отличные коэффициенты сжатия',
          'Универсальная поддержка – Работает на всех устройствах и браузерах',
          'Настраиваемое качество – Баланс между размером и качеством',
          'Быстрая обработка – Быстрое кодирование и декодирование',
          'Широкая совместимость – Поддерживается всеми программами для изображений',
          'Метаданные EXIF – Хранит настройки и информацию камеры'
        ],
        use_cases_title: 'Лучшие Случаи Использования',
        use_cases: [
          'Цифровая фотография – Идеально для фотографий с множеством цветов',
          'Веб-изображения – Идеально для фонов веб-сайтов и фотографий',
          'Социальные сети – Стандартный формат для обмена изображениями',
          'Вложения электронной почты – Небольшие размеры для легкого обмена',
          'Печатные СМИ – Высококачественная печать при необходимости',
          'Мобильная фотография – Формат по умолчанию для большинства камер'
        ],
        specs_title: 'Технические Характеристики JPEG',
        specs_header_label: 'Характеристика',
        specs_header_value: 'Детали',
        specs: [
          { label: 'Расширения Файлов', value: '.jpg, .jpeg, .jpe' },
          { label: 'Тип MIME', value: 'image/jpeg' },
          { label: 'Сжатие', value: 'Сжатие с потерями с использованием DCT (Дискретное Косинусное Преобразование)' },
          { label: 'Поддержка Цветов', value: '24-битный RGB, 8-битная Шкала Серого, CMYK' },
          { label: 'Максимальное Разрешение', value: '6,500 × 6,500 пикселей' },
          { label: 'Прозрачность', value: 'Не поддерживается' },
          { label: 'Анимация', value: 'Не поддерживается' },
          { label: 'Метаданные', value: 'EXIF, IPTC, XMP поддерживаются' }
        ],
        seo_title: 'Функции Просмотрщика и Конвертера JPEG',
        seo_intro: 'Наш профессиональный просмотрщик и конвертер JPEG обеспечивает полную поддержку всех вариантов JPEG, включая стандартный JPEG (.jpg), JPEG 2000 (.jp2) и прогрессивные файлы JPEG. Будь вы фотограф, веб-разработчик или графический дизайнер, наша платформа предлагает инструменты, необходимые для профессиональной обработки JPEG.',
        seo_viewing_title: 'Расширенные Функции Просмотра',
        seo_viewing_text: 'Просматривайте изображения JPEG с идеальной точностью пикселей, возможностями масштабирования до 500% и детальным отображением метаданных, включая данные EXIF с цифровых камер. Наш просмотрщик поддерживает все цветовые пространства JPEG, включая RGB, CMYK и шкалу серого, обеспечивая точное представление цветов на разных устройствах.',
        seo_conversion_title: 'Профессиональные Инструменты Конвертации',
        seo_conversion_text: 'Конвертируйте файлы JPEG в PNG, WebP, AVIF, TIFF и другие форматы, сохраняя оптимальное качество. Наш движок конвертации предлагает настраиваемые параметры качества, опции изменения размера и возможности пакетной обработки для одновременной обработки нескольких файлов.',
        seo_optimization_title: 'Оптимизация Качества',
        seo_optimization_text: 'Оптимизируйте файлы JPEG для веб-использования с помощью наших интеллектуальных алгоритмов сжатия, которые уменьшают размеры файлов до 80%, сохраняя визуальное качество. Идеально для оптимизации веб-сайтов, вложений электронной почты и обмена в социальных сетях, где важен размер файла.',
        editor: {
          toggle_sidebar: 'Переключить Боковую Панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть Боковую Панель',
          search_placeholder: 'Поиск файлов...',
          files_header: 'Файлы',
          add_files: '+ Добавить',
          format_badge: 'JPG',
          present: 'Презентация',
          exit_presentation: 'Выход',
          start_presentation: 'Начать Презентацию (Пробел/Стрелки для навигации)',
          print_image: 'Печать Изображения',
          download_image: 'Скачать Изображение',
          previous: 'Предыдущее (←)',
          next: 'Следующее (→)',
          zoom_out: 'Уменьшить (-)',
          zoom_in: 'Увеличить (+)',
          reset_zoom: 'Нажмите для сброса масштаба',
          rotate: 'Повернуть (R)',
          fullscreen: 'Полный Экран (F)'
        }
      }
    }
  },
  ar: {
    viewers: {
      jpeg: {
        meta_title: 'عارض JPG مجاني وفتاح ملفات الصور (عبر الإنترنت)',
        meta_description: 'عارض JPG مجاني: افتح واعرض ملفات صور JPG/JPEG على الفور في متصفحك. لا حاجة للتثبيت أو التسجيل. بسيط وسريع وآمن.',
        meta_keywords: 'عارض jpeg، عارض jpg، عارض الصور، محول jpeg، jpg إلى png، عرض jpeg عبر الإنترنت، عارض exif، عارض الصور',
        hero_title: 'عارض JPG مجاني',
        hero_subtitle: 'اعرض وحلل صور JPEG بأدوات احترافية',
        upload_title: 'رفع ملفات JPEG',
        upload_description: 'اسحب وأفلت صور JPEG الخاصة بك أو انقر للتصفح. يدعم ملفات .jpg و .jpeg و .jpe حتى 100 ميجابايت لكل ملف.',
        upload: {
          drag_drop_text: 'اسحب وأفلت ملفاتك هنا',
          click_browse_text: 'أو انقر على الزر أدناه للتصفح',
          choose_files_button: 'اختر الملفات',
          max_files_info: 'الحد الأقصى {maxFiles} ملف • حتى {maxSize} إجمالي'
        },
        buttons: {
          view_files: 'عرض الملفات',
          back: 'العودة إلى جميع العارضين'
        },
        quick_stats: {
          universal_format: '✓ تنسيق عالمي',
          fast_processing: '⚡ معالجة سريعة',
          high_quality: '🎨 جودة عالية'
        },
        features: [
          { title: 'جودة احترافية', description: 'اعرض صور JPEG مع الحفاظ الكامل على الجودة وإمكانيات التكبير والفحص التفصيلي لبيانات EXIF الوصفية' },
          { title: 'معالجة سريعة', description: 'معالجة سريعة جداً لـ JPEG مع معاينات فورية وعرض محسّن للدفعات الكبيرة' },
          { title: 'تحويل التنسيقات', description: 'حول JPEG إلى PNG و WebP و PDF وتنسيقات أخرى مع إعدادات متقدمة للتحكم في الجودة' }
        ],
        about_title: 'حول تنسيق JPEG',
        about_intro: 'JPEG (Joint Photographic Experts Group) هو أحد أكثر تنسيقات ضغط الصور استخداماً في العالم. تم تطويره في عام 1992، يستخدم JPEG الضغط مع فقدان البيانات لتقليل أحجام الملفات بشكل كبير مع الحفاظ على جودة صورة مقبولة، مما يجعله مثالياً للتصوير الرقمي وصور الويب والتطبيقات التي تهتم بالمساحة التخزينية.',
        advantages_title: 'المزايا الرئيسية',
        advantages: [
          'أحجام ملفات صغيرة – نسب ضغط ممتازة',
          'دعم عالمي – يعمل على جميع الأجهزة والمتصفحات',
          'جودة قابلة للتعديل – توازن بين الحجم والجودة',
          'معالجة سريعة – سريع في الترميز وفك الترميز',
          'توافق واسع – مدعوم من جميع برامج الصور',
          'بيانات EXIF الوصفية – يخزن إعدادات الكاميرا والمعلومات'
        ],
        use_cases_title: 'أفضل حالات الاستخدام',
        use_cases: [
          'التصوير الرقمي – مثالي للصور ذات الألوان الكثيرة',
          'صور الويب – مثالي لخلفيات المواقع والصور',
          'وسائل التواصل الاجتماعي – تنسيق قياسي لمشاركة الصور',
          'مرفقات البريد الإلكتروني – أحجام صغيرة للمشاركة السهلة',
          'الوسائط المطبوعة – طباعة عالية الجودة عند الحاجة',
          'التصوير بالموبايل – التنسيق الافتراضي لمعظم الكاميرات'
        ],
        specs_title: 'المواصفات التقنية لـ JPEG',
        specs_header_label: 'المواصفة',
        specs_header_value: 'التفاصيل',
        specs: [
          { label: 'امتدادات الملفات', value: '.jpg, .jpeg, .jpe' },
          { label: 'نوع MIME', value: 'image/jpeg' },
          { label: 'الضغط', value: 'ضغط مع فقدان البيانات باستخدام DCT (تحويل جيب التمام المنفصل)' },
          { label: 'دعم الألوان', value: 'RGB 24 بت، تدرج رمادي 8 بت، CMYK' },
          { label: 'الحد الأقصى للدقة', value: '6,500 × 6,500 بكسل' },
          { label: 'الشفافية', value: 'غير مدعومة' },
          { label: 'الرسوم المتحركة', value: 'غير مدعومة' },
          { label: 'البيانات الوصفية', value: 'EXIF و IPTC و XMP مدعومة' }
        ],
        seo_title: 'ميزات عارض ومحول JPEG',
        seo_intro: 'يوفر عارض ومحول JPEG الاحترافي لدينا دعماً شاملاً لجميع أنواع JPEG، بما في ذلك JPEG القياسي (.jpg) و JPEG 2000 (.jp2) وملفات JPEG التدريجية. سواء كنت مصوراً أو مطور ويب أو مصمم جرافيك، توفر منصتنا الأدوات التي تحتاجها لمعالجة JPEG الاحترافية.',
        seo_viewing_title: 'ميزات العرض المتقدمة',
        seo_viewing_text: 'اعرض صور JPEG بدقة مثالية للبكسل وإمكانيات تكبير تصل إلى 500% وعرض تفصيلي للبيانات الوصفية، بما في ذلك بيانات EXIF من الكاميرات الرقمية. يدعم عارضنا جميع مساحات ألوان JPEG، بما في ذلك RGB و CMYK والتدرج الرمادي، مما يضمن تمثيلاً دقيقاً للألوان عبر الأجهزة المختلفة.',
        seo_conversion_title: 'أدوات التحويل الاحترافية',
        seo_conversion_text: 'حول ملفات JPEG إلى PNG و WebP و AVIF و TIFF وتنسيقات أخرى مع الحفاظ على الجودة المثلى. يوفر محرك التحويل لدينا إعدادات جودة قابلة للتعديل وخيارات تغيير الحجم وإمكانيات المعالجة المجمعة للتعامل مع ملفات متعددة في وقت واحد.',
        seo_optimization_title: 'تحسين الجودة',
        seo_optimization_text: 'حسّن ملفات JPEG للاستخدام على الويب باستخدام خوارزميات الضغط الذكية لدينا التي تقلل أحجام الملفات بنسبة تصل إلى 80% مع الحفاظ على الجودة البصرية. مثالي لتحسين المواقع ومرفقات البريد الإلكتروني ومشاركة وسائل التواصل الاجتماعي حيث يهم حجم الملف.',
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          files_header: 'الملفات',
          add_files: '+ إضافة',
          format_badge: 'JPG',
          present: 'عرض',
          exit_presentation: 'خروج',
          start_presentation: 'بدء العرض (المسافة/الأسهم للتنقل)',
          print_image: 'طباعة الصورة',
          download_image: 'تحميل الصورة',
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
      jpeg: {
        meta_title: 'โปรแกรมดู JPG ฟรีและเปิดไฟล์รูปภาพ (ออนไลน์)',
        meta_description: 'โปรแกรมดู JPG ฟรี: เปิดและดูไฟล์รูปภาพ JPG/JPEG ทันทีในเบราว์เซอร์ของคุณ ไม่ต้องติดตั้งหรือลงทะเบียน เรียบง่าย เร็วและปลอดภัย',
        meta_keywords: 'โปรแกรมดู jpeg, โปรแกรมดู jpg, โปรแกรมดูรูปภาพ, ตัวแปลง jpeg, jpg เป็น png, ดู jpeg ออนไลน์, โปรแกรมดู exif, โปรแกรมดูรูปถ่าย',
        hero_title: 'โปรแกรมดู JPG ฟรี',
        hero_subtitle: 'ดูและวิเคราะห์รูปภาพ JPEG ด้วยเครื่องมือระดับมืออาชีพ',
        upload_title: 'อัปโหลดไฟล์ JPEG',
        upload_description: 'ลากและวางรูปภาพ JPEG ของคุณหรือคลิกเพื่อเรียกดู รองรับไฟล์ .jpg, .jpeg และ .jpe สูงสุด 100MB ต่อไฟล์',
        upload: {
          drag_drop_text: 'ลากและวางไฟล์ของคุณที่นี่',
          click_browse_text: 'หรือคลิกปุ่มด้านล่างเพื่อเรียกดู',
          choose_files_button: 'เลือกไฟล์',
          max_files_info: 'สูงสุด {maxFiles} ไฟล์ • สูงสุด {maxSize} รวม'
        },
        buttons: {
          view_files: 'ดูไฟล์',
          back: 'กลับไปที่โปรแกรมดูทั้งหมด'
        },
        quick_stats: {
          universal_format: '✓ รูปแบบสากล',
          fast_processing: '⚡ ประมวลผลเร็ว',
          high_quality: '🎨 คุณภาพสูง'
        },
        features: [
          { title: 'คุณภาพระดับมืออาชีพ', description: 'ดูรูปภาพ JPEG ด้วยการรักษาคุณภาพเต็มรูปแบบ ความสามารถในการซูม และการตรวจสอบข้อมูลเมตา EXIF อย่างละเอียด' },
          { title: 'ประมวลผลเร็ว', description: 'การประมวลผล JPEG ที่รวดเร็วมากพร้อมตัวอย่างทันทีและการแสดงผลที่ปรับปรุงแล้วสำหรับไฟล์จำนวนมาก' },
          { title: 'การแปลงรูปแบบ', description: 'แปลง JPEG เป็น PNG, WebP, PDF และรูปแบบอื่นๆ ด้วยการตั้งค่าการควบคุมคุณภาพขั้นสูง' }
        ],
        about_title: 'เกี่ยวกับรูปแบบ JPEG',
        about_intro: 'JPEG (Joint Photographic Experts Group) เป็นรูปแบบการบีบอัดภาพที่ใช้กันอย่างแพร่หลายมากที่สุดในโลก พัฒนาขึ้นในปี 1992 JPEG ใช้การบีบอัดแบบสูญเสียเพื่อลดขนาดไฟล์อย่างมากในขณะที่รักษาคุณภาพภาพที่ยอมรับได้ ทำให้เหมาะสำหรับการถ่ายภาพดิจิทัล รูปภาพเว็บ และแอปพลิเคชันที่คำนึงถึงพื้นที่เก็บข้อมูล',
        advantages_title: 'ข้อดีหลัก',
        advantages: [
          'ขนาดไฟล์เล็ก – อัตราส่วนการบีบอัดที่ยอดเยี่ยม',
          'รองรับสากล – ทำงานบนอุปกรณ์และเบราว์เซอร์ทั้งหมด',
          'คุณภาพปรับได้ – สมดุลระหว่างขนาดและคุณภาพ',
          'ประมวลผลเร็ว – รวดเร็วในการเข้ารหัสและถอดรหัส',
          'ความเข้ากันได้กว้าง – รองรับโดยซอฟต์แวร์รูปภาพทั้งหมด',
          'ข้อมูลเมตา EXIF – เก็บการตั้งค่าและข้อมูลกล้อง'
        ],
        use_cases_title: 'กรณีการใช้งานที่ดีที่สุด',
        use_cases: [
          'การถ่ายภาพดิจิทัล – เหมาะสำหรับภาพที่มีสีมาก',
          'รูปภาพเว็บ – เหมาะสำหรับพื้นหลังเว็บไซต์และรูปภาพ',
          'โซเชียลมีเดีย – รูปแบบมาตรฐานสำหรับการแชร์รูปภาพ',
          'ไฟล์แนบอีเมล – ขนาดเล็กสำหรับการแชร์ที่ง่าย',
          'สื่อสิ่งพิมพ์ – การพิมพ์คุณภาพสูงเมื่อจำเป็น',
          'การถ่ายภาพมือถือ – รูปแบบเริ่มต้นสำหรับกล้องส่วนใหญ่'
        ],
        specs_title: 'ข้อมูลจำเพาะทางเทคนิค JPEG',
        specs_header_label: 'ข้อมูลจำเพาะ',
        specs_header_value: 'รายละเอียด',
        specs: [
          { label: 'นามสกุลไฟล์', value: '.jpg, .jpeg, .jpe' },
          { label: 'ประเภท MIME', value: 'image/jpeg' },
          { label: 'การบีบอัด', value: 'การบีบอัดแบบสูญเสียโดยใช้ DCT (การแปลงโคไซน์แบบไม่ต่อเนื่อง)' },
          { label: 'การรองรับสี', value: 'RGB 24-bit, ระดับสีเทา 8-bit, CMYK' },
          { label: 'ความละเอียดสูงสุด', value: '6,500 × 6,500 พิกเซล' },
          { label: 'ความโปร่งใส', value: 'ไม่รองรับ' },
          { label: 'ภาพเคลื่อนไหว', value: 'ไม่รองรับ' },
          { label: 'ข้อมูลเมตา', value: 'รองรับ EXIF, IPTC, XMP' }
        ],
        seo_title: 'คุณสมบัติโปรแกรมดูและตัวแปลง JPEG',
        seo_intro: 'โปรแกรมดูและตัวแปลง JPEG ระดับมืออาชีพของเรามีการรองรับที่ครอบคลุมสำหรับ JPEG ทุกประเภท รวมถึง JPEG มาตรฐาน (.jpg), JPEG 2000 (.jp2) และไฟล์ JPEG แบบโปรเกรสซีฟ ไม่ว่าคุณจะเป็นช่างภาพ นักพัฒนาเว็บ หรือนักออกแบบกราฟิก แพลตฟอร์มของเรามีเครื่องมือที่คุณต้องการสำหรับการประมวลผล JPEG ระดับมืออาชีพ',
        seo_viewing_title: 'คุณสมบัติการดูขั้นสูง',
        seo_viewing_text: 'ดูรูปภาพ JPEG ด้วยความแม่นยำระดับพิกเซล ความสามารถในการซูมสูงสุด 500% และการแสดงข้อมูลเมตาอย่างละเอียด รวมถึงข้อมูล EXIF จากกล้องดิจิทัล โปรแกรมดูของเรารองรับพื้นที่สี JPEG ทั้งหมด รวมถึง RGB, CMYK และระดับสีเทา เพื่อให้แน่ใจว่าการแสดงสีที่ถูกต้องบนอุปกรณ์ต่างๆ',
        seo_conversion_title: 'เครื่องมือแปลงระดับมืออาชีพ',
        seo_conversion_text: 'แปลงไฟล์ JPEG เป็น PNG, WebP, AVIF, TIFF และรูปแบบอื่นๆ ในขณะที่รักษาคุณภาพที่เหมาะสม เครื่องมือแปลงของเรามีการตั้งค่าคุณภาพที่ปรับได้ ตัวเลือกปรับขนาด และความสามารถในการประมวลผลแบบกลุ่มสำหรับการจัดการไฟล์หลายไฟล์พร้อมกัน',
        seo_optimization_title: 'การปรับปรุงคุณภาพ',
        seo_optimization_text: 'ปรับปรุงไฟล์ JPEG สำหรับการใช้งานบนเว็บด้วยอัลกอริทึมการบีบอัดอัจฉริยะของเราที่ลดขนาดไฟล์ได้สูงสุด 80% ในขณะที่รักษาคุณภาพภาพ เหมาะสำหรับการปรับปรุงเว็บไซต์ ไฟล์แนบอีเมล และการแชร์โซเชียลมีเดียที่ขนาดไฟล์มีความสำคัญ',
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          files_header: 'ไฟล์',
          add_files: '+ เพิ่ม',
          format_badge: 'JPG',
          present: 'นำเสนอ',
          exit_presentation: 'ออก',
          start_presentation: 'เริ่มการนำเสนอ (Space/ลูกศรเพื่อนำทาง)',
          print_image: 'พิมพ์ภาพ',
          download_image: 'ดาวน์โหลดภาพ',
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
      jpeg: {
        meta_title: '無料JPGビューアーと写真ファイルオープナー（オンライン）',
        meta_description: '無料JPGビューアー：ブラウザでJPG/JPEG画像ファイルを即座に開いて表示します。インストールや登録は不要です。シンプル、高速、安全です。',
        meta_keywords: 'jpegビューアー、jpgビューアー、画像ビューアー、jpegコンバーター、jpgからpng、jpegオンライン表示、exifビューアー、写真ビューアー',
        hero_title: '無料JPGビューアー',
        hero_subtitle: 'プロフェッショナルツールでJPEG画像を表示・分析',
        upload_title: 'JPEGファイルをアップロード',
        upload_description: 'JPEG画像をドラッグ＆ドロップするか、クリックして参照します。各ファイル最大100MBの.jpg、.jpeg、.jpeファイルをサポートします。',
        upload: {
          drag_drop_text: 'ファイルをここにドラッグ＆ドロップ',
          click_browse_text: 'または下のボタンをクリックして参照',
          choose_files_button: 'ファイルを選択',
          max_files_info: '最大 {maxFiles} ファイル • 合計 {maxSize}'
        },
        buttons: {
          view_files: 'ファイルを表示',
          back: 'すべてのビューアーに戻る'
        },
        quick_stats: {
          universal_format: '✓ ユニバーサルフォーマット',
          fast_processing: '⚡ 高速処理',
          high_quality: '🎨 高品質'
        },
        features: [
          { title: 'プロフェッショナル品質', description: '完全な品質保持、ズーム機能、詳細なEXIFメタデータ検査でJPEG画像を表示' },
          { title: '高速処理', description: '即座のプレビューと大規模バッチ用に最適化されたレンダリングで超高速JPEG処理' },
          { title: 'フォーマット変換', description: '高度な品質制御設定でJPEGをPNG、WebP、PDFなどの他のフォーマットに変換' }
        ],
        about_title: 'JPEGフォーマットについて',
        about_intro: 'JPEG（Joint Photographic Experts Group）は、世界で最も広く使用されている画像圧縮フォーマットの1つです。1992年に開発され、JPEGは可逆圧縮を使用してファイルサイズを大幅に削減しながら、許容可能な画像品質を維持し、デジタル写真、Web画像、ストレージを意識したアプリケーションに最適です。',
        advantages_title: '主な利点',
        advantages: [
          '小さなファイルサイズ – 優れた圧縮率',
          'ユニバーサルサポート – すべてのデバイスとブラウザで動作',
          '調整可能な品質 – サイズと品質のバランス',
          '高速処理 – エンコードとデコードが高速',
          '幅広い互換性 – すべての画像ソフトウェアでサポート',
          'EXIFメタデータ – カメラ設定と情報を保存'
        ],
        use_cases_title: '最適な使用例',
        use_cases: [
          'デジタル写真 – 多くの色を持つ写真に最適',
          'Web画像 – ウェブサイトの背景と写真に理想的',
          'ソーシャルメディア – 画像共有の標準フォーマット',
          'メール添付 – 簡単な共有のための小さなサイズ',
          '印刷メディア – 必要に応じて高品質印刷',
          'モバイル写真 – ほとんどのカメラのデフォルトフォーマット'
        ],
        specs_title: 'JPEG技術仕様',
        specs_header_label: '仕様',
        specs_header_value: '詳細',
        specs: [
          { label: 'ファイル拡張子', value: '.jpg, .jpeg, .jpe' },
          { label: 'MIMEタイプ', value: 'image/jpeg' },
          { label: '圧縮', value: 'DCT（離散コサイン変換）を使用した可逆圧縮' },
          { label: '色サポート', value: '24ビットRGB、8ビットグレースケール、CMYK' },
          { label: '最大解像度', value: '6,500 × 6,500ピクセル' },
          { label: '透明度', value: 'サポートされていません' },
          { label: 'アニメーション', value: 'サポートされていません' },
          { label: 'メタデータ', value: 'EXIF、IPTC、XMPがサポートされています' }
        ],
        seo_title: 'JPEGビューアーとコンバーター機能',
        seo_intro: 'プロフェッショナルなJPEGビューアーとコンバーターは、標準JPEG（.jpg）、JPEG 2000（.jp2）、プログレッシブJPEGファイルを含むすべてのJPEGバリアントの包括的なサポートを提供します。写真家、Web開発者、グラフィックデザイナーのいずれであっても、当社のプラットフォームはプロフェッショナルなJPEG処理に必要なツールを提供します。',
        seo_viewing_title: '高度な表示機能',
        seo_viewing_text: 'ピクセル完璧な精度、最大500%のズーム機能、デジタルカメラからのEXIFデータを含む詳細なメタデータ表示でJPEG画像を表示します。当社のビューアーは、RGB、CMYK、グレースケールを含むすべてのJPEG色空間をサポートし、異なるデバイス間で正確な色表現を保証します。',
        seo_conversion_title: 'プロフェッショナル変換ツール',
        seo_conversion_text: '最適な品質を維持しながら、JPEGファイルをPNG、WebP、AVIF、TIFF、その他のフォーマットに変換します。当社の変換エンジンは、複数のファイルを同時に処理するための調整可能な品質設定、サイズ変更オプション、バッチ処理機能を提供します。',
        seo_optimization_title: '品質最適化',
        seo_optimization_text: 'ファイルサイズを最大80%削減しながら視覚品質を保持する当社のスマート圧縮アルゴリズムで、Web使用のためにJPEGファイルを最適化します。ファイルサイズが重要なWebサイト最適化、メール添付、ソーシャルメディア共有に最適です。',
        editor: {
          toggle_sidebar: 'サイドバーの切り替え',
          close: '閉じる (Esc)',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          files_header: 'ファイル',
          add_files: '+ 追加',
          format_badge: 'JPG',
          present: 'プレゼン',
          exit_presentation: '終了',
          start_presentation: 'プレゼンテーション開始 (スペース/矢印キーでナビゲート)',
          print_image: '画像を印刷',
          download_image: '画像をダウンロード',
          previous: '前へ (←)',
          next: '次へ (→)',
          zoom_out: 'ズームアウト (-)',
          zoom_in: 'ズームイン (+)',
          reset_zoom: 'クリックしてズームをリセット',
          rotate: '回転 (R)',
          fullscreen: 'フルスクリーン (F)'
        }
      }
    }
  },
  zh: {
    viewers: {
      jpeg: {
        meta_title: '免费JPG查看器和照片文件打开器（在线）',
        meta_description: '免费JPG查看器：在浏览器中即时打开和查看JPG/JPEG图片文件。无需安装或注册。简单、快速且安全。',
        meta_keywords: 'jpeg查看器，jpg查看器，图片查看器，jpeg转换器，jpg转png，在线查看jpeg，exif查看器，照片查看器',
        hero_title: '免费JPG查看器',
        hero_subtitle: '使用专业工具查看和分析JPEG图片',
        upload_title: '上传JPEG文件',
        upload_description: '拖放您的JPEG图片或点击浏览。支持每个文件最大100MB的.jpg、.jpeg和.jpe文件。',
        upload: {
          drag_drop_text: '在此拖放您的文件',
          click_browse_text: '或点击下面的按钮浏览',
          choose_files_button: '选择文件',
          max_files_info: '最多 {maxFiles} 个文件 • 总计 {maxSize}'
        },
        buttons: {
          view_files: '查看文件',
          back: '返回所有查看器'
        },
        quick_stats: {
          universal_format: '✓ 通用格式',
          fast_processing: '⚡ 快速处理',
          high_quality: '🎨 高质量'
        },
        features: [
          { title: '专业质量', description: '以完整质量保持、缩放功能和详细的EXIF元数据检查查看JPEG图片' },
          { title: '快速处理', description: '超快速JPEG处理，具有即时预览和针对大批量优化的渲染' },
          { title: '格式转换', description: '使用高级质量控制设置将JPEG转换为PNG、WebP、PDF和其他格式' }
        ],
        about_title: '关于JPEG格式',
        about_intro: 'JPEG（联合图像专家组）是世界上使用最广泛的图像压缩格式之一。开发于1992年，JPEG使用有损压缩来显著减小文件大小，同时保持可接受的图像质量，使其非常适合数字摄影、网络图像和注重存储的应用程序。',
        advantages_title: '主要优势',
        advantages: [
          '文件体积小 – 出色的压缩比',
          '通用支持 – 适用于所有设备和浏览器',
          '可调质量 – 大小和质量之间的平衡',
          '快速处理 – 编码和解码速度快',
          '广泛兼容性 – 所有图像软件都支持',
          'EXIF元数据 – 存储相机设置和信息'
        ],
        use_cases_title: '最佳使用场景',
        use_cases: [
          '数字摄影 – 适合多色彩照片',
          '网络图像 – 适合网站背景和照片',
          '社交媒体 – 分享图像的标准格式',
          '电子邮件附件 – 小体积便于分享',
          '印刷媒体 – 需要时的高质量打印',
          '移动摄影 – 大多数相机的默认格式'
        ],
        specs_title: 'JPEG技术规格',
        specs_header_label: '规格',
        specs_header_value: '详细信息',
        specs: [
          { label: '文件扩展名', value: '.jpg, .jpeg, .jpe' },
          { label: 'MIME类型', value: 'image/jpeg' },
          { label: '压缩', value: '使用DCT（离散余弦变换）的有损压缩' },
          { label: '颜色支持', value: '24位RGB、8位灰度、CMYK' },
          { label: '最大分辨率', value: '6,500 × 6,500像素' },
          { label: '透明度', value: '不支持' },
          { label: '动画', value: '不支持' },
          { label: '元数据', value: '支持EXIF、IPTC、XMP' }
        ],
        seo_title: 'JPEG查看器和转换器功能',
        seo_intro: '我们的专业JPEG查看器和转换器为所有JPEG变体提供全面支持，包括标准JPEG（.jpg）、JPEG 2000（.jp2）和渐进式JPEG文件。无论您是摄影师、网页开发人员还是平面设计师，我们的平台都提供专业JPEG处理所需的工具。',
        seo_viewing_title: '高级查看功能',
        seo_viewing_text: '以像素级完美精度、高达500%的缩放功能和详细的元数据显示（包括来自数码相机的EXIF数据）查看JPEG图片。我们的查看器支持所有JPEG色彩空间，包括RGB、CMYK和灰度，确保在不同设备上准确的颜色表示。',
        seo_conversion_title: '专业转换工具',
        seo_conversion_text: '在保持最佳质量的同时，将JPEG文件转换为PNG、WebP、AVIF、TIFF和其他格式。我们的转换引擎提供可调的质量设置、调整大小选项和批处理功能，可同时处理多个文件。',
        seo_optimization_title: '质量优化',
        seo_optimization_text: '使用我们的智能压缩算法优化JPEG文件用于网络使用，该算法可将文件大小减少高达80%，同时保持视觉质量。非常适合网站优化、电子邮件附件和社交媒体分享，其中文件大小很重要。',
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭 (Esc)',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          files_header: '文件',
          add_files: '+ 添加',
          format_badge: 'JPG',
          present: '演示',
          exit_presentation: '退出',
          start_presentation: '开始演示 (空格/箭头键导航)',
          print_image: '打印图片',
          download_image: '下载图片',
          previous: '上一个 (←)',
          next: '下一个 (→)',
          zoom_out: '缩小 (-)',
          zoom_in: '放大 (+)',
          reset_zoom: '点击重置缩放',
          rotate: '旋转 (R)',
          fullscreen: '全屏 (F)'
        }
      }
    }
  },
  id: {
    viewers: {
      jpeg: {
        meta_title: 'PENAMPIL JPG GRATIS dan Pembuka File Foto (Online)',
        meta_description: 'PENAMPIL JPG GRATIS: Buka dan lihat file gambar JPG/JPEG secara instan di browser Anda. Tidak perlu instalasi atau registrasi. Sederhana, cepat dan aman.',
        meta_keywords: 'penampil jpeg, penampil jpg, penampil gambar, konverter jpeg, jpg ke png, lihat jpeg online, penampil exif, penampil foto',
        hero_title: 'Penampil JPG Gratis',
        hero_subtitle: 'Lihat dan analisis gambar JPEG dengan alat profesional',
        upload_title: 'Unggah File JPEG',
        upload_description: 'Seret dan lepas gambar JPEG Anda atau klik untuk menjelajah. Mendukung file .jpg, .jpeg, dan .jpe hingga 100MB per file.',
        upload: {
          drag_drop_text: 'Seret dan Lepas File Anda Di Sini',
          click_browse_text: 'atau klik tombol di bawah untuk menjelajah',
          choose_files_button: 'Pilih File',
          max_files_info: 'Maks. {maxFiles} file • Hingga {maxSize} Total'
        },
        buttons: {
          view_files: 'Lihat File',
          back: 'Kembali ke Semua Penampil'
        },
        quick_stats: {
          universal_format: '✓ Format Universal',
          fast_processing: '⚡ Pemrosesan Cepat',
          high_quality: '🎨 Kualitas Tinggi'
        },
        features: [
          { title: 'Kualitas Profesional', description: 'Lihat gambar JPEG dengan pelestarian kualitas penuh, kemampuan zoom dan pemeriksaan metadata EXIF yang detail' },
          { title: 'Pemrosesan Cepat', description: 'Pemrosesan JPEG super cepat dengan pratinjau instan dan rendering yang dioptimalkan untuk batch besar' },
          { title: 'Konversi Format', description: 'Konversi JPEG ke PNG, WebP, PDF dan format lain dengan pengaturan kontrol kualitas lanjutan' }
        ],
        about_title: 'Tentang Format JPEG',
        about_intro: 'JPEG (Joint Photographic Experts Group) adalah salah satu format kompresi gambar yang paling banyak digunakan di dunia. Dikembangkan pada tahun 1992, JPEG menggunakan kompresi lossy untuk secara signifikan mengurangi ukuran file sambil mempertahankan kualitas gambar yang dapat diterima, menjadikannya sempurna untuk fotografi digital, gambar web, dan aplikasi yang mengutamakan penyimpanan.',
        advantages_title: 'Keuntungan Utama',
        advantages: [
          'Ukuran file kecil – Rasio kompresi yang sangat baik',
          'Dukungan universal – Bekerja di semua perangkat dan browser',
          'Kualitas dapat disesuaikan – Keseimbangan antara ukuran dan kualitas',
          'Pemrosesan cepat – Cepat untuk mengkodekan dan mendekodekan',
          'Kompatibilitas luas – Didukung oleh semua perangkat lunak gambar',
          'Metadata EXIF – Menyimpan pengaturan dan informasi kamera'
        ],
        use_cases_title: 'Kasus Penggunaan Terbaik',
        use_cases: [
          'Fotografi digital – Sempurna untuk foto dengan banyak warna',
          'Gambar web – Ideal untuk latar belakang situs web dan foto',
          'Media sosial – Format standar untuk berbagi gambar',
          'Lampiran email – Ukuran kecil untuk berbagi yang mudah',
          'Media cetak – Pencetakan berkualitas tinggi saat diperlukan',
          'Fotografi seluler – Format default untuk sebagian besar kamera'
        ],
        specs_title: 'Spesifikasi Teknis JPEG',
        specs_header_label: 'Spesifikasi',
        specs_header_value: 'Detail',
        specs: [
          { label: 'Ekstensi File', value: '.jpg, .jpeg, .jpe' },
          { label: 'Tipe MIME', value: 'image/jpeg' },
          { label: 'Kompresi', value: 'Kompresi lossy menggunakan DCT (Transformasi Kosinus Diskrit)' },
          { label: 'Dukungan Warna', value: 'RGB 24-bit, Skala Abu-abu 8-bit, CMYK' },
          { label: 'Resolusi Maksimum', value: '6,500 × 6,500 piksel' },
          { label: 'Transparansi', value: 'Tidak didukung' },
          { label: 'Animasi', value: 'Tidak didukung' },
          { label: 'Metadata', value: 'EXIF, IPTC, XMP didukung' }
        ],
        seo_title: 'Fitur Penampil dan Konverter JPEG',
        seo_intro: 'Penampil dan konverter JPEG profesional kami menyediakan dukungan komprehensif untuk semua varian JPEG termasuk JPEG standar (.jpg), JPEG 2000 (.jp2), dan file JPEG progresif. Baik Anda seorang fotografer, pengembang web, atau desainer grafis, platform kami menawarkan alat yang Anda butuhkan untuk pemrosesan JPEG profesional.',
        seo_viewing_title: 'Fitur Tampilan Lanjutan',
        seo_viewing_text: 'Lihat gambar JPEG dengan akurasi sempurna piksel, kemampuan zoom hingga 500% dan tampilan metadata detail termasuk data EXIF dari kamera digital. Penampil kami mendukung semua ruang warna JPEG termasuk RGB, CMYK dan skala abu-abu, memastikan representasi warna yang akurat di berbagai perangkat.',
        seo_conversion_title: 'Alat Konversi Profesional',
        seo_conversion_text: 'Konversi file JPEG ke PNG, WebP, AVIF, TIFF dan format lain sambil mempertahankan kualitas optimal. Mesin konversi kami menawarkan pengaturan kualitas yang dapat disesuaikan, opsi pengubahan ukuran dan kemampuan pemrosesan batch untuk menangani beberapa file secara bersamaan.',
        seo_optimization_title: 'Optimasi Kualitas',
        seo_optimization_text: 'Optimalkan file JPEG untuk penggunaan web dengan algoritma kompresi cerdas kami yang mengurangi ukuran file hingga 80% sambil mempertahankan kualitas visual. Sempurna untuk optimasi situs web, lampiran email dan berbagi media sosial di mana ukuran file penting.',
        editor: {
          toggle_sidebar: 'Alihkan Sidebar',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup Sidebar',
          search_placeholder: 'Cari file...',
          files_header: 'File',
          add_files: '+ Tambah',
          format_badge: 'JPG',
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
      jpeg: {
        meta_title: 'GRATIS JPG-visare och Foto Filöppnare (Online)',
        meta_description: 'GRATIS JPG-visare: Öppna och visa JPG/JPEG bildfiler omedelbart i din webbläsare. Ingen installation eller registrering krävs. Enkelt, snabbt och säkert.',
        meta_keywords: 'jpeg-visare, jpg-visare, bildvisare, jpeg-konverterare, jpg till png, visa jpeg online, exif-visare, fotovisare',
        hero_title: 'Gratis JPG-visare',
        hero_subtitle: 'Visa och analysera JPEG-bilder med professionella verktyg',
        upload_title: 'Ladda Upp JPEG-filer',
        upload_description: 'Dra och släpp dina JPEG-bilder eller klicka för att bläddra. Stöder .jpg, .jpeg och .jpe-filer upp till 100MB vardera.',
        upload: {
          drag_drop_text: 'Dra och Släpp Dina Filer Här',
          click_browse_text: 'eller klicka på knappen nedan för att bläddra',
          choose_files_button: 'Välj Filer',
          max_files_info: 'Max {maxFiles} filer • Upp till {maxSize} Totalt'
        },
        buttons: {
          view_files: 'Visa Filer',
          back: 'Tillbaka till Alla Visare'
        },
        quick_stats: {
          universal_format: '✓ Universellt Format',
          fast_processing: '⚡ Snabb Bearbetning',
          high_quality: '🎨 Hög Kvalitet'
        },
        features: [
          { title: 'Professionell Kvalitet', description: 'Visa JPEG-bilder med full kvalitetsbevarande, zoomfunktioner och detaljerad EXIF-metadatainspektion' },
          { title: 'Snabb Bearbetning', description: 'Blixtsnabb JPEG-bearbetning med omedelbar förhandsvisning och optimerad rendering för stora batchar' },
          { title: 'Formatkonvertering', description: 'Konvertera JPEG till PNG, WebP, PDF och andra format med avancerade kvalitetskontrollinställningar' }
        ],
        about_title: 'Om JPEG-formatet',
        about_intro: 'JPEG (Joint Photographic Experts Group) är ett av de mest använda bildkomprimeringsformaten i världen. Utvecklat 1992 använder JPEG förlustkomprimering för att avsevärt minska filstorlekar samtidigt som en acceptabel bildkvalitet bibehålls, vilket gör det perfekt för digital fotografering, webbbilder och lagringsmedvetna applikationer.',
        advantages_title: 'Viktiga Fördelar',
        advantages: [
          'Små filstorlekar – Utmärkta komprimeringsförhållanden',
          'Universellt stöd – Fungerar på alla enheter och webbläsare',
          'Justerbar kvalitet – Balans mellan storlek och kvalitet',
          'Snabb bearbetning – Snabb att koda och avkoda',
          'Bred kompatibilitet – Stöds av all bildprogramvara',
          'EXIF-metadata – Lagrar kamerainställningar och information'
        ],
        use_cases_title: 'Bästa Användningsfall',
        use_cases: [
          'Digital fotografering – Perfekt för foton med många färger',
          'Webbbilder – Ideal för webbplatsbakgrunder och foton',
          'Sociala medier – Standardformat för att dela bilder',
          'E-postbilagor – Små storlekar för enkel delning',
          'Tryckmedia – Högkvalitativ utskrift vid behov',
          'Mobil fotografering – Standardformat för de flesta kameror'
        ],
        specs_title: 'JPEG Tekniska Specifikationer',
        specs_header_label: 'Specifikation',
        specs_header_value: 'Detaljer',
        specs: [
          { label: 'Filändelser', value: '.jpg, .jpeg, .jpe' },
          { label: 'MIME-typ', value: 'image/jpeg' },
          { label: 'Komprimering', value: 'Förlustkomprimering med DCT (Diskret Cosinustransform)' },
          { label: 'Färgstöd', value: '24-bit RGB, 8-bit Gråskala, CMYK' },
          { label: 'Maximal Upplösning', value: '6,500 × 6,500 pixlar' },
          { label: 'Transparens', value: 'Stöds inte' },
          { label: 'Animation', value: 'Stöds inte' },
          { label: 'Metadata', value: 'EXIF, IPTC, XMP stöds' }
        ],
        seo_title: 'JPEG-visare och Konverteringsfunktioner',
        seo_intro: 'Vår professionella JPEG-visare och konverterare ger omfattande stöd för alla JPEG-varianter inklusive standard JPEG (.jpg), JPEG 2000 (.jp2) och progressiva JPEG-filer. Oavsett om du är fotograf, webbutvecklare eller grafisk formgivare erbjuder vår plattform verktygen du behöver för professionell JPEG-bearbetning.',
        seo_viewing_title: 'Avancerade Visningsfunktioner',
        seo_viewing_text: 'Visa JPEG-bilder med pixelperfekt noggrannhet, zoomfunktioner upp till 500% och detaljerad metadatavisning inklusive EXIF-data från digitalkameror. Vår visare stöder alla JPEG-färgrymder inklusive RGB, CMYK och gråskala, vilket säkerställer korrekt färgrepresentation på olika enheter.',
        seo_conversion_title: 'Professionella Konverteringsverktyg',
        seo_conversion_text: 'Konvertera JPEG-filer till PNG, WebP, AVIF, TIFF och andra format samtidigt som optimal kvalitet bibehålls. Vår konverteringsmotor erbjuder justerbara kvalitetsinställningar, storleksändringsalternativ och batchbearbetningsfunktioner för att hantera flera filer samtidigt.',
        seo_optimization_title: 'Kvalitetsoptimering',
        seo_optimization_text: 'Optimalisera JPEG-filer för webbanvändning med våra smarta komprimeringsalgoritmer som minskar filstorlekar med upp till 80% samtidigt som visuell kvalitet bevaras. Perfekt för webbplatsoptimering, e-postbilagor och sociala medier-delning där filstorlek är viktigt.',
        editor: {
          toggle_sidebar: 'Växla Sidofält',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng Sidofält',
          search_placeholder: 'Sök filer...',
          files_header: 'Filer',
          add_files: '+ Lägg till',
          format_badge: 'JPG',
          present: 'Presentera',
          exit_presentation: 'Avsluta',
          start_presentation: 'Starta Presentation (Mellanslag/Pilar för navigering)',
          print_image: 'Skriv Ut Bild',
          download_image: 'Ladda Ner Bild',
          previous: 'Föregående (←)',
          next: 'Nästa (→)',
          zoom_out: 'Zooma Ut (-)',
          zoom_in: 'Zooma In (+)',
          reset_zoom: 'Klicka för att återställa zoom',
          rotate: 'Rotera (R)',
          fullscreen: 'Helskärm (F)'
        }
      }
    }
  }
};

import i18n from '../../../i18n';

Object.entries(resources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export default resources;

