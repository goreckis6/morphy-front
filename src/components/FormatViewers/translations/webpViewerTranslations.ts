import i18n from '../../../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type WebPViewerTranslations = {
  viewers: {
    webp: {
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
        modern_format: string;
        superior_compression: string;
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

const resources: Record<string, WebPViewerTranslations> = {
  en: {
    viewers: {
      webp: {
        meta_title: 'FREE WebP Viewer Online - Open WebP Files Instantly',
        meta_description: 'Need to open a WebP file? Use our FREE online viewer to see WebP images instantly without any download or software installation. Secure and compatible.',
        meta_keywords: 'WebP viewer, WebP to JPG, WebP to PNG, image viewer, web optimization, lossless compression, transparency, batch processing',
        hero_title: 'Free WebP Viewer',
        hero_subtitle: 'View and convert WebP images with modern compression',
        upload_title: 'Upload WebP Files',
        upload_description: 'Drag and drop your WebP images or click to browse. Supports modern compression and transparency up to 100MB total.',
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
          modern_format: '✓ Modern Format',
          superior_compression: '⚡ Superior Compression',
          high_quality: '🎨 High Quality'
        },
        features: [
          { title: 'Superior Compression', description: 'WebP provides 25-35% better compression than JPEG while maintaining quality' },
          { title: 'Transparency Support', description: 'Full alpha channel support for transparent images, perfect for web graphics' },
          { title: 'Animation Support', description: 'Create animated WebP images with smaller file sizes than GIF' }
        ],
        about_title: 'About WebP Format',
        about_intro: 'WebP is a modern image format developed by Google that provides superior lossless and lossy compression for images on the web. Using WebP, webmasters and web developers can create smaller, richer images that make the web faster. WebP lossless images are 26% smaller in size compared to PNGs, and WebP lossy images are 25-35% smaller than comparable JPEG images.',
        advantages_title: 'Key Advantages',
        advantages: [
          'Superior compression – 25-35% smaller than JPEG',
          'Transparency support – Full alpha channel like PNG',
          'Animation support – Smaller than GIF with better quality',
          'Modern format – Developed by Google for web optimization',
          'Lossless option – No quality loss when needed',
          'Wide browser support – Supported by all modern browsers'
        ],
        use_cases_title: 'Best Use Cases',
        use_cases: [
          'Web optimization – Faster loading websites',
          'E-commerce – Product images with transparency',
          'Social media – Smaller file sizes for sharing',
          'Mobile apps – Reduced data usage',
          'Web graphics – Logos and icons with transparency',
          'Animated images – Better than GIF for web'
        ],
        specs_title: 'WebP Technical Specifications',
        specs_header_label: 'Specification',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.webp' },
          { label: 'MIME Type', value: 'image/webp' },
          { label: 'Compression', value: 'Lossy and lossless compression' },
          { label: 'Color Support', value: 'RGB, RGBA, YUV color spaces' },
          { label: 'Transparency', value: 'Alpha channel support' },
          { label: 'Animation', value: 'Animated WebP support' },
          { label: 'Maximum Resolution', value: '16,383 × 16,383 pixels' },
          { label: 'Metadata', value: 'EXIF and XMP metadata support' }
        ],
        seo_title: 'WebP Viewer and Converter Features',
        seo_intro: 'Our professional WebP viewer and converter provides comprehensive support for WebP images including lossy and lossless compression, transparency, and animation. Whether you\'re a web developer, designer, or content creator, our platform offers the tools you need for modern web image optimization.',
        seo_viewing_title: 'Advanced Viewing Features',
        seo_viewing_text: 'View WebP images with pixel-perfect accuracy, zoom capabilities, and detailed metadata display. Our viewer supports all WebP features including transparency, animation, and both lossy and lossless compression modes, ensuring accurate representation of your images.',
        seo_conversion_title: 'Professional Conversion Tools',
        seo_conversion_text: 'Convert WebP files to JPEG, PNG, GIF, and other formats while maintaining optimal quality. Our conversion engine offers adjustable quality settings, transparency preservation, and batch processing capabilities for handling multiple files simultaneously.',
        seo_optimization_title: 'Quality Optimization',
        seo_optimization_text: 'Optimize WebP files for web use with our smart compression algorithms that reduce file sizes by up to 35% compared to JPEG while preserving visual quality. Perfect for website optimization, mobile apps, and social media sharing where file size and quality matter.',
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          files_header: 'Files',
          add_files: '+ Add',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'DARMOWY Podgląd WebP Online - Otwórz Pliki WebP Natychmiast',
        meta_description: 'Musisz otworzyć plik WebP? Użyj naszego DARMOWEGO podglądu online, aby zobaczyć obrazy WebP natychmiast bez pobierania lub instalacji oprogramowania. Bezpieczne i kompatybilne.',
        meta_keywords: 'podgląd WebP, WebP do JPG, WebP do PNG, podgląd obrazów, optymalizacja internetowa, kompresja bezstratna, przezroczystość, przetwarzanie wsadowe',
        hero_title: 'Darmowy Podgląd WebP',
        hero_subtitle: 'Wyświetlaj i konwertuj obrazy WebP z nowoczesną kompresją',
        upload_title: 'Prześlij pliki WebP',
        upload_description: 'Przeciągnij i upuść swoje obrazy WebP lub kliknij, aby przeglądać. Obsługuje nowoczesną kompresję i przezroczystość do 100MB łącznie.',
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
          modern_format: '✓ Nowoczesny Format',
          superior_compression: '⚡ Doskonała Kompresja',
          high_quality: '🎨 Wysoka Jakość'
        },
        features: [
          { title: 'Doskonała kompresja', description: 'WebP zapewnia 25-35% lepszą kompresję niż JPEG przy zachowaniu jakości' },
          { title: 'Obsługa przezroczystości', description: 'Pełne wsparcie kanału alfa dla przezroczystych obrazów, idealne do grafiki internetowej' },
          { title: 'Obsługa animacji', description: 'Twórz animowane obrazy WebP z mniejszymi rozmiarami plików niż GIF' }
        ],
        about_title: 'O formacie WebP',
        about_intro: 'WebP to nowoczesny format obrazu opracowany przez Google, który zapewnia doskonałą kompresję bezstratną i stratną dla obrazów w internecie. Używając WebP, webmasterzy i programiści mogą tworzyć mniejsze, bogatsze obrazy, które przyspieszają internet. Obrazy WebP bezstratne są o 26% mniejsze w rozmiarze w porównaniu z PNG, a obrazy WebP stratne są o 25-35% mniejsze niż porównywalne obrazy JPEG.',
        advantages_title: 'Kluczowe zalety',
        advantages: [
          'Doskonała kompresja – 25-35% mniejsze niż JPEG',
          'Obsługa przezroczystości – Pełny kanał alfa jak PNG',
          'Obsługa animacji – Mniejsze niż GIF z lepszą jakością',
          'Nowoczesny format – Opracowany przez Google dla optymalizacji internetowej',
          'Opcja bezstratna – Brak utraty jakości gdy potrzebne',
          'Szerokie wsparcie przeglądarek – Obsługiwane przez wszystkie nowoczesne przeglądarki'
        ],
        use_cases_title: 'Najlepsze zastosowania',
        use_cases: [
          'Optymalizacja internetowa – Szybsze ładowanie stron',
          'E-commerce – Obrazy produktów z przezroczystością',
          'Media społecznościowe – Mniejsze rozmiary plików do udostępniania',
          'Aplikacje mobilne – Zmniejszone zużycie danych',
          'Grafika internetowa – Loga i ikony z przezroczystością',
          'Obrazy animowane – Lepsze niż GIF dla internetu'
        ],
        specs_title: 'Specyfikacja techniczna WebP',
        specs_header_label: 'Parametr',
        specs_header_value: 'Wartość',
        specs: [
          { label: 'Rozszerzenie pliku', value: '.webp' },
          { label: 'Typ MIME', value: 'image/webp' },
          { label: 'Kompresja', value: 'Kompresja stratna i bezstratna' },
          { label: 'Obsługa kolorów', value: 'Przestrzenie barw RGB, RGBA, YUV' },
          { label: 'Przezroczystość', value: 'Obsługa kanału alfa' },
          { label: 'Animacja', value: 'Obsługa animowanego WebP' },
          { label: 'Maksymalna rozdzielczość', value: '16,383 × 16,383 pikseli' },
          { label: 'Metadane', value: 'Obsługa metadanych EXIF i XMP' }
        ],
        seo_title: 'Funkcje przeglądarki i konwertera WebP',
        seo_intro: 'Nasz profesjonalny podgląd i konwerter WebP zapewnia kompleksowe wsparcie dla obrazów WebP, w tym kompresję stratną i bezstratną, przezroczystość i animację. Niezależnie od tego, czy jesteś web developerem, projektantem czy twórcą treści, nasza platforma oferuje narzędzia potrzebne do nowoczesnej optymalizacji obrazów internetowych.',
        seo_viewing_title: 'Zaawansowane funkcje podglądu',
        seo_viewing_text: 'Wyświetlaj obrazy WebP z dokładnością do piksela, możliwościami powiększania i szczegółowym wyświetlaniem metadanych. Nasz podgląd obsługuje wszystkie funkcje WebP, w tym przezroczystość, animację oraz tryby kompresji stratnej i bezstratnej, zapewniając dokładną reprezentację Twoich obrazów.',
        seo_conversion_title: 'Profesjonalne narzędzia konwersji',
        seo_conversion_text: 'Konwertuj pliki WebP do JPEG, PNG, GIF i innych formatów przy zachowaniu optymalnej jakości. Nasz silnik konwersji oferuje regulowane ustawienia jakości, zachowanie przezroczystości i możliwości przetwarzania wsadowego do obsługi wielu plików jednocześnie.',
        seo_optimization_title: 'Optymalizacja jakości',
        seo_optimization_text: 'Optymalizuj pliki WebP do użycia w internecie dzięki naszym inteligentnym algorytmom kompresji, które zmniejszają rozmiary plików nawet o 35% w porównaniu z JPEG, zachowując jakość wizualną. Idealne do optymalizacji stron internetowych, aplikacji mobilnych i udostępniania w mediach społecznościowych, gdzie rozmiar pliku i jakość mają znaczenie.',
        editor: {
          toggle_sidebar: 'Przełącz Panel',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij Panel',
          search_placeholder: 'Szukaj plików...',
          files_header: 'Pliki',
          add_files: '+ Dodaj',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'KOSTENLOSER WebP Viewer Online - Öffnen Sie WebP-Dateien Sofort',
        meta_description: 'Müssen Sie eine WebP-Datei öffnen? Verwenden Sie unseren KOSTENLOSEN Online-Viewer, um WebP-Bilder sofort ohne Download oder Softwareinstallation anzuzeigen. Sicher und kompatibel.',
        meta_keywords: 'WebP Viewer, WebP zu JPG, WebP zu PNG, Bildbetrachter, Web-Optimierung, verlustfreie Kompression, Transparenz, Stapelverarbeitung',
        hero_title: 'Kostenloser WebP-Viewer',
        hero_subtitle: 'WebP-Bilder mit moderner Kompression anzeigen und konvertieren',
        upload_title: 'WebP-Dateien hochladen',
        upload_description: 'Ziehen Sie Ihre WebP-Bilder hierher oder klicken Sie zum Auswählen. Unterstützt moderne Kompression und Transparenz bis zu 100MB insgesamt.',
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
          modern_format: '✓ Modernes Format',
          superior_compression: '⚡ Überlegene Kompression',
          high_quality: '🎨 Hohe Qualität'
        },
        features: [
          { title: 'Überlegene Kompression', description: 'WebP bietet 25-35% bessere Kompression als JPEG bei gleicher Qualität' },
          { title: 'Transparenzunterstützung', description: 'Vollständige Alpha-Kanal-Unterstützung für transparente Bilder, perfekt für Web-Grafiken' },
          { title: 'Animationsunterstützung', description: 'Erstellen Sie animierte WebP-Bilder mit kleineren Dateigrößen als GIF' }
        ],
        about_title: 'Informationen zum WebP-Format',
        about_intro: 'WebP ist ein modernes Bildformat, das von Google entwickelt wurde und überlegene verlustfreie und verlustbehaftete Kompression für Bilder im Web bietet. Mit WebP können Webmaster und Webentwickler kleinere, reichhaltigere Bilder erstellen, die das Web schneller machen. WebP-Verlustfreie Bilder sind 26% kleiner als PNGs, und WebP-Verlustbehaftete Bilder sind 25-35% kleiner als vergleichbare JPEG-Bilder.',
        advantages_title: 'Wichtigste Vorteile',
        advantages: [
          'Überlegene Kompression – 25-35% kleiner als JPEG',
          'Transparenzunterstützung – Vollständiger Alpha-Kanal wie PNG',
          'Animationsunterstützung – Kleiner als GIF mit besserer Qualität',
          'Modernes Format – Von Google für Web-Optimierung entwickelt',
          'Verlustfreie Option – Kein Qualitätsverlust bei Bedarf',
          'Breite Browserunterstützung – Unterstützt von allen modernen Browsern'
        ],
        use_cases_title: 'Beste Anwendungsfälle',
        use_cases: [
          'Web-Optimierung – Schneller ladende Websites',
          'E-Commerce – Produktbilder mit Transparenz',
          'Soziale Medien – Kleinere Dateigrößen zum Teilen',
          'Mobile Apps – Reduzierter Datenverbrauch',
          'Web-Grafiken – Logos und Symbole mit Transparenz',
          'Animierte Bilder – Besser als GIF für das Web'
        ],
        specs_title: 'Technische WebP-Spezifikationen',
        specs_header_label: 'Eigenschaft',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateierweiterung', value: '.webp' },
          { label: 'MIME-Typ', value: 'image/webp' },
          { label: 'Kompression', value: 'Verlustbehaftete und verlustfreie Kompression' },
          { label: 'Farbunterstützung', value: 'RGB-, RGBA-, YUV-Farbräume' },
          { label: 'Transparenz', value: 'Alpha-Kanal-Unterstützung' },
          { label: 'Animation', value: 'Animiertes WebP unterstützt' },
          { label: 'Maximale Auflösung', value: '16.383 × 16.383 Pixel' },
          { label: 'Metadaten', value: 'EXIF- und XMP-Metadaten unterstützt' }
        ],
        seo_title: 'WebP-Viewer und Konverter-Funktionen',
        seo_intro: 'Unser professioneller WebP-Viewer und Konverter bietet umfassende Unterstützung für WebP-Bilder, einschließlich verlustbehafteter und verlustfreier Kompression, Transparenz und Animation. Egal ob Sie Webentwickler, Designer oder Content-Ersteller sind, unsere Plattform bietet die Tools, die Sie für moderne Web-Bildoptimierung benötigen.',
        seo_viewing_title: 'Erweiterte Anzeigefunktionen',
        seo_viewing_text: 'Zeigen Sie WebP-Bilder mit pixelgenauer Genauigkeit, Zoom-Funktionen und detaillierter Metadatenanzeige. Unser Viewer unterstützt alle WebP-Funktionen, einschließlich Transparenz, Animation und sowohl verlustbehaftete als auch verlustfreie Komprimierungsmodi, um eine genaue Darstellung Ihrer Bilder zu gewährleisten.',
        seo_conversion_title: 'Professionelle Konvertierungstools',
        seo_conversion_text: 'Konvertieren Sie WebP-Dateien in JPEG, PNG, GIF und andere Formate bei optimaler Qualität. Unsere Konvertierungs-Engine bietet einstellbare Qualitätseinstellungen, Transparenzerhaltung und Stapelverarbeitungsfunktionen für die gleichzeitige Bearbeitung mehrerer Dateien.',
        seo_optimization_title: 'Qualitätsoptimierung',
        seo_optimization_text: 'Optimieren Sie WebP-Dateien für die Webnutzung mit unseren intelligenten Komprimierungsalgorithmen, die Dateigrößen um bis zu 35% im Vergleich zu JPEG reduzieren, während die visuelle Qualität erhalten bleibt. Perfekt für Website-Optimierung, Mobile Apps und Social-Media-Sharing, wo Dateigröße und Qualität wichtig sind.',
        editor: {
          toggle_sidebar: 'Sidebar Umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Sidebar Schließen',
          search_placeholder: 'Dateien suchen...',
          files_header: 'Dateien',
          add_files: '+ Hinzufügen',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'VISOR WebP GRATIS Online - Abre Archivos WebP Instantáneamente',
        meta_description: '¿Necesitas abrir un archivo WebP? Usa nuestro VISOR GRATIS online para ver imágenes WebP instantáneamente sin descarga ni instalación de software. Seguro y compatible.',
        meta_keywords: 'visor WebP, WebP a JPG, WebP a PNG, visor de imágenes, optimización web, compresión sin pérdidas, transparencia, procesamiento por lotes',
        hero_title: 'Visor WebP Gratis',
        hero_subtitle: 'Ver y convertir imágenes WebP con compresión moderna',
        upload_title: 'Subir Archivos WebP',
        upload_description: 'Arrastra y suelta tus imágenes WebP o haz clic para explorar. Soporta compresión moderna y transparencia hasta 100MB en total.',
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
          modern_format: '✓ Formato Moderno',
          superior_compression: '⚡ Compresión Superior',
          high_quality: '🎨 Alta Calidad'
        },
        features: [
          { title: 'Compresión Superior', description: 'WebP proporciona 25-35% mejor compresión que JPEG manteniendo la calidad' },
          { title: 'Soporte de Transparencia', description: 'Soporte completo de canal alfa para imágenes transparentes, perfecto para gráficos web' },
          { title: 'Soporte de Animación', description: 'Crear imágenes WebP animadas con tamaños de archivo más pequeños que GIF' }
        ],
        about_title: 'Acerca del Formato WebP',
        about_intro: 'WebP es un formato de imagen moderno desarrollado por Google que proporciona compresión sin pérdidas y con pérdidas superior para imágenes en la web. Usando WebP, los webmasters y desarrolladores web pueden crear imágenes más pequeñas y ricas que hacen que la web sea más rápida. Las imágenes WebP sin pérdidas son 26% más pequeñas en tamaño en comparación con PNGs, y las imágenes WebP con pérdidas son 25-35% más pequeñas que las imágenes JPEG comparables.',
        advantages_title: 'Ventajas Clave',
        advantages: [
          'Compresión superior – 25-35% más pequeño que JPEG',
          'Soporte de transparencia – Canal alfa completo como PNG',
          'Soporte de animación – Más pequeño que GIF con mejor calidad',
          'Formato moderno – Desarrollado por Google para optimización web',
          'Opción sin pérdidas – Sin pérdida de calidad cuando se necesita',
          'Amplio soporte de navegadores – Compatible con todos los navegadores modernos'
        ],
        use_cases_title: 'Mejores Casos de Uso',
        use_cases: [
          'Optimización web – Sitios web de carga más rápida',
          'E-commerce – Imágenes de productos con transparencia',
          'Redes sociales – Tamaños de archivo más pequeños para compartir',
          'Aplicaciones móviles – Uso de datos reducido',
          'Gráficos web – Logos e iconos con transparencia',
          'Imágenes animadas – Mejor que GIF para web'
        ],
        specs_title: 'Especificaciones Técnicas WebP',
        specs_header_label: 'Especificación',
        specs_header_value: 'Detalles',
        specs: [
          { label: 'Extensión de Archivo', value: '.webp' },
          { label: 'Tipo MIME', value: 'image/webp' },
          { label: 'Compresión', value: 'Compresión con pérdidas y sin pérdidas' },
          { label: 'Soporte de Color', value: 'Espacios de color RGB, RGBA, YUV' },
          { label: 'Transparencia', value: 'Soporte de canal alfa' },
          { label: 'Animación', value: 'Soporte de WebP animado' },
          { label: 'Resolución Máxima', value: '16,383 × 16,383 píxeles' },
          { label: 'Metadatos', value: 'Soporte de metadatos EXIF y XMP' }
        ],
        seo_title: 'Características del Visor y Convertidor WebP',
        seo_intro: 'Nuestro visor y convertidor WebP profesional proporciona soporte completo para imágenes WebP, incluyendo compresión con pérdidas y sin pérdidas, transparencia y animación. Ya seas desarrollador web, diseñador o creador de contenido, nuestra plataforma ofrece las herramientas que necesitas para la optimización moderna de imágenes web.',
        seo_viewing_title: 'Características Avanzadas de Visualización',
        seo_viewing_text: 'Ver imágenes WebP con precisión perfecta de píxeles, capacidades de zoom y visualización detallada de metadatos. Nuestro visor soporta todas las características WebP, incluyendo transparencia, animación y modos de compresión con pérdidas y sin pérdidas, asegurando una representación precisa de tus imágenes.',
        seo_conversion_title: 'Herramientas de Conversión Profesionales',
        seo_conversion_text: 'Convertir archivos WebP a JPEG, PNG, GIF y otros formatos manteniendo una calidad óptima. Nuestro motor de conversión ofrece configuraciones de calidad ajustables, preservación de transparencia y capacidades de procesamiento por lotes para manejar múltiples archivos simultáneamente.',
        seo_optimization_title: 'Optimización de Calidad',
        seo_optimization_text: 'Optimiza archivos WebP para uso web con nuestros algoritmos de compresión inteligentes que reducen los tamaños de archivo hasta en un 35% en comparación con JPEG mientras preservan la calidad visual. Perfecto para optimización de sitios web, aplicaciones móviles y compartir en redes sociales donde el tamaño del archivo y la calidad importan.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar Barra Lateral',
          search_placeholder: 'Buscar archivos...',
          files_header: 'Archivos',
          add_files: '+ Añadir',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'VISIONNEUSE WebP GRATUITE en Ligne - Ouvrir les Fichiers WebP Instantanément',
        meta_description: 'Besoin d\'ouvrir un fichier WebP? Utilisez notre VISIONNEUSE GRATUITE en ligne pour voir les images WebP instantanément sans téléchargement ni installation de logiciel. Sécurisé et compatible.',
        meta_keywords: 'visionneuse WebP, WebP vers JPG, WebP vers PNG, visionneuse d\'images, optimisation web, compression sans perte, transparence, traitement par lots',
        hero_title: 'Visionneuse WebP Gratuite',
        hero_subtitle: 'Voir et convertir les images WebP avec compression moderne',
        upload_title: 'Télécharger des Fichiers WebP',
        upload_description: 'Glissez-déposez vos images WebP ou cliquez pour parcourir. Prend en charge la compression moderne et la transparence jusqu\'à 100 Mo au total.',
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
          modern_format: '✓ Format Moderne',
          superior_compression: '⚡ Compression Supérieure',
          high_quality: '🎨 Haute Qualité'
        },
        features: [
          { title: 'Compression Supérieure', description: 'WebP offre 25-35% de compression meilleure que JPEG tout en maintenant la qualité' },
          { title: 'Support de Transparence', description: 'Support complet du canal alpha pour images transparentes, parfait pour graphiques web' },
          { title: 'Support d\'Animation', description: 'Créer des images WebP animées avec des tailles de fichier plus petites que GIF' }
        ],
        about_title: 'À Propos du Format WebP',
        about_intro: 'WebP est un format d\'image moderne développé par Google qui fournit une compression sans perte et avec perte supérieure pour les images sur le web. En utilisant WebP, les webmasters et développeurs web peuvent créer des images plus petites et plus riches qui rendent le web plus rapide. Les images WebP sans perte sont 26% plus petites que les PNG, et les images WebP avec perte sont 25-35% plus petites que les images JPEG comparables.',
        advantages_title: 'Avantages Clés',
        advantages: [
          'Compression supérieure – 25-35% plus petit que JPEG',
          'Support de transparence – Canal alpha complet comme PNG',
          'Support d\'animation – Plus petit que GIF avec meilleure qualité',
          'Format moderne – Développé par Google pour optimisation web',
          'Option sans perte – Aucune perte de qualité si nécessaire',
          'Large support navigateur – Pris en charge par tous les navigateurs modernes'
        ],
        use_cases_title: 'Meilleurs Cas d\'Utilisation',
        use_cases: [
          'Optimisation web – Sites web à chargement plus rapide',
          'E-commerce – Images de produits avec transparence',
          'Réseaux sociaux – Tailles de fichier plus petites pour partage',
          'Applications mobiles – Utilisation de données réduite',
          'Graphiques web – Logos et icônes avec transparence',
          'Images animées – Mieux que GIF pour le web'
        ],
        specs_title: 'Spécifications Techniques WebP',
        specs_header_label: 'Spécification',
        specs_header_value: 'Détails',
        specs: [
          { label: 'Extension de Fichier', value: '.webp' },
          { label: 'Type MIME', value: 'image/webp' },
          { label: 'Compression', value: 'Compression avec perte et sans perte' },
          { label: 'Support des Couleurs', value: 'Espaces colorimétriques RGB, RGBA, YUV' },
          { label: 'Transparence', value: 'Support du canal alpha' },
          { label: 'Animation', value: 'Support WebP animé' },
          { label: 'Résolution Maximale', value: '16,383 × 16,383 pixels' },
          { label: 'Métadonnées', value: 'Support des métadonnées EXIF et XMP' }
        ],
        seo_title: 'Fonctionnalités du Visionneuse et Convertisseur WebP',
        seo_intro: 'Notre visionneuse et convertisseur WebP professionnel offre un support complet pour les images WebP, y compris la compression avec perte et sans perte, la transparence et l\'animation. Que vous soyez développeur web, designer ou créateur de contenu, notre plateforme offre les outils dont vous avez besoin pour l\'optimisation moderne des images web.',
        seo_viewing_title: 'Fonctionnalités de Visualisation Avancées',
        seo_viewing_text: 'Voir les images WebP avec une précision parfaite au pixel près, des capacités de zoom et un affichage détaillé des métadonnées. Notre visionneuse prend en charge toutes les fonctionnalités WebP, y compris la transparence, l\'animation et les modes de compression avec perte et sans perte, garantissant une représentation précise de vos images.',
        seo_conversion_title: 'Outils de Conversion Professionnels',
        seo_conversion_text: 'Convertir les fichiers WebP en JPEG, PNG, GIF et autres formats tout en maintenant une qualité optimale. Notre moteur de conversion offre des paramètres de qualité ajustables, la préservation de la transparence et des capacités de traitement par lots pour gérer plusieurs fichiers simultanément.',
        seo_optimization_title: 'Optimisation de la Qualité',
        seo_optimization_text: 'Optimisez les fichiers WebP pour une utilisation web avec nos algorithmes de compression intelligents qui réduisent la taille des fichiers jusqu\'à 35% par rapport à JPEG tout en préservant la qualité visuelle. Parfait pour l\'optimisation de sites web, les applications mobiles et le partage sur les réseaux sociaux où la taille du fichier et la qualité comptent.',
        editor: {
          toggle_sidebar: 'Basculer la Barre Latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la Barre Latérale',
          search_placeholder: 'Rechercher des fichiers...',
          files_header: 'Fichiers',
          add_files: '+ Ajouter',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'VISUALIZZATORE WebP GRATUITO Online - Apri File WebP Istantaneamente',
        meta_description: 'Devi aprire un file WebP? Usa il nostro VISUALIZZATORE GRATUITO online per vedere immagini WebP istantaneamente senza download o installazione di software. Sicuro e compatibile.',
        meta_keywords: 'visualizzatore WebP, WebP a JPG, WebP a PNG, visualizzatore immagini, ottimizzazione web, compressione senza perdite, trasparenza, elaborazione batch',
        hero_title: 'Visualizzatore WebP Gratuito',
        hero_subtitle: 'Visualizza e converti immagini WebP con compressione moderna',
        upload_title: 'Carica File WebP',
        upload_description: 'Trascina e rilascia le tue immagini WebP o fai clic per sfogliare. Supporta compressione moderna e trasparenza fino a 100MB totali.',
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
          modern_format: '✓ Formato Moderno',
          superior_compression: '⚡ Compressione Superiore',
          high_quality: '🎨 Alta Qualità'
        },
        features: [
          { title: 'Compressione Superiore', description: 'WebP fornisce una compressione 25-35% migliore rispetto a JPEG mantenendo la qualità' },
          { title: 'Supporto Trasparenza', description: 'Supporto completo del canale alfa per immagini trasparenti, perfetto per grafica web' },
          { title: 'Supporto Animazione', description: 'Crea immagini WebP animate con dimensioni file più piccole rispetto a GIF' }
        ],
        about_title: 'Informazioni sul Formato WebP',
        about_intro: 'WebP è un formato immagine moderno sviluppato da Google che fornisce compressione senza perdite e con perdite superiore per immagini sul web. Utilizzando WebP, webmaster e sviluppatori web possono creare immagini più piccole e ricche che rendono il web più veloce. Le immagini WebP senza perdite sono il 26% più piccole rispetto ai PNG, e le immagini WebP con perdite sono il 25-35% più piccole rispetto alle immagini JPEG comparabili.',
        advantages_title: 'Vantaggi Chiave',
        advantages: [
          'Compressione superiore – 25-35% più piccolo di JPEG',
          'Supporto trasparenza – Canale alfa completo come PNG',
          'Supporto animazione – Più piccolo di GIF con migliore qualità',
          'Formato moderno – Sviluppato da Google per ottimizzazione web',
          'Opzione senza perdite – Nessuna perdita di qualità quando necessario',
          'Ampio supporto browser – Supportato da tutti i browser moderni'
        ],
        use_cases_title: 'Migliori Casi d\'Uso',
        use_cases: [
          'Ottimizzazione web – Siti web con caricamento più veloce',
          'E-commerce – Immagini prodotto con trasparenza',
          'Social media – Dimensioni file più piccole per condivisione',
          'App mobili – Utilizzo dati ridotto',
          'Grafica web – Loghi e icone con trasparenza',
          'Immagini animate – Meglio di GIF per il web'
        ],
        specs_title: 'Specifiche Tecniche WebP',
        specs_header_label: 'Specifica',
        specs_header_value: 'Dettagli',
        specs: [
          { label: 'Estensione File', value: '.webp' },
          { label: 'Tipo MIME', value: 'image/webp' },
          { label: 'Compressione', value: 'Compressione con perdite e senza perdite' },
          { label: 'Supporto Colori', value: 'Spazi colore RGB, RGBA, YUV' },
          { label: 'Trasparenza', value: 'Supporto canale alfa' },
          { label: 'Animazione', value: 'Supporto WebP animato' },
          { label: 'Risoluzione Massima', value: '16,383 × 16,383 pixel' },
          { label: 'Metadati', value: 'Supporto metadati EXIF e XMP' }
        ],
        seo_title: 'Funzionalità Visualizzatore e Convertitore WebP',
        seo_intro: 'Il nostro visualizzatore e convertitore WebP professionale fornisce supporto completo per immagini WebP, inclusa compressione con perdite e senza perdite, trasparenza e animazione. Che tu sia sviluppatore web, designer o creatore di contenuti, la nostra piattaforma offre gli strumenti di cui hai bisogno per l\'ottimizzazione moderna delle immagini web.',
        seo_viewing_title: 'Funzionalità di Visualizzazione Avanzate',
        seo_viewing_text: 'Visualizza immagini WebP con precisione perfetta al pixel, capacità di zoom e visualizzazione dettagliata dei metadati. Il nostro visualizzatore supporta tutte le funzionalità WebP, inclusa trasparenza, animazione e modi di compressione con perdite e senza perdite, garantendo una rappresentazione accurata delle tue immagini.',
        seo_conversion_title: 'Strumenti di Conversione Professionali',
        seo_conversion_text: 'Converti file WebP in JPEG, PNG, GIF e altri formati mantenendo una qualità ottimale. Il nostro motore di conversione offre impostazioni di qualità regolabili, preservazione della trasparenza e capacità di elaborazione batch per gestire più file contemporaneamente.',
        seo_optimization_title: 'Ottimizzazione Qualità',
        seo_optimization_text: 'Ottimizza file WebP per uso web con i nostri algoritmi di compressione intelligenti che riducono le dimensioni dei file fino al 35% rispetto a JPEG preservando la qualità visiva. Perfetto per ottimizzazione siti web, app mobili e condivisione social media dove dimensione file e qualità contano.',
        editor: {
          toggle_sidebar: 'Mostra/Nascondi Barra Laterale',
          close: 'Chiudi (Esc)',
          close_sidebar: 'Chiudi Barra Laterale',
          search_placeholder: 'Cerca file...',
          files_header: 'File',
          add_files: '+ Aggiungi',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'GRATIS WebP Viewer Online - Open WebP Bestanden Direct',
        meta_description: 'Moet u een WebP-bestand openen? Gebruik onze GRATIS online viewer om WebP afbeeldingen direct te bekijken zonder download of software-installatie. Veilig en compatibel.',
        meta_keywords: 'WebP viewer, WebP naar JPG, WebP naar PNG, afbeeldingsviewer, web optimalisatie, verliesloze compressie, transparantie, batchverwerking',
        hero_title: 'Gratis WebP Viewer',
        hero_subtitle: 'Bekijk en converteer WebP afbeeldingen met moderne compressie',
        upload_title: 'Upload WebP Bestanden',
        upload_description: 'Sleep en zet je WebP afbeeldingen neer of klik om te bladeren. Ondersteunt moderne compressie en transparantie tot 100MB totaal.',
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
          modern_format: '✓ Modern Formaat',
          superior_compression: '⚡ Superieure Compressie',
          high_quality: '🎨 Hoge Kwaliteit'
        },
        features: [
          { title: 'Superieure Compressie', description: 'WebP biedt 25-35% betere compressie dan JPEG bij behoud van kwaliteit' },
          { title: 'Transparantieondersteuning', description: 'Volledige alfa-kanaalondersteuning voor transparante afbeeldingen, perfect voor webgrafiek' },
          { title: 'Animatieondersteuning', description: 'Maak geanimeerde WebP afbeeldingen met kleinere bestandsgroottes dan GIF' }
        ],
        about_title: 'Over WebP Formaat',
        about_intro: 'WebP is een modern beeldformaat ontwikkeld door Google dat superieure verliesloze en verliesbehaftende compressie biedt voor afbeeldingen op het web. Met WebP kunnen webmasters en webontwikkelaars kleinere, rijkere afbeeldingen maken die het web sneller maken. WebP verliesloze afbeeldingen zijn 26% kleiner in grootte vergeleken met PNG\'s, en WebP verliesbehaftende afbeeldingen zijn 25-35% kleiner dan vergelijkbare JPEG afbeeldingen.',
        advantages_title: 'Belangrijkste Voordelen',
        advantages: [
          'Superieure compressie – 25-35% kleiner dan JPEG',
          'Transparantieondersteuning – Volledig alfa-kanaal zoals PNG',
          'Animatieondersteuning – Kleiner dan GIF met betere kwaliteit',
          'Modern formaat – Ontwikkeld door Google voor weboptimalisatie',
          'Verliesloze optie – Geen kwaliteitsverlies indien nodig',
          'Brede browserondersteuning – Ondersteund door alle moderne browsers'
        ],
        use_cases_title: 'Beste Gebruikssituaties',
        use_cases: [
          'Weboptimalisatie – Sneller ladende websites',
          'E-commerce – Productafbeeldingen met transparantie',
          'Sociale media – Kleinere bestandsgroottes voor delen',
          'Mobiele apps – Verminderd dataverbruik',
          'Webgrafiek – Logo\'s en pictogrammen met transparantie',
          'Geanimeerde afbeeldingen – Beter dan GIF voor web'
        ],
        specs_title: 'WebP Technische Specificaties',
        specs_header_label: 'Specificatie',
        specs_header_value: 'Details',
        specs: [
          { label: 'Bestandsextensie', value: '.webp' },
          { label: 'MIME Type', value: 'image/webp' },
          { label: 'Compressie', value: 'Verliesbehaftende en verliesloze compressie' },
          { label: 'Kleurondersteuning', value: 'RGB-, RGBA-, YUV-kleurruimten' },
          { label: 'Transparantie', value: 'Alfa-kanaalondersteuning' },
          { label: 'Animatie', value: 'Geanimeerd WebP ondersteund' },
          { label: 'Maximale Resolutie', value: '16,383 × 16,383 pixels' },
          { label: 'Metadata', value: 'EXIF- en XMP-metadata ondersteund' }
        ],
        seo_title: 'WebP Viewer en Converter Functies',
        seo_intro: 'Onze professionele WebP viewer en converter biedt uitgebreide ondersteuning voor WebP afbeeldingen, inclusief verliesbehaftende en verliesloze compressie, transparantie en animatie. Of je nu webontwikkelaar, designer of contentmaker bent, ons platform biedt de tools die je nodig hebt voor moderne webafbeelding optimalisatie.',
        seo_viewing_title: 'Geavanceerde Weergavefuncties',
        seo_viewing_text: 'Bekijk WebP afbeeldingen met pixelperfecte nauwkeurigheid, zoommogelijkheden en gedetailleerde metadataweergave. Onze viewer ondersteunt alle WebP-functies, inclusief transparantie, animatie en zowel verliesbehaftende als verliesloze compressiemodi, waardoor nauwkeurige weergave van je afbeeldingen wordt gegarandeerd.',
        seo_conversion_title: 'Professionele Conversietools',
        seo_conversion_text: 'Converteer WebP bestanden naar JPEG, PNG, GIF en andere formaten terwijl optimale kwaliteit behouden blijft. Onze conversie-engine biedt aanpasbare kwaliteitsinstellingen, transparantiebehoud en batchverwerkingsmogelijkheden voor het gelijktijdig verwerken van meerdere bestanden.',
        seo_optimization_title: 'Kwaliteitsoptimalisatie',
        seo_optimization_text: 'Optimaliseer WebP bestanden voor webgebruik met onze slimme compressie-algoritmen die bestandsgroottes tot 35% verkleinen vergeleken met JPEG terwijl de visuele kwaliteit behouden blijft. Perfect voor website-optimalisatie, mobiele apps en sociale media delen waar bestandsgrootte en kwaliteit belangrijk zijn.',
        editor: {
          toggle_sidebar: 'Zijbalk In-/Uitschakelen',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk Sluiten',
          search_placeholder: 'Zoek bestanden...',
          files_header: 'Bestanden',
          add_files: '+ Toevoegen',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'VISUALIZADOR WebP GRATUITO Online - Abra Arquivos WebP Instantaneamente',
        meta_description: 'Precisa abrir um arquivo WebP? Use nosso VISUALIZADOR GRATUITO online para ver imagens WebP instantaneamente sem download ou instalação de software. Seguro e compatível.',
        meta_keywords: 'visualizador WebP, WebP para JPG, WebP para PNG, visualizador de imagens, otimização web, compressão sem perdas, transparência, processamento em lote',
        hero_title: 'Visualizador WebP Gratuito',
        hero_subtitle: 'Ver e converter imagens WebP com compressão moderna',
        upload_title: 'Carregar Arquivos WebP',
        upload_description: 'Arraste e solte suas imagens WebP ou clique para procurar. Suporta compressão moderna e transparência até 100MB no total.',
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
          modern_format: '✓ Formato Moderno',
          superior_compression: '⚡ Compressão Superior',
          high_quality: '🎨 Alta Qualidade'
        },
        features: [
          { title: 'Compressão Superior', description: 'WebP fornece 25-35% melhor compressão que JPEG mantendo a qualidade' },
          { title: 'Suporte de Transparência', description: 'Suporte completo de canal alfa para imagens transparentes, perfeito para gráficos web' },
          { title: 'Suporte de Animação', description: 'Criar imagens WebP animadas com tamanhos de arquivo menores que GIF' }
        ],
        about_title: 'Sobre o Formato WebP',
        about_intro: 'WebP é um formato de imagem moderno desenvolvido pelo Google que fornece compressão sem perdas e com perdas superior para imagens na web. Usando WebP, webmasters e desenvolvedores web podem criar imagens menores e mais ricas que tornam a web mais rápida. Imagens WebP sem perdas são 26% menores em tamanho comparadas a PNGs, e imagens WebP com perdas são 25-35% menores que imagens JPEG comparáveis.',
        advantages_title: 'Vantagens Principais',
        advantages: [
          'Compressão superior – 25-35% menor que JPEG',
          'Suporte de transparência – Canal alfa completo como PNG',
          'Suporte de animação – Menor que GIF com melhor qualidade',
          'Formato moderno – Desenvolvido pelo Google para otimização web',
          'Opção sem perdas – Sem perda de qualidade quando necessário',
          'Amplo suporte de navegadores – Compatível com todos os navegadores modernos'
        ],
        use_cases_title: 'Melhores Casos de Uso',
        use_cases: [
          'Otimização web – Sites com carregamento mais rápido',
          'E-commerce – Imagens de produtos com transparência',
          'Redes sociais – Tamanhos de arquivo menores para compartilhamento',
          'Aplicativos móveis – Uso de dados reduzido',
          'Gráficos web – Logos e ícones com transparência',
          'Imagens animadas – Melhor que GIF para web'
        ],
        specs_title: 'Especificações Técnicas WebP',
        specs_header_label: 'Especificação',
        specs_header_value: 'Detalhes',
        specs: [
          { label: 'Extensão de Arquivo', value: '.webp' },
          { label: 'Tipo MIME', value: 'image/webp' },
          { label: 'Compressão', value: 'Compressão com perdas e sem perdas' },
          { label: 'Suporte de Cores', value: 'Espaços de cores RGB, RGBA, YUV' },
          { label: 'Transparência', value: 'Suporte de canal alfa' },
          { label: 'Animação', value: 'Suporte de WebP animado' },
          { label: 'Resolução Máxima', value: '16,383 × 16,383 pixels' },
          { label: 'Metadados', value: 'Suporte de metadados EXIF e XMP' }
        ],
        seo_title: 'Recursos do Visualizador e Conversor WebP',
        seo_intro: 'Nosso visualizador e conversor WebP profissional fornece suporte abrangente para imagens WebP, incluindo compressão com perdas e sem perdas, transparência e animação. Seja você desenvolvedor web, designer ou criador de conteúdo, nossa plataforma oferece as ferramentas necessárias para otimização moderna de imagens web.',
        seo_viewing_title: 'Recursos Avançados de Visualização',
        seo_viewing_text: 'Ver imagens WebP com precisão perfeita de pixels, capacidades de zoom e exibição detalhada de metadados. Nosso visualizador suporta todos os recursos WebP, incluindo transparência, animação e modos de compressão com perdas e sem perdas, garantindo representação precisa de suas imagens.',
        seo_conversion_title: 'Ferramentas de Conversão Profissionais',
        seo_conversion_text: 'Converter arquivos WebP para JPEG, PNG, GIF e outros formatos mantendo qualidade ótima. Nosso mecanismo de conversão oferece configurações de qualidade ajustáveis, preservação de transparência e capacidades de processamento em lote para lidar com vários arquivos simultaneamente.',
        seo_optimization_title: 'Otimização de Qualidade',
        seo_optimization_text: 'Otimize arquivos WebP para uso na web com nossos algoritmos de compressão inteligentes que reduzem o tamanho dos arquivos em até 35% em comparação com JPEG preservando a qualidade visual. Perfeito para otimização de sites, aplicativos móveis e compartilhamento em redes sociais onde tamanho de arquivo e qualidade importam.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar Barra Lateral',
          search_placeholder: 'Pesquisar arquivos...',
          files_header: 'Arquivos',
          add_files: '+ Adicionar',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'TRÌNH XEM WebP MIỄN PHÍ Trực Tuyến - Mở Tệp WebP Ngay Lập Tức',
        meta_description: 'Cần mở tệp WebP? Sử dụng trình xem TRỰC TUYẾN MIỄN PHÍ của chúng tôi để xem hình ảnh WebP ngay lập tức mà không cần tải xuống hoặc cài đặt phần mềm. An toàn và tương thích.',
        meta_keywords: 'trình xem WebP, WebP sang JPG, WebP sang PNG, trình xem hình ảnh, tối ưu hóa web, nén không mất mát, trong suốt, xử lý hàng loạt',
        hero_title: 'Trình Xem WebP Miễn Phí',
        hero_subtitle: 'Xem và chuyển đổi hình ảnh WebP với nén hiện đại',
        upload_title: 'Tải Lên Tệp WebP',
        upload_description: 'Kéo và thả hình ảnh WebP của bạn hoặc nhấp để duyệt. Hỗ trợ nén hiện đại và trong suốt lên đến 100MB tổng cộng.',
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
          modern_format: '✓ Định Dạng Hiện Đại',
          superior_compression: '⚡ Nén Vượt Trội',
          high_quality: '🎨 Chất Lượng Cao'
        },
        features: [
          { title: 'Nén Vượt Trội', description: 'WebP cung cấp nén tốt hơn 25-35% so với JPEG trong khi duy trì chất lượng' },
          { title: 'Hỗ Trợ Trong Suốt', description: 'Hỗ trợ kênh alpha đầy đủ cho hình ảnh trong suốt, hoàn hảo cho đồ họa web' },
          { title: 'Hỗ Trợ Hoạt Hình', description: 'Tạo hình ảnh WebP hoạt hình với kích thước tệp nhỏ hơn GIF' }
        ],
        about_title: 'Về Định Dạng WebP',
        about_intro: 'WebP là định dạng hình ảnh hiện đại được phát triển bởi Google cung cấp nén không mất mát và có mất mát vượt trội cho hình ảnh trên web. Sử dụng WebP, các quản trị web và nhà phát triển web có thể tạo hình ảnh nhỏ hơn, phong phú hơn làm cho web nhanh hơn. Hình ảnh WebP không mất mát nhỏ hơn 26% so với PNG, và hình ảnh WebP có mất mát nhỏ hơn 25-35% so với hình ảnh JPEG tương đương.',
        advantages_title: 'Ưu Điểm Chính',
        advantages: [
          'Nén vượt trội – Nhỏ hơn 25-35% so với JPEG',
          'Hỗ trợ trong suốt – Kênh alpha đầy đủ như PNG',
          'Hỗ trợ hoạt hình – Nhỏ hơn GIF với chất lượng tốt hơn',
          'Định dạng hiện đại – Được phát triển bởi Google cho tối ưu hóa web',
          'Tùy chọn không mất mát – Không mất chất lượng khi cần',
          'Hỗ trợ trình duyệt rộng – Được hỗ trợ bởi tất cả trình duyệt hiện đại'
        ],
        use_cases_title: 'Trường Hợp Sử Dụng Tốt Nhất',
        use_cases: [
          'Tối ưu hóa web – Trang web tải nhanh hơn',
          'Thương mại điện tử – Hình ảnh sản phẩm với trong suốt',
          'Mạng xã hội – Kích thước tệp nhỏ hơn để chia sẻ',
          'Ứng dụng di động – Giảm sử dụng dữ liệu',
          'Đồ họa web – Logo và biểu tượng với trong suốt',
          'Hình ảnh hoạt hình – Tốt hơn GIF cho web'
        ],
        specs_title: 'Thông Số Kỹ Thuật WebP',
        specs_header_label: 'Thông Số',
        specs_header_value: 'Chi Tiết',
        specs: [
          { label: 'Phần Mở Rộng Tệp', value: '.webp' },
          { label: 'Loại MIME', value: 'image/webp' },
          { label: 'Nén', value: 'Nén có mất mát và không mất mát' },
          { label: 'Hỗ Trợ Màu', value: 'Không gian màu RGB, RGBA, YUV' },
          { label: 'Độ Trong Suốt', value: 'Hỗ trợ kênh alpha' },
          { label: 'Hoạt Hình', value: 'Hỗ trợ WebP hoạt hình' },
          { label: 'Độ Phân Giải Tối Đa', value: '16,383 × 16,383 pixel' },
          { label: 'Siêu Dữ Liệu', value: 'Hỗ trợ siêu dữ liệu EXIF và XMP' }
        ],
        seo_title: 'Tính Năng Trình Xem và Chuyển Đổi WebP',
        seo_intro: 'Trình xem và chuyển đổi WebP chuyên nghiệp của chúng tôi cung cấp hỗ trợ toàn diện cho hình ảnh WebP, bao gồm nén có mất mát và không mất mát, trong suốt và hoạt hình. Cho dù bạn là nhà phát triển web, nhà thiết kế hay người tạo nội dung, nền tảng của chúng tôi cung cấp các công cụ bạn cần để tối ưu hóa hình ảnh web hiện đại.',
        seo_viewing_title: 'Tính Năng Xem Nâng Cao',
        seo_viewing_text: 'Xem hình ảnh WebP với độ chính xác hoàn hảo từng pixel, khả năng phóng to và hiển thị siêu dữ liệu chi tiết. Trình xem của chúng tôi hỗ trợ tất cả các tính năng WebP, bao gồm trong suốt, hoạt hình và cả chế độ nén có mất mát và không mất mát, đảm bảo biểu diễn chính xác hình ảnh của bạn.',
        seo_conversion_title: 'Công Cụ Chuyển Đổi Chuyên Nghiệp',
        seo_conversion_text: 'Chuyển đổi tệp WebP sang JPEG, PNG, GIF và các định dạng khác trong khi duy trì chất lượng tối ưu. Công cụ chuyển đổi của chúng tôi cung cấp cài đặt chất lượng có thể điều chỉnh, bảo toàn trong suốt và khả năng xử lý hàng loạt để xử lý nhiều tệp đồng thời.',
        seo_optimization_title: 'Tối Ưu Hóa Chất Lượng',
        seo_optimization_text: 'Tối ưu hóa tệp WebP cho sử dụng web với các thuật toán nén thông minh của chúng tôi giảm kích thước tệp lên đến 35% so với JPEG trong khi bảo toàn chất lượng hình ảnh. Hoàn hảo cho tối ưu hóa trang web, ứng dụng di động và chia sẻ mạng xã hội nơi kích thước tệp và chất lượng quan trọng.',
        editor: {
          toggle_sidebar: 'Chuyển Thanh Bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng Thanh Bên',
          search_placeholder: 'Tìm kiếm tệp...',
          files_header: 'Tệp',
          add_files: '+ Thêm',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'ÜCRETSİZ WebP Görüntüleyici Çevrimiçi - WebP Dosyalarını Anında Aç',
        meta_description: 'WebP dosyası açmanız mı gerekiyor? WebP görsellerini indirme veya yazılım kurulumu olmadan anında görmek için ÜCRETSİZ çevrimiçi görüntüleyicimizi kullanın. Güvenli ve uyumlu.',
        meta_keywords: 'WebP görüntüleyici, WebP\'den JPG\'ye, WebP\'den PNG\'ye, görsel görüntüleyici, web optimizasyonu, kayıpsız sıkıştırma, şeffaflık, toplu işleme',
        hero_title: 'Ücretsiz WebP Görüntüleyici',
        hero_subtitle: 'WebP görsellerini modern sıkıştırma ile görüntüle ve dönüştür',
        upload_title: 'WebP Dosyalarını Yükle',
        upload_description: 'WebP görsellerinizi sürükleyip bırakın veya göz atmak için tıklayın. Toplam 100MB\'a kadar modern sıkıştırma ve şeffaflık destekler.',
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
          modern_format: '✓ Modern Format',
          superior_compression: '⚡ Üstün Sıkıştırma',
          high_quality: '🎨 Yüksek Kalite'
        },
        features: [
          { title: 'Üstün Sıkıştırma', description: 'WebP, kaliteyi korurken JPEG\'den %25-35 daha iyi sıkıştırma sağlar' },
          { title: 'Şeffaflık Desteği', description: 'Şeffaf görseller için tam alfa kanal desteği, web grafikleri için mükemmel' },
          { title: 'Animasyon Desteği', description: 'GIF\'ten daha küçük dosya boyutlarıyla animasyonlu WebP görselleri oluşturun' }
        ],
        about_title: 'WebP Formatı Hakkında',
        about_intro: 'WebP, web\'deki görseller için üstün kayıpsız ve kayıplı sıkıştırma sağlayan Google tarafından geliştirilmiş modern bir görsel formatıdır. WebP kullanarak, web yöneticileri ve web geliştiricileri web\'i daha hızlı hale getiren daha küçük, daha zengin görseller oluşturabilir. WebP kayıpsız görseller PNG\'lere göre %26 daha küçüktür ve WebP kayıplı görseller karşılaştırılabilir JPEG görsellerinden %25-35 daha küçüktür.',
        advantages_title: 'Temel Avantajlar',
        advantages: [
          'Üstün sıkıştırma – JPEG\'den %25-35 daha küçük',
          'Şeffaflık desteği – PNG gibi tam alfa kanalı',
          'Animasyon desteği – Daha iyi kalite ile GIF\'ten daha küçük',
          'Modern format – Web optimizasyonu için Google tarafından geliştirildi',
          'Kayıpsız seçenek – Gerektiğinde kalite kaybı yok',
          'Geniş tarayıcı desteği – Tüm modern tarayıcılar tarafından desteklenir'
        ],
        use_cases_title: 'En İyi Kullanım Durumları',
        use_cases: [
          'Web optimizasyonu – Daha hızlı yüklenen web siteleri',
          'E-ticaret – Şeffaflık ile ürün görselleri',
          'Sosyal medya – Paylaşım için daha küçük dosya boyutları',
          'Mobil uygulamalar – Azaltılmış veri kullanımı',
          'Web grafikleri – Şeffaflık ile logolar ve simgeler',
          'Animasyonlu görseller – Web için GIF\'ten daha iyi'
        ],
        specs_title: 'WebP Teknik Özellikleri',
        specs_header_label: 'Özellik',
        specs_header_value: 'Detaylar',
        specs: [
          { label: 'Dosya Uzantısı', value: '.webp' },
          { label: 'MIME Türü', value: 'image/webp' },
          { label: 'Sıkıştırma', value: 'Kayıplı ve kayıpsız sıkıştırma' },
          { label: 'Renk Desteği', value: 'RGB, RGBA, YUV renk alanları' },
          { label: 'Şeffaflık', value: 'Alfa kanal desteği' },
          { label: 'Animasyon', value: 'Animasyonlu WebP desteği' },
          { label: 'Maksimum Çözünürlük', value: '16.383 × 16.383 piksel' },
          { label: 'Meta Veriler', value: 'EXIF ve XMP meta veri desteği' }
        ],
        seo_title: 'WebP Görüntüleyici ve Dönüştürücü Özellikleri',
        seo_intro: 'Profesyonel WebP görüntüleyicimiz ve dönüştürücümüz, kayıplı ve kayıpsız sıkıştırma, şeffaflık ve animasyon dahil WebP görselleri için kapsamlı destek sağlar. İster web geliştiricisi, tasarımcı veya içerik oluşturucu olun, platformumuz modern web görsel optimizasyonu için ihtiyacınız olan araçları sunar.',
        seo_viewing_title: 'Gelişmiş Görüntüleme Özellikleri',
        seo_viewing_text: 'Piksel mükemmel doğruluk, zoom yetenekleri ve detaylı meta veri görüntüleme ile WebP görsellerini görüntüle. Görüntüleyicimiz şeffaflık, animasyon ve hem kayıplı hem de kayıpsız sıkıştırma modları dahil tüm WebP özelliklerini destekler, görsellerinizin doğru temsilini sağlar.',
        seo_conversion_title: 'Profesyonel Dönüştürme Araçları',
        seo_conversion_text: 'Optimal kaliteyi korurken WebP dosyalarını JPEG, PNG, GIF ve diğer formatlara dönüştür. Dönüştürme motorumuz, birden fazla dosyayı aynı anda işlemek için ayarlanabilir kalite ayarları, şeffaflık koruma ve toplu işleme yetenekleri sunar.',
        seo_optimization_title: 'Kalite Optimizasyonu',
        seo_optimization_text: 'Görsel kaliteyi korurken dosya boyutlarını JPEG\'e kıyasla %35\'e kadar azaltan akıllı sıkıştırma algoritmalarımızla WebP dosyalarını web kullanımı için optimize edin. Dosya boyutu ve kalitenin önemli olduğu web sitesi optimizasyonu, mobil uygulamalar ve sosyal medya paylaşımı için mükemmel.',
        editor: {
          toggle_sidebar: 'Kenar Çubuğunu Aç/Kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar Çubuğunu Kapat',
          search_placeholder: 'Dosyaları ara...',
          files_header: 'Dosyalar',
          add_files: '+ Ekle',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'БЕСПЛАТНЫЙ Просмотрщик WebP Онлайн - Открыть Файлы WebP Мгновенно',
        meta_description: 'Нужно открыть файл WebP? Используйте наш БЕСПЛАТНЫЙ онлайн-просмотрщик, чтобы мгновенно просматривать изображения WebP без загрузки или установки программного обеспечения. Безопасно и совместимо.',
        meta_keywords: 'просмотрщик WebP, WebP в JPG, WebP в PNG, просмотрщик изображений, веб-оптимизация, сжатие без потерь, прозрачность, пакетная обработка',
        hero_title: 'Бесплатный Просмотрщик WebP',
        hero_subtitle: 'Просматривайте и конвертируйте изображения WebP с современным сжатием',
        upload_title: 'Загрузить Файлы WebP',
        upload_description: 'Перетащите изображения WebP или нажмите для просмотра. Поддерживает современное сжатие и прозрачность до 100 МБ всего.',
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
          modern_format: '✓ Современный Формат',
          superior_compression: '⚡ Превосходное Сжатие',
          high_quality: '🎨 Высокое Качество'
        },
        features: [
          { title: 'Превосходное Сжатие', description: 'WebP обеспечивает на 25-35% лучшее сжатие, чем JPEG, сохраняя качество' },
          { title: 'Поддержка Прозрачности', description: 'Полная поддержка альфа-канала для прозрачных изображений, идеально для веб-графики' },
          { title: 'Поддержка Анимации', description: 'Создавайте анимированные изображения WebP с меньшими размерами файлов, чем GIF' }
        ],
        about_title: 'О Формате WebP',
        about_intro: 'WebP — это современный формат изображения, разработанный Google, который обеспечивает превосходное сжатие без потерь и с потерями для изображений в интернете. Используя WebP, веб-мастера и веб-разработчики могут создавать более мелкие и богатые изображения, которые делают интернет быстрее. Изображения WebP без потерь на 26% меньше по размеру по сравнению с PNG, а изображения WebP с потерями на 25-35% меньше, чем сопоставимые изображения JPEG.',
        advantages_title: 'Ключевые Преимущества',
        advantages: [
          'Превосходное сжатие – на 25-35% меньше, чем JPEG',
          'Поддержка прозрачности – Полный альфа-канал, как PNG',
          'Поддержка анимации – Меньше, чем GIF, с лучшим качеством',
          'Современный формат – Разработан Google для веб-оптимизации',
          'Опция без потерь – Без потери качества при необходимости',
          'Широкая поддержка браузеров – Поддерживается всеми современными браузерами'
        ],
        use_cases_title: 'Лучшие Случаи Использования',
        use_cases: [
          'Веб-оптимизация – Более быстро загружающиеся веб-сайты',
          'Электронная коммерция – Изображения продуктов с прозрачностью',
          'Социальные сети – Меньшие размеры файлов для обмена',
          'Мобильные приложения – Сниженное использование данных',
          'Веб-графика – Логотипы и иконки с прозрачностью',
          'Анимированные изображения – Лучше, чем GIF для веба'
        ],
        specs_title: 'Технические Характеристики WebP',
        specs_header_label: 'Характеристика',
        specs_header_value: 'Детали',
        specs: [
          { label: 'Расширение Файла', value: '.webp' },
          { label: 'Тип MIME', value: 'image/webp' },
          { label: 'Сжатие', value: 'Сжатие с потерями и без потерь' },
          { label: 'Поддержка Цветов', value: 'Цветовые пространства RGB, RGBA, YUV' },
          { label: 'Прозрачность', value: 'Поддержка альфа-канала' },
          { label: 'Анимация', value: 'Поддержка анимированного WebP' },
          { label: 'Максимальное Разрешение', value: '16,383 × 16,383 пикселей' },
          { label: 'Метаданные', value: 'Поддержка метаданных EXIF и XMP' }
        ],
        seo_title: 'Функции Просмотрщика и Конвертера WebP',
        seo_intro: 'Наш профессиональный просмотрщик и конвертер WebP обеспечивает полную поддержку изображений WebP, включая сжатие с потерями и без потерь, прозрачность и анимацию. Будь вы веб-разработчик, дизайнер или создатель контента, наша платформа предлагает инструменты, необходимые для современной оптимизации веб-изображений.',
        seo_viewing_title: 'Расширенные Функции Просмотра',
        seo_viewing_text: 'Просматривайте изображения WebP с идеальной точностью пикселей, возможностями масштабирования и детальным отображением метаданных. Наш просмотрщик поддерживает все функции WebP, включая прозрачность, анимацию и режимы сжатия с потерями и без потерь, обеспечивая точное представление ваших изображений.',
        seo_conversion_title: 'Профессиональные Инструменты Конвертации',
        seo_conversion_text: 'Конвертируйте файлы WebP в JPEG, PNG, GIF и другие форматы, сохраняя оптимальное качество. Наш движок конвертации предлагает настраиваемые параметры качества, сохранение прозрачности и возможности пакетной обработки для одновременной обработки нескольких файлов.',
        seo_optimization_title: 'Оптимизация Качества',
        seo_optimization_text: 'Оптимизируйте файлы WebP для веб-использования с помощью наших интеллектуальных алгоритмов сжатия, которые уменьшают размеры файлов до 35% по сравнению с JPEG, сохраняя визуальное качество. Идеально для оптимизации веб-сайтов, мобильных приложений и обмена в социальных сетях, где важны размер файла и качество.',
        editor: {
          toggle_sidebar: 'Переключить Боковую Панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть Боковую Панель',
          search_placeholder: 'Поиск файлов...',
          files_header: 'Файлы',
          add_files: '+ Добавить',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'عارض WebP مجاني عبر الإنترنت - افتح ملفات WebP على الفور',
        meta_description: 'تحتاج إلى فتح ملف WebP? استخدم عارضنا المجاني عبر الإنترنت لمشاهدة صور WebP على الفور دون تنزيل أو تثبيت برنامج. آمن ومتوافق.',
        meta_keywords: 'عارض WebP، WebP إلى JPG، WebP إلى PNG، عارض الصور، تحسين الويب، ضغط بدون فقدان، الشفافية، المعالجة المجمعة',
        hero_title: 'عارض WebP مجاني',
        hero_subtitle: 'اعرض وحول صور WebP مع ضغط حديث',
        upload_title: 'رفع ملفات WebP',
        upload_description: 'اسحب وأفلت صور WebP الخاصة بك أو انقر للتصفح. يدعم الضغط الحديث والشفافية حتى 100 ميجابايت إجمالي.',
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
          modern_format: '✓ تنسيق حديث',
          superior_compression: '⚡ ضغط متفوق',
          high_quality: '🎨 جودة عالية'
        },
        features: [
          { title: 'ضغط متفوق', description: 'يوفر WebP ضغطاً أفضل بنسبة 25-35% من JPEG مع الحفاظ على الجودة' },
          { title: 'دعم الشفافية', description: 'دعم كامل لقناة ألفا للصور الشفافة، مثالي للرسوميات الويب' },
          { title: 'دعم الرسوم المتحركة', description: 'إنشاء صور WebP متحركة بأحجام ملفات أصغر من GIF' }
        ],
        about_title: 'حول تنسيق WebP',
        about_intro: 'WebP هو تنسيق صورة حديث طورته Google يوفر ضغطاً بدون فقدان ومع فقدان متفوقاً للصور على الويب. باستخدام WebP، يمكن لمسؤولي المواقع ومطوري الويب إنشاء صور أصغر وأغنى تجعل الويب أسرع. صور WebP بدون فقدان أصغر بنسبة 26% مقارنة بـ PNG، وصور WebP مع فقدان أصغر بنسبة 25-35% من صور JPEG المماثلة.',
        advantages_title: 'المزايا الرئيسية',
        advantages: [
          'ضغط متفوق – أصغر بنسبة 25-35% من JPEG',
          'دعم الشفافية – قناة ألفا كاملة مثل PNG',
          'دعم الرسوم المتحركة – أصغر من GIF مع جودة أفضل',
          'تنسيق حديث – طورته Google لتحسين الويب',
          'خيار بدون فقدان – بدون فقدان الجودة عند الحاجة',
          'دعم متصفح واسع – مدعوم من جميع المتصفحات الحديثة'
        ],
        use_cases_title: 'أفضل حالات الاستخدام',
        use_cases: [
          'تحسين الويب – مواقع ويب تحميل أسرع',
          'التجارة الإلكترونية – صور المنتجات مع الشفافية',
          'وسائل التواصل الاجتماعي – أحجام ملفات أصغر للمشاركة',
          'التطبيقات المحمولة – استخدام بيانات مخفض',
          'رسوميات الويب – الشعارات والرموز مع الشفافية',
          'الصور المتحركة – أفضل من GIF للويب'
        ],
        specs_title: 'المواصفات التقنية لـ WebP',
        specs_header_label: 'المواصفة',
        specs_header_value: 'التفاصيل',
        specs: [
          { label: 'امتداد الملف', value: '.webp' },
          { label: 'نوع MIME', value: 'image/webp' },
          { label: 'الضغط', value: 'ضغط مع فقدان وبدون فقدان' },
          { label: 'دعم الألوان', value: 'مساحات الألوان RGB، RGBA، YUV' },
          { label: 'الشفافية', value: 'دعم قناة ألفا' },
          { label: 'الرسوم المتحركة', value: 'دعم WebP المتحرك' },
          { label: 'الحد الأقصى للدقة', value: '16,383 × 16,383 بكسل' },
          { label: 'البيانات الوصفية', value: 'دعم بيانات EXIF و XMP الوصفية' }
        ],
        seo_title: 'ميزات عارض ومحول WebP',
        seo_intro: 'يوفر عارض ومحول WebP الاحترافي لدينا دعماً شاملاً لصور WebP، بما في ذلك الضغط مع فقدان وبدون فقدان والشفافية والرسوم المتحركة. سواء كنت مطور ويب أو مصمم أو منشئ محتوى، توفر منصتنا الأدوات التي تحتاجها لتحسين صور الويب الحديثة.',
        seo_viewing_title: 'ميزات العرض المتقدمة',
        seo_viewing_text: 'اعرض صور WebP بدقة مثالية للبكسل وإمكانيات تكبير وعرض تفصيلي للبيانات الوصفية. يدعم عارضنا جميع ميزات WebP، بما في ذلك الشفافية والرسوم المتحركة وطرق الضغط مع فقدان وبدون فقدان، مما يضمن تمثيلاً دقيقاً لصورك.',
        seo_conversion_title: 'أدوات التحويل الاحترافية',
        seo_conversion_text: 'حول ملفات WebP إلى JPEG و PNG و GIF وتنسيقات أخرى مع الحفاظ على الجودة المثلى. يوفر محرك التحويل لدينا إعدادات جودة قابلة للتعديل والحفاظ على الشفافية وإمكانيات المعالجة المجمعة للتعامل مع ملفات متعددة في وقت واحد.',
        seo_optimization_title: 'تحسين الجودة',
        seo_optimization_text: 'حسّن ملفات WebP للاستخدام على الويب باستخدام خوارزميات الضغط الذكية لدينا التي تقلل أحجام الملفات بنسبة تصل إلى 35% مقارنة بـ JPEG مع الحفاظ على الجودة البصرية. مثالي لتحسين المواقع والتطبيقات المحمولة ومشاركة وسائل التواصل الاجتماعي حيث يهم حجم الملف والجودة.',
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          files_header: 'الملفات',
          add_files: '+ إضافة',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'โปรแกรมดู WebP ฟรีออนไลน์ - เปิดไฟล์ WebP ทันที',
        meta_description: 'ต้องการเปิดไฟล์ WebP? ใช้โปรแกรมดูออนไลน์ฟรีของเราเพื่อดูรูปภาพ WebP ทันทีโดยไม่ต้องดาวน์โหลดหรือติดตั้งซอฟต์แวร์ ปลอดภัยและเข้ากันได้',
        meta_keywords: 'โปรแกรมดู WebP, WebP เป็น JPG, WebP เป็น PNG, โปรแกรมดูรูปภาพ, การปรับปรุงเว็บ, การบีบอัดแบบไม่สูญเสีย, ความโปร่งใส, การประมวลผลแบบกลุ่ม',
        hero_title: 'โปรแกรมดู WebP ฟรี',
        hero_subtitle: 'ดูและแปลงรูปภาพ WebP ด้วยการบีบอัดสมัยใหม่',
        upload_title: 'อัปโหลดไฟล์ WebP',
        upload_description: 'ลากและวางรูปภาพ WebP ของคุณหรือคลิกเพื่อเรียกดู รองรับการบีบอัดสมัยใหม่และความโปร่งใสสูงสุด 100MB รวม',
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
          modern_format: '✓ รูปแบบสมัยใหม่',
          superior_compression: '⚡ การบีบอัดที่เหนือกว่า',
          high_quality: '🎨 คุณภาพสูง'
        },
        features: [
          { title: 'การบีบอัดที่เหนือกว่า', description: 'WebP ให้การบีบอัดที่ดีกว่า JPEG 25-35% ในขณะที่รักษาคุณภาพ' },
          { title: 'การรองรับความโปร่งใส', description: 'การรองรับช่องอัลฟาเต็มรูปแบบสำหรับภาพโปร่งใส เหมาะสำหรับกราฟิกเว็บ' },
          { title: 'การรองรับภาพเคลื่อนไหว', description: 'สร้างภาพ WebP แบบเคลื่อนไหวด้วยขนาดไฟล์ที่เล็กกว่า GIF' }
        ],
        about_title: 'เกี่ยวกับรูปแบบ WebP',
        about_intro: 'WebP เป็นรูปแบบภาพสมัยใหม่ที่พัฒนาโดย Google ที่ให้การบีบอัดแบบไม่สูญเสียและสูญเสียที่เหนือกว่าสำหรับภาพบนเว็บ การใช้ WebP ผู้ดูแลเว็บและนักพัฒนาเว็บสามารถสร้างภาพที่เล็กกว่าและสมบูรณ์ยิ่งขึ้นที่ทำให้เว็บเร็วขึ้น ภาพ WebP แบบไม่สูญเสียมีขนาดเล็กกว่า PNG 26% และภาพ WebP แบบสูญเสียมีขนาดเล็กกว่า 25-35% เมื่อเทียบกับภาพ JPEG ที่เทียบเคียงได้',
        advantages_title: 'ข้อดีหลัก',
        advantages: [
          'การบีบอัดที่เหนือกว่า – เล็กกว่า JPEG 25-35%',
          'การรองรับความโปร่งใส – ช่องอัลฟาเต็มรูปแบบเหมือน PNG',
          'การรองรับภาพเคลื่อนไหว – เล็กกว่า GIF ด้วยคุณภาพที่ดีกว่า',
          'รูปแบบสมัยใหม่ – พัฒนาโดย Google สำหรับการปรับปรุงเว็บ',
          'ตัวเลือกไม่สูญเสีย – ไม่มีการสูญเสียคุณภาพเมื่อจำเป็น',
          'การรองรับเบราว์เซอร์กว้าง – รองรับโดยเบราว์เซอร์สมัยใหม่ทั้งหมด'
        ],
        use_cases_title: 'กรณีการใช้งานที่ดีที่สุด',
        use_cases: [
          'การปรับปรุงเว็บ – เว็บไซต์ที่โหลดเร็วขึ้น',
          'อีคอมเมิร์ซ – ภาพผลิตภัณฑ์พร้อมความโปร่งใส',
          'โซเชียลมีเดีย – ขนาดไฟล์ที่เล็กกว่าสำหรับการแชร์',
          'แอปมือถือ – การใช้ข้อมูลลดลง',
          'กราฟิกเว็บ – โลโก้และไอคอนพร้อมความโปร่งใส',
          'ภาพเคลื่อนไหว – ดีกว่า GIF สำหรับเว็บ'
        ],
        specs_title: 'ข้อมูลจำเพาะทางเทคนิค WebP',
        specs_header_label: 'ข้อมูลจำเพาะ',
        specs_header_value: 'รายละเอียด',
        specs: [
          { label: 'นามสกุลไฟล์', value: '.webp' },
          { label: 'ประเภท MIME', value: 'image/webp' },
          { label: 'การบีบอัด', value: 'การบีบอัดแบบสูญเสียและไม่สูญเสีย' },
          { label: 'การรองรับสี', value: 'พื้นที่สี RGB, RGBA, YUV' },
          { label: 'ความโปร่งใส', value: 'การรองรับช่องอัลฟา' },
          { label: 'ภาพเคลื่อนไหว', value: 'การรองรับ WebP แบบเคลื่อนไหว' },
          { label: 'ความละเอียดสูงสุด', value: '16,383 × 16,383 พิกเซล' },
          { label: 'ข้อมูลเมตา', value: 'การรองรับข้อมูลเมตา EXIF และ XMP' }
        ],
        seo_title: 'คุณสมบัติโปรแกรมดูและตัวแปลง WebP',
        seo_intro: 'โปรแกรมดูและตัวแปลง WebP ระดับมืออาชีพของเรามีการรองรับที่ครอบคลุมสำหรับภาพ WebP รวมถึงการบีบอัดแบบสูญเสียและไม่สูญเสีย ความโปร่งใส และภาพเคลื่อนไหว ไม่ว่าคุณจะเป็นนักพัฒนาเว็บ นักออกแบบ หรือผู้สร้างเนื้อหา แพลตฟอร์มของเรามีเครื่องมือที่คุณต้องการสำหรับการปรับปรุงภาพเว็บสมัยใหม่',
        seo_viewing_title: 'คุณสมบัติการดูขั้นสูง',
        seo_viewing_text: 'ดูภาพ WebP ด้วยความแม่นยำระดับพิกเซล ความสามารถในการซูม และการแสดงข้อมูลเมตาอย่างละเอียด โปรแกรมดูของเรารองรับคุณสมบัติ WebP ทั้งหมด รวมถึงความโปร่งใส ภาพเคลื่อนไหว และโหมดการบีบอัดแบบสูญเสียและไม่สูญเสีย เพื่อให้แน่ใจว่าการแสดงภาพที่ถูกต้อง',
        seo_conversion_title: 'เครื่องมือแปลงระดับมืออาชีพ',
        seo_conversion_text: 'แปลงไฟล์ WebP เป็น JPEG, PNG, GIF และรูปแบบอื่นๆ ในขณะที่รักษาคุณภาพที่เหมาะสม เครื่องมือแปลงของเรามีการตั้งค่าคุณภาพที่ปรับได้ การรักษาความโปร่งใส และความสามารถในการประมวลผลแบบกลุ่มสำหรับการจัดการไฟล์หลายไฟล์พร้อมกัน',
        seo_optimization_title: 'การปรับปรุงคุณภาพ',
        seo_optimization_text: 'ปรับปรุงไฟล์ WebP สำหรับการใช้งานบนเว็บด้วยอัลกอริทึมการบีบอัดอัจฉริยะของเราที่ลดขนาดไฟล์ได้สูงสุด 35% เมื่อเทียบกับ JPEG ในขณะที่รักษาคุณภาพภาพ เหมาะสำหรับการปรับปรุงเว็บไซต์ แอปมือถือ และการแชร์โซเชียลมีเดียที่ขนาดไฟล์และคุณภาพมีความสำคัญ',
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          files_header: 'ไฟล์',
          add_files: '+ เพิ่ม',
          format_badge: 'WebP',
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
      webp: {
        meta_title: '無料WebPビューアーオンライン - WebPファイルを即座に開く',
        meta_description: 'WebPファイルを開く必要がありますか? 無料のオンラインビューアーを使用して、ダウンロードやソフトウェアのインストールなしでWebP画像を即座に表示します。安全で互換性があります。',
        meta_keywords: 'WebPビューアー、WebPからJPG、WebPからPNG、画像ビューアー、Web最適化、可逆圧縮、透明度、バッチ処理',
        hero_title: '無料WebPビューアー',
        hero_subtitle: '現代的な圧縮でWebP画像を表示・変換',
        upload_title: 'WebPファイルをアップロード',
        upload_description: 'WebP画像をドラッグ＆ドロップするか、クリックして参照します。合計100MBまで現代的な圧縮と透明度をサポートします。',
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
          modern_format: '✓ 現代的なフォーマット',
          superior_compression: '⚡ 優れた圧縮',
          high_quality: '🎨 高品質'
        },
        features: [
          { title: '優れた圧縮', description: 'WebPは品質を維持しながらJPEGより25-35%優れた圧縮を提供します' },
          { title: '透明度サポート', description: '透明な画像の完全なアルファチャンネルサポート、Webグラフィックに最適' },
          { title: 'アニメーションサポート', description: 'GIFより小さいファイルサイズでアニメーションWebP画像を作成' }
        ],
        about_title: 'WebPフォーマットについて',
        about_intro: 'WebPは、Googleによって開発された現代的な画像フォーマットで、Web上の画像に対して優れた可逆および可逆圧縮を提供します。WebPを使用することで、WebマスターやWeb開発者は、Webをより速くするより小さく、より豊富な画像を作成できます。WebP可逆画像はPNGと比較して26%小さく、WebP可逆画像は同等のJPEG画像より25-35%小さくなります。',
        advantages_title: '主な利点',
        advantages: [
          '優れた圧縮 – JPEGより25-35%小さい',
          '透明度サポート – PNGのような完全なアルファチャンネル',
          'アニメーションサポート – より良い品質でGIFより小さい',
          '現代的なフォーマット – Web最適化のためにGoogleによって開発',
          '可逆オプション – 必要に応じて品質損失なし',
          '幅広いブラウザサポート – すべての現代的なブラウザでサポート'
        ],
        use_cases_title: '最適な使用例',
        use_cases: [
          'Web最適化 – より速く読み込まれるWebサイト',
          'Eコマース – 透明度付きの製品画像',
          'ソーシャルメディア – 共有のためのより小さいファイルサイズ',
          'モバイルアプリ – データ使用量の削減',
          'Webグラフィック – 透明度付きのロゴとアイコン',
          'アニメーション画像 – Web用にGIFより優れている'
        ],
        specs_title: 'WebP技術仕様',
        specs_header_label: '仕様',
        specs_header_value: '詳細',
        specs: [
          { label: 'ファイル拡張子', value: '.webp' },
          { label: 'MIMEタイプ', value: 'image/webp' },
          { label: '圧縮', value: '可逆および可逆圧縮' },
          { label: '色サポート', value: 'RGB、RGBA、YUV色空間' },
          { label: '透明度', value: 'アルファチャンネルサポート' },
          { label: 'アニメーション', value: 'アニメーションWebPサポート' },
          { label: '最大解像度', value: '16,383 × 16,383ピクセル' },
          { label: 'メタデータ', value: 'EXIFおよびXMPメタデータサポート' }
        ],
        seo_title: 'WebPビューアーとコンバーター機能',
        seo_intro: 'プロフェッショナルなWebPビューアーとコンバーターは、可逆および可逆圧縮、透明度、アニメーションを含むWebP画像の包括的なサポートを提供します。Web開発者、デザイナー、コンテンツ作成者のいずれであっても、当社のプラットフォームは現代的なWeb画像最適化に必要なツールを提供します。',
        seo_viewing_title: '高度な表示機能',
        seo_viewing_text: 'ピクセル完璧な精度、ズーム機能、詳細なメタデータ表示でWebP画像を表示します。当社のビューアーは、透明度、アニメーション、可逆および可逆圧縮モードを含むすべてのWebP機能をサポートし、画像の正確な表現を保証します。',
        seo_conversion_title: 'プロフェッショナル変換ツール',
        seo_conversion_text: '最適な品質を維持しながら、WebPファイルをJPEG、PNG、GIF、その他のフォーマットに変換します。当社の変換エンジンは、複数のファイルを同時に処理するための調整可能な品質設定、透明度保持、バッチ処理機能を提供します。',
        seo_optimization_title: '品質最適化',
        seo_optimization_text: '視覚品質を保持しながら、ファイルサイズをJPEGと比較して最大35%削減する当社のスマート圧縮アルゴリズムで、Web使用のためにWebPファイルを最適化します。ファイルサイズと品質が重要なWebサイト最適化、モバイルアプリ、ソーシャルメディア共有に最適です。',
        editor: {
          toggle_sidebar: 'サイドバーの切り替え',
          close: '閉じる (Esc)',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          files_header: 'ファイル',
          add_files: '+ 追加',
          format_badge: 'WebP',
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
      webp: {
        meta_title: '免费WebP查看器在线 - 即时打开WebP文件',
        meta_description: '需要打开WebP文件？使用我们的免费在线查看器，无需下载或安装软件即可即时查看WebP图片。安全且兼容。',
        meta_keywords: 'WebP查看器，WebP转JPG，WebP转PNG，图片查看器，网络优化，无损压缩，透明度，批量处理',
        hero_title: '免费WebP查看器',
        hero_subtitle: '使用现代压缩查看和转换WebP图片',
        upload_title: '上传WebP文件',
        upload_description: '拖放您的WebP图片或点击浏览。支持现代压缩和透明度，总计最多100MB。',
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
          modern_format: '✓ 现代格式',
          superior_compression: '⚡ 卓越压缩',
          high_quality: '🎨 高质量'
        },
        features: [
          { title: '卓越压缩', description: 'WebP在保持质量的同时提供比JPEG好25-35%的压缩' },
          { title: '透明度支持', description: '透明图片的完整alpha通道支持，非常适合网络图形' },
          { title: '动画支持', description: '创建比GIF文件更小的动画WebP图片' }
        ],
        about_title: '关于WebP格式',
        about_intro: 'WebP是由Google开发的现代图片格式，为网络上的图片提供卓越的无损和有损压缩。使用WebP，网站管理员和网络开发人员可以创建更小、更丰富的图片，使网络更快。WebP无损图片比PNG小26%，WebP有损图片比可比较的JPEG图片小25-35%。',
        advantages_title: '主要优势',
        advantages: [
          '卓越压缩 – 比JPEG小25-35%',
          '透明度支持 – 像PNG一样的完整alpha通道',
          '动画支持 – 比GIF更小，质量更好',
          '现代格式 – 由Google为网络优化开发',
          '无损选项 – 需要时无质量损失',
          '广泛的浏览器支持 – 所有现代浏览器都支持'
        ],
        use_cases_title: '最佳使用场景',
        use_cases: [
          '网络优化 – 加载更快的网站',
          '电子商务 – 带透明度的产品图片',
          '社交媒体 – 更小的文件大小便于分享',
          '移动应用 – 减少数据使用',
          '网络图形 – 带透明度的徽标和图标',
          '动画图片 – 比GIF更适合网络'
        ],
        specs_title: 'WebP技术规格',
        specs_header_label: '规格',
        specs_header_value: '详细信息',
        specs: [
          { label: '文件扩展名', value: '.webp' },
          { label: 'MIME类型', value: 'image/webp' },
          { label: '压缩', value: '有损和无损压缩' },
          { label: '颜色支持', value: 'RGB、RGBA、YUV色彩空间' },
          { label: '透明度', value: 'Alpha通道支持' },
          { label: '动画', value: '动画WebP支持' },
          { label: '最大分辨率', value: '16,383 × 16,383像素' },
          { label: '元数据', value: 'EXIF和XMP元数据支持' }
        ],
        seo_title: 'WebP查看器和转换器功能',
        seo_intro: '我们的专业WebP查看器和转换器为WebP图片提供全面支持，包括有损和无损压缩、透明度和动画。无论您是网络开发人员、设计师还是内容创作者，我们的平台都提供现代网络图片优化所需的工具。',
        seo_viewing_title: '高级查看功能',
        seo_viewing_text: '以像素级完美精度、缩放功能和详细的元数据显示查看WebP图片。我们的查看器支持所有WebP功能，包括透明度、动画以及有损和无损压缩模式，确保准确表示您的图片。',
        seo_conversion_title: '专业转换工具',
        seo_conversion_text: '在保持最佳质量的同时，将WebP文件转换为JPEG、PNG、GIF和其他格式。我们的转换引擎提供可调的质量设置、透明度保留和批处理功能，可同时处理多个文件。',
        seo_optimization_title: '质量优化',
        seo_optimization_text: '使用我们的智能压缩算法优化WebP文件用于网络使用，该算法可将文件大小减少高达35%（与JPEG相比），同时保持视觉质量。非常适合网站优化、移动应用和社交媒体分享，其中文件大小和质量很重要。',
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭 (Esc)',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          files_header: '文件',
          add_files: '+ 添加',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'PENAMPIL WebP GRATIS Online - Buka File WebP Secara Instan',
        meta_description: 'Perlu membuka file WebP? Gunakan penampil online GRATIS kami untuk melihat gambar WebP secara instan tanpa unduhan atau instalasi perangkat lunak. Aman dan kompatibel.',
        meta_keywords: 'penampil WebP, WebP ke JPG, WebP ke PNG, penampil gambar, optimisasi web, kompresi tanpa loss, transparansi, pemrosesan batch',
        hero_title: 'Penampil WebP Gratis',
        hero_subtitle: 'Lihat dan konversi gambar WebP dengan kompresi modern',
        upload_title: 'Unggah File WebP',
        upload_description: 'Seret dan lepas gambar WebP Anda atau klik untuk menjelajah. Mendukung kompresi modern dan transparansi hingga 100MB total.',
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
          modern_format: '✓ Format Modern',
          superior_compression: '⚡ Kompresi Superior',
          high_quality: '🎨 Kualitas Tinggi'
        },
        features: [
          { title: 'Kompresi Superior', description: 'WebP menyediakan kompresi 25-35% lebih baik daripada JPEG sambil mempertahankan kualitas' },
          { title: 'Dukungan Transparansi', description: 'Dukungan saluran alpha penuh untuk gambar transparan, sempurna untuk grafik web' },
          { title: 'Dukungan Animasi', description: 'Buat gambar WebP animasi dengan ukuran file lebih kecil daripada GIF' }
        ],
        about_title: 'Tentang Format WebP',
        about_intro: 'WebP adalah format gambar modern yang dikembangkan oleh Google yang menyediakan kompresi lossless dan lossy superior untuk gambar di web. Menggunakan WebP, webmaster dan pengembang web dapat membuat gambar yang lebih kecil dan lebih kaya yang membuat web lebih cepat. Gambar WebP lossless 26% lebih kecil dibandingkan dengan PNG, dan gambar WebP lossy 25-35% lebih kecil daripada gambar JPEG yang sebanding.',
        advantages_title: 'Keuntungan Utama',
        advantages: [
          'Kompresi superior – 25-35% lebih kecil daripada JPEG',
          'Dukungan transparansi – Saluran alpha penuh seperti PNG',
          'Dukungan animasi – Lebih kecil daripada GIF dengan kualitas lebih baik',
          'Format modern – Dikembangkan oleh Google untuk optimisasi web',
          'Opsi lossless – Tidak ada kehilangan kualitas saat diperlukan',
          'Dukungan browser luas – Didukung oleh semua browser modern'
        ],
        use_cases_title: 'Kasus Penggunaan Terbaik',
        use_cases: [
          'Optimisasi web – Situs web yang memuat lebih cepat',
          'E-commerce – Gambar produk dengan transparansi',
          'Media sosial – Ukuran file lebih kecil untuk berbagi',
          'Aplikasi seluler – Penggunaan data berkurang',
          'Grafik web – Logo dan ikon dengan transparansi',
          'Gambar animasi – Lebih baik daripada GIF untuk web'
        ],
        specs_title: 'Spesifikasi Teknis WebP',
        specs_header_label: 'Spesifikasi',
        specs_header_value: 'Detail',
        specs: [
          { label: 'Ekstensi File', value: '.webp' },
          { label: 'Tipe MIME', value: 'image/webp' },
          { label: 'Kompresi', value: 'Kompresi lossy dan lossless' },
          { label: 'Dukungan Warna', value: 'Ruang warna RGB, RGBA, YUV' },
          { label: 'Transparansi', value: 'Dukungan saluran alpha' },
          { label: 'Animasi', value: 'Dukungan WebP animasi' },
          { label: 'Resolusi Maksimum', value: '16,383 × 16,383 piksel' },
          { label: 'Metadata', value: 'Dukungan metadata EXIF dan XMP' }
        ],
        seo_title: 'Fitur Penampil dan Konverter WebP',
        seo_intro: 'Penampil dan konverter WebP profesional kami menyediakan dukungan komprehensif untuk gambar WebP, termasuk kompresi lossy dan lossless, transparansi dan animasi. Baik Anda seorang pengembang web, desainer atau pembuat konten, platform kami menawarkan alat yang Anda butuhkan untuk optimisasi gambar web modern.',
        seo_viewing_title: 'Fitur Tampilan Lanjutan',
        seo_viewing_text: 'Lihat gambar WebP dengan akurasi sempurna piksel, kemampuan zoom dan tampilan metadata detail. Penampil kami mendukung semua fitur WebP, termasuk transparansi, animasi dan mode kompresi lossy dan lossless, memastikan representasi akurat dari gambar Anda.',
        seo_conversion_title: 'Alat Konversi Profesional',
        seo_conversion_text: 'Konversi file WebP ke JPEG, PNG, GIF dan format lain sambil mempertahankan kualitas optimal. Mesin konversi kami menawarkan pengaturan kualitas yang dapat disesuaikan, pelestarian transparansi dan kemampuan pemrosesan batch untuk menangani beberapa file secara bersamaan.',
        seo_optimization_title: 'Optimasi Kualitas',
        seo_optimization_text: 'Optimalkan file WebP untuk penggunaan web dengan algoritma kompresi cerdas kami yang mengurangi ukuran file hingga 35% dibandingkan dengan JPEG sambil mempertahankan kualitas visual. Sempurna untuk optimasi situs web, aplikasi seluler dan berbagi media sosial di mana ukuran file dan kualitas penting.',
        editor: {
          toggle_sidebar: 'Alihkan Sidebar',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup Sidebar',
          search_placeholder: 'Cari file...',
          files_header: 'File',
          add_files: '+ Tambah',
          format_badge: 'WebP',
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
      webp: {
        meta_title: 'GRATIS WebP-visare Online - Öppna WebP-filer Omedelbart',
        meta_description: 'Behöver du öppna en WebP-fil? Använd vår GRATIS online-visare för att se WebP-bilder omedelbart utan nedladdning eller programvaruinstallation. Säker och kompatibel.',
        meta_keywords: 'WebP-visare, WebP till JPG, WebP till PNG, bildvisare, webboptimering, förlustfri komprimering, transparens, batchbearbetning',
        hero_title: 'Gratis WebP-visare',
        hero_subtitle: 'Visa och konvertera WebP-bilder med modern komprimering',
        upload_title: 'Ladda Upp WebP-filer',
        upload_description: 'Dra och släpp dina WebP-bilder eller klicka för att bläddra. Stöder modern komprimering och transparens upp till 100MB totalt.',
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
          modern_format: '✓ Moderne Format',
          superior_compression: '⚡ Överlägsen Komprimering',
          high_quality: '🎨 Hög Kvalitet'
        },
        features: [
          { title: 'Överlägsen Komprimering', description: 'WebP ger 25-35% bättre komprimering än JPEG samtidigt som kvaliteten bibehålls' },
          { title: 'Transparensstöd', description: 'Fullt alfakanalstöd för transparenta bilder, perfekt för webbgrafik' },
          { title: 'Animationsstöd', description: 'Skapa animerade WebP-bilder med mindre filstorlekar än GIF' }
        ],
        about_title: 'Om WebP-formatet',
        about_intro: 'WebP är ett modernt bildformat utvecklat av Google som ger överlägsen förlustfri och förlustkomprimering för bilder på webben. Genom att använda WebP kan webbmästare och webbutvecklare skapa mindre, rikare bilder som gör webben snabbare. WebP-förlustfria bilder är 26% mindre i storlek jämfört med PNG, och WebP-förlustbilder är 25-35% mindre än jämförbara JPEG-bilder.',
        advantages_title: 'Viktiga Fördelar',
        advantages: [
          'Överlägsen komprimering – 25-35% mindre än JPEG',
          'Transparensstöd – Full alfakanal som PNG',
          'Animationsstöd – Mindre än GIF med bättre kvalitet',
          'Moderne format – Utvecklat av Google för webboptimering',
          'Förlustfri alternativ – Ingen kvalitetsförlust vid behov',
          'Bredt webbläsarstöd – Stöds av alla moderna webbläsare'
        ],
        use_cases_title: 'Bästa Användningsfall',
        use_cases: [
          'Webboptimering – Snabbare laddande webbplatser',
          'E-handel – Produktbilder med transparens',
          'Sociala medier – Mindre filstorlekar för delning',
          'Mobilappar – Minskad dataanvändning',
          'Webbgrafik – Logotyper och ikoner med transparens',
          'Animerade bilder – Bättre än GIF för webben'
        ],
        specs_title: 'WebP Tekniska Specifikationer',
        specs_header_label: 'Specifikation',
        specs_header_value: 'Detaljer',
        specs: [
          { label: 'Filändelse', value: '.webp' },
          { label: 'MIME-typ', value: 'image/webp' },
          { label: 'Komprimering', value: 'Förlustkomprimering och förlustfri komprimering' },
          { label: 'Färgstöd', value: 'RGB-, RGBA-, YUV-färgrymder' },
          { label: 'Transparens', value: 'Alfakanalstöd' },
          { label: 'Animation', value: 'Animerat WebP-stöd' },
          { label: 'Maximal Upplösning', value: '16,383 × 16,383 pixlar' },
          { label: 'Metadata', value: 'EXIF- och XMP-metadatastöd' }
        ],
        seo_title: 'WebP-visare och Konverteringsfunktioner',
        seo_intro: 'Vår professionella WebP-visare och konverterare ger omfattande stöd för WebP-bilder, inklusive förlustkomprimering och förlustfri komprimering, transparens och animation. Oavsett om du är webbutvecklare, designer eller innehållsskapare erbjuder vår plattform verktygen du behöver för modern webbbildoptimering.',
        seo_viewing_title: 'Avancerade Visningsfunktioner',
        seo_viewing_text: 'Visa WebP-bilder med pixelperfekt noggrannhet, zoomfunktioner och detaljerad metadatavisning. Vår visare stöder alla WebP-funktioner, inklusive transparens, animation och både förlustkomprimerings- och förlustfria komprimeringslägen, vilket säkerställer korrekt representation av dina bilder.',
        seo_conversion_title: 'Professionella Konverteringsverktyg',
        seo_conversion_text: 'Konvertera WebP-filer till JPEG, PNG, GIF och andra format samtidigt som optimal kvalitet bibehålls. Vår konverteringsmotor erbjuder justerbara kvalitetsinställningar, transparensbevarande och batchbearbetningsfunktioner för att hantera flera filer samtidigt.',
        seo_optimization_title: 'Kvalitetsoptimering',
        seo_optimization_text: 'Optimalisera WebP-filer för webbanvändning med våra smarta komprimeringsalgoritmer som minskar filstorlekar med upp till 35% jämfört med JPEG samtidigt som visuell kvalitet bevaras. Perfekt för webbplatsoptimering, mobilappar och sociala medier-delning där filstorlek och kvalitet är viktigt.',
        editor: {
          toggle_sidebar: 'Växla Sidofält',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng Sidofält',
          search_placeholder: 'Sök filer...',
          files_header: 'Filer',
          add_files: '+ Lägg till',
          format_badge: 'WebP',
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

