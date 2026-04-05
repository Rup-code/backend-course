import fs from 'node:fs/promises';

// const content = fs.readFileSync('./npx-searching-step.txt', 'utf-8');
// const content = contentBuffer.toString()

// fs.readFile('./npx-searching-step.txt', (err, data) => {
//   const content = data.toString();
//   console.log(content);
// });

console.time();
let i = 0;
const timerId = setInterval(() => {
  console.log(i++);
  if (i === 80) {
    clearInterval(timerId);
    console.timeEnd();
  }
}, 5);

console.log('start reading');
const a = await fs.readFile('./npx-searching-step.txt', 'utf-8');
console.log('reading done');

console.log('End');
