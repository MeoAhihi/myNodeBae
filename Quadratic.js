const prompt = require("prompt-sync")();

function Quadratic(a, b, c) {
  if (a === 0) {
    return null;
  }
  delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    return "no solution";
  } else if (delta === 0) {
    return "1 solution: x = " + -b / (2 * a);
  } else {
    return (
      "2 solutions: x1 = " +
      (-b - Math.sqrt(delta)) / (2 * a) +
      "; x2 = " +
      (-b + Math.sqrt(delta)) / (2 * a)
    );
  }
}

function Adapter(a, b, c) {
  a = +a;
  b = +b;
  c = +c;
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return "Coefficients aren't number!";
  }
  result = Quadratic(a, b, c);
  if (!result) {
    return "Not Quadratic";
  }
  return result;
}

console.log("Ax2 + Bx+ C = 0");
a = prompt("A = ");
b = prompt("B = ");
c = prompt("C = ");
console.log(`${a}x2 + ${b}x + ${c} = 0`);
console.log(Adapter(a, b, c));
