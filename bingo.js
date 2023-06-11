module.exports = (SIZE) => {
  let NUMBERS = [];
  for (let i = 3; i < 10; i++) {
    NUMBERS.push(i + 10, i * 10);
  }

  if (SIZE ** 2 > NUMBERS.length) throw Error;

  //shuffle array
  NUMBERS.sort((a, b) => 0.5 - Math.random());

  let result = [];

  for (let i = 0; i < SIZE; i++) {
    var temp = [];
    for (let j = 0; j < SIZE; j++) {
      temp.push(NUMBERS.pop());
    }
    result.push(temp);
  }
  return result;
};
