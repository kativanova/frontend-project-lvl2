const getStrForValue = (value) => {
  if (typeof (value) === 'string') {
    return `'${value}'`;
  }
  if (typeof (value) === 'object' && value !== null) {
    return '[complex value]';
  }
  return value;
};

const getDiffStr = (node, path) => {
  switch (node.type) {
    case 'added':
      return [`Property '${path}${node.key}' was added with value: ${getStrForValue(node.newValue)}`];
    case 'removed':
      return [`Property '${path}${node.key}' was removed`];
    case 'changed':
      return [`Property '${path}${node.key}' was updated. From ${getStrForValue(node.oldValue)} to ${getStrForValue(node.newValue)}`];
    default:
      return [];
  }
};

const plain = (diffObj) => {
  const iter = (node, path = '') => {
    if (node.type !== 'recursive') {
      return getDiffStr(node, path);
    }
    const childStrs = node.children.flatMap((child) => iter(child, `${path}${node.key}.`));
    return childStrs;
  };

  const diffStrs = diffObj.children.flatMap((child) => iter(child));

  return diffStrs.join('\n');
};

export default plain;
