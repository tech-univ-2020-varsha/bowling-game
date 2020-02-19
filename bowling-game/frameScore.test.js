const frameScore = require('./bowlingScore').frameScore;

describe('the frame score function', () => {
    it('should return a number as a frame score', () => {
        let rolls = [10, 5, 5];
        const result = frameScore(rolls);
        expect(typeof result).toBe('number');
    });

    it('should return the correct frame sum for spare case', () => {
        let rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const result = frameScore(rolls, 0, 'spare');
        expect(result).toBe(13);
    });

    it('should return the correct frame sum for openFrame', () => {
        let rolls = [6, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const result = frameScore(rolls, 0, 'openFrame');
        expect(result).toBe(9);
    });

    it('should return the correct frame sum for strike case', () => {
        let rolls = [10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const result = frameScore(rolls, 0, 'strike');
        expect(result).toBe(30);
    });

    it('should return correct frame sum for fill ball case of strike and a spare', () => {
        let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6, 10];
        const result = frameScore(rolls, 18, 'spare');
        expect(result).toBe(20);
    });
    it('should return correct frame sum for fill ball case of three strikes', () => {
        let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
        const result = frameScore(rolls, 18, 'strike');
        expect(result).toBe(30);
    });

});