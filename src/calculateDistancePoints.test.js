const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    it('should return 84 points on a normal hill', () => {
        const actual = calculateDistancePoints(102.0, 100, 90);

        const expected = 84;

        assert.equal(actual, expected);
    });
    it('should return 0 points on a normal hill', () => {
        const actual = calculateDistancePoints(65.0, 109, 95);

        const expected = 0;

        assert.equal(actual, expected);
    });
    it('should return -20 points on a normal hill', () => {
        const actual = calculateDistancePoints(55.0, 105, 95);

        const expected = -20;

        assert.equal(actual, expected);
    });
    it('should return 69 points on a large hill', () => {
        const actual = calculateDistancePoints(130.0, 140, 125);

        const expected = 69;

        assert.equal(actual, expected);
    });
    it('should return 114.9 points on a large hill', () => {
        const actual = calculateDistancePoints(160.5, 145, 130);

        const expected = 114.9;

        assert.equal(actual, expected);
    });
    it('should return 8.7 points on a large hill', () => {
        const actual = calculateDistancePoints(101.5, 145, 130);

        const expected = 8.7;

        assert.equal(actual, expected);
    });
    it('should return 150.6 points on a mammoth hill', () => {
        const actual = calculateDistancePoints(225.5, 240, 200);

        const expected = 150.6;

        assert.equal(actual, expected);
    });
    it('should return -11.4 points on a mammoth hill', () => {
        const actual = calculateDistancePoints(90.5, 240, 200);

        const expected = -11.4;

        assert.equal(actual, expected);
    });
    it('should return 120 points on a mammoth hill', () => {
        const actual = calculateDistancePoints(195, 235, 195);

        const expected = 120;

        assert.equal(actual, expected);
    });
});