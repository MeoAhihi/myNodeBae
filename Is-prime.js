input = 1253516513
isprime = true
for (let index = 2; index*index < input; index++) {
    if (input % index == 0) {
        isprime = false
        console.log('Failed at', index);
        break
    }
}

if (isprime == true) {
    console.log(input, 'is a prime number');
} else {
    console.log(input, 'is not a prime number');
}