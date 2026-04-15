import fs from 'node:fs/promises';

const a = await fs.readFile("C:\\Users\\Biswarup Maji\\Desktop\\rup.png");

console.log(a.byteLength);