import { Buffer } from 'node:buffer';
import fs from 'node:fs/promises';

// const nodeBuffer = Buffer.alloc(8);
const nodeBuffer = Buffer.from('Hello world', 'utf-8');
const nodeBuffer2 = Buffer.alloc(8);

// Methods
nodeBuffer2.write('abcdef', 'utf-16le');

// console.log(nodeBuffer.toString());
// console.log(nodeBuffer.toJSON());

// console.log(nodeBuffer.slice(5, 8).toString()); //Deprecated
// console.log(nodeBuffer);
// console.log(nodeBuffer.subarray(2));
// console.log(nodeBuffer.subarray(2).toString());

// nodeBuffer.copy(nodeBuffer2, 0, 0, 5);
// console.log(nodeBuffer2);
// console.log(nodeBuffer2.toString());

// console.log(nodeBuffer.includes('He', 5));

// nodeBuffer2.fill(98);
// console.log(nodeBuffer2.toString());

// console.log(nodeBuffer2);
// console.log(nodeBuffer2.readInt8(0));
// console.log(nodeBuffer2.readInt16BE(0));

console.log(nodeBuffer2);
// nodeBuffer2.writeInt8(0x65);
// console.log(nodeBuffer2.writeInt16LE(0x67, 2));
// console.log(nodeBuffer2.writeInt16BE(0x65, 0));
// console.log(nodeBuffer2.writeInt16BE(0x67, 2));
// console.log(nodeBuffer2);

// console.log(nodeBuffer.at(3));
console.log(nodeBuffer2.swap16());

// Properties
// console.log(nodeBuffer.buffer);
// console.log(nodeBuffer.byteLength);
// console.log(nodeBuffer.byteOffset);
// console.log(nodeBuffer.length);

// console.log('***************************');
// const nodeBuffer = Buffer.from('abc');
// const nodeBuffer2 = Buffer.alloc(8);

// fs.writeFile('file.txt', nodeBuffer);

// console.log(nodeBuffer);
// console.log(nodeBuffer.toString(''));

// nodeBuffer2[0] = 98;
// // nodeBuffer2[1] = 0;
// nodeBuffer2[7] = 104;

// console.log(nodeBuffer2);
// console.log(nodeBuffer2.toString('utf-8'));

// fs.writeFile('file.txt', nodeBuffer2);

// const decoder = new TextDecoder('utf-8');

// console.log(decoder.decode(nodeBuffer2));

// console.log(nodeBuffer.toString('utf-8'));
