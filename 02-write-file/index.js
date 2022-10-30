const readline = require('node:readline');
const {
    stdin: input,
    stdout: output
} = require('node:process');

const fs = require('fs');

const rl = readline.createInterface({
    input,
    output
});


fs.open('text.txt', 'w', (err) => {
    console.log('i open');
});

 
rl.on('SIGINT', () => {
    rl.question('Hello! You can write. ', (answer) => {
        if (answer.match(/^exit?$/i)) {
            rl.close();
        } else {
            fs.writeFile('text.txt', answer, (err) => {
                if (err) {
                    console.log('Error');
                }
                console.log('i write!');
            });
        }
    });
});