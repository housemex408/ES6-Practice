
let arr = [1, 1, 0, -1, -1];

// const ratios = {
//     positive: 0,
//     negative: 0,
//     zero:0,
//     print: () => {
//         console.log(`${ratios.positive.toFixed(6)}`);
//         console.log(`${ratios.negative.toFixed(6)}`);
//         console.log(`${ratios.zero.toFixed(6)}`);
//     }
// }

// ratios.positive = arr.filter(p => p > 0).length / arr.length;
// ratios.negative = arr.filter(p => p < 0).length / arr.length;
// ratios.zero = arr.filter(p => p == 0).length / arr.length;

// ratios.print();

class Ratios {
    #positive;
    #negative;
    #zero;
    #arr;

    constructor(arr) {
        this.#positive = 0;
        this.#negative = 0;
        this.#zero = 0;
        this.#arr = arr;
    }

    #getPositive () {
        this.#positive = this.#arr.filter(p => p > 0).length / this.#arr.length;
        return this.#positive.toFixed(6);
    }

    #getNegative () {
        this.#negative = this.#arr.filter(p => p < 0).length / this.#arr.length;
        return this.#negative.toFixed(6);
    }

    #getZero () {
        this.#zero = this.#arr.filter(p => p == 0).length / this.#arr.length;
        return this.#zero.toFixed(6);
    }

    print() {
        console.log(this.#getPositive());
        console.log(this.#getNegative());
        console.log(this.#getZero());
    }
}

const ratios = new Ratios(arr);

ratios.print();
