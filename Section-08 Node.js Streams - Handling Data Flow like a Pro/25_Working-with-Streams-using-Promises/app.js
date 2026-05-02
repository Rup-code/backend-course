import fsPromise from 'node:fs/promises';

// const fileHAndle = await fsPromise.open('text.txt', 'w+');
const readFileHAndle = await fsPromise.open('D:\\Big World.mkv');
const writeFileHAndle = await fsPromise.open('Big-World.mkv', 'w');

const readStream = readFileHAndle.createReadStream();
const writeStream = writeFileHAndle.createWriteStream();

readStream.pipe(writeStream);

// readStream.on('data', (chunk) => {
//   console.log(chunk);
// });

// const writeStream = fileHAndle.createWriteStream();
// writeStream.write('hii');
