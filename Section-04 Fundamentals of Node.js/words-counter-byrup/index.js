#!/usr/bin/env node
import { readFile } from 'node:fs/promises';

const filePath = process.argv[2];
const searchWord = process.argv[3]?.toLowerCase();

if (!filePath) {
  console.log('Error: Please provide a file path');
  process.exit(1);
}

try {
  const fileContent = await readFile(filePath, 'utf-8');
  const wordsCountObj = {};

  const wordsArray = fileContent.split(/[\W]/).filter((words) => words);
  let wordCount = 0;

  wordsArray.forEach(word => {
    let wordLowercase = word.toLowerCase();

    if (wordLowercase in wordsCountObj) {
      wordsCountObj[wordLowercase]++;
    } else {
      wordsCountObj[wordLowercase] = 1;
    }

    if (searchWord) {
      if (wordLowercase === searchWord) {
        wordCount++
      }
    }
  });

  if (searchWord) {
    console.log(`${searchWord} appeared in the file named ${process.argv[2]} ${wordCount} times`);
  } else {
    console.log(wordsCountObj);
  }
} catch (err) {
  console.log(`Error: ${err.message}`);
  process.exit(1);
}


