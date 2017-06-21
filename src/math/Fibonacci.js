class Fibonnaci
{
  /*
   * Approach
   *
   * 1) establish base cases e.g. 0 & 1
   * 2) otherwise recursively calculate fib(n-1) + fib(n-2)
   *
   * Runtime = O(Fib(N))
   */
  calculate(input)
  {
    if(input == 0)
      return 0;
    else if (input == 1)
      return 1;

    return this.calculate(input - 1) + this.calculate(input - 2);
  }
}

module.exports = Fibonnaci;
