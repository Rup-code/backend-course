// const timer = require('./timer.js');
// import timer from './timer.js';

// Common JS Modules //
// Synchronous file loading
// cjs import are not hoisted
// Top level await is not allowed
// Only one value can be exported  in cjs
// Strict mode is not enabled by defalut
// File extension optional
// If we give full file path then We can load any file using cjs
// It is a convention to add cjs in the file extension
// It is optional to set "type":"module" in package.json because commonjs is the default module system of node.js
// In cjs this keyword points to module.exports by default
// we access the filename and directory name by __filename,__dirname

// ES6 Modules //
// Asynchronous file loading
// mjs import are hoisted
// Top level await is allowed
// Multiple value can be exported in mjs
// Strict mode is enabled by defalut
// File extension mandatory
// We can not load any file, only js and mjs files allowed
// It is a convention to add mjs in the file extension
// We have to set "type":"module" in package.json
// In cjs this keyword is undefined
// we access the filename and directory name by import.meta object