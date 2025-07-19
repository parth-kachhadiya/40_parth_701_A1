const fs = require('fs');

const folderName = 'demo_folder';
if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log(`Folder '${folderName}' created.`);
}

const filePath = `${folderName}/example.txt`;
fs.writeFileSync(filePath, 'This is the initial content.\n');
console.log('File created and written.');

fs.appendFileSync(filePath, 'This is additional content.\n');
console.log('Content appended.');

const content = fs.readFileSync(filePath, 'utf-8');
console.log('File Content:\n', content);

const newPath = `${folderName}/renamed.txt`;
fs.renameSync(filePath, newPath);
console.log(`File renamed to: ${newPath}`);

fs.unlinkSync(newPath);
console.log('File deleted.');

