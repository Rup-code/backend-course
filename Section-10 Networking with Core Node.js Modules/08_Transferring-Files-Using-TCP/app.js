import { createReadStream, createWriteStream } from 'node:fs';
import net from 'node:net';

process.stdin.on('data', (input) => {
  const inputString = input.toString();
  const [clientIndex, ...message] = inputString.split(' ');

  if (!Number.isNaN(+clientIndex)) {
    clientList[+clientIndex]?.write(message.join(' '));
  } else {
    clientList.forEach((socket) => {
      socket.write(input);
    });
  }
  // if (typeof +clientIndex === 'number') {
  //   clientList[+clientIndex].write(input.slice(2));
  // } else {
  //   clientList.forEach((socket) => {
  //     socket.write(input);
  //   });
  // }
});

const clientList = [];

const server = net.createServer((socket) => {
  clientList.push(socket);
  console.log(clientList.length);

  // const readStream = createReadStream('test.mp4');
  // readStream.pipe(socket);

  // readStream.on('end', () => {
  //   console.log('File ended');
  // });

  const writeStream = createWriteStream('test.mp4');
  socket.pipe(writeStream);

  // socket.on('data', (chunk) => {
  // writeStream.write(chunk);
  // console.log('got data');
  // console.log(chunk.toString());
  // clientList.forEach((socket) => {
  //   socket.write(chunk);
  // });
  // });

  socket.on('close', () => {
    console.log(socket.remoteAddress, ':Client disconnected');
  });

  socket.on('error', () => {
    console.log('Client Lost');
  });

  console.log('Client Connect', socket.remoteAddress);
});

server.listen(4000, '0.0.0.0', () => {
  console.log('Server started on port 4000');
});
