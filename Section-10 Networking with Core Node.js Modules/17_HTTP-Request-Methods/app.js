import http from 'node:http';

const server = http.createServer((request, response) => {
  console.log('Got the request');
  console.log(request.url);
  console.log(request.method);
  response.setHeader('Content-length', '23');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.write('Hello from http server.');

  console.log(request.headers);
  request.on('data', (chunk) => {
    console.log('got data on request');
    console.log(chunk.toString());
  });
  // response.end();
});

// server.on('request', (request, response) => {
//   console.log('Got the request');
//   response.setHeader('Content-length', '23');
//   response.write('Hello from http server.');
//   // response.end();
// });

// server.on('connection', (socket) => {
//   socket.on('data', (chunk) => {
//     console.log('Got data on socket');
//     console.log(chunk.toString());
//   });
//   socket.end('HTTP/1.1 200 OK\n\nHii form http server');
// });

server.listen(4000, '0.0.0.0', () => {
  console.log('Server Started');
});
