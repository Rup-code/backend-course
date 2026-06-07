import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const URL = 'http://[2409:40e1:b:e9c7:159e:b020:d836:34d5]/';
  const [directoryItems, setDirectoryItems] = useState([]);
  const [progress, setProgress] = useState(0);
  const [newFileName, setNewFileName] = useState('');

  async function getDirectoryItems() {
    const response = await fetch(URL);
    const data = await response.json();

    setDirectoryItems(data);
  }
  useEffect(() => {
    getDirectoryItems();
  }, []);

  async function uploadFile(e) {
    const file = e.target.files[0];
    const xhr = new XMLHttpRequest();
    xhr.open('POST', URL, true);
    xhr.setRequestHeader('filename', file.name);
    xhr.addEventListener('load', () => {
      console.log(xhr.response);
      getDirectoryItems();
    });
    xhr.upload.addEventListener('progress', (e) => {
      const totalProgress = (e.loaded / e.total) * 100;
      setProgress(+totalProgress.toFixed(2));
    });
    xhr.send(file);
  }

  async function handleDelete(fileName) {
    const response = await fetch(URL, {
      method: 'DELETE',
      body: fileName,
    });
    const data = await response.text();
    console.log(data);
    getDirectoryItems();
  }

  async function handleRenameFile(oldFileName) {
    setNewFileName(oldFileName);
    console.log({ oldFileName, newFileName });
  }

  async function saveFileName(oldFileName) {
    console.log({ oldFileName, newFileName });

    const response = await fetch(URL, {
      method: 'PATCH',
      body: JSON.stringify({ oldFileName, newFileName }),
    });
    const data = await response.text();
    console.log(data);
    setNewFileName('');
    getDirectoryItems();
  }

  return (
    <>
      <h1>My Files</h1>
      <input type="file" onChange={uploadFile} />
      <input
        type="text"
        onChange={(e) => setNewFileName(e.target.value)}
        value={newFileName}
      />
      <p>Progress: {progress}%</p>
      {directoryItems.map((item, i) => (
        <div key={i}>
          {item} <a href={`${URL}${item}?action=open`}>Open</a>
          <a href={`${URL}${item}?action=download`}>Download</a>{' '}
          <button onClick={() => handleDelete(item)}>Delete</button>{' '}
          <button onClick={() => handleRenameFile(item)}>Rename</button>
          <button onClick={() => saveFileName(item)}>Save</button>
          <br />
        </div>
      ))}
    </>
  );
}

export default App;
