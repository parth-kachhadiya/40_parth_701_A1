const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

const folderToZip = path.join(__dirname, 'data');
const outputZipPath = path.join(__dirname, 'data.zip');

const output = fs.createWriteStream(outputZipPath);
const archive = archiver('zip', {
  zlib: { level: 9 } 
});

output.on('close', () => {
  console.log(`✅ Zipping complete. Total bytes: ${archive.pointer()}`);
});
archive.on('error', err => {
  throw err;
});

archive.pipe(output);

archive.directory(folderToZip, false);

archive.finalize();
