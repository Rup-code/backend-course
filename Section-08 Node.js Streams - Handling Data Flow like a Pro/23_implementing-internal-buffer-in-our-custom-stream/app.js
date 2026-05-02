import fs from 'node:fs';

console.time();
const buffer = Buffer.allocUnsafe(16 * 1024);
// console.log(buffer.write(`abc`));
// console.log(buffer);
// console.log(buffer.write(`def`, 3));
// console.log(buffer);

// Time 250ms old
// Time 20ms with custon internal buffer
const fd = fs.openSync('numbers.txt', 'w');

let totalBytesWrittenInBuffer = 0;
let remainingStr = '';

for (let i = 1; i <= 100000; i++) {
  let str = `${i}, `;
  str = remainingStr + str;

  const bytesWritten = buffer.write(
    str, //, 3,
    totalBytesWrittenInBuffer,
  );
  remainingStr = '';

  const writtenBytesDiff = str.length - bytesWritten;
  if (writtenBytesDiff !== 0) {
    remainingStr += str.slice(bytesWritten);
  }

  totalBytesWrittenInBuffer += bytesWritten;
  if (totalBytesWrittenInBuffer === buffer.byteLength) {
    fs.writeSync(fd, buffer);
    totalBytesWrittenInBuffer = 0;
  }

  // console.log(buffer);
  // console.log(bytesWritten);

  // fs.writeSync(fd, `${i}, `);
}
fs.writeSync(fd, buffer.subarray(0, totalBytesWrittenInBuffer));
fs.writeSync(fd, remainingStr);

fs.closeSync(fd);
console.timeEnd();
