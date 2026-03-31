function sum(...nums) {
  return nums.reduce((acc, cur) =>
    acc + cur, 0)
}

function product(...nums) {
  return nums.reduce((acc, cur) =>
    acc * cur, 1)
}

// console.log(module.exports);

exports.sum = sum;
exports.product = product;

// module.exports.sum = sum;
// module.exports.product = product;
// module.exports = { sum, product };
console.log(module.exports);