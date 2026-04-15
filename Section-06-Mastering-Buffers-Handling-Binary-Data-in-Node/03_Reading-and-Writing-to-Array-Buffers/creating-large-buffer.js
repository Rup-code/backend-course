const a = new ArrayBuffer(1 * 1024 * 1024 * 1024);
const view = new DataView(a);

for (let i = 0; i < view.byteLength; i++) {
  view.setInt8(i, i + 1);
}
console.log(a);
console.log('End');

// setInterval(() => {
//   console.log('Running');
// }, 2000);
