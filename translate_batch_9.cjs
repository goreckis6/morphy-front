const fs = require('fs');
const path = require('path');

const components = [
  { file: 'Sample3ds.tsx', formatKey: '3ds', icon: 'Box' },
  { file: 'Sample3gp.tsx', formatKey: '3gp', icon: 'Video' },
  { file: 'SampleAac.tsx', formatKey: 'aac', icon: 'Music' },
  { file: 'SampleIcns.tsx', formatKey: 'icns', icon: 'Image' },
  { file: 'SampleAce.tsx', formatKey: 'ace', icon: 'Archive' },
  { file: 'SampleGz.tsx', formatKey: 'gz', icon: 'Archive' },
  { file: 'SampleH.tsx', formatKey: 'h', icon: 'Code' },
  { file: 'SampleHdr.tsx', formatKey: 'hdr', icon: 'Image' },
  { file: 'SampleHex.tsx', formatKey: 'hex', icon: 'FileText' },
  { file: 'SampleHpp.tsx', formatKey: 'hpp', icon: 'Code' }
];

const samplesDir = path.join(__dirname, 'src', 'components', 'Samples');

components.forEach(({ file, formatKey, icon }) => {
  const filePath = path.join(samplesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add imports if not present
  if (!content.includes("import { useTranslation }")) {
    // Extract current icon from existing imports
    const iconMatch = content.match(/import \{ Download, ([\w, ]+), Clock, CheckCircle, ArrowLeft \} from 'lucide-react';/);
    const currentIcon = iconMatch ? iconMatch[1] : icon;
    
    content = content.replace(
      /import React, \{ useState \} from 'react';\nimport \{ Helmet \} from 'react-helmet-async';\nimport \{ Header \} from '\.\.\/Header';\nimport \{ Footer \} from '\.\.\/Footer';\nimport \{ Download, [\w, ]+, Clock, CheckCircle, ArrowLeft \} from 'lucide-react';\nimport \{ getStorageUrl \} from '\.\.\/\.\.\/config\/storage';/,
      `import React, { useState } from 'react';\nimport { Helmet } from 'react-helmet-async';\nimport { Header } from '../Header';\nimport { Footer } from '../Footer';\nimport { Download, ${icon}, Clock, CheckCircle, ArrowLeft } from 'lucide-react';\nimport { getStorageUrl } from '../../config/storage';\nimport { useTranslation } from 'react-i18next';\nimport { getLocalizedUrl } from '../../i18n';\nimport { usePathLanguageSync } from '../../hooks/usePathLanguageSync';\nimport { useNavigate } from 'react-router-dom';\nimport '../../locales/samplePages';`
    );
  }

  // Add hooks after component declaration if not present
  if (!content.includes("const { t, i18n } = useTranslation();")) {
    content = content.replace(
      /export default function (\w+)\(\) \{\n  const \[downloadingIndex, setDownloadingIndex\] = useState<number \| null>\(null\);/,
      `export default function $1() {\n  const { t, i18n } = useTranslation();\n  const navigate = useNavigate();\n  usePathLanguageSync(i18n);\n  const [downloadingIndex, setDownloadingIndex] = useState<number | null>(null);`
    );
  }

  // Add formatKey and constants after sampleFiles array
  if (!content.includes(`const formatKey = '${formatKey}'`)) {
    const sampleFilesEndMatch = content.match(/(\];\s*\n\s*const handleDownload = async)/);
    if (sampleFilesEndMatch) {
      const replacement = `];\n\n  const formatKey = '${formatKey}';\n  const canonicalUrl = getLocalizedUrl(\`/samples/sample-\${formatKey}\`, i18n.language, true);\n\n  const pageJsonLd = {\n    "@context": "https://schema.org",\n    "@type": "WebPage",\n    "name": t(\`sample_page.formats.\${formatKey}.schema.name\`),\n    "url": canonicalUrl,\n    "description": t(\`sample_page.formats.\${formatKey}.schema.description\`),\n    "isPartOf": { "@id": "https://morphyhub.com#website" },\n    "publisher": { "@id": "https://morphyhub.com#organization" }\n  };\n\n  const handleBack = () => {\n    navigate(getLocalizedUrl('/', i18n.language));\n  };\n\n  const aboutItems = t('sample_page.common.about_items', { returnObjects: true }) as string[];\n\n  const handleDownload = async`;
      content = content.replace(sampleFilesEndMatch[1], replacement);
    }
  }

  // Remove old hardcoded pageJsonLd and handleBack if they exist
  const duplicatePatterns = [
    /  \};\n\n  const pageJsonLd = \{[\s\S]*?"name": "[^"]*",[\s\S]*?"url": "https:\/\/morphyhub\.com\/samples\/sample-[^"]*",[\s\S]*?"description": "[^"]*",[\s\S]*?"isPartOf": \{ "@id": "https:\/\/morphyhub\.com#website" \},[\s\S]*?"publisher": \{ "@id": "https:\/\/morphyhub\.com#organization" \}[\s\S]*?\};\n\n  const handleBack = \(\) => \{[\s\S]*?window\.location\.href = '\/';[\s\S]*?\};\n\n  return \(/g,
    /  \};\n\n  const pageJsonLd = \{[\s\S]*?"name": "[^"]*",[\s\S]*?"url": "https:\/\/morphyhub\.com\/samples\/sample-[^"]*",[\s\S]*?"description": "[^"]*",[\s\S]*?"isPartOf": \{ "@id": "https:\/\/morphyhub\.com#website" \},[\s\S]*?"publisher": \{ "@id": "https:\/\/morphyhub\.com#organization" \}[\s\S]*?\};\n\n  const handleBack = \(\) => \{[\s\S]*?navigate\(getLocalizedUrl\('\/', i18n\.language\)\);[\s\S]*?\};\n\n  return \(/g,
  ];

  duplicatePatterns.forEach(pattern => {
    content = content.replace(pattern, `  };\n\n  return (`);
  });

  // Replace Helmet meta tags with translations
  content = content.replace(
    /<title>([^<]*)<\/title>/,
    `<title>{t(\`sample_page.formats.\${formatKey}.meta.title\`)}</title>`
  );
  content = content.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content={t(\`sample_page.formats.\${formatKey}.meta.description\`)} />`
  );
  content = content.replace(
    /<meta name="keywords" content="[^"]*" \/>/,
    `<meta name="keywords" content={t(\`sample_page.formats.\${formatKey}.meta.keywords\`)} />`
  );

  // Replace og:title, og:description, og:url
  content = content.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content={t(\`sample_page.formats.\${formatKey}.meta.title\`)} />`
  );
  content = content.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content={t(\`sample_page.formats.\${formatKey}.hero.description\`)} />`
  );
  content = content.replace(
    /<meta property="og:url" content="https:\/\/morphyhub\.com\/samples\/sample-[^"]*" \/>/,
    `<meta property="og:url" content={canonicalUrl} />`
  );

  // Replace twitter:title and twitter:description
  content = content.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content={t(\`sample_page.formats.\${formatKey}.meta.title\`)} />`
  );
  content = content.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content={t(\`sample_page.formats.\${formatKey}.hero.description\`)} />`
  );

  // Replace canonical URL
  content = content.replace(
    /<link rel="canonical" href="https:\/\/morphyhub\.com\/samples\/sample-[^"]*" \/>/,
    `<link rel="canonical" href={canonicalUrl} />`
  );

  // Replace JSON-LD script tag
  content = content.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n                {JSON.stringify(pageJsonLd)}\n              </script>`
  );

  // Replace "Back to Home" button
  content = content.replace(
    /<span>Back to Home<\/span>/,
    `<span>{t('sample_page.common.back_button')}</span>`
  );

  // Replace hero title - match more flexibly
  content = content.replace(
    /<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">\s*([^<]+)\s*<\/h1>/,
    `<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">\n                    {t(\`sample_page.formats.\${formatKey}.hero.title\`)}\n                  </h1>`
  );

  // Replace hero description
  content = content.replace(
    /<p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">\s*([^<]+)\s*<\/p>/,
    `<p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">\n                    {t(\`sample_page.formats.\${formatKey}.hero.description\`)}\n                  </p>`
  );

  // Replace "File size:" label
  content = content.replace(
    /File size: <span className="font-medium text-gray-700">\{file\.displaySize\}<\/span>/,
    `{t('sample_page.common.file_size')} <span className="font-medium text-gray-700">{file.displaySize}</span>`
  );

  // Replace download button texts
  content = content.replace(
    /<span>Download<\/span>/g,
    `<span>{t('sample_page.common.download')}</span>`
  );
  content = content.replace(
    /<span>Download Now<\/span>/g,
    `<span>{t('sample_page.common.download_now')}</span>`
  );

  // Replace countdown text
  content = content.replace(
    /Download ready in \{countdown\}s\.\.\./g,
    `{t('sample_page.common.download_ready_in', { count: countdown })}`
  );
  content = content.replace(
    /Download ready in \{countdown\} second[s]?/g,
    `{t('sample_page.common.download_ready_in', { count: countdown })}`
  );

  // Replace "Download started" text
  content = content.replace(
    /Download started!/g,
    `{t('sample_page.common.download_started')}`
  );
  content = content.replace(
    /<span className="text-sm font-medium">Download started<\/span>/g,
    `<span className="text-sm font-medium">{t('sample_page.common.download_started')}</span>`
  );

  // Replace about section title
  content = content.replace(
    /<h3 className="text-lg font-semibold text-gray-900 mb-2">\s*About These Sample Files\s*<\/h3>/,
    `<h3 className="text-lg font-semibold text-gray-900 mb-2">\n                    {t('sample_page.common.about_title')}\n                  </h3>`
  );

  // Replace about description - match flexibly
  const aboutDescPattern = new RegExp(`<li>\\s*•\\s*These are test [^<]*${formatKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^<]*</li>`, 'i');
  content = content.replace(
    aboutDescPattern,
    `<li>• {t(\`sample_page.formats.\${formatKey}.about_description\`)}</li>`
  );

  // Replace about items list - need to find and replace hardcoded items
  // First, try to replace the entire ul with dynamic version
  const aboutUlPattern = /<ul className="space-y-2 text-sm sm:text-base text-gray-600">[\s\S]*?<\/ul>/;
  const aboutUlMatch = content.match(aboutUlPattern);
  if (aboutUlMatch && !aboutUlMatch[0].includes('aboutItems')) {
    content = content.replace(
      aboutUlPattern,
      `<ul className="space-y-2 text-sm sm:text-base text-gray-600">\n                    <li>• {t(\`sample_page.formats.\${formatKey}.about_description\`)}</li>\n                    {aboutItems && aboutItems.length > 0 && aboutItems.slice(1).map((item, idx) => (\n                      <li key={idx}>• {item}</li>\n                    ))}\n                  </ul>`
    );
  }

  // Replace features section titles and descriptions
  content = content.replace(
    /<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">\s*Multiple Sizes\s*<\/h3>/,
    `<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">\n                      {t('sample_page.common.features.multiple_sizes.title')}\n                    </h3>`
  );
  content = content.replace(
    /<p className="text-sm text-gray-600">\s*Test files ranging from 100 KB to 100 MB\s*<\/p>/,
    `<p className="text-sm text-gray-600">\n                      {t('sample_page.common.features.multiple_sizes.description')}\n                    </p>`
  );

  content = content.replace(
    /<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">\s*Free Download\s*<\/h3>/,
    `<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">\n                      {t('sample_page.common.features.free_download.title')}\n                    </h3>`
  );
  content = content.replace(
    /<p className="text-sm text-gray-600">\s*No registration or payment required\s*<\/p>/,
    `<p className="text-sm text-gray-600">\n                      {t('sample_page.common.features.free_download.description')}\n                    </p>`
  );
  content = content.replace(
    /<p className="text-sm text-gray-600">\s*All sample files are available for free download\s*<\/p>/,
    `<p className="text-sm text-gray-600">\n                      {t('sample_page.common.features.free_download.description')}\n                    </p>`
  );

  content = content.replace(
    /<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">\s*Safe & Tested\s*<\/h3>/,
    `<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">\n                      {t('sample_page.common.features.safe_tested.title')}\n                    </h3>`
  );
  content = content.replace(
    /<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">\s*Safe and Tested\s*<\/h3>/,
    `<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">\n                      {t('sample_page.common.features.safe_tested.title')}\n                    </h3>`
  );
  content = content.replace(
    /<p className="text-sm text-gray-600">\s*All files are safe and tested for compatibility\s*<\/p>/,
    `<p className="text-sm text-gray-600">\n                      {t('sample_page.common.features.safe_tested.description')}\n                    </p>`
  );
  content = content.replace(
    /<p className="text-sm text-gray-600">\s*All files are safe and tested before upload\s*<\/p>/,
    `<p className="text-sm text-gray-600">\n                      {t('sample_page.common.features.safe_tested.description')}\n                    </p>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Translated ${file}`);
});

console.log('\n✅ All batch 9 components translated!');

