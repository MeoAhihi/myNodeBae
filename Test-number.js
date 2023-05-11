function TestNumber(a) {
  if (!Number.isInteger(a)) {
    return a + " is decimal";
  }
  if (a % 2) {
    // 1 <=> true
    return a + " is odd";
  }
  return a + " is even";
}

const prompt = require("prompt-sync")();

var a = prompt("What's the number? ");
a = +a; // parse into Number

console.log(TestNumber(a));
