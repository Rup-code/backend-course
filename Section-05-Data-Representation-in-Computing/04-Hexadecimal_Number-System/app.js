// Decimal => Base 10 {10 to 9}
// Octal => Base 8 {0 to 7}
// Hexadecimal => Base 16 {0 to 9, a=10, b=11, c=12, d=13, e=14, f=15}
// Binary => Base 2

function digitsToNumber(digits, radix = 10) {
  let num = 0;
  digits.forEach((el, i) => {
    let value;
    if (typeof el === 'string') {
      value = parseInt(el, radix);
    } else value = el;
    num += value * Math.pow(radix, i);
  });
  return num;
}

const digitsList1 = [2, 4, 6, 5];
const digitsList2 = [7, 3, 'a'];

// const decimalNum = 2115;
const hexNum1 = '0x843';
const hexNum2 = '0x45a';
const hexNum3 = '0xafc';

const decimalNum2 = 1114;

console.log(parseInt(hexNum2, 16));
console.log(parseInt(hexNum3, 16));
console.log(decimalNum2.toString(16));

console.log(digitsToNumber(digitsList2, 16));
