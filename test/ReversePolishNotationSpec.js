import * as chai from 'chai';
import ReversePolishNotation from '../src/ReversePolishNotation';
chai.should();

describe('ReversePolishNotation', () => {
  describe('test calculate()', () => {

    it('should return 10 when input is [5, 5, +]', () => {
      const temp = new ReversePolishNotation();
      const result = temp.calculate([5, 5, '+']);
      result.should.equal(10);
    });

    it('should return 25 when input is [5, 2, 3, +, *]', () => {
      const temp = new ReversePolishNotation();
      const result = temp.calculate([5, 2, 3, '+', '*']);
      result.should.equal(25);
    });

    it('should return 10 when input is [5, 1, 2, +, 4, ×, +, 3, −]', () => {
      const temp = new ReversePolishNotation();
      const result = temp.calculate([5, 2, 3, '+', '*']);
      result.should.equal(25);
    });

  });
});
