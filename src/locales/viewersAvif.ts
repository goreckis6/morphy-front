import i18n from '../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type ViewerAvifTranslations = {
  viewers: {
    avif: {
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
      use_cases_title: string;
      use_cases: string[];
      specs_title: string;
      specs_header_label: string;
      specs_header_value: string;
      specs: Spec[];
    };
  };
};

const resources: Record<string, ViewerAvifTranslations> = {
  en: {
    viewers: {
      avif: {
        meta_title: 'Free AVIF Viewer - Preview AVIF Images Online | MorphyHub',
        meta_description:
          'View and preview AVIF (AV1 Image File Format) images directly in your browser. Our free AVIF viewer features high-quality rendering, color accuracy, and professional image viewing tools.',
        meta_keywords:
          'avif viewer, avif preview, av1 image format, avif online, modern image format, next-gen image format, webp alternative',
        hero_title: 'Free AVIF Viewer',
        hero_subtitle:
          'Preview AVIF images with high-quality rendering, color accuracy, and professional image viewing capabilities in your browser.',
        upload_title: 'Upload AVIF Images',
        upload_description:
          'Drag and drop your AVIF files or click to browse. Supports up to 20 files (100MB each) with instant preview and high-quality display.',
        files_heading: 'Your AVIF Images ({{count}})',
        how_to_title: 'How to View AVIF Images',
        how_to_description:
          '• <strong>Upload:</strong> Drop your AVIF files into the panel or click to browse from disk.<br />' +
          '• <strong>Preview:</strong> Click "View" to open the AVIF image in full-screen mode with zoom controls.<br />' +
          '• <strong>Download:</strong> Keep your original AVIF file with a single click whenever you need it.',
        buttons: {
          view: 'View',
          download: 'Download',
          back: '← Back to All Viewers'
        },
        alerts: {
          file_too_large:
            'File is too large for preview ({{size}} MB). Maximum size is {{max}} MB. Please download the file instead.',
          popup_blocked: 'Please allow pop-ups to view the AVIF image.',
          preview_failed: 'Failed to open AVIF preview. Please try again or download the file.'
        },
        loading_window: {
          title: 'Loading {{filename}}...',
          message: 'Processing AVIF image for preview...'
        },
        error_window: {
          title: 'Preview Error',
          message: 'Failed to generate AVIF preview. Please try downloading the file instead.',
          close: 'Close'
        },
        features: [
          {
            title: '<strong>High-quality rendering</strong>',
            description:
              'View AVIF images with superior image quality and color accuracy. AVIF format provides excellent compression while maintaining visual quality, making it ideal for modern web applications.'
          },
          {
            title: '<strong>Modern image format</strong>',
            description:
              'AVIF is a next-generation image format based on AV1 video codec. It offers better compression than JPEG and WebP while maintaining high image quality, making it perfect for web optimization.'
          },
          {
            title: '<strong>Professional tools</strong>',
            description:
              'Use professional image viewing tools to inspect, analyze, and understand your AVIF images. Perfect for web development, content creation, and image optimization workflows.'
          }
        ],
        about_title: 'About AVIF Format',
        about_intro:
          'AVIF (AV1 Image File Format) is a modern, open-source image format based on the AV1 video codec. It was developed by the Alliance for Open Media (AOMedia) and offers superior compression efficiency compared to traditional formats like JPEG and PNG. AVIF supports both lossy and lossless compression, HDR (High Dynamic Range) imaging, transparency, and 10-bit and 12-bit color depths. It is designed to provide better image quality at smaller file sizes, making it ideal for web applications, mobile apps, and modern digital content.',
        advantages_title: 'Key Advantages',
        advantages: [
          '• <strong>Superior compression</strong> – AVIF provides 50% better compression than JPEG while maintaining similar or better image quality',
          '• <strong>Multiple color depths</strong> – Supports 8-bit, 10-bit, and 12-bit color depths for enhanced color accuracy and HDR support',
          '• <strong>Lossless and lossy</strong> – Supports both lossless and lossy compression modes for different use cases',
          '• <strong>Transparency support</strong> – Full support for alpha channel transparency, similar to PNG',
          '• <strong>HDR support</strong> – Built-in support for High Dynamic Range imaging for more vibrant and realistic images',
          '• <strong>Wide browser support</strong> – Supported by modern browsers including Chrome, Firefox, Safari, and Edge'
        ],
        use_cases_title: 'Common Use Cases',
        use_cases: [
          '• <strong>Web optimization</strong> – Use AVIF format to reduce image file sizes while maintaining quality, improving page load times and user experience',
          '• <strong>Mobile applications</strong> – Optimize images for mobile apps with smaller file sizes and better quality than traditional formats',
          '• <strong>Content delivery</strong> – Serve high-quality images over content delivery networks (CDNs) with reduced bandwidth usage',
          '• <strong>Digital photography</strong> – Store and share high-quality photographs with excellent compression and color accuracy',
          '• <strong>E-commerce</strong> – Display product images with superior quality and faster loading times for better customer experience'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Property',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extension', value: '.avif' },
          { label: 'MIME Type', value: 'image/avif' },
          { label: 'Standard', value: 'AV1 (Alliance for Open Media)' },
          { label: 'Color Depths', value: '8-bit, 10-bit, 12-bit' },
          { label: 'Compression', value: 'Lossy and Lossless' },
          { label: 'Features', value: 'HDR, Transparency, Wide Color Gamut' }
        ]
      }
    }
  },
  pl: {
    viewers: {
      avif: {
        meta_title: 'Darmowy Podgląd AVIF - Podglądaj Obrazy AVIF Online | MorphyHub',
        meta_description:
          'Przeglądaj i podglądaj obrazy AVIF (AV1 Image File Format) bezpośrednio w przeglądarce. Nasz darmowy podgląd AVIF oferuje wysokiej jakości renderowanie, dokładność kolorów i profesjonalne narzędzia do przeglądania obrazów.',
        meta_keywords:
          'podgląd avif, podgląd avif online, format obrazu av1, avif online, nowoczesny format obrazu, format obrazu nowej generacji, alternatywa dla webp',
        hero_title: 'Darmowy Podgląd AVIF',
        hero_subtitle:
          'Przeglądaj obrazy AVIF z wysokiej jakości renderowaniem, dokładnością kolorów i profesjonalnymi możliwościami przeglądania obrazów w przeglądarce.',
        upload_title: 'Prześlij Obrazy AVIF',
        upload_description:
          'Przeciągnij i upuść pliki AVIF lub kliknij, aby je wybrać. Obsługa do 20 plików (100 MB każdy) z natychmiastowym podglądem i wysokiej jakości wyświetlaniem.',
        files_heading: 'Twoje obrazy AVIF ({{count}})',
        how_to_title: 'Jak Otworzyć Obrazy AVIF',
        how_to_description:
          '• <strong>Prześlij:</strong> Upuść pliki AVIF w panelu lub kliknij, aby je wybrać z dysku.<br />' +
          '• <strong>Podgląd:</strong> Kliknij "Podglądaj", aby otworzyć obraz AVIF w trybie pełnoekranowym z kontrolą powiększenia.<br />' +
          '• <strong>Pobierz:</strong> Zachowaj oryginalny plik AVIF jednym kliknięciem, gdy go potrzebujesz.',
        buttons: {
          view: 'Podglądaj',
          download: 'Pobierz',
          back: '← Powrót do wszystkich podglądów'
        },
        alerts: {
          file_too_large:
            'Plik jest za duży do podglądu ({{size}} MB). Maksymalny rozmiar to {{max}} MB. Pobierz plik zamiast tego.',
          popup_blocked: 'Zezwól na wyskakujące okna, aby wyświetlić obraz AVIF.',
          preview_failed: 'Nie udało się otworzyć podglądu AVIF. Spróbuj ponownie lub pobierz plik.'
        },
        loading_window: {
          title: 'Ładowanie {{filename}}...',
          message: 'Przetwarzanie obrazu AVIF do podglądu...'
        },
        error_window: {
          title: 'Błąd Podglądu',
          message: 'Nie udało się wygenerować podglądu AVIF. Spróbuj pobrać plik.',
          close: 'Zamknij'
        },
        features: [
          {
            title: '<strong>Wysokiej jakości renderowanie</strong>',
            description:
              'Przeglądaj obrazy AVIF z doskonałą jakością obrazu i dokładnością kolorów. Format AVIF zapewnia doskonałą kompresję przy zachowaniu jakości wizualnej, co czyni go idealnym dla nowoczesnych aplikacji internetowych.'
          },
          {
            title: '<strong>Nowoczesny format obrazu</strong>',
            description:
              'AVIF to format obrazu nowej generacji oparty na kodeku wideo AV1. Oferuje lepszą kompresję niż JPEG i WebP przy zachowaniu wysokiej jakości obrazu, co czyni go idealnym do optymalizacji internetowej.'
          },
          {
            title: '<strong>Profesjonalne narzędzia</strong>',
            description:
              'Używaj profesjonalnych narzędzi do przeglądania obrazów do sprawdzania, analizowania i zrozumienia obrazów AVIF. Idealne do tworzenia stron internetowych, tworzenia treści i workflow optymalizacji obrazów.'
          }
        ],
        about_title: 'Informacje o Formacie AVIF',
        about_intro:
          'AVIF (AV1 Image File Format) to nowoczesny, otwarty format obrazu oparty na kodeku wideo AV1. Został opracowany przez Alliance for Open Media (AOMedia) i oferuje doskonałą wydajność kompresji w porównaniu z tradycyjnymi formatami, takimi jak JPEG i PNG. AVIF obsługuje zarówno kompresję stratną, jak i bezstratną, obrazowanie HDR (High Dynamic Range), przezroczystość oraz głębię kolorów 10-bitową i 12-bitową. Został zaprojektowany, aby zapewnić lepszą jakość obrazu przy mniejszych rozmiarach plików, co czyni go idealnym dla aplikacji internetowych, aplikacji mobilnych i nowoczesnych treści cyfrowych.',
        advantages_title: 'Najważniejsze Zalety',
        advantages: [
          '• <strong>Doskonała kompresja</strong> – AVIF zapewnia 50% lepszą kompresję niż JPEG przy zachowaniu podobnej lub lepszej jakości obrazu',
          '• <strong>Wiele głębi kolorów</strong> – Obsługuje głębię kolorów 8-bitową, 10-bitową i 12-bitową dla lepszej dokładności kolorów i obsługi HDR',
          '• <strong>Bezstratna i stratna</strong> – Obsługuje zarówno tryby kompresji bezstratnej, jak i stratnej dla różnych zastosowań',
          '• <strong>Obsługa przezroczystości</strong> – Pełna obsługa przezroczystości kanału alfa, podobnie jak PNG',
          '• <strong>Obsługa HDR</strong> – Wbudowana obsługa obrazowania High Dynamic Range dla bardziej żywych i realistycznych obrazów',
          '• <strong>Szeroka obsługa przeglądarek</strong> – Obsługiwany przez nowoczesne przeglądarki, w tym Chrome, Firefox, Safari i Edge'
        ],
        use_cases_title: 'Typowe Zastosowania',
        use_cases: [
          '• <strong>Optymalizacja internetowa</strong> – Używaj formatu AVIF, aby zmniejszyć rozmiary plików obrazów przy zachowaniu jakości, poprawiając czas ładowania stron i doświadczenie użytkownika',
          '• <strong>Aplikacje mobilne</strong> – Optymalizuj obrazy dla aplikacji mobilnych z mniejszymi rozmiarami plików i lepszą jakością niż tradycyjne formaty',
          '• <strong>Dostarczanie treści</strong> – Serwuj wysokiej jakości obrazy przez sieci dostarczania treści (CDN) z redukcją użycia przepustowości',
          '• <strong>Fotografia cyfrowa</strong> – Przechowuj i udostępniaj wysokiej jakości fotografie z doskonałą kompresją i dokładnością kolorów',
          '• <strong>E-commerce</strong> – Wyświetlaj obrazy produktów z doskonałą jakością i szybszym czasem ładowania dla lepszego doświadczenia klienta'
        ],
        specs_title: 'Specyfikacja Techniczna',
        specs_header_label: 'Właściwość',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenie Pliku', value: '.avif' },
          { label: 'Typ MIME', value: 'image/avif' },
          { label: 'Standard', value: 'AV1 (Alliance for Open Media)' },
          { label: 'Głębia Kolorów', value: '8-bitowa, 10-bitowa, 12-bitowa' },
          { label: 'Kompresja', value: 'Stratna i Bezstratna' },
          { label: 'Funkcje', value: 'HDR, Przezroczystość, Szeroka Paleta Kolorów' }
        ]
      }
    }
  },
  de: {
    viewers: {
      avif: {
        meta_title: 'Kostenloser AVIF Viewer – AVIF Bilder Online Anzeigen | MorphyHub',
        meta_description:
          'Betrachten und zeigen Sie AVIF (AV1 Image File Format) Bilder direkt in Ihrem Browser an. Unser kostenloser AVIF Viewer bietet hochwertiges Rendering, Farbgenauigkeit und professionelle Bildanzeigetools.',
        meta_keywords:
          'avif viewer, avif vorschau, av1 bildformat, avif online, modernes bildformat, bildformat der nächsten generation, webp alternative',
        hero_title: 'Kostenloser AVIF Viewer',
        hero_subtitle:
          'Zeigen Sie AVIF Bilder mit hochwertigem Rendering, Farbgenauigkeit und professionellen Bildanzeigefunktionen in Ihrem Browser an.',
        upload_title: 'AVIF Bilder Hochladen',
        upload_description:
          'Ziehen Sie Ihre AVIF Dateien hinein oder klicken Sie zum Durchsuchen. Unterstützt bis zu 20 Dateien (100 MB jeweils) mit sofortiger Vorschau und hochwertiger Anzeige.',
        files_heading: 'Ihre AVIF Bilder ({{count}})',
        how_to_title: 'Wie Man AVIF Bilder Anzeigt',
        how_to_description:
          '• <strong>Hochladen:</strong> Lassen Sie Ihre AVIF Dateien in das Panel fallen oder klicken Sie zum Durchsuchen von der Festplatte.<br />' +
          '• <strong>Vorschau:</strong> Klicken Sie auf "Anzeigen", um das AVIF Bild im Vollbildmodus mit Zoom-Steuerung zu öffnen.<br />' +
          '• <strong>Herunterladen:</strong> Bewahren Sie Ihre ursprüngliche AVIF Datei mit einem Klick auf, wann immer Sie sie benötigen.',
        buttons: {
          view: 'Anzeigen',
          download: 'Herunterladen',
          back: '← Zurück zu allen Viewern'
        },
        alerts: {
          file_too_large:
            'Datei ist zu groß für die Vorschau ({{size}} MB). Maximale Größe beträgt {{max}} MB. Bitte laden Sie die Datei stattdessen herunter.',
          popup_blocked: 'Bitte erlauben Sie Pop-ups, um das AVIF Bild anzuzeigen.',
          preview_failed: 'AVIF Vorschau konnte nicht geöffnet werden. Bitte versuchen Sie es erneut oder laden Sie die Datei herunter.'
        },
        loading_window: {
          title: 'Lade {{filename}}...',
          message: 'AVIF Bild für Vorschau wird verarbeitet...'
        },
        error_window: {
          title: 'Vorschau Fehler',
          message: 'AVIF Vorschau konnte nicht generiert werden. Bitte versuchen Sie stattdessen, die Datei herunterzuladen.',
          close: 'Schließen'
        },
        features: [
          {
            title: '<strong>Hochwertiges Rendering</strong>',
            description:
              'Betrachten Sie AVIF Bilder mit überlegener Bildqualität und Farbgenauigkeit. Das AVIF Format bietet eine ausgezeichnete Komprimierung bei gleichbleibender visueller Qualität, was es ideal für moderne Webanwendungen macht.'
          },
          {
            title: '<strong>Modernes Bildformat</strong>',
            description:
              'AVIF ist ein Bildformat der nächsten Generation, das auf dem AV1-Videocodec basiert. Es bietet eine bessere Komprimierung als JPEG und WebP bei gleichbleibender hoher Bildqualität, was es perfekt für Weboptimierung macht.'
          },
          {
            title: '<strong>Professionelle Tools</strong>',
            description:
              'Verwenden Sie professionelle Bildanzeigetools, um Ihre AVIF Bilder zu überprüfen, zu analysieren und zu verstehen. Perfekt für Webentwicklung, Content-Erstellung und Bildoptimierungs-Workflows.'
          }
        ],
        about_title: 'Über AVIF Format',
        about_intro:
          'AVIF (AV1 Image File Format) ist ein modernes, quelloffenes Bildformat, das auf dem AV1-Videocodec basiert. Es wurde von der Alliance for Open Media (AOMedia) entwickelt und bietet eine überlegene Komprimierungseffizienz im Vergleich zu traditionellen Formaten wie JPEG und PNG. AVIF unterstützt sowohl verlustbehaftete als auch verlustfreie Komprimierung, HDR (High Dynamic Range) Bildgebung, Transparenz und 10-Bit- und 12-Bit-Farbtiefen. Es wurde entwickelt, um bessere Bildqualität bei kleineren Dateigrößen zu bieten, was es ideal für Webanwendungen, mobile Apps und moderne digitale Inhalte macht.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          '• <strong>Überlegene Komprimierung</strong> – AVIF bietet 50% bessere Komprimierung als JPEG bei gleichbleibender oder besserer Bildqualität',
          '• <strong>Mehrere Farbtiefen</strong> – Unterstützt 8-Bit-, 10-Bit- und 12-Bit-Farbtiefen für verbesserte Farbgenauigkeit und HDR-Unterstützung',
          '• <strong>Verlustfrei und verlustbehaftet</strong> – Unterstützt sowohl verlustfreie als auch verlustbehaftete Komprimierungsmodi für verschiedene Anwendungsfälle',
          '• <strong>Transparenz-Unterstützung</strong> – Vollständige Unterstützung für Alpha-Kanal-Transparenz, ähnlich wie PNG',
          '• <strong>HDR-Unterstützung</strong> – Eingebaute Unterstützung für High Dynamic Range Bildgebung für lebendigere und realistischere Bilder',
          '• <strong>Breite Browser-Unterstützung</strong> – Unterstützt von modernen Browsern einschließlich Chrome, Firefox, Safari und Edge'
        ],
        use_cases_title: 'Häufige Anwendungsfälle',
        use_cases: [
          '• <strong>Weboptimierung</strong> – Verwenden Sie das AVIF Format, um Bilddateigrößen zu reduzieren und gleichzeitig die Qualität beizubehalten, was die Seitenladezeiten und die Benutzererfahrung verbessert',
          '• <strong>Mobile Anwendungen</strong> – Optimieren Sie Bilder für mobile Apps mit kleineren Dateigrößen und besserer Qualität als traditionelle Formate',
          '• <strong>Content-Lieferung</strong> – Servieren Sie hochwertige Bilder über Content Delivery Networks (CDNs) mit reduziertem Bandbreitenverbrauch',
          '• <strong>Digitale Fotografie</strong> – Speichern und teilen Sie hochwertige Fotos mit ausgezeichneter Komprimierung und Farbgenauigkeit',
          '• <strong>E-Commerce</strong> – Zeigen Sie Produktbilder mit überlegener Qualität und schnelleren Ladezeiten für eine bessere Kundenerfahrung an'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Eigenschaft',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateiendung', value: '.avif' },
          { label: 'MIME Typ', value: 'image/avif' },
          { label: 'Standard', value: 'AV1 (Alliance for Open Media)' },
          { label: 'Farbtiefen', value: '8-Bit, 10-Bit, 12-Bit' },
          { label: 'Komprimierung', value: 'Verlustbehaftet und Verlustfrei' },
          { label: 'Funktionen', value: 'HDR, Transparenz, Weites Farbprofil' }
        ]
      }
    }
  }
};

Object.entries(resources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

