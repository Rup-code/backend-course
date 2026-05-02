import fs from 'node:fs';
import { spawn } from 'node:child_process';

// Duplex Stream Case
// process
// const childProcess = spawn('cat', ['output.txt']);
const childProcess = spawn('node', ['childApp.js']);

const writeStream = fs.createWriteStream('Big-world.mkv');

childProcess.stdout.pipe(writeStream);

// childProcess.stdout.on('data', (chunk) => {
//   writeStream.write(chunk);
// });

// childProcess.stdin.write('12345678');

// childProcess.stdin.write('Rup');

// const writeStream = fs.createWriteStream('output.txt');

// process.stdin.pipe(writeStream);
// Readable Stream
// console.log(process.stdin);

// process.stdin.on('data', (chunk) => {
//   writeStream.write(chunk);
// });

// Writable Stream
// console.log(process.stdout);
// console.log(process.stderr);

// console.log('hii');
// process.stdout.write('hii\n');

// process.stderr.write('hii');

// console.log(process.stdin.fd);
// console.log(process.stdout.fd);
// console.log(process.stderr.fd);
