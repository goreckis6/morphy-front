import i18n from '../i18n';

type ViewerFormatTranslations = Record<
  string,
  {
    title: string;
    description: string;
  }
>;

interface ViewersPageTranslations {
  viewers_page: {
    meta: {
      title: string;
      description: string;
      keywords: string;
    };
    schema: {
      name: string;
      description: string;
    };
    hero: {
      title: string;
      description: string;
    };
    search: Record<string, string>;
    categories: Record<string, string>;
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    actions: {
      view: string;
    };
    no_results: {
      title: string;
      description: string;
      clear: string;
    };
    formats: ViewerFormatTranslations;
  };
}

const viewersPageResources: Record<string, ViewersPageTranslations> = {
  en: {
    viewers_page: {
      meta: {
        title: 'Professional Online File Viewer - View Any File Without Installing Software | FormiPeek',
        description:
          'View and preview any file directly in your browser without installing software. Professional-grade viewers for 50+ formats including images, documents, PDFs, spreadsheets, and more. Fast, secure, and completely free.',
        keywords:
          'online file viewer, view files without software, browser file viewer, professional file viewer, pdf viewer online, document viewer, image viewer, no download viewer, instant file preview'
      },
      schema: {
        name: 'Online File Viewers',
        description:
          'Preview files across 50+ formats directly in your browser with specialized viewers for every file type.'
      },
      hero: {
        title: 'File Viewers',
        description:
          'View and preview files in your browser without downloading. Support for images, documents, spreadsheets, and more.'
      },
      search: {
        placeholder: 'Search viewers... (e.g., PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: 'Found {{count}} viewer',
        results_one: 'Found {{count}} viewer',
        results_other: 'Found {{count}} viewers',
        suggestion: 'Try searching for something like "{{exampleOne}}" or "{{exampleTwo}}".',
        clear: 'Clear search'
      },
      categories: {
        image_standard: 'STANDARD IMAGE FORMATS',
        document: 'DOCUMENT FORMATS',
        spreadsheet: 'SPREADSHEET FORMATS',
        code_data: 'CODE & DATA FORMATS',
        image_raw: 'RAW CAMERA FORMATS'
      },
      features: {
        title: 'Why Choose Our Viewers?',
        items: [
          {
            title: 'Instant Preview',
            description: 'View files instantly without downloading or installing software.'
          },
          {
            title: 'Secure & Private',
            description: 'Files are processed locally and never stored on our servers.'
          },
          {
            title: 'Universal Support',
            description: 'Support for 50+ file formats across every major category.'
          }
        ]
      },
      actions: {
        view: 'View Now'
      },
      no_results: {
        title: 'No viewers found',
        description: 'Try searching for something like "{{exampleOne}}" or "{{exampleTwo}}".',
        clear: 'Clear search'
      },
      formats: {
        jpeg: {
          title: 'JPEG Viewer',
          description: 'View JPEG images with zoom and pan controls.'
        },
        png: {
          title: 'PNG Viewer',
          description: 'View PNG images with transparency support.'
        },
        webp: {
          title: 'WebP Viewer',
          description: 'View WebP images with modern compression.'
        },
        gif: {
          title: 'GIF Viewer',
          description: 'View animated GIF images with playback controls.'
        },
        svg: {
          title: 'SVG Viewer',
          description: 'View scalable vector graphics with zoom.'
        },
        bmp: {
          title: 'BMP Viewer',
          description: 'View bitmap images with color depth support.'
        },
        ico: {
          title: 'ICO Viewer',
          description: 'View Windows icon files with multiple sizes.'
        },
        heic: {
          title: 'HEIC Viewer',
          description: 'View HEIC images from modern cameras.'
        },
        avif: {
          title: 'AVIF Viewer',
          description: 'View AVIF images with next-gen compression.'
        },
        pdf: {
          title: 'PDF Viewer',
          description: 'View PDF documents with page navigation.'
        },
        docx: {
          title: 'DOCX Viewer',
          description: 'View Microsoft Word documents.'
        },
        rtf: {
          title: 'RTF Viewer',
          description: 'View Rich Text Format documents.'
        },
        odt: {
          title: 'ODT Viewer',
          description: 'View OpenDocument Text files.'
        },
        txt: {
          title: 'TXT Viewer',
          description: 'View plain text files with syntax highlighting.'
        },
        md: {
          title: 'Markdown Viewer',
          description: 'View Markdown files with rendered formatting.'
        },
        xlsx: {
          title: 'Excel Viewer',
          description: 'View Excel spreadsheets with formula support.'
        },
        csv: {
          title: 'CSV Viewer',
          description: 'View CSV files with table formatting.'
        },
        ods: {
          title: 'ODS Viewer',
          description: 'View OpenDocument Spreadsheet files.'
        },
        json: {
          title: 'JSON Viewer',
          description: 'View JSON files with syntax highlighting and formatting.'
        },
        xml: {
          title: 'XML Viewer',
          description: 'View XML files with tree structure.'
        },
        html: {
          title: 'HTML Viewer',
          description: 'View HTML files with rendered content.'
        },
        css: {
          title: 'CSS Viewer',
          description: 'View CSS files with syntax highlighting.'
        },
        js: {
          title: 'JavaScript Viewer',
          description: 'View JS files with syntax highlighting.'
        },
        py: {
          title: 'Python Viewer',
          description: 'View Python files with syntax highlighting.'
        },
        nef: {
          title: 'NEF Viewer',
          description: 'View Nikon raw camera files.'
        },
        cr2: {
          title: 'CR2 Viewer',
          description: 'View Canon raw camera files.'
        },
        dcr: {
          title: 'DCR Viewer',
          description: 'View Kodak raw camera files.'
        },
        x3f: {
          title: 'X3F Viewer',
          description: 'View Sigma raw camera files.'
        },
        arw: {
          title: 'ARW Viewer',
          description: 'View Sony raw camera files.'
        },
        raf: {
          title: 'RAF Viewer',
          description: 'View Fuji raw camera files.'
        },
        orf: {
          title: 'ORF Viewer',
          description: 'View Olympus raw camera files.'
        },
        dng: {
          title: 'DNG Viewer',
          description: 'View Adobe Digital Negative files.'
        },
        pef: {
          title: 'PEF Viewer',
          description: 'View Pentax raw camera files.'
        }
      }
    }
  },
  pl: {
    viewers_page: {
      meta: {
        title: 'Profesjonalna Przeglądarka Plików Online - Otwieraj Pliki Bez Instalowania Oprogramowania | FormiPeek',
        description:
          'Przeglądaj i podglądaj dowolne pliki bezpośrednio w przeglądarce bez instalowania oprogramowania. Profesjonalne przeglądarki dla ponad 50 formatów, w tym obrazów, dokumentów, PDF, arkuszy kalkulacyjnych i innych. Szybko, bezpiecznie i całkowicie za darmo.',
        keywords:
          'przeglądarka plików online, otwieranie plików bez oprogramowania, przeglądarka plików w przeglądarce, profesjonalna przeglądarka plików, przeglądarka pdf online, przeglądarka dokumentów, przeglądarka obrazów, bez pobierania, natychmiastowy podgląd plików'
      },
      schema: {
        name: 'Podglądy plików online',
        description:
          'Przeglądaj pliki w ponad 50 formatach dzięki specjalistycznym narzędziom do każdego typu danych.'
      },
      hero: {
        title: 'Podglądy plików',
        description:
          'Przeglądaj i podglądaj pliki w przeglądarce bez pobierania. Obsługa obrazów, dokumentów, arkuszy i nie tylko.'
      },
      search: {
        placeholder: 'Szukaj podglądów... (np. PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: 'Znaleziono {{count}} podgląd',
        results_one: 'Znaleziono {{count}} podgląd',
        results_few: 'Znaleziono {{count}} podglądy',
        results_many: 'Znaleziono {{count}} podglądów',
        results_other: 'Znaleziono {{count}} podglądu',
        suggestion: 'Spróbuj wyszukać np. „{{exampleOne}}” lub „{{exampleTwo}}”.',
        clear: 'Wyczyść wyszukiwanie'
      },
      categories: {
        image_standard: 'STANDARDOWE FORMATY OBRAZÓW',
        document: 'FORMATY DOKUMENTÓW',
        spreadsheet: 'FORMATY ARKUSZY',
        code_data: 'FORMATY KODU I DANYCH',
        image_raw: 'FORMATY RAW Z APARATÓW'
      },
      features: {
        title: 'Dlaczego warto wybrać nasze podglądy?',
        items: [
          {
            title: 'Natychmiastowy podgląd',
            description:
              'Wyświetlaj pliki natychmiast bez pobierania ani instalacji oprogramowania.'
          },
          {
            title: 'Bezpieczeństwo i prywatność',
            description: 'Pliki są przetwarzane lokalnie i nigdy nie są trwale przechowywane.'
          },
          {
            title: 'Uniwersalne wsparcie',
            description: 'Obsługa ponad 50 formatów plików we wszystkich głównych kategoriach.'
          }
        ]
      },
      actions: {
        view: 'Otwórz teraz'
      },
      no_results: {
        title: 'Nie znaleziono podglądów',
        description: 'Spróbuj wyszukać np. „{{exampleOne}}” lub „{{exampleTwo}}”.',
        clear: 'Wyczyść wyszukiwanie'
      },
      formats: {
        jpeg: {
          title: 'Podgląd JPEG',
          description: 'Przeglądaj obrazy JPEG z przybliżeniem i przesuwaniem.'
        },
        png: {
          title: 'Podgląd PNG',
          description: 'Przeglądaj obrazy PNG z obsługą przezroczystości.'
        },
        webp: {
          title: 'Podgląd WebP',
          description: 'Przeglądaj obrazy WebP z nowoczesną kompresją.'
        },
        gif: {
          title: 'Podgląd GIF',
          description: 'Przeglądaj animowane GIF-y z kontrolą odtwarzania.'
        },
        svg: {
          title: 'Podgląd SVG',
          description: 'Przeglądaj skalowalne grafiki wektorowe z przybliżeniem.'
        },
        bmp: {
          title: 'Podgląd BMP',
          description: 'Przeglądaj bitmapy z obsługą głębi kolorów.'
        },
        ico: {
          title: 'Podgląd ICO',
          description: 'Przeglądaj ikony Windows w wielu rozmiarach.'
        },
        heic: {
          title: 'Podgląd HEIC',
          description: 'Przeglądaj zdjęcia HEIC z nowoczesnych aparatów.'
        },
        avif: {
          title: 'Podgląd AVIF',
          description: 'Przeglądaj obrazy AVIF z kompresją nowej generacji.'
        },
        pdf: {
          title: 'Podgląd PDF',
          description: 'Przeglądaj dokumenty PDF z nawigacją po stronach.'
        },
        docx: {
          title: 'Podgląd DOCX',
          description: 'Przeglądaj dokumenty Microsoft Word.'
        },
        rtf: {
          title: 'Podgląd RTF',
          description: 'Przeglądaj dokumenty Rich Text Format.'
        },
        odt: {
          title: 'Podgląd ODT',
          description: 'Przeglądaj dokumenty OpenDocument Text.'
        },
        txt: {
          title: 'Podgląd TXT',
          description: 'Przeglądaj pliki tekstowe z podświetlaniem składni.'
        },
        md: {
          title: 'Podgląd Markdown',
          description: 'Przeglądaj pliki Markdown z renderowanym formatowaniem.'
        },
        xlsx: {
          title: 'Podgląd Excel',
          description: 'Przeglądaj arkusze Excel z obsługą formuł.'
        },
        csv: {
          title: 'Podgląd CSV',
          description: 'Przeglądaj pliki CSV w formie tabelarycznej.'
        },
        ods: {
          title: 'Podgląd ODS',
          description: 'Przeglądaj arkusze OpenDocument Spreadsheet.'
        },
        json: {
          title: 'Podgląd JSON',
          description: 'Przeglądaj pliki JSON z formatowaniem i podświetlaniem składni.'
        },
        xml: {
          title: 'Podgląd XML',
          description: 'Przeglądaj pliki XML w strukturze drzewa.'
        },
        html: {
          title: 'Podgląd HTML',
          description: 'Przeglądaj pliki HTML w formie renderowanej.'
        },
        css: {
          title: 'Podgląd CSS',
          description: 'Przeglądaj pliki CSS z podświetlaniem składni.'
        },
        js: {
          title: 'Podgląd JavaScript',
          description: 'Przeglądaj pliki JavaScript z podświetlaniem składni.'
        },
        py: {
          title: 'Podgląd Python',
          description: 'Przeglądaj pliki Python z podświetlaniem składni.'
        },
        nef: {
          title: 'Podgląd NEF',
          description: 'Przeglądaj surowe pliki aparatów Nikon.'
        },
        cr2: {
          title: 'Podgląd CR2',
          description: 'Przeglądaj surowe pliki aparatów Canon.'
        },
        dcr: {
          title: 'Podgląd DCR',
          description: 'Przeglądaj surowe pliki aparatów Kodak.'
        },
        x3f: {
          title: 'Podgląd X3F',
          description: 'Przeglądaj surowe pliki aparatów Sigma.'
        },
        arw: {
          title: 'Podgląd ARW',
          description: 'Przeglądaj surowe pliki aparatów Sony.'
        },
        raf: {
          title: 'Podgląd RAF',
          description: 'Przeglądaj surowe pliki aparatów Fuji.'
        },
        orf: {
          title: 'Podgląd ORF',
          description: 'Przeglądaj surowe pliki aparatów Olympus.'
        },
        dng: {
          title: 'Podgląd DNG',
          description: 'Przeglądaj pliki Adobe Digital Negative.'
        },
        pef: {
          title: 'Podgląd PEF',
          description: 'Przeglądaj surowe pliki aparatów Pentax.'
        }
      }
    }
  },
  de: {
    viewers_page: {
      meta: {
        title: 'Professioneller Online-Datei-Viewer - Dateien Ohne Software-Installation Anzeigen | FormiPeek',
        description:
          'Zeigen und betrachten Sie beliebige Dateien direkt im Browser ohne Software-Installation. Professionelle Viewer für über 50 Formate einschließlich Bilder, Dokumente, PDFs, Tabellen und mehr. Schnell, sicher und völlig kostenlos.',
        keywords:
          'online datei-viewer, dateien ohne software anzeigen, browser datei-viewer, professioneller datei-viewer, pdf viewer online, dokumenten-viewer, bild-viewer, kein download viewer, sofortige dateivorschau'
      },
      schema: {
        name: 'Online-Datei-Viewer',
        description:
          'Zeige Dateien in über 50 Formaten mit spezialisierten Tools für jeden Dateityp direkt im Browser an.'
      },
      hero: {
        title: 'Datei-Viewer',
        description:
          'Zeige und überprüfe Dateien direkt im Browser. Unterstützung für Bilder, Dokumente, Tabellen und vieles mehr.'
      },
      search: {
        placeholder: 'Viewer durchsuchen... (z. B. PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: '{{count}} Viewer gefunden',
        results_one: '{{count}} Viewer gefunden',
        results_other: '{{count}} Viewer gefunden',
        suggestion: 'Versuche nach „{{exampleOne}}“ oder „{{exampleTwo}}“ zu suchen.',
        clear: 'Suche zurücksetzen'
      },
      categories: {
        image_standard: 'STANDARD-BILD-FORMATE',
        document: 'DOKUMENTEN-FORMATE',
        spreadsheet: 'TABELLEN-FORMATE',
        code_data: 'CODE- & DATENFORMATE',
        image_raw: 'RAW-KAMERA-FORMATE'
      },
      features: {
        title: 'Warum unsere Viewer wählen?',
        items: [
          {
            title: 'Sofortige Vorschau',
            description:
              'Dateien sofort anzeigen – ohne Download oder Installation zusätzlicher Software.'
          },
          {
            title: 'Sicher & privat',
            description: 'Dateien werden lokal verarbeitet und niemals dauerhaft gespeichert.'
          },
          {
            title: 'Umfassende Unterstützung',
            description: 'Unterstützung für über 50 Dateiformate in allen wichtigen Kategorien.'
          }
        ]
      },
      actions: {
        view: 'Jetzt ansehen'
      },
      no_results: {
        title: 'Keine Viewer gefunden',
        description: 'Versuche nach „{{exampleOne}}“ oder „{{exampleTwo}}“ zu suchen.',
        clear: 'Suche zurücksetzen'
      },
      formats: {
        jpeg: {
          title: 'JPEG-Viewer',
          description: 'Zeige JPEG-Bilder mit Zoom- und Schwenksteuerung an.'
        },
        png: {
          title: 'PNG-Viewer',
          description: 'Zeige PNG-Bilder mit Transparenz-Unterstützung an.'
        },
        webp: {
          title: 'WebP-Viewer',
          description: 'Zeige WebP-Bilder mit moderner Kompression an.'
        },
        gif: {
          title: 'GIF-Viewer',
          description: 'Spiele animierte GIFs mit Wiedergabesteuerung ab.'
        },
        svg: {
          title: 'SVG-Viewer',
          description: 'Zeige skalierbare Vektorgrafiken mit Zoom an.'
        },
        bmp: {
          title: 'BMP-Viewer',
          description: 'Zeige Bitmap-Bilder mit Farbtiefe-Unterstützung an.'
        },
        ico: {
          title: 'ICO-Viewer',
          description: 'Zeige Windows-Icons in mehreren Größen an.'
        },
        heic: {
          title: 'HEIC-Viewer',
          description: 'Zeige HEIC-Fotos aus modernen Kameras an.'
        },
        avif: {
          title: 'AVIF-Viewer',
          description: 'Zeige AVIF-Bilder mit Next-Gen-Kompression an.'
        },
        pdf: {
          title: 'PDF-Viewer',
          description: 'Zeige PDF-Dokumente mit Seiten-Navigation an.'
        },
        docx: {
          title: 'DOCX-Viewer',
          description: 'Zeige Microsoft-Word-Dokumente an.'
        },
        rtf: {
          title: 'RTF-Viewer',
          description: 'Zeige Rich-Text-Format-Dokumente an.'
        },
        odt: {
          title: 'ODT-Viewer',
          description: 'Zeige OpenDocument-Textdateien an.'
        },
        txt: {
          title: 'TXT-Viewer',
          description: 'Zeige Textdateien mit Syntaxhervorhebung an.'
        },
        md: {
          title: 'Markdown-Viewer',
          description: 'Zeige Markdown-Dateien mit gerendertem Layout an.'
        },
        xlsx: {
          title: 'Excel-Viewer',
          description: 'Zeige Excel-Tabellen mit Formelunterstützung an.'
        },
        csv: {
          title: 'CSV-Viewer',
          description: 'Zeige CSV-Dateien in Tabellenform an.'
        },
        ods: {
          title: 'ODS-Viewer',
          description: 'Zeige OpenDocument-Tabellen an.'
        },
        json: {
          title: 'JSON-Viewer',
          description: 'Zeige JSON-Dateien mit Formatierung und Syntaxhervorhebung an.'
        },
        xml: {
          title: 'XML-Viewer',
          description: 'Zeige XML-Dateien in Baumstruktur an.'
        },
        html: {
          title: 'HTML-Viewer',
          description: 'Zeige HTML-Dateien als gerenderte Seite an.'
        },
        css: {
          title: 'CSS-Viewer',
          description: 'Zeige CSS-Dateien mit Syntaxhervorhebung an.'
        },
        js: {
          title: 'JavaScript-Viewer',
          description: 'Zeige JavaScript-Dateien mit Syntaxhervorhebung an.'
        },
        py: {
          title: 'Python-Viewer',
          description: 'Zeige Python-Dateien mit Syntaxhervorhebung an.'
        },
        nef: {
          title: 'NEF-Viewer',
          description: 'Zeige Nikon-RAW-Dateien an.'
        },
        cr2: {
          title: 'CR2-Viewer',
          description: 'Zeige Canon-RAW-Dateien an.'
        },
        dcr: {
          title: 'DCR-Viewer',
          description: 'Zeige Kodak-RAW-Dateien an.'
        },
        x3f: {
          title: 'X3F-Viewer',
          description: 'Zeige Sigma-RAW-Dateien an.'
        },
        arw: {
          title: 'ARW-Viewer',
          description: 'Zeige Sony-RAW-Dateien an.'
        },
        raf: {
          title: 'RAF-Viewer',
          description: 'Zeige Fuji-RAW-Dateien an.'
        },
        orf: {
          title: 'ORF-Viewer',
          description: 'Zeige Olympus-RAW-Dateien an.'
        },
        dng: {
          title: 'DNG-Viewer',
          description: 'Zeige Adobe-Digital-Negative an.'
        },
        pef: {
          title: 'PEF-Viewer',
          description: 'Zeige Pentax-RAW-Dateien an.'
        }
      }
    }
  },
  es: {
    viewers_page: {
      meta: {
        title: 'Visor de Archivos Online Profesional - Ver Cualquier Archivo Sin Instalar Software | FormiPeek',
        description:
          'Visualiza y previsualiza cualquier archivo directamente en tu navegador sin instalar software. Visores de nivel profesional para más de 50 formatos incluyendo imágenes, documentos, PDFs, hojas de cálculo y más. Rápido, seguro y completamente gratis.',
        keywords:
          'visor de archivos online, ver archivos sin software, visor de archivos en navegador, visor de archivos profesional, visor pdf online, visor de documentos, visor de imágenes, sin descargas, vista previa instantánea de archivos'
      },
      schema: {
        name: 'Visores de archivos en línea',
        description:
          'Previsualiza archivos en más de 50 formatos directamente en tu navegador con visores especializados para cada tipo de archivo.'
      },
      hero: {
        title: 'Visores de archivos',
        description:
          'Ver y previsualizar archivos en tu navegador sin descargar. Soporte para imágenes, documentos, hojas de cálculo y más.'
      },
      search: {
        placeholder: 'Buscar visores... (ej., PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: 'Se encontró {{count}} visor',
        results_one: 'Se encontró {{count}} visor',
        results_other: 'Se encontraron {{count}} visores',
        suggestion: 'Intenta buscar algo como "{{exampleOne}}" o "{{exampleTwo}}".',
        clear: 'Limpiar búsqueda'
      },
      categories: {
        image_standard: 'FORMATOS DE IMAGEN ESTÁNDAR',
        document: 'FORMATOS DE DOCUMENTO',
        spreadsheet: 'FORMATOS DE HOJA DE CÁLCULO',
        code_data: 'FORMATOS DE CÓDIGO Y DATOS',
        image_raw: 'FORMATOS RAW DE CÁMARA'
      },
      features: {
        title: '¿Por qué elegir nuestros visores?',
        items: [
          {
            title: 'Vista previa instantánea',
            description: 'Ver archivos al instante sin descargar o instalar software.'
          },
          {
            title: 'Seguro y privado',
            description: 'Los archivos se procesan localmente y nunca se almacenan en nuestros servidores.'
          },
          {
            title: 'Soporte universal',
            description: 'Soporte para más de 50 formatos de archivo en todas las categorías principales.'
          }
        ]
      },
      actions: {
        view: 'Ver ahora'
      },
      no_results: {
        title: 'No se encontraron visores',
        description: 'Intenta buscar algo como "{{exampleOne}}" o "{{exampleTwo}}".',
        clear: 'Limpiar búsqueda'
      },
      formats: {
        jpeg: {
          title: 'Visor JPEG',
          description: 'Ver imágenes JPEG con controles de zoom y desplazamiento.'
        },
        png: {
          title: 'Visor PNG',
          description: 'Ver imágenes PNG con soporte de transparencia.'
        },
        webp: {
          title: 'Visor WebP',
          description: 'Ver imágenes WebP con compresión moderna.'
        },
        gif: {
          title: 'Visor GIF',
          description: 'Ver imágenes GIF animadas con controles de reproducción.'
        },
        svg: {
          title: 'Visor SVG',
          description: 'Ver gráficos vectoriales escalables con zoom.'
        },
        bmp: {
          title: 'Visor BMP',
          description: 'Ver imágenes de mapa de bits con soporte de profundidad de color.'
        },
        ico: {
          title: 'Visor ICO',
          description: 'Ver archivos de iconos de Windows con múltiples tamaños.'
        },
        heic: {
          title: 'Visor HEIC',
          description: 'Ver imágenes HEIC de cámaras modernas.'
        },
        avif: {
          title: 'Visor AVIF',
          description: 'Ver imágenes AVIF con compresión de próxima generación.'
        },
        pdf: {
          title: 'Visor PDF',
          description: 'Ver documentos PDF con navegación de páginas.'
        },
        docx: {
          title: 'Visor DOCX',
          description: 'Ver documentos de Microsoft Word.'
        },
        rtf: {
          title: 'Visor RTF',
          description: 'Ver documentos en formato Rich Text Format.'
        },
        odt: {
          title: 'Visor ODT',
          description: 'Ver archivos de texto OpenDocument.'
        },
        txt: {
          title: 'Visor TXT',
          description: 'Ver archivos de texto plano con resaltado de sintaxis.'
        },
        md: {
          title: 'Visor Markdown',
          description: 'Ver archivos Markdown con formato renderizado.'
        },
        xlsx: {
          title: 'Visor Excel',
          description: 'Ver hojas de cálculo Excel con soporte de fórmulas.'
        },
        csv: {
          title: 'Visor CSV',
          description: 'Ver archivos CSV con formato de tabla.'
        },
        ods: {
          title: 'Visor ODS',
          description: 'Ver archivos de hoja de cálculo OpenDocument.'
        },
        json: {
          title: 'Visor JSON',
          description: 'Ver archivos JSON con resaltado de sintaxis y formato.'
        },
        xml: {
          title: 'Visor XML',
          description: 'Ver archivos XML con estructura de árbol.'
        },
        html: {
          title: 'Visor HTML',
          description: 'Ver archivos HTML con contenido renderizado.'
        },
        css: {
          title: 'Visor CSS',
          description: 'Ver archivos CSS con resaltado de sintaxis.'
        },
        js: {
          title: 'Visor JavaScript',
          description: 'Ver archivos JS con resaltado de sintaxis.'
        },
        py: {
          title: 'Visor Python',
          description: 'Ver archivos Python con resaltado de sintaxis.'
        },
        nef: {
          title: 'Visor NEF',
          description: 'Ver archivos RAW de cámaras Nikon.'
        },
        cr2: {
          title: 'Visor CR2',
          description: 'Ver archivos RAW de cámaras Canon.'
        },
        dcr: {
          title: 'Visor DCR',
          description: 'Ver archivos RAW de cámaras Kodak.'
        },
        x3f: {
          title: 'Visor X3F',
          description: 'Ver archivos RAW de cámaras Sigma.'
        },
        arw: {
          title: 'Visor ARW',
          description: 'Ver archivos RAW de cámaras Sony.'
        },
        raf: {
          title: 'Visor RAF',
          description: 'Ver archivos RAW de cámaras Fuji.'
        },
        orf: {
          title: 'Visor ORF',
          description: 'Ver archivos RAW de cámaras Olympus.'
        },
        dng: {
          title: 'Visor DNG',
          description: 'Ver archivos Adobe Digital Negative.'
        },
        pef: {
          title: 'Visor PEF',
          description: 'Ver archivos RAW de cámaras Pentax.'
        }
      }
    }
  },
  fr: {
    viewers_page: {
      meta: {
        title: 'Visualiseur de Fichiers En Ligne Professionnel - Afficher N\'importe Quel Fichier Sans Installer de Logiciel | FormiPeek',
        description:
          'Visualisez et prévisualisez n\'importe quel fichier directement dans votre navigateur sans installer de logiciel. Visualiseurs professionnels pour plus de 50 formats incluant images, documents, PDFs, feuilles de calcul et plus. Rapide, sécurisé et entièrement gratuit.',
        keywords:
          'visualiseur de fichiers en ligne, voir fichiers sans logiciel, visualiseur de fichiers navigateur, visualiseur de fichiers professionnel, visualiseur pdf en ligne, visualiseur de documents, visualiseur d\'images, sans téléchargement, aperçu instantané de fichiers'
      },
      schema: {
        name: 'Visionneuses de fichiers en ligne',
        description:
          'Prévisualisez les fichiers dans plus de 50 formats directement dans votre navigateur avec des visionneuses spécialisées pour chaque type de fichier.'
      },
      hero: {
        title: 'Visionneuses de fichiers',
        description:
          'Voir et prévisualiser les fichiers dans votre navigateur sans téléchargement. Prise en charge des images, documents, feuilles de calcul et plus encore.'
      },
      search: {
        placeholder: 'Rechercher des visionneuses... (ex. PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: '{{count}} visionneuse trouvée',
        results_one: '{{count}} visionneuse trouvée',
        results_other: '{{count}} visionneuses trouvées',
        suggestion: 'Essayez de rechercher quelque chose comme "{{exampleOne}}" ou "{{exampleTwo}}".',
        clear: 'Effacer la recherche'
      },
      categories: {
        image_standard: 'FORMATS D\'IMAGE STANDARD',
        document: 'FORMATS DE DOCUMENT',
        spreadsheet: 'FORMATS DE FEUILLE DE CALCUL',
        code_data: 'FORMATS DE CODE ET DONNÉES',
        image_raw: 'FORMATS RAW D\'APPAREIL PHOTO'
      },
      features: {
        title: 'Pourquoi choisir nos visionneuses?',
        items: [
          {
            title: 'Aperçu instantané',
            description: 'Voir les fichiers instantanément sans télécharger ou installer de logiciel.'
          },
          {
            title: 'Sécurisé et privé',
            description: 'Les fichiers sont traités localement et ne sont jamais stockés sur nos serveurs.'
          },
          {
            title: 'Support universel',
            description: 'Prise en charge de plus de 50 formats de fichiers dans toutes les catégories principales.'
          }
        ]
      },
      actions: {
        view: 'Voir maintenant'
      },
      no_results: {
        title: 'Aucune visionneuse trouvée',
        description: 'Essayez de rechercher quelque chose comme "{{exampleOne}}" ou "{{exampleTwo}}".',
        clear: 'Effacer la recherche'
      },
      formats: {
        jpeg: {
          title: 'Visionneuse JPEG',
          description: 'Voir les images JPEG avec des contrôles de zoom et de défilement.'
        },
        png: {
          title: 'Visionneuse PNG',
          description: 'Voir les images PNG avec support de la transparence.'
        },
        webp: {
          title: 'Visionneuse WebP',
          description: 'Voir les images WebP avec compression moderne.'
        },
        gif: {
          title: 'Visionneuse GIF',
          description: 'Voir les images GIF animées avec contrôles de lecture.'
        },
        svg: {
          title: 'Visionneuse SVG',
          description: 'Voir les graphiques vectoriels évolutifs avec zoom.'
        },
        bmp: {
          title: 'Visionneuse BMP',
          description: 'Voir les images bitmap avec support de la profondeur de couleur.'
        },
        ico: {
          title: 'Visionneuse ICO',
          description: 'Voir les fichiers d\'icônes Windows avec plusieurs tailles.'
        },
        heic: {
          title: 'Visionneuse HEIC',
          description: 'Voir les images HEIC des appareils photo modernes.'
        },
        avif: {
          title: 'Visionneuse AVIF',
          description: 'Voir les images AVIF avec compression de nouvelle génération.'
        },
        pdf: {
          title: 'Visionneuse PDF',
          description: 'Voir les documents PDF avec navigation de pages.'
        },
        docx: {
          title: 'Visionneuse DOCX',
          description: 'Voir les documents Microsoft Word.'
        },
        rtf: {
          title: 'Visionneuse RTF',
          description: 'Voir les documents au format Rich Text Format.'
        },
        odt: {
          title: 'Visionneuse ODT',
          description: 'Voir les fichiers texte OpenDocument.'
        },
        txt: {
          title: 'Visionneuse TXT',
          description: 'Voir les fichiers texte brut avec coloration syntaxique.'
        },
        md: {
          title: 'Visionneuse Markdown',
          description: 'Voir les fichiers Markdown avec formatage rendu.'
        },
        xlsx: {
          title: 'Visionneuse Excel',
          description: 'Voir les feuilles de calcul Excel avec support de formules.'
        },
        csv: {
          title: 'Visionneuse CSV',
          description: 'Voir les fichiers CSV avec formatage de tableau.'
        },
        ods: {
          title: 'Visionneuse ODS',
          description: 'Voir les fichiers de feuille de calcul OpenDocument.'
        },
        json: {
          title: 'Visionneuse JSON',
          description: 'Voir les fichiers JSON avec coloration syntaxique et formatage.'
        },
        xml: {
          title: 'Visionneuse XML',
          description: 'Voir les fichiers XML avec structure d\'arborescence.'
        },
        html: {
          title: 'Visionneuse HTML',
          description: 'Voir les fichiers HTML avec contenu rendu.'
        },
        css: {
          title: 'Visionneuse CSS',
          description: 'Voir les fichiers CSS avec coloration syntaxique.'
        },
        js: {
          title: 'Visionneuse JavaScript',
          description: 'Voir les fichiers JS avec coloration syntaxique.'
        },
        py: {
          title: 'Visionneuse Python',
          description: 'Voir les fichiers Python avec coloration syntaxique.'
        },
        nef: {
          title: 'Visionneuse NEF',
          description: 'Voir les fichiers RAW des appareils photo Nikon.'
        },
        cr2: {
          title: 'Visionneuse CR2',
          description: 'Voir les fichiers RAW des appareils photo Canon.'
        },
        dcr: {
          title: 'Visionneuse DCR',
          description: 'Voir les fichiers RAW des appareils photo Kodak.'
        },
        x3f: {
          title: 'Visionneuse X3F',
          description: 'Voir les fichiers RAW des appareils photo Sigma.'
        },
        arw: {
          title: 'Visionneuse ARW',
          description: 'Voir les fichiers RAW des appareils photo Sony.'
        },
        raf: {
          title: 'Visionneuse RAF',
          description: 'Voir les fichiers RAW des appareils photo Fuji.'
        },
        orf: {
          title: 'Visionneuse ORF',
          description: 'Voir les fichiers RAW des appareils photo Olympus.'
        },
        dng: {
          title: 'Visionneuse DNG',
          description: 'Voir les fichiers Adobe Digital Negative.'
        },
        pef: {
          title: 'Visionneuse PEF',
          description: 'Voir les fichiers RAW des appareils photo Pentax.'
        }
      }
    }
  },
  it: {
    viewers_page: {
      meta: {
        title: 'Visualizzatore di File Online Professionale - Visualizza Qualsiasi File Senza Installare Software | FormiPeek',
        description:
          'Visualizza e anteprima qualsiasi file direttamente nel tuo browser senza installare software. Visualizzatori professionali per oltre 50 formati inclusi immagini, documenti, PDF, fogli di calcolo e altro. Veloce, sicuro e completamente gratuito.',
        keywords:
          'visualizzatore file online, visualizzare file senza software, visualizzatore file browser, visualizzatore file professionale, visualizzatore pdf online, visualizzatore documenti, visualizzatore immagini, senza download, anteprima file istantanea'
      },
      schema: {
        name: 'Visualizzatori di file online',
        description:
          'Anteprima file in oltre 50 formati direttamente nel tuo browser con visualizzatori specializzati per ogni tipo di file.'
      },
      hero: {
        title: 'Visualizzatori di file',
        description:
          'Visualizza e anteprima file nel tuo browser senza scaricare. Supporto per immagini, documenti, fogli di calcolo e altro.'
      },
      search: {
        placeholder: 'Cerca visualizzatori... (es. PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: 'Trovato {{count}} visualizzatore',
        results_one: 'Trovato {{count}} visualizzatore',
        results_other: 'Trovati {{count}} visualizzatori',
        suggestion: 'Prova a cercare qualcosa come "{{exampleOne}}" o "{{exampleTwo}}".',
        clear: 'Cancella ricerca'
      },
      categories: {
        image_standard: 'FORMATI IMMAGINE STANDARD',
        document: 'FORMATI DOCUMENTO',
        spreadsheet: 'FORMATI FOGLIO DI CALCOLO',
        code_data: 'FORMATI CODICE E DATI',
        image_raw: 'FORMATI RAW FOTOCAMERA'
      },
      features: {
        title: 'Perché scegliere i nostri visualizzatori?',
        items: [
          {
            title: 'Anteprima istantanea',
            description: 'Visualizza file istantaneamente senza scaricare o installare software.'
          },
          {
            title: 'Sicuro e privato',
            description: 'I file vengono elaborati localmente e non vengono mai memorizzati sui nostri server.'
          },
          {
            title: 'Supporto universale',
            description: 'Supporto per oltre 50 formati di file in tutte le categorie principali.'
          }
        ]
      },
      actions: {
        view: 'Visualizza ora'
      },
      no_results: {
        title: 'Nessun visualizzatore trovato',
        description: 'Prova a cercare qualcosa come "{{exampleOne}}" o "{{exampleTwo}}".',
        clear: 'Cancella ricerca'
      },
      formats: {
        jpeg: { title: 'Visualizzatore JPEG', description: 'Visualizza immagini JPEG con controlli zoom e pan.' },
        png: { title: 'Visualizzatore PNG', description: 'Visualizza immagini PNG con supporto trasparenza.' },
        webp: { title: 'Visualizzatore WebP', description: 'Visualizza immagini WebP con compressione moderna.' },
        gif: { title: 'Visualizzatore GIF', description: 'Visualizza immagini GIF animate con controlli riproduzione.' },
        svg: { title: 'Visualizzatore SVG', description: 'Visualizza grafica vettoriale scalabile con zoom.' },
        bmp: { title: 'Visualizzatore BMP', description: 'Visualizza immagini bitmap con supporto profondità colore.' },
        ico: { title: 'Visualizzatore ICO', description: 'Visualizza file icone Windows con dimensioni multiple.' },
        heic: { title: 'Visualizzatore HEIC', description: 'Visualizza immagini HEIC da fotocamere moderne.' },
        avif: { title: 'Visualizzatore AVIF', description: 'Visualizza immagini AVIF con compressione next-gen.' },
        pdf: { title: 'Visualizzatore PDF', description: 'Visualizza documenti PDF con navigazione pagine.' },
        docx: { title: 'Visualizzatore DOCX', description: 'Visualizza documenti Microsoft Word.' },
        rtf: { title: 'Visualizzatore RTF', description: 'Visualizza documenti Rich Text Format.' },
        odt: { title: 'Visualizzatore ODT', description: 'Visualizza file testo OpenDocument.' },
        txt: { title: 'Visualizzatore TXT', description: 'Visualizza file testo semplice con evidenziazione sintassi.' },
        md: { title: 'Visualizzatore Markdown', description: 'Visualizza file Markdown con formattazione renderizzata.' },
        xlsx: { title: 'Visualizzatore Excel', description: 'Visualizza fogli Excel con supporto formule.' },
        csv: { title: 'Visualizzatore CSV', description: 'Visualizza file CSV con formattazione tabella.' },
        ods: { title: 'Visualizzatore ODS', description: 'Visualizza fogli OpenDocument Spreadsheet.' },
        json: { title: 'Visualizzatore JSON', description: 'Visualizza file JSON con evidenziazione sintassi e formattazione.' },
        xml: { title: 'Visualizzatore XML', description: 'Visualizza file XML con struttura ad albero.' },
        html: { title: 'Visualizzatore HTML', description: 'Visualizza file HTML con contenuto renderizzato.' },
        css: { title: 'Visualizzatore CSS', description: 'Visualizza file CSS con evidenziazione sintassi.' },
        js: { title: 'Visualizzatore JavaScript', description: 'Visualizza file JS con evidenziazione sintassi.' },
        py: { title: 'Visualizzatore Python', description: 'Visualizza file Python con evidenziazione sintassi.' },
        nef: { title: 'Visualizzatore NEF', description: 'Visualizza file RAW fotocamere Nikon.' },
        cr2: { title: 'Visualizzatore CR2', description: 'Visualizza file RAW fotocamere Canon.' },
        dcr: { title: 'Visualizzatore DCR', description: 'Visualizza file RAW fotocamere Kodak.' },
        x3f: { title: 'Visualizzatore X3F', description: 'Visualizza file RAW fotocamere Sigma.' },
        arw: { title: 'Visualizzatore ARW', description: 'Visualizza file RAW fotocamere Sony.' },
        raf: { title: 'Visualizzatore RAF', description: 'Visualizza file RAW fotocamere Fuji.' },
        orf: { title: 'Visualizzatore ORF', description: 'Visualizza file RAW fotocamere Olympus.' },
        dng: { title: 'Visualizzatore DNG', description: 'Visualizza file Adobe Digital Negative.' },
        pef: { title: 'Visualizzatore PEF', description: 'Visualizza file RAW fotocamere Pentax.' }
      }
    }
  },
  nl: {
    viewers_page: {
      meta: {
        title: 'Professionele Online Bestandsviewer - Bekijk Elk Bestand Zonder Software Te Installeren | FormiPeek',
        description:
          'Bekijk en preview elk bestand direct in uw browser zonder software te installeren. Professionele viewers voor meer dan 50 formaten inclusief afbeeldingen, documenten, PDF\'s, spreadsheets en meer. Snel, veilig en volledig gratis.',
        keywords:
          'online bestandsviewer, bestanden bekijken zonder software, browser bestandsviewer, professionele bestandsviewer, pdf viewer online, documentviewer, afbeeldingsviewer, geen download, directe bestandspreview'
      },
      schema: {
        name: 'Online bestandsviewers',
        description:
          'Preview bestanden in meer dan 50 formaten direct in uw browser met gespecialiseerde viewers voor elk bestandstype.'
      },
      hero: {
        title: 'Bestandsviewers',
        description:
          'Bekijk en preview bestanden in uw browser zonder te downloaden. Ondersteuning voor afbeeldingen, documenten, spreadsheets en meer.'
      },
      search: {
        placeholder: 'Zoek viewers... (bijv. PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: '{{count}} viewer gevonden',
        results_one: '{{count}} viewer gevonden',
        results_other: '{{count}} viewers gevonden',
        suggestion: 'Probeer te zoeken naar iets zoals "{{exampleOne}}" of "{{exampleTwo}}".',
        clear: 'Zoekopdracht wissen'
      },
      categories: {
        image_standard: 'STANDAARD AFBEELDINGSFORMATEN',
        document: 'DOCUMENTFORMATEN',
        spreadsheet: 'SPREADSHEETFORMATEN',
        code_data: 'CODE & DATA FORMATEN',
        image_raw: 'RAW CAMERA FORMATEN'
      },
      features: {
        title: 'Waarom onze viewers kiezen?',
        items: [
          {
            title: 'Directe preview',
            description: 'Bekijk bestanden direct zonder te downloaden of software te installeren.'
          },
          {
            title: 'Veilig en privé',
            description: 'Bestanden worden lokaal verwerkt en nooit opgeslagen op onze servers.'
          },
          {
            title: 'Universele ondersteuning',
            description: 'Ondersteuning voor meer dan 50 bestandsformaten in alle belangrijke categorieën.'
          }
        ]
      },
      actions: {
        view: 'Nu bekijken'
      },
      no_results: {
        title: 'Geen viewers gevonden',
        description: 'Probeer te zoeken naar iets zoals "{{exampleOne}}" of "{{exampleTwo}}".',
        clear: 'Zoekopdracht wissen'
      },
      formats: {
        jpeg: { title: 'JPEG Viewer', description: 'Bekijk JPEG-afbeeldingen met zoom- en panbesturing.' },
        png: { title: 'PNG Viewer', description: 'Bekijk PNG-afbeeldingen met transparantie-ondersteuning.' },
        webp: { title: 'WebP Viewer', description: 'Bekijk WebP-afbeeldingen met moderne compressie.' },
        gif: { title: 'GIF Viewer', description: 'Bekijk geanimeerde GIF-afbeeldingen met afspeelbesturing.' },
        svg: { title: 'SVG Viewer', description: 'Bekijk schaalbare vectorafbeeldingen met zoom.' },
        bmp: { title: 'BMP Viewer', description: 'Bekijk bitmap-afbeeldingen met kleurdiepte-ondersteuning.' },
        ico: { title: 'ICO Viewer', description: 'Bekijk Windows-pictogrambestanden met meerdere formaten.' },
        heic: { title: 'HEIC Viewer', description: 'Bekijk HEIC-afbeeldingen van moderne camera\'s.' },
        avif: { title: 'AVIF Viewer', description: 'Bekijk AVIF-afbeeldingen met next-gen compressie.' },
        pdf: { title: 'PDF Viewer', description: 'Bekijk PDF-documenten met paginanavigatie.' },
        docx: { title: 'DOCX Viewer', description: 'Bekijk Microsoft Word-documenten.' },
        rtf: { title: 'RTF Viewer', description: 'Bekijk Rich Text Format-documenten.' },
        odt: { title: 'ODT Viewer', description: 'Bekijk OpenDocument-tekstbestanden.' },
        txt: { title: 'TXT Viewer', description: 'Bekijk tekstbestanden met syntaxmarkering.' },
        md: { title: 'Markdown Viewer', description: 'Bekijk Markdown-bestanden met gerenderde opmaak.' },
        xlsx: { title: 'Excel Viewer', description: 'Bekijk Excel-spreadsheets met formule-ondersteuning.' },
        csv: { title: 'CSV Viewer', description: 'Bekijk CSV-bestanden met tabelopmaak.' },
        ods: { title: 'ODS Viewer', description: 'Bekijk OpenDocument Spreadsheet-bestanden.' },
        json: { title: 'JSON Viewer', description: 'Bekijk JSON-bestanden met syntaxmarkering en opmaak.' },
        xml: { title: 'XML Viewer', description: 'Bekijk XML-bestanden met boomstructuur.' },
        html: { title: 'HTML Viewer', description: 'Bekijk HTML-bestanden met gerenderde inhoud.' },
        css: { title: 'CSS Viewer', description: 'Bekijk CSS-bestanden met syntaxmarkering.' },
        js: { title: 'JavaScript Viewer', description: 'Bekijk JS-bestanden met syntaxmarkering.' },
        py: { title: 'Python Viewer', description: 'Bekijk Python-bestanden met syntaxmarkering.' },
        nef: { title: 'NEF Viewer', description: 'Bekijk Nikon raw camera-bestanden.' },
        cr2: { title: 'CR2 Viewer', description: 'Bekijk Canon raw camera-bestanden.' },
        dcr: { title: 'DCR Viewer', description: 'Bekijk Kodak raw camera-bestanden.' },
        x3f: { title: 'X3F Viewer', description: 'Bekijk Sigma raw camera-bestanden.' },
        arw: { title: 'ARW Viewer', description: 'Bekijk Sony raw camera-bestanden.' },
        raf: { title: 'RAF Viewer', description: 'Bekijk Fuji raw camera-bestanden.' },
        orf: { title: 'ORF Viewer', description: 'Bekijk Olympus raw camera-bestanden.' },
        dng: { title: 'DNG Viewer', description: 'Bekijk Adobe Digital Negative-bestanden.' },
        pef: { title: 'PEF Viewer', description: 'Bekijk Pentax raw camera-bestanden.' }
      }
    }
  },
  pt: {
    viewers_page: {
      meta: {
        title: 'Visualizador de Arquivos Online Profissional - Visualize Qualquer Arquivo Sem Instalar Software | FormiPeek',
        description:
          'Visualize e pré-visualize qualquer arquivo diretamente no seu navegador sem instalar software. Visualizadores profissionais para mais de 50 formatos incluindo imagens, documentos, PDFs, planilhas e mais. Rápido, seguro e completamente gratuito.',
        keywords:
          'visualizador de arquivos online, visualizar arquivos sem software, visualizador de arquivos navegador, visualizador de arquivos profissional, visualizador pdf online, visualizador de documentos, visualizador de imagens, sem download, pré-visualização instantânea de arquivos'
      },
      schema: {
        name: 'Visualizadores de arquivos online',
        description:
          'Pré-visualize arquivos em mais de 50 formatos diretamente no seu navegador com visualizadores especializados para cada tipo de arquivo.'
      },
      hero: {
        title: 'Visualizadores de arquivos',
        description:
          'Visualize e pré-visualize arquivos no seu navegador sem baixar. Suporte para imagens, documentos, planilhas e mais.'
      },
      search: {
        placeholder: 'Buscar visualizadores... (ex. PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: '{{count}} visualizador encontrado',
        results_one: '{{count}} visualizador encontrado',
        results_other: '{{count}} visualizadores encontrados',
        suggestion: 'Tente buscar algo como "{{exampleOne}}" ou "{{exampleTwo}}".',
        clear: 'Limpar busca'
      },
      categories: {
        image_standard: 'FORMATOS DE IMAGEM PADRÃO',
        document: 'FORMATOS DE DOCUMENTO',
        spreadsheet: 'FORMATOS DE PLANILHA',
        code_data: 'FORMATOS DE CÓDIGO E DADOS',
        image_raw: 'FORMATOS RAW DE CÂMERA'
      },
      features: {
        title: 'Por que escolher nossos visualizadores?',
        items: [
          {
            title: 'Pré-visualização instantânea',
            description: 'Visualize arquivos instantaneamente sem baixar ou instalar software.'
          },
          {
            title: 'Seguro e privado',
            description: 'Os arquivos são processados localmente e nunca são armazenados em nossos servidores.'
          },
          {
            title: 'Suporte universal',
            description: 'Suporte para mais de 50 formatos de arquivo em todas as categorias principais.'
          }
        ]
      },
      actions: {
        view: 'Visualizar agora'
      },
      no_results: {
        title: 'Nenhum visualizador encontrado',
        description: 'Tente buscar algo como "{{exampleOne}}" ou "{{exampleTwo}}".',
        clear: 'Limpar busca'
      },
      formats: {
        jpeg: { title: 'Visualizador JPEG', description: 'Visualize imagens JPEG com controles de zoom e pan.' },
        png: { title: 'Visualizador PNG', description: 'Visualize imagens PNG com suporte a transparência.' },
        webp: { title: 'Visualizador WebP', description: 'Visualize imagens WebP com compressão moderna.' },
        gif: { title: 'Visualizador GIF', description: 'Visualize imagens GIF animadas com controles de reprodução.' },
        svg: { title: 'Visualizador SVG', description: 'Visualize gráficos vetoriais escaláveis com zoom.' },
        bmp: { title: 'Visualizador BMP', description: 'Visualize imagens bitmap com suporte a profundidade de cor.' },
        ico: { title: 'Visualizador ICO', description: 'Visualize arquivos de ícones do Windows com múltiplos tamanhos.' },
        heic: { title: 'Visualizador HEIC', description: 'Visualize imagens HEIC de câmeras modernas.' },
        avif: { title: 'Visualizador AVIF', description: 'Visualize imagens AVIF com compressão de próxima geração.' },
        pdf: { title: 'Visualizador PDF', description: 'Visualize documentos PDF com navegação de páginas.' },
        docx: { title: 'Visualizador DOCX', description: 'Visualize documentos Microsoft Word.' },
        rtf: { title: 'Visualizador RTF', description: 'Visualize documentos Rich Text Format.' },
        odt: { title: 'Visualizador ODT', description: 'Visualize arquivos de texto OpenDocument.' },
        txt: { title: 'Visualizador TXT', description: 'Visualize arquivos de texto simples com destaque de sintaxe.' },
        md: { title: 'Visualizador Markdown', description: 'Visualize arquivos Markdown com formatação renderizada.' },
        xlsx: { title: 'Visualizador Excel', description: 'Visualize planilhas Excel com suporte a fórmulas.' },
        csv: { title: 'Visualizador CSV', description: 'Visualize arquivos CSV com formatação de tabela.' },
        ods: { title: 'Visualizador ODS', description: 'Visualize arquivos de planilha OpenDocument.' },
        json: { title: 'Visualizador JSON', description: 'Visualize arquivos JSON com destaque de sintaxe e formatação.' },
        xml: { title: 'Visualizador XML', description: 'Visualize arquivos XML com estrutura de árvore.' },
        html: { title: 'Visualizador HTML', description: 'Visualize arquivos HTML com conteúdo renderizado.' },
        css: { title: 'Visualizador CSS', description: 'Visualize arquivos CSS com destaque de sintaxe.' },
        js: { title: 'Visualizador JavaScript', description: 'Visualize arquivos JS com destaque de sintaxe.' },
        py: { title: 'Visualizador Python', description: 'Visualize arquivos Python com destaque de sintaxe.' },
        nef: { title: 'Visualizador NEF', description: 'Visualize arquivos RAW de câmeras Nikon.' },
        cr2: { title: 'Visualizador CR2', description: 'Visualize arquivos RAW de câmeras Canon.' },
        dcr: { title: 'Visualizador DCR', description: 'Visualize arquivos RAW de câmeras Kodak.' },
        x3f: { title: 'Visualizador X3F', description: 'Visualize arquivos RAW de câmeras Sigma.' },
        arw: { title: 'Visualizador ARW', description: 'Visualize arquivos RAW de câmeras Sony.' },
        raf: { title: 'Visualizador RAF', description: 'Visualize arquivos RAW de câmeras Fuji.' },
        orf: { title: 'Visualizador ORF', description: 'Visualize arquivos RAW de câmeras Olympus.' },
        dng: { title: 'Visualizador DNG', description: 'Visualize arquivos Adobe Digital Negative.' },
        pef: { title: 'Visualizador PEF', description: 'Visualize arquivos RAW de câmeras Pentax.' }
      }
    }
  },
  vi: {
    viewers_page: {
      meta: {
        title: 'Trình Xem File Trực Tuyến Chuyên Nghiệp - Xem Bất Kỳ File Nào Không Cần Cài Đặt Phần Mềm | FormiPeek',
        description:
          'Xem và xem trước bất kỳ file nào trực tiếp trong trình duyệt của bạn không cần cài đặt phần mềm. Trình xem chuyên nghiệp cho hơn 50 định dạng bao gồm hình ảnh, tài liệu, PDF, bảng tính và nhiều hơn nữa. Nhanh chóng, an toàn và hoàn toàn miễn phí.',
        keywords:
          'trình xem file trực tuyến, xem file không cần phần mềm, trình xem file trình duyệt, trình xem file chuyên nghiệp, trình xem pdf trực tuyến, trình xem tài liệu, trình xem hình ảnh, không cần tải xuống, xem trước file ngay lập tức'
      },
      schema: {
        name: 'Trình xem tệp trực tuyến',
        description:
          'Xem trước tệp ở hơn 50 định dạng trực tiếp trong trình duyệt của bạn với các trình xem chuyên dụng cho từng loại tệp.'
      },
      hero: {
        title: 'Trình xem tệp',
        description:
          'Xem và xem trước tệp trong trình duyệt của bạn mà không cần tải xuống. Hỗ trợ hình ảnh, tài liệu, bảng tính và nhiều hơn nữa.'
      },
      search: {
        placeholder: 'Tìm trình xem... (vd. PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: 'Tìm thấy {{count}} trình xem',
        results_one: 'Tìm thấy {{count}} trình xem',
        results_other: 'Tìm thấy {{count}} trình xem',
        suggestion: 'Thử tìm kiếm thứ gì đó như "{{exampleOne}}" hoặc "{{exampleTwo}}".',
        clear: 'Xóa tìm kiếm'
      },
      categories: {
        image_standard: 'ĐỊNH DẠNG HÌNH ẢNH CHUẨN',
        document: 'ĐỊNH DẠNG TÀI LIỆU',
        spreadsheet: 'ĐỊNH DẠNG BẢNG TÍNH',
        code_data: 'ĐỊNH DẠNG MÃ & DỮ LIỆU',
        image_raw: 'ĐỊNH DẠNG RAW CAMERA'
      },
      features: {
        title: 'Tại sao chọn trình xem của chúng tôi?',
        items: [
          {
            title: 'Xem trước tức thì',
            description: 'Xem tệp ngay lập tức mà không cần tải xuống hoặc cài đặt phần mềm.'
          },
          {
            title: 'An toàn & riêng tư',
            description: 'Tệp được xử lý cục bộ và không bao giờ được lưu trữ trên máy chủ của chúng tôi.'
          },
          {
            title: 'Hỗ trợ toàn diện',
            description: 'Hỗ trợ hơn 50 định dạng tệp trong tất cả các danh mục chính.'
          }
        ]
      },
      actions: {
        view: 'Xem ngay'
      },
      no_results: {
        title: 'Không tìm thấy trình xem',
        description: 'Thử tìm kiếm thứ gì đó như "{{exampleOne}}" hoặc "{{exampleTwo}}".',
        clear: 'Xóa tìm kiếm'
      },
      formats: {
        jpeg: { title: 'Trình xem JPEG', description: 'Xem hình ảnh JPEG với điều khiển thu phóng và pan.' },
        png: { title: 'Trình xem PNG', description: 'Xem hình ảnh PNG với hỗ trợ trong suốt.' },
        webp: { title: 'Trình xem WebP', description: 'Xem hình ảnh WebP với nén hiện đại.' },
        gif: { title: 'Trình xem GIF', description: 'Xem hình ảnh GIF động với điều khiển phát lại.' },
        svg: { title: 'Trình xem SVG', description: 'Xem đồ họa vector có thể mở rộng với thu phóng.' },
        bmp: { title: 'Trình xem BMP', description: 'Xem hình ảnh bitmap với hỗ trợ độ sâu màu.' },
        ico: { title: 'Trình xem ICO', description: 'Xem tệp biểu tượng Windows với nhiều kích thước.' },
        heic: { title: 'Trình xem HEIC', description: 'Xem hình ảnh HEIC từ camera hiện đại.' },
        avif: { title: 'Trình xem AVIF', description: 'Xem hình ảnh AVIF với nén thế hệ tiếp theo.' },
        pdf: { title: 'Trình xem PDF', description: 'Xem tài liệu PDF với điều hướng trang.' },
        docx: { title: 'Trình xem DOCX', description: 'Xem tài liệu Microsoft Word.' },
        rtf: { title: 'Trình xem RTF', description: 'Xem tài liệu Rich Text Format.' },
        odt: { title: 'Trình xem ODT', description: 'Xem tệp văn bản OpenDocument.' },
        txt: { title: 'Trình xem TXT', description: 'Xem tệp văn bản thuần với tô sáng cú pháp.' },
        md: { title: 'Trình xem Markdown', description: 'Xem tệp Markdown với định dạng được kết xuất.' },
        xlsx: { title: 'Trình xem Excel', description: 'Xem bảng tính Excel với hỗ trợ công thức.' },
        csv: { title: 'Trình xem CSV', description: 'Xem tệp CSV với định dạng bảng.' },
        ods: { title: 'Trình xem ODS', description: 'Xem tệp bảng tính OpenDocument.' },
        json: { title: 'Trình xem JSON', description: 'Xem tệp JSON với tô sáng cú pháp và định dạng.' },
        xml: { title: 'Trình xem XML', description: 'Xem tệp XML với cấu trúc cây.' },
        html: { title: 'Trình xem HTML', description: 'Xem tệp HTML với nội dung được kết xuất.' },
        css: { title: 'Trình xem CSS', description: 'Xem tệp CSS với tô sáng cú pháp.' },
        js: { title: 'Trình xem JavaScript', description: 'Xem tệp JS với tô sáng cú pháp.' },
        py: { title: 'Trình xem Python', description: 'Xem tệp Python với tô sáng cú pháp.' },
        nef: { title: 'Trình xem NEF', description: 'Xem tệp RAW camera Nikon.' },
        cr2: { title: 'Trình xem CR2', description: 'Xem tệp RAW camera Canon.' },
        dcr: { title: 'Trình xem DCR', description: 'Xem tệp RAW camera Kodak.' },
        x3f: { title: 'Trình xem X3F', description: 'Xem tệp RAW camera Sigma.' },
        arw: { title: 'Trình xem ARW', description: 'Xem tệp RAW camera Sony.' },
        raf: { title: 'Trình xem RAF', description: 'Xem tệp RAW camera Fuji.' },
        orf: { title: 'Trình xem ORF', description: 'Xem tệp RAW camera Olympus.' },
        dng: { title: 'Trình xem DNG', description: 'Xem tệp Adobe Digital Negative.' },
        pef: { title: 'Trình xem PEF', description: 'Xem tệp RAW camera Pentax.' }
      }
    }
  },
  tr: {
    viewers_page: {
      meta: {
        title: 'Profesyonel Çevrimiçi Dosya Görüntüleyici - Yazılım Yüklemeden Herhangi Bir Dosyayı Görüntüle | FormiPeek',
        description:
          'Yazılım yüklemeden herhangi bir dosyayı doğrudan tarayıcınızda görüntüleyin ve önizleyin. Görseller, belgeler, PDF\'ler, elektronik tablolar ve daha fazlası dahil 50\'den fazla format için profesyonel görüntüleyiciler. Hızlı, güvenli ve tamamen ücretsiz.',
        keywords:
          'çevrimiçi dosya görüntüleyici, yazılım olmadan dosya görüntüleme, tarayıcı dosya görüntüleyici, profesyonel dosya görüntüleyici, çevrimiçi pdf görüntüleyici, belge görüntüleyici, görsel görüntüleyici, indirme yok, anlık dosya önizleme'
      },
      schema: {
        name: 'Çevrimiçi dosya görüntüleyiciler',
        description:
          '50\'den fazla formatta dosyaları tarayıcınızda doğrudan önizleyin, her dosya türü için özel görüntüleyicilerle.'
      },
      hero: {
        title: 'Dosya görüntüleyiciler',
        description:
          'Dosyaları indirmeden tarayıcınızda görüntüleyin ve önizleyin. Görüntüler, belgeler, elektronik tablolar ve daha fazlası için destek.'
      },
      search: {
        placeholder: 'Görüntüleyici ara... (örn. PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: '{{count}} görüntüleyici bulundu',
        results_one: '{{count}} görüntüleyici bulundu',
        results_other: '{{count}} görüntüleyici bulundu',
        suggestion: '"{{exampleOne}}" veya "{{exampleTwo}}" gibi bir şey aramayı deneyin.',
        clear: 'Aramayı temizle'
      },
      categories: {
        image_standard: 'STANDART GÖRÜNTÜ FORMATLARI',
        document: 'BELGE FORMATLARI',
        spreadsheet: 'ELEKTRONİK TABLO FORMATLARI',
        code_data: 'KOD & VERİ FORMATLARI',
        image_raw: 'RAW KAMERA FORMATLARI'
      },
      features: {
        title: 'Neden görüntüleyicilerimizi seçmelisiniz?',
        items: [
          {
            title: 'Anında önizleme',
            description: 'Yazılım indirmeden veya kurmadan dosyaları anında görüntüleyin.'
          },
          {
            title: 'Güvenli ve özel',
            description: 'Dosyalar yerel olarak işlenir ve sunucularımızda asla saklanmaz.'
          },
          {
            title: 'Evrensel destek',
            description: 'Tüm ana kategorilerde 50\'den fazla dosya formatı desteği.'
          }
        ]
      },
      actions: {
        view: 'Şimdi görüntüle'
      },
      no_results: {
        title: 'Görüntüleyici bulunamadı',
        description: '"{{exampleOne}}" veya "{{exampleTwo}}" gibi bir şey aramayı deneyin.',
        clear: 'Aramayı temizle'
      },
      formats: {
        jpeg: { title: 'JPEG Görüntüleyici', description: 'Yakınlaştırma ve kaydırma kontrolleriyle JPEG görüntülerini görüntüleyin.' },
        png: { title: 'PNG Görüntüleyici', description: 'Şeffaflık desteğiyle PNG görüntülerini görüntüleyin.' },
        webp: { title: 'WebP Görüntüleyici', description: 'Modern sıkıştırmayla WebP görüntülerini görüntüleyin.' },
        gif: { title: 'GIF Görüntüleyici', description: 'Oynatma kontrolleriyle animasyonlu GIF görüntülerini görüntüleyin.' },
        svg: { title: 'SVG Görüntüleyici', description: 'Yakınlaştırmayla ölçeklenebilir vektör grafiklerini görüntüleyin.' },
        bmp: { title: 'BMP Görüntüleyici', description: 'Renk derinliği desteğiyle bitmap görüntülerini görüntüleyin.' },
        ico: { title: 'ICO Görüntüleyici', description: 'Birden fazla boyutta Windows simge dosyalarını görüntüleyin.' },
        heic: { title: 'HEIC Görüntüleyici', description: 'Modern kameralardan HEIC görüntülerini görüntüleyin.' },
        avif: { title: 'AVIF Görüntüleyici', description: 'Yeni nesil sıkıştırmayla AVIF görüntülerini görüntüleyin.' },
        pdf: { title: 'PDF Görüntüleyici', description: 'Sayfa gezintisiyle PDF belgelerini görüntüleyin.' },
        docx: { title: 'DOCX Görüntüleyici', description: 'Microsoft Word belgelerini görüntüleyin.' },
        rtf: { title: 'RTF Görüntüleyici', description: 'Rich Text Format belgelerini görüntüleyin.' },
        odt: { title: 'ODT Görüntüleyici', description: 'OpenDocument metin dosyalarını görüntüleyin.' },
        txt: { title: 'TXT Görüntüleyici', description: 'Sözdizimi vurgulama ile düz metin dosyalarını görüntüleyin.' },
        md: { title: 'Markdown Görüntüleyici', description: 'İşlenmiş biçimlendirmeyle Markdown dosyalarını görüntüleyin.' },
        xlsx: { title: 'Excel Görüntüleyici', description: 'Formül desteğiyle Excel elektronik tablolarını görüntüleyin.' },
        csv: { title: 'CSV Görüntüleyici', description: 'Tablo biçimlendirmesiyle CSV dosyalarını görüntüleyin.' },
        ods: { title: 'ODS Görüntüleyici', description: 'OpenDocument elektronik tablo dosyalarını görüntüleyin.' },
        json: { title: 'JSON Görüntüleyici', description: 'Sözdizimi vurgulama ve biçimlendirmeyle JSON dosyalarını görüntüleyin.' },
        xml: { title: 'XML Görüntüleyici', description: 'Ağaç yapısıyla XML dosyalarını görüntüleyin.' },
        html: { title: 'HTML Görüntüleyici', description: 'İşlenmiş içerikle HTML dosyalarını görüntüleyin.' },
        css: { title: 'CSS Görüntüleyici', description: 'Sözdizimi vurgulama ile CSS dosyalarını görüntüleyin.' },
        js: { title: 'JavaScript Görüntüleyici', description: 'Sözdizimi vurgulama ile JS dosyalarını görüntüleyin.' },
        py: { title: 'Python Görüntüleyici', description: 'Sözdizimi vurgulama ile Python dosyalarını görüntüleyin.' },
        nef: { title: 'NEF Görüntüleyici', description: 'Nikon ham kamera dosyalarını görüntüleyin.' },
        cr2: { title: 'CR2 Görüntüleyici', description: 'Canon ham kamera dosyalarını görüntüleyin.' },
        dcr: { title: 'DCR Görüntüleyici', description: 'Kodak ham kamera dosyalarını görüntüleyin.' },
        x3f: { title: 'X3F Görüntüleyici', description: 'Sigma ham kamera dosyalarını görüntüleyin.' },
        arw: { title: 'ARW Görüntüleyici', description: 'Sony ham kamera dosyalarını görüntüleyin.' },
        raf: { title: 'RAF Görüntüleyici', description: 'Fuji ham kamera dosyalarını görüntüleyin.' },
        orf: { title: 'ORF Görüntüleyici', description: 'Olympus ham kamera dosyalarını görüntüleyin.' },
        dng: { title: 'DNG Görüntüleyici', description: 'Adobe Digital Negative dosyalarını görüntüleyin.' },
        pef: { title: 'PEF Görüntüleyici', description: 'Pentax ham kamera dosyalarını görüntüleyin.' }
      }
    }
  },
  ru: {
    viewers_page: {
      meta: {
        title: 'Профессиональная Онлайн-Программа Просмотра Файлов - Просматривайте Любые Файлы Без Установки ПО | FormiPeek',
        description:
          'Просматривайте и предварительно просматривайте любые файлы прямо в браузере без установки программного обеспечения. Профессиональные просмотрщики для более 50 форматов, включая изображения, документы, PDF, электронные таблицы и другие. Быстро, безопасно и полностью бесплатно.',
        keywords:
          'онлайн-просмотрщик файлов, просмотр файлов без программ, просмотрщик файлов в браузере, профессиональный просмотрщик файлов, онлайн-просмотрщик pdf, просмотрщик документов, просмотрщик изображений, без загрузки, мгновенный предпросмотр файлов'
      },
      schema: {
        name: 'Онлайн-просмотрщики файлов',
        description:
          'Предварительный просмотр файлов в более чем 50 форматах прямо в браузере со специализированными просмотрщиками для каждого типа файлов.'
      },
      hero: {
        title: 'Просмотрщики файлов',
        description:
          'Просматривайте и предварительно просматривайте файлы в браузере без загрузки. Поддержка изображений, документов, электронных таблиц и многого другого.'
      },
      search: {
        placeholder: 'Поиск просмотрщиков... (например, PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: 'Найдено {{count}} просмотрщик',
        results_one: 'Найден {{count}} просмотрщик',
        results_few: 'Найдено {{count}} просмотрщика',
        results_many: 'Найдено {{count}} просмотрщиков',
        results_other: 'Найдено {{count}} просмотрщика',
        suggestion: 'Попробуйте найти что-то вроде "{{exampleOne}}" или "{{exampleTwo}}".',
        clear: 'Очистить поиск'
      },
      categories: {
        image_standard: 'СТАНДАРТНЫЕ ФОРМАТЫ ИЗОБРАЖЕНИЙ',
        document: 'ФОРМАТЫ ДОКУМЕНТОВ',
        spreadsheet: 'ФОРМАТЫ ЭЛЕКТРОННЫХ ТАБЛИЦ',
        code_data: 'ФОРМАТЫ КОДА И ДАННЫХ',
        image_raw: 'RAW ФОРМАТЫ КАМЕР'
      },
      features: {
        title: 'Почему выбрать наши просмотрщики?',
        items: [
          {
            title: 'Мгновенный предпросмотр',
            description: 'Просматривайте файлы мгновенно без загрузки или установки программного обеспечения.'
          },
          {
            title: 'Безопасно и конфиденциально',
            description: 'Файлы обрабатываются локально и никогда не сохраняются на наших серверах.'
          },
          {
            title: 'Универсальная поддержка',
            description: 'Поддержка более 50 форматов файлов во всех основных категориях.'
          }
        ]
      },
      actions: {
        view: 'Просмотреть сейчас'
      },
      no_results: {
        title: 'Просмотрщики не найдены',
        description: 'Попробуйте найти что-то вроде "{{exampleOne}}" или "{{exampleTwo}}".',
        clear: 'Очистить поиск'
      },
      formats: {
        jpeg: { title: 'Просмотрщик JPEG', description: 'Просматривайте изображения JPEG с элементами управления масштабированием и панорамированием.' },
        png: { title: 'Просмотрщик PNG', description: 'Просматривайте изображения PNG с поддержкой прозрачности.' },
        webp: { title: 'Просмотрщик WebP', description: 'Просматривайте изображения WebP с современным сжатием.' },
        gif: { title: 'Просмотрщик GIF', description: 'Просматривайте анимированные изображения GIF с элементами управления воспроизведением.' },
        svg: { title: 'Просмотрщик SVG', description: 'Просматривайте масштабируемую векторную графику с масштабированием.' },
        bmp: { title: 'Просмотрщик BMP', description: 'Просматривайте растровые изображения с поддержкой глубины цвета.' },
        ico: { title: 'Просмотрщик ICO', description: 'Просматривайте файлы значков Windows с несколькими размерами.' },
        heic: { title: 'Просмотрщик HEIC', description: 'Просматривайте изображения HEIC с современных камер.' },
        avif: { title: 'Просмотрщик AVIF', description: 'Просматривайте изображения AVIF со сжатием следующего поколения.' },
        pdf: { title: 'Просмотрщик PDF', description: 'Просматривайте документы PDF с навигацией по страницам.' },
        docx: { title: 'Просмотрщик DOCX', description: 'Просматривайте документы Microsoft Word.' },
        rtf: { title: 'Просмотрщик RTF', description: 'Просматривайте документы в формате Rich Text Format.' },
        odt: { title: 'Просмотрщик ODT', description: 'Просматривайте текстовые файлы OpenDocument.' },
        txt: { title: 'Просмотрщик TXT', description: 'Просматривайте текстовые файлы с подсветкой синтаксиса.' },
        md: { title: 'Просмотрщик Markdown', description: 'Просматривайте файлы Markdown с отрендеренным форматированием.' },
        xlsx: { title: 'Просмотрщик Excel', description: 'Просматривайте электронные таблицы Excel с поддержкой формул.' },
        csv: { title: 'Просмотрщик CSV', description: 'Просматривайте файлы CSV с табличным форматированием.' },
        ods: { title: 'Просмотрщик ODS', description: 'Просматривайте файлы электронных таблиц OpenDocument.' },
        json: { title: 'Просмотрщик JSON', description: 'Просматривайте файлы JSON с подсветкой синтаксиса и форматированием.' },
        xml: { title: 'Просмотрщик XML', description: 'Просматривайте файлы XML с древовидной структурой.' },
        html: { title: 'Просмотрщик HTML', description: 'Просматривайте файлы HTML с отрендеренным содержимым.' },
        css: { title: 'Просмотрщик CSS', description: 'Просматривайте файлы CSS с подсветкой синтаксиса.' },
        js: { title: 'Просмотрщик JavaScript', description: 'Просматривайте файлы JS с подсветкой синтаксиса.' },
        py: { title: 'Просмотрщик Python', description: 'Просматривайте файлы Python с подсветкой синтаксиса.' },
        nef: { title: 'Просмотрщик NEF', description: 'Просматривайте RAW файлы камер Nikon.' },
        cr2: { title: 'Просмотрщик CR2', description: 'Просматривайте RAW файлы камер Canon.' },
        dcr: { title: 'Просмотрщик DCR', description: 'Просматривайте RAW файлы камер Kodak.' },
        x3f: { title: 'Просмотрщик X3F', description: 'Просматривайте RAW файлы камер Sigma.' },
        arw: { title: 'Просмотрщик ARW', description: 'Просматривайте RAW файлы камер Sony.' },
        raf: { title: 'Просмотрщик RAF', description: 'Просматривайте RAW файлы камер Fuji.' },
        orf: { title: 'Просмотрщик ORF', description: 'Просматривайте RAW файлы камер Olympus.' },
        dng: { title: 'Просмотрщик DNG', description: 'Просматривайте файлы Adobe Digital Negative.' },
        pef: { title: 'Просмотрщик PEF', description: 'Просматривайте RAW файлы камер Pentax.' }
      }
    }
  },
  ar: {
    viewers_page: {
      meta: {
        title: 'عارض ملفات محترف عبر الإنترنت - عرض أي ملف دون تثبيت برامج | FormiPeek',
        description:
          'عرض ومعاينة أي ملف مباشرة في متصفحك دون تثبيت برامج. عارضات محترفة لأكثر من 50 تنسيقًا بما في ذلك الصور والمستندات وPDF وجداول البيانات والمزيد. سريع وآمن ومجاني بالكامل.',
        keywords:
          'عارض ملفات عبر الإنترنت, عرض ملفات دون برامج, عارض ملفات المتصفح, عارض ملفات محترف, عارض pdf عبر الإنترنت, عارض المستندات, عارض الصور, بدون تنزيل, معاينة ملفات فورية'
      },
      schema: {
        name: 'عارضات الملفات عبر الإنترنت',
        description:
          'معاينة الملفات بأكثر من 50 تنسيقًا مباشرة في متصفحك مع عارضات متخصصة لكل نوع ملف.'
      },
      hero: {
        title: 'عارضات الملفات',
        description:
          'عرض ومعاينة الملفات في متصفحك دون تنزيل. دعم الصور والمستندات وجداول البيانات والمزيد.'
      },
      search: {
        placeholder: 'البحث عن العارضات... (مثل PDF، JPEG، Excel، JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: 'تم العثور على {{count}} عارض',
        results_one: 'تم العثور على {{count}} عارض',
        results_other: 'تم العثور على {{count}} عارض',
        suggestion: 'حاول البحث عن شيء مثل "{{exampleOne}}" أو "{{exampleTwo}}".',
        clear: 'مسح البحث'
      },
      categories: {
        image_standard: 'تنسيقات الصور القياسية',
        document: 'تنسيقات المستندات',
        spreadsheet: 'تنسيقات جداول البيانات',
        code_data: 'تنسيقات الكود والبيانات',
        image_raw: 'تنسيقات RAW للكاميرا'
      },
      features: {
        title: 'لماذا تختار عارضاتنا؟',
        items: [
          {
            title: 'معاينة فورية',
            description: 'عرض الملفات على الفور دون تنزيل أو تثبيت برامج.'
          },
          {
            title: 'آمن وخاص',
            description: 'يتم معالجة الملفات محليًا ولا يتم تخزينها على خوادمنا أبدًا.'
          },
          {
            title: 'دعم شامل',
            description: 'دعم أكثر من 50 تنسيق ملف في جميع الفئات الرئيسية.'
          }
        ]
      },
      actions: {
        view: 'عرض الآن'
      },
      no_results: {
        title: 'لم يتم العثور على عارضات',
        description: 'حاول البحث عن شيء مثل "{{exampleOne}}" أو "{{exampleTwo}}".',
        clear: 'مسح البحث'
      },
      formats: {
        jpeg: { title: 'عارض JPEG', description: 'عرض صور JPEG مع عناصر التحكم في التكبير والتحريك.' },
        png: { title: 'عارض PNG', description: 'عرض صور PNG مع دعم الشفافية.' },
        webp: { title: 'عارض WebP', description: 'عرض صور WebP مع ضغط حديث.' },
        gif: { title: 'عارض GIF', description: 'عرض صور GIF المتحركة مع عناصر التحكم في التشغيل.' },
        svg: { title: 'عارض SVG', description: 'عرض الرسوم المتجهة القابلة للتوسيع مع التكبير.' },
        bmp: { title: 'عارض BMP', description: 'عرض صور الصور النقطية مع دعم عمق اللون.' },
        ico: { title: 'عارض ICO', description: 'عرض ملفات أيقونات Windows بأحجام متعددة.' },
        heic: { title: 'عارض HEIC', description: 'عرض صور HEIC من الكاميرات الحديثة.' },
        avif: { title: 'عارض AVIF', description: 'عرض صور AVIF مع ضغط الجيل القادم.' },
        pdf: { title: 'عارض PDF', description: 'عرض مستندات PDF مع التنقل بين الصفحات.' },
        docx: { title: 'عارض DOCX', description: 'عرض مستندات Microsoft Word.' },
        rtf: { title: 'عارض RTF', description: 'عرض مستندات Rich Text Format.' },
        odt: { title: 'عارض ODT', description: 'عرض ملفات نص OpenDocument.' },
        txt: { title: 'عارض TXT', description: 'عرض ملفات النص العادي مع تمييز بناء الجملة.' },
        md: { title: 'عارض Markdown', description: 'عرض ملفات Markdown مع تنسيق مقدم.' },
        xlsx: { title: 'عارض Excel', description: 'عرض جداول بيانات Excel مع دعم الصيغ.' },
        csv: { title: 'عارض CSV', description: 'عرض ملفات CSV مع تنسيق الجدول.' },
        ods: { title: 'عارض ODS', description: 'عرض ملفات جداول بيانات OpenDocument.' },
        json: { title: 'عارض JSON', description: 'عرض ملفات JSON مع تمييز بناء الجملة والتنسيق.' },
        xml: { title: 'عارض XML', description: 'عرض ملفات XML مع بنية الشجرة.' },
        html: { title: 'عارض HTML', description: 'عرض ملفات HTML مع محتوى مقدم.' },
        css: { title: 'عارض CSS', description: 'عرض ملفات CSS مع تمييز بناء الجملة.' },
        js: { title: 'عارض JavaScript', description: 'عرض ملفات JS مع تمييز بناء الجملة.' },
        py: { title: 'عارض Python', description: 'عرض ملفات Python مع تمييز بناء الجملة.' },
        nef: { title: 'عارض NEF', description: 'عرض ملفات RAW لكاميرات Nikon.' },
        cr2: { title: 'عارض CR2', description: 'عرض ملفات RAW لكاميرات Canon.' },
        dcr: { title: 'عارض DCR', description: 'عرض ملفات RAW لكاميرات Kodak.' },
        x3f: { title: 'عارض X3F', description: 'عرض ملفات RAW لكاميرات Sigma.' },
        arw: { title: 'عارض ARW', description: 'عرض ملفات RAW لكاميرات Sony.' },
        raf: { title: 'عارض RAF', description: 'عرض ملفات RAW لكاميرات Fuji.' },
        orf: { title: 'عارض ORF', description: 'عرض ملفات RAW لكاميرات Olympus.' },
        dng: { title: 'عارض DNG', description: 'عرض ملفات Adobe Digital Negative.' },
        pef: { title: 'عارض PEF', description: 'عرض ملفات RAW لكاميرات Pentax.' }
      }
    }
  },
  th: {
    viewers_page: {
      meta: {
        title: 'โปรแกรมดูไฟล์ออนไลน์มืออาชีพ - ดูไฟล์ใดๆ โดยไม่ต้องติดตั้งซอฟต์แวร์ | FormiPeek',
        description:
          'ดูและแสดงตัวอย่างไฟล์ใดๆ โดยตรงในเบราว์เซอร์ของคุณโดยไม่ต้องติดตั้งซอฟต์แวร์ โปรแกรมดูระดับมืออาชีพสำหรับรูปแบบมากกว่า 50 รูปแบบ รวมถึงรูปภาพ เอกสาร PDF สเปรดชีต และอื่นๆ รวดเร็ว ปลอดภัย และฟรีสมบูรณ์',
        keywords:
          'โปรแกรมดูไฟล์ออนไลน์, ดูไฟล์โดยไม่ต้องใช้ซอฟต์แวร์, โปรแกรมดูไฟล์ในเบราว์เซอร์, โปรแกรมดูไฟล์มืออาชีพ, โปรแกรมดู pdf ออนไลน์, โปรแกรมดูเอกสาร, โปรแกรมดูรูปภาพ, ไม่ต้องดาวน์โหลด, ดูตัวอย่างไฟล์ทันที'
      },
      schema: {
        name: 'โปรแกรมดูไฟล์ออนไลน์',
        description:
          'แสดงตัวอย่างไฟล์ในมากกว่า 50 รูปแบบโดยตรงในเบราว์เซอร์ของคุณด้วยโปรแกรมดูเฉพาะสำหรับแต่ละประเภทไฟล์'
      },
      hero: {
        title: 'โปรแกรมดูไฟล์',
        description:
          'ดูและแสดงตัวอย่างไฟล์ในเบราว์เซอร์ของคุณโดยไม่ต้องดาวน์โหลด รองรับรูปภาพ เอกสาร สเปรดชีต และอื่นๆ'
      },
      search: {
        placeholder: 'ค้นหาโปรแกรมดู... (เช่น PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: 'พบ {{count}} โปรแกรมดู',
        results_one: 'พบ {{count}} โปรแกรมดู',
        results_other: 'พบ {{count}} โปรแกรมดู',
        suggestion: 'ลองค้นหาบางอย่างเช่น "{{exampleOne}}" หรือ "{{exampleTwo}}"',
        clear: 'ล้างการค้นหา'
      },
      categories: {
        image_standard: 'รูปแบบภาพมาตรฐาน',
        document: 'รูปแบบเอกสาร',
        spreadsheet: 'รูปแบบสเปรดชีต',
        code_data: 'รูปแบบโค้ดและข้อมูล',
        image_raw: 'รูปแบบ RAW ของกล้อง'
      },
      features: {
        title: 'ทำไมต้องเลือกโปรแกรมดูของเรา?',
        items: [
          {
            title: 'แสดงตัวอย่างทันที',
            description: 'ดูไฟล์ทันทีโดยไม่ต้องดาวน์โหลดหรือติดตั้งซอฟต์แวร์'
          },
          {
            title: 'ปลอดภัยและเป็นส่วนตัว',
            description: 'ไฟล์ถูกประมวลผลในเครื่องและไม่เคยถูกเก็บไว้บนเซิร์ฟเวอร์ของเรา'
          },
          {
            title: 'รองรับครอบคลุม',
            description: 'รองรับไฟล์มากกว่า 50 รูปแบบในทุกหมวดหมู่หลัก'
          }
        ]
      },
      actions: {
        view: 'ดูตอนนี้'
      },
      no_results: {
        title: 'ไม่พบโปรแกรมดู',
        description: 'ลองค้นหาบางอย่างเช่น "{{exampleOne}}" หรือ "{{exampleTwo}}"',
        clear: 'ล้างการค้นหา'
      },
      formats: {
        jpeg: { title: 'โปรแกรมดู JPEG', description: 'ดูรูปภาพ JPEG พร้อมการควบคุมซูมและแพน' },
        png: { title: 'โปรแกรมดู PNG', description: 'ดูรูปภาพ PNG พร้อมการรองรับความโปร่งใส' },
        webp: { title: 'โปรแกรมดู WebP', description: 'ดูรูปภาพ WebP พร้อมการบีบอัดที่ทันสมัย' },
        gif: { title: 'โปรแกรมดู GIF', description: 'ดูรูปภาพ GIF แบบเคลื่อนไหวพร้อมการควบคุมการเล่น' },
        svg: { title: 'โปรแกรมดู SVG', description: 'ดูกราฟิกเวกเตอร์ที่ปรับขนาดได้พร้อมการซูม' },
        bmp: { title: 'โปรแกรมดู BMP', description: 'ดูรูปภาพบิตแมปพร้อมการรองรับความลึกของสี' },
        ico: { title: 'โปรแกรมดู ICO', description: 'ดูไฟล์ไอคอน Windows พร้อมหลายขนาด' },
        heic: { title: 'โปรแกรมดู HEIC', description: 'ดูรูปภาพ HEIC จากกล้องสมัยใหม่' },
        avif: { title: 'โปรแกรมดู AVIF', description: 'ดูรูปภาพ AVIF พร้อมการบีบอัดรุ่นใหม่' },
        pdf: { title: 'โปรแกรมดู PDF', description: 'ดูเอกสาร PDF พร้อมการนำทางหน้า' },
        docx: { title: 'โปรแกรมดู DOCX', description: 'ดูเอกสาร Microsoft Word' },
        rtf: { title: 'โปรแกรมดู RTF', description: 'ดูเอกสาร Rich Text Format' },
        odt: { title: 'โปรแกรมดู ODT', description: 'ดูไฟล์ข้อความ OpenDocument' },
        txt: { title: 'โปรแกรมดู TXT', description: 'ดูไฟล์ข้อความธรรมดาพร้อมการเน้นไวยากรณ์' },
        md: { title: 'โปรแกรมดู Markdown', description: 'ดูไฟล์ Markdown พร้อมการจัดรูปแบบที่แสดงผล' },
        xlsx: { title: 'โปรแกรมดู Excel', description: 'ดูสเปรดชีต Excel พร้อมการรองรับสูตร' },
        csv: { title: 'โปรแกรมดู CSV', description: 'ดูไฟล์ CSV พร้อมการจัดรูปแบบตาราง' },
        ods: { title: 'โปรแกรมดู ODS', description: 'ดูไฟล์สเปรดชีต OpenDocument' },
        json: { title: 'โปรแกรมดู JSON', description: 'ดูไฟล์ JSON พร้อมการเน้นไวยากรณ์และการจัดรูปแบบ' },
        xml: { title: 'โปรแกรมดู XML', description: 'ดูไฟล์ XML พร้อมโครงสร้างต้นไม้' },
        html: { title: 'โปรแกรมดู HTML', description: 'ดูไฟล์ HTML พร้อมเนื้อหาที่แสดงผล' },
        css: { title: 'โปรแกรมดู CSS', description: 'ดูไฟล์ CSS พร้อมการเน้นไวยากรณ์' },
        js: { title: 'โปรแกรมดู JavaScript', description: 'ดูไฟล์ JS พร้อมการเน้นไวยากรณ์' },
        py: { title: 'โปรแกรมดู Python', description: 'ดูไฟล์ Python พร้อมการเน้นไวยากรณ์' },
        nef: { title: 'โปรแกรมดู NEF', description: 'ดูไฟล์ RAW ของกล้อง Nikon' },
        cr2: { title: 'โปรแกรมดู CR2', description: 'ดูไฟล์ RAW ของกล้อง Canon' },
        dcr: { title: 'โปรแกรมดู DCR', description: 'ดูไฟล์ RAW ของกล้อง Kodak' },
        x3f: { title: 'โปรแกรมดู X3F', description: 'ดูไฟล์ RAW ของกล้อง Sigma' },
        arw: { title: 'โปรแกรมดู ARW', description: 'ดูไฟล์ RAW ของกล้อง Sony' },
        raf: { title: 'โปรแกรมดู RAF', description: 'ดูไฟล์ RAW ของกล้อง Fuji' },
        orf: { title: 'โปรแกรมดู ORF', description: 'ดูไฟล์ RAW ของกล้อง Olympus' },
        dng: { title: 'โปรแกรมดู DNG', description: 'ดูไฟล์ Adobe Digital Negative' },
        pef: { title: 'โปรแกรมดู PEF', description: 'ดูไฟล์ RAW ของกล้อง Pentax' }
      }
    }
  },
  ja: {
    viewers_page: {
      meta: {
        title: 'プロフェッショナルオンラインファイルビューア - ソフトウェアインストール不要であらゆるファイルを表示 | FormiPeek',
        description:
          'ソフトウェアをインストールせずに、あらゆるファイルをブラウザで直接表示およびプレビュー。画像、文書、PDF、スプレッドシートなど50以上の形式に対応したプロフェッショナルビューア。高速、安全、完全無料。',
        keywords:
          'オンラインファイルビューア, ソフトウェア不要でファイル表示, ブラウザファイルビューア, プロフェッショナルファイルビューア, オンラインpdfビューア, 文書ビューア, 画像ビューア, ダウンロード不要, 即座ファイルプレビュー'
      },
      schema: {
        name: 'オンラインファイルビューア',
        description:
          '50以上の形式のファイルをブラウザで直接プレビュー。各ファイルタイプ専用のビューアを提供。'
      },
      hero: {
        title: 'ファイルビューア',
        description:
          'ダウンロードせずにブラウザでファイルを表示およびプレビュー。画像、ドキュメント、スプレッドシートなどをサポート。'
      },
      search: {
        placeholder: 'ビューアを検索... (例: PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: '{{count}}件のビューアが見つかりました',
        results_one: '{{count}}件のビューアが見つかりました',
        results_other: '{{count}}件のビューアが見つかりました',
        suggestion: '"{{exampleOne}}"または"{{exampleTwo}}"のようなものを検索してみてください。',
        clear: '検索をクリア'
      },
      categories: {
        image_standard: '標準画像形式',
        document: 'ドキュメント形式',
        spreadsheet: 'スプレッドシート形式',
        code_data: 'コードとデータ形式',
        image_raw: 'RAWカメラ形式'
      },
      features: {
        title: 'なぜ当社のビューアを選ぶのか？',
        items: [
          {
            title: '即座にプレビュー',
            description: 'ソフトウェアをダウンロードまたはインストールせずに、ファイルを即座に表示。'
          },
          {
            title: '安全でプライベート',
            description: 'ファイルはローカルで処理され、サーバーに保存されることはありません。'
          },
          {
            title: '包括的なサポート',
            description: 'すべての主要カテゴリで50以上のファイル形式をサポート。'
          }
        ]
      },
      actions: {
        view: '今すぐ表示'
      },
      no_results: {
        title: 'ビューアが見つかりません',
        description: '"{{exampleOne}}"または"{{exampleTwo}}"のようなものを検索してみてください。',
        clear: '検索をクリア'
      },
      formats: {
        jpeg: { title: 'JPEGビューア', description: 'ズームとパンコントロールでJPEG画像を表示。' },
        png: { title: 'PNGビューア', description: '透明度サポートでPNG画像を表示。' },
        webp: { title: 'WebPビューア', description: '最新の圧縮でWebP画像を表示。' },
        gif: { title: 'GIFビューア', description: '再生コントロールでアニメーションGIF画像を表示。' },
        svg: { title: 'SVGビューア', description: 'ズームでスケーラブルベクターグラフィックを表示。' },
        bmp: { title: 'BMPビューア', description: '色深度サポートでビットマップ画像を表示。' },
        ico: { title: 'ICOビューア', description: '複数のサイズでWindowsアイコンファイルを表示。' },
        heic: { title: 'HEICビューア', description: '最新カメラのHEIC画像を表示。' },
        avif: { title: 'AVIFビューア', description: '次世代圧縮でAVIF画像を表示。' },
        pdf: { title: 'PDFビューア', description: 'ページナビゲーションでPDFドキュメントを表示。' },
        docx: { title: 'DOCXビューア', description: 'Microsoft Wordドキュメントを表示。' },
        rtf: { title: 'RTFビューア', description: 'Rich Text Formatドキュメントを表示。' },
        odt: { title: 'ODTビューア', description: 'OpenDocumentテキストファイルを表示。' },
        txt: { title: 'TXTビューア', description: '構文ハイライトでプレーンテキストファイルを表示。' },
        md: { title: 'Markdownビューア', description: 'レンダリングされたフォーマットでMarkdownファイルを表示。' },
        xlsx: { title: 'Excelビューア', description: '数式サポートでExcelスプレッドシートを表示。' },
        csv: { title: 'CSVビューア', description: 'テーブルフォーマットでCSVファイルを表示。' },
        ods: { title: 'ODSビューア', description: 'OpenDocumentスプレッドシートファイルを表示。' },
        json: { title: 'JSONビューア', description: '構文ハイライトとフォーマットでJSONファイルを表示。' },
        xml: { title: 'XMLビューア', description: 'ツリー構造でXMLファイルを表示。' },
        html: { title: 'HTMLビューア', description: 'レンダリングされたコンテンツでHTMLファイルを表示。' },
        css: { title: 'CSSビューア', description: '構文ハイライトでCSSファイルを表示。' },
        js: { title: 'JavaScriptビューア', description: '構文ハイライトでJSファイルを表示。' },
        py: { title: 'Pythonビューア', description: '構文ハイライトでPythonファイルを表示。' },
        nef: { title: 'NEFビューア', description: 'Nikon RAWカメラファイルを表示。' },
        cr2: { title: 'CR2ビューア', description: 'Canon RAWカメラファイルを表示。' },
        dcr: { title: 'DCRビューア', description: 'Kodak RAWカメラファイルを表示。' },
        x3f: { title: 'X3Fビューア', description: 'Sigma RAWカメラファイルを表示。' },
        arw: { title: 'ARWビューア', description: 'Sony RAWカメラファイルを表示。' },
        raf: { title: 'RAFビューア', description: 'Fuji RAWカメラファイルを表示。' },
        orf: { title: 'ORFビューア', description: 'Olympus RAWカメラファイルを表示。' },
        dng: { title: 'DNGビューア', description: 'Adobe Digital Negativeファイルを表示。' },
        pef: { title: 'PEFビューア', description: 'Pentax RAWカメラファイルを表示。' }
      }
    }
  },
  zh: {
    viewers_page: {
      meta: {
        title: '专业在线文件查看器 - 无需安装软件即可查看任何文件 | FormiPeek',
        description:
          '无需安装软件，直接在浏览器中查看和预览任何文件。专业级查看器支持50多种格式，包括图像、文档、PDF、电子表格等。快速、安全、完全免费。',
        keywords:
          '在线文件查看器, 无需软件查看文件, 浏览器文件查看器, 专业文件查看器, 在线pdf查看器, 文档查看器, 图像查看器, 无需下载, 即时文件预览'
      },
      schema: {
        name: '在线文件查看器',
        description:
          '在浏览器中直接预览50多种格式的文件，每种文件类型都有专门的查看器。'
      },
      hero: {
        title: '文件查看器',
        description:
          '在浏览器中查看和预览文件，无需下载。支持图像、文档、电子表格等。'
      },
      search: {
        placeholder: '搜索查看器... (例如 PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: '找到 {{count}} 个查看器',
        results_one: '找到 {{count}} 个查看器',
        results_other: '找到 {{count}} 个查看器',
        suggestion: '尝试搜索类似 "{{exampleOne}}" 或 "{{exampleTwo}}" 的内容。',
        clear: '清除搜索'
      },
      categories: {
        image_standard: '标准图像格式',
        document: '文档格式',
        spreadsheet: '电子表格格式',
        code_data: '代码和数据格式',
        image_raw: 'RAW相机格式'
      },
      features: {
        title: '为什么选择我们的查看器？',
        items: [
          {
            title: '即时预览',
            description: '无需下载或安装软件即可立即查看文件。'
          },
          {
            title: '安全私密',
            description: '文件在本地处理，永远不会存储在我们的服务器上。'
          },
          {
            title: '全面支持',
            description: '在所有主要类别中支持50多种文件格式。'
          }
        ]
      },
      actions: {
        view: '立即查看'
      },
      no_results: {
        title: '未找到查看器',
        description: '尝试搜索类似 "{{exampleOne}}" 或 "{{exampleTwo}}" 的内容。',
        clear: '清除搜索'
      },
      formats: {
        jpeg: { title: 'JPEG查看器', description: '使用缩放和平移控件查看JPEG图像。' },
        png: { title: 'PNG查看器', description: '查看支持透明度的PNG图像。' },
        webp: { title: 'WebP查看器', description: '查看具有现代压缩的WebP图像。' },
        gif: { title: 'GIF查看器', description: '使用播放控件查看动画GIF图像。' },
        svg: { title: 'SVG查看器', description: '使用缩放查看可缩放矢量图形。' },
        bmp: { title: 'BMP查看器', description: '查看支持颜色深度的位图图像。' },
        ico: { title: 'ICO查看器', description: '查看多种尺寸的Windows图标文件。' },
        heic: { title: 'HEIC查看器', description: '查看现代相机的HEIC图像。' },
        avif: { title: 'AVIF查看器', description: '查看具有下一代压缩的AVIF图像。' },
        pdf: { title: 'PDF查看器', description: '使用页面导航查看PDF文档。' },
        docx: { title: 'DOCX查看器', description: '查看Microsoft Word文档。' },
        rtf: { title: 'RTF查看器', description: '查看Rich Text Format文档。' },
        odt: { title: 'ODT查看器', description: '查看OpenDocument文本文件。' },
        txt: { title: 'TXT查看器', description: '查看带有语法高亮的纯文本文件。' },
        md: { title: 'Markdown查看器', description: '查看带有渲染格式的Markdown文件。' },
        xlsx: { title: 'Excel查看器', description: '查看支持公式的Excel电子表格。' },
        csv: { title: 'CSV查看器', description: '查看带有表格格式的CSV文件。' },
        ods: { title: 'ODS查看器', description: '查看OpenDocument电子表格文件。' },
        json: { title: 'JSON查看器', description: '查看带有语法高亮和格式化的JSON文件。' },
        xml: { title: 'XML查看器', description: '查看带有树结构的XML文件。' },
        html: { title: 'HTML查看器', description: '查看带有渲染内容的HTML文件。' },
        css: { title: 'CSS查看器', description: '查看带有语法高亮的CSS文件。' },
        js: { title: 'JavaScript查看器', description: '查看带有语法高亮的JS文件。' },
        py: { title: 'Python查看器', description: '查看带有语法高亮的Python文件。' },
        nef: { title: 'NEF查看器', description: '查看Nikon RAW相机文件。' },
        cr2: { title: 'CR2查看器', description: '查看Canon RAW相机文件。' },
        dcr: { title: 'DCR查看器', description: '查看Kodak RAW相机文件。' },
        x3f: { title: 'X3F查看器', description: '查看Sigma RAW相机文件。' },
        arw: { title: 'ARW查看器', description: '查看Sony RAW相机文件。' },
        raf: { title: 'RAF查看器', description: '查看Fuji RAW相机文件。' },
        orf: { title: 'ORF查看器', description: '查看Olympus RAW相机文件。' },
        dng: { title: 'DNG查看器', description: '查看Adobe Digital Negative文件。' },
        pef: { title: 'PEF查看器', description: '查看Pentax RAW相机文件。' }
      }
    }
  },
  id: {
    viewers_page: {
      meta: {
        title: 'Penampil File Online Profesional - Lihat File Apa Pun Tanpa Menginstal Software | FormiPeek',
        description:
          'Lihat dan pratinjau file apa pun langsung di browser Anda tanpa menginstal software. Penampil tingkat profesional untuk 50+ format termasuk gambar, dokumen, PDF, spreadsheet, dan lainnya. Cepat, aman, dan sepenuhnya gratis.',
        keywords:
          'penampil file online, lihat file tanpa software, penampil file browser, penampil file profesional, penampil pdf online, penampil dokumen, penampil gambar, tanpa unduhan, pratinjau file instan'
      },
      schema: {
        name: 'Penampil file online',
        description:
          'Pratinjau file dalam lebih dari 50 format langsung di browser Anda dengan penampil khusus untuk setiap jenis file.'
      },
      hero: {
        title: 'Penampil file',
        description:
          'Lihat dan pratinjau file di browser Anda tanpa mengunduh. Dukungan untuk gambar, dokumen, spreadsheet, dan lainnya.'
      },
      search: {
        placeholder: 'Cari penampil... (mis. PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: 'Ditemukan {{count}} penampil',
        results_one: 'Ditemukan {{count}} penampil',
        results_other: 'Ditemukan {{count}} penampil',
        suggestion: 'Coba cari sesuatu seperti "{{exampleOne}}" atau "{{exampleTwo}}".',
        clear: 'Hapus pencarian'
      },
      categories: {
        image_standard: 'FORMAT GAMBAR STANDAR',
        document: 'FORMAT DOKUMEN',
        spreadsheet: 'FORMAT SPREADSHEET',
        code_data: 'FORMAT KODE & DATA',
        image_raw: 'FORMAT RAW KAMERA'
      },
      features: {
        title: 'Mengapa memilih penampil kami?',
        items: [
          {
            title: 'Pratinjau instan',
            description: 'Lihat file secara instan tanpa mengunduh atau menginstal perangkat lunak.'
          },
          {
            title: 'Aman & pribadi',
            description: 'File diproses secara lokal dan tidak pernah disimpan di server kami.'
          },
          {
            title: 'Dukungan universal',
            description: 'Dukungan untuk lebih dari 50 format file di semua kategori utama.'
          }
        ]
      },
      actions: {
        view: 'Lihat sekarang'
      },
      no_results: {
        title: 'Tidak ada penampil ditemukan',
        description: 'Coba cari sesuatu seperti "{{exampleOne}}" atau "{{exampleTwo}}".',
        clear: 'Hapus pencarian'
      },
      formats: {
        jpeg: { title: 'Penampil JPEG', description: 'Lihat gambar JPEG dengan kontrol zoom dan pan.' },
        png: { title: 'Penampil PNG', description: 'Lihat gambar PNG dengan dukungan transparansi.' },
        webp: { title: 'Penampil WebP', description: 'Lihat gambar WebP dengan kompresi modern.' },
        gif: { title: 'Penampil GIF', description: 'Lihat gambar GIF animasi dengan kontrol pemutaran.' },
        svg: { title: 'Penampil SVG', description: 'Lihat grafik vektor yang dapat diskalakan dengan zoom.' },
        bmp: { title: 'Penampil BMP', description: 'Lihat gambar bitmap dengan dukungan kedalaman warna.' },
        ico: { title: 'Penampil ICO', description: 'Lihat file ikon Windows dengan beberapa ukuran.' },
        heic: { title: 'Penampil HEIC', description: 'Lihat gambar HEIC dari kamera modern.' },
        avif: { title: 'Penampil AVIF', description: 'Lihat gambar AVIF dengan kompresi generasi berikutnya.' },
        pdf: { title: 'Penampil PDF', description: 'Lihat dokumen PDF dengan navigasi halaman.' },
        docx: { title: 'Penampil DOCX', description: 'Lihat dokumen Microsoft Word.' },
        rtf: { title: 'Penampil RTF', description: 'Lihat dokumen Rich Text Format.' },
        odt: { title: 'Penampil ODT', description: 'Lihat file teks OpenDocument.' },
        txt: { title: 'Penampil TXT', description: 'Lihat file teks biasa dengan penyorotan sintaks.' },
        md: { title: 'Penampil Markdown', description: 'Lihat file Markdown dengan pemformatan yang dirender.' },
        xlsx: { title: 'Penampil Excel', description: 'Lihat spreadsheet Excel dengan dukungan rumus.' },
        csv: { title: 'Penampil CSV', description: 'Lihat file CSV dengan pemformatan tabel.' },
        ods: { title: 'Penampil ODS', description: 'Lihat file spreadsheet OpenDocument.' },
        json: { title: 'Penampil JSON', description: 'Lihat file JSON dengan penyorotan sintaks dan pemformatan.' },
        xml: { title: 'Penampil XML', description: 'Lihat file XML dengan struktur pohon.' },
        html: { title: 'Penampil HTML', description: 'Lihat file HTML dengan konten yang dirender.' },
        css: { title: 'Penampil CSS', description: 'Lihat file CSS dengan penyorotan sintaks.' },
        js: { title: 'Penampil JavaScript', description: 'Lihat file JS dengan penyorotan sintaks.' },
        py: { title: 'Penampil Python', description: 'Lihat file Python dengan penyorotan sintaks.' },
        nef: { title: 'Penampil NEF', description: 'Lihat file RAW kamera Nikon.' },
        cr2: { title: 'Penampil CR2', description: 'Lihat file RAW kamera Canon.' },
        dcr: { title: 'Penampil DCR', description: 'Lihat file RAW kamera Kodak.' },
        x3f: { title: 'Penampil X3F', description: 'Lihat file RAW kamera Sigma.' },
        arw: { title: 'Penampil ARW', description: 'Lihat file RAW kamera Sony.' },
        raf: { title: 'Penampil RAF', description: 'Lihat file RAW kamera Fuji.' },
        orf: { title: 'Penampil ORF', description: 'Lihat file RAW kamera Olympus.' },
        dng: { title: 'Penampil DNG', description: 'Lihat file Adobe Digital Negative.' },
        pef: { title: 'Penampil PEF', description: 'Lihat file RAW kamera Pentax.' }
      }
    }
  },
  sv: {
    viewers_page: {
      meta: {
        title: 'Professionell Online Filvisare - Visa Vilken Fil Som Helst Utan Att Installera Programvara | FormiPeek',
        description:
          'Visa och förhandsgranska vilken fil som helst direkt i din webbläsare utan att installera programvara. Professionella visare för över 50 format inklusive bilder, dokument, PDF, kalkylblad och mer. Snabbt, säkert och helt gratis.',
        keywords:
          'online filvisare, visa filer utan programvara, webbläsare filvisare, professionell filvisare, pdf visare online, dokumentvisare, bildvisare, ingen nedladdning, omedelbar filförhandsgranskning'
      },
      schema: {
        name: 'Online filvisare',
        description:
          'Förhandsgranska filer i över 50 format direkt i din webbläsare med specialiserade visare för varje filtyp.'
      },
      hero: {
        title: 'Filvisare',
        description:
          'Visa och förhandsgranska filer i din webbläsare utan att ladda ner. Stöd för bilder, dokument, kalkylblad och mer.'
      },
      search: {
        placeholder: 'Sök visare... (t.ex. PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: 'Hittade {{count}} visare',
        results_one: 'Hittade {{count}} visare',
        results_other: 'Hittade {{count}} visare',
        suggestion: 'Försök söka efter något som "{{exampleOne}}" eller "{{exampleTwo}}".',
        clear: 'Rensa sökning'
      },
      categories: {
        image_standard: 'STANDARD BILDFORMAT',
        document: 'DOKUMENTFORMAT',
        spreadsheet: 'KALKYLBLADFORMAT',
        code_data: 'KOD & DATA FORMAT',
        image_raw: 'RAW KAMERA FORMAT'
      },
      features: {
        title: 'Varför välja våra visare?',
        items: [
          {
            title: 'Omedelbar förhandsgranskning',
            description: 'Visa filer omedelbart utan att ladda ner eller installera programvara.'
          },
          {
            title: 'Säkert & privat',
            description: 'Filer bearbetas lokalt och lagras aldrig på våra servrar.'
          },
          {
            title: 'Universellt stöd',
            description: 'Stöd för över 50 filformat i alla huvudkategorier.'
          }
        ]
      },
      actions: {
        view: 'Visa nu'
      },
      no_results: {
        title: 'Inga visare hittades',
        description: 'Försök söka efter något som "{{exampleOne}}" eller "{{exampleTwo}}".',
        clear: 'Rensa sökning'
      },
      formats: {
        jpeg: { title: 'JPEG-visare', description: 'Visa JPEG-bilder med zoom- och panoreringskontroller.' },
        png: { title: 'PNG-visare', description: 'Visa PNG-bilder med transparensstöd.' },
        webp: { title: 'WebP-visare', description: 'Visa WebP-bilder med modern komprimering.' },
        gif: { title: 'GIF-visare', description: 'Visa animerade GIF-bilder med uppspelningskontroller.' },
        svg: { title: 'SVG-visare', description: 'Visa skalbar vektorgrafik med zoom.' },
        bmp: { title: 'BMP-visare', description: 'Visa bitmappsbilder med färgdjupstöd.' },
        ico: { title: 'ICO-visare', description: 'Visa Windows-ikonfiler med flera storlekar.' },
        heic: { title: 'HEIC-visare', description: 'Visa HEIC-bilder från moderna kameror.' },
        avif: { title: 'AVIF-visare', description: 'Visa AVIF-bilder med nästa generations komprimering.' },
        pdf: { title: 'PDF-visare', description: 'Visa PDF-dokument med sidnavigering.' },
        docx: { title: 'DOCX-visare', description: 'Visa Microsoft Word-dokument.' },
        rtf: { title: 'RTF-visare', description: 'Visa Rich Text Format-dokument.' },
        odt: { title: 'ODT-visare', description: 'Visa OpenDocument-textfiler.' },
        txt: { title: 'TXT-visare', description: 'Visa oformaterade textfiler med syntaxmarkering.' },
        md: { title: 'Markdown-visare', description: 'Visa Markdown-filer med renderad formatering.' },
        xlsx: { title: 'Excel-visare', description: 'Visa Excel-kalkylblad med formelstöd.' },
        csv: { title: 'CSV-visare', description: 'Visa CSV-filer med tabellformatering.' },
        ods: { title: 'ODS-visare', description: 'Visa OpenDocument-kalkylblad.' },
        json: { title: 'JSON-visare', description: 'Visa JSON-filer med syntaxmarkering och formatering.' },
        xml: { title: 'XML-visare', description: 'Visa XML-filer med trädstruktur.' },
        html: { title: 'HTML-visare', description: 'Visa HTML-filer med renderat innehåll.' },
        css: { title: 'CSS-visare', description: 'Visa CSS-filer med syntaxmarkering.' },
        js: { title: 'JavaScript-visare', description: 'Visa JS-filer med syntaxmarkering.' },
        py: { title: 'Python-visare', description: 'Visa Python-filer med syntaxmarkering.' },
        nef: { title: 'NEF-visare', description: 'Visa Nikon RAW-kamerafiler.' },
        cr2: { title: 'CR2-visare', description: 'Visa Canon RAW-kamerafiler.' },
        dcr: { title: 'DCR-visare', description: 'Visa Kodak RAW-kamerafiler.' },
        x3f: { title: 'X3F-visare', description: 'Visa Sigma RAW-kamerafiler.' },
        arw: { title: 'ARW-visare', description: 'Visa Sony RAW-kamerafiler.' },
        raf: { title: 'RAF-visare', description: 'Visa Fuji RAW-kamerafiler.' },
        orf: { title: 'ORF-visare', description: 'Visa Olympus RAW-kamerafiler.' },
        dng: { title: 'DNG-visare', description: 'Visa Adobe Digital Negative-filer.' },
        pef: { title: 'PEF-visare', description: 'Visa Pentax RAW-kamerafiler.' }
      }
    }
  }
};

Object.entries(viewersPageResources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

