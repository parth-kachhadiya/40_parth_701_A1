const fs = require('fs');
const util = require('util');
const path = require('path');

const unlinkAsync = util.promisify(fs.unlink);

const fileToDelete = 'text.txt'; 
const filePath = path.join(__dirname, fileToDelete);

unlinkAsync(filePath)
  .then(() => {
    console.log(`File ${fileToDelete} deleted successfully!`);
  })
  .catch((err) => {
    console.error('Error deleting file:', err);
  });
