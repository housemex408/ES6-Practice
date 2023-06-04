let a = [1, 2, 3, 4, 3, 2, 1];

const map = new Map();

for (let value of a) {
    let tmp = map.get(value);

    if (tmp == null || tmp == undefined)
        map.set(value, true);
    else
        map.set(value, false);
}

console.log(map);

let uniqueValue;

for (let [key, value] of map) {
    if (value) {
        uniqueValue = key;
        break;
    }
}

console.log(uniqueValue);