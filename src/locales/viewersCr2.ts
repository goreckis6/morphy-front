import i18n // from '../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type ViewerCr2Translations = {
  viewers: {
    cr2: {
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

const resources: Record<string, ViewerCr2Translations> = {
  en: {
    viewers: {
      cr2: {
        meta_title: 'Free CR2 Viewer - Preview Canon Raw Files Online',
        meta_description:
          'Open and inspect CR2 (Canon Raw) photos directly in your browser. Our free CR2 viewer delivers sensor-accurate rendering, metadata insights, zoom controls, and batch support for up to 20 raw files.',
        meta_keywords:
          'cr2 viewer, canon raw viewer, canon cr2, raw photo viewer, online cr2 preview, canon camera raw, raw metadata',
        hero_title: 'Free CR2 Viewer',
        hero_subtitle:
          'Inspect Canon Raw (CR2) photos with full fidelity, rich metadata, and professional preview tools.',
        upload_title: 'Upload CR2 Files',
        upload_description:
          'Drag and drop your CR2 raws or click to browse. Supports up to 20 files (100MB each) with instant, high-quality rendering.',
        files_heading: 'Your CR2 Files ({{count}})',
        how_to_title: 'How to View CR2 Files',
        how_to_description:
          '• <strong>Upload:</strong> Drop your CR2 files into the panel or click to browse from disk.<br />' +
          '• <strong>Preview:</strong> Select any file to launch the interactive viewer with zoom, rotate, and metadata tools.<br />' +
          '• <strong>Download:</strong> Keep the original raw file with a single click whenever you need it.',
        buttons: {
          view: 'Open Preview',
          download: 'Download CR2',
          back: '← Back to All Viewers'
        },
        alerts: {
          file_too_large:
            'File is too large for preview ({{size}} MB). Maximum size is {{max}} MB. Please download the file instead.',
          popup_blocked: 'Please allow pop-ups to view the CR2 file.',
          preview_failed: 'Failed to open CR2 preview. Please try again or download the file.'
        },
        loading_window: {
          title: 'Loading {{filename}}...',
          message: 'Processing CR2 file for preview...'
        },
        error_window: {
          title: 'Preview Error',
          message: 'Failed to generate CR2 preview. Please try downloading the file instead.',
          close: 'Close'
        },
        features: [
          {
            title: '<strong>Sensor-accurate rendering</strong>',
            description:
              'View CR2 files with precise color reproduction, white balance, and exposure interpretation from Canon EOS cameras.'
          },
          {
            title: '<strong>Rich metadata display</strong>',
            description:
              'Inspect camera settings, EXIF data, lens information, and shooting parameters embedded in your CR2 files.'
          },
          {
            title: '<strong>Professional preview tools</strong>',
            description:
              'Zoom, rotate, and analyze your raw images with interactive controls before processing or conversion.'
          }
        ],
        about_title: 'About CR2 Format',
        about_intro:
          'CR2 (Canon Raw Version 2) is a proprietary raw image format used by Canon EOS digital cameras. It stores unprocessed sensor data directly from the camera, preserving maximum image quality and allowing for extensive post-processing flexibility. CR2 files contain 14-bit color depth data and support lossless compression, making them ideal for professional photography workflows and achieving the highest image quality.',
        advantages_title: 'Key Advantages',
        advantages: [
          '• <strong>Maximum quality</strong> – Uncompressed sensor data preserves every detail from your camera',
          '• <strong>Post-processing flexibility</strong> – Adjust white balance, exposure, and colors without quality loss',
          '• <strong>Professional workflow</strong> – Industry-standard format for Canon photographers',
          '• <strong>Metadata rich</strong> – Contains extensive EXIF, camera settings, and lens information',
          '• <strong>High bit depth</strong> – 14-bit color depth provides superior color gradation and dynamic range'
        ],
        compatible_cameras_title: 'Compatible Cameras',
        compatible_cameras: [
          '• <strong>Canon EOS DSLR series</strong> – EOS 5D, 6D, 7D, 80D, 90D, and other DSLR models',
          '• <strong>Canon EOS R series</strong> – EOS R, R5, R6, R7, R8, R10, and other mirrorless models',
          '• <strong>Canon EOS M series</strong> – EOS M50, M6, M200, and other mirrorless compact cameras',
          '• <strong>Canon PowerShot series</strong> – Select models with raw capability',
          '• <strong>Canon professional cameras</strong> – EOS-1D X, EOS-1D C, and flagship models'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Property',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.cr2' },
          { label: 'MIME Type', value: 'image/x-canon-cr2' },
          { label: 'Developed By', value: 'Canon Inc.' },
          { label: 'Color Depth', value: '14 bits per channel' },
          { label: 'Compression', value: 'Lossless compression' },
          { label: 'Camera Support', value: 'Canon EOS digital cameras' }
        ]
      }
    }
  },
  pl: {
    viewers: {
      cr2: {
        meta_title: 'Darmowy Podgląd CR2 - Podglądaj Pliki RAW Canon Online',
        meta_description:
          'Otwieraj i przeglądaj zdjęcia CR2 (Canon Raw) bezpośrednio w przeglądarce. Nasz darmowy podgląd CR2 zapewnia wierne odwzorowanie z sensora, metadane, kontrolę powiększenia i obsługę wsadową do 20 plików RAW.',
        meta_keywords:
          'podgląd cr2, canon raw, canon cr2, przeglądarka raw, podgląd cr2 online, canon camera raw, metadane raw',
        hero_title: 'Darmowy Podgląd CR2',
        hero_subtitle:
          'Przeglądaj zdjęcia Canon Raw (CR2) z pełną wiernością, bogatymi metadanymi i profesjonalnymi narzędziami podglądu.',
        upload_title: 'Prześlij Pliki CR2',
        upload_description:
          'Przeciągnij i upuść pliki CR2 lub kliknij, aby je wybrać. Obsługa do 20 plików (100 MB każdy) z natychmiastowym, wysokiej jakości renderowaniem.',
        files_heading: 'Twoje pliki CR2 ({{count}})',
        how_to_title: 'Jak Otworzyć Pliki CR2',
        how_to_description:
          '• <strong>Prześlij:</strong> Upuść pliki CR2 w panelu lub kliknij, aby je wybrać z dysku.<br />' +
          '• <strong>Podgląd:</strong> Wybierz dowolny plik, aby uruchomić interaktywny podgląd z powiększaniem, obracaniem i narzędziami metadanych.<br />' +
          '• <strong>Pobierz:</strong> Zachowaj oryginalny plik RAW jednym kliknięciem, gdy go potrzebujesz.',
        buttons: {
          view: 'Otwórz Podgląd',
          download: 'Pobierz CR2',
          back: '← Powrót do wszystkich podglądów'
        },
        alerts: {
          file_too_large:
            'Plik jest za duży do podglądu ({{size}} MB). Maksymalny rozmiar to {{max}} MB. Pobierz plik zamiast tego.',
          popup_blocked: 'Zezwól na wyskakujące okna, aby wyświetlić plik CR2.',
          preview_failed: 'Nie udało się otworzyć podglądu CR2. Spróbuj ponownie lub pobierz plik.'
        },
        loading_window: {
          title: 'Ładowanie {{filename}}...',
          message: 'Przetwarzanie pliku CR2 do podglądu...'
        },
        error_window: {
          title: 'Błąd Podglądu',
          message: 'Nie udało się wygenerować podglądu CR2. Spróbuj pobrać plik.',
          close: 'Zamknij'
        },
        features: [
          {
            title: '<strong>Wierne odwzorowanie z sensora</strong>',
            description:
              'Przeglądaj pliki CR2 z precyzyjnym odwzorowaniem kolorów, balansem bieli i interpretacją ekspozycji z aparatów Canon EOS.'
          },
          {
            title: '<strong>Bogate wyświetlanie metadanych</strong>',
            description:
              'Sprawdzaj ustawienia aparatu, dane EXIF, informacje o obiektywie i parametry zdjęcia osadzone w plikach CR2.'
          },
          {
            title: '<strong>Profesjonalne narzędzia podglądu</strong>',
            description:
              'Powiększaj, obracaj i analizuj swoje zdjęcia RAW za pomocą interaktywnych kontrolek przed przetwarzaniem lub konwersją.'
          }
        ],
        about_title: 'Informacje o Formacie CR2',
        about_intro:
          'CR2 (Canon Raw Version 2) to zastrzeżony format obrazu RAW używany przez aparaty cyfrowe Canon EOS. Przechowuje nieprzetworzone dane z sensora bezpośrednio z aparatu, zachowując maksymalną jakość obrazu i umożliwiając szeroką elastyczność w postprodukcji. Pliki CR2 zawierają dane o głębi kolorów 14 bitów i obsługują bezstratną kompresję, co czyni je idealnymi dla profesjonalnych workflow fotografii i osiągania najwyższej jakości obrazu.',
        advantages_title: 'Najważniejsze Zalety',
        advantages: [
          '• <strong>Maksymalna jakość</strong> – Nieskompresowane dane z sensora zachowują każdy szczegół z aparatu',
          '• <strong>Elastyczność postprodukcji</strong> – Dostosowuj balans bieli, ekspozycję i kolory bez utraty jakości',
          '• <strong>Profesjonalny workflow</strong> – Format branżowy dla fotografów Canon',
          '• <strong>Bogate metadane</strong> – Zawiera rozległe dane EXIF, ustawienia aparatu i informacje o obiektywie',
          '• <strong>Wysoka głębia bitowa</strong> – 14-bitowa głębia kolorów zapewnia lepszą gradację kolorów i zakres dynamiczny'
        ],
        compatible_cameras_title: 'Zgodne Aparaty',
        compatible_cameras: [
          '• <strong>Canon EOS DSLR</strong> – EOS 5D, 6D, 7D, 80D, 90D i inne modele DSLR',
          '• <strong>Canon EOS R</strong> – EOS R, R5, R6, R7, R8, R10 i inne modele bezlusterkowe',
          '• <strong>Canon EOS M</strong> – EOS M50, M6, M200 i inne bezlusterkowe aparaty kompaktowe',
          '• <strong>Canon PowerShot</strong> – Wybrane modele z możliwością RAW',
          '• <strong>Canon profesjonalne</strong> – EOS-1D X, EOS-1D C i modele flagowe'
        ],
        specs_title: 'Specyfikacja Techniczna',
        specs_header_label: 'Właściwość',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie Pliku', value: '.cr2' },
          { label: 'Typ MIME', value: 'image/x-canon-cr2' },
          { label: 'Opracowany Przez', value: 'Canon Inc.' },
          { label: 'Głębia Kolorów', value: '14 bitów na kanał' },
          { label: 'Kompresja', value: 'Bezstratna kompresja' },
          { label: 'Obsługa Aparatów', value: 'Aparaty cyfrowe Canon EOS' }
        ]
      }
    }
  },
  de: {
    viewers: {
      cr2: {
        meta_title: 'Kostenloser CR2 Viewer – Canon Raw Dateien Online Anzeigen',
        meta_description:
          'Öffnen und überprüfen Sie CR2 (Canon Raw) Fotos direkt in Ihrem Browser. Unser kostenloser CR2 Viewer liefert sensorgenaues Rendering, Metadaten-Einblicke, Zoom-Kontrollen und Batch-Unterstützung für bis zu 20 Raw-Dateien.',
        meta_keywords:
          'cr2 viewer, canon raw viewer, canon cr2, raw foto viewer, online cr2 vorschau, canon kamera raw, raw metadaten',
        hero_title: 'Kostenloser CR2 Viewer',
        hero_subtitle:
          'Überprüfen Sie Canon Raw (CR2) Fotos mit voller Genauigkeit, reichhaltigen Metadaten und professionellen Vorschau-Tools.',
        upload_title: 'CR2 Dateien Hochladen',
        upload_description:
          'Ziehen Sie Ihre CR2 Raw-Dateien hinein oder klicken Sie zum Durchsuchen. Unterstützt bis zu 20 Dateien (100 MB jeweils) mit sofortigem, hochwertigem Rendering.',
        files_heading: 'Ihre CR2 Dateien ({{count}})',
        how_to_title: 'Wie Man CR2 Dateien Anzeigt',
        how_to_description:
          '• <strong>Hochladen:</strong> Lassen Sie Ihre CR2 Dateien in das Panel fallen oder klicken Sie zum Durchsuchen von der Festplatte.<br />' +
          '• <strong>Vorschau:</strong> Wählen Sie eine beliebige Datei aus, um den interaktiven Viewer mit Zoom, Rotation und Metadaten-Tools zu starten.<br />' +
          '• <strong>Herunterladen:</strong> Bewahren Sie die ursprüngliche Raw-Datei mit einem Klick auf, wann immer Sie sie benötigen.',
        buttons: {
          view: 'Vorschau Öffnen',
          download: 'CR2 Herunterladen',
          back: '← Zurück zu allen Viewern'
        },
        alerts: {
          file_too_large:
            'Datei ist zu groß für die Vorschau ({{size}} MB). Maximale Größe beträgt {{max}} MB. Bitte laden Sie die Datei stattdessen herunter.',
          popup_blocked: 'Bitte erlauben Sie Pop-ups, um die CR2 Datei anzuzeigen.',
          preview_failed: 'CR2 Vorschau konnte nicht geöffnet werden. Bitte versuchen Sie es erneut oder laden Sie die Datei herunter.'
        },
        loading_window: {
          title: 'Lade {{filename}}...',
          message: 'CR2 Datei für Vorschau wird verarbeitet...'
        },
        error_window: {
          title: 'Vorschau Fehler',
          message: 'CR2 Vorschau konnte nicht generiert werden. Bitte versuchen Sie stattdessen, die Datei herunterzuladen.',
          close: 'Schließen'
        },
        features: [
          {
            title: '<strong>Sensorgenaues Rendering</strong>',
            description:
              'Betrachten Sie CR2 Dateien mit präziser Farbwiedergabe, Weißabgleich und Belichtungsinterpretation von Canon EOS Kameras.'
          },
          {
            title: '<strong>Reichhaltige Metadaten-Anzeige</strong>',
            description:
              'Überprüfen Sie Kameraeinstellungen, EXIF-Daten, Objektivinformationen und Aufnahmeparameter, die in Ihren CR2 Dateien eingebettet sind.'
          },
          {
            title: '<strong>Professionelle Vorschau-Tools</strong>',
            description:
              'Zoomen, rotieren und analysieren Sie Ihre Raw-Bilder mit interaktiven Steuerelementen vor der Verarbeitung oder Konvertierung.'
          }
        ],
        about_title: 'Über CR2 Format',
        about_intro:
          'CR2 (Canon Raw Version 2) ist ein proprietäres Raw-Bildformat, das von Canon EOS Digitalkameras verwendet wird. Es speichert unverarbeitete Sensordaten direkt von der Kamera und bewahrt maximale Bildqualität und ermöglicht umfangreiche Nachbearbeitungsflexibilität. CR2 Dateien enthalten 14-Bit Farbtiefendaten und unterstützen verlustfreie Komprimierung, was sie ideal für professionelle Fotografie-Workflows und das Erreichen der höchsten Bildqualität macht.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          '• <strong>Maximale Qualität</strong> – Unkomprimierte Sensordaten bewahren jedes Detail von Ihrer Kamera',
          '• <strong>Nachbearbeitungsflexibilität</strong> – Passen Sie Weißabgleich, Belichtung und Farben ohne Qualitätsverlust an',
          '• <strong>Professioneller Workflow</strong> – Industriestandard-Format für Canon Fotografen',
          '• <strong>Metadaten-reich</strong> – Enthält umfangreiche EXIF, Kameraeinstellungen und Objektivinformationen',
          '• <strong>Hohe Bittiefe</strong> – 14-Bit Farbtiefe bietet überlegene Farbabstufung und dynamischen Bereich'
        ],
        compatible_cameras_title: 'Kompatible Kameras',
        compatible_cameras: [
          '• <strong>Canon EOS DSLR Serie</strong> – EOS 5D, 6D, 7D, 80D, 90D und andere DSLR-Modelle',
          '• <strong>Canon EOS R Serie</strong> – EOS R, R5, R6, R7, R8, R10 und andere spiegellose Modelle',
          '• <strong>Canon EOS M Serie</strong> – EOS M50, M6, M200 und andere spiegellose Kompaktkameras',
          '• <strong>Canon PowerShot Serie</strong> – Ausgewählte Modelle mit Raw-Fähigkeit',
          '• <strong>Canon professionelle Kameras</strong> – EOS-1D X, EOS-1D C und Flaggschiff-Modelle'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Eigenschaft',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateiendung', value: '.cr2' },
          { label: 'MIME Typ', value: 'image/x-canon-cr2' },
          { label: 'Entwickelt Von', value: 'Canon Inc.' },
          { label: 'Farbtiefe', value: '14 Bits pro Kanal' },
          { label: 'Komprimierung', value: 'Verlustfreie Komprimierung' },
          { label: 'Kamera-Unterstützung', value: 'Canon EOS Digitalkameras' }
        ]
      }
    }
  }
};

Object.entries(resources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

