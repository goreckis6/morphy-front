import i18n // from '../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type ViewerDcrTranslations = {
  viewers: {
    dcr: {
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

const resources: Record<string, ViewerDcrTranslations> = {
  en: {
    viewers: {
      dcr: {
        meta_title: 'Free DCR Viewer - Preview Kodak Raw Files Online',
        meta_description:
          'Open and inspect DCR (Kodak Raw) photos directly in your browser. Our free DCR viewer delivers sensor-accurate rendering, metadata insights, zoom controls, and batch support for up to 20 raw files.',
        meta_keywords:
          'dcr viewer, kodak raw viewer, kodak dcr, raw photo viewer, online dcr preview, kodak camera raw, raw metadata',
        hero_title: 'Free DCR Viewer',
        hero_subtitle:
          'Inspect Kodak Raw (DCR) photos with full fidelity, rich metadata, and professional preview tools.',
        upload_title: 'Upload DCR Files',
        upload_description:
          'Drag and drop your DCR raws or click to browse. Supports up to 20 files (100MB each) with instant, high-quality rendering.',
        files_heading: 'Your DCR Files ({{count}})',
        how_to_title: 'How to View DCR Files',
        how_to_description:
          '• <strong>Upload:</strong> Drop your DCR files into the panel or click to browse from disk.<br />' +
          '• <strong>Preview:</strong> Select any file to launch the interactive viewer with zoom, rotate, and metadata tools.<br />' +
          '• <strong>Download:</strong> Keep the original raw file with a single click whenever you need it.',
        buttons: {
          view: 'Open Preview',
          download: 'Download DCR',
          back: '← Back to All Viewers'
        },
        alerts: {
          file_too_large:
            'File is too large for preview ({{size}} MB). Maximum size is {{max}} MB. Please download the file instead.',
          popup_blocked: 'Please allow pop-ups to view the DCR file.',
          preview_failed: 'Failed to open DCR preview. Please try again or download the file.'
        },
        loading_window: {
          title: 'Loading {{filename}}...',
          message: 'Processing DCR file for preview...'
        },
        error_window: {
          title: 'Preview Error',
          message: 'Failed to generate DCR preview. Please try downloading the file instead.',
          close: 'Close'
        },
        features: [
          {
            title: '<strong>Sensor-accurate rendering</strong>',
            description:
              'View DCR files with precise color reproduction, white balance, and exposure interpretation from Kodak digital cameras.'
          },
          {
            title: '<strong>Rich metadata display</strong>',
            description:
              'Inspect camera settings, EXIF data, lens information, and shooting parameters embedded in your DCR files.'
          },
          {
            title: '<strong>Professional preview tools</strong>',
            description:
              'Zoom, rotate, and analyze your raw images with interactive controls before processing or conversion.'
          }
        ],
        about_title: 'About DCR Format',
        about_intro:
          'DCR (Kodak Raw) is a proprietary raw image format used by Kodak digital cameras. It stores unprocessed sensor data directly from the camera, preserving maximum image quality and allowing for extensive post-processing flexibility. DCR files contain high-bit-depth color data and support lossless compression, making them ideal for professional photography workflows and archival purposes.',
        advantages_title: 'Key Advantages',
        advantages: [
          '• <strong>Maximum quality</strong> – Uncompressed sensor data preserves every detail from your camera',
          '• <strong>Post-processing flexibility</strong> – Adjust white balance, exposure, and colors without quality loss',
          '• <strong>Professional workflow</strong> – Industry-standard format for Kodak photographers',
          '• <strong>Metadata rich</strong> – Contains extensive EXIF, camera settings, and lens information',
          '• <strong>Archival quality</strong> – Raw files retain quality for long-term preservation'
        ],
        compatible_cameras_title: 'Compatible Cameras',
        compatible_cameras: [
          '• <strong>Kodak EasyShare series</strong> – Various models including Z series, M series, and V series',
          '• <strong>Kodak Professional cameras</strong> – DCS Pro series and professional digital cameras',
          '• <strong>Kodak digital cameras</strong> – Legacy models that support DCR raw format',
          '• <strong>Kodak compact cameras</strong> – Select models with raw capability',
          '• <strong>Kodak bridge cameras</strong> – Advanced models with raw support'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Property',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.dcr' },
          { label: 'MIME Type', value: 'image/x-kodak-dcr' },
          { label: 'Developed By', value: 'Kodak (Eastman Kodak Company)' },
          { label: 'Color Depth', value: '12-14 bits per channel' },
          { label: 'Compression', value: 'Lossless compression' },
          { label: 'Camera Support', value: 'Kodak digital cameras' }
        ]
      }
    }
  },
  pl: {
    viewers: {
      dcr: {
        meta_title: 'Darmowy Podgląd DCR - Podglądaj Pliki RAW Kodak Online',
        meta_description:
          'Otwieraj i przeglądaj zdjęcia DCR (Kodak Raw) bezpośrednio w przeglądarce. Nasz darmowy podgląd DCR zapewnia wierne odwzorowanie z sensora, metadane, kontrolę powiększenia i obsługę wsadową do 20 plików RAW.',
        meta_keywords:
          'podgląd dcr, kodak raw, kodak dcr, przeglądarka raw, podgląd dcr online, kodak camera raw, metadane raw',
        hero_title: 'Darmowy Podgląd DCR',
        hero_subtitle:
          'Przeglądaj zdjęcia Kodak Raw (DCR) z pełną wiernością, bogatymi metadanymi i profesjonalnymi narzędziami podglądu.',
        upload_title: 'Prześlij Pliki DCR',
        upload_description:
          'Przeciągnij i upuść pliki DCR lub kliknij, aby je wybrać. Obsługa do 20 plików (100 MB każdy) z natychmiastowym, wysokiej jakości renderowaniem.',
        files_heading: 'Twoje pliki DCR ({{count}})',
        how_to_title: 'Jak Otworzyć Pliki DCR',
        how_to_description:
          '• <strong>Prześlij:</strong> Upuść pliki DCR w panelu lub kliknij, aby je wybrać z dysku.<br />' +
          '• <strong>Podgląd:</strong> Wybierz dowolny plik, aby uruchomić interaktywny podgląd z powiększaniem, obracaniem i narzędziami metadanych.<br />' +
          '• <strong>Pobierz:</strong> Zachowaj oryginalny plik RAW jednym kliknięciem, gdy go potrzebujesz.',
        buttons: {
          view: 'Otwórz Podgląd',
          download: 'Pobierz DCR',
          back: '← Powrót do wszystkich podglądów'
        },
        alerts: {
          file_too_large:
            'Plik jest za duży do podglądu ({{size}} MB). Maksymalny rozmiar to {{max}} MB. Pobierz plik zamiast tego.',
          popup_blocked: 'Zezwól na wyskakujące okna, aby wyświetlić plik DCR.',
          preview_failed: 'Nie udało się otworzyć podglądu DCR. Spróbuj ponownie lub pobierz plik.'
        },
        loading_window: {
          title: 'Ładowanie {{filename}}...',
          message: 'Przetwarzanie pliku DCR do podglądu...'
        },
        error_window: {
          title: 'Błąd Podglądu',
          message: 'Nie udało się wygenerować podglądu DCR. Spróbuj pobrać plik.',
          close: 'Zamknij'
        },
        features: [
          {
            title: '<strong>Wierne odwzorowanie z sensora</strong>',
            description:
              'Przeglądaj pliki DCR z precyzyjnym odwzorowaniem kolorów, balansem bieli i interpretacją ekspozycji z aparatów cyfrowych Kodak.'
          },
          {
            title: '<strong>Bogate wyświetlanie metadanych</strong>',
            description:
              'Sprawdzaj ustawienia aparatu, dane EXIF, informacje o obiektywie i parametry zdjęcia osadzone w plikach DCR.'
          },
          {
            title: '<strong>Profesjonalne narzędzia podglądu</strong>',
            description:
              'Powiększaj, obracaj i analizuj swoje zdjęcia RAW za pomocą interaktywnych kontrolek przed przetwarzaniem lub konwersją.'
          }
        ],
        about_title: 'Informacje o Formacie DCR',
        about_intro:
          'DCR (Kodak Raw) to zastrzeżony format obrazu RAW używany przez aparaty cyfrowe Kodak. Przechowuje nieprzetworzone dane z sensora bezpośrednio z aparatu, zachowując maksymalną jakość obrazu i umożliwiając szeroką elastyczność w postprodukcji. Pliki DCR zawierają dane o wysokiej głębi bitowej kolorów i obsługują bezstratną kompresję, co czyni je idealnymi dla profesjonalnych workflow fotografii i celów archiwizacji.',
        advantages_title: 'Najważniejsze Zalety',
        advantages: [
          '• <strong>Maksymalna jakość</strong> – Nieskompresowane dane z sensora zachowują każdy szczegół z aparatu',
          '• <strong>Elastyczność postprodukcji</strong> – Dostosowuj balans bieli, ekspozycję i kolory bez utraty jakości',
          '• <strong>Profesjonalny workflow</strong> – Format branżowy dla fotografów Kodak',
          '• <strong>Bogate metadane</strong> – Zawiera rozległe dane EXIF, ustawienia aparatu i informacje o obiektywie',
          '• <strong>Jakość archiwalna</strong> – Pliki RAW zachowują jakość dla długoterminowego przechowywania'
        ],
        compatible_cameras_title: 'Zgodne Aparaty',
        compatible_cameras: [
          '• <strong>Kodak EasyShare</strong> – Różne modele, w tym seria Z, M i V',
          '• <strong>Kodak Professional</strong> – Seria DCS Pro i profesjonalne aparaty cyfrowe',
          '• <strong>Aparaty cyfrowe Kodak</strong> – Starsze modele obsługujące format RAW DCR',
          '• <strong>Kodak kompaktowe</strong> – Wybrane modele z możliwością RAW',
          '• <strong>Kodak bridge</strong> – Zaawansowane modele z obsługą RAW'
        ],
        specs_title: 'Specyfikacja Techniczna',
        specs_header_label: 'Właściwość',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie Pliku', value: '.dcr' },
          { label: 'Typ MIME', value: 'image/x-kodak-dcr' },
          { label: 'Opracowany Przez', value: 'Kodak (Eastman Kodak Company)' },
          { label: 'Głębia Kolorów', value: '12-14 bitów na kanał' },
          { label: 'Kompresja', value: 'Bezstratna kompresja' },
          { label: 'Obsługa Aparatów', value: 'Aparaty cyfrowe Kodak' }
        ]
      }
    }
  },
  de: {
    viewers: {
      dcr: {
        meta_title: 'Kostenloser DCR Viewer – Kodak Raw Dateien Online Anzeigen',
        meta_description:
          'Öffnen und überprüfen Sie DCR (Kodak Raw) Fotos direkt in Ihrem Browser. Unser kostenloser DCR Viewer liefert sensorgenaues Rendering, Metadaten-Einblicke, Zoom-Kontrollen und Batch-Unterstützung für bis zu 20 Raw-Dateien.',
        meta_keywords:
          'dcr viewer, kodak raw viewer, kodak dcr, raw foto viewer, online dcr vorschau, kodak kamera raw, raw metadaten',
        hero_title: 'Kostenloser DCR Viewer',
        hero_subtitle:
          'Überprüfen Sie Kodak Raw (DCR) Fotos mit voller Genauigkeit, reichhaltigen Metadaten und professionellen Vorschau-Tools.',
        upload_title: 'DCR Dateien Hochladen',
        upload_description:
          'Ziehen Sie Ihre DCR Raw-Dateien hinein oder klicken Sie zum Durchsuchen. Unterstützt bis zu 20 Dateien (100 MB jeweils) mit sofortigem, hochwertigem Rendering.',
        files_heading: 'Ihre DCR Dateien ({{count}})',
        how_to_title: 'Wie Man DCR Dateien Anzeigt',
        how_to_description:
          '• <strong>Hochladen:</strong> Lassen Sie Ihre DCR Dateien in das Panel fallen oder klicken Sie zum Durchsuchen von der Festplatte.<br />' +
          '• <strong>Vorschau:</strong> Wählen Sie eine beliebige Datei aus, um den interaktiven Viewer mit Zoom, Rotation und Metadaten-Tools zu starten.<br />' +
          '• <strong>Herunterladen:</strong> Bewahren Sie die ursprüngliche Raw-Datei mit einem Klick auf, wann immer Sie sie benötigen.',
        buttons: {
          view: 'Vorschau Öffnen',
          download: 'DCR Herunterladen',
          back: '← Zurück zu allen Viewern'
        },
        alerts: {
          file_too_large:
            'Datei ist zu groß für die Vorschau ({{size}} MB). Maximale Größe beträgt {{max}} MB. Bitte laden Sie die Datei stattdessen herunter.',
          popup_blocked: 'Bitte erlauben Sie Pop-ups, um die DCR Datei anzuzeigen.',
          preview_failed: 'DCR Vorschau konnte nicht geöffnet werden. Bitte versuchen Sie es erneut oder laden Sie die Datei herunter.'
        },
        loading_window: {
          title: 'Lade {{filename}}...',
          message: 'DCR Datei für Vorschau wird verarbeitet...'
        },
        error_window: {
          title: 'Vorschau Fehler',
          message: 'DCR Vorschau konnte nicht generiert werden. Bitte versuchen Sie stattdessen, die Datei herunterzuladen.',
          close: 'Schließen'
        },
        features: [
          {
            title: '<strong>Sensorgenaues Rendering</strong>',
            description:
              'Betrachten Sie DCR Dateien mit präziser Farbwiedergabe, Weißabgleich und Belichtungsinterpretation von Kodak Digitalkameras.'
          },
          {
            title: '<strong>Reichhaltige Metadaten-Anzeige</strong>',
            description:
              'Überprüfen Sie Kameraeinstellungen, EXIF-Daten, Objektivinformationen und Aufnahmeparameter, die in Ihren DCR Dateien eingebettet sind.'
          },
          {
            title: '<strong>Professionelle Vorschau-Tools</strong>',
            description:
              'Zoomen, rotieren und analysieren Sie Ihre Raw-Bilder mit interaktiven Steuerelementen vor der Verarbeitung oder Konvertierung.'
          }
        ],
        about_title: 'Über DCR Format',
        about_intro:
          'DCR (Kodak Raw) ist ein proprietäres Raw-Bildformat, das von Kodak Digitalkameras verwendet wird. Es speichert unverarbeitete Sensordaten direkt von der Kamera und bewahrt maximale Bildqualität und ermöglicht umfangreiche Nachbearbeitungsflexibilität. DCR Dateien enthalten hochbitige Farbtiefendaten und unterstützen verlustfreie Komprimierung, was sie ideal für professionelle Fotografie-Workflows und Archivierungszwecke macht.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          '• <strong>Maximale Qualität</strong> – Unkomprimierte Sensordaten bewahren jedes Detail von Ihrer Kamera',
          '• <strong>Nachbearbeitungsflexibilität</strong> – Passen Sie Weißabgleich, Belichtung und Farben ohne Qualitätsverlust an',
          '• <strong>Professioneller Workflow</strong> – Industriestandard-Format für Kodak Fotografen',
          '• <strong>Metadaten-reich</strong> – Enthält umfangreiche EXIF, Kameraeinstellungen und Objektivinformationen',
          '• <strong>Archivqualität</strong> – Raw-Dateien behalten Qualität für langfristige Aufbewahrung'
        ],
        compatible_cameras_title: 'Kompatible Kameras',
        compatible_cameras: [
          '• <strong>Kodak EasyShare Serie</strong> – Verschiedene Modelle einschließlich Z-Serie, M-Serie und V-Serie',
          '• <strong>Kodak Professional Kameras</strong> – DCS Pro Serie und professionelle Digitalkameras',
          '• <strong>Kodak Digitalkameras</strong> – Legacy-Modelle, die DCR Raw-Format unterstützen',
          '• <strong>Kodak Kompaktkameras</strong> – Ausgewählte Modelle mit Raw-Fähigkeit',
          '• <strong>Kodak Bridge-Kameras</strong> – Fortgeschrittene Modelle mit Raw-Unterstützung'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Eigenschaft',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateiendung', value: '.dcr' },
          { label: 'MIME Typ', value: 'image/x-kodak-dcr' },
          { label: 'Entwickelt Von', value: 'Kodak (Eastman Kodak Company)' },
          { label: 'Farbtiefe', value: '12-14 Bits pro Kanal' },
          { label: 'Komprimierung', value: 'Verlustfreie Komprimierung' },
          { label: 'Kamera-Unterstützung', value: 'Kodak Digitalkameras' }
        ]
      }
    }
  }
};

Object.entries(resources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

