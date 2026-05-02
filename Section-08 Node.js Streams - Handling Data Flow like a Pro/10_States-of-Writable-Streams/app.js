import fs from 'node:fs';

const writeStream = fs.createWriteStream('file.txt', { highWaterMark: 4 });

// writeStream.cork();
writeStream.write('hi');
writeStream.write('hi');
writeStream.write('hi');
writeStream.write('hi');

writeStream.end();
console.log(writeStream.writableEnded);
console.log(writeStream.writableLength);
console.log(writeStream.errored);

setTimeout(() => {
  console.log(writeStream.writableFinished);
  console.log(writeStream.writableLength);
}, 10);

writeStream.on('finish', () => {
  console.log(writeStream.writableFinished);
});
// console.log(writeStream.writableCorked);
// writeStream.uncork()
// console.log(writeStream.writableCorked);

// console.log(writeStream.writable);
// writeStream.end();
// console.log(writeStream.writable);
