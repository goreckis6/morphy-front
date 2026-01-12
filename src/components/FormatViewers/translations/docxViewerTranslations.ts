import i18n from '../../../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type DOCXViewerTranslations = {
  viewers: {
    docx: {
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
      editor: {
        toggle_sidebar: string;
        close: string;
        close_sidebar: string;
        search_placeholder: string;
        add_files: string;
        pages: string;
        close_pages_sidebar: string;
        page: string;
        show_pages: string;
        format_badge: string;
        previous_page: string;
        next_page: string;
        zoom_out: string;
        reset_zoom: string;
        zoom_in: string;
        start_presentation: string;
        exit_presentation: string;
        present: string;
        print_docx: string;
        download_docx: string;
        previous: string;
        next: string;
        files: string;
        files_header: string;
        no_files: string;
        add_files_prompt: string;
        no_preview: string;
      };
      loading_window: {
        title: string;
      };
    };
  };
};

const resources: Record<string, DOCXViewerTranslations> = {
  en: {
    viewers: {
      docx: {
        meta_title: 'Free DOCX Viewer - View Microsoft Word Documents Online',
        meta_description: 'Free professional DOCX viewer for Microsoft Word documents. Upload and preview DOCX, DOC, DOCM files online with advanced document viewing tools. Supports batch viewing up to 20 files. 100% free DOCX viewer tool.',
        meta_keywords: 'DOCX viewer, Word document viewer, Microsoft Word viewer, DOC viewer, document preview, online DOCX reader, DOCX viewer online, DOCX viewer free',
        hero_title: 'Free DOCX Viewer',
        hero_subtitle: 'View and analyze Microsoft Word documents directly in your browser – 100% free',
        upload_title: 'Upload DOCX Documents',
        upload_description: 'Drag and drop your DOCX files or click to browse. Supports DOCX, DOC, DOCM, DOTX, DOTM files up to 100MB each, with batch upload for up to 20 documents.',
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
          { title: 'Rich Formatting', description: 'Advanced typography, styles, themes, and layout options for professional document creation with full formatting control' },
          { title: 'Collaboration Tools', description: 'Track changes, comments, and version control support for seamless team collaboration and document review workflows' },
          { title: 'Cross-Platform Support', description: 'Compatible with Microsoft Word, Google Docs, LibreOffice, and other office suites across all operating systems' }
        ],
        about_title: 'About DOCX Format',
        about_intro: 'DOCX (Office Open XML Document) is the default file format for Microsoft Word documents since Word 2007. It\'s based on the Open XML standard and uses ZIP compression to reduce file size while maintaining rich formatting capabilities. DOCX files support advanced features like styles, themes, embedded objects, charts, tables, and complex formatting options.',
        advantages_title: 'Key Advantages',
        advantages: [
          'Smaller file sizes – ZIP compression reduces size by up to 75%',
          'Better recovery – Improved file corruption recovery',
          'Enhanced security – Built-in encryption and digital signatures',
          'Cross-platform – Compatible with multiple office suites',
          'Rich formatting – Advanced typography and layout options',
          'Collaboration – Track changes and comments support'
        ],
        use_cases_title: 'Best Use Cases',
        use_cases: [
          'Business documents – Reports, proposals, contracts',
          'Academic papers – Research papers, theses, publications',
          'Legal documents – Contracts, agreements, court documents',
          'Templates – Document templates and forms',
          'Collaboration – Multi-author document editing',
          'Publishing – Books, manuals, and documentation'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Specification',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extensions', value: '.docx, .doc, .docm, .dotx, .dotm' },
          { label: 'MIME Type', value: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
          { label: 'Standard', value: 'Office Open XML (OOXML) - ISO/IEC 29500' },
          { label: 'Developed By', value: 'Microsoft Corporation (2007)' },
          { label: 'Compression', value: 'ZIP-based compression' },
          { label: 'Character Encoding', value: 'UTF-8' }
        ],
        seo_title: 'Why Choose Our DOCX Viewer?',
        seo_intro: 'Our DOCX viewer provides a seamless experience for viewing and managing Word documents directly in your browser.',
        seo_viewing_title: 'Professional Document Viewing',
        seo_viewing_text: 'View DOCX documents with high-quality rendering, zoom controls, and navigation tools.',
        seo_features_title: 'Advanced Features',
        seo_features_text: 'Access powerful DOCX viewing features including search, zoom, and page navigation.',
        seo_security_title: 'Secure & Private',
        seo_security_text: 'Your DOCX files are processed securely and never stored on our servers.',
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          add_files: '+ Add Files',
          pages: 'Pages',
          close_pages_sidebar: 'Close Pages',
          page: 'Page',
          show_pages: 'Show Pages',
          format_badge: 'DOCX',
          previous_page: 'Previous Page (←)',
          next_page: 'Next Page (→)',
          zoom_out: 'Zoom Out (-)',
          reset_zoom: 'Click to reset zoom',
          zoom_in: 'Zoom In (+)',
          start_presentation: 'Start Presentation (Space/Arrows to navigate)',
          exit_presentation: 'Exit',
          present: 'Present',
          print_docx: 'Print DOCX',
          download_docx: 'Download DOCX',
          previous: 'Previous (←)',
          next: 'Next (→)',
          files: 'Files',
          files_header: 'Files',
          no_files: 'No files loaded',
          add_files_prompt: 'Use the sidebar to add DOCX files',
          no_preview: 'No preview available'
        },
        loading_window: {
          title: 'Loading DOCX...'
        }
      }
    }
  },
  pl: {
    viewers: {
      docx: {
        meta_title: 'Darmowy przeglądarka DOCX - Przeglądaj dokumenty Microsoft Word online',
        meta_description: 'Darmowa profesjonalna przeglądarka DOCX dla dokumentów Microsoft Word. Przesyłaj i przeglądaj pliki DOCX, DOC, DOCM online za pomocą zaawansowanych narzędzi do przeglądania dokumentów. Obsługuje przeglądanie wsadowe do 20 plików. 100% darmowe narzędzie przeglądarki DOCX.',
        meta_keywords: 'przeglądarka DOCX, przeglądarka dokumentów Word, przeglądarka Microsoft Word, przeglądarka DOC, podgląd dokumentów, czytnik DOCX online, przeglądarka DOCX online, darmowa przeglądarka DOCX',
        hero_title: 'Darmowa przeglądarka DOCX',
        hero_subtitle: 'Przeglądaj i analizuj dokumenty Microsoft Word bezpośrednio w przeglądarce – 100% darmowe',
        upload_title: 'Prześlij dokumenty DOCX',
        upload_description: 'Przeciągnij i upuść pliki DOCX lub kliknij, aby przeglądać. Obsługuje pliki DOCX, DOC, DOCM, DOTX, DOTM do 100MB każdy, z możliwością przesyłania wsadowego do 20 dokumentów.',
        upload: {
          drag_drop_text: 'Przeciągnij i upuść pliki tutaj',
          click_browse_text: 'lub kliknij przycisk poniżej, aby przeglądać',
          choose_files_button: 'Wybierz pliki',
          max_files_info: 'Maks. {maxFiles} plików • Do {maxSize} łącznie'
        },
        buttons: {
          view_files: 'Wyświetl pliki',
          back: 'Powrót do wszystkich przeglądarek'
        },
        quick_stats: {
          universal_format: '✓ Uniwersalny format',
          fast_processing: '⚡ Szybkie przetwarzanie',
          high_quality: '🎨 Wysoka jakość'
        },
        features: [
          { title: 'Bogate formatowanie', description: 'Zaawansowana typografia, style, motywy i opcje układu do profesjonalnego tworzenia dokumentów z pełną kontrolą formatowania' },
          { title: 'Narzędzia do współpracy', description: 'Śledzenie zmian, komentarze i obsługa kontroli wersji dla płynnej współpracy zespołowej i przepływów pracy przeglądu dokumentów' },
          { title: 'Obsługa wielu platform', description: 'Zgodne z Microsoft Word, Google Docs, LibreOffice i innymi pakietami biurowymi we wszystkich systemach operacyjnych' }
        ],
        about_title: 'O formacie DOCX',
        about_intro: 'DOCX (Office Open XML Document) to domyślny format plików dla dokumentów Microsoft Word od Word 2007. Jest oparty na standardzie Open XML i używa kompresji ZIP do zmniejszenia rozmiaru pliku przy zachowaniu bogatych możliwości formatowania. Pliki DOCX obsługują zaawansowane funkcje, takie jak style, motywy, osadzone obiekty, wykresy, tabele i złożone opcje formatowania.',
        advantages_title: 'Kluczowe zalety',
        advantages: [
          'Mniejsze rozmiary plików – kompresja ZIP zmniejsza rozmiar nawet o 75%',
          'Lepsze odzyskiwanie – ulepszone odzyskiwanie uszkodzonych plików',
          'Zwiększone bezpieczeństwo – wbudowane szyfrowanie i podpisy cyfrowe',
          'Wieloplatformowość – zgodne z wieloma pakietami biurowymi',
          'Bogate formatowanie – zaawansowana typografia i opcje układu',
          'Współpraca – obsługa śledzenia zmian i komentarzy'
        ],
        use_cases_title: 'Najlepsze zastosowania',
        use_cases: [
          'Dokumenty biznesowe – raporty, propozycje, umowy',
          'Prace akademickie – artykuły naukowe, tezy, publikacje',
          'Dokumenty prawne – umowy, porozumienia, dokumenty sądowe',
          'Szablony – szablony dokumentów i formularze',
          'Współpraca – edycja dokumentów przez wielu autorów',
          'Publikowanie – książki, podręczniki i dokumentacja'
        ],
        specs_title: 'Specyfikacje techniczne',
        specs_header_label: 'Specyfikacja',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenia plików', value: '.docx, .doc, .docm, .dotx, .dotm' },
          { label: 'Typ MIME', value: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
          { label: 'Standard', value: 'Office Open XML (OOXML) - ISO/IEC 29500' },
          { label: 'Opracowane przez', value: 'Microsoft Corporation (2007)' },
          { label: 'Kompresja', value: 'Kompresja oparta na ZIP' },
          { label: 'Kodowanie znaków', value: 'UTF-8' }
        ],
        seo_title: 'Dlaczego wybrać naszą przeglądarkę DOCX?',
        seo_intro: 'Nasza przeglądarka DOCX zapewnia płynne doświadczenie w przeglądaniu i zarządzaniu dokumentami Word bezpośrednio w przeglądarce.',
        seo_viewing_title: 'Profesjonalne przeglądanie dokumentów',
        seo_viewing_text: 'Przeglądaj dokumenty DOCX z renderowaniem wysokiej jakości, kontrolami powiększenia i narzędziami nawigacji.',
        seo_features_title: 'Zaawansowane funkcje',
        seo_features_text: 'Uzyskaj dostęp do potężnych funkcji przeglądania DOCX, w tym wyszukiwania, powiększania i nawigacji po stronach.',
        seo_security_title: 'Bezpieczne i prywatne',
        seo_security_text: 'Twoje pliki DOCX są przetwarzane bezpiecznie i nigdy nie są przechowywane na naszych serwerach.',
        editor: {
          toggle_sidebar: 'Przełącz pasek boczny',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij pasek boczny',
          search_placeholder: 'Szukaj plików...',
          add_files: '+ Dodaj pliki',
          pages: 'Strony',
          close_pages_sidebar: 'Zamknij strony',
          page: 'Strona',
          show_pages: 'Pokaż strony',
          format_badge: 'DOCX',
          previous_page: 'Poprzednia strona (←)',
          next_page: 'Następna strona (→)',
          zoom_out: 'Pomniejsz (-)',
          reset_zoom: 'Kliknij, aby zresetować powiększenie',
          zoom_in: 'Powiêksz (+)',
          start_presentation: 'Rozpocznij prezentację (Spacja/Strzałki do nawigacji)',
          exit_presentation: 'Wyjdź',
          present: 'Prezentuj',
          print_docx: 'Drukuj DOCX',
          download_docx: 'Pobierz DOCX',
          previous: 'Poprzedni (←)',
          next: 'Następny (→)',
          files: 'Pliki',
          files_header: 'Pliki',
          no_files: 'Brak załadowanych plików',
          add_files_prompt: 'Użyj paska bocznego, aby dodać pliki DOCX',
          no_preview: 'Brak podglądu'
        },
        loading_window: {
          title: 'Ładowanie DOCX...'
        }
      }
    }
  },
  de: {
    viewers: {
      docx: {
        meta_title: 'Kostenloser DOCX-Viewer - Microsoft Word-Dokumente online anzeigen',
        meta_description: 'Kostenloser professioneller DOCX-Viewer für Microsoft Word-Dokumente. Laden Sie DOCX-, DOC-, DOCM-Dateien online hoch und zeigen Sie sie mit erweiterten Dokumentanzeigetools an. Unterstützt Batch-Anzeige von bis zu 20 Dateien. 100% kostenloses DOCX-Viewer-Tool.',
        meta_keywords: 'DOCX Viewer, Word-Dokument-Viewer, Microsoft Word Viewer, DOC Viewer, Dokumentvorschau, Online-DOCX-Reader, DOCX Viewer online, kostenloser DOCX Viewer',
        hero_title: 'Kostenloser DOCX-Viewer',
        hero_subtitle: 'Microsoft Word-Dokumente direkt in Ihrem Browser anzeigen und analysieren – 100% kostenlos',
        upload_title: 'DOCX-Dokumente hochladen',
        upload_description: 'Ziehen Sie Ihre DOCX-Dateien hierher oder klicken Sie zum Durchsuchen. Unterstützt DOCX-, DOC-, DOCM-, DOTX-, DOTM-Dateien bis zu 100 MB pro Datei, mit Batch-Upload für bis zu 20 Dokumente.',
        upload: {
          drag_drop_text: 'Dateien hier ablegen',
          click_browse_text: 'oder klicken Sie auf die Schaltfläche unten zum Durchsuchen',
          choose_files_button: 'Dateien auswählen',
          max_files_info: 'Max. {maxFiles} Dateien • Bis zu {maxSize} gesamt'
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
          { title: 'Umfangreiche Formatierung', description: 'Erweiterte Typografie, Stile, Designs und Layout-Optionen für professionelle Dokumenterstellung mit vollständiger Formatierungskontrolle' },
          { title: 'Kollaborationstools', description: 'Änderungen verfolgen, Kommentare und Versionskontrolle für nahtlose Teamzusammenarbeit und Dokumentprüfungs-Workflows' },
          { title: 'Plattformübergreifende Unterstützung', description: 'Kompatibel mit Microsoft Word, Google Docs, LibreOffice und anderen Office-Suiten auf allen Betriebssystemen' }
        ],
        about_title: 'Über das DOCX-Format',
        about_intro: 'DOCX (Office Open XML Document) ist das Standarddateiformat für Microsoft Word-Dokumente seit Word 2007. Es basiert auf dem Open XML-Standard und verwendet ZIP-Komprimierung, um die Dateigröße zu reduzieren und gleichzeitig umfangreiche Formatierungsmöglichkeiten zu erhalten. DOCX-Dateien unterstützen erweiterte Funktionen wie Stile, Designs, eingebettete Objekte, Diagramme, Tabellen und komplexe Formatierungsoptionen.',
        advantages_title: 'Wichtigste Vorteile',
        advantages: [
          'Kleinere Dateigrößen – ZIP-Komprimierung reduziert die Größe um bis zu 75%',
          'Besseres Wiederherstellen – Verbesserte Wiederherstellung beschädigter Dateien',
          'Erhöhte Sicherheit – Integrierte Verschlüsselung und digitale Signaturen',
          'Plattformübergreifend – Kompatibel mit mehreren Office-Suiten',
          'Umfangreiche Formatierung – Erweiterte Typografie und Layout-Optionen',
          'Kollaboration – Unterstützung für Änderungsverfolgung und Kommentare'
        ],
        use_cases_title: 'Beste Anwendungsfälle',
        use_cases: [
          'Geschäftsdokumente – Berichte, Vorschläge, Verträge',
          'Akademische Arbeiten – Forschungsarbeiten, Dissertationen, Publikationen',
          'Rechtsdokumente – Verträge, Vereinbarungen, Gerichtsdokumente',
          'Vorlagen – Dokumentvorlagen und Formulare',
          'Kollaboration – Mehrfachautoren-Dokumentbearbeitung',
          'Veröffentlichung – Bücher, Handbücher und Dokumentation'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Spezifikation',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateierweiterungen', value: '.docx, .doc, .docm, .dotx, .dotm' },
          { label: 'MIME-Typ', value: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
          { label: 'Standard', value: 'Office Open XML (OOXML) - ISO/IEC 29500' },
          { label: 'Entwickelt von', value: 'Microsoft Corporation (2007)' },
          { label: 'Komprimierung', value: 'ZIP-basierte Komprimierung' },
          { label: 'Zeichencodierung', value: 'UTF-8' }
        ],
        seo_title: 'Warum unseren DOCX-Viewer wählen?',
        seo_intro: 'Unser DOCX-Viewer bietet eine nahtlose Erfahrung zum Anzeigen und Verwalten von Word-Dokumenten direkt in Ihrem Browser.',
        seo_viewing_title: 'Professionelle Dokumentanzeige',
        seo_viewing_text: 'Zeigen Sie DOCX-Dokumente mit hochwertigem Rendering, Zoom-Steuerungen und Navigationswerkzeugen an.',
        seo_features_title: 'Erweiterte Funktionen',
        seo_features_text: 'Greifen Sie auf leistungsstarke DOCX-Anzeigefunktionen zu, einschließlich Suche, Zoom und Seitennavigation.',
        seo_security_title: 'Sicher & privat',
        seo_security_text: 'Ihre DOCX-Dateien werden sicher verarbeitet und niemals auf unseren Servern gespeichert.',
        editor: {
          toggle_sidebar: 'Seitenleiste umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Seitenleiste schließen',
          search_placeholder: 'Dateien suchen...',
          add_files: '+ Dateien hinzufügen',
          pages: 'Seiten',
          close_pages_sidebar: 'Seiten schließen',
          page: 'Seite',
          show_pages: 'Seiten anzeigen',
          format_badge: 'DOCX',
          previous_page: 'Vorherige Seite (←)',
          next_page: 'Nächste Seite (→)',
          zoom_out: 'Verkleinern (-)',
          reset_zoom: 'Klicken, um Zoom zurückzusetzen',
          zoom_in: 'Vergrößern (+)',
          start_presentation: 'Präsentation starten (Leertaste/Pfeile zur Navigation)',
          exit_presentation: 'Beenden',
          present: 'Präsentieren',
          print_docx: 'DOCX drucken',
          download_docx: 'DOCX herunterladen',
          previous: 'Vorherige (←)',
          next: 'Nächste (→)',
          files: 'Dateien',
          files_header: 'Dateien',
          no_files: 'Keine Dateien geladen',
          add_files_prompt: 'Verwenden Sie die Seitenleiste, um DOCX-Dateien hinzuzufügen',
          no_preview: 'Keine Vorschau verfügbar'
        },
        loading_window: {
          title: 'DOCX wird geladen...'
        }
      }
    }
  },
  es: {
    viewers: {
      docx: {
        meta_title: 'Visor DOCX gratuito - Ver documentos de Microsoft Word en línea',
        meta_description: 'Visor DOCX profesional gratuito para documentos de Microsoft Word. Sube y previsualiza archivos DOCX, DOC, DOCM en línea con herramientas avanzadas de visualización de documentos. Soporta visualización por lotes de hasta 20 archivos. Herramienta de visor DOCX 100% gratuita.',
        meta_keywords: 'visor DOCX, visor de documentos Word, visor de Microsoft Word, visor DOC, vista previa de documentos, lector DOCX en línea, visor DOCX en línea, visor DOCX gratuito',
        hero_title: 'Visor DOCX Gratuito',
        hero_subtitle: 'Ver y analizar documentos de Microsoft Word directamente en tu navegador – 100% gratuito',
        upload_title: 'Subir Documentos DOCX',
        upload_description: 'Arrastra y suelta tus archivos DOCX o haz clic para explorar. Soporta archivos DOCX, DOC, DOCM, DOTX, DOTM de hasta 100MB cada uno, con carga por lotes de hasta 20 documentos.',
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
          { title: 'Formato Rico', description: 'Tipografía avanzada, estilos, temas y opciones de diseño para creación profesional de documentos con control completo de formato' },
          { title: 'Herramientas de Colaboración', description: 'Seguimiento de cambios, comentarios y soporte de control de versiones para colaboración fluida en equipo y flujos de trabajo de revisión de documentos' },
          { title: 'Soporte Multiplataforma', description: 'Compatible con Microsoft Word, Google Docs, LibreOffice y otras suites ofimáticas en todos los sistemas operativos' }
        ],
        about_title: 'Acerca del Formato DOCX',
        about_intro: 'DOCX (Documento Office Open XML) es el formato de archivo predeterminado para documentos de Microsoft Word desde Word 2007. Está basado en el estándar Open XML y usa compresión ZIP para reducir el tamaño del archivo mientras mantiene capacidades de formato ricas. Los archivos DOCX soportan características avanzadas como estilos, temas, objetos incrustados, gráficos, tablas y opciones de formato complejas.',
        advantages_title: 'Ventajas Clave',
        advantages: [
          'Tamaños de archivo más pequeños – La compresión ZIP reduce el tamaño hasta en un 75%',
          'Mejor recuperación – Recuperación mejorada de archivos corruptos',
          'Seguridad mejorada – Cifrado integrado y firmas digitales',
          'Multiplataforma – Compatible con múltiples suites ofimáticas',
          'Formato rico – Tipografía y opciones de diseño avanzadas',
          'Colaboración – Soporte de seguimiento de cambios y comentarios'
        ],
        use_cases_title: 'Mejores Casos de Uso',
        use_cases: [
          'Documentos comerciales – Informes, propuestas, contratos',
          'Documentos académicos – Artículos de investigación, tesis, publicaciones',
          'Documentos legales – Contratos, acuerdos, documentos judiciales',
          'Plantillas – Plantillas de documentos y formularios',
          'Colaboración – Edición de documentos multi-autor',
          'Publicación – Libros, manuales y documentación'
        ],
        specs_title: 'Especificaciones Técnicas',
        specs_header_label: 'Especificación',
        specs_header_value: 'Detalles',
        specs: [
          { label: 'Extensiones de Archivo', value: '.docx, .doc, .docm, .dotx, .dotm' },
          { label: 'Tipo MIME', value: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
          { label: 'Estándar', value: 'Office Open XML (OOXML) - ISO/IEC 29500' },
          { label: 'Desarrollado Por', value: 'Microsoft Corporation (2007)' },
          { label: 'Compresión', value: 'Compresión basada en ZIP' },
          { label: 'Codificación de Caracteres', value: 'UTF-8' }
        ],
        seo_title: '¿Por Qué Elegir Nuestro Visor DOCX?',
        seo_intro: 'Nuestro visor DOCX proporciona una experiencia fluida para ver y gestionar documentos Word directamente en tu navegador.',
        seo_viewing_title: 'Visualización Profesional de Documentos',
        seo_viewing_text: 'Ver documentos DOCX con renderizado de alta calidad, controles de zoom y herramientas de navegación.',
        seo_features_title: 'Características Avanzadas',
        seo_features_text: 'Accede a potentes características de visualización DOCX incluyendo búsqueda, zoom y navegación de páginas.',
        seo_security_title: 'Seguro y Privado',
        seo_security_text: 'Tus archivos DOCX se procesan de forma segura y nunca se almacenan en nuestros servidores.',
        editor: {
          toggle_sidebar: 'Alternar barra lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar barra lateral',
          search_placeholder: 'Buscar archivos...',
          add_files: '+ Agregar archivos',
          pages: 'Páginas',
          close_pages_sidebar: 'Cerrar páginas',
          page: 'Página',
          show_pages: 'Mostrar páginas',
          format_badge: 'DOCX',
          previous_page: 'Página anterior (←)',
          next_page: 'Página siguiente (→)',
          zoom_out: 'Alejar (-)',
          reset_zoom: 'Hacer clic para restablecer el zoom',
          zoom_in: 'Acercar (+)',
          start_presentation: 'Iniciar presentación (Espacio/Flechas para navegar)',
          exit_presentation: 'Salir',
          present: 'Presentar',
          print_docx: 'Imprimir DOCX',
          download_docx: 'Descargar DOCX',
          previous: 'Anterior (←)',
          next: 'Siguiente (→)',
          files: 'Archivos',
          files_header: 'Archivos',
          no_files: 'No hay archivos cargados',
          add_files_prompt: 'Use la barra lateral para agregar archivos DOCX',
          no_preview: 'No hay vista previa disponible'
        },
        loading_window: {
          title: 'Cargando DOCX...'
        }
      }
    }
  },
  fr: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Basculer la barre latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la barre latérale',
          search_placeholder: 'Rechercher des fichiers...',
          add_files: '+ Ajouter des fichiers',
          pages: 'Pages',
          close_pages_sidebar: 'Fermer les pages',
          page: 'Page',
          show_pages: 'Afficher les pages',
          format_badge: 'DOCX',
          previous_page: 'Page précédente (←)',
          next_page: 'Page suivante (→)',
          zoom_out: 'Dézoomer (-)',
          reset_zoom: 'Cliquer pour réinitialiser le zoom',
          zoom_in: 'Zoomer (+)',
          start_presentation: 'Démarrer la présentation (Espace/Flèches pour naviguer)',
          exit_presentation: 'Quitter',
          present: 'Présenter',
          print_docx: 'Imprimer DOCX',
          download_docx: 'Télécharger DOCX',
          previous: 'Précédent (←)',
          next: 'Suivant (→)',
          files: 'Fichiers',
          files_header: 'Fichiers',
          no_files: 'Aucun fichier chargé',
          add_files_prompt: 'Utilisez la barre latérale pour ajouter des fichiers DOCX',
          no_preview: 'Aucun aperçu disponible'
        },
        loading_window: {
          title: 'Chargement de DOCX...'
        }
      }
    }
  },
  it: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Attiva/disattiva barra laterale',
          close: 'Chiudi (Esc)',
          close_sidebar: 'Chiudi barra laterale',
          search_placeholder: 'Cerca file...',
          add_files: '+ Aggiungi file',
          pages: 'Pagine',
          close_pages_sidebar: 'Chiudi pagine',
          page: 'Pagina',
          show_pages: 'Mostra pagine',
          format_badge: 'DOCX',
          previous_page: 'Pagina precedente (←)',
          next_page: 'Pagina successiva (→)',
          zoom_out: 'Riduci (-)',
          reset_zoom: 'Clicca per reimpostare lo zoom',
          zoom_in: 'Ingrandisci (+)',
          start_presentation: 'Avvia presentazione (Spazio/Frecce per navigare)',
          exit_presentation: 'Esci',
          present: 'Presenta',
          print_docx: 'Stampa DOCX',
          download_docx: 'Scarica DOCX',
          previous: 'Precedente (←)',
          next: 'Successivo (→)',
          files: 'File',
          files_header: 'File',
          no_files: 'Nessun file caricato',
          add_files_prompt: 'Usa la barra laterale per aggiungere file DOCX',
          no_preview: 'Nessuna anteprima disponibile'
        },
        loading_window: {
          title: 'Caricamento DOCX...'
        }
      }
    }
  },
  nl: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Zijbalk wisselen',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk sluiten',
          search_placeholder: 'Zoek bestanden...',
          add_files: '+ Bestanden toevoegen',
          pages: 'Pagina\'s',
          close_pages_sidebar: 'Pagina\'s sluiten',
          page: 'Pagina',
          show_pages: 'Pagina\'s tonen',
          format_badge: 'DOCX',
          previous_page: 'Vorige pagina (←)',
          next_page: 'Volgende pagina (→)',
          zoom_out: 'Uitzoomen (-)',
          reset_zoom: 'Klik om zoom te resetten',
          zoom_in: 'Inzoomen (+)',
          start_presentation: 'Presentatie starten (Spatie/Pijlen om te navigeren)',
          exit_presentation: 'Afsluiten',
          present: 'Presenteren',
          print_docx: 'DOCX afdrukken',
          download_docx: 'DOCX downloaden',
          previous: 'Vorige (←)',
          next: 'Volgende (→)',
          files: 'Bestanden',
          files_header: 'Bestanden',
          no_files: 'Geen bestanden geladen',
          add_files_prompt: 'Gebruik de zijbalk om DOCX-bestanden toe te voegen',
          no_preview: 'Geen voorbeeld beschikbaar'
        },
        loading_window: {
          title: 'DOCX laden...'
        }
      }
    }
  },
  pt: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Alternar barra lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar barra lateral',
          search_placeholder: 'Pesquisar arquivos...',
          add_files: '+ Adicionar arquivos',
          pages: 'Páginas',
          close_pages_sidebar: 'Fechar páginas',
          page: 'Página',
          show_pages: 'Mostrar páginas',
          format_badge: 'DOCX',
          previous_page: 'Página anterior (←)',
          next_page: 'Próxima página (→)',
          zoom_out: 'Reduzir (-)',
          reset_zoom: 'Clique para redefinir o zoom',
          zoom_in: 'Ampliar (+)',
          start_presentation: 'Iniciar apresentação (Espaço/Setas para navegar)',
          exit_presentation: 'Sair',
          present: 'Apresentar',
          print_docx: 'Imprimir DOCX',
          download_docx: 'Baixar DOCX',
          previous: 'Anterior (←)',
          next: 'Próximo (→)',
          files: 'Arquivos',
          files_header: 'Arquivos',
          no_files: 'Nenhum arquivo carregado',
          add_files_prompt: 'Use a barra lateral para adicionar arquivos DOCX',
          no_preview: 'Nenhuma visualização disponível'
        },
        loading_window: {
          title: 'Carregando DOCX...'
        }
      }
    }
  },
  vi: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Chuyển thanh bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng thanh bên',
          search_placeholder: 'Tìm kiếm tệp...',
          add_files: '+ Thêm tệp',
          pages: 'Trang',
          close_pages_sidebar: 'Đóng trang',
          page: 'Trang',
          show_pages: 'Hiển thị trang',
          format_badge: 'DOCX',
          previous_page: 'Trang trước (←)',
          next_page: 'Trang tiếp theo (→)',
          zoom_out: 'Thu nhỏ (-)',
          reset_zoom: 'Nhấp để đặt lại thu phóng',
          zoom_in: 'Phóng to (+)',
          start_presentation: 'Bắt đầu trình bày (Phím cách/Mũi tên để điều hướng)',
          exit_presentation: 'Thoát',
          present: 'Trình bày',
          print_docx: 'In DOCX',
          download_docx: 'Tải xuống DOCX',
          previous: 'Trước (←)',
          next: 'Tiếp theo (→)',
          files: 'Tệp',
          files_header: 'Tệp',
          no_files: 'Không có tệp nào được tải',
          add_files_prompt: 'Sử dụng thanh bên để thêm tệp DOCX',
          no_preview: 'Không có bản xem trước'
        },
        loading_window: {
          title: 'Đang tải DOCX...'
        }
      }
    }
  },
  tr: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Kenar çubuğunu aç/kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar çubuğunu kapat',
          search_placeholder: 'Dosyaları ara...',
          add_files: '+ Dosya ekle',
          pages: 'Sayfalar',
          close_pages_sidebar: 'Sayfaları kapat',
          page: 'Sayfa',
          show_pages: 'Sayfaları göster',
          format_badge: 'DOCX',
          previous_page: 'Önceki sayfa (←)',
          next_page: 'Sonraki sayfa (→)',
          zoom_out: 'Uzaklaştır (-)',
          reset_zoom: 'Yakınlaştırmayı sıfırlamak için tıklayın',
          zoom_in: 'Yakınlaştır (+)',
          start_presentation: 'Sunumu başlat (Gezinmek için Boşluk/Ok tuşları)',
          exit_presentation: 'Çık',
          present: 'Sun',
          print_docx: 'DOCX yazdır',
          download_docx: 'DOCX indir',
          previous: 'Önceki (←)',
          next: 'Sonraki (→)',
          files: 'Dosyalar',
          files_header: 'Dosyalar',
          no_files: 'Yüklenen dosya yok',
          add_files_prompt: 'DOCX dosyaları eklemek için kenar çubuğunu kullanın',
          no_preview: 'Önizleme mevcut değil'
        },
        loading_window: {
          title: 'DOCX yükleniyor...'
        }
      }
    }
  },
  ru: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Переключить боковую панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть боковую панель',
          search_placeholder: 'Поиск файлов...',
          add_files: '+ Добавить файлы',
          pages: 'Страницы',
          close_pages_sidebar: 'Закрыть страницы',
          page: 'Страница',
          show_pages: 'Показать страницы',
          format_badge: 'DOCX',
          previous_page: 'Предыдущая страница (←)',
          next_page: 'Следующая страница (→)',
          zoom_out: 'Уменьшить (-)',
          reset_zoom: 'Нажмите, чтобы сбросить масштаб',
          zoom_in: 'Увеличить (+)',
          start_presentation: 'Начать презентацию (Пробел/Стрелки для навигации)',
          exit_presentation: 'Выход',
          present: 'Представить',
          print_docx: 'Печать DOCX',
          download_docx: 'Скачать DOCX',
          previous: 'Предыдущий (←)',
          next: 'Следующий (→)',
          files: 'Файлы',
          files_header: 'Файлы',
          no_files: 'Файлы не загружены',
          add_files_prompt: 'Используйте боковую панель для добавления файлов DOCX',
          no_preview: 'Предварительный просмотр недоступен'
        },
        loading_window: {
          title: 'Загрузка DOCX...'
        }
      }
    }
  },
  ar: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          add_files: '+ إضافة ملفات',
          pages: 'الصفحات',
          close_pages_sidebar: 'إغلاق الصفحات',
          page: 'صفحة',
          show_pages: 'إظهار الصفحات',
          format_badge: 'DOCX',
          previous_page: 'الصفحة السابقة (←)',
          next_page: 'الصفحة التالية (→)',
          zoom_out: 'تصغير (-)',
          reset_zoom: 'انقر لإعادة تعيين التكبير',
          zoom_in: 'تكبير (+)',
          start_presentation: 'بدء العرض التقديمي (مسافة/أسهم للتنقل)',
          exit_presentation: 'خروج',
          present: 'عرض',
          print_docx: 'طباعة DOCX',
          download_docx: 'تنزيل DOCX',
          previous: 'السابق (←)',
          next: 'التالي (→)',
          files: 'الملفات',
          files_header: 'الملفات',
          no_files: 'لا توجد ملفات محملة',
          add_files_prompt: 'استخدم الشريط الجانبي لإضافة ملفات DOCX',
          no_preview: 'لا توجد معاينة متاحة'
        },
        loading_window: {
          title: 'جارٍ تحميل DOCX...'
        }
      }
    }
  },
  th: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          add_files: '+ เพิ่มไฟล์',
          pages: 'หน้า',
          close_pages_sidebar: 'ปิดหน้า',
          page: 'หน้า',
          show_pages: 'แสดงหน้า',
          format_badge: 'DOCX',
          previous_page: 'หน้าก่อนหน้า (←)',
          next_page: 'หน้าถัดไป (→)',
          zoom_out: 'ย่อออก (-)',
          reset_zoom: 'คลิกเพื่อรีเซ็ตการซูม',
          zoom_in: 'ขยายเข้า (+)',
          start_presentation: 'เริ่มการนำเสนอ (Space/ลูกศรเพื่อนำทาง)',
          exit_presentation: 'ออก',
          present: 'นำเสนอ',
          print_docx: 'พิมพ์ DOCX',
          download_docx: 'ดาวน์โหลด DOCX',
          previous: 'ก่อนหน้า (←)',
          next: 'ถัดไป (→)',
          files: 'ไฟล์',
          files_header: 'ไฟล์',
          no_files: 'ไม่มีไฟล์ที่โหลด',
          add_files_prompt: 'ใช้แถบด้านข้างเพื่อเพิ่มไฟล์ DOCX',
          no_preview: 'ไม่มีตัวอย่างให้ดู'
        },
        loading_window: {
          title: 'กำลังโหลด DOCX...'
        }
      }
    }
  },
  ja: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'サイドバーを切り替え',
          close: '閉じる (Esc)',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          add_files: '+ ファイルを追加',
          pages: 'ページ',
          close_pages_sidebar: 'ページを閉じる',
          page: 'ページ',
          show_pages: 'ページを表示',
          format_badge: 'DOCX',
          previous_page: '前のページ (←)',
          next_page: '次のページ (→)',
          zoom_out: '縮小 (-)',
          reset_zoom: 'クリックしてズームをリセット',
          zoom_in: '拡大 (+)',
          start_presentation: 'プレゼンテーションを開始 (スペース/矢印でナビゲート)',
          exit_presentation: '終了',
          present: 'プレゼント',
          print_docx: 'DOCXを印刷',
          download_docx: 'DOCXをダウンロード',
          previous: '前へ (←)',
          next: '次へ (→)',
          files: 'ファイル',
          files_header: 'ファイル',
          no_files: 'ファイルが読み込まれていません',
          add_files_prompt: 'サイドバーを使用してDOCXファイルを追加',
          no_preview: 'プレビューが利用できません'
        },
        loading_window: {
          title: 'DOCXを読み込み中...'
        }
      }
    }
  },
  zh: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭 (Esc)',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          add_files: '+ 添加文件',
          pages: '页面',
          close_pages_sidebar: '关闭页面',
          page: '页面',
          show_pages: '显示页面',
          format_badge: 'DOCX',
          previous_page: '上一页 (←)',
          next_page: '下一页 (→)',
          zoom_out: '缩小 (-)',
          reset_zoom: '点击重置缩放',
          zoom_in: '放大 (+)',
          start_presentation: '开始演示 (空格/箭头导航)',
          exit_presentation: '退出',
          present: '演示',
          print_docx: '打印 DOCX',
          download_docx: '下载 DOCX',
          previous: '上一个 (←)',
          next: '下一个 (→)',
          files: '文件',
          files_header: '文件',
          no_files: '未加载文件',
          add_files_prompt: '使用侧边栏添加 DOCX 文件',
          no_preview: '无预览可用'
        },
        loading_window: {
          title: '正在加载 DOCX...'
        }
      }
    }
  },
  id: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Alihkan bilah sisi',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup bilah sisi',
          search_placeholder: 'Cari file...',
          add_files: '+ Tambah file',
          pages: 'Halaman',
          close_pages_sidebar: 'Tutup halaman',
          page: 'Halaman',
          show_pages: 'Tampilkan halaman',
          format_badge: 'DOCX',
          previous_page: 'Halaman sebelumnya (←)',
          next_page: 'Halaman berikutnya (→)',
          zoom_out: 'Perkecil (-)',
          reset_zoom: 'Klik untuk mengatur ulang zoom',
          zoom_in: 'Perbesar (+)',
          start_presentation: 'Mulai presentasi (Spasi/Panah untuk navigasi)',
          exit_presentation: 'Keluar',
          present: 'Sajikan',
          print_docx: 'Cetak DOCX',
          download_docx: 'Unduh DOCX',
          previous: 'Sebelumnya (←)',
          next: 'Berikutnya (→)',
          files: 'File',
          files_header: 'File',
          no_files: 'Tidak ada file yang dimuat',
          add_files_prompt: 'Gunakan bilah sisi untuk menambahkan file DOCX',
          no_preview: 'Tidak ada pratinjau tersedia'
        },
        loading_window: {
          title: 'Memuat DOCX...'
        }
      }
    }
  },
  sv: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Växla sidofält',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng sidofält',
          search_placeholder: 'Sök filer...',
          add_files: '+ Lägg till filer',
          pages: 'Sidor',
          close_pages_sidebar: 'Stäng sidor',
          page: 'Sida',
          show_pages: 'Visa sidor',
          format_badge: 'DOCX',
          previous_page: 'Föregående sida (←)',
          next_page: 'Nästa sida (→)',
          zoom_out: 'Zooma ut (-)',
          reset_zoom: 'Klicka för att återställa zoom',
          zoom_in: 'Zooma in (+)',
          start_presentation: 'Starta presentation (Mellanslag/Pilar för navigering)',
          exit_presentation: 'Avsluta',
          present: 'Presentera',
          print_docx: 'Skriv ut DOCX',
          download_docx: 'Ladda ner DOCX',
          previous: 'Föregående (←)',
          next: 'Nästa (→)',
          files: 'Filer',
          files_header: 'Filer',
          no_files: 'Inga filer laddade',
          add_files_prompt: 'Använd sidofältet för att lägga till DOCX-filer',
          no_preview: 'Ingen förhandsvisning tillgänglig'
        },
        loading_window: {
          title: 'Laddar DOCX...'
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
export type { DOCXViewerTranslations };

