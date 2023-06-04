
const matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
]

let n = matrix.length / 2;

let tmpArray = new Array(matrix.length).fill(0);

for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
    tmpArray[i] = matrix[j][n];
}

console.log(tmpArray);

for (let i = 0; i < matrix.length - 1; i++)
    matrix[i][n] = tmpArray[i];

matrix[0] = matrix[0].reverse();

console.log(matrix[0]);

let sum = 0;

for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
        sum = sum + matrix[i][j]

console.log(sum);
