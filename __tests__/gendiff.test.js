import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '../__fixtures__/', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('general functionality', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const result = readFile('results.txt');
  expect(genDiff(file1, file2)).toEqual(result);
});
