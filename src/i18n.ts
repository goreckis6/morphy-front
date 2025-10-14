import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Common
      'common.free': 'Free',
      'common.upload': 'Upload',
      'common.download': 'Download',
      'common.convert': 'Convert',
      'common.converting': 'Converting...',
      'common.choose_files': 'Choose Files',
      'common.single_file': 'Single File',
      'common.batch_convert': 'Batch Convert',
      'common.back_to_home': 'Back to Home',
      'common.back_to_converters': 'Back to Converters',
      'common.start_converting': 'Start Converting Now',
      'common.convert_more': 'Convert More Files',
      'common.convert_another': 'Convert Another',
      
      // Validation messages
      'validation.single_file_limit': 'Single file limit: {{size}} per file.',
      'validation.batch_info': 'Batch conversion supports up to {{count}} files, {{perFileSize}} per file, {{totalSize}} total.',
      'validation.total_size': 'Total size: {{current}} of {{max}} allowed.',
      'validation.file_too_large': 'File "{{filename}}" is too large ({{fileSize}}). Maximum allowed size is {{maxSize}}.',
      'validation.too_many_files': 'Too many files selected ({{count}}). Maximum allowed is {{max}}.',
      'validation.batch_too_large': 'Total batch size {{totalSize}} exceeds the limit of {{maxSize}}.',
      
      // Features
      'features.lightning_fast': 'Lightning Fast',
      'features.100_free': '100% Free',
      'features.no_registration': 'No Registration',
      'features.secure': '100% Secure',
      
      // DOC to EPUB
      'doc_to_epub.title': 'Free DOC to EPUB Converter',
      'doc_to_epub.meta_title': 'Free DOC to EPUB Converter Online - Convert Word Documents to eBook Format | MorphyIMG',
      'doc_to_epub.meta_description': 'Convert Microsoft Word DOC files to EPUB eBook format online for free. Fast, secure DOC to EPUB converter with batch processing. Perfect for Kindle, Kobo, and all e-readers.',
      'doc_to_epub.subtitle': 'Convert Microsoft Word DOC files to EPUB eBook format online for free. Perfect for Kindle, Kobo, and all e-readers with no registration required.',
      'doc_to_epub.heading': 'Convert DOC to EPUB',
      'doc_to_epub.upload_single': 'Upload DOC File',
      'doc_to_epub.upload_batch': 'Upload Multiple DOC Files',
      'doc_to_epub.upload_text_single': 'Drag and drop your DOC file here or click to browse',
      'doc_to_epub.upload_text_batch': 'Select multiple DOC files to convert them all at once',
      'doc_to_epub.preview': 'Preview',
      'doc_to_epub.selected_files': 'Selected Files',
      'doc_to_epub.convert_to_epub': 'Convert to EPUB',
      'doc_to_epub.convert_files_to_epub': 'Convert {{count}} Files to EPUB',
      'doc_to_epub.conversion_complete': 'Conversion Complete!',
      'doc_to_epub.batch_conversion_complete': 'Batch Conversion Complete!',
      'doc_to_epub.success_message': 'Your DOC file has been successfully converted to EPUB format.',
      'doc_to_epub.batch_success_message': '{{count}} of {{total}} files converted successfully.',
      'doc_to_epub.download_epub': 'Download EPUB File',
      'doc_to_epub.completed_in': 'Completed in {{time}}s',
      
      // Info sections
      'doc_to_epub.why_convert_title': 'Why Convert DOC to EPUB Online Free?',
      'doc_to_epub.about_doc_title': 'About DOC Format',
      'doc_to_epub.about_doc_text': 'DOC (.doc) is the legacy Microsoft Word document format used in Office versions before 2007. This binary file format stores:',
      'doc_to_epub.about_epub_title': 'About EPUB Format',
      'doc_to_epub.about_epub_text': 'EPUB (Electronic Publication) is the industry-standard eBook format that offers:',
      'doc_to_epub.why_choose_title': 'Why Choose Our Converter?',
      'doc_to_epub.sidebar_title': 'Why Choose Our Converter?',
      'doc_to_epub.perfect_for_title': 'Perfect For',
      
      // Features list
      'doc_to_epub.feature_free': '100% Free - No hidden costs',
      'doc_to_epub.feature_batch': 'Batch conversion support',
      'doc_to_epub.feature_compatibility': 'Universal e-reader compatibility',
      'doc_to_epub.feature_formatting': 'Preserves formatting & structure',
      'doc_to_epub.feature_secure': 'Fast, secure processing',
      'doc_to_epub.feature_no_reg': 'No registration required',
      
      // Use cases
      'doc_to_epub.use_kindle': 'Reading on Kindle devices',
      'doc_to_epub.use_kobo': 'Kobo and Nook e-readers',
      'doc_to_epub.use_apple': 'Apple Books on iPhone/iPad',
      'doc_to_epub.use_google': 'Google Play Books',
      'doc_to_epub.use_mobile': 'Mobile reading apps',
      'doc_to_epub.use_publishing': 'Publishing eBooks online',
      
      // SEO content
      'doc_to_epub.seo_intro': 'Converting Microsoft Word DOC files to EPUB eBook format is essential for modern reading experiences. While DOC files are excellent for document editing and collaboration, EPUB format provides the perfect reading experience across all devices - from smartphones to dedicated e-readers. Our free online converter makes it easy to transform your Word documents into professional eBooks that work seamlessly with Kindle, Kobo, Nook, and all other popular e-reading platforms.',
      'doc_to_epub.benefits_title': 'Key Benefits of EPUB Format',
      'doc_to_epub.benefit_universal_title': 'Universal E-reader Support',
      'doc_to_epub.benefit_universal_text': 'EPUB is the industry standard for eBooks, supported by all major e-reading devices and apps including Kindle, Kobo, Nook, Apple Books, and Google Play Books.',
      'doc_to_epub.benefit_reflow_title': 'Reflowable Text',
      'doc_to_epub.benefit_reflow_text': 'EPUB text automatically adapts to any screen size, allowing readers to adjust font size, style, and margins for optimal reading comfort on any device.',
      'doc_to_epub.benefit_publishing_title': 'Professional Publishing',
      'doc_to_epub.benefit_publishing_text': 'EPUB is the preferred format for self-publishing and digital book distribution, accepted by all major eBook retailers and libraries worldwide.',
      'doc_to_epub.benefit_media_title': 'Rich Media Support',
      'doc_to_epub.benefit_media_text': 'EPUB format supports embedded images, fonts, styles, and even multimedia content while maintaining small file sizes for easy sharing and storage.',
      'doc_to_epub.use_cases_title': 'Common Use Cases',
      'doc_to_epub.use_case_1_title': 'Self-Publishing Authors',
      'doc_to_epub.use_case_1_text': 'Convert your Word manuscript to EPUB format for publishing on Amazon Kindle Direct Publishing, Apple Books, Kobo Writing Life, and other self-publishing platforms.',
      'doc_to_epub.use_case_2_title': 'Educational Materials',
      'doc_to_epub.use_case_2_text': 'Transform educational documents, course materials, and study guides into student-friendly eBooks that can be read on any device, anywhere.',
      'doc_to_epub.use_case_3_title': 'Business Documentation',
      'doc_to_epub.use_case_3_text': 'Convert reports, manuals, and business documents to EPUB format for easy distribution to employees and clients who prefer reading on mobile devices.',
      'doc_to_epub.use_case_4_title': 'Personal Library Digitization',
      'doc_to_epub.use_case_4_text': 'Convert your personal writings, journals, and documents to EPUB format to create a portable digital library accessible across all your devices.',
      'doc_to_epub.ready_title': 'Ready to Convert Your DOC Files?',
      'doc_to_epub.ready_text': 'Use our free online DOC to EPUB converter to transform your Word documents into professional eBooks for any e-reader.',
      
      // AVRO to CSV
      'avro_to_csv.title': 'AVRO to CSV Converter',
      'avro_to_csv.meta_title': 'AVRO to CSV Converter - Convert Apache AVRO to CSV Format',
      'avro_to_csv.meta_description': 'Convert Apache AVRO binary files to CSV spreadsheet format. Extract big data into readable CSV files. Free online converter with batch processing.',
      'avro_to_csv.subtitle': 'Convert Apache AVRO files to CSV format quickly and easily. Perfect for data analysis and spreadsheet applications with schema preservation.',
      'avro_to_csv.why_convert_title': 'Why Convert AVRO to CSV?',
      'avro_to_csv.seo_intro': 'Converting Apache AVRO files to CSV format is essential for data analysis, reporting, and integration with spreadsheet applications. While AVRO is excellent for big data processing and schema evolution, CSV format provides universal compatibility with Excel, Google Sheets, and most data analysis tools, making it the standard format for data exchange and analysis workflows.',
      'avro_to_csv.sidebar_title': 'Why Choose Our Converter?',
      'avro_to_csv.feature_1': 'Preserve data structure and schema',
      'avro_to_csv.feature_2': 'Support for complex nested data',
      'avro_to_csv.feature_3': 'Batch conversion support',
      'avro_to_csv.feature_4': 'No file size limits',
      'avro_to_csv.feature_5': '100% free to use',
      'avro_to_csv.feature_6': 'High-performance processing',
      'avro_to_csv.perfect_for_title': 'Perfect For',
      'avro_to_csv.use_case_1': 'Data analysis and reporting',
      'avro_to_csv.use_case_2': 'Import into Excel or Google Sheets',
      'avro_to_csv.use_case_3': 'Database migration projects',
      'avro_to_csv.use_case_4': 'Data science workflows',
      'avro_to_csv.use_case_5': 'Business intelligence tools',
      'avro_to_csv.use_case_6': 'ETL pipeline development',
      'avro_to_csv.detailed_use_cases_title': 'Common Use Cases',
      'avro_to_csv.detailed_use_case_1_title': 'Data Analysis and Reporting',
      'avro_to_csv.detailed_use_case_1_text': 'Convert AVRO data to CSV format for comprehensive data analysis, statistical analysis, and business reporting using Excel or specialized analytics tools.',
      'avro_to_csv.detailed_use_case_2_title': 'Database Migration Projects',
      'avro_to_csv.detailed_use_case_2_text': 'Migrate data from AVRO-based systems to traditional databases by converting to CSV format for easy import and data transformation.',
      'avro_to_csv.detailed_use_case_3_title': 'Data Science Workflows',
      'avro_to_csv.detailed_use_case_3_text': 'Integrate AVRO data into data science workflows by converting it to CSV format for use with Python pandas, R, and machine learning frameworks.',
      'avro_to_csv.detailed_use_case_4_title': 'ETL Pipeline Development',
      'avro_to_csv.detailed_use_case_4_text': 'Develop ETL (Extract, Transform, Load) pipelines by converting AVRO data to CSV format for processing and loading into target systems.',
      'avro_to_csv.upload_single': 'Upload AVRO File',
      'avro_to_csv.upload_batch': 'Upload Multiple AVRO Files',
      'avro_to_csv.upload_text_single': 'Drag and drop your AVRO file here or click to browse',
      'avro_to_csv.upload_text_batch': 'Select multiple AVRO files to convert them all at once',
      'avro_to_csv.preview': 'Preview',
      'avro_to_csv.selected_files': 'Selected Files',
      'avro_to_csv.batch_size_warning': 'Batch size is getting close to the 100MB limit. Consider processing fewer files for better performance.',
      'avro_to_csv.convert_to_csv': 'Convert to CSV',
      'avro_to_csv.convert_files': 'Convert {{count}} Files',
      'avro_to_csv.conversion_complete': 'Conversion Complete!',
      'avro_to_csv.batch_conversion_complete': 'Batch Conversion Complete!',
      'avro_to_csv.success_message': 'Your AVRO file has been successfully converted to CSV format.',
      'avro_to_csv.batch_success_message': '{{count}} of {{total}} files converted successfully.',
      'avro_to_csv.download_csv': 'Download CSV File',
      'avro_to_csv.csv_settings': 'CSV Settings',
      'avro_to_csv.delimiter': 'Delimiter',
      'avro_to_csv.delimiter_comma': 'Comma (,)',
      'avro_to_csv.delimiter_semicolon': 'Semicolon (;)',
      'avro_to_csv.delimiter_tab': 'Tab',
      'avro_to_csv.delimiter_pipe': 'Pipe (|)',
      'avro_to_csv.text_encoding': 'Text Encoding',
      'avro_to_csv.encoding_utf8': 'UTF-8 (Recommended)',
      'avro_to_csv.encoding_ascii': 'ASCII',
      'avro_to_csv.encoding_utf16': 'UTF-16',
      'avro_to_csv.preserve_schema': 'Preserve AVRO schema',
      'avro_to_csv.include_headers': 'Include column headers',
      'avro_to_csv.benefits_title': 'Key Benefits of CSV Format',
      'avro_to_csv.benefit_compatibility_title': 'Universal Compatibility',
      'avro_to_csv.benefit_compatibility_text': 'CSV files can be opened by virtually any spreadsheet application, database system, or data analysis tool, ensuring maximum compatibility across platforms.',
      'avro_to_csv.benefit_analysis_title': 'Data Analysis Ready',
      'avro_to_csv.benefit_analysis_text': 'CSV format is the standard for data analysis workflows, making it easy to import into Excel, Python pandas, R, and other analytical tools.',
      'avro_to_csv.benefit_schema_title': 'Schema Preservation',
      'avro_to_csv.benefit_schema_text': 'Our converter preserves the AVRO schema structure, ensuring that complex nested data is properly flattened and organized in CSV format.',
      'avro_to_csv.benefit_bi_title': 'Business Intelligence Integration',
      'avro_to_csv.benefit_bi_text': 'CSV format integrates seamlessly with business intelligence tools, reporting systems, and data visualization platforms for comprehensive analytics.',
      'avro_to_csv.ready_title': 'Ready to Convert Your AVRO Files?',
      'avro_to_csv.ready_text': 'Use our free online AVRO to CSV converter to transform your big data files into analysis-ready CSV format.',
      'avro_to_csv.footer_title': 'MorphyIMG',
      'avro_to_csv.footer_description': 'Convert and view files online for free. Support for 50+ formats.',
      'avro_to_csv.footer_copyright': '© 2024 MorphyIMG',
      'avro_to_csv.footer_privacy': 'Privacy Policy',
      'avro_to_csv.footer_terms': 'Terms of Service'
    }
  },
  pl: {
    translation: {
      // Common
      'common.free': 'Darmowy',
      'common.upload': 'Prześlij',
      'common.download': 'Pobierz',
      'common.convert': 'Konwertuj',
      'common.converting': 'Konwertowanie...',
      'common.choose_files': 'Wybierz Pliki',
      'common.single_file': 'Pojedynczy Plik',
      'common.batch_convert': 'Konwersja Wsadowa',
      'common.back_to_home': 'Powrót do Strony Głównej',
      'common.back_to_converters': 'Powrót do Konwerterów',
      'common.start_converting': 'Rozpocznij Konwersję',
      'common.convert_more': 'Konwertuj Więcej Plików',
      'common.convert_another': 'Konwertuj Kolejny',
      
      // Validation messages
      'validation.single_file_limit': 'Limit pojedynczego pliku: {{size}} na plik.',
      'validation.batch_info': 'Konwersja wsadowa obsługuje do {{count}} plików, {{perFileSize}} na plik, {{totalSize}} łącznie.',
      'validation.total_size': 'Całkowity rozmiar: {{current}} z {{max}} dozwolonych.',
      'validation.file_too_large': 'Plik "{{filename}}" jest za duży ({{fileSize}}). Maksymalny dozwolony rozmiar to {{maxSize}}.',
      'validation.too_many_files': 'Wybrano za dużo plików ({{count}}). Maksymalna dozwolona liczba to {{max}}.',
      'validation.batch_too_large': 'Całkowity rozmiar wsadu {{totalSize}} przekracza limit {{maxSize}}.',
      
      // Features
      'features.lightning_fast': 'Błyskawicznie Szybki',
      'features.100_free': '100% Darmowy',
      'features.no_registration': 'Bez Rejestracji',
      'features.secure': '100% Bezpieczny',
      
      // DOC to EPUB
      'doc_to_epub.title': 'Darmowy Konwerter DOC na EPUB',
      'doc_to_epub.meta_title': 'Konwerter DOC na EPUB Za Darmo Online - Konwertuj Word na eBook Bez Rejestracji | MorphyIMG',
      'doc_to_epub.meta_description': 'Darmowy konwerter DOC na EPUB online ⚡ Konwertuj Microsoft Word do formatu eBook EPUB za darmo. Wsadowe przetwarzanie, bez rejestracji, 100% bezpieczne. Idealny dla Kindle, Kobo, Nook i wszystkich czytników e-booków. Nieograniczone konwersje!',
      'doc_to_epub.subtitle': 'Konwertuj pliki Microsoft Word DOC na format eBook EPUB online za darmo. Idealny dla Kindle, Kobo i wszystkich czytników e-booków. Bez rejestracji.',
      'doc_to_epub.heading': 'Konwertuj DOC na EPUB',
      'doc_to_epub.upload_single': 'Prześlij Plik DOC',
      'doc_to_epub.upload_batch': 'Prześlij Wiele Plików DOC',
      'doc_to_epub.upload_text_single': 'Przeciągnij i upuść plik DOC tutaj lub kliknij, aby przeglądać',
      'doc_to_epub.upload_text_batch': 'Wybierz wiele plików DOC, aby przekonwertować je wszystkie naraz',
      'doc_to_epub.preview': 'Podgląd',
      'doc_to_epub.selected_files': 'Wybrane Pliki',
      'doc_to_epub.convert_to_epub': 'Konwertuj na EPUB',
      'doc_to_epub.convert_files_to_epub': 'Konwertuj {{count}} Plików na EPUB',
      'doc_to_epub.conversion_complete': 'Konwersja Zakończona!',
      'doc_to_epub.batch_conversion_complete': 'Konwersja Wsadowa Zakończona!',
      'doc_to_epub.success_message': 'Twój plik DOC został pomyślnie przekonwertowany na format EPUB.',
      'doc_to_epub.batch_success_message': '{{count}} z {{total}} plików przekonwertowano pomyślnie.',
      'doc_to_epub.download_epub': 'Pobierz Plik EPUB',
      'doc_to_epub.completed_in': 'Ukończono w {{time}}s',
      
      // Info sections
      'doc_to_epub.why_convert_title': 'Dlaczego Konwertować DOC na EPUB Online?',
      'doc_to_epub.about_doc_title': 'O Formacie DOC',
      'doc_to_epub.about_doc_text': 'DOC (.doc) to starszy format dokumentów Microsoft Word używany w wersjach Office przed 2007. Ten binarny format pliku przechowuje:',
      'doc_to_epub.about_epub_title': 'O Formacie EPUB',
      'doc_to_epub.about_epub_text': 'EPUB (Electronic Publication) to branżowy standard formatu eBook, który oferuje:',
      'doc_to_epub.why_choose_title': 'Dlaczego Wybrać Nasz Konwerter?',
      'doc_to_epub.sidebar_title': 'Dlaczego Wybrać Nasz Konwerter?',
      'doc_to_epub.perfect_for_title': 'Idealny Dla',
      
      // Features list
      'doc_to_epub.feature_free': '100% Darmowy - Bez ukrytych kosztów',
      'doc_to_epub.feature_batch': 'Wsparcie konwersji wsadowej',
      'doc_to_epub.feature_compatibility': 'Uniwersalna kompatybilność z czytnikami',
      'doc_to_epub.feature_formatting': 'Zachowuje formatowanie i strukturę',
      'doc_to_epub.feature_secure': 'Szybkie, bezpieczne przetwarzanie',
      'doc_to_epub.feature_no_reg': 'Bez wymaganej rejestracji',
      
      // Use cases
      'doc_to_epub.use_kindle': 'Czytanie na urządzeniach Kindle',
      'doc_to_epub.use_kobo': 'Czytniki Kobo i Nook',
      'doc_to_epub.use_apple': 'Apple Books na iPhone/iPad',
      'doc_to_epub.use_google': 'Google Play Książki',
      'doc_to_epub.use_mobile': 'Aplikacje do czytania mobilnego',
      'doc_to_epub.use_publishing': 'Publikowanie e-booków online',
      
      // SEO content
      'doc_to_epub.seo_intro': 'Konwersja plików Microsoft Word DOC do formatu eBook EPUB jest niezbędna dla nowoczesnych doświadczeń czytelniczych. Podczas gdy pliki DOC są doskonałe do edycji i współpracy nad dokumentami, format EPUB zapewnia idealne doświadczenie czytania na wszystkich urządzeniach - od smartfonów po dedykowane czytniki e-booków. Nasz darmowy konwerter online ułatwia przekształcanie dokumentów Word w profesjonalne e-booki, które działają płynnie z Kindle, Kobo, Nook i wszystkimi innymi popularnymi platformami do czytania.',
      'doc_to_epub.benefits_title': 'Kluczowe Zalety Formatu EPUB',
      'doc_to_epub.benefit_universal_title': 'Uniwersalne Wsparcie Czytników',
      'doc_to_epub.benefit_universal_text': 'EPUB to branżowy standard dla e-booków, obsługiwany przez wszystkie główne urządzenia i aplikacje do czytania, w tym Kindle, Kobo, Nook, Apple Books i Google Play Książki.',
      'doc_to_epub.benefit_reflow_title': 'Dopasowujący się Tekst',
      'doc_to_epub.benefit_reflow_text': 'Tekst EPUB automatycznie dostosowuje się do dowolnego rozmiaru ekranu, umożliwiając czytelnikom dostosowanie rozmiaru czcionki, stylu i marginesów dla optymalnego komfortu czytania na dowolnym urządzeniu.',
      'doc_to_epub.benefit_publishing_title': 'Profesjonalne Publikowanie',
      'doc_to_epub.benefit_publishing_text': 'EPUB to preferowany format do samodzielnego publikowania i dystrybucji cyfrowych książek, akceptowany przez wszystkie główne sklepy z e-bookami i biblioteki na całym świecie.',
      'doc_to_epub.benefit_media_title': 'Wsparcie Multimediów',
      'doc_to_epub.benefit_media_text': 'Format EPUB obsługuje osadzone obrazy, czcionki, style, a nawet treści multimedialne, zachowując jednocześnie małe rozmiary plików dla łatwego udostępniania i przechowywania.',
      'doc_to_epub.use_cases_title': 'Typowe Przypadki Użycia',
      'doc_to_epub.use_case_1_title': 'Autorzy Samodzielnie Publikujący',
      'doc_to_epub.use_case_1_text': 'Konwertuj swój rękopis Word do formatu EPUB w celu publikacji na Amazon Kindle Direct Publishing, Apple Books, Kobo Writing Life i innych platformach samoobsługowych.',
      'doc_to_epub.use_case_2_title': 'Materiały Edukacyjne',
      'doc_to_epub.use_case_2_text': 'Przekształć dokumenty edukacyjne, materiały kursowe i przewodniki do nauki w przyjazne dla uczniów e-booki, które można czytać na dowolnym urządzeniu, w dowolnym miejscu.',
      'doc_to_epub.use_case_3_title': 'Dokumentacja Biznesowa',
      'doc_to_epub.use_case_3_text': 'Konwertuj raporty, podręczniki i dokumenty biznesowe do formatu EPUB w celu łatwej dystrybucji do pracowników i klientów, którzy wolą czytać na urządzeniach mobilnych.',
      'doc_to_epub.use_case_4_title': 'Digitalizacja Biblioteki Osobistej',
      'doc_to_epub.use_case_4_text': 'Konwertuj swoje osobiste pisma, dzienniki i dokumenty do formatu EPUB, aby stworzyć przenośną cyfrową bibliotekę dostępną na wszystkich twoich urządzeniach.',
      'doc_to_epub.ready_title': 'Gotowy do Konwersji Plików DOC?',
      'doc_to_epub.ready_text': 'Użyj naszego darmowego konwertera online DOC na EPUB, aby przekształcić dokumenty Word w profesjonalne e-booki dla każdego czytnika.',
      
      // AVRO to CSV
      'avro_to_csv.title': 'Konwerter AVRO na CSV',
      'avro_to_csv.meta_title': 'Konwerter AVRO na CSV Za Darmo - Apache AVRO do CSV Online Bez Rejestracji | MorphyIMG',
      'avro_to_csv.meta_description': 'Darmowy konwerter AVRO na CSV online ⚡ Konwertuj Apache AVRO do formatu CSV za darmo. Big Data do Excel, wsadowe przetwarzanie, zachowanie schematu. 100% bezpieczne, bez limitów. Idealne dla analizy danych i raportowania!',
      'avro_to_csv.subtitle': 'Konwertuj pliki Apache AVRO do formatu CSV szybko i łatwo. Idealny do analizy danych i aplikacji arkuszy kalkulacyjnych z zachowaniem schematu.',
      'avro_to_csv.why_convert_title': 'Dlaczego Konwertować AVRO na CSV?',
      'avro_to_csv.seo_intro': 'Konwersja plików Apache AVRO do formatu CSV jest niezbędna do analizy danych, raportowania i integracji z aplikacjami arkuszy kalkulacyjnych. Podczas gdy AVRO jest doskonały do przetwarzania big data i ewolucji schematu, format CSV zapewnia uniwersalną kompatybilność z Excel, Google Sheets i większością narzędzi do analizy danych, czyniąc go standardowym formatem wymiany i analizy danych.',
      'avro_to_csv.sidebar_title': 'Dlaczego Wybrać Nasz Konwerter?',
      'avro_to_csv.feature_1': 'Zachowuje strukturę danych i schemat',
      'avro_to_csv.feature_2': 'Wsparcie dla złożonych zagnieżdżonych danych',
      'avro_to_csv.feature_3': 'Wsparcie konwersji wsadowej',
      'avro_to_csv.feature_4': 'Bez limitów rozmiaru pliku',
      'avro_to_csv.feature_5': '100% darmowe użytkowanie',
      'avro_to_csv.feature_6': 'Wysokowydajne przetwarzanie',
      'avro_to_csv.perfect_for_title': 'Idealny Dla',
      'avro_to_csv.use_case_1': 'Analiza danych i raportowanie',
      'avro_to_csv.use_case_2': 'Import do Excel lub Google Sheets',
      'avro_to_csv.use_case_3': 'Projekty migracji baz danych',
      'avro_to_csv.use_case_4': 'Przepływy pracy data science',
      'avro_to_csv.use_case_5': 'Narzędzia business intelligence',
      'avro_to_csv.use_case_6': 'Rozwój pipeline ETL',
      'avro_to_csv.detailed_use_cases_title': 'Typowe Przypadki Użycia',
      'avro_to_csv.detailed_use_case_1_title': 'Analiza Danych i Raportowanie',
      'avro_to_csv.detailed_use_case_1_text': 'Konwertuj dane AVRO do formatu CSV w celu kompleksowej analizy danych, analizy statystycznej i raportowania biznesowego przy użyciu Excel lub wyspecjalizowanych narzędzi analitycznych.',
      'avro_to_csv.detailed_use_case_2_title': 'Projekty Migracji Baz Danych',
      'avro_to_csv.detailed_use_case_2_text': 'Migruj dane z systemów opartych na AVRO do tradycyjnych baz danych, konwertując je do formatu CSV w celu łatwego importu i transformacji danych.',
      'avro_to_csv.detailed_use_case_3_title': 'Przepływy Pracy Data Science',
      'avro_to_csv.detailed_use_case_3_text': 'Integruj dane AVRO z przepływami pracy data science, konwertując je do formatu CSV do użytku z Python pandas, R i frameworkami uczenia maszynowego.',
      'avro_to_csv.detailed_use_case_4_title': 'Rozwój Pipeline ETL',
      'avro_to_csv.detailed_use_case_4_text': 'Rozwijaj pipeline ETL (Extract, Transform, Load), konwertując dane AVRO do formatu CSV w celu przetwarzania i ładowania do systemów docelowych.',
      'avro_to_csv.upload_single': 'Prześlij Plik AVRO',
      'avro_to_csv.upload_batch': 'Prześlij Wiele Plików AVRO',
      'avro_to_csv.upload_text_single': 'Przeciągnij i upuść plik AVRO tutaj lub kliknij, aby przeglądać',
      'avro_to_csv.upload_text_batch': 'Wybierz wiele plików AVRO, aby przekonwertować je wszystkie naraz',
      'avro_to_csv.preview': 'Podgląd',
      'avro_to_csv.selected_files': 'Wybrane Pliki',
      'avro_to_csv.batch_size_warning': 'Rozmiar wsadu zbliża się do limitu 100MB. Rozważ przetworzenie mniejszej liczby plików dla lepszej wydajności.',
      'avro_to_csv.convert_to_csv': 'Konwertuj na CSV',
      'avro_to_csv.convert_files': 'Konwertuj {{count}} Plików',
      'avro_to_csv.conversion_complete': 'Konwersja Zakończona!',
      'avro_to_csv.batch_conversion_complete': 'Konwersja Wsadowa Zakończona!',
      'avro_to_csv.success_message': 'Twój plik AVRO został pomyślnie przekonwertowany na format CSV.',
      'avro_to_csv.batch_success_message': '{{count}} z {{total}} plików przekonwertowano pomyślnie.',
      'avro_to_csv.download_csv': 'Pobierz Plik CSV',
      'avro_to_csv.csv_settings': 'Ustawienia CSV',
      'avro_to_csv.delimiter': 'Separator',
      'avro_to_csv.delimiter_comma': 'Przecinek (,)',
      'avro_to_csv.delimiter_semicolon': 'Średnik (;)',
      'avro_to_csv.delimiter_tab': 'Tabulator',
      'avro_to_csv.delimiter_pipe': 'Kreska pionowa (|)',
      'avro_to_csv.text_encoding': 'Kodowanie Tekstu',
      'avro_to_csv.encoding_utf8': 'UTF-8 (Zalecane)',
      'avro_to_csv.encoding_ascii': 'ASCII',
      'avro_to_csv.encoding_utf16': 'UTF-16',
      'avro_to_csv.preserve_schema': 'Zachowaj schemat AVRO',
      'avro_to_csv.include_headers': 'Uwzględnij nagłówki kolumn',
      'avro_to_csv.benefits_title': 'Kluczowe Zalety Formatu CSV',
      'avro_to_csv.benefit_compatibility_title': 'Uniwersalna Kompatybilność',
      'avro_to_csv.benefit_compatibility_text': 'Pliki CSV mogą być otwierane przez praktycznie każdą aplikację arkusza kalkulacyjnego, system baz danych lub narzędzie analizy danych, zapewniając maksymalną kompatybilność na różnych platformach.',
      'avro_to_csv.benefit_analysis_title': 'Gotowy do Analizy Danych',
      'avro_to_csv.benefit_analysis_text': 'Format CSV jest standardem dla przepływów pracy analizy danych, ułatwiając import do Excel, Python pandas, R i innych narzędzi analitycznych.',
      'avro_to_csv.benefit_schema_title': 'Zachowanie Schematu',
      'avro_to_csv.benefit_schema_text': 'Nasz konwerter zachowuje strukturę schematu AVRO, zapewniając, że złożone zagnieżdżone dane są odpowiednio spłaszczane i organizowane w formacie CSV.',
      'avro_to_csv.benefit_bi_title': 'Integracja Business Intelligence',
      'avro_to_csv.benefit_bi_text': 'Format CSV płynnie integruje się z narzędziami business intelligence, systemami raportowania i platformami wizualizacji danych do kompleksowej analityki.',
      'avro_to_csv.ready_title': 'Gotowy do Konwersji Plików AVRO?',
      'avro_to_csv.ready_text': 'Użyj naszego darmowego konwertera online AVRO na CSV, aby przekształcić pliki big data w format CSV gotowy do analizy.',
      'avro_to_csv.footer_title': 'MorphyIMG',
      'avro_to_csv.footer_description': 'Konwertuj i przeglądaj pliki online za darmo. Wsparcie dla ponad 50 formatów.',
      'avro_to_csv.footer_copyright': '© 2024 MorphyIMG',
      'avro_to_csv.footer_privacy': 'Polityka Prywatności',
      'avro_to_csv.footer_terms': 'Warunki Usługi'
    }
  },
  de: {
    translation: {
      // Common
      'common.free': 'Kostenlos',
      'common.upload': 'Hochladen',
      'common.download': 'Herunterladen',
      'common.convert': 'Konvertieren',
      'common.converting': 'Konvertierung läuft...',
      'common.choose_files': 'Dateien auswählen',
      'common.single_file': 'Einzelne Datei',
      'common.batch_convert': 'Stapelkonvertierung',
      'common.back_to_home': 'Zurück zur Startseite',
      'common.back_to_converters': 'Zurück zu Konvertern',
      'common.start_converting': 'Jetzt konvertieren',
      'common.convert_more': 'Weitere Dateien konvertieren',
      'common.convert_another': 'Weitere konvertieren',
      
      // Validation messages
      'validation.single_file_limit': 'Einzeldateibeschränkung: {{size}} pro Datei.',
      'validation.batch_info': 'Stapelkonvertierung unterstützt bis zu {{count}} Dateien, {{perFileSize}} pro Datei, {{totalSize}} insgesamt.',
      'validation.total_size': 'Gesamtgröße: {{current}} von {{max}} erlaubt.',
      'validation.file_too_large': 'Datei "{{filename}}" ist zu groß ({{fileSize}}). Maximal erlaubte Größe ist {{maxSize}}.',
      'validation.too_many_files': 'Zu viele Dateien ausgewählt ({{count}}). Maximal erlaubt sind {{max}}.',
      'validation.batch_too_large': 'Gesamtgröße des Stapels {{totalSize}} überschreitet das Limit von {{maxSize}}.',
      
      // Features
      'features.lightning_fast': 'Blitzschnell',
      'features.100_free': '100% Kostenlos',
      'features.no_registration': 'Keine Registrierung',
      'features.secure': '100% Sicher',
      
      // DOC to EPUB
      'doc_to_epub.title': 'Kostenloser DOC zu EPUB Konverter',
      'doc_to_epub.meta_title': 'DOC zu EPUB Konverter Kostenlos Online - Word in eBook Umwandeln Ohne Anmeldung | MorphyIMG',
      'doc_to_epub.meta_description': 'Kostenloser DOC zu EPUB Konverter online ⚡ Konvertieren Sie Microsoft Word in EPUB eBook-Format gratis. Stapelverarbeitung, keine Registrierung, 100% sicher. Perfekt für Kindle, Kobo, Nook und alle E-Reader. Unbegrenzte Konvertierungen!',
      'doc_to_epub.subtitle': 'Konvertieren Sie Microsoft Word DOC-Dateien kostenlos online in das EPUB eBook-Format. Perfekt für Kindle, Kobo und alle E-Reader. Keine Registrierung erforderlich.',
      'doc_to_epub.heading': 'DOC zu EPUB konvertieren',
      'doc_to_epub.upload_single': 'DOC-Datei hochladen',
      'doc_to_epub.upload_batch': 'Mehrere DOC-Dateien hochladen',
      'doc_to_epub.upload_text_single': 'Ziehen Sie Ihre DOC-Datei hierher oder klicken Sie zum Durchsuchen',
      'doc_to_epub.upload_text_batch': 'Wählen Sie mehrere DOC-Dateien aus, um sie alle auf einmal zu konvertieren',
      'doc_to_epub.preview': 'Vorschau',
      'doc_to_epub.selected_files': 'Ausgewählte Dateien',
      'doc_to_epub.convert_to_epub': 'In EPUB konvertieren',
      'doc_to_epub.convert_files_to_epub': '{{count}} Dateien in EPUB konvertieren',
      'doc_to_epub.conversion_complete': 'Konvertierung abgeschlossen!',
      'doc_to_epub.batch_conversion_complete': 'Stapelkonvertierung abgeschlossen!',
      'doc_to_epub.success_message': 'Ihre DOC-Datei wurde erfolgreich in das EPUB-Format konvertiert.',
      'doc_to_epub.batch_success_message': '{{count}} von {{total}} Dateien erfolgreich konvertiert.',
      'doc_to_epub.download_epub': 'EPUB-Datei herunterladen',
      'doc_to_epub.completed_in': 'Abgeschlossen in {{time}}s',
      
      // Info sections
      'doc_to_epub.why_convert_title': 'Warum DOC zu EPUB online kostenlos konvertieren?',
      'doc_to_epub.about_doc_title': 'Über das DOC-Format',
      'doc_to_epub.about_doc_text': 'DOC (.doc) ist das ältere Microsoft Word-Dokumentenformat, das in Office-Versionen vor 2007 verwendet wurde. Dieses binäre Dateiformat speichert:',
      'doc_to_epub.about_epub_title': 'Über das EPUB-Format',
      'doc_to_epub.about_epub_text': 'EPUB (Electronic Publication) ist das branchenübliche eBook-Format, das bietet:',
      'doc_to_epub.why_choose_title': 'Warum unseren Konverter wählen?',
      'doc_to_epub.sidebar_title': 'Warum unseren Konverter wählen?',
      'doc_to_epub.perfect_for_title': 'Perfekt für',
      
      // Features list
      'doc_to_epub.feature_free': '100% Kostenlos - Keine versteckten Kosten',
      'doc_to_epub.feature_batch': 'Stapelkonvertierung unterstützt',
      'doc_to_epub.feature_compatibility': 'Universelle E-Reader-Kompatibilität',
      'doc_to_epub.feature_formatting': 'Behält Formatierung & Struktur bei',
      'doc_to_epub.feature_secure': 'Schnelle, sichere Verarbeitung',
      'doc_to_epub.feature_no_reg': 'Keine Registrierung erforderlich',
      
      // Use cases
      'doc_to_epub.use_kindle': 'Lesen auf Kindle-Geräten',
      'doc_to_epub.use_kobo': 'Kobo und Nook E-Reader',
      'doc_to_epub.use_apple': 'Apple Books auf iPhone/iPad',
      'doc_to_epub.use_google': 'Google Play Bücher',
      'doc_to_epub.use_mobile': 'Mobile Lese-Apps',
      'doc_to_epub.use_publishing': 'eBooks online veröffentlichen',
      
      // SEO content
      'doc_to_epub.seo_intro': 'Das Konvertieren von Microsoft Word DOC-Dateien in das EPUB eBook-Format ist für moderne Leseerlebnisse unerlässlich. Während DOC-Dateien hervorragend für die Dokumentenbearbeitung und Zusammenarbeit sind, bietet das EPUB-Format das perfekte Leseerlebnis auf allen Geräten - von Smartphones bis hin zu dedizierten E-Readern. Unser kostenloser Online-Konverter macht es einfach, Ihre Word-Dokumente in professionelle eBooks zu verwandeln, die nahtlos mit Kindle, Kobo, Nook und allen anderen beliebten E-Reading-Plattformen funktionieren.',
      'doc_to_epub.benefits_title': 'Hauptvorteile des EPUB-Formats',
      'doc_to_epub.benefit_universal_title': 'Universelle E-Reader-Unterstützung',
      'doc_to_epub.benefit_universal_text': 'EPUB ist der Industriestandard für eBooks, der von allen wichtigen E-Reading-Geräten und -Apps unterstützt wird, einschließlich Kindle, Kobo, Nook, Apple Books und Google Play Bücher.',
      'doc_to_epub.benefit_reflow_title': 'Anpassbarer Text',
      'doc_to_epub.benefit_reflow_text': 'EPUB-Text passt sich automatisch an jede Bildschirmgröße an und ermöglicht es Lesern, Schriftgröße, Stil und Ränder für optimalen Lesekomfort auf jedem Gerät anzupassen.',
      'doc_to_epub.benefit_publishing_title': 'Professionelles Publizieren',
      'doc_to_epub.benefit_publishing_text': 'EPUB ist das bevorzugte Format für Selbstveröffentlichung und digitale Buchverteilung, akzeptiert von allen großen eBook-Händlern und Bibliotheken weltweit.',
      'doc_to_epub.benefit_media_title': 'Rich-Media-Unterstützung',
      'doc_to_epub.benefit_media_text': 'Das EPUB-Format unterstützt eingebettete Bilder, Schriftarten, Stile und sogar Multimedia-Inhalte bei gleichzeitiger Beibehaltung kleiner Dateigrößen für einfaches Teilen und Speichern.',
      'doc_to_epub.use_cases_title': 'Häufige Anwendungsfälle',
      'doc_to_epub.use_case_1_title': 'Self-Publishing-Autoren',
      'doc_to_epub.use_case_1_text': 'Konvertieren Sie Ihr Word-Manuskript in das EPUB-Format für die Veröffentlichung auf Amazon Kindle Direct Publishing, Apple Books, Kobo Writing Life und anderen Self-Publishing-Plattformen.',
      'doc_to_epub.use_case_2_title': 'Bildungsmaterialien',
      'doc_to_epub.use_case_2_text': 'Verwandeln Sie Bildungsdokumente, Kursmaterialien und Lernleitfäden in schülerfreundliche eBooks, die auf jedem Gerät und überall gelesen werden können.',
      'doc_to_epub.use_case_3_title': 'Geschäftsdokumentation',
      'doc_to_epub.use_case_3_text': 'Konvertieren Sie Berichte, Handbücher und Geschäftsdokumente in das EPUB-Format für eine einfache Verteilung an Mitarbeiter und Kunden, die das Lesen auf mobilen Geräten bevorzugen.',
      'doc_to_epub.use_case_4_title': 'Digitalisierung der persönlichen Bibliothek',
      'doc_to_epub.use_case_4_text': 'Konvertieren Sie Ihre persönlichen Schriften, Tagebücher und Dokumente in das EPUB-Format, um eine tragbare digitale Bibliothek zu erstellen, die auf allen Ihren Geräten zugänglich ist.',
      'doc_to_epub.ready_title': 'Bereit, Ihre DOC-Dateien zu konvertieren?',
      'doc_to_epub.ready_text': 'Verwenden Sie unseren kostenlosen Online-DOC-zu-EPUB-Konverter, um Ihre Word-Dokumente in professionelle eBooks für jeden E-Reader zu verwandeln.',
      
      // AVRO to CSV
      'avro_to_csv.title': 'AVRO zu CSV Konverter',
      'avro_to_csv.meta_title': 'AVRO zu CSV Konverter Kostenlos - Apache AVRO in CSV Online Ohne Anmeldung | MorphyIMG',
      'avro_to_csv.meta_description': 'Kostenloser AVRO zu CSV Konverter online ⚡ Konvertieren Sie Apache AVRO in CSV-Format gratis. Big Data nach Excel, Stapelverarbeitung, Schema-Erhaltung. 100% sicher, keine Limits. Perfekt für Datenanalyse und Reporting!',
      'avro_to_csv.subtitle': 'Konvertieren Sie Apache AVRO-Dateien schnell und einfach in das CSV-Format. Perfekt für Datenanalyse und Tabellenkalkulationsanwendungen mit Schemaerhaltung.',
      'avro_to_csv.why_convert_title': 'Warum AVRO zu CSV konvertieren?',
      'avro_to_csv.seo_intro': 'Die Konvertierung von Apache AVRO-Dateien in das CSV-Format ist für Datenanalyse, Berichterstattung und Integration mit Tabellenkalkulationsanwendungen unerlässlich. Während AVRO hervorragend für Big-Data-Verarbeitung und Schema-Evolution ist, bietet das CSV-Format universelle Kompatibilität mit Excel, Google Sheets und den meisten Datenanalyse-Tools, was es zum Standardformat für Datenaustausch und Analyse-Workflows macht.',
      'avro_to_csv.sidebar_title': 'Warum unseren Konverter wählen?',
      'avro_to_csv.feature_1': 'Datenstruktur und Schema bewahren',
      'avro_to_csv.feature_2': 'Unterstützung für komplexe verschachtelte Daten',
      'avro_to_csv.feature_3': 'Stapelkonvertierung unterstützt',
      'avro_to_csv.feature_4': 'Keine Dateigrößenbeschränkungen',
      'avro_to_csv.feature_5': '100% kostenlos zu verwenden',
      'avro_to_csv.feature_6': 'Hochleistungsverarbeitung',
      'avro_to_csv.perfect_for_title': 'Perfekt für',
      'avro_to_csv.use_case_1': 'Datenanalyse und Berichterstattung',
      'avro_to_csv.use_case_2': 'Import in Excel oder Google Sheets',
      'avro_to_csv.use_case_3': 'Datenbankmigrationsprojekte',
      'avro_to_csv.use_case_4': 'Data-Science-Workflows',
      'avro_to_csv.use_case_5': 'Business-Intelligence-Tools',
      'avro_to_csv.use_case_6': 'ETL-Pipeline-Entwicklung',
      'avro_to_csv.detailed_use_cases_title': 'Häufige Anwendungsfälle',
      'avro_to_csv.detailed_use_case_1_title': 'Datenanalyse und Berichterstattung',
      'avro_to_csv.detailed_use_case_1_text': 'Konvertieren Sie AVRO-Daten in das CSV-Format für umfassende Datenanalyse, statistische Analysen und Geschäftsberichte mit Excel oder spezialisierten Analysetools.',
      'avro_to_csv.detailed_use_case_2_title': 'Datenbankmigrationsprojekte',
      'avro_to_csv.detailed_use_case_2_text': 'Migrieren Sie Daten von AVRO-basierten Systemen zu traditionellen Datenbanken, indem Sie sie in das CSV-Format konvertieren, um einen einfachen Import und Datentransformation zu ermöglichen.',
      'avro_to_csv.detailed_use_case_3_title': 'Data-Science-Workflows',
      'avro_to_csv.detailed_use_case_3_text': 'Integrieren Sie AVRO-Daten in Data-Science-Workflows, indem Sie sie in das CSV-Format konvertieren, um sie mit Python pandas, R und Machine-Learning-Frameworks zu verwenden.',
      'avro_to_csv.detailed_use_case_4_title': 'ETL-Pipeline-Entwicklung',
      'avro_to_csv.detailed_use_case_4_text': 'Entwickeln Sie ETL-Pipelines (Extract, Transform, Load), indem Sie AVRO-Daten in das CSV-Format konvertieren, um sie zu verarbeiten und in Zielsysteme zu laden.',
      'avro_to_csv.upload_single': 'AVRO-Datei hochladen',
      'avro_to_csv.upload_batch': 'Mehrere AVRO-Dateien hochladen',
      'avro_to_csv.upload_text_single': 'Ziehen Sie Ihre AVRO-Datei hierher oder klicken Sie zum Durchsuchen',
      'avro_to_csv.upload_text_batch': 'Wählen Sie mehrere AVRO-Dateien aus, um sie alle auf einmal zu konvertieren',
      'avro_to_csv.preview': 'Vorschau',
      'avro_to_csv.selected_files': 'Ausgewählte Dateien',
      'avro_to_csv.batch_size_warning': 'Die Stapelgröße nähert sich dem 100MB-Limit. Erwägen Sie die Verarbeitung von weniger Dateien für bessere Leistung.',
      'avro_to_csv.convert_to_csv': 'In CSV konvertieren',
      'avro_to_csv.convert_files': '{{count}} Dateien konvertieren',
      'avro_to_csv.conversion_complete': 'Konvertierung abgeschlossen!',
      'avro_to_csv.batch_conversion_complete': 'Stapelkonvertierung abgeschlossen!',
      'avro_to_csv.success_message': 'Ihre AVRO-Datei wurde erfolgreich in das CSV-Format konvertiert.',
      'avro_to_csv.batch_success_message': '{{count}} von {{total}} Dateien erfolgreich konvertiert.',
      'avro_to_csv.download_csv': 'CSV-Datei herunterladen',
      'avro_to_csv.csv_settings': 'CSV-Einstellungen',
      'avro_to_csv.delimiter': 'Trennzeichen',
      'avro_to_csv.delimiter_comma': 'Komma (,)',
      'avro_to_csv.delimiter_semicolon': 'Semikolon (;)',
      'avro_to_csv.delimiter_tab': 'Tabulator',
      'avro_to_csv.delimiter_pipe': 'Vertikaler Strich (|)',
      'avro_to_csv.text_encoding': 'Textkodierung',
      'avro_to_csv.encoding_utf8': 'UTF-8 (Empfohlen)',
      'avro_to_csv.encoding_ascii': 'ASCII',
      'avro_to_csv.encoding_utf16': 'UTF-16',
      'avro_to_csv.preserve_schema': 'AVRO-Schema beibehalten',
      'avro_to_csv.include_headers': 'Spaltenüberschriften einbeziehen',
      'avro_to_csv.benefits_title': 'Hauptvorteile des CSV-Formats',
      'avro_to_csv.benefit_compatibility_title': 'Universelle Kompatibilität',
      'avro_to_csv.benefit_compatibility_text': 'CSV-Dateien können von praktisch jeder Tabellenkalkulationsanwendung, jedem Datenbanksystem oder Datenanalyse-Tool geöffnet werden, was maximale Kompatibilität über Plattformen hinweg gewährleistet.',
      'avro_to_csv.benefit_analysis_title': 'Bereit für Datenanalyse',
      'avro_to_csv.benefit_analysis_text': 'Das CSV-Format ist der Standard für Datenanalyse-Workflows und erleichtert den Import in Excel, Python pandas, R und andere Analysetools.',
      'avro_to_csv.benefit_schema_title': 'Schema-Erhaltung',
      'avro_to_csv.benefit_schema_text': 'Unser Konverter bewahrt die AVRO-Schemastruktur und stellt sicher, dass komplexe verschachtelte Daten ordnungsgemäß abgeflacht und im CSV-Format organisiert werden.',
      'avro_to_csv.benefit_bi_title': 'Business-Intelligence-Integration',
      'avro_to_csv.benefit_bi_text': 'Das CSV-Format lässt sich nahtlos in Business-Intelligence-Tools, Berichtssysteme und Datenvisualisierungsplattformen für umfassende Analysen integrieren.',
      'avro_to_csv.ready_title': 'Bereit, Ihre AVRO-Dateien zu konvertieren?',
      'avro_to_csv.ready_text': 'Verwenden Sie unseren kostenlosen Online-AVRO-zu-CSV-Konverter, um Ihre Big-Data-Dateien in analysefertige CSV-Formate zu verwandeln.',
      'avro_to_csv.footer_title': 'MorphyIMG',
      'avro_to_csv.footer_description': 'Konvertieren und betrachten Sie Dateien kostenlos online. Unterstützung für über 50 Formate.',
      'avro_to_csv.footer_copyright': '© 2024 MorphyIMG',
      'avro_to_csv.footer_privacy': 'Datenschutzrichtlinie',
      'avro_to_csv.footer_terms': 'Nutzungsbedingungen'
    }
  }
};

// Custom language detector from URL
const urlLanguageDetector = {
  name: 'urlPath',
  lookup() {
    const path = window.location.pathname;
    // Check for language prefix: /pl/, /de/
    // Otherwise use English (default, no prefix)
    if (path.startsWith('/pl/') || path === '/pl') return 'pl';
    if (path.startsWith('/de/') || path === '/de') return 'de';
    return 'en';
  },
  cacheUserLanguage(lng: string) {
    localStorage.setItem('i18nextLng', lng);
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pl', 'de'],
    lng: urlLanguageDetector.lookup(), // Set initial language from URL
    interpolation: {
      escapeValue: false
    }
  });

// Update language on URL change
window.addEventListener('popstate', () => {
  const newLang = urlLanguageDetector.lookup();
  if (i18n.language !== newLang) {
    i18n.changeLanguage(newLang);
  }
});

export default i18n;

// Helper function to get current language from URL
export const getLanguageFromUrl = (): string => {
  const path = window.location.pathname;
  if (path.startsWith('/pl/') || path === '/pl') return 'pl';
  if (path.startsWith('/de/') || path === '/de') return 'de';
  return 'en';
};

// Helper function to toggle language URL (English = no prefix, other languages = /lang/ prefix)
export const getLocalizedUrl = (currentPath: string, targetLanguage: string): string => {
  // Remove any language prefix if it exists
  const cleanPath = currentPath
    .replace(/^\/pl\//, '/')
    .replace(/^\/de\//, '/')
    .replace(/^\/pl$/, '/')
    .replace(/^\/de$/, '/');
  
  // Add language prefix only for non-English languages
  if (targetLanguage === 'pl') {
    return `/pl${cleanPath}`;
  }
  if (targetLanguage === 'de') {
    return `/de${cleanPath}`;
  }
  
  // English = no prefix
  return cleanPath;
};

