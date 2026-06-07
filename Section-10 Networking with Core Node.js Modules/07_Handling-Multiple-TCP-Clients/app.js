import net from 'node:net';

process.stdin.on('data', (input) => {
  const inputString = input.toString();
  const [clientIndex, ...message] = inputString.split(' ');
  // const index = +clientIndex;

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
  socket.on('data', (chunk) => {
    console.log(chunk.toString());
    clientList.forEach((socket) => {
      socket.write(chunk);
    });
    // socket.write('Got your message bro.');
    // socket.end();
  });

  socket.on('close', () => {
    console.log(socket.remoteAddress, ':Client disconnected');
  });

  socket.on('error', () => {
    console.log('Client Lost');
  });
  // console.log(socket.address());
  // console.log(socket.remoteAddress);
  // console.log(socket.remotePort);
  // console.log(socket.remoteFamily);
  console.log('Client Connect', socket.remoteAddress);
});

server.listen(4000, '0.0.0.0', () => {
  console.log('Server started on port 4000');
});
