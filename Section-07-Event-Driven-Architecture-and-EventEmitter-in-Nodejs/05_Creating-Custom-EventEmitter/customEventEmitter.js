class MyEventEmmiter {
  constructor() {
    this._events = {};
  }

  on(eventName, handler) {
    if (this._events[eventName]) {
      this._events[eventName].push(handler);
    } else {
      this._events[eventName] = [handler];
    }
  }

  emit(eventName, ...args) {
    this._events[eventName]?.forEach((event) => {
      event(...args);
    });
  }

  off(eventName, handlerToRemove) {
    if (!this._events[eventName]) return;
    this._events[eventName] = this._events[eventName].filter(
      (handler) => handler !== handlerToRemove,
    );
  }

  once(eventName, handler) {
    const wrapper = (...args) => {
      handler(...args);
      this.off(eventName, wrapper);
    };
    console.log(wrapper);

    this.on(eventName, wrapper);
  }
}

const emitter = new MyEventEmmiter();

emitter.on('x', () => {
  console.log('Emmited event x1');
});

const handlerFn = () => {
  console.log('Emmited event');
};
emitter.on('x', handlerFn);

emitter.on('y', (a, b, c) => {
  console.log(a, b, c);
  console.log('Emmited event y');
});

// emitter.emit('y', 1, 2, 6);

// emitter.off('x', handlerFn);

emitter.once('a', handlerFn);


// emitter.emit('x');
// console.log(emitter._events);
emitter.emit('a');
// console.log(emitter._events);
