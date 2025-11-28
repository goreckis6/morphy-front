import i18n from '../../../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type BMPViewerTranslations = {
  viewers: {
    bmp: {
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
        uncompressed: string;
        wide_support: string;
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

const resources: Record<string, BMPViewerTranslations> = {
  en: {
    viewers: {
      bmp: {
        meta_title: 'Free BMP Viewer - View Bitmap Images Online',
        meta_description: 'View BMP bitmap images online instantly. Free BMP viewer with color-depth support, pixel inspection tools, and batch preview for up to 20 files.',
        meta_keywords: 'bmp viewer, bitmap viewer, online bmp viewer, windows bitmap, bmp preview, free bmp viewer',
        hero_title: 'Free BMP Viewer',
        hero_subtitle: 'Inspect Windows Bitmap (BMP) images with true color fidelity, pixel-level zoom, and batch preview tools.',
        upload_title: 'Upload BMP Images',
        upload_description: 'Drag and drop your BMP files or click to browse. Supports up to 20 files, 100MB total, with instant browser preview.',
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
          uncompressed: '✓ Uncompressed',
          wide_support: '🎨 Wide Support',
          fast_processing: '⚡ Fast Processing'
        },
        features: [
          { title: 'True Color Fidelity', description: 'View BMP images with full color depth support, from 1-bit to 32-bit color, preserving exact pixel values' },
          { title: 'Pixel-Level Inspection', description: 'Zoom in to inspect individual pixels with precise color information and coordinate display' },
          { title: 'Batch Preview', description: 'Preview multiple BMP files simultaneously with thumbnail grid and quick navigation between images' }
        ],
        about_title: 'About the BMP Format',
        about_intro: 'BMP (Bitmap Image File) is a raster graphics format developed by Microsoft for storing uncompressed or lightly compressed bitmap data. It is widely used across Windows applications, legacy design workflows, and embedded systems thanks to its simple structure and support for multiple color depths.',
        advantages_title: 'Key Advantages',
        advantages: [
          'Uncompressed quality – No loss of image data',
          'Wide compatibility – Supported by all Windows applications',
          'Multiple color depths – From 1-bit to 32-bit color',
          'Simple structure – Easy to read and write',
          'No dependencies – Self-contained format',
          'Legacy support – Works with older systems'
        ],
        use_cases_title: 'Popular Use Cases',
        use_cases: [
          'Windows applications – Native format for Windows',
          'Legacy systems – Older software and embedded systems',
          'Screen captures – Windows screenshot format',
          'Icon creation – Windows icon resources',
          'Simple graphics – Basic bitmap graphics',
          'Print preparation – Uncompressed print files'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Specification',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.bmp' },
          { label: 'MIME Type', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Compression', value: 'None (uncompressed) or RLE compression' },
          { label: 'Color Depth', value: '1, 4, 8, 16, 24, 32 bits per pixel' },
          { label: 'Maximum Resolution', value: 'No practical limit' },
          { label: 'Color Support', value: 'RGB, indexed color, grayscale' },
          { label: 'Transparency', value: 'Alpha channel support in 32-bit mode' },
          { label: 'Endianness', value: 'Little-endian (Windows standard)' }
        ],
        seo_title: 'BMP Viewer and Converter Features',
        seo_intro: 'Our professional BMP viewer provides comprehensive support for Windows Bitmap images including true color fidelity, pixel-level inspection, and batch preview capabilities. Whether you\'re working with legacy systems, Windows applications, or embedded graphics, our platform offers the tools you need for professional BMP image handling.',
        seo_viewing_title: 'Advanced Viewing Features',
        seo_viewing_text: 'View BMP images with full color depth support, pixel-level zoom, and detailed color information. Our viewer supports all BMP variants including uncompressed, RLE-compressed, and various color depths, ensuring accurate representation of your bitmap graphics.',
        seo_conversion_title: 'Professional Conversion Tools',
        seo_conversion_text: 'Convert BMP files to PNG, JPEG, WebP, and other modern formats while maintaining optimal quality. Our conversion engine offers color depth preservation, transparency handling, and batch processing capabilities for handling multiple files simultaneously.',
        seo_optimization_title: 'Quality Optimization',
        seo_optimization_text: 'Optimize BMP files for modern use with our smart tools that can convert to compressed formats while preserving visual quality. Perfect for migrating legacy graphics to modern formats, web optimization, and reducing file sizes for better performance.',
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          files_header: 'Files',
          add_files: '+ Add',
          format_badge: 'BMP',
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
      bmp: {
        meta_title: 'Darmowy Podgląd BMP - Oglądaj Obrazy Bitmapowe Online',
        meta_description: 'Oglądaj obrazy bitmapowe BMP online natychmiast. Darmowy podgląd BMP z obsługą głębi kolorów, narzędziami inspekcji pikseli i podglądem wsadowym do 20 plików.',
        meta_keywords: 'podgląd BMP, podgląd bitmap, online podgląd BMP, bitmapa Windows, podgląd BMP, darmowy podgląd BMP',
        hero_title: 'Darmowy Podgląd BMP',
        hero_subtitle: 'Sprawdzaj obrazy Windows Bitmap (BMP) z wiernością kolorów, zoomem na poziomie pikseli i narzędziami podglądu wsadowego.',
        upload_title: 'Prześlij Obrazy BMP',
        upload_description: 'Przeciągnij i upuść swoje pliki BMP lub kliknij, aby przeglądać. Obsługuje do 20 plików, 100MB łącznie, z natychmiastowym podglądem w przeglądarce.',
        upload: {
          drag_drop_text: 'Przeciągnij i Upuść Pliki Tutaj',
          click_browse_text: 'lub kliknij przycisk poniżej, aby przeglądać',
          choose_files_button: 'Wybierz Pliki',
          max_files_info: 'Maks. {maxFiles} plików • Do {maxSize} Łącznie'
        },
        buttons: {
          view_files: 'Wyświetl Pliki',
          back: 'Powrót do Wszystkich Przeglądarek'
        },
        quick_stats: {
          uncompressed: '✓ Nieskompresowane',
          wide_support: '🎨 Szerokie Wsparcie',
          fast_processing: '⚡ Szybkie Przetwarzanie'
        },
        features: [
          { title: 'Wierność Kolorów', description: 'Oglądaj obrazy BMP z pełną obsługą głębi kolorów, od 1-bitowego do 32-bitowego koloru, zachowując dokładne wartości pikseli' },
          { title: 'Inspekcja na Poziomie Pikseli', description: 'Zbliż, aby sprawdzić poszczególne piksele z precyzyjnymi informacjami o kolorze i wyświetlaniem współrzędnych' },
          { title: 'Podgląd Wsadowy', description: 'Podglądaj wiele plików BMP jednocześnie z siatką miniatur i szybką nawigacją między obrazami' }
        ],
        about_title: 'O Formacie BMP',
        about_intro: 'BMP (Bitmap Image File) to format grafiki rastrowej opracowany przez Microsoft do przechowywania nieskompresowanych lub lekko skompresowanych danych bitmapowych. Jest szeroko używany w aplikacjach Windows, starszych przepływach pracy projektowych i systemach wbudowanych dzięki prostej strukturze i obsłudze wielu głębi kolorów.',
        advantages_title: 'Kluczowe Zalety',
        advantages: [
          'Jakość nieskompresowana – Brak utraty danych obrazu',
          'Szeroka kompatybilność – Obsługiwane przez wszystkie aplikacje Windows',
          'Wiele głębi kolorów – Od 1-bitowego do 32-bitowego koloru',
          'Prosta struktura – Łatwe do odczytu i zapisu',
          'Brak zależności – Samodzielny format',
          'Wsparcie dla starszych systemów – Działa ze starszymi systemami'
        ],
        use_cases_title: 'Popularne Zastosowania',
        use_cases: [
          'Aplikacje Windows – Natywny format dla Windows',
          'Starsze systemy – Starsze oprogramowanie i systemy wbudowane',
          'Przechwytywanie ekranu – Format zrzutu ekranu Windows',
          'Tworzenie ikon – Zasoby ikon Windows',
          'Prosta grafika – Podstawowa grafika bitmapowa',
          'Przygotowanie do druku – Nieskompresowane pliki do druku'
        ],
        specs_title: 'Specyfikacje Techniczne',
        specs_header_label: 'Specyfikacja',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie Pliku', value: '.bmp' },
          { label: 'Typ MIME', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Kompresja', value: 'Brak (nieskompresowane) lub kompresja RLE' },
          { label: 'Głębia Kolorów', value: '1, 4, 8, 16, 24, 32 bity na piksel' },
          { label: 'Maksymalna Rozdzielczość', value: 'Brak praktycznego limitu' },
          { label: 'Obsługa Kolorów', value: 'RGB, kolor indeksowany, skala szarości' },
          { label: 'Przezroczystość', value: 'Obsługa kanału alfa w trybie 32-bitowym' },
          { label: 'Kolejność Bajtów', value: 'Little-endian (standard Windows)' }
        ],
        seo_title: 'Funkcje Podglądu i Konwertera BMP',
        seo_intro: 'Nasz profesjonalny podgląd BMP zapewnia kompleksowe wsparcie dla obrazów Windows Bitmap, w tym wierność kolorów, inspekcję na poziomie pikseli i możliwości podglądu wsadowego. Niezależnie od tego, czy pracujesz ze starszymi systemami, aplikacjami Windows czy grafiką wbudowaną, nasza platforma oferuje narzędzia potrzebne do profesjonalnej obsługi obrazów BMP.',
        seo_viewing_title: 'Zaawansowane Funkcje Przeglądania',
        seo_viewing_text: 'Oglądaj obrazy BMP z pełną obsługą głębi kolorów, zoomem na poziomie pikseli i szczegółowymi informacjami o kolorze. Nasz podgląd obsługuje wszystkie warianty BMP, w tym nieskompresowane, skompresowane RLE i różne głębie kolorów, zapewniając dokładną reprezentację Twojej grafiki bitmapowej.',
        seo_conversion_title: 'Profesjonalne Narzędzia Konwersji',
        seo_conversion_text: 'Konwertuj pliki BMP do PNG, JPEG, WebP i innych nowoczesnych formatów, zachowując optymalną jakość. Nasz silnik konwersji oferuje zachowanie głębi kolorów, obsługę przezroczystości i możliwości przetwarzania wsadowego do jednoczesnego obsługiwania wielu plików.',
        seo_optimization_title: 'Optymalizacja Jakości',
        seo_optimization_text: 'Optymalizuj pliki BMP do nowoczesnego użycia za pomocą naszych inteligentnych narzędzi, które mogą konwertować do formatów skompresowanych, zachowując jakość wizualną. Idealne do migracji starszej grafiki do nowoczesnych formatów, optymalizacji sieci i zmniejszania rozmiarów plików dla lepszej wydajności.',
        editor: {
          toggle_sidebar: 'Przełącz Pasek Boczny',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij Pasek Boczny',
          search_placeholder: 'Szukaj plików...',
          files_header: 'Pliki',
          add_files: '+ Dodaj',
          format_badge: 'BMP',
          present: 'Prezentuj',
          exit_presentation: 'Wyjdź',
          start_presentation: 'Rozpocznij Prezentację (Spacja/Strzałki do nawigacji)',
          print_image: 'Drukuj Obraz',
          download_image: 'Pobierz Obraz',
          previous: 'Poprzedni (←)',
          next: 'Następny (→)',
          zoom_out: 'Pomniejsz (-)',
          zoom_in: 'Powiêksz (+)',
          reset_zoom: 'Kliknij, aby zresetować zoom',
          rotate: 'Obróć (R)',
          fullscreen: 'Pełny Ekran (F)'
        }
      }
    }
  },
  de: {
    viewers: {
      bmp: {
        meta_title: 'Kostenloser BMP Viewer – Bitmap-Bilder Online Anzeigen',
        meta_description: 'BMP-Bitmap-Bilder sofort online anzeigen. Kostenloser BMP-Viewer mit Farbtiefenunterstützung, Pixel-Inspektionstools und Batch-Vorschau für bis zu 20 Dateien.',
        meta_keywords: 'BMP Viewer, Bitmap Viewer, Online BMP Viewer, Windows Bitmap, BMP Vorschau, kostenloser BMP Viewer',
        hero_title: 'Kostenloser BMP Viewer',
        hero_subtitle: 'Windows Bitmap (BMP) Bilder mit echter Farbtreue, Pixel-Zoom und Batch-Vorschautools untersuchen.',
        upload_title: 'BMP-Bilder hochladen',
        upload_description: 'Ziehen Sie Ihre BMP-Dateien hierher oder klicken Sie zum Auswählen. Unterstützt bis zu 20 Dateien, 100MB insgesamt, mit sofortiger Browser-Vorschau.',
        upload: {
          drag_drop_text: 'Dateien Hier Ziehen & Ablegen',
          click_browse_text: 'oder klicken Sie auf die Schaltfläche unten zum Durchsuchen',
          choose_files_button: 'Dateien Auswählen',
          max_files_info: 'Max. {maxFiles} Dateien • Bis zu {maxSize} Gesamt'
        },
        buttons: {
          view_files: 'Dateien Anzeigen',
          back: 'Zurück zu Allen Viewern'
        },
        quick_stats: {
          uncompressed: '✓ Unkomprimiert',
          wide_support: '🎨 Breite Unterstützung',
          fast_processing: '⚡ Schnelle Verarbeitung'
        },
        features: [
          { title: 'Echte Farbtreue', description: 'BMP-Bilder mit voller Farbtiefenunterstützung anzeigen, von 1-Bit bis 32-Bit Farbe, mit Erhaltung exakter Pixelwerte' },
          { title: 'Pixel-Level-Inspektion', description: 'Zoomen Sie hinein, um einzelne Pixel mit präzisen Farbinformationen und Koordinatenanzeige zu untersuchen' },
          { title: 'Batch-Vorschau', description: 'Mehrere BMP-Dateien gleichzeitig mit Miniaturansicht-Grid und schneller Navigation zwischen Bildern anzeigen' }
        ],
        about_title: 'Über das BMP-Format',
        about_intro: 'BMP (Bitmap Image File) ist ein Rastergrafikformat, das von Microsoft zur Speicherung unkomprimierter oder leicht komprimierter Bitmap-Daten entwickelt wurde. Es wird aufgrund seiner einfachen Struktur und Unterstützung für mehrere Farbtiefen in Windows-Anwendungen, Legacy-Design-Workflows und eingebetteten Systemen weit verbreitet verwendet.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          'Unkomprimierte Qualität – Kein Verlust von Bilddaten',
          'Breite Kompatibilität – Unterstützt von allen Windows-Anwendungen',
          'Mehrere Farbtiefen – Von 1-Bit bis 32-Bit Farbe',
          'Einfache Struktur – Einfach zu lesen und zu schreiben',
          'Keine Abhängigkeiten – Selbstständiges Format',
          'Legacy-Unterstützung – Funktioniert mit älteren Systemen'
        ],
        use_cases_title: 'Beliebte Anwendungsfälle',
        use_cases: [
          'Windows-Anwendungen – Natives Format für Windows',
          'Legacy-Systeme – Ältere Software und eingebettete Systeme',
          'Bildschirmaufnahmen – Windows-Screenshot-Format',
          'Icon-Erstellung – Windows-Icon-Ressourcen',
          'Einfache Grafiken – Grundlegende Bitmap-Grafiken',
          'Druckvorbereitung – Unkomprimierte Druckdateien'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Spezifikation',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateierweiterung', value: '.bmp' },
          { label: 'MIME-Typ', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Kompression', value: 'Keine (unkomprimiert) oder RLE-Kompression' },
          { label: 'Farbtiefe', value: '1, 4, 8, 16, 24, 32 Bits pro Pixel' },
          { label: 'Maximale Auflösung', value: 'Kein praktisches Limit' },
          { label: 'Farbunterstützung', value: 'RGB, indizierte Farbe, Graustufen' },
          { label: 'Transparenz', value: 'Alpha-Kanal-Unterstützung im 32-Bit-Modus' },
          { label: 'Bytereihenfolge', value: 'Little-Endian (Windows-Standard)' }
        ],
        seo_title: 'BMP Viewer und Konverter Funktionen',
        seo_intro: 'Unser professioneller BMP-Viewer bietet umfassende Unterstützung für Windows Bitmap-Bilder, einschließlich echter Farbtreue, Pixel-Level-Inspektion und Batch-Vorschaufunktionen. Egal, ob Sie mit Legacy-Systemen, Windows-Anwendungen oder eingebetteter Grafik arbeiten, unsere Plattform bietet die Tools, die Sie für die professionelle BMP-Bildverarbeitung benötigen.',
        seo_viewing_title: 'Erweiterte Anzeigefunktionen',
        seo_viewing_text: 'Zeigen Sie BMP-Bilder mit voller Farbtiefenunterstützung, Pixel-Zoom und detaillierten Farbinformationen an. Unser Viewer unterstützt alle BMP-Varianten, einschließlich unkomprimierter, RLE-komprimierter und verschiedener Farbtiefen, und gewährleistet eine genaue Darstellung Ihrer Bitmap-Grafiken.',
        seo_conversion_title: 'Professionelle Konvertierungstools',
        seo_conversion_text: 'Konvertieren Sie BMP-Dateien in PNG, JPEG, WebP und andere moderne Formate, während die optimale Qualität erhalten bleibt. Unsere Konvertierungs-Engine bietet Farbtiefenerhaltung, Transparenzbehandlung und Stapelverarbeitungsfunktionen für die gleichzeitige Verarbeitung mehrerer Dateien.',
        seo_optimization_title: 'Qualitätsoptimierung',
        seo_optimization_text: 'Optimieren Sie BMP-Dateien für den modernen Gebrauch mit unseren intelligenten Tools, die in komprimierte Formate konvertieren können, während die visuelle Qualität erhalten bleibt. Perfekt für die Migration von Legacy-Grafiken zu modernen Formaten, Web-Optimierung und Reduzierung von Dateigrößen für bessere Leistung.',
        editor: {
          toggle_sidebar: 'Seitenleiste Umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Seitenleiste Schließen',
          search_placeholder: 'Dateien suchen...',
          files_header: 'Dateien',
          add_files: '+ Hinzufügen',
          format_badge: 'BMP',
          present: 'Präsentieren',
          exit_presentation: 'Beenden',
          start_presentation: 'Präsentation Starten (Leertaste/Pfeile zum Navigieren)',
          print_image: 'Bild Drucken',
          download_image: 'Bild Herunterladen',
          previous: 'Vorheriges (←)',
          next: 'Nächstes (→)',
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
      bmp: {
        meta_title: 'Visor BMP Gratis - Ver Imágenes de Mapa de Bits Online',
        meta_description: 'Ver imágenes de mapa de bits BMP online instantáneamente. Visor BMP gratis con soporte de profundidad de color, herramientas de inspección de píxeles y vista previa por lotes para hasta 20 archivos.',
        meta_keywords: 'visor BMP, visor de mapa de bits, visor BMP online, mapa de bits Windows, vista previa BMP, visor BMP gratis',
        hero_title: 'Visor BMP Gratis',
        hero_subtitle: 'Inspecciona imágenes Windows Bitmap (BMP) con fidelidad de color verdadera, zoom a nivel de píxel y herramientas de vista previa por lotes.',
        upload_title: 'Subir Imágenes BMP',
        upload_description: 'Arrastra y suelta tus archivos BMP o haz clic para explorar. Soporta hasta 20 archivos, 100MB total, con vista previa instantánea en el navegador.',
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
          uncompressed: '✓ Sin Comprimir',
          wide_support: '🎨 Amplio Soporte',
          fast_processing: '⚡ Procesamiento Rápido'
        },
        features: [
          { title: 'Fidelidad de Color Verdadera', description: 'Ver imágenes BMP con soporte completo de profundidad de color, de 1 bit a 32 bits de color, preservando valores exactos de píxeles' },
          { title: 'Inspección a Nivel de Píxel', description: 'Acerca para inspeccionar píxeles individuales con información precisa de color y visualización de coordenadas' },
          { title: 'Vista Previa por Lotes', description: 'Vista previa de múltiples archivos BMP simultáneamente con cuadrícula de miniaturas y navegación rápida entre imágenes' }
        ],
        about_title: 'Acerca del Formato BMP',
        about_intro: 'BMP (Bitmap Image File) es un formato de gráficos raster desarrollado por Microsoft para almacenar datos de mapa de bits sin comprimir o ligeramente comprimidos. Es ampliamente utilizado en aplicaciones Windows, flujos de trabajo de diseño heredados y sistemas embebidos gracias a su estructura simple y soporte para múltiples profundidades de color.',
        advantages_title: 'Ventajas Clave',
        advantages: [
          'Calidad sin comprimir – Sin pérdida de datos de imagen',
          'Amplia compatibilidad – Compatible con todas las aplicaciones Windows',
          'Múltiples profundidades de color – De 1 bit a 32 bits de color',
          'Estructura simple – Fácil de leer y escribir',
          'Sin dependencias – Formato autocontenido',
          'Soporte heredado – Funciona con sistemas antiguos'
        ],
        use_cases_title: 'Casos de Uso Populares',
        use_cases: [
          'Aplicaciones Windows – Formato nativo para Windows',
          'Sistemas heredados – Software antiguo y sistemas embebidos',
          'Capturas de pantalla – Formato de captura de pantalla Windows',
          'Creación de iconos – Recursos de iconos Windows',
          'Gráficos simples – Gráficos de mapa de bits básicos',
          'Preparación para impresión – Archivos de impresión sin comprimir'
        ],
        specs_title: 'Especificaciones Técnicas',
        specs_header_label: 'Especificación',
        specs_header_value: 'Detalles',
        specs: [
          { label: 'Extensión de Archivo', value: '.bmp' },
          { label: 'Tipo MIME', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Compresión', value: 'Ninguna (sin comprimir) o compresión RLE' },
          { label: 'Profundidad de Color', value: '1, 4, 8, 16, 24, 32 bits por píxel' },
          { label: 'Resolución Máxima', value: 'Sin límite práctico' },
          { label: 'Soporte de Color', value: 'RGB, color indexado, escala de grises' },
          { label: 'Transparencia', value: 'Soporte de canal alfa en modo de 32 bits' },
          { label: 'Orden de Bytes', value: 'Little-endian (estándar Windows)' }
        ],
        seo_title: 'Funciones del Visor y Convertidor BMP',
        seo_intro: 'Nuestro visor BMP profesional proporciona soporte integral para imágenes Windows Bitmap, incluyendo fidelidad de color verdadera, inspección a nivel de píxel y capacidades de vista previa por lotes. Ya trabajes con sistemas heredados, aplicaciones Windows o gráficos embebidos, nuestra plataforma ofrece las herramientas que necesitas para el manejo profesional de imágenes BMP.',
        seo_viewing_title: 'Funciones Avanzadas de Visualización',
        seo_viewing_text: 'Visualiza imágenes BMP con soporte completo de profundidad de color, zoom a nivel de píxel e información detallada de color. Nuestro visor admite todas las variantes BMP, incluyendo sin comprimir, comprimidas RLE y varias profundidades de color, asegurando una representación precisa de tus gráficos de mapa de bits.',
        seo_conversion_title: 'Herramientas de Conversión Profesionales',
        seo_conversion_text: 'Convierte archivos BMP a PNG, JPEG, WebP y otros formatos modernos manteniendo calidad óptima. Nuestro motor de conversión ofrece preservación de profundidad de color, manejo de transparencia y capacidades de procesamiento por lotes para manejar múltiples archivos simultáneamente.',
        seo_optimization_title: 'Optimización de Calidad',
        seo_optimization_text: 'Optimiza archivos BMP para uso moderno con nuestras herramientas inteligentes que pueden convertir a formatos comprimidos preservando la calidad visual. Perfecto para migrar gráficos heredados a formatos modernos, optimización web y reducir tamaños de archivo para mejor rendimiento.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar Barra Lateral',
          search_placeholder: 'Buscar archivos...',
          files_header: 'Archivos',
          add_files: '+ Agregar',
          format_badge: 'BMP',
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
      bmp: {
        meta_title: 'Visionneuse BMP Gratuite - Voir les Images Bitmap en Ligne',
        meta_description: 'Voir les images bitmap BMP en ligne instantanément. Visionneuse BMP gratuite avec support de profondeur de couleur, outils d\'inspection de pixels et aperçu par lots pour jusqu\'à 20 fichiers.',
        meta_keywords: 'visionneuse BMP, visionneuse bitmap, visionneuse BMP en ligne, bitmap Windows, aperçu BMP, visionneuse BMP gratuite',
        hero_title: 'Visionneuse BMP Gratuite',
        hero_subtitle: 'Inspecter les images Windows Bitmap (BMP) avec une fidélité de couleur réelle, un zoom au niveau des pixels et des outils d\'aperçu par lots.',
        upload_title: 'Télécharger des Images BMP',
        upload_description: 'Glissez-déposez vos fichiers BMP ou cliquez pour parcourir. Prend en charge jusqu\'à 20 fichiers, 100 Mo au total, avec aperçu instantané dans le navigateur.',
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
          uncompressed: '✓ Non Compressé',
          wide_support: '🎨 Large Support',
          fast_processing: '⚡ Traitement Rapide'
        },
        features: [
          { title: 'Fidélité de Couleur Réelle', description: 'Voir les images BMP avec support complet de profondeur de couleur, de 1 bit à 32 bits de couleur, préservant les valeurs exactes des pixels' },
          { title: 'Inspection au Niveau des Pixels', description: 'Zoomez pour inspecter les pixels individuels avec des informations de couleur précises et affichage des coordonnées' },
          { title: 'Aperçu par Lots', description: 'Aperçu de plusieurs fichiers BMP simultanément avec grille de miniatures et navigation rapide entre les images' }
        ],
        about_title: 'À Propos du Format BMP',
        about_intro: 'BMP (Bitmap Image File) est un format de graphiques raster développé par Microsoft pour stocker des données bitmap non compressées ou légèrement compressées. Il est largement utilisé dans les applications Windows, les flux de travail de conception hérités et les systèmes embarqués grâce à sa structure simple et son support pour plusieurs profondeurs de couleur.',
        advantages_title: 'Avantages Clés',
        advantages: [
          'Qualité non compressée – Aucune perte de données d\'image',
          'Large compatibilité – Pris en charge par toutes les applications Windows',
          'Plusieurs profondeurs de couleur – De 1 bit à 32 bits de couleur',
          'Structure simple – Facile à lire et à écrire',
          'Aucune dépendance – Format autonome',
          'Support hérité – Fonctionne avec les systèmes plus anciens'
        ],
        use_cases_title: 'Cas d\'Utilisation Populaires',
        use_cases: [
          'Applications Windows – Format natif pour Windows',
          'Systèmes hérités – Logiciels anciens et systèmes embarqués',
          'Captures d\'écran – Format de capture d\'écran Windows',
          'Création d\'icônes – Ressources d\'icônes Windows',
          'Graphiques simples – Graphiques bitmap de base',
          'Préparation à l\'impression – Fichiers d\'impression non compressés'
        ],
        specs_title: 'Spécifications Techniques',
        specs_header_label: 'Spécification',
        specs_header_value: 'Détails',
        specs: [
          { label: 'Extension de Fichier', value: '.bmp' },
          { label: 'Type MIME', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Compression', value: 'Aucune (non compressé) ou compression RLE' },
          { label: 'Profondeur de Couleur', value: '1, 4, 8, 16, 24, 32 bits par pixel' },
          { label: 'Résolution Maximale', value: 'Aucune limite pratique' },
          { label: 'Support de Couleur', value: 'RGB, couleur indexée, niveaux de gris' },
          { label: 'Transparence', value: 'Support de canal alpha en mode 32 bits' },
          { label: 'Ordre des Octets', value: 'Little-endian (standard Windows)' }
        ],
        seo_title: 'Fonctionnalités du Visionneuse et Convertisseur BMP',
        seo_intro: 'Notre visionneuse BMP professionnelle fournit un support complet pour les images Windows Bitmap, y compris la fidélité de couleur réelle, l\'inspection au niveau des pixels et les capacités d\'aperçu par lots. Que vous travailliez avec des systèmes hérités, des applications Windows ou des graphiques embarqués, notre plateforme offre les outils dont vous avez besoin pour la gestion professionnelle des images BMP.',
        seo_viewing_title: 'Fonctionnalités de Visualisation Avancées',
        seo_viewing_text: 'Visualisez les images BMP avec support complet de profondeur de couleur, zoom au niveau des pixels et informations de couleur détaillées. Notre visionneuse prend en charge toutes les variantes BMP, y compris non compressées, compressées RLE et diverses profondeurs de couleur, garantissant une représentation précise de vos graphiques bitmap.',
        seo_conversion_title: 'Outils de Conversion Professionnels',
        seo_conversion_text: 'Convertissez les fichiers BMP en PNG, JPEG, WebP et autres formats modernes tout en maintenant une qualité optimale. Notre moteur de conversion offre la préservation de la profondeur de couleur, la gestion de la transparence et les capacités de traitement par lots pour gérer plusieurs fichiers simultanément.',
        seo_optimization_title: 'Optimisation de la Qualité',
        seo_optimization_text: 'Optimisez les fichiers BMP pour une utilisation moderne avec nos outils intelligents qui peuvent convertir en formats compressés tout en préservant la qualité visuelle. Parfait pour migrer des graphiques hérités vers des formats modernes, l\'optimisation web et la réduction des tailles de fichier pour de meilleures performances.',
        editor: {
          toggle_sidebar: 'Basculer la Barre Latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la Barre Latérale',
          search_placeholder: 'Rechercher des fichiers...',
          files_header: 'Fichiers',
          add_files: '+ Ajouter',
          format_badge: 'BMP',
          present: 'Présenter',
          exit_presentation: 'Quitter',
          start_presentation: 'Démarrer la Présentation (Espace/Flèches pour naviguer)',
          print_image: 'Imprimer l\'Image',
          download_image: 'Télécharger l\'Image',
          previous: 'Précédent (←)',
          next: 'Suivant (→)',
          zoom_out: 'Zoom Arrière (-)',
          zoom_in: 'Zoom Avant (+)',
          reset_zoom: 'Cliquer pour réinitialiser le zoom',
          rotate: 'Tourner (R)',
          fullscreen: 'Plein Écran (F)'
        }
      }
    }
  },
  it: {
    viewers: {
      bmp: {
        meta_title: 'Visualizzatore BMP Gratuito - Visualizza Immagini Bitmap Online',
        meta_description: 'Visualizza immagini bitmap BMP online istantaneamente. Visualizzatore BMP gratuito con supporto profondità colore, strumenti di ispezione pixel e anteprima batch per fino a 20 file.',
        meta_keywords: 'visualizzatore BMP, visualizzatore bitmap, visualizzatore BMP online, bitmap Windows, anteprima BMP, visualizzatore BMP gratuito',
        hero_title: 'Visualizzatore BMP Gratuito',
        hero_subtitle: 'Ispeziona immagini Windows Bitmap (BMP) con fedeltà colore reale, zoom a livello pixel e strumenti di anteprima batch.',
        upload_title: 'Carica Immagini BMP',
        upload_description: 'Trascina e rilascia i tuoi file BMP o fai clic per sfogliare. Supporta fino a 20 file, 100MB totali, con anteprima istantanea nel browser.',
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
          uncompressed: '✓ Non Compresso',
          wide_support: '🎨 Ampio Supporto',
          fast_processing: '⚡ Elaborazione Veloce'
        },
        features: [
          { title: 'Fedeltà Colore Reale', description: 'Visualizza immagini BMP con supporto completo profondità colore, da 1 bit a 32 bit colore, preservando valori pixel esatti' },
          { title: 'Ispezione a Livello Pixel', description: 'Ingrandisci per ispezionare pixel individuali con informazioni colore precise e visualizzazione coordinate' },
          { title: 'Anteprima Batch', description: 'Anteprima di più file BMP simultaneamente con griglia miniature e navigazione rapida tra immagini' }
        ],
        about_title: 'Informazioni sul Formato BMP',
        about_intro: 'BMP (Bitmap Image File) è un formato grafico raster sviluppato da Microsoft per memorizzare dati bitmap non compressi o leggermente compressi. È ampiamente utilizzato in applicazioni Windows, flussi di lavoro di progettazione legacy e sistemi embedded grazie alla sua struttura semplice e supporto per multiple profondità colore.',
        advantages_title: 'Vantaggi Chiave',
        advantages: [
          'Qualità non compressa – Nessuna perdita di dati immagine',
          'Ampia compatibilità – Supportato da tutte le applicazioni Windows',
          'Multiple profondità colore – Da 1 bit a 32 bit colore',
          'Struttura semplice – Facile da leggere e scrivere',
          'Nessuna dipendenza – Formato autonomo',
          'Supporto legacy – Funziona con sistemi più vecchi'
        ],
        use_cases_title: 'Casi d\'Uso Popolari',
        use_cases: [
          'Applicazioni Windows – Formato nativo per Windows',
          'Sistemi legacy – Software più vecchio e sistemi embedded',
          'Catture schermo – Formato screenshot Windows',
          'Creazione icone – Risorse icone Windows',
          'Grafica semplice – Grafica bitmap di base',
          'Preparazione stampa – File di stampa non compressi'
        ],
        specs_title: 'Specifiche Tecniche',
        specs_header_label: 'Specifica',
        specs_header_value: 'Dettagli',
        specs: [
          { label: 'Estensione File', value: '.bmp' },
          { label: 'Tipo MIME', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Compressione', value: 'Nessuna (non compresso) o compressione RLE' },
          { label: 'Profondità Colore', value: '1, 4, 8, 16, 24, 32 bit per pixel' },
          { label: 'Risoluzione Massima', value: 'Nessun limite pratico' },
          { label: 'Supporto Colore', value: 'RGB, colore indicizzato, scala di grigi' },
          { label: 'Trasparenza', value: 'Supporto canale alfa in modalità 32 bit' },
          { label: 'Ordine Byte', value: 'Little-endian (standard Windows)' }
        ],
        seo_title: 'Funzionalità Visualizzatore e Convertitore BMP',
        seo_intro: 'Il nostro visualizzatore BMP professionale fornisce supporto completo per immagini Windows Bitmap, inclusa fedeltà colore reale, ispezione a livello pixel e capacità anteprima batch. Che tu lavori con sistemi legacy, applicazioni Windows o grafica embedded, la nostra piattaforma offre gli strumenti di cui hai bisogno per la gestione professionale di immagini BMP.',
        seo_viewing_title: 'Funzionalità di Visualizzazione Avanzate',
        seo_viewing_text: 'Visualizza immagini BMP con supporto completo profondità colore, zoom a livello pixel e informazioni colore dettagliate. Il nostro visualizzatore supporta tutte le varianti BMP, inclusa non compressa, compressa RLE e varie profondità colore, garantendo una rappresentazione accurata dei tuoi grafici bitmap.',
        seo_conversion_title: 'Strumenti di Conversione Professionali',
        seo_conversion_text: 'Converti file BMP in PNG, JPEG, WebP e altri formati moderni mantenendo qualità ottimale. Il nostro motore di conversione offre preservazione profondità colore, gestione trasparenza e capacità di elaborazione batch per gestire più file contemporaneamente.',
        seo_optimization_title: 'Ottimizzazione Qualità',
        seo_optimization_text: 'Ottimizza file BMP per uso moderno con i nostri strumenti intelligenti che possono convertire in formati compressi preservando la qualità visiva. Perfetto per migrare grafica legacy a formati moderni, ottimizzazione web e ridurre dimensioni file per migliore prestazione.',
        editor: {
          toggle_sidebar: 'Mostra/Nascondi Barra Laterale',
          close: 'Chiudi (Esc)',
          close_sidebar: 'Chiudi Barra Laterale',
          search_placeholder: 'Cerca file...',
          files_header: 'File',
          add_files: '+ Aggiungi',
          format_badge: 'BMP',
          present: 'Presenta',
          exit_presentation: 'Esci',
          start_presentation: 'Inizia Presentazione (Spazio/Frecce per navigare)',
          print_image: 'Stampa Immagine',
          download_image: 'Scarica Immagine',
          previous: 'Precedente (←)',
          next: 'Successivo (→)',
          zoom_out: 'Zoom Indietro (-)',
          zoom_in: 'Zoom Avanti (+)',
          reset_zoom: 'Clicca per resettare zoom',
          rotate: 'Ruota (R)',
          fullscreen: 'Schermo Intero (F)'
        }
      }
    }
  },
  nl: {
    viewers: {
      bmp: {
        meta_title: 'Gratis BMP Viewer - Bekijk Bitmap Afbeeldingen Online',
        meta_description: 'Bekijk BMP bitmap afbeeldingen online direct. Gratis BMP viewer met kleurdiepte-ondersteuning, pixel-inspectietools en batch-voorvertoning voor tot 20 bestanden.',
        meta_keywords: 'BMP viewer, bitmap viewer, online BMP viewer, Windows bitmap, BMP voorvertoning, gratis BMP viewer',
        hero_title: 'Gratis BMP Viewer',
        hero_subtitle: 'Inspecteer Windows Bitmap (BMP) afbeeldingen met echte kleurgetrouwheid, pixel-niveau zoom en batch-voorvertoningstools.',
        upload_title: 'Upload BMP Afbeeldingen',
        upload_description: 'Sleep en zet je BMP bestanden neer of klik om te bladeren. Ondersteunt tot 20 bestanden, 100MB totaal, met directe browser-voorvertoning.',
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
          uncompressed: '✓ Ongecomprimeerd',
          wide_support: '🎨 Breed Ondersteund',
          fast_processing: '⚡ Snelle Verwerking'
        },
        features: [
          { title: 'Echte Kleurgetrouwheid', description: 'Bekijk BMP afbeeldingen met volledige kleurdiepte-ondersteuning, van 1-bit tot 32-bit kleur, met behoud van exacte pixelwaarden' },
          { title: 'Pixel-Niveau Inspectie', description: 'Zoom in om individuele pixels te inspecteren met nauwkeurige kleurinformatie en coördinatenweergave' },
          { title: 'Batch-Voorvertoning', description: 'Voorvertoning van meerdere BMP bestanden tegelijk met miniatuurgrid en snelle navigatie tussen afbeeldingen' }
        ],
        about_title: 'Over BMP Formaat',
        about_intro: 'BMP (Bitmap Image File) is een rastergrafiekformaat ontwikkeld door Microsoft voor het opslaan van ongecomprimeerde of licht gecomprimeerde bitmapgegevens. Het wordt veel gebruikt in Windows-applicaties, legacy design workflows en embedded systemen dankzij de eenvoudige structuur en ondersteuning voor meerdere kleurdieptes.',
        advantages_title: 'Belangrijkste Voordelen',
        advantages: [
          'Ongecomprimeerde kwaliteit – Geen verlies van beeldgegevens',
          'Brede compatibiliteit – Ondersteund door alle Windows-applicaties',
          'Meerdere kleurdieptes – Van 1-bit tot 32-bit kleur',
          'Eenvoudige structuur – Gemakkelijk te lezen en schrijven',
          'Geen afhankelijkheden – Zelfstandig formaat',
          'Legacy-ondersteuning – Werkt met oudere systemen'
        ],
        use_cases_title: 'Populaire Gebruikssituaties',
        use_cases: [
          'Windows-applicaties – Native formaat voor Windows',
          'Legacy-systemen – Oudere software en embedded systemen',
          'Schermafbeeldingen – Windows screenshot-formaat',
          'Icon-creatie – Windows icon-bronnen',
          'Eenvoudige grafiek – Basis bitmapgrafiek',
          'Printvoorbereiding – Ongecomprimeerde printfiles'
        ],
        specs_title: 'Technische Specificaties',
        specs_header_label: 'Specificatie',
        specs_header_value: 'Details',
        specs: [
          { label: 'Bestandsextensie', value: '.bmp' },
          { label: 'MIME Type', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Compressie', value: 'Geen (ongecomprimeerd) of RLE-compressie' },
          { label: 'Kleurdiepte', value: '1, 4, 8, 16, 24, 32 bits per pixel' },
          { label: 'Maximale Resolutie', value: 'Geen praktische limiet' },
          { label: 'Kleurondersteuning', value: 'RGB, geïndexeerde kleur, grijstinten' },
          { label: 'Transparantie', value: 'Alpha-kanaalondersteuning in 32-bit modus' },
          { label: 'Bytevolgorde', value: 'Little-endian (Windows-standaard)' }
        ],
        seo_title: 'BMP Viewer en Converter Functies',
        seo_intro: 'Onze professionele BMP viewer biedt uitgebreide ondersteuning voor Windows Bitmap afbeeldingen, inclusief echte kleurgetrouwheid, pixel-niveau inspectie en batch-voorvertoningsmogelijkheden. Of je nu werkt met legacy-systemen, Windows-applicaties of embedded grafiek, ons platform biedt de tools die je nodig hebt voor professionele BMP-afbeeldingsverwerking.',
        seo_viewing_title: 'Geavanceerde Weergavefuncties',
        seo_viewing_text: 'Bekijk BMP afbeeldingen met volledige kleurdiepte-ondersteuning, pixel-niveau zoom en gedetailleerde kleurinformatie. Onze viewer ondersteunt alle BMP-varianten, inclusief ongecomprimeerde, RLE-gecomprimeerde en verschillende kleurdieptes, waardoor nauwkeurige weergave van je bitmapgrafiek wordt gegarandeerd.',
        seo_conversion_title: 'Professionele Conversietools',
        seo_conversion_text: 'Converteer BMP bestanden naar PNG, JPEG, WebP en andere moderne formaten terwijl de optimale kwaliteit behouden blijft. Onze conversie-engine biedt kleurdiepte-behoud, transparantiebehandeling en batchverwerkingsmogelijkheden voor het gelijktijdig verwerken van meerdere bestanden.',
        seo_optimization_title: 'Kwaliteitsoptimalisatie',
        seo_optimization_text: 'Optimaliseer BMP bestanden voor modern gebruik met onze slimme tools die kunnen converteren naar gecomprimeerde formaten terwijl de visuele kwaliteit behouden blijft. Perfect voor het migreren van legacy-grafiek naar moderne formaten, website-optimalisatie en het verkleinen van bestandsgroottes voor betere prestaties.',
        editor: {
          toggle_sidebar: 'Zijbalk In-/Uitschakelen',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk Sluiten',
          search_placeholder: 'Zoek bestanden...',
          files_header: 'Bestanden',
          add_files: '+ Toevoegen',
          format_badge: 'BMP',
          present: 'Presenteren',
          exit_presentation: 'Afsluiten',
          start_presentation: 'Presentatie Starten (Spatie/Pijlen om te navigeren)',
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
      bmp: {
        meta_title: 'Visualizador BMP Gratuito - Ver Imagens Bitmap Online',
        meta_description: 'Ver imagens bitmap BMP online instantaneamente. Visualizador BMP gratuito com suporte de profundidade de cor, ferramentas de inspeção de pixels e visualização em lote para até 20 arquivos.',
        meta_keywords: 'visualizador BMP, visualizador bitmap, visualizador BMP online, bitmap Windows, visualização BMP, visualizador BMP gratuito',
        hero_title: 'Visualizador BMP Gratuito',
        hero_subtitle: 'Inspecione imagens Windows Bitmap (BMP) com fidelidade de cor verdadeira, zoom em nível de pixel e ferramentas de visualização em lote.',
        upload_title: 'Carregar Imagens BMP',
        upload_description: 'Arraste e solte seus arquivos BMP ou clique para procurar. Suporta até 20 arquivos, 100MB no total, com visualização instantânea no navegador.',
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
          uncompressed: '✓ Não Comprimido',
          wide_support: '🎨 Amplo Suporte',
          fast_processing: '⚡ Processamento Rápido'
        },
        features: [
          { title: 'Fidelidade de Cor Verdadeira', description: 'Ver imagens BMP com suporte completo de profundidade de cor, de 1 bit a 32 bits de cor, preservando valores exatos de pixels' },
          { title: 'Inspeção em Nível de Pixel', description: 'Aproxime para inspecionar pixels individuais com informações precisas de cor e exibição de coordenadas' },
          { title: 'Visualização em Lote', description: 'Visualização de múltiplos arquivos BMP simultaneamente com grade de miniaturas e navegação rápida entre imagens' }
        ],
        about_title: 'Sobre o Formato BMP',
        about_intro: 'BMP (Bitmap Image File) é um formato de gráficos raster desenvolvido pela Microsoft para armazenar dados bitmap não comprimidos ou levemente comprimidos. É amplamente usado em aplicações Windows, fluxos de trabalho de design legados e sistemas embarcados graças à sua estrutura simples e suporte para múltiplas profundidades de cor.',
        advantages_title: 'Vantagens Principais',
        advantages: [
          'Qualidade não comprimida – Sem perda de dados de imagem',
          'Ampla compatibilidade – Suportado por todas as aplicações Windows',
          'Múltiplas profundidades de cor – De 1 bit a 32 bits de cor',
          'Estrutura simples – Fácil de ler e escrever',
          'Sem dependências – Formato autocontido',
          'Suporte legado – Funciona com sistemas mais antigos'
        ],
        use_cases_title: 'Casos de Uso Populares',
        use_cases: [
          'Aplicações Windows – Formato nativo para Windows',
          'Sistemas legados – Software antigo e sistemas embarcados',
          'Capturas de tela – Formato de captura de tela Windows',
          'Criação de ícones – Recursos de ícones Windows',
          'Gráficos simples – Gráficos bitmap básicos',
          'Preparação para impressão – Arquivos de impressão não comprimidos'
        ],
        specs_title: 'Especificações Técnicas',
        specs_header_label: 'Especificação',
        specs_header_value: 'Detalhes',
        specs: [
          { label: 'Extensão de Arquivo', value: '.bmp' },
          { label: 'Tipo MIME', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Compressão', value: 'Nenhuma (não comprimido) ou compressão RLE' },
          { label: 'Profundidade de Cor', value: '1, 4, 8, 16, 24, 32 bits por pixel' },
          { label: 'Resolução Máxima', value: 'Sem limite prático' },
          { label: 'Suporte de Cor', value: 'RGB, cor indexada, escala de cinza' },
          { label: 'Transparência', value: 'Suporte de canal alfa no modo de 32 bits' },
          { label: 'Ordem de Bytes', value: 'Little-endian (padrão Windows)' }
        ],
        seo_title: 'Recursos do Visualizador e Conversor BMP',
        seo_intro: 'Nosso visualizador BMP profissional fornece suporte abrangente para imagens Windows Bitmap, incluindo fidelidade de cor verdadeira, inspeção em nível de pixel e capacidades de visualização em lote. Seja você trabalhando com sistemas legados, aplicações Windows ou gráficos embarcados, nossa plataforma oferece as ferramentas necessárias para o processamento profissional de imagens BMP.',
        seo_viewing_title: 'Recursos Avançados de Visualização',
        seo_viewing_text: 'Visualize imagens BMP com suporte completo de profundidade de cor, zoom em nível de pixel e informações detalhadas de cor. Nosso visualizador suporta todas as variantes BMP, incluindo não comprimidas, comprimidas RLE e várias profundidades de cor, garantindo representação precisa dos seus gráficos bitmap.',
        seo_conversion_title: 'Ferramentas de Conversão Profissionais',
        seo_conversion_text: 'Converta arquivos BMP para PNG, JPEG, WebP e outros formatos modernos mantendo qualidade ótima. Nosso mecanismo de conversão oferece preservação de profundidade de cor, tratamento de transparência e capacidades de processamento em lote para lidar com múltiplos arquivos simultaneamente.',
        seo_optimization_title: 'Otimização de Qualidade',
        seo_optimization_text: 'Otimize arquivos BMP para uso moderno com nossas ferramentas inteligentes que podem converter para formatos comprimidos preservando a qualidade visual. Perfeito para migrar gráficos legados para formatos modernos, otimização web e reduzir tamanhos de arquivo para melhor desempenho.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar Barra Lateral',
          search_placeholder: 'Pesquisar arquivos...',
          files_header: 'Arquivos',
          add_files: '+ Adicionar',
          format_badge: 'BMP',
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
      bmp: {
        meta_title: 'Trình Xem BMP Miễn Phí - Xem Hình Ảnh Bitmap Trực Tuyến',
        meta_description: 'Xem hình ảnh bitmap BMP trực tuyến ngay lập tức. Trình xem BMP miễn phí với hỗ trợ độ sâu màu, công cụ kiểm tra pixel và xem trước hàng loạt cho tối đa 20 tệp.',
        meta_keywords: 'trình xem BMP, trình xem bitmap, trình xem BMP trực tuyến, bitmap Windows, xem trước BMP, trình xem BMP miễn phí',
        hero_title: 'Trình Xem BMP Miễn Phí',
        hero_subtitle: 'Kiểm tra hình ảnh Windows Bitmap (BMP) với độ trung thực màu sắc thực sự, zoom mức pixel và công cụ xem trước hàng loạt.',
        upload_title: 'Tải Lên Hình Ảnh BMP',
        upload_description: 'Kéo và thả tệp BMP của bạn hoặc nhấp để duyệt. Hỗ trợ tối đa 20 tệp, 100MB tổng cộng, với xem trước ngay trong trình duyệt.',
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
          uncompressed: '✓ Không Nén',
          wide_support: '🎨 Hỗ Trợ Rộng',
          fast_processing: '⚡ Xử Lý Nhanh'
        },
        features: [
          { title: 'Độ Trung Thực Màu Sắc Thực Sự', description: 'Xem hình ảnh BMP với hỗ trợ độ sâu màu đầy đủ, từ 1 bit đến 32 bit màu, bảo toàn giá trị pixel chính xác' },
          { title: 'Kiểm Tra Mức Pixel', description: 'Phóng to để kiểm tra pixel riêng lẻ với thông tin màu chính xác và hiển thị tọa độ' },
          { title: 'Xem Trước Hàng Loạt', description: 'Xem trước nhiều tệp BMP đồng thời với lưới hình thu nhỏ và điều hướng nhanh giữa các hình ảnh' }
        ],
        about_title: 'Về Định Dạng BMP',
        about_intro: 'BMP (Bitmap Image File) là định dạng đồ họa raster được phát triển bởi Microsoft để lưu trữ dữ liệu bitmap không nén hoặc nén nhẹ. Nó được sử dụng rộng rãi trong các ứng dụng Windows, quy trình thiết kế cũ và hệ thống nhúng nhờ cấu trúc đơn giản và hỗ trợ nhiều độ sâu màu.',
        advantages_title: 'Ưu Điểm Chính',
        advantages: [
          'Chất lượng không nén – Không mất dữ liệu hình ảnh',
          'Tương thích rộng – Được hỗ trợ bởi tất cả ứng dụng Windows',
          'Nhiều độ sâu màu – Từ 1 bit đến 32 bit màu',
          'Cấu trúc đơn giản – Dễ đọc và ghi',
          'Không phụ thuộc – Định dạng tự chứa',
          'Hỗ trợ cũ – Hoạt động với hệ thống cũ hơn'
        ],
        use_cases_title: 'Trường Hợp Sử Dụng Phổ Biến',
        use_cases: [
          'Ứng dụng Windows – Định dạng gốc cho Windows',
          'Hệ thống cũ – Phần mềm cũ và hệ thống nhúng',
          'Chụp màn hình – Định dạng chụp màn hình Windows',
          'Tạo biểu tượng – Tài nguyên biểu tượng Windows',
          'Đồ họa đơn giản – Đồ họa bitmap cơ bản',
          'Chuẩn bị in – Tệp in không nén'
        ],
        specs_title: 'Thông Số Kỹ Thuật',
        specs_header_label: 'Thông Số',
        specs_header_value: 'Chi Tiết',
        specs: [
          { label: 'Phần Mở Rộng Tệp', value: '.bmp' },
          { label: 'Loại MIME', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Nén', value: 'Không (không nén) hoặc nén RLE' },
          { label: 'Độ Sâu Màu', value: '1, 4, 8, 16, 24, 32 bit mỗi pixel' },
          { label: 'Độ Phân Giải Tối Đa', value: 'Không có giới hạn thực tế' },
          { label: 'Hỗ Trợ Màu', value: 'RGB, màu được lập chỉ mục, thang độ xám' },
          { label: 'Độ Trong Suốt', value: 'Hỗ trợ kênh alpha ở chế độ 32 bit' },
          { label: 'Thứ Tự Byte', value: 'Little-endian (chuẩn Windows)' }
        ],
        seo_title: 'Tính Năng Trình Xem và Chuyển Đổi BMP',
        seo_intro: 'Trình xem BMP chuyên nghiệp của chúng tôi cung cấp hỗ trợ toàn diện cho hình ảnh Windows Bitmap, bao gồm độ trung thực màu sắc thực sự, kiểm tra mức pixel và khả năng xem trước hàng loạt. Dù bạn đang làm việc với hệ thống cũ, ứng dụng Windows hay đồ họa nhúng, nền tảng của chúng tôi cung cấp các công cụ bạn cần để xử lý hình ảnh BMP chuyên nghiệp.',
        seo_viewing_title: 'Tính Năng Xem Nâng Cao',
        seo_viewing_text: 'Xem hình ảnh BMP với hỗ trợ độ sâu màu đầy đủ, zoom mức pixel và thông tin màu chi tiết. Trình xem của chúng tôi hỗ trợ tất cả các biến thể BMP, bao gồm không nén, nén RLE và các độ sâu màu khác nhau, đảm bảo biểu diễn chính xác đồ họa bitmap của bạn.',
        seo_conversion_title: 'Công Cụ Chuyển Đổi Chuyên Nghiệp',
        seo_conversion_text: 'Chuyển đổi tệp BMP sang PNG, JPEG, WebP và các định dạng hiện đại khác trong khi duy trì chất lượng tối ưu. Công cụ chuyển đổi của chúng tôi cung cấp bảo toàn độ sâu màu, xử lý độ trong suốt và khả năng xử lý hàng loạt để xử lý nhiều tệp đồng thời.',
        seo_optimization_title: 'Tối Ưu Hóa Chất Lượng',
        seo_optimization_text: 'Tối ưu hóa tệp BMP cho sử dụng hiện đại với các công cụ thông minh của chúng tôi có thể chuyển đổi sang định dạng nén trong khi bảo toàn chất lượng hình ảnh. Hoàn hảo cho việc di chuyển đồ họa cũ sang định dạng hiện đại, tối ưu hóa web và giảm kích thước tệp để hiệu suất tốt hơn.',
        editor: {
          toggle_sidebar: 'Chuyển Đổi Thanh Bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng Thanh Bên',
          search_placeholder: 'Tìm kiếm tệp...',
          files_header: 'Tệp',
          add_files: '+ Thêm',
          format_badge: 'BMP',
          present: 'Trình Bày',
          exit_presentation: 'Thoát',
          start_presentation: 'Bắt Đầu Trình Bày (Phím Cách/Mũi Tên để điều hướng)',
          print_image: 'In Hình Ảnh',
          download_image: 'Tải Xuống Hình Ảnh',
          previous: 'Trước (←)',
          next: 'Tiếp (→)',
          zoom_out: 'Thu Nhỏ (-)',
          zoom_in: 'Phóng To (+)',
          reset_zoom: 'Nhấp để đặt lại zoom',
          rotate: 'Xoay (R)',
          fullscreen: 'Toàn Màn Hình (F)'
        }
      }
    }
  },
  tr: {
    viewers: {
      bmp: {
        meta_title: 'Ücretsiz BMP Görüntüleyici - Bitmap Görüntüleri Online Görüntüle',
        meta_description: 'BMP bitmap görüntülerini anında online görüntüleyin. Renk derinliği desteği, piksel inceleme araçları ve 20 dosyaya kadar toplu önizleme ile ücretsiz BMP görüntüleyici.',
        meta_keywords: 'BMP görüntüleyici, bitmap görüntüleyici, online BMP görüntüleyici, Windows bitmap, BMP önizleme, ücretsiz BMP görüntüleyici',
        hero_title: 'Ücretsiz BMP Görüntüleyici',
        hero_subtitle: 'Gerçek renk doğruluğu, piksel düzeyinde yakınlaştırma ve toplu önizleme araçları ile Windows Bitmap (BMP) görüntülerini inceleyin.',
        upload_title: 'BMP Görüntülerini Yükle',
        upload_description: 'BMP dosyalarınızı sürükleyip bırakın veya göz atmak için tıklayın. Toplam 100MB\'a kadar 20 dosyaya kadar destekler, tarayıcıda anında önizleme ile.',
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
          uncompressed: '✓ Sıkıştırılmamış',
          wide_support: '🎨 Geniş Destek',
          fast_processing: '⚡ Hızlı İşleme'
        },
        features: [
          { title: 'Gerçek Renk Doğruluğu', description: 'Tam renk derinliği desteği ile BMP görüntülerini görüntüleyin, 1 bit\'ten 32 bit renge kadar, kesin piksel değerlerini koruyarak' },
          { title: 'Piksel Düzeyinde İnceleme', description: 'Kesin renk bilgileri ve koordinat görüntüleme ile tek tek pikselleri incelemek için yakınlaştırın' },
          { title: 'Toplu Önizleme', description: 'Küçük resim ızgarası ve görüntüler arasında hızlı gezinme ile birden fazla BMP dosyasını aynı anda önizleyin' }
        ],
        about_title: 'BMP Formatı Hakkında',
        about_intro: 'BMP (Bitmap Image File), Microsoft tarafından sıkıştırılmamış veya hafifçe sıkıştırılmış bitmap verilerini depolamak için geliştirilmiş bir raster grafik formatıdır. Basit yapısı ve birden fazla renk derinliği desteği sayesinde Windows uygulamaları, eski tasarım iş akışları ve gömülü sistemlerde yaygın olarak kullanılmaktadır.',
        advantages_title: 'Temel Avantajlar',
        advantages: [
          'Sıkıştırılmamış kalite – Görüntü verisi kaybı yok',
          'Geniş uyumluluk – Tüm Windows uygulamaları tarafından desteklenir',
          'Birden fazla renk derinliği – 1 bit\'ten 32 bit renge kadar',
          'Basit yapı – Okunması ve yazılması kolay',
          'Bağımlılık yok – Kendi kendine yeten format',
          'Eski sistem desteği – Eski sistemlerle çalışır'
        ],
        use_cases_title: 'Popüler Kullanım Durumları',
        use_cases: [
          'Windows uygulamaları – Windows için yerel format',
          'Eski sistemler – Eski yazılım ve gömülü sistemler',
          'Ekran yakalama – Windows ekran görüntüsü formatı',
          'İkon oluşturma – Windows ikon kaynakları',
          'Basit grafikler – Temel bitmap grafikleri',
          'Yazdırma hazırlığı – Sıkıştırılmamış yazdırma dosyaları'
        ],
        specs_title: 'Teknik Özellikler',
        specs_header_label: 'Özellik',
        specs_header_value: 'Detaylar',
        specs: [
          { label: 'Dosya Uzantısı', value: '.bmp' },
          { label: 'MIME Türü', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Sıkıştırma', value: 'Yok (sıkıştırılmamış) veya RLE sıkıştırması' },
          { label: 'Renk Derinliği', value: 'Piksel başına 1, 4, 8, 16, 24, 32 bit' },
          { label: 'Maksimum Çözünürlük', value: 'Pratik limit yok' },
          { label: 'Renk Desteği', value: 'RGB, indekslenmiş renk, gri tonlama' },
          { label: 'Şeffaflık', value: '32 bit modda alfa kanalı desteği' },
          { label: 'Bayt Sırası', value: 'Little-endian (Windows standardı)' }
        ],
        seo_title: 'BMP Görüntüleyici ve Dönüştürücü Özellikleri',
        seo_intro: 'Profesyonel BMP görüntüleyicimiz, gerçek renk doğruluğu, piksel düzeyinde inceleme ve toplu önizleme yetenekleri dahil olmak üzere Windows Bitmap görüntüleri için kapsamlı destek sağlar. İster eski sistemler, Windows uygulamaları veya gömülü grafiklerle çalışıyor olun, platformumuz profesyonel BMP görüntü işleme için ihtiyacınız olan araçları sunar.',
        seo_viewing_title: 'Gelişmiş Görüntüleme Özellikleri',
        seo_viewing_text: 'Tam renk derinliği desteği, piksel düzeyinde yakınlaştırma ve detaylı renk bilgileri ile BMP görüntülerini görüntüleyin. Görüntüleyicimiz, sıkıştırılmamış, RLE sıkıştırılmış ve çeşitli renk derinlikleri dahil olmak üzere tüm BMP varyantlarını destekler ve bitmap grafiklerinizin doğru temsilini sağlar.',
        seo_conversion_title: 'Profesyonel Dönüştürme Araçları',
        seo_conversion_text: 'Optimal kaliteyi korurken BMP dosyalarını PNG, JPEG, WebP ve diğer modern formatlara dönüştürün. Dönüştürme motorumuz, birden fazla dosyayı aynı anda işlemek için renk derinliği koruma, şeffaflık işleme ve toplu işleme yetenekleri sunar.',
        seo_optimization_title: 'Kalite Optimizasyonu',
        seo_optimization_text: 'Görsel kaliteyi korurken sıkıştırılmış formatlara dönüştürebilen akıllı araçlarımızla BMP dosyalarını modern kullanım için optimize edin. Eski grafikleri modern formatlara geçirme, web optimizasyonu ve daha iyi performans için dosya boyutlarını azaltma için mükemmeldir.',
        editor: {
          toggle_sidebar: 'Kenar Çubuğunu Aç/Kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar Çubuğunu Kapat',
          search_placeholder: 'Dosyaları ara...',
          files_header: 'Dosyalar',
          add_files: '+ Ekle',
          format_badge: 'BMP',
          present: 'Sun',
          exit_presentation: 'Çık',
          start_presentation: 'Sunumu Başlat (Boşluk/Ok tuşları ile gez)',
          print_image: 'Görseli Yazdır',
          download_image: 'Görseli İndir',
          previous: 'Önceki (←)',
          next: 'Sonraki (→)',
          zoom_out: 'Uzaklaştır (-)',
          zoom_in: 'Yakınlaştır (+)',
          reset_zoom: 'Zoom\'u sıfırlamak için tıklayın',
          rotate: 'Döndür (R)',
          fullscreen: 'Tam Ekran (F)'
        }
      }
    }
  },
  ru: {
    viewers: {
      bmp: {
        meta_title: 'Бесплатный Просмотрщик BMP - Просмотр Растровых Изображений Онлайн',
        meta_description: 'Просматривайте растровые изображения BMP онлайн мгновенно. Бесплатный просмотрщик BMP с поддержкой глубины цвета, инструментами проверки пикселей и пакетным предпросмотром для до 20 файлов.',
        meta_keywords: 'просмотрщик BMP, просмотрщик bitmap, онлайн просмотрщик BMP, bitmap Windows, предпросмотр BMP, бесплатный просмотрщик BMP',
        hero_title: 'Бесплатный Просмотрщик BMP',
        hero_subtitle: 'Проверяйте изображения Windows Bitmap (BMP) с истинной точностью цветопередачи, масштабированием на уровне пикселей и инструментами пакетного предпросмотра.',
        upload_title: 'Загрузить Изображения BMP',
        upload_description: 'Перетащите ваши файлы BMP или нажмите для просмотра. Поддерживает до 20 файлов, 100 МБ всего, с мгновенным предпросмотром в браузере.',
        upload: {
          drag_drop_text: 'Перетащите Ваши Файлы Сюда',
          click_browse_text: 'или нажмите кнопку ниже для просмотра',
          choose_files_button: 'Выбрать Файлы',
          max_files_info: 'Макс. {maxFiles} файлов • До {maxSize} Всего'
        },
        buttons: {
          view_files: 'Просмотреть Файлы',
          back: 'Назад ко Всем Просмотрщикам'
        },
        quick_stats: {
          uncompressed: '✓ Несжатый',
          wide_support: '🎨 Широкая Поддержка',
          fast_processing: '⚡ Быстрая Обработка'
        },
        features: [
          { title: 'Истинная Точность Цветопередачи', description: 'Просматривайте изображения BMP с полной поддержкой глубины цвета, от 1-битного до 32-битного цвета, сохраняя точные значения пикселей' },
          { title: 'Проверка на Уровне Пикселей', description: 'Увеличьте масштаб для проверки отдельных пикселей с точной информацией о цвете и отображением координат' },
          { title: 'Пакетный Предпросмотр', description: 'Предпросмотр нескольких файлов BMP одновременно с сеткой миниатюр и быстрой навигацией между изображениями' }
        ],
        about_title: 'О Формате BMP',
        about_intro: 'BMP (Bitmap Image File) — это формат растровой графики, разработанный Microsoft для хранения несжатых или слегка сжатых данных bitmap. Он широко используется в приложениях Windows, устаревших рабочих процессах проектирования и встроенных системах благодаря своей простой структуре и поддержке нескольких глубин цвета.',
        advantages_title: 'Ключевые Преимущества',
        advantages: [
          'Несжатое качество – Без потери данных изображения',
          'Широкая совместимость – Поддерживается всеми приложениями Windows',
          'Несколько глубин цвета – От 1-битного до 32-битного цвета',
          'Простая структура – Легко читать и записывать',
          'Без зависимостей – Самодостаточный формат',
          'Поддержка устаревших систем – Работает со старыми системами'
        ],
        use_cases_title: 'Популярные Случаи Использования',
        use_cases: [
          'Приложения Windows – Нативный формат для Windows',
          'Устаревшие системы – Старое программное обеспечение и встроенные системы',
          'Снимки экрана – Формат снимка экрана Windows',
          'Создание иконок – Ресурсы иконок Windows',
          'Простая графика – Базовая растровая графика',
          'Подготовка к печати – Несжатые файлы для печати'
        ],
        specs_title: 'Технические Характеристики',
        specs_header_label: 'Характеристика',
        specs_header_value: 'Детали',
        specs: [
          { label: 'Расширение Файла', value: '.bmp' },
          { label: 'Тип MIME', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Сжатие', value: 'Нет (несжатый) или сжатие RLE' },
          { label: 'Глубина Цвета', value: '1, 4, 8, 16, 24, 32 бита на пиксель' },
          { label: 'Максимальное Разрешение', value: 'Нет практического предела' },
          { label: 'Поддержка Цвета', value: 'RGB, индексированный цвет, оттенки серого' },
          { label: 'Прозрачность', value: 'Поддержка альфа-канала в 32-битном режиме' },
          { label: 'Порядок Байтов', value: 'Little-endian (стандарт Windows)' }
        ],
        seo_title: 'Функции Просмотрщика и Конвертера BMP',
        seo_intro: 'Наш профессиональный просмотрщик BMP обеспечивает комплексную поддержку изображений Windows Bitmap, включая истинную точность цветопередачи, проверку на уровне пикселей и возможности пакетного предпросмотра. Работаете ли вы с устаревшими системами, приложениями Windows или встроенной графикой, наша платформа предлагает инструменты, необходимые для профессиональной обработки изображений BMP.',
        seo_viewing_title: 'Расширенные Функции Просмотра',
        seo_viewing_text: 'Просматривайте изображения BMP с полной поддержкой глубины цвета, масштабированием на уровне пикселей и подробной информацией о цвете. Наш просмотрщик поддерживает все варианты BMP, включая несжатые, сжатые RLE и различные глубины цвета, обеспечивая точное представление вашей растровой графики.',
        seo_conversion_title: 'Профессиональные Инструменты Конвертации',
        seo_conversion_text: 'Конвертируйте файлы BMP в PNG, JPEG, WebP и другие современные форматы, сохраняя оптимальное качество. Наш движок конвертации предлагает сохранение глубины цвета, обработку прозрачности и возможности пакетной обработки для одновременной обработки нескольких файлов.',
        seo_optimization_title: 'Оптимизация Качества',
        seo_optimization_text: 'Оптимизируйте файлы BMP для современного использования с помощью наших интеллектуальных инструментов, которые могут конвертировать в сжатые форматы, сохраняя визуальное качество. Идеально для миграции устаревшей графики в современные форматы, оптимизации веб-сайтов и уменьшения размеров файлов для лучшей производительности.',
        editor: {
          toggle_sidebar: 'Переключить Боковую Панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть Боковую Панель',
          search_placeholder: 'Поиск файлов...',
          files_header: 'Файлы',
          add_files: '+ Добавить',
          format_badge: 'BMP',
          present: 'Презентовать',
          exit_presentation: 'Выход',
          start_presentation: 'Начать Презентацию (Пробел/Стрелки для навигации)',
          print_image: 'Печать Изображения',
          download_image: 'Скачать Изображение',
          previous: 'Предыдущее (←)',
          next: 'Следующее (→)',
          zoom_out: 'Уменьшить (-)',
          zoom_in: 'Увеличить (+)',
          reset_zoom: 'Нажмите, чтобы сбросить масштаб',
          rotate: 'Повернуть (R)',
          fullscreen: 'Полноэкранный Режим (F)'
        }
      }
    }
  },
  ar: {
    viewers: {
      bmp: {
        meta_title: 'عارض BMP مجاني - عرض صور Bitmap عبر الإنترنت',
        meta_description: 'اعرض صور bitmap BMP عبر الإنترنت على الفور. عارض BMP مجاني مع دعم عمق اللون وأدوات فحص البكسل ومعاينة الدُفعات لما يصل إلى 20 ملفًا.',
        meta_keywords: 'عارض BMP، عارض bitmap، عارض BMP عبر الإنترنت، bitmap Windows، معاينة BMP، عارض BMP مجاني',
        hero_title: 'عارض BMP مجاني',
        hero_subtitle: 'افحص صور Windows Bitmap (BMP) بدقة ألوان حقيقية وتكبير على مستوى البكسل وأدوات معاينة الدُفعات.',
        upload_title: 'رفع صور BMP',
        upload_description: 'اسحب وأفلت ملفات BMP الخاصة بك أو انقر للتصفح. يدعم ما يصل إلى 20 ملفًا، 100 ميجابايت إجمالي، مع معاينة فورية في المتصفح.',
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
          uncompressed: '✓ غير مضغوط',
          wide_support: '🎨 دعم واسع',
          fast_processing: '⚡ معالجة سريعة'
        },
        features: [
          { title: 'دقة الألوان الحقيقية', description: 'اعرض صور BMP مع دعم عمق اللون الكامل، من 1 بت إلى 32 بت لون، مع الحفاظ على قيم البكسل الدقيقة' },
          { title: 'فحص على مستوى البكسل', description: 'قم بالتكبير لفحص البكسلات الفردية مع معلومات لون دقيقة وعرض الإحداثيات' },
          { title: 'معاينة الدُفعات', description: 'معاينة ملفات BMP متعددة في وقت واحد مع شبكة الصور المصغرة والتنقل السريع بين الصور' }
        ],
        about_title: 'حول تنسيق BMP',
        about_intro: 'BMP (Bitmap Image File) هو تنسيق رسومي نقطي طورته Microsoft لتخزين بيانات bitmap غير المضغوطة أو المضغوطة قليلاً. يتم استخدامه على نطاق واسع في تطبيقات Windows ومسارات عمل التصميم القديمة والأنظمة المدمجة بفضل هيكله البسيط ودعمه لأعماق ألوان متعددة.',
        advantages_title: 'المزايا الرئيسية',
        advantages: [
          'جودة غير مضغوطة – لا فقدان لبيانات الصورة',
          'توافق واسع – مدعوم من جميع تطبيقات Windows',
          'أعماق ألوان متعددة – من 1 بت إلى 32 بت لون',
          'هيكل بسيط – سهل القراءة والكتابة',
          'لا تبعيات – تنسيق مستقل',
          'دعم الأنظمة القديمة – يعمل مع الأنظمة الأقدم'
        ],
        use_cases_title: 'حالات الاستخدام الشائعة',
        use_cases: [
          'تطبيقات Windows – التنسيق الأصلي لـ Windows',
          'الأنظمة القديمة – البرامج القديمة والأنظمة المدمجة',
          'لقطات الشاشة – تنسيق لقطة الشاشة Windows',
          'إنشاء الأيقونات – موارد أيقونات Windows',
          'الرسوم البسيطة – رسوم bitmap أساسية',
          'إعداد الطباعة – ملفات طباعة غير مضغوطة'
        ],
        specs_title: 'المواصفات التقنية',
        specs_header_label: 'المواصفة',
        specs_header_value: 'التفاصيل',
        specs: [
          { label: 'امتداد الملف', value: '.bmp' },
          { label: 'نوع MIME', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'الضغط', value: 'لا شيء (غير مضغوط) أو ضغط RLE' },
          { label: 'عمق اللون', value: '1، 4، 8، 16، 24، 32 بت لكل بكسل' },
          { label: 'الحد الأقصى للدقة', value: 'لا يوجد حد عملي' },
          { label: 'دعم اللون', value: 'RGB، لون مفهرس، تدرج رمادي' },
          { label: 'الشفافية', value: 'دعم قناة ألفا في وضع 32 بت' },
          { label: 'ترتيب البايت', value: 'Little-endian (معيار Windows)' }
        ],
        seo_title: 'ميزات عارض ومحول BMP',
        seo_intro: 'يوفر عارض BMP الاحترافي لدينا دعمًا شاملاً لصور Windows Bitmap، بما في ذلك دقة الألوان الحقيقية وفحص مستوى البكسل وإمكانيات معاينة الدُفعات. سواء كنت تعمل مع الأنظمة القديمة أو تطبيقات Windows أو الرسوم المدمجة، تقدم منصتنا الأدوات التي تحتاجها لمعالجة صور BMP الاحترافية.',
        seo_viewing_title: 'ميزات العرض المتقدمة',
        seo_viewing_text: 'اعرض صور BMP مع دعم عمق اللون الكامل وتكبير مستوى البكسل ومعلومات اللون التفصيلية. يدعم عارضنا جميع متغيرات BMP، بما في ذلك غير المضغوطة والمضغوطة RLE وأعماق الألوان المختلفة، مما يضمن تمثيلًا دقيقًا لرسوم bitmap الخاصة بك.',
        seo_conversion_title: 'أدوات التحويل الاحترافية',
        seo_conversion_text: 'حول ملفات BMP إلى PNG وJPEG وWebP وتنسيقات حديثة أخرى مع الحفاظ على الجودة المثلى. يوفر محرك التحويل لدينا الحفاظ على عمق اللون ومعالجة الشفافية وإمكانيات المعالجة المجمعة للتعامل مع ملفات متعددة في وقت واحد.',
        seo_optimization_title: 'تحسين الجودة',
        seo_optimization_text: 'قم بتحسين ملفات BMP للاستخدام الحديث باستخدام أدواتنا الذكية التي يمكنها التحويل إلى تنسيقات مضغوطة مع الحفاظ على الجودة البصرية. مثالي لترحيل الرسوم القديمة إلى التنسيقات الحديثة وتحسين الويب وتقليل أحجام الملفات لأداء أفضل.',
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          files_header: 'الملفات',
          add_files: '+ إضافة',
          format_badge: 'BMP',
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
      bmp: {
        meta_title: 'โปรแกรมดู BMP ฟรี - ดูภาพ Bitmap ออนไลน์',
        meta_description: 'ดูภาพ bitmap BMP ออนไลน์ทันที โปรแกรมดู BMP ฟรีพร้อมการรองรับความลึกของสี เครื่องมือตรวจสอบพิกเซลและการแสดงตัวอย่างแบบกลุ่มสำหรับสูงสุด 20 ไฟล์',
        meta_keywords: 'โปรแกรมดู BMP, โปรแกรมดู bitmap, โปรแกรมดู BMP ออนไลน์, bitmap Windows, ตัวอย่าง BMP, โปรแกรมดู BMP ฟรี',
        hero_title: 'โปรแกรมดู BMP ฟรี',
        hero_subtitle: 'ตรวจสอบภาพ Windows Bitmap (BMP) ด้วยความเที่ยงตรงของสีที่แท้จริง การซูมระดับพิกเซลและเครื่องมือแสดงตัวอย่างแบบกลุ่ม',
        upload_title: 'อัปโหลดภาพ BMP',
        upload_description: 'ลากและวางไฟล์ BMP ของคุณหรือคลิกเพื่อเรียกดู รองรับสูงสุด 20 ไฟล์ 100MB รวม พร้อมการแสดงตัวอย่างทันทีในเบราว์เซอร์',
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
          uncompressed: '✓ ไม่บีบอัด',
          wide_support: '🎨 รองรับกว้าง',
          fast_processing: '⚡ ประมวลผลเร็ว'
        },
        features: [
          { title: 'ความเที่ยงตรงของสีที่แท้จริง', description: 'ดูภาพ BMP ด้วยการรองรับความลึกของสีเต็มรูปแบบ จาก 1 บิตถึง 32 บิตสี โดยรักษาค่าพิกเซลที่แน่นอน' },
          { title: 'การตรวจสอบระดับพิกเซล', description: 'ซูมเข้าเพื่อตรวจสอบพิกเซลแต่ละตัวด้วยข้อมูลสีที่แม่นยำและการแสดงพิกัด' },
          { title: 'การแสดงตัวอย่างแบบกลุ่ม', description: 'แสดงตัวอย่างไฟล์ BMP หลายไฟล์พร้อมกันด้วยตารางภาพขนาดย่อและการนำทางที่รวดเร็วระหว่างภาพ' }
        ],
        about_title: 'เกี่ยวกับรูปแบบ BMP',
        about_intro: 'BMP (Bitmap Image File) เป็นรูปแบบกราฟิกแรสเตอร์ที่พัฒนาโดย Microsoft สำหรับจัดเก็บข้อมูล bitmap ที่ไม่บีบอัดหรือบีบอัดเล็กน้อย ใช้กันอย่างแพร่หลายในแอปพลิเคชัน Windows กระบวนการออกแบบแบบเก่าและระบบฝังตัวเนื่องจากโครงสร้างที่เรียบง่ายและการรองรับความลึกของสีหลายระดับ',
        advantages_title: 'ข้อดีหลัก',
        advantages: [
          'คุณภาพไม่บีบอัด – ไม่มีการสูญเสียข้อมูลภาพ',
          'ความเข้ากันได้กว้าง – รองรับโดยแอปพลิเคชัน Windows ทั้งหมด',
          'ความลึกของสีหลายระดับ – จาก 1 บิตถึง 32 บิตสี',
          'โครงสร้างเรียบง่าย – อ่านและเขียนง่าย',
          'ไม่มีการพึ่งพา – รูปแบบที่ยืนเอง',
          'การรองรับระบบเก่า – ทำงานกับระบบเก่า'
        ],
        use_cases_title: 'กรณีการใช้งานยอดนิยม',
        use_cases: [
          'แอปพลิเคชัน Windows – รูปแบบดั้งเดิมสำหรับ Windows',
          'ระบบเก่า – ซอฟต์แวร์เก่าและระบบฝังตัว',
          'การจับภาพหน้าจอ – รูปแบบภาพหน้าจอ Windows',
          'การสร้างไอคอน – ทรัพยากรไอคอน Windows',
          'กราฟิกแบบง่าย – กราฟิก bitmap พื้นฐาน',
          'การเตรียมพิมพ์ – ไฟล์พิมพ์ที่ไม่บีบอัด'
        ],
        specs_title: 'ข้อมูลจำเพาะทางเทคนิค',
        specs_header_label: 'ข้อมูลจำเพาะ',
        specs_header_value: 'รายละเอียด',
        specs: [
          { label: 'นามสกุลไฟล์', value: '.bmp' },
          { label: 'ประเภท MIME', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'การบีบอัด', value: 'ไม่มี (ไม่บีบอัด) หรือการบีบอัด RLE' },
          { label: 'ความลึกของสี', value: '1, 4, 8, 16, 24, 32 บิตต่อพิกเซล' },
          { label: 'ความละเอียดสูงสุด', value: 'ไม่มีขีดจำกัดในทางปฏิบัติ' },
          { label: 'การรองรับสี', value: 'RGB, สีที่จัดทำดัชนี, ระดับสีเทา' },
          { label: 'ความโปร่งใส', value: 'การรองรับช่องอัลฟาในโหมด 32 บิต' },
          { label: 'ลำดับไบต์', value: 'Little-endian (มาตรฐาน Windows)' }
        ],
        seo_title: 'คุณสมบัติโปรแกรมดูและตัวแปลง BMP',
        seo_intro: 'โปรแกรมดู BMP ระดับมืออาชีพของเรามีการรองรับที่ครอบคลุมสำหรับภาพ Windows Bitmap รวมถึงความเที่ยงตรงของสีที่แท้จริง การตรวจสอบระดับพิกเซลและความสามารถในการแสดงตัวอย่างแบบกลุ่ม ไม่ว่าคุณจะทำงานกับระบบเก่า แอปพลิเคชัน Windows หรือกราฟิกฝังตัว แพลตฟอร์มของเรามีเครื่องมือที่คุณต้องการสำหรับการจัดการภาพ BMP ระดับมืออาชีพ',
        seo_viewing_title: 'คุณสมบัติการดูขั้นสูง',
        seo_viewing_text: 'ดูภาพ BMP ด้วยการรองรับความลึกของสีเต็มรูปแบบ การซูมระดับพิกเซลและข้อมูลสีรายละเอียด โปรแกรมดูของเรารองรับตัวแปร BMP ทั้งหมด รวมถึงไม่บีบอัด บีบอัด RLE และความลึกของสีต่างๆ เพื่อให้แน่ใจว่าการแสดงผลที่ถูกต้องของกราฟิก bitmap ของคุณ',
        seo_conversion_title: 'เครื่องมือแปลงระดับมืออาชีพ',
        seo_conversion_text: 'แปลงไฟล์ BMP เป็น PNG, JPEG, WebP และรูปแบบสมัยใหม่อื่นๆ ในขณะที่รักษาคุณภาพที่เหมาะสม เครื่องมือแปลงของเรามีการรักษาความลึกของสี การจัดการความโปร่งใสและความสามารถในการประมวลผลแบบกลุ่มสำหรับการจัดการไฟล์หลายไฟล์พร้อมกัน',
        seo_optimization_title: 'การปรับปรุงคุณภาพ',
        seo_optimization_text: 'ปรับปรุงไฟล์ BMP สำหรับการใช้งานสมัยใหม่ด้วยเครื่องมืออัจฉริยะของเราที่สามารถแปลงเป็นรูปแบบบีบอัดในขณะที่รักษาคุณภาพภาพ เหมาะสำหรับการย้ายกราฟิกเก่าไปยังรูปแบบสมัยใหม่ การปรับปรุงเว็บและการลดขนาดไฟล์เพื่อประสิทธิภาพที่ดีขึ้น',
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          files_header: 'ไฟล์',
          add_files: '+ เพิ่ม',
          format_badge: 'BMP',
          present: 'นำเสนอ',
          exit_presentation: 'ออก',
          start_presentation: 'เริ่มการนำเสนอ (Space/ลูกศรเพื่อนำทาง)',
          print_image: 'พิมพ์รูปภาพ',
          download_image: 'ดาวน์โหลดรูปภาพ',
          previous: 'ก่อนหน้า (←)',
          next: 'ถัดไป (→)',
          zoom_out: 'ซูมออก (-)',
          zoom_in: 'ซูมเข้า (+)',
          reset_zoom: 'คลิกเพื่อรีเซ็ตซูม',
          rotate: 'หมุน (R)',
          fullscreen: 'เต็มหน้าจอ (F)'
        }
      }
    }
  },
  ja: {
    viewers: {
      bmp: {
        meta_title: '無料BMPビューアー - オンラインビットマップ画像ビューアー',
        meta_description: 'BMPビットマップ画像をオンラインで即座に表示します。色深度サポート、ピクセル検査ツール、最大20ファイルのバッチプレビューを備えた無料BMPビューアー。',
        meta_keywords: 'BMPビューアー、ビットマップビューアー、オンラインBMPビューアー、Windowsビットマップ、BMPプレビュー、無料BMPビューアー',
        hero_title: '無料BMPビューアー',
        hero_subtitle: '真の色忠実度、ピクセルレベルのズーム、バッチプレビューツールでWindows Bitmap (BMP) 画像を検査します。',
        upload_title: 'BMP画像をアップロード',
        upload_description: 'BMPファイルをドラッグ＆ドロップするか、クリックして参照します。合計100MBまで20ファイルまでサポートし、ブラウザで即座にプレビューできます。',
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
          uncompressed: '✓ 非圧縮',
          wide_support: '🎨 幅広いサポート',
          fast_processing: '⚡ 高速処理'
        },
        features: [
          { title: '真の色忠実度', description: '1ビットから32ビットカラーまで、完全な色深度サポートでBMP画像を表示し、正確なピクセル値を保持します' },
          { title: 'ピクセルレベル検査', description: '正確な色情報と座標表示で個々のピクセルを検査するためにズームインします' },
          { title: 'バッチプレビュー', description: 'サムネイルグリッドと画像間の高速ナビゲーションで複数のBMPファイルを同時にプレビューします' }
        ],
        about_title: 'BMPフォーマットについて',
        about_intro: 'BMP (Bitmap Image File) は、非圧縮または軽く圧縮されたビットマップデータを保存するためにMicrosoftが開発したラスターグラフィックフォーマットです。シンプルな構造と複数の色深度のサポートにより、Windowsアプリケーション、レガシーデザインワークフロー、組み込みシステムで広く使用されています。',
        advantages_title: '主な利点',
        advantages: [
          '非圧縮品質 – 画像データの損失なし',
          '幅広い互換性 – すべてのWindowsアプリケーションでサポート',
          '複数の色深度 – 1ビットから32ビットカラーまで',
          'シンプルな構造 – 読み書きが容易',
          '依存関係なし – 自己完結型フォーマット',
          'レガシーサポート – 古いシステムで動作'
        ],
        use_cases_title: '人気の使用例',
        use_cases: [
          'Windowsアプリケーション – Windows用のネイティブフォーマット',
          'レガシーシステム – 古いソフトウェアと組み込みシステム',
          '画面キャプチャ – Windowsスクリーンショットフォーマット',
          'アイコン作成 – Windowsアイコンリソース',
          'シンプルなグラフィック – 基本的なビットマップグラフィック',
          '印刷準備 – 非圧縮印刷ファイル'
        ],
        specs_title: '技術仕様',
        specs_header_label: '仕様',
        specs_header_value: '詳細',
        specs: [
          { label: 'ファイル拡張子', value: '.bmp' },
          { label: 'MIMEタイプ', value: 'image/bmp, image/x-ms-bmp' },
          { label: '圧縮', value: 'なし (非圧縮) またはRLE圧縮' },
          { label: '色深度', value: 'ピクセルあたり1、4、8、16、24、32ビット' },
          { label: '最大解像度', value: '実用的な制限なし' },
          { label: '色サポート', value: 'RGB、インデックスカラー、グレースケール' },
          { label: '透明度', value: '32ビットモードでのアルファチャネルサポート' },
          { label: 'バイト順序', value: 'リトルエンディアン (Windows標準)' }
        ],
        seo_title: 'BMPビューアーとコンバーター機能',
        seo_intro: '私たちのプロフェッショナルBMPビューアーは、真の色忠実度、ピクセルレベル検査、バッチプレビュー機能を含むWindows Bitmap画像の包括的なサポートを提供します。レガシーシステム、Windowsアプリケーション、または組み込みグラフィックで作業している場合でも、当社のプラットフォームはプロフェッショナルなBMP画像処理に必要なツールを提供します。',
        seo_viewing_title: '高度な表示機能',
        seo_viewing_text: '完全な色深度サポート、ピクセルレベルズーム、詳細な色情報でBMP画像を表示します。当社のビューアーは、非圧縮、RLE圧縮、およびさまざまな色深度を含むすべてのBMPバリアントをサポートし、ビットマップグラフィックの正確な表現を保証します。',
        seo_conversion_title: 'プロフェッショナル変換ツール',
        seo_conversion_text: '最適な品質を維持しながら、BMPファイルをPNG、JPEG、WebP、その他の現代的なフォーマットに変換します。当社の変換エンジンは、複数のファイルを同時に処理するための色深度保持、透明度処理、バッチ処理機能を提供します。',
        seo_optimization_title: '品質最適化',
        seo_optimization_text: '視覚品質を維持しながら圧縮フォーマットに変換できるスマートツールを使用して、BMPファイルを現代的な使用のために最適化します。レガシーグラフィックを現代的なフォーマットに移行し、Web最適化を行い、パフォーマンス向上のためにファイルサイズを削減するのに最適です。',
        editor: {
          toggle_sidebar: 'サイドバーの切り替え',
          close: '閉じる (Esc)',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          files_header: 'ファイル',
          add_files: '+ 追加',
          format_badge: 'BMP',
          present: 'プレゼント',
          exit_presentation: '終了',
          start_presentation: 'プレゼンテーションを開始 (スペース/矢印でナビゲート)',
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
      bmp: {
        meta_title: '免费BMP查看器 - 在线查看位图图像',
        meta_description: '立即在线查看BMP位图图像。免费BMP查看器，支持色深、像素检查工具和最多20个文件的批量预览。',
        meta_keywords: 'BMP查看器，位图查看器，在线BMP查看器，Windows位图，BMP预览，免费BMP查看器',
        hero_title: '免费BMP查看器',
        hero_subtitle: '使用真正的色彩保真度、像素级缩放和批量预览工具检查Windows Bitmap (BMP) 图像。',
        upload_title: '上传BMP图像',
        upload_description: '拖放您的BMP文件或点击浏览。支持最多20个文件，总计100MB，在浏览器中即时预览。',
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
          uncompressed: '✓ 未压缩',
          wide_support: '🎨 广泛支持',
          fast_processing: '⚡ 快速处理'
        },
        features: [
          { title: '真正的色彩保真度', description: '以完整的色深支持查看BMP图像，从1位到32位颜色，保持精确的像素值' },
          { title: '像素级检查', description: '放大以检查单个像素，具有精确的颜色信息和坐标显示' },
          { title: '批量预览', description: '同时预览多个BMP文件，带有缩略图网格和图像之间的快速导航' }
        ],
        about_title: '关于BMP格式',
        about_intro: 'BMP (Bitmap Image File) 是Microsoft开发的用于存储未压缩或轻度压缩位图数据的栅格图形格式。由于其简单的结构和多种色深的支持，它被广泛用于Windows应用程序、传统设计工作流程和嵌入式系统。',
        advantages_title: '主要优势',
        advantages: [
          '未压缩质量 – 无图像数据损失',
          '广泛兼容性 – 所有Windows应用程序都支持',
          '多种色深 – 从1位到32位颜色',
          '简单结构 – 易于读写',
          '无依赖 – 自包含格式',
          '传统系统支持 – 适用于旧系统'
        ],
        use_cases_title: '热门使用场景',
        use_cases: [
          'Windows应用程序 – Windows的原生格式',
          '传统系统 – 旧软件和嵌入式系统',
          '屏幕截图 – Windows截图格式',
          '图标创建 – Windows图标资源',
          '简单图形 – 基本位图图形',
          '打印准备 – 未压缩打印文件'
        ],
        specs_title: '技术规格',
        specs_header_label: '规格',
        specs_header_value: '详情',
        specs: [
          { label: '文件扩展名', value: '.bmp' },
          { label: 'MIME类型', value: 'image/bmp, image/x-ms-bmp' },
          { label: '压缩', value: '无 (未压缩) 或RLE压缩' },
          { label: '色深', value: '每像素1、4、8、16、24、32位' },
          { label: '最大分辨率', value: '无实际限制' },
          { label: '颜色支持', value: 'RGB、索引颜色、灰度' },
          { label: '透明度', value: '32位模式下的Alpha通道支持' },
          { label: '字节顺序', value: 'Little-endian (Windows标准)' }
        ],
        seo_title: 'BMP查看器和转换器功能',
        seo_intro: '我们的专业BMP查看器为Windows Bitmap图像提供全面支持，包括真正的色彩保真度、像素级检查和批量预览功能。无论您是在处理传统系统、Windows应用程序还是嵌入式图形，我们的平台都提供您进行专业BMP图像处理所需的工具。',
        seo_viewing_title: '高级查看功能',
        seo_viewing_text: '以完整的色深支持、像素级缩放和详细颜色信息查看BMP图像。我们的查看器支持所有BMP变体，包括未压缩、RLE压缩和各种色深，确保准确表示您的位图图形。',
        seo_conversion_title: '专业转换工具',
        seo_conversion_text: '在保持最佳质量的同时，将BMP文件转换为PNG、JPEG、WebP和其他现代格式。我们的转换引擎提供色深保留、透明度处理和批处理功能，可同时处理多个文件。',
        seo_optimization_title: '质量优化',
        seo_optimization_text: '使用我们的智能工具优化BMP文件用于现代使用，这些工具可以在保持视觉质量的同时转换为压缩格式。非常适合将传统图形迁移到现代格式、Web优化以及减少文件大小以提高性能。',
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭 (Esc)',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          files_header: '文件',
          add_files: '+ 添加',
          format_badge: 'BMP',
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
      bmp: {
        meta_title: 'Penampil BMP Gratis - Lihat Gambar Bitmap Online',
        meta_description: 'Lihat gambar bitmap BMP online secara instan. Penampil BMP gratis dengan dukungan kedalaman warna, alat inspeksi piksel dan pratinjau batch untuk hingga 20 file.',
        meta_keywords: 'penampil BMP, penampil bitmap, penampil BMP online, bitmap Windows, pratinjau BMP, penampil BMP gratis',
        hero_title: 'Penampil BMP Gratis',
        hero_subtitle: 'Periksa gambar Windows Bitmap (BMP) dengan kesetiaan warna sejati, zoom tingkat piksel dan alat pratinjau batch.',
        upload_title: 'Unggah Gambar BMP',
        upload_description: 'Seret dan lepas file BMP Anda atau klik untuk menjelajah. Mendukung hingga 20 file, 100MB total, dengan pratinjau instan di browser.',
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
          uncompressed: '✓ Tidak Terkompresi',
          wide_support: '🎨 Dukungan Luas',
          fast_processing: '⚡ Pemrosesan Cepat'
        },
        features: [
          { title: 'Kesetiaan Warna Sejati', description: 'Lihat gambar BMP dengan dukungan kedalaman warna penuh, dari 1 bit hingga 32 bit warna, mempertahankan nilai piksel yang tepat' },
          { title: 'Inspeksi Tingkat Piksel', description: 'Perbesar untuk memeriksa piksel individual dengan informasi warna yang tepat dan tampilan koordinat' },
          { title: 'Pratinjau Batch', description: 'Pratinjau beberapa file BMP secara bersamaan dengan grid thumbnail dan navigasi cepat antar gambar' }
        ],
        about_title: 'Tentang Format BMP',
        about_intro: 'BMP (Bitmap Image File) adalah format grafik raster yang dikembangkan oleh Microsoft untuk menyimpan data bitmap yang tidak terkompresi atau sedikit terkompresi. Ini banyak digunakan di aplikasi Windows, alur kerja desain warisan dan sistem tertanam berkat strukturnya yang sederhana dan dukungan untuk berbagai kedalaman warna.',
        advantages_title: 'Keuntungan Utama',
        advantages: [
          'Kualitas tidak terkompresi – Tidak ada kehilangan data gambar',
          'Kompatibilitas luas – Didukung oleh semua aplikasi Windows',
          'Beberapa kedalaman warna – Dari 1 bit hingga 32 bit warna',
          'Struktur sederhana – Mudah dibaca dan ditulis',
          'Tidak ada dependensi – Format mandiri',
          'Dukungan warisan – Bekerja dengan sistem lama'
        ],
        use_cases_title: 'Kasus Penggunaan Populer',
        use_cases: [
          'Aplikasi Windows – Format asli untuk Windows',
          'Sistem warisan – Perangkat lunak lama dan sistem tertanam',
          'Tangkapan layar – Format tangkapan layar Windows',
          'Pembuatan ikon – Sumber daya ikon Windows',
          'Grafik sederhana – Grafik bitmap dasar',
          'Persiapan cetak – File cetak tidak terkompresi'
        ],
        specs_title: 'Spesifikasi Teknis',
        specs_header_label: 'Spesifikasi',
        specs_header_value: 'Detail',
        specs: [
          { label: 'Ekstensi File', value: '.bmp' },
          { label: 'Tipe MIME', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Kompresi', value: 'Tidak ada (tidak terkompresi) atau kompresi RLE' },
          { label: 'Kedalaman Warna', value: '1, 4, 8, 16, 24, 32 bit per piksel' },
          { label: 'Resolusi Maksimum', value: 'Tidak ada batas praktis' },
          { label: 'Dukungan Warna', value: 'RGB, warna terindeks, skala abu-abu' },
          { label: 'Transparansi', value: 'Dukungan saluran alpha dalam mode 32 bit' },
          { label: 'Urutan Byte', value: 'Little-endian (standar Windows)' }
        ],
        seo_title: 'Fitur Penampil dan Konverter BMP',
        seo_intro: 'Penampil BMP profesional kami menyediakan dukungan komprehensif untuk gambar Windows Bitmap, termasuk kesetiaan warna sejati, inspeksi tingkat piksel dan kemampuan pratinjau batch. Baik Anda bekerja dengan sistem warisan, aplikasi Windows atau grafik tertanam, platform kami menawarkan alat yang Anda butuhkan untuk penanganan gambar BMP profesional.',
        seo_viewing_title: 'Fitur Tampilan Lanjutan',
        seo_viewing_text: 'Lihat gambar BMP dengan dukungan kedalaman warna penuh, zoom tingkat piksel dan informasi warna detail. Penampil kami mendukung semua varian BMP, termasuk tidak terkompresi, terkompresi RLE dan berbagai kedalaman warna, memastikan representasi akurat dari grafik bitmap Anda.',
        seo_conversion_title: 'Alat Konversi Profesional',
        seo_conversion_text: 'Konversi file BMP ke PNG, JPEG, WebP dan format modern lainnya sambil mempertahankan kualitas optimal. Mesin konversi kami menawarkan pelestarian kedalaman warna, penanganan transparansi dan kemampuan pemrosesan batch untuk menangani beberapa file secara bersamaan.',
        seo_optimization_title: 'Optimisasi Kualitas',
        seo_optimization_text: 'Optimalkan file BMP untuk penggunaan modern dengan alat pintar kami yang dapat mengonversi ke format terkompresi sambil mempertahankan kualitas visual. Sempurna untuk memigrasikan grafik warisan ke format modern, optimisasi web dan mengurangi ukuran file untuk kinerja yang lebih baik.',
        editor: {
          toggle_sidebar: 'Alihkan Bilah Samping',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup Bilah Samping',
          search_placeholder: 'Cari file...',
          files_header: 'File',
          add_files: '+ Tambah',
          format_badge: 'BMP',
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
      bmp: {
        meta_title: 'Gratis BMP-visare - Visa Bitmap-bilder Online',
        meta_description: 'Visa BMP bitmap-bilder online direkt. Gratis BMP-visare med färgdjup-stöd, pixelinspektionsverktyg och batch-förhandsvisning för upp till 20 filer.',
        meta_keywords: 'BMP-visare, bitmap-visare, online BMP-visare, Windows bitmap, BMP-förhandsvisning, gratis BMP-visare',
        hero_title: 'Gratis BMP-visare',
        hero_subtitle: 'Inspektera Windows Bitmap (BMP) bilder med sann färgtrohet, pixel-nivå zoom och batch-förhandsvisningsverktyg.',
        upload_title: 'Ladda Upp BMP-bilder',
        upload_description: 'Dra och släpp dina BMP-filer eller klicka för att bläddra. Stöder upp till 20 filer, 100MB totalt, med omedelbar förhandsvisning i webbläsaren.',
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
          uncompressed: '✓ Okomprimerad',
          wide_support: '🎨 Bredt Stöd',
          fast_processing: '⚡ Snabb Bearbetning'
        },
        features: [
          { title: 'Sann Färgtrohet', description: 'Visa BMP-bilder med fullt färgdjup-stöd, från 1-bit till 32-bit färg, med bevarande av exakta pixelvärden' },
          { title: 'Pixel-Nivå Inspektion', description: 'Zooma in för att inspektera enskilda pixlar med exakt färginformation och koordinatvisning' },
          { title: 'Batch-Förhandsvisning', description: 'Förhandsgranska flera BMP-filer samtidigt med miniatyrrutnät och snabb navigering mellan bilder' }
        ],
        about_title: 'Om BMP-formatet',
        about_intro: 'BMP (Bitmap Image File) är ett rastergrafikformat utvecklat av Microsoft för att lagra okomprimerade eller lätt komprimerade bitmap-data. Det används ofta i Windows-applikationer, äldre designarbetsflöden och inbäddade system tack vare sin enkla struktur och stöd för flera färgdjup.',
        advantages_title: 'Huvudfördelar',
        advantages: [
          'Okomprimerad kvalitet – Ingen förlust av bilddata',
          'Bred kompatibilitet – Stöds av alla Windows-applikationer',
          'Flera färgdjup – Från 1-bit till 32-bit färg',
          'Enkel struktur – Lätt att läsa och skriva',
          'Inga beroenden – Självständigt format',
          'Legacy-stöd – Fungerar med äldre system'
        ],
        use_cases_title: 'Populära Användningsfall',
        use_cases: [
          'Windows-applikationer – Inbyggt format för Windows',
          'Legacy-system – Äldre programvara och inbäddade system',
          'Skärmdumpar – Windows skärmdumpsformat',
          'Ikon-skapande – Windows ikonresurser',
          'Enkla grafik – Grundläggande bitmapgrafik',
          'Förberedelse för utskrift – Okomprimerade utskriftsfiler'
        ],
        specs_title: 'Tekniska Specifikationer',
        specs_header_label: 'Specifikation',
        specs_header_value: 'Detaljer',
        specs: [
          { label: 'Filändelse', value: '.bmp' },
          { label: 'MIME-typ', value: 'image/bmp, image/x-ms-bmp' },
          { label: 'Komprimering', value: 'Ingen (okomprimerad) eller RLE-komprimering' },
          { label: 'Färgdjup', value: '1, 4, 8, 16, 24, 32 bitar per pixel' },
          { label: 'Maximal Upplösning', value: 'Ingen praktisk gräns' },
          { label: 'Färgstöd', value: 'RGB, indexerad färg, gråskala' },
          { label: 'Transparens', value: 'Alfakanal-stöd i 32-bit läge' },
          { label: 'Byteordning', value: 'Little-endian (Windows-standard)' }
        ],
        seo_title: 'BMP-visare och Konverteringsfunktioner',
        seo_intro: 'Vår professionella BMP-visare ger omfattande stöd för Windows Bitmap-bilder, inklusive sann färgtrohet, pixel-nivå inspektion och batch-förhandsvisningsfunktioner. Oavsett om du arbetar med legacy-system, Windows-applikationer eller inbäddad grafik, erbjuder vår plattform de verktyg du behöver för professionell BMP-bildhantering.',
        seo_viewing_title: 'Avancerade Visningsfunktioner',
        seo_viewing_text: 'Visa BMP-bilder med fullständigt färgdjup-stöd, pixel-nivå zoom och detaljerad färginformation. Vår visare stöder alla BMP-varianter, inklusive okomprimerade, RLE-komprimerade och olika färgdjup, vilket säkerställer en korrekt representation av dina bitmapgrafik.',
        seo_conversion_title: 'Professionella Konverteringsverktyg',
        seo_conversion_text: 'Konvertera BMP-filer till PNG, JPEG, WebP och andra moderna format samtidigt som optimal kvalitet bibehålls. Vår konverteringsmotor erbjuder färgdjup-bevarande, transparenshantering och batchbearbetningsfunktioner för att hantera flera filer samtidigt.',
        seo_optimization_title: 'Kvalitetsoptimering',
        seo_optimization_text: 'Optimera BMP-filer för modern användning med våra smarta verktyg som kan konvertera till komprimerade format samtidigt som visuell kvalitet bevaras. Perfekt för att migrera legacy-grafik till moderna format, webboptimering och minska filstorlekar för bättre prestanda.',
        editor: {
          toggle_sidebar: 'Växla Sidofält',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng Sidofält',
          search_placeholder: 'Sök filer...',
          files_header: 'Filer',
          add_files: '+ Lägg Till',
          format_badge: 'BMP',
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

