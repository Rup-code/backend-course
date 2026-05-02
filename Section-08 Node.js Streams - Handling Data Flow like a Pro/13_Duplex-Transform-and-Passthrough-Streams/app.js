import fs from 'node:fs';

import {
  Readable,
  Writable,
  Duplex,
  Transform,
  PassThrough,
} from 'node:stream';

const readStream = fs.createReadStream('D:/Big World.mkv', {
  highWaterMark: 1 * 1024 * 1024,
});
const writeStream = fs.createWriteStream('Big-world.mkv', {
  highWaterMark: 1 * 1024 * 1024,
});

readStream.pipe(writeStream);
