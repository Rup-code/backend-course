import fs from 'node:fs';

const readStream = fs.createReadStream('chars.txt', { highWaterMark: 4 });
// fs.writeFileSync('abc.txt', '');
// let readCount = 0;
readStream.on('data', (chunk) => {
  // console.log(readStream.bytesRead);
  // console.log(readStream.readableHighWaterMark);

  // if (readCount === 0) fs.writeFileSync('abc.txt', chunk);
  const { bytesRead, readableHighWaterMark } = readStream;

  if (readableHighWaterMark === bytesRead) fs.writeFileSync('abc.txt', chunk);
  else {
    fs.appendFileSync('abc.txt', chunk);
  }
  readStream.pause();
  setTimeout(() => {
    readStream.resume();
  }, 200);
  // readCount++;

  // console.log(readStream.readableFlowing);
  // console.log(readStream.readableEnded);
});

// readStream.on('end', () => {
//   console.log(readStream.readableFlowing);
//   console.log(readStream.readableEnded);
//   console.log(readStream.isPaused());
// });

readStream.on('resume', () => {
  console.log('stream resumed');
});

readStream.on('pause', () => {
  console.log('stream paused');
});
