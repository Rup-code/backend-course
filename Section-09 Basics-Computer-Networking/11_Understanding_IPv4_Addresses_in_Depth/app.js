const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is a basic HTTP server on 127.0.0.2\n');
});

server.listen(3000, '127.100.0.2', () => {
  console.log('Server is listening on http://127.0.0.2:3000');
});
