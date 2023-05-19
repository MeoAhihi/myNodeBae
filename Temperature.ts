const prmt = require('prompt-sync')();

function CtoF(celcius : number) {
    return celcius * 9/5 + 32
}

function FtoC(fahrenheit:number) {
    return (fahrenheit - 32) * 5/9
}

var input: number, output: number

input = prmt('Convert Celcius -> Fahrenheit: ')
output = CtoF(input)
console.log(`${input}*C = ${output}*F`);

input = prmt('Convert Fahrenheit -> Celcius: ')
output = FtoC(input)
console.log(`${input}*F = ${output}*C`);