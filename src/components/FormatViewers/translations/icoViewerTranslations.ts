import i18n from '../../../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type ICOViewerTranslations = {
  viewers: {
    ico: {
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
        multiple_sizes: string;
        windows_native: string;
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

const resources: Record<string, ICOViewerTranslations> = {
  en: {
    viewers: {
      ico: {
        meta_title: 'ICO Viewer - Free Online Windows Icon File Viewer',
        meta_description: 'View ICO (Windows Icon) files online for free. Multi-size icon viewer with transparency support and multiple resolution display. Up to 20 files, 100MB total. No registration required.',
        meta_keywords: 'ICO viewer, icon viewer, Windows icon, favicon viewer, CUR viewer, multi-size icon, ICO file viewer, batch viewing',
        hero_title: 'Free ICO Viewer',
        hero_subtitle: 'View Windows icon files with multiple size support and transparency',
        upload_title: 'Upload ICO Files',
        upload_description: 'Drag and drop your Windows icon files (ICO, CUR) or click to browse. Supports multiple sizes and transparency up to 100MB total.',
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
          multiple_sizes: '✓ Multiple Sizes',
          windows_native: '🎨 Windows Native',
          fast_processing: '⚡ Fast Processing'
        },
        features: [
          { title: 'Multi-Size Support', description: 'View ICO files containing multiple icon sizes from 16x16 to 256x256 pixels, all in a single file' },
          { title: 'Transparency Support', description: 'Full support for transparent backgrounds and alpha channels in ICO and CUR files' },
          { title: 'Batch Preview', description: 'Preview multiple ICO files simultaneously with thumbnail grid and quick navigation between icons' }
        ],
        about_title: 'About ICO Format',
        about_intro: 'ICO is a file format for computer icons in Microsoft Windows. ICO files contain one or more small images at multiple sizes and color depths so they can scale appropriately. Executables that display icons to users must include the icon in ICO format.',
        advantages_title: 'Key Advantages',
        advantages: [
          'Multiple sizes – One file contains icons at different resolutions',
          'Windows native – Built-in support in Windows operating system',
          'Transparency support – Alpha channel for transparent backgrounds',
          'Small file size – Efficient storage of multiple icon sizes',
          'Wide compatibility – Supported by all Windows applications',
          'Cursor support – CUR format for custom cursors'
        ],
        use_cases_title: 'Best Use Cases',
        use_cases: [
          'Windows applications – Native icon format for Windows apps',
          'Favicons – Website favicon files',
          'Desktop shortcuts – Application icons on Windows desktop',
          'File type icons – Icons representing file types',
          'Custom cursors – CUR files for custom mouse cursors',
          'System icons – Windows system icons and resources'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Specification',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.ico, .cur' },
          { label: 'MIME Type', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Format Type', value: 'Container format for multiple bitmap images' },
          { label: 'Supported Sizes', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 pixels' },
          { label: 'Color Depth', value: '1, 4, 8, 16, 24, 32 bits per pixel' },
          { label: 'Transparency', value: 'Alpha channel support in 32-bit mode' },
          { label: 'Maximum Icons', value: 'Multiple icons per file (typically 1-10)' },
          { label: 'Compression', value: 'Uncompressed or PNG compression (ICO v2)' }
        ],
        seo_title: 'ICO Viewer and Converter Features',
        seo_intro: 'Our professional ICO viewer provides comprehensive support for Windows Icon files including multi-size display, transparency support, and batch preview capabilities. Whether you\'re a developer, designer, or Windows user, our platform offers the tools you need for professional ICO file handling.',
        seo_viewing_title: 'Advanced Viewing Features',
        seo_viewing_text: 'View ICO files with support for multiple icon sizes, transparency display, and detailed icon information. Our viewer supports all ICO variants including standard ICO, CUR cursor files, and ICO v2 with PNG compression, ensuring accurate representation of your icon files.',
        seo_conversion_title: 'Professional Conversion Tools',
        seo_conversion_text: 'Convert ICO files to PNG, JPEG, WebP, and other formats while maintaining icon quality. Our conversion engine offers size selection, transparency preservation, and batch processing capabilities for handling multiple files simultaneously.',
        seo_optimization_title: 'Quality Optimization',
        seo_optimization_text: 'Optimize ICO files for modern use with our smart tools that can extract individual icon sizes, convert to modern formats, and reduce file sizes while preserving visual quality. Perfect for web favicons, application icons, and system resources where size and quality matter.',
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          files_header: 'Files',
          add_files: '+ Add',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'Podgląd ICO - Darmowy Online Podgląd Plików Ikony Windows',
        meta_description: 'Przeglądaj pliki ICO (Ikona Windows) online za darmo. Podgląd ikon o wielu rozmiarach z obsługą przezroczystości i wyświetlaniem wielu rozdzielczości. Do 20 plików, 100MB łącznie. Bez rejestracji.',
        meta_keywords: 'podgląd ICO, podgląd ikon, ikona Windows, podgląd favicon, podgląd CUR, ikona wielu rozmiarów, podgląd plików ICO, przetwarzanie wsadowe',
        hero_title: 'Darmowy Podgląd ICO',
        hero_subtitle: 'Przeglądaj pliki ikon Windows z obsługą wielu rozmiarów i przezroczystości',
        upload_title: 'Prześlij Pliki ICO',
        upload_description: 'Przeciągnij i upuść swoje pliki ikon Windows (ICO, CUR) lub kliknij, aby przeglądać. Obsługuje wiele rozmiarów i przezroczystość do 100MB łącznie.',
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
          multiple_sizes: '✓ Wiele Rozmiarów',
          windows_native: '🎨 Natywny Windows',
          fast_processing: '⚡ Szybkie Przetwarzanie'
        },
        features: [
          { title: 'Obsługa Wielu Rozmiarów', description: 'Przeglądaj pliki ICO zawierające wiele rozmiarów ikon od 16x16 do 256x256 pikseli, wszystko w jednym pliku' },
          { title: 'Obsługa Przezroczystości', description: 'Pełna obsługa przezroczystych tła i kanałów alfa w plikach ICO i CUR' },
          { title: 'Podgląd Wsadowy', description: 'Podglądaj wiele plików ICO jednocześnie z siatką miniatur i szybką nawigacją między ikonami' }
        ],
        about_title: 'O Formacie ICO',
        about_intro: 'ICO to format pliku dla ikon komputerowych w Microsoft Windows. Pliki ICO zawierają jeden lub więcej małych obrazów w wielu rozmiarach i głębiach kolorów, aby mogły się odpowiednio skalować. Pliki wykonywalne wyświetlające ikony użytkownikom muszą zawierać ikonę w formacie ICO.',
        advantages_title: 'Kluczowe Zalety',
        advantages: [
          'Wiele rozmiarów – Jeden plik zawiera ikony w różnych rozdzielczościach',
          'Natywny Windows – Wbudowana obsługa w systemie operacyjnym Windows',
          'Obsługa przezroczystości – Kanał alfa dla przezroczystych tła',
          'Mały rozmiar pliku – Wydajne przechowywanie wielu rozmiarów ikon',
          'Szeroka kompatybilność – Obsługiwane przez wszystkie aplikacje Windows',
          'Obsługa kursora – Format CUR dla niestandardowych kursorów'
        ],
        use_cases_title: 'Najlepsze Zastosowania',
        use_cases: [
          'Aplikacje Windows – Natywny format ikon dla aplikacji Windows',
          'Favicony – Pliki favicon stron internetowych',
          'Skróty pulpitu – Ikony aplikacji na pulpicie Windows',
          'Ikony typów plików – Ikony reprezentujące typy plików',
          'Niestandardowe kursory – Pliki CUR dla niestandardowych kursorów myszy',
          'Ikony systemowe – Ikony i zasoby systemu Windows'
        ],
        specs_title: 'Specyfikacje Techniczne',
        specs_header_label: 'Specyfikacja',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie Pliku', value: '.ico, .cur' },
          { label: 'Typ MIME', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Typ Formatu', value: 'Format kontenera dla wielu obrazów bitmapowych' },
          { label: 'Obsługiwane Rozmiary', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 pikseli' },
          { label: 'Głębia Kolorów', value: '1, 4, 8, 16, 24, 32 bity na piksel' },
          { label: 'Przezroczystość', value: 'Obsługa kanału alfa w trybie 32-bitowym' },
          { label: 'Maksymalne Ikony', value: 'Wiele ikon na plik (zwykle 1-10)' },
          { label: 'Kompresja', value: 'Nieskompresowane lub kompresja PNG (ICO v2)' }
        ],
        seo_title: 'Funkcje Podglądu i Konwertera ICO',
        seo_intro: 'Nasz profesjonalny podgląd ICO zapewnia kompleksowe wsparcie dla plików ikon Windows, w tym wyświetlanie wielu rozmiarów, obsługę przezroczystości i możliwości podglądu wsadowego. Niezależnie od tego, czy jesteś programistą, projektantem czy użytkownikiem Windows, nasza platforma oferuje narzędzia potrzebne do profesjonalnej obsługi plików ICO.',
        seo_viewing_title: 'Zaawansowane Funkcje Przeglądania',
        seo_viewing_text: 'Przeglądaj pliki ICO z obsługą wielu rozmiarów ikon, wyświetlaniem przezroczystości i szczegółowymi informacjami o ikonach. Nasz podgląd obsługuje wszystkie warianty ICO, w tym standardowe ICO, pliki kursora CUR i ICO v2 z kompresją PNG, zapewniając dokładną reprezentację Twoich plików ikon.',
        seo_conversion_title: 'Profesjonalne Narzędzia Konwersji',
        seo_conversion_text: 'Konwertuj pliki ICO do PNG, JPEG, WebP i innych formatów, zachowując jakość ikon. Nasz silnik konwersji oferuje wybór rozmiaru, zachowanie przezroczystości i możliwości przetwarzania wsadowego do jednoczesnego obsługiwania wielu plików.',
        seo_optimization_title: 'Optymalizacja Jakości',
        seo_optimization_text: 'Optymalizuj pliki ICO do nowoczesnego użycia za pomocą naszych inteligentnych narzędzi, które mogą wyodrębniać poszczególne rozmiary ikon, konwertować do nowoczesnych formatów i zmniejszać rozmiary plików, zachowując jakość wizualną. Idealne dla faviconów internetowych, ikon aplikacji i zasobów systemowych, gdzie liczą się rozmiar i jakość.',
        editor: {
          toggle_sidebar: 'Przełącz Pasek Boczny',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij Pasek Boczny',
          search_placeholder: 'Szukaj plików...',
          files_header: 'Pliki',
          add_files: '+ Dodaj',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'ICO Viewer - Kostenloser Online Windows Icon Datei Viewer',
        meta_description: 'ICO (Windows Icon) Dateien online kostenlos anzeigen. Multi-Größen Icon Viewer mit Transparenz-Unterstützung und mehreren Auflösungsanzeigen. Bis zu 20 Dateien, 100MB insgesamt. Keine Registrierung erforderlich.',
        meta_keywords: 'ICO Viewer, Icon Viewer, Windows Icon, Favicon Viewer, CUR Viewer, Multi-Größen Icon, ICO Datei Viewer, Stapelansicht',
        hero_title: 'Kostenloser ICO Viewer',
        hero_subtitle: 'Windows Icon-Dateien mit Multi-Größen-Unterstützung und Transparenz anzeigen',
        upload_title: 'ICO-Dateien hochladen',
        upload_description: 'Ziehen Sie Ihre Windows Icon-Dateien (ICO, CUR) hierher oder klicken Sie zum Auswählen. Unterstützt mehrere Größen und Transparenz bis zu 100MB insgesamt.',
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
          multiple_sizes: '✓ Mehrere Größen',
          windows_native: '🎨 Windows Native',
          fast_processing: '⚡ Schnelle Verarbeitung'
        },
        features: [
          { title: 'Multi-Größen-Unterstützung', description: 'ICO-Dateien anzeigen, die mehrere Icon-Größen von 16x16 bis 256x256 Pixel enthalten, alles in einer einzigen Datei' },
          { title: 'Transparenz-Unterstützung', description: 'Vollständige Unterstützung für transparente Hintergründe und Alpha-Kanäle in ICO- und CUR-Dateien' },
          { title: 'Stapel-Vorschau', description: 'Mehrere ICO-Dateien gleichzeitig mit Miniaturansicht-Grid und schneller Navigation zwischen Icons anzeigen' }
        ],
        about_title: 'Über das ICO-Format',
        about_intro: 'ICO ist ein Dateiformat für Computer-Icons in Microsoft Windows. ICO-Dateien enthalten ein oder mehrere kleine Bilder in verschiedenen Größen und Farbtiefen, damit sie angemessen skaliert werden können. Ausführbare Dateien, die Icons für Benutzer anzeigen, müssen das Icon im ICO-Format enthalten.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          'Mehrere Größen – Eine Datei enthält Icons in verschiedenen Auflösungen',
          'Windows Native – Eingebaute Unterstützung im Windows-Betriebssystem',
          'Transparenz-Unterstützung – Alpha-Kanal für transparente Hintergründe',
          'Kleine Dateigröße – Effiziente Speicherung mehrerer Icon-Größen',
          'Breite Kompatibilität – Unterstützt von allen Windows-Anwendungen',
          'Cursor-Unterstützung – CUR-Format für benutzerdefinierte Cursor'
        ],
        use_cases_title: 'Beste Anwendungsfälle',
        use_cases: [
          'Windows-Anwendungen – Native Icon-Format für Windows-Apps',
          'Favicons – Website-Favicon-Dateien',
          'Desktop-Verknüpfungen – Anwendungs-Icons auf Windows-Desktop',
          'Dateityp-Icons – Icons, die Dateitypen darstellen',
          'Benutzerdefinierte Cursor – CUR-Dateien für benutzerdefinierte Maus-Cursor',
          'System-Icons – Windows-System-Icons und Ressourcen'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Spezifikation',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateierweiterung', value: '.ico, .cur' },
          { label: 'MIME-Typ', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Formattyp', value: 'Container-Format für mehrere Bitmap-Bilder' },
          { label: 'Unterstützte Größen', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 Pixel' },
          { label: 'Farbtiefe', value: '1, 4, 8, 16, 24, 32 Bits pro Pixel' },
          { label: 'Transparenz', value: 'Alpha-Kanal-Unterstützung im 32-Bit-Modus' },
          { label: 'Maximale Icons', value: 'Mehrere Icons pro Datei (typischerweise 1-10)' },
          { label: 'Kompression', value: 'Unkomprimiert oder PNG-Kompression (ICO v2)' }
        ],
        seo_title: 'ICO Viewer und Konverter Funktionen',
        seo_intro: 'Unser professioneller ICO-Viewer bietet umfassende Unterstützung für Windows Icon-Dateien, einschließlich Multi-Größen-Anzeige, Transparenz-Unterstützung und Stapel-Vorschaufunktionen. Egal, ob Sie Entwickler, Designer oder Windows-Benutzer sind, unsere Plattform bietet die Tools, die Sie für die professionelle ICO-Dateiverarbeitung benötigen.',
        seo_viewing_title: 'Erweiterte Anzeigefunktionen',
        seo_viewing_text: 'Zeigen Sie ICO-Dateien mit Unterstützung für mehrere Icon-Größen, Transparenz-Anzeige und detaillierte Icon-Informationen an. Unser Viewer unterstützt alle ICO-Varianten, einschließlich Standard-ICO, CUR-Cursor-Dateien und ICO v2 mit PNG-Kompression, und gewährleistet eine genaue Darstellung Ihrer Icon-Dateien.',
        seo_conversion_title: 'Professionelle Konvertierungstools',
        seo_conversion_text: 'Konvertieren Sie ICO-Dateien in PNG, JPEG, WebP und andere Formate, während die Icon-Qualität erhalten bleibt. Unsere Konvertierungs-Engine bietet Größenauswahl, Transparenz-Erhaltung und Stapelverarbeitungsfunktionen für die gleichzeitige Verarbeitung mehrerer Dateien.',
        seo_optimization_title: 'Qualitätsoptimierung',
        seo_optimization_text: 'Optimieren Sie ICO-Dateien für den modernen Gebrauch mit unseren intelligenten Tools, die einzelne Icon-Größen extrahieren, in moderne Formate konvertieren und Dateigrößen reduzieren können, während die visuelle Qualität erhalten bleibt. Perfekt für Web-Favicons, Anwendungs-Icons und Systemressourcen, bei denen Größe und Qualität wichtig sind.',
        editor: {
          toggle_sidebar: 'Seitenleiste Umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Seitenleiste Schließen',
          search_placeholder: 'Dateien suchen...',
          files_header: 'Dateien',
          add_files: '+ Hinzufügen',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'Visor ICO - Visor Gratis de Archivos de Iconos de Windows Online',
        meta_description: 'Ver archivos ICO (Icono de Windows) online gratis. Visor de iconos de múltiples tamaños con soporte de transparencia y visualización de múltiples resoluciones. Hasta 20 archivos, 100MB total. Sin registro requerido.',
        meta_keywords: 'visor ICO, visor de iconos, icono Windows, visor favicon, visor CUR, icono múltiples tamaños, visor archivos ICO, visualización por lotes',
        hero_title: 'Visor ICO Gratis',
        hero_subtitle: 'Ver archivos de iconos de Windows con soporte de múltiples tamaños y transparencia',
        upload_title: 'Subir Archivos ICO',
        upload_description: 'Arrastra y suelta tus archivos de iconos de Windows (ICO, CUR) o haz clic para explorar. Soporta múltiples tamaños y transparencia hasta 100MB total.',
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
          multiple_sizes: '✓ Múltiples Tamaños',
          windows_native: '🎨 Nativo Windows',
          fast_processing: '⚡ Procesamiento Rápido'
        },
        features: [
          { title: 'Soporte Multi-Tamaño', description: 'Ver archivos ICO que contienen múltiples tamaños de iconos de 16x16 a 256x256 píxeles, todo en un solo archivo' },
          { title: 'Soporte de Transparencia', description: 'Soporte completo para fondos transparentes y canales alfa en archivos ICO y CUR' },
          { title: 'Vista Previa por Lotes', description: 'Vista previa de múltiples archivos ICO simultáneamente con cuadrícula de miniaturas y navegación rápida entre iconos' }
        ],
        about_title: 'Acerca del Formato ICO',
        about_intro: 'ICO es un formato de archivo para iconos de computadora en Microsoft Windows. Los archivos ICO contienen una o más imágenes pequeñas en múltiples tamaños y profundidades de color para que puedan escalar apropiadamente. Los ejecutables que muestran iconos a los usuarios deben incluir el icono en formato ICO.',
        advantages_title: 'Ventajas Clave',
        advantages: [
          'Múltiples tamaños – Un archivo contiene iconos en diferentes resoluciones',
          'Nativo Windows – Soporte integrado en el sistema operativo Windows',
          'Soporte de transparencia – Canal alfa para fondos transparentes',
          'Tamaño de archivo pequeño – Almacenamiento eficiente de múltiples tamaños de iconos',
          'Amplia compatibilidad – Compatible con todas las aplicaciones Windows',
          'Soporte de cursor – Formato CUR para cursores personalizados'
        ],
        use_cases_title: 'Mejores Casos de Uso',
        use_cases: [
          'Aplicaciones Windows – Formato de icono nativo para aplicaciones Windows',
          'Favicons – Archivos favicon de sitios web',
          'Accesos directos de escritorio – Iconos de aplicaciones en el escritorio Windows',
          'Iconos de tipo de archivo – Iconos que representan tipos de archivo',
          'Cursores personalizados – Archivos CUR para cursores de mouse personalizados',
          'Iconos del sistema – Iconos y recursos del sistema Windows'
        ],
        specs_title: 'Especificaciones Técnicas',
        specs_header_label: 'Especificación',
        specs_header_value: 'Detalles',
        specs: [
          { label: 'Extensión de Archivo', value: '.ico, .cur' },
          { label: 'Tipo MIME', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Tipo de Formato', value: 'Formato contenedor para múltiples imágenes bitmap' },
          { label: 'Tamaños Soportados', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 píxeles' },
          { label: 'Profundidad de Color', value: '1, 4, 8, 16, 24, 32 bits por píxel' },
          { label: 'Transparencia', value: 'Soporte de canal alfa en modo de 32 bits' },
          { label: 'Iconos Máximos', value: 'Múltiples iconos por archivo (típicamente 1-10)' },
          { label: 'Compresión', value: 'Sin comprimir o compresión PNG (ICO v2)' }
        ],
        seo_title: 'Funciones del Visor y Convertidor ICO',
        seo_intro: 'Nuestro visor ICO profesional proporciona soporte integral para archivos de iconos de Windows, incluyendo visualización multi-tamaño, soporte de transparencia y capacidades de vista previa por lotes. Ya seas desarrollador, diseñador o usuario de Windows, nuestra plataforma ofrece las herramientas que necesitas para el manejo profesional de archivos ICO.',
        seo_viewing_title: 'Funciones Avanzadas de Visualización',
        seo_viewing_text: 'Visualiza archivos ICO con soporte para múltiples tamaños de iconos, visualización de transparencia e información detallada de iconos. Nuestro visor admite todas las variantes ICO, incluyendo ICO estándar, archivos de cursor CUR e ICO v2 con compresión PNG, asegurando una representación precisa de tus archivos de iconos.',
        seo_conversion_title: 'Herramientas de Conversión Profesionales',
        seo_conversion_text: 'Convierte archivos ICO a PNG, JPEG, WebP y otros formatos manteniendo la calidad del icono. Nuestro motor de conversión ofrece selección de tamaño, preservación de transparencia y capacidades de procesamiento por lotes para manejar múltiples archivos simultáneamente.',
        seo_optimization_title: 'Optimización de Calidad',
        seo_optimization_text: 'Optimiza archivos ICO para uso moderno con nuestras herramientas inteligentes que pueden extraer tamaños de iconos individuales, convertir a formatos modernos y reducir tamaños de archivo preservando la calidad visual. Perfecto para favicons web, iconos de aplicaciones y recursos del sistema donde el tamaño y la calidad importan.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar Barra Lateral',
          search_placeholder: 'Buscar archivos...',
          files_header: 'Archivos',
          add_files: '+ Agregar',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'Visionneuse ICO - Visionneuse Gratuite de Fichiers d\'Icônes Windows en Ligne',
        meta_description: 'Voir les fichiers ICO (Icône Windows) en ligne gratuitement. Visionneuse d\'icônes multi-tailles avec support de transparence et affichage de multiples résolutions. Jusqu\'à 20 fichiers, 100 Mo au total. Aucune inscription requise.',
        meta_keywords: 'visionneuse ICO, visionneuse d\'icônes, icône Windows, visionneuse favicon, visionneuse CUR, icône multi-tailles, visionneuse fichiers ICO, aperçu par lots',
        hero_title: 'Visionneuse ICO Gratuite',
        hero_subtitle: 'Voir les fichiers d\'icônes Windows avec support multi-tailles et transparence',
        upload_title: 'Télécharger des Fichiers ICO',
        upload_description: 'Glissez-déposez vos fichiers d\'icônes Windows (ICO, CUR) ou cliquez pour parcourir. Prend en charge plusieurs tailles et transparence jusqu\'à 100 Mo au total.',
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
          multiple_sizes: '✓ Tailles Multiples',
          windows_native: '🎨 Natif Windows',
          fast_processing: '⚡ Traitement Rapide'
        },
        features: [
          { title: 'Support Multi-Tailles', description: 'Voir les fichiers ICO contenant plusieurs tailles d\'icônes de 16x16 à 256x256 pixels, le tout dans un seul fichier' },
          { title: 'Support de Transparence', description: 'Support complet pour les arrière-plans transparents et les canaux alpha dans les fichiers ICO et CUR' },
          { title: 'Aperçu par Lots', description: 'Aperçu de plusieurs fichiers ICO simultanément avec grille de miniatures et navigation rapide entre les icônes' }
        ],
        about_title: 'À Propos du Format ICO',
        about_intro: 'ICO est un format de fichier pour les icônes d\'ordinateur dans Microsoft Windows. Les fichiers ICO contiennent une ou plusieurs petites images à plusieurs tailles et profondeurs de couleur afin qu\'ils puissent être mis à l\'échelle de manière appropriée. Les exécutables qui affichent des icônes aux utilisateurs doivent inclure l\'icône au format ICO.',
        advantages_title: 'Avantages Clés',
        advantages: [
          'Tailles multiples – Un fichier contient des icônes à différentes résolutions',
          'Natif Windows – Support intégré dans le système d\'exploitation Windows',
          'Support de transparence – Canal alpha pour les arrière-plans transparents',
          'Petite taille de fichier – Stockage efficace de plusieurs tailles d\'icônes',
          'Large compatibilité – Pris en charge par toutes les applications Windows',
          'Support de curseur – Format CUR pour curseurs personnalisés'
        ],
        use_cases_title: 'Meilleurs Cas d\'Utilisation',
        use_cases: [
          'Applications Windows – Format d\'icône natif pour les applications Windows',
          'Favicons – Fichiers favicon de sites web',
          'Raccourcis bureau – Icônes d\'applications sur le bureau Windows',
          'Icônes de type de fichier – Icônes représentant les types de fichiers',
          'Curseurs personnalisés – Fichiers CUR pour curseurs de souris personnalisés',
          'Icônes système – Icônes et ressources système Windows'
        ],
        specs_title: 'Spécifications Techniques',
        specs_header_label: 'Spécification',
        specs_header_value: 'Détails',
        specs: [
          { label: 'Extension de Fichier', value: '.ico, .cur' },
          { label: 'Type MIME', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Type de Format', value: 'Format conteneur pour plusieurs images bitmap' },
          { label: 'Tailles Prises en Charge', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 pixels' },
          { label: 'Profondeur de Couleur', value: '1, 4, 8, 16, 24, 32 bits par pixel' },
          { label: 'Transparence', value: 'Support de canal alpha en mode 32 bits' },
          { label: 'Icônes Maximum', value: 'Plusieurs icônes par fichier (typiquement 1-10)' },
          { label: 'Compression', value: 'Non compressé ou compression PNG (ICO v2)' }
        ],
        seo_title: 'Fonctionnalités du Visionneuse et Convertisseur ICO',
        seo_intro: 'Notre visionneuse ICO professionnelle fournit un support complet pour les fichiers d\'icônes Windows, y compris l\'affichage multi-tailles, le support de transparence et les capacités d\'aperçu par lots. Que vous soyez développeur, designer ou utilisateur Windows, notre plateforme offre les outils dont vous avez besoin pour la gestion professionnelle des fichiers ICO.',
        seo_viewing_title: 'Fonctionnalités de Visualisation Avancées',
        seo_viewing_text: 'Visualisez les fichiers ICO avec support pour plusieurs tailles d\'icônes, affichage de transparence et informations détaillées sur les icônes. Notre visionneuse prend en charge toutes les variantes ICO, y compris ICO standard, fichiers de curseur CUR et ICO v2 avec compression PNG, garantissant une représentation précise de vos fichiers d\'icônes.',
        seo_conversion_title: 'Outils de Conversion Professionnels',
        seo_conversion_text: 'Convertissez les fichiers ICO en PNG, JPEG, WebP et autres formats tout en maintenant la qualité des icônes. Notre moteur de conversion offre la sélection de taille, la préservation de la transparence et les capacités de traitement par lots pour gérer plusieurs fichiers simultanément.',
        seo_optimization_title: 'Optimisation de la Qualité',
        seo_optimization_text: 'Optimisez les fichiers ICO pour une utilisation moderne avec nos outils intelligents qui peuvent extraire des tailles d\'icônes individuelles, convertir en formats modernes et réduire les tailles de fichier tout en préservant la qualité visuelle. Parfait pour les favicons web, les icônes d\'applications et les ressources système où la taille et la qualité comptent.',
        editor: {
          toggle_sidebar: 'Basculer la Barre Latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la Barre Latérale',
          search_placeholder: 'Rechercher des fichiers...',
          files_header: 'Fichiers',
          add_files: '+ Ajouter',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'Visualizzatore ICO - Visualizzatore Gratuito di File Icona Windows Online',
        meta_description: 'Visualizza file ICO (Icona Windows) online gratuitamente. Visualizzatore icone multi-dimensione con supporto trasparenza e visualizzazione multiple risoluzioni. Fino a 20 file, 100MB totali. Nessuna registrazione richiesta.',
        meta_keywords: 'visualizzatore ICO, visualizzatore icone, icona Windows, visualizzatore favicon, visualizzatore CUR, icona multi-dimensione, visualizzatore file ICO, anteprima batch',
        hero_title: 'Visualizzatore ICO Gratuito',
        hero_subtitle: 'Visualizza file icone Windows con supporto multi-dimensione e trasparenza',
        upload_title: 'Carica File ICO',
        upload_description: 'Trascina e rilascia i tuoi file icone Windows (ICO, CUR) o fai clic per sfogliare. Supporta multiple dimensioni e trasparenza fino a 100MB totali.',
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
          multiple_sizes: '✓ Dimensioni Multiple',
          windows_native: '🎨 Nativo Windows',
          fast_processing: '⚡ Elaborazione Veloce'
        },
        features: [
          { title: 'Supporto Multi-Dimensione', description: 'Visualizza file ICO contenenti multiple dimensioni icone da 16x16 a 256x256 pixel, tutto in un singolo file' },
          { title: 'Supporto Trasparenza', description: 'Supporto completo per sfondi trasparenti e canali alfa in file ICO e CUR' },
          { title: 'Anteprima Batch', description: 'Anteprima di più file ICO simultaneamente con griglia miniature e navigazione rapida tra icone' }
        ],
        about_title: 'Informazioni sul Formato ICO',
        about_intro: 'ICO è un formato di file per icone di computer in Microsoft Windows. I file ICO contengono una o più piccole immagini a multiple dimensioni e profondità colore in modo che possano scalare appropriatamente. Gli eseguibili che visualizzano icone agli utenti devono includere l\'icona in formato ICO.',
        advantages_title: 'Vantaggi Chiave',
        advantages: [
          'Dimensioni multiple – Un file contiene icone a diverse risoluzioni',
          'Nativo Windows – Supporto integrato nel sistema operativo Windows',
          'Supporto trasparenza – Canale alfa per sfondi trasparenti',
          'Piccole dimensioni file – Archiviazione efficiente di multiple dimensioni icone',
          'Ampia compatibilità – Supportato da tutte le applicazioni Windows',
          'Supporto cursore – Formato CUR per cursori personalizzati'
        ],
        use_cases_title: 'Migliori Casi d\'Uso',
        use_cases: [
          'Applicazioni Windows – Formato icona nativo per app Windows',
          'Favicon – File favicon di siti web',
          'Collegamenti desktop – Icone applicazioni sul desktop Windows',
          'Icone tipo file – Icone che rappresentano tipi di file',
          'Cursori personalizzati – File CUR per cursori mouse personalizzati',
          'Icone sistema – Icone e risorse sistema Windows'
        ],
        specs_title: 'Specifiche Tecniche',
        specs_header_label: 'Specifica',
        specs_header_value: 'Dettagli',
        specs: [
          { label: 'Estensione File', value: '.ico, .cur' },
          { label: 'Tipo MIME', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Tipo Formato', value: 'Formato contenitore per multiple immagini bitmap' },
          { label: 'Dimensioni Supportate', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 pixel' },
          { label: 'Profondità Colore', value: '1, 4, 8, 16, 24, 32 bit per pixel' },
          { label: 'Trasparenza', value: 'Supporto canale alfa in modalità 32 bit' },
          { label: 'Icone Massime', value: 'Multiple icone per file (tipicamente 1-10)' },
          { label: 'Compressione', value: 'Non compresso o compressione PNG (ICO v2)' }
        ],
        seo_title: 'Funzionalità Visualizzatore e Convertitore ICO',
        seo_intro: 'Il nostro visualizzatore ICO professionale fornisce supporto completo per file icone Windows, inclusa visualizzazione multi-dimensione, supporto trasparenza e capacità anteprima batch. Che tu sia sviluppatore, designer o utente Windows, la nostra piattaforma offre gli strumenti di cui hai bisogno per la gestione professionale di file ICO.',
        seo_viewing_title: 'Funzionalità di Visualizzazione Avanzate',
        seo_viewing_text: 'Visualizza file ICO con supporto per multiple dimensioni icone, visualizzazione trasparenza e informazioni dettagliate icone. Il nostro visualizzatore supporta tutte le varianti ICO, inclusa ICO standard, file cursore CUR e ICO v2 con compressione PNG, garantendo una rappresentazione accurata dei tuoi file icone.',
        seo_conversion_title: 'Strumenti di Conversione Professionali',
        seo_conversion_text: 'Converti file ICO in PNG, JPEG, WebP e altri formati mantenendo qualità icona. Il nostro motore di conversione offre selezione dimensione, preservazione trasparenza e capacità di elaborazione batch per gestire più file contemporaneamente.',
        seo_optimization_title: 'Ottimizzazione Qualità',
        seo_optimization_text: 'Ottimizza file ICO per uso moderno con i nostri strumenti intelligenti che possono estrarre dimensioni icone individuali, convertire in formati moderni e ridurre dimensioni file preservando la qualità visiva. Perfetto per favicon web, icone applicazioni e risorse sistema dove dimensione e qualità contano.',
        editor: {
          toggle_sidebar: 'Mostra/Nascondi Barra Laterale',
          close: 'Chiudi (Esc)',
          close_sidebar: 'Chiudi Barra Laterale',
          search_placeholder: 'Cerca file...',
          files_header: 'File',
          add_files: '+ Aggiungi',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'ICO Viewer - Gratis Online Windows Icon Bestand Viewer',
        meta_description: 'Bekijk ICO (Windows Icon) bestanden online gratis. Multi-grootte icon viewer met transparantie-ondersteuning en meerdere resolutieweergave. Tot 20 bestanden, 100MB totaal. Geen registratie vereist.',
        meta_keywords: 'ICO viewer, icon viewer, Windows icon, favicon viewer, CUR viewer, multi-grootte icon, ICO bestand viewer, batchweergave',
        hero_title: 'Gratis ICO Viewer',
        hero_subtitle: 'Bekijk Windows icon bestanden met multi-grootte ondersteuning en transparantie',
        upload_title: 'Upload ICO Bestanden',
        upload_description: 'Sleep en zet je Windows icon bestanden (ICO, CUR) neer of klik om te bladeren. Ondersteunt meerdere groottes en transparantie tot 100MB totaal.',
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
          multiple_sizes: '✓ Meerdere Groottes',
          windows_native: '🎨 Windows Native',
          fast_processing: '⚡ Snelle Verwerking'
        },
        features: [
          { title: 'Multi-Grootte Ondersteuning', description: 'Bekijk ICO bestanden met meerdere icon groottes van 16x16 tot 256x256 pixels, alles in één bestand' },
          { title: 'Transparantie Ondersteuning', description: 'Volledige ondersteuning voor transparante achtergronden en alpha-kanalen in ICO- en CUR-bestanden' },
          { title: 'Batch-Voorvertoning', description: 'Voorvertoning van meerdere ICO bestanden tegelijk met miniatuurgrid en snelle navigatie tussen iconen' }
        ],
        about_title: 'Over ICO Formaat',
        about_intro: 'ICO is een bestandsformaat voor computericonen in Microsoft Windows. ICO-bestanden bevatten één of meer kleine afbeeldingen in meerdere groottes en kleurdieptes zodat ze geschikt kunnen worden geschaald. Uitvoerbare bestanden die iconen aan gebruikers weergeven, moeten het pictogram in ICO-formaat bevatten.',
        advantages_title: 'Belangrijkste Voordelen',
        advantages: [
          'Meerdere groottes – Eén bestand bevat iconen in verschillende resoluties',
          'Windows Native – Ingebouwde ondersteuning in Windows-besturingssysteem',
          'Transparantie-ondersteuning – Alpha-kanaal voor transparante achtergronden',
          'Kleine bestandsgrootte – Efficiënte opslag van meerdere icon groottes',
          'Breed compatibel – Ondersteund door alle Windows-applicaties',
          'Cursor-ondersteuning – CUR-formaat voor aangepaste cursors'
        ],
        use_cases_title: 'Beste Gebruikssituaties',
        use_cases: [
          'Windows-applicaties – Native icon-formaat voor Windows-apps',
          'Favicons – Website favicon-bestanden',
          'Bureaublad-snelkoppelingen – Applicatie-iconen op Windows-bureaublad',
          'Bestandstype-iconen – Iconen die bestandstypen vertegenwoordigen',
          'Aangepaste cursors – CUR-bestanden voor aangepaste muiscursors',
          'Systeem-iconen – Windows-systeemiconen en -bronnen'
        ],
        specs_title: 'Technische Specificaties',
        specs_header_label: 'Specificatie',
        specs_header_value: 'Details',
        specs: [
          { label: 'Bestandsextensie', value: '.ico, .cur' },
          { label: 'MIME Type', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Formattype', value: 'Containerformaat voor meerdere bitmapafbeeldingen' },
          { label: 'Ondersteunde Groottes', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 pixels' },
          { label: 'Kleurdiepte', value: '1, 4, 8, 16, 24, 32 bits per pixel' },
          { label: 'Transparantie', value: 'Alpha-kanaalondersteuning in 32-bit modus' },
          { label: 'Maximale Iconen', value: 'Meerdere iconen per bestand (meestal 1-10)' },
          { label: 'Compressie', value: 'Ongecomprimeerd of PNG-compressie (ICO v2)' }
        ],
        seo_title: 'ICO Viewer en Converter Functies',
        seo_intro: 'Onze professionele ICO viewer biedt uitgebreide ondersteuning voor Windows Icon-bestanden, inclusief multi-grootte weergave, transparantie-ondersteuning en batch-voorvertoningsmogelijkheden. Of je nu ontwikkelaar, designer of Windows-gebruiker bent, ons platform biedt de tools die je nodig hebt voor professionele ICO-bestandsverwerking.',
        seo_viewing_title: 'Geavanceerde Weergavefuncties',
        seo_viewing_text: 'Bekijk ICO-bestanden met ondersteuning voor meerdere icon-groottes, transparantieweergave en gedetailleerde icon-informatie. Onze viewer ondersteunt alle ICO-varianten, inclusief standaard ICO, CUR-cursorbestanden en ICO v2 met PNG-compressie, waardoor nauwkeurige weergave van je icon-bestanden wordt gegarandeerd.',
        seo_conversion_title: 'Professionele Conversietools',
        seo_conversion_text: 'Converteer ICO-bestanden naar PNG, JPEG, WebP en andere formaten terwijl de icon-kwaliteit behouden blijft. Onze conversie-engine biedt grootte-selectie, transparantie-behoud en batchverwerkingsmogelijkheden voor het gelijktijdig verwerken van meerdere bestanden.',
        seo_optimization_title: 'Kwaliteitsoptimalisatie',
        seo_optimization_text: 'Optimaliseer ICO-bestanden voor modern gebruik met onze slimme tools die individuele icon-groottes kunnen extraheren, converteren naar moderne formaten en bestandsgroottes kunnen verkleinen terwijl de visuele kwaliteit behouden blijft. Perfect voor web-favicons, applicatie-iconen en systeembronnen waar grootte en kwaliteit belangrijk zijn.',
        editor: {
          toggle_sidebar: 'Zijbalk In-/Uitschakelen',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk Sluiten',
          search_placeholder: 'Zoek bestanden...',
          files_header: 'Bestanden',
          add_files: '+ Toevoegen',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'Visualizador ICO - Visualizador Gratuito de Arquivos de Ícone Windows Online',
        meta_description: 'Ver arquivos ICO (Ícone Windows) online gratuitamente. Visualizador de ícones de múltiplos tamanhos com suporte de transparência e exibição de múltiplas resoluções. Até 20 arquivos, 100MB total. Nenhum registro necessário.',
        meta_keywords: 'visualizador ICO, visualizador de ícones, ícone Windows, visualizador favicon, visualizador CUR, ícone múltiplos tamanhos, visualizador arquivos ICO, visualização em lote',
        hero_title: 'Visualizador ICO Gratuito',
        hero_subtitle: 'Ver arquivos de ícones Windows com suporte de múltiplos tamanhos e transparência',
        upload_title: 'Carregar Arquivos ICO',
        upload_description: 'Arraste e solte seus arquivos de ícones Windows (ICO, CUR) ou clique para procurar. Suporta múltiplos tamanhos e transparência até 100MB no total.',
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
          multiple_sizes: '✓ Múltiplos Tamanhos',
          windows_native: '🎨 Nativo Windows',
          fast_processing: '⚡ Processamento Rápido'
        },
        features: [
          { title: 'Suporte Multi-Tamanho', description: 'Ver arquivos ICO contendo múltiplos tamanhos de ícones de 16x16 a 256x256 pixels, tudo em um único arquivo' },
          { title: 'Suporte de Transparência', description: 'Suporte completo para fundos transparentes e canais alfa em arquivos ICO e CUR' },
          { title: 'Visualização em Lote', description: 'Visualização de múltiplos arquivos ICO simultaneamente com grade de miniaturas e navegação rápida entre ícones' }
        ],
        about_title: 'Sobre o Formato ICO',
        about_intro: 'ICO é um formato de arquivo para ícones de computador no Microsoft Windows. Arquivos ICO contêm uma ou mais imagens pequenas em múltiplos tamanhos e profundidades de cor para que possam escalar apropriadamente. Executáveis que exibem ícones para usuários devem incluir o ícone em formato ICO.',
        advantages_title: 'Vantagens Principais',
        advantages: [
          'Múltiplos tamanhos – Um arquivo contém ícones em diferentes resoluções',
          'Nativo Windows – Suporte integrado no sistema operacional Windows',
          'Suporte de transparência – Canal alfa para fundos transparentes',
          'Tamanho de arquivo pequeno – Armazenamento eficiente de múltiplos tamanhos de ícones',
          'Ampla compatibilidade – Suportado por todas as aplicações Windows',
          'Suporte de cursor – Formato CUR para cursores personalizados'
        ],
        use_cases_title: 'Melhores Casos de Uso',
        use_cases: [
          'Aplicações Windows – Formato de ícone nativo para aplicações Windows',
          'Favicons – Arquivos favicon de sites web',
          'Atalhos de desktop – Ícones de aplicações na área de trabalho Windows',
          'Ícones de tipo de arquivo – Ícones representando tipos de arquivo',
          'Cursores personalizados – Arquivos CUR para cursores de mouse personalizados',
          'Ícones do sistema – Ícones e recursos do sistema Windows'
        ],
        specs_title: 'Especificações Técnicas',
        specs_header_label: 'Especificação',
        specs_header_value: 'Detalhes',
        specs: [
          { label: 'Extensão de Arquivo', value: '.ico, .cur' },
          { label: 'Tipo MIME', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Tipo de Formato', value: 'Formato contêiner para múltiplas imagens bitmap' },
          { label: 'Tamanhos Suportados', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 pixels' },
          { label: 'Profundidade de Cor', value: '1, 4, 8, 16, 24, 32 bits por pixel' },
          { label: 'Transparência', value: 'Suporte de canal alfa no modo de 32 bits' },
          { label: 'Ícones Máximos', value: 'Múltiplos ícones por arquivo (tipicamente 1-10)' },
          { label: 'Compressão', value: 'Não comprimido ou compressão PNG (ICO v2)' }
        ],
        seo_title: 'Recursos do Visualizador e Conversor ICO',
        seo_intro: 'Nosso visualizador ICO profissional fornece suporte abrangente para arquivos de ícones Windows, incluindo exibição multi-tamanho, suporte de transparência e capacidades de visualização em lote. Seja você desenvolvedor, designer ou usuário Windows, nossa plataforma oferece as ferramentas necessárias para o processamento profissional de arquivos ICO.',
        seo_viewing_title: 'Recursos Avançados de Visualização',
        seo_viewing_text: 'Visualize arquivos ICO com suporte completo de tamanhos de ícones, exibição de transparência e informações detalhadas de ícones. Nosso visualizador suporta todas as variantes ICO, incluindo ICO padrão, arquivos de cursor CUR e ICO v2 com compressão PNG, garantindo representação precisa dos seus arquivos de ícones.',
        seo_conversion_title: 'Ferramentas de Conversão Profissionais',
        seo_conversion_text: 'Converta arquivos ICO para PNG, JPEG, WebP e outros formatos mantendo qualidade do ícone. Nosso mecanismo de conversão oferece seleção de tamanho, preservação de transparência e capacidades de processamento em lote para lidar com múltiplos arquivos simultaneamente.',
        seo_optimization_title: 'Otimização de Qualidade',
        seo_optimization_text: 'Otimize arquivos ICO para uso moderno com nossas ferramentas inteligentes que podem extrair tamanhos de ícones individuais, converter para formatos modernos e reduzir tamanhos de arquivo preservando a qualidade visual. Perfeito para favicons web, ícones de aplicações e recursos do sistema onde tamanho e qualidade importam.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar Barra Lateral',
          search_placeholder: 'Pesquisar arquivos...',
          files_header: 'Arquivos',
          add_files: '+ Adicionar',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'Trình Xem ICO - Trình Xem File Biểu Tượng Windows Miễn Phí Trực Tuyến',
        meta_description: 'Xem file ICO (Biểu Tượng Windows) trực tuyến miễn phí. Trình xem biểu tượng nhiều kích thước với hỗ trợ trong suốt và hiển thị nhiều độ phân giải. Lên đến 20 tệp, 100MB tổng cộng. Không cần đăng ký.',
        meta_keywords: 'trình xem ICO, trình xem biểu tượng, biểu tượng Windows, trình xem favicon, trình xem CUR, biểu tượng nhiều kích thước, trình xem file ICO, xem trước hàng loạt',
        hero_title: 'Trình Xem ICO Miễn Phí',
        hero_subtitle: 'Xem file biểu tượng Windows với hỗ trợ nhiều kích thước và trong suốt',
        upload_title: 'Tải Lên File ICO',
        upload_description: 'Kéo và thả file biểu tượng Windows của bạn (ICO, CUR) hoặc nhấp để duyệt. Hỗ trợ nhiều kích thước và trong suốt lên đến 100MB tổng cộng.',
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
          multiple_sizes: '✓ Nhiều Kích Thước',
          windows_native: '🎨 Gốc Windows',
          fast_processing: '⚡ Xử Lý Nhanh'
        },
        features: [
          { title: 'Hỗ Trợ Nhiều Kích Thước', description: 'Xem file ICO chứa nhiều kích thước biểu tượng từ 16x16 đến 256x256 pixel, tất cả trong một file' },
          { title: 'Hỗ Trợ Trong Suốt', description: 'Hỗ trợ đầy đủ cho nền trong suốt và kênh alpha trong file ICO và CUR' },
          { title: 'Xem Trước Hàng Loạt', description: 'Xem trước nhiều file ICO đồng thời với lưới hình thu nhỏ và điều hướng nhanh giữa các biểu tượng' }
        ],
        about_title: 'Về Định Dạng ICO',
        about_intro: 'ICO là định dạng file cho biểu tượng máy tính trong Microsoft Windows. File ICO chứa một hoặc nhiều hình ảnh nhỏ ở nhiều kích thước và độ sâu màu để chúng có thể mở rộng phù hợp. Các tệp thực thi hiển thị biểu tượng cho người dùng phải bao gồm biểu tượng ở định dạng ICO.',
        advantages_title: 'Ưu Điểm Chính',
        advantages: [
          'Nhiều kích thước – Một file chứa biểu tượng ở các độ phân giải khác nhau',
          'Gốc Windows – Hỗ trợ tích hợp trong hệ điều hành Windows',
          'Hỗ trợ trong suốt – Kênh alpha cho nền trong suốt',
          'Kích thước file nhỏ – Lưu trữ hiệu quả nhiều kích thước biểu tượng',
          'Tương thích rộng – Được hỗ trợ bởi tất cả ứng dụng Windows',
          'Hỗ trợ con trỏ – Định dạng CUR cho con trỏ tùy chỉnh'
        ],
        use_cases_title: 'Trường Hợp Sử Dụng Tốt Nhất',
        use_cases: [
          'Ứng dụng Windows – Định dạng biểu tượng gốc cho ứng dụng Windows',
          'Favicon – File favicon của trang web',
          'Phím tắt màn hình – Biểu tượng ứng dụng trên màn hình Windows',
          'Biểu tượng loại file – Biểu tượng đại diện cho loại file',
          'Con trỏ tùy chỉnh – File CUR cho con trỏ chuột tùy chỉnh',
          'Biểu tượng hệ thống – Biểu tượng và tài nguyên hệ thống Windows'
        ],
        specs_title: 'Thông Số Kỹ Thuật',
        specs_header_label: 'Thông Số',
        specs_header_value: 'Chi Tiết',
        specs: [
          { label: 'Phần Mở Rộng Tệp', value: '.ico, .cur' },
          { label: 'Loại MIME', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Loại Định Dạng', value: 'Định dạng container cho nhiều hình ảnh bitmap' },
          { label: 'Kích Thước Được Hỗ Trợ', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 pixel' },
          { label: 'Độ Sâu Màu', value: '1, 4, 8, 16, 24, 32 bit mỗi pixel' },
          { label: 'Độ Trong Suốt', value: 'Hỗ trợ kênh alpha ở chế độ 32 bit' },
          { label: 'Biểu Tượng Tối Đa', value: 'Nhiều biểu tượng mỗi file (thường 1-10)' },
          { label: 'Nén', value: 'Không nén hoặc nén PNG (ICO v2)' }
        ],
        seo_title: 'Tính Năng Trình Xem và Chuyển Đổi ICO',
        seo_intro: 'Trình xem ICO chuyên nghiệp của chúng tôi cung cấp hỗ trợ toàn diện cho file biểu tượng Windows, bao gồm hiển thị nhiều kích thước, hỗ trợ trong suốt và khả năng xem trước hàng loạt. Dù bạn là nhà phát triển, nhà thiết kế hay người dùng Windows, nền tảng của chúng tôi cung cấp các công cụ bạn cần để xử lý file ICO chuyên nghiệp.',
        seo_viewing_title: 'Tính Năng Xem Nâng Cao',
        seo_viewing_text: 'Xem file ICO với hỗ trợ nhiều kích thước biểu tượng, hiển thị trong suốt và thông tin biểu tượng chi tiết. Trình xem của chúng tôi hỗ trợ tất cả các biến thể ICO, bao gồm ICO tiêu chuẩn, file con trỏ CUR và ICO v2 với nén PNG, đảm bảo biểu diễn chính xác file biểu tượng của bạn.',
        seo_conversion_title: 'Công Cụ Chuyển Đổi Chuyên Nghiệp',
        seo_conversion_text: 'Chuyển đổi file ICO sang PNG, JPEG, WebP và các định dạng khác trong khi duy trì chất lượng biểu tượng. Công cụ chuyển đổi của chúng tôi cung cấp lựa chọn kích thước, bảo toàn độ trong suốt và khả năng xử lý hàng loạt để xử lý nhiều file đồng thời.',
        seo_optimization_title: 'Tối Ưu Hóa Chất Lượng',
        seo_optimization_text: 'Tối ưu hóa file ICO cho sử dụng hiện đại với các công cụ thông minh của chúng tôi có thể trích xuất kích thước biểu tượng riêng lẻ, chuyển đổi sang định dạng hiện đại và giảm kích thước file trong khi bảo toàn chất lượng hình ảnh. Hoàn hảo cho favicon web, biểu tượng ứng dụng và tài nguyên hệ thống nơi kích thước và chất lượng quan trọng.',
        editor: {
          toggle_sidebar: 'Chuyển Đổi Thanh Bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng Thanh Bên',
          search_placeholder: 'Tìm kiếm tệp...',
          files_header: 'Tệp',
          add_files: '+ Thêm',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'ICO Görüntüleyici - Ücretsiz Online Windows İkon Dosyası Görüntüleyici',
        meta_description: 'ICO (Windows İkon) dosyalarını çevrimiçi ücretsiz görüntüleyin. Şeffaflık desteği ve çoklu çözünürlük görüntüleme ile çoklu boyutlu ikon görüntüleyici. 20 dosyaya kadar, toplam 100MB. Kayıt gerekmez.',
        meta_keywords: 'ICO görüntüleyici, ikon görüntüleyici, Windows ikon, favicon görüntüleyici, CUR görüntüleyici, çoklu boyutlu ikon, ICO dosya görüntüleyici, toplu görüntüleme',
        hero_title: 'Ücretsiz ICO Görüntüleyici',
        hero_subtitle: 'Çoklu boyut desteği ve şeffaflık ile Windows ikon dosyalarını görüntüleyin',
        upload_title: 'ICO Dosyalarını Yükle',
        upload_description: 'Windows ikon dosyalarınızı (ICO, CUR) sürükleyip bırakın veya göz atmak için tıklayın. Toplam 100MB\'a kadar birden fazla boyut ve şeffaflık destekler.',
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
          multiple_sizes: '✓ Birden Fazla Boyut',
          windows_native: '🎨 Windows Native',
          fast_processing: '⚡ Hızlı İşleme'
        },
        features: [
          { title: 'Çoklu Boyut Desteği', description: '16x16\'dan 256x256 piksele kadar birden fazla ikon boyutu içeren ICO dosyalarını görüntüleyin, hepsi tek bir dosyada' },
          { title: 'Şeffaflık Desteği', description: 'ICO ve CUR dosyalarında şeffaf arka planlar ve alfa kanalları için tam destek' },
          { title: 'Toplu Önizleme', description: 'Küçük resim ızgarası ve ikonlar arasında hızlı gezinme ile birden fazla ICO dosyasını aynı anda önizleyin' }
        ],
        about_title: 'ICO Formatı Hakkında',
        about_intro: 'ICO, Microsoft Windows\'ta bilgisayar ikonları için bir dosya formatıdır. ICO dosyaları, uygun şekilde ölçeklenebilmeleri için birden fazla boyutta ve renk derinliğinde bir veya daha fazla küçük resim içerir. Kullanıcılara ikon gösteren yürütülebilir dosyalar, ikonu ICO formatında içermelidir.',
        advantages_title: 'Temel Avantajlar',
        advantages: [
          'Birden fazla boyut – Bir dosya farklı çözünürlüklerde ikonlar içerir',
          'Windows Native – Windows işletim sisteminde yerleşik destek',
          'Şeffaflık desteği – Şeffaf arka planlar için alfa kanalı',
          'Küçük dosya boyutu – Birden fazla ikon boyutunun verimli depolanması',
          'Geniş uyumluluk – Tüm Windows uygulamaları tarafından desteklenir',
          'İmleç desteği – Özel imleçler için CUR formatı'
        ],
        use_cases_title: 'Popüler Kullanım Durumları',
        use_cases: [
          'Windows uygulamaları – Windows uygulamaları için yerel ikon formatı',
          'Faviconlar – Web sitesi favicon dosyaları',
          'Masaüstü kısayolları – Windows masaüstündeki uygulama ikonları',
          'Dosya türü ikonları – Dosya türlerini temsil eden ikonlar',
          'Özel imleçler – Özel fare imleçleri için CUR dosyaları',
          'Sistem ikonları – Windows sistem ikonları ve kaynakları'
        ],
        specs_title: 'Teknik Özellikler',
        specs_header_label: 'Özellik',
        specs_header_value: 'Detaylar',
        specs: [
          { label: 'Dosya Uzantısı', value: '.ico, .cur' },
          { label: 'MIME Türü', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Format Türü', value: 'Birden fazla bitmap görüntü için konteyner formatı' },
          { label: 'Desteklenen Boyutlar', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 piksel' },
          { label: 'Renk Derinliği', value: 'Piksel başına 1, 4, 8, 16, 24, 32 bit' },
          { label: 'Şeffaflık', value: '32 bit modda alfa kanalı desteği' },
          { label: 'Maksimum İkonlar', value: 'Dosya başına birden fazla ikon (tipik olarak 1-10)' },
          { label: 'Sıkıştırma', value: 'Sıkıştırılmamış veya PNG sıkıştırması (ICO v2)' }
        ],
        seo_title: 'ICO Görüntüleyici ve Dönüştürücü Özellikleri',
        seo_intro: 'Profesyonel ICO görüntüleyicimiz, çoklu boyut görüntüleme, şeffaflık desteği ve toplu önizleme yetenekleri dahil olmak üzere Windows İkon dosyaları için kapsamlı destek sağlar. İster geliştirici, tasarımcı veya Windows kullanıcısı olun, platformumuz profesyonel ICO dosya işleme için ihtiyacınız olan araçları sunar.',
        seo_viewing_title: 'Gelişmiş Görüntüleme Özellikleri',
        seo_viewing_text: 'Birden fazla ikon boyutu desteği, şeffaflık görüntüleme ve detaylı ikon bilgileri ile ICO dosyalarını görüntüleyin. Görüntüleyicimiz, standart ICO, CUR imleç dosyaları ve PNG sıkıştırmalı ICO v2 dahil olmak üzere tüm ICO varyantlarını destekler ve ikon dosyalarınızın doğru temsilini sağlar.',
        seo_conversion_title: 'Profesyonel Dönüştürme Araçları',
        seo_conversion_text: 'İkon kalitesini korurken ICO dosyalarını PNG, JPEG, WebP ve diğer formatlara dönüştürün. Dönüştürme motorumuz, birden fazla dosyayı aynı anda işlemek için boyut seçimi, şeffaflık koruma ve toplu işleme yetenekleri sunar.',
        seo_optimization_title: 'Kalite Optimizasyonu',
        seo_optimization_text: 'Görsel kaliteyi korurken bireysel ikon boyutlarını çıkarabilen, modern formatlara dönüştürebilen ve dosya boyutlarını azaltabilen akıllı araçlarımızla ICO dosyalarını modern kullanım için optimize edin. Dosya boyutu ve kalitenin önemli olduğu web faviconları, uygulama ikonları ve sistem kaynakları için mükemmeldir.',
        editor: {
          toggle_sidebar: 'Kenar Çubuğunu Aç/Kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar Çubuğunu Kapat',
          search_placeholder: 'Dosyaları ara...',
          files_header: 'Dosyalar',
          add_files: '+ Ekle',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'Просмотрщик ICO - Бесплатный Онлайн Просмотрщик Файлов Иконок Windows',
        meta_description: 'Просматривайте файлы ICO (Иконка Windows) онлайн бесплатно. Просмотрщик иконок нескольких размеров с поддержкой прозрачности и отображением нескольких разрешений. До 20 файлов, 100 МБ всего. Регистрация не требуется.',
        meta_keywords: 'просмотрщик ICO, просмотрщик иконок, иконка Windows, просмотрщик favicon, просмотрщик CUR, иконка нескольких размеров, просмотрщик файлов ICO, пакетный просмотр',
        hero_title: 'Бесплатный Просмотрщик ICO',
        hero_subtitle: 'Просматривайте файлы иконок Windows с поддержкой нескольких размеров и прозрачности',
        upload_title: 'Загрузить Файлы ICO',
        upload_description: 'Перетащите ваши файлы иконок Windows (ICO, CUR) или нажмите для просмотра. Поддерживает несколько размеров и прозрачность до 100 МБ всего.',
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
          multiple_sizes: '✓ Несколько Размеров',
          windows_native: '🎨 Нативный Windows',
          fast_processing: '⚡ Быстрая Обработка'
        },
        features: [
          { title: 'Поддержка Нескольких Размеров', description: 'Просматривайте файлы ICO, содержащие несколько размеров иконок от 16x16 до 256x256 пикселей, все в одном файле' },
          { title: 'Поддержка Прозрачности', description: 'Полная поддержка прозрачных фонов и альфа-каналов в файлах ICO и CUR' },
          { title: 'Пакетный Предпросмотр', description: 'Предпросмотр нескольких файлов ICO одновременно с сеткой миниатюр и быстрой навигацией между иконками' }
        ],
        about_title: 'О Формате ICO',
        about_intro: 'ICO — это формат файла для компьютерных иконок в Microsoft Windows. Файлы ICO содержат одно или несколько маленьких изображений в нескольких размерах и глубинах цвета, чтобы они могли масштабироваться соответствующим образом. Исполняемые файлы, которые отображают иконки пользователям, должны включать иконку в формате ICO.',
        advantages_title: 'Ключевые Преимущества',
        advantages: [
          'Несколько размеров – Один файл содержит иконки в разных разрешениях',
          'Нативный Windows – Встроенная поддержка в операционной системе Windows',
          'Поддержка прозрачности – Альфа-канал для прозрачных фонов',
          'Маленький размер файла – Эффективное хранение нескольких размеров иконок',
          'Широкая совместимость – Поддерживается всеми приложениями Windows',
          'Поддержка курсора – Формат CUR для пользовательских курсоров'
        ],
        use_cases_title: 'Популярные Случаи Использования',
        use_cases: [
          'Приложения Windows – Нативный формат иконок для приложений Windows',
          'Favicons – Файлы favicon веб-сайтов',
          'Ярлыки рабочего стола – Иконки приложений на рабочем столе Windows',
          'Иконки типов файлов – Иконки, представляющие типы файлов',
          'Пользовательские курсоры – Файлы CUR для пользовательских курсоров мыши',
          'Системные иконки – Иконки и ресурсы системы Windows'
        ],
        specs_title: 'Технические Характеристики',
        specs_header_label: 'Характеристика',
        specs_header_value: 'Детали',
        specs: [
          { label: 'Расширение Файла', value: '.ico, .cur' },
          { label: 'Тип MIME', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Тип Формата', value: 'Формат контейнера для нескольких растровых изображений' },
          { label: 'Поддерживаемые Размеры', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 пикселей' },
          { label: 'Глубина Цвета', value: '1, 4, 8, 16, 24, 32 бита на пиксель' },
          { label: 'Прозрачность', value: 'Поддержка альфа-канала в 32-битном режиме' },
          { label: 'Максимальные Иконки', value: 'Несколько иконок на файл (обычно 1-10)' },
          { label: 'Сжатие', value: 'Несжатый или сжатие PNG (ICO v2)' }
        ],
        seo_title: 'Функции Просмотрщика и Конвертера ICO',
        seo_intro: 'Наш профессиональный просмотрщик ICO обеспечивает комплексную поддержку файлов иконок Windows, включая отображение нескольких размеров, поддержку прозрачности и возможности пакетного предпросмотра. Работаете ли вы разработчиком, дизайнером или пользователем Windows, наша платформа предлагает инструменты, необходимые для профессиональной обработки файлов ICO.',
        seo_viewing_title: 'Расширенные Функции Просмотра',
        seo_viewing_text: 'Просматривайте файлы ICO с поддержкой нескольких размеров иконок, отображением прозрачности и подробной информацией об иконках. Наш просмотрщик поддерживает все варианты ICO, включая стандартный ICO, файлы курсора CUR и ICO v2 со сжатием PNG, обеспечивая точное представление ваших файлов иконок.',
        seo_conversion_title: 'Профессиональные Инструменты Конвертации',
        seo_conversion_text: 'Конвертируйте файлы ICO в PNG, JPEG, WebP и другие форматы, сохраняя качество иконок. Наш движок конвертации предлагает выбор размера, сохранение прозрачности и возможности пакетной обработки для одновременной обработки нескольких файлов.',
        seo_optimization_title: 'Оптимизация Качества',
        seo_optimization_text: 'Оптимизируйте файлы ICO для современного использования с помощью наших интеллектуальных инструментов, которые могут извлекать отдельные размеры иконок, конвертировать в современные форматы и уменьшать размеры файлов, сохраняя визуальное качество. Идеально для веб- faviconов, иконок приложений и системных ресурсов, где важны размер и качество.',
        editor: {
          toggle_sidebar: 'Переключить Боковую Панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть Боковую Панель',
          search_placeholder: 'Поиск файлов...',
          files_header: 'Файлы',
          add_files: '+ Добавить',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'عارض ICO - عارض ملفات أيقونة Windows مجاني عبر الإنترنت',
        meta_description: 'اعرض ملفات ICO (أيقونة Windows) عبر الإنترنت مجانًا. عارض أيقونات متعدد الأحجام مع دعم الشفافية وعرض دقات متعددة. حتى 20 ملفًا، 100 ميجابايت إجمالي. لا يلزم التسجيل.',
        meta_keywords: 'عارض ICO، عارض الأيقونات، أيقونة Windows، عارض favicon، عارض CUR، أيقونة متعددة الأحجام، عارض ملفات ICO، العرض المجمع',
        hero_title: 'عارض ICO مجاني',
        hero_subtitle: 'اعرض ملفات أيقونة Windows مع دعم أحجام متعددة والشفافية',
        upload_title: 'رفع ملفات ICO',
        upload_description: 'اسحب وأفلت ملفات أيقونة Windows الخاصة بك (ICO، CUR) أو انقر للتصفح. يدعم أحجام متعددة والشفافية حتى 100 ميجابايت إجمالي.',
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
          multiple_sizes: '✓ أحجام متعددة',
          windows_native: '🎨 أصلي Windows',
          fast_processing: '⚡ معالجة سريعة'
        },
        features: [
          { title: 'دعم أحجام متعددة', description: 'اعرض ملفات ICO التي تحتوي على أحجام أيقونات متعددة من 16x16 إلى 256x256 بكسل، كل ذلك في ملف واحد' },
          { title: 'دعم الشفافية', description: 'دعم كامل للخلفيات الشفافة وقنوات ألفا في ملفات ICO و CUR' },
          { title: 'معاينة مجمعة', description: 'معاينة عدة ملفات ICO في وقت واحد مع شبكة الصور المصغرة والتنقل السريع بين الأيقونات' }
        ],
        about_title: 'حول تنسيق ICO',
        about_intro: 'ICO هو تنسيق ملف لأيقونات الكمبيوتر في Microsoft Windows. تحتوي ملفات ICO على صورة واحدة أو أكثر صغيرة بأحجام وأعماق ألوان متعددة حتى يمكن قياسها بشكل مناسب. يجب أن تتضمن الملفات القابلة للتنفيذ التي تعرض الأيقونات للمستخدمين الأيقونة بتنسيق ICO.',
        advantages_title: 'المزايا الرئيسية',
        advantages: [
          'أحجام متعددة – ملف واحد يحتوي على أيقونات بدقات مختلفة',
          'أصلي Windows – دعم مدمج في نظام التشغيل Windows',
          'دعم الشفافية – قناة ألفا للخلفيات الشفافة',
          'حجم ملف صغير – تخزين فعال لأحجام أيقونات متعددة',
          'توافق واسع – مدعوم من جميع تطبيقات Windows',
          'دعم المؤشر – تنسيق CUR للمؤشرات المخصصة'
        ],
        use_cases_title: 'أفضل حالات الاستخدام',
        use_cases: [
          'تطبيقات Windows – تنسيق أيقونة أصلي لتطبيقات Windows',
          'أيقونات المفضلة – ملفات favicon للمواقع',
          'اختصارات سطح المكتب – أيقونات التطبيقات على سطح مكتب Windows',
          'أيقونات نوع الملف – أيقونات تمثل أنواع الملفات',
          'مؤشرات مخصصة – ملفات CUR لمؤشرات الماوس المخصصة',
          'أيقونات النظام – أيقونات وموارد نظام Windows'
        ],
        specs_title: 'المواصفات التقنية',
        specs_header_label: 'المواصفة',
        specs_header_value: 'التفاصيل',
        specs: [
          { label: 'امتداد الملف', value: '.ico, .cur' },
          { label: 'نوع MIME', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'نوع التنسيق', value: 'تنسيق حاوية لصور نقطية متعددة' },
          { label: 'الأحجام المدعومة', value: '16x16، 32x32، 48x48، 64x64، 128x128، 256x256 بكسل' },
          { label: 'عمق اللون', value: '1، 4، 8، 16، 24، 32 بت لكل بكسل' },
          { label: 'الشفافية', value: 'دعم قناة ألفا في وضع 32 بت' },
          { label: 'الحد الأقصى للأيقونات', value: 'أيقونات متعددة لكل ملف (عادة 1-10)' },
          { label: 'الضغط', value: 'غير مضغوط أو ضغط PNG (ICO v2)' }
        ],
        seo_title: 'ميزات عارض ومحول ICO',
        seo_intro: 'يوفر عارض ICO الاحترافي لدينا دعمًا شاملاً لملفات أيقونة Windows، بما في ذلك عرض أحجام متعددة ودعم الشفافية وإمكانيات المعاينة المجمعة. سواء كنت مطورًا أو مصممًا أو مستخدم Windows، تقدم منصتنا الأدوات التي تحتاجها لمعالجة ملفات ICO الاحترافية.',
        seo_viewing_title: 'ميزات العرض المتقدمة',
        seo_viewing_text: 'اعرض ملفات ICO مع دعم أحجام أيقونات متعددة وعرض الشفافية ومعلومات أيقونة مفصلة. يدعم عارضنا جميع متغيرات ICO، بما في ذلك ICO القياسي وملفات المؤشر CUR و ICO v2 مع ضغط PNG، مما يضمن تمثيلًا دقيقًا لملفات الأيقونات الخاصة بك.',
        seo_conversion_title: 'أدوات التحويل الاحترافية',
        seo_conversion_text: 'حول ملفات ICO إلى PNG و JPEG و WebP وتنسيقات أخرى مع الحفاظ على جودة الأيقونة. يوفر محرك التحويل لدينا اختيار الحجم والحفاظ على الشفافية وإمكانيات المعالجة المجمعة للتعامل مع ملفات متعددة في وقت واحد.',
        seo_optimization_title: 'تحسين الجودة',
        seo_optimization_text: 'قم بتحسين ملفات ICO للاستخدام الحديث باستخدام أدواتنا الذكية التي يمكنها استخراج أحجام أيقونات فردية والتحويل إلى تنسيقات حديثة وتقليل أحجام الملفات مع الحفاظ على الجودة البصرية. مثالي لأيقونات المفضلة على الويب وأيقونات التطبيقات وموارد النظام حيث يهم الحجم والجودة.',
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          files_header: 'الملفات',
          add_files: '+ إضافة',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'โปรแกรมดู ICO - โปรแกรมดูไฟล์ไอคอน Windows ฟรีออนไลน์',
        meta_description: 'ดูไฟล์ ICO (ไอคอน Windows) ออนไลน์ฟรี โปรแกรมดูไอคอนหลายขนาดพร้อมการรองรับความโปร่งใสและการแสดงหลายความละเอียด สูงสุด 20 ไฟล์ 100MB รวม ไม่ต้องลงทะเบียน',
        meta_keywords: 'โปรแกรมดู ICO, โปรแกรมดูไอคอน, ไอคอน Windows, โปรแกรมดู favicon, โปรแกรมดู CUR, ไอคอนหลายขนาด, โปรแกรมดูไฟล์ ICO, การดูแบบกลุ่ม',
        hero_title: 'โปรแกรมดู ICO ฟรี',
        hero_subtitle: 'ดูไฟล์ไอคอน Windows พร้อมการรองรับหลายขนาดและความโปร่งใส',
        upload_title: 'อัปโหลดไฟล์ ICO',
        upload_description: 'ลากและวางไฟล์ไอคอน Windows ของคุณ (ICO, CUR) หรือคลิกเพื่อเรียกดู รองรับหลายขนาดและความโปร่งใสสูงสุด 100MB รวม',
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
          multiple_sizes: '✓ หลายขนาด',
          windows_native: '🎨 ดั้งเดิม Windows',
          fast_processing: '⚡ ประมวลผลเร็ว'
        },
        features: [
          { title: 'การรองรับหลายขนาด', description: 'ดูไฟล์ ICO ที่มีขนาดไอคอนหลายขนาดตั้งแต่ 16x16 ถึง 256x256 พิกเซล ทั้งหมดในไฟล์เดียว' },
          { title: 'การรองรับความโปร่งใส', description: 'การรองรับเต็มรูปแบบสำหรับพื้นหลังโปร่งใสและช่องอัลฟาในไฟล์ ICO และ CUR' },
          { title: 'การแสดงตัวอย่างแบบกลุ่ม', description: 'แสดงตัวอย่างไฟล์ ICO หลายไฟล์พร้อมกันด้วยตารางภาพขนาดย่อและการนำทางที่รวดเร็วระหว่างไอคอน' }
        ],
        about_title: 'เกี่ยวกับรูปแบบ ICO',
        about_intro: 'ICO เป็นรูปแบบไฟล์สำหรับไอคอนคอมพิวเตอร์ใน Microsoft Windows ไฟล์ ICO มีภาพเล็กหนึ่งภาพหรือมากกว่าที่หลายขนาดและความลึกของสีเพื่อให้สามารถปรับขนาดได้อย่างเหมาะสม ไฟล์ที่เรียกใช้งานได้ซึ่งแสดงไอคอนให้ผู้ใช้ต้องรวมไอคอนในรูปแบบ ICO',
        advantages_title: 'ข้อดีหลัก',
        advantages: [
          'หลายขนาด – ไฟล์เดียวมีไอคอนในความละเอียดต่างกัน',
          'ดั้งเดิม Windows – การรองรับในตัวในระบบปฏิบัติการ Windows',
          'การรองรับความโปร่งใส – ช่องอัลฟาสำหรับพื้นหลังโปร่งใส',
          'ขนาดไฟล์เล็ก – การจัดเก็บที่มีประสิทธิภาพของขนาดไอคอนหลายขนาด',
          'ความเข้ากันได้กว้าง – รองรับโดยแอปพลิเคชัน Windows ทั้งหมด',
          'การรองรับเคอร์เซอร์ – รูปแบบ CUR สำหรับเคอร์เซอร์ที่กำหนดเอง'
        ],
        use_cases_title: 'กรณีการใช้งานที่ดีที่สุด',
        use_cases: [
          'แอปพลิเคชัน Windows – รูปแบบไอคอนดั้งเดิมสำหรับแอป Windows',
          'Favicon – ไฟล์ favicon ของเว็บไซต์',
          'ทางลัดเดสก์ท็อป – ไอคอนแอปพลิเคชันบนเดสก์ท็อป Windows',
          'ไอคอนประเภทไฟล์ – ไอคอนที่แสดงประเภทไฟล์',
          'เคอร์เซอร์ที่กำหนดเอง – ไฟล์ CUR สำหรับเคอร์เซอร์เมาส์ที่กำหนดเอง',
          'ไอคอนระบบ – ไอคอนและทรัพยากรระบบ Windows'
        ],
        specs_title: 'ข้อมูลจำเพาะทางเทคนิค',
        specs_header_label: 'ข้อมูลจำเพาะ',
        specs_header_value: 'รายละเอียด',
        specs: [
          { label: 'นามสกุลไฟล์', value: '.ico, .cur' },
          { label: 'ประเภท MIME', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'ประเภทรูปแบบ', value: 'รูปแบบคอนเทนเนอร์สำหรับภาพบิตแมปหลายภาพ' },
          { label: 'ขนาดที่รองรับ', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 พิกเซล' },
          { label: 'ความลึกของสี', value: '1, 4, 8, 16, 24, 32 บิตต่อพิกเซล' },
          { label: 'ความโปร่งใส', value: 'การรองรับช่องอัลฟาในโหมด 32 บิต' },
          { label: 'ไอคอนสูงสุด', value: 'ไอคอนหลายตัวต่อไฟล์ (โดยทั่วไป 1-10)' },
          { label: 'การบีบอัด', value: 'ไม่บีบอัดหรือการบีบอัด PNG (ICO v2)' }
        ],
        seo_title: 'คุณสมบัติโปรแกรมดูและตัวแปลง ICO',
        seo_intro: 'โปรแกรมดู ICO ระดับมืออาชีพของเรามีการรองรับที่ครอบคลุมสำหรับไฟล์ไอคอน Windows รวมถึงการแสดงหลายขนาดการรองรับความโปร่งใสและความสามารถในการแสดงตัวอย่างแบบกลุ่ม ไม่ว่าคุณจะเป็นนักพัฒนา นักออกแบบ หรือผู้ใช้ Windows แพลตฟอร์มของเรามีเครื่องมือที่คุณต้องการสำหรับการจัดการไฟล์ ICO ระดับมืออาชีพ',
        seo_viewing_title: 'คุณสมบัติการดูขั้นสูง',
        seo_viewing_text: 'ดูไฟล์ ICO ด้วยการรองรับขนาดไอคอนหลายขนาดการแสดงความโปร่งใสและข้อมูลไอคอนรายละเอียด โปรแกรมดูของเรารองรับตัวแปร ICO ทั้งหมด รวมถึง ICO มาตรฐาน ไฟล์เคอร์เซอร์ CUR และ ICO v2 พร้อมการบีบอัด PNG เพื่อให้แน่ใจว่าการแสดงผลที่ถูกต้องของไฟล์ไอคอนของคุณ',
        seo_conversion_title: 'เครื่องมือแปลงระดับมืออาชีพ',
        seo_conversion_text: 'แปลงไฟล์ ICO เป็น PNG, JPEG, WebP และรูปแบบอื่นๆ ในขณะที่รักษาคุณภาพไอคอน เครื่องมือแปลงของเรามีการเลือกขนาดการรักษาความโปร่งใสและความสามารถในการประมวลผลแบบกลุ่มสำหรับการจัดการไฟล์หลายไฟล์พร้อมกัน',
        seo_optimization_title: 'การปรับปรุงคุณภาพ',
        seo_optimization_text: 'ปรับปรุงไฟล์ ICO สำหรับการใช้งานสมัยใหม่ด้วยเครื่องมืออัจฉริยะของเราที่สามารถแยกขนาดไอคอนแต่ละตัวแปลงเป็นรูปแบบสมัยใหม่และลดขนาดไฟล์ในขณะที่รักษาคุณภาพภาพ เหมาะสำหรับ favicon เว็บ ไอคอนแอปพลิเคชันและทรัพยากรระบบที่ขนาดและคุณภาพมีความสำคัญ',
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          files_header: 'ไฟล์',
          add_files: '+ เพิ่ม',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'ICOビューアー - 無料オンラインWindowsアイコンファイルビューアー',
        meta_description: 'ICO (Windowsアイコン) ファイルをオンラインで無料で表示します。透明度サポートと複数解像度表示を備えたマルチサイズアイコンビューアー。最大20ファイル、合計100MB。登録不要。',
        meta_keywords: 'ICOビューアー、アイコンビューアー、Windowsアイコン、faviconビューアー、CURビューアー、マルチサイズアイコン、ICOファイルビューアー、バッチ表示',
        hero_title: '無料ICOビューアー',
        hero_subtitle: 'マルチサイズサポートと透明度でWindowsアイコンファイルを表示',
        upload_title: 'ICOファイルをアップロード',
        upload_description: 'Windowsアイコンファイル (ICO、CUR) をドラッグ＆ドロップするか、クリックして参照します。合計100MBまで複数のサイズと透明度をサポートします。',
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
          multiple_sizes: '✓ 複数サイズ',
          windows_native: '🎨 Windowsネイティブ',
          fast_processing: '⚡ 高速処理'
        },
        features: [
          { title: 'マルチサイズサポート', description: '16x16から256x256ピクセルまでの複数のアイコンサイズを含むICOファイルを表示、すべて1つのファイルに' },
          { title: '透明度サポート', description: 'ICOおよびCURファイルの透明な背景とアルファチャネルの完全なサポート' },
          { title: 'バッチプレビュー', description: 'サムネイルグリッドとアイコン間の高速ナビゲーションで複数のICOファイルを同時にプレビュー' }
        ],
        about_title: 'ICOフォーマットについて',
        about_intro: 'ICOは、Microsoft Windowsのコンピュータアイコンのファイルフォーマットです。ICOファイルには、適切にスケールできるように、複数のサイズと色深度で1つ以上の小さな画像が含まれています。ユーザーにアイコンを表示する実行可能ファイルは、ICO形式でアイコンを含める必要があります。',
        advantages_title: '主な利点',
        advantages: [
          '複数サイズ – 1つのファイルに異なる解像度のアイコンが含まれます',
          'Windowsネイティブ – Windowsオペレーティングシステムに組み込みサポート',
          '透明度サポート – 透明な背景のアルファチャネル',
          '小さなファイルサイズ – 複数のアイコンサイズの効率的なストレージ',
          '幅広い互換性 – すべてのWindowsアプリケーションでサポート',
          'カーソルサポート – カスタムカーソル用のCUR形式'
        ],
        use_cases_title: '最適な使用例',
        use_cases: [
          'Windowsアプリケーション – Windowsアプリ用のネイティブアイコンフォーマット',
          'Favicon – ウェブサイトのfaviconファイル',
          'デスクトップショートカット – Windowsデスクトップのアプリケーションアイコン',
          'ファイルタイプアイコン – ファイルタイプを表すアイコン',
          'カスタムカーソル – カスタムマウスカーソル用のCURファイル',
          'システムアイコン – Windowsシステムアイコンとリソース'
        ],
        specs_title: '技術仕様',
        specs_header_label: '仕様',
        specs_header_value: '詳細',
        specs: [
          { label: 'ファイル拡張子', value: '.ico, .cur' },
          { label: 'MIMEタイプ', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'フォーマットタイプ', value: '複数のビットマップ画像用のコンテナフォーマット' },
          { label: 'サポートサイズ', value: '16x16、32x32、48x48、64x64、128x128、256x256ピクセル' },
          { label: '色深度', value: 'ピクセルあたり1、4、8、16、24、32ビット' },
          { label: '透明度', value: '32ビットモードでのアルファチャネルサポート' },
          { label: '最大アイコン', value: 'ファイルあたり複数のアイコン (通常1-10)' },
          { label: '圧縮', value: '非圧縮またはPNG圧縮 (ICO v2)' }
        ],
        seo_title: 'ICOビューアーとコンバーター機能',
        seo_intro: '私たちのプロフェッショナルICOビューアーは、マルチサイズ表示、透明度サポート、バッチプレビュー機能を含むWindowsアイコンファイルの包括的なサポートを提供します。開発者、デザイナー、またはWindowsユーザーを問わず、当社のプラットフォームはプロフェッショナルなICOファイル処理に必要なツールを提供します。',
        seo_viewing_title: '高度な表示機能',
        seo_viewing_text: '複数のアイコンサイズサポート、透明度表示、詳細なアイコン情報でICOファイルを表示します。当社のビューアーは、標準ICO、CURカーソルファイル、PNG圧縮付きICO v2を含むすべてのICOバリアントをサポートし、アイコンファイルの正確な表現を保証します。',
        seo_conversion_title: 'プロフェッショナル変換ツール',
        seo_conversion_text: 'アイコンの品質を維持しながら、ICOファイルをPNG、JPEG、WebP、その他の形式に変換します。当社の変換エンジンは、複数のファイルを同時に処理するためのサイズ選択、透明度保持、バッチ処理機能を提供します。',
        seo_optimization_title: '品質最適化',
        seo_optimization_text: '個別のアイコンサイズを抽出し、現代的な形式に変換し、視覚品質を維持しながらファイルサイズを削減できるスマートツールを使用して、ICOファイルを現代的な使用のために最適化します。ファイルサイズと品質が重要なWeb favicon、アプリケーションアイコン、システムリソースに最適です。',
        editor: {
          toggle_sidebar: 'サイドバーの切り替え',
          close: '閉じる (Esc)',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          files_header: 'ファイル',
          add_files: '+ 追加',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'ICO查看器 - 免费在线Windows图标文件查看器',
        meta_description: '在线免费查看ICO (Windows图标) 文件。多尺寸图标查看器，支持透明度和多分辨率显示。最多20个文件，总计100MB。无需注册。',
        meta_keywords: 'ICO查看器，图标查看器，Windows图标，favicon查看器，CUR查看器，多尺寸图标，ICO文件查看器，批量查看',
        hero_title: '免费ICO查看器',
        hero_subtitle: '使用多尺寸支持和透明度查看Windows图标文件',
        upload_title: '上传ICO文件',
        upload_description: '拖放您的Windows图标文件 (ICO, CUR) 或点击浏览。支持多个尺寸和透明度，总计最多100MB。',
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
          multiple_sizes: '✓ 多个尺寸',
          windows_native: '🎨 Windows原生',
          fast_processing: '⚡ 快速处理'
        },
        features: [
          { title: '多尺寸支持', description: '查看包含从16x16到256x256像素的多个图标尺寸的ICO文件，全部在一个文件中' },
          { title: '透明度支持', description: '完全支持ICO和CUR文件中的透明背景和Alpha通道' },
          { title: '批量预览', description: '同时预览多个ICO文件，带有缩略图网格和图标之间的快速导航' }
        ],
        about_title: '关于ICO格式',
        about_intro: 'ICO是Microsoft Windows中计算机图标的文件格式。ICO文件包含一个或多个小图像，具有多个尺寸和颜色深度，以便它们可以适当地缩放。向用户显示图标的可执行文件必须包含ICO格式的图标。',
        advantages_title: '主要优势',
        advantages: [
          '多个尺寸 – 一个文件包含不同分辨率的图标',
          'Windows原生 – Windows操作系统中的内置支持',
          '透明度支持 – 透明背景的Alpha通道',
          '文件大小小 – 高效存储多个图标尺寸',
          '广泛兼容性 – 所有Windows应用程序都支持',
          '光标支持 – 自定义光标的CUR格式'
        ],
        use_cases_title: '最佳使用场景',
        use_cases: [
          'Windows应用程序 – Windows应用程序的原生图标格式',
          'Favicons – 网站的favicon文件',
          '桌面快捷方式 – Windows桌面上的应用程序图标',
          '文件类型图标 – 表示文件类型的图标',
          '自定义光标 – 自定义鼠标光标的CUR文件',
          '系统图标 – Windows系统图标和资源'
        ],
        specs_title: '技术规格',
        specs_header_label: '规格',
        specs_header_value: '详情',
        specs: [
          { label: '文件扩展名', value: '.ico, .cur' },
          { label: 'MIME类型', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: '格式类型', value: '多个位图图像的容器格式' },
          { label: '支持的尺寸', value: '16x16、32x32、48x48、64x64、128x128、256x256像素' },
          { label: '色深', value: '每像素1、4、8、16、24、32位' },
          { label: '透明度', value: '32位模式下的Alpha通道支持' },
          { label: '最大图标', value: '每个文件多个图标 (通常1-10)' },
          { label: '压缩', value: '未压缩或PNG压缩 (ICO v2)' }
        ],
        seo_title: 'ICO查看器和转换器功能',
        seo_intro: '我们的专业ICO查看器为Windows图标文件提供全面支持，包括多尺寸显示、透明度支持和批量预览功能。无论您是开发人员、设计师还是Windows用户，我们的平台都提供您进行专业ICO文件处理所需的工具。',
        seo_viewing_title: '高级查看功能',
        seo_viewing_text: '使用多个图标尺寸支持、透明度显示和详细的图标信息查看ICO文件。我们的查看器支持所有ICO变体，包括标准ICO、CUR光标文件和带PNG压缩的ICO v2，确保准确表示您的图标文件。',
        seo_conversion_title: '专业转换工具',
        seo_conversion_text: '在保持图标质量的同时，将ICO文件转换为PNG、JPEG、WebP和其他格式。我们的转换引擎提供尺寸选择、透明度保留和批处理功能，可同时处理多个文件。',
        seo_optimization_title: '质量优化',
        seo_optimization_text: '使用我们的智能工具优化ICO文件用于现代使用，这些工具可以提取单个图标尺寸、转换为现代格式并减小文件大小，同时保持视觉质量。非常适合文件大小和质量很重要的Web favicon、应用程序图标和系统资源。',
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭 (Esc)',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          files_header: '文件',
          add_files: '+ 添加',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'Penampil ICO - Penampil File Ikon Windows Gratis Online',
        meta_description: 'Lihat file ICO (Ikon Windows) online gratis. Penampil ikon multi-ukuran dengan dukungan transparansi dan tampilan resolusi ganda. Hingga 20 file, 100MB total. Tidak perlu registrasi.',
        meta_keywords: 'penampil ICO, penampil ikon, ikon Windows, penampil favicon, penampil CUR, ikon multi-ukuran, penampil file ICO, tampilan batch',
        hero_title: 'Penampil ICO Gratis',
        hero_subtitle: 'Lihat file ikon Windows dengan dukungan multi-ukuran dan transparansi',
        upload_title: 'Unggah File ICO',
        upload_description: 'Seret dan lepas file ikon Windows Anda (ICO, CUR) atau klik untuk menjelajah. Mendukung beberapa ukuran dan transparansi hingga 100MB total.',
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
          multiple_sizes: '✓ Beberapa Ukuran',
          windows_native: '🎨 Native Windows',
          fast_processing: '⚡ Pemrosesan Cepat'
        },
        features: [
          { title: 'Dukungan Multi-Ukuran', description: 'Lihat file ICO yang berisi beberapa ukuran ikon dari 16x16 hingga 256x256 piksel, semuanya dalam satu file' },
          { title: 'Dukungan Transparansi', description: 'Dukungan penuh untuk latar belakang transparan dan saluran alpha dalam file ICO dan CUR' },
          { title: 'Pratinjau Batch', description: 'Pratinjau beberapa file ICO secara bersamaan dengan grid thumbnail dan navigasi cepat antar ikon' }
        ],
        about_title: 'Tentang Format ICO',
        about_intro: 'ICO adalah format file untuk ikon komputer di Microsoft Windows. File ICO berisi satu atau lebih gambar kecil dalam beberapa ukuran dan kedalaman warna sehingga dapat diskalakan dengan tepat. File yang dapat dieksekusi yang menampilkan ikon kepada pengguna harus menyertakan ikon dalam format ICO.',
        advantages_title: 'Keuntungan Utama',
        advantages: [
          'Beberapa ukuran – Satu file berisi ikon dalam resolusi berbeda',
          'Native Windows – Dukungan bawaan dalam sistem operasi Windows',
          'Dukungan transparansi – Saluran alpha untuk latar belakang transparan',
          'Ukuran file kecil – Penyimpanan efisien dari beberapa ukuran ikon',
          'Kompatibilitas luas – Didukung oleh semua aplikasi Windows',
          'Dukungan kursor – Format CUR untuk kursor kustom'
        ],
        use_cases_title: 'Kasus Penggunaan Terbaik',
        use_cases: [
          'Aplikasi Windows – Format ikon native untuk aplikasi Windows',
          'Favicon – File favicon situs web',
          'Pintasan desktop – Ikon aplikasi di desktop Windows',
          'Ikon jenis file – Ikon yang mewakili jenis file',
          'Kursor kustom – File CUR untuk kursor mouse kustom',
          'Ikon sistem – Ikon dan sumber daya sistem Windows'
        ],
        specs_title: 'Spesifikasi Teknis',
        specs_header_label: 'Spesifikasi',
        specs_header_value: 'Detail',
        specs: [
          { label: 'Ekstensi File', value: '.ico, .cur' },
          { label: 'Tipe MIME', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Tipe Format', value: 'Format kontainer untuk beberapa gambar bitmap' },
          { label: 'Ukuran yang Didukung', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 piksel' },
          { label: 'Kedalaman Warna', value: '1, 4, 8, 16, 24, 32 bit per piksel' },
          { label: 'Transparansi', value: 'Dukungan saluran alpha dalam mode 32 bit' },
          { label: 'Ikon Maksimum', value: 'Beberapa ikon per file (biasanya 1-10)' },
          { label: 'Kompresi', value: 'Tidak terkompresi atau kompresi PNG (ICO v2)' }
        ],
        seo_title: 'Fitur Penampil dan Konverter ICO',
        seo_intro: 'Penampil ICO profesional kami menyediakan dukungan komprehensif untuk file ikon Windows, termasuk tampilan multi-ukuran, dukungan transparansi dan kemampuan pratinjau batch. Baik Anda seorang pengembang, desainer atau pengguna Windows, platform kami menawarkan alat yang Anda butuhkan untuk penanganan file ICO profesional.',
        seo_viewing_title: 'Fitur Tampilan Lanjutan',
        seo_viewing_text: 'Lihat file ICO dengan dukungan beberapa ukuran ikon, tampilan transparansi dan informasi ikon detail. Penampil kami mendukung semua varian ICO, termasuk ICO standar, file kursor CUR dan ICO v2 dengan kompresi PNG, memastikan representasi akurat dari file ikon Anda.',
        seo_conversion_title: 'Alat Konversi Profesional',
        seo_conversion_text: 'Konversi file ICO ke PNG, JPEG, WebP dan format modern lainnya sambil mempertahankan kualitas ikon. Mesin konversi kami menawarkan pemilihan ukuran, pelestarian transparansi dan kemampuan pemrosesan batch untuk menangani beberapa file secara bersamaan.',
        seo_optimization_title: 'Optimisasi Kualitas',
        seo_optimization_text: 'Optimalkan file ICO untuk penggunaan modern dengan alat pintar kami yang dapat mengekstrak ukuran ikon individual, mengonversi ke format modern dan mengurangi ukuran file sambil mempertahankan kualitas visual. Sempurna untuk favicon web, ikon aplikasi dan sumber daya sistem di mana ukuran dan kualitas penting.',
        editor: {
          toggle_sidebar: 'Alihkan Bilah Samping',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup Bilah Samping',
          search_placeholder: 'Cari file...',
          files_header: 'File',
          add_files: '+ Tambah',
          format_badge: 'ICO',
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
      ico: {
        meta_title: 'ICO-visare - Gratis Online Windows Ikon-fil Visare',
        meta_description: 'Visa ICO (Windows Ikon) filer online gratis. Multi-storlek ikon-visare med transparens-stöd och flera upplösningsvisningar. Upp till 20 filer, 100MB totalt. Ingen registrering krävs.',
        meta_keywords: 'ICO-visare, ikon-visare, Windows ikon, favicon-visare, CUR-visare, multi-storlek ikon, ICO fil-visare, batchvisning',
        hero_title: 'Gratis ICO-visare',
        hero_subtitle: 'Visa Windows ikon-filer med multi-storlek stöd och transparens',
        upload_title: 'Ladda Upp ICO-filer',
        upload_description: 'Dra och släpp dina Windows ikon-filer (ICO, CUR) eller klicka för att bläddra. Stöder flera storlekar och transparens upp till 100MB totalt.',
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
          multiple_sizes: '✓ Flera Storlekar',
          windows_native: '🎨 Windows Native',
          fast_processing: '⚡ Snabb Bearbetning'
        },
        features: [
          { title: 'Multi-Storlek Stöd', description: 'Visa ICO-filer som innehåller flera ikon-storlekar från 16x16 till 256x256 pixlar, allt i en fil' },
          { title: 'Transparens Stöd', description: 'Fullt stöd för transparenta bakgrunder och alfakanaler i ICO- och CUR-filer' },
          { title: 'Batch-Förhandsvisning', description: 'Förhandsgranska flera ICO-filer samtidigt med miniatyrrutnät och snabb navigering mellan ikoner' }
        ],
        about_title: 'Om ICO-formatet',
        about_intro: 'ICO är ett filformat för datorikoner i Microsoft Windows. ICO-filer innehåller en eller flera små bilder i flera storlekar och färgdjup så att de kan skalas lämpligt. Körbara filer som visar ikoner för användare måste inkludera ikonen i ICO-format.',
        advantages_title: 'Huvudfördelar',
        advantages: [
          'Flera storlekar – En fil innehåller ikoner i olika upplösningar',
          'Windows Native – Inbyggt stöd i Windows-operativsystemet',
          'Transparens-stöd – Alfakanal för transparenta bakgrunder',
          'Liten filstorlek – Effektiv lagring av flera ikon-storlekar',
          'Bred kompatibilitet – Stöds av alla Windows-applikationer',
          'Cursor-stöd – CUR-format för anpassade markörer'
        ],
        use_cases_title: 'Bästa Användningsfall',
        use_cases: [
          'Windows-applikationer – Native ikon-format för Windows-appar',
          'Favicons – Webbplats favicon-filer',
          'Skrivbordsgenvägar – Applikationsikoner på Windows-skrivbordet',
          'Filtyp-ikoner – Ikoner som representerar filtyper',
          'Anpassade markörer – CUR-filer för anpassade musmarkörer',
          'Systemikoner – Windows-systemikoner och resurser'
        ],
        specs_title: 'Tekniska Specifikationer',
        specs_header_label: 'Specifikation',
        specs_header_value: 'Detaljer',
        specs: [
          { label: 'Filändelse', value: '.ico, .cur' },
          { label: 'MIME-typ', value: 'image/x-icon, image/vnd.microsoft.icon' },
          { label: 'Formattyp', value: 'Containerformat för flera bitmap-bilder' },
          { label: 'Stödda Storlekar', value: '16x16, 32x32, 48x48, 64x64, 128x128, 256x256 pixlar' },
          { label: 'Färgdjup', value: '1, 4, 8, 16, 24, 32 bitar per pixel' },
          { label: 'Transparens', value: 'Alfakanal-stöd i 32-bit läge' },
          { label: 'Maximala Ikoner', value: 'Flera ikoner per fil (typiskt 1-10)' },
          { label: 'Komprimering', value: 'Okomprimerad eller PNG-komprimering (ICO v2)' }
        ],
        seo_title: 'ICO-visare och Konverteringsfunktioner',
        seo_intro: 'Vår professionella ICO-visare ger omfattande stöd för Windows Ikon-filer, inklusive multi-storlek visning, transparens-stöd och batch-förhandsvisningsfunktioner. Oavsett om du är utvecklare, designer eller Windows-användare, erbjuder vår plattform de verktyg du behöver för professionell ICO-filhantering.',
        seo_viewing_title: 'Avancerade Visningsfunktioner',
        seo_viewing_text: 'Visa ICO-filer med stöd för flera ikon-storlekar, transparens-visning och detaljerad ikon-information. Vår visare stöder alla ICO-varianter, inklusive standard ICO, CUR-markörfiler och ICO v2 med PNG-komprimering, vilket säkerställer en korrekt representation av dina ikon-filer.',
        seo_conversion_title: 'Professionella Konverteringsverktyg',
        seo_conversion_text: 'Konvertera ICO-filer till PNG, JPEG, WebP och andra moderna format samtidigt som ikon-kvaliteten bibehålls. Vår konverteringsmotor erbjuder storleksval, transparens-bevarande och batchbearbetningsfunktioner för att hantera flera filer samtidigt.',
        seo_optimization_title: 'Kvalitetsoptimering',
        seo_optimization_text: 'Optimera ICO-filer för modern användning med våra smarta verktyg som kan extrahera individuella ikon-storlekar, konvertera till moderna format och minska filstorlekar samtidigt som visuell kvalitet bevaras. Perfekt för webb-favicons, applikationsikoner och systemresurser där storlek och kvalitet spelar roll.',
        editor: {
          toggle_sidebar: 'Växla Sidofält',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng Sidofält',
          search_placeholder: 'Sök filer...',
          files_header: 'Filer',
          add_files: '+ Lägg Till',
          format_badge: 'ICO',
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

