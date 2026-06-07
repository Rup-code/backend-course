import dgram from 'node:dgram'; //UDP
import { createReadStream } from 'node:fs';
import { readFile } from 'node:fs/promises';

const socket = dgram.createSocket('udp4');

socket.on('message', (message, remoteAddress) => {
  console.log(message.toString());
  console.log(remoteAddress);
  socket.close();
});

// const content = await readFile('D:\\num.txt');
// const readStream = createReadStream('D:\\numbers.txt', {
const readStream = createReadStream('D:\\test.mp4', {
  highWaterMark: 1000,
});

readStream.on('data', (chunk) => {
  socket.send(chunk, 4000, '192.168.31.219', () => {
    // console.log('Message send');
  });
});
readStream.on('end', () => {
  socket.send('EOF', 4000, '192.168.31.219', () => {
    console.log('Last Message send');
  });
});
