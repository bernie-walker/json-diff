const { assert } = require('chai');
const {findDiff} = require('../src/jsonDiff');

describe('findDiff', function () {
  it('should find the diff between two objects', function () {
    const actual = findDiff();
    const expected = { missing: { fromLeft: [], fromRight: [] }, diff: [] };
    assert.deepEqual(actual, expected);
  });
});
