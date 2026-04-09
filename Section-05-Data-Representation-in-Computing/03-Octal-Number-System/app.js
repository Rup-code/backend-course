function digitsToNumber(digits, radix = 10) {
  return digits.reduce((acc, cur, i) => acc + cur * Math.pow(radix, i), 0);
}

const digitsList1 = [2, 4, 6, 5];
const digitsList2 = [7, 3, 2];
const octalNum1 = 0o13;
const octalNum2 = 0o237;
const octalNum3 = 0o5642;
// console.log(octalNum1);
// console.log(octalNum2);
// console.log(octalNum3);
console.log(digitsToNumber(digitsList1, 8));
console.log(digitsToNumber(digitsList2, 8));

const num1 =
  digitsList1[0] * 1 +
  digitsList1[1] * 10 +
  digitsList1[2] * 100 +
  digitsList1[3] * 1000;

const num2 = digitsList2[0] * 1 + digitsList2[1] * 10 + digitsList2[2] * 100;
// console.log(num1, num2);

const decNum = 123; //decimal number
console.log(decNum.toString(8));
console.log(parseInt('123', 8)); //octal number
