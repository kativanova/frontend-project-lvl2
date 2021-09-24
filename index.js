import diffObject from './src/diffObject.js';

const object1 = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
};
const object2 = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
      doge: {
        wow: 'so much',
      },
    },
  },
};
const expected = [
  {
    key: 'common',
    type: 'recursive',
    children: [
      {
        key: 'follow', type: 'diff', changed: true, first: undefined, second: false,
      },
      {
        key: 'setting1', type: 'diff', changed: false, first: 'Value 1', second: 'Value 1',
      },
      {
        key: 'setting2', type: 'diff', changed: true, first: 200, second: undefined,
      },
      {
        key: 'setting3', type: 'diff', changed: true, first: true, second: null,
      },
      {
        key: 'setting4', type: 'diff', changed: true, first: undefined, second: 'blah blah',
      },
      {
        key: 'setting5', type: 'diff', changed: true, first: undefined, second: { key5: 'value5' },
      },
      {
        key: 'setting6',
        type: 'recursive',
        children: [
          {
            key: 'doge',
            type: 'recursive',
            children: [
              {
                key: 'wow', type: 'diff', changed: true, first: '', second: 'so much',
              },
            ],
          },
          {
            key: 'key', type: 'diff', changed: false, first: 'value', second: 'value',
          },
          {
            key: 'ops', type: 'diff', changed: true, first: undefined, second: 'vops',
          },
        ],
      },
    ],
  },
];
diffObject(object1, object2);
