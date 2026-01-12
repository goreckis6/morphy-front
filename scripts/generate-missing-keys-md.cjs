const fs = require('fs');
const path = require('path');

function formatDateLocal(date) {
  try {
    const d = new Date(date);
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(d.getDate())}.${pad(d.getMonth()+1)}.${d.getFullYear()}, ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  } catch {
    return new Date().toISOString();
  }
}

(function main() {
  const jsonPath = path.resolve(__dirname, '..', 'csv-converters-translation-report.json');
  const outPath = path.resolve(__dirname, '..', 'MISSING-KEYS-DETAILED.md');

  if (!fs.existsSync(jsonPath)) {
    console.error(`JSON report not found: ${jsonPath}`);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const { generatedAt, converters, languages, detailedMissingKeys } = data;

  let md = '';
  md += '# DETAILED MISSING KEYS BY LANGUAGE AND CONVERTER\n';
  md += `Generated: ${formatDateLocal(generatedAt)}\n\n`;
  md += `Source: csv-converters-translation-report.json (generatedAt: ${generatedAt})\n\n`;

  const nameByCode = new Map(languages.map(l => [l.code, l.name]));

  for (const lang of languages) {
    const code = lang.code;
    const name = nameByCode.get(code) || code;
    md += `## ${name.toUpperCase()} (${code})\n\n`;

    for (const conv of converters) {
      const details = detailedMissingKeys[code][conv];
      if (!details) continue;
      const miss = details.missing || [];
      const englishCount = details.englishCount ?? '—';
      const missingCount = miss.length;

      md += `### ${conv}\n`;
      md += `Missing: ${missingCount} / ${englishCount} keys\n\n`;

      if (missingCount === 0) {
        md += '- None\n\n';
      } else {
        // If absolutely everything is missing (langCount === 0), avoid overwhelming lists: show first 100 then note truncation.
        const langCount = details.langCount ?? 0;
        const listLimit = langCount === 0 && missingCount > 120 ? 120 : missingCount; // cap huge empties
        for (let i = 0; i < listLimit; i++) {
          md += `- ${miss[i]}\n`;
        }
        if (listLimit < missingCount) {
          md += `\n... and ${missingCount - listLimit} more keys omitted for brevity.\n`;
        }
        md += '\n';
      }
    }

    md += `---\n\n`;
  }

  fs.writeFileSync(outPath, md, 'utf8');
  console.log(`Wrote: ${outPath}`);
})();
