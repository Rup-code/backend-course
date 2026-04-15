import fs from 'node:fs/promises';

const a = await fs.readFile('D:\\CHROME DOWNLOAD\\Web series\\kalki.mkv');
const b = await fs.readFile(
  'D:\\CHROME DOWNLOAD\\Web series\\The Expanse S01\\The.Expanse.S01E01.1080p.10Bit.BluRay.DDP5.1.HEVC.English.Esubs.MoviesVerse.Me.mkv',
);
const c = await fs.readFile(
  'D:\\CHROME DOWNLOAD\\Web series\\The Expanse S01\\The.Expanse.S01E02.1080p.10Bit.BluRay.DDP5.1.HEVC.English.Esubs.MoviesVerse.Me.mkv',
);
console.log(a.byteLength);
console.log(b.byteLength);
console.log(c.byteLength);

console.log('End');
