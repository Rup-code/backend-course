const fs = require('fs');
const path = require('path')

process.chdir('./tmp');
const directoryPath = process.cwd();

console.log(directoryPath);
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    console.log(file);
  });
});