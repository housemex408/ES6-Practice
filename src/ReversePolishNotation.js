export default class ReversePolishNotation {
  constructor() {
    this.operations = new Map();
    this.operations.set('+', (o1, o2) => o1 + o2);
    this.operations.set('-', (o1, o2) => o1 - o2);
    this.operations.set('*', (o1, o2) => o1 * o2);
    this.operations.set('/', (o1, o2) => o1 / o2);

    this.operators = Array.from(this.operations.keys());
  }

  calculate(input) {
    let operands = [];

    for (let i = 0; i < input.length; i++) {
      let currentItem = input[i];

      if (this.isOperand(currentItem)) {
        operands.push(currentItem);
      }
      else {
        let rightOp = operands.pop();
        let leftOp = operands.pop();
        let operator = currentItem;

        let fn = this.operations.get(operator);
        let total = fn(leftOp, rightOp);
        operands.push(total);
      }
    }

    return operands.pop();
  }

  isOperand(item) {
    return !this.operators.includes(item);
  }

}
