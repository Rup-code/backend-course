function digitsToNumber(digits) {
  return digits.reduce((acc, cur, i) => acc + cur * Math.pow(10, i), 0);
}

const digitsList1 = [2, 4, 6, 5];
const digitsList2 = [7, 3, 2];

console.log(digitsToNumber(digitsList1));
console.log(digitsToNumber(digitsList2));

const num1 =
  digitsList1[0] * 1 +
  digitsList1[1] * 10 +
  digitsList1[2] * 100 +
  digitsList1[3] * 1000;

const num2 = digitsList2[0] * 1 + digitsList2[1] * 10 + digitsList2[2] * 100;
// console.log(num1, num2);
