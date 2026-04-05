import { watch } from 'node:fs';
import {
  rename,
  copyFile,
  cp,
  unlink,
  rmdir,
  rm,
  writeFile,
  appendFile,
  mkdir,
  stat,
  readFile,
} from 'node:fs/promises';

// await rename('nodejs.png', 'backend.png');
// copyFile('backend.png', 'C:\\Users\\Biswarup Maji\\Desktop\\backend.png');
// await cp('./src', 'C:\\Users\\Biswarup Maji\\Desktop\\src', {
//   recursive: true,
// });
// rename method is used to move and rename both
// rename('app.js', 'D:\\script.js');
// rename('script.js', 'app.js');
// unlink('backend.png');
// rmdir('test');
// rmdir('src');
// rm('src', { recursive: true });
// writeFile('style.css', '');
// appendFile('index.html', '');
// rename('src', 'build');
// mkdir('test');
// const stats = await stat('build');
// console.log(stats);
watch('file.txt', async (eventType, fileName) => {
  if (eventType === 'change') {
    console.log(await readFile('file.txt', 'utf-8'));
  }
});

console.log('Renamed');
