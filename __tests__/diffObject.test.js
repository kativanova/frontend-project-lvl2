import { test, expect } from '@jest/globals';
import diffObject from '../src/diffObject.js';

test('common case', () => {
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
    common: {
      type: 'recursive',
      value:
      {
        follow: {
          type: 'diff', changed: true, first: undefined, second: false,
        },
        setting1: {
          type: 'diff', changed: false, first: 'Value 1', second: 'Value 1',
        },
        setting2: {
          type: 'diff', changed: true, first: 200, second: undefined,
        },
        setting3: {
          type: 'diff', changed: true, first: true, second: null,
        },
        setting4: {
          type: 'diff', changed: true, first: undefined, second: 'blah blah',
        },
        setting5: {
          type: 'diff',
          changed: true,
          first: undefined,
          second: { key5: 'value5' },
        },
        setting6: {
          type: 'recursive',
          value: {
            doge: {
              type: 'recursive',
              value: {
                wow: {
                  type: 'diff', changed: true, first: '', second: 'so much',
                },
              },
            },
            key: {
              type: 'diff', changed: false, first: 'value', second: 'value',
            },
            ops: {
              type: 'diff', changed: true, first: undefined, second: 'vops',
            },
          },
        },
      },
    },
  };
  expect(diffObject(object1, object2)).toEqual(expected);
});
