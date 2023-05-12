const prompt = require("prompt-sync")();

const a = +prompt("a = ");
const b = +prompt("b = ");


if (isNaN(a) || isNaN(b)) {
    console.log('not numbers');
} else {
    console.log(
        "a + b = " + (a + b) + "\n" +
        "a - b = " + (a - b) + "\n" +
        "a * b = " + (a * b) + "\n" +
        "a / b = " + (a / b) + "\n" +
        "a ^ b = " + (a ** b) + "\n" +
        "a mod b = " + (a % b)
        );
}

