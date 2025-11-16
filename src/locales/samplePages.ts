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
        lzma: {
          meta: {
            title: 'Free LZMA Sample Files Download - Test LZMA Compressed Files | MorphyHub',
            description: 'Download free LZMA sample LZMA compressed files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing LZMA decompression, archive extraction, and file compression tools.',
            keywords: 'LZMA sample files, test LZMA files, download LZMA samples, free LZMA test files, LZMA compressed archive samples, compressed file samples, .lzma test files, compression format samples'
          },
          schema: {
            name: 'Free LZMA Sample Files - Download Test LZMA Compressed Files',
            description: 'Download free LZMA sample LZMA compressed files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing LZMA decompression, archive extraction, and file compression tools.'
          },
          hero: {
            title: 'LZMA Sample Files',
            description: 'Download free LZMA sample LZMA compressed files for testing. Multiple file sizes available to test your LZMA decompression, archive extraction, and file compression tools.'
          },
          about_description: 'These are test LZMA (Lempel-Ziv-Markov chain Algorithm) compressed archive files in various sizes for testing purposes'
        },
        jwt: {
          meta: {
            title: 'Free JWT Sample Files Download - Test JSON Web Token Files | MorphyHub',
            description: 'Download free JWT sample JSON Web Token files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JWT token parsing, authentication, and API security tools.',
            keywords: 'JWT sample files, test JWT files, download JWT samples, free JWT test files, JSON Web Token samples, JWT token files, .jwt test files, authentication token files, JWT parsing test files'
          },
          schema: {
            name: 'Free JWT Sample Files - Download Test JSON Web Token Files',
            description: 'Download free JWT sample JSON Web Token files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JWT token parsing, authentication, and API security tools.'
          },
          hero: {
            title: 'JWT Sample Files',
            description: 'Download free JWT sample JSON Web Token files for testing. Multiple file sizes available to test your JWT token parsing and authentication tools.'
          },
          about_description: 'These are test JWT (JSON Web Token) files in various sizes for testing purposes'
        },
        kt: {
          meta: {
            title: 'Free KT Sample Files Download - Test Kotlin Source Files | MorphyHub',
            description: 'Download free KT sample Kotlin source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Kotlin compilation, IDE support, and development tools.',
            keywords: 'KT sample files, test KT files, download KT samples, free KT test files, Kotlin source samples, Kotlin code samples, .kt test files, Kotlin programming samples'
          },
          schema: {
            name: 'Free KT Sample Files - Download Test Kotlin Source Files',
            description: 'Download free KT sample Kotlin source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Kotlin compilation, IDE support, and development tools.'
          },
          hero: {
            title: 'KT Sample Files',
            description: 'Download free KT sample Kotlin source code files for testing. Multiple file sizes available to test your Kotlin compilation and development tools.'
          },
          about_description: 'These are test KT (Kotlin) source code files in various sizes for testing purposes'
        },
        ifc: {
          meta: {
            title: 'Free IFC Sample Files Download - Test Industry Foundation Classes Files | MorphyHub',
            description: 'Download free IFC sample Industry Foundation Classes files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing BIM software, IFC conversion, and building information modeling tools.',
            keywords: 'IFC sample files, test IFC files, download IFC samples, free IFC test files, Industry Foundation Classes samples, BIM files, IFC building model files, .ifc test files, building information modeling files, IFC conversion test files'
          },
          schema: {
            name: 'Free IFC Sample Files - Download Test Industry Foundation Classes Files',
            description: 'Download free IFC sample Industry Foundation Classes files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing BIM software, IFC conversion, and building information modeling tools.'
          },
          hero: {
            title: 'IFC Sample Files',
            description: 'Download free IFC sample Industry Foundation Classes files for testing. Multiple file sizes available to test your BIM software and IFC conversion tools.'
          },
          about_description: 'These are test IFC (Industry Foundation Classes) files in various sizes for testing purposes'
        },
        iges: {
          meta: {
            title: 'Free IGES Sample Files Download - Test Initial Graphics Exchange Specification Files | MorphyHub',
            description: 'Download free IGES sample Initial Graphics Exchange Specification files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD software, IGES conversion, and 3D model exchange tools.',
            keywords: 'IGES sample files, test IGES files, download IGES samples, free IGES test files, Initial Graphics Exchange Specification samples, CAD model files, IGES 3D files, .iges test files, CAD exchange files, IGES conversion test files'
          },
          schema: {
            name: 'Free IGES Sample Files - Download Test Initial Graphics Exchange Specification Files',
            description: 'Download free IGES sample Initial Graphics Exchange Specification files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD software, IGES conversion, and 3D model exchange tools.'
          },
          hero: {
            title: 'IGES Sample Files',
            description: 'Download free IGES sample Initial Graphics Exchange Specification files for testing. Multiple file sizes available to test your CAD software and IGES conversion tools.'
          },
          about_description: 'These are test IGES (Initial Graphics Exchange Specification) files in various sizes for testing purposes'
        },
        igs: {
          meta: {
            title: 'Free IGS Sample Files Download - Test Initial Graphics Exchange Specification Files | MorphyHub',
            description: 'Download free IGS sample Initial Graphics Exchange Specification files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD software, IGS conversion, and 3D model exchange tools.',
            keywords: 'IGS sample files, test IGS files, download IGS samples, free IGS test files, Initial Graphics Exchange Specification samples, CAD model files, IGS 3D files, .igs test files, CAD exchange files, IGS conversion test files'
          },
          schema: {
            name: 'Free IGS Sample Files - Download Test Initial Graphics Exchange Specification Files',
            description: 'Download free IGS sample Initial Graphics Exchange Specification files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD software, IGS conversion, and 3D model exchange tools.'
          },
          hero: {
            title: 'IGS Sample Files',
            description: 'Download free IGS sample Initial Graphics Exchange Specification files for testing. Multiple file sizes available to test your CAD software and IGS conversion tools.'
          },
          about_description: 'These are test IGS (Initial Graphics Exchange Specification) files in various sizes for testing purposes'
        },
        img: {
          meta: {
            title: 'Free IMG Sample Files Download - Test Disk Image Files | MorphyHub',
            description: 'Download free IMG sample disk image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing disk image mounting, IMG extraction, and disk image processing tools.',
            keywords: 'IMG sample files, test IMG files, download IMG samples, free IMG test files, disk image samples, IMG disk image files, .img test files, disk image mounting files, IMG extraction test files'
          },
          schema: {
            name: 'Free IMG Sample Files - Download Test Disk Image Files',
            description: 'Download free IMG sample disk image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing disk image mounting, IMG extraction, and disk image processing tools.'
          },
          hero: {
            title: 'IMG Sample Files',
            description: 'Download free IMG sample disk image files for testing. Multiple file sizes available to test your disk image mounting and IMG extraction tools.'
          },
          about_description: 'These are test IMG (disk image) files in various sizes for testing purposes'
        },
        indd: {
          meta: {
            title: 'Free INDD Sample Files Download - Test Adobe InDesign Document Files | MorphyHub',
            description: 'Download free INDD sample Adobe InDesign document files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing InDesign document conversion, INDD viewing, and desktop publishing tools.',
            keywords: 'INDD sample files, test INDD files, download INDD samples, free INDD test files, Adobe InDesign samples, desktop publishing files, INDD document files, .indd test files, InDesign files, INDD conversion test files'
          },
          schema: {
            name: 'Free INDD Sample Files - Download Test Adobe InDesign Document Files',
            description: 'Download free INDD sample Adobe InDesign document files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing InDesign document conversion, INDD viewing, and desktop publishing tools.'
          },
          hero: {
            title: 'INDD Sample Files',
            description: 'Download free INDD sample Adobe InDesign document files for testing. Multiple file sizes available to test your InDesign document conversion and INDD viewing tools.'
          },
          about_description: 'These are test INDD (Adobe InDesign) files in various sizes for testing purposes'
        },
        ini: {
          meta: {
            title: 'Free INI Sample Files Download - Test Configuration Files | MorphyHub',
            description: 'Download free INI sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing INI file parsing, configuration management, and settings file processing tools.',
            keywords: 'INI sample files, test INI files, download INI samples, free INI test files, configuration file samples, INI config files, .ini test files, settings file samples, INI parsing test files'
          },
          schema: {
            name: 'Free INI Sample Files - Download Test Configuration Files',
            description: 'Download free INI sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing INI file parsing, configuration management, and settings file processing tools.'
          },
          hero: {
            title: 'INI Sample Files',
            description: 'Download free INI sample configuration files for testing. Multiple file sizes available to test your INI file parsing and configuration management tools.'
          },
          about_description: 'These are test INI (configuration) files in various sizes for testing purposes'
        },
        intelhex: {
          meta: {
            title: 'Free IntelHex Sample Files Download - Test Intel Hexadecimal Files | MorphyHub',
            description: 'Download free IntelHex sample Intel hexadecimal files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing firmware programming, IntelHex parsing, and embedded systems development tools.',
            keywords: 'IntelHex sample files, test IntelHex files, download IntelHex samples, free IntelHex test files, Intel hexadecimal samples, firmware files, IntelHex hex files, .intelhex test files, embedded systems files, IntelHex parsing test files'
          },
          schema: {
            name: 'Free IntelHex Sample Files - Download Test Intel Hexadecimal Files',
            description: 'Download free IntelHex sample Intel hexadecimal files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing firmware programming, IntelHex parsing, and embedded systems development tools.'
          },
          hero: {
            title: 'IntelHex Sample Files',
            description: 'Download free IntelHex sample Intel hexadecimal files for testing. Multiple file sizes available to test your firmware programming and IntelHex parsing tools.'
          },
          about_description: 'These are test IntelHex (Intel hexadecimal) files in various sizes for testing purposes'
        },
        jar: {
          meta: {
            title: 'Free JAR Sample Files Download - Test Java Archive Files | MorphyHub',
            description: 'Download free JAR sample Java archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java application execution, JAR extraction, and Java development tools.',
            keywords: 'JAR sample files, test JAR files, download JAR samples, free JAR test files, Java archive samples, JAR application files, .jar test files, Java package files, JAR extraction test files'
          },
          schema: {
            name: 'Free JAR Sample Files - Download Test Java Archive Files',
            description: 'Download free JAR sample Java archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java application execution, JAR extraction, and Java development tools.'
          },
          hero: {
            title: 'JAR Sample Files',
            description: 'Download free JAR sample Java archive files for testing. Multiple file sizes available to test your Java application execution and JAR extraction tools.'
          },
          about_description: 'These are test JAR (Java Archive) files in various sizes for testing purposes'
        },
        jks: {
          meta: {
            title: 'Free JKS Sample Files Download - Test Java KeyStore Files | MorphyHub',
            description: 'Download free JKS sample Java KeyStore files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java KeyStore management, JKS parsing, and SSL certificate storage tools.',
            keywords: 'JKS sample files, test JKS files, download JKS samples, free JKS test files, Java KeyStore samples, SSL certificate files, JKS keystore files, .jks test files, Java security files, JKS parsing test files'
          },
          schema: {
            name: 'Free JKS Sample Files - Download Test Java KeyStore Files',
            description: 'Download free JKS sample Java KeyStore files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java KeyStore management, JKS parsing, and SSL certificate storage tools.'
          },
          hero: {
            title: 'JKS Sample Files',
            description: 'Download free JKS sample Java KeyStore files for testing. Multiple file sizes available to test your Java KeyStore management and JKS parsing tools.'
          },
          about_description: 'These are test JKS (Java KeyStore) files in various sizes for testing purposes'
        },
        kml: {
          meta: {
            title: 'Free KML Sample Files Download - Test Keyhole Markup Language Files | MorphyHub',
            description: 'Download free KML sample Keyhole Markup Language geographic data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing geographic visualization, map rendering, and GIS tools.',
            keywords: 'KML sample files, test KML files, download KML samples, free KML test files, Keyhole Markup Language samples, geographic data samples, .kml test files, map data samples'
          },
          schema: {
            name: 'Free KML Sample Files - Download Test Keyhole Markup Language Files',
            description: 'Download free KML sample Keyhole Markup Language geographic data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing geographic visualization, map rendering, and GIS tools.'
          },
          hero: {
            title: 'KML Sample Files',
            description: 'Download free KML sample Keyhole Markup Language geographic data files for testing. Multiple file sizes available to test your geographic visualization and GIS tools.'
          },
          about_description: 'These are test KML (Keyhole Markup Language) geographic data files in various sizes for testing purposes'
        },
        kmz: {
          meta: {
            title: 'Free KMZ Sample Files Download - Test Compressed KML Archive Files | MorphyHub',
            description: 'Download free KMZ sample compressed KML archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing KML archive extraction, geographic data processing, and GIS tools.',
            keywords: 'KMZ sample files, test KMZ files, download KMZ samples, free KMZ test files, compressed KML samples, KML archive samples, .kmz test files, geographic archive samples'
          },
          schema: {
            name: 'Free KMZ Sample Files - Download Test Compressed KML Archive Files',
            description: 'Download free KMZ sample compressed KML archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing KML archive extraction, geographic data processing, and GIS tools.'
          },
          hero: {
            title: 'KMZ Sample Files',
            description: 'Download free KMZ sample compressed KML archive files for testing. Multiple file sizes available to test your KML archive extraction and GIS tools.'
          },
          about_description: 'These are test KMZ (compressed KML archive) files in various sizes for testing purposes'
        },
        laz: {
          meta: {
            title: 'Free LAZ Sample Files Download - Test Compressed LAS Point Cloud Files | MorphyHub',
            description: 'Download free LAZ sample compressed LAS point cloud files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing point cloud processing, 3D scanning data, and LiDAR tools.',
            keywords: 'LAZ sample files, test LAZ files, download LAZ samples, free LAZ test files, compressed LAS samples, point cloud samples, .laz test files, LiDAR data samples'
          },
          schema: {
            name: 'Free LAZ Sample Files - Download Test Compressed LAS Point Cloud Files',
            description: 'Download free LAZ sample compressed LAS point cloud files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing point cloud processing, 3D scanning data, and LiDAR tools.'
          },
          hero: {
            title: 'LAZ Sample Files',
            description: 'Download free LAZ sample compressed LAS point cloud files for testing. Multiple file sizes available to test your point cloud processing and LiDAR tools.'
          },
          about_description: 'These are test LAZ (compressed LAS point cloud) files in various sizes for testing purposes'
        },
        las: {
          meta: {
            title: 'Free LAS Sample Files Download - Test LAS Point Cloud Files | MorphyHub',
            description: 'Download free LAS sample LAS point cloud files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing point cloud visualization, 3D scanning data, and LiDAR tools.',
            keywords: 'LAS sample files, test LAS files, download LAS samples, free LAS test files, point cloud samples, LiDAR data samples, .las test files, 3D scanning samples'
          },
          schema: {
            name: 'Free LAS Sample Files - Download Test LAS Point Cloud Files',
            description: 'Download free LAS sample LAS point cloud files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing point cloud visualization, 3D scanning data, and LiDAR tools.'
          },
          hero: {
            title: 'LAS Sample Files',
            description: 'Download free LAS sample LAS point cloud files for testing. Multiple file sizes available to test your point cloud visualization and LiDAR tools.'
          },
          about_description: 'These are test LAS (point cloud) files in various sizes for testing purposes'
        },
        log: {
          meta: {
            title: 'Free LOG Sample Files Download - Test Log Files | MorphyHub',
            description: 'Download free LOG sample log files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing log parsing, log analysis, and debugging tools.',
            keywords: 'LOG sample files, test LOG files, download LOG samples, free LOG test files, log file samples, log data samples, .log test files, log analysis samples'
          },
          schema: {
            name: 'Free LOG Sample Files - Download Test Log Files',
            description: 'Download free LOG sample log files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing log parsing, log analysis, and debugging tools.'
          },
          hero: {
            title: 'LOG Sample Files',
            description: 'Download free LOG sample log files for testing. Multiple file sizes available to test your log parsing and analysis tools.'
          },
          about_description: 'These are test LOG files in various sizes for testing purposes'
        },
        lua: {
          meta: {
            title: 'Free LUA Sample Files Download - Test Lua Script Files | MorphyHub',
            description: 'Download free LUA sample Lua script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Lua script execution, game development, and automation tools.',
            keywords: 'LUA sample files, test LUA files, download LUA samples, free LUA test files, Lua script samples, Lua code samples, .lua test files, scripting samples'
          },
          schema: {
            name: 'Free LUA Sample Files - Download Test Lua Script Files',
            description: 'Download free LUA sample Lua script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Lua script execution, game development, and automation tools.'
          },
          hero: {
            title: 'LUA Sample Files',
            description: 'Download free LUA sample Lua script files for testing. Multiple file sizes available to test your Lua script execution and automation tools.'
          },
          about_description: 'These are test LUA (Lua script) files in various sizes for testing purposes'
        },
        lha: {
          meta: {
            title: 'Free LHA Sample Files Download - Test LHA Archive Files | MorphyHub',
            description: 'Download free LHA sample LHA archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing LHA archive extraction, compression tools, and legacy archive formats.',
            keywords: 'LHA sample files, test LHA files, download LHA samples, free LHA test files, LHA archive samples, compressed archive samples, .lha test files, archive format samples'
          },
          schema: {
            name: 'Free LHA Sample Files - Download Test LHA Archive Files',
            description: 'Download free LHA sample LHA archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing LHA archive extraction, compression tools, and legacy archive formats.'
          },
          hero: {
            title: 'LHA Sample Files',
            description: 'Download free LHA sample LHA archive files for testing. Multiple file sizes available to test your LHA archive extraction and compression tools.'
          },
          about_description: 'These are test LHA (archive) files in various sizes for testing purposes'
        },
        lzh: {
          meta: {
            title: 'Free LZH Sample Files Download - Test LZH Archive Files | MorphyHub',
            description: 'Download free LZH sample LZH archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing LZH archive extraction, compression tools, and legacy archive formats.',
            keywords: 'LZH sample files, test LZH files, download LZH samples, free LZH test files, LZH archive samples, compressed archive samples, .lzh test files, archive format samples'
          },
          schema: {
            name: 'Free LZH Sample Files - Download Test LZH Archive Files',
            description: 'Download free LZH sample LZH archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing LZH archive extraction, compression tools, and legacy archive formats.'
          },
          hero: {
            title: 'LZH Sample Files',
            description: 'Download free LZH sample LZH archive files for testing. Multiple file sizes available to test your LZH archive extraction and compression tools.'
          },
          about_description: 'These are test LZH (archive) files in various sizes for testing purposes'
        },
        m3u: {
          meta: {
            title: 'Free M3U Sample Files Download - Test M3U Playlist Files | MorphyHub',
            description: 'Download free M3U sample M3U playlist files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M3U playlist parsing, media player compatibility, and audio streaming tools.',
            keywords: 'M3U sample files, test M3U files, download M3U samples, free M3U test files, M3U playlist samples, media player playlist samples, .m3u test files, audio playlist samples'
          },
          schema: {
            name: 'Free M3U Sample Files - Download Test M3U Playlist Files',
            description: 'Download free M3U sample M3U playlist files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M3U playlist parsing, media player compatibility, and audio streaming tools.'
          },
          hero: {
            title: 'M3U Sample Files',
            description: 'Download free M3U sample M3U playlist files for testing. Multiple file sizes available to test your M3U playlist parsing, media player compatibility, and audio streaming tools.'
          },
          about_description: 'These are test M3U (MP3 URL) playlist files in various sizes for testing purposes'
        },
        m3u8: {
          meta: {
            title: 'Free M3U8 Sample Files Download - Test M3U8 HLS Playlist Files | MorphyHub',
            description: 'Download free M3U8 sample M3U8 HLS playlist files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M3U8 playlist parsing, HLS streaming, and video player compatibility tools.',
            keywords: 'M3U8 sample files, test M3U8 files, download M3U8 samples, free M3U8 test files, M3U8 HLS playlist samples, HLS streaming playlist samples, .m3u8 test files, video playlist samples'
          },
          schema: {
            name: 'Free M3U8 Sample Files - Download Test M3U8 HLS Playlist Files',
            description: 'Download free M3U8 sample M3U8 HLS playlist files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M3U8 playlist parsing, HLS streaming, and video player compatibility tools.'
          },
          hero: {
            title: 'M3U8 Sample Files',
            description: 'Download free M3U8 sample M3U8 HLS playlist files for testing. Multiple file sizes available to test your M3U8 playlist parsing, HLS streaming, and video player compatibility tools.'
          },
          about_description: 'These are test M3U8 (HTTP Live Streaming) playlist files in various sizes for testing purposes'
        },
        m4a: {
          meta: {
            title: 'Free M4A Sample Files Download - Test M4A Audio Files | MorphyHub',
            description: 'Download free M4A sample M4A audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M4A audio conversion, M4A playback, and audio processing tools.',
            keywords: 'M4A sample files, test M4A files, download M4A samples, free M4A test files, M4A audio samples, Apple audio format samples, .m4a test files, audio format samples'
          },
          schema: {
            name: 'Free M4A Sample Files - Download Test M4A Audio Files',
            description: 'Download free M4A sample M4A audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M4A audio conversion, M4A playback, and audio processing tools.'
          },
          hero: {
            title: 'M4A Sample Files',
            description: 'Download free M4A sample M4A audio files for testing. Multiple file sizes available to test your M4A audio conversion, M4A playback, and audio processing tools.'
          },
          about_description: 'These are test M4A (MPEG-4 Audio) audio files in various sizes for testing purposes'
        },
        m4v: {
          meta: {
            title: 'Free M4V Sample Files Download - Test M4V Video Files | MorphyHub',
            description: 'Download free M4V sample M4V video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M4V video conversion, M4V playback, and video processing tools.',
            keywords: 'M4V sample files, test M4V files, download M4V samples, free M4V test files, M4V video samples, Apple video format samples, .m4v test files, video format samples'
          },
          schema: {
            name: 'Free M4V Sample Files - Download Test M4V Video Files',
            description: 'Download free M4V sample M4V video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M4V video conversion, M4V playback, and video processing tools.'
          },
          hero: {
            title: 'M4V Sample Files',
            description: 'Download free M4V sample M4V video files for testing. Multiple file sizes available to test your M4V video conversion, M4V playback, and video processing tools.'
          },
          about_description: 'These are test M4V (MPEG-4 Video) video files in various sizes for testing purposes'
        },
        ma: {
          meta: {
            title: 'Free MA Sample Files Download - Test Maya ASCII Scene Files | MorphyHub',
            description: 'Download free MA sample Maya ASCII scene files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Maya scene conversion, MA file parsing, and 3D animation tools.',
            keywords: 'MA sample files, test MA files, download MA samples, free MA test files, Maya ASCII scene samples, 3D animation scene samples, .ma test files, Maya scene samples'
          },
          schema: {
            name: 'Free MA Sample Files - Download Test Maya ASCII Scene Files',
            description: 'Download free MA sample Maya ASCII scene files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Maya scene conversion, MA file parsing, and 3D animation tools.'
          },
          hero: {
            title: 'MA Sample Files',
            description: 'Download free MA sample Maya ASCII scene files for testing. Multiple file sizes available to test your Maya scene conversion, MA file parsing, and 3D animation tools.'
          },
          about_description: 'These are test MA (Maya ASCII) scene files in various sizes for testing purposes'
        },
        makefile: {
          meta: {
            title: 'Free Makefile Sample Files Download - Test Makefile Build Configuration Files | MorphyHub',
            description: 'Download free Makefile sample build configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Makefile parsing, build system automation, and software compilation tools.',
            keywords: 'Makefile sample files, test Makefile files, download Makefile samples, free Makefile test files, build configuration samples, Makefile build samples, Makefile test files, build automation samples'
          },
          schema: {
            name: 'Free Makefile Sample Files - Download Test Makefile Build Configuration Files',
            description: 'Download free Makefile sample build configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Makefile parsing, build system automation, and software compilation tools.'
          },
          hero: {
            title: 'Makefile Sample Files',
            description: 'Download free Makefile sample build configuration files for testing. Multiple file sizes available to test your Makefile parsing, build system automation, and software compilation tools.'
          },
          about_description: 'These are test Makefile build configuration files in various sizes for testing purposes'
        },
        max: {
          meta: {
            title: 'Free MAX Sample Files Download - Test 3ds Max Scene Files | MorphyHub',
            description: 'Download free MAX sample 3ds Max scene files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3ds Max scene conversion, MAX file parsing, and 3D modeling tools.',
            keywords: 'MAX sample files, test MAX files, download MAX samples, free MAX test files, 3ds Max scene samples, 3D modeling scene samples, .max test files, 3ds Max scene samples'
          },
          schema: {
            name: 'Free MAX Sample Files - Download Test 3ds Max Scene Files',
            description: 'Download free MAX sample 3ds Max scene files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3ds Max scene conversion, MAX file parsing, and 3D modeling tools.'
          },
          hero: {
            title: 'MAX Sample Files',
            description: 'Download free MAX sample 3ds Max scene files for testing. Multiple file sizes available to test your 3ds Max scene conversion, MAX file parsing, and 3D modeling tools.'
          },
          about_description: 'These are test MAX (3ds Max) scene files in various sizes for testing purposes'
        },
        mb: {
          meta: {
            title: 'Free MB Sample Files Download - Test Maya Binary Scene Files | MorphyHub',
            description: 'Download free MB sample Maya Binary scene files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Maya scene conversion, MB file parsing, and 3D animation tools.',
            keywords: 'MB sample files, test MB files, download MB samples, free MB test files, Maya Binary scene samples, 3D animation scene samples, .mb test files, Maya scene samples'
          },
          schema: {
            name: 'Free MB Sample Files - Download Test Maya Binary Scene Files',
            description: 'Download free MB sample Maya Binary scene files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Maya scene conversion, MB file parsing, and 3D animation tools.'
          },
          hero: {
            title: 'MB Sample Files',
            description: 'Download free MB sample Maya Binary scene files for testing. Multiple file sizes available to test your Maya scene conversion, MB file parsing, and 3D animation tools.'
          },
          about_description: 'These are test MB (Maya Binary) scene files in various sizes for testing purposes'
        },
        mbtiles: {
          meta: {
            title: 'Free MBTiles Sample Files Download - Test MBTiles Map Database Files | MorphyHub',
            description: 'Download free MBTiles sample map database files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing MBTiles parsing, map tile extraction, and geographic data processing tools.',
            keywords: 'MBTiles sample files, test MBTiles files, download MBTiles samples, free MBTiles test files, MBTiles map database samples, MBTiles geographic files, .mbtiles test files, map tile files, MBTiles parsing test files'
          },
          schema: {
            name: 'Free MBTiles Sample Files - Download Test MBTiles Map Database Files',
            description: 'Download free MBTiles sample map database files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing MBTiles parsing, map tile extraction, and geographic data processing tools.'
          },
          hero: {
            title: 'MBTiles Sample Files',
            description: 'Download free MBTiles sample map database files for testing. Multiple file sizes available to test your MBTiles parsing and map tile extraction tools.'
          },
          about_description: 'These are test MBTiles (map database) files in various sizes for testing purposes'
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
        },
        key: {
          meta: {
            title: 'Free KEY Sample Files Download - Test Private Key Files | MorphyHub',
            description: 'Download free KEY sample private key files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SSL certificate management, key parsing, and cryptographic key storage tools.',
            keywords: 'KEY sample files, test KEY files, download KEY samples, free KEY test files, private key samples, SSL key files, KEY certificate files, .key test files, cryptographic key files, KEY parsing test files'
          },
          schema: {
            name: 'Free KEY Sample Files - Download Test Private Key Files',
            description: 'Download free KEY sample private key files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SSL certificate management, key parsing, and cryptographic key storage tools.'
          },
          hero: {
            title: 'KEY Sample Files',
            description: 'Download free KEY sample private key files for testing. Multiple file sizes available to test your SSL certificate management and key parsing tools.'
          },
          about_description: 'These are test KEY (private key) files in various sizes for testing purposes'
        },
        crx: {
          meta: {
            title: 'Free CRX Sample Files Download - Test Chrome Extension Files | MorphyHub',
            description: 'Download free CRX sample Chrome extension package files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Chrome extension installation, CRX analysis, and browser extension processing tools.',
            keywords: 'CRX sample files, test CRX files, download CRX samples, free CRX test files, Chrome extension samples, browser extension samples, CRX package samples, CRX conversion test files, .crx test files, Chrome extension installation samples, web extension samples'
          },
          schema: {
            name: 'Free CRX Sample Files - Download Test Chrome Extension Files',
            description: 'Download free CRX sample Chrome extension package files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Chrome extension installation, CRX analysis, and browser extension processing tools.'
          },
          hero: {
            title: 'CRX Sample Files',
            description: 'Download free CRX sample Chrome extension package files for testing. Multiple file sizes available to test your Chrome extension installation, CRX analysis, and browser extension processing tools.'
          },
          about_description: 'These are test CRX (Chrome Extension) package files in various sizes for testing purposes'
        },
        hpp: {
          meta: {
            title: 'Free HPP Sample Files Download - Test C++ Header Files | MorphyHub',
            description: 'Download free HPP sample C++ header files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C++ code compilation, header file processing, and development tools.',
            keywords: 'HPP sample files, test HPP files, download HPP samples, free HPP test files, C++ header samples, header file samples, .hpp test files, C++ header files, programming header samples, code header files, C++ development files'
          },
          schema: {
            name: 'Free HPP Sample Files - Download Test C++ Header Files',
            description: 'Download free HPP sample C++ header files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C++ code compilation, header file processing, and development tools.'
          },
          hero: {
            title: 'HPP Sample Files',
            description: 'Download free HPP sample C++ header files for testing. Multiple file sizes available to test your C++ code compilation and header file processing tools.'
          },
          about_description: 'These are test HPP (C++ header) files in various sizes for testing purposes'
        },
        hex: {
          meta: {
            title: 'Free HEX Sample Files Download - Test Hexadecimal Format Files | MorphyHub',
            description: 'Download free HEX sample hexadecimal format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing hexadecimal parsing, binary data analysis, and hex file processing tools.',
            keywords: 'HEX sample files, test HEX files, download HEX samples, free HEX test files, hexadecimal format samples, hex dump samples, HEX parsing test files, .hex test files, binary hex samples, hex editor files, hexadecimal data samples'
          },
          schema: {
            name: 'Free HEX Sample Files - Download Test Hexadecimal Format Files',
            description: 'Download free HEX sample hexadecimal format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing hexadecimal parsing, binary data analysis, and hex file processing tools.'
          },
          hero: {
            title: 'HEX Sample Files',
            description: 'Download free HEX sample hexadecimal format files for testing. Multiple file sizes available to test your hexadecimal parsing and binary data analysis tools.'
          },
          about_description: 'These are test HEX (hexadecimal format) files in various sizes for testing purposes'
        },
        hdr: {
          meta: {
            title: 'Free HDR Sample Files Download - Test High Dynamic Range Image Files | MorphyHub',
            description: 'Download free HDR sample High Dynamic Range image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing HDR image processing, tone mapping, and high dynamic range viewing tools.',
            keywords: 'HDR sample files, test HDR files, download HDR samples, free HDR test files, High Dynamic Range samples, HDR image samples, HDR tone mapping test files, .hdr test files, HDR image processing samples, high dynamic range images, HDR viewer samples'
          },
          schema: {
            name: 'Free HDR Sample Files - Download Test High Dynamic Range Image Files',
            description: 'Download free HDR sample High Dynamic Range image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing HDR image processing, tone mapping, and high dynamic range viewing tools.'
          },
          hero: {
            title: 'HDR Sample Files',
            description: 'Download free HDR sample High Dynamic Range image files for testing. Multiple file sizes available to test your HDR image processing and tone mapping tools.'
          },
          about_description: 'These are test HDR (High Dynamic Range) image files in various sizes for testing purposes'
        },
        h: {
          meta: {
            title: 'Free H Sample Files Download - Test C/C++ Header Files | MorphyHub',
            description: 'Download free H sample C/C++ header files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C/C++ code compilation, header file processing, and development tools.',
            keywords: 'H sample files, test H files, download H samples, free H test files, C header samples, C++ header samples, header file samples, .h test files, C/C++ header files, programming header samples, code header files'
          },
          schema: {
            name: 'Free H Sample Files - Download Test C/C++ Header Files',
            description: 'Download free H sample C/C++ header files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C/C++ code compilation, header file processing, and development tools.'
          },
          hero: {
            title: 'H Sample Files',
            description: 'Download free H sample C/C++ header files for testing. Multiple file sizes available to test your C/C++ code compilation and header file processing tools.'
          },
          about_description: 'These are test H (C/C++ header) files in various sizes for testing purposes'
        },
        gz: {
          meta: {
            title: 'Free GZ Sample Files Download - Test gzip Compressed Archive Files | MorphyHub',
            description: 'Download free GZ sample gzip compressed archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing compression tools, archive extraction, and gzip file processing.',
            keywords: 'GZ sample files, test GZ files, download GZ samples, free GZ test files, gzip compressed samples, archive samples, GZ compression test files, .gz test files, gzip archive samples, compressed file samples, GZ file samples'
          },
          schema: {
            name: 'Free GZ Sample Files - Download Test gzip Compressed Archive Files',
            description: 'Download free GZ sample gzip compressed archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing compression tools, archive extraction, and gzip file processing.'
          },
          hero: {
            title: 'GZ Sample Files',
            description: 'Download free GZ sample gzip compressed archive files for testing. Multiple file sizes available to test your compression tools and archive extraction software.'
          },
          about_description: 'These are test GZ (gzip) compressed archive files in various sizes for testing purposes'
        },
        ace: {
          meta: {
            title: 'Free ACE Sample Files Download - Test Archive Files | MorphyHub',
            description: 'Download free ACE sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction, compression, and ACE format processing tools.',
            keywords: 'ACE sample files, test ACE files, download ACE samples, free ACE test files, archive samples, WinACE samples, compressed file samples, .ace test files, file compression samples, archive format samples'
          },
          schema: {
            name: 'Free ACE Sample Files - Download Test Archive Files',
            description: 'Download free ACE sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction, compression, and ACE format processing tools.'
          },
          hero: {
            title: 'ACE Sample Files',
            description: 'Download free ACE sample archive files for testing. Multiple file sizes available to test your archive extraction, compression, and ACE format processing tools.'
          },
          about_description: 'These are test ACE (WinACE) archive files in various sizes for testing purposes'
        },
        '7z': {
          meta: {
            title: 'Free 7Z Sample Files Download - Test Archive Files | MorphyHub',
            description: 'Download free 7Z sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive conversion, compression, and extraction tools.',
            keywords: '7Z sample files, test 7Z files, download 7Z samples, free 7Z test files, archive samples, 7-Zip samples, compressed file samples, .7z test files, archive conversion samples, file compression samples'
          },
          schema: {
            name: 'Free 7Z Sample Files - Download Test Archives',
            description: 'Download free 7Z sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive conversion and extraction tools.'
          },
          hero: {
            title: '7Z Sample Files',
            description: 'Download free 7Z sample archive files for testing. Multiple file sizes available to test your archive conversion, compression, and extraction tools.'
          },
          about_description: 'These are test 7Z archive files in various sizes for testing purposes'
        },
        '3mf': {
          meta: {
            title: 'Free 3MF Sample Files Download - Test 3D Printing Files | MorphyHub',
            description: 'Download free 3MF sample 3D printing files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D printing conversion, viewing, and 3MF format processing tools.',
            keywords: '3MF sample files, test 3MF files, download 3MF samples, free 3MF test files, 3D printing samples, 3MF format samples, 3D printing conversion test files, .3mf test files, additive manufacturing samples, 3D printer samples'
          },
          schema: {
            name: 'Free 3MF Sample Files - Download Test 3D Printing Files',
            description: 'Download free 3MF sample 3D printing files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D printing conversion, viewing, and 3MF format processing tools.'
          },
          hero: {
            title: '3MF Sample Files',
            description: 'Download free 3MF sample 3D printing files for testing. Multiple file sizes available to test your 3D printing conversion, viewing, and 3MF format processing tools.'
          },
          about_description: 'These are test 3MF (3D Manufacturing Format) 3D printing files in various sizes for testing purposes'
        },
        apk: {
          meta: {
            title: 'Free APK Sample Files Download - Test Android Application Files | MorphyHub',
            description: 'Download free APK sample Android application package files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Android app installation, APK analysis, and mobile application processing tools.',
            keywords: 'APK sample files, test APK files, download APK samples, free APK test files, Android app samples, mobile application samples, APK package samples, APK installation test files, .apk test files, Android application samples, app installation samples'
          },
          schema: {
            name: 'Free APK Sample Files - Download Test Android Application Files',
            description: 'Download free APK sample Android application package files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Android app installation, APK analysis, and mobile application processing tools.'
          },
          hero: {
            title: 'APK Sample Files',
            description: 'Download free APK sample Android application package files for testing. Multiple file sizes available to test your Android app installation, APK analysis, and mobile application processing tools.'
          },
          about_description: 'These are test APK (Android Package) application files in various sizes for testing purposes'
        },
        mkv: {
          meta: {
            title: 'Free MKV Sample Files Download - Test Matroska Video Files | MorphyHub',
            description: 'Download free MKV sample Matroska video container files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video playback, media conversion, and MKV format processing tools.',
            keywords: 'MKV sample files, test MKV files, download MKV samples, free MKV test files, Matroska video samples, video container samples, MKV playback test files, .mkv test files, video format samples, media container samples, MKV video samples'
          },
          schema: {
            name: 'Free MKV Sample Files - Download Test Matroska Video Files',
            description: 'Download free MKV sample Matroska video container files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video playback, media conversion, and MKV format processing tools.'
          },
          hero: {
            title: 'MKV Sample Files',
            description: 'Download free MKV sample Matroska video container files for testing. Multiple file sizes available to test your video playback, media conversion, and MKV format processing tools.'
          },
          about_description: 'These are test MKV (Matroska Video) container files in various sizes for testing purposes'
        },
        midi: {
          meta: {
            title: 'Free MIDI Sample Files Download - Test Musical Instrument Digital Interface Files | MorphyHub',
            description: 'Download free MIDI sample Musical Instrument Digital Interface files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing music synthesis, MIDI playback, and digital music processing tools.',
            keywords: 'MIDI sample files, test MIDI files, download MIDI samples, free MIDI test files, music synthesis samples, MIDI playback samples, digital music samples, .midi test files, .mid test files, music format samples, MIDI music samples'
          },
          schema: {
            name: 'Free MIDI Sample Files - Download Test Musical Instrument Digital Interface Files',
            description: 'Download free MIDI sample Musical Instrument Digital Interface files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing music synthesis, MIDI playback, and digital music processing tools.'
          },
          hero: {
            title: 'MIDI Sample Files',
            description: 'Download free MIDI sample Musical Instrument Digital Interface files for testing. Multiple file sizes available to test your music synthesis, MIDI playback, and digital music processing tools.'
          },
          about_description: 'These are test MIDI (Musical Instrument Digital Interface) files in various sizes for testing purposes'
        },
        mdx: {
          meta: {
            title: 'Free MDX Sample Files Download - Test Markdown Extended Files | MorphyHub',
            description: 'Download free MDX sample Markdown Extended files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing markdown processing, component documentation, and MDX format processing tools.',
            keywords: 'MDX sample files, test MDX files, download MDX samples, free MDX test files, Markdown Extended samples, component documentation samples, MDX processing test files, .mdx test files, markdown format samples, documentation format samples'
          },
          schema: {
            name: 'Free MDX Sample Files - Download Test Markdown Extended Files',
            description: 'Download free MDX sample Markdown Extended files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing markdown processing, component documentation, and MDX format processing tools.'
          },
          hero: {
            title: 'MDX Sample Files',
            description: 'Download free MDX sample Markdown Extended files for testing. Multiple file sizes available to test your markdown processing, component documentation, and MDX format processing tools.'
          },
          about_description: 'These are test MDX (Markdown Extended) files in various sizes for testing purposes'
        },
        ico: {
          meta: {
            title: 'Free ICO Sample Files Download - Test Icon Image Files | MorphyHub',
            description: 'Download free ICO sample icon image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing icon extraction, image conversion, and ICO format processing tools.',
            keywords: 'ICO sample files, test ICO files, download ICO samples, free ICO test files, icon image samples, favicon samples, ICO extraction test files, .ico test files, icon format samples, image format samples, ICO icon samples'
          },
          schema: {
            name: 'Free ICO Sample Files - Download Test Icon Image Files',
            description: 'Download free ICO sample icon image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing icon extraction, image conversion, and ICO format processing tools.'
          },
          hero: {
            title: 'ICO Sample Files',
            description: 'Download free ICO sample icon image files for testing. Multiple file sizes available to test your icon extraction, image conversion, and ICO format processing tools.'
          },
          about_description: 'These are test ICO (Icon) image files in various sizes for testing purposes'
        },
        iso: {
          meta: {
            title: 'Free ISO Sample Files Download - Test Disc Image Files | MorphyHub',
            description: 'Download free ISO sample disc image archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing disc image mounting, ISO extraction, and archive processing tools.',
            keywords: 'ISO sample files, test ISO files, download ISO samples, free ISO test files, disc image samples, ISO archive samples, disc mounting test files, .iso test files, image archive samples, disc format samples, ISO image samples'
          },
          schema: {
            name: 'Free ISO Sample Files - Download Test Disc Image Files',
            description: 'Download free ISO sample disc image archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing disc image mounting, ISO extraction, and archive processing tools.'
          },
          hero: {
            title: 'ISO Sample Files',
            description: 'Download free ISO sample disc image archive files for testing. Multiple file sizes available to test your disc image mounting, ISO extraction, and archive processing tools.'
          },
          about_description: 'These are test ISO (International Organization for Standardization) disc image files in various sizes for testing purposes'
        },
        ipynb: {
          meta: {
            title: 'Free IPYNB Sample Files Download - Test Jupyter Notebook Files | MorphyHub',
            description: 'Download free IPYNB sample Jupyter Notebook files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing notebook execution, data science workflows, and IPYNB format processing tools.',
            keywords: 'IPYNB sample files, test IPYNB files, download IPYNB samples, free IPYNB test files, Jupyter Notebook samples, data science samples, notebook execution test files, .ipynb test files, notebook format samples, data analysis samples'
          },
          schema: {
            name: 'Free IPYNB Sample Files - Download Test Jupyter Notebook Files',
            description: 'Download free IPYNB sample Jupyter Notebook files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing notebook execution, data science workflows, and IPYNB format processing tools.'
          },
          hero: {
            title: 'IPYNB Sample Files',
            description: 'Download free IPYNB sample Jupyter Notebook files for testing. Multiple file sizes available to test your notebook execution, data science workflows, and IPYNB format processing tools.'
          },
          about_description: 'These are test IPYNB (Jupyter Notebook) files in various sizes for testing purposes'
        },
        ipa: {
          meta: {
            title: 'Free IPA Sample Files Download - Test iOS Application Files | MorphyHub',
            description: 'Download free IPA sample iOS application archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing iOS app installation, IPA analysis, and mobile application processing tools.',
            keywords: 'IPA sample files, test IPA files, download IPA samples, free IPA test files, iOS app samples, mobile application samples, IPA package samples, IPA installation test files, .ipa test files, iOS application samples, app archive samples'
          },
          schema: {
            name: 'Free IPA Sample Files - Download Test iOS Application Files',
            description: 'Download free IPA sample iOS application archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing iOS app installation, IPA analysis, and mobile application processing tools.'
          },
          hero: {
            title: 'IPA Sample Files',
            description: 'Download free IPA sample iOS application archive files for testing. Multiple file sizes available to test your iOS app installation, IPA analysis, and mobile application processing tools.'
          },
          about_description: 'These are test IPA (iOS App Store Package) application files in various sizes for testing purposes'
        },
        heif: {
          meta: {
            title: 'Free HEIF Sample Files Download - Test High Efficiency Image Format Files | MorphyHub',
            description: 'Download free HEIF sample High Efficiency Image Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing image compression, HEIF conversion, and modern image format processing tools.',
            keywords: 'HEIF sample files, test HEIF files, download HEIF samples, free HEIF test files, High Efficiency Image Format samples, HEIF image samples, image compression test files, .heif test files, modern image format samples, HEIF conversion samples'
          },
          schema: {
            name: 'Free HEIF Sample Files - Download Test High Efficiency Image Format Files',
            description: 'Download free HEIF sample High Efficiency Image Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing image compression, HEIF conversion, and modern image format processing tools.'
          },
          hero: {
            title: 'HEIF Sample Files',
            description: 'Download free HEIF sample High Efficiency Image Format files for testing. Multiple file sizes available to test your image compression, HEIF conversion, and modern image format processing tools.'
          },
          about_description: 'These are test HEIF (High Efficiency Image Format) files in various sizes for testing purposes'
        },
        heic: {
          meta: {
            title: 'Free HEIC Sample Files Download - Test High Efficiency Image Container Files | MorphyHub',
            description: 'Download free HEIC sample High Efficiency Image Container files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing image compression, HEIC conversion, and modern image format processing tools.',
            keywords: 'HEIC sample files, test HEIC files, download HEIC samples, free HEIC test files, High Efficiency Image Container samples, HEIC image samples, image compression test files, .heic test files, modern image format samples, HEIC conversion samples'
          },
          schema: {
            name: 'Free HEIC Sample Files - Download Test High Efficiency Image Container Files',
            description: 'Download free HEIC sample High Efficiency Image Container files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing image compression, HEIC conversion, and modern image format processing tools.'
          },
          hero: {
            title: 'HEIC Sample Files',
            description: 'Download free HEIC sample High Efficiency Image Container files for testing. Multiple file sizes available to test your image compression, HEIC conversion, and modern image format processing tools.'
          },
          about_description: 'These are test HEIC (High Efficiency Image Container) files in various sizes for testing purposes'
        },
        exr: {
          meta: {
            title: 'Free EXR Sample Files Download - Test OpenEXR Image Files | MorphyHub',
            description: 'Download free EXR sample OpenEXR high dynamic range image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing HDR image processing, EXR conversion, and high dynamic range viewing tools.',
            keywords: 'EXR sample files, test EXR files, download EXR samples, free EXR test files, OpenEXR image samples, HDR image files, EXR image files, .exr test files, high dynamic range images, EXR conversion test files'
          },
          schema: {
            name: 'Free EXR Sample Files - Download Test OpenEXR Image Files',
            description: 'Download free EXR sample OpenEXR high dynamic range image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing HDR image processing, EXR conversion, and high dynamic range viewing tools.'
          },
          hero: {
            title: 'EXR Sample Files',
            description: 'Download free EXR sample OpenEXR high dynamic range image files for testing. Multiple file sizes available to test your HDR image processing, EXR conversion, and high dynamic range viewing tools.'
          },
          about_description: 'These are test EXR (OpenEXR) high dynamic range image files in various sizes for testing purposes'
        },
        exe: {
          meta: {
            title: 'Free EXE Sample Files Download - Test Windows Executable Files | MorphyHub',
            description: 'Download free EXE sample Windows executable application files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing executable analysis, Windows application processing, and binary file handling tools.',
            keywords: 'EXE sample files, test EXE files, download EXE samples, free EXE test files, Windows executable samples, application files, EXE binary samples, .exe test files, executable analysis samples, Windows app samples'
          },
          schema: {
            name: 'Free EXE Sample Files - Download Test Windows Executable Files',
            description: 'Download free EXE sample Windows executable application files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing executable analysis, Windows application processing, and binary file handling tools.'
          },
          hero: {
            title: 'EXE Sample Files',
            description: 'Download free EXE sample Windows executable application files for testing. Multiple file sizes available to test your executable analysis, Windows application processing, and binary file handling tools.'
          },
          about_description: 'These are test EXE (Windows Executable) application files in various sizes for testing purposes'
        },
        eps: {
          meta: {
            title: 'Free EPS Sample Files Download - Test Encapsulated PostScript Files | MorphyHub',
            description: 'Download free EPS sample Encapsulated PostScript vector image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing vector graphics processing, EPS conversion, and PostScript format handling tools.',
            keywords: 'EPS sample files, test EPS files, download EPS samples, free EPS test files, Encapsulated PostScript samples, vector graphics samples, EPS image samples, .eps test files, PostScript format samples, vector format samples'
          },
          schema: {
            name: 'Free EPS Sample Files - Download Test Encapsulated PostScript Files',
            description: 'Download free EPS sample Encapsulated PostScript vector image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing vector graphics processing, EPS conversion, and PostScript format handling tools.'
          },
          hero: {
            title: 'EPS Sample Files',
            description: 'Download free EPS sample Encapsulated PostScript vector image files for testing. Multiple file sizes available to test your vector graphics processing, EPS conversion, and PostScript format handling tools.'
          },
          about_description: 'These are test EPS (Encapsulated PostScript) vector image files in various sizes for testing purposes'
        },
        elf: {
          meta: {
            title: 'Free ELF Sample Files Download - Test Executable and Linkable Format Files | MorphyHub',
            description: 'Download free ELF sample Executable and Linkable Format binary files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing binary analysis, ELF parsing, and executable format processing tools.',
            keywords: 'ELF sample files, test ELF files, download ELF samples, free ELF test files, Executable and Linkable Format samples, binary file samples, ELF executable samples, .elf test files, binary analysis samples, executable format samples'
          },
          schema: {
            name: 'Free ELF Sample Files - Download Test Executable and Linkable Format Files',
            description: 'Download free ELF sample Executable and Linkable Format binary files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing binary analysis, ELF parsing, and executable format processing tools.'
          },
          hero: {
            title: 'ELF Sample Files',
            description: 'Download free ELF sample Executable and Linkable Format binary files for testing. Multiple file sizes available to test your binary analysis, ELF parsing, and executable format processing tools.'
          },
          about_description: 'These are test ELF (Executable and Linkable Format) binary files in various sizes for testing purposes'
        },
        editorconfig: {
          meta: {
            title: 'Free EditorConfig Sample Files Download - Test Editor Configuration Files | MorphyHub',
            description: 'Download free EditorConfig sample editor configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing editor configuration parsing, code formatting tools, and development environment setup.',
            keywords: 'EditorConfig sample files, test EditorConfig files, download EditorConfig samples, free EditorConfig test files, editor configuration samples, .editorconfig test files, code formatting samples, editor settings samples, development config samples'
          },
          schema: {
            name: 'Free EditorConfig Sample Files - Download Test Editor Configuration Files',
            description: 'Download free EditorConfig sample editor configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing editor configuration parsing, code formatting tools, and development environment setup.'
          },
          hero: {
            title: 'EditorConfig Sample Files',
            description: 'Download free EditorConfig sample editor configuration files for testing. Multiple file sizes available to test your editor configuration parsing, code formatting tools, and development environment setup.'
          },
          about_description: 'These are test EditorConfig editor configuration files in various sizes for testing purposes'
        },
        dxf: {
          meta: {
            title: 'Free DXF Sample Files Download - Test AutoCAD Drawing Exchange Format Files | MorphyHub',
            description: 'Download free DXF sample AutoCAD Drawing Exchange Format CAD files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD file processing, DXF conversion, and drawing format handling tools.',
            keywords: 'DXF sample files, test DXF files, download DXF samples, free DXF test files, AutoCAD DXF samples, CAD file samples, DXF drawing samples, .dxf test files, CAD format samples, drawing exchange format samples'
          },
          schema: {
            name: 'Free DXF Sample Files - Download Test AutoCAD Drawing Exchange Format Files',
            description: 'Download free DXF sample AutoCAD Drawing Exchange Format CAD files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD file processing, DXF conversion, and drawing format handling tools.'
          },
          hero: {
            title: 'DXF Sample Files',
            description: 'Download free DXF sample AutoCAD Drawing Exchange Format CAD files for testing. Multiple file sizes available to test your CAD file processing, DXF conversion, and drawing format handling tools.'
          },
          about_description: 'These are test DXF (AutoCAD Drawing Exchange Format) CAD files in various sizes for testing purposes'
        },
        dwg: {
          meta: {
            title: 'Free DWG Sample Files Download - Test AutoCAD Drawing Files | MorphyHub',
            description: 'Download free DWG sample AutoCAD drawing CAD files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD file processing, DWG conversion, and AutoCAD format handling tools.',
            keywords: 'DWG sample files, test DWG files, download DWG samples, free DWG test files, AutoCAD DWG samples, CAD file samples, DWG drawing samples, .dwg test files, CAD format samples, AutoCAD drawing samples'
          },
          schema: {
            name: 'Free DWG Sample Files - Download Test AutoCAD Drawing Files',
            description: 'Download free DWG sample AutoCAD drawing CAD files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD file processing, DWG conversion, and AutoCAD format handling tools.'
          },
          hero: {
            title: 'DWG Sample Files',
            description: 'Download free DWG sample AutoCAD drawing CAD files for testing. Multiple file sizes available to test your CAD file processing, DWG conversion, and AutoCAD format handling tools.'
          },
          about_description: 'These are test DWG (AutoCAD Drawing) CAD files in various sizes for testing purposes'
        },
        dockerfile: {
          meta: {
            title: 'Free Dockerfile Sample Files Download - Test Docker Configuration Files | MorphyHub',
            description: 'Download free Dockerfile sample Docker container configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Docker build processes, container configuration parsing, and DevOps tooling.',
            keywords: 'Dockerfile sample files, test Dockerfile files, download Dockerfile samples, free Dockerfile test files, Docker configuration samples, container config samples, .dockerfile test files, Docker build samples, containerization samples'
          },
          schema: {
            name: 'Free Dockerfile Sample Files - Download Test Docker Configuration Files',
            description: 'Download free Dockerfile sample Docker container configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Docker build processes, container configuration parsing, and DevOps tooling.'
          },
          hero: {
            title: 'Dockerfile Sample Files',
            description: 'Download free Dockerfile sample Docker container configuration files for testing. Multiple file sizes available to test your Docker build processes, container configuration parsing, and DevOps tooling.'
          },
          about_description: 'These are test Dockerfile Docker container configuration files in various sizes for testing purposes'
        },
        'docker-compose-yml': {
          meta: {
            title: 'Free Docker Compose YML Sample Files Download - Test Docker Compose Configuration Files | MorphyHub',
            description: 'Download free Docker Compose YML sample multi-container Docker configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Docker Compose parsing, multi-container orchestration, and DevOps configuration tools.',
            keywords: 'Docker Compose YML sample files, test docker-compose.yml files, download Docker Compose samples, free docker-compose test files, multi-container config samples, Docker orchestration samples, .yml test files, container orchestration samples'
          },
          schema: {
            name: 'Free Docker Compose YML Sample Files - Download Test Docker Compose Configuration Files',
            description: 'Download free Docker Compose YML sample multi-container Docker configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Docker Compose parsing, multi-container orchestration, and DevOps configuration tools.'
          },
          hero: {
            title: 'Docker Compose YML Sample Files',
            description: 'Download free Docker Compose YML sample multi-container Docker configuration files for testing. Multiple file sizes available to test your Docker Compose parsing, multi-container orchestration, and DevOps configuration tools.'
          },
          about_description: 'These are test Docker Compose YML multi-container Docker configuration files in various sizes for testing purposes'
        },
        dmp: {
          meta: {
            title: 'Free DMP Sample Files Download - Test Windows Memory Dump Files | MorphyHub',
            description: 'Download free DMP sample Windows memory dump files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing memory dump analysis, crash debugging, and system diagnostic tools.',
            keywords: 'DMP sample files, test DMP files, download DMP samples, free DMP test files, Windows memory dump samples, crash dump samples, .dmp test files, memory analysis samples, system diagnostic samples'
          },
          schema: {
            name: 'Free DMP Sample Files - Download Test Windows Memory Dump Files',
            description: 'Download free DMP sample Windows memory dump files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing memory dump analysis, crash debugging, and system diagnostic tools.'
          },
          hero: {
            title: 'DMP Sample Files',
            description: 'Download free DMP sample Windows memory dump files for testing. Multiple file sizes available to test your memory dump analysis, crash debugging, and system diagnostic tools.'
          },
          about_description: 'These are test DMP (Windows Memory Dump) files in various sizes for testing purposes'
        },
        dng: {
          meta: {
            title: 'Free DNG Sample Files Download - Test Digital Negative Format Files | MorphyHub',
            description: 'Download free DNG sample Digital Negative raw image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing RAW image processing, DNG conversion, and digital photography workflows.',
            keywords: 'DNG sample files, test DNG files, download DNG samples, free DNG test files, Digital Negative samples, RAW image samples, DNG photo samples, .dng test files, RAW format samples, camera RAW samples'
          },
          schema: {
            name: 'Free DNG Sample Files - Download Test Digital Negative Format Files',
            description: 'Download free DNG sample Digital Negative raw image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing RAW image processing, DNG conversion, and digital photography workflows.'
          },
          hero: {
            title: 'DNG Sample Files',
            description: 'Download free DNG sample Digital Negative raw image files for testing. Multiple file sizes available to test your RAW image processing, DNG conversion, and digital photography workflows.'
          },
          about_description: 'These are test DNG (Digital Negative) raw image files in various sizes for testing purposes'
        },
        dmg: {
          meta: {
            title: 'Free DMG Sample Files Download - Test macOS Disk Image Files | MorphyHub',
            description: 'Download free DMG sample macOS disk image archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing macOS app installation, DMG extraction, and disk image processing tools.',
            keywords: 'DMG sample files, test DMG files, download DMG samples, free DMG test files, macOS disk image samples, Mac app samples, DMG archive samples, .dmg test files, disk image samples, macOS installer samples'
          },
          schema: {
            name: 'Free DMG Sample Files - Download Test macOS Disk Image Files',
            description: 'Download free DMG sample macOS disk image archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing macOS app installation, DMG extraction, and disk image processing tools.'
          },
          hero: {
            title: 'DMG Sample Files',
            description: 'Download free DMG sample macOS disk image archive files for testing. Multiple file sizes available to test your macOS app installation, DMG extraction, and disk image processing tools.'
          },
          about_description: 'These are test DMG (macOS Disk Image) archive files in various sizes for testing purposes'
        },
        der: {
          meta: {
            title: 'Free DER Sample Files Download - Test Distinguished Encoding Rules Certificate Files | MorphyHub',
            description: 'Download free DER sample Distinguished Encoding Rules certificate files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing certificate parsing, SSL/TLS configuration, and cryptographic file processing tools.',
            keywords: 'DER sample files, test DER files, download DER samples, free DER test files, certificate samples, SSL certificate samples, DER certificate samples, .der test files, cryptographic samples, certificate format samples'
          },
          schema: {
            name: 'Free DER Sample Files - Download Test Distinguished Encoding Rules Certificate Files',
            description: 'Download free DER sample Distinguished Encoding Rules certificate files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing certificate parsing, SSL/TLS configuration, and cryptographic file processing tools.'
          },
          hero: {
            title: 'DER Sample Files',
            description: 'Download free DER sample Distinguished Encoding Rules certificate files for testing. Multiple file sizes available to test your certificate parsing, SSL/TLS configuration, and cryptographic file processing tools.'
          },
          about_description: 'These are test DER (Distinguished Encoding Rules) certificate files in various sizes for testing purposes'
        },
        dem: {
          meta: {
            title: 'Free DEM Sample Files Download - Test Digital Elevation Model Files | MorphyHub',
            description: 'Download free DEM sample Digital Elevation Model geographic data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing GIS software, terrain mapping, and elevation data processing tools.',
            keywords: 'DEM sample files, test DEM files, download DEM samples, free DEM test files, Digital Elevation Model samples, GIS data samples, terrain data samples, .dem test files, elevation model samples, geographic data samples'
          },
          schema: {
            name: 'Free DEM Sample Files - Download Test Digital Elevation Model Files',
            description: 'Download free DEM sample Digital Elevation Model geographic data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing GIS software, terrain mapping, and elevation data processing tools.'
          },
          hero: {
            title: 'DEM Sample Files',
            description: 'Download free DEM sample Digital Elevation Model geographic data files for testing. Multiple file sizes available to test your GIS software, terrain mapping, and elevation data processing tools.'
          },
          about_description: 'These are test DEM (Digital Elevation Model) geographic data files in various sizes for testing purposes'
        },
        dds: {
          meta: {
            title: 'Free DDS Sample Files Download - Test DirectDraw Surface Image Files | MorphyHub',
            description: 'Download free DDS sample DirectDraw Surface texture image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing game texture processing, DDS conversion, and graphics engine tools.',
            keywords: 'DDS sample files, test DDS files, download DDS samples, free DDS test files, DirectDraw Surface samples, texture image samples, DDS texture samples, .dds test files, game texture samples, graphics format samples'
          },
          schema: {
            name: 'Free DDS Sample Files - Download Test DirectDraw Surface Image Files',
            description: 'Download free DDS sample DirectDraw Surface texture image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing game texture processing, DDS conversion, and graphics engine tools.'
          },
          hero: {
            title: 'DDS Sample Files',
            description: 'Download free DDS sample DirectDraw Surface texture image files for testing. Multiple file sizes available to test your game texture processing, DDS conversion, and graphics engine tools.'
          },
          about_description: 'These are test DDS (DirectDraw Surface) texture image files in various sizes for testing purposes'
        },
        dbf: {
          meta: {
            title: 'Free DBF Sample Files Download - Test dBASE Database Files | MorphyHub',
            description: 'Download free DBF sample dBASE database table files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing database conversion, DBF parsing, and legacy database format handling tools.',
            keywords: 'DBF sample files, test DBF files, download DBF samples, free DBF test files, dBASE database samples, database table samples, DBF database samples, .dbf test files, legacy database samples, database format samples'
          },
          schema: {
            name: 'Free DBF Sample Files - Download Test dBASE Database Files',
            description: 'Download free DBF sample dBASE database table files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing database conversion, DBF parsing, and legacy database format handling tools.'
          },
          hero: {
            title: 'DBF Sample Files',
            description: 'Download free DBF sample dBASE database table files for testing. Multiple file sizes available to test your database conversion, DBF parsing, and legacy database format handling tools.'
          },
          about_description: 'These are test DBF (dBASE Database) table files in various sizes for testing purposes'
        },
        dav: {
          meta: {
            title: 'Free DAV Sample Files Download - Test DAV Video Files | MorphyHub',
            description: 'Download free DAV sample DAV video surveillance files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video surveillance playback, DAV conversion, and security camera file processing tools.',
            keywords: 'DAV sample files, test DAV files, download DAV samples, free DAV test files, DAV video samples, surveillance video samples, DAV camera samples, .dav test files, security camera samples, video format samples'
          },
          schema: {
            name: 'Free DAV Sample Files - Download Test DAV Video Files',
            description: 'Download free DAV sample DAV video surveillance files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video surveillance playback, DAV conversion, and security camera file processing tools.'
          },
          hero: {
            title: 'DAV Sample Files',
            description: 'Download free DAV sample DAV video surveillance files for testing. Multiple file sizes available to test your video surveillance playback, DAV conversion, and security camera file processing tools.'
          },
          about_description: 'These are test DAV video surveillance files in various sizes for testing purposes'
        },
        'customer-database-sql': {
          meta: {
            title: 'Free Customer Database SQL Sample Files Download - Test SQL Database Files | MorphyHub',
            description: 'Download free Customer Database SQL sample SQL database script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SQL database import, customer data processing, and database management tools.',
            keywords: 'Customer Database SQL sample files, test SQL database files, download SQL samples, free SQL test files, database script samples, customer data samples, SQL import samples, .sql test files, database management samples'
          },
          schema: {
            name: 'Free Customer Database SQL Sample Files - Download Test SQL Database Files',
            description: 'Download free Customer Database SQL sample SQL database script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SQL database import, customer data processing, and database management tools.'
          },
          hero: {
            title: 'Customer Database SQL Sample Files',
            description: 'Download free Customer Database SQL sample SQL database script files for testing. Multiple file sizes available to test your SQL database import, customer data processing, and database management tools.'
          },
          about_description: 'These are test Customer Database SQL database script files in various sizes for testing purposes'
        },
        cue: {
          meta: {
            title: 'Free CUE Sample Files Download - Test CUE Sheet Files | MorphyHub',
            description: 'Download free CUE sample CUE sheet audio disc image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio disc burning, CUE sheet parsing, and CD/DVD image creation tools.',
            keywords: 'CUE sample files, test CUE files, download CUE samples, free CUE test files, CUE sheet samples, audio disc samples, CUE disc image samples, .cue test files, CD image samples, audio format samples'
          },
          schema: {
            name: 'Free CUE Sample Files - Download Test CUE Sheet Files',
            description: 'Download free CUE sample CUE sheet audio disc image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio disc burning, CUE sheet parsing, and CD/DVD image creation tools.'
          },
          hero: {
            title: 'CUE Sample Files',
            description: 'Download free CUE sample CUE sheet audio disc image files for testing. Multiple file sizes available to test your audio disc burning, CUE sheet parsing, and CD/DVD image creation tools.'
          },
          about_description: 'These are test CUE (CUE Sheet) audio disc image files in various sizes for testing purposes'
        },
        csr: {
          meta: {
            title: 'Free CSR Sample Files Download - Test Certificate Signing Request Files | MorphyHub',
            description: 'Download free CSR sample Certificate Signing Request files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SSL certificate generation, CSR parsing, and certificate authority tools.',
            keywords: 'CSR sample files, test CSR files, download CSR samples, free CSR test files, Certificate Signing Request samples, SSL certificate samples, CSR certificate samples, .csr test files, certificate authority samples'
          },
          schema: {
            name: 'Free CSR Sample Files - Download Test Certificate Signing Request Files',
            description: 'Download free CSR sample Certificate Signing Request files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SSL certificate generation, CSR parsing, and certificate authority tools.'
          },
          hero: {
            title: 'CSR Sample Files',
            description: 'Download free CSR sample Certificate Signing Request files for testing. Multiple file sizes available to test your SSL certificate generation, CSR parsing, and certificate authority tools.'
          },
          about_description: 'These are test CSR (Certificate Signing Request) files in various sizes for testing purposes'
        },
        cs: {
          meta: {
            title: 'Free C# Sample Files Download - Test C# Source Code Files | MorphyHub',
            description: 'Download free C# sample C# source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C# code analysis, .NET compilation, and C# development tools.',
            keywords: 'C# sample files, test C# files, download C# samples, free C# test files, C# source code samples, .NET code samples, C# program samples, .cs test files, C# development samples, C# code samples'
          },
          schema: {
            name: 'Free C# Sample Files - Download Test C# Source Code Files',
            description: 'Download free C# sample C# source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C# code analysis, .NET compilation, and C# development tools.'
          },
          hero: {
            title: 'C# Sample Files',
            description: 'Download free C# sample C# source code files for testing. Multiple file sizes available to test your C# code analysis, .NET compilation, and C# development tools.'
          },
          about_description: 'These are test C# source code files in various sizes for testing purposes'
        },
        cpio: {
          meta: {
            title: 'Free CPIO Sample Files Download - Test CPIO Archive Files | MorphyHub',
            description: 'Download free CPIO sample CPIO archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CPIO archive extraction, CPIO compression, and Unix archive tools.',
            keywords: 'CPIO sample files, test CPIO files, download CPIO samples, free CPIO test files, CPIO archive samples, Unix archive samples, CPIO compression samples, .cpio test files, archive format samples'
          },
          schema: {
            name: 'Free CPIO Sample Files - Download Test CPIO Archive Files',
            description: 'Download free CPIO sample CPIO archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CPIO archive extraction, CPIO compression, and Unix archive tools.'
          },
          hero: {
            title: 'CPIO Sample Files',
            description: 'Download free CPIO sample CPIO archive files for testing. Multiple file sizes available to test your CPIO archive extraction, CPIO compression, and Unix archive tools.'
          },
          about_description: 'These are test CPIO (Copy In, Copy Out) archive files in various sizes for testing purposes'
        },
        'config-ini': {
          meta: {
            title: 'Free Config INI Sample Files Download - Test Configuration INI Files | MorphyHub',
            description: 'Download free Config INI sample configuration INI files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing INI file parsing, configuration management, and application settings tools.',
            keywords: 'Config INI sample files, test INI files, download INI samples, free INI test files, configuration INI samples, INI config samples, .ini test files, configuration file samples'
          },
          schema: {
            name: 'Free Config INI Sample Files - Download Test Configuration INI Files',
            description: 'Download free Config INI sample configuration INI files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing INI file parsing, configuration management, and application settings tools.'
          },
          hero: {
            title: 'Config INI Sample Files',
            description: 'Download free Config INI sample configuration INI files for testing. Multiple file sizes available to test your INI file parsing, configuration management, and application settings tools.'
          },
          about_description: 'These are test Config INI configuration files in various sizes for testing purposes'
        },
        conf: {
          meta: {
            title: 'Free CONF Sample Files Download - Test Configuration Files | MorphyHub',
            description: 'Download free CONF sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing configuration file parsing, server configuration, and application settings tools.',
            keywords: 'CONF sample files, test CONF files, download CONF samples, free CONF test files, configuration file samples, server config samples, .conf test files, config file samples'
          },
          schema: {
            name: 'Free CONF Sample Files - Download Test Configuration Files',
            description: 'Download free CONF sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing configuration file parsing, server configuration, and application settings tools.'
          },
          hero: {
            title: 'CONF Sample Files',
            description: 'Download free CONF sample configuration files for testing. Multiple file sizes available to test your configuration file parsing, server configuration, and application settings tools.'
          },
          about_description: 'These are test CONF configuration files in various sizes for testing purposes'
        },
        cmd: {
          meta: {
            title: 'Free CMD Sample Files Download - Test Windows Command Script Files | MorphyHub',
            description: 'Download free CMD sample Windows command script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing batch script execution, Windows command processing, and automation tools.',
            keywords: 'CMD sample files, test CMD files, download CMD samples, free CMD test files, Windows command script samples, batch script samples, .cmd test files, command script samples'
          },
          schema: {
            name: 'Free CMD Sample Files - Download Test Windows Command Script Files',
            description: 'Download free CMD sample Windows command script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing batch script execution, Windows command processing, and automation tools.'
          },
          hero: {
            title: 'CMD Sample Files',
            description: 'Download free CMD sample Windows command script files for testing. Multiple file sizes available to test your batch script execution, Windows command processing, and automation tools.'
          },
          about_description: 'These are test CMD (Windows Command Script) files in various sizes for testing purposes'
        },
        'can-log': {
          meta: {
            title: 'Free CAN Log Sample Files Download - Test Controller Area Network Log Files | MorphyHub',
            description: 'Download free CAN Log sample Controller Area Network log files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAN bus analysis, automotive diagnostics, and network protocol tools.',
            keywords: 'CAN Log sample files, test CAN log files, download CAN log samples, free CAN log test files, Controller Area Network samples, CAN bus samples, .log test files, automotive diagnostic samples'
          },
          schema: {
            name: 'Free CAN Log Sample Files - Download Test Controller Area Network Log Files',
            description: 'Download free CAN Log sample Controller Area Network log files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAN bus analysis, automotive diagnostics, and network protocol tools.'
          },
          hero: {
            title: 'CAN Log Sample Files',
            description: 'Download free CAN Log sample Controller Area Network log files for testing. Multiple file sizes available to test your CAN bus analysis, automotive diagnostics, and network protocol tools.'
          },
          about_description: 'These are test CAN Log (Controller Area Network) log files in various sizes for testing purposes'
        },
        bvh: {
          meta: {
            title: 'Free BVH Sample Files Download - Test BioVision Hierarchy Motion Capture Files | MorphyHub',
            description: 'Download free BVH sample BioVision Hierarchy motion capture files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing motion capture playback, 3D animation, and character rigging tools.',
            keywords: 'BVH sample files, test BVH files, download BVH samples, free BVH test files, BioVision Hierarchy samples, motion capture samples, BVH animation samples, .bvh test files, 3D animation samples'
          },
          schema: {
            name: 'Free BVH Sample Files - Download Test BioVision Hierarchy Motion Capture Files',
            description: 'Download free BVH sample BioVision Hierarchy motion capture files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing motion capture playback, 3D animation, and character rigging tools.'
          },
          hero: {
            title: 'BVH Sample Files',
            description: 'Download free BVH sample BioVision Hierarchy motion capture files for testing. Multiple file sizes available to test your motion capture playback, 3D animation, and character rigging tools.'
          },
          about_description: 'These are test BVH (BioVision Hierarchy) motion capture files in various sizes for testing purposes'
        },
        'barcode-svg': {
          meta: {
            title: 'Free Barcode SVG Sample Files Download - Test Barcode SVG Image Files | MorphyHub',
            description: 'Download free Barcode SVG sample barcode SVG vector image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing barcode scanning, SVG rendering, and vector graphics tools.',
            keywords: 'Barcode SVG sample files, test barcode SVG files, download barcode SVG samples, free barcode SVG test files, barcode image samples, SVG barcode samples, .svg test files, vector barcode samples'
          },
          schema: {
            name: 'Free Barcode SVG Sample Files - Download Test Barcode SVG Image Files',
            description: 'Download free Barcode SVG sample barcode SVG vector image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing barcode scanning, SVG rendering, and vector graphics tools.'
          },
          hero: {
            title: 'Barcode SVG Sample Files',
            description: 'Download free Barcode SVG sample barcode SVG vector image files for testing. Multiple file sizes available to test your barcode scanning, SVG rendering, and vector graphics tools.'
          },
          about_description: 'These are test Barcode SVG vector image files in various sizes for testing purposes'
        },
        assetbundle: {
          meta: {
            title: 'Free AssetBundle Sample Files Download - Test Unity AssetBundle Files | MorphyHub',
            description: 'Download free AssetBundle sample Unity AssetBundle archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Unity asset loading, game asset management, and Unity development tools.',
            keywords: 'AssetBundle sample files, test AssetBundle files, download AssetBundle samples, free AssetBundle test files, Unity AssetBundle samples, game asset samples, .assetbundle test files, Unity asset samples'
          },
          schema: {
            name: 'Free AssetBundle Sample Files - Download Test Unity AssetBundle Files',
            description: 'Download free AssetBundle sample Unity AssetBundle archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Unity asset loading, game asset management, and Unity development tools.'
          },
          hero: {
            title: 'AssetBundle Sample Files',
            description: 'Download free AssetBundle sample Unity AssetBundle archive files for testing. Multiple file sizes available to test your Unity asset loading, game asset management, and Unity development tools.'
          },
          about_description: 'These are test AssetBundle Unity archive files in various sizes for testing purposes'
        },
        ase: {
          meta: {
            title: 'Free ASE Sample Files Download - Test Adobe Swatch Exchange Files | MorphyHub',
            description: 'Download free ASE sample Adobe Swatch Exchange color palette files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing color palette import, design software integration, and color management tools.',
            keywords: 'ASE sample files, test ASE files, download ASE samples, free ASE test files, Adobe Swatch Exchange samples, color palette samples, ASE color samples, .ase test files, design color samples'
          },
          schema: {
            name: 'Free ASE Sample Files - Download Test Adobe Swatch Exchange Files',
            description: 'Download free ASE sample Adobe Swatch Exchange color palette files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing color palette import, design software integration, and color management tools.'
          },
          hero: {
            title: 'ASE Sample Files',
            description: 'Download free ASE sample Adobe Swatch Exchange color palette files for testing. Multiple file sizes available to test your color palette import, design software integration, and color management tools.'
          },
          about_description: 'These are test ASE (Adobe Swatch Exchange) color palette files in various sizes for testing purposes'
        },
        asc: {
          meta: {
            title: 'Free ASC Sample Files Download - Test ASCII Text Files | MorphyHub',
            description: 'Download free ASC sample ASCII text files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing text processing, ASCII encoding, and plain text file handling tools.',
            keywords: 'ASC sample files, test ASC files, download ASC samples, free ASC test files, ASCII text samples, plain text samples, ASC file samples, .asc test files, text format samples'
          },
          schema: {
            name: 'Free ASC Sample Files - Download Test ASCII Text Files',
            description: 'Download free ASC sample ASCII text files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing text processing, ASCII encoding, and plain text file handling tools.'
          },
          hero: {
            title: 'ASC Sample Files',
            description: 'Download free ASC sample ASCII text files for testing. Multiple file sizes available to test your text processing, ASCII encoding, and plain text file handling tools.'
          },
          about_description: 'These are test ASC (ASCII Text) files in various sizes for testing purposes'
        },
        arj: {
          meta: {
            title: 'Free ARJ Sample Files Download - Test ARJ Archive Files | MorphyHub',
            description: 'Download free ARJ sample ARJ compressed archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction, ARJ compression, and legacy archive format tools.',
            keywords: 'ARJ sample files, test ARJ files, download ARJ samples, free ARJ test files, ARJ archive samples, compressed archive samples, ARJ archive samples, .arj test files, legacy archive samples'
          },
          schema: {
            name: 'Free ARJ Sample Files - Download Test ARJ Archive Files',
            description: 'Download free ARJ sample ARJ compressed archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction, ARJ compression, and legacy archive format tools.'
          },
          hero: {
            title: 'ARJ Sample Files',
            description: 'Download free ARJ sample ARJ compressed archive files for testing. Multiple file sizes available to test your archive extraction, ARJ compression, and legacy archive format tools.'
          },
          about_description: 'These are test ARJ (ARJ Archive) compressed archive files in various sizes for testing purposes'
        },
        'arduino-ino': {
          meta: {
            title: 'Free Arduino INO Sample Files Download - Test Arduino Sketch Files | MorphyHub',
            description: 'Download free Arduino INO sample Arduino sketch source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Arduino development, sketch compilation, and embedded programming tools.',
            keywords: 'Arduino INO sample files, test Arduino INO files, download Arduino INO samples, free Arduino INO test files, Arduino sketch samples, embedded code samples, Arduino .ino samples, .ino test files, microcontroller samples'
          },
          schema: {
            name: 'Free Arduino INO Sample Files - Download Test Arduino Sketch Files',
            description: 'Download free Arduino INO sample Arduino sketch source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Arduino development, sketch compilation, and embedded programming tools.'
          },
          hero: {
            title: 'Arduino INO Sample Files',
            description: 'Download free Arduino INO sample Arduino sketch source code files for testing. Multiple file sizes available to test your Arduino development, sketch compilation, and embedded programming tools.'
          },
          about_description: 'These are test Arduino INO (Arduino Sketch) source code files in various sizes for testing purposes'
        },
        appimage: {
          meta: {
            title: 'Free AppImage Sample Files Download - Test AppImage Application Files | MorphyHub',
            description: 'Download free AppImage sample AppImage portable Linux application files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Linux app installation, AppImage execution, and portable application tools.',
            keywords: 'AppImage sample files, test AppImage files, download AppImage samples, free AppImage test files, Linux app samples, portable app samples, AppImage application samples, .appimage test files, Linux executable samples'
          },
          schema: {
            name: 'Free AppImage Sample Files - Download Test AppImage Application Files',
            description: 'Download free AppImage sample AppImage portable Linux application files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Linux app installation, AppImage execution, and portable application tools.'
          },
          hero: {
            title: 'AppImage Sample Files',
            description: 'Download free AppImage sample AppImage portable Linux application files for testing. Multiple file sizes available to test your Linux app installation, AppImage execution, and portable application tools.'
          },
          about_description: 'These are test AppImage portable Linux application files in various sizes for testing purposes'
        },
        'animation-fbx': {
          meta: {
            title: 'Free Animation FBX Sample Files Download - Test FBX 3D Animation Files | MorphyHub',
            description: 'Download free Animation FBX sample FBX 3D animation and model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D animation playback, FBX import, and 3D modeling tools.',
            keywords: 'Animation FBX sample files, test FBX animation files, download FBX animation samples, free FBX animation test files, 3D animation samples, FBX model samples, FBX animation samples, .fbx test files, 3D model samples'
          },
          schema: {
            name: 'Free Animation FBX Sample Files - Download Test FBX 3D Animation Files',
            description: 'Download free Animation FBX sample FBX 3D animation and model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D animation playback, FBX import, and 3D modeling tools.'
          },
          hero: {
            title: 'Animation FBX Sample Files',
            description: 'Download free Animation FBX sample FBX 3D animation and model files for testing. Multiple file sizes available to test your 3D animation playback, FBX import, and 3D modeling tools.'
          },
          about_description: 'These are test Animation FBX (FBX 3D Animation) files in various sizes for testing purposes'
        },
        amr: {
          meta: {
            title: 'Free AMR Sample Files Download - Test AMR Audio Files | MorphyHub',
            description: 'Download free AMR sample AMR Adaptive Multi-Rate audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio playback, AMR conversion, and voice recording format tools.',
            keywords: 'AMR sample files, test AMR files, download AMR samples, free AMR test files, AMR audio samples, voice recording samples, AMR sound samples, .amr test files, audio format samples'
          },
          schema: {
            name: 'Free AMR Sample Files - Download Test AMR Audio Files',
            description: 'Download free AMR sample AMR Adaptive Multi-Rate audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio playback, AMR conversion, and voice recording format tools.'
          },
          hero: {
            title: 'AMR Sample Files',
            description: 'Download free AMR sample AMR Adaptive Multi-Rate audio files for testing. Multiple file sizes available to test your audio playback, AMR conversion, and voice recording format tools.'
          },
          about_description: 'These are test AMR (Adaptive Multi-Rate) audio files in various sizes for testing purposes'
        },
        aiff: {
          meta: {
            title: 'Free AIFF Sample Files Download - Test AIFF Audio Files | MorphyHub',
            description: 'Download free AIFF sample AIFF Audio Interchange File Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio playback, AIFF conversion, and professional audio format tools.',
            keywords: 'AIFF sample files, test AIFF files, download AIFF samples, free AIFF test files, AIFF audio samples, professional audio samples, AIFF sound samples, .aiff test files, audio format samples'
          },
          schema: {
            name: 'Free AIFF Sample Files - Download Test AIFF Audio Files',
            description: 'Download free AIFF sample AIFF Audio Interchange File Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio playback, AIFF conversion, and professional audio format tools.'
          },
          hero: {
            title: 'AIFF Sample Files',
            description: 'Download free AIFF sample AIFF Audio Interchange File Format files for testing. Multiple file sizes available to test your audio playback, AIFF conversion, and professional audio format tools.'
          },
          about_description: 'These are test AIFF (Audio Interchange File Format) audio files in various sizes for testing purposes'
        },
        aif: {
          meta: {
            title: 'Free AIF Sample Files Download - Test AIF Audio Files | MorphyHub',
            description: 'Download free AIF sample AIF Audio Interchange File Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio playback, AIF conversion, and professional audio format tools.',
            keywords: 'AIF sample files, test AIF files, download AIF samples, free AIF test files, AIF audio samples, professional audio samples, AIF sound samples, .aif test files, audio format samples'
          },
          schema: {
            name: 'Free AIF Sample Files - Download Test AIF Audio Files',
            description: 'Download free AIF sample AIF Audio Interchange File Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio playback, AIF conversion, and professional audio format tools.'
          },
          hero: {
            title: 'AIF Sample Files',
            description: 'Download free AIF sample AIF Audio Interchange File Format files for testing. Multiple file sizes available to test your audio playback, AIF conversion, and professional audio format tools.'
          },
          about_description: 'These are test AIF (Audio Interchange File Format) audio files in various sizes for testing purposes'
        },
        ai: {
          meta: {
            title: 'Free AI Sample Files Download - Test Adobe Illustrator Files | MorphyHub',
            description: 'Download free AI sample Adobe Illustrator vector graphics files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing vector graphics viewing, AI conversion, and illustration design tools.',
            keywords: 'AI sample files, test AI files, download AI samples, free AI test files, Adobe Illustrator samples, vector graphics samples, AI illustration samples, .ai test files, design format samples'
          },
          schema: {
            name: 'Free AI Sample Files - Download Test Adobe Illustrator Files',
            description: 'Download free AI sample Adobe Illustrator vector graphics files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing vector graphics viewing, AI conversion, and illustration design tools.'
          },
          hero: {
            title: 'AI Sample Files',
            description: 'Download free AI sample Adobe Illustrator vector graphics files for testing. Multiple file sizes available to test your vector graphics viewing, AI conversion, and illustration design tools.'
          },
          about_description: 'These are test AI (Adobe Illustrator) vector graphics files in various sizes for testing purposes'
        },
        ac3: {
          meta: {
            title: 'Free AC3 Sample Files Download - Test AC3 Audio Files | MorphyHub',
            description: 'Download free AC3 sample AC3 Dolby Digital audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio playback, AC3 conversion, and surround sound format tools.',
            keywords: 'AC3 sample files, test AC3 files, download AC3 samples, free AC3 test files, AC3 audio samples, Dolby Digital samples, AC3 sound samples, .ac3 test files, audio format samples'
          },
          schema: {
            name: 'Free AC3 Sample Files - Download Test AC3 Audio Files',
            description: 'Download free AC3 sample AC3 Dolby Digital audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio playback, AC3 conversion, and surround sound format tools.'
          },
          hero: {
            title: 'AC3 Sample Files',
            description: 'Download free AC3 sample AC3 Dolby Digital audio files for testing. Multiple file sizes available to test your audio playback, AC3 conversion, and surround sound format tools.'
          },
          about_description: 'These are test AC3 (Dolby Digital) audio files in various sizes for testing purposes'
        },
        '3ds': {
          meta: {
            title: 'Free 3DS Sample Files Download - Test 3D Studio Mesh Files | MorphyHub',
            description: 'Download free 3DS sample 3D Studio mesh and model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D model viewing, 3DS conversion, and 3D graphics tools.',
            keywords: '3DS sample files, test 3DS files, download 3DS samples, free 3DS test files, 3D Studio mesh samples, 3D model samples, .3ds test files, 3D graphics samples'
          },
          schema: {
            name: 'Free 3DS Sample Files - Download Test 3D Studio Mesh Files',
            description: 'Download free 3DS sample 3D Studio mesh and model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D model viewing, 3DS conversion, and 3D graphics tools.'
          },
          hero: {
            title: '3DS Sample Files',
            description: 'Download free 3DS sample 3D Studio mesh and model files for testing. Multiple file sizes available to test your 3D model viewing, 3DS conversion, and 3D graphics tools.'
          },
          about_description: 'These are test 3DS (3D Studio Mesh) files in various sizes for testing purposes'
        },
        '3gp': {
          meta: {
            title: 'Free 3GP Sample Files Download - Test 3GPP Video Files | MorphyHub',
            description: 'Download free 3GP sample 3GPP video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video playback, 3GP conversion, and mobile video format tools.',
            keywords: '3GP sample files, test 3GP files, download 3GP samples, free 3GP test files, 3GPP video samples, mobile video samples, .3gp test files, video format samples'
          },
          schema: {
            name: 'Free 3GP Sample Files - Download Test 3GPP Video Files',
            description: 'Download free 3GP sample 3GPP video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video playback, 3GP conversion, and mobile video format tools.'
          },
          hero: {
            title: '3GP Sample Files',
            description: 'Download free 3GP sample 3GPP video files for testing. Multiple file sizes available to test your video playback, 3GP conversion, and mobile video format tools.'
          },
          about_description: 'These are test 3GP (3GPP Video) files in various sizes for testing purposes'
        },
        aac: {
          meta: {
            title: 'Free AAC Sample Files Download - Test Advanced Audio Coding Files | MorphyHub',
            description: 'Download free AAC sample Advanced Audio Coding audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio playback, AAC conversion, and modern audio format tools.',
            keywords: 'AAC sample files, test AAC files, download AAC samples, free AAC test files, Advanced Audio Coding samples, audio format samples, .aac test files, audio codec samples'
          },
          schema: {
            name: 'Free AAC Sample Files - Download Test Advanced Audio Coding Files',
            description: 'Download free AAC sample Advanced Audio Coding audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio playback, AAC conversion, and modern audio format tools.'
          },
          hero: {
            title: 'AAC Sample Files',
            description: 'Download free AAC sample Advanced Audio Coding audio files for testing. Multiple file sizes available to test your audio playback, AAC conversion, and modern audio format tools.'
          },
          about_description: 'These are test AAC (Advanced Audio Coding) audio files in various sizes for testing purposes'
        },
        icns: {
          meta: {
            title: 'Free ICNS Sample Files Download - Test Apple Icon Image Files | MorphyHub',
            description: 'Download free ICNS sample Apple Icon Image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing icon rendering, ICNS conversion, and macOS icon format tools.',
            keywords: 'ICNS sample files, test ICNS files, download ICNS samples, free ICNS test files, Apple Icon Image samples, macOS icon samples, .icns test files, icon format samples'
          },
          schema: {
            name: 'Free ICNS Sample Files - Download Test Apple Icon Image Files',
            description: 'Download free ICNS sample Apple Icon Image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing icon rendering, ICNS conversion, and macOS icon format tools.'
          },
          hero: {
            title: 'ICNS Sample Files',
            description: 'Download free ICNS sample Apple Icon Image files for testing. Multiple file sizes available to test your icon rendering, ICNS conversion, and macOS icon format tools.'
          },
          about_description: 'These are test ICNS (Apple Icon Image) files in various sizes for testing purposes'
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
        lzma: {
          meta: {
            title: 'Darmowe przykładowe pliki LZMA – Pobierz pliki skompresowane LZMA | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki skompresowane LZMA LZMA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania dekompresji LZMA, ekstrakcji archiwów i narzędzi kompresji plików.',
            keywords: 'przykładowe pliki LZMA, testowe pliki LZMA, pobierz przykłady LZMA, darmowe testowe pliki LZMA, przykłady archiwów skompresowanych LZMA, przykłady skompresowanych plików, testowe pliki .lzma, przykłady formatów kompresji'
          },
          schema: {
            name: 'Darmowe przykładowe pliki LZMA – Pobierz testowe pliki skompresowane LZMA',
            description: 'Pobierz darmowe przykładowe pliki skompresowane LZMA LZMA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania dekompresji LZMA, ekstrakcji archiwów i narzędzi kompresji plików.'
          },
          hero: {
            title: 'Przykładowe pliki LZMA',
            description: 'Pobierz darmowe przykładowe pliki skompresowane LZMA LZMA do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia dekompresji LZMA, ekstrakcji archiwów i kompresji plików.'
          },
          about_description: 'To są testowe pliki archiwów skompresowanych LZMA (Lempel-Ziv-Markov chain Algorithm) w różnych rozmiarach do celów testowych'
        },
        jwt: {
          meta: {
            title: 'Darmowe przykładowe pliki JWT – Pobierz pliki tokenów JSON Web Token | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki tokenów JSON Web Token JWT do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania tokenów JWT, uwierzytelniania i narzędzi bezpieczeństwa API.',
            keywords: 'przykładowe pliki JWT, testowe pliki JWT, pobierz przykłady JWT, darmowe testowe pliki JWT, przykłady tokenów JSON Web Token, pliki tokenów JWT, testowe pliki .jwt, pliki tokenów uwierzytelniania, testowe pliki parsowania JWT'
          },
          schema: {
            name: 'Darmowe przykładowe pliki JWT – Pobierz testowe pliki tokenów JSON Web Token',
            description: 'Pobierz darmowe przykładowe pliki tokenów JSON Web Token JWT do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania tokenów JWT, uwierzytelniania i narzędzi bezpieczeństwa API.'
          },
          hero: {
            title: 'Przykładowe pliki JWT',
            description: 'Pobierz darmowe przykładowe pliki tokenów JSON Web Token JWT do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania tokenów JWT i uwierzytelniania.'
          },
          about_description: 'To są testowe pliki JWT (JSON Web Token) w różnych rozmiarach do celów testowych'
        },
        kt: {
          meta: {
            title: 'Darmowe przykładowe pliki KT – Pobierz pliki źródłowe Kotlin | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki źródłowe Kotlin KT do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji Kotlin, wsparcia IDE i narzędzi programistycznych.',
            keywords: 'przykładowe pliki KT, testowe pliki KT, pobierz przykłady KT, darmowe testowe pliki KT, przykłady źródłowe Kotlin, przykłady kodu Kotlin, testowe pliki .kt, przykłady programowania Kotlin'
          },
          schema: {
            name: 'Darmowe przykładowe pliki KT – Pobierz testowe pliki źródłowe Kotlin',
            description: 'Pobierz darmowe przykładowe pliki źródłowe Kotlin KT do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji Kotlin, wsparcia IDE i narzędzi programistycznych.'
          },
          hero: {
            title: 'Przykładowe pliki KT',
            description: 'Pobierz darmowe przykładowe pliki źródłowe Kotlin KT do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia kompilacji Kotlin i programistyczne.'
          },
          about_description: 'To są testowe pliki KT (Kotlin) źródłowe w różnych rozmiarach do celów testowych'
        },
        ifc: {
          meta: {
            title: 'Darmowe przykładowe pliki IFC – Pobierz pliki Industry Foundation Classes | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki Industry Foundation Classes IFC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania BIM, konwersji IFC i narzędzi modelowania informacji o budynku.',
            keywords: 'przykładowe pliki IFC, testowe pliki IFC, pobierz przykłady IFC, darmowe testowe pliki IFC, przykłady Industry Foundation Classes, pliki BIM, pliki modelu budynku IFC, testowe pliki .ifc, pliki modelowania informacji o budynku, testowe pliki konwersji IFC'
          },
          schema: {
            name: 'Darmowe przykładowe pliki IFC – Pobierz testowe pliki Industry Foundation Classes',
            description: 'Pobierz darmowe przykładowe pliki Industry Foundation Classes IFC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania BIM, konwersji IFC i narzędzi modelowania informacji o budynku.'
          },
          hero: {
            title: 'Przykładowe pliki IFC',
            description: 'Pobierz darmowe przykładowe pliki Industry Foundation Classes IFC do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje oprogramowanie BIM i narzędzia konwersji IFC.'
          },
          about_description: 'To są testowe pliki IFC (Industry Foundation Classes) w różnych rozmiarach do celów testowych'
        },
        iges: {
          meta: {
            title: 'Darmowe przykładowe pliki IGES – Pobierz pliki Initial Graphics Exchange Specification | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki Initial Graphics Exchange Specification IGES do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania CAD, konwersji IGES i narzędzi wymiany modeli 3D.',
            keywords: 'przykładowe pliki IGES, testowe pliki IGES, pobierz przykłady IGES, darmowe testowe pliki IGES, przykłady Initial Graphics Exchange Specification, pliki modeli CAD, pliki 3D IGES, testowe pliki .iges, pliki wymiany CAD, testowe pliki konwersji IGES'
          },
          schema: {
            name: 'Darmowe przykładowe pliki IGES – Pobierz testowe pliki Initial Graphics Exchange Specification',
            description: 'Pobierz darmowe przykładowe pliki Initial Graphics Exchange Specification IGES do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania CAD, konwersji IGES i narzędzi wymiany modeli 3D.'
          },
          hero: {
            title: 'Przykładowe pliki IGES',
            description: 'Pobierz darmowe przykładowe pliki Initial Graphics Exchange Specification IGES do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje oprogramowanie CAD i narzędzia konwersji IGES.'
          },
          about_description: 'To są testowe pliki IGES (Initial Graphics Exchange Specification) w różnych rozmiarach do celów testowych'
        },
        igs: {
          meta: {
            title: 'Darmowe przykładowe pliki IGS – Pobierz pliki Initial Graphics Exchange Specification | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki Initial Graphics Exchange Specification IGS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania CAD, konwersji IGS i narzędzi wymiany modeli 3D.',
            keywords: 'przykładowe pliki IGS, testowe pliki IGS, pobierz przykłady IGS, darmowe testowe pliki IGS, przykłady Initial Graphics Exchange Specification, pliki modeli CAD, pliki 3D IGS, testowe pliki .igs, pliki wymiany CAD, testowe pliki konwersji IGS'
          },
          schema: {
            name: 'Darmowe przykładowe pliki IGS – Pobierz testowe pliki Initial Graphics Exchange Specification',
            description: 'Pobierz darmowe przykładowe pliki Initial Graphics Exchange Specification IGS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania CAD, konwersji IGS i narzędzi wymiany modeli 3D.'
          },
          hero: {
            title: 'Przykładowe pliki IGS',
            description: 'Pobierz darmowe przykładowe pliki Initial Graphics Exchange Specification IGS do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje oprogramowanie CAD i narzędzia konwersji IGS.'
          },
          about_description: 'To są testowe pliki IGS (Initial Graphics Exchange Specification) w różnych rozmiarach do celów testowych'
        },
        img: {
          meta: {
            title: 'Darmowe przykładowe pliki IMG – Pobierz pliki obrazu dysku | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki obrazu dysku IMG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania montowania obrazu dysku, ekstrakcji IMG i narzędzi przetwarzania obrazu dysku.',
            keywords: 'przykładowe pliki IMG, testowe pliki IMG, pobierz przykłady IMG, darmowe testowe pliki IMG, przykłady obrazu dysku, pliki obrazu dysku IMG, testowe pliki .img, pliki montowania obrazu dysku, testowe pliki ekstrakcji IMG'
          },
          schema: {
            name: 'Darmowe przykładowe pliki IMG – Pobierz testowe pliki obrazu dysku',
            description: 'Pobierz darmowe przykładowe pliki obrazu dysku IMG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania montowania obrazu dysku, ekstrakcji IMG i narzędzi przetwarzania obrazu dysku.'
          },
          hero: {
            title: 'Przykładowe pliki IMG',
            description: 'Pobierz darmowe przykładowe pliki obrazu dysku IMG do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia montowania obrazu dysku i ekstrakcji IMG.'
          },
          about_description: 'To są testowe pliki IMG (obrazu dysku) w różnych rozmiarach do celów testowych'
        },
        indd: {
          meta: {
            title: 'Darmowe przykładowe pliki INDD – Pobierz pliki dokumentów Adobe InDesign | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki dokumentów Adobe InDesign INDD do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji dokumentów InDesign, przeglądania INDD i narzędzi publikacji.',
            keywords: 'przykładowe pliki INDD, testowe pliki INDD, pobierz przykłady INDD, darmowe testowe pliki INDD, przykłady Adobe InDesign, pliki publikacji, pliki dokumentów INDD, testowe pliki .indd, pliki InDesign, testowe pliki konwersji INDD'
          },
          schema: {
            name: 'Darmowe przykładowe pliki INDD – Pobierz testowe pliki dokumentów Adobe InDesign',
            description: 'Pobierz darmowe przykładowe pliki dokumentów Adobe InDesign INDD do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji dokumentów InDesign, przeglądania INDD i narzędzi publikacji.'
          },
          hero: {
            title: 'Przykładowe pliki INDD',
            description: 'Pobierz darmowe przykładowe pliki dokumentów Adobe InDesign INDD do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji dokumentów InDesign i przeglądania INDD.'
          },
          about_description: 'To są testowe pliki INDD (Adobe InDesign) w różnych rozmiarach do celów testowych'
        },
        ini: {
          meta: {
            title: 'Darmowe przykładowe pliki INI – Pobierz pliki konfiguracyjne | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki konfiguracyjne INI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania plików INI, zarządzania konfiguracją i narzędzi przetwarzania plików ustawień.',
            keywords: 'przykładowe pliki INI, testowe pliki INI, pobierz przykłady INI, darmowe testowe pliki INI, przykłady plików konfiguracyjnych, pliki konfiguracyjne INI, testowe pliki .ini, przykłady plików ustawień, testowe pliki parsowania INI'
          },
          schema: {
            name: 'Darmowe przykładowe pliki INI – Pobierz testowe pliki konfiguracyjne',
            description: 'Pobierz darmowe przykładowe pliki konfiguracyjne INI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania plików INI, zarządzania konfiguracją i narzędzi przetwarzania plików ustawień.'
          },
          hero: {
            title: 'Przykładowe pliki INI',
            description: 'Pobierz darmowe przykładowe pliki konfiguracyjne INI do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania plików INI i zarządzania konfiguracją.'
          },
          about_description: 'To są testowe pliki INI (konfiguracyjne) w różnych rozmiarach do celów testowych'
        },
        intelhex: {
          meta: {
            title: 'Darmowe przykładowe pliki IntelHex – Pobierz pliki szesnastkowe Intel | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki szesnastkowe Intel IntelHex do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania programowania oprogramowania układowego, parsowania IntelHex i narzędzi programistycznych systemów wbudowanych.',
            keywords: 'przykładowe pliki IntelHex, testowe pliki IntelHex, pobierz przykłady IntelHex, darmowe testowe pliki IntelHex, przykłady szesnastkowe Intel, pliki oprogramowania układowego, pliki hex IntelHex, testowe pliki .intelhex, pliki systemów wbudowanych, testowe pliki parsowania IntelHex'
          },
          schema: {
            name: 'Darmowe przykładowe pliki IntelHex – Pobierz testowe pliki szesnastkowe Intel',
            description: 'Pobierz darmowe przykładowe pliki szesnastkowe Intel IntelHex do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania programowania oprogramowania układowego, parsowania IntelHex i narzędzi programistycznych systemów wbudowanych.'
          },
          hero: {
            title: 'Przykładowe pliki IntelHex',
            description: 'Pobierz darmowe przykładowe pliki szesnastkowe Intel IntelHex do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia programowania oprogramowania układowego i parsowania IntelHex.'
          },
          about_description: 'To są testowe pliki IntelHex (szesnastkowe Intel) w różnych rozmiarach do celów testowych'
        },
        jar: {
          meta: {
            title: 'Darmowe przykładowe pliki JAR – Pobierz pliki archiwum Java | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki archiwum Java JAR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania aplikacji Java, ekstrakcji JAR i narzędzi programistycznych Java.',
            keywords: 'przykładowe pliki JAR, testowe pliki JAR, pobierz przykłady JAR, darmowe testowe pliki JAR, przykłady archiwum Java, pliki aplikacji JAR, testowe pliki .jar, pliki pakietów Java, testowe pliki ekstrakcji JAR'
          },
          schema: {
            name: 'Darmowe przykładowe pliki JAR – Pobierz testowe pliki archiwum Java',
            description: 'Pobierz darmowe przykładowe pliki archiwum Java JAR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania aplikacji Java, ekstrakcji JAR i narzędzi programistycznych Java.'
          },
          hero: {
            title: 'Przykładowe pliki JAR',
            description: 'Pobierz darmowe przykładowe pliki archiwum Java JAR do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia wykonywania aplikacji Java i ekstrakcji JAR.'
          },
          about_description: 'To są testowe pliki JAR (Java Archive) w różnych rozmiarach do celów testowych'
        },
        jks: {
          meta: {
            title: 'Darmowe przykładowe pliki JKS – Pobierz pliki Java KeyStore | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki Java KeyStore JKS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania zarządzania Java KeyStore, parsowania JKS i narzędzi przechowywania certyfikatów SSL.',
            keywords: 'przykładowe pliki JKS, testowe pliki JKS, pobierz przykłady JKS, darmowe testowe pliki JKS, przykłady Java KeyStore, pliki certyfikatów SSL, pliki keystore JKS, testowe pliki .jks, pliki bezpieczeństwa Java, testowe pliki parsowania JKS'
          },
          schema: {
            name: 'Darmowe przykładowe pliki JKS – Pobierz testowe pliki Java KeyStore',
            description: 'Pobierz darmowe przykładowe pliki Java KeyStore JKS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania zarządzania Java KeyStore, parsowania JKS i narzędzi przechowywania certyfikatów SSL.'
          },
          hero: {
            title: 'Przykładowe pliki JKS',
            description: 'Pobierz darmowe przykładowe pliki Java KeyStore JKS do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia zarządzania Java KeyStore i parsowania JKS.'
          },
          about_description: 'To są testowe pliki JKS (Java KeyStore) w różnych rozmiarach do celów testowych'
        },
        kml: {
          meta: {
            title: 'Darmowe przykładowe pliki KML – Pobierz pliki Keyhole Markup Language | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki danych geograficznych Keyhole Markup Language KML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wizualizacji geograficznej, renderowania map i narzędzi GIS.',
            keywords: 'przykładowe pliki KML, testowe pliki KML, pobierz przykłady KML, darmowe testowe pliki KML, przykłady Keyhole Markup Language, przykłady danych geograficznych, testowe pliki .kml, przykłady danych mapowych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki KML – Pobierz testowe pliki Keyhole Markup Language',
            description: 'Pobierz darmowe przykładowe pliki danych geograficznych Keyhole Markup Language KML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wizualizacji geograficznej, renderowania map i narzędzi GIS.'
          },
          hero: {
            title: 'Przykładowe pliki KML',
            description: 'Pobierz darmowe przykładowe pliki danych geograficznych Keyhole Markup Language KML do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia wizualizacji geograficznej i GIS.'
          },
          about_description: 'To są testowe pliki KML (Keyhole Markup Language) danych geograficznych w różnych rozmiarach do celów testowych'
        },
        kmz: {
          meta: {
            title: 'Darmowe przykładowe pliki KMZ – Pobierz pliki archiwów skompresowanych KML | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki archiwów skompresowanych KML KMZ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów KML, przetwarzania danych geograficznych i narzędzi GIS.',
            keywords: 'przykładowe pliki KMZ, testowe pliki KMZ, pobierz przykłady KMZ, darmowe testowe pliki KMZ, przykłady skompresowanych KML, przykłady archiwów KML, testowe pliki .kmz, przykłady archiwów geograficznych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki KMZ – Pobierz testowe pliki archiwów skompresowanych KML',
            description: 'Pobierz darmowe przykładowe pliki archiwów skompresowanych KML KMZ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów KML, przetwarzania danych geograficznych i narzędzi GIS.'
          },
          hero: {
            title: 'Przykładowe pliki KMZ',
            description: 'Pobierz darmowe przykładowe pliki archiwów skompresowanych KML KMZ do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia ekstrakcji archiwów KML i GIS.'
          },
          about_description: 'To są testowe pliki KMZ (skompresowane archiwa KML) w różnych rozmiarach do celów testowych'
        },
        laz: {
          meta: {
            title: 'Darmowe przykładowe pliki LAZ – Pobierz pliki skompresowanych chmur punktów LAS | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki skompresowanych chmur punktów LAS LAZ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania chmur punktów, danych skanowania 3D i narzędzi LiDAR.',
            keywords: 'przykładowe pliki LAZ, testowe pliki LAZ, pobierz przykłady LAZ, darmowe testowe pliki LAZ, przykłady skompresowanych LAS, przykłady chmur punktów, testowe pliki .laz, przykłady danych LiDAR'
          },
          schema: {
            name: 'Darmowe przykładowe pliki LAZ – Pobierz testowe pliki skompresowanych chmur punktów LAS',
            description: 'Pobierz darmowe przykładowe pliki skompresowanych chmur punktów LAS LAZ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania chmur punktów, danych skanowania 3D i narzędzi LiDAR.'
          },
          hero: {
            title: 'Przykładowe pliki LAZ',
            description: 'Pobierz darmowe przykładowe pliki skompresowanych chmur punktów LAS LAZ do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przetwarzania chmur punktów i LiDAR.'
          },
          about_description: 'To są testowe pliki LAZ (skompresowane chmury punktów LAS) w różnych rozmiarach do celów testowych'
        },
        las: {
          meta: {
            title: 'Darmowe przykładowe pliki LAS – Pobierz pliki chmur punktów LAS | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki chmur punktów LAS LAS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wizualizacji chmur punktów, danych skanowania 3D i narzędzi LiDAR.',
            keywords: 'przykładowe pliki LAS, testowe pliki LAS, pobierz przykłady LAS, darmowe testowe pliki LAS, przykłady chmur punktów, przykłady danych LiDAR, testowe pliki .las, przykłady skanowania 3D'
          },
          schema: {
            name: 'Darmowe przykładowe pliki LAS – Pobierz testowe pliki chmur punktów LAS',
            description: 'Pobierz darmowe przykładowe pliki chmur punktów LAS LAS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wizualizacji chmur punktów, danych skanowania 3D i narzędzi LiDAR.'
          },
          hero: {
            title: 'Przykładowe pliki LAS',
            description: 'Pobierz darmowe przykładowe pliki chmur punktów LAS LAS do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia wizualizacji chmur punktów i LiDAR.'
          },
          about_description: 'To są testowe pliki LAS (chmury punktów) w różnych rozmiarach do celów testowych'
        },
        log: {
          meta: {
            title: 'Darmowe przykładowe pliki LOG – Pobierz pliki logów | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki logów LOG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania logów, analizy logów i narzędzi debugowania.',
            keywords: 'przykładowe pliki LOG, testowe pliki LOG, pobierz przykłady LOG, darmowe testowe pliki LOG, przykłady plików logów, przykłady danych logów, testowe pliki .log, przykłady analizy logów'
          },
          schema: {
            name: 'Darmowe przykładowe pliki LOG – Pobierz testowe pliki logów',
            description: 'Pobierz darmowe przykładowe pliki logów LOG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania logów, analizy logów i narzędzi debugowania.'
          },
          hero: {
            title: 'Przykładowe pliki LOG',
            description: 'Pobierz darmowe przykładowe pliki logów LOG do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania i analizy logów.'
          },
          about_description: 'To są testowe pliki LOG w różnych rozmiarach do celów testowych'
        },
        lua: {
          meta: {
            title: 'Darmowe przykładowe pliki LUA – Pobierz pliki skryptów Lua | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki skryptów Lua LUA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania skryptów Lua, rozwoju gier i narzędzi automatyzacji.',
            keywords: 'przykładowe pliki LUA, testowe pliki LUA, pobierz przykłady LUA, darmowe testowe pliki LUA, przykłady skryptów Lua, przykłady kodu Lua, testowe pliki .lua, przykłady skryptowania'
          },
          schema: {
            name: 'Darmowe przykładowe pliki LUA – Pobierz testowe pliki skryptów Lua',
            description: 'Pobierz darmowe przykładowe pliki skryptów Lua LUA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania skryptów Lua, rozwoju gier i narzędzi automatyzacji.'
          },
          hero: {
            title: 'Przykładowe pliki LUA',
            description: 'Pobierz darmowe przykładowe pliki skryptów Lua LUA do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia wykonywania skryptów Lua i automatyzacji.'
          },
          about_description: 'To są testowe pliki LUA (skrypty Lua) w różnych rozmiarach do celów testowych'
        },
        lha: {
          meta: {
            title: 'Darmowe przykładowe pliki LHA – Pobierz pliki archiwów LHA | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki archiwów LHA LHA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów LHA, narzędzi kompresji i starszych formatów archiwów.',
            keywords: 'przykładowe pliki LHA, testowe pliki LHA, pobierz przykłady LHA, darmowe testowe pliki LHA, przykłady archiwów LHA, przykłady skompresowanych archiwów, testowe pliki .lha, przykłady formatów archiwów'
          },
          schema: {
            name: 'Darmowe przykładowe pliki LHA – Pobierz testowe pliki archiwów LHA',
            description: 'Pobierz darmowe przykładowe pliki archiwów LHA LHA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów LHA, narzędzi kompresji i starszych formatów archiwów.'
          },
          hero: {
            title: 'Przykładowe pliki LHA',
            description: 'Pobierz darmowe przykładowe pliki archiwów LHA LHA do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia ekstrakcji archiwów LHA i kompresji.'
          },
          about_description: 'To są testowe pliki LHA (archiwa) w różnych rozmiarach do celów testowych'
        },
        lzh: {
          meta: {
            title: 'Darmowe przykładowe pliki LZH – Pobierz pliki archiwów LZH | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki archiwów LZH LZH do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów LZH, narzędzi kompresji i starszych formatów archiwów.',
            keywords: 'przykładowe pliki LZH, testowe pliki LZH, pobierz przykłady LZH, darmowe testowe pliki LZH, przykłady archiwów LZH, przykłady skompresowanych archiwów, testowe pliki .lzh, przykłady formatów archiwów'
          },
          schema: {
            name: 'Darmowe przykładowe pliki LZH – Pobierz testowe pliki archiwów LZH',
            description: 'Pobierz darmowe przykładowe pliki archiwów LZH LZH do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów LZH, narzędzi kompresji i starszych formatów archiwów.'
          },
          hero: {
            title: 'Przykładowe pliki LZH',
            description: 'Pobierz darmowe przykładowe pliki archiwów LZH LZH do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia ekstrakcji archiwów LZH i kompresji.'
          },
          about_description: 'To są testowe pliki LZH (archiwa) w różnych rozmiarach do celów testowych'
        },
        m3u: {
          meta: {
            title: 'Darmowe przykładowe pliki M3U – Pobierz pliki listy odtwarzania M3U | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki listy odtwarzania M3U M3U do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania listy odtwarzania M3U, zgodności z odtwarzaczami multimedialnymi i narzędzi strumieniowania audio.',
            keywords: 'przykładowe pliki M3U, testowe pliki M3U, pobierz przykłady M3U, darmowe testowe pliki M3U, przykłady listy odtwarzania M3U, przykłady listy odtwarzania odtwarzaczy multimedialnych, testowe pliki .m3u, przykłady listy odtwarzania audio'
          },
          schema: {
            name: 'Darmowe przykładowe pliki M3U – Pobierz testowe pliki listy odtwarzania M3U',
            description: 'Pobierz darmowe przykładowe pliki listy odtwarzania M3U M3U do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania listy odtwarzania M3U, zgodności z odtwarzaczami multimedialnymi i narzędzi strumieniowania audio.'
          },
          hero: {
            title: 'Przykładowe pliki M3U',
            description: 'Pobierz darmowe przykładowe pliki listy odtwarzania M3U M3U do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania listy odtwarzania M3U, zgodności z odtwarzaczami multimedialnymi i strumieniowania audio.'
          },
          about_description: 'To są testowe pliki listy odtwarzania M3U (MP3 URL) w różnych rozmiarach do celów testowych'
        },
        m3u8: {
          meta: {
            title: 'Darmowe przykładowe pliki M3U8 – Pobierz pliki listy odtwarzania HLS M3U8 | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki listy odtwarzania HLS M3U8 M3U8 do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania listy odtwarzania M3U8, strumieniowania HLS i zgodności z odtwarzaczami wideo.',
            keywords: 'przykładowe pliki M3U8, testowe pliki M3U8, pobierz przykłady M3U8, darmowe testowe pliki M3U8, przykłady listy odtwarzania HLS M3U8, przykłady listy odtwarzania strumieniowania HLS, testowe pliki .m3u8, przykłady listy odtwarzania wideo'
          },
          schema: {
            name: 'Darmowe przykładowe pliki M3U8 – Pobierz testowe pliki listy odtwarzania HLS M3U8',
            description: 'Pobierz darmowe przykładowe pliki listy odtwarzania HLS M3U8 M3U8 do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania listy odtwarzania M3U8, strumieniowania HLS i zgodności z odtwarzaczami wideo.'
          },
          hero: {
            title: 'Przykładowe pliki M3U8',
            description: 'Pobierz darmowe przykładowe pliki listy odtwarzania HLS M3U8 M3U8 do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania listy odtwarzania M3U8, strumieniowania HLS i zgodności z odtwarzaczami wideo.'
          },
          about_description: 'To są testowe pliki listy odtwarzania M3U8 (HTTP Live Streaming) w różnych rozmiarach do celów testowych'
        },
        m4a: {
          meta: {
            title: 'Darmowe przykładowe pliki M4A – Pobierz pliki audio M4A | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki audio M4A M4A do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji audio M4A, odtwarzania M4A i narzędzi przetwarzania audio.',
            keywords: 'przykładowe pliki M4A, testowe pliki M4A, pobierz przykłady M4A, darmowe testowe pliki M4A, przykłady audio M4A, przykłady formatów audio Apple, testowe pliki .m4a, przykłady formatów audio'
          },
          schema: {
            name: 'Darmowe przykładowe pliki M4A – Pobierz testowe pliki audio M4A',
            description: 'Pobierz darmowe przykładowe pliki audio M4A M4A do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji audio M4A, odtwarzania M4A i narzędzi przetwarzania audio.'
          },
          hero: {
            title: 'Przykładowe pliki M4A',
            description: 'Pobierz darmowe przykładowe pliki audio M4A M4A do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji audio M4A, odtwarzania M4A i przetwarzania audio.'
          },
          about_description: 'To są testowe pliki audio M4A (MPEG-4 Audio) w różnych rozmiarach do celów testowych'
        },
        m4v: {
          meta: {
            title: 'Darmowe przykładowe pliki M4V – Pobierz pliki wideo M4V | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki wideo M4V M4V do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji wideo M4V, odtwarzania M4V i narzędzi przetwarzania wideo.',
            keywords: 'przykładowe pliki M4V, testowe pliki M4V, pobierz przykłady M4V, darmowe testowe pliki M4V, przykłady wideo M4V, przykłady formatów wideo Apple, testowe pliki .m4v, przykłady formatów wideo'
          },
          schema: {
            name: 'Darmowe przykładowe pliki M4V – Pobierz testowe pliki wideo M4V',
            description: 'Pobierz darmowe przykładowe pliki wideo M4V M4V do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji wideo M4V, odtwarzania M4V i narzędzi przetwarzania wideo.'
          },
          hero: {
            title: 'Przykładowe pliki M4V',
            description: 'Pobierz darmowe przykładowe pliki wideo M4V M4V do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji wideo M4V, odtwarzania M4V i przetwarzania wideo.'
          },
          about_description: 'To są testowe pliki wideo M4V (MPEG-4 Video) w różnych rozmiarach do celów testowych'
        },
        ma: {
          meta: {
            title: 'Darmowe przykładowe pliki MA – Pobierz pliki sceny ASCII Maya | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki sceny ASCII Maya MA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji sceny Maya, parsowania plików MA i narzędzi animacji 3D.',
            keywords: 'przykładowe pliki MA, testowe pliki MA, pobierz przykłady MA, darmowe testowe pliki MA, przykłady sceny ASCII Maya, przykłady sceny animacji 3D, testowe pliki .ma, przykłady sceny Maya'
          },
          schema: {
            name: 'Darmowe przykładowe pliki MA – Pobierz testowe pliki sceny ASCII Maya',
            description: 'Pobierz darmowe przykładowe pliki sceny ASCII Maya MA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji sceny Maya, parsowania plików MA i narzędzi animacji 3D.'
          },
          hero: {
            title: 'Przykładowe pliki MA',
            description: 'Pobierz darmowe przykładowe pliki sceny ASCII Maya MA do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji sceny Maya, parsowania plików MA i animacji 3D.'
          },
          about_description: 'To są testowe pliki sceny MA (Maya ASCII) w różnych rozmiarach do celów testowych'
        },
        makefile: {
          meta: {
            title: 'Darmowe przykładowe pliki Makefile – Pobierz pliki konfiguracji kompilacji Makefile | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji kompilacji Makefile do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania Makefile, automatyzacji systemu kompilacji i narzędzi kompilacji oprogramowania.',
            keywords: 'przykładowe pliki Makefile, testowe pliki Makefile, pobierz przykłady Makefile, darmowe testowe pliki Makefile, przykłady konfiguracji kompilacji, przykłady kompilacji Makefile, testowe pliki Makefile, przykłady automatyzacji kompilacji'
          },
          schema: {
            name: 'Darmowe przykładowe pliki Makefile – Pobierz testowe pliki konfiguracji kompilacji Makefile',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji kompilacji Makefile do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania Makefile, automatyzacji systemu kompilacji i narzędzi kompilacji oprogramowania.'
          },
          hero: {
            title: 'Przykładowe pliki Makefile',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji kompilacji Makefile do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania Makefile, automatyzacji systemu kompilacji i kompilacji oprogramowania.'
          },
          about_description: 'To są testowe pliki konfiguracji kompilacji Makefile w różnych rozmiarach do celów testowych'
        },
        max: {
          meta: {
            title: 'Darmowe przykładowe pliki MAX – Pobierz pliki sceny 3ds Max | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki sceny 3ds Max MAX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji sceny 3ds Max, parsowania plików MAX i narzędzi modelowania 3D.',
            keywords: 'przykładowe pliki MAX, testowe pliki MAX, pobierz przykłady MAX, darmowe testowe pliki MAX, przykłady sceny 3ds Max, przykłady sceny modelowania 3D, testowe pliki .max, przykłady sceny 3ds Max'
          },
          schema: {
            name: 'Darmowe przykładowe pliki MAX – Pobierz testowe pliki sceny 3ds Max',
            description: 'Pobierz darmowe przykładowe pliki sceny 3ds Max MAX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji sceny 3ds Max, parsowania plików MAX i narzędzi modelowania 3D.'
          },
          hero: {
            title: 'Przykładowe pliki MAX',
            description: 'Pobierz darmowe przykładowe pliki sceny 3ds Max MAX do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji sceny 3ds Max, parsowania plików MAX i modelowania 3D.'
          },
          about_description: 'To są testowe pliki sceny MAX (3ds Max) w różnych rozmiarach do celów testowych'
        },
        mb: {
          meta: {
            title: 'Darmowe przykładowe pliki MB – Pobierz pliki sceny binarnej Maya | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki sceny binarnej Maya MB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji sceny Maya, parsowania plików MB i narzędzi animacji 3D.',
            keywords: 'przykładowe pliki MB, testowe pliki MB, pobierz przykłady MB, darmowe testowe pliki MB, przykłady sceny binarnej Maya, przykłady sceny animacji 3D, testowe pliki .mb, przykłady sceny Maya'
          },
          schema: {
            name: 'Darmowe przykładowe pliki MB – Pobierz testowe pliki sceny binarnej Maya',
            description: 'Pobierz darmowe przykładowe pliki sceny binarnej Maya MB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji sceny Maya, parsowania plików MB i narzędzi animacji 3D.'
          },
          hero: {
            title: 'Przykładowe pliki MB',
            description: 'Pobierz darmowe przykładowe pliki sceny binarnej Maya MB do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji sceny Maya, parsowania plików MB i animacji 3D.'
          },
          about_description: 'To są testowe pliki sceny MB (Maya Binary) w różnych rozmiarach do celów testowych'
        },
        mbtiles: {
          meta: {
            title: 'Darmowe przykładowe pliki MBTiles – Pobierz pliki bazy danych map MBTiles | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki bazy danych map MBTiles do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania MBTiles, ekstrakcji kafelków map i narzędzi przetwarzania danych geograficznych.',
            keywords: 'przykładowe pliki MBTiles, testowe pliki MBTiles, pobierz przykłady MBTiles, darmowe testowe pliki MBTiles, przykłady bazy danych map MBTiles, przykłady plików geograficznych MBTiles, testowe pliki .mbtiles, przykłady plików kafelków map, przykłady parsowania MBTiles'
          },
          schema: {
            name: 'Darmowe przykładowe pliki MBTiles – Pobierz testowe pliki bazy danych map MBTiles',
            description: 'Pobierz darmowe przykładowe pliki bazy danych map MBTiles do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania MBTiles, ekstrakcji kafelków map i narzędzi przetwarzania danych geograficznych.'
          },
          hero: {
            title: 'Przykładowe pliki MBTiles',
            description: 'Pobierz darmowe przykładowe pliki bazy danych map MBTiles do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania MBTiles i ekstrakcji kafelków map.'
          },
          about_description: 'To są testowe pliki MBTiles (baza danych map) w różnych rozmiarach do celów testowych'
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
        },
        key: {
          meta: {
            title: 'Darmowe przykładowe pliki KEY – Pobierz pliki kluczy prywatnych | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki KEY do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania zarządzania certyfikatami SSL, parsowania kluczy i narzędzi przechowywania kluczy kryptograficznych.',
            keywords: 'przykładowe pliki KEY, testowe pliki KEY, pobierz przykłady KEY, darmowe testowe pliki KEY, przykłady kluczy prywatnych, pliki kluczy SSL, pliki certyfikatów KEY, testowe pliki .key, pliki kluczy kryptograficznych, testowe pliki parsowania KEY'
          },
          schema: {
            name: 'Darmowe przykładowe pliki KEY – Pobierz testowe pliki kluczy prywatnych',
            description: 'Pobierz darmowe przykładowe pliki KEY do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania zarządzania certyfikatami SSL, parsowania kluczy i narzędzi przechowywania kluczy kryptograficznych.'
          },
          hero: {
            title: 'Przykładowe pliki KEY',
            description: 'Pobierz darmowe przykładowe pliki KEY do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia zarządzania certyfikatami SSL i parsowania kluczy.'
          },
          about_description: 'To są testowe pliki kluczy prywatnych KEY w różnych rozmiarach do celów testowych'
        },
        crx: {
          meta: {
            title: 'Darmowe przykładowe pliki CRX – Pobierz pliki rozszerzeń Chrome | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki CRX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji rozszerzeń Chrome, analizy CRX i narzędzi przetwarzania rozszerzeń przeglądarek.',
            keywords: 'przykładowe pliki CRX, testowe pliki CRX, pobierz przykłady CRX, darmowe testowe pliki CRX, przykłady rozszerzeń Chrome, przykłady rozszerzeń przeglądarek, przykłady pakietów CRX, testowe pliki konwersji CRX, testowe pliki .crx, przykłady instalacji rozszerzeń Chrome, przykłady rozszerzeń web'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CRX – Pobierz testowe pliki rozszerzeń Chrome',
            description: 'Pobierz darmowe przykładowe pliki CRX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji rozszerzeń Chrome, analizy CRX i narzędzi przetwarzania rozszerzeń przeglądarek.'
          },
          hero: {
            title: 'Przykładowe pliki CRX',
            description: 'Pobierz darmowe przykładowe pliki CRX do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia instalacji rozszerzeń Chrome, analizy CRX i przetwarzania rozszerzeń przeglądarek.'
          },
          about_description: 'To są testowe pliki pakietów CRX (Chrome Extension) w różnych rozmiarach do celów testowych'
        },
        hpp: {
          meta: {
            title: 'Darmowe przykładowe pliki HPP – Pobierz pliki nagłówkowe C++ | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki HPP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C++, przetwarzania plików nagłówkowych i narzędzi programowania.',
            keywords: 'przykładowe pliki HPP, testowe pliki HPP, pobierz przykłady HPP, darmowe testowe pliki HPP, przykłady nagłówków C++, przykłady plików nagłówkowych, testowe pliki .hpp, pliki nagłówkowe C++, przykłady nagłówków programowania, pliki nagłówków kodu, pliki programowania C++'
          },
          schema: {
            name: 'Darmowe przykładowe pliki HPP – Pobierz testowe pliki nagłówkowe C++',
            description: 'Pobierz darmowe przykładowe pliki HPP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C++, przetwarzania plików nagłówkowych i narzędzi programowania.'
          },
          hero: {
            title: 'Przykładowe pliki HPP',
            description: 'Pobierz darmowe przykładowe pliki HPP do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia kompilacji kodu C++ i przetwarzania plików nagłówkowych.'
          },
          about_description: 'To są testowe pliki nagłówkowe HPP (C++) w różnych rozmiarach do celów testowych'
        },
        hex: {
          meta: {
            title: 'Darmowe przykładowe pliki HEX – Pobierz pliki formatu szesnastkowego | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki HEX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania szesnastkowego, analizy danych binarnych i narzędzi przetwarzania plików hex.',
            keywords: 'przykładowe pliki HEX, testowe pliki HEX, pobierz przykłady HEX, darmowe testowe pliki HEX, przykłady formatu szesnastkowego, przykłady zrzutów hex, testowe pliki parsowania HEX, testowe pliki .hex, przykłady binarnych hex, pliki edytorów hex, przykłady danych szesnastkowych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki HEX – Pobierz testowe pliki formatu szesnastkowego',
            description: 'Pobierz darmowe przykładowe pliki HEX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania szesnastkowego, analizy danych binarnych i narzędzi przetwarzania plików hex.'
          },
          hero: {
            title: 'Przykładowe pliki HEX',
            description: 'Pobierz darmowe przykładowe pliki HEX do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania szesnastkowego i analizy danych binarnych.'
          },
          about_description: 'To są testowe pliki formatu szesnastkowego HEX w różnych rozmiarach do celów testowych'
        },
        hdr: {
          meta: {
            title: 'Darmowe przykładowe pliki HDR – Pobierz pliki obrazów High Dynamic Range | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki HDR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania obrazów HDR, mapowania tonów i narzędzi przeglądania wysokiego zakresu dynamicznego.',
            keywords: 'przykładowe pliki HDR, testowe pliki HDR, pobierz przykłady HDR, darmowe testowe pliki HDR, przykłady High Dynamic Range, przykłady obrazów HDR, testowe pliki mapowania tonów HDR, testowe pliki .hdr, przykłady przetwarzania obrazów HDR, przykłady obrazów wysokiego zakresu dynamicznego, przykłady przeglądarek HDR'
          },
          schema: {
            name: 'Darmowe przykładowe pliki HDR – Pobierz testowe pliki obrazów High Dynamic Range',
            description: 'Pobierz darmowe przykładowe pliki HDR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania obrazów HDR, mapowania tonów i narzędzi przeglądania wysokiego zakresu dynamicznego.'
          },
          hero: {
            title: 'Przykładowe pliki HDR',
            description: 'Pobierz darmowe przykładowe pliki HDR do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przetwarzania obrazów HDR i mapowania tonów.'
          },
          about_description: 'To są testowe pliki obrazów HDR (High Dynamic Range) w różnych rozmiarach do celów testowych'
        },
        h: {
          meta: {
            title: 'Darmowe przykładowe pliki H – Pobierz pliki nagłówkowe C/C++ | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki H do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C/C++, przetwarzania plików nagłówkowych i narzędzi programowania.',
            keywords: 'przykładowe pliki H, testowe pliki H, pobierz przykłady H, darmowe testowe pliki H, przykłady nagłówków C, przykłady nagłówków C++, przykłady plików nagłówkowych, testowe pliki .h, pliki nagłówkowe C/C++, przykłady nagłówków programowania, pliki nagłówków kodu'
          },
          schema: {
            name: 'Darmowe przykładowe pliki H – Pobierz testowe pliki nagłówkowe C/C++',
            description: 'Pobierz darmowe przykładowe pliki H do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C/C++, przetwarzania plików nagłówkowych i narzędzi programowania.'
          },
          hero: {
            title: 'Przykładowe pliki H',
            description: 'Pobierz darmowe przykładowe pliki H do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia kompilacji kodu C/C++ i przetwarzania plików nagłówkowych.'
          },
          about_description: 'To są testowe pliki nagłówkowe H (C/C++) w różnych rozmiarach do celów testowych'
        },
        gz: {
          meta: {
            title: 'Darmowe przykładowe pliki GZ – Pobierz skompresowane pliki archiwów gzip | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki GZ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi kompresji, wyodrębniania archiwów i przetwarzania plików gzip.',
            keywords: 'przykładowe pliki GZ, testowe pliki GZ, pobierz przykłady GZ, darmowe testowe pliki GZ, przykłady skompresowanych gzip, przykłady archiwów, testowe pliki kompresji GZ, testowe pliki .gz, przykłady archiwów gzip, przykłady skompresowanych plików, przykłady plików GZ'
          },
          schema: {
            name: 'Darmowe przykładowe pliki GZ – Pobierz testowe skompresowane pliki archiwów gzip',
            description: 'Pobierz darmowe przykładowe pliki GZ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi kompresji, wyodrębniania archiwów i przetwarzania plików gzip.'
          },
          hero: {
            title: 'Przykładowe pliki GZ',
            description: 'Pobierz darmowe przykładowe pliki GZ do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia kompresji i oprogramowanie do wyodrębniania archiwów.'
          },
          about_description: 'To są testowe skompresowane pliki archiwów GZ (gzip) w różnych rozmiarach do celów testowych'
        },
        ace: {
          meta: {
            title: 'Darmowe przykładowe pliki ACE – Pobierz pliki archiwów | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki ACE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wyodrębniania archiwów, kompresji i narzędzi przetwarzania formatu ACE.',
            keywords: 'przykładowe pliki ACE, testowe pliki ACE, pobierz przykłady ACE, darmowe testowe pliki ACE, przykłady archiwów, przykłady WinACE, przykłady skompresowanych plików, testowe pliki .ace, przykłady kompresji plików, przykłady formatów archiwów'
          },
          schema: {
            name: 'Darmowe przykładowe pliki ACE – Pobierz testowe pliki archiwów',
            description: 'Pobierz darmowe przykładowe pliki ACE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wyodrębniania archiwów, kompresji i narzędzi przetwarzania formatu ACE.'
          },
          hero: {
            title: 'Przykładowe pliki ACE',
            description: 'Pobierz darmowe przykładowe pliki ACE do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia wyodrębniania archiwów, kompresji i przetwarzania formatu ACE.'
          },
          about_description: 'To są testowe pliki archiwów ACE (WinACE) w różnych rozmiarach do celów testowych'
        },
        '7z': {
          meta: {
            title: 'Darmowe przykładowe pliki 7Z – Pobierz pliki archiwów | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki 7Z do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji archiwów, kompresji i narzędzi wyodrębniania.',
            keywords: 'przykładowe pliki 7Z, testowe pliki 7Z, pobierz przykłady 7Z, darmowe testowe pliki 7Z, przykłady archiwów, przykłady 7-Zip, przykłady skompresowanych plików, testowe pliki .7z, przykłady konwersji archiwów, przykłady kompresji plików'
          },
          schema: {
            name: 'Darmowe przykładowe pliki 7Z – Pobierz testowe archiwa',
            description: 'Pobierz darmowe przykładowe pliki 7Z do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji archiwów i narzędzi wyodrębniania.'
          },
          hero: {
            title: 'Przykładowe pliki 7Z',
            description: 'Pobierz darmowe przykładowe pliki 7Z do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji archiwów, kompresji i wyodrębniania.'
          },
          about_description: 'To są testowe pliki archiwów 7Z w różnych rozmiarach do celów testowych'
        },
        '3mf': {
          meta: {
            title: 'Darmowe przykładowe pliki 3MF – Pobierz pliki druku 3D | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki 3MF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji druku 3D, przeglądania i narzędzi przetwarzania formatu 3MF.',
            keywords: 'przykładowe pliki 3MF, testowe pliki 3MF, pobierz przykłady 3MF, darmowe testowe pliki 3MF, przykłady druku 3D, przykłady formatów 3MF, testowe pliki konwersji druku 3D, testowe pliki .3mf, przykłady produkcji addytywnej, przykłady drukarek 3D'
          },
          schema: {
            name: 'Darmowe przykładowe pliki 3MF – Pobierz testowe pliki druku 3D',
            description: 'Pobierz darmowe przykładowe pliki 3MF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji druku 3D, przeglądania i narzędzi przetwarzania formatu 3MF.'
          },
          hero: {
            title: 'Przykładowe pliki 3MF',
            description: 'Pobierz darmowe przykładowe pliki 3MF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji druku 3D, przeglądania i przetwarzania formatu 3MF.'
          },
          about_description: 'To są testowe pliki druku 3D 3MF (3D Manufacturing Format) w różnych rozmiarach do celów testowych'
        },
        apk: {
          meta: {
            title: 'Darmowe przykładowe pliki APK – Pobierz pliki aplikacji Android | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki pakietów aplikacji Android APK do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji aplikacji Android, analizy APK i narzędzi przetwarzania aplikacji mobilnych.',
            keywords: 'przykładowe pliki APK, testowe pliki APK, pobierz przykłady APK, darmowe testowe pliki APK, przykłady aplikacji Android, przykłady aplikacji mobilnych, przykłady pakietów APK, testowe pliki instalacji APK, testowe pliki .apk, przykłady aplikacji Android, przykłady instalacji aplikacji'
          },
          schema: {
            name: 'Darmowe przykładowe pliki APK – Pobierz testowe pliki aplikacji Android',
            description: 'Pobierz darmowe przykładowe pliki pakietów aplikacji Android APK do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji aplikacji Android, analizy APK i narzędzi przetwarzania aplikacji mobilnych.'
          },
          hero: {
            title: 'Przykładowe pliki APK',
            description: 'Pobierz darmowe przykładowe pliki pakietów aplikacji Android APK do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia instalacji aplikacji Android, analizy APK i przetwarzania aplikacji mobilnych.'
          },
          about_description: 'To są testowe pliki aplikacji APK (Android Package) w różnych rozmiarach do celów testowych'
        },
        mkv: {
          meta: {
            title: 'Darmowe przykładowe pliki MKV – Pobierz pliki wideo Matroska | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki kontenerów wideo Matroska MKV do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania wideo, konwersji multimediów i narzędzi przetwarzania formatu MKV.',
            keywords: 'przykładowe pliki MKV, testowe pliki MKV, pobierz przykłady MKV, darmowe testowe pliki MKV, przykłady wideo Matroska, przykłady kontenerów wideo, testowe pliki odtwarzania MKV, testowe pliki .mkv, przykłady formatów wideo, przykłady kontenerów multimediów, przykłady wideo MKV'
          },
          schema: {
            name: 'Darmowe przykładowe pliki MKV – Pobierz testowe pliki wideo Matroska',
            description: 'Pobierz darmowe przykładowe pliki kontenerów wideo Matroska MKV do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania wideo, konwersji multimediów i narzędzi przetwarzania formatu MKV.'
          },
          hero: {
            title: 'Przykładowe pliki MKV',
            description: 'Pobierz darmowe przykładowe pliki kontenerów wideo Matroska MKV do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia odtwarzania wideo, konwersji multimediów i przetwarzania formatu MKV.'
          },
          about_description: 'To są testowe pliki kontenerów MKV (Matroska Video) w różnych rozmiarach do celów testowych'
        },
        midi: {
          meta: {
            title: 'Darmowe przykładowe pliki MIDI – Pobierz pliki cyfrowego interfejsu instrumentów muzycznych | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki cyfrowego interfejsu instrumentów muzycznych MIDI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania syntezy muzyki, odtwarzania MIDI i narzędzi przetwarzania muzyki cyfrowej.',
            keywords: 'przykładowe pliki MIDI, testowe pliki MIDI, pobierz przykłady MIDI, darmowe testowe pliki MIDI, przykłady syntezy muzyki, przykłady odtwarzania MIDI, przykłady muzyki cyfrowej, testowe pliki .midi, testowe pliki .mid, przykłady formatów muzycznych, przykłady muzyki MIDI'
          },
          schema: {
            name: 'Darmowe przykładowe pliki MIDI – Pobierz testowe pliki cyfrowego interfejsu instrumentów muzycznych',
            description: 'Pobierz darmowe przykładowe pliki cyfrowego interfejsu instrumentów muzycznych MIDI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania syntezy muzyki, odtwarzania MIDI i narzędzi przetwarzania muzyki cyfrowej.'
          },
          hero: {
            title: 'Przykładowe pliki MIDI',
            description: 'Pobierz darmowe przykładowe pliki cyfrowego interfejsu instrumentów muzycznych MIDI do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia syntezy muzyki, odtwarzania MIDI i przetwarzania muzyki cyfrowej.'
          },
          about_description: 'To są testowe pliki MIDI (Musical Instrument Digital Interface) w różnych rozmiarach do celów testowych'
        },
        mdx: {
          meta: {
            title: 'Darmowe przykładowe pliki MDX – Pobierz pliki rozszerzonego Markdown | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki rozszerzonego Markdown MDX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania markdown, dokumentacji komponentów i narzędzi przetwarzania formatu MDX.',
            keywords: 'przykładowe pliki MDX, testowe pliki MDX, pobierz przykłady MDX, darmowe testowe pliki MDX, przykłady rozszerzonego Markdown, przykłady dokumentacji komponentów, testowe pliki przetwarzania MDX, testowe pliki .mdx, przykłady formatów markdown, przykłady formatów dokumentacji'
          },
          schema: {
            name: 'Darmowe przykładowe pliki MDX – Pobierz testowe pliki rozszerzonego Markdown',
            description: 'Pobierz darmowe przykładowe pliki rozszerzonego Markdown MDX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania markdown, dokumentacji komponentów i narzędzi przetwarzania formatu MDX.'
          },
          hero: {
            title: 'Przykładowe pliki MDX',
            description: 'Pobierz darmowe przykładowe pliki rozszerzonego Markdown MDX do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przetwarzania markdown, dokumentacji komponentów i przetwarzania formatu MDX.'
          },
          about_description: 'To są testowe pliki MDX (Markdown Extended) w różnych rozmiarach do celów testowych'
        },
        ico: {
          meta: {
            title: 'Darmowe przykładowe pliki ICO – Pobierz pliki ikon | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki ikon ICO do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji ikon, konwersji obrazów i narzędzi przetwarzania formatu ICO.',
            keywords: 'przykładowe pliki ICO, testowe pliki ICO, pobierz przykłady ICO, darmowe testowe pliki ICO, przykłady ikon, przykłady favicon, testowe pliki ekstrakcji ICO, testowe pliki .ico, przykłady formatów ikon, przykłady formatów obrazów, przykłady ikon ICO'
          },
          schema: {
            name: 'Darmowe przykładowe pliki ICO – Pobierz testowe pliki ikon',
            description: 'Pobierz darmowe przykładowe pliki ikon ICO do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji ikon, konwersji obrazów i narzędzi przetwarzania formatu ICO.'
          },
          hero: {
            title: 'Przykładowe pliki ICO',
            description: 'Pobierz darmowe przykładowe pliki ikon ICO do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia ekstrakcji ikon, konwersji obrazów i przetwarzania formatu ICO.'
          },
          about_description: 'To są testowe pliki ikon ICO (Icon) w różnych rozmiarach do celów testowych'
        },
        iso: {
          meta: {
            title: 'Darmowe przykładowe pliki ISO – Pobierz pliki obrazów dysków | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki archiwów obrazów dysków ISO do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania montowania obrazów dysków, ekstrakcji ISO i narzędzi przetwarzania archiwów.',
            keywords: 'przykładowe pliki ISO, testowe pliki ISO, pobierz przykłady ISO, darmowe testowe pliki ISO, przykłady obrazów dysków, przykłady archiwów ISO, testowe pliki montowania dysków, testowe pliki .iso, przykłady archiwów obrazów, przykłady formatów dysków, przykłady obrazów ISO'
          },
          schema: {
            name: 'Darmowe przykładowe pliki ISO – Pobierz testowe pliki obrazów dysków',
            description: 'Pobierz darmowe przykładowe pliki archiwów obrazów dysków ISO do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania montowania obrazów dysków, ekstrakcji ISO i narzędzi przetwarzania archiwów.'
          },
          hero: {
            title: 'Przykładowe pliki ISO',
            description: 'Pobierz darmowe przykładowe pliki archiwów obrazów dysków ISO do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia montowania obrazów dysków, ekstrakcji ISO i przetwarzania archiwów.'
          },
          about_description: 'To są testowe pliki obrazów dysków ISO (International Organization for Standardization) w różnych rozmiarach do celów testowych'
        },
        ipynb: {
          meta: {
            title: 'Darmowe przykładowe pliki IPYNB – Pobierz pliki Jupyter Notebook | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki Jupyter Notebook IPYNB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania notatników, przepływów pracy data science i narzędzi przetwarzania formatu IPYNB.',
            keywords: 'przykładowe pliki IPYNB, testowe pliki IPYNB, pobierz przykłady IPYNB, darmowe testowe pliki IPYNB, przykłady Jupyter Notebook, przykłady data science, testowe pliki wykonywania notatników, testowe pliki .ipynb, przykłady formatów notatników, przykłady analizy danych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki IPYNB – Pobierz testowe pliki Jupyter Notebook',
            description: 'Pobierz darmowe przykładowe pliki Jupyter Notebook IPYNB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania notatników, przepływów pracy data science i narzędzi przetwarzania formatu IPYNB.'
          },
          hero: {
            title: 'Przykładowe pliki IPYNB',
            description: 'Pobierz darmowe przykładowe pliki Jupyter Notebook IPYNB do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia wykonywania notatników, przepływów pracy data science i przetwarzania formatu IPYNB.'
          },
          about_description: 'To są testowe pliki IPYNB (Jupyter Notebook) w różnych rozmiarach do celów testowych'
        },
        ipa: {
          meta: {
            title: 'Darmowe przykładowe pliki IPA – Pobierz pliki aplikacji iOS | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki archiwów aplikacji iOS IPA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji aplikacji iOS, analizy IPA i narzędzi przetwarzania aplikacji mobilnych.',
            keywords: 'przykładowe pliki IPA, testowe pliki IPA, pobierz przykłady IPA, darmowe testowe pliki IPA, przykłady aplikacji iOS, przykłady aplikacji mobilnych, przykłady pakietów IPA, testowe pliki instalacji IPA, testowe pliki .ipa, przykłady aplikacji iOS, przykłady archiwów aplikacji'
          },
          schema: {
            name: 'Darmowe przykładowe pliki IPA – Pobierz testowe pliki aplikacji iOS',
            description: 'Pobierz darmowe przykładowe pliki archiwów aplikacji iOS IPA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji aplikacji iOS, analizy IPA i narzędzi przetwarzania aplikacji mobilnych.'
          },
          hero: {
            title: 'Przykładowe pliki IPA',
            description: 'Pobierz darmowe przykładowe pliki archiwów aplikacji iOS IPA do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia instalacji aplikacji iOS, analizy IPA i przetwarzania aplikacji mobilnych.'
          },
          about_description: 'To są testowe pliki aplikacji IPA (iOS App Store Package) w różnych rozmiarach do celów testowych'
        },
        heif: {
          meta: {
            title: 'Darmowe przykładowe pliki HEIF – Pobierz pliki High Efficiency Image Format | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki High Efficiency Image Format HEIF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompresji obrazów, konwersji HEIF i narzędzi przetwarzania nowoczesnych formatów obrazów.',
            keywords: 'przykładowe pliki HEIF, testowe pliki HEIF, pobierz przykłady HEIF, darmowe testowe pliki HEIF, przykłady High Efficiency Image Format, przykłady obrazów HEIF, testowe pliki kompresji obrazów, testowe pliki .heif, przykłady nowoczesnych formatów obrazów, przykłady konwersji HEIF'
          },
          schema: {
            name: 'Darmowe przykładowe pliki HEIF – Pobierz testowe pliki High Efficiency Image Format',
            description: 'Pobierz darmowe przykładowe pliki High Efficiency Image Format HEIF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompresji obrazów, konwersji HEIF i narzędzi przetwarzania nowoczesnych formatów obrazów.'
          },
          hero: {
            title: 'Przykładowe pliki HEIF',
            description: 'Pobierz darmowe przykładowe pliki High Efficiency Image Format HEIF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia kompresji obrazów, konwersji HEIF i przetwarzania nowoczesnych formatów obrazów.'
          },
          about_description: 'To są testowe pliki HEIF (High Efficiency Image Format) w różnych rozmiarach do celów testowych'
        },
        heic: {
          meta: {
            title: 'Darmowe przykładowe pliki HEIC – Pobierz pliki High Efficiency Image Container | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki High Efficiency Image Container HEIC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompresji obrazów, konwersji HEIC i narzędzi przetwarzania nowoczesnych formatów obrazów.',
            keywords: 'przykładowe pliki HEIC, testowe pliki HEIC, pobierz przykłady HEIC, darmowe testowe pliki HEIC, przykłady High Efficiency Image Container, przykłady obrazów HEIC, testowe pliki kompresji obrazów, testowe pliki .heic, przykłady nowoczesnych formatów obrazów, przykłady konwersji HEIC'
          },
          schema: {
            name: 'Darmowe przykładowe pliki HEIC – Pobierz testowe pliki High Efficiency Image Container',
            description: 'Pobierz darmowe przykładowe pliki High Efficiency Image Container HEIC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompresji obrazów, konwersji HEIC i narzędzi przetwarzania nowoczesnych formatów obrazów.'
          },
          hero: {
            title: 'Przykładowe pliki HEIC',
            description: 'Pobierz darmowe przykładowe pliki High Efficiency Image Container HEIC do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia kompresji obrazów, konwersji HEIC i przetwarzania nowoczesnych formatów obrazów.'
          },
          about_description: 'To są testowe pliki HEIC (High Efficiency Image Container) w różnych rozmiarach do celów testowych'
        },
        exr: {
          meta: {
            title: 'Darmowe przykładowe pliki EXR – Pobierz pliki OpenEXR | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki OpenEXR wysokiego zakresu dynamicznego EXR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania obrazów HDR, konwersji EXR i narzędzi przeglądania wysokiego zakresu dynamicznego.',
            keywords: 'przykładowe pliki EXR, testowe pliki EXR, pobierz przykłady EXR, darmowe testowe pliki EXR, przykłady obrazów OpenEXR, pliki obrazów HDR, pliki obrazów EXR, testowe pliki .exr, obrazy wysokiego zakresu dynamicznego, testowe pliki konwersji EXR'
          },
          schema: {
            name: 'Darmowe przykładowe pliki EXR – Pobierz testowe pliki OpenEXR',
            description: 'Pobierz darmowe przykładowe pliki OpenEXR wysokiego zakresu dynamicznego EXR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania obrazów HDR, konwersji EXR i narzędzi przeglądania wysokiego zakresu dynamicznego.'
          },
          hero: {
            title: 'Przykładowe pliki EXR',
            description: 'Pobierz darmowe przykładowe pliki OpenEXR wysokiego zakresu dynamicznego EXR do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przetwarzania obrazów HDR, konwersji EXR i przeglądania wysokiego zakresu dynamicznego.'
          },
          about_description: 'To są testowe pliki EXR (OpenEXR) wysokiego zakresu dynamicznego w różnych rozmiarach do celów testowych'
        },
        exe: {
          meta: {
            title: 'Darmowe przykładowe pliki EXE – Pobierz pliki wykonywalne Windows | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki aplikacji wykonywalnych Windows EXE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy plików wykonywalnych, przetwarzania aplikacji Windows i narzędzi obsługi plików binarnych.',
            keywords: 'przykładowe pliki EXE, testowe pliki EXE, pobierz przykłady EXE, darmowe testowe pliki EXE, przykłady plików wykonywalnych Windows, pliki aplikacji, przykłady binarnych EXE, testowe pliki .exe, przykłady analizy plików wykonywalnych, przykłady aplikacji Windows'
          },
          schema: {
            name: 'Darmowe przykładowe pliki EXE – Pobierz testowe pliki wykonywalne Windows',
            description: 'Pobierz darmowe przykładowe pliki aplikacji wykonywalnych Windows EXE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy plików wykonywalnych, przetwarzania aplikacji Windows i narzędzi obsługi plików binarnych.'
          },
          hero: {
            title: 'Przykładowe pliki EXE',
            description: 'Pobierz darmowe przykładowe pliki aplikacji wykonywalnych Windows EXE do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia analizy plików wykonywalnych, przetwarzania aplikacji Windows i obsługi plików binarnych.'
          },
          about_description: 'To są testowe pliki aplikacji EXE (Windows Executable) w różnych rozmiarach do celów testowych'
        },
        eps: {
          meta: {
            title: 'Darmowe przykładowe pliki EPS – Pobierz pliki Encapsulated PostScript | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki obrazów wektorowych Encapsulated PostScript EPS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania grafiki wektorowej, konwersji EPS i narzędzi obsługi formatu PostScript.',
            keywords: 'przykładowe pliki EPS, testowe pliki EPS, pobierz przykłady EPS, darmowe testowe pliki EPS, przykłady Encapsulated PostScript, przykłady grafiki wektorowej, przykłady obrazów EPS, testowe pliki .eps, przykłady formatu PostScript, przykłady formatów wektorowych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki EPS – Pobierz testowe pliki Encapsulated PostScript',
            description: 'Pobierz darmowe przykładowe pliki obrazów wektorowych Encapsulated PostScript EPS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania grafiki wektorowej, konwersji EPS i narzędzi obsługi formatu PostScript.'
          },
          hero: {
            title: 'Przykładowe pliki EPS',
            description: 'Pobierz darmowe przykładowe pliki obrazów wektorowych Encapsulated PostScript EPS do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przetwarzania grafiki wektorowej, konwersji EPS i obsługi formatu PostScript.'
          },
          about_description: 'To są testowe pliki obrazów wektorowych EPS (Encapsulated PostScript) w różnych rozmiarach do celów testowych'
        },
        elf: {
          meta: {
            title: 'Darmowe przykładowe pliki ELF – Pobierz pliki Executable and Linkable Format | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki binarne Executable and Linkable Format ELF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy binarnych, parsowania ELF i narzędzi przetwarzania formatów wykonywalnych.',
            keywords: 'przykładowe pliki ELF, testowe pliki ELF, pobierz przykłady ELF, darmowe testowe pliki ELF, przykłady Executable and Linkable Format, przykłady plików binarnych, przykłady wykonywalnych ELF, testowe pliki .elf, przykłady analizy binarnych, przykłady formatów wykonywalnych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki ELF – Pobierz testowe pliki Executable and Linkable Format',
            description: 'Pobierz darmowe przykładowe pliki binarne Executable and Linkable Format ELF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy binarnych, parsowania ELF i narzędzi przetwarzania formatów wykonywalnych.'
          },
          hero: {
            title: 'Przykładowe pliki ELF',
            description: 'Pobierz darmowe przykładowe pliki binarne Executable and Linkable Format ELF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia analizy binarnych, parsowania ELF i przetwarzania formatów wykonywalnych.'
          },
          about_description: 'To są testowe pliki binarne ELF (Executable and Linkable Format) w różnych rozmiarach do celów testowych'
        },
        editorconfig: {
          meta: {
            title: 'Darmowe przykładowe pliki EditorConfig – Pobierz pliki konfiguracji edytora | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji edytora EditorConfig do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania konfiguracji edytora, narzędzi formatowania kodu i konfiguracji środowiska deweloperskiego.',
            keywords: 'przykładowe pliki EditorConfig, testowe pliki EditorConfig, pobierz przykłady EditorConfig, darmowe testowe pliki EditorConfig, przykłady konfiguracji edytora, testowe pliki .editorconfig, przykłady formatowania kodu, przykłady ustawień edytora, przykłady konfiguracji deweloperskiej'
          },
          schema: {
            name: 'Darmowe przykładowe pliki EditorConfig – Pobierz testowe pliki konfiguracji edytora',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji edytora EditorConfig do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania konfiguracji edytora, narzędzi formatowania kodu i konfiguracji środowiska deweloperskiego.'
          },
          hero: {
            title: 'Przykładowe pliki EditorConfig',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji edytora EditorConfig do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania konfiguracji edytora, formatowania kodu i konfiguracji środowiska deweloperskiego.'
          },
          about_description: 'To są testowe pliki konfiguracji edytora EditorConfig w różnych rozmiarach do celów testowych'
        },
        dxf: {
          meta: {
            title: 'Darmowe przykładowe pliki DXF – Pobierz pliki AutoCAD Drawing Exchange Format | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki CAD AutoCAD Drawing Exchange Format DXF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania plików CAD, konwersji DXF i narzędzi obsługi formatów rysunków.',
            keywords: 'przykładowe pliki DXF, testowe pliki DXF, pobierz przykłady DXF, darmowe testowe pliki DXF, przykłady AutoCAD DXF, przykłady plików CAD, przykłady rysunków DXF, testowe pliki .dxf, przykłady formatów CAD, przykłady formatów wymiany rysunków'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DXF – Pobierz testowe pliki AutoCAD Drawing Exchange Format',
            description: 'Pobierz darmowe przykładowe pliki CAD AutoCAD Drawing Exchange Format DXF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania plików CAD, konwersji DXF i narzędzi obsługi formatów rysunków.'
          },
          hero: {
            title: 'Przykładowe pliki DXF',
            description: 'Pobierz darmowe przykładowe pliki CAD AutoCAD Drawing Exchange Format DXF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przetwarzania plików CAD, konwersji DXF i obsługi formatów rysunków.'
          },
          about_description: 'To są testowe pliki CAD DXF (AutoCAD Drawing Exchange Format) w różnych rozmiarach do celów testowych'
        },
        dwg: {
          meta: {
            title: 'Darmowe przykładowe pliki DWG – Pobierz pliki rysunków AutoCAD | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki CAD rysunków AutoCAD DWG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania plików CAD, konwersji DWG i narzędzi obsługi formatów AutoCAD.',
            keywords: 'przykładowe pliki DWG, testowe pliki DWG, pobierz przykłady DWG, darmowe testowe pliki DWG, przykłady AutoCAD DWG, przykłady plików CAD, przykłady rysunków DWG, testowe pliki .dwg, przykłady formatów CAD, przykłady rysunków AutoCAD'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DWG – Pobierz testowe pliki rysunków AutoCAD',
            description: 'Pobierz darmowe przykładowe pliki CAD rysunków AutoCAD DWG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania plików CAD, konwersji DWG i narzędzi obsługi formatów AutoCAD.'
          },
          hero: {
            title: 'Przykładowe pliki DWG',
            description: 'Pobierz darmowe przykładowe pliki CAD rysunków AutoCAD DWG do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przetwarzania plików CAD, konwersji DWG i obsługi formatów AutoCAD.'
          },
          about_description: 'To są testowe pliki CAD DWG (AutoCAD Drawing) w różnych rozmiarach do celów testowych'
        },
        dockerfile: {
          meta: {
            title: 'Darmowe przykładowe pliki Dockerfile – Pobierz pliki konfiguracji Docker | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji kontenerów Docker Dockerfile do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania procesów budowania Docker, parsowania konfiguracji kontenerów i narzędzi DevOps.',
            keywords: 'przykładowe pliki Dockerfile, testowe pliki Dockerfile, pobierz przykłady Dockerfile, darmowe testowe pliki Dockerfile, przykłady konfiguracji Docker, przykłady konfiguracji kontenerów, testowe pliki .dockerfile, przykłady budowania Docker, przykłady konteneryzacji'
          },
          schema: {
            name: 'Darmowe przykładowe pliki Dockerfile – Pobierz testowe pliki konfiguracji Docker',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji kontenerów Docker Dockerfile do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania procesów budowania Docker, parsowania konfiguracji kontenerów i narzędzi DevOps.'
          },
          hero: {
            title: 'Przykładowe pliki Dockerfile',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji kontenerów Docker Dockerfile do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje procesy budowania Docker, parsowania konfiguracji kontenerów i narzędzia DevOps.'
          },
          about_description: 'To są testowe pliki konfiguracji kontenerów Docker Dockerfile w różnych rozmiarach do celów testowych'
        },
        'docker-compose-yml': {
          meta: {
            title: 'Darmowe przykładowe pliki Docker Compose YML – Pobierz pliki konfiguracji Docker Compose | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji wielokontenerowych Docker Docker Compose YML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania Docker Compose, orkiestracji wielokontenerowej i narzędzi konfiguracji DevOps.',
            keywords: 'przykładowe pliki Docker Compose YML, testowe pliki docker-compose.yml, pobierz przykłady Docker Compose, darmowe testowe pliki docker-compose, przykłady konfiguracji wielokontenerowej, przykłady orkiestracji Docker, testowe pliki .yml, przykłady orkiestracji kontenerów'
          },
          schema: {
            name: 'Darmowe przykładowe pliki Docker Compose YML – Pobierz testowe pliki konfiguracji Docker Compose',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji wielokontenerowych Docker Docker Compose YML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania Docker Compose, orkiestracji wielokontenerowej i narzędzi konfiguracji DevOps.'
          },
          hero: {
            title: 'Przykładowe pliki Docker Compose YML',
            description: 'Pobierz darmowe przykładowe pliki konfiguracji wielokontenerowych Docker Docker Compose YML do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania Docker Compose, orkiestracji wielokontenerowej i konfiguracji DevOps.'
          },
          about_description: 'To są testowe pliki konfiguracji wielokontenerowych Docker Docker Compose YML w różnych rozmiarach do celów testowych'
        },
        dmp: {
          meta: {
            title: 'Darmowe przykładowe pliki DMP – Pobierz pliki zrzutów pamięci Windows | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki zrzutów pamięci Windows DMP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy zrzutów pamięci, debugowania awarii i narzędzi diagnostycznych systemu.',
            keywords: 'przykładowe pliki DMP, testowe pliki DMP, pobierz przykłady DMP, darmowe testowe pliki DMP, przykłady zrzutów pamięci Windows, przykłady zrzutów awarii, testowe pliki .dmp, przykłady analizy pamięci, przykłady diagnostyki systemu'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DMP – Pobierz testowe pliki zrzutów pamięci Windows',
            description: 'Pobierz darmowe przykładowe pliki zrzutów pamięci Windows DMP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy zrzutów pamięci, debugowania awarii i narzędzi diagnostycznych systemu.'
          },
          hero: {
            title: 'Przykładowe pliki DMP',
            description: 'Pobierz darmowe przykładowe pliki zrzutów pamięci Windows DMP do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia analizy zrzutów pamięci, debugowania awarii i diagnostyki systemu.'
          },
          about_description: 'To są testowe pliki DMP (Windows Memory Dump) w różnych rozmiarach do celów testowych'
        },
        dng: {
          meta: {
            title: 'Darmowe przykładowe pliki DNG – Pobierz pliki Digital Negative Format | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki surowych obrazów Digital Negative DNG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania obrazów RAW, konwersji DNG i przepływów pracy cyfrowej fotografii.',
            keywords: 'przykładowe pliki DNG, testowe pliki DNG, pobierz przykłady DNG, darmowe testowe pliki DNG, przykłady Digital Negative, przykłady obrazów RAW, przykłady zdjęć DNG, testowe pliki .dng, przykłady formatów RAW, przykłady RAW z aparatu'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DNG – Pobierz testowe pliki Digital Negative Format',
            description: 'Pobierz darmowe przykładowe pliki surowych obrazów Digital Negative DNG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania obrazów RAW, konwersji DNG i przepływów pracy cyfrowej fotografii.'
          },
          hero: {
            title: 'Przykładowe pliki DNG',
            description: 'Pobierz darmowe przykładowe pliki surowych obrazów Digital Negative DNG do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przetwarzania obrazów RAW, konwersji DNG i przepływów pracy cyfrowej fotografii.'
          },
          about_description: 'To są testowe pliki surowych obrazów DNG (Digital Negative) w różnych rozmiarach do celów testowych'
        },
        dmg: {
          meta: {
            title: 'Darmowe przykładowe pliki DMG – Pobierz pliki obrazów dysku macOS | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki archiwum obrazów dysku macOS DMG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji aplikacji macOS, ekstrakcji DMG i narzędzi przetwarzania obrazów dysku.',
            keywords: 'przykładowe pliki DMG, testowe pliki DMG, pobierz przykłady DMG, darmowe testowe pliki DMG, przykłady obrazów dysku macOS, przykłady aplikacji Mac, przykłady archiwów DMG, testowe pliki .dmg, przykłady obrazów dysku, przykłady instalatorów macOS'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DMG – Pobierz testowe pliki obrazów dysku macOS',
            description: 'Pobierz darmowe przykładowe pliki archiwum obrazów dysku macOS DMG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji aplikacji macOS, ekstrakcji DMG i narzędzi przetwarzania obrazów dysku.'
          },
          hero: {
            title: 'Przykładowe pliki DMG',
            description: 'Pobierz darmowe przykładowe pliki archiwum obrazów dysku macOS DMG do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia instalacji aplikacji macOS, ekstrakcji DMG i przetwarzania obrazów dysku.'
          },
          about_description: 'To są testowe pliki archiwum DMG (macOS Disk Image) w różnych rozmiarach do celów testowych'
        },
        der: {
          meta: {
            title: 'Darmowe przykładowe pliki DER – Pobierz pliki certyfikatów Distinguished Encoding Rules | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki certyfikatów Distinguished Encoding Rules DER do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania certyfikatów, konfiguracji SSL/TLS i narzędzi przetwarzania plików kryptograficznych.',
            keywords: 'przykładowe pliki DER, testowe pliki DER, pobierz przykłady DER, darmowe testowe pliki DER, przykłady certyfikatów, przykłady certyfikatów SSL, przykłady certyfikatów DER, testowe pliki .der, przykłady kryptograficzne, przykłady formatów certyfikatów'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DER – Pobierz testowe pliki certyfikatów Distinguished Encoding Rules',
            description: 'Pobierz darmowe przykładowe pliki certyfikatów Distinguished Encoding Rules DER do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania certyfikatów, konfiguracji SSL/TLS i narzędzi przetwarzania plików kryptograficznych.'
          },
          hero: {
            title: 'Przykładowe pliki DER',
            description: 'Pobierz darmowe przykładowe pliki certyfikatów Distinguished Encoding Rules DER do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania certyfikatów, konfiguracji SSL/TLS i przetwarzania plików kryptograficznych.'
          },
          about_description: 'To są testowe pliki certyfikatów DER (Distinguished Encoding Rules) w różnych rozmiarach do celów testowych'
        },
        dem: {
          meta: {
            title: 'Darmowe przykładowe pliki DEM – Pobierz pliki Digital Elevation Model | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki danych geograficznych Digital Elevation Model DEM do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania GIS, mapowania terenu i narzędzi przetwarzania danych wysokościowych.',
            keywords: 'przykładowe pliki DEM, testowe pliki DEM, pobierz przykłady DEM, darmowe testowe pliki DEM, przykłady Digital Elevation Model, przykłady danych GIS, przykłady danych terenu, testowe pliki .dem, przykłady modeli wysokościowych, przykłady danych geograficznych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DEM – Pobierz testowe pliki Digital Elevation Model',
            description: 'Pobierz darmowe przykładowe pliki danych geograficznych Digital Elevation Model DEM do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania GIS, mapowania terenu i narzędzi przetwarzania danych wysokościowych.'
          },
          hero: {
            title: 'Przykładowe pliki DEM',
            description: 'Pobierz darmowe przykładowe pliki danych geograficznych Digital Elevation Model DEM do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje oprogramowanie GIS, mapowanie terenu i narzędzia przetwarzania danych wysokościowych.'
          },
          about_description: 'To są testowe pliki danych geograficznych DEM (Digital Elevation Model) w różnych rozmiarach do celów testowych'
        },
        dds: {
          meta: {
            title: 'Darmowe przykładowe pliki DDS – Pobierz pliki obrazów DirectDraw Surface | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki obrazów tekstur DirectDraw Surface DDS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania tekstur gier, konwersji DDS i narzędzi silników graficznych.',
            keywords: 'przykładowe pliki DDS, testowe pliki DDS, pobierz przykłady DDS, darmowe testowe pliki DDS, przykłady DirectDraw Surface, przykłady obrazów tekstur, przykłady tekstur DDS, testowe pliki .dds, przykłady tekstur gier, przykłady formatów graficznych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DDS – Pobierz testowe pliki obrazów DirectDraw Surface',
            description: 'Pobierz darmowe przykładowe pliki obrazów tekstur DirectDraw Surface DDS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania tekstur gier, konwersji DDS i narzędzi silników graficznych.'
          },
          hero: {
            title: 'Przykładowe pliki DDS',
            description: 'Pobierz darmowe przykładowe pliki obrazów tekstur DirectDraw Surface DDS do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przetwarzania tekstur gier, konwersji DDS i silników graficznych.'
          },
          about_description: 'To są testowe pliki obrazów tekstur DDS (DirectDraw Surface) w różnych rozmiarach do celów testowych'
        },
        dbf: {
          meta: {
            title: 'Darmowe przykładowe pliki DBF – Pobierz pliki bazy danych dBASE | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki tabel bazy danych dBASE DBF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji baz danych, parsowania DBF i narzędzi obsługi starszych formatów baz danych.',
            keywords: 'przykładowe pliki DBF, testowe pliki DBF, pobierz przykłady DBF, darmowe testowe pliki DBF, przykłady bazy danych dBASE, przykłady tabel baz danych, przykłady baz danych DBF, testowe pliki .dbf, przykłady starszych baz danych, przykłady formatów baz danych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DBF – Pobierz testowe pliki bazy danych dBASE',
            description: 'Pobierz darmowe przykładowe pliki tabel bazy danych dBASE DBF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji baz danych, parsowania DBF i narzędzi obsługi starszych formatów baz danych.'
          },
          hero: {
            title: 'Przykładowe pliki DBF',
            description: 'Pobierz darmowe przykładowe pliki tabel bazy danych dBASE DBF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia konwersji baz danych, parsowania DBF i obsługi starszych formatów baz danych.'
          },
          about_description: 'To są testowe pliki tabel DBF (dBASE Database) w różnych rozmiarach do celów testowych'
        },
        dav: {
          meta: {
            title: 'Darmowe przykładowe pliki DAV – Pobierz pliki wideo DAV | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki wideo nadzoru DAV DAV do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania wideo nadzoru, konwersji DAV i narzędzi przetwarzania plików kamer bezpieczeństwa.',
            keywords: 'przykładowe pliki DAV, testowe pliki DAV, pobierz przykłady DAV, darmowe testowe pliki DAV, przykłady wideo DAV, przykłady wideo nadzoru, przykłady kamer DAV, testowe pliki .dav, przykłady kamer bezpieczeństwa, przykłady formatów wideo'
          },
          schema: {
            name: 'Darmowe przykładowe pliki DAV – Pobierz testowe pliki wideo DAV',
            description: 'Pobierz darmowe przykładowe pliki wideo nadzoru DAV DAV do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania wideo nadzoru, konwersji DAV i narzędzi przetwarzania plików kamer bezpieczeństwa.'
          },
          hero: {
            title: 'Przykładowe pliki DAV',
            description: 'Pobierz darmowe przykładowe pliki wideo nadzoru DAV DAV do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia odtwarzania wideo nadzoru, konwersji DAV i przetwarzania plików kamer bezpieczeństwa.'
          },
          about_description: 'To są testowe pliki wideo nadzoru DAV w różnych rozmiarach do celów testowych'
        },
        'customer-database-sql': {
          meta: {
            title: 'Darmowe przykładowe pliki Customer Database SQL – Pobierz pliki bazy danych SQL | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki skryptów bazy danych SQL Customer Database SQL do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania importu baz danych SQL, przetwarzania danych klientów i narzędzi zarządzania bazami danych.',
            keywords: 'przykładowe pliki Customer Database SQL, testowe pliki bazy danych SQL, pobierz przykłady SQL, darmowe testowe pliki SQL, przykłady skryptów baz danych, przykłady danych klientów, przykłady importów SQL, testowe pliki .sql, przykłady zarządzania bazami danych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki Customer Database SQL – Pobierz testowe pliki bazy danych SQL',
            description: 'Pobierz darmowe przykładowe pliki skryptów bazy danych SQL Customer Database SQL do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania importu baz danych SQL, przetwarzania danych klientów i narzędzi zarządzania bazami danych.'
          },
          hero: {
            title: 'Przykładowe pliki Customer Database SQL',
            description: 'Pobierz darmowe przykładowe pliki skryptów bazy danych SQL Customer Database SQL do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia importu baz danych SQL, przetwarzania danych klientów i zarządzania bazami danych.'
          },
          about_description: 'To są testowe pliki skryptów bazy danych Customer Database SQL w różnych rozmiarach do celów testowych'
        },
        cue: {
          meta: {
            title: 'Darmowe przykładowe pliki CUE – Pobierz pliki CUE Sheet | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki obrazów dysków audio CUE Sheet CUE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania nagrywania dysków audio, parsowania CUE Sheet i narzędzi tworzenia obrazów CD/DVD.',
            keywords: 'przykładowe pliki CUE, testowe pliki CUE, pobierz przykłady CUE, darmowe testowe pliki CUE, przykłady CUE Sheet, przykłady dysków audio, przykłady obrazów dysków CUE, testowe pliki .cue, przykłady obrazów CD, przykłady formatów audio'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CUE – Pobierz testowe pliki CUE Sheet',
            description: 'Pobierz darmowe przykładowe pliki obrazów dysków audio CUE Sheet CUE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania nagrywania dysków audio, parsowania CUE Sheet i narzędzi tworzenia obrazów CD/DVD.'
          },
          hero: {
            title: 'Przykładowe pliki CUE',
            description: 'Pobierz darmowe przykładowe pliki obrazów dysków audio CUE Sheet CUE do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia nagrywania dysków audio, parsowania CUE Sheet i tworzenia obrazów CD/DVD.'
          },
          about_description: 'To są testowe pliki obrazów dysków audio CUE (CUE Sheet) w różnych rozmiarach do celów testowych'
        },
        csr: {
          meta: {
            title: 'Darmowe przykładowe pliki CSR – Pobierz pliki Certificate Signing Request | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki Certificate Signing Request CSR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania generowania certyfikatów SSL, parsowania CSR i narzędzi urzędów certyfikacji.',
            keywords: 'przykładowe pliki CSR, testowe pliki CSR, pobierz przykłady CSR, darmowe testowe pliki CSR, przykłady Certificate Signing Request, przykłady certyfikatów SSL, przykłady certyfikatów CSR, testowe pliki .csr, przykłady urzędów certyfikacji'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CSR – Pobierz testowe pliki Certificate Signing Request',
            description: 'Pobierz darmowe przykładowe pliki Certificate Signing Request CSR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania generowania certyfikatów SSL, parsowania CSR i narzędzi urzędów certyfikacji.'
          },
          hero: {
            title: 'Przykładowe pliki CSR',
            description: 'Pobierz darmowe przykładowe pliki Certificate Signing Request CSR do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia generowania certyfikatów SSL, parsowania CSR i urzędów certyfikacji.'
          },
          about_description: 'To są testowe pliki CSR (Certificate Signing Request) w różnych rozmiarach do celów testowych'
        },
        cs: {
          meta: {
            title: 'Darmowe przykładowe pliki C# – Pobierz pliki kodu źródłowego C# | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki kodu źródłowego C# C# do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy kodu C#, kompilacji .NET i narzędzi deweloperskich C#.',
            keywords: 'przykładowe pliki C#, testowe pliki C#, pobierz przykłady C#, darmowe testowe pliki C#, przykłady kodu źródłowego C#, przykłady kodu .NET, przykłady programów C#, testowe pliki .cs, przykłady deweloperskie C#, przykłady kodu C#'
          },
          schema: {
            name: 'Darmowe przykładowe pliki C# – Pobierz testowe pliki kodu źródłowego C#',
            description: 'Pobierz darmowe przykładowe pliki kodu źródłowego C# C# do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy kodu C#, kompilacji .NET i narzędzi deweloperskich C#.'
          },
          hero: {
            title: 'Przykładowe pliki C#',
            description: 'Pobierz darmowe przykładowe pliki kodu źródłowego C# C# do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia analizy kodu C#, kompilacji .NET i deweloperskie C#.'
          },
          about_description: 'To są testowe pliki kodu źródłowego C# w różnych rozmiarach do celów testowych'
        },
        cpio: {
          meta: {
            title: 'Darmowe przykładowe pliki CPIO – Pobierz pliki archiwum CPIO | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki archiwum CPIO CPIO do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów CPIO, kompresji CPIO i narzędzi archiwów Unix.',
            keywords: 'przykładowe pliki CPIO, testowe pliki CPIO, pobierz przykłady CPIO, darmowe testowe pliki CPIO, przykłady archiwów CPIO, przykłady archiwów Unix, przykłady kompresji CPIO, testowe pliki .cpio, przykłady formatów archiwów'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CPIO – Pobierz testowe pliki archiwum CPIO',
            description: 'Pobierz darmowe przykładowe pliki archiwum CPIO CPIO do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów CPIO, kompresji CPIO i narzędzi archiwów Unix.'
          },
          hero: {
            title: 'Przykładowe pliki CPIO',
            description: 'Pobierz darmowe przykładowe pliki archiwum CPIO CPIO do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia ekstrakcji archiwów CPIO, kompresji CPIO i archiwów Unix.'
          },
          about_description: 'To są testowe pliki archiwum CPIO (Copy In, Copy Out) w różnych rozmiarach do celów testowych'
        },
        'config-ini': {
          meta: {
            title: 'Darmowe przykładowe pliki Config INI – Pobierz pliki konfiguracyjne INI | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki konfiguracyjne INI Config INI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania plików INI, zarządzania konfiguracją i narzędzi ustawień aplikacji.',
            keywords: 'przykładowe pliki Config INI, testowe pliki INI, pobierz przykłady INI, darmowe testowe pliki INI, przykłady konfiguracyjne INI, przykłady konfiguracji INI, testowe pliki .ini, przykłady plików konfiguracyjnych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki Config INI – Pobierz testowe pliki konfiguracyjne INI',
            description: 'Pobierz darmowe przykładowe pliki konfiguracyjne INI Config INI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania plików INI, zarządzania konfiguracją i narzędzi ustawień aplikacji.'
          },
          hero: {
            title: 'Przykładowe pliki Config INI',
            description: 'Pobierz darmowe przykładowe pliki konfiguracyjne INI Config INI do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania plików INI, zarządzania konfiguracją i ustawień aplikacji.'
          },
          about_description: 'To są testowe pliki konfiguracyjne Config INI w różnych rozmiarach do celów testowych'
        },
        conf: {
          meta: {
            title: 'Darmowe przykładowe pliki CONF – Pobierz pliki konfiguracyjne | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki konfiguracyjne CONF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania plików konfiguracyjnych, konfiguracji serwerów i narzędzi ustawień aplikacji.',
            keywords: 'przykładowe pliki CONF, testowe pliki CONF, pobierz przykłady CONF, darmowe testowe pliki CONF, przykłady plików konfiguracyjnych, przykłady konfiguracji serwerów, testowe pliki .conf, przykłady plików konfiguracyjnych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CONF – Pobierz testowe pliki konfiguracyjne',
            description: 'Pobierz darmowe przykładowe pliki konfiguracyjne CONF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania plików konfiguracyjnych, konfiguracji serwerów i narzędzi ustawień aplikacji.'
          },
          hero: {
            title: 'Przykładowe pliki CONF',
            description: 'Pobierz darmowe przykładowe pliki konfiguracyjne CONF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia parsowania plików konfiguracyjnych, konfiguracji serwerów i ustawień aplikacji.'
          },
          about_description: 'To są testowe pliki konfiguracyjne CONF w różnych rozmiarach do celów testowych'
        },
        cmd: {
          meta: {
            title: 'Darmowe przykładowe pliki CMD – Pobierz pliki skryptów poleceń Windows | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki skryptów poleceń Windows CMD do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania skryptów wsadowych, przetwarzania poleceń Windows i narzędzi automatyzacji.',
            keywords: 'przykładowe pliki CMD, testowe pliki CMD, pobierz przykłady CMD, darmowe testowe pliki CMD, przykłady skryptów poleceń Windows, przykłady skryptów wsadowych, testowe pliki .cmd, przykłady skryptów poleceń'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CMD – Pobierz testowe pliki skryptów poleceń Windows',
            description: 'Pobierz darmowe przykładowe pliki skryptów poleceń Windows CMD do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania skryptów wsadowych, przetwarzania poleceń Windows i narzędzi automatyzacji.'
          },
          hero: {
            title: 'Przykładowe pliki CMD',
            description: 'Pobierz darmowe przykładowe pliki skryptów poleceń Windows CMD do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia wykonywania skryptów wsadowych, przetwarzania poleceń Windows i automatyzacji.'
          },
          about_description: 'To są testowe pliki CMD (Windows Command Script) w różnych rozmiarach do celów testowych'
        },
        'can-log': {
          meta: {
            title: 'Darmowe przykładowe pliki CAN Log – Pobierz pliki logów Controller Area Network | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki logów Controller Area Network CAN Log do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy magistrali CAN, diagnostyki motoryzacyjnej i narzędzi protokołów sieciowych.',
            keywords: 'przykładowe pliki CAN Log, testowe pliki logów CAN, pobierz przykłady logów CAN, darmowe testowe pliki logów CAN, przykłady Controller Area Network, przykłady magistrali CAN, testowe pliki .log, przykłady diagnostyki motoryzacyjnej'
          },
          schema: {
            name: 'Darmowe przykładowe pliki CAN Log – Pobierz testowe pliki logów Controller Area Network',
            description: 'Pobierz darmowe przykładowe pliki logów Controller Area Network CAN Log do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy magistrali CAN, diagnostyki motoryzacyjnej i narzędzi protokołów sieciowych.'
          },
          hero: {
            title: 'Przykładowe pliki CAN Log',
            description: 'Pobierz darmowe przykładowe pliki logów Controller Area Network CAN Log do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia analizy magistrali CAN, diagnostyki motoryzacyjnej i protokołów sieciowych.'
          },
          about_description: 'To są testowe pliki logów CAN Log (Controller Area Network) w różnych rozmiarach do celów testowych'
        },
        bvh: {
          meta: {
            title: 'Darmowe przykładowe pliki BVH – Pobierz pliki BioVision Hierarchy | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki motion capture BioVision Hierarchy BVH do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania motion capture, animacji 3D i narzędzi rigowania postaci.',
            keywords: 'przykładowe pliki BVH, testowe pliki BVH, pobierz przykłady BVH, darmowe testowe pliki BVH, przykłady BioVision Hierarchy, przykłady motion capture, przykłady animacji BVH, testowe pliki .bvh, przykłady animacji 3D'
          },
          schema: {
            name: 'Darmowe przykładowe pliki BVH – Pobierz testowe pliki motion capture BioVision Hierarchy',
            description: 'Pobierz darmowe przykładowe pliki motion capture BioVision Hierarchy BVH do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania motion capture, animacji 3D i narzędzi rigowania postaci.'
          },
          hero: {
            title: 'Przykładowe pliki BVH',
            description: 'Pobierz darmowe przykładowe pliki motion capture BioVision Hierarchy BVH do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia odtwarzania motion capture, animacji 3D i rigowania postaci.'
          },
          about_description: 'To są testowe pliki motion capture BVH (BioVision Hierarchy) w różnych rozmiarach do celów testowych'
        },
        'barcode-svg': {
          meta: {
            title: 'Darmowe przykładowe pliki Barcode SVG – Pobierz pliki obrazów kodów kreskowych SVG | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki obrazów kodów kreskowych SVG Barcode SVG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania skanowania kodów kreskowych, renderowania SVG i narzędzi grafiki wektorowej.',
            keywords: 'przykładowe pliki Barcode SVG, testowe pliki kodów kreskowych SVG, pobierz przykłady kodów kreskowych SVG, darmowe testowe pliki kodów kreskowych SVG, przykłady obrazów kodów kreskowych, przykłady kodów kreskowych SVG, testowe pliki .svg, przykłady kodów kreskowych wektorowych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki Barcode SVG – Pobierz testowe pliki obrazów kodów kreskowych SVG',
            description: 'Pobierz darmowe przykładowe pliki obrazów kodów kreskowych SVG Barcode SVG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania skanowania kodów kreskowych, renderowania SVG i narzędzi grafiki wektorowej.'
          },
          hero: {
            title: 'Przykładowe pliki Barcode SVG',
            description: 'Pobierz darmowe przykładowe pliki obrazów kodów kreskowych SVG Barcode SVG do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia skanowania kodów kreskowych, renderowania SVG i grafiki wektorowej.'
          },
          about_description: 'To są testowe pliki obrazów kodów kreskowych SVG Barcode SVG w różnych rozmiarach do celów testowych'
        },
        assetbundle: {
          meta: {
            title: 'Darmowe przykładowe pliki AssetBundle – Pobierz pliki Unity AssetBundle | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki archiwum Unity AssetBundle AssetBundle do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ładowania zasobów Unity, zarządzania zasobami gier i narzędzi deweloperskich Unity.',
            keywords: 'przykładowe pliki AssetBundle, testowe pliki AssetBundle, pobierz przykłady AssetBundle, darmowe testowe pliki AssetBundle, przykłady Unity AssetBundle, przykłady zasobów gier, testowe pliki .assetbundle, przykłady zasobów Unity'
          },
          schema: {
            name: 'Darmowe przykładowe pliki AssetBundle – Pobierz testowe pliki Unity AssetBundle',
            description: 'Pobierz darmowe przykładowe pliki archiwum Unity AssetBundle AssetBundle do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ładowania zasobów Unity, zarządzania zasobami gier i narzędzi deweloperskich Unity.'
          },
          hero: {
            title: 'Przykładowe pliki AssetBundle',
            description: 'Pobierz darmowe przykładowe pliki archiwum Unity AssetBundle AssetBundle do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia ładowania zasobów Unity, zarządzania zasobami gier i deweloperskie Unity.'
          },
          about_description: 'To są testowe pliki archiwum Unity AssetBundle w różnych rozmiarach do celów testowych'
        },
        ase: {
          meta: {
            title: 'Darmowe przykładowe pliki ASE – Pobierz pliki Adobe Swatch Exchange | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki palet kolorów Adobe Swatch Exchange ASE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania importu palet kolorów, integracji oprogramowania do projektowania i narzędzi zarządzania kolorami.',
            keywords: 'przykładowe pliki ASE, testowe pliki ASE, pobierz przykłady ASE, darmowe testowe pliki ASE, przykłady Adobe Swatch Exchange, przykłady palet kolorów, przykłady kolorów ASE, testowe pliki .ase, przykłady kolorów projektowych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki ASE – Pobierz testowe pliki Adobe Swatch Exchange',
            description: 'Pobierz darmowe przykładowe pliki palet kolorów Adobe Swatch Exchange ASE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania importu palet kolorów, integracji oprogramowania do projektowania i narzędzi zarządzania kolorami.'
          },
          hero: {
            title: 'Przykładowe pliki ASE',
            description: 'Pobierz darmowe przykładowe pliki palet kolorów Adobe Swatch Exchange ASE do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia importu palet kolorów, integracji oprogramowania do projektowania i zarządzania kolorami.'
          },
          about_description: 'To są testowe pliki palet kolorów ASE (Adobe Swatch Exchange) w różnych rozmiarach do celów testowych'
        },
        asc: {
          meta: {
            title: 'Darmowe przykładowe pliki ASC – Pobierz pliki tekstowe ASCII | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki tekstowe ASCII ASC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania tekstu, kodowania ASCII i narzędzi obsługi plików tekstowych.',
            keywords: 'przykładowe pliki ASC, testowe pliki ASC, pobierz przykłady ASC, darmowe testowe pliki ASC, przykłady tekstu ASCII, przykłady zwykłego tekstu, przykłady plików ASC, testowe pliki .asc, przykłady formatów tekstowych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki ASC – Pobierz testowe pliki tekstowe ASCII',
            description: 'Pobierz darmowe przykładowe pliki tekstowe ASCII ASC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania tekstu, kodowania ASCII i narzędzi obsługi plików tekstowych.'
          },
          hero: {
            title: 'Przykładowe pliki ASC',
            description: 'Pobierz darmowe przykładowe pliki tekstowe ASCII ASC do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przetwarzania tekstu, kodowania ASCII i obsługi plików tekstowych.'
          },
          about_description: 'To są testowe pliki ASC (ASCII Text) w różnych rozmiarach do celów testowych'
        },
        arj: {
          meta: {
            title: 'Darmowe przykładowe pliki ARJ – Pobierz pliki archiwum ARJ | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki archiwum skompresowanego ARJ ARJ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów, kompresji ARJ i narzędzi starszych formatów archiwów.',
            keywords: 'przykładowe pliki ARJ, testowe pliki ARJ, pobierz przykłady ARJ, darmowe testowe pliki ARJ, przykłady archiwów ARJ, przykłady skompresowanych archiwów, przykłady archiwów ARJ, testowe pliki .arj, przykłady starszych archiwów'
          },
          schema: {
            name: 'Darmowe przykładowe pliki ARJ – Pobierz testowe pliki archiwum ARJ',
            description: 'Pobierz darmowe przykładowe pliki archiwum skompresowanego ARJ ARJ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów, kompresji ARJ i narzędzi starszych formatów archiwów.'
          },
          hero: {
            title: 'Przykładowe pliki ARJ',
            description: 'Pobierz darmowe przykładowe pliki archiwum skompresowanego ARJ ARJ do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia ekstrakcji archiwów, kompresji ARJ i starszych formatów archiwów.'
          },
          about_description: 'To są testowe pliki archiwum skompresowanego ARJ (ARJ Archive) w różnych rozmiarach do celów testowych'
        },
        'arduino-ino': {
          meta: {
            title: 'Darmowe przykładowe pliki Arduino INO – Pobierz pliki szkiców Arduino | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki kodu źródłowego szkiców Arduino INO Arduino do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania deweloperskiego Arduino, kompilacji szkiców i narzędzi programowania wbudowanego.',
            keywords: 'przykładowe pliki Arduino INO, testowe pliki Arduino INO, pobierz przykłady Arduino INO, darmowe testowe pliki Arduino INO, przykłady szkiców Arduino, przykłady kodu wbudowanego, przykłady Arduino .ino, testowe pliki .ino, przykłady mikrokontrolerów'
          },
          schema: {
            name: 'Darmowe przykładowe pliki Arduino INO – Pobierz testowe pliki szkiców Arduino',
            description: 'Pobierz darmowe przykładowe pliki kodu źródłowego szkiców Arduino INO Arduino do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania deweloperskiego Arduino, kompilacji szkiców i narzędzi programowania wbudowanego.'
          },
          hero: {
            title: 'Przykładowe pliki Arduino INO',
            description: 'Pobierz darmowe przykładowe pliki kodu źródłowego szkiców Arduino INO Arduino do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia deweloperskie Arduino, kompilacji szkiców i programowania wbudowanego.'
          },
          about_description: 'To są testowe pliki kodu źródłowego Arduino INO (Arduino Sketch) w różnych rozmiarach do celów testowych'
        },
        appimage: {
          meta: {
            title: 'Darmowe przykładowe pliki AppImage – Pobierz pliki aplikacji AppImage | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki aplikacji przenośnych Linux AppImage AppImage do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji aplikacji Linux, wykonywania AppImage i narzędzi aplikacji przenośnych.',
            keywords: 'przykładowe pliki AppImage, testowe pliki AppImage, pobierz przykłady AppImage, darmowe testowe pliki AppImage, przykłady aplikacji Linux, przykłady aplikacji przenośnych, przykłady aplikacji AppImage, testowe pliki .appimage, przykłady wykonywalnych Linux'
          },
          schema: {
            name: 'Darmowe przykładowe pliki AppImage – Pobierz testowe pliki aplikacji AppImage',
            description: 'Pobierz darmowe przykładowe pliki aplikacji przenośnych Linux AppImage AppImage do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji aplikacji Linux, wykonywania AppImage i narzędzi aplikacji przenośnych.'
          },
          hero: {
            title: 'Przykładowe pliki AppImage',
            description: 'Pobierz darmowe przykładowe pliki aplikacji przenośnych Linux AppImage AppImage do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia instalacji aplikacji Linux, wykonywania AppImage i aplikacji przenośnych.'
          },
          about_description: 'To są testowe pliki aplikacji przenośnych Linux AppImage w różnych rozmiarach do celów testowych'
        },
        'animation-fbx': {
          meta: {
            title: 'Darmowe przykładowe pliki Animation FBX – Pobierz pliki animacji 3D FBX | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki animacji i modeli 3D FBX Animation FBX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania animacji 3D, importu FBX i narzędzi modelowania 3D.',
            keywords: 'przykładowe pliki Animation FBX, testowe pliki animacji FBX, pobierz przykłady animacji FBX, darmowe testowe pliki animacji FBX, przykłady animacji 3D, przykłady modeli FBX, przykłady animacji FBX, testowe pliki .fbx, przykłady modeli 3D'
          },
          schema: {
            name: 'Darmowe przykładowe pliki Animation FBX – Pobierz testowe pliki animacji 3D FBX',
            description: 'Pobierz darmowe przykładowe pliki animacji i modeli 3D FBX Animation FBX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania animacji 3D, importu FBX i narzędzi modelowania 3D.'
          },
          hero: {
            title: 'Przykładowe pliki Animation FBX',
            description: 'Pobierz darmowe przykładowe pliki animacji i modeli 3D FBX Animation FBX do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia odtwarzania animacji 3D, importu FBX i modelowania 3D.'
          },
          about_description: 'To są testowe pliki Animation FBX (FBX 3D Animation) w różnych rozmiarach do celów testowych'
        },
        amr: {
          meta: {
            title: 'Darmowe przykładowe pliki AMR – Pobierz pliki audio AMR | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki audio AMR Adaptive Multi-Rate AMR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania audio, konwersji AMR i narzędzi formatów nagrywania głosu.',
            keywords: 'przykładowe pliki AMR, testowe pliki AMR, pobierz przykłady AMR, darmowe testowe pliki AMR, przykłady audio AMR, przykłady nagrywania głosu, przykłady dźwięku AMR, testowe pliki .amr, przykłady formatów audio'
          },
          schema: {
            name: 'Darmowe przykładowe pliki AMR – Pobierz testowe pliki audio AMR',
            description: 'Pobierz darmowe przykładowe pliki audio AMR Adaptive Multi-Rate AMR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania audio, konwersji AMR i narzędzi formatów nagrywania głosu.'
          },
          hero: {
            title: 'Przykładowe pliki AMR',
            description: 'Pobierz darmowe przykładowe pliki audio AMR Adaptive Multi-Rate AMR do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia odtwarzania audio, konwersji AMR i formatów nagrywania głosu.'
          },
          about_description: 'To są testowe pliki audio AMR (Adaptive Multi-Rate) w różnych rozmiarach do celów testowych'
        },
        aiff: {
          meta: {
            title: 'Darmowe przykładowe pliki AIFF – Pobierz pliki audio AIFF | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki audio AIFF Audio Interchange File Format AIFF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania audio, konwersji AIFF i narzędzi profesjonalnych formatów audio.',
            keywords: 'przykładowe pliki AIFF, testowe pliki AIFF, pobierz przykłady AIFF, darmowe testowe pliki AIFF, przykłady audio AIFF, przykłady profesjonalnego audio, przykłady dźwięku AIFF, testowe pliki .aiff, przykłady formatów audio'
          },
          schema: {
            name: 'Darmowe przykładowe pliki AIFF – Pobierz testowe pliki audio AIFF',
            description: 'Pobierz darmowe przykładowe pliki audio AIFF Audio Interchange File Format AIFF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania audio, konwersji AIFF i narzędzi profesjonalnych formatów audio.'
          },
          hero: {
            title: 'Przykładowe pliki AIFF',
            description: 'Pobierz darmowe przykładowe pliki audio AIFF Audio Interchange File Format AIFF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia odtwarzania audio, konwersji AIFF i profesjonalnych formatów audio.'
          },
          about_description: 'To są testowe pliki audio AIFF (Audio Interchange File Format) w różnych rozmiarach do celów testowych'
        },
        aif: {
          meta: {
            title: 'Darmowe przykładowe pliki AIF – Pobierz pliki audio AIF | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki audio AIF Audio Interchange File Format AIF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania audio, konwersji AIF i narzędzi profesjonalnych formatów audio.',
            keywords: 'przykładowe pliki AIF, testowe pliki AIF, pobierz przykłady AIF, darmowe testowe pliki AIF, przykłady audio AIF, przykłady profesjonalnego audio, przykłady dźwięku AIF, testowe pliki .aif, przykłady formatów audio'
          },
          schema: {
            name: 'Darmowe przykładowe pliki AIF – Pobierz testowe pliki audio AIF',
            description: 'Pobierz darmowe przykładowe pliki audio AIF Audio Interchange File Format AIF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania audio, konwersji AIF i narzędzi profesjonalnych formatów audio.'
          },
          hero: {
            title: 'Przykładowe pliki AIF',
            description: 'Pobierz darmowe przykładowe pliki audio AIF Audio Interchange File Format AIF do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia odtwarzania audio, konwersji AIF i profesjonalnych formatów audio.'
          },
          about_description: 'To są testowe pliki audio AIF (Audio Interchange File Format) w różnych rozmiarach do celów testowych'
        },
        ai: {
          meta: {
            title: 'Darmowe przykładowe pliki AI – Pobierz pliki Adobe Illustrator | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki grafiki wektorowej Adobe Illustrator AI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przeglądania grafiki wektorowej, konwersji AI i narzędzi projektowania ilustracji.',
            keywords: 'przykładowe pliki AI, testowe pliki AI, pobierz przykłady AI, darmowe testowe pliki AI, przykłady Adobe Illustrator, przykłady grafiki wektorowej, przykłady ilustracji AI, testowe pliki .ai, przykłady formatów projektowych'
          },
          schema: {
            name: 'Darmowe przykładowe pliki AI – Pobierz testowe pliki Adobe Illustrator',
            description: 'Pobierz darmowe przykładowe pliki grafiki wektorowej Adobe Illustrator AI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przeglądania grafiki wektorowej, konwersji AI i narzędzi projektowania ilustracji.'
          },
          hero: {
            title: 'Przykładowe pliki AI',
            description: 'Pobierz darmowe przykładowe pliki grafiki wektorowej Adobe Illustrator AI do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przeglądania grafiki wektorowej, konwersji AI i projektowania ilustracji.'
          },
          about_description: 'To są testowe pliki grafiki wektorowej AI (Adobe Illustrator) w różnych rozmiarach do celów testowych'
        },
        ac3: {
          meta: {
            title: 'Darmowe przykładowe pliki AC3 – Pobierz pliki audio AC3 | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki audio AC3 Dolby Digital AC3 do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania audio, konwersji AC3 i narzędzi formatów dźwięku przestrzennego.',
            keywords: 'przykładowe pliki AC3, testowe pliki AC3, pobierz przykłady AC3, darmowe testowe pliki AC3, przykłady audio AC3, przykłady Dolby Digital, przykłady dźwięku AC3, testowe pliki .ac3, przykłady formatów audio'
          },
          schema: {
            name: 'Darmowe przykładowe pliki AC3 – Pobierz testowe pliki audio AC3',
            description: 'Pobierz darmowe przykładowe pliki audio AC3 Dolby Digital AC3 do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania audio, konwersji AC3 i narzędzi formatów dźwięku przestrzennego.'
          },
          hero: {
            title: 'Przykładowe pliki AC3',
            description: 'Pobierz darmowe przykładowe pliki audio AC3 Dolby Digital AC3 do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia odtwarzania audio, konwersji AC3 i formatów dźwięku przestrzennego.'
          },
          about_description: 'To są testowe pliki audio AC3 (Dolby Digital) w różnych rozmiarach do celów testowych'
        },
        '3ds': {
          meta: {
            title: 'Darmowe przykładowe pliki 3DS – Pobierz pliki siatki 3D Studio | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki siatki i modeli 3D Studio 3DS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przeglądania modeli 3D, konwersji 3DS i narzędzi grafiki 3D.',
            keywords: 'przykładowe pliki 3DS, testowe pliki 3DS, pobierz przykłady 3DS, darmowe testowe pliki 3DS, przykłady siatki 3D Studio, przykłady modeli 3D, testowe pliki .3ds, przykłady grafiki 3D'
          },
          schema: {
            name: 'Darmowe przykładowe pliki 3DS – Pobierz testowe pliki siatki 3D Studio',
            description: 'Pobierz darmowe przykładowe pliki siatki i modeli 3D Studio 3DS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przeglądania modeli 3D, konwersji 3DS i narzędzi grafiki 3D.'
          },
          hero: {
            title: 'Przykładowe pliki 3DS',
            description: 'Pobierz darmowe przykładowe pliki siatki i modeli 3D Studio 3DS do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia przeglądania modeli 3D, konwersji 3DS i grafiki 3D.'
          },
          about_description: 'To są testowe pliki 3DS (3D Studio Mesh) w różnych rozmiarach do celów testowych'
        },
        '3gp': {
          meta: {
            title: 'Darmowe przykładowe pliki 3GP – Pobierz pliki wideo 3GPP | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki wideo 3GPP 3GP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania wideo, konwersji 3GP i narzędzi formatów wideo mobilnych.',
            keywords: 'przykładowe pliki 3GP, testowe pliki 3GP, pobierz przykłady 3GP, darmowe testowe pliki 3GP, przykłady wideo 3GPP, przykłady wideo mobilnych, testowe pliki .3gp, przykłady formatów wideo'
          },
          schema: {
            name: 'Darmowe przykładowe pliki 3GP – Pobierz testowe pliki wideo 3GPP',
            description: 'Pobierz darmowe przykładowe pliki wideo 3GPP 3GP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania wideo, konwersji 3GP i narzędzi formatów wideo mobilnych.'
          },
          hero: {
            title: 'Przykładowe pliki 3GP',
            description: 'Pobierz darmowe przykładowe pliki wideo 3GPP 3GP do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia odtwarzania wideo, konwersji 3GP i formatów wideo mobilnych.'
          },
          about_description: 'To są testowe pliki 3GP (3GPP Video) w różnych rozmiarach do celów testowych'
        },
        aac: {
          meta: {
            title: 'Darmowe przykładowe pliki AAC – Pobierz pliki Advanced Audio Coding | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki audio Advanced Audio Coding AAC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania audio, konwersji AAC i narzędzi nowoczesnych formatów audio.',
            keywords: 'przykładowe pliki AAC, testowe pliki AAC, pobierz przykłady AAC, darmowe testowe pliki AAC, przykłady Advanced Audio Coding, przykłady formatów audio, testowe pliki .aac, przykłady kodeków audio'
          },
          schema: {
            name: 'Darmowe przykładowe pliki AAC – Pobierz testowe pliki Advanced Audio Coding',
            description: 'Pobierz darmowe przykładowe pliki audio Advanced Audio Coding AAC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania audio, konwersji AAC i narzędzi nowoczesnych formatów audio.'
          },
          hero: {
            title: 'Przykładowe pliki AAC',
            description: 'Pobierz darmowe przykładowe pliki audio Advanced Audio Coding AAC do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia odtwarzania audio, konwersji AAC i nowoczesnych formatów audio.'
          },
          about_description: 'To są testowe pliki audio AAC (Advanced Audio Coding) w różnych rozmiarach do celów testowych'
        },
        icns: {
          meta: {
            title: 'Darmowe przykładowe pliki ICNS – Pobierz pliki ikon Apple Icon Image | MorphyHub',
            description: 'Pobierz darmowe przykładowe pliki ikon Apple Icon Image ICNS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania renderowania ikon, konwersji ICNS i narzędzi formatów ikon macOS.',
            keywords: 'przykładowe pliki ICNS, testowe pliki ICNS, pobierz przykłady ICNS, darmowe testowe pliki ICNS, przykłady Apple Icon Image, przykłady ikon macOS, testowe pliki .icns, przykłady formatów ikon'
          },
          schema: {
            name: 'Darmowe przykładowe pliki ICNS – Pobierz testowe pliki ikon Apple Icon Image',
            description: 'Pobierz darmowe przykładowe pliki ikon Apple Icon Image ICNS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania renderowania ikon, konwersji ICNS i narzędzi formatów ikon macOS.'
          },
          hero: {
            title: 'Przykładowe pliki ICNS',
            description: 'Pobierz darmowe przykładowe pliki ikon Apple Icon Image ICNS do testowania. Dostępne różne rozmiary plików, aby przetestować Twoje narzędzia renderowania ikon, konwersji ICNS i formatów ikon macOS.'
          },
          about_description: 'To są testowe pliki ICNS (Apple Icon Image) w różnych rozmiarach do celów testowych'
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
        lzma: {
          meta: {
            title: 'Kostenlose LZMA Beispieldateien herunterladen – LZMA-komprimierte Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose LZMA LZMA-komprimierte Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von LZMA-Dekomprimierung, Archiv-Extraktion und Tools für Dateikompression.',
            keywords: 'LZMA Beispieldateien, LZMA Testdateien, LZMA Beispiele herunterladen, kostenlose LZMA Testdateien, LZMA-komprimierte Archiv-Beispiele, komprimierte Datei-Beispiele, .lzma Testdateien, Komprimierungsformat-Beispiele'
          },
          schema: {
            name: 'Kostenlose LZMA Beispieldateien – LZMA-komprimierte Dateien testen',
            description: 'Laden Sie kostenlose LZMA LZMA-komprimierte Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von LZMA-Dekomprimierung, Archiv-Extraktion und Tools für Dateikompression.'
          },
          hero: {
            title: 'LZMA Beispieldateien',
            description: 'Laden Sie kostenlose LZMA LZMA-komprimierte Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre LZMA-Dekomprimierung, Archiv-Extraktion und Tools für Dateikompression zu testen.'
          },
          about_description: 'Dies sind LZMA (Lempel-Ziv-Markov chain Algorithm) komprimierte Archiv-Testdateien in verschiedenen Größen für Testzwecke'
        },
        jwt: {
          meta: {
            title: 'Kostenlose JWT Beispieldateien herunterladen – JSON Web Token-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose JWT JSON Web Token-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JWT-Token-Parsing, Authentifizierung und API-Sicherheitstools.',
            keywords: 'JWT Beispieldateien, JWT Testdateien, JWT Beispiele herunterladen, kostenlose JWT Testdateien, JSON Web Token-Beispiele, JWT-Token-Dateien, .jwt Testdateien, Authentifizierungs-Token-Dateien, JWT-Parsing-Testdateien'
          },
          schema: {
            name: 'Kostenlose JWT Beispieldateien – JSON Web Token-Dateien testen',
            description: 'Laden Sie kostenlose JWT JSON Web Token-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JWT-Token-Parsing, Authentifizierung und API-Sicherheitstools.'
          },
          hero: {
            title: 'JWT Beispieldateien',
            description: 'Laden Sie kostenlose JWT JSON Web Token-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre JWT-Token-Parsing- und Authentifizierungstools zu testen.'
          },
          about_description: 'Dies sind JWT (JSON Web Token) Testdateien in verschiedenen Größen für Testzwecke'
        },
        kt: {
          meta: {
            title: 'Kostenlose KT Beispieldateien herunterladen – Kotlin-Quelldateien testen | MorphyHub',
            description: 'Laden Sie kostenlose KT Kotlin-Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Kotlin-Kompilierung, IDE-Unterstützung und Entwicklungstools.',
            keywords: 'KT Beispieldateien, KT Testdateien, KT Beispiele herunterladen, kostenlose KT Testdateien, Kotlin-Quellcode-Beispiele, Kotlin-Code-Beispiele, .kt Testdateien, Kotlin-Programmierungs-Beispiele'
          },
          schema: {
            name: 'Kostenlose KT Beispieldateien – Kotlin-Quelldateien testen',
            description: 'Laden Sie kostenlose KT Kotlin-Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Kotlin-Kompilierung, IDE-Unterstützung und Entwicklungstools.'
          },
          hero: {
            title: 'KT Beispieldateien',
            description: 'Laden Sie kostenlose KT Kotlin-Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Kotlin-Kompilierungs- und Entwicklungstools zu testen.'
          },
          about_description: 'Dies sind KT (Kotlin) Quellcode-Testdateien in verschiedenen Größen für Testzwecke'
        },
        ifc: {
          meta: {
            title: 'Kostenlose IFC Beispieldateien herunterladen – Industry Foundation Classes-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose IFC Industry Foundation Classes-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von BIM-Software, IFC-Konvertierung und Gebäudeinformationsmodellierungstools.',
            keywords: 'IFC Beispieldateien, IFC Testdateien, IFC Beispiele herunterladen, kostenlose IFC Testdateien, Industry Foundation Classes-Beispiele, BIM-Dateien, IFC Gebäudemodelldateien, .ifc Testdateien, Gebäudeinformationsmodellierungsdateien, IFC-Konvertierungstestdateien'
          },
          schema: {
            name: 'Kostenlose IFC Beispieldateien – Industry Foundation Classes-Dateien testen',
            description: 'Laden Sie kostenlose IFC Industry Foundation Classes-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von BIM-Software, IFC-Konvertierung und Gebäudeinformationsmodellierungstools.'
          },
          hero: {
            title: 'IFC Beispieldateien',
            description: 'Laden Sie kostenlose IFC Industry Foundation Classes-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre BIM-Software und IFC-Konvertierungstools zu testen.'
          },
          about_description: 'Dies sind IFC (Industry Foundation Classes) Testdateien in verschiedenen Größen für Testzwecke'
        },
        iges: {
          meta: {
            title: 'Kostenlose IGES Beispieldateien herunterladen – Initial Graphics Exchange Specification-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose IGES Initial Graphics Exchange Specification-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Software, IGES-Konvertierung und 3D-Modellaustausch-Tools.',
            keywords: 'IGES Beispieldateien, IGES Testdateien, IGES Beispiele herunterladen, kostenlose IGES Testdateien, Initial Graphics Exchange Specification-Beispiele, CAD-Modelldateien, IGES 3D-Dateien, .iges Testdateien, CAD-Austauschdateien, IGES-Konvertierungstestdateien'
          },
          schema: {
            name: 'Kostenlose IGES Beispieldateien – Initial Graphics Exchange Specification-Dateien testen',
            description: 'Laden Sie kostenlose IGES Initial Graphics Exchange Specification-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Software, IGES-Konvertierung und 3D-Modellaustausch-Tools.'
          },
          hero: {
            title: 'IGES Beispieldateien',
            description: 'Laden Sie kostenlose IGES Initial Graphics Exchange Specification-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre CAD-Software und IGES-Konvertierungstools zu testen.'
          },
          about_description: 'Dies sind IGES (Initial Graphics Exchange Specification) Testdateien in verschiedenen Größen für Testzwecke'
        },
        igs: {
          meta: {
            title: 'Kostenlose IGS Beispieldateien herunterladen – Initial Graphics Exchange Specification-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose IGS Initial Graphics Exchange Specification-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Software, IGS-Konvertierung und 3D-Modellaustausch-Tools.',
            keywords: 'IGS Beispieldateien, IGS Testdateien, IGS Beispiele herunterladen, kostenlose IGS Testdateien, Initial Graphics Exchange Specification-Beispiele, CAD-Modelldateien, IGS 3D-Dateien, .igs Testdateien, CAD-Austauschdateien, IGS-Konvertierungstestdateien'
          },
          schema: {
            name: 'Kostenlose IGS Beispieldateien – Initial Graphics Exchange Specification-Dateien testen',
            description: 'Laden Sie kostenlose IGS Initial Graphics Exchange Specification-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Software, IGS-Konvertierung und 3D-Modellaustausch-Tools.'
          },
          hero: {
            title: 'IGS Beispieldateien',
            description: 'Laden Sie kostenlose IGS Initial Graphics Exchange Specification-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre CAD-Software und IGS-Konvertierungstools zu testen.'
          },
          about_description: 'Dies sind IGS (Initial Graphics Exchange Specification) Testdateien in verschiedenen Größen für Testzwecke'
        },
        img: {
          meta: {
            title: 'Kostenlose IMG Beispieldateien herunterladen – Festplattenabbild-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose IMG Festplattenabbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Festplattenabbild-Montage, IMG-Extraktion und Festplattenabbild-Verarbeitungstools.',
            keywords: 'IMG Beispieldateien, IMG Testdateien, IMG Beispiele herunterladen, kostenlose IMG Testdateien, Festplattenabbild-Beispiele, IMG Festplattenabbild-Dateien, .img Testdateien, Festplattenabbild-Montagedateien, IMG-Extraktionstestdateien'
          },
          schema: {
            name: 'Kostenlose IMG Beispieldateien – Festplattenabbild-Dateien testen',
            description: 'Laden Sie kostenlose IMG Festplattenabbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Festplattenabbild-Montage, IMG-Extraktion und Festplattenabbild-Verarbeitungstools.'
          },
          hero: {
            title: 'IMG Beispieldateien',
            description: 'Laden Sie kostenlose IMG Festplattenabbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Festplattenabbild-Montage- und IMG-Extraktionstools zu testen.'
          },
          about_description: 'Dies sind IMG (Festplattenabbild) Testdateien in verschiedenen Größen für Testzwecke'
        },
        indd: {
          meta: {
            title: 'Kostenlose INDD Beispieldateien herunterladen – Adobe InDesign-Dokumentdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose INDD Adobe InDesign-Dokument-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von InDesign-Dokumentkonvertierung, INDD-Anzeige und Desktop-Publishing-Tools.',
            keywords: 'INDD Beispieldateien, INDD Testdateien, INDD Beispiele herunterladen, kostenlose INDD Testdateien, Adobe InDesign-Beispiele, Desktop-Publishing-Dateien, INDD Dokumentdateien, .indd Testdateien, InDesign-Dateien, INDD-Konvertierungstestdateien'
          },
          schema: {
            name: 'Kostenlose INDD Beispieldateien – Adobe InDesign-Dokumentdateien testen',
            description: 'Laden Sie kostenlose INDD Adobe InDesign-Dokument-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von InDesign-Dokumentkonvertierung, INDD-Anzeige und Desktop-Publishing-Tools.'
          },
          hero: {
            title: 'INDD Beispieldateien',
            description: 'Laden Sie kostenlose INDD Adobe InDesign-Dokument-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre InDesign-Dokumentkonvertierungs- und INDD-Anzeigetools zu testen.'
          },
          about_description: 'Dies sind INDD (Adobe InDesign) Testdateien in verschiedenen Größen für Testzwecke'
        },
        ini: {
          meta: {
            title: 'Kostenlose INI Beispieldateien herunterladen – Konfigurationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose INI Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von INI-Dateiparsing, Konfigurationsverwaltung und Einstellungsdatei-Verarbeitungstools.',
            keywords: 'INI Beispieldateien, INI Testdateien, INI Beispiele herunterladen, kostenlose INI Testdateien, Konfigurationsdatei-Beispiele, INI Konfigurationsdateien, .ini Testdateien, Einstellungsdatei-Beispiele, INI-Parsing-Testdateien'
          },
          schema: {
            name: 'Kostenlose INI Beispieldateien – Konfigurationsdateien testen',
            description: 'Laden Sie kostenlose INI Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von INI-Dateiparsing, Konfigurationsverwaltung und Einstellungsdatei-Verarbeitungstools.'
          },
          hero: {
            title: 'INI Beispieldateien',
            description: 'Laden Sie kostenlose INI Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre INI-Dateiparsing- und Konfigurationsverwaltungstools zu testen.'
          },
          about_description: 'Dies sind INI (Konfigurations-) Testdateien in verschiedenen Größen für Testzwecke'
        },
        intelhex: {
          meta: {
            title: 'Kostenlose IntelHex Beispieldateien herunterladen – Intel-Hexadezimaldateien testen | MorphyHub',
            description: 'Laden Sie kostenlose IntelHex Intel-Hexadezimal-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Firmware-Programmierung, IntelHex-Parsing und Embedded-System-Entwicklungstools.',
            keywords: 'IntelHex Beispieldateien, IntelHex Testdateien, IntelHex Beispiele herunterladen, kostenlose IntelHex Testdateien, Intel-Hexadezimal-Beispiele, Firmware-Dateien, IntelHex Hex-Dateien, .intelhex Testdateien, Embedded-System-Dateien, IntelHex-Parsing-Testdateien'
          },
          schema: {
            name: 'Kostenlose IntelHex Beispieldateien – Intel-Hexadezimaldateien testen',
            description: 'Laden Sie kostenlose IntelHex Intel-Hexadezimal-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Firmware-Programmierung, IntelHex-Parsing und Embedded-System-Entwicklungstools.'
          },
          hero: {
            title: 'IntelHex Beispieldateien',
            description: 'Laden Sie kostenlose IntelHex Intel-Hexadezimal-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Firmware-Programmierungs- und IntelHex-Parsing-Tools zu testen.'
          },
          about_description: 'Dies sind IntelHex (Intel-Hexadezimal-) Testdateien in verschiedenen Größen für Testzwecke'
        },
        jar: {
          meta: {
            title: 'Kostenlose JAR Beispieldateien herunterladen – Java-Archivdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose JAR Java-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Java-Anwendungsausführung, JAR-Extraktion und Java-Entwicklungstools.',
            keywords: 'JAR Beispieldateien, JAR Testdateien, JAR Beispiele herunterladen, kostenlose JAR Testdateien, Java-Archiv-Beispiele, JAR-Anwendungsdateien, .jar Testdateien, Java-Paketdateien, JAR-Extraktionstestdateien'
          },
          schema: {
            name: 'Kostenlose JAR Beispieldateien – Java-Archivdateien testen',
            description: 'Laden Sie kostenlose JAR Java-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Java-Anwendungsausführung, JAR-Extraktion und Java-Entwicklungstools.'
          },
          hero: {
            title: 'JAR Beispieldateien',
            description: 'Laden Sie kostenlose JAR Java-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Java-Anwendungsausführungs- und JAR-Extraktionstools zu testen.'
          },
          about_description: 'Dies sind JAR (Java Archive) Testdateien in verschiedenen Größen für Testzwecke'
        },
        jks: {
          meta: {
            title: 'Kostenlose JKS Beispieldateien herunterladen – Java KeyStore-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose JKS Java KeyStore-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Java KeyStore-Verwaltung, JKS-Parsing und SSL-Zertifikatsspeicher-Tools.',
            keywords: 'JKS Beispieldateien, JKS Testdateien, JKS Beispiele herunterladen, kostenlose JKS Testdateien, Java KeyStore-Beispiele, SSL-Zertifikatsdateien, JKS Keystore-Dateien, .jks Testdateien, Java-Sicherheitsdateien, JKS-Parsing-Testdateien'
          },
          schema: {
            name: 'Kostenlose JKS Beispieldateien – Java KeyStore-Dateien testen',
            description: 'Laden Sie kostenlose JKS Java KeyStore-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Java KeyStore-Verwaltung, JKS-Parsing und SSL-Zertifikatsspeicher-Tools.'
          },
          hero: {
            title: 'JKS Beispieldateien',
            description: 'Laden Sie kostenlose JKS Java KeyStore-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Java KeyStore-Verwaltungs- und JKS-Parsing-Tools zu testen.'
          },
          about_description: 'Dies sind JKS (Java KeyStore) Testdateien in verschiedenen Größen für Testzwecke'
        },
        kml: {
          meta: {
            title: 'Kostenlose KML Beispieldateien herunterladen – Keyhole Markup Language-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose KML Keyhole Markup Language geografische Daten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von geografischer Visualisierung, Karten-Rendering und GIS-Tools.',
            keywords: 'KML Beispieldateien, KML Testdateien, KML Beispiele herunterladen, kostenlose KML Testdateien, Keyhole Markup Language-Beispiele, geografische Daten-Beispiele, .kml Testdateien, Kartendaten-Beispiele'
          },
          schema: {
            name: 'Kostenlose KML Beispieldateien – Keyhole Markup Language-Dateien testen',
            description: 'Laden Sie kostenlose KML Keyhole Markup Language geografische Daten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von geografischer Visualisierung, Karten-Rendering und GIS-Tools.'
          },
          hero: {
            title: 'KML Beispieldateien',
            description: 'Laden Sie kostenlose KML Keyhole Markup Language geografische Daten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre geografische Visualisierungs- und GIS-Tools zu testen.'
          },
          about_description: 'Dies sind KML (Keyhole Markup Language) geografische Daten-Testdateien in verschiedenen Größen für Testzwecke'
        },
        kmz: {
          meta: {
            title: 'Kostenlose KMZ Beispieldateien herunterladen – komprimierte KML-Archivdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose KMZ komprimierte KML-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von KML-Archiv-Extraktion, geografischer Datenverarbeitung und GIS-Tools.',
            keywords: 'KMZ Beispieldateien, KMZ Testdateien, KMZ Beispiele herunterladen, kostenlose KMZ Testdateien, komprimierte KML-Beispiele, KML-Archiv-Beispiele, .kmz Testdateien, geografische Archiv-Beispiele'
          },
          schema: {
            name: 'Kostenlose KMZ Beispieldateien – komprimierte KML-Archivdateien testen',
            description: 'Laden Sie kostenlose KMZ komprimierte KML-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von KML-Archiv-Extraktion, geografischer Datenverarbeitung und GIS-Tools.'
          },
          hero: {
            title: 'KMZ Beispieldateien',
            description: 'Laden Sie kostenlose KMZ komprimierte KML-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre KML-Archiv-Extraktions- und GIS-Tools zu testen.'
          },
          about_description: 'Dies sind KMZ (komprimierte KML-Archive) Testdateien in verschiedenen Größen für Testzwecke'
        },
        laz: {
          meta: {
            title: 'Kostenlose LAZ Beispieldateien herunterladen – komprimierte LAS-Punktwolken-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose LAZ komprimierte LAS-Punktwolken-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Punktwolken-Verarbeitung, 3D-Scanning-Daten und LiDAR-Tools.',
            keywords: 'LAZ Beispieldateien, LAZ Testdateien, LAZ Beispiele herunterladen, kostenlose LAZ Testdateien, komprimierte LAS-Beispiele, Punktwolken-Beispiele, .laz Testdateien, LiDAR-Daten-Beispiele'
          },
          schema: {
            name: 'Kostenlose LAZ Beispieldateien – komprimierte LAS-Punktwolken-Dateien testen',
            description: 'Laden Sie kostenlose LAZ komprimierte LAS-Punktwolken-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Punktwolken-Verarbeitung, 3D-Scanning-Daten und LiDAR-Tools.'
          },
          hero: {
            title: 'LAZ Beispieldateien',
            description: 'Laden Sie kostenlose LAZ komprimierte LAS-Punktwolken-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Punktwolken-Verarbeitungs- und LiDAR-Tools zu testen.'
          },
          about_description: 'Dies sind LAZ (komprimierte LAS-Punktwolken) Testdateien in verschiedenen Größen für Testzwecke'
        },
        las: {
          meta: {
            title: 'Kostenlose LAS Beispieldateien herunterladen – LAS-Punktwolken-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose LAS LAS-Punktwolken-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Punktwolken-Visualisierung, 3D-Scanning-Daten und LiDAR-Tools.',
            keywords: 'LAS Beispieldateien, LAS Testdateien, LAS Beispiele herunterladen, kostenlose LAS Testdateien, Punktwolken-Beispiele, LiDAR-Daten-Beispiele, .las Testdateien, 3D-Scanning-Beispiele'
          },
          schema: {
            name: 'Kostenlose LAS Beispieldateien – LAS-Punktwolken-Dateien testen',
            description: 'Laden Sie kostenlose LAS LAS-Punktwolken-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Punktwolken-Visualisierung, 3D-Scanning-Daten und LiDAR-Tools.'
          },
          hero: {
            title: 'LAS Beispieldateien',
            description: 'Laden Sie kostenlose LAS LAS-Punktwolken-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Punktwolken-Visualisierungs- und LiDAR-Tools zu testen.'
          },
          about_description: 'Dies sind LAS (Punktwolken) Testdateien in verschiedenen Größen für Testzwecke'
        },
        log: {
          meta: {
            title: 'Kostenlose LOG Beispieldateien herunterladen – Log-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose LOG Log-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Log-Parsing, Log-Analyse und Debugging-Tools.',
            keywords: 'LOG Beispieldateien, LOG Testdateien, LOG Beispiele herunterladen, kostenlose LOG Testdateien, Log-Datei-Beispiele, Log-Daten-Beispiele, .log Testdateien, Log-Analyse-Beispiele'
          },
          schema: {
            name: 'Kostenlose LOG Beispieldateien – Log-Dateien testen',
            description: 'Laden Sie kostenlose LOG Log-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Log-Parsing, Log-Analyse und Debugging-Tools.'
          },
          hero: {
            title: 'LOG Beispieldateien',
            description: 'Laden Sie kostenlose LOG Log-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Log-Parsing- und Analyse-Tools zu testen.'
          },
          about_description: 'Dies sind LOG Testdateien in verschiedenen Größen für Testzwecke'
        },
        lua: {
          meta: {
            title: 'Kostenlose LUA Beispieldateien herunterladen – Lua-Skript-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose LUA Lua-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Lua-Skript-Ausführung, Spielentwicklung und Automatisierungs-Tools.',
            keywords: 'LUA Beispieldateien, LUA Testdateien, LUA Beispiele herunterladen, kostenlose LUA Testdateien, Lua-Skript-Beispiele, Lua-Code-Beispiele, .lua Testdateien, Skripting-Beispiele'
          },
          schema: {
            name: 'Kostenlose LUA Beispieldateien – Lua-Skript-Dateien testen',
            description: 'Laden Sie kostenlose LUA Lua-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Lua-Skript-Ausführung, Spielentwicklung und Automatisierungs-Tools.'
          },
          hero: {
            title: 'LUA Beispieldateien',
            description: 'Laden Sie kostenlose LUA Lua-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Lua-Skript-Ausführungs- und Automatisierungs-Tools zu testen.'
          },
          about_description: 'Dies sind LUA (Lua-Skript) Testdateien in verschiedenen Größen für Testzwecke'
        },
        lha: {
          meta: {
            title: 'Kostenlose LHA Beispieldateien herunterladen – LHA-Archivdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose LHA LHA-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von LHA-Archiv-Extraktion, Komprimierungs-Tools und Legacy-Archivformaten.',
            keywords: 'LHA Beispieldateien, LHA Testdateien, LHA Beispiele herunterladen, kostenlose LHA Testdateien, LHA-Archiv-Beispiele, komprimierte Archiv-Beispiele, .lha Testdateien, Archivformat-Beispiele'
          },
          schema: {
            name: 'Kostenlose LHA Beispieldateien – LHA-Archivdateien testen',
            description: 'Laden Sie kostenlose LHA LHA-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von LHA-Archiv-Extraktion, Komprimierungs-Tools und Legacy-Archivformaten.'
          },
          hero: {
            title: 'LHA Beispieldateien',
            description: 'Laden Sie kostenlose LHA LHA-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre LHA-Archiv-Extraktions- und Komprimierungs-Tools zu testen.'
          },
          about_description: 'Dies sind LHA (Archiv) Testdateien in verschiedenen Größen für Testzwecke'
        },
        lzh: {
          meta: {
            title: 'Kostenlose LZH Beispieldateien herunterladen – LZH-Archivdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose LZH LZH-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von LZH-Archiv-Extraktion, Komprimierungs-Tools und Legacy-Archivformaten.',
            keywords: 'LZH Beispieldateien, LZH Testdateien, LZH Beispiele herunterladen, kostenlose LZH Testdateien, LZH-Archiv-Beispiele, komprimierte Archiv-Beispiele, .lzh Testdateien, Archivformat-Beispiele'
          },
          schema: {
            name: 'Kostenlose LZH Beispieldateien – LZH-Archivdateien testen',
            description: 'Laden Sie kostenlose LZH LZH-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von LZH-Archiv-Extraktion, Komprimierungs-Tools und Legacy-Archivformaten.'
          },
          hero: {
            title: 'LZH Beispieldateien',
            description: 'Laden Sie kostenlose LZH LZH-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre LZH-Archiv-Extraktions- und Komprimierungs-Tools zu testen.'
          },
          about_description: 'Dies sind LZH (Archiv) Testdateien in verschiedenen Größen für Testzwecke'
        },
        m3u: {
          meta: {
            title: 'Kostenlose M3U Beispieldateien herunterladen – M3U-Playlist-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose M3U M3U-Playlist-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M3U-Playlist-Parsing, Medienplayer-Kompatibilität und Tools für Audio-Streaming.',
            keywords: 'M3U Beispieldateien, M3U Testdateien, M3U Beispiele herunterladen, kostenlose M3U Testdateien, M3U-Playlist-Beispiele, Medienplayer-Playlist-Beispiele, .m3u Testdateien, Audio-Playlist-Beispiele'
          },
          schema: {
            name: 'Kostenlose M3U Beispieldateien – M3U-Playlist-Dateien testen',
            description: 'Laden Sie kostenlose M3U M3U-Playlist-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M3U-Playlist-Parsing, Medienplayer-Kompatibilität und Tools für Audio-Streaming.'
          },
          hero: {
            title: 'M3U Beispieldateien',
            description: 'Laden Sie kostenlose M3U M3U-Playlist-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre M3U-Playlist-Parsing, Medienplayer-Kompatibilität und Tools für Audio-Streaming zu testen.'
          },
          about_description: 'Dies sind M3U (MP3 URL) Playlist-Testdateien in verschiedenen Größen für Testzwecke'
        },
        m3u8: {
          meta: {
            title: 'Kostenlose M3U8 Beispieldateien herunterladen – M3U8 HLS-Playlist-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose M3U8 M3U8 HLS-Playlist-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M3U8-Playlist-Parsing, HLS-Streaming und Tools für Video-Player-Kompatibilität.',
            keywords: 'M3U8 Beispieldateien, M3U8 Testdateien, M3U8 Beispiele herunterladen, kostenlose M3U8 Testdateien, M3U8 HLS-Playlist-Beispiele, HLS-Streaming-Playlist-Beispiele, .m3u8 Testdateien, Video-Playlist-Beispiele'
          },
          schema: {
            name: 'Kostenlose M3U8 Beispieldateien – M3U8 HLS-Playlist-Dateien testen',
            description: 'Laden Sie kostenlose M3U8 M3U8 HLS-Playlist-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M3U8-Playlist-Parsing, HLS-Streaming und Tools für Video-Player-Kompatibilität.'
          },
          hero: {
            title: 'M3U8 Beispieldateien',
            description: 'Laden Sie kostenlose M3U8 M3U8 HLS-Playlist-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre M3U8-Playlist-Parsing, HLS-Streaming und Tools für Video-Player-Kompatibilität zu testen.'
          },
          about_description: 'Dies sind M3U8 (HTTP Live Streaming) Playlist-Testdateien in verschiedenen Größen für Testzwecke'
        },
        m4a: {
          meta: {
            title: 'Kostenlose M4A Beispieldateien herunterladen – M4A-Audiodateien testen | MorphyHub',
            description: 'Laden Sie kostenlose M4A M4A-Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M4A-Audio-Konvertierung, M4A-Wiedergabe und Tools für Audio-Verarbeitung.',
            keywords: 'M4A Beispieldateien, M4A Testdateien, M4A Beispiele herunterladen, kostenlose M4A Testdateien, M4A-Audio-Beispiele, Apple-Audioformat-Beispiele, .m4a Testdateien, Audioformat-Beispiele'
          },
          schema: {
            name: 'Kostenlose M4A Beispieldateien – M4A-Audiodateien testen',
            description: 'Laden Sie kostenlose M4A M4A-Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M4A-Audio-Konvertierung, M4A-Wiedergabe und Tools für Audio-Verarbeitung.'
          },
          hero: {
            title: 'M4A Beispieldateien',
            description: 'Laden Sie kostenlose M4A M4A-Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre M4A-Audio-Konvertierung, M4A-Wiedergabe und Tools für Audio-Verarbeitung zu testen.'
          },
          about_description: 'Dies sind M4A (MPEG-4 Audio) Audio-Testdateien in verschiedenen Größen für Testzwecke'
        },
        m4v: {
          meta: {
            title: 'Kostenlose M4V Beispieldateien herunterladen – M4V-Videodateien testen | MorphyHub',
            description: 'Laden Sie kostenlose M4V M4V-Video-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M4V-Video-Konvertierung, M4V-Wiedergabe und Tools für Video-Verarbeitung.',
            keywords: 'M4V Beispieldateien, M4V Testdateien, M4V Beispiele herunterladen, kostenlose M4V Testdateien, M4V-Video-Beispiele, Apple-Videoformat-Beispiele, .m4v Testdateien, Videoformat-Beispiele'
          },
          schema: {
            name: 'Kostenlose M4V Beispieldateien – M4V-Videodateien testen',
            description: 'Laden Sie kostenlose M4V M4V-Video-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M4V-Video-Konvertierung, M4V-Wiedergabe und Tools für Video-Verarbeitung.'
          },
          hero: {
            title: 'M4V Beispieldateien',
            description: 'Laden Sie kostenlose M4V M4V-Video-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre M4V-Video-Konvertierung, M4V-Wiedergabe und Tools für Video-Verarbeitung zu testen.'
          },
          about_description: 'Dies sind M4V (MPEG-4 Video) Video-Testdateien in verschiedenen Größen für Testzwecke'
        },
        ma: {
          meta: {
            title: 'Kostenlose MA Beispieldateien herunterladen – Maya ASCII-Szenendateien testen | MorphyHub',
            description: 'Laden Sie kostenlose MA Maya ASCII-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Maya-Szenen-Konvertierung, MA-Datei-Parsing und Tools für 3D-Animation.',
            keywords: 'MA Beispieldateien, MA Testdateien, MA Beispiele herunterladen, kostenlose MA Testdateien, Maya ASCII-Szenen-Beispiele, 3D-Animations-Szenen-Beispiele, .ma Testdateien, Maya-Szenen-Beispiele'
          },
          schema: {
            name: 'Kostenlose MA Beispieldateien – Maya ASCII-Szenendateien testen',
            description: 'Laden Sie kostenlose MA Maya ASCII-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Maya-Szenen-Konvertierung, MA-Datei-Parsing und Tools für 3D-Animation.'
          },
          hero: {
            title: 'MA Beispieldateien',
            description: 'Laden Sie kostenlose MA Maya ASCII-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Maya-Szenen-Konvertierung, MA-Datei-Parsing und Tools für 3D-Animation zu testen.'
          },
          about_description: 'Dies sind MA (Maya ASCII) Szenen-Testdateien in verschiedenen Größen für Testzwecke'
        },
        makefile: {
          meta: {
            title: 'Kostenlose Makefile Beispieldateien herunterladen – Makefile Build-Konfigurationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose Makefile Build-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Makefile-Parsing, Build-System-Automatisierung und Tools für Software-Kompilierung.',
            keywords: 'Makefile Beispieldateien, Makefile Testdateien, Makefile Beispiele herunterladen, kostenlose Makefile Testdateien, Build-Konfigurations-Beispiele, Makefile-Build-Beispiele, Makefile Testdateien, Build-Automatisierungs-Beispiele'
          },
          schema: {
            name: 'Kostenlose Makefile Beispieldateien – Makefile Build-Konfigurationsdateien testen',
            description: 'Laden Sie kostenlose Makefile Build-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Makefile-Parsing, Build-System-Automatisierung und Tools für Software-Kompilierung.'
          },
          hero: {
            title: 'Makefile Beispieldateien',
            description: 'Laden Sie kostenlose Makefile Build-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Makefile-Parsing, Build-System-Automatisierung und Tools für Software-Kompilierung zu testen.'
          },
          about_description: 'Dies sind Makefile Build-Konfigurations-Testdateien in verschiedenen Größen für Testzwecke'
        },
        max: {
          meta: {
            title: 'Kostenlose MAX Beispieldateien herunterladen – 3ds Max-Szenendateien testen | MorphyHub',
            description: 'Laden Sie kostenlose MAX 3ds Max-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3ds Max-Szenen-Konvertierung, MAX-Datei-Parsing und Tools für 3D-Modellierung.',
            keywords: 'MAX Beispieldateien, MAX Testdateien, MAX Beispiele herunterladen, kostenlose MAX Testdateien, 3ds Max-Szenen-Beispiele, 3D-Modellierungs-Szenen-Beispiele, .max Testdateien, 3ds Max-Szenen-Beispiele'
          },
          schema: {
            name: 'Kostenlose MAX Beispieldateien – 3ds Max-Szenendateien testen',
            description: 'Laden Sie kostenlose MAX 3ds Max-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3ds Max-Szenen-Konvertierung, MAX-Datei-Parsing und Tools für 3D-Modellierung.'
          },
          hero: {
            title: 'MAX Beispieldateien',
            description: 'Laden Sie kostenlose MAX 3ds Max-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre 3ds Max-Szenen-Konvertierung, MAX-Datei-Parsing und Tools für 3D-Modellierung zu testen.'
          },
          about_description: 'Dies sind MAX (3ds Max) Szenen-Testdateien in verschiedenen Größen für Testzwecke'
        },
        mb: {
          meta: {
            title: 'Kostenlose MB Beispieldateien herunterladen – Maya Binary-Szenendateien testen | MorphyHub',
            description: 'Laden Sie kostenlose MB Maya Binary-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Maya-Szenen-Konvertierung, MB-Datei-Parsing und Tools für 3D-Animation.',
            keywords: 'MB Beispieldateien, MB Testdateien, MB Beispiele herunterladen, kostenlose MB Testdateien, Maya Binary-Szenen-Beispiele, 3D-Animations-Szenen-Beispiele, .mb Testdateien, Maya-Szenen-Beispiele'
          },
          schema: {
            name: 'Kostenlose MB Beispieldateien – Maya Binary-Szenendateien testen',
            description: 'Laden Sie kostenlose MB Maya Binary-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Maya-Szenen-Konvertierung, MB-Datei-Parsing und Tools für 3D-Animation.'
          },
          hero: {
            title: 'MB Beispieldateien',
            description: 'Laden Sie kostenlose MB Maya Binary-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Maya-Szenen-Konvertierung, MB-Datei-Parsing und Tools für 3D-Animation zu testen.'
          },
          about_description: 'Dies sind MB (Maya Binary) Szenen-Testdateien in verschiedenen Größen für Testzwecke'
        },
        mbtiles: {
          meta: {
            title: 'Kostenlose MBTiles Beispieldateien herunterladen – MBTiles-Kartendatenbank-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose MBTiles Kartendatenbank-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von MBTiles-Parsing, Kartenkachel-Extraktion und Tools für geografische Datenverarbeitung.',
            keywords: 'MBTiles Beispieldateien, MBTiles Testdateien, MBTiles Beispiele herunterladen, kostenlose MBTiles Testdateien, MBTiles Kartendatenbank-Beispiele, MBTiles geografische Datei-Beispiele, .mbtiles Testdateien, Kartenkachel-Datei-Beispiele, MBTiles-Parsing-Testdateien'
          },
          schema: {
            name: 'Kostenlose MBTiles Beispieldateien – MBTiles-Kartendatenbank-Dateien testen',
            description: 'Laden Sie kostenlose MBTiles Kartendatenbank-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von MBTiles-Parsing, Kartenkachel-Extraktion und Tools für geografische Datenverarbeitung.'
          },
          hero: {
            title: 'MBTiles Beispieldateien',
            description: 'Laden Sie kostenlose MBTiles Kartendatenbank-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre MBTiles-Parsing und Kartenkachel-Extraktion zu testen.'
          },
          about_description: 'Dies sind MBTiles (Kartendatenbank) Testdateien in verschiedenen Größen für Testzwecke'
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
        },
        key: {
          meta: {
            title: 'Kostenlose KEY Beispieldateien herunterladen – Private Schlüssel-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose KEY private Schlüssel-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von SSL-Zertifikatsverwaltung, Schlüssel-Parsing und kryptografischen Schlüssel-Speichertools.',
            keywords: 'KEY Beispieldateien, KEY Testdateien, KEY Beispiele herunterladen, kostenlose KEY Testdateien, private Schlüssel Beispiele, SSL-Schlüssel-Dateien, KEY-Zertifikatsdateien, .key Testdateien, kryptografische Schlüssel-Dateien, KEY-Parsing-Testdateien'
          },
          schema: {
            name: 'Kostenlose KEY Beispieldateien – Private Schlüssel-Dateien testen',
            description: 'Laden Sie kostenlose KEY private Schlüssel-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von SSL-Zertifikatsverwaltung, Schlüssel-Parsing und kryptografischen Schlüssel-Speichertools.'
          },
          hero: {
            title: 'KEY Beispieldateien',
            description: 'Laden Sie kostenlose KEY private Schlüssel-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre SSL-Zertifikatsverwaltung und Schlüssel-Parsing-Tools zu testen.'
          },
          about_description: 'Dies sind KEY (private Schlüssel) Testdateien in verschiedenen Größen für Testzwecke'
        },
        crx: {
          meta: {
            title: 'Kostenlose CRX Beispieldateien herunterladen – Chrome-Erweiterungsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose CRX Chrome-Erweiterungs-Paket-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Chrome-Erweiterungsinstallation, CRX-Analyse und Browser-Erweiterungs-Verarbeitungstools.',
            keywords: 'CRX Beispieldateien, CRX Testdateien, CRX Beispiele herunterladen, kostenlose CRX Testdateien, Chrome-Erweiterungs Beispiele, Browser-Erweiterungs Beispiele, CRX-Paket-Beispiele, CRX-Konvertierungstestdateien, .crx Testdateien, Chrome-Erweiterungs-Installations-Beispiele, Web-Erweiterungs-Beispiele'
          },
          schema: {
            name: 'Kostenlose CRX Beispieldateien – Chrome-Erweiterungsdateien testen',
            description: 'Laden Sie kostenlose CRX Chrome-Erweiterungs-Paket-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Chrome-Erweiterungsinstallation, CRX-Analyse und Browser-Erweiterungs-Verarbeitungstools.'
          },
          hero: {
            title: 'CRX Beispieldateien',
            description: 'Laden Sie kostenlose CRX Chrome-Erweiterungs-Paket-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Chrome-Erweiterungsinstallation, CRX-Analyse und Browser-Erweiterungs-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind CRX (Chrome Extension) Paket-Testdateien in verschiedenen Größen für Testzwecke'
        },
        hpp: {
          meta: {
            title: 'Kostenlose HPP Beispieldateien herunterladen – C++-Header-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose HPP C++-Header-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C++-Code-Kompilierung, Header-Datei-Verarbeitung und Entwicklungstools.',
            keywords: 'HPP Beispieldateien, HPP Testdateien, HPP Beispiele herunterladen, kostenlose HPP Testdateien, C++-Header Beispiele, Header-Datei Beispiele, .hpp Testdateien, C++-Header-Dateien, Programmier-Header-Beispiele, Code-Header-Dateien, C++-Entwicklungsdateien'
          },
          schema: {
            name: 'Kostenlose HPP Beispieldateien – C++-Header-Dateien testen',
            description: 'Laden Sie kostenlose HPP C++-Header-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C++-Code-Kompilierung, Header-Datei-Verarbeitung und Entwicklungstools.'
          },
          hero: {
            title: 'HPP Beispieldateien',
            description: 'Laden Sie kostenlose HPP C++-Header-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre C++-Code-Kompilierung und Header-Datei-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind HPP (C++-Header) Testdateien in verschiedenen Größen für Testzwecke'
        },
        hex: {
          meta: {
            title: 'Kostenlose HEX Beispieldateien herunterladen – Hexadezimalformat-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose HEX Hexadezimalformat-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Hexadezimal-Parsing, Binärdatenanalyse und Hex-Datei-Verarbeitungstools.',
            keywords: 'HEX Beispieldateien, HEX Testdateien, HEX Beispiele herunterladen, kostenlose HEX Testdateien, Hexadezimalformat Beispiele, Hex-Dump-Beispiele, HEX-Parsing-Testdateien, .hex Testdateien, binäre Hex-Beispiele, Hex-Editor-Dateien, Hexadezimaldaten-Beispiele'
          },
          schema: {
            name: 'Kostenlose HEX Beispieldateien – Hexadezimalformat-Dateien testen',
            description: 'Laden Sie kostenlose HEX Hexadezimalformat-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Hexadezimal-Parsing, Binärdatenanalyse und Hex-Datei-Verarbeitungstools.'
          },
          hero: {
            title: 'HEX Beispieldateien',
            description: 'Laden Sie kostenlose HEX Hexadezimalformat-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Hexadezimal-Parsing- und Binärdatenanalyse-Tools zu testen.'
          },
          about_description: 'Dies sind HEX (Hexadezimalformat) Testdateien in verschiedenen Größen für Testzwecke'
        },
        hdr: {
          meta: {
            title: 'Kostenlose HDR Beispieldateien herunterladen – High Dynamic Range Bilddateien testen | MorphyHub',
            description: 'Laden Sie kostenlose HDR High Dynamic Range Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von HDR-Bildverarbeitung, Ton-Mapping und High Dynamic Range Betrachtungstools.',
            keywords: 'HDR Beispieldateien, HDR Testdateien, HDR Beispiele herunterladen, kostenlose HDR Testdateien, High Dynamic Range Beispiele, HDR-Bild-Beispiele, HDR-Ton-Mapping-Testdateien, .hdr Testdateien, HDR-Bildverarbeitungs-Beispiele, High Dynamic Range Bilder, HDR-Viewer-Beispiele'
          },
          schema: {
            name: 'Kostenlose HDR Beispieldateien – High Dynamic Range Bilddateien testen',
            description: 'Laden Sie kostenlose HDR High Dynamic Range Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von HDR-Bildverarbeitung, Ton-Mapping und High Dynamic Range Betrachtungstools.'
          },
          hero: {
            title: 'HDR Beispieldateien',
            description: 'Laden Sie kostenlose HDR High Dynamic Range Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre HDR-Bildverarbeitungs- und Ton-Mapping-Tools zu testen.'
          },
          about_description: 'Dies sind HDR (High Dynamic Range) Bild-Testdateien in verschiedenen Größen für Testzwecke'
        },
        h: {
          meta: {
            title: 'Kostenlose H Beispieldateien herunterladen – C/C++-Header-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose H C/C++-Header-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C/C++-Code-Kompilierung, Header-Datei-Verarbeitung und Entwicklungstools.',
            keywords: 'H Beispieldateien, H Testdateien, H Beispiele herunterladen, kostenlose H Testdateien, C-Header Beispiele, C++-Header Beispiele, Header-Datei Beispiele, .h Testdateien, C/C++-Header-Dateien, Programmier-Header-Beispiele, Code-Header-Dateien'
          },
          schema: {
            name: 'Kostenlose H Beispieldateien – C/C++-Header-Dateien testen',
            description: 'Laden Sie kostenlose H C/C++-Header-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C/C++-Code-Kompilierung, Header-Datei-Verarbeitung und Entwicklungstools.'
          },
          hero: {
            title: 'H Beispieldateien',
            description: 'Laden Sie kostenlose H C/C++-Header-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre C/C++-Code-Kompilierung und Header-Datei-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind H (C/C++-Header) Testdateien in verschiedenen Größen für Testzwecke'
        },
        gz: {
          meta: {
            title: 'Kostenlose GZ Beispieldateien herunterladen – gzip-komprimierte Archivdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose GZ gzip-komprimierte Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Komprimierungstools, Archiv-Extraktion und gzip-Datei-Verarbeitung.',
            keywords: 'GZ Beispieldateien, GZ Testdateien, GZ Beispiele herunterladen, kostenlose GZ Testdateien, gzip-komprimierte Beispiele, Archiv-Beispiele, GZ-Komprimierungs-Testdateien, .gz Testdateien, gzip-Archiv-Beispiele, komprimierte Datei-Beispiele, GZ-Datei-Beispiele'
          },
          schema: {
            name: 'Kostenlose GZ Beispieldateien – gzip-komprimierte Archivdateien testen',
            description: 'Laden Sie kostenlose GZ gzip-komprimierte Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Komprimierungstools, Archiv-Extraktion und gzip-Datei-Verarbeitung.'
          },
          hero: {
            title: 'GZ Beispieldateien',
            description: 'Laden Sie kostenlose GZ gzip-komprimierte Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Komprimierungs- und Archiv-Extraktionssoftware zu testen.'
          },
          about_description: 'Dies sind GZ (gzip) komprimierte Archiv-Testdateien in verschiedenen Größen für Testzwecke'
        },
        ace: {
          meta: {
            title: 'Kostenlose ACE Beispieldateien herunterladen – Archivdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose ACE Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archiv-Extraktion, Komprimierung und ACE-Format-Verarbeitungstools.',
            keywords: 'ACE Beispieldateien, ACE Testdateien, ACE Beispiele herunterladen, kostenlose ACE Testdateien, Archiv-Beispiele, WinACE-Beispiele, komprimierte Datei-Beispiele, .ace Testdateien, Datei-Komprimierungs-Beispiele, Archiv-Format-Beispiele'
          },
          schema: {
            name: 'Kostenlose ACE Beispieldateien – Archivdateien testen',
            description: 'Laden Sie kostenlose ACE Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archiv-Extraktion, Komprimierung und ACE-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'ACE Beispieldateien',
            description: 'Laden Sie kostenlose ACE Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Archiv-Extraktion, Komprimierung und ACE-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind ACE (WinACE) Archiv-Testdateien in verschiedenen Größen für Testzwecke'
        },
        '7z': {
          meta: {
            title: 'Kostenlose 7Z Beispieldateien herunterladen – Archivdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose 7Z Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archiv-Konvertierung, Komprimierung und Extraktionstools.',
            keywords: '7Z Beispieldateien, 7Z Testdateien, 7Z Beispiele herunterladen, kostenlose 7Z Testdateien, Archiv-Beispiele, 7-Zip-Beispiele, komprimierte Datei-Beispiele, .7z Testdateien, Archiv-Konvertierungs-Beispiele, Datei-Komprimierungs-Beispiele'
          },
          schema: {
            name: 'Kostenlose 7Z Beispieldateien – Archive testen',
            description: 'Laden Sie kostenlose 7Z Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archiv-Konvertierung und Extraktionstools.'
          },
          hero: {
            title: '7Z Beispieldateien',
            description: 'Laden Sie kostenlose 7Z Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Archiv-Konvertierung, Komprimierung und Extraktionstools zu testen.'
          },
          about_description: 'Dies sind 7Z Archiv-Testdateien in verschiedenen Größen für Testzwecke'
        },
        '3mf': {
          meta: {
            title: 'Kostenlose 3MF Beispieldateien herunterladen – 3D-Druckdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose 3MF 3D-Druck-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3D-Druck-Konvertierung, Betrachtung und 3MF-Format-Verarbeitungstools.',
            keywords: '3MF Beispieldateien, 3MF Testdateien, 3MF Beispiele herunterladen, kostenlose 3MF Testdateien, 3D-Druck-Beispiele, 3MF-Format-Beispiele, 3D-Druck-Konvertierungs-Testdateien, .3mf Testdateien, additive Fertigungs-Beispiele, 3D-Drucker-Beispiele'
          },
          schema: {
            name: 'Kostenlose 3MF Beispieldateien – 3D-Druckdateien testen',
            description: 'Laden Sie kostenlose 3MF 3D-Druck-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3D-Druck-Konvertierung, Betrachtung und 3MF-Format-Verarbeitungstools.'
          },
          hero: {
            title: '3MF Beispieldateien',
            description: 'Laden Sie kostenlose 3MF 3D-Druck-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre 3D-Druck-Konvertierung, Betrachtung und 3MF-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind 3MF (3D Manufacturing Format) 3D-Druck-Testdateien in verschiedenen Größen für Testzwecke'
        },
        apk: {
          meta: {
            title: 'Kostenlose APK Beispieldateien herunterladen – Android-Anwendungsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose APK Android-Anwendungspaket-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Android-App-Installation, APK-Analyse und mobilen Anwendungsverarbeitungstools.',
            keywords: 'APK Beispieldateien, APK Testdateien, APK Beispiele herunterladen, kostenlose APK Testdateien, Android-App-Beispiele, mobile Anwendungs-Beispiele, APK-Paket-Beispiele, APK-Installations-Testdateien, .apk Testdateien, Android-Anwendungs-Beispiele, App-Installations-Beispiele'
          },
          schema: {
            name: 'Kostenlose APK Beispieldateien – Android-Anwendungsdateien testen',
            description: 'Laden Sie kostenlose APK Android-Anwendungspaket-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Android-App-Installation, APK-Analyse und mobilen Anwendungsverarbeitungstools.'
          },
          hero: {
            title: 'APK Beispieldateien',
            description: 'Laden Sie kostenlose APK Android-Anwendungspaket-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Android-App-Installation, APK-Analyse und mobilen Anwendungsverarbeitungstools zu testen.'
          },
          about_description: 'Dies sind APK (Android Package) Anwendungs-Testdateien in verschiedenen Größen für Testzwecke'
        },
        mkv: {
          meta: {
            title: 'Kostenlose MKV Beispieldateien herunterladen – Matroska-Videodateien testen | MorphyHub',
            description: 'Laden Sie kostenlose MKV Matroska-Videocontainer-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Videowiedergabe, Medienkonvertierung und MKV-Format-Verarbeitungstools.',
            keywords: 'MKV Beispieldateien, MKV Testdateien, MKV Beispiele herunterladen, kostenlose MKV Testdateien, Matroska-Video-Beispiele, Videocontainer-Beispiele, MKV-Wiedergabe-Testdateien, .mkv Testdateien, Videoformat-Beispiele, Mediencontainer-Beispiele, MKV-Video-Beispiele'
          },
          schema: {
            name: 'Kostenlose MKV Beispieldateien – Matroska-Videodateien testen',
            description: 'Laden Sie kostenlose MKV Matroska-Videocontainer-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Videowiedergabe, Medienkonvertierung und MKV-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'MKV Beispieldateien',
            description: 'Laden Sie kostenlose MKV Matroska-Videocontainer-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Videowiedergabe, Medienkonvertierung und MKV-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind MKV (Matroska Video) Container-Testdateien in verschiedenen Größen für Testzwecke'
        },
        midi: {
          meta: {
            title: 'Kostenlose MIDI Beispieldateien herunterladen – Musical Instrument Digital Interface-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose MIDI Musical Instrument Digital Interface-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Musiksynthese, MIDI-Wiedergabe und digitalen Musikverarbeitungstools.',
            keywords: 'MIDI Beispieldateien, MIDI Testdateien, MIDI Beispiele herunterladen, kostenlose MIDI Testdateien, Musiksynthese-Beispiele, MIDI-Wiedergabe-Beispiele, digitale Musik-Beispiele, .midi Testdateien, .mid Testdateien, Musikformat-Beispiele, MIDI-Musik-Beispiele'
          },
          schema: {
            name: 'Kostenlose MIDI Beispieldateien – Musical Instrument Digital Interface-Dateien testen',
            description: 'Laden Sie kostenlose MIDI Musical Instrument Digital Interface-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Musiksynthese, MIDI-Wiedergabe und digitalen Musikverarbeitungstools.'
          },
          hero: {
            title: 'MIDI Beispieldateien',
            description: 'Laden Sie kostenlose MIDI Musical Instrument Digital Interface-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Musiksynthese, MIDI-Wiedergabe und digitalen Musikverarbeitungstools zu testen.'
          },
          about_description: 'Dies sind MIDI (Musical Instrument Digital Interface) Testdateien in verschiedenen Größen für Testzwecke'
        },
        mdx: {
          meta: {
            title: 'Kostenlose MDX Beispieldateien herunterladen – Markdown Extended-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose MDX Markdown Extended-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Markdown-Verarbeitung, Komponentendokumentation und MDX-Format-Verarbeitungstools.',
            keywords: 'MDX Beispieldateien, MDX Testdateien, MDX Beispiele herunterladen, kostenlose MDX Testdateien, Markdown Extended-Beispiele, Komponentendokumentations-Beispiele, MDX-Verarbeitungs-Testdateien, .mdx Testdateien, Markdown-Format-Beispiele, Dokumentations-Format-Beispiele'
          },
          schema: {
            name: 'Kostenlose MDX Beispieldateien – Markdown Extended-Dateien testen',
            description: 'Laden Sie kostenlose MDX Markdown Extended-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Markdown-Verarbeitung, Komponentendokumentation und MDX-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'MDX Beispieldateien',
            description: 'Laden Sie kostenlose MDX Markdown Extended-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Markdown-Verarbeitung, Komponentendokumentation und MDX-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind MDX (Markdown Extended) Testdateien in verschiedenen Größen für Testzwecke'
        },
        ico: {
          meta: {
            title: 'Kostenlose ICO Beispieldateien herunterladen – Icon-Bilddateien testen | MorphyHub',
            description: 'Laden Sie kostenlose ICO Icon-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Icon-Extraktion, Bildkonvertierung und ICO-Format-Verarbeitungstools.',
            keywords: 'ICO Beispieldateien, ICO Testdateien, ICO Beispiele herunterladen, kostenlose ICO Testdateien, Icon-Bild-Beispiele, Favicon-Beispiele, ICO-Extraktions-Testdateien, .ico Testdateien, Icon-Format-Beispiele, Bildformat-Beispiele, ICO-Icon-Beispiele'
          },
          schema: {
            name: 'Kostenlose ICO Beispieldateien – Icon-Bilddateien testen',
            description: 'Laden Sie kostenlose ICO Icon-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Icon-Extraktion, Bildkonvertierung und ICO-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'ICO Beispieldateien',
            description: 'Laden Sie kostenlose ICO Icon-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Icon-Extraktion, Bildkonvertierung und ICO-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind ICO (Icon) Bild-Testdateien in verschiedenen Größen für Testzwecke'
        },
        iso: {
          meta: {
            title: 'Kostenlose ISO Beispieldateien herunterladen – Disc-Image-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose ISO Disc-Image-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Disc-Image-Montage, ISO-Extraktion und Archiv-Verarbeitungstools.',
            keywords: 'ISO Beispieldateien, ISO Testdateien, ISO Beispiele herunterladen, kostenlose ISO Testdateien, Disc-Image-Beispiele, ISO-Archiv-Beispiele, Disc-Montage-Testdateien, .iso Testdateien, Image-Archiv-Beispiele, Disc-Format-Beispiele, ISO-Image-Beispiele'
          },
          schema: {
            name: 'Kostenlose ISO Beispieldateien – Disc-Image-Dateien testen',
            description: 'Laden Sie kostenlose ISO Disc-Image-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Disc-Image-Montage, ISO-Extraktion und Archiv-Verarbeitungstools.'
          },
          hero: {
            title: 'ISO Beispieldateien',
            description: 'Laden Sie kostenlose ISO Disc-Image-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Disc-Image-Montage, ISO-Extraktion und Archiv-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind ISO (International Organization for Standardization) Disc-Image-Testdateien in verschiedenen Größen für Testzwecke'
        },
        ipynb: {
          meta: {
            title: 'Kostenlose IPYNB Beispieldateien herunterladen – Jupyter Notebook-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose IPYNB Jupyter Notebook-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Notebook-Ausführung, Data-Science-Workflows und IPYNB-Format-Verarbeitungstools.',
            keywords: 'IPYNB Beispieldateien, IPYNB Testdateien, IPYNB Beispiele herunterladen, kostenlose IPYNB Testdateien, Jupyter Notebook-Beispiele, Data-Science-Beispiele, Notebook-Ausführungs-Testdateien, .ipynb Testdateien, Notebook-Format-Beispiele, Datenanalyse-Beispiele'
          },
          schema: {
            name: 'Kostenlose IPYNB Beispieldateien – Jupyter Notebook-Dateien testen',
            description: 'Laden Sie kostenlose IPYNB Jupyter Notebook-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Notebook-Ausführung, Data-Science-Workflows und IPYNB-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'IPYNB Beispieldateien',
            description: 'Laden Sie kostenlose IPYNB Jupyter Notebook-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Notebook-Ausführung, Data-Science-Workflows und IPYNB-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind IPYNB (Jupyter Notebook) Testdateien in verschiedenen Größen für Testzwecke'
        },
        ipa: {
          meta: {
            title: 'Kostenlose IPA Beispieldateien herunterladen – iOS-Anwendungsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose IPA iOS-Anwendungsarchiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von iOS-App-Installation, IPA-Analyse und mobilen Anwendungsverarbeitungstools.',
            keywords: 'IPA Beispieldateien, IPA Testdateien, IPA Beispiele herunterladen, kostenlose IPA Testdateien, iOS-App-Beispiele, mobile Anwendungs-Beispiele, IPA-Paket-Beispiele, IPA-Installations-Testdateien, .ipa Testdateien, iOS-Anwendungs-Beispiele, App-Archiv-Beispiele'
          },
          schema: {
            name: 'Kostenlose IPA Beispieldateien – iOS-Anwendungsdateien testen',
            description: 'Laden Sie kostenlose IPA iOS-Anwendungsarchiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von iOS-App-Installation, IPA-Analyse und mobilen Anwendungsverarbeitungstools.'
          },
          hero: {
            title: 'IPA Beispieldateien',
            description: 'Laden Sie kostenlose IPA iOS-Anwendungsarchiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre iOS-App-Installation, IPA-Analyse und mobilen Anwendungsverarbeitungstools zu testen.'
          },
          about_description: 'Dies sind IPA (iOS App Store Package) Anwendungs-Testdateien in verschiedenen Größen für Testzwecke'
        },
        heif: {
          meta: {
            title: 'Kostenlose HEIF Beispieldateien herunterladen – High Efficiency Image Format-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose HEIF High Efficiency Image Format-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Bildkompression, HEIF-Konvertierung und modernen Bildformat-Verarbeitungstools.',
            keywords: 'HEIF Beispieldateien, HEIF Testdateien, HEIF Beispiele herunterladen, kostenlose HEIF Testdateien, High Efficiency Image Format-Beispiele, HEIF-Bild-Beispiele, Bildkompressions-Testdateien, .heif Testdateien, moderne Bildformat-Beispiele, HEIF-Konvertierungs-Beispiele'
          },
          schema: {
            name: 'Kostenlose HEIF Beispieldateien – High Efficiency Image Format-Dateien testen',
            description: 'Laden Sie kostenlose HEIF High Efficiency Image Format-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Bildkompression, HEIF-Konvertierung und modernen Bildformat-Verarbeitungstools.'
          },
          hero: {
            title: 'HEIF Beispieldateien',
            description: 'Laden Sie kostenlose HEIF High Efficiency Image Format-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Bildkompression, HEIF-Konvertierung und modernen Bildformat-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind HEIF (High Efficiency Image Format) Testdateien in verschiedenen Größen für Testzwecke'
        },
        heic: {
          meta: {
            title: 'Kostenlose HEIC Beispieldateien herunterladen – High Efficiency Image Container-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose HEIC High Efficiency Image Container-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Bildkompression, HEIC-Konvertierung und modernen Bildformat-Verarbeitungstools.',
            keywords: 'HEIC Beispieldateien, HEIC Testdateien, HEIC Beispiele herunterladen, kostenlose HEIC Testdateien, High Efficiency Image Container-Beispiele, HEIC-Bild-Beispiele, Bildkompressions-Testdateien, .heic Testdateien, moderne Bildformat-Beispiele, HEIC-Konvertierungs-Beispiele'
          },
          schema: {
            name: 'Kostenlose HEIC Beispieldateien – High Efficiency Image Container-Dateien testen',
            description: 'Laden Sie kostenlose HEIC High Efficiency Image Container-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Bildkompression, HEIC-Konvertierung und modernen Bildformat-Verarbeitungstools.'
          },
          hero: {
            title: 'HEIC Beispieldateien',
            description: 'Laden Sie kostenlose HEIC High Efficiency Image Container-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Bildkompression, HEIC-Konvertierung und modernen Bildformat-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind HEIC (High Efficiency Image Container) Testdateien in verschiedenen Größen für Testzwecke'
        },
        exr: {
          meta: {
            title: 'Kostenlose EXR Beispieldateien herunterladen – OpenEXR-Bilddateien testen | MorphyHub',
            description: 'Laden Sie kostenlose EXR OpenEXR High Dynamic Range Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von HDR-Bildverarbeitung, EXR-Konvertierung und High Dynamic Range Betrachtungstools.',
            keywords: 'EXR Beispieldateien, EXR Testdateien, EXR Beispiele herunterladen, kostenlose EXR Testdateien, OpenEXR-Bild-Beispiele, HDR-Bilddateien, EXR-Bilddateien, .exr Testdateien, High Dynamic Range Bilder, EXR-Konvertierungs-Testdateien'
          },
          schema: {
            name: 'Kostenlose EXR Beispieldateien – OpenEXR-Bilddateien testen',
            description: 'Laden Sie kostenlose EXR OpenEXR High Dynamic Range Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von HDR-Bildverarbeitung, EXR-Konvertierung und High Dynamic Range Betrachtungstools.'
          },
          hero: {
            title: 'EXR Beispieldateien',
            description: 'Laden Sie kostenlose EXR OpenEXR High Dynamic Range Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre HDR-Bildverarbeitung, EXR-Konvertierung und High Dynamic Range Betrachtungstools zu testen.'
          },
          about_description: 'Dies sind EXR (OpenEXR) High Dynamic Range Bild-Testdateien in verschiedenen Größen für Testzwecke'
        },
        exe: {
          meta: {
            title: 'Kostenlose EXE Beispieldateien herunterladen – Windows-Executable-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose EXE Windows-Executable-Anwendungs-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Executable-Analyse, Windows-Anwendungsverarbeitung und Binärdatei-Verarbeitungstools.',
            keywords: 'EXE Beispieldateien, EXE Testdateien, EXE Beispiele herunterladen, kostenlose EXE Testdateien, Windows-Executable-Beispiele, Anwendungsdateien, EXE-Binärdatei-Beispiele, .exe Testdateien, Executable-Analyse-Beispiele, Windows-App-Beispiele'
          },
          schema: {
            name: 'Kostenlose EXE Beispieldateien – Windows-Executable-Dateien testen',
            description: 'Laden Sie kostenlose EXE Windows-Executable-Anwendungs-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Executable-Analyse, Windows-Anwendungsverarbeitung und Binärdatei-Verarbeitungstools.'
          },
          hero: {
            title: 'EXE Beispieldateien',
            description: 'Laden Sie kostenlose EXE Windows-Executable-Anwendungs-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Executable-Analyse, Windows-Anwendungsverarbeitung und Binärdatei-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind EXE (Windows Executable) Anwendungs-Testdateien in verschiedenen Größen für Testzwecke'
        },
        eps: {
          meta: {
            title: 'Kostenlose EPS Beispieldateien herunterladen – Encapsulated PostScript-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose EPS Encapsulated PostScript Vektorbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Vektorgrafik-Verarbeitung, EPS-Konvertierung und PostScript-Format-Verarbeitungstools.',
            keywords: 'EPS Beispieldateien, EPS Testdateien, EPS Beispiele herunterladen, kostenlose EPS Testdateien, Encapsulated PostScript-Beispiele, Vektorgrafik-Beispiele, EPS-Bild-Beispiele, .eps Testdateien, PostScript-Format-Beispiele, Vektorformat-Beispiele'
          },
          schema: {
            name: 'Kostenlose EPS Beispieldateien – Encapsulated PostScript-Dateien testen',
            description: 'Laden Sie kostenlose EPS Encapsulated PostScript Vektorbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Vektorgrafik-Verarbeitung, EPS-Konvertierung und PostScript-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'EPS Beispieldateien',
            description: 'Laden Sie kostenlose EPS Encapsulated PostScript Vektorbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Vektorgrafik-Verarbeitung, EPS-Konvertierung und PostScript-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind EPS (Encapsulated PostScript) Vektorbild-Testdateien in verschiedenen Größen für Testzwecke'
        },
        elf: {
          meta: {
            title: 'Kostenlose ELF Beispieldateien herunterladen – Executable and Linkable Format-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose ELF Executable and Linkable Format Binärdatei-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Binäranalyse, ELF-Parsing und Executable-Format-Verarbeitungstools.',
            keywords: 'ELF Beispieldateien, ELF Testdateien, ELF Beispiele herunterladen, kostenlose ELF Testdateien, Executable and Linkable Format-Beispiele, Binärdatei-Beispiele, ELF-Executable-Beispiele, .elf Testdateien, Binäranalyse-Beispiele, Executable-Format-Beispiele'
          },
          schema: {
            name: 'Kostenlose ELF Beispieldateien – Executable and Linkable Format-Dateien testen',
            description: 'Laden Sie kostenlose ELF Executable and Linkable Format Binärdatei-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Binäranalyse, ELF-Parsing und Executable-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'ELF Beispieldateien',
            description: 'Laden Sie kostenlose ELF Executable and Linkable Format Binärdatei-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Binäranalyse, ELF-Parsing und Executable-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind ELF (Executable and Linkable Format) Binärdatei-Testdateien in verschiedenen Größen für Testzwecke'
        },
        editorconfig: {
          meta: {
            title: 'Kostenlose EditorConfig Beispieldateien herunterladen – Editor-Konfigurationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose EditorConfig Editor-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Editor-Konfigurations-Parsing, Code-Formatierungs-Tools und Entwicklungsumgebungs-Setup.',
            keywords: 'EditorConfig Beispieldateien, EditorConfig Testdateien, EditorConfig Beispiele herunterladen, kostenlose EditorConfig Testdateien, Editor-Konfigurations-Beispiele, .editorconfig Testdateien, Code-Formatierungs-Beispiele, Editor-Einstellungs-Beispiele, Entwicklungs-Konfigurations-Beispiele'
          },
          schema: {
            name: 'Kostenlose EditorConfig Beispieldateien – Editor-Konfigurationsdateien testen',
            description: 'Laden Sie kostenlose EditorConfig Editor-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Editor-Konfigurations-Parsing, Code-Formatierungs-Tools und Entwicklungsumgebungs-Setup.'
          },
          hero: {
            title: 'EditorConfig Beispieldateien',
            description: 'Laden Sie kostenlose EditorConfig Editor-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Editor-Konfigurations-Parsing, Code-Formatierungs-Tools und Entwicklungsumgebungs-Setup zu testen.'
          },
          about_description: 'Dies sind EditorConfig Editor-Konfigurations-Testdateien in verschiedenen Größen für Testzwecke'
        },
        dxf: {
          meta: {
            title: 'Kostenlose DXF Beispieldateien herunterladen – AutoCAD Drawing Exchange Format-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose DXF AutoCAD Drawing Exchange Format CAD-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Datei-Verarbeitung, DXF-Konvertierung und Zeichnungs-Format-Verarbeitungstools.',
            keywords: 'DXF Beispieldateien, DXF Testdateien, DXF Beispiele herunterladen, kostenlose DXF Testdateien, AutoCAD DXF-Beispiele, CAD-Datei-Beispiele, DXF-Zeichnungs-Beispiele, .dxf Testdateien, CAD-Format-Beispiele, Zeichnungs-Austausch-Format-Beispiele'
          },
          schema: {
            name: 'Kostenlose DXF Beispieldateien – AutoCAD Drawing Exchange Format-Dateien testen',
            description: 'Laden Sie kostenlose DXF AutoCAD Drawing Exchange Format CAD-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Datei-Verarbeitung, DXF-Konvertierung und Zeichnungs-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'DXF Beispieldateien',
            description: 'Laden Sie kostenlose DXF AutoCAD Drawing Exchange Format CAD-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre CAD-Datei-Verarbeitung, DXF-Konvertierung und Zeichnungs-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind DXF (AutoCAD Drawing Exchange Format) CAD-Testdateien in verschiedenen Größen für Testzwecke'
        },
        dwg: {
          meta: {
            title: 'Kostenlose DWG Beispieldateien herunterladen – AutoCAD-Zeichnungsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose DWG AutoCAD-Zeichnungs-CAD-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Datei-Verarbeitung, DWG-Konvertierung und AutoCAD-Format-Verarbeitungstools.',
            keywords: 'DWG Beispieldateien, DWG Testdateien, DWG Beispiele herunterladen, kostenlose DWG Testdateien, AutoCAD DWG-Beispiele, CAD-Datei-Beispiele, DWG-Zeichnungs-Beispiele, .dwg Testdateien, CAD-Format-Beispiele, AutoCAD-Zeichnungs-Beispiele'
          },
          schema: {
            name: 'Kostenlose DWG Beispieldateien – AutoCAD-Zeichnungsdateien testen',
            description: 'Laden Sie kostenlose DWG AutoCAD-Zeichnungs-CAD-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Datei-Verarbeitung, DWG-Konvertierung und AutoCAD-Format-Verarbeitungstools.'
          },
          hero: {
            title: 'DWG Beispieldateien',
            description: 'Laden Sie kostenlose DWG AutoCAD-Zeichnungs-CAD-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre CAD-Datei-Verarbeitung, DWG-Konvertierung und AutoCAD-Format-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind DWG (AutoCAD Drawing) CAD-Testdateien in verschiedenen Größen für Testzwecke'
        },
        dockerfile: {
          meta: {
            title: 'Kostenlose Dockerfile Beispieldateien herunterladen – Docker-Konfigurationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose Dockerfile Docker-Container-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Docker-Build-Prozessen, Container-Konfigurations-Parsing und DevOps-Tools.',
            keywords: 'Dockerfile Beispieldateien, Dockerfile Testdateien, Dockerfile Beispiele herunterladen, kostenlose Dockerfile Testdateien, Docker-Konfigurations-Beispiele, Container-Konfigurations-Beispiele, .dockerfile Testdateien, Docker-Build-Beispiele, Containerisierungs-Beispiele'
          },
          schema: {
            name: 'Kostenlose Dockerfile Beispieldateien – Docker-Konfigurationsdateien testen',
            description: 'Laden Sie kostenlose Dockerfile Docker-Container-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Docker-Build-Prozessen, Container-Konfigurations-Parsing und DevOps-Tools.'
          },
          hero: {
            title: 'Dockerfile Beispieldateien',
            description: 'Laden Sie kostenlose Dockerfile Docker-Container-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Docker-Build-Prozesse, Container-Konfigurations-Parsing und DevOps-Tools zu testen.'
          },
          about_description: 'Dies sind Dockerfile Docker-Container-Konfigurations-Testdateien in verschiedenen Größen für Testzwecke'
        },
        'docker-compose-yml': {
          meta: {
            title: 'Kostenlose Docker Compose YML Beispieldateien herunterladen – Docker Compose-Konfigurationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose Docker Compose YML Multi-Container-Docker-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Docker Compose-Parsing, Multi-Container-Orchestrierung und DevOps-Konfigurations-Tools.',
            keywords: 'Docker Compose YML Beispieldateien, docker-compose.yml Testdateien, Docker Compose Beispiele herunterladen, kostenlose docker-compose Testdateien, Multi-Container-Konfigurations-Beispiele, Docker-Orchestrierungs-Beispiele, .yml Testdateien, Container-Orchestrierungs-Beispiele'
          },
          schema: {
            name: 'Kostenlose Docker Compose YML Beispieldateien – Docker Compose-Konfigurationsdateien testen',
            description: 'Laden Sie kostenlose Docker Compose YML Multi-Container-Docker-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Docker Compose-Parsing, Multi-Container-Orchestrierung und DevOps-Konfigurations-Tools.'
          },
          hero: {
            title: 'Docker Compose YML Beispieldateien',
            description: 'Laden Sie kostenlose Docker Compose YML Multi-Container-Docker-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Docker Compose-Parsing, Multi-Container-Orchestrierung und DevOps-Konfigurations-Tools zu testen.'
          },
          about_description: 'Dies sind Docker Compose YML Multi-Container-Docker-Konfigurations-Testdateien in verschiedenen Größen für Testzwecke'
        },
        dmp: {
          meta: {
            title: 'Kostenlose DMP Beispieldateien herunterladen – Windows-Speicherdump-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose DMP Windows-Speicherdump-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Speicherdump-Analyse, Crash-Debugging und Systemdiagnose-Tools.',
            keywords: 'DMP Beispieldateien, DMP Testdateien, DMP Beispiele herunterladen, kostenlose DMP Testdateien, Windows-Speicherdump-Beispiele, Crash-Dump-Beispiele, .dmp Testdateien, Speicheranalyse-Beispiele, Systemdiagnose-Beispiele'
          },
          schema: {
            name: 'Kostenlose DMP Beispieldateien – Windows-Speicherdump-Dateien testen',
            description: 'Laden Sie kostenlose DMP Windows-Speicherdump-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Speicherdump-Analyse, Crash-Debugging und Systemdiagnose-Tools.'
          },
          hero: {
            title: 'DMP Beispieldateien',
            description: 'Laden Sie kostenlose DMP Windows-Speicherdump-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Speicherdump-Analyse, Crash-Debugging und Systemdiagnose-Tools zu testen.'
          },
          about_description: 'Dies sind DMP (Windows Memory Dump) Testdateien in verschiedenen Größen für Testzwecke'
        },
        dng: {
          meta: {
            title: 'Kostenlose DNG Beispieldateien herunterladen – Digital Negative Format-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose DNG Digital Negative RAW-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von RAW-Bildverarbeitung, DNG-Konvertierung und digitalen Fotografie-Workflows.',
            keywords: 'DNG Beispieldateien, DNG Testdateien, DNG Beispiele herunterladen, kostenlose DNG Testdateien, Digital Negative-Beispiele, RAW-Bild-Beispiele, DNG-Foto-Beispiele, .dng Testdateien, RAW-Format-Beispiele, Kamera-RAW-Beispiele'
          },
          schema: {
            name: 'Kostenlose DNG Beispieldateien – Digital Negative Format-Dateien testen',
            description: 'Laden Sie kostenlose DNG Digital Negative RAW-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von RAW-Bildverarbeitung, DNG-Konvertierung und digitalen Fotografie-Workflows.'
          },
          hero: {
            title: 'DNG Beispieldateien',
            description: 'Laden Sie kostenlose DNG Digital Negative RAW-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre RAW-Bildverarbeitung, DNG-Konvertierung und digitalen Fotografie-Workflows zu testen.'
          },
          about_description: 'Dies sind DNG (Digital Negative) RAW-Bild-Testdateien in verschiedenen Größen für Testzwecke'
        },
        dmg: {
          meta: {
            title: 'Kostenlose DMG Beispieldateien herunterladen – macOS-Disk-Image-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose DMG macOS-Disk-Image-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von macOS-App-Installation, DMG-Extraktion und Disk-Image-Verarbeitungstools.',
            keywords: 'DMG Beispieldateien, DMG Testdateien, DMG Beispiele herunterladen, kostenlose DMG Testdateien, macOS-Disk-Image-Beispiele, Mac-App-Beispiele, DMG-Archiv-Beispiele, .dmg Testdateien, Disk-Image-Beispiele, macOS-Installer-Beispiele'
          },
          schema: {
            name: 'Kostenlose DMG Beispieldateien – macOS-Disk-Image-Dateien testen',
            description: 'Laden Sie kostenlose DMG macOS-Disk-Image-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von macOS-App-Installation, DMG-Extraktion und Disk-Image-Verarbeitungstools.'
          },
          hero: {
            title: 'DMG Beispieldateien',
            description: 'Laden Sie kostenlose DMG macOS-Disk-Image-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre macOS-App-Installation, DMG-Extraktion und Disk-Image-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind DMG (macOS Disk Image) Archiv-Testdateien in verschiedenen Größen für Testzwecke'
        },
        der: {
          meta: {
            title: 'Kostenlose DER Beispieldateien herunterladen – Distinguished Encoding Rules-Zertifikatsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose DER Distinguished Encoding Rules-Zertifikats-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Zertifikats-Parsing, SSL/TLS-Konfiguration und kryptografischen Datei-Verarbeitungstools.',
            keywords: 'DER Beispieldateien, DER Testdateien, DER Beispiele herunterladen, kostenlose DER Testdateien, Zertifikats-Beispiele, SSL-Zertifikats-Beispiele, DER-Zertifikats-Beispiele, .der Testdateien, kryptografische Beispiele, Zertifikats-Format-Beispiele'
          },
          schema: {
            name: 'Kostenlose DER Beispieldateien – Distinguished Encoding Rules-Zertifikatsdateien testen',
            description: 'Laden Sie kostenlose DER Distinguished Encoding Rules-Zertifikats-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Zertifikats-Parsing, SSL/TLS-Konfiguration und kryptografischen Datei-Verarbeitungstools.'
          },
          hero: {
            title: 'DER Beispieldateien',
            description: 'Laden Sie kostenlose DER Distinguished Encoding Rules-Zertifikats-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Zertifikats-Parsing, SSL/TLS-Konfiguration und kryptografischen Datei-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind DER (Distinguished Encoding Rules) Zertifikats-Testdateien in verschiedenen Größen für Testzwecke'
        },
        dem: {
          meta: {
            title: 'Kostenlose DEM Beispieldateien herunterladen – Digital Elevation Model-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose DEM Digital Elevation Model geografische Daten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von GIS-Software, Geländekartierung und Höhendaten-Verarbeitungstools.',
            keywords: 'DEM Beispieldateien, DEM Testdateien, DEM Beispiele herunterladen, kostenlose DEM Testdateien, Digital Elevation Model-Beispiele, GIS-Daten-Beispiele, Geländedaten-Beispiele, .dem Testdateien, Höhenmodell-Beispiele, geografische Daten-Beispiele'
          },
          schema: {
            name: 'Kostenlose DEM Beispieldateien – Digital Elevation Model-Dateien testen',
            description: 'Laden Sie kostenlose DEM Digital Elevation Model geografische Daten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von GIS-Software, Geländekartierung und Höhendaten-Verarbeitungstools.'
          },
          hero: {
            title: 'DEM Beispieldateien',
            description: 'Laden Sie kostenlose DEM Digital Elevation Model geografische Daten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre GIS-Software, Geländekartierung und Höhendaten-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind DEM (Digital Elevation Model) geografische Daten-Testdateien in verschiedenen Größen für Testzwecke'
        },
        dds: {
          meta: {
            title: 'Kostenlose DDS Beispieldateien herunterladen – DirectDraw Surface-Bilddateien testen | MorphyHub',
            description: 'Laden Sie kostenlose DDS DirectDraw Surface Texturbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Spieltextur-Verarbeitung, DDS-Konvertierung und Grafik-Engine-Tools.',
            keywords: 'DDS Beispieldateien, DDS Testdateien, DDS Beispiele herunterladen, kostenlose DDS Testdateien, DirectDraw Surface-Beispiele, Texturbild-Beispiele, DDS-Textur-Beispiele, .dds Testdateien, Spieltextur-Beispiele, Grafik-Format-Beispiele'
          },
          schema: {
            name: 'Kostenlose DDS Beispieldateien – DirectDraw Surface-Bilddateien testen',
            description: 'Laden Sie kostenlose DDS DirectDraw Surface Texturbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Spieltextur-Verarbeitung, DDS-Konvertierung und Grafik-Engine-Tools.'
          },
          hero: {
            title: 'DDS Beispieldateien',
            description: 'Laden Sie kostenlose DDS DirectDraw Surface Texturbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Spieltextur-Verarbeitung, DDS-Konvertierung und Grafik-Engine-Tools zu testen.'
          },
          about_description: 'Dies sind DDS (DirectDraw Surface) Texturbild-Testdateien in verschiedenen Größen für Testzwecke'
        },
        dbf: {
          meta: {
            title: 'Kostenlose DBF Beispieldateien herunterladen – dBASE-Datenbankdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose DBF dBASE-Datenbank-Tabellen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Datenbankkonvertierung, DBF-Parsing und Legacy-Datenbankformat-Verarbeitungstools.',
            keywords: 'DBF Beispieldateien, DBF Testdateien, DBF Beispiele herunterladen, kostenlose DBF Testdateien, dBASE-Datenbank-Beispiele, Datenbank-Tabellen-Beispiele, DBF-Datenbank-Beispiele, .dbf Testdateien, Legacy-Datenbank-Beispiele, Datenbank-Format-Beispiele'
          },
          schema: {
            name: 'Kostenlose DBF Beispieldateien – dBASE-Datenbankdateien testen',
            description: 'Laden Sie kostenlose DBF dBASE-Datenbank-Tabellen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Datenbankkonvertierung, DBF-Parsing und Legacy-Datenbankformat-Verarbeitungstools.'
          },
          hero: {
            title: 'DBF Beispieldateien',
            description: 'Laden Sie kostenlose DBF dBASE-Datenbank-Tabellen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Datenbankkonvertierung, DBF-Parsing und Legacy-Datenbankformat-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind DBF (dBASE Database) Tabellen-Testdateien in verschiedenen Größen für Testzwecke'
        },
        dav: {
          meta: {
            title: 'Kostenlose DAV Beispieldateien herunterladen – DAV-Videodateien testen | MorphyHub',
            description: 'Laden Sie kostenlose DAV DAV-Videoüberwachungs-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Videoüberwachungs-Wiedergabe, DAV-Konvertierung und Sicherheitskamera-Datei-Verarbeitungstools.',
            keywords: 'DAV Beispieldateien, DAV Testdateien, DAV Beispiele herunterladen, kostenlose DAV Testdateien, DAV-Video-Beispiele, Videoüberwachungs-Beispiele, DAV-Kamera-Beispiele, .dav Testdateien, Sicherheitskamera-Beispiele, Video-Format-Beispiele'
          },
          schema: {
            name: 'Kostenlose DAV Beispieldateien – DAV-Videodateien testen',
            description: 'Laden Sie kostenlose DAV DAV-Videoüberwachungs-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Videoüberwachungs-Wiedergabe, DAV-Konvertierung und Sicherheitskamera-Datei-Verarbeitungstools.'
          },
          hero: {
            title: 'DAV Beispieldateien',
            description: 'Laden Sie kostenlose DAV DAV-Videoüberwachungs-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Videoüberwachungs-Wiedergabe, DAV-Konvertierung und Sicherheitskamera-Datei-Verarbeitungstools zu testen.'
          },
          about_description: 'Dies sind DAV-Videoüberwachungs-Testdateien in verschiedenen Größen für Testzwecke'
        },
        'customer-database-sql': {
          meta: {
            title: 'Kostenlose Customer Database SQL Beispieldateien herunterladen – SQL-Datenbankdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose Customer Database SQL SQL-Datenbank-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von SQL-Datenbank-Import, Kundendaten-Verarbeitung und Datenbank-Management-Tools.',
            keywords: 'Customer Database SQL Beispieldateien, SQL-Datenbank-Testdateien, SQL Beispiele herunterladen, kostenlose SQL Testdateien, Datenbank-Skript-Beispiele, Kundendaten-Beispiele, SQL-Import-Beispiele, .sql Testdateien, Datenbank-Management-Beispiele'
          },
          schema: {
            name: 'Kostenlose Customer Database SQL Beispieldateien – SQL-Datenbankdateien testen',
            description: 'Laden Sie kostenlose Customer Database SQL SQL-Datenbank-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von SQL-Datenbank-Import, Kundendaten-Verarbeitung und Datenbank-Management-Tools.'
          },
          hero: {
            title: 'Customer Database SQL Beispieldateien',
            description: 'Laden Sie kostenlose Customer Database SQL SQL-Datenbank-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre SQL-Datenbank-Import, Kundendaten-Verarbeitung und Datenbank-Management-Tools zu testen.'
          },
          about_description: 'Dies sind Customer Database SQL Datenbank-Skript-Testdateien in verschiedenen Größen für Testzwecke'
        },
        cue: {
          meta: {
            title: 'Kostenlose CUE Beispieldateien herunterladen – CUE Sheet-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose CUE CUE Sheet Audio-Disc-Image-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audio-Disc-Brennen, CUE Sheet-Parsing und CD/DVD-Image-Erstellungs-Tools.',
            keywords: 'CUE Beispieldateien, CUE Testdateien, CUE Beispiele herunterladen, kostenlose CUE Testdateien, CUE Sheet-Beispiele, Audio-Disc-Beispiele, CUE-Disc-Image-Beispiele, .cue Testdateien, CD-Image-Beispiele, Audio-Format-Beispiele'
          },
          schema: {
            name: 'Kostenlose CUE Beispieldateien – CUE Sheet-Dateien testen',
            description: 'Laden Sie kostenlose CUE CUE Sheet Audio-Disc-Image-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audio-Disc-Brennen, CUE Sheet-Parsing und CD/DVD-Image-Erstellungs-Tools.'
          },
          hero: {
            title: 'CUE Beispieldateien',
            description: 'Laden Sie kostenlose CUE CUE Sheet Audio-Disc-Image-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Audio-Disc-Brennen, CUE Sheet-Parsing und CD/DVD-Image-Erstellungs-Tools zu testen.'
          },
          about_description: 'Dies sind CUE (CUE Sheet) Audio-Disc-Image-Testdateien in verschiedenen Größen für Testzwecke'
        },
        csr: {
          meta: {
            title: 'Kostenlose CSR Beispieldateien herunterladen – Certificate Signing Request-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose CSR Certificate Signing Request-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von SSL-Zertifikats-Generierung, CSR-Parsing und Zertifizierungsstelle-Tools.',
            keywords: 'CSR Beispieldateien, CSR Testdateien, CSR Beispiele herunterladen, kostenlose CSR Testdateien, Certificate Signing Request-Beispiele, SSL-Zertifikats-Beispiele, CSR-Zertifikats-Beispiele, .csr Testdateien, Zertifizierungsstelle-Beispiele'
          },
          schema: {
            name: 'Kostenlose CSR Beispieldateien – Certificate Signing Request-Dateien testen',
            description: 'Laden Sie kostenlose CSR Certificate Signing Request-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von SSL-Zertifikats-Generierung, CSR-Parsing und Zertifizierungsstelle-Tools.'
          },
          hero: {
            title: 'CSR Beispieldateien',
            description: 'Laden Sie kostenlose CSR Certificate Signing Request-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre SSL-Zertifikats-Generierung, CSR-Parsing und Zertifizierungsstelle-Tools zu testen.'
          },
          about_description: 'Dies sind CSR (Certificate Signing Request) Testdateien in verschiedenen Größen für Testzwecke'
        },
        cs: {
          meta: {
            title: 'Kostenlose C# Beispieldateien herunterladen – C#-Quellcodedateien testen | MorphyHub',
            description: 'Laden Sie kostenlose C# C#-Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C#-Code-Analyse, .NET-Kompilierung und C#-Entwicklungstools.',
            keywords: 'C# Beispieldateien, C# Testdateien, C# Beispiele herunterladen, kostenlose C# Testdateien, C#-Quellcode-Beispiele, .NET-Code-Beispiele, C#-Programm-Beispiele, .cs Testdateien, C#-Entwicklungs-Beispiele, C#-Code-Beispiele'
          },
          schema: {
            name: 'Kostenlose C# Beispieldateien – C#-Quellcodedateien testen',
            description: 'Laden Sie kostenlose C# C#-Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C#-Code-Analyse, .NET-Kompilierung und C#-Entwicklungstools.'
          },
          hero: {
            title: 'C# Beispieldateien',
            description: 'Laden Sie kostenlose C# C#-Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre C#-Code-Analyse, .NET-Kompilierung und C#-Entwicklungstools zu testen.'
          },
          about_description: 'Dies sind C#-Quellcode-Testdateien in verschiedenen Größen für Testzwecke'
        },
        cpio: {
          meta: {
            title: 'Kostenlose CPIO Beispieldateien herunterladen – CPIO-Archivdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose CPIO CPIO-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CPIO-Archiv-Extraktion, CPIO-Kompression und Unix-Archiv-Tools.',
            keywords: 'CPIO Beispieldateien, CPIO Testdateien, CPIO Beispiele herunterladen, kostenlose CPIO Testdateien, CPIO-Archiv-Beispiele, Unix-Archiv-Beispiele, CPIO-Kompressions-Beispiele, .cpio Testdateien, Archiv-Format-Beispiele'
          },
          schema: {
            name: 'Kostenlose CPIO Beispieldateien – CPIO-Archivdateien testen',
            description: 'Laden Sie kostenlose CPIO CPIO-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CPIO-Archiv-Extraktion, CPIO-Kompression und Unix-Archiv-Tools.'
          },
          hero: {
            title: 'CPIO Beispieldateien',
            description: 'Laden Sie kostenlose CPIO CPIO-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre CPIO-Archiv-Extraktion, CPIO-Kompression und Unix-Archiv-Tools zu testen.'
          },
          about_description: 'Dies sind CPIO (Copy In, Copy Out) Archiv-Testdateien in verschiedenen Größen für Testzwecke'
        },
        'config-ini': {
          meta: {
            title: 'Kostenlose Config INI Beispieldateien herunterladen – Konfigurations-INI-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose Config INI Konfigurations-INI-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von INI-Datei-Parsing, Konfigurations-Management und Anwendungseinstellungs-Tools.',
            keywords: 'Config INI Beispieldateien, INI Testdateien, INI Beispiele herunterladen, kostenlose INI Testdateien, Konfigurations-INI-Beispiele, INI-Konfigurations-Beispiele, .ini Testdateien, Konfigurationsdatei-Beispiele'
          },
          schema: {
            name: 'Kostenlose Config INI Beispieldateien – Konfigurations-INI-Dateien testen',
            description: 'Laden Sie kostenlose Config INI Konfigurations-INI-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von INI-Datei-Parsing, Konfigurations-Management und Anwendungseinstellungs-Tools.'
          },
          hero: {
            title: 'Config INI Beispieldateien',
            description: 'Laden Sie kostenlose Config INI Konfigurations-INI-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre INI-Datei-Parsing, Konfigurations-Management und Anwendungseinstellungs-Tools zu testen.'
          },
          about_description: 'Dies sind Config INI Konfigurations-Testdateien in verschiedenen Größen für Testzwecke'
        },
        conf: {
          meta: {
            title: 'Kostenlose CONF Beispieldateien herunterladen – Konfigurationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose CONF Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Konfigurationsdatei-Parsing, Server-Konfiguration und Anwendungseinstellungs-Tools.',
            keywords: 'CONF Beispieldateien, CONF Testdateien, CONF Beispiele herunterladen, kostenlose CONF Testdateien, Konfigurationsdatei-Beispiele, Server-Konfigurations-Beispiele, .conf Testdateien, Konfigurationsdatei-Beispiele'
          },
          schema: {
            name: 'Kostenlose CONF Beispieldateien – Konfigurationsdateien testen',
            description: 'Laden Sie kostenlose CONF Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Konfigurationsdatei-Parsing, Server-Konfiguration und Anwendungseinstellungs-Tools.'
          },
          hero: {
            title: 'CONF Beispieldateien',
            description: 'Laden Sie kostenlose CONF Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Konfigurationsdatei-Parsing, Server-Konfiguration und Anwendungseinstellungs-Tools zu testen.'
          },
          about_description: 'Dies sind CONF Konfigurations-Testdateien in verschiedenen Größen für Testzwecke'
        },
        cmd: {
          meta: {
            title: 'Kostenlose CMD Beispieldateien herunterladen – Windows-Befehlsskriptdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose CMD Windows-Befehlsskript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Batch-Skript-Ausführung, Windows-Befehl-Verarbeitung und Automatisierungs-Tools.',
            keywords: 'CMD Beispieldateien, CMD Testdateien, CMD Beispiele herunterladen, kostenlose CMD Testdateien, Windows-Befehlsskript-Beispiele, Batch-Skript-Beispiele, .cmd Testdateien, Befehlsskript-Beispiele'
          },
          schema: {
            name: 'Kostenlose CMD Beispieldateien – Windows-Befehlsskriptdateien testen',
            description: 'Laden Sie kostenlose CMD Windows-Befehlsskript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Batch-Skript-Ausführung, Windows-Befehl-Verarbeitung und Automatisierungs-Tools.'
          },
          hero: {
            title: 'CMD Beispieldateien',
            description: 'Laden Sie kostenlose CMD Windows-Befehlsskript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Batch-Skript-Ausführung, Windows-Befehl-Verarbeitung und Automatisierungs-Tools zu testen.'
          },
          about_description: 'Dies sind CMD (Windows Command Script) Testdateien in verschiedenen Größen für Testzwecke'
        },
        'can-log': {
          meta: {
            title: 'Kostenlose CAN Log Beispieldateien herunterladen – Controller Area Network-Logdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose CAN Log Controller Area Network-Log-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAN-Bus-Analyse, Automobildiagnose und Netzwerkprotokoll-Tools.',
            keywords: 'CAN Log Beispieldateien, CAN-Log-Testdateien, CAN-Log-Beispiele herunterladen, kostenlose CAN-Log-Testdateien, Controller Area Network-Beispiele, CAN-Bus-Beispiele, .log Testdateien, Automobildiagnose-Beispiele'
          },
          schema: {
            name: 'Kostenlose CAN Log Beispieldateien – Controller Area Network-Logdateien testen',
            description: 'Laden Sie kostenlose CAN Log Controller Area Network-Log-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAN-Bus-Analyse, Automobildiagnose und Netzwerkprotokoll-Tools.'
          },
          hero: {
            title: 'CAN Log Beispieldateien',
            description: 'Laden Sie kostenlose CAN Log Controller Area Network-Log-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre CAN-Bus-Analyse, Automobildiagnose und Netzwerkprotokoll-Tools zu testen.'
          },
          about_description: 'Dies sind CAN Log (Controller Area Network) Log-Testdateien in verschiedenen Größen für Testzwecke'
        },
        bvh: {
          meta: {
            title: 'Kostenlose BVH Beispieldateien herunterladen – BioVision Hierarchy Motion-Capture-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose BVH BioVision Hierarchy Motion-Capture-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Motion-Capture-Wiedergabe, 3D-Animation und Character-Rigging-Tools.',
            keywords: 'BVH Beispieldateien, BVH Testdateien, BVH Beispiele herunterladen, kostenlose BVH Testdateien, BioVision Hierarchy-Beispiele, Motion-Capture-Beispiele, BVH-Animations-Beispiele, .bvh Testdateien, 3D-Animations-Beispiele'
          },
          schema: {
            name: 'Kostenlose BVH Beispieldateien – BioVision Hierarchy Motion-Capture-Dateien testen',
            description: 'Laden Sie kostenlose BVH BioVision Hierarchy Motion-Capture-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Motion-Capture-Wiedergabe, 3D-Animation und Character-Rigging-Tools.'
          },
          hero: {
            title: 'BVH Beispieldateien',
            description: 'Laden Sie kostenlose BVH BioVision Hierarchy Motion-Capture-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Motion-Capture-Wiedergabe, 3D-Animation und Character-Rigging-Tools zu testen.'
          },
          about_description: 'Dies sind BVH (BioVision Hierarchy) Motion-Capture-Testdateien in verschiedenen Größen für Testzwecke'
        },
        'barcode-svg': {
          meta: {
            title: 'Kostenlose Barcode SVG Beispieldateien herunterladen – Barcode-SVG-Bilddateien testen | MorphyHub',
            description: 'Laden Sie kostenlose Barcode SVG Barcode-SVG-Vektorbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Barcode-Scanning, SVG-Rendering und Vektorgrafik-Tools.',
            keywords: 'Barcode SVG Beispieldateien, Barcode-SVG-Testdateien, Barcode-SVG-Beispiele herunterladen, kostenlose Barcode-SVG-Testdateien, Barcode-Bild-Beispiele, SVG-Barcode-Beispiele, .svg Testdateien, Vektor-Barcode-Beispiele'
          },
          schema: {
            name: 'Kostenlose Barcode SVG Beispieldateien – Barcode-SVG-Bilddateien testen',
            description: 'Laden Sie kostenlose Barcode SVG Barcode-SVG-Vektorbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Barcode-Scanning, SVG-Rendering und Vektorgrafik-Tools.'
          },
          hero: {
            title: 'Barcode SVG Beispieldateien',
            description: 'Laden Sie kostenlose Barcode SVG Barcode-SVG-Vektorbild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Barcode-Scanning, SVG-Rendering und Vektorgrafik-Tools zu testen.'
          },
          about_description: 'Dies sind Barcode SVG Vektorbild-Testdateien in verschiedenen Größen für Testzwecke'
        },
        assetbundle: {
          meta: {
            title: 'Kostenlose AssetBundle Beispieldateien herunterladen – Unity AssetBundle-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose AssetBundle Unity AssetBundle-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Unity-Asset-Laden, Spiel-Asset-Management und Unity-Entwicklungstools.',
            keywords: 'AssetBundle Beispieldateien, AssetBundle Testdateien, AssetBundle Beispiele herunterladen, kostenlose AssetBundle Testdateien, Unity AssetBundle-Beispiele, Spiel-Asset-Beispiele, .assetbundle Testdateien, Unity-Asset-Beispiele'
          },
          schema: {
            name: 'Kostenlose AssetBundle Beispieldateien – Unity AssetBundle-Dateien testen',
            description: 'Laden Sie kostenlose AssetBundle Unity AssetBundle-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Unity-Asset-Laden, Spiel-Asset-Management und Unity-Entwicklungstools.'
          },
          hero: {
            title: 'AssetBundle Beispieldateien',
            description: 'Laden Sie kostenlose AssetBundle Unity AssetBundle-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Unity-Asset-Laden, Spiel-Asset-Management und Unity-Entwicklungstools zu testen.'
          },
          about_description: 'Dies sind AssetBundle Unity-Archiv-Testdateien in verschiedenen Größen für Testzwecke'
        },
        ase: {
          meta: {
            title: 'Kostenlose ASE Beispieldateien herunterladen – Adobe Swatch Exchange-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose ASE Adobe Swatch Exchange-Farbpaletten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Farbpaletten-Import, Design-Software-Integration und Farbmanagement-Tools.',
            keywords: 'ASE Beispieldateien, ASE Testdateien, ASE Beispiele herunterladen, kostenlose ASE Testdateien, Adobe Swatch Exchange-Beispiele, Farbpaletten-Beispiele, ASE-Farb-Beispiele, .ase Testdateien, Design-Farb-Beispiele'
          },
          schema: {
            name: 'Kostenlose ASE Beispieldateien – Adobe Swatch Exchange-Dateien testen',
            description: 'Laden Sie kostenlose ASE Adobe Swatch Exchange-Farbpaletten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Farbpaletten-Import, Design-Software-Integration und Farbmanagement-Tools.'
          },
          hero: {
            title: 'ASE Beispieldateien',
            description: 'Laden Sie kostenlose ASE Adobe Swatch Exchange-Farbpaletten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Farbpaletten-Import, Design-Software-Integration und Farbmanagement-Tools zu testen.'
          },
          about_description: 'Dies sind ASE (Adobe Swatch Exchange) Farbpaletten-Testdateien in verschiedenen Größen für Testzwecke'
        },
        asc: {
          meta: {
            title: 'Kostenlose ASC Beispieldateien herunterladen – ASCII-Textdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose ASC ASCII-Text-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Textverarbeitung, ASCII-Kodierung und Tools zur Handhabung von Klartextdateien.',
            keywords: 'ASC Beispieldateien, ASC Testdateien, ASC Beispiele herunterladen, kostenlose ASC Testdateien, ASCII-Text-Beispiele, Klartext-Beispiele, ASC-Datei-Beispiele, .asc Testdateien, Textformat-Beispiele'
          },
          schema: {
            name: 'Kostenlose ASC Beispieldateien – ASCII-Textdateien testen',
            description: 'Laden Sie kostenlose ASC ASCII-Text-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Textverarbeitung, ASCII-Kodierung und Tools zur Handhabung von Klartextdateien.'
          },
          hero: {
            title: 'ASC Beispieldateien',
            description: 'Laden Sie kostenlose ASC ASCII-Text-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Textverarbeitung, ASCII-Kodierung und Tools zur Handhabung von Klartextdateien zu testen.'
          },
          about_description: 'Dies sind ASC (ASCII Text) Testdateien in verschiedenen Größen für Testzwecke'
        },
        arj: {
          meta: {
            title: 'Kostenlose ARJ Beispieldateien herunterladen – ARJ-Archivdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose ARJ ARJ-komprimierte Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archiv-Extraktion, ARJ-Kompression und Tools für ältere Archivformate.',
            keywords: 'ARJ Beispieldateien, ARJ Testdateien, ARJ Beispiele herunterladen, kostenlose ARJ Testdateien, ARJ-Archiv-Beispiele, komprimierte Archiv-Beispiele, ARJ-Archiv-Beispiele, .arj Testdateien, ältere Archiv-Beispiele'
          },
          schema: {
            name: 'Kostenlose ARJ Beispieldateien – ARJ-Archivdateien testen',
            description: 'Laden Sie kostenlose ARJ ARJ-komprimierte Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archiv-Extraktion, ARJ-Kompression und Tools für ältere Archivformate.'
          },
          hero: {
            title: 'ARJ Beispieldateien',
            description: 'Laden Sie kostenlose ARJ ARJ-komprimierte Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Archiv-Extraktion, ARJ-Kompression und Tools für ältere Archivformate zu testen.'
          },
          about_description: 'Dies sind ARJ (ARJ Archive) komprimierte Archiv-Testdateien in verschiedenen Größen für Testzwecke'
        },
        'arduino-ino': {
          meta: {
            title: 'Kostenlose Arduino INO Beispieldateien herunterladen – Arduino-Sketch-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose Arduino INO Arduino-Sketch-Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Arduino-Entwicklung, Sketch-Kompilierung und Tools für eingebettete Programmierung.',
            keywords: 'Arduino INO Beispieldateien, Arduino INO Testdateien, Arduino INO Beispiele herunterladen, kostenlose Arduino INO Testdateien, Arduino-Sketch-Beispiele, Beispiele für eingebetteten Code, Arduino .ino Beispiele, .ino Testdateien, Mikrocontroller-Beispiele'
          },
          schema: {
            name: 'Kostenlose Arduino INO Beispieldateien – Arduino-Sketch-Dateien testen',
            description: 'Laden Sie kostenlose Arduino INO Arduino-Sketch-Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Arduino-Entwicklung, Sketch-Kompilierung und Tools für eingebettete Programmierung.'
          },
          hero: {
            title: 'Arduino INO Beispieldateien',
            description: 'Laden Sie kostenlose Arduino INO Arduino-Sketch-Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Arduino-Entwicklung, Sketch-Kompilierung und Tools für eingebettete Programmierung zu testen.'
          },
          about_description: 'Dies sind Arduino INO (Arduino Sketch) Quellcode-Testdateien in verschiedenen Größen für Testzwecke'
        },
        appimage: {
          meta: {
            title: 'Kostenlose AppImage Beispieldateien herunterladen – AppImage-Anwendungsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose AppImage AppImage portable Linux-Anwendungs-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Linux-App-Installation, AppImage-Ausführung und Tools für portable Anwendungen.',
            keywords: 'AppImage Beispieldateien, AppImage Testdateien, AppImage Beispiele herunterladen, kostenlose AppImage Testdateien, Linux-App-Beispiele, portable App-Beispiele, AppImage-Anwendungs-Beispiele, .appimage Testdateien, Linux-Executable-Beispiele'
          },
          schema: {
            name: 'Kostenlose AppImage Beispieldateien – AppImage-Anwendungsdateien testen',
            description: 'Laden Sie kostenlose AppImage AppImage portable Linux-Anwendungs-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Linux-App-Installation, AppImage-Ausführung und Tools für portable Anwendungen.'
          },
          hero: {
            title: 'AppImage Beispieldateien',
            description: 'Laden Sie kostenlose AppImage AppImage portable Linux-Anwendungs-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Linux-App-Installation, AppImage-Ausführung und Tools für portable Anwendungen zu testen.'
          },
          about_description: 'Dies sind AppImage portable Linux-Anwendungs-Testdateien in verschiedenen Größen für Testzwecke'
        },
        'animation-fbx': {
          meta: {
            title: 'Kostenlose Animation FBX Beispieldateien herunterladen – FBX 3D-Animationsdateien testen | MorphyHub',
            description: 'Laden Sie kostenlose Animation FBX FBX 3D-Animations- und Modelldatei-Beispiele zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3D-Animationswiedergabe, FBX-Import und 3D-Modellierungs-Tools.',
            keywords: 'Animation FBX Beispieldateien, FBX-Animations-Testdateien, FBX-Animations-Beispiele herunterladen, kostenlose FBX-Animations-Testdateien, 3D-Animations-Beispiele, FBX-Modell-Beispiele, FBX-Animations-Beispiele, .fbx Testdateien, 3D-Modell-Beispiele'
          },
          schema: {
            name: 'Kostenlose Animation FBX Beispieldateien – FBX 3D-Animationsdateien testen',
            description: 'Laden Sie kostenlose Animation FBX FBX 3D-Animations- und Modelldatei-Beispiele zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3D-Animationswiedergabe, FBX-Import und 3D-Modellierungs-Tools.'
          },
          hero: {
            title: 'Animation FBX Beispieldateien',
            description: 'Laden Sie kostenlose Animation FBX FBX 3D-Animations- und Modelldatei-Beispiele zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre 3D-Animationswiedergabe, FBX-Import und 3D-Modellierungs-Tools zu testen.'
          },
          about_description: 'Dies sind Animation FBX (FBX 3D Animation) Testdateien in verschiedenen Größen für Testzwecke'
        },
        amr: {
          meta: {
            title: 'Kostenlose AMR Beispieldateien herunterladen – AMR-Audiodateien testen | MorphyHub',
            description: 'Laden Sie kostenlose AMR AMR Adaptive Multi-Rate Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audiowiedergabe, AMR-Konvertierung und Tools für Sprachaufnahmeformate.',
            keywords: 'AMR Beispieldateien, AMR Testdateien, AMR Beispiele herunterladen, kostenlose AMR Testdateien, AMR-Audio-Beispiele, Sprachaufnahme-Beispiele, AMR-Sound-Beispiele, .amr Testdateien, Audioformat-Beispiele'
          },
          schema: {
            name: 'Kostenlose AMR Beispieldateien – AMR-Audiodateien testen',
            description: 'Laden Sie kostenlose AMR AMR Adaptive Multi-Rate Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audiowiedergabe, AMR-Konvertierung und Tools für Sprachaufnahmeformate.'
          },
          hero: {
            title: 'AMR Beispieldateien',
            description: 'Laden Sie kostenlose AMR AMR Adaptive Multi-Rate Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Audiowiedergabe, AMR-Konvertierung und Tools für Sprachaufnahmeformate zu testen.'
          },
          about_description: 'Dies sind AMR (Adaptive Multi-Rate) Audio-Testdateien in verschiedenen Größen für Testzwecke'
        },
        ai: {
          meta: {
            title: 'Kostenlose AI Beispieldateien herunterladen – Adobe Illustrator-Dateien testen | MorphyHub',
            description: 'Laden Sie kostenlose AI Adobe Illustrator Vektorgrafik-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Vektorgrafik-Anzeige, AI-Konvertierung und Tools für Illustrationsdesign.',
            keywords: 'AI Beispieldateien, AI Testdateien, AI Beispiele herunterladen, kostenlose AI Testdateien, Adobe Illustrator-Beispiele, Vektorgrafik-Beispiele, AI-Illustrations-Beispiele, .ai Testdateien, Designformat-Beispiele'
          },
          schema: {
            name: 'Kostenlose AI Beispieldateien – Adobe Illustrator-Dateien testen',
            description: 'Laden Sie kostenlose AI Adobe Illustrator Vektorgrafik-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Vektorgrafik-Anzeige, AI-Konvertierung und Tools für Illustrationsdesign.'
          },
          hero: {
            title: 'AI Beispieldateien',
            description: 'Laden Sie kostenlose AI Adobe Illustrator Vektorgrafik-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Vektorgrafik-Anzeige, AI-Konvertierung und Tools für Illustrationsdesign zu testen.'
          },
          about_description: 'Dies sind AI (Adobe Illustrator) Vektorgrafik-Testdateien in verschiedenen Größen für Testzwecke'
        },
        ac3: {
          meta: {
            title: 'Kostenlose AC3 Beispieldateien herunterladen – AC3-Audiodateien testen | MorphyHub',
            description: 'Laden Sie kostenlose AC3 AC3 Dolby Digital Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audiowiedergabe, AC3-Konvertierung und Tools für Surround-Sound-Formate.',
            keywords: 'AC3 Beispieldateien, AC3 Testdateien, AC3 Beispiele herunterladen, kostenlose AC3 Testdateien, AC3-Audio-Beispiele, Dolby Digital-Beispiele, AC3-Sound-Beispiele, .ac3 Testdateien, Audioformat-Beispiele'
          },
          schema: {
            name: 'Kostenlose AC3 Beispieldateien – AC3-Audiodateien testen',
            description: 'Laden Sie kostenlose AC3 AC3 Dolby Digital Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audiowiedergabe, AC3-Konvertierung und Tools für Surround-Sound-Formate.'
          },
          hero: {
            title: 'AC3 Beispieldateien',
            description: 'Laden Sie kostenlose AC3 AC3 Dolby Digital Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar, um Ihre Audiowiedergabe, AC3-Konvertierung und Tools für Surround-Sound-Formate zu testen.'
          },
          about_description: 'Dies sind AC3 (Dolby Digital) Audio-Testdateien in verschiedenen Größen für Testzwecke'
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

