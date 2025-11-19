import { SamplePageTranslations } from './types';

export const pt: SamplePageTranslations = {
  sample_page: {
    common: {
      back_button: 'Voltar ao início',
      file_size: 'Tamanho do arquivo:',
      download: 'Baixar',
      download_now: 'Baixar agora',
      download_started: 'Download iniciado',
      download_ready_in: 'Download pronto em {{countdown}}s...',
      about_title: 'Sobre estes arquivos de exemplo',
      about_items: [
        'Estes são arquivos de teste em vários tamanhos para fins de teste',
        'Os arquivos são hospedados com segurança e disponíveis para download gratuito',
        'Perfeito para testar ferramentas de conversão de documentos e processadores de arquivos',
        'Nenhum registro ou conta necessária'
      ],
      features: {
        multiple_sizes: {
          title: 'Múltiplos tamanhos',
          description: 'Arquivos de teste de 100 KB a 100 MB'
        },
        free_download: {
          title: 'Download gratuito',
          description: 'Nenhum registro ou pagamento necessário'
        },
        safe_tested: {
          title: 'Seguro e testado',
          description: 'Todos os arquivos são seguros e testados para compatibilidade'
        }
      }
    },
    formats: {
      docx: {
        meta: {
          title: 'Baixar arquivos de exemplo DOCX gratuitos - Arquivos de teste | MorphyHub',
          description: 'Baixe arquivos de exemplo DOCX gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão e processamento de documentos.',
          keywords: 'arquivos de exemplo DOCX, arquivos de teste DOCX, baixar exemplos DOCX, arquivos de teste DOCX gratuitos, exemplos de documentos, exemplos Microsoft Word'
        },
        schema: {
          name: 'Arquivos de exemplo DOCX gratuitos - Baixar arquivos de teste',
          description: 'Baixe arquivos de exemplo DOCX gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis: 100 KB, 1 MB, 5 MB, 50 MB e 100 MB. Perfeito para testar ferramentas de conversão de documentos.'
        },
        hero: {
          title: 'Arquivos de exemplo DOCX',
          description: 'Baixe arquivos de exemplo DOCX gratuitos para testes. Múltiplos tamanhos de arquivo disponíveis para testar suas ferramentas de conversão e processamento de documentos.'
        },
        about_description: 'Estes são arquivos de teste DOCX em vários tamanhos para fins de teste'
      }
    }
  }
};

