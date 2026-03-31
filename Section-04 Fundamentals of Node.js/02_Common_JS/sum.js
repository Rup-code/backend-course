function sum(...nums) {
  return nums.reduce((acc, cur) =>
    acc + cur, 0)
}

// module.exports = sum;