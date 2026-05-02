import fs from 'node:fs';

// const content = await fsPromise.readFile('chars.txt');
// Time 3.5s
// Memory 1100 MB
// CPU 6.6%
// const content = await fsPromise.readFile(
//   'D:\\CHROME DOWNLOAD\\Web series\\kalki.mkv',
// );

// await fsPromise.writeFile('kalki.mkv', content);

// console.log(content.byteLength);
// console.log(content.toString());
// -----------------Streams---------------

// Time 5s
// Memory 50 MB
// CPU 7%

let readCount = 0;
const stats = fs.statSync('D:\\Big World.mkv');
const totalSize = stats.size;
const readStream = fs.createReadStream('D:\\Big World.mkv', {
  highWaterMark: 1 * 1024 * 1024,
});

console.time();
let copiedBytes = 0;
readStream.on('data', (chunkBuffer) => {
  fs.appendFileSync('Big-world.mkv', chunkBuffer);
  readCount++;
  copiedBytes += chunkBuffer.byteLength;
  const progress = (copiedBytes / totalSize) * 100;
  console.log(`${progress.toFixed(2)}%`);
});

readStream.on('end', () => {
  console.log(readCount);
  console.timeEnd();
});

// const readStream = fs.createReadStream('chars.txt', {
//   highWaterMark: 16,
// });

// let readCount = 0;
// readStream.on('data', (chunk) => {
//   console.log(chunk.byteLength);
//   readCount++;
// });

// readStream.on('end', () => {
//   console.log(readCount);
// });
