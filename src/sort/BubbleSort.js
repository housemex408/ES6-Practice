export default class BubbleSort
{
  /*
   * Approach
   * 1) compare left with right
   * 2) if left > than right => swap & set swapped = true
   * 3) else continue to 1)
   * 4) if reached end and swapped = true => start over
   */
  sort(input)
  {
    let swapped = false;

    for(let i = 1; i < input.length; i++)
    {
      let left = input[i-1];
      let right = input[i];

      if(left > right)
      {
        input[i-1] = right;
        input[i] = left;
        swapped = true;
      }
    }

    if(swapped)
      this.sort(input);

    return input;
  }

}
