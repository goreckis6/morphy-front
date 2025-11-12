import i18n from '../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type ViewersDngTranslations = {
  viewers: {
    dng: {
      meta_title: string;
      meta_description: string;
      meta_keywords: string;
      hero_title: string;
      hero_subtitle: string;
      upload_title: string;
      upload_description: string;
      files_heading: string;
      how_to_title: string;
      how_to_description: string;
      buttons: {
        view: string;
        download: string;
        back: string;
      };
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
      features: Feature[];
      about_title: string;
      about_intro: string;
      advantages_title: string;
      advantages: string[];
      compatible_cameras_title: string;
      compatible_cameras: string[];
      specs_title: string;
      specs_header_label: string;
      specs_header_value: string;
      specs: Spec[];
    };
  };
};

const resources: Record<string, ViewersDngTranslations> = {
  en: {
    viewers: {
      dng: {
        meta_title: 'Free DNG Viewer - Preview Digital Negative Files Online | MorphyHub',
        meta_description:
          'Open and inspect DNG (Digital Negative) photos directly in your browser. Our free DNG viewer delivers sensor-accurate rendering, metadata insights, zoom controls, and batch support for up to 20 raw files.',
        meta_keywords:
          'dng viewer, digital negative viewer, adobe dng, raw photo viewer, online dng preview, raw metadata',
        hero_title: 'Free DNG Viewer',
        hero_subtitle:
          'Inspect Adobe Digital Negative (DNG) photos with full fidelity, rich metadata, and professional preview tools.',
        upload_title: 'Upload DNG Files',
        upload_description:
          'Drag and drop your DNG raws or click to browse. Supports up to 20 files (100MB each) with instant, high-quality rendering.',
        files_heading: 'Your DNG Files ({{count}})',
        how_to_title: 'How to View DNG Files',
        how_to_description:
          '• <strong>Upload:</strong> Drop your DNG files into the panel or click to browse from disk.<br />' +
          '• <strong>Preview:</strong> Select any file to launch the interactive viewer with zoom, rotate, and metadata tools.<br />' +
          '• <strong>Download:</strong> Keep the original raw file with a single click whenever you need it.',
        buttons: {
          view: 'Open Preview',
          download: 'Download DNG',
          back: '← Back to All Viewers'
        },
        alerts: {
          file_too_large:
            'File is too large for preview ({{size}} MB). Maximum preview size is {{max}} MB. Please download the file instead.',
          popup_blocked: 'Please enable pop-ups to open the DNG preview window.',
          preview_failed:
            'We could not generate the DNG preview. Please try again or download the original file.'
        },
        loading_window: {
          title: 'Processing {{filename}}…',
          message: 'Rendering DNG preview…'
        },
        error_window: {
          title: 'Preview Error',
          message: 'We could not render this DNG file. The original download is still available.',
          close: 'Close Window'
        },
        features: [
          {
            title: '<strong>Sensor-accurate rendering</strong>',
            description:
              'Preview the full dynamic range and color depth captured by your camera with precision down to the pixel.'
          },
          {
            title: '<strong>Metadata intelligence</strong>',
            description:
              'Instantly review EXIF data, exposure details, ISO, camera model, and lens information for every shot.'
          },
          {
            title: '<strong>Batch-friendly workflow</strong>',
            description:
              'Load up to 20 DNG files at once, compare takes side by side, and download originals without re-uploading.'
          }
        ],
        about_title: 'About the DNG Format',
        about_intro:
          'DNG (Digital Negative) is an open, archival raw image format created by Adobe. It is based on the TIFF/EP standard and preserves linear sensor data, rich metadata, and flexible color profiles in a single, well-documented container. Photographers use DNG to ensure long-term accessibility, consistent rendering across software, and streamlined workflows for mixed camera fleets.',
        advantages_title: 'Key Advantages',
        advantages: [
          '• <strong>Archival stability</strong> – Open specification ensures long-term access to your raw assets.',
          '• <strong>Compact storage</strong> – Optional lossless compression reduces file size without sacrificing data.',
          '• <strong>Embedded previews</strong> – Stores fast-loading JPEG previews alongside full raw data.',
          '• <strong>Unified metadata</strong> – Keeps EXIF, XMP, and custom profiles in a single file.',
          '• <strong>Cross-platform support</strong> – Works with Adobe apps, Affinity, Capture One, ON1, and more.'
        ],
        compatible_cameras_title: 'Common DNG Sources',
        compatible_cameras: [
          '• <strong>Native DNG cameras:</strong> Leica, Ricoh, Hasselblad, DJI, Pentax',
          '• <strong>Converted DSLR/Mirrorless raws:</strong> Canon CR3, Nikon NEF, Sony ARW, Fujifilm RAF',
          '• <strong>Mobile photography:</strong> iOS/Android apps that export RAW/DNG images',
          '• <strong>Scanning workflows:</strong> Film and flatbed scanners that output archival DNG files'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Property',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.dng' },
          { label: 'MIME Type', value: 'image/x-adobe-dng' },
          { label: 'Developed By', value: 'Adobe Systems Incorporated' },
          { label: 'Initial Release', value: '2004' },
          { label: 'Color Depth', value: '8, 10, 12, 14, or 16 bits per channel' },
          { label: 'Compression', value: 'Lossless JPEG, Lossy JPEG, or Uncompressed' },
          { label: 'Container', value: 'TIFF/EP-based raw image format with embedded metadata' }
        ]
      }
    }
  },
  pl: {
    viewers: {
      dng: {
        meta_title: 'Darmowy podgląd DNG – Otwieraj pliki Digital Negative online | MorphyHub',
        meta_description:
          'Przeglądaj pliki DNG (Digital Negative) bezpośrednio w przeglądarce. Darmowy podgląd DNG oferuje wierne odwzorowanie sensora, szczegółowe metadane, powiększanie i obsługę do 20 surowych plików naraz.',
        meta_keywords:
          'podgląd dng, digital negative, raw online, adobe dng viewer, metadane raw, podgląd zdjęć dng',
        hero_title: 'Darmowy podgląd DNG',
        hero_subtitle:
          'Analizuj zdjęcia Adobe Digital Negative z pełną dokładnością, bogatymi metadanymi i profesjonalnymi narzędziami podglądu.',
        upload_title: 'Prześlij pliki DNG',
        upload_description:
          'Przeciągnij i upuść surowe pliki DNG lub kliknij, aby je wybrać. Obsługa do 20 plików (po 100 MB) z natychmiastowym renderowaniem w wysokiej jakości.',
        files_heading: 'Twoje pliki DNG ({{count}})',
        how_to_title: 'Jak otworzyć pliki DNG',
        how_to_description:
          '• <strong>Dodaj:</strong> Upuść pliki DNG do panelu lub wybierz je z dysku.<br />' +
          '• <strong>Podgląd:</strong> Kliknij dowolny plik, aby uruchomić interaktywny podgląd z powiększaniem, obrotem i metadanymi.<br />' +
          '• <strong>Pobierz:</strong> W każdej chwili zachowaj oryginalny plik RAW jednym kliknięciem.',
        buttons: {
          view: 'Otwórz podgląd',
          download: 'Pobierz DNG',
          back: '← Powrót do wszystkich podglądów'
        },
        alerts: {
          file_too_large:
            'Plik jest zbyt duży do podglądu ({{size}} MB). Maksymalny rozmiar podglądu to {{max}} MB. Pobierz plik zamiast tego.',
          popup_blocked: 'Włącz wyskakujące okna, aby otworzyć okno podglądu DNG.',
          preview_failed:
            'Nie udało się wygenerować podglądu DNG. Spróbuj ponownie lub pobierz oryginalny plik.'
        },
        loading_window: {
          title: 'Przetwarzanie {{filename}}…',
          message: 'Renderowanie podglądu DNG…'
        },
        error_window: {
          title: 'Błąd podglądu',
          message: 'Nie udało się wyrenderować tego pliku DNG. Oryginalny plik nadal można pobrać.',
          close: 'Zamknij okno'
        },
        features: [
          {
            title: '<strong>Dokładność odwzorowania sensora</strong>',
            description:
              'Zobacz pełną dynamikę i głębię kolorów uchwyconą przez aparat – piksel po pikselu.'
          },
          {
            title: '<strong>Inteligentne metadane</strong>',
            description:
              'Natychmiast sprawdzaj dane EXIF, ekspozycję, ISO, model aparatu i informacje o obiektywie.'
          },
          {
            title: '<strong>Praca wsadowa</strong>',
            description:
              'Wczytaj jednocześnie do 20 plików DNG, porównuj ujęcia i pobieraj oryginały bez ponownego przesyłania.'
          }
        ],
        about_title: 'Informacje o formacie DNG',
        about_intro:
          'DNG (Digital Negative) to otwarty, archiwalny format surowych zdjęć opracowany przez Adobe. Bazuje na standardzie TIFF/EP i przechowuje liniowe dane z sensora, bogate metadane oraz profile kolorystyczne w jednym, udokumentowanym pliku. Fotografowie wybierają DNG, aby zapewnić długoterminowy dostęp do materiałów, spójne renderowanie w różnych programach i uporządkowane przepływy pracy w zespołach korzystających z różnych aparatów.',
        advantages_title: 'Najważniejsze zalety',
        advantages: [
          '• <strong>Stabilność archiwalna</strong> – Otwarta specyfikacja gwarantuje dostęp do plików w przyszłości.',
          '• <strong>Kompaktowe rozmiary</strong> – Opcjonalna bezstratna kompresja zmniejsza pliki bez utraty danych.',
          '• <strong>Wbudowane podglądy</strong> – Zawiera szybkie miniatury JPEG obok pełnych danych RAW.',
          '• <strong>Zintegrowane metadane</strong> – Przechowuje EXIF, XMP i profile kolorystyczne w jednym pliku.',
          '• <strong>Szeroka kompatybilność</strong> – Obsługiwany przez aplikacje Adobe, Affinity, Capture One, ON1 i wiele innych.'
        ],
        compatible_cameras_title: 'Typowe źródła DNG',
        compatible_cameras: [
          '• <strong>Aparaty z natywnym DNG:</strong> Leica, Ricoh, Hasselblad, DJI, Pentax',
          '• <strong>Skonwertowane RAW-y:</strong> Canon CR3, Nikon NEF, Sony ARW, Fujifilm RAF zapisane do DNG',
          '• <strong>Fotografia mobilna:</strong> Aplikacje iOS/Android eksportujące zdjęcia RAW/DNG',
          '• <strong>Skanery archiwalne:</strong> Skanery filmowe i płaskie eksportujące pliki DNG'
        ],
        specs_title: 'Specyfikacja techniczna',
        specs_header_label: 'Parametr',
        specs_header_value: 'Wartość',
        specs: [
          { label: 'Rozszerzenie pliku', value: '.dng' },
          { label: 'Typ MIME', value: 'image/x-adobe-dng' },
          { label: 'Opracowany przez', value: 'Adobe Systems Incorporated' },
          { label: 'Pierwsze wydanie', value: '2004' },
          { label: 'Głębia koloru', value: '8, 10, 12, 14 lub 16 bitów na kanał' },
          { label: 'Kompresja', value: 'JPEG bezstratny, JPEG stratny lub brak kompresji' },
          { label: 'Kontener', value: 'Format RAW oparty na TIFF/EP z osadzonymi metadanymi' }
        ]
      }
    }
  },
  de: {
    viewers: {
      dng: {
        meta_title: 'Kostenloser DNG Viewer – Digital-Negative-Dateien online anzeigen | MorphyHub',
        meta_description:
          'Öffne und inspiziere DNG (Digital Negative) Fotos direkt im Browser. Unser kostenloser DNG Viewer bietet sensorgetreue Darstellung, umfangreiche Metadaten, Zoom-Werkzeuge und Stapelverarbeitung für bis zu 20 RAW-Dateien.',
        meta_keywords:
          'dng viewer, digital negative viewer, adobe dng, raw foto anzeigen, dng online, raw metadaten',
        hero_title: 'Kostenloser DNG Viewer',
        hero_subtitle:
          'Analysiere Adobe Digital Negative Fotos mit maximaler Detailtreue, vollständigen Metadaten und professionellen Preview-Tools.',
        upload_title: 'DNG-Dateien hochladen',
        upload_description:
          'Ziehe deine DNG-RAWs hierher oder klicke zum Auswählen. Unterstützt bis zu 20 Dateien (je 100 MB) mit sofortiger Hochqualitätsansicht.',
        files_heading: 'Ihre DNG-Dateien ({{count}})',
        how_to_title: 'So zeigen Sie DNG-Dateien an',
        how_to_description:
          '• <strong>Hochladen:</strong> Ziehe deine DNG-Dateien in das Feld oder wähle sie vom Laufwerk aus.<br />' +
          '• <strong>Vorschau:</strong> Klicke auf eine Datei, um den interaktiven Viewer mit Zoom-, Dreh- und Metadatenfunktionen zu öffnen.<br />' +
          '• <strong>Download:</strong> Speichere die Original-RAW-Datei jederzeit mit einem Klick.',
        buttons: {
          view: 'Vorschau öffnen',
          download: 'DNG herunterladen',
          back: '← Zurück zu allen Viewern'
        },
        alerts: {
          file_too_large:
            'Datei ist für die Vorschau zu groß ({{size}} MB). Der maximale Vorschaubereich liegt bei {{max}} MB. Bitte laden Sie die Datei direkt herunter.',
          popup_blocked: 'Bitte Pop-ups erlauben, um das DNG-Vorschaufenster zu öffnen.',
          preview_failed:
            'Die DNG-Vorschau konnte nicht erzeugt werden. Versuchen Sie es erneut oder laden Sie die Originaldatei herunter.'
        },
        loading_window: {
          title: 'Verarbeite {{filename}}…',
          message: 'DNG-Vorschau wird gerendert…'
        },
        error_window: {
          title: 'Vorschaudfehler',
          message: 'Diese DNG-Datei konnte nicht gerendert werden. Der Original-Download steht weiterhin zur Verfügung.',
          close: 'Fenster schließen'
        },
        features: [
          {
            title: '<strong>Sensortreue Darstellung</strong>',
            description:
              'Erleben Sie den kompletten Dynamikumfang und die Farbtiefe Ihrer Kamera – präzise bis auf den einzelnen Pixel.'
          },
          {
            title: '<strong>Umfassende Metadaten</strong>',
            description:
              'Sehen Sie EXIF-Daten, Belichtungswerte, ISO, Kameramodell und Objektivinformationen auf einen Blick.'
          },
          {
            title: '<strong>Stapelorientierter Workflow</strong>',
            description:
              'Laden Sie bis zu 20 DNG-Dateien gleichzeitig, vergleichen Sie Aufnahmen und laden Sie Originale ohne erneutes Hochladen herunter.'
          }
        ],
        about_title: 'Über das DNG-Format',
        about_intro:
          'DNG (Digital Negative) ist ein offenes, archivfähiges RAW-Format von Adobe. Es basiert auf dem TIFF/EP-Standard und speichert lineare Sensordaten, umfangreiche Metadaten sowie Farbprofile in einer gut dokumentierten Containerdatei. Fotograf*innen nutzen DNG für langfristige Datensicherheit, konsistente Darstellung über verschiedene Software hinweg und effiziente Workflows in gemischten Kameraflotten.',
        advantages_title: 'Wichtigste Vorteile',
        advantages: [
          '• <strong>Archivfest</strong> – Offene Spezifikation garantiert den langfristigen Zugriff auf RAW-Dateien.',
          '• <strong>Kompakter Speicherbedarf</strong> – Optionale verlustfreie Kompression reduziert die Dateigröße ohne Qualitätsverlust.',
          '• <strong>Eingebettete Vorschauen</strong> – Enthält schnelle JPEG-Previews neben den vollständigen RAW-Daten.',
          '• <strong>Zentrale Metadaten</strong> – Bewahrt EXIF, XMP und Farbprofile gemeinsam in einer Datei auf.',
          '• <strong>Breite Kompatibilität</strong> – Unterstützt von Adobe-Apps, Affinity, Capture One, ON1 und vielen weiteren Tools.'
        ],
        compatible_cameras_title: 'Typische DNG-Quellen',
        compatible_cameras: [
          '• <strong>Kameras mit nativer DNG-Aufnahme:</strong> Leica, Ricoh, Hasselblad, DJI, Pentax',
          '• <strong>Konvertierte RAW-Dateien:</strong> Canon CR3, Nikon NEF, Sony ARW, Fujifilm RAF als DNG exportiert',
          '• <strong>Mobile Fotografie:</strong> iOS-/Android-Apps, die RAW/DNG exportieren',
          '• <strong>Scan-Workflows:</strong> Film- und Flachbettscanner mit DNG-Ausgabe'
        ],
        specs_title: 'Technische Daten',
        specs_header_label: 'Eigenschaft',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateiendung', value: '.dng' },
          { label: 'MIME-Typ', value: 'image/x-adobe-dng' },
          { label: 'Entwickelt von', value: 'Adobe Systems Incorporated' },
          { label: 'Erstveröffentlichung', value: '2004' },
          { label: 'Farbtiefe', value: '8, 10, 12, 14 oder 16 Bit pro Kanal' },
          { label: 'Kompression', value: 'JPEG verlustfrei, JPEG verlustbehaftet oder unkomprimiert' },
          { label: 'Container', value: 'TIFF/EP-basiertes RAW-Format mit eingebetteten Metadaten' }
        ]
      }
    }
  }
};

Object.entries(resources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

