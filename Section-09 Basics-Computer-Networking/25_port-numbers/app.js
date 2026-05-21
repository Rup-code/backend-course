const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('{"message": "Hello, From port 80!"}');
});

server.listen(() => {
  console.log(server.address());
  console.log('HTTP server is running');
});
