import { createReadStream, createWriteStream, read } from 'node:fs';
import { open } from 'node:fs/promises';
import net from 'node:net';

const server = net.createServer(async (socket) => {
  const fileHandle = await open('D:\\movies\\a.mkv');
  const { size } = await fileHandle.stat();
  const readStream = fileHandle.createReadStream();
  socket.write('HTTP/1.1 200 OKAY\n');
  socket.write('Content-Type: video/mp4\n');
  // socket.write('Content-Type: text/txt; charset=utf-8\n');
  socket.write('Content-Disposition: attachment; filename=testing.mp4\n');
  socket.write(`Content-Length: ${size}`);
  socket.write('\n\n');

  // socket.end();
  // const readStream = createReadStream('testing.mp4');
  // const readStream = createReadStream('river.webp');
  // const readStream = createReadStream('numbers.txt');
  readStream.pipe(socket);
  // socket.end();

  readStream.on('pause',()=>{
    console.log('Stream paused by browser');
  })
  
  readStream.on('resume',()=>{
    console.log('Stream resumed by browser');
  })

  // readStream.on('data', (chunk) => {
  // if (!socket.write(chunk)) {
  //   readStream.pause();
  // }

  // socket.write(chunk);
  // readStream.pause();
  // setTimeout(() => {
  //   readStream.resume();
  // }, 0);
  // });

  // socket.on('drain', () => {
  //   readStream.resume();
  // });

  readStream.on('end', () => {
    console.log('File ended');
  });

  socket.on('data', (chunk) => {
    console.log(chunk.toString());
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

// What data is coming:  Content-Type
// How much data is coming : Content-Length
// What to do with it : Content-Disposition
