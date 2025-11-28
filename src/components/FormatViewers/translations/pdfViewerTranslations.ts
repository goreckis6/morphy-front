import i18n from '../../../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type PDFViewerTranslations = {
  viewers: {
    pdf: {
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
        view: string;
        download: string;
        back: string;
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
      seo_features_title: string;
      seo_features_text: string;
      seo_security_title: string;
      seo_security_text: string;
      alerts: {
        file_too_large: string;
        popup_blocked: string;
        preview_failed: string;
      };
      loading_window: {
        title: string;
        message: string;
      };
      error_window: {
        title: string;
        message: string;
        close: string;
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
        print_pdf: string;
        download_pdf: string;
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

const resources: Record<string, PDFViewerTranslations> = {
  en: {
    viewers: {
      pdf: {
        meta_title: 'Free PDF Viewer - View PDF Documents Online',
        meta_description: 'Free professional PDF viewer with high-quality rendering, page thumbnails, zoom controls, and text search. Upload and preview PDFs instantly. Batch up to 20 documents. 100% free PDF viewer tool.',
        meta_keywords: 'PDF viewer, view PDF online, PDF preview, PDF reader, document viewer, free PDF viewer, PDF page viewer',
        hero_title: 'Free PDF Viewer',
        hero_subtitle: 'Read, search, and navigate PDF documents directly in your browser – 100% free',
        upload_title: 'Upload PDF Documents',
        upload_description: 'Drag and drop your PDF files or click to browse. Supports PDFs up to 100MB each, with batch upload for up to 20 documents.',
        upload: {
          drag_drop_text: 'Drag & Drop Your Files Here',
          click_browse_text: 'or click the button below to browse',
          choose_files_button: 'Choose Files',
          max_files_info: 'Max {maxFiles} files • Up to {maxSize} Total'
        },
        buttons: {
          view_files: 'View Files',
          view: 'View PDF',
          download: 'Download',
          back: 'Back to All Viewers'
        },
        quick_stats: {
          universal_format: '✓ Universal Format',
          fast_processing: '⚡ Fast Processing',
          high_quality: '🎨 High Quality'
        },
        features: [
          { title: 'High-Quality Rendering', description: 'Experience crisp vector rendering, selectable text, and accurate fonts for every PDF page.' },
          { title: 'Navigation & Search', description: 'Use thumbnails, outline navigation, and text search to jump exactly where you need.' },
          { title: 'Productivity Tools', description: 'Zoom, rotate, switch page layouts, and toggle dark mode for comfortable reading.' }
        ],
        about_title: 'About PDF Format',
        about_intro: 'PDF (Portable Document Format) is the industry standard for fixed-layout documents. It preserves fonts, images, and layout across devices, making it ideal for distribution and archiving.',
        advantages_title: 'Key Advantages',
        advantages: [
          'Universal compatibility – Opens on every device and operating system.',
          'Fixed layout – Preserves typography, graphics, and page geometry.',
          'Security options – Supports encryption, digital signatures, and permissions.',
          'Interactive elements – Embed links, forms, multimedia, and annotations.',
          'Compression – Efficiently store complex documents with images and vector art.',
          'Archival friendly – PDF/A ensures long-term preservation for records.'
        ],
        use_cases_title: 'Best Use Cases',
        use_cases: [
          'Business documents – Reports, invoices, contracts, and proposals.',
          'Education – Textbooks, lecture notes, and research papers.',
          'Creative work – Portfolios, brochures, and marketing collateral.',
          'Government – Official forms, public records, and compliance materials.',
          'Technical manuals – Engineering docs, specifications, and SOPs.',
          'Publishing – eBooks, magazines, and printable assets.'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Specification',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.pdf' },
          { label: 'MIME Type', value: 'application/pdf' },
          { label: 'Standard', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Compression', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2, etc.' },
          { label: 'Interactive Features', value: 'Forms, annotations, layers, multimedia, JavaScript' },
          { label: 'Developed By', value: 'Adobe Systems (1993), now ISO maintained' }
        ],
        seo_title: 'Why Choose Our PDF Viewer?',
        seo_intro: 'Our PDF viewer provides a seamless experience for viewing and managing PDF documents directly in your browser.',
        seo_viewing_title: 'Professional Document Viewing',
        seo_viewing_text: 'View PDF documents with high-quality rendering, zoom controls, and navigation tools.',
        seo_features_title: 'Advanced Features',
        seo_features_text: 'Access powerful PDF viewing features including search, zoom, and page navigation.',
        seo_security_title: 'Secure & Private',
        seo_security_text: 'Your PDF files are processed securely and never stored on our servers.',
        alerts: {
          file_too_large: 'File is too large for preview ({{size}} MB). Maximum size is {{max}} MB. Please download the file instead.',
          popup_blocked: 'Please allow pop-ups to view the PDF file.',
          preview_failed: 'Failed to open PDF preview. Please try again or download the file.'
        },
        loading_window: {
          title: 'Loading PDF...',
          message: 'Rendering {{filename}}...'
        },
        error_window: {
          title: 'Preview Error',
          message: 'Failed to generate PDF preview. Please try downloading the file instead.',
          close: 'Close'
        },
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          files_header: 'Files',
          add_files: '+ Add',
          format_badge: 'PDF',
          present: 'Present',
          exit_presentation: 'Exit',
          start_presentation: 'Start Presentation (Space/Arrows to navigate)',
          print_pdf: 'Print PDF',
          download_pdf: 'Download PDF',
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
      pdf: {
        meta_title: 'Darmowy Podgląd PDF - Wyświetlaj Dokumenty PDF Online',
        meta_description: 'Darmowy, profesjonalny podgląd PDF z wysokiej jakości renderowaniem, miniaturami stron, lupą i wyszukiwaniem tekstu. Prześlij i oglądaj PDF-y natychmiast. Obsługa wsadowa do 20 dokumentów.',
        meta_keywords: 'podgląd pdf, viewer pdf, pdf online, czytnik pdf, dokument pdf, darmowy viewer pdf',
        hero_title: 'Darmowy Podgląd PDF',
        hero_subtitle: 'Czytaj, przeszukuj i nawiguj dokumenty PDF bezpośrednio w przeglądarce – 100% za darmo',
        upload_title: 'Prześlij dokumenty PDF',
        upload_description: 'Przeciągnij i upuść pliki PDF lub kliknij, aby je wybrać. Obsługa plików do 100 MB oraz wsadowe przesyłanie do 20 dokumentów.',
        upload: {
          drag_drop_text: 'Przeciągnij i Upuść Pliki Tutaj',
          click_browse_text: 'lub kliknij przycisk poniżej, aby przeglądać',
          choose_files_button: 'Wybierz Pliki',
          max_files_info: 'Maks. {maxFiles} plików • Do {maxSize} Łącznie'
        },
        buttons: {
          view_files: 'Wyświetl Pliki',
          view: 'Zobacz PDF',
          download: 'Pobierz',
          back: 'Powrót do wszystkich podglądów'
        },
        quick_stats: {
          universal_format: '✓ Uniwersalny Format',
          fast_processing: '⚡ Szybkie Przetwarzanie',
          high_quality: '🎨 Wysoka Jakość'
        },
        features: [
          { title: 'Wysokiej jakości renderowanie', description: 'Doświadcz ostrego renderowania wektorowego, zaznaczalnego tekstu i dokładnych czcionek dla każdej strony PDF.' },
          { title: 'Nawigacja i wyszukiwanie', description: 'Używaj miniatur, nawigacji konspektu i wyszukiwania tekstu, aby przejść dokładnie tam, gdzie potrzebujesz.' },
          { title: 'Narzędzia produktywności', description: 'Powiększanie, obracanie, przełączanie układów stron i tryb ciemny dla wygodnego czytania.' }
        ],
        about_title: 'Informacje o formacie PDF',
        about_intro: 'PDF (Portable Document Format) to standard branżowy dla dokumentów o stałym układzie. Zachowuje czcionki, grafiki i strukturę na dowolnym urządzeniu, dlatego idealnie nadaje się do dystrybucji i archiwizacji.',
        advantages_title: 'Najważniejsze zalety',
        advantages: [
          'Uniwersalna kompatybilność – Otwiera się na każdym urządzeniu i systemie operacyjnym.',
          'Stały układ – Zachowuje typografię, grafikę i geometrię strony.',
          'Opcje bezpieczeństwa – Obsługuje szyfrowanie, podpisy cyfrowe i uprawnienia.',
          'Elementy interaktywne – Osadzaj linki, formularze, multimedia i adnotacje.',
          'Kompresja – Skutecznie przechowuj złożone dokumenty z obrazami i grafiką wektorową.',
          'Przyjazny dla archiwizacji – PDF/A zapewnia długoterminowe zachowanie rekordów.'
        ],
        use_cases_title: 'Najlepsze przypadki użycia',
        use_cases: [
          'Dokumenty biznesowe – Raporty, faktury, umowy i propozycje.',
          'Edukacja – Podręczniki, notatki z wykładów i prace badawcze.',
          'Praca kreatywna – Portfolia, broszury i materiały marketingowe.',
          'Rząd – Formularze urzędowe, dokumenty publiczne i materiały zgodności.',
          'Podręczniki techniczne – Dokumenty inżynierskie, specyfikacje i SOP.',
          'Wydawnictwo – eBooki, magazyny i zasoby do druku.'
        ],
        specs_title: 'Specyfikacje techniczne',
        specs_header_label: 'Specyfikacja',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie pliku', value: '.pdf' },
          { label: 'Typ MIME', value: 'application/pdf' },
          { label: 'Standard', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Kompresja', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2 itp.' },
          { label: 'Funkcje interaktywne', value: 'Formularze, adnotacje, warstwy, multimedia, JavaScript' },
          { label: 'Opracowane przez', value: 'Adobe Systems (1993), obecnie utrzymywane przez ISO' }
        ],
        seo_title: 'Dlaczego wybrać nasz podgląd PDF?',
        seo_intro: 'Nasz podgląd PDF zapewnia płynne doświadczenie w przeglądaniu i zarządzaniu dokumentami PDF bezpośrednio w przeglądarce.',
        seo_viewing_title: 'Profesjonalne przeglądanie dokumentów',
        seo_viewing_text: 'Przeglądaj dokumenty PDF z wysokiej jakości renderowaniem, kontrolami powiększania i narzędziami nawigacji.',
        seo_features_title: 'Zaawansowane funkcje',
        seo_features_text: 'Uzyskaj dostęp do potężnych funkcji przeglądania PDF, w tym wyszukiwania, powiększania i nawigacji po stronach.',
        seo_security_title: 'Bezpieczne i prywatne',
        seo_security_text: 'Twoje pliki PDF są przetwarzane bezpiecznie i nigdy nie są przechowywane na naszych serwerach.',
        alerts: {
          file_too_large: 'Plik jest zbyt duży do podglądu ({{size}} MB). Maksymalny rozmiar to {{max}} MB. Zamiast tego pobierz plik.',
          popup_blocked: 'Proszę zezwolić na wyskakujące okna, aby wyświetlić plik PDF.',
          preview_failed: 'Nie udało się otworzyć podglądu PDF. Spróbuj ponownie lub pobierz plik.'
        },
        loading_window: {
          title: 'Ładowanie PDF...',
          message: 'Renderowanie {{filename}}...'
        },
        error_window: {
          title: 'Błąd podglądu',
          message: 'Nie udało się wygenerować podglądu PDF. Zamiast tego spróbuj pobrać plik.',
          close: 'Zamknij'
        },
        editor: {
          toggle_sidebar: 'Przełącz Pasek Boczny',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij Pasek Boczny',
          search_placeholder: 'Szukaj plików...',
          files_header: 'Pliki',
          add_files: '+ Dodaj',
          format_badge: 'PDF',
          present: 'Prezentuj',
          exit_presentation: 'Wyjdź',
          start_presentation: 'Rozpocznij Prezentację (Spacja/Strzałki do nawigacji)',
          print_pdf: 'Drukuj PDF',
          download_pdf: 'Pobierz PDF',
          previous: 'Poprzedni (←)',
          next: 'Następny (→)',
          zoom_out: 'Pomniejsz (-)',
          zoom_in: 'Powiększ (+)',
          reset_zoom: 'Kliknij, aby zresetować zoom',
          rotate: 'Obróć (R)',
          fullscreen: 'Pełny Ekran (F)'
        }
      }
    }
  },
  de: {
    viewers: {
      pdf: {
        meta_title: 'Kostenloser PDF-Viewer - PDF-Dokumente online anzeigen',
        meta_description: 'Kostenloser professioneller PDF-Viewer mit hochwertigem Rendering, Seitenminiaturen, Zoom-Steuerung und Textsuche. PDFs sofort hochladen und anzeigen. Batch bis zu 20 Dokumenten. 100% kostenloses PDF-Viewer-Tool.',
        meta_keywords: 'PDF Viewer, PDF online anzeigen, PDF Vorschau, PDF Reader, Dokumenten-Viewer, kostenloser PDF Viewer',
        hero_title: 'Kostenloser PDF-Viewer',
        hero_subtitle: 'Lesen, suchen und navigieren Sie PDF-Dokumente direkt in Ihrem Browser – 100% kostenlos',
        upload_title: 'PDF-Dokumente hochladen',
        upload_description: 'Ziehen Sie Ihre PDF-Dateien per Drag & Drop oder klicken Sie zum Durchsuchen. Unterstützt PDFs bis zu 100 MB, mit Batch-Upload für bis zu 20 Dokumente.',
        upload: {
          drag_drop_text: 'Dateien hier ablegen',
          click_browse_text: 'oder klicken Sie auf die Schaltfläche unten zum Durchsuchen',
          choose_files_button: 'Dateien auswählen',
          max_files_info: 'Max. {maxFiles} Dateien • Bis zu {maxSize} Gesamt'
        },
        buttons: {
          view_files: 'Dateien anzeigen',
          view: 'PDF anzeigen',
          download: 'Herunterladen',
          back: 'Zurück zu allen Viewern'
        },
        quick_stats: {
          universal_format: '✓ Universelles Format',
          fast_processing: '⚡ Schnelle Verarbeitung',
          high_quality: '🎨 Hohe Qualität'
        },
        features: [
          { title: 'Hochwertiges Rendering', description: 'Erleben Sie klares Vektor-Rendering, auswählbaren Text und genaue Schriftarten für jede PDF-Seite.' },
          { title: 'Navigation & Suche', description: 'Verwenden Sie Miniaturen, Gliederungsnavigation und Textsuche, um genau dorthin zu springen, wo Sie es brauchen.' },
          { title: 'Produktivitätstools', description: 'Zoomen, drehen, Seitenlayouts wechseln und Dunkelmodus für komfortables Lesen umschalten.' }
        ],
        about_title: 'Über das PDF-Format',
        about_intro: 'PDF (Portable Document Format) ist der Industriestandard für Dokumente mit festem Layout. Es bewahrt Schriftarten, Bilder und Layouts auf allen Geräten, was es ideal für die Verteilung und Archivierung macht.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          'Universelle Kompatibilität – Öffnet sich auf jedem Gerät und Betriebssystem.',
          'Festes Layout – Bewahrt Typografie, Grafiken und Seitengeometrie.',
          'Sicherheitsoptionen – Unterstützt Verschlüsselung, digitale Signaturen und Berechtigungen.',
          'Interaktive Elemente – Links, Formulare, Multimedia und Anmerkungen einbetten.',
          'Komprimierung – Speichern Sie komplexe Dokumente mit Bildern und Vektorgrafiken effizient.',
          'Archivfreundlich – PDF/A gewährleistet langfristige Erhaltung von Aufzeichnungen.'
        ],
        use_cases_title: 'Beste Anwendungsfälle',
        use_cases: [
          'Geschäftsdokumente – Berichte, Rechnungen, Verträge und Vorschläge.',
          'Bildung – Lehrbücher, Vorlesungsnotizen und Forschungsarbeiten.',
          'Kreative Arbeit – Portfolios, Broschüren und Marketingmaterialien.',
          'Regierung – Offizielle Formulare, öffentliche Aufzeichnungen und Compliance-Materialien.',
          'Technische Handbücher – Ingenieurdokumente, Spezifikationen und SOPs.',
          'Veröffentlichung – eBooks, Zeitschriften und druckbare Assets.'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Spezifikation',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateierweiterung', value: '.pdf' },
          { label: 'MIME-Typ', value: 'application/pdf' },
          { label: 'Standard', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Komprimierung', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2 usw.' },
          { label: 'Interaktive Funktionen', value: 'Formulare, Anmerkungen, Ebenen, Multimedia, JavaScript' },
          { label: 'Entwickelt von', value: 'Adobe Systems (1993), jetzt von ISO gepflegt' }
        ],
        seo_title: 'Warum unseren PDF-Viewer wählen?',
        seo_intro: 'Unser PDF-Viewer bietet eine nahtlose Erfahrung zum Anzeigen und Verwalten von PDF-Dokumenten direkt in Ihrem Browser.',
        seo_viewing_title: 'Professionelle Dokumentenanzeige',
        seo_viewing_text: 'Zeigen Sie PDF-Dokumente mit hochwertigem Rendering, Zoom-Steuerung und Navigationswerkzeugen an.',
        seo_features_title: 'Erweiterte Funktionen',
        seo_features_text: 'Greifen Sie auf leistungsstarke PDF-Viewing-Funktionen zu, einschließlich Suche, Zoom und Seitennavigation.',
        seo_security_title: 'Sicher & Privat',
        seo_security_text: 'Ihre PDF-Dateien werden sicher verarbeitet und niemals auf unseren Servern gespeichert.',
        alerts: {
          file_too_large: 'Datei ist zu groß für die Vorschau ({{size}} MB). Maximale Größe ist {{max}} MB. Bitte laden Sie die Datei stattdessen herunter.',
          popup_blocked: 'Bitte erlauben Sie Pop-ups, um die PDF-Datei anzuzeigen.',
          preview_failed: 'PDF-Vorschau konnte nicht geöffnet werden. Bitte versuchen Sie es erneut oder laden Sie die Datei herunter.'
        },
        loading_window: {
          title: 'PDF wird geladen...',
          message: 'Rendering {{filename}}...'
        },
        error_window: {
          title: 'Vorschaufehler',
          message: 'PDF-Vorschau konnte nicht generiert werden. Bitte versuchen Sie stattdessen, die Datei herunterzuladen.',
          close: 'Schließen'
        },
        editor: {
          toggle_sidebar: 'Seitenleiste Umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Seitenleiste Schließen',
          search_placeholder: 'Dateien suchen...',
          files_header: 'Dateien',
          add_files: '+ Hinzufügen',
          format_badge: 'PDF',
          present: 'Präsentieren',
          exit_presentation: 'Beenden',
          start_presentation: 'Präsentation Starten (Leertaste/Pfeile zum Navigieren)',
          print_pdf: 'PDF Drucken',
          download_pdf: 'PDF Herunterladen',
          previous: 'Vorherige (←)',
          next: 'Nächste (→)',
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
      pdf: {
        meta_title: 'Visor PDF Gratis - Ver Documentos PDF en Línea',
        meta_description: 'Visor PDF profesional gratuito con renderizado de alta calidad, miniaturas de páginas, controles de zoom y búsqueda de texto. Sube y previsualiza PDFs al instante. Lote de hasta 20 documentos. 100% herramienta gratuita de visor PDF.',
        meta_keywords: 'visor pdf, ver pdf online, vista previa pdf, lector pdf, visor de documentos, visor pdf gratis',
        hero_title: 'Visor PDF Gratis',
        hero_subtitle: 'Lee, busca y navega documentos PDF directamente en tu navegador – 100% gratis',
        upload_title: 'Subir Documentos PDF',
        upload_description: 'Arrastra y suelta tus archivos PDF o haz clic para explorar. Soporta PDFs de hasta 100MB cada uno, con carga por lotes de hasta 20 documentos.',
        upload: {
          drag_drop_text: 'Arrastra y Suelta Tus Archivos Aquí',
          click_browse_text: 'o haz clic en el botón de abajo para explorar',
          choose_files_button: 'Elegir Archivos',
          max_files_info: 'Máx. {maxFiles} archivos • Hasta {maxSize} Total'
        },
        buttons: {
          view_files: 'Ver Archivos',
          view: 'Ver PDF',
          download: 'Descargar',
          back: 'Volver a Todos los Visores'
        },
        quick_stats: {
          universal_format: '✓ Formato Universal',
          fast_processing: '⚡ Procesamiento Rápido',
          high_quality: '🎨 Alta Calidad'
        },
        features: [
          { title: 'Renderizado de Alta Calidad', description: 'Experimenta renderizado vectorial nítido, texto seleccionable y fuentes precisas para cada página PDF.' },
          { title: 'Navegación y Búsqueda', description: 'Usa miniaturas, navegación de esquema y búsqueda de texto para saltar exactamente donde necesites.' },
          { title: 'Herramientas de Productividad', description: 'Zoom, rotar, cambiar diseños de página y alternar modo oscuro para lectura cómoda.' }
        ],
        about_title: 'Acerca del Formato PDF',
        about_intro: 'PDF (Portable Document Format) es el estándar de la industria para documentos de diseño fijo. Preserva fuentes, imágenes y diseño en todos los dispositivos, lo que lo hace ideal para distribución y archivado.',
        advantages_title: 'Ventajas Clave',
        advantages: [
          'Compatibilidad universal – Se abre en todos los dispositivos y sistemas operativos.',
          'Diseño fijo – Preserva tipografía, gráficos y geometría de página.',
          'Opciones de seguridad – Soporta cifrado, firmas digitales y permisos.',
          'Elementos interactivos – Incrusta enlaces, formularios, multimedia y anotaciones.',
          'Compresión – Almacena eficientemente documentos complejos con imágenes y arte vectorial.',
          'Amigable para archivo – PDF/A asegura preservación a largo plazo de registros.'
        ],
        use_cases_title: 'Mejores Casos de Uso',
        use_cases: [
          'Documentos comerciales – Informes, facturas, contratos y propuestas.',
          'Educación – Libros de texto, notas de clase y trabajos de investigación.',
          'Trabajo creativo – Portafolios, folletos y material de marketing.',
          'Gobierno – Formularios oficiales, registros públicos y materiales de cumplimiento.',
          'Manuales técnicos – Documentos de ingeniería, especificaciones y SOPs.',
          'Publicación – eBooks, revistas y activos imprimibles.'
        ],
        specs_title: 'Especificaciones Técnicas',
        specs_header_label: 'Especificación',
        specs_header_value: 'Detalles',
        specs: [
          { label: 'Extensión de Archivo', value: '.pdf' },
          { label: 'Tipo MIME', value: 'application/pdf' },
          { label: 'Estándar', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Compresión', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2, etc.' },
          { label: 'Características Interactivas', value: 'Formularios, anotaciones, capas, multimedia, JavaScript' },
          { label: 'Desarrollado Por', value: 'Adobe Systems (1993), ahora mantenido por ISO' }
        ],
        seo_title: '¿Por Qué Elegir Nuestro Visor PDF?',
        seo_intro: 'Nuestro visor PDF proporciona una experiencia fluida para ver y gestionar documentos PDF directamente en tu navegador.',
        seo_viewing_title: 'Visualización Profesional de Documentos',
        seo_viewing_text: 'Ver documentos PDF con renderizado de alta calidad, controles de zoom y herramientas de navegación.',
        seo_features_title: 'Características Avanzadas',
        seo_features_text: 'Accede a potentes características de visualización PDF incluyendo búsqueda, zoom y navegación de páginas.',
        seo_security_title: 'Seguro y Privado',
        seo_security_text: 'Tus archivos PDF se procesan de forma segura y nunca se almacenan en nuestros servidores.',
        alerts: {
          file_too_large: 'El archivo es demasiado grande para la vista previa ({{size}} MB). El tamaño máximo es {{max}} MB. Por favor descarga el archivo en su lugar.',
          popup_blocked: 'Por favor permite ventanas emergentes para ver el archivo PDF.',
          preview_failed: 'Error al abrir la vista previa PDF. Por favor intenta de nuevo o descarga el archivo.'
        },
        loading_window: {
          title: 'Cargando PDF...',
          message: 'Renderizando {{filename}}...'
        },
        error_window: {
          title: 'Error de Vista Previa',
          message: 'Error al generar la vista previa PDF. Por favor intenta descargar el archivo en su lugar.',
          close: 'Cerrar'
        },
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar Barra Lateral',
          search_placeholder: 'Buscar archivos...',
          files_header: 'Archivos',
          add_files: '+ Añadir',
          format_badge: 'PDF',
          present: 'Presentar',
          exit_presentation: 'Salir',
          start_presentation: 'Iniciar Presentación (Espacio/Flechas para navegar)',
          print_pdf: 'Imprimir PDF',
          download_pdf: 'Descargar PDF',
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
      pdf: {
        meta_title: 'Visionneuse PDF Gratuite - Voir Documents PDF en Ligne',
        meta_description: 'Visionneuse PDF professionnelle gratuite avec rendu haute qualité, miniatures de pages, contrôles de zoom et recherche de texte. Téléchargez et prévisualisez les PDF instantanément. Lot jusqu\'à 20 documents. 100% outil gratuit de visionneuse PDF.',
        meta_keywords: 'visionneuse pdf, voir pdf en ligne, aperçu pdf, lecteur pdf, visionneuse de documents, visionneuse pdf gratuite',
        hero_title: 'Visionneuse PDF Gratuite',
        hero_subtitle: 'Lisez, recherchez et naviguez dans les documents PDF directement dans votre navigateur – 100% gratuit',
        upload_title: 'Télécharger des Documents PDF',
        upload_description: 'Glissez-déposez vos fichiers PDF ou cliquez pour parcourir. Prend en charge les PDF jusqu\'à 100 Mo chacun, avec téléchargement par lots jusqu\'à 20 documents.',
        upload: {
          drag_drop_text: 'Glissez-Déposez Vos Fichiers Ici',
          click_browse_text: 'ou cliquez sur le bouton ci-dessous pour parcourir',
          choose_files_button: 'Choisir des Fichiers',
          max_files_info: 'Max {maxFiles} fichiers • Jusqu\'à {maxSize} Total'
        },
        buttons: {
          view_files: 'Voir les Fichiers',
          view: 'Voir PDF',
          download: 'Télécharger',
          back: 'Retour à Tous les Visionneuses'
        },
        quick_stats: {
          universal_format: '✓ Format Universel',
          fast_processing: '⚡ Traitement Rapide',
          high_quality: '🎨 Haute Qualité'
        },
        features: [
          { title: 'Rendu de Haute Qualité', description: 'Découvrez un rendu vectoriel net, texte sélectionnable et polices précises pour chaque page PDF.' },
          { title: 'Navigation et Recherche', description: 'Utilisez les miniatures, la navigation de plan et la recherche de texte pour accéder exactement où vous en avez besoin.' },
          { title: 'Outils de Productivité', description: 'Zoom, rotation, changement de mises en page et basculement du mode sombre pour une lecture confortable.' }
        ],
        about_title: 'À Propos du Format PDF',
        about_intro: 'PDF (Portable Document Format) est la norme de l\'industrie pour les documents à mise en page fixe. Il préserve les polices, images et mises en page sur tous les appareils, ce qui le rend idéal pour la distribution et l\'archivage.',
        advantages_title: 'Avantages Clés',
        advantages: [
          'Compatibilité universelle – S\'ouvre sur tous les appareils et systèmes d\'exploitation.',
          'Mise en page fixe – Préserve la typographie, les graphiques et la géométrie de page.',
          'Options de sécurité – Prend en charge le chiffrement, les signatures numériques et les permissions.',
          'Éléments interactifs – Intégrez des liens, formulaires, multimédia et annotations.',
          'Compression – Stockez efficacement des documents complexes avec images et art vectoriel.',
          'Convivial pour l\'archivage – PDF/A assure la préservation à long terme des enregistrements.'
        ],
        use_cases_title: 'Meilleurs Cas d\'Utilisation',
        use_cases: [
          'Documents commerciaux – Rapports, factures, contrats et propositions.',
          'Éducation – Manuels, notes de cours et articles de recherche.',
          'Travail créatif – Portfolios, brochures et matériel marketing.',
          'Gouvernement – Formulaires officiels, dossiers publics et matériaux de conformité.',
          'Manuels techniques – Documents d\'ingénierie, spécifications et SOPs.',
          'Édition – eBooks, magazines et actifs imprimables.'
        ],
        specs_title: 'Spécifications Techniques',
        specs_header_label: 'Spécification',
        specs_header_value: 'Détails',
        specs: [
          { label: 'Extension de Fichier', value: '.pdf' },
          { label: 'Type MIME', value: 'application/pdf' },
          { label: 'Standard', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Compression', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2, etc.' },
          { label: 'Fonctionnalités Interactives', value: 'Formulaires, annotations, calques, multimédia, JavaScript' },
          { label: 'Développé Par', value: 'Adobe Systems (1993), maintenant maintenu par ISO' }
        ],
        seo_title: 'Pourquoi Choisir Notre Visionneuse PDF?',
        seo_intro: 'Notre visionneuse PDF offre une expérience fluide pour visualiser et gérer les documents PDF directement dans votre navigateur.',
        seo_viewing_title: 'Visualisation Professionnelle de Documents',
        seo_viewing_text: 'Visualisez les documents PDF avec rendu haute qualité, contrôles de zoom et outils de navigation.',
        seo_features_title: 'Fonctionnalités Avancées',
        seo_features_text: 'Accédez à des fonctionnalités puissantes de visualisation PDF incluant la recherche, le zoom et la navigation de pages.',
        seo_security_title: 'Sécurisé et Privé',
        seo_security_text: 'Vos fichiers PDF sont traités en toute sécurité et ne sont jamais stockés sur nos serveurs.',
        alerts: {
          file_too_large: 'Le fichier est trop volumineux pour l\'aperçu ({{size}} Mo). La taille maximale est {{max}} Mo. Veuillez télécharger le fichier à la place.',
          popup_blocked: 'Veuillez autoriser les fenêtres pop-up pour voir le fichier PDF.',
          preview_failed: 'Échec de l\'ouverture de l\'aperçu PDF. Veuillez réessayer ou télécharger le fichier.'
        },
        loading_window: {
          title: 'Chargement du PDF...',
          message: 'Rendu de {{filename}}...'
        },
        error_window: {
          title: 'Erreur d\'Aperçu',
          message: 'Échec de la génération de l\'aperçu PDF. Veuillez essayer de télécharger le fichier à la place.',
          close: 'Fermer'
        },
        editor: {
          toggle_sidebar: 'Basculer la Barre Latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la Barre Latérale',
          search_placeholder: 'Rechercher des fichiers...',
          files_header: 'Fichiers',
          add_files: '+ Ajouter',
          format_badge: 'PDF',
          present: 'Présenter',
          exit_presentation: 'Quitter',
          start_presentation: 'Démarrer la Présentation (Espace/Flèches pour naviguer)',
          print_pdf: 'Imprimer PDF',
          download_pdf: 'Télécharger PDF',
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
      pdf: {
        meta_title: 'Visualizzatore PDF Gratuito - Visualizza Documenti PDF Online',
        meta_description: 'Visualizzatore PDF professionale gratuito con rendering di alta qualità, miniature di pagine, controlli di zoom e ricerca di testo. Carica e visualizza in anteprima i PDF all\'istante. Lotto fino a 20 documenti. 100% strumento gratuito di visualizzatore PDF.',
        meta_keywords: 'visualizzatore pdf, vedere pdf online, anteprima pdf, lettore pdf, visualizzatore documenti, visualizzatore pdf gratuito',
        hero_title: 'Visualizzatore PDF Gratuito',
        hero_subtitle: 'Leggi, cerca e naviga documenti PDF direttamente nel tuo browser – 100% gratuito',
        upload_title: 'Carica Documenti PDF',
        upload_description: 'Trascina e rilascia i tuoi file PDF o fai clic per sfogliare. Supporta PDF fino a 100MB ciascuno, con caricamento batch fino a 20 documenti.',
        upload: {
          drag_drop_text: 'Trascina e Rilascia i Tuoi File Qui',
          click_browse_text: 'o fai clic sul pulsante qui sotto per sfogliare',
          choose_files_button: 'Scegli File',
          max_files_info: 'Max {maxFiles} file • Fino a {maxSize} Totale'
        },
        buttons: {
          view_files: 'Visualizza File',
          view: 'Visualizza PDF',
          download: 'Scarica',
          back: 'Torna a Tutti i Visualizzatori'
        },
        quick_stats: {
          universal_format: '✓ Formato Universale',
          fast_processing: '⚡ Elaborazione Veloce',
          high_quality: '🎨 Alta Qualità'
        },
        features: [
          { title: 'Rendering di Alta Qualità', description: 'Sperimenta rendering vettoriale nitido, testo selezionabile e caratteri precisi per ogni pagina PDF.' },
          { title: 'Navigazione e Ricerca', description: 'Usa miniature, navigazione struttura e ricerca testo per saltare esattamente dove ti serve.' },
          { title: 'Strumenti di Produttività', description: 'Zoom, rotazione, cambio layout pagina e attivazione modalità scura per lettura confortevole.' }
        ],
        about_title: 'Informazioni sul Formato PDF',
        about_intro: 'PDF (Portable Document Format) è lo standard del settore per documenti a layout fisso. Preserva caratteri, immagini e layout su tutti i dispositivi, rendendolo ideale per distribuzione e archiviazione.',
        advantages_title: 'Vantaggi Chiave',
        advantages: [
          'Compatibilità universale – Si apre su tutti i dispositivi e sistemi operativi.',
          'Layout fisso – Preserva tipografia, grafica e geometria pagina.',
          'Opzioni di sicurezza – Supporta crittografia, firme digitali e permessi.',
          'Elementi interattivi – Incorpora link, moduli, multimedia e annotazioni.',
          'Compressione – Archivia efficientemente documenti complessi con immagini e arte vettoriale.',
          'Amichevole per archivi – PDF/A assicura preservazione a lungo termine dei record.'
        ],
        use_cases_title: 'Migliori Casi d\'Uso',
        use_cases: [
          'Documenti aziendali – Rapporti, fatture, contratti e proposte.',
          'Educazione – Libri di testo, appunti lezione e articoli di ricerca.',
          'Lavoro creativo – Portfolio, brochure e materiale marketing.',
          'Governo – Moduli ufficiali, registri pubblici e materiali conformità.',
          'Manuali tecnici – Documenti ingegneria, specifiche e SOP.',
          'Editoria – eBook, riviste e risorse stampabili.'
        ],
        specs_title: 'Specifiche Tecniche',
        specs_header_label: 'Specifica',
        specs_header_value: 'Dettagli',
        specs: [
          { label: 'Estensione File', value: '.pdf' },
          { label: 'Tipo MIME', value: 'application/pdf' },
          { label: 'Standard', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Compressione', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2, ecc.' },
          { label: 'Caratteristiche Interattive', value: 'Moduli, annotazioni, livelli, multimedia, JavaScript' },
          { label: 'Sviluppato Da', value: 'Adobe Systems (1993), ora mantenuto da ISO' }
        ],
        seo_title: 'Perché Scegliere il Nostro Visualizzatore PDF?',
        seo_intro: 'Il nostro visualizzatore PDF offre un\'esperienza fluida per visualizzare e gestire documenti PDF direttamente nel tuo browser.',
        seo_viewing_title: 'Visualizzazione Professionale Documenti',
        seo_viewing_text: 'Visualizza documenti PDF con rendering di alta qualità, controlli zoom e strumenti navigazione.',
        seo_features_title: 'Caratteristiche Avanzate',
        seo_features_text: 'Accedi a potenti caratteristiche visualizzazione PDF incluse ricerca, zoom e navigazione pagine.',
        seo_security_title: 'Sicuro e Privato',
        seo_security_text: 'I tuoi file PDF vengono elaborati in modo sicuro e non vengono mai memorizzati sui nostri server.',
        alerts: {
          file_too_large: 'Il file è troppo grande per l\'anteprima ({{size}} MB). La dimensione massima è {{max}} MB. Si prega di scaricare il file invece.',
          popup_blocked: 'Si prega di consentire pop-up per visualizzare il file PDF.',
          preview_failed: 'Impossibile aprire l\'anteprima PDF. Si prega di riprovare o scaricare il file.'
        },
        loading_window: {
          title: 'Caricamento PDF...',
          message: 'Rendering {{filename}}...'
        },
        error_window: {
          title: 'Errore Anteprima',
          message: 'Impossibile generare l\'anteprima PDF. Si prega di provare a scaricare il file invece.',
          close: 'Chiudi'
        },
        editor: {
          toggle_sidebar: 'Wissel Zijbalk',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk Sluiten',
          search_placeholder: 'Zoek bestanden...',
          files_header: 'Bestanden',
          add_files: '+ Toevoegen',
          format_badge: 'PDF',
          present: 'Presenteren',
          exit_presentation: 'Afsluiten',
          start_presentation: 'Presentatie Starten (Spatie/Pijlen om te navigeren)',
          print_pdf: 'PDF Afdrukken',
          download_pdf: 'PDF Downloaden',
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
  nl: {
    viewers: {
      pdf: {
        meta_title: 'Gratis PDF Viewer - Bekijk PDF Documenten Online',
        meta_description: 'Gratis professionele PDF viewer met hoogwaardige rendering, paginaminiaturen, zoombediening en tekstzoekfunctie. Upload en bekijk PDF\'s direct. Batch tot 20 documenten. 100% gratis PDF viewer tool.',
        meta_keywords: 'pdf viewer, pdf online bekijken, pdf voorvertoning, pdf lezer, document viewer, gratis pdf viewer',
        hero_title: 'Gratis PDF Viewer',
        hero_subtitle: 'Lees, zoek en navigeer PDF documenten direct in je browser – 100% gratis',
        upload_title: 'Upload PDF Documenten',
        upload_description: 'Sleep en zet je PDF bestanden neer of klik om te bladeren. Ondersteunt PDF\'s tot 100MB elk, met batch upload tot 20 documenten.',
        upload: {
          drag_drop_text: 'Sleep en Zet Je Bestanden Hier Neer',
          click_browse_text: 'of klik op de knop hieronder om te bladeren',
          choose_files_button: 'Kies Bestanden',
          max_files_info: 'Max {maxFiles} bestanden • Tot {maxSize} Totaal'
        },
        buttons: {
          view_files: 'Bekijk Bestanden',
          view: 'Bekijk PDF',
          download: 'Downloaden',
          back: 'Terug naar Alle Viewers'
        },
        quick_stats: {
          universal_format: '✓ Universeel Formaat',
          fast_processing: '⚡ Snelle Verwerking',
          high_quality: '🎨 Hoge Kwaliteit'
        },
        features: [
          { title: 'Hoogwaardige Rendering', description: 'Ervaar scherpe vector rendering, selecteerbare tekst en nauwkeurige lettertypen voor elke PDF pagina.' },
          { title: 'Navigatie en Zoeken', description: 'Gebruik miniaturen, overzicht navigatie en tekstzoekfunctie om precies te springen waar je nodig hebt.' },
          { title: 'Productiviteitstools', description: 'Zoom, roteer, wissel paginalay-outs en schakel donkere modus in voor comfortabel lezen.' }
        ],
        about_title: 'Over PDF Formaat',
        about_intro: 'PDF (Portable Document Format) is de industriestandaard voor documenten met vaste lay-out. Het behoudt lettertypen, afbeeldingen en lay-out op alle apparaten, waardoor het ideaal is voor distributie en archivering.',
        advantages_title: 'Belangrijkste Voordelen',
        advantages: [
          'Universele compatibiliteit – Opent op elk apparaat en besturingssysteem.',
          'Vaste lay-out – Behoudt typografie, afbeeldingen en paginageometrie.',
          'Beveiligingsopties – Ondersteunt versleuteling, digitale handtekeningen en machtigingen.',
          'Interactieve elementen – Embed links, formulieren, multimedia en annotaties.',
          'Compressie – Sla complexe documenten met afbeeldingen en vector kunst efficiënt op.',
          'Archiefvriendelijk – PDF/A zorgt voor langetermijnbewaring van records.'
        ],
        use_cases_title: 'Beste Gebruikssituaties',
        use_cases: [
          'Bedrijfsdocumenten – Rapporten, facturen, contracten en voorstellen.',
          'Onderwijs – Leerboeken, college aantekeningen en onderzoekspapers.',
          'Creatief werk – Portfolio\'s, brochures en marketingmateriaal.',
          'Overheid – Officiële formulieren, openbare archieven en compliance materialen.',
          'Technische handleidingen – Engineering documenten, specificaties en SOP\'s.',
          'Publiceren – eBooks, tijdschriften en printbare assets.'
        ],
        specs_title: 'Technische Specificaties',
        specs_header_label: 'Specificatie',
        specs_header_value: 'Details',
        specs: [
          { label: 'Bestandsextensie', value: '.pdf' },
          { label: 'MIME Type', value: 'application/pdf' },
          { label: 'Standaard', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Compressie', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2, etc.' },
          { label: 'Interactieve Functies', value: 'Formulieren, annotaties, lagen, multimedia, JavaScript' },
          { label: 'Ontwikkeld Door', value: 'Adobe Systems (1993), nu onderhouden door ISO' }
        ],
        seo_title: 'Waarom Onze PDF Viewer Kiezen?',
        seo_intro: 'Onze PDF viewer biedt een naadloze ervaring voor het bekijken en beheren van PDF documenten direct in je browser.',
        seo_viewing_title: 'Professioneel Document Bekijken',
        seo_viewing_text: 'Bekijk PDF documenten met hoogwaardige rendering, zoombediening en navigatietools.',
        seo_features_title: 'Geavanceerde Functies',
        seo_features_text: 'Toegang tot krachtige PDF bekijkfuncties inclusief zoeken, zoom en paginanavigatie.',
        seo_security_title: 'Veilig en Privé',
        seo_security_text: 'Je PDF bestanden worden veilig verwerkt en worden nooit opgeslagen op onze servers.',
        alerts: {
          file_too_large: 'Bestand is te groot voor voorvertoning ({{size}} MB). Maximale grootte is {{max}} MB. Download het bestand in plaats daarvan.',
          popup_blocked: 'Sta pop-ups toe om het PDF bestand te bekijken.',
          preview_failed: 'Kan PDF voorvertoning niet openen. Probeer opnieuw of download het bestand.'
        },
        loading_window: {
          title: 'PDF Laden...',
          message: 'Rendering {{filename}}...'
        },
        error_window: {
          title: 'Voorvertoning Fout',
          message: 'Kan PDF voorvertoning niet genereren. Probeer in plaats daarvan het bestand te downloaden.',
          close: 'Sluiten'
        }
      }
    }
  },
  pt: {
    viewers: {
      pdf: {
        meta_title: 'Visualizador PDF Gratuito - Ver Documentos PDF Online',
        meta_description: 'Visualizador PDF profissional gratuito com renderização de alta qualidade, miniaturas de páginas, controles de zoom e busca de texto. Carregue e visualize PDFs instantaneamente. Lote de até 20 documentos. 100% ferramenta gratuita de visualizador PDF.',
        meta_keywords: 'visualizador pdf, ver pdf online, pré-visualização pdf, leitor pdf, visualizador de documentos, visualizador pdf gratuito',
        hero_title: 'Visualizador PDF Gratuito',
        hero_subtitle: 'Leia, pesquise e navegue documentos PDF diretamente no seu navegador – 100% gratuito',
        upload_title: 'Carregar Documentos PDF',
        upload_description: 'Arraste e solte seus arquivos PDF ou clique para navegar. Suporta PDFs de até 100MB cada, com upload em lote de até 20 documentos.',
        upload: {
          drag_drop_text: 'Arraste e Solte Seus Arquivos Aqui',
          click_browse_text: 'ou clique no botão abaixo para navegar',
          choose_files_button: 'Escolher Arquivos',
          max_files_info: 'Máx. {maxFiles} arquivos • Até {maxSize} Total'
        },
        buttons: {
          view_files: 'Ver Arquivos',
          view: 'Ver PDF',
          download: 'Baixar',
          back: 'Voltar para Todos os Visualizadores'
        },
        quick_stats: {
          universal_format: '✓ Formato Universal',
          fast_processing: '⚡ Processamento Rápido',
          high_quality: '🎨 Alta Qualidade'
        },
        features: [
          { title: 'Renderização de Alta Qualidade', description: 'Experimente renderização vetorial nítida, texto selecionável e fontes precisas para cada página PDF.' },
          { title: 'Navegação e Busca', description: 'Use miniaturas, navegação de esboço e busca de texto para pular exatamente onde você precisa.' },
          { title: 'Ferramentas de Produtividade', description: 'Zoom, rotacionar, alternar layouts de página e alternar modo escuro para leitura confortável.' }
        ],
        about_title: 'Sobre o Formato PDF',
        about_intro: 'PDF (Portable Document Format) é o padrão da indústria para documentos de layout fixo. Preserva fontes, imagens e layout em todos os dispositivos, tornando-o ideal para distribuição e arquivamento.',
        advantages_title: 'Vantagens Principais',
        advantages: [
          'Compatibilidade universal – Abre em todos os dispositivos e sistemas operacionais.',
          'Layout fixo – Preserva tipografia, gráficos e geometria da página.',
          'Opções de segurança – Suporta criptografia, assinaturas digitais e permissões.',
          'Elementos interativos – Incorpora links, formulários, multimídia e anotações.',
          'Compressão – Armazena eficientemente documentos complexos com imagens e arte vetorial.',
          'Amigável para arquivo – PDF/A garante preservação de longo prazo de registros.'
        ],
        use_cases_title: 'Melhores Casos de Uso',
        use_cases: [
          'Documentos comerciais – Relatórios, faturas, contratos e propostas.',
          'Educação – Livros didáticos, anotações de aula e artigos de pesquisa.',
          'Trabalho criativo – Portfólios, brochuras e material de marketing.',
          'Governo – Formulários oficiais, registros públicos e materiais de conformidade.',
          'Manuais técnicos – Documentos de engenharia, especificações e SOPs.',
          'Publicação – eBooks, revistas e ativos imprimíveis.'
        ],
        specs_title: 'Especificações Técnicas',
        specs_header_label: 'Especificação',
        specs_header_value: 'Detalhes',
        specs: [
          { label: 'Extensão de Arquivo', value: '.pdf' },
          { label: 'Tipo MIME', value: 'application/pdf' },
          { label: 'Padrão', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Compressão', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2, etc.' },
          { label: 'Recursos Interativos', value: 'Formulários, anotações, camadas, multimídia, JavaScript' },
          { label: 'Desenvolvido Por', value: 'Adobe Systems (1993), agora mantido pela ISO' }
        ],
        seo_title: 'Por Que Escolher Nosso Visualizador PDF?',
        seo_intro: 'Nosso visualizador PDF oferece uma experiência perfeita para visualizar e gerenciar documentos PDF diretamente no seu navegador.',
        seo_viewing_title: 'Visualização Profissional de Documentos',
        seo_viewing_text: 'Visualize documentos PDF com renderização de alta qualidade, controles de zoom e ferramentas de navegação.',
        seo_features_title: 'Recursos Avançados',
        seo_features_text: 'Acesse recursos poderosos de visualização PDF incluindo busca, zoom e navegação de páginas.',
        seo_security_title: 'Seguro e Privado',
        seo_security_text: 'Seus arquivos PDF são processados com segurança e nunca são armazenados em nossos servidores.',
        alerts: {
          file_too_large: 'Arquivo muito grande para pré-visualização ({{size}} MB). Tamanho máximo é {{max}} MB. Por favor baixe o arquivo em vez disso.',
          popup_blocked: 'Por favor permita pop-ups para visualizar o arquivo PDF.',
          preview_failed: 'Falha ao abrir pré-visualização PDF. Por favor tente novamente ou baixe o arquivo.'
        },
        loading_window: {
          title: 'Carregando PDF...',
          message: 'Renderizando {{filename}}...'
        },
        error_window: {
          title: 'Erro de Pré-visualização',
          message: 'Falha ao gerar pré-visualização PDF. Por favor tente baixar o arquivo em vez disso.',
          close: 'Fechar'
        },
        editor: {
          toggle_sidebar: 'Alternar Barra Lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar Barra Lateral',
          search_placeholder: 'Buscar arquivos...',
          files_header: 'Arquivos',
          add_files: '+ Adicionar',
          format_badge: 'PDF',
          present: 'Apresentar',
          exit_presentation: 'Sair',
          start_presentation: 'Iniciar Apresentação (Espaço/Setas para navegar)',
          print_pdf: 'Imprimir PDF',
          download_pdf: 'Baixar PDF',
          previous: 'Anterior (←)',
          next: 'Próximo (→)',
          zoom_out: 'Diminuir Zoom (-)',
          zoom_in: 'Aumentar Zoom (+)',
          reset_zoom: 'Clique para redefinir zoom',
          rotate: 'Rotacionar (R)',
          fullscreen: 'Tela Cheia (F)'
        }
      }
    }
  },
  vi: {
    viewers: {
      pdf: {
        meta_title: 'Trình Xem PDF Miễn Phí - Xem Tài Liệu PDF Trực Tuyến',
        meta_description: 'Trình xem PDF chuyên nghiệp miễn phí với kết xuất chất lượng cao, hình thu nhỏ trang, điều khiển thu phóng và tìm kiếm văn bản. Tải lên và xem trước PDF ngay lập tức. Hàng loạt lên đến 20 tài liệu. 100% công cụ trình xem PDF miễn phí.',
        meta_keywords: 'trình xem pdf, xem pdf trực tuyến, xem trước pdf, đọc pdf, trình xem tài liệu, trình xem pdf miễn phí',
        hero_title: 'Trình Xem PDF Miễn Phí',
        hero_subtitle: 'Đọc, tìm kiếm và điều hướng tài liệu PDF trực tiếp trong trình duyệt của bạn – 100% miễn phí',
        upload_title: 'Tải Lên Tài Liệu PDF',
        upload_description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để duyệt. Hỗ trợ PDF lên đến 100MB mỗi tệp, với tải lên hàng loạt lên đến 20 tài liệu.',
        upload: {
          drag_drop_text: 'Kéo và Thả Tệp Của Bạn Ở Đây',
          click_browse_text: 'hoặc nhấp vào nút bên dưới để duyệt',
          choose_files_button: 'Chọn Tệp',
          max_files_info: 'Tối đa {maxFiles} tệp • Lên đến {maxSize} Tổng'
        },
        buttons: {
          view_files: 'Xem Tệp',
          view: 'Xem PDF',
          download: 'Tải Xuống',
          back: 'Quay Lại Tất Cả Trình Xem'
        },
        quick_stats: {
          universal_format: '✓ Định Dạng Phổ Biến',
          fast_processing: '⚡ Xử Lý Nhanh',
          high_quality: '🎨 Chất Lượng Cao'
        },
        features: [
          { title: 'Kết Xuất Chất Lượng Cao', description: 'Trải nghiệm kết xuất vector sắc nét, văn bản có thể chọn và phông chữ chính xác cho mỗi trang PDF.' },
          { title: 'Điều Hướng và Tìm Kiếm', description: 'Sử dụng hình thu nhỏ, điều hướng dàn ý và tìm kiếm văn bản để nhảy chính xác đến nơi bạn cần.' },
          { title: 'Công Cụ Năng Suất', description: 'Thu phóng, xoay, chuyển bố cục trang và chuyển chế độ tối để đọc thoải mái.' }
        ],
        about_title: 'Về Định Dạng PDF',
        about_intro: 'PDF (Portable Document Format) là tiêu chuẩn ngành cho tài liệu có bố cục cố định. Nó bảo toàn phông chữ, hình ảnh và bố cục trên tất cả các thiết bị, làm cho nó lý tưởng cho phân phối và lưu trữ.',
        advantages_title: 'Lợi Ích Chính',
        advantages: [
          'Tương thích phổ biến – Mở trên mọi thiết bị và hệ điều hành.',
          'Bố cục cố định – Bảo toàn kiểu chữ, đồ họa và hình học trang.',
          'Tùy chọn bảo mật – Hỗ trợ mã hóa, chữ ký số và quyền.',
          'Phần tử tương tác – Nhúng liên kết, biểu mẫu, đa phương tiện và chú thích.',
          'Nén – Lưu trữ hiệu quả tài liệu phức tạp với hình ảnh và nghệ thuật vector.',
          'Thân thiện với lưu trữ – PDF/A đảm bảo bảo quản dài hạn cho hồ sơ.'
        ],
        use_cases_title: 'Trường Hợp Sử Dụng Tốt Nhất',
        use_cases: [
          'Tài liệu kinh doanh – Báo cáo, hóa đơn, hợp đồng và đề xuất.',
          'Giáo dục – Sách giáo khoa, ghi chú bài giảng và bài nghiên cứu.',
          'Công việc sáng tạo – Portfolio, brochure và tài liệu tiếp thị.',
          'Chính phủ – Biểu mẫu chính thức, hồ sơ công khai và tài liệu tuân thủ.',
          'Sổ tay kỹ thuật – Tài liệu kỹ thuật, thông số kỹ thuật và SOP.',
          'Xuất bản – eBook, tạp chí và tài sản có thể in.'
        ],
        specs_title: 'Thông Số Kỹ Thuật',
        specs_header_label: 'Thông Số',
        specs_header_value: 'Chi Tiết',
        specs: [
          { label: 'Phần Mở Rộng Tệp', value: '.pdf' },
          { label: 'Loại MIME', value: 'application/pdf' },
          { label: 'Tiêu Chuẩn', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Nén', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2, v.v.' },
          { label: 'Tính Năng Tương Tác', value: 'Biểu mẫu, chú thích, lớp, đa phương tiện, JavaScript' },
          { label: 'Phát Triển Bởi', value: 'Adobe Systems (1993), hiện được duy trì bởi ISO' }
        ],
        seo_title: 'Tại Sao Chọn Trình Xem PDF Của Chúng Tôi?',
        seo_intro: 'Trình xem PDF của chúng tôi cung cấp trải nghiệm liền mạch để xem và quản lý tài liệu PDF trực tiếp trong trình duyệt của bạn.',
        seo_viewing_title: 'Xem Tài Liệu Chuyên Nghiệp',
        seo_viewing_text: 'Xem tài liệu PDF với kết xuất chất lượng cao, điều khiển thu phóng và công cụ điều hướng.',
        seo_features_title: 'Tính Năng Nâng Cao',
        seo_features_text: 'Truy cập các tính năng xem PDF mạnh mẽ bao gồm tìm kiếm, thu phóng và điều hướng trang.',
        seo_security_title: 'An Toàn và Riêng Tư',
        seo_security_text: 'Tệp PDF của bạn được xử lý an toàn và không bao giờ được lưu trữ trên máy chủ của chúng tôi.',
        alerts: {
          file_too_large: 'Tệp quá lớn để xem trước ({{size}} MB). Kích thước tối đa là {{max}} MB. Vui lòng tải xuống tệp thay thế.',
          popup_blocked: 'Vui lòng cho phép cửa sổ bật lên để xem tệp PDF.',
          preview_failed: 'Không thể mở xem trước PDF. Vui lòng thử lại hoặc tải xuống tệp.'
        },
        loading_window: {
          title: 'Đang Tải PDF...',
          message: 'Đang kết xuất {{filename}}...'
        },
        error_window: {
          title: 'Lỗi Xem Trước',
          message: 'Không thể tạo xem trước PDF. Vui lòng thử tải xuống tệp thay thế.',
          close: 'Đóng'
        },
        editor: {
          toggle_sidebar: 'Chuyển Thanh Bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng Thanh Bên',
          search_placeholder: 'Tìm kiếm tệp...',
          files_header: 'Tệp',
          add_files: '+ Thêm',
          format_badge: 'PDF',
          present: 'Trình Bày',
          exit_presentation: 'Thoát',
          start_presentation: 'Bắt Đầu Trình Bày (Phím Cách/Mũi Tên để điều hướng)',
          print_pdf: 'In PDF',
          download_pdf: 'Tải Xuống PDF',
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
      pdf: {
        meta_title: 'Ücretsiz PDF Görüntüleyici - PDF Belgelerini Çevrimiçi Görüntüle',
        meta_description: 'Yüksek kaliteli render, sayfa küçük resimleri, yakınlaştırma kontrolleri ve metin arama ile ücretsiz profesyonel PDF görüntüleyici. PDF\'leri anında yükleyin ve önizleyin. 20 belgeye kadar toplu. %100 ücretsiz PDF görüntüleyici aracı.',
        meta_keywords: 'pdf görüntüleyici, pdf çevrimiçi görüntüle, pdf önizleme, pdf okuyucu, belge görüntüleyici, ücretsiz pdf görüntüleyici',
        hero_title: 'Ücretsiz PDF Görüntüleyici',
        hero_subtitle: 'PDF belgelerini tarayıcınızda doğrudan okuyun, arayın ve gezinin – %100 ücretsiz',
        upload_title: 'PDF Belgeleri Yükle',
        upload_description: 'PDF dosyalarınızı sürükleyip bırakın veya göz atmak için tıklayın. Her biri 100MB\'a kadar PDF\'leri destekler, 20 belgeye kadar toplu yükleme ile.',
        upload: {
          drag_drop_text: 'Dosyalarınızı Buraya Sürükleyip Bırakın',
          click_browse_text: 'veya göz atmak için aşağıdaki düğmeye tıklayın',
          choose_files_button: 'Dosya Seç',
          max_files_info: 'Maks. {maxFiles} dosya • Toplam {maxSize} Kadar'
        },
        buttons: {
          view_files: 'Dosyaları Görüntüle',
          view: 'PDF Görüntüle',
          download: 'İndir',
          back: 'Tüm Görüntüleyicilere Dön'
        },
        quick_stats: {
          universal_format: '✓ Evrensel Format',
          fast_processing: '⚡ Hızlı İşleme',
          high_quality: '🎨 Yüksek Kalite'
        },
        features: [
          { title: 'Yüksek Kaliteli Render', description: 'Her PDF sayfası için net vektör render, seçilebilir metin ve doğru yazı tipleri deneyimi yaşayın.' },
          { title: 'Gezinme ve Arama', description: 'İhtiyacınız olan yere tam olarak atlamak için küçük resimler, anahat gezintisi ve metin araması kullanın.' },
          { title: 'Verimlilik Araçları', description: 'Rahat okuma için yakınlaştırma, döndürme, sayfa düzenlerini değiştirme ve karanlık modu açma/kapama.' }
        ],
        about_title: 'PDF Formatı Hakkında',
        about_intro: 'PDF (Portable Document Format), sabit düzen belgeleri için endüstri standardıdır. Tüm cihazlarda yazı tiplerini, görüntüleri ve düzeni korur, bu da onu dağıtım ve arşivleme için ideal kılar.',
        advantages_title: 'Temel Avantajlar',
        advantages: [
          'Evrensel uyumluluk – Her cihaz ve işletim sisteminde açılır.',
          'Sabit düzen – Tipografi, grafikler ve sayfa geometrisini korur.',
          'Güvenlik seçenekleri – Şifreleme, dijital imzalar ve izinleri destekler.',
          'Etkileşimli öğeler – Bağlantılar, formlar, çoklu ortam ve açıklamalar ekleyin.',
          'Sıkıştırma – Görüntüler ve vektör sanatı içeren karmaşık belgeleri verimli bir şekilde saklayın.',
          'Arşiv dostu – PDF/A, kayıtlar için uzun vadeli koruma sağlar.'
        ],
        use_cases_title: 'En İyi Kullanım Durumları',
        use_cases: [
          'İş belgeleri – Raporlar, faturalar, sözleşmeler ve teklifler.',
          'Eğitim – Ders kitapları, ders notları ve araştırma makaleleri.',
          'Yaratıcı çalışma – Portföyler, broşürler ve pazarlama materyalleri.',
          'Hükümet – Resmi formlar, kamu kayıtları ve uyumluluk materyalleri.',
          'Teknik kılavuzlar – Mühendislik belgeleri, özellikler ve SOP\'lar.',
          'Yayıncılık – eKitap\'lar, dergiler ve yazdırılabilir varlıklar.'
        ],
        specs_title: 'Teknik Özellikler',
        specs_header_label: 'Özellik',
        specs_header_value: 'Detaylar',
        specs: [
          { label: 'Dosya Uzantısı', value: '.pdf' },
          { label: 'MIME Türü', value: 'application/pdf' },
          { label: 'Standart', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Sıkıştırma', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2, vb.' },
          { label: 'Etkileşimli Özellikler', value: 'Formlar, açıklamalar, katmanlar, çoklu ortam, JavaScript' },
          { label: 'Geliştiren', value: 'Adobe Systems (1993), şimdi ISO tarafından sürdürülüyor' }
        ],
        seo_title: 'Neden PDF Görüntüleyicimizi Seçmelisiniz?',
        seo_intro: 'PDF görüntüleyicimiz, PDF belgelerini tarayıcınızda doğrudan görüntüleme ve yönetme için sorunsuz bir deneyim sunar.',
        seo_viewing_title: 'Profesyonel Belge Görüntüleme',
        seo_viewing_text: 'Yüksek kaliteli render, yakınlaştırma kontrolleri ve gezinti araçları ile PDF belgelerini görüntüleyin.',
        seo_features_title: 'Gelişmiş Özellikler',
        seo_features_text: 'Arama, yakınlaştırma ve sayfa gezintisi dahil güçlü PDF görüntüleme özelliklerine erişin.',
        seo_security_title: 'Güvenli ve Özel',
        seo_security_text: 'PDF dosyalarınız güvenli bir şekilde işlenir ve asla sunucularımızda saklanmaz.',
        alerts: {
          file_too_large: 'Dosya önizleme için çok büyük ({{size}} MB). Maksimum boyut {{max}} MB\'dır. Lütfen bunun yerine dosyayı indirin.',
          popup_blocked: 'PDF dosyasını görüntülemek için lütfen açılır pencerelere izin verin.',
          preview_failed: 'PDF önizlemesi açılamadı. Lütfen tekrar deneyin veya dosyayı indirin.'
        },
        loading_window: {
          title: 'PDF Yükleniyor...',
          message: '{{filename}} render ediliyor...'
        },
        error_window: {
          title: 'Önizleme Hatası',
          message: 'PDF önizlemesi oluşturulamadı. Lütfen bunun yerine dosyayı indirmeyi deneyin.',
          close: 'Kapat'
        },
        editor: {
          toggle_sidebar: 'Kenar Çubuğunu Aç/Kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar Çubuğunu Kapat',
          search_placeholder: 'Dosyaları ara...',
          files_header: 'Dosyalar',
          add_files: '+ Ekle',
          format_badge: 'PDF',
          present: 'Sun',
          exit_presentation: 'Çık',
          start_presentation: 'Sunumu Başlat (Gezinmek için Boşluk/Ok)',
          print_pdf: 'PDF Yazdır',
          download_pdf: 'PDF İndir',
          previous: 'Önceki (←)',
          next: 'Sonraki (→)',
          zoom_out: 'Uzaklaştır (-)',
          zoom_in: 'Yakınlaştır (+)',
          reset_zoom: 'Yakınlaştırmayı sıfırlamak için tıklayın',
          rotate: 'Döndür (R)',
          fullscreen: 'Tam Ekran (F)'
        }
      }
    }
  },
  ru: {
    viewers: {
      pdf: {
        meta_title: 'Бесплатный PDF Просмотрщик - Просмотр PDF Документов Онлайн',
        meta_description: 'Бесплатный профессиональный PDF просмотрщик с высококачественным рендерингом, миниатюрами страниц, элементами управления масштабом и поиском текста. Загружайте и просматривайте PDF мгновенно. Пакетная обработка до 20 документов. 100% бесплатный инструмент просмотра PDF.',
        meta_keywords: 'просмотрщик pdf, просмотр pdf онлайн, предпросмотр pdf, читалка pdf, просмотрщик документов, бесплатный просмотрщик pdf',
        hero_title: 'Бесплатный PDF Просмотрщик',
        hero_subtitle: 'Читайте, ищите и навигируйте PDF документы прямо в вашем браузере – 100% бесплатно',
        upload_title: 'Загрузить PDF Документы',
        upload_description: 'Перетащите ваши PDF файлы или нажмите для просмотра. Поддерживает PDF до 100MB каждый, с пакетной загрузкой до 20 документов.',
        upload: {
          drag_drop_text: 'Перетащите Ваши Файлы Сюда',
          click_browse_text: 'или нажмите кнопку ниже для просмотра',
          choose_files_button: 'Выбрать Файлы',
          max_files_info: 'Макс. {maxFiles} файлов • До {maxSize} Всего'
        },
        buttons: {
          view_files: 'Просмотреть Файлы',
          view: 'Просмотреть PDF',
          download: 'Скачать',
          back: 'Вернуться ко Всем Просмотрщикам'
        },
        quick_stats: {
          universal_format: '✓ Универсальный Формат',
          fast_processing: '⚡ Быстрая Обработка',
          high_quality: '🎨 Высокое Качество'
        },
        features: [
          { title: 'Высококачественный Рендеринг', description: 'Наслаждайтесь четким векторным рендерингом, выбираемым текстом и точными шрифтами для каждой страницы PDF.' },
          { title: 'Навигация и Поиск', description: 'Используйте миниатюры, навигацию по структуре и поиск текста, чтобы перейти именно туда, где вам нужно.' },
          { title: 'Инструменты Продуктивности', description: 'Масштабирование, поворот, переключение макетов страниц и темный режим для комфортного чтения.' }
        ],
        about_title: 'О Формате PDF',
        about_intro: 'PDF (Portable Document Format) — отраслевой стандарт для документов с фиксированным макетом. Он сохраняет шрифты, изображения и макет на всех устройствах, что делает его идеальным для распространения и архивирования.',
        advantages_title: 'Ключевые Преимущества',
        advantages: [
          'Универсальная совместимость – Открывается на любом устройстве и операционной системе.',
          'Фиксированный макет – Сохраняет типографику, графику и геометрию страницы.',
          'Параметры безопасности – Поддерживает шифрование, цифровые подписи и разрешения.',
          'Интерактивные элементы – Встраивайте ссылки, формы, мультимедиа и аннотации.',
          'Сжатие – Эффективно храните сложные документы с изображениями и векторной графикой.',
          'Архивная совместимость – PDF/A обеспечивает долгосрочное сохранение записей.'
        ],
        use_cases_title: 'Лучшие Варианты Использования',
        use_cases: [
          'Деловые документы – Отчеты, счета, контракты и предложения.',
          'Образование – Учебники, конспекты лекций и исследовательские работы.',
          'Творческая работа – Портфолио, брошюры и маркетинговые материалы.',
          'Правительство – Официальные формы, публичные записи и материалы соответствия.',
          'Технические руководства – Инженерные документы, спецификации и SOP.',
          'Издательство – Электронные книги, журналы и печатные ресурсы.'
        ],
        specs_title: 'Технические Характеристики',
        specs_header_label: 'Характеристика',
        specs_header_value: 'Детали',
        specs: [
          { label: 'Расширение Файла', value: '.pdf' },
          { label: 'Тип MIME', value: 'application/pdf' },
          { label: 'Стандарт', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Сжатие', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2 и т.д.' },
          { label: 'Интерактивные Функции', value: 'Формы, аннотации, слои, мультимедиа, JavaScript' },
          { label: 'Разработано', value: 'Adobe Systems (1993), теперь поддерживается ISO' }
        ],
        seo_title: 'Почему Выбрать Наш PDF Просмотрщик?',
        seo_intro: 'Наш PDF просмотрщик обеспечивает плавный опыт просмотра и управления PDF документами прямо в вашем браузере.',
        seo_viewing_title: 'Профессиональный Просмотр Документов',
        seo_viewing_text: 'Просматривайте PDF документы с высококачественным рендерингом, элементами управления масштабом и инструментами навигации.',
        seo_features_title: 'Расширенные Функции',
        seo_features_text: 'Получите доступ к мощным функциям просмотра PDF, включая поиск, масштабирование и навигацию по страницам.',
        seo_security_title: 'Безопасно и Приватно',
        seo_security_text: 'Ваши PDF файлы обрабатываются безопасно и никогда не хранятся на наших серверах.',
        alerts: {
          file_too_large: 'Файл слишком большой для предпросмотра ({{size}} МБ). Максимальный размер {{max}} МБ. Пожалуйста, скачайте файл вместо этого.',
          popup_blocked: 'Пожалуйста, разрешите всплывающие окна для просмотра PDF файла.',
          preview_failed: 'Не удалось открыть предпросмотр PDF. Пожалуйста, попробуйте снова или скачайте файл.'
        },
        loading_window: {
          title: 'Загрузка PDF...',
          message: 'Рендеринг {{filename}}...'
        },
        error_window: {
          title: 'Ошибка Предпросмотра',
          message: 'Не удалось создать предпросмотр PDF. Пожалуйста, попробуйте скачать файл вместо этого.',
          close: 'Закрыть'
        },
        editor: {
          toggle_sidebar: 'Переключить Боковую Панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть Боковую Панель',
          search_placeholder: 'Поиск файлов...',
          files_header: 'Файлы',
          add_files: '+ Добавить',
          format_badge: 'PDF',
          present: 'Презентовать',
          exit_presentation: 'Выход',
          start_presentation: 'Начать Презентацию (Пробел/Стрелки для навигации)',
          print_pdf: 'Печать PDF',
          download_pdf: 'Скачать PDF',
          previous: 'Предыдущий (←)',
          next: 'Следующий (→)',
          zoom_out: 'Уменьшить (-)',
          zoom_in: 'Увеличить (+)',
          reset_zoom: 'Нажмите, чтобы сбросить масштаб',
          rotate: 'Повернуть (R)',
          fullscreen: 'Полный Экран (F)'
        }
      }
    }
  },
  ar: {
    viewers: {
      pdf: {
        meta_title: 'عارض PDF مجاني - عرض مستندات PDF عبر الإنترنت',
        meta_description: 'عارض PDF احترافي مجاني مع عرض عالي الجودة، صور مصغرة للصفحات، عناصر تحكم التكبير والبحث في النص. ارفع واعرض PDF فوراً. دفعة تصل إلى 20 مستنداً. أداة عارض PDF مجانية 100%.',
        meta_keywords: 'عارض pdf، عرض pdf عبر الإنترنت، معاينة pdf، قارئ pdf، عارض المستندات، عارض pdf مجاني',
        hero_title: 'عارض PDF مجاني',
        hero_subtitle: 'اقرأ وابحث وتنقل في مستندات PDF مباشرة في متصفحك – 100% مجاني',
        upload_title: 'رفع مستندات PDF',
        upload_description: 'اسحب وأفلت ملفات PDF الخاصة بك أو انقر للتصفح. يدعم ملفات PDF حتى 100 ميجابايت لكل ملف، مع رفع دفعة تصل إلى 20 مستنداً.',
        upload: {
          drag_drop_text: 'اسحب وأفلت ملفاتك هنا',
          click_browse_text: 'أو انقر على الزر أدناه للتصفح',
          choose_files_button: 'اختر الملفات',
          max_files_info: 'الحد الأقصى {maxFiles} ملف • حتى {maxSize} إجمالي'
        },
        buttons: {
          view_files: 'عرض الملفات',
          view: 'عرض PDF',
          download: 'تحميل',
          back: 'العودة إلى جميع العارضين'
        },
        quick_stats: {
          universal_format: '✓ تنسيق عالمي',
          fast_processing: '⚡ معالجة سريعة',
          high_quality: '🎨 جودة عالية'
        },
        features: [
          { title: 'عرض عالي الجودة', description: 'استمتع بعرض متجهي حاد، نص قابل للتحديد وخطوط دقيقة لكل صفحة PDF.' },
          { title: 'التنقل والبحث', description: 'استخدم الصور المصغرة، تنقل المخطط والبحث في النص للانتقال بالضبط إلى حيث تحتاج.' },
          { title: 'أدوات الإنتاجية', description: 'تكبير، تدوير، تبديل تخطيطات الصفحات وتبديل الوضع الداكن للقراءة المريحة.' }
        ],
        about_title: 'حول تنسيق PDF',
        about_intro: 'PDF (Portable Document Format) هو المعيار الصناعي لمستندات التخطيط الثابت. يحافظ على الخطوط والصور والتخطيط عبر الأجهزة، مما يجعله مثالياً للتوزيع والأرشفة.',
        advantages_title: 'المزايا الرئيسية',
        advantages: [
          'التوافق العالمي – يفتح على كل جهاز ونظام تشغيل.',
          'تخطيط ثابت – يحافظ على الطباعة والرسومات وهندسة الصفحة.',
          'خيارات الأمان – يدعم التشفير والتوقيعات الرقمية والأذونات.',
          'العناصر التفاعلية – تضمين الروابط والنماذج والوسائط المتعددة والتعليقات التوضيحية.',
          'الضغط – تخزين المستندات المعقدة مع الصور والفن المتجه بكفاءة.',
          'صديق للأرشيف – PDF/A يضمن الحفظ طويل الأمد للسجلات.'
        ],
        use_cases_title: 'أفضل حالات الاستخدام',
        use_cases: [
          'المستندات التجارية – التقارير والفواتير والعقود والاقتراحات.',
          'التعليم – الكتب المدرسية وملاحظات المحاضرات وأوراق البحث.',
          'العمل الإبداعي – المحافظ والكتيبات ومواد التسويق.',
          'الحكومة – النماذج الرسمية والسجلات العامة ومواد الامتثال.',
          'الدلائل التقنية – مستندات الهندسة والمواصفات وSOP.',
          'النشر – الكتب الإلكترونية والمجلات والأصول القابلة للطباعة.'
        ],
        specs_title: 'المواصفات التقنية',
        specs_header_label: 'المواصفة',
        specs_header_value: 'التفاصيل',
        specs: [
          { label: 'امتداد الملف', value: '.pdf' },
          { label: 'نوع MIME', value: 'application/pdf' },
          { label: 'المعيار', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'الضغط', value: 'JPEG، JPEG2000، CCITT، Flate، JBIG2، إلخ.' },
          { label: 'الميزات التفاعلية', value: 'النماذج والتعليقات التوضيحية والطبقات والوسائط المتعددة وJavaScript' },
          { label: 'تم التطوير بواسطة', value: 'Adobe Systems (1993)، الآن محفوظ بواسطة ISO' }
        ],
        seo_title: 'لماذا تختار عارض PDF الخاص بنا؟',
        seo_intro: 'يوفر عارض PDF الخاص بنا تجربة سلسة لعرض وإدارة مستندات PDF مباشرة في متصفحك.',
        seo_viewing_title: 'عرض المستندات الاحترافي',
        seo_viewing_text: 'اعرض مستندات PDF مع عرض عالي الجودة وعناصر تحكم التكبير وأدوات التنقل.',
        seo_features_title: 'الميزات المتقدمة',
        seo_features_text: 'الوصول إلى ميزات عرض PDF القوية بما في ذلك البحث والتكبير وتنقل الصفحات.',
        seo_security_title: 'آمن وخاص',
        seo_security_text: 'يتم معالجة ملفات PDF الخاصة بك بأمان ولا يتم تخزينها أبداً على خوادمنا.',
        alerts: {
          file_too_large: 'الملف كبير جداً للمعاينة ({{size}} ميجابايت). الحجم الأقصى هو {{max}} ميجابايت. يرجى تحميل الملف بدلاً من ذلك.',
          popup_blocked: 'يرجى السماح بالنوافذ المنبثقة لعرض ملف PDF.',
          preview_failed: 'فشل في فتح معاينة PDF. يرجى المحاولة مرة أخرى أو تحميل الملف.'
        },
        loading_window: {
          title: 'جارٍ تحميل PDF...',
          message: 'جارٍ عرض {{filename}}...'
        },
        error_window: {
          title: 'خطأ المعاينة',
          message: 'فشل في إنشاء معاينة PDF. يرجى محاولة تحميل الملف بدلاً من ذلك.',
          close: 'إغلاق'
        },
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          files_header: 'الملفات',
          add_files: '+ إضافة',
          format_badge: 'PDF',
          present: 'عرض',
          exit_presentation: 'خروج',
          start_presentation: 'بدء العرض (المسافة/الأسهم للتنقل)',
          print_pdf: 'طباعة PDF',
          download_pdf: 'تحميل PDF',
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
      pdf: {
        meta_title: 'โปรแกรมดู PDF ฟรี - ดูเอกสาร PDF ออนไลน์',
        meta_description: 'โปรแกรมดู PDF ระดับมืออาชีพฟรีพร้อมการแสดงผลคุณภาพสูง ภาพย่อหน้า การควบคุมซูมและการค้นหาข้อความ อัปโหลดและดูตัวอย่าง PDF ทันที แบบกลุ่มสูงสุด 20 เอกสาร เครื่องมือดู PDF ฟรี 100%',
        meta_keywords: 'โปรแกรมดู pdf, ดู pdf ออนไลน์, ตัวอย่าง pdf, อ่าน pdf, โปรแกรมดูเอกสาร, โปรแกรมดู pdf ฟรี',
        hero_title: 'โปรแกรมดู PDF ฟรี',
        hero_subtitle: 'อ่าน ค้นหาและนำทางเอกสาร PDF โดยตรงในเบราว์เซอร์ของคุณ – 100% ฟรี',
        upload_title: 'อัปโหลดเอกสาร PDF',
        upload_description: 'ลากและวางไฟล์ PDF ของคุณหรือคลิกเพื่อเรียกดู รองรับ PDF สูงสุด 100MB ต่อไฟล์ พร้อมการอัปโหลดแบบกลุ่มสูงสุด 20 เอกสาร',
        upload: {
          drag_drop_text: 'ลากและวางไฟล์ของคุณที่นี่',
          click_browse_text: 'หรือคลิกปุ่มด้านล่างเพื่อเรียกดู',
          choose_files_button: 'เลือกไฟล์',
          max_files_info: 'สูงสุด {maxFiles} ไฟล์ • สูงสุด {maxSize} รวม'
        },
        buttons: {
          view_files: 'ดูไฟล์',
          view: 'ดู PDF',
          download: 'ดาวน์โหลด',
          back: 'กลับไปที่โปรแกรมดูทั้งหมด'
        },
        quick_stats: {
          universal_format: '✓ รูปแบบสากล',
          fast_processing: '⚡ ประมวลผลเร็ว',
          high_quality: '🎨 คุณภาพสูง'
        },
        features: [
          { title: 'การแสดงผลคุณภาพสูง', description: 'สัมผัสการแสดงผลเวกเตอร์ที่คมชัด ข้อความที่เลือกได้และแบบอักษรที่แม่นยำสำหรับทุกหน้า PDF' },
          { title: 'การนำทางและการค้นหา', description: 'ใช้ภาพย่อ การนำทางโครงร่างและการค้นหาข้อความเพื่อข้ามไปยังตำแหน่งที่คุณต้องการ' },
          { title: 'เครื่องมือเพิ่มประสิทธิภาพ', description: 'ซูม หมุน สลับเค้าโครงหน้าและสลับโหมดมืดเพื่อการอ่านที่สะดวกสบาย' }
        ],
        about_title: 'เกี่ยวกับรูปแบบ PDF',
        about_intro: 'PDF (Portable Document Format) เป็นมาตรฐานอุตสาหกรรมสำหรับเอกสารเค้าโครงคงที่ มันรักษาแบบอักษร รูปภาพและเค้าโครงบนอุปกรณ์ทั้งหมด ทำให้เหมาะสำหรับการจัดจำหน่ายและการเก็บถาวร',
        advantages_title: 'ข้อดีหลัก',
        advantages: [
          'ความเข้ากันได้สากล – เปิดได้บนอุปกรณ์และระบบปฏิบัติการทุกเครื่อง',
          'เค้าโครงคงที่ – รักษาการพิมพ์ กราฟิกและเรขาคณิตหน้า',
          'ตัวเลือกความปลอดภัย – รองรับการเข้ารหัส ลายเซ็นดิจิทัลและการอนุญาต',
          'องค์ประกอบแบบโต้ตอบ – ฝังลิงก์ ฟอร์ม มัลติมีเดียและคำอธิบายประกอบ',
          'การบีบอัด – เก็บเอกสารที่ซับซ้อนพร้อมรูปภาพและงานศิลปะเวกเตอร์อย่างมีประสิทธิภาพ',
          'เหมาะสำหรับการเก็บถาวร – PDF/A รับประกันการเก็บรักษาระยะยาวสำหรับบันทึก'
        ],
        use_cases_title: 'กรณีการใช้งานที่ดีที่สุด',
        use_cases: [
          'เอกสารทางธุรกิจ – รายงาน ใบแจ้งหนี้ สัญญาและข้อเสนอ',
          'การศึกษา – หนังสือเรียน บันทึกการบรรยายและเอกสารการวิจัย',
          'งานสร้างสรรค์ – พอร์ตโฟลิโอ โบรชัวร์และสื่อการตลาด',
          'รัฐบาล – แบบฟอร์มอย่างเป็นทางการ บันทึกสาธารณะและวัสดุการปฏิบัติตาม',
          'คู่มือทางเทคนิค – เอกสารวิศวกรรม ข้อกำหนดและ SOP',
          'การเผยแพร่ – หนังสืออิเล็กทรอนิกส์ นิตยสารและสินทรัพย์ที่พิมพ์ได้'
        ],
        specs_title: 'ข้อมูลจำเพาะทางเทคนิค',
        specs_header_label: 'ข้อมูลจำเพาะ',
        specs_header_value: 'รายละเอียด',
        specs: [
          { label: 'นามสกุลไฟล์', value: '.pdf' },
          { label: 'ประเภท MIME', value: 'application/pdf' },
          { label: 'มาตรฐาน', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'การบีบอัด', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2 ฯลฯ' },
          { label: 'คุณสมบัติแบบโต้ตอบ', value: 'ฟอร์ม คำอธิบายประกอบ เลเยอร์ มัลติมีเดีย JavaScript' },
          { label: 'พัฒนาโดย', value: 'Adobe Systems (1993), ตอนนี้ดูแลโดย ISO' }
        ],
        seo_title: 'ทำไมต้องเลือกโปรแกรมดู PDF ของเรา?',
        seo_intro: 'โปรแกรมดู PDF ของเรามีประสบการณ์ที่ราบรื่นสำหรับการดู和管理เอกสาร PDF โดยตรงในเบราว์เซอร์ของคุณ',
        seo_viewing_title: 'การดูเอกสารระดับมืออาชีพ',
        seo_viewing_text: 'ดูเอกสาร PDF ด้วยการแสดงผลคุณภาพสูง การควบคุมซูมและเครื่องมือนำทาง',
        seo_features_title: 'คุณสมบัติขั้นสูง',
        seo_features_text: 'เข้าถึงคุณสมบัติการดู PDF ที่ทรงพลังรวมถึงการค้นหา ซูมและการนำทางหน้า',
        seo_security_title: 'ปลอดภัยและเป็นส่วนตัว',
        seo_security_text: 'ไฟล์ PDF ของคุณได้รับการประมวลผลอย่างปลอดภัยและไม่เคยถูกเก็บไว้บนเซิร์ฟเวอร์ของเรา',
        alerts: {
          file_too_large: 'ไฟล์ใหญ่เกินไปสำหรับตัวอย่าง ({{size}} MB) ขนาดสูงสุดคือ {{max}} MB กรุณาดาวน์โหลดไฟล์แทน',
          popup_blocked: 'กรุณาอนุญาตป๊อปอัปเพื่อดูไฟล์ PDF',
          preview_failed: 'ไม่สามารถเปิดตัวอย่าง PDF ได้ กรุณาลองอีกครั้งหรือดาวน์โหลดไฟล์'
        },
        loading_window: {
          title: 'กำลังโหลด PDF...',
          message: 'กำลังแสดงผล {{filename}}...'
        },
        error_window: {
          title: 'ข้อผิดพลาดตัวอย่าง',
          message: 'ไม่สามารถสร้างตัวอย่าง PDF ได้ กรุณาลองดาวน์โหลดไฟล์แทน',
          close: 'ปิด'
        },
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          files_header: 'ไฟล์',
          add_files: '+ เพิ่ม',
          format_badge: 'PDF',
          present: 'นำเสนอ',
          exit_presentation: 'ออก',
          start_presentation: 'เริ่มการนำเสนอ (Space/ลูกศรเพื่อนำทาง)',
          print_pdf: 'พิมพ์ PDF',
          download_pdf: 'ดาวน์โหลด PDF',
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
      pdf: {
        meta_title: '無料PDFビューアー - PDF文書をオンラインで表示',
        meta_description: '高品質レンダリング、ページサムネイル、ズームコントロール、テキスト検索機能を備えた無料のプロフェッショナルPDFビューアー。PDFを即座にアップロードしてプレビュー。最大20文書のバッチ処理。100%無料のPDFビューアーツール。',
        meta_keywords: 'pdfビューアー, pdfオンライン表示, pdfプレビュー, pdfリーダー, 文書ビューアー, 無料pdfビューアー',
        hero_title: '無料PDFビューアー',
        hero_subtitle: 'ブラウザで直接PDF文書を読み、検索し、ナビゲート – 100%無料',
        upload_title: 'PDF文書をアップロード',
        upload_description: 'PDFファイルをドラッグ&ドロップするか、クリックして閲覧します。各ファイル最大100MBのPDFをサポート、最大20文書のバッチアップロード。',
        upload: {
          drag_drop_text: 'ファイルをここにドラッグ&ドロップ',
          click_browse_text: 'または下のボタンをクリックして閲覧',
          choose_files_button: 'ファイルを選択',
          max_files_info: '最大 {maxFiles} ファイル • 合計 {maxSize} まで'
        },
        buttons: {
          view_files: 'ファイルを表示',
          view: 'PDFを表示',
          download: 'ダウンロード',
          back: 'すべてのビューアーに戻る'
        },
        quick_stats: {
          universal_format: '✓ ユニバーサルフォーマット',
          fast_processing: '⚡ 高速処理',
          high_quality: '🎨 高品質'
        },
        features: [
          { title: '高品質レンダリング', description: '各PDFページで鮮明なベクターレンダリング、選択可能なテキスト、正確なフォントを体験できます。' },
          { title: 'ナビゲーションと検索', description: 'サムネイル、アウトラインナビゲーション、テキスト検索を使用して、必要な場所に正確にジャンプします。' },
          { title: '生産性ツール', description: 'ズーム、回転、ページレイアウトの切り替え、快適な読書のためのダークモードの切り替え。' }
        ],
        about_title: 'PDFフォーマットについて',
        about_intro: 'PDF（Portable Document Format）は、固定レイアウト文書の業界標準です。すべてのデバイスでフォント、画像、レイアウトを保持するため、配布とアーカイブに最適です。',
        advantages_title: '主な利点',
        advantages: [
          'ユニバーサル互換性 – あらゆるデバイスとオペレーティングシステムで開きます。',
          '固定レイアウト – タイポグラフィ、グラフィック、ページジオメトリを保持します。',
          'セキュリティオプション – 暗号化、デジタル署名、権限をサポートします。',
          'インタラクティブ要素 – リンク、フォーム、マルチメディア、注釈を埋め込みます。',
          '圧縮 – 画像とベクターアートを含む複雑な文書を効率的に保存します。',
          'アーカイブフレンドリー – PDF/Aは記録の長期保存を保証します。'
        ],
        use_cases_title: '最適な使用例',
        use_cases: [
          'ビジネス文書 – レポート、請求書、契約書、提案書。',
          '教育 – 教科書、講義ノート、研究論文。',
          'クリエイティブ作品 – ポートフォリオ、パンフレット、マーケティング資料。',
          '政府 – 公式フォーム、公開記録、コンプライアンス資料。',
          '技術マニュアル – エンジニアリング文書、仕様、SOP。',
          '出版 – 電子書籍、雑誌、印刷可能なアセット。'
        ],
        specs_title: '技術仕様',
        specs_header_label: '仕様',
        specs_header_value: '詳細',
        specs: [
          { label: 'ファイル拡張子', value: '.pdf' },
          { label: 'MIMEタイプ', value: 'application/pdf' },
          { label: '標準', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: '圧縮', value: 'JPEG、JPEG2000、CCITT、Flate、JBIG2など' },
          { label: 'インタラクティブ機能', value: 'フォーム、注釈、レイヤー、マルチメディア、JavaScript' },
          { label: '開発元', value: 'Adobe Systems (1993)、現在はISOが維持' }
        ],
        seo_title: 'なぜ当社のPDFビューアーを選ぶのか？',
        seo_intro: '当社のPDFビューアーは、ブラウザで直接PDF文書を表示および管理するためのシームレスな体験を提供します。',
        seo_viewing_title: 'プロフェッショナルな文書表示',
        seo_viewing_text: '高品質レンダリング、ズームコントロール、ナビゲーションツールでPDF文書を表示します。',
        seo_features_title: '高度な機能',
        seo_features_text: '検索、ズーム、ページナビゲーションを含む強力なPDF表示機能にアクセスします。',
        seo_security_title: '安全でプライベート',
        seo_security_text: 'PDFファイルは安全に処理され、当社のサーバーに保存されることはありません。',
        alerts: {
          file_too_large: 'プレビューにはファイルが大きすぎます（{{size}} MB）。最大サイズは{{max}} MBです。代わりにファイルをダウンロードしてください。',
          popup_blocked: 'PDFファイルを表示するには、ポップアップを許可してください。',
          preview_failed: 'PDFプレビューを開けませんでした。もう一度お試しいただくか、ファイルをダウンロードしてください。'
        },
        loading_window: {
          title: 'PDFを読み込み中...',
          message: '{{filename}}をレンダリング中...'
        },
        error_window: {
          title: 'プレビューエラー',
          message: 'PDFプレビューを生成できませんでした。代わりにファイルをダウンロードしてください。',
          close: '閉じる'
        },
        editor: {
          toggle_sidebar: 'サイドバーを切り替え',
          close: '閉じる (Esc)',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          files_header: 'ファイル',
          add_files: '+ 追加',
          format_badge: 'PDF',
          present: 'プレゼン',
          exit_presentation: '終了',
          start_presentation: 'プレゼンテーション開始 (スペース/矢印でナビゲート)',
          print_pdf: 'PDFを印刷',
          download_pdf: 'PDFをダウンロード',
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
      pdf: {
        meta_title: '免费PDF查看器 - 在线查看PDF文档',
        meta_description: '免费专业PDF查看器，具有高质量渲染、页面缩略图、缩放控件和文本搜索功能。立即上传和预览PDF。批量处理最多20个文档。100%免费PDF查看器工具。',
        meta_keywords: 'pdf查看器, 在线查看pdf, pdf预览, pdf阅读器, 文档查看器, 免费pdf查看器',
        hero_title: '免费PDF查看器',
        hero_subtitle: '直接在浏览器中阅读、搜索和导航PDF文档 – 100%免费',
        upload_title: '上传PDF文档',
        upload_description: '拖放您的PDF文件或点击浏览。支持每个文件最大100MB的PDF，批量上传最多20个文档。',
        upload: {
          drag_drop_text: '在此拖放您的文件',
          click_browse_text: '或点击下面的按钮浏览',
          choose_files_button: '选择文件',
          max_files_info: '最多 {maxFiles} 个文件 • 总计 {maxSize}'
        },
        buttons: {
          view_files: '查看文件',
          view: '查看PDF',
          download: '下载',
          back: '返回所有查看器'
        },
        quick_stats: {
          universal_format: '✓ 通用格式',
          fast_processing: '⚡ 快速处理',
          high_quality: '🎨 高质量'
        },
        features: [
          { title: '高质量渲染', description: '体验清晰的矢量渲染、可选文本和精确字体，适用于每个PDF页面。' },
          { title: '导航和搜索', description: '使用缩略图、大纲导航和文本搜索，精确跳转到您需要的位置。' },
          { title: '生产力工具', description: '缩放、旋转、切换页面布局和切换暗色模式，实现舒适阅读。' }
        ],
        about_title: '关于PDF格式',
        about_intro: 'PDF（便携式文档格式）是固定布局文档的行业标准。它在所有设备上保留字体、图像和布局，使其成为分发和归档的理想选择。',
        advantages_title: '主要优势',
        advantages: [
          '通用兼容性 – 可在任何设备和操作系统上打开。',
          '固定布局 – 保留排版、图形和页面几何形状。',
          '安全选项 – 支持加密、数字签名和权限。',
          '交互元素 – 嵌入链接、表单、多媒体和注释。',
          '压缩 – 高效存储包含图像和矢量图形的复杂文档。',
          '归档友好 – PDF/A确保记录的长期保存。'
        ],
        use_cases_title: '最佳用例',
        use_cases: [
          '商业文档 – 报告、发票、合同和提案。',
          '教育 – 教科书、课堂笔记和研究论文。',
          '创意作品 – 作品集、宣传册和营销材料。',
          '政府 – 官方表格、公共记录和合规材料。',
          '技术手册 – 工程文档、规格和SOP。',
          '出版 – 电子书、杂志和可打印资源。'
        ],
        specs_title: '技术规格',
        specs_header_label: '规格',
        specs_header_value: '详细信息',
        specs: [
          { label: '文件扩展名', value: '.pdf' },
          { label: 'MIME类型', value: 'application/pdf' },
          { label: '标准', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: '压缩', value: 'JPEG、JPEG2000、CCITT、Flate、JBIG2等' },
          { label: '交互功能', value: '表单、注释、图层、多媒体、JavaScript' },
          { label: '开发方', value: 'Adobe Systems (1993)，现由ISO维护' }
        ],
        seo_title: '为什么选择我们的PDF查看器？',
        seo_intro: '我们的PDF查看器提供无缝体验，可直接在浏览器中查看和管理PDF文档。',
        seo_viewing_title: '专业文档查看',
        seo_viewing_text: '使用高质量渲染、缩放控件和导航工具查看PDF文档。',
        seo_features_title: '高级功能',
        seo_features_text: '访问强大的PDF查看功能，包括搜索、缩放和页面导航。',
        seo_security_title: '安全私密',
        seo_security_text: '您的PDF文件经过安全处理，永远不会存储在我们的服务器上。',
        alerts: {
          file_too_large: '文件太大无法预览（{{size}} MB）。最大大小为{{max}} MB。请改为下载文件。',
          popup_blocked: '请允许弹出窗口以查看PDF文件。',
          preview_failed: '无法打开PDF预览。请重试或下载文件。'
        },
        loading_window: {
          title: '正在加载PDF...',
          message: '正在渲染 {{filename}}...'
        },
        error_window: {
          title: '预览错误',
          message: '无法生成PDF预览。请改为尝试下载文件。',
          close: '关闭'
        },
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭 (Esc)',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          files_header: '文件',
          add_files: '+ 添加',
          format_badge: 'PDF',
          present: '演示',
          exit_presentation: '退出',
          start_presentation: '开始演示 (空格/箭头键导航)',
          print_pdf: '打印PDF',
          download_pdf: '下载PDF',
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
      pdf: {
        meta_title: 'Penampil PDF Gratis - Lihat Dokumen PDF Online',
        meta_description: 'Penampil PDF profesional gratis dengan rendering berkualitas tinggi, thumbnail halaman, kontrol zoom dan pencarian teks. Unggah dan pratinjau PDF secara instan. Batch hingga 20 dokumen. 100% alat penampil PDF gratis.',
        meta_keywords: 'penampil pdf, lihat pdf online, pratinjau pdf, pembaca pdf, penampil dokumen, penampil pdf gratis',
        hero_title: 'Penampil PDF Gratis',
        hero_subtitle: 'Baca, cari dan navigasi dokumen PDF langsung di browser Anda – 100% gratis',
        upload_title: 'Unggah Dokumen PDF',
        upload_description: 'Seret dan lepas file PDF Anda atau klik untuk menjelajahi. Mendukung PDF hingga 100MB per file, dengan unggah batch hingga 20 dokumen.',
        upload: {
          drag_drop_text: 'Seret dan Lepas File Anda Di Sini',
          click_browse_text: 'atau klik tombol di bawah untuk menjelajahi',
          choose_files_button: 'Pilih File',
          max_files_info: 'Maks. {maxFiles} file • Hingga {maxSize} Total'
        },
        buttons: {
          view_files: 'Lihat File',
          view: 'Lihat PDF',
          download: 'Unduh',
          back: 'Kembali ke Semua Penampil'
        },
        quick_stats: {
          universal_format: '✓ Format Universal',
          fast_processing: '⚡ Pemrosesan Cepat',
          high_quality: '🎨 Kualitas Tinggi'
        },
        features: [
          { title: 'Rendering Berkualitas Tinggi', description: 'Nikmati rendering vektor yang tajam, teks yang dapat dipilih dan font yang akurat untuk setiap halaman PDF.' },
          { title: 'Navigasi & Pencarian', description: 'Gunakan thumbnail, navigasi outline dan pencarian teks untuk melompat tepat ke tempat yang Anda butuhkan.' },
          { title: 'Alat Produktivitas', description: 'Zoom, putar, alihkan tata letak halaman dan alihkan mode gelap untuk membaca yang nyaman.' }
        ],
        about_title: 'Tentang Format PDF',
        about_intro: 'PDF (Portable Document Format) adalah standar industri untuk dokumen tata letak tetap. Ini mempertahankan font, gambar dan tata letak di semua perangkat, menjadikannya ideal untuk distribusi dan pengarsipan.',
        advantages_title: 'Keuntungan Utama',
        advantages: [
          'Kompatibilitas universal – Membuka di setiap perangkat dan sistem operasi.',
          'Tata letak tetap – Mempertahankan tipografi, grafik dan geometri halaman.',
          'Opsi keamanan – Mendukung enkripsi, tanda tangan digital dan izin.',
          'Elemen interaktif – Sematkan tautan, formulir, multimedia dan anotasi.',
          'Kompresi – Simpan dokumen kompleks dengan gambar dan seni vektor secara efisien.',
          'Ramah arsip – PDF/A memastikan pelestarian jangka panjang untuk catatan.'
        ],
        use_cases_title: 'Kasus Penggunaan Terbaik',
        use_cases: [
          'Dokumen bisnis – Laporan, faktur, kontrak dan proposal.',
          'Pendidikan – Buku teks, catatan kuliah dan makalah penelitian.',
          'Pekerjaan kreatif – Portofolio, brosur dan materi pemasaran.',
          'Pemerintah – Formulir resmi, catatan publik dan materi kepatuhan.',
          'Manual teknis – Dokumen teknik, spesifikasi dan SOP.',
          'Penerbitan – eBook, majalah dan aset yang dapat dicetak.'
        ],
        specs_title: 'Spesifikasi Teknis',
        specs_header_label: 'Spesifikasi',
        specs_header_value: 'Detail',
        specs: [
          { label: 'Ekstensi File', value: '.pdf' },
          { label: 'Tipe MIME', value: 'application/pdf' },
          { label: 'Standar', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Kompresi', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2, dll.' },
          { label: 'Fitur Interaktif', value: 'Formulir, anotasi, lapisan, multimedia, JavaScript' },
          { label: 'Dikembangkan Oleh', value: 'Adobe Systems (1993), sekarang dipelihara oleh ISO' }
        ],
        seo_title: 'Mengapa Memilih Penampil PDF Kami?',
        seo_intro: 'Penampil PDF kami memberikan pengalaman mulus untuk melihat dan mengelola dokumen PDF langsung di browser Anda.',
        seo_viewing_title: 'Tampilan Dokumen Profesional',
        seo_viewing_text: 'Lihat dokumen PDF dengan rendering berkualitas tinggi, kontrol zoom dan alat navigasi.',
        seo_features_title: 'Fitur Lanjutan',
        seo_features_text: 'Akses fitur tampilan PDF yang kuat termasuk pencarian, zoom dan navigasi halaman.',
        seo_security_title: 'Aman & Pribadi',
        seo_security_text: 'File PDF Anda diproses dengan aman dan tidak pernah disimpan di server kami.',
        alerts: {
          file_too_large: 'File terlalu besar untuk pratinjau ({{size}} MB). Ukuran maksimum adalah {{max}} MB. Silakan unduh file sebagai gantinya.',
          popup_blocked: 'Silakan izinkan pop-up untuk melihat file PDF.',
          preview_failed: 'Gagal membuka pratinjau PDF. Silakan coba lagi atau unduh file.'
        },
        loading_window: {
          title: 'Memuat PDF...',
          message: 'Merender {{filename}}...'
        },
        error_window: {
          title: 'Kesalahan Pratinjau',
          message: 'Gagal menghasilkan pratinjau PDF. Silakan coba unduh file sebagai gantinya.',
          close: 'Tutup'
        },
        editor: {
          toggle_sidebar: 'Alihkan Sidebar',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup Sidebar',
          search_placeholder: 'Cari file...',
          files_header: 'File',
          add_files: '+ Tambah',
          format_badge: 'PDF',
          present: 'Presentasikan',
          exit_presentation: 'Keluar',
          start_presentation: 'Mulai Presentasi (Spasi/Panah untuk navigasi)',
          print_pdf: 'Cetak PDF',
          download_pdf: 'Unduh PDF',
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
      pdf: {
        meta_title: 'Gratis PDF-visare - Visa PDF-dokument Online',
        meta_description: 'Gratis professionell PDF-visare med högkvalitativ rendering, sidminiatyrer, zoomkontroller och textsökning. Ladda upp och förhandsgranska PDF:er direkt. Batch upp till 20 dokument. 100% gratis PDF-visarverktyg.',
        meta_keywords: 'pdf-visare, visa pdf online, pdf-förhandsvisning, pdf-läsare, dokumentvisare, gratis pdf-visare',
        hero_title: 'Gratis PDF-visare',
        hero_subtitle: 'Läs, sök och navigera PDF-dokument direkt i din webbläsare – 100% gratis',
        upload_title: 'Ladda Upp PDF-dokument',
        upload_description: 'Dra och släpp dina PDF-filer eller klicka för att bläddra. Stöder PDF:er upp till 100MB vardera, med batchuppladdning upp till 20 dokument.',
        upload: {
          drag_drop_text: 'Dra och Släpp Dina Filer Här',
          click_browse_text: 'eller klicka på knappen nedan för att bläddra',
          choose_files_button: 'Välj Filer',
          max_files_info: 'Max {maxFiles} filer • Upp till {maxSize} Totalt'
        },
        buttons: {
          view_files: 'Visa Filer',
          view: 'Visa PDF',
          download: 'Ladda Ner',
          back: 'Tillbaka till Alla Visare'
        },
        quick_stats: {
          universal_format: '✓ Universellt Format',
          fast_processing: '⚡ Snabb Bearbetning',
          high_quality: '🎨 Hög Kvalitet'
        },
        features: [
          { title: 'Högkvalitativ Rendering', description: 'Upplev skarp vektorrendering, valbar text och exakta typsnitt för varje PDF-sida.' },
          { title: 'Navigering & Sökning', description: 'Använd miniatyrer, konturnavigering och textsökning för att hoppa exakt dit du behöver.' },
          { title: 'Produktivitetsverktyg', description: 'Zooma, rotera, växla sidlayouter och växla mörkt läge för bekväm läsning.' }
        ],
        about_title: 'Om PDF-format',
        about_intro: 'PDF (Portable Document Format) är branschstandarden för dokument med fast layout. Den bevarar typsnitt, bilder och layout på alla enheter, vilket gör den idealisk för distribution och arkivering.',
        advantages_title: 'Viktiga Fördelar',
        advantages: [
          'Universell kompatibilitet – Öppnas på alla enheter och operativsystem.',
          'Fast layout – Bevarar typografi, grafik och sidgeometri.',
          'Säkerhetsalternativ – Stöder kryptering, digitala signaturer och behörigheter.',
          'Interaktiva element – Bädda in länkar, formulär, multimedia och anteckningar.',
          'Komprimering – Lagra komplexa dokument med bilder och vektorgrafik effektivt.',
          'Arkivvänlig – PDF/A säkerställer långsiktig bevarande av poster.'
        ],
        use_cases_title: 'Bästa Användningsfall',
        use_cases: [
          'Affärsdokument – Rapporter, fakturor, kontrakt och förslag.',
          'Utbildning – Läroböcker, föreläsningsanteckningar och forskningspapper.',
          'Kreativt arbete – Portföljer, broschyrer och marknadsföringsmaterial.',
          'Regering – Officiella formulär, offentliga register och efterlevnadsmaterial.',
          'Tekniska manualer – Ingenjörsdokument, specifikationer och SOP:er.',
          'Publicering – eBöcker, tidskrifter och utskrivbara tillgångar.'
        ],
        specs_title: 'Tekniska Specifikationer',
        specs_header_label: 'Specifikation',
        specs_header_value: 'Detaljer',
        specs: [
          { label: 'Filändelse', value: '.pdf' },
          { label: 'MIME-typ', value: 'application/pdf' },
          { label: 'Standard', value: 'ISO 32000-2 (PDF 2.0)' },
          { label: 'Komprimering', value: 'JPEG, JPEG2000, CCITT, Flate, JBIG2, etc.' },
          { label: 'Interaktiva Funktioner', value: 'Formulär, anteckningar, lager, multimedia, JavaScript' },
          { label: 'Utvecklad Av', value: 'Adobe Systems (1993), nu underhållen av ISO' }
        ],
        seo_title: 'Varför Välja Vår PDF-visare?',
        seo_intro: 'Vår PDF-visare ger en sömlös upplevelse för att visa och hantera PDF-dokument direkt i din webbläsare.',
        seo_viewing_title: 'Professionell Dokumentvisning',
        seo_viewing_text: 'Visa PDF-dokument med högkvalitativ rendering, zoomkontroller och navigeringsverktyg.',
        seo_features_title: 'Avancerade Funktioner',
        seo_features_text: 'Få tillgång till kraftfulla PDF-visningsfunktioner inklusive sökning, zoom och sidnavigering.',
        seo_security_title: 'Säker & Privat',
        seo_security_text: 'Dina PDF-filer bearbetas säkert och lagras aldrig på våra servrar.',
        alerts: {
          file_too_large: 'Filen är för stor för förhandsvisning ({{size}} MB). Maximal storlek är {{max}} MB. Ladda ner filen istället.',
          popup_blocked: 'Tillåt popup-fönster för att visa PDF-filen.',
          preview_failed: 'Kunde inte öppna PDF-förhandsvisning. Försök igen eller ladda ner filen.'
        },
        loading_window: {
          title: 'Laddar PDF...',
          message: 'Renderar {{filename}}...'
        },
        error_window: {
          title: 'Förhandsvisningsfel',
          message: 'Kunde inte generera PDF-förhandsvisning. Försök ladda ner filen istället.',
          close: 'Stäng'
        },
        editor: {
          toggle_sidebar: 'Växla Sidofält',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng Sidofält',
          search_placeholder: 'Sök filer...',
          files_header: 'Filer',
          add_files: '+ Lägg Till',
          format_badge: 'PDF',
          present: 'Presentera',
          exit_presentation: 'Avsluta',
          start_presentation: 'Starta Presentation (Mellanslag/Pilar för navigering)',
          print_pdf: 'Skriv Ut PDF',
          download_pdf: 'Ladda Ner PDF',
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
Object.keys(resources).forEach((lang) => {
  i18n.addResourceBundle(lang, 'translation', resources[lang], true, true);
});

export { resources };
export type { PDFViewerTranslations };

