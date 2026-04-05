import { readFile, writeFile, appendFile } from 'node:fs/promises';

// fs.writeFile('file-1.txt', 'Hello World');
// const contentBuffer = await readFile(
//   'C:\\Users\\Biswarup Maji\\Desktop\\file-1.txt',
// );

try {
  const contentBuffer = await readFile('./nodejss.png');
  writeFile('C:\\Users\\Biswarup Maji\\Desktop\\abc.png', contentBuffer);
} catch (err) {
  appendFile(
    'error.log',
    `\n\n${new Date().toLocaleTimeString()}\n${err.message}\n${err.stack}`,
  );
  console.log(err);
  console.log(`To see full error message go to ./error.log file`);
}

// console.log(contentBuffer);

// // writeFile('file-1.txt', contentBuffer);

// console.log(new Date().toLocaleTimeString());

// setInterval(() => {
//   writeFile('file-1.txt', new Date().toLocaleTimeString());
// }, 1000);
