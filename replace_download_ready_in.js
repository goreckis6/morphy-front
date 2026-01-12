const fs = require('fs');
const path = require('path');
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.isFile() && full.endsWith('.tsx')) {
      let text = fs.readFileSync(full, 'utf8');
      const replaced = text.replace(/download_ready_in', { count: countdown }/g, "download_ready_in', { countdown }");
      if (replaced !== text) {
        fs.writeFileSync(full, replaced, 'utf8');
      }
    }
  }
}
walk('src/components/Samples');
