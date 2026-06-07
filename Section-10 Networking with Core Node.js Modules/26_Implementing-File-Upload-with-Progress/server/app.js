import http from 'node:http';
import { open, readdir, rename, rm } from 'node:fs/promises';
import mime from 'mime-types';
import { createWriteStream } from 'node:fs';

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');

  if (req.method === 'GET') {
    if (req.url === '/favicon.ico') return res.end('No favicon');
    if (req.url === '/') {
      serveDirectory(req, res);
    } else {
      try {
        const [url, queryString] = req.url.split('?');
        const queryParam = {};
        queryString?.split('&').forEach((pair) => {
          const [key, value] = pair.split('=');
          queryParam[key] = value;
        });

        const fileHandle = await open(`./storage${decodeURIComponent(url)}`);
        const stats = await fileHandle.stat();
        if (stats.isDirectory()) {
          serveDirectory(req, res);
        } else {
          const readStream = fileHandle.createReadStream();
          res.setHeader('Content-Type', mime.contentType(url.slice(1)));
          res.setHeader('Content-Length', stats.size);
          if (queryParam.action === 'download') {
            res.setHeader(
              'Content-Disposition',
              `attachment; filename=${url.slice(1)}`,
            );
          }
          readStream.pipe(res);
        }
      } catch (err) {
        console.log(err.message);
        res.end('Not Found');
      }
    }
  } else if (req.method === 'OPTIONS') {
    res.end('OK');
  } else if (req.method === 'POST') {
    const writeStream = createWriteStream(`./storage/${req.headers.filename}`);
    // req.pipe(writeStream);
    let count = 0;
    req.on('data', (chunk) => {
      writeStream.write(chunk);
      count++;
    });
    req.on('end', () => {
      console.log(count);
      writeStream.end();
      res.end(JSON.stringify('Data recived on server my dear brother'));
    });
  } else if (req.method === 'DELETE') {
    req.on('data', async (chunk) => {
      try {
        const filename = chunk.toString();
        await rm(`./storage/${filename}`);
        res.end('File deleted successfully');
      } catch (err) {
        res.end(err.message);
      }
    });
  } else if (req.method === 'PATCH') {
    try {
      req.on('data', async (chunk) => {
        const data = JSON.parse(chunk.toString());
        await rename(
          `./storage/${data.oldFileName}`,
          `./storage/${data.newFileName}`,
        );
        res.end('File renamed');
      });
    } catch (err) {
      console.log(err);
    }
  }
});

const serveDirectory = async function (req, res) {
  const [url] = req.url.split('?');
  const itemsList = await readdir(`./storage${url}`);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(itemsList));
};

server.listen(80, () => {
  console.log('Server Started');
});
