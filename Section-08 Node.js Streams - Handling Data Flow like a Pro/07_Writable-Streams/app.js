import fs, { appendFile } from 'node:fs';

// By default readStream highwatermark is 64KB and writeStream highwatermark is 16KB
// const writeStream = fs.createWriteStream('file.txt');

// writeStream.write('abc');
// writeStream.write('123');
// writeStream.write('ABC');

console.time();
const readStream = fs.createReadStream('D:\\Big World.mkv', {
  highWaterMark: 1 * 1024 * 1024,
});

const writeStream = fs.createWriteStream('Big-world.mkv');

readStream.on('data', (chunkBuffer) => {
  // Time 5s
  // Memory 80MB
  // CPU 8%
  writeStream.write(chunkBuffer);

  // for appendFile time memory cpu
  // Time 10s
  // Memory 70MB
  // CPU 7%
  // fs.appendFileSync('Big-world.mkv', chunkBuffer);
});

readStream.on('end', () => {
  console.timeEnd();
});
