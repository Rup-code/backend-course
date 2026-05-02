import fs from 'node:fs';

console.time();

// Time 250ms
const fd = fs.openSync('numbers.txt', 'w');

for (let i = 1; i <= 100000; i++) {
  fs.writeSync(fd, `${i}, `);
}
fs.closeSync(fd);
console.timeEnd();
