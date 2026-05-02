import fsPromise from 'node:fs/promises';

const fileHandle = await fsPromise.open('text.txt', 'r+');
console.log(fileHandle.fd);

// Read Method
const { buffer, bytesRead } = await fileHandle.read({
  buffer: Buffer.alloc(10),
});

console.log(buffer);
console.log(bytesRead);

// Write Method
const { buffer: writtenBuffer, bytesWritten } = await fileHandle.write(
  Buffer.from('hii'),
);
console.log(writtenBuffer, bytesWritten);

await fileHandle.close();
