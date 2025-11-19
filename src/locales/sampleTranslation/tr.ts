import { SamplePageTranslations } from './types';

export const tr: SamplePageTranslations = {
  sample_page: {
    common: {
      back_button: 'Ana sayfaya dön',
      file_size: 'Dosya boyutu:',
      download: 'İndir',
      download_now: 'Şimdi indir',
      download_started: 'İndirme başlatıldı',
      download_ready_in: 'İndirme {{countdown}}s içinde hazır olacak...',
      about_title: 'Bu örnek dosyalar hakkında',
      about_items: [
        'Bunlar test amaçlı çeşitli boyutlarda test dosyalarıdır',
        'Dosyalar güvenli bir şekilde barındırılmaktadır ve ücretsiz indirme için kullanılabilir',
        'Belge dönüştürme araçları ve dosya işlemcilerini test etmek için mükemmel',
        'Kayıt veya hesap gerekmez'
      ],
      features: {
        multiple_sizes: {
          title: 'Birden fazla boyut',
          description: '100 KB\'den 100 MB\'ye kadar test dosyaları'
        },
        free_download: {
          title: 'Ücretsiz indirme',
          description: 'Kayıt veya ödeme gerekmez'
        },
        safe_tested: {
          title: 'Güvenli ve test edilmiş',
          description: 'Tüm dosyalar güvenlidir ve uyumluluk için test edilmiştir'
        }
      }
    },
    formats: {
      docx: {
        meta: {
          title: 'Ücretsiz DOCX örnek dosyaları indir - Test dosyaları | MorphyHub',
          description: 'Test için ücretsiz DOCX örnek dosyalarını indirin. Birden fazla dosya boyutu mevcut: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Belge dönüştürme ve işleme araçlarını test etmek için mükemmel.',
          keywords: 'DOCX örnek dosyaları, DOCX test dosyaları, DOCX örnekleri indir, ücretsiz DOCX test dosyaları, belge örnekleri, Microsoft Word örnekleri'
        },
        schema: {
          name: 'Ücretsiz DOCX örnek dosyaları - Test dosyalarını indir',
          description: 'Test için ücretsiz DOCX örnek dosyalarını indirin. Birden fazla dosya boyutu mevcut: 100 KB, 1 MB, 5 MB, 50 MB ve 100 MB. Belge dönüştürme araçlarını test etmek için mükemmel.'
        },
        hero: {
          title: 'DOCX örnek dosyaları',
          description: 'Test için ücretsiz DOCX örnek dosyalarını indirin. Belge dönüştürme ve işleme araçlarınızı test etmek için birden fazla dosya boyutu mevcut.'
        },
        about_description: 'Bunlar test amaçlı çeşitli boyutlarda DOCX test dosyalarıdır'
      }
    }
  }
};

