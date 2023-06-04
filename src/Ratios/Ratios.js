
let arr = [1, 1, 0, -1, -1];

const ratios = {
    positive: 0,
    negative: 0,
    zero: 0,
    calculateRatios: function (arr) {
        let posC = 0;
        let negC = 0
        let zeroC = 0;
       
        arr.forEach(item => {
            if (item > 0)
                ++posC;
            else if (item < 0)
                ++negC;
            else if (item == 0)
                ++zeroC;
        });

        this.positive = posC / arr.length;
        this.negative = negC / arr.length;
        this.zero = zeroC / arr.length;
    },
    print: function () {
        console.log(`${this.positive.toFixed(6)}`);
        console.log(`${this.negative.toFixed(6)}`);
        console.log(`${this.zero.toFixed(6)}`);
    }
}

ratios.calculateRatios(arr);

ratios.print();

// class Ratios {
//     #positive;
//     #negative;
//     #zero;
//     #arr;

//     constructor(arr) {
//         this.#positive = 0;
//         this.#negative = 0;
//         this.#zero = 0;
//         this.#arr = arr;
//     }

//     #getPositive () {
//         this.#positive = this.#arr.filter(p => p > 0).length / this.#arr.length;
//         return this.#positive.toFixed(6);
//     }

//     #getNegative () {
//         this.#negative = this.#arr.filter(p => p < 0).length / this.#arr.length;
//         return this.#negative.toFixed(6);
//     }

//     #getZero () {
//         this.#zero = this.#arr.filter(p => p == 0).length / this.#arr.length;
//         return this.#zero.toFixed(6);
//     }

//     print() {
//         console.log(this.#getPositive());
//         console.log(this.#getNegative());
//         console.log(this.#getZero());
//     }
// }

// const ratios = new Ratios(arr);

// ratios.print();
