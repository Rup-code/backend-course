import fs from 'node:fs';
import { pipeline } from 'node:stream';

console.time();
const readStream = fs.createReadStream('D:/Big World.mkv', {
  highWaterMark: 1 * 1024 * 1024,
});
const writeStream = fs.createWriteStream('Big-world.mkv', {
  highWaterMark: 1 * 1024 * 1024,
});

pipeline(readStream, writeStream, (err) => {
  console.log(err);
});

// readStream.pipe(writeStream);

// readStream.on('error', (err) => {
//   console.log(err);
// });

setTimeout(() => {
  readStream.destroy('khotom');
}, 2000);

setInterval(() => {
  console.log('HII');
}, 200);

// readStream.on('data', (chunk) => {
//   const isEmpty = writeStream.write(chunk);

//   if (!isEmpty) {
//     readStream.pause();
//   }
// });

// writeStream.on('drain', () => {
//   readStream.resume();
// });

readStream.on('end', () => {
  console.timeEnd();
});
