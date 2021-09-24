const getLinesForDiff = (node) => {
  if (node.changed) {
    // const first = (node.first === undefined) ? `+ ${}`
  }
};

const stylish = (diffObj) => {
  const indent = '  ';
  console.log(diffObj);
  const iter = (node, depth) => {
    if (node.type === 'diff') {
      return `${key}: ${getLinesForDiff(node)}`;
    }

    const lineIndent = indent.repeat(depth);
    const breakIndent = indent.repeat(depth - 1);
  };

  return iter(diffObj, 1);
};

export default stylish;
