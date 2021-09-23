const getDiffStr = (key, value, lineIndent) => {
  if (value.type === 'diff') {
    if (value.changed) {
      const first = value.first !== undefined ? [`${lineIndent}- ${key}: ${value.first}`] : [];
      const second = value.second !== undefined ? [`${lineIndent}+ ${key}: ${value.second}`] : [];
      return [...first, ...second];
    }
    return [`${lineIndent}  ${key}: ${value.first}`];
  }
  return {};
};
const stylish = (diffObj) => {
  console.log(diffObj);
  const indent = '  ';

  const iter = (node, depth) => {
    if (typeof (node) !== 'object' && node !== null) {
      return node;
    }
    const lineIndent = indent.repeat(depth);
    const breakIndent = indent.repeat(depth - 1);

    const entries = Object.entries(node);
    const strList = entries.reduce((acc, [key, value]) => {
      console.log(acc);
      return [...acc, ...getDiffStr(key, value, lineIndent)];
    }, []);
    return `{\n${strList.join('\n')}\n${breakIndent}}`;
  };

  return iter(diffObj, 1);
};

export default stylish;
