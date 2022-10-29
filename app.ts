const add = (n1: number, n2: number) => {
  return n1 + n2;
};

//void function type > has no return vaue
const printResult = (num: number): void => console.log(`Result is ${num}`);

printResult(add(5, 2));
