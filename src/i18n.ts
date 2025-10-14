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
      'doc_to_epub.ready_title': 'Ready to Convert Your DOC Files?',
      'doc_to_epub.ready_text': 'Use our free online DOC to EPUB converter to transform your Word documents into professional eBooks for any e-reader.'
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
      
      // Features
      'features.lightning_fast': 'Błyskawicznie Szybki',
      'features.100_free': '100% Darmowy',
      'features.no_registration': 'Bez Rejestracji',
      'features.secure': '100% Bezpieczny',
      
      // DOC to EPUB
      'doc_to_epub.title': 'Darmowy Konwerter DOC na EPUB',
      'doc_to_epub.meta_title': 'Darmowy Konwerter DOC na EPUB Online - Konwertuj Dokumenty Word na eBook | MorphyIMG',
      'doc_to_epub.meta_description': 'Konwertuj pliki Microsoft Word DOC na format eBook EPUB online za darmo. Szybki, bezpieczny konwerter DOC na EPUB z przetwarzaniem wsadowym. Idealny dla Kindle, Kobo i wszystkich czytników.',
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
      'doc_to_epub.why_convert_title': 'Dlaczego Konwertować DOC na EPUB Online Za Darmo?',
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
      'doc_to_epub.ready_title': 'Gotowy do Konwersji Plików DOC?',
      'doc_to_epub.ready_text': 'Użyj naszego darmowego konwertera online DOC na EPUB, aby przekształcić dokumenty Word w profesjonalne e-booki dla każdego czytnika.'
    }
  }
};

// Custom language detector from URL
const urlLanguageDetector = {
  name: 'urlPath',
  lookup() {
    const path = window.location.pathname;
    // If URL starts with /pl/, use Polish
    // Otherwise use English (default, no prefix)
    return path.startsWith('/pl/') || path === '/pl' ? 'pl' : 'en';
  },
  cacheUserLanguage(lng: string) {
    localStorage.setItem('i18nextLng', lng);
  }
};

i18n
  .use({
    type: 'languageDetector',
    ...urlLanguageDetector
  } as any)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pl'],
    detection: {
      order: ['urlPath', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

// Helper function to get current language from URL
export const getLanguageFromUrl = (): string => {
  const path = window.location.pathname;
  return path.startsWith('/pl/') || path === '/pl' ? 'pl' : 'en';
};

// Helper function to toggle language URL (English = no prefix, Polish = /pl/)
export const getLocalizedUrl = (currentPath: string, targetLanguage: string): string => {
  // Remove /pl/ prefix if it exists
  const cleanPath = currentPath.replace(/^\/pl\//, '/').replace(/^\/pl$/, '/');
  
  // Add /pl/ prefix only for Polish
  if (targetLanguage === 'pl') {
    return `/pl${cleanPath}`;
  }
  
  // English = no prefix
  return cleanPath;
};

