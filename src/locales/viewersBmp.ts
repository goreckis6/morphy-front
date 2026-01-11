import i18n // from '../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type ViewerBmpTranslations = {
  viewers: {
    bmp: {
      meta_title: string;
      meta_description: string;
      meta_keywords: string;
      hero_title: string;
      hero_subtitle: string;
      upload_title: string;
      upload_description: string;
      files_heading: string;
      buttons: {
        view: string;
        download: string;
        back: string;
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
    };
  };
};

const resources: Record<string, ViewerBmpTranslations> = {
  en: {
    viewers: {
      bmp: {
        meta_title: 'Free BMP Viewer - View Bitmap Images Online',
        meta_description:
          'View BMP bitmap images online instantly. Free BMP viewer with color-depth support, pixel inspection tools, and batch preview for up to 20 files.',
        meta_keywords:
          'bmp viewer, bitmap viewer, online bmp viewer, windows bitmap, bmp preview, free bmp viewer',
        hero_title: 'Free BMP Viewer',
        hero_subtitle:
          'Inspect Windows Bitmap (BMP) images with true color fidelity, pixel-level zoom, and batch preview tools.',
        upload_title: 'Upload BMP Images',
        upload_description:
          'Drag and drop your BMP files or click to browse. Supports up to 20 files (100MB total) with instant browser preview.',
        files_heading: 'Your BMP Files ({{count}})',
        buttons: {
          view: 'Open Preview',
          download: 'Download BMP',
          back: '← Back to All Viewers'
        },
        features: [
          {
            title: '<strong>True color fidelity</strong>',
            description:
              'Render 1-, 4-, 8-, 24- and 32-bit BMPs with accurate palettes, alpha channels, and optional dithering.'
          },
          {
            title: '<strong>Precise inspection tools</strong>',
            description:
              'Zoom to the pixel, analyze image dimensions, and review metadata before exporting to other formats.'
          },
          {
            title: '<strong>Batch-friendly workflow</strong>',
            description:
              'Preview up to 20 BMP files at once, compare variants, and download originals without leaving the browser.'
          }
        ],
        about_title: 'About the BMP Format',
        about_intro:
          'BMP (Bitmap Image File) is a raster graphics format developed by Microsoft for storing uncompressed or lightly compressed bitmap data. It remains popular across Windows applications, legacy design workflows, and embedded systems thanks to its simple structure and support for multiple color depths.',
        advantages_title: 'Key Advantages',
        advantages: [
          '• <strong>Lossless quality</strong> – Stores pixel data without compression artifacts',
          '• <strong>Multiple color depths</strong> – Supports 1-bit monochrome up to 32-bit RGBA',
          '• <strong>Straightforward structure</strong> – Easy to parse for custom tooling and automation',
          '• <strong>Broad Windows support</strong> – Native compatibility across Microsoft platforms',
          '• <strong>Reliable archival</strong> – Ideal for preserving pixel-perfect UI assets'
        ],
        use_cases_title: 'Popular Use Cases',
        use_cases: [
          '• <strong>Legacy UI assets</strong> – Review Windows icons, cursors, and interface bitmaps',
          '• <strong>Game development</strong> – Inspect sprite sheets and texture atlases exported as BMP',
          '• <strong>Digital archiving</strong> – Validate scans captured in BMP before converting to modern formats',
          '• <strong>Pixel-art workflows</strong> – Check anti-aliasing and color palettes for retro artwork'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Property',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.bmp' },
          { label: 'MIME Type', value: 'image/bmp, image/x-windows-bmp' },
          { label: 'Developed By', value: 'Microsoft' },
          { label: 'Initial Release', value: '1985' },
          { label: 'Color Depth', value: '1, 4, 8, 16, 24, 32 bits' },
          { label: 'Compression', value: 'BI_RGB (none), RLE8, RLE4, BITFIELDS' }
        ]
      }
    }
  },
  pl: {
    viewers: {
      bmp: {
        meta_title: 'Darmowy Podgląd BMP - Wyświetlaj Obrazy Bitmapy Online',
        meta_description:
          'Wyświetlaj bitmapy BMP online w kilka sekund. Darmowy podgląd BMP z obsługą głębi kolorów, inspekcją pikseli i podglądem wsadowym do 20 plików.',
        meta_keywords:
          'podgląd bmp, bitmapa online, przeglądarka bmp, bmp podgląd, darmowy podgląd bmp, bitmapa windows',
        hero_title: 'Darmowy Podgląd BMP',
        hero_subtitle:
          'Analizuj obrazy BMP z wiernym odwzorowaniem kolorów, powiększaniem pikseli i narzędziami do podglądu wsadowego.',
        upload_title: 'Prześlij obrazy BMP',
        upload_description:
          'Przeciągnij i upuść pliki BMP lub kliknij, aby je wybrać. Obsługa do 20 plików (100 MB łącznie) z natychmiastowym podglądem w przeglądarce.',
        files_heading: 'Twoje pliki BMP ({{count}})',
        buttons: {
          view: 'Otwórz podgląd',
          download: 'Pobierz BMP',
          back: '← Powrót do wszystkich podglądów'
        },
        features: [
          {
            title: '<strong>Wierne odwzorowanie kolorów</strong>',
            description:
              'Renderuj pliki BMP w głębiach 1, 4, 8, 24 i 32 bity z dokładnymi paletami oraz kanałami alfa.'
          },
          {
            title: '<strong>Precyzyjne narzędzia analizy</strong>',
            description:
              'Powiększaj do pojedynczego piksela, sprawdzaj wymiary i metadane przed eksportem do innych formatów.'
          },
          {
            title: '<strong>Przyjazny tryb wsadowy</strong>',
            description:
              'Podglądaj do 20 plików BMP jednocześnie, porównuj warianty i pobieraj oryginały bez opuszczania przeglądarki.'
          }
        ],
        about_title: 'Informacje o formacie BMP',
        about_intro:
          'BMP (Bitmap Image File) to format grafiki rastrowej opracowany przez Microsoft do przechowywania niekompresowanych lub lekko kompresowanych bitmap. Dzięki prostej strukturze i obsłudze wielu głębi kolorów jest popularny w aplikacjach Windows, starszych workflow projektowych oraz systemach wbudowanych.',
        advantages_title: 'Najważniejsze zalety',
        advantages: [
          '• <strong>Brak strat jakości</strong> – Dane pikseli przechowywane są bez artefaktów kompresji',
          '• <strong>Wiele głębi kolorów</strong> – Od 1-bitowej monochromii po 32-bitowe RGBA',
          '• <strong>Prosta struktura</strong> – Łatwa do parsowania w niestandardowych narzędziach',
          '• <strong>Zgodność z Windows</strong> – Natywna obsługa na platformach Microsoft',
          '• <strong>Doskonały do archiwizacji</strong> – Idealny do zachowania zasobów pikselowych'
        ],
        use_cases_title: 'Najczęstsze zastosowania',
        use_cases: [
          '• <strong>Zasoby interfejsu</strong> – Przegląd ikon, kursorów i elementów UI Windows',
          '• <strong>Tworzenie gier</strong> – Kontrola sprite’ów i tekstur eksportowanych jako BMP',
          '• <strong>Archiwizacja cyfrowa</strong> – Weryfikacja skanów zapisanych w BMP przed konwersją',
          '• <strong>Pixel art</strong> – Kontrola palet i antyaliasingu w grafice retro'
        ],
        specs_title: 'Specyfikacja techniczna',
        specs_header_label: 'Właściwość',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie pliku', value: '.bmp' },
          { label: 'Typ MIME', value: 'image/bmp, image/x-windows-bmp' },
          { label: 'Opracowany przez', value: 'Microsoft' },
          { label: 'Pierwsze wydanie', value: '1985' },
          { label: 'Głębia kolorów', value: '1, 4, 8, 16, 24, 32 bity' },
          { label: 'Kompresja', value: 'BI_RGB (brak), RLE8, RLE4, BITFIELDS' }
        ]
      }
    }
  },
  de: {
    viewers: {
      bmp: {
        meta_title: 'Kostenloser BMP Viewer – Bitmap-Bilder Online Anzeigen',
        meta_description:
          'Zeige Bitmap-Bilder (BMP) direkt im Browser. Kostenloser BMP-Viewer mit Farbtiefe-Unterstützung, Pixel-Inspektion und Stapelvorschau für bis zu 20 Dateien.',
        meta_keywords:
          'bmp viewer, bitmap viewer, bmp anzeigen, bmp online, windows bitmap, kostenloser bmp viewer',
        hero_title: 'Kostenloser BMP Viewer',
        hero_subtitle:
          'Analysiere Windows-Bitmaps (BMP) mit originalgetreuer Farbwiedergabe, Pixel-Zoom und Stapelvorschau.',
        upload_title: 'BMP-Dateien hochladen',
        upload_description:
          'Ziehe deine BMP-Dateien hierher oder klicke zum Auswählen. Unterstützt bis zu 20 Dateien (100 MB gesamt) mit sofortiger Vorschau im Browser.',
        files_heading: 'Ihre BMP-Dateien ({{count}})',
        buttons: {
          view: 'Vorschau öffnen',
          download: 'BMP herunterladen',
          back: '← Zurück zu allen Viewern'
        },
        features: [
          {
            title: '<strong>Echte Farbwiedergabe</strong>',
            description:
              'Rendere 1-, 4-, 8-, 24- und 32-Bit-BMPs mit präzisen Paletten und Alphakanälen.'
          },
          {
            title: '<strong>Präzise Analysewerkzeuge</strong>',
            description:
              'Zoome bis auf Pixelgröße, prüfe Abmessungen und Metadaten, bevor du in andere Formate exportierst.'
          },
          {
            title: '<strong>Stapelfreundlicher Workflow</strong>',
            description:
              'Prüfe bis zu 20 BMP-Dateien gleichzeitig, vergleiche Varianten und lade Originale direkt herunter.'
          }
        ],
        about_title: 'Über das BMP-Format',
        about_intro:
          'BMP (Bitmap Image File) ist ein Rastergrafikformat, das von Microsoft entwickelt wurde, um unkomprimierte oder leicht komprimierte Bitmap-Daten zu speichern. Dank seiner einfachen Struktur und der Unterstützung verschiedener Farbtiefen ist es nach wie vor in Windows-Anwendungen, Legacy-Workflows und Embedded-Systemen verbreitet.',
        advantages_title: 'Wichtigste Vorteile',
        advantages: [
          '• <strong>Verlustfreie Qualität</strong> – Speicherung der Pixel ohne Kompressionsartefakte',
          '• <strong>Vielseitige Farbtiefe</strong> – Von 1-Bit-Monochrom bis 32-Bit-RGBA',
          '• <strong>Einfache Struktur</strong> – Leicht zu parsen für eigene Tools und Automatisierung',
          '• <strong>Breite Windows-Unterstützung</strong> – Native Kompatibilität auf Microsoft-Plattformen',
          '• <strong>Zuverlässige Archivierung</strong> – Ideal zur Bewahrung pixelperfekter UI-Assets'
        ],
        use_cases_title: 'Typische Einsatzbereiche',
        use_cases: [
          '• <strong>Legacy-UI-Ressourcen</strong> – Überprüfung von Windows-Icons, Cursorn und Oberflächen',
          '• <strong>Spieleentwicklung</strong> – Kontrolle von Sprites und Texturen, die als BMP exportiert wurden',
          '• <strong>Digitale Archivierung</strong> – Validierung von Scans im BMP-Format vor der Konvertierung',
          '• <strong>Pixel-Art-Workflows</strong> – Prüfung von Paletten und Anti-Aliasing für Retro-Grafiken'
        ],
        specs_title: 'Technische Daten',
        specs_header_label: 'Eigenschaft',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateiendung', value: '.bmp' },
          { label: 'MIME-Typ', value: 'image/bmp, image/x-windows-bmp' },
          { label: 'Entwickelt von', value: 'Microsoft' },
          { label: 'Erstveröffentlichung', value: '1985' },
          { label: 'Farbtiefe', value: '1, 4, 8, 16, 24, 32 Bit' },
          { label: 'Kompression', value: 'BI_RGB (keine), RLE8, RLE4, BITFIELDS' }
        ]
      }
    }
  }
};

Object.entries(resources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

