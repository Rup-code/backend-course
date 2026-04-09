import fs from 'fs/promises';

const contentBuffer = await fs.readFile('text.txt');

// console.log(contentBuffer);

function bufferToString(buffer) {
  // let res = '';
  // buffer.forEach((el) => {
  //   res += String.fromCharCode(el);
  //   console.log(res);
  // });
  // return res;

  // let result = new Array(buffer.length);
  // for (let i = 0; i < buffer.length; i++) {
  //   result[i] = String.fromCharCode(buffer[i]);
  // }
  // return result.join('');

  return Array.from(buffer)
    .map((byte) => String.fromCharCode(byte))
    .join('');
}

console.log(bufferToString(contentBuffer));
