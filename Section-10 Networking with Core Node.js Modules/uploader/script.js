const input = document.querySelector('input');

input?.addEventListener('change', async (e) => {
  // const file: File = e.target.files[0];
  // const file = e.target.files[0];
  // const response = await fetch('http://10.58.189.188/', {
  //   method: 'POST',
  //   body: file,
  //   headers: {
  //     filename: file.name,
  //   },
  // });
  // const data = await response.json();
  // console.log(data);
  
  const file = e.target.files[0];
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://10.58.189.188/', true);
  xhr.setRequestHeader('filename', file.name);
  xhr.addEventListener('load', (e) => {
    console.log(xhr.response);
  });
  xhr.upload.addEventListener('progress', (e) => {
    const totalProgress = Math.round((e.loaded / e.total) * 100);
    console.log(`${totalProgress}% Uploaded`);
  });
  xhr.send(file);
});
