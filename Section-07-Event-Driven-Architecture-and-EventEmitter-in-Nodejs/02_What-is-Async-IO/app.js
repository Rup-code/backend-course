#!/usr/bin/env node
import fsPromises from 'node:fs/promises';
import fs from 'node:fs';

setTimeout(() => console.log('Hii'), 0);

// Async I/O
// const fileContent = await fsPromises.readFile('file.txt', 'utf-8');
fs.readFile('file.txt', 'utf-8', (err, data) => {
  console.log(data);
});

// console.log(fileContent);
console.log('123');

// Sync I/O
// const fileContent2 = fs.readFileSync('file.txt', 'utf-8');

