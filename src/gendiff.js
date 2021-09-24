import * as fs from 'fs';
import _ from 'lodash';
import path from 'path';
import parce from './parsers.js';
import diffObj from './diffObject.js';
import stylish from './formatters.js';

const genDiff = (filepath1, filepath2) => {
  try {
    const file1 = fs.readFileSync(filepath1, 'utf8');
    const file2 = fs.readFileSync(filepath2, 'utf8');

    const obj1 = parce(file1, path.extname(filepath1));
    const obj2 = parce(file2, path.extname(filepath2));
    return stylish(diffObj(obj1, obj2));
  } catch (err) {
    console.log(err);
  }
  return null;
};

export default genDiff;
