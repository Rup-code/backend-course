import http from 'http';
import fsPromise from 'fs/promises';

const server = http.createServer(async (req, res) => {
  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('Content-Type', 'video/mp4');
  res.setHeader('Content-Disposition', 'attachment; filename=test.mp4');

  const readFileHandle = await fsPromise.open('D:/test.mp4');
  console.log(await readFileHandle.stat());
  const { size } = await readFileHandle.stat();
  res.setHeader('Content-Length', size);

  const readStream = readFileHandle.createReadStream({
    highWaterMark: 1 * 1024 * 1024,
  });

  readStream.on('data', (chunk) => {
    res.write(chunk);
    readStream.pause();

    setTimeout(() => {
      readStream.resume();
    }, 50);
  });

  readStream.on('end', () => {
    res.end();
  });

  // setInterval(() => {
  //   res.write(readStream);
  // }, 500);
});

server.listen(4000, 'localhost', () => {
  console.log('Server Started');
});
