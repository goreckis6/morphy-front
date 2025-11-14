const fs = require('fs');
const path = require('path');

const components = [
  { file: 'SampleLzh.tsx', formatKey: 'lzh', icon: 'Archive', color: 'purple' },
  { file: 'SampleLha.tsx', formatKey: 'lha', icon: 'Archive', color: 'purple' },
  { file: 'SampleLua.tsx', formatKey: 'lua', icon: 'FileSpreadsheet', color: 'purple' },
  { file: 'SampleLog.tsx', formatKey: 'log', icon: 'FileSpreadsheet', color: 'purple' },
  { file: 'SampleLas.tsx', formatKey: 'las', icon: 'Box', color: 'purple' },
  { file: 'SampleLaz.tsx', formatKey: 'laz', icon: 'Archive', color: 'purple' },
  { file: 'SampleKmz.tsx', formatKey: 'kmz', icon: 'Archive', color: 'purple' },
  { file: 'SampleKml.tsx', formatKey: 'kml', icon: 'FileSpreadsheet', color: 'purple' },
  { file: 'SampleKt.tsx', formatKey: 'kt', icon: 'FileSpreadsheet', color: 'purple' },
  { file: 'SampleJwt.tsx', formatKey: 'jwt', icon: 'FileSpreadsheet', color: 'purple' }
];

const samplesDir = path.join(__dirname, 'src', 'components', 'Samples');

components.forEach(({ file, formatKey, icon, color }) => {
  const filePath = path.join(samplesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add imports
  if (!content.includes("import { useTranslation } from 'react-i18next'")) {
    content = content.replace(
      /import { getStorageUrl } from '\.\.\/\.\.\/config\/storage';/,
      `import { getStorageUrl } from '../../config/storage';
import { useTranslation } from 'react-i18next';
import { getLocalizedUrl } from '../../i18n';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';
import { useNavigate } from 'react-router-dom';
import '../../locales/samplePages';`
    );
  }

  // Add translation hooks after component declaration
  if (!content.includes('const { t, i18n } = useTranslation()')) {
    content = content.replace(
      /export default function (\w+)\(\) \{/,
      `export default function $1() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  usePathLanguageSync(i18n);`
    );
  }

  // Replace old pageJsonLd and handleBack with new ones after handleDownloadNow
  const handleDownloadNowEnd = content.indexOf('  };', content.indexOf('const handleDownloadNow'));
  if (handleDownloadNowEnd > -1) {
    const insertPoint = handleDownloadNowEnd + 4;
    
    // Check if formatKey already exists
    if (!content.includes(`const formatKey = '${formatKey}'`)) {
      const newCode = `

  const formatKey = '${formatKey}';
  const canonicalUrl = getLocalizedUrl(\`/samples/sample-\${formatKey}\`, i18n.language, true);

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t(\`sample_page.formats.\${formatKey}.schema.name\`),
    "url": canonicalUrl,
    "description": t(\`sample_page.formats.\${formatKey}.schema.description\`),
    "isPartOf": { "@id": "https://morphyhub.com#website" },
    "publisher": { "@id": "https://morphyhub.com#organization" }
  };

  const handleBack = () => {
    navigate(getLocalizedUrl('/', i18n.language));
  };

  const aboutItems = t('sample_page.common.about_items', { returnObjects: true }) as string[];

`;
      content = content.slice(0, insertPoint) + newCode + content.slice(insertPoint);
    }
  }

  // Remove old pageJsonLd and handleBack (hardcoded versions)
  content = content.replace(
    /const pageJsonLd = \{[\s\S]*?const handleBack = \(\) => \{[\s\S]*?window\.location\.href = '\/';[\s\S]*?\};/g,
    ''
  );

  // Replace Helmet content
  content = content.replace(
    /<title>([^<]+)<\/title>/,
    `<title>{t(\`sample_page.formats.\${formatKey}.meta.title\`)}</title>`
  );
  content = content.replace(
    /<meta name="description" content="([^"]+)" \/>/,
    `<meta name="description" content={t(\`sample_page.formats.\${formatKey}.meta.description\`)} />`
  );
  content = content.replace(
    /<meta name="keywords" content="([^"]+)" \/>/,
    `<meta name="keywords" content={t(\`sample_page.formats.\${formatKey}.meta.keywords\`)} />`
  );
  content = content.replace(
    /<meta property="og:title" content="([^"]+)" \/>/,
    `<meta property="og:title" content={t(\`sample_page.formats.\${formatKey}.meta.title\`)} />`
  );
  content = content.replace(
    /<meta property="og:description" content="([^"]+)" \/>/,
    `<meta property="og:description" content={t(\`sample_page.formats.\${formatKey}.hero.description\`)} />`
  );
  content = content.replace(
    /<meta property="og:url" content="([^"]+)" \/>/,
    `<meta property="og:url" content={canonicalUrl} />`
  );
  content = content.replace(
    /<meta name="twitter:title" content="([^"]+)" \/>/,
    `<meta name="twitter:title" content={t(\`sample_page.formats.\${formatKey}.meta.title\`)} />`
  );
  content = content.replace(
    /<meta name="twitter:description" content="([^"]+)" \/>/,
    `<meta name="twitter:description" content={t(\`sample_page.formats.\${formatKey}.hero.description\`)} />`
  );
  content = content.replace(
    /<link rel="canonical" href="([^"]+)" \/>/,
    `<link rel="canonical" href={canonicalUrl} />`
  );

  // Replace Back to Home button
  content = content.replace(
    /<span>Back to Home<\/span>/,
    `<span>{t('sample_page.common.back_button')}</span>`
  );

  // Replace hero title and description - need to find the exact pattern
  const heroTitleMatch = content.match(/>\s*([A-Z][^<]+?)\s*Sample Files\s*<\/h1>/);
  if (heroTitleMatch) {
    content = content.replace(
      />\s*([A-Z][^<]+?)\s*Sample Files\s*<\/h1>/,
      `>{t(\`sample_page.formats.\${formatKey}.hero.title\`)}</h1>`
    );
  }

  // Replace hero description
  content = content.replace(
    />\s*Download free ([A-Z][^<]+?)for testing\. Multiple file sizes available[^<]*<\/p>/,
    `>{t(\`sample_page.formats.\${formatKey}.hero.description\`)}</p>`
  );

  // Replace File size label
  content = content.replace(
    /File size:/g,
    `{t('sample_page.common.file_size')}`
  );

  // Replace Download ready in message
  content = content.replace(
    /Download ready in \{countdown\}s\.\.\./g,
    `{t('sample_page.common.download_ready_in', { count: countdown })}`
  );
  content = content.replace(
    /Download ready in (\d+)s\.\.\./g,
    `{t('sample_page.common.download_ready_in', { count: countdown })}`
  );

  // Replace Download Now button
  content = content.replace(
    /<span>Download Now<\/span>/g,
    `<span>{t('sample_page.common.download_now')}</span>`
  );

  // Replace Download started
  content = content.replace(
    /<span className="text-sm font-medium">Download started<\/span>/g,
    `<span className="text-sm font-medium">{t('sample_page.common.download_started')}</span>`
  );

  // Replace Download button
  content = content.replace(
    /<span>Download<\/span>/g,
    `<span>{t('sample_page.common.download')}</span>`
  );

  // Replace About section title
  content = content.replace(
    /<h3 className="text-lg font-semibold text-gray-900 mb-2">\s*About These Sample Files\s*<\/h3>/,
    `<h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t('sample_page.common.about_title')}
            </h3>`
  );

  // Replace about items - find the ul section and replace
  const aboutItemsPattern = /<ul className="space-y-2 text-sm sm:text-base text-gray-600">[\s\S]*?<\/ul>/;
  const aboutItemsMatch = content.match(aboutItemsPattern);
  if (aboutItemsMatch) {
    content = content.replace(
      aboutItemsPattern,
      `<ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li>• {t(\`sample_page.formats.\${formatKey}.about_description\`)}</li>
                    {aboutItems && aboutItems.length > 0 && aboutItems.slice(1).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
            </ul>`
    );
  }

  // Replace features section
  content = content.replace(
    /<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">\s*Multiple Sizes\s*<\/h3>[\s\S]*?<p className="text-sm text-gray-600">\s*Test files ranging from 100 KB to 100 MB\s*<\/p>/,
    `<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {t('sample_page.common.features.multiple_sizes.title')}
                    </h3>
              <p className="text-sm text-gray-600">
                      {t('sample_page.common.features.multiple_sizes.description')}
                    </p>`
  );

  content = content.replace(
    /<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">\s*Free Download\s*<\/h3>[\s\S]*?<p className="text-sm text-gray-600">\s*No registration or payment required\s*<\/p>/,
    `<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {t('sample_page.common.features.free_download.title')}
                    </h3>
              <p className="text-sm text-gray-600">
                      {t('sample_page.common.features.free_download.description')}
                    </p>`
  );

  content = content.replace(
    /<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">\s*Safe & Tested\s*<\/h3>[\s\S]*?<p className="text-sm text-gray-600">\s*All files are safe and tested for compatibility\s*<\/p>/,
    `<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {t('sample_page.common.features.safe_tested.title')}
                    </h3>
              <p className="text-sm text-gray-600">
                      {t('sample_page.common.features.safe_tested.description')}
                    </p>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Translated ${file}`);
});

console.log('\n✅ All 10 components translated!');


