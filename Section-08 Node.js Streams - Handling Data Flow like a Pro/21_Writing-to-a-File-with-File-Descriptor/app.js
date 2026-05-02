import fs from 'node:fs';

const fd = fs.openSync('text.txt', 'w');
// const buffer = Buffer.from('123');

// fs.write(fd, 'ট্রা', (err, bytesWritten, writtenData) => {
//   console.log(bytesWritten);
//   console.log(writtenData);
// });

const bytesWritten = fs.writeSync(fd, 'ট্রা');
console.log(bytesWritten);