import i18n from '../../../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type PNGViewerTranslations = {
  viewers: {
    png: {
      meta_title: string;
      meta_description: string;
      meta_keywords: string;
      hero_title: string;
      hero_subtitle: string;
      upload_title: string;
      upload_description: string;
      buttons: {
        view_files: string;
        back: string;
      };
      quick_stats: {
        lossless_quality: string;
        transparency_support: string;
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

const resources: Record<string, PNGViewerTranslations> = {
  en: {
    viewers: {
      png: {
        meta_title: 'Free PNG Viewer - View PNG Images Online',
        meta_description: 'Free PNG viewer. View PNG images online with transparency support, lossless quality, and professional tools. No registration required.',
        meta_keywords: 'PNG viewer, PNG to JPG, PNG to WebP, image viewer, transparency, lossless compression, alpha channel, batch processing',
        hero_title: 'Free PNG Viewer',
        hero_subtitle: 'View PNG images with lossless quality and transparency support',
        upload_title: 'Upload PNG Files',
        upload_description: 'Drag and drop your PNG images or click to browse. Supports transparency and lossless quality up to 100MB each.',
        buttons: {
          view_files: 'View Files',
          back: 'Back to All Viewers'
        },
        quick_stats: {
          lossless_quality: '✓ Lossless Quality',
          transparency_support: '🎨 Transparency Support',
          fast_processing: '⚡ Fast Processing'
        },
        features: [
          { title: 'Lossless Quality', description: 'View PNG images with perfect quality preservation, no compression artifacts, and full color depth' },
          { title: 'Transparency Support', description: 'Full alpha channel support for transparent backgrounds, perfect for graphics and logos' },
          { title: 'Professional Tools', description: 'Advanced viewing tools with zoom, rotation, and detailed image analysis capabilities' }
        ],
        about_title: 'About PNG Format',
        about_intro: 'PNG (Portable Network Graphics) is a raster graphics file format that supports lossless data compression. PNG was created as an improved, non-patented replacement for Graphics Interchange Format (GIF). PNG supports palette-based images, grayscale images, and full-color non-palette-based RGB/RGBA images.',
        advantages_title: 'Key Advantages',
        advantages: [
          'Lossless compression – No quality loss',
          'Transparency support – Alpha channel for transparent backgrounds',
          'Wide color support – 24-bit RGB and 48-bit color depth',
          'Universal compatibility – Works on all platforms',
          'Metadata support – EXIF and other metadata',
          'Progressive display – Can display while loading'
        ],
        use_cases_title: 'Best Use Cases',
        use_cases: [
          'Web graphics – Logos and icons with transparency',
          'Digital art – High-quality illustrations',
          'Screenshots – Perfect quality preservation',
          'UI design – Interface elements with transparency',
          'Print graphics – High-resolution images',
          'Medical imaging – Lossless quality required'
        ],
        specs_title: 'PNG Technical Specifications',
        specs_header_label: 'Specification',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.png' },
          { label: 'MIME Type', value: 'image/png' },
          { label: 'Compression', value: 'Lossless compression (DEFLATE)' },
          { label: 'Color Support', value: '24-bit RGB, 48-bit RGB, 8-bit Grayscale, Palette-based' },
          { label: 'Transparency', value: 'Alpha channel support (RGBA)' },
          { label: 'Animation', value: 'APNG (Animated PNG) support' },
          { label: 'Maximum Resolution', value: 'No practical limit' },
          { label: 'Metadata', value: 'EXIF, tEXt, zTXt, iTXt chunks supported' }
        ],
        seo_title: 'PNG Viewer and Converter Features',
        seo_intro: 'Our professional PNG viewer provides comprehensive support for PNG images including lossless quality viewing, transparency support, and advanced analysis tools. Whether you\'re a designer, developer, or content creator, our platform offers the tools you need for professional PNG image handling.',
        seo_viewing_title: 'Advanced Viewing Features',
        seo_viewing_text: 'View PNG images with pixel-perfect accuracy, zoom capabilities, and detailed metadata display. Our viewer supports all PNG features including transparency, alpha channels, and both palette-based and true-color images, ensuring accurate representation of your graphics.',
        seo_conversion_title: 'Professional Conversion Tools',
        seo_conversion_text: 'Convert PNG files to JPEG, WebP, GIF, and other formats while maintaining optimal quality. Our conversion engine offers adjustable quality settings, transparency preservation, and batch processing capabilities for handling multiple files simultaneously.',
        seo_optimization_title: 'Quality Optimization',
        seo_optimization_text: 'Optimize PNG files for web and print use with our smart tools that preserve lossless quality while managing file sizes. Perfect for website optimization, digital art, and professional graphics where quality and transparency matter.',
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          files_header: 'Files',
          add_files: '+ Add',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Darmowy Podgląd PNG - Oglądaj Obrazy PNG Online',
        meta_description: 'Darmowy podgląd PNG. Wyświetlaj obrazy PNG online z obsługą przezroczystości, jakości bezstratnej i profesjonalnymi narzędziami. Bez rejestracji.',
        meta_keywords: 'podgląd PNG, PNG do JPG, PNG do WebP, podgląd obrazów, przezroczystość, kompresja bezstratna, kanał alfa, przetwarzanie wsadowe',
        hero_title: 'Darmowy Podgląd PNG',
        hero_subtitle: 'Oglądaj obrazy PNG z jakością bezstratną i obsługą przezroczystości',
        upload_title: 'Prześlij pliki PNG',
        upload_description: 'Przeciągnij i upuść swoje obrazy PNG lub kliknij, aby je wybrać. Obsługuje przezroczystość i jakość bezstratną do 100 MB każdy.',
        buttons: {
          view_files: 'Wyświetl Pliki',
          back: 'Powrót do wszystkich podglądów'
        },
        quick_stats: {
          lossless_quality: '✓ Jakość Bezstratna',
          transparency_support: '🎨 Obsługa Przezroczystości',
          fast_processing: '⚡ Szybkie Przetwarzanie'
        },
        features: [
          { title: 'Jakość bezstratna', description: 'Oglądaj obrazy PNG z doskonałym zachowaniem jakości, bez artefaktów kompresji i pełną głębią kolorów' },
          { title: 'Obsługa przezroczystości', description: 'Pełne wsparcie kanału alfa dla przezroczystych tła, idealne do grafiki i logo' },
          { title: 'Narzędzia profesjonalne', description: 'Zaawansowane narzędzia podglądu z powiększaniem, obracaniem i szczegółową analizą obrazu' }
        ],
        about_title: 'Informacje o formacie PNG',
        about_intro: 'PNG (Portable Network Graphics) to format plików grafiki rastrowej, który obsługuje bezstratną kompresję danych. PNG został stworzony jako ulepszona, nieopatentowana alternatywa dla formatu Graphics Interchange Format (GIF). PNG obsługuje obrazy oparte na palecie, obrazy w skali szarości oraz pełnokolorowe obrazy RGB/RGBA nieoparte na palecie.',
        advantages_title: 'Najważniejsze zalety',
        advantages: [
          'Kompresja bezstratna – Brak utraty jakości',
          'Obsługa przezroczystości – Kanał alfa dla przezroczystych tła',
          'Szerokie wsparcie kolorów – 24-bitowy RGB i 48-bitowa głębia kolorów',
          'Uniwersalna kompatybilność – Działa na wszystkich platformach',
          'Obsługa metadanych – EXIF i inne metadane',
          'Wyświetlanie progresywne – Może wyświetlać podczas ładowania'
        ],
        use_cases_title: 'Najlepsze zastosowania',
        use_cases: [
          'Grafika internetowa – Loga i ikony z przezroczystością',
          'Sztuka cyfrowa – Ilustracje wysokiej jakości',
          'Zrzuty ekranu – Doskonałe zachowanie jakości',
          'Projektowanie UI – Elementy interfejsu z przezroczystością',
          'Grafika do druku – Obrazy wysokiej rozdzielczości',
          'Obrazowanie medyczne – Wymagana jakość bezstratna'
        ],
        specs_title: 'Specyfikacja techniczna PNG',
        specs_header_label: 'Parametr',
        specs_header_value: 'Wartość',
        specs: [
          { label: 'Rozszerzenie pliku', value: '.png' },
          { label: 'Typ MIME', value: 'image/png' },
          { label: 'Kompresja', value: 'Kompresja bezstratna (DEFLATE)' },
          { label: 'Obsługa kolorów', value: '24-bitowy RGB, 48-bitowy RGB, 8-bitowa skala szarości, oparte na palecie' },
          { label: 'Przezroczystość', value: 'Obsługa kanału alfa (RGBA)' },
          { label: 'Animacja', value: 'Obsługa APNG (Animated PNG)' },
          { label: 'Maksymalna rozdzielczość', value: 'Brak praktycznego limitu' },
          { label: 'Metadane', value: 'Obsługiwane fragmenty EXIF, tEXt, zTXt, iTXt' }
        ],
        seo_title: 'Funkcje przeglądarki i konwertera PNG',
        seo_intro: 'Nasz profesjonalny podgląd PNG zapewnia kompleksowe wsparcie dla obrazów PNG, w tym podgląd jakości bezstratnej, obsługę przezroczystości i zaawansowane narzędzia analizy. Niezależnie od tego, czy jesteś projektantem, programistą czy twórcą treści, nasza platforma oferuje narzędzia potrzebne do profesjonalnej obsługi obrazów PNG.',
        seo_viewing_title: 'Zaawansowane funkcje podglądu',
        seo_viewing_text: 'Przeglądaj obrazy PNG z dokładnością do piksela, możliwościami powiększania i szczegółowym wyświetlaniem metadanych. Nasz podgląd obsługuje wszystkie funkcje PNG, w tym przezroczystość, kanały alfa oraz obrazy oparte na palecie i w pełnym kolorze, zapewniając dokładną reprezentację Twojej grafiki.',
        seo_conversion_title: 'Profesjonalne narzędzia konwersji',
        seo_conversion_text: 'Konwertuj pliki PNG do JPEG, WebP, GIF i innych formatów przy zachowaniu optymalnej jakości. Nasz silnik konwersji oferuje regulowane ustawienia jakości, zachowanie przezroczystości i możliwości przetwarzania wsadowego do obsługi wielu plików jednocześnie.',
        seo_optimization_title: 'Optymalizacja jakości',
        seo_optimization_text: 'Optymalizuj pliki PNG do użycia w internecie i druku dzięki naszym inteligentnym narzędziom, które zachowują jakość bezstratną przy jednoczesnym zarządzaniu rozmiarami plików. Idealne rozwiązanie do optymalizacji stron internetowych, sztuki cyfrowej i profesjonalnej grafiki, gdzie liczą się jakość i przezroczystość.',
        editor: {
          toggle_sidebar: 'Przełącz Panel',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij Panel',
          search_placeholder: 'Szukaj plików...',
          files_header: 'Pliki',
          add_files: '+ Dodaj',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Kostenloser PNG Viewer – PNG-Bilder Online Anzeigen',
        meta_description: 'Kostenloser PNG-Viewer. Zeigen Sie PNG-Bilder online mit Transparenzunterstützung, verlustfreier Qualität und professionellen Werkzeugen an. Keine Registrierung erforderlich.',
        meta_keywords: 'PNG Viewer, PNG zu JPG, PNG zu WebP, Bildbetrachter, Transparenz, verlustfreie Kompression, Alphakanal, Stapelverarbeitung',
        hero_title: 'Kostenloser PNG-Viewer',
        hero_subtitle: 'PNG-Bilder mit verlustfreier Qualität und Transparenzunterstützung anzeigen',
        upload_title: 'PNG-Dateien hochladen',
        upload_description: 'Ziehen Sie Ihre PNG-Bilder hierher oder klicken Sie zum Auswählen. Unterstützt Transparenz und verlustfreie Qualität bis zu 100 MB pro Datei.',
        buttons: {
          view_files: 'Dateien anzeigen',
          back: 'Zurück zu allen Viewern'
        },
        quick_stats: {
          lossless_quality: '✓ Verlustfreie Qualität',
          transparency_support: '🎨 Transparenzunterstützung',
          fast_processing: '⚡ Schnelle Verarbeitung'
        },
        features: [
          { title: 'Verlustfreie Qualität', description: 'PNG-Bilder mit perfekter Qualitätserhaltung, ohne Komprimierungsartefakte und voller Farbtiefe anzeigen' },
          { title: 'Transparenzunterstützung', description: 'Vollständige Alphakanal-Unterstützung für transparente Hintergründe, perfekt für Grafiken und Logos' },
          { title: 'Professionelle Werkzeuge', description: 'Erweiterte Anzeigewerkzeuge mit Zoom, Rotation und detaillierten Bildanalysefunktionen' }
        ],
        about_title: 'Informationen zum PNG-Format',
        about_intro: 'PNG (Portable Network Graphics) ist ein Rastergrafik-Dateiformat, das verlustfreie Datenkompression unterstützt. PNG wurde als verbesserte, nicht patentierte Alternative zum Graphics Interchange Format (GIF) erstellt. PNG unterstützt palettenbasierte Bilder, Graustufenbilder und Vollfarb-RGB/RGBA-Bilder ohne Palette.',
        advantages_title: 'Wichtigste Vorteile',
        advantages: [
          'Verlustfreie Kompression – Keine Qualitätsverluste',
          'Transparenzunterstützung – Alphakanal für transparente Hintergründe',
          'Breite Farbunterstützung – 24-Bit RGB und 48-Bit Farbtiefe',
          'Universelle Kompatibilität – Funktioniert auf allen Plattformen',
          'Metadatenunterstützung – EXIF und andere Metadaten',
          'Progressive Anzeige – Kann während des Ladens angezeigt werden'
        ],
        use_cases_title: 'Beste Anwendungsfälle',
        use_cases: [
          'Web-Grafiken – Logos und Symbole mit Transparenz',
          'Digitale Kunst – Hochwertige Illustrationen',
          'Screenshots – Perfekte Qualitätserhaltung',
          'UI-Design – Interface-Elemente mit Transparenz',
          'Druckgrafik – Hochauflösende Bilder',
          'Medizinische Bildgebung – Verlustfreie Qualität erforderlich'
        ],
        specs_title: 'Technische PNG-Spezifikationen',
        specs_header_label: 'Eigenschaft',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateierweiterung', value: '.png' },
          { label: 'MIME-Typ', value: 'image/png' },
          { label: 'Kompression', value: 'Verlustfreie Kompression (DEFLATE)' },
          { label: 'Farbunterstützung', value: '24-Bit RGB, 48-Bit RGB, 8-Bit Graustufen, Palettenbasiert' },
          { label: 'Transparenz', value: 'Alphakanal-Unterstützung (RGBA)' },
          { label: 'Animation', value: 'APNG (Animated PNG) Unterstützung' },
          { label: 'Maximale Auflösung', value: 'Kein praktisches Limit' },
          { label: 'Metadaten', value: 'EXIF, tEXt, zTXt, iTXt Chunks unterstützt' }
        ],
        seo_title: 'PNG-Viewer und Konverter-Funktionen',
        seo_intro: 'Unser professioneller PNG-Viewer bietet umfassende Unterstützung für PNG-Bilder, einschließlich verlustfreier Qualitätsanzeige, Transparenzunterstützung und erweiterte Analysetools. Egal ob Sie Designer, Entwickler oder Content-Ersteller sind, unsere Plattform bietet die Tools, die Sie für professionelle PNG-Bildbearbeitung benötigen.',
        seo_viewing_title: 'Erweiterte Anzeigefunktionen',
        seo_viewing_text: 'Zeigen Sie PNG-Bilder mit pixelgenauer Genauigkeit, Zoom-Funktionen und detaillierter Metadatenanzeige. Unser Viewer unterstützt alle PNG-Funktionen, einschließlich Transparenz, Alphakanäle und sowohl palettenbasierte als auch echte Farbbilder, um eine genaue Darstellung Ihrer Grafiken zu gewährleisten.',
        seo_conversion_title: 'Professionelle Konvertierungstools',
        seo_conversion_text: 'Konvertieren Sie PNG-Dateien in JPEG, WebP, GIF und andere Formate bei optimaler Qualität. Unsere Konvertierungs-Engine bietet einstellbare Qualitätseinstellungen, Transparenzerhaltung und Stapelverarbeitungsfunktionen für die gleichzeitige Bearbeitung mehrerer Dateien.',
        seo_optimization_title: 'Qualitätsoptimierung',
        seo_optimization_text: 'Optimieren Sie PNG-Dateien für Web- und Drucknutzung mit unseren intelligenten Tools, die verlustfreie Qualität erhalten und gleichzeitig Dateigrößen verwalten. Perfekt für Website-Optimierung, digitale Kunst und professionelle Grafiken, wo Qualität und Transparenz wichtig sind.',
        editor: {
          toggle_sidebar: 'Sidebar Umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Sidebar Schließen',
          search_placeholder: 'Dateien suchen...',
          files_header: 'Dateien',
          add_files: '+ Hinzufügen',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Visor PNG Gratis - Ver Imágenes PNG Online',
        meta_description: 'Visor PNG gratis. Ver imágenes PNG online con soporte de transparencia, calidad sin pérdidas y herramientas profesionales. No se requiere registro.',
        meta_keywords: 'visor PNG, PNG a JPG, PNG a WebP, visor de imágenes, transparencia, compresión sin pérdidas, canal alfa, procesamiento por lotes',
        hero_title: 'Visor PNG Gratis',
        hero_subtitle: 'Ver imágenes PNG con calidad sin pérdidas y soporte de transparencia',
        upload_title: 'Subir Archivos PNG',
        upload_description: 'Arrastra y suelta tus imágenes PNG o haz clic para explorar. Soporta transparencia y calidad sin pérdidas de hasta 100MB cada uno.',
        buttons: {
          view_files: 'Ver Archivos',
          back: 'Volver a Todos los Visores'
        },
        quick_stats: {
          lossless_quality: '✓ Calidad Sin Pérdidas',
          transparency_support: '🎨 Soporte de Transparencia',
          fast_processing: '⚡ Procesamiento Rápido'
        },
        features: [
          { title: 'Calidad Sin Pérdidas', description: 'Ver imágenes PNG con preservación perfecta de calidad, sin artefactos de compresión y profundidad de color completa' },
          { title: 'Soporte de Transparencia', description: 'Soporte completo de canal alfa para fondos transparentes, perfecto para gráficos y logotipos' },
          { title: 'Herramientas Profesionales', description: 'Herramientas de visualización avanzadas con zoom, rotación y capacidades de análisis detallado de imágenes' }
        ],
        about_title: 'Acerca del Formato PNG',
        about_intro: 'PNG (Portable Network Graphics) es un formato de archivo de gráficos rasterizados que admite compresión de datos sin pérdidas. PNG fue creado como un reemplazo mejorado y no patentado para el formato Graphics Interchange Format (GIF). PNG admite imágenes basadas en paleta, imágenes en escala de grises e imágenes RGB/RGBA a todo color no basadas en paleta.',
        advantages_title: 'Ventajas Clave',
        advantages: [
          'Compresión sin pérdidas – Sin pérdida de calidad',
          'Soporte de transparencia – Canal alfa para fondos transparentes',
          'Amplio soporte de color – RGB de 24 bits y profundidad de color de 48 bits',
          'Compatibilidad universal – Funciona en todas las plataformas',
          'Soporte de metadatos – EXIF y otros metadatos',
          'Visualización progresiva – Puede mostrar mientras carga'
        ],
        use_cases_title: 'Mejores Casos de Uso',
        use_cases: [
          'Gráficos web – Logotipos e iconos con transparencia',
          'Arte digital – Ilustraciones de alta calidad',
          'Capturas de pantalla – Preservación perfecta de calidad',
          'Diseño de UI – Elementos de interfaz con transparencia',
          'Gráficos para impresión – Imágenes de alta resolución',
          'Imágenes médicas – Se requiere calidad sin pérdidas'
        ],
        specs_title: 'Especificaciones Técnicas PNG',
        specs_header_label: 'Especificación',
        specs_header_value: 'Detalles',
        specs: [
          { label: 'Extensión de Archivo', value: '.png' },
          { label: 'Tipo MIME', value: 'image/png' },
          { label: 'Compresión', value: 'Compresión sin pérdidas (DEFLATE)' },
          { label: 'Soporte de Color', value: 'RGB de 24 bits, RGB de 48 bits, Escala de grises de 8 bits, Basado en paleta' },
          { label: 'Transparencia', value: 'Soporte de canal alfa (RGBA)' },
          { label: 'Animación', value: 'Soporte APNG (Animated PNG)' },
          { label: 'Resolución Máxima', value: 'Sin límite práctico' },
          { label: 'Metadatos', value: 'Fragmentos EXIF, tEXt, zTXt, iTXt soportados' }
        ],
        seo_title: 'Características del Visor y Convertidor PNG',
        seo_intro: 'Nuestro visor PNG profesional proporciona soporte completo para imágenes PNG, incluyendo visualización de calidad sin pérdidas, soporte de transparencia y herramientas de análisis avanzadas. Ya seas diseñador, desarrollador o creador de contenido, nuestra plataforma ofrece las herramientas que necesitas para el manejo profesional de imágenes PNG.',
        seo_viewing_title: 'Características Avanzadas de Visualización',
        seo_viewing_text: 'Ver imágenes PNG con precisión perfecta de píxeles, capacidades de zoom y visualización detallada de metadatos. Nuestro visor soporta todas las características PNG, incluyendo transparencia, canales alfa e imágenes basadas en paleta y a todo color, asegurando una representación precisa de tus gráficos.',
        seo_conversion_title: 'Herramientas de Conversión Profesionales',
        seo_conversion_text: 'Convertir archivos PNG a JPEG, WebP, GIF y otros formatos manteniendo una calidad óptima. Nuestro motor de conversión ofrece configuraciones de calidad ajustables, preservación de transparencia y capacidades de procesamiento por lotes para manejar múltiples archivos simultáneamente.',
        seo_optimization_title: 'Optimización de Calidad',
        seo_optimization_text: 'Optimiza archivos PNG para uso web e impresión con nuestras herramientas inteligentes que preservan la calidad sin pérdidas mientras gestionan los tamaños de archivo. Perfecto para optimización de sitios web, arte digital y gráficos profesionales donde la calidad y la transparencia importan.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar Barra Lateral',
          search_placeholder: 'Buscar archivos...',
          files_header: 'Archivos',
          add_files: '+ Añadir',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Visionneuse PNG Gratuite - Voir les Images PNG en Ligne',
        meta_description: 'Visionneuse PNG gratuite. Voir les images PNG en ligne avec support de transparence, qualité sans perte et outils professionnels. Aucune inscription requise.',
        meta_keywords: 'visionneuse PNG, PNG vers JPG, PNG vers WebP, visionneuse d\'images, transparence, compression sans perte, canal alpha, traitement par lots',
        hero_title: 'Visionneuse PNG Gratuite',
        hero_subtitle: 'Voir les images PNG avec qualité sans perte et support de transparence',
        upload_title: 'Télécharger des Fichiers PNG',
        upload_description: 'Glissez-déposez vos images PNG ou cliquez pour parcourir. Prend en charge la transparence et la qualité sans perte jusqu\'à 100 Mo chacun.',
        buttons: {
          view_files: 'Voir les Fichiers',
          back: 'Retour à Tous les Visionneuses'
        },
        quick_stats: {
          lossless_quality: '✓ Qualité Sans Perte',
          transparency_support: '🎨 Support de Transparence',
          fast_processing: '⚡ Traitement Rapide'
        },
        features: [
          { title: 'Qualité Sans Perte', description: 'Voir les images PNG avec préservation parfaite de la qualité, sans artefacts de compression et profondeur de couleur complète' },
          { title: 'Support de Transparence', description: 'Support complet du canal alpha pour arrière-plans transparents, parfait pour graphiques et logos' },
          { title: 'Outils Professionnels', description: 'Outils de visualisation avancés avec zoom, rotation et capacités d\'analyse d\'image détaillées' }
        ],
        about_title: 'À Propos du Format PNG',
        about_intro: 'PNG (Portable Network Graphics) est un format de fichier graphique raster qui prend en charge la compression de données sans perte. PNG a été créé comme un remplacement amélioré et non breveté pour le format Graphics Interchange Format (GIF). PNG prend en charge les images basées sur palette, les images en niveaux de gris et les images RGB/RGBA pleine couleur non basées sur palette.',
        advantages_title: 'Avantages Clés',
        advantages: [
          'Compression sans perte – Aucune perte de qualité',
          'Support de transparence – Canal alpha pour arrière-plans transparents',
          'Large support de couleur – RGB 24 bits et profondeur de couleur 48 bits',
          'Compatibilité universelle – Fonctionne sur toutes les plateformes',
          'Support de métadonnées – EXIF et autres métadonnées',
          'Affichage progressif – Peut afficher pendant le chargement'
        ],
        use_cases_title: 'Meilleurs Cas d\'Utilisation',
        use_cases: [
          'Graphiques web – Logos et icônes avec transparence',
          'Art numérique – Illustrations de haute qualité',
          'Captures d\'écran – Préservation parfaite de la qualité',
          'Conception UI – Éléments d\'interface avec transparence',
          'Graphiques d\'impression – Images haute résolution',
          'Imagerie médicale – Qualité sans perte requise'
        ],
        specs_title: 'Spécifications Techniques PNG',
        specs_header_label: 'Spécification',
        specs_header_value: 'Détails',
        specs: [
          { label: 'Extension de Fichier', value: '.png' },
          { label: 'Type MIME', value: 'image/png' },
          { label: 'Compression', value: 'Compression sans perte (DEFLATE)' },
          { label: 'Support des Couleurs', value: 'RGB 24 bits, RGB 48 bits, Niveaux de gris 8 bits, Basé sur palette' },
          { label: 'Transparence', value: 'Support du canal alpha (RGBA)' },
          { label: 'Animation', value: 'Support APNG (Animated PNG)' },
          { label: 'Résolution Maximale', value: 'Aucune limite pratique' },
          { label: 'Métadonnées', value: 'Fragments EXIF, tEXt, zTXt, iTXt supportés' }
        ],
        seo_title: 'Fonctionnalités du Visionneuse et Convertisseur PNG',
        seo_intro: 'Notre visionneuse PNG professionnelle offre un support complet pour les images PNG, y compris la visualisation de qualité sans perte, le support de transparence et les outils d\'analyse avancés. Que vous soyez designer, développeur ou créateur de contenu, notre plateforme offre les outils dont vous avez besoin pour la manipulation professionnelle des images PNG.',
        seo_viewing_title: 'Fonctionnalités de Visualisation Avancées',
        seo_viewing_text: 'Voir les images PNG avec une précision parfaite au pixel près, des capacités de zoom et un affichage détaillé des métadonnées. Notre visionneuse prend en charge toutes les fonctionnalités PNG, y compris la transparence, les canaux alpha et les images basées sur palette et en vraie couleur, garantissant une représentation précise de vos graphiques.',
        seo_conversion_title: 'Outils de Conversion Professionnels',
        seo_conversion_text: 'Convertir les fichiers PNG en JPEG, WebP, GIF et autres formats tout en maintenant une qualité optimale. Notre moteur de conversion offre des paramètres de qualité ajustables, la préservation de la transparence et des capacités de traitement par lots pour gérer plusieurs fichiers simultanément.',
        seo_optimization_title: 'Optimisation de la Qualité',
        seo_optimization_text: 'Optimisez les fichiers PNG pour une utilisation web et imprimée avec nos outils intelligents qui préservent la qualité sans perte tout en gérant les tailles de fichiers. Parfait pour l\'optimisation de sites web, l\'art numérique et les graphiques professionnels où la qualité et la transparence comptent.',
        editor: {
          toggle_sidebar: 'Basculer la Barre Latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la Barre Latérale',
          search_placeholder: 'Rechercher des fichiers...',
          files_header: 'Fichiers',
          add_files: '+ Ajouter',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Visualizzatore PNG Gratuito - Visualizza Immagini PNG Online',
        meta_description: 'Visualizzatore PNG gratuito. Visualizza immagini PNG online con supporto trasparenza, qualità senza perdite e strumenti professionali. Nessuna registrazione richiesta.',
        meta_keywords: 'visualizzatore PNG, PNG a JPG, PNG a WebP, visualizzatore immagini, trasparenza, compressione senza perdite, canale alfa, elaborazione batch',
        hero_title: 'Visualizzatore PNG Gratuito',
        hero_subtitle: 'Visualizza immagini PNG con qualità senza perdite e supporto trasparenza',
        upload_title: 'Carica File PNG',
        upload_description: 'Trascina e rilascia le tue immagini PNG o fai clic per sfogliare. Supporta trasparenza e qualità senza perdite fino a 100MB ciascuno.',
        buttons: {
          view_files: 'Visualizza File',
          back: 'Torna a Tutti i Visualizzatori'
        },
        quick_stats: {
          lossless_quality: '✓ Qualità Senza Perdite',
          transparency_support: '🎨 Supporto Trasparenza',
          fast_processing: '⚡ Elaborazione Veloce'
        },
        features: [
          { title: 'Qualità Senza Perdite', description: 'Visualizza immagini PNG con preservazione perfetta della qualità, senza artefatti di compressione e profondità colore completa' },
          { title: 'Supporto Trasparenza', description: 'Supporto completo del canale alfa per sfondi trasparenti, perfetto per grafica e loghi' },
          { title: 'Strumenti Professionali', description: 'Strumenti di visualizzazione avanzati con zoom, rotazione e capacità di analisi dettagliata delle immagini' }
        ],
        about_title: 'Informazioni sul Formato PNG',
        about_intro: 'PNG (Portable Network Graphics) è un formato di file grafico raster che supporta la compressione dei dati senza perdite. PNG è stato creato come sostituto migliorato e non brevettato per il formato Graphics Interchange Format (GIF). PNG supporta immagini basate su palette, immagini in scala di grigi e immagini RGB/RGBA a colori completi non basate su palette.',
        advantages_title: 'Vantaggi Chiave',
        advantages: [
          'Compressione senza perdite – Nessuna perdita di qualità',
          'Supporto trasparenza – Canale alfa per sfondi trasparenti',
          'Ampio supporto colori – RGB 24-bit e profondità colore 48-bit',
          'Compatibilità universale – Funziona su tutte le piattaforme',
          'Supporto metadati – EXIF e altri metadati',
          'Visualizzazione progressiva – Può visualizzare durante il caricamento'
        ],
        use_cases_title: 'Migliori Casi d\'Uso',
        use_cases: [
          'Grafica web – Loghi e icone con trasparenza',
          'Arte digitale – Illustrazioni di alta qualità',
          'Screenshot – Preservazione perfetta della qualità',
          'Design UI – Elementi interfaccia con trasparenza',
          'Grafica per stampa – Immagini ad alta risoluzione',
          'Imaging medico – Qualità senza perdite richiesta'
        ],
        specs_title: 'Specifiche Tecniche PNG',
        specs_header_label: 'Specifica',
        specs_header_value: 'Dettagli',
        specs: [
          { label: 'Estensione File', value: '.png' },
          { label: 'Tipo MIME', value: 'image/png' },
          { label: 'Compressione', value: 'Compressione senza perdite (DEFLATE)' },
          { label: 'Supporto Colori', value: 'RGB 24-bit, RGB 48-bit, Scala di grigi 8-bit, Basato su palette' },
          { label: 'Trasparenza', value: 'Supporto canale alfa (RGBA)' },
          { label: 'Animazione', value: 'Supporto APNG (Animated PNG)' },
          { label: 'Risoluzione Massima', value: 'Nessun limite pratico' },
          { label: 'Metadati', value: 'Chunk EXIF, tEXt, zTXt, iTXt supportati' }
        ],
        seo_title: 'Funzionalità Visualizzatore e Convertitore PNG',
        seo_intro: 'Il nostro visualizzatore PNG professionale fornisce supporto completo per immagini PNG, inclusa visualizzazione qualità senza perdite, supporto trasparenza e strumenti di analisi avanzati. Che tu sia un designer, sviluppatore o creatore di contenuti, la nostra piattaforma offre gli strumenti di cui hai bisogno per la gestione professionale di immagini PNG.',
        seo_viewing_title: 'Funzionalità di Visualizzazione Avanzate',
        seo_viewing_text: 'Visualizza immagini PNG con precisione perfetta al pixel, capacità di zoom e visualizzazione dettagliata dei metadati. Il nostro visualizzatore supporta tutte le funzionalità PNG, inclusa trasparenza, canali alfa e immagini basate su palette e a colori veri, garantendo una rappresentazione accurata della tua grafica.',
        seo_conversion_title: 'Strumenti di Conversione Professionali',
        seo_conversion_text: 'Converti file PNG in JPEG, WebP, GIF e altri formati mantenendo una qualità ottimale. Il nostro motore di conversione offre impostazioni di qualità regolabili, preservazione della trasparenza e capacità di elaborazione batch per gestire più file contemporaneamente.',
        seo_optimization_title: 'Ottimizzazione Qualità',
        seo_optimization_text: 'Ottimizza file PNG per uso web e stampa con i nostri strumenti intelligenti che preservano la qualità senza perdite mentre gestiscono le dimensioni dei file. Perfetto per l\'ottimizzazione di siti web, arte digitale e grafica professionale dove qualità e trasparenza contano.',
        editor: {
          toggle_sidebar: 'Mostra/Nascondi Barra Laterale',
          close: 'Chiudi (Esc)',
          close_sidebar: 'Chiudi Barra Laterale',
          search_placeholder: 'Cerca file...',
          files_header: 'File',
          add_files: '+ Aggiungi',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Gratis PNG Viewer - Bekijk PNG Afbeeldingen Online',
        meta_description: 'Gratis PNG viewer. Bekijk PNG afbeeldingen online met transparantieondersteuning, verliesloze kwaliteit en professionele tools. Geen registratie vereist.',
        meta_keywords: 'PNG viewer, PNG naar JPG, PNG naar WebP, afbeeldingsviewer, transparantie, verliesloze compressie, alfakanaal, batchverwerking',
        hero_title: 'Gratis PNG Viewer',
        hero_subtitle: 'Bekijk PNG afbeeldingen met verliesloze kwaliteit en transparantieondersteuning',
        upload_title: 'Upload PNG Bestanden',
        upload_description: 'Sleep en zet je PNG afbeeldingen neer of klik om te bladeren. Ondersteunt transparantie en verliesloze kwaliteit tot 100MB elk.',
        buttons: {
          view_files: 'Bekijk Bestanden',
          back: 'Terug naar Alle Viewers'
        },
        quick_stats: {
          lossless_quality: '✓ Verliesloze Kwaliteit',
          transparency_support: '🎨 Transparantieondersteuning',
          fast_processing: '⚡ Snelle Verwerking'
        },
        features: [
          { title: 'Verliesloze Kwaliteit', description: 'Bekijk PNG afbeeldingen met perfecte kwaliteitsbehoud, geen compressie-artefacten en volledige kleurdiepte' },
          { title: 'Transparantieondersteuning', description: 'Volledige alfakanaalondersteuning voor transparante achtergronden, perfect voor grafieken en logo\'s' },
          { title: 'Professionele Tools', description: 'Geavanceerde weergavetools met zoom, rotatie en gedetailleerde beeldanalyse mogelijkheden' }
        ],
        about_title: 'Over PNG Formaat',
        about_intro: 'PNG (Portable Network Graphics) is een rastergrafisch bestandsformaat dat verliesloze datacompressie ondersteunt. PNG is gemaakt als een verbeterd, niet-gepatenteerd alternatief voor het Graphics Interchange Format (GIF). PNG ondersteunt paletgebaseerde afbeeldingen, grijswaardenafbeeldingen en volledige kleur RGB/RGBA-afbeeldingen zonder palet.',
        advantages_title: 'Belangrijkste Voordelen',
        advantages: [
          'Verliesloze compressie – Geen kwaliteitsverlies',
          'Transparantieondersteuning – Alfakanaal voor transparante achtergronden',
          'Brede kleurondersteuning – 24-bit RGB en 48-bit kleurdiepte',
          'Universele compatibiliteit – Werkt op alle platforms',
          'Metadataondersteuning – EXIF en andere metadata',
          'Progressieve weergave – Kan weergeven tijdens het laden'
        ],
        use_cases_title: 'Beste Gebruikssituaties',
        use_cases: [
          'Webgrafiek – Logo\'s en pictogrammen met transparantie',
          'Digitale kunst – Illustraties van hoge kwaliteit',
          'Screenshots – Perfecte kwaliteitsbehoud',
          'UI-ontwerp – Interface-elementen met transparantie',
          'Printgrafiek – Afbeeldingen met hoge resolutie',
          'Medische beeldvorming – Verliesloze kwaliteit vereist'
        ],
        specs_title: 'PNG Technische Specificaties',
        specs_header_label: 'Specificatie',
        specs_header_value: 'Details',
        specs: [
          { label: 'Bestandsextensie', value: '.png' },
          { label: 'MIME Type', value: 'image/png' },
          { label: 'Compressie', value: 'Verliesloze compressie (DEFLATE)' },
          { label: 'Kleurondersteuning', value: '24-bit RGB, 48-bit RGB, 8-bit Grijswaarden, Paletgebaseerd' },
          { label: 'Transparantie', value: 'Alfakanaalondersteuning (RGBA)' },
          { label: 'Animatie', value: 'APNG (Animated PNG) ondersteuning' },
          { label: 'Maximale Resolutie', value: 'Geen praktische limiet' },
          { label: 'Metadata', value: 'EXIF, tEXt, zTXt, iTXt chunks ondersteund' }
        ],
        seo_title: 'PNG Viewer en Converter Functies',
        seo_intro: 'Onze professionele PNG viewer biedt uitgebreide ondersteuning voor PNG afbeeldingen, inclusief verliesloze kwaliteitsweergave, transparantieondersteuning en geavanceerde analysetools. Of je nu ontwerper, ontwikkelaar of contentmaker bent, ons platform biedt de tools die je nodig hebt voor professionele PNG-afbeeldingsverwerking.',
        seo_viewing_title: 'Geavanceerde Weergavefuncties',
        seo_viewing_text: 'Bekijk PNG afbeeldingen met pixelperfecte nauwkeurigheid, zoommogelijkheden en gedetailleerde metadataweergave. Onze viewer ondersteunt alle PNG-functies, inclusief transparantie, alfakanalen en zowel paletgebaseerde als echte kleurafbeeldingen, waardoor nauwkeurige weergave van je grafieken wordt gegarandeerd.',
        seo_conversion_title: 'Professionele Conversietools',
        seo_conversion_text: 'Converteer PNG bestanden naar JPEG, WebP, GIF en andere formaten terwijl optimale kwaliteit behouden blijft. Onze conversie-engine biedt aanpasbare kwaliteitsinstellingen, transparantiebehoud en batchverwerkingsmogelijkheden voor het gelijktijdig verwerken van meerdere bestanden.',
        seo_optimization_title: 'Kwaliteitsoptimalisatie',
        seo_optimization_text: 'Optimaliseer PNG bestanden voor web- en printgebruik met onze slimme tools die verliesloze kwaliteit behouden terwijl bestandsgroottes worden beheerd. Perfect voor website-optimalisatie, digitale kunst en professionele grafieken waar kwaliteit en transparantie belangrijk zijn.',
        editor: {
          toggle_sidebar: 'Zijbalk In-/Uitschakelen',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk Sluiten',
          search_placeholder: 'Zoek bestanden...',
          files_header: 'Bestanden',
          add_files: '+ Toevoegen',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Visualizador PNG Gratuito - Ver Imagens PNG Online',
        meta_description: 'Visualizador PNG gratuito. Ver imagens PNG online com suporte de transparência, qualidade sem perdas e ferramentas profissionais. Nenhum registro necessário.',
        meta_keywords: 'visualizador PNG, PNG para JPG, PNG para WebP, visualizador de imagens, transparência, compressão sem perdas, canal alfa, processamento em lote',
        hero_title: 'Visualizador PNG Gratuito',
        hero_subtitle: 'Ver imagens PNG com qualidade sem perdas e suporte de transparência',
        upload_title: 'Carregar Arquivos PNG',
        upload_description: 'Arraste e solte suas imagens PNG ou clique para procurar. Suporta transparência e qualidade sem perdas até 100MB cada.',
        buttons: {
          view_files: 'Ver Arquivos',
          back: 'Voltar para Todos os Visualizadores'
        },
        quick_stats: {
          lossless_quality: '✓ Qualidade Sem Perdas',
          transparency_support: '🎨 Suporte de Transparência',
          fast_processing: '⚡ Processamento Rápido'
        },
        features: [
          { title: 'Qualidade Sem Perdas', description: 'Ver imagens PNG com preservação perfeita de qualidade, sem artefatos de compressão e profundidade de cor completa' },
          { title: 'Suporte de Transparência', description: 'Suporte completo de canal alfa para fundos transparentes, perfeito para gráficos e logotipos' },
          { title: 'Ferramentas Profissionais', description: 'Ferramentas de visualização avançadas com zoom, rotação e capacidades de análise detalhada de imagens' }
        ],
        about_title: 'Sobre o Formato PNG',
        about_intro: 'PNG (Portable Network Graphics) é um formato de arquivo gráfico raster que suporta compressão de dados sem perdas. PNG foi criado como uma substituição melhorada e não patenteada para o formato Graphics Interchange Format (GIF). PNG suporta imagens baseadas em paleta, imagens em escala de cinza e imagens RGB/RGBA em cores completas não baseadas em paleta.',
        advantages_title: 'Vantagens Principais',
        advantages: [
          'Compressão sem perdas – Sem perda de qualidade',
          'Suporte de transparência – Canal alfa para fundos transparentes',
          'Amplo suporte de cores – RGB de 24 bits e profundidade de cor de 48 bits',
          'Compatibilidade universal – Funciona em todas as plataformas',
          'Suporte de metadados – EXIF e outros metadados',
          'Exibição progressiva – Pode exibir durante o carregamento'
        ],
        use_cases_title: 'Melhores Casos de Uso',
        use_cases: [
          'Gráficos web – Logotipos e ícones com transparência',
          'Arte digital – Ilustrações de alta qualidade',
          'Capturas de tela – Preservação perfeita de qualidade',
          'Design de UI – Elementos de interface com transparência',
          'Gráficos para impressão – Imagens de alta resolução',
          'Imagens médicas – Qualidade sem perdas necessária'
        ],
        specs_title: 'Especificações Técnicas PNG',
        specs_header_label: 'Especificação',
        specs_header_value: 'Detalhes',
        specs: [
          { label: 'Extensão de Arquivo', value: '.png' },
          { label: 'Tipo MIME', value: 'image/png' },
          { label: 'Compressão', value: 'Compressão sem perdas (DEFLATE)' },
          { label: 'Suporte de Cores', value: 'RGB de 24 bits, RGB de 48 bits, Escala de cinza de 8 bits, Baseado em paleta' },
          { label: 'Transparência', value: 'Suporte de canal alfa (RGBA)' },
          { label: 'Animação', value: 'Suporte APNG (Animated PNG)' },
          { label: 'Resolução Máxima', value: 'Sem limite prático' },
          { label: 'Metadados', value: 'Fragmentos EXIF, tEXt, zTXt, iTXt suportados' }
        ],
        seo_title: 'Recursos do Visualizador e Conversor PNG',
        seo_intro: 'Nosso visualizador PNG profissional fornece suporte abrangente para imagens PNG, incluindo visualização de qualidade sem perdas, suporte de transparência e ferramentas de análise avançadas. Seja você designer, desenvolvedor ou criador de conteúdo, nossa plataforma oferece as ferramentas necessárias para o manuseio profissional de imagens PNG.',
        seo_viewing_title: 'Recursos Avançados de Visualização',
        seo_viewing_text: 'Ver imagens PNG com precisão perfeita de pixels, capacidades de zoom e exibição detalhada de metadados. Nosso visualizador suporta todos os recursos PNG, incluindo transparência, canais alfa e imagens baseadas em paleta e em cores verdadeiras, garantindo representação precisa de seus gráficos.',
        seo_conversion_title: 'Ferramentas de Conversão Profissionais',
        seo_conversion_text: 'Converter arquivos PNG para JPEG, WebP, GIF e outros formatos mantendo qualidade ótima. Nosso mecanismo de conversão oferece configurações de qualidade ajustáveis, preservação de transparência e capacidades de processamento em lote para lidar com vários arquivos simultaneamente.',
        seo_optimization_title: 'Otimização de Qualidade',
        seo_optimization_text: 'Otimize arquivos PNG para uso web e impressão com nossas ferramentas inteligentes que preservam a qualidade sem perdas enquanto gerenciam os tamanhos de arquivo. Perfeito para otimização de sites, arte digital e gráficos profissionais onde qualidade e transparência importam.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar Barra Lateral',
          search_placeholder: 'Pesquisar arquivos...',
          files_header: 'Arquivos',
          add_files: '+ Adicionar',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Trình Xem PNG Miễn Phí - Xem Hình Ảnh PNG Trực Tuyến',
        meta_description: 'Trình xem PNG miễn phí. Xem hình ảnh PNG trực tuyến với hỗ trợ trong suốt, chất lượng không mất mát và các công cụ chuyên nghiệp. Không cần đăng ký.',
        meta_keywords: 'trình xem PNG, PNG sang JPG, PNG sang WebP, trình xem hình ảnh, trong suốt, nén không mất mát, kênh alpha, xử lý hàng loạt',
        hero_title: 'Trình Xem PNG Miễn Phí',
        hero_subtitle: 'Xem hình ảnh PNG với chất lượng không mất mát và hỗ trợ trong suốt',
        upload_title: 'Tải Lên Tệp PNG',
        upload_description: 'Kéo và thả hình ảnh PNG của bạn hoặc nhấp để duyệt. Hỗ trợ trong suốt và chất lượng không mất mát lên đến 100MB mỗi tệp.',
        buttons: {
          view_files: 'Xem Tệp',
          back: 'Quay Lại Tất Cả Trình Xem'
        },
        quick_stats: {
          lossless_quality: '✓ Chất Lượng Không Mất Mát',
          transparency_support: '🎨 Hỗ Trợ Trong Suốt',
          fast_processing: '⚡ Xử Lý Nhanh'
        },
        features: [
          { title: 'Chất Lượng Không Mất Mát', description: 'Xem hình ảnh PNG với bảo toàn chất lượng hoàn hảo, không có hiện tượng nén và độ sâu màu đầy đủ' },
          { title: 'Hỗ Trợ Trong Suốt', description: 'Hỗ trợ kênh alpha đầy đủ cho nền trong suốt, hoàn hảo cho đồ họa và logo' },
          { title: 'Công Cụ Chuyên Nghiệp', description: 'Công cụ xem nâng cao với khả năng phóng to, xoay và phân tích hình ảnh chi tiết' }
        ],
        about_title: 'Về Định Dạng PNG',
        about_intro: 'PNG (Portable Network Graphics) là định dạng tệp đồ họa raster hỗ trợ nén dữ liệu không mất mát. PNG được tạo như một thay thế cải tiến, không được cấp bằng sáng chế cho định dạng Graphics Interchange Format (GIF). PNG hỗ trợ hình ảnh dựa trên bảng màu, hình ảnh thang độ xám và hình ảnh RGB/RGBA đầy đủ màu không dựa trên bảng màu.',
        advantages_title: 'Ưu Điểm Chính',
        advantages: [
          'Nén không mất mát – Không mất chất lượng',
          'Hỗ trợ trong suốt – Kênh alpha cho nền trong suốt',
          'Hỗ trợ màu rộng – RGB 24-bit và độ sâu màu 48-bit',
          'Tương thích phổ biến – Hoạt động trên tất cả nền tảng',
          'Hỗ trợ siêu dữ liệu – EXIF và siêu dữ liệu khác',
          'Hiển thị lũy tiến – Có thể hiển thị trong khi tải'
        ],
        use_cases_title: 'Trường Hợp Sử Dụng Tốt Nhất',
        use_cases: [
          'Đồ họa web – Logo và biểu tượng với trong suốt',
          'Nghệ thuật kỹ thuật số – Minh họa chất lượng cao',
          'Ảnh chụp màn hình – Bảo toàn chất lượng hoàn hảo',
          'Thiết kế UI – Các phần tử giao diện với trong suốt',
          'Đồ họa in – Hình ảnh độ phân giải cao',
          'Hình ảnh y tế – Yêu cầu chất lượng không mất mát'
        ],
        specs_title: 'Thông Số Kỹ Thuật PNG',
        specs_header_label: 'Thông Số',
        specs_header_value: 'Chi Tiết',
        specs: [
          { label: 'Phần Mở Rộng Tệp', value: '.png' },
          { label: 'Loại MIME', value: 'image/png' },
          { label: 'Nén', value: 'Nén không mất mát (DEFLATE)' },
          { label: 'Hỗ Trợ Màu', value: 'RGB 24-bit, RGB 48-bit, Thang Độ Xám 8-bit, Dựa Trên Bảng Màu' },
          { label: 'Độ Trong Suốt', value: 'Hỗ trợ kênh alpha (RGBA)' },
          { label: 'Hoạt Hình', value: 'Hỗ trợ APNG (Animated PNG)' },
          { label: 'Độ Phân Giải Tối Đa', value: 'Không có giới hạn thực tế' },
          { label: 'Siêu Dữ Liệu', value: 'Hỗ trợ các đoạn EXIF, tEXt, zTXt, iTXt' }
        ],
        seo_title: 'Tính Năng Trình Xem và Chuyển Đổi PNG',
        seo_intro: 'Trình xem PNG chuyên nghiệp của chúng tôi cung cấp hỗ trợ toàn diện cho hình ảnh PNG, bao gồm xem chất lượng không mất mát, hỗ trợ trong suốt và các công cụ phân tích nâng cao. Cho dù bạn là nhà thiết kế, nhà phát triển hay người tạo nội dung, nền tảng của chúng tôi cung cấp các công cụ bạn cần để xử lý hình ảnh PNG chuyên nghiệp.',
        seo_viewing_title: 'Tính Năng Xem Nâng Cao',
        seo_viewing_text: 'Xem hình ảnh PNG với độ chính xác hoàn hảo từng pixel, khả năng phóng to và hiển thị siêu dữ liệu chi tiết. Trình xem của chúng tôi hỗ trợ tất cả các tính năng PNG, bao gồm trong suốt, kênh alpha và cả hình ảnh dựa trên bảng màu và màu thực, đảm bảo biểu diễn chính xác đồ họa của bạn.',
        seo_conversion_title: 'Công Cụ Chuyển Đổi Chuyên Nghiệp',
        seo_conversion_text: 'Chuyển đổi tệp PNG sang JPEG, WebP, GIF và các định dạng khác trong khi duy trì chất lượng tối ưu. Công cụ chuyển đổi của chúng tôi cung cấp cài đặt chất lượng có thể điều chỉnh, bảo toàn trong suốt và khả năng xử lý hàng loạt để xử lý nhiều tệp đồng thời.',
        seo_optimization_title: 'Tối Ưu Hóa Chất Lượng',
        seo_optimization_text: 'Tối ưu hóa tệp PNG cho sử dụng web và in với các công cụ thông minh của chúng tôi bảo toàn chất lượng không mất mát trong khi quản lý kích thước tệp. Hoàn hảo cho tối ưu hóa trang web, nghệ thuật kỹ thuật số và đồ họa chuyên nghiệp nơi chất lượng và trong suốt quan trọng.',
        editor: {
          toggle_sidebar: 'Chuyển Thanh Bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng Thanh Bên',
          search_placeholder: 'Tìm kiếm tệp...',
          files_header: 'Tệp',
          add_files: '+ Thêm',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Ücretsiz PNG Görüntüleyici - PNG Görsellerini Çevrimiçi Görüntüle',
        meta_description: 'Ücretsiz PNG görüntüleyici. Şeffaflık desteği, kayıpsız kalite ve profesyonel araçlarla PNG görsellerini çevrimiçi görüntüle. Kayıt gerekmez.',
        meta_keywords: 'PNG görüntüleyici, PNG\'den JPG\'ye, PNG\'den WebP\'ye, görsel görüntüleyici, şeffaflık, kayıpsız sıkıştırma, alfakanal, toplu işleme',
        hero_title: 'Ücretsiz PNG Görüntüleyici',
        hero_subtitle: 'PNG görsellerini kayıpsız kalite ve şeffaflık desteği ile görüntüle',
        upload_title: 'PNG Dosyalarını Yükle',
        upload_description: 'PNG görsellerinizi sürükleyip bırakın veya göz atmak için tıklayın. Her biri 100MB\'a kadar şeffaflık ve kayıpsız kalite destekler.',
        buttons: {
          view_files: 'Dosyaları Görüntüle',
          back: 'Tüm Görüntüleyicilere Dön'
        },
        quick_stats: {
          lossless_quality: '✓ Kayıpsız Kalite',
          transparency_support: '🎨 Şeffaflık Desteği',
          fast_processing: '⚡ Hızlı İşleme'
        },
        features: [
          { title: 'Kayıpsız Kalite', description: 'Sıkıştırma artefaktları olmadan ve tam renk derinliği ile mükemmel kalite koruması ile PNG görsellerini görüntüle' },
          { title: 'Şeffaflık Desteği', description: 'Şeffaf arka planlar için tam alfa kanal desteği, grafikler ve logolar için mükemmel' },
          { title: 'Profesyonel Araçlar', description: 'Zoom, rotasyon ve detaylı görsel analiz yetenekleri ile gelişmiş görüntüleme araçları' }
        ],
        about_title: 'PNG Formatı Hakkında',
        about_intro: 'PNG (Portable Network Graphics), kayıpsız veri sıkıştırmasını destekleyen bir raster grafik dosya formatıdır. PNG, Graphics Interchange Format (GIF)\'in geliştirilmiş, patentli olmayan bir alternatifi olarak oluşturuldu. PNG, palet tabanlı görseller, gri tonlamalı görseller ve palet tabanlı olmayan tam renkli RGB/RGBA görselleri destekler.',
        advantages_title: 'Temel Avantajlar',
        advantages: [
          'Kayıpsız sıkıştırma – Kalite kaybı yok',
          'Şeffaflık desteği – Şeffaf arka planlar için alfa kanalı',
          'Geniş renk desteği – 24-bit RGB ve 48-bit renk derinliği',
          'Evrensel uyumluluk – Tüm platformlarda çalışır',
          'Metadatan desteği – EXIF ve diğer metadatalar',
          'İlerlemeli görüntüleme – Yüklenirken görüntülenebilir'
        ],
        use_cases_title: 'En İyi Kullanım Durumları',
        use_cases: [
          'Web grafikleri – Şeffaflık ile logolar ve simgeler',
          'Dijital sanat – Yüksek kaliteli illüstrasyonlar',
          'Ekran görüntüleri – Mükemmel kalite koruması',
          'UI tasarımı – Şeffaflık ile arayüz öğeleri',
          'Baskı grafikleri – Yüksek çözünürlüklü görseller',
          'Tıbbi görüntüleme – Kayıpsız kalite gerekli'
        ],
        specs_title: 'PNG Teknik Özellikleri',
        specs_header_label: 'Özellik',
        specs_header_value: 'Detaylar',
        specs: [
          { label: 'Dosya Uzantısı', value: '.png' },
          { label: 'MIME Türü', value: 'image/png' },
          { label: 'Sıkıştırma', value: 'Kayıpsız sıkıştırma (DEFLATE)' },
          { label: 'Renk Desteği', value: '24-bit RGB, 48-bit RGB, 8-bit Gri Tonlama, Palet Tabanlı' },
          { label: 'Şeffaflık', value: 'Alfa kanal desteği (RGBA)' },
          { label: 'Animasyon', value: 'APNG (Animated PNG) desteği' },
          { label: 'Maksimum Çözünürlük', value: 'Pratik limit yok' },
          { label: 'Meta Veriler', value: 'EXIF, tEXt, zTXt, iTXt chunk\'ları desteklenir' }
        ],
        seo_title: 'PNG Görüntüleyici ve Dönüştürücü Özellikleri',
        seo_intro: 'Profesyonel PNG görüntüleyicimiz, kayıpsız kalite görüntüleme, şeffaflık desteği ve gelişmiş analiz araçları dahil PNG görselleri için kapsamlı destek sağlar. İster tasarımcı, geliştirici veya içerik oluşturucu olun, platformumuz profesyonel PNG görsel işleme için ihtiyacınız olan araçları sunar.',
        seo_viewing_title: 'Gelişmiş Görüntüleme Özellikleri',
        seo_viewing_text: 'Piksel mükemmel doğruluk, zoom yetenekleri ve detaylı metadatan görüntüleme ile PNG görsellerini görüntüle. Görüntüleyicimiz şeffaflık, alfa kanalları ve hem palet tabanlı hem de gerçek renkli görseller dahil tüm PNG özelliklerini destekler, grafiklerinizin doğru temsilini sağlar.',
        seo_conversion_title: 'Profesyonel Dönüştürme Araçları',
        seo_conversion_text: 'Optimal kaliteyi korurken PNG dosyalarını JPEG, WebP, GIF ve diğer formatlara dönüştür. Dönüştürme motorumuz, birden fazla dosyayı aynı anda işlemek için ayarlanabilir kalite ayarları, şeffaflık koruma ve toplu işleme yetenekleri sunar.',
        seo_optimization_title: 'Kalite Optimizasyonu',
        seo_optimization_text: 'Dosya boyutlarını yönetirken kayıpsız kaliteyi koruyan akıllı araçlarımızla PNG dosyalarını web ve baskı kullanımı için optimize edin. Kalite ve şeffaflığın önemli olduğu web sitesi optimizasyonu, dijital sanat ve profesyonel grafikler için mükemmel.',
        editor: {
          toggle_sidebar: 'Kenar Çubuğunu Aç/Kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar Çubuğunu Kapat',
          search_placeholder: 'Dosyaları ara...',
          files_header: 'Dosyalar',
          add_files: '+ Ekle',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Бесплатный Просмотрщик PNG - Просмотр Изображений PNG Онлайн',
        meta_description: 'Бесплатный просмотрщик PNG. Просматривайте изображения PNG онлайн с поддержкой прозрачности, качеством без потерь и профессиональными инструментами. Регистрация не требуется.',
        meta_keywords: 'просмотрщик PNG, PNG в JPG, PNG в WebP, просмотрщик изображений, прозрачность, сжатие без потерь, альфа-канал, пакетная обработка',
        hero_title: 'Бесплатный Просмотрщик PNG',
        hero_subtitle: 'Просматривайте изображения PNG с качеством без потерь и поддержкой прозрачности',
        upload_title: 'Загрузить Файлы PNG',
        upload_description: 'Перетащите изображения PNG или нажмите для просмотра. Поддерживает прозрачность и качество без потерь до 100 МБ каждый.',
        buttons: {
          view_files: 'Просмотреть Файлы',
          back: 'Вернуться ко Всем Просмотрщикам'
        },
        quick_stats: {
          lossless_quality: '✓ Качество Без Потерь',
          transparency_support: '🎨 Поддержка Прозрачности',
          fast_processing: '⚡ Быстрая Обработка'
        },
        features: [
          { title: 'Качество Без Потерь', description: 'Просматривайте изображения PNG с идеальным сохранением качества, без артефактов сжатия и полной глубиной цвета' },
          { title: 'Поддержка Прозрачности', description: 'Полная поддержка альфа-канала для прозрачных фонов, идеально для графики и логотипов' },
          { title: 'Профессиональные Инструменты', description: 'Расширенные инструменты просмотра с масштабированием, поворотом и возможностями детального анализа изображений' }
        ],
        about_title: 'О Формате PNG',
        about_intro: 'PNG (Portable Network Graphics) — это формат файла растровой графики, который поддерживает сжатие данных без потерь. PNG был создан как улучшенная, не запатентованная замена формату Graphics Interchange Format (GIF). PNG поддерживает изображения на основе палитры, изображения в оттенках серого и полноцветные RGB/RGBA изображения не на основе палитры.',
        advantages_title: 'Ключевые Преимущества',
        advantages: [
          'Сжатие без потерь – Без потери качества',
          'Поддержка прозрачности – Альфа-канал для прозрачных фонов',
          'Широкая поддержка цветов – 24-битный RGB и 48-битная глубина цвета',
          'Универсальная совместимость – Работает на всех платформах',
          'Поддержка метаданных – EXIF и другие метаданные',
          'Прогрессивное отображение – Может отображаться во время загрузки'
        ],
        use_cases_title: 'Лучшие Случаи Использования',
        use_cases: [
          'Веб-графика – Логотипы и иконки с прозрачностью',
          'Цифровое искусство – Высококачественные иллюстрации',
          'Скриншоты – Идеальное сохранение качества',
          'Дизайн UI – Элементы интерфейса с прозрачностью',
          'Печатная графика – Изображения высокого разрешения',
          'Медицинская визуализация – Требуется качество без потерь'
        ],
        specs_title: 'Технические Характеристики PNG',
        specs_header_label: 'Характеристика',
        specs_header_value: 'Детали',
        specs: [
          { label: 'Расширение Файла', value: '.png' },
          { label: 'Тип MIME', value: 'image/png' },
          { label: 'Сжатие', value: 'Сжатие без потерь (DEFLATE)' },
          { label: 'Поддержка Цветов', value: '24-битный RGB, 48-битный RGB, 8-битная Шкала Серого, На основе палитры' },
          { label: 'Прозрачность', value: 'Поддержка альфа-канала (RGBA)' },
          { label: 'Анимация', value: 'Поддержка APNG (Animated PNG)' },
          { label: 'Максимальное Разрешение', value: 'Нет практического предела' },
          { label: 'Метаданные', value: 'Фрагменты EXIF, tEXt, zTXt, iTXt поддерживаются' }
        ],
        seo_title: 'Функции Просмотрщика и Конвертера PNG',
        seo_intro: 'Наш профессиональный просмотрщик PNG обеспечивает полную поддержку изображений PNG, включая просмотр качества без потерь, поддержку прозрачности и расширенные инструменты анализа. Будь вы дизайнер, разработчик или создатель контента, наша платформа предлагает инструменты, необходимые для профессиональной обработки изображений PNG.',
        seo_viewing_title: 'Расширенные Функции Просмотра',
        seo_viewing_text: 'Просматривайте изображения PNG с идеальной точностью пикселей, возможностями масштабирования и детальным отображением метаданных. Наш просмотрщик поддерживает все функции PNG, включая прозрачность, альфа-каналы и изображения на основе палитры и в истинном цвете, обеспечивая точное представление вашей графики.',
        seo_conversion_title: 'Профессиональные Инструменты Конвертации',
        seo_conversion_text: 'Конвертируйте файлы PNG в JPEG, WebP, GIF и другие форматы, сохраняя оптимальное качество. Наш движок конвертации предлагает настраиваемые параметры качества, сохранение прозрачности и возможности пакетной обработки для одновременной обработки нескольких файлов.',
        seo_optimization_title: 'Оптимизация Качества',
        seo_optimization_text: 'Оптимизируйте файлы PNG для веб-использования и печати с помощью наших интеллектуальных инструментов, которые сохраняют качество без потерь при управлении размерами файлов. Идеально для оптимизации веб-сайтов, цифрового искусства и профессиональной графики, где важны качество и прозрачность.',
        editor: {
          toggle_sidebar: 'Переключить Боковую Панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть Боковую Панель',
          search_placeholder: 'Поиск файлов...',
          files_header: 'Файлы',
          add_files: '+ Добавить',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'عارض PNG مجاني - عرض صور PNG عبر الإنترنت',
        meta_description: 'عارض PNG مجاني. اعرض صور PNG عبر الإنترنت مع دعم الشفافية وجودة بدون فقدان وأدوات احترافية. لا يلزم التسجيل.',
        meta_keywords: 'عارض PNG، PNG إلى JPG، PNG إلى WebP، عارض الصور، الشفافية، ضغط بدون فقدان، قناة ألفا، المعالجة المجمعة',
        hero_title: 'عارض PNG مجاني',
        hero_subtitle: 'اعرض صور PNG مع جودة بدون فقدان ودعم الشفافية',
        upload_title: 'رفع ملفات PNG',
        upload_description: 'اسحب وأفلت صور PNG الخاصة بك أو انقر للتصفح. يدعم الشفافية وجودة بدون فقدان حتى 100 ميجابايت لكل ملف.',
        buttons: {
          view_files: 'عرض الملفات',
          back: 'العودة إلى جميع العارضين'
        },
        quick_stats: {
          lossless_quality: '✓ جودة بدون فقدان',
          transparency_support: '🎨 دعم الشفافية',
          fast_processing: '⚡ معالجة سريعة'
        },
        features: [
          { title: 'جودة بدون فقدان', description: 'اعرض صور PNG مع الحفاظ الكامل على الجودة وبدون أي تشوهات ضغط وعمق لون كامل' },
          { title: 'دعم الشفافية', description: 'دعم كامل لقناة ألفا للخلفيات الشفافة، مثالي للرسوميات والشعارات' },
          { title: 'أدوات احترافية', description: 'أدوات عرض متقدمة مع تكبير وتدوير وقدرات تحليل صورة مفصلة' }
        ],
        about_title: 'حول تنسيق PNG',
        about_intro: 'PNG (Portable Network Graphics) هو تنسيق ملف رسومي نقطي يدعم ضغط البيانات بدون فقدان. تم إنشاء PNG كبديل محسّن وغير محمي ببراءة لـ Graphics Interchange Format (GIF). يدعم PNG الصور المستندة إلى لوحة الألوان والصور بتدرج رمادي وصور RGB/RGBA كاملة الألوان غير المستندة إلى لوحة الألوان.',
        advantages_title: 'المزايا الرئيسية',
        advantages: [
          'ضغط بدون فقدان – بدون فقدان الجودة',
          'دعم الشفافية – قناة ألفا للخلفيات الشفافة',
          'دعم ألوان واسع – RGB 24 بت وعمق لون 48 بت',
          'توافق عالمي – يعمل على جميع المنصات',
          'دعم البيانات الوصفية – EXIF وبيانات وصفية أخرى',
          'عرض تدريجي – يمكن عرضه أثناء التحميل'
        ],
        use_cases_title: 'أفضل حالات الاستخدام',
        use_cases: [
          'رسوميات الويب – الشعارات والرموز مع الشفافية',
          'الفن الرقمي – رسوم توضيحية عالية الجودة',
          'لقطات الشاشة – الحفاظ الكامل على الجودة',
          'تصميم واجهة المستخدم – عناصر واجهة مع الشفافية',
          'رسوميات الطباعة – صور عالية الدقة',
          'التصوير الطبي – جودة بدون فقدان مطلوبة'
        ],
        specs_title: 'المواصفات التقنية لـ PNG',
        specs_header_label: 'المواصفة',
        specs_header_value: 'التفاصيل',
        specs: [
          { label: 'امتداد الملف', value: '.png' },
          { label: 'نوع MIME', value: 'image/png' },
          { label: 'الضغط', value: 'ضغط بدون فقدان (DEFLATE)' },
          { label: 'دعم الألوان', value: 'RGB 24 بت، RGB 48 بت، تدرج رمادي 8 بت، مستند إلى لوحة الألوان' },
          { label: 'الشفافية', value: 'دعم قناة ألفا (RGBA)' },
          { label: 'الرسوم المتحركة', value: 'دعم APNG (Animated PNG)' },
          { label: 'الحد الأقصى للدقة', value: 'لا يوجد حد عملي' },
          { label: 'البيانات الوصفية', value: 'دعم أجزاء EXIF و tEXt و zTXt و iTXt' }
        ],
        seo_title: 'ميزات عارض ومحول PNG',
        seo_intro: 'يوفر عارض PNG الاحترافي لدينا دعماً شاملاً لصور PNG، بما في ذلك عرض الجودة بدون فقدان ودعم الشفافية وأدوات التحليل المتقدمة. سواء كنت مصمماً أو مطوراً أو منشئ محتوى، توفر منصتنا الأدوات التي تحتاجها لمعالجة صور PNG الاحترافية.',
        seo_viewing_title: 'ميزات العرض المتقدمة',
        seo_viewing_text: 'اعرض صور PNG بدقة مثالية للبكسل وإمكانيات تكبير وعرض تفصيلي للبيانات الوصفية. يدعم عارضنا جميع ميزات PNG، بما في ذلك الشفافية وقنوات ألفا وصور مستندة إلى لوحة الألوان وصور ملونة حقيقية، مما يضمن تمثيلاً دقيقاً لرسومك.',
        seo_conversion_title: 'أدوات التحويل الاحترافية',
        seo_conversion_text: 'حول ملفات PNG إلى JPEG و WebP و GIF وتنسيقات أخرى مع الحفاظ على الجودة المثلى. يوفر محرك التحويل لدينا إعدادات جودة قابلة للتعديل والحفاظ على الشفافية وإمكانيات المعالجة المجمعة للتعامل مع ملفات متعددة في وقت واحد.',
        seo_optimization_title: 'تحسين الجودة',
        seo_optimization_text: 'حسّن ملفات PNG للاستخدام على الويب والطباعة باستخدام أدواتنا الذكية التي تحافظ على الجودة بدون فقدان أثناء إدارة أحجام الملفات. مثالي لتحسين المواقع والفن الرقمي والرسوميات الاحترافية حيث تهم الجودة والشفافية.',
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          files_header: 'الملفات',
          add_files: '+ إضافة',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'โปรแกรมดู PNG ฟรี - ดูรูปภาพ PNG ออนไลน์',
        meta_description: 'โปรแกรมดู PNG ฟรี ดูรูปภาพ PNG ออนไลน์พร้อมการรองรับความโปร่งใส คุณภาพแบบไม่สูญเสียและเครื่องมือระดับมืออาชีพ ไม่ต้องลงทะเบียน',
        meta_keywords: 'โปรแกรมดู PNG, PNG เป็น JPG, PNG เป็น WebP, โปรแกรมดูรูปภาพ, ความโปร่งใส, การบีบอัดแบบไม่สูญเสีย, ช่องอัลฟา, การประมวลผลแบบกลุ่ม',
        hero_title: 'โปรแกรมดู PNG ฟรี',
        hero_subtitle: 'ดูรูปภาพ PNG ด้วยคุณภาพแบบไม่สูญเสียและการรองรับความโปร่งใส',
        upload_title: 'อัปโหลดไฟล์ PNG',
        upload_description: 'ลากและวางรูปภาพ PNG ของคุณหรือคลิกเพื่อเรียกดู รองรับความโปร่งใสและคุณภาพแบบไม่สูญเสียสูงสุด 100MB ต่อไฟล์',
        buttons: {
          view_files: 'ดูไฟล์',
          back: 'กลับไปที่โปรแกรมดูทั้งหมด'
        },
        quick_stats: {
          lossless_quality: '✓ คุณภาพแบบไม่สูญเสีย',
          transparency_support: '🎨 การรองรับความโปร่งใส',
          fast_processing: '⚡ ประมวลผลเร็ว'
        },
        features: [
          { title: 'คุณภาพแบบไม่สูญเสีย', description: 'ดูรูปภาพ PNG ด้วยการรักษาคุณภาพที่สมบูรณ์แบบ ไม่มีสิ่งผิดปกติจากการบีบอัดและความลึกของสีเต็มรูปแบบ' },
          { title: 'การรองรับความโปร่งใส', description: 'การรองรับช่องอัลฟาเต็มรูปแบบสำหรับพื้นหลังโปร่งใส เหมาะสำหรับกราฟิกและโลโก้' },
          { title: 'เครื่องมือระดับมืออาชีพ', description: 'เครื่องมือดูขั้นสูงพร้อมความสามารถในการซูม หมุน และวิเคราะห์รูปภาพอย่างละเอียด' }
        ],
        about_title: 'เกี่ยวกับรูปแบบ PNG',
        about_intro: 'PNG (Portable Network Graphics) เป็นรูปแบบไฟล์กราฟิกแรสเตอร์ที่รองรับการบีบอัดข้อมูลแบบไม่สูญเสีย PNG ถูกสร้างขึ้นเป็นทางเลือกที่ปรับปรุงแล้วและไม่ได้รับสิทธิบัตรสำหรับรูปแบบ Graphics Interchange Format (GIF) PNG รองรับภาพที่อิงตามพาเล็ต ภาพระดับสีเทา และภาพ RGB/RGBA สีเต็มที่ไม่อิงตามพาเล็ต',
        advantages_title: 'ข้อดีหลัก',
        advantages: [
          'การบีบอัดแบบไม่สูญเสีย – ไม่มีการสูญเสียคุณภาพ',
          'การรองรับความโปร่งใส – ช่องอัลฟาสำหรับพื้นหลังโปร่งใส',
          'การรองรับสีกว้าง – RGB 24-bit และความลึกของสี 48-bit',
          'ความเข้ากันได้สากล – ทำงานบนแพลตฟอร์มทั้งหมด',
          'การรองรับข้อมูลเมตา – EXIF และข้อมูลเมตาอื่นๆ',
          'การแสดงผลแบบโปรเกรสซีฟ – สามารถแสดงผลขณะโหลด'
        ],
        use_cases_title: 'กรณีการใช้งานที่ดีที่สุด',
        use_cases: [
          'กราฟิกเว็บ – โลโก้และไอคอนพร้อมความโปร่งใส',
          'ศิลปะดิจิทัล – ภาพประกอบคุณภาพสูง',
          'ภาพหน้าจอ – การรักษาคุณภาพที่สมบูรณ์แบบ',
          'การออกแบบ UI – องค์ประกอบอินเทอร์เฟซพร้อมความโปร่งใส',
          'กราฟิกสำหรับการพิมพ์ – ภาพความละเอียดสูง',
          'การถ่ายภาพทางการแพทย์ – ต้องการคุณภาพแบบไม่สูญเสีย'
        ],
        specs_title: 'ข้อมูลจำเพาะทางเทคนิค PNG',
        specs_header_label: 'ข้อมูลจำเพาะ',
        specs_header_value: 'รายละเอียด',
        specs: [
          { label: 'นามสกุลไฟล์', value: '.png' },
          { label: 'ประเภท MIME', value: 'image/png' },
          { label: 'การบีบอัด', value: 'การบีบอัดแบบไม่สูญเสีย (DEFLATE)' },
          { label: 'การรองรับสี', value: 'RGB 24-bit, RGB 48-bit, ระดับสีเทา 8-bit, อิงตามพาเล็ต' },
          { label: 'ความโปร่งใส', value: 'การรองรับช่องอัลฟา (RGBA)' },
          { label: 'ภาพเคลื่อนไหว', value: 'การรองรับ APNG (Animated PNG)' },
          { label: 'ความละเอียดสูงสุด', value: 'ไม่มีขีดจำกัดในทางปฏิบัติ' },
          { label: 'ข้อมูลเมตา', value: 'รองรับส่วน EXIF, tEXt, zTXt, iTXt' }
        ],
        seo_title: 'คุณสมบัติโปรแกรมดูและตัวแปลง PNG',
        seo_intro: 'โปรแกรมดู PNG ระดับมืออาชีพของเรามีการรองรับที่ครอบคลุมสำหรับภาพ PNG รวมถึงการดูคุณภาพแบบไม่สูญเสีย การรองรับความโปร่งใสและเครื่องมือวิเคราะห์ขั้นสูง ไม่ว่าคุณจะเป็นนักออกแบบ นักพัฒนา หรือผู้สร้างเนื้อหา แพลตฟอร์มของเรามีเครื่องมือที่คุณต้องการสำหรับการจัดการภาพ PNG ระดับมืออาชีพ',
        seo_viewing_title: 'คุณสมบัติการดูขั้นสูง',
        seo_viewing_text: 'ดูภาพ PNG ด้วยความแม่นยำระดับพิกเซล ความสามารถในการซูมและการแสดงข้อมูลเมตาอย่างละเอียด โปรแกรมดูของเรารองรับคุณสมบัติ PNG ทั้งหมด รวมถึงความโปร่งใส ช่องอัลฟาและภาพที่อิงตามพาเล็ตและสีจริง เพื่อให้แน่ใจว่าการแสดงภาพที่ถูกต้อง',
        seo_conversion_title: 'เครื่องมือแปลงระดับมืออาชีพ',
        seo_conversion_text: 'แปลงไฟล์ PNG เป็น JPEG, WebP, GIF และรูปแบบอื่นๆ ในขณะที่รักษาคุณภาพที่เหมาะสม เครื่องมือแปลงของเรามีการตั้งค่าคุณภาพที่ปรับได้ การรักษาความโปร่งใสและความสามารถในการประมวลผลแบบกลุ่มสำหรับการจัดการไฟล์หลายไฟล์พร้อมกัน',
        seo_optimization_title: 'การปรับปรุงคุณภาพ',
        seo_optimization_text: 'ปรับปรุงไฟล์ PNG สำหรับการใช้งานบนเว็บและการพิมพ์ด้วยเครื่องมืออัจฉริยะของเราที่รักษาคุณภาพแบบไม่สูญเสียในขณะที่จัดการขนาดไฟล์ เหมาะสำหรับการปรับปรุงเว็บไซต์ ศิลปะดิจิทัลและกราฟิกระดับมืออาชีพที่คุณภาพและความโปร่งใสมีความสำคัญ',
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          files_header: 'ไฟล์',
          add_files: '+ เพิ่ม',
          format_badge: 'PNG',
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
      png: {
        meta_title: '無料PNGビューアー - PNG画像をオンラインで表示',
        meta_description: '無料PNGビューアー。透明度サポート、可逆品質、プロフェッショナルツールでPNG画像をオンラインで表示します。登録不要。',
        meta_keywords: 'PNGビューアー、PNGからJPG、PNGからWebP、画像ビューアー、透明度、可逆圧縮、アルファチャンネル、バッチ処理',
        hero_title: '無料PNGビューアー',
        hero_subtitle: '可逆品質と透明度サポートでPNG画像を表示',
        upload_title: 'PNGファイルをアップロード',
        upload_description: 'PNG画像をドラッグ＆ドロップするか、クリックして参照します。各ファイル最大100MBまで透明度と可逆品質をサポートします。',
        buttons: {
          view_files: 'ファイルを表示',
          back: 'すべてのビューアーに戻る'
        },
        quick_stats: {
          lossless_quality: '✓ 可逆品質',
          transparency_support: '🎨 透明度サポート',
          fast_processing: '⚡ 高速処理'
        },
        features: [
          { title: '可逆品質', description: '圧縮アーティファクトなし、完全な色深度で完璧な品質保持でPNG画像を表示' },
          { title: '透明度サポート', description: '透明な背景の完全なアルファチャンネルサポート、グラフィックとロゴに最適' },
          { title: 'プロフェッショナルツール', description: 'ズーム、回転、詳細な画像分析機能を備えた高度な表示ツール' }
        ],
        about_title: 'PNGフォーマットについて',
        about_intro: 'PNG (Portable Network Graphics) は、可逆データ圧縮をサポートするラスターグラフィックファイルフォーマットです。PNGは、Graphics Interchange Format (GIF) の改良された、非特許の代替として作成されました。PNGは、パレットベースの画像、グレースケール画像、パレットベースではないフルカラーRGB/RGBA画像をサポートします。',
        advantages_title: '主な利点',
        advantages: [
          '可逆圧縮 – 品質損失なし',
          '透明度サポート – 透明な背景のアルファチャンネル',
          '幅広い色サポート – 24ビットRGBと48ビット色深度',
          'ユニバーサル互換性 – すべてのプラットフォームで動作',
          'メタデータサポート – EXIFおよびその他のメタデータ',
          'プログレッシブ表示 – 読み込み中に表示可能'
        ],
        use_cases_title: '最適な使用例',
        use_cases: [
          'Webグラフィック – 透明度付きのロゴとアイコン',
          'デジタルアート – 高品質のイラスト',
          'スクリーンショット – 完璧な品質保持',
          'UIデザイン – 透明度付きのインターフェース要素',
          '印刷グラフィック – 高解像度画像',
          '医用画像 – 可逆品質が必要'
        ],
        specs_title: 'PNG技術仕様',
        specs_header_label: '仕様',
        specs_header_value: '詳細',
        specs: [
          { label: 'ファイル拡張子', value: '.png' },
          { label: 'MIMEタイプ', value: 'image/png' },
          { label: '圧縮', value: '可逆圧縮 (DEFLATE)' },
          { label: '色サポート', value: '24ビットRGB、48ビットRGB、8ビットグレースケール、パレットベース' },
          { label: '透明度', value: 'アルファチャンネルサポート (RGBA)' },
          { label: 'アニメーション', value: 'APNG (Animated PNG) サポート' },
          { label: '最大解像度', value: '実用的な制限なし' },
          { label: 'メタデータ', value: 'EXIF、tEXt、zTXt、iTXtチャンクがサポートされています' }
        ],
        seo_title: 'PNGビューアーとコンバーター機能',
        seo_intro: 'プロフェッショナルなPNGビューアーは、可逆品質表示、透明度サポート、高度な分析ツールを含むPNG画像の包括的なサポートを提供します。デザイナー、開発者、コンテンツ作成者のいずれであっても、当社のプラットフォームはプロフェッショナルなPNG画像処理に必要なツールを提供します。',
        seo_viewing_title: '高度な表示機能',
        seo_viewing_text: 'ピクセル完璧な精度、ズーム機能、詳細なメタデータ表示でPNG画像を表示します。当社のビューアーは、透明度、アルファチャンネル、パレットベースとトゥルーカラー画像を含むすべてのPNG機能をサポートし、グラフィックの正確な表現を保証します。',
        seo_conversion_title: 'プロフェッショナル変換ツール',
        seo_conversion_text: '最適な品質を維持しながら、PNGファイルをJPEG、WebP、GIF、その他のフォーマットに変換します。当社の変換エンジンは、複数のファイルを同時に処理するための調整可能な品質設定、透明度保持、バッチ処理機能を提供します。',
        seo_optimization_title: '品質最適化',
        seo_optimization_text: 'ファイルサイズを管理しながら可逆品質を保持する当社のスマートツールで、Web使用と印刷のためにPNGファイルを最適化します。品質と透明度が重要なWebサイト最適化、デジタルアート、プロフェッショナルグラフィックに最適です。',
        editor: {
          toggle_sidebar: 'サイドバーの切り替え',
          close: '閉じる (Esc)',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          files_header: 'ファイル',
          add_files: '+ 追加',
          format_badge: 'PNG',
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
      png: {
        meta_title: '免费PNG查看器 - 在线查看PNG图片',
        meta_description: '免费PNG查看器。在线查看PNG图片，支持透明度、无损质量和专业工具。无需注册。',
        meta_keywords: 'PNG查看器，PNG转JPG，PNG转WebP，图片查看器，透明度，无损压缩，alpha通道，批量处理',
        hero_title: '免费PNG查看器',
        hero_subtitle: '使用无损质量和透明度支持查看PNG图片',
        upload_title: '上传PNG文件',
        upload_description: '拖放您的PNG图片或点击浏览。支持每个文件最大100MB的透明度和无损质量。',
        buttons: {
          view_files: '查看文件',
          back: '返回所有查看器'
        },
        quick_stats: {
          lossless_quality: '✓ 无损质量',
          transparency_support: '🎨 透明度支持',
          fast_processing: '⚡ 快速处理'
        },
        features: [
          { title: '无损质量', description: '以完美质量保持、无压缩伪影和完整色深查看PNG图片' },
          { title: '透明度支持', description: '透明背景的完整alpha通道支持，非常适合图形和徽标' },
          { title: '专业工具', description: '具有缩放、旋转和详细图像分析功能的高级查看工具' }
        ],
        about_title: '关于PNG格式',
        about_intro: 'PNG (Portable Network Graphics) 是一种支持无损数据压缩的光栅图形文件格式。PNG被创建为Graphics Interchange Format (GIF)的改进、非专利替代品。PNG支持基于调色板的图像、灰度图像和非基于调色板的全彩色RGB/RGBA图像。',
        advantages_title: '主要优势',
        advantages: [
          '无损压缩 – 无质量损失',
          '透明度支持 – 透明背景的alpha通道',
          '广泛的颜色支持 – 24位RGB和48位色深',
          '通用兼容性 – 适用于所有平台',
          '元数据支持 – EXIF和其他元数据',
          '渐进式显示 – 可在加载时显示'
        ],
        use_cases_title: '最佳使用场景',
        use_cases: [
          '网络图形 – 带透明度的徽标和图标',
          '数字艺术 – 高质量插图',
          '屏幕截图 – 完美质量保持',
          'UI设计 – 带透明度的界面元素',
          '印刷图形 – 高分辨率图像',
          '医学成像 – 需要无损质量'
        ],
        specs_title: 'PNG技术规格',
        specs_header_label: '规格',
        specs_header_value: '详细信息',
        specs: [
          { label: '文件扩展名', value: '.png' },
          { label: 'MIME类型', value: 'image/png' },
          { label: '压缩', value: '无损压缩 (DEFLATE)' },
          { label: '颜色支持', value: '24位RGB、48位RGB、8位灰度、基于调色板' },
          { label: '透明度', value: 'Alpha通道支持 (RGBA)' },
          { label: '动画', value: 'APNG (Animated PNG) 支持' },
          { label: '最大分辨率', value: '无实际限制' },
          { label: '元数据', value: '支持EXIF、tEXt、zTXt、iTXt块' }
        ],
        seo_title: 'PNG查看器和转换器功能',
        seo_intro: '我们的专业PNG查看器为PNG图片提供全面支持，包括无损质量查看、透明度支持和高级分析工具。无论您是设计师、开发人员还是内容创作者，我们的平台都提供专业PNG图片处理所需的工具。',
        seo_viewing_title: '高级查看功能',
        seo_viewing_text: '以像素级完美精度、缩放功能和详细的元数据显示查看PNG图片。我们的查看器支持所有PNG功能，包括透明度、alpha通道以及基于调色板和真彩色图像，确保准确表示您的图形。',
        seo_conversion_title: '专业转换工具',
        seo_conversion_text: '在保持最佳质量的同时，将PNG文件转换为JPEG、WebP、GIF和其他格式。我们的转换引擎提供可调的质量设置、透明度保留和批处理功能，可同时处理多个文件。',
        seo_optimization_title: '质量优化',
        seo_optimization_text: '使用我们的智能工具优化PNG文件用于网络和打印使用，这些工具在管理文件大小的同时保持无损质量。非常适合网站优化、数字艺术和专业图形，其中质量和透明度很重要。',
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭 (Esc)',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          files_header: '文件',
          add_files: '+ 添加',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Penampil PNG Gratis - Lihat Gambar PNG Online',
        meta_description: 'Penampil PNG gratis. Lihat gambar PNG online dengan dukungan transparansi, kualitas tanpa loss dan alat profesional. Tidak perlu registrasi.',
        meta_keywords: 'penampil PNG, PNG ke JPG, PNG ke WebP, penampil gambar, transparansi, kompresi tanpa loss, saluran alpha, pemrosesan batch',
        hero_title: 'Penampil PNG Gratis',
        hero_subtitle: 'Lihat gambar PNG dengan kualitas tanpa loss dan dukungan transparansi',
        upload_title: 'Unggah File PNG',
        upload_description: 'Seret dan lepas gambar PNG Anda atau klik untuk menjelajah. Mendukung transparansi dan kualitas tanpa loss hingga 100MB per file.',
        buttons: {
          view_files: 'Lihat File',
          back: 'Kembali ke Semua Penampil'
        },
        quick_stats: {
          lossless_quality: '✓ Kualitas Tanpa Loss',
          transparency_support: '🎨 Dukungan Transparansi',
          fast_processing: '⚡ Pemrosesan Cepat'
        },
        features: [
          { title: 'Kualitas Tanpa Loss', description: 'Lihat gambar PNG dengan pelestarian kualitas sempurna, tanpa artefak kompresi dan kedalaman warna penuh' },
          { title: 'Dukungan Transparansi', description: 'Dukungan saluran alpha penuh untuk latar belakang transparan, sempurna untuk grafik dan logo' },
          { title: 'Alat Profesional', description: 'Alat tampilan lanjutan dengan kemampuan zoom, rotasi dan analisis gambar detail' }
        ],
        about_title: 'Tentang Format PNG',
        about_intro: 'PNG (Portable Network Graphics) adalah format file grafik raster yang mendukung kompresi data tanpa loss. PNG dibuat sebagai pengganti yang ditingkatkan dan tidak dipatenkan untuk format Graphics Interchange Format (GIF). PNG mendukung gambar berbasis palet, gambar skala abu-abu dan gambar RGB/RGBA warna penuh tidak berbasis palet.',
        advantages_title: 'Keuntungan Utama',
        advantages: [
          'Kompresi tanpa loss – Tidak ada kehilangan kualitas',
          'Dukungan transparansi – Saluran alpha untuk latar belakang transparan',
          'Dukungan warna luas – RGB 24-bit dan kedalaman warna 48-bit',
          'Kompatibilitas universal – Bekerja di semua platform',
          'Dukungan metadata – EXIF dan metadata lainnya',
          'Tampilan progresif – Dapat ditampilkan saat memuat'
        ],
        use_cases_title: 'Kasus Penggunaan Terbaik',
        use_cases: [
          'Grafik web – Logo dan ikon dengan transparansi',
          'Seni digital – Ilustrasi berkualitas tinggi',
          'Screenshot – Pelestarian kualitas sempurna',
          'Desain UI – Elemen antarmuka dengan transparansi',
          'Grafik cetak – Gambar resolusi tinggi',
          'Pencitraan medis – Kualitas tanpa loss diperlukan'
        ],
        specs_title: 'Spesifikasi Teknis PNG',
        specs_header_label: 'Spesifikasi',
        specs_header_value: 'Detail',
        specs: [
          { label: 'Ekstensi File', value: '.png' },
          { label: 'Tipe MIME', value: 'image/png' },
          { label: 'Kompresi', value: 'Kompresi tanpa loss (DEFLATE)' },
          { label: 'Dukungan Warna', value: 'RGB 24-bit, RGB 48-bit, Skala Abu-abu 8-bit, Berbasis Palet' },
          { label: 'Transparansi', value: 'Dukungan saluran alpha (RGBA)' },
          { label: 'Animasi', value: 'Dukungan APNG (Animated PNG)' },
          { label: 'Resolusi Maksimum', value: 'Tidak ada batas praktis' },
          { label: 'Metadata', value: 'Chunk EXIF, tEXt, zTXt, iTXt didukung' }
        ],
        seo_title: 'Fitur Penampil dan Konverter PNG',
        seo_intro: 'Penampil PNG profesional kami menyediakan dukungan komprehensif untuk gambar PNG, termasuk tampilan kualitas tanpa loss, dukungan transparansi dan alat analisis lanjutan. Baik Anda seorang desainer, pengembang atau pembuat konten, platform kami menawarkan alat yang Anda butuhkan untuk penanganan gambar PNG profesional.',
        seo_viewing_title: 'Fitur Tampilan Lanjutan',
        seo_viewing_text: 'Lihat gambar PNG dengan akurasi sempurna piksel, kemampuan zoom dan tampilan metadata detail. Penampil kami mendukung semua fitur PNG, termasuk transparansi, saluran alpha dan gambar berbasis palet dan warna sejati, memastikan representasi akurat dari grafik Anda.',
        seo_conversion_title: 'Alat Konversi Profesional',
        seo_conversion_text: 'Konversi file PNG ke JPEG, WebP, GIF dan format lain sambil mempertahankan kualitas optimal. Mesin konversi kami menawarkan pengaturan kualitas yang dapat disesuaikan, pelestarian transparansi dan kemampuan pemrosesan batch untuk menangani beberapa file secara bersamaan.',
        seo_optimization_title: 'Optimasi Kualitas',
        seo_optimization_text: 'Optimalkan file PNG untuk penggunaan web dan cetak dengan alat cerdas kami yang mempertahankan kualitas tanpa loss sambil mengelola ukuran file. Sempurna untuk optimasi situs web, seni digital dan grafik profesional di mana kualitas dan transparansi penting.',
        editor: {
          toggle_sidebar: 'Alihkan Sidebar',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup Sidebar',
          search_placeholder: 'Cari file...',
          files_header: 'File',
          add_files: '+ Tambah',
          format_badge: 'PNG',
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
      png: {
        meta_title: 'Gratis PNG-visare - Visa PNG-bilder Online',
        meta_description: 'Gratis PNG-visare. Visa PNG-bilder online med transparensstöd, förlustfri kvalitet och professionella verktyg. Ingen registrering krävs.',
        meta_keywords: 'PNG-visare, PNG till JPG, PNG till WebP, bildvisare, transparens, förlustfri komprimering, alfakanal, batchbearbetning',
        hero_title: 'Gratis PNG-visare',
        hero_subtitle: 'Visa PNG-bilder med förlustfri kvalitet och transparensstöd',
        upload_title: 'Ladda Upp PNG-filer',
        upload_description: 'Dra och släpp dina PNG-bilder eller klicka för att bläddra. Stöder transparens och förlustfri kvalitet upp till 100MB vardera.',
        buttons: {
          view_files: 'Visa Filer',
          back: 'Tillbaka till Alla Visare'
        },
        quick_stats: {
          lossless_quality: '✓ Förlustfri Kvalitet',
          transparency_support: '🎨 Transparensstöd',
          fast_processing: '⚡ Snabb Bearbetning'
        },
        features: [
          { title: 'Förlustfri Kvalitet', description: 'Visa PNG-bilder med perfekt kvalitetsbevarande, inga komprimeringsartefakter och full färgdjup' },
          { title: 'Transparensstöd', description: 'Fullt alfakanalstöd för transparenta bakgrunder, perfekt för grafik och logotyper' },
          { title: 'Professionella Verktyg', description: 'Avancerade visningsverktyg med zoomfunktioner, rotation och detaljerad bildanalys' }
        ],
        about_title: 'Om PNG-formatet',
        about_intro: 'PNG (Portable Network Graphics) är ett rastergrafikfilformat som stöder förlustfri datakomprimering. PNG skapades som en förbättrad, icke-patenterad ersättning för Graphics Interchange Format (GIF). PNG stöder palettbaserade bilder, gråskalebilder och fullfärgs-RGB/RGBA-bilder som inte är palettbaserade.',
        advantages_title: 'Viktiga Fördelar',
        advantages: [
          'Förlustfri komprimering – Ingen kvalitetsförlust',
          'Transparensstöd – Alfakanal för transparenta bakgrunder',
          'Bredt färgstöd – 24-bit RGB och 48-bit färgdjup',
          'Universell kompatibilitet – Fungerar på alla plattformar',
          'Metadatastöd – EXIF och andra metadata',
          'Progressiv visning – Kan visas under laddning'
        ],
        use_cases_title: 'Bästa Användningsfall',
        use_cases: [
          'Webbgrafik – Logotyper och ikoner med transparens',
          'Digital konst – Högkvalitativa illustrationer',
          'Skärmdumpar – Perfekt kvalitetsbevarande',
          'UI-design – Gränssnittselement med transparens',
          'Tryckgrafik – Högupplösta bilder',
          'Medicinsk bildtagning – Förlustfri kvalitet krävs'
        ],
        specs_title: 'PNG Tekniska Specifikationer',
        specs_header_label: 'Specifikation',
        specs_header_value: 'Detaljer',
        specs: [
          { label: 'Filändelse', value: '.png' },
          { label: 'MIME-typ', value: 'image/png' },
          { label: 'Komprimering', value: 'Förlustfri komprimering (DEFLATE)' },
          { label: 'Färgstöd', value: '24-bit RGB, 48-bit RGB, 8-bit Gråskala, Palettbaserad' },
          { label: 'Transparens', value: 'Alfakanalstöd (RGBA)' },
          { label: 'Animation', value: 'APNG (Animated PNG) stöd' },
          { label: 'Maximal Upplösning', value: 'Ingen praktisk gräns' },
          { label: 'Metadata', value: 'EXIF, tEXt, zTXt, iTXt chunks stöds' }
        ],
        seo_title: 'PNG-visare och Konverteringsfunktioner',
        seo_intro: 'Vår professionella PNG-visare ger omfattande stöd för PNG-bilder, inklusive förlustfri kvalitetsvisning, transparensstöd och avancerade analysverktyg. Oavsett om du är designer, utvecklare eller innehållsskapare erbjuder vår plattform verktygen du behöver för professionell PNG-bildhantering.',
        seo_viewing_title: 'Avancerade Visningsfunktioner',
        seo_viewing_text: 'Visa PNG-bilder med pixelperfekt noggrannhet, zoomfunktioner och detaljerad metadatavisning. Vår visare stöder alla PNG-funktioner, inklusive transparens, alfakanaler och både palettbaserade och sanna färgbilder, vilket säkerställer korrekt representation av dina grafik.',
        seo_conversion_title: 'Professionella Konverteringsverktyg',
        seo_conversion_text: 'Konvertera PNG-filer till JPEG, WebP, GIF och andra format samtidigt som optimal kvalitet bibehålls. Vår konverteringsmotor erbjuder justerbara kvalitetsinställningar, transparensbevarande och batchbearbetningsfunktioner för att hantera flera filer samtidigt.',
        seo_optimization_title: 'Kvalitetsoptimering',
        seo_optimization_text: 'Optimalisera PNG-filer för webbanvändning och tryck med våra smarta verktyg som bevarar förlustfri kvalitet samtidigt som filstorlekar hanteras. Perfekt för webbplatsoptimering, digital konst och professionell grafik där kvalitet och transparens är viktigt.',
        editor: {
          toggle_sidebar: 'Växla Sidofält',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng Sidofält',
          search_placeholder: 'Sök filer...',
          files_header: 'Filer',
          add_files: '+ Lägg till',
          format_badge: 'PNG',
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

// Register translations with i18n
Object.keys(resources).forEach(lang => {
  i18n.addResourceBundle(lang, 'translation', resources[lang], true, true);
});

export { resources };

