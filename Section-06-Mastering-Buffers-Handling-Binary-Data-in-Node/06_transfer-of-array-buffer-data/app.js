import fs from 'fs/promises';

const uint8Array = new Uint8Array(8);
// const a = uint8Array.buffer;
uint8Array.forEach((el, i) => {
  uint8Array[i] = 'Biswarup'.charCodeAt(i);
});

const view = new DataView(uint8Array.buffer);

console.log(view);

fs.writeFile('buffer-text.mp4', view);

// const encoder = new TextEncoder();
// encoder.encodeInto('Biswarup', uint8Array);
// encoder.encode('Biswarup');

console.log(uint8Array);

// const decoder = new TextDecoder('utf-8');

// console.log(decoder.decode(uint8Array));
