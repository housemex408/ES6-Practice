function processData(input) {
    let inputLines = input.split("\n");
    let t = parseInt(inputLines[0]);
    let n = inputLines[1];
    let a = inputLines[2].split(" ").map(i => parseInt(i));

    console.log(t);
    console.log(n);
    console.log(a);

    let k = (n + 1) / 2
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    _input = _input.replace("D","");
    processData(_input);
});