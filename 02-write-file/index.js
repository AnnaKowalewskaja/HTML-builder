const process = require('process');
const path = require('node:path');
const fs = require('fs');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// readline.close();

readline.question(`Hi!You can write.`, (text) => {
    fs.writeFile(path.join(__dirname,'text.txt'), text, () => {
        
        console.log('i write!');
    });
    console.log(`You text: ${text}!`);
   
});