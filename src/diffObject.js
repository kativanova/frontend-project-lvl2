import _ from 'lodash';

const diffObj = (o1, o2) => {
  const iter = (obj1, obj2) => {
    if (typeof (obj1) !== 'object' || typeof (obj2) !== 'object') {
      const changed = obj1 !== obj2;
      return {
        type: 'diff', changed, first: obj1, second: obj2,
      };
    }

    const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
    return sortedKeys
      .reduce((acc, key) => {
        const value = iter(obj1[key], obj2[key], key);
        if (value.type === 'diff') {
          return { ...acc, [key]: value };
        }
        return { ...acc, [key]: { type: 'recursive', value } };
      }, {});
  };
  return iter(o1, o2);
};

export default diffObj;
