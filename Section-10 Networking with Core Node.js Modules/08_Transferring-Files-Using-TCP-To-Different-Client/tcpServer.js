import net from 'node:net';

process.stdin.on('data', (input) => {
  const inputString = input.toString().trim();
  const [clientIndex, ...message] = inputString.split(' ');
  // const index = +clientIndex;

  if (!Number.isNaN(+clientIndex)) {
    clientList[+clientIndex]?.write(message.join(' '));
  } else {
    clientList.forEach((socket) => {
      socket.write(input);
    });
  }
});

const clientList = [];
let clientId = 1;

const server = net.createServer((socket) => {
  socket.userName = `Client-${clientId++}`;

  clientList.push(socket);
  console.log(clientList.length);

  socket.on('data', (chunk) => {
    const message = `${socket.userName}: ${chunk.toString().trim()}`;

    console.log(message);
    clientList.forEach((client) => {
      if (client !== socket) {
        client.write(message);
      }
    });
  });

  socket.on('close', () => {
    console.log(socket.remoteAddress, ':Client disconnected');
  });

  socket.on('error', () => {
    console.log('Client Lost');
  });

  console.log(`${socket.userName}: Connect`, socket.remoteAddress);
});

server.listen(4000, '0.0.0.0', () => {
  console.log('Server started on port 4000');
});
