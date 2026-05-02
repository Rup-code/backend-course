const input = document.querySelector('input');

const decoder = new TextDecoder();
input.addEventListener('change', async () => {
  const file = input.files[0];
  const readStream = file.stream();
  // const reader = readStream.getReader();
  // const result = await reader.read();

  for await (const chunk of readStream) {
    console.log(chunk);
  }

  // while (true) {
  //   const { done, value } = await reader.read();
  //   if (done) break;
  //   console.log(value);
  // }

  // console.log(decoder.decode(result.value));
  // const result2 = await reader.read();
  // console.log(decoder.decode(result2.value));
  // const result3 = await reader.read();
  // console.log(decoder.decode(result3.value));
  // const result4 = await reader.read();
  // console.log(result4);
  // const str = await file.text();
  // console.log(str);
});
