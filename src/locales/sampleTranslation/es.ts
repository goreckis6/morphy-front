import { SamplePageTranslations } from './types';

export const es: SamplePageTranslations = {
  sample_page: {
    common: {
      back_button: 'Volver al inicio',
      file_size: 'Tamaño del archivo:',
      download: 'Descargar',
      download_now: 'Descargar ahora',
      download_started: 'Descarga iniciada',
      download_ready_in: 'Descarga lista en {{countdown}}s...',
      about_title: 'Acerca de estos archivos de muestra',
      about_items: [
        'Estos son archivos de prueba en varios tamaños para fines de prueba',
        'Los archivos están alojados de forma segura y disponibles para descarga gratuita',
        'Perfecto para probar herramientas de conversión de documentos y procesadores de archivos',
        'No se requiere registro ni cuenta'
      ],
      features: {
        multiple_sizes: {
          title: 'Múltiples tamaños',
          description: 'Archivos de prueba desde 100 KB hasta 100 MB'
        },
        free_download: {
          title: 'Descarga gratuita',
          description: 'No se requiere registro ni pago'
        },
        safe_tested: {
          title: 'Seguro y probado',
          description: 'Todos los archivos son seguros y probados para compatibilidad'
        }
      }
    },
    formats: {
      docx: {
        meta: {
          title: 'Descargar archivos de muestra DOCX gratis - Archivos de prueba | MorphyHub',
          description: 'Descarga archivos de muestra DOCX gratis para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión y procesamiento de documentos.',
          keywords: 'archivos de muestra DOCX, archivos de prueba DOCX, descargar muestras DOCX, archivos de prueba DOCX gratis, muestras de documentos, muestras de Microsoft Word'
        },
        schema: {
          name: 'Archivos de muestra DOCX gratis - Descargar archivos de prueba',
          description: 'Descarga archivos de muestra DOCX gratis para pruebas. Múltiples tamaños de archivo disponibles: 100 KB, 1 MB, 5 MB, 50 MB y 100 MB. Perfecto para probar herramientas de conversión de documentos.'
        },
        hero: {
          title: 'Archivos de muestra DOCX',
          description: 'Descarga archivos de muestra DOCX gratis para pruebas. Múltiples tamaños de archivo disponibles para probar tus herramientas de conversión y procesamiento de documentos.'
        },
        about_description: 'Estos son archivos de prueba DOCX en varios tamaños para fines de prueba'
      }
    }
  }
};

