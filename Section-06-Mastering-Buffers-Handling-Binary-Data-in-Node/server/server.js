import http from 'http';

// const a = new ArrayBuffer(4);
// const uint8Array = new Uint8Array(a);

const uint8Array = new Uint8Array(8);
uint8Array.forEach((el, i) => {
  uint8Array[i] = 'Biswarup'.charCodeAt(i);
});

startServer(uint8Array);

function startServer(responseData) {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/txt; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/favicon.ico') {
      res.end();
      return;
    }
    res.write(responseData);
    res.end();
  });

  server.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
  });
}
