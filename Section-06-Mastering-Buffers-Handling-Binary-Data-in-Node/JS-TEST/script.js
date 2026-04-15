fetch('http://localhost:3000/')
  .then((response) => response.arrayBuffer())
  .then((data) => {
    console.log(data);
    const uint8Array = new Uint8Array(data);
    const decoder = new TextDecoder('utf-8');
    console.log(decoder.decode(uint8Array));

    console.log(uint8Array);
  });
