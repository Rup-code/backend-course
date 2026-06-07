import { createReadStream, createWriteStream } from 'node:fs';
import net from 'node:net';

const socket = net.createConnection({ host: '192.168.31.219', port: 4000 });

// process.stdin.on('data', (input) => {
//   const inputString = input.toString().trim();
//   console.log(inputString);
//   if (inputString === 'send') {
//     const readStream = createReadStream('D:\\test.mp4');

//     readStream.pipe(socket);
//     readStream.on('end', () => {
//       console.log('File ended');
//     });
//   }
// });

const writeStream = createWriteStream(
  'C:\\Users\\Biswarup Maji\\Desktop\\testing.mp4',
);
socket.pipe(writeStream);

// const readStream = createReadStream('D:\\test.mp4');

// readStream.pipe(socket);
// readStream.on('end', () => {
//   console.log('File ended');
// });

socket.on('error', () => {
  console.log('Server Lost');
});

// setTimeout(() => {
//   socket.write('Hii');
//   // socket.end();
// }, 2000);

// socket.on('data', (chunk) => {
//   const isEmpty = writeStream.write(chunk);

//   if (!isEmpty) {
//     socket.pause();
//   }

//   writeStream.once('drain', () => {
//     socket.resume();
//   });

//   // console.log(chunk.toString());
// });
