/**
 * Created by housemex408 on 6/20/17.
 */
class Sum {
  constructor()
  {

  }

  /*
   * Approach:
   * 1) iterate over array
   * 2) add value to item at index
   * 3) if item at index doesn't exist in set already, add to set
   * 4) otherwise if exists already, set found = true and exist
   *
   * e.g. [0,2,4,-4,2]
   *
   * item[0] = 0, complement = 0, set[0]
   * item[1] = 2, complement = -2, set[0,2]
   * item[2] = 4, complement = -4, set[0,2,4]
   * item[3] = -4, complement = 4, return true
   *
   * Running Time & Space = O(N)
   */
  calculate(input)
  {
    let found = false;
    let set = new Set();

    for(let i = 0; i < input.length; i++) {
      let item = input[i];
      let complement = item * -1;

      if(set.has(complement))
      {
        found = true;
        break;
      }

      set.add(item);
    }

    return found;
  }
}

module.exports = Sum;
