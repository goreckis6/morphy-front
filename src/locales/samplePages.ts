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
      [key: string]: {
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
        },
        json: {
          meta: {
            title: 'Free JSON Sample Files Download - Test JSON Data Files | MorphyHub',
            description: 'Download free JSON sample JSON data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSON parsing, data processing, and API response handling tools.',
            keywords: 'JSON sample files, test JSON files, download JSON samples, free JSON test files, JSON data samples, JSON format files, .json test files, data exchange files, JSON parsing test files'
          },
          schema: {
            name: 'Free JSON Sample Files - Download Test JSON Data Files',
            description: 'Download free JSON sample JSON data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSON parsing, data processing, and API response handling tools.'
          },
          hero: {
            title: 'JSON Sample Files',
            description: 'Download free JSON sample JSON data files for testing. Multiple file sizes available to test your JSON parsing and data processing tools.'
          },
          about_description: 'These are test JSON (data) files in various sizes for testing purposes'
        },
        java: {
          meta: {
            title: 'Free Java Sample Files Download - Test Java Source Code Files | MorphyHub',
            description: 'Download free Java sample Java source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java code compilation, Java syntax checking, and Java development tools.',
            keywords: 'Java sample files, test Java files, download Java samples, free Java test files, Java source code samples, Java code files, .java test files, Java programming files, Java compilation test files'
          },
          schema: {
            name: 'Free Java Sample Files - Download Test Java Source Code Files',
            description: 'Download free Java sample Java source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java code compilation, Java syntax checking, and Java development tools.'
          },
          hero: {
            title: 'Java Sample Files',
            description: 'Download free Java sample Java source code files for testing. Multiple file sizes available to test your Java code compilation and Java syntax checking tools.'
          },
          about_description: 'These are test Java source code files in various sizes for testing purposes'
        },
        jpeg: {
          meta: {
            title: 'Free JPEG Sample Files Download - Test JPEG Image Files | MorphyHub',
            description: 'Download free JPEG sample JPEG image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JPEG image conversion, JPEG compression, and image processing tools.',
            keywords: 'JPEG sample files, test JPEG files, download JPEG samples, free JPEG test files, JPEG image samples, JPEG photo files, .jpeg test files, image compression files, JPEG conversion test files'
          },
          schema: {
            name: 'Free JPEG Sample Files - Download Test JPEG Image Files',
            description: 'Download free JPEG sample JPEG image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JPEG image conversion, JPEG compression, and image processing tools.'
          },
          hero: {
            title: 'JPEG Sample Files',
            description: 'Download free JPEG sample JPEG image files for testing. Multiple file sizes available to test your JPEG image conversion and JPEG compression tools.'
          },
          about_description: 'These are test JPEG image files in various sizes for testing purposes'
        },
        jpg: {
          meta: {
            title: 'Free JPG Sample Files Download - Test JPG Image Files | MorphyHub',
            description: 'Download free JPG sample JPG image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JPG image conversion, JPG compression, and image processing tools.',
            keywords: 'JPG sample files, test JPG files, download JPG samples, free JPG test files, JPG image samples, JPG photo files, .jpg test files, image compression files, JPG conversion test files'
          },
          schema: {
            name: 'Free JPG Sample Files - Download Test JPG Image Files',
            description: 'Download free JPG sample JPG image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JPG image conversion, JPG compression, and image processing tools.'
          },
          hero: {
            title: 'JPG Sample Files',
            description: 'Download free JPG sample JPG image files for testing. Multiple file sizes available to test your JPG image conversion and JPG compression tools.'
          },
          about_description: 'These are test JPG image files in various sizes for testing purposes'
        },
        zip: {
          meta: {
            title: 'Free ZIP Sample Files Download - Test Archive Files | MorphyHub',
            description: 'Download free ZIP sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction, compression, and file archiving tools.',
            keywords: 'ZIP sample files, test ZIP files, download ZIP samples, free ZIP test files, archive sample files, compressed file samples, ZIP archive samples, .zip test files, file compression samples, ZIP extraction test files'
          },
          schema: {
            name: 'Free ZIP Sample Files - Download Test Archive Files',
            description: 'Download free ZIP sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction, compression, and file archiving tools.'
          },
          hero: {
            title: 'ZIP Sample Files',
            description: 'Download free ZIP sample archive files for testing. Multiple file sizes available to test your archive extraction, compression, and file archiving tools.'
          },
          about_description: 'These are test ZIP archive files in various sizes for testing purposes'
        },
        js: {
          meta: {
            title: 'Free JS Sample Files Download - Test JavaScript Files | MorphyHub',
            description: 'Download free JS sample JavaScript files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JavaScript code execution, JS syntax checking, and web development tools.',
            keywords: 'JS sample files, test JS files, download JS samples, free JS test files, JavaScript code samples, JS script files, .js test files, web development files, JS syntax checking test files'
          },
          schema: {
            name: 'Free JS Sample Files - Download Test JavaScript Files',
            description: 'Download free JS sample JavaScript files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JavaScript code execution, JS syntax checking, and web development tools.'
          },
          hero: {
            title: 'JS Sample Files',
            description: 'Download free JS sample JavaScript files for testing. Multiple file sizes available to test your JavaScript code execution and JS syntax checking tools.'
          },
          about_description: 'These are test JavaScript files in various sizes for testing purposes'
        },
        html: {
          meta: {
            title: 'Free HTML Sample Files Download - Test HyperText Markup Language Files | MorphyHub',
            description: 'Download free HTML sample HyperText Markup Language files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing HTML parsing, web development, and HTML validation tools.',
            keywords: 'HTML sample files, test HTML files, download HTML samples, free HTML test files, HyperText Markup Language samples, HTML web page samples, HTML parsing test files, .html test files, web development samples, HTML validation files, HTML editor samples'
          },
          schema: {
            name: 'Free HTML Sample Files - Download Test HyperText Markup Language Files',
            description: 'Download free HTML sample HyperText Markup Language files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing HTML parsing, web development, and HTML validation tools.'
          },
          hero: {
            title: 'HTML Sample Files',
            description: 'Download free HTML sample HyperText Markup Language files for testing. Multiple file sizes available to test your HTML parsing and web development tools.'
          },
          about_description: 'These are test HTML files in various sizes for testing purposes'
        },
        css: {
          meta: {
            title: 'Free CSS Sample Files Download - Test Cascading Style Sheets Files | MorphyHub',
            description: 'Download free CSS sample Cascading Style Sheets files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CSS parsing, web styling, and CSS validation tools.',
            keywords: 'CSS sample files, test CSS files, download CSS samples, free CSS test files, Cascading Style Sheets samples, CSS stylesheet samples, CSS parsing test files, .css test files, web styling samples, CSS validation files, CSS editor samples'
          },
          schema: {
            name: 'Free CSS Sample Files - Download Test Cascading Style Sheets Files',
            description: 'Download free CSS sample Cascading Style Sheets files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CSS parsing, web styling, and CSS validation tools.'
          },
          hero: {
            title: 'CSS Sample Files',
            description: 'Download free CSS sample Cascading Style Sheets files for testing. Multiple file sizes available to test your CSS parsing and web styling tools.'
          },
          about_description: 'These are test CSS files in various sizes for testing purposes'
        },
        md: {
          meta: {
            title: 'Free MD Sample Files Download - Test Markdown Files | MorphyHub',
            description: 'Download free MD sample Markdown files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Markdown parsing, documentation tools, and Markdown conversion tools.',
            keywords: 'MD sample files, test MD files, download MD samples, free MD test files, Markdown samples, MD documentation samples, Markdown parsing test files, .md test files, documentation samples, Markdown conversion files, Markdown editor samples'
          },
          schema: {
            name: 'Free MD Sample Files - Download Test Markdown Files',
            description: 'Download free MD sample Markdown files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Markdown parsing, documentation tools, and Markdown conversion tools.'
          },
          hero: {
            title: 'MD Sample Files',
            description: 'Download free MD sample Markdown files for testing. Multiple file sizes available to test your Markdown parsing and documentation tools.'
          },
          about_description: 'These are test Markdown files in various sizes for testing purposes'
        },
        jsx: {
          meta: {
            title: 'Free JSX Sample Files Download - Test JSX React Files | MorphyHub',
            description: 'Download free JSX sample JSX React files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSX parsing, React development, and JSX syntax checking tools.',
            keywords: 'JSX sample files, test JSX files, download JSX samples, free JSX test files, JSX React samples, JSX component samples, JSX parsing test files, .jsx test files, React development samples, JSX syntax checking files, JSX editor samples'
          },
          schema: {
            name: 'Free JSX Sample Files - Download Test JSX React Files',
            description: 'Download free JSX sample JSX React files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSX parsing, React development, and JSX syntax checking tools.'
          },
          hero: {
            title: 'JSX Sample Files',
            description: 'Download free JSX sample JSX React files for testing. Multiple file sizes available to test your JSX parsing and React development tools.'
          },
          about_description: 'These are test JSX React files in various sizes for testing purposes'
        },
        jsonl: {
          meta: {
            title: 'Free JSONL Sample Files Download - Test JSON Lines Files | MorphyHub',
            description: 'Download free JSONL sample JSON Lines files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSONL parsing, data processing, and JSON Lines handling tools.',
            keywords: 'JSONL sample files, test JSONL files, download JSONL samples, free JSONL test files, JSON Lines samples, JSONL data samples, JSONL parsing test files, .jsonl test files, data processing samples, JSON Lines handling files, JSONL editor samples'
          },
          schema: {
            name: 'Free JSONL Sample Files - Download Test JSON Lines Files',
            description: 'Download free JSONL sample JSON Lines files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSONL parsing, data processing, and JSON Lines handling tools.'
          },
          hero: {
            title: 'JSONL Sample Files',
            description: 'Download free JSONL sample JSON Lines files for testing. Multiple file sizes available to test your JSONL parsing and data processing tools.'
          },
          about_description: 'These are test JSON Lines files in various sizes for testing purposes'
        },
        cpp: {
          meta: {
            title: 'Free CPP Sample Files Download - Test C++ Source Code Files | MorphyHub',
            description: 'Download free CPP sample C++ source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C++ code compilation, C++ syntax checking, and C++ development tools.',
            keywords: 'CPP sample files, test CPP files, download CPP samples, free CPP test files, C++ source code samples, C++ code files, .cpp test files, C++ programming files, C++ compilation test files'
          },
          schema: {
            name: 'Free CPP Sample Files - Download Test C++ Source Code Files',
            description: 'Download free CPP sample C++ source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C++ code compilation, C++ syntax checking, and C++ development tools.'
          },
          hero: {
            title: 'CPP Sample Files',
            description: 'Download free CPP sample C++ source code files for testing. Multiple file sizes available to test your C++ code compilation and C++ syntax checking tools.'
          },
          about_description: 'These are test C++ source code files in various sizes for testing purposes'
        },
        c: {
          meta: {
            title: 'Free C Sample Files Download - Test C Source Code Files | MorphyHub',
            description: 'Download free C sample C source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C code compilation, C syntax checking, and C development tools.',
            keywords: 'C sample files, test C files, download C samples, free C test files, C source code samples, C code files, .c test files, C programming files, C compilation test files'
          },
          schema: {
            name: 'Free C Sample Files - Download Test C Source Code Files',
            description: 'Download free C sample C source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C code compilation, C syntax checking, and C development tools.'
          },
          hero: {
            title: 'C Sample Files',
            description: 'Download free C sample C source code files for testing. Multiple file sizes available to test your C code compilation and C syntax checking tools.'
          },
          about_description: 'These are test C source code files in various sizes for testing purposes'
        },
        bmp: {
          meta: {
            title: 'Free BMP Sample Files Download - Test BMP Image Files | MorphyHub',
            description: 'Download free BMP sample BMP image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing BMP image conversion, BMP compression, and image processing tools.',
            keywords: 'BMP sample files, test BMP files, download BMP samples, free BMP test files, BMP image samples, BMP bitmap files, .bmp test files, image compression files, BMP conversion test files'
          },
          schema: {
            name: 'Free BMP Sample Files - Download Test BMP Image Files',
            description: 'Download free BMP sample BMP image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing BMP image conversion, BMP compression, and image processing tools.'
          },
          hero: {
            title: 'BMP Sample Files',
            description: 'Download free BMP sample BMP image files for testing. Multiple file sizes available to test your BMP image conversion and BMP compression tools.'
          },
          about_description: 'These are test BMP image files in various sizes for testing purposes'
        },
        'animated-gif': {
          meta: {
            title: 'Free Animated GIF Sample Files Download - Test Animation Files | MorphyHub',
            description: 'Download free animated GIF sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing GIF animation conversion, viewing, and animation format processing tools.',
            keywords: 'animated GIF sample files, test animated GIF files, download animated GIF samples, free animated GIF test files, GIF animation samples, animation file samples, animated GIF conversion test files, .gif test files, web animation samples, animated image samples'
          },
          schema: {
            name: 'Free Animated GIF Sample Files - Download Test Animation Files',
            description: 'Download free animated GIF sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing GIF animation conversion, viewing, and animation format processing tools.'
          },
          hero: {
            title: 'Animated GIF Sample Files',
            description: 'Download free animated GIF sample files for testing. Multiple file sizes available to test your GIF animation conversion, viewing, and animation format processing tools.'
          },
          about_description: 'These are test animated GIF (Graphics Interchange Format) files in various sizes for testing purposes'
        },
        apng: {
          meta: {
            title: 'Free APNG Sample Files Download - Test Animated PNG Files | MorphyHub',
            description: 'Download free APNG sample animated PNG files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing animated PNG conversion, viewing, and APNG format processing tools.',
            keywords: 'APNG sample files, test APNG files, download APNG samples, free APNG test files, animated PNG samples, APNG animation samples, image animation samples, APNG conversion test files, .apng test files, web animation samples, PNG animation samples'
          },
          schema: {
            name: 'Free APNG Sample Files - Download Test Animated PNG Files',
            description: 'Download free APNG sample animated PNG files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing animated PNG conversion, viewing, and APNG format processing tools.'
          },
          hero: {
            title: 'APNG Sample Files',
            description: 'Download free APNG sample animated PNG files for testing. Multiple file sizes available to test your animated PNG conversion, viewing, and APNG format processing tools.'
          },
          about_description: 'These are test APNG (Animated Portable Network Graphics) files in various sizes for testing purposes'
        },
        avif: {
          meta: {
            title: 'Free AVIF Sample Files Download - Test Next-Generation Image Files | MorphyHub',
            description: 'Download free AVIF sample image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing AVIF conversion, viewing, and next-generation image format processing tools.',
            keywords: 'AVIF sample files, test AVIF files, download AVIF samples, free AVIF test files, image samples, AV1 image format samples, next-gen image samples, AVIF conversion test files, .avif test files, modern image format samples, web image samples'
          },
          schema: {
            name: 'Free AVIF Sample Files - Download Test Next-Generation Image Files',
            description: 'Download free AVIF sample image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing AVIF conversion, viewing, and next-generation image format processing tools.'
          },
          hero: {
            title: 'AVIF Sample Files',
            description: 'Download free AVIF sample image files for testing. Multiple file sizes available to test your AVIF conversion, viewing, and next-generation image format processing tools.'
          },
          about_description: 'These are test AVIF (AV1 Image File Format) image files in various sizes for testing purposes'
        },
        avi: {
          meta: {
            title: 'Free AVI Sample Files Download - Test Video Files | MorphyHub',
            description: 'Download free AVI sample video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video conversion, playback, and AVI format processing tools.',
            keywords: 'AVI sample files, test AVI files, download AVI samples, free AVI test files, video samples, Audio Video Interleave samples, AVI conversion test files, .avi test files, video playback samples, multimedia file samples'
          },
          schema: {
            name: 'Free AVI Sample Files - Download Test Video Files',
            description: 'Download free AVI sample video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video conversion, playback, and AVI format processing tools.'
          },
          hero: {
            title: 'AVI Sample Files',
            description: 'Download free AVI sample video files for testing. Multiple file sizes available to test your video conversion, playback, and AVI format processing tools.'
          },
          about_description: 'These are test AVI (Audio Video Interleave) video files in various sizes for testing purposes'
        },
        bat: {
          meta: {
            title: 'Free BAT Sample Files Download - Test Batch Script Files | MorphyHub',
            description: 'Download free BAT sample batch script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing batch script execution, Windows automation, and command-line processing tools.',
            keywords: 'BAT sample files, test BAT files, download BAT samples, free BAT test files, batch script samples, Windows batch files, automation script samples, BAT conversion test files, .bat test files, command-line script samples, Windows automation samples'
          },
          schema: {
            name: 'Free BAT Sample Files - Download Test Batch Script Files',
            description: 'Download free BAT sample batch script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing batch script execution, Windows automation, and command-line processing tools.'
          },
          hero: {
            title: 'BAT Sample Files',
            description: 'Download free BAT sample batch script files for testing. Multiple file sizes available to test your batch script execution, Windows automation, and command-line processing tools.'
          },
          about_description: 'These are test BAT (Batch) script files in various sizes for testing purposes'
        },
        bib: {
          meta: {
            title: 'Free BIB Sample Files Download - Test Bibliography Files | MorphyHub',
            description: 'Download free BIB sample bibliography files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing bibliography management, citation tools, and BibTeX format processing.',
            keywords: 'BIB sample files, test BIB files, download BIB samples, free BIB test files, bibliography samples, BibTeX files, citation samples, BIB conversion test files, .bib test files, reference management samples, academic citation samples'
          },
          schema: {
            name: 'Free BIB Sample Files - Download Test Bibliography Files',
            description: 'Download free BIB sample bibliography files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing bibliography management, citation tools, and BibTeX format processing.'
          },
          hero: {
            title: 'BIB Sample Files',
            description: 'Download free BIB sample bibliography files for testing. Multiple file sizes available to test your bibliography management and citation tools.'
          },
          about_description: 'These are test BIB (Bibliography) files in various sizes for testing purposes'
        },
        blend: {
          meta: {
            title: 'Free BLEND Sample Files Download - Test 3D Model Files | MorphyHub',
            description: 'Download free BLEND sample 3D model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D modeling, Blender project files, and 3D format processing tools.',
            keywords: 'BLEND sample files, test BLEND files, download BLEND samples, free BLEND test files, 3D model samples, Blender project files, 3D modeling samples, BLEND conversion test files, .blend test files, 3D graphics samples, Blender file samples'
          },
          schema: {
            name: 'Free BLEND Sample Files - Download Test 3D Model Files',
            description: 'Download free BLEND sample 3D model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D modeling, Blender project files, and 3D format processing tools.'
          },
          hero: {
            title: 'BLEND Sample Files',
            description: 'Download free BLEND sample 3D model files for testing. Multiple file sizes available to test your 3D modeling and Blender project file processing tools.'
          },
          about_description: 'These are test BLEND (Blender 3D) files in various sizes for testing purposes'
        },
        bz2: {
          meta: {
            title: 'Free BZ2 Sample Files Download - Test Compressed Archive Files | MorphyHub',
            description: 'Download free BZ2 sample compressed archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing compression, decompression, and BZ2 archive processing tools.',
            keywords: 'BZ2 sample files, test BZ2 files, download BZ2 samples, free BZ2 test files, compressed archive samples, Bzip2 files, compression samples, BZ2 conversion test files, .bz2 test files, archive decompression samples, file compression samples'
          },
          schema: {
            name: 'Free BZ2 Sample Files - Download Test Compressed Archive Files',
            description: 'Download free BZ2 sample compressed archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing compression, decompression, and BZ2 archive processing tools.'
          },
          hero: {
            title: 'BZ2 Sample Files',
            description: 'Download free BZ2 sample compressed archive files for testing. Multiple file sizes available to test your compression and decompression tools.'
          },
          about_description: 'These are test BZ2 (Bzip2 compressed) archive files in various sizes for testing purposes'
        },
        cab: {
          meta: {
            title: 'Free CAB Sample Files Download - Test Windows Cabinet Files | MorphyHub',
            description: 'Download free CAB sample Windows cabinet archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAB extraction, Windows installation, and cabinet archive processing tools.',
            keywords: 'CAB sample files, test CAB files, download CAB samples, free CAB test files, Windows cabinet samples, CAB archive files, Windows installation samples, CAB conversion test files, .cab test files, archive extraction samples, Windows installer samples'
          },
          schema: {
            name: 'Free CAB Sample Files - Download Test Windows Cabinet Files',
            description: 'Download free CAB sample Windows cabinet archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAB extraction, Windows installation, and cabinet archive processing tools.'
          },
          hero: {
            title: 'CAB Sample Files',
            description: 'Download free CAB sample Windows cabinet archive files for testing. Multiple file sizes available to test your CAB extraction and Windows installation tools.'
          },
          about_description: 'These are test CAB (Windows Cabinet) archive files in various sizes for testing purposes'
        },
        caf: {
          meta: {
            title: 'Free CAF Sample Files Download - Test Apple Core Audio Files | MorphyHub',
            description: 'Download free CAF sample Apple Core Audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion, playback, and CAF format processing tools.',
            keywords: 'CAF sample files, test CAF files, download CAF samples, free CAF test files, audio samples, Apple Core Audio files, audio format samples, CAF conversion test files, .caf test files, audio playback samples, Apple audio samples'
          },
          schema: {
            name: 'Free CAF Sample Files - Download Test Apple Core Audio Files',
            description: 'Download free CAF sample Apple Core Audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion, playback, and CAF format processing tools.'
          },
          hero: {
            title: 'CAF Sample Files',
            description: 'Download free CAF sample Apple Core Audio files for testing. Multiple file sizes available to test your audio conversion and playback tools.'
          },
          about_description: 'These are test CAF (Apple Core Audio Format) audio files in various sizes for testing purposes'
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
        },
        json: {
          meta: {
            title: 'Darmowe przykładowe pliki JSON – Pobierz pliki danych JSON | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki JSON do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania JSON, przetwarzania danych i narzędzi obsługi odpowiedzi API.',
            keywords: 'przykładowe pliki JSON, testowe pliki JSON, pobierz przykłady JSON, darmowe testowe pliki JSON, przykłady danych JSON, przykłady formatów JSON, testowe pliki .json, pliki wymiany danych, testowe pliki parsowania JSON'
          },
          schema: {
            name: 'Darmowe przykładowe pliki JSON – Pobierz testowe pliki danych JSON',
            description: 'Pobierz darmowe przykładowe pliki JSON do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania JSON, przetwarzania danych i narzędzi obsługi odpowiedzi API.'
          },
          hero: {
            title: 'Przykładowe pliki JSON',
            description: 'Pobierz darmowe przykładowe pliki JSON do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania JSON i przetwarzania danych.'
          },
          about_description: 'To są testowe pliki JSON (dane) w różnych rozmiarach do celów testowych'
        },
        java: {
          meta: {
            title: 'Darmowe przykładowe pliki Java – Pobierz pliki kodu źródłowego Java | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki Java do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu Java, sprawdzania składni Java i narzędzi programowania Java.',
            keywords: 'przykładowe pliki Java, testowe pliki Java, pobierz przykłady Java, darmowe testowe pliki Java, przykłady kodu źródłowego Java, przykłady plików Java, testowe pliki .java, pliki programowania Java, testowe pliki kompilacji Java'
          },
          schema: {
            name: 'Darmowe przykładowe pliki Java – Pobierz testowe pliki kodu źródłowego Java',
            description: 'Pobierz darmowe przykładowe pliki Java do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu Java, sprawdzania składni Java i narzędzi programowania Java.'
          },
          hero: {
            title: 'Przykładowe pliki Java',
            description: 'Pobierz darmowe przykładowe pliki Java do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia kompilacji kodu Java i sprawdzania składni Java.'
          },
          about_description: 'To są testowe pliki kodu źródłowego Java w różnych rozmiarach do celów testowych'
        },
        jpeg: {
          meta: {
            title: 'Darmowe przykładowe pliki JPEG – Pobierz pliki obrazów JPEG | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki JPEG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów JPEG, kompresji JPEG i narzędzi przetwarzania obrazów.',
            keywords: 'przykładowe pliki JPEG, testowe pliki JPEG, pobierz przykłady JPEG, darmowe testowe pliki JPEG, przykłady obrazów JPEG, przykłady zdjęć JPEG, testowe pliki .jpeg, pliki kompresji obrazów, testowe pliki konwersji JPEG'
          },
          schema: {
            name: 'Darmowe przykładowe pliki JPEG – Pobierz testowe pliki obrazów JPEG',
            description: 'Pobierz darmowe przykładowe pliki JPEG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów JPEG, kompresji JPEG i narzędzi przetwarzania obrazów.'
          },
          hero: {
            title: 'Przykładowe pliki JPEG',
            description: 'Pobierz darmowe przykładowe pliki JPEG do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji obrazów JPEG i kompresji JPEG.'
          },
          about_description: 'To są testowe pliki obrazów JPEG w różnych rozmiarach do celów testowych'
        },
        jpg: {
          meta: {
            title: 'Darmowe przykładowe pliki JPG – Pobierz pliki obrazów JPG | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki JPG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów JPG, kompresji JPG i narzędzi przetwarzania obrazów.',
            keywords: 'przykładowe pliki JPG, testowe pliki JPG, pobierz przykłady JPG, darmowe testowe pliki JPG, przykłady obrazów JPG, przykłady zdjęć JPG, testowe pliki .jpg, pliki kompresji obrazów, testowe pliki konwersji JPG'
          },
          schema: {
            name: 'Darmowe przykładowe pliki JPG – Pobierz testowe pliki obrazów JPG',
            description: 'Pobierz darmowe przykładowe pliki JPG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów JPG, kompresji JPG i narzędzi przetwarzania obrazów.'
          },
          hero: {
            title: 'Przykładowe pliki JPG',
            description: 'Pobierz darmowe przykładowe pliki JPG do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji obrazów JPG i kompresji JPG.'
          },
          about_description: 'To są testowe pliki obrazów JPG w różnych rozmiarach do celów testowych'
        },
        zip: {
          meta: {
            title: 'Darmowe przykładowe pliki ZIP – Pobierz pliki archiwów | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki ZIP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wyodrębniania archiwów, kompresji i narzędzi archiwizacji plików.',
            keywords: 'przykładowe pliki ZIP, testowe pliki ZIP, pobierz przykłady ZIP, darmowe testowe pliki ZIP, przykłady archiwów, przykłady skompresowanych plików, przykłady archiwów ZIP, testowe pliki .zip, przykłady kompresji plików, testowe pliki wyodrębniania ZIP'
          },
          schema: {
            name: 'Darmowe przykładowe pliki ZIP – Pobierz testowe pliki archiwów',
            description: 'Pobierz darmowe przykładowe pliki ZIP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wyodrębniania archiwów, kompresji i narzędzi archiwizacji plików.'
          },
          hero: {
            title: 'Przykładowe pliki ZIP',
            description: 'Pobierz darmowe przykładowe pliki ZIP do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia wyodrębniania archiwów, kompresji i archiwizacji plików.'
          },
          about_description: 'To są testowe pliki archiwów ZIP w różnych rozmiarach do celów testowych'
        },
        js: {
          meta: {
            title: 'Darmowe przykładowe pliki JS – Pobierz pliki JavaScript | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki JS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania kodu JavaScript, sprawdzania składni JS i narzędzi programowania web.',
            keywords: 'przykładowe pliki JS, testowe pliki JS, pobierz przykłady JS, darmowe testowe pliki JS, przykłady kodu JavaScript, przykłady plików skryptów JS, testowe pliki .js, pliki programowania web, testowe pliki sprawdzania składni JS'
          },
          schema: {
            name: 'Darmowe przykładowe pliki JS – Pobierz testowe pliki JavaScript',
            description: 'Pobierz darmowe przykładowe pliki JS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania kodu JavaScript, sprawdzania składni JS i narzędzi programowania web.'
          },
          hero: {
            title: 'Przykładowe pliki JS',
            description: 'Pobierz darmowe przykładowe pliki JS do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia wykonywania kodu JavaScript i sprawdzania składni JS.'
          },
          about_description: 'To są testowe pliki JavaScript w różnych rozmiarach do celów testowych'
        },
        html: {
          meta: {
            title: 'Darmowe przykładowe pliki HTML – Pobierz pliki HyperText Markup Language | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki HTML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania HTML, programowania web i narzędzi walidacji HTML.',
            keywords: 'przykładowe pliki HTML, testowe pliki HTML, pobierz przykłady HTML, darmowe testowe pliki HTML, przykłady HyperText Markup Language, przykłady stron web HTML, testowe pliki parsowania HTML, testowe pliki .html, przykłady programowania web, pliki walidacji HTML, przykłady edytorów HTML'
          },
          schema: {
            name: 'Darmowe przykładowe pliki HTML – Pobierz testowe pliki HyperText Markup Language',
            description: 'Pobierz darmowe przykładowe pliki HTML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania HTML, programowania web i narzędzi walidacji HTML.'
          },
          hero: {
            title: 'Przykładowe pliki HTML',
            description: 'Pobierz darmowe przykładowe pliki HTML do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania HTML i programowania web.'
          },
          about_description: 'To są testowe pliki HTML w różnych rozmiarach do celów testowych'
        },
        css: {
          meta: {
            title: 'Darmowe przykładowe pliki CSS – Pobierz pliki Cascading Style Sheets | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki CSS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania CSS, stylowania web i narzędzi walidacji CSS.',
            keywords: 'przykładowe pliki CSS, testowe pliki CSS, pobierz przykłady CSS, darmowe testowe pliki CSS, przykłady Cascading Style Sheets, przykłady arkuszy stylów CSS, testowe pliki parsowania CSS, testowe pliki .css, przykłady stylowania web, pliki walidacji CSS, przykłady edytorów CSS'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CSS – Pobierz testowe pliki Cascading Style Sheets',
            description: 'Pobierz darmowe przykładowe pliki CSS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania CSS, stylowania web i narzędzi walidacji CSS.'
          },
          hero: {
            title: 'Przykładowe pliki CSS',
            description: 'Pobierz darmowe przykładowe pliki CSS do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania CSS i stylowania web.'
          },
          about_description: 'To są testowe pliki CSS w różnych rozmiarach do celów testowych'
        },
        md: {
          meta: {
            title: 'Darmowe przykładowe pliki MD – Pobierz pliki Markdown | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki MD do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania Markdown, narzędzi dokumentacji i narzędzi konwersji Markdown.',
            keywords: 'przykładowe pliki MD, testowe pliki MD, pobierz przykłady MD, darmowe testowe pliki MD, przykłady Markdown, przykłady dokumentacji MD, testowe pliki parsowania Markdown, testowe pliki .md, przykłady dokumentacji, pliki konwersji Markdown, przykłady edytorów Markdown'
          },
          schema: {
            name: 'Darmowe przykładowe pliki MD – Pobierz testowe pliki Markdown',
            description: 'Pobierz darmowe przykładowe pliki MD do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania Markdown, narzędzi dokumentacji i narzędzi konwersji Markdown.'
          },
          hero: {
            title: 'Przykładowe pliki MD',
            description: 'Pobierz darmowe przykładowe pliki MD do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania Markdown i dokumentacji.'
          },
          about_description: 'To są testowe pliki Markdown w różnych rozmiarach do celów testowych'
        },
        jsx: {
          meta: {
            title: 'Darmowe przykładowe pliki JSX – Pobierz pliki JSX React | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki JSX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania JSX, programowania React i narzędzi sprawdzania składni JSX.',
            keywords: 'przykładowe pliki JSX, testowe pliki JSX, pobierz przykłady JSX, darmowe testowe pliki JSX, przykłady JSX React, przykłady komponentów JSX, testowe pliki parsowania JSX, testowe pliki .jsx, przykłady programowania React, pliki sprawdzania składni JSX, przykłady edytorów JSX'
          },
          schema: {
            name: 'Darmowe przykładowe pliki JSX – Pobierz testowe pliki JSX React',
            description: 'Pobierz darmowe przykładowe pliki JSX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania JSX, programowania React i narzędzi sprawdzania składni JSX.'
          },
          hero: {
            title: 'Przykładowe pliki JSX',
            description: 'Pobierz darmowe przykładowe pliki JSX do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania JSX i programowania React.'
          },
          about_description: 'To są testowe pliki JSX React w różnych rozmiarach do celów testowych'
        },
        jsonl: {
          meta: {
            title: 'Darmowe przykładowe pliki JSONL – Pobierz pliki JSON Lines | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki JSONL do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania JSONL, przetwarzania danych i narzędzi obsługi JSON Lines.',
            keywords: 'przykładowe pliki JSONL, testowe pliki JSONL, pobierz przykłady JSONL, darmowe testowe pliki JSONL, przykłady JSON Lines, przykłady danych JSONL, testowe pliki parsowania JSONL, testowe pliki .jsonl, przykłady przetwarzania danych, pliki obsługi JSON Lines, przykłady edytorów JSONL'
          },
          schema: {
            name: 'Darmowe przykładowe pliki JSONL – Pobierz testowe pliki JSON Lines',
            description: 'Pobierz darmowe przykładowe pliki JSONL do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania JSONL, przetwarzania danych i narzędzi obsługi JSON Lines.'
          },
          hero: {
            title: 'Przykładowe pliki JSONL',
            description: 'Pobierz darmowe przykładowe pliki JSONL do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania JSONL i przetwarzania danych.'
          },
          about_description: 'To są testowe pliki JSON Lines w różnych rozmiarach do celów testowych'
        },
        cpp: {
          meta: {
            title: 'Darmowe przykładowe pliki CPP – Pobierz pliki kodu źródłowego C++ | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki CPP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C++, sprawdzania składni C++ i narzędzi programowania C++.',
            keywords: 'przykładowe pliki CPP, testowe pliki CPP, pobierz przykłady CPP, darmowe testowe pliki CPP, przykłady kodu źródłowego C++, przykłady plików C++, testowe pliki .cpp, pliki programowania C++, testowe pliki kompilacji C++'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CPP – Pobierz testowe pliki kodu źródłowego C++',
            description: 'Pobierz darmowe przykładowe pliki CPP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C++, sprawdzania składni C++ i narzędzi programowania C++.'
          },
          hero: {
            title: 'Przykładowe pliki CPP',
            description: 'Pobierz darmowe przykładowe pliki CPP do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia kompilacji kodu C++ i sprawdzania składni C++.'
          },
          about_description: 'To są testowe pliki kodu źródłowego C++ w różnych rozmiarach do celów testowych'
        },
        c: {
          meta: {
            title: 'Darmowe przykładowe pliki C – Pobierz pliki kodu źródłowego C | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki C do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C, sprawdzania składni C i narzędzi programowania C.',
            keywords: 'przykładowe pliki C, testowe pliki C, pobierz przykłady C, darmowe testowe pliki C, przykłady kodu źródłowego C, przykłady plików C, testowe pliki .c, pliki programowania C, testowe pliki kompilacji C'
          },
          schema: {
            name: 'Darmowe przykładowe pliki C – Pobierz testowe pliki kodu źródłowego C',
            description: 'Pobierz darmowe przykładowe pliki C do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C, sprawdzania składni C i narzędzi programowania C.'
          },
          hero: {
            title: 'Przykładowe pliki C',
            description: 'Pobierz darmowe przykładowe pliki C do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia kompilacji kodu C i sprawdzania składni C.'
          },
          about_description: 'To są testowe pliki kodu źródłowego C w różnych rozmiarach do celów testowych'
        },
        bmp: {
          meta: {
            title: 'Darmowe przykładowe pliki BMP – Pobierz pliki obrazów BMP | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki BMP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów BMP, kompresji BMP i narzędzi przetwarzania obrazów.',
            keywords: 'przykładowe pliki BMP, testowe pliki BMP, pobierz przykłady BMP, darmowe testowe pliki BMP, przykłady obrazów BMP, przykłady plików bitmap BMP, testowe pliki .bmp, pliki kompresji obrazów, testowe pliki konwersji BMP'
          },
          schema: {
            name: 'Darmowe przykładowe pliki BMP – Pobierz testowe pliki obrazów BMP',
            description: 'Pobierz darmowe przykładowe pliki BMP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów BMP, kompresji BMP i narzędzi przetwarzania obrazów.'
          },
          hero: {
            title: 'Przykładowe pliki BMP',
            description: 'Pobierz darmowe przykładowe pliki BMP do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji obrazów BMP i kompresji BMP.'
          },
          about_description: 'To są testowe pliki obrazów BMP w różnych rozmiarach do celów testowych'
        },
        'animated-gif': {
          meta: {
            title: 'Darmowe przykładowe pliki animowanych GIF – Pobierz pliki animacji | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki animowanych GIF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji animacji GIF, przeglądania i narzędzi przetwarzania formatów animacji.',
            keywords: 'przykładowe pliki animowanych GIF, testowe pliki animowanych GIF, pobierz przykłady animowanych GIF, darmowe testowe pliki animowanych GIF, przykłady animacji GIF, przykłady plików animacji, testowe pliki konwersji animowanych GIF, testowe pliki .gif, przykłady animacji internetowych, przykłady animowanych obrazów'
          },
          schema: {
            name: 'Darmowe przykładowe pliki animowanych GIF – Pobierz testowe pliki animacji',
            description: 'Pobierz darmowe przykładowe pliki animowanych GIF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji animacji GIF, przeglądania i narzędzi przetwarzania formatów animacji.'
          },
          hero: {
            title: 'Przykładowe pliki animowanych GIF',
            description: 'Pobierz darmowe przykładowe pliki animowanych GIF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji animacji GIF, przeglądania i przetwarzania formatów animacji.'
          },
          about_description: 'To są testowe pliki animowanych GIF (Graphics Interchange Format) w różnych rozmiarach do celów testowych'
        },
        apng: {
          meta: {
            title: 'Darmowe przykładowe pliki APNG – Pobierz animowane pliki PNG | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki APNG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji animowanych PNG, przeglądania i narzędzi przetwarzania formatu APNG.',
            keywords: 'przykładowe pliki APNG, testowe pliki APNG, pobierz przykłady APNG, darmowe testowe pliki APNG, przykłady animowanych PNG, przykłady animacji APNG, przykłady animacji obrazów, testowe pliki konwersji APNG, testowe pliki .apng, przykłady animacji internetowych, przykłady animacji PNG'
          },
          schema: {
            name: 'Darmowe przykładowe pliki APNG – Pobierz testowe animowane pliki PNG',
            description: 'Pobierz darmowe przykładowe pliki APNG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji animowanych PNG, przeglądania i narzędzi przetwarzania formatu APNG.'
          },
          hero: {
            title: 'Przykładowe pliki APNG',
            description: 'Pobierz darmowe przykładowe pliki APNG do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji animowanych PNG, przeglądania i przetwarzania formatu APNG.'
          },
          about_description: 'To są testowe pliki APNG (Animated Portable Network Graphics) w różnych rozmiarach do celów testowych'
        },
        avif: {
          meta: {
            title: 'Darmowe przykładowe pliki AVIF – Pobierz pliki obrazów nowej generacji | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki AVIF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji AVIF, przeglądania i narzędzi przetwarzania formatów obrazów nowej generacji.',
            keywords: 'przykładowe pliki AVIF, testowe pliki AVIF, pobierz przykłady AVIF, darmowe testowe pliki AVIF, przykłady obrazów, przykłady formatu obrazów AV1, przykłady obrazów nowej generacji, testowe pliki konwersji AVIF, testowe pliki .avif, przykłady nowoczesnych formatów obrazów, przykłady obrazów internetowych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki AVIF – Pobierz testowe pliki obrazów nowej generacji',
            description: 'Pobierz darmowe przykładowe pliki AVIF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji AVIF, przeglądania i narzędzi przetwarzania formatów obrazów nowej generacji.'
          },
          hero: {
            title: 'Przykładowe pliki AVIF',
            description: 'Pobierz darmowe przykładowe pliki AVIF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji AVIF, przeglądania i przetwarzania formatów obrazów nowej generacji.'
          },
          about_description: 'To są testowe pliki obrazów AVIF (AV1 Image File Format) w różnych rozmiarach do celów testowych'
        },
        avi: {
          meta: {
            title: 'Darmowe przykładowe pliki AVI – Pobierz pliki wideo | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki AVI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji wideo, odtwarzania i narzędzi przetwarzania formatu AVI.',
            keywords: 'przykładowe pliki AVI, testowe pliki AVI, pobierz przykłady AVI, darmowe testowe pliki AVI, przykłady wideo, przykłady Audio Video Interleave, testowe pliki konwersji AVI, testowe pliki .avi, przykłady odtwarzania wideo, przykłady plików multimedialnych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki AVI – Pobierz testowe pliki wideo',
            description: 'Pobierz darmowe przykładowe pliki AVI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji wideo, odtwarzania i narzędzi przetwarzania formatu AVI.'
          },
          hero: {
            title: 'Przykładowe pliki AVI',
            description: 'Pobierz darmowe przykładowe pliki AVI do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji wideo, odtwarzania i przetwarzania formatu AVI.'
          },
          about_description: 'To są testowe pliki wideo AVI (Audio Video Interleave) w różnych rozmiarach do celów testowych'
        },
        bat: {
          meta: {
            title: 'Darmowe przykładowe pliki BAT – Pobierz pliki skryptów wsadowych | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki BAT do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania skryptów wsadowych, automatyzacji Windows i narzędzi przetwarzania wiersza poleceń.',
            keywords: 'przykładowe pliki BAT, testowe pliki BAT, pobierz przykłady BAT, darmowe testowe pliki BAT, przykłady skryptów wsadowych, pliki wsadowe Windows, przykłady skryptów automatyzacji, testowe pliki konwersji BAT, testowe pliki .bat, przykłady skryptów wiersza poleceń, przykłady automatyzacji Windows'
          },
          schema: {
            name: 'Darmowe przykładowe pliki BAT – Pobierz testowe pliki skryptów wsadowych',
            description: 'Pobierz darmowe przykładowe pliki BAT do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania skryptów wsadowych, automatyzacji Windows i narzędzi przetwarzania wiersza poleceń.'
          },
          hero: {
            title: 'Przykładowe pliki BAT',
            description: 'Pobierz darmowe przykładowe pliki BAT do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia wykonywania skryptów wsadowych, automatyzacji Windows i przetwarzania wiersza poleceń.'
          },
          about_description: 'To są testowe pliki skryptów BAT (Batch) w różnych rozmiarach do celów testowych'
        },
        bib: {
          meta: {
            title: 'Darmowe przykładowe pliki BIB – Pobierz pliki bibliografii | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki BIB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania zarządzania bibliografią, narzędzi cytowań i przetwarzania formatu BibTeX.',
            keywords: 'przykładowe pliki BIB, testowe pliki BIB, pobierz przykłady BIB, darmowe testowe pliki BIB, przykłady bibliografii, pliki BibTeX, przykłady cytowań, testowe pliki konwersji BIB, testowe pliki .bib, przykłady zarządzania referencjami, przykłady cytowań akademickich'
          },
          schema: {
            name: 'Darmowe przykładowe pliki BIB – Pobierz testowe pliki bibliografii',
            description: 'Pobierz darmowe przykładowe pliki BIB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania zarządzania bibliografią, narzędzi cytowań i przetwarzania formatu BibTeX.'
          },
          hero: {
            title: 'Przykładowe pliki BIB',
            description: 'Pobierz darmowe przykładowe pliki BIB do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia zarządzania bibliografią i cytowań.'
          },
          about_description: 'To są testowe pliki BIB (Bibliography) w różnych rozmiarach do celów testowych'
        },
        blend: {
          meta: {
            title: 'Darmowe przykładowe pliki BLEND – Pobierz pliki modeli 3D | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki BLEND do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania modelowania 3D, plików projektów Blender i narzędzi przetwarzania formatów 3D.',
            keywords: 'przykładowe pliki BLEND, testowe pliki BLEND, pobierz przykłady BLEND, darmowe testowe pliki BLEND, przykłady modeli 3D, pliki projektów Blender, przykłady modelowania 3D, testowe pliki konwersji BLEND, testowe pliki .blend, przykłady grafiki 3D, przykłady plików Blender'
          },
          schema: {
            name: 'Darmowe przykładowe pliki BLEND – Pobierz testowe pliki modeli 3D',
            description: 'Pobierz darmowe przykładowe pliki BLEND do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania modelowania 3D, plików projektów Blender i narzędzi przetwarzania formatów 3D.'
          },
          hero: {
            title: 'Przykładowe pliki BLEND',
            description: 'Pobierz darmowe przykładowe pliki BLEND do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia modelowania 3D i przetwarzania plików projektów Blender.'
          },
          about_description: 'To są testowe pliki BLEND (Blender 3D) w różnych rozmiarach do celów testowych'
        },
        bz2: {
          meta: {
            title: 'Darmowe przykładowe pliki BZ2 – Pobierz skompresowane pliki archiwum | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki BZ2 do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompresji, dekompresji i narzędzi przetwarzania archiwów BZ2.',
            keywords: 'przykładowe pliki BZ2, testowe pliki BZ2, pobierz przykłady BZ2, darmowe testowe pliki BZ2, przykłady skompresowanych archiwów, pliki Bzip2, przykłady kompresji, testowe pliki konwersji BZ2, testowe pliki .bz2, przykłady dekompresji archiwów, przykłady kompresji plików'
          },
          schema: {
            name: 'Darmowe przykładowe pliki BZ2 – Pobierz testowe skompresowane pliki archiwum',
            description: 'Pobierz darmowe przykładowe pliki BZ2 do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompresji, dekompresji i narzędzi przetwarzania archiwów BZ2.'
          },
          hero: {
            title: 'Przykładowe pliki BZ2',
            description: 'Pobierz darmowe przykładowe pliki BZ2 do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia kompresji i dekompresji.'
          },
          about_description: 'To są testowe pliki archiwów BZ2 (skompresowane Bzip2) w różnych rozmiarach do celów testowych'
        },
        cab: {
          meta: {
            title: 'Darmowe przykładowe pliki CAB – Pobierz pliki archiwów Windows Cabinet | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki CAB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji CAB, instalacji Windows i narzędzi przetwarzania archiwów cabinet.',
            keywords: 'przykładowe pliki CAB, testowe pliki CAB, pobierz przykłady CAB, darmowe testowe pliki CAB, przykłady archiwów Windows cabinet, pliki archiwów CAB, przykłady instalacji Windows, testowe pliki konwersji CAB, testowe pliki .cab, przykłady ekstrakcji archiwów, przykłady instalatorów Windows'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CAB – Pobierz testowe pliki archiwów Windows Cabinet',
            description: 'Pobierz darmowe przykładowe pliki CAB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji CAB, instalacji Windows i narzędzi przetwarzania archiwów cabinet.'
          },
          hero: {
            title: 'Przykładowe pliki CAB',
            description: 'Pobierz darmowe przykładowe pliki CAB do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia ekstrakcji CAB i instalacji Windows.'
          },
          about_description: 'To są testowe pliki archiwów CAB (Windows Cabinet) w różnych rozmiarach do celów testowych'
        },
        caf: {
          meta: {
            title: 'Darmowe przykładowe pliki CAF – Pobierz pliki Apple Core Audio | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki CAF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji audio, odtwarzania i narzędzi przetwarzania formatu CAF.',
            keywords: 'przykładowe pliki CAF, testowe pliki CAF, pobierz przykłady CAF, darmowe testowe pliki CAF, przykłady audio, pliki Apple Core Audio, przykłady formatów audio, testowe pliki konwersji CAF, testowe pliki .caf, przykłady odtwarzania audio, przykłady audio Apple'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CAF – Pobierz testowe pliki Apple Core Audio',
            description: 'Pobierz darmowe przykładowe pliki CAF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji audio, odtwarzania i narzędzi przetwarzania formatu CAF.'
          },
          hero: {
            title: 'Przykładowe pliki CAF',
            description: 'Pobierz darmowe przykładowe pliki CAF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji audio i odtwarzania.'
          },
          about_description: 'To są testowe pliki audio CAF (Apple Core Audio Format) w różnych rozmiarach do celów testowych'
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
        },
        json: {
          meta: {
            title: 'Kostenlose JSON Beispieldateien herunterladen – JSON-Datendateien testen | MorphyHub',
            description: 'Laden Sie kostenlose JSON Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JSON-Parsing, Datenverarbeitung und API-Antwortverarbeitungstools.',
            keywords: 'JSON Beispieldateien, JSON Testdateien, JSON Beispiele herunterladen, kostenlose JSON Testdateien, JSON-Datenbeispiele, JSON-Formatdateien, .json Testdateien, Datenaustauschdateien, JSON-Parsing-Testdateien'
          },
          schema: {
            name: 'Kostenlose JSON Beispieldateien – JSON-Datendateien testen',
            description: 'Laden Sie kostenlose JSON Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JSON-Parsing, Datenverarbeitung und API-Antwortverarbeitungstools.'
          },
          hero: {
            title: 'JSON Beispieldateien',
            description: 'Laden Sie kostenlose JSON Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre JSON-Parsing und Datenverarbeitungstools zu testen.'
          },
          about_description: 'Dies sind JSON (Daten) Testdateien in verschiedenen Größen für Testzwecke'
        },
        java: {
          meta: {
            title: 'Kostenlose Java Beispieldateien herunterladen – Java-Quellcodedateien testen | MorphyHub',
            description: 'Laden Sie kostenlose Java Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Java-Code-Kompilierung, Java-Syntax-Prüfung und Java-Entwicklungstools.',
            keywords: 'Java Beispieldateien, Java Testdateien, Java Beispiele herunterladen, kostenlose Java Testdateien, Java-Quellcodebeispiele, Java-Codedateien, .java Testdateien, Java-Programmierdateien, Java-Kompilierungstestdateien'
          },
          schema: {
            name: 'Kostenlose Java Beispieldateien – Java-Quellcodedateien testen',
            description: 'Laden Sie kostenlose Java Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Java-Code-Kompilierung, Java-Syntax-Prüfung und Java-Entwicklungstools.'
          },
          hero: {
            title: 'Java Beispieldateien',
            description: 'Laden Sie kostenlose Java Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Java-Code-Kompilierung und Java-Syntax-Prüfungstools zu testen.'
          },
          about_description: 'Dies sind Java-Quellcode Testdateien in verschiedenen Größen für Testzwecke'
        },
        jpeg: {
          meta: {
            title: 'Kostenlose JPEG Beispieldateien herunterladen – JPEG-Bilddateien testen | MorphyHub',
            description: 'Laden Sie kostenlose JPEG Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JPEG-Bildkonvertierung, JPEG-Komprimierung und Bildverarbeitungstools.',
            keywords: 'JPEG Beispieldateien, JPEG Testdateien, JPEG Beispiele herunterladen, kostenlose JPEG Testdateien, JPEG-Bildbeispiele, JPEG-Fotodateien, .jpeg Testdateien, Bildkomprimierungsdateien, JPEG-Konvertierungstestdateien'
          },
          schema: {
            name: 'Kostenlose JPEG Beispieldateien – JPEG-Bilddateien testen',
            description: 'Laden Sie kostenlose JPEG Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JPEG-Bildkonvertierung, JPEG-Komprimierung und Bildverarbeitungstools.'
          },
          hero: {
            title: 'JPEG Beispieldateien',
            description: 'Laden Sie kostenlose JPEG Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre JPEG-Bildkonvertierung und JPEG-Komprimierungstools zu testen.'
          },
          about_description: 'Dies sind JPEG-Bild Testdateien in verschiedenen Größen für Testzwecke'
        },
        jpg: {
          meta: {
            title: 'Kostenlose JPG Beispieldateien herunterladen – JPG-Bilddateien testen | MorphyHub',
            description: 'Laden Sie kostenlose JPG Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JPG-Bildkonvertierung, JPG-Komprimierung und Bildverarbeitungstools.',
            keywords: 'JPG Beispieldateien, JPG Testdateien, JPG Beispiele herunterladen, kostenlose JPG Testdateien, JPG-Bildbeispiele, JPG-Fotodateien, .jpg Testdateien, Bildkomprimierungsdateien, JPG-Konvertierungstestdateien'
          },
          schema: {
            name: 'Kostenlose JPG Beispieldateien – JPG-Bilddateien testen',
            description: 'Laden Sie kostenlose JPG Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JPG-Bildkonvertierung, JPG-Komprimierung und Bildverarbeitungstools.'
          },
          hero: {
            title: 'JPG Beispieldateien',
            description: 'Laden Sie kostenlose JPG Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre JPG-Bildkonvertierung und JPG-Komprimierungstools zu testen.'
          },
          about_description: 'Dies sind JPG-Bild Testdateien in verschiedenen Größen für Testzwecke'
        },
        zip: {
          meta: {
            title: 'Kostenlose ZIP Beispieldateien herunterladen – Archivdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose ZIP Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archivextraktion, Komprimierung und Dateiarchivierungstools.',
            keywords: 'ZIP Beispieldateien, ZIP Testdateien, ZIP Beispiele herunterladen, kostenlose ZIP Testdateien, Archivbeispieldateien, komprimierte Dateibeispiele, ZIP-Archivbeispiele, .zip Testdateien, Dateikomprimierungsbeispiele, ZIP-Extraktions-Testdateien'
          },
          schema: {
            name: 'Kostenlose ZIP Beispieldateien – Archivdateien testen',
            description: 'Laden Sie kostenlose ZIP Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archivextraktion, Komprimierung und Dateiarchivierungstools.'
          },
          hero: {
            title: 'ZIP Beispieldateien',
            description: 'Laden Sie kostenlose ZIP Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Archivextraktion, Komprimierung und Dateiarchivierungstools zu testen.'
          },
          about_description: 'Dies sind ZIP-Archiv Testdateien in verschiedenen Größen für Testzwecke'
        },
        js: {
          meta: {
            title: 'Kostenlose JS Beispieldateien herunterladen – JavaScript-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose JS Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JavaScript-Code-Ausführung, JS-Syntax-Prüfung und Webentwicklungstools.',
            keywords: 'JS Beispieldateien, JS Testdateien, JS Beispiele herunterladen, kostenlose JS Testdateien, JavaScript-Codebeispiele, JS-Skriptdateien, .js Testdateien, Webentwicklungsdateien, JS-Syntax-Prüfungs-Testdateien'
          },
          schema: {
            name: 'Kostenlose JS Beispieldateien – JavaScript-Dateien testen',
            description: 'Laden Sie kostenlose JS Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JavaScript-Code-Ausführung, JS-Syntax-Prüfung und Webentwicklungstools.'
          },
          hero: {
            title: 'JS Beispieldateien',
            description: 'Laden Sie kostenlose JS Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre JavaScript-Code-Ausführung und JS-Syntax-Prüfungstools zu testen.'
          },
          about_description: 'Dies sind JavaScript Testdateien in verschiedenen Größen für Testzwecke'
        },
        html: {
          meta: {
            title: 'Kostenlose HTML Beispieldateien herunterladen – HyperText Markup Language-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose HTML Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von HTML-Parsing, Webentwicklung und HTML-Validierungstools.',
            keywords: 'HTML Beispieldateien, HTML Testdateien, HTML Beispiele herunterladen, kostenlose HTML Testdateien, HyperText Markup Language Beispiele, HTML-Webseitenbeispiele, HTML-Parsing-Testdateien, .html Testdateien, Webentwicklungsbeispiele, HTML-Validierungsdateien, HTML-Editor-Beispiele'
          },
          schema: {
            name: 'Kostenlose HTML Beispieldateien – HyperText Markup Language-Dateien testen',
            description: 'Laden Sie kostenlose HTML Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von HTML-Parsing, Webentwicklung und HTML-Validierungstools.'
          },
          hero: {
            title: 'HTML Beispieldateien',
            description: 'Laden Sie kostenlose HTML Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre HTML-Parsing und Webentwicklungstools zu testen.'
          },
          about_description: 'Dies sind HTML Testdateien in verschiedenen Größen für Testzwecke'
        },
        css: {
          meta: {
            title: 'Kostenlose CSS Beispieldateien herunterladen – Cascading Style Sheets-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose CSS Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CSS-Parsing, Web-Styling und CSS-Validierungstools.',
            keywords: 'CSS Beispieldateien, CSS Testdateien, CSS Beispiele herunterladen, kostenlose CSS Testdateien, Cascading Style Sheets Beispiele, CSS-Stylesheet-Beispiele, CSS-Parsing-Testdateien, .css Testdateien, Web-Styling-Beispiele, CSS-Validierungsdateien, CSS-Editor-Beispiele'
          },
          schema: {
            name: 'Kostenlose CSS Beispieldateien – Cascading Style Sheets-Dateien testen',
            description: 'Laden Sie kostenlose CSS Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CSS-Parsing, Web-Styling und CSS-Validierungstools.'
          },
          hero: {
            title: 'CSS Beispieldateien',
            description: 'Laden Sie kostenlose CSS Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre CSS-Parsing und Web-Styling-Tools zu testen.'
          },
          about_description: 'Dies sind CSS Testdateien in verschiedenen Größen für Testzwecke'
        },
        md: {
          meta: {
            title: 'Kostenlose MD Beispieldateien herunterladen – Markdown-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose MD Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Markdown-Parsing, Dokumentationstools und Markdown-Konvertierungstools.',
            keywords: 'MD Beispieldateien, MD Testdateien, MD Beispiele herunterladen, kostenlose MD Testdateien, Markdown Beispiele, MD-Dokumentationsbeispiele, Markdown-Parsing-Testdateien, .md Testdateien, Dokumentationsbeispiele, Markdown-Konvertierungsdateien, Markdown-Editor-Beispiele'
          },
          schema: {
            name: 'Kostenlose MD Beispieldateien – Markdown-Dateien testen',
            description: 'Laden Sie kostenlose MD Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Markdown-Parsing, Dokumentationstools und Markdown-Konvertierungstools.'
          },
          hero: {
            title: 'MD Beispieldateien',
            description: 'Laden Sie kostenlose MD Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Markdown-Parsing und Dokumentationstools zu testen.'
          },
          about_description: 'Dies sind Markdown Testdateien in verschiedenen Größen für Testzwecke'
        },
        jsx: {
          meta: {
            title: 'Kostenlose JSX Beispieldateien herunterladen – JSX React-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose JSX Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JSX-Parsing, React-Entwicklung und JSX-Syntax-Prüfungstools.',
            keywords: 'JSX Beispieldateien, JSX Testdateien, JSX Beispiele herunterladen, kostenlose JSX Testdateien, JSX React Beispiele, JSX-Komponentenbeispiele, JSX-Parsing-Testdateien, .jsx Testdateien, React-Entwicklungsbeispiele, JSX-Syntax-Prüfungsdateien, JSX-Editor-Beispiele'
          },
          schema: {
            name: 'Kostenlose JSX Beispieldateien – JSX React-Dateien testen',
            description: 'Laden Sie kostenlose JSX Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JSX-Parsing, React-Entwicklung und JSX-Syntax-Prüfungstools.'
          },
          hero: {
            title: 'JSX Beispieldateien',
            description: 'Laden Sie kostenlose JSX Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre JSX-Parsing und React-Entwicklungstools zu testen.'
          },
          about_description: 'Dies sind JSX React Testdateien in verschiedenen Größen für Testzwecke'
        },
        jsonl: {
          meta: {
            title: 'Kostenlose JSONL Beispieldateien herunterladen – JSON Lines-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose JSONL Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JSONL-Parsing, Datenverarbeitung und JSON Lines-Verarbeitungstools.',
            keywords: 'JSONL Beispieldateien, JSONL Testdateien, JSONL Beispiele herunterladen, kostenlose JSONL Testdateien, JSON Lines Beispiele, JSONL-Datenbeispiele, JSONL-Parsing-Testdateien, .jsonl Testdateien, Datenverarbeitungsbeispiele, JSON Lines-Verarbeitungsdateien, JSONL-Editor-Beispiele'
          },
          schema: {
            name: 'Kostenlose JSONL Beispieldateien – JSON Lines-Dateien testen',
            description: 'Laden Sie kostenlose JSONL Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JSONL-Parsing, Datenverarbeitung und JSON Lines-Verarbeitungstools.'
          },
          hero: {
            title: 'JSONL Beispieldateien',
            description: 'Laden Sie kostenlose JSONL Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre JSONL-Parsing und Datenverarbeitungstools zu testen.'
          },
          about_description: 'Dies sind JSON Lines Testdateien in verschiedenen Größen für Testzwecke'
        },
        cpp: {
          meta: {
            title: 'Kostenlose CPP Beispieldateien herunterladen – C++-Quellcodedateien testen | MorphyHub',
            description: 'Laden Sie kostenlose CPP Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C++-Code-Kompilierung, C++-Syntax-Prüfung und C++-Entwicklungstools.',
            keywords: 'CPP Beispieldateien, CPP Testdateien, CPP Beispiele herunterladen, kostenlose CPP Testdateien, C++-Quellcodebeispiele, C++-Codedateien, .cpp Testdateien, C++-Programmierdateien, C++-Kompilierungs-Testdateien'
          },
          schema: {
            name: 'Kostenlose CPP Beispieldateien – C++-Quellcodedateien testen',
            description: 'Laden Sie kostenlose CPP Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C++-Code-Kompilierung, C++-Syntax-Prüfung und C++-Entwicklungstools.'
          },
          hero: {
            title: 'CPP Beispieldateien',
            description: 'Laden Sie kostenlose CPP Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre C++-Code-Kompilierung und C++-Syntax-Prüfungstools zu testen.'
          },
          about_description: 'Dies sind C++-Quellcode Testdateien in verschiedenen Größen für Testzwecke'
        },
        c: {
          meta: {
            title: 'Kostenlose C Beispieldateien herunterladen – C-Quellcodedateien testen | MorphyHub',
            description: 'Laden Sie kostenlose C Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C-Code-Kompilierung, C-Syntax-Prüfung und C-Entwicklungstools.',
            keywords: 'C Beispieldateien, C Testdateien, C Beispiele herunterladen, kostenlose C Testdateien, C-Quellcodebeispiele, C-Codedateien, .c Testdateien, C-Programmierdateien, C-Kompilierungs-Testdateien'
          },
          schema: {
            name: 'Kostenlose C Beispieldateien – C-Quellcodedateien testen',
            description: 'Laden Sie kostenlose C Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C-Code-Kompilierung, C-Syntax-Prüfung und C-Entwicklungstools.'
          },
          hero: {
            title: 'C Beispieldateien',
            description: 'Laden Sie kostenlose C Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre C-Code-Kompilierung und C-Syntax-Prüfungstools zu testen.'
          },
          about_description: 'Dies sind C-Quellcode Testdateien in verschiedenen Größen für Testzwecke'
        },
        bmp: {
          meta: {
            title: 'Kostenlose BMP Beispieldateien herunterladen – BMP-Bilddateien testen | MorphyHub',
            description: 'Laden Sie kostenlose BMP Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von BMP-Bildkonvertierung, BMP-Komprimierung und Bildverarbeitungstools.',
            keywords: 'BMP Beispieldateien, BMP Testdateien, BMP Beispiele herunterladen, kostenlose BMP Testdateien, BMP-Bildbeispiele, BMP-Bitmapdateien, .bmp Testdateien, Bildkomprimierungsdateien, BMP-Konvertierungstestdateien'
          },
          schema: {
            name: 'Kostenlose BMP Beispieldateien – BMP-Bilddateien testen',
            description: 'Laden Sie kostenlose BMP Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von BMP-Bildkonvertierung, BMP-Komprimierung und Bildverarbeitungstools.'
          },
          hero: {
            title: 'BMP Beispieldateien',
            description: 'Laden Sie kostenlose BMP Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre BMP-Bildkonvertierung und BMP-Komprimierungstools zu testen.'
          },
          about_description: 'Dies sind BMP-Bild Testdateien in verschiedenen Größen für Testzwecke'
        },
        'animated-gif': {
          meta: {
            title: 'Kostenlose animierte GIF Beispieldateien herunterladen – Animationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose animierte GIF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von GIF-Animation-Konvertierung, Anzeige und Animationsformat-Verarbeitungstools.',
            keywords: 'animierte GIF Beispieldateien, animierte GIF Testdateien, animierte GIF Beispiele herunterladen, kostenlose animierte GIF Testdateien, GIF-Animation Beispiele, Animationsdatei-Beispiele, animierte GIF-Konvertierungstestdateien, .gif Testdateien, Web-Animation Beispiele, animierte Bildbeispiele'
          },
          schema: {
            name: 'Kostenlose animierte GIF Beispieldateien – Animationsdateien testen',
            description: 'Laden Sie kostenlose animierte GIF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von GIF-Animation-Konvertierung, Anzeige und Animationsformat-Verarbeitungstools.'
          },
          hero: {
            title: 'Animierte GIF Beispieldateien',
            description: 'Laden Sie kostenlose animierte GIF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre GIF-Animation-Konvertierung, Anzeige und Animationsformat-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind animierte GIF (Graphics Interchange Format) Testdateien in verschiedenen Größen für Testzwecke'
        },
        apng: {
          meta: {
            title: 'Kostenlose APNG Beispieldateien herunterladen – Animierte PNG-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose APNG animierte PNG-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von animierter PNG-Konvertierung, Anzeige und APNG-Format-Verarbeitungstools.',
            keywords: 'APNG Beispieldateien, APNG Testdateien, APNG Beispiele herunterladen, kostenlose APNG Testdateien, animierte PNG Beispiele, APNG-Animation Beispiele, Bildanimation Beispiele, APNG-Konvertierungstestdateien, .apng Testdateien, Web-Animation Beispiele, PNG-Animation Beispiele'
          },
          schema: {
            name: 'Kostenlose APNG Beispieldateien – Animierte PNG-Dateien testen',
            description: 'Laden Sie kostenlose APNG animierte PNG-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von animierter PNG-Konvertierung, Anzeige und APNG-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'APNG Beispieldateien',
            description: 'Laden Sie kostenlose APNG animierte PNG-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre animierte PNG-Konvertierung, Anzeige und APNG-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind APNG (Animated Portable Network Graphics) Testdateien in verschiedenen Größen für Testzwecke'
        },
        avif: {
          meta: {
            title: 'Kostenlose AVIF Beispieldateien herunterladen – Next-Generation Bilddateien testen | MorphyHub',
            description: 'Laden Sie kostenlose AVIF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von AVIF-Konvertierung, Anzeige und Next-Generation Bildformat-Verarbeitungstools.',
            keywords: 'AVIF Beispieldateien, AVIF Testdateien, AVIF Beispiele herunterladen, kostenlose AVIF Testdateien, Bildbeispiele, AV1-Bildformat Beispiele, Next-Gen Bildbeispiele, AVIF-Konvertierungstestdateien, .avif Testdateien, moderne Bildformat Beispiele, Web-Bildbeispiele'
          },
          schema: {
            name: 'Kostenlose AVIF Beispieldateien – Next-Generation Bilddateien testen',
            description: 'Laden Sie kostenlose AVIF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von AVIF-Konvertierung, Anzeige und Next-Generation Bildformat-Verarbeitungstools.'
          },
          hero: {
            title: 'AVIF Beispieldateien',
            description: 'Laden Sie kostenlose AVIF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre AVIF-Konvertierung, Anzeige und Next-Generation Bildformat-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind AVIF (AV1 Image File Format) Bild-Testdateien in verschiedenen Größen für Testzwecke'
        },
        avi: {
          meta: {
            title: 'Kostenlose AVI Beispieldateien herunterladen – Videodateien testen | MorphyHub',
            description: 'Laden Sie kostenlose AVI Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Videokonvertierung, Wiedergabe und AVI-Format-Verarbeitungstools.',
            keywords: 'AVI Beispieldateien, AVI Testdateien, AVI Beispiele herunterladen, kostenlose AVI Testdateien, Videobeispiele, Audio Video Interleave Beispiele, AVI-Konvertierungstestdateien, .avi Testdateien, Videowiedergabe Beispiele, Multimediadatei-Beispiele'
          },
          schema: {
            name: 'Kostenlose AVI Beispieldateien – Videodateien testen',
            description: 'Laden Sie kostenlose AVI Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Videokonvertierung, Wiedergabe und AVI-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'AVI Beispieldateien',
            description: 'Laden Sie kostenlose AVI Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Videokonvertierung, Wiedergabe und AVI-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind AVI (Audio Video Interleave) Video-Testdateien in verschiedenen Größen für Testzwecke'
        },
        bat: {
          meta: {
            title: 'Kostenlose BAT Beispieldateien herunterladen – Batch-Skriptdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose BAT Batch-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Batch-Skript-Ausführung, Windows-Automatisierung und Befehlszeilen-Verarbeitungstools.',
            keywords: 'BAT Beispieldateien, BAT Testdateien, BAT Beispiele herunterladen, kostenlose BAT Testdateien, Batch-Skript Beispiele, Windows-Batch-Dateien, Automatisierungs-Skript Beispiele, BAT-Konvertierungstestdateien, .bat Testdateien, Befehlszeilen-Skript Beispiele, Windows-Automatisierung Beispiele'
          },
          schema: {
            name: 'Kostenlose BAT Beispieldateien – Batch-Skriptdateien testen',
            description: 'Laden Sie kostenlose BAT Batch-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Batch-Skript-Ausführung, Windows-Automatisierung und Befehlszeilen-Verarbeitungstools.'
          },
          hero: {
            title: 'BAT Beispieldateien',
            description: 'Laden Sie kostenlose BAT Batch-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Batch-Skript-Ausführung, Windows-Automatisierung und Befehlszeilen-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind BAT (Batch) Skript-Testdateien in verschiedenen Größen für Testzwecke'
        },
        bib: {
          meta: {
            title: 'Kostenlose BIB Beispieldateien herunterladen – Bibliographiedateien testen | MorphyHub',
            description: 'Laden Sie kostenlose BIB Bibliographie-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Bibliographieverwaltung, Zitier-Tools und BibTeX-Format-Verarbeitung.',
            keywords: 'BIB Beispieldateien, BIB Testdateien, BIB Beispiele herunterladen, kostenlose BIB Testdateien, Bibliographie Beispiele, BibTeX-Dateien, Zitier-Beispiele, BIB-Konvertierungstestdateien, .bib Testdateien, Referenzverwaltung Beispiele, akademische Zitier-Beispiele'
          },
          schema: {
            name: 'Kostenlose BIB Beispieldateien – Bibliographiedateien testen',
            description: 'Laden Sie kostenlose BIB Bibliographie-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Bibliographieverwaltung, Zitier-Tools und BibTeX-Format-Verarbeitung.'
          },
          hero: {
            title: 'BIB Beispieldateien',
            description: 'Laden Sie kostenlose BIB Bibliographie-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Bibliographieverwaltung und Zitier-Tools zu testen.'
          },
          about_description: 'Dies sind BIB (Bibliography) Testdateien in verschiedenen Größen für Testzwecke'
        },
        blend: {
          meta: {
            title: 'Kostenlose BLEND Beispieldateien herunterladen – 3D-Modelldateien testen | MorphyHub',
            description: 'Laden Sie kostenlose BLEND 3D-Model-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3D-Modellierung, Blender-Projektdateien und 3D-Format-Verarbeitungstools.',
            keywords: 'BLEND Beispieldateien, BLEND Testdateien, BLEND Beispiele herunterladen, kostenlose BLEND Testdateien, 3D-Model Beispiele, Blender-Projektdateien, 3D-Modellierung Beispiele, BLEND-Konvertierungstestdateien, .blend Testdateien, 3D-Grafik Beispiele, Blender-Datei Beispiele'
          },
          schema: {
            name: 'Kostenlose BLEND Beispieldateien – 3D-Modelldateien testen',
            description: 'Laden Sie kostenlose BLEND 3D-Model-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3D-Modellierung, Blender-Projektdateien und 3D-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'BLEND Beispieldateien',
            description: 'Laden Sie kostenlose BLEND 3D-Model-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre 3D-Modellierung und Blender-Projektdatei-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind BLEND (Blender 3D) Testdateien in verschiedenen Größen für Testzwecke'
        },
        bz2: {
          meta: {
            title: 'Kostenlose BZ2 Beispieldateien herunterladen – Komprimierte Archivdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose BZ2 komprimierte Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Komprimierung, Dekomprimierung und BZ2-Archiv-Verarbeitungstools.',
            keywords: 'BZ2 Beispieldateien, BZ2 Testdateien, BZ2 Beispiele herunterladen, kostenlose BZ2 Testdateien, komprimierte Archiv Beispiele, Bzip2-Dateien, Komprimierungs-Beispiele, BZ2-Konvertierungstestdateien, .bz2 Testdateien, Archiv-Dekomprimierung Beispiele, Datei-Komprimierung Beispiele'
          },
          schema: {
            name: 'Kostenlose BZ2 Beispieldateien – Komprimierte Archivdateien testen',
            description: 'Laden Sie kostenlose BZ2 komprimierte Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Komprimierung, Dekomprimierung und BZ2-Archiv-Verarbeitungstools.'
          },
          hero: {
            title: 'BZ2 Beispieldateien',
            description: 'Laden Sie kostenlose BZ2 komprimierte Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Komprimierungs- und Dekomprimierungstools zu testen.'
          },
          about_description: 'Dies sind BZ2 (Bzip2-komprimierte) Archiv-Testdateien in verschiedenen Größen für Testzwecke'
        },
        cab: {
          meta: {
            title: 'Kostenlose CAB Beispieldateien herunterladen – Windows Cabinet-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose CAB Windows Cabinet-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAB-Extraktion, Windows-Installation und Cabinet-Archiv-Verarbeitungstools.',
            keywords: 'CAB Beispieldateien, CAB Testdateien, CAB Beispiele herunterladen, kostenlose CAB Testdateien, Windows Cabinet Beispiele, CAB-Archiv-Dateien, Windows-Installation Beispiele, CAB-Konvertierungstestdateien, .cab Testdateien, Archiv-Extraktion Beispiele, Windows-Installer Beispiele'
          },
          schema: {
            name: 'Kostenlose CAB Beispieldateien – Windows Cabinet-Dateien testen',
            description: 'Laden Sie kostenlose CAB Windows Cabinet-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAB-Extraktion, Windows-Installation und Cabinet-Archiv-Verarbeitungstools.'
          },
          hero: {
            title: 'CAB Beispieldateien',
            description: 'Laden Sie kostenlose CAB Windows Cabinet-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre CAB-Extraktion und Windows-Installationstools zu testen.'
          },
          about_description: 'Dies sind CAB (Windows Cabinet) Archiv-Testdateien in verschiedenen Größen für Testzwecke'
        },
        caf: {
          meta: {
            title: 'Kostenlose CAF Beispieldateien herunterladen – Apple Core Audio-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose CAF Apple Core Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audio-Konvertierung, Wiedergabe und CAF-Format-Verarbeitungstools.',
            keywords: 'CAF Beispieldateien, CAF Testdateien, CAF Beispiele herunterladen, kostenlose CAF Testdateien, Audio-Beispiele, Apple Core Audio-Dateien, Audioformat Beispiele, CAF-Konvertierungstestdateien, .caf Testdateien, Audio-Wiedergabe Beispiele, Apple-Audio Beispiele'
          },
          schema: {
            name: 'Kostenlose CAF Beispieldateien – Apple Core Audio-Dateien testen',
            description: 'Laden Sie kostenlose CAF Apple Core Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audio-Konvertierung, Wiedergabe und CAF-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'CAF Beispieldateien',
            description: 'Laden Sie kostenlose CAF Apple Core Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Audio-Konvertierung und Wiedergabetools zu testen.'
          },
          about_description: 'Dies sind CAF (Apple Core Audio Format) Audio-Testdateien in verschiedenen Größen für Testzwecke'
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

