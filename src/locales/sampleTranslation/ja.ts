import { SamplePageTranslations } from './types';

export const ja: SamplePageTranslations = {
  sample_page: {
    common: {
      back_button: 'ホームに戻る',
      file_size: 'ファイルサイズ:',
      download: 'ダウンロード',
      download_now: '今すぐダウンロード',
      download_started: 'ダウンロードを開始しました',
      download_ready_in: '{{countdown}}秒後にダウンロード準備完了...',
      about_title: 'これらのサンプルファイルについて',
      about_items: [
        'これらはテスト目的のさまざまなサイズのテストファイルです',
        'ファイルは安全にホストされ、無料でダウンロードできます',
        'ドキュメント変換ツールやファイルプロセッサーのテストに最適',
        '登録やアカウントは不要です'
      ],
      features: {
        multiple_sizes: {
          title: '複数のサイズ',
          description: '100 KBから100 MBまでのテストファイル'
        },
        free_download: {
          title: '無料ダウンロード',
          description: '登録や支払いは不要です'
        },
        safe_tested: {
          title: '安全でテスト済み',
          description: 'すべてのファイルは安全で、互換性についてテスト済みです'
        }
      }
    },
    formats: {
      docx: {
        meta: {
          title: '無料DOCXサンプルファイルをダウンロード - テストファイル | MorphyHub',
          description: 'テスト用の無料DOCXサンプルファイルをダウンロード。複数のファイルサイズを利用可能: 100 KB、1 MB、5 MB、50 MB、100 MB。ドキュメント変換および処理ツールのテストに最適です。',
          keywords: 'DOCXサンプルファイル、DOCXテストファイル、DOCXサンプルをダウンロード、無料DOCXテストファイル、ドキュメントサンプル、Microsoft Wordサンプル'
        },
        schema: {
          name: '無料DOCXサンプルファイル - テストファイルをダウンロード',
          description: 'テスト用の無料DOCXサンプルファイルをダウンロード。複数のファイルサイズを利用可能: 100 KB、1 MB、5 MB、50 MB、100 MB。ドキュメント変換ツールのテストに最適です。'
        },
        hero: {
          title: 'DOCXサンプルファイル',
          description: 'テスト用の無料DOCXサンプルファイルをダウンロード。ドキュメント変換および処理ツールをテストするための複数のファイルサイズを利用できます。'
        },
        about_description: 'これらはテスト目的のさまざまなサイズのDOCXテストファイルです'
      }
    }
  }
};

