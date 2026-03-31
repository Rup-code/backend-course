function product(...nums) {
  return nums.reduce((acc, cur) =>
    acc * cur, 1)
}

// module.exports = product;