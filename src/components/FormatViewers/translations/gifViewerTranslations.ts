import i18n from '../../../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type GIFViewerTranslations = {
  viewers: {
    gif: {
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
        animation_support: string;
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

const resources: Record<string, GIFViewerTranslations> = {
  en: {
    viewers: {
      gif: {
        meta_title: 'Open & Play Animated GIFs Online for Free',
        meta_description: 'View and play animated GIFs instantly in your browser. No software or registration required. A fast, secure, and 100% free online GIF viewer. Try it now!',
        meta_keywords: 'GIF viewer, animated GIF, GIF to MP4, GIF to WebP, animation viewer, frame extraction, meme viewer, batch processing',
        hero_title: 'Free GIF Viewer',
        hero_subtitle: 'View and convert animated GIF images with playback controls',
        upload_title: 'Upload GIF Files',
        upload_description: 'Drag and drop your animated GIF images or click to browse. Supports animations, transparency, and frame extraction up to 100MB total.',
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
          animation_support: '✓ Animation Support',
          transparency_support: '🎨 Transparency Support',
          fast_processing: '⚡ Fast Processing'
        },
        features: [
          { title: 'Animation Support', description: 'Full support for animated GIFs with frame-by-frame viewing and playback controls' },
          { title: 'Color Optimization', description: 'Advanced palette optimization for better quality and smaller file sizes' },
          { title: 'Format Conversion', description: 'Convert GIF to WebP, MP4, or extract individual frames as PNG/JPEG' }
        ],
        about_title: 'About GIF Format',
        about_intro: 'GIF (Graphics Interchange Format) is a bitmap image format developed by CompuServe in 1987. GIF images are compressed using the Lempel-Ziv-Welch (LZW) lossless data compression technique to reduce the file size without degrading the visual quality. The format supports up to 8 bits per pixel for each image, allowing a single image to reference its own palette of up to 256 different colors chosen from the 24-bit RGB color space.',
        advantages_title: 'Key Advantages',
        advantages: [
          'Animation support – Multiple frames in one file',
          'Transparency – Single color transparency',
          'Universal support – Works everywhere',
          'Lossless compression – No quality degradation',
          'Small file sizes – Efficient for simple graphics',
          'Loop control – Infinite or finite animation loops'
        ],
        use_cases_title: 'Best Use Cases',
        use_cases: [
          'Animated graphics – Simple animations and effects',
          'Social media – Memes and reaction images',
          'Web graphics – Icons and simple illustrations',
          'Email signatures – Animated logos and banners',
          'Presentations – Animated diagrams and charts',
          'User interfaces – Loading animations and indicators'
        ],
        specs_title: 'GIF Technical Specifications',
        specs_header_label: 'Specification',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.gif' },
          { label: 'MIME Type', value: 'image/gif' },
          { label: 'Compression', value: 'LZW lossless compression' },
          { label: 'Color Support', value: 'Up to 256 colors (8-bit palette)' },
          { label: 'Maximum Resolution', value: '6,500 × 6,500 pixels' },
          { label: 'Transparency', value: 'Single color transparency' },
          { label: 'Animation', value: 'Multiple frames with timing control' },
          { label: 'Interlacing', value: 'Progressive loading support' }
        ],
        seo_title: 'GIF Viewer and Converter Features',
        seo_intro: 'Our professional GIF viewer provides comprehensive support for animated GIF images including frame-by-frame viewing, playback controls, and format conversion. Whether you\'re a designer, developer, or content creator, our platform offers the tools you need for professional GIF image handling.',
        seo_viewing_title: 'Advanced Viewing Features',
        seo_viewing_text: 'View animated GIF images with full playback controls, frame navigation, and detailed analysis. Our viewer supports all GIF features including animation, transparency, and palette optimization, ensuring accurate representation of your animated graphics.',
        seo_conversion_title: 'Professional Conversion Tools',
        seo_conversion_text: 'Convert GIF files to WebP, MP4, PNG, JPEG, and other formats while maintaining animation quality. Our conversion engine offers frame extraction, quality settings, and batch processing capabilities for handling multiple files simultaneously.',
        seo_optimization_title: 'Quality Optimization',
        seo_optimization_text: 'Optimize GIF files for web use with our smart tools that reduce file sizes while preserving animation quality. Perfect for website optimization, social media sharing, and email attachments where file size and quality matter.',
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          files_header: 'Files',
          add_files: '+ Add',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Otwórz i Odtwarzaj Animowane GIF-y Online za Darmo',
        meta_description: 'Oglądaj i odtwarzaj animowane GIF-y natychmiast w przeglądarce. Bez oprogramowania i rejestracji. Szybka, bezpieczna i w 100% darmowa przeglądarka GIF online. Wypróbuj teraz!',
        meta_keywords: 'podgląd GIF, animowany GIF, GIF do MP4, GIF do WebP, podgląd animacji, ekstrakcja klatek, podgląd memów, przetwarzanie wsadowe',
        hero_title: 'Darmowy Podgląd GIF',
        hero_subtitle: 'Oglądaj i konwertuj animowane obrazy GIF z kontrolą odtwarzania',
        upload_title: 'Prześlij pliki GIF',
        upload_description: 'Przeciągnij i upuść swoje animowane obrazy GIF lub kliknij, aby przeglądać. Obsługuje animacje, przezroczystość i ekstrakcję klatek do 100MB łącznie.',
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
          animation_support: '✓ Obsługa Animacji',
          transparency_support: '🎨 Obsługa Przezroczystości',
          fast_processing: '⚡ Szybkie Przetwarzanie'
        },
        features: [
          { title: 'Obsługa Animacji', description: 'Pełna obsługa animowanych GIF-ów z przeglądaniem klatka po klatce i kontrolą odtwarzania' },
          { title: 'Optymalizacja Kolorów', description: 'Zaawansowana optymalizacja palety dla lepszej jakości i mniejszych rozmiarów plików' },
          { title: 'Konwersja Formatów', description: 'Konwertuj GIF do WebP, MP4 lub wyodrębnij poszczególne klatki jako PNG/JPEG' }
        ],
        about_title: 'O Formacie GIF',
        about_intro: 'GIF (Graphics Interchange Format) to format plików graficznych rastrowych opracowany przez CompuServe w 1987 roku. Obrazy GIF są kompresowane przy użyciu techniki bezstratnej kompresji danych Lempel-Ziv-Welch (LZW), aby zmniejszyć rozmiar pliku bez pogorszenia jakości wizualnej. Format obsługuje do 8 bitów na piksel dla każdego obrazu, pozwalając pojedynczemu obrazowi odwoływać się do własnej palety do 256 różnych kolorów wybranych z 24-bitowej przestrzeni kolorów RGB.',
        advantages_title: 'Kluczowe Zalety',
        advantages: [
          'Obsługa animacji – Wiele klatek w jednym pliku',
          'Przezroczystość – Przezroczystość jednego koloru',
          'Uniwersalne wsparcie – Działa wszędzie',
          'Kompresja bezstratna – Brak degradacji jakości',
          'Małe rozmiary plików – Wydajne dla prostych grafik',
          'Kontrola pętli – Nieskończone lub skończone pętle animacji'
        ],
        use_cases_title: 'Najlepsze Zastosowania',
        use_cases: [
          'Animowana grafika – Proste animacje i efekty',
          'Media społecznościowe – Memy i obrazy reakcji',
          'Grafika internetowa – Ikony i proste ilustracje',
          'Podpisy e-mail – Animowane logo i banery',
          'Prezentacje – Animowane diagramy i wykresy',
          'Interfejsy użytkownika – Animacje ładowania i wskaźniki'
        ],
        specs_title: 'Specyfikacje Techniczne GIF',
        specs_header_label: 'Specyfikacja',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie Pliku', value: '.gif' },
          { label: 'Typ MIME', value: 'image/gif' },
          { label: 'Kompresja', value: 'Kompresja bezstratna LZW' },
          { label: 'Obsługa Kolorów', value: 'Do 256 kolorów (paleta 8-bitowa)' },
          { label: 'Maksymalna Rozdzielczość', value: '6,500 × 6,500 pikseli' },
          { label: 'Przezroczystość', value: 'Przezroczystość jednego koloru' },
          { label: 'Animacja', value: 'Wiele klatek z kontrolą czasu' },
          { label: 'Przeplatanie', value: 'Obsługa progresywnego ładowania' }
        ],
        seo_title: 'Funkcje Podglądu i Konwertera GIF',
        seo_intro: 'Nasz profesjonalny podgląd GIF zapewnia kompleksowe wsparcie dla animowanych obrazów GIF, w tym przeglądanie klatka po klatce, kontrolę odtwarzania i konwersję formatów. Niezależnie od tego, czy jesteś projektantem, programistą czy twórcą treści, nasza platforma oferuje narzędzia potrzebne do profesjonalnej obsługi obrazów GIF.',
        seo_viewing_title: 'Zaawansowane Funkcje Przeglądania',
        seo_viewing_text: 'Oglądaj animowane obrazy GIF z pełną kontrolą odtwarzania, nawigacją klatek i szczegółową analizą. Nasz podgląd obsługuje wszystkie funkcje GIF, w tym animację, przezroczystość i optymalizację palety, zapewniając dokładną reprezentację Twojej animowanej grafiki.',
        seo_conversion_title: 'Profesjonalne Narzędzia Konwersji',
        seo_conversion_text: 'Konwertuj pliki GIF do WebP, MP4, PNG, JPEG i innych formatów, zachowując jakość animacji. Nasz silnik konwersji oferuje ekstrakcję klatek, ustawienia jakości i możliwości przetwarzania wsadowego do jednoczesnego obsługiwania wielu plików.',
        seo_optimization_title: 'Optymalizacja Jakości',
        seo_optimization_text: 'Optymalizuj pliki GIF do użycia w sieci za pomocą naszych inteligentnych narzędzi, które zmniejszają rozmiary plików, zachowując jakość animacji. Idealne do optymalizacji stron internetowych, udostępniania w mediach społecznościowych i załączników e-mail, gdzie liczy się rozmiar pliku i jakość.',
        editor: {
          toggle_sidebar: 'Przełącz Pasek Boczny',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij Pasek Boczny',
          search_placeholder: 'Szukaj plików...',
          files_header: 'Pliki',
          add_files: '+ Dodaj',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Animierte GIFs Online Kostenlos Öffnen & Abspielen',
        meta_description: 'Animierte GIFs sofort in Ihrem Browser anzeigen und abspielen. Keine Software oder Registrierung erforderlich. Ein schneller, sicherer und 100% kostenloser Online-GIF-Viewer. Jetzt ausprobieren!',
        meta_keywords: 'GIF Viewer, animiertes GIF, GIF zu MP4, GIF zu WebP, Animations-Viewer, Frame-Extraktion, Meme-Viewer, Stapelverarbeitung',
        hero_title: 'Kostenloser GIF Viewer',
        hero_subtitle: 'Animierte GIF-Bilder mit Wiedergabesteuerung anzeigen und konvertieren',
        upload_title: 'GIF-Dateien hochladen',
        upload_description: 'Ziehen Sie Ihre animierten GIF-Bilder hierher oder klicken Sie zum Auswählen. Unterstützt Animationen, Transparenz und Frame-Extraktion bis zu 100MB insgesamt.',
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
          animation_support: '✓ Animationsunterstützung',
          transparency_support: '🎨 Transparenzunterstützung',
          fast_processing: '⚡ Schnelle Verarbeitung'
        },
        features: [
          { title: 'Animationsunterstützung', description: 'Vollständige Unterstützung für animierte GIFs mit Frame-für-Frame-Anzeige und Wiedergabesteuerung' },
          { title: 'Farboptimierung', description: 'Erweiterte Palettenoptimierung für bessere Qualität und kleinere Dateigrößen' },
          { title: 'Formatkonvertierung', description: 'Konvertieren Sie GIF zu WebP, MP4 oder extrahieren Sie einzelne Frames als PNG/JPEG' }
        ],
        about_title: 'Über das GIF-Format',
        about_intro: 'GIF (Graphics Interchange Format) ist ein Rasterbildformat, das 1987 von CompuServe entwickelt wurde. GIF-Bilder werden mit der Lempel-Ziv-Welch (LZW) verlustfreien Datenkomprimierungstechnik komprimiert, um die Dateigröße zu reduzieren, ohne die visuelle Qualität zu beeinträchtigen. Das Format unterstützt bis zu 8 Bit pro Pixel für jedes Bild, sodass ein einzelnes Bild auf seine eigene Palette von bis zu 256 verschiedenen Farben aus dem 24-Bit-RGB-Farbraum verweisen kann.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          'Animationsunterstützung – Mehrere Frames in einer Datei',
          'Transparenz – Einfarbige Transparenz',
          'Universelle Unterstützung – Funktioniert überall',
          'Verlustfreie Kompression – Keine Qualitätsverschlechterung',
          'Kleine Dateigrößen – Effizient für einfache Grafiken',
          'Schleifensteuerung – Unendliche oder endliche Animationsschleifen'
        ],
        use_cases_title: 'Beste Anwendungsfälle',
        use_cases: [
          'Animierte Grafiken – Einfache Animationen und Effekte',
          'Soziale Medien – Memes und Reaktionsbilder',
          'Web-Grafiken – Icons und einfache Illustrationen',
          'E-Mail-Signaturen – Animierte Logos und Banner',
          'Präsentationen – Animierte Diagramme und Charts',
          'Benutzeroberflächen – Ladeanimationen und Indikatoren'
        ],
        specs_title: 'GIF Technische Spezifikationen',
        specs_header_label: 'Spezifikation',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateierweiterung', value: '.gif' },
          { label: 'MIME-Typ', value: 'image/gif' },
          { label: 'Kompression', value: 'LZW verlustfreie Kompression' },
          { label: 'Farbunterstützung', value: 'Bis zu 256 Farben (8-Bit-Palette)' },
          { label: 'Maximale Auflösung', value: '6.500 × 6.500 Pixel' },
          { label: 'Transparenz', value: 'Einfarbige Transparenz' },
          { label: 'Animation', value: 'Mehrere Frames mit Zeitsteuerung' },
          { label: 'Interlacing', value: 'Unterstützung für progressives Laden' }
        ],
        seo_title: 'GIF Viewer und Konverter Funktionen',
        seo_intro: 'Unser professioneller GIF-Viewer bietet umfassende Unterstützung für animierte GIF-Bilder, einschließlich Frame-für-Frame-Anzeige, Wiedergabesteuerung und Formatkonvertierung. Egal, ob Sie Designer, Entwickler oder Content-Ersteller sind, unsere Plattform bietet die Tools, die Sie für die professionelle GIF-Bildverarbeitung benötigen.',
        seo_viewing_title: 'Erweiterte Anzeigefunktionen',
        seo_viewing_text: 'Zeigen Sie animierte GIF-Bilder mit vollständiger Wiedergabesteuerung, Frame-Navigation und detaillierter Analyse an. Unser Viewer unterstützt alle GIF-Funktionen, einschließlich Animation, Transparenz und Palettenoptimierung, und gewährleistet eine genaue Darstellung Ihrer animierten Grafiken.',
        seo_conversion_title: 'Professionelle Konvertierungstools',
        seo_conversion_text: 'Konvertieren Sie GIF-Dateien in WebP, MP4, PNG, JPEG und andere Formate, während die Animationsqualität erhalten bleibt. Unsere Konvertierungs-Engine bietet Frame-Extraktion, Qualitätseinstellungen und Stapelverarbeitungsfunktionen für die gleichzeitige Verarbeitung mehrerer Dateien.',
        seo_optimization_title: 'Qualitätsoptimierung',
        seo_optimization_text: 'Optimieren Sie GIF-Dateien für die Webnutzung mit unseren intelligenten Tools, die die Dateigrößen reduzieren und gleichzeitig die Animationsqualität erhalten. Perfekt für Website-Optimierung, Social-Media-Sharing und E-Mail-Anhänge, bei denen Dateigröße und Qualität wichtig sind.',
        editor: {
          toggle_sidebar: 'Seitenleiste Umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Seitenleiste Schließen',
          search_placeholder: 'Dateien suchen...',
          files_header: 'Dateien',
          add_files: '+ Hinzufügen',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Abre y Reproduce GIFs Animados Online Gratis',
        meta_description: 'Visualiza y reproduce GIFs animados al instante en tu navegador. Sin software ni registro requerido. Un visor GIF online rápido, seguro y 100% gratis. ¡Pruébalo ahora!',
        meta_keywords: 'visor GIF, GIF animado, GIF a MP4, GIF a WebP, visor de animaciones, extracción de frames, visor de memes, procesamiento por lotes',
        hero_title: 'Visor GIF Gratis',
        hero_subtitle: 'Ver y convertir imágenes GIF animadas con controles de reproducción',
        upload_title: 'Subir Archivos GIF',
        upload_description: 'Arrastra y suelta tus imágenes GIF animadas o haz clic para explorar. Soporta animaciones, transparencia y extracción de frames hasta 100MB en total.',
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
          animation_support: '✓ Soporte de Animación',
          transparency_support: '🎨 Soporte de Transparencia',
          fast_processing: '⚡ Procesamiento Rápido'
        },
        features: [
          { title: 'Soporte de Animación', description: 'Soporte completo para GIFs animados con visualización frame por frame y controles de reproducción' },
          { title: 'Optimización de Color', description: 'Optimización avanzada de paleta para mejor calidad y tamaños de archivo más pequeños' },
          { title: 'Conversión de Formato', description: 'Convierte GIF a WebP, MP4 o extrae frames individuales como PNG/JPEG' }
        ],
        about_title: 'Acerca del Formato GIF',
        about_intro: 'GIF (Graphics Interchange Format) es un formato de imagen de mapa de bits desarrollado por CompuServe en 1987. Las imágenes GIF se comprimen usando la técnica de compresión de datos sin pérdidas Lempel-Ziv-Welch (LZW) para reducir el tamaño del archivo sin degradar la calidad visual. El formato admite hasta 8 bits por píxel para cada imagen, permitiendo que una sola imagen haga referencia a su propia paleta de hasta 256 colores diferentes elegidos del espacio de color RGB de 24 bits.',
        advantages_title: 'Ventajas Clave',
        advantages: [
          'Soporte de animación – Múltiples frames en un archivo',
          'Transparencia – Transparencia de un solo color',
          'Soporte universal – Funciona en todas partes',
          'Compresión sin pérdidas – Sin degradación de calidad',
          'Tamaños de archivo pequeños – Eficiente para gráficos simples',
          'Control de bucle – Bucles de animación infinitos o finitos'
        ],
        use_cases_title: 'Mejores Casos de Uso',
        use_cases: [
          'Gráficos animados – Animaciones y efectos simples',
          'Redes sociales – Memes e imágenes de reacción',
          'Gráficos web – Iconos e ilustraciones simples',
          'Firmas de correo – Logos y banners animados',
          'Presentaciones – Diagramas y gráficos animados',
          'Interfaces de usuario – Animaciones de carga e indicadores'
        ],
        specs_title: 'Especificaciones Técnicas GIF',
        specs_header_label: 'Especificación',
        specs_header_value: 'Detalles',
        specs: [
          { label: 'Extensión de Archivo', value: '.gif' },
          { label: 'Tipo MIME', value: 'image/gif' },
          { label: 'Compresión', value: 'Compresión sin pérdidas LZW' },
          { label: 'Soporte de Color', value: 'Hasta 256 colores (paleta de 8 bits)' },
          { label: 'Resolución Máxima', value: '6,500 × 6,500 píxeles' },
          { label: 'Transparencia', value: 'Transparencia de un solo color' },
          { label: 'Animación', value: 'Múltiples frames con control de tiempo' },
          { label: 'Entrelazado', value: 'Soporte de carga progresiva' }
        ],
        seo_title: 'Funciones del Visor y Convertidor GIF',
        seo_intro: 'Nuestro visor GIF profesional proporciona soporte integral para imágenes GIF animadas, incluyendo visualización frame por frame, controles de reproducción y conversión de formato. Ya seas diseñador, desarrollador o creador de contenido, nuestra plataforma ofrece las herramientas que necesitas para el manejo profesional de imágenes GIF.',
        seo_viewing_title: 'Funciones Avanzadas de Visualización',
        seo_viewing_text: 'Visualiza imágenes GIF animadas con controles de reproducción completos, navegación de frames y análisis detallado. Nuestro visor admite todas las funciones GIF, incluyendo animación, transparencia y optimización de paleta, asegurando una representación precisa de tus gráficos animados.',
        seo_conversion_title: 'Herramientas de Conversión Profesionales',
        seo_conversion_text: 'Convierte archivos GIF a WebP, MP4, PNG, JPEG y otros formatos manteniendo la calidad de animación. Nuestro motor de conversión ofrece extracción de frames, ajustes de calidad y capacidades de procesamiento por lotes para manejar múltiples archivos simultáneamente.',
        seo_optimization_title: 'Optimización de Calidad',
        seo_optimization_text: 'Optimiza archivos GIF para uso web con nuestras herramientas inteligentes que reducen los tamaños de archivo mientras preservan la calidad de animación. Perfecto para optimización de sitios web, compartir en redes sociales y adjuntos de correo donde el tamaño de archivo y la calidad importan.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar Barra Lateral',
          search_placeholder: 'Buscar archivos...',
          files_header: 'Archivos',
          add_files: '+ Agregar',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Ouvrez et Lisez des GIFs Animés en Ligne Gratuitement',
        meta_description: 'Visualisez et lisez des GIFs animés instantanément dans votre navigateur. Aucun logiciel ou inscription requis. Un lecteur GIF en ligne rapide, sécurisé et 100% gratuit. Essayez-le maintenant!',
        meta_keywords: 'visionneuse GIF, GIF animé, GIF vers MP4, GIF vers WebP, visionneuse d\'animations, extraction de frames, visionneuse de mèmes, traitement par lots',
        hero_title: 'Visionneuse GIF Gratuite',
        hero_subtitle: 'Voir et convertir des images GIF animées avec contrôles de lecture',
        upload_title: 'Télécharger des Fichiers GIF',
        upload_description: 'Glissez-déposez vos images GIF animées ou cliquez pour parcourir. Prend en charge les animations, la transparence et l\'extraction de frames jusqu\'à 100 Mo au total.',
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
          animation_support: '✓ Support d\'Animation',
          transparency_support: '🎨 Support de Transparence',
          fast_processing: '⚡ Traitement Rapide'
        },
        features: [
          { title: 'Support d\'Animation', description: 'Support complet pour les GIFs animés avec visualisation frame par frame et contrôles de lecture' },
          { title: 'Optimisation des Couleurs', description: 'Optimisation avancée de la palette pour une meilleure qualité et des tailles de fichier plus petites' },
          { title: 'Conversion de Format', description: 'Convertir GIF en WebP, MP4 ou extraire des frames individuels en PNG/JPEG' }
        ],
        about_title: 'À Propos du Format GIF',
        about_intro: 'GIF (Graphics Interchange Format) est un format d\'image bitmap développé par CompuServe en 1987. Les images GIF sont compressées à l\'aide de la technique de compression de données sans perte Lempel-Ziv-Welch (LZW) pour réduire la taille du fichier sans dégrader la qualité visuelle. Le format prend en charge jusqu\'à 8 bits par pixel pour chaque image, permettant à une seule image de référencer sa propre palette de jusqu\'à 256 couleurs différentes choisies dans l\'espace colorimétrique RVB 24 bits.',
        advantages_title: 'Avantages Clés',
        advantages: [
          'Support d\'animation – Plusieurs frames dans un fichier',
          'Transparence – Transparence d\'une seule couleur',
          'Support universel – Fonctionne partout',
          'Compression sans perte – Aucune dégradation de qualité',
          'Petites tailles de fichier – Efficace pour les graphiques simples',
          'Contrôle de boucle – Boucles d\'animation infinies ou finies'
        ],
        use_cases_title: 'Meilleurs Cas d\'Utilisation',
        use_cases: [
          'Graphiques animés – Animations et effets simples',
          'Réseaux sociaux – Mèmes et images de réaction',
          'Graphiques web – Icônes et illustrations simples',
          'Signatures e-mail – Logos et bannières animés',
          'Présentations – Diagrammes et graphiques animés',
          'Interfaces utilisateur – Animations de chargement et indicateurs'
        ],
        specs_title: 'Spécifications Techniques GIF',
        specs_header_label: 'Spécification',
        specs_header_value: 'Détails',
        specs: [
          { label: 'Extension de Fichier', value: '.gif' },
          { label: 'Type MIME', value: 'image/gif' },
          { label: 'Compression', value: 'Compression sans perte LZW' },
          { label: 'Support de Couleur', value: 'Jusqu\'à 256 couleurs (palette 8 bits)' },
          { label: 'Résolution Maximale', value: '6,500 × 6,500 pixels' },
          { label: 'Transparence', value: 'Transparence d\'une seule couleur' },
          { label: 'Animation', value: 'Plusieurs frames avec contrôle du timing' },
          { label: 'Entrelacement', value: 'Support de chargement progressif' }
        ],
        seo_title: 'Fonctionnalités du Visionneuse et Convertisseur GIF',
        seo_intro: 'Notre visionneuse GIF professionnelle fournit un support complet pour les images GIF animées, y compris la visualisation frame par frame, les contrôles de lecture et la conversion de format. Que vous soyez designer, développeur ou créateur de contenu, notre plateforme offre les outils dont vous avez besoin pour la gestion professionnelle des images GIF.',
        seo_viewing_title: 'Fonctionnalités de Visualisation Avancées',
        seo_viewing_text: 'Visualisez des images GIF animées avec des contrôles de lecture complets, la navigation des frames et une analyse détaillée. Notre visionneuse prend en charge toutes les fonctionnalités GIF, y compris l\'animation, la transparence et l\'optimisation de la palette, garantissant une représentation précise de vos graphiques animés.',
        seo_conversion_title: 'Outils de Conversion Professionnels',
        seo_conversion_text: 'Convertissez les fichiers GIF en WebP, MP4, PNG, JPEG et autres formats tout en maintenant la qualité d\'animation. Notre moteur de conversion offre l\'extraction de frames, les paramètres de qualité et les capacités de traitement par lots pour gérer plusieurs fichiers simultanément.',
        seo_optimization_title: 'Optimisation de la Qualité',
        seo_optimization_text: 'Optimisez les fichiers GIF pour une utilisation web avec nos outils intelligents qui réduisent les tailles de fichier tout en préservant la qualité d\'animation. Parfait pour l\'optimisation de sites web, le partage sur les réseaux sociaux et les pièces jointes e-mail où la taille de fichier et la qualité comptent.',
        editor: {
          toggle_sidebar: 'Basculer la Barre Latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la Barre Latérale',
          search_placeholder: 'Rechercher des fichiers...',
          files_header: 'Fichiers',
          add_files: '+ Ajouter',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Apri e Riproduci GIF Animate Online Gratis',
        meta_description: 'Visualizza e riproduci GIF animate istantaneamente nel tuo browser. Nessun software o registrazione richiesta. Un visualizzatore GIF online veloce, sicuro e 100% gratuito. Provalo ora!',
        meta_keywords: 'visualizzatore GIF, GIF animato, GIF a MP4, GIF a WebP, visualizzatore animazioni, estrazione frame, visualizzatore meme, elaborazione batch',
        hero_title: 'Visualizzatore GIF Gratuito',
        hero_subtitle: 'Visualizza e converti immagini GIF animate con controlli di riproduzione',
        upload_title: 'Carica File GIF',
        upload_description: 'Trascina e rilascia le tue immagini GIF animate o fai clic per sfogliare. Supporta animazioni, trasparenza ed estrazione di frame fino a 100MB totali.',
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
          animation_support: '✓ Supporto Animazione',
          transparency_support: '🎨 Supporto Trasparenza',
          fast_processing: '⚡ Elaborazione Veloce'
        },
        features: [
          { title: 'Supporto Animazione', description: 'Supporto completo per GIF animati con visualizzazione frame per frame e controlli di riproduzione' },
          { title: 'Ottimizzazione Colori', description: 'Ottimizzazione avanzata della palette per migliore qualità e dimensioni file più piccole' },
          { title: 'Conversione Formato', description: 'Converti GIF in WebP, MP4 o estrai frame individuali come PNG/JPEG' }
        ],
        about_title: 'Informazioni sul Formato GIF',
        about_intro: 'GIF (Graphics Interchange Format) è un formato di immagine bitmap sviluppato da CompuServe nel 1987. Le immagini GIF sono compresse utilizzando la tecnica di compressione dati senza perdita Lempel-Ziv-Welch (LZW) per ridurre la dimensione del file senza degradare la qualità visiva. Il formato supporta fino a 8 bit per pixel per ogni immagine, consentendo a una singola immagine di fare riferimento alla propria palette di fino a 256 colori diversi scelti dallo spazio colore RGB a 24 bit.',
        advantages_title: 'Vantaggi Chiave',
        advantages: [
          'Supporto animazione – Più frame in un file',
          'Trasparenza – Trasparenza a colore singolo',
          'Supporto universale – Funziona ovunque',
          'Compressione senza perdita – Nessuna degradazione della qualità',
          'Piccole dimensioni file – Efficiente per grafici semplici',
          'Controllo loop – Loop di animazione infiniti o finiti'
        ],
        use_cases_title: 'Migliori Casi d\'Uso',
        use_cases: [
          'Grafici animati – Animazioni ed effetti semplici',
          'Social media – Meme e immagini di reazione',
          'Grafici web – Icone e illustrazioni semplici',
          'Firme email – Logo e banner animati',
          'Presentazioni – Diagrammi e grafici animati',
          'Interfacce utente – Animazioni di caricamento e indicatori'
        ],
        specs_title: 'Specifiche Tecniche GIF',
        specs_header_label: 'Specifica',
        specs_header_value: 'Dettagli',
        specs: [
          { label: 'Estensione File', value: '.gif' },
          { label: 'Tipo MIME', value: 'image/gif' },
          { label: 'Compressione', value: 'Compressione senza perdita LZW' },
          { label: 'Supporto Colore', value: 'Fino a 256 colori (palette 8 bit)' },
          { label: 'Risoluzione Massima', value: '6,500 × 6,500 pixel' },
          { label: 'Trasparenza', value: 'Trasparenza a colore singolo' },
          { label: 'Animazione', value: 'Più frame con controllo temporale' },
          { label: 'Interlacciamento', value: 'Supporto caricamento progressivo' }
        ],
        seo_title: 'Funzionalità Visualizzatore e Convertitore GIF',
        seo_intro: 'Il nostro visualizzatore GIF professionale fornisce supporto completo per immagini GIF animate, inclusa visualizzazione frame per frame, controlli di riproduzione e conversione formato. Che tu sia un designer, sviluppatore o creatore di contenuti, la nostra piattaforma offre gli strumenti di cui hai bisogno per la gestione professionale di immagini GIF.',
        seo_viewing_title: 'Funzionalità di Visualizzazione Avanzate',
        seo_viewing_text: 'Visualizza immagini GIF animate con controlli di riproduzione completi, navigazione frame e analisi dettagliata. Il nostro visualizzatore supporta tutte le funzionalità GIF, inclusa animazione, trasparenza e ottimizzazione palette, garantendo una rappresentazione accurata dei tuoi grafici animati.',
        seo_conversion_title: 'Strumenti di Conversione Professionali',
        seo_conversion_text: 'Converti file GIF in WebP, MP4, PNG, JPEG e altri formati mantenendo la qualità dell\'animazione. Il nostro motore di conversione offre estrazione frame, impostazioni qualità e capacità di elaborazione batch per gestire più file contemporaneamente.',
        seo_optimization_title: 'Ottimizzazione Qualità',
        seo_optimization_text: 'Ottimizza file GIF per uso web con i nostri strumenti intelligenti che riducono le dimensioni dei file preservando la qualità dell\'animazione. Perfetto per ottimizzazione siti web, condivisione social media e allegati email dove dimensioni file e qualità contano.',
        editor: {
          toggle_sidebar: 'Mostra/Nascondi Barra Laterale',
          close: 'Chiudi (Esc)',
          close_sidebar: 'Chiudi Barra Laterale',
          search_placeholder: 'Cerca file...',
          files_header: 'File',
          add_files: '+ Aggiungi',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Open en Speel Geanimeerde GIFs Online Gratis',
        meta_description: 'Bekijk en speel geanimeerde GIFs direct in je browser. Geen software of registratie vereist. Een snelle, veilige en 100% gratis online GIF-viewer. Probeer het nu!',
        meta_keywords: 'GIF viewer, geanimeerde GIF, GIF naar MP4, GIF naar WebP, animatie viewer, frame extractie, meme viewer, batchverwerking',
        hero_title: 'Gratis GIF Viewer',
        hero_subtitle: 'Bekijk en converteer geanimeerde GIF afbeeldingen met afspeelcontroles',
        upload_title: 'Upload GIF Bestanden',
        upload_description: 'Sleep en zet je geanimeerde GIF afbeeldingen neer of klik om te bladeren. Ondersteunt animaties, transparantie en frame-extractie tot 100MB totaal.',
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
          animation_support: '✓ Animatieondersteuning',
          transparency_support: '🎨 Transparantieondersteuning',
          fast_processing: '⚡ Snelle Verwerking'
        },
        features: [
          { title: 'Animatieondersteuning', description: 'Volledige ondersteuning voor geanimeerde GIFs met frame-voor-frame weergave en afspeelcontroles' },
          { title: 'Kleuroptimalisatie', description: 'Geavanceerde paletoptimalisatie voor betere kwaliteit en kleinere bestandsgroottes' },
          { title: 'Formaatconversie', description: 'Converteer GIF naar WebP, MP4 of extraheer individuele frames als PNG/JPEG' }
        ],
        about_title: 'Over GIF Formaat',
        about_intro: 'GIF (Graphics Interchange Format) is een bitmap afbeeldingsformaat ontwikkeld door CompuServe in 1987. GIF afbeeldingen worden gecomprimeerd met behulp van de Lempel-Ziv-Welch (LZW) verliesloze datacompressietechniek om de bestandsgrootte te verkleinen zonder de visuele kwaliteit te verminderen. Het formaat ondersteunt tot 8 bits per pixel voor elke afbeelding, waardoor een enkele afbeelding kan verwijzen naar zijn eigen palet van maximaal 256 verschillende kleuren gekozen uit de 24-bits RGB-kleurruimte.',
        advantages_title: 'Belangrijkste Voordelen',
        advantages: [
          'Animatieondersteuning – Meerdere frames in één bestand',
          'Transparantie – Enkele kleurtransparantie',
          'Universele ondersteuning – Werkt overal',
          'Verliesloze compressie – Geen kwaliteitsverlies',
          'Kleine bestandsgroottes – Efficiënt voor eenvoudige afbeeldingen',
          'Loopcontrole – Oneindige of eindige animatielussen'
        ],
        use_cases_title: 'Beste Gebruikssituaties',
        use_cases: [
          'Geanimeerde afbeeldingen – Eenvoudige animaties en effecten',
          'Sociale media – Memes en reactieafbeeldingen',
          'Webafbeeldingen – Pictogrammen en eenvoudige illustraties',
          'E-mailhandtekeningen – Geanimeerde logo\'s en banners',
          'Presentaties – Geanimeerde diagrammen en grafieken',
          'Gebruikersinterfaces – Laadanimaties en indicatoren'
        ],
        specs_title: 'GIF Technische Specificaties',
        specs_header_label: 'Specificatie',
        specs_header_value: 'Details',
        specs: [
          { label: 'Bestandsextensie', value: '.gif' },
          { label: 'MIME Type', value: 'image/gif' },
          { label: 'Compressie', value: 'LZW verliesloze compressie' },
          { label: 'Kleurondersteuning', value: 'Tot 256 kleuren (8-bits palet)' },
          { label: 'Maximale Resolutie', value: '6,500 × 6,500 pixels' },
          { label: 'Transparantie', value: 'Enkele kleurtransparantie' },
          { label: 'Animatie', value: 'Meerdere frames met tijdcontrole' },
          { label: 'Interlacing', value: 'Ondersteuning voor progressief laden' }
        ],
        seo_title: 'GIF Viewer en Converter Functies',
        seo_intro: 'Onze professionele GIF viewer biedt uitgebreide ondersteuning voor geanimeerde GIF afbeeldingen, inclusief frame-voor-frame weergave, afspeelcontroles en formaatconversie. Of je nu ontwerper, ontwikkelaar of contentmaker bent, ons platform biedt de tools die je nodig hebt voor professionele GIF-afbeeldingsverwerking.',
        seo_viewing_title: 'Geavanceerde Weergavefuncties',
        seo_viewing_text: 'Bekijk geanimeerde GIF afbeeldingen met volledige afspeelcontroles, framenavigatie en gedetailleerde analyse. Onze viewer ondersteunt alle GIF-functies, inclusief animatie, transparantie en paletoptimalisatie, waardoor nauwkeurige weergave van je geanimeerde afbeeldingen wordt gegarandeerd.',
        seo_conversion_title: 'Professionele Conversietools',
        seo_conversion_text: 'Converteer GIF bestanden naar WebP, MP4, PNG, JPEG en andere formaten terwijl de animatiekwaliteit behouden blijft. Onze conversie-engine biedt frame-extractie, kwaliteitsinstellingen en batchverwerkingsmogelijkheden voor het gelijktijdig verwerken van meerdere bestanden.',
        seo_optimization_title: 'Kwaliteitsoptimalisatie',
        seo_optimization_text: 'Optimaliseer GIF bestanden voor webgebruik met onze slimme compressie-algoritmen die bestandsgroottes verkleinen terwijl de animatiekwaliteit behouden blijft. Perfect voor website-optimalisatie, sociale media delen en e-mailbijlagen waar bestandsgrootte en kwaliteit belangrijk zijn.',
        editor: {
          toggle_sidebar: 'Zijbalk In-/Uitschakelen',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk Sluiten',
          search_placeholder: 'Zoek bestanden...',
          files_header: 'Bestanden',
          add_files: '+ Toevoegen',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Abra e Reproduza GIFs Animados Online Grátis',
        meta_description: 'Visualize e reproduza GIFs animados instantaneamente no seu navegador. Sem software ou registro necessário. Um visualizador GIF online rápido, seguro e 100% gratuito. Experimente agora!',
        meta_keywords: 'visualizador GIF, GIF animado, GIF para MP4, GIF para WebP, visualizador de animações, extração de frames, visualizador de memes, processamento em lote',
        hero_title: 'Visualizador GIF Gratuito',
        hero_subtitle: 'Ver e converter imagens GIF animadas com controles de reprodução',
        upload_title: 'Carregar Arquivos GIF',
        upload_description: 'Arraste e solte suas imagens GIF animadas ou clique para procurar. Suporta animações, transparência e extração de frames até 100MB no total.',
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
          animation_support: '✓ Suporte de Animação',
          transparency_support: '🎨 Suporte de Transparência',
          fast_processing: '⚡ Processamento Rápido'
        },
        features: [
          { title: 'Suporte de Animação', description: 'Suporte completo para GIFs animados com visualização frame por frame e controles de reprodução' },
          { title: 'Otimização de Cores', description: 'Otimização avançada de paleta para melhor qualidade e tamanhos de arquivo menores' },
          { title: 'Conversão de Formato', description: 'Converter GIF para WebP, MP4 ou extrair frames individuais como PNG/JPEG' }
        ],
        about_title: 'Sobre o Formato GIF',
        about_intro: 'GIF (Graphics Interchange Format) é um formato de imagem bitmap desenvolvido pela CompuServe em 1987. As imagens GIF são comprimidas usando a técnica de compressão de dados sem perdas Lempel-Ziv-Welch (LZW) para reduzir o tamanho do arquivo sem degradar a qualidade visual. O formato suporta até 8 bits por pixel para cada imagem, permitindo que uma única imagem referencie sua própria paleta de até 256 cores diferentes escolhidas do espaço de cores RGB de 24 bits.',
        advantages_title: 'Vantagens Principais',
        advantages: [
          'Suporte de animação – Múltiplos frames em um arquivo',
          'Transparência – Transparência de cor única',
          'Suporte universal – Funciona em todos os lugares',
          'Compressão sem perdas – Sem degradação de qualidade',
          'Tamanhos de arquivo pequenos – Eficiente para gráficos simples',
          'Controle de loop – Loops de animação infinitos ou finitos'
        ],
        use_cases_title: 'Melhores Casos de Uso',
        use_cases: [
          'Gráficos animados – Animações e efeitos simples',
          'Redes sociais – Memes e imagens de reação',
          'Gráficos web – Ícones e ilustrações simples',
          'Assinaturas de email – Logos e banners animados',
          'Apresentações – Diagramas e gráficos animados',
          'Interfaces de usuário – Animações de carregamento e indicadores'
        ],
        specs_title: 'Especificações Técnicas GIF',
        specs_header_label: 'Especificação',
        specs_header_value: 'Detalhes',
        specs: [
          { label: 'Extensão de Arquivo', value: '.gif' },
          { label: 'Tipo MIME', value: 'image/gif' },
          { label: 'Compressão', value: 'Compressão sem perdas LZW' },
          { label: 'Suporte de Cor', value: 'Até 256 cores (paleta de 8 bits)' },
          { label: 'Resolução Máxima', value: '6,500 × 6,500 pixels' },
          { label: 'Transparência', value: 'Transparência de cor única' },
          { label: 'Animação', value: 'Múltiplos frames com controle de tempo' },
          { label: 'Entrelaçamento', value: 'Suporte de carregamento progressivo' }
        ],
        seo_title: 'Recursos do Visualizador e Conversor GIF',
        seo_intro: 'Nosso visualizador GIF profissional fornece suporte abrangente para imagens GIF animadas, incluindo visualização frame por frame, controles de reprodução e conversão de formato. Seja você designer, desenvolvedor ou criador de conteúdo, nossa plataforma oferece as ferramentas necessárias para o processamento profissional de imagens GIF.',
        seo_viewing_title: 'Recursos Avançados de Visualização',
        seo_viewing_text: 'Visualize imagens GIF animadas com controles de reprodução completos, navegação de frames e análise detalhada. Nosso visualizador suporta todos os recursos GIF, incluindo animação, transparência e otimização de paleta, garantindo representação precisa dos seus gráficos animados.',
        seo_conversion_title: 'Ferramentas de Conversão Profissionais',
        seo_conversion_text: 'Converta arquivos GIF para WebP, MP4, PNG, JPEG e outros formatos mantendo a qualidade da animação. Nosso mecanismo de conversão oferece extração de frames, configurações de qualidade e capacidades de processamento em lote para lidar com múltiplos arquivos simultaneamente.',
        seo_optimization_title: 'Otimização de Qualidade',
        seo_optimization_text: 'Otimize arquivos GIF para uso na web com nossas ferramentas inteligentes que reduzem os tamanhos de arquivo preservando a qualidade da animação. Perfeito para otimização de sites, compartilhamento em redes sociais e anexos de email onde tamanho de arquivo e qualidade importam.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar Barra Lateral',
          search_placeholder: 'Pesquisar arquivos...',
          files_header: 'Arquivos',
          add_files: '+ Adicionar',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Mở và Phát GIF Hoạt Hình Online Miễn Phí',
        meta_description: 'Xem và phát GIF hoạt hình ngay lập tức trong trình duyệt của bạn. Không cần phần mềm hoặc đăng ký. Trình xem GIF online nhanh, an toàn và 100% miễn phí. Thử ngay!',
        meta_keywords: 'trình xem GIF, GIF hoạt hình, GIF sang MP4, GIF sang WebP, trình xem hoạt hình, trích xuất khung hình, trình xem meme, xử lý hàng loạt',
        hero_title: 'Trình Xem GIF Miễn Phí',
        hero_subtitle: 'Xem và chuyển đổi hình ảnh GIF hoạt hình với điều khiển phát lại',
        upload_title: 'Tải Lên Tệp GIF',
        upload_description: 'Kéo và thả hình ảnh GIF hoạt hình của bạn hoặc nhấp để duyệt. Hỗ trợ hoạt hình, trong suốt và trích xuất khung hình lên đến 100MB tổng cộng.',
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
          animation_support: '✓ Hỗ Trợ Hoạt Hình',
          transparency_support: '🎨 Hỗ Trợ Trong Suốt',
          fast_processing: '⚡ Xử Lý Nhanh'
        },
        features: [
          { title: 'Hỗ Trợ Hoạt Hình', description: 'Hỗ trợ đầy đủ cho GIF hoạt hình với xem từng khung hình và điều khiển phát lại' },
          { title: 'Tối Ưu Màu Sắc', description: 'Tối ưu hóa bảng màu nâng cao để có chất lượng tốt hơn và kích thước tệp nhỏ hơn' },
          { title: 'Chuyển Đổi Định Dạng', description: 'Chuyển đổi GIF sang WebP, MP4 hoặc trích xuất các khung hình riêng lẻ dưới dạng PNG/JPEG' }
        ],
        about_title: 'Về Định Dạng GIF',
        about_intro: 'GIF (Graphics Interchange Format) là định dạng hình ảnh bitmap được phát triển bởi CompuServe vào năm 1987. Hình ảnh GIF được nén bằng kỹ thuật nén dữ liệu không mất mát Lempel-Ziv-Welch (LZW) để giảm kích thước tệp mà không làm giảm chất lượng hình ảnh. Định dạng hỗ trợ tối đa 8 bit trên mỗi pixel cho mỗi hình ảnh, cho phép một hình ảnh đơn lẻ tham chiếu đến bảng màu riêng của nó lên đến 256 màu khác nhau được chọn từ không gian màu RGB 24 bit.',
        advantages_title: 'Ưu Điểm Chính',
        advantages: [
          'Hỗ trợ hoạt hình – Nhiều khung hình trong một tệp',
          'Trong suốt – Trong suốt một màu',
          'Hỗ trợ phổ biến – Hoạt động ở mọi nơi',
          'Nén không mất mát – Không giảm chất lượng',
          'Kích thước tệp nhỏ – Hiệu quả cho đồ họa đơn giản',
          'Điều khiển vòng lặp – Vòng lặp hoạt hình vô hạn hoặc hữu hạn'
        ],
        use_cases_title: 'Trường Hợp Sử Dụng Tốt Nhất',
        use_cases: [
          'Đồ họa hoạt hình – Hoạt hình và hiệu ứng đơn giản',
          'Mạng xã hội – Meme và hình ảnh phản ứng',
          'Đồ họa web – Biểu tượng và minh họa đơn giản',
          'Chữ ký email – Logo và banner hoạt hình',
          'Trình bày – Sơ đồ và biểu đồ hoạt hình',
          'Giao diện người dùng – Hoạt hình tải và chỉ báo'
        ],
        specs_title: 'Thông Số Kỹ Thuật GIF',
        specs_header_label: 'Thông Số',
        specs_header_value: 'Chi Tiết',
        specs: [
          { label: 'Phần Mở Rộng Tệp', value: '.gif' },
          { label: 'Loại MIME', value: 'image/gif' },
          { label: 'Nén', value: 'Nén không mất mát LZW' },
          { label: 'Hỗ Trợ Màu', value: 'Lên đến 256 màu (bảng màu 8 bit)' },
          { label: 'Độ Phân Giải Tối Đa', value: '6,500 × 6,500 pixel' },
          { label: 'Trong Suốt', value: 'Trong suốt một màu' },
          { label: 'Hoạt Hình', value: 'Nhiều khung hình với điều khiển thời gian' },
          { label: 'Xen Kẽ', value: 'Hỗ trợ tải dần' }
        ],
        seo_title: 'Tính Năng Trình Xem và Chuyển Đổi GIF',
        seo_intro: 'Trình xem GIF chuyên nghiệp của chúng tôi cung cấp hỗ trợ toàn diện cho hình ảnh GIF hoạt hình, bao gồm xem từng khung hình, điều khiển phát lại và chuyển đổi định dạng. Dù bạn là nhà thiết kế, nhà phát triển hay người tạo nội dung, nền tảng của chúng tôi cung cấp các công cụ bạn cần để xử lý hình ảnh GIF chuyên nghiệp.',
        seo_viewing_title: 'Tính Năng Xem Nâng Cao',
        seo_viewing_text: 'Xem hình ảnh GIF hoạt hình với điều khiển phát lại đầy đủ, điều hướng khung hình và phân tích chi tiết. Trình xem của chúng tôi hỗ trợ tất cả các tính năng GIF, bao gồm hoạt hình, trong suốt và tối ưu hóa bảng màu, đảm bảo biểu diễn chính xác đồ họa hoạt hình của bạn.',
        seo_conversion_title: 'Công Cụ Chuyển Đổi Chuyên Nghiệp',
        seo_conversion_text: 'Chuyển đổi tệp GIF sang WebP, MP4, PNG, JPEG và các định dạng khác trong khi duy trì chất lượng hoạt hình. Công cụ chuyển đổi của chúng tôi cung cấp trích xuất khung hình, cài đặt chất lượng và khả năng xử lý hàng loạt để xử lý nhiều tệp đồng thời.',
        seo_optimization_title: 'Tối Ưu Hóa Chất Lượng',
        seo_optimization_text: 'Tối ưu hóa tệp GIF cho sử dụng web với các công cụ thông minh của chúng tôi giảm kích thước tệp trong khi bảo toàn chất lượng hoạt hình. Hoàn hảo cho tối ưu hóa trang web, chia sẻ mạng xã hội và tệp đính kèm email nơi kích thước tệp và chất lượng quan trọng.',
        editor: {
          toggle_sidebar: 'Chuyển Đổi Thanh Bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng Thanh Bên',
          search_placeholder: 'Tìm kiếm tệp...',
          files_header: 'Tệp',
          add_files: '+ Thêm',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Animasyonlu GIF\'leri Çevrimiçi Ücretsiz Açın ve Oynatın',
        meta_description: 'Animasyonlu GIF\'leri tarayıcınızda anında görüntüleyin ve oynatın. Yazılım veya kayıt gerekmez. Hızlı, güvenli ve %100 ücretsiz çevrimiçi GIF görüntüleyici. Şimdi deneyin!',
        meta_keywords: 'GIF görüntüleyici, animasyonlu GIF, GIF\'den MP4\'e, GIF\'den WebP\'ye, animasyon görüntüleyici, frame çıkarma, meme görüntüleyici, toplu işleme',
        hero_title: 'Ücretsiz GIF Görüntüleyici',
        hero_subtitle: 'Oynatma kontrolleri ile animasyonlu GIF görsellerini görüntüleyin ve dönüştürün',
        upload_title: 'GIF Dosyalarını Yükle',
        upload_description: 'Animasyonlu GIF görsellerinizi sürükleyip bırakın veya göz atmak için tıklayın. Toplam 100MB\'a kadar animasyon, şeffaflık ve frame çıkarma destekler.',
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
          animation_support: '✓ Animasyon Desteği',
          transparency_support: '🎨 Şeffaflık Desteği',
          fast_processing: '⚡ Hızlı İşleme'
        },
        features: [
          { title: 'Animasyon Desteği', description: 'Frame-für-frame görüntüleme ve oynatma kontrolleri ile animasyonlu GIF\'ler için tam destek' },
          { title: 'Renk Optimizasyonu', description: 'Daha iyi kalite ve daha küçük dosya boyutları için gelişmiş palet optimizasyonu' },
          { title: 'Format Dönüştürme', description: 'GIF\'i WebP, MP4\'e dönüştürün veya PNG/JPEG olarak ayrı frame\'leri çıkarın' }
        ],
        about_title: 'GIF Formatı Hakkında',
        about_intro: 'GIF (Graphics Interchange Format), 1987 yılında CompuServe tarafından geliştirilen bir bitmap görüntü formatıdır. GIF görselleri, görsel kaliteyi düşürmeden dosya boyutunu azaltmak için Lempel-Ziv-Welch (LZW) kayıpsız veri sıkıştırma tekniği kullanılarak sıkıştırılır. Format, her görüntü için piksel başına 8 bit\'e kadar destekler, tek bir görüntünün 24 bit RGB renk uzayından seçilen 256 farklı renkten oluşan kendi paletine referans vermesine izin verir.',
        advantages_title: 'Temel Avantajlar',
        advantages: [
          'Animasyon desteği – Bir dosyada birden fazla frame',
          'Şeffaflık – Tek renk şeffaflığı',
          'Evrensel destek – Her yerde çalışır',
          'Kayıpsız sıkıştırma – Kalite kaybı yok',
          'Küçük dosya boyutları – Basit grafikler için verimli',
          'Döngü kontrolü – Sonsuz veya sınırlı animasyon döngüleri'
        ],
        use_cases_title: 'En İyi Kullanım Durumları',
        use_cases: [
          'Animasyonlu grafikler – Basit animasyonlar ve efektler',
          'Sosyal medya – Meme\'ler ve tepki görselleri',
          'Web grafikleri – İkonlar ve basit illüstrasyonlar',
          'E-posta imzaları – Animasyonlu logolar ve bannerlar',
          'Sunumlar – Animasyonlu diyagramlar ve grafikler',
          'Kullanıcı arayüzleri – Yükleme animasyonları ve göstergeler'
        ],
        specs_title: 'GIF Teknik Özellikleri',
        specs_header_label: 'Özellik',
        specs_header_value: 'Detaylar',
        specs: [
          { label: 'Dosya Uzantısı', value: '.gif' },
          { label: 'MIME Türü', value: 'image/gif' },
          { label: 'Sıkıştırma', value: 'LZW kayıpsız sıkıştırma' },
          { label: 'Renk Desteği', value: '256 renge kadar (8 bit palet)' },
          { label: 'Maksimum Çözünürlük', value: '6,500 × 6,500 piksel' },
          { label: 'Şeffaflık', value: 'Tek renk şeffaflığı' },
          { label: 'Animasyon', value: 'Zamanlama kontrolü ile birden fazla frame' },
          { label: 'Aralıklı', value: 'Aşamalı yükleme desteği' }
        ],
        seo_title: 'GIF Görüntüleyici ve Dönüştürücü Özellikleri',
        seo_intro: 'Profesyonel GIF görüntüleyicimiz, frame-für-frame görüntüleme, oynatma kontrolleri ve format dönüştürme dahil olmak üzere animasyonlu GIF görselleri için kapsamlı destek sağlar. İster tasarımcı, ister geliştirici veya içerik oluşturucu olun, platformumuz profesyonel GIF görüntü işleme için ihtiyacınız olan araçları sunar.',
        seo_viewing_title: 'Gelişmiş Görüntüleme Özellikleri',
        seo_viewing_text: 'Tam oynatma kontrolleri, frame navigasyonu ve detaylı analiz ile animasyonlu GIF görsellerini görüntüleyin. Görüntüleyicimiz animasyon, şeffaflık ve palet optimizasyonu dahil olmak üzere tüm GIF özelliklerini destekler ve animasyonlu grafiklerinizin doğru temsilini sağlar.',
        seo_conversion_title: 'Profesyonel Dönüştürme Araçları',
        seo_conversion_text: 'Animasyon kalitesini korurken GIF dosyalarını WebP, MP4, PNG, JPEG ve diğer formatlara dönüştürün. Dönüştürme motorumuz, birden fazla dosyayı aynı anda işlemek için frame çıkarma, kalite ayarları ve toplu işleme yetenekleri sunar.',
        seo_optimization_title: 'Kalite Optimizasyonu',
        seo_optimization_text: 'Animasyon kalitesini korurken dosya boyutlarını azaltan akıllı araçlarımızla GIF dosyalarını web kullanımı için optimize edin. Dosya boyutu ve kalitenin önemli olduğu web sitesi optimizasyonu, sosyal medya paylaşımı ve e-posta ekleri için mükemmeldir.',
        editor: {
          toggle_sidebar: 'Kenar Çubuğunu Aç/Kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar Çubuğunu Kapat',
          search_placeholder: 'Dosyaları ara...',
          files_header: 'Dosyalar',
          add_files: '+ Ekle',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Открывайте и Воспроизводите Анимированные GIF Онлайн Бесплатно',
        meta_description: 'Просматривайте и воспроизводите анимированные GIF мгновенно в браузере. Без программного обеспечения и регистрации. Быстрый, безопасный и 100% бесплатный онлайн-просмотрщик GIF. Попробуйте сейчас!',
        meta_keywords: 'просмотрщик GIF, анимированный GIF, GIF в MP4, GIF в WebP, просмотрщик анимации, извлечение кадров, просмотрщик мемов, пакетная обработка',
        hero_title: 'Бесплатный Просмотрщик GIF',
        hero_subtitle: 'Просматривайте и конвертируйте анимированные GIF изображения с элементами управления воспроизведением',
        upload_title: 'Загрузить Файлы GIF',
        upload_description: 'Перетащите ваши анимированные GIF изображения или нажмите для просмотра. Поддерживает анимацию, прозрачность и извлечение кадров до 100 МБ всего.',
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
          animation_support: '✓ Поддержка Анимации',
          transparency_support: '🎨 Поддержка Прозрачности',
          fast_processing: '⚡ Быстрая Обработка'
        },
        features: [
          { title: 'Поддержка Анимации', description: 'Полная поддержка анимированных GIF с просмотром кадр за кадром и элементами управления воспроизведением' },
          { title: 'Оптимизация Цветов', description: 'Продвинутая оптимизация палитры для лучшего качества и меньших размеров файлов' },
          { title: 'Конвертация Форматов', description: 'Конвертируйте GIF в WebP, MP4 или извлекайте отдельные кадры как PNG/JPEG' }
        ],
        about_title: 'О Формате GIF',
        about_intro: 'GIF (Graphics Interchange Format) — это формат растровых изображений, разработанный CompuServe в 1987 году. Изображения GIF сжимаются с использованием техники сжатия данных без потерь Lempel-Ziv-Welch (LZW) для уменьшения размера файла без ухудшения визуального качества. Формат поддерживает до 8 бит на пиксель для каждого изображения, позволяя одному изображению ссылаться на свою собственную палитру до 256 различных цветов, выбранных из 24-битного цветового пространства RGB.',
        advantages_title: 'Ключевые Преимущества',
        advantages: [
          'Поддержка анимации – Несколько кадров в одном файле',
          'Прозрачность – Прозрачность одного цвета',
          'Универсальная поддержка – Работает везде',
          'Сжатие без потерь – Без потери качества',
          'Маленькие размеры файлов – Эффективно для простой графики',
          'Управление циклом – Бесконечные или конечные циклы анимации'
        ],
        use_cases_title: 'Лучшие Случаи Использования',
        use_cases: [
          'Анимированная графика – Простые анимации и эффекты',
          'Социальные сети – Мемы и изображения реакций',
          'Веб-графика – Иконки и простые иллюстрации',
          'Подписи электронной почты – Анимированные логотипы и баннеры',
          'Презентации – Анимированные диаграммы и графики',
          'Пользовательские интерфейсы – Анимации загрузки и индикаторы'
        ],
        specs_title: 'Технические Характеристики GIF',
        specs_header_label: 'Характеристика',
        specs_header_value: 'Детали',
        specs: [
          { label: 'Расширение Файла', value: '.gif' },
          { label: 'Тип MIME', value: 'image/gif' },
          { label: 'Сжатие', value: 'Сжатие без потерь LZW' },
          { label: 'Поддержка Цвета', value: 'До 256 цветов (8-битная палитра)' },
          { label: 'Максимальное Разрешение', value: '6,500 × 6,500 пикселей' },
          { label: 'Прозрачность', value: 'Прозрачность одного цвета' },
          { label: 'Анимация', value: 'Несколько кадров с управлением временем' },
          { label: 'Чересстрочная Развертка', value: 'Поддержка прогрессивной загрузки' }
        ],
        seo_title: 'Функции Просмотрщика и Конвертера GIF',
        seo_intro: 'Наш профессиональный просмотрщик GIF обеспечивает комплексную поддержку анимированных GIF изображений, включая просмотр кадр за кадром, элементы управления воспроизведением и конвертацию форматов. Будь вы дизайнер, разработчик или создатель контента, наша платформа предлагает инструменты, необходимые для профессиональной обработки GIF изображений.',
        seo_viewing_title: 'Расширенные Функции Просмотра',
        seo_viewing_text: 'Просматривайте анимированные GIF изображения с полными элементами управления воспроизведением, навигацией по кадрам и детальным анализом. Наш просмотрщик поддерживает все функции GIF, включая анимацию, прозрачность и оптимизацию палитры, обеспечивая точное представление вашей анимированной графики.',
        seo_conversion_title: 'Профессиональные Инструменты Конвертации',
        seo_conversion_text: 'Конвертируйте файлы GIF в WebP, MP4, PNG, JPEG и другие форматы, сохраняя качество анимации. Наш движок конвертации предлагает извлечение кадров, настройки качества и возможности пакетной обработки для одновременной обработки нескольких файлов.',
        seo_optimization_title: 'Оптимизация Качества',
        seo_optimization_text: 'Оптимизируйте файлы GIF для веб-использования с помощью наших интеллектуальных инструментов, которые уменьшают размеры файлов, сохраняя качество анимации. Идеально для оптимизации веб-сайтов, обмена в социальных сетях и вложений электронной почты, где важны размер файла и качество.',
        editor: {
          toggle_sidebar: 'Переключить Боковую Панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть Боковую Панель',
          search_placeholder: 'Поиск файлов...',
          files_header: 'Файлы',
          add_files: '+ Добавить',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'افتح وشغّل صور GIF المتحركة عبر الإنترنت مجاناً',
        meta_description: 'اعرض وشغّل صور GIF المتحركة فوراً في متصفحك. لا حاجة لبرامج أو تسجيل. عارض GIF عبر الإنترنت سريع وآمن ومجاني 100%. جربه الآن!',
        meta_keywords: 'عارض GIF، GIF متحرك، GIF إلى MP4، GIF إلى WebP، عارض الرسوم المتحركة، استخراج الإطارات، عارض الميمات، المعالجة المجمعة',
        hero_title: 'عارض GIF مجاني',
        hero_subtitle: 'اعرض واعرض صور GIF المتحركة مع عناصر التحكم في التشغيل',
        upload_title: 'رفع ملفات GIF',
        upload_description: 'اسحب وأفلت صور GIF المتحركة الخاصة بك أو انقر للتصفح. يدعم الرسوم المتحركة والشفافية واستخراج الإطارات حتى 100 ميجابايت إجمالي.',
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
          animation_support: '✓ دعم الرسوم المتحركة',
          transparency_support: '🎨 دعم الشفافية',
          fast_processing: '⚡ معالجة سريعة'
        },
        features: [
          { title: 'دعم الرسوم المتحركة', description: 'دعم كامل لصور GIF المتحركة مع عرض إطار بإطار وعناصر التحكم في التشغيل' },
          { title: 'تحسين الألوان', description: 'تحسين متقدم للوحة الألوان لجودة أفضل وأحجام ملفات أصغر' },
          { title: 'تحويل التنسيق', description: 'تحويل GIF إلى WebP أو MP4 أو استخراج إطارات فردية كـ PNG/JPEG' }
        ],
        about_title: 'حول تنسيق GIF',
        about_intro: 'GIF (Graphics Interchange Format) هو تنسيق صورة نقطية تم تطويره بواسطة CompuServe في عام 1987. يتم ضغط صور GIF باستخدام تقنية ضغط البيانات بدون فقدان Lempel-Ziv-Welch (LZW) لتقليل حجم الملف دون تدهور الجودة البصرية. يدعم التنسيق حتى 8 بت لكل بكسل لكل صورة، مما يسمح لصورة واحدة بالرجوع إلى لوحة الألوان الخاصة بها التي تصل إلى 256 لونًا مختلفًا مختارًا من مساحة الألوان RGB 24 بت.',
        advantages_title: 'المزايا الرئيسية',
        advantages: [
          'دعم الرسوم المتحركة – إطارات متعددة في ملف واحد',
          'الشفافية – شفافية لون واحد',
          'الدعم العالمي – يعمل في كل مكان',
          'ضغط بدون فقدان – لا يوجد تدهور في الجودة',
          'أحجام ملفات صغيرة – فعال للرسوم البسيطة',
          'التحكم في الحلقة – حلقات رسوم متحركة لا نهائية أو محدودة'
        ],
        use_cases_title: 'أفضل حالات الاستخدام',
        use_cases: [
          'الرسوم المتحركة – الرسوم المتحركة والتأثيرات البسيطة',
          'وسائل التواصل الاجتماعي – الميمات وصور التفاعل',
          'رسوم الويب – الأيقونات والرسوم التوضيحية البسيطة',
          'توقيعات البريد الإلكتروني – الشعارات واللافتات المتحركة',
          'العروض التقديمية – المخططات والرسوم البيانية المتحركة',
          'واجهات المستخدم – رسوم التحميل والمؤشرات'
        ],
        specs_title: 'المواصفات التقنية GIF',
        specs_header_label: 'المواصفة',
        specs_header_value: 'التفاصيل',
        specs: [
          { label: 'امتداد الملف', value: '.gif' },
          { label: 'نوع MIME', value: 'image/gif' },
          { label: 'الضغط', value: 'ضغط بدون فقدان LZW' },
          { label: 'دعم الألوان', value: 'حتى 256 لونًا (لوحة 8 بت)' },
          { label: 'الحد الأقصى للدقة', value: '6,500 × 6,500 بكسل' },
          { label: 'الشفافية', value: 'شفافية لون واحد' },
          { label: 'الرسوم المتحركة', value: 'إطارات متعددة مع التحكم في التوقيت' },
          { label: 'التشابك', value: 'دعم التحميل التدريجي' }
        ],
        seo_title: 'ميزات عارض ومحول GIF',
        seo_intro: 'يوفر عارض GIF الاحترافي لدينا دعمًا شاملاً لصور GIF المتحركة، بما في ذلك العرض إطار بإطار وعناصر التحكم في التشغيل وتحويل التنسيق. سواء كنت مصممًا أو مطورًا أو منشئ محتوى، تقدم منصتنا الأدوات التي تحتاجها لمعالجة صور GIF الاحترافية.',
        seo_viewing_title: 'ميزات العرض المتقدمة',
        seo_viewing_text: 'اعرض صور GIF المتحركة مع عناصر التحكم الكاملة في التشغيل والتنقل بين الإطارات والتحليل التفصيلي. يدعم عارضنا جميع ميزات GIF، بما في ذلك الرسوم المتحركة والشفافية وتحسين لوحة الألوان، مما يضمن تمثيلًا دقيقًا لرسومك المتحركة.',
        seo_conversion_title: 'أدوات التحويل الاحترافية',
        seo_conversion_text: 'حول ملفات GIF إلى WebP أو MP4 أو PNG أو JPEG وتنسيقات أخرى مع الحفاظ على جودة الرسوم المتحركة. يوفر محرك التحويل لدينا استخراج الإطارات وإعدادات الجودة وإمكانيات المعالجة المجمعة للتعامل مع ملفات متعددة في وقت واحد.',
        seo_optimization_title: 'تحسين الجودة',
        seo_optimization_text: 'قم بتحسين ملفات GIF للاستخدام على الويب باستخدام أدواتنا الذكية التي تقلل أحجام الملفات مع الحفاظ على جودة الرسوم المتحركة. مثالي لتحسين مواقع الويب ومشاركة وسائل التواصل الاجتماعي ومرفقات البريد الإلكتروني حيث يهم حجم الملف والجودة.',
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          files_header: 'الملفات',
          add_files: '+ إضافة',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'เปิดและเล่น GIF แบบเคลื่อนไหวออนไลน์ฟรี',
        meta_description: 'ดูและเล่น GIF แบบเคลื่อนไหวทันทีในเบราว์เซอร์ของคุณ ไม่ต้องใช้ซอฟต์แวร์หรือลงทะเบียน โปรแกรมดู GIF ออนไลน์ที่เร็ว ปลอดภัย และฟรี 100% ลองเลย!',
        meta_keywords: 'โปรแกรมดู GIF, GIF แบบเคลื่อนไหว, GIF เป็น MP4, GIF เป็น WebP, โปรแกรมดูแอนิเมชัน, การดึงเฟรม, โปรแกรมดูมีม, การประมวลผลแบบกลุ่ม',
        hero_title: 'โปรแกรมดู GIF ฟรี',
        hero_subtitle: 'ดูและแปลงรูปภาพ GIF แบบเคลื่อนไหวด้วยการควบคุมการเล่น',
        upload_title: 'อัปโหลดไฟล์ GIF',
        upload_description: 'ลากและวางรูปภาพ GIF แบบเคลื่อนไหวของคุณหรือคลิกเพื่อเรียกดู รองรับการเคลื่อนไหว ความโปร่งใสและการดึงเฟรมสูงสุด 100MB รวม',
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
          animation_support: '✓ รองรับการเคลื่อนไหว',
          transparency_support: '🎨 รองรับความโปร่งใส',
          fast_processing: '⚡ ประมวลผลเร็ว'
        },
        features: [
          { title: 'รองรับการเคลื่อนไหว', description: 'รองรับ GIF แบบเคลื่อนไหวอย่างเต็มรูปแบบพร้อมการดูทีละเฟรมและการควบคุมการเล่น' },
          { title: 'การปรับปรุงสี', description: 'การปรับปรุงพาเล็ตขั้นสูงเพื่อคุณภาพที่ดีขึ้นและขนาดไฟล์ที่เล็กลง' },
          { title: 'การแปลงรูปแบบ', description: 'แปลง GIF เป็น WebP, MP4 หรือดึงเฟรมแต่ละเฟรมเป็น PNG/JPEG' }
        ],
        about_title: 'เกี่ยวกับรูปแบบ GIF',
        about_intro: 'GIF (Graphics Interchange Format) เป็นรูปแบบไฟล์ภาพบิตแมปที่พัฒนาโดย CompuServe ในปี 1987 รูปภาพ GIF ถูกบีบอัดโดยใช้เทคนิคการบีบอัดข้อมูลแบบไม่สูญเสีย Lempel-Ziv-Welch (LZW) เพื่อลดขนาดไฟล์โดยไม่ทำให้คุณภาพภาพลดลง รูปแบบรองรับสูงสุด 8 บิตต่อพิกเซลสำหรับแต่ละภาพ ทำให้ภาพเดียวสามารถอ้างอิงถึงพาเล็ตของตัวเองได้สูงสุด 256 สีที่แตกต่างกันที่เลือกจากพื้นที่สี RGB 24 บิต',
        advantages_title: 'ข้อดีหลัก',
        advantages: [
          'รองรับการเคลื่อนไหว – หลายเฟรมในไฟล์เดียว',
          'ความโปร่งใส – ความโปร่งใสสีเดียว',
          'การสนับสนุนสากล – ทำงานได้ทุกที่',
          'การบีบอัดแบบไม่สูญเสีย – ไม่มีการสูญเสียคุณภาพ',
          'ขนาดไฟล์เล็ก – มีประสิทธิภาพสำหรับกราฟิกแบบง่าย',
          'การควบคุมลูป – ลูปแอนิเมชันไม่สิ้นสุดหรือจำกัด'
        ],
        use_cases_title: 'กรณีการใช้งานที่ดีที่สุด',
        use_cases: [
          'กราฟิกแบบเคลื่อนไหว – แอนิเมชันและเอฟเฟกต์แบบง่าย',
          'โซเชียลมีเดีย – มีมและรูปภาพปฏิกิริยา',
          'กราฟิกเว็บ – ไอคอนและภาพประกอบแบบง่าย',
          'ลายเซ็นอีเมล – โลโก้และแบนเนอร์แบบเคลื่อนไหว',
          'การนำเสนอ – แผนภาพและกราฟแบบเคลื่อนไหว',
          'ส่วนติดต่อผู้ใช้ – แอนิเมชันการโหลดและตัวบ่งชี้'
        ],
        specs_title: 'ข้อมูลจำเพาะทางเทคนิค GIF',
        specs_header_label: 'ข้อมูลจำเพาะ',
        specs_header_value: 'รายละเอียด',
        specs: [
          { label: 'นามสกุลไฟล์', value: '.gif' },
          { label: 'ประเภท MIME', value: 'image/gif' },
          { label: 'การบีบอัด', value: 'การบีบอัดแบบไม่สูญเสีย LZW' },
          { label: 'การรองรับสี', value: 'สูงสุด 256 สี (พาเล็ต 8 บิต)' },
          { label: 'ความละเอียดสูงสุด', value: '6,500 × 6,500 พิกเซล' },
          { label: 'ความโปร่งใส', value: 'ความโปร่งใสสีเดียว' },
          { label: 'การเคลื่อนไหว', value: 'หลายเฟรมพร้อมการควบคุมเวลา' },
          { label: 'การสลับ', value: 'รองรับการโหลดแบบค่อยเป็นค่อยไป' }
        ],
        seo_title: 'คุณสมบัติโปรแกรมดูและตัวแปลง GIF',
        seo_intro: 'โปรแกรมดู GIF ระดับมืออาชีพของเรามีการรองรับที่ครอบคลุมสำหรับรูปภาพ GIF แบบเคลื่อนไหว รวมถึงการดูทีละเฟรม การควบคุมการเล่นและการแปลงรูปแบบ ไม่ว่าคุณจะเป็นนักออกแบบ นักพัฒนา หรือผู้สร้างเนื้อหา แพลตฟอร์มของเรามีเครื่องมือที่คุณต้องการสำหรับการจัดการรูปภาพ GIF ระดับมืออาชีพ',
        seo_viewing_title: 'คุณสมบัติการดูขั้นสูง',
        seo_viewing_text: 'ดูรูปภาพ GIF แบบเคลื่อนไหวด้วยการควบคุมการเล่นแบบเต็มรูปแบบ การนำทางเฟรมและการวิเคราะห์รายละเอียด โปรแกรมดูของเรารองรับคุณสมบัติ GIF ทั้งหมด รวมถึงการเคลื่อนไหว ความโปร่งใสและการปรับปรุงพาเล็ต เพื่อให้แน่ใจว่าการแสดงผลที่ถูกต้องของกราฟิกแบบเคลื่อนไหวของคุณ',
        seo_conversion_title: 'เครื่องมือแปลงระดับมืออาชีพ',
        seo_conversion_text: 'แปลงไฟล์ GIF เป็น WebP, MP4, PNG, JPEG และรูปแบบอื่นๆ ในขณะที่รักษาคุณภาพการเคลื่อนไหว เครื่องมือแปลงของเรามีการดึงเฟรม การตั้งค่าคุณภาพและความสามารถในการประมวลผลแบบกลุ่มสำหรับการจัดการไฟล์หลายไฟล์พร้อมกัน',
        seo_optimization_title: 'การปรับปรุงคุณภาพ',
        seo_optimization_text: 'ปรับปรุงไฟล์ GIF สำหรับการใช้งานบนเว็บด้วยเครื่องมืออัจฉริยะของเราที่ลดขนาดไฟล์ในขณะที่รักษาคุณภาพการเคลื่อนไหว เหมาะสำหรับการปรับปรุงเว็บไซต์ การแชร์โซเชียลมีเดียและไฟล์แนบอีเมลที่ขนาดไฟล์และคุณภาพมีความสำคัญ',
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          files_header: 'ไฟล์',
          add_files: '+ เพิ่ม',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'アニメーションGIFをオンラインで無料で開いて再生',
        meta_description: 'アニメーションGIFをブラウザで即座に表示・再生。ソフトウェアや登録不要。高速、安全、100%無料のオンラインGIFビューアー。今すぐお試しください！',
        meta_keywords: 'GIFビューアー、アニメーションGIF、GIFからMP4、GIFからWebP、アニメーションビューアー、フレーム抽出、ミームビューアー、バッチ処理',
        hero_title: '無料GIFビューアー',
        hero_subtitle: '再生コントロールでアニメーションGIF画像を表示および変換',
        upload_title: 'GIFファイルをアップロード',
        upload_description: 'アニメーションGIF画像をドラッグ＆ドロップするか、クリックして参照します。合計100MBまでアニメーション、透明度、フレーム抽出をサポートします。',
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
          animation_support: '✓ アニメーションサポート',
          transparency_support: '🎨 透明度サポート',
          fast_processing: '⚡ 高速処理'
        },
        features: [
          { title: 'アニメーションサポート', description: 'フレームごとの表示と再生コントロールを備えたアニメーションGIFの完全なサポート' },
          { title: 'カラー最適化', description: 'より良い品質とより小さなファイルサイズのための高度なパレット最適化' },
          { title: 'フォーマット変換', description: 'GIFをWebP、MP4に変換するか、個別のフレームをPNG/JPEGとして抽出' }
        ],
        about_title: 'GIFフォーマットについて',
        about_intro: 'GIF（Graphics Interchange Format）は、1987年にCompuServeによって開発されたビットマップ画像フォーマットです。GIF画像は、視覚品質を低下させることなくファイルサイズを減らすために、Lempel-Ziv-Welch（LZW）可逆データ圧縮技術を使用して圧縮されます。このフォーマットは、各画像に対してピクセルあたり最大8ビットをサポートし、単一の画像が24ビットRGBカラースペースから選択された最大256の異なる色の独自のパレットを参照できるようにします。',
        advantages_title: '主な利点',
        advantages: [
          'アニメーションサポート – 1つのファイルに複数のフレーム',
          '透明度 – 単色透明度',
          'ユニバーサルサポート – どこでも動作',
          '可逆圧縮 – 品質劣化なし',
          '小さなファイルサイズ – シンプルなグラフィックに効率的',
          'ループ制御 – 無限または有限のアニメーションループ'
        ],
        use_cases_title: '最適な使用例',
        use_cases: [
          'アニメーショングラフィック – シンプルなアニメーションとエフェクト',
          'ソーシャルメディア – ミームとリアクション画像',
          'Webグラフィック – アイコンとシンプルなイラスト',
          'メール署名 – アニメーションロゴとバナー',
          'プレゼンテーション – アニメーションダイアグラムとチャート',
          'ユーザーインターフェース – 読み込みアニメーションとインジケーター'
        ],
        specs_title: 'GIF技術仕様',
        specs_header_label: '仕様',
        specs_header_value: '詳細',
        specs: [
          { label: 'ファイル拡張子', value: '.gif' },
          { label: 'MIMEタイプ', value: 'image/gif' },
          { label: '圧縮', value: 'LZW可逆圧縮' },
          { label: '色サポート', value: '最大256色（8ビットパレット）' },
          { label: '最大解像度', value: '6,500 × 6,500ピクセル' },
          { label: '透明度', value: '単色透明度' },
          { label: 'アニメーション', value: 'タイミング制御付き複数フレーム' },
          { label: 'インターレース', value: 'プログレッシブ読み込みサポート' }
        ],
        seo_title: 'GIFビューアーとコンバーター機能',
        seo_intro: '私たちのプロフェッショナルGIFビューアーは、フレームごとの表示、再生コントロール、フォーマット変換を含むアニメーションGIF画像の包括的なサポートを提供します。デザイナー、開発者、コンテンツ作成者を問わず、当社のプラットフォームはプロフェッショナルなGIF画像処理に必要なツールを提供します。',
        seo_viewing_title: '高度な表示機能',
        seo_viewing_text: '完全な再生コントロール、フレームナビゲーション、詳細な分析でアニメーションGIF画像を表示します。当社のビューアーは、アニメーション、透明度、パレット最適化を含むすべてのGIF機能をサポートし、アニメーショングラフィックの正確な表現を保証します。',
        seo_conversion_title: 'プロフェッショナル変換ツール',
        seo_conversion_text: 'アニメーション品質を維持しながら、GIFファイルをWebP、MP4、PNG、JPEG、その他のフォーマットに変換します。当社の変換エンジンは、複数のファイルを同時に処理するためのフレーム抽出、品質設定、バッチ処理機能を提供します。',
        seo_optimization_title: '品質最適化',
        seo_optimization_text: 'アニメーション品質を維持しながらファイルサイズを削減するスマートツールを使用して、GIFファイルをWeb使用向けに最適化します。ファイルサイズと品質が重要なWebサイト最適化、ソーシャルメディア共有、メール添付に最適です。',
        editor: {
          toggle_sidebar: 'サイドバーの切り替え',
          close: '閉じる (Esc)',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          files_header: 'ファイル',
          add_files: '+ 追加',
          format_badge: 'GIF',
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
      gif: {
        meta_title: '在线免费打开和播放动画GIF',
        meta_description: '在浏览器中即时查看和播放动画GIF。无需软件或注册。快速、安全、100%免费的在线GIF查看器。立即试用！',
        meta_keywords: 'GIF查看器，动画GIF，GIF转MP4，GIF转WebP，动画查看器，帧提取，表情包查看器，批量处理',
        hero_title: '免费GIF查看器',
        hero_subtitle: '使用播放控制查看和转换动画GIF图片',
        upload_title: '上传GIF文件',
        upload_description: '拖放您的动画GIF图片或点击浏览。支持动画、透明度和帧提取，总计最多100MB。',
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
          animation_support: '✓ 动画支持',
          transparency_support: '🎨 透明度支持',
          fast_processing: '⚡ 快速处理'
        },
        features: [
          { title: '动画支持', description: '完全支持动画GIF，具有逐帧查看和播放控制功能' },
          { title: '颜色优化', description: '高级调色板优化，提供更好的质量和更小的文件大小' },
          { title: '格式转换', description: '将GIF转换为WebP、MP4或将单个帧提取为PNG/JPEG' }
        ],
        about_title: '关于GIF格式',
        about_intro: 'GIF（图形交换格式）是由CompuServe于1987年开发的位图图像格式。GIF图像使用Lempel-Ziv-Welch（LZW）无损数据压缩技术进行压缩，以在不降低视觉质量的情况下减小文件大小。该格式支持每个图像每个像素最多8位，允许单个图像引用其自己的调色板，最多256种从24位RGB颜色空间中选择的不同颜色。',
        advantages_title: '主要优势',
        advantages: [
          '动画支持 – 一个文件中的多个帧',
          '透明度 – 单色透明度',
          '通用支持 – 随处可用',
          '无损压缩 – 无质量损失',
          '文件大小小 – 对简单图形高效',
          '循环控制 – 无限或有限动画循环'
        ],
        use_cases_title: '最佳使用场景',
        use_cases: [
          '动画图形 – 简单的动画和效果',
          '社交媒体 – 表情包和反应图片',
          '网页图形 – 图标和简单插图',
          '电子邮件签名 – 动画徽标和横幅',
          '演示文稿 – 动画图表和图形',
          '用户界面 – 加载动画和指示器'
        ],
        specs_title: 'GIF技术规格',
        specs_header_label: '规格',
        specs_header_value: '详情',
        specs: [
          { label: '文件扩展名', value: '.gif' },
          { label: 'MIME类型', value: 'image/gif' },
          { label: '压缩', value: 'LZW无损压缩' },
          { label: '颜色支持', value: '最多256种颜色（8位调色板）' },
          { label: '最大分辨率', value: '6,500 × 6,500像素' },
          { label: '透明度', value: '单色透明度' },
          { label: '动画', value: '带时间控制的多个帧' },
          { label: '隔行扫描', value: '支持渐进式加载' }
        ],
        seo_title: 'GIF查看器和转换器功能',
        seo_intro: '我们的专业GIF查看器为动画GIF图片提供全面支持，包括逐帧查看、播放控制和格式转换。无论您是设计师、开发人员还是内容创作者，我们的平台都提供您进行专业GIF图片处理所需的工具。',
        seo_viewing_title: '高级查看功能',
        seo_viewing_text: '使用完整的播放控制、帧导航和详细分析查看动画GIF图片。我们的查看器支持所有GIF功能，包括动画、透明度和调色板优化，确保准确表示您的动画图形。',
        seo_conversion_title: '专业转换工具',
        seo_conversion_text: '在保持动画质量的同时，将GIF文件转换为WebP、MP4、PNG、JPEG和其他格式。我们的转换引擎提供帧提取、质量设置和批处理功能，可同时处理多个文件。',
        seo_optimization_title: '质量优化',
        seo_optimization_text: '使用我们的智能工具优化GIF文件用于网络使用，这些工具可在保持动画质量的同时减小文件大小。非常适合网站优化、社交媒体分享和电子邮件附件，其中文件大小和质量很重要。',
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭 (Esc)',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          files_header: '文件',
          add_files: '+ 添加',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Buka & Putar GIF Animasi Online Gratis',
        meta_description: 'Lihat dan putar GIF animasi secara instan di browser Anda. Tidak perlu software atau pendaftaran. Penampil GIF online yang cepat, aman, dan 100% gratis. Coba sekarang!',
        meta_keywords: 'penampil GIF, GIF animasi, GIF ke MP4, GIF ke WebP, penampil animasi, ekstraksi frame, penampil meme, pemrosesan batch',
        hero_title: 'Penampil GIF Gratis',
        hero_subtitle: 'Lihat dan konversi gambar GIF animasi dengan kontrol pemutaran',
        upload_title: 'Unggah File GIF',
        upload_description: 'Seret dan lepas gambar GIF animasi Anda atau klik untuk menjelajah. Mendukung animasi, transparansi, dan ekstraksi frame hingga 100MB total.',
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
          animation_support: '✓ Dukungan Animasi',
          transparency_support: '🎨 Dukungan Transparansi',
          fast_processing: '⚡ Pemrosesan Cepat'
        },
        features: [
          { title: 'Dukungan Animasi', description: 'Dukungan penuh untuk GIF animasi dengan tampilan frame per frame dan kontrol pemutaran' },
          { title: 'Optimisasi Warna', description: 'Optimisasi palet lanjutan untuk kualitas yang lebih baik dan ukuran file yang lebih kecil' },
          { title: 'Konversi Format', description: 'Konversi GIF ke WebP, MP4 atau ekstrak frame individual sebagai PNG/JPEG' }
        ],
        about_title: 'Tentang Format GIF',
        about_intro: 'GIF (Graphics Interchange Format) adalah format gambar bitmap yang dikembangkan oleh CompuServe pada tahun 1987. Gambar GIF dikompresi menggunakan teknik kompresi data tanpa loss Lempel-Ziv-Welch (LZW) untuk mengurangi ukuran file tanpa menurunkan kualitas visual. Format ini mendukung hingga 8 bit per piksel untuk setiap gambar, memungkinkan satu gambar untuk mereferensikan paletnya sendiri hingga 256 warna berbeda yang dipilih dari ruang warna RGB 24-bit.',
        advantages_title: 'Keuntungan Utama',
        advantages: [
          'Dukungan animasi – Beberapa frame dalam satu file',
          'Transparansi – Transparansi satu warna',
          'Dukungan universal – Berfungsi di mana saja',
          'Kompresi tanpa loss – Tidak ada penurunan kualitas',
          'Ukuran file kecil – Efisien untuk grafik sederhana',
          'Kontrol loop – Loop animasi tak terbatas atau terbatas'
        ],
        use_cases_title: 'Kasus Penggunaan Terbaik',
        use_cases: [
          'Grafik animasi – Animasi dan efek sederhana',
          'Media sosial – Meme dan gambar reaksi',
          'Grafik web – Ikon dan ilustrasi sederhana',
          'Tanda tangan email – Logo dan banner animasi',
          'Presentasi – Diagram dan grafik animasi',
          'Antarmuka pengguna – Animasi pemuatan dan indikator'
        ],
        specs_title: 'Spesifikasi Teknis GIF',
        specs_header_label: 'Spesifikasi',
        specs_header_value: 'Detail',
        specs: [
          { label: 'Ekstensi File', value: '.gif' },
          { label: 'Tipe MIME', value: 'image/gif' },
          { label: 'Kompresi', value: 'Kompresi tanpa loss LZW' },
          { label: 'Dukungan Warna', value: 'Hingga 256 warna (palet 8 bit)' },
          { label: 'Resolusi Maksimum', value: '6,500 × 6,500 piksel' },
          { label: 'Transparansi', value: 'Transparansi satu warna' },
          { label: 'Animasi', value: 'Beberapa frame dengan kontrol waktu' },
          { label: 'Interlacing', value: 'Dukungan pemuatan progresif' }
        ],
        seo_title: 'Fitur Penampil dan Konverter GIF',
        seo_intro: 'Penampil GIF profesional kami menyediakan dukungan komprehensif untuk gambar GIF animasi, termasuk tampilan frame per frame, kontrol pemutaran, dan konversi format. Baik Anda seorang desainer, pengembang, atau pembuat konten, platform kami menawarkan alat yang Anda butuhkan untuk penanganan gambar GIF profesional.',
        seo_viewing_title: 'Fitur Tampilan Lanjutan',
        seo_viewing_text: 'Lihat gambar GIF animasi dengan kontrol pemutaran lengkap, navigasi frame, dan analisis detail. Penampil kami mendukung semua fitur GIF, termasuk animasi, transparansi, dan optimisasi palet, memastikan representasi akurat dari grafik animasi Anda.',
        seo_conversion_title: 'Alat Konversi Profesional',
        seo_conversion_text: 'Konversi file GIF ke WebP, MP4, PNG, JPEG, dan format lain sambil mempertahankan kualitas animasi. Mesin konversi kami menawarkan ekstraksi frame, pengaturan kualitas, dan kemampuan pemrosesan batch untuk menangani beberapa file secara bersamaan.',
        seo_optimization_title: 'Optimisasi Kualitas',
        seo_optimization_text: 'Optimalkan file GIF untuk penggunaan web dengan alat pintar kami yang mengurangi ukuran file sambil mempertahankan kualitas animasi. Sempurna untuk optimisasi situs web, berbagi media sosial, dan lampiran email di mana ukuran file dan kualitas penting.',
        editor: {
          toggle_sidebar: 'Alihkan Bilah Samping',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup Bilah Samping',
          search_placeholder: 'Cari file...',
          files_header: 'File',
          add_files: '+ Tambah',
          format_badge: 'GIF',
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
      gif: {
        meta_title: 'Öppna och Spela Animerade GIFs Online Gratis',
        meta_description: 'Visa och spela animerade GIFs direkt i din webbläsare. Ingen programvara eller registrering krävs. En snabb, säker och 100% gratis online GIF-visare. Prova nu!',
        meta_keywords: 'GIF-visare, animerad GIF, GIF till MP4, GIF till WebP, animationsvisare, frame-extraktion, meme-visare, batchbearbetning',
        hero_title: 'Gratis GIF-visare',
        hero_subtitle: 'Visa och konvertera animerade GIF-bilder med uppspelningskontroller',
        upload_title: 'Ladda Upp GIF-filer',
        upload_description: 'Dra och släpp dina animerade GIF-bilder eller klicka för att bläddra. Stöder animationer, transparens och frame-extraktion upp till 100MB totalt.',
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
          animation_support: '✓ Animationsstöd',
          transparency_support: '🎨 Transparensstöd',
          fast_processing: '⚡ Snabb Bearbetning'
        },
        features: [
          { title: 'Animationsstöd', description: 'Fullständigt stöd för animerade GIFs med frame-för-frame-visning och uppspelningskontroller' },
          { title: 'Färgoptimering', description: 'Avancerad palettoptimering för bättre kvalitet och mindre filstorlekar' },
          { title: 'Formatskonvertering', description: 'Konvertera GIF till WebP, MP4 eller extrahera enskilda frames som PNG/JPEG' }
        ],
        about_title: 'Om GIF-formatet',
        about_intro: 'GIF (Graphics Interchange Format) är ett bitmap-bildformat som utvecklades av CompuServe 1987. GIF-bilder komprimeras med Lempel-Ziv-Welch (LZW) förlustfri datakomprimeringsmetod för att minska filstorleken utan att försämra den visuella kvaliteten. Formatet stöder upp till 8 bitar per pixel för varje bild, vilket gör att en enda bild kan referera till sin egen palett med upp till 256 olika färger valda från 24-bitars RGB-färgrymden.',
        advantages_title: 'Huvudfördelar',
        advantages: [
          'Animationsstöd – Flera frames i en fil',
          'Transparens – Enfärgad transparens',
          'Universellt stöd – Fungerar överallt',
          'Förlustfri komprimering – Ingen kvalitetsförsämring',
          'Små filstorlekar – Effektivt för enkla grafik',
          'Loopkontroll – Oändliga eller ändliga animationsloopar'
        ],
        use_cases_title: 'Bästa Användningsfall',
        use_cases: [
          'Animerad grafik – Enkla animationer och effekter',
          'Sociala medier – Memes och reaktionsbilder',
          'Webbgrafik – Ikoner och enkla illustrationer',
          'E-postsignaturer – Animerade logotyper och banderoller',
          'Presentationer – Animerade diagram och diagram',
          'Användargränssnitt – Laddningsanimationer och indikatorer'
        ],
        specs_title: 'GIF Tekniska Specifikationer',
        specs_header_label: 'Specifikation',
        specs_header_value: 'Detaljer',
        specs: [
          { label: 'Filändelse', value: '.gif' },
          { label: 'MIME-typ', value: 'image/gif' },
          { label: 'Komprimering', value: 'LZW förlustfri komprimering' },
          { label: 'Färgstöd', value: 'Upp till 256 färger (8-bitars palett)' },
          { label: 'Maximal Upplösning', value: '6,500 × 6,500 pixlar' },
          { label: 'Transparens', value: 'Enfärgad transparens' },
          { label: 'Animation', value: 'Flera frames med tidskontroll' },
          { label: 'Interlacing', value: 'Stöd för progressiv laddning' }
        ],
        seo_title: 'GIF-visare och Konverteringsfunktioner',
        seo_intro: 'Vår professionella GIF-visare ger omfattande stöd för animerade GIF-bilder, inklusive frame-för-frame-visning, uppspelningskontroller och formatskonvertering. Oavsett om du är designer, utvecklare eller innehållsskapare, erbjuder vår plattform de verktyg du behöver för professionell GIF-bildhantering.',
        seo_viewing_title: 'Avancerade Visningsfunktioner',
        seo_viewing_text: 'Visa animerade GIF-bilder med fullständiga uppspelningskontroller, frame-navigering och detaljerad analys. Vår visare stöder alla GIF-funktioner, inklusive animation, transparens och palettoptimering, vilket säkerställer en korrekt representation av dina animerade grafik.',
        seo_conversion_title: 'Professionella Konverteringsverktyg',
        seo_conversion_text: 'Konvertera GIF-filer till WebP, MP4, PNG, JPEG och andra format samtidigt som animationskvaliteten bibehålls. Vår konverteringsmotor erbjuder frame-extraktion, kvalitetsinställningar och batchbearbetningsfunktioner för att hantera flera filer samtidigt.',
        seo_optimization_title: 'Kvalitetsoptimering',
        seo_optimization_text: 'Optimera GIF-filer för webbanvändning med våra smarta verktyg som minskar filstorlekar samtidigt som animationskvaliteten bevaras. Perfekt för webbplatsoptimering, sociala medier-delning och e-postbilagor där filstorlek och kvalitet spelar roll.',
        editor: {
          toggle_sidebar: 'Växla Sidofält',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng Sidofält',
          search_placeholder: 'Sök filer...',
          files_header: 'Filer',
          add_files: '+ Lägg Till',
          format_badge: 'GIF',
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


