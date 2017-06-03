import expect from 'merge-most-frequent/tests/expect';
import mergeMostFrequent from 'merge-most-frequent/mergeMostFrequent';

describe('mergeMostFrequent', () => {
  it('returns the most frequent values', () => {
    const objects = [
      {
        bar: 'bar1',
        baz: 'baz1',
        foo: 'foo1',
      },
      {
        bar: 'bar2',
        baz: 'baz2',
        foo: 'foo1',
      },
      {
        bar: 'bar2',
        baz: 'baz1',
        foo: 'foo2',
      },
    ];

    expect(mergeMostFrequent(objects)).to.deep.equal({
      bar: 'bar2',
      baz: 'baz1',
      foo: 'foo1',
    });
  });

  it('returns the last value for equal frequencies', () => {
    const objects = [
      {
        bar: 'bar1',
        baz: 'baz1',
        foo: 'foo1',
      },
      {
        bar: 'bar2',
        baz: 'baz2',
        foo: 'foo1',
      },
    ];

    expect(mergeMostFrequent(objects)).to.deep.equal({
      bar: 'bar2',
      baz: 'baz2',
      foo: 'foo1',
    });
  });

  it('returns also values which occur in not all objects', () => {
    const objects = [
      {
        bar: 'bar1',
        baz: 'baz1',
        foo: 'foo1',
      },
      {
        bar: 'bar2',
      },
    ];

    expect(mergeMostFrequent(objects)).to.deep.equal({
      bar: 'bar2',
      baz: 'baz1',
      foo: 'foo1',
    });
  });
});
