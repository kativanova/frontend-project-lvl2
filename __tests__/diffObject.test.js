import { test, expect } from '@jest/globals';
import diffObject from '../src/diffObject.js';

/* test('common case', () => {
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
  const expected = {
    key: 'ast',
    level: 0,
    type: 'recursive',
    children: [
      {
        key: 'common',
        level: 1,
        type: 'recursive',
        children: [
          {
            key: 'follow', level: 2, type: 'added', newValue: false,
          },
          {
            key: 'setting1', level: 2, type: 'unchanged', oldValue: 'Value 1',
          },
          {
            key: 'setting2', level: 2, type: 'removed', oldValue: 200,
          },
          {
            key: 'setting3', level: 2, type: 'changed', oldValue: true, newValue: null,
          },
          {
            key: 'setting4', level: 2, type: 'added', newValue: 'blah blah',
          },
          {
            key: 'setting5', level: 2, type: 'added', newValue: { key5: 'value5' },
          },
          {
            key: 'setting6',
            level: 2,
            type: 'recursive',
            children: [
              {
                key: 'doge',
                level: 3,
                type: 'recursive',
                children: [
                  {
                    key: 'wow', level: 4, type: 'changed', oldValue: '', newValue: 'so much',
                  },
                ],
              },
              {
                key: 'key', level: 3, type: 'unchanged', oldValue: 'value',
              },
              {
                key: 'ops', level: 3, type: 'added', newValue: 'vops',
              },
            ],
          },
        ],
      },
    ],
  };
  expect(diffObject(object1, object2)).toEqual(expected);
}); */
