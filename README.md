# merge-most-frequent

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/oprogramador/merge-most-frequent.svg?branch=master)](https://travis-ci.com/oprogramador/merge-most-frequent
)

[![NPM status](https://nodei.co/npm/merge-most-frequent.png?downloads=true&stars=true)](https://npmjs.org/package/merge-most-frequent
)

JS library for merging objects like Object.assign but it takes the most frequent value instead of the last value

## how to install?
`yarn add merge-most-frequent` or `npm i --save merge-most-frequent`

## how to use?
```js
const mergeMostFrequent = require('merge-most-frequent').default;
/*
 * or:
 * import mergeMostFrequent from 'merge-most-frequent';
 */

const objects = [
  {
    foo: 'foo1',
    bar: 'bar1',
    baz: 'baz1',
  },
  {
    foo: 'foo1',
    bar: 'bar2',
    baz: 'baz2',
  },
  {
    foo: 'foo2',
    bar: 'bar2',
    baz: 'baz1',
  },
];

expect(mergeMostFrequent(objects)).to.deep.equal({
  foo: 'foo1',
  bar: 'bar2',
  baz: 'baz1',
});
```

## how does it work?
- for each field, it returns the most frequent value
- if many values occur for the same number of times, the most recently used value wins
- a field has to occur in at least one of the objects, to be included in the result
