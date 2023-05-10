const prompt = require('prompt-sync')();

const w = prompt('What is the width of regtangle? ')

const h = prompt('What is the height of regtangle? ')

console.log(`Regtangle has Perimeter ${((+w)+(+h))*2} and Area ${w*h}`)

