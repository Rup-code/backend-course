import dgram from 'node:dgram'; //UDP
import { createWriteStream } from 'node:fs';
import { writeFile } from 'node:fs/promises';

const socket = dgram.createSocket('udp4');

const writeStream = createWriteStream('numbers.mp4');
socket.on('message', async (message, remoteAddress) => {
  // await writeFile('abc.txt', message);

  if (message.toString() === 'EOF') {
    socket.send(
      'File uploaded successfully on the server.',
      remoteAddress.port,
      remoteAddress.address,
    );
  } else {
    writeStream.write(message);
  }

  // console.log(remoteAddress);
  // socket.send(
  //   'Message received successfully on server.',
  //   remoteAddress.port,
  //   remoteAddress.address,
  // );
});

socket.bind({ port: 4000 }, () => {
  console.log(socket.address());
  const address = socket.address();
  console.log(`listening on port ${address.port}`);
});
