import i18n // from '../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type ViewerCsvTranslations = {
  viewers: {
    csv: {
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

const resources: Record<string, ViewerCsvTranslations> = {
  en: {
    viewers: {
      csv: {
        meta_title: 'Free CSV Viewer - Preview CSV Files Online',
        meta_description:
          'View and preview CSV, TSV, and TAB files directly in your browser. Our free CSV viewer features table display, data analysis tools, and professional data viewing capabilities for spreadsheet files.',
        meta_keywords:
          'csv viewer, csv preview, tsv viewer, tab viewer, online csv editor, csv table viewer, data viewer, spreadsheet viewer',
        hero_title: 'Free CSV Viewer',
        hero_subtitle:
          'Preview CSV files with table display, data analysis tools, and professional data viewing capabilities in your browser.',
        upload_title: 'Upload CSV Files',
        upload_description:
          'Drag and drop your CSV, TSV, or TAB files or click to browse. Supports up to 20 files (100MB each) with instant preview and table display.',
        files_heading: 'Your CSV Files ({{count}})',
        how_to_title: 'How to View CSV Files',
        how_to_description:
          '• <strong>Upload:</strong> Drop your CSV files into the panel or click to browse from disk.<br />' +
          '• <strong>Preview:</strong> Click "View" to open the CSV file in a new window with formatted table display and data analysis tools.<br />' +
          '• <strong>Download:</strong> Keep your original CSV file with a single click whenever you need it.',
        buttons: {
          view: 'View CSV',
          download: 'Download CSV',
          back: '← Back to All Viewers'
        },
        alerts: {
          file_too_large:
            'File is too large for preview ({{size}} MB). Maximum size is {{max}} MB. Please download the file instead.',
          popup_blocked: 'Please allow pop-ups to view the CSV file.',
          preview_failed: 'Failed to open CSV preview. Please try again or download the file.'
        },
        loading_window: {
          title: 'Loading {{filename}}...',
          message: 'Processing CSV file for preview...'
        },
        error_window: {
          title: 'Preview Error',
          message: 'Failed to generate CSV preview. Please try downloading the file instead.',
          close: 'Close'
        },
        features: [
          {
            title: '<strong>Table display</strong>',
            description:
              'View CSV files with formatted table display that makes it easy to read and analyze your data. Columns, rows, and values are clearly organized and displayed in a structured format.'
          },
          {
            title: '<strong>Multiple format support</strong>',
            description:
              'Preview CSV, TSV, and TAB files seamlessly. Our viewer handles all popular delimiter-separated value formats and standard CSV files with the same high-quality display.'
          },
          {
            title: '<strong>Data analysis tools</strong>',
            description:
              'Use professional data viewing tools to inspect, analyze, and understand your CSV data. Perfect for data analysis, reporting, and reviewing spreadsheet files.'
          }
        ],
        about_title: 'About CSV Format',
        about_intro:
          'CSV (Comma-Separated Values) is a simple file format used to store tabular data, such as a spreadsheet or database. Each line of the file is a data record, and each record consists of one or more fields, separated by commas. CSV files are widely used for data exchange between different applications and systems. They are easy to read and write, making them ideal for data import/export, data analysis, and data migration tasks.',
        advantages_title: 'Key Advantages',
        advantages: [
          '• <strong>Simple format</strong> – CSV files are plain text files, making them easy to read and write without special software',
          '• <strong>Universal compatibility</strong> – CSV files can be opened in almost any application, including Excel, Google Sheets, and database systems',
          '• <strong>Small file size</strong> – CSV files are lightweight and compress well, making them ideal for data transfer and storage',
          '• <strong>Easy to parse</strong> – CSV format is straightforward to parse programmatically, making it ideal for data processing and automation',
          '• <strong>Widely supported</strong> – CSV is supported by virtually all data processing tools and programming languages'
        ],
        use_cases_title: 'Common Use Cases',
        use_cases: [
          '• <strong>Data export/import</strong> – Export data from databases, spreadsheets, and applications to CSV format for easy sharing and backup',
          '• <strong>Data analysis</strong> – Import CSV files into data analysis tools, statistical software, and business intelligence platforms',
          '• <strong>Data migration</strong> – Transfer data between different systems and applications using CSV as an intermediate format',
          '• <strong>Reporting</strong> – Generate reports in CSV format for easy distribution and analysis by stakeholders',
          '• <strong>Data exchange</strong> – Share data between different applications and systems using CSV as a universal format'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Property',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extensions', value: '.csv, .tsv, .tab' },
          { label: 'MIME Type', value: 'text/csv' },
          { label: 'Standard', value: 'RFC 4180' },
          { label: 'Delimiters', value: 'Comma, Tab, Semicolon' },
          { label: 'Encoding', value: 'UTF-8, ASCII, Windows-1252' },
          { label: 'Maximum File Size', value: '100 MB per file' }
        ]
      }
    }
  },
  pl: {
    viewers: {
      csv: {
        meta_title: 'Darmowy Podgląd CSV - Podglądaj Pliki CSV Online',
        meta_description:
          'Przeglądaj i podglądaj pliki CSV, TSV i TAB bezpośrednio w przeglądarce. Nasz darmowy podgląd CSV oferuje wyświetlanie tabel, narzędzia analizy danych i profesjonalne możliwości przeglądania danych dla plików arkuszy kalkulacyjnych.',
        meta_keywords:
          'podgląd csv, podgląd csv online, podgląd tsv, podgląd tab, edytor csv online, podgląd tabel csv, przeglądarka danych, przeglądarka arkuszy',
        hero_title: 'Darmowy Podgląd CSV',
        hero_subtitle:
          'Przeglądaj pliki CSV z wyświetlaniem tabel, narzędziami analizy danych i profesjonalnymi możliwościami przeglądania danych w przeglądarce.',
        upload_title: 'Prześlij Pliki CSV',
        upload_description:
          'Przeciągnij i upuść pliki CSV, TSV lub TAB lub kliknij, aby je wybrać. Obsługa do 20 plików (100 MB każdy) z natychmiastowym podglądem i wyświetlaniem tabel.',
        files_heading: 'Twoje pliki CSV ({{count}})',
        how_to_title: 'Jak Otworzyć Pliki CSV',
        how_to_description:
          '• <strong>Prześlij:</strong> Upuść pliki CSV w panelu lub kliknij, aby je wybrać z dysku.<br />' +
          '• <strong>Podgląd:</strong> Kliknij "Podglądaj", aby otworzyć plik CSV w nowym oknie z sformatowanym wyświetlaniem tabel i narzędziami analizy danych.<br />' +
          '• <strong>Pobierz:</strong> Zachowaj oryginalny plik CSV jednym kliknięciem, gdy go potrzebujesz.',
        buttons: {
          view: 'Podglądaj CSV',
          download: 'Pobierz CSV',
          back: '← Powrót do wszystkich podglądów'
        },
        alerts: {
          file_too_large:
            'Plik jest za duży do podglądu ({{size}} MB). Maksymalny rozmiar to {{max}} MB. Pobierz plik zamiast tego.',
          popup_blocked: 'Zezwól na wyskakujące okna, aby wyświetlić plik CSV.',
          preview_failed: 'Nie udało się otworzyć podglądu CSV. Spróbuj ponownie lub pobierz plik.'
        },
        loading_window: {
          title: 'Ładowanie {{filename}}...',
          message: 'Przetwarzanie pliku CSV do podglądu...'
        },
        error_window: {
          title: 'Błąd Podglądu',
          message: 'Nie udało się wygenerować podglądu CSV. Spróbuj pobrać plik.',
          close: 'Zamknij'
        },
        features: [
          {
            title: '<strong>Wyświetlanie tabel</strong>',
            description:
              'Przeglądaj pliki CSV z sformatowanym wyświetlaniem tabel, które ułatwia czytanie i analizę danych. Kolumny, wiersze i wartości są wyraźnie zorganizowane i wyświetlane w ustrukturyzowanym formacie.'
          },
          {
            title: '<strong>Obsługa wielu formatów</strong>',
            description:
              'Bezproblemowo podglądaj pliki CSV, TSV i TAB. Nasz podgląd obsługuje wszystkie popularne formaty wartości oddzielonych separatorami i standardowe pliki CSV z taką samą wysoką jakością wyświetlania.'
          },
          {
            title: '<strong>Narzędzia analizy danych</strong>',
            description:
              'Używaj profesjonalnych narzędzi przeglądania danych do sprawdzania, analizowania i zrozumienia danych CSV. Idealne do analizy danych, raportowania i przeglądania plików arkuszy kalkulacyjnych.'
          }
        ],
        about_title: 'Informacje o Formacie CSV',
        about_intro:
          'CSV (Comma-Separated Values) to prosty format pliku używany do przechowywania danych tabelarycznych, takich jak arkusz kalkulacyjny lub baza danych. Każda linia pliku to rekord danych, a każdy rekord składa się z jednego lub więcej pól oddzielonych przecinkami. Pliki CSV są szeroko używane do wymiany danych między różnymi aplikacjami i systemami. Są łatwe do odczytu i zapisu, co czyni je idealnymi do importu/eksportu danych, analizy danych i zadań migracji danych.',
        advantages_title: 'Najważniejsze Zalety',
        advantages: [
          '• <strong>Prosty format</strong> – Pliki CSV to zwykłe pliki tekstowe, co czyni je łatwymi do odczytu i zapisu bez specjalnego oprogramowania',
          '• <strong>Uniwersalna kompatybilność</strong> – Pliki CSV można otworzyć w prawie każdej aplikacji, w tym Excel, Google Sheets i systemach baz danych',
          '• <strong>Mały rozmiar pliku</strong> – Pliki CSV są lekkie i dobrze się kompresują, co czyni je idealnymi do transferu i przechowywania danych',
          '• <strong>Łatwe do parsowania</strong> – Format CSV jest prosty do parsowania programowo, co czyni go idealnym do przetwarzania danych i automatyzacji',
          '• <strong>Powszechnie obsługiwane</strong> – CSV jest obsługiwany przez praktycznie wszystkie narzędzia przetwarzania danych i języki programowania'
        ],
        use_cases_title: 'Typowe Zastosowania',
        use_cases: [
          '• <strong>Eksport/import danych</strong> – Eksportuj dane z baz danych, arkuszy kalkulacyjnych i aplikacji do formatu CSV w celu łatwego udostępniania i tworzenia kopii zapasowych',
          '• <strong>Analiza danych</strong> – Importuj pliki CSV do narzędzi analizy danych, oprogramowania statystycznego i platform business intelligence',
          '• <strong>Migracja danych</strong> – Przenoś dane między różnymi systemami i aplikacjami używając CSV jako formatu pośredniego',
          '• <strong>Raportowanie</strong> – Generuj raporty w formacie CSV w celu łatwej dystrybucji i analizy przez interesariuszy',
          '• <strong>Wymiana danych</strong> – Udostępniaj dane między różnymi aplikacjami i systemami używając CSV jako uniwersalnego formatu'
        ],
        specs_title: 'Specyfikacja Techniczna',
        specs_header_label: 'Właściwość',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenia Plików', value: '.csv, .tsv, .tab' },
          { label: 'Typ MIME', value: 'text/csv' },
          { label: 'Standard', value: 'RFC 4180' },
          { label: 'Separatory', value: 'Przecinek, Tab, Średnik' },
          { label: 'Kodowanie', value: 'UTF-8, ASCII, Windows-1252' },
          { label: 'Maksymalny Rozmiar Pliku', value: '100 MB na plik' }
        ]
      }
    }
  },
  de: {
    viewers: {
      csv: {
        meta_title: 'Kostenloser CSV Viewer – CSV Dateien Online Anzeigen',
        meta_description:
          'Betrachten und zeigen Sie CSV, TSV und TAB Dateien direkt in Ihrem Browser an. Unser kostenloser CSV Viewer bietet Tabellenanzeige, Datenanalysetools und professionelle Datenanzeigefunktionen für Tabellenkalkulationsdateien.',
        meta_keywords:
          'csv viewer, csv vorschau, tsv viewer, tab viewer, online csv editor, csv tabellen viewer, daten viewer, tabellenkalkulations viewer',
        hero_title: 'Kostenloser CSV Viewer',
        hero_subtitle:
          'Zeigen Sie CSV Dateien mit Tabellenanzeige, Datenanalysetools und professionellen Datenanzeigefunktionen in Ihrem Browser an.',
        upload_title: 'CSV Dateien Hochladen',
        upload_description:
          'Ziehen Sie Ihre CSV, TSV oder TAB Dateien hinein oder klicken Sie zum Durchsuchen. Unterstützt bis zu 20 Dateien (100 MB jeweils) mit sofortiger Vorschau und Tabellenanzeige.',
        files_heading: 'Ihre CSV Dateien ({{count}})',
        how_to_title: 'Wie Man CSV Dateien Anzeigt',
        how_to_description:
          '• <strong>Hochladen:</strong> Lassen Sie Ihre CSV Dateien in das Panel fallen oder klicken Sie zum Durchsuchen von der Festplatte.<br />' +
          '• <strong>Vorschau:</strong> Klicken Sie auf "Anzeigen", um die CSV Datei in einem neuen Fenster mit formatierter Tabellenanzeige und Datenanalysetools zu öffnen.<br />' +
          '• <strong>Herunterladen:</strong> Bewahren Sie Ihre ursprüngliche CSV Datei mit einem Klick auf, wann immer Sie sie benötigen.',
        buttons: {
          view: 'CSV Anzeigen',
          download: 'CSV Herunterladen',
          back: '← Zurück zu allen Viewern'
        },
        alerts: {
          file_too_large:
            'Datei ist zu groß für die Vorschau ({{size}} MB). Maximale Größe beträgt {{max}} MB. Bitte laden Sie die Datei stattdessen herunter.',
          popup_blocked: 'Bitte erlauben Sie Pop-ups, um die CSV Datei anzuzeigen.',
          preview_failed: 'CSV Vorschau konnte nicht geöffnet werden. Bitte versuchen Sie es erneut oder laden Sie die Datei herunter.'
        },
        loading_window: {
          title: 'Lade {{filename}}...',
          message: 'CSV Datei für Vorschau wird verarbeitet...'
        },
        error_window: {
          title: 'Vorschau Fehler',
          message: 'CSV Vorschau konnte nicht generiert werden. Bitte versuchen Sie stattdessen, die Datei herunterzuladen.',
          close: 'Schließen'
        },
        features: [
          {
            title: '<strong>Tabellenanzeige</strong>',
            description:
              'Betrachten Sie CSV Dateien mit formatierter Tabellenanzeige, die das Lesen und Analysieren Ihrer Daten erleichtert. Spalten, Zeilen und Werte sind klar organisiert und in einem strukturierten Format angezeigt.'
          },
          {
            title: '<strong>Mehrfachformat-Unterstützung</strong>',
            description:
              'Zeigen Sie CSV, TSV und TAB Dateien nahtlos an. Unser Viewer behandelt alle beliebten Trennzeichen-getrennten Wertformate und Standard-CSV-Dateien mit derselben hochwertigen Anzeige.'
          },
          {
            title: '<strong>Datenanalysetools</strong>',
            description:
              'Verwenden Sie professionelle Datenanzeigetools, um Ihre CSV-Daten zu überprüfen, zu analysieren und zu verstehen. Perfekt für Datenanalyse, Berichterstattung und Überprüfung von Tabellenkalkulationsdateien.'
          }
        ],
        about_title: 'Über CSV Format',
        about_intro:
          'CSV (Comma-Separated Values) ist ein einfaches Dateiformat, das zur Speicherung von Tabellendaten verwendet wird, wie z. B. eine Tabellenkalkulation oder eine Datenbank. Jede Zeile der Datei ist ein Datensatz, und jeder Datensatz besteht aus einem oder mehreren Feldern, die durch Kommas getrennt sind. CSV Dateien werden häufig für den Datenaustausch zwischen verschiedenen Anwendungen und Systemen verwendet. Sie sind einfach zu lesen und zu schreiben, was sie ideal für Datenimport/Export, Datenanalyse und Datenmigrationsaufgaben macht.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          '• <strong>Einfaches Format</strong> – CSV Dateien sind Klartextdateien, was sie einfach zu lesen und zu schreiben macht, ohne spezielle Software',
          '• <strong>Universelle Kompatibilität</strong> – CSV Dateien können in fast jeder Anwendung geöffnet werden, einschließlich Excel, Google Sheets und Datenbanksystemen',
          '• <strong>Kleine Dateigröße</strong> – CSV Dateien sind leicht und komprimieren gut, was sie ideal für Datentransfer und Speicherung macht',
          '• <strong>Einfach zu parsen</strong> – Das CSV Format ist einfach programmatisch zu parsen, was es ideal für Datenverarbeitung und Automatisierung macht',
          '• <strong>Weit verbreitet unterstützt</strong> – CSV wird von praktisch allen Datenverarbeitungstools und Programmiersprachen unterstützt'
        ],
        use_cases_title: 'Häufige Anwendungsfälle',
        use_cases: [
          '• <strong>Datenexport/Import</strong> – Exportieren Sie Daten aus Datenbanken, Tabellenkalkulationen und Anwendungen in CSV Format für einfaches Teilen und Backup',
          '• <strong>Datenanalyse</strong> – Importieren Sie CSV Dateien in Datenanalysetools, Statistiksoftware und Business-Intelligence-Plattformen',
          '• <strong>Datenmigration</strong> – Übertragen Sie Daten zwischen verschiedenen Systemen und Anwendungen unter Verwendung von CSV als Zwischenformat',
          '• <strong>Berichterstattung</strong> – Generieren Sie Berichte im CSV Format für einfache Verteilung und Analyse durch Stakeholder',
          '• <strong>Datenaustausch</strong> – Teilen Sie Daten zwischen verschiedenen Anwendungen und Systemen unter Verwendung von CSV als universelles Format'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Eigenschaft',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateiendungen', value: '.csv, .tsv, .tab' },
          { label: 'MIME Typ', value: 'text/csv' },
          { label: 'Standard', value: 'RFC 4180' },
          { label: 'Trennzeichen', value: 'Komma, Tab, Semikolon' },
          { label: 'Kodierung', value: 'UTF-8, ASCII, Windows-1252' },
          { label: 'Maximale Dateigröße', value: '100 MB pro Datei' }
        ]
      }
    }
  }
};

Object.entries(resources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

