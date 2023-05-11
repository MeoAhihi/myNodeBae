const prompt = require('prompt-sync')()

var a = prompt("What's the number? ")
a = +a // parse into Number

if (a % 2) {
    console.log(a + ' is odd');
} else {
    console.log(a + ' is even');
}