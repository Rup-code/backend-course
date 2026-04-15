const a = new ArrayBuffer(4);
const view = new DataView(a);
const view2 = new DataView(a);

view.setInt8(0, 0xff);
view.setInt8(1, 127);
view.setInt8(2, 128);
view.setInt8(3, 135);

// view2.setInt8(0, 0x68);
// view2.setInt8(1, 0x65);
// view2.setInt8(2, 0x6c);
// view2.setInt8(3, 0x6c);
// view2.setInt8(3, 0x6f);

// view.setInt8(3, 0b01010000);

// getInt8 Reads value as signed
console.log(view.getInt8(0)); // -1
console.log(view.getInt8(1)); // 127
console.log(view.getInt8(2)); // -128

// getUint8 Reads value as Unsigned
console.log(view.getUint8(0)); // 255
console.log(view.getUint8(1)); // 127
console.log(view.getUint8(2)); // 128
