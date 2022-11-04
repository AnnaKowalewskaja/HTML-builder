const fs = require('fs');
const path = require('node:path');


// fs.readdir(path.join(__dirname,'secret-folder'),{ withFileTypes: true }).forEach(el => {
//     console.log(el);
// });

fs.readdir(path.join(__dirname, 'secret-folder'),
    (err, files) => {
        if (err) {
            console.log(err);
        } else {
            files.forEach(file => {
                fs.stat(path.join(__dirname, 'secret-folder', file), function (err, stats) {
                    if (!stats.isDirectory()) {
                        let fileExtension = path.extname(file).slice(1, file.length);
                        let fileName = file.substring(0, file.indexOf(fileExtension) - 1);
                        console.log(`${fileName} - ${fileExtension} - ${(stats["size"]/1024).toFixed(0)}kb`);
                    }
                });
            });
        }
    });


