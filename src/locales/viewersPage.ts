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
  }
};

Object.entries(viewersPageResources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

