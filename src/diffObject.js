import _ from 'lodash';

const getChanges = (first, second) => {
  if (first === second) {
    return { type: 'unchanged', oldValue: first };
  }
  if (first === undefined) {
    return { type: 'added', newValue: second };
  }
  if (second === undefined) {
    return { type: 'removed', oldValue: first };
  }
  return { type: 'changed', oldValue: first, newValue: second };
};

const diffObj = (o1, o2) => {
  const iter = (obj1, obj2, key, level) => {
    if (typeof (obj1) !== 'object' || typeof (obj2) !== 'object') {
      return {
        key, level, ...getChanges(obj1, obj2),
      };
    }

    const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
    const children = sortedKeys
      .map((childKey) => iter(obj1[childKey], obj2[childKey], childKey, level + 1));

    return {
      key, level, type: 'recursive', children,
    };
  };
  return iter(o1, o2, 'ast', 0);
};

export default diffObj;
