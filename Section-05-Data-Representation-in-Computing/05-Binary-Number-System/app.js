// Decimal => Base 10 {10 to 9}
// Octal => Base 8 {0 to 7}
// Hexadecimal => Base 16 {0 to 9, a=10, b=11, c=12, d=13, e=14, f=15}
// Binary => Base 2 {0 and 1}

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

const octalNum1 = 0o13;
const octalNum2 = 0o237;
const octalNum3 = 0o5642;
const hexNum1 = '0x843';
const hexNum2 = '0x45a';
const hexNum3 = '0xafc';
const binNum1 = '0b10';

console.log(parseInt('11', 2));
