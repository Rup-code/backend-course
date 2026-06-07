import { open, readdir, rm, rename } from 'node:fs/promises';
import http from 'node:http';
import mime from 'mime-types';
import path from 'node:path';
import { createWriteStream } from 'node:fs';

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');

  if (req.url === '/favicon.ico') return res.end('No favicon');
  console.log(req.url);
  console.log(req.method);

  if (req.method === 'GET') {
    if (req.url === '/') {
      await serveDirectory(req, res);
    } else {
      try {
        const [url, queryString = ''] = req.url.split('?');
        const queryParam = {};

        queryString?.split('&').forEach((pair) => {
          const [key, value] = pair.split('=');
          queryParam[key] = value;
        });

        const fileHandle = await open(`./storage${decodeURIComponent(url)}`);
        const stats = await fileHandle.stat();
        if (stats.isDirectory()) {
          await fileHandle.close();
          await serveDirectory(req, res);
        } else {
          const readStream = fileHandle.createReadStream();

          const extension = path.extname(url);
          res.setHeader(
            'Content-Type',
            mime.contentType(extension) || 'application/octet-stream',
          );
          res.setHeader('Content-Length', stats.size);

          if (queryParam.action === 'download') {
            res.setHeader(
              'Content-Disposition',
              `Attachment; filename="${path.basename(url)}"`,
              // `Attachment; filename=${url.slice(1)}`,
            );
          }
          readStream.pipe(res);
          readStream.on('close', async () => {
            await fileHandle.close();
          });
        }
      } catch (err) {
        console.log(err.message);
        res.end('Not Found');
      }
    }
  } else if (req.method === 'OPTIONS') {
    res.end('OK');
  } else if (req.method === 'POST') {
    const writeStream = createWriteStream(
      `./storage${req.url === '/' ? '' : req.url}/${req.headers.filename}`,
    );
    req.pipe(writeStream);
    req.on('end', () => {
      res.end(JSON.stringify('Recived data in server'));
    });
  } else if (req.method === 'DELETE') {
    const deleteItem = `./storage${decodeURIComponent(req.url)}`;
    await rm(deleteItem);
    res.end(JSON.stringify('Success'));
  } else if (req.method === 'PATCH') {
    try {
      const oldPath = `./storage${decodeURIComponent(req.url)}`;
      const newName = req.headers['new-name'];
      const dir = path.dirname(oldPath);
      const newPath = path.join(dir, decodeURIComponent(newName));
      console.log({ oldPath, dir, newPath });
      await rename(oldPath, newPath);
      res.end(JSON.stringify('Renamed Successfully'));
    } catch (err) {
      res.end(JSON.stringify(err));
    }
  }
});

const serveDirectory = async function (req, res) {
  const [url] = req.url.split('?');
  const itemsList = await readdir(`./storage${decodeURIComponent(url)}`, {
    withFileTypes: true,
  });

  const items = itemsList.map((item) => ({
    name: item.name,
    isDirectory: item.isDirectory(),
  }));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(items));
};

server.listen(3000, '0.0.0.0', () => {
  console.log('Server Started');
});
