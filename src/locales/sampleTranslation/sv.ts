import { SamplePageTranslations } from './types';

export const sv: SamplePageTranslations = {
  sample_page: {
    common: {
      back_button: 'Tillbaka till startsidan',
      file_size: 'Filstorlek:',
      download: 'Ladda ner',
      download_now: 'Ladda ner nu',
      download_started: 'Nedladdning startad',
      download_ready_in: 'Nedladdning klar om {{countdown}}s...',
      about_title: 'Om dessa exempelfiler',
      about_items: [
        'Detta är testfiler i olika storlekar för teständamål',
        'Filerna är säkert hostade och tillgängliga för gratis nedladdning',
        'Perfekt för att testa dokumentkonverteringsverktyg och filprocessorer',
        'Ingen registrering eller konto krävs'
      ],
      features: {
        multiple_sizes: {
          title: 'Flera storlekar',
          description: 'Testfiler från 100 KB till 100 MB'
        },
        free_download: {
          title: 'Gratis nedladdning',
          description: 'Ingen registrering eller betalning krävs'
        },
        safe_tested: {
          title: 'Säker & testad',
          description: 'Alla filer är säkra och testade för kompatibilitet'
        }
      }
    },
    formats: {
      docx: {
        meta: {
          title: 'Ladda ner gratis DOCX-exempelfiler - Testfiler | MorphyHub',
          description: 'Ladda ner gratis DOCX-exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa dokumentkonverterings- och bearbetningsverktyg.',
          keywords: 'DOCX-exempelfiler, DOCX-testfiler, ladda ner DOCX-exempel, gratis DOCX-testfiler, dokumentexempel, Microsoft Word-exempel'
        },
        schema: {
          name: 'Gratis DOCX-exempelfiler - Ladda ner testfiler',
          description: 'Ladda ner gratis DOCX-exempelfiler för testning. Flera filstorlekar tillgängliga: 100 KB, 1 MB, 5 MB, 50 MB och 100 MB. Perfekt för att testa dokumentkonverteringsverktyg.'
        },
        hero: {
          title: 'DOCX-exempelfiler',
          description: 'Ladda ner gratis DOCX-exempelfiler för testning. Flera filstorlekar tillgängliga för att testa dina dokumentkonverterings- och bearbetningsverktyg.'
        },
        about_description: 'Detta är DOCX-testfiler i olika storlekar för teständamål'
      }
    }
  }
};

