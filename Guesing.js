const prompt = require("prompt-sync")();

const x = 10 + Math.round(5 * Math.random());

console.log("GUESSING GAME!");
const a = parseInt(prompt("Please guess the number: "));

console.log(Guessing(a, x));

function Guessing(input, hidden_num) {
    input = parseInt(input)
    if (isNaN(input)) {
        return 'Are you kidding me?'
    }
    if (input === hidden_num) {
        return 'Wow! you guessed it right!'
    }
    if (hidden_num > input) {
        return 'The magic number is bigger than your number\nBetter luck next time'
    }
    return 'The magic number is smaller than your number\nBetter luck next time'
}