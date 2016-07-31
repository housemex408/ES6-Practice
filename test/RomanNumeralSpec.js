import * as chai from 'chai';
import RomanNumeral from '../src/RomanNumeral';
chai.should();

describe('RomanNumeral', () => {
    describe('test calculateRomanNumeral()', () => {
        it('should return 1 when input is I', () => {
            const temp = new RomanNumeral();
            const result = temp.calculateRomanNumeral('I');
            result.should.equal(1);
        });
        it('should return 3 when input is III', () => {
            const temp = new RomanNumeral();
            const result = temp.calculateRomanNumeral('III');
            result.should.equal(3);
        });
        it('should return 4 when input is IV', () => {
            const temp = new RomanNumeral();
            const result = temp.calculateRomanNumeral('IV');
            result.should.equal(4);
        });
        it('should return 5 when input is V', () => {
            const temp = new RomanNumeral();
            const result = temp.calculateRomanNumeral('V');
            result.should.equal(5);
        });
        it('should return 8 when input is VIII', () => {
            const temp = new RomanNumeral();
            const result = temp.calculateRomanNumeral('VIII');
            result.should.equal(8);
        });
        it('should return 14 when input is XIV', () => {
            const temp = new RomanNumeral();
            const result = temp.calculateRomanNumeral('XIV');
            result.should.equal(14);
        });
        it('should return -1 when input is null or empty', () => {
            const temp = new RomanNumeral();
            const result = temp.calculateRomanNumeral(null);
            result.should.equal(-1);
        });
        it('should return -1 when input is null or empty', () => {
            const temp = new RomanNumeral();
            const result = temp.calculateRomanNumeral(null);
            result.should.equal(-1);
        });
    });
});
