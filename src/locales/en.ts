// Basic English translations - placeholder
// TODO: Load full translations from original i18n.ts

export const enTranslations = {
  // Common
  'common.free': 'Free',
  'common.upload': 'Upload',
  'common.download': 'Download',
  'common.convert': 'Convert',
  'common.converting': 'Converting...',
  'common.choose_files': 'Choose Files',
  'common.single_file': 'Single File',
  'common.batch_convert': 'Batch Convert',
  'common.back_to_home': 'Back to Home',
  'common.back_to_converters': 'Back to Converters',
  'common.start_converting': 'Start Converting Now',
  'common.convert_more': 'Convert More Files',
  'common.convert_another': 'Convert Another',
  'common.convert_more_files': 'Convert More Files',
  'common.start_converting_now': 'Start Converting Now',
  'common.batch_conversion_complete': 'Batch Conversion Complete',
  'common.batch_success_count': 'Successfully converted {{successful}} out of {{total}} files',
  'common.convert_files': 'Convert Files',
  'common.selected_files': 'Selected Files ({{count}})',
  'common.conversion_complete': 'Conversion Complete',
  'common.lightning_fast': 'Lightning Fast',
  'common.secure': 'Secure',
  'common.no_registration': 'No Registration Required',
  'common.preview': 'Preview',
  'common.total_size': 'Total size: {{current}} of {{max}} allowed.',
  
  // Validation messages
  'validation.single_file_limit': 'Single file limit: 100.00 MB per file.',
  'validation.batch_info': 'Batch conversion supports up to 20 files, 100.00 MB per file, 100.00 MB total.',
  'validation.total_size': 'Total size: {{current}} of {{max}} allowed.',
  'validation.file_too_large': 'File "{{filename}}" is too large ({{fileSize}}). Maximum allowed size is {{maxSize}}.',
  'validation.too_many_files': 'Too many files selected ({{count}}). Maximum allowed is {{max}}.',
  'validation.batch_too_large': 'Total batch size {{totalSize}} exceeds the limit of {{maxSize}}.',
  'validation.batch_size_warning': 'Batch size is getting close to the 100MB limit. Consider processing fewer files for better performance.',
  
  // Features
  'features.lightning_fast': 'Lightning Fast',
  'features.100_free': '100% Free',
  'features.no_registration': 'No Registration',
  'features.secure': '100% Secure',
} as const;
