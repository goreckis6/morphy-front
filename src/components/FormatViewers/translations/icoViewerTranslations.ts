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
  }
};

// Register translations with i18n
Object.keys(resources).forEach(lang => {
  i18n.addResourceBundle(lang, 'translation', resources[lang], true, true);
});

export { resources };

