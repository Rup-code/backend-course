import EventEmitter from 'node:events';

// class MyEmmiter extends EventEmitter {}

const emitter = new EventEmitter();
// const emitter = new MyEmmiter();

emitter.setMaxListeners(2);

emitter.on('x', (str) => {
  console.log(str);
  console.log('x event fired!');
});

emitter.on('y', () => {
  console.log('first y event fired!');
});

emitter.once('abc', (a, b, c) => {
  console.log(a, b, c);
  console.log('abc event fired!');
});

emitter.on('y', () => {
  console.log('second y event fired!');
});

// emitter.on('y', () => {
//   console.log('second y event fired!');
// });

// console.log(emitter._events);

// emitter.emit('x');
// emitter.emit('x');
// emitter.emit('x', 'Second argument');
emitter.emit('abc', 1, 2, 3);
// emitter.emit('abc');

// console.log(emitter._events);
