const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    it('should return 43.7 points on a normal hill', () => {
        const actual = calculateTotalPoints(60.0, 105, 95, [16.5,14.5,14.5,14.5,19.5], 14.8, -6.6);

        const expected = 43.7;

        assert.equal(actual, expected);
    });
    it('should return 156 on a large hill', () => {
        const actual = calculateTotalPoints(145.0, 135, 120, [20.0,20.0,20.0,15.5,15.5], -4.5, 0);

        const expected = 156;

        assert.equal(actual, expected);
    });
    it('should return -6.7 on a mammoth hill', () => {
        const actual = calculateTotalPoints(79.5, 235, 200, [9.0,9.0,8.0,10.0,11.5], 0, -10.1);

        const expected = -6.7;

        assert.equal(actual, expected);
    });
});