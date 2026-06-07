import http from 'node:http';

const clientRequest = http.request({
  method: 'POST',
  hostname: '10.58.189.188',
  port: 4000,
  path:'/file.txt'
});

clientRequest.end('Hiii i am client');

clientRequest.on('response', (response) => {
  response.on('data', (chunk) => {
    console.log(chunk.toString());
  });
});
