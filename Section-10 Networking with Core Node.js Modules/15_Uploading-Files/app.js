import { open } from 'node:fs/promises';
import net from 'node:net';

const server = net.createServer(async (socket) => {
  socket.write('HTTP/1.1 200 OK\n\n');
  const fileHandler = await open('uploaded-file.txt', 'w');
  const writeStream = fileHandler.createWriteStream();

  
  socket.on('data', (chunk) => {
    writeStream.write(chunk);
    if (/WebKitFormBoundary.+--/.test(chunk.toString())) {
      socket.end('Got the data');
    }
  });

  socket.on('close', () => {
    console.log(socket.remoteAddress, ': Client disconnected');
  });

  socket.on('error', () => {
    console.log('Client Lost');
  });
  console.log('Client Connected', socket.remoteAddress);
});

server.listen(4000, '0.0.0.0', () => {
  console.log('Server started on port 4000');
});