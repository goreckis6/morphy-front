# Generate all converter routes from ConversionPages folder

$oldPath = "C:\Users\admin_test\Desktop\morphy_copy\src\components\ConversionPages"
$newPath = "C:\Users\admin_test\Desktop\front\morphy-front\src\routes\converters"

# Get all converter files except BaseConverter
$converters = Get-ChildItem $oldPath -Filter *.tsx | Where-Object { $_.Name -ne 'BaseConverter.tsx' }

Write-Host "Found $($converters.Count) converters to generate"

foreach ($converter in $converters) {
    # Parse converter name: CSVToDOCXConverter.tsx -> csv-to-docx
    $name = $converter.Name -replace 'Converter\.tsx$', ''
    
    # Convert CamelCase to kebab-case
    $kebabName = $name -creplace '([A-Z])', '-$1' `
                       -replace '^-', '' `
                       -replace 'To-', '-to-' `
                       -replace '([a-z])([A-Z])', '$1-$2' `
                       | ForEach-Object { $_.ToLower() }
    
    # Extract input and output formats
    if ($name -match '^([A-Z]+)To([A-Z]+)$') {
        $inputFormat = $matches[1].ToUpper()
        $outputFormat = $matches[2].ToUpper()
    } else {
        Write-Host "Skipping $name - couldn't parse format"
        continue
    }
    
    # Create directory
    $routePath = Join-Path $newPath $kebabName
    New-Item -ItemType Directory -Path $routePath -Force | Out-Null
    
    # Generate index.tsx content
    $content = @"
import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = ${'$'}(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(${'`'}${'$'}{apiUrl}/api/convert/${inputFormat.ToLower()}/${outputFormat.ToLower()}${'`'}, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Conversion failed');
    }

    return await response.blob();
  });

  return (
    <BaseConverter
      title="${inputFormat} to ${outputFormat} Converter"
      description="Convert your ${inputFormat} files to ${outputFormat} format quickly and securely. 100% free, no registration required."
      inputFormat="${inputFormat}"
      outputFormat="${outputFormat}"
      inputExtensions={['.${inputFormat.ToLower()}']}
      outputExtensions={['.${outputFormat.ToLower()}']}
      onConvert={handleConvert}
      features={[
        'Fast ${inputFormat} to ${outputFormat} conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert ${inputFormat} documents to ${outputFormat}',
        'Prepare files for sharing',
        'Archive documents in ${outputFormat} format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: '${inputFormat} to ${outputFormat} Converter - Free Online Tool | FormiPeek',
  meta: [
    {
      name: 'description',
      content: 'Convert ${inputFormat} to ${outputFormat} online for free. Fast, secure, and easy ${inputFormat} to ${outputFormat} conversion tool. No registration required.',
    },
    {
      property: 'og:title',
      content: '${inputFormat} to ${outputFormat} Converter - FormiPeek',
    },
    {
      property: 'og:description',
      content: 'Free online ${inputFormat} to ${outputFormat} converter. Fast, secure, and easy to use.',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: '${inputFormat} to ${outputFormat} Converter - FormiPeek',
    },
    {
      name: 'twitter:description',
      content: 'Convert ${inputFormat} to ${outputFormat} online for free.',
    },
  ],
};
"@
    
    # Write file
    $indexPath = Join-Path $routePath "index.tsx"
    $content | Out-File -FilePath $indexPath -Encoding UTF8
    
    Write-Host "✓ Generated: $kebabName"
}

Write-Host "`nDone! Generated routes in: $newPath"
