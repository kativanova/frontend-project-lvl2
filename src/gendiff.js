import * as fs from 'fs';
import _ from 'lodash';
import path from 'path';
import parce from './parsers.js';

const compareObjects = (obj1, obj2) => {
  const sortedKeys = _.sortBy(_.union([...Object.keys(obj1), ...Object.keys(obj2)]));

  const res = sortedKeys.reduce((acc, key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (val1 !== undefined && val2 === undefined) {
      return [...acc, `  - ${key}: ${val1}`];
    }
    if (val1 === undefined && val2 !== undefined) {
      return [...acc, `  + ${key}: ${val2}`];
    }
    if (val1 !== undefined && val2 !== undefined && val1 !== val2) {
      return [...acc, `  - ${key}: ${val1}`, `  + ${key}: ${val2}`];
    }
    return [...acc, `    ${key}: ${val1}`];
  }, []);

  return `{\n${res.join('\n')}\n}`;
};

const genDiff = (filepath1, filepath2) => {
  try {
    const file1 = fs.readFileSync(filepath1, 'utf8');
    const file2 = fs.readFileSync(filepath2, 'utf8');

    const obj1 = parce(file1, path.extname(filepath1));
    const obj2 = parce(file2, path.extname(filepath2));

    return compareObjects(obj1, obj2);
  } catch (err) {
    console.log(err);
  }
  return null;
};

export default genDiff;
