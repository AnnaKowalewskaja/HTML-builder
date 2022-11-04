const { stdin, stdout } = process;
const path = require('node:path');
const fs = require('fs');

let readText = fs.createWriteStream(path.join(__dirname,'text.txt'),'utf-8');


stdout.write("Привет! Напиши текст и я его запишу.\nВведи 'exit' или нажми Ctrl + C чтобы закрыть меня\n");

stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        process.exit();
    }
    readText.write(data);
});

process.on('exit', () => stdout.write('\nЗакрываюсь:)'));
process.on('SIGINT', () => process.exit());