const fs = require('fs');
const path = require('path');

const iconsDir = path.resolve(__dirname, 'src/components/icons');
const indexPath = path.join('src/index.js');

fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('Failed to read icons directory:', err);
    process.exit(1);
  }

  // Filter to .js or .jsx files, but exclude index.js itself
  const iconFiles = files.filter(
    (file) =>
      (file.endsWith('.js') || file.endsWith('.jsx')) &&
      file !== 'index.js'
  );

  // Generate export lines
  const exportLines = iconFiles
    .map((file) => {
      // Remove file extension
      const iconName = path.basename(file, path.extname(file));

      // Optionally, convert to PascalCase if your filenames aren't already
      // For simplicity, assume files are already named properly

      return `export { default as ${iconName} } from './${iconName}';`;
    })
    .join('\n');

  // Write to index.js
  fs.writeFile(indexPath, exportLines + '\n', (writeErr) => {
    if (writeErr) {
      console.error('Failed to write index.js:', writeErr);
      process.exit(1);
    }
    console.log('index.js generated successfully!');
  });
});
