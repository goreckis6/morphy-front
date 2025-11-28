import i18n from '../../../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type SVGViewerTranslations = {
  viewers: {
    svg: {
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
        vector_graphics: string;
        scalable: string;
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

const resources: Record<string, SVGViewerTranslations> = {
  en: {
    viewers: {
      svg: {
        meta_title: 'Free SVG Viewer - Online Scalable Vector Graphic Viewer',
        meta_description: 'View and convert SVG (Scalable Vector Graphics) files online for free. Infinite scalability, code-based editing, and interactive elements. Up to 20 files, 100MB total. No registration required.',
        meta_keywords: 'SVG viewer, vector graphics, SVG to PNG, SVG to JPEG, scalable graphics, XML graphics, logo viewer, icon viewer, batch processing',
        hero_title: 'Free SVG Viewer',
        hero_subtitle: 'View scalable vector graphics with infinite zoom and code editing',
        upload_title: 'Upload SVG Files',
        upload_description: 'Drag and drop your SVG vector graphics or click to browse. Supports SVG and SVGZ formats up to 100MB total.',
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
          vector_graphics: '✓ Vector Graphics',
          scalable: '🎨 Infinitely Scalable',
          fast_processing: '⚡ Fast Processing'
        },
        features: [
          { title: 'Infinite Scalability', description: 'View SVG graphics at any size without quality loss, perfect for logos, icons, and illustrations' },
          { title: 'Code-Based Editing', description: 'Edit SVG code directly with syntax highlighting and real-time preview of changes' },
          { title: 'Interactive Elements', description: 'Support for animations, interactive elements, and embedded JavaScript in SVG files' }
        ],
        about_title: 'About SVG Format',
        about_intro: 'SVG (Scalable Vector Graphics) is an XML-based vector image format for two-dimensional graphics. Unlike raster formats like JPEG or PNG, SVG uses mathematical descriptions of shapes, making it resolution-independent and infinitely scalable without quality loss. SVG files can be edited with text editors, styled with CSS, and animated with JavaScript.',
        advantages_title: 'Key Advantages',
        advantages: [
          'Infinite scalability – No quality loss at any size',
          'Small file sizes – Efficient for simple graphics',
          'Code-based editing – Edit with any text editor',
          'CSS styling – Style with cascading style sheets',
          'JavaScript support – Interactive and animated graphics',
          'Accessibility – Text-based format, screen reader friendly'
        ],
        use_cases_title: 'Best Use Cases',
        use_cases: [
          'Web graphics – Logos, icons, and illustrations',
          'UI design – Interface elements and icons',
          'Maps and charts – Scalable data visualizations',
          'Print graphics – Vector graphics for printing',
          'Animations – SVG animations and transitions',
          'Responsive design – Graphics that scale with screen size'
        ],
        specs_title: 'SVG Technical Specifications',
        specs_header_label: 'Specification',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.svg, .svgz' },
          { label: 'MIME Type', value: 'image/svg+xml' },
          { label: 'Format Type', value: 'Vector graphics (XML-based)' },
          { label: 'Scalability', value: 'Infinite (resolution-independent)' },
          { label: 'Color Support', value: 'Full color, gradients, patterns' },
          { label: 'Animation', value: 'SMIL, CSS, JavaScript animations' },
          { label: 'Interactivity', value: 'JavaScript event handlers supported' },
          { label: 'Compression', value: 'SVGZ (gzip-compressed SVG)' }
        ],
        seo_title: 'SVG Viewer and Converter Features',
        seo_intro: 'Our professional SVG viewer provides comprehensive support for scalable vector graphics including infinite zoom, code editing, and format conversion. Whether you\'re a designer, developer, or content creator, our platform offers the tools you need for professional SVG image handling.',
        seo_viewing_title: 'Advanced Viewing Features',
        seo_viewing_text: 'View SVG graphics with infinite zoom capabilities, code inspection, and detailed analysis. Our viewer supports all SVG features including animations, interactive elements, and embedded JavaScript, ensuring accurate representation of your vector graphics.',
        seo_conversion_title: 'Professional Conversion Tools',
        seo_conversion_text: 'Convert SVG files to PNG, JPEG, WebP, and other raster formats at any resolution while maintaining optimal quality. Our conversion engine offers adjustable output sizes, quality settings, and batch processing capabilities for handling multiple files simultaneously.',
        seo_optimization_title: 'Quality Optimization',
        seo_optimization_text: 'Optimize SVG files for web use with our smart tools that reduce file sizes while preserving vector quality. Perfect for website optimization, icon sets, and responsive graphics where scalability and file size matter.',
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          files_header: 'Files',
          add_files: '+ Add',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Darmowy Podgląd SVG - Online Przeglądarka Grafiki Wektorowej',
        meta_description: 'Przeglądaj i konwertuj pliki SVG (Scalable Vector Graphics) online za darmo. Nieskończona skalowalność, edycja oparta na kodzie i elementy interaktywne. Do 20 plików, 100MB łącznie. Bez rejestracji.',
        meta_keywords: 'podgląd SVG, grafika wektorowa, SVG do PNG, SVG do JPEG, skalowalna grafika, grafika XML, podgląd logo, podgląd ikon, przetwarzanie wsadowe',
        hero_title: 'Darmowy Podgląd SVG',
        hero_subtitle: 'Przeglądaj skalowalną grafikę wektorową z nieskończonym zoomem i edycją kodu',
        upload_title: 'Prześlij pliki SVG',
        upload_description: 'Przeciągnij i upuść swoją grafikę wektorową SVG lub kliknij, aby przeglądać. Obsługuje formaty SVG i SVGZ do 100MB łącznie.',
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
          vector_graphics: '✓ Grafika Wektorowa',
          scalable: '🎨 Nieskończenie Skalowalna',
          fast_processing: '⚡ Szybkie Przetwarzanie'
        },
        features: [
          { title: 'Nieskończona Skalowalność', description: 'Przeglądaj grafikę SVG w dowolnym rozmiarze bez utraty jakości, idealne dla logo, ikon i ilustracji' },
          { title: 'Edycja Oparta na Kodzie', description: 'Edytuj kod SVG bezpośrednio z podświetlaniem składni i podglądem zmian w czasie rzeczywistym' },
          { title: 'Elementy Interaktywne', description: 'Obsługa animacji, elementów interaktywnych i osadzonego JavaScript w plikach SVG' }
        ],
        about_title: 'O Formacie SVG',
        about_intro: 'SVG (Scalable Vector Graphics) to format obrazu wektorowego oparty na XML dla grafiki dwuwymiarowej. W przeciwieństwie do formatów rastrowych, takich jak JPEG czy PNG, SVG używa matematycznych opisów kształtów, co czyni go niezależnym od rozdzielczości i nieskończenie skalowalnym bez utraty jakości. Pliki SVG można edytować edytorami tekstu, stylizować za pomocą CSS i animować za pomocą JavaScript.',
        advantages_title: 'Kluczowe Zalety',
        advantages: [
          'Nieskończona skalowalność – Brak utraty jakości w dowolnym rozmiarze',
          'Małe rozmiary plików – Wydajne dla prostych grafik',
          'Edycja oparta na kodzie – Edytuj dowolnym edytorem tekstu',
          'Stylizacja CSS – Stylizuj za pomocą arkuszy stylów',
          'Obsługa JavaScript – Interaktywna i animowana grafika',
          'Dostępność – Format tekstowy, przyjazny dla czytników ekranu'
        ],
        use_cases_title: 'Najlepsze Zastosowania',
        use_cases: [
          'Grafika internetowa – Logo, ikony i ilustracje',
          'Projektowanie UI – Elementy interfejsu i ikony',
          'Mapy i wykresy – Skalowalne wizualizacje danych',
          'Grafika do druku – Grafika wektorowa do druku',
          'Animacje – Animacje SVG i przejścia',
          'Projektowanie responsywne – Grafika skalująca się z rozmiarem ekranu'
        ],
        specs_title: 'Specyfikacje Techniczne SVG',
        specs_header_label: 'Specyfikacja',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie Pliku', value: '.svg, .svgz' },
          { label: 'Typ MIME', value: 'image/svg+xml' },
          { label: 'Typ Formatu', value: 'Grafika wektorowa (oparta na XML)' },
          { label: 'Skalowalność', value: 'Nieskończona (niezależna od rozdzielczości)' },
          { label: 'Obsługa Kolorów', value: 'Pełny kolor, gradienty, wzorce' },
          { label: 'Animacja', value: 'Animacje SMIL, CSS, JavaScript' },
          { label: 'Interaktywność', value: 'Obsługiwane procedury obsługi zdarzeń JavaScript' },
          { label: 'Kompresja', value: 'SVGZ (skompresowane SVG gzip)' }
        ],
        seo_title: 'Funkcje Podglądu i Konwertera SVG',
        seo_intro: 'Nasz profesjonalny podgląd SVG zapewnia kompleksowe wsparcie dla skalowalnej grafiki wektorowej, w tym nieskończony zoom, edycję kodu i konwersję formatów. Niezależnie od tego, czy jesteś projektantem, programistą czy twórcą treści, nasza platforma oferuje narzędzia potrzebne do profesjonalnej obsługi obrazów SVG.',
        seo_viewing_title: 'Zaawansowane Funkcje Przeglądania',
        seo_viewing_text: 'Przeglądaj grafikę SVG z możliwościami nieskończonego zoomu, inspekcji kodu i szczegółowej analizy. Nasz podgląd obsługuje wszystkie funkcje SVG, w tym animacje, elementy interaktywne i osadzony JavaScript, zapewniając dokładną reprezentację Twojej grafiki wektorowej.',
        seo_conversion_title: 'Profesjonalne Narzędzia Konwersji',
        seo_conversion_text: 'Konwertuj pliki SVG do PNG, JPEG, WebP i innych formatów rastrowych w dowolnej rozdzielczości, zachowując optymalną jakość. Nasz silnik konwersji oferuje regulowane rozmiary wyjściowe, ustawienia jakości i możliwości przetwarzania wsadowego do jednoczesnego obsługiwania wielu plików.',
        seo_optimization_title: 'Optymalizacja Jakości',
        seo_optimization_text: 'Optymalizuj pliki SVG do użycia w sieci za pomocą naszych inteligentnych narzędzi, które zmniejszają rozmiary plików, zachowując jakość wektorową. Idealne do optymalizacji stron internetowych, zestawów ikon i responsywnej grafiki, gdzie liczą się skalowalność i rozmiar pliku.',
        editor: {
          toggle_sidebar: 'Przełącz Pasek Boczny',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij Pasek Boczny',
          search_placeholder: 'Szukaj plików...',
          files_header: 'Pliki',
          add_files: '+ Dodaj',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Kostenloser SVG Viewer – Online Skalierbarer Vektorgrafik-Viewer',
        meta_description: 'SVG (Scalable Vector Graphics) Dateien online kostenlos anzeigen und konvertieren. Unendliche Skalierbarkeit, codebasierte Bearbeitung und interaktive Elemente. Bis zu 20 Dateien, 100MB insgesamt. Keine Registrierung erforderlich.',
        meta_keywords: 'SVG Viewer, Vektorgrafik, SVG zu PNG, SVG zu JPEG, skalierbare Grafiken, XML-Grafiken, Logo-Viewer, Icon-Viewer, Stapelverarbeitung',
        hero_title: 'Kostenloser SVG Viewer',
        hero_subtitle: 'Skalierbare Vektorgrafiken mit unendlichem Zoom und Code-Bearbeitung anzeigen',
        upload_title: 'SVG-Dateien hochladen',
        upload_description: 'Ziehen Sie Ihre SVG-Vektorgrafiken hierher oder klicken Sie zum Auswählen. Unterstützt SVG- und SVGZ-Formate bis zu 100MB insgesamt.',
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
          vector_graphics: '✓ Vektorgrafik',
          scalable: '🎨 Unendlich Skalierbar',
          fast_processing: '⚡ Schnelle Verarbeitung'
        },
        features: [
          { title: 'Unendliche Skalierbarkeit', description: 'SVG-Grafiken in jeder Größe ohne Qualitätsverlust anzeigen, perfekt für Logos, Icons und Illustrationen' },
          { title: 'Codebasierte Bearbeitung', description: 'SVG-Code direkt mit Syntaxhervorhebung und Echtzeitvorschau von Änderungen bearbeiten' },
          { title: 'Interaktive Elemente', description: 'Unterstützung für Animationen, interaktive Elemente und eingebettetes JavaScript in SVG-Dateien' }
        ],
        about_title: 'Über das SVG-Format',
        about_intro: 'SVG (Scalable Vector Graphics) ist ein XML-basiertes Vektorbildformat für zweidimensionale Grafiken. Im Gegensatz zu Rasterformaten wie JPEG oder PNG verwendet SVG mathematische Beschreibungen von Formen, wodurch es auflösungsunabhängig und unendlich skalierbar ohne Qualitätsverlust ist. SVG-Dateien können mit Texteditoren bearbeitet, mit CSS gestylt und mit JavaScript animiert werden.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          'Unendliche Skalierbarkeit – Kein Qualitätsverlust in jeder Größe',
          'Kleine Dateigrößen – Effizient für einfache Grafiken',
          'Codebasierte Bearbeitung – Bearbeiten mit jedem Texteditor',
          'CSS-Styling – Stylen mit Stylesheets',
          'JavaScript-Unterstützung – Interaktive und animierte Grafiken',
          'Barrierefreiheit – Textbasiertes Format, screenreader-freundlich'
        ],
        use_cases_title: 'Beste Anwendungsfälle',
        use_cases: [
          'Web-Grafiken – Logos, Icons und Illustrationen',
          'UI-Design – Interface-Elemente und Icons',
          'Karten und Diagramme – Skalierbare Datenvisualisierungen',
          'Druckgrafik – Vektorgrafik zum Drucken',
          'Animationen – SVG-Animationen und Übergänge',
          'Responsives Design – Grafiken, die mit der Bildschirmgröße skalieren'
        ],
        specs_title: 'SVG Technische Spezifikationen',
        specs_header_label: 'Spezifikation',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateierweiterung', value: '.svg, .svgz' },
          { label: 'MIME-Typ', value: 'image/svg+xml' },
          { label: 'Formattyp', value: 'Vektorgrafik (XML-basiert)' },
          { label: 'Skalierbarkeit', value: 'Unendlich (auflösungsunabhängig)' },
          { label: 'Farbunterstützung', value: 'Vollfarbe, Gradienten, Muster' },
          { label: 'Animation', value: 'SMIL-, CSS-, JavaScript-Animationen' },
          { label: 'Interaktivität', value: 'JavaScript-Ereignishandler unterstützt' },
          { label: 'Kompression', value: 'SVGZ (gzip-komprimiertes SVG)' }
        ],
        seo_title: 'SVG Viewer und Konverter Funktionen',
        seo_intro: 'Unser professioneller SVG-Viewer bietet umfassende Unterstützung für skalierbare Vektorgrafiken, einschließlich unendlichem Zoom, Code-Bearbeitung und Formatkonvertierung. Egal, ob Sie Designer, Entwickler oder Content-Ersteller sind, unsere Plattform bietet die Tools, die Sie für die professionelle SVG-Bildverarbeitung benötigen.',
        seo_viewing_title: 'Erweiterte Anzeigefunktionen',
        seo_viewing_text: 'Zeigen Sie SVG-Grafiken mit unendlichen Zoom-Funktionen, Code-Inspektion und detaillierter Analyse an. Unser Viewer unterstützt alle SVG-Funktionen, einschließlich Animationen, interaktiver Elemente und eingebettetem JavaScript, und gewährleistet eine genaue Darstellung Ihrer Vektorgrafiken.',
        seo_conversion_title: 'Professionelle Konvertierungstools',
        seo_conversion_text: 'Konvertieren Sie SVG-Dateien in PNG, JPEG, WebP und andere Rasterformate in jeder Auflösung, während die optimale Qualität erhalten bleibt. Unsere Konvertierungs-Engine bietet einstellbare Ausgabegrößen, Qualitätseinstellungen und Stapelverarbeitungsfunktionen für die gleichzeitige Verarbeitung mehrerer Dateien.',
        seo_optimization_title: 'Qualitätsoptimierung',
        seo_optimization_text: 'Optimieren Sie SVG-Dateien für die Webnutzung mit unseren intelligenten Tools, die die Dateigrößen reduzieren und gleichzeitig die Vektorqualität erhalten. Perfekt für Website-Optimierung, Icon-Sets und responsive Grafiken, bei denen Skalierbarkeit und Dateigröße wichtig sind.',
        editor: {
          toggle_sidebar: 'Seitenleiste Umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Seitenleiste Schließen',
          search_placeholder: 'Dateien suchen...',
          files_header: 'Dateien',
          add_files: '+ Hinzufügen',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Visor SVG Gratis - Visor de Gráficos Vectoriales Escalables Online',
        meta_description: 'Ver y convertir archivos SVG (Scalable Vector Graphics) online gratis. Escalabilidad infinita, edición basada en código y elementos interactivos. Hasta 20 archivos, 100MB total. Sin registro requerido.',
        meta_keywords: 'visor SVG, gráficos vectoriales, SVG a PNG, SVG a JPEG, gráficos escalables, gráficos XML, visor de logos, visor de iconos, procesamiento por lotes',
        hero_title: 'Visor SVG Gratis',
        hero_subtitle: 'Ver gráficos vectoriales escalables con zoom infinito y edición de código',
        upload_title: 'Subir Archivos SVG',
        upload_description: 'Arrastra y suelta tus gráficos vectoriales SVG o haz clic para explorar. Soporta formatos SVG y SVGZ hasta 100MB en total.',
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
          vector_graphics: '✓ Gráficos Vectoriales',
          scalable: '🎨 Infinitamente Escalable',
          fast_processing: '⚡ Procesamiento Rápido'
        },
        features: [
          { title: 'Escalabilidad Infinita', description: 'Ver gráficos SVG en cualquier tamaño sin pérdida de calidad, perfecto para logos, iconos e ilustraciones' },
          { title: 'Edición Basada en Código', description: 'Editar código SVG directamente con resaltado de sintaxis y vista previa en tiempo real de cambios' },
          { title: 'Elementos Interactivos', description: 'Soporte para animaciones, elementos interactivos y JavaScript embebido en archivos SVG' }
        ],
        about_title: 'Acerca del Formato SVG',
        about_intro: 'SVG (Scalable Vector Graphics) es un formato de imagen vectorial basado en XML para gráficos bidimensionales. A diferencia de formatos raster como JPEG o PNG, SVG usa descripciones matemáticas de formas, haciéndolo independiente de resolución e infinitamente escalable sin pérdida de calidad. Los archivos SVG pueden editarse con editores de texto, estilizarse con CSS y animarse con JavaScript.',
        advantages_title: 'Ventajas Clave',
        advantages: [
          'Escalabilidad infinita – Sin pérdida de calidad en cualquier tamaño',
          'Tamaños de archivo pequeños – Eficiente para gráficos simples',
          'Edición basada en código – Editar con cualquier editor de texto',
          'Estilos CSS – Estilizar con hojas de estilo en cascada',
          'Soporte JavaScript – Gráficos interactivos y animados',
          'Accesibilidad – Formato basado en texto, amigable para lectores de pantalla'
        ],
        use_cases_title: 'Mejores Casos de Uso',
        use_cases: [
          'Gráficos web – Logos, iconos e ilustraciones',
          'Diseño UI – Elementos de interfaz e iconos',
          'Mapas y gráficos – Visualizaciones de datos escalables',
          'Gráficos para impresión – Gráficos vectoriales para imprimir',
          'Animaciones – Animaciones SVG y transiciones',
          'Diseño responsivo – Gráficos que escalan con el tamaño de pantalla'
        ],
        specs_title: 'Especificaciones Técnicas SVG',
        specs_header_label: 'Especificación',
        specs_header_value: 'Detalles',
        specs: [
          { label: 'Extensión de Archivo', value: '.svg, .svgz' },
          { label: 'Tipo MIME', value: 'image/svg+xml' },
          { label: 'Tipo de Formato', value: 'Gráficos vectoriales (basado en XML)' },
          { label: 'Escalabilidad', value: 'Infinita (independiente de resolución)' },
          { label: 'Soporte de Color', value: 'Color completo, gradientes, patrones' },
          { label: 'Animación', value: 'Animaciones SMIL, CSS, JavaScript' },
          { label: 'Interactividad', value: 'Manejadores de eventos JavaScript soportados' },
          { label: 'Compresión', value: 'SVGZ (SVG comprimido con gzip)' }
        ],
        seo_title: 'Funciones del Visor y Convertidor SVG',
        seo_intro: 'Nuestro visor SVG profesional proporciona soporte integral para gráficos vectoriales escalables, incluyendo zoom infinito, edición de código y conversión de formato. Ya seas diseñador, desarrollador o creador de contenido, nuestra plataforma ofrece las herramientas que necesitas para el manejo profesional de imágenes SVG.',
        seo_viewing_title: 'Funciones Avanzadas de Visualización',
        seo_viewing_text: 'Visualiza gráficos SVG con capacidades de zoom infinito, inspección de código y análisis detallado. Nuestro visor admite todas las funciones SVG, incluyendo animaciones, elementos interactivos y JavaScript embebido, asegurando una representación precisa de tus gráficos vectoriales.',
        seo_conversion_title: 'Herramientas de Conversión Profesionales',
        seo_conversion_text: 'Convierte archivos SVG a PNG, JPEG, WebP y otros formatos raster en cualquier resolución manteniendo calidad óptima. Nuestro motor de conversión ofrece tamaños de salida ajustables, configuraciones de calidad y capacidades de procesamiento por lotes para manejar múltiples archivos simultáneamente.',
        seo_optimization_title: 'Optimización de Calidad',
        seo_optimization_text: 'Optimiza archivos SVG para uso web con nuestras herramientas inteligentes que reducen los tamaños de archivo preservando la calidad vectorial. Perfecto para optimización de sitios web, conjuntos de iconos y gráficos responsivos donde la escalabilidad y el tamaño de archivo importan.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar Barra Lateral',
          search_placeholder: 'Buscar archivos...',
          files_header: 'Archivos',
          add_files: '+ Agregar',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Visionneuse SVG Gratuite - Visionneuse de Graphiques Vectoriels Scalables en Ligne',
        meta_description: 'Voir et convertir des fichiers SVG (Scalable Vector Graphics) en ligne gratuitement. Scalabilité infinie, édition basée sur le code et éléments interactifs. Jusqu\'à 20 fichiers, 100 Mo au total. Aucune inscription requise.',
        meta_keywords: 'visionneuse SVG, graphiques vectoriels, SVG vers PNG, SVG vers JPEG, graphiques scalables, graphiques XML, visionneuse de logos, visionneuse d\'icônes, traitement par lots',
        hero_title: 'Visionneuse SVG Gratuite',
        hero_subtitle: 'Voir des graphiques vectoriels scalables avec zoom infini et édition de code',
        upload_title: 'Télécharger des Fichiers SVG',
        upload_description: 'Glissez-déposez vos graphiques vectoriels SVG ou cliquez pour parcourir. Prend en charge les formats SVG et SVGZ jusqu\'à 100 Mo au total.',
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
          vector_graphics: '✓ Graphiques Vectoriels',
          scalable: '🎨 Infiniment Scalable',
          fast_processing: '⚡ Traitement Rapide'
        },
        features: [
          { title: 'Scalabilité Infinie', description: 'Voir des graphiques SVG à n\'importe quelle taille sans perte de qualité, parfait pour les logos, icônes et illustrations' },
          { title: 'Édition Basée sur le Code', description: 'Modifier le code SVG directement avec coloration syntaxique et aperçu en temps réel des modifications' },
          { title: 'Éléments Interactifs', description: 'Support pour animations, éléments interactifs et JavaScript intégré dans les fichiers SVG' }
        ],
        about_title: 'À Propos du Format SVG',
        about_intro: 'SVG (Scalable Vector Graphics) est un format d\'image vectorielle basé sur XML pour les graphiques bidimensionnels. Contrairement aux formats raster comme JPEG ou PNG, SVG utilise des descriptions mathématiques de formes, le rendant indépendant de la résolution et infiniment scalable sans perte de qualité. Les fichiers SVG peuvent être modifiés avec des éditeurs de texte, stylisés avec CSS et animés avec JavaScript.',
        advantages_title: 'Avantages Clés',
        advantages: [
          'Scalabilité infinie – Aucune perte de qualité à n\'importe quelle taille',
          'Petites tailles de fichier – Efficace pour les graphiques simples',
          'Édition basée sur le code – Modifier avec n\'importe quel éditeur de texte',
          'Style CSS – Styliser avec des feuilles de style en cascade',
          'Support JavaScript – Graphiques interactifs et animés',
          'Accessibilité – Format basé sur le texte, convivial pour les lecteurs d\'écran'
        ],
        use_cases_title: 'Meilleurs Cas d\'Utilisation',
        use_cases: [
          'Graphiques web – Logos, icônes et illustrations',
          'Conception UI – Éléments d\'interface et icônes',
          'Cartes et graphiques – Visualisations de données scalables',
          'Graphiques d\'impression – Graphiques vectoriels pour l\'impression',
          'Animations – Animations SVG et transitions',
          'Design responsive – Graphiques qui s\'adaptent à la taille de l\'écran'
        ],
        specs_title: 'Spécifications Techniques SVG',
        specs_header_label: 'Spécification',
        specs_header_value: 'Détails',
        specs: [
          { label: 'Extension de Fichier', value: '.svg, .svgz' },
          { label: 'Type MIME', value: 'image/svg+xml' },
          { label: 'Type de Format', value: 'Graphiques vectoriels (basé sur XML)' },
          { label: 'Scalabilité', value: 'Infinie (indépendante de la résolution)' },
          { label: 'Support de Couleur', value: 'Couleur complète, dégradés, motifs' },
          { label: 'Animation', value: 'Animations SMIL, CSS, JavaScript' },
          { label: 'Interactivité', value: 'Gestionnaires d\'événements JavaScript pris en charge' },
          { label: 'Compression', value: 'SVGZ (SVG compressé avec gzip)' }
        ],
        seo_title: 'Fonctionnalités du Visionneuse et Convertisseur SVG',
        seo_intro: 'Notre visionneuse SVG professionnelle fournit un support complet pour les graphiques vectoriels scalables, y compris le zoom infini, l\'édition de code et la conversion de format. Que vous soyez designer, développeur ou créateur de contenu, notre plateforme offre les outils dont vous avez besoin pour la gestion professionnelle des images SVG.',
        seo_viewing_title: 'Fonctionnalités de Visualisation Avancées',
        seo_viewing_text: 'Visualisez des graphiques SVG avec des capacités de zoom infini, inspection de code et analyse détaillée. Notre visionneuse prend en charge toutes les fonctionnalités SVG, y compris les animations, éléments interactifs et JavaScript intégré, garantissant une représentation précise de vos graphiques vectoriels.',
        seo_conversion_title: 'Outils de Conversion Professionnels',
        seo_conversion_text: 'Convertissez les fichiers SVG en PNG, JPEG, WebP et autres formats raster à n\'importe quelle résolution tout en maintenant une qualité optimale. Notre moteur de conversion offre des tailles de sortie ajustables, des paramètres de qualité et des capacités de traitement par lots pour gérer plusieurs fichiers simultanément.',
        seo_optimization_title: 'Optimisation de la Qualité',
        seo_optimization_text: 'Optimisez les fichiers SVG pour une utilisation web avec nos outils intelligents qui réduisent les tailles de fichier tout en préservant la qualité vectorielle. Parfait pour l\'optimisation de sites web, les ensembles d\'icônes et les graphiques responsives où la scalabilité et la taille de fichier comptent.',
        editor: {
          toggle_sidebar: 'Basculer la Barre Latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la Barre Latérale',
          search_placeholder: 'Rechercher des fichiers...',
          files_header: 'Fichiers',
          add_files: '+ Ajouter',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Visualizzatore SVG Gratuito - Visualizzatore di Grafica Vettoriale Scalabile Online',
        meta_description: 'Visualizza e converti file SVG (Scalable Vector Graphics) online gratuitamente. Scalabilità infinita, modifica basata su codice ed elementi interattivi. Fino a 20 file, 100MB totali. Nessuna registrazione richiesta.',
        meta_keywords: 'visualizzatore SVG, grafica vettoriale, SVG a PNG, SVG a JPEG, grafica scalabile, grafica XML, visualizzatore logo, visualizzatore icone, elaborazione batch',
        hero_title: 'Visualizzatore SVG Gratuito',
        hero_subtitle: 'Visualizza grafica vettoriale scalabile con zoom infinito e modifica codice',
        upload_title: 'Carica File SVG',
        upload_description: 'Trascina e rilascia la tua grafica vettoriale SVG o fai clic per sfogliare. Supporta formati SVG e SVGZ fino a 100MB totali.',
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
          vector_graphics: '✓ Grafica Vettoriale',
          scalable: '🎨 Infinitamente Scalabile',
          fast_processing: '⚡ Elaborazione Veloce'
        },
        features: [
          { title: 'Scalabilità Infinita', description: 'Visualizza grafica SVG in qualsiasi dimensione senza perdita di qualità, perfetto per loghi, icone e illustrazioni' },
          { title: 'Modifica Basata su Codice', description: 'Modifica il codice SVG direttamente con evidenziazione della sintassi e anteprima in tempo reale delle modifiche' },
          { title: 'Elementi Interattivi', description: 'Supporto per animazioni, elementi interattivi e JavaScript incorporato nei file SVG' }
        ],
        about_title: 'Informazioni sul Formato SVG',
        about_intro: 'SVG (Scalable Vector Graphics) è un formato di immagine vettoriale basato su XML per grafica bidimensionale. A differenza dei formati raster come JPEG o PNG, SVG utilizza descrizioni matematiche di forme, rendendolo indipendente dalla risoluzione e infinitamente scalabile senza perdita di qualità. I file SVG possono essere modificati con editor di testo, stilizzati con CSS e animati con JavaScript.',
        advantages_title: 'Vantaggi Chiave',
        advantages: [
          'Scalabilità infinita – Nessuna perdita di qualità in qualsiasi dimensione',
          'Piccole dimensioni file – Efficiente per grafica semplice',
          'Modifica basata su codice – Modifica con qualsiasi editor di testo',
          'Stile CSS – Stilizza con fogli di stile a cascata',
          'Supporto JavaScript – Grafica interattiva e animata',
          'Accessibilità – Formato basato su testo, amichevole per screen reader'
        ],
        use_cases_title: 'Migliori Casi d\'Uso',
        use_cases: [
          'Grafica web – Loghi, icone e illustrazioni',
          'Design UI – Elementi di interfaccia e icone',
          'Mappe e grafici – Visualizzazioni dati scalabili',
          'Grafica per stampa – Grafica vettoriale per la stampa',
          'Animazioni – Animazioni SVG e transizioni',
          'Design responsive – Grafica che scala con la dimensione dello schermo'
        ],
        specs_title: 'Specifiche Tecniche SVG',
        specs_header_label: 'Specifica',
        specs_header_value: 'Dettagli',
        specs: [
          { label: 'Estensione File', value: '.svg, .svgz' },
          { label: 'Tipo MIME', value: 'image/svg+xml' },
          { label: 'Tipo Formato', value: 'Grafica vettoriale (basata su XML)' },
          { label: 'Scalabilità', value: 'Infinita (indipendente dalla risoluzione)' },
          { label: 'Supporto Colore', value: 'Colore completo, gradienti, pattern' },
          { label: 'Animazione', value: 'Animazioni SMIL, CSS, JavaScript' },
          { label: 'Interattività', value: 'Gestori eventi JavaScript supportati' },
          { label: 'Compressione', value: 'SVGZ (SVG compresso con gzip)' }
        ],
        seo_title: 'Funzionalità Visualizzatore e Convertitore SVG',
        seo_intro: 'Il nostro visualizzatore SVG professionale fornisce supporto completo per grafica vettoriale scalabile, inclusa zoom infinito, modifica codice e conversione formato. Che tu sia un designer, sviluppatore o creatore di contenuti, la nostra piattaforma offre gli strumenti di cui hai bisogno per la gestione professionale di immagini SVG.',
        seo_viewing_title: 'Funzionalità di Visualizzazione Avanzate',
        seo_viewing_text: 'Visualizza grafica SVG con capacità di zoom infinito, ispezione codice e analisi dettagliata. Il nostro visualizzatore supporta tutte le funzionalità SVG, inclusa animazione, elementi interattivi e JavaScript incorporato, garantendo una rappresentazione accurata dei tuoi grafici vettoriali.',
        seo_conversion_title: 'Strumenti di Conversione Professionali',
        seo_conversion_text: 'Converti file SVG in PNG, JPEG, WebP e altri formati raster a qualsiasi risoluzione mantenendo qualità ottimale. Il nostro motore di conversione offre dimensioni output regolabili, impostazioni qualità e capacità di elaborazione batch per gestire più file contemporaneamente.',
        seo_optimization_title: 'Ottimizzazione Qualità',
        seo_optimization_text: 'Ottimizza file SVG per uso web con i nostri strumenti intelligenti che riducono le dimensioni dei file preservando la qualità vettoriale. Perfetto per ottimizzazione siti web, set di icone e grafica responsive dove scalabilità e dimensioni file contano.',
        editor: {
          toggle_sidebar: 'Mostra/Nascondi Barra Laterale',
          close: 'Chiudi (Esc)',
          close_sidebar: 'Chiudi Barra Laterale',
          search_placeholder: 'Cerca file...',
          files_header: 'File',
          add_files: '+ Aggiungi',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Gratis SVG Viewer - Online Schaalbaar Vectorafbeelding Viewer',
        meta_description: 'Bekijk en converteer SVG (Scalable Vector Graphics) bestanden online gratis. Oneindige schaalbaarheid, code-gebaseerde bewerking en interactieve elementen. Tot 20 bestanden, 100MB totaal. Geen registratie vereist.',
        meta_keywords: 'SVG viewer, vectorafbeeldingen, SVG naar PNG, SVG naar JPEG, schaalbare afbeeldingen, XML-afbeeldingen, logo viewer, icoon viewer, batchverwerking',
        hero_title: 'Gratis SVG Viewer',
        hero_subtitle: 'Bekijk schaalbare vectorafbeeldingen met oneindige zoom en codebewerking',
        upload_title: 'Upload SVG Bestanden',
        upload_description: 'Sleep en zet je SVG vectorafbeeldingen neer of klik om te bladeren. Ondersteunt SVG- en SVGZ-formaten tot 100MB totaal.',
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
          vector_graphics: '✓ Vectorafbeeldingen',
          scalable: '🎨 Oneindig Schaalbare',
          fast_processing: '⚡ Snelle Verwerking'
        },
        features: [
          { title: 'Oneindige Schaalbare', description: 'Bekijk SVG-afbeeldingen in elke grootte zonder kwaliteitsverlies, perfect voor logo\'s, iconen en illustraties' },
          { title: 'Code-gebaseerde Bewerking', description: 'Bewerk SVG-code direct met syntax highlighting en real-time voorvertoning van wijzigingen' },
          { title: 'Interactieve Elementen', description: 'Ondersteuning voor animaties, interactieve elementen en ingesloten JavaScript in SVG-bestanden' }
        ],
        about_title: 'Over SVG Formaat',
        about_intro: 'SVG (Scalable Vector Graphics) is een XML-gebaseerd vectorafbeeldingsformaat voor tweedimensionale afbeeldingen. In tegenstelling tot rasterformaten zoals JPEG of PNG, gebruikt SVG wiskundige beschrijvingen van vormen, waardoor het resolutie-onafhankelijk en oneindig schaalbaar is zonder kwaliteitsverlies. SVG-bestanden kunnen worden bewerkt met teksteditors, gestyled met CSS en geanimeerd met JavaScript.',
        advantages_title: 'Belangrijkste Voordelen',
        advantages: [
          'Oneindige schaalbaarheid – Geen kwaliteitsverlies in elke grootte',
          'Kleine bestandsgroottes – Efficiënt voor eenvoudige afbeeldingen',
          'Code-gebaseerde bewerking – Bewerken met elke teksteditor',
          'CSS-styling – Stylen met stylesheets',
          'JavaScript-ondersteuning – Interactieve en geanimeerde afbeeldingen',
          'Toegankelijkheid – Tekstgebaseerd formaat, screenreader-vriendelijk'
        ],
        use_cases_title: 'Beste Gebruikssituaties',
        use_cases: [
          'Web-afbeeldingen – Logo\'s, iconen en illustraties',
          'UI-ontwerp – Interface-elementen en iconen',
          'Kaarten en grafieken – Schaalbare datavisualisaties',
          'Printafbeeldingen – Vectorafbeeldingen voor printen',
          'Animaties – SVG-animaties en overgangen',
          'Responsief ontwerp – Afbeeldingen die schalen met schermgrootte'
        ],
        specs_title: 'SVG Technische Specificaties',
        specs_header_label: 'Specificatie',
        specs_header_value: 'Details',
        specs: [
          { label: 'Bestandsextensie', value: '.svg, .svgz' },
          { label: 'MIME Type', value: 'image/svg+xml' },
          { label: 'Formattype', value: 'Vectorafbeeldingen (XML-gebaseerd)' },
          { label: 'Schaalbaarheid', value: 'Oneindig (resolutie-onafhankelijk)' },
          { label: 'Kleurondersteuning', value: 'Volledige kleur, gradienten, patronen' },
          { label: 'Animatie', value: 'SMIL-, CSS-, JavaScript-animaties' },
          { label: 'Interactiviteit', value: 'JavaScript-gebeurtenishandlers ondersteund' },
          { label: 'Compressie', value: 'SVGZ (gzip-gecomprimeerd SVG)' }
        ],
        seo_title: 'SVG Viewer en Converter Functies',
        seo_intro: 'Onze professionele SVG viewer biedt uitgebreide ondersteuning voor schaalbare vectorafbeeldingen, inclusief oneindige zoom, codebewerking en formaatconversie. Of je nu ontwerper, ontwikkelaar of contentmaker bent, ons platform biedt de tools die je nodig hebt voor professionele SVG-afbeeldingsverwerking.',
        seo_viewing_title: 'Geavanceerde Weergavefuncties',
        seo_viewing_text: 'Bekijk SVG-afbeeldingen met oneindige zoom-functies, code-inspectie en gedetailleerde analyse. Onze viewer ondersteunt alle SVG-functies, inclusief animaties, interactieve elementen en ingesloten JavaScript, waardoor nauwkeurige weergave van je vectorafbeeldingen wordt gegarandeerd.',
        seo_conversion_title: 'Professionele Conversietools',
        seo_conversion_text: 'Converteer SVG-bestanden naar PNG, JPEG, WebP en andere rasterformaten in elke resolutie terwijl de optimale kwaliteit behouden blijft. Onze conversie-engine biedt instelbare uitvoergroottes, kwaliteitsinstellingen en batchverwerkingsmogelijkheden voor het gelijktijdig verwerken van meerdere bestanden.',
        seo_optimization_title: 'Kwaliteitsoptimalisatie',
        seo_optimization_text: 'Optimaliseer SVG-bestanden voor webgebruik met onze slimme tools die bestandsgroottes verkleinen terwijl de vector kwaliteit behouden blijft. Perfect voor website-optimalisatie, iconensets en responsieve afbeeldingen waar schaalbaarheid en bestandsgrootte belangrijk zijn.',
        editor: {
          toggle_sidebar: 'Zijbalk In-/Uitschakelen',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk Sluiten',
          search_placeholder: 'Zoek bestanden...',
          files_header: 'Bestanden',
          add_files: '+ Toevoegen',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Visualizador SVG Gratuito - Visualizador de Gráficos Vetoriais Escaláveis Online',
        meta_description: 'Ver e converter arquivos SVG (Scalable Vector Graphics) online gratuitamente. Escalabilidade infinita, edição baseada em código e elementos interativos. Até 20 arquivos, 100MB total. Nenhum registro necessário.',
        meta_keywords: 'visualizador SVG, gráficos vetoriais, SVG para PNG, SVG para JPEG, gráficos escaláveis, gráficos XML, visualizador de logos, visualizador de ícones, processamento em lote',
        hero_title: 'Visualizador SVG Gratuito',
        hero_subtitle: 'Ver gráficos vetoriais escaláveis com zoom infinito e edição de código',
        upload_title: 'Carregar Arquivos SVG',
        upload_description: 'Arraste e solte seus gráficos vetoriais SVG ou clique para procurar. Suporta formatos SVG e SVGZ até 100MB no total.',
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
          vector_graphics: '✓ Gráficos Vetoriais',
          scalable: '🎨 Infinitamente Escalável',
          fast_processing: '⚡ Processamento Rápido'
        },
        features: [
          { title: 'Escalabilidade Infinita', description: 'Ver gráficos SVG em qualquer tamanho sem perda de qualidade, perfeito para logos, ícones e ilustrações' },
          { title: 'Edição Baseada em Código', description: 'Editar código SVG diretamente com destaque de sintaxe e visualização em tempo real de alterações' },
          { title: 'Elementos Interativos', description: 'Suporte para animações, elementos interativos e JavaScript incorporado em arquivos SVG' }
        ],
        about_title: 'Sobre o Formato SVG',
        about_intro: 'SVG (Scalable Vector Graphics) é um formato de imagem vetorial baseado em XML para gráficos bidimensionais. Diferentemente de formatos raster como JPEG ou PNG, SVG usa descrições matemáticas de formas, tornando-o independente de resolução e infinitamente escalável sem perda de qualidade. Arquivos SVG podem ser editados com editores de texto, estilizados com CSS e animados com JavaScript.',
        advantages_title: 'Vantagens Principais',
        advantages: [
          'Escalabilidade infinita – Sem perda de qualidade em qualquer tamanho',
          'Tamanhos de arquivo pequenos – Eficiente para gráficos simples',
          'Edição baseada em código – Editar com qualquer editor de texto',
          'Estilos CSS – Estilizar com folhas de estilo em cascata',
          'Suporte JavaScript – Gráficos interativos e animados',
          'Acessibilidade – Formato baseado em texto, amigável para leitores de tela'
        ],
        use_cases_title: 'Melhores Casos de Uso',
        use_cases: [
          'Gráficos web – Logos, ícones e ilustrações',
          'Design UI – Elementos de interface e ícones',
          'Mapas e gráficos – Visualizações de dados escaláveis',
          'Gráficos para impressão – Gráficos vetoriais para impressão',
          'Animações – Animações SVG e transições',
          'Design responsivo – Gráficos que escalam com o tamanho da tela'
        ],
        specs_title: 'Especificações Técnicas SVG',
        specs_header_label: 'Especificação',
        specs_header_value: 'Detalhes',
        specs: [
          { label: 'Extensão de Arquivo', value: '.svg, .svgz' },
          { label: 'Tipo MIME', value: 'image/svg+xml' },
          { label: 'Tipo de Formato', value: 'Gráficos vetoriais (baseado em XML)' },
          { label: 'Escalabilidade', value: 'Infinita (independente de resolução)' },
          { label: 'Suporte de Cor', value: 'Cor completa, gradientes, padrões' },
          { label: 'Animação', value: 'Animações SMIL, CSS, JavaScript' },
          { label: 'Interatividade', value: 'Manipuladores de eventos JavaScript suportados' },
          { label: 'Compressão', value: 'SVGZ (SVG compactado com gzip)' }
        ],
        seo_title: 'Recursos do Visualizador e Conversor SVG',
        seo_intro: 'Nosso visualizador SVG profissional fornece suporte abrangente para gráficos vetoriais escaláveis, incluindo zoom infinito, edição de código e conversão de formato. Seja você designer, desenvolvedor ou criador de conteúdo, nossa plataforma oferece as ferramentas necessárias para o processamento profissional de imagens SVG.',
        seo_viewing_title: 'Recursos Avançados de Visualização',
        seo_viewing_text: 'Visualize gráficos SVG com capacidades de zoom infinito, inspeção de código e análise detalhada. Nosso visualizador suporta todos os recursos SVG, incluindo animações, elementos interativos e JavaScript incorporado, garantindo representação precisa dos seus gráficos vetoriais.',
        seo_conversion_title: 'Ferramentas de Conversão Profissionais',
        seo_conversion_text: 'Converta arquivos SVG para PNG, JPEG, WebP e outros formatos raster em qualquer resolução mantendo qualidade ótima. Nosso mecanismo de conversão oferece tamanhos de saída ajustáveis, configurações de qualidade e capacidades de processamento em lote para lidar com múltiplos arquivos simultaneamente.',
        seo_optimization_title: 'Otimização de Qualidade',
        seo_optimization_text: 'Otimize arquivos SVG para uso na web com nossas ferramentas inteligentes que reduzem os tamanhos de arquivo preservando a qualidade vetorial. Perfeito para otimização de sites, conjuntos de ícones e gráficos responsivos onde escalabilidade e tamanho de arquivo importam.',
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar Barra Lateral',
          search_placeholder: 'Pesquisar arquivos...',
          files_header: 'Arquivos',
          add_files: '+ Adicionar',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Trình Xem SVG Miễn Phí - Trình Xem Đồ Họa Vector Có Thể Mở Rộng Trực Tuyến',
        meta_description: 'Xem và chuyển đổi tệp SVG (Scalable Vector Graphics) trực tuyến miễn phí. Khả năng mở rộng vô hạn, chỉnh sửa dựa trên mã và các phần tử tương tác. Lên đến 20 tệp, 100MB tổng cộng. Không cần đăng ký.',
        meta_keywords: 'trình xem SVG, đồ họa vector, SVG sang PNG, SVG sang JPEG, đồ họa có thể mở rộng, đồ họa XML, trình xem logo, trình xem biểu tượng, xử lý hàng loạt',
        hero_title: 'Trình Xem SVG Miễn Phí',
        hero_subtitle: 'Xem đồ họa vector có thể mở rộng với zoom vô hạn và chỉnh sửa mã',
        upload_title: 'Tải Lên Tệp SVG',
        upload_description: 'Kéo và thả đồ họa vector SVG của bạn hoặc nhấp để duyệt. Hỗ trợ định dạng SVG và SVGZ lên đến 100MB tổng cộng.',
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
          vector_graphics: '✓ Đồ Họa Vector',
          scalable: '🎨 Có Thể Mở Rộng Vô Hạn',
          fast_processing: '⚡ Xử Lý Nhanh'
        },
        features: [
          { title: 'Khả Năng Mở Rộng Vô Hạn', description: 'Xem đồ họa SVG ở bất kỳ kích thước nào mà không mất chất lượng, hoàn hảo cho logo, biểu tượng và minh họa' },
          { title: 'Chỉnh Sửa Dựa Trên Mã', description: 'Chỉnh sửa mã SVG trực tiếp với tô sáng cú pháp và xem trước thay đổi theo thời gian thực' },
          { title: 'Phần Tử Tương Tác', description: 'Hỗ trợ hoạt hình, phần tử tương tác và JavaScript nhúng trong tệp SVG' }
        ],
        about_title: 'Về Định Dạng SVG',
        about_intro: 'SVG (Scalable Vector Graphics) là định dạng hình ảnh vector dựa trên XML cho đồ họa hai chiều. Không giống như định dạng raster như JPEG hoặc PNG, SVG sử dụng mô tả toán học của hình dạng, làm cho nó độc lập với độ phân giải và có thể mở rộng vô hạn mà không mất chất lượng. Tệp SVG có thể được chỉnh sửa bằng trình soạn thảo văn bản, tạo kiểu bằng CSS và tạo hoạt hình bằng JavaScript.',
        advantages_title: 'Ưu Điểm Chính',
        advantages: [
          'Khả năng mở rộng vô hạn – Không mất chất lượng ở bất kỳ kích thước nào',
          'Kích thước tệp nhỏ – Hiệu quả cho đồ họa đơn giản',
          'Chỉnh sửa dựa trên mã – Chỉnh sửa bằng bất kỳ trình soạn thảo văn bản nào',
          'Tạo kiểu CSS – Tạo kiểu bằng bảng định kiểu xếp tầng',
          'Hỗ trợ JavaScript – Đồ họa tương tác và hoạt hình',
          'Khả năng truy cập – Định dạng dựa trên văn bản, thân thiện với trình đọc màn hình'
        ],
        use_cases_title: 'Trường Hợp Sử Dụng Tốt Nhất',
        use_cases: [
          'Đồ họa web – Logo, biểu tượng và minh họa',
          'Thiết kế UI – Phần tử giao diện và biểu tượng',
          'Bản đồ và biểu đồ – Trực quan hóa dữ liệu có thể mở rộng',
          'Đồ họa in – Đồ họa vector để in',
          'Hoạt hình – Hoạt hình SVG và chuyển tiếp',
          'Thiết kế responsive – Đồ họa mở rộng theo kích thước màn hình'
        ],
        specs_title: 'Thông Số Kỹ Thuật SVG',
        specs_header_label: 'Thông Số',
        specs_header_value: 'Chi Tiết',
        specs: [
          { label: 'Phần Mở Rộng Tệp', value: '.svg, .svgz' },
          { label: 'Loại MIME', value: 'image/svg+xml' },
          { label: 'Loại Định Dạng', value: 'Đồ họa vector (dựa trên XML)' },
          { label: 'Khả Năng Mở Rộng', value: 'Vô hạn (độc lập với độ phân giải)' },
          { label: 'Hỗ Trợ Màu', value: 'Màu đầy đủ, gradient, mẫu' },
          { label: 'Hoạt Hình', value: 'Hoạt hình SMIL, CSS, JavaScript' },
          { label: 'Tương Tác', value: 'Trình xử lý sự kiện JavaScript được hỗ trợ' },
          { label: 'Nén', value: 'SVGZ (SVG nén bằng gzip)' }
        ],
        seo_title: 'Tính Năng Trình Xem và Chuyển Đổi SVG',
        seo_intro: 'Trình xem SVG chuyên nghiệp của chúng tôi cung cấp hỗ trợ toàn diện cho đồ họa vector có thể mở rộng, bao gồm zoom vô hạn, chỉnh sửa mã và chuyển đổi định dạng. Dù bạn là nhà thiết kế, nhà phát triển hay người tạo nội dung, nền tảng của chúng tôi cung cấp các công cụ bạn cần để xử lý hình ảnh SVG chuyên nghiệp.',
        seo_viewing_title: 'Tính Năng Xem Nâng Cao',
        seo_viewing_text: 'Xem đồ họa SVG với khả năng zoom vô hạn, kiểm tra mã và phân tích chi tiết. Trình xem của chúng tôi hỗ trợ tất cả các tính năng SVG, bao gồm hoạt hình, phần tử tương tác và JavaScript nhúng, đảm bảo biểu diễn chính xác đồ họa vector của bạn.',
        seo_conversion_title: 'Công Cụ Chuyển Đổi Chuyên Nghiệp',
        seo_conversion_text: 'Chuyển đổi tệp SVG sang PNG, JPEG, WebP và các định dạng raster khác ở bất kỳ độ phân giải nào trong khi duy trì chất lượng tối ưu. Công cụ chuyển đổi của chúng tôi cung cấp kích thước đầu ra có thể điều chỉnh, cài đặt chất lượng và khả năng xử lý hàng loạt để xử lý nhiều tệp đồng thời.',
        seo_optimization_title: 'Tối Ưu Hóa Chất Lượng',
        seo_optimization_text: 'Tối ưu hóa tệp SVG cho sử dụng web với các công cụ thông minh của chúng tôi giảm kích thước tệp trong khi bảo toàn chất lượng vector. Hoàn hảo cho tối ưu hóa trang web, bộ biểu tượng và đồ họa responsive nơi khả năng mở rộng và kích thước tệp quan trọng.',
        editor: {
          toggle_sidebar: 'Chuyển Đổi Thanh Bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng Thanh Bên',
          search_placeholder: 'Tìm kiếm tệp...',
          files_header: 'Tệp',
          add_files: '+ Thêm',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Ücretsiz SVG Görüntüleyici - Online Ölçeklenebilir Vektör Grafik Görüntüleyici',
        meta_description: 'SVG (Scalable Vector Graphics) dosyalarını çevrimiçi görüntüleyin ve ücretsiz dönüştürün. Sonsuz ölçeklenebilirlik, kod tabanlı düzenleme ve etkileşimli öğeler. 20 dosyaya kadar, toplam 100MB. Kayıt gerekmez.',
        meta_keywords: 'SVG görüntüleyici, vektör grafikleri, SVG\'den PNG\'ye, SVG\'den JPEG\'ye, ölçeklenebilir grafikler, XML grafikleri, logo görüntüleyici, ikon görüntüleyici, toplu işleme',
        hero_title: 'Ücretsiz SVG Görüntüleyici',
        hero_subtitle: 'Sonsuz zoom ve kod düzenleme ile ölçeklenebilir vektör grafiklerini görüntüleyin',
        upload_title: 'SVG Dosyalarını Yükle',
        upload_description: 'SVG vektör grafiklerinizi sürükleyip bırakın veya göz atmak için tıklayın. Toplam 100MB\'a kadar SVG ve SVGZ formatlarını destekler.',
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
          vector_graphics: '✓ Vektör Grafikleri',
          scalable: '🎨 Sonsuz Ölçeklenebilir',
          fast_processing: '⚡ Hızlı İşleme'
        },
        features: [
          { title: 'Sonsuz Ölçeklenebilirlik', description: 'Herhangi bir boyutta kalite kaybı olmadan SVG grafiklerini görüntüleyin, logolar, ikonlar ve illüstrasyonlar için mükemmel' },
          { title: 'Kod Tabanlı Düzenleme', description: 'Sözdizimi vurgulama ve değişikliklerin gerçek zamanlı önizlemesi ile SVG kodunu doğrudan düzenleyin' },
          { title: 'Etkileşimli Öğeler', description: 'SVG dosyalarında animasyonlar, etkileşimli öğeler ve gömülü JavaScript desteği' }
        ],
        about_title: 'SVG Formatı Hakkında',
        about_intro: 'SVG (Scalable Vector Graphics), iki boyutlu grafikler için XML tabanlı bir vektör görüntü formatıdır. JPEG veya PNG gibi raster formatların aksine, SVG şekillerin matematiksel açıklamalarını kullanır, bu da onu çözünürlükten bağımsız ve kalite kaybı olmadan sonsuz ölçeklenebilir hale getirir. SVG dosyaları metin editörleriyle düzenlenebilir, CSS ile stillendirilebilir ve JavaScript ile animasyonlu hale getirilebilir.',
        advantages_title: 'Temel Avantajlar',
        advantages: [
          'Sonsuz ölçeklenebilirlik – Herhangi bir boyutta kalite kaybı yok',
          'Küçük dosya boyutları – Basit grafikler için verimli',
          'Kod tabanlı düzenleme – Herhangi bir metin editörüyle düzenleyin',
          'CSS stillendirme – Stil sayfalarıyla stillendirin',
          'JavaScript desteği – Etkileşimli ve animasyonlu grafikler',
          'Erişilebilirlik – Metin tabanlı format, ekran okuyucu dostu'
        ],
        use_cases_title: 'En İyi Kullanım Durumları',
        use_cases: [
          'Web grafikleri – Logolar, ikonlar ve illüstrasyonlar',
          'UI tasarımı – Arayüz öğeleri ve ikonlar',
          'Haritalar ve grafikler – Ölçeklenebilir veri görselleştirmeleri',
          'Baskı grafikleri – Baskı için vektör grafikleri',
          'Animasyonlar – SVG animasyonları ve geçişler',
          'Responsive tasarım – Ekran boyutuyla ölçeklenen grafikler'
        ],
        specs_title: 'SVG Teknik Özellikleri',
        specs_header_label: 'Özellik',
        specs_header_value: 'Detaylar',
        specs: [
          { label: 'Dosya Uzantısı', value: '.svg, .svgz' },
          { label: 'MIME Türü', value: 'image/svg+xml' },
          { label: 'Format Türü', value: 'Vektör grafikleri (XML tabanlı)' },
          { label: 'Ölçeklenebilirlik', value: 'Sonsuz (çözünürlükten bağımsız)' },
          { label: 'Renk Desteği', value: 'Tam renk, gradyanlar, desenler' },
          { label: 'Animasyon', value: 'SMIL, CSS, JavaScript animasyonları' },
          { label: 'Etkileşimlilik', value: 'JavaScript olay işleyicileri desteklenir' },
          { label: 'Sıkıştırma', value: 'SVGZ (gzip ile sıkıştırılmış SVG)' }
        ],
        seo_title: 'SVG Görüntüleyici ve Dönüştürücü Özellikleri',
        seo_intro: 'Profesyonel SVG görüntüleyicimiz, sonsuz zoom, kod düzenleme ve format dönüştürme dahil olmak üzere ölçeklenebilir vektör grafikleri için kapsamlı destek sağlar. İster tasarımcı, ister geliştirici veya içerik oluşturucu olun, platformumuz profesyonel SVG görüntü işleme için ihtiyacınız olan araçları sunar.',
        seo_viewing_title: 'Gelişmiş Görüntüleme Özellikleri',
        seo_viewing_text: 'Sonsuz zoom özellikleri, kod inceleme ve detaylı analiz ile SVG grafiklerini görüntüleyin. Görüntüleyicimiz animasyonlar, etkileşimli öğeler ve gömülü JavaScript dahil olmak üzere tüm SVG özelliklerini destekler ve vektör grafiklerinizin doğru temsilini sağlar.',
        seo_conversion_title: 'Profesyonel Dönüştürme Araçları',
        seo_conversion_text: 'Animasyon kalitesini korurken SVG dosyalarını herhangi bir çözünürlükte PNG, JPEG, WebP ve diğer raster formatlara dönüştürün. Dönüştürme motorumuz, birden fazla dosyayı aynı anda işlemek için ayarlanabilir çıktı boyutları, kalite ayarları ve toplu işleme yetenekleri sunar.',
        seo_optimization_title: 'Kalite Optimizasyonu',
        seo_optimization_text: 'Vektör kalitesini korurken dosya boyutlarını azaltan akıllı araçlarımızla SVG dosyalarını web kullanımı için optimize edin. Dosya boyutu ve kalitenin önemli olduğu web sitesi optimizasyonu, ikon setleri ve responsive grafikler için mükemmeldir.',
        editor: {
          toggle_sidebar: 'Kenar Çubuğunu Aç/Kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar Çubuğunu Kapat',
          search_placeholder: 'Dosyaları ara...',
          files_header: 'Dosyalar',
          add_files: '+ Ekle',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Бесплатный Просмотрщик SVG - Онлайн Просмотрщик Масштабируемой Векторной Графики',
        meta_description: 'Просматривайте и конвертируйте файлы SVG (Scalable Vector Graphics) онлайн бесплатно. Бесконечная масштабируемость, редактирование на основе кода и интерактивные элементы. До 20 файлов, 100 МБ всего. Регистрация не требуется.',
        meta_keywords: 'просмотрщик SVG, векторная графика, SVG в PNG, SVG в JPEG, масштабируемая графика, XML графика, просмотрщик логотипов, просмотрщик иконок, пакетная обработка',
        hero_title: 'Бесплатный Просмотрщик SVG',
        hero_subtitle: 'Просматривайте масштабируемую векторную графику с бесконечным зумом и редактированием кода',
        upload_title: 'Загрузить Файлы SVG',
        upload_description: 'Перетащите ваши SVG векторные графики или нажмите для просмотра. Поддерживает форматы SVG и SVGZ до 100 МБ всего.',
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
          vector_graphics: '✓ Векторная Графика',
          scalable: '🎨 Бесконечно Масштабируемая',
          fast_processing: '⚡ Быстрая Обработка'
        },
        features: [
          { title: 'Бесконечная Масштабируемость', description: 'Просматривайте SVG графику любого размера без потери качества, идеально для логотипов, иконок и иллюстраций' },
          { title: 'Редактирование на Основе Кода', description: 'Редактируйте SVG код напрямую с подсветкой синтаксиса и предпросмотром изменений в реальном времени' },
          { title: 'Интерактивные Элементы', description: 'Поддержка анимаций, интерактивных элементов и встроенного JavaScript в SVG файлах' }
        ],
        about_title: 'О Формате SVG',
        about_intro: 'SVG (Scalable Vector Graphics) — это формат векторных изображений на основе XML для двумерной графики. В отличие от растровых форматов, таких как JPEG или PNG, SVG использует математические описания форм, что делает его независимым от разрешения и бесконечно масштабируемым без потери качества. SVG файлы могут редактироваться текстовыми редакторами, стилизоваться с помощью CSS и анимироваться с помощью JavaScript.',
        advantages_title: 'Ключевые Преимущества',
        advantages: [
          'Бесконечная масштабируемость – Без потери качества в любом размере',
          'Маленькие размеры файлов – Эффективно для простой графики',
          'Редактирование на основе кода – Редактировать любым текстовым редактором',
          'CSS стилизация – Стилизовать с помощью таблиц стилей',
          'Поддержка JavaScript – Интерактивная и анимированная графика',
          'Доступность – Текстовый формат, дружелюбный к программам чтения с экрана'
        ],
        use_cases_title: 'Лучшие Случаи Использования',
        use_cases: [
          'Веб-графика – Логотипы, иконки и иллюстрации',
          'UI дизайн – Элементы интерфейса и иконки',
          'Карты и графики – Масштабируемые визуализации данных',
          'Печатная графика – Векторная графика для печати',
          'Анимации – SVG анимации и переходы',
          'Адаптивный дизайн – Графика, масштабируемая с размером экрана'
        ],
        specs_title: 'Технические Характеристики SVG',
        specs_header_label: 'Характеристика',
        specs_header_value: 'Детали',
        specs: [
          { label: 'Расширение Файла', value: '.svg, .svgz' },
          { label: 'Тип MIME', value: 'image/svg+xml' },
          { label: 'Тип Формата', value: 'Векторная графика (на основе XML)' },
          { label: 'Масштабируемость', value: 'Бесконечная (независимая от разрешения)' },
          { label: 'Поддержка Цвета', value: 'Полный цвет, градиенты, паттерны' },
          { label: 'Анимация', value: 'SMIL, CSS, JavaScript анимации' },
          { label: 'Интерактивность', value: 'Обработчики событий JavaScript поддерживаются' },
          { label: 'Сжатие', value: 'SVGZ (SVG сжатый с gzip)' }
        ],
        seo_title: 'Функции Просмотрщика и Конвертера SVG',
        seo_intro: 'Наш профессиональный просмотрщик SVG обеспечивает комплексную поддержку масштабируемой векторной графики, включая бесконечный зум, редактирование кода и конвертацию форматов. Будь вы дизайнер, разработчик или создатель контента, наша платформа предлагает инструменты, необходимые для профессиональной обработки SVG изображений.',
        seo_viewing_title: 'Расширенные Функции Просмотра',
        seo_viewing_text: 'Просматривайте SVG графику с функциями бесконечного зума, инспекцией кода и детальным анализом. Наш просмотрщик поддерживает все функции SVG, включая анимации, интерактивные элементы и встроенный JavaScript, обеспечивая точное представление вашей векторной графики.',
        seo_conversion_title: 'Профессиональные Инструменты Конвертации',
        seo_conversion_text: 'Конвертируйте файлы SVG в PNG, JPEG, WebP и другие растровые форматы в любом разрешении, сохраняя оптимальное качество. Наш движок конвертации предлагает настраиваемые размеры вывода, настройки качества и возможности пакетной обработки для одновременной обработки нескольких файлов.',
        seo_optimization_title: 'Оптимизация Качества',
        seo_optimization_text: 'Оптимизируйте файлы SVG для веб-использования с помощью наших интеллектуальных инструментов, которые уменьшают размеры файлов, сохраняя векторное качество. Идеально для оптимизации веб-сайтов, наборов иконок и адаптивной графики, где важны масштабируемость и размер файла.',
        editor: {
          toggle_sidebar: 'Переключить Боковую Панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть Боковую Панель',
          search_placeholder: 'Поиск файлов...',
          files_header: 'Файлы',
          add_files: '+ Добавить',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'عارض SVG مجاني - عارض الرسوم المتجهة القابلة للتوسيع عبر الإنترنت',
        meta_description: 'اعرض واعرض ملفات SVG (Scalable Vector Graphics) عبر الإنترنت مجانًا. قابلية التوسيع اللانهائية، التحرير القائم على الكود والعناصر التفاعلية. حتى 20 ملفًا، 100 ميجابايت إجمالي. لا يلزم التسجيل.',
        meta_keywords: 'عارض SVG، الرسوم المتجهة، SVG إلى PNG، SVG إلى JPEG، الرسوم القابلة للتوسيع، الرسوم XML، عارض الشعارات، عارض الأيقونات، المعالجة المجمعة',
        hero_title: 'عارض SVG مجاني',
        hero_subtitle: 'اعرض الرسوم المتجهة القابلة للتوسيع مع التكبير اللانهائي وتحرير الكود',
        upload_title: 'رفع ملفات SVG',
        upload_description: 'اسحب وأفلت الرسوم المتجهة SVG الخاصة بك أو انقر للتصفح. يدعم تنسيقات SVG و SVGZ حتى 100 ميجابايت إجمالي.',
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
          vector_graphics: '✓ الرسوم المتجهة',
          scalable: '🎨 قابلة للتوسيع بلا حدود',
          fast_processing: '⚡ معالجة سريعة'
        },
        features: [
          { title: 'قابلية التوسيع اللانهائية', description: 'اعرض رسوم SVG بأي حجم دون فقدان الجودة، مثالي للشعارات والأيقونات والرسوم التوضيحية' },
          { title: 'التحرير القائم على الكود', description: 'قم بتحرير كود SVG مباشرة مع تمييز بناء الجملة ومعاينة التغييرات في الوقت الفعلي' },
          { title: 'العناصر التفاعلية', description: 'دعم للرسوم المتحركة والعناصر التفاعلية و JavaScript المضمن في ملفات SVG' }
        ],
        about_title: 'حول تنسيق SVG',
        about_intro: 'SVG (Scalable Vector Graphics) هو تنسيق صورة متجهة يعتمد على XML للرسوم ثنائية الأبعاد. على عكس التنسيقات النقطية مثل JPEG أو PNG، يستخدم SVG أوصافًا رياضية للأشكال، مما يجعله مستقلاً عن الدقة وقابلاً للتوسيع بلا حدود دون فقدان الجودة. يمكن تحرير ملفات SVG باستخدام محررات النصوص، وتنسيقها باستخدام CSS، وتحريكها باستخدام JavaScript.',
        advantages_title: 'المزايا الرئيسية',
        advantages: [
          'قابلية التوسيع اللانهائية – لا يوجد فقدان للجودة في أي حجم',
          'أحجام ملفات صغيرة – فعال للرسوم البسيطة',
          'التحرير القائم على الكود – تحرير بأي محرر نصوص',
          'تنسيق CSS – التنسيق باستخدام أوراق الأنماط المتتالية',
          'دعم JavaScript – رسوم تفاعلية ومتحركة',
          'إمكانية الوصول – تنسيق قائم على النص، مناسب لقارئات الشاشة'
        ],
        use_cases_title: 'أفضل حالات الاستخدام',
        use_cases: [
          'رسوم الويب – الشعارات والأيقونات والرسوم التوضيحية',
          'تصميم واجهة المستخدم – عناصر الواجهة والأيقونات',
          'الخرائط والرسوم البيانية – تصورات البيانات القابلة للتوسيع',
          'رسوم الطباعة – الرسوم المتجهة للطباعة',
          'الرسوم المتحركة – رسوم SVG المتحركة والانتقالات',
          'التصميم المتجاوب – الرسوم التي تتوسع مع حجم الشاشة'
        ],
        specs_title: 'المواصفات التقنية SVG',
        specs_header_label: 'المواصفة',
        specs_header_value: 'التفاصيل',
        specs: [
          { label: 'امتداد الملف', value: '.svg, .svgz' },
          { label: 'نوع MIME', value: 'image/svg+xml' },
          { label: 'نوع التنسيق', value: 'الرسوم المتجهة (قائمة على XML)' },
          { label: 'قابلية التوسيع', value: 'لانهائية (مستقلة عن الدقة)' },
          { label: 'دعم الألوان', value: 'لون كامل، تدرجات، أنماط' },
          { label: 'الرسوم المتحركة', value: 'رسوم SMIL و CSS و JavaScript المتحركة' },
          { label: 'التفاعلية', value: 'معالجات أحداث JavaScript مدعومة' },
          { label: 'الضغط', value: 'SVGZ (SVG مضغوط بـ gzip)' }
        ],
        seo_title: 'ميزات عارض ومحول SVG',
        seo_intro: 'يوفر عارض SVG الاحترافي لدينا دعمًا شاملاً للرسوم المتجهة القابلة للتوسيع، بما في ذلك التكبير اللانهائي، تحرير الكود وتحويل التنسيق. سواء كنت مصممًا أو مطورًا أو منشئ محتوى، تقدم منصتنا الأدوات التي تحتاجها لمعالجة صور SVG الاحترافية.',
        seo_viewing_title: 'ميزات العرض المتقدمة',
        seo_viewing_text: 'اعرض رسوم SVG مع قدرات التكبير اللانهائي، فحص الكود والتحليل التفصيلي. يدعم عارضنا جميع ميزات SVG، بما في ذلك الرسوم المتحركة والعناصر التفاعلية و JavaScript المضمن، مما يضمن تمثيلًا دقيقًا لرسومك المتجهة.',
        seo_conversion_title: 'أدوات التحويل الاحترافية',
        seo_conversion_text: 'حول ملفات SVG إلى PNG أو JPEG أو WebP وتنسيقات نقطية أخرى في أي دقة مع الحفاظ على الجودة المثلى. يوفر محرك التحويل لدينا أحجام إخراج قابلة للتعديل وإعدادات الجودة وإمكانيات المعالجة المجمعة للتعامل مع ملفات متعددة في وقت واحد.',
        seo_optimization_title: 'تحسين الجودة',
        seo_optimization_text: 'قم بتحسين ملفات SVG للاستخدام على الويب باستخدام أدواتنا الذكية التي تقلل أحجام الملفات مع الحفاظ على جودة المتجهات. مثالي لتحسين مواقع الويب ومجموعات الأيقونات والرسوم المتجاوبة حيث تهم قابلية التوسيع وحجم الملف.',
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          files_header: 'الملفات',
          add_files: '+ إضافة',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'โปรแกรมดู SVG ฟรี - โปรแกรมดูกราฟิกเวกเตอร์ที่ปรับขนาดได้ออนไลน์',
        meta_description: 'ดูและแปลงไฟล์ SVG (Scalable Vector Graphics) ออนไลน์ฟรี ความสามารถในการขยายไม่จำกัด การแก้ไขตามโค้ดและองค์ประกอบแบบโต้ตอบ สูงสุด 20 ไฟล์ 100MB รวม ไม่ต้องลงทะเบียน',
        meta_keywords: 'โปรแกรมดู SVG, กราฟิกเวกเตอร์, SVG เป็น PNG, SVG เป็น JPEG, กราฟิกที่ปรับขนาดได้, กราฟิก XML, โปรแกรมดูโลโก้, โปรแกรมดูไอคอน, การประมวลผลแบบกลุ่ม',
        hero_title: 'โปรแกรมดู SVG ฟรี',
        hero_subtitle: 'ดูกราฟิกเวกเตอร์ที่ปรับขนาดได้ด้วยการซูมไม่จำกัดและการแก้ไขโค้ด',
        upload_title: 'อัปโหลดไฟล์ SVG',
        upload_description: 'ลากและวางกราฟิกเวกเตอร์ SVG ของคุณหรือคลิกเพื่อเรียกดู รองรับรูปแบบ SVG และ SVGZ สูงสุด 100MB รวม',
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
          vector_graphics: '✓ กราฟิกเวกเตอร์',
          scalable: '🎨 ปรับขนาดได้ไม่จำกัด',
          fast_processing: '⚡ ประมวลผลเร็ว'
        },
        features: [
          { title: 'ความสามารถในการขยายไม่จำกัด', description: 'ดูกราฟิก SVG ในขนาดใดก็ได้โดยไม่สูญเสียคุณภาพ เหมาะสำหรับโลโก้ ไอคอนและภาพประกอบ' },
          { title: 'การแก้ไขตามโค้ด', description: 'แก้ไขโค้ด SVG โดยตรงพร้อมการเน้นไวยากรณ์และการแสดงตัวอย่างการเปลี่ยนแปลงแบบเรียลไทม์' },
          { title: 'องค์ประกอบแบบโต้ตอบ', description: 'รองรับแอนิเมชัน องค์ประกอบแบบโต้ตอบและ JavaScript ที่ฝังอยู่ในไฟล์ SVG' }
        ],
        about_title: 'เกี่ยวกับรูปแบบ SVG',
        about_intro: 'SVG (Scalable Vector Graphics) เป็นรูปแบบภาพเวกเตอร์ที่ใช้ XML สำหรับกราฟิกสองมิติ ไม่เหมือนกับรูปแบบแรสเตอร์เช่น JPEG หรือ PNG, SVG ใช้คำอธิบายทางคณิตศาสตร์ของรูปร่าง ทำให้ไม่ขึ้นกับความละเอียดและสามารถขยายได้ไม่จำกัดโดยไม่สูญเสียคุณภาพ ไฟล์ SVG สามารถแก้ไขด้วยโปรแกรมแก้ไขข้อความ สร้างสไตล์ด้วย CSS และสร้างแอนิเมชันด้วย JavaScript',
        advantages_title: 'ข้อดีหลัก',
        advantages: [
          'ความสามารถในการขยายไม่จำกัด – ไม่มีการสูญเสียคุณภาพในขนาดใดก็ได้',
          'ขนาดไฟล์เล็ก – มีประสิทธิภาพสำหรับกราฟิกแบบง่าย',
          'การแก้ไขตามโค้ด – แก้ไขด้วยโปรแกรมแก้ไขข้อความใดก็ได้',
          'การสร้างสไตล์ CSS – สร้างสไตล์ด้วยสไตล์ชีตแบบต่อเนื่อง',
          'การรองรับ JavaScript – กราฟิกแบบโต้ตอบและแอนิเมชัน',
          'การเข้าถึง – รูปแบบที่ใช้ข้อความ เป็นมิตรกับโปรแกรมอ่านหน้าจอ'
        ],
        use_cases_title: 'กรณีการใช้งานที่ดีที่สุด',
        use_cases: [
          'กราฟิกเว็บ – โลโก้ ไอคอนและภาพประกอบ',
          'การออกแบบ UI – องค์ประกอบอินเทอร์เฟซและไอคอน',
          'แผนที่และกราฟ – การแสดงภาพข้อมูลที่ปรับขนาดได้',
          'กราฟิกสำหรับการพิมพ์ – กราฟิกเวกเตอร์สำหรับการพิมพ์',
          'แอนิเมชัน – แอนิเมชัน SVG และการเปลี่ยนผ่าน',
          'การออกแบบที่ตอบสนอง – กราฟิกที่ปรับขนาดตามขนาดหน้าจอ'
        ],
        specs_title: 'ข้อมูลจำเพาะทางเทคนิค SVG',
        specs_header_label: 'ข้อมูลจำเพาะ',
        specs_header_value: 'รายละเอียด',
        specs: [
          { label: 'นามสกุลไฟล์', value: '.svg, .svgz' },
          { label: 'ประเภท MIME', value: 'image/svg+xml' },
          { label: 'ประเภทรูปแบบ', value: 'กราฟิกเวกเตอร์ (ใช้ XML)' },
          { label: 'ความสามารถในการขยาย', value: 'ไม่จำกัด (ไม่ขึ้นกับความละเอียด)' },
          { label: 'การรองรับสี', value: 'สีเต็ม, การไล่ระดับสี, รูปแบบ' },
          { label: 'แอนิเมชัน', value: 'แอนิเมชัน SMIL, CSS, JavaScript' },
          { label: 'การโต้ตอบ', value: 'ตัวจัดการเหตุการณ์ JavaScript รองรับ' },
          { label: 'การบีบอัด', value: 'SVGZ (SVG บีบอัดด้วย gzip)' }
        ],
        seo_title: 'คุณสมบัติโปรแกรมดูและตัวแปลง SVG',
        seo_intro: 'โปรแกรมดู SVG ระดับมืออาชีพของเรามีการรองรับที่ครอบคลุมสำหรับกราฟิกเวกเตอร์ที่ปรับขนาดได้ รวมถึงการซูมไม่จำกัด การแก้ไขโค้ดและการแปลงรูปแบบ ไม่ว่าคุณจะเป็นนักออกแบบ นักพัฒนา หรือผู้สร้างเนื้อหา แพลตฟอร์มของเรามีเครื่องมือที่คุณต้องการสำหรับการจัดการรูปภาพ SVG ระดับมืออาชีพ',
        seo_viewing_title: 'คุณสมบัติการดูขั้นสูง',
        seo_viewing_text: 'ดูกราฟิก SVG ด้วยความสามารถในการซูมไม่จำกัด การตรวจสอบโค้ดและการวิเคราะห์รายละเอียด โปรแกรมดูของเรารองรับคุณสมบัติ SVG ทั้งหมด รวมถึงแอนิเมชัน องค์ประกอบแบบโต้ตอบและ JavaScript ที่ฝังอยู่ เพื่อให้แน่ใจว่าการแสดงผลที่ถูกต้องของกราฟิกเวกเตอร์ของคุณ',
        seo_conversion_title: 'เครื่องมือแปลงระดับมืออาชีพ',
        seo_conversion_text: 'แปลงไฟล์ SVG เป็น PNG, JPEG, WebP และรูปแบบแรสเตอร์อื่นๆ ในความละเอียดใดก็ได้ในขณะที่รักษาคุณภาพที่เหมาะสม เครื่องมือแปลงของเรามีขนาดเอาต์พุตที่ปรับได้ การตั้งค่าคุณภาพและความสามารถในการประมวลผลแบบกลุ่มสำหรับการจัดการไฟล์หลายไฟล์พร้อมกัน',
        seo_optimization_title: 'การปรับปรุงคุณภาพ',
        seo_optimization_text: 'ปรับปรุงไฟล์ SVG สำหรับการใช้งานบนเว็บด้วยเครื่องมืออัจฉริยะของเราที่ลดขนาดไฟล์ในขณะที่รักษาคุณภาพเวกเตอร์ เหมาะสำหรับการปรับปรุงเว็บไซต์ ชุดไอคอนและกราฟิกที่ตอบสนองที่ความสามารถในการขยายและขนาดไฟล์มีความสำคัญ',
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          files_header: 'ไฟล์',
          add_files: '+ เพิ่ม',
          format_badge: 'SVG',
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
      svg: {
        meta_title: '無料SVGビューアー - オンラインスケーラブルベクターグラフィックビューアー',
        meta_description: 'SVG (Scalable Vector Graphics) ファイルをオンラインで無料で表示および変換します。無限のスケーラビリティ、コードベースの編集、インタラクティブ要素。最大20ファイル、合計100MB。登録不要。',
        meta_keywords: 'SVGビューアー、ベクターグラフィック、SVGからPNG、SVGからJPEG、スケーラブルグラフィック、XMLグラフィック、ロゴビューアー、アイコンビューアー、バッチ処理',
        hero_title: '無料SVGビューアー',
        hero_subtitle: '無限のズームとコード編集でスケーラブルベクターグラフィックを表示',
        upload_title: 'SVGファイルをアップロード',
        upload_description: 'SVGベクターグラフィックをドラッグ＆ドロップするか、クリックして参照します。合計100MBまでSVGおよびSVGZ形式をサポートします。',
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
          vector_graphics: '✓ ベクターグラフィック',
          scalable: '🎨 無限にスケーラブル',
          fast_processing: '⚡ 高速処理'
        },
        features: [
          { title: '無限のスケーラビリティ', description: '品質を損なうことなく任意のサイズでSVGグラフィックを表示。ロゴ、アイコン、イラストに最適' },
          { title: 'コードベースの編集', description: '構文ハイライトとリアルタイムプレビューでSVGコードを直接編集' },
          { title: 'インタラクティブ要素', description: 'SVGファイル内のアニメーション、インタラクティブ要素、埋め込みJavaScriptのサポート' }
        ],
        about_title: 'SVGフォーマットについて',
        about_intro: 'SVG (Scalable Vector Graphics) は、2次元グラフィック用のXMLベースのベクター画像フォーマットです。JPEGやPNGなどのラスター形式とは異なり、SVGは形状の数学的記述を使用するため、解像度に依存せず、品質を損なうことなく無限にスケーラブルです。SVGファイルはテキストエディタで編集でき、CSSでスタイリングでき、JavaScriptでアニメーション化できます。',
        advantages_title: '主な利点',
        advantages: [
          '無限のスケーラビリティ – 任意のサイズで品質劣化なし',
          '小さなファイルサイズ – シンプルなグラフィックに効率的',
          'コードベースの編集 – 任意のテキストエディタで編集',
          'CSSスタイリング – スタイルシートでスタイリング',
          'JavaScriptサポート – インタラクティブでアニメーション化されたグラフィック',
          'アクセシビリティ – テキストベースのフォーマット、スクリーンリーダーフレンドリー'
        ],
        use_cases_title: '最適な使用例',
        use_cases: [
          'Webグラフィック – ロゴ、アイコン、イラスト',
          'UIデザイン – インターフェース要素とアイコン',
          'マップとグラフ – スケーラブルなデータ可視化',
          '印刷グラフィック – 印刷用ベクターグラフィック',
          'アニメーション – SVGアニメーションとトランジション',
          'レスポンシブデザイン – 画面サイズに応じてスケールするグラフィック'
        ],
        specs_title: 'SVG技術仕様',
        specs_header_label: '仕様',
        specs_header_value: '詳細',
        specs: [
          { label: 'ファイル拡張子', value: '.svg, .svgz' },
          { label: 'MIMEタイプ', value: 'image/svg+xml' },
          { label: 'フォーマットタイプ', value: 'ベクターグラフィック (XMLベース)' },
          { label: 'スケーラビリティ', value: '無限 (解像度に依存しない)' },
          { label: '色サポート', value: 'フルカラー、グラデーション、パターン' },
          { label: 'アニメーション', value: 'SMIL、CSS、JavaScriptアニメーション' },
          { label: 'インタラクティビティ', value: 'JavaScriptイベントハンドラーサポート' },
          { label: '圧縮', value: 'SVGZ (gzip圧縮SVG)' }
        ],
        seo_title: 'SVGビューアーとコンバーター機能',
        seo_intro: '私たちのプロフェッショナルSVGビューアーは、無限のズーム、コード編集、フォーマット変換を含むスケーラブルベクターグラフィックの包括的なサポートを提供します。デザイナー、開発者、コンテンツ作成者を問わず、当社のプラットフォームはプロフェッショナルなSVG画像処理に必要なツールを提供します。',
        seo_viewing_title: '高度な表示機能',
        seo_viewing_text: '無限のズーム機能、コード検査、詳細な分析でSVGグラフィックを表示します。当社のビューアーは、アニメーション、インタラクティブ要素、埋め込みJavaScriptを含むすべてのSVG機能をサポートし、ベクターグラフィックの正確な表現を保証します。',
        seo_conversion_title: 'プロフェッショナル変換ツール',
        seo_conversion_text: '最適な品質を維持しながら、SVGファイルを任意の解像度でPNG、JPEG、WebP、その他のラスター形式に変換します。当社の変換エンジンは、複数のファイルを同時に処理するための調整可能な出力サイズ、品質設定、バッチ処理機能を提供します。',
        seo_optimization_title: '品質最適化',
        seo_optimization_text: 'ベクター品質を維持しながらファイルサイズを削減するスマートツールを使用して、SVGファイルをWeb使用向けに最適化します。スケーラビリティとファイルサイズが重要なWebサイト最適化、アイコンセット、レスポンシブグラフィックに最適です。',
        editor: {
          toggle_sidebar: 'サイドバーの切り替え',
          close: '閉じる (Esc)',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          files_header: 'ファイル',
          add_files: '+ 追加',
          format_badge: 'SVG',
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
      svg: {
        meta_title: '免费SVG查看器 - 在线可缩放矢量图形查看器',
        meta_description: '在线免费查看和转换SVG (Scalable Vector Graphics) 文件。无限可扩展性、基于代码的编辑和交互元素。最多20个文件，总计100MB。无需注册。',
        meta_keywords: 'SVG查看器，矢量图形，SVG转PNG，SVG转JPEG，可缩放图形，XML图形，徽标查看器，图标查看器，批量处理',
        hero_title: '免费SVG查看器',
        hero_subtitle: '使用无限缩放和代码编辑查看可缩放矢量图形',
        upload_title: '上传SVG文件',
        upload_description: '拖放您的SVG矢量图形或点击浏览。支持SVG和SVGZ格式，总计最多100MB。',
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
          vector_graphics: '✓ 矢量图形',
          scalable: '🎨 无限可扩展',
          fast_processing: '⚡ 快速处理'
        },
        features: [
          { title: '无限可扩展性', description: '以任何尺寸查看SVG图形而不损失质量，非常适合徽标、图标和插图' },
          { title: '基于代码的编辑', description: '直接编辑SVG代码，具有语法高亮和实时更改预览' },
          { title: '交互元素', description: '支持SVG文件中的动画、交互元素和嵌入式JavaScript' }
        ],
        about_title: '关于SVG格式',
        about_intro: 'SVG (Scalable Vector Graphics) 是一种基于XML的矢量图像格式，用于二维图形。与JPEG或PNG等光栅格式不同，SVG使用形状的数学描述，使其独立于分辨率，可以无限扩展而不损失质量。SVG文件可以用文本编辑器编辑，用CSS样式化，用JavaScript动画化。',
        advantages_title: '主要优势',
        advantages: [
          '无限可扩展性 – 任何尺寸都不损失质量',
          '文件大小小 – 对简单图形高效',
          '基于代码的编辑 – 用任何文本编辑器编辑',
          'CSS样式 – 用级联样式表样式化',
          'JavaScript支持 – 交互式和动画图形',
          '可访问性 – 基于文本的格式，对屏幕阅读器友好'
        ],
        use_cases_title: '最佳使用场景',
        use_cases: [
          'Web图形 – 徽标、图标和插图',
          'UI设计 – 界面元素和图标',
          '地图和图表 – 可缩放的数据可视化',
          '打印图形 – 用于打印的矢量图形',
          '动画 – SVG动画和过渡',
          '响应式设计 – 随屏幕尺寸缩放的图形'
        ],
        specs_title: 'SVG技术规格',
        specs_header_label: '规格',
        specs_header_value: '详情',
        specs: [
          { label: '文件扩展名', value: '.svg, .svgz' },
          { label: 'MIME类型', value: 'image/svg+xml' },
          { label: '格式类型', value: '矢量图形 (基于XML)' },
          { label: '可扩展性', value: '无限 (独立于分辨率)' },
          { label: '颜色支持', value: '全彩色、渐变、图案' },
          { label: '动画', value: 'SMIL、CSS、JavaScript动画' },
          { label: '交互性', value: '支持JavaScript事件处理程序' },
          { label: '压缩', value: 'SVGZ (gzip压缩的SVG)' }
        ],
        seo_title: 'SVG查看器和转换器功能',
        seo_intro: '我们的专业SVG查看器为可缩放矢量图形提供全面支持，包括无限缩放、代码编辑和格式转换。无论您是设计师、开发人员还是内容创作者，我们的平台都提供您进行专业SVG图片处理所需的工具。',
        seo_viewing_title: '高级查看功能',
        seo_viewing_text: '使用完整的缩放功能、代码检查和详细分析查看SVG图形。我们的查看器支持所有SVG功能，包括动画、交互元素和嵌入式JavaScript，确保准确表示您的矢量图形。',
        seo_conversion_title: '专业转换工具',
        seo_conversion_text: '在保持最佳质量的同时，将SVG文件转换为PNG、JPEG、WebP和其他光栅格式，分辨率任意。我们的转换引擎提供可调节的输出尺寸、质量设置和批处理功能，可同时处理多个文件。',
        seo_optimization_title: '质量优化',
        seo_optimization_text: '使用我们的智能工具优化SVG文件用于网络使用，这些工具可在保持矢量质量的同时减小文件大小。非常适合网站优化、图标集和响应式图形，其中可扩展性和文件大小很重要。',
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭 (Esc)',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          files_header: '文件',
          add_files: '+ 添加',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Penampil SVG Gratis - Penampil Grafik Vektor Skalabel Online',
        meta_description: 'Lihat dan konversi file SVG (Scalable Vector Graphics) online gratis. Skalabilitas tak terbatas, pengeditan berbasis kode dan elemen interaktif. Hingga 20 file, 100MB total. Tidak perlu registrasi.',
        meta_keywords: 'penampil SVG, grafik vektor, SVG ke PNG, SVG ke JPEG, grafik skalabel, grafik XML, penampil logo, penampil ikon, pemrosesan batch',
        hero_title: 'Penampil SVG Gratis',
        hero_subtitle: 'Lihat grafik vektor skalabel dengan zoom tak terbatas dan pengeditan kode',
        upload_title: 'Unggah File SVG',
        upload_description: 'Seret dan lepas grafik vektor SVG Anda atau klik untuk menjelajah. Mendukung format SVG dan SVGZ hingga 100MB total.',
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
          vector_graphics: '✓ Grafik Vektor',
          scalable: '🎨 Dapat Diperluas Tak Terbatas',
          fast_processing: '⚡ Pemrosesan Cepat'
        },
        features: [
          { title: 'Skalabilitas Tak Terbatas', description: 'Lihat grafik SVG dalam ukuran apa pun tanpa kehilangan kualitas, sempurna untuk logo, ikon, dan ilustrasi' },
          { title: 'Pengeditan Berbasis Kode', description: 'Edit kode SVG langsung dengan penyorotan sintaks dan pratinjau perubahan waktu nyata' },
          { title: 'Elemen Interaktif', description: 'Dukungan untuk animasi, elemen interaktif dan JavaScript yang disematkan dalam file SVG' }
        ],
        about_title: 'Tentang Format SVG',
        about_intro: 'SVG (Scalable Vector Graphics) adalah format gambar vektor berbasis XML untuk grafik dua dimensi. Tidak seperti format raster seperti JPEG atau PNG, SVG menggunakan deskripsi matematis bentuk, membuatnya independen dari resolusi dan dapat diperluas tanpa batas tanpa kehilangan kualitas. File SVG dapat diedit dengan editor teks, distyling dengan CSS, dan dianimasikan dengan JavaScript.',
        advantages_title: 'Keuntungan Utama',
        advantages: [
          'Skalabilitas tak terbatas – Tidak ada kehilangan kualitas dalam ukuran apa pun',
          'Ukuran file kecil – Efisien untuk grafik sederhana',
          'Pengeditan berbasis kode – Edit dengan editor teks apa pun',
          'Styling CSS – Styling dengan stylesheet kaskade',
          'Dukungan JavaScript – Grafik interaktif dan animasi',
          'Aksesibilitas – Format berbasis teks, ramah pembaca layar'
        ],
        use_cases_title: 'Kasus Penggunaan Terbaik',
        use_cases: [
          'Grafik web – Logo, ikon, dan ilustrasi',
          'Desain UI – Elemen antarmuka dan ikon',
          'Peta dan grafik – Visualisasi data skalabel',
          'Grafik cetak – Grafik vektor untuk pencetakan',
          'Animasi – Animasi SVG dan transisi',
          'Desain responsif – Grafik yang skala dengan ukuran layar'
        ],
        specs_title: 'Spesifikasi Teknis SVG',
        specs_header_label: 'Spesifikasi',
        specs_header_value: 'Detail',
        specs: [
          { label: 'Ekstensi File', value: '.svg, .svgz' },
          { label: 'Tipe MIME', value: 'image/svg+xml' },
          { label: 'Tipe Format', value: 'Grafik vektor (berbasis XML)' },
          { label: 'Skalabilitas', value: 'Tak terbatas (independen dari resolusi)' },
          { label: 'Dukungan Warna', value: 'Warna penuh, gradien, pola' },
          { label: 'Animasi', value: 'Animasi SMIL, CSS, JavaScript' },
          { label: 'Interaktivitas', value: 'Penangan acara JavaScript didukung' },
          { label: 'Kompresi', value: 'SVGZ (SVG terkompresi dengan gzip)' }
        ],
        seo_title: 'Fitur Penampil dan Konverter SVG',
        seo_intro: 'Penampil SVG profesional kami menyediakan dukungan komprehensif untuk grafik vektor skalabel, termasuk zoom tak terbatas, pengeditan kode, dan konversi format. Baik Anda seorang desainer, pengembang, atau pembuat konten, platform kami menawarkan alat yang Anda butuhkan untuk penanganan gambar SVG profesional.',
        seo_viewing_title: 'Fitur Tampilan Lanjutan',
        seo_viewing_text: 'Lihat grafik SVG dengan kemampuan zoom tak terbatas, inspeksi kode, dan analisis detail. Penampil kami mendukung semua fitur SVG, termasuk animasi, elemen interaktif, dan JavaScript yang disematkan, memastikan representasi akurat dari grafik vektor Anda.',
        seo_conversion_title: 'Alat Konversi Profesional',
        seo_conversion_text: 'Konversi file SVG ke PNG, JPEG, WebP, dan format raster lain pada resolusi apa pun sambil mempertahankan kualitas optimal. Mesin konversi kami menawarkan ukuran output yang dapat disesuaikan, pengaturan kualitas, dan kemampuan pemrosesan batch untuk menangani beberapa file secara bersamaan.',
        seo_optimization_title: 'Optimisasi Kualitas',
        seo_optimization_text: 'Optimalkan file SVG untuk penggunaan web dengan alat pintar kami yang mengurangi ukuran file sambil mempertahankan kualitas vektor. Sempurna untuk optimisasi situs web, set ikon, dan grafik responsif di mana skalabilitas dan ukuran file penting.',
        editor: {
          toggle_sidebar: 'Alihkan Bilah Samping',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup Bilah Samping',
          search_placeholder: 'Cari file...',
          files_header: 'File',
          add_files: '+ Tambah',
          format_badge: 'SVG',
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
      svg: {
        meta_title: 'Gratis SVG-visare - Online Skalbar Vektorgrafik-visare',
        meta_description: 'Visa och konvertera SVG (Scalable Vector Graphics) filer online gratis. Oändlig skalbarhet, kodbaserad redigering och interaktiva element. Upp till 20 filer, 100MB totalt. Ingen registrering krävs.',
        meta_keywords: 'SVG-visare, vektorgrafik, SVG till PNG, SVG till JPEG, skalbar grafik, XML-grafik, logotypvisare, ikonvisare, batchbearbetning',
        hero_title: 'Gratis SVG-visare',
        hero_subtitle: 'Visa skalbar vektorgrafik med oändlig zoom och kodredigering',
        upload_title: 'Ladda Upp SVG-filer',
        upload_description: 'Dra och släpp dina SVG-vektorgrafiker eller klicka för att bläddra. Stöder SVG- och SVGZ-format upp till 100MB totalt.',
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
          vector_graphics: '✓ Vektorgrafik',
          scalable: '🎨 Oändligt Skalbar',
          fast_processing: '⚡ Snabb Bearbetning'
        },
        features: [
          { title: 'Oändlig Skalbarhet', description: 'Visa SVG-grafik i vilken storlek som helst utan kvalitetsförlust, perfekt för logotyper, ikoner och illustrationer' },
          { title: 'Kodbaserad Redigering', description: 'Redigera SVG-kod direkt med syntaxmarkering och realtidsförhandsvisning av ändringar' },
          { title: 'Interaktiva Element', description: 'Stöd för animationer, interaktiva element och inbäddad JavaScript i SVG-filer' }
        ],
        about_title: 'Om SVG-formatet',
        about_intro: 'SVG (Scalable Vector Graphics) är ett XML-baserat vektorbildformat för tvådimensionell grafik. Till skillnad från rasterformat som JPEG eller PNG använder SVG matematiska beskrivningar av former, vilket gör det upplösningsoberoende och oändligt skalbart utan kvalitetsförlust. SVG-filer kan redigeras med textredigerare, stylas med CSS och animeras med JavaScript.',
        advantages_title: 'Huvudfördelar',
        advantages: [
          'Oändlig skalbarhet – Ingen kvalitetsförlust i vilken storlek som helst',
          'Små filstorlekar – Effektivt för enkla grafik',
          'Kodbaserad redigering – Redigera med vilken textredigerare som helst',
          'CSS-styling – Styla med stilmallar',
          'JavaScript-stöd – Interaktiva och animerade grafik',
          'Tillgänglighet – Textbaserat format, skärmläsarvänligt'
        ],
        use_cases_title: 'Bästa Användningsfall',
        use_cases: [
          'Webbgrafik – Logotyper, ikoner och illustrationer',
          'UI-design – Gränssnittselement och ikoner',
          'Kartor och diagram – Skalbara datavisualiseringar',
          'Tryckgrafik – Vektorgrafik för tryckning',
          'Animationer – SVG-animationer och övergångar',
          'Responsiv design – Grafik som skalar med skärmstorlek'
        ],
        specs_title: 'SVG Tekniska Specifikationer',
        specs_header_label: 'Specifikation',
        specs_header_value: 'Detaljer',
        specs: [
          { label: 'Filändelse', value: '.svg, .svgz' },
          { label: 'MIME-typ', value: 'image/svg+xml' },
          { label: 'Formattyp', value: 'Vektorgrafik (XML-baserad)' },
          { label: 'Skalbarhet', value: 'Oändlig (upplösningsoberoende)' },
          { label: 'Färgstöd', value: 'Full färg, gradienter, mönster' },
          { label: 'Animation', value: 'SMIL-, CSS-, JavaScript-animationer' },
          { label: 'Interaktivitet', value: 'JavaScript-händelsehanterare stöds' },
          { label: 'Komprimering', value: 'SVGZ (gzip-komprimerad SVG)' }
        ],
        seo_title: 'SVG-visare och Konverteringsfunktioner',
        seo_intro: 'Vår professionella SVG-visare ger omfattande stöd för skalbar vektorgrafik, inklusive oändlig zoom, kodredigering och formatskonvertering. Oavsett om du är designer, utvecklare eller innehållsskapare, erbjuder vår plattform de verktyg du behöver för professionell SVG-bildhantering.',
        seo_viewing_title: 'Avancerade Visningsfunktioner',
        seo_viewing_text: 'Visa SVG-grafik med fullständiga zoom-funktioner, kodinspektion och detaljerad analys. Vår visare stöder alla SVG-funktioner, inklusive animationer, interaktiva element och inbäddad JavaScript, vilket säkerställer en korrekt representation av dina vektorgrafik.',
        seo_conversion_title: 'Professionella Konverteringsverktyg',
        seo_conversion_text: 'Konvertera SVG-filer till PNG, JPEG, WebP och andra rasterformat i vilken upplösning som helst samtidigt som optimal kvalitet bibehålls. Vår konverteringsmotor erbjuder justerbara utdatastorlekar, kvalitetsinställningar och batchbearbetningsfunktioner för att hantera flera filer samtidigt.',
        seo_optimization_title: 'Kvalitetsoptimering',
        seo_optimization_text: 'Optimera SVG-filer för webbanvändning med våra smarta verktyg som minskar filstorlekar samtidigt som vektorkvaliteten bevaras. Perfekt för webbplatsoptimering, ikonuppsättningar och responsiva grafik där skalbarhet och filstorlek spelar roll.',
        editor: {
          toggle_sidebar: 'Växla Sidofält',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng Sidofält',
          search_placeholder: 'Sök filer...',
          files_header: 'Filer',
          add_files: '+ Lägg Till',
          format_badge: 'SVG',
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

