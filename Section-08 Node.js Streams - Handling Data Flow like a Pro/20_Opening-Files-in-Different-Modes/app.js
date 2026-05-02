import fs from 'node:fs';

const fd = fs.openSync('text.txt', 'w');

fs.writeSync(fd, 'Hii');
