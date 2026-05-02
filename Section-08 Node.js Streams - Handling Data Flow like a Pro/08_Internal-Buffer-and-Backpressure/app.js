import fs from 'node:fs';

const writeStream = fs.createWriteStream('file.txt', { highWaterMark: 4 });

let i = 1;
const write1000A = function () {
  while (i <= 1000) {
    console.log(writeStream.writableLength);
    const isEmpty = writeStream.write('a');
    // console.log(isEmpty);
    i++;
    if (!isEmpty) {
      break;
    }
  }
};
write1000A();

writeStream.on('drain', () => {
  console.log('drain ', writeStream.writableLength);

  write1000A();
});

// setTimeout(() => {
//   console.log(writeStream.writableLength);
// }, 10);

// console.log(writeStream.writableLength);
// let isEmpty = writeStream.write('a');
// console.log(isEmpty);
// console.log(writeStream.writableLength);
// isEmpty = writeStream.write('a');
// console.log(isEmpty);
// console.log(writeStream.writableLength);
// isEmpty = writeStream.write('a');
// console.log(isEmpty);
// console.log(writeStream.writableLength);
// isEmpty = writeStream.write('a');
// console.log(isEmpty);

// console.log(writeStream.writableHighWaterMark);
