import { useEffect, useState } from 'react';
import './App.css';

const BASE_URL = 'http://10.58.189.188:3000';

function App() {
  const [directoryItems, setDirectoryItems] = useState([]);
  const [path, setPath] = useState('/');
  const [progress, setProgress] = useState(0);
  const [newFileName, setNewFileName] = useState('');

  const getDirectoryItems = async function () {
    const response = await fetch(`${BASE_URL}${path}`);
    const data = await response.json();
    setDirectoryItems(data);
  };

  useEffect(() => {
    getDirectoryItems();
  }, [path]);

  async function handleChange(e) {
    const file = e.target.files[0];
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${BASE_URL}${path}`, true);
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

  async function handleDelete(item) {
    console.log(item);
    const itemPath = `${path === '/' ? '' : path}/${item.name}`;
    await fetch(`${BASE_URL}${itemPath}`, {
      method: 'DELETE',
    });
    getDirectoryItems();
  }

  async function handleRenameFile(item) {
    setNewFileName(item.name);
    console.log(item.name, newFileName);
  }

  async function handleSaveFile(item) {
    console.log(item.name, newFileName);
    const itemPath = `${path === '/' ? '' : path}/${item.name}`;
    console.log(itemPath);
    const response = await fetch(`${BASE_URL}${itemPath}`, {
      method: 'PATCH',
      headers: {
        'new-name': newFileName,
      },
    });
    const data = await response.json();
    getDirectoryItems();
    console.log(data);
  }

  return (
    <>
      <h1>My Files</h1>
      <p>📍 {path}</p>
      <input type="file" onChange={handleChange} /> <p>progress: {progress}%</p>
      <input
        type="text"
        onChange={(e) => setNewFileName(e.target.value)}
        value={newFileName}
      />
      {directoryItems.map((item, i) => (
        <div key={i}>
          {item.isDirectory ? (
            <a
              style={{ cursor: 'pointer' }}
              onClick={() =>
                setPath(`${path === '/' ? '' : path}/${item.name}`)
              }
            >
              📁 {item.name}
            </a>
          ) : (
            <>
              📄 {item.name}{' '}
              <a
                href={`${BASE_URL}${path === '/' ? '' : path}/${item.name}?action=preview`}
              >
                Preview
              </a>{' '}
              <a
                href={`${BASE_URL}${path === '/' ? '' : path}/${item.name}?action=download`}
              >
                Download
              </a>{' '}
              <button onClick={() => handleDelete(item)}>🗑 Delete</button>{' '}
              <button onClick={() => handleRenameFile(item)}>✏️ Rename</button>{' '}
              <button onClick={() => handleSaveFile(item)}>💾 Save</button>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default App;
