console.time();
const decoder = new TextDecoder();
const res = await fetch('http://localhost:4000/');
const reader = res.body.getReader();
// const data = await res.text();

// console.timeEnd();

// console.log(res);

let i = 0;
while (true) {
  i++;
  const { value, done } = await reader.read();
  if (done) break;

  console.log(decoder.decode(value));
}
console.timeEnd();
// for await (const chunk of res.body) {
//   i++;
//   console.log(decoder.decode(chunk));

//   if (i === 1) {
//     console.timeEnd();
//   }
// }
// const data = await res.text();
// console.log(data);
