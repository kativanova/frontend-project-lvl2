const getStrForValue = (value, indent, depth) => {
  if (typeof (value) !== 'object' || value === null) {
    return value;
  }
  const levelIndent = indent.repeat(depth) + indent.repeat(depth - 1);
  const breakIndent = indent.repeat(depth - 1) + indent.repeat(depth - 2);
  const stings = Object.entries(value).map(([key, val]) => `${levelIndent}  ${key}: ${getStrForValue(val, indent, depth + 1)}`);
  return `{\n${stings.join('\n')}\n  ${breakIndent}}`;
};

const getLinesForDiff = (node, indent) => {
  const levelIndent = indent.repeat(node.level) + indent.repeat(node.level - 1);
  switch (node.type) {
    case 'unchanged':
      return `${levelIndent}  ${node.key}: ${getStrForValue(node.oldValue, indent, node.level + 1)}`;
    case 'added':
      return `${levelIndent}+ ${node.key}: ${getStrForValue(node.newValue, indent, node.level + 1)}`;
    case 'removed':
      return `${levelIndent}- ${node.key}: ${getStrForValue(node.oldValue, indent, node.level + 1)}`;
    case 'changed':
      return `${levelIndent}- ${node.key}: ${getStrForValue(node.oldValue, indent, node.level + 1)}\n${levelIndent}+ ${node.key}: ${getStrForValue(node.newValue, indent, node.level + 1)}`;
    default:
      return '';
  }
};

const stylish = (diffObj) => {
  const indent = '  ';
  const iter = (node, depth) => {
    if (node.type !== 'recursive') {
      return getLinesForDiff(node, indent);
    }
    const strForChildren = node.children.map((child) => iter(child, depth + 1));

    const levelIndent = indent.repeat(node.level) + indent.repeat(node.level - 1);

    return `${levelIndent}  ${node.key}: {\n${strForChildren.join('\n')}\n  ${levelIndent}}`;
  };

  const strForChildren = diffObj.children.map((child) => iter(child, 0));
  return `{\n${strForChildren.join('\n')}\n}`;
};

export default stylish;
