import i18n from '../i18n';

interface SamplesPageTranslations {
  samples_page: {
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
    back_button: string;
    search: {
      placeholder: string;
      results: string;
      example_one: string;
      example_two: string;
    };
    categories: {
      document: string;
      data: string;
      application: string;
      design_3d: string;
      image_video: string;
      audio: string;
      archive: string;
    };
    actions: {
      download: string;
    };
    no_results: {
      title: string;
      description: string;
      clear: string;
    };
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    format_description_template: string;
    formats?: {
      [key: string]: {
        name: string;
        description: string;
      };
    };
  };
}

const samplesPageResources: Record<string, SamplesPageTranslations> = {
  en: {
    samples_page: {
      meta: {
        title: 'Free Sample Files – Download Test Files | MorphyHub',
        description: 'Get free sample images, documents, and archives to test MorphyHub converters, compressors, and viewers.',
        keywords: 'sample files, test files, download samples, free test files, DOCX samples, file samples, test files for conversion'
      },
      schema: {
        name: 'Free Sample Files for Download and Testing',
        description: 'Download free sample files of various types — images, documents, audio, video, and archives. Use them for testing, demos, or software validation on any platform.'
      },
      hero: {
        title: 'Sample Files',
        description: 'Download free sample files for testing. Multiple file sizes available for various formats to test your conversion and processing tools.'
      },
      back_button: 'Back to Home',
      search: {
        placeholder: 'Search sample files... (e.g., DOCX, JPG, PDF)',
        results: 'Found {{count}} sample file(s)',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'DOCUMENT SAMPLES',
        data: 'DATA SAMPLES',
        application: 'APPLICATION SAMPLES',
        design_3d: '3D & DESIGN SAMPLES',
        image_video: 'IMAGE & VIDEO SAMPLES',
        audio: 'AUDIO SAMPLES',
        archive: 'ARCHIVE SAMPLES'
      },
      actions: {
        download: 'Download'
      },
      no_results: {
        title: 'No sample files found',
        description: 'Try searching for something like "DOCX" or "JPG"',
        clear: 'Clear search'
      },
      features: {
        title: 'Why Choose Our Sample Files?',
        items: [
          {
            title: 'Free & Easy Access',
            description: 'Download sample files instantly without registration or payment.'
          },
          {
            title: 'Multiple Sizes',
            description: 'Choose from various file sizes (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) for comprehensive testing.'
          },
          {
            title: 'Wide Variety',
            description: 'Access samples across multiple categories: documents, images, audio, video, archives, and more.'
          }
        ]
      },
      format_description_template: 'Download free {{format}} sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing {{purpose}}.',
      formats: {
        docx: {
          name: 'DOCX Sample Files',
          description: 'Download free DOCX sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.'
        },
        doc: {
          name: 'DOC Sample Files',
          description: 'Download free DOC sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.'
        },
        pdf: {
          name: 'PDF Sample Files',
          description: 'Download free PDF sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.'
        },
        odp: {
          name: 'ODP Sample Files',
          description: 'Download free ODP sample OpenDocument presentation files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing presentation conversion and viewing tools.'
        },
        rtf: {
          name: 'RTF Sample Files',
          description: 'Download free RTF sample Rich Text Format document files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion and viewing tools.'
        },
        epub: {
          name: 'EPUB Sample Files',
          description: 'Download free EPUB sample eBook files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing eBook readers, EPUB conversion, and digital publishing tools.'
        },
        'invoice-pdf': {
          name: 'Invoice PDF Sample Files',
          description: 'Download free Invoice PDF sample invoice document files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing PDF invoice processing, invoice parsing, and document management tools.'
        },
        mobi: {
          name: 'MOBI Sample Files',
          description: 'Download free MOBI sample MOBI eBook files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing MOBI eBook conversion, MOBI reading, and eBook processing tools.'
        },
        csv: {
          name: 'CSV Sample Files',
          description: 'Download free CSV sample data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CSV conversion and data processing tools.'
        },
        xls: {
          name: 'XLS Sample Files',
          description: 'Download free XLS sample Excel spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Excel conversion and data processing tools.'
        },
        xlsx: {
          name: 'XLSX Sample Files',
          description: 'Download free XLSX sample Excel spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Excel conversion and data processing tools.'
        },
        xml: {
          name: 'XML Sample Files',
          description: 'Download free XML sample markup files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing XML parsing and data conversion tools.'
        },
        ods: {
          name: 'ODS Sample Files',
          description: 'Download free ODS sample OpenDocument spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing spreadsheet conversion and data processing tools.'
        },
        'ansible-yml': {
          name: 'Ansible YML Sample Files',
          description: 'Download free Ansible YML sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing YAML parsing and configuration management tools.'
        },
        'api-response-json': {
          name: 'API Response JSON Sample Files',
          description: 'Download free API response JSON sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSON parsing and API response handling tools.'
        },
        'arduino-ino': {
          name: 'Arduino INO Sample Files',
          description: 'Download free Arduino INO sample code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Arduino code compilation and syntax checking tools.'
        },
        asc: {
          name: 'ASC Sample Files',
          description: 'Download free ASC sample ASCII text files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing text file processing and ASCII encoding tools.'
        },
        bat: {
          name: 'BAT Sample Files',
          description: 'Download free BAT sample batch script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing batch script execution and Windows automation tools.'
        },
        bib: {
          name: 'BIB Sample Files',
          description: 'Download free BIB sample BibTeX bibliography files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing bibliography management and citation processing tools.'
        },
        c: {
          name: 'C Sample Files',
          description: 'Download free C sample source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C code compilation and syntax checking tools.'
        },
        'can-log': {
          name: 'CAN Log Sample Files',
          description: 'Download free CAN log sample CAN bus log files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAN bus analysis and log parsing tools.'
        },
        cmd: {
          name: 'CMD Sample Files',
          description: 'Download free CMD sample command script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing command script execution and Windows automation tools.'
        },
        conf: {
          name: 'CONF Sample Files',
          description: 'Download free CONF sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing configuration file parsing and system setup tools.'
        },
        'config-ini': {
          name: 'Config INI Sample Files',
          description: 'Download free Config INI sample INI configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing INI file parsing and configuration management tools.'
        },
        cpp: {
          name: 'C++ Sample Files',
          description: 'Download free C++ sample source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C++ code compilation and syntax checking tools.'
        },
        cs: {
          name: 'C# Sample Files',
          description: 'Download free C# sample source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C# code compilation and syntax checking tools.'
        },
        css: {
          name: 'CSS Sample Files',
          description: 'Download free CSS sample Cascading Style Sheets files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CSS parsing and styling tools.'
        },
        csr: {
          name: 'CSR Sample Files',
          description: 'Download free CSR sample Certificate Signing Request files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SSL certificate generation and CSR parsing tools.'
        },
        'customer-database-sql': {
          name: 'Customer Database SQL Sample Files',
          description: 'Download free Customer Database SQL sample SQL database files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SQL database imports and SQL parsing tools.'
        },
        dbf: {
          name: 'DBF Sample Files',
          description: 'Download free DBF sample database files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing database conversion and data processing tools.'
        },
        dem: {
          name: 'DEM Sample Files',
          description: 'Download free DEM sample Digital Elevation Model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing GIS mapping and terrain analysis tools.'
        },
        der: {
          name: 'DER Sample Files',
          description: 'Download free DER sample DER certificate files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SSL certificate processing and DER parsing tools.'
        },
        dmp: {
          name: 'DMP Sample Files',
          description: 'Download free DMP sample memory dump files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing crash dump analysis and memory dump parsing tools.'
        },
        'docker-compose-yml': {
          name: 'Docker Compose YML Sample Files',
          description: 'Download free Docker Compose YML sample Docker Compose configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Docker Compose parsing and container orchestration tools.'
        },
        dockerfile: {
          name: 'Dockerfile Sample Files',
          description: 'Download free Dockerfile sample Dockerfile configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Docker image building and Dockerfile parsing tools.'
        },
        editorconfig: {
          name: 'EditorConfig Sample Files',
          description: 'Download free EditorConfig sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing EditorConfig parsing and code formatting configuration tools.'
        },
        ini: {
          name: 'INI Sample Files',
          description: 'Download free INI sample configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing INI file parsing, configuration management, and settings file processing tools.'
        },
        intelhex: {
          name: 'IntelHex Sample Files',
          description: 'Download free IntelHex sample Intel hexadecimal files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing firmware programming, IntelHex parsing, and embedded systems development tools.'
        },
        ipynb: {
          name: 'IPYNB Sample Files',
          description: 'Download free IPYNB sample Jupyter notebook files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Jupyter notebook processing, IPYNB parsing, and data science development tools.'
        },
        java: {
          name: 'Java Sample Files',
          description: 'Download free Java sample Java source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java code compilation, Java syntax checking, and Java development tools.'
        },
        jks: {
          name: 'JKS Sample Files',
          description: 'Download free JKS sample Java KeyStore files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java KeyStore management, JKS parsing, and SSL certificate storage tools.'
        },
        json: {
          name: 'JSON Sample Files',
          description: 'Download free JSON sample JSON data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSON parsing, data processing, and API response handling tools.'
        },
        jsonl: {
          name: 'JSONL Sample Files',
          description: 'Download free JSONL sample JSON Lines files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JSONL parsing, data streaming, and big data processing tools.'
        },
        js: {
          name: 'JS Sample Files',
          description: 'Download free JS sample JavaScript files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JavaScript code execution, JS syntax checking, and web development tools.'
        },
        jsx: {
          name: 'JSX Sample Files',
          description: 'Download free JSX sample React JSX component files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing React component compilation, JSX syntax checking, and frontend development tools.'
        },
        jwt: {
          name: 'JWT Sample Files',
          description: 'Download free JWT sample JSON Web Token files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JWT token parsing, authentication, and API security tools.'
        },
        key: {
          name: 'KEY Sample Files',
          description: 'Download free KEY sample private key files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing SSL certificate management, key parsing, and cryptographic key storage tools.'
        },
        kml: {
          name: 'KML Sample Files',
          description: 'Download free KML sample Keyhole Markup Language files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing KML parsing, geographic data processing, and Google Earth integration tools.'
        },
        kt: {
          name: 'KT Sample Files',
          description: 'Download free KT sample Kotlin code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Kotlin compilation, KT syntax checking, and Android development tools.'
        },
        log: {
          name: 'LOG Sample Files',
          description: 'Download free LOG sample log files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing log parsing, log analysis, and system monitoring tools.'
        },
        lua: {
          name: 'LUA Sample Files',
          description: 'Download free LUA sample Lua script files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Lua script execution, LUA syntax checking, and embedded scripting tools.'
        },
        m3u: {
          name: 'M3U Sample Files',
          description: 'Download free M3U sample M3U playlist files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M3U playlist parsing, media player compatibility, and audio streaming tools.'
        },
        m3u8: {
          name: 'M3U8 Sample Files',
          description: 'Download free M3U8 sample M3U8 HLS playlist files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M3U8 playlist parsing, HLS streaming, and video player compatibility tools.'
        },
        makefile: {
          name: 'Makefile Sample Files',
          description: 'Download free Makefile sample build configuration files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Makefile parsing, build system automation, and software compilation tools.'
        },
        mbtiles: {
          name: 'MBTiles Sample Files',
          description: 'Download free MBTiles sample map database files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing MBTiles parsing, map tile extraction, and geographic data processing tools.'
        },
        md: {
          name: 'MD Sample Files',
          description: 'Download free MD sample Markdown documentation files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Markdown parsing, MD conversion, and documentation processing tools.'
        },
        mdx: {
          name: 'MDX Sample Files',
          description: 'Download free MDX sample MDX component documentation files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing MDX parsing, React component documentation, and documentation generation tools.'
        },
        apk: {
          name: 'APK Sample Files',
          description: 'Download free APK sample Android application package files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Android app installation and APK analysis tools.'
        },
        appimage: {
          name: 'AppImage Sample Files',
          description: 'Download free AppImage sample Linux application package files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Linux app installation and AppImage analysis tools.'
        },
        elf: {
          name: 'ELF Sample Files',
          description: 'Download free ELF sample Executable and Linkable Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing ELF file analysis, binary parsing, and executable file processing tools.'
        },
        exe: {
          name: 'EXE Sample Files',
          description: 'Download free EXE sample Windows executable files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Windows executable analysis, binary parsing, and application installation tools.'
        },
        ipa: {
          name: 'IPA Sample Files',
          description: 'Download free IPA sample iOS application package files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing iOS app installation, IPA analysis, and mobile application development tools.'
        },
        jar: {
          name: 'JAR Sample Files',
          description: 'Download free JAR sample Java archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Java application execution, JAR extraction, and Java development tools.'
        },
        '3ds': {
          name: '3DS Sample Files',
          description: 'Download free 3DS sample 3D model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D model conversion and viewing tools.'
        },
        '3mf': {
          name: '3MF Sample Files',
          description: 'Download free 3MF sample 3D printing files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D printing conversion and viewing tools.'
        },
        ai: {
          name: 'AI Sample Files',
          description: 'Download free AI sample Adobe Illustrator vector graphics files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing vector graphics conversion and viewing tools.'
        },
        ase: {
          name: 'ASE Sample Files',
          description: 'Download free ASE sample Adobe Swatch Exchange color palette files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing color palette conversion and viewing tools.'
        },
        'animation-fbx': {
          name: 'Animation FBX Sample Files',
          description: 'Download free animation FBX sample 3D animation files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D animation conversion and viewing tools.'
        },
        assetbundle: {
          name: 'AssetBundle Sample Files',
          description: 'Download free AssetBundle sample Unity game asset files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Unity asset loading and game development tools.'
        },
        blend: {
          name: 'BLEND Sample Files',
          description: 'Download free BLEND sample Blender 3D model files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3D model conversion and viewing tools.'
        },
        bvh: {
          name: 'BVH Sample Files',
          description: 'Download free BVH sample motion capture files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing motion capture processing and animation conversion tools.'
        },
        dwg: {
          name: 'DWG Sample Files',
          description: 'Download free DWG sample AutoCAD drawing files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD software, AutoCAD conversion, and drawing file processing tools.'
        },
        dxf: {
          name: 'DXF Sample Files',
          description: 'Download free DXF sample Drawing Exchange Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD software, DXF conversion, and drawing file exchange tools.'
        },
        ifc: {
          name: 'IFC Sample Files',
          description: 'Download free IFC sample Industry Foundation Classes files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing BIM software, IFC conversion, and building information modeling tools.'
        },
        iges: {
          name: 'IGES Sample Files',
          description: 'Download free IGES sample Initial Graphics Exchange Specification files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD software, IGES conversion, and 3D model exchange tools.'
        },
        igs: {
          name: 'IGS Sample Files',
          description: 'Download free IGS sample Initial Graphics Exchange Specification files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CAD software, IGS conversion, and 3D model exchange tools.'
        },
        las: {
          name: 'LAS Sample Files',
          description: 'Download free LAS sample LiDAR point cloud data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing LAS parsing, point cloud processing, and 3D mapping tools.'
        },
        ma: {
          name: 'MA Sample Files',
          description: 'Download free MA sample Maya ASCII scene files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Maya scene conversion, MA file parsing, and 3D animation tools.'
        },
        max: {
          name: 'MAX Sample Files',
          description: 'Download free MAX sample 3ds Max scene files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing 3ds Max scene conversion, MAX file parsing, and 3D modeling tools.'
        },
        mb: {
          name: 'MB Sample Files',
          description: 'Download free MB sample Maya Binary scene files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Maya scene conversion, MB file parsing, and 3D animation tools.'
        },
        indd: {
          name: 'INDD Sample Files',
          description: 'Download free INDD sample Adobe InDesign document files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing InDesign document conversion, INDD viewing, and desktop publishing tools.'
        },
        'animated-gif': {
          name: 'Animated GIF Sample Files',
          description: 'Download free animated GIF sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing GIF animation conversion and viewing tools.'
        },
        apng: {
          name: 'APNG Sample Files',
          description: 'Download free APNG sample animated PNG files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing animated PNG conversion and viewing tools.'
        },
        avif: {
          name: 'AVIF Sample Files',
          description: 'Download free AVIF sample image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing AVIF conversion and viewing tools.'
        },
        bmp: {
          name: 'BMP Sample Files',
          description: 'Download free BMP sample bitmap image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing bitmap image conversion and viewing tools.'
        },
        'barcode-svg': {
          name: 'Barcode SVG Sample Files',
          description: 'Download free barcode SVG sample vector graphics files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing barcode scanning and SVG conversion tools.'
        },
        avi: {
          name: 'AVI Sample Files',
          description: 'Download free AVI sample video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video conversion and playback tools.'
        },
        '3gp': {
          name: '3GP Sample Files',
          description: 'Download free 3GP sample mobile video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video conversion and playback tools.'
        },
        dav: {
          name: 'DAV Sample Files',
          description: 'Download free DAV sample video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing video conversion and playback tools.'
        },
        dds: {
          name: 'DDS Sample Files',
          description: 'Download free DDS sample DirectDraw Surface image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing texture image conversion and viewing tools.'
        },
        dng: {
          name: 'DNG Sample Files',
          description: 'Download free DNG sample Digital Negative raw image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing raw image processing and DNG conversion tools.'
        },
        eps: {
          name: 'EPS Sample Files',
          description: 'Download free EPS sample Encapsulated PostScript files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing vector graphics conversion, EPS viewing, and PostScript processing tools.'
        },
        exr: {
          name: 'EXR Sample Files',
          description: 'Download free EXR sample OpenEXR high dynamic range image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing HDR image processing, EXR conversion, and high dynamic range viewing tools.'
        },
        icns: {
          name: 'ICNS Sample Files',
          description: 'Download free ICNS sample macOS icon files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing macOS icon conversion, ICNS viewing, and icon design tools.'
        },
        ico: {
          name: 'ICO Sample Files',
          description: 'Download free ICO sample Windows icon files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Windows icon conversion, ICO viewing, and icon design tools.'
        },
        jpeg: {
          name: 'JPEG Sample Files',
          description: 'Download free JPEG sample JPEG image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JPEG image conversion, JPEG compression, and image processing tools.'
        },
        jpg: {
          name: 'JPG Sample Files',
          description: 'Download free JPG sample JPG image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing JPG image conversion, JPG compression, and image processing tools.'
        },
        m4v: {
          name: 'M4V Sample Files',
          description: 'Download free M4V sample M4V video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M4V video conversion, M4V playback, and video processing tools.'
        },
        mkv: {
          name: 'MKV Sample Files',
          description: 'Download free MKV sample Matroska video files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing MKV video conversion, MKV playback, and video processing tools.'
        },
        aac: {
          name: 'AAC Sample Files',
          description: 'Download free AAC sample Advanced Audio Coding files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.'
        },
        ac3: {
          name: 'AC3 Sample Files',
          description: 'Download free AC3 sample Dolby Digital audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.'
        },
        aif: {
          name: 'AIF Sample Files',
          description: 'Download free AIF sample Audio Interchange File Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.'
        },
        aiff: {
          name: 'AIFF Sample Files',
          description: 'Download free AIFF sample Audio Interchange File Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.'
        },
        amr: {
          name: 'AMR Sample Files',
          description: 'Download free AMR sample Adaptive Multi-Rate audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.'
        },
        caf: {
          name: 'CAF Sample Files',
          description: 'Download free CAF sample Core Audio Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio conversion and playback tools.'
        },
        cue: {
          name: 'CUE Sample Files',
          description: 'Download free CUE sample CUE sheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing audio CD burning and CUE sheet parsing tools.'
        },
        m4a: {
          name: 'M4A Sample Files',
          description: 'Download free M4A sample M4A audio files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing M4A audio conversion, M4A playback, and audio processing tools.'
        },
        midi: {
          name: 'MIDI Sample Files',
          description: 'Download free MIDI sample MIDI music files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing MIDI playback, MIDI conversion, and music sequencing tools.'
        },
        ace: {
          name: 'ACE Sample Files',
          description: 'Download free ACE sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction and compression tools.'
        },
        arj: {
          name: 'ARJ Sample Files',
          description: 'Download free ARJ sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction and compression tools.'
        },
        bz2: {
          name: 'BZ2 Sample Files',
          description: 'Download free BZ2 sample bzip2 compressed archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive decompression and compression tools.'
        },
        cab: {
          name: 'CAB Sample Files',
          description: 'Download free CAB sample Windows cabinet archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction and compression tools.'
        },
        cpio: {
          name: 'CPIO Sample Files',
          description: 'Download free CPIO sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction and compression tools.'
        },
        zip: {
          name: 'ZIP Sample Files',
          description: 'Download free ZIP sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive extraction and compression tools.'
        },
        dmg: {
          name: 'DMG Sample Files',
          description: 'Download free DMG sample macOS disk image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing disk image mounting and DMG extraction tools.'
        },
        img: {
          name: 'IMG Sample Files',
          description: 'Download free IMG sample disk image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing disk image mounting, IMG extraction, and disk image processing tools.'
        },
        iso: {
          name: 'ISO Sample Files',
          description: 'Download free ISO sample ISO disk image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing ISO disk image mounting, ISO extraction, and disk image processing tools.'
        },
        kmz: {
          name: 'KMZ Sample Files',
          description: 'Download free KMZ sample compressed Keyhole Markup Language files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing KMZ extraction, geographic data processing, and Google Earth integration tools.'
        },
        laz: {
          name: 'LAZ Sample Files',
          description: 'Download free LAZ sample compressed LiDAR point cloud data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing LAZ extraction, point cloud processing, and 3D mapping tools.'
        },
        lha: {
          name: 'LHA Sample Files',
          description: 'Download free LHA sample LHA archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing LHA extraction, archive decompression, and file archiving tools.'
        },
        lzh: {
          name: 'LZH Sample Files',
          description: 'Download free LZH sample LZH archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing LZH extraction, archive decompression, and file archiving tools.'
        },
        lzma: {
          name: 'LZMA Sample Files',
          description: 'Download free LZMA sample LZMA compressed files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing LZMA decompression, archive extraction, and file compression tools.'
        },
        '7z': {
          name: '7Z Sample Files',
          description: 'Download free 7Z sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive conversion and extraction tools.'
        }
      }
    }
  },
  pl: {
    samples_page: {
      meta: {
        title: 'Darmowe pliki przykładowe – Pobierz pliki testowe | MorphyHub',
        description: 'Pobierz darmowe przykładowe pliki obrazów, dokumentów i archiwów do testowania konwerterów, kompresorów i przeglądarek MorphyHub.',
        keywords: 'pliki przykładowe, pliki testowe, pobierz przykłady, darmowe pliki testowe, przykłady DOCX, przykłady plików, pliki testowe do konwersji'
      },
      schema: {
        name: 'Darmowe pliki przykładowe do pobrania i testowania',
        description: 'Pobierz darmowe przykładowe pliki różnych typów — obrazy, dokumenty, audio, wideo i archiwa. Użyj ich do testowania, demonstracji lub walidacji oprogramowania na dowolnej platformie.'
      },
      hero: {
        title: 'Pliki przykładowe',
        description: 'Pobierz darmowe pliki przykładowe do testowania. Dostępne różne rozmiary plików dla różnych formatów, aby przetestować Twoje narzędzia konwersji i przetwarzania.'
      },
      back_button: 'Powrót do strony głównej',
      search: {
        placeholder: 'Wyszukaj pliki przykładowe... (np. DOCX, JPG, PDF)',
        results: 'Znaleziono {{count}} plik(ów) przykładowych',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'PRZYKŁADY DOKUMENTÓW',
        data: 'PRZYKŁADY DANYCH',
        application: 'PRZYKŁADY APLIKACJI',
        design_3d: 'PRZYKŁADY 3D I PROJEKTOWE',
        image_video: 'PRZYKŁADY OBRAZÓW I WIDEO',
        audio: 'PRZYKŁADY AUDIO',
        archive: 'PRZYKŁADY ARCHIWÓW'
      },
      actions: {
        download: 'Pobierz'
      },
      no_results: {
        title: 'Nie znaleziono plików przykładowych',
        description: 'Spróbuj wyszukać coś takiego jak "DOCX" lub "JPG"',
        clear: 'Wyczyść wyszukiwanie'
      },
      features: {
        title: 'Dlaczego wybrać nasze pliki przykładowe?',
        items: [
          {
            title: 'Darmowy i łatwy dostęp',
            description: 'Pobierz pliki przykładowe natychmiast bez rejestracji lub płatności.'
          },
          {
            title: 'Różne rozmiary',
            description: 'Wybierz spośród różnych rozmiarów plików (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) do kompleksowego testowania.'
          },
          {
            title: 'Szeroka gama',
            description: 'Dostęp do przykładów w wielu kategoriach: dokumenty, obrazy, audio, wideo, archiwa i więcej.'
          }
        ]
      },
      format_description_template: 'Pobierz darmowe przykładowe pliki {{format}} do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania {{purpose}}.',
      formats: {
        docx: {
          name: 'Przykładowe pliki DOCX',
          description: 'Pobierz darmowe przykładowe pliki DOCX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji dokumentów.'
        },
        doc: {
          name: 'Przykładowe pliki DOC',
          description: 'Pobierz darmowe przykładowe pliki DOC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji dokumentów.'
        },
        pdf: {
          name: 'Przykładowe pliki PDF',
          description: 'Pobierz darmowe przykładowe pliki PDF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji dokumentów.'
        },
        odp: {
          name: 'Przykładowe pliki ODP',
          description: 'Pobierz darmowe przykładowe pliki ODP OpenDocument Presentation do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji i przeglądania prezentacji.'
        },
        rtf: {
          name: 'Przykładowe pliki RTF',
          description: 'Pobierz darmowe przykładowe pliki RTF (Rich Text Format) do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania narzędzi konwersji i przeglądania dokumentów.'
        },
        epub: {
          name: 'Przykładowe pliki EPUB',
          description: 'Pobierz darmowe przykładowe pliki EPUB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania czytników e-booków, konwersji EPUB i narzędzi publikacji cyfrowej.'
        },
        'invoice-pdf': {
          name: 'Przykładowe pliki PDF faktur',
          description: 'Pobierz darmowe przykładowe pliki PDF faktur do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania faktur PDF, parsowania faktur i narzędzi zarządzania dokumentami.'
        },
        mobi: {
          name: 'Przykładowe pliki MOBI',
          description: 'Pobierz darmowe przykładowe pliki MOBI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji e-booków MOBI, czytania MOBI i narzędzi przetwarzania e-booków.'
        },
        csv: {
          name: 'Przykładowe pliki CSV',
          description: 'Pobierz darmowe przykładowe pliki CSV do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji CSV i narzędzi przetwarzania danych.'
        },
        xls: {
          name: 'Przykładowe pliki XLS',
          description: 'Pobierz darmowe przykładowe pliki XLS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji Excel i narzędzi przetwarzania danych.'
        },
        xlsx: {
          name: 'Przykładowe pliki XLSX',
          description: 'Pobierz darmowe przykładowe pliki XLSX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji Excel i narzędzi przetwarzania danych.'
        },
        xml: {
          name: 'Przykładowe pliki XML',
          description: 'Pobierz darmowe przykładowe pliki XML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania XML i narzędzi konwersji danych.'
        },
        ods: {
          name: 'Przykładowe pliki ODS',
          description: 'Pobierz darmowe przykładowe pliki ODS OpenDocument do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji arkuszy kalkulacyjnych i narzędzi przetwarzania danych.'
        },
        'ansible-yml': {
          name: 'Przykładowe pliki Ansible YML',
          description: 'Pobierz darmowe przykładowe pliki Ansible YML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania YAML i narzędzi zarządzania konfiguracją.'
        },
        'api-response-json': {
          name: 'Przykładowe pliki API Response JSON',
          description: 'Pobierz darmowe przykładowe pliki API Response JSON do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania JSON i narzędzi obsługi odpowiedzi API.'
        },
        'arduino-ino': {
          name: 'Przykładowe pliki Arduino INO',
          description: 'Pobierz darmowe przykładowe pliki Arduino INO do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu Arduino i narzędzi sprawdzania składni.'
        },
        asc: {
          name: 'Przykładowe pliki ASC',
          description: 'Pobierz darmowe przykładowe pliki ASC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania plików tekstowych i narzędzi kodowania ASCII.'
        },
        bat: {
          name: 'Przykładowe pliki BAT',
          description: 'Pobierz darmowe przykładowe pliki BAT do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania skryptów wsadowych i narzędzi automatyzacji Windows.'
        },
        bib: {
          name: 'Przykładowe pliki BIB',
          description: 'Pobierz darmowe przykładowe pliki BIB BibTeX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania zarządzania bibliografią i narzędzi przetwarzania cytatów.'
        },
        c: {
          name: 'Przykładowe pliki C',
          description: 'Pobierz darmowe przykładowe pliki C do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C i narzędzi sprawdzania składni.'
        },
        'can-log': {
          name: 'Przykładowe pliki CAN Log',
          description: 'Pobierz darmowe przykładowe pliki CAN Log do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy CAN bus i narzędzi parsowania logów.'
        },
        cmd: {
          name: 'Przykładowe pliki CMD',
          description: 'Pobierz darmowe przykładowe pliki CMD do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania skryptów poleceń i narzędzi automatyzacji Windows.'
        },
        conf: {
          name: 'Przykładowe pliki CONF',
          description: 'Pobierz darmowe przykładowe pliki CONF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania plików konfiguracyjnych i narzędzi konfiguracji systemu.'
        },
        'config-ini': {
          name: 'Przykładowe pliki Config INI',
          description: 'Pobierz darmowe przykładowe pliki Config INI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania plików INI i narzędzi zarządzania konfiguracją.'
        },
        cpp: {
          name: 'Przykładowe pliki C++',
          description: 'Pobierz darmowe przykładowe pliki C++ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C++ i narzędzi sprawdzania składni.'
        },
        cs: {
          name: 'Przykładowe pliki C#',
          description: 'Pobierz darmowe przykładowe pliki C# do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C# i narzędzi sprawdzania składni.'
        },
        css: {
          name: 'Przykładowe pliki CSS',
          description: 'Pobierz darmowe przykładowe pliki CSS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania CSS i narzędzi stylowania.'
        },
        csr: {
          name: 'Przykładowe pliki CSR',
          description: 'Pobierz darmowe przykładowe pliki CSR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania generowania certyfikatów SSL i narzędzi parsowania CSR.'
        },
        'customer-database-sql': {
          name: 'Przykładowe pliki Customer Database SQL',
          description: 'Pobierz darmowe przykładowe pliki Customer Database SQL do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania importu baz danych SQL i narzędzi parsowania SQL.'
        },
        dbf: {
          name: 'Przykładowe pliki DBF',
          description: 'Pobierz darmowe przykładowe pliki DBF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji baz danych i narzędzi przetwarzania danych.'
        },
        dem: {
          name: 'Przykładowe pliki DEM',
          description: 'Pobierz darmowe przykładowe pliki DEM do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania mapowania GIS i narzędzi analizy terenu.'
        },
        der: {
          name: 'Przykładowe pliki DER',
          description: 'Pobierz darmowe przykładowe pliki DER do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania certyfikatów SSL i narzędzi parsowania DER.'
        },
        dmp: {
          name: 'Przykładowe pliki DMP',
          description: 'Pobierz darmowe przykładowe pliki DMP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy zrzutów pamięci i narzędzi parsowania zrzutów pamięci.'
        },
        'docker-compose-yml': {
          name: 'Przykładowe pliki Docker Compose YML',
          description: 'Pobierz darmowe przykładowe pliki Docker Compose YML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania Docker Compose i narzędzi orkiestracji kontenerów.'
        },
        dockerfile: {
          name: 'Przykładowe pliki Dockerfile',
          description: 'Pobierz darmowe przykładowe pliki Dockerfile do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania budowania obrazów Docker i narzędzi parsowania Dockerfile.'
        },
        editorconfig: {
          name: 'Przykładowe pliki EditorConfig',
          description: 'Pobierz darmowe przykładowe pliki EditorConfig do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania EditorConfig i narzędzi konfiguracji formatowania kodu.'
        },
        ini: {
          name: 'Przykładowe pliki INI',
          description: 'Pobierz darmowe przykładowe pliki INI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania plików INI, zarządzania konfiguracją i narzędzi przetwarzania plików ustawień.'
        },
        intelhex: {
          name: 'Przykładowe pliki IntelHex',
          description: 'Pobierz darmowe przykładowe pliki IntelHex do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania programowania firmware, parsowania IntelHex i narzędzi rozwoju systemów wbudowanych.'
        },
        ipynb: {
          name: 'Przykładowe pliki IPYNB',
          description: 'Pobierz darmowe przykładowe pliki IPYNB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania notatników Jupyter, parsowania IPYNB i narzędzi rozwoju data science.'
        },
        java: {
          name: 'Przykładowe pliki Java',
          description: 'Pobierz darmowe przykładowe pliki Java do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu Java, sprawdzania składni Java i narzędzi rozwoju Java.'
        },
        jks: {
          name: 'Przykładowe pliki JKS',
          description: 'Pobierz darmowe przykładowe pliki JKS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania zarządzania Java KeyStore, parsowania JKS i narzędzi przechowywania certyfikatów SSL.'
        },
        json: {
          name: 'Przykładowe pliki JSON',
          description: 'Pobierz darmowe przykładowe pliki JSON do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania JSON, przetwarzania danych i narzędzi obsługi odpowiedzi API.'
        },
        jsonl: {
          name: 'Przykładowe pliki JSONL',
          description: 'Pobierz darmowe przykładowe pliki JSONL do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania JSONL, przesyłania strumieniowego danych i narzędzi przetwarzania big data.'
        },
        js: {
          name: 'Przykładowe pliki JS',
          description: 'Pobierz darmowe przykładowe pliki JS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania kodu JavaScript, sprawdzania składni JS i narzędzi rozwoju webowego.'
        },
        jsx: {
          name: 'Przykładowe pliki JSX',
          description: 'Pobierz darmowe przykładowe pliki JSX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji komponentów React, sprawdzania składni JSX i narzędzi rozwoju frontendowego.'
        },
        jwt: {
          name: 'Przykładowe pliki JWT',
          description: 'Pobierz darmowe przykładowe pliki JWT do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania tokenów JWT, uwierzytelniania i narzędzi bezpieczeństwa API.'
        },
        key: {
          name: 'Przykładowe pliki KEY',
          description: 'Pobierz darmowe przykładowe pliki KEY do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania zarządzania certyfikatami SSL, parsowania kluczy i narzędzi przechowywania kluczy kryptograficznych.'
        },
        kml: {
          name: 'Przykładowe pliki KML',
          description: 'Pobierz darmowe przykładowe pliki KML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania KML, przetwarzania danych geograficznych i narzędzi integracji Google Earth.'
        },
        kt: {
          name: 'Przykładowe pliki KT',
          description: 'Pobierz darmowe przykładowe pliki KT do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji Kotlin, sprawdzania składni KT i narzędzi rozwoju Android.'
        },
        log: {
          name: 'Przykładowe pliki LOG',
          description: 'Pobierz darmowe przykładowe pliki LOG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania logów, analizy logów i narzędzi monitorowania systemu.'
        },
        lua: {
          name: 'Przykładowe pliki LUA',
          description: 'Pobierz darmowe przykładowe pliki LUA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania skryptów Lua, sprawdzania składni LUA i narzędzi skryptowania wbudowanego.'
        },
        m3u: {
          name: 'Przykładowe pliki M3U',
          description: 'Pobierz darmowe przykładowe pliki M3U do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania playlist M3U, kompatybilności odtwarzaczy multimedialnych i narzędzi przesyłania strumieniowego audio.'
        },
        m3u8: {
          name: 'Przykładowe pliki M3U8',
          description: 'Pobierz darmowe przykładowe pliki M3U8 do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania playlist M3U8, przesyłania strumieniowego HLS i narzędzi kompatybilności odtwarzaczy wideo.'
        },
        makefile: {
          name: 'Przykładowe pliki Makefile',
          description: 'Pobierz darmowe przykładowe pliki Makefile do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania Makefile, automatyzacji systemów budowania i narzędzi kompilacji oprogramowania.'
        },
        mbtiles: {
          name: 'Przykładowe pliki MBTiles',
          description: 'Pobierz darmowe przykładowe pliki MBTiles do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania MBTiles, ekstrakcji kafelków map i narzędzi przetwarzania danych geograficznych.'
        },
        md: {
          name: 'Przykładowe pliki MD',
          description: 'Pobierz darmowe przykładowe pliki MD do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania Markdown, konwersji MD i narzędzi przetwarzania dokumentacji.'
        },
        mdx: {
          name: 'Przykładowe pliki MDX',
          description: 'Pobierz darmowe przykładowe pliki MDX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania MDX, dokumentacji komponentów React i narzędzi generowania dokumentacji.'
        },
        apk: {
          name: 'Przykładowe pliki APK',
          description: 'Pobierz darmowe przykładowe pliki APK do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji aplikacji Android i narzędzi analizy APK.'
        },
        appimage: {
          name: 'Przykładowe pliki AppImage',
          description: 'Pobierz darmowe przykładowe pliki AppImage do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji aplikacji Linux i narzędzi analizy AppImage.'
        },
        elf: {
          name: 'Przykładowe pliki ELF',
          description: 'Pobierz darmowe przykładowe pliki ELF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy plików ELF, parsowania binariów i narzędzi przetwarzania plików wykonywalnych.'
        },
        exe: {
          name: 'Przykładowe pliki EXE',
          description: 'Pobierz darmowe przykładowe pliki EXE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania analizy plików wykonywalnych Windows, parsowania binariów i narzędzi instalacji aplikacji.'
        },
        ipa: {
          name: 'Przykładowe pliki IPA',
          description: 'Pobierz darmowe przykładowe pliki IPA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji aplikacji iOS, analizy IPA i narzędzi rozwoju aplikacji mobilnych.'
        },
        jar: {
          name: 'Przykładowe pliki JAR',
          description: 'Pobierz darmowe przykładowe pliki JAR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania wykonywania aplikacji Java, ekstrakcji JAR i narzędzi rozwoju Java.'
        },
        '3ds': {
          name: 'Przykładowe pliki 3DS',
          description: 'Pobierz darmowe przykładowe pliki 3DS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji modeli 3D i narzędzi przeglądania.'
        },
        '3mf': {
          name: 'Przykładowe pliki 3MF',
          description: 'Pobierz darmowe przykładowe pliki 3MF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji druku 3D i narzędzi przeglądania.'
        },
        ai: {
          name: 'Przykładowe pliki AI',
          description: 'Pobierz darmowe przykładowe pliki AI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji grafiki wektorowej i narzędzi przeglądania.'
        },
        ase: {
          name: 'Przykładowe pliki ASE',
          description: 'Pobierz darmowe przykładowe pliki ASE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji palet kolorów i narzędzi przeglądania.'
        },
        'animation-fbx': {
          name: 'Przykładowe pliki Animation FBX',
          description: 'Pobierz darmowe przykładowe pliki Animation FBX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji animacji 3D i narzędzi przeglądania.'
        },
        assetbundle: {
          name: 'Przykładowe pliki AssetBundle',
          description: 'Pobierz darmowe przykładowe pliki AssetBundle do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ładowania zasobów Unity i narzędzi rozwoju gier.'
        },
        blend: {
          name: 'Przykładowe pliki BLEND',
          description: 'Pobierz darmowe przykładowe pliki BLEND do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji modeli 3D i narzędzi przeglądania.'
        },
        bvh: {
          name: 'Przykładowe pliki BVH',
          description: 'Pobierz darmowe przykładowe pliki BVH do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania motion capture i narzędzi konwersji animacji.'
        },
        dwg: {
          name: 'Przykładowe pliki DWG',
          description: 'Pobierz darmowe przykładowe pliki DWG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania CAD, konwersji AutoCAD i narzędzi przetwarzania plików rysunkowych.'
        },
        dxf: {
          name: 'Przykładowe pliki DXF',
          description: 'Pobierz darmowe przykładowe pliki DXF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania CAD, konwersji DXF i narzędzi wymiany plików rysunkowych.'
        },
        ifc: {
          name: 'Przykładowe pliki IFC',
          description: 'Pobierz darmowe przykładowe pliki IFC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania BIM, konwersji IFC i narzędzi modelowania informacji o budynku.'
        },
        iges: {
          name: 'Przykładowe pliki IGES',
          description: 'Pobierz darmowe przykładowe pliki IGES do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania CAD, konwersji IGES i narzędzi wymiany modeli 3D.'
        },
        igs: {
          name: 'Przykładowe pliki IGS',
          description: 'Pobierz darmowe przykładowe pliki IGS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania oprogramowania CAD, konwersji IGS i narzędzi wymiany modeli 3D.'
        },
        las: {
          name: 'Przykładowe pliki LAS',
          description: 'Pobierz darmowe przykładowe pliki LAS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania LAS, przetwarzania chmur punktów i narzędzi mapowania 3D.'
        },
        ma: {
          name: 'Przykładowe pliki MA',
          description: 'Pobierz darmowe przykładowe pliki MA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji scen Maya, parsowania plików MA i narzędzi animacji 3D.'
        },
        max: {
          name: 'Przykładowe pliki MAX',
          description: 'Pobierz darmowe przykładowe pliki MAX do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji scen 3ds Max, parsowania plików MAX i narzędzi modelowania 3D.'
        },
        mb: {
          name: 'Przykładowe pliki MB',
          description: 'Pobierz darmowe przykładowe pliki MB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji scen Maya, parsowania plików MB i narzędzi animacji 3D.'
        },
        indd: {
          name: 'Przykładowe pliki INDD',
          description: 'Pobierz darmowe przykładowe pliki INDD do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji dokumentów InDesign, przeglądania INDD i narzędzi desktop publishing.'
        },
        'animated-gif': {
          name: 'Przykładowe pliki Animated GIF',
          description: 'Pobierz darmowe przykładowe pliki Animated GIF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji animacji GIF i narzędzi przeglądania.'
        },
        apng: {
          name: 'Przykładowe pliki APNG',
          description: 'Pobierz darmowe przykładowe pliki APNG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji animowanych PNG i narzędzi przeglądania.'
        },
        avif: {
          name: 'Przykładowe pliki AVIF',
          description: 'Pobierz darmowe przykładowe pliki AVIF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji AVIF i narzędzi przeglądania.'
        },
        bmp: {
          name: 'Przykładowe pliki BMP',
          description: 'Pobierz darmowe przykładowe pliki BMP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów bitmapowych i narzędzi przeglądania.'
        },
        'barcode-svg': {
          name: 'Przykładowe pliki Barcode SVG',
          description: 'Pobierz darmowe przykładowe pliki Barcode SVG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania skanowania kodów kreskowych i narzędzi konwersji SVG.'
        },
        avi: {
          name: 'Przykładowe pliki AVI',
          description: 'Pobierz darmowe przykładowe pliki AVI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji wideo i narzędzi odtwarzania.'
        },
        '3gp': {
          name: 'Przykładowe pliki 3GP',
          description: 'Pobierz darmowe przykładowe pliki 3GP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji wideo i narzędzi odtwarzania.'
        },
        dav: {
          name: 'Przykładowe pliki DAV',
          description: 'Pobierz darmowe przykładowe pliki DAV do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji wideo i narzędzi odtwarzania.'
        },
        dds: {
          name: 'Przykładowe pliki DDS',
          description: 'Pobierz darmowe przykładowe pliki DDS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów tekstur i narzędzi przeglądania.'
        },
        dng: {
          name: 'Przykładowe pliki DNG',
          description: 'Pobierz darmowe przykładowe pliki DNG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania obrazów RAW i narzędzi konwersji DNG.'
        },
        eps: {
          name: 'Przykładowe pliki EPS',
          description: 'Pobierz darmowe przykładowe pliki EPS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji grafiki wektorowej, przeglądania EPS i narzędzi przetwarzania PostScript.'
        },
        exr: {
          name: 'Przykładowe pliki EXR',
          description: 'Pobierz darmowe przykładowe pliki EXR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania obrazów HDR, konwersji EXR i narzędzi przeglądania wysokiego zakresu dynamicznego.'
        },
        icns: {
          name: 'Przykładowe pliki ICNS',
          description: 'Pobierz darmowe przykładowe pliki ICNS do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji ikon macOS, przeglądania ICNS i narzędzi projektowania ikon.'
        },
        ico: {
          name: 'Przykładowe pliki ICO',
          description: 'Pobierz darmowe przykładowe pliki ICO do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji ikon Windows, przeglądania ICO i narzędzi projektowania ikon.'
        },
        jpeg: {
          name: 'Przykładowe pliki JPEG',
          description: 'Pobierz darmowe przykładowe pliki JPEG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów JPEG, kompresji JPEG i narzędzi przetwarzania obrazów.'
        },
        jpg: {
          name: 'Przykładowe pliki JPG',
          description: 'Pobierz darmowe przykładowe pliki JPG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów JPG, kompresji JPG i narzędzi przetwarzania obrazów.'
        },
        m4v: {
          name: 'Przykładowe pliki M4V',
          description: 'Pobierz darmowe przykładowe pliki M4V do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji wideo M4V, odtwarzania M4V i narzędzi przetwarzania wideo.'
        },
        mkv: {
          name: 'Przykładowe pliki MKV',
          description: 'Pobierz darmowe przykładowe pliki MKV do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji wideo MKV, odtwarzania MKV i narzędzi przetwarzania wideo.'
        },
        aac: {
          name: 'Przykładowe pliki AAC',
          description: 'Pobierz darmowe przykładowe pliki AAC do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji audio i narzędzi odtwarzania.'
        },
        ac3: {
          name: 'Przykładowe pliki AC3',
          description: 'Pobierz darmowe przykładowe pliki AC3 do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji audio i narzędzi odtwarzania.'
        },
        aif: {
          name: 'Przykładowe pliki AIF',
          description: 'Pobierz darmowe przykładowe pliki AIF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji audio i narzędzi odtwarzania.'
        },
        aiff: {
          name: 'Przykładowe pliki AIFF',
          description: 'Pobierz darmowe przykładowe pliki AIFF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji audio i narzędzi odtwarzania.'
        },
        amr: {
          name: 'Przykładowe pliki AMR',
          description: 'Pobierz darmowe przykładowe pliki AMR do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji audio i narzędzi odtwarzania.'
        },
        caf: {
          name: 'Przykładowe pliki CAF',
          description: 'Pobierz darmowe przykładowe pliki CAF do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji audio i narzędzi odtwarzania.'
        },
        cue: {
          name: 'Przykładowe pliki CUE',
          description: 'Pobierz darmowe przykładowe pliki CUE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania nagrywania płyt CD audio i narzędzi parsowania arkuszy CUE.'
        },
        m4a: {
          name: 'Przykładowe pliki M4A',
          description: 'Pobierz darmowe przykładowe pliki M4A do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji audio M4A, odtwarzania M4A i narzędzi przetwarzania audio.'
        },
        midi: {
          name: 'Przykładowe pliki MIDI',
          description: 'Pobierz darmowe przykładowe pliki MIDI do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania odtwarzania MIDI, konwersji MIDI i narzędzi sekwencjonowania muzyki.'
        },
        ace: {
          name: 'Przykładowe pliki ACE',
          description: 'Pobierz darmowe przykładowe pliki ACE do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów i narzędzi kompresji.'
        },
        arj: {
          name: 'Przykładowe pliki ARJ',
          description: 'Pobierz darmowe przykładowe pliki ARJ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów i narzędzi kompresji.'
        },
        bz2: {
          name: 'Przykładowe pliki BZ2',
          description: 'Pobierz darmowe przykładowe pliki BZ2 do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania dekompresji archiwów i narzędzi kompresji.'
        },
        cab: {
          name: 'Przykładowe pliki CAB',
          description: 'Pobierz darmowe przykładowe pliki CAB do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów i narzędzi kompresji.'
        },
        cpio: {
          name: 'Przykładowe pliki CPIO',
          description: 'Pobierz darmowe przykładowe pliki CPIO do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów i narzędzi kompresji.'
        },
        zip: {
          name: 'Przykładowe pliki ZIP',
          description: 'Pobierz darmowe przykładowe pliki ZIP do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji archiwów i narzędzi kompresji.'
        },
        dmg: {
          name: 'Przykładowe pliki DMG',
          description: 'Pobierz darmowe przykładowe pliki DMG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania montowania obrazów dysku i narzędzi ekstrakcji DMG.'
        },
        img: {
          name: 'Przykładowe pliki IMG',
          description: 'Pobierz darmowe przykładowe pliki IMG do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania montowania obrazów dysku, ekstrakcji IMG i narzędzi przetwarzania obrazów dysku.'
        },
        iso: {
          name: 'Przykładowe pliki ISO',
          description: 'Pobierz darmowe przykładowe pliki ISO do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania montowania obrazów dysku ISO, ekstrakcji ISO i narzędzi przetwarzania obrazów dysku.'
        },
        kmz: {
          name: 'Przykładowe pliki KMZ',
          description: 'Pobierz darmowe przykładowe pliki KMZ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji KMZ, przetwarzania danych geograficznych i narzędzi integracji Google Earth.'
        },
        laz: {
          name: 'Przykładowe pliki LAZ',
          description: 'Pobierz darmowe przykładowe pliki LAZ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji LAZ, przetwarzania chmur punktów i narzędzi mapowania 3D.'
        },
        lha: {
          name: 'Przykładowe pliki LHA',
          description: 'Pobierz darmowe przykładowe pliki LHA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji LHA, dekompresji archiwów i narzędzi archiwizacji plików.'
        },
        lzh: {
          name: 'Przykładowe pliki LZH',
          description: 'Pobierz darmowe przykładowe pliki LZH do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania ekstrakcji LZH, dekompresji archiwów i narzędzi archiwizacji plików.'
        },
        lzma: {
          name: 'Przykładowe pliki LZMA',
          description: 'Pobierz darmowe przykładowe pliki LZMA do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania dekompresji LZMA, ekstrakcji archiwów i narzędzi kompresji plików.'
        },
        '7z': {
          name: 'Przykładowe pliki 7Z',
          description: 'Pobierz darmowe przykładowe pliki 7Z do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji archiwów i narzędzi ekstrakcji.'
        }
      }
    }
  },
  de: {
    samples_page: {
      meta: {
        title: 'Kostenlose Beispieldateien – Testdateien herunterladen | MorphyHub',
        description: 'Kostenlose Beispieldateien für Bilder, Dokumente und Archive herunterladen, um MorphyHub-Konverter, Komprimierer und Viewer zu testen.',
        keywords: 'Beispieldateien, Testdateien, Beispiele herunterladen, kostenlose Testdateien, DOCX-Beispiele, Dateibeispiele, Testdateien für Konvertierung'
      },
      schema: {
        name: 'Kostenlose Beispieldateien zum Herunterladen und Testen',
        description: 'Laden Sie kostenlose Beispieldateien verschiedener Typen herunter — Bilder, Dokumente, Audio, Video und Archive. Verwenden Sie sie zum Testen, für Demos oder zur Softwarevalidierung auf jeder Plattform.'
      },
      hero: {
        title: 'Beispieldateien',
        description: 'Laden Sie kostenlose Beispieldateien zum Testen herunter. Verschiedene Dateigrößen für verschiedene Formate verfügbar, um Ihre Konvertierungs- und Verarbeitungstools zu testen.'
      },
      back_button: 'Zurück zur Startseite',
      search: {
        placeholder: 'Beispieldateien suchen... (z. B. DOCX, JPG, PDF)',
        results: '{{count}} Beispieldatei(en) gefunden',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'DOKUMENTENBEISPIELE',
        data: 'DATENBEISPIELE',
        application: 'ANWENDUNGSBEISPIELE',
        design_3d: '3D & DESIGN-BEISPIELE',
        image_video: 'BILD & VIDEO-BEISPIELE',
        audio: 'AUDIO-BEISPIELE',
        archive: 'ARCHIVBEISPIELE'
      },
      actions: {
        download: 'Herunterladen'
      },
      no_results: {
        title: 'Keine Beispieldateien gefunden',
        description: 'Versuchen Sie, nach etwas wie "DOCX" oder "JPG" zu suchen',
        clear: 'Suche löschen'
      },
      features: {
        title: 'Warum unsere Beispieldateien wählen?',
        items: [
          {
            title: 'Kostenlos & einfach zugänglich',
            description: 'Laden Sie Beispieldateien sofort ohne Registrierung oder Zahlung herunter.'
          },
          {
            title: 'Mehrere Größen',
            description: 'Wählen Sie aus verschiedenen Dateigrößen (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) für umfassende Tests.'
          },
          {
            title: 'Große Vielfalt',
            description: 'Zugriff auf Beispiele in mehreren Kategorien: Dokumente, Bilder, Audio, Video, Archive und mehr.'
          }
        ]
      },
      format_description_template: 'Laden Sie kostenlose {{format}} Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von {{purpose}}.',
      formats: {
        docx: {
          name: 'DOCX Beispieldateien',
          description: 'Laden Sie kostenlose DOCX Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungstools.'
        },
        doc: {
          name: 'DOC Beispieldateien',
          description: 'Laden Sie kostenlose DOC Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungstools.'
        },
        pdf: {
          name: 'PDF Beispieldateien',
          description: 'Laden Sie kostenlose PDF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungstools.'
        },
        odp: {
          name: 'ODP Beispieldateien',
          description: 'Laden Sie kostenlose ODP OpenDocument-Präsentations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Präsentationskonvertierungs- und Anzeigetools.'
        },
        rtf: {
          name: 'RTF Beispieldateien',
          description: 'Laden Sie kostenlose RTF Rich Text Format Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Dokumentkonvertierungs- und Anzeigetools.'
        },
        epub: {
          name: 'EPUB Beispieldateien',
          description: 'Laden Sie kostenlose EPUB E-Book-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von E-Book-Readern, EPUB-Konvertierung und digitalen Publikationstools.'
        },
        'invoice-pdf': {
          name: 'Rechnungs-PDF Beispieldateien',
          description: 'Laden Sie kostenlose Rechnungs-PDF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von PDF-Rechnungsverarbeitung, Rechnungsparsing und Dokumentenverwaltungstools.'
        },
        mobi: {
          name: 'MOBI Beispieldateien',
          description: 'Laden Sie kostenlose MOBI E-Book-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von MOBI E-Book-Konvertierung, MOBI-Lesung und E-Book-Verarbeitungstools.'
        },
        csv: {
          name: 'CSV Beispieldateien',
          description: 'Laden Sie kostenlose CSV Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CSV-Konvertierung und Datenverarbeitungstools.'
        },
        xls: {
          name: 'XLS Beispieldateien',
          description: 'Laden Sie kostenlose XLS Excel-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Excel-Konvertierung und Datenverarbeitungstools.'
        },
        xlsx: {
          name: 'XLSX Beispieldateien',
          description: 'Laden Sie kostenlose XLSX Excel-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Excel-Konvertierung und Datenverarbeitungstools.'
        },
        xml: {
          name: 'XML Beispieldateien',
          description: 'Laden Sie kostenlose XML Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von XML-Parsing und Datenkonvertierungstools.'
        },
        ods: {
          name: 'ODS Beispieldateien',
          description: 'Laden Sie kostenlose ODS OpenDocument-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Tabellenkalkulations-Konvertierung und Datenverarbeitungstools.'
        },
        'ansible-yml': {
          name: 'Ansible YML Beispieldateien',
          description: 'Laden Sie kostenlose Ansible YML Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von YAML-Parsing und Konfigurationsverwaltungstools.'
        },
        'api-response-json': {
          name: 'API Response JSON Beispieldateien',
          description: 'Laden Sie kostenlose API Response JSON Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JSON-Parsing und API-Antwort-Verarbeitungstools.'
        },
        'arduino-ino': {
          name: 'Arduino INO Beispieldateien',
          description: 'Laden Sie kostenlose Arduino INO Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Arduino-Code-Kompilierung und Syntaxprüfungstools.'
        },
        asc: {
          name: 'ASC Beispieldateien',
          description: 'Laden Sie kostenlose ASC ASCII-Text-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Textdateiverarbeitung und ASCII-Kodierungstools.'
        },
        bat: {
          name: 'BAT Beispieldateien',
          description: 'Laden Sie kostenlose BAT Batch-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Batch-Skript-Ausführung und Windows-Automatisierungstools.'
        },
        bib: {
          name: 'BIB Beispieldateien',
          description: 'Laden Sie kostenlose BIB BibTeX-Bibliographie-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Bibliographieverwaltung und Zitierungsverarbeitungstools.'
        },
        c: {
          name: 'C Beispieldateien',
          description: 'Laden Sie kostenlose C Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C-Code-Kompilierung und Syntaxprüfungstools.'
        },
        'can-log': {
          name: 'CAN Log Beispieldateien',
          description: 'Laden Sie kostenlose CAN Log CAN-Bus-Protokoll-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAN-Bus-Analyse und Protokoll-Parsing-Tools.'
        },
        cmd: {
          name: 'CMD Beispieldateien',
          description: 'Laden Sie kostenlose CMD Befehls-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Befehls-Skript-Ausführung und Windows-Automatisierungstools.'
        },
        conf: {
          name: 'CONF Beispieldateien',
          description: 'Laden Sie kostenlose CONF Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Konfigurationsdatei-Parsing und Systemeinrichtungstools.'
        },
        'config-ini': {
          name: 'Config INI Beispieldateien',
          description: 'Laden Sie kostenlose Config INI INI-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von INI-Datei-Parsing und Konfigurationsverwaltungstools.'
        },
        cpp: {
          name: 'C++ Beispieldateien',
          description: 'Laden Sie kostenlose C++ Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C++-Code-Kompilierung und Syntaxprüfungstools.'
        },
        cs: {
          name: 'C# Beispieldateien',
          description: 'Laden Sie kostenlose C# Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C#-Code-Kompilierung und Syntaxprüfungstools.'
        },
        css: {
          name: 'CSS Beispieldateien',
          description: 'Laden Sie kostenlose CSS Cascading Style Sheets-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CSS-Parsing und Styling-Tools.'
        },
        csr: {
          name: 'CSR Beispieldateien',
          description: 'Laden Sie kostenlose CSR Certificate Signing Request-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von SSL-Zertifikatsgenerierung und CSR-Parsing-Tools.'
        },
        'customer-database-sql': {
          name: 'Customer Database SQL Beispieldateien',
          description: 'Laden Sie kostenlose Customer Database SQL SQL-Datenbank-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von SQL-Datenbank-Importen und SQL-Parsing-Tools.'
        },
        dbf: {
          name: 'DBF Beispieldateien',
          description: 'Laden Sie kostenlose DBF Datenbank-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Datenbankkonvertierung und Datenverarbeitungstools.'
        },
        dem: {
          name: 'DEM Beispieldateien',
          description: 'Laden Sie kostenlose DEM Digital Elevation Model-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von GIS-Mapping und Geländeanalysetools.'
        },
        der: {
          name: 'DER Beispieldateien',
          description: 'Laden Sie kostenlose DER DER-Zertifikats-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von SSL-Zertifikatsverarbeitung und DER-Parsing-Tools.'
        },
        dmp: {
          name: 'DMP Beispieldateien',
          description: 'Laden Sie kostenlose DMP Speicherdump-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Crash-Dump-Analyse und Speicherdump-Parsing-Tools.'
        },
        'docker-compose-yml': {
          name: 'Docker Compose YML Beispieldateien',
          description: 'Laden Sie kostenlose Docker Compose YML Docker Compose-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Docker Compose-Parsing und Container-Orchestrierungstools.'
        },
        dockerfile: {
          name: 'Dockerfile Beispieldateien',
          description: 'Laden Sie kostenlose Dockerfile Dockerfile-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Docker-Image-Building und Dockerfile-Parsing-Tools.'
        },
        editorconfig: {
          name: 'EditorConfig Beispieldateien',
          description: 'Laden Sie kostenlose EditorConfig Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von EditorConfig-Parsing und Code-Formatierungs-Konfigurationstools.'
        },
        ini: {
          name: 'INI Beispieldateien',
          description: 'Laden Sie kostenlose INI Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von INI-Datei-Parsing, Konfigurationsverwaltung und Einstellungsdatei-Verarbeitungstools.'
        },
        intelhex: {
          name: 'IntelHex Beispieldateien',
          description: 'Laden Sie kostenlose IntelHex Intel-Hexadezimal-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Firmware-Programmierung, IntelHex-Parsing und Embedded-System-Entwicklungstools.'
        },
        ipynb: {
          name: 'IPYNB Beispieldateien',
          description: 'Laden Sie kostenlose IPYNB Jupyter-Notebook-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Jupyter-Notebook-Verarbeitung, IPYNB-Parsing und Data-Science-Entwicklungstools.'
        },
        java: {
          name: 'Java Beispieldateien',
          description: 'Laden Sie kostenlose Java Java-Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Java-Code-Kompilierung, Java-Syntaxprüfung und Java-Entwicklungstools.'
        },
        jks: {
          name: 'JKS Beispieldateien',
          description: 'Laden Sie kostenlose JKS Java KeyStore-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Java KeyStore-Verwaltung, JKS-Parsing und SSL-Zertifikatsspeichertools.'
        },
        json: {
          name: 'JSON Beispieldateien',
          description: 'Laden Sie kostenlose JSON JSON-Daten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JSON-Parsing, Datenverarbeitung und API-Antwort-Verarbeitungstools.'
        },
        jsonl: {
          name: 'JSONL Beispieldateien',
          description: 'Laden Sie kostenlose JSONL JSON Lines-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JSONL-Parsing, Datenstreaming und Big-Data-Verarbeitungstools.'
        },
        js: {
          name: 'JS Beispieldateien',
          description: 'Laden Sie kostenlose JS JavaScript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JavaScript-Code-Ausführung, JS-Syntaxprüfung und Web-Entwicklungstools.'
        },
        jsx: {
          name: 'JSX Beispieldateien',
          description: 'Laden Sie kostenlose JSX React JSX-Komponenten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von React-Komponenten-Kompilierung, JSX-Syntaxprüfung und Frontend-Entwicklungstools.'
        },
        jwt: {
          name: 'JWT Beispieldateien',
          description: 'Laden Sie kostenlose JWT JSON Web Token-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JWT-Token-Parsing, Authentifizierung und API-Sicherheitstools.'
        },
        key: {
          name: 'KEY Beispieldateien',
          description: 'Laden Sie kostenlose KEY Private-Key-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von SSL-Zertifikatsverwaltung, Key-Parsing und kryptografischen Key-Speichertools.'
        },
        kml: {
          name: 'KML Beispieldateien',
          description: 'Laden Sie kostenlose KML Keyhole Markup Language-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von KML-Parsing, geografischer Datenverarbeitung und Google Earth-Integrationstools.'
        },
        kt: {
          name: 'KT Beispieldateien',
          description: 'Laden Sie kostenlose KT Kotlin-Code-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Kotlin-Kompilierung, KT-Syntaxprüfung und Android-Entwicklungstools.'
        },
        log: {
          name: 'LOG Beispieldateien',
          description: 'Laden Sie kostenlose LOG Protokoll-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Protokoll-Parsing, Protokollanalyse und Systemüberwachungstools.'
        },
        lua: {
          name: 'LUA Beispieldateien',
          description: 'Laden Sie kostenlose LUA Lua-Skript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Lua-Skript-Ausführung, LUA-Syntaxprüfung und Embedded-Scripting-Tools.'
        },
        m3u: {
          name: 'M3U Beispieldateien',
          description: 'Laden Sie kostenlose M3U M3U-Playlist-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M3U-Playlist-Parsing, Media-Player-Kompatibilität und Audio-Streaming-Tools.'
        },
        m3u8: {
          name: 'M3U8 Beispieldateien',
          description: 'Laden Sie kostenlose M3U8 M3U8 HLS-Playlist-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M3U8-Playlist-Parsing, HLS-Streaming und Video-Player-Kompatibilitätstools.'
        },
        makefile: {
          name: 'Makefile Beispieldateien',
          description: 'Laden Sie kostenlose Makefile Build-Konfigurations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Makefile-Parsing, Build-System-Automatisierung und Software-Kompilierungstools.'
        },
        mbtiles: {
          name: 'MBTiles Beispieldateien',
          description: 'Laden Sie kostenlose MBTiles Karten-Datenbank-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von MBTiles-Parsing, Karten-Kachel-Extraktion und geografischer Datenverarbeitungstools.'
        },
        md: {
          name: 'MD Beispieldateien',
          description: 'Laden Sie kostenlose MD Markdown-Dokumentations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Markdown-Parsing, MD-Konvertierung und Dokumentationsverarbeitungstools.'
        },
        mdx: {
          name: 'MDX Beispieldateien',
          description: 'Laden Sie kostenlose MDX MDX-Komponenten-Dokumentations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von MDX-Parsing, React-Komponenten-Dokumentation und Dokumentationsgenerierungstools.'
        },
        apk: {
          name: 'APK Beispieldateien',
          description: 'Laden Sie kostenlose APK Android-Anwendungspaket-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Android-App-Installation und APK-Analysetools.'
        },
        appimage: {
          name: 'AppImage Beispieldateien',
          description: 'Laden Sie kostenlose AppImage Linux-Anwendungspaket-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Linux-App-Installation und AppImage-Analysetools.'
        },
        elf: {
          name: 'ELF Beispieldateien',
          description: 'Laden Sie kostenlose ELF Executable and Linkable Format-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von ELF-Dateianalyse, Binär-Parsing und ausführbare Datei-Verarbeitungstools.'
        },
        exe: {
          name: 'EXE Beispieldateien',
          description: 'Laden Sie kostenlose EXE Windows-ausführbare Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Windows-ausführbarer Dateianalyse, Binär-Parsing und Anwendungsinstallationstools.'
        },
        ipa: {
          name: 'IPA Beispieldateien',
          description: 'Laden Sie kostenlose IPA iOS-Anwendungspaket-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von iOS-App-Installation, IPA-Analyse und Mobile-Anwendungsentwicklungstools.'
        },
        jar: {
          name: 'JAR Beispieldateien',
          description: 'Laden Sie kostenlose JAR Java-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Java-Anwendungsausführung, JAR-Extraktion und Java-Entwicklungstools.'
        },
        '3ds': {
          name: '3DS Beispieldateien',
          description: 'Laden Sie kostenlose 3DS 3D-Modell-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3D-Modell-Konvertierung und Anzeigetools.'
        },
        '3mf': {
          name: '3MF Beispieldateien',
          description: 'Laden Sie kostenlose 3MF 3D-Druck-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3D-Druck-Konvertierung und Anzeigetools.'
        },
        ai: {
          name: 'AI Beispieldateien',
          description: 'Laden Sie kostenlose AI Adobe Illustrator-Vektorgrafik-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Vektorgrafik-Konvertierung und Anzeigetools.'
        },
        ase: {
          name: 'ASE Beispieldateien',
          description: 'Laden Sie kostenlose ASE Adobe Swatch Exchange-Farbpaletten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Farbpaletten-Konvertierung und Anzeigetools.'
        },
        'animation-fbx': {
          name: 'Animation FBX Beispieldateien',
          description: 'Laden Sie kostenlose Animation FBX 3D-Animations-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3D-Animations-Konvertierung und Anzeigetools.'
        },
        assetbundle: {
          name: 'AssetBundle Beispieldateien',
          description: 'Laden Sie kostenlose AssetBundle Unity-Spiel-Asset-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Unity-Asset-Loading und Spielentwicklungstools.'
        },
        blend: {
          name: 'BLEND Beispieldateien',
          description: 'Laden Sie kostenlose BLEND Blender-3D-Modell-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3D-Modell-Konvertierung und Anzeigetools.'
        },
        bvh: {
          name: 'BVH Beispieldateien',
          description: 'Laden Sie kostenlose BVH Motion-Capture-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Motion-Capture-Verarbeitung und Animations-Konvertierungstools.'
        },
        dwg: {
          name: 'DWG Beispieldateien',
          description: 'Laden Sie kostenlose DWG AutoCAD-Zeichnungs-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Software, AutoCAD-Konvertierung und Zeichnungsdatei-Verarbeitungstools.'
        },
        dxf: {
          name: 'DXF Beispieldateien',
          description: 'Laden Sie kostenlose DXF Drawing Exchange Format-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Software, DXF-Konvertierung und Zeichnungsdatei-Austausch-Tools.'
        },
        ifc: {
          name: 'IFC Beispieldateien',
          description: 'Laden Sie kostenlose IFC Industry Foundation Classes-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von BIM-Software, IFC-Konvertierung und Building Information Modeling-Tools.'
        },
        iges: {
          name: 'IGES Beispieldateien',
          description: 'Laden Sie kostenlose IGES Initial Graphics Exchange Specification-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Software, IGES-Konvertierung und 3D-Modell-Austausch-Tools.'
        },
        igs: {
          name: 'IGS Beispieldateien',
          description: 'Laden Sie kostenlose IGS Initial Graphics Exchange Specification-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von CAD-Software, IGS-Konvertierung und 3D-Modell-Austausch-Tools.'
        },
        las: {
          name: 'LAS Beispieldateien',
          description: 'Laden Sie kostenlose LAS LiDAR-Punktwolken-Daten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von LAS-Parsing, Punktwolken-Verarbeitung und 3D-Mapping-Tools.'
        },
        ma: {
          name: 'MA Beispieldateien',
          description: 'Laden Sie kostenlose MA Maya ASCII-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Maya-Szenen-Konvertierung, MA-Datei-Parsing und 3D-Animationstools.'
        },
        max: {
          name: 'MAX Beispieldateien',
          description: 'Laden Sie kostenlose MAX 3ds Max-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von 3ds Max-Szenen-Konvertierung, MAX-Datei-Parsing und 3D-Modellierungstools.'
        },
        mb: {
          name: 'MB Beispieldateien',
          description: 'Laden Sie kostenlose MB Maya Binary-Szenen-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Maya-Szenen-Konvertierung, MB-Datei-Parsing und 3D-Animationstools.'
        },
        indd: {
          name: 'INDD Beispieldateien',
          description: 'Laden Sie kostenlose INDD Adobe InDesign-Dokument-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von InDesign-Dokument-Konvertierung, INDD-Anzeige und Desktop-Publishing-Tools.'
        },
        'animated-gif': {
          name: 'Animated GIF Beispieldateien',
          description: 'Laden Sie kostenlose Animated GIF Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von GIF-Animations-Konvertierung und Anzeigetools.'
        },
        apng: {
          name: 'APNG Beispieldateien',
          description: 'Laden Sie kostenlose APNG animierte PNG-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von animierter PNG-Konvertierung und Anzeigetools.'
        },
        avif: {
          name: 'AVIF Beispieldateien',
          description: 'Laden Sie kostenlose AVIF Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von AVIF-Konvertierung und Anzeigetools.'
        },
        bmp: {
          name: 'BMP Beispieldateien',
          description: 'Laden Sie kostenlose BMP Bitmap-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Bitmap-Bild-Konvertierung und Anzeigetools.'
        },
        'barcode-svg': {
          name: 'Barcode SVG Beispieldateien',
          description: 'Laden Sie kostenlose Barcode SVG Vektorgrafik-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Barcode-Scanning und SVG-Konvertierungstools.'
        },
        avi: {
          name: 'AVI Beispieldateien',
          description: 'Laden Sie kostenlose AVI Video-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Video-Konvertierung und Wiedergabetools.'
        },
        '3gp': {
          name: '3GP Beispieldateien',
          description: 'Laden Sie kostenlose 3GP Mobile-Video-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Video-Konvertierung und Wiedergabetools.'
        },
        dav: {
          name: 'DAV Beispieldateien',
          description: 'Laden Sie kostenlose DAV Video-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Video-Konvertierung und Wiedergabetools.'
        },
        dds: {
          name: 'DDS Beispieldateien',
          description: 'Laden Sie kostenlose DDS DirectDraw Surface-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Texturbild-Konvertierung und Anzeigetools.'
        },
        dng: {
          name: 'DNG Beispieldateien',
          description: 'Laden Sie kostenlose DNG Digital Negative RAW-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von RAW-Bildverarbeitung und DNG-Konvertierungstools.'
        },
        eps: {
          name: 'EPS Beispieldateien',
          description: 'Laden Sie kostenlose EPS Encapsulated PostScript-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Vektorgrafik-Konvertierung, EPS-Anzeige und PostScript-Verarbeitungstools.'
        },
        exr: {
          name: 'EXR Beispieldateien',
          description: 'Laden Sie kostenlose EXR OpenEXR High Dynamic Range-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von HDR-Bildverarbeitung, EXR-Konvertierung und High Dynamic Range-Anzeigetools.'
        },
        icns: {
          name: 'ICNS Beispieldateien',
          description: 'Laden Sie kostenlose ICNS macOS-Icon-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von macOS-Icon-Konvertierung, ICNS-Anzeige und Icon-Designtools.'
        },
        ico: {
          name: 'ICO Beispieldateien',
          description: 'Laden Sie kostenlose ICO Windows-Icon-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Windows-Icon-Konvertierung, ICO-Anzeige und Icon-Designtools.'
        },
        jpeg: {
          name: 'JPEG Beispieldateien',
          description: 'Laden Sie kostenlose JPEG JPEG-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JPEG-Bild-Konvertierung, JPEG-Kompression und Bildverarbeitungstools.'
        },
        jpg: {
          name: 'JPG Beispieldateien',
          description: 'Laden Sie kostenlose JPG JPG-Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von JPG-Bild-Konvertierung, JPG-Kompression und Bildverarbeitungstools.'
        },
        m4v: {
          name: 'M4V Beispieldateien',
          description: 'Laden Sie kostenlose M4V M4V-Video-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M4V-Video-Konvertierung, M4V-Wiedergabe und Video-Verarbeitungstools.'
        },
        mkv: {
          name: 'MKV Beispieldateien',
          description: 'Laden Sie kostenlose MKV Matroska-Video-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von MKV-Video-Konvertierung, MKV-Wiedergabe und Video-Verarbeitungstools.'
        },
        aac: {
          name: 'AAC Beispieldateien',
          description: 'Laden Sie kostenlose AAC Advanced Audio Coding-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audio-Konvertierung und Wiedergabetools.'
        },
        ac3: {
          name: 'AC3 Beispieldateien',
          description: 'Laden Sie kostenlose AC3 Dolby Digital-Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audio-Konvertierung und Wiedergabetools.'
        },
        aif: {
          name: 'AIF Beispieldateien',
          description: 'Laden Sie kostenlose AIF Audio Interchange File Format-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audio-Konvertierung und Wiedergabetools.'
        },
        aiff: {
          name: 'AIFF Beispieldateien',
          description: 'Laden Sie kostenlose AIFF Audio Interchange File Format-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audio-Konvertierung und Wiedergabetools.'
        },
        amr: {
          name: 'AMR Beispieldateien',
          description: 'Laden Sie kostenlose AMR Adaptive Multi-Rate-Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audio-Konvertierung und Wiedergabetools.'
        },
        caf: {
          name: 'CAF Beispieldateien',
          description: 'Laden Sie kostenlose CAF Core Audio Format-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audio-Konvertierung und Wiedergabetools.'
        },
        cue: {
          name: 'CUE Beispieldateien',
          description: 'Laden Sie kostenlose CUE CUE-Sheet-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Audio-CD-Brennen und CUE-Sheet-Parsing-Tools.'
        },
        m4a: {
          name: 'M4A Beispieldateien',
          description: 'Laden Sie kostenlose M4A M4A-Audio-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von M4A-Audio-Konvertierung, M4A-Wiedergabe und Audio-Verarbeitungstools.'
        },
        midi: {
          name: 'MIDI Beispieldateien',
          description: 'Laden Sie kostenlose MIDI MIDI-Musik-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von MIDI-Wiedergabe, MIDI-Konvertierung und Musik-Sequenzierungstools.'
        },
        ace: {
          name: 'ACE Beispieldateien',
          description: 'Laden Sie kostenlose ACE Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archivextraktion und Komprimierungstools.'
        },
        arj: {
          name: 'ARJ Beispieldateien',
          description: 'Laden Sie kostenlose ARJ Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archivextraktion und Komprimierungstools.'
        },
        bz2: {
          name: 'BZ2 Beispieldateien',
          description: 'Laden Sie kostenlose BZ2 bzip2-komprimierte Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archiv-Dekompression und Komprimierungstools.'
        },
        cab: {
          name: 'CAB Beispieldateien',
          description: 'Laden Sie kostenlose CAB Windows-Cabinet-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archivextraktion und Komprimierungstools.'
        },
        cpio: {
          name: 'CPIO Beispieldateien',
          description: 'Laden Sie kostenlose CPIO Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archivextraktion und Komprimierungstools.'
        },
        zip: {
          name: 'ZIP Beispieldateien',
          description: 'Laden Sie kostenlose ZIP Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archivextraktion und Komprimierungstools.'
        },
        dmg: {
          name: 'DMG Beispieldateien',
          description: 'Laden Sie kostenlose DMG macOS-Disk-Image-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Disk-Image-Mounting und DMG-Extraktionstools.'
        },
        img: {
          name: 'IMG Beispieldateien',
          description: 'Laden Sie kostenlose IMG Disk-Image-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Disk-Image-Mounting, IMG-Extraktion und Disk-Image-Verarbeitungstools.'
        },
        iso: {
          name: 'ISO Beispieldateien',
          description: 'Laden Sie kostenlose ISO ISO-Disk-Image-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von ISO-Disk-Image-Mounting, ISO-Extraktion und Disk-Image-Verarbeitungstools.'
        },
        kmz: {
          name: 'KMZ Beispieldateien',
          description: 'Laden Sie kostenlose KMZ komprimierte Keyhole Markup Language-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von KMZ-Extraktion, geografischer Datenverarbeitung und Google Earth-Integrationstools.'
        },
        laz: {
          name: 'LAZ Beispieldateien',
          description: 'Laden Sie kostenlose LAZ komprimierte LiDAR-Punktwolken-Daten-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von LAZ-Extraktion, Punktwolken-Verarbeitung und 3D-Mapping-Tools.'
        },
        lha: {
          name: 'LHA Beispieldateien',
          description: 'Laden Sie kostenlose LHA LHA-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von LHA-Extraktion, Archiv-Dekompression und Datei-Archivierungstools.'
        },
        lzh: {
          name: 'LZH Beispieldateien',
          description: 'Laden Sie kostenlose LZH LZH-Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von LZH-Extraktion, Archiv-Dekompression und Datei-Archivierungstools.'
        },
        lzma: {
          name: 'LZMA Beispieldateien',
          description: 'Laden Sie kostenlose LZMA LZMA-komprimierte Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von LZMA-Dekompression, Archivextraktion und Datei-Komprimierungstools.'
        },
        '7z': {
          name: '7Z Beispieldateien',
          description: 'Laden Sie kostenlose 7Z Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Archiv-Konvertierung und Extraktionstools.'
        }
      }
    }
  }
};

// Register translations
Object.entries(samplesPageResources).forEach(([locale, resources]) => {
  i18n.addResourceBundle(locale, 'translation', resources, true, true);
});

export default samplesPageResources;

