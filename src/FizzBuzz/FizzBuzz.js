const n = 15;

let isMultipleThree;
let isMultipleFive;

for (let i = 1; i <= n; i++) {
    isMultipleThree = (i % 3) == 0;
    isMultipleFive = (i % 5) == 0;

    if (isMultipleThree && isMultipleFive)
        console.log("FizzBuzz");
    else if (isMultipleThree)
        console.log("Fizz");
    else if (isMultipleFive)
        console.log("Buzz");
    else
        console.log(i);
}