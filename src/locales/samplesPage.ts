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
        html: {
          name: 'HTML Sample Files',
          description: 'Download free HTML sample HyperText Markup Language files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing HTML parsing, web development, and HTML validation tools.'
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
        crx: {
          name: 'CRX Sample Files',
          description: 'Download free CRX sample Chrome extension package files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Chrome extension installation, CRX analysis, and browser extension development tools.'
        },
        cs: {
          name: 'C# Sample Files',
          description: 'Download free C# sample source code files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C# code compilation and syntax checking tools.'
        },
        gz: {
          name: 'GZ Sample Files',
          description: 'Download free GZ sample gzip compressed archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing gzip decompression, archive extraction, and file compression tools.'
        },
        h: {
          name: 'C Header Sample Files',
          description: 'Download free C header sample header files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C code compilation and header file processing tools.'
        },
        hdr: {
          name: 'HDR Sample Files',
          description: 'Download free HDR sample High Dynamic Range image files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing HDR image processing, HDR conversion, and high dynamic range viewing tools.'
        },
        heic: {
          name: 'HEIC Sample Files',
          description: 'Download free HEIC sample High Efficiency Image Container files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing HEIC image conversion, HEIC viewing, and modern image format processing tools.'
        },
        heif: {
          name: 'HEIF Sample Files',
          description: 'Download free HEIF sample High Efficiency Image Format files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing HEIF image conversion, HEIF viewing, and modern image format processing tools.'
        },
        hex: {
          name: 'HEX Sample Files',
          description: 'Download free HEX sample hexadecimal files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing hexadecimal file parsing, firmware programming, and embedded systems development tools.'
        },
        hpp: {
          name: 'C++ Header Sample Files',
          description: 'Download free C++ header sample header files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing C++ code compilation and header file processing tools.'
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
        html: {
          name: 'Przykładowe pliki HTML',
          description: 'Pobierz darmowe przykładowe pliki HTML do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania HTML, tworzenia stron internetowych i narzędzi walidacji HTML.'
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
        crx: {
          name: 'Przykładowe pliki CRX',
          description: 'Pobierz darmowe przykładowe pliki CRX rozszerzeń Chrome do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania instalacji rozszerzeń Chrome, analizy CRX i narzędzi tworzenia rozszerzeń przeglądarki.'
        },
        cs: {
          name: 'Przykładowe pliki C#',
          description: 'Pobierz darmowe przykładowe pliki C# do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C# i narzędzi sprawdzania składni.'
        },
        gz: {
          name: 'Przykładowe pliki GZ',
          description: 'Pobierz darmowe przykładowe pliki GZ skompresowane gzip do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania dekompresji gzip, ekstrakcji archiwów i narzędzi kompresji plików.'
        },
        h: {
          name: 'Przykładowe pliki nagłówkowe C',
          description: 'Pobierz darmowe przykładowe pliki nagłówkowe C do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C i narzędzi przetwarzania plików nagłówkowych.'
        },
        hdr: {
          name: 'Przykładowe pliki HDR',
          description: 'Pobierz darmowe przykładowe pliki HDR High Dynamic Range do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania przetwarzania obrazów HDR, konwersji HDR i narzędzi wyświetlania wysokiego zakresu dynamicznego.'
        },
        heic: {
          name: 'Przykładowe pliki HEIC',
          description: 'Pobierz darmowe przykładowe pliki HEIC High Efficiency Image Container do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów HEIC, przeglądania HEIC i narzędzi przetwarzania nowoczesnych formatów obrazów.'
        },
        heif: {
          name: 'Przykładowe pliki HEIF',
          description: 'Pobierz darmowe przykładowe pliki HEIF High Efficiency Image Format do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania konwersji obrazów HEIF, przeglądania HEIF i narzędzi przetwarzania nowoczesnych formatów obrazów.'
        },
        hex: {
          name: 'Przykładowe pliki HEX',
          description: 'Pobierz darmowe przykładowe pliki HEX szesnastkowe do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania parsowania plików szesnastkowych, programowania firmware i narzędzi rozwoju systemów wbudowanych.'
        },
        hpp: {
          name: 'Przykładowe pliki nagłówkowe C++',
          description: 'Pobierz darmowe przykładowe pliki nagłówkowe C++ do testowania. Dostępne różne rozmiary plików: 100 KB, 1 MB, 5 MB, 50 MB i 100 MB. Idealne do testowania kompilacji kodu C++ i narzędzi przetwarzania plików nagłówkowych.'
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
        html: {
          name: 'HTML Beispieldateien',
          description: 'Laden Sie kostenlose HTML Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von HTML-Parsing, Webentwicklung und HTML-Validierungstools.'
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
        crx: {
          name: 'CRX Beispieldateien',
          description: 'Laden Sie kostenlose CRX Chrome-Erweiterungs-Paket-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von Chrome-Erweiterungsinstallation, CRX-Analyse und Browser-Erweiterungsentwicklungstools.'
        },
        cs: {
          name: 'C# Beispieldateien',
          description: 'Laden Sie kostenlose C# Quellcode-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C#-Code-Kompilierung und Syntaxprüfungstools.'
        },
        gz: {
          name: 'GZ Beispieldateien',
          description: 'Laden Sie kostenlose GZ gzip-komprimierte Archiv-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von gzip-Dekompression, Archivextraktion und Dateikomprimierungstools.'
        },
        h: {
          name: 'C Header Beispieldateien',
          description: 'Laden Sie kostenlose C Header-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C-Code-Kompilierung und Header-Dateiverarbeitungstools.'
        },
        hdr: {
          name: 'HDR Beispieldateien',
          description: 'Laden Sie kostenlose HDR High Dynamic Range Bild-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von HDR-Bildverarbeitung, HDR-Konvertierung und High Dynamic Range-Anzeigetools.'
        },
        heic: {
          name: 'HEIC Beispieldateien',
          description: 'Laden Sie kostenlose HEIC High Efficiency Image Container Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von HEIC-Bildkonvertierung, HEIC-Anzeige und modernen Bildformatverarbeitungstools.'
        },
        heif: {
          name: 'HEIF Beispieldateien',
          description: 'Laden Sie kostenlose HEIF High Efficiency Image Format Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von HEIF-Bildkonvertierung, HEIF-Anzeige und modernen Bildformatverarbeitungstools.'
        },
        hex: {
          name: 'HEX Beispieldateien',
          description: 'Laden Sie kostenlose HEX hexadezimale Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von hexadezimaler Dateiparsing, Firmware-Programmierung und eingebetteten Systementwicklungstools.'
        },
        hpp: {
          name: 'C++ Header Beispieldateien',
          description: 'Laden Sie kostenlose C++ Header-Beispieldateien zum Testen herunter. Verschiedene Dateigrößen verfügbar: 100 KB, 1 MB, 5 MB, 50 MB und 100 MB. Perfekt zum Testen von C++-Code-Kompilierung und Header-Dateiverarbeitungstools.'
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
  },
  es: {
    samples_page: {
      meta: {
        title: 'Archivos de muestra gratuitos – Descargar archivos de prueba | MorphyHub',
        description: 'Obtén archivos de muestra gratuitos de imágenes, documentos y archivos para probar los convertidores, compresores y visores de MorphyHub.',
        keywords: 'archivos de muestra, archivos de prueba, descargar muestras, archivos de prueba gratuitos, muestras DOCX, muestras de archivos, archivos de prueba para conversión'
      },
      schema: {
        name: 'Archivos de muestra gratuitos para descargar y probar',
        description: 'Descarga archivos de muestra gratuitos de varios tipos — imágenes, documentos, audio, video y archivos. Úsalos para pruebas, demostraciones o validación de software en cualquier plataforma.'
      },
      hero: {
        title: 'Archivos de muestra',
        description: 'Descarga archivos de muestra gratuitos para pruebas. Múltiples tamaños de archivo disponibles para varios formatos para probar tus herramientas de conversión y procesamiento.'
      },
      back_button: 'Volver al inicio',
      search: {
        placeholder: 'Buscar archivos de muestra... (ej., DOCX, JPG, PDF)',
        results: 'Se encontró {{count}} archivo(s) de muestra',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'MUESTRAS DE DOCUMENTOS',
        data: 'MUESTRAS DE DATOS',
        application: 'MUESTRAS DE APLICACIONES',
        design_3d: 'MUESTRAS 3D Y DE DISEÑO',
        image_video: 'MUESTRAS DE IMÁGENES Y VIDEO',
        audio: 'MUESTRAS DE AUDIO',
        archive: 'MUESTRAS DE ARCHIVOS'
      },
      actions: {
        download: 'Descargar'
      },
      no_results: {
        title: 'No se encontraron archivos de muestra',
        description: 'Intenta buscar algo como "DOCX" o "JPG"',
        clear: 'Limpiar búsqueda'
      },
      features: {
        title: '¿Por qué elegir nuestros archivos de muestra?',
        items: [
          {
            title: 'Acceso gratuito y fácil',
            description: 'Descarga archivos de muestra al instante sin registro o pago.'
          },
          {
            title: 'Múltiples tamaños',
            description: 'Elige entre varios tamaños de archivo (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) para pruebas completas.'
          },
          {
            title: 'Gran variedad',
            description: 'Accede a muestras en múltiples categorías: documentos, imágenes, audio, video, archivos y más.'
          }
        ]
      },
      format_description_template: 'Descarga archivos de muestra {{format}} gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar {{purpose}}.',
      formats: {
        docx: {
          name: 'Archivos de muestra DOCX',
          description: 'Descarga archivos de muestra DOCX gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de documentos.'
        },
        doc: {
          name: 'Archivos de muestra DOC',
          description: 'Descarga archivos de muestra DOC gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de documentos.'
        },
        pdf: {
          name: 'Archivos de muestra PDF',
          description: 'Descarga archivos de muestra PDF gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de documentos.'
        },
        odp: {
          name: 'Archivos de muestra ODP',
          description: 'Descarga archivos de muestra ODP OpenDocument Presentation gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión y visualización de presentaciones.'
        },
        rtf: {
          name: 'Archivos de muestra RTF',
          description: 'Descarga archivos de muestra RTF (Rich Text Format) gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión y visualización de documentos.'
        },
        epub: {
          name: 'Archivos de muestra EPUB',
          description: 'Descarga archivos de muestra EPUB gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar lectores de eBooks, conversión EPUB y herramientas de publicación digital.'
        },
        'invoice-pdf': {
          name: 'Archivos de muestra PDF de facturas',
          description: 'Descarga archivos de muestra PDF de facturas gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar procesamiento de facturas PDF, análisis de facturas y herramientas de gestión de documentos.'
        },
        mobi: {
          name: 'Archivos de muestra MOBI',
          description: 'Descarga archivos de muestra MOBI gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar conversión de eBooks MOBI, lectura MOBI y herramientas de procesamiento de eBooks.'
        },
        csv: {
          name: 'Archivos de muestra CSV',
          description: 'Descarga archivos de muestra CSV gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión CSV y procesamiento de datos.'
        },
        xls: {
          name: 'Archivos de muestra XLS',
          description: 'Descarga archivos de muestra XLS gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión Excel y procesamiento de datos.'
        },
        xlsx: {
          name: 'Archivos de muestra XLSX',
          description: 'Descarga archivos de muestra XLSX gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión Excel y procesamiento de datos.'
        },
        xml: {
          name: 'Archivos de muestra XML',
          description: 'Descarga archivos de muestra XML gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis XML y conversión de datos.'
        },
        html: {
          name: 'Archivos de muestra HTML',
          description: 'Descarga archivos de muestra HTML gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar análisis HTML, desarrollo web y herramientas de validación HTML.'
        },
        ods: {
          name: 'Archivos de muestra ODS',
          description: 'Descarga archivos de muestra ODS OpenDocument Spreadsheet gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de hojas de cálculo y procesamiento de datos.'
        },
        'ansible-yml': {
          name: 'Archivos de muestra Ansible YML',
          description: 'Descarga archivos de muestra Ansible YML gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis YAML y gestión de configuración.'
        },
        'api-response-json': {
          name: 'Archivos de muestra JSON de respuesta API',
          description: 'Descarga archivos de muestra JSON de respuesta API gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis JSON y manejo de respuestas API.'
        },
        'arduino-ino': {
          name: 'Archivos de muestra Arduino INO',
          description: 'Descarga archivos de muestra Arduino INO gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de compilación de código Arduino y verificación de sintaxis.'
        },
        asc: {
          name: 'Archivos de muestra ASC',
          description: 'Descarga archivos de muestra ASC (ASCII) gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de procesamiento de archivos de texto y codificación ASCII.'
        },
        bat: {
          name: 'Archivos de muestra BAT',
          description: 'Descarga archivos de muestra BAT gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de ejecución de scripts por lotes y automatización de Windows.'
        },
        bib: {
          name: 'Archivos de muestra BIB',
          description: 'Descarga archivos de muestra BIB (BibTeX) gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de gestión de bibliografías y procesamiento de citas.'
        },
        c: {
          name: 'Archivos de muestra C',
          description: 'Descarga archivos de muestra C gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de compilación de código C y verificación de sintaxis.'
        },
        'can-log': {
          name: 'Archivos de muestra CAN Log',
          description: 'Descarga archivos de muestra CAN log gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis de bus CAN y análisis de registros.'
        },
        cmd: {
          name: 'Archivos de muestra CMD',
          description: 'Descarga archivos de muestra CMD gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de ejecución de scripts de comandos y automatización de Windows.'
        },
        conf: {
          name: 'Archivos de muestra CONF',
          description: 'Descarga archivos de muestra CONF gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis de archivos de configuración y configuración del sistema.'
        },
        'config-ini': {
          name: 'Archivos de muestra Config INI',
          description: 'Descarga archivos de muestra Config INI gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis de archivos INI y gestión de configuración.'
        },
        cpp: {
          name: 'Archivos de muestra C++',
          description: 'Descarga archivos de muestra C++ gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de compilación de código C++ y verificación de sintaxis.'
        },
        crx: {
          name: 'Archivos de muestra CRX',
          description: 'Descarga archivos de muestra CRX gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar instalación de extensiones de Chrome, análisis CRX y herramientas de desarrollo de extensiones de navegador.'
        },
        cs: {
          name: 'Archivos de muestra C#',
          description: 'Descarga archivos de muestra C# gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de compilación de código C# y verificación de sintaxis.'
        },
        gz: {
          name: 'Archivos de muestra GZ',
          description: 'Descarga archivos de muestra GZ (gzip) gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar descompresión gzip, extracción de archivos y herramientas de compresión de archivos.'
        },
        h: {
          name: 'Archivos de muestra C Header',
          description: 'Descarga archivos de muestra C Header gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de compilación de código C y procesamiento de archivos de encabezado.'
        },
        hdr: {
          name: 'Archivos de muestra HDR',
          description: 'Descarga archivos de muestra HDR (High Dynamic Range) gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar procesamiento de imágenes HDR, conversión HDR y herramientas de visualización de alto rango dinámico.'
        },
        heic: {
          name: 'Archivos de muestra HEIC',
          description: 'Descarga archivos de muestra HEIC gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar conversión de imágenes HEIC, visualización HEIC y herramientas de procesamiento de formatos de imagen modernos.'
        },
        heif: {
          name: 'Archivos de muestra HEIF',
          description: 'Descarga archivos de muestra HEIF gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar conversión de imágenes HEIF, visualización HEIF y herramientas de procesamiento de formatos de imagen modernos.'
        },
        hex: {
          name: 'Archivos de muestra HEX',
          description: 'Descarga archivos de muestra HEX (hexadecimal) gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar análisis de archivos hexadecimales, programación de firmware y herramientas de desarrollo de sistemas embebidos.'
        },
        hpp: {
          name: 'Archivos de muestra C++ Header',
          description: 'Descarga archivos de muestra C++ Header gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de compilación de código C++ y procesamiento de archivos de encabezado.'
        },
        css: {
          name: 'Archivos de muestra CSS',
          description: 'Descarga archivos de muestra CSS gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis CSS, desarrollo web y validación CSS.'
        },
        js: {
          name: 'Archivos de muestra JavaScript',
          description: 'Descarga archivos de muestra JavaScript gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis JavaScript, desarrollo web y validación de código.'
        },
        json: {
          name: 'Archivos de muestra JSON',
          description: 'Descarga archivos de muestra JSON gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis JSON, procesamiento de datos y validación de esquemas.'
        },
        md: {
          name: 'Archivos de muestra Markdown',
          description: 'Descarga archivos de muestra Markdown gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de procesamiento Markdown, conversión de documentos y generación de documentación.'
        },
        py: {
          name: 'Archivos de muestra Python',
          description: 'Descarga archivos de muestra Python gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de compilación de código Python y verificación de sintaxis.'
        },
        sh: {
          name: 'Archivos de muestra Shell Script',
          description: 'Descarga archivos de muestra Shell Script gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de ejecución de scripts shell y automatización de sistemas Unix/Linux.'
        },
        sql: {
          name: 'Archivos de muestra SQL',
          description: 'Descarga archivos de muestra SQL gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis SQL, gestión de bases de datos y validación de consultas.'
        },
        ts: {
          name: 'Archivos de muestra TypeScript',
          description: 'Descarga archivos de muestra TypeScript gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de compilación de código TypeScript y verificación de tipos.'
        },
        yml: {
          name: 'Archivos de muestra YML',
          description: 'Descarga archivos de muestra YML gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis YAML y gestión de configuración.'
        },
        jpg: {
          name: 'Archivos de muestra JPG',
          description: 'Descarga archivos de muestra JPG gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de imágenes, procesamiento de imágenes y optimización web.'
        },
        png: {
          name: 'Archivos de muestra PNG',
          description: 'Descarga archivos de muestra PNG gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de imágenes, procesamiento de imágenes y gráficos web.'
        },
        gif: {
          name: 'Archivos de muestra GIF',
          description: 'Descarga archivos de muestra GIF gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de imágenes, procesamiento de imágenes y animaciones web.'
        },
        webp: {
          name: 'Archivos de muestra WebP',
          description: 'Descarga archivos de muestra WebP gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de imágenes, procesamiento de imágenes y optimización web moderna.'
        },
        svg: {
          name: 'Archivos de muestra SVG',
          description: 'Descarga archivos de muestra SVG gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de gráficos vectoriales, procesamiento SVG y diseño web.'
        },
        bmp: {
          name: 'Archivos de muestra BMP',
          description: 'Descarga archivos de muestra BMP gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de imágenes, procesamiento de imágenes y compatibilidad de formatos.'
        },
        ico: {
          name: 'Archivos de muestra ICO',
          description: 'Descarga archivos de muestra ICO gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de iconos, procesamiento de iconos y desarrollo de aplicaciones.'
        },
        tiff: {
          name: 'Archivos de muestra TIFF',
          description: 'Descarga archivos de muestra TIFF gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de imágenes, procesamiento de imágenes y edición profesional.'
        },
        tif: {
          name: 'Archivos de muestra TIF',
          description: 'Descarga archivos de muestra TIF gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de imágenes, procesamiento de imágenes y edición profesional.'
        },
        avif: {
          name: 'Archivos de muestra AVIF',
          description: 'Descarga archivos de muestra AVIF gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de imágenes, procesamiento de imágenes y optimización web de próxima generación.'
        },
        mp4: {
          name: 'Archivos de muestra MP4',
          description: 'Descarga archivos de muestra MP4 gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de video, procesamiento de video y reproducción multimedia.'
        },
        avi: {
          name: 'Archivos de muestra AVI',
          description: 'Descarga archivos de muestra AVI gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de video, procesamiento de video y compatibilidad de formatos.'
        },
        mov: {
          name: 'Archivos de muestra MOV',
          description: 'Descarga archivos de muestra MOV gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de video, procesamiento de video y edición de video.'
        },
        wmv: {
          name: 'Archivos de muestra WMV',
          description: 'Descarga archivos de muestra WMV gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de video, procesamiento de video y compatibilidad de formatos Windows.'
        },
        flv: {
          name: 'Archivos de muestra FLV',
          description: 'Descarga archivos de muestra FLV gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de video, procesamiento de video y streaming web.'
        },
        webm: {
          name: 'Archivos de muestra WebM',
          description: 'Descarga archivos de muestra WebM gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de video, procesamiento de video y video web moderno.'
        },
        mkv: {
          name: 'Archivos de muestra MKV',
          description: 'Descarga archivos de muestra MKV gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de video, procesamiento de video y contenedores multimedia.'
        },
        mp3: {
          name: 'Archivos de muestra MP3',
          description: 'Descarga archivos de muestra MP3 gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio, procesamiento de audio y reproducción multimedia.'
        },
        wav: {
          name: 'Archivos de muestra WAV',
          description: 'Descarga archivos de muestra WAV gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio, procesamiento de audio y audio sin pérdidas.'
        },
        flac: {
          name: 'Archivos de muestra FLAC',
          description: 'Descarga archivos de muestra FLAC gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio, procesamiento de audio y audio de alta calidad.'
        },
        ogg: {
          name: 'Archivos de muestra OGG',
          description: 'Descarga archivos de muestra OGG gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio, procesamiento de audio y audio de código abierto.'
        },
        wma: {
          name: 'Archivos de muestra WMA',
          description: 'Descarga archivos de muestra WMA gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio, procesamiento de audio y compatibilidad de formatos Windows.'
        },
        aac: {
          name: 'Archivos de muestra AAC',
          description: 'Descarga archivos de muestra AAC gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio, procesamiento de audio y audio de alta eficiencia.'
        },
        m4a: {
          name: 'Archivos de muestra M4A',
          description: 'Descarga archivos de muestra M4A gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio, procesamiento de audio y audio de contenedor MPEG-4.'
        },
        midi: {
          name: 'Archivos de muestra MIDI',
          description: 'Descarga archivos de muestra MIDI gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de procesamiento MIDI, síntesis de música y producción musical.'
        },
        cue: {
          name: 'Archivos de muestra CUE',
          description: 'Descarga archivos de muestra CUE gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar análisis de hojas CUE, grabación de CD de audio y herramientas de autoría de CD.'
        },
        zip: {
          name: 'Archivos de muestra ZIP',
          description: 'Descarga archivos de muestra ZIP gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de extracción de archivos, compresión de archivos y gestión de archivos.'
        },
        rar: {
          name: 'Archivos de muestra RAR',
          description: 'Descarga archivos de muestra RAR gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de extracción de archivos, compresión de archivos y gestión de archivos.'
        },
        '7z': {
          name: 'Archivos de muestra 7Z',
          description: 'Descarga archivos de muestra 7Z gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de archivos y extracción.'
        },
        tar: {
          name: 'Archivos de muestra TAR',
          description: 'Descarga archivos de muestra TAR gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de extracción de archivos, compresión de archivos y gestión de archivos Unix/Linux.'
        },
        ace: {
          name: 'Archivos de muestra ACE',
          description: 'Descarga archivos de muestra ACE gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de extracción de archivos, compresión de archivos y gestión de archivos.'
        },
        arj: {
          name: 'Archivos de muestra ARJ',
          description: 'Descarga archivos de muestra ARJ gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de extracción de archivos, compresión de archivos y gestión de archivos legacy.'
        },
        bz2: {
          name: 'Archivos de muestra BZ2',
          description: 'Descarga archivos de muestra BZ2 (bzip2) gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar descompresión bzip2, extracción de archivos y herramientas de compresión de archivos.'
        },
        cab: {
          name: 'Archivos de muestra CAB',
          description: 'Descarga archivos de muestra CAB gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de extracción de archivos CAB, instalación de software Windows y gestión de archivos.'
        },
        cpio: {
          name: 'Archivos de muestra CPIO',
          description: 'Descarga archivos de muestra CPIO gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de extracción de archivos CPIO, compresión de archivos y gestión de archivos Unix.'
        },
        dmg: {
          name: 'Archivos de muestra DMG',
          description: 'Descarga archivos de muestra DMG gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de montaje de imágenes de disco, instalación de software macOS y gestión de archivos.'
        },
        img: {
          name: 'Archivos de muestra IMG',
          description: 'Descarga archivos de muestra IMG gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de montaje de imágenes de disco, creación de imágenes de disco y gestión de archivos.'
        },
        iso: {
          name: 'Archivos de muestra ISO',
          description: 'Descarga archivos de muestra ISO gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de montaje de imágenes de disco, grabación de CD/DVD y gestión de archivos.'
        },
        kmz: {
          name: 'Archivos de muestra KMZ',
          description: 'Descarga archivos de muestra KMZ gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de extracción KMZ, procesamiento de datos geográficos e integración con Google Earth.'
        },
        laz: {
          name: 'Archivos de muestra LAZ',
          description: 'Descarga archivos de muestra LAZ gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de extracción LAZ, procesamiento de nubes de puntos LiDAR y herramientas de mapeo 3D.'
        },
        lha: {
          name: 'Archivos de muestra LHA',
          description: 'Descarga archivos de muestra LHA gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de extracción LHA, descompresión de archivos y herramientas de archivado de archivos.'
        },
        lzh: {
          name: 'Archivos de muestra LZH',
          description: 'Descarga archivos de muestra LZH gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de extracción LZH, descompresión de archivos y herramientas de archivado de archivos.'
        },
        lzma: {
          name: 'Archivos de muestra LZMA',
          description: 'Descarga archivos de muestra LZMA gratuitos para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de descompresión LZMA, extracción de archivos y herramientas de compresión de archivos.'
        },
        '3ds': { name: 'Archivos de muestra 3DS', description: 'Descarga archivos de muestra 3DS gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de modelos 3D, visualizadores 3DS y software de modelado 3D.' },
        '3gp': { name: 'Archivos de muestra 3GP', description: 'Descarga archivos de muestra 3GP gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de video móvil, reproductores 3GP y aplicaciones de procesamiento de video para smartphones.' },
        '3mf': { name: 'Archivos de muestra 3MF', description: 'Descarga archivos de muestra 3MF gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de impresión 3D, convertidores 3MF y software de fabricación aditiva.' },
        ac3: { name: 'Archivos de muestra AC3', description: 'Descarga archivos de muestra AC3 Dolby Digital gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio Dolby, decodificadores AC3 y software de procesamiento de audio surround.' },
        ai: { name: 'Archivos de muestra AI', description: 'Descarga archivos de muestra AI Adobe Illustrator gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de gráficos vectoriales, visualizadores AI y software de diseño gráfico.' },
        aif: { name: 'Archivos de muestra AIF', description: 'Descarga archivos de muestra AIF Audio Interchange File Format gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio sin comprimir, reproductores AIF y software de producción de audio profesional.' },
        aiff: { name: 'Archivos de muestra AIFF', description: 'Descarga archivos de muestra AIFF Audio Interchange File Format gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio de alta calidad, reproductores AIFF y software de masterización de audio.' },
        amr: { name: 'Archivos de muestra AMR', description: 'Descarga archivos de muestra AMR Adaptive Multi-Rate gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio móvil, decodificadores AMR y aplicaciones de procesamiento de audio para teléfonos.' },
        'animated-gif': { name: 'Archivos de muestra GIF animado', description: 'Descarga archivos de muestra GIF animado gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de animación GIF, visualizadores GIF animados y software de creación de animaciones web.' },
        'animation-fbx': { name: 'Archivos de muestra Animación FBX', description: 'Descarga archivos de muestra Animación FBX gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de animación 3D, visualizadores FBX y software de producción de animación profesional.' },
        apk: { name: 'Archivos de muestra APK', description: 'Descarga archivos de muestra APK Android gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de instalación de aplicaciones Android, análisis APK y software de desarrollo de aplicaciones móviles.' },
        apng: { name: 'Archivos de muestra APNG', description: 'Descarga archivos de muestra APNG PNG animado gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión PNG animado, visualizadores APNG y software de creación de animaciones web modernas.' },
        appimage: { name: 'Archivos de muestra AppImage', description: 'Descarga archivos de muestra AppImage Linux gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de ejecución de aplicaciones Linux portátiles, instalación AppImage y software de distribución de aplicaciones Linux.' },
        ase: { name: 'Archivos de muestra ASE', description: 'Descarga archivos de muestra ASE Adobe Swatch Exchange gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de paletas de colores, visualizadores ASE y software de diseño gráfico profesional.' },
        assetbundle: { name: 'Archivos de muestra AssetBundle', description: 'Descarga archivos de muestra AssetBundle Unity gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de carga de assets Unity, extracción AssetBundle y software de desarrollo de juegos Unity.' },
        'barcode-svg': { name: 'Archivos de muestra Código de barras SVG', description: 'Descarga archivos de muestra código de barras SVG gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de escaneo de códigos de barras, conversión SVG y software de generación de códigos de barras vectoriales.' },
        blend: { name: 'Archivos de muestra BLEND', description: 'Descarga archivos de muestra BLEND Blender gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de modelos 3D Blender, visualizadores BLEND y software de modelado 3D de código abierto.' },
        bvh: { name: 'Archivos de muestra BVH', description: 'Descarga archivos de muestra BVH motion capture gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de procesamiento de motion capture, conversión de animación BVH y software de producción de animación cinemática.' },
        caf: { name: 'Archivos de muestra CAF', description: 'Descarga archivos de muestra CAF Core Audio Format gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de audio macOS, reproductores CAF y software de procesamiento de audio Apple.' },
        csr: { name: 'Archivos de muestra CSR', description: 'Descarga archivos de muestra CSR Certificate Signing Request gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de gestión de certificados SSL, análisis CSR y software de seguridad de red y criptografía.' },
        'customer-database-sql': { name: 'Archivos de muestra Base de datos de clientes SQL', description: 'Descarga archivos de muestra base de datos de clientes SQL gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de gestión de bases de datos, análisis SQL y software de gestión de datos de clientes y CRM.' },
        dav: { name: 'Archivos de muestra DAV', description: 'Descarga archivos de muestra DAV video gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de video DAV, reproductores DAV y software de procesamiento de video de vigilancia y seguridad.' },
        dbf: { name: 'Archivos de muestra DBF', description: 'Descarga archivos de muestra DBF dBase gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de bases de datos dBase, análisis DBF y software de gestión de datos legacy.' },
        dds: { name: 'Archivos de muestra DDS', description: 'Descarga archivos de muestra DDS DirectDraw Surface gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de texturas de imagen, visualizadores DDS y software de desarrollo de juegos y gráficos 3D.' },
        dem: { name: 'Archivos de muestra DEM', description: 'Descarga archivos de muestra DEM Digital Elevation Model gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de procesamiento de datos de elevación, conversión DEM y software de cartografía y SIG.' },
        der: { name: 'Archivos de muestra DER', description: 'Descarga archivos de muestra DER certificado codificado gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de gestión de certificados, análisis DER y software de seguridad y criptografía.' },
        dmp: { name: 'Archivos de muestra DMP', description: 'Descarga archivos de muestra DMP memory dump gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis de memoria, depuración DMP y software de diagnóstico de sistema y forense.' },
        dng: { name: 'Archivos de muestra DNG', description: 'Descarga archivos de muestra DNG Digital Negative raw image gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de procesamiento de imágenes raw, conversión DNG y software de fotografía profesional y edición de fotos.' },
        'docker-compose-yml': { name: 'Archivos de muestra Docker Compose YML', description: 'Descarga archivos de muestra Docker Compose YML gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de configuración Docker, análisis YAML y software de containerización y orquestación Docker.' },
        dockerfile: { name: 'Archivos de muestra Dockerfile', description: 'Descarga archivos de muestra Dockerfile gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de build Docker, análisis Dockerfile y software de desarrollo y despliegue de contenedores.' },
        dwg: { name: 'Archivos de muestra DWG', description: 'Descarga archivos de muestra DWG AutoCAD gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de dibujos AutoCAD, visualizadores DWG y software CAD profesional y arquitectura.' },
        dxf: { name: 'Archivos de muestra DXF', description: 'Descarga archivos de muestra DXF Drawing Exchange Format gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de dibujos CAD, visualizadores DXF y software de intercambio de archivos de dibujo e ingeniería.' },
        editorconfig: { name: 'Archivos de muestra EditorConfig', description: 'Descarga archivos de muestra EditorConfig gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de configuración de editor de código, análisis EditorConfig y software de desarrollo y formateo de código.' },
        elf: { name: 'Archivos de muestra ELF', description: 'Descarga archivos de muestra ELF Executable and Linkable Format gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis de binarios Linux, análisis ELF y software de desarrollo de sistema e ingeniería inversa.' },
        eps: { name: 'Archivos de muestra EPS', description: 'Descarga archivos de muestra EPS Encapsulated PostScript gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de gráficos vectoriales, visualizadores EPS y software de diseño gráfico e impresión profesional.' },
        exe: { name: 'Archivos de muestra EXE', description: 'Descarga archivos de muestra EXE Windows ejecutable gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de análisis de binarios Windows, análisis EXE y software de desarrollo Windows y seguridad.' },
        exr: { name: 'Archivos de muestra EXR', description: 'Descarga archivos de muestra EXR OpenEXR high dynamic range image gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de procesamiento de imágenes HDR, conversión EXR y software de visualización de alto rango dinámico y VFX.' },
        icns: { name: 'Archivos de muestra ICNS', description: 'Descarga archivos de muestra ICNS macOS icon gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de iconos macOS, visualizadores ICNS y software de diseño de iconos y desarrollo macOS.' },
        ifc: { name: 'Archivos de muestra IFC', description: 'Descarga archivos de muestra IFC Industry Foundation Classes gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión BIM, visualizadores IFC y software de modelado de información de construcción y arquitectura.' },
        iges: { name: 'Archivos de muestra IGES', description: 'Descarga archivos de muestra IGES Initial Graphics Exchange Specification gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de modelos CAD, visualizadores IGES y software de intercambio de modelos 3D e ingeniería.' },
        igs: { name: 'Archivos de muestra IGS', description: 'Descarga archivos de muestra IGS Initial Graphics Exchange Specification gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de modelos CAD, visualizadores IGS y software de intercambio de archivos de dibujo e ingeniería mecánica.' },
        indd: { name: 'Archivos de muestra INDD', description: 'Descarga archivos de muestra INDD Adobe InDesign gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de diseño, visualizadores INDD y software de publicación y diseño editorial profesional.' },
        intelhex: { name: 'Archivos de muestra Intel HEX', description: 'Descarga archivos de muestra Intel HEX gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de programación de microcontroladores, análisis Intel HEX y software de desarrollo embebido y firmware.' },
        ipa: { name: 'Archivos de muestra IPA', description: 'Descarga archivos de muestra IPA iOS App Store Package gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de instalación de aplicaciones iOS, análisis IPA y software de desarrollo de aplicaciones móviles Apple.' },
        ipynb: { name: 'Archivos de muestra IPYNB', description: 'Descarga archivos de muestra IPYNB Jupyter Notebook gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de ejecución de notebooks Jupyter, análisis IPYNB y software de ciencia de datos y análisis interactivo.' },
        jar: { name: 'Archivos de muestra JAR', description: 'Descarga archivos de muestra JAR Java Archive gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de ejecución Java, extracción JAR y software de desarrollo Java y despliegue de aplicaciones.' },
        java: { name: 'Archivos de muestra Java', description: 'Descarga archivos de muestra Java source code gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de compilación Java, análisis de código Java y software de desarrollo Java e IDE.' },
        jks: { name: 'Archivos de muestra JKS', description: 'Descarga archivos de muestra JKS Java KeyStore gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de gestión de claves Java, análisis JKS y software de seguridad Java y criptografía.' },
        jpeg: { name: 'Archivos de muestra JPEG', description: 'Descarga archivos de muestra JPEG Joint Photographic Experts Group gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de imágenes JPEG, procesamiento de imágenes y software de fotografía digital y optimización web.' },
        jsonl: { name: 'Archivos de muestra JSONL', description: 'Descarga archivos de muestra JSONL JSON Lines gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de procesamiento de datos JSON, análisis JSONL y software de procesamiento de datos en streaming y big data.' },
        jsx: { name: 'Archivos de muestra JSX', description: 'Descarga archivos de muestra JSX React JavaScript XML gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de compilación React, análisis JSX y software de desarrollo React y frontend.' },
        jwt: { name: 'Archivos de muestra JWT', description: 'Descarga archivos de muestra JWT JSON Web Token gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de autenticación JWT, análisis JWT y software de seguridad web y API.' },
        key: { name: 'Archivos de muestra KEY', description: 'Descarga archivos de muestra KEY clave privada gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de gestión de claves criptográficas, análisis KEY y software de seguridad y criptografía.' },
        kml: { name: 'Archivos de muestra KML', description: 'Descarga archivos de muestra KML Keyhole Markup Language gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de visualización geográfica, análisis KML y software de cartografía y Google Earth.' },
        kt: { name: 'Archivos de muestra Kotlin', description: 'Descarga archivos de muestra Kotlin source code gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de compilación Kotlin, análisis de código Kotlin y software de desarrollo Android y multiplataforma.' },
        las: { name: 'Archivos de muestra LAS', description: 'Descarga archivos de muestra LAS LiDAR point cloud data gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de procesamiento de nubes de puntos, conversión LAS y software de teledetección y cartografía 3D.' },
        lua: { name: 'Archivos de muestra Lua', description: 'Descarga archivos de muestra Lua source code gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de ejecución Lua, análisis de código Lua y software de desarrollo de scripts y videojuegos.' },
        m3u: { name: 'Archivos de muestra M3U', description: 'Descarga archivos de muestra M3U playlist gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de reproducción de listas de reproducción, análisis M3U y software de reproducción multimedia y streaming de audio.' },
        m3u8: { name: 'Archivos de muestra M3U8', description: 'Descarga archivos de muestra M3U8 HLS playlist gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de streaming HLS, análisis M3U8 y software de streaming de video y transmisión en vivo.' },
        m4v: { name: 'Archivos de muestra M4V', description: 'Descarga archivos de muestra M4V MPEG-4 video gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de video MPEG-4, reproductores M4V y software de procesamiento de video Apple e iTunes.' },
        makefile: { name: 'Archivos de muestra Makefile', description: 'Descarga archivos de muestra Makefile gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de build automatizado, análisis Makefile y software de compilación y desarrollo de sistema.' },
        max: { name: 'Archivos de muestra MAX', description: 'Descarga archivos de muestra MAX 3ds Max gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de modelos 3D, visualizadores MAX y software de modelado 3D profesional y animación.' },
        mb: { name: 'Archivos de muestra MB', description: 'Descarga archivos de muestra MB Maya Binary gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de escenas Maya, visualizadores MB y software de modelado 3D y animación profesional.' },
        mbtiles: { name: 'Archivos de muestra MBTiles', description: 'Descarga archivos de muestra MBTiles MapBox tiles gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de visualización de mapas, extracción MBTiles y software de cartografía web y aplicaciones móviles.' },
        mdx: { name: 'Archivos de muestra MDX', description: 'Descarga archivos de muestra MDX Markdown Extended gratuitos para pruebas. Múltiplos tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de procesamiento de documentación, análisis MDX y software de desarrollo web y generación de sitios estáticos.' }
      }
    }
  },
  fr: {
    samples_page: {
      meta: {
        title: 'Fichiers d\'échantillon gratuits – Télécharger des fichiers de test | MorphyHub',
        description: 'Obtenez des fichiers d\'échantillon gratuits d\'images, documents et archives pour tester les convertisseurs, compresseurs et visionneuses de MorphyHub.',
        keywords: 'fichiers d\'échantillon, fichiers de test, télécharger des échantillons, fichiers de test gratuits, échantillons DOCX, échantillons de fichiers, fichiers de test pour conversion'
      },
      schema: {
        name: 'Fichiers d\'échantillon gratuits à télécharger et tester',
        description: 'Téléchargez des fichiers d\'échantillon gratuits de divers types — images, documents, audio, vidéo et archives. Utilisez-les pour les tests, démos ou validation de logiciels sur n\'importe quelle plateforme.'
      },
      hero: {
        title: 'Fichiers d\'échantillon',
        description: 'Téléchargez des fichiers d\'échantillon gratuits pour les tests. Plusieurs tailles de fichiers disponibles pour divers formats pour tester vos outils de conversion et de traitement.'
      },
      back_button: 'Retour à l\'accueil',
      search: {
        placeholder: 'Rechercher des fichiers d\'échantillon... (ex. DOCX, JPG, PDF)',
        results: '{{count}} fichier(s) d\'échantillon trouvé(s)',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'ÉCHANTILLONS DE DOCUMENTS',
        data: 'ÉCHANTILLONS DE DONNÉES',
        application: 'ÉCHANTILLONS D\'APPLICATIONS',
        design_3d: 'ÉCHANTILLONS 3D ET DE CONCEPTION',
        image_video: 'ÉCHANTILLONS D\'IMAGES ET VIDÉO',
        audio: 'ÉCHANTILLONS AUDIO',
        archive: 'ÉCHANTILLONS D\'ARCHIVES'
      },
      actions: {
        download: 'Télécharger'
      },
      no_results: {
        title: 'Aucun fichier d\'échantillon trouvé',
        description: 'Essayez de rechercher quelque chose comme "DOCX" ou "JPG"',
        clear: 'Effacer la recherche'
      },
      features: {
        title: 'Pourquoi choisir nos fichiers d\'échantillon?',
        items: [
          {
            title: 'Accès gratuit et facile',
            description: 'Téléchargez des fichiers d\'échantillon instantanément sans inscription ou paiement.'
          },
          {
            title: 'Plusieurs tailles',
            description: 'Choisissez parmi diverses tailles de fichiers (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) pour des tests complets.'
          },
          {
            title: 'Grande variété',
            description: 'Accédez à des échantillons dans plusieurs catégories: documents, images, audio, vidéo, archives et plus.'
          }
        ]
      },
      format_description_template: 'Téléchargez des fichiers d\'échantillon {{format}} gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester {{purpose}}.',
      formats: {
        docx: { name: 'Fichiers d\'échantillon DOCX', description: 'Téléchargez des fichiers d\'échantillon DOCX gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de documents.' },
        doc: { name: 'Fichiers d\'échantillon DOC', description: 'Téléchargez des fichiers d\'échantillon DOC gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de documents.' },
        pdf: { name: 'Fichiers d\'échantillon PDF', description: 'Téléchargez des fichiers d\'échantillon PDF gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de documents.' },
        odp: { name: 'Fichiers d\'échantillon ODP', description: 'Téléchargez des fichiers d\'échantillon ODP OpenDocument Presentation gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion et de visualisation de présentations.' },
        rtf: { name: 'Fichiers d\'échantillon RTF', description: 'Téléchargez des fichiers d\'échantillon RTF (Rich Text Format) gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion et de visualisation de documents.' },
        epub: { name: 'Fichiers d\'échantillon EPUB', description: 'Téléchargez des fichiers d\'échantillon EPUB gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les lecteurs d\'eBooks, la conversion EPUB et les outils de publication numérique.' },
        'invoice-pdf': { name: 'Fichiers d\'échantillon PDF de factures', description: 'Téléchargez des fichiers d\'échantillon PDF de factures gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester le traitement de factures PDF, l\'analyse de factures et les outils de gestion de documents.' },
        mobi: { name: 'Fichiers d\'échantillon MOBI', description: 'Téléchargez des fichiers d\'échantillon MOBI gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester la conversion d\'eBooks MOBI, la lecture MOBI et les outils de traitement d\'eBooks.' },
        csv: { name: 'Fichiers d\'échantillon CSV', description: 'Téléchargez des fichiers d\'échantillon CSV gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion CSV et de traitement de données.' },
        xls: { name: 'Fichiers d\'échantillon XLS', description: 'Téléchargez des fichiers d\'échantillon XLS gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion Excel et de traitement de données.' },
        xlsx: { name: 'Fichiers d\'échantillon XLSX', description: 'Téléchargez des fichiers d\'échantillon XLSX gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion Excel et de traitement de données.' },
        xml: { name: 'Fichiers d\'échantillon XML', description: 'Téléchargez des fichiers d\'échantillon XML gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse XML et de conversion de données.' },
        html: { name: 'Fichiers d\'échantillon HTML', description: 'Téléchargez des fichiers d\'échantillon HTML gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester l\'analyse HTML, le développement web et les outils de validation HTML.' },
        ods: { name: 'Fichiers d\'échantillon ODS', description: 'Téléchargez des fichiers d\'échantillon ODS OpenDocument Spreadsheet gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de feuilles de calcul et de traitement de données.' },
        'ansible-yml': { name: 'Fichiers d\'échantillon Ansible YML', description: 'Téléchargez des fichiers d\'échantillon Ansible YML gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse YAML et de gestion de configuration.' },
        'api-response-json': { name: 'Fichiers d\'échantillon JSON de réponse API', description: 'Téléchargez des fichiers d\'échantillon JSON de réponse API gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse JSON et de gestion de réponses API.' },
        'arduino-ino': { name: 'Fichiers d\'échantillon Arduino INO', description: 'Téléchargez des fichiers d\'échantillon Arduino INO gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de compilation de code Arduino et de vérification de syntaxe.' },
        asc: { name: 'Fichiers d\'échantillon ASC', description: 'Téléchargez des fichiers d\'échantillon ASC (ASCII) gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de traitement de fichiers texte et d\'encodage ASCII.' },
        bat: { name: 'Fichiers d\'échantillon BAT', description: 'Téléchargez des fichiers d\'échantillon BAT gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'exécution de scripts batch et d\'automatisation Windows.' },
        bib: { name: 'Fichiers d\'échantillon BIB', description: 'Téléchargez des fichiers d\'échantillon BIB (BibTeX) gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de gestion de bibliographies et de traitement de citations.' },
        c: { name: 'Fichiers d\'échantillon C', description: 'Téléchargez des fichiers d\'échantillon C gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de compilation de code C et de vérification de syntaxe.' },
        'can-log': { name: 'Fichiers d\'échantillon CAN Log', description: 'Téléchargez des fichiers d\'échantillon CAN log gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse de bus CAN et d\'analyse de journaux.' },
        cmd: { name: 'Fichiers d\'échantillon CMD', description: 'Téléchargez des fichiers d\'échantillon CMD gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'exécution de scripts de commandes et d\'automatisation Windows.' },
        conf: { name: 'Fichiers d\'échantillon CONF', description: 'Téléchargez des fichiers d\'échantillon CONF gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse de fichiers de configuration et de configuration système.' },
        'config-ini': { name: 'Fichiers d\'échantillon Config INI', description: 'Téléchargez des fichiers d\'échantillon Config INI gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse de fichiers INI et de gestion de configuration.' },
        cpp: { name: 'Fichiers d\'échantillon C++', description: 'Téléchargez des fichiers d\'échantillon C++ gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de compilation de code C++ et de vérification de syntaxe.' },
        crx: { name: 'Fichiers d\'échantillon CRX', description: 'Téléchargez des fichiers d\'échantillon CRX gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester l\'installation d\'extensions Chrome, l\'analyse CRX et les outils de développement d\'extensions de navigateur.' },
        cs: { name: 'Fichiers d\'échantillon C#', description: 'Téléchargez des fichiers d\'échantillon C# gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de compilation de code C# et de vérification de syntaxe.' },
        gz: { name: 'Fichiers d\'échantillon GZ', description: 'Téléchargez des fichiers d\'échantillon GZ (gzip) gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester la décompression gzip, l\'extraction d\'archives et les outils de compression de fichiers.' },
        h: { name: 'Fichiers d\'échantillon C Header', description: 'Téléchargez des fichiers d\'échantillon C Header gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de compilation de code C et de traitement de fichiers d\'en-tête.' },
        hdr: { name: 'Fichiers d\'échantillon HDR', description: 'Téléchargez des fichiers d\'échantillon HDR (High Dynamic Range) gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester le traitement d\'images HDR, la conversion HDR et les outils de visualisation à plage dynamique élevée.' },
        heic: { name: 'Fichiers d\'échantillon HEIC', description: 'Téléchargez des fichiers d\'échantillon HEIC gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester la conversion d\'images HEIC, la visualisation HEIC et les outils de traitement de formats d\'image modernes.' },
        heif: { name: 'Fichiers d\'échantillon HEIF', description: 'Téléchargez des fichiers d\'échantillon HEIF gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester la conversion d\'images HEIF, la visualisation HEIF et les outils de traitement de formats d\'image modernes.' },
        hex: { name: 'Fichiers d\'échantillon HEX', description: 'Téléchargez des fichiers d\'échantillon HEX (hexadécimal) gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester l\'analyse de fichiers hexadécimaux, la programmation de firmware et les outils de développement de systèmes embarqués.' },
        hpp: { name: 'Fichiers d\'échantillon C++ Header', description: 'Téléchargez des fichiers d\'échantillon C++ Header gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de compilation de code C++ et de traitement de fichiers d\'en-tête.' },
        css: { name: 'Fichiers d\'échantillon CSS', description: 'Téléchargez des fichiers d\'échantillon CSS gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse CSS, de développement web et de validation CSS.' },
        js: { name: 'Fichiers d\'échantillon JavaScript', description: 'Téléchargez des fichiers d\'échantillon JavaScript gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse JavaScript, de développement web et de validation de code.' },
        json: { name: 'Fichiers d\'échantillon JSON', description: 'Téléchargez des fichiers d\'échantillon JSON gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse JSON, de traitement de données et de validation de schémas.' },
        md: { name: 'Fichiers d\'échantillon Markdown', description: 'Téléchargez des fichiers d\'échantillon Markdown gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de traitement Markdown, de conversion de documents et de génération de documentation.' },
        py: { name: 'Fichiers d\'échantillon Python', description: 'Téléchargez des fichiers d\'échantillon Python gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de compilation de code Python et de vérification de syntaxe.' },
        sh: { name: 'Fichiers d\'échantillon Shell Script', description: 'Téléchargez des fichiers d\'échantillon Shell Script gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'exécution de scripts shell et d\'automatisation de systèmes Unix/Linux.' },
        sql: { name: 'Fichiers d\'échantillon SQL', description: 'Téléchargez des fichiers d\'échantillon SQL gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse SQL, de gestion de bases de données et de validation de requêtes.' },
        ts: { name: 'Fichiers d\'échantillon TypeScript', description: 'Téléchargez des fichiers d\'échantillon TypeScript gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de compilation de code TypeScript et de vérification de types.' },
        yml: { name: 'Fichiers d\'échantillon YML', description: 'Téléchargez des fichiers d\'échantillon YML gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse YAML et de gestion de configuration.' },
        jpg: { name: 'Fichiers d\'échantillon JPG', description: 'Téléchargez des fichiers d\'échantillon JPG gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'images, de traitement d\'images et d\'optimisation web.' },
        png: { name: 'Fichiers d\'échantillon PNG', description: 'Téléchargez des fichiers d\'échantillon PNG gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'images, de traitement d\'images et de graphiques web.' },
        gif: { name: 'Fichiers d\'échantillon GIF', description: 'Téléchargez des fichiers d\'échantillon GIF gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'images, de traitement d\'images et d\'animations web.' },
        webp: { name: 'Fichiers d\'échantillon WebP', description: 'Téléchargez des fichiers d\'échantillon WebP gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'images, de traitement d\'images et d\'optimisation web moderne.' },
        svg: { name: 'Fichiers d\'échantillon SVG', description: 'Téléchargez des fichiers d\'échantillon SVG gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de graphiques vectoriels, de traitement SVG et de conception web.' },
        bmp: { name: 'Fichiers d\'échantillon BMP', description: 'Téléchargez des fichiers d\'échantillon BMP gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'images, de traitement d\'images et de compatibilité de formats.' },
        ico: { name: 'Fichiers d\'échantillon ICO', description: 'Téléchargez des fichiers d\'échantillon ICO gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'icônes, de traitement d\'icônes et de développement d\'applications.' },
        tiff: { name: 'Fichiers d\'échantillon TIFF', description: 'Téléchargez des fichiers d\'échantillon TIFF gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'images, de traitement d\'images et d\'édition professionnelle.' },
        tif: { name: 'Fichiers d\'échantillon TIF', description: 'Téléchargez des fichiers d\'échantillon TIF gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'images, de traitement d\'images et d\'édition professionnelle.' },
        avif: { name: 'Fichiers d\'échantillon AVIF', description: 'Téléchargez des fichiers d\'échantillon AVIF gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'images, de traitement d\'images et d\'optimisation web de nouvelle génération.' },
        mp4: { name: 'Fichiers d\'échantillon MP4', description: 'Téléchargez des fichiers d\'échantillon MP4 gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion vidéo, de traitement vidéo et de lecture multimédia.' },
        avi: { name: 'Fichiers d\'échantillon AVI', description: 'Téléchargez des fichiers d\'échantillon AVI gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion vidéo, de traitement vidéo et de compatibilité de formats.' },
        mov: { name: 'Fichiers d\'échantillon MOV', description: 'Téléchargez des fichiers d\'échantillon MOV gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion vidéo, de traitement vidéo et d\'édition vidéo.' },
        wmv: { name: 'Fichiers d\'échantillon WMV', description: 'Téléchargez des fichiers d\'échantillon WMV gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion vidéo, de traitement vidéo et de compatibilité de formats Windows.' },
        flv: { name: 'Fichiers d\'échantillon FLV', description: 'Téléchargez des fichiers d\'échantillon FLV gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion vidéo, de traitement vidéo et de streaming web.' },
        webm: { name: 'Fichiers d\'échantillon WebM', description: 'Téléchargez des fichiers d\'échantillon WebM gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion vidéo, de traitement vidéo et de vidéo web moderne.' },
        mkv: { name: 'Fichiers d\'échantillon MKV', description: 'Téléchargez des fichiers d\'échantillon MKV gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion vidéo, de traitement vidéo et de conteneurs multimédia.' },
        mp3: { name: 'Fichiers d\'échantillon MP3', description: 'Téléchargez des fichiers d\'échantillon MP3 gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio, de traitement audio et de lecture multimédia.' },
        wav: { name: 'Fichiers d\'échantillon WAV', description: 'Téléchargez des fichiers d\'échantillon WAV gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio, de traitement audio et d\'audio sans perte.' },
        flac: { name: 'Fichiers d\'échantillon FLAC', description: 'Téléchargez des fichiers d\'échantillon FLAC gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio, de traitement audio et d\'audio haute qualité.' },
        ogg: { name: 'Fichiers d\'échantillon OGG', description: 'Téléchargez des fichiers d\'échantillon OGG gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio, de traitement audio et d\'audio open source.' },
        wma: { name: 'Fichiers d\'échantillon WMA', description: 'Téléchargez des fichiers d\'échantillon WMA gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio, de traitement audio et de compatibilité de formats Windows.' },
        aac: { name: 'Fichiers d\'échantillon AAC', description: 'Téléchargez des fichiers d\'échantillon AAC gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio, de traitement audio et d\'audio haute efficacité.' },
        m4a: { name: 'Fichiers d\'échantillon M4A', description: 'Téléchargez des fichiers d\'échantillon M4A gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio, de traitement audio et d\'audio conteneur MPEG-4.' },
        midi: { name: 'Fichiers d\'échantillon MIDI', description: 'Téléchargez des fichiers d\'échantillon MIDI gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de traitement MIDI, de synthèse musicale et de production musicale.' },
        cue: { name: 'Fichiers d\'échantillon CUE', description: 'Téléchargez des fichiers d\'échantillon CUE gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester l\'analyse de feuilles CUE, la gravure de CD audio et les outils d\'autorisation de CD.' },
        zip: { name: 'Fichiers d\'échantillon ZIP', description: 'Téléchargez des fichiers d\'échantillon ZIP gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'extraction d\'archives, de compression de fichiers et de gestion de fichiers.' },
        rar: { name: 'Fichiers d\'échantillon RAR', description: 'Téléchargez des fichiers d\'échantillon RAR gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'extraction d\'archives, de compression de fichiers et de gestion de fichiers.' },
        '7z': { name: 'Fichiers d\'échantillon 7Z', description: 'Téléchargez des fichiers d\'échantillon 7Z gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'archives et d\'extraction.' },
        tar: { name: 'Fichiers d\'échantillon TAR', description: 'Téléchargez des fichiers d\'échantillon TAR gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'extraction d\'archives, de compression de fichiers et de gestion de fichiers Unix/Linux.' },
        ace: { name: 'Fichiers d\'échantillon ACE', description: 'Téléchargez des fichiers d\'échantillon ACE gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'extraction d\'archives, de compression de fichiers et de gestion de fichiers.' },
        arj: { name: 'Fichiers d\'échantillon ARJ', description: 'Téléchargez des fichiers d\'échantillon ARJ gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'extraction d\'archives, de compression de fichiers et de gestion de fichiers legacy.' },
        bz2: { name: 'Fichiers d\'échantillon BZ2', description: 'Téléchargez des fichiers d\'échantillon BZ2 (bzip2) gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester la décompression bzip2, l\'extraction d\'archives et les outils de compression de fichiers.' },
        cab: { name: 'Fichiers d\'échantillon CAB', description: 'Téléchargez des fichiers d\'échantillon CAB gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'extraction d\'archives CAB, d\'installation de logiciels Windows et de gestion de fichiers.' },
        cpio: { name: 'Fichiers d\'échantillon CPIO', description: 'Téléchargez des fichiers d\'échantillon CPIO gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'extraction d\'archives CPIO, de compression de fichiers et de gestion de fichiers Unix.' },
        dmg: { name: 'Fichiers d\'échantillon DMG', description: 'Téléchargez des fichiers d\'échantillon DMG gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de montage d\'images de disque, d\'installation de logiciels macOS et de gestion de fichiers.' },
        img: { name: 'Fichiers d\'échantillon IMG', description: 'Téléchargez des fichiers d\'échantillon IMG gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de montage d\'images de disque, de création d\'images de disque et de gestion de fichiers.' },
        iso: { name: 'Fichiers d\'échantillon ISO', description: 'Téléchargez des fichiers d\'échantillon ISO gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de montage d\'images de disque, de gravure de CD/DVD et de gestion de fichiers.' },
        kmz: { name: 'Fichiers d\'échantillon KMZ', description: 'Téléchargez des fichiers d\'échantillon KMZ gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'extraction KMZ, de traitement de données géographiques et d\'intégration Google Earth.' },
        laz: { name: 'Fichiers d\'échantillon LAZ', description: 'Téléchargez des fichiers d\'échantillon LAZ gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'extraction LAZ, de traitement de nuages de points LiDAR et d\'outils de cartographie 3D.' },
        lha: { name: 'Fichiers d\'échantillon LHA', description: 'Téléchargez des fichiers d\'échantillon LHA gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'extraction LHA, de décompression d\'archives et d\'archivage de fichiers.' },
        lzh: { name: 'Fichiers d\'échantillon LZH', description: 'Téléchargez des fichiers d\'échantillon LZH gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'extraction LZH, de décompression d\'archives et d\'archivage de fichiers.' },
        lzma: { name: 'Fichiers d\'échantillon LZMA', description: 'Téléchargez des fichiers d\'échantillon LZMA gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de décompression LZMA, d\'extraction d\'archives et de compression de fichiers.' },
        '3ds': { name: 'Fichiers d\'échantillon 3DS', description: 'Téléchargez des fichiers d\'échantillon 3DS gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion et de visualisation de modèles 3D, les convertisseurs 3DS et les logiciels de modélisation 3D.' },
        '3gp': { name: 'Fichiers d\'échantillon 3GP', description: 'Téléchargez des fichiers d\'échantillon 3GP gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion vidéo mobile, les lecteurs 3GP et les applications de traitement vidéo pour smartphones.' },
        '3mf': { name: 'Fichiers d\'échantillon 3MF', description: 'Téléchargez des fichiers d\'échantillon 3MF gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'impression 3D, les convertisseurs 3MF et les logiciels de fabrication additive.' },
        ac3: { name: 'Fichiers d\'échantillon AC3', description: 'Téléchargez des fichiers d\'échantillon AC3 Dolby Digital gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio Dolby, les décodeurs AC3 et les logiciels de traitement audio surround.' },
        ai: { name: 'Fichiers d\'échantillon AI', description: 'Téléchargez des fichiers d\'échantillon AI Adobe Illustrator gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de graphiques vectoriels, les visualiseurs AI et les logiciels de design graphique.' },
        aif: { name: 'Fichiers d\'échantillon AIF', description: 'Téléchargez des fichiers d\'échantillon AIF Audio Interchange File Format gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio non compressés, les lecteurs AIF et les logiciels de production audio professionnels.' },
        aiff: { name: 'Fichiers d\'échantillon AIFF', description: 'Téléchargez des fichiers d\'échantillon AIFF Audio Interchange File Format gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio haute qualité, les lecteurs AIFF et les logiciels de mastering audio.' },
        amr: { name: 'Fichiers d\'échantillon AMR', description: 'Téléchargez des fichiers d\'échantillon AMR Adaptive Multi-Rate gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio mobile, les décodeurs AMR et les applications de traitement audio pour téléphones.' },
        'animated-gif': { name: 'Fichiers d\'échantillon GIF animé', description: 'Téléchargez des fichiers d\'échantillon GIF animé gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'animation GIF, les visualiseurs GIF animés et les logiciels de création d\'animations web.' },
        'animation-fbx': { name: 'Fichiers d\'échantillon Animation FBX', description: 'Téléchargez des fichiers d\'échantillon Animation FBX gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'animation 3D, les visualiseurs FBX et les logiciels de production d\'animation professionnels.' },
        apk: { name: 'Fichiers d\'échantillon APK', description: 'Téléchargez des fichiers d\'échantillon APK Android gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'installation d\'applications Android, l\'analyse APK et les logiciels de développement d\'applications mobiles.' },
        apng: { name: 'Fichiers d\'échantillon APNG', description: 'Téléchargez des fichiers d\'échantillon APNG PNG animé gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion PNG animé, les visualiseurs APNG et les logiciels de création d\'animations web modernes.' },
        appimage: { name: 'Fichiers d\'échantillon AppImage', description: 'Téléchargez des fichiers d\'échantillon AppImage Linux gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'exécution d\'applications Linux portables, l\'installation AppImage et les logiciels de distribution d\'applications Linux.' },
        ase: { name: 'Fichiers d\'échantillon ASE', description: 'Téléchargez des fichiers d\'échantillon ASE Adobe Swatch Exchange gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de palettes de couleurs, les visualiseurs ASE et les logiciels de design graphique professionnel.' },
        assetbundle: { name: 'Fichiers d\'échantillon AssetBundle', description: 'Téléchargez des fichiers d\'échantillon AssetBundle Unity gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de chargement d\'assets Unity, l\'extraction AssetBundle et les logiciels de développement de jeux Unity.' },
        'barcode-svg': { name: 'Fichiers d\'échantillon Code-barres SVG', description: 'Téléchargez des fichiers d\'échantillon code-barres SVG gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de scan de code-barres, la conversion SVG et les logiciels de génération de codes-barres vectoriels.' },
        blend: { name: 'Fichiers d\'échantillon BLEND', description: 'Téléchargez des fichiers d\'échantillon BLEND Blender gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de modèles 3D Blender, les visualiseurs BLEND et les logiciels de modélisation 3D open source.' },
        bvh: { name: 'Fichiers d\'échantillon BVH', description: 'Téléchargez des fichiers d\'échantillon BVH motion capture gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de traitement de motion capture, la conversion d\'animation BVH et les logiciels de production d\'animation cinématique.' },
        caf: { name: 'Fichiers d\'échantillon CAF', description: 'Téléchargez des fichiers d\'échantillon CAF Core Audio Format gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion audio macOS, les lecteurs CAF et les logiciels de traitement audio Apple.' },
        csr: { name: 'Fichiers d\'échantillon CSR', description: 'Téléchargez des fichiers d\'échantillon CSR Certificate Signing Request gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de gestion de certificats SSL, l\'analyse CSR et les logiciels de sécurité réseau et cryptographie.' },
        'customer-database-sql': { name: 'Fichiers d\'échantillon Base de données client SQL', description: 'Téléchargez des fichiers d\'échantillon base de données client SQL gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de gestion de bases de données, l\'analyse SQL et les logiciels de gestion de données clients et CRM.' },
        dav: { name: 'Fichiers d\'échantillon DAV', description: 'Téléchargez des fichiers d\'échantillon DAV vidéo gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion vidéo DAV, les lecteurs DAV et les logiciels de traitement vidéo de surveillance et sécurité.' },
        dbf: { name: 'Fichiers d\'échantillon DBF', description: 'Téléchargez des fichiers d\'échantillon DBF dBase gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de bases de données dBase, l\'analyse DBF et les logiciels de gestion de données héritées.' },
        dds: { name: 'Fichiers d\'échantillon DDS', description: 'Téléchargez des fichiers d\'échantillon DDS DirectDraw Surface gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de textures d\'images, les visualiseurs DDS et les logiciels de développement de jeux et graphiques 3D.' },
        dem: { name: 'Fichiers d\'échantillon DEM', description: 'Téléchargez des fichiers d\'échantillon DEM Digital Elevation Model gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de traitement de données d\'élévation, la conversion DEM et les logiciels de cartographie et SIG.' },
        der: { name: 'Fichiers d\'échantillon DER', description: 'Téléchargez des fichiers d\'échantillon DER certificat encodé gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de gestion de certificats, l\'analyse DER et les logiciels de sécurité et cryptographie.' },
        dmp: { name: 'Fichiers d\'échantillon DMP', description: 'Téléchargez des fichiers d\'échantillon DMP memory dump gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse de mémoire, le débogage DMP et les logiciels de diagnostic système et forensique.' },
        dng: { name: 'Fichiers d\'échantillon DNG', description: 'Téléchargez des fichiers d\'échantillon DNG Digital Negative raw image gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de traitement d\'images raw, la conversion DNG et les logiciels de photographie professionnelle et retouche photo.' },
        'docker-compose-yml': { name: 'Fichiers d\'échantillon Docker Compose YML', description: 'Téléchargez des fichiers d\'échantillon Docker Compose YML gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de configuration Docker, l\'analyse YAML et les logiciels de conteneurisation et orchestration Docker.' },
        dockerfile: { name: 'Fichiers d\'échantillon Dockerfile', description: 'Téléchargez des fichiers d\'échantillon Dockerfile gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de build Docker, l\'analyse Dockerfile et les logiciels de développement et déploiement de conteneurs.' },
        dwg: { name: 'Fichiers d\'échantillon DWG', description: 'Téléchargez des fichiers d\'échantillon DWG AutoCAD gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de dessins AutoCAD, les visualiseurs DWG et les logiciels CAO professionnels et architecture.' },
        dxf: { name: 'Fichiers d\'échantillon DXF', description: 'Téléchargez des fichiers d\'échantillon DXF Drawing Exchange Format gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de dessins CAO, les visualiseurs DXF et les logiciels d\'échange de fichiers de dessin et ingénierie.' },
        editorconfig: { name: 'Fichiers d\'échantillon EditorConfig', description: 'Téléchargez des fichiers d\'échantillon EditorConfig gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de configuration d\'éditeur de code, l\'analyse EditorConfig et les logiciels de développement et formatage de code.' },
        elf: { name: 'Fichiers d\'échantillon ELF', description: 'Téléchargez des fichiers d\'échantillon ELF Executable and Linkable Format gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse de binaires Linux, l\'analyse ELF et les logiciels de développement système et reverse engineering.' },
        eps: { name: 'Fichiers d\'échantillon EPS', description: 'Téléchargez des fichiers d\'échantillon EPS Encapsulated PostScript gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de graphiques vectoriels, les visualiseurs EPS et les logiciels de design graphique et impression professionnelle.' },
        exe: { name: 'Fichiers d\'échantillon EXE', description: 'Téléchargez des fichiers d\'échantillon EXE Windows exécutable gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse de binaires Windows, l\'analyse EXE et les logiciels de développement Windows et sécurité.' },
        exr: { name: 'Fichiers d\'échantillon EXR', description: 'Téléchargez des fichiers d\'échantillon EXR OpenEXR high dynamic range image gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de traitement d\'images HDR, la conversion EXR et les logiciels de visualisation haute plage dynamique et VFX.' },
        icns: { name: 'Fichiers d\'échantillon ICNS', description: 'Téléchargez des fichiers d\'échantillon ICNS macOS icon gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'icônes macOS, les visualiseurs ICNS et les logiciels de design d\'icônes et développement macOS.' },
        ifc: { name: 'Fichiers d\'échantillon IFC', description: 'Téléchargez des fichiers d\'échantillon IFC Industry Foundation Classes gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion BIM, les visualiseurs IFC et les logiciels de modélisation d\'informations du bâtiment et architecture.' },
        iges: { name: 'Fichiers d\'échantillon IGES', description: 'Téléchargez des fichiers d\'échantillon IGES Initial Graphics Exchange Specification gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de modèles CAO, les visualiseurs IGES et les logiciels d\'échange de modèles 3D et ingénierie.' },
        igs: { name: 'Fichiers d\'échantillon IGS', description: 'Téléchargez des fichiers d\'échantillon IGS Initial Graphics Exchange Specification gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de modèles CAO, les visualiseurs IGS et les logiciels d\'échange de fichiers de dessin et ingénierie mécanique.' },
        indd: { name: 'Fichiers d\'échantillon INDD', description: 'Téléchargez des fichiers d\'échantillon INDD Adobe InDesign gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de mise en page, les visualiseurs INDD et les logiciels de publication et design éditorial professionnel.' },
        ini: { name: 'Fichiers d\'échantillon INI', description: 'Téléchargez des fichiers d\'échantillon INI gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse de fichiers INI, la gestion de configuration et les logiciels de traitement de fichiers de paramètres.' },
        intelhex: { name: 'Fichiers d\'échantillon Intel HEX', description: 'Téléchargez des fichiers d\'échantillon Intel HEX gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de programmation de microcontrôleurs, l\'analyse Intel HEX et les logiciels de développement embarqué et firmware.' },
        ipa: { name: 'Fichiers d\'échantillon IPA', description: 'Téléchargez des fichiers d\'échantillon IPA iOS App Store Package gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'installation d\'applications iOS, l\'analyse IPA et les logiciels de développement d\'applications mobiles Apple.' },
        ipynb: { name: 'Fichiers d\'échantillon IPYNB', description: 'Téléchargez des fichiers d\'échantillon IPYNB Jupyter Notebook gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'exécution de notebooks Jupyter, l\'analyse IPYNB et les logiciels de science des données et analyse interactive.' },
        jar: { name: 'Fichiers d\'échantillon JAR', description: 'Téléchargez des fichiers d\'échantillon JAR Java Archive gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'exécution Java, l\'extraction JAR et les logiciels de développement Java et déploiement d\'applications.' },
        java: { name: 'Fichiers d\'échantillon Java', description: 'Téléchargez des fichiers d\'échantillon Java source code gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de compilation Java, l\'analyse de code Java et les logiciels de développement Java et IDE.' },
        jks: { name: 'Fichiers d\'échantillon JKS', description: 'Téléchargez des fichiers d\'échantillon JKS Java KeyStore gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de gestion de clés Java, l\'analyse JKS et les logiciels de sécurité Java et cryptographie.' },
        jpeg: { name: 'Fichiers d\'échantillon JPEG', description: 'Téléchargez des fichiers d\'échantillon JPEG Joint Photographic Experts Group gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion d\'images JPEG, le traitement d\'images et les logiciels de photographie numérique et optimisation web.' },
        jsonl: { name: 'Fichiers d\'échantillon JSONL', description: 'Téléchargez des fichiers d\'échantillon JSONL JSON Lines gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de traitement de données JSON, l\'analyse JSONL et les logiciels de traitement de données en streaming et big data.' },
        jsx: { name: 'Fichiers d\'échantillon JSX', description: 'Téléchargez des fichiers d\'échantillon JSX React JavaScript XML gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de compilation React, l\'analyse JSX et les logiciels de développement React et frontend.' },
        jwt: { name: 'Fichiers d\'échantillon JWT', description: 'Téléchargez des fichiers d\'échantillon JWT JSON Web Token gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'authentification JWT, l\'analyse JWT et les logiciels de sécurité web et API.' },
        key: { name: 'Fichiers d\'échantillon KEY', description: 'Téléchargez des fichiers d\'échantillon KEY clé privée gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de gestion de clés cryptographiques, l\'analyse KEY et les logiciels de sécurité et cryptographie.' },
        kml: { name: 'Fichiers d\'échantillon KML', description: 'Téléchargez des fichiers d\'échantillon KML Keyhole Markup Language gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de visualisation géographique, l\'analyse KML et les logiciels de cartographie et Google Earth.' },
        kt: { name: 'Fichiers d\'échantillon Kotlin', description: 'Téléchargez des fichiers d\'échantillon Kotlin source code gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de compilation Kotlin, l\'analyse de code Kotlin et les logiciels de développement Android et multiplateforme.' },
        las: { name: 'Fichiers d\'échantillon LAS', description: 'Téléchargez des fichiers d\'échantillon LAS LiDAR point cloud data gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de traitement de nuages de points, la conversion LAS et les logiciels de télédétection et cartographie 3D.' },
        log: { name: 'Fichiers d\'échantillon LOG', description: 'Téléchargez des fichiers d\'échantillon LOG gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'analyse de logs, l\'analyse de logs et les logiciels de surveillance système.' },
        lua: { name: 'Fichiers d\'échantillon Lua', description: 'Téléchargez des fichiers d\'échantillon Lua source code gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils d\'exécution Lua, l\'analyse de code Lua et les logiciels de développement de scripts et jeux vidéo.' },
        m3u: { name: 'Fichiers d\'échantillon M3U', description: 'Téléchargez des fichiers d\'échantillon M3U playlist gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de lecture de playlists, l\'analyse M3U et les logiciels de lecture multimédia et streaming audio.' },
        m3u8: { name: 'Fichiers d\'échantillon M3U8', description: 'Téléchargez des fichiers d\'échantillon M3U8 HLS playlist gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de streaming HLS, l\'analyse M3U8 et les logiciels de streaming vidéo et diffusion en direct.' },
        m4v: { name: 'Fichiers d\'échantillon M4V', description: 'Téléchargez des fichiers d\'échantillon M4V MPEG-4 video gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion vidéo MPEG-4, les lecteurs M4V et les logiciels de traitement vidéo Apple et iTunes.' },
        makefile: { name: 'Fichiers d\'échantillon Makefile', description: 'Téléchargez des fichiers d\'échantillon Makefile gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de build automatisé, l\'analyse Makefile et les logiciels de compilation et développement système.' },
        ma: { name: 'Fichiers d\'échantillon MA', description: 'Téléchargez des fichiers d\'échantillon MA Maya ASCII gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de scènes Maya, l\'analyse de fichiers MA et les logiciels d\'animation 3D.' },
        max: { name: 'Fichiers d\'échantillon MAX', description: 'Téléchargez des fichiers d\'échantillon MAX 3ds Max gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de modèles 3D, les visualiseurs MAX et les logiciels de modélisation 3D professionnels et animation.' },
        mb: { name: 'Fichiers d\'échantillon MB', description: 'Téléchargez des fichiers d\'échantillon MB Maya Binary gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de scènes Maya, les visualiseurs MB et les logiciels de modélisation 3D et animation professionnels.' },
        mbtiles: { name: 'Fichiers d\'échantillon MBTiles', description: 'Téléchargez des fichiers d\'échantillon MBTiles MapBox tiles gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de visualisation de cartes, l\'extraction MBTiles et les logiciels de cartographie web et applications mobiles.' },
        mdx: { name: 'Fichiers d\'échantillon MDX', description: 'Téléchargez des fichiers d\'échantillon MDX Markdown Extended gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de traitement de documentation, l\'analyse MDX et les logiciels de développement web et génération de sites statiques.' }
      }
    }
  },
  it: {
    samples_page: {
      meta: {
        title: 'File di esempio gratuiti – Scarica file di test | MorphyHub',
        description: 'Ottieni file di esempio gratuiti di immagini, documenti e archivi per testare i convertitori, compressori e visualizzatori di MorphyHub.',
        keywords: 'file di esempio, file di test, scarica esempi, file di test gratuiti, esempi DOCX, esempi di file, file di test per conversione'
      },
      schema: {
        name: 'File di esempio gratuiti da scaricare e testare',
        description: 'Scarica file di esempio gratuiti di vari tipi — immagini, documenti, audio, video e archivi. Usali per test, demo o validazione software su qualsiasi piattaforma.'
      },
      hero: {
        title: 'File di esempio',
        description: 'Scarica file di esempio gratuiti per i test. Dimensioni multiple disponibili per vari formati per testare i tuoi strumenti di conversione e elaborazione.'
      },
      back_button: 'Torna alla home',
      search: {
        placeholder: 'Cerca file di esempio... (es. DOCX, JPG, PDF)',
        results: 'Trovato {{count}} file di esempio',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'ESEMPI DI DOCUMENTI',
        data: 'ESEMPI DI DATI',
        application: 'ESEMPI DI APPLICAZIONI',
        design_3d: 'ESEMPI 3D E DI PROGETTAZIONE',
        image_video: 'ESEMPI DI IMMAGINI E VIDEO',
        audio: 'ESEMPI AUDIO',
        archive: 'ESEMPI DI ARCHIVI'
      },
      actions: { download: 'Scarica' },
      no_results: {
        title: 'Nessun file di esempio trovato',
        description: 'Prova a cercare qualcosa come "DOCX" o "JPG"',
        clear: 'Cancella ricerca'
      },
      features: {
        title: 'Perché scegliere i nostri file di esempio?',
        items: [
          { title: 'Accesso gratuito e facile', description: 'Scarica file di esempio istantaneamente senza registrazione o pagamento.' },
          { title: 'Dimensioni multiple', description: 'Scegli tra varie dimensioni di file (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) per test completi.' },
          { title: 'Grande varietà', description: 'Accedi a esempi in più categorie: documenti, immagini, audio, video, archivi e altro.' }
        ]
      },
      format_description_template: 'Scarica file di esempio {{format}} gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare {{purpose}}.',
      formats: {
        docx: { name: 'File di esempio DOCX', description: 'Scarica file di esempio DOCX gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti di conversione documenti.' },
        doc: { name: 'File di esempio DOC', description: 'Scarica file di esempio DOC gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti di conversione documenti.' },
        pdf: { name: 'File di esempio PDF', description: 'Scarica file di esempio PDF gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti di conversione documenti.' },
        odp: { name: 'File di esempio ODP', description: 'Scarica file di esempio ODP OpenDocument Presentation gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti di conversione e visualizzazione presentazioni.' },
        rtf: { name: 'File di esempio RTF', description: 'Scarica file di esempio RTF (Rich Text Format) gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti di conversione e visualizzazione documenti.' },
        epub: { name: 'File di esempio EPUB', description: 'Scarica file di esempio EPUB gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare lettori eBook, conversione EPUB e strumenti pubblicazione digitale.' },
        'invoice-pdf': { name: 'File di esempio PDF fatture', description: 'Scarica file di esempio PDF fatture gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare elaborazione fatture PDF, parsing fatture e strumenti gestione documenti.' },
        mobi: { name: 'File di esempio MOBI', description: 'Scarica file di esempio MOBI gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare conversione eBook MOBI, lettura MOBI e strumenti elaborazione eBook.' },
        csv: { name: 'File di esempio CSV', description: 'Scarica file di esempio CSV gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione CSV e elaborazione dati.' },
        xls: { name: 'File di esempio XLS', description: 'Scarica file di esempio XLS gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione Excel e elaborazione dati.' },
        xlsx: { name: 'File di esempio XLSX', description: 'Scarica file di esempio XLSX gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione Excel e elaborazione dati.' },
        xml: { name: 'File di esempio XML', description: 'Scarica file di esempio XML gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti parsing XML e conversione dati.' },
        html: { name: 'File di esempio HTML', description: 'Scarica file di esempio HTML gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare parsing HTML, sviluppo web e strumenti validazione HTML.' },
        ods: { name: 'File di esempio ODS', description: 'Scarica file di esempio ODS OpenDocument Spreadsheet gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione fogli di calcolo e elaborazione dati.' },
        'ansible-yml': { name: 'File di esempio Ansible YML', description: 'Scarica file di esempio Ansible YML gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti parsing YAML e gestione configurazione.' },
        'api-response-json': { name: 'File di esempio JSON risposta API', description: 'Scarica file di esempio JSON risposta API gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti parsing JSON e gestione risposte API.' },
        'arduino-ino': { name: 'File di esempio Arduino INO', description: 'Scarica file di esempio Arduino INO gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti compilazione codice Arduino e verifica sintassi.' },
        asc: { name: 'File di esempio ASC', description: 'Scarica file di esempio ASC (ASCII) gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti elaborazione file testo e codifica ASCII.' },
        bat: { name: 'File di esempio BAT', description: 'Scarica file di esempio BAT gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti esecuzione script batch e automazione Windows.' },
        bib: { name: 'File di esempio BIB', description: 'Scarica file di esempio BIB (BibTeX) gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti gestione bibliografie e elaborazione citazioni.' },
        c: { name: 'File di esempio C', description: 'Scarica file di esempio C gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti compilazione codice C e verifica sintassi.' },
        'can-log': { name: 'File di esempio CAN Log', description: 'Scarica file di esempio CAN log gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti analisi bus CAN e parsing log.' },
        cmd: { name: 'File di esempio CMD', description: 'Scarica file di esempio CMD gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti esecuzione script comandi e automazione Windows.' },
        conf: { name: 'File di esempio CONF', description: 'Scarica file di esempio CONF gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti parsing file configurazione e setup sistema.' },
        'config-ini': { name: 'File di esempio Config INI', description: 'Scarica file di esempio Config INI gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti parsing file INI e gestione configurazione.' },
        cpp: { name: 'File di esempio C++', description: 'Scarica file di esempio C++ gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti compilazione codice C++ e verifica sintassi.' },
        crx: { name: 'File di esempio CRX', description: 'Scarica file di esempio CRX gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare installazione estensioni Chrome, analisi CRX e strumenti sviluppo estensioni browser.' },
        cs: { name: 'File di esempio C#', description: 'Scarica file di esempio C# gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti compilazione codice C# e verifica sintassi.' },
        gz: { name: 'File di esempio GZ', description: 'Scarica file di esempio GZ (gzip) gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare decompressione gzip, estrazione archivi e strumenti compressione file.' },
        h: { name: 'File di esempio C Header', description: 'Scarica file di esempio C Header gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti compilazione codice C e elaborazione file header.' },
        hdr: { name: 'File di esempio HDR', description: 'Scarica file di esempio HDR (High Dynamic Range) gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare elaborazione immagini HDR, conversione HDR e strumenti visualizzazione alto range dinamico.' },
        heic: { name: 'File di esempio HEIC', description: 'Scarica file di esempio HEIC gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare conversione immagini HEIC, visualizzazione HEIC e strumenti elaborazione formati immagine moderni.' },
        heif: { name: 'File di esempio HEIF', description: 'Scarica file di esempio HEIF gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare conversione immagini HEIF, visualizzazione HEIF e strumenti elaborazione formati immagine moderni.' },
        hex: { name: 'File di esempio HEX', description: 'Scarica file di esempio HEX (esadecimale) gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare parsing file esadecimali, programmazione firmware e strumenti sviluppo sistemi embedded.' },
        hpp: { name: 'File di esempio C++ Header', description: 'Scarica file di esempio C++ Header gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti compilazione codice C++ e elaborazione file header.' },
        css: { name: 'File di esempio CSS', description: 'Scarica file di esempio CSS gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti parsing CSS, sviluppo web e validazione CSS.' },
        js: { name: 'File di esempio JavaScript', description: 'Scarica file di esempio JavaScript gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti parsing JavaScript, sviluppo web e validazione codice.' },
        json: { name: 'File di esempio JSON', description: 'Scarica file di esempio JSON gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti parsing JSON, elaborazione dati e validazione schemi.' },
        md: { name: 'File di esempio Markdown', description: 'Scarica file di esempio Markdown gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti elaborazione Markdown, conversione documenti e generazione documentazione.' },
        py: { name: 'File di esempio Python', description: 'Scarica file di esempio Python gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti compilazione codice Python e verifica sintassi.' },
        sh: { name: 'File di esempio Shell Script', description: 'Scarica file di esempio Shell Script gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti esecuzione script shell e automazione sistemi Unix/Linux.' },
        sql: { name: 'File di esempio SQL', description: 'Scarica file di esempio SQL gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti parsing SQL, gestione database e validazione query.' },
        ts: { name: 'File di esempio TypeScript', description: 'Scarica file di esempio TypeScript gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti compilazione codice TypeScript e verifica tipi.' },
        yml: { name: 'File di esempio YML', description: 'Scarica file di esempio YML gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti parsing YAML e gestione configurazione.' },
        jpg: { name: 'File di esempio JPG', description: 'Scarica file di esempio JPG gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione immagini, elaborazione immagini e ottimizzazione web.' },
        png: { name: 'File di esempio PNG', description: 'Scarica file di esempio PNG gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione immagini, elaborazione immagini e grafica web.' },
        gif: { name: 'File di esempio GIF', description: 'Scarica file di esempio GIF gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione immagini, elaborazione immagini e animazioni web.' },
        webp: { name: 'File di esempio WebP', description: 'Scarica file di esempio WebP gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione immagini, elaborazione immagini e ottimizzazione web moderna.' },
        svg: { name: 'File di esempio SVG', description: 'Scarica file di esempio SVG gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione grafica vettoriale, elaborazione SVG e design web.' },
        bmp: { name: 'File di esempio BMP', description: 'Scarica file di esempio BMP gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione immagini, elaborazione immagini e compatibilità formati.' },
        ico: { name: 'File di esempio ICO', description: 'Scarica file di esempio ICO gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione icone, elaborazione icone e sviluppo applicazioni.' },
        tiff: { name: 'File di esempio TIFF', description: 'Scarica file di esempio TIFF gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione immagini, elaborazione immagini e editing professionale.' },
        tif: { name: 'File di esempio TIF', description: 'Scarica file di esempio TIF gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione immagini, elaborazione immagini e editing professionale.' },
        avif: { name: 'File di esempio AVIF', description: 'Scarica file di esempio AVIF gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione immagini, elaborazione immagini e ottimizzazione web next-gen.' },
        mp4: { name: 'File di esempio MP4', description: 'Scarica file di esempio MP4 gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione video, elaborazione video e riproduzione multimediale.' },
        avi: { name: 'File di esempio AVI', description: 'Scarica file di esempio AVI gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione video, elaborazione video e compatibilità formati.' },
        mov: { name: 'File di esempio MOV', description: 'Scarica file di esempio MOV gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione video, elaborazione video e editing video.' },
        wmv: { name: 'File di esempio WMV', description: 'Scarica file di esempio WMV gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione video, elaborazione video e compatibilità formati Windows.' },
        flv: { name: 'File di esempio FLV', description: 'Scarica file di esempio FLV gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione video, elaborazione video e streaming web.' },
        webm: { name: 'File di esempio WebM', description: 'Scarica file di esempio WebM gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione video, elaborazione video e video web moderno.' },
        mkv: { name: 'File di esempio MKV', description: 'Scarica file di esempio MKV gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione video, elaborazione video e contenitori multimediali.' },
        mp3: { name: 'File di esempio MP3', description: 'Scarica file di esempio MP3 gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio, elaborazione audio e riproduzione multimediale.' },
        wav: { name: 'File di esempio WAV', description: 'Scarica file di esempio WAV gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio, elaborazione audio e audio lossless.' },
        flac: { name: 'File di esempio FLAC', description: 'Scarica file di esempio FLAC gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio, elaborazione audio e audio alta qualità.' },
        ogg: { name: 'File di esempio OGG', description: 'Scarica file di esempio OGG gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio, elaborazione audio e audio open source.' },
        wma: { name: 'File di esempio WMA', description: 'Scarica file di esempio WMA gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio, elaborazione audio e compatibilità formati Windows.' },
        aac: { name: 'File di esempio AAC', description: 'Scarica file di esempio AAC gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio, elaborazione audio e audio alta efficienza.' },
        m4a: { name: 'File di esempio M4A', description: 'Scarica file di esempio M4A gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio, elaborazione audio e audio contenitore MPEG-4.' },
        midi: { name: 'File di esempio MIDI', description: 'Scarica file di esempio MIDI gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti elaborazione MIDI, sintesi musicale e produzione musicale.' },
        cue: { name: 'File di esempio CUE', description: 'Scarica file di esempio CUE gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare parsing fogli CUE, masterizzazione CD audio e strumenti authoring CD.' },
        zip: { name: 'File di esempio ZIP', description: 'Scarica file di esempio ZIP gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti estrazione archivi, compressione file e gestione file.' },
        rar: { name: 'File di esempio RAR', description: 'Scarica file di esempio RAR gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti estrazione archivi, compressione file e gestione file.' },
        '7z': { name: 'File di esempio 7Z', description: 'Scarica file di esempio 7Z gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione archivi e estrazione.' },
        tar: { name: 'File di esempio TAR', description: 'Scarica file di esempio TAR gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti estrazione archivi, compressione file e gestione file Unix/Linux.' },
        ace: { name: 'File di esempio ACE', description: 'Scarica file di esempio ACE gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti estrazione archivi, compressione file e gestione file.' },
        arj: { name: 'File di esempio ARJ', description: 'Scarica file di esempio ARJ gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti estrazione archivi, compressione file e gestione file legacy.' },
        bz2: { name: 'File di esempio BZ2', description: 'Scarica file di esempio BZ2 (bzip2) gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare decompressione bzip2, estrazione archivi e strumenti compressione file.' },
        cab: { name: 'File di esempio CAB', description: 'Scarica file di esempio CAB gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti estrazione archivi CAB, installazione software Windows e gestione file.' },
        cpio: { name: 'File di esempio CPIO', description: 'Scarica file di esempio CPIO gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti estrazione archivi CPIO, compressione file e gestione file Unix.' },
        dmg: { name: 'File di esempio DMG', description: 'Scarica file di esempio DMG gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti montaggio immagini disco, installazione software macOS e gestione file.' },
        img: { name: 'File di esempio IMG', description: 'Scarica file di esempio IMG gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti montaggio immagini disco, creazione immagini disco e gestione file.' },
        iso: { name: 'File di esempio ISO', description: 'Scarica file di esempio ISO gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti montaggio immagini disco, masterizzazione CD/DVD e gestione file.' },
        kmz: { name: 'File di esempio KMZ', description: 'Scarica file di esempio KMZ gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti estrazione KMZ, elaborazione dati geografici e integrazione Google Earth.' },
        laz: { name: 'File di esempio LAZ', description: 'Scarica file di esempio LAZ gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti estrazione LAZ, elaborazione nuvole punti LiDAR e strumenti mappatura 3D.' },
        lha: { name: 'File di esempio LHA', description: 'Scarica file di esempio LHA gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti estrazione LHA, decompressione archivi e strumenti archiviazione file.' },
        lzh: { name: 'File di esempio LZH', description: 'Scarica file di esempio LZH gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti estrazione LZH, decompressione archivi e strumenti archiviazione file.' },
        lzma: { name: 'File di esempio LZMA', description: 'Scarica file di esempio LZMA gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti decompressione LZMA, estrazione archivi e compressione file.' },
        '3ds': { name: 'File di esempio 3DS', description: 'Scarica file di esempio 3DS gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione modelli 3D, visualizzatori 3DS e software modellazione 3D.' },
        '3gp': { name: 'File di esempio 3GP', description: 'Scarica file di esempio 3GP gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione video mobile, lettori 3GP e applicazioni elaborazione video smartphone.' },
        '3mf': { name: 'File di esempio 3MF', description: 'Scarica file di esempio 3MF gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti stampa 3D, convertitori 3MF e software fabbricazione additiva.' },
        ac3: { name: 'File di esempio AC3', description: 'Scarica file di esempio AC3 Dolby Digital gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio Dolby, decoder AC3 e software elaborazione audio surround.' },
        ai: { name: 'File di esempio AI', description: 'Scarica file di esempio AI Adobe Illustrator gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione grafica vettoriale, visualizzatori AI e software design grafico.' },
        aif: { name: 'File di esempio AIF', description: 'Scarica file di esempio AIF Audio Interchange File Format gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio non compresso, lettori AIF e software produzione audio professionale.' },
        aiff: { name: 'File di esempio AIFF', description: 'Scarica file di esempio AIFF Audio Interchange File Format gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio alta qualità, lettori AIFF e software mastering audio.' },
        amr: { name: 'File di esempio AMR', description: 'Scarica file di esempio AMR Adaptive Multi-Rate gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio mobile, decoder AMR e applicazioni elaborazione audio telefoni.' },
        'animated-gif': { name: 'File di esempio GIF animato', description: 'Scarica file di esempio GIF animato gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione animazione GIF, visualizzatori GIF animati e software creazione animazioni web.' },
        'animation-fbx': { name: 'File di esempio Animazione FBX', description: 'Scarica file di esempio Animazione FBX gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione animazione 3D, visualizzatori FBX e software produzione animazione professionale.' },
        apk: { name: 'File di esempio APK', description: 'Scarica file di esempio APK Android gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti installazione applicazioni Android, analisi APK e software sviluppo applicazioni mobili.' },
        apng: { name: 'File di esempio APNG', description: 'Scarica file di esempio APNG PNG animato gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione PNG animato, visualizzatori APNG e software creazione animazioni web moderne.' },
        appimage: { name: 'File di esempio AppImage', description: 'Scarica file di esempio AppImage Linux gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti esecuzione applicazioni Linux portatili, installazione AppImage e software distribuzione applicazioni Linux.' },
        ase: { name: 'File di esempio ASE', description: 'Scarica file di esempio ASE Adobe Swatch Exchange gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione palette colori, visualizzatori ASE e software design grafico professionale.' },
        assetbundle: { name: 'File di esempio AssetBundle', description: 'Scarica file di esempio AssetBundle Unity gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti caricamento assets Unity, estrazione AssetBundle e software sviluppo giochi Unity.' },
        'barcode-svg': { name: 'File di esempio Codice a barre SVG', description: 'Scarica file di esempio codice a barre SVG gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti scansione codice a barre, conversione SVG e software generazione codici a barre vettoriali.' },
        blend: { name: 'File di esempio BLEND', description: 'Scarica file di esempio BLEND Blender gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione modelli 3D Blender, visualizzatori BLEND e software modellazione 3D open source.' },
        bvh: { name: 'File di esempio BVH', description: 'Scarica file di esempio BVH motion capture gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti elaborazione motion capture, conversione animazione BVH e software produzione animazione cinematica.' },
        caf: { name: 'File di esempio CAF', description: 'Scarica file di esempio CAF Core Audio Format gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione audio macOS, lettori CAF e software elaborazione audio Apple.' },
        csr: { name: 'File di esempio CSR', description: 'Scarica file di esempio CSR Certificate Signing Request gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti gestione certificati SSL, analisi CSR e software sicurezza rete e crittografia.' },
        'customer-database-sql': { name: 'File di esempio Database Cliente SQL', description: 'Scarica file di esempio database cliente SQL gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti gestione database, analisi SQL e software gestione dati clienti e CRM.' },
        dav: { name: 'File di esempio DAV', description: 'Scarica file di esempio DAV video gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione video DAV, lettori DAV e software elaborazione video sorveglianza e sicurezza.' },
        dbf: { name: 'File di esempio DBF', description: 'Scarica file di esempio DBF dBase gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione database dBase, analisi DBF e software gestione dati legacy.' },
        dds: { name: 'File di esempio DDS', description: 'Scarica file di esempio DDS DirectDraw Surface gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione texture immagini, visualizzatori DDS e software sviluppo giochi e grafica 3D.' },
        dem: { name: 'File di esempio DEM', description: 'Scarica file di esempio DEM Digital Elevation Model gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti elaborazione dati elevazione, conversione DEM e software cartografia e GIS.' },
        der: { name: 'File di esempio DER', description: 'Scarica file di esempio DER certificato codificato gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti gestione certificati, analisi DER e software sicurezza e crittografia.' },
        dmp: { name: 'File di esempio DMP', description: 'Scarica file di esempio DMP memory dump gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti analisi memoria, debug DMP e software diagnostica sistema e forensics.' },
        dng: { name: 'File di esempio DNG', description: 'Scarica file di esempio DNG Digital Negative raw image gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti elaborazione immagini raw, conversione DNG e software fotografia professionale e fotoritocco.' },
        'docker-compose-yml': { name: 'File di esempio Docker Compose YML', description: 'Scarica file di esempio Docker Compose YML gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti configurazione Docker, analisi YAML e software containerizzazione e orchestrazione Docker.' },
        dockerfile: { name: 'File di esempio Dockerfile', description: 'Scarica file di esempio Dockerfile gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti build Docker, analisi Dockerfile e software sviluppo e deployment container.' },
        dwg: { name: 'File di esempio DWG', description: 'Scarica file di esempio DWG AutoCAD gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione disegni AutoCAD, visualizzatori DWG e software CAD professionale e architettura.' },
        dxf: { name: 'File di esempio DXF', description: 'Scarica file di esempio DXF Drawing Exchange Format gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione disegni CAD, visualizzatori DXF e software scambio file disegno e ingegneria.' },
        editorconfig: { name: 'File di esempio EditorConfig', description: 'Scarica file di esempio EditorConfig gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti configurazione editor codice, analisi EditorConfig e software sviluppo e formattazione codice.' },
        elf: { name: 'File di esempio ELF', description: 'Scarica file di esempio ELF Executable and Linkable Format gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti analisi binari Linux, analisi ELF e software sviluppo sistema e reverse engineering.' },
        eps: { name: 'File di esempio EPS', description: 'Scarica file di esempio EPS Encapsulated PostScript gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione grafica vettoriale, visualizzatori EPS e software design grafico e stampa professionale.' },
        exe: { name: 'File di esempio EXE', description: 'Scarica file di esempio EXE Windows eseguibile gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti analisi binari Windows, analisi EXE e software sviluppo Windows e sicurezza.' },
        exr: { name: 'File di esempio EXR', description: 'Scarica file di esempio EXR OpenEXR high dynamic range image gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti elaborazione immagini HDR, conversione EXR e software visualizzazione alta gamma dinamica e VFX.' },
        icns: { name: 'File di esempio ICNS', description: 'Scarica file di esempio ICNS macOS icon gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione icone macOS, visualizzatori ICNS e software design icone e sviluppo macOS.' },
        ifc: { name: 'File di esempio IFC', description: 'Scarica file di esempio IFC Industry Foundation Classes gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione BIM, visualizzatori IFC e software modellazione informazioni edificio e architettura.' },
        iges: { name: 'File di esempio IGES', description: 'Scarica file di esempio IGES Initial Graphics Exchange Specification gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione modelli CAD, visualizzatori IGES e software scambio modelli 3D e ingegneria.' },
        igs: { name: 'File di esempio IGS', description: 'Scarica file di esempio IGS Initial Graphics Exchange Specification gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione modelli CAD, visualizzatori IGS e software scambio file disegno e ingegneria meccanica.' },
        indd: { name: 'File di esempio INDD', description: 'Scarica file di esempio INDD Adobe InDesign gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione layout, visualizzatori INDD e software pubblicazione e design editoriale professionale.' },
        ini: { name: 'File di esempio INI', description: 'Scarica file di esempio INI gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti analisi file INI, gestione configurazione e software elaborazione file impostazioni.' },
        intelhex: { name: 'File di esempio Intel HEX', description: 'Scarica file di esempio Intel HEX gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti programmazione microcontrollori, analisi Intel HEX e software sviluppo embedded e firmware.' },
        ipa: { name: 'File di esempio IPA', description: 'Scarica file di esempio IPA iOS App Store Package gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti installazione applicazioni iOS, analisi IPA e software sviluppo applicazioni mobili Apple.' },
        ipynb: { name: 'File di esempio IPYNB', description: 'Scarica file di esempio IPYNB Jupyter Notebook gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti esecuzione notebook Jupyter, analisi IPYNB e software scienza dati e analisi interattiva.' },
        jar: { name: 'File di esempio JAR', description: 'Scarica file di esempio JAR Java Archive gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti esecuzione Java, estrazione JAR e software sviluppo Java e deployment applicazioni.' },
        java: { name: 'File di esempio Java', description: 'Scarica file di esempio Java source code gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti compilazione Java, analisi codice Java e software sviluppo Java e IDE.' },
        jks: { name: 'File di esempio JKS', description: 'Scarica file di esempio JKS Java KeyStore gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti gestione chiavi Java, analisi JKS e software sicurezza Java e crittografia.' },
        jpeg: { name: 'File di esempio JPEG', description: 'Scarica file di esempio JPEG Joint Photographic Experts Group gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione immagini JPEG, elaborazione immagini e software fotografia digitale e ottimizzazione web.' },
        jsonl: { name: 'File di esempio JSONL', description: 'Scarica file di esempio JSONL JSON Lines gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti elaborazione dati JSON, analisi JSONL e software elaborazione dati streaming e big data.' },
        jsx: { name: 'File di esempio JSX', description: 'Scarica file di esempio JSX React JavaScript XML gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti compilazione React, analisi JSX e software sviluppo React e frontend.' },
        jwt: { name: 'File di esempio JWT', description: 'Scarica file di esempio JWT JSON Web Token gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti autenticazione JWT, analisi JWT e software sicurezza web e API.' },
        key: { name: 'File di esempio KEY', description: 'Scarica file di esempio KEY chiave privata gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti gestione chiavi crittografiche, analisi KEY e software sicurezza e crittografia.' },
        kml: { name: 'File di esempio KML', description: 'Scarica file di esempio KML Keyhole Markup Language gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti visualizzazione geografica, analisi KML e software cartografia e Google Earth.' },
        kt: { name: 'File di esempio Kotlin', description: 'Scarica file di esempio Kotlin source code gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti compilazione Kotlin, analisi codice Kotlin e software sviluppo Android e multipiattaforma.' },
        las: { name: 'File di esempio LAS', description: 'Scarica file di esempio LAS LiDAR point cloud data gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti elaborazione nuvole di punti, conversione LAS e software telerilevamento e cartografia 3D.' },
        log: { name: 'File di esempio LOG', description: 'Scarica file di esempio LOG gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti analisi log, analisi log e software monitoraggio sistema.' },
        lua: { name: 'File di esempio Lua', description: 'Scarica file di esempio Lua source code gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti esecuzione Lua, analisi codice Lua e software sviluppo script e videogiochi.' },
        m3u: { name: 'File di esempio M3U', description: 'Scarica file di esempio M3U playlist gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti riproduzione playlist, analisi M3U e software lettura multimediale e streaming audio.' },
        m3u8: { name: 'File di esempio M3U8', description: 'Scarica file di esempio M3U8 HLS playlist gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti streaming HLS, analisi M3U8 e software streaming video e trasmissione live.' },
        m4v: { name: 'File di esempio M4V', description: 'Scarica file di esempio M4V MPEG-4 video gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione video MPEG-4, lettori M4V e software elaborazione video Apple e iTunes.' },
        makefile: { name: 'File di esempio Makefile', description: 'Scarica file di esempio Makefile gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti build automatizzato, analisi Makefile e software compilazione e sviluppo sistema.' },
        ma: { name: 'File di esempio MA', description: 'Scarica file di esempio MA Maya ASCII gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione scene Maya, analisi file MA e software animazione 3D.' },
        max: { name: 'File di esempio MAX', description: 'Scarica file di esempio MAX 3ds Max gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione modelli 3D, visualizzatori MAX e software modellazione 3D professionale e animazione.' },
        mb: { name: 'File di esempio MB', description: 'Scarica file di esempio MB Maya Binary gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti conversione scene Maya, visualizzatori MB e software modellazione 3D e animazione professionale.' },
        mbtiles: { name: 'File di esempio MBTiles', description: 'Scarica file di esempio MBTiles MapBox tiles gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti visualizzazione mappe, estrazione MBTiles e software cartografia web e applicazioni mobili.' },
        mdx: { name: 'File di esempio MDX', description: 'Scarica file di esempio MDX Markdown Extended gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti elaborazione documentazione, analisi MDX e software sviluppo web e generazione siti statici.' }
      }
    }
  },
  nl: {
    samples_page: {
      meta: {
        title: 'Gratis voorbeeldbestanden – Download testbestanden | MorphyHub',
        description: 'Krijg gratis voorbeeldbestanden van afbeeldingen, documenten en archieven om MorphyHub converters, compressors en viewers te testen.',
        keywords: 'voorbeeldbestanden, testbestanden, download voorbeelden, gratis testbestanden, DOCX voorbeelden, bestandsvoorbeelden, testbestanden voor conversie'
      },
      schema: {
        name: 'Gratis voorbeeldbestanden om te downloaden en testen',
        description: 'Download gratis voorbeeldbestanden van verschillende typen — afbeeldingen, documenten, audio, video en archieven. Gebruik ze voor tests, demo\'s of softwarevalidatie op elk platform.'
      },
      hero: {
        title: 'Voorbeeldbestanden',
        description: 'Download gratis voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar voor verschillende formaten om uw conversie- en verwerkingstools te testen.'
      },
      back_button: 'Terug naar startpagina',
      search: {
        placeholder: 'Zoek voorbeeldbestanden... (bijv. DOCX, JPG, PDF)',
        results: '{{count}} voorbeeldbestand(en) gevonden',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'DOCUMENTVOORBEELDEN',
        data: 'DATAVOORBEELDEN',
        application: 'APPLICATIEVOORBEELDEN',
        design_3d: '3D & ONTWERP VOORBEELDEN',
        image_video: 'AFBEELDING & VIDEO VOORBEELDEN',
        audio: 'AUDIO VOORBEELDEN',
        archive: 'ARCHIEFVOORBEELDEN'
      },
      actions: { download: 'Downloaden' },
      no_results: {
        title: 'Geen voorbeeldbestanden gevonden',
        description: 'Probeer te zoeken naar iets zoals "DOCX" of "JPG"',
        clear: 'Zoekopdracht wissen'
      },
      features: {
        title: 'Waarom onze voorbeeldbestanden kiezen?',
        items: [
          { title: 'Gratis en gemakkelijk toegankelijk', description: 'Download voorbeeldbestanden direct zonder registratie of betaling.' },
          { title: 'Meerdere groottes', description: 'Kies uit verschillende bestandsgroottes (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) voor uitgebreide tests.' },
          { title: 'Grote verscheidenheid', description: 'Toegang tot voorbeelden in meerdere categorieën: documenten, afbeeldingen, audio, video, archieven en meer.' }
        ]
      },
      format_description_template: 'Download gratis {{format}} voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van {{purpose}}.',
      formats: {
        docx: { name: 'DOCX Voorbeeldbestanden', description: 'Download gratis DOCX voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van documentconversietools.' },
        doc: { name: 'DOC Voorbeeldbestanden', description: 'Download gratis DOC voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van documentconversietools.' },
        pdf: { name: 'PDF Voorbeeldbestanden', description: 'Download gratis PDF voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van documentconversietools.' },
        odp: { name: 'ODP Voorbeeldbestanden', description: 'Download gratis ODP OpenDocument-presentatie voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van presentatieconversie- en weergavetools.' },
        rtf: { name: 'RTF Voorbeeldbestanden', description: 'Download gratis RTF (Rich Text Format) voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van documentconversie- en weergavetools.' },
        epub: { name: 'EPUB Voorbeeldbestanden', description: 'Download gratis EPUB voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van e-boeklezers, EPUB-conversie en digitale publicatietools.' },
        'invoice-pdf': { name: 'Factuur PDF Voorbeeldbestanden', description: 'Download gratis factuur PDF voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van PDF-factuurverwerking, factuurparsing en documentbeheertools.' },
        mobi: { name: 'MOBI Voorbeeldbestanden', description: 'Download gratis MOBI voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van MOBI e-boekconversie, MOBI-lezen en e-boekverwerkingstools.' },
        csv: { name: 'CSV Voorbeeldbestanden', description: 'Download gratis CSV voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van CSV-conversie en gegevensverwerkingstools.' },
        xls: { name: 'XLS Voorbeeldbestanden', description: 'Download gratis XLS voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van Excel-conversie en gegevensverwerkingstools.' },
        xlsx: { name: 'XLSX Voorbeeldbestanden', description: 'Download gratis XLSX voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van Excel-conversie en gegevensverwerkingstools.' },
        xml: { name: 'XML Voorbeeldbestanden', description: 'Download gratis XML voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van XML-parsing en gegevensconversietools.' },
        html: { name: 'HTML Voorbeeldbestanden', description: 'Download gratis HTML voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van HTML-parsing, webontwikkeling en HTML-validatietools.' },
        ods: { name: 'ODS Voorbeeldbestanden', description: 'Download gratis ODS OpenDocument-spreadsheet voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van spreadsheetconversie en gegevensverwerkingstools.' },
        'ansible-yml': { name: 'Ansible YML Voorbeeldbestanden', description: 'Download gratis Ansible YML voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van YAML-parsing en configuratiebeheertools.' },
        'api-response-json': { name: 'API Response JSON Voorbeeldbestanden', description: 'Download gratis API-response JSON voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van JSON-parsing en API-response handlingtools.' },
        'arduino-ino': { name: 'Arduino INO Voorbeeldbestanden', description: 'Download gratis Arduino INO voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van Arduino-codecompilatie en syntaxiscontroletools.' },
        asc: { name: 'ASC Voorbeeldbestanden', description: 'Download gratis ASC (ASCII) voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van tekstbestandsverwerking en ASCII-coderingtools.' },
        bat: { name: 'BAT Voorbeeldbestanden', description: 'Download gratis BAT batchscript voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van batchscriptuitvoering en Windows-automatiseringstools.' },
        bib: { name: 'BIB Voorbeeldbestanden', description: 'Download gratis BIB (BibTeX) bibliografie voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van bibliografiebeheer en citatieverwerkingstools.' },
        c: { name: 'C Voorbeeldbestanden', description: 'Download gratis C broncode voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van C-codecompilatie en syntaxiscontroletools.' },
        'can-log': { name: 'CAN Log Voorbeeldbestanden', description: 'Download gratis CAN-log voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van CAN-busanalyse en logparsingtools.' },
        cmd: { name: 'CMD Voorbeeldbestanden', description: 'Download gratis CMD commandoscript voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van commandoscriptuitvoering en Windows-automatiseringstools.' },
        conf: { name: 'CONF Voorbeeldbestanden', description: 'Download gratis CONF configuratiebestand voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van configuratiebestandparsing en systeeminsteltools.' },
        'config-ini': { name: 'Config INI Voorbeeldbestanden', description: 'Download gratis Config INI INI-configuratiebestand voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van INI-bestandparsing en configuratiebeheertools.' },
        cpp: { name: 'C++ Voorbeeldbestanden', description: 'Download gratis C++ broncode voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van C++-codecompilatie en syntaxiscontroletools.' },
        crx: { name: 'CRX Voorbeeldbestanden', description: 'Download gratis CRX Chrome-extensiepakket voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van Chrome-extensie-installatie, CRX-analyse en browserextensie-ontwikkeltools.' },
        cs: { name: 'C# Voorbeeldbestanden', description: 'Download gratis C# broncode voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van C#-codecompilatie en syntaxiscontroletools.' },
        gz: { name: 'GZ Voorbeeldbestanden', description: 'Download gratis GZ (gzip) gecomprimeerde archief voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van gzip-decompressie, archiefextractie en bestandscompressietools.' },
        h: { name: 'C Header Voorbeeldbestanden', description: 'Download gratis C-header voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van C-codecompilatie en headerbestandsverwerkingstools.' },
        hdr: { name: 'HDR Voorbeeldbestanden', description: 'Download gratis HDR (High Dynamic Range) afbeeldingsvoorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van HDR-afbeeldingsverwerking, HDR-conversie en hoog dynamisch bereik-weergavetools.' },
        heic: { name: 'HEIC Voorbeeldbestanden', description: 'Download gratis HEIC (High Efficiency Image Container) voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van HEIC-afbeeldingsconversie, HEIC-weergave en moderne afbeeldingsformaatverwerkingstools.' },
        heif: { name: 'HEIF Voorbeeldbestanden', description: 'Download gratis HEIF (High Efficiency Image Format) voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van HEIF-afbeeldingsconversie, HEIF-weergave en moderne afbeeldingsformaatverwerkingstools.' },
        hex: { name: 'HEX Voorbeeldbestanden', description: 'Download gratis HEX (hexadecimaal) voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van hexadecimaal bestandsparsing, firmwareprogrammering en embedded systems-ontwikkeltools.' },
        hpp: { name: 'C++ Header Voorbeeldbestanden', description: 'Download gratis C++-header voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van C++-codecompilatie en headerbestandsverwerkingstools.' },
        css: { name: 'CSS Voorbeeldbestanden', description: 'Download gratis CSS voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van CSS-parsing, webontwikkeling en CSS-validatietools.' },
        js: { name: 'JavaScript Voorbeeldbestanden', description: 'Download gratis JavaScript voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van JavaScript-parsing, webontwikkeling en codevalidatietools.' },
        json: { name: 'JSON Voorbeeldbestanden', description: 'Download gratis JSON voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van JSON-parsing, gegevensverwerking en schema-validatietools.' },
        md: { name: 'Markdown Voorbeeldbestanden', description: 'Download gratis Markdown voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van Markdown-verwerking, documentconversie en documentatiegeneratietools.' },
        py: { name: 'Python Voorbeeldbestanden', description: 'Download gratis Python voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van Python-codecompilatie en syntaxiscontroletools.' },
        sh: { name: 'Shell Script Voorbeeldbestanden', description: 'Download gratis Shell Script voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van shellscriptuitvoering en Unix/Linux-automatiseringstools.' },
        sql: { name: 'SQL Voorbeeldbestanden', description: 'Download gratis SQL voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van SQL-parsing, databasebeheer en queryvalidatietools.' },
        ts: { name: 'TypeScript Voorbeeldbestanden', description: 'Download gratis TypeScript voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van TypeScript-codecompilatie en typecontroletools.' },
        yml: { name: 'YML Voorbeeldbestanden', description: 'Download gratis YML voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van YAML-parsing en configuratiebeheertools.' },
        jpg: { name: 'JPG Voorbeeldbestanden', description: 'Download gratis JPG voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van afbeeldingsconversietools, afbeeldingsverwerking en weboptimalisatie.' },
        png: { name: 'PNG Voorbeeldbestanden', description: 'Download gratis PNG voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van afbeeldingsconversietools, afbeeldingsverwerking en webgrafiek.' },
        gif: { name: 'GIF Voorbeeldbestanden', description: 'Download gratis GIF voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van afbeeldingsconversietools, afbeeldingsverwerking en webanimaties.' },
        webp: { name: 'WebP Voorbeeldbestanden', description: 'Download gratis WebP voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van afbeeldingsconversietools, afbeeldingsverwerking en moderne weboptimalisatie.' },
        svg: { name: 'SVG Voorbeeldbestanden', description: 'Download gratis SVG voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van vectorafbeeldingsconversietools, SVG-verwerking en webontwerp.' },
        bmp: { name: 'BMP Voorbeeldbestanden', description: 'Download gratis BMP voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van afbeeldingsconversietools, afbeeldingsverwerking en formaatcompatibiliteit.' },
        ico: { name: 'ICO Voorbeeldbestanden', description: 'Download gratis ICO voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van pictogramconversietools, pictogramverwerking en applicatieontwikkeling.' },
        tiff: { name: 'TIFF Voorbeeldbestanden', description: 'Download gratis TIFF voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van afbeeldingsconversietools, afbeeldingsverwerking en professionele bewerking.' },
        tif: { name: 'TIF Voorbeeldbestanden', description: 'Download gratis TIF voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van afbeeldingsconversietools, afbeeldingsverwerking en professionele bewerking.' },
        avif: { name: 'AVIF Voorbeeldbestanden', description: 'Download gratis AVIF voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van afbeeldingsconversietools, afbeeldingsverwerking en next-gen weboptimalisatie.' },
        mp4: { name: 'MP4 Voorbeeldbestanden', description: 'Download gratis MP4 voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van videoconversietools, videoverwerking en multimediareproductie.' },
        avi: { name: 'AVI Voorbeeldbestanden', description: 'Download gratis AVI voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van videoconversietools, videoverwerking en formaatcompatibiliteit.' },
        mov: { name: 'MOV Voorbeeldbestanden', description: 'Download gratis MOV voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van videoconversietools, videoverwerking en videobewerking.' },
        wmv: { name: 'WMV Voorbeeldbestanden', description: 'Download gratis WMV voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van videoconversietools, videoverwerking en Windows-formaatcompatibiliteit.' },
        flv: { name: 'FLV Voorbeeldbestanden', description: 'Download gratis FLV voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van videoconversietools, videoverwerking en webstreaming.' },
        webm: { name: 'WebM Voorbeeldbestanden', description: 'Download gratis WebM voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van videoconversietools, videoverwerking en moderne webvideo.' },
        mkv: { name: 'MKV Voorbeeldbestanden', description: 'Download gratis MKV voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van videoconversietools, videoverwerking en multimediacontainers.' },
        mp3: { name: 'MP3 Voorbeeldbestanden', description: 'Download gratis MP3 voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van audioconversietools, audioverwerking en multimediareproductie.' },
        wav: { name: 'WAV Voorbeeldbestanden', description: 'Download gratis WAV voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van audioconversietools, audioverwerking en lossless audio.' },
        flac: { name: 'FLAC Voorbeeldbestanden', description: 'Download gratis FLAC voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van audioconversietools, audioverwerking en hoge-kwaliteitsaudio.' },
        ogg: { name: 'OGG Voorbeeldbestanden', description: 'Download gratis OGG voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van audioconversietools, audioverwerking en open-source audio.' },
        wma: { name: 'WMA Voorbeeldbestanden', description: 'Download gratis WMA voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van audioconversietools, audioverwerking en Windows-formaatcompatibiliteit.' },
        aac: { name: 'AAC Voorbeeldbestanden', description: 'Download gratis AAC voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van audioconversietools, audioverwerking en hoogrendementsaudio.' },
        m4a: { name: 'M4A Voorbeeldbestanden', description: 'Download gratis M4A voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van audioconversietools, audioverwerking en MPEG-4-containeraudio.' },
        midi: { name: 'MIDI Voorbeeldbestanden', description: 'Download gratis MIDI voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van MIDI-verwerkingstools, muzieksynthese en muziekproductie.' },
        cue: { name: 'CUE Voorbeeldbestanden', description: 'Download gratis CUE voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van CUE-sheetparsing, audio-CD-branden en CD-authoringtools.' },
        zip: { name: 'ZIP Voorbeeldbestanden', description: 'Download gratis ZIP voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van archiefextractietools, bestandscompressie en bestandsbeheer.' },
        rar: { name: 'RAR Voorbeeldbestanden', description: 'Download gratis RAR voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van archiefextractietools, bestandscompressie en bestandsbeheer.' },
        '7z': { name: '7Z Voorbeeldbestanden', description: 'Download gratis 7Z voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van archiefconversie- en extractietools.' },
        tar: { name: 'TAR Voorbeeldbestanden', description: 'Download gratis TAR voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van archiefextractietools, bestandscompressie en Unix/Linux-bestandsbeheer.' },
        ace: { name: 'ACE Voorbeeldbestanden', description: 'Download gratis ACE voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van archiefextractietools, bestandscompressie en bestandsbeheer.' },
        arj: { name: 'ARJ Voorbeeldbestanden', description: 'Download gratis ARJ voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van archiefextractietools, bestandscompressie en legacy-bestandsbeheer.' },
        bz2: { name: 'BZ2 Voorbeeldbestanden', description: 'Download gratis BZ2 (bzip2) voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van bzip2-decompressie, archiefextractie en bestandscompressietools.' },
        cab: { name: 'CAB Voorbeeldbestanden', description: 'Download gratis CAB voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van CAB-archiefextractietools, Windows-software-installatie en bestandsbeheer.' },
        cpio: { name: 'CPIO Voorbeeldbestanden', description: 'Download gratis CPIO voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van CPIO-archiefextractietools, bestandscompressie en Unix-bestandsbeheer.' },
        dmg: { name: 'DMG Voorbeeldbestanden', description: 'Download gratis DMG voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van schijfafbeelding-montagetools, macOS-software-installatie en bestandsbeheer.' },
        img: { name: 'IMG Voorbeeldbestanden', description: 'Download gratis IMG voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van schijfafbeelding-montagetools, schijfafbeelding-creatie en bestandsbeheer.' },
        iso: { name: 'ISO Voorbeeldbestanden', description: 'Download gratis ISO voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van schijfafbeelding-montagetools, CD/DVD-branden en bestandsbeheer.' },
        kmz: { name: 'KMZ Voorbeeldbestanden', description: 'Download gratis KMZ gecomprimeerde Keyhole Markup Language voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van KMZ-extractie, geografische gegevensverwerking en Google Earth-integratietools.' },
        laz: { name: 'LAZ Voorbeeldbestanden', description: 'Download gratis LAZ gecomprimeerde LiDAR-puntenwolkgegevens voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van LAZ-extractie, puntenwolkverwerking en 3D-mappingtools.' },
        lha: { name: 'LHA Voorbeeldbestanden', description: 'Download gratis LHA LHA-archief voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van LHA-extractie, archiefdecompressie en bestandsarchiveringstools.' },
        lzh: { name: 'LZH Voorbeeldbestanden', description: 'Download gratis LZH LZH-archief voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van LZH-extractie, archiefdecompressie en bestandsarchiveringstools.' },
        lzma: { name: 'LZMA Voorbeeldbestanden', description: 'Download gratis LZMA LZMA-gecomprimeerde voorbeeldbestanden voor tests. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van LZMA-decompressie, archiefextractie en bestandscompressietools.' }
      }
    }
  },
  pt: {
    samples_page: {
      meta: {
        title: 'Arquivos de exemplo gratuitos – Baixar arquivos de teste | MorphyHub',
        description: 'Obtenha arquivos de exemplo gratuitos de imagens, documentos e arquivos para testar os conversores, compressores e visualizadores do MorphyHub.',
        keywords: 'arquivos de exemplo, arquivos de teste, baixar exemplos, arquivos de teste gratuitos, exemplos DOCX, exemplos de arquivos, arquivos de teste para conversão'
      },
      schema: {
        name: 'Arquivos de exemplo gratuitos para baixar e testar',
        description: 'Baixe arquivos de exemplo gratuitos de vários tipos — imagens, documentos, áudio, vídeo e arquivos. Use-os para testes, demonstrações ou validação de software em qualquer plataforma.'
      },
      hero: {
        title: 'Arquivos de exemplo',
        description: 'Baixe arquivos de exemplo gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis para vários formatos para testar suas ferramentas de conversão e processamento.'
      },
      back_button: 'Voltar ao início',
      search: {
        placeholder: 'Buscar arquivos de exemplo... (ex. DOCX, JPG, PDF)',
        results: '{{count}} arquivo(s) de exemplo encontrado(s)',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'EXEMPLOS DE DOCUMENTOS',
        data: 'EXEMPLOS DE DADOS',
        application: 'EXEMPLOS DE APLICAÇÕES',
        design_3d: 'EXEMPLOS 3D E DE DESIGN',
        image_video: 'EXEMPLOS DE IMAGENS E VÍDEO',
        audio: 'EXEMPLOS DE ÁUDIO',
        archive: 'EXEMPLOS DE ARQUIVOS'
      },
      actions: { download: 'Baixar' },
      no_results: {
        title: 'Nenhum arquivo de exemplo encontrado',
        description: 'Tente buscar algo como "DOCX" ou "JPG"',
        clear: 'Limpar busca'
      },
      features: {
        title: 'Por que escolher nossos arquivos de exemplo?',
        items: [
          { title: 'Acesso gratuito e fácil', description: 'Baixe arquivos de exemplo instantaneamente sem registro ou pagamento.' },
          { title: 'Múltiplos tamanhos', description: 'Escolha entre vários tamanhos de arquivo (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) para testes abrangentes.' },
          { title: 'Grande variedade', description: 'Acesse exemplos em várias categorias: documentos, imagens, áudio, vídeo, arquivos e mais.' }
        ]
      },
      format_description_template: 'Baixe arquivos de exemplo {{format}} gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar {{purpose}}.',
      formats: {
        docx: { name: 'Arquivos de exemplo DOCX', description: 'Baixe arquivos de exemplo DOCX gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de documentos.' },
        doc: { name: 'Arquivos de exemplo DOC', description: 'Baixe arquivos de exemplo DOC gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de documentos.' },
        pdf: { name: 'Arquivos de exemplo PDF', description: 'Baixe arquivos de exemplo PDF gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de documentos.' },
        odp: { name: 'Arquivos de exemplo ODP', description: 'Baixe arquivos de exemplo ODP OpenDocument Presentation gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão e visualização de apresentações.' },
        rtf: { name: 'Arquivos de exemplo RTF', description: 'Baixe arquivos de exemplo RTF (Rich Text Format) gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão e visualização de documentos.' },
        epub: { name: 'Arquivos de exemplo EPUB', description: 'Baixe arquivos de exemplo EPUB gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar leitores de eBooks, conversão EPUB e ferramentas de publicação digital.' },
        'invoice-pdf': { name: 'Arquivos de exemplo PDF de faturas', description: 'Baixe arquivos de exemplo PDF de faturas gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar processamento de faturas PDF, análise de faturas e ferramentas de gerenciamento de documentos.' },
        mobi: { name: 'Arquivos de exemplo MOBI', description: 'Baixe arquivos de exemplo MOBI gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar conversão de eBooks MOBI, leitura MOBI e ferramentas de processamento de eBooks.' },
        csv: { name: 'Arquivos de exemplo CSV', description: 'Baixe arquivos de exemplo CSV gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão CSV e processamento de dados.' },
        xls: { name: 'Arquivos de exemplo XLS', description: 'Baixe arquivos de exemplo XLS gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão Excel e processamento de dados.' },
        xlsx: { name: 'Arquivos de exemplo XLSX', description: 'Baixe arquivos de exemplo XLSX gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão Excel e processamento de dados.' },
        xml: { name: 'Arquivos de exemplo XML', description: 'Baixe arquivos de exemplo XML gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise XML e conversão de dados.' },
        html: { name: 'Arquivos de exemplo HTML', description: 'Baixe arquivos de exemplo HTML gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar análise HTML, desenvolvimento web e ferramentas de validação HTML.' },
        ods: { name: 'Arquivos de exemplo ODS', description: 'Baixe arquivos de exemplo ODS OpenDocument Spreadsheet gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de planilhas e processamento de dados.' },
        'ansible-yml': { name: 'Arquivos de exemplo Ansible YML', description: 'Baixe arquivos de exemplo Ansible YML gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise YAML e gerenciamento de configuração.' },
        'api-response-json': { name: 'Arquivos de exemplo JSON de resposta API', description: 'Baixe arquivos de exemplo JSON de resposta API gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise JSON e manipulação de respostas API.' },
        'arduino-ino': { name: 'Arquivos de exemplo Arduino INO', description: 'Baixe arquivos de exemplo Arduino INO gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de compilação de código Arduino e verificação de sintaxe.' },
        asc: { name: 'Arquivos de exemplo ASC', description: 'Baixe arquivos de exemplo ASC (ASCII) gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de processamento de arquivos de texto e codificação ASCII.' },
        bat: { name: 'Arquivos de exemplo BAT', description: 'Baixe arquivos de exemplo BAT gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de execução de scripts batch e automação do Windows.' },
        bib: { name: 'Arquivos de exemplo BIB', description: 'Baixe arquivos de exemplo BIB (BibTeX) gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de gerenciamento de bibliografias e processamento de citações.' },
        c: { name: 'Arquivos de exemplo C', description: 'Baixe arquivos de exemplo C gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de compilação de código C e verificação de sintaxe.' },
        'can-log': { name: 'Arquivos de exemplo CAN Log', description: 'Baixe arquivos de exemplo CAN log gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise de barramento CAN e análise de logs.' },
        cmd: { name: 'Arquivos de exemplo CMD', description: 'Baixe arquivos de exemplo CMD gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de execução de scripts de comando e automação do Windows.' },
        conf: { name: 'Arquivos de exemplo CONF', description: 'Baixe arquivos de exemplo CONF gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise de arquivos de configuração e configuração do sistema.' },
        'config-ini': { name: 'Arquivos de exemplo Config INI', description: 'Baixe arquivos de exemplo Config INI gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise de arquivos INI e gerenciamento de configuração.' },
        cpp: { name: 'Arquivos de exemplo C++', description: 'Baixe arquivos de exemplo C++ gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de compilação de código C++ e verificação de sintaxe.' },
        crx: { name: 'Arquivos de exemplo CRX', description: 'Baixe arquivos de exemplo CRX gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar instalação de extensões Chrome, análise CRX e ferramentas de desenvolvimento de extensões de navegador.' },
        cs: { name: 'Arquivos de exemplo C#', description: 'Baixe arquivos de exemplo C# gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de compilação de código C# e verificação de sintaxe.' },
        gz: { name: 'Arquivos de exemplo GZ', description: 'Baixe arquivos de exemplo GZ (gzip) gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar descompressão gzip, extração de arquivos e ferramentas de compressão de arquivos.' },
        h: { name: 'Arquivos de exemplo C Header', description: 'Baixe arquivos de exemplo C Header gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de compilação de código C e processamento de arquivos de cabeçalho.' },
        hdr: { name: 'Arquivos de exemplo HDR', description: 'Baixe arquivos de exemplo HDR (High Dynamic Range) gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar processamento de imagens HDR, conversão HDR e ferramentas de visualização de alto alcance dinâmico.' },
        heic: { name: 'Arquivos de exemplo HEIC', description: 'Baixe arquivos de exemplo HEIC gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar conversão de imagens HEIC, visualização HEIC e ferramentas de processamento de formatos de imagem modernos.' },
        heif: { name: 'Arquivos de exemplo HEIF', description: 'Baixe arquivos de exemplo HEIF gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar conversão de imagens HEIF, visualização HEIF e ferramentas de processamento de formatos de imagem modernos.' },
        hex: { name: 'Arquivos de exemplo HEX', description: 'Baixe arquivos de exemplo HEX (hexadecimal) gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar análise de arquivos hexadecimais, programação de firmware e ferramentas de desenvolvimento de sistemas embarcados.' },
        hpp: { name: 'Arquivos de exemplo C++ Header', description: 'Baixe arquivos de exemplo C++ Header gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de compilação de código C++ e processamento de arquivos de cabeçalho.' },
        css: { name: 'Arquivos de exemplo CSS', description: 'Baixe arquivos de exemplo CSS gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise CSS, desenvolvimento web e validação CSS.' },
        js: { name: 'Arquivos de exemplo JavaScript', description: 'Baixe arquivos de exemplo JavaScript gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise JavaScript, desenvolvimento web e validação de código.' },
        json: { name: 'Arquivos de exemplo JSON', description: 'Baixe arquivos de exemplo JSON gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise JSON, processamento de dados e validação de esquemas.' },
        md: { name: 'Arquivos de exemplo Markdown', description: 'Baixe arquivos de exemplo Markdown gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de processamento Markdown, conversão de documentos e geração de documentação.' },
        py: { name: 'Arquivos de exemplo Python', description: 'Baixe arquivos de exemplo Python gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de compilação de código Python e verificação de sintaxe.' },
        sh: { name: 'Arquivos de exemplo Shell Script', description: 'Baixe arquivos de exemplo Shell Script gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de execução de scripts shell e automação de sistemas Unix/Linux.' },
        sql: { name: 'Arquivos de exemplo SQL', description: 'Baixe arquivos de exemplo SQL gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise SQL, gerenciamento de bancos de dados e validação de consultas.' },
        ts: { name: 'Arquivos de exemplo TypeScript', description: 'Baixe arquivos de exemplo TypeScript gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de compilação de código TypeScript e verificação de tipos.' },
        yml: { name: 'Arquivos de exemplo YML', description: 'Baixe arquivos de exemplo YML gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise YAML e gerenciamento de configuração.' },
        jpg: { name: 'Arquivos de exemplo JPG', description: 'Baixe arquivos de exemplo JPG gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de imagens, processamento de imagens e otimização web.' },
        png: { name: 'Arquivos de exemplo PNG', description: 'Baixe arquivos de exemplo PNG gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de imagens, processamento de imagens e gráficos web.' },
        gif: { name: 'Arquivos de exemplo GIF', description: 'Baixe arquivos de exemplo GIF gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de imagens, processamento de imagens e animações web.' },
        webp: { name: 'Arquivos de exemplo WebP', description: 'Baixe arquivos de exemplo WebP gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de imagens, processamento de imagens e otimização web moderna.' },
        svg: { name: 'Arquivos de exemplo SVG', description: 'Baixe arquivos de exemplo SVG gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de gráficos vetoriais, processamento SVG e design web.' },
        bmp: { name: 'Arquivos de exemplo BMP', description: 'Baixe arquivos de exemplo BMP gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de imagens, processamento de imagens e compatibilidade de formatos.' },
        ico: { name: 'Arquivos de exemplo ICO', description: 'Baixe arquivos de exemplo ICO gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de ícones, processamento de ícones e desenvolvimento de aplicativos.' },
        tiff: { name: 'Arquivos de exemplo TIFF', description: 'Baixe arquivos de exemplo TIFF gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de imagens, processamento de imagens e edição profissional.' },
        tif: { name: 'Arquivos de exemplo TIF', description: 'Baixe arquivos de exemplo TIF gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de imagens, processamento de imagens e edição profissional.' },
        avif: { name: 'Arquivos de exemplo AVIF', description: 'Baixe arquivos de exemplo AVIF gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de imagens, processamento de imagens e otimização web de próxima geração.' },
        mp4: { name: 'Arquivos de exemplo MP4', description: 'Baixe arquivos de exemplo MP4 gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de vídeo, processamento de vídeo e reprodução multimídia.' },
        avi: { name: 'Arquivos de exemplo AVI', description: 'Baixe arquivos de exemplo AVI gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de vídeo, processamento de vídeo e compatibilidade de formatos.' },
        mov: { name: 'Arquivos de exemplo MOV', description: 'Baixe arquivos de exemplo MOV gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de vídeo, processamento de vídeo e edição de vídeo.' },
        wmv: { name: 'Arquivos de exemplo WMV', description: 'Baixe arquivos de exemplo WMV gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de vídeo, processamento de vídeo e compatibilidade de formatos Windows.' },
        flv: { name: 'Arquivos de exemplo FLV', description: 'Baixe arquivos de exemplo FLV gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de vídeo, processamento de vídeo e streaming web.' },
        webm: { name: 'Arquivos de exemplo WebM', description: 'Baixe arquivos de exemplo WebM gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de vídeo, processamento de vídeo e vídeo web moderno.' },
        mkv: { name: 'Arquivos de exemplo MKV', description: 'Baixe arquivos de exemplo MKV gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de vídeo, processamento de vídeo e contêineres multimídia.' },
        mp3: { name: 'Arquivos de exemplo MP3', description: 'Baixe arquivos de exemplo MP3 gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio, processamento de áudio e reprodução multimídia.' },
        wav: { name: 'Arquivos de exemplo WAV', description: 'Baixe arquivos de exemplo WAV gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio, processamento de áudio e áudio sem perdas.' },
        flac: { name: 'Arquivos de exemplo FLAC', description: 'Baixe arquivos de exemplo FLAC gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio, processamento de áudio e áudio de alta qualidade.' },
        ogg: { name: 'Arquivos de exemplo OGG', description: 'Baixe arquivos de exemplo OGG gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio, processamento de áudio e áudio de código aberto.' },
        wma: { name: 'Arquivos de exemplo WMA', description: 'Baixe arquivos de exemplo WMA gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio, processamento de áudio e compatibilidade de formatos Windows.' },
        aac: { name: 'Arquivos de exemplo AAC', description: 'Baixe arquivos de exemplo AAC gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio, processamento de áudio e áudio de alta eficiência.' },
        m4a: { name: 'Arquivos de exemplo M4A', description: 'Baixe arquivos de exemplo M4A gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio, processamento de áudio e áudio de contêiner MPEG-4.' },
        midi: { name: 'Arquivos de exemplo MIDI', description: 'Baixe arquivos de exemplo MIDI gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de processamento MIDI, síntese musical e produção musical.' },
        cue: { name: 'Arquivos de exemplo CUE', description: 'Baixe arquivos de exemplo CUE gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar análise de folhas CUE, gravação de CD de áudio e ferramentas de autoria de CD.' },
        zip: { name: 'Arquivos de exemplo ZIP', description: 'Baixe arquivos de exemplo ZIP gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de extração de arquivos, compressão de arquivos e gerenciamento de arquivos.' },
        rar: { name: 'Arquivos de exemplo RAR', description: 'Baixe arquivos de exemplo RAR gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de extração de arquivos, compressão de arquivos e gerenciamento de arquivos.' },
        '7z': { name: 'Arquivos de exemplo 7Z', description: 'Baixe arquivos de exemplo 7Z gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de arquivos e extração.' },
        tar: { name: 'Arquivos de exemplo TAR', description: 'Baixe arquivos de exemplo TAR gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de extração de arquivos, compressão de arquivos e gerenciamento de arquivos Unix/Linux.' },
        ace: { name: 'Arquivos de exemplo ACE', description: 'Baixe arquivos de exemplo ACE gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de extração de arquivos, compressão de arquivos e gerenciamento de arquivos.' },
        arj: { name: 'Arquivos de exemplo ARJ', description: 'Baixe arquivos de exemplo ARJ gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de extração de arquivos, compressão de arquivos e gerenciamento de arquivos legados.' },
        bz2: { name: 'Arquivos de exemplo BZ2', description: 'Baixe arquivos de exemplo BZ2 (bzip2) gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar descompressão bzip2, extração de arquivos e ferramentas de compressão de arquivos.' },
        cab: { name: 'Arquivos de exemplo CAB', description: 'Baixe arquivos de exemplo CAB gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de extração de arquivos CAB, instalação de software Windows e gerenciamento de arquivos.' },
        cpio: { name: 'Arquivos de exemplo CPIO', description: 'Baixe arquivos de exemplo CPIO gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de extração de arquivos CPIO, compressão de arquivos e gerenciamento de arquivos Unix.' },
        dmg: { name: 'Arquivos de exemplo DMG', description: 'Baixe arquivos de exemplo DMG gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de montagem de imagens de disco, instalação de software macOS e gerenciamento de arquivos.' },
        img: { name: 'Arquivos de exemplo IMG', description: 'Baixe arquivos de exemplo IMG gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de montagem de imagens de disco, criação de imagens de disco e gerenciamento de arquivos.' },
        iso: { name: 'Arquivos de exemplo ISO', description: 'Baixe arquivos de exemplo ISO gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de montagem de imagens de disco, gravação de CD/DVD e gerenciamento de arquivos.' },
        kmz: { name: 'Arquivos de exemplo KMZ', description: 'Baixe arquivos de exemplo KMZ gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de extração KMZ, processamento de dados geográficos e integração com Google Earth.' },
        laz: { name: 'Arquivos de exemplo LAZ', description: 'Baixe arquivos de exemplo LAZ gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de extração LAZ, processamento de nuvens de pontos LiDAR e ferramentas de mapeamento 3D.' },
        lha: { name: 'Arquivos de exemplo LHA', description: 'Baixe arquivos de exemplo LHA gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de extração LHA, descompressão de arquivos e ferramentas de arquivamento de arquivos.' },
        lzh: { name: 'Arquivos de exemplo LZH', description: 'Baixe arquivos de exemplo LZH gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de extração LZH, descompressão de arquivos e ferramentas de arquivamento de arquivos.' },
        lzma: { name: 'Arquivos de exemplo LZMA', description: 'Baixe arquivos de exemplo LZMA gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de descompressão LZMA, extração de arquivos e compressão de arquivos.' },
        '3ds': { name: 'Arquivos de exemplo 3DS', description: 'Baixe arquivos de exemplo 3DS gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de modelos 3D, visualizadores 3DS e software de modelagem 3D.' },
        '3gp': { name: 'Arquivos de exemplo 3GP', description: 'Baixe arquivos de exemplo 3GP gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de vídeo móvel, players 3GP e aplicativos de processamento de vídeo para smartphones.' },
        '3mf': { name: 'Arquivos de exemplo 3MF', description: 'Baixe arquivos de exemplo 3MF gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de impressão 3D, convertidores 3MF e software de fabricação aditiva.' },
        ac3: { name: 'Arquivos de exemplo AC3', description: 'Baixe arquivos de exemplo AC3 Dolby Digital gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio Dolby, decodificadores AC3 e software de processamento de áudio surround.' },
        ai: { name: 'Arquivos de exemplo AI', description: 'Baixe arquivos de exemplo AI Adobe Illustrator gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de gráficos vetoriais, visualizadores AI e software de design gráfico.' },
        aif: { name: 'Arquivos de exemplo AIF', description: 'Baixe arquivos de exemplo AIF Audio Interchange File Format gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio não comprimido, players AIF e software de produção de áudio profissional.' },
        aiff: { name: 'Arquivos de exemplo AIFF', description: 'Baixe arquivos de exemplo AIFF Audio Interchange File Format gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio de alta qualidade, players AIFF e software de masterização de áudio.' },
        amr: { name: 'Arquivos de exemplo AMR', description: 'Baixe arquivos de exemplo AMR Adaptive Multi-Rate gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio móvel, decodificadores AMR e aplicativos de processamento de áudio para telefones.' },
        'animated-gif': { name: 'Arquivos de exemplo GIF animado', description: 'Baixe arquivos de exemplo GIF animado gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de animação GIF, visualizadores GIF animados e software de criação de animações web.' },
        'animation-fbx': { name: 'Arquivos de exemplo Animação FBX', description: 'Baixe arquivos de exemplo Animação FBX gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de animação 3D, visualizadores FBX e software de produção de animação profissional.' },
        apk: { name: 'Arquivos de exemplo APK', description: 'Baixe arquivos de exemplo APK Android gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de instalação de aplicativos Android, análise APK e software de desenvolvimento de aplicativos móveis.' },
        apng: { name: 'Arquivos de exemplo APNG', description: 'Baixe arquivos de exemplo APNG PNG animado gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão PNG animado, visualizadores APNG e software de criação de animações web modernas.' },
        appimage: { name: 'Arquivos de exemplo AppImage', description: 'Baixe arquivos de exemplo AppImage Linux gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de execução de aplicativos Linux portáteis, instalação AppImage e software de distribuição de aplicativos Linux.' },
        ase: { name: 'Arquivos de exemplo ASE', description: 'Baixe arquivos de exemplo ASE Adobe Swatch Exchange gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de paletas de cores, visualizadores ASE e software de design gráfico profissional.' },
        assetbundle: { name: 'Arquivos de exemplo AssetBundle', description: 'Baixe arquivos de exemplo AssetBundle Unity gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de carregamento de assets Unity, extração AssetBundle e software de desenvolvimento de jogos Unity.' },
        'barcode-svg': { name: 'Arquivos de exemplo Código de barras SVG', description: 'Baixe arquivos de exemplo código de barras SVG gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de leitura de código de barras, conversão SVG e software de geração de códigos de barras vetoriais.' },
        blend: { name: 'Arquivos de exemplo BLEND', description: 'Baixe arquivos de exemplo BLEND Blender gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de modelos 3D Blender, visualizadores BLEND e software de modelagem 3D open source.' },
        bvh: { name: 'Arquivos de exemplo BVH', description: 'Baixe arquivos de exemplo BVH motion capture gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de processamento de motion capture, conversão de animação BVH e software de produção de animação cinemática.' },
        caf: { name: 'Arquivos de exemplo CAF', description: 'Baixe arquivos de exemplo CAF Core Audio Format gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de áudio macOS, players CAF e software de processamento de áudio Apple.' },
        csr: { name: 'Arquivos de exemplo CSR', description: 'Baixe arquivos de exemplo CSR Certificate Signing Request gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de gerenciamento de certificados SSL, análise CSR e software de segurança de rede e criptografia.' },
        'customer-database-sql': { name: 'Arquivos de exemplo Banco de Dados Cliente SQL', description: 'Baixe arquivos de exemplo banco de dados cliente SQL gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de gerenciamento de banco de dados, análise SQL e software de gestão de dados de clientes e CRM.' },
        dav: { name: 'Arquivos de exemplo DAV', description: 'Baixe arquivos de exemplo DAV vídeo gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de vídeo DAV, players DAV e software de processamento de vídeo de vigilância e segurança.' },
        dbf: { name: 'Arquivos de exemplo DBF', description: 'Baixe arquivos de exemplo DBF dBase gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de banco de dados dBase, análise DBF e software de gestão de dados legados.' },
        dds: { name: 'Arquivos de exemplo DDS', description: 'Baixe arquivos de exemplo DDS DirectDraw Surface gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de texturas de imagem, visualizadores DDS e software de desenvolvimento de jogos e gráficos 3D.' },
        dem: { name: 'Arquivos de exemplo DEM', description: 'Baixe arquivos de exemplo DEM Digital Elevation Model gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de processamento de dados de elevação, conversão DEM e software de cartografia e SIG.' },
        der: { name: 'Arquivos de exemplo DER', description: 'Baixe arquivos de exemplo DER certificado codificado gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de gerenciamento de certificados, análise DER e software de segurança e criptografia.' },
        dmp: { name: 'Arquivos de exemplo DMP', description: 'Baixe arquivos de exemplo DMP memory dump gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise de memória, depuração DMP e software de diagnóstico de sistema e forense.' },
        dng: { name: 'Arquivos de exemplo DNG', description: 'Baixe arquivos de exemplo DNG Digital Negative raw image gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de processamento de imagens raw, conversão DNG e software de fotografia profissional e edição de fotos.' },
        'docker-compose-yml': { name: 'Arquivos de exemplo Docker Compose YML', description: 'Baixe arquivos de exemplo Docker Compose YML gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de configuração Docker, análise YAML e software de containerização e orquestração Docker.' },
        dockerfile: { name: 'Arquivos de exemplo Dockerfile', description: 'Baixe arquivos de exemplo Dockerfile gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de build Docker, análise Dockerfile e software de desenvolvimento e implantação de containers.' },
        dwg: { name: 'Arquivos de exemplo DWG', description: 'Baixe arquivos de exemplo DWG AutoCAD gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de desenhos AutoCAD, visualizadores DWG e software CAD profissional e arquitetura.' },
        dxf: { name: 'Arquivos de exemplo DXF', description: 'Baixe arquivos de exemplo DXF Drawing Exchange Format gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de desenhos CAD, visualizadores DXF e software de intercâmbio de arquivos de desenho e engenharia.' },
        editorconfig: { name: 'Arquivos de exemplo EditorConfig', description: 'Baixe arquivos de exemplo EditorConfig gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de configuração de editor de código, análise EditorConfig e software de desenvolvimento e formatação de código.' },
        elf: { name: 'Arquivos de exemplo ELF', description: 'Baixe arquivos de exemplo ELF Executable and Linkable Format gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise de binários Linux, análise ELF e software de desenvolvimento de sistema e engenharia reversa.' },
        eps: { name: 'Arquivos de exemplo EPS', description: 'Baixe arquivos de exemplo EPS Encapsulated PostScript gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de gráficos vetoriais, visualizadores EPS e software de design gráfico e impressão profissional.' },
        exe: { name: 'Arquivos de exemplo EXE', description: 'Baixe arquivos de exemplo EXE Windows executável gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise de binários Windows, análise EXE e software de desenvolvimento Windows e segurança.' },
        exr: { name: 'Arquivos de exemplo EXR', description: 'Baixe arquivos de exemplo EXR OpenEXR high dynamic range image gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de processamento de imagens HDR, conversão EXR e software de visualização de alta faixa dinâmica e VFX.' },
        icns: { name: 'Arquivos de exemplo ICNS', description: 'Baixe arquivos de exemplo ICNS macOS icon gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de ícones macOS, visualizadores ICNS e software de design de ícones e desenvolvimento macOS.' },
        ifc: { name: 'Arquivos de exemplo IFC', description: 'Baixe arquivos de exemplo IFC Industry Foundation Classes gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão BIM, visualizadores IFC e software de modelagem de informações de construção e arquitetura.' },
        iges: { name: 'Arquivos de exemplo IGES', description: 'Baixe arquivos de exemplo IGES Initial Graphics Exchange Specification gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de modelos CAD, visualizadores IGES e software de intercâmbio de modelos 3D e engenharia.' },
        igs: { name: 'Arquivos de exemplo IGS', description: 'Baixe arquivos de exemplo IGS Initial Graphics Exchange Specification gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de modelos CAD, visualizadores IGS e software de intercâmbio de arquivos de desenho e engenharia mecânica.' },
        indd: { name: 'Arquivos de exemplo INDD', description: 'Baixe arquivos de exemplo INDD Adobe InDesign gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de layout, visualizadores INDD e software de publicação e design editorial profissional.' },
        ini: { name: 'Arquivos de exemplo INI', description: 'Baixe arquivos de exemplo INI gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise de arquivos INI, gerenciamento de configuração e software de processamento de arquivos de configuração.' },
        intelhex: { name: 'Arquivos de exemplo Intel HEX', description: 'Baixe arquivos de exemplo Intel HEX gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de programação de microcontroladores, análise Intel HEX e software de desenvolvimento embarcado e firmware.' },
        ipa: { name: 'Arquivos de exemplo IPA', description: 'Baixe arquivos de exemplo IPA iOS App Store Package gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de instalação de aplicativos iOS, análise IPA e software de desenvolvimento de aplicativos móveis Apple.' },
        ipynb: { name: 'Arquivos de exemplo IPYNB', description: 'Baixe arquivos de exemplo IPYNB Jupyter Notebook gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de execução de notebooks Jupyter, análise IPYNB e software de ciência de dados e análise interativa.' },
        jar: { name: 'Arquivos de exemplo JAR', description: 'Baixe arquivos de exemplo JAR Java Archive gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de execução Java, extração JAR e software de desenvolvimento Java e implantação de aplicações.' },
        java: { name: 'Arquivos de exemplo Java', description: 'Baixe arquivos de exemplo Java source code gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de compilação Java, análise de código Java e software de desenvolvimento Java e IDE.' },
        jks: { name: 'Arquivos de exemplo JKS', description: 'Baixe arquivos de exemplo JKS Java KeyStore gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de gerenciamento de chaves Java, análise JKS e software de segurança Java e criptografia.' },
        jpeg: { name: 'Arquivos de exemplo JPEG', description: 'Baixe arquivos de exemplo JPEG Joint Photographic Experts Group gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de imagens JPEG, processamento de imagens e software de fotografia digital e otimização web.' },
        jsonl: { name: 'Arquivos de exemplo JSONL', description: 'Baixe arquivos de exemplo JSONL JSON Lines gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de processamento de dados JSON, análise JSONL e software de processamento de dados em streaming e big data.' },
        jsx: { name: 'Arquivos de exemplo JSX', description: 'Baixe arquivos de exemplo JSX React JavaScript XML gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de compilação React, análise JSX e software de desenvolvimento React e frontend.' },
        jwt: { name: 'Arquivos de exemplo JWT', description: 'Baixe arquivos de exemplo JWT JSON Web Token gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de autenticação JWT, análise JWT e software de segurança web e API.' },
        key: { name: 'Arquivos de exemplo KEY', description: 'Baixe arquivos de exemplo KEY chave privada gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de gerenciamento de chaves criptográficas, análise KEY e software de segurança e criptografia.' },
        kml: { name: 'Arquivos de exemplo KML', description: 'Baixe arquivos de exemplo KML Keyhole Markup Language gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de visualização geográfica, análise KML e software de cartografia e Google Earth.' },
        kt: { name: 'Arquivos de exemplo Kotlin', description: 'Baixe arquivos de exemplo Kotlin source code gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de compilação Kotlin, análise de código Kotlin e software de desenvolvimento Android e multiplataforma.' },
        las: { name: 'Arquivos de exemplo LAS', description: 'Baixe arquivos de exemplo LAS LiDAR point cloud data gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de processamento de nuvens de pontos, conversão LAS e software de sensoriamento remoto e cartografia 3D.' },
        log: { name: 'Arquivos de exemplo LOG', description: 'Baixe arquivos de exemplo LOG gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de análise de logs, análise de logs e software de monitoramento de sistema.' },
        lua: { name: 'Arquivos de exemplo Lua', description: 'Baixe arquivos de exemplo Lua source code gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de execução Lua, análise de código Lua e software de desenvolvimento de scripts e jogos.' },
        m3u: { name: 'Arquivos de exemplo M3U', description: 'Baixe arquivos de exemplo M3U playlist gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de reprodução de playlists, análise M3U e software de leitura multimídia e streaming de áudio.' },
        m3u8: { name: 'Arquivos de exemplo M3U8', description: 'Baixe arquivos de exemplo M3U8 HLS playlist gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de streaming HLS, análise M3U8 e software de streaming de vídeo e transmissão ao vivo.' },
        m4v: { name: 'Arquivos de exemplo M4V', description: 'Baixe arquivos de exemplo M4V MPEG-4 video gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de vídeo MPEG-4, players M4V e software de processamento de vídeo Apple e iTunes.' },
        makefile: { name: 'Arquivos de exemplo Makefile', description: 'Baixe arquivos de exemplo Makefile gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de build automatizado, análise Makefile e software de compilação e desenvolvimento de sistema.' },
        ma: { name: 'Arquivos de exemplo MA', description: 'Baixe arquivos de exemplo MA Maya ASCII gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de cenas Maya, análise de arquivos MA e software de animação 3D.' },
        max: { name: 'Arquivos de exemplo MAX', description: 'Baixe arquivos de exemplo MAX 3ds Max gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de modelos 3D, visualizadores MAX e software de modelagem 3D profissional e animação.' },
        mb: { name: 'Arquivos de exemplo MB', description: 'Baixe arquivos de exemplo MB Maya Binary gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de cenas Maya, visualizadores MB e software de modelagem 3D e animação profissional.' },
        mbtiles: { name: 'Arquivos de exemplo MBTiles', description: 'Baixe arquivos de exemplo MBTiles MapBox tiles gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de visualização de mapas, extração MBTiles e software de cartografia web e aplicações móveis.' },
        mdx: { name: 'Arquivos de exemplo MDX', description: 'Baixe arquivos de exemplo MDX Markdown Extended gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de processamento de documentação, análise MDX e software de desenvolvimento web e geração de sites estáticos.' }
      }
    }
  },
  vi: {
    samples_page: {
      meta: {
        title: 'Tệp mẫu miễn phí – Tải xuống tệp thử nghiệm | MorphyHub',
        description: 'Nhận tệp mẫu miễn phí của hình ảnh, tài liệu và tệp nén để kiểm tra các công cụ chuyển đổi, nén và xem của MorphyHub.',
        keywords: 'tệp mẫu, tệp thử nghiệm, tải xuống mẫu, tệp thử nghiệm miễn phí, mẫu DOCX, mẫu tệp, tệp thử nghiệm để chuyển đổi'
      },
      schema: {
        name: 'Tệp mẫu miễn phí để tải xuống và kiểm tra',
        description: 'Tải xuống tệp mẫu miễn phí của nhiều loại — hình ảnh, tài liệu, âm thanh, video và tệp nén. Sử dụng chúng để kiểm tra, demo hoặc xác thực phần mềm trên bất kỳ nền tảng nào.'
      },
      hero: {
        title: 'Tệp mẫu',
        description: 'Tải xuống tệp mẫu miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn cho các định dạng khác nhau để kiểm tra các công cụ chuyển đổi và xử lý của bạn.'
      },
      back_button: 'Quay lại trang chủ',
      search: {
        placeholder: 'Tìm tệp mẫu... (vd. DOCX, JPG, PDF)',
        results: 'Tìm thấy {{count}} tệp mẫu',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'MẪU TÀI LIỆU',
        data: 'MẪU DỮ LIỆU',
        application: 'MẪU ỨNG DỤNG',
        design_3d: 'MẪU 3D & THIẾT KẾ',
        image_video: 'MẪU HÌNH ẢNH & VIDEO',
        audio: 'MẪU ÂM THANH',
        archive: 'MẪU TỆP NÉN'
      },
      actions: { download: 'Tải xuống' },
      no_results: {
        title: 'Không tìm thấy tệp mẫu',
        description: 'Thử tìm kiếm thứ gì đó như "DOCX" hoặc "JPG"',
        clear: 'Xóa tìm kiếm'
      },
      features: {
        title: 'Tại sao chọn tệp mẫu của chúng tôi?',
        items: [
          { title: 'Truy cập miễn phí và dễ dàng', description: 'Tải xuống tệp mẫu ngay lập tức mà không cần đăng ký hoặc thanh toán.' },
          { title: 'Nhiều kích thước', description: 'Chọn từ nhiều kích thước tệp (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) để kiểm tra toàn diện.' },
          { title: 'Đa dạng', description: 'Truy cập các mẫu trong nhiều danh mục: tài liệu, hình ảnh, âm thanh, video, tệp nén và nhiều hơn nữa.' }
        ]
      },
      format_description_template: 'Tải xuống tệp mẫu {{format}} miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra {{purpose}}.',
      formats: {
        docx: { name: 'Tệp mẫu DOCX', description: 'Tải xuống tệp mẫu DOCX miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi tài liệu.' },
        doc: { name: 'Tệp mẫu DOC', description: 'Tải xuống tệp mẫu DOC miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi tài liệu.' },
        pdf: { name: 'Tệp mẫu PDF', description: 'Tải xuống tệp mẫu PDF miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi tài liệu.' },
        odp: { name: 'Tệp mẫu ODP', description: 'Tải xuống tệp mẫu ODP OpenDocument Presentation miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi và xem trình bày.' },
        rtf: { name: 'Tệp mẫu RTF', description: 'Tải xuống tệp mẫu RTF (Rich Text Format) miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi và xem tài liệu.' },
        epub: { name: 'Tệp mẫu EPUB', description: 'Tải xuống tệp mẫu EPUB miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra trình đọc eBook, chuyển đổi EPUB và các công cụ xuất bản kỹ thuật số.' },
        'invoice-pdf': { name: 'Tệp mẫu PDF hóa đơn', description: 'Tải xuống tệp mẫu PDF hóa đơn miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra xử lý hóa đơn PDF, phân tích hóa đơn và các công cụ quản lý tài liệu.' },
        mobi: { name: 'Tệp mẫu MOBI', description: 'Tải xuống tệp mẫu MOBI miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra chuyển đổi eBook MOBI, đọc MOBI và các công cụ xử lý eBook.' },
        csv: { name: 'Tệp mẫu CSV', description: 'Tải xuống tệp mẫu CSV miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi CSV và xử lý dữ liệu.' },
        xls: { name: 'Tệp mẫu XLS', description: 'Tải xuống tệp mẫu XLS miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi Excel và xử lý dữ liệu.' },
        xlsx: { name: 'Tệp mẫu XLSX', description: 'Tải xuống tệp mẫu XLSX miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi Excel và xử lý dữ liệu.' },
        xml: { name: 'Tệp mẫu XML', description: 'Tải xuống tệp mẫu XML miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích XML và chuyển đổi dữ liệu.' },
        html: { name: 'Tệp mẫu HTML', description: 'Tải xuống tệp mẫu HTML miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra phân tích HTML, phát triển web và các công cụ xác thực HTML.' },
        ods: { name: 'Tệp mẫu ODS', description: 'Tải xuống tệp mẫu ODS OpenDocument Spreadsheet miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi bảng tính và xử lý dữ liệu.' },
        'ansible-yml': { name: 'Tệp mẫu Ansible YML', description: 'Tải xuống tệp mẫu Ansible YML miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích YAML và quản lý cấu hình.' },
        'api-response-json': { name: 'Tệp mẫu JSON phản hồi API', description: 'Tải xuống tệp mẫu JSON phản hồi API miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích JSON và xử lý phản hồi API.' },
        'arduino-ino': { name: 'Tệp mẫu Arduino INO', description: 'Tải xuống tệp mẫu Arduino INO miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ biên dịch mã Arduino và kiểm tra cú pháp.' },
        asc: { name: 'Tệp mẫu ASC', description: 'Tải xuống tệp mẫu ASC (ASCII) miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ xử lý tệp văn bản và mã hóa ASCII.' },
        bat: { name: 'Tệp mẫu BAT', description: 'Tải xuống tệp mẫu BAT miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ thực thi script batch và tự động hóa Windows.' },
        bib: { name: 'Tệp mẫu BIB', description: 'Tải xuống tệp mẫu BIB (BibTeX) miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ quản lý thư mục tài liệu và xử lý trích dẫn.' },
        c: { name: 'Tệp mẫu C', description: 'Tải xuống tệp mẫu C miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ biên dịch mã C và kiểm tra cú pháp.' },
        'can-log': { name: 'Tệp mẫu CAN Log', description: 'Tải xuống tệp mẫu CAN log miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích bus CAN và phân tích nhật ký.' },
        cmd: { name: 'Tệp mẫu CMD', description: 'Tải xuống tệp mẫu CMD miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ thực thi script lệnh và tự động hóa Windows.' },
        conf: { name: 'Tệp mẫu CONF', description: 'Tải xuống tệp mẫu CONF miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích tệp cấu hình và thiết lập hệ thống.' },
        'config-ini': { name: 'Tệp mẫu Config INI', description: 'Tải xuống tệp mẫu Config INI miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích tệp INI và quản lý cấu hình.' },
        cpp: { name: 'Tệp mẫu C++', description: 'Tải xuống tệp mẫu C++ miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ biên dịch mã C++ và kiểm tra cú pháp.' },
        crx: { name: 'Tệp mẫu CRX', description: 'Tải xuống tệp mẫu CRX miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra cài đặt tiện ích mở rộng Chrome, phân tích CRX và các công cụ phát triển tiện ích mở rộng trình duyệt.' },
        cs: { name: 'Tệp mẫu C#', description: 'Tải xuống tệp mẫu C# miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ biên dịch mã C# và kiểm tra cú pháp.' },
        gz: { name: 'Tệp mẫu GZ', description: 'Tải xuống tệp mẫu GZ (gzip) miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra giải nén gzip, trích xuất tệp nén và các công cụ nén tệp.' },
        h: { name: 'Tệp mẫu C Header', description: 'Tải xuống tệp mẫu C Header miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ biên dịch mã C và xử lý tệp tiêu đề.' },
        hdr: { name: 'Tệp mẫu HDR', description: 'Tải xuống tệp mẫu HDR (High Dynamic Range) miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra xử lý hình ảnh HDR, chuyển đổi HDR và các công cụ xem phạm vi động cao.' },
        heic: { name: 'Tệp mẫu HEIC', description: 'Tải xuống tệp mẫu HEIC miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra chuyển đổi hình ảnh HEIC, xem HEIC và các công cụ xử lý định dạng hình ảnh hiện đại.' },
        heif: { name: 'Tệp mẫu HEIF', description: 'Tải xuống tệp mẫu HEIF miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra chuyển đổi hình ảnh HEIF, xem HEIF và các công cụ xử lý định dạng hình ảnh hiện đại.' },
        hex: { name: 'Tệp mẫu HEX', description: 'Tải xuống tệp mẫu HEX (hexadecimal) miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra phân tích tệp hex, lập trình firmware và các công cụ phát triển hệ thống nhúng.' },
        hpp: { name: 'Tệp mẫu C++ Header', description: 'Tải xuống tệp mẫu C++ Header miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ biên dịch mã C++ và xử lý tệp tiêu đề.' },
        css: { name: 'Tệp mẫu CSS', description: 'Tải xuống tệp mẫu CSS miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích CSS, phát triển web và xác thực CSS.' },
        js: { name: 'Tệp mẫu JavaScript', description: 'Tải xuống tệp mẫu JavaScript miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích JavaScript, phát triển web và xác thực mã.' },
        json: { name: 'Tệp mẫu JSON', description: 'Tải xuống tệp mẫu JSON miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích JSON, xử lý dữ liệu và xác thực lược đồ.' },
        md: { name: 'Tệp mẫu Markdown', description: 'Tải xuống tệp mẫu Markdown miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ xử lý Markdown, chuyển đổi tài liệu và tạo tài liệu.' },
        py: { name: 'Tệp mẫu Python', description: 'Tải xuống tệp mẫu Python miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ biên dịch mã Python và kiểm tra cú pháp.' },
        sh: { name: 'Tệp mẫu Shell Script', description: 'Tải xuống tệp mẫu Shell Script miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ thực thi script shell và tự động hóa hệ thống Unix/Linux.' },
        sql: { name: 'Tệp mẫu SQL', description: 'Tải xuống tệp mẫu SQL miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích SQL, quản lý cơ sở dữ liệu và xác thực truy vấn.' },
        ts: { name: 'Tệp mẫu TypeScript', description: 'Tải xuống tệp mẫu TypeScript miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ biên dịch mã TypeScript và kiểm tra kiểu.' },
        yml: { name: 'Tệp mẫu YML', description: 'Tải xuống tệp mẫu YML miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích YAML và quản lý cấu hình.' },
        jpg: { name: 'Tệp mẫu JPG', description: 'Tải xuống tệp mẫu JPG miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi hình ảnh, xử lý hình ảnh và tối ưu hóa web.' },
        png: { name: 'Tệp mẫu PNG', description: 'Tải xuống tệp mẫu PNG miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi hình ảnh, xử lý hình ảnh và đồ họa web.' },
        gif: { name: 'Tệp mẫu GIF', description: 'Tải xuống tệp mẫu GIF miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi hình ảnh, xử lý hình ảnh và hoạt hình web.' },
        webp: { name: 'Tệp mẫu WebP', description: 'Tải xuống tệp mẫu WebP miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi hình ảnh, xử lý hình ảnh và tối ưu hóa web hiện đại.' },
        svg: { name: 'Tệp mẫu SVG', description: 'Tải xuống tệp mẫu SVG miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi đồ họa vector, xử lý SVG và thiết kế web.' },
        bmp: { name: 'Tệp mẫu BMP', description: 'Tải xuống tệp mẫu BMP miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi hình ảnh, xử lý hình ảnh và tương thích định dạng.' },
        ico: { name: 'Tệp mẫu ICO', description: 'Tải xuống tệp mẫu ICO miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi biểu tượng, xử lý biểu tượng và phát triển ứng dụng.' },
        tiff: { name: 'Tệp mẫu TIFF', description: 'Tải xuống tệp mẫu TIFF miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi hình ảnh, xử lý hình ảnh và chỉnh sửa chuyên nghiệp.' },
        tif: { name: 'Tệp mẫu TIF', description: 'Tải xuống tệp mẫu TIF miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi hình ảnh, xử lý hình ảnh và chỉnh sửa chuyên nghiệp.' },
        avif: { name: 'Tệp mẫu AVIF', description: 'Tải xuống tệp mẫu AVIF miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi hình ảnh, xử lý hình ảnh và tối ưu hóa web thế hệ tiếp theo.' },
        mp4: { name: 'Tệp mẫu MP4', description: 'Tải xuống tệp mẫu MP4 miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi video, xử lý video và phát lại đa phương tiện.' },
        avi: { name: 'Tệp mẫu AVI', description: 'Tải xuống tệp mẫu AVI miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi video, xử lý video và tương thích định dạng.' },
        mov: { name: 'Tệp mẫu MOV', description: 'Tải xuống tệp mẫu MOV miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi video, xử lý video và chỉnh sửa video.' },
        wmv: { name: 'Tệp mẫu WMV', description: 'Tải xuống tệp mẫu WMV miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi video, xử lý video và tương thích định dạng Windows.' },
        flv: { name: 'Tệp mẫu FLV', description: 'Tải xuống tệp mẫu FLV miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi video, xử lý video và phát trực tuyến web.' },
        webm: { name: 'Tệp mẫu WebM', description: 'Tải xuống tệp mẫu WebM miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi video, xử lý video và video web hiện đại.' },
        mkv: { name: 'Tệp mẫu MKV', description: 'Tải xuống tệp mẫu MKV miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi video, xử lý video và container đa phương tiện.' },
        mp3: { name: 'Tệp mẫu MP3', description: 'Tải xuống tệp mẫu MP3 miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh, xử lý âm thanh và phát lại đa phương tiện.' },
        wav: { name: 'Tệp mẫu WAV', description: 'Tải xuống tệp mẫu WAV miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh, xử lý âm thanh và âm thanh không mất dữ liệu.' },
        flac: { name: 'Tệp mẫu FLAC', description: 'Tải xuống tệp mẫu FLAC miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh, xử lý âm thanh và âm thanh chất lượng cao.' },
        ogg: { name: 'Tệp mẫu OGG', description: 'Tải xuống tệp mẫu OGG miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh, xử lý âm thanh và âm thanh mã nguồn mở.' },
        wma: { name: 'Tệp mẫu WMA', description: 'Tải xuống tệp mẫu WMA miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh, xử lý âm thanh và tương thích định dạng Windows.' },
        aac: { name: 'Tệp mẫu AAC', description: 'Tải xuống tệp mẫu AAC miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh, xử lý âm thanh và âm thanh hiệu quả cao.' },
        m4a: { name: 'Tệp mẫu M4A', description: 'Tải xuống tệp mẫu M4A miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh, xử lý âm thanh và âm thanh container MPEG-4.' },
        midi: { name: 'Tệp mẫu MIDI', description: 'Tải xuống tệp mẫu MIDI miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ xử lý MIDI, tổng hợp âm nhạc và sản xuất âm nhạc.' },
        cue: { name: 'Tệp mẫu CUE', description: 'Tải xuống tệp mẫu CUE miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra phân tích sheet CUE, ghi CD âm thanh và các công cụ tạo CD.' },
        zip: { name: 'Tệp mẫu ZIP', description: 'Tải xuống tệp mẫu ZIP miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trích xuất tệp nén, nén tệp và quản lý tệp.' },
        rar: { name: 'Tệp mẫu RAR', description: 'Tải xuống tệp mẫu RAR miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trích xuất tệp nén, nén tệp và quản lý tệp.' },
        '7z': { name: 'Tệp mẫu 7Z', description: 'Tải xuống tệp mẫu 7Z miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi tệp nén và trích xuất.' },
        tar: { name: 'Tệp mẫu TAR', description: 'Tải xuống tệp mẫu TAR miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trích xuất tệp nén, nén tệp và quản lý tệp Unix/Linux.' },
        ace: { name: 'Tệp mẫu ACE', description: 'Tải xuống tệp mẫu ACE miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trích xuất tệp nén, nén tệp và quản lý tệp.' },
        arj: { name: 'Tệp mẫu ARJ', description: 'Tải xuống tệp mẫu ARJ miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trích xuất tệp nén, nén tệp và quản lý tệp legacy.' },
        bz2: { name: 'Tệp mẫu BZ2', description: 'Tải xuống tệp mẫu BZ2 (bzip2) miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra giải nén bzip2, trích xuất tệp nén và các công cụ nén tệp.' },
        cab: { name: 'Tệp mẫu CAB', description: 'Tải xuống tệp mẫu CAB miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trích xuất tệp nén CAB, cài đặt phần mềm Windows và quản lý tệp.' },
        cpio: { name: 'Tệp mẫu CPIO', description: 'Tải xuống tệp mẫu CPIO miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trích xuất tệp nén CPIO, nén tệp và quản lý tệp Unix.' },
        dmg: { name: 'Tệp mẫu DMG', description: 'Tải xuống tệp mẫu DMG miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ gắn kết hình ảnh đĩa, cài đặt phần mềm macOS và quản lý tệp.' },
        img: { name: 'Tệp mẫu IMG', description: 'Tải xuống tệp mẫu IMG miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ gắn kết hình ảnh đĩa, tạo hình ảnh đĩa và quản lý tệp.' },
        iso: { name: 'Tệp mẫu ISO', description: 'Tải xuống tệp mẫu ISO miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ gắn kết hình ảnh đĩa, ghi CD/DVD và quản lý tệp.' },
        kmz: { name: 'Tệp mẫu KMZ', description: 'Tải xuống tệp mẫu KMZ miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trích xuất KMZ, xử lý dữ liệu địa lý và tích hợp Google Earth.' },
        laz: { name: 'Tệp mẫu LAZ', description: 'Tải xuống tệp mẫu LAZ miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trích xuất LAZ, xử lý đám mây điểm LiDAR và các công cụ lập bản đồ 3D.' },
        lha: { name: 'Tệp mẫu LHA', description: 'Tải xuống tệp mẫu LHA miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trích xuất LHA, giải nén tệp nén và các công cụ lưu trữ tệp.' },
        lzh: { name: 'Tệp mẫu LZH', description: 'Tải xuống tệp mẫu LZH miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trích xuất LZH, giải nén tệp nén và các công cụ lưu trữ tệp.' },
        lzma: { name: 'Tệp mẫu LZMA', description: 'Tải xuống tệp mẫu LZMA miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ giải nén LZMA, trích xuất tệp nén và nén tệp.' },
        '3ds': { name: 'Tệp mẫu 3DS', description: 'Tải xuống tệp mẫu 3DS miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi mô hình 3D, trình xem 3DS và phần mềm mô hình hóa 3D.' },
        '3gp': { name: 'Tệp mẫu 3GP', description: 'Tải xuống tệp mẫu 3GP miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi video di động, trình phát 3GP và ứng dụng xử lý video cho điện thoại thông minh.' },
        '3mf': { name: 'Tệp mẫu 3MF', description: 'Tải xuống tệp mẫu 3MF miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ in 3D, bộ chuyển đổi 3MF và phần mềm sản xuất bồi đắp.' },
        ac3: { name: 'Tệp mẫu AC3', description: 'Tải xuống tệp mẫu AC3 Dolby Digital miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh Dolby, bộ giải mã AC3 và phần mềm xử lý âm thanh vòm.' },
        ai: { name: 'Tệp mẫu AI', description: 'Tải xuống tệp mẫu AI Adobe Illustrator miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi đồ họa vector, trình xem AI và phần mềm thiết kế đồ họa.' },
        aif: { name: 'Tệp mẫu AIF', description: 'Tải xuống tệp mẫu AIF Audio Interchange File Format miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh không nén, trình phát AIF và phần mềm sản xuất âm thanh chuyên nghiệp.' },
        aiff: { name: 'Tệp mẫu AIFF', description: 'Tải xuống tệp mẫu AIFF Audio Interchange File Format miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh chất lượng cao, trình phát AIFF và phần mềm master hóa âm thanh.' },
        amr: { name: 'Tệp mẫu AMR', description: 'Tải xuống tệp mẫu AMR Adaptive Multi-Rate miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh di động, bộ giải mã AMR và ứng dụng xử lý âm thanh cho điện thoại.' },
        'animated-gif': { name: 'Tệp mẫu GIF động', description: 'Tải xuống tệp mẫu GIF động miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi hoạt ảnh GIF, trình xem GIF động và phần mềm tạo hoạt ảnh web.' },
        'animation-fbx': { name: 'Tệp mẫu Hoạt ảnh FBX', description: 'Tải xuống tệp mẫu Hoạt ảnh FBX miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi hoạt ảnh 3D, trình xem FBX và phần mềm sản xuất hoạt ảnh chuyên nghiệp.' },
        apk: { name: 'Tệp mẫu APK', description: 'Tải xuống tệp mẫu APK Android miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ cài đặt ứng dụng Android, phân tích APK và phần mềm phát triển ứng dụng di động.' },
        apng: { name: 'Tệp mẫu APNG', description: 'Tải xuống tệp mẫu APNG PNG động miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi PNG động, trình xem APNG và phần mềm tạo hoạt ảnh web hiện đại.' },
        appimage: { name: 'Tệp mẫu AppImage', description: 'Tải xuống tệp mẫu AppImage Linux miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chạy ứng dụng Linux di động, cài đặt AppImage và phần mềm phân phối ứng dụng Linux.' },
        ase: { name: 'Tệp mẫu ASE', description: 'Tải xuống tệp mẫu ASE Adobe Swatch Exchange miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi bảng màu, trình xem ASE và phần mềm thiết kế đồ họa chuyên nghiệp.' },
        assetbundle: { name: 'Tệp mẫu AssetBundle', description: 'Tải xuống tệp mẫu AssetBundle Unity miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ tải tài sản Unity, trích xuất AssetBundle và phần mềm phát triển trò chơi Unity.' },
        'barcode-svg': { name: 'Tệp mẫu Mã vạch SVG', description: 'Tải xuống tệp mẫu mã vạch SVG miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ quét mã vạch, chuyển đổi SVG và phần mềm tạo mã vạch vector.' },
        blend: { name: 'Tệp mẫu BLEND', description: 'Tải xuống tệp mẫu BLEND Blender miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi mô hình 3D Blender, trình xem BLEND và phần mềm mô hình hóa 3D mã nguồn mở.' },
        bvh: { name: 'Tệp mẫu BVH', description: 'Tải xuống tệp mẫu BVH motion capture miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ xử lý motion capture, chuyển đổi hoạt ảnh BVH và phần mềm sản xuất hoạt ảnh động học.' },
        caf: { name: 'Tệp mẫu CAF', description: 'Tải xuống tệp mẫu CAF Core Audio Format miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi âm thanh macOS, trình phát CAF và phần mềm xử lý âm thanh Apple.' },
        csr: { name: 'Tệp mẫu CSR', description: 'Tải xuống tệp mẫu CSR Certificate Signing Request miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ quản lý chứng chỉ SSL, phân tích CSR và phần mềm bảo mật mạng và mật mã học.' },
        'customer-database-sql': { name: 'Tệp mẫu Cơ sở dữ liệu Khách hàng SQL', description: 'Tải xuống tệp mẫu cơ sở dữ liệu khách hàng SQL miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ quản lý cơ sở dữ liệu, phân tích SQL và phần mềm quản lý dữ liệu khách hàng và CRM.' },
        dav: { name: 'Tệp mẫu DAV', description: 'Tải xuống tệp mẫu DAV video miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi video DAV, trình phát DAV và phần mềm xử lý video giám sát và an ninh.' },
        dbf: { name: 'Tệp mẫu DBF', description: 'Tải xuống tệp mẫu DBF dBase miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi cơ sở dữ liệu dBase, phân tích DBF và phần mềm quản lý dữ liệu kế thừa.' },
        dds: { name: 'Tệp mẫu DDS', description: 'Tải xuống tệp mẫu DDS DirectDraw Surface miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi texture hình ảnh, trình xem DDS và phần mềm phát triển trò chơi và đồ họa 3D.' },
        dem: { name: 'Tệp mẫu DEM', description: 'Tải xuống tệp mẫu DEM Digital Elevation Model miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ xử lý dữ liệu độ cao, chuyển đổi DEM và phần mềm bản đồ và GIS.' },
        der: { name: 'Tệp mẫu DER', description: 'Tải xuống tệp mẫu DER chứng chỉ mã hóa miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ quản lý chứng chỉ, phân tích DER và phần mềm bảo mật và mật mã học.' },
        dmp: { name: 'Tệp mẫu DMP', description: 'Tải xuống tệp mẫu DMP memory dump miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích bộ nhớ, gỡ lỗi DMP và phần mềm chẩn đoán hệ thống và pháp y.' },
        dng: { name: 'Tệp mẫu DNG', description: 'Tải xuống tệp mẫu DNG Digital Negative raw image miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ xử lý hình ảnh raw, chuyển đổi DNG và phần mềm nhiếp ảnh chuyên nghiệp và chỉnh sửa ảnh.' },
        'docker-compose-yml': { name: 'Tệp mẫu Docker Compose YML', description: 'Tải xuống tệp mẫu Docker Compose YML miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ cấu hình Docker, phân tích YAML và phần mềm container hóa và điều phối Docker.' },
        dockerfile: { name: 'Tệp mẫu Dockerfile', description: 'Tải xuống tệp mẫu Dockerfile miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ build Docker, phân tích Dockerfile và phần mềm phát triển và triển khai container.' },
        dwg: { name: 'Tệp mẫu DWG', description: 'Tải xuống tệp mẫu DWG AutoCAD miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi bản vẽ AutoCAD, trình xem DWG và phần mềm CAD chuyên nghiệp và kiến trúc.' },
        dxf: { name: 'Tệp mẫu DXF', description: 'Tải xuống tệp mẫu DXF Drawing Exchange Format miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi bản vẽ CAD, trình xem DXF và phần mềm trao đổi tệp bản vẽ và kỹ thuật.' },
        editorconfig: { name: 'Tệp mẫu EditorConfig', description: 'Tải xuống tệp mẫu EditorConfig miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ cấu hình trình soạn thảo mã, phân tích EditorConfig và phần mềm phát triển và định dạng mã.' },
        elf: { name: 'Tệp mẫu ELF', description: 'Tải xuống tệp mẫu ELF Executable and Linkable Format miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích nhị phân Linux, phân tích ELF và phần mềm phát triển hệ thống và reverse engineering.' },
        eps: { name: 'Tệp mẫu EPS', description: 'Tải xuống tệp mẫu EPS Encapsulated PostScript miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi đồ họa vector, trình xem EPS và phần mềm thiết kế đồ họa và in ấn chuyên nghiệp.' },
        exe: { name: 'Tệp mẫu EXE', description: 'Tải xuống tệp mẫu EXE Windows thực thi miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phân tích nhị phân Windows, phân tích EXE và phần mềm phát triển Windows và bảo mật.' },
        exr: { name: 'Tệp mẫu EXR', description: 'Tải xuống tệp mẫu EXR OpenEXR high dynamic range image miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ xử lý hình ảnh HDR, chuyển đổi EXR và phần mềm hiển thị dải động cao và VFX.' },
        icns: { name: 'Tệp mẫu ICNS', description: 'Tải xuống tệp mẫu ICNS macOS icon miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi biểu tượng macOS, trình xem ICNS và phần mềm thiết kế biểu tượng và phát triển macOS.' },
        ifc: { name: 'Tệp mẫu IFC', description: 'Tải xuống tệp mẫu IFC Industry Foundation Classes miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi BIM, trình xem IFC và phần mềm mô hình hóa thông tin tòa nhà và kiến trúc.' },
        iges: { name: 'Tệp mẫu IGES', description: 'Tải xuống tệp mẫu IGES Initial Graphics Exchange Specification miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi mô hình CAD, trình xem IGES và phần mềm trao đổi mô hình 3D và kỹ thuật.' },
        igs: { name: 'Tệp mẫu IGS', description: 'Tải xuống tệp mẫu IGS Initial Graphics Exchange Specification miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi mô hình CAD, trình xem IGS và phần mềm trao đổi tệp bản vẽ và kỹ thuật cơ khí.' },
        indd: { name: 'Tệp mẫu INDD', description: 'Tải xuống tệp mẫu INDD Adobe InDesign miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi bố cục, trình xem INDD và phần mềm xuất bản và thiết kế biên tập chuyên nghiệp.' },
        intelhex: { name: 'Tệp mẫu Intel HEX', description: 'Tải xuống tệp mẫu Intel HEX miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ lập trình vi điều khiển, phân tích Intel HEX và phần mềm phát triển nhúng và firmware.' },
        ipa: { name: 'Tệp mẫu IPA', description: 'Tải xuống tệp mẫu IPA iOS App Store Package miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ cài đặt ứng dụng iOS, phân tích IPA và phần mềm phát triển ứng dụng di động Apple.' },
        ipynb: { name: 'Tệp mẫu IPYNB', description: 'Tải xuống tệp mẫu IPYNB Jupyter Notebook miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ thực thi notebook Jupyter, phân tích IPYNB và phần mềm khoa học dữ liệu và phân tích tương tác.' },
        jar: { name: 'Tệp mẫu JAR', description: 'Tải xuống tệp mẫu JAR Java Archive miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ thực thi Java, trích xuất JAR và phần mềm phát triển Java và triển khai ứng dụng.' },
        java: { name: 'Tệp mẫu Java', description: 'Tải xuống tệp mẫu Java source code miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ biên dịch Java, phân tích mã Java và phần mềm phát triển Java và IDE.' },
        jks: { name: 'Tệp mẫu JKS', description: 'Tải xuống tệp mẫu JKS Java KeyStore miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ quản lý khóa Java, phân tích JKS và phần mềm bảo mật Java và mật mã học.' },
        jpeg: { name: 'Tệp mẫu JPEG', description: 'Tải xuống tệp mẫu JPEG Joint Photographic Experts Group miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi hình ảnh JPEG, xử lý hình ảnh và phần mềm nhiếp ảnh kỹ thuật số và tối ưu hóa web.' },
        jsonl: { name: 'Tệp mẫu JSONL', description: 'Tải xuống tệp mẫu JSONL JSON Lines miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ xử lý dữ liệu JSON, phân tích JSONL và phần mềm xử lý dữ liệu streaming và big data.' },
        jsx: { name: 'Tệp mẫu JSX', description: 'Tải xuống tệp mẫu JSX React JavaScript XML miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ biên dịch React, phân tích JSX và phần mềm phát triển React và frontend.' },
        jwt: { name: 'Tệp mẫu JWT', description: 'Tải xuống tệp mẫu JWT JSON Web Token miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ xác thực JWT, phân tích JWT và phần mềm bảo mật web và API.' },
        key: { name: 'Tệp mẫu KEY', description: 'Tải xuống tệp mẫu KEY khóa riêng tư miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ quản lý khóa mật mã, phân tích KEY và phần mềm bảo mật và mật mã học.' },
        kml: { name: 'Tệp mẫu KML', description: 'Tải xuống tệp mẫu KML Keyhole Markup Language miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trực quan hóa địa lý, phân tích KML và phần mềm bản đồ và Google Earth.' },
        kt: { name: 'Tệp mẫu Kotlin', description: 'Tải xuống tệp mẫu Kotlin source code miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ biên dịch Kotlin, phân tích mã Kotlin và phần mềm phát triển Android và đa nền tảng.' },
        las: { name: 'Tệp mẫu LAS', description: 'Tải xuống tệp mẫu LAS LiDAR point cloud data miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ xử lý đám mây điểm, chuyển đổi LAS và phần mềm viễn thám và bản đồ 3D.' },
        lua: { name: 'Tệp mẫu Lua', description: 'Tải xuống tệp mẫu Lua source code miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ thực thi Lua, phân tích mã Lua và phần mềm phát triển script và trò chơi video.' },
        m3u: { name: 'Tệp mẫu M3U', description: 'Tải xuống tệp mẫu M3U playlist miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ phát playlist, phân tích M3U và phần mềm phát đa phương tiện và streaming âm thanh.' },
        m3u8: { name: 'Tệp mẫu M3U8', description: 'Tải xuống tệp mẫu M3U8 HLS playlist miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ streaming HLS, phân tích M3U8 và phần mềm streaming video và phát trực tiếp.' },
        m4v: { name: 'Tệp mẫu M4V', description: 'Tải xuống tệp mẫu M4V MPEG-4 video miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi video MPEG-4, trình phát M4V và phần mềm xử lý video Apple và iTunes.' },
        makefile: { name: 'Tệp mẫu Makefile', description: 'Tải xuống tệp mẫu Makefile miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ build tự động, phân tích Makefile và phần mềm biên dịch và phát triển hệ thống.' },
        max: { name: 'Tệp mẫu MAX', description: 'Tải xuống tệp mẫu MAX 3ds Max miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi mô hình 3D, trình xem MAX và phần mềm mô hình hóa 3D chuyên nghiệp và hoạt ảnh.' },
        mb: { name: 'Tệp mẫu MB', description: 'Tải xuống tệp mẫu MB Maya Binary miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ chuyển đổi cảnh Maya, trình xem MB và phần mềm mô hình hóa 3D và hoạt ảnh chuyên nghiệp.' },
        mbtiles: { name: 'Tệp mẫu MBTiles', description: 'Tải xuống tệp mẫu MBTiles MapBox tiles miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ trực quan hóa bản đồ, trích xuất MBTiles và phần mềm bản đồ web và ứng dụng di động.' },
        mdx: { name: 'Tệp mẫu MDX', description: 'Tải xuống tệp mẫu MDX Markdown Extended miễn phí để kiểm tra. Nhiều kích thước tệp có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm tra các công cụ xử lý tài liệu, phân tích MDX và phần mềm phát triển web và tạo trang web tĩnh.' }
      }
    }
  },
  tr: {
    samples_page: {
      meta: {
        title: 'Ücretsiz örnek dosyalar – Test dosyalarını indir | MorphyHub',
        description: 'MorphyHub dönüştürücülerini, sıkıştırıcılarını ve görüntüleyicilerini test etmek için ücretsiz örnek görüntü, belge ve arşiv dosyaları alın.',
        keywords: 'örnek dosyalar, test dosyaları, örnekleri indir, ücretsiz test dosyaları, DOCX örnekleri, dosya örnekleri, dönüştürme için test dosyaları'
      },
      schema: {
        name: 'İndirilecek ve test edilecek ücretsiz örnek dosyalar',
        description: 'Çeşitli türlerde ücretsiz örnek dosyalar indirin — görüntüler, belgeler, ses, video ve arşivler. Bunları test, demo veya herhangi bir platformda yazılım doğrulama için kullanın.'
      },
      hero: {
        title: 'Örnek dosyalar',
        description: 'Test için ücretsiz örnek dosyalar indirin. Dönüştürme ve işleme araçlarınızı test etmek için çeşitli formatlar için birden fazla dosya boyutu mevcuttur.'
      },
      back_button: 'Ana sayfaya dön',
      search: {
        placeholder: 'Örnek dosyaları ara... (örn. DOCX, JPG, PDF)',
        results: '{{count}} örnek dosya bulundu',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'BELGE ÖRNEKLERİ',
        data: 'VERİ ÖRNEKLERİ',
        application: 'UYGULAMA ÖRNEKLERİ',
        design_3d: '3D & TASARIM ÖRNEKLERİ',
        image_video: 'GÖRÜNTÜ & VİDEO ÖRNEKLERİ',
        audio: 'SES ÖRNEKLERİ',
        archive: 'ARŞİV ÖRNEKLERİ'
      },
      actions: { download: 'İndir' },
      no_results: {
        title: 'Örnek dosya bulunamadı',
        description: '"DOCX" veya "JPG" gibi bir şey aramayı deneyin',
        clear: 'Aramayı temizle'
      },
      features: {
        title: 'Neden örnek dosyalarımızı seçmelisiniz?',
        items: [
          { title: 'Ücretsiz ve kolay erişim', description: 'Kayıt veya ödeme olmadan anında örnek dosyalar indirin.' },
          { title: 'Birden fazla boyut', description: 'Kapsamlı testler için çeşitli dosya boyutlarından (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) seçim yapın.' },
          { title: 'Geniş çeşitlilik', description: 'Birden fazla kategoride örneklere erişin: belgeler, görüntüler, ses, video, arşivler ve daha fazlası.' }
        ]
      },
      format_description_template: 'Test için ücretsiz {{format}} örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. {{purpose}} test etmek için mükemmel.',
      formats: {
        docx: { name: 'DOCX Örnek Dosyalar', description: 'Test için ücretsiz DOCX örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Belge dönüştürme araçlarını test etmek için mükemmel.' },
        doc: { name: 'DOC Örnek Dosyalar', description: 'Test için ücretsiz DOC örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Belge dönüştürme araçlarını test etmek için mükemmel.' },
        pdf: { name: 'PDF Örnek Dosyalar', description: 'Test için ücretsiz PDF örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Belge dönüştürme araçlarını test etmek için mükemmel.' },
        odp: { name: 'ODP Örnek Dosyalar', description: 'Test için ücretsiz ODP OpenDocument Presentation örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Sunum dönüştürme ve görüntüleme araçlarını test etmek için mükemmel.' },
        rtf: { name: 'RTF Örnek Dosyalar', description: 'Test için ücretsiz RTF (Rich Text Format) örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Belge dönüştürme ve görüntüleme araçlarını test etmek için mükemmel.' },
        epub: { name: 'EPUB Örnek Dosyalar', description: 'Test için ücretsiz EPUB örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. e-Kitap okuyucuları, EPUB dönüştürme ve dijital yayıncılık araçlarını test etmek için mükemmel.' },
        'invoice-pdf': { name: 'Fatura PDF Örnek Dosyalar', description: 'Test için ücretsiz fatura PDF örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. PDF fatura işleme, fatura ayrıştırma ve belge yönetim araçlarını test etmek için mükemmel.' },
        mobi: { name: 'MOBI Örnek Dosyalar', description: 'Test için ücretsiz MOBI örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. MOBI e-Kitap dönüştürme, MOBI okuma ve e-Kitap işleme araçlarını test etmek için mükemmel.' },
        csv: { name: 'CSV Örnek Dosyalar', description: 'Test için ücretsiz CSV örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. CSV dönüştürme ve veri işleme araçlarını test etmek için mükemmel.' },
        xls: { name: 'XLS Örnek Dosyalar', description: 'Test için ücretsiz XLS örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Excel dönüştürme ve veri işleme araçlarını test etmek için mükemmel.' },
        xlsx: { name: 'XLSX Örnek Dosyalar', description: 'Test için ücretsiz XLSX örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Excel dönüştürme ve veri işleme araçlarını test etmek için mükemmel.' },
        xml: { name: 'XML Örnek Dosyalar', description: 'Test için ücretsiz XML örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. XML ayrıştırma ve veri dönüştürme araçlarını test etmek için mükemmel.' },
        html: { name: 'HTML Örnek Dosyalar', description: 'Test için ücretsiz HTML örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. HTML ayrıştırma, web geliştirme ve HTML doğrulama araçlarını test etmek için mükemmel.' },
        ods: { name: 'ODS Örnek Dosyalar', description: 'Test için ücretsiz ODS OpenDocument Spreadsheet örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Elektronik tablo dönüştürme ve veri işleme araçlarını test etmek için mükemmel.' },
        'ansible-yml': { name: 'Ansible YML Örnek Dosyalar', description: 'Test için ücretsiz Ansible YML örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. YAML ayrıştırma ve yapılandırma yönetim araçlarını test etmek için mükemmel.' },
        'api-response-json': { name: 'API Response JSON Örnek Dosyalar', description: 'Test için ücretsiz API response JSON örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. JSON ayrıştırma ve API response işleme araçlarını test etmek için mükemmel.' },
        'arduino-ino': { name: 'Arduino INO Örnek Dosyalar', description: 'Test için ücretsiz Arduino INO örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Arduino kod derleme ve sözdizimi kontrol araçlarını test etmek için mükemmel.' },
        asc: { name: 'ASC Örnek Dosyalar', description: 'Test için ücretsiz ASC (ASCII) örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Metin dosyası işleme ve ASCII kodlama araçlarını test etmek için mükemmel.' },
        bat: { name: 'BAT Örnek Dosyalar', description: 'Test için ücretsiz BAT batch script örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Batch script yürütme ve Windows otomasyon araçlarını test etmek için mükemmel.' },
        bib: { name: 'BIB Örnek Dosyalar', description: 'Test için ücretsiz BIB (BibTeX) bibliyografi örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Bibliyografi yönetimi ve alıntı işleme araçlarını test etmek için mükemmel.' },
        c: { name: 'C Örnek Dosyalar', description: 'Test için ücretsiz C kaynak kodu örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. C kod derleme ve sözdizimi kontrol araçlarını test etmek için mükemmel.' },
        'can-log': { name: 'CAN Log Örnek Dosyalar', description: 'Test için ücretsiz CAN log örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. CAN bus analizi ve log ayrıştırma araçlarını test etmek için mükemmel.' },
        cmd: { name: 'CMD Örnek Dosyalar', description: 'Test için ücretsiz CMD komut script örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Komut script yürütme ve Windows otomasyon araçlarını test etmek için mükemmel.' },
        conf: { name: 'CONF Örnek Dosyalar', description: 'Test için ücretsiz CONF yapılandırma dosyası örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Yapılandırma dosyası ayrıştırma ve sistem kurulum araçlarını test etmek için mükemmel.' },
        'config-ini': { name: 'Config INI Örnek Dosyalar', description: 'Test için ücretsiz Config INI INI yapılandırma dosyası örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. INI dosyası ayrıştırma ve yapılandırma yönetim araçlarını test etmek için mükemmel.' },
        cpp: { name: 'C++ Örnek Dosyalar', description: 'Test için ücretsiz C++ kaynak kodu örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. C++ kod derleme ve sözdizimi kontrol araçlarını test etmek için mükemmel.' },
        crx: { name: 'CRX Örnek Dosyalar', description: 'Test için ücretsiz CRX Chrome uzantı paketi örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Chrome uzantı kurulumu, CRX analizi ve tarayıcı uzantı geliştirme araçlarını test etmek için mükemmel.' },
        cs: { name: 'C# Örnek Dosyalar', description: 'Test için ücretsiz C# kaynak kodu örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. C# kod derleme ve sözdizimi kontrol araçlarını test etmek için mükemmel.' },
        gz: { name: 'GZ Örnek Dosyalar', description: 'Test için ücretsiz GZ (gzip) sıkıştırılmış arşiv örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. gzip açma, arşiv çıkarma ve dosya sıkıştırma araçlarını test etmek için mükemmel.' },
        h: { name: 'C Header Örnek Dosyalar', description: 'Test için ücretsiz C header örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. C kod derleme ve header dosyası işleme araçlarını test etmek için mükemmel.' },
        hdr: { name: 'HDR Örnek Dosyalar', description: 'Test için ücretsiz HDR (High Dynamic Range) görüntü örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. HDR görüntü işleme, HDR dönüştürme ve yüksek dinamik aralık görüntüleme araçlarını test etmek için mükemmel.' },
        heic: { name: 'HEIC Örnek Dosyalar', description: 'Test için ücretsiz HEIC (High Efficiency Image Container) örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. HEIC görüntü dönüştürme, HEIC görüntüleme ve modern görüntü formatı işleme araçlarını test etmek için mükemmel.' },
        heif: { name: 'HEIF Örnek Dosyalar', description: 'Test için ücretsiz HEIF (High Efficiency Image Format) örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. HEIF görüntü dönüştürme, HEIF görüntüleme ve modern görüntü formatı işleme araçlarını test etmek için mükemmel.' },
        hex: { name: 'HEX Örnek Dosyalar', description: 'Test için ücretsiz HEX (onaltılık) örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Onaltılık dosya ayrıştırma, firmware programlama ve gömülü sistemler geliştirme araçlarını test etmek için mükemmel.' },
        hpp: { name: 'C++ Header Örnek Dosyalar', description: 'Test için ücretsiz C++ header örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. C++ kod derleme ve header dosyası işleme araçlarını test etmek için mükemmel.' },
        css: { name: 'CSS Örnek Dosyalar', description: 'Test için ücretsiz CSS örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. CSS ayrıştırma, web geliştirme ve CSS doğrulama araçlarını test etmek için mükemmel.' },
        js: { name: 'JavaScript Örnek Dosyalar', description: 'Test için ücretsiz JavaScript örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. JavaScript ayrıştırma, web geliştirme ve kod doğrulama araçlarını test etmek için mükemmel.' },
        json: { name: 'JSON Örnek Dosyalar', description: 'Test için ücretsiz JSON örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. JSON ayrıştırma, veri işleme ve şema doğrulama araçlarını test etmek için mükemmel.' },
        md: { name: 'Markdown Örnek Dosyalar', description: 'Test için ücretsiz Markdown örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Markdown işleme, belge dönüştürme ve dokümantasyon oluşturma araçlarını test etmek için mükemmel.' },
        py: { name: 'Python Örnek Dosyalar', description: 'Test için ücretsiz Python örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Python kod derleme ve sözdizimi kontrol araçlarını test etmek için mükemmel.' },
        sh: { name: 'Shell Script Örnek Dosyalar', description: 'Test için ücretsiz Shell Script örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Shell script yürütme ve Unix/Linux otomasyon araçlarını test etmek için mükemmel.' },
        sql: { name: 'SQL Örnek Dosyalar', description: 'Test için ücretsiz SQL örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. SQL ayrıştırma, veritabanı yönetimi ve sorgu doğrulama araçlarını test etmek için mükemmel.' },
        ts: { name: 'TypeScript Örnek Dosyalar', description: 'Test için ücretsiz TypeScript örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. TypeScript kod derleme ve tip kontrol araçlarını test etmek için mükemmel.' },
        yml: { name: 'YML Örnek Dosyalar', description: 'Test için ücretsiz YML örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. YAML ayrıştırma ve yapılandırma yönetim araçlarını test etmek için mükemmel.' },
        jpg: { name: 'JPG Örnek Dosyalar', description: 'Test için ücretsiz JPG örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Görüntü dönüştürme araçları, görüntü işleme ve web optimizasyonu test etmek için mükemmel.' },
        png: { name: 'PNG Örnek Dosyalar', description: 'Test için ücretsiz PNG örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Görüntü dönüştürme araçları, görüntü işleme ve web grafikleri test etmek için mükemmel.' },
        gif: { name: 'GIF Örnek Dosyalar', description: 'Test için ücretsiz GIF örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Görüntü dönüştürme araçları, görüntü işleme ve web animasyonları test etmek için mükemmel.' },
        webp: { name: 'WebP Örnek Dosyalar', description: 'Test için ücretsiz WebP örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Görüntü dönüştürme araçları, görüntü işleme ve modern web optimizasyonu test etmek için mükemmel.' },
        svg: { name: 'SVG Örnek Dosyalar', description: 'Test için ücretsiz SVG örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Vektör grafik dönüştürme araçları, SVG işleme ve web tasarımı test etmek için mükemmel.' },
        bmp: { name: 'BMP Örnek Dosyalar', description: 'Test için ücretsiz BMP örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Görüntü dönüştürme araçları, görüntü işleme ve format uyumluluğu test etmek için mükemmel.' },
        ico: { name: 'ICO Örnek Dosyalar', description: 'Test için ücretsiz ICO örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. İkon dönüştürme araçları, ikon işleme ve uygulama geliştirme test etmek için mükemmel.' },
        tiff: { name: 'TIFF Örnek Dosyalar', description: 'Test için ücretsiz TIFF örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Görüntü dönüştürme araçları, görüntü işleme ve profesyonel düzenleme test etmek için mükemmel.' },
        tif: { name: 'TIF Örnek Dosyalar', description: 'Test için ücretsiz TIF örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Görüntü dönüştürme araçları, görüntü işleme ve profesyonel düzenleme test etmek için mükemmel.' },
        avif: { name: 'AVIF Örnek Dosyalar', description: 'Test için ücretsiz AVIF örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Görüntü dönüştürme araçları, görüntü işleme ve next-gen web optimizasyonu test etmek için mükemmel.' },
        mp4: { name: 'MP4 Örnek Dosyalar', description: 'Test için ücretsiz MP4 örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Video dönüştürme araçları, video işleme ve multimedya oynatma test etmek için mükemmel.' },
        avi: { name: 'AVI Örnek Dosyalar', description: 'Test için ücretsiz AVI örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Video dönüştürme araçları, video işleme ve format uyumluluğu test etmek için mükemmel.' },
        mov: { name: 'MOV Örnek Dosyalar', description: 'Test için ücretsiz MOV örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Video dönüştürme araçları, video işleme ve video düzenleme test etmek için mükemmel.' },
        wmv: { name: 'WMV Örnek Dosyalar', description: 'Test için ücretsiz WMV örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Video dönüştürme araçları, video işleme ve Windows format uyumluluğu test etmek için mükemmel.' },
        flv: { name: 'FLV Örnek Dosyalar', description: 'Test için ücretsiz FLV örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Video dönüştürme araçları, video işleme ve web akışı test etmek için mükemmel.' },
        webm: { name: 'WebM Örnek Dosyalar', description: 'Test için ücretsiz WebM örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Video dönüştürme araçları, video işleme ve modern web video test etmek için mükemmel.' },
        mkv: { name: 'MKV Örnek Dosyalar', description: 'Test için ücretsiz MKV örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Video dönüştürme araçları, video işleme ve multimedya konteynerleri test etmek için mükemmel.' },
        mp3: { name: 'MP3 Örnek Dosyalar', description: 'Test için ücretsiz MP3 örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Ses dönüştürme araçları, ses işleme ve multimedya oynatma test etmek için mükemmel.' },
        wav: { name: 'WAV Örnek Dosyalar', description: 'Test için ücretsiz WAV örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Ses dönüştürme araçları, ses işleme ve kayıpsız ses test etmek için mükemmel.' },
        flac: { name: 'FLAC Örnek Dosyalar', description: 'Test için ücretsiz FLAC örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Ses dönüştürme araçları, ses işleme ve yüksek kaliteli ses test etmek için mükemmel.' },
        ogg: { name: 'OGG Örnek Dosyalar', description: 'Test için ücretsiz OGG örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Ses dönüştürme araçları, ses işleme ve açık kaynak ses test etmek için mükemmel.' },
        wma: { name: 'WMA Örnek Dosyalar', description: 'Test için ücretsiz WMA örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Ses dönüştürme araçları, ses işleme ve Windows format uyumluluğu test etmek için mükemmel.' },
        aac: { name: 'AAC Örnek Dosyalar', description: 'Test için ücretsiz AAC örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Ses dönüştürme araçları, ses işleme ve yüksek verimlilik ses test etmek için mükemmel.' },
        m4a: { name: 'M4A Örnek Dosyalar', description: 'Test için ücretsiz M4A örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Ses dönüştürme araçları, ses işleme ve MPEG-4 konteyner ses test etmek için mükemmel.' },
        midi: { name: 'MIDI Örnek Dosyalar', description: 'Test için ücretsiz MIDI örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. MIDI işleme araçları, müzik sentezi ve müzik üretimi test etmek için mükemmel.' },
        cue: { name: 'CUE Örnek Dosyalar', description: 'Test için ücretsiz CUE örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. CUE sheet ayrıştırma, ses CD yazma ve CD yazma araçlarını test etmek için mükemmel.' },
        zip: { name: 'ZIP Örnek Dosyalar', description: 'Test için ücretsiz ZIP örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Arşiv çıkarma araçları, dosya sıkıştırma ve dosya yönetimi test etmek için mükemmel.' },
        rar: { name: 'RAR Örnek Dosyalar', description: 'Test için ücretsiz RAR örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Arşiv çıkarma araçları, dosya sıkıştırma ve dosya yönetimi test etmek için mükemmel.' },
        '7z': { name: '7Z Örnek Dosyalar', description: 'Test için ücretsiz 7Z örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Arşiv dönüştürme ve çıkarma araçlarını test etmek için mükemmel.' },
        tar: { name: 'TAR Örnek Dosyalar', description: 'Test için ücretsiz TAR örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Arşiv çıkarma araçları, dosya sıkıştırma ve Unix/Linux dosya yönetimi test etmek için mükemmel.' },
        ace: { name: 'ACE Örnek Dosyalar', description: 'Test için ücretsiz ACE örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Arşiv çıkarma araçları, dosya sıkıştırma ve dosya yönetimi test etmek için mükemmel.' },
        arj: { name: 'ARJ Örnek Dosyalar', description: 'Test için ücretsiz ARJ örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Arşiv çıkarma araçları, dosya sıkıştırma ve eski dosya yönetimi test etmek için mükemmel.' },
        bz2: { name: 'BZ2 Örnek Dosyalar', description: 'Test için ücretsiz BZ2 (bzip2) örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. bzip2 açma, arşiv çıkarma ve dosya sıkıştırma araçlarını test etmek için mükemmel.' },
        cab: { name: 'CAB Örnek Dosyalar', description: 'Test için ücretsiz CAB örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. CAB arşiv çıkarma araçları, Windows yazılım kurulumu ve dosya yönetimi test etmek için mükemmel.' },
        cpio: { name: 'CPIO Örnek Dosyalar', description: 'Test için ücretsiz CPIO örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. CPIO arşiv çıkarma araçları, dosya sıkıştırma ve Unix dosya yönetimi test etmek için mükemmel.' },
        dmg: { name: 'DMG Örnek Dosyalar', description: 'Test için ücretsiz DMG örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Disk görüntüsü bağlama araçları, macOS yazılım kurulumu ve dosya yönetimi test etmek için mükemmel.' },
        img: { name: 'IMG Örnek Dosyalar', description: 'Test için ücretsiz IMG örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Disk görüntüsü bağlama araçları, disk görüntüsü oluşturma ve dosya yönetimi test etmek için mükemmel.' },
        iso: { name: 'ISO Örnek Dosyalar', description: 'Test için ücretsiz ISO örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Disk görüntüsü bağlama araçları, CD/DVD yazma ve dosya yönetimi test etmek için mükemmel.' },
        kmz: { name: 'KMZ Örnek Dosyalar', description: 'Test için ücretsiz KMZ sıkıştırılmış Keyhole Markup Language örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. KMZ çıkarma, coğrafi veri işleme ve Google Earth entegrasyon araçlarını test etmek için mükemmel.' },
        laz: { name: 'LAZ Örnek Dosyalar', description: 'Test için ücretsiz LAZ sıkıştırılmış LiDAR nokta bulutu veri örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. LAZ çıkarma, nokta bulutu işleme ve 3D haritalama araçlarını test etmek için mükemmel.' },
        lha: { name: 'LHA Örnek Dosyalar', description: 'Test için ücretsiz LHA LHA arşiv örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. LHA çıkarma, arşiv açma ve dosya arşivleme araçlarını test etmek için mükemmel.' },
        lzh: { name: 'LZH Örnek Dosyalar', description: 'Test için ücretsiz LZH LZH arşiv örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. LZH çıkarma, arşiv açma ve dosya arşivleme araçlarını test etmek için mükemmel.' },
        lzma: { name: 'LZMA Örnek Dosyalar', description: 'Test için ücretsiz LZMA LZMA sıkıştırılmış örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. LZMA açma, arşiv çıkarma ve dosya sıkıştırma araçlarını test etmek için mükemmel.' },
        '3ds': { name: '3DS Örnek Dosyalar', description: 'Test için ücretsiz 3DS 3D model örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. 3D model dönüştürme araçları, 3DS görüntüleyiciler ve 3D modelleme yazılımlarını test etmek için mükemmel.' },
        '3gp': { name: '3GP Örnek Dosyalar', description: 'Test için ücretsiz 3GP mobil video örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Mobil video dönüştürme araçları, 3GP oynatıcılar ve akıllı telefonlar için video işleme uygulamalarını test etmek için mükemmel.' },
        '3mf': { name: '3MF Örnek Dosyalar', description: 'Test için ücretsiz 3MF 3D baskı örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. 3D baskı araçları, 3MF dönüştürücüler ve eklemeli üretim yazılımlarını test etmek için mükemmel.' },
        ac3: { name: 'AC3 Örnek Dosyalar', description: 'Test için ücretsiz AC3 Dolby Digital ses örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Dolby ses dönüştürme araçları, AC3 çözücüler ve surround ses işleme yazılımlarını test etmek için mükemmel.' },
        ai: { name: 'AI Örnek Dosyalar', description: 'Test için ücretsiz AI Adobe Illustrator vektör grafik örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Vektör grafik dönüştürme araçları, AI görüntüleyiciler ve grafik tasarım yazılımlarını test etmek için mükemmel.' },
        aif: { name: 'AIF Örnek Dosyalar', description: 'Test için ücretsiz AIF Audio Interchange File Format sıkıştırılmamış ses örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Sıkıştırılmamış ses dönüştürme araçları, AIF oynatıcılar ve profesyonel ses üretim yazılımlarını test etmek için mükemmel.' },
        aiff: { name: 'AIFF Örnek Dosyalar', description: 'Test için ücretsiz AIFF Audio Interchange File Format yüksek kaliteli ses örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Yüksek kaliteli ses dönüştürme araçları, AIFF oynatıcılar ve ses mastering yazılımlarını test etmek için mükemmel.' },
        amr: { name: 'AMR Örnek Dosyalar', description: 'Test için ücretsiz AMR Adaptive Multi-Rate mobil ses örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Mobil ses dönüştürme araçları, AMR çözücüler ve telefonlar için ses işleme uygulamalarını test etmek için mükemmel.' },
        'animated-gif': { name: 'Animasyonlu GIF Örnek Dosyalar', description: 'Test için ücretsiz animasyonlu GIF örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. GIF animasyon dönüştürme araçları, animasyonlu GIF görüntüleyiciler ve web animasyon oluşturma yazılımlarını test etmek için mükemmel.' },
        'animation-fbx': { name: 'Animasyon FBX Örnek Dosyalar', description: 'Test için ücretsiz Animasyon FBX 3D animasyon örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. 3D animasyon dönüştürme araçları, FBX görüntüleyiciler ve profesyonel animasyon üretim yazılımlarını test etmek için mükemmel.' },
        apk: { name: 'APK Örnek Dosyalar', description: 'Test için ücretsiz APK Android uygulama örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Android uygulama kurulum araçları, APK analiz ve mobil uygulama geliştirme yazılımlarını test etmek için mükemmel.' },
        apng: { name: 'APNG Örnek Dosyalar', description: 'Test için ücretsiz APNG animasyonlu PNG örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Animasyonlu PNG dönüştürme araçları, APNG görüntüleyiciler ve modern web animasyon oluşturma yazılımlarını test etmek için mükemmel.' },
        appimage: { name: 'AppImage Örnek Dosyalar', description: 'Test için ücretsiz AppImage Linux örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Taşınabilir Linux uygulama çalıştırma araçları, AppImage kurulum ve Linux uygulama dağıtım yazılımlarını test etmek için mükemmel.' },
        ase: { name: 'ASE Örnek Dosyalar', description: 'Test için ücretsiz ASE Adobe Swatch Exchange renk paleti örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Renk paleti dönüştürme araçları, ASE görüntüleyiciler ve profesyonel grafik tasarım yazılımlarını test etmek için mükemmel.' },
        assetbundle: { name: 'AssetBundle Örnek Dosyalar', description: 'Test için ücretsiz AssetBundle Unity oyun varlığı örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Unity varlık yükleme araçları, AssetBundle çıkarma ve Unity oyun geliştirme yazılımlarını test etmek için mükemmel.' },
        'barcode-svg': { name: 'Barkod SVG Örnek Dosyalar', description: 'Test için ücretsiz barkod SVG vektör grafik örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Barkod tarama araçları, SVG dönüştürme ve vektör barkod oluşturma yazılımlarını test etmek için mükemmel.' },
        blend: { name: 'BLEND Örnek Dosyalar', description: 'Test için ücretsiz BLEND Blender 3D model örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Blender 3D model dönüştürme araçları, BLEND görüntüleyiciler ve açık kaynak 3D modelleme yazılımlarını test etmek için mükemmel.' },
        bvh: { name: 'BVH Örnek Dosyalar', description: 'Test için ücretsiz BVH hareket yakalama örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Hareket yakalama işleme araçları, BVH animasyon dönüştürme ve sinematik animasyon üretim yazılımlarını test etmek için mükemmel.' },
        caf: { name: 'CAF Örnek Dosyalar', description: 'Test için ücretsiz CAF Core Audio Format örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. macOS ses dönüştürme araçları, CAF oynatıcılar ve Apple ses işleme yazılımlarını test etmek için mükemmel.' },
        csr: { name: 'CSR Örnek Dosyalar', description: 'Test için ücretsiz CSR Certificate Signing Request örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. SSL sertifika yönetim araçları, CSR analiz ve ağ güvenliği ve kriptografi yazılımlarını test etmek için mükemmel.' },
        'customer-database-sql': { name: 'Müşteri Veritabanı SQL Örnek Dosyalar', description: 'Test için ücretsiz müşteri veritabanı SQL örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Veritabanı yönetim araçları, SQL analiz ve müşteri veri yönetimi ve CRM yazılımlarını test etmek için mükemmel.' },
        dav: { name: 'DAV Örnek Dosyalar', description: 'Test için ücretsiz DAV video örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. DAV video dönüştürme araçları, DAV oynatıcılar ve gözetim ve güvenlik video işleme yazılımlarını test etmek için mükemmel.' },
        dbf: { name: 'DBF Örnek Dosyalar', description: 'Test için ücretsiz DBF dBase örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. dBase veritabanı dönüştürme araçları, DBF analiz ve eski veri yönetimi yazılımlarını test etmek için mükemmel.' },
        dds: { name: 'DDS Örnek Dosyalar', description: 'Test için ücretsiz DDS DirectDraw Surface örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Görüntü doku dönüştürme araçları, DDS görüntüleyiciler ve oyun geliştirme ve 3D grafik yazılımlarını test etmek için mükemmel.' },
        dem: { name: 'DEM Örnek Dosyalar', description: 'Test için ücretsiz DEM Digital Elevation Model örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Yükseklik verisi işleme araçları, DEM dönüştürme ve haritacılık ve CBS yazılımlarını test etmek için mükemmel.' },
        der: { name: 'DER Örnek Dosyalar', description: 'Test için ücretsiz DER kodlanmış sertifika örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Sertifika yönetim araçları, DER analiz ve güvenlik ve kriptografi yazılımlarını test etmek için mükemmel.' },
        dmp: { name: 'DMP Örnek Dosyalar', description: 'Test için ücretsiz DMP bellek dökümü örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Bellek analiz araçları, DMP hata ayıklama ve sistem tanılama ve adli bilişim yazılımlarını test etmek için mükemmel.' },
        dng: { name: 'DNG Örnek Dosyalar', description: 'Test için ücretsiz DNG Digital Negative raw görüntü örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Raw görüntü işleme araçları, DNG dönüştürme ve profesyonel fotoğrafçılık ve fotoğraf düzenleme yazılımlarını test etmek için mükemmel.' },
        'docker-compose-yml': { name: 'Docker Compose YML Örnek Dosyalar', description: 'Test için ücretsiz Docker Compose YML örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Docker yapılandırma araçları, YAML analiz ve Docker konteynerleştirme ve orkestrasyon yazılımlarını test etmek için mükemmel.' },
        dockerfile: { name: 'Dockerfile Örnek Dosyalar', description: 'Test için ücretsiz Dockerfile örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Docker build araçları, Dockerfile analiz ve konteyner geliştirme ve dağıtım yazılımlarını test etmek için mükemmel.' },
        dwg: { name: 'DWG Örnek Dosyalar', description: 'Test için ücretsiz DWG AutoCAD örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. AutoCAD çizim dönüştürme araçları, DWG görüntüleyiciler ve profesyonel CAD ve mimarlık yazılımlarını test etmek için mükemmel.' },
        dxf: { name: 'DXF Örnek Dosyalar', description: 'Test için ücretsiz DXF Drawing Exchange Format örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. CAD çizim dönüştürme araçları, DXF görüntüleyiciler ve çizim dosyası değişimi ve mühendislik yazılımlarını test etmek için mükemmel.' },
        editorconfig: { name: 'EditorConfig Örnek Dosyalar', description: 'Test için ücretsiz EditorConfig örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Kod editörü yapılandırma araçları, EditorConfig analiz ve kod geliştirme ve formatlama yazılımlarını test etmek için mükemmel.' },
        elf: { name: 'ELF Örnek Dosyalar', description: 'Test için ücretsiz ELF Executable and Linkable Format örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Linux ikili analiz araçları, ELF analiz ve sistem geliştirme ve reverse engineering yazılımlarını test etmek için mükemmel.' },
        eps: { name: 'EPS Örnek Dosyalar', description: 'Test için ücretsiz EPS Encapsulated PostScript örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Vektör grafik dönüştürme araçları, EPS görüntüleyiciler ve grafik tasarım ve profesyonel baskı yazılımlarını test etmek için mükemmel.' },
        exe: { name: 'EXE Örnek Dosyalar', description: 'Test için ücretsiz EXE Windows çalıştırılabilir örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Windows ikili analiz araçları, EXE analiz ve Windows geliştirme ve güvenlik yazılımlarını test etmek için mükemmel.' },
        exr: { name: 'EXR Örnek Dosyalar', description: 'Test için ücretsiz EXR OpenEXR yüksek dinamik aralık görüntü örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. HDR görüntü işleme araçları, EXR dönüştürme ve yüksek dinamik aralık görüntüleme ve VFX yazılımlarını test etmek için mükemmel.' },
        icns: { name: 'ICNS Örnek Dosyalar', description: 'Test için ücretsiz ICNS macOS ikon örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. macOS ikon dönüştürme araçları, ICNS görüntüleyiciler ve ikon tasarımı ve macOS geliştirme yazılımlarını test etmek için mükemmel.' },
        ifc: { name: 'IFC Örnek Dosyalar', description: 'Test için ücretsiz IFC Industry Foundation Classes örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. BIM dönüştürme araçları, IFC görüntüleyiciler ve bina bilgi modelleme ve mimarlık yazılımlarını test etmek için mükemmel.' },
        iges: { name: 'IGES Örnek Dosyalar', description: 'Test için ücretsiz IGES Initial Graphics Exchange Specification örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. CAD model dönüştürme araçları, IGES görüntüleyiciler ve 3D model değişimi ve mühendislik yazılımlarını test etmek için mükemmel.' },
        igs: { name: 'IGS Örnek Dosyalar', description: 'Test için ücretsiz IGS Initial Graphics Exchange Specification örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. CAD model dönüştürme araçları, IGS görüntüleyiciler ve çizim dosyası değişimi ve makine mühendisliği yazılımlarını test etmek için mükemmel.' },
        indd: { name: 'INDD Örnek Dosyalar', description: 'Test için ücretsiz INDD Adobe InDesign örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Düzen dönüştürme araçları, INDD görüntüleyiciler ve yayıncılık ve profesyonel düzen tasarımı yazılımlarını test etmek için mükemmel.' },
        ini: { name: 'INI Örnek Dosyalar', description: 'Test için ücretsiz INI örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. INI dosya analiz araçları, yapılandırma yönetimi ve ayar dosyası işleme yazılımlarını test etmek için mükemmel.' },
        intelhex: { name: 'Intel HEX Örnek Dosyalar', description: 'Test için ücretsiz Intel HEX örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Mikrodenetleyici programlama araçları, Intel HEX analiz ve gömülü sistem geliştirme ve firmware yazılımlarını test etmek için mükemmel.' },
        ipa: { name: 'IPA Örnek Dosyalar', description: 'Test için ücretsiz IPA iOS App Store Package örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. iOS uygulama kurulum araçları, IPA analiz ve Apple mobil uygulama geliştirme yazılımlarını test etmek için mükemmel.' },
        ipynb: { name: 'IPYNB Örnek Dosyalar', description: 'Test için ücretsiz IPYNB Jupyter Notebook örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Jupyter notebook çalıştırma araçları, IPYNB analiz ve veri bilimi ve interaktif analiz yazılımlarını test etmek için mükemmel.' },
        jar: { name: 'JAR Örnek Dosyalar', description: 'Test için ücretsiz JAR Java Archive örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Java çalıştırma araçları, JAR çıkarma ve Java geliştirme ve uygulama dağıtım yazılımlarını test etmek için mükemmel.' },
        java: { name: 'Java Örnek Dosyalar', description: 'Test için ücretsiz Java source code örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Java kod derleme araçları, Java kod analiz ve Java geliştirme ve IDE yazılımlarını test etmek için mükemmel.' },
        jks: { name: 'JKS Örnek Dosyalar', description: 'Test için ücretsiz JKS Java KeyStore örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Java anahtar yönetim araçları, JKS analiz ve Java güvenlik ve kriptografi yazılımlarını test etmek için mükemmel.' },
        jpeg: { name: 'JPEG Örnek Dosyalar', description: 'Test için ücretsiz JPEG Joint Photographic Experts Group örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. JPEG görüntü dönüştürme araçları, görüntü işleme ve dijital fotoğrafçılık ve web optimizasyonu yazılımlarını test etmek için mükemmel.' },
        jsonl: { name: 'JSONL Örnek Dosyalar', description: 'Test için ücretsiz JSONL JSON Lines örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. JSON veri işleme araçları, JSONL analiz ve streaming veri işleme ve big data yazılımlarını test etmek için mükemmel.' },
        jsx: { name: 'JSX Örnek Dosyalar', description: 'Test için ücretsiz JSX React JavaScript XML örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. React derleme araçları, JSX analiz ve React geliştirme ve frontend yazılımlarını test etmek için mükemmel.' },
        jwt: { name: 'JWT Örnek Dosyalar', description: 'Test için ücretsiz JWT JSON Web Token örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. JWT kimlik doğrulama araçları, JWT analiz ve web güvenliği ve API yazılımlarını test etmek için mükemmel.' },
        key: { name: 'KEY Örnek Dosyalar', description: 'Test için ücretsiz KEY özel anahtar örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Kriptografik anahtar yönetim araçları, KEY analiz ve güvenlik ve kriptografi yazılımlarını test etmek için mükemmel.' },
        kml: { name: 'KML Örnek Dosyalar', description: 'Test için ücretsiz KML Keyhole Markup Language örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Coğrafi görselleştirme araçları, KML analiz ve haritacılık ve Google Earth yazılımlarını test etmek için mükemmel.' },
        kt: { name: 'Kotlin Örnek Dosyalar', description: 'Test için ücretsiz Kotlin source code örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Kotlin derleme araçları, Kotlin kod analiz ve Android geliştirme ve çoklu platform yazılımlarını test etmek için mükemmel.' },
        las: { name: 'LAS Örnek Dosyalar', description: 'Test için ücretsiz LAS LiDAR point cloud data örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Nokta bulutu işleme araçları, LAS dönüştürme ve uzaktan algılama ve 3D haritalama yazılımlarını test etmek için mükemmel.' },
        log: { name: 'LOG Örnek Dosyalar', description: 'Test için ücretsiz LOG örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Log analiz araçları, log analiz ve sistem izleme yazılımlarını test etmek için mükemmel.' },
        lua: { name: 'Lua Örnek Dosyalar', description: 'Test için ücretsiz Lua source code örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Lua çalıştırma araçları, Lua kod analiz ve script geliştirme ve video oyun yazılımlarını test etmek için mükemmel.' },
        m3u: { name: 'M3U Örnek Dosyalar', description: 'Test için ücretsiz M3U playlist örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Playlist oynatma araçları, M3U analiz ve multimedya oynatma ve ses akışı yazılımlarını test etmek için mükemmel.' },
        m3u8: { name: 'M3U8 Örnek Dosyalar', description: 'Test için ücretsiz M3U8 HLS playlist örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. HLS akış araçları, M3U8 analiz ve video akışı ve canlı yayın yazılımlarını test etmek için mükemmel.' },
        m4v: { name: 'M4V Örnek Dosyalar', description: 'Test için ücretsiz M4V MPEG-4 video örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. MPEG-4 video dönüştürme araçları, M4V oynatıcılar ve Apple video işleme ve iTunes yazılımlarını test etmek için mükemmel.' },
        makefile: { name: 'Makefile Örnek Dosyalar', description: 'Test için ücretsiz Makefile örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Otomatik build araçları, Makefile analiz ve derleme ve sistem geliştirme yazılımlarını test etmek için mükemmel.' },
        ma: { name: 'MA Örnek Dosyalar', description: 'Test için ücretsiz MA Maya ASCII örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Maya sahne dönüştürme araçları, MA dosya analiz ve 3D animasyon yazılımlarını test etmek için mükemmel.' },
        max: { name: 'MAX Örnek Dosyalar', description: 'Test için ücretsiz MAX 3ds Max örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. 3D model dönüştürme araçları, MAX görüntüleyiciler ve profesyonel 3D modelleme ve animasyon yazılımlarını test etmek için mükemmel.' },
        mb: { name: 'MB Örnek Dosyalar', description: 'Test için ücretsiz MB Maya Binary örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Maya sahne dönüştürme araçları, MB görüntüleyiciler ve profesyonel 3D modelleme ve animasyon yazılımlarını test etmek için mükemmel.' },
        mbtiles: { name: 'MBTiles Örnek Dosyalar', description: 'Test için ücretsiz MBTiles MapBox tiles örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Harita görselleştirme araçları, MBTiles çıkarma ve web haritacılığı ve mobil uygulama yazılımlarını test etmek için mükemmel.' },
        mdx: { name: 'MDX Örnek Dosyalar', description: 'Test için ücretsiz MDX Markdown Extended örnek dosyalarını indirin. Birden fazla dosya boyutu mevcuttur: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Dokümantasyon işleme araçları, MDX analiz ve web geliştirme ve statik site oluşturma yazılımlarını test etmek için mükemmel.' }
      }
    }
  },
  ru: {
    samples_page: {
      meta: {
        title: 'Бесплатные примеры файлов – Скачать тестовые файлы | MorphyHub',
        description: 'Получите бесплатные примеры файлов изображений, документов и архивов для тестирования конвертеров, компрессоров и просмотрщиков MorphyHub.',
        keywords: 'примеры файлов, тестовые файлы, скачать примеры, бесплатные тестовые файлы, примеры DOCX, примеры файлов, тестовые файлы для конвертации'
      },
      schema: {
        name: 'Бесплатные примеры файлов для скачивания и тестирования',
        description: 'Скачайте бесплатные примеры файлов различных типов — изображения, документы, аудио, видео и архивы. Используйте их для тестирования, демонстраций или валидации программного обеспечения на любой платформе.'
      },
      hero: {
        title: 'Примеры файлов',
        description: 'Скачайте бесплатные примеры файлов для тестирования. Доступны различные размеры файлов для различных форматов для тестирования ваших инструментов конвертации и обработки.'
      },
      back_button: 'Вернуться на главную',
      search: {
        placeholder: 'Поиск примеров файлов... (например, DOCX, JPG, PDF)',
        results: 'Найдено {{count}} пример(ов) файла',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'ПРИМЕРЫ ДОКУМЕНТОВ',
        data: 'ПРИМЕРЫ ДАННЫХ',
        application: 'ПРИМЕРЫ ПРИЛОЖЕНИЙ',
        design_3d: 'ПРИМЕРЫ 3D И ДИЗАЙНА',
        image_video: 'ПРИМЕРЫ ИЗОБРАЖЕНИЙ И ВИДЕО',
        audio: 'ПРИМЕРЫ АУДИО',
        archive: 'ПРИМЕРЫ АРХИВОВ'
      },
      actions: { download: 'Скачать' },
      no_results: {
        title: 'Примеры файлов не найдены',
        description: 'Попробуйте найти что-то вроде "DOCX" или "JPG"',
        clear: 'Очистить поиск'
      },
      features: {
        title: 'Почему выбрать наши примеры файлов?',
        items: [
          { title: 'Бесплатный и легкий доступ', description: 'Скачивайте примеры файлов мгновенно без регистрации или оплаты.' },
          { title: 'Несколько размеров', description: 'Выберите из различных размеров файлов (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) для комплексного тестирования.' },
          { title: 'Большое разнообразие', description: 'Доступ к примерам в нескольких категориях: документы, изображения, аудио, видео, архивы и многое другое.' }
        ]
      },
      format_description_template: 'Скачайте бесплатные примеры файлов {{format}} для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования {{purpose}}.',
      formats: {
        docx: { name: 'Примеры файлов DOCX', description: 'Скачайте бесплатные примеры файлов DOCX для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации документов.' },
        doc: { name: 'Примеры файлов DOC', description: 'Скачайте бесплатные примеры файлов DOC для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации документов.' },
        pdf: { name: 'Примеры файлов PDF', description: 'Скачайте бесплатные примеры файлов PDF для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации документов.' },
        odp: { name: 'Примеры файлов ODP', description: 'Скачайте бесплатные примеры файлов ODP OpenDocument Presentation для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации и просмотра презентаций.' },
        rtf: { name: 'Примеры файлов RTF', description: 'Скачайте бесплатные примеры файлов RTF (Rich Text Format) для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации и просмотра документов.' },
        epub: { name: 'Примеры файлов EPUB', description: 'Скачайте бесплатные примеры файлов EPUB для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования читателей электронных книг, конвертации EPUB и инструментов цифровой публикации.' },
        'invoice-pdf': { name: 'Примеры файлов PDF счетов', description: 'Скачайте бесплатные примеры файлов PDF счетов для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования обработки PDF счетов, парсинга счетов и инструментов управления документами.' },
        mobi: { name: 'Примеры файлов MOBI', description: 'Скачайте бесплатные примеры файлов MOBI для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования конвертации электронных книг MOBI, чтения MOBI и инструментов обработки электронных книг.' },
        csv: { name: 'Примеры файлов CSV', description: 'Скачайте бесплатные примеры файлов CSV для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации CSV и обработки данных.' },
        xls: { name: 'Примеры файлов XLS', description: 'Скачайте бесплатные примеры файлов XLS для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации Excel и обработки данных.' },
        xlsx: { name: 'Примеры файлов XLSX', description: 'Скачайте бесплатные примеры файлов XLSX для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации Excel и обработки данных.' },
        xml: { name: 'Примеры файлов XML', description: 'Скачайте бесплатные примеры файлов XML для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов парсинга XML и конвертации данных.' },
        html: { name: 'Примеры файлов HTML', description: 'Скачайте бесплатные примеры файлов HTML для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования парсинга HTML, веб-разработки и инструментов валидации HTML.' },
        ods: { name: 'Примеры файлов ODS', description: 'Скачайте бесплатные примеры файлов ODS OpenDocument Spreadsheet для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации электронных таблиц и обработки данных.' },
        'ansible-yml': { name: 'Примеры файлов Ansible YML', description: 'Скачайте бесплатные примеры файлов Ansible YML для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов парсинга YAML и управления конфигурацией.' },
        'api-response-json': { name: 'Примеры файлов JSON ответа API', description: 'Скачайте бесплатные примеры файлов JSON ответа API для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов парсинга JSON и обработки ответов API.' },
        'arduino-ino': { name: 'Примеры файлов Arduino INO', description: 'Скачайте бесплатные примеры файлов Arduino INO для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов компиляции кода Arduino и проверки синтаксиса.' },
        asc: { name: 'Примеры файлов ASC', description: 'Скачайте бесплатные примеры файлов ASC (ASCII) для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов обработки текстовых файлов и кодировки ASCII.' },
        bat: { name: 'Примеры файлов BAT', description: 'Скачайте бесплатные примеры файлов BAT для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов выполнения batch-скриптов и автоматизации Windows.' },
        bib: { name: 'Примеры файлов BIB', description: 'Скачайте бесплатные примеры файлов BIB (BibTeX) для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов управления библиографиями и обработки цитат.' },
        c: { name: 'Примеры файлов C', description: 'Скачайте бесплатные примеры файлов C для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов компиляции кода C и проверки синтаксиса.' },
        'can-log': { name: 'Примеры файлов CAN Log', description: 'Скачайте бесплатные примеры файлов CAN log для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов анализа CAN шины и парсинга логов.' },
        cmd: { name: 'Примеры файлов CMD', description: 'Скачайте бесплатные примеры файлов CMD для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов выполнения командных скриптов и автоматизации Windows.' },
        conf: { name: 'Примеры файлов CONF', description: 'Скачайте бесплатные примеры файлов CONF для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов парсинга файлов конфигурации и настройки системы.' },
        'config-ini': { name: 'Примеры файлов Config INI', description: 'Скачайте бесплатные примеры файлов Config INI для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов парсинга файлов INI и управления конфигурацией.' },
        cpp: { name: 'Примеры файлов C++', description: 'Скачайте бесплатные примеры файлов C++ для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов компиляции кода C++ и проверки синтаксиса.' },
        crx: { name: 'Примеры файлов CRX', description: 'Скачайте бесплатные примеры файлов CRX для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования установки расширений Chrome, анализа CRX и инструментов разработки расширений браузера.' },
        cs: { name: 'Примеры файлов C#', description: 'Скачайте бесплатные примеры файлов C# для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов компиляции кода C# и проверки синтаксиса.' },
        gz: { name: 'Примеры файлов GZ', description: 'Скачайте бесплатные примеры файлов GZ (gzip) для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования распаковки gzip, извлечения архивов и инструментов сжатия файлов.' },
        h: { name: 'Примеры файлов C Header', description: 'Скачайте бесплатные примеры файлов C Header для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов компиляции кода C и обработки заголовочных файлов.' },
        hdr: { name: 'Примеры файлов HDR', description: 'Скачайте бесплатные примеры файлов HDR (High Dynamic Range) для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования обработки изображений HDR, конвертации HDR и инструментов просмотра высокого динамического диапазона.' },
        heic: { name: 'Примеры файлов HEIC', description: 'Скачайте бесплатные примеры файлов HEIC для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования конвертации изображений HEIC, просмотра HEIC и инструментов обработки современных форматов изображений.' },
        heif: { name: 'Примеры файлов HEIF', description: 'Скачайте бесплатные примеры файлов HEIF для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования конвертации изображений HEIF, просмотра HEIF и инструментов обработки современных форматов изображений.' },
        hex: { name: 'Примеры файлов HEX', description: 'Скачайте бесплатные примеры файлов HEX (шестнадцатеричный) для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования парсинга шестнадцатеричных файлов, программирования прошивок и инструментов разработки встроенных систем.' },
        hpp: { name: 'Примеры файлов C++ Header', description: 'Скачайте бесплатные примеры файлов C++ Header для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов компиляции кода C++ и обработки заголовочных файлов.' },
        css: { name: 'Примеры файлов CSS', description: 'Скачайте бесплатные примеры файлов CSS для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов парсинга CSS, веб-разработки и валидации CSS.' },
        js: { name: 'Примеры файлов JavaScript', description: 'Скачайте бесплатные примеры файлов JavaScript для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов парсинга JavaScript, веб-разработки и валидации кода.' },
        json: { name: 'Примеры файлов JSON', description: 'Скачайте бесплатные примеры файлов JSON для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов парсинга JSON, обработки данных и валидации схем.' },
        md: { name: 'Примеры файлов Markdown', description: 'Скачайте бесплатные примеры файлов Markdown для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов обработки Markdown, конвертации документов и генерации документации.' },
        py: { name: 'Примеры файлов Python', description: 'Скачайте бесплатные примеры файлов Python для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов компиляции кода Python и проверки синтаксиса.' },
        sh: { name: 'Примеры файлов Shell Script', description: 'Скачайте бесплатные примеры файлов Shell Script для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов выполнения shell-скриптов и автоматизации систем Unix/Linux.' },
        sql: { name: 'Примеры файлов SQL', description: 'Скачайте бесплатные примеры файлов SQL для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов парсинга SQL, управления базами данных и валидации запросов.' },
        ts: { name: 'Примеры файлов TypeScript', description: 'Скачайте бесплатные примеры файлов TypeScript для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов компиляции кода TypeScript и проверки типов.' },
        yml: { name: 'Примеры файлов YML', description: 'Скачайте бесплатные примеры файлов YML для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов парсинга YAML и управления конфигурацией.' },
        jpg: { name: 'Примеры файлов JPG', description: 'Скачайте бесплатные примеры файлов JPG для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации изображений, обработки изображений и веб-оптимизации.' },
        png: { name: 'Примеры файлов PNG', description: 'Скачайте бесплатные примеры файлов PNG для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации изображений, обработки изображений и веб-графики.' },
        gif: { name: 'Примеры файлов GIF', description: 'Скачайте бесплатные примеры файлов GIF для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации изображений, обработки изображений и веб-анимации.' },
        webp: { name: 'Примеры файлов WebP', description: 'Скачайте бесплатные примеры файлов WebP для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации изображений, обработки изображений и современной веб-оптимизации.' },
        svg: { name: 'Примеры файлов SVG', description: 'Скачайте бесплатные примеры файлов SVG для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации векторной графики, обработки SVG и веб-дизайна.' },
        bmp: { name: 'Примеры файлов BMP', description: 'Скачайте бесплатные примеры файлов BMP для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации изображений, обработки изображений и совместимости форматов.' },
        ico: { name: 'Примеры файлов ICO', description: 'Скачайте бесплатные примеры файлов ICO для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации иконок, обработки иконок и разработки приложений.' },
        tiff: { name: 'Примеры файлов TIFF', description: 'Скачайте бесплатные примеры файлов TIFF для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации изображений, обработки изображений и профессионального редактирования.' },
        tif: { name: 'Примеры файлов TIF', description: 'Скачайте бесплатные примеры файлов TIF для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации изображений, обработки изображений и профессионального редактирования.' },
        avif: { name: 'Примеры файлов AVIF', description: 'Скачайте бесплатные примеры файлов AVIF для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации изображений, обработки изображений и веб-оптимизации следующего поколения.' },
        mp4: { name: 'Примеры файлов MP4', description: 'Скачайте бесплатные примеры файлов MP4 для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации видео, обработки видео и мультимедийного воспроизведения.' },
        avi: { name: 'Примеры файлов AVI', description: 'Скачайте бесплатные примеры файлов AVI для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации видео, обработки видео и совместимости форматов.' },
        mov: { name: 'Примеры файлов MOV', description: 'Скачайте бесплатные примеры файлов MOV для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации видео, обработки видео и редактирования видео.' },
        wmv: { name: 'Примеры файлов WMV', description: 'Скачайте бесплатные примеры файлов WMV для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации видео, обработки видео и совместимости форматов Windows.' },
        flv: { name: 'Примеры файлов FLV', description: 'Скачайте бесплатные примеры файлов FLV для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации видео, обработки видео и веб-стриминга.' },
        webm: { name: 'Примеры файлов WebM', description: 'Скачайте бесплатные примеры файлов WebM для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации видео, обработки видео и современного веб-видео.' },
        mkv: { name: 'Примеры файлов MKV', description: 'Скачайте бесплатные примеры файлов MKV для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации видео, обработки видео и мультимедийных контейнеров.' },
        mp3: { name: 'Примеры файлов MP3', description: 'Скачайте бесплатные примеры файлов MP3 для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации аудио, обработки аудио и мультимедийного воспроизведения.' },
        wav: { name: 'Примеры файлов WAV', description: 'Скачайте бесплатные примеры файлов WAV для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации аудио, обработки аудио и аудио без потерь.' },
        flac: { name: 'Примеры файлов FLAC', description: 'Скачайте бесплатные примеры файлов FLAC для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации аудио, обработки аудио и аудио высокого качества.' },
        ogg: { name: 'Примеры файлов OGG', description: 'Скачайте бесплатные примеры файлов OGG для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации аудио, обработки аудио и аудио с открытым исходным кодом.' },
        wma: { name: 'Примеры файлов WMA', description: 'Скачайте бесплатные примеры файлов WMA для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации аудио, обработки аудио и совместимости форматов Windows.' },
        aac: { name: 'Примеры файлов AAC', description: 'Скачайте бесплатные примеры файлов AAC для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации аудио, обработки аудио и аудио высокой эффективности.' },
        m4a: { name: 'Примеры файлов M4A', description: 'Скачайте бесплатные примеры файлов M4A для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации аудио, обработки аудио и аудио контейнера MPEG-4.' },
        midi: { name: 'Примеры файлов MIDI', description: 'Скачайте бесплатные примеры файлов MIDI для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов обработки MIDI, музыкального синтеза и музыкального производства.' },
        cue: { name: 'Примеры файлов CUE', description: 'Скачайте бесплатные примеры файлов CUE для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования парсинга CUE листов, записи аудио CD и инструментов создания CD.' },
        zip: { name: 'Примеры файлов ZIP', description: 'Скачайте бесплатные примеры файлов ZIP для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов извлечения архивов, сжатия файлов и управления файлами.' },
        rar: { name: 'Примеры файлов RAR', description: 'Скачайте бесплатные примеры файлов RAR для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов извлечения архивов, сжатия файлов и управления файлами.' },
        '7z': { name: 'Примеры файлов 7Z', description: 'Скачайте бесплатные примеры файлов 7Z для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации архивов и извлечения.' },
        tar: { name: 'Примеры файлов TAR', description: 'Скачайте бесплатные примеры файлов TAR для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов извлечения архивов, сжатия файлов и управления файлами Unix/Linux.' },
        ace: { name: 'Примеры файлов ACE', description: 'Скачайте бесплатные примеры файлов ACE для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов извлечения архивов, сжатия файлов и управления файлами.' },
        arj: { name: 'Примеры файлов ARJ', description: 'Скачайте бесплатные примеры файлов ARJ для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов извлечения архивов, сжатия файлов и управления устаревшими файлами.' },
        bz2: { name: 'Примеры файлов BZ2', description: 'Скачайте бесплатные примеры файлов BZ2 (bzip2) для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования распаковки bzip2, извлечения архивов и инструментов сжатия файлов.' },
        cab: { name: 'Примеры файлов CAB', description: 'Скачайте бесплатные примеры файлов CAB для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов извлечения архивов CAB, установки программного обеспечения Windows и управления файлами.' },
        cpio: { name: 'Примеры файлов CPIO', description: 'Скачайте бесплатные примеры файлов CPIO для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов извлечения архивов CPIO, сжатия файлов и управления файлами Unix.' },
        dmg: { name: 'Примеры файлов DMG', description: 'Скачайте бесплатные примеры файлов DMG для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов монтирования образов дисков, установки программного обеспечения macOS и управления файлами.' },
        img: { name: 'Примеры файлов IMG', description: 'Скачайте бесплатные примеры файлов IMG для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов монтирования образов дисков, создания образов дисков и управления файлами.' },
        iso: { name: 'Примеры файлов ISO', description: 'Скачайте бесплатные примеры файлов ISO для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов монтирования образов дисков, записи CD/DVD и управления файлами.' },
        kmz: { name: 'Примеры файлов KMZ', description: 'Скачайте бесплатные примеры файлов KMZ для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов извлечения KMZ, обработки географических данных и интеграции Google Earth.' },
        laz: { name: 'Примеры файлов LAZ', description: 'Скачайте бесплатные примеры файлов LAZ для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов извлечения LAZ, обработки облаков точек LiDAR и инструментов 3D-картографирования.' },
        lha: { name: 'Примеры файлов LHA', description: 'Скачайте бесплатные примеры файлов LHA для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов извлечения LHA, распаковки архивов и инструментов архивирования файлов.' },
        lzh: { name: 'Примеры файлов LZH', description: 'Скачайте бесплатные примеры файлов LZH для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов извлечения LZH, распаковки архивов и инструментов архивирования файлов.' },
        lzma: { name: 'Примеры файлов LZMA', description: 'Скачайте бесплатные примеры файлов LZMA для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов распаковки LZMA, извлечения архивов и сжатия файлов.' },
        '3ds': { name: 'Примеры файлов 3DS', description: 'Скачайте бесплатные примеры файлов 3DS для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации 3D моделей, просмотрщиков 3DS и программного обеспечения для 3D моделирования.' },
        '3gp': { name: 'Примеры файлов 3GP', description: 'Скачайте бесплатные примеры файлов 3GP для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации мобильного видео, проигрывателей 3GP и приложений обработки видео для смартфонов.' },
        '3mf': { name: 'Примеры файлов 3MF', description: 'Скачайте бесплатные примеры файлов 3MF для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов 3D печати, конвертеров 3MF и программного обеспечения для аддитивного производства.' },
        ac3: { name: 'Примеры файлов AC3', description: 'Скачайте бесплатные примеры файлов AC3 Dolby Digital для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации аудио Dolby, декодеров AC3 и программного обеспечения обработки объемного звука.' },
        ai: { name: 'Примеры файлов AI', description: 'Скачайте бесплатные примеры файлов AI Adobe Illustrator для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации векторной графики, просмотрщиков AI и программного обеспечения графического дизайна.' },
        aif: { name: 'Примеры файлов AIF', description: 'Скачайте бесплатные примеры файлов AIF Audio Interchange File Format для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации несжатого аудио, проигрывателей AIF и программного обеспечения профессиональной звукозаписи.' },
        aiff: { name: 'Примеры файлов AIFF', description: 'Скачайте бесплатные примеры файлов AIFF Audio Interchange File Format для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации высококачественного аудио, проигрывателей AIFF и программного обеспечения мастеринга аудио.' },
        amr: { name: 'Примеры файлов AMR', description: 'Скачайте бесплатные примеры файлов AMR Adaptive Multi-Rate для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации мобильного аудио, декодеров AMR и приложений обработки аудио для телефонов.' },
        'animated-gif': { name: 'Примеры файлов Анимированный GIF', description: 'Скачайте бесплатные примеры файлов анимированного GIF для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации GIF анимации, просмотрщиков анимированных GIF и программного обеспечения создания веб-анимаций.' },
        'animation-fbx': { name: 'Примеры файлов Анимация FBX', description: 'Скачайте бесплатные примеры файлов Анимация FBX для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации 3D анимации, просмотрщиков FBX и программного обеспечения профессиональной анимации.' },
        apk: { name: 'Примеры файлов APK', description: 'Скачайте бесплатные примеры файлов APK Android для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов установки Android приложений, анализа APK и программного обеспечения разработки мобильных приложений.' },
        apng: { name: 'Примеры файлов APNG', description: 'Скачайте бесплатные примеры файлов APNG анимированный PNG для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации анимированного PNG, просмотрщиков APNG и программного обеспечения создания современных веб-анимаций.' },
        appimage: { name: 'Примеры файлов AppImage', description: 'Скачайте бесплатные примеры файлов AppImage Linux для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов запуска портативных Linux приложений, установки AppImage и программного обеспечения распространения Linux приложений.' },
        ase: { name: 'Примеры файлов ASE', description: 'Скачайте бесплатные примеры файлов ASE Adobe Swatch Exchange для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации цветовых палитр, просмотрщиков ASE и программного обеспечения профессионального графического дизайна.' },
        assetbundle: { name: 'Примеры файлов AssetBundle', description: 'Скачайте бесплатные примеры файлов AssetBundle Unity для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов загрузки ресурсов Unity, извлечения AssetBundle и программного обеспечения разработки игр Unity.' },
        'barcode-svg': { name: 'Примеры файлов Штрих-код SVG', description: 'Скачайте бесплатные примеры файлов штрих-код SVG для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов сканирования штрих-кодов, конвертации SVG и программного обеспечения генерации векторных штрих-кодов.' },
        blend: { name: 'Примеры файлов BLEND', description: 'Скачайте бесплатные примеры файлов BLEND Blender для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации 3D моделей Blender, просмотрщиков BLEND и программного обеспечения 3D моделирования с открытым исходным кодом.' },
        bvh: { name: 'Примеры файлов BVH', description: 'Скачайте бесплатные примеры файлов BVH motion capture для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов обработки motion capture, конвертации анимации BVH и программного обеспечения производства кинематической анимации.' },
        caf: { name: 'Примеры файлов CAF', description: 'Скачайте бесплатные примеры файлов CAF Core Audio Format для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации аудио macOS, проигрывателей CAF и программного обеспечения обработки аудио Apple.' },
        csr: { name: 'Примеры файлов CSR', description: 'Скачайте бесплатные примеры файлов CSR Certificate Signing Request для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов управления SSL сертификатами, анализа CSR и программного обеспечения сетевой безопасности и криптографии.' },
        'customer-database-sql': { name: 'Примеры файлов База данных клиентов SQL', description: 'Скачайте бесплатные примеры файлов база данных клиентов SQL для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов управления базами данных, анализа SQL и программного обеспечения управления данными клиентов и CRM.' },
        dav: { name: 'Примеры файлов DAV', description: 'Скачайте бесплатные примеры файлов DAV видео для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации видео DAV, проигрывателей DAV и программного обеспечения обработки видео наблюдения и безопасности.' },
        dbf: { name: 'Примеры файлов DBF', description: 'Скачайте бесплатные примеры файлов DBF dBase для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации баз данных dBase, анализа DBF и программного обеспечения управления устаревшими данными.' },
        dds: { name: 'Примеры файлов DDS', description: 'Скачайте бесплатные примеры файлов DDS DirectDraw Surface для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации текстур изображений, просмотрщиков DDS и программного обеспечения разработки игр и 3D графики.' },
        dem: { name: 'Примеры файлов DEM', description: 'Скачайте бесплатные примеры файлов DEM Digital Elevation Model для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов обработки данных высот, конвертации DEM и программного обеспечения картографии и ГИС.' },
        der: { name: 'Примеры файлов DER', description: 'Скачайте бесплатные примеры файлов DER закодированный сертификат для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов управления сертификатами, анализа DER и программного обеспечения безопасности и криптографии.' },
        dmp: { name: 'Примеры файлов DMP', description: 'Скачайте бесплатные примеры файлов DMP memory dump для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов анализа памяти, отладки DMP и программного обеспечения диагностики системы и криминалистики.' },
        dng: { name: 'Примеры файлов DNG', description: 'Скачайте бесплатные примеры файлов DNG Digital Negative raw изображение для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов обработки raw изображений, конвертации DNG и программного обеспечения профессиональной фотографии и редактирования фотографий.' },
        'docker-compose-yml': { name: 'Примеры файлов Docker Compose YML', description: 'Скачайте бесплатные примеры файлов Docker Compose YML для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конфигурации Docker, анализа YAML и программного обеспечения контейнеризации и оркестрации Docker.' },
        dockerfile: { name: 'Примеры файлов Dockerfile', description: 'Скачайте бесплатные примеры файлов Dockerfile для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов сборки Docker, анализа Dockerfile и программного обеспечения разработки и развертывания контейнеров.' },
        dwg: { name: 'Примеры файлов DWG', description: 'Скачайте бесплатные примеры файлов DWG AutoCAD для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации чертежей AutoCAD, просмотрщиков DWG и программного обеспечения профессионального CAD и архитектуры.' },
        dxf: { name: 'Примеры файлов DXF', description: 'Скачайте бесплатные примеры файлов DXF Drawing Exchange Format для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации чертежей CAD, просмотрщиков DXF и программного обеспечения обмена файлами чертежей и инженерии.' },
        editorconfig: { name: 'Примеры файлов EditorConfig', description: 'Скачайте бесплатные примеры файлов EditorConfig для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов настройки редактора кода, анализа EditorConfig и программного обеспечения разработки и форматирования кода.' },
        elf: { name: 'Примеры файлов ELF', description: 'Скачайте бесплатные примеры файлов ELF Executable and Linkable Format для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов анализа бинарных файлов Linux, анализа ELF и программного обеспечения системной разработки и обратной инженерии.' },
        eps: { name: 'Примеры файлов EPS', description: 'Скачайте бесплатные примеры файлов EPS Encapsulated PostScript для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации векторной графики, просмотрщиков EPS и программного обеспечения графического дизайна и профессиональной печати.' },
        exe: { name: 'Примеры файлов EXE', description: 'Скачайте бесплатные примеры файлов EXE Windows исполняемый для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов анализа бинарных файлов Windows, анализа EXE и программного обеспечения разработки Windows и безопасности.' },
        exr: { name: 'Примеры файлов EXR', description: 'Скачайте бесплатные примеры файлов EXR OpenEXR изображение с высоким динамическим диапазоном для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов обработки HDR изображений, конвертации EXR и программного обеспечения визуализации высокого динамического диапазона и VFX.' },
        icns: { name: 'Примеры файлов ICNS', description: 'Скачайте бесплатные примеры файлов ICNS macOS иконка для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации иконок macOS, просмотрщиков ICNS и программного обеспечения дизайна иконок и разработки macOS.' },
        ifc: { name: 'Примеры файлов IFC', description: 'Скачайте бесплатные примеры файлов IFC Industry Foundation Classes для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации BIM, просмотрщиков IFC и программного обеспечения информационного моделирования зданий и архитектуры.' },
        iges: { name: 'Примеры файлов IGES', description: 'Скачайте бесплатные примеры файлов IGES Initial Graphics Exchange Specification для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации моделей CAD, просмотрщиков IGES и программного обеспечения обмена 3D моделями и инженерии.' },
        igs: { name: 'Примеры файлов IGS', description: 'Скачайте бесплатные примеры файлов IGS Initial Graphics Exchange Specification для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации моделей CAD, просмотрщиков IGS и программного обеспечения обмена файлами чертежей и машиностроения.' },
        indd: { name: 'Примеры файлов INDD', description: 'Скачайте бесплатные примеры файлов INDD Adobe InDesign для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации макетов, просмотрщиков INDD и программного обеспечения публикации и профессионального редакционного дизайна.' },
        ini: { name: 'Примеры файлов INI', description: 'Скачайте бесплатные примеры файлов INI для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов анализа файлов INI, управления конфигурацией и программного обеспечения обработки файлов настроек.' },
        intelhex: { name: 'Примеры файлов Intel HEX', description: 'Скачайте бесплатные примеры файлов Intel HEX для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов программирования микроконтроллеров, анализа Intel HEX и программного обеспечения встраиваемой разработки и прошивки.' },
        ipa: { name: 'Примеры файлов IPA', description: 'Скачайте бесплатные примеры файлов IPA iOS App Store Package для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов установки iOS приложений, анализа IPA и программного обеспечения разработки мобильных приложений Apple.' },
        ipynb: { name: 'Примеры файлов IPYNB', description: 'Скачайте бесплатные примеры файлов IPYNB Jupyter Notebook для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов выполнения Jupyter notebooks, анализа IPYNB и программного обеспечения науки о данных и интерактивного анализа.' },
        jar: { name: 'Примеры файлов JAR', description: 'Скачайте бесплатные примеры файлов JAR Java Archive для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов выполнения Java, извлечения JAR и программного обеспечения разработки Java и развертывания приложений.' },
        java: { name: 'Примеры файлов Java', description: 'Скачайте бесплатные примеры файлов Java source code для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов компиляции Java, анализа кода Java и программного обеспечения разработки Java и IDE.' },
        jks: { name: 'Примеры файлов JKS', description: 'Скачайте бесплатные примеры файлов JKS Java KeyStore для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов управления ключами Java, анализа JKS и программного обеспечения безопасности Java и криптографии.' },
        jpeg: { name: 'Примеры файлов JPEG', description: 'Скачайте бесплатные примеры файлов JPEG Joint Photographic Experts Group для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации изображений JPEG, обработки изображений и программного обеспечения цифровой фотографии и веб-оптимизации.' },
        jsonl: { name: 'Примеры файлов JSONL', description: 'Скачайте бесплатные примеры файлов JSONL JSON Lines для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов обработки данных JSON, анализа JSONL и программного обеспечения обработки потоковых данных и big data.' },
        jsx: { name: 'Примеры файлов JSX', description: 'Скачайте бесплатные примеры файлов JSX React JavaScript XML для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов компиляции React, анализа JSX и программного обеспечения разработки React и frontend.' },
        jwt: { name: 'Примеры файлов JWT', description: 'Скачайте бесплатные примеры файлов JWT JSON Web Token для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов аутентификации JWT, анализа JWT и программного обеспечения веб-безопасности и API.' },
        key: { name: 'Примеры файлов KEY', description: 'Скачайте бесплатные примеры файлов KEY приватный ключ для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов управления криптографическими ключами, анализа KEY и программного обеспечения безопасности и криптографии.' },
        kml: { name: 'Примеры файлов KML', description: 'Скачайте бесплатные примеры файлов KML Keyhole Markup Language для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов географической визуализации, анализа KML и программного обеспечения картографии и Google Earth.' },
        kt: { name: 'Примеры файлов Kotlin', description: 'Скачайте бесплатные примеры файлов Kotlin source code для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов компиляции Kotlin, анализа кода Kotlin и программного обеспечения разработки Android и кроссплатформенных приложений.' },
        las: { name: 'Примеры файлов LAS', description: 'Скачайте бесплатные примеры файлов LAS LiDAR point cloud data для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов обработки облаков точек, конвертации LAS и программного обеспечения дистанционного зондирования и 3D картографии.' },
        log: { name: 'Примеры файлов LOG', description: 'Скачайте бесплатные примеры файлов LOG для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов анализа логов, анализа логов и программного обеспечения мониторинга системы.' },
        lua: { name: 'Примеры файлов Lua', description: 'Скачайте бесплатные примеры файлов Lua source code для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов выполнения Lua, анализа кода Lua и программного обеспечения разработки скриптов и видеоигр.' },
        m3u: { name: 'Примеры файлов M3U', description: 'Скачайте бесплатные примеры файлов M3U playlist для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов воспроизведения плейлистов, анализа M3U и программного обеспечения мультимедийного воспроизведения и потокового аудио.' },
        m3u8: { name: 'Примеры файлов M3U8', description: 'Скачайте бесплатные примеры файлов M3U8 HLS playlist для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов потоковой передачи HLS, анализа M3U8 и программного обеспечения потокового видео и прямой трансляции.' },
        m4v: { name: 'Примеры файлов M4V', description: 'Скачайте бесплатные примеры файлов M4V MPEG-4 video для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации видео MPEG-4, проигрывателей M4V и программного обеспечения обработки видео Apple и iTunes.' },
        makefile: { name: 'Примеры файлов Makefile', description: 'Скачайте бесплатные примеры файлов Makefile для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов автоматизированной сборки, анализа Makefile и программного обеспечения компиляции и системной разработки.' },
        ma: { name: 'Примеры файлов MA', description: 'Скачайте бесплатные примеры файлов MA Maya ASCII для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации сцен Maya, анализа файлов MA и программного обеспечения 3D анимации.' },
        max: { name: 'Примеры файлов MAX', description: 'Скачайте бесплатные примеры файлов MAX 3ds Max для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации 3D моделей, просмотрщиков MAX и программного обеспечения профессионального 3D моделирования и анимации.' },
        mb: { name: 'Примеры файлов MB', description: 'Скачайте бесплатные примеры файлов MB Maya Binary для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов конвертации сцен Maya, просмотрщиков MB и программного обеспечения 3D моделирования и профессиональной анимации.' },
        mbtiles: { name: 'Примеры файлов MBTiles', description: 'Скачайте бесплатные примеры файлов MBTiles MapBox tiles для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов визуализации карт, извлечения MBTiles и программного обеспечения веб-картографии и мобильных приложений.' },
        mdx: { name: 'Примеры файлов MDX', description: 'Скачайте бесплатные примеры файлов MDX Markdown Extended для тестирования. Доступны различные размеры файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования инструментов обработки документации, анализа MDX и программного обеспечения веб-разработки и генерации статических сайтов.' }
      }
    }
  },
  ar: {
    samples_page: {
      meta: {
        title: 'ملفات عينة مجانية – تنزيل ملفات الاختبار | MorphyHub',
        description: 'احصل على ملفات عينة مجانية للصور والمستندات والأرشيفات لاختبار محولات وضواغط وعارضات MorphyHub.',
        keywords: 'ملفات عينة، ملفات اختبار، تنزيل عينات، ملفات اختبار مجانية، عينات DOCX، عينات ملفات، ملفات اختبار للتحويل'
      },
      schema: {
        name: 'ملفات عينة مجانية للتنزيل والاختبار',
        description: 'قم بتنزيل ملفات عينة مجانية من أنواع مختلفة — صور ومستندات وصوت وفيديو وأرشيفات. استخدمها للاختبار أو العروض التوضيحية أو التحقق من البرامج على أي منصة.'
      },
      hero: {
        title: 'ملفات العينة',
        description: 'قم بتنزيل ملفات عينة مجانية للاختبار. أحجام ملفات متعددة متاحة لتنسيقات مختلفة لاختبار أدوات التحويل والمعالجة الخاصة بك.'
      },
      back_button: 'العودة إلى الصفحة الرئيسية',
      search: {
        placeholder: 'البحث عن ملفات عينة... (مثل DOCX، JPG، PDF)',
        results: 'تم العثور على {{count}} ملف عينة',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'عينات المستندات',
        data: 'عينات البيانات',
        application: 'عينات التطبيقات',
        design_3d: 'عينات 3D والتصميم',
        image_video: 'عينات الصور والفيديو',
        audio: 'عينات الصوت',
        archive: 'عينات الأرشيفات'
      },
      actions: { download: 'تنزيل' },
      no_results: {
        title: 'لم يتم العثور على ملفات عينة',
        description: 'حاول البحث عن شيء مثل "DOCX" أو "JPG"',
        clear: 'مسح البحث'
      },
      features: {
        title: 'لماذا تختار ملفات العينة الخاصة بنا؟',
        items: [
          { title: 'وصول مجاني وسهل', description: 'قم بتنزيل ملفات العينة على الفور دون تسجيل أو دفع.' },
          { title: 'أحجام متعددة', description: 'اختر من بين أحجام ملفات مختلفة (100 KB، 1 MB، 5 MB، 50 MB، 100 MB) للاختبار الشامل.' },
          { title: 'تنوع كبير', description: 'الوصول إلى عينات في فئات متعددة: مستندات وصور وصوت وفيديو وأرشيفات والمزيد.' }
        ]
      },
      format_description_template: 'قم بتنزيل ملفات عينة {{format}} مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار {{purpose}}.',
      formats: {
        docx: { name: 'ملفات عينة DOCX', description: 'قم بتنزيل ملفات عينة DOCX مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل المستندات.' },
        doc: { name: 'ملفات عينة DOC', description: 'قم بتنزيل ملفات عينة DOC مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل المستندات.' },
        pdf: { name: 'ملفات عينة PDF', description: 'قم بتنزيل ملفات عينة PDF مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل المستندات.' },
        odp: { name: 'ملفات عينة ODP', description: 'قم بتنزيل ملفات عينة ODP OpenDocument Presentation مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل وعرض العروض التقديمية.' },
        rtf: { name: 'ملفات عينة RTF', description: 'قم بتنزيل ملفات عينة RTF (Rich Text Format) مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل وعرض المستندات.' },
        epub: { name: 'ملفات عينة EPUB', description: 'قم بتنزيل ملفات عينة EPUB مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار قارئات الكتب الإلكترونية وتحويل EPUB وأدوات النشر الرقمي.' },
        'invoice-pdf': { name: 'ملفات عينة PDF الفواتير', description: 'قم بتنزيل ملفات عينة PDF الفواتير مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار معالجة فواتير PDF وتحليل الفواتير وأدوات إدارة المستندات.' },
        mobi: { name: 'ملفات عينة MOBI', description: 'قم بتنزيل ملفات عينة MOBI مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار تحويل كتب MOBI الإلكترونية وقراءة MOBI وأدوات معالجة الكتب الإلكترونية.' },
        csv: { name: 'ملفات عينة CSV', description: 'قم بتنزيل ملفات عينة CSV مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل CSV ومعالجة البيانات.' },
        xls: { name: 'ملفات عينة XLS', description: 'قم بتنزيل ملفات عينة XLS مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل Excel ومعالجة البيانات.' },
        xlsx: { name: 'ملفات عينة XLSX', description: 'قم بتنزيل ملفات عينة XLSX مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل Excel ومعالجة البيانات.' },
        xml: { name: 'ملفات عينة XML', description: 'قم بتنزيل ملفات عينة XML مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحليل XML وتحويل البيانات.' },
        html: { name: 'ملفات عينة HTML', description: 'قم بتنزيل ملفات عينة HTML مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار تحليل HTML وتطوير الويب وأدوات التحقق من HTML.' },
        ods: { name: 'ملفات عينة ODS', description: 'قم بتنزيل ملفات عينة ODS OpenDocument Spreadsheet مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل جداول البيانات ومعالجة البيانات.' },
        'ansible-yml': { name: 'ملفات عينة Ansible YML', description: 'قم بتنزيل ملفات عينة Ansible YML مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحليل YAML وإدارة التكوين.' },
        'api-response-json': { name: 'ملفات عينة JSON استجابة API', description: 'قم بتنزيل ملفات عينة JSON استجابة API مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحليل JSON ومعالجة استجابات API.' },
        'arduino-ino': { name: 'ملفات عينة Arduino INO', description: 'قم بتنزيل ملفات عينة Arduino INO مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تجميع كود Arduino والتحقق من بناء الجملة.' },
        asc: { name: 'ملفات عينة ASC', description: 'قم بتنزيل ملفات عينة ASC (ASCII) مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات معالجة ملفات النص وتشفير ASCII.' },
        bat: { name: 'ملفات عينة BAT', description: 'قم بتنزيل ملفات عينة BAT مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تنفيذ سكريبتات الدُفعات وأتمتة Windows.' },
        bib: { name: 'ملفات عينة BIB', description: 'قم بتنزيل ملفات عينة BIB (BibTeX) مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات إدارة المراجع ومعالجة الاستشهادات.' },
        c: { name: 'ملفات عينة C', description: 'قم بتنزيل ملفات عينة C مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تجميع كود C والتحقق من بناء الجملة.' },
        'can-log': { name: 'ملفات عينة CAN Log', description: 'قم بتنزيل ملفات عينة CAN log مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحليل ناقل CAN وتحليل السجلات.' },
        cmd: { name: 'ملفات عينة CMD', description: 'قم بتنزيل ملفات عينة CMD مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تنفيذ سكريبتات الأوامر وأتمتة Windows.' },
        conf: { name: 'ملفات عينة CONF', description: 'قم بتنزيل ملفات عينة CONF مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحليل ملفات التكوين وإعداد النظام.' },
        'config-ini': { name: 'ملفات عينة Config INI', description: 'قم بتنزيل ملفات عينة Config INI مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحليل ملفات INI وإدارة التكوين.' },
        cpp: { name: 'ملفات عينة C++', description: 'قم بتنزيل ملفات عينة C++ مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تجميع كود C++ والتحقق من بناء الجملة.' },
        crx: { name: 'ملفات عينة CRX', description: 'قم بتنزيل ملفات عينة CRX مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار تثبيت امتدادات Chrome وتحليل CRX وأدوات تطوير امتدادات المتصفح.' },
        cs: { name: 'ملفات عينة C#', description: 'قم بتنزيل ملفات عينة C# مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تجميع كود C# والتحقق من بناء الجملة.' },
        gz: { name: 'ملفات عينة GZ', description: 'قم بتنزيل ملفات عينة GZ (gzip) مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار فك ضغط gzip واستخراج الأرشيفات وأدوات ضغط الملفات.' },
        h: { name: 'ملفات عينة C Header', description: 'قم بتنزيل ملفات عينة C Header مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تجميع كود C ومعالجة ملفات الرأس.' },
        hdr: { name: 'ملفات عينة HDR', description: 'قم بتنزيل ملفات عينة HDR (High Dynamic Range) مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار معالجة صور HDR وتحويل HDR وأدوات عرض النطاق الديناميكي العالي.' },
        heic: { name: 'ملفات عينة HEIC', description: 'قم بتنزيل ملفات عينة HEIC مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار تحويل صور HEIC وعرض HEIC وأدوات معالجة تنسيقات الصور الحديثة.' },
        heif: { name: 'ملفات عينة HEIF', description: 'قم بتنزيل ملفات عينة HEIF مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار تحويل صور HEIF وعرض HEIF وأدوات معالجة تنسيقات الصور الحديثة.' },
        hex: { name: 'ملفات عينة HEX', description: 'قم بتنزيل ملفات عينة HEX (ست عشري) مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار تحليل الملفات الست عشرية وبرمجة البرامج الثابتة وأدوات تطوير الأنظمة المضمنة.' },
        hpp: { name: 'ملفات عينة C++ Header', description: 'قم بتنزيل ملفات عينة C++ Header مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تجميع كود C++ ومعالجة ملفات الرأس.' },
        css: { name: 'ملفات عينة CSS', description: 'قم بتنزيل ملفات عينة CSS مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحليل CSS وتطوير الويب والتحقق من CSS.' },
        js: { name: 'ملفات عينة JavaScript', description: 'قم بتنزيل ملفات عينة JavaScript مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحليل JavaScript وتطوير الويب والتحقق من الكود.' },
        json: { name: 'ملفات عينة JSON', description: 'قم بتنزيل ملفات عينة JSON مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحليل JSON ومعالجة البيانات والتحقق من المخططات.' },
        md: { name: 'ملفات عينة Markdown', description: 'قم بتنزيل ملفات عينة Markdown مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات معالجة Markdown وتحويل المستندات وإنشاء الوثائق.' },
        py: { name: 'ملفات عينة Python', description: 'قم بتنزيل ملفات عينة Python مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تجميع كود Python والتحقق من بناء الجملة.' },
        sh: { name: 'ملفات عينة Shell Script', description: 'قم بتنزيل ملفات عينة Shell Script مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تنفيذ سكريبتات shell وأتمتة أنظمة Unix/Linux.' },
        sql: { name: 'ملفات عينة SQL', description: 'قم بتنزيل ملفات عينة SQL مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحليل SQL وإدارة قواعد البيانات والتحقق من الاستعلامات.' },
        ts: { name: 'ملفات عينة TypeScript', description: 'قم بتنزيل ملفات عينة TypeScript مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تجميع كود TypeScript والتحقق من الأنواع.' },
        yml: { name: 'ملفات عينة YML', description: 'قم بتنزيل ملفات عينة YML مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحليل YAML وإدارة التكوين.' },
        jpg: { name: 'ملفات عينة JPG', description: 'قم بتنزيل ملفات عينة JPG مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصور ومعالجة الصور وتحسين الويب.' },
        png: { name: 'ملفات عينة PNG', description: 'قم بتنزيل ملفات عينة PNG مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصور ومعالجة الصور ورسومات الويب.' },
        gif: { name: 'ملفات عينة GIF', description: 'قم بتنزيل ملفات عينة GIF مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصور ومعالجة الصور ورسوم متحركة الويب.' },
        webp: { name: 'ملفات عينة WebP', description: 'قم بتنزيل ملفات عينة WebP مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصور ومعالجة الصور وتحسين الويب الحديث.' },
        svg: { name: 'ملفات عينة SVG', description: 'قم بتنزيل ملفات عينة SVG مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الرسوم المتجهة ومعالجة SVG وتصميم الويب.' },
        bmp: { name: 'ملفات عينة BMP', description: 'قم بتنزيل ملفات عينة BMP مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصور ومعالجة الصور وتوافق التنسيقات.' },
        ico: { name: 'ملفات عينة ICO', description: 'قم بتنزيل ملفات عينة ICO مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الرموز ومعالجة الرموز وتطوير التطبيقات.' },
        tiff: { name: 'ملفات عينة TIFF', description: 'قم بتنزيل ملفات عينة TIFF مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصور ومعالجة الصور والتحرير الاحترافي.' },
        tif: { name: 'ملفات عينة TIF', description: 'قم بتنزيل ملفات عينة TIF مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصور ومعالجة الصور والتحرير الاحترافي.' },
        avif: { name: 'ملفات عينة AVIF', description: 'قم بتنزيل ملفات عينة AVIF مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصور ومعالجة الصور وتحسين الويب من الجيل التالي.' },
        mp4: { name: 'ملفات عينة MP4', description: 'قم بتنزيل ملفات عينة MP4 مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الفيديو ومعالجة الفيديو وتشغيل الوسائط المتعددة.' },
        avi: { name: 'ملفات عينة AVI', description: 'قم بتنزيل ملفات عينة AVI مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الفيديو ومعالجة الفيديو وتوافق التنسيقات.' },
        mov: { name: 'ملفات عينة MOV', description: 'قم بتنزيل ملفات عينة MOV مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الفيديو ومعالجة الفيديو وتحرير الفيديو.' },
        wmv: { name: 'ملفات عينة WMV', description: 'قم بتنزيل ملفات عينة WMV مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الفيديو ومعالجة الفيديو وتوافق تنسيقات Windows.' },
        flv: { name: 'ملفات عينة FLV', description: 'قم بتنزيل ملفات عينة FLV مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الفيديو ومعالجة الفيديو وبث الويب.' },
        webm: { name: 'ملفات عينة WebM', description: 'قم بتنزيل ملفات عينة WebM مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الفيديو ومعالجة الفيديو وفيديو الويب الحديث.' },
        mkv: { name: 'ملفات عينة MKV', description: 'قم بتنزيل ملفات عينة MKV مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الفيديو ومعالجة الفيديو وحاويات الوسائط المتعددة.' },
        mp3: { name: 'ملفات عينة MP3', description: 'قم بتنزيل ملفات عينة MP3 مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصوت ومعالجة الصوت وتشغيل الوسائط المتعددة.' },
        wav: { name: 'ملفات عينة WAV', description: 'قم بتنزيل ملفات عينة WAV مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصوت ومعالجة الصوت والصوت بدون فقدان.' },
        flac: { name: 'ملفات عينة FLAC', description: 'قم بتنزيل ملفات عينة FLAC مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصوت ومعالجة الصوت والصوت عالي الجودة.' },
        ogg: { name: 'ملفات عينة OGG', description: 'قم بتنزيل ملفات عينة OGG مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصوت ومعالجة الصوت والصوت مفتوح المصدر.' },
        wma: { name: 'ملفات عينة WMA', description: 'قم بتنزيل ملفات عينة WMA مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصوت ومعالجة الصوت وتوافق تنسيقات Windows.' },
        aac: { name: 'ملفات عينة AAC', description: 'قم بتنزيل ملفات عينة AAC مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصوت ومعالجة الصوت والصوت عالي الكفاءة.' },
        m4a: { name: 'ملفات عينة M4A', description: 'قم بتنزيل ملفات عينة M4A مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الصوت ومعالجة الصوت وصوت حاوية MPEG-4.' },
        midi: { name: 'ملفات عينة MIDI', description: 'قم بتنزيل ملفات عينة MIDI مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات معالجة MIDI وتوليف الموسيقى وإنتاج الموسيقى.' },
        cue: { name: 'ملفات عينة CUE', description: 'قم بتنزيل ملفات عينة CUE مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار تحليل أوراق CUE وحرق CD الصوت وأدوات إنشاء CD.' },
        zip: { name: 'ملفات عينة ZIP', description: 'قم بتنزيل ملفات عينة ZIP مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات استخراج الأرشيفات وضغط الملفات وإدارة الملفات.' },
        rar: { name: 'ملفات عينة RAR', description: 'قم بتنزيل ملفات عينة RAR مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات استخراج الأرشيفات وضغط الملفات وإدارة الملفات.' },
        '7z': { name: 'ملفات عينة 7Z', description: 'قم بتنزيل ملفات عينة 7Z مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحويل الأرشيفات والاستخراج.' },
        tar: { name: 'ملفات عينة TAR', description: 'قم بتنزيل ملفات عينة TAR مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات استخراج الأرشيفات وضغط الملفات وإدارة ملفات Unix/Linux.' },
        ace: { name: 'ملفات عينة ACE', description: 'قم بتنزيل ملفات عينة ACE مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات استخراج الأرشيفات وضغط الملفات وإدارة الملفات.' },
        arj: { name: 'ملفات عينة ARJ', description: 'قم بتنزيل ملفات عينة ARJ مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات استخراج الأرشيفات وضغط الملفات وإدارة الملفات القديمة.' },
        bz2: { name: 'ملفات عينة BZ2', description: 'قم بتنزيل ملفات عينة BZ2 (bzip2) مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار فك ضغط bzip2 واستخراج الأرشيفات وأدوات ضغط الملفات.' },
        cab: { name: 'ملفات عينة CAB', description: 'قم بتنزيل ملفات عينة CAB مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات استخراج أرشيفات CAB وتثبيت برامج Windows وإدارة الملفات.' },
        cpio: { name: 'ملفات عينة CPIO', description: 'قم بتنزيل ملفات عينة CPIO مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات استخراج أرشيفات CPIO وضغط الملفات وإدارة ملفات Unix.' },
        dmg: { name: 'ملفات عينة DMG', description: 'قم بتنزيل ملفات عينة DMG مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحميل صور الأقراص وتثبيت برامج macOS وإدارة الملفات.' },
        img: { name: 'ملفات عينة IMG', description: 'قم بتنزيل ملفات عينة IMG مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحميل صور الأقراص وإنشاء صور الأقراص وإدارة الملفات.' },
        iso: { name: 'ملفات عينة ISO', description: 'قم بتنزيل ملفات عينة ISO مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات تحميل صور الأقراص وحرق CD/DVD وإدارة الملفات.' },
        kmz: { name: 'ملفات عينة KMZ', description: 'قم بتنزيل ملفات عينة KMZ مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات استخراج KMZ ومعالجة البيانات الجغرافية وتكامل Google Earth.' },
        laz: { name: 'ملفات عينة LAZ', description: 'قم بتنزيل ملفات عينة LAZ مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات استخراج LAZ ومعالجة سحب النقاط LiDAR وأدوات رسم الخرائط ثلاثية الأبعاد.' },
        lha: { name: 'ملفات عينة LHA', description: 'قم بتنزيل ملفات عينة LHA مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات استخراج LHA وفك ضغط الأرشيفات وأدوات أرشفة الملفات.' },
        lzh: { name: 'ملفات عينة LZH', description: 'قم بتنزيل ملفات عينة LZH مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات استخراج LZH وفك ضغط الأرشيفات وأدوات أرشفة الملفات.' },
        lzma: { name: 'ملفات عينة LZMA', description: 'قم بتنزيل ملفات عينة LZMA مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار أدوات فك ضغط LZMA واستخراج الأرشيفات وضغط الملفات.' }
      }
    }
  },
  th: {
    samples_page: {
      meta: {
        title: 'ไฟล์ตัวอย่างฟรี – ดาวน์โหลดไฟล์ทดสอบ | MorphyHub',
        description: 'รับไฟล์ตัวอย่างฟรีของรูปภาพ เอกสาร และไฟล์เก็บถาวรเพื่อทดสอบเครื่องมือแปลง บีบอัด และดูของ MorphyHub',
        keywords: 'ไฟล์ตัวอย่าง, ไฟล์ทดสอบ, ดาวน์โหลดตัวอย่าง, ไฟล์ทดสอบฟรี, ตัวอย่าง DOCX, ตัวอย่างไฟล์, ไฟล์ทดสอบสำหรับการแปลง'
      },
      schema: {
        name: 'ไฟล์ตัวอย่างฟรีสำหรับดาวน์โหลดและทดสอบ',
        description: 'ดาวน์โหลดไฟล์ตัวอย่างฟรีของประเภทต่างๆ — รูปภาพ เอกสาร เสียง วิดีโอ และไฟล์เก็บถาวร ใช้สำหรับการทดสอบ การสาธิต หรือการตรวจสอบซอฟต์แวร์บนแพลตฟอร์มใดก็ได้'
      },
      hero: {
        title: 'ไฟล์ตัวอย่าง',
        description: 'ดาวน์โหลดไฟล์ตัวอย่างฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งานสำหรับรูปแบบต่างๆ เพื่อทดสอบเครื่องมือแปลงและประมวลผลของคุณ'
      },
      back_button: 'กลับไปที่หน้าแรก',
      search: {
        placeholder: 'ค้นหาไฟล์ตัวอย่าง... (เช่น DOCX, JPG, PDF)',
        results: 'พบ {{count}} ไฟล์ตัวอย่าง',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'ตัวอย่างเอกสาร',
        data: 'ตัวอย่างข้อมูล',
        application: 'ตัวอย่างแอปพลิเคชัน',
        design_3d: 'ตัวอย่าง 3D และการออกแบบ',
        image_video: 'ตัวอย่างรูปภาพและวิดีโอ',
        audio: 'ตัวอย่างเสียง',
        archive: 'ตัวอย่างไฟล์เก็บถาวร'
      },
      actions: { download: 'ดาวน์โหลด' },
      no_results: {
        title: 'ไม่พบไฟล์ตัวอย่าง',
        description: 'ลองค้นหาบางอย่างเช่น "DOCX" หรือ "JPG"',
        clear: 'ล้างการค้นหา'
      },
      features: {
        title: 'ทำไมต้องเลือกไฟล์ตัวอย่างของเรา?',
        items: [
          { title: 'เข้าถึงได้ฟรีและง่าย', description: 'ดาวน์โหลดไฟล์ตัวอย่างทันทีโดยไม่ต้องลงทะเบียนหรือชำระเงิน' },
          { title: 'หลายขนาด', description: 'เลือกจากขนาดไฟล์ต่างๆ (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) สำหรับการทดสอบที่ครอบคลุม' },
          { title: 'ความหลากหลาย', description: 'เข้าถึงตัวอย่างในหลายหมวดหมู่: เอกสาร รูปภาพ เสียง วิดีโอ ไฟล์เก็บถาวร และอื่นๆ' }
        ]
      },
      format_description_template: 'ดาวน์โหลดไฟล์ตัวอย่าง {{format}} ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบ {{purpose}}',
      formats: {
        docx: { name: 'ไฟล์ตัวอย่าง DOCX', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DOCX ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเอกสาร' },
        doc: { name: 'ไฟล์ตัวอย่าง DOC', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DOC ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเอกสาร' },
        pdf: { name: 'ไฟล์ตัวอย่าง PDF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง PDF ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเอกสาร' },
        odp: { name: 'ไฟล์ตัวอย่าง ODP', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ODP OpenDocument Presentation ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงและดูการนำเสนอ' },
        rtf: { name: 'ไฟล์ตัวอย่าง RTF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง RTF (Rich Text Format) ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงและดูเอกสาร' },
        epub: { name: 'ไฟล์ตัวอย่าง EPUB', description: 'ดาวน์โหลดไฟล์ตัวอย่าง EPUB ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบโปรแกรมอ่านอีบุ๊ก การแปลง EPUB และเครื่องมือเผยแพร่ดิจิทัล' },
        'invoice-pdf': { name: 'ไฟล์ตัวอย่าง PDF ใบแจ้งหนี้', description: 'ดาวน์โหลดไฟล์ตัวอย่าง PDF ใบแจ้งหนี้ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบการประมวลผลใบแจ้งหนี้ PDF การแยกวิเคราะห์ใบแจ้งหนี้ และเครื่องมือจัดการเอกสาร' },
        mobi: { name: 'ไฟล์ตัวอย่าง MOBI', description: 'ดาวน์โหลดไฟล์ตัวอย่าง MOBI ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบการแปลงอีบุ๊ก MOBI การอ่าน MOBI และเครื่องมือประมวลผลอีบุ๊ก' },
        csv: { name: 'ไฟล์ตัวอย่าง CSV', description: 'ดาวน์โหลดไฟล์ตัวอย่าง CSV ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลง CSV และการประมวลผลข้อมูล' },
        xls: { name: 'ไฟล์ตัวอย่าง XLS', description: 'ดาวน์โหลดไฟล์ตัวอย่าง XLS ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลง Excel และการประมวลผลข้อมูล' },
        xlsx: { name: 'ไฟล์ตัวอย่าง XLSX', description: 'ดาวน์โหลดไฟล์ตัวอย่าง XLSX ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลง Excel และการประมวลผลข้อมูล' },
        xml: { name: 'ไฟล์ตัวอย่าง XML', description: 'ดาวน์โหลดไฟล์ตัวอย่าง XML ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ XML และการแปลงข้อมูล' },
        html: { name: 'ไฟล์ตัวอย่าง HTML', description: 'ดาวน์โหลดไฟล์ตัวอย่าง HTML ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบการแยกวิเคราะห์ HTML การพัฒนาเว็บ และเครื่องมือตรวจสอบ HTML' },
        ods: { name: 'ไฟล์ตัวอย่าง ODS', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ODS OpenDocument Spreadsheet ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงสเปรดชีตและการประมวลผลข้อมูล' },
        'ansible-yml': { name: 'ไฟล์ตัวอย่าง Ansible YML', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Ansible YML ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ YAML และการจัดการการกำหนดค่า' },
        'api-response-json': { name: 'ไฟล์ตัวอย่าง JSON การตอบกลับ API', description: 'ดาวน์โหลดไฟล์ตัวอย่าง JSON การตอบกลับ API ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ JSON และการจัดการการตอบกลับ API' },
        'arduino-ino': { name: 'ไฟล์ตัวอย่าง Arduino INO', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Arduino INO ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือคอมไพล์โค้ด Arduino และการตรวจสอบไวยากรณ์' },
        asc: { name: 'ไฟล์ตัวอย่าง ASC', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ASC (ASCII) ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือประมวลผลไฟล์ข้อความและการเข้ารหัส ASCII' },
        bat: { name: 'ไฟล์ตัวอย่าง BAT', description: 'ดาวน์โหลดไฟล์ตัวอย่าง BAT ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือเรียกใช้สคริปต์แบทช์และการทำให้ Windows อัตโนมัติ' },
        bib: { name: 'ไฟล์ตัวอย่าง BIB', description: 'ดาวน์โหลดไฟล์ตัวอย่าง BIB (BibTeX) ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือจัดการบรรณานุกรมและการประมวลผลการอ้างอิง' },
        c: { name: 'ไฟล์ตัวอย่าง C', description: 'ดาวน์โหลดไฟล์ตัวอย่าง C ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือคอมไพล์โค้ด C และการตรวจสอบไวยากรณ์' },
        'can-log': { name: 'ไฟล์ตัวอย่าง CAN Log', description: 'ดาวน์โหลดไฟล์ตัวอย่าง CAN log ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือวิเคราะห์ CAN bus และการแยกวิเคราะห์บันทึก' },
        cmd: { name: 'ไฟล์ตัวอย่าง CMD', description: 'ดาวน์โหลดไฟล์ตัวอย่าง CMD ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือเรียกใช้สคริปต์คำสั่งและการทำให้ Windows อัตโนมัติ' },
        conf: { name: 'ไฟล์ตัวอย่าง CONF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง CONF ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ไฟล์การกำหนดค่าและการตั้งค่าระบบ' },
        'config-ini': { name: 'ไฟล์ตัวอย่าง Config INI', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Config INI ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ไฟล์ INI และการจัดการการกำหนดค่า' },
        cpp: { name: 'ไฟล์ตัวอย่าง C++', description: 'ดาวน์โหลดไฟล์ตัวอย่าง C++ ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือคอมไพล์โค้ด C++ และการตรวจสอบไวยากรณ์' },
        crx: { name: 'ไฟล์ตัวอย่าง CRX', description: 'ดาวน์โหลดไฟล์ตัวอย่าง CRX ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบการติดตั้งส่วนขยาย Chrome การวิเคราะห์ CRX และเครื่องมือพัฒนาส่วนขยายเบราว์เซอร์' },
        cs: { name: 'ไฟล์ตัวอย่าง C#', description: 'ดาวน์โหลดไฟล์ตัวอย่าง C# ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือคอมไพล์โค้ด C# และการตรวจสอบไวยากรณ์' },
        gz: { name: 'ไฟล์ตัวอย่าง GZ', description: 'ดาวน์โหลดไฟล์ตัวอย่าง GZ (gzip) ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบการขยาย gzip การสกัดไฟล์เก็บถาวร และเครื่องมือบีบอัดไฟล์' },
        h: { name: 'ไฟล์ตัวอย่าง C Header', description: 'ดาวน์โหลดไฟล์ตัวอย่าง C Header ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือคอมไพล์โค้ด C และการประมวลผลไฟล์ส่วนหัว' },
        hdr: { name: 'ไฟล์ตัวอย่าง HDR', description: 'ดาวน์โหลดไฟล์ตัวอย่าง HDR (High Dynamic Range) ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบการประมวลผลรูปภาพ HDR การแปลง HDR และเครื่องมือดูช่วงไดนามิกสูง' },
        heic: { name: 'ไฟล์ตัวอย่าง HEIC', description: 'ดาวน์โหลดไฟล์ตัวอย่าง HEIC ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบการแปลงรูปภาพ HEIC การดู HEIC และเครื่องมือประมวลผลรูปแบบรูปภาพสมัยใหม่' },
        heif: { name: 'ไฟล์ตัวอย่าง HEIF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง HEIF ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบการแปลงรูปภาพ HEIF การดู HEIF และเครื่องมือประมวลผลรูปแบบรูปภาพสมัยใหม่' },
        hex: { name: 'ไฟล์ตัวอย่าง HEX', description: 'ดาวน์โหลดไฟล์ตัวอย่าง HEX (เลขฐานสิบหก) ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบการแยกวิเคราะห์ไฟล์เลขฐานสิบหก การเขียนโปรแกรมเฟิร์มแวร์ และเครื่องมือพัฒนาระบบฝังตัว' },
        hpp: { name: 'ไฟล์ตัวอย่าง C++ Header', description: 'ดาวน์โหลดไฟล์ตัวอย่าง C++ Header ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือคอมไพล์โค้ด C++ และการประมวลผลไฟล์ส่วนหัว' },
        css: { name: 'ไฟล์ตัวอย่าง CSS', description: 'ดาวน์โหลดไฟล์ตัวอย่าง CSS ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ CSS การพัฒนาเว็บ และเครื่องมือตรวจสอบ CSS' },
        js: { name: 'ไฟล์ตัวอย่าง JavaScript', description: 'ดาวน์โหลดไฟล์ตัวอย่าง JavaScript ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ JavaScript การพัฒนาเว็บ และเครื่องมือตรวจสอบโค้ด' },
        json: { name: 'ไฟล์ตัวอย่าง JSON', description: 'ดาวน์โหลดไฟล์ตัวอย่าง JSON ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ JSON การประมวลผลข้อมูล และเครื่องมือตรวจสอบสคีมา' },
        md: { name: 'ไฟล์ตัวอย่าง Markdown', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Markdown ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือประมวลผล Markdown การแปลงเอกสาร และการสร้างเอกสาร' },
        py: { name: 'ไฟล์ตัวอย่าง Python', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Python ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือคอมไพล์โค้ด Python และการตรวจสอบไวยากรณ์' },
        sh: { name: 'ไฟล์ตัวอย่าง Shell Script', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Shell Script ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือเรียกใช้สคริปต์ shell และการทำให้ระบบ Unix/Linux อัตโนมัติ' },
        sql: { name: 'ไฟล์ตัวอย่าง SQL', description: 'ดาวน์โหลดไฟล์ตัวอย่าง SQL ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ SQL การจัดการฐานข้อมูล และเครื่องมือตรวจสอบคำสั่ง' },
        ts: { name: 'ไฟล์ตัวอย่าง TypeScript', description: 'ดาวน์โหลดไฟล์ตัวอย่าง TypeScript ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือคอมไพล์โค้ด TypeScript และการตรวจสอบประเภท' },
        yml: { name: 'ไฟล์ตัวอย่าง YML', description: 'ดาวน์โหลดไฟล์ตัวอย่าง YML ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ YAML และการจัดการการกำหนดค่า' },
        jpg: { name: 'ไฟล์ตัวอย่าง JPG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง JPG ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงรูปภาพ การประมวลผลรูปภาพ และการเพิ่มประสิทธิภาพเว็บ' },
        png: { name: 'ไฟล์ตัวอย่าง PNG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง PNG ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงรูปภาพ การประมวลผลรูปภาพ และกราฟิกเว็บ' },
        gif: { name: 'ไฟล์ตัวอย่าง GIF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง GIF ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงรูปภาพ การประมวลผลรูปภาพ และภาพเคลื่อนไหวเว็บ' },
        webp: { name: 'ไฟล์ตัวอย่าง WebP', description: 'ดาวน์โหลดไฟล์ตัวอย่าง WebP ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงรูปภาพ การประมวลผลรูปภาพ และการเพิ่มประสิทธิภาพเว็บสมัยใหม่' },
        svg: { name: 'ไฟล์ตัวอย่าง SVG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง SVG ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงกราฟิกเวกเตอร์ การประมวลผล SVG และการออกแบบเว็บ' },
        bmp: { name: 'ไฟล์ตัวอย่าง BMP', description: 'ดาวน์โหลดไฟล์ตัวอย่าง BMP ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงรูปภาพ การประมวลผลรูปภาพ และความเข้ากันได้ของรูปแบบ' },
        ico: { name: 'ไฟล์ตัวอย่าง ICO', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ICO ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงไอคอน การประมวลผลไอคอน และการพัฒนาแอปพลิเคชัน' },
        tiff: { name: 'ไฟล์ตัวอย่าง TIFF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง TIFF ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงรูปภาพ การประมวลผลรูปภาพ และการแก้ไขมืออาชีพ' },
        tif: { name: 'ไฟล์ตัวอย่าง TIF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง TIF ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงรูปภาพ การประมวลผลรูปภาพ และการแก้ไขมืออาชีพ' },
        avif: { name: 'ไฟล์ตัวอย่าง AVIF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง AVIF ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงรูปภาพ การประมวลผลรูปภาพ และการเพิ่มประสิทธิภาพเว็บรุ่นถัดไป' },
        mp4: { name: 'ไฟล์ตัวอย่าง MP4', description: 'ดาวน์โหลดไฟล์ตัวอย่าง MP4 ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงวิดีโอ การประมวลผลวิดีโอ และการเล่นสื่อ' },
        avi: { name: 'ไฟล์ตัวอย่าง AVI', description: 'ดาวน์โหลดไฟล์ตัวอย่าง AVI ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงวิดีโอ การประมวลผลวิดีโอ และความเข้ากันได้ของรูปแบบ' },
        mov: { name: 'ไฟล์ตัวอย่าง MOV', description: 'ดาวน์โหลดไฟล์ตัวอย่าง MOV ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงวิดีโอ การประมวลผลวิดีโอ และการแก้ไขวิดีโอ' },
        wmv: { name: 'ไฟล์ตัวอย่าง WMV', description: 'ดาวน์โหลดไฟล์ตัวอย่าง WMV ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงวิดีโอ การประมวลผลวิดีโอ และความเข้ากันได้ของรูปแบบ Windows' },
        flv: { name: 'ไฟล์ตัวอย่าง FLV', description: 'ดาวน์โหลดไฟล์ตัวอย่าง FLV ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงวิดีโอ การประมวลผลวิดีโอ และสตรีมมิ่งเว็บ' },
        webm: { name: 'ไฟล์ตัวอย่าง WebM', description: 'ดาวน์โหลดไฟล์ตัวอย่าง WebM ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงวิดีโอ การประมวลผลวิดีโอ และวิดีโอเว็บสมัยใหม่' },
        mkv: { name: 'ไฟล์ตัวอย่าง MKV', description: 'ดาวน์โหลดไฟล์ตัวอย่าง MKV ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงวิดีโอ การประมวลผลวิดีโอ และคอนเทนเนอร์สื่อ' },
        mp3: { name: 'ไฟล์ตัวอย่าง MP3', description: 'ดาวน์โหลดไฟล์ตัวอย่าง MP3 ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียง การประมวลผลเสียง และการเล่นสื่อ' },
        wav: { name: 'ไฟล์ตัวอย่าง WAV', description: 'ดาวน์โหลดไฟล์ตัวอย่าง WAV ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียง การประมวลผลเสียง และเสียงแบบไม่สูญเสีย' },
        flac: { name: 'ไฟล์ตัวอย่าง FLAC', description: 'ดาวน์โหลดไฟล์ตัวอย่าง FLAC ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียง การประมวลผลเสียง และเสียงคุณภาพสูง' },
        ogg: { name: 'ไฟล์ตัวอย่าง OGG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง OGG ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียง การประมวลผลเสียง และเสียงโอเพนซอร์ส' },
        wma: { name: 'ไฟล์ตัวอย่าง WMA', description: 'ดาวน์โหลดไฟล์ตัวอย่าง WMA ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียง การประมวลผลเสียง และความเข้ากันได้ของรูปแบบ Windows' },
        aac: { name: 'ไฟล์ตัวอย่าง AAC', description: 'ดาวน์โหลดไฟล์ตัวอย่าง AAC ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียง การประมวลผลเสียง และเสียงประสิทธิภาพสูง' },
        m4a: { name: 'ไฟล์ตัวอย่าง M4A', description: 'ดาวน์โหลดไฟล์ตัวอย่าง M4A ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียง การประมวลผลเสียง และเสียงคอนเทนเนอร์ MPEG-4' },
        midi: { name: 'ไฟล์ตัวอย่าง MIDI', description: 'ดาวน์โหลดไฟล์ตัวอย่าง MIDI ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือประมวลผล MIDI การสังเคราะห์ดนตรี และการผลิตดนตรี' },
        cue: { name: 'ไฟล์ตัวอย่าง CUE', description: 'ดาวน์โหลดไฟล์ตัวอย่าง CUE ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบการแยกวิเคราะห์แผ่น CUE การเขียน CD เสียง และเครื่องมือสร้าง CD' },
        zip: { name: 'ไฟล์ตัวอย่าง ZIP', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ZIP ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสกัดไฟล์เก็บถาวร การบีบอัดไฟล์ และการจัดการไฟล์' },
        rar: { name: 'ไฟล์ตัวอย่าง RAR', description: 'ดาวน์โหลดไฟล์ตัวอย่าง RAR ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสกัดไฟล์เก็บถาวร การบีบอัดไฟล์ และการจัดการไฟล์' },
        '7z': { name: 'ไฟล์ตัวอย่าง 7Z', description: 'ดาวน์โหลดไฟล์ตัวอย่าง 7Z ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงไฟล์เก็บถาวรและการสกัด' },
        tar: { name: 'ไฟล์ตัวอย่าง TAR', description: 'ดาวน์โหลดไฟล์ตัวอย่าง TAR ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสกัดไฟล์เก็บถาวร การบีบอัดไฟล์ และการจัดการไฟล์ Unix/Linux' },
        ace: { name: 'ไฟล์ตัวอย่าง ACE', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ACE ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสกัดไฟล์เก็บถาวร การบีบอัดไฟล์ และการจัดการไฟล์' },
        arj: { name: 'ไฟล์ตัวอย่าง ARJ', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ARJ ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสกัดไฟล์เก็บถาวร การบีบอัดไฟล์ และการจัดการไฟล์แบบเดิม' },
        bz2: { name: 'ไฟล์ตัวอย่าง BZ2', description: 'ดาวน์โหลดไฟล์ตัวอย่าง BZ2 (bzip2) ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบการขยาย bzip2 การสกัดไฟล์เก็บถาวร และเครื่องมือบีบอัดไฟล์' },
        cab: { name: 'ไฟล์ตัวอย่าง CAB', description: 'ดาวน์โหลดไฟล์ตัวอย่าง CAB ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสกัดไฟล์เก็บถาวร CAB การติดตั้งซอฟต์แวร์ Windows และการจัดการไฟล์' },
        cpio: { name: 'ไฟล์ตัวอย่าง CPIO', description: 'ดาวน์โหลดไฟล์ตัวอย่าง CPIO ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสกัดไฟล์เก็บถาวร CPIO การบีบอัดไฟล์ และการจัดการไฟล์ Unix' },
        dmg: { name: 'ไฟล์ตัวอย่าง DMG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DMG ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือติดตั้งภาพดิสก์ การติดตั้งซอฟต์แวร์ macOS และการจัดการไฟล์' },
        img: { name: 'ไฟล์ตัวอย่าง IMG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง IMG ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือติดตั้งภาพดิสก์ การสร้างภาพดิสก์ และการจัดการไฟล์' },
        iso: { name: 'ไฟล์ตัวอย่าง ISO', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ISO ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือติดตั้งภาพดิสก์ การเขียน CD/DVD และการจัดการไฟล์' },
        kmz: { name: 'ไฟล์ตัวอย่าง KMZ', description: 'ดาวน์โหลดไฟล์ตัวอย่าง KMZ ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสกัด KMZ การประมวลผลข้อมูลทางภูมิศาสตร์ และการรวม Google Earth' },
        laz: { name: 'ไฟล์ตัวอย่าง LAZ', description: 'ดาวน์โหลดไฟล์ตัวอย่าง LAZ ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสกัด LAZ การประมวลผลเมฆจุด LiDAR และเครื่องมือทำแผนที่ 3D' },
        lha: { name: 'ไฟล์ตัวอย่าง LHA', description: 'ดาวน์โหลดไฟล์ตัวอย่าง LHA ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสกัด LHA การขยายไฟล์เก็บถาวร และเครื่องมือเก็บถาวรไฟล์' },
        lzh: { name: 'ไฟล์ตัวอย่าง LZH', description: 'ดาวน์โหลดไฟล์ตัวอย่าง LZH ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสกัด LZH การขยายไฟล์เก็บถาวร และเครื่องมือเก็บถาวรไฟล์' },
        lzma: { name: 'ไฟล์ตัวอย่าง LZMA', description: 'ดาวน์โหลดไฟล์ตัวอย่าง LZMA ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือขยาย LZMA การสกัดไฟล์เก็บถาวร และการบีบอัดไฟล์' },
        '3ds': { name: 'ไฟล์ตัวอย่าง 3DS', description: 'ดาวน์โหลดไฟล์ตัวอย่าง 3DS ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงโมเดล 3D ตัวดู 3DS และซอฟต์แวร์สร้างแบบจำลอง 3D' },
        '3gp': { name: 'ไฟล์ตัวอย่าง 3GP', description: 'ดาวน์โหลดไฟล์ตัวอย่าง 3GP ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงวิดีโอมือถือ เครื่องเล่น 3GP และแอปประมวลผลวิดีโอสำหรับสมาร์ทโฟน' },
        '3mf': { name: 'ไฟล์ตัวอย่าง 3MF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง 3MF ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือพิมพ์ 3D ตัวแปลง 3MF และซอฟต์แวร์การผลิตแบบเพิ่มเนื้อหา' },
        ac3: { name: 'ไฟล์ตัวอย่าง AC3', description: 'ดาวน์โหลดไฟล์ตัวอย่าง AC3 Dolby Digital ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียง Dolby ตัวถอดรหัส AC3 และซอฟต์แวร์ประมวลผลเสียงรอบทิศทาง' },
        ai: { name: 'ไฟล์ตัวอย่าง AI', description: 'ดาวน์โหลดไฟล์ตัวอย่าง AI Adobe Illustrator ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงกราฟิกเวกเตอร์ ตัวดู AI และซอฟต์แวร์ออกแบบกราฟิก' },
        aif: { name: 'ไฟล์ตัวอย่าง AIF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง AIF Audio Interchange File Format ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียงแบบไม่บีบอัด เครื่องเล่น AIF และซอฟต์แวร์ผลิตเสียงมืออาชีพ' },
        aiff: { name: 'ไฟล์ตัวอย่าง AIFF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง AIFF Audio Interchange File Format ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียงคุณภาพสูง เครื่องเล่น AIFF และซอฟต์แวร์มาสเตอร์เสียง' },
        amr: { name: 'ไฟล์ตัวอย่าง AMR', description: 'ดาวน์โหลดไฟล์ตัวอย่าง AMR Adaptive Multi-Rate ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียงมือถือ ตัวถอดรหัส AMR และแอปประมวลผลเสียงสำหรับโทรศัพท์' },
        'animated-gif': { name: 'ไฟล์ตัวอย่าง GIF แอนิเมชัน', description: 'ดาวน์โหลดไฟล์ตัวอย่าง GIF แอนิเมชัน ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงแอนิเมชัน GIF ตัวดู GIF แอนิเมชัน และซอฟต์แวร์สร้างแอนิเมชันเว็บ' },
        'animation-fbx': { name: 'ไฟล์ตัวอย่าง แอนิเมชัน FBX', description: 'ดาวน์โหลดไฟล์ตัวอย่าง แอนิเมชัน FBX ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงแอนิเมชัน 3D ตัวดู FBX และซอฟต์แวร์ผลิตแอนิเมชันมืออาชีพ' },
        apk: { name: 'ไฟล์ตัวอย่าง APK', description: 'ดาวน์โหลดไฟล์ตัวอย่าง APK Android ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือติดตั้งแอป Android การวิเคราะห์ APK และซอฟต์แวร์พัฒนาแอปมือถือ' },
        apng: { name: 'ไฟล์ตัวอย่าง APNG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง APNG PNG แอนิเมชัน ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลง PNG แอนิเมชัน ตัวดู APNG และซอฟต์แวร์สร้างแอนิเมชันเว็บสมัยใหม่' },
        appimage: { name: 'ไฟล์ตัวอย่าง AppImage', description: 'ดาวน์โหลดไฟล์ตัวอย่าง AppImage Linux ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือรันแอป Linux แบบพกพา การติดตั้ง AppImage และซอฟต์แวร์แจกจ่ายแอป Linux' },
        ase: { name: 'ไฟล์ตัวอย่าง ASE', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ASE Adobe Swatch Exchange ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงจานสี ตัวดู ASE และซอฟต์แวร์ออกแบบกราฟิกมืออาชีพ' },
        assetbundle: { name: 'ไฟล์ตัวอย่าง AssetBundle', description: 'ดาวน์โหลดไฟล์ตัวอย่าง AssetBundle Unity ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือโหลดทรัพยากร Unity การสกัด AssetBundle และซอฟต์แวร์พัฒนาเกม Unity' },
        'barcode-svg': { name: 'ไฟล์ตัวอย่าง บาร์โค้ด SVG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง บาร์โค้ด SVG ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสแกนบาร์โค้ด การแปลง SVG และซอฟต์แวร์สร้างบาร์โค้ดเวกเตอร์' },
        blend: { name: 'ไฟล์ตัวอย่าง BLEND', description: 'ดาวน์โหลดไฟล์ตัวอย่าง BLEND Blender ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงโมเดล 3D Blender ตัวดู BLEND และซอฟต์แวร์สร้างแบบจำลอง 3D แบบโอเพนซอร์ส' },
        bvh: { name: 'ไฟล์ตัวอย่าง BVH', description: 'ดาวน์โหลดไฟล์ตัวอย่าง BVH motion capture ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือประมวลผล motion capture การแปลงแอนิเมชัน BVH และซอฟต์แวร์ผลิตแอนิเมชันจลนศาสตร์' },
        caf: { name: 'ไฟล์ตัวอย่าง CAF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง CAF Core Audio Format ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเสียง macOS เครื่องเล่น CAF และซอฟต์แวร์ประมวลผลเสียง Apple' },
        csr: { name: 'ไฟล์ตัวอย่าง CSR', description: 'ดาวน์โหลดไฟล์ตัวอย่าง CSR Certificate Signing Request ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือจัดการใบรับรอง SSL การวิเคราะห์ CSR และซอฟต์แวร์ความปลอดภัยเครือข่ายและวิทยาการเข้ารหัสลับ' },
        'customer-database-sql': { name: 'ไฟล์ตัวอย่าง ฐานข้อมูลลูกค้า SQL', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ฐานข้อมูลลูกค้า SQL ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือจัดการฐานข้อมูล การแยกวิเคราะห์ SQL และซอฟต์แวร์จัดการข้อมูลลูกค้าและ CRM' },
        dav: { name: 'ไฟล์ตัวอย่าง DAV', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DAV วิดีโอ ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงวิดีโอ DAV เครื่องเล่น DAV และซอฟต์แวร์ประมวลผลวิดีโอการเฝ้าระวังและความปลอดภัย' },
        dbf: { name: 'ไฟล์ตัวอย่าง DBF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DBF dBase ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงฐานข้อมูล dBase การแยกวิเคราะห์ DBF และซอฟต์แวร์จัดการข้อมูลเก่า' },
        dds: { name: 'ไฟล์ตัวอย่าง DDS', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DDS DirectDraw Surface ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเท็กซ์เจอร์รูปภาพ ตัวดู DDS และซอฟต์แวร์พัฒนาเกมและกราฟิก 3D' },
        dem: { name: 'ไฟล์ตัวอย่าง DEM', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DEM Digital Elevation Model ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือประมวลผลข้อมูลความสูง การแปลง DEM และซอฟต์แวร์ทำแผนที่และ GIS' },
        der: { name: 'ไฟล์ตัวอย่าง DER', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DER ใบรับรองที่เข้ารหัส ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือจัดการใบรับรอง การแยกวิเคราะห์ DER และซอฟต์แวร์ความปลอดภัยและวิทยาการเข้ารหัสลับ' },
        dmp: { name: 'ไฟล์ตัวอย่าง DMP', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DMP memory dump ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือวิเคราะห์หน่วยความจำ การดีบัก DMP และซอฟต์แวร์วินิจฉัยระบบและนิติวิทยาศาสตร์' },
        dng: { name: 'ไฟล์ตัวอย่าง DNG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DNG Digital Negative raw image ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือประมวลผลรูปภาพ raw การแปลง DNG และซอฟต์แวร์การถ่ายภาพมืออาชีพและการแก้ไขภาพถ่าย' },
        'docker-compose-yml': { name: 'ไฟล์ตัวอย่าง Docker Compose YML', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Docker Compose YML ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือกำหนดค่า Docker การแยกวิเคราะห์ YAML และซอฟต์แวร์คอนเทนเนอร์และออร์เคสเทรชัน Docker' },
        dockerfile: { name: 'ไฟล์ตัวอย่าง Dockerfile', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Dockerfile ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือ build Docker การแยกวิเคราะห์ Dockerfile และซอฟต์แวร์พัฒนาและปรับใช้คอนเทนเนอร์' },
        dwg: { name: 'ไฟล์ตัวอย่าง DWG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DWG AutoCAD ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงแบบแปลน AutoCAD ตัวดู DWG และซอฟต์แวร์ CAD มืออาชีพและสถาปัตยกรรม' },
        dxf: { name: 'ไฟล์ตัวอย่าง DXF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง DXF Drawing Exchange Format ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงแบบแปลน CAD ตัวดู DXF และซอฟต์แวร์แลกเปลี่ยนไฟล์แบบแปลนและวิศวกรรม' },
        editorconfig: { name: 'ไฟล์ตัวอย่าง EditorConfig', description: 'ดาวน์โหลดไฟล์ตัวอย่าง EditorConfig ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือกำหนดค่าโปรแกรมแก้ไขโค้ด การแยกวิเคราะห์ EditorConfig และซอฟต์แวร์พัฒนาและจัดรูปแบบโค้ด' },
        elf: { name: 'ไฟล์ตัวอย่าง ELF', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ELF Executable and Linkable Format ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือวิเคราะห์ไบนารี Linux การแยกวิเคราะห์ ELF และซอฟต์แวร์พัฒนาระบบและ reverse engineering' },
        eps: { name: 'ไฟล์ตัวอย่าง EPS', description: 'ดาวน์โหลดไฟล์ตัวอย่าง EPS Encapsulated PostScript ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงกราฟิกเวกเตอร์ ตัวดู EPS และซอฟต์แวร์ออกแบบกราฟิกและการพิมพ์มืออาชีพ' },
        exe: { name: 'ไฟล์ตัวอย่าง EXE', description: 'ดาวน์โหลดไฟล์ตัวอย่าง EXE Windows ที่เรียกใช้งานได้ ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือวิเคราะห์ไบนารี Windows การแยกวิเคราะห์ EXE และซอฟต์แวร์พัฒนา Windows และความปลอดภัย' },
        exr: { name: 'ไฟล์ตัวอย่าง EXR', description: 'ดาวน์โหลดไฟล์ตัวอย่าง EXR OpenEXR high dynamic range image ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือประมวลผลรูปภาพ HDR การแปลง EXR และซอฟต์แวร์แสดงผลช่วงไดนามิกสูงและ VFX' },
        icns: { name: 'ไฟล์ตัวอย่าง ICNS', description: 'ดาวน์โหลดไฟล์ตัวอย่าง ICNS macOS icon ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงไอคอน macOS ตัวดู ICNS และซอฟต์แวร์ออกแบบไอคอนและการพัฒนา macOS' },
        ifc: { name: 'ไฟล์ตัวอย่าง IFC', description: 'ดาวน์โหลดไฟล์ตัวอย่าง IFC Industry Foundation Classes ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลง BIM ตัวดู IFC และซอฟต์แวร์สร้างแบบจำลองข้อมูลอาคารและสถาปัตยกรรม' },
        iges: { name: 'ไฟล์ตัวอย่าง IGES', description: 'ดาวน์โหลดไฟล์ตัวอย่าง IGES Initial Graphics Exchange Specification ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงแบบจำลอง CAD ตัวดู IGES และซอฟต์แวร์แลกเปลี่ยนแบบจำลอง 3D และวิศวกรรม' },
        igs: { name: 'ไฟล์ตัวอย่าง IGS', description: 'ดาวน์โหลดไฟล์ตัวอย่าง IGS Initial Graphics Exchange Specification ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงแบบจำลอง CAD ตัวดู IGS และซอฟต์แวร์แลกเปลี่ยนไฟล์แบบแปลนและวิศวกรรมเครื่องกล' },
        indd: { name: 'ไฟล์ตัวอย่าง INDD', description: 'ดาวน์โหลดไฟล์ตัวอย่าง INDD Adobe InDesign ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงเลย์เอาต์ ตัวดู INDD และซอฟต์แวร์การเผยแพร่และการออกแบบบรรณาธิการมืออาชีพ' },
        ini: { name: 'ไฟล์ตัวอย่าง INI', description: 'ดาวน์โหลดไฟล์ตัวอย่าง INI ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ไฟล์ INI การจัดการการกำหนดค่า และซอฟต์แวร์ประมวลผลไฟล์การตั้งค่า' },
        intelhex: { name: 'ไฟล์ตัวอย่าง Intel HEX', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Intel HEX ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือเขียนโปรแกรมไมโครคอนโทรลเลอร์ การแยกวิเคราะห์ Intel HEX และซอฟต์แวร์พัฒนาระบบฝังตัวและเฟิร์มแวร์' },
        ipa: { name: 'ไฟล์ตัวอย่าง IPA', description: 'ดาวน์โหลดไฟล์ตัวอย่าง IPA iOS App Store Package ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือติดตั้งแอป iOS การแยกวิเคราะห์ IPA และซอฟต์แวร์พัฒนาแอปมือถือ Apple' },
        ipynb: { name: 'ไฟล์ตัวอย่าง IPYNB', description: 'ดาวน์โหลดไฟล์ตัวอย่าง IPYNB Jupyter Notebook ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือรัน notebook Jupyter การแยกวิเคราะห์ IPYNB และซอฟต์แวร์วิทยาศาสตร์ข้อมูลและการวิเคราะห์แบบโต้ตอบ' },
        jar: { name: 'ไฟล์ตัวอย่าง JAR', description: 'ดาวน์โหลดไฟล์ตัวอย่าง JAR Java Archive ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือรัน Java การสกัด JAR และซอฟต์แวร์พัฒนา Java และการปรับใช้แอปพลิเคชัน' },
        java: { name: 'ไฟล์ตัวอย่าง Java', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Java source code ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือคอมไพล์ Java การแยกวิเคราะห์โค้ด Java และซอฟต์แวร์พัฒนา Java และ IDE' },
        jks: { name: 'ไฟล์ตัวอย่าง JKS', description: 'ดาวน์โหลดไฟล์ตัวอย่าง JKS Java KeyStore ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือจัดการคีย์ Java การแยกวิเคราะห์ JKS และซอฟต์แวร์ความปลอดภัย Java และวิทยาการเข้ารหัสลับ' },
        jpeg: { name: 'ไฟล์ตัวอย่าง JPEG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง JPEG Joint Photographic Experts Group ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงรูปภาพ JPEG การประมวลผลรูปภาพ และซอฟต์แวร์การถ่ายภาพดิจิทัลและการเพิ่มประสิทธิภาพเว็บ' },
        jsonl: { name: 'ไฟล์ตัวอย่าง JSONL', description: 'ดาวน์โหลดไฟล์ตัวอย่าง JSONL JSON Lines ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือประมวลผลข้อมูล JSON การแยกวิเคราะห์ JSONL และซอฟต์แวร์ประมวลผลข้อมูลสตรีมมิ่งและ big data' },
        jsx: { name: 'ไฟล์ตัวอย่าง JSX', description: 'ดาวน์โหลดไฟล์ตัวอย่าง JSX React JavaScript XML ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือคอมไพล์ React การแยกวิเคราะห์ JSX และซอฟต์แวร์พัฒนา React และ frontend' },
        jwt: { name: 'ไฟล์ตัวอย่าง JWT', description: 'ดาวน์โหลดไฟล์ตัวอย่าง JWT JSON Web Token ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือตรวจสอบความถูกต้อง JWT การแยกวิเคราะห์ JWT และซอฟต์แวร์ความปลอดภัยเว็บและ API' },
        key: { name: 'ไฟล์ตัวอย่าง KEY', description: 'ดาวน์โหลดไฟล์ตัวอย่าง KEY คีย์ส่วนตัว ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือจัดการคีย์การเข้ารหัส การแยกวิเคราะห์ KEY และซอฟต์แวร์ความปลอดภัยและวิทยาการเข้ารหัสลับ' },
        kml: { name: 'ไฟล์ตัวอย่าง KML', description: 'ดาวน์โหลดไฟล์ตัวอย่าง KML Keyhole Markup Language ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแสดงภาพทางภูมิศาสตร์ การแยกวิเคราะห์ KML และซอฟต์แวร์ทำแผนที่และ Google Earth' },
        kt: { name: 'ไฟล์ตัวอย่าง Kotlin', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Kotlin source code ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือคอมไพล์ Kotlin การแยกวิเคราะห์โค้ด Kotlin และซอฟต์แวร์พัฒนา Android และหลายแพลตฟอร์ม' },
        las: { name: 'ไฟล์ตัวอย่าง LAS', description: 'ดาวน์โหลดไฟล์ตัวอย่าง LAS LiDAR point cloud data ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือประมวลผลเมฆจุด การแปลง LAS และซอฟต์แวร์การสำรวจระยะไกลและแผนที่ 3D' },
        log: { name: 'ไฟล์ตัวอย่าง LOG', description: 'ดาวน์โหลดไฟล์ตัวอย่าง LOG ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแยกวิเคราะห์ log การแยกวิเคราะห์ log และซอฟต์แวร์ตรวจสอบระบบ' },
        lua: { name: 'ไฟล์ตัวอย่าง Lua', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Lua source code ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือรัน Lua การแยกวิเคราะห์โค้ด Lua และซอฟต์แวร์พัฒนา script และวิดีโอเกม' },
        m3u: { name: 'ไฟล์ตัวอย่าง M3U', description: 'ดาวน์โหลดไฟล์ตัวอย่าง M3U playlist ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือเล่น playlist การแยกวิเคราะห์ M3U และซอฟต์แวร์เล่นสื่อและสตรีมมิ่งเสียง' },
        m3u8: { name: 'ไฟล์ตัวอย่าง M3U8', description: 'ดาวน์โหลดไฟล์ตัวอย่าง M3U8 HLS playlist ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือสตรีมมิ่ง HLS การแยกวิเคราะห์ M3U8 และซอฟต์แวร์สตรีมมิ่งวิดีโอและการถ่ายทอดสด' },
        m4v: { name: 'ไฟล์ตัวอย่าง M4V', description: 'ดาวน์โหลดไฟล์ตัวอย่าง M4V MPEG-4 video ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงวิดีโอ MPEG-4 เครื่องเล่น M4V และซอฟต์แวร์ประมวลผลวิดีโอ Apple และ iTunes' },
        makefile: { name: 'ไฟล์ตัวอย่าง Makefile', description: 'ดาวน์โหลดไฟล์ตัวอย่าง Makefile ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือ build อัตโนมัติ การแยกวิเคราะห์ Makefile และซอฟต์แวร์คอมไพล์และการพัฒนาระบบ' },
        ma: { name: 'ไฟล์ตัวอย่าง MA', description: 'ดาวน์โหลดไฟล์ตัวอย่าง MA Maya ASCII ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงฉาก Maya การแยกวิเคราะห์ไฟล์ MA และซอฟต์แวร์แอนิเมชัน 3D' },
        max: { name: 'ไฟล์ตัวอย่าง MAX', description: 'ดาวน์โหลดไฟล์ตัวอย่าง MAX 3ds Max ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงแบบจำลอง 3D ตัวดู MAX และซอฟต์แวร์สร้างแบบจำลอง 3D มืออาชีพและแอนิเมชัน' },
        mb: { name: 'ไฟล์ตัวอย่าง MB', description: 'ดาวน์โหลดไฟล์ตัวอย่าง MB Maya Binary ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแปลงฉาก Maya ตัวดู MB และซอฟต์แวร์สร้างแบบจำลอง 3D และแอนิเมชันมืออาชีพ' },
        mbtiles: { name: 'ไฟล์ตัวอย่าง MBTiles', description: 'ดาวน์โหลดไฟล์ตัวอย่าง MBTiles MapBox tiles ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือแสดงภาพแผนที่ การสกัด MBTiles และซอฟต์แวร์ทำแผนที่เว็บและแอปพลิเคชันมือถือ' },
        mdx: { name: 'ไฟล์ตัวอย่าง MDX', description: 'ดาวน์โหลดไฟล์ตัวอย่าง MDX Markdown Extended ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบเครื่องมือประมวลผลเอกสาร การแยกวิเคราะห์ MDX และซอฟต์แวร์พัฒนาเว็บและการสร้างเว็บไซต์แบบคงที่' }
      }
    }
  },
  ja: {
    samples_page: {
      meta: {
        title: '無料サンプルファイル – テストファイルをダウンロード | MorphyHub',
        description: 'MorphyHubのコンバーター、コンプレッサー、ビューアーをテストするための無料のサンプル画像、ドキュメント、アーカイブファイルを取得します。',
        keywords: 'サンプルファイル, テストファイル, サンプルをダウンロード, 無料テストファイル, DOCXサンプル, ファイルサンプル, 変換用テストファイル'
      },
      schema: {
        name: 'ダウンロードとテスト用の無料サンプルファイル',
        description: 'さまざまなタイプの無料サンプルファイルをダウンロード — 画像、ドキュメント、オーディオ、ビデオ、アーカイブ。テスト、デモ、または任意のプラットフォームでのソフトウェア検証に使用します。'
      },
      hero: {
        title: 'サンプルファイル',
        description: 'テスト用の無料サンプルファイルをダウンロード。変換および処理ツールをテストするために、さまざまな形式で複数のファイルサイズが利用可能です。'
      },
      back_button: 'ホームに戻る',
      search: {
        placeholder: 'サンプルファイルを検索... (例: DOCX, JPG, PDF)',
        results: '{{count}}件のサンプルファイルが見つかりました',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'ドキュメントサンプル',
        data: 'データサンプル',
        application: 'アプリケーションサンプル',
        design_3d: '3D & デザインサンプル',
        image_video: '画像 & ビデオサンプル',
        audio: 'オーディオサンプル',
        archive: 'アーカイブサンプル'
      },
      actions: { download: 'ダウンロード' },
      no_results: {
        title: 'サンプルファイルが見つかりません',
        description: '"DOCX"または"JPG"のようなものを検索してみてください',
        clear: '検索をクリア'
      },
      features: {
        title: 'なぜ私たちのサンプルファイルを選ぶのか？',
        items: [
          { title: '無料で簡単なアクセス', description: '登録や支払いなしで即座にサンプルファイルをダウンロード。' },
          { title: '複数のサイズ', description: '包括的なテストのために、さまざまなファイルサイズ（100 KB、1 MB、5 MB、50 MB、100 MB）から選択。' },
          { title: '幅広い種類', description: '複数のカテゴリでサンプルにアクセス：ドキュメント、画像、オーディオ、ビデオ、アーカイブなど。' }
        ]
      },
      format_description_template: 'テスト用の無料{{format}}サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。{{purpose}}のテストに最適。',
      formats: {
        docx: { name: 'DOCXサンプルファイル', description: 'テスト用の無料DOCXサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ドキュメント変換ツールのテストに最適。' },
        doc: { name: 'DOCサンプルファイル', description: 'テスト用の無料DOCサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ドキュメント変換ツールのテストに最適。' },
        pdf: { name: 'PDFサンプルファイル', description: 'テスト用の無料PDFサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ドキュメント変換ツールのテストに最適。' },
        odp: { name: 'ODPサンプルファイル', description: 'テスト用の無料ODP OpenDocument Presentationサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。プレゼンテーション変換および表示ツールのテストに最適。' },
        rtf: { name: 'RTFサンプルファイル', description: 'テスト用の無料RTF (Rich Text Format) サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ドキュメント変換および表示ツールのテストに最適。' },
        epub: { name: 'EPUBサンプルファイル', description: 'テスト用の無料EPUBサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。eブックリーダー、EPUB変換、デジタル出版ツールのテストに最適。' },
        'invoice-pdf': { name: '請求書PDFサンプルファイル', description: 'テスト用の無料請求書PDFサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。PDF請求書処理、請求書解析、ドキュメント管理ツールのテストに最適。' },
        mobi: { name: 'MOBIサンプルファイル', description: 'テスト用の無料MOBIサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。MOBI eブック変換、MOBI読み取り、eブック処理ツールのテストに最適。' },
        csv: { name: 'CSVサンプルファイル', description: 'テスト用の無料CSVサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。CSV変換およびデータ処理ツールのテストに最適。' },
        xls: { name: 'XLSサンプルファイル', description: 'テスト用の無料XLSサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Excel変換およびデータ処理ツールのテストに最適。' },
        xlsx: { name: 'XLSXサンプルファイル', description: 'テスト用の無料XLSXサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Excel変換およびデータ処理ツールのテストに最適。' },
        xml: { name: 'XMLサンプルファイル', description: 'テスト用の無料XMLサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。XML解析およびデータ変換ツールのテストに最適。' },
        html: { name: 'HTMLサンプルファイル', description: 'テスト用の無料HTMLサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。HTML解析、Web開発、HTML検証ツールのテストに最適。' },
        ods: { name: 'ODSサンプルファイル', description: 'テスト用の無料ODS OpenDocument Spreadsheetサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。スプレッドシート変換およびデータ処理ツールのテストに最適。' },
        'ansible-yml': { name: 'Ansible YMLサンプルファイル', description: 'テスト用の無料Ansible YMLサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。YAML解析および設定管理ツールのテストに最適。' },
        'api-response-json': { name: 'API Response JSONサンプルファイル', description: 'テスト用の無料API response JSONサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。JSON解析およびAPI response処理ツールのテストに最適。' },
        'arduino-ino': { name: 'Arduino INOサンプルファイル', description: 'テスト用の無料Arduino INOサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Arduinoコードコンパイルおよび構文チェックツールのテストに最適。' },
        asc: { name: 'ASCサンプルファイル', description: 'テスト用の無料ASC (ASCII) サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。テキストファイル処理およびASCIIエンコーディングツールのテストに最適。' },
        bat: { name: 'BATサンプルファイル', description: 'テスト用の無料BATバッチスクリプトサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。バッチスクリプト実行およびWindows自動化ツールのテストに最適。' },
        bib: { name: 'BIBサンプルファイル', description: 'テスト用の無料BIB (BibTeX) 参考文献サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。参考文献管理および引用処理ツールのテストに最適。' },
        c: { name: 'Cサンプルファイル', description: 'テスト用の無料Cソースコードサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Cコードコンパイルおよび構文チェックツールのテストに最適。' },
        'can-log': { name: 'CAN Logサンプルファイル', description: 'テスト用の無料CAN logサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。CANバス解析およびログ解析ツールのテストに最適。' },
        cmd: { name: 'CMDサンプルファイル', description: 'テスト用の無料CMDコマンドスクリプトサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。コマンドスクリプト実行およびWindows自動化ツールのテストに最適。' },
        conf: { name: 'CONFサンプルファイル', description: 'テスト用の無料CONF設定ファイルサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。設定ファイル解析およびシステムセットアップツールのテストに最適。' },
        'config-ini': { name: 'Config INIサンプルファイル', description: 'テスト用の無料Config INI INI設定ファイルサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。INIファイル解析および設定管理ツールのテストに最適。' },
        cpp: { name: 'C++サンプルファイル', description: 'テスト用の無料C++ソースコードサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。C++コードコンパイルおよび構文チェックツールのテストに最適。' },
        crx: { name: 'CRXサンプルファイル', description: 'テスト用の無料CRX Chrome拡張機能パッケージサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Chrome拡張機能インストール、CRX解析、ブラウザ拡張機能開発ツールのテストに最適。' },
        cs: { name: 'C#サンプルファイル', description: 'テスト用の無料C#ソースコードサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。C#コードコンパイルおよび構文チェックツールのテストに最適。' },
        gz: { name: 'GZサンプルファイル', description: 'テスト用の無料GZ (gzip) 圧縮アーカイブサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。gzip展開、アーカイブ抽出、ファイル圧縮ツールのテストに最適。' },
        h: { name: 'C Headerサンプルファイル', description: 'テスト用の無料C headerサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Cコードコンパイルおよびヘッダーファイル処理ツールのテストに最適。' },
        hdr: { name: 'HDRサンプルファイル', description: 'テスト用の無料HDR (High Dynamic Range) 画像サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。HDR画像処理、HDR変換、高ダイナミックレンジ表示ツールのテストに最適。' },
        heic: { name: 'HEICサンプルファイル', description: 'テスト用の無料HEIC (High Efficiency Image Container) サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。HEIC画像変換、HEIC表示、モダン画像形式処理ツールのテストに最適。' },
        heif: { name: 'HEIFサンプルファイル', description: 'テスト用の無料HEIF (High Efficiency Image Format) サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。HEIF画像変換、HEIF表示、モダン画像形式処理ツールのテストに最適。' },
        hex: { name: 'HEXサンプルファイル', description: 'テスト用の無料HEX (16進数) サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。16進数ファイル解析、ファームウェアプログラミング、組み込みシステム開発ツールのテストに最適。' },
        hpp: { name: 'C++ Headerサンプルファイル', description: 'テスト用の無料C++ headerサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。C++コードコンパイルおよびヘッダーファイル処理ツールのテストに最適。' },
        css: { name: 'CSSサンプルファイル', description: 'テスト用の無料CSSサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。CSS解析、Web開発、CSS検証ツールのテストに最適。' },
        js: { name: 'JavaScriptサンプルファイル', description: 'テスト用の無料JavaScriptサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。JavaScript解析、Web開発、コード検証ツールのテストに最適。' },
        json: { name: 'JSONサンプルファイル', description: 'テスト用の無料JSONサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。JSON解析、データ処理、スキーマ検証ツールのテストに最適。' },
        md: { name: 'Markdownサンプルファイル', description: 'テスト用の無料Markdownサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Markdown処理、ドキュメント変換、ドキュメント生成ツールのテストに最適。' },
        py: { name: 'Pythonサンプルファイル', description: 'テスト用の無料Pythonサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Pythonコードコンパイルおよび構文チェックツールのテストに最適。' },
        sh: { name: 'Shell Scriptサンプルファイル', description: 'テスト用の無料Shell Scriptサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Shellスクリプト実行およびUnix/Linux自動化ツールのテストに最適。' },
        sql: { name: 'SQLサンプルファイル', description: 'テスト用の無料SQLサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。SQL解析、データベース管理、クエリ検証ツールのテストに最適。' },
        ts: { name: 'TypeScriptサンプルファイル', description: 'テスト用の無料TypeScriptサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。TypeScriptコードコンパイルおよび型チェックツールのテストに最適。' },
        yml: { name: 'YMLサンプルファイル', description: 'テスト用の無料YMLサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。YAML解析および設定管理ツールのテストに最適。' },
        jpg: { name: 'JPGサンプルファイル', description: 'テスト用の無料JPGサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。画像変換ツール、画像処理、Web最適化のテストに最適。' },
        png: { name: 'PNGサンプルファイル', description: 'テスト用の無料PNGサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。画像変換ツール、画像処理、Webグラフィックのテストに最適。' },
        gif: { name: 'GIFサンプルファイル', description: 'テスト用の無料GIFサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。画像変換ツール、画像処理、Webアニメーションのテストに最適。' },
        webp: { name: 'WebPサンプルファイル', description: 'テスト用の無料WebPサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。画像変換ツール、画像処理、モダンWeb最適化のテストに最適。' },
        svg: { name: 'SVGサンプルファイル', description: 'テスト用の無料SVGサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ベクターグラフィック変換ツール、SVG処理、Webデザインのテストに最適。' },
        bmp: { name: 'BMPサンプルファイル', description: 'テスト用の無料BMPサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。画像変換ツール、画像処理、形式互換性のテストに最適。' },
        ico: { name: 'ICOサンプルファイル', description: 'テスト用の無料ICOサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。アイコン変換ツール、アイコン処理、アプリケーション開発のテストに最適。' },
        tiff: { name: 'TIFFサンプルファイル', description: 'テスト用の無料TIFFサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。画像変換ツール、画像処理、プロフェッショナル編集のテストに最適。' },
        tif: { name: 'TIFサンプルファイル', description: 'テスト用の無料TIFサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。画像変換ツール、画像処理、プロフェッショナル編集のテストに最適。' },
        avif: { name: 'AVIFサンプルファイル', description: 'テスト用の無料AVIFサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。画像変換ツール、画像処理、次世代Web最適化のテストに最適。' },
        mp4: { name: 'MP4サンプルファイル', description: 'テスト用の無料MP4サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ビデオ変換ツール、ビデオ処理、マルチメディア再生のテストに最適。' },
        avi: { name: 'AVIサンプルファイル', description: 'テスト用の無料AVIサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ビデオ変換ツール、ビデオ処理、形式互換性のテストに最適。' },
        mov: { name: 'MOVサンプルファイル', description: 'テスト用の無料MOVサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ビデオ変換ツール、ビデオ処理、ビデオ編集のテストに最適。' },
        wmv: { name: 'WMVサンプルファイル', description: 'テスト用の無料WMVサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ビデオ変換ツール、ビデオ処理、Windows形式互換性のテストに最適。' },
        flv: { name: 'FLVサンプルファイル', description: 'テスト用の無料FLVサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ビデオ変換ツール、ビデオ処理、Webストリーミングのテストに最適。' },
        webm: { name: 'WebMサンプルファイル', description: 'テスト用の無料WebMサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ビデオ変換ツール、ビデオ処理、モダンWebビデオのテストに最適。' },
        mkv: { name: 'MKVサンプルファイル', description: 'テスト用の無料MKVサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ビデオ変換ツール、ビデオ処理、マルチメディアコンテナのテストに最適。' },
        mp3: { name: 'MP3サンプルファイル', description: 'テスト用の無料MP3サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。オーディオ変換ツール、オーディオ処理、マルチメディア再生のテストに最適。' },
        wav: { name: 'WAVサンプルファイル', description: 'テスト用の無料WAVサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。オーディオ変換ツール、オーディオ処理、ロスレスオーディオのテストに最適。' },
        flac: { name: 'FLACサンプルファイル', description: 'テスト用の無料FLACサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。オーディオ変換ツール、オーディオ処理、高品質オーディオのテストに最適。' },
        ogg: { name: 'OGGサンプルファイル', description: 'テスト用の無料OGGサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。オーディオ変換ツール、オーディオ処理、オープンソースオーディオのテストに最適。' },
        wma: { name: 'WMAサンプルファイル', description: 'テスト用の無料WMAサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。オーディオ変換ツール、オーディオ処理、Windows形式互換性のテストに最適。' },
        aac: { name: 'AACサンプルファイル', description: 'テスト用の無料AACサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。オーディオ変換ツール、オーディオ処理、高効率オーディオのテストに最適。' },
        m4a: { name: 'M4Aサンプルファイル', description: 'テスト用の無料M4Aサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。オーディオ変換ツール、オーディオ処理、MPEG-4コンテナオーディオのテストに最適。' },
        midi: { name: 'MIDIサンプルファイル', description: 'テスト用の無料MIDIサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。MIDI処理ツール、音楽合成、音楽制作のテストに最適。' },
        cue: { name: 'CUEサンプルファイル', description: 'テスト用の無料CUEサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。CUEシート解析、オーディオCD書き込み、CD作成ツールのテストに最適。' },
        zip: { name: 'ZIPサンプルファイル', description: 'テスト用の無料ZIPサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。アーカイブ抽出ツール、ファイル圧縮、ファイル管理のテストに最適。' },
        rar: { name: 'RARサンプルファイル', description: 'テスト用の無料RARサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。アーカイブ抽出ツール、ファイル圧縮、ファイル管理のテストに最適。' },
        '7z': { name: '7Zサンプルファイル', description: 'テスト用の無料7Zサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。アーカイブ変換および抽出ツールのテストに最適。' },
        tar: { name: 'TARサンプルファイル', description: 'テスト用の無料TARサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。アーカイブ抽出ツール、ファイル圧縮、Unix/Linuxファイル管理のテストに最適。' },
        ace: { name: 'ACEサンプルファイル', description: 'テスト用の無料ACEサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。アーカイブ抽出ツール、ファイル圧縮、ファイル管理のテストに最適。' },
        arj: { name: 'ARJサンプルファイル', description: 'テスト用の無料ARJサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。アーカイブ抽出ツール、ファイル圧縮、レガシーファイル管理のテストに最適。' },
        bz2: { name: 'BZ2サンプルファイル', description: 'テスト用の無料BZ2 (bzip2) サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。bzip2展開、アーカイブ抽出、ファイル圧縮ツールのテストに最適。' },
        cab: { name: 'CABサンプルファイル', description: 'テスト用の無料CABサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。CABアーカイブ抽出ツール、Windowsソフトウェアインストール、ファイル管理のテストに最適。' },
        cpio: { name: 'CPIOサンプルファイル', description: 'テスト用の無料CPIOサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。CPIOアーカイブ抽出ツール、ファイル圧縮、Unixファイル管理のテストに最適。' },
        dmg: { name: 'DMGサンプルファイル', description: 'テスト用の無料DMGサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ディスクイメージマウントツール、macOSソフトウェアインストール、ファイル管理のテストに最適。' },
        img: { name: 'IMGサンプルファイル', description: 'テスト用の無料IMGサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ディスクイメージマウントツール、ディスクイメージ作成、ファイル管理のテストに最適。' },
        iso: { name: 'ISOサンプルファイル', description: 'テスト用の無料ISOサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ディスクイメージマウントツール、CD/DVD書き込み、ファイル管理のテストに最適。' },
        kmz: { name: 'KMZサンプルファイル', description: 'テスト用の無料KMZ圧縮Keyhole Markup Languageサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。KMZ抽出、地理データ処理、Google Earth統合ツールのテストに最適。' },
        laz: { name: 'LAZサンプルファイル', description: 'テスト用の無料LAZ圧縮LiDARポイントクラウドデータサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。LAZ抽出、ポイントクラウド処理、3Dマッピングツールのテストに最適。' },
        lha: { name: 'LHAサンプルファイル', description: 'テスト用の無料LHA LHAアーカイブサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。LHA抽出、アーカイブ展開、ファイルアーカイブツールのテストに最適。' },
        lzh: { name: 'LZHサンプルファイル', description: 'テスト用の無料LZH LZHアーカイブサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。LZH抽出、アーカイブ展開、ファイルアーカイブツールのテストに最適。' },
        lzma: { name: 'LZMAサンプルファイル', description: 'テスト用の無料LZMA LZMA圧縮サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。LZMA展開、アーカイブ抽出、ファイル圧縮ツールのテストに最適。' },
        '3ds': { name: '3DSサンプルファイル', description: 'テスト用の無料3DS 3Dモデルサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。3Dモデル変換ツール、3DSビューアー、3Dモデリングソフトウェアのテストに最適。' },
        '3gp': { name: '3GPサンプルファイル', description: 'テスト用の無料3GPモバイル動画サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。モバイル動画変換ツール、3GPプレーヤー、スマートフォン用動画処理アプリのテストに最適。' },
        '3mf': { name: '3MFサンプルファイル', description: 'テスト用の無料3MF 3Dプリンティングサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。3Dプリンティングツール、3MFコンバーター、積層造形ソフトウェアのテストに最適。' },
        ac3: { name: 'AC3サンプルファイル', description: 'テスト用の無料AC3 Dolby Digital音声サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Dolby音声変換ツール、AC3デコーダー、サラウンド音声処理ソフトウェアのテストに最適。' },
        ai: { name: 'AIサンプルファイル', description: 'テスト用の無料AI Adobe Illustratorベクターグラフィックサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ベクターグラフィック変換ツール、AIビューアー、グラフィックデザインソフトウェアのテストに最適。' },
        aif: { name: 'AIFサンプルファイル', description: 'テスト用の無料AIF Audio Interchange File Format非圧縮音声サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。非圧縮音声変換ツール、AIFプレーヤー、プロフェッショナル音声制作ソフトウェアのテストに最適。' },
        aiff: { name: 'AIFFサンプルファイル', description: 'テスト用の無料AIFF Audio Interchange File Format高品質音声サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。高品質音声変換ツール、AIFFプレーヤー、オーディオマスタリングソフトウェアのテストに最適。' },
        amr: { name: 'AMRサンプルファイル', description: 'テスト用の無料AMR Adaptive Multi-Rateモバイル音声サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。モバイル音声変換ツール、AMRデコーダー、電話用音声処理アプリのテストに最適。' },
        'animated-gif': { name: 'アニメーションGIFサンプルファイル', description: 'テスト用の無料アニメーションGIFサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。GIFアニメーション変換ツール、アニメーションGIFビューアー、ウェブアニメーション作成ソフトウェアのテストに最適。' },
        'animation-fbx': { name: 'アニメーションFBXサンプルファイル', description: 'テスト用の無料アニメーションFBX 3Dアニメーションサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。3Dアニメーション変換ツール、FBXビューアー、プロフェッショナルアニメーション制作ソフトウェアのテストに最適。' },
        apk: { name: 'APKサンプルファイル', description: 'テスト用の無料APK Androidアプリケーションパッケージサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Androidアプリインストールツール、APK解析、モバイルアプリケーション開発ソフトウェアのテストに最適。' },
        apng: { name: 'APNGサンプルファイル', description: 'テスト用の無料APNGアニメーションPNGサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。アニメーションPNG変換ツール、APNGビューアー、モダンなウェブアニメーション作成ソフトウェアのテストに最適。' },
        appimage: { name: 'AppImageサンプルファイル', description: 'テスト用の無料AppImage Linuxサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ポータブルLinuxアプリケーション実行ツール、AppImageインストール、Linuxアプリケーション配布ソフトウェアのテストに最適。' },
        ase: { name: 'ASEサンプルファイル', description: 'テスト用の無料ASE Adobe Swatch Exchangeカラーパレットサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。カラーパレット変換ツール、ASEビューアー、プロフェッショナルグラフィックデザインソフトウェアのテストに最適。' },
        assetbundle: { name: 'AssetBundleサンプルファイル', description: 'テスト用の無料AssetBundle Unityゲームアセットサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Unityアセットローディングツール、AssetBundle抽出、Unityゲーム開発ソフトウェアのテストに最適。' },
        'barcode-svg': { name: 'バーコードSVGサンプルファイル', description: 'テスト用の無料バーコードSVGベクターグラフィックサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。バーコードスキャンツール、SVG変換、ベクターバーコード生成ソフトウェアのテストに最適。' },
        blend: { name: 'BLENDサンプルファイル', description: 'テスト用の無料BLEND Blender 3Dモデルサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Blender 3Dモデル変換ツール、BLENDビューアー、オープンソース3Dモデリングソフトウェアのテストに最適。' },
        bvh: { name: 'BVHサンプルファイル', description: 'テスト用の無料BVHモーションキャプチャサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。モーションキャプチャ処理ツール、BVHアニメーション変換、キネマティックアニメーション制作ソフトウェアのテストに最適。' },
        caf: { name: 'CAFサンプルファイル', description: 'テスト用の無料CAF Core Audio Formatサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。macOSオーディオ変換ツール、CAFプレーヤー、Appleオーディオ処理ソフトウェアのテストに最適。' },
        csr: { name: 'CSRサンプルファイル', description: 'テスト用の無料CSR Certificate Signing Requestサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。SSL証明書管理ツール、CSR解析、ネットワークセキュリティと暗号化ソフトウェアのテストに最適。' },
        'customer-database-sql': { name: '顧客データベースSQLサンプルファイル', description: 'テスト用の無料顧客データベースSQLサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。データベース管理ツール、SQL解析、顧客データ管理およびCRMソフトウェアのテストに最適。' },
        dav: { name: 'DAVサンプルファイル', description: 'テスト用の無料DAV動画サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。DAV動画変換ツール、DAVプレーヤー、監視およびセキュリティ動画処理ソフトウェアのテストに最適。' },
        dbf: { name: 'DBFサンプルファイル', description: 'テスト用の無料DBF dBaseサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。dBaseデータベース変換ツール、DBF解析、レガシーデータ管理ソフトウェアのテストに最適。' },
        dds: { name: 'DDSサンプルファイル', description: 'テスト用の無料DDS DirectDraw Surfaceサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。画像テクスチャ変換ツール、DDSビューアー、ゲーム開発および3Dグラフィックソフトウェアのテストに最適。' },
        dem: { name: 'DEMサンプルファイル', description: 'テスト用の無料DEM Digital Elevation Modelサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。標高データ処理ツール、DEM変換、地図作成およびGISソフトウェアのテストに最適。' },
        der: { name: 'DERサンプルファイル', description: 'テスト用の無料DERエンコード証明書サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。証明書管理ツール、DER解析、セキュリティおよび暗号化ソフトウェアのテストに最適。' },
        dmp: { name: 'DMPサンプルファイル', description: 'テスト用の無料DMPメモリダンプサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。メモリ解析ツール、DMPデバッグ、システム診断およびフォレンジックソフトウェアのテストに最適。' },
        dng: { name: 'DNGサンプルファイル', description: 'テスト用の無料DNG Digital Negative raw画像サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。raw画像処理ツール、DNG変換、プロフェッショナル写真撮影および写真編集ソフトウェアのテストに最適。' },
        'docker-compose-yml': { name: 'Docker Compose YMLサンプルファイル', description: 'テスト用の無料Docker Compose YMLサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Docker設定ツール、YAML解析、Dockerコンテナ化およびオーケストレーションソフトウェアのテストに最適。' },
        dockerfile: { name: 'Dockerfileサンプルファイル', description: 'テスト用の無料Dockerfileサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Dockerビルドツール、Dockerfile解析、コンテナ開発およびデプロイメントソフトウェアのテストに最適。' },
        dwg: { name: 'DWGサンプルファイル', description: 'テスト用の無料DWG AutoCADサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。AutoCAD図面変換ツール、DWGビューアー、プロフェッショナルCADおよび建築ソフトウェアのテストに最適。' },
        dxf: { name: 'DXFサンプルファイル', description: 'テスト用の無料DXF Drawing Exchange Formatサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。CAD図面変換ツール、DXFビューアー、図面ファイル交換およびエンジニアリングソフトウェアのテストに最適。' },
        editorconfig: { name: 'EditorConfigサンプルファイル', description: 'テスト用の無料EditorConfigサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。コードエディター設定ツール、EditorConfig解析、コード開発およびフォーマットソフトウェアのテストに最適。' },
        elf: { name: 'ELFサンプルファイル', description: 'テスト用の無料ELF Executable and Linkable Formatサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Linuxバイナリ解析ツール、ELF解析、システム開発およびリバースエンジニアリングソフトウェアのテストに最適。' },
        eps: { name: 'EPSサンプルファイル', description: 'テスト用の無料EPS Encapsulated PostScriptサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ベクターグラフィック変換ツール、EPSビューアー、グラフィックデザインおよびプロフェッショナル印刷ソフトウェアのテストに最適。' },
        exe: { name: 'EXEサンプルファイル', description: 'テスト用の無料EXE Windows実行可能サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Windowsバイナリ解析ツール、EXE解析、Windows開発およびセキュリティソフトウェアのテストに最適。' },
        exr: { name: 'EXRサンプルファイル', description: 'テスト用の無料EXR OpenEXR高ダイナミックレンジ画像サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。HDR画像処理ツール、EXR変換、高ダイナミックレンジ表示およびVFXソフトウェアのテストに最適。' },
        icns: { name: 'ICNSサンプルファイル', description: 'テスト用の無料ICNS macOSアイコンサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。macOSアイコン変換ツール、ICNSビューアー、アイコンデザインおよびmacOS開発ソフトウェアのテストに最適。' },
        ifc: { name: 'IFCサンプルファイル', description: 'テスト用の無料IFC Industry Foundation Classesサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。BIM変換ツール、IFCビューアー、建築情報モデリングおよび建築ソフトウェアのテストに最適。' },
        iges: { name: 'IGESサンプルファイル', description: 'テスト用の無料IGES Initial Graphics Exchange Specificationサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。CADモデル変換ツール、IGESビューアー、3Dモデル交換およびエンジニアリングソフトウェアのテストに最適。' },
        igs: { name: 'IGSサンプルファイル', description: 'テスト用の無料IGS Initial Graphics Exchange Specificationサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。CADモデル変換ツール、IGSビューアー、図面ファイル交換および機械工学ソフトウェアのテストに最適。' },
        indd: { name: 'INDDサンプルファイル', description: 'テスト用の無料INDD Adobe InDesignサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。レイアウト変換ツール、INDDビューアー、パブリッシングおよびプロフェッショナルエディトリアルデザインソフトウェアのテストに最適。' },
        ini: { name: 'INIサンプルファイル', description: 'テスト用の無料INIサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。INIファイル解析ツール、設定管理、設定ファイル処理ソフトウェアのテストに最適。' },
        intelhex: { name: 'Intel HEXサンプルファイル', description: 'テスト用の無料Intel HEXサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。マイクロコントローラープログラミングツール、Intel HEX解析、組み込みシステム開発およびファームウェアソフトウェアのテストに最適。' },
        ipa: { name: 'IPAサンプルファイル', description: 'テスト用の無料IPA iOS App Store Packageサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。iOSアプリケーションインストールツール、IPA解析、Appleモバイルアプリケーション開発ソフトウェアのテストに最適。' },
        ipynb: { name: 'IPYNBサンプルファイル', description: 'テスト用の無料IPYNB Jupyter Notebookサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Jupyter notebook実行ツール、IPYNB解析、データサイエンスおよびインタラクティブ分析ソフトウェアのテストに最適。' },
        jar: { name: 'JARサンプルファイル', description: 'テスト用の無料JAR Java Archiveサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Java実行ツール、JAR抽出、Java開発およびアプリケーションデプロイメントソフトウェアのテストに最適。' },
        java: { name: 'Javaサンプルファイル', description: 'テスト用の無料Java source codeサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Javaコードコンパイルツール、Javaコード解析、Java開発およびIDEソフトウェアのテストに最適。' },
        jks: { name: 'JKSサンプルファイル', description: 'テスト用の無料JKS Java KeyStoreサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Javaキー管理ツール、JKS解析、Javaセキュリティおよび暗号化ソフトウェアのテストに最適。' },
        jpeg: { name: 'JPEGサンプルファイル', description: 'テスト用の無料JPEG Joint Photographic Experts Groupサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。JPEG画像変換ツール、画像処理、デジタル写真撮影およびウェブ最適化ソフトウェアのテストに最適。' },
        jsonl: { name: 'JSONLサンプルファイル', description: 'テスト用の無料JSONL JSON Linesサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。JSONデータ処理ツール、JSONL解析、ストリーミングデータ処理およびビッグデータソフトウェアのテストに最適。' },
        jsx: { name: 'JSXサンプルファイル', description: 'テスト用の無料JSX React JavaScript XMLサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Reactコンパイルツール、JSX解析、React開発およびフロントエンドソフトウェアのテストに最適。' },
        jwt: { name: 'JWTサンプルファイル', description: 'テスト用の無料JWT JSON Web Tokenサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。JWT認証ツール、JWT解析、ウェブセキュリティおよびAPIソフトウェアのテストに最適。' },
        key: { name: 'KEYサンプルファイル', description: 'テスト用の無料KEY秘密鍵サンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。暗号鍵管理ツール、KEY解析、セキュリティおよび暗号化ソフトウェアのテストに最適。' },
        kml: { name: 'KMLサンプルファイル', description: 'テスト用の無料KML Keyhole Markup Languageサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。地理的可視化ツール、KML解析、地図作成およびGoogle Earthソフトウェアのテストに最適。' },
        kt: { name: 'Kotlinサンプルファイル', description: 'テスト用の無料Kotlin source codeサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Kotlinコンパイルツール、Kotlinコード解析、Android開発およびマルチプラットフォームソフトウェアのテストに最適。' },
        las: { name: 'LASサンプルファイル', description: 'テスト用の無料LAS LiDAR point cloud dataサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ポイントクラウド処理ツール、LAS変換、リモートセンシングおよび3Dマッピングソフトウェアのテストに最適。' },
        log: { name: 'LOGサンプルファイル', description: 'テスト用の無料LOGサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ログ解析ツール、ログ解析、システム監視ソフトウェアのテストに最適。' },
        lua: { name: 'Luaサンプルファイル', description: 'テスト用の無料Lua source codeサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Lua実行ツール、Luaコード解析、スクリプト開発およびビデオゲームソフトウェアのテストに最適。' },
        m3u: { name: 'M3Uサンプルファイル', description: 'テスト用の無料M3U playlistサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。プレイリスト再生ツール、M3U解析、マルチメディア再生およびオーディオストリーミングソフトウェアのテストに最適。' },
        m3u8: { name: 'M3U8サンプルファイル', description: 'テスト用の無料M3U8 HLS playlistサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。HLSストリーミングツール、M3U8解析、ビデオストリーミングおよびライブ配信ソフトウェアのテストに最適。' },
        m4v: { name: 'M4Vサンプルファイル', description: 'テスト用の無料M4V MPEG-4 videoサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。MPEG-4ビデオ変換ツール、M4Vプレーヤー、Appleビデオ処理およびiTunesソフトウェアのテストに最適。' },
        makefile: { name: 'Makefileサンプルファイル', description: 'テスト用の無料Makefileサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。自動化ビルドツール、Makefile解析、コンパイルおよびシステム開発ソフトウェアのテストに最適。' },
        ma: { name: 'MAサンプルファイル', description: 'テスト用の無料MA Maya ASCIIサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Mayaシーン変換ツール、MAファイル解析、3Dアニメーションソフトウェアのテストに最適。' },
        max: { name: 'MAXサンプルファイル', description: 'テスト用の無料MAX 3ds Maxサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。3Dモデル変換ツール、MAXビューアー、プロフェッショナル3Dモデリングおよびアニメーションソフトウェアのテストに最適。' },
        mb: { name: 'MBサンプルファイル', description: 'テスト用の無料MB Maya Binaryサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。Mayaシーン変換ツール、MBビューアー、プロフェッショナル3Dモデリングおよびアニメーションソフトウェアのテストに最適。' },
        mbtiles: { name: 'MBTilesサンプルファイル', description: 'テスト用の無料MBTiles MapBox tilesサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。地図可視化ツール、MBTiles抽出、ウェブ地図作成およびモバイルアプリケーションソフトウェアのテストに最適。' },
        mdx: { name: 'MDXサンプルファイル', description: 'テスト用の無料MDX Markdown Extendedサンプルファイルをダウンロード。複数のファイルサイズが利用可能：100 KB、1 MB、5 MB、50 MB、100 MB。ドキュメント処理ツール、MDX解析、ウェブ開発および静的サイト生成ソフトウェアのテストに最適。' }
      }
    }
  },
  zh: {
    samples_page: {
      meta: {
        title: '免费示例文件 – 下载测试文件 | MorphyHub',
        description: '获取免费的示例图像、文档和存档文件，用于测试 MorphyHub 转换器、压缩器和查看器。',
        keywords: '示例文件, 测试文件, 下载示例, 免费测试文件, DOCX 示例, 文件示例, 转换测试文件'
      },
      schema: {
        name: '免费示例文件供下载和测试',
        description: '下载各种类型的免费示例文件 — 图像、文档、音频、视频和存档。用于测试、演示或在任何平台上进行软件验证。'
      },
      hero: {
        title: '示例文件',
        description: '下载免费示例文件进行测试。提供多种文件大小，适用于各种格式，以测试您的转换和处理工具。'
      },
      back_button: '返回首页',
      search: {
        placeholder: '搜索示例文件... (例如 DOCX, JPG, PDF)',
        results: '找到 {{count}} 个示例文件',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: '文档示例',
        data: '数据示例',
        application: '应用程序示例',
        design_3d: '3D 和设计示例',
        image_video: '图像和视频示例',
        audio: '音频示例',
        archive: '存档示例'
      },
      actions: { download: '下载' },
      no_results: {
        title: '未找到示例文件',
        description: '尝试搜索类似 "DOCX" 或 "JPG" 的内容',
        clear: '清除搜索'
      },
      features: {
        title: '为什么选择我们的示例文件？',
        items: [
          { title: '免费且易于访问', description: '无需注册或付款即可立即下载示例文件。' },
          { title: '多种尺寸', description: '选择各种文件大小（100 KB、1 MB、5 MB、50 MB、100 MB）进行全面测试。' },
          { title: '种类繁多', description: '访问多个类别的示例：文档、图像、音频、视频、存档等。' }
        ]
      },
      format_description_template: '下载免费的 {{format}} 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 {{purpose}}。',
      formats: {
        docx: { name: 'DOCX 示例文件', description: '下载免费的 DOCX 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试文档转换工具。' },
        doc: { name: 'DOC 示例文件', description: '下载免费的 DOC 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试文档转换工具。' },
        pdf: { name: 'PDF 示例文件', description: '下载免费的 PDF 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试文档转换工具。' },
        odp: { name: 'ODP 示例文件', description: '下载免费的 ODP OpenDocument 演示文稿示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试演示文稿转换和查看工具。' },
        rtf: { name: 'RTF 示例文件', description: '下载免费的 RTF（富文本格式）示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试文档转换和查看工具。' },
        epub: { name: 'EPUB 示例文件', description: '下载免费的 EPUB 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试电子书阅读器、EPUB 转换和数字发布工具。' },
        'invoice-pdf': { name: '发票 PDF 示例文件', description: '下载免费的发票 PDF 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 PDF 发票处理、发票解析和文档管理工具。' },
        mobi: { name: 'MOBI 示例文件', description: '下载免费的 MOBI 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 MOBI 电子书转换、MOBI 阅读和电子书处理工具。' },
        csv: { name: 'CSV 示例文件', description: '下载免费的 CSV 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 CSV 转换和数据处理工具。' },
        xls: { name: 'XLS 示例文件', description: '下载免费的 XLS 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 Excel 转换和数据处理工具。' },
        xlsx: { name: 'XLSX 示例文件', description: '下载免费的 XLSX 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 Excel 转换和数据处理工具。' },
        xml: { name: 'XML 示例文件', description: '下载免费的 XML 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 XML 解析和数据转换工具。' },
        html: { name: 'HTML 示例文件', description: '下载免费的 HTML 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 HTML 解析、Web 开发和 HTML 验证工具。' },
        ods: { name: 'ODS 示例文件', description: '下载免费的 ODS OpenDocument 电子表格示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试电子表格转换和数据处理工具。' },
        'ansible-yml': { name: 'Ansible YML 示例文件', description: '下载免费的 Ansible YML 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 YAML 解析和配置管理工具。' },
        'api-response-json': { name: 'API 响应 JSON 示例文件', description: '下载免费的 API 响应 JSON 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 JSON 解析和 API 响应处理工具。' },
        'arduino-ino': { name: 'Arduino INO 示例文件', description: '下载免费的 Arduino INO 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 Arduino 代码编译和语法检查工具。' },
        asc: { name: 'ASC 示例文件', description: '下载免费的 ASC（ASCII）示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试文本文件处理和 ASCII 编码工具。' },
        bat: { name: 'BAT 示例文件', description: '下载免费的 BAT 批处理脚本示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试批处理脚本执行和 Windows 自动化工具。' },
        bib: { name: 'BIB 示例文件', description: '下载免费的 BIB（BibTeX）参考文献示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试参考文献管理和引用处理工具。' },
        c: { name: 'C 示例文件', description: '下载免费的 C 源代码示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 C 代码编译和语法检查工具。' },
        'can-log': { name: 'CAN 日志示例文件', description: '下载免费的 CAN 日志示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 CAN 总线分析和日志解析工具。' },
        cmd: { name: 'CMD 示例文件', description: '下载免费的 CMD 命令脚本示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试命令脚本执行和 Windows 自动化工具。' },
        conf: { name: 'CONF 示例文件', description: '下载免费的 CONF 配置文件示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试配置文件解析和系统设置工具。' },
        'config-ini': { name: 'Config INI 示例文件', description: '下载免费的 Config INI INI 配置文件示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 INI 文件解析和配置管理工具。' },
        cpp: { name: 'C++ 示例文件', description: '下载免费的 C++ 源代码示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 C++ 代码编译和语法检查工具。' },
        crx: { name: 'CRX 示例文件', description: '下载免费的 CRX Chrome 扩展包示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 Chrome 扩展安装、CRX 分析和浏览器扩展开发工具。' },
        cs: { name: 'C# 示例文件', description: '下载免费的 C# 源代码示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 C# 代码编译和语法检查工具。' },
        gz: { name: 'GZ 示例文件', description: '下载免费的 GZ（gzip）压缩存档示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 gzip 解压缩、存档提取和文件压缩工具。' },
        h: { name: 'C Header 示例文件', description: '下载免费的 C header 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 C 代码编译和头文件处理工具。' },
        hdr: { name: 'HDR 示例文件', description: '下载免费的 HDR（高动态范围）图像示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 HDR 图像处理、HDR 转换和高动态范围查看工具。' },
        heic: { name: 'HEIC 示例文件', description: '下载免费的 HEIC（高效图像容器）示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 HEIC 图像转换、HEIC 查看和现代图像格式处理工具。' },
        heif: { name: 'HEIF 示例文件', description: '下载免费的 HEIF（高效图像格式）示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 HEIF 图像转换、HEIF 查看和现代图像格式处理工具。' },
        hex: { name: 'HEX 示例文件', description: '下载免费的 HEX（十六进制）示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试十六进制文件解析、固件编程和嵌入式系统开发工具。' },
        hpp: { name: 'C++ Header 示例文件', description: '下载免费的 C++ header 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 C++ 代码编译和头文件处理工具。' },
        css: { name: 'CSS 示例文件', description: '下载免费的 CSS 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 CSS 解析、Web 开发和 CSS 验证工具。' },
        js: { name: 'JavaScript 示例文件', description: '下载免费的 JavaScript 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 JavaScript 解析、Web 开发和代码验证工具。' },
        json: { name: 'JSON 示例文件', description: '下载免费的 JSON 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 JSON 解析、数据处理和模式验证工具。' },
        md: { name: 'Markdown 示例文件', description: '下载免费的 Markdown 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 Markdown 处理、文档转换和文档生成工具。' },
        py: { name: 'Python 示例文件', description: '下载免费的 Python 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 Python 代码编译和语法检查工具。' },
        sh: { name: 'Shell Script 示例文件', description: '下载免费的 Shell Script 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 shell 脚本执行和 Unix/Linux 自动化工具。' },
        sql: { name: 'SQL 示例文件', description: '下载免费的 SQL 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 SQL 解析、数据库管理和查询验证工具。' },
        ts: { name: 'TypeScript 示例文件', description: '下载免费的 TypeScript 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 TypeScript 代码编译和类型检查工具。' },
        yml: { name: 'YML 示例文件', description: '下载免费的 YML 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 YAML 解析和配置管理工具。' },
        jpg: { name: 'JPG 示例文件', description: '下载免费的 JPG 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试图像转换工具、图像处理和 Web 优化。' },
        png: { name: 'PNG 示例文件', description: '下载免费的 PNG 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试图像转换工具、图像处理和 Web 图形。' },
        gif: { name: 'GIF 示例文件', description: '下载免费的 GIF 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试图像转换工具、图像处理和 Web 动画。' },
        webp: { name: 'WebP 示例文件', description: '下载免费的 WebP 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试图像转换工具、图像处理和现代 Web 优化。' },
        svg: { name: 'SVG 示例文件', description: '下载免费的 SVG 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试矢量图形转换工具、SVG 处理和 Web 设计。' },
        bmp: { name: 'BMP 示例文件', description: '下载免费的 BMP 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试图像转换工具、图像处理和格式兼容性。' },
        ico: { name: 'ICO 示例文件', description: '下载免费的 ICO 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试图标转换工具、图标处理和应用程序开发。' },
        tiff: { name: 'TIFF 示例文件', description: '下载免费的 TIFF 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试图像转换工具、图像处理和专业编辑。' },
        tif: { name: 'TIF 示例文件', description: '下载免费的 TIF 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试图像转换工具、图像处理和专业编辑。' },
        avif: { name: 'AVIF 示例文件', description: '下载免费的 AVIF 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试图像转换工具、图像处理和下一代 Web 优化。' },
        mp4: { name: 'MP4 示例文件', description: '下载免费的 MP4 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试视频转换工具、视频处理和多媒体播放。' },
        avi: { name: 'AVI 示例文件', description: '下载免费的 AVI 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试视频转换工具、视频处理和格式兼容性。' },
        mov: { name: 'MOV 示例文件', description: '下载免费的 MOV 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试视频转换工具、视频处理和视频编辑。' },
        wmv: { name: 'WMV 示例文件', description: '下载免费的 WMV 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试视频转换工具、视频处理和 Windows 格式兼容性。' },
        flv: { name: 'FLV 示例文件', description: '下载免费的 FLV 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试视频转换工具、视频处理和 Web 流媒体。' },
        webm: { name: 'WebM 示例文件', description: '下载免费的 WebM 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试视频转换工具、视频处理和现代 Web 视频。' },
        mkv: { name: 'MKV 示例文件', description: '下载免费的 MKV 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试视频转换工具、视频处理和多媒体容器。' },
        mp3: { name: 'MP3 示例文件', description: '下载免费的 MP3 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试音频转换工具、音频处理和多媒体播放。' },
        wav: { name: 'WAV 示例文件', description: '下载免费的 WAV 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试音频转换工具、音频处理和无损音频。' },
        flac: { name: 'FLAC 示例文件', description: '下载免费的 FLAC 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试音频转换工具、音频处理和高品质音频。' },
        ogg: { name: 'OGG 示例文件', description: '下载免费的 OGG 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试音频转换工具、音频处理和开源音频。' },
        wma: { name: 'WMA 示例文件', description: '下载免费的 WMA 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试音频转换工具、音频处理和 Windows 格式兼容性。' },
        aac: { name: 'AAC 示例文件', description: '下载免费的 AAC 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试音频转换工具、音频处理和高效率音频。' },
        m4a: { name: 'M4A 示例文件', description: '下载免费的 M4A 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试音频转换工具、音频处理和 MPEG-4 容器音频。' },
        midi: { name: 'MIDI 示例文件', description: '下载免费的 MIDI 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 MIDI 处理工具、音乐合成和音乐制作。' },
        cue: { name: 'CUE 示例文件', description: '下载免费的 CUE 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 CUE 表解析、音频 CD 刻录和 CD 创作工具。' },
        zip: { name: 'ZIP 示例文件', description: '下载免费的 ZIP 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试存档提取工具、文件压缩和文件管理。' },
        rar: { name: 'RAR 示例文件', description: '下载免费的 RAR 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试存档提取工具、文件压缩和文件管理。' },
        '7z': { name: '7Z 示例文件', description: '下载免费的 7Z 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试存档转换和提取工具。' },
        tar: { name: 'TAR 示例文件', description: '下载免费的 TAR 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试存档提取工具、文件压缩和 Unix/Linux 文件管理。' },
        ace: { name: 'ACE 示例文件', description: '下载免费的 ACE 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试存档提取工具、文件压缩和文件管理。' },
        arj: { name: 'ARJ 示例文件', description: '下载免费的 ARJ 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试存档提取工具、文件压缩和旧版文件管理。' },
        bz2: { name: 'BZ2 示例文件', description: '下载免费的 BZ2（bzip2）示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 bzip2 解压缩、存档提取和文件压缩工具。' },
        cab: { name: 'CAB 示例文件', description: '下载免费的 CAB 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 CAB 存档提取工具、Windows 软件安装和文件管理。' },
        cpio: { name: 'CPIO 示例文件', description: '下载免费的 CPIO 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 CPIO 存档提取工具、文件压缩和 Unix 文件管理。' },
        dmg: { name: 'DMG 示例文件', description: '下载免费的 DMG 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试磁盘映像挂载工具、macOS 软件安装和文件管理。' },
        img: { name: 'IMG 示例文件', description: '下载免费的 IMG 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试磁盘映像挂载工具、磁盘映像创建和文件管理。' },
        iso: { name: 'ISO 示例文件', description: '下载免费的 ISO 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试磁盘映像挂载工具、CD/DVD 刻录和文件管理。' },
        kmz: { name: 'KMZ 示例文件', description: '下载免费的 KMZ 压缩 Keyhole Markup Language 示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 KMZ 提取、地理数据处理和 Google Earth 集成工具。' },
        laz: { name: 'LAZ 示例文件', description: '下载免费的 LAZ 压缩 LiDAR 点云数据示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 LAZ 提取、点云处理和 3D 映射工具。' },
        lha: { name: 'LHA 示例文件', description: '下载免费的 LHA LHA 存档示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 LHA 提取、存档解压缩和文件存档工具。' },
        lzh: { name: 'LZH 示例文件', description: '下载免费的 LZH LZH 存档示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 LZH 提取、存档解压缩和文件存档工具。' },
        lzma: { name: 'LZMA 示例文件', description: '下载免费的 LZMA LZMA 压缩示例文件进行测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试 LZMA 解压缩、存档提取和文件压缩工具。' }
      }
    }
  },
  id: {
    samples_page: {
      meta: {
        title: 'File Contoh Gratis – Unduh File Uji | MorphyHub',
        description: 'Dapatkan file contoh gratis gambar, dokumen, dan arsip untuk menguji konverter, kompresor, dan penampil MorphyHub.',
        keywords: 'file contoh, file uji, unduh contoh, file uji gratis, contoh DOCX, contoh file, file uji untuk konversi'
      },
      schema: {
        name: 'File Contoh Gratis untuk Diunduh dan Diuji',
        description: 'Unduh file contoh gratis dari berbagai jenis — gambar, dokumen, audio, video, dan arsip. Gunakan untuk pengujian, demo, atau validasi perangkat lunak di platform apa pun.'
      },
      hero: {
        title: 'File Contoh',
        description: 'Unduh file contoh gratis untuk pengujian. Beberapa ukuran file tersedia untuk berbagai format untuk menguji alat konversi dan pemrosesan Anda.'
      },
      back_button: 'Kembali ke Beranda',
      search: {
        placeholder: 'Cari file contoh... (mis. DOCX, JPG, PDF)',
        results: 'Ditemukan {{count}} file contoh',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'CONTOH DOKUMEN',
        data: 'CONTOH DATA',
        application: 'CONTOH APLIKASI',
        design_3d: 'CONTOH 3D & DESAIN',
        image_video: 'CONTOH GAMBAR & VIDEO',
        audio: 'CONTOH AUDIO',
        archive: 'CONTOH ARSIP'
      },
      actions: { download: 'Unduh' },
      no_results: {
        title: 'Tidak ada file contoh ditemukan',
        description: 'Coba cari sesuatu seperti "DOCX" atau "JPG"',
        clear: 'Hapus pencarian'
      },
      features: {
        title: 'Mengapa Memilih File Contoh Kami?',
        items: [
          { title: 'Akses Gratis & Mudah', description: 'Unduh file contoh secara instan tanpa registrasi atau pembayaran.' },
          { title: 'Beberapa Ukuran', description: 'Pilih dari berbagai ukuran file (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) untuk pengujian komprehensif.' },
          { title: 'Beragam', description: 'Akses contoh di beberapa kategori: dokumen, gambar, audio, video, arsip, dan lainnya.' }
        ]
      },
      format_description_template: 'Unduh file contoh {{format}} gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji {{purpose}}.',
      formats: {
        docx: { name: 'File Contoh DOCX', description: 'Unduh file contoh DOCX gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dokumen.' },
        doc: { name: 'File Contoh DOC', description: 'Unduh file contoh DOC gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dokumen.' },
        pdf: { name: 'File Contoh PDF', description: 'Unduh file contoh PDF gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dokumen.' },
        odp: { name: 'File Contoh ODP', description: 'Unduh file contoh ODP OpenDocument Presentation gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan tampilan presentasi.' },
        rtf: { name: 'File Contoh RTF', description: 'Unduh file contoh RTF (Rich Text Format) gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan tampilan dokumen.' },
        epub: { name: 'File Contoh EPUB', description: 'Unduh file contoh EPUB gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pembaca eBuku, konversi EPUB, dan alat penerbitan digital.' },
        'invoice-pdf': { name: 'File Contoh PDF Faktur', description: 'Unduh file contoh PDF faktur gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemrosesan faktur PDF, parsing faktur, dan alat manajemen dokumen.' },
        mobi: { name: 'File Contoh MOBI', description: 'Unduh file contoh MOBI gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi eBuku MOBI, membaca MOBI, dan alat pemrosesan eBuku.' },
        csv: { name: 'File Contoh CSV', description: 'Unduh file contoh CSV gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi CSV dan pemrosesan data.' },
        xls: { name: 'File Contoh XLS', description: 'Unduh file contoh XLS gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi Excel dan pemrosesan data.' },
        xlsx: { name: 'File Contoh XLSX', description: 'Unduh file contoh XLSX gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi Excel dan pemrosesan data.' },
        xml: { name: 'File Contoh XML', description: 'Unduh file contoh XML gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat parsing XML dan konversi data.' },
        html: { name: 'File Contoh HTML', description: 'Unduh file contoh HTML gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing HTML, pengembangan web, dan alat validasi HTML.' },
        ods: { name: 'File Contoh ODS', description: 'Unduh file contoh ODS OpenDocument Spreadsheet gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi spreadsheet dan pemrosesan data.' },
        'ansible-yml': { name: 'File Contoh Ansible YML', description: 'Unduh file contoh Ansible YML gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat parsing YAML dan manajemen konfigurasi.' },
        'api-response-json': { name: 'File Contoh JSON Respons API', description: 'Unduh file contoh JSON respons API gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat parsing JSON dan penanganan respons API.' },
        'arduino-ino': { name: 'File Contoh Arduino INO', description: 'Unduh file contoh Arduino INO gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat kompilasi kode Arduino dan pemeriksaan sintaks.' },
        asc: { name: 'File Contoh ASC', description: 'Unduh file contoh ASC (ASCII) gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemrosesan file teks dan pengkodean ASCII.' },
        bat: { name: 'File Contoh BAT', description: 'Unduh file contoh BAT gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat eksekusi skrip batch dan otomasi Windows.' },
        bib: { name: 'File Contoh BIB', description: 'Unduh file contoh BIB (BibTeX) gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat manajemen bibliografi dan pemrosesan kutipan.' },
        c: { name: 'File Contoh C', description: 'Unduh file contoh C gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat kompilasi kode C dan pemeriksaan sintaks.' },
        'can-log': { name: 'File Contoh CAN Log', description: 'Unduh file contoh CAN log gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat analisis bus CAN dan parsing log.' },
        cmd: { name: 'File Contoh CMD', description: 'Unduh file contoh CMD gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat eksekusi skrip perintah dan otomasi Windows.' },
        conf: { name: 'File Contoh CONF', description: 'Unduh file contoh CONF gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat parsing file konfigurasi dan pengaturan sistem.' },
        'config-ini': { name: 'File Contoh Config INI', description: 'Unduh file contoh Config INI gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat parsing file INI dan manajemen konfigurasi.' },
        cpp: { name: 'File Contoh C++', description: 'Unduh file contoh C++ gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat kompilasi kode C++ dan pemeriksaan sintaks.' },
        crx: { name: 'File Contoh CRX', description: 'Unduh file contoh CRX gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji instalasi ekstensi Chrome, analisis CRX, dan alat pengembangan ekstensi browser.' },
        cs: { name: 'File Contoh C#', description: 'Unduh file contoh C# gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat kompilasi kode C# dan pemeriksaan sintaks.' },
        gz: { name: 'File Contoh GZ', description: 'Unduh file contoh GZ (gzip) gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji dekompresi gzip, ekstraksi arsip, dan alat kompresi file.' },
        h: { name: 'File Contoh C Header', description: 'Unduh file contoh C Header gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat kompilasi kode C dan pemrosesan file header.' },
        hdr: { name: 'File Contoh HDR', description: 'Unduh file contoh HDR (High Dynamic Range) gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemrosesan gambar HDR, konversi HDR, dan alat tampilan rentang dinamis tinggi.' },
        heic: { name: 'File Contoh HEIC', description: 'Unduh file contoh HEIC gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi gambar HEIC, tampilan HEIC, dan alat pemrosesan format gambar modern.' },
        heif: { name: 'File Contoh HEIF', description: 'Unduh file contoh HEIF gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi gambar HEIF, tampilan HEIF, dan alat pemrosesan format gambar modern.' },
        hex: { name: 'File Contoh HEX', description: 'Unduh file contoh HEX (heksadesimal) gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing file heksadesimal, pemrograman firmware, dan alat pengembangan sistem tertanam.' },
        hpp: { name: 'File Contoh C++ Header', description: 'Unduh file contoh C++ Header gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat kompilasi kode C++ dan pemrosesan file header.' },
        css: { name: 'File Contoh CSS', description: 'Unduh file contoh CSS gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat parsing CSS, pengembangan web, dan validasi CSS.' },
        js: { name: 'File Contoh JavaScript', description: 'Unduh file contoh JavaScript gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat parsing JavaScript, pengembangan web, dan validasi kode.' },
        json: { name: 'File Contoh JSON', description: 'Unduh file contoh JSON gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat parsing JSON, pemrosesan data, dan validasi skema.' },
        md: { name: 'File Contoh Markdown', description: 'Unduh file contoh Markdown gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemrosesan Markdown, konversi dokumen, dan pembuatan dokumentasi.' },
        py: { name: 'File Contoh Python', description: 'Unduh file contoh Python gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat kompilasi kode Python dan pemeriksaan sintaks.' },
        sh: { name: 'File Contoh Shell Script', description: 'Unduh file contoh Shell Script gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat eksekusi skrip shell dan otomasi sistem Unix/Linux.' },
        sql: { name: 'File Contoh SQL', description: 'Unduh file contoh SQL gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat parsing SQL, manajemen database, dan validasi kueri.' },
        ts: { name: 'File Contoh TypeScript', description: 'Unduh file contoh TypeScript gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat kompilasi kode TypeScript dan pemeriksaan tipe.' },
        yml: { name: 'File Contoh YML', description: 'Unduh file contoh YML gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat parsing YAML dan manajemen konfigurasi.' },
        jpg: { name: 'File Contoh JPG', description: 'Unduh file contoh JPG gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi gambar, pemrosesan gambar, dan optimasi web.' },
        png: { name: 'File Contoh PNG', description: 'Unduh file contoh PNG gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi gambar, pemrosesan gambar, dan grafik web.' },
        gif: { name: 'File Contoh GIF', description: 'Unduh file contoh GIF gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi gambar, pemrosesan gambar, dan animasi web.' },
        webp: { name: 'File Contoh WebP', description: 'Unduh file contoh WebP gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi gambar, pemrosesan gambar, dan optimasi web modern.' },
        svg: { name: 'File Contoh SVG', description: 'Unduh file contoh SVG gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi grafik vektor, pemrosesan SVG, dan desain web.' },
        bmp: { name: 'File Contoh BMP', description: 'Unduh file contoh BMP gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi gambar, pemrosesan gambar, dan kompatibilitas format.' },
        ico: { name: 'File Contoh ICO', description: 'Unduh file contoh ICO gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi ikon, pemrosesan ikon, dan pengembangan aplikasi.' },
        tiff: { name: 'File Contoh TIFF', description: 'Unduh file contoh TIFF gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi gambar, pemrosesan gambar, dan pengeditan profesional.' },
        tif: { name: 'File Contoh TIF', description: 'Unduh file contoh TIF gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi gambar, pemrosesan gambar, dan pengeditan profesional.' },
        avif: { name: 'File Contoh AVIF', description: 'Unduh file contoh AVIF gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi gambar, pemrosesan gambar, dan optimasi web generasi berikutnya.' },
        mp4: { name: 'File Contoh MP4', description: 'Unduh file contoh MP4 gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi video, pemrosesan video, dan pemutaran multimedia.' },
        avi: { name: 'File Contoh AVI', description: 'Unduh file contoh AVI gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi video, pemrosesan video, dan kompatibilitas format.' },
        mov: { name: 'File Contoh MOV', description: 'Unduh file contoh MOV gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi video, pemrosesan video, dan pengeditan video.' },
        wmv: { name: 'File Contoh WMV', description: 'Unduh file contoh WMV gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi video, pemrosesan video, dan kompatibilitas format Windows.' },
        flv: { name: 'File Contoh FLV', description: 'Unduh file contoh FLV gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi video, pemrosesan video, dan streaming web.' },
        webm: { name: 'File Contoh WebM', description: 'Unduh file contoh WebM gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi video, pemrosesan video, dan video web modern.' },
        mkv: { name: 'File Contoh MKV', description: 'Unduh file contoh MKV gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi video, pemrosesan video, dan wadah multimedia.' },
        mp3: { name: 'File Contoh MP3', description: 'Unduh file contoh MP3 gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio, pemrosesan audio, dan pemutaran multimedia.' },
        wav: { name: 'File Contoh WAV', description: 'Unduh file contoh WAV gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio, pemrosesan audio, dan audio tanpa kehilangan.' },
        flac: { name: 'File Contoh FLAC', description: 'Unduh file contoh FLAC gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio, pemrosesan audio, dan audio berkualitas tinggi.' },
        ogg: { name: 'File Contoh OGG', description: 'Unduh file contoh OGG gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio, pemrosesan audio, dan audio sumber terbuka.' },
        wma: { name: 'File Contoh WMA', description: 'Unduh file contoh WMA gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio, pemrosesan audio, dan kompatibilitas format Windows.' },
        aac: { name: 'File Contoh AAC', description: 'Unduh file contoh AAC gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio, pemrosesan audio, dan audio efisiensi tinggi.' },
        m4a: { name: 'File Contoh M4A', description: 'Unduh file contoh M4A gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio, pemrosesan audio, dan audio wadah MPEG-4.' },
        midi: { name: 'File Contoh MIDI', description: 'Unduh file contoh MIDI gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemrosesan MIDI, sintesis musik, dan produksi musik.' },
        cue: { name: 'File Contoh CUE', description: 'Unduh file contoh CUE gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing lembar CUE, pembakaran CD audio, dan alat pembuatan CD.' },
        zip: { name: 'File Contoh ZIP', description: 'Unduh file contoh ZIP gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip, kompresi file, dan manajemen file.' },
        rar: { name: 'File Contoh RAR', description: 'Unduh file contoh RAR gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip, kompresi file, dan manajemen file.' },
        '7z': { name: 'File Contoh 7Z', description: 'Unduh file contoh 7Z gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi arsip dan ekstraksi.' },
        tar: { name: 'File Contoh TAR', description: 'Unduh file contoh TAR gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip, kompresi file, dan manajemen file Unix/Linux.' },
        ace: { name: 'File Contoh ACE', description: 'Unduh file contoh ACE gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip, kompresi file, dan manajemen file.' },
        arj: { name: 'File Contoh ARJ', description: 'Unduh file contoh ARJ gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip, kompresi file, dan manajemen file lama.' },
        bz2: { name: 'File Contoh BZ2', description: 'Unduh file contoh BZ2 (bzip2) gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji dekompresi bzip2, ekstraksi arsip, dan alat kompresi file.' },
        cab: { name: 'File Contoh CAB', description: 'Unduh file contoh CAB gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip CAB, instalasi perangkat lunak Windows, dan manajemen file.' },
        cpio: { name: 'File Contoh CPIO', description: 'Unduh file contoh CPIO gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip CPIO, kompresi file, dan manajemen file Unix.' },
        dmg: { name: 'File Contoh DMG', description: 'Unduh file contoh DMG gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemasangan gambar disk, instalasi perangkat lunak macOS, dan manajemen file.' },
        img: { name: 'File Contoh IMG', description: 'Unduh file contoh IMG gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemasangan gambar disk, pembuatan gambar disk, dan manajemen file.' },
        iso: { name: 'File Contoh ISO', description: 'Unduh file contoh ISO gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemasangan gambar disk, pembakaran CD/DVD, dan manajemen file.' },
        kmz: { name: 'File Contoh KMZ', description: 'Unduh file contoh KMZ gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi KMZ, pemrosesan data geografis, dan integrasi Google Earth.' },
        laz: { name: 'File Contoh LAZ', description: 'Unduh file contoh LAZ gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi LAZ, pemrosesan awan titik LiDAR, dan alat pemetaan 3D.' },
        lha: { name: 'File Contoh LHA', description: 'Unduh file contoh LHA gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi LHA, dekompresi arsip, dan alat pengarsipan file.' },
        lzh: { name: 'File Contoh LZH', description: 'Unduh file contoh LZH gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi LZH, dekompresi arsip, dan alat pengarsipan file.' },
        lzma: { name: 'File Contoh LZMA', description: 'Unduh file contoh LZMA gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat dekompresi LZMA, ekstraksi arsip, dan kompresi file.' },
        '3ds': { name: 'File Contoh 3DS', description: 'Unduh file contoh 3DS gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi model 3D, penampil 3DS, dan perangkat lunak pemodelan 3D.' },
        '3gp': { name: 'File Contoh 3GP', description: 'Unduh file contoh 3GP gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi video seluler, pemutar 3GP, dan aplikasi pemrosesan video untuk smartphone.' },
        '3mf': { name: 'File Contoh 3MF', description: 'Unduh file contoh 3MF gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pencetakan 3D, konverter 3MF, dan perangkat lunak manufaktur aditif.' },
        ac3: { name: 'File Contoh AC3', description: 'Unduh file contoh AC3 Dolby Digital gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio Dolby, dekoder AC3, dan perangkat lunak pemrosesan audio surround.' },
        ai: { name: 'File Contoh AI', description: 'Unduh file contoh AI Adobe Illustrator gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi grafik vektor, penampil AI, dan perangkat lunak desain grafis.' },
        aif: { name: 'File Contoh AIF', description: 'Unduh file contoh AIF Audio Interchange File Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio tidak terkompresi, pemutar AIF, dan perangkat lunak produksi audio profesional.' },
        aiff: { name: 'File Contoh AIFF', description: 'Unduh file contoh AIFF Audio Interchange File Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio berkualitas tinggi, pemutar AIFF, dan perangkat lunak mastering audio.' },
        amr: { name: 'File Contoh AMR', description: 'Unduh file contoh AMR Adaptive Multi-Rate gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio seluler, dekoder AMR, dan aplikasi pemrosesan audio untuk telepon.' },
        'animated-gif': { name: 'File Contoh GIF Animasi', description: 'Unduh file contoh GIF animasi gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi animasi GIF, penampil GIF animasi, dan perangkat lunak pembuatan animasi web.' },
        'animation-fbx': { name: 'File Contoh Animasi FBX', description: 'Unduh file contoh Animasi FBX gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi animasi 3D, penampil FBX, dan perangkat lunak produksi animasi profesional.' },
        apk: { name: 'File Contoh APK', description: 'Unduh file contoh APK Android gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat instalasi aplikasi Android, analisis APK, dan perangkat lunak pengembangan aplikasi seluler.' },
        apng: { name: 'File Contoh APNG', description: 'Unduh file contoh APNG PNG animasi gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi PNG animasi, penampil APNG, dan perangkat lunak pembuatan animasi web modern.' },
        appimage: { name: 'File Contoh AppImage', description: 'Unduh file contoh AppImage Linux gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat eksekusi aplikasi Linux portabel, instalasi AppImage, dan perangkat lunak distribusi aplikasi Linux.' },
        ase: { name: 'File Contoh ASE', description: 'Unduh file contoh ASE Adobe Swatch Exchange gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi palet warna, penampil ASE, dan perangkat lunak desain grafis profesional.' },
        assetbundle: { name: 'File Contoh AssetBundle', description: 'Unduh file contoh AssetBundle Unity gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemuatan aset Unity, ekstraksi AssetBundle, dan perangkat lunak pengembangan game Unity.' },
        'barcode-svg': { name: 'File Contoh Barcode SVG', description: 'Unduh file contoh barcode SVG gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemindaian barcode, konversi SVG, dan perangkat lunak pembuatan barcode vektor.' },
        blend: { name: 'File Contoh BLEND', description: 'Unduh file contoh BLEND Blender gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi model 3D Blender, penampil BLEND, dan perangkat lunak pemodelan 3D open source.' },
        bvh: { name: 'File Contoh BVH', description: 'Unduh file contoh BVH motion capture gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemrosesan motion capture, konversi animasi BVH, dan perangkat lunak produksi animasi kinematik.' },
        caf: { name: 'File Contoh CAF', description: 'Unduh file contoh CAF Core Audio Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi audio macOS, pemutar CAF, dan perangkat lunak pemrosesan audio Apple.' },
        csr: { name: 'File Contoh CSR', description: 'Unduh file contoh CSR Certificate Signing Request gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat manajemen sertifikat SSL, analisis CSR, dan perangkat lunak keamanan jaringan dan kriptografi.' },
        'customer-database-sql': { name: 'File Contoh Database Pelanggan SQL', description: 'Unduh file contoh database pelanggan SQL gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat manajemen database, analisis SQL, dan perangkat lunak manajemen data pelanggan dan CRM.' },
        dav: { name: 'File Contoh DAV', description: 'Unduh file contoh DAV video gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi video DAV, pemutar DAV, dan perangkat lunak pemrosesan video pengawasan dan keamanan.' },
        dbf: { name: 'File Contoh DBF', description: 'Unduh file contoh DBF dBase gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi database dBase, analisis DBF, dan perangkat lunak manajemen data warisan.' },
        dds: { name: 'File Contoh DDS', description: 'Unduh file contoh DDS DirectDraw Surface gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi tekstur gambar, penampil DDS, dan perangkat lunak pengembangan game dan grafik 3D.' },
        dem: { name: 'File Contoh DEM', description: 'Unduh file contoh DEM Digital Elevation Model gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemrosesan data elevasi, konversi DEM, dan perangkat lunak pemetaan dan GIS.' },
        der: { name: 'File Contoh DER', description: 'Unduh file contoh DER sertifikat terenkripsi gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat manajemen sertifikat, analisis DER, dan perangkat lunak keamanan dan kriptografi.' },
        dmp: { name: 'File Contoh DMP', description: 'Unduh file contoh DMP memory dump gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat analisis memori, debug DMP, dan perangkat lunak diagnostik sistem dan forensik.' },
        dng: { name: 'File Contoh DNG', description: 'Unduh file contoh DNG Digital Negative raw image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemrosesan gambar raw, konversi DNG, dan perangkat lunak fotografi profesional dan pengeditan foto.' },
        'docker-compose-yml': { name: 'File Contoh Docker Compose YML', description: 'Unduh file contoh Docker Compose YML gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konfigurasi Docker, analisis YAML, dan perangkat lunak containerisasi dan orkestrasi Docker.' },
        dockerfile: { name: 'File Contoh Dockerfile', description: 'Unduh file contoh Dockerfile gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat build Docker, analisis Dockerfile, dan perangkat lunak pengembangan dan deployment container.' },
        dwg: { name: 'File Contoh DWG', description: 'Unduh file contoh DWG AutoCAD gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi gambar AutoCAD, penampil DWG, dan perangkat lunak CAD profesional dan arsitektur.' },
        dxf: { name: 'File Contoh DXF', description: 'Unduh file contoh DXF Drawing Exchange Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi gambar CAD, penampil DXF, dan perangkat lunak pertukaran file gambar dan rekayasa.' },
        editorconfig: { name: 'File Contoh EditorConfig', description: 'Unduh file contoh EditorConfig gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konfigurasi editor kode, analisis EditorConfig, dan perangkat lunak pengembangan dan pemformatan kode.' },
        elf: { name: 'File Contoh ELF', description: 'Unduh file contoh ELF Executable and Linkable Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat analisis biner Linux, analisis ELF, dan perangkat lunak pengembangan sistem dan reverse engineering.' },
        eps: { name: 'File Contoh EPS', description: 'Unduh file contoh EPS Encapsulated PostScript gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi grafik vektor, penampil EPS, dan perangkat lunak desain grafis dan pencetakan profesional.' },
        exe: { name: 'File Contoh EXE', description: 'Unduh file contoh EXE Windows yang dapat dieksekusi gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat analisis biner Windows, analisis EXE, dan perangkat lunak pengembangan Windows dan keamanan.' },
        exr: { name: 'File Contoh EXR', description: 'Unduh file contoh EXR OpenEXR high dynamic range image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemrosesan gambar HDR, konversi EXR, dan perangkat lunak visualisasi rentang dinamis tinggi dan VFX.' },
        icns: { name: 'File Contoh ICNS', description: 'Unduh file contoh ICNS macOS icon gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi ikon macOS, penampil ICNS, dan perangkat lunak desain ikon dan pengembangan macOS.' },
        ifc: { name: 'File Contoh IFC', description: 'Unduh file contoh IFC Industry Foundation Classes gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi BIM, penampil IFC, dan perangkat lunak pemodelan informasi bangunan dan arsitektur.' },
        iges: { name: 'File Contoh IGES', description: 'Unduh file contoh IGES Initial Graphics Exchange Specification gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi model CAD, penampil IGES, dan perangkat lunak pertukaran model 3D dan rekayasa.' },
        igs: { name: 'File Contoh IGS', description: 'Unduh file contoh IGS Initial Graphics Exchange Specification gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi model CAD, penampil IGS, dan perangkat lunak pertukaran file gambar dan rekayasa mesin.' },
        indd: { name: 'File Contoh INDD', description: 'Unduh file contoh INDD Adobe InDesign gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi tata letak, penampil INDD, dan perangkat lunak penerbitan dan desain editorial profesional.' },
        ini: { name: 'File Contoh INI', description: 'Unduh file contoh INI gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat analisis file INI, manajemen konfigurasi, dan perangkat lunak pemrosesan file pengaturan.' },
        intelhex: { name: 'File Contoh Intel HEX', description: 'Unduh file contoh Intel HEX gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemrograman mikrokontroler, analisis Intel HEX, dan perangkat lunak pengembangan sistem tertanam dan firmware.' },
        ipa: { name: 'File Contoh IPA', description: 'Unduh file contoh IPA iOS App Store Package gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat instalasi aplikasi iOS, analisis IPA, dan perangkat lunak pengembangan aplikasi seluler Apple.' },
        ipynb: { name: 'File Contoh IPYNB', description: 'Unduh file contoh IPYNB Jupyter Notebook gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat eksekusi notebook Jupyter, analisis IPYNB, dan perangkat lunak ilmu data dan analisis interaktif.' },
        jar: { name: 'File Contoh JAR', description: 'Unduh file contoh JAR Java Archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat eksekusi Java, ekstraksi JAR, dan perangkat lunak pengembangan Java dan deployment aplikasi.' },
        java: { name: 'File Contoh Java', description: 'Unduh file contoh Java source code gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat kompilasi Java, analisis kode Java, dan perangkat lunak pengembangan Java dan IDE.' },
        jks: { name: 'File Contoh JKS', description: 'Unduh file contoh JKS Java KeyStore gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat manajemen kunci Java, analisis JKS, dan perangkat lunak keamanan Java dan kriptografi.' },
        jpeg: { name: 'File Contoh JPEG', description: 'Unduh file contoh JPEG Joint Photographic Experts Group gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi gambar JPEG, pemrosesan gambar, dan perangkat lunak fotografi digital dan optimasi web.' },
        jsonl: { name: 'File Contoh JSONL', description: 'Unduh file contoh JSONL JSON Lines gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemrosesan data JSON, analisis JSONL, dan perangkat lunak pemrosesan data streaming dan big data.' },
        jsx: { name: 'File Contoh JSX', description: 'Unduh file contoh JSX React JavaScript XML gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat kompilasi React, analisis JSX, dan perangkat lunak pengembangan React dan frontend.' },
        jwt: { name: 'File Contoh JWT', description: 'Unduh file contoh JWT JSON Web Token gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat autentikasi JWT, analisis JWT, dan perangkat lunak keamanan web dan API.' },
        key: { name: 'File Contoh KEY', description: 'Unduh file contoh KEY kunci privat gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat manajemen kunci kriptografi, analisis KEY, dan perangkat lunak keamanan dan kriptografi.' },
        kml: { name: 'File Contoh KML', description: 'Unduh file contoh KML Keyhole Markup Language gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat visualisasi geografis, analisis KML, dan perangkat lunak pemetaan dan Google Earth.' },
        kt: { name: 'File Contoh Kotlin', description: 'Unduh file contoh Kotlin source code gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat kompilasi Kotlin, analisis kode Kotlin, dan perangkat lunak pengembangan Android dan multiplatform.' },
        las: { name: 'File Contoh LAS', description: 'Unduh file contoh LAS LiDAR point cloud data gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemrosesan awan titik, konversi LAS, dan perangkat lunak penginderaan jauh dan pemetaan 3D.' },
        log: { name: 'File Contoh LOG', description: 'Unduh file contoh LOG gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat analisis log, analisis log, dan perangkat lunak pemantauan sistem.' },
        lua: { name: 'File Contoh Lua', description: 'Unduh file contoh Lua source code gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat eksekusi Lua, analisis kode Lua, dan perangkat lunak pengembangan script dan video game.' },
        m3u: { name: 'File Contoh M3U', description: 'Unduh file contoh M3U playlist gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemutaran playlist, analisis M3U, dan perangkat lunak pemutaran multimedia dan streaming audio.' },
        m3u8: { name: 'File Contoh M3U8', description: 'Unduh file contoh M3U8 HLS playlist gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat streaming HLS, analisis M3U8, dan perangkat lunak streaming video dan siaran langsung.' },
        m4v: { name: 'File Contoh M4V', description: 'Unduh file contoh M4V MPEG-4 video gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi video MPEG-4, players M4V, dan perangkat lunak pemrosesan video Apple dan iTunes.' },
        makefile: { name: 'File Contoh Makefile', description: 'Unduh file contoh Makefile gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat build otomatis, analisis Makefile, dan perangkat lunak kompilasi dan pengembangan sistem.' },
        ma: { name: 'File Contoh MA', description: 'Unduh file contoh MA Maya ASCII gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi adegan Maya, analisis file MA, dan perangkat lunak animasi 3D.' },
        max: { name: 'File Contoh MAX', description: 'Unduh file contoh MAX 3ds Max gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi model 3D, penampil MAX, dan perangkat lunak pemodelan 3D profesional dan animasi.' },
        mb: { name: 'File Contoh MB', description: 'Unduh file contoh MB Maya Binary gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi adegan Maya, penampil MB, dan perangkat lunak pemodelan 3D dan animasi profesional.' },
        mbtiles: { name: 'File Contoh MBTiles', description: 'Unduh file contoh MBTiles MapBox tiles gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat visualisasi peta, ekstraksi MBTiles, dan perangkat lunak pemetaan web dan aplikasi seluler.' },
        mdx: { name: 'File Contoh MDX', description: 'Unduh file contoh MDX Markdown Extended gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemrosesan dokumentasi, analisis MDX, dan perangkat lunak pengembangan web dan generasi situs statis.' }
      }
    }
  },
  sv: {
    samples_page: {
      meta: {
        title: 'Gratis exempelfiler – Ladda ner testfiler | MorphyHub',
        description: 'Få gratis exempelfiler av bilder, dokument och arkiv för att testa MorphyHub-konverterare, komprimerare och visare.',
        keywords: 'exempelfiler, testfiler, ladda ner exempel, gratis testfiler, DOCX-exempel, filexempel, testfiler för konvertering'
      },
      schema: {
        name: 'Gratis exempelfiler att ladda ner och testa',
        description: 'Ladda ner gratis exempelfiler av olika typer — bilder, dokument, ljud, video och arkiv. Använd dem för testning, demo eller programvaruvalidering på vilken plattform som helst.'
      },
      hero: {
        title: 'Exempelfiler',
        description: 'Ladda ner gratis exempelfiler för testning. Flera filstorlekar tillgängliga för olika format för att testa dina konverterings- och bearbetningsverktyg.'
      },
      back_button: 'Tillbaka till startsidan',
      search: {
        placeholder: 'Sök exempelfiler... (t.ex. DOCX, JPG, PDF)',
        results: 'Hittade {{count}} exempelfil(er)',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'DOKUMENTEXEMPEL',
        data: 'DATAEXEMPEL',
        application: 'APPLIKATIONSEXEMPEL',
        design_3d: '3D & DESIGNEXEMPEL',
        image_video: 'BILD & VIDEOEXEMPEL',
        audio: 'LJUDEXEMPEL',
        archive: 'ARKIVEXEMPEL'
      },
      actions: { download: 'Ladda ner' },
      no_results: {
        title: 'Inga exempelfiler hittades',
        description: 'Försök söka efter något som "DOCX" eller "JPG"',
        clear: 'Rensa sökning'
      },
      features: {
        title: 'Varför välja våra exempelfiler?',
        items: [
          { title: 'Gratis och enkel åtkomst', description: 'Ladda ner exempelfiler direkt utan registrering eller betalning.' },
          { title: 'Flera storlekar', description: 'Välj bland olika filstorlekar (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) för omfattande testning.' },
          { title: 'Stort utbud', description: 'Tillgång till exempel i flera kategorier: dokument, bilder, ljud, video, arkiv och mer.' }
        ]
      },
      format_description_template: 'Ladda ner gratis {{format}} exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa {{purpose}}.',
      formats: {
        docx: { name: 'DOCX Exempelfiler', description: 'Ladda ner gratis DOCX exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa dokumentkonverteringsverktyg.' },
        doc: { name: 'DOC Exempelfiler', description: 'Ladda ner gratis DOC exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa dokumentkonverteringsverktyg.' },
        pdf: { name: 'PDF Exempelfiler', description: 'Ladda ner gratis PDF exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa dokumentkonverteringsverktyg.' },
        odp: { name: 'ODP Exempelfiler', description: 'Ladda ner gratis ODP OpenDocument Presentation exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa presentationskonverterings- och visningsverktyg.' },
        rtf: { name: 'RTF Exempelfiler', description: 'Ladda ner gratis RTF (Rich Text Format) exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa dokumentkonverterings- och visningsverktyg.' },
        epub: { name: 'EPUB Exempelfiler', description: 'Ladda ner gratis EPUB exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa e-bokläsare, EPUB-konvertering och digitala publiceringsverktyg.' },
        'invoice-pdf': { name: 'Faktura PDF Exempelfiler', description: 'Ladda ner gratis faktura PDF exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa PDF-fakturabearbetning, fakturaparsing och dokumenthanteringsverktyg.' },
        mobi: { name: 'MOBI Exempelfiler', description: 'Ladda ner gratis MOBI exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa MOBI e-bokkonvertering, MOBI-läsning och e-bokbearbetningsverktyg.' },
        csv: { name: 'CSV Exempelfiler', description: 'Ladda ner gratis CSV exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa CSV-konverterings- och databearbetningsverktyg.' },
        xls: { name: 'XLS Exempelfiler', description: 'Ladda ner gratis XLS exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa Excel-konverterings- och databearbetningsverktyg.' },
        xlsx: { name: 'XLSX Exempelfiler', description: 'Ladda ner gratis XLSX exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa Excel-konverterings- och databearbetningsverktyg.' },
        xml: { name: 'XML Exempelfiler', description: 'Ladda ner gratis XML exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa XML-parsing- och datakonverteringsverktyg.' },
        html: { name: 'HTML Exempelfiler', description: 'Ladda ner gratis HTML exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa HTML-parsing, webbutveckling och HTML-valideringsverktyg.' },
        ods: { name: 'ODS Exempelfiler', description: 'Ladda ner gratis ODS OpenDocument Spreadsheet exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa kalkylarkskonverterings- och databearbetningsverktyg.' },
        'ansible-yml': { name: 'Ansible YML Exempelfiler', description: 'Ladda ner gratis Ansible YML exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa YAML-parsing- och konfigurationshanteringsverktyg.' },
        'api-response-json': { name: 'API Response JSON Exempelfiler', description: 'Ladda ner gratis API response JSON exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa JSON-parsing- och API response-hanteringsverktyg.' },
        'arduino-ino': { name: 'Arduino INO Exempelfiler', description: 'Ladda ner gratis Arduino INO exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa Arduino-kodkompilerings- och syntaxkontrollverktyg.' },
        asc: { name: 'ASC Exempelfiler', description: 'Ladda ner gratis ASC (ASCII) exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa textfilbearbetnings- och ASCII-kodningsverktyg.' },
        bat: { name: 'BAT Exempelfiler', description: 'Ladda ner gratis BAT batch-skript exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa batch-skriptkörning och Windows-automatiseringsverktyg.' },
        bib: { name: 'BIB Exempelfiler', description: 'Ladda ner gratis BIB (BibTeX) bibliografi exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa bibliografihanterings- och citatbearbetningsverktyg.' },
        c: { name: 'C Exempelfiler', description: 'Ladda ner gratis C källkods exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa C-kodkompilerings- och syntaxkontrollverktyg.' },
        'can-log': { name: 'CAN Log Exempelfiler', description: 'Ladda ner gratis CAN log exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa CAN-busanalys- och logparsingverktyg.' },
        cmd: { name: 'CMD Exempelfiler', description: 'Ladda ner gratis CMD kommandoskript exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa kommandoskriptkörning och Windows-automatiseringsverktyg.' },
        conf: { name: 'CONF Exempelfiler', description: 'Ladda ner gratis CONF konfigurationsfil exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa konfigurationsfilparsing- och systeminställningsverktyg.' },
        'config-ini': { name: 'Config INI Exempelfiler', description: 'Ladda ner gratis Config INI INI konfigurationsfil exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa INI-filparsing- och konfigurationshanteringsverktyg.' },
        cpp: { name: 'C++ Exempelfiler', description: 'Ladda ner gratis C++ källkods exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa C++-kodkompilerings- och syntaxkontrollverktyg.' },
        crx: { name: 'CRX Exempelfiler', description: 'Ladda ner gratis CRX Chrome-tilläggspaket exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa Chrome-tilläggsinstallation, CRX-analys och webbläsartilläggsutvecklingsverktyg.' },
        cs: { name: 'C# Exempelfiler', description: 'Ladda ner gratis C# källkods exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa C#-kodkompilerings- och syntaxkontrollverktyg.' },
        gz: { name: 'GZ Exempelfiler', description: 'Ladda ner gratis GZ (gzip) komprimerade arkiv exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa gzip-dekomprimering, arkivextraktion och filkomprimeringsverktyg.' },
        h: { name: 'C Header Exempelfiler', description: 'Ladda ner gratis C header exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa C-kodkompilerings- och headerfilbearbetningsverktyg.' },
        hdr: { name: 'HDR Exempelfiler', description: 'Ladda ner gratis HDR (High Dynamic Range) bild exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa HDR-bildbearbetning, HDR-konvertering och högt dynamiskt intervallvisningsverktyg.' },
        heic: { name: 'HEIC Exempelfiler', description: 'Ladda ner gratis HEIC (High Efficiency Image Container) exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa HEIC-bildkonvertering, HEIC-visning och moderna bildformatsbearbetningsverktyg.' },
        heif: { name: 'HEIF Exempelfiler', description: 'Ladda ner gratis HEIF (High Efficiency Image Format) exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa HEIF-bildkonvertering, HEIF-visning och moderna bildformatsbearbetningsverktyg.' },
        hex: { name: 'HEX Exempelfiler', description: 'Ladda ner gratis HEX (hexadecimal) exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa hexadecimal filparsing, firmwareprogrammering och inbyggda systemutvecklingsverktyg.' },
        hpp: { name: 'C++ Header Exempelfiler', description: 'Ladda ner gratis C++ header exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa C++-kodkompilerings- och headerfilbearbetningsverktyg.' },
        css: { name: 'CSS Exempelfiler', description: 'Ladda ner gratis CSS exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa CSS-parsing, webbutveckling och CSS-valideringsverktyg.' },
        js: { name: 'JavaScript Exempelfiler', description: 'Ladda ner gratis JavaScript exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa JavaScript-parsing, webbutveckling och kodvalideringsverktyg.' },
        json: { name: 'JSON Exempelfiler', description: 'Ladda ner gratis JSON exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa JSON-parsing, databearbetning och schemavalideringsverktyg.' },
        md: { name: 'Markdown Exempelfiler', description: 'Ladda ner gratis Markdown exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa Markdown-bearbetnings-, dokumentkonverterings- och dokumentationsgenereringsverktyg.' },
        py: { name: 'Python Exempelfiler', description: 'Ladda ner gratis Python exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa Python-kodkompilerings- och syntaxkontrollverktyg.' },
        sh: { name: 'Shell Script Exempelfiler', description: 'Ladda ner gratis Shell Script exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa shell-skriptkörning och Unix/Linux-automatiseringsverktyg.' },
        sql: { name: 'SQL Exempelfiler', description: 'Ladda ner gratis SQL exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa SQL-parsing, databashantering och frågevalideringsverktyg.' },
        ts: { name: 'TypeScript Exempelfiler', description: 'Ladda ner gratis TypeScript exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa TypeScript-kodkompilerings- och typkontrollverktyg.' },
        yml: { name: 'YML Exempelfiler', description: 'Ladda ner gratis YML exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa YAML-parsing- och konfigurationshanteringsverktyg.' },
        jpg: { name: 'JPG Exempelfiler', description: 'Ladda ner gratis JPG exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa bildkonverteringsverktyg, bildbearbetning och webboptimering.' },
        png: { name: 'PNG Exempelfiler', description: 'Ladda ner gratis PNG exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa bildkonverteringsverktyg, bildbearbetning och webbgrafik.' },
        gif: { name: 'GIF Exempelfiler', description: 'Ladda ner gratis GIF exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa bildkonverteringsverktyg, bildbearbetning och webbanimationer.' },
        webp: { name: 'WebP Exempelfiler', description: 'Ladda ner gratis WebP exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa bildkonverteringsverktyg, bildbearbetning och modern webboptimering.' },
        svg: { name: 'SVG Exempelfiler', description: 'Ladda ner gratis SVG exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa vektorgrafikkonverteringsverktyg, SVG-bearbetning och webbdesign.' },
        bmp: { name: 'BMP Exempelfiler', description: 'Ladda ner gratis BMP exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa bildkonverteringsverktyg, bildbearbetning och formatkompatibilitet.' },
        ico: { name: 'ICO Exempelfiler', description: 'Ladda ner gratis ICO exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa ikonkonverteringsverktyg, ikonbearbetning och applikationsutveckling.' },
        tiff: { name: 'TIFF Exempelfiler', description: 'Ladda ner gratis TIFF exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa bildkonverteringsverktyg, bildbearbetning och professionell redigering.' },
        tif: { name: 'TIF Exempelfiler', description: 'Ladda ner gratis TIF exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa bildkonverteringsverktyg, bildbearbetning och professionell redigering.' },
        avif: { name: 'AVIF Exempelfiler', description: 'Ladda ner gratis AVIF exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa bildkonverteringsverktyg, bildbearbetning och nästa generations webboptimering.' },
        mp4: { name: 'MP4 Exempelfiler', description: 'Ladda ner gratis MP4 exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa videokonverteringsverktyg, videobearbetning och multimediauppspelning.' },
        avi: { name: 'AVI Exempelfiler', description: 'Ladda ner gratis AVI exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa videokonverteringsverktyg, videobearbetning och formatkompatibilitet.' },
        mov: { name: 'MOV Exempelfiler', description: 'Ladda ner gratis MOV exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa videokonverteringsverktyg, videobearbetning och videoredigering.' },
        wmv: { name: 'WMV Exempelfiler', description: 'Ladda ner gratis WMV exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa videokonverteringsverktyg, videobearbetning och Windows-formatkompatibilitet.' },
        flv: { name: 'FLV Exempelfiler', description: 'Ladda ner gratis FLV exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa videokonverteringsverktyg, videobearbetning och webbsströmning.' },
        webm: { name: 'WebM Exempelfiler', description: 'Ladda ner gratis WebM exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa videokonverteringsverktyg, videobearbetning och modern webbvideo.' },
        mkv: { name: 'MKV Exempelfiler', description: 'Ladda ner gratis MKV exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa videokonverteringsverktyg, videobearbetning och multimediabehållare.' },
        mp3: { name: 'MP3 Exempelfiler', description: 'Ladda ner gratis MP3 exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa ljudkonverteringsverktyg, ljudbearbetning och multimediauppspelning.' },
        wav: { name: 'WAV Exempelfiler', description: 'Ladda ner gratis WAV exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa ljudkonverteringsverktyg, ljudbearbetning och förlustfri ljud.' },
        flac: { name: 'FLAC Exempelfiler', description: 'Ladda ner gratis FLAC exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa ljudkonverteringsverktyg, ljudbearbetning och högkvalitativt ljud.' },
        ogg: { name: 'OGG Exempelfiler', description: 'Ladda ner gratis OGG exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa ljudkonverteringsverktyg, ljudbearbetning och öppet källkods ljud.' },
        wma: { name: 'WMA Exempelfiler', description: 'Ladda ner gratis WMA exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa ljudkonverteringsverktyg, ljudbearbetning och Windows-formatkompatibilitet.' },
        aac: { name: 'AAC Exempelfiler', description: 'Ladda ner gratis AAC exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa ljudkonverteringsverktyg, ljudbearbetning och högeffektivt ljud.' },
        m4a: { name: 'M4A Exempelfiler', description: 'Ladda ner gratis M4A exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa ljudkonverteringsverktyg, ljudbearbetning och MPEG-4-behållarljud.' },
        midi: { name: 'MIDI Exempelfiler', description: 'Ladda ner gratis MIDI exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa MIDI-bearbetningsverktyg, musiksyntes och musikproduktion.' },
        cue: { name: 'CUE Exempelfiler', description: 'Ladda ner gratis CUE exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa CUE-arkparsing, ljud-CD-bränning och CD-skapandeverktyg.' },
        zip: { name: 'ZIP Exempelfiler', description: 'Ladda ner gratis ZIP exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa arkivextraktionsverktyg, filkomprimering och filhantering.' },
        rar: { name: 'RAR Exempelfiler', description: 'Ladda ner gratis RAR exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa arkivextraktionsverktyg, filkomprimering och filhantering.' },
        '7z': { name: '7Z Exempelfiler', description: 'Ladda ner gratis 7Z exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa arkivkonverterings- och extraktionsverktyg.' },
        tar: { name: 'TAR Exempelfiler', description: 'Ladda ner gratis TAR exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa arkivextraktionsverktyg, filkomprimering och Unix/Linux-filhantering.' },
        ace: { name: 'ACE Exempelfiler', description: 'Ladda ner gratis ACE exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa arkivextraktionsverktyg, filkomprimering och filhantering.' },
        arj: { name: 'ARJ Exempelfiler', description: 'Ladda ner gratis ARJ exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa arkivextraktionsverktyg, filkomprimering och äldre filhantering.' },
        bz2: { name: 'BZ2 Exempelfiler', description: 'Ladda ner gratis BZ2 (bzip2) exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa bzip2-dekomprimering, arkivextraktion och filkomprimeringsverktyg.' },
        cab: { name: 'CAB Exempelfiler', description: 'Ladda ner gratis CAB exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa CAB-arkivextraktionsverktyg, Windows-programvaruinstallation och filhantering.' },
        cpio: { name: 'CPIO Exempelfiler', description: 'Ladda ner gratis CPIO exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa CPIO-arkivextraktionsverktyg, filkomprimering och Unix-filhantering.' },
        dmg: { name: 'DMG Exempelfiler', description: 'Ladda ner gratis DMG exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa diskavbildningsmonteringsverktyg, macOS-programvaruinstallation och filhantering.' },
        img: { name: 'IMG Exempelfiler', description: 'Ladda ner gratis IMG exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa diskavbildningsmonteringsverktyg, diskavbildningsskapande och filhantering.' },
        iso: { name: 'ISO Exempelfiler', description: 'Ladda ner gratis ISO exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa diskavbildningsmonteringsverktyg, CD/DVD-bränning och filhantering.' },
        kmz: { name: 'KMZ Exempelfiler', description: 'Ladda ner gratis KMZ komprimerade Keyhole Markup Language exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa KMZ-extraktion, geografisk databearbetning och Google Earth-integrationsverktyg.' },
        laz: { name: 'LAZ Exempelfiler', description: 'Ladda ner gratis LAZ komprimerade LiDAR-punktmoln data exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa LAZ-extraktion, punktmolnbearbetning och 3D-kartläggningsverktyg.' },
        lha: { name: 'LHA Exempelfiler', description: 'Ladda ner gratis LHA LHA-arkiv exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa LHA-extraktion, arkivdekomprimering och filarkiveringsverktyg.' },
        lzh: { name: 'LZH Exempelfiler', description: 'Ladda ner gratis LZH LZH-arkiv exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa LZH-extraktion, arkivdekomprimering och filarkiveringsverktyg.' },
        lzma: { name: 'LZMA Exempelfiler', description: 'Ladda ner gratis LZMA LZMA-komprimerade exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa LZMA-dekomprimering, arkivextraktion och filkomprimeringsverktyg.' }
      }
    }
  }
};

// Register translations
Object.entries(samplesPageResources).forEach(([locale, resources]) => {
  i18n.addResourceBundle(locale, 'translation', resources, true, true);
});

export default samplesPageResources;

