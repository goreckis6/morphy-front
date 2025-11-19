import { SamplePageTranslations } from './types';

export const zh: SamplePageTranslations = {
  sample_page: {
    common: {
      back_button: '返回首页',
      file_size: '文件大小:',
      download: '下载',
      download_now: '立即下载',
      download_started: '下载已开始',
      download_ready_in: '{{countdown}}秒后准备就绪...',
      about_title: '关于这些示例文件',
      about_items: [
        '这些是用于测试目的的各种大小的测试文件',
        '文件安全托管，可免费下载',
        '非常适合测试文档转换工具和文件处理器',
        '无需注册或账户'
      ],
      features: {
        multiple_sizes: {
          title: '多种大小',
          description: '测试文件从 100 KB 到 100 MB'
        },
        free_download: {
          title: '免费下载',
          description: '无需注册或付款'
        },
        safe_tested: {
          title: '安全且经过测试',
          description: '所有文件都是安全的，并已测试兼容性'
        }
      }
    },
    formats: {
      docx: {
        meta: {
          title: '下载免费DOCX示例文件 - 测试文件 | MorphyHub',
          description: '下载免费DOCX示例文件用于测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试文档转换和处理工具。',
          keywords: 'DOCX示例文件、DOCX测试文件、下载DOCX示例、免费DOCX测试文件、文档示例、Microsoft Word示例'
        },
        schema: {
          name: '免费DOCX示例文件 - 下载测试文件',
          description: '下载免费DOCX示例文件用于测试。提供多种文件大小：100 KB、1 MB、5 MB、50 MB 和 100 MB。非常适合测试文档转换工具。'
        },
        hero: {
          title: 'DOCX示例文件',
          description: '下载免费DOCX示例文件用于测试。提供多种文件大小，用于测试您的文档转换和处理工具。'
        },
        about_description: '这些是用于测试目的的各种大小的DOCX测试文件'
      }
    }
  }
};

