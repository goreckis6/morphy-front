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

// Helper function to generate format descriptions using template
const generateFormatDescription = (formatName: string, formatType: string, purpose: string, lang: string): string => {
  const templates: Record<string, string> = {
    id: `Unduh file sampel ${formatName} gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji ${purpose}.`,
    sv: `Ladda ner gratis ${formatName} exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa ${purpose}.`,
    es: `Descarga archivos de muestra ${formatName} gratis para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar ${purpose}.`,
    fr: `Téléchargez des fichiers d'exemple ${formatName} gratuits pour les tests. Plusieurs tailles de fichiers disponibles : 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester ${purpose}.`,
    it: `Scarica file di esempio ${formatName} gratuiti per i test. Dimensioni file multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare ${purpose}.`,
    nl: `Download gratis ${formatName} voorbeeldbestanden voor testen. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van ${purpose}.`,
    pt: `Baixe arquivos de amostra ${formatName} gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ${purpose}.`,
    vi: `Tải xuống các file mẫu ${formatName} miễn phí để kiểm thử. Nhiều kích thước file có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm thử ${purpose}.`,
    tr: `${formatName} örnek dosyalarını test için ücretsiz indirin. Birden fazla dosya boyutu mevcut: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. ${purpose} test etmek için mükemmel.`,
    ru: `Скачайте бесплатные образцы файлов ${formatName} для тестирования. Доступны несколько размеров файлов: 100 KB, 1 MB, 5 MB, 50 MB и 100 MB. Идеально для тестирования ${purpose}.`,
    ar: `قم بتنزيل ملفات عينة ${formatName} مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار ${purpose}.`,
    th: `ดาวน์โหลดไฟล์ตัวอย่าง ${formatName} ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดให้เลือก: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบ ${purpose}`,
    ja: `テスト用の無料${formatName}サンプルファイルをダウンロード。複数のファイルサイズを利用可能: 100 KB、1 MB、5 MB、50 MB、100 MB。${purpose}のテストに最適。`,
    zh: `下载免费的${formatName}示例文件用于测试。提供多种文件大小: 100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试${purpose}。`
  };
  return templates[lang] || templates['en'];
};

// Format type mappings for generating descriptions
const formatTypes: Record<string, { type: string; purpose: string }> = {
  docx: { type: 'DOCX', purpose: 'alat konversi dokumen' },
  doc: { type: 'DOC', purpose: 'alat konversi dokumen' },
  pdf: { type: 'PDF', purpose: 'alat konversi dokumen' },
  odp: { type: 'ODP', purpose: 'alat konversi dan penayangan presentasi' },
  rtf: { type: 'RTF', purpose: 'alat konversi dan penayangan dokumen' },
  epub: { type: 'EPUB', purpose: 'pembaca ebook, konversi EPUB, dan alat penerbitan digital' },
  'invoice-pdf': { type: 'Invoice PDF', purpose: 'pemrosesan faktur PDF, parsing faktur, dan alat manajemen dokumen' },
  mobi: { type: 'MOBI', purpose: 'konversi ebook MOBI, pembacaan MOBI, dan alat pemrosesan ebook' },
  csv: { type: 'CSV', purpose: 'alat konversi dan pemrosesan data' },
  xls: { type: 'XLS', purpose: 'alat konversi dan pemrosesan Excel' },
  xlsx: { type: 'XLSX', purpose: 'alat konversi dan pemrosesan Excel' },
  xml: { type: 'XML', purpose: 'alat parsing dan konversi data' },
  html: { type: 'HTML', purpose: 'parsing HTML, pengembangan web, dan alat validasi HTML' },
  ods: { type: 'ODS', purpose: 'alat konversi dan pemrosesan spreadsheet' }
};

const additionalLanguagesResources: Record<string, SamplesPageTranslations> = {
  id: {
    samples_page: {
      meta: {
        title: 'File Sampel Gratis - Unduh File Uji untuk Semua Format | MorphyHub',
        description: 'Unduh file sampel gratis untuk pengujian - gambar, dokumen, arsip, kode, dan banyak lagi. Beberapa ukuran (100 KB hingga 100 MB) tersedia. Sempurna untuk menguji konverter, kompresor, penampil, dan alat pengembangan. Unduh instan, tidak perlu registrasi.',
        keywords: 'file sampel, file uji, unduh sampel, file uji gratis, sampel DOCX, file sampel, file uji untuk konversi, gambar sampel, dokumen sampel, arsip sampel, file sampel gratis'
      },
      schema: {
        name: 'File Sampel Gratis untuk Unduh dan Pengujian',
        description: 'Unduh file sampel gratis dari berbagai jenis — gambar, dokumen, audio, video, dan arsip. Gunakan untuk pengujian, demo, atau validasi perangkat lunak di platform apa pun.'
      },
      hero: {
        title: 'File Sampel Gratis',
        description: 'Unduh file sampel gratis untuk pengujian di semua format. Beberapa ukuran file tersedia (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) untuk pengujian komprehensif konverter, kompresor, penampil, dan alat pengembangan. Unduh instan, tidak perlu registrasi.'
      },
      back_button: 'Kembali ke Beranda',
      search: {
        placeholder: 'Cari file sampel... (mis. DOCX, JPG, PDF)',
        results: 'Ditemukan {{count}} file sampel',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'SAMPEL DOKUMEN',
        data: 'SAMPEL DATA',
        application: 'SAMPEL APLIKASI',
        design_3d: 'SAMPEL 3D & DESAIN',
        image_video: 'SAMPEL GAMBAR & VIDEO',
        audio: 'SAMPEL AUDIO',
        archive: 'SAMPEL ARSIP'
      },
      actions: {
        download: 'Unduh'
      },
      no_results: {
        title: 'Tidak ada file sampel ditemukan',
        description: 'Coba cari sesuatu seperti "DOCX" atau "JPG"',
        clear: 'Hapus pencarian'
      },
      features: {
        title: 'Mengapa Memilih File Sampel Kami?',
        items: [
          {
            title: 'Gratis & Akses Mudah',
            description: 'Unduh file sampel secara instan tanpa registrasi atau pembayaran. Tidak ada batas, tidak ada biaya tersembunyi, sepenuhnya gratis.'
          },
          {
            title: 'Beberapa Ukuran',
            description: 'Pilih dari berbagai ukuran file (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) untuk pengujian komprehensif dari semua skenario pemrosesan file.'
          },
          {
            title: 'Beragam Luas',
            description: 'Akses sampel di berbagai kategori: dokumen, gambar, audio, video, arsip, file kode, dan banyak lagi. Sempurna untuk pengembang dan penguji.'
          },
          {
            title: 'Unduh Instan',
            description: 'Unduh file segera. Tidak ada penantian, tidak ada antrian. Dapatkan file uji Anda langsung.'
          },
          {
            title: 'Sempurna untuk Pengujian',
            description: 'Ideal untuk menguji konverter, kompresor, penampil, parser, dan alat pengembangan. Cakupan format file komprehensif.'
          }
        ]
      },
      format_description_template: 'Unduh file sampel {{format}} gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji {{purpose}}.',
      formats: {
        docx: { name: 'File Sampel DOCX', description: 'Unduh file sampel DOCX gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dokumen.' },
        doc: { name: 'File Sampel DOC', description: 'Unduh file sampel DOC gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dokumen.' },
        pdf: { name: 'File Sampel PDF', description: 'Unduh file sampel PDF gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dokumen.' },
        odp: { name: 'File Sampel ODP', description: 'Unduh file sampel ODP OpenDocument presentation gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan presentasi.' },
        rtf: { name: 'File Sampel RTF', description: 'Unduh file sampel RTF Rich Text Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan dokumen.' },
        epub: { name: 'File Sampel EPUB', description: 'Unduh file sampel EPUB ebook gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pembaca ebook, konversi EPUB, dan alat penerbitan digital.' },
        'invoice-pdf': { name: 'File Sampel Invoice PDF', description: 'Unduh file sampel Invoice PDF gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemrosesan faktur PDF, parsing faktur, dan alat manajemen dokumen.' },
        mobi: { name: 'File Sampel MOBI', description: 'Unduh file sampel MOBI ebook gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi ebook MOBI, pembacaan MOBI, dan alat pemrosesan ebook.' },
        csv: { name: 'File Sampel CSV', description: 'Unduh file sampel CSV data gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemrosesan data.' },
        xls: { name: 'File Sampel XLS', description: 'Unduh file sampel XLS Excel spreadsheet gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemrosesan Excel.' },
        xlsx: { name: 'File Sampel XLSX', description: 'Unduh file sampel XLSX Excel spreadsheet gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemrosesan Excel.' },
        xml: { name: 'File Sampel XML', description: 'Unduh file sampel XML markup gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat parsing dan konversi data.' },
        html: { name: 'File Sampel HTML', description: 'Unduh file sampel HTML HyperText Markup Language gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing HTML, pengembangan web, dan alat validasi HTML.' },
        ods: { name: 'File Sampel ODS', description: 'Unduh file sampel ODS OpenDocument spreadsheet gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemrosesan spreadsheet.' },
        'ansible-yml': { name: 'File Sampel Ansible YML', description: 'Unduh file sampel Ansible YML konfigurasi gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing YAML dan alat manajemen konfigurasi.' },
        'api-response-json': { name: 'File Sampel API Response JSON', description: 'Unduh file sampel API response JSON gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing JSON dan alat penanganan respons API.' },
        'arduino-ino': { name: 'File Sampel Arduino INO', description: 'Unduh file sampel Arduino INO kode gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji kompilasi kode Arduino dan alat pemeriksaan sintaks.' },
        asc: { name: 'File Sampel ASC', description: 'Unduh file sampel ASC ASCII text gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemrosesan file teks dan alat encoding ASCII.' },
        bat: { name: 'File Sampel BAT', description: 'Unduh file sampel BAT batch script gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji eksekusi script batch dan alat automasi Windows.' },
        bib: { name: 'File Sampel BIB', description: 'Unduh file sampel BIB BibTeX bibliography gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji manajemen bibliografi dan alat pemrosesan kutipan.' },
        c: { name: 'File Sampel C', description: 'Unduh file sampel C source code gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji kompilasi kode C dan alat pemeriksaan sintaks.' },
        'can-log': { name: 'File Sampel CAN Log', description: 'Unduh file sampel CAN log CAN bus gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji analisis CAN bus dan alat parsing log.' },
        cmd: { name: 'File Sampel CMD', description: 'Unduh file sampel CMD command script gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji eksekusi script perintah dan alat automasi Windows.' },
        conf: { name: 'File Sampel CONF', description: 'Unduh file sampel CONF konfigurasi gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing file konfigurasi dan alat setup sistem.' },
        'config-ini': { name: 'File Sampel Config INI', description: 'Unduh file sampel Config INI INI configuration gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing file INI dan alat manajemen konfigurasi.' },
        cpp: { name: 'File Sampel C++', description: 'Unduh file sampel C++ source code gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji kompilasi kode C++ dan alat pemeriksaan sintaks.' },
        crx: { name: 'File Sampel CRX', description: 'Unduh file sampel CRX Chrome extension package gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji instalasi ekstensi Chrome, analisis CRX, dan alat pengembangan ekstensi browser.' },
        cs: { name: 'File Sampel C#', description: 'Unduh file sampel C# source code gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji kompilasi kode C# dan alat pemeriksaan sintaks.' },
        gz: { name: 'File Sampel GZ', description: 'Unduh file sampel GZ gzip compressed archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji dekompresi gzip, ekstraksi arsip, dan alat kompresi file.' },
        h: { name: 'File Sampel C Header', description: 'Unduh file sampel C header header gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji kompilasi kode C dan alat pemrosesan file header.' },
        hdr: { name: 'File Sampel HDR', description: 'Unduh file sampel HDR High Dynamic Range image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemrosesan gambar HDR, konversi HDR, dan alat penayangan high dynamic range.' },
        heic: { name: 'File Sampel HEIC', description: 'Unduh file sampel HEIC High Efficiency Image Container gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi gambar HEIC, penayangan HEIC, dan alat pemrosesan format gambar modern.' },
        heif: { name: 'File Sampel HEIF', description: 'Unduh file sampel HEIF High Efficiency Image Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi gambar HEIF, penayangan HEIF, dan alat pemrosesan format gambar modern.' },
        hex: { name: 'File Sampel HEX', description: 'Unduh file sampel HEX hexadecimal gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing file hexadecimal, pemrograman firmware, dan alat pengembangan sistem embedded.' },
        hpp: { name: 'File Sampel C++ Header', description: 'Unduh file sampel C++ header header gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji kompilasi kode C++ dan alat pemrosesan file header.' },
        css: { name: 'File Sampel CSS', description: 'Unduh file sampel CSS Cascading Style Sheets gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing CSS dan alat styling.' },
        csr: { name: 'File Sampel CSR', description: 'Unduh file sampel CSR Certificate Signing Request gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji generasi sertifikat SSL dan alat parsing CSR.' },
        'customer-database-sql': { name: 'File Sampel Customer Database SQL', description: 'Unduh file sampel Customer Database SQL SQL database gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji impor database SQL dan alat parsing SQL.' },
        dbf: { name: 'File Sampel DBF', description: 'Unduh file sampel DBF database gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemrosesan database.' },
        dem: { name: 'File Sampel DEM', description: 'Unduh file sampel DEM Digital Elevation Model gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat pemetaan GIS dan analisis terrain.' },
        der: { name: 'File Sampel DER', description: 'Unduh file sampel DER DER certificate gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemrosesan sertifikat SSL dan alat parsing DER.' },
        dmp: { name: 'File Sampel DMP', description: 'Unduh file sampel DMP memory dump gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji analisis crash dump dan alat parsing memory dump.' },
        'docker-compose-yml': { name: 'File Sampel Docker Compose YML', description: 'Unduh file sampel Docker Compose YML Docker Compose configuration gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing Docker Compose dan alat orchestration container.' },
        dockerfile: { name: 'File Sampel Dockerfile', description: 'Unduh file sampel Dockerfile Dockerfile configuration gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pembuatan image Docker dan alat parsing Dockerfile.' },
        editorconfig: { name: 'File Sampel EditorConfig', description: 'Unduh file sampel EditorConfig konfigurasi gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing EditorConfig dan alat konfigurasi format kode.' },
        ini: { name: 'File Sampel INI', description: 'Unduh file sampel INI konfigurasi gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing file INI, manajemen konfigurasi, dan alat pemrosesan file pengaturan.' },
        intelhex: { name: 'File Sampel IntelHex', description: 'Unduh file sampel IntelHex Intel hexadecimal gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemrograman firmware, parsing IntelHex, dan alat pengembangan sistem embedded.' },
        ipynb: { name: 'File Sampel IPYNB', description: 'Unduh file sampel IPYNB Jupyter notebook gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemrosesan Jupyter notebook, parsing IPYNB, dan alat pengembangan data science.' },
        java: { name: 'File Sampel Java', description: 'Unduh file sampel Java Java source code gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji kompilasi kode Java, pemeriksaan sintaks Java, dan alat pengembangan Java.' },
        jks: { name: 'File Sampel JKS', description: 'Unduh file sampel JKS Java KeyStore gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji manajemen Java KeyStore, parsing JKS, dan alat penyimpanan sertifikat SSL.' },
        json: { name: 'File Sampel JSON', description: 'Unduh file sampel JSON JSON data gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing JSON, pemrosesan data, dan alat penanganan respons API.' },
        jsonl: { name: 'File Sampel JSONL', description: 'Unduh file sampel JSONL JSON Lines gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing JSONL, streaming data, dan alat pemrosesan big data.' },
        js: { name: 'File Sampel JS', description: 'Unduh file sampel JS JavaScript gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji eksekusi kode JavaScript, pemeriksaan sintaks JS, dan alat pengembangan web.' },
        jsx: { name: 'File Sampel JSX', description: 'Unduh file sampel JSX React JSX component gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji kompilasi komponen React, pemeriksaan sintaks JSX, dan alat pengembangan frontend.' },
        jwt: { name: 'File Sampel JWT', description: 'Unduh file sampel JWT JSON Web Token gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing token JWT, autentikasi, dan alat keamanan API.' },
        key: { name: 'File Sampel KEY', description: 'Unduh file sampel KEY private key gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji manajemen sertifikat SSL, parsing key, dan alat penyimpanan kunci kriptografi.' },
        kml: { name: 'File Sampel KML', description: 'Unduh file sampel KML Keyhole Markup Language gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing KML, pemrosesan data geografis, dan alat integrasi Google Earth.' },
        kt: { name: 'File Sampel KT', description: 'Unduh file sampel KT Kotlin code gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji kompilasi Kotlin, pemeriksaan sintaks KT, dan alat pengembangan Android.' },
        log: { name: 'File Sampel LOG', description: 'Unduh file sampel LOG log gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing log, analisis log, dan alat monitoring sistem.' },
        lua: { name: 'File Sampel LUA', description: 'Unduh file sampel LUA Lua script gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji eksekusi script Lua, pemeriksaan sintaks LUA, dan alat scripting embedded.' },
        m3u: { name: 'File Sampel M3U', description: 'Unduh file sampel M3U M3U playlist gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing playlist M3U, kompatibilitas media player, dan alat streaming audio.' },
        m3u8: { name: 'File Sampel M3U8', description: 'Unduh file sampel M3U8 M3U8 HLS playlist gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing playlist M3U8, streaming HLS, dan alat kompatibilitas video player.' },
        makefile: { name: 'File Sampel Makefile', description: 'Unduh file sampel Makefile build configuration gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing Makefile, automasi build system, dan alat kompilasi perangkat lunak.' },
        mbtiles: { name: 'File Sampel MBTiles', description: 'Unduh file sampel MBTiles map database gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing MBTiles, ekstraksi map tile, dan alat pemrosesan data geografis.' },
        md: { name: 'File Sampel MD', description: 'Unduh file sampel MD Markdown documentation gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing Markdown, konversi MD, dan alat pemrosesan dokumentasi.' },
        mdx: { name: 'File Sampel MDX', description: 'Unduh file sampel MDX MDX component documentation gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing MDX, dokumentasi komponen React, dan alat generasi dokumentasi.' },
        apk: { name: 'File Sampel APK', description: 'Unduh file sampel APK Android application package gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji instalasi aplikasi Android dan alat analisis APK.' },
        appimage: { name: 'File Sampel AppImage', description: 'Unduh file sampel AppImage Linux application package gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji instalasi aplikasi Linux dan alat analisis AppImage.' },
        elf: { name: 'File Sampel ELF', description: 'Unduh file sampel ELF Executable and Linkable Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji analisis file ELF, parsing binary, dan alat pemrosesan file executable.' },
        exe: { name: 'File Sampel EXE', description: 'Unduh file sampel EXE Windows executable gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji analisis executable Windows, parsing binary, dan alat instalasi aplikasi.' },
        ipa: { name: 'File Sampel IPA', description: 'Unduh file sampel IPA iOS application package gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji instalasi aplikasi iOS, analisis IPA, dan alat pengembangan aplikasi mobile.' },
        jar: { name: 'File Sampel JAR', description: 'Unduh file sampel JAR Java archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji eksekusi aplikasi Java, ekstraksi JAR, dan alat pengembangan Java.' },
        '3ds': { name: 'File Sampel 3DS', description: 'Unduh file sampel 3DS 3D model gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan model 3D.' },
        '3mf': { name: 'File Sampel 3MF', description: 'Unduh file sampel 3MF 3D printing gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan 3D printing.' },
        ai: { name: 'File Sampel AI', description: 'Unduh file sampel AI Adobe Illustrator vector graphics gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan vector graphics.' },
        ase: { name: 'File Sampel ASE', description: 'Unduh file sampel ASE Adobe Swatch Exchange color palette gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan color palette.' },
        'animation-fbx': { name: 'File Sampel Animation FBX', description: 'Unduh file sampel animation FBX 3D animation gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan 3D animation.' },
        assetbundle: { name: 'File Sampel AssetBundle', description: 'Unduh file sampel AssetBundle Unity game asset gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemuatan asset Unity dan alat pengembangan game.' },
        blend: { name: 'File Sampel BLEND', description: 'Unduh file sampel BLEND Blender 3D model gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan model 3D.' },
        bvh: { name: 'File Sampel BVH', description: 'Unduh file sampel BVH motion capture gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemrosesan motion capture dan alat konversi animasi.' },
        dwg: { name: 'File Sampel DWG', description: 'Unduh file sampel DWG AutoCAD drawing gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji perangkat lunak CAD, konversi AutoCAD, dan alat pemrosesan file drawing.' },
        dxf: { name: 'File Sampel DXF', description: 'Unduh file sampel DXF Drawing Exchange Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji perangkat lunak CAD, konversi DXF, dan alat pertukaran file drawing.' },
        ifc: { name: 'File Sampel IFC', description: 'Unduh file sampel IFC Industry Foundation Classes gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji perangkat lunak BIM, konversi IFC, dan alat building information modeling.' },
        iges: { name: 'File Sampel IGES', description: 'Unduh file sampel IGES Initial Graphics Exchange Specification gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji perangkat lunak CAD, konversi IGES, dan alat pertukaran model 3D.' },
        igs: { name: 'File Sampel IGS', description: 'Unduh file sampel IGS Initial Graphics Exchange Specification gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji perangkat lunak CAD, konversi IGS, dan alat pertukaran model 3D.' },
        las: { name: 'File Sampel LAS', description: 'Unduh file sampel LAS LiDAR point cloud data gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji parsing LAS, pemrosesan point cloud, dan alat pemetaan 3D.' },
        ma: { name: 'File Sampel MA', description: 'Unduh file sampel MA Maya ASCII scene gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi scene Maya, parsing file MA, dan alat animasi 3D.' },
        max: { name: 'File Sampel MAX', description: 'Unduh file sampel MAX 3ds Max scene gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi scene 3ds Max, parsing file MAX, dan alat modeling 3D.' },
        mb: { name: 'File Sampel MB', description: 'Unduh file sampel MB Maya Binary scene gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi scene Maya, parsing file MB, dan alat animasi 3D.' },
        indd: { name: 'File Sampel INDD', description: 'Unduh file sampel INDD Adobe InDesign document gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi dokumen InDesign, penayangan INDD, dan alat desktop publishing.' },
        'animated-gif': { name: 'File Sampel Animated GIF', description: 'Unduh file sampel animated GIF gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan animasi GIF.' },
        apng: { name: 'File Sampel APNG', description: 'Unduh file sampel APNG animated PNG gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan animated PNG.' },
        avif: { name: 'File Sampel AVIF', description: 'Unduh file sampel AVIF image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan AVIF.' },
        bmp: { name: 'File Sampel BMP', description: 'Unduh file sampel BMP bitmap image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan bitmap image.' },
        'barcode-svg': { name: 'File Sampel Barcode SVG', description: 'Unduh file sampel barcode SVG vector graphics gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemindaian barcode dan alat konversi SVG.' },
        avi: { name: 'File Sampel AVI', description: 'Unduh file sampel AVI video gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemutaran video.' },
        '3gp': { name: 'File Sampel 3GP', description: 'Unduh file sampel 3GP mobile video gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemutaran video.' },
        dav: { name: 'File Sampel DAV', description: 'Unduh file sampel DAV video gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemutaran video.' },
        dds: { name: 'File Sampel DDS', description: 'Unduh file sampel DDS DirectDraw Surface image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan penayangan texture image.' },
        dng: { name: 'File Sampel DNG', description: 'Unduh file sampel DNG Digital Negative raw image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemrosesan raw image dan alat konversi DNG.' },
        eps: { name: 'File Sampel EPS', description: 'Unduh file sampel EPS Encapsulated PostScript gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi vector graphics, penayangan EPS, dan pemrosesan PostScript.' },
        exr: { name: 'File Sampel EXR', description: 'Unduh file sampel EXR OpenEXR high dynamic range image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemrosesan gambar HDR, konversi EXR, dan alat penayangan high dynamic range.' },
        icns: { name: 'File Sampel ICNS', description: 'Unduh file sampel ICNS macOS icon gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi ikon macOS, penayangan ICNS, dan alat desain ikon.' },
        ico: { name: 'File Sampel ICO', description: 'Unduh file sampel ICO Windows icon gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi ikon Windows, penayangan ICO, dan alat desain ikon.' },
        jpeg: { name: 'File Sampel JPEG', description: 'Unduh file sampel JPEG JPEG image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi gambar JPEG, kompresi JPEG, dan alat pemrosesan gambar.' },
        jpg: { name: 'File Sampel JPG', description: 'Unduh file sampel JPG JPG image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi gambar JPG, kompresi JPG, dan alat pemrosesan gambar.' },
        m4v: { name: 'File Sampel M4V', description: 'Unduh file sampel M4V M4V video gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi video M4V, pemutaran M4V, dan alat pemrosesan video.' },
        mkv: { name: 'File Sampel MKV', description: 'Unduh file sampel MKV Matroska video gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi video MKV, pemutaran MKV, dan alat pemrosesan video.' },
        aac: { name: 'File Sampel AAC', description: 'Unduh file sampel AAC Advanced Audio Coding gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemutaran audio.' },
        ac3: { name: 'File Sampel AC3', description: 'Unduh file sampel AC3 Dolby Digital audio gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemutaran audio.' },
        aif: { name: 'File Sampel AIF', description: 'Unduh file sampel AIF Audio Interchange File Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemutaran audio.' },
        aiff: { name: 'File Sampel AIFF', description: 'Unduh file sampel AIFF Audio Interchange File Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemutaran audio.' },
        amr: { name: 'File Sampel AMR', description: 'Unduh file sampel AMR Adaptive Multi-Rate audio gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemutaran audio.' },
        caf: { name: 'File Sampel CAF', description: 'Unduh file sampel CAF Core Audio Format gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi dan pemutaran audio.' },
        cue: { name: 'File Sampel CUE', description: 'Unduh file sampel CUE CUE sheet gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pembakaran audio CD dan alat parsing CUE sheet.' },
        m4a: { name: 'File Sampel M4A', description: 'Unduh file sampel M4A M4A audio gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji konversi audio M4A, pemutaran M4A, dan alat pemrosesan audio.' },
        midi: { name: 'File Sampel MIDI', description: 'Unduh file sampel MIDI MIDI music gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji pemutaran MIDI, konversi MIDI, dan alat sequencing musik.' },
        ace: { name: 'File Sampel ACE', description: 'Unduh file sampel ACE archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip dan kompresi.' },
        arj: { name: 'File Sampel ARJ', description: 'Unduh file sampel ARJ archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip dan kompresi.' },
        bz2: { name: 'File Sampel BZ2', description: 'Unduh file sampel BZ2 bzip2 compressed archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat dekompresi arsip dan kompresi.' },
        cab: { name: 'File Sampel CAB', description: 'Unduh file sampel CAB Windows cabinet archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip dan kompresi.' },
        cpio: { name: 'File Sampel CPIO', description: 'Unduh file sampel CPIO archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip dan kompresi.' },
        zip: { name: 'File Sampel ZIP', description: 'Unduh file sampel ZIP archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat ekstraksi arsip dan kompresi.' },
        dmg: { name: 'File Sampel DMG', description: 'Unduh file sampel DMG macOS disk image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji mounting disk image dan alat ekstraksi DMG.' },
        img: { name: 'File Sampel IMG', description: 'Unduh file sampel IMG disk image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji mounting disk image, ekstraksi IMG, dan alat pemrosesan disk image.' },
        iso: { name: 'File Sampel ISO', description: 'Unduh file sampel ISO ISO disk image gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji mounting disk image ISO, ekstraksi ISO, dan alat pemrosesan disk image.' },
        kmz: { name: 'File Sampel KMZ', description: 'Unduh file sampel KMZ compressed Keyhole Markup Language gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji ekstraksi KMZ, pemrosesan data geografis, dan alat integrasi Google Earth.' },
        laz: { name: 'File Sampel LAZ', description: 'Unduh file sampel LAZ compressed LiDAR point cloud data gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji ekstraksi LAZ, pemrosesan point cloud, dan alat pemetaan 3D.' },
        lha: { name: 'File Sampel LHA', description: 'Unduh file sampel LHA LHA archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji ekstraksi LHA, dekompresi arsip, dan alat arsip file.' },
        lzh: { name: 'File Sampel LZH', description: 'Unduh file sampel LZH LZH archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji ekstraksi LZH, dekompresi arsip, dan alat arsip file.' },
        lzma: { name: 'File Sampel LZMA', description: 'Unduh file sampel LZMA LZMA compressed gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji dekompresi LZMA, ekstraksi arsip, dan alat kompresi file.' },
        '7z': { name: 'File Sampel 7Z', description: 'Unduh file sampel 7Z archive gratis untuk pengujian. Beberapa ukuran file tersedia: 100 KB, 1 MB, 5 MB, 50 MB, dan 100 MB. Sempurna untuk menguji alat konversi arsip dan ekstraksi.' }
      }
    }
  },
  sv: {
    samples_page: {
      meta: {
        title: 'Gratis Exempelfiler - Ladda Ner Testfiler för Alla Format | MorphyHub',
        description: 'Ladda ner gratis exempelfiler för testning - bilder, dokument, arkiv, kod och mer. Flera storlekar (100 KB till 100 MB) tillgängliga. Perfekt för att testa konverterare, kompressorer, visare och utvecklingsverktyg. Omedelbar nedladdning, ingen registrering krävs.',
        keywords: 'exempelfiler, testfiler, ladda ner exempel, gratis testfiler, DOCX exempel, filexempel, testfiler för konvertering, exempelbilder, exempeldokument, exempelarkiv, gratis filexempel'
      },
      schema: {
        name: 'Gratis Exempelfiler för Nedladdning och Testning',
        description: 'Ladda ner gratis exempelfiler av olika typer — bilder, dokument, ljud, video och arkiv. Använd dem för testning, demos eller mjukvaruvalidering på vilken plattform som helst.'
      },
      hero: {
        title: 'Gratis Exempelfiler',
        description: 'Ladda ner gratis exempelfiler för testning i alla format. Flera filstorlekar tillgängliga (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) för omfattande testning av konverterare, kompressorer, visare och utvecklingsverktyg. Omedelbar nedladdning, ingen registrering krävs.'
      },
      back_button: 'Tillbaka till Startsidan',
      search: {
        placeholder: 'Sök exempelfiler... (t.ex. DOCX, JPG, PDF)',
        results: 'Hittade {{count}} exempelfil(er)',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'DOKUMENTEXEMPEL',
        data: 'DATAEXEMPEL',
        application: 'APPLICATIONSEXEMPEL',
        design_3d: '3D & DESIGNAEXEMPEL',
        image_video: 'BILD & VIDEOEXEMPEL',
        audio: 'AUDIOEXEMPEL',
        archive: 'ARKIVEXEMPEL'
      },
      actions: {
        download: 'Ladda Ner'
      },
      no_results: {
        title: 'Inga exempelfiler hittades',
        description: 'Försök söka efter något som "DOCX" eller "JPG"',
        clear: 'Rensa sökning'
      },
      features: {
        title: 'Varför Välja Våra Exempelfiler?',
        items: [
          {
            title: 'Gratis & Enkel Åtkomst',
            description: 'Ladda ner exempelfiler direkt utan registrering eller betalning. Inga gränser, inga dolda avgifter, helt gratis.'
          },
          {
            title: 'Flera Storlekar',
            description: 'Välj från olika filstorlekar (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) för omfattande testning av alla filbehandlingsscenarier.'
          },
          {
            title: 'Stort Utbud',
            description: 'Tillgång till exempel i flera kategorier: dokument, bilder, ljud, video, arkiv, kodfiler och mer. Perfekt för utvecklare och testare.'
          },
          {
            title: 'Omedelbar Nedladdning',
            description: 'Ladda ner filer direkt. Ingen väntan, inga köer. Få dina testfiler direkt.'
          },
          {
            title: 'Perfekt för Testning',
            description: 'Ideal för att testa konverterare, kompressorer, visare, parsers och utvecklingsverktyg. Omfattande filformatstöd.'
          }
        ]
      },
      format_description_template: 'Ladda ner gratis {{format}} exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa {{purpose}}.',
      formats: {}
    }
  },
  es: {
    samples_page: {
      meta: {
        title: 'Archivos de Muestra Gratis - Descarga Archivos de Prueba para Todos los Formatos | MorphyHub',
        description: 'Descarga archivos de muestra gratis para pruebas - imágenes, documentos, archivos, código y más. Múltiples tamaños (100 KB a 100 MB) disponibles. Perfecto para probar convertidores, compresores, visores y herramientas de desarrollo. Descarga instantánea, sin registro requerido.',
        keywords: 'archivos de muestra, archivos de prueba, descargar muestras, archivos de prueba gratis, muestras DOCX, archivos de muestra, archivos de prueba para conversión, imágenes de muestra, documentos de muestra, archivos de muestra, archivos de muestra gratis'
      },
      schema: {
        name: 'Archivos de Muestra Gratis para Descargar y Probar',
        description: 'Descarga archivos de muestra gratis de varios tipos — imágenes, documentos, audio, video y archivos. Úsalos para pruebas, demos o validación de software en cualquier plataforma.'
      },
      hero: {
        title: 'Archivos de Muestra Gratis',
        description: 'Descarga archivos de muestra gratis para pruebas en todos los formatos. Múltiples tamaños de archivo disponibles (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) para pruebas completas de convertidores, compresores, visores y herramientas de desarrollo. Descarga instantánea, sin registro requerido.'
      },
      back_button: 'Volver al Inicio',
      search: {
        placeholder: 'Buscar archivos de muestra... (ej. DOCX, JPG, PDF)',
        results: 'Se encontró {{count}} archivo(s) de muestra',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'MUESTRAS DE DOCUMENTOS',
        data: 'MUESTRAS DE DATOS',
        application: 'MUESTRAS DE APLICACIONES',
        design_3d: 'MUESTRAS 3D & DISEÑO',
        image_video: 'MUESTRAS DE IMÁGENES & VIDEO',
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
        title: '¿Por Qué Elegir Nuestros Archivos de Muestra?',
        items: [
          {
            title: 'Gratis & Fácil Acceso',
            description: 'Descarga archivos de muestra instantáneamente sin registro o pago. Sin límites, sin tarifas ocultas, completamente gratis.'
          },
          {
            title: 'Múltiples Tamaños',
            description: 'Elige de varios tamaños de archivo (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) para pruebas completas de todos los escenarios de procesamiento de archivos.'
          },
          {
            title: 'Gran Variedad',
            description: 'Accede a muestras en múltiples categorías: documentos, imágenes, audio, video, archivos, archivos de código y más. Perfecto para desarrolladores y probadores.'
          },
          {
            title: 'Descarga Instantánea',
            description: 'Descarga archivos inmediatamente. Sin esperas, sin colas. Obtén tus archivos de prueba ahora mismo.'
          },
          {
            title: 'Perfecto para Pruebas',
            description: 'Ideal para probar convertidores, compresores, visores, parsers y herramientas de desarrollo. Cobertura completa de formatos de archivo.'
          }
        ]
      },
      format_description_template: 'Descarga archivos de muestra {{format}} gratis para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar {{purpose}}.',
      formats: {}
    }
  },
  fr: {
    samples_page: {
      meta: {
        title: 'Fichiers d\'Exemple Gratuits - Télécharger des Fichiers de Test pour Tous les Formats | MorphyHub',
        description: 'Téléchargez des fichiers d\'exemple gratuits pour les tests - images, documents, archives, code et plus. Plusieurs tailles (100 KB à 100 MB) disponibles. Parfait pour tester les convertisseurs, compresseurs, visionneuses et outils de développement. Téléchargement instantané, aucune inscription requise.',
        keywords: 'fichiers d\'exemple, fichiers de test, télécharger des exemples, fichiers de test gratuits, exemples DOCX, fichiers d\'exemple, fichiers de test pour conversion, images d\'exemple, documents d\'exemple, archives d\'exemple, fichiers d\'exemple gratuits'
      },
      schema: {
        name: 'Fichiers d\'Exemple Gratuits à Télécharger et Tester',
        description: 'Téléchargez des fichiers d\'exemple gratuits de différents types — images, documents, audio, vidéo et archives. Utilisez-les pour les tests, démos ou validation de logiciels sur n\'importe quelle plateforme.'
      },
      hero: {
        title: 'Fichiers d\'Exemple Gratuits',
        description: 'Téléchargez des fichiers d\'exemple gratuits pour les tests dans tous les formats. Plusieurs tailles de fichiers disponibles (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) pour des tests complets de convertisseurs, compresseurs, visionneuses et outils de développement. Téléchargement instantané, aucune inscription requise.'
      },
      back_button: 'Retour à l\'Accueil',
      search: {
        placeholder: 'Rechercher des fichiers d\'exemple... (ex. DOCX, JPG, PDF)',
        results: '{{count}} fichier(s) d\'exemple trouvé(s)',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'EXEMPLES DE DOCUMENTS',
        data: 'EXEMPLES DE DONNÉES',
        application: 'EXEMPLES D\'APPLICATIONS',
        design_3d: 'EXEMPLES 3D & DESIGN',
        image_video: 'EXEMPLES D\'IMAGES & VIDÉO',
        audio: 'EXEMPLES AUDIO',
        archive: 'EXEMPLES D\'ARCHIVES'
      },
      actions: {
        download: 'Télécharger'
      },
      no_results: {
        title: 'Aucun fichier d\'exemple trouvé',
        description: 'Essayez de rechercher quelque chose comme "DOCX" ou "JPG"',
        clear: 'Effacer la recherche'
      },
      features: {
        title: 'Pourquoi Choisir Nos Fichiers d\'Exemple?',
        items: [
          {
            title: 'Gratuit & Accès Facile',
            description: 'Téléchargez des fichiers d\'exemple instantanément sans inscription ou paiement. Aucune limite, aucun frais caché, entièrement gratuit.'
          },
          {
            title: 'Plusieurs Tailles',
            description: 'Choisissez parmi plusieurs tailles de fichiers (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) pour des tests complets de tous les scénarios de traitement de fichiers.'
          },
          {
            title: 'Grande Variété',
            description: 'Accédez à des exemples dans plusieurs catégories: documents, images, audio, vidéo, archives, fichiers de code et plus. Parfait pour les développeurs et testeurs.'
          },
          {
            title: 'Téléchargement Instantané',
            description: 'Téléchargez les fichiers immédiatement. Pas d\'attente, pas de files d\'attente. Obtenez vos fichiers de test tout de suite.'
          },
          {
            title: 'Parfait pour les Tests',
            description: 'Idéal pour tester les convertisseurs, compresseurs, visionneuses, analyseurs et outils de développement. Couverture complète des formats de fichiers.'
          }
        ]
      },
      format_description_template: 'Téléchargez des fichiers d\'exemple {{format}} gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester {{purpose}}.',
      formats: {}
    }
  },
  it: {
    samples_page: {
      meta: {
        title: 'File di Esempio Gratis - Scarica File di Test per Tutti i Formati | MorphyHub',
        description: 'Scarica file di esempio gratuiti per i test - immagini, documenti, archivi, codice e altro. Dimensioni multiple (100 KB a 100 MB) disponibili. Perfetto per testare convertitori, compressori, visualizzatori e strumenti di sviluppo. Download istantaneo, nessuna registrazione richiesta.',
        keywords: 'file di esempio, file di test, scarica esempi, file di test gratuiti, esempi DOCX, file di esempio, file di test per conversione, immagini di esempio, documenti di esempio, archivi di esempio, file di esempio gratuiti'
      },
      schema: {
        name: 'File di Esempio Gratuiti da Scaricare e Testare',
        description: 'Scarica file di esempio gratuiti di vari tipi — immagini, documenti, audio, video e archivi. Usali per test, demo o validazione software su qualsiasi piattaforma.'
      },
      hero: {
        title: 'File di Esempio Gratuiti',
        description: 'Scarica file di esempio gratuiti per i test in tutti i formati. Dimensioni multiple disponibili (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) per test completi di convertitori, compressori, visualizzatori e strumenti di sviluppo. Download istantaneo, nessuna registrazione richiesta.'
      },
      back_button: 'Torna alla Home',
      search: {
        placeholder: 'Cerca file di esempio... (es. DOCX, JPG, PDF)',
        results: 'Trovato {{count}} file/i di esempio',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'ESEMPI DI DOCUMENTI',
        data: 'ESEMPI DI DATI',
        application: 'ESEMPI DI APPLICAZIONI',
        design_3d: 'ESEMPI 3D & DESIGN',
        image_video: 'ESEMPI DI IMMAGINI & VIDEO',
        audio: 'ESEMPI AUDIO',
        archive: 'ESEMPI DI ARCHIVI'
      },
      actions: {
        download: 'Scarica'
      },
      no_results: {
        title: 'Nessun file di esempio trovato',
        description: 'Prova a cercare qualcosa come "DOCX" o "JPG"',
        clear: 'Cancella ricerca'
      },
      features: {
        title: 'Perché Scegliere i Nostri File di Esempio?',
        items: [
          {
            title: 'Gratuito & Accesso Facile',
            description: 'Scarica file di esempio istantaneamente senza registrazione o pagamento. Nessun limite, nessun costo nascosto, completamente gratuito.'
          },
          {
            title: 'Dimensioni Multiple',
            description: 'Scegli da varie dimensioni di file (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) per test completi di tutti gli scenari di elaborazione file.'
          },
          {
            title: 'Grande Varietà',
            description: 'Accedi a esempi in più categorie: documenti, immagini, audio, video, archivi, file di codice e altro. Perfetto per sviluppatori e tester.'
          },
          {
            title: 'Download Istantaneo',
            description: 'Scarica file immediatamente. Nessuna attesa, nessuna coda. Ottieni i tuoi file di test subito.'
          },
          {
            title: 'Perfetto per i Test',
            description: 'Ideale per testare convertitori, compressori, visualizzatori, parser e strumenti di sviluppo. Copertura completa dei formati file.'
          }
        ]
      },
      format_description_template: 'Scarica file di esempio {{format}} gratuiti per i test. Dimensioni multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare {{purpose}}.',
      formats: {}
    }
  },
  nl: {
    samples_page: {
      meta: {
        title: 'Gratis Voorbeeldbestanden - Download Testbestanden voor Alle Formaten | MorphyHub',
        description: 'Download gratis voorbeeldbestanden voor testen - afbeeldingen, documenten, archieven, code en meer. Meerdere groottes (100 KB tot 100 MB) beschikbaar. Perfect voor het testen van converters, compressors, viewers en ontwikkelingshulpmiddelen. Directe download, geen registratie vereist.',
        keywords: 'voorbeeldbestanden, testbestanden, download voorbeelden, gratis testbestanden, DOCX voorbeelden, bestandsvoorbeeld, testbestanden voor conversie, voorbeeldafbeeldingen, voorbeelddocumenten, voorbeeldarchieven, gratis bestandsvoorbeeld'
      },
      schema: {
        name: 'Gratis Voorbeeldbestanden om te Downloaden en Testen',
        description: 'Download gratis voorbeeldbestanden van verschillende soorten — afbeeldingen, documenten, audio, video en archieven. Gebruik ze voor testen, demo\'s of softwarevalidatie op elk platform.'
      },
      hero: {
        title: 'Gratis Voorbeeldbestanden',
        description: 'Download gratis voorbeeldbestanden voor testen in alle formaten. Meerdere bestandsgroottes beschikbaar (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) voor uitgebreide tests van converters, compressors, viewers en ontwikkelingshulpmiddelen. Directe download, geen registratie vereist.'
      },
      back_button: 'Terug naar Startpagina',
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
      actions: {
        download: 'Downloaden'
      },
      no_results: {
        title: 'Geen voorbeeldbestanden gevonden',
        description: 'Probeer te zoeken naar iets zoals "DOCX" of "JPG"',
        clear: 'Zoekopdracht wissen'
      },
      features: {
        title: 'Waarom Onze Voorbeeldbestanden Kiezen?',
        items: [
          {
            title: 'Gratis & Gemakkelijk Toegankelijk',
            description: 'Download voorbeeldbestanden direct zonder registratie of betaling. Geen limieten, geen verborgen kosten, volledig gratis.'
          },
          {
            title: 'Meerdere Groottes',
            description: 'Kies uit verschillende bestandsgroottes (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) voor uitgebreide tests van alle bestandsverwerkingsscenario\'s.'
          },
          {
            title: 'Grote Variëteit',
            description: 'Toegang tot voorbeelden in meerdere categorieën: documenten, afbeeldingen, audio, video, archieven, codebestanden en meer. Perfect voor ontwikkelaars en testers.'
          },
          {
            title: 'Directe Download',
            description: 'Download bestanden direct. Geen wachten, geen wachtrijen. Krijg uw testbestanden direct.'
          },
          {
            title: 'Perfect voor Testen',
            description: 'Ideaal voor het testen van converters, compressors, viewers, parsers en ontwikkelingshulpmiddelen. Uitgebreide bestandsformaatondersteuning.'
          }
        ]
      },
      format_description_template: 'Download gratis {{format}} voorbeeldbestanden voor testen. Meerdere bestandsgroottes beschikbaar: 100 KB, 1 MB, 5 MB, 50 MB en 100 MB. Perfect voor het testen van {{purpose}}.',
      formats: {}
    }
  },
  pt: {
    samples_page: {
      meta: {
        title: 'Arquivos de Amostra Grátis - Baixe Arquivos de Teste para Todos os Formatos | MorphyHub',
        description: 'Baixe arquivos de amostra grátis para testes - imagens, documentos, arquivos, código e mais. Múltiplos tamanhos (100 KB a 100 MB) disponíveis. Perfeito para testar conversores, compressores, visualizadores e ferramentas de desenvolvimento. Download instantâneo, sem registro necessário.',
        keywords: 'arquivos de amostra, arquivos de teste, baixar amostras, arquivos de teste grátis, amostras DOCX, arquivos de amostra, arquivos de teste para conversão, imagens de amostra, documentos de amostra, arquivos de amostra, arquivos de amostra grátis'
      },
      schema: {
        name: 'Arquivos de Amostra Grátis para Baixar e Testar',
        description: 'Baixe arquivos de amostra grátis de vários tipos — imagens, documentos, áudio, vídeo e arquivos. Use-os para testes, demos ou validação de software em qualquer plataforma.'
      },
      hero: {
        title: 'Arquivos de Amostra Grátis',
        description: 'Baixe arquivos de amostra grátis para testes em todos os formatos. Múltiplos tamanhos de arquivo disponíveis (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) para testes abrangentes de conversores, compressores, visualizadores e ferramentas de desenvolvimento. Download instantâneo, sem registro necessário.'
      },
      back_button: 'Voltar ao Início',
      search: {
        placeholder: 'Pesquisar arquivos de amostra... (ex. DOCX, JPG, PDF)',
        results: 'Encontrado {{count}} arquivo(s) de amostra',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'AMOSTRAS DE DOCUMENTOS',
        data: 'AMOSTRAS DE DADOS',
        application: 'AMOSTRAS DE APLICAÇÕES',
        design_3d: 'AMOSTRAS 3D & DESIGN',
        image_video: 'AMOSTRAS DE IMAGENS & VÍDEO',
        audio: 'AMOSTRAS DE ÁUDIO',
        archive: 'AMOSTRAS DE ARQUIVOS'
      },
      actions: {
        download: 'Baixar'
      },
      no_results: {
        title: 'Nenhum arquivo de amostra encontrado',
        description: 'Tente pesquisar algo como "DOCX" ou "JPG"',
        clear: 'Limpar pesquisa'
      },
      features: {
        title: 'Por Que Escolher Nossos Arquivos de Amostra?',
        items: [
          {
            title: 'Grátis & Acesso Fácil',
            description: 'Baixe arquivos de amostra instantaneamente sem registro ou pagamento. Sem limites, sem taxas ocultas, completamente gratuito.'
          },
          {
            title: 'Múltiplos Tamanhos',
            description: 'Escolha entre vários tamanhos de arquivo (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) para testes abrangentes de todos os cenários de processamento de arquivos.'
          },
          {
            title: 'Grande Variedade',
            description: 'Acesse amostras em múltiplas categorias: documentos, imagens, áudio, vídeo, arquivos, arquivos de código e mais. Perfeito para desenvolvedores e testadores.'
          },
          {
            title: 'Download Instantâneo',
            description: 'Baixe arquivos imediatamente. Sem esperas, sem filas. Obtenha seus arquivos de teste agora mesmo.'
          },
          {
            title: 'Perfeito para Testes',
            description: 'Ideal para testar conversores, compressores, visualizadores, parsers e ferramentas de desenvolvimento. Cobertura completa de formatos de arquivo.'
          }
        ]
      },
      format_description_template: 'Baixe arquivos de amostra {{format}} grátis para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar {{purpose}}.',
      formats: {}
    }
  },
  vi: {
    samples_page: {
      meta: {
        title: 'File Mẫu Miễn Phí - Tải File Kiểm Thử cho Tất Cả Định Dạng | MorphyHub',
        description: 'Tải file mẫu miễn phí để kiểm thử - hình ảnh, tài liệu, lưu trữ, mã và nhiều hơn nữa. Nhiều kích thước (100 KB đến 100 MB) có sẵn. Hoàn hảo để kiểm thử bộ chuyển đổi, nén, trình xem và công cụ phát triển. Tải xuống ngay lập tức, không cần đăng ký.',
        keywords: 'file mẫu, file kiểm thử, tải mẫu, file kiểm thử miễn phí, mẫu DOCX, file mẫu, file kiểm thử để chuyển đổi, hình ảnh mẫu, tài liệu mẫu, lưu trữ mẫu, file mẫu miễn phí'
      },
      schema: {
        name: 'File Mẫu Miễn Phí để Tải Xuống và Kiểm Thử',
        description: 'Tải file mẫu miễn phí của nhiều loại — hình ảnh, tài liệu, âm thanh, video và lưu trữ. Sử dụng chúng để kiểm thử, demo hoặc xác thực phần mềm trên bất kỳ nền tảng nào.'
      },
      hero: {
        title: 'File Mẫu Miễn Phí',
        description: 'Tải file mẫu miễn phí để kiểm thử trên tất cả các định dạng. Nhiều kích thước file có sẵn (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) để kiểm thử toàn diện các bộ chuyển đổi, nén, trình xem và công cụ phát triển. Tải xuống ngay lập tức, không cần đăng ký.'
      },
      back_button: 'Về Trang Chủ',
      search: {
        placeholder: 'Tìm file mẫu... (vd. DOCX, JPG, PDF)',
        results: 'Tìm thấy {{count}} file mẫu',
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
        archive: 'MẪU LƯU TRỮ'
      },
      actions: {
        download: 'Tải Xuống'
      },
      no_results: {
        title: 'Không tìm thấy file mẫu',
        description: 'Thử tìm kiếm thứ gì đó như "DOCX" hoặc "JPG"',
        clear: 'Xóa tìm kiếm'
      },
      features: {
        title: 'Tại Sao Chọn File Mẫu Của Chúng Tôi?',
        items: [
          {
            title: 'Miễn Phí & Dễ Truy Cập',
            description: 'Tải file mẫu ngay lập tức mà không cần đăng ký hoặc thanh toán. Không giới hạn, không phí ẩn, hoàn toàn miễn phí.'
          },
          {
            title: 'Nhiều Kích Thước',
            description: 'Chọn từ nhiều kích thước file (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) để kiểm thử toàn diện tất cả các kịch bản xử lý file.'
          },
          {
            title: 'Đa Dạng',
            description: 'Truy cập mẫu trong nhiều danh mục: tài liệu, hình ảnh, âm thanh, video, lưu trữ, file mã và nhiều hơn nữa. Hoàn hảo cho nhà phát triển và người kiểm thử.'
          },
          {
            title: 'Tải Xuống Ngay Lập Tức',
            description: 'Tải file ngay lập tức. Không chờ đợi, không hàng đợi. Nhận file kiểm thử của bạn ngay bây giờ.'
          },
          {
            title: 'Hoàn Hảo để Kiểm Thử',
            description: 'Lý tưởng để kiểm thử bộ chuyển đổi, nén, trình xem, phân tích cú pháp và công cụ phát triển. Hỗ trợ định dạng file toàn diện.'
          }
        ]
      },
      format_description_template: 'Tải file mẫu {{format}} miễn phí để kiểm thử. Nhiều kích thước file có sẵn: 100 KB, 1 MB, 5 MB, 50 MB và 100 MB. Hoàn hảo để kiểm thử {{purpose}}.',
      formats: {}
    }
  },
  tr: {
    samples_page: {
      meta: {
        title: 'Ücretsiz Örnek Dosyalar - Tüm Formatlar için Test Dosyaları İndir | MorphyHub',
        description: 'Test için ücretsiz örnek dosyalar indirin - görüntüler, belgeler, arşivler, kod ve daha fazlası. Birden fazla boyut (100 KB\'dan 100 MB\'a kadar) mevcut. Dönüştürücüler, sıkıştırıcılar, görüntüleyiciler ve geliştirme araçlarını test etmek için mükemmel. Anında indirme, kayıt gerekmez.',
        keywords: 'örnek dosyalar, test dosyaları, örnek indir, ücretsiz test dosyaları, DOCX örnekleri, dosya örnekleri, dönüşüm için test dosyaları, örnek görüntüler, örnek belgeler, örnek arşivler, ücretsiz dosya örnekleri'
      },
      schema: {
        name: 'İndirme ve Test için Ücretsiz Örnek Dosyalar',
        description: 'Çeşitli türlerde ücretsiz örnek dosyalar indirin — görüntüler, belgeler, ses, video ve arşivler. Herhangi bir platformda test, demo veya yazılım doğrulaması için kullanın.'
      },
      hero: {
        title: 'Ücretsiz Örnek Dosyalar',
        description: 'Tüm formatlarda test için ücretsiz örnek dosyalar indirin. Kapsamlı dönüştürücü, sıkıştırıcı, görüntüleyici ve geliştirme araçları testleri için birden fazla dosya boyutu mevcut (100 KB, 1 MB, 5 MB, 50 MB, 100 MB). Anında indirme, kayıt gerekmez.'
      },
      back_button: 'Ana Sayfaya Dön',
      search: {
        placeholder: 'Örnek dosyalar ara... (örn. DOCX, JPG, PDF)',
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
      actions: {
        download: 'İndir'
      },
      no_results: {
        title: 'Örnek dosya bulunamadı',
        description: '"DOCX" veya "JPG" gibi bir şey aramayı deneyin',
        clear: 'Aramayı temizle'
      },
      features: {
        title: 'Neden Örnek Dosyalarımızı Seçmelisiniz?',
        items: [
          {
            title: 'Ücretsiz & Kolay Erişim',
            description: 'Kayıt veya ödeme olmadan anında örnek dosyalar indirin. Limit yok, gizli ücret yok, tamamen ücretsiz.'
          },
          {
            title: 'Birden Fazla Boyut',
            description: 'Tüm dosya işleme senaryolarının kapsamlı testleri için çeşitli dosya boyutlarından (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) seçim yapın.'
          },
          {
            title: 'Geniş Çeşitlilik',
            description: 'Birden fazla kategoride örneklere erişin: belgeler, görüntüler, ses, video, arşivler, kod dosyaları ve daha fazlası. Geliştiriciler ve testçiler için mükemmel.'
          },
          {
            title: 'Anında İndirme',
            description: 'Dosyaları hemen indirin. Bekleme yok, kuyruk yok. Test dosyalarınızı hemen alın.'
          },
          {
            title: 'Test İçin Mükemmel',
            description: 'Dönüştürücüleri, sıkıştırıcıları, görüntüleyicileri, ayrıştırıcıları ve geliştirme araçlarını test etmek için ideal. Kapsamlı dosya formatı desteği.'
          }
        ]
      },
      format_description_template: 'Test için ücretsiz {{format}} örnek dosyalar indirin. Birden fazla dosya boyutu mevcut: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. {{purpose}} test etmek için mükemmel.',
      formats: {}
    }
  },
  ru: {
    samples_page: {
      meta: {
        title: 'Бесплатные Образцы Файлов - Скачать Тестовые Файлы для Всех Форматов | MorphyHub',
        description: 'Скачайте бесплатные образцы файлов для тестирования - изображения, документы, архивы, код и многое другое. Доступны несколько размеров (от 100 КБ до 100 МБ). Идеально для тестирования конвертеров, компрессоров, просмотрщиков и инструментов разработки. Мгновенная загрузка, регистрация не требуется.',
        keywords: 'образцы файлов, тестовые файлы, скачать образцы, бесплатные тестовые файлы, образцы DOCX, файловые образцы, тестовые файлы для конвертации, образцы изображений, образцы документов, образцы архивов, бесплатные файловые образцы'
      },
      schema: {
        name: 'Бесплатные Образцы Файлов для Скачивания и Тестирования',
        description: 'Скачайте бесплатные образцы файлов различных типов — изображения, документы, аудио, видео и архивы. Используйте их для тестирования, демонстраций или валидации программного обеспечения на любой платформе.'
      },
      hero: {
        title: 'Бесплатные Образцы Файлов',
        description: 'Скачайте бесплатные образцы файлов для тестирования во всех форматах. Доступны несколько размеров файлов (100 КБ, 1 МБ, 5 МБ, 50 МБ, 100 МБ) для комплексного тестирования конвертеров, компрессоров, просмотрщиков и инструментов разработки. Мгновенная загрузка, регистрация не требуется.'
      },
      back_button: 'Вернуться на Главную',
      search: {
        placeholder: 'Поиск образцов файлов... (например, DOCX, JPG, PDF)',
        results: 'Найдено {{count}} образец(ов) файла',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: 'ОБРАЗЦЫ ДОКУМЕНТОВ',
        data: 'ОБРАЗЦЫ ДАННЫХ',
        application: 'ОБРАЗЦЫ ПРИЛОЖЕНИЙ',
        design_3d: 'ОБРАЗЦЫ 3D & ДИЗАЙНА',
        image_video: 'ОБРАЗЦЫ ИЗОБРАЖЕНИЙ & ВИДЕО',
        audio: 'ОБРАЗЦЫ АУДИО',
        archive: 'ОБРАЗЦЫ АРХИВОВ'
      },
      actions: {
        download: 'Скачать'
      },
      no_results: {
        title: 'Образцы файлов не найдены',
        description: 'Попробуйте найти что-то вроде "DOCX" или "JPG"',
        clear: 'Очистить поиск'
      },
      features: {
        title: 'Почему Выбрать Наши Образцы Файлов?',
        items: [
          {
            title: 'Бесплатно & Легкий Доступ',
            description: 'Скачайте образцы файлов мгновенно без регистрации или оплаты. Без ограничений, без скрытых платежей, полностью бесплатно.'
          },
          {
            title: 'Несколько Размеров',
            description: 'Выберите из различных размеров файлов (100 КБ, 1 МБ, 5 МБ, 50 МБ, 100 МБ) для комплексного тестирования всех сценариев обработки файлов.'
          },
          {
            title: 'Широкий Ассортимент',
            description: 'Доступ к образцам в нескольких категориях: документы, изображения, аудио, видео, архивы, файлы кода и многое другое. Идеально для разработчиков и тестировщиков.'
          },
          {
            title: 'Мгновенная Загрузка',
            description: 'Скачайте файлы немедленно. Без ожидания, без очередей. Получите ваши тестовые файлы прямо сейчас.'
          },
          {
            title: 'Идеально для Тестирования',
            description: 'Идеально для тестирования конвертеров, компрессоров, просмотрщиков, парсеров и инструментов разработки. Полная поддержка форматов файлов.'
          }
        ]
      },
      format_description_template: 'Скачайте бесплатные образцы файлов {{format}} для тестирования. Доступны несколько размеров файлов: 100 КБ, 1 МБ, 5 МБ, 50 МБ и 100 МБ. Идеально для тестирования {{purpose}}.',
      formats: {}
    }
  },
  ar: {
    samples_page: {
      meta: {
        title: 'ملفات عينة مجانية - تنزيل ملفات اختبار لجميع الصيغ | MorphyHub',
        description: 'قم بتنزيل ملفات عينة مجانية للاختبار - الصور والمستندات والأرشيفات والكود والمزيد. أحجام متعددة متاحة (100 KB إلى 100 MB). مثالي لاختبار المحولات والضواغط وعارضات الملفات وأدوات التطوير. تنزيل فوري، لا حاجة للتسجيل.',
        keywords: 'ملفات عينة, ملفات اختبار, تنزيل عينات, ملفات اختبار مجانية, عينات DOCX, ملفات عينة, ملفات اختبار للتحويل, صور عينة, مستندات عينة, أرشيفات عينة, ملفات عينة مجانية'
      },
      schema: {
        name: 'ملفات عينة مجانية للتنزيل والاختبار',
        description: 'قم بتنزيل ملفات عينة مجانية من أنواع مختلفة — الصور والمستندات والصوت والفيديو والأرشيفات. استخدمها للاختبار أو العروض التوضيحية أو التحقق من البرمجيات على أي منصة.'
      },
      hero: {
        title: 'ملفات عينة مجانية',
        description: 'قم بتنزيل ملفات عينة مجانية للاختبار في جميع الصيغ. أحجام ملفات متعددة متاحة (100 KB، 1 MB، 5 MB، 50 MB، 100 MB) للاختبار الشامل للمحولات والضواغط وعارضات الملفات وأدوات التطوير. تنزيل فوري، لا حاجة للتسجيل.'
      },
      back_button: 'العودة إلى الصفحة الرئيسية',
      search: {
        placeholder: 'البحث عن ملفات عينة... (مثل DOCX, JPG, PDF)',
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
      actions: {
        download: 'تنزيل'
      },
      no_results: {
        title: 'لم يتم العثور على ملفات عينة',
        description: 'حاول البحث عن شيء مثل "DOCX" أو "JPG"',
        clear: 'مسح البحث'
      },
      features: {
        title: 'لماذا تختار ملفات العينة لدينا؟',
        items: [
          {
            title: 'مجاني وسهل الوصول',
            description: 'قم بتنزيل ملفات عينة فوراً دون تسجيل أو دفع. لا حدود، لا رسوم مخفية، مجاني تماماً.'
          },
          {
            title: 'أحجام متعددة',
            description: 'اختر من أحجام ملفات مختلفة (100 KB، 1 MB، 5 MB، 50 MB، 100 MB) للاختبار الشامل لجميع سيناريوهات معالجة الملفات.'
          },
          {
            title: 'تنوع كبير',
            description: 'الوصول إلى عينات في فئات متعددة: المستندات والصور والصوت والفيديو والأرشيفات وملفات الكود والمزيد. مثالي للمطورين والاختبار.'
          },
          {
            title: 'تنزيل فوري',
            description: 'قم بتنزيل الملفات فوراً. لا انتظار، لا طوابير. احصل على ملفات الاختبار الخاصة بك الآن.'
          },
          {
            title: 'مثالي للاختبار',
            description: 'مثالي لاختبار المحولات والضواغط وعارضات الملفات والمحللات وأدوات التطوير. دعم شامل لصيغ الملفات.'
          }
        ]
      },
      format_description_template: 'قم بتنزيل ملفات عينة {{format}} مجانية للاختبار. أحجام ملفات متعددة متاحة: 100 KB، 1 MB، 5 MB، 50 MB و 100 MB. مثالي لاختبار {{purpose}}.',
      formats: {}
    }
  },
  th: {
    samples_page: {
      meta: {
        title: 'ไฟล์ตัวอย่างฟรี - ดาวน์โหลดไฟล์ทดสอบสำหรับทุกรูปแบบ | MorphyHub',
        description: 'ดาวน์โหลดไฟล์ตัวอย่างฟรีสำหรับการทดสอบ - รูปภาพ เอกสาร ไฟล์เก็บถาวร โค้ด และอื่นๆ ขนาดหลายขนาด (100 KB ถึง 100 MB) พร้อมใช้งาน เหมาะสำหรับการทดสอบตัวแปลง เครื่องบีบอัด โปรแกรมดู และเครื่องมือพัฒนา ดาวน์โหลดทันที ไม่ต้องลงทะเบียน',
        keywords: 'ไฟล์ตัวอย่าง, ไฟล์ทดสอบ, ดาวน์โหลดตัวอย่าง, ไฟล์ทดสอบฟรี, ตัวอย่าง DOCX, ไฟล์ตัวอย่าง, ไฟล์ทดสอบสำหรับการแปลง, รูปภาพตัวอย่าง, เอกสารตัวอย่าง, ไฟล์เก็บถาวรตัวอย่าง, ไฟล์ตัวอย่างฟรี'
      },
      schema: {
        name: 'ไฟล์ตัวอย่างฟรีสำหรับดาวน์โหลดและการทดสอบ',
        description: 'ดาวน์โหลดไฟล์ตัวอย่างฟรีประเภทต่างๆ — รูปภาพ เอกสาร เสียง วิดีโอ และไฟล์เก็บถาวร ใช้สำหรับการทดสอบ สาธิต หรือการตรวจสอบซอฟต์แวร์บนแพลตฟอร์มใดก็ได้'
      },
      hero: {
        title: 'ไฟล์ตัวอย่างฟรี',
        description: 'ดาวน์โหลดไฟล์ตัวอย่างฟรีสำหรับการทดสอบในทุกรูปแบบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) สำหรับการทดสอบที่ครอบคลุมของตัวแปลง เครื่องบีบอัด โปรแกรมดู และเครื่องมือพัฒนา ดาวน์โหลดทันที ไม่ต้องลงทะเบียน'
      },
      back_button: 'กลับหน้าหลัก',
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
        design_3d: 'ตัวอย่าง 3D & การออกแบบ',
        image_video: 'ตัวอย่างรูปภาพ & วิดีโอ',
        audio: 'ตัวอย่างเสียง',
        archive: 'ตัวอย่างไฟล์เก็บถาวร'
      },
      actions: {
        download: 'ดาวน์โหลด'
      },
      no_results: {
        title: 'ไม่พบไฟล์ตัวอย่าง',
        description: 'ลองค้นหาบางอย่างเช่น "DOCX" หรือ "JPG"',
        clear: 'ล้างการค้นหา'
      },
      features: {
        title: 'ทำไมต้องเลือกไฟล์ตัวอย่างของเรา?',
        items: [
          {
            title: 'ฟรีและเข้าถึงง่าย',
            description: 'ดาวน์โหลดไฟล์ตัวอย่างทันทีโดยไม่ต้องลงทะเบียนหรือชำระเงิน ไม่มีขีดจำกัด ไม่มีค่าธรรมเนียมแอบแฝง ฟรีทั้งหมด'
          },
          {
            title: 'หลายขนาด',
            description: 'เลือกจากขนาดไฟล์ต่างๆ (100 KB, 1 MB, 5 MB, 50 MB, 100 MB) สำหรับการทดสอบที่ครอบคลุมของทุกรูปแบบการประมวลผลไฟล์'
          },
          {
            title: 'หลากหลาย',
            description: 'เข้าถึงตัวอย่างในหลายหมวดหมู่: เอกสาร รูปภาพ เสียง วิดีโอ ไฟล์เก็บถาวร ไฟล์โค้ด และอื่นๆ เหมาะสำหรับนักพัฒนาและผู้ทดสอบ'
          },
          {
            title: 'ดาวน์โหลดทันที',
            description: 'ดาวน์โหลดไฟล์ทันที ไม่ต้องรอ ไม่มีคิว รับไฟล์ทดสอบของคุณได้ทันที'
          },
          {
            title: 'เหมาะสำหรับการทดสอบ',
            description: 'เหมาะสำหรับการทดสอบตัวแปลง เครื่องบีบอัด โปรแกรมดู ตัวแยกวิเคราะห์ และเครื่องมือพัฒนา รองรับรูปแบบไฟล์ที่ครอบคลุม'
          }
        ]
      },
      format_description_template: 'ดาวน์โหลดไฟล์ตัวอย่าง {{format}} ฟรีสำหรับการทดสอบ ขนาดไฟล์หลายขนาดพร้อมใช้งาน: 100 KB, 1 MB, 5 MB, 50 MB และ 100 MB เหมาะสำหรับการทดสอบ {{purpose}}',
      formats: {}
    }
  },
  ja: {
    samples_page: {
      meta: {
        title: '無料サンプルファイル - 全形式のテストファイルをダウンロード | MorphyHub',
        description: 'テスト用の無料サンプルファイルをダウンロード - 画像、文書、アーカイブ、コードなど。複数のサイズ（100 KBから100 MBまで）を利用可能。コンバーター、コンプレッサー、ビューアー、開発ツールのテストに最適。即座にダウンロード、登録不要。',
        keywords: 'サンプルファイル, テストファイル, サンプルダウンロード, 無料テストファイル, DOCXサンプル, ファイルサンプル, 変換用テストファイル, サンプル画像, サンプル文書, サンプルアーカイブ, 無料ファイルサンプル'
      },
      schema: {
        name: 'ダウンロードとテスト用の無料サンプルファイル',
        description: '様々なタイプの無料サンプルファイルをダウンロード — 画像、文書、オーディオ、ビデオ、アーカイブ。任意のプラットフォームでテスト、デモ、またはソフトウェア検証に使用します。'
      },
      hero: {
        title: '無料サンプルファイル',
        description: '全形式でテスト用の無料サンプルファイルをダウンロード。コンバーター、コンプレッサー、ビューアー、開発ツールの包括的なテストのために複数のファイルサイズ（100 KB、1 MB、5 MB、50 MB、100 MB）を利用可能。即座にダウンロード、登録不要。'
      },
      back_button: 'ホームに戻る',
      search: {
        placeholder: 'サンプルファイルを検索... (例: DOCX, JPG, PDF)',
        results: '{{count}}件のサンプルファイルが見つかりました',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: '文書サンプル',
        data: 'データサンプル',
        application: 'アプリケーションサンプル',
        design_3d: '3D & デザインサンプル',
        image_video: '画像 & ビデオサンプル',
        audio: 'オーディオサンプル',
        archive: 'アーカイブサンプル'
      },
      actions: {
        download: 'ダウンロード'
      },
      no_results: {
        title: 'サンプルファイルが見つかりませんでした',
        description: '"DOCX"または"JPG"のようなものを検索してみてください',
        clear: '検索をクリア'
      },
      features: {
        title: 'なぜ当社のサンプルファイルを選ぶのか？',
        items: [
          {
            title: '無料 & 簡単アクセス',
            description: '登録や支払いなしで即座にサンプルファイルをダウンロード。制限なし、隠れた料金なし、完全無料。'
          },
          {
            title: '複数サイズ',
            description: 'すべてのファイル処理シナリオの包括的なテストのために、さまざまなファイルサイズ（100 KB、1 MB、5 MB、50 MB、100 MB）から選択。'
          },
          {
            title: '幅広い種類',
            description: '複数のカテゴリでサンプルにアクセス：文書、画像、オーディオ、ビデオ、アーカイブ、コードファイルなど。開発者とテスターに最適。'
          },
          {
            title: '即座にダウンロード',
            description: 'ファイルを即座にダウンロード。待ち時間なし、キューなし。今すぐテストファイルを取得。'
          },
          {
            title: 'テストに最適',
            description: 'コンバーター、コンプレッサー、ビューアー、パーサー、開発ツールをテストするのに理想的。包括的なファイル形式サポート。'
          }
        ]
      },
      format_description_template: 'テスト用の無料{{format}}サンプルファイルをダウンロード。複数のファイルサイズを利用可能: 100 KB、1 MB、5 MB、50 MB、100 MB。{{purpose}}のテストに最適。',
      formats: {}
    }
  },
  zh: {
    samples_page: {
      meta: {
        title: '免费示例文件 - 下载所有格式的测试文件 | MorphyHub',
        description: '下载免费示例文件用于测试 - 图像、文档、存档、代码等。提供多种大小（100 KB至100 MB）。非常适合测试转换器、压缩器、查看器和开发工具。即时下载，无需注册。',
        keywords: '示例文件, 测试文件, 下载示例, 免费测试文件, DOCX示例, 文件示例, 转换测试文件, 示例图像, 示例文档, 示例存档, 免费文件示例'
      },
      schema: {
        name: '用于下载和测试的免费示例文件',
        description: '下载各种类型的免费示例文件 — 图像、文档、音频、视频和存档。在任何平台上用于测试、演示或软件验证。'
      },
      hero: {
        title: '免费示例文件',
        description: '下载所有格式的测试用免费示例文件。提供多种文件大小（100 KB、1 MB、5 MB、50 MB、100 MB），用于全面测试转换器、压缩器、查看器和开发工具。即时下载，无需注册。'
      },
      back_button: '返回首页',
      search: {
        placeholder: '搜索示例文件... (例如: DOCX, JPG, PDF)',
        results: '找到 {{count}} 个示例文件',
        example_one: 'DOCX',
        example_two: 'JPG'
      },
      categories: {
        document: '文档示例',
        data: '数据示例',
        application: '应用程序示例',
        design_3d: '3D & 设计示例',
        image_video: '图像 & 视频示例',
        audio: '音频示例',
        archive: '存档示例'
      },
      actions: {
        download: '下载'
      },
      no_results: {
        title: '未找到示例文件',
        description: '尝试搜索类似 "DOCX" 或 "JPG" 的内容',
        clear: '清除搜索'
      },
      features: {
        title: '为什么选择我们的示例文件？',
        items: [
          {
            title: '免费 & 易于访问',
            description: '无需注册或付款即可即时下载示例文件。无限制，无隐藏费用，完全免费。'
          },
          {
            title: '多种大小',
            description: '从各种文件大小（100 KB、1 MB、5 MB、50 MB、100 MB）中选择，以全面测试所有文件处理场景。'
          },
          {
            title: '种类丰富',
            description: '访问多个类别的示例：文档、图像、音频、视频、存档、代码文件等。非常适合开发人员和测试人员。'
          },
          {
            title: '即时下载',
            description: '立即下载文件。无需等待，无需排队。立即获取您的测试文件。'
          },
          {
            title: '非常适合测试',
            description: '非常适合测试转换器、压缩器、查看器、解析器和开发工具。全面的文件格式支持。'
          }
        ]
      },
      format_description_template: '下载免费的{{format}}示例文件用于测试。提供多种文件大小: 100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试{{purpose}}。',
      formats: {}
    }
  }
};

// Register translations
Object.entries(additionalLanguagesResources).forEach(([locale, resources]) => {
  i18n.addResourceBundle(locale, 'translation', resources, true, true);
});

export default additionalLanguagesResources;

