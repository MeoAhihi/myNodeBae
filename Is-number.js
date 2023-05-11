function IsNumber(input) {
  if (typeof input == 'number') {
    return true;
  }
  if (typeof input == "string") {
    return !isNaN(input) && !isNaN(parseFloat(input));
  }
}

const prompt = require("prompt-sync")();

var a = prompt("What's the number? ");

console.log(IsNumber(a));
