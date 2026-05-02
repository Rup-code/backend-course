import fs from 'node:fs';

console.time();
const readStream = fs.createReadStream('D:/Big World.mkv', {
  highWaterMark: 1 * 1024 * 1024,
});
const writeStream = fs.createWriteStream('Big-world.mkv', {
  highWaterMark: 1 * 1024 * 1024,
});

readStream.pipe(writeStream);

setTimeout(() => {
  readStream.unpipe(writeStream);
}, 4000);

writeStream.on('pipe', () => {
  console.log('piped');
});

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
