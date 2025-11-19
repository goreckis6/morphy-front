import { SamplePageTranslations } from './types';

export const fr: SamplePageTranslations = {
  sample_page: {
    common: {
      back_button: 'Retour à l\'accueil',
      file_size: 'Taille du fichier:',
      download: 'Télécharger',
      download_now: 'Télécharger maintenant',
      download_started: 'Téléchargement démarré',
      download_ready_in: 'Téléchargement prêt dans {{countdown}}s...',
      about_title: 'À propos de ces fichiers d\'exemple',
      about_items: [
        'Ce sont des fichiers de test de différentes tailles à des fins de test',
        'Les fichiers sont hébergés en toute sécurité et disponibles en téléchargement gratuit',
        'Parfait pour tester les outils de conversion de documents et les processeurs de fichiers',
        'Aucune inscription ni compte requis'
      ],
      features: {
        multiple_sizes: {
          title: 'Plusieurs tailles',
          description: 'Fichiers de test de 100 KB à 100 MB'
        },
        free_download: {
          title: 'Téléchargement gratuit',
          description: 'Aucune inscription ni paiement requis'
        },
        safe_tested: {
          title: 'Sûr et testé',
          description: 'Tous les fichiers sont sûrs et testés pour la compatibilité'
        }
      }
    },
    formats: {
      docx: {
        meta: {
          title: 'Télécharger des fichiers d\'exemple DOCX gratuits - Fichiers de test | MorphyHub',
          description: 'Téléchargez des fichiers d\'exemple DOCX gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion et de traitement de documents.',
          keywords: 'fichiers d\'exemple DOCX, fichiers de test DOCX, télécharger des exemples DOCX, fichiers de test DOCX gratuits, exemples de documents, exemples Microsoft Word'
        },
        schema: {
          name: 'Fichiers d\'exemple DOCX gratuits - Télécharger des fichiers de test',
          description: 'Téléchargez des fichiers d\'exemple DOCX gratuits pour les tests. Plusieurs tailles de fichiers disponibles: 100 KB, 1 MB, 5 MB, 50 MB et 100 MB. Parfait pour tester les outils de conversion de documents.'
        },
        hero: {
          title: 'Fichiers d\'exemple DOCX',
          description: 'Téléchargez des fichiers d\'exemple DOCX gratuits pour les tests. Plusieurs tailles de fichiers disponibles pour tester vos outils de conversion et de traitement de documents.'
        },
        about_description: 'Ce sont des fichiers de test DOCX de différentes tailles à des fins de test'
      }
    }
  }
};

