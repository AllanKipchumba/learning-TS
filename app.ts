const add = (n1: number, n2: number) => {
  return n1 + n2;
};

//void function type > has no return value
const printResult = (num: number): void => console.log(`Result is ${num}`);

printResult(add(5, 2));

//function types
let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 8));

//function tyes and callbacks
const addHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};
