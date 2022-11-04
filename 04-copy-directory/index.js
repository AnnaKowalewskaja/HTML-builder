const fs = require('fs');
const path = require('node:path');

fs.copyFile(path.join(__dirname, 'files'), path.join(__dirname,'files-copy'), err => {
  
   console.log('Файл успешно скопирован');
});
