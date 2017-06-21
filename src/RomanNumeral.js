export default class RomanNumeral {
    constructor() {
        this.numerals = RomanNumeral.buildNumeralMap();
    }

    calculateRomanNumeral(input) {

        if (input === undefined || input === null)
            return -1;
        else if (!input.match(/[IVXLCDM]+/) || input.match(/.*[I]{4,}.*/))
            return -1;

        let result = 0;
        const inputLength = input.length;

        for (let i = 0; i < inputLength; i++) {
            if (inputLength == 1) {
                result = this.numerals.get(input.charAt(i));
            } else if (i + 1 < inputLength && input.charAt(i) === 'I' && input.charAt(i + 1) !== 'I') {
                result += (this.numerals.get(input.charAt(i + 1)) - this.numerals.get(input.charAt(i)));
                ++i;
            } else {
                result += this.numerals.get(input.charAt(i));
            }
        }

        return result;
    }

    static buildNumeralMap() {
        const map = new Map();
        map.set('I', 1);
        map.set('V', 5);
        map.set('X', 10);
        map.set('L', 50);
        map.set('C', 100);
        map.set('D', 500);
        map.set('M', 1000);

        return map;
    }
}
