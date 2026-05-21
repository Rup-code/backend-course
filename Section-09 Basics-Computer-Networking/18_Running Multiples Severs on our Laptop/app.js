const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('{"message": "Hello, World by me!!!"}');
});

server.listen(3000, () => {
  console.log('HTTP server is running on http://localhost:3000');
  console.log(server.address());
});
