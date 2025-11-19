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
        title: 'Free Online File Viewers - View 50+ Formats Instantly | MorphyHub',
        description:
          'View and preview 50+ file formats instantly in your browser. Support for images, documents, spreadsheets, code files, and RAW camera formats. No download or registration required. Fast, secure, and completely free.',
        keywords:
          'file viewer, online viewer, image viewer, document viewer, pdf viewer, excel viewer, free viewer, browser viewer, instant preview, secure viewer, no download viewer'
      },
      schema: {
        name: 'Online File Viewers',
        description:
          'Preview files across 50+ formats directly in your browser with specialized viewers for every file type.'
      },
      hero: {
        title: 'Free Online File Viewers',
        description:
          'View and preview 50+ file formats instantly in your browser without downloading. Support for images, documents, spreadsheets, code files, and RAW camera formats. Fast, secure, and completely free.'
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
            description: 'View files instantly without downloading or installing software. No waiting, no delays.'
          },
          {
            title: 'Secure & Private',
            description: 'Files are processed locally in your browser and never stored on our servers. Your privacy is guaranteed.'
          },
          {
            title: 'Universal Support',
            description: 'Support for 50+ file formats across every major category - images, documents, spreadsheets, code, and RAW formats.'
          },
          {
            title: '100% Free',
            description: 'All viewers are completely free to use. No registration, no limits, no hidden fees.'
          },
          {
            title: 'High Performance',
            description: 'Optimized for speed and quality. View large files quickly with advanced rendering technology.'
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
        title: 'Darmowe podglądy plików online - MorphyHub | Otwieraj pliki w przeglądarce',
        description:
          'Przeglądaj pliki bezpośrednio w przeglądarce. Obsługa obrazów, dokumentów, arkuszy kalkulacyjnych i wielu innych. Bez pobierania.',
        keywords:
          'podgląd plików, podgląd online, podgląd obrazów, podgląd dokumentów, podgląd pdf, podgląd excel, darmowy podgląd'
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
        title: 'Kostenlose Online-Datei-Viewer - MorphyHub | Dateien im Browser anzeigen',
        description:
          'Zeige Dateien direkt im Browser an. Unterstützung für Bilder, Dokumente, Tabellen und mehr. Kein Download erforderlich.',
        keywords:
          'dateiviewer, online viewer, bildviewer, dokumentenviewer, pdf viewer, excel viewer, kostenloser viewer'
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
  id: {
    viewers_page: {
      meta: {
        title: 'Penampil File Online Gratis - Lihat 50+ Format Instan | MorphyHub',
        description:
          'Lihat dan pratinjau 50+ format file secara instan di browser Anda. Dukungan untuk gambar, dokumen, spreadsheet, file kode, dan format RAW kamera. Tanpa unduhan atau registrasi. Cepat, aman, dan sepenuhnya gratis.',
        keywords:
          'penampil file, penampil online, penampil gambar, penampil dokumen, penampil pdf, penampil excel, penampil gratis, penampil browser, pratinjau instan, penampil aman'
      },
      schema: {
        name: 'Penampil File Online',
        description:
          'Pratinjau file dalam 50+ format langsung di browser Anda dengan penampil khusus untuk setiap jenis file.'
      },
      hero: {
        title: 'Penampil File Online Gratis',
        description:
          'Lihat dan pratinjau 50+ format file secara instan di browser tanpa mengunduh. Dukungan untuk gambar, dokumen, spreadsheet, file kode, dan format RAW kamera. Cepat, aman, dan sepenuhnya gratis.'
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
        title: 'Mengapa Memilih Penampil Kami?',
        items: [
          {
            title: 'Pratinjau Instan',
            description: 'Lihat file secara instan tanpa mengunduh atau menginstal perangkat lunak. Tanpa menunggu, tanpa penundaan.'
          },
          {
            title: 'Aman & Privat',
            description: 'File diproses secara lokal di browser Anda dan tidak pernah disimpan di server kami. Privasi Anda terjamin.'
          },
          {
            title: 'Dukungan Universal',
            description: 'Dukungan untuk 50+ format file di semua kategori utama - gambar, dokumen, spreadsheet, kode, dan format RAW.'
          },
          {
            title: '100% Gratis',
            description: 'Semua penampil sepenuhnya gratis digunakan. Tanpa registrasi, tanpa batas, tanpa biaya tersembunyi.'
          },
          {
            title: 'Kinerja Tinggi',
            description: 'Dioptimalkan untuk kecepatan dan kualitas. Lihat file besar dengan cepat menggunakan teknologi rendering canggih.'
          }
        ]
      },
      actions: {
        view: 'Lihat Sekarang'
      },
      no_results: {
        title: 'Tidak ada penampil ditemukan',
        description: 'Coba cari sesuatu seperti "{{exampleOne}}" atau "{{exampleTwo}}".',
        clear: 'Hapus pencarian'
      },
      formats: {
        jpeg: {
          title: 'Penampil JPEG',
          description: 'Lihat gambar JPEG dengan kontrol zoom dan pan.'
        },
        png: {
          title: 'Penampil PNG',
          description: 'Lihat gambar PNG dengan dukungan transparansi.'
        },
        webp: {
          title: 'Penampil WebP',
          description: 'Lihat gambar WebP dengan kompresi modern.'
        },
        gif: {
          title: 'Penampil GIF',
          description: 'Lihat gambar GIF animasi dengan kontrol pemutaran.'
        },
        svg: {
          title: 'Penampil SVG',
          description: 'Lihat grafik vektor skalabel dengan zoom.'
        },
        bmp: {
          title: 'Penampil BMP',
          description: 'Lihat gambar bitmap dengan dukungan kedalaman warna.'
        },
        ico: {
          title: 'Penampil ICO',
          description: 'Lihat file ikon Windows dengan berbagai ukuran.'
        },
        heic: {
          title: 'Penampil HEIC',
          description: 'Lihat gambar HEIC dari kamera modern.'
        },
        avif: {
          title: 'Penampil AVIF',
          description: 'Lihat gambar AVIF dengan kompresi generasi berikutnya.'
        },
        pdf: {
          title: 'Penampil PDF',
          description: 'Lihat dokumen PDF dengan navigasi halaman.'
        },
        docx: {
          title: 'Penampil DOCX',
          description: 'Lihat dokumen Microsoft Word.'
        },
        rtf: {
          title: 'Penampil RTF',
          description: 'Lihat dokumen Rich Text Format.'
        },
        odt: {
          title: 'Penampil ODT',
          description: 'Lihat file OpenDocument Text.'
        },
        txt: {
          title: 'Penampil TXT',
          description: 'Lihat file teks biasa dengan penyorotan sintaks.'
        },
        md: {
          title: 'Penampil Markdown',
          description: 'Lihat file Markdown dengan format yang dirender.'
        },
        xlsx: {
          title: 'Penampil Excel',
          description: 'Lihat spreadsheet Excel dengan dukungan formula.'
        },
        csv: {
          title: 'Penampil CSV',
          description: 'Lihat file CSV dengan format tabel.'
        },
        ods: {
          title: 'Penampil ODS',
          description: 'Lihat file OpenDocument Spreadsheet.'
        },
        json: {
          title: 'Penampil JSON',
          description: 'Lihat file JSON dengan penyorotan sintaks dan format.'
        },
        xml: {
          title: 'Penampil XML',
          description: 'Lihat file XML dengan struktur pohon.'
        },
        html: {
          title: 'Penampil HTML',
          description: 'Lihat file HTML dengan konten yang dirender.'
        },
        css: {
          title: 'Penampil CSS',
          description: 'Lihat file CSS dengan penyorotan sintaks.'
        },
        js: {
          title: 'Penampil JavaScript',
          description: 'Lihat file JS dengan penyorotan sintaks.'
        },
        py: {
          title: 'Penampil Python',
          description: 'Lihat file Python dengan penyorotan sintaks.'
        },
        nef: {
          title: 'Penampil NEF',
          description: 'Lihat file RAW kamera Nikon.'
        },
        cr2: {
          title: 'Penampil CR2',
          description: 'Lihat file RAW kamera Canon.'
        },
        dcr: {
          title: 'Penampil DCR',
          description: 'Lihat file RAW kamera Kodak.'
        },
        x3f: {
          title: 'Penampil X3F',
          description: 'Lihat file RAW kamera Sigma.'
        },
        arw: {
          title: 'Penampil ARW',
          description: 'Lihat file RAW kamera Sony.'
        },
        raf: {
          title: 'Penampil RAF',
          description: 'Lihat file RAW kamera Fuji.'
        },
        orf: {
          title: 'Penampil ORF',
          description: 'Lihat file RAW kamera Olympus.'
        },
        dng: {
          title: 'Penampil DNG',
          description: 'Lihat file Adobe Digital Negative.'
        },
        pef: {
          title: 'Penampil PEF',
          description: 'Lihat file RAW kamera Pentax.'
        }
      }
    }
  },
  sv: {
    viewers_page: {
      meta: {
        title: 'Gratis Online Filvisare - Visa 50+ Format Direkt | MorphyHub',
        description:
          'Visa och förhandsgranska 50+ filformat direkt i din webbläsare. Stöd för bilder, dokument, kalkylblad, kodfiler och RAW-kameraformat. Ingen nedladdning eller registrering krävs. Snabb, säker och helt gratis.',
        keywords:
          'filvisare, online visare, bildvisare, dokumentvisare, pdf visare, excel visare, gratis visare, webbläsarvisare, omedelbar förhandsvisning, säker visare'
      },
      schema: {
        name: 'Online Filvisare',
        description:
          'Förhandsgranska filer i över 50 format direkt i din webbläsare med specialiserade visare för varje filtyp.'
      },
      hero: {
        title: 'Gratis Online Filvisare',
        description:
          'Visa och förhandsgranska 50+ filformat direkt i webbläsaren utan nedladdning. Stöd för bilder, dokument, kalkylblad, kodfiler och RAW-kameraformat. Snabb, säker och helt gratis.'
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
        image_standard: 'STANDARDBILDFORMAT',
        document: 'DOKUMENTFORMAT',
        spreadsheet: 'KALKYLBLADFORMAT',
        code_data: 'KOD- & DATAFORMAT',
        image_raw: 'RAW-KAMERAFORMAT'
      },
      features: {
        title: 'Varför Välja Våra Visare?',
        items: [
          {
            title: 'Omedelbar Förhandsvisning',
            description: 'Visa filer direkt utan nedladdning eller installation av programvara. Ingen väntan, inga förseningar.'
          },
          {
            title: 'Säker & Privat',
            description: 'Filer bearbetas lokalt i din webbläsare och lagras aldrig på våra servrar. Din integritet är garanterad.'
          },
          {
            title: 'Universellt Stöd',
            description: 'Stöd för 50+ filformat i alla huvudkategorier - bilder, dokument, kalkylblad, kod och RAW-format.'
          },
          {
            title: '100% Gratis',
            description: 'Alla visare är helt gratis att använda. Ingen registrering, inga gränser, inga dolda avgifter.'
          },
          {
            title: 'Hög Prestanda',
            description: 'Optimerad för hastighet och kvalitet. Visa stora filer snabbt med avancerad renderingsteknik.'
          }
        ]
      },
      actions: {
        view: 'Visa Nu'
      },
      no_results: {
        title: 'Inga visare hittades',
        description: 'Försök söka efter något som "{{exampleOne}}" eller "{{exampleTwo}}".',
        clear: 'Rensa sökning'
      },
      formats: {
        jpeg: {
          title: 'JPEG-visare',
          description: 'Visa JPEG-bilder med zoom- och panoreringskontroller.'
        },
        png: {
          title: 'PNG-visare',
          description: 'Visa PNG-bilder med transparensstöd.'
        },
        webp: {
          title: 'WebP-visare',
          description: 'Visa WebP-bilder med modern komprimering.'
        },
        gif: {
          title: 'GIF-visare',
          description: 'Visa animerade GIF-bilder med uppspelningskontroller.'
        },
        svg: {
          title: 'SVG-visare',
          description: 'Visa skalbar vektorgrafik med zoom.'
        },
        bmp: {
          title: 'BMP-visare',
          description: 'Visa bitmappsbilder med färgdjupstöd.'
        },
        ico: {
          title: 'ICO-visare',
          description: 'Visa Windows-ikonfiler med flera storlekar.'
        },
        heic: {
          title: 'HEIC-visare',
          description: 'Visa HEIC-bilder från moderna kameror.'
        },
        avif: {
          title: 'AVIF-visare',
          description: 'Visa AVIF-bilder med nästa generations komprimering.'
        },
        pdf: {
          title: 'PDF-visare',
          description: 'Visa PDF-dokument med sidnavigering.'
        },
        docx: {
          title: 'DOCX-visare',
          description: 'Visa Microsoft Word-dokument.'
        },
        rtf: {
          title: 'RTF-visare',
          description: 'Visa Rich Text Format-dokument.'
        },
        odt: {
          title: 'ODT-visare',
          description: 'Visa OpenDocument Text-filer.'
        },
        txt: {
          title: 'TXT-visare',
          description: 'Visa vanliga textfiler med syntaxmarkering.'
        },
        md: {
          title: 'Markdown-visare',
          description: 'Visa Markdown-filer med renderat format.'
        },
        xlsx: {
          title: 'Excel-visare',
          description: 'Visa Excel-kalkylblad med formelstöd.'
        },
        csv: {
          title: 'CSV-visare',
          description: 'Visa CSV-filer med tabellformat.'
        },
        ods: {
          title: 'ODS-visare',
          description: 'Visa OpenDocument Spreadsheet-filer.'
        },
        json: {
          title: 'JSON-visare',
          description: 'Visa JSON-filer med syntaxmarkering och formatering.'
        },
        xml: {
          title: 'XML-visare',
          description: 'Visa XML-filer med trädstruktur.'
        },
        html: {
          title: 'HTML-visare',
          description: 'Visa HTML-filer med renderat innehåll.'
        },
        css: {
          title: 'CSS-visare',
          description: 'Visa CSS-filer med syntaxmarkering.'
        },
        js: {
          title: 'JavaScript-visare',
          description: 'Visa JS-filer med syntaxmarkering.'
        },
        py: {
          title: 'Python-visare',
          description: 'Visa Python-filer med syntaxmarkering.'
        },
        nef: {
          title: 'NEF-visare',
          description: 'Visa Nikon RAW-kamerafiler.'
        },
        cr2: {
          title: 'CR2-visare',
          description: 'Visa Canon RAW-kamerafiler.'
        },
        dcr: {
          title: 'DCR-visare',
          description: 'Visa Kodak RAW-kamerafiler.'
        },
        x3f: {
          title: 'X3F-visare',
          description: 'Visa Sigma RAW-kamerafiler.'
        },
        arw: {
          title: 'ARW-visare',
          description: 'Visa Sony RAW-kamerafiler.'
        },
        raf: {
          title: 'RAF-visare',
          description: 'Visa Fuji RAW-kamerafiler.'
        },
        orf: {
          title: 'ORF-visare',
          description: 'Visa Olympus RAW-kamerafiler.'
        },
        dng: {
          title: 'DNG-visare',
          description: 'Visa Adobe Digital Negative-filer.'
        },
        pef: {
          title: 'PEF-visare',
          description: 'Visa Pentax RAW-kamerafiler.'
        }
      }
    }
  },
  es: {
    viewers_page: {
      meta: {
        title: 'Visores de Archivos Online Gratis - Ver 50+ Formatos al Instante | MorphyHub',
        description:
          'Visualiza y previsualiza 50+ formatos de archivo al instante en tu navegador. Soporte para imágenes, documentos, hojas de cálculo, archivos de código y formatos RAW de cámara. Sin descarga ni registro requerido. Rápido, seguro y completamente gratis.',
        keywords:
          'visor de archivos, visor online, visor de imágenes, visor de documentos, visor pdf, visor excel, visor gratis, visor navegador, vista previa instantánea, visor seguro'
      },
      schema: {
        name: 'Visores de Archivos Online',
        description:
          'Previsualiza archivos en más de 50 formatos directamente en tu navegador con visores especializados para cada tipo de archivo.'
      },
      hero: {
        title: 'Visores de Archivos Online Gratis',
        description:
          'Visualiza y previsualiza 50+ formatos de archivo al instante en tu navegador sin descargar. Soporte para imágenes, documentos, hojas de cálculo, archivos de código y formatos RAW de cámara. Rápido, seguro y completamente gratis.'
      },
      search: {
        placeholder: 'Buscar visores... (ej. PDF, JPEG, Excel, JSON)',
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
        title: '¿Por Qué Elegir Nuestros Visores?',
        items: [
          {
            title: 'Vista Previa Instantánea',
            description: 'Visualiza archivos al instante sin descargar o instalar software. Sin esperas, sin retrasos.'
          },
          {
            title: 'Seguro y Privado',
            description: 'Los archivos se procesan localmente en tu navegador y nunca se almacenan en nuestros servidores. Tu privacidad está garantizada.'
          },
          {
            title: 'Soporte Universal',
            description: 'Soporte para 50+ formatos de archivo en todas las categorías principales: imágenes, documentos, hojas de cálculo, código y formatos RAW.'
          },
          {
            title: '100% Gratis',
            description: 'Todos los visores son completamente gratis de usar. Sin registro, sin límites, sin tarifas ocultas.'
          },
          {
            title: 'Alto Rendimiento',
            description: 'Optimizado para velocidad y calidad. Visualiza archivos grandes rápidamente con tecnología de renderizado avanzada.'
          }
        ]
      },
      actions: {
        view: 'Ver Ahora'
      },
      no_results: {
        title: 'No se encontraron visores',
        description: 'Intenta buscar algo como "{{exampleOne}}" o "{{exampleTwo}}".',
        clear: 'Limpiar búsqueda'
      },
      formats: {
        jpeg: {
          title: 'Visor JPEG',
          description: 'Visualiza imágenes JPEG con controles de zoom y desplazamiento.'
        },
        png: {
          title: 'Visor PNG',
          description: 'Visualiza imágenes PNG con soporte de transparencia.'
        },
        webp: {
          title: 'Visor WebP',
          description: 'Visualiza imágenes WebP con compresión moderna.'
        },
        gif: {
          title: 'Visor GIF',
          description: 'Visualiza imágenes GIF animadas con controles de reproducción.'
        },
        svg: {
          title: 'Visor SVG',
          description: 'Visualiza gráficos vectoriales escalables con zoom.'
        },
        bmp: {
          title: 'Visor BMP',
          description: 'Visualiza imágenes de mapa de bits con soporte de profundidad de color.'
        },
        ico: {
          title: 'Visor ICO',
          description: 'Visualiza archivos de iconos de Windows con múltiples tamaños.'
        },
        heic: {
          title: 'Visor HEIC',
          description: 'Visualiza imágenes HEIC de cámaras modernas.'
        },
        avif: {
          title: 'Visor AVIF',
          description: 'Visualiza imágenes AVIF con compresión de próxima generación.'
        },
        pdf: {
          title: 'Visor PDF',
          description: 'Visualiza documentos PDF con navegación de páginas.'
        },
        docx: {
          title: 'Visor DOCX',
          description: 'Visualiza documentos de Microsoft Word.'
        },
        rtf: {
          title: 'Visor RTF',
          description: 'Visualiza documentos de formato de texto enriquecido.'
        },
        odt: {
          title: 'Visor ODT',
          description: 'Visualiza archivos de texto OpenDocument.'
        },
        txt: {
          title: 'Visor TXT',
          description: 'Visualiza archivos de texto plano con resaltado de sintaxis.'
        },
        md: {
          title: 'Visor Markdown',
          description: 'Visualiza archivos Markdown con formato renderizado.'
        },
        xlsx: {
          title: 'Visor Excel',
          description: 'Visualiza hojas de cálculo Excel con soporte de fórmulas.'
        },
        csv: {
          title: 'Visor CSV',
          description: 'Visualiza archivos CSV con formato de tabla.'
        },
        ods: {
          title: 'Visor ODS',
          description: 'Visualiza archivos de hoja de cálculo OpenDocument.'
        },
        json: {
          title: 'Visor JSON',
          description: 'Visualiza archivos JSON con resaltado de sintaxis y formato.'
        },
        xml: {
          title: 'Visor XML',
          description: 'Visualiza archivos XML con estructura de árbol.'
        },
        html: {
          title: 'Visor HTML',
          description: 'Visualiza archivos HTML con contenido renderizado.'
        },
        css: {
          title: 'Visor CSS',
          description: 'Visualiza archivos CSS con resaltado de sintaxis.'
        },
        js: {
          title: 'Visor JavaScript',
          description: 'Visualiza archivos JS con resaltado de sintaxis.'
        },
        py: {
          title: 'Visor Python',
          description: 'Visualiza archivos Python con resaltado de sintaxis.'
        },
        nef: {
          title: 'Visor NEF',
          description: 'Visualiza archivos RAW de cámara Nikon.'
        },
        cr2: {
          title: 'Visor CR2',
          description: 'Visualiza archivos RAW de cámara Canon.'
        },
        dcr: {
          title: 'Visor DCR',
          description: 'Visualiza archivos RAW de cámara Kodak.'
        },
        x3f: {
          title: 'Visor X3F',
          description: 'Visualiza archivos RAW de cámara Sigma.'
        },
        arw: {
          title: 'Visor ARW',
          description: 'Visualiza archivos RAW de cámara Sony.'
        },
        raf: {
          title: 'Visor RAF',
          description: 'Visualiza archivos RAW de cámara Fuji.'
        },
        orf: {
          title: 'Visor ORF',
          description: 'Visualiza archivos RAW de cámara Olympus.'
        },
        dng: {
          title: 'Visor DNG',
          description: 'Visualiza archivos Adobe Digital Negative.'
        },
        pef: {
          title: 'Visor PEF',
          description: 'Visualiza archivos RAW de cámara Pentax.'
        }
      }
    }
  },
  fr: {
    viewers_page: {
      meta: {
        title: 'Visionneuses de Fichiers en Ligne Gratuites - Voir 50+ Formats Instantanément | MorphyHub',
        description:
          'Visualisez et prévisualisez 50+ formats de fichiers instantanément dans votre navigateur. Prise en charge des images, documents, feuilles de calcul, fichiers de code et formats RAW d\'appareil photo. Aucun téléchargement ni inscription requis. Rapide, sécurisé et entièrement gratuit.',
        keywords:
          'visionneuse de fichiers, visionneuse en ligne, visionneuse d\'images, visionneuse de documents, visionneuse pdf, visionneuse excel, visionneuse gratuite, visionneuse navigateur, aperçu instantané, visionneuse sécurisée'
      },
      schema: {
        name: 'Visionneuses de Fichiers en Ligne',
        description:
          'Prévisualisez des fichiers dans plus de 50 formats directement dans votre navigateur avec des visionneuses spécialisées pour chaque type de fichier.'
      },
      hero: {
        title: 'Visionneuses de Fichiers en Ligne Gratuites',
        description:
          'Visualisez et prévisualisez 50+ formats de fichiers instantanément dans votre navigateur sans télécharger. Prise en charge des images, documents, feuilles de calcul, fichiers de code et formats RAW d\'appareil photo. Rapide, sécurisé et entièrement gratuit.'
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
        title: 'Pourquoi Choisir Nos Visionneuses?',
        items: [
          {
            title: 'Aperçu Instantané',
            description: 'Visualisez les fichiers instantanément sans télécharger ou installer de logiciel. Pas d\'attente, pas de délai.'
          },
          {
            title: 'Sécurisé et Privé',
            description: 'Les fichiers sont traités localement dans votre navigateur et ne sont jamais stockés sur nos serveurs. Votre confidentialité est garantie.'
          },
          {
            title: 'Support Universel',
            description: 'Prise en charge de 50+ formats de fichiers dans toutes les catégories principales: images, documents, feuilles de calcul, code et formats RAW.'
          },
          {
            title: '100% Gratuit',
            description: 'Toutes les visionneuses sont entièrement gratuites à utiliser. Pas d\'inscription, pas de limites, pas de frais cachés.'
          },
          {
            title: 'Haute Performance',
            description: 'Optimisé pour la vitesse et la qualité. Visualisez rapidement les gros fichiers avec une technologie de rendu avancée.'
          }
        ]
      },
      actions: {
        view: 'Voir Maintenant'
      },
      no_results: {
        title: 'Aucune visionneuse trouvée',
        description: 'Essayez de rechercher quelque chose comme "{{exampleOne}}" ou "{{exampleTwo}}".',
        clear: 'Effacer la recherche'
      },
      formats: {
        jpeg: {
          title: 'Visionneuse JPEG',
          description: 'Visualisez les images JPEG avec des contrôles de zoom et de déplacement.'
        },
        png: {
          title: 'Visionneuse PNG',
          description: 'Visualisez les images PNG avec support de la transparence.'
        },
        webp: {
          title: 'Visionneuse WebP',
          description: 'Visualisez les images WebP avec compression moderne.'
        },
        gif: {
          title: 'Visionneuse GIF',
          description: 'Visualisez les images GIF animées avec des contrôles de lecture.'
        },
        svg: {
          title: 'Visionneuse SVG',
          description: 'Visualisez les graphiques vectoriels évolutifs avec zoom.'
        },
        bmp: {
          title: 'Visionneuse BMP',
          description: 'Visualisez les images bitmap avec support de la profondeur de couleur.'
        },
        ico: {
          title: 'Visionneuse ICO',
          description: 'Visualisez les fichiers d\'icônes Windows avec plusieurs tailles.'
        },
        heic: {
          title: 'Visionneuse HEIC',
          description: 'Visualisez les images HEIC des appareils photo modernes.'
        },
        avif: {
          title: 'Visionneuse AVIF',
          description: 'Visualisez les images AVIF avec compression de nouvelle génération.'
        },
        pdf: {
          title: 'Visionneuse PDF',
          description: 'Visualisez les documents PDF avec navigation de pages.'
        },
        docx: {
          title: 'Visionneuse DOCX',
          description: 'Visualisez les documents Microsoft Word.'
        },
        rtf: {
          title: 'Visionneuse RTF',
          description: 'Visualisez les documents au format de texte enrichi.'
        },
        odt: {
          title: 'Visionneuse ODT',
          description: 'Visualisez les fichiers texte OpenDocument.'
        },
        txt: {
          title: 'Visionneuse TXT',
          description: 'Visualisez les fichiers texte brut avec coloration syntaxique.'
        },
        md: {
          title: 'Visionneuse Markdown',
          description: 'Visualisez les fichiers Markdown avec formatage rendu.'
        },
        xlsx: {
          title: 'Visionneuse Excel',
          description: 'Visualisez les feuilles de calcul Excel avec support des formules.'
        },
        csv: {
          title: 'Visionneuse CSV',
          description: 'Visualisez les fichiers CSV avec formatage de tableau.'
        },
        ods: {
          title: 'Visionneuse ODS',
          description: 'Visualisez les fichiers de feuille de calcul OpenDocument.'
        },
        json: {
          title: 'Visionneuse JSON',
          description: 'Visualisez les fichiers JSON avec coloration syntaxique et formatage.'
        },
        xml: {
          title: 'Visionneuse XML',
          description: 'Visualisez les fichiers XML avec structure d\'arbre.'
        },
        html: {
          title: 'Visionneuse HTML',
          description: 'Visualisez les fichiers HTML avec contenu rendu.'
        },
        css: {
          title: 'Visionneuse CSS',
          description: 'Visualisez les fichiers CSS avec coloration syntaxique.'
        },
        js: {
          title: 'Visionneuse JavaScript',
          description: 'Visualisez les fichiers JS avec coloration syntaxique.'
        },
        py: {
          title: 'Visionneuse Python',
          description: 'Visualisez les fichiers Python avec coloration syntaxique.'
        },
        nef: {
          title: 'Visionneuse NEF',
          description: 'Visualisez les fichiers RAW d\'appareil photo Nikon.'
        },
        cr2: {
          title: 'Visionneuse CR2',
          description: 'Visualisez les fichiers RAW d\'appareil photo Canon.'
        },
        dcr: {
          title: 'Visionneuse DCR',
          description: 'Visualisez les fichiers RAW d\'appareil photo Kodak.'
        },
        x3f: {
          title: 'Visionneuse X3F',
          description: 'Visualisez les fichiers RAW d\'appareil photo Sigma.'
        },
        arw: {
          title: 'Visionneuse ARW',
          description: 'Visualisez les fichiers RAW d\'appareil photo Sony.'
        },
        raf: {
          title: 'Visionneuse RAF',
          description: 'Visualisez les fichiers RAW d\'appareil photo Fuji.'
        },
        orf: {
          title: 'Visionneuse ORF',
          description: 'Visualisez les fichiers RAW d\'appareil photo Olympus.'
        },
        dng: {
          title: 'Visionneuse DNG',
          description: 'Visualisez les fichiers Adobe Digital Negative.'
        },
        pef: {
          title: 'Visionneuse PEF',
          description: 'Visualisez les fichiers RAW d\'appareil photo Pentax.'
        }
      }
    }
  },
  it: {
    viewers_page: {
      meta: {
        title: 'Visualizzatori di File Online Gratuiti - Visualizza 50+ Formati all\'Istant | MorphyHub',
        description:
          'Visualizza e anteprima 50+ formati di file all\'istante nel tuo browser. Supporto per immagini, documenti, fogli di calcolo, file di codice e formati RAW della fotocamera. Nessun download o registrazione richiesti. Veloce, sicuro e completamente gratuito.',
        keywords:
          'visualizzatore file, visualizzatore online, visualizzatore immagini, visualizzatore documenti, visualizzatore pdf, visualizzatore excel, visualizzatore gratuito, visualizzatore browser, anteprima istantanea, visualizzatore sicuro'
      },
      schema: {
        name: 'Visualizzatori di File Online',
        description:
          'Anteprima file in oltre 50 formati direttamente nel tuo browser con visualizzatori specializzati per ogni tipo di file.'
      },
      hero: {
        title: 'Visualizzatori di File Online Gratuiti',
        description:
          'Visualizza e anteprima 50+ formati di file all\'istante nel tuo browser senza scaricare. Supporto per immagini, documenti, fogli di calcolo, file di codice e formati RAW della fotocamera. Veloce, sicuro e completamente gratuito.'
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
        title: 'Perché Scegliere i Nostri Visualizzatori?',
        items: [
          {
            title: 'Anteprima Istantanea',
            description: 'Visualizza file all\'istante senza scaricare o installare software. Nessuna attesa, nessun ritardo.'
          },
          {
            title: 'Sicuro e Privato',
            description: 'I file vengono elaborati localmente nel tuo browser e non vengono mai memorizzati sui nostri server. La tua privacy è garantita.'
          },
          {
            title: 'Supporto Universale',
            description: 'Supporto per 50+ formati di file in tutte le categorie principali: immagini, documenti, fogli di calcolo, codice e formati RAW.'
          },
          {
            title: '100% Gratuito',
            description: 'Tutti i visualizzatori sono completamente gratuiti da usare. Nessuna registrazione, nessun limite, nessun costo nascosto.'
          },
          {
            title: 'Alte Prestazioni',
            description: 'Ottimizzato per velocità e qualità. Visualizza file di grandi dimensioni rapidamente con tecnologia di rendering avanzata.'
          }
        ]
      },
      actions: {
        view: 'Visualizza Ora'
      },
      no_results: {
        title: 'Nessun visualizzatore trovato',
        description: 'Prova a cercare qualcosa come "{{exampleOne}}" o "{{exampleTwo}}".',
        clear: 'Cancella ricerca'
      },
      formats: {
        jpeg: {
          title: 'Visualizzatore JPEG',
          description: 'Visualizza immagini JPEG con controlli zoom e pan.'
        },
        png: {
          title: 'Visualizzatore PNG',
          description: 'Visualizza immagini PNG con supporto trasparenza.'
        },
        webp: {
          title: 'Visualizzatore WebP',
          description: 'Visualizza immagini WebP con compressione moderna.'
        },
        gif: {
          title: 'Visualizzatore GIF',
          description: 'Visualizza immagini GIF animate con controlli di riproduzione.'
        },
        svg: {
          title: 'Visualizzatore SVG',
          description: 'Visualizza grafica vettoriale scalabile con zoom.'
        },
        bmp: {
          title: 'Visualizzatore BMP',
          description: 'Visualizza immagini bitmap con supporto profondità colore.'
        },
        ico: {
          title: 'Visualizzatore ICO',
          description: 'Visualizza file icone Windows con più dimensioni.'
        },
        heic: {
          title: 'Visualizzatore HEIC',
          description: 'Visualizza immagini HEIC da fotocamere moderne.'
        },
        avif: {
          title: 'Visualizzatore AVIF',
          description: 'Visualizza immagini AVIF con compressione di prossima generazione.'
        },
        pdf: {
          title: 'Visualizzatore PDF',
          description: 'Visualizza documenti PDF con navigazione pagine.'
        },
        docx: {
          title: 'Visualizzatore DOCX',
          description: 'Visualizza documenti Microsoft Word.'
        },
        rtf: {
          title: 'Visualizzatore RTF',
          description: 'Visualizza documenti formato testo ricco.'
        },
        odt: {
          title: 'Visualizzatore ODT',
          description: 'Visualizza file testo OpenDocument.'
        },
        txt: {
          title: 'Visualizzatore TXT',
          description: 'Visualizza file di testo semplice con evidenziazione sintassi.'
        },
        md: {
          title: 'Visualizzatore Markdown',
          description: 'Visualizza file Markdown con formattazione renderizzata.'
        },
        xlsx: {
          title: 'Visualizzatore Excel',
          description: 'Visualizza fogli di calcolo Excel con supporto formule.'
        },
        csv: {
          title: 'Visualizzatore CSV',
          description: 'Visualizza file CSV con formattazione tabella.'
        },
        ods: {
          title: 'Visualizzatore ODS',
          description: 'Visualizza file fogli di calcolo OpenDocument.'
        },
        json: {
          title: 'Visualizzatore JSON',
          description: 'Visualizza file JSON con evidenziazione sintassi e formattazione.'
        },
        xml: {
          title: 'Visualizzatore XML',
          description: 'Visualizza file XML con struttura ad albero.'
        },
        html: {
          title: 'Visualizzatore HTML',
          description: 'Visualizza file HTML con contenuto renderizzato.'
        },
        css: {
          title: 'Visualizzatore CSS',
          description: 'Visualizza file CSS con evidenziazione sintassi.'
        },
        js: {
          title: 'Visualizzatore JavaScript',
          description: 'Visualizza file JS con evidenziazione sintassi.'
        },
        py: {
          title: 'Visualizzatore Python',
          description: 'Visualizza file Python con evidenziazione sintassi.'
        },
        nef: {
          title: 'Visualizzatore NEF',
          description: 'Visualizza file RAW fotocamera Nikon.'
        },
        cr2: {
          title: 'Visualizzatore CR2',
          description: 'Visualizza file RAW fotocamera Canon.'
        },
        dcr: {
          title: 'Visualizzatore DCR',
          description: 'Visualizza file RAW fotocamera Kodak.'
        },
        x3f: {
          title: 'Visualizzatore X3F',
          description: 'Visualizza file RAW fotocamera Sigma.'
        },
        arw: {
          title: 'Visualizzatore ARW',
          description: 'Visualizza file RAW fotocamera Sony.'
        },
        raf: {
          title: 'Visualizzatore RAF',
          description: 'Visualizza file RAW fotocamera Fuji.'
        },
        orf: {
          title: 'Visualizzatore ORF',
          description: 'Visualizza file RAW fotocamera Olympus.'
        },
        dng: {
          title: 'Visualizzatore DNG',
          description: 'Visualizza file Adobe Digital Negative.'
        },
        pef: {
          title: 'Visualizzatore PEF',
          description: 'Visualizza file RAW fotocamera Pentax.'
        }
      }
    }
  },
  nl: {
    viewers_page: {
      meta: {
        title: 'Gratis Online Bestandsviewers - Bekijk 50+ Formaten Direct | MorphyHub',
        description:
          'Bekijk en preview 50+ bestandsformaten direct in uw browser. Ondersteuning voor afbeeldingen, documenten, spreadsheets, codebestanden en RAW-cameraformaten. Geen download of registratie vereist. Snel, veilig en volledig gratis.',
        keywords:
          'bestandsviewer, online viewer, afbeeldingsviewer, documentviewer, pdf viewer, excel viewer, gratis viewer, browser viewer, directe preview, veilige viewer'
      },
      schema: {
        name: 'Online Bestandsviewers',
        description:
          'Preview bestanden in meer dan 50 formaten direct in uw browser met gespecialiseerde viewers voor elk bestandstype.'
      },
      hero: {
        title: 'Gratis Online Bestandsviewers',
        description:
          'Bekijk en preview 50+ bestandsformaten direct in uw browser zonder te downloaden. Ondersteuning voor afbeeldingen, documenten, spreadsheets, codebestanden en RAW-cameraformaten. Snel, veilig en volledig gratis.'
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
        code_data: 'CODE- & DATA FORMATEN',
        image_raw: 'RAW-CAMERAFORMATEN'
      },
      features: {
        title: 'Waarom Onze Viewers Kiezen?',
        items: [
          {
            title: 'Directe Preview',
            description: 'Bekijk bestanden direct zonder te downloaden of software te installeren. Geen wachten, geen vertragingen.'
          },
          {
            title: 'Veilig en Privé',
            description: 'Bestanden worden lokaal in uw browser verwerkt en nooit opgeslagen op onze servers. Uw privacy is gegarandeerd.'
          },
          {
            title: 'Universele Ondersteuning',
            description: 'Ondersteuning voor 50+ bestandsformaten in alle hoofdcategorieën: afbeeldingen, documenten, spreadsheets, code en RAW-formaten.'
          },
          {
            title: '100% Gratis',
            description: 'Alle viewers zijn volledig gratis te gebruiken. Geen registratie, geen limieten, geen verborgen kosten.'
          },
          {
            title: 'Hoge Prestaties',
            description: 'Geoptimaliseerd voor snelheid en kwaliteit. Bekijk grote bestanden snel met geavanceerde renderingtechnologie.'
          }
        ]
      },
      actions: {
        view: 'Bekijk Nu'
      },
      no_results: {
        title: 'Geen viewers gevonden',
        description: 'Probeer te zoeken naar iets zoals "{{exampleOne}}" of "{{exampleTwo}}".',
        clear: 'Zoekopdracht wissen'
      },
      formats: {
        jpeg: {
          title: 'JPEG-viewer',
          description: 'Bekijk JPEG-afbeeldingen met zoom- en panbesturing.'
        },
        png: {
          title: 'PNG-viewer',
          description: 'Bekijk PNG-afbeeldingen met transparantieondersteuning.'
        },
        webp: {
          title: 'WebP-viewer',
          description: 'Bekijk WebP-afbeeldingen met moderne compressie.'
        },
        gif: {
          title: 'GIF-viewer',
          description: 'Bekijk geanimeerde GIF-afbeeldingen met afspeelbesturing.'
        },
        svg: {
          title: 'SVG-viewer',
          description: 'Bekijk schaalbare vectorgrafieken met zoom.'
        },
        bmp: {
          title: 'BMP-viewer',
          description: 'Bekijk bitmapafbeeldingen met kleurdiepteondersteuning.'
        },
        ico: {
          title: 'ICO-viewer',
          description: 'Bekijk Windows-pictogrambestanden met meerdere formaten.'
        },
        heic: {
          title: 'HEIC-viewer',
          description: 'Bekijk HEIC-afbeeldingen van moderne camera\'s.'
        },
        avif: {
          title: 'AVIF-viewer',
          description: 'Bekijk AVIF-afbeeldingen met next-gen compressie.'
        },
        pdf: {
          title: 'PDF-viewer',
          description: 'Bekijk PDF-documenten met paginanavigatie.'
        },
        docx: {
          title: 'DOCX-viewer',
          description: 'Bekijk Microsoft Word-documenten.'
        },
        rtf: {
          title: 'RTF-viewer',
          description: 'Bekijk Rich Text Format-documenten.'
        },
        odt: {
          title: 'ODT-viewer',
          description: 'Bekijk OpenDocument Tekstbestanden.'
        },
        txt: {
          title: 'TXT-viewer',
          description: 'Bekijk tekstbestanden met syntaxmarkering.'
        },
        md: {
          title: 'Markdown-viewer',
          description: 'Bekijk Markdown-bestanden met gerenderde opmaak.'
        },
        xlsx: {
          title: 'Excel-viewer',
          description: 'Bekijk Excel-spreadsheets met formuleondersteuning.'
        },
        csv: {
          title: 'CSV-viewer',
          description: 'Bekijk CSV-bestanden met tabelopmaak.'
        },
        ods: {
          title: 'ODS-viewer',
          description: 'Bekijk OpenDocument Spreadsheet-bestanden.'
        },
        json: {
          title: 'JSON-viewer',
          description: 'Bekijk JSON-bestanden met syntaxmarkering en opmaak.'
        },
        xml: {
          title: 'XML-viewer',
          description: 'Bekijk XML-bestanden met boomstructuur.'
        },
        html: {
          title: 'HTML-viewer',
          description: 'Bekijk HTML-bestanden met gerenderde inhoud.'
        },
        css: {
          title: 'CSS-viewer',
          description: 'Bekijk CSS-bestanden met syntaxmarkering.'
        },
        js: {
          title: 'JavaScript-viewer',
          description: 'Bekijk JS-bestanden met syntaxmarkering.'
        },
        py: {
          title: 'Python-viewer',
          description: 'Bekijk Python-bestanden met syntaxmarkering.'
        },
        nef: {
          title: 'NEF-viewer',
          description: 'Bekijk Nikon RAW-camerabestanden.'
        },
        cr2: {
          title: 'CR2-viewer',
          description: 'Bekijk Canon RAW-camerabestanden.'
        },
        dcr: {
          title: 'DCR-viewer',
          description: 'Bekijk Kodak RAW-camerabestanden.'
        },
        x3f: {
          title: 'X3F-viewer',
          description: 'Bekijk Sigma RAW-camerabestanden.'
        },
        arw: {
          title: 'ARW-viewer',
          description: 'Bekijk Sony RAW-camerabestanden.'
        },
        raf: {
          title: 'RAF-viewer',
          description: 'Bekijk Fuji RAW-camerabestanden.'
        },
        orf: {
          title: 'ORF-viewer',
          description: 'Bekijk Olympus RAW-camerabestanden.'
        },
        dng: {
          title: 'DNG-viewer',
          description: 'Bekijk Adobe Digital Negative-bestanden.'
        },
        pef: {
          title: 'PEF-viewer',
          description: 'Bekijk Pentax RAW-camerabestanden.'
        }
      }
    }
  },
  pt: {
    viewers_page: {
      meta: {
        title: 'Visualizadores de Arquivos Online Grátis - Veja 50+ Formatos Instantaneamente | MorphyHub',
        description:
          'Visualize e pré-visualize 50+ formatos de arquivo instantaneamente no seu navegador. Suporte para imagens, documentos, planilhas, arquivos de código e formatos RAW de câmera. Sem download ou registro necessário. Rápido, seguro e completamente gratuito.',
        keywords:
          'visualizador de arquivos, visualizador online, visualizador de imagens, visualizador de documentos, visualizador pdf, visualizador excel, visualizador gratuito, visualizador navegador, pré-visualização instantânea, visualizador seguro'
      },
      schema: {
        name: 'Visualizadores de Arquivos Online',
        description:
          'Pré-visualize arquivos em mais de 50 formatos diretamente no seu navegador com visualizadores especializados para cada tipo de arquivo.'
      },
      hero: {
        title: 'Visualizadores de Arquivos Online Grátis',
        description:
          'Visualize e pré-visualize 50+ formatos de arquivo instantaneamente no seu navegador sem baixar. Suporte para imagens, documentos, planilhas, arquivos de código e formatos RAW de câmera. Rápido, seguro e completamente gratuito.'
      },
      search: {
        placeholder: 'Pesquisar visualizadores... (ex. PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: 'Encontrado {{count}} visualizador',
        results_one: 'Encontrado {{count}} visualizador',
        results_other: 'Encontrados {{count}} visualizadores',
        suggestion: 'Tente pesquisar algo como "{{exampleOne}}" ou "{{exampleTwo}}".',
        clear: 'Limpar pesquisa'
      },
      categories: {
        image_standard: 'FORMATOS DE IMAGEM PADRÃO',
        document: 'FORMATOS DE DOCUMENTO',
        spreadsheet: 'FORMATOS DE PLANILHA',
        code_data: 'FORMATOS DE CÓDIGO E DADOS',
        image_raw: 'FORMATOS RAW DE CÂMERA'
      },
      features: {
        title: 'Por Que Escolher Nossos Visualizadores?',
        items: [
          {
            title: 'Pré-visualização Instantânea',
            description: 'Visualize arquivos instantaneamente sem baixar ou instalar software. Sem espera, sem atrasos.'
          },
          {
            title: 'Seguro e Privado',
            description: 'Arquivos são processados localmente no seu navegador e nunca armazenados em nossos servidores. Sua privacidade é garantida.'
          },
          {
            title: 'Suporte Universal',
            description: 'Suporte para 50+ formatos de arquivo em todas as categorias principais: imagens, documentos, planilhas, código e formatos RAW.'
          },
          {
            title: '100% Grátis',
            description: 'Todos os visualizadores são completamente gratuitos para usar. Sem registro, sem limites, sem taxas ocultas.'
          },
          {
            title: 'Alto Desempenho',
            description: 'Otimizado para velocidade e qualidade. Visualize arquivos grandes rapidamente com tecnologia de renderização avançada.'
          }
        ]
      },
      actions: {
        view: 'Visualizar Agora'
      },
      no_results: {
        title: 'Nenhum visualizador encontrado',
        description: 'Tente pesquisar algo como "{{exampleOne}}" ou "{{exampleTwo}}".',
        clear: 'Limpar pesquisa'
      },
      formats: {
        jpeg: {
          title: 'Visualizador JPEG',
          description: 'Visualize imagens JPEG com controles de zoom e pan.'
        },
        png: {
          title: 'Visualizador PNG',
          description: 'Visualize imagens PNG com suporte de transparência.'
        },
        webp: {
          title: 'Visualizador WebP',
          description: 'Visualize imagens WebP com compressão moderna.'
        },
        gif: {
          title: 'Visualizador GIF',
          description: 'Visualize imagens GIF animadas com controles de reprodução.'
        },
        svg: {
          title: 'Visualizador SVG',
          description: 'Visualize gráficos vetoriais escaláveis com zoom.'
        },
        bmp: {
          title: 'Visualizador BMP',
          description: 'Visualize imagens bitmap com suporte de profundidade de cor.'
        },
        ico: {
          title: 'Visualizador ICO',
          description: 'Visualize arquivos de ícones do Windows com múltiplos tamanhos.'
        },
        heic: {
          title: 'Visualizador HEIC',
          description: 'Visualize imagens HEIC de câmeras modernas.'
        },
        avif: {
          title: 'Visualizador AVIF',
          description: 'Visualize imagens AVIF com compressão de próxima geração.'
        },
        pdf: {
          title: 'Visualizador PDF',
          description: 'Visualize documentos PDF com navegação de páginas.'
        },
        docx: {
          title: 'Visualizador DOCX',
          description: 'Visualize documentos do Microsoft Word.'
        },
        rtf: {
          title: 'Visualizador RTF',
          description: 'Visualize documentos de formato de texto rico.'
        },
        odt: {
          title: 'Visualizador ODT',
          description: 'Visualize arquivos de texto OpenDocument.'
        },
        txt: {
          title: 'Visualizador TXT',
          description: 'Visualize arquivos de texto simples com realce de sintaxe.'
        },
        md: {
          title: 'Visualizador Markdown',
          description: 'Visualize arquivos Markdown com formatação renderizada.'
        },
        xlsx: {
          title: 'Visualizador Excel',
          description: 'Visualize planilhas Excel com suporte de fórmulas.'
        },
        csv: {
          title: 'Visualizador CSV',
          description: 'Visualize arquivos CSV com formatação de tabela.'
        },
        ods: {
          title: 'Visualizador ODS',
          description: 'Visualize arquivos de planilha OpenDocument.'
        },
        json: {
          title: 'Visualizador JSON',
          description: 'Visualize arquivos JSON com realce de sintaxe e formatação.'
        },
        xml: {
          title: 'Visualizador XML',
          description: 'Visualize arquivos XML com estrutura de árvore.'
        },
        html: {
          title: 'Visualizador HTML',
          description: 'Visualize arquivos HTML com conteúdo renderizado.'
        },
        css: {
          title: 'Visualizador CSS',
          description: 'Visualize arquivos CSS com realce de sintaxe.'
        },
        js: {
          title: 'Visualizador JavaScript',
          description: 'Visualize arquivos JS com realce de sintaxe.'
        },
        py: {
          title: 'Visualizador Python',
          description: 'Visualize arquivos Python com realce de sintaxe.'
        },
        nef: {
          title: 'Visualizador NEF',
          description: 'Visualize arquivos RAW de câmera Nikon.'
        },
        cr2: {
          title: 'Visualizador CR2',
          description: 'Visualize arquivos RAW de câmera Canon.'
        },
        dcr: {
          title: 'Visualizador DCR',
          description: 'Visualize arquivos RAW de câmera Kodak.'
        },
        x3f: {
          title: 'Visualizador X3F',
          description: 'Visualize arquivos RAW de câmera Sigma.'
        },
        arw: {
          title: 'Visualizador ARW',
          description: 'Visualize arquivos RAW de câmera Sony.'
        },
        raf: {
          title: 'Visualizador RAF',
          description: 'Visualize arquivos RAW de câmera Fuji.'
        },
        orf: {
          title: 'Visualizador ORF',
          description: 'Visualize arquivos RAW de câmera Olympus.'
        },
        dng: {
          title: 'Visualizador DNG',
          description: 'Visualize arquivos Adobe Digital Negative.'
        },
        pef: {
          title: 'Visualizador PEF',
          description: 'Visualize arquivos RAW de câmera Pentax.'
        }
      }
    }
  },
  vi: {
    viewers_page: {
      meta: {
        title: 'Trình Xem Tệp Trực Tuyến Miễn Phí - Xem 50+ Định Dạng Ngay Lập Tức | MorphyHub',
        description:
          'Xem và xem trước 50+ định dạng tệp ngay lập tức trong trình duyệt của bạn. Hỗ trợ hình ảnh, tài liệu, bảng tính, tệp mã và định dạng RAW máy ảnh. Không cần tải xuống hoặc đăng ký. Nhanh chóng, an toàn và hoàn toàn miễn phí.',
        keywords:
          'trình xem tệp, trình xem trực tuyến, trình xem hình ảnh, trình xem tài liệu, trình xem pdf, trình xem excel, trình xem miễn phí, trình xem trình duyệt, xem trước tức thì, trình xem an toàn'
      },
      schema: {
        name: 'Trình Xem Tệp Trực Tuyến',
        description:
          'Xem trước tệp trong hơn 50 định dạng trực tiếp trong trình duyệt của bạn với trình xem chuyên dụng cho mỗi loại tệp.'
      },
      hero: {
        title: 'Trình Xem Tệp Trực Tuyến Miễn Phí',
        description:
          'Xem và xem trước 50+ định dạng tệp ngay lập tức trong trình duyệt mà không cần tải xuống. Hỗ trợ hình ảnh, tài liệu, bảng tính, tệp mã và định dạng RAW máy ảnh. Nhanh chóng, an toàn và hoàn toàn miễn phí.'
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
        image_raw: 'ĐỊNH DẠNG RAW MÁY ẢNH'
      },
      features: {
        title: 'Tại Sao Chọn Trình Xem Của Chúng Tôi?',
        items: [
          {
            title: 'Xem Trước Tức Thì',
            description: 'Xem tệp ngay lập tức mà không cần tải xuống hoặc cài đặt phần mềm. Không chờ đợi, không trì hoãn.'
          },
          {
            title: 'An Toàn & Riêng Tư',
            description: 'Tệp được xử lý cục bộ trong trình duyệt của bạn và không bao giờ được lưu trữ trên máy chủ của chúng tôi. Quyền riêng tư của bạn được đảm bảo.'
          },
          {
            title: 'Hỗ Trợ Toàn Diện',
            description: 'Hỗ trợ 50+ định dạng tệp trong tất cả các danh mục chính: hình ảnh, tài liệu, bảng tính, mã và định dạng RAW.'
          },
          {
            title: '100% Miễn Phí',
            description: 'Tất cả trình xem đều hoàn toàn miễn phí để sử dụng. Không đăng ký, không giới hạn, không phí ẩn.'
          },
          {
            title: 'Hiệu Suất Cao',
            description: 'Được tối ưu hóa cho tốc độ và chất lượng. Xem các tệp lớn nhanh chóng với công nghệ kết xuất tiên tiến.'
          }
        ]
      },
      actions: {
        view: 'Xem Ngay'
      },
      no_results: {
        title: 'Không tìm thấy trình xem',
        description: 'Thử tìm kiếm thứ gì đó như "{{exampleOne}}" hoặc "{{exampleTwo}}".',
        clear: 'Xóa tìm kiếm'
      },
      formats: {
        jpeg: {
          title: 'Trình Xem JPEG',
          description: 'Xem hình ảnh JPEG với điều khiển thu phóng và di chuyển.'
        },
        png: {
          title: 'Trình Xem PNG',
          description: 'Xem hình ảnh PNG với hỗ trợ trong suốt.'
        },
        webp: {
          title: 'Trình Xem WebP',
          description: 'Xem hình ảnh WebP với nén hiện đại.'
        },
        gif: {
          title: 'Trình Xem GIF',
          description: 'Xem hình ảnh GIF động với điều khiển phát.'
        },
        svg: {
          title: 'Trình Xem SVG',
          description: 'Xem đồ họa vector có thể mở rộng với thu phóng.'
        },
        bmp: {
          title: 'Trình Xem BMP',
          description: 'Xem hình ảnh bitmap với hỗ trợ độ sâu màu.'
        },
        ico: {
          title: 'Trình Xem ICO',
          description: 'Xem tệp biểu tượng Windows với nhiều kích thước.'
        },
        heic: {
          title: 'Trình Xem HEIC',
          description: 'Xem hình ảnh HEIC từ máy ảnh hiện đại.'
        },
        avif: {
          title: 'Trình Xem AVIF',
          description: 'Xem hình ảnh AVIF với nén thế hệ tiếp theo.'
        },
        pdf: {
          title: 'Trình Xem PDF',
          description: 'Xem tài liệu PDF với điều hướng trang.'
        },
        docx: {
          title: 'Trình Xem DOCX',
          description: 'Xem tài liệu Microsoft Word.'
        },
        rtf: {
          title: 'Trình Xem RTF',
          description: 'Xem tài liệu định dạng văn bản phong phú.'
        },
        odt: {
          title: 'Trình Xem ODT',
          description: 'Xem tệp văn bản OpenDocument.'
        },
        txt: {
          title: 'Trình Xem TXT',
          description: 'Xem tệp văn bản thuần với tô sáng cú pháp.'
        },
        md: {
          title: 'Trình Xem Markdown',
          description: 'Xem tệp Markdown với định dạng được kết xuất.'
        },
        xlsx: {
          title: 'Trình Xem Excel',
          description: 'Xem bảng tính Excel với hỗ trợ công thức.'
        },
        csv: {
          title: 'Trình Xem CSV',
          description: 'Xem tệp CSV với định dạng bảng.'
        },
        ods: {
          title: 'Trình Xem ODS',
          description: 'Xem tệp bảng tính OpenDocument.'
        },
        json: {
          title: 'Trình Xem JSON',
          description: 'Xem tệp JSON với tô sáng cú pháp và định dạng.'
        },
        xml: {
          title: 'Trình Xem XML',
          description: 'Xem tệp XML với cấu trúc cây.'
        },
        html: {
          title: 'Trình Xem HTML',
          description: 'Xem tệp HTML với nội dung được kết xuất.'
        },
        css: {
          title: 'Trình Xem CSS',
          description: 'Xem tệp CSS với tô sáng cú pháp.'
        },
        js: {
          title: 'Trình Xem JavaScript',
          description: 'Xem tệp JS với tô sáng cú pháp.'
        },
        py: {
          title: 'Trình Xem Python',
          description: 'Xem tệp Python với tô sáng cú pháp.'
        },
        nef: {
          title: 'Trình Xem NEF',
          description: 'Xem tệp RAW máy ảnh Nikon.'
        },
        cr2: {
          title: 'Trình Xem CR2',
          description: 'Xem tệp RAW máy ảnh Canon.'
        },
        dcr: {
          title: 'Trình Xem DCR',
          description: 'Xem tệp RAW máy ảnh Kodak.'
        },
        x3f: {
          title: 'Trình Xem X3F',
          description: 'Xem tệp RAW máy ảnh Sigma.'
        },
        arw: {
          title: 'Trình Xem ARW',
          description: 'Xem tệp RAW máy ảnh Sony.'
        },
        raf: {
          title: 'Trình Xem RAF',
          description: 'Xem tệp RAW máy ảnh Fuji.'
        },
        orf: {
          title: 'Trình Xem ORF',
          description: 'Xem tệp RAW máy ảnh Olympus.'
        },
        dng: {
          title: 'Trình Xem DNG',
          description: 'Xem tệp Adobe Digital Negative.'
        },
        pef: {
          title: 'Trình Xem PEF',
          description: 'Xem tệp RAW máy ảnh Pentax.'
        }
      }
    }
  },
  tr: {
    viewers_page: {
      meta: {
        title: 'Ücretsiz Çevrimiçi Dosya Görüntüleyiciler - 50+ Formatı Anında Görüntüle | MorphyHub',
        description:
          'Tarayıcınızda 50+ dosya formatını anında görüntüleyin ve önizleyin. Görüntüler, belgeler, elektronik tablolar, kod dosyaları ve RAW kamera formatları desteği. İndirme veya kayıt gerekmez. Hızlı, güvenli ve tamamen ücretsiz.',
        keywords:
          'dosya görüntüleyici, çevrimiçi görüntüleyici, görüntü görüntüleyici, belge görüntüleyici, pdf görüntüleyici, excel görüntüleyici, ücretsiz görüntüleyici, tarayıcı görüntüleyici, anında önizleme, güvenli görüntüleyici'
      },
      schema: {
        name: 'Çevrimiçi Dosya Görüntüleyiciler',
        description:
          'Her dosya türü için özel görüntüleyicilerle tarayıcınızda 50+ formatta dosyaları önizleyin.'
      },
      hero: {
        title: 'Ücretsiz Çevrimiçi Dosya Görüntüleyiciler',
        description:
          'Tarayıcınızda indirmeden 50+ dosya formatını anında görüntüleyin ve önizleyin. Görüntüler, belgeler, elektronik tablolar, kod dosyaları ve RAW kamera formatları desteği. Hızlı, güvenli ve tamamen ücretsiz.'
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
        code_data: 'KOD VE VERİ FORMATLARI',
        image_raw: 'RAW KAMERA FORMATLARI'
      },
      features: {
        title: 'Neden Görüntüleyicilerimizi Seçmelisiniz?',
        items: [
          {
            title: 'Anında Önizleme',
            description: 'Yazılım indirmeden veya yüklemeden dosyaları anında görüntüleyin. Bekleme yok, gecikme yok.'
          },
          {
            title: 'Güvenli ve Özel',
            description: 'Dosyalar tarayıcınızda yerel olarak işlenir ve sunucularımızda asla saklanmaz. Gizliliğiniz garanti altındadır.'
          },
          {
            title: 'Evrensel Destek',
            description: 'Tüm ana kategorilerde 50+ dosya formatı desteği: görüntüler, belgeler, elektronik tablolar, kod ve RAW formatları.'
          },
          {
            title: '%100 Ücretsiz',
            description: 'Tüm görüntüleyiciler tamamen ücretsizdir. Kayıt yok, limit yok, gizli ücret yok.'
          },
          {
            title: 'Yüksek Performans',
            description: 'Hız ve kalite için optimize edilmiştir. Gelişmiş render teknolojisi ile büyük dosyaları hızlıca görüntüleyin.'
          }
        ]
      },
      actions: {
        view: 'Şimdi Görüntüle'
      },
      no_results: {
        title: 'Görüntüleyici bulunamadı',
        description: '"{{exampleOne}}" veya "{{exampleTwo}}" gibi bir şey aramayı deneyin.',
        clear: 'Aramayı temizle'
      },
      formats: {
        jpeg: {
          title: 'JPEG Görüntüleyici',
          description: 'Yakınlaştırma ve kaydırma kontrolleri ile JPEG görüntülerini görüntüleyin.'
        },
        png: {
          title: 'PNG Görüntüleyici',
          description: 'Şeffaflık desteği ile PNG görüntülerini görüntüleyin.'
        },
        webp: {
          title: 'WebP Görüntüleyici',
          description: 'Modern sıkıştırma ile WebP görüntülerini görüntüleyin.'
        },
        gif: {
          title: 'GIF Görüntüleyici',
          description: 'Oynatma kontrolleri ile animasyonlu GIF görüntülerini görüntüleyin.'
        },
        svg: {
          title: 'SVG Görüntüleyici',
          description: 'Yakınlaştırma ile ölçeklenebilir vektör grafiklerini görüntüleyin.'
        },
        bmp: {
          title: 'BMP Görüntüleyici',
          description: 'Renk derinliği desteği ile bitmap görüntülerini görüntüleyin.'
        },
        ico: {
          title: 'ICO Görüntüleyici',
          description: 'Birden fazla boyutta Windows simge dosyalarını görüntüleyin.'
        },
        heic: {
          title: 'HEIC Görüntüleyici',
          description: 'Modern kameralardan HEIC görüntülerini görüntüleyin.'
        },
        avif: {
          title: 'AVIF Görüntüleyici',
          description: 'Yeni nesil sıkıştırma ile AVIF görüntülerini görüntüleyin.'
        },
        pdf: {
          title: 'PDF Görüntüleyici',
          description: 'Sayfa navigasyonu ile PDF belgelerini görüntüleyin.'
        },
        docx: {
          title: 'DOCX Görüntüleyici',
          description: 'Microsoft Word belgelerini görüntüleyin.'
        },
        rtf: {
          title: 'RTF Görüntüleyici',
          description: 'Zengin Metin Formatı belgelerini görüntüleyin.'
        },
        odt: {
          title: 'ODT Görüntüleyici',
          description: 'OpenDocument Metin dosyalarını görüntüleyin.'
        },
        txt: {
          title: 'TXT Görüntüleyici',
          description: 'Sözdizimi vurgulama ile düz metin dosyalarını görüntüleyin.'
        },
        md: {
          title: 'Markdown Görüntüleyici',
          description: 'İşlenmiş biçimlendirme ile Markdown dosyalarını görüntüleyin.'
        },
        xlsx: {
          title: 'Excel Görüntüleyici',
          description: 'Formül desteği ile Excel elektronik tablolarını görüntüleyin.'
        },
        csv: {
          title: 'CSV Görüntüleyici',
          description: 'Tablo biçimlendirmesi ile CSV dosyalarını görüntüleyin.'
        },
        ods: {
          title: 'ODS Görüntüleyici',
          description: 'OpenDocument Elektronik Tablo dosyalarını görüntüleyin.'
        },
        json: {
          title: 'JSON Görüntüleyici',
          description: 'Sözdizimi vurgulama ve biçimlendirme ile JSON dosyalarını görüntüleyin.'
        },
        xml: {
          title: 'XML Görüntüleyici',
          description: 'Ağaç yapısı ile XML dosyalarını görüntüleyin.'
        },
        html: {
          title: 'HTML Görüntüleyici',
          description: 'İşlenmiş içerik ile HTML dosyalarını görüntüleyin.'
        },
        css: {
          title: 'CSS Görüntüleyici',
          description: 'Sözdizimi vurgulama ile CSS dosyalarını görüntüleyin.'
        },
        js: {
          title: 'JavaScript Görüntüleyici',
          description: 'Sözdizimi vurgulama ile JS dosyalarını görüntüleyin.'
        },
        py: {
          title: 'Python Görüntüleyici',
          description: 'Sözdizimi vurgulama ile Python dosyalarını görüntüleyin.'
        },
        nef: {
          title: 'NEF Görüntüleyici',
          description: 'Nikon RAW kamera dosyalarını görüntüleyin.'
        },
        cr2: {
          title: 'CR2 Görüntüleyici',
          description: 'Canon RAW kamera dosyalarını görüntüleyin.'
        },
        dcr: {
          title: 'DCR Görüntüleyici',
          description: 'Kodak RAW kamera dosyalarını görüntüleyin.'
        },
        x3f: {
          title: 'X3F Görüntüleyici',
          description: 'Sigma RAW kamera dosyalarını görüntüleyin.'
        },
        arw: {
          title: 'ARW Görüntüleyici',
          description: 'Sony RAW kamera dosyalarını görüntüleyin.'
        },
        raf: {
          title: 'RAF Görüntüleyici',
          description: 'Fuji RAW kamera dosyalarını görüntüleyin.'
        },
        orf: {
          title: 'ORF Görüntüleyici',
          description: 'Olympus RAW kamera dosyalarını görüntüleyin.'
        },
        dng: {
          title: 'DNG Görüntüleyici',
          description: 'Adobe Digital Negative dosyalarını görüntüleyin.'
        },
        pef: {
          title: 'PEF Görüntüleyici',
          description: 'Pentax RAW kamera dosyalarını görüntüleyin.'
        }
      }
    }
  },
  ru: {
    viewers_page: {
      meta: {
        title: 'Бесплатные Онлайн Просмотрщики Файлов - Просмотр 50+ Форматов Мгновенно | MorphyHub',
        description:
          'Просматривайте и предпросматривайте 50+ форматов файлов мгновенно в вашем браузере. Поддержка изображений, документов, электронных таблиц, файлов кода и форматов RAW камеры. Без загрузки или регистрации. Быстро, безопасно и полностью бесплатно.',
        keywords:
          'просмотрщик файлов, онлайн просмотрщик, просмотрщик изображений, просмотрщик документов, просмотрщик pdf, просмотрщик excel, бесплатный просмотрщик, просмотрщик браузера, мгновенный предпросмотр, безопасный просмотрщик'
      },
      schema: {
        name: 'Онлайн Просмотрщики Файлов',
        description:
          'Предпросмотр файлов в более чем 50 форматах прямо в вашем браузере со специализированными просмотрщиками для каждого типа файла.'
      },
      hero: {
        title: 'Бесплатные Онлайн Просмотрщики Файлов',
        description:
          'Просматривайте и предпросматривайте 50+ форматов файлов мгновенно в вашем браузере без загрузки. Поддержка изображений, документов, электронных таблиц, файлов кода и форматов RAW камеры. Быстро, безопасно и полностью бесплатно.'
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
        image_raw: 'ФОРМАТЫ RAW КАМЕРЫ'
      },
      features: {
        title: 'Почему Выбрать Наши Просмотрщики?',
        items: [
          {
            title: 'Мгновенный Предпросмотр',
            description: 'Просматривайте файлы мгновенно без загрузки или установки программного обеспечения. Без ожидания, без задержек.'
          },
          {
            title: 'Безопасно и Приватно',
            description: 'Файлы обрабатываются локально в вашем браузере и никогда не сохраняются на наших серверах. Ваша конфиденциальность гарантирована.'
          },
          {
            title: 'Универсальная Поддержка',
            description: 'Поддержка 50+ форматов файлов во всех основных категориях: изображения, документы, электронные таблицы, код и форматы RAW.'
          },
          {
            title: '100% Бесплатно',
            description: 'Все просмотрщики полностью бесплатны в использовании. Без регистрации, без ограничений, без скрытых платежей.'
          },
          {
            title: 'Высокая Производительность',
            description: 'Оптимизировано для скорости и качества. Быстро просматривайте большие файлы с передовой технологией рендеринга.'
          }
        ]
      },
      actions: {
        view: 'Просмотреть Сейчас'
      },
      no_results: {
        title: 'Просмотрщики не найдены',
        description: 'Попробуйте найти что-то вроде "{{exampleOne}}" или "{{exampleTwo}}".',
        clear: 'Очистить поиск'
      },
      formats: {
        jpeg: {
          title: 'Просмотрщик JPEG',
          description: 'Просматривайте изображения JPEG с элементами управления масштабированием и панорамированием.'
        },
        png: {
          title: 'Просмотрщик PNG',
          description: 'Просматривайте изображения PNG с поддержкой прозрачности.'
        },
        webp: {
          title: 'Просмотрщик WebP',
          description: 'Просматривайте изображения WebP с современным сжатием.'
        },
        gif: {
          title: 'Просмотрщик GIF',
          description: 'Просматривайте анимированные изображения GIF с элементами управления воспроизведением.'
        },
        svg: {
          title: 'Просмотрщик SVG',
          description: 'Просматривайте масштабируемую векторную графику с масштабированием.'
        },
        bmp: {
          title: 'Просмотрщик BMP',
          description: 'Просматривайте растровые изображения с поддержкой глубины цвета.'
        },
        ico: {
          title: 'Просмотрщик ICO',
          description: 'Просматривайте файлы значков Windows с несколькими размерами.'
        },
        heic: {
          title: 'Просмотрщик HEIC',
          description: 'Просматривайте изображения HEIC с современных камер.'
        },
        avif: {
          title: 'Просмотрщик AVIF',
          description: 'Просматривайте изображения AVIF со сжатием следующего поколения.'
        },
        pdf: {
          title: 'Просмотрщик PDF',
          description: 'Просматривайте документы PDF с навигацией по страницам.'
        },
        docx: {
          title: 'Просмотрщик DOCX',
          description: 'Просматривайте документы Microsoft Word.'
        },
        rtf: {
          title: 'Просмотрщик RTF',
          description: 'Просматривайте документы формата Rich Text.'
        },
        odt: {
          title: 'Просмотрщик ODT',
          description: 'Просматривайте текстовые файлы OpenDocument.'
        },
        txt: {
          title: 'Просмотрщик TXT',
          description: 'Просматривайте текстовые файлы с подсветкой синтаксиса.'
        },
        md: {
          title: 'Просмотрщик Markdown',
          description: 'Просматривайте файлы Markdown с отформатированным форматированием.'
        },
        xlsx: {
          title: 'Просмотрщик Excel',
          description: 'Просматривайте электронные таблицы Excel с поддержкой формул.'
        },
        csv: {
          title: 'Просмотрщик CSV',
          description: 'Просматривайте файлы CSV с табличным форматированием.'
        },
        ods: {
          title: 'Просмотрщик ODS',
          description: 'Просматривайте файлы электронных таблиц OpenDocument.'
        },
        json: {
          title: 'Просмотрщик JSON',
          description: 'Просматривайте файлы JSON с подсветкой синтаксиса и форматированием.'
        },
        xml: {
          title: 'Просмотрщик XML',
          description: 'Просматривайте файлы XML с древовидной структурой.'
        },
        html: {
          title: 'Просмотрщик HTML',
          description: 'Просматривайте файлы HTML с отрендеренным содержимым.'
        },
        css: {
          title: 'Просмотрщик CSS',
          description: 'Просматривайте файлы CSS с подсветкой синтаксиса.'
        },
        js: {
          title: 'Просмотрщик JavaScript',
          description: 'Просматривайте файлы JS с подсветкой синтаксиса.'
        },
        py: {
          title: 'Просмотрщик Python',
          description: 'Просматривайте файлы Python с подсветкой синтаксиса.'
        },
        nef: {
          title: 'Просмотрщик NEF',
          description: 'Просматривайте файлы RAW камеры Nikon.'
        },
        cr2: {
          title: 'Просмотрщик CR2',
          description: 'Просматривайте файлы RAW камеры Canon.'
        },
        dcr: {
          title: 'Просмотрщик DCR',
          description: 'Просматривайте файлы RAW камеры Kodak.'
        },
        x3f: {
          title: 'Просмотрщик X3F',
          description: 'Просматривайте файлы RAW камеры Sigma.'
        },
        arw: {
          title: 'Просмотрщик ARW',
          description: 'Просматривайте файлы RAW камеры Sony.'
        },
        raf: {
          title: 'Просмотрщик RAF',
          description: 'Просматривайте файлы RAW камеры Fuji.'
        },
        orf: {
          title: 'Просмотрщик ORF',
          description: 'Просматривайте файлы RAW камеры Olympus.'
        },
        dng: {
          title: 'Просмотрщик DNG',
          description: 'Просматривайте файлы Adobe Digital Negative.'
        },
        pef: {
          title: 'Просмотрщик PEF',
          description: 'Просматривайте файлы RAW камеры Pentax.'
        }
      }
    }
  },
  ar: {
    viewers_page: {
      meta: {
        title: 'عارضات الملفات المجانية عبر الإنترنت - عرض 50+ تنسيق فوراً | MorphyHub',
        description:
          'اعرض ومعاين 50+ تنسيق ملف فوراً في متصفحك. دعم للصور والمستندات وجداول البيانات وملفات الكود وتنسيقات RAW للكاميرا. لا حاجة للتنزيل أو التسجيل. سريع وآمن ومجاني تماماً.',
        keywords:
          'عارض ملفات, عارض عبر الإنترنت, عارض صور, عارض مستندات, عارض pdf, عارض excel, عارض مجاني, عارض متصفح, معاينة فورية, عارض آمن'
      },
      schema: {
        name: 'عارضات الملفات عبر الإنترنت',
        description:
          'معاينة الملفات في أكثر من 50 تنسيق مباشرة في متصفحك مع عارضات متخصصة لكل نوع ملف.'
      },
      hero: {
        title: 'عارضات الملفات المجانية عبر الإنترنت',
        description:
          'اعرض ومعاين 50+ تنسيق ملف فوراً في متصفحك دون تنزيل. دعم للصور والمستندات وجداول البيانات وملفات الكود وتنسيقات RAW للكاميرا. سريع وآمن ومجاني تماماً.'
      },
      search: {
        placeholder: 'البحث عن عارضات... (مثل PDF, JPEG, Excel, JSON)',
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
            description: 'اعرض الملفات فوراً دون تنزيل أو تثبيت برامج. لا انتظار، لا تأخير.'
          },
          {
            title: 'آمن وخاص',
            description: 'يتم معالجة الملفات محلياً في متصفحك ولا يتم تخزينها أبداً على خوادمنا. خصوصيتك مضمونة.'
          },
          {
            title: 'دعم شامل',
            description: 'دعم لأكثر من 50 تنسيق ملف في جميع الفئات الرئيسية: الصور والمستندات وجداول البيانات والكود وتنسيقات RAW.'
          },
          {
            title: '100% مجاني',
            description: 'جميع العارضات مجانية تماماً للاستخدام. لا تسجيل، لا حدود، لا رسوم مخفية.'
          },
          {
            title: 'أداء عالي',
            description: 'محسّن للسرعة والجودة. اعرض الملفات الكبيرة بسرعة مع تقنية عرض متقدمة.'
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
        jpeg: {
          title: 'عارض JPEG',
          description: 'اعرض صور JPEG مع عناصر التحكم في التكبير والتحريك.'
        },
        png: {
          title: 'عارض PNG',
          description: 'اعرض صور PNG مع دعم الشفافية.'
        },
        webp: {
          title: 'عارض WebP',
          description: 'اعرض صور WebP مع ضغط حديث.'
        },
        gif: {
          title: 'عارض GIF',
          description: 'اعرض صور GIF المتحركة مع عناصر التحكم في التشغيل.'
        },
        svg: {
          title: 'عارض SVG',
          description: 'اعرض الرسوم المتجهة القابلة للتوسيع مع التكبير.'
        },
        bmp: {
          title: 'عارض BMP',
          description: 'اعرض صور الصور النقطية مع دعم عمق اللون.'
        },
        ico: {
          title: 'عارض ICO',
          description: 'اعرض ملفات أيقونات Windows بأحجام متعددة.'
        },
        heic: {
          title: 'عارض HEIC',
          description: 'اعرض صور HEIC من الكاميرات الحديثة.'
        },
        avif: {
          title: 'عارض AVIF',
          description: 'اعرض صور AVIF مع ضغط الجيل القادم.'
        },
        pdf: {
          title: 'عارض PDF',
          description: 'اعرض مستندات PDF مع التنقل بين الصفحات.'
        },
        docx: {
          title: 'عارض DOCX',
          description: 'اعرض مستندات Microsoft Word.'
        },
        rtf: {
          title: 'عارض RTF',
          description: 'اعرض مستندات تنسيق النص المنسق.'
        },
        odt: {
          title: 'عارض ODT',
          description: 'اعرض ملفات نص OpenDocument.'
        },
        txt: {
          title: 'عارض TXT',
          description: 'اعرض ملفات النص العادي مع تمييز بناء الجملة.'
        },
        md: {
          title: 'عارض Markdown',
          description: 'اعرض ملفات Markdown مع تنسيق معروض.'
        },
        xlsx: {
          title: 'عارض Excel',
          description: 'اعرض جداول بيانات Excel مع دعم الصيغ.'
        },
        csv: {
          title: 'عارض CSV',
          description: 'اعرض ملفات CSV مع تنسيق الجدول.'
        },
        ods: {
          title: 'عارض ODS',
          description: 'اعرض ملفات جداول بيانات OpenDocument.'
        },
        json: {
          title: 'عارض JSON',
          description: 'اعرض ملفات JSON مع تمييز بناء الجملة والتنسيق.'
        },
        xml: {
          title: 'عارض XML',
          description: 'اعرض ملفات XML مع بنية الشجرة.'
        },
        html: {
          title: 'عارض HTML',
          description: 'اعرض ملفات HTML مع محتوى معروض.'
        },
        css: {
          title: 'عارض CSS',
          description: 'اعرض ملفات CSS مع تمييز بناء الجملة.'
        },
        js: {
          title: 'عارض JavaScript',
          description: 'اعرض ملفات JS مع تمييز بناء الجملة.'
        },
        py: {
          title: 'عارض Python',
          description: 'اعرض ملفات Python مع تمييز بناء الجملة.'
        },
        nef: {
          title: 'عارض NEF',
          description: 'اعرض ملفات RAW كاميرا Nikon.'
        },
        cr2: {
          title: 'عارض CR2',
          description: 'اعرض ملفات RAW كاميرا Canon.'
        },
        dcr: {
          title: 'عارض DCR',
          description: 'اعرض ملفات RAW كاميرا Kodak.'
        },
        x3f: {
          title: 'عارض X3F',
          description: 'اعرض ملفات RAW كاميرا Sigma.'
        },
        arw: {
          title: 'عارض ARW',
          description: 'اعرض ملفات RAW كاميرا Sony.'
        },
        raf: {
          title: 'عارض RAF',
          description: 'اعرض ملفات RAW كاميرا Fuji.'
        },
        orf: {
          title: 'عارض ORF',
          description: 'اعرض ملفات RAW كاميرا Olympus.'
        },
        dng: {
          title: 'عارض DNG',
          description: 'اعرض ملفات Adobe Digital Negative.'
        },
        pef: {
          title: 'عارض PEF',
          description: 'اعرض ملفات RAW كاميرا Pentax.'
        }
      }
    }
  },
  th: {
    viewers_page: {
      meta: {
        title: 'โปรแกรมดูไฟล์ออนไลน์ฟรี - ดู 50+ รูปแบบทันที | MorphyHub',
        description:
          'ดูและแสดงตัวอย่างไฟล์ 50+ รูปแบบทันทีในเบราว์เซอร์ของคุณ รองรับรูปภาพ เอกสาร สเปรดชีต ไฟล์โค้ด และรูปแบบ RAW ของกล้อง ไม่ต้องดาวน์โหลดหรือลงทะเบียน เร็ว ปลอดภัย และฟรีทั้งหมด',
        keywords:
          'โปรแกรมดูไฟล์, ดูออนไลน์, ดูรูปภาพ, ดูเอกสาร, ดู pdf, ดู excel, ดูฟรี, ดูเบราว์เซอร์, แสดงตัวอย่างทันที, ดูปลอดภัย'
      },
      schema: {
        name: 'โปรแกรมดูไฟล์ออนไลน์',
        description:
          'แสดงตัวอย่างไฟล์ในรูปแบบ 50+ รูปแบบโดยตรงในเบราว์เซอร์ของคุณด้วยโปรแกรมดูเฉพาะสำหรับแต่ละประเภทไฟล์'
      },
      hero: {
        title: 'โปรแกรมดูไฟล์ออนไลน์ฟรี',
        description:
          'ดูและแสดงตัวอย่างไฟล์ 50+ รูปแบบทันทีในเบราว์เซอร์โดยไม่ต้องดาวน์โหลด รองรับรูปภาพ เอกสาร สเปรดชีต ไฟล์โค้ด และรูปแบบ RAW ของกล้อง เร็ว ปลอดภัย และฟรีทั้งหมด'
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
        image_standard: 'รูปแบบรูปภาพมาตรฐาน',
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
            description: 'ดูไฟล์ทันทีโดยไม่ต้องดาวน์โหลดหรือติดตั้งซอฟต์แวร์ ไม่ต้องรอ ไม่มีดีเลย์'
          },
          {
            title: 'ปลอดภัยและเป็นส่วนตัว',
            description: 'ไฟล์ถูกประมวลผลในเครื่องในเบราว์เซอร์ของคุณและไม่เคยถูกเก็บไว้บนเซิร์ฟเวอร์ของเรา ความเป็นส่วนตัวของคุณได้รับการรับประกัน'
          },
          {
            title: 'รองรับครอบคลุม',
            description: 'รองรับไฟล์ 50+ รูปแบบในทุกหมวดหมู่หลัก: รูปภาพ เอกสาร สเปรดชีต โค้ด และรูปแบบ RAW'
          },
          {
            title: '100% ฟรี',
            description: 'โปรแกรมดูทั้งหมดฟรีใช้งาน ไม่ต้องลงทะเบียน ไม่มีขีดจำกัด ไม่มีค่าธรรมเนียมแอบแฝง'
          },
          {
            title: 'ประสิทธิภาพสูง',
            description: 'ปรับให้เหมาะกับความเร็วและคุณภาพ ดูไฟล์ขนาดใหญ่ได้อย่างรวดเร็วด้วยเทคโนโลยีการแสดงผลขั้นสูง'
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
        jpeg: {
          title: 'โปรแกรมดู JPEG',
          description: 'ดูรูปภาพ JPEG พร้อมการควบคุมซูมและแพน'
        },
        png: {
          title: 'โปรแกรมดู PNG',
          description: 'ดูรูปภาพ PNG พร้อมการรองรับความโปร่งใส'
        },
        webp: {
          title: 'โปรแกรมดู WebP',
          description: 'ดูรูปภาพ WebP พร้อมการบีบอัดสมัยใหม่'
        },
        gif: {
          title: 'โปรแกรมดู GIF',
          description: 'ดูรูปภาพ GIF แอนิเมชันพร้อมการควบคุมการเล่น'
        },
        svg: {
          title: 'โปรแกรมดู SVG',
          description: 'ดูกราฟิกเวกเตอร์ที่ปรับขนาดได้พร้อมซูม'
        },
        bmp: {
          title: 'โปรแกรมดู BMP',
          description: 'ดูรูปภาพบิตแมปพร้อมการรองรับความลึกของสี'
        },
        ico: {
          title: 'โปรแกรมดู ICO',
          description: 'ดูไฟล์ไอคอน Windows พร้อมหลายขนาด'
        },
        heic: {
          title: 'โปรแกรมดู HEIC',
          description: 'ดูรูปภาพ HEIC จากกล้องสมัยใหม่'
        },
        avif: {
          title: 'โปรแกรมดู AVIF',
          description: 'ดูรูปภาพ AVIF พร้อมการบีบอัดรุ่นถัดไป'
        },
        pdf: {
          title: 'โปรแกรมดู PDF',
          description: 'ดูเอกสาร PDF พร้อมการนำทางหน้า'
        },
        docx: {
          title: 'โปรแกรมดู DOCX',
          description: 'ดูเอกสาร Microsoft Word'
        },
        rtf: {
          title: 'โปรแกรมดู RTF',
          description: 'ดูเอกสารรูปแบบ Rich Text'
        },
        odt: {
          title: 'โปรแกรมดู ODT',
          description: 'ดูไฟล์ข้อความ OpenDocument'
        },
        txt: {
          title: 'โปรแกรมดู TXT',
          description: 'ดูไฟล์ข้อความธรรมดาพร้อมการเน้นไวยากรณ์'
        },
        md: {
          title: 'โปรแกรมดู Markdown',
          description: 'ดูไฟล์ Markdown พร้อมการจัดรูปแบบที่แสดงผล'
        },
        xlsx: {
          title: 'โปรแกรมดู Excel',
          description: 'ดูสเปรดชีต Excel พร้อมการรองรับสูตร'
        },
        csv: {
          title: 'โปรแกรมดู CSV',
          description: 'ดูไฟล์ CSV พร้อมการจัดรูปแบบตาราง'
        },
        ods: {
          title: 'โปรแกรมดู ODS',
          description: 'ดูไฟล์สเปรดชีต OpenDocument'
        },
        json: {
          title: 'โปรแกรมดู JSON',
          description: 'ดูไฟล์ JSON พร้อมการเน้นไวยากรณ์และการจัดรูปแบบ'
        },
        xml: {
          title: 'โปรแกรมดู XML',
          description: 'ดูไฟล์ XML พร้อมโครงสร้างต้นไม้'
        },
        html: {
          title: 'โปรแกรมดู HTML',
          description: 'ดูไฟล์ HTML พร้อมเนื้อหาที่แสดงผล'
        },
        css: {
          title: 'โปรแกรมดู CSS',
          description: 'ดูไฟล์ CSS พร้อมการเน้นไวยากรณ์'
        },
        js: {
          title: 'โปรแกรมดู JavaScript',
          description: 'ดูไฟล์ JS พร้อมการเน้นไวยากรณ์'
        },
        py: {
          title: 'โปรแกรมดู Python',
          description: 'ดูไฟล์ Python พร้อมการเน้นไวยากรณ์'
        },
        nef: {
          title: 'โปรแกรมดู NEF',
          description: 'ดูไฟล์ RAW กล้อง Nikon'
        },
        cr2: {
          title: 'โปรแกรมดู CR2',
          description: 'ดูไฟล์ RAW กล้อง Canon'
        },
        dcr: {
          title: 'โปรแกรมดู DCR',
          description: 'ดูไฟล์ RAW กล้อง Kodak'
        },
        x3f: {
          title: 'โปรแกรมดู X3F',
          description: 'ดูไฟล์ RAW กล้อง Sigma'
        },
        arw: {
          title: 'โปรแกรมดู ARW',
          description: 'ดูไฟล์ RAW กล้อง Sony'
        },
        raf: {
          title: 'โปรแกรมดู RAF',
          description: 'ดูไฟล์ RAW กล้อง Fuji'
        },
        orf: {
          title: 'โปรแกรมดู ORF',
          description: 'ดูไฟล์ RAW กล้อง Olympus'
        },
        dng: {
          title: 'โปรแกรมดู DNG',
          description: 'ดูไฟล์ Adobe Digital Negative'
        },
        pef: {
          title: 'โปรแกรมดู PEF',
          description: 'ดูไฟล์ RAW กล้อง Pentax'
        }
      }
    }
  },
  ja: {
    viewers_page: {
      meta: {
        title: '無料オンラインファイルビューアー - 50+形式を即座に表示 | MorphyHub',
        description:
          'ブラウザで50+のファイル形式を即座に表示・プレビュー。画像、文書、スプレッドシート、コードファイル、RAWカメラ形式に対応。ダウンロードや登録不要。高速、安全、完全無料。',
        keywords:
          'ファイルビューアー, オンラインビューアー, 画像ビューアー, 文書ビューアー, pdfビューアー, excelビューアー, 無料ビューアー, ブラウザビューアー, 即座プレビュー, 安全ビューアー'
      },
      schema: {
        name: 'オンラインファイルビューアー',
        description:
          '各ファイルタイプ専用のビューアーで、ブラウザで50+形式のファイルをプレビュー。'
      },
      hero: {
        title: '無料オンラインファイルビューアー',
        description:
          'ダウンロード不要でブラウザで50+のファイル形式を即座に表示・プレビュー。画像、文書、スプレッドシート、コードファイル、RAWカメラ形式に対応。高速、安全、完全無料。'
      },
      search: {
        placeholder: 'ビューアーを検索... (例: PDF, JPEG, Excel, JSON)',
        example_one: 'PDF',
        example_two: 'JPEG',
        results: '{{count}}件のビューアーが見つかりました',
        results_one: '{{count}}件のビューアーが見つかりました',
        results_other: '{{count}}件のビューアーが見つかりました',
        suggestion: '"{{exampleOne}}"または"{{exampleTwo}}"のようなものを検索してみてください。',
        clear: '検索をクリア'
      },
      categories: {
        image_standard: '標準画像形式',
        document: '文書形式',
        spreadsheet: 'スプレッドシート形式',
        code_data: 'コード・データ形式',
        image_raw: 'RAWカメラ形式'
      },
      features: {
        title: 'なぜ当社のビューアーを選ぶのか？',
        items: [
          {
            title: '即座プレビュー',
            description: 'ソフトウェアをダウンロードまたはインストールせずに、ファイルを即座に表示。待ち時間なし、遅延なし。'
          },
          {
            title: '安全でプライベート',
            description: 'ファイルはブラウザでローカルに処理され、サーバーに保存されることはありません。プライバシーが保証されます。'
          },
          {
            title: 'ユニバーサルサポート',
            description: 'すべての主要カテゴリで50+のファイル形式をサポート：画像、文書、スプレッドシート、コード、RAW形式。'
          },
          {
            title: '100%無料',
            description: 'すべてのビューアーは完全に無料で使用できます。登録不要、制限なし、隠れた料金なし。'
          },
          {
            title: '高性能',
            description: '速度と品質に最適化。高度なレンダリング技術で大きなファイルを迅速に表示。'
          }
        ]
      },
      actions: {
        view: '今すぐ表示'
      },
      no_results: {
        title: 'ビューアーが見つかりませんでした',
        description: '"{{exampleOne}}"または"{{exampleTwo}}"のようなものを検索してみてください。',
        clear: '検索をクリア'
      },
      formats: {
        jpeg: {
          title: 'JPEGビューアー',
          description: 'ズームとパンコントロールでJPEG画像を表示。'
        },
        png: {
          title: 'PNGビューアー',
          description: '透明度サポートでPNG画像を表示。'
        },
        webp: {
          title: 'WebPビューアー',
          description: 'モダンな圧縮でWebP画像を表示。'
        },
        gif: {
          title: 'GIFビューアー',
          description: '再生コントロールでアニメーションGIF画像を表示。'
        },
        svg: {
          title: 'SVGビューアー',
          description: 'ズームでスケーラブルベクターグラフィックを表示。'
        },
        bmp: {
          title: 'BMPビューアー',
          description: '色深度サポートでビットマップ画像を表示。'
        },
        ico: {
          title: 'ICOビューアー',
          description: '複数のサイズでWindowsアイコンファイルを表示。'
        },
        heic: {
          title: 'HEICビューアー',
          description: 'モダンなカメラのHEIC画像を表示。'
        },
        avif: {
          title: 'AVIFビューアー',
          description: '次世代圧縮でAVIF画像を表示。'
        },
        pdf: {
          title: 'PDFビューアー',
          description: 'ページナビゲーションでPDF文書を表示。'
        },
        docx: {
          title: 'DOCXビューアー',
          description: 'Microsoft Word文書を表示。'
        },
        rtf: {
          title: 'RTFビューアー',
          description: 'リッチテキスト形式文書を表示。'
        },
        odt: {
          title: 'ODTビューアー',
          description: 'OpenDocumentテキストファイルを表示。'
        },
        txt: {
          title: 'TXTビューアー',
          description: '構文ハイライトでプレーンテキストファイルを表示。'
        },
        md: {
          title: 'Markdownビューアー',
          description: 'レンダリングされたフォーマットでMarkdownファイルを表示。'
        },
        xlsx: {
          title: 'Excelビューアー',
          description: '数式サポートでExcelスプレッドシートを表示。'
        },
        csv: {
          title: 'CSVビューアー',
          description: 'テーブルフォーマットでCSVファイルを表示。'
        },
        ods: {
          title: 'ODSビューアー',
          description: 'OpenDocumentスプレッドシートファイルを表示。'
        },
        json: {
          title: 'JSONビューアー',
          description: '構文ハイライトとフォーマットでJSONファイルを表示。'
        },
        xml: {
          title: 'XMLビューアー',
          description: 'ツリー構造でXMLファイルを表示。'
        },
        html: {
          title: 'HTMLビューアー',
          description: 'レンダリングされたコンテンツでHTMLファイルを表示。'
        },
        css: {
          title: 'CSSビューアー',
          description: '構文ハイライトでCSSファイルを表示。'
        },
        js: {
          title: 'JavaScriptビューアー',
          description: '構文ハイライトでJSファイルを表示。'
        },
        py: {
          title: 'Pythonビューアー',
          description: '構文ハイライトでPythonファイルを表示。'
        },
        nef: {
          title: 'NEFビューアー',
          description: 'Nikon RAWカメラファイルを表示。'
        },
        cr2: {
          title: 'CR2ビューアー',
          description: 'Canon RAWカメラファイルを表示。'
        },
        dcr: {
          title: 'DCRビューアー',
          description: 'Kodak RAWカメラファイルを表示。'
        },
        x3f: {
          title: 'X3Fビューアー',
          description: 'Sigma RAWカメラファイルを表示。'
        },
        arw: {
          title: 'ARWビューアー',
          description: 'Sony RAWカメラファイルを表示。'
        },
        raf: {
          title: 'RAFビューアー',
          description: 'Fuji RAWカメラファイルを表示。'
        },
        orf: {
          title: 'ORFビューアー',
          description: 'Olympus RAWカメラファイルを表示。'
        },
        dng: {
          title: 'DNGビューアー',
          description: 'Adobe Digital Negativeファイルを表示。'
        },
        pef: {
          title: 'PEFビューアー',
          description: 'Pentax RAWカメラファイルを表示。'
        }
      }
    }
  },
  zh: {
    viewers_page: {
      meta: {
        title: '免费在线文件查看器 - 即时查看50+格式 | MorphyHub',
        description:
          '在浏览器中即时查看和预览50+文件格式。支持图像、文档、电子表格、代码文件和RAW相机格式。无需下载或注册。快速、安全、完全免费。',
        keywords:
          '文件查看器, 在线查看器, 图像查看器, 文档查看器, pdf查看器, excel查看器, 免费查看器, 浏览器查看器, 即时预览, 安全查看器'
      },
      schema: {
        name: '在线文件查看器',
        description:
          '使用针对每种文件类型的专用查看器，直接在浏览器中预览50+格式的文件。'
      },
      hero: {
        title: '免费在线文件查看器',
        description:
          '在浏览器中即时查看和预览50+文件格式，无需下载。支持图像、文档、电子表格、代码文件和RAW相机格式。快速、安全、完全免费。'
      },
      search: {
        placeholder: '搜索查看器... (例如: PDF, JPEG, Excel, JSON)',
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
            description: '无需下载或安装软件即可即时查看文件。无需等待，无延迟。'
          },
          {
            title: '安全私密',
            description: '文件在浏览器中本地处理，永远不会存储在我们的服务器上。您的隐私得到保障。'
          },
          {
            title: '全面支持',
            description: '支持所有主要类别中的50+文件格式：图像、文档、电子表格、代码和RAW格式。'
          },
          {
            title: '100%免费',
            description: '所有查看器完全免费使用。无需注册，无限制，无隐藏费用。'
          },
          {
            title: '高性能',
            description: '针对速度和质量进行了优化。使用先进的渲染技术快速查看大文件。'
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
        jpeg: {
          title: 'JPEG查看器',
          description: '使用缩放和平移控件查看JPEG图像。'
        },
        png: {
          title: 'PNG查看器',
          description: '查看支持透明度的PNG图像。'
        },
        webp: {
          title: 'WebP查看器',
          description: '查看具有现代压缩的WebP图像。'
        },
        gif: {
          title: 'GIF查看器',
          description: '使用播放控件查看动画GIF图像。'
        },
        svg: {
          title: 'SVG查看器',
          description: '使用缩放查看可缩放矢量图形。'
        },
        bmp: {
          title: 'BMP查看器',
          description: '查看支持颜色深度的位图图像。'
        },
        ico: {
          title: 'ICO查看器',
          description: '查看具有多种尺寸的Windows图标文件。'
        },
        heic: {
          title: 'HEIC查看器',
          description: '查看来自现代相机的HEIC图像。'
        },
        avif: {
          title: 'AVIF查看器',
          description: '查看具有下一代压缩的AVIF图像。'
        },
        pdf: {
          title: 'PDF查看器',
          description: '使用页面导航查看PDF文档。'
        },
        docx: {
          title: 'DOCX查看器',
          description: '查看Microsoft Word文档。'
        },
        rtf: {
          title: 'RTF查看器',
          description: '查看富文本格式文档。'
        },
        odt: {
          title: 'ODT查看器',
          description: '查看OpenDocument文本文件。'
        },
        txt: {
          title: 'TXT查看器',
          description: '使用语法高亮查看纯文本文件。'
        },
        md: {
          title: 'Markdown查看器',
          description: '查看具有渲染格式的Markdown文件。'
        },
        xlsx: {
          title: 'Excel查看器',
          description: '查看支持公式的Excel电子表格。'
        },
        csv: {
          title: 'CSV查看器',
          description: '使用表格格式查看CSV文件。'
        },
        ods: {
          title: 'ODS查看器',
          description: '查看OpenDocument电子表格文件。'
        },
        json: {
          title: 'JSON查看器',
          description: '使用语法高亮和格式查看JSON文件。'
        },
        xml: {
          title: 'XML查看器',
          description: '使用树结构查看XML文件。'
        },
        html: {
          title: 'HTML查看器',
          description: '查看具有渲染内容的HTML文件。'
        },
        css: {
          title: 'CSS查看器',
          description: '使用语法高亮查看CSS文件。'
        },
        js: {
          title: 'JavaScript查看器',
          description: '使用语法高亮查看JS文件。'
        },
        py: {
          title: 'Python查看器',
          description: '使用语法高亮查看Python文件。'
        },
        nef: {
          title: 'NEF查看器',
          description: '查看Nikon RAW相机文件。'
        },
        cr2: {
          title: 'CR2查看器',
          description: '查看Canon RAW相机文件。'
        },
        dcr: {
          title: 'DCR查看器',
          description: '查看Kodak RAW相机文件。'
        },
        x3f: {
          title: 'X3F查看器',
          description: '查看Sigma RAW相机文件。'
        },
        arw: {
          title: 'ARW查看器',
          description: '查看Sony RAW相机文件。'
        },
        raf: {
          title: 'RAF查看器',
          description: '查看Fuji RAW相机文件。'
        },
        orf: {
          title: 'ORF查看器',
          description: '查看Olympus RAW相机文件。'
        },
        dng: {
          title: 'DNG查看器',
          description: '查看Adobe Digital Negative文件。'
        },
        pef: {
          title: 'PEF查看器',
          description: '查看Pentax RAW相机文件。'
        }
      }
    }
  }
};

Object.entries(viewersPageResources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

