const response = await fetch('http://192.168.31.219:4000');
console.log({ response });

// const data = await response.json();
// console.log(data);

// console.log(response.headers);

// response.headers.forEach((value, key) => {
//   console.log(`${key.toUpperCase()}: ${value}`);
// });

const decoder = new TextDecoder();
for await (const chunk of response.body) {
  console.log(chunk);
  document.write(decoder.decode(chunk));
}

// const decoder = new TextDecoder();
// for await (const chunk of response.body) {
//   // console.log(chunk);
//   console.log(decoder.decode(chunk));
//   console.log(JSON.parse(decoder.decode(chunk)));
// }
