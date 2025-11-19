import { SamplePageTranslations } from './types';

export const it: SamplePageTranslations = {
  sample_page: {
    common: {
      back_button: 'Torna alla home',
      file_size: 'Dimensione file:',
      download: 'Scarica',
      download_now: 'Scarica ora',
      download_started: 'Download avviato',
      download_ready_in: 'Download pronto tra {{countdown}}s...',
      about_title: 'Informazioni su questi file di esempio',
      about_items: [
        'Questi sono file di test di varie dimensioni per scopi di test',
        'I file sono ospitati in modo sicuro e disponibili per il download gratuito',
        'Perfetti per testare strumenti di conversione documenti e processori di file',
        'Nessuna registrazione o account richiesto'
      ],
      features: {
        multiple_sizes: {
          title: 'Dimensioni multiple',
          description: 'File di test da 100 KB a 100 MB'
        },
        free_download: {
          title: 'Download gratuito',
          description: 'Nessuna registrazione o pagamento richiesto'
        },
        safe_tested: {
          title: 'Sicuro e testato',
          description: 'Tutti i file sono sicuri e testati per la compatibilità'
        }
      }
    },
    formats: {
      docx: {
        meta: {
          title: 'Scarica file di esempio DOCX gratuiti - File di test | MorphyHub',
          description: 'Scarica file di esempio DOCX gratuiti per il test. Dimensioni file multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti di conversione e elaborazione documenti.',
          keywords: 'file di esempio DOCX, file di test DOCX, scarica esempi DOCX, file di test DOCX gratuiti, esempi di documenti, esempi Microsoft Word'
        },
        schema: {
          name: 'File di esempio DOCX gratuiti - Scarica file di test',
          description: 'Scarica file di esempio DOCX gratuiti per il test. Dimensioni file multiple disponibili: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfetto per testare strumenti di conversione documenti.'
        },
        hero: {
          title: 'File di esempio DOCX',
          description: 'Scarica file di esempio DOCX gratuiti per il test. Dimensioni file multiple disponibili per testare i tuoi strumenti di conversione e elaborazione documenti.'
        },
        about_description: 'Questi sono file di test DOCX di varie dimensioni per scopi di test'
      }
    }
  }
};

