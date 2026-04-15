import { Buffer } from 'node:buffer';

// const uint8Array = new Uint8Array(4);
// const a = new ArrayBuffer(4);
const nodeBuffer = Buffer.alloc(4);
// const nodeBuffer = Buffer.from(a);
// const uint8Array = new Uint8Array(a);

const nodeBuffer2 = Buffer.from([97, 98, 99, 100]);
const nodeBuffer3 = Buffer.allocUnsafe(4);

console.log(nodeBuffer.byteLength);
console.log(nodeBuffer2.byteLength);
console.log(nodeBuffer3.byteLength);

console.log(nodeBuffer.buffer.byteLength);
console.log(nodeBuffer2.buffer.byteLength);
console.log(nodeBuffer3.buffer.byteLength);

// uint8Array.forEach((el, i) => {
//   uint8Array[i] = i + 97;
// });

// console.log(uint8Array.toString());
// console.log(nodeBuffer.toString());

// console.log(uint8Array.buffer);
// console.log(nodeBuffer.buffer);
// console.log(nodeBuffer.buffer === uint8Array.buffer);
