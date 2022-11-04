const fs = require('fs');
const path = require('node:path');
const copyFile = require('node:fs/promises');

let startFolder = path.join(__dirname, 'files');
let finishFolder = path.join(__dirname, 'files-copy');

fs.mkdir(finishFolder, {
    recursive: true
}, (err) => {
    if (err) {
        return console.error(err);
    }
});

// fs.readdir(path.join(__dirname, 'files'), (err, files) => {
//     files.forEach(file => {
//         copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file),constants.COPYFILE_EXCL);
//         console.log('Complete!');

//     });
// });

fs.readdir(startFolder,
    (err, files) => {
        if (err) {
            console.log(err);
        } else {
            files.forEach(file => {
                let fileName = file;
                fs.copyFile(path.join(startFolder, file), path.join(finishFolder, fileName), (err) => {
                    if (err) {
                        console.log("Error Found:", err);
                    }
                });
            });
        }
    });


// fs.readdir(startFolder,
//     (err, files) => {
//         if (err) {
//             console.log(err);
//         } else {
//             files.forEach(file => {
//                 fs.stat(startFolder, function (err, stats) {
//                     let fileName = file;
//                     fs.copyFile(path.join(startFolder, file), path.join(finishFolder, fileName), (err) => {
//                         if (err) {
//                             console.log("Error Found:", err);
//                         }
//                     });
//                 });
//             });
//         }
//     });