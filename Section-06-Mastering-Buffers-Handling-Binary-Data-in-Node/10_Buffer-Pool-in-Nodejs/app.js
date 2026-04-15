import { Buffer, constants } from 'node:buffer';

// Buffer.poolSize = 10000;

// Condition for allocUnsafe to use Buffer Pool
// Buffersize < Buffer.poolSize >>> 1

// console.log(constants.MAX_LENGTH);
// console.log(constants.MAX_STRING_LENGTH);

// const a = Buffer.alloc(4294968000);
const a = Buffer.alloc(4);
const z = Buffer.alloc(4);

const b = Buffer.allocUnsafe(4095);
const c = Buffer.allocUnsafe(3281);

const bufferalocunsafe = Buffer.allocUnsafe(4);
const bufferalocunsafeslow = Buffer.allocUnsafeSlow(4);

console.log(bufferalocunsafe.buffer.byteLength);
console.log(bufferalocunsafeslow.buffer.byteLength);

// const d = Buffer.from('a'.repeat(constants.MAX_STRING_LENGTH));
// const d = Buffer.from('abc');
const joinBuffer = Buffer.concat([a, z]);
console.log(joinBuffer.buffer.byteLength);
// const dString = d.toString();

// console.log(d);

b[2] = 97;
c[0] = 101;

// console.log(a.byteLength);
// console.log(b.byteLength);
// console.log('------------------------');
// console.log(a.buffer.byteLength);
// console.log(a.buffer === b.buffer);
// console.log(b.buffer === c.buffer);
// console.log(Buffer.poolSize);
console.log('end');
