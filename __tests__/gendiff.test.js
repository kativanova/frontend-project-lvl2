import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '../__fixtures__/', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yml'],
  ['file1.yaml', 'file2.yaml'],
])('Stylish formatter', (f1, f2) => {
  const file1 = getFixturePath(f1);
  const file2 = getFixturePath(f2);
  const result = readFile('result_stylish.txt');
  expect(genDiff(file1, file2)).toEqual(result);
});

test.each([
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yml'],
  ['file1.yaml', 'file2.yaml'],
])('Plain formatter', (f1, f2) => {
  const file1 = getFixturePath(f1);
  const file2 = getFixturePath(f2);
  const result = readFile('result_plain.txt');
  expect(genDiff(file1, file2, 'plain')).toEqual(result);
});

test.each([
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yml'],
  ['file1.yaml', 'file2.yaml'],
])('Json formatter', (f1, f2) => {
  const file1 = getFixturePath(f1);
  const file2 = getFixturePath(f2);
  const result = readFile('result_json.txt');
  expect(genDiff(file1, file2, 'json')).toEqual(result);
});
