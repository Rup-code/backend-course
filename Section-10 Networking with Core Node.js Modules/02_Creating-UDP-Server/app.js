import dgram from 'node:dgram'; //UDP

const socket = dgram.createSocket('udp4');

socket.on('message', (message, remoteAddress) => {
  console.log(message.toString());
  console.log(remoteAddress);
  socket.send(
    'Message received successfully on server.',
    remoteAddress.port,
    remoteAddress.address,
  );
});
// socket.on('listening', () => {
//   console.log(socket.address());
//   console.log('listening');
// });

// TO CREATE A SERVER
socket.bind({ port: 4000 }, () => {
  console.log(socket.address());
  const address = socket.address();
  console.log(`listening on port ${address.port}`);
});

// socket.send('Hi from laptop', 3000, '192.168.31.175');
