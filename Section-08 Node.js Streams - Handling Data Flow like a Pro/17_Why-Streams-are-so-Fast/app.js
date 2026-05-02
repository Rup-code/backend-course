import fs from 'node:fs';

console.time();

// // Time 10000ms
// for (let i = 1; i <= 100000; i++) {
//   if (i === 1) {
//     fs.writeFileSync('numbers.txt', `${i}, `);
//   } else {
//     fs.appendFileSync('numbers.txt', `${i}, `);
//   }
// }
// console.timeEnd();

// Time 230ms
const writeStream = fs.createWriteStream('streamNumbber.txt');
for (let i = 1; i <= 100000; i++) {
  writeStream.write(`${i}, `);
}
writeStream.end();

writeStream.on('finish', () => {
  console.timeEnd();
});
// contact@procodrr.com
