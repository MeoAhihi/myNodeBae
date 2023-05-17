const prompt = require('prompt-sync')();

array = []
while (true) {
    number = +prompt('Insert number: ')
    if (isNaN(number)) {
        break
    }
    array.push(number)
}

sum = 0
for (let index = 0; index < array.length; index++) {
    sum += array[index];
}
console.log('The sum is ', sum);