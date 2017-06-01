class ReversePolishNotation
{
  constructor()
  {
    this.operations = new Map();
    this.operations.set('+', (o1, o2) => o1 + o2);
    this.operations.set('-', (o1, o2) => o1 - o2);
    this.operations.set('*', (o1, o2) => o1 * o2);
    this.operations.set('/', (o1, o2) => o1 / o2);

    this.operators = Array.from(this.operations.keys());
  }

  calculate(input)
  {
    let operands = [];
    let currentOperatorIndex = this.getIndexOfFirstOperator(input);

    input.forEach(item => {
      if(this.isOperand(item))
        operands.push(item);
    });

    for(let i = currentOperatorIndex; i < input.length; i++)
    {
      let operand1 = operands.pop();
      let operand2 = operands.pop();
      let operator = input[i];

      let fn = this.operations.get(operator);
      let total = fn(operand1, operand2);

      operands.push(total);
    }

    return operands.pop();
  }

  isOperand(item)
  {
    return !this.operators.includes(item);
  }

  getIndexOfFirstOperator(input)
  {
    let index = -1;

    for(let i = 0; i < input.length && index == -1; i++) {
      let currentOperator = this.operators[i];
      index = input.indexOf(currentOperator);
    }

    return index;
  }
}

module.exports = ReversePolishNotation;
