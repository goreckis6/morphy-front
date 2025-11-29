import i18n from '../../../i18n';

type DOCXViewerTranslations = {
  viewers: {
    docx: {
      editor: {
        toggle_sidebar: string;
        close: string;
        close_sidebar: string;
        search_placeholder: string;
        add_files: string;
        pages: string;
        close_pages_sidebar: string;
        page: string;
        show_pages: string;
        format_badge: string;
        previous_page: string;
        next_page: string;
        zoom_out: string;
        reset_zoom: string;
        zoom_in: string;
        start_presentation: string;
        exit_presentation: string;
        present: string;
        print_docx: string;
        download_docx: string;
        previous: string;
        next: string;
        files: string;
        files_header: string;
        no_files: string;
        add_files_prompt: string;
        no_preview: string;
      };
      loading_window: {
        title: string;
      };
    };
  };
};

const resources: Record<string, DOCXViewerTranslations> = {
  en: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Toggle Sidebar',
          close: 'Close (Esc)',
          close_sidebar: 'Close Sidebar',
          search_placeholder: 'Search files...',
          add_files: '+ Add Files',
          pages: 'Pages',
          close_pages_sidebar: 'Close Pages',
          page: 'Page',
          show_pages: 'Show Pages',
          format_badge: 'DOCX',
          previous_page: 'Previous Page (←)',
          next_page: 'Next Page (→)',
          zoom_out: 'Zoom Out (-)',
          reset_zoom: 'Click to reset zoom',
          zoom_in: 'Zoom In (+)',
          start_presentation: 'Start Presentation (Space/Arrows to navigate)',
          exit_presentation: 'Exit',
          present: 'Present',
          print_docx: 'Print DOCX',
          download_docx: 'Download DOCX',
          previous: 'Previous (←)',
          next: 'Next (→)',
          files: 'Files',
          files_header: 'Files',
          no_files: 'No files loaded',
          add_files_prompt: 'Use the sidebar to add DOCX files',
          no_preview: 'No preview available'
        },
        loading_window: {
          title: 'Loading DOCX...'
        }
      }
    }
  },
  pl: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Przełącz pasek boczny',
          close: 'Zamknij (Esc)',
          close_sidebar: 'Zamknij pasek boczny',
          search_placeholder: 'Szukaj plików...',
          add_files: '+ Dodaj pliki',
          pages: 'Strony',
          close_pages_sidebar: 'Zamknij strony',
          page: 'Strona',
          show_pages: 'Pokaż strony',
          format_badge: 'DOCX',
          previous_page: 'Poprzednia strona (←)',
          next_page: 'Następna strona (→)',
          zoom_out: 'Pomniejsz (-)',
          reset_zoom: 'Kliknij, aby zresetować powiększenie',
          zoom_in: 'Powiêksz (+)',
          start_presentation: 'Rozpocznij prezentację (Spacja/Strzałki do nawigacji)',
          exit_presentation: 'Wyjdź',
          present: 'Prezentuj',
          print_docx: 'Drukuj DOCX',
          download_docx: 'Pobierz DOCX',
          previous: 'Poprzedni (←)',
          next: 'Następny (→)',
          files: 'Pliki',
          files_header: 'Pliki',
          no_files: 'Brak załadowanych plików',
          add_files_prompt: 'Użyj paska bocznego, aby dodać pliki DOCX',
          no_preview: 'Brak podglądu'
        },
        loading_window: {
          title: 'Ładowanie DOCX...'
        }
      }
    }
  },
  de: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Seitenleiste umschalten',
          close: 'Schließen (Esc)',
          close_sidebar: 'Seitenleiste schließen',
          search_placeholder: 'Dateien suchen...',
          add_files: '+ Dateien hinzufügen',
          pages: 'Seiten',
          close_pages_sidebar: 'Seiten schließen',
          page: 'Seite',
          show_pages: 'Seiten anzeigen',
          format_badge: 'DOCX',
          previous_page: 'Vorherige Seite (←)',
          next_page: 'Nächste Seite (→)',
          zoom_out: 'Verkleinern (-)',
          reset_zoom: 'Klicken, um Zoom zurückzusetzen',
          zoom_in: 'Vergrößern (+)',
          start_presentation: 'Präsentation starten (Leertaste/Pfeile zur Navigation)',
          exit_presentation: 'Beenden',
          present: 'Präsentieren',
          print_docx: 'DOCX drucken',
          download_docx: 'DOCX herunterladen',
          previous: 'Vorherige (←)',
          next: 'Nächste (→)',
          files: 'Dateien',
          files_header: 'Dateien',
          no_files: 'Keine Dateien geladen',
          add_files_prompt: 'Verwenden Sie die Seitenleiste, um DOCX-Dateien hinzuzufügen',
          no_preview: 'Keine Vorschau verfügbar'
        },
        loading_window: {
          title: 'DOCX wird geladen...'
        }
      }
    }
  },
  es: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Alternar barra lateral',
          close: 'Cerrar (Esc)',
          close_sidebar: 'Cerrar barra lateral',
          search_placeholder: 'Buscar archivos...',
          add_files: '+ Agregar archivos',
          pages: 'Páginas',
          close_pages_sidebar: 'Cerrar páginas',
          page: 'Página',
          show_pages: 'Mostrar páginas',
          format_badge: 'DOCX',
          previous_page: 'Página anterior (←)',
          next_page: 'Página siguiente (→)',
          zoom_out: 'Alejar (-)',
          reset_zoom: 'Hacer clic para restablecer el zoom',
          zoom_in: 'Acercar (+)',
          start_presentation: 'Iniciar presentación (Espacio/Flechas para navegar)',
          exit_presentation: 'Salir',
          present: 'Presentar',
          print_docx: 'Imprimir DOCX',
          download_docx: 'Descargar DOCX',
          previous: 'Anterior (←)',
          next: 'Siguiente (→)',
          files: 'Archivos',
          files_header: 'Archivos',
          no_files: 'No hay archivos cargados',
          add_files_prompt: 'Use la barra lateral para agregar archivos DOCX',
          no_preview: 'No hay vista previa disponible'
        },
        loading_window: {
          title: 'Cargando DOCX...'
        }
      }
    }
  },
  fr: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Basculer la barre latérale',
          close: 'Fermer (Esc)',
          close_sidebar: 'Fermer la barre latérale',
          search_placeholder: 'Rechercher des fichiers...',
          add_files: '+ Ajouter des fichiers',
          pages: 'Pages',
          close_pages_sidebar: 'Fermer les pages',
          page: 'Page',
          show_pages: 'Afficher les pages',
          format_badge: 'DOCX',
          previous_page: 'Page précédente (←)',
          next_page: 'Page suivante (→)',
          zoom_out: 'Dézoomer (-)',
          reset_zoom: 'Cliquer pour réinitialiser le zoom',
          zoom_in: 'Zoomer (+)',
          start_presentation: 'Démarrer la présentation (Espace/Flèches pour naviguer)',
          exit_presentation: 'Quitter',
          present: 'Présenter',
          print_docx: 'Imprimer DOCX',
          download_docx: 'Télécharger DOCX',
          previous: 'Précédent (←)',
          next: 'Suivant (→)',
          files: 'Fichiers',
          files_header: 'Fichiers',
          no_files: 'Aucun fichier chargé',
          add_files_prompt: 'Utilisez la barre latérale pour ajouter des fichiers DOCX',
          no_preview: 'Aucun aperçu disponible'
        },
        loading_window: {
          title: 'Chargement de DOCX...'
        }
      }
    }
  },
  it: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Attiva/disattiva barra laterale',
          close: 'Chiudi (Esc)',
          close_sidebar: 'Chiudi barra laterale',
          search_placeholder: 'Cerca file...',
          add_files: '+ Aggiungi file',
          pages: 'Pagine',
          close_pages_sidebar: 'Chiudi pagine',
          page: 'Pagina',
          show_pages: 'Mostra pagine',
          format_badge: 'DOCX',
          previous_page: 'Pagina precedente (←)',
          next_page: 'Pagina successiva (→)',
          zoom_out: 'Riduci (-)',
          reset_zoom: 'Clicca per reimpostare lo zoom',
          zoom_in: 'Ingrandisci (+)',
          start_presentation: 'Avvia presentazione (Spazio/Frecce per navigare)',
          exit_presentation: 'Esci',
          present: 'Presenta',
          print_docx: 'Stampa DOCX',
          download_docx: 'Scarica DOCX',
          previous: 'Precedente (←)',
          next: 'Successivo (→)',
          files: 'File',
          files_header: 'File',
          no_files: 'Nessun file caricato',
          add_files_prompt: 'Usa la barra laterale per aggiungere file DOCX',
          no_preview: 'Nessuna anteprima disponibile'
        },
        loading_window: {
          title: 'Caricamento DOCX...'
        }
      }
    }
  },
  nl: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Zijbalk wisselen',
          close: 'Sluiten (Esc)',
          close_sidebar: 'Zijbalk sluiten',
          search_placeholder: 'Zoek bestanden...',
          add_files: '+ Bestanden toevoegen',
          pages: 'Pagina\'s',
          close_pages_sidebar: 'Pagina\'s sluiten',
          page: 'Pagina',
          show_pages: 'Pagina\'s tonen',
          format_badge: 'DOCX',
          previous_page: 'Vorige pagina (←)',
          next_page: 'Volgende pagina (→)',
          zoom_out: 'Uitzoomen (-)',
          reset_zoom: 'Klik om zoom te resetten',
          zoom_in: 'Inzoomen (+)',
          start_presentation: 'Presentatie starten (Spatie/Pijlen om te navigeren)',
          exit_presentation: 'Afsluiten',
          present: 'Presenteren',
          print_docx: 'DOCX afdrukken',
          download_docx: 'DOCX downloaden',
          previous: 'Vorige (←)',
          next: 'Volgende (→)',
          files: 'Bestanden',
          files_header: 'Bestanden',
          no_files: 'Geen bestanden geladen',
          add_files_prompt: 'Gebruik de zijbalk om DOCX-bestanden toe te voegen',
          no_preview: 'Geen voorbeeld beschikbaar'
        },
        loading_window: {
          title: 'DOCX laden...'
        }
      }
    }
  },
  pt: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Alternar barra lateral',
          close: 'Fechar (Esc)',
          close_sidebar: 'Fechar barra lateral',
          search_placeholder: 'Pesquisar arquivos...',
          add_files: '+ Adicionar arquivos',
          pages: 'Páginas',
          close_pages_sidebar: 'Fechar páginas',
          page: 'Página',
          show_pages: 'Mostrar páginas',
          format_badge: 'DOCX',
          previous_page: 'Página anterior (←)',
          next_page: 'Próxima página (→)',
          zoom_out: 'Reduzir (-)',
          reset_zoom: 'Clique para redefinir o zoom',
          zoom_in: 'Ampliar (+)',
          start_presentation: 'Iniciar apresentação (Espaço/Setas para navegar)',
          exit_presentation: 'Sair',
          present: 'Apresentar',
          print_docx: 'Imprimir DOCX',
          download_docx: 'Baixar DOCX',
          previous: 'Anterior (←)',
          next: 'Próximo (→)',
          files: 'Arquivos',
          files_header: 'Arquivos',
          no_files: 'Nenhum arquivo carregado',
          add_files_prompt: 'Use a barra lateral para adicionar arquivos DOCX',
          no_preview: 'Nenhuma visualização disponível'
        },
        loading_window: {
          title: 'Carregando DOCX...'
        }
      }
    }
  },
  vi: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Chuyển thanh bên',
          close: 'Đóng (Esc)',
          close_sidebar: 'Đóng thanh bên',
          search_placeholder: 'Tìm kiếm tệp...',
          add_files: '+ Thêm tệp',
          pages: 'Trang',
          close_pages_sidebar: 'Đóng trang',
          page: 'Trang',
          show_pages: 'Hiển thị trang',
          format_badge: 'DOCX',
          previous_page: 'Trang trước (←)',
          next_page: 'Trang tiếp theo (→)',
          zoom_out: 'Thu nhỏ (-)',
          reset_zoom: 'Nhấp để đặt lại thu phóng',
          zoom_in: 'Phóng to (+)',
          start_presentation: 'Bắt đầu trình bày (Phím cách/Mũi tên để điều hướng)',
          exit_presentation: 'Thoát',
          present: 'Trình bày',
          print_docx: 'In DOCX',
          download_docx: 'Tải xuống DOCX',
          previous: 'Trước (←)',
          next: 'Tiếp theo (→)',
          files: 'Tệp',
          files_header: 'Tệp',
          no_files: 'Không có tệp nào được tải',
          add_files_prompt: 'Sử dụng thanh bên để thêm tệp DOCX',
          no_preview: 'Không có bản xem trước'
        },
        loading_window: {
          title: 'Đang tải DOCX...'
        }
      }
    }
  },
  tr: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Kenar çubuğunu aç/kapat',
          close: 'Kapat (Esc)',
          close_sidebar: 'Kenar çubuğunu kapat',
          search_placeholder: 'Dosyaları ara...',
          add_files: '+ Dosya ekle',
          pages: 'Sayfalar',
          close_pages_sidebar: 'Sayfaları kapat',
          page: 'Sayfa',
          show_pages: 'Sayfaları göster',
          format_badge: 'DOCX',
          previous_page: 'Önceki sayfa (←)',
          next_page: 'Sonraki sayfa (→)',
          zoom_out: 'Uzaklaştır (-)',
          reset_zoom: 'Yakınlaştırmayı sıfırlamak için tıklayın',
          zoom_in: 'Yakınlaştır (+)',
          start_presentation: 'Sunumu başlat (Gezinmek için Boşluk/Ok tuşları)',
          exit_presentation: 'Çık',
          present: 'Sun',
          print_docx: 'DOCX yazdır',
          download_docx: 'DOCX indir',
          previous: 'Önceki (←)',
          next: 'Sonraki (→)',
          files: 'Dosyalar',
          files_header: 'Dosyalar',
          no_files: 'Yüklenen dosya yok',
          add_files_prompt: 'DOCX dosyaları eklemek için kenar çubuğunu kullanın',
          no_preview: 'Önizleme mevcut değil'
        },
        loading_window: {
          title: 'DOCX yükleniyor...'
        }
      }
    }
  },
  ru: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Переключить боковую панель',
          close: 'Закрыть (Esc)',
          close_sidebar: 'Закрыть боковую панель',
          search_placeholder: 'Поиск файлов...',
          add_files: '+ Добавить файлы',
          pages: 'Страницы',
          close_pages_sidebar: 'Закрыть страницы',
          page: 'Страница',
          show_pages: 'Показать страницы',
          format_badge: 'DOCX',
          previous_page: 'Предыдущая страница (←)',
          next_page: 'Следующая страница (→)',
          zoom_out: 'Уменьшить (-)',
          reset_zoom: 'Нажмите, чтобы сбросить масштаб',
          zoom_in: 'Увеличить (+)',
          start_presentation: 'Начать презентацию (Пробел/Стрелки для навигации)',
          exit_presentation: 'Выход',
          present: 'Представить',
          print_docx: 'Печать DOCX',
          download_docx: 'Скачать DOCX',
          previous: 'Предыдущий (←)',
          next: 'Следующий (→)',
          files: 'Файлы',
          files_header: 'Файлы',
          no_files: 'Файлы не загружены',
          add_files_prompt: 'Используйте боковую панель для добавления файлов DOCX',
          no_preview: 'Предварительный просмотр недоступен'
        },
        loading_window: {
          title: 'Загрузка DOCX...'
        }
      }
    }
  },
  ar: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'تبديل الشريط الجانبي',
          close: 'إغلاق (Esc)',
          close_sidebar: 'إغلاق الشريط الجانبي',
          search_placeholder: 'البحث عن الملفات...',
          add_files: '+ إضافة ملفات',
          pages: 'الصفحات',
          close_pages_sidebar: 'إغلاق الصفحات',
          page: 'صفحة',
          show_pages: 'إظهار الصفحات',
          format_badge: 'DOCX',
          previous_page: 'الصفحة السابقة (←)',
          next_page: 'الصفحة التالية (→)',
          zoom_out: 'تصغير (-)',
          reset_zoom: 'انقر لإعادة تعيين التكبير',
          zoom_in: 'تكبير (+)',
          start_presentation: 'بدء العرض التقديمي (مسافة/أسهم للتنقل)',
          exit_presentation: 'خروج',
          present: 'عرض',
          print_docx: 'طباعة DOCX',
          download_docx: 'تنزيل DOCX',
          previous: 'السابق (←)',
          next: 'التالي (→)',
          files: 'الملفات',
          files_header: 'الملفات',
          no_files: 'لا توجد ملفات محملة',
          add_files_prompt: 'استخدم الشريط الجانبي لإضافة ملفات DOCX',
          no_preview: 'لا توجد معاينة متاحة'
        },
        loading_window: {
          title: 'جارٍ تحميل DOCX...'
        }
      }
    }
  },
  th: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'สลับแถบด้านข้าง',
          close: 'ปิด (Esc)',
          close_sidebar: 'ปิดแถบด้านข้าง',
          search_placeholder: 'ค้นหาไฟล์...',
          add_files: '+ เพิ่มไฟล์',
          pages: 'หน้า',
          close_pages_sidebar: 'ปิดหน้า',
          page: 'หน้า',
          show_pages: 'แสดงหน้า',
          format_badge: 'DOCX',
          previous_page: 'หน้าก่อนหน้า (←)',
          next_page: 'หน้าถัดไป (→)',
          zoom_out: 'ย่อออก (-)',
          reset_zoom: 'คลิกเพื่อรีเซ็ตการซูม',
          zoom_in: 'ขยายเข้า (+)',
          start_presentation: 'เริ่มการนำเสนอ (Space/ลูกศรเพื่อนำทาง)',
          exit_presentation: 'ออก',
          present: 'นำเสนอ',
          print_docx: 'พิมพ์ DOCX',
          download_docx: 'ดาวน์โหลด DOCX',
          previous: 'ก่อนหน้า (←)',
          next: 'ถัดไป (→)',
          files: 'ไฟล์',
          files_header: 'ไฟล์',
          no_files: 'ไม่มีไฟล์ที่โหลด',
          add_files_prompt: 'ใช้แถบด้านข้างเพื่อเพิ่มไฟล์ DOCX',
          no_preview: 'ไม่มีตัวอย่างให้ดู'
        },
        loading_window: {
          title: 'กำลังโหลด DOCX...'
        }
      }
    }
  },
  ja: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'サイドバーを切り替え',
          close: '閉じる (Esc)',
          close_sidebar: 'サイドバーを閉じる',
          search_placeholder: 'ファイルを検索...',
          add_files: '+ ファイルを追加',
          pages: 'ページ',
          close_pages_sidebar: 'ページを閉じる',
          page: 'ページ',
          show_pages: 'ページを表示',
          format_badge: 'DOCX',
          previous_page: '前のページ (←)',
          next_page: '次のページ (→)',
          zoom_out: '縮小 (-)',
          reset_zoom: 'クリックしてズームをリセット',
          zoom_in: '拡大 (+)',
          start_presentation: 'プレゼンテーションを開始 (スペース/矢印でナビゲート)',
          exit_presentation: '終了',
          present: 'プレゼント',
          print_docx: 'DOCXを印刷',
          download_docx: 'DOCXをダウンロード',
          previous: '前へ (←)',
          next: '次へ (→)',
          files: 'ファイル',
          files_header: 'ファイル',
          no_files: 'ファイルが読み込まれていません',
          add_files_prompt: 'サイドバーを使用してDOCXファイルを追加',
          no_preview: 'プレビューが利用できません'
        },
        loading_window: {
          title: 'DOCXを読み込み中...'
        }
      }
    }
  },
  zh: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: '切换侧边栏',
          close: '关闭 (Esc)',
          close_sidebar: '关闭侧边栏',
          search_placeholder: '搜索文件...',
          add_files: '+ 添加文件',
          pages: '页面',
          close_pages_sidebar: '关闭页面',
          page: '页面',
          show_pages: '显示页面',
          format_badge: 'DOCX',
          previous_page: '上一页 (←)',
          next_page: '下一页 (→)',
          zoom_out: '缩小 (-)',
          reset_zoom: '点击重置缩放',
          zoom_in: '放大 (+)',
          start_presentation: '开始演示 (空格/箭头导航)',
          exit_presentation: '退出',
          present: '演示',
          print_docx: '打印 DOCX',
          download_docx: '下载 DOCX',
          previous: '上一个 (←)',
          next: '下一个 (→)',
          files: '文件',
          files_header: '文件',
          no_files: '未加载文件',
          add_files_prompt: '使用侧边栏添加 DOCX 文件',
          no_preview: '无预览可用'
        },
        loading_window: {
          title: '正在加载 DOCX...'
        }
      }
    }
  },
  id: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Alihkan bilah sisi',
          close: 'Tutup (Esc)',
          close_sidebar: 'Tutup bilah sisi',
          search_placeholder: 'Cari file...',
          add_files: '+ Tambah file',
          pages: 'Halaman',
          close_pages_sidebar: 'Tutup halaman',
          page: 'Halaman',
          show_pages: 'Tampilkan halaman',
          format_badge: 'DOCX',
          previous_page: 'Halaman sebelumnya (←)',
          next_page: 'Halaman berikutnya (→)',
          zoom_out: 'Perkecil (-)',
          reset_zoom: 'Klik untuk mengatur ulang zoom',
          zoom_in: 'Perbesar (+)',
          start_presentation: 'Mulai presentasi (Spasi/Panah untuk navigasi)',
          exit_presentation: 'Keluar',
          present: 'Sajikan',
          print_docx: 'Cetak DOCX',
          download_docx: 'Unduh DOCX',
          previous: 'Sebelumnya (←)',
          next: 'Berikutnya (→)',
          files: 'File',
          files_header: 'File',
          no_files: 'Tidak ada file yang dimuat',
          add_files_prompt: 'Gunakan bilah sisi untuk menambahkan file DOCX',
          no_preview: 'Tidak ada pratinjau tersedia'
        },
        loading_window: {
          title: 'Memuat DOCX...'
        }
      }
    }
  },
  sv: {
    viewers: {
      docx: {
        editor: {
          toggle_sidebar: 'Växla sidofält',
          close: 'Stäng (Esc)',
          close_sidebar: 'Stäng sidofält',
          search_placeholder: 'Sök filer...',
          add_files: '+ Lägg till filer',
          pages: 'Sidor',
          close_pages_sidebar: 'Stäng sidor',
          page: 'Sida',
          show_pages: 'Visa sidor',
          format_badge: 'DOCX',
          previous_page: 'Föregående sida (←)',
          next_page: 'Nästa sida (→)',
          zoom_out: 'Zooma ut (-)',
          reset_zoom: 'Klicka för att återställa zoom',
          zoom_in: 'Zooma in (+)',
          start_presentation: 'Starta presentation (Mellanslag/Pilar för navigering)',
          exit_presentation: 'Avsluta',
          present: 'Presentera',
          print_docx: 'Skriv ut DOCX',
          download_docx: 'Ladda ner DOCX',
          previous: 'Föregående (←)',
          next: 'Nästa (→)',
          files: 'Filer',
          files_header: 'Filer',
          no_files: 'Inga filer laddade',
          add_files_prompt: 'Använd sidofältet för att lägga till DOCX-filer',
          no_preview: 'Ingen förhandsvisning tillgänglig'
        },
        loading_window: {
          title: 'Laddar DOCX...'
        }
      }
    }
  }
};

// Register translations with i18n
Object.keys(resources).forEach((lang) => {
  i18n.addResourceBundle(lang, 'translation', resources[lang], true, true);
});

export { resources };
export type { DOCXViewerTranslations };

