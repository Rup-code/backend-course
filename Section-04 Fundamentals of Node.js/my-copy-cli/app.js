#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';

const filePath = process.argv[2];
const destinationPath = process.argv[3];

const contentBuffer = await readFile(filePath);
console.log(contentBuffer);

writeFile(destinationPath, contentBuffer);
