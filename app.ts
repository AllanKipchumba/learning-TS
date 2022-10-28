const combine = (input1: number | string, input2: number | string) => {
  let result: number | string; //union > result can be type num or string
  typeof input1 === "number" && typeof input2 === "number"
    ? (result = input1 + input2)
    : (result = input1.toString() + input2.toString());
  return result;
};

const combineAges = combine(20, 21);
console.log(combineAges);

const combineNames = combine("allan", "kilavuka");
console.log(combineNames);
