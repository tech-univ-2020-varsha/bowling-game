const bowling = require('./bowlingScore').bowling;
const roll = require('./bowlingScore').rolls;
let rollArray = require('./bowlingScore').rollArray;
describe('the roll function', () => {
    it('should add the score to rollArray', () => {
        roll(1);
        console.log(rollArray);
        expect(rollArray.includes(1)).toBe(true);
    });
});

describe('the bowling score', () => {
    it('should return a number as a score', () => {
        rollArray = [];
        roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6);
        const result = bowling();
        expect(typeof result).toBe('number');
    });

    it('should return correct final score for no strike/spare case', () => {
        rollArray = [];
        roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6); roll(3); roll(6);

        console.log(rollArray);
        const result = bowling();
        expect(result).toBe(90);
    });

    it('should return correct final score for a strike case', () => {
        rollArray = [];
        roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(10); roll(10); roll(10);
        const result = bowling();
        expect(result).toBe(30);
    });

    it('should return correct final score for a spare case', () => {
        rollArray = [];
        roll(6);
        roll(4);
        roll(3);
        roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0); roll(0);
        const result = bowling();
        expect(result).toBe(16);
    });

});

