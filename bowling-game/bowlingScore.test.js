const bowling = require('./bowlingScore').bowling;
const roll = require('./bowlingScore').rolls;
describe('the roll function', () => {
    it('should return score for each throw when argument is the number of pins knocked down', () => {
        const result = roll(5);
        expect(result).toBe(5);
    });
});

describe('the bowling score', () => {
    it('should return a number as a score', () => {
        let rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
        const result = bowling(rolls);
        expect(typeof result).toBe('number');
    });

    it('should return correct final score for no strike/spare case', () => {
        let rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
        const result = bowling(rolls);
        expect(result).toBe(90);
    });

    it('should return correct final score for a strike case', () => {
        let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
        const result = bowling(rolls);
        expect(result).toBe(30);
    });

    it('should return correct final score for a spare case', () => {
        let rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const result = bowling(rolls);
        expect(result).toBe(16);
    });

});

