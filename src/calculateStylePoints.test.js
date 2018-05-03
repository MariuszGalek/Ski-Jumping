const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  it('should return 53', () => {
    const actual = calculateStylePoints([19.0,18.5,17.5,17.0,15.5]);

    const expected = 53;

    assert.equal(actual, expected);
  });
  it('should return 55', () => {
    const actual = calculateStylePoints([20.0,20.0,15.0,15.0,20.0]);

    const expected = 55;

    assert.equal(actual, expected);
  });
  it('should return 34.5', () => {
    const actual = calculateStylePoints([7.5,0.0,16.5,19.5,10.5]);

    const expected = 34.5;

    assert.equal(actual, expected);
  });
});