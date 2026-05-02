import fs from 'node:fs';
// import { Readable } from 'node:stream';

// console.log(Readable);

const readStream = fs.createReadStream('chars.txt', {
  highWaterMark: 4,
  encoding: 'utf-8',
});

// readStream.setEncoding('utf-8');

readStream.on('data', (chunk) => {
  console.log(chunk);
  // readStream.destroy(new Error('tesing error'));
});

// readStream.on('close', () => {
//   console.log('closed');
// });

// readStream.on('end', () => {
//   console.log('ended');
// });

// readStream.on('error', (err) => {
//   console.log({ err });
// });

// readStream.on('open', (data) => {
//   console.log('opened', data);
// });

// readStream.on('ready', (data) => {
//   console.log('ready', data);
// });
