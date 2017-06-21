import { expect } from 'chai';
import Fibonacci from '../../src/math/Fibonacci';

describe('Fibonacci', () => {

  describe('Fibonacci.calculate()', () => {

    it('should return 8 given fib(6)', () => {
      const fib = new Fibonacci();
      const result = fib.calculate(6);
      expect(result).to.be.equal(8);
    });

  });

});
