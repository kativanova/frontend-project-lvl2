import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs, { copyFileSync } from 'fs';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '../__fixtures__/', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['json/file1.json', 'json/file2.json'],
  ['yml/file1.yml', 'yml/file2.yml'],
  ['yml/file1.yaml', 'yml/file2.yaml'],
])('Stylish formatter', (f1, f2) => {
  const file1 = getFixturePath(f1);
  console.log(file1);
  const file2 = getFixturePath(f2);
  const result = readFile('results.txt');
  expect(genDiff(file1, file2)).toEqual(result);
});

test.each([
  ['json/file1.json', 'json/file2.json'],
  ['yml/file1.yml', 'yml/file2.yml'],
  ['yml/file1.yaml', 'yml/file2.yaml'],
])('Plain formatter', (f1, f2) => {
  const file1 = getFixturePath(f1);
  const file2 = getFixturePath(f2);
  const result = readFile('plain_results.txt');
  expect(genDiff(file1, file2, 'plain')).toEqual(result);
});

test.each([
  ['json/file1.json', 'json/file2.json'],
  ['yml/file1.yml', 'yml/file2.yml'],
  ['yml/file1.yaml', 'yml/file2.yaml'],
])('Stylish formatter', (f1, f2) => {
  const file1 = getFixturePath(f1);
  const file2 = getFixturePath(f2);
  const result = readFile('json_results.txt');
  expect(genDiff(file1, file2, 'json')).toEqual(result);
});
