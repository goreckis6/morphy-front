import { SamplePageTranslations } from './types';

export const en: SamplePageTranslations = {
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
      }
    }
  }
};

