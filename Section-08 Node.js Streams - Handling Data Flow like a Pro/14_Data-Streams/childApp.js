import fs from 'node:fs';

const readStream = fs.createReadStream('D:\\Big World.mkv');

readStream.pipe(process.stdout);

// const writeStream = fs.createWriteStream('output.txt');
// process.stdin.on('data', (chunk) => {
//   writeStream.write(chunk);
// });

// console.log('child App');
