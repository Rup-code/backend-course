function sum(...nums) {
  return nums.reduce((acc, cur) =>
    acc + cur, 0)
}

function product(...nums) {
  return nums.reduce((acc, cur) =>
    acc * cur, 1)
}

module.exports = { sum, product };

console.log(module);


// console.log(module.exports);

// let exports = module.exports;

// exports.sum = sum;
// exports.product = product;

// console.log(module.exports === exports);

// module.exports.sum = sum;
// module.exports.product = product;
// console.log(module.exports);