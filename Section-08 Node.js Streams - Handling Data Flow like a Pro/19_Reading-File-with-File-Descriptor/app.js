import fs from 'node:fs';

const fd = fs.openSync('text.txt');

const readBuffer = Buffer.alloc(10);

fs.read(
  fd,
  { buffer: readBuffer, position: 2, length: 5, offset: 2 },
  (err, bytesRead, bufferData) => {
    // console.log(err);
    console.log(bytesRead);
    console.log(bufferData.toString());
    console.log(bufferData);
    console.log(bufferData.byteLength);
  },
);
