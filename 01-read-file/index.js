const fs = require('fs');
const path = require('node:path');

let readText = fs.ReadStream(path.join(__dirname,'text.txt'),'utf-8');

readText.on('data',function(chunk){
    console.log(chunk);
});

