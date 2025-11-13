import i18n from '../i18n';

interface SamplePageTranslations {
  sample_page: {
    common: {
      back_button: string;
      file_size: string;
      download: string;
      download_now: string;
      download_started: string;
      download_ready_in: string;
      about_title: string;
      about_items: string[];
      features: {
        multiple_sizes: {
          title: string;
          description: string;
        };
        free_download: {
          title: string;
          description: string;
        };
        safe_tested: {
          title: string;
          description: string;
        };
      };
    };
    formats: {
      docx: {
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
        about_description: string;
      };
      doc: {
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
        about_description: string;
      };
      pdf: {
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
        about_description: string;
      };
      odp: {
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
        about_description: string;
      };
      rtf: {
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
        about_description: string;
      };
      epub: {
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
        about_description: string;
      };
      'invoice-pdf': {
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
        about_description: string;
      };
      mobi: {
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
        about_description: string;
      };
      csv: {
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
        about_description: string;
      };
      xls: {
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
        about_description: string;
      };
      xlsx: {
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
        about_description: string;
      };
      xml: {
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
        about_description: string;
      };
      ods: {
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
        about_description: string;
      };
      'ansible-yml': {
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
        about_description: string;
      };
      'api-response-json': {
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
        about_description: string;
      };
    };
  };
}

const samplePagesResources: Record<string, SamplePageTranslations> = {
  en: {
    sample_page: {
      common: {
        back_button: 'Back to Home',
        file_size: 'File size:',
        download: 'Download',
        download_now: 'Download Now',
        download_started: 'Download started',
        download_ready_in: 'Download ready in {{countdown}}s...',
        about_title: 'About These Sample Files',
        about_items: [
          'These are test files in various sizes for testing purposes',
          'Files are hosted securely and available for free download',
          'Perfect for testing document conversion tools and file processors',
          'No registration or account required'
        ],
        features: {
          multiple_sizes: {
            title: 'Multiple Sizes',
            description: 'Test files ranging from 100 KB to 100 MB'
          },
          free_download: {
            title: 'Free Download',
            description: 'No registration or payment required'
          },
          safe_tested: {
            title: 'Safe & Tested',
            description: 'All files are safe and tested for compatibility'
          }
        }
      },
      formats: {
        docx: {
          meta: {
            title: 'Free DOCX Sample Files Download - Test Files | MorphyHub',
            description: 'Download free DOCX sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion and processing tools.',
            keywords: 'DOCX sample files, test DOCX files, download DOCX samples, free DOCX test files, document samples, Microsoft Word samples'
          },
          schema: {
            name: 'Free DOCX Sample Files - Download Test Files',
            description: 'Download free DOCX sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.'
          },
          hero: {
            title: 'DOCX Sample Files',
            description: 'Download free DOCX sample files for testing. Multiple file sizes available to test your document conversion and processing tools.'
          },
          about_description: 'These are test DOCX files in various sizes for testing purposes'
        },
        doc: {
          meta: {
            title: 'Free DOC Sample Files Download - Test Files | MorphyHub',
            description: 'Download free DOC sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion and processing tools.',
            keywords: 'DOC sample files, test DOC files, download DOC samples, free DOC test files, document samples, Microsoft Word DOC samples'
          },
          schema: {
            name: 'Free DOC Sample Files - Download Test Files',
            description: 'Download free DOC sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.'
          },
          hero: {
            title: 'DOC Sample Files',
            description: 'Download free DOC sample files for testing. Multiple file sizes available to test your document conversion and processing tools.'
          },
          about_description: 'These are test DOC files in various sizes for testing purposes'
        },
        pdf: {
          meta: {
            title: 'Free PDF Sample Files Download - Test Files | MorphyHub',
            description: 'Download free PDF sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion and processing tools.',
            keywords: 'PDF sample files, test PDF files, download PDF samples, free PDF test files, document samples, PDF samples'
          },
          schema: {
            name: 'Free PDF Sample Files - Download Test Files',
            description: 'Download free PDF sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.'
          },
          hero: {
            title: 'PDF Sample Files',
            description: 'Download free PDF sample files for testing. Multiple file sizes available to test your document conversion and processing tools.'
          },
          about_description: 'These are test PDF files in various sizes for testing purposes'
        },
        odp: {
          meta: {
            title: 'Free ODP Sample Files Download - Test OpenDocument Presentation Files | MorphyHub',
            description: 'Download free ODP sample OpenDocument presentation files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing presentation conversion, viewing, and OpenDocument format processing tools.',
            keywords: 'ODP sample files, test ODP files, download ODP samples, free ODP test files, OpenDocument presentation samples, presentation file samples, ODP conversion test files, .odp test files, LibreOffice Impress samples, presentation format samples'
          },
          schema: {
            name: 'Free ODP Sample Files - Download Test Presentation Files',
            description: 'Download free ODP sample presentation files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing presentation conversion, viewing, and OpenDocument format processing tools.'
          },
          hero: {
            title: 'ODP Sample Files',
            description: 'Download free ODP sample OpenDocument presentation files for testing. Multiple file sizes available to test your presentation conversion and viewing tools.'
          },
          about_description: 'These are test ODP files in various sizes for testing purposes'
        },
        rtf: {
          meta: {
            title: 'Free RTF Sample Files Download - Test Rich Text Format Files | MorphyHub',
            description: 'Download free RTF sample Rich Text Format document files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion, viewing, and RTF format processing tools.',
            keywords: 'RTF sample files, test RTF files, download RTF samples, free RTF test files, Rich Text Format samples, document samples, RTF conversion test files, .rtf test files'
          },
          schema: {
            name: 'Free RTF Sample Files - Download Test Rich Text Format Files',
            description: 'Download free RTF sample Rich Text Format document files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion, viewing, and RTF format processing tools.'
          },
          hero: {
            title: 'RTF Sample Files',
            description: 'Download free RTF sample Rich Text Format document files for testing. Multiple file sizes available to test your document conversion and viewing tools.'
          },
          about_description: 'These are test RTF files in various sizes for testing purposes'
        },
        epub: {
          meta: {
            title: 'Free EPUB Sample Files Download - Test eBook Files | MorphyHub',
            description: 'Download free EPUB sample eBook files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing eBook readers, EPUB conversion, and digital publishing tools.',
            keywords: 'EPUB sample files, test EPUB files, download EPUB samples, free EPUB test files, eBook samples, EPUB conversion test files, .epub test files, digital publishing samples'
          },
          schema: {
            name: 'Free EPUB Sample Files - Download Test eBook Files',
            description: 'Download free EPUB sample eBook files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing eBook readers, EPUB conversion, and digital publishing tools.'
          },
          hero: {
            title: 'EPUB Sample Files',
            description: 'Download free EPUB sample eBook files for testing. Multiple file sizes available to test your eBook readers, EPUB conversion, and digital publishing tools.'
          },
          about_description: 'These are test EPUB files in various sizes for testing purposes'
        },
        'invoice-pdf': {
          meta: {
            title: 'Free Invoice PDF Sample Files Download - Test Invoice Document Files | MorphyHub',
            description: 'Download free Invoice PDF sample invoice document files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing PDF invoice processing, invoice parsing, and document management tools.',
            keywords: 'Invoice PDF sample files, test Invoice PDF files, download Invoice PDF samples, free Invoice PDF test files, invoice document samples, PDF invoice samples, invoice processing test files'
          },
          schema: {
            name: 'Free Invoice PDF Sample Files - Download Test Invoice Document Files',
            description: 'Download free Invoice PDF sample invoice document files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing PDF invoice processing, invoice parsing, and document management tools.'
          },
          hero: {
            title: 'Invoice PDF Sample Files',
            description: 'Download free Invoice PDF sample invoice document files for testing. Multiple file sizes available to test your PDF invoice processing, invoice parsing, and document management tools.'
          },
          about_description: 'These are test Invoice PDF files in various sizes for testing purposes'
        },
        mobi: {
          meta: {
            title: 'Free MOBI Sample Files Download - Test MOBI eBook Files | MorphyHub',
            description: 'Download free MOBI sample MOBI eBook files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing MOBI eBook conversion, MOBI reading, and eBook processing tools.',
            keywords: 'MOBI sample files, test MOBI files, download MOBI samples, free MOBI test files, MOBI eBook samples, MOBI conversion test files, .mobi test files, eBook samples'
          },
          schema: {
            name: 'Free MOBI Sample Files - Download Test MOBI eBook Files',
            description: 'Download free MOBI sample MOBI eBook files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing MOBI eBook conversion, MOBI reading, and eBook processing tools.'
          },
          hero: {
            title: 'MOBI Sample Files',
            description: 'Download free MOBI sample MOBI eBook files for testing. Multiple file sizes available to test your MOBI eBook conversion, MOBI reading, and eBook processing tools.'
          },
          about_description: 'These are test MOBI files in various sizes for testing purposes'
        },
        csv: {
          meta: {
            title: 'Free CSV Sample Files Download - Test Data Files | MorphyHub',
            description: 'Download free CSV sample data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CSV conversion, data processing, and spreadsheet tools.',
            keywords: 'CSV sample files, test CSV files, download CSV samples, free CSV test files, data file samples, comma separated values samples, spreadsheet data samples, CSV conversion test files'
          },
          schema: {
            name: 'Free CSV Sample Files - Download Test Data Files',
            description: 'Download free CSV sample data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CSV conversion, data processing, and spreadsheet tools.'
          },
          hero: {
            title: 'CSV Sample Files',
            description: 'Download free CSV sample data files for testing. Multiple file sizes available to test your CSV conversion, data processing, and spreadsheet import tools.'
          },
          about_description: 'These are test CSV files in various sizes for testing purposes'
        },
        xls: {
          meta: {
            title: 'Free XLS Sample Files Download - Test Excel Spreadsheet Files | MorphyHub',
            description: 'Download free XLS sample Excel spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Excel conversion, data processing, and spreadsheet tools.',
            keywords: 'XLS sample files, test XLS files, download XLS samples, free XLS test files, Excel sample files, spreadsheet data samples, Microsoft Excel samples, XLS conversion test files, .xls test files'
          },
          schema: {
            name: 'Free XLS Sample Files - Download Test Spreadsheet Files',
            description: 'Download free XLS sample Excel spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Excel file conversion, data processing, and spreadsheet tools.'
          },
          hero: {
            title: 'XLS Sample Files',
            description: 'Download free XLS sample Excel spreadsheet files for testing. Multiple file sizes available to test your Excel conversion, data processing, and spreadsheet import tools.'
          },
          about_description: 'These are test XLS files in various sizes for testing purposes'
        },
        xlsx: {
          meta: {
            title: 'Free XLSX Sample Files Download - Test Excel Spreadsheet Files | MorphyHub',
            description: 'Download free XLSX sample Excel spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Excel conversion, data processing, and spreadsheet tools.',
            keywords: 'XLSX sample files, test XLSX files, download XLSX samples, free XLSX test files, Excel sample files, spreadsheet data samples, Microsoft Excel samples, XLSX conversion test files, .xlsx test files, Excel 2007+ samples, Office Open XML samples'
          },
          schema: {
            name: 'Free XLSX Sample Files - Download Test Excel Spreadsheet Files',
            description: 'Download free XLSX sample Excel spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Excel file conversion, data processing, and spreadsheet tools.'
          },
          hero: {
            title: 'XLSX Sample Files',
            description: 'Download free XLSX sample Excel spreadsheet files for testing. Multiple file sizes available to test your Excel conversion, data processing, and spreadsheet import tools.'
          },
          about_description: 'These are test XLSX files in various sizes for testing purposes'
        },
        xml: {
          meta: {
            title: 'Free XML Sample Files Download - Test Markup Data Files | MorphyHub',
            description: 'Download free XML sample markup files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing XML parsing, data conversion, and markup processing tools.',
            keywords: 'XML sample files, test XML files, download XML samples, free XML test files, markup sample files, structured data samples, XML parsing test files, .xml test files, Extensible Markup Language samples, XML conversion test files'
          },
          schema: {
            name: 'Free XML Sample Files - Download Test Markup Files',
            description: 'Download free XML sample markup files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing XML parsing, data conversion, and markup processing tools.'
          },
          hero: {
            title: 'XML Sample Files',
            description: 'Download free XML sample markup files for testing. Multiple file sizes available to test your XML parsing, data conversion, and markup processing tools.'
          },
          about_description: 'These are test XML files in various sizes for testing purposes'
        },
        ods: {
          meta: {
            title: 'Free ODS Sample Files Download - Test OpenDocument Spreadsheet Files | MorphyHub',
            description: 'Download free ODS sample OpenDocument spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing spreadsheet conversion, data processing, and OpenDocument format tools.',
            keywords: 'ODS sample files, test ODS files, download ODS samples, free ODS test files, OpenDocument spreadsheet samples, spreadsheet file samples, ODS conversion test files, .ods test files, LibreOffice Calc samples, spreadsheet format samples'
          },
          schema: {
            name: 'Free ODS Sample Files - Download Test Spreadsheet Files',
            description: 'Download free ODS sample spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing spreadsheet conversion, data processing, and OpenDocument format tools.'
          },
          hero: {
            title: 'ODS Sample Files',
            description: 'Download free ODS sample OpenDocument spreadsheet files for testing. Multiple file sizes available to test your spreadsheet conversion, data processing, and OpenDocument format tools.'
          },
          about_description: 'These are test ODS files in various sizes for testing purposes'
        },
        'ansible-yml': {
          meta: {
            title: 'Free Ansible YML Sample Files Download - Test Configuration Files | MorphyHub',
            description: 'Download free Ansible YML sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing YAML parsing, configuration management, and Ansible automation tools.',
            keywords: 'Ansible YML sample files, test YML files, download YML samples, free YML test files, YAML samples, Ansible configuration samples, automation file samples, YML conversion test files, .yml test files, configuration management samples, DevOps samples'
          },
          schema: {
            name: 'Free Ansible YML Sample Files - Download Test Configuration Files',
            description: 'Download free Ansible YML sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing YAML parsing, configuration management, and Ansible automation tools.'
          },
          hero: {
            title: 'Ansible YML Sample Files',
            description: 'Download free Ansible YML sample configuration files for testing. Multiple file sizes available to test your YAML parsing, configuration management, and Ansible automation tools.'
          },
          about_description: 'These are test Ansible YML files in various sizes for testing purposes'
        },
        'api-response-json': {
          meta: {
            title: 'Free API Response JSON Sample Files Download - Test JSON Files | MorphyHub',
            description: 'Download free API response JSON sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSON parsing, API response handling, and data processing tools.',
            keywords: 'API response JSON sample files, test JSON files, download JSON samples, free JSON test files, API response samples, JSON parsing samples, data format samples, JSON conversion test files, .json test files, web API samples, data processing samples'
          },
          schema: {
            name: 'Free API Response JSON Sample Files - Download Test JSON Files',
            description: 'Download free API response JSON sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSON parsing, API response handling, and data processing tools.'
          },
          hero: {
            title: 'API Response JSON Sample Files',
            description: 'Download free API response JSON sample files for testing. Multiple file sizes available to test your JSON parsing, API response handling, and data processing tools.'
          },
          about_description: 'These are test API response JSON files in various sizes for testing purposes'
        }
      }
    }
  },
  pl: {
    sample_page: {
      common: {
        back_button: 'Powrót do strony głównej',
        file_size: 'Rozmiar pliku:',
        download: 'Pobierz',
        download_now: 'Pobierz teraz',
        download_started: 'Pobieranie rozpoczęte',
        download_ready_in: 'Pobieranie gotowe za {{countdown}}s...',
        about_title: 'O tych plikach przykładowych',
        about_items: [
          'To są pliki testowe w różnych rozmiarach do celów testowych',
          'Pliki są bezpiecznie hostowane i dostępne do bezpłatnego pobrania',
          'Idealne do testowania narzędzi konwersji dokumentów i procesorów plików',
          'Nie wymaga rejestracji ani konta'
        ],
        features: {
          multiple_sizes: {
            title: 'Różne rozmiary',
            description: 'Pliki testowe od 100 KB do 100 MB'
          },
          free_download: {
            title: 'Darmowe pobieranie',
            description: 'Nie wymaga rejestracji ani płatności'
          },
          safe_tested: {
            title: 'Bezpieczne i przetestowane',
            description: 'Wszystkie pliki są bezpieczne i przetestowane pod kątem zgodności'
          }
        }
      },
      formats: {
        docx: {
          meta: {
            title: 'Darmowe przykładowe pliki DOCX – Pobierz pliki testowe | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki DOCX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji i przetwarzania dokumentów.',
            keywords: 'przykładowe pliki DOCX, testowe pliki DOCX, pobierz przykłady DOCX, darmowe testowe pliki DOCX, przykłady dokumentów, przykłady Microsoft Word'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DOCX – Pobierz pliki testowe',
            description: 'Pobierz darmowe przykładowe pliki DOCX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji dokumentów.'
          },
          hero: {
            title: 'Przykładowe pliki DOCX',
            description: 'Pobierz darmowe przykładowe pliki DOCX do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji i przetwarzania dokumentów.'
          },
          about_description: 'To są testowe pliki DOCX w różnych rozmiarach do celów testowych'
        },
        doc: {
          meta: {
            title: 'Darmowe przykładowe pliki DOC – Pobierz pliki testowe | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki DOC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji i przetwarzania dokumentów.',
            keywords: 'przykładowe pliki DOC, testowe pliki DOC, pobierz przykłady DOC, darmowe testowe pliki DOC, przykłady dokumentów, przykłady Microsoft Word DOC'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DOC – Pobierz pliki testowe',
            description: 'Pobierz darmowe przykładowe pliki DOC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji dokumentów.'
          },
          hero: {
            title: 'Przykładowe pliki DOC',
            description: 'Pobierz darmowe przykładowe pliki DOC do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji i przetwarzania dokumentów.'
          },
          about_description: 'To są testowe pliki DOC w różnych rozmiarach do celów testowych'
        },
        pdf: {
          meta: {
            title: 'Darmowe przykładowe pliki PDF – Pobierz pliki testowe | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki PDF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji i przetwarzania dokumentów.',
            keywords: 'przykładowe pliki PDF, testowe pliki PDF, pobierz przykłady PDF, darmowe testowe pliki PDF, przykłady dokumentów, przykłady PDF'
          },
          schema: {
            name: 'Darmowe przykładowe pliki PDF – Pobierz pliki testowe',
            description: 'Pobierz darmowe przykładowe pliki PDF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji dokumentów.'
          },
          hero: {
            title: 'Przykładowe pliki PDF',
            description: 'Pobierz darmowe przykładowe pliki PDF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji i przetwarzania dokumentów.'
          },
          about_description: 'To są testowe pliki PDF w różnych rozmiarach do celów testowych'
        },
        odp: {
          meta: {
            title: 'Darmowe przykładowe pliki ODP – Pobierz pliki prezentacji OpenDocument | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki ODP OpenDocument Presentation do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji, przeglądania i przetwarzania formatów OpenDocument.',
            keywords: 'przykładowe pliki ODP, testowe pliki ODP, pobierz przykłady ODP, darmowe testowe pliki ODP, przykłady prezentacji OpenDocument, przykłady plików prezentacji, testowe pliki konwersji ODP, testowe pliki .odp, przykłady LibreOffice Impress, przykłady formatów prezentacji'
          },
          schema: {
            name: 'Darmowe przykładowe pliki ODP – Pobierz testowe pliki prezentacji',
            description: 'Pobierz darmowe przykładowe pliki ODP OpenDocument Presentation do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji, przeglądania i przetwarzania formatów OpenDocument.'
          },
          hero: {
            title: 'Przykładowe pliki ODP',
            description: 'Pobierz darmowe przykładowe pliki ODP OpenDocument Presentation do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji i przeglądania prezentacji.'
          },
          about_description: 'To są testowe pliki ODP w różnych rozmiarach do celów testowych'
        },
        rtf: {
          meta: {
            title: 'Darmowe przykładowe pliki RTF – Pobierz pliki Rich Text Format | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki RTF (Rich Text Format) do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji, przeglądania i przetwarzania formatów RTF.',
            keywords: 'przykładowe pliki RTF, testowe pliki RTF, pobierz przykłady RTF, darmowe testowe pliki RTF, przykłady Rich Text Format, przykłady dokumentów, testowe pliki konwersji RTF, testowe pliki .rtf'
          },
          schema: {
            name: 'Darmowe przykładowe pliki RTF – Pobierz testowe pliki Rich Text Format',
            description: 'Pobierz darmowe przykładowe pliki RTF (Rich Text Format) do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji, przeglądania i przetwarzania formatów RTF.'
          },
          hero: {
            title: 'Przykładowe pliki RTF',
            description: 'Pobierz darmowe przykładowe pliki RTF (Rich Text Format) do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji i przeglądania dokumentów.'
          },
          about_description: 'To są testowe pliki RTF w różnych rozmiarach do celów testowych'
        },
        epub: {
          meta: {
            title: 'Darmowe przykładowe pliki EPUB – Pobierz pliki e-booków | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki EPUB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania czytników e-booków, konwersji EPUB i narzędzi publikacji cyfrowej.',
            keywords: 'przykładowe pliki EPUB, testowe pliki EPUB, pobierz przykłady EPUB, darmowe testowe pliki EPUB, przykłady e-booków, testowe pliki konwersji EPUB, testowe pliki .epub, przykłady publikacji cyfrowej'
          },
          schema: {
            name: 'Darmowe przykładowe pliki EPUB – Pobierz testowe pliki e-booków',
            description: 'Pobierz darmowe przykładowe pliki EPUB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania czytników e-booków, konwersji EPUB i narzędzi publikacji cyfrowej.'
          },
          hero: {
            title: 'Przykładowe pliki EPUB',
            description: 'Pobierz darmowe przykładowe pliki EPUB do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje czytniki e-booków, konwersję EPUB i narzędzia publikacji cyfrowej.'
          },
          about_description: 'To są testowe pliki EPUB w różnych rozmiarach do celów testowych'
        },
        'invoice-pdf': {
          meta: {
            title: 'Darmowe przykładowe pliki PDF faktur – Pobierz testowe pliki faktur | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki PDF faktur do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania faktur PDF, parsowania faktur i narzędzi zarządzania dokumentami.',
            keywords: 'przykładowe pliki PDF faktur, testowe pliki PDF faktur, pobierz przykłady PDF faktur, darmowe testowe pliki PDF faktur, przykłady dokumentów faktur, przykłady PDF faktur, testowe pliki przetwarzania faktur'
          },
          schema: {
            name: 'Darmowe przykładowe pliki PDF faktur – Pobierz testowe pliki faktur',
            description: 'Pobierz darmowe przykładowe pliki PDF faktur do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania faktur PDF, parsowania faktur i narzędzi zarządzania dokumentami.'
          },
          hero: {
            title: 'Przykładowe pliki PDF faktur',
            description: 'Pobierz darmowe przykładowe pliki PDF faktur do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przetwarzania faktur PDF, parsowania faktur i zarządzania dokumentami.'
          },
          about_description: 'To są testowe pliki PDF faktur w różnych rozmiarach do celów testowych'
        },
        mobi: {
          meta: {
            title: 'Darmowe przykładowe pliki MOBI – Pobierz testowe pliki e-booków MOBI | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki MOBI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji e-booków MOBI, czytania MOBI i narzędzi przetwarzania e-booków.',
            keywords: 'przykładowe pliki MOBI, testowe pliki MOBI, pobierz przykłady MOBI, darmowe testowe pliki MOBI, przykłady e-booków MOBI, testowe pliki konwersji MOBI, testowe pliki .mobi, przykłady e-booków'
          },
          schema: {
            name: 'Darmowe przykładowe pliki MOBI – Pobierz testowe pliki e-booków MOBI',
            description: 'Pobierz darmowe przykładowe pliki MOBI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji e-booków MOBI, czytania MOBI i narzędzi przetwarzania e-booków.'
          },
          hero: {
            title: 'Przykładowe pliki MOBI',
            description: 'Pobierz darmowe przykładowe pliki MOBI do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji e-booków MOBI, czytania MOBI i przetwarzania e-booków.'
          },
          about_description: 'To są testowe pliki MOBI w różnych rozmiarach do celów testowych'
        },
        csv: {
          meta: {
            title: 'Darmowe przykładowe pliki CSV – Pobierz pliki testowe | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki CSV do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji CSV, przetwarzania danych i narzędzi arkuszy kalkulacyjnych.',
            keywords: 'przykładowe pliki CSV, testowe pliki CSV, pobierz przykłady CSV, darmowe testowe pliki CSV, przykłady plików danych, przykłady wartości oddzielonych przecinkami, przykłady danych arkuszy kalkulacyjnych, testowe pliki konwersji CSV'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CSV – Pobierz pliki testowe',
            description: 'Pobierz darmowe przykładowe pliki CSV do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji CSV, przetwarzania danych i narzędzi arkuszy kalkulacyjnych.'
          },
          hero: {
            title: 'Przykładowe pliki CSV',
            description: 'Pobierz darmowe przykładowe pliki CSV do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji CSV, przetwarzania danych i importu arkuszy kalkulacyjnych.'
          },
          about_description: 'To są testowe pliki CSV w różnych rozmiarach do celów testowych'
        },
        xls: {
          meta: {
            title: 'Darmowe przykładowe pliki XLS – Pobierz pliki arkuszy kalkulacyjnych Excel | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki XLS Excel do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji Excel, przetwarzania danych i narzędzi arkuszy kalkulacyjnych.',
            keywords: 'przykładowe pliki XLS, testowe pliki XLS, pobierz przykłady XLS, darmowe testowe pliki XLS, przykłady Excel, przykłady danych arkuszy kalkulacyjnych, przykłady Microsoft Excel, testowe pliki konwersji XLS, testowe pliki .xls'
          },
          schema: {
            name: 'Darmowe przykładowe pliki XLS – Pobierz pliki testowe',
            description: 'Pobierz darmowe przykładowe pliki XLS Excel do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji plików Excel, przetwarzania danych i narzędzi arkuszy kalkulacyjnych.'
          },
          hero: {
            title: 'Przykładowe pliki XLS',
            description: 'Pobierz darmowe przykładowe pliki XLS Excel do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji Excel, przetwarzania danych i importu arkuszy kalkulacyjnych.'
          },
          about_description: 'To są testowe pliki XLS w różnych rozmiarach do celów testowych'
        },
        xlsx: {
          meta: {
            title: 'Darmowe przykładowe pliki XLSX – Pobierz pliki arkuszy kalkulacyjnych Excel | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki XLSX Excel do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji Excel, przetwarzania danych i narzędzi arkuszy kalkulacyjnych.',
            keywords: 'przykładowe pliki XLSX, testowe pliki XLSX, pobierz przykłady XLSX, darmowe testowe pliki XLSX, przykłady Excel, przykłady danych arkuszy kalkulacyjnych, przykłady Microsoft Excel, testowe pliki konwersji XLSX, testowe pliki .xlsx, przykłady Excel 2007+, przykłady Office Open XML'
          },
          schema: {
            name: 'Darmowe przykładowe pliki XLSX – Pobierz pliki arkuszy kalkulacyjnych Excel',
            description: 'Pobierz darmowe przykładowe pliki XLSX Excel do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji plików Excel, przetwarzania danych i narzędzi arkuszy kalkulacyjnych.'
          },
          hero: {
            title: 'Przykładowe pliki XLSX',
            description: 'Pobierz darmowe przykładowe pliki XLSX Excel do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji Excel, przetwarzania danych i importu arkuszy kalkulacyjnych.'
          },
          about_description: 'To są testowe pliki XLSX w różnych rozmiarach do celów testowych'
        },
        xml: {
          meta: {
            title: 'Darmowe przykładowe pliki XML – Pobierz pliki danych znaczników | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki XML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania XML, konwersji danych i narzędzi przetwarzania znaczników.',
            keywords: 'przykładowe pliki XML, testowe pliki XML, pobierz przykłady XML, darmowe testowe pliki XML, przykłady plików znaczników, przykłady danych strukturalnych, testowe pliki parsowania XML, testowe pliki .xml, przykłady Extensible Markup Language, testowe pliki konwersji XML'
          },
          schema: {
            name: 'Darmowe przykładowe pliki XML – Pobierz pliki testowe',
            description: 'Pobierz darmowe przykładowe pliki XML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania XML, konwersji danych i narzędzi przetwarzania znaczników.'
          },
          hero: {
            title: 'Przykładowe pliki XML',
            description: 'Pobierz darmowe przykładowe pliki XML do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania XML, konwersji danych i przetwarzania znaczników.'
          },
          about_description: 'To są testowe pliki XML w różnych rozmiarach do celów testowych'
        },
        ods: {
          meta: {
            title: 'Darmowe przykładowe pliki ODS – Pobierz pliki arkuszy kalkulacyjnych OpenDocument | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki ODS OpenDocument Spreadsheet do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji arkuszy kalkulacyjnych, przetwarzania danych i narzędzi formatu OpenDocument.',
            keywords: 'przykładowe pliki ODS, testowe pliki ODS, pobierz przykłady ODS, darmowe testowe pliki ODS, przykłady arkuszy kalkulacyjnych OpenDocument, przykłady plików arkuszy kalkulacyjnych, testowe pliki konwersji ODS, testowe pliki .ods, przykłady LibreOffice Calc, przykłady formatów arkuszy kalkulacyjnych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki ODS – Pobierz pliki testowe',
            description: 'Pobierz darmowe przykładowe pliki ODS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji arkuszy kalkulacyjnych, przetwarzania danych i narzędzi formatu OpenDocument.'
          },
          hero: {
            title: 'Przykładowe pliki ODS',
            description: 'Pobierz darmowe przykładowe pliki ODS OpenDocument Spreadsheet do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji arkuszy kalkulacyjnych, przetwarzania danych i formatu OpenDocument.'
          },
          about_description: 'To są testowe pliki ODS w różnych rozmiarach do celów testowych'
        },
        'ansible-yml': {
          meta: {
            title: 'Darmowe przykładowe pliki Ansible YML – Pobierz pliki konfiguracyjne | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki Ansible YML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania YAML, zarządzania konfiguracją i narzędzi automatyzacji Ansible.',
            keywords: 'przykładowe pliki Ansible YML, testowe pliki YML, pobierz przykłady YML, darmowe testowe pliki YML, przykłady YAML, przykłady konfiguracji Ansible, przykłady plików automatyzacji, testowe pliki konwersji YML, testowe pliki .yml, przykłady zarządzania konfiguracją, przykłady DevOps'
          },
          schema: {
            name: 'Darmowe przykładowe pliki Ansible YML – Pobierz pliki konfiguracyjne',
            description: 'Pobierz darmowe przykładowe pliki Ansible YML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania YAML, zarządzania konfiguracją i narzędzi automatyzacji Ansible.'
          },
          hero: {
            title: 'Przykładowe pliki Ansible YML',
            description: 'Pobierz darmowe przykładowe pliki Ansible YML do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania YAML, zarządzania konfiguracją i automatyzacji Ansible.'
          },
          about_description: 'To są testowe pliki Ansible YML w różnych rozmiarach do celów testowych'
        },
        'api-response-json': {
          meta: {
            title: 'Darmowe przykładowe pliki API Response JSON – Pobierz pliki JSON | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki API Response JSON do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania JSON, obsługi odpowiedzi API i narzędzi przetwarzania danych.',
            keywords: 'przykładowe pliki API Response JSON, testowe pliki JSON, pobierz przykłady JSON, darmowe testowe pliki JSON, przykłady odpowiedzi API, przykłady parsowania JSON, przykłady formatów danych, testowe pliki konwersji JSON, testowe pliki .json, przykłady web API, przykłady przetwarzania danych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki API Response JSON – Pobierz pliki JSON',
            description: 'Pobierz darmowe przykładowe pliki API Response JSON do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania JSON, obsługi odpowiedzi API i narzędzi przetwarzania danych.'
          },
          hero: {
            title: 'Przykładowe pliki API Response JSON',
            description: 'Pobierz darmowe przykładowe pliki API Response JSON do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania JSON, obsługi odpowiedzi API i przetwarzania danych.'
          },
          about_description: 'To są testowe pliki API Response JSON w różnych rozmiarach do celów testowych'
        }
      }
    }
  },
  de: {
    sample_page: {
      common: {
        back_button: 'Zurück zur Startseite',
        file_size: 'Dateigröße:',
        download: 'Herunterladen',
        download_now: 'Jetzt herunterladen',
        download_started: 'Download gestartet',
        download_ready_in: 'Download bereit in {{countdown}}s...',
        about_title: 'Über diese Beispieldateien',
        about_items: [
          'Dies sind Testdateien in verschiedenen Größen für Testzwecke',
          'Dateien werden sicher gehostet und stehen zum kostenlosen Download zur Verfügung',
          'Perfekt zum Testen von Dokumentkonvertierungstools und Dateiprozessoren',
          'Keine Registrierung oder Konto erforderlich'
        ],
        features: {
          multiple_sizes: {
            title: 'Mehrere Größen',
            description: 'Testdateien von 100 KB bis 100 MB'
          },
          free_download: {
            title: 'Kostenloser Download',
            description: 'Keine Registrierung oder Zahlung erforderlich'
          },
          safe_tested: {
            title: 'Sicher & getestet',
            description: 'Alle Dateien sind sicher und auf Kompatibilität getestet'
          }
        }
      },
      formats: {
        docx: {
          meta: {
            title: 'Kostenlose DOCX Beispieldateien herunterladen – Testdateien | MorphyHub',
            description: 'Laden Sie kostenlose DOCX Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungs- und Verarbeitungstools.',
            keywords: 'DOCX Beispieldateien, DOCX Testdateien, DOCX Beispiele herunterladen, kostenlose DOCX Testdateien, Dokumentbeispiele, Microsoft Word Beispiele'
          },
          schema: {
            name: 'Kostenlose DOCX Beispieldateien – Testdateien herunterladen',
            description: 'Laden Sie kostenlose DOCX Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungstools.'
          },
          hero: {
            title: 'DOCX Beispieldateien',
            description: 'Laden Sie kostenlose DOCX Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Dokumentkonvertierungs- und Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind DOCX Testdateien in verschiedenen Größen für Testzwecke'
        },
        doc: {
          meta: {
            title: 'Kostenlose DOC Beispieldateien herunterladen – Testdateien | MorphyHub',
            description: 'Laden Sie kostenlose DOC Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungs- und Verarbeitungstools.',
            keywords: 'DOC Beispieldateien, DOC Testdateien, DOC Beispiele herunterladen, kostenlose DOC Testdateien, Dokumentbeispiele, Microsoft Word DOC Beispiele'
          },
          schema: {
            name: 'Kostenlose DOC Beispieldateien – Testdateien herunterladen',
            description: 'Laden Sie kostenlose DOC Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungstools.'
          },
          hero: {
            title: 'DOC Beispieldateien',
            description: 'Laden Sie kostenlose DOC Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Dokumentkonvertierungs- und Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind DOC Testdateien in verschiedenen Größen für Testzwecke'
        },
        pdf: {
          meta: {
            title: 'Kostenlose PDF Beispieldateien herunterladen – Testdateien | MorphyHub',
            description: 'Laden Sie kostenlose PDF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungs- und Verarbeitungstools.',
            keywords: 'PDF Beispieldateien, PDF Testdateien, PDF Beispiele herunterladen, kostenlose PDF Testdateien, Dokumentbeispiele, PDF Beispiele'
          },
          schema: {
            name: 'Kostenlose PDF Beispieldateien – Testdateien herunterladen',
            description: 'Laden Sie kostenlose PDF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungstools.'
          },
          hero: {
            title: 'PDF Beispieldateien',
            description: 'Laden Sie kostenlose PDF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Dokumentkonvertierungs- und Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind PDF Testdateien in verschiedenen Größen für Testzwecke'
        },
        odp: {
          meta: {
            title: 'Kostenlose ODP Beispieldateien herunterladen – OpenDocument-Präsentationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose ODP OpenDocument-Präsentations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Präsentationskonvertierungs-, Anzeige- und OpenDocument-Format-Verarbeitungstools.',
            keywords: 'ODP Beispieldateien, ODP Testdateien, ODP Beispiele herunterladen, kostenlose ODP Testdateien, OpenDocument-Präsentationsbeispiele, Präsentationsdateibeispiele, ODP-Konvertierungstestdateien, .odp Testdateien, LibreOffice Impress Beispiele, Präsentationsformatbeispiele'
          },
          schema: {
            name: 'Kostenlose ODP Beispieldateien – OpenDocument-Präsentationsdateien testen',
            description: 'Laden Sie kostenlose ODP Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Präsentationskonvertierungs-, Anzeige- und OpenDocument-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'ODP Beispieldateien',
            description: 'Laden Sie kostenlose ODP OpenDocument-Präsentations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Präsentationskonvertierungs- und Anzeigetools zu testen.'
          },
          about_description: 'Dies sind ODP Testdateien in verschiedenen Größen für Testzwecke'
        },
        rtf: {
          meta: {
            title: 'Kostenlose RTF Beispieldateien herunterladen – Rich Text Format-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose RTF Rich Text Format Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungs-, Anzeige- und RTF-Format-Verarbeitungstools.',
            keywords: 'RTF Beispieldateien, RTF Testdateien, RTF Beispiele herunterladen, kostenlose RTF Testdateien, Rich Text Format Beispiele, Dokumentbeispiele, RTF-Konvertierungstestdateien, .rtf Testdateien'
          },
          schema: {
            name: 'Kostenlose RTF Beispieldateien – Rich Text Format-Dateien testen',
            description: 'Laden Sie kostenlose RTF Rich Text Format Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungs-, Anzeige- und RTF-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'RTF Beispieldateien',
            description: 'Laden Sie kostenlose RTF Rich Text Format Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Dokumentkonvertierungs- und Anzeigetools zu testen.'
          },
          about_description: 'Dies sind RTF Testdateien in verschiedenen Größen für Testzwecke'
        },
        epub: {
          meta: {
            title: 'Kostenlose EPUB Beispieldateien herunterladen – E-Book-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose EPUB E-Book-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von E-Book-Readern, EPUB-Konvertierung und digitalen Publikationstools.',
            keywords: 'EPUB Beispieldateien, EPUB Testdateien, EPUB Beispiele herunterladen, kostenlose EPUB Testdateien, E-Book-Beispiele, EPUB-Konvertierungstestdateien, .epub Testdateien, digitale Publikationsbeispiele'
          },
          schema: {
            name: 'Kostenlose EPUB Beispieldateien – E-Book-Dateien testen',
            description: 'Laden Sie kostenlose EPUB E-Book-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von E-Book-Readern, EPUB-Konvertierung und digitalen Publikationstools.'
          },
          hero: {
            title: 'EPUB Beispieldateien',
            description: 'Laden Sie kostenlose EPUB E-Book-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre E-Book-Reader, EPUB-Konvertierung und digitalen Publikationstools zu testen.'
          },
          about_description: 'Dies sind EPUB Testdateien in verschiedenen Größen für Testzwecke'
        },
        'invoice-pdf': {
          meta: {
            title: 'Kostenlose Rechnungs-PDF Beispieldateien herunterladen – Rechnungsdokumentdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose Rechnungs-PDF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von PDF-Rechnungsverarbeitung, Rechnungsparsing und Dokumentenverwaltungstools.',
            keywords: 'Rechnungs-PDF Beispieldateien, Rechnungs-PDF Testdateien, Rechnungs-PDF Beispiele herunterladen, kostenlose Rechnungs-PDF Testdateien, Rechnungsdokumentbeispiele, PDF-Rechnungsbeispiele, Rechnungsverarbeitungstestdateien'
          },
          schema: {
            name: 'Kostenlose Rechnungs-PDF Beispieldateien – Rechnungsdokumentdateien testen',
            description: 'Laden Sie kostenlose Rechnungs-PDF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von PDF-Rechnungsverarbeitung, Rechnungsparsing und Dokumentenverwaltungstools.'
          },
          hero: {
            title: 'Rechnungs-PDF Beispieldateien',
            description: 'Laden Sie kostenlose Rechnungs-PDF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre PDF-Rechnungsverarbeitung, Rechnungsparsing und Dokumentenverwaltungstools zu testen.'
          },
          about_description: 'Dies sind Rechnungs-PDF Testdateien in verschiedenen Größen für Testzwecke'
        },
        mobi: {
          meta: {
            title: 'Kostenlose MOBI Beispieldateien herunterladen – MOBI E-Book-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose MOBI E-Book-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von MOBI E-Book-Konvertierung, MOBI-Lesung und E-Book-Verarbeitungstools.',
            keywords: 'MOBI Beispieldateien, MOBI Testdateien, MOBI Beispiele herunterladen, kostenlose MOBI Testdateien, MOBI E-Book-Beispiele, MOBI-Konvertierungstestdateien, .mobi Testdateien, E-Book-Beispiele'
          },
          schema: {
            name: 'Kostenlose MOBI Beispieldateien – MOBI E-Book-Dateien testen',
            description: 'Laden Sie kostenlose MOBI E-Book-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von MOBI E-Book-Konvertierung, MOBI-Lesung und E-Book-Verarbeitungstools.'
          },
          hero: {
            title: 'MOBI Beispieldateien',
            description: 'Laden Sie kostenlose MOBI E-Book-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre MOBI E-Book-Konvertierung, MOBI-Lesung und E-Book-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind MOBI Testdateien in verschiedenen Größen für Testzwecke'
        },
        csv: {
          meta: {
            title: 'Kostenlose CSV Beispieldateien herunterladen – Testdateien | MorphyHub',
            description: 'Laden Sie kostenlose CSV Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CSV-Konvertierung, Datenverarbeitung und Tabellenkalkulations-Tools.',
            keywords: 'CSV Beispieldateien, CSV Testdateien, CSV Beispiele herunterladen, kostenlose CSV Testdateien, Datendateibeispiele, Komma-getrennte Werte Beispiele, Tabellenkalkulations-Datenbeispiele, CSV-Konvertierungstestdateien'
          },
          schema: {
            name: 'Kostenlose CSV Beispieldateien – Testdateien herunterladen',
            description: 'Laden Sie kostenlose CSV Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CSV-Konvertierung, Datenverarbeitung und Tabellenkalkulations-Tools.'
          },
          hero: {
            title: 'CSV Beispieldateien',
            description: 'Laden Sie kostenlose CSV Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre CSV-Konvertierung, Datenverarbeitung und Tabellenkalkulations-Import-Tools zu testen.'
          },
          about_description: 'Dies sind CSV Testdateien in verschiedenen Größen für Testzwecke'
        },
        xls: {
          meta: {
            title: 'Kostenlose XLS Beispieldateien herunterladen – Excel-Tabellenkalkulationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose XLS Excel-Tabellenkalkulations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Excel-Konvertierung, Datenverarbeitung und Tabellenkalkulations-Tools.',
            keywords: 'XLS Beispieldateien, XLS Testdateien, XLS Beispiele herunterladen, kostenlose XLS Testdateien, Excel-Beispieldateien, Tabellenkalkulations-Datenbeispiele, Microsoft Excel Beispiele, XLS-Konvertierungstestdateien, .xls Testdateien'
          },
          schema: {
            name: 'Kostenlose XLS Beispieldateien – Testdateien herunterladen',
            description: 'Laden Sie kostenlose XLS Excel-Tabellenkalkulations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Excel-Dateikonvertierung, Datenverarbeitung und Tabellenkalkulations-Tools.'
          },
          hero: {
            title: 'XLS Beispieldateien',
            description: 'Laden Sie kostenlose XLS Excel-Tabellenkalkulations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Excel-Konvertierung, Datenverarbeitung und Tabellenkalkulations-Import-Tools zu testen.'
          },
          about_description: 'Dies sind XLS Testdateien in verschiedenen Größen für Testzwecke'
        },
        xlsx: {
          meta: {
            title: 'Kostenlose XLSX Beispieldateien herunterladen – Excel-Tabellenkalkulationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose XLSX Excel-Tabellenkalkulations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Excel-Konvertierung, Datenverarbeitung und Tabellenkalkulations-Tools.',
            keywords: 'XLSX Beispieldateien, XLSX Testdateien, XLSX Beispiele herunterladen, kostenlose XLSX Testdateien, Excel-Beispieldateien, Tabellenkalkulations-Datenbeispiele, Microsoft Excel Beispiele, XLSX-Konvertierungstestdateien, .xlsx Testdateien, Excel 2007+ Beispiele, Office Open XML Beispiele'
          },
          schema: {
            name: 'Kostenlose XLSX Beispieldateien – Excel-Tabellenkalkulationsdateien testen',
            description: 'Laden Sie kostenlose XLSX Excel-Tabellenkalkulations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Excel-Dateikonvertierung, Datenverarbeitung und Tabellenkalkulations-Tools.'
          },
          hero: {
            title: 'XLSX Beispieldateien',
            description: 'Laden Sie kostenlose XLSX Excel-Tabellenkalkulations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Excel-Konvertierung, Datenverarbeitung und Tabellenkalkulations-Import-Tools zu testen.'
          },
          about_description: 'Dies sind XLSX Testdateien in verschiedenen Größen für Testzwecke'
        },
        xml: {
          meta: {
            title: 'Kostenlose XML Beispieldateien herunterladen – Markup-Datendateien testen | MorphyHub',
            description: 'Laden Sie kostenlose XML Markup-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von XML-Parsing, Datenkonvertierung und Markup-Verarbeitungstools.',
            keywords: 'XML Beispieldateien, XML Testdateien, XML Beispiele herunterladen, kostenlose XML Testdateien, Markup-Beispieldateien, strukturierte Datenbeispiele, XML-Parsing-Testdateien, .xml Testdateien, Extensible Markup Language Beispiele, XML-Konvertierungstestdateien'
          },
          schema: {
            name: 'Kostenlose XML Beispieldateien – Testdateien herunterladen',
            description: 'Laden Sie kostenlose XML Markup-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von XML-Parsing, Datenkonvertierung und Markup-Verarbeitungstools.'
          },
          hero: {
            title: 'XML Beispieldateien',
            description: 'Laden Sie kostenlose XML Markup-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre XML-Parsing, Datenkonvertierung und Markup-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind XML Testdateien in verschiedenen Größen für Testzwecke'
        },
        ods: {
          meta: {
            title: 'Kostenlose ODS Beispieldateien herunterladen – OpenDocument-Tabellenkalkulationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose ODS OpenDocument-Tabellenkalkulations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Tabellenkalkulationskonvertierung, Datenverarbeitung und OpenDocument-Format-Tools.',
            keywords: 'ODS Beispieldateien, ODS Testdateien, ODS Beispiele herunterladen, kostenlose ODS Testdateien, OpenDocument-Tabellenkalkulationsbeispiele, Tabellenkalkulationsdateibeispiele, ODS-Konvertierungstestdateien, .ods Testdateien, LibreOffice Calc Beispiele, Tabellenkalkulationsformatbeispiele'
          },
          schema: {
            name: 'Kostenlose ODS Beispieldateien – Testdateien herunterladen',
            description: 'Laden Sie kostenlose ODS Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Tabellenkalkulationskonvertierung, Datenverarbeitung und OpenDocument-Format-Tools.'
          },
          hero: {
            title: 'ODS Beispieldateien',
            description: 'Laden Sie kostenlose ODS OpenDocument-Tabellenkalkulations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Tabellenkalkulationskonvertierung, Datenverarbeitung und OpenDocument-Format-Tools zu testen.'
          },
          about_description: 'Dies sind ODS Testdateien in verschiedenen Größen für Testzwecke'
        },
        'ansible-yml': {
          meta: {
            title: 'Kostenlose Ansible YML Beispieldateien herunterladen – Konfigurationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose Ansible YML Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von YAML-Parsing, Konfigurationsverwaltung und Ansible-Automatisierungstools.',
            keywords: 'Ansible YML Beispieldateien, YML Testdateien, YML Beispiele herunterladen, kostenlose YML Testdateien, YAML-Beispiele, Ansible-Konfigurationsbeispiele, Automatisierungsdateibeispiele, YML-Konvertierungstestdateien, .yml Testdateien, Konfigurationsverwaltungsbeispiele, DevOps-Beispiele'
          },
          schema: {
            name: 'Kostenlose Ansible YML Beispieldateien – Konfigurationsdateien testen',
            description: 'Laden Sie kostenlose Ansible YML Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von YAML-Parsing, Konfigurationsverwaltung und Ansible-Automatisierungstools.'
          },
          hero: {
            title: 'Ansible YML Beispieldateien',
            description: 'Laden Sie kostenlose Ansible YML Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre YAML-Parsing, Konfigurationsverwaltung und Ansible-Automatisierungstools zu testen.'
          },
          about_description: 'Dies sind Ansible YML Testdateien in verschiedenen Größen für Testzwecke'
        },
        'api-response-json': {
          meta: {
            title: 'Kostenlose API Response JSON Beispieldateien herunterladen – JSON-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose API Response JSON Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JSON-Parsing, API-Antwortbehandlung und Datenverarbeitungstools.',
            keywords: 'API Response JSON Beispieldateien, JSON Testdateien, JSON Beispiele herunterladen, kostenlose JSON Testdateien, API-Antwortbeispiele, JSON-Parsing-Beispiele, Datenformatbeispiele, JSON-Konvertierungstestdateien, .json Testdateien, Web-API-Beispiele, Datenverarbeitungsbeispiele'
          },
          schema: {
            name: 'Kostenlose API Response JSON Beispieldateien – JSON-Dateien testen',
            description: 'Laden Sie kostenlose API Response JSON Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JSON-Parsing, API-Antwortbehandlung und Datenverarbeitungstools.'
          },
          hero: {
            title: 'API Response JSON Beispieldateien',
            description: 'Laden Sie kostenlose API Response JSON Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre JSON-Parsing, API-Antwortbehandlung und Datenverarbeitungstools zu testen.'
          },
          about_description: 'Dies sind API Response JSON Testdateien in verschiedenen Größen für Testzwecke'
        }
      }
    }
  }
};

// Register translations
Object.entries(samplePagesResources).forEach(([locale, resources]) => {
  i18n.addResourceBundle(locale, 'translation', resources, true, true);
});

export default samplePagesResources;

