import fs from 'node:fs';

const writeStream = fs.createWriteStream('file.txt', { highWaterMark: 4 });

// writeStream.write('a');
// writeStream.write('a');
// writeStream.write('a');
// writeStream.write('a');
console.log(writeStream.writableLength);
writeStream.end('HI, i am rup');
console.log(writeStream.writableLength);

// writeStream.on('open', (fd) => {
//   console.log('fd', fd);
// });

writeStream.on('close', () => {
  console.log('closed');
});

writeStream.on('finish', () => {
  console.log('Finished');
});
