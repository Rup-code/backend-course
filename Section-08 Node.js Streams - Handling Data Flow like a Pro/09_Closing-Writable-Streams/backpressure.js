import fs from 'node:fs';

// By default readStream highwatermark is 64KB and writeStream highwatermark is 16KB
// const writeStream = fs.createWriteStream('file.txt');

// writeStream.write('abc');
// writeStream.write('123');
// writeStream.write('ABC');

console.time();
const readStream = fs.createReadStream('D:\\Big World.mkv', {
  highWaterMark: 1 * 1024 * 1024,
});

const writeStream = fs.createWriteStream('Big-world.mkv', {
  highWaterMark: 1 * 1024 * 1024,
});

readStream.on('data', (chunkBuffer) => {
  // Time 5s
  // Memory 80MB
  // CPU 8%

  // Time after handling backpressure
  // Time 6s
  // Memory 50MB
  // CPU 8%

  const isEmpty = writeStream.write(chunkBuffer);
  if (!isEmpty) {
    console.log(writeStream.writableLength);
    readStream.pause();
  }

  // for appendFile time memory cpu
  // Time 10s
  // Memory 70MB
  // CPU 7%
  // fs.appendFileSync('Big-world.mkv', chunkBuffer);
});

writeStream.on('drain', () => {
  readStream.resume();
});

readStream.on('end', () => {
  console.timeEnd();
});
