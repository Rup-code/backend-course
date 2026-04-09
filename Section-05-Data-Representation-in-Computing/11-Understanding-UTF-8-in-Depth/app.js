import fs from 'fs/promises';

const contentBuffer = await fs.readFile('text.txt');

// let binaryString = '';
// contentBuffer.forEach((el) => {
//   binaryString += el.toString(2) + ' ';
// });
// console.log(binaryString);

let result = new Array(contentBuffer.length);

for (let i = 0; i < contentBuffer.length; i++) {
  result[i] = contentBuffer[i].toString(2);
}

// console.log(result.join(' '));

console.dir(contentBuffer);
console.log(contentBuffer);
