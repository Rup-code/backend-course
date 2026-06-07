import { open, readdir, readFile } from 'node:fs/promises';
import http from 'node:http';
import mime from 'mime-types';
import path from 'node:path';

const serveDirectory = async function (req, res) {
  const [url, queryString] = req.url.split('?');
  const dirContent = await readdir(`./storage${decodeURIComponent(url)}`, {
    withFileTypes: true,
  });

  const dynamicHtml = dirContent
    .map((list) => {
      return `${list.isDirectory() ? '📁' : '📄'}
        ${list.name}
        <a href=".${url === '/' ? '' : url}/${list.name}?action=preview">Preview</a>
        <a href=".${url === '/' ? '' : url}/${list.name}?action=download">Download</a>
        </br>`;
    })
    .join('');
  const htmlBoilerplate = await readFile('boilerplate.html', 'utf-8');
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlBoilerplate.replace('${dynamicHtml}', dynamicHtml));
};

const server = http.createServer(async (req, res) => {
  if (req.url === '/favicon.ico') return res.end('No favicon');

  if (req.url === '/') {
    await serveDirectory(req, res);
  } else {
    try {
      const [url, queryString = ''] = req.url.split('?');
      const queryParam = {};
      if (queryString) {
        queryString.split('&').forEach((pair) => {
          const [key, value] = pair.split('=');
          queryParam[key] = value;
        });
      }

      const fileHandle = await open(`./storage${decodeURIComponent(url)}`);
      const stats = await fileHandle.stat();
      if (stats.isDirectory()) {
        await fileHandle.close();
        await serveDirectory(req, res);
      } else {
        const readStream = fileHandle.createReadStream();

        const extension = path.extname(url);
        console.log({ url, extension });
        res.setHeader(
          'Content-Type',
          mime.contentType(extension) || 'application/octet-stream',
        );
        res.setHeader('Content-Length', stats.size);

        if (queryParam.action === 'download') {
          res.setHeader(
            'Content-Disposition',
            `Attachment; filename=${url.slice(1)}`,
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
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server Started');
});
