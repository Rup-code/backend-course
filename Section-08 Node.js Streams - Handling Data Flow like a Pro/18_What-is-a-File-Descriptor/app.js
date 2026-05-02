import fs from 'node:fs';

// console.log(process.stdin.fd);
// console.log(process.stdout.fd);
// console.log(process.stderr.fd);

// fs.open('text.txt', (err, fd) => {
//   console.log(fd);
// });

// fs.open('num.txt', (err, fd) => {
//   console.log(fd);
// });

// fs.open('package.json', (err, fd) => {
//   console.log(fd);
// });

const fd1 = fs.openSync('text.txt');
const fd2 = fs.openSync('num.txt');
const fd3 = fs.openSync('package.json');

console.log({ fd1, fd2, fd3 });
