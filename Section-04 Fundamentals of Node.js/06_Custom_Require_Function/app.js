'use strict';
const vm = require('vm');
const num = 5;
const b = loadModule('./math.js');
// const { sum } = loadModule('./sum.js');

// console.log(sum(4, 3, 2, 1));
// console.log(sum);

vm.runInNewContext('console.log(num)', { num });
// eval('var a = 5');

function loadModule(path) {
  const fs = require('fs');
  const vm = require('vm');
  const fileContent = fs.readFileSync(path).toString();
  // console.log(fileContent);
  return (function (send) {
    // Module code goes here
    vm.runInNewContext(fileContent, { send, loadModule, console });
    // eval(fileContent);
    // console.log(send);
    return send;
  })({});

}
