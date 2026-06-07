import net from 'node:net';

const socket = net.createConnection({ host: '192.168.31.219', port: 4000 });

process.stdin.on('data', (input) => {
  socket.write(input);
});

socket.on('error', () => {
  console.log('Server Lost');
});

// setTimeout(() => {
//   socket.write('Hii');
//   // socket.end();
// }, 2000);

socket.on('data', (chunk) => {
  console.log(chunk.toString().trim());
});
