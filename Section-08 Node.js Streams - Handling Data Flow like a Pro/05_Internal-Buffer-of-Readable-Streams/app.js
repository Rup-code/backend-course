import fs from 'node:fs';

const readStream = fs.createReadStream('chars.txt', { highWaterMark: 4 });

// readStream.on('data', (chunk) => {
//   console.log(chunk);
// });

readStream.on('readable', () => {
  console.log(readStream.readableLength);
  console.log(readStream.read(3));
  console.log(readStream.readableLength);
});

// 1. Highwater mark value is equal to Internal buffer size
// 2. Internal buffer jo hota hai , that is nothing but , the data which gets loaded in chunks
// 3. `readable`  is a event which we can add to readStream , to check if any internal buffer data has come or not
// 4. `readStream.read()` If the stream has data ready, `.read()` will return a chunk (usually a `Buffer`).
// 5. If no more data is available, it returns `null`.
