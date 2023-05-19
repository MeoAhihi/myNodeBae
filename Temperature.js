var prmt = require('prompt-sync')();
function CtoF(celcius) {
    return celcius * 9 / 5 + 32;
}
function FtoC(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
var input, output;
input = prmt('Convert Celcius -> Fahrenheit: ');
output = CtoF(input);
console.log("".concat(input, "*C = ").concat(output, "*F"));
input = prmt('Convert Fahrenheit -> Celcius: ');
output = FtoC(input);
console.log("".concat(input, "*F = ").concat(output, "*C"));
