import i18n // from '../i18n';

type Feature = { title: string; description: string };
type Spec = { label: string; value: string };

type ViewerCssTranslations = {
  viewers: {
    css: {
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

const resources: Record<string, ViewerCssTranslations> = {
  en: {
    viewers: {
      css: {
        meta_title: 'Free CSS Viewer - Preview CSS Files Online with Syntax Highlighting',
        meta_description:
          'View and preview CSS, SCSS, SASS, and LESS files directly in your browser. Our free CSS viewer features syntax highlighting, live preview, and professional styling tools for web developers.',
        meta_keywords:
          'css viewer, css preview, scss viewer, sass viewer, less viewer, online css editor, css syntax highlighting, web development tools',
        hero_title: 'Free CSS Viewer',
        hero_subtitle:
          'Preview CSS files with syntax highlighting, live rendering, and professional development tools in your browser.',
        upload_title: 'Upload CSS Files',
        upload_description:
          'Drag and drop your CSS, SCSS, SASS, or LESS files or click to browse. Supports up to 20 files (100MB each) with instant preview and syntax highlighting.',
        files_heading: 'Your CSS Files ({{count}})',
        how_to_title: 'How to View CSS Files',
        how_to_description:
          '• <strong>Upload:</strong> Drop your CSS files into the panel or click to browse from disk.<br />' +
          '• <strong>Preview:</strong> Click "View" to open the CSS file in a new window with syntax highlighting and formatted display.<br />' +
          '• <strong>Download:</strong> Keep your original CSS file with a single click whenever you need it.',
        buttons: {
          view: 'View CSS',
          download: 'Download CSS',
          back: '← Back to All Viewers'
        },
        alerts: {
          file_too_large:
            'File is too large for preview ({{size}} MB). Maximum size is {{max}} MB. Please download the file instead.',
          popup_blocked: 'Please allow pop-ups to view the CSS file.',
          preview_failed: 'Failed to open CSS preview. Please try again or download the file.'
        },
        loading_window: {
          title: 'Loading {{filename}}...',
          message: 'Processing CSS file for preview...'
        },
        error_window: {
          title: 'Preview Error',
          message: 'Failed to generate CSS preview. Please try downloading the file instead.',
          close: 'Close'
        },
        features: [
          {
            title: '<strong>Syntax highlighting</strong>',
            description:
              'View CSS code with beautiful syntax highlighting that makes it easy to read and understand your stylesheets. Colors, selectors, properties, and values are clearly distinguished.'
          },
          {
            title: '<strong>Multiple format support</strong>',
            description:
              'Preview CSS, SCSS, SASS, and LESS files seamlessly. Our viewer handles all popular CSS preprocessor formats and standard CSS files with the same high-quality display.'
          },
          {
            title: '<strong>Professional tools</strong>',
            description:
              'Use professional development tools to inspect, analyze, and understand your CSS code. Perfect for debugging, learning, and reviewing stylesheets.'
          }
        ],
        about_title: 'About CSS Format',
        about_intro:
          'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. It is one of the core technologies of the World Wide Web, alongside HTML and JavaScript. Modern CSS supports advanced features like Flexbox, Grid, animations, transitions, and responsive design, making it essential for creating modern web applications.',
        advantages_title: 'Key Advantages',
        advantages: [
          '• <strong>Separation of concerns</strong> – CSS separates presentation from content, making websites easier to maintain and update',
          '• <strong>Consistency</strong> – Apply consistent styling across multiple pages and elements with reusable stylesheets',
          '• <strong>Performance</strong> – External CSS files can be cached by browsers, improving page load times',
          '• <strong>Responsive design</strong> – Create layouts that adapt to different screen sizes and devices using media queries',
          '• <strong>Advanced features</strong> – Use modern CSS features like Grid, Flexbox, animations, and custom properties for powerful styling'
        ],
        use_cases_title: 'Common Use Cases',
        use_cases: [
          '• <strong>Web development</strong> – Style HTML documents and create visually appealing websites and web applications',
          '• <strong>Theme customization</strong> – Modify CSS files to customize the appearance of WordPress themes, Drupal themes, and other CMS platforms',
          '• <strong>Design systems</strong> – Create and maintain design systems with reusable CSS components and utility classes',
          '• <strong>Responsive layouts</strong> – Build responsive websites that work seamlessly on desktop, tablet, and mobile devices',
          '• <strong>Animations and effects</strong> – Create smooth animations, transitions, and visual effects without JavaScript'
        ],
        specs_title: 'Technical Specifications',
        specs_header_label: 'Property',
        specs_header_value: 'Details',
        specs: [
          { label: 'File Extensions', value: '.css, .scss, .sass, .less' },
          { label: 'MIME Type', value: 'text/css' },
          { label: 'Standard', value: 'W3C CSS Specification' },
          { label: 'Preprocessors', value: 'SCSS, SASS, LESS' },
          { label: 'Browser Support', value: 'All modern browsers' },
          { label: 'Latest Version', value: 'CSS3' }
        ]
      }
    }
  },
  pl: {
    viewers: {
      css: {
        meta_title: 'Darmowy Podgląd CSS - Podglądaj Pliki CSS Online z Podświetlaniem Składni',
        meta_description:
          'Przeglądaj i podglądaj pliki CSS, SCSS, SASS i LESS bezpośrednio w przeglądarce. Nasz darmowy podgląd CSS oferuje podświetlanie składni, podgląd na żywo i profesjonalne narzędzia stylowania dla programistów internetowych.',
        meta_keywords:
          'podgląd css, podgląd css online, podgląd scss, podgląd sass, podgląd less, edytor css online, podświetlanie składni css, narzędzia web development',
        hero_title: 'Darmowy Podgląd CSS',
        hero_subtitle:
          'Przeglądaj pliki CSS z podświetlaniem składni, renderowaniem na żywo i profesjonalnymi narzędziami programistycznymi w przeglądarce.',
        upload_title: 'Prześlij Pliki CSS',
        upload_description:
          'Przeciągnij i upuść pliki CSS, SCSS, SASS lub LESS lub kliknij, aby je wybrać. Obsługa do 20 plików (100 MB każdy) z natychmiastowym podglądem i podświetlaniem składni.',
        files_heading: 'Twoje pliki CSS ({{count}})',
        how_to_title: 'Jak Otworzyć Pliki CSS',
        how_to_description:
          '• <strong>Prześlij:</strong> Upuść pliki CSS w panelu lub kliknij, aby je wybrać z dysku.<br />' +
          '• <strong>Podgląd:</strong> Kliknij "Podglądaj", aby otworzyć plik CSS w nowym oknie z podświetlaniem składni i sformatowanym wyświetlaniem.<br />' +
          '• <strong>Pobierz:</strong> Zachowaj oryginalny plik CSS jednym kliknięciem, gdy go potrzebujesz.',
        buttons: {
          view: 'Podglądaj CSS',
          download: 'Pobierz CSS',
          back: '← Powrót do wszystkich podglądów'
        },
        alerts: {
          file_too_large:
            'Plik jest za duży do podglądu ({{size}} MB). Maksymalny rozmiar to {{max}} MB. Pobierz plik zamiast tego.',
          popup_blocked: 'Zezwól na wyskakujące okna, aby wyświetlić plik CSS.',
          preview_failed: 'Nie udało się otworzyć podglądu CSS. Spróbuj ponownie lub pobierz plik.'
        },
        loading_window: {
          title: 'Ładowanie {{filename}}...',
          message: 'Przetwarzanie pliku CSS do podglądu...'
        },
        error_window: {
          title: 'Błąd Podglądu',
          message: 'Nie udało się wygenerować podglądu CSS. Spróbuj pobrać plik.',
          close: 'Zamknij'
        },
        features: [
          {
            title: '<strong>Podświetlanie składni</strong>',
            description:
              'Przeglądaj kod CSS z pięknym podświetlaniem składni, które ułatwia czytanie i zrozumienie arkuszy stylów. Kolory, selektory, właściwości i wartości są wyraźnie rozróżnione.'
          },
          {
            title: '<strong>Obsługa wielu formatów</strong>',
            description:
              'Bezproblemowo podglądaj pliki CSS, SCSS, SASS i LESS. Nasz podgląd obsługuje wszystkie popularne formaty preprocessorów CSS i standardowe pliki CSS z taką samą wysoką jakością wyświetlania.'
          },
          {
            title: '<strong>Profesjonalne narzędzia</strong>',
            description:
              'Używaj profesjonalnych narzędzi programistycznych do sprawdzania, analizowania i zrozumienia kodu CSS. Idealne do debugowania, nauki i przeglądania arkuszy stylów.'
          }
        ],
        about_title: 'Informacje o Formacie CSS',
        about_intro:
          'CSS (Cascading Style Sheets) to język arkuszy stylów używany do opisywania prezentacji dokumentu napisanego w HTML lub XML. CSS opisuje, jak elementy powinny być renderowane na ekranie, na papierze, w mowie lub w innych mediach. Jest to jedna z podstawowych technologii World Wide Web, obok HTML i JavaScript. Nowoczesny CSS obsługuje zaawansowane funkcje, takie jak Flexbox, Grid, animacje, przejścia i responsywny design, co czyni go niezbędnym do tworzenia nowoczesnych aplikacji internetowych.',
        advantages_title: 'Najważniejsze Zalety',
        advantages: [
          '• <strong>Separacja odpowiedzialności</strong> – CSS oddziela prezentację od treści, co ułatwia utrzymanie i aktualizację stron internetowych',
          '• <strong>Spójność</strong> – Stosuj spójne stylowanie na wielu stronach i elementach za pomocą wielokrotnie używanych arkuszy stylów',
          '• <strong>Wydajność</strong> – Zewnętrzne pliki CSS mogą być buforowane przez przeglądarki, poprawiając czas ładowania stron',
          '• <strong>Responsywny design</strong> – Twórz układy, które dostosowują się do różnych rozmiarów ekranu i urządzeń za pomocą zapytań medialnych',
          '• <strong>Zaawansowane funkcje</strong> – Używaj nowoczesnych funkcji CSS, takich jak Grid, Flexbox, animacje i niestandardowe właściwości do potężnego stylowania'
        ],
        use_cases_title: 'Typowe Zastosowania',
        use_cases: [
          '• <strong>Web development</strong> – Stylizuj dokumenty HTML i tworz wizualnie atrakcyjne strony internetowe i aplikacje webowe',
          '• <strong>Dostosowywanie motywów</strong> – Modyfikuj pliki CSS, aby dostosować wygląd motywów WordPress, Drupal i innych platform CMS',
          '• <strong>Systemy designu</strong> – Twórz i utrzymuj systemy designu z wielokrotnie używanymi komponentami CSS i klasami użytkowymi',
          '• <strong>Responsywne układy</strong> – Buduj responsywne strony internetowe, które działają bezproblemowo na komputerach stacjonarnych, tabletach i urządzeniach mobilnych',
          '• <strong>Animacje i efekty</strong> – Twórz płynne animacje, przejścia i efekty wizualne bez JavaScript'
        ],
        specs_title: 'Specyfikacja Techniczna',
        specs_header_label: 'Właściwość',
        specs_header_value: 'Szczegóły',
        specs: [
          { label: 'Rozszerzenia Plików', value: '.css, .scss, .sass, .less' },
          { label: 'Typ MIME', value: 'text/css' },
          { label: 'Standard', value: 'Specyfikacja CSS W3C' },
          { label: 'Preprocessory', value: 'SCSS, SASS, LESS' },
          { label: 'Obsługa Przeglądarek', value: 'Wszystkie nowoczesne przeglądarki' },
          { label: 'Najnowsza Wersja', value: 'CSS3' }
        ]
      }
    }
  },
  de: {
    viewers: {
      css: {
        meta_title: 'Kostenloser CSS Viewer – CSS Dateien Online mit Syntax-Hervorhebung Anzeigen',
        meta_description:
          'Betrachten und zeigen Sie CSS, SCSS, SASS und LESS Dateien direkt in Ihrem Browser an. Unser kostenloser CSS Viewer bietet Syntax-Hervorhebung, Live-Vorschau und professionelle Styling-Tools für Webentwickler.',
        meta_keywords:
          'css viewer, css vorschau, scss viewer, sass viewer, less viewer, online css editor, css syntax hervorhebung, webentwicklung tools',
        hero_title: 'Kostenloser CSS Viewer',
        hero_subtitle:
          'Zeigen Sie CSS Dateien mit Syntax-Hervorhebung, Live-Rendering und professionellen Entwicklungstools in Ihrem Browser an.',
        upload_title: 'CSS Dateien Hochladen',
        upload_description:
          'Ziehen Sie Ihre CSS, SCSS, SASS oder LESS Dateien hinein oder klicken Sie zum Durchsuchen. Unterstützt bis zu 20 Dateien (100 MB jeweils) mit sofortiger Vorschau und Syntax-Hervorhebung.',
        files_heading: 'Ihre CSS Dateien ({{count}})',
        how_to_title: 'Wie Man CSS Dateien Anzeigt',
        how_to_description:
          '• <strong>Hochladen:</strong> Lassen Sie Ihre CSS Dateien in das Panel fallen oder klicken Sie zum Durchsuchen von der Festplatte.<br />' +
          '• <strong>Vorschau:</strong> Klicken Sie auf "Anzeigen", um die CSS Datei in einem neuen Fenster mit Syntax-Hervorhebung und formatiertem Display zu öffnen.<br />' +
          '• <strong>Herunterladen:</strong> Bewahren Sie Ihre ursprüngliche CSS Datei mit einem Klick auf, wann immer Sie sie benötigen.',
        buttons: {
          view: 'CSS Anzeigen',
          download: 'CSS Herunterladen',
          back: '← Zurück zu allen Viewern'
        },
        alerts: {
          file_too_large:
            'Datei ist zu groß für die Vorschau ({{size}} MB). Maximale Größe beträgt {{max}} MB. Bitte laden Sie die Datei stattdessen herunter.',
          popup_blocked: 'Bitte erlauben Sie Pop-ups, um die CSS Datei anzuzeigen.',
          preview_failed: 'CSS Vorschau konnte nicht geöffnet werden. Bitte versuchen Sie es erneut oder laden Sie die Datei herunter.'
        },
        loading_window: {
          title: 'Lade {{filename}}...',
          message: 'CSS Datei für Vorschau wird verarbeitet...'
        },
        error_window: {
          title: 'Vorschau Fehler',
          message: 'CSS Vorschau konnte nicht generiert werden. Bitte versuchen Sie stattdessen, die Datei herunterzuladen.',
          close: 'Schließen'
        },
        features: [
          {
            title: '<strong>Syntax-Hervorhebung</strong>',
            description:
              'Betrachten Sie CSS-Code mit schöner Syntax-Hervorhebung, die das Lesen und Verstehen Ihrer Stylesheets erleichtert. Farben, Selektoren, Eigenschaften und Werte sind klar unterschieden.'
          },
          {
            title: '<strong>Mehrfachformat-Unterstützung</strong>',
            description:
              'Zeigen Sie CSS, SCSS, SASS und LESS Dateien nahtlos an. Unser Viewer behandelt alle beliebten CSS-Präprozessor-Formate und Standard-CSS-Dateien mit derselben hochwertigen Anzeige.'
          },
          {
            title: '<strong>Professionelle Tools</strong>',
            description:
              'Verwenden Sie professionelle Entwicklungstools, um Ihren CSS-Code zu überprüfen, zu analysieren und zu verstehen. Perfekt zum Debuggen, Lernen und Überprüfen von Stylesheets.'
          }
        ],
        about_title: 'Über CSS Format',
        about_intro:
          'CSS (Cascading Style Sheets) ist eine Stylesheet-Sprache, die zur Beschreibung der Präsentation eines in HTML oder XML geschriebenen Dokuments verwendet wird. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder auf anderen Medien gerendert werden sollten. Es ist eine der Kerntechnologien des World Wide Web, neben HTML und JavaScript. Modernes CSS unterstützt erweiterte Funktionen wie Flexbox, Grid, Animationen, Übergänge und responsives Design, was es für die Erstellung moderner Webanwendungen unerlässlich macht.',
        advantages_title: 'Hauptvorteile',
        advantages: [
          '• <strong>Trennung der Anliegen</strong> – CSS trennt Präsentation vom Inhalt, was Websites einfacher zu warten und zu aktualisieren macht',
          '• <strong>Konsistenz</strong> – Wenden Sie konsistentes Styling auf mehreren Seiten und Elementen mit wiederverwendbaren Stylesheets an',
          '• <strong>Leistung</strong> – Externe CSS-Dateien können von Browsern zwischengespeichert werden, was die Seitenladezeiten verbessert',
          '• <strong>Responsives Design</strong> – Erstellen Sie Layouts, die sich an verschiedene Bildschirmgrößen und Geräte mit Medienabfragen anpassen',
          '• <strong>Erweiterte Funktionen</strong> – Verwenden Sie moderne CSS-Funktionen wie Grid, Flexbox, Animationen und benutzerdefinierte Eigenschaften für leistungsstarkes Styling'
        ],
        use_cases_title: 'Häufige Anwendungsfälle',
        use_cases: [
          '• <strong>Webentwicklung</strong> – Stylen Sie HTML-Dokumente und erstellen Sie visuell ansprechende Websites und Webanwendungen',
          '• <strong>Theme-Anpassung</strong> – Ändern Sie CSS-Dateien, um das Erscheinungsbild von WordPress-Themes, Drupal-Themes und anderen CMS-Plattformen anzupassen',
          '• <strong>Design-Systeme</strong> – Erstellen und pflegen Sie Design-Systeme mit wiederverwendbaren CSS-Komponenten und Utility-Klassen',
          '• <strong>Responsive Layouts</strong> – Erstellen Sie responsive Websites, die nahtlos auf Desktop, Tablet und Mobilgeräten funktionieren',
          '• <strong>Animationen und Effekte</strong> – Erstellen Sie flüssige Animationen, Übergänge und visuelle Effekte ohne JavaScript'
        ],
        specs_title: 'Technische Spezifikationen',
        specs_header_label: 'Eigenschaft',
        specs_header_value: 'Details',
        specs: [
          { label: 'Dateiendungen', value: '.css, .scss, .sass, .less' },
          { label: 'MIME Typ', value: 'text/css' },
          { label: 'Standard', value: 'W3C CSS Spezifikation' },
          { label: 'Präprozessoren', value: 'SCSS, SASS, LESS' },
          { label: 'Browser-Unterstützung', value: 'Alle modernen Browser' },
          { label: 'Neueste Version', value: 'CSS3' }
        ]
      }
    }
  }
};

Object.entries(resources).forEach(([lng, bundle]) => {
  i18n.addResourceBundle(lng, 'translation', bundle, true, true);
});

export {};

