import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { createReadStream } from 'node:fs';

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    const readStream = createReadStream('./public/index.html');
    readStream.pipe(res);
  } else {
    const readStream = createReadStream(`./public${req.url}`);
    readStream.on('error', (err) => {
      res.end('File Not Found!');
      console.log(err.message);
    });
    readStream.pipe(res);
  }
});

server.listen(4000, '0.0.0.0', () => {
  console.log('Server Started');
});
