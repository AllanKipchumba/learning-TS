const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  showResult ? console.log(phrase + result) : console.log(result);
};

const num1 = 5;
const num2 = 2.5;
const printResult = false;
const resultPhrase = "Result is ";

const result = add(num1, num2, printResult, resultPhrase);
// console.log(result);
