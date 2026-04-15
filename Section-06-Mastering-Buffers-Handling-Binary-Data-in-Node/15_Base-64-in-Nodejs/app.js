import fs from 'node:fs/promises';

// btoa()
// const a = await fs.readFile('file.txt', 'base64');
// const bufferContent = await fs.readFile('favicon/favicon-16x16.png', 'base64');
// fs.writeFile('new-file.txt', bufferContent);
// const bufferContent = await fs.readFile('new-file.txt');
// const bufferContent = await fs.readFile('script.js');

// const a = bufferContent.toString('base64');

// // atob()
// fs.writeFile('new-file.txt', a);

// fs.writeFile('a.png', a, 'base64');
// fs.writeFile('script.txt', a);

const a = await fs.readFile('a.png', 'base64url');
fs.writeFile('new-file.txt', a);
