const a = new ArrayBuffer(4, { maxByteLength: 16 });
// const view = new DataView(a);

const uint8Array = new Uint8Array(a);

uint8Array[0] = 0xfe;
uint8Array[1] = 0xee;
// uint8Array[2] = 0x3a;
// uint8Array[3] = 0x8a;

console.log(uint8Array);

a.resize(8);
const b = a.transfer();

console.log(b);
console.log(a);

// const uint8Array = new Uint8Array([0xfe, 0xee, 0, 0x8a]);

// const uint8Array = new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff);

// for (let i = 0; i < uint8Array.byteLength; i++) {
//   uint8Array[i] = i + 1;
// }

// const a = [new Uint8Array(1.9 * 1024 * 1024 * 1024).fill(0xff)];

// console.log(uint8Array.buffer);

// console.log(uint8Array.buffer === a);

// const uint16Array = new Uint16Array(a);
// // const uint32Array = new Uint32Array(a);

// console.log(uint8Array);
// console.log(uint16Array);
// console.log(uint32Array);
