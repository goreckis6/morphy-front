import i18n // from '../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type ViewerArwTranslations = {
  viewers: {
    arw: {
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

const resources: Record<string, ViewerArwTranslations> = {
  en: {
    viewers: {
      arw: {
        meta_title: 'Free ARW Viewer - Preview Sony Alpha Raw Files Online',
        meta_description:
          'Open and inspect ARW (Sony Alpha Raw) photos directly in your browser. Our free ARW viewer delivers sensor-accurate rendering, metadata insights, zoom controls, and batch support for up to 20 raw files.',
        meta_keywords:
          'arw viewer, sony alpha raw viewer, sony arw, raw photo viewer, online arw preview, sony camera raw, raw metadata',
        hero_title: 'Free ARW Viewer',
        hero_subtitle:
          'Inspect Sony Alpha Raw (ARW) photos with full fidelity, rich metadata, and professional preview tools.',
        upload_title: 'Upload ARW Files',
        upload_description:
          'Drag and drop your ARW raws or click to browse. Supports up to 20 files (100MB each) with instant, high-quality rendering.',
        files_heading: 'Your ARW Files ({{count}})',
        how_to_title: 'How to View ARW Files',
        how_to_description:
          '• <strong>Upload:</strong> Drop your ARW files into the panel or click to browse from disk.<br />' +
          '• <strong>Preview:</strong> Select any file to launch the interactive viewer with zoom, rotate, and metadata tools.<br />' +
          '• <strong>Download:</strong> Keep the original raw file with a single click whenever you need it.',
        buttons: {
          view: 'Open Preview',
          download: 'Download ARW',
          back: '← Back to All Viewers'
        },
        alerts: {
          file_too_large:
            'File is too large for preview ({{size}} MB). Maximum size is {{max}} MB. Please download the file instead.',
          popup_blocked: 'Please allow pop-ups to view the ARW file.',
          preview_failed: 'Failed to open ARW preview. Please try again or download the file.'
        },
        loading_window: {
          title: 'Loading {{filename}}...',
          message: 'Processing ARW file for preview...'
        },
        error_window: {
          title: 'Preview Error',
          message: 'Failed to generate ARW preview. Please try downloading the file instead.',
          close: 'Close'
        },
        features: [
          {
            title: '<strong>Sensor-accurate rendering</strong>',
            description:
              'View ARW files with precise color reproduction, white balance, and exposure interpretation from Sony Alpha cameras.'
          },
          {
            title: '<strong>Rich metadata display</strong>',
            description:
              'Inspect camera settings, EXIF data, lens information, and shooting parameters embedded in your ARW files.'
          },
          {
            title: '<strong>Professional preview tools</strong>',
            description:
              'Zoom, rotate, and analyze your raw images with interactive controls before processing or conversion.'
          }
        ],
        about_title: 'About ARW Format',
        about_intro:
          'ARW (Sony Alpha Raw) is a proprietary raw image format used by Sony Alpha series cameras. It stores unprocessed sensor data directly from the camera, preserving maximum image quality and allowing for extensive post-processing flexibility. ARW files contain 12-14 bit color depth data and support lossless compression, making them ideal for professional photography workflows.',
        advantages_title: 'Key Advantages',
        advantages: [
          '• <strong>Maximum quality</strong> – Uncompressed sensor data preserves every detail from your camera',
          '• <strong>Post-processing flexibility</strong> – Adjust white balance, exposure, and colors without quality loss',
          '• <strong>Professional workflow</strong> – Industry-standard format for Sony Alpha photographers',
          '• <strong>Metadata rich</strong> – Contains extensive EXIF, camera settings, and lens information',
          '• <strong>Future-proof</strong> – Raw files retain quality as processing algorithms improve'
        ],
        compatible_cameras_title: 'Compatible Cameras',
        compatible_cameras: [
          '• <strong>Sony Alpha 7 series</strong> – A7, A7R, A7S, A7II, A7RII, A7SII, A7III, A7RIII, A7RIV, A7IV, A7RV',
          '• <strong>Sony Alpha 9 series</strong> – A9, A9II, A9III',
          '• <strong>Sony Alpha 1</strong> – Flagship full-frame camera',
          '• <strong>Sony Alpha 6000 series</strong> – A6000, A6300, A6500, A6400, A6600, A6700',
          '• <strong>Sony Alpha 5000/5100 series</strong> – Entry-level and mid-range cameras'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Property',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.arw, .sr2, .srf' },
          { label: 'MIME Type', value: 'image/x-sony-arw' },
          { label: 'Developed By', value: 'Sony Corporation' },
          { label: 'Color Depth', value: '12-14 bits per channel' },
          { label: 'Compression', value: 'Lossless compression, uncompressed' },
          { label: 'Camera Support', value: 'Sony Alpha series cameras' }
        ]
      }
    }
  },
  pl: {
    viewers: {
      arw: {
        meta_title: 'Darmowy Podgląd ARW - Podglądaj Pliki RAW Sony Alpha Online',
        meta_description:
          'Otwieraj i przeglądaj zdjęcia ARW (Sony Alpha Raw) bezpośrednio w przeglądarce. Nasz darmowy podgląd ARW zapewnia wierne odwzorowanie z sensora, metadane, kontrolę powiększenia i obsługę wsadową do 20 plików RAW.',
        meta_keywords:
          'podgląd arw, sony alpha raw, sony arw, przeglądarka raw, podgląd arw online, sony camera raw, metadane raw',
        hero_title: 'Darmowy Podgląd ARW',
        hero_subtitle:
          'Przeglądaj zdjęcia Sony Alpha Raw (ARW) z pełną wiernością, bogatymi metadanymi i profesjonalnymi narzędziami podglądu.',
        upload_title: 'Prześlij Pliki ARW',
        upload_description:
          'Przeciągnij i upuść pliki ARW lub kliknij, aby je wybrać. Obsługa do 20 plików (100 MB każdy) z natychmiastowym, wysokiej jakości renderowaniem.',
        files_heading: 'Twoje pliki ARW ({{count}})',
        how_to_title: 'Jak Otworzyć Pliki ARW',
        how_to_description:
          '• <strong>Prześlij:</strong> Upuść pliki ARW w panelu lub kliknij, aby je wybrać z dysku.<br />' +
          '• <strong>Podgląd:</strong> Wybierz dowolny plik, aby uruchomić interaktywny podgląd z powiększaniem, obracaniem i narzędziami metadanych.<br />' +
          '• <strong>Pobierz:</strong> Zachowaj oryginalny plik RAW jednym kliknięciem, gdy go potrzebujesz.',
        buttons: {
          view: 'Otwórz Podgląd',
          download: 'Pobierz ARW',
          back: '← Powrót do wszystkich podglądów'
        },
        alerts: {
          file_too_large:
            'Plik jest za duży do podglądu ({{size}} MB). Maksymalny rozmiar to {{max}} MB. Pobierz plik zamiast tego.',
          popup_blocked: 'Zezwól na wyskakujące okna, aby wyświetlić plik ARW.',
          preview_failed: 'Nie udało się otworzyć podglądu ARW. Spróbuj ponownie lub pobierz plik.'
        },
        loading_window: {
          title: 'Ładowanie {{filename}}...',
          message: 'Przetwarzanie pliku ARW do podglądu...'
        },
        error_window: {
          title: 'Błąd Podglądu',
          message: 'Nie udało się wygenerować podglądu ARW. Spróbuj pobrać plik.',
          close: 'Zamknij'
        },
        features: [
          {
            title: '<strong>Wierne odwzorowanie z sensora</strong>',
            description:
              'Przeglądaj pliki ARW z precyzyjnym odwzorowaniem kolorów, balansem bieli i interpretacją ekspozycji z aparatów Sony Alpha.'
          },
          {
            title: '<strong>Bogate wyświetlanie metadanych</strong>',
            description:
              'Sprawdzaj ustawienia aparatu, dane EXIF, informacje o obiektywie i parametry zdjęcia osadzone w plikach ARW.'
          },
          {
            title: '<strong>Profesjonalne narzędzia podglądu</strong>',
            description:
              'Powiększaj, obracaj i analizuj swoje zdjęcia RAW za pomocą interaktywnych kontrolek przed przetwarzaniem lub konwersją.'
          }
        ],
        about_title: 'Informacje o Formacie ARW',
        about_intro:
          'ARW (Sony Alpha Raw) to zastrzeżony format obrazu RAW używany przez aparaty z serii Sony Alpha. Przechowuje nieprzetworzone dane z sensora bezpośrednio z aparatu, zachowując maksymalną jakość obrazu i umożliwiając szeroką elastyczność w postprodukcji. Pliki ARW zawierają dane o głębi kolorów 12-14 bitów i obsługują bezstratną kompresję, co czyni je idealnymi dla profesjonalnych workflow fotografii.',
        advantages_title: 'Najważniejsze Zalety',
        advantages: [
          '• <strong>Maksymalna jakość</strong> – Nieskompresowane dane z sensora zachowują każdy szczegół z aparatu',
          '• <strong>Elastyczność postprodukcji</strong> – Dostosowuj balans bieli, ekspozycję i kolory bez utraty jakości',
          '• <strong>Profesjonalny workflow</strong> – Format branżowy dla fotografów Sony Alpha',
          '• <strong>Bogate metadane</strong> – Zawiera rozległe dane EXIF, ustawienia aparatu i informacje o obiektywie',
          '• <strong>Przyszłościowe</strong> – Pliki RAW zachowują jakość, gdy algorytmy przetwarzania się poprawiają'
        ],
        compatible_cameras_title: 'Zgodne Aparaty',
        compatible_cameras: [
          '• <strong>Sony Alpha 7</strong> – A7, A7R, A7S, A7II, A7RII, A7SII, A7III, A7RIII, A7RIV, A7IV, A7RV',
          '• <strong>Sony Alpha 9</strong> – A9, A9II, A9III',
          '• <strong>Sony Alpha 1</strong> – Flagiowa pełnoklatkowa kamera',
          '• <strong>Sony Alpha 6000</strong> – A6000, A6300, A6500, A6400, A6600, A6700',
          '• <strong>Sony Alpha 5000/5100</strong> – Aparaty podstawowe i średniej klasy'
        ],
        specs_title: 'Specyfikacja Techniczna',
        specs_header_label: 'Właściwość',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie Pliku', value: '.arw, .sr2, .srf' },
          { label: 'Typ MIME', value: 'image/x-sony-arw' },
          { label: 'Opracowany Przez', value: 'Sony Corporation' },
          { label: 'Głębia Kolorów', value: '12-14 bitów na kanał' },
          { label: 'Kompresja', value: 'Bezstratna kompresja, nieskompresowany' },
          { label: 'Obsługa Aparatów', value: 'Aparaty z serii Sony Alpha' }
        ]
      }
    }
  },
  de: {
    viewers: {
      arw: {
        meta_title: 'Kostenloser ARW Viewer – Sony Alpha Raw Dateien Online Anzeigen',
        meta_description:
          'Öffnen und überprüfen Sie ARW (Sony Alpha Raw) Fotos direkt in Ihrem Browser. Unser kostenloser ARW Viewer liefert sensorgenaues Rendering, Metadaten-Einblicke, Zoom-Kontrollen und Batch-Unterstützung für bis zu 20 Raw-Dateien.',
        meta_keywords:
          'arw viewer, sony alpha raw viewer, sony arw, raw foto viewer, online arw vorschau, sony kamera raw, raw metadaten',
        hero_title: 'Kostenloser ARW Viewer',
        hero_subtitle:
          'Überprüfen Sie Sony Alpha Raw (ARW) Fotos mit voller Genauigkeit, reichhaltigen Metadaten und professionellen Vorschau-Tools.',
        upload_title: 'ARW Dateien Hochladen',
        upload_description:
          'Ziehen Sie Ihre ARW Raw-Dateien hinein oder klicken Sie zum Durchsuchen. Unterstützt bis zu 20 Dateien (100 MB jeweils) mit sofortigem, hochwertigem Rendering.',
        files_heading: 'Ihre ARW Dateien ({{count}})',
        how_to_title: 'Wie Man ARW Dateien Anzeigt',
        how_to_description:
          '• <strong>Hochladen:</strong> Lassen Sie Ihre ARW Dateien in das Panel fallen oder klicken Sie zum Durchsuchen von der Festplatte.<br />' +
          '• <strong>Vorschau:</strong> Wählen Sie eine beliebige Datei aus, um den interaktiven Viewer mit Zoom, Rotation und Metadaten-Tools zu starten.<br />' +
          '• <strong>Herunterladen:</strong> Bewahren Sie die ursprüngliche Raw-Datei mit einem Klick auf, wann immer Sie sie benötigen.',
        buttons: {
          view: 'Vorschau Öffnen',
          download: 'ARW Herunterladen',
          back: '← Zurück zu allen Viewern'
        },
        alerts: {
          file_too_large:
            'Datei ist zu groß für die Vorschau ({{size}} MB). Maximale Größe beträgt {{max}} MB. Bitte laden Sie die Datei stattdessen herunter.',
          popup_blocked: 'Bitte erlauben Sie Pop-ups, um die ARW Datei anzuzeigen.',
          preview_failed: 'ARW Vorschau konnte nicht geöffnet werden. Bitte versuchen Sie es erneut oder laden Sie die Datei herunter.'
        },
        loading_window: {
          title: 'Lade {{filename}}...',
          message: 'ARW Datei für Vorschau wird verarbeitet...'
        },
        error_window: {
          title: 'Vorschau Fehler',
          message: 'ARW Vorschau konnte nicht generiert werden. Bitte versuchen Sie stattdessen, die Datei herunterzuladen.',
          close: 'Schließen'
        },
        features: [
          {
            title: '<strong>Sensorgenaues Rendering</strong>',
            description:
              'Betrachten Sie ARW Dateien mit präziser Farbwiedergabe, Weißabgleich und Belichtungsinterpretation von Sony Alpha Kameras.'
          },
          {
            title: '<strong>Reichhaltige Metadaten-Anzeige</strong>',
            description:
              'Überprüfen Sie Kameraeinstellungen, EXIF-Daten, Objektivinformationen und Aufnahmeparameter, die in Ihren ARW Dateien eingebettet sind.'
          },
          {
            title: '<strong>Professionelle Vorschau-Tools</strong>',
            description:
              'Zoomen, rotieren und analysieren Sie Ihre Raw-Bilder mit interaktiven Steuerelementen vor der Verarbeitung oder Konvertierung.'
          }
        ],
        about_title: 'Über ARW Format',
        about_intro:
          'ARW (Sony Alpha Raw) ist ein proprietäres Raw-Bildformat, das von Sony Alpha Serienkameras verwendet wird. Es speichert unverarbeitete Sensordaten direkt von der Kamera und bewahrt maximale Bildqualität und ermöglicht umfangreiche Nachbearbeitungsflexibilität. ARW Dateien enthalten 12-14 Bit Farbtiefendaten und unterstützen verlustfreie Komprimierung, was sie ideal für professionelle Fotografie-Workflows macht.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          '• <strong>Maximale Qualität</strong> – Unkomprimierte Sensordaten bewahren jedes Detail von Ihrer Kamera',
          '• <strong>Nachbearbeitungsflexibilität</strong> – Passen Sie Weißabgleich, Belichtung und Farben ohne Qualitätsverlust an',
          '• <strong>Professioneller Workflow</strong> – Industriestandard-Format für Sony Alpha Fotografen',
          '• <strong>Metadaten-reich</strong> – Enthält umfangreiche EXIF, Kameraeinstellungen und Objektivinformationen',
          '• <strong>Zukunftssicher</strong> – Raw-Dateien behalten Qualität, wenn sich Verarbeitungsalgorithmen verbessern'
        ],
        compatible_cameras_title: 'Kompatible Kameras',
        compatible_cameras: [
          '• <strong>Sony Alpha 7 Serie</strong> – A7, A7R, A7S, A7II, A7RII, A7SII, A7III, A7RIII, A7RIV, A7IV, A7RV',
          '• <strong>Sony Alpha 9 Serie</strong> – A9, A9II, A9III',
          '• <strong>Sony Alpha 1</strong> – Flaggschiff Vollformat-Kamera',
          '• <strong>Sony Alpha 6000 Serie</strong> – A6000, A6300, A6500, A6400, A6600, A6700',
          '• <strong>Sony Alpha 5000/5100 Serie</strong> – Einsteiger- und Mittelklasse-Kameras'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Eigenschaft',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateiendung', value: '.arw, .sr2, .srf' },
          { label: 'MIME Typ', value: 'image/x-sony-arw' },
          { label: 'Entwickelt Von', value: 'Sony Corporation' },
          { label: 'Farbtiefe', value: '12-14 Bits pro Kanal' },
          { label: 'Komprimierung', value: 'Verlustfreie Komprimierung, unkomprimiert' },
          { label: 'Kamera-Unterstützung', value: 'Sony Alpha Serienkameras' }
        ]
      }
    }
  }
};

Object.entries(resources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

