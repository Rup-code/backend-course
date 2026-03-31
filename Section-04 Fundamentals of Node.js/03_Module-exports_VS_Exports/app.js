// const math = require('./math');
const { sum, product } = require('./math');
// console.log(require('./math'));
// console.log(sum, product);

// console.log(math);

console.log(sum(1, 2, 3, 4));
console.log(product(1, 2, 3, 4));

const user = {
  name: "Anurag Singh",
  age: 88,
  address: {
    city: "NYC",
    state: "Uttar Pradesh",
  },
  hobbies: ["Teaching", "Coding", "TT"],
};

let address = user.address;

// console.log(user.address === address);

// address.pinCode = 568737;
// address.country = "India";

address = {
  pinCode: 44654,
  country: 'India',
}

// console.log(address);
// console.log(user.address);
